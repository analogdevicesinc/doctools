<!-- lastmod 2022-08-02 -->
## MAX96701 Evaluation Kit

## General Description

The  MAX96701  coax  evaluation  kit  (EV  kit)  provides  a proven design to evaluate the MAX96701 high-bandwidth gigabit  multimedia  serial  link  (GMSL)  serializer  with spread spectrum and full-duplex control channel, through the  use  of  a  standard  FAKRA  coax  or  STP  cable.  The EV  kit  also  includes  Windows  Vista ® -  and  Windows ® 7-compatible  software  that  provides  a  simple  graphical user interface (GUI) for exercising features of the device.

For complete GMSL evaluation using a standard FAKRA coax cable, order the MAX96701 EV kit and a companion deserializer  board  (the  MAX96700  EV  kit  is  referenced in  this  document). For testing with STP cable, also order the MAXCOAX2STP-HSD adapter kit and refer to its data sheet. Only one adapter kit is required per link (connecting the serializer and deserializer boards).

Note: In the following sections, MAX96701 and the term 'serializer' refer to the MAX96701 IC and MAX96700 and the term 'deserializer' refer to the MAX96700 IC.

Note: This document applies to both coax and STP EV kits. This document covers coax cable links, but the information provided applies equally to STP cable links.

Ordering Information appears at end of data sheet.

Windows and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Accepts 14-Bit Parallel Input Data and Outputs GMSL Serial Data through FAKRA Connectors
- Power-over-Coax Capable
- Windows Vista- and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

## Items Included in the EV Kit Package

| DECRIPTION                 |   QTY |
|----------------------------|-------|
| MAX96701 coax EV kit board |     1 |
| USB cable                  |     1 |

## MAX96701 EV Kit Files

| FILE                             | DECRIPTION                                 |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files on your computer |
| MAXSerDesEV-N.EXE                | Graphical user interface (GUI) program     |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

<!-- image -->

Evaluates: MAX96701 with

Coax or STP Cable

## MAX96701 Evaluation Kit

## Quick Start

## Required Equipment

- MAX96701 serializer EV kit
- MAX96700 deserializer EV kit
- 2m FAKRA cable assembly (included with the deserializer EV kit)
- &gt; 20MHz function generator
- PC with Windows Vista or Windows 7 and a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items from the EV kit  software.  Text  in bold  and  underlined refers  to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com\EVKitsoftware to download and install the latest version of the EV kit software:
- Double-click  on  GMSL  SerDes  Evaluation  Kit Software-Nuvoton.
- Download the MAXSerDesEV-N\_Vx\_x\_x\_x\_ Install.ZIP file (8MB).
- Extract and install the MAXSerDesEV-N\_ Vx\_x\_x\_x\_Install.EXE  file.  The  installation  application  installs  the  USB  driver.  If  the  USB  driver installation  is  not  successful,  install  the  appropriate  USB  driver  for  your  computer  by  visiting www.ftdichip.com/Drivers/VCP.htm.
- 2) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 15.
- 3) Verify that jumpers on the deserializer board are in their default positions, as shown in Figure 16.
- 4) Set up the system, as shown in Figure 1.
- 5) Connect the FAKRA cable from the OUT+ terminal on the serializer  board  to  the  IN0+  terminal  on  the deserializer board.
- 6) Connect the USB cable between the PC and USB port on the Nuvoton microcontroller daughter board on the serializer board.
- 7) Verify that LED\_PWR on the deserializer board lights up, indicating that the deserializer board has power.

## Evaluates: MAX96701 with Coax or STP Cable

- 8) Verify  that  LED\_PWR on the serializer board lights up,  indicating  that  the  serializer  board  has  power. Both serializer and deserializer have a power-overcoax (POC) circuit that is active by default.
- 9) Verify  that  LOCK\_LED  on  the  deserializer  board lights  up,  indicating  that  the  link  has  been  successfully established. If the LOCK\_LED  is  off, or ERR\_LED  is  on,  go to the Troubleshooting section and fix the problem before continuing. Note: If  you  are  working  with  an  earlier  version  of the deserializer IC, you must write value of 0xA6 to register  address  0x9b  at  slave  address  0x90  to enable the control channel. In the current revision of the IC, this step is no longer needed.
- 10)  Start the EV  kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .
- 11)  The Configuration  Settings window  opens  (see Figure  2)  and  the  GUI  automatically  searches  for any active listener in both I 2 C and UART mode and identifies a valid GMSL product. Once a valid device is identified, the corresponding configuration jumpers are  displayed  to  help  users  configure  the  serializer and deserializer.
- 12) In case an operating evaluation board with a Nuvoton microcontroller is not found, a window appears (Figure 3) warning as such. Press OK to continue and start the GUI anyway, or press Cancel to terminate  the  application.  See  the Troubleshooting section at the end of this document and fix the prob -lem before continuing.
- 13)  When an operating Nuvoton microcontroller is found, the GUI checks the firmware version in the microcon -troller and prompts the user to update (Figure 4).
- 14)  While the Configuration Settings window is open, press the Identify Devices button to search for the devices connected.
- 15)  Only Link Type and Device Address selections on the Configuration Settings window affects the EV kit operation. Other items are for user reference only.
- 16)  Press the Connect button to open the Evaluation Kit window and the devices under test (DUT) register maps (Figure 5). The GUI reads all internal registers of the serializer and deserializer and update the corresponding tabs.

## MAX96701 Evaluation Kit

- 17)  Press the Read All MAX96701 button in the Serializer group box to read all the serializer registers.
- 18)  Press the MAX96701  Des tab (Figure 6) and then  press  the Read All  MAX96700 button  in  the Deserializer group  box  to  read  all  the  deserializer registers.
- 19)  Select  any  of  the  other  tabs  to  evaluate  other serializer/deserializer (SerDes) functions.

## Table 1. Jumper Description*

| JUMPER   | SIGNAL   | SHUNT POSITION   | FUNCTION                                                                                    |
|----------|----------|------------------|---------------------------------------------------------------------------------------------|
| J1       | +12V     | -                | +12VAC adapter input                                                                        |
| J2       | +5VIN    | -                | +5V power-supply input positive terminal                                                    |
| J3       | GND      | -                | +5V power-supply input negative terminal                                                    |
| J4       | OUT+     | -                | GMSL OUT+ FAKRA connector                                                                   |
| J5       | OUT-     | -                | GMSL OUT- FAKRA connector                                                                   |
| J6       | EXT_UC   | -                | 4-pin header to apply user microcontroller                                                  |
| J7       | VIDT     | INT**            | U4 powered from on board LDO                                                                |
| J7       | VIDT     | EXT              | U4 powered from external source applied on J20                                              |
| J8       | BRDVDD   | INT**            | Peripheral circuit powered from internal source                                             |
| J8       | BRDVDD   | EXT              | Peripheral circuit powered through EXT-DVDD terminal, J19                                   |
| J11      | U15 ch3  | Open**           | VLC3 = U15 level shifter, channel 3 low side VLC4 = U15 level shifter, channel 4 low side   |
| J13      | U15 ch4  | Open**           | VHC3 = U15 level shifter, channel 3 high side VHC4 = U15 level shifter, channel 4 high side |
| J21      | SCLPU    | Short**          | on board SCL pulled up resistor in circuit                                                  |
| J21      | SCLPU    | Open             | on board SCL pulled up resistor NOT in circuit                                              |
| J22      | SDAPU    | Short**          | on board SDApulled up resistor in circuit                                                   |
| J22      | SDAPU    | Open             | on board SDApulled up resistor NOT in circuit                                               |
| J22      | SDAPU    | Open             | External µC SCL signal must be pulled up externally                                         |
| J25      | U4_SCL   | Short**          | μC connected to U4 oscillator                                                               |
| J25      | U4_SCL   | Open             | μC not connected to U4 oscillator                                                           |
| J26      | IDT_OE   | L                | U4 oscillator output not enabled                                                            |
| J26      | IDT_OE   | H**              | U4 oscillator output enabled                                                                |
| J26      | IDT_OE   | Open             | U4 oscillator OE pin not connected                                                          |

## Evaluates: MAX96701 with Coax or STP Cable

Figure 1. Serializer Test Setup Block Diagram

<!-- image -->

│

## MAX96701 Evaluation Kit

Table 1. Jumper Description* (continued)

| JUMPER   | SIGNAL   | SHUNT POSITION   | FUNCTION                                             |
|----------|----------|------------------|------------------------------------------------------|
| J27      | FSEL0    | L**              | U4 oscillator FSEL0 pin pulled low                   |
| J27      | FSEL0    | H                | U4 oscillator FSEL0 pin pulled high                  |
| J27      | FSEL0    | Open             | U4 oscillator FSEL0 pin not connected (internal low) |
| J28      | FSEL1    | L**              | U4 oscillator FSEL1 pin pulled low                   |
| J28      | FSEL1    | H                | U4 oscillator FSEL1 pin pulled high                  |
| J28      | FSEL1    | Open             | U4 oscillator FSEL1 pin not connected (internal low) |
| J29      | U1_SDA   | Short**          | U1 SDAconnected to µC                                |
| J29      | U1_SDA   | Open             | U1 SDAis open                                        |
| J30      | GPIO1    | Short            | Shorted to IOVDD                                     |
| J30      | GPIO1    | Open**           | Shorted to GND                                       |
| J32      | GPIO2    | Short            | Shorted to IOVDD                                     |
| J32      | GPIO2    | Open**           | Shorted to GND                                       |
| J33      | GPO_Low  | L                | Connected to GND                                     |
| J33      | GPO_Low  | H                | Connected to IOVDD                                   |
| J33      | GPO_Low  | Open**           | Not connected                                        |
| J35      | U4_SDA   | Short**          | U4 oscillator SDAconnected to µC                     |
| J35      | U4_SDA   | Open             | U4 oscillator SDAopen                                |
| J38      | PCLK_IN  | IDT**            | U1 PCLKIN connected to U4 output                     |
| J38      | PCLK_IN  | SMA              | U1 PCLKIN connected to PCLK_SMA connector            |
| J38      | PCLK_IN  | GND              | GND terminal for externally applied PCLK to J38.1    |
| J38      | PCLK_IN  | Open             | U1 PCLKIN pin not connected                          |
| J39      | U1_SCL   | TX               | U1 TX/SCL pin connected to µC RX pin                 |
| J39      | U1_SCL   | Short**          | U1 SCL connected to µC                               |
| J39      | U1_SCL   | Open             | U1 SCL open                                          |
| J44      | HIM_HI   | Short            | HIM pin pulled up to IOVDD                           |
| J44      | HIM_HI   | Open**           | HIM internally pulled down                           |
| J45      | GPO_LOW  | Short            | U1 GPO pin connected to IOVDD                        |
| J45      | GPO_LOW  | Open**           | U1 GPO open                                          |

Evaluates: MAX96701 with

Coax or STP Cable

│

Table 1. Jumper Description* (continued)

| JUMPER   | SIGNAL   | SHUNT POSITION   | FUNCTION                                                        |
|----------|----------|------------------|-----------------------------------------------------------------|
| J51      | POC+     | POC5VOUT         | 5V POC is sourced by the serializer                             |
| J51      | POC+     | POC5VIN**        | 5V POC is expected from the deserializer                        |
| J51      | POC+     | POC12V           | 12V POC can be applied by either the serializer or deserializer |
| J51      | POC+     | Open             | POC circuit disconnected                                        |
| J52      | POC-     | POC5VOUT         | 5V POC is sourced by the serializer                             |
| J52      | POC-     | POC5VIN**        | 5V POC is expected from the deserializer                        |
| J52      | POC-     | POC12V           | 12V POC can be applied by either the serializer or deserializer |
| J52      | POC-     | Open             | POC circuit disconnected                                        |
| J53      | VDD_REF  | +3.3V**          | Reference voltage for external μC signals set to +3.3V          |
| J53      | VDD_REF  | +5V              | Reference voltage for external μC signals set to +5V            |
| J53      | VDD_REF  | Open             | Reference voltage for external μC signals applied to J6.VDD_REF |
| J54      | EXSDAPU  | Short**          | On-board pullup applied on external μC SDAsignal                |
| J54      | EXSDAPU  | Open             | External μC SDAsignal must be pulled up externally              |
| J55      | EXSCLPU  | Short**          | On-board pullup applied on external μC SCL signal               |
| J55      | EXSCLPU  | Open             | External μC SCL signal must be pulled up externally             |
| JU1      | Power    | USB+5V           | Board powered from USB port                                     |
| JU1      | Power    | +5VIN            | Board powered from 5V external power supply                     |
| JU1      | Power    | POC5V            | Board power from deserializer through Coax link                 |
| JU1      | Power    | REG+5V           | Board powered from +12V supply, stepped down to 5V              |
| JU3      | DVDD     | INT**            | U1 DVDD supplied from internal source                           |
| JU3      | DVDD     | EXT              | U1 DVDD supplied through EXT-DVDD terminal (J19)                |
| JU4      | AVDD     | INT**            | U1AVDD supplied from internal source                            |
| JU4      | AVDD     | EXT              | U1AVDD supplied through EXT-AVDD terminal (J18)                 |

Evaluates: MAX96701 with

Coax or STP Cable

│

## MAX96701 Evaluation Kit

## Detailed Description of Software

To  start  the  serializer  evaluation  kit  GUI,  select Start  | All Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .

## Configuration Settings Window

The Configuration Settings window is the first window that opens after successful program launch. It allows the user to specify serializer and deserializer board setup and mode of operation (Figure 2).

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the Link Type drop-down list, I2C or UART from the Bus drop-down list, and whether the Serializer or Deserializer

## Evaluates: MAX96701 with Coax or STP Cable

should be connected to the USB  controller.  Upon changing  any  of  these  parameters,  conflicting  jumper settings  are  highlighted,  guiding  the  user  to  check  and make the corresponding changes to the evaluation boards. Only  the Link  Type and Device Address selections on  the Configuration Settings window  affect  EV  kit operation. Other items, including jumper selection, are for user reference only.

## Serializer and Deserializer Jumper Selection Blocks

The Serializer and Deserializer Jumper Selection blocks list  jumpers  on  the  evaluation  boards  of  the  selected Device ID and displays the correct shunt positions based on the conditions selected in the Controller block.

Figure 2. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (Shown with MAX96701 and MAX96700 EV Kits Connected)

<!-- image -->

│

Figure 3. MAXSerDesEV-N EV Kit Software: Warning! (Nuvoton μController is NOT Detected!)

<!-- image -->

Figure 4. MAXSerDesEV-N EV Kit Software: Warning! (Microcontroller Firmware is Not the Latest Version)

<!-- image -->

## Identify Devices Button

The Identify Devices button  causes  the  GUI  to  scan the  system  and  hunt  for  slave  addresses  on  the  bus. Upon  successful  communication,  it  reads  the Device ID register  from  the  DUTs  and  displays  the  corresponding jumper  lists  on  the Serializer and Deserializer Jumper Selection blocks. It is also possible to select a device from the Device  ID drop-down  list  and  manually  change  the slave address in the Device Address edit box. It is a good practice to utilize the Identify Devices button  and verify  communication  with  the  DUTs  before  attempting to Connect .

Figure  15  and  Figure  16  show  jumper  settings  on  the SerDes  PCBs  for  coax  cable  and  I 2 C  communication with a USB cable connected to the serializer board. Refer to  the  respective  SerDes  IC  data  sheets  for  detailed configuration information. See Table 1 for the serializer jumper descriptions.

## Connect Button

The Connect button opens the Evaluation Kit window. The  GUI  reads  the  SerDes  registers  and  updates  the register maps for both. Successful register map updates are  indicated  by  green  LED  indicators.  In  case  of  a communication problem, the LED indicators turn red.

## Cancel - Do not Connect Button

The Cancel -Do Not  Connect button opens the Evaluation  Kit main  window  without  attempting to connect  to  the  microcontroller.  Although  there  is  no communication with the microcontroller, all functions and tabs  corresponding  to  the  selected Device  ID s  on  the Evaluation Kit window become active once there.

│

## MAX96701 Evaluation Kit

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 5 provides access  to  all  internal  registers  and  functions  of  the DUTs by means of reading and writing registers through different tabs; thus, enabling the user to evaluate various functions of the serializer and deserializer.

The Read All button updates the SerDes register maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to update the  serializer's  register  map  from  the  DUT  using  the Read All MAX96701 button. The Load button reads and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All MAX96700 button. The Load button reads

## Evaluates: MAX96701 with Coax or STP Cable

and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

The Open Configuration button returns to the Configuration Settings window.

## MAX96701 Ser Tab

The MAX96701 Ser tab (Figure 5) lists the serializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective serializer    IC  data  sheet.  The  color  of  the  small  LED indicator  next  to  the Read / Write buttons  indicates  the communication status. Green indicates successful communication and red indicates failed communication.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Shown with MAX96701 Ser Tab (Serializer))

<!-- image -->

│

## MAX96700 Des Tab

The MAX96700 Des tab (Figure 6) lists the deserializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective dserializer data sheet. The color of the small LED indicator next to the Read / Write buttons indicates the communication status. Green indicates successful communication and red indicates failed communication.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Shown with MAX96700 Des Tab (Deserializer))

<!-- image -->

Evaluates: MAX96701 with

Coax or STP Cable

## Additional Features Tab

The Additional Features tab (Figure 7) provides pushbuttons for specific functions that connected devices can perform. By pressing a button, a new window pops up, launching the specific function selected. Function buttons not supported by the selected device are grayed out.

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab)

<!-- image -->

Evaluates: MAX96701 with

Coax or STP Cable

Evaluates: MAX96701 with

Coax or STP Cable

On  the Additional  Features tab,  press  the Serializer  Crossbar  Switch button  to  launch  the Serializer  Crossbar Switch Configuration function (Figure 8). This capability allows the rerouting of data between the parallel input/output by the serializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Serializer Crossbar Switch Configuration Window)

<!-- image -->

## Evaluates: MAX96701 with Coax or STP Cable

On the Additional Features tab, press the Deserializer Crossbar Switch button to launch the Deserializer Crossbar Switch Configuration function for the deserializer (Figure 9). This capability enables rerouting data between the parallel input/output by the deserializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Deserializer Crossbar Switch Configuration Window)

<!-- image -->

Evaluates: MAX96701 with

Coax or STP Cable

On the Additional Features tab, press the Timing Generator button to launch this function (Figure 10), which allows the user to utilize the programmable video timing generator to generate/retime the input sync signals. Refer to the respective IC data sheet for a detailed description.

Figure 10. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Timing Generator Window)

<!-- image -->

│

Evaluates: MAX96701 with

Coax or STP Cable

On the Additional Features tab,  press the Equalizer Visualization button to launch this function (Figure 11), which allows compensating for higher cable attenuation and higher frequencies. Refer to the respective IC data sheet for a detailed description.

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Equalizer Visualization Window)

<!-- image -->

│

On the Additional Features tab, press the Eye Width Measurement button to launch this function (Figure 12) which graphically displays Eye Width/opening of the high-speed data over the link. Refer to the IC data sheet for detailed description. Note that this function is not supported by the MAX96700 deserializer.

Figure 12. MAXSerDesEV-N EV KIT Software: Evaluation Kit Window (Eye Width Measurement Window)

<!-- image -->

## MAX96701 Evaluation Kit

On the Additional Features tab, press the Show PRBS Test button to perform a PRBS test (Figure 13). Enter test duration (maximum 32,767s = 9.1hrs) in the Duration edit box and press Start to start the test. At test completion, the  number  of  bit  errors  are  read  from  the  PRBSERR register, and displayed in the PRBS Error Counter box.

## Log\Low Level Tab

The Log\Low  Level tab  (Figure  14)  logs  all  activities between the GUI and DUTs.

Figure 13. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab, Shown PRBS Test Window, Expanded)

<!-- image -->

│

## Evaluates: MAX96701 with Coax or STP Cable

The Register Access group box allows reads or writes of the specified slave and register addresses. Use the Send String to EVKIT button to communicate with non-registerbased devices (such as the MAX7324). The SerDes Baud Rate drop-down list sets the communications baud rate. Note that the baud rate should be changed in small increments/decrements (one step change is forced by the GUI).

## MAX96701 Evaluation Kit

Evaluates: MAX96701 with

Figure 14. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log\Low Level Tab)

<!-- image -->

│

## MAX96701 Evaluation Kit

## Evaluates: MAX96701 with Coax or STP Cable

Figure 15. MAX96701 Coax EV Kit Board, Jumper Settings

<!-- image -->

│

## MAX96701 Evaluation Kit

## Evaluates: MAX96701 with Coax or STP Cable

Figure 16. MAX96700 Coax EV Kit Board, Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

│

## Detailed Description of Firmware

The Nuvoton microcontroller on the daughter board runs a  custom  firmware  that  ensures  reliable  communication between  the  PC  and  DUTs.  The  firmware  records  9-bit even-parity  data  received  from  the  USB  interface  while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the DUTs is immediately relayed to the USB port.

## How to Update Firmware

To  update  the  Nuvotron  microcontroller  firmware,  follow the instructions in this folder:

'...\Program  Files\Maxim  Integrated\MAXSerDesEV-N\ Firmware  Update\Updating  MAXSerDesEV-N  firmware. pdf'.

## Detailed Description of Hardware

The  MAX96701  coax  EV  kit  provides  a  proven,  easy  to use, and flexible design for evaluation of MAX96701 GMSL serializers with parallel input and FAKRA coaxial cable output.  On-board  level  translators  and  easy-to-use  USB-PC connections are also included on the EV kit.

The MAX96701 coax EV kit board consists of four principal functional blocks:

- Microcontroller daughter board
- MAX96701 application circuit block
- Power-supply block
- Oscillator (PCLK) circuit block

## Microcontroller Daughter Board

The Nuvoton-based microcontroller daughter board provides  UART  and  I 2 C  interfaces  that  communicate with  both  serializer  and  deserializer  boards  when  they are  powered  on  and  properly  configured.  The  Nuvoton microcontroller is programmed with the latest firmware at the time of manufacturing.

To  use  the  EV  kit  with  an  externally  applied  controller, remove  the  Nuvoton  microcontroller  board  from  the  EV kit board (DB1 position) and apply the RX/SDA, TX/SCL, VDD, and GND signals from the user microcontroller to the corresponding signals on J6 of the serializer  board.  Use one of the logic levels from the VDD\_REF, J53 header, or apply externally.

## Evaluates: MAX96701 with Coax or STP Cable

## Application Circuit

The  application  circuit  block  includes  the  serializer  and all  other  components  and  circuits  suggested  in  the respective  IC  data  sheet,  and  test  points  and  provisions to provide access to internal functions of the serializer for evaluation of the product.

## Power Supplies

On-board  LDO  regulators  U2,  U3,  and  U12  generate various voltage levels required to operate the EV kit board. There are four options to power the board:

- USB port (default)
- 12V AC adapter
- 5V power supply applied power over coax cable
- Power jumper (JU1 selects from the four power sources)

To operate the EV kits with voltage levels different from what are generated by on-board regulators, move desired IOVDD (JU2), DVDD (JU3), and AVDD (JU4) shunt from INT to EXT positions and apply the external voltage to the corresponding wire-loop terminal.

## Oscillator (PCLK) Circuit Block

An  on-board  custom  oscillator  (U4)  to  supply  PCLK  is provided  to  facilitate  the  serializer/deserializer  evaluation.    This  is  an  I 2 C-programmable  oscillator  with  four custom preprogrammed and jumper-selectable frequencies.  FSEL0 and FSEL1 jumpers positions select one of the preprogrammed frequencies per list below:

| FSEL1   | FSEL0   |   PCLK (MHz) |
|---------|---------|--------------|
| L       | L       |         25.0 |
| L       | H       |         37.0 |
| H       | L       |         78.0 |
| H       | H       |        104.0 |

[Place  jumper  IDT\_EN  (J26)  in  the  'L'  position  to  disable  the  oscillator  output.  To  operate  the  the  oscillator  at  a  frequency  other  than  the  four  preprogrammed frequencies, refer to the oscillator data sheet available at www.idt.com/products/clocks-timing/quartz-crystaloscillator-ics-xo-crystal-clock-oscillators-and-lowpower-oscillator-circuits/8n0q001-quad-frequencyprogrammable-xo-0 , or contact the manufacturer.](www.idt.com/products/clocks-timing/quartz-crystal-oscillator-ics-xo-crystal-clock-oscillators-and-low-power-oscillator-circuits/8n0q001-quad-frequency-programmable-xo-0)

## MAX96701 Evaluation Kit

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between the serializer OUT+ to the deserializer IN+: Check and verify that coax cable is properly connected.
- PCLKIN not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- PCLKIN and function generator output are not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on the deserializer board: Reverify.
- Incorrect jumper setting on the serializer board: Reverify.
- Bus selection on the GUI is not consistent with jumpers' position on the boards: Check and verify that USB cable is properly connected.
- USB port has locked: Exit application GUI, remove USB cable from the board, re-insert and re-launch the GUI.
- Nuvoton μC is not communicating: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer board is faulty: Try a different board (if available).

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX96701COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

#Denotes RoHs compliant.

Note: The MAX96701 coax EV kit is normally ordered with a companion board:

- MAX96700 coax EV kit (MAX96700COAXEVKIT#)

│

## MAX96701 EV Kit Bill of Materials

| REF_DES                                |   QTY | VALUE   | DESCRIPTION                                                                                                                   | MFG PART #                                                                                               | MFG. NAME                                                                 |
|----------------------------------------|-------|---------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| C1                                     |     1 | 1500PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1500PF; 50V; TOL=10%; MODEL=C SERIES; HIGH TEMPERATURE; TG=-55 DEGC TO +150 DEGC; TC=X8R | C1608X8R1H152K080                                                                                        | TDK                                                                       |
| C2                                     |     1 | 10UF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                             | C1210C106M4RAC; C3225X7R1C106M200AB                                                                      | KEMET; TDK                                                                |
| C3, C8, C18, C30, C32, C115, C127      |     7 | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; TG=-25 DEGC TO +85 DEGC; TC=JB                                       | C1608JB1C106M080AB                                                                                       | TDK                                                                       |
| C4, C6, C7, C9, C16, C17, C116, C117   |     8 | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | C1608X7R1E104K080AA                                                                                      | TDK                                                                       |
| C5, C34, C64, C114                     |     4 | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                     | CL32A107MPVNNN;C1210C107M8PAC;L MK325BJ107MM                                                             | SAMSUNG ELECTRONICS; KEMET                                                |
| C10, C13, C130                         |     3 | 10UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                      | C3216X5R1A106M160                                                                                        | TDK                                                                       |
| C11, C14, C19, C20, C53, C54, C57, C58 |     8 | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                         | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA- T                                                 | TDK; MURATA; TAIYO YUDEN                                                  |
| C12, C33, C62, C63                     |     4 | 0.22UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                   | C1608X7R1H224K080                                                                                        | TDK                                                                       |
| C15, C21, C28, C35, C61                |     5 | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                   | C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV | VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA; TDK; YAGEO PHICOMP; TAIYO YUDEN |
| C23, C24, C36, C60, C97                |     5 | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                   | C1005X7R1H102K050BA                                                                                      | TDK                                                                       |
| C29, C85, C96, C99, C100               |     5 | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                        | GRM155R61C104KA88                                                                                        | MURATA                                                                    |
| C31                                    |     1 | 470UF   | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 470UF; 16V; TOL=20%; MODEL=CR SERIES; TG=-55 DEGC TO +105 DEGC                | PCR1C471MCL6                                                                                             | NICHICON                                                                  |
| C37, C59, C128                         |     0 | OPEN    | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                      | N/A [DO NOT PROCURE]                                                                                     | N/A                                                                       |
| C118                                   |     1 | 100UF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 16V; TOL=20%; MODEL=TQC SERIES                                                   | 16TQC100MYF                                                                                              | PANASONIC                                                                 |
| C129                                   |     1 | 2200PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                   | C1005X7R1H222K050BA                                                                                      | TDK                                                                       |

│

Evaluates: MAX96701 with

Coax or STP Cable

## MAX96701 EV Kit Bill of Materials (continued)

| REF_DES                                                                  |   QTY | VALUE          | DESCRIPTION                                                                                                      | MFG PART #     | MFG. NAME                 |
|--------------------------------------------------------------------------|-------|----------------|------------------------------------------------------------------------------------------------------------------|----------------|---------------------------|
| D4, D5                                                                   |     2 | B360B-13-F     | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC                                   | B360B-13-F     | DIODES INCORPORATED       |
| D8                                                                       |     1 | SML-210VTT86   | DIODE; LED; SML-21 SERIES; RED; SMT (0805); PIV=2V; IF=0.02A                                                     | SML-210VTT86   | ROHM                      |
| DB1                                                                      |     1 | TEENSY 3.1     | EVKIT PART; MODULE; CTRL; TEENSY USB DEVELOPMENT BOARD; TH-37; CUSTOM PART ONLY                                  | TEENSY 3.1     | PJRC                      |
| FB1, FB3, FB5, FB6, FB8, L4, L5                                          |     7 | 120            | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                          | BLM18SG121TN1  | MURATA                    |
| GND1-GND3, TP1                                                           |     4 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5000           | KEYSTONE                  |
| H1                                                                       |     1 | TSW-116-07-T-T | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                          | TSW-116-07-T-T | SAMTEC                    |
| H2                                                                       |     1 | PBC14SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS; -65 DEGC TO +125 DEGC                                | PBC14SAAN      | SULLINS ELECTRONICS CORP. |
| H3, J7, J26-J28, J53                                                     |     6 | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                         | PCC03SAAN      | SULLINS                   |
| H4, J11, J13, J21, J22, J25, J29, J30, J32, J35, J39, J44, J45, J54, J55 |    15 | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                         | PCC02SAAN      | SULLINS                   |
| J1                                                                       |     1 | PJ-202BH       | CONNECTOR; MALE; THROUGH HOLE; PJ-202BH; DC POWER JACK; RIGHT ANGLE; RIGHT ANGLE; 3PINS                          | PJ-202BH       | CUI INC.                  |
| J2, J3, J18-J20, J34                                                     |     6 | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         | 9020 BUSS      | WEICO WIRE                |
| J4, J5                                                                   |     2 | 59S2AX-400A5-Z | CONNECTOR; MALE; THROUGH HOLE; RIGHT ANGLE PLUG FOR PCB; RIGHT ANGLE; 5PINS                                      | 59S2AX-400A5-Z | ROSENBERGER               |
| J6, J38, J51, J52                                                        |     4 | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                        | PEC04SAAN      | SULLINS ELECTRONICS CORP. |
| J8, JU3, JU4                                                             |     3 | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS;                                                       | PEC03SAAN      | SULLINS                   |
| J36                                                                      |     1 | PBC13SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 13PINS; -65 DEGC TO +125 DEGC                                | PBC13SAAN      | SULLINS ELECTRONICS CORP. |
| JU1                                                                      |     1 | PBC05SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                 | PBC05SAAN      | SULLINS ELECTRONICS CORP. |

## MAX96701 Evaluation Kit

## MAX96701 EV Kit Bill of Materials (continued)

| REF_DES              |   QTY | VALUE            | DESCRIPTION                                                                                                             | MFG PART #                                     | MFG. NAME                            |
|----------------------|-------|------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------|
| L1, L8               |     2 | 330NH            | INDUCTOR; SMT (0603); FERRITE CORE; 330NH; TOL=+/-5%; 0.63A                                                             | LQW18CNR33J00                                  | MURATA                               |
| L2, L7               |     2 | 6.8UH            | INDUCTOR; SMT (1210); WIREWOUND CHIP; 6.8UH; TOL=20%; 0.62A                                                             | LBC3225T6R8MR                                  | TAIYO YUDEN                          |
| L3, L6               |     2 | 100UH            | INDUCTOR; SMT (2424); WIREWOUND CHIP; 100UH; TOL=20%; 0.92A                                                             | LQH6PPN101M43L                                 | MURATA                               |
| L25                  |     1 | 1.5UH            | INDUCTOR; SMT; FERRITE-BEAD; 1.5UH; TOL=+/-20%; 27A                                                                     | 7443330150                                     | WURTH ELECTRONICS INC.               |
| MISC1                |     1 | AK67421-1-R      | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              | AK67421-1-R [DO NOT INSTALL]                   | ASSMANN                              |
| MISC2                |     1 | MAXEVCNTR-NUV#   | EVKIT PART-NUVOTON MICRO CONTROLLER                                                                                     | MAXEVCNTR-NUV#                                 | MAXIM                                |
| N1, N2               |     2 | FDS8449          | TRAN; N-CHANNEL POWER TRENCH MOSFET; NCH; NSOIC8 ; PD-(2.5W); I-(7.6A); V-(40V)                                         | FDS8449                                        | FAIRCHILD SEMICONDUCTOR              |
| PCLK_SMA             |     1 | 5-1814832-1      | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                                      | 5-1814832-1                                    | TYCO                                 |
| R1                   |     1 | 0.015            | RESISTOR; 1206; 0.015 OHM; 5%; 200PPM; 1W; THICK FILM                                                                   | ERJ-8BWJR015V                                  | PANASONIC                            |
| R2                   |     1 | 14.3K            | RESISTOR, 0402, 14.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              | CRCW040214K3FK                                 | VISHAY DALE                          |
| R3, R5               |     2 | 24.9K            | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                | CRCW060324K9FK                                 | VISHAY DALE                          |
| R4                   |     1 | 41.2K            | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                | CRCW060341K2FK                                 | VISHAY DALE                          |
| R6                   |     1 | 11K              | RESISTOR; 0603; 11K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  | CR0603-FX-1102ELF                              | BOURNS                               |
| R7, R9, R11, R13-R15 |     6 | 2.2K             | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 | CRCW06032K20FK                                 | VISHAY DALE                          |
| R12, R27             |     2 | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM;                                                                  | CRCW04020000ZS                                 | VISHAY DALE                          |
| R22, R36             |     2 | 1K               | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                       | CRCW06031K00FK;ERJ-3EKF1001V                   | VISHAY DALE; PANASONIC               |
| R23                  |     1 | 2                | RESISTOR, 0603, 2 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                    | CRCW06032R00FN                                 | VISHAY DALE                          |
| R24, R25, R30, R31   |     4 | 2K               | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                   | CRCW06032K0FK;ERJ-3EKF2001V                    | VISHAY DALE/PANASONIC                |
| R26, R32             |     2 | 2K               | RESISTOR; 0201; 2K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                   | ERJ-1GEF2001C                                  | PANASONIC                            |
| R33                  |     1 | 30K              | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |                                                | VISHAY DALE                          |
| R74                  |     1 | 30K              | RESISTOR; 0402; 30K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                 | RC0402FR-0730KL                                | YAGEO PHICOMP                        |
| R75, R76             |     2 | 0                | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS/BOU RNS/YAGEO PH |
| R100                 |     1 | 1K               | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | CR0603-FX-1001ELF                              | BOURNS                               |
| SU1-SU25             |    25 | STC02SYAN        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | STC02SYAN                                      | SULLINS ELECTRONICS CORP.            |
| TP_Q                 |     1 | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      | 5001                                           | KEYSTONE                             |
| U1                   |     1 | MAX96701GTG/V+   | EVKIT PART-IC;MAX96701 PACKAGE OUTLINE 24 TQFN; 0.50MM PITCH; 21-0139/T2444-4                                           | MAX96701GTG/V+                                 | MAXIM                                |
| U2, U3               |     2 | MAX1792EUA33     | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; UMAX8;                                                                          | MAX1792EUA33+                                  | MAXIM                                |
| U4                   |     1 | N0Q001BH-2202CDI | EVKIT PART; IC; N0Q001BH-2202CDI; CD10 PACKAGE OUTLINE 7X5 BODY; 2.54MM PITCH; CUSTOM PART ONLY                         | N0Q001BH-2202CDI                               | N/A                                  |
| U15                  |     1 | MAX3378EEUD+     | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                               | MAX3378EEUD+                                   | MAXIM                                |
| U23                  |     1 | MAX16952AUE/V+   | IC; CTRL; STEP-DOWN CONTROLLER WITH LOW OPERATING CURRENT; TSSOP16-EP                                                   | MAX16952AUE/V+                                 | MAXIM                                |
| -                    |     1 | PCB              | PCB:MAX96707_709 COAX EVKIT BOARD                                                                                       | MAX96701EVKIT#                                 | MAXIM                                |

│

## MAX96701 EV Kit Schematic

<!-- image -->

## MAX96701 EV Kit Schematic (continued)

<!-- image -->

## MAX96701 EV Kit Schematic (continued)

<!-- image -->

## MAX96701 EV Kit Schematic (continued)

<!-- image -->

## MAX96701 EV Kit Schematic (continued)

<!-- image -->

## MAX96701 EV Kit PCB Layouts

MAX96701 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX96701 EV Kit PCB Layouts (continued)

MAX96701 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX96701 EV Kit PCB Layouts (continued)

<!-- image -->

MAX96701 EV Kit PCB Layout-Layer 2

Evaluates: MAX96701 with

│

## MAX96701 EV Kit PCB Layouts (continued)

<!-- image -->

MAX96701 EV Kit PCB Layout-Layer 3

Evaluates: MAX96701 with

│

## MAX96701 EV Kit PCB Layouts (continued)

MAX96701 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX96701 EV Kit PCB Layouts (continued)

MAX96701 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Evaluates: MAX96701 with

│

## MAX96701 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX96701 with

Coax or STP Cable