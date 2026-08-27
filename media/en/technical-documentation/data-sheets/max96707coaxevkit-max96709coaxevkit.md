<!-- lastmod 2022-08-04 -->
## MAX96707/MAX96709 Evaluation Kit

## General Description

The  MAX96707/MAX96709  coax  evaluation  kit  (EV  kit) provides a proven design to evaluate the MAX96707 and MAX96709 high-bandwidth gigabit multimedia serial link (GMSL) serializers with spread spectrum and full-duplex control  channel,  through  the  use  of  a  standard  FAKRA coax  or  STP  cable.  The  EV  kit  also  includes  Windows Vista ® -  and  Windows ®   7-compatible  software  that  provides a simple graphical user interface (GUI) for exercising features of the device. The EV kit comes with either a MAX96707GTG+ or MAX96709GTG+ IC installed.

For complete GMSL  evaluation using a standard FAKRA  coax  cable,  order  the  MAX96707  or  MAX96709 EV kit and a companion deserializer board (the MAX96706  EV  kit  is  referenced  in  this  document).  For testing  with  STP  cable,  also  order  the  MAXCOAX2STPHSD  adapter  kit  and  refer  to  its  data  sheet.  Only  one adapter  kit  is  required  per  link  (connecting  the  serializer and deserializer boards).

Note: In  the  following  sections, MAX96707/709 and the term 'serializer' refer to the MAX96707 or MAX96709 ICs and  MAX96706/708 and the term 'deserializer'  refer  to the MAX96706 or MAX96708 ICs.

Note: This document applies to both coax and STP EV kits. This document covers coax cable links, but the information provided applies equally to STP cable links.

Ordering Information appears at end of data sheet.

Windows and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

## Features

- Accepts 14-Bit Parallel Input Data and Outputs GMSL Serial Data through FAKRA Connectors
- Power-over-Coax Capable
- Windows Vista- and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

## Items Included in the EV Kit Package

| DECRIPTION                             |   QTY |
|----------------------------------------|-------|
| MAX96707 or MAX96709 coax EV kit board |     1 |
| USB cable                              |     1 |

## MAX96707/MAX96709 EV Kit Files

| FILE                             | DECRIPTION                                 |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files on your computer |
| MAXSerDesEV-N.EXE                | Graphical user interface (GUI) program     |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

<!-- image -->

## MAX96707/MAX96709 Evaluation Kit

## Quick Start

## Required Equipment

- MAX96707 or MAX96709 serializer EV kit
- MAX96706 or MAX96708 deserializer EV kit
- 2m FAKRA cable assembly (included with the deserializer EV kit)
- &gt; 20MHz function generator
- PC with Windows Vista or Windows 7 and a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items from the EV kit  software.  Text  in bold  and  underlined refers  to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com\EVKitsoftware to download and install the latest version of the EV kit software:
- Double-click  on GMSL  SerDes  Evaluation  Kit Software-Nuvoton .
- Download the MAXSerDesEV-N\_Vx\_x\_x\_x\_ Install.ZIP file (8MB).
- Extract and install the MAXSerDesEV-N\_ Vx\_x\_x\_x\_Install.EXE  file.  The  installation  application  installs  the  USB  driver.  If  the  USB  driver installation  is  not  successful,  install  the  appropriate  USB  driver  for  your  computer  by  visiting www.ftdichip.com/Drivers/VCP.htm .
- 2) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 15.
- 3) Verify that jumpers on the deserializer board are in their default positions, as shown in Figure 16.
- 4) Set up the system, as shown in Figure 1.
- 5) Connect the FAKRA cable from the OUT+ terminal on the serializer  board  to  the  IN0+  terminal  on  the deserializer board.
- 6) Connect the USB cable between the PC and USB port on the Nuvoton microcontroller daughter board on the serializer board.
- 7) Verify that LED\_PWR on the deserializer board lights up, indicating that the deserializer board has power.

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

- 8) Verify  that  LED\_PWR on the serializer board lights up,  indicating  that  the  serializer  board  has  power. Both serializer and deserializer have a power-overcoax (POC) circuit that is active by default.
- 9) Verify  that  LOCK\_LED  on  the  deserializer  board lights  up,  indicating  that  the  link  has  been  successfully established. If the LOCK\_LED  is  off, or ERR\_LED  is  on,  go to the Troubleshooting section and fix the problem before continuing. Note: If  you  are  working  with  an  earlier  version  of the deserializer IC, you must write value of 0xA6 to register  address  0x9b  at  slave  address  0x90  to enable the control channel. In the current revision of the IC, this step is no longer needed.
- 10)  Start the EV  kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .
- 11)  The Configuration  Settings window  opens  (see Figure  2)  and  the  GUI  automatically  searches  for any active listener in both I 2 C and UART mode and identifies a valid GMSL product. Once a valid device is identified, the corresponding configuration jumpers are  displayed  to  help  users  configure  the  serializer and deserializer.
- 12) In case an operating evaluation board with a Nuvoton microcontroller is not found, a window appears (Figure 3) warning as such. Press OK to continue and start the GUI anyway, or press Cancel to terminate  the  application.  See  the Troubleshooting section at the end of this document and fix the prob -lem before continuing.
- 13)  When an operating Nuvoton microcontroller is found, the GUI checks the firmware version in the microcon -troller and prompts the user to update (Figure 4).
- 14)  While the Configuration Settings window is open, press the Identify Devices button to search for the devices connected.
- 15)  Only Link Type and Device Address selections on the Configuration Settings window affects the EV kit operation. Other items are for user reference only.
- 16)  Press the Connect button to open the Evaluation Kit window and the devices under test (DUT) register maps (Figure 5). The GUI reads all internal registers of the serializer and deserializer and update the corresponding tabs.

## MAX96707/MAX96709 Evaluation Kit

- 17)  Press the Read All MAX96707 button in the Serializer group box to read all the serializer registers.
- 18)  Press the MAX96707  Des tab (Figure 6) and then  press  the Read All  MAX96706 button  in  the Deserializer group  box  to  read  all  the  deserializer registers.
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

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

Figure 1. Serializer Test Setup Block Diagram

<!-- image -->

│

## MAX96707/MAX96709 Evaluation Kit

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

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

│

## MAX96707/MAX96709 Evaluation Kit

## Table 1. Jumper Description* (continued)

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

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

│

## MAX96707/MAX96709 Evaluation Kit

## Detailed Description of Software

To  start  the  serializer  evaluation  kit  GUI,  select Start  | All Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .

## Configuration Settings Window

The Configuration Settings window is the first window that opens after successful program launch. It allows the user to specify serializer and deserializer board setup and mode of operation (Figure 2).

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the Link Type drop-down list, I2C or UART from the Bus drop-down list, and whether the Serializer or Deserializer

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

should be connected to the USB  controller.  Upon changing  any  of  these  parameters,  conflicting  jumper settings  are  highlighted,  guiding  the  user  to  check  and make the corresponding changes to the evaluation boards. Only  the Link  Type and Device Address selections on  the Configuration Settings window  affect  EV  kit operation. Other items, including jumper selection, are for user reference only.

Serializer and Deserializer Jumper Selection Blocks The Serializer and Deserializer Jumper Selection blocks list  jumpers  on  the  evaluation  boards  of  the  selected Device ID and displays the correct shunt positions based on the conditions selected in the Controller block.

Figure 2. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (Shown with MAX96709 and MAX96706 EV Kits Connected)

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

## MAX96707/MAX96709 Evaluation Kit

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 5 provides access  to  all  internal  registers  and  functions  of  the DUTs by means of reading and writing registers through different tabs; thus, enabling the user to evaluate various functions of the serializer and deserializer.

The Read All button updates the SerDes register maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to update the  serializer's  register  map  from  the  DUT  using  the Read All MAX96707 button. The Load button reads and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All MAX96706 button. The Load button reads

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

The Open Configuration button returns to the Configuration Settings window.

## MAX96707 Ser Tab

The MAX96707 Ser tab (Figure 5) lists the serializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective serializer    IC  data  sheet.  The  color  of  the  small  LED indicator  next  to  the Read / Write buttons  indicates  the communication status. Green indicates successful communication and red indicates failed communication.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96709 Ser Tab (Serializer))

<!-- image -->

│

## MAX96707/MAX96709 Evaluation Kit

## MAX96706 Des Tab

The MAX92706 Des tab (Figure 6) lists the deserializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective dserializer data sheet. The color of the small LED indicator next to the Read / Write buttons indicates the communication status. Green indicates successful communication and red indicates failed communication.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96706 Des Tab (Deserializer))

<!-- image -->

Evaluates: MAX96707/MAX96709 with Coax or STP Cable

## Additional Features Tab

The Additional Features tab (Figure 7) provides pushbuttons for specific functions that connected devices can perform. By pressing a button, a new window pops up, launching the specific function selected. Function buttons not supported by the selected device are grayed out.

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab)

<!-- image -->

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

│

## MAX96707/MAX96709 Evaluation Kit

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

On  the Additional  Features tab,  press  the Serializer  Crossbar  Switch button  to  launch  the Serializer  Crossbar Switch Configuration function (Figure 8). This capability allows the rerouting of data between the parallel input/output by the serializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Serializer Crossbar Switch Configuration Window)

<!-- image -->

│

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

On the Additional Features tab, press the Deserializer Crossbar Switch button to launch the Deserializer Crossbar Switch Configuration function for the deserializer (Figure 9). This capability enables rerouting data between the parallel input/output by the deserializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Deserializer Crossbar Switch Configuration Window)

<!-- image -->

│

## MAX96707/MAX96709 Evaluation Kit

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

On the Additional Features tab, press the Timing Generator button to launch this function (Figure 10), which allows the user to utilize the programmable video timing generator to generate/retime the input sync signals. Refer to the respective IC data sheet for a detailed description.

Figure 10. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Timing Generator Window)

<!-- image -->

│

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

On the Additional Features tab,  press the Equalizer Visualization button to launch this function (Figure 11), which allows compensating for higher cable attenuation and higher frequencies. Refer to the respective IC data sheet for a detailed description.

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Equalizer Visualization Window)

<!-- image -->

│

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

On the Additional Features tab, press the Eye Width Measurement button to launch this function (Figure 12) which graphically displays Eye Width/opening of the high-speed data over the link. Refer to the IC data sheet for detailed description. Note that this function is not supported by the MAX96708 deserializer.

Figure 12. MAXSerDesEV-N EV KIT Software: Evaluation Kit Window (Eye Width Measurement Window)

<!-- image -->

│

## MAX96707/MAX96709

## Evaluation Kit

On the Additional Features tab, press the Show PRBS Test button to perform a PRBS test (Figure 13). Enter test duration (maximum 32,767s = 9.1hrs) in the Duration edit box and press Start to start the test. At test completion, the  number  of  bit  errors  are  read  from  the  PRBSERR register, and displayed in the PRBS Error Counter box.

## Log\Low Level Tab

The Log\Low  Level tab  (Figure  14)  logs  all  activities between the GUI and DUTs.

Figure 13. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Show PRBS Test Window, Expanded)

<!-- image -->

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

The Register Access group box allows reads or writes of the specified slave and register addresses. Use the Send String to EVKIT button to communicate with non-registerbased devices (such as the MAX7324). The SerDes Baud Rate drop-down list sets the communications baud rate. Note that the baud rate should be changed in small increments/decrements (one step change is forced by the GUI).

│

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

Figure 14. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log\Low Level Tab)

<!-- image -->

│

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

Figure 15. MAX96707/709 Coax EV KIT jumper setting

<!-- image -->

│

Figure 16. MAX96706/MAX96708 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

│

## MAX96707/MAX96709 Evaluation Kit

## Detailed Description of Firmware

The Nuvoton microcontroller on the daughter board runs a  custom  firmware  that  ensures  reliable  communication between  the  PC  and  DUTs.  The  firmware  records  9-bit even-parity  data  received  from  the  USB  interface  while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the DUTs is immediately relayed to the USB port.

## How to Update Firmware

To  update  the  Nuvotron  microcontroller  firmware,  follow the instructions in this folder:

'...\Program  Files\Maxim  Integrated\MAXSerDesEV-N\ Firmware  Update\Updating  MAXSerDesEV-N  firmware. pdf'.

## Detailed Description of Hardware

The MAX96707/MAX96709 coax EV kit provides a proven,  easy  to  use,  and  flexible  design  for  evaluation  of MAX96707 and MAX96709 GMSL serializers with parallel input and FAKRA coaxial cable output. On-board level translators and easy-to-use USB-PC connections are also included on the EV kit.

The MAX96707/MAX96709 coax EV kit board consists of four principal functional blocks:

- Microcontroller daughter board
- MAX96707/MAX96709 application circuit block
- Power-supply block
- Oscillator (PCLK) circuit block

## Microcontroller Daughter Board

The Nuvoton-based microcontroller daughter board provides  UART  and  I 2 C  interfaces  that  communicate with  both  serializer  and  deserializer  boards  when  they are  powered  on  and  properly  configured.  The  Nuvoton microcontroller is programmed with the latest firmware at the time of manufacturing.

To  use  the  EV  kit  with  an  externally  applied  controller, remove  the  Nuvoton  microcontroller  board  from  the  EV kit board (DB1 position) and apply the RX/SDA, TX/SCL, VDD, and GND signals from the user microcontroller to the corresponding signals on J6 of the serializer  board.  Use one of the logic levels from the VDD\_REF, J53 header, or apply externally.

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

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

Place  jumper  IDT\_EN  (J26)  in  the  'L'  position  to  disable  the  oscillator  output.  To  operate  the  the  oscillator  at  a  frequency  other  than  the  four  preprogrammed frequencies, refer to the oscillator data sheet available at www.idt.com/products/clocks-timing/quartz-crystaloscillator-ics-xo-crystal-clock-oscillators-and-lowpower-oscillator-circuits/8n0q001-quad-frequencyprogrammable-xo-0 , or contact the manufacturer.

## MAX96707/MAX96709 Evaluation Kit

## Troubleshooting

Possible causes of board test failure:

- Coax cable not properly connected between the serializer OUT+ to the deserializer IN+.
- PCLKIN not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- PCLKIN and function generator output are not correct: Verify signal at the pins on the board.
- Incorrect jumper setting on the deserializer board: Reverify.
- Incorrect jumper setting on the serializer board: Reverify.

## Component Suppliers

| SUPPLIER                             | PHONE             | WEBSITE                 |
|--------------------------------------|-------------------|-------------------------|
| Amphenol RF                          | 800-627-7100      | www.amphenolrf.com      |
| Hong Kong X'tals Ltd.                | 852-35112388      | www.hongkongcrystal.com |
| Integrated Device Technology (IDT)   | 908-766-4941      | www.idt.com             |
| Murata Americas                      | 770-436-1300      | www.murataamericas.com  |
| ON Semiconductor                     | 602-244-6600      | www.onsemi.com          |
| Rosenberger Hochfrequenztechnik GmbH | 011-49-86 84-18-0 | www.rosenberger.de      |
| TDK Corp.                            | 847-803-6100      | www.component.tdk.com   |

Note: Indicate that you are using the MAX96707 or MAX96709 when contacting these component suppliers.

## Component List

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX96707/MAX96709 EV Kit BOM
- MAX96707/MAX96709 EV Kit Schematics
- MAX96707/MAX96709 EV Kit PCB Layout Diagrams

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX96707COAXEVKIT# | EV Kit      |
| MAX96709COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#   | Adapter Kit |

#Denotes RoHs compliant.

Note: The MAX96707 and MAX96709 coax EV kits are normally ordered with a companion board:

- MAX96706 coax EV kit (MAX96706COAXEVKIT#)
- MAX96708 coax EV kit (MAX96708COAXEVKIT#)*
- Bus selection on the GUI is not consistent with jumpers' position on the boards: Check and verify that USB cable is properly connected.
- USB port has locked: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- Nuvoton μC is not communicating: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- Deserializer board is faulty: Try a different board (if available).
- Serializer board is faulty: Try a different board (if available).

## Evaluates: MAX96707/MAX96709 with Coax or STP Cable

│

## MAX96707/MAX96709

## Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX96707/MAX96709

with Coax or STP Cable

TITLE: Bill of Materials

MAX96707\_709; Rev 0; 4/16

| ITEM REF_DES                                                        | DNI/DNP QTY MFG PART #   | DNI/DNP QTY MFG PART #                                                  | MANUFACTURER                                      | VALUE                                   | DESCRIPTION                                                                                                                                                                                                   | COMMENTS               |
|---------------------------------------------------------------------|--------------------------|-------------------------------------------------------------------------|---------------------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| 1 C1                                                                |                          | 1 C1608X8R1H152K080                                                     | TDK                                               | 1500PF                                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1500PF; 50V; TOL=10%; MODEL=C SERIES; HIGH TEMPERATURE; TG=-55 DEGC TO +150 DEGC; TC=X8R CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=; TG=-55 DEGC TO |                        |
| 2 C2                                                                | - -                      | 1 C1210C106M4RAC; C3225X7R1C106M200AB                                   | KEMET/TDK                                         | 10UF                                    | +125 DEGC; TC=X7R                                                                                                                                                                                             |                        |
| 3 C3, C8, C18, C30, C32, C115, C127 C4, C6, C7, C9, C16, C17, C116, | -                        | 7 C1608JB1C106M080AB                                                    | TDK                                               | 10UF                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; TG=-25 DEGC TO +85 DEGC; TC=JB CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC                                 |                        |
| 4 C117                                                              | -                        | 8 C1608X7R1E104K080AA                                                   | TDK                                               | 0.1UF                                   | TO +125 DEGC; TC=X7R                                                                                                                                                                                          |                        |
| 5 C5, C34, C64, C114                                                | -                        | 4 CL32A107MPVNNN                                                        | SAMSUNG ELECTRONICS                               | 100UF                                   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                    |                        |
| 6 C10, C13, C130                                                    | -                        | 3 C3216X5R1A106M160                                                     | TDK                                               | 10UF                                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                      |                        |
| 7 C11, C14, C19, C20, C53, C57, C58                                 | C54, -                   | 8 C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA-T               | TDK/MURATA/TAIYO YUDEN                            | 4.7UF                                   | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                         |                        |
| 8 C12, C33, C62, C63                                                | -                        | 4 C1608X7R1H224K080                                                     | TDK                                               | 0.22UF TO +125                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC; TC=X7R                                                                                                                | DEGC                   |
|                                                                     |                          | C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; | VENKEL LTD./SAMSUNG                               |                                         |                                                                                                                                                                                                               |                        |
| 9 C15, C21, C28, C35, C61                                           | -                        | 5 CC0402KRX7R7BB104; EMK105B7104KV                                      | ELECTRONICS/MURATA/TDK/YAG EO PHICOMP/TAIYO YUDEN | 0.1UF                                   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC                            |                        |
| 10 C23, C24, C36, C60, C97                                          | -                        | 5 C1005X7R1H102K050BA                                                   | TDK                                               | 1000PF                                  | TO +125 DEGC; TC=X7R CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC                                                                                                       |                        |
| 11 C29, C85, C96, C99, C100                                         | -                        | 5 GRM155R61C104KA88                                                     | MURATA                                            | 0.1UF                                   | +85 DEGC; TC=X5R                                                                                                                                                                                              | to                     |
| 12 C31 13 C118                                                      | -                        | 1 PCR1C471MCL6 1 16TQC100MYF                                            | NICHICON PANASONIC                                | 470UF 100UF                             | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 470UF; 16V; TOL=20%; MODEL=CR SERIES; TG=-55 DEGC TO +105 DEGC CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 16V; TOL=20%; MODEL=TQC SERIES                    |                        |
| 14 C129                                                             | -                        |                                                                         |                                                   |                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC                                                                                                                        |                        |
| D5                                                                  | -                        | 1 C1005X7R1H222K050BA                                                   | TDK INCORPORATED                                  | 2200PF                                  | TO +125 DEGC; TC=X7R DEGC                                                                                                                                                                                     |                        |
| 15 D4, 16 D8                                                        | - -                      | 2 B360B-13-F 1 SML-210VTT86                                             | DIODES ROHM                                       | B360B-13-F SML-210VTT86                 | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DIODE; LED; SML-21 SERIES; RED; SMT (0805); PIV=2V; IF=0.02A                                                                        |                        |
| 17 DB1                                                              | -                        | 1 TEENSY 3.1                                                            | PJRC                                              | TEENSY 3.1                              | EVKIT PART; MODULE; CTRL; TEENSY USB DEVELOPMENT BOARD; TH-37; CUSTOM PART ONLY                                                                                                                               |                        |
| 18 L4, L5, FB1, FB3, FB5, FB6,                                      | FB8 -                    | 7 BLM18SG121TN1                                                         | MURATA                                            | 120                                     | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                                                                                                                       |                        |
| 19 TP1, GND1-GND3                                                   | - 4                      |                                                                         | 5000 KEYSTONE                                     | N/A                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                              |                        |
| 20 H1                                                               | -                        | 1 TSW-116-07-T-T                                                        | SAMTEC                                            | TSW-116-07-T-T                          | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; STRAIGHT; 48PINS                                                                                                                                       |                        |
| 21 H2                                                               | -                        | 1 PBC14SAAN                                                             | SULLINS ELECTRONICS CORP.                         | PBC14SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS; -65 DEGC TO +125 DEGC                                                                                                                             |                        |
| 22 H3, J7, J26-J28, J53 H4, J11, J13, J21, J22, J25, J29,           | -                        | 6 PCC03SAAN                                                             | SULLINS                                           | PCC03SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                      |                        |
| 23 J30, J32, J35, J39, J44, J45, J55                                | J54, - 15                | PCC02SAAN 1 PJ-202BH                                                    | SULLINS                                           | PCC02SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC CONNECTOR; MALE; THROUGH HOLE; PJ-202BH; DC POWER JACK; RIGHT ANGLE; RIGHT ANGLE;                                    |                        |
| 24 J1                                                               | -                        |                                                                         | CUI INC.                                          | PJ-202BH                                | 3PINS                                                                                                                                                                                                         |                        |
| 25 J2, J3, J18-J20, J34                                             | -                        | 6 9020 BUSS                                                             | WEICO WIRE                                        | MAXIMPAD                                | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                                      |                        |
| 26 J4, J5                                                           | - -                      | 2 59S2AX-400A5-Z                                                        | ROSENBERGER                                       | 59S2AX-400A5-Z PEC04SAAN                | CONNECTOR; MALE; THROUGH HOLE; RIGHT ANGLE PLUG FOR PCB; RIGHT ANGLE; 5PINS                                                                                                                                   |                        |
| 27 J6 28 J8, JU3, JU4                                               | -                        | 1 PEC04SAAN 3 PEC03SAAN                                                 | SULLINS ELECTRONICS CORP. SULLINS                 | PEC03SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                           |                        |
| 29 J36                                                              | -                        | 1 PBC13SAAN                                                             |                                                   | PBC13SAAN                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 13PINS; -65 +125 DEGC                                                                                                                                     |                        |
| 30 J38, J51, J52                                                    | -                        | 3 PEC04SAAN                                                             | SULLINS ELECTRONICS CORP.                         | PEC04SAAN                               | DEGC TO CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                             |                        |
|                                                                     |                          |                                                                         | SULLINS ELECTRONICS CORP.                         |                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 INDUCTOR; SMT (0603); FERRITE CORE; 330NH; TOL=+/-5%; 0.63A                                                                       |                        |
| 31 JU1 32 L1, L8                                                    | - -                      | 1 PBC05SAAN 2 LQW18CNR33J00                                             | SULLINS ELECTRONICS CORP.                         | PBC05SAAN 330NH                         | DEGC                                                                                                                                                                                                          |                        |
| 33 L2, L7 34 L3, L6 35 L25                                          | - - -                    | 2 LBC3225T6R8MR 2 LQH6PPN101M43L                                        | MURATA TAIYO YUDEN                                | 6.8UH INDUCTOR; 100UH                   | SMT (1210); WIREWOUND CHIP; 6.8UH; TOL=20%; 0.62A INDUCTOR; SMT (2424); WIREWOUND CHIP; 100UH; TOL=20%; 0.92A INDUCTOR; SMT; FERRITE-BEAD; 1.5UH; TOL=+/-20%; 27A                                             |                        |
|                                                                     | -                        | 1                                                                       | MURATA 7443330150 WURTH ELECTRONICS INC.          | 1.5UH                                   | PART-NUVOTON MICRO CONTROLLER                                                                                                                                                                                 |                        |
| 36 MISC2                                                            |                          | 1 MAXEVCNTR-NUV#                                                        | MAXIM                                             | MAXEVCNTR- NUV#                         | EVKIT                                                                                                                                                                                                         |                        |
| 37 N1, N2                                                           | -                        | 2 FDS8449                                                               | FAIRCHILD SEMICONDUCTOR                           | FDS8449                                 | TRAN; N-CHANNEL POWER TRENCH MOSFET; NCH; NSOIC8 ; PD-(2.5W); I-(7.6A); V-(40V)                                                                                                                               |                        |
| 38 PCLK_SMA                                                         | -                        | 1 5-1814832-1                                                           | TYCO PANASONIC                                    | 5-1814832-1 CONNECTOR; 0.015            | FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; RESISTOR, 0402, 14.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                  | 5PINS                  |
| 39 R1 40 R2                                                         | - -                      | 1 ERJ-8BWJR015V 1 CRCW040214K3FK                                        | VISHAY DALE                                       | 14.3K                                   | RESISTOR; 1206; 0.015 OHM; 5%; 200PPM; 1W; THICK FILM                                                                                                                                                         |                        |
| 41 R3, R5 42 R4                                                     | - -                      | 2 CRCW060324K9FK 1 CRCW060341K2FK                                       | VISHAY DALE VISHAY DALE                           | 24.9K 41.2K                             | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                             |                        |
| 43 R6 44 R7, R9, R11,                                               | -                        | 1 CR0603-FX-1102ELF                                                     | BOURNS VISHAY DALE                                | 11K 2.2K                                | RESISTOR; 0603; 11K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                |                        |
| R13-R15 45 R12, R27 46 R22, R36                                     | - - -                    | 6 CRCW06032K20FK 2 CRCW04020000ZS 2 CRCW06031001FK; ERJ-3EKF1001V       | VISHAY DALE VISHAY DALE; PANASONIC                | 1K RESISTOR;                            | 0 RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                              |                        |
| 47 R23 48 R24, R25, R30, R31 49 R26, R32                            | - -                      | 1 CRCW06032R00FN 4 CRCW06032K0FK; ERJ-3EKF2001V 2 ERJ-1GEF2001C         | VISHAY DALE VISHAY DALE/PANASONIC PANASONIC       | 2K                                      | 2 RESISTOR, 0603, 2 OHM, 1%, 100PPM, 0.10W, THICK FILM RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM RESISTOR; 0201; 2K OHM; 1%; 200PPM; 0.05W; THICK FILM                                            |                        |
|                                                                     |                          |                                                                         |                                                   | 2K                                      |                                                                                                                                                                                                               |                        |
| 50 R33 51 R74                                                       | - -                      | 1 CRCW060330K0FK                                                        | VISHAY DALE YAGEO                                 |                                         | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0402; 30K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                |                        |
|                                                                     | -                        | 1 RC0402FR-0730KL                                                       | PHICOMP SAMSUNG                                   | 30K 30K                                 |                                                                                                                                                                                                               |                        |
|                                                                     |                          | RC1608J000CS; CR0603-J/-000ELF;RC0603JR-                                | ELECTRONICS/BOURNS/YAGEO                          |                                         |                                                                                                                                                                                                               |                        |
| 52 R75, R76                                                         |                          | 2 070RL 1 CR0603-FX-1001ELF                                             | PH                                                | 0 RESISTOR;                             | 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                                                                    |                        |
| 53 R100 54 SU1-SU25                                                 | - -                      | 25 STC02SYAN                                                            | BOURNS SULLINS ELECTRONICS CORP. 5001 KEYSTONE    | 1K STC02SYAN                            | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                 |                        |
| 55 TP_Q                                                             | - -                      | 1 1 MAX96707GTG+                                                        | MAXIM                                             | N/A                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; EVKIT PART-IC; HS81 PRELIMINARY; PACKAGE OUTLINE 24 TQFN; 0.50MM PITCH; 21-0139/T2444-     |                        |
| 56 U1                                                               | -*                       |                                                                         |                                                   | 4                                       |                                                                                                                                                                                                               |                        |
| 57 U2,U3                                                            | -                        | 2 MAX1792EUA33                                                          | MAXIM                                             | MAX96707GTG+ MAX1792EUA33 IC; N0Q001BH- | VREG; LOW-DROPOUT LINEAR REGULATOR; UMAX8 EVKIT PART; IC; N0Q001BH-2202CDI; CD10 PACKAGE OUTLINE 7X5 BODY; 2.54MM PITCH;                                                                                      | CUSTOM PART# N0Q001BH- |
| 58 U4                                                               | -                        | 1 N0Q001BH-2202CDI                                                      | N/A                                               | 2202CDI IC;                             | CUSTOM PART ONLY TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR;                                                                                                                | 2202CDI                |
| 59 U15 60 U23                                                       | - -                      | 1 MAX3378EEUD+                                                          | MAXIM MAXIM                                       | MAX3378EEUD+ MAX16952AUE/ V+            | TSSOP14 IC; CTRL; STEP-DOWN CONTROLLER WITH LOW OPERATING CURRENT; TSSOP16-EP USB A                                                                                                                           |                        |
| 61 MISC1 62 C37,                                                    | DNI DNP                  | 1 MAX16952AUE/V+ 1 AK67421-1-R                                          | ASSMANN N/A                                       | AK67421-1-R OPEN                        | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO MALE; STRAIGHT; 5PINS-4PINS PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                 |                        |
| C59,                                                                |                          | 3 N/A                                                                   |                                                   |                                         |                                                                                                                                                                                                               |                        |
| C128                                                                |                          |                                                                         |                                                   |                                         |                                                                                                                                                                                                               |                        |

TOTAL

185

D

C

B

A

8

J1

PJ-202BH

8

1

3

2

C129

2200PF

R74

D5

B360B-13-F

A

C

C127

10UF

DL

DH

IN

IN

30K

C128

OPEN

+

C118

100UF

13

12

15

10

6

9

7

+12V

C116

0.1UF

BIAS

DL

DH

PGOOD

COMP

OUT

C115

10UF

EN

FB

FSYNC

FOSC

BST

LX

U23

MAX16952AUE/V+

EP

SGND

PGND

17

11

7

5

CS

1

SUP

2

7

4

3

16

14

8

R76

R2

C117

C

DH

IN

0

14.3K

0.1UF

A

D4

B360B-13-F

DL

R100

1K

D8

SML-210VTT86

LED\_PWR

+5V0

A

K

IN

6

4

4

N2

FDS8449

+12V

5

6

D

G

S

1

2

5

6

D

G

S

1

2

+5V0

C7

0.1UF

+5V0

C16

0.1UF

6

7

3

7

3

8

C130

10UF

N1

FDS8449

8

C1

1500PF

FB1

120

C8

10UF

+3V3

FB3

120

C18

10UF

R75

0

C9

0.1UF

R4

41.2K

C17

0.1UF

BRDVDD

R6

11K

L25

1.5UH

5

R1

0.015

1

2

4

6

R3

24.9K

U3

MAX1792EUA33

IN

OUT

IN

SHDN

SET

GND

5

OUT

RST

1

2

4

6

R5

24.9K

5

EP

C2

10UF

U2

MAX1792EUA33

IN

OUT

IN

SHDN

SET

GND

5

9

OUT

RST

EP

9

7

8

3

7

8

3

+5V0

1

REG+5V

1

2

2

C114

100UF

+3V3

C10

10UF

C13

10UF

USB+5V

C11

4.7UF

C14

4.7UF

4

POC5V

5

JU1

5

4

4

+5VIN

USB+5V

VIDT

3

3

4

2

J7

VIDT

INT

1

1

1

C3

10UF

3

C4

0.1UF

EXT

INT

1

BRDVDD

J8

2

BRDVDD

3

EXT

DVDD

2

JU3

DVDD

AVDD

2

JU4

AVDD

3

3

C5

100UF

FB8

120

C58

4.7UF

FB6

120

C54

4.7UF

3

3

C6

0.1UF

FB5

120

C20

4.7UF

C57

4.7UF

C53

4.7UF

C19

4.7UF

J2

+5VIN

J3

GND

J19

EXT-DVDD

J18

EXT-AVDD

J20

EXT-VIDT

J34

GND

2

GND1

2

GND2

GND3

1

1

D

C

B

A

D

C

B

A

8

U1\_SDA

U1\_SCL

8

OUT

I69

7

POC5V

POC5VIN

POC12V

+12V

POC5V

POC5VIN

+12V

POC12V

7

J51

3

3

4

6

BRDVDD

R7

R9

2.2K

2

J21

SCLPU

1

+5V0

POC5VOUT

2

POC+

1

C62

0.22UF

C64

100UF

+5V0

POC5VOUT

2

4

2.2K

2

1

J52

POC-

1

C33

0.22UF

C34

100UF

6

J22

SDAPU

C61

0.1UF

C35

0.1UF

1

1

CT\_SDA

2

2

CT\_SCL

1

2

VLC3

J11

VLC4

C60

1000PF

C36

1000PF

5

+3V3

5

1

3.3V

2

BRDVDD

C99

0.1UF

8

2

3

4

5

1

14

VL VCC

3-STATE

I/O VL1

I/O VL2

I/O VL3

I/O VL4

GND

7

C59

OPEN

R30

2K

L3

100UH

C37

OPEN

R24

2K

L6

100UH

I/O VCC1

+5V0

5V

C100

0.1UF

U15

MAX3378EEUD+

13

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

J53

VDD\_REF

3

R31

2K

L2

6.8UH

R25

2K

L7

6.8UH

1

2

4

J54

EXSDAPU

VHC3

J13

VHC4

R32

2K

L1

330NH

R26

2K

L8

330NH

4

VDD\_REF

2

1

R11

2.2K

R12

0

R27

0

2

1

R13

2.2K

3

J55

EXSCLPU

IN

IN

3

UC\_SDA

UC\_SCL

1

2

1

2

3

4

IN

4

3

IN

2

4

3

EXT\_SDA

VDD\_REF

GND

EXT\_SCL

OUT+

J4

59S2AX-400A5-Z

5

OUT-

J5

59S2AX-400A5-Z

5

1

J6

2

2

1

1

D

C

B

A

D

C

B

A

8

BRDVDD

8

3

6

9

12

15

18

21

24

27

30

33

36

39

42

45

48

R14

2.2K

R15

2.2K

6

9

12

15

18

21

24

27

30

33

36

39

42

45

48

2

2

H1

TSW-116-07-T-T

3

1

2

4

5

7

8

10

11

13

14

16

17

19

20

22

23

25

26

28

29

31

32

34

35

37

38

40

41

43

44

46

47

J30

GPIO1

J32

GPIO2

1

2

4

5

7

8

10

11

13

14

16

17

19

20

22

23

25

26

28

29

31

32

34

35

37

38

40

41

43

44

46

47

1

1

7

BRDVDD

NC

7

I175 PCLKIN

IN

DIN0

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

DIN1

DIN2

DIN3

DIN4

DIN5

DIN6

DIN7

DIN8

DIN9

DIN10/GPIO1

DIN11/GPIO2

DIN12/HS

IN

DIN13/VS

I166

I167

DIN10/GPIO1

DIN11/GPIO2

6

6

BRDVDD

5

2

5

J44

HIM\_HI

1

R33

30K

4

1

4

J45

GPO\_LOW

2

DVDD

AVDD

3

C15

0.1UF

C21

0.1UF

PCLKIN I161

U1\_SCL

I162

U1\_SDA

I75

3

19

20

21

23

24

1

2

4

5

6

7

8

9

10

11

12

18

17

C23

1000PF

C24

1000PF

PCLKIN

DIN0

DIN1

DIN2

DIN3

DIN4

DIN5

DIN6

DIN7

DIN8

DIN9

DIN10/GPIO1

DIN11/GPIO2

DIN12/HS

DIN13/VS

GPO/HIM

SCL

SDA

16

AVDD

GND

3

GND

13

22

DVDD

EP

25

2

OUT+

OUT-

2

U1

MAX96707GTG/V+

15

14

C63

C12

0.22UF

0.22UF

1

I109

I110

1

OUT+

OUT-

D

C

B

A

D

C

B

A

IDTVDD

J28

1

FSEL1

2

H

L

3

TNZ\_SDA0

I10

TNZ\_SCL0

I11

PCLK\_SMA

5-1814832-1

1

5

4

5

3

4

2

3

2

8

IDTVDD

J27

1

3

FSEL0

2

H

L

1

8

2

2

IDTVDD

J26

1

IDT\_OE

2

1K

1K

H

L

3

R36

R22

J35

U4\_SDA

U4\_SCL

J25

1

1

2

4

5

9

10

I45

7

IDTVDD

C28

0.1UF

OE

FSEL0

FSEL1

SDATA

SCLK

8

VDD

GND

3

APL\_PCLK

7

C29

0.1UF

DNU

DNU

2

U4

N0Q001BH-2202CDI

1

7

Q

6

IDT\_PCLK

C30

10UF

TP\_Q

I42

6

1

+

6

C31

470UF

I52

IDT\_PCLK

TNZ\_RX1

I91

TNZ\_TX1

I90

SMA

2

1

4

IDT

PCLKIN

I15

TP1

J38

PCLK\_IN

3

GND

R23

2

L5

120

5

VIDT

C32

10UF

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

5

GND

0-RX1

1-TX1

2

3

4

5-TX1

6

7-RX3

8-TX3

9-RX2

10-TX2

11

12

VBAT

15

37

3.3V

16

36

35

DB1

TEENSY 3.1

DNI

GND

17

PROGRAM

18

34

4

A14/DAC

19

4

VIN

AGND

3.3V

23-A9

22-A8

21-A7

20-A6

19-A5

18-A4

17-A3

16-A2

15-A1

14-A0

13

33

32

31

30

29

28

27

26

25

24

23

22

21

20

I103

I104

3

TNZ\_SCL0

TNZ\_SDA0

3

C85

0.1UF

TNZ\_SCL0

TNZ\_SDA0

13

11

12

10

8

9

7

5

6

4

2

3

1

2

L4

120

I24

I26

J36

2

C96

0.1UF

USB+5V

C97

1000PF

J39

UC\_SCL

J29

UC\_SDA

1

1

VIN

+3.3V

GND

TNZ\_A9

TNZ\_A7

TNZ\_A8

TNZ\_A6

TNZ\_SDA0

TNZ\_SCL0

TNZ\_A3

TNZ\_A1

TNZ\_A2

TNZ\_A0

2

2

I28

1

I29

UC\_SCL

UC\_SDA

1

D

C

B

A

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

07/01/2015

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

DESIGNER:JOHANN GUALBERTO

ODB++/GERBER:

SILK\_TOP

## SILK\_TOP

<!-- image -->

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

07/01/2015

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

DESIGNER:JOHANN GUALBERTO

ODB++/GERBER:

## TOP

TOP

<!-- image -->

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

DESIGNER:JOHANN GUALBERTO

## INNER\_LAYER2 ODB++/GERBER:

INNER\_LAYER2

07/01/2015

<!-- image -->

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

DESIGNER:JOHANN GUALBERTO

## INNER\_LAYER3 ODB++/GERBER:

INNER\_LAYER3

07/01/2015

<!-- image -->

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

DESIGNER:JOHANN GUALBERTO

ODB++/GERBER:

## BOTTOM

BOTTOM

07/01/2015

<!-- image -->

HARDWARE NAME:MAX96707\_709\_EVKIT\_A

HARDWARE NUMBER:

ENGINEER:YOUSSOF FATHI

DATE:

07/01/2015

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

DESIGNER:JOHANN GUALBERTO

ODB++/GERBER:

SILK\_BOT

## SILK\_BOTTOM

<!-- image -->