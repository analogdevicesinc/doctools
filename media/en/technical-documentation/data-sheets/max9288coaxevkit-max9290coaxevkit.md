<!-- lastmod 2022-08-04 -->
## MAX9288/MAX9290 Evaluation Kit

## General Description

The  MAX9288/MAX9290 evaluation  kit  (EV  kit)  provides a proven design to evaluate the MAX9288 and MAX9290 high-bandwidth  gigabit  multimedia  serial  link  (GMSL) deserializers with spread spectrum and full-duplex control channel, with the use of a standard FAKRA coaxial cable. The EV kit also includes Windows Vista ® -, and Windows ® 7-compatible  software  that  provides  a  simple  graphical user interface (GUI) for exercising features of the device. The  EV  kit  comes  with  a  MAX9288  or  MAX9290  IC installed.

For complete GMSL evaluation, using a standard FAKRA coaxial cable, order the MAX9288/MAX9290 coax EV kit and  a  companion  serializer  board  (e.g.,  the  MAX9275/ MAX9279 coax EV kit referenced in this document). For testing with STP cable, also order the MAXCOAX2STPHSD adapter kit. Only one adapter kit is needed per pair of serializer and deserializer boards.

Note: In the following sections, the term serializer refers to the MAX9275 or MAX9279 ICs and the term deserializer refers to the MAX9288 or MAX9290 ICs. The term SerDes refers to serializer(s) and deserializer(s).

This document applies to both coax and STP EV kits. This document covers coax cables, but the information applies equally to STP cables.

Ordering Information appears at end of data sheet.

Figure 1. MAX9288/MAX9290 Evaluation Board Test Setup

<!-- image -->

Windows and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX9288/MAX9290

## Features

- Drives 4-Channel CSI-2 Output
- Windows Vista- and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

## MAX9288/MAX9290 EV Kit Files

| DESCRIPTION                      | DESCRIPTION                                |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files in your computer |
| MAXSerDesEV-N.EXE                | Graphical user interface (GUI) program     |

## Items Included in the EV Kit Package

| DESCRIPTION                                            |   QTY |
|--------------------------------------------------------|-------|
| MAX9288 coax EV kit board or MAX9290 coax EV kit board |     1 |
| 2m FAKRA coax cable assembly                           |     1 |
| USB cable                                              |     1 |

<!-- image -->

## MAX9288/MAX9290 Evaluation Kit

## Quick Start

This procedure applies to both coax and STP evaluation kits. The coax evaluation kit is referenced here.

## Required Equipment

- MAX9288/MAX9290 deserializer coax EV kit
- MAX9275/MAX9279 serializer coax EV kit
- 2m FAKRA cable assembly (included in the MAX9288/MAX9290 coax EV kit)
- &gt; 20MHz function generator
- Windows Vista or Windows 7 PC with a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding . Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Download and install the latest version of the EV kit software from www.maximintegrated.com .
- a. Search for the MAX9288.
- b. Select MAX9288 | Design Resources | Software | MAXSerDes-N and download the MAXSerDes-Nxxxx\_Install.zip file.
- c. Open the downloaded zip file and run MAXSerDes-Nxxxx\_Install.exe .
- d. The installation application downloads and installs the USB driver for the Nuvoton microcontroller. If the USB driver installation is not successful, install the appropriate USB driver for your computer, available at http://www.ftdichip.com/Drivers/VCP.htm .
- 2) Verify that jumpers on the deserializer board are in their default positions, as shown in Figure 12.
- 3) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 13.
- 4) Set up the system, as shown in Figure 1.
- 5) Power up the serializer board by connecting the power supply to the +5VIN/GND terminals on the serializer board.
- 6) Power up the deserializer board by connecting the USB cable between the PC's USB port and connector J10 on the deserializer board.
- 7) Connect the FAKRA cable from the OUT+ terminal on the serializer board to the IN+ terminal on the deserializer board.
- 8) Connect the pixel clock and function generator to the serializer EV kit board header's H1 PCLK\_IN pin.
- 9) Turn on the power supply and function generator.
- 10)  Verify that LED\_PWR on the serializer EV kit board lights up, indicating that the board is powered.
- 11)  Verify that the LOCK LED on the deserializer EV kit board illuminates, indicating that the link has been successfully established. If the LOCK LED is off or the ERR LED is on, consult the Troubleshooting section and fix the problem before continuing.
- 12)  Start the EV kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N
- 13)  In case an operating evaluation board with a Nuvoton microcontroller is not found, a window opens, warning as such (Figure 2). Press OK to continue and start the GUI anyway or press Cancel to terminate the application. Consult the Troubleshooting section and fix the problem before continuing.
- 14)  When an operating Nuvoton microcontroller is found, the GUI checks the firmware version in the microcon -troller and prompts the user to update. Press OK to continue working, or press Cancel to stop the applications (Figure 3).

Figure 2. MAXSerDesEV-N EV Kit Software: Warning! (Nuovoton Microcontroller is Not Detected!)

<!-- image -->

## Evaluates: MAX9288/MAX9290

Figure 3. MAXSerDesEV-N EV Kit Software: Warning! (Microcontroller Firmware is Not the Latest Version)

<!-- image -->

│

## MAX9288/MAX9290 Evaluation Kit

- 15)  The Configuration Settings window appears, as shown in Figure 4. The GUI automatically scans all possible slave addresses and identifies the connected devices (DUTs) based on the Device IDs read from the DUTs' internal registers.
- 16)  Once the Configuration Settings window is open, press the Identify Devices button to search for connected devices. Once the devices are identified, the corresponding configuration jumpers are displayed to help users configure the serializer and deserializer. Only Link Type and Device Address selections on Configuration Setting window affect the EV kit operation. Other items are for user reference only.
- 17)  Press the Connect button to open the Evaluation Kit window and the DUTs' register maps (Figure 5). The GUI reads all the SerDes' internal registers and updates the corresponding tabs.
- 18)  Press the Read All MAX9279 button in the Serializer group box to read all serializer registers.
- 19)  Press the Deserializer tab and then press Read All MAX9290 in the Deserializer group box to read all deserializer registers.
- 20)  Select any of the other tabs to evaluate other functions of the SerDes.

Figure 4. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (Shown with MAX9279, MAX9290 EV Kits Connected)

<!-- image -->

│

## Detailed Description of Software

To start the MAX9288/MAX9290 EV kit GUI, select Start |  Programs  |  Maxim  Integrated  |  MAXSerDesEV-N  | MAXSerDesEV-N .

## Configuration Settings Window

The Configuration  Settings window  is  the  first  window that opens after successful program launch. It allows the user to specify serializer and deserializer board setup and mode of operation (Figure 4).

## Controller Group Box

From  the Controller group  box,  select Coax or STP from the Link  Type drop-down  list, I2C or UART from the Bus drop-down list, and click on either the Serializer or Deserializer radio  button  to  determine  which  device should connect to the USB controller. Upon changing any of  these  parameters,  the  selection  in  the  jumper  listing highlights  automatically,  prompting  the  user  to  manually make the corresponding jumper-position changes on the EV kit boards.

## Serializer Jumper Selection Block

The Serializer Jumper Selection block lists the jumpers on  the  evaluation  board  of  the  selected Device ID and shows the correct shunt positions based on the conditions selected in the Controller block.

## Deserializer Jumper Selection Block

The Deserializer Jumper Selection block lists the jumpers on the evaluation board of the selected Device ID and shows the correct shunt positions based on the conditions selected in the Controller block.

Figure  12  shows  jumper  setting  on  the  MAX9288/ MAX9290  PCB  for  coax  cable  and  I 2 C  communication with  a  USB  cable  connected  to  the  deserializer  board. Refer  to  the  MAX9288/MAX9290  IC  data  sheet  for detailed  configuration  information.  See Table  1  for  the deserializer jumper settings and descriptions.

## Identify Devices Button

The Identify  Devices button  causes  the  GUI  to  scan the system and search for slave addresses on the bus. Upon successful communication, it reads the Device ID register  from  the  DUT(s)  and  displays  the  corresponding  jumper  lists  on  the Serializer  Jumper  Selection and Deserializer  Jumper  Selection blocks.  It  is  also

## Evaluates: MAX9288/MAX9290

possible to manually select a device from the Device ID drop-down list and manually change slave address in the Device Address edit box. It is a good practice to utilize the Identify  Devices button  and  verify  communication with the DUTs before attempting to Connect .

To enable the control channel and communicate with the serializer  without  applying  PCLK,  select Enable CLINK Identify and then press the Connect button.

The  following  sections  provide  a  brief  overview  of  the function buttons on the Configuration Settings window.

## Connect Button

The Connect button  opens  up  the Evaluation  Kit window. The GUI reads the SerDes registers and updates on-screen register maps for both. Successful communication is indicated by green LED indicators. The LED indicator's color glow red in case of a communication problem.

## Cancel - Do No Connect Button

The Cancel  -  Do  Not  Connect button  opens  the Evaluation  Kit window  without  attempting  to  connect to  the  microcontroller.  Although  there  is  no  communication  with  the  microcontroller,  all  functions  and  tabs corresponding  to the selected Device  IDs on the Evaluation Kit window become active once there.

## Table 1. Deserializer Jumper Settings and Descriptions

| JUMPER*       | SIGNAL         | DEFAULT POSITION   | FUNCTION                                                                                                                                                    |
|---------------|----------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AVDD18 (JU30) | AVDD 1.8V      | INT*               | AVDD 1.8V supplied internally                                                                                                                               |
| AVDD18 (JU30) | AVDD 1.8V      | EXT                | AVDD 1.8V supplied through the AVDD18 terminal                                                                                                              |
| AVDD33 (JU32) | AVDD 3.3V      | INT*               | AVDD 3.3V supplied internally                                                                                                                               |
| AVDD33 (JU32) | AVDD 3.3V      | EXT                | AVDD 3.3V supplied through the AVDD33 terminal                                                                                                              |
| DVDD18 (JU31) | JU_DVDD        | INT*               | DVDD 1.8V supplied internally                                                                                                                               |
| DVDD18 (JU31) | JU_DVDD        | EXT                | DVDD 1.8V supplied through the DVDD18 terminal                                                                                                              |
| IOVDD (JU33)  | IOVDD          | 3.3V*              | IOVDD supplied internally                                                                                                                                   |
| IOVDD (JU33)  | IOVDD          | 2.5V               | IOVDD supplied internally                                                                                                                                   |
| IOVDD (JU33)  | IOVDD          | 1.8V               | IOVDD supplied internally                                                                                                                                   |
| IOVDD (JU33)  | IOVDD          | EXT                | IOVDD supplied through the IOVDD terminal                                                                                                                   |
| J6            | IOVDD          | Short*             | Measure current drawn by U1 through the IOVDD pin                                                                                                           |
| J6            | JU_VDDIO       | Short*             | VDDIO applied to U1                                                                                                                                         |
| J6            | JU_VDDIO       | Open               | Connect amp meter to measure current drawn by U1 through the IOVDD pin                                                                                      |
| JU3           | PCB main power | USB*               | 5V supplied from the USB port                                                                                                                               |
| JU3           | PCB main power | REG                | 5V supplied from the external supply applied on the +5V terminal                                                                                            |
| JU3           | PCB main power | +5VN               | Not an option in the rev P2 PCB. Warning: Power applied on the +5VIN ter- minals is directly applied to the board circuitry fighting with selection on JU3. |

│

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER*       | SIGNAL                 | DEFAULT POSITION   | FUNCTION                                                                                                                                          |
|---------------|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| BWS           | JU_BWS                 | L*                 | PCLKIN > 12.5MHz, 32-bit mode                                                                                                                     |
| BWS           | JU_BWS                 | H                  | PCLKIN > 12.5MHz, 32-bit mode                                                                                                                     |
| BWS           | JU_BWS                 | Open               | PCLKIN > 33.33MHz 27-bit high bandwidth                                                                                                           |
| I2CSEL (JU18) | I2CSEL                 | L*                 | UART-to-UART or UART-to-I 2 C mode                                                                                                                |
| I2CSEL (JU18) | I2CSEL                 | H                  | I 2 C-to-I 2 C mode                                                                                                                               |
| GPI (JU24)    | GPI                    | L*                 | GPI pin pulled low                                                                                                                                |
| GPI (JU24)    | GPI                    | H                  | GPI pin pulled high                                                                                                                               |
| CX_TP (JU34)  | CXTP                   | L                  | STP Link (Table 5)                                                                                                                                |
| CX_TP (JU34)  | CXTP                   | H*                 | Coax+ Link (Table 5)                                                                                                                              |
| CDS           | CDS                    | L*                 | µC is connected at the serializer side                                                                                                            |
| CDS           | CDS                    | H                  | µC is connected at the deserializer                                                                                                               |
| HIM           | HIM                    | L*                 | Reveres channel in legacy mode                                                                                                                    |
| HIM           | HIM                    | H                  | Reveres channel in high immunity mode                                                                                                             |
| MS            | MS                     | L*                 | Base mode                                                                                                                                         |
| MS            | MS                     | H                  | Bypass mode                                                                                                                                       |
| PWDN          | PWDN                   | H*                 | Deserializer is powered on                                                                                                                        |
| PWDN          | PWDN                   | L                  | Deserializer is powered off                                                                                                                       |
| HS_RX         | RX/SDA                 | RX*                | UART-to-UART or UART-to-I 2 C mode                                                                                                                |
| HS_RX         | RX/SDA                 | SDA                | I 2 C-to-I 2 C mode                                                                                                                               |
| HS_RX         | RX/SDA                 | RX*                | UART-to-UART or UART-to-I 2 C mode                                                                                                                |
| HS_RX         | RX/SDA                 | SDA                | I 2 C-to-I 2 C mode                                                                                                                               |
| GPIO0 (JU16)  | GPIO0                  | L                  | GPIO0 pin is forced low                                                                                                                           |
| GPIO0 (JU16)  | GPIO0                  | H                  | GPIO0 pin is forced high                                                                                                                          |
| GPIO0 (JU16)  | GPIO0                  | Open*              | U1 drives GPIO0 pin                                                                                                                               |
| GPIO1 (JU17)  | GPIO1                  | L                  | GPIO1 pin is forced low                                                                                                                           |
| GPIO1 (JU17)  | GPIO1                  | H                  | GPIO1 pin is forced high                                                                                                                          |
| GPIO1 (JU17)  | GPIO1                  | Open*              | U1 drives GPIO1 pin                                                                                                                               |
| ADD0 (JU19)   | ADD0/CNTL0             | L*                 | See Table 5                                                                                                                                       |
| ADD0 (JU19)   | ADD0/CNTL0             | H                  | See Table 5                                                                                                                                       |
| ADD1 (JU20)   | ADD1/CNTL3             | L*                 | See Table 5                                                                                                                                       |
| ADD1 (JU20)   | ADD1/CNTL3             | H                  | See Table 5                                                                                                                                       |
| ADD2 (JU23)   | ADD2/CNTL2             | L*                 | See Table 5                                                                                                                                       |
| ADD2 (JU23)   | ADD2/CNTL2             | H                  | See Table 5                                                                                                                                       |
| J11           | VDD_REF                | Short*             | U8 and U37 level shifters supply is from internal 3.3V.                                                                                           |
| J11           | VDD_REF                | Open               | U8 and U37 level shifters supply is applied externally through J12-1.                                                                             |
| J12           | External µC connection | -                  | Apply external µC RX/SDA, TX/SCL, GND to pins as marked. The logic level can be selected from internal 3.3V (J11) or applied externally on pin 1. |

Table 1. Jumper Settings/Descriptions (continued)

| JUMPER*   | SIGNAL                       | DEFAULT POSITION   | FUNCTION                                                                               |
|-----------|------------------------------|--------------------|----------------------------------------------------------------------------------------|
| J9        | U6 1st time programming pins | -                  | Factory use only                                                                       |
| J3        | LMN1                         | Open               | Negative input (IN-) line fault monitor circuit on the serializer, J1 must be short.   |
| J3        | LMN1                         | Short*             | Negative input (IN-) line fault monitor circuit on the deserializer, J1 must be open.  |
| J1        | LMN1                         | Open*              | Negative input (IN-) line fault monitor circuit on the deserializer, J3 must be short. |
| J1        | LMN1                         | Short              | Negative input (IN-) line fault monitor circuit on the serializer, J3 must be open.    |
| J8        |                              | Open               | Positive input (IN+) line fault monitor circuit on the serializer, J1 must be short.   |
| J8        |                              | Short*             | Positive input (IN+) line fault monitor circuit on the deserializer, J1 must be open.  |
| J2        |                              | Open*              | Positive input (IN+) line fault monitor circuit on the deserializer, J3 must be short. |
| J2        |                              | Short              | Positive input (IN+) line fault monitor circuit on the serializer, J3 must be open.    |

Table 2. Device Address Selection

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

│

## MAX9288/MAX9290 Evaluation Kit

## Evaluation Kit Window

The Evaluation Kit window provides access to all internal registers and functions of the DUTs by means of reading and writing registers through different tabs to allow user to evaluate various functions of the serializer and deserializer.

The Read All button updates the serializer and deserializer on screen register maps by reading the DUTs internal registers.

The Serializer group box provides pushbuttons to update the serializer's register map from the DUT using the Read All MAX9279 button, or update from a previously saved file  using  the Load button  or  save  the  existing  register values into a file using the Save button.

The Deserializer group  box  provides  pushbuttons  to update  the  deserializer's  register  map  from  the  DUT using  the Read All MAX9290 button,  or  update  from  a previously saved file using the Load button or save the existing register values into a file using the Save button.

## Evaluates: MAX9288/MAX9290

The Wake Up button applies the register write sequence described in the respective SerDes IC data sheet to wake up the DUTs from sleep mode.

The Open Configuration button returns the control to the Configuration Settings window.

The following sections describe the tabs available on the Evaluation Kit window.

## MAX9279 Ser Tab

The MAX9279 Ser tab  (Figure  5)  lists  the  serializer  registers' bit maps. Read and Write buttons in each register group box allow access to each bit, or group of bits, that specify a function or condition, as defined in the serializer IC data sheet. The color of the small LED indicator next to  the Read/Write buttons  indicates  the  communication status.  Red  indicates  failed  communication  and  green indicates successful communication.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9279 Serializer Tab) Shown with MAX9279, MAX9290 EV Kits Connected

<!-- image -->

│

## MAX9288/MAX9290 Evaluation Kit

## MAX9290 Des Tab

The MAX9290 Des tab (Figure 6) lists the deserializer's registers bit maps. The Read and Write buttons in each register group box allows access to each bit, or group of bits, that specify a function or condition as defined in the MAX9288/MAX9290 IC data sheet. The color of the small LED indicator  next  to  the Read/Write buttons  indicates the  communication status. Red indicates failed communication, and green indicates successful communication.

Evaluates: MAX9288/MAX9290

## Additional Features Tab

The Additional  Features tab (Figure 7) provides pushbuttons for specific functions that connected devices can perform. By pressing a button, a window opens and allows the specific function to be executed. Function but -tons that are not supported by the selected devices are grayed out.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX9290 Deserializer Tab) Shown with MAX9279, MAX9290 EV Kits Connected

<!-- image -->

│

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab) Shown with MAX9279, MAX9290 EV Kits Connected

<!-- image -->

## MAX9288/MAX9290 Evaluation Kit

## Access Lookup Table Button

The Access  Lookup  Table button  provides  access  to the Lookup Tables (LUTs) of the deserializer (Figure 8). Use this function to program/view/edit the LUT settings of the red, green, and blue colors for color translation. LUT content edits can be performed on the entire 256 bytes of all three colors, on an individual color table, or on an individual pixel of any color table. The LUT contents can be saved in a .csv file format for future reference or to be used as a template. Also, LUT contents can be uploaded from  a  valid  existing  file.  A  sample  LUT  content  file  is included in the EV kit software package.

## Evaluates: MAX9288/MAX9290

## PRBS Test Button

Press the Show PRBS Test button (Figure 9) to perform the  PRBS  test.  Note  that  this  button  toggles  between Show  PRBS  Test and Hide  PRBS  Test .  Enter  a  test duration  (maximum  32,767s  =  9.1hrs)  in  the Duration edit box and press the Start button to begin the test. At completion of the test, the number of bit errors are read from  the  PRBSERR register  and  reported  in  the PRBS Error Counter box.

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Lookup Table Window)

<!-- image -->

│

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab with PRBS Test Window Expanded) Shown with MAX9279, MAX9290 EV Kits Connected

<!-- image -->

│

## MAX9288/MAX9290 Evaluation Kit

## Log\Low Level Tab

The Log\Low  Level tab  (Figure  10)  logs  all  activities between the GUI and DUTs.

The Register Access group  box  allows Read or Write of specified slave and register addresses. Use the Send String  to  EVKIT button  to  communicate  with  devices that are not register based (such as the MAX7324). The SerDes Baud Rate (I2C and Uart) drop-down list  sets the  communications baud rate. Note that the baud rate should be changed in small increments/decrements (one step change is forced by the GUI).

## Evaluates: MAX9288/MAX9290

## HDCP Tab

The  HDCP  tab  (Figure  11)  displays  the  HDCP  registers of both  the  serializer  and  deserializer,  listed  side-byside  with Read and Write buttons  for  each  register. The Authenticate and Enable  Encryption pushbuttons initiate the HDCP verification process and at the end of the operation, the color of the LED indicator next to the buttons indicates success or failure of the function.

Note: This tab is only functional for HDCP-capable DUTs.

Figure 10. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log\Low Level Tab) Shown with MAX9279 and MAX9290 EV Kits Connected

<!-- image -->

│

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (HDCP Tab) Shown with MAX9279 and MAX9290 EV Kits Connected

<!-- image -->

## Detailed Description of Firmware

The Nuvoton microcontroller (U12) runs a custom firmware that ensures reliable communication between the PC and DUTs. The firmware records 9-bit even-parity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the DUTs is immediately relayed to the USB port.

## How to Update Firmware

To  update  the  Nuvoton  microcontroller  firmware,  follow the  instructions  in  the  Updating  MAXSerDesEV-N  firmware.PDF file, which is available in the "...\Program Files\ Maxim  Integrated\MAXSerDesEV-N\Firmware  Update" folder.

## Detailed Description of Hardware

The MAX9288/MAX9290 coax EV kit provides a proven  design  and  layout  for  the  MAX9288/MAX9290 GMSL  deserializers,  designed  for  a  standard  HDMI connector  input  and  a  FAKRA  coaxial  cable  serialized output.  On-board  level  translators  and  an  easy-to-use USB-PC connection are included with the EV kit.

The  MAX9288/MAX9290  coax  EV  kit  board  comprises three principal functional blocks:

- Power-supply block
- MAX9288/MAX9290 application circuit block
- Microcontrollers (U6-U10) block

## On-Board Controller

The microcontroller on the EV kit board provides the UART and I 2 C interface (through U6 and U10) that communicates with both the SerDes boards when they are powered on and properly configured.

## Externally Applied Controller

To  use  the  EV  kit  with  an  externally  applied  controller, remove  shunts  from  the  JU5  header  and  connect  the TX/SCL signal from the external controller to the middle pin  of  the  JU5  header. Also  remove  the  shunt  from  the JU6  header  and  connect  the  RX/SDA  signal  from  the external  controller  to  the  middle  pin  of  the  JU6  header. Connect the logic level of the external controller (VDD) to the J12.1 pin (next to the SW122 switch) labeled VREF and connect the ground signal of the external controller to the GND pin on the J12.3 labeled GND.

Refer to the MAX9288/MAX9290 IC data sheet for details on read/write data formats.

## Power Supplies

On-board LDO regulators (U2-U5) generate the various voltage  levels  required  to  operate  the  EV  kit,  including voltage  levels  required  for  the  Toshiba  CSI-2-to-parallel bridge-chip board from a single power source applied to the  board.  There  are  three  options  to  power  the  board (jumpers  VDD  and  JU3  select  among  the  three  power sources):

- USB port (default)
- 12V AC adapter
- 5V power supply applied on the +5VIN terminals

To test with voltage levels different from what is generated by  the  board  regulators,  move  the  corresponding  shunt on headers AVDD18 (JU30), DVDD18 (JU31), RVDD18 (JU9), IOVDD (JU33), HVDD33 (JU32), PLLVDD33 (JU8), and XVDD (JU7) from INT to EXT positions and apply the external voltage to the corresponding wire-loop terminal.

## Troubleshooting

Possible causes of board test failure include:

- Coax cable not properly connected between OUT+ of the serializer and IN+ of the deserializer: Reconnect and reverify.
- PCLKIN not applied (e.g., the FG output is disabled): Verify signal at the pins on the board.
- PCLKIN, function generator output not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on deserializer board: Reverify.
- Incorrect jumper  setting  on  the  serializer  board: Reverify.
- Bus selection on GUI is not consistent with jumpers' position on the boards: Check and verify that the USB cable has been properly connected.
- USB  port  has  locked  up:  Exit  the  application/GUI, remove the USB cable from the board and reinsert, then relaunch the GUI.
- Nuvoton  μC  is  not  communicating:  Exit  the  applica -tion/GUI, remove the USB cable from the board and reinsert, then relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer  board  is  faulty:  Try  a  different  board  (if available).

## Evaluates: MAX9288/MAX9290 MAX9288/MAX9290 Evaluation Kit

Figure 12. MAX9288/MAX9290 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

│

Figure 13. MAX9275/MAX9279 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

## MAX9288/MAX9290 EV Kit Bill of Materials

| REF DESIGNATOR                                                                                        |   QTY | DESCRIPTION                                             | MFG. PART NO.         |
|-------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------|-----------------------|
| +5VIN GND GND HS_AVDD18 HS_AVDD33 HS_DVDD18 HS_IOVDD                                                  |     7 | Wire Loop 297 SILVER 100 FT Wire Loop 297 SILVER 100 FT | 9020 Buss / 297 SV005 |
| C1 C3 C5 C8 C10-11 C13 C23 C25 C47 C59 C91-92 C101-104 C108 C110 C114 C117 C120-121 C124-125 C131-132 |    27 | CAP CER 0.1UF 25V 10% X7R 0603                          | GRM155R61C104K        |
| C2 C6-7 C34 C109                                                                                      |     5 | CAP CER 10UF 16V 20% X7R 1206                           | GRM31CR71C106K        |
| C4 C9 C12 C18 C20 C21 C118 C133                                                                       |     8 | CAP CER 10UF 16V 20% JB 0603                            | JMK107BJ106MA-T       |
| C14-15                                                                                                |     2 | CAP CER 0.22UF 50V 10% X7R 0805                         | CGJ4J2X7R1H224K125AA  |
| C16 C17 C19 C58 C66-71 C80-82 C85 C89 C99 C115- 116                                                   |    18 | CAP CER 4.7UF 6.3V 20% X5R 0603                         | ECJ-1VB0J475K         |
| C42-43 C53 C64 C86 C93 C100                                                                           |     7 | CAP CER 3.3UF 4.0V X5R 0402                             | AMK105BJ335MV-F       |
| C45-46 C48-52 C54 C62                                                                                 |     9 | CAP CER 0.1UF 16V 10% X7R 0402                          | GRM155R61A104K        |
| C65 C72-79 C119                                                                                       |    10 | CAP CER 1000PF 50V 10% X7R 0402                         | C1005X7R1H102K        |
| C87-88 C94 C97-98 C105 C111-113                                                                       |     9 | CAP CER 0.1UF 10V 10% X5R 0201                          | GRM033R61A104K        |
| C96                                                                                                   |     1 | CAP CER 100UF 6.3V Y5V 1210                             | GRM32EF50J107ZE20L    |
| C106-107 C122-123                                                                                     |     4 | CAP CER 22PF 50V 5% NP0 0603                            | C1608C0G1H220J        |
| FB3 FB5-15 FB19                                                                                       |    13 | FILTER CHIP 120 OHM 3A 0603                             | BLM18SG121TN1D        |
| H1                                                                                                    |     1 | CONN HEADER 72POS .100 DUAL TIN                         | PEC36DAAN             |
| IN+ IN-                                                                                               |     2 | FAKRA - HF RIGHT ANGLE PLUG                             | PE44651Z              |
| J1-6 J8                                                                                               |     7 | 2-Pin Male (cut-to-fit) Header .1 Center                | 929647-09-36-I        |
| J7                                                                                                    |     1 | CONN PWR JACK 2.1X5.5MM HIGH CUR                        | PJ-002AH              |
| J9 J12                                                                                                |     2 | 4-Pin Male (cut-to-fit) Header .1 Center                | 929647-09-36-I        |
| J10                                                                                                   |     1 | CONN MINI B USB R/A SMD                                 | 1734035-1             |
| J14                                                                                                   |     1 | DO NOT POPULATE 4-Pin Male (cut-to-fit) Header Center   | 929647-09-36-I        |
| JU2-3 JU5-7 JU15-20 JU22-32 JU34 JU_USR1-3 JU_VDD_REF                                                 |    27 | 3-Pin Male (cut-to-fit) Header .1 Center                | 929647-09-36-I        |
| JU33                                                                                                  |     1 | 5-Pin Male (cut-to-fit) Header .1 Center                | 929647-09-36-I        |
| LED11-15 LED17-18 LED20-21 LED_PWR LED_UC                                                             |    11 | LED 650NM RED WTR CLR 0805 SMD                          | SML-210VTT86          |
| LED10 LED_TOCONFIG                                                                                    |     2 | LED 570NM GREEN WTR CLR 0805 SMD                        | SML-210MTT86          |
| R1 R3                                                                                                 |     2 | RES 49.9K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF4992V         |
| R2 R26 R59 R85 R93                                                                                    |     5 | RES 24.9K OHM 1/10W 1% 0603 SMD                         | CRCW060324K9FKEA      |
| R4 R12 R55 R57 R107-108 R112                                                                          |     9 | RES 10K OHM 1/10W 5% 0603 SMD                           | ERJ-3GEYJ103V         |
| R5 R22 R25 R38                                                                                        |     4 | RES 10 OHM 1/10W 5% 0603 SMD                            | ERJ-3GEYJ270V         |
| R6 R11                                                                                                |     2 | RES 4.99K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF4991V         |
| R7 R19                                                                                                |     2 | RES 45.3K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF4532V         |
| R8-10 R13-15 R18 R24 R29 R39 R34-37 R42 R44 R48 R50 R58 R62-64 R69 R77 R113                           |    25 | RES 1K OHM 1/10W 1% 0603 SMD                            | CR0603-FX-1001ELF     |
| R16                                                                                                   |     1 | RES 41.2K OHM 1/10W 1% 0603 SMD                         | CRCW060341K2FKEA      |
| R17 R61 R66                                                                                           |     1 | RES 4.7K OHM 1/10W 5% 0603 SMD                          | ERJ-3GEYJ472V         |
| R21                                                                                                   |     1 | RES 30.1K OHM 1/10W 1% 0603 SMD                         | ERJ-3EKF3012V         |

│

## MAX9288/MAX9290 EV Kit Bill of Materials (continued)

| REF DESIGNATOR                                                                  |   QTY | DESCRIPTION                                                                                  | MFG. PART NO.                                 |
|---------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------|-----------------------------------------------|
| R27 R101-102                                                                    |     5 | RES 27 OHM 1/10W 5% 0603 SMD                                                                 | ERJ-3GEYJ270V                                 |
| R43 R45 R49 R54                                                                 |     4 | RES 30.0K OHM 1/10W 1% 0603 SMD                                                              | CRCW060330K0FKEA                              |
| R60                                                                             |     1 | RES 0.0 OHM 1/10W 0201 SMD                                                                   | ERJ-1GN0R00C                                  |
| R67-68 R70-73 R78-79 R81                                                        |     9 | RES 0.0 OHM 1/10W 0201 SMD                                                                   | ERJ-1GN0R00C                                  |
| R94                                                                             |     1 | RES 240 OHM 1/10W 5% 0603 SMD                                                                | ERJ-3GEYJ241V                                 |
| R95                                                                             |     1 | Thick Film Resistors - SMD 1/10watt 715ohms 1%                                               | CRCW0603715RFKEA                              |
| R103                                                                            |     1 | RES 1.5K OHM 1/10W 1% 0603 SMD                                                               | ERJ-3GEYJ152V                                 |
| R104                                                                            |     1 | RES 470 OHM 1/10W 5% 0603 SMD                                                                | ERJ-3GEYJ471V                                 |
| SW122                                                                           |     1 | SWITCH TACTILE SPST-NO 0.02A 15V                                                             | EVQ-PAD09K                                    |
| TP5-6 TP_ADD0-2 TP_ERR TP_GPIO0-1 TP_HIM TP_INTOUT TP_LFLT TP_LOCK TP_RES TP_WS |    14 | TEST POINT PC MINI .040D RED"                                                                | 5000K-ND                                      |
| U1                                                                              |     1 | 3.12 Gbps GMSL Deserializer with CSI-2 Output and Programmable Coax or STP Cable Input       | MAX9288GTM/V+                                 |
| U1                                                                              |     1 | 3.12 Gbps GMSL Deserializer with CSI-2 Output and Programmable Coax or STP Cable Input       | MAX9288GTM+                                   |
| U1                                                                              |     1 | 3.12 Gbps GMSL Deserializer with CSI-2 Output and Programmable Coax or STP Cable Input, HDCP | MAX9290GTM/V+                                 |
| U1                                                                              |     1 | 3.12 Gbps GMSL Deserializer with CSI-2 Output and Programmable Coax or STP Cable Input, HDCP | MAX9290GTM+                                   |
| U10                                                                             |     1 | IC USB FS SERIAL UART 32-LQFP                                                                | FT232BL-REEL                                  |
| U2-5                                                                            |     4 | 500mA Low Dropout Linear Regulator                                                           | MAX1792EUA33                                  |
| U36                                                                             |     1 | Linear Regulators - Standard 3Pin 1.5A Adj Vltg Reg                                          | LM317KTTR                                     |
| U6                                                                              |     1 | NUC140_LQFP_100                                                                              | NUC140VE3CN or NUC130VE3CN                    |
| U7                                                                              |     1 | TOSHIBA-TC358746XBG Functional Specification                                                 | TC358746XBG                                   |
| U8 U37                                                                          |     2 | ±15kV ESD-Protected, 1A, 16Mbps, Dual/Quad                                                   | MAX3378EEUD+                                  |
| U15 U21-22 U24-26 U28-29 U31-32                                                 |    10 | IC 2-IN EXCL-OR GATE 5TSSOP                                                                  | 74LVC1G86GW                                   |
| X1                                                                              |     1 | MAXIM LOGO                                                                                   |                                               |
| X2-5                                                                            |     4 | Mounting Hole                                                                                | N/A                                           |
| Y1                                                                              |     1 | CRYSTAL 6.0MHZ 20PF SMD                                                                      | FQ1045A-6                                     |
| Y2                                                                              |     1 | Crystals12MHz 30ppm -20C +70C 631-1013-1-ND                                                  | ABLS-14.7456MHZ-B4-T                          |
| Y4                                                                              |     1 | OSC MEMS 19.200 MHZ SMD                                                                      | ASEMB-19.200MHZ-LY-T                          |
| -                                                                               |     1 | PCB: MAX9288/MAX9290COAX EVKIT                                                               | MAXIM                                         |
| -                                                                               |     1 | Cable, Coax, FAKRA Cable (2m)                                                                | Rosenberger North America 02E-59K1-59K1-02000 |
| -                                                                               |     1 | CABLE, USB-A MALE to USB-mini MALE 6' BEIGE                                                  |                                               |

│

## MAX9288/MAX9290 EV Kit Schematics

<!-- image -->

## MAX9288/MAX9290 EV Kit Schematics (continued)

<!-- image -->

## MAX9288/MAX9290 EV Kit Schematics (continued)

?

<!-- image -->

│

## MAX9288/MAX9290 EV Kit Schematics (continued)

<!-- image -->

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams

MAX9288/MAX9290 EV Kit-PCB01

<!-- image -->

│

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams (continued)

MAX9288/MAX9290 EV Kit-PCB02

<!-- image -->

│

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX9288/MAX9290 EV Kit-PCB03

│

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams (continued)

MAX9288/MAX9290 EV Kit-PCB04

<!-- image -->

│

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams (continued)

MAX9288/MAX9290 EV Kit-PCB05

<!-- image -->

│

## MAX9288/MAX9290 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX9288/MAX9290 EV Kit-PCB06

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX9288 COAXEVKIT# | EV Kit      |
| MAX9290 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

# Denotes RoHS compliant.

Note: The MAX9288 and MAX9290 deserializer coax EV kits are normally ordered with a companion serializer board:

-  MAX9275A coax EV kit (MAX9275ACOAXEVKIT#), or
-  MAX9279A coax EV kit (MAX9279ACOAXEVKIT#)

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX9288/MAX9290