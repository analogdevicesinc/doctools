<!-- lastmod 2022-08-04 -->
## MAX96705/MAX96711 Evaluation Kit

## General Description

The  MAX96705/MAX96711  coax  evaluation  kit  (EV  kit) provides a proven design to evaluate the MAX96705 and MAX96711 high-bandwidth gigabit multimedia serial link (GMSL) serializers with spread spectrum and full-duplex control  channel,  through  the  use  of  a  standard  FAKRA coax  or  STP  cable.  The  EV  kit  also  includes  Windows Vista ® - and Windows 7-compatible software that provides a  simple  graphical  user  interface  (GUI)  for  exercising features  of  the  device.  The  EV  kit  comes  with  either  a MAX96705GTJ+ or MAX96711GTJ+ IC installed.

For complete GMSL evaluation using a standard FAKRA coax  cable,  order  the  MAX96705  or  MAX96711  EV  kit and  a  companion  deserializer  board  (the  MAX96706  or MAX96708 EV kit are referenced in this  document).  For testing  with  STP  cable,  also  order  the  MAXCOAX2STPHSD  adapter  kit  and  refer  to  its  data  sheet.  Only  one adapter  kit  is  required  per  link  (connecting  the  serializer and deserializer boards).

Note: In  the  following  sections,  MAX96705/11  and  the term 'serializer' refer to the MAX96705 or MAX96711 ICs and MAX96706/08 and the term 'deserializer' refer to the MAX96706 or MAX96708 ICs.

Note: This document applies to both coax and STP EV kits. This document covers coax cables, but the information provided applies equally to STP cables.

Ordering Information appears at end of data sheet.

Windows and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

## Features

- Accepts 16-Bit Parallel Input Data and Outputs GMSL Serial Data through FAKRA Connectors
- Windows Vista-, and Windows 7-Compatible Software
- USB-Controlled Interface (Cable Included)
- USB Powered
- Proven PCB Layout
- Fully Assembled and Tested

## Items Included in the EV Kit Package

| DECRIPTION                             |   QTY |
|----------------------------------------|-------|
| MAX96705 or MAX96711 coax EV kit board |     1 |
| USB cable                              |     1 |

## MAX96705/MAX96711 EV Kit Files

| FILE                             | DECRIPTION                                 |
|----------------------------------|--------------------------------------------|
| MAXSerDesEV-N_Vxxxx_ Install.EXE | Installs the EV kit files on your computer |
| MAXSerDesEV-N.EXE                | Graphical user interface (GUI) program     |
| CDM20600.EXE                     | Installs the USB device driver             |
| USB_Driver_Help_200.PDF          | USB driver installation help file          |

<!-- image -->

## MAX96705/MAX96711 Evaluation Kit

## Quick Start

## Required Equipment

- MAX96705 or MAX96711 serializer EV kit
- MAX96706 or MAX96708 deserializer EV kit
- 2m FAKRA cable assembly (included with the deserializer EV kit)
- &gt; 20MHz function generator
- PC with Windows Vista or Windows 7 and a spare USB port (direct 500mA connection required; do not use a bus-powered hub)
- 5V DC, 500mA power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items from the EV kit  software.  Text  in bold  and  underlined refers  to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/EVkitsoftware to download and install the latest version of the EV kit software:
- Search  for  MAX9288.  Then  select MAX9288  | Design Resources | Software | GMSL SerDes Evaluation Kit Software-Nuvoton .
- The  installation  application  will  try  to  download and install the USB driver for the Nuvoton microcontroller.  If  the  USB  driver  installation  was  not successful, install the appropriate USB driver for your PC available from the link below, and refer to the USB\_Driver\_Help\_200.PDF file, if needed: www.ftdichip.com/Drivers/VCP.htm .
- 2) Verify that jumpers on the serializer board are in their default positions, as shown in Figure 14.
- 3) Verify that jumpers on the deserializer board are in their default positions, as shown in Figure 15.
- 4) Set up the system, as shown in Figure 1.
- 5) Connect  the  FAKRA  cable  from  the  OUT+  terminal  on  the  serializer  board  to  the  IN0+  terminal on  the  deserializer  board.  Both  the  serializer  and deserializer evaluation boards have power-over-coax (POC) circuitry  that  is  active  by  default,  configured such that the deserializer board is the source of the power for the serializer board.
- 6) Connect the USB cable between the PC and USB port on the Nuvoton microcontroller daughter board

## Evaluates: MAX96705/MAX96711 with Coax or STP Cable

on the serializer board.

- 7) Verify that LED\_PWR on the deserializer board lights up, indicating that the deserializer board has power.
- 8) Verify  that  LED\_PWR on the serializer board lights up,  indicating  that  the  serializer  board  has  power. Both serializer and deserializer have a power-overcoax (POC) circuit that is active by default.
- 9) Verify that LOCK\_LED on the deserializer board  lights  up,  indicating  that  the  link  has  been successfully established. If the LOCK\_LED is off,  or  ERR\_LED  is  on,  go  to  the Troubleshooting section  and  fix  the  problem  before  continuing. Note: If  you  are  working  with  an  earlier  version  of the deserializer IC, you must write value of 0xA6 to register  address  0x9b  at  slave  address  0x90  to enable the control channel. In the current revision of the IC, this step is no longer needed.
- 10)  Start the EV  kit software by selecting Start | Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .
- 11)  The Configuration  Settings window  opens  (see Figure  2)  and  the  GUI  automatically  searches  for any active listener in both I 2 C and UART mode and identifies a valid GMSL product. Once a valid device is identified, the corresponding configuration jumpers are  displayed  to  help  users  configure  the  serializer and deserializer.
- 12)  In case an operating evaluation board with a Nuvoton  microcontroller  is  not  found,  a  window appears  (Figure  3)  warning  as  such.  Press OK to continue and start the GUI anyway, or press Cancel to terminate  the  application.  See  the Troubleshooting section  at  the  end  of  this  document  and fix the problem before continuing.
- 13)  When an operating Nuvoton microcontroller is found, the GUI checks the firmware version in the microcon -troller and prompts the user to update (Figure 4).
- 14)  While the Configuration Settings window is open, press the I dentify Devices button to search for the devices connected.
- 15)  Only Link Type and Device Address selections on the Configuration Settings window affects the EV kit operation. Other items are for user reference only.
- 16)  Press the Connect button to open the Evaluation Kit window and the devices under test (DUT) register maps (Figure 5). The GUI will read all internal registers of the serializer and deserializer and update the corresponding tabs.

## MAX96705/MAX96711 Evaluation Kit

- 17)  Press the Read All MAX96705 button in the Serializer group box to read all the serializer registers.
- 18)  Press the MAX96705  Des tab (Figure 6) and then  press  the Read All  MAX96706 button  in  the Deserializer group  box  to  read  all  the  deserializer registers.
- 19)  Select  any  of  the  other  tabs  to  evaluate  other serializer/deserializer (SerDes) functions.

## Table 1. Jumper Description*

| JUMPER   | SIGNAL     | SHUNT POSITION   | FUNCTION                                                                                    |
|----------|------------|------------------|---------------------------------------------------------------------------------------------|
| J1       | +12V       | -                | +12VAC adapter input                                                                        |
| J2       | +5VIN      | -                | +5V power-supply input positive terminal                                                    |
| J3       | GND        | -                | +5V power-supply input negative terminal                                                    |
| J4       | OUT+       | -                | GMSL OUT+ FAKRA connector                                                                   |
| J5       | OUT-       | -                | GMSL OUT- FAKRA connector                                                                   |
| J6       | EXT_UC     | -                | 4-pin header to apply user microcontroller                                                  |
| J11      | U15 ch3    | Open**           | VLC3 = U15 level shifter, channel 3 low side VLC4 = U15 level shifter, channel 4 low side   |
| J13      | U15 ch4    | Open**           | VHC3 = U15 level shifter, channel 3 high side VHC4 = U15 level shifter, channel 4 high side |
| J23      | GPIO5/LMN1 | L                | Connected to GND                                                                            |
| J23      | GPIO5/LMN1 | H                | Connected to IOVDD                                                                          |
| J23      | GPIO5/LMN1 | Open**           | Not connected                                                                               |
| J25      | U4_SCL     | Short**          | μC connected to U4 oscillator                                                               |
| J25      | U4_SCL     | Open             | μC not connected to U4 oscillator                                                           |
| J26      | IDT_OE     | L                | U4 oscillator output not enabled                                                            |
| J26      | IDT_OE     | H**              | U4 oscillator output enabled                                                                |
| J26      | IDT_OE     | Open             | U4 oscillator OE pin not connected                                                          |
| J27      | FSEL0      | L**              | U4 oscillator FSEL0 pin pulled low                                                          |
| J27      | FSEL0      | H                | U4 oscillator FSEL0 pin pulled high                                                         |
| J27      | FSEL0      | Open             | U4 oscillator FSEL0 pin not connected (internal low)                                        |
| J28      | FSEL1      | L**              | U4 oscillator FSEL1 pin pulled low                                                          |
| J28      | FSEL1      | H                | U4 oscillator FSEL1 pin pulled high                                                         |
| J28      | FSEL1      | Open             | U4 oscillator FSEL1 pin not connected (internal low)                                        |
| J29      | UC_RX/SDA  | RX               | U1 RX/SDA pin connected to μC RX pin                                                        |
| J29      | UC_RX/SDA  | SDA**            | U1 RX/SDA pin connected to μC SDApin                                                        |
| J29      | UC_RX/SDA  | Open             | U1 RX/SDA pin left open                                                                     |

│

## Evaluates: MAX96705/MAX96711 with Coax or STP Cable

Figure 1. Serializer Test Setup Block Diagram

<!-- image -->

## MAX96705/MAX96711 Evaluation Kit

## Table 1. Jumper Description* (continued)

| JUMPER   | SIGNAL     | SHUNT POSITION   | FUNCTION                                           |
|----------|------------|------------------|----------------------------------------------------|
| J30      | GPIO2      | Short            | Shorted to IOVDD                                   |
| J30      | GPIO2      | Open**           | Shorted to GND                                     |
| J32      | GPIO3      | Short            | Shorted to IOVDD                                   |
| J32      | GPIO3      | Open**           | Shorted to GND                                     |
| J33      | GPIO4/LMN0 | L                | Connected to GND                                   |
| J33      | GPIO4/LMN0 | H                | Connected to IOVDD                                 |
| J33      | GPIO4/LMN0 | Open**           | Not connected                                      |
| J35      | U4_SDA     | Short**          | μC connected to U4 oscillator                      |
| J35      | U4_SDA     | Open             | μC not connected to U4 oscillator                  |
| J38      | PCLK_IN    | IDT**            | U1 PCLKIN connected to U4 output                   |
| J38      | PCLK_IN    | SMA              | U1 PCLKIN connected to PCLK_SMA connector          |
| J38      | PCLK_IN    | GND              | GND terminal for externally applied PCLK to J38.1  |
| J38      | PCLK_IN    | Open             | U1 PCLKIN pin not connected                        |
| J39      | UC_TX/SCL  | TX               | U1 TX/SCL pin connected to μC RX pin               |
| J39      | UC_TX/SCL  | SCL**            | U1 TX/SCL pin connected to μC SDApin               |
| J39      | UC_TX/SCL  | Open             | U1 TX/SCL pin left open                            |
| J40      | GPIO1/BWS  | L**              | Connected to GND                                   |
| J40      | GPIO1/BWS  | H                | Connected to IOVDD                                 |
| J40      | GPIO1/BWS  | Open             | Not connected                                      |
| J41      | LCCN       | L                | Connected to GND                                   |
| J41      | LCCN       | H**              | Connected to IOVDD                                 |
| J41      | LCCN       | Open             | Not connected                                      |
| J42      | CONF0      | L**              | Connected to GND                                   |
| J42      | CONF0      | H                | Connected to IOVDD                                 |
| J42      | CONF0      | Open             | Not connected                                      |
| J43      | CONF1      | L**              | Connected to GND                                   |
| J43      | CONF1      | H                | Connected to IOVDD                                 |
| J43      | CONF1      | Open             | Not connected                                      |
| J44      | HIM_HI     | Short            | U1 GPO/HIM pin pulled up to IOVDD                  |
| J44      | HIM_HI     | Open**           | U1 GPO/HIM state depends on J45                    |
| J45      | GPO_LOW    | Short            | U1 GPO/HIM pin connected to IOVDD                  |
| J45      | GPO_LOW    | Open**           | U1 GPO/HIM state depends on J44                    |
| J46      | IOVDD_DUT  | Short**          | U1 GPO/HIM pin connected to IOVDD                  |
| J46      | IOVDD_DUT  | Open             | Apply ammeter to measure current drawn by U1 IOVDD |

│

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

## MAX96705/MAX96711 Evaluation Kit

## Table 1. Jumper Description* (continued)

| JUMPER   | SIGNAL     | SHUNT POSITION   | FUNCTION                                                                                                                       |
|----------|------------|------------------|--------------------------------------------------------------------------------------------------------------------------------|
| J47      |            | L                | Connected to GND                                                                                                               |
| J47      | MS/HVEN    | H                | Connected to IOVDD                                                                                                             |
| J47      |            | Open**           | Not connected                                                                                                                  |
| J48      | PWDN       | L                | U1 powered down                                                                                                                |
| J48      | PWDN       | H**              | U1 powered up                                                                                                                  |
| J50      | TX/SCL/DBL | DBL-L            | U1 TX/SCL/DBL pin connected to GND                                                                                             |
| J50      | TX/SCL/DBL | U15_TC/SCL       | U1 TX/SCL/DBL pin is connected to U15_TX/SCL                                                                                   |
| J50      | TX/SCL/DBL | DBL-H            | U1 TX/SCL/DBL pin is connected to IOVDD                                                                                        |
| J50      | TX/SCL/DBL | Open             | No POC                                                                                                                         |
| J51      | POC+       | POC5VOUT         | 5V POC is sourced by the serializer                                                                                            |
| J51      | POC+       | POC5VIN**        | 5V POC is expected from the deserializer                                                                                       |
| J51      | POC+       | POC12V           | 12V POC can be applied by either the serializer or deserializer                                                                |
| J51      | POC+       | Open             | No POC                                                                                                                         |
| J52      | POC-       | POC5VOUT         | 5V POC is sourced by the serializer                                                                                            |
| J52      | POC-       | POC5VIN**        | 5V POC is expected from the deserializer                                                                                       |
| J52      | POC-       | POC12V           | 12V POC can be applied by either the serializer or deserializer                                                                |
| J52      | POC-       | Open             | No POC                                                                                                                         |
| J53      |            | +3.3V**          | Reference voltage for external μC signals set to +3.3V                                                                         |
| J53      | VDD_REF    | +5V              | Reference voltage for external μC signals set to +5V                                                                           |
| J53      |            | Open             | Reference voltage for external μC signals applied to J6.VDD_REF                                                                |
| J54      | EXSDAPU    | Short**          | On-board pullup applied on external μC SDAsignal                                                                               |
| J54      | EXSDAPU    | Open             | External μC SDAsignal must be pulled up externally                                                                             |
| J55      | EXSCLPU    | Short**          | On-board pullup applied on external μC SCL signal                                                                              |
| J55      | EXSCLPU    | Open             | External μC SCL signal must be pulled up externally                                                                            |
| J56      | LFR+       | Short**          | Line fault can be monitored by the remote device on the OUT+ terminal (LFAVDD must be short and LFR-, LFL+, LFL- must be open) |
| J56      | LFR+       | Open             | Line fault monitored by local device or OUT- terminal                                                                          |
| J57      | LFR-       | Short            | Line fault can be monitored by the remote device on the OUT- terminal (LFAVDD must be short and LFR+, LFL+, LFL- must be open) |
| J57      | LFR-       | Open**           | Line fault monitored by local device or OUT+ terminal                                                                          |
| J58      | LFL+       | Short            | Line fault can be monitored by the local device on the OUT+ terminal (LFAVDD must be short and LFR+, LFR-, LFL- must be open)  |
| J58      | LFL+       | Open**           | Line fault monitored by remote device or OUT- terminal                                                                         |
| J59      | LFL-       | Short            | Line fault can be monitored by the local device on the OUT- terminal (LFAVDD must be short and LFR+, LFR-, LFL+ must be open)  |
| J59      | LFL-       | Open**           | Line fault monitored by remote device or OUT+ terminal                                                                         |

│

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

## MAX96705/MAX96711 Evaluation Kit

## Table 1. Jumper Description* (continued)

| JUMPER   | SIGNAL   | SHUNT POSITION   | FUNCTION                                           |
|----------|----------|------------------|----------------------------------------------------|
| J60      | LFAVDD   | Short**          | Line-fault circuit powered, connected to AVDD      |
| J60      | LFAVDD   | Open             | Line fault is powered, nonfunctional               |
| JU2      | IOVDD    | +3.3V**          | U1 IOVDD set to on-board 3.3V                      |
| JU2      | IOVDD    | EXT              | U1 IOVDD supplied through EXT-IOVDD terminal (J20) |
| JU2      | IOVDD    | +1.8V            | U1 IOVDD set to on-board 1.8V                      |
| JU3      | DVDD     | INT**            | U1 DVDD supplied from internal source              |
| JU3      | DVDD     | EXT              | U1 DVDD supplied through EXT-DVDD terminal (J19)   |
| JU4      | AVDD     | INT**            | U1AVDD supplied from internal source               |
| JU4      | AVDD     | EXT              | U1AVDD supplied through EXT-AVDD terminal (J18)    |

## Detailed Description of Software

To  start  the  serializer  evaluation  kit  GUI,  select Start  | All Programs | Maxim Integrated | MAXSerDesEV-N | MAXSerDesEV-N .

## Configuration Settings Window

The Configuration Settings window is the first window that opens after successful program launch. It allows the user to specify serializer and deserializer board setup and mode of operation (Figure 2).

## Controller Group Box

In  the Controller group  box,  select Coax or STP from the Link Type drop-down list, I2C or UART from the Bus drop-down list, and whether the Serializer or Deserializer should be connected to the USB  controller.  Upon changing  any  of  these  parameters,  conflicting  jumper settings  will  be  highlighted,  guiding  the  user  to  check and  make  the  corresponding  changes  to  the  evaluation boards. Only the Link Type and Device Address selections on the Configuration Settings window affect EV kit operation. Other items, including jumper selection, are for user reference only.

Serializer and Deserializer Jumper Selection Blocks The Serializer and Deserializer Jumper Selection blocks list  jumpers  on  the  evaluation  boards  of  the  selected Device ID and displays the correct shunt positions based on the conditions selected in the Controller block.

## Identify Devices Button

The Identify Devices button  causes  the  GUI  to  scan the  system  and  hunt  for  slave  addresses  on  the  bus. Upon  successful  communication,  it  reads  the Device ID register  from  the  DUTs  and  displays  the  corresponding jumper  lists  on  the Serializer and Deserializer Jumper Selection blocks. It is also possible to select a device from the Device  ID drop-down  list  and  manually  change  the slave address in the Device Address edit box. It is a good practice to utilize the Identify Devices button  and verify  communication  with  the  DUTs  before  attempting to Connect .

Figure  14  shows  jumper  settings  on  the  serializer  PCB for coax cable and I 2 C communication with a USB cable connected to the serializer board. Refer to the respective SerDes IC data sheets for detailed configuration information. See Table 1 for the serializer jumper descriptions.

## Connect Button

The Connect button opens the Evaluation Kit window. The  GUI  reads  the  SerDes  registers  and  updates  the register maps for both. Successful register map updates are  indicated  by  green  LED  indicators.  In  case  of  a communication problem, the LED indicators turn red.

## Cancel - Do not Connect Button

The Cancel-  Do  Not  Connect button opens the Evaluation  Kit main  window  without  attempting  to connect  to  the  microcontroller.  Although  there  is  no communication with the microcontroller, all functions and tabs  corresponding  to  the  selected Device  ID s  on  the Evaluation Kit window become active once there.

│

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

Figure 2. MAXSerDesEV-N EV Kit Software: Configuration Settings Window (shown with MAX96705 and MAX96706 EV Kits Connected)

<!-- image -->

│

Figure 3. MAXSerDesEV-N EV Kit Software: Warning! (Nuvoton μController is NOT Detected!)

<!-- image -->

Figure 4. MAXSerDesEV-N EV Kit Software: Warning! (Microcontroller Firmware is Not the Latest Version)

<!-- image -->

## Evaluation Kit Window

The Evaluation Kit window shown in Figure 5 provides access  to  all  internal  registers  and  functions  of  the DUTs by means of reading and writing registers through different tabs, thus enabling the user to evaluate various functions of the serializer and deserializer.

The Read All button updates the SerDes register maps by reading the DUT's internal registers.

The Serializer group box provides pushbuttons to update the  serializer's  register  map  from  the  DUT  using  the Read All MAX96705 button. The Load button reads and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Deserializer group  box  provides  pushbuttons  to update the deserializer's register map from the DUT using the Read All MAX96706 button. The Load button reads and updates from a previously saved file and the Save button saves the existing register values into a new file.

The Wake Up button applies the register write sequence described in the IC data sheets to wake the DUTs from sleep mode.

The Open Configuration button returns to the Configuration Settings window.

│

## MAX96705/MAX96711 Evaluation Kit

## MAX96705 Ser Tab

The MAX96705 Ser tab (Figure 5) lists the serializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective serializer  IC data sheet. The color of the small LED indicator next to the Read / Write buttons indicates the communication status. Green indicates successful communication and red indicates failed communication.

Figure 5. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96705 Ser Tab (Serializer))

<!-- image -->

Evaluates: MAX96705/MAX96711 with Coax or STP Cable

## MAX96705/MAX96711 Evaluation Kit

## MAX96706 Des Tab

The MAX92706 Des tab (Figure 6) lists the deserializer's register bitmaps. The Read and Write buttons in each register group box allows access to each bit or group of bits that specify a function or condition, as defined in the respective dserializer data sheet. The color of the small LED indicator next to the Read / Write buttons indicates the communication status. Green indicates successful communication and red indicates failed communication.

Figure 6. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (MAX96706 Des Tab (Deserializer))

<!-- image -->

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

## Additional Features Tab

The Additional Features tab (Figure 7) provides pushbuttons for specific functions that connected devices can perform. By pressing a button, a new window pops up, launching the specific function selected. Function buttons not supported by the selected device are grayed out.

Figure 7. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Additional Features Tab)

<!-- image -->

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

│

## MAX96705/MAX96711 Evaluation Kit

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

On  the Additional  Features tab,  press  the Serializer  Crossbar  Switch button  to  launch  the Serializer  Crossbar Switch Configuration function (Figure 8). This capability allows the rerouting of data between the parallel input/output by the serializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 8. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Serializer Crossbar Switch Configuration Window)

<!-- image -->

│

On the Additional Features tab, press the Deserializer Crossbar Switch button to launch the Deserializer Crossbar Switch Configuration function for the deserializer (Figure 9). This capability enables rerouting data between the parallel input/output by the deserializer. Refer to the respective IC data sheet for a detailed description and operation on the embedded crossbar switches.

Figure 9. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Deserializer Crossbar Switch Configuration Window)

<!-- image -->

## MAX96705/MAX96711 Evaluation Kit

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

On the Additional Features tab, press the Timing Generator button to launch this function (Figure 10), which allows the user to utilize the programmable video timing generator to generate/retime the input sync signals. Refer to the respective IC data sheet for a detailed description.

Figure 10. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Timing Generator Window)

<!-- image -->

│

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

On the Additional Features tab,  press the Equalizer Visualization button to launch this function (Figure 11), which allows compensating for higher cable attenuation and higher frequencies. Refer to the respective IC data sheet for a detailed description.

Figure 11. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Equalizer Visualization Window)

<!-- image -->

│

On the Additional Features tab,  press the Show PRBS Test button to perform a PRBS test (Figure 12). Enter test duration (maximum 32,767s = 9.1hrs) in the Duration edit box and press Start to start the test. At test completion, the number of bit errors are read from the PRBSERR register, and displayed in the PRBS Error Counter box.

## Log\Low Level Tab

The Log\Low Level tab (Figure 13) logs all activities between the GUI and DUTs.

The Register Access group box allows reads or writes of the specified slave and register addresses. Use the Send String to EVKIT button to communicate with non-register-based devices (such as the MAX7324). The SerDes Baud Rate dropdown list sets the communications baud rate. Note that the baud rate should be changed in small increments/decrements (one step change is forced by the GUI).

## Detailed Description of Firmware

The  Nuvoton  microcontroller  on  the  daughter  board  runs  a  custom  firmware  that  ensures  reliable  communication between the PC and DUTs. The firmware records 9-bit even-parity data received from the USB interface while RTS is set, and plays back the 9-bit data with 1.5 stop bits timing when RTS is cleared. Data received from the DUTs is immediately relayed to the USB port.

## Detailed Description of Hardware

The MAX96705/MAX96711 coax EV kit provides a proven design and layout for the MAX96705 and MAX96711 GMSL serializers, which was designed to be reliable with ease of use, flexibility, parallel input, and FAKRA coaxial cable serialized output. On-board level translators and easy-to-use USB-PC connections are included on the EV kit.

Figure 12. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Show PRBS Test Window, Expanded)

<!-- image -->

## MAX96705/MAX96711 Evaluation Kit

The MAX96705/MAX96711 coax EV kit board consists of four principal functional blocks:

- 1) Microcontroller daughter board
- 2) MAX96705/MAX96711 application circuit block
- 3) Power-supply block
- 4) Oscillator (PCLK) circuit block

## Microcontroller Daughter Board

The Nuvoton-based microcontroller daughter board provides  UART  and  I 2 C  interfaces  that  communicate with  both  serializer  and  deserializer  boards  when  they are  powered  on  and  properly  configured.  The  Nuvoton microcontroller is programmed with the latest firmware at the time of manufacturing.

To  use  the  EV  kit  with  an  externally  applied  controller, remove  the  Nuvoton  microcontroller  board  from  the  EV kit board (DB1 position) and apply the RX/SDA, TX/SCL, VDD, and GND signals from the user microcontroller to the corresponding signals on J6 of the serializer  board.  Use one of the logic levels from the VDD\_REF, J53 header, or apply externally.

## Evaluates: MAX96705/MAX96711 with Coax or STP Cable

## Application Circuit

The  application  circuit  block  includes  the  serializer  and all  other  components  and  circuits  suggested  in  the respective  IC  data  sheet,  and  test  points  and  provisions to provide access to internal functions of the serializer for evaluation of the product.

## Power Supplies

On-board  LDO  regulators  U2,  U3,  and  U12  generate various voltage levels required to operate the EV kit board. There are four options to power the board:

- 1) USB port (default)
- 2) 12V AC adapter
- 3) 5V power supply applied power over coax cable
- 4) Power jumper (JU1 selects from the four power sources)

To operate the EV kits with voltage levels different from what are generated by on-board regulators, move desired IOVDD (JU2), DVDD (JU3), and AVDD (JU4) shunt from INT to EXT positions and apply the external voltage to the corresponding wire-loop terminal.

Figure 13. MAXSerDesEV-N EV Kit Software: Evaluation Kit Window (Log\Low Level Tab)

<!-- image -->

│

## MAX96705/MAX96711 Evaluation Kit

## Oscillator (PCLK) Circuit Block

An  on-board  custom  oscillator  (U4)  to  supply  PCLK  is provided  to  facilitate  the  serializer/deserializer  evaluation.    This  is  an  I 2 C-programmable  oscillator  with  four custom preprogrammed and jumper-selectable frequencies.  FSEL0 and FSEL1 jumpers positions select one of the preprogrammed frequencies per list below:

| FSEL1   | FSEL0   |   PCLK (MHz) |
|---------|---------|--------------|
| L       | L       |         25.0 |
| L       | H       |         37.0 |
| H       | L       |         78.0 |
| H       | H       |        104.0 |

## Evaluates: MAX96705/MAX96711 with Coax or STP Cable

Place  jumper  IDT\_EN  (J26)  in  the  'L'  position  to  disable  the  oscillator  output.  To  operate  the  the  oscillator  at  a  frequency  other  than  the  four  preprogrammed frequencies, refer to the oscillator data sheet available at www.idt.com/products/clocks-timing/quartz-crystaloscillator-ics-xo-crystal-clock-oscillators-and-lowpower-oscillator-circuits/8n0q001-quad-frequencyprogrammable-xo-0 , or contact the manufacturer.

Figure 14. MAX96705/MAX96711 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

│

## Evaluates: MAX96705/MAX96711 with Coax or STP Cable

Figure 15. MAX96706/MAX96708 Coax EV Kit Jumper Settings for Coax Link and I 2 C Communication

<!-- image -->

## Troubleshooting

Possible causes of board test failure:

- 1) Coax cable not properly connected between the serializer OUT+ to the deserializer IN+.
- 2) PCLKIN not applied (e.g., FG output is disabled): Verify signal at the pins on the board.
- 3) PCLKIN and function generator output are not correct: Verify signal at the pins on the board.
- 4) Incorrect jumper setting on the deserializer board: Reverify.
- 5) Incorrect jumper setting on the serializer board: Reverify.
- 6) Bus selection on the GUI is not consistent with jumpers' position on the boards: Check and verify that USB cable is properly connected.
- 7) USB port has locked: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- 8) Nuvoton μC is not communicating: Exit application GUI, remove USB cable from the board, reinsert and relaunch the GUI.
- 9) Deserializer board is faulty: Try a different board (if available).
- 10)  Serializer board is faulty: Try a different board (if available).

│

## MAX96705/MAX96711 Evaluation Kit

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

Note: Indicate that you are using the MAX96705 or MAX96711 when contacting these component suppliers.

## Component List

Click  on  the  links  below  for  component  information, schematics, and PCB layout diagrams:

- MAX96705/MAX96711 EV Kit BOM
- MAX96705/MAX96711 EV Kit Schematics
- MAX96705/MAX96711 EV Kit PCB Layout

## Ordering Information

| PART                | TYPE        |
|---------------------|-------------|
| MAX96705 COAXEVKIT# | EV Kit      |
| MAX96711 COAXEVKIT# | EV Kit      |
| MAXCOAX2STP-HSD#    | Adapter Kit |

#Denotes RoHs compliant.

Note: The MAX96705 and MAX96711 coax EV kits are normally ordered with a companion board:

- MAX96706 coax EV kit (MAX96706COAXEVKIT#)
- MAX96708 coax EV kit (MAX96708COAXEVKIT#)*

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

│

## MAX96705/MAX96711 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/15           | Initial release                                                                    | -               |
|                 1 | 3/16            | Removed future product designation from MAX96711COAXEVKIT# in Ordering Information | 20              |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX96705/MAX96711

with Coax or STP Cable

TITLE: Bill of Materials

DATE: 12/2015

DESIGN: max96705\_711\_evkit\_a

## NOTE: DNI = DO NOT INSTALL ; DNP = DO NOT PROCURE

| REF_DES                                          | DNI/DNP   |   QTY | VALUE   | DESCRIPTION                                                                                                                   | MFG PART #                                                                                               | MANUFACTURER                                                         |
|--------------------------------------------------|-----------|-------|---------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| C1                                               | -         |     1 | 1500PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1500PF; 50V; TOL=10%; MODEL=C SERIES; HIGH TEMPERATURE; TG=-55 DEGC TO +150 DEGC; TC=X8R | C1608X8R1H152K080                                                                                        | TDK                                                                  |
| C2                                               | -         |     1 | 10UF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                             | C1210C106M4RAC; C3225X7R1C106M200AB                                                                      | KEMET/TDK                                                            |
| C3, C8, C18, C30, C32, C108, C115, C127          | -         |     8 | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; TG=-25 DEGC TO +85 DEGC; TC=JB                                       | C1608JB1C106M080AB                                                                                       | TDK                                                                  |
| C4, C6, C7, C9, C16, C17, C106, C107, C116, C117 | -         |    10 | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                    | C1608X7R1E104K080AA                                                                                      | TDK                                                                  |
| C5, C34, C64, C114                               | -         |     4 | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                    | CL32A107MPVNNN                                                                                           | SAMSUNG ELECTRONICS                                                  |
| C10, C13, C103, C130                             | -         |     4 | 10UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 10V; TOL=20%; MODEL=C SERIES; TG=- 55 DEGC TO +85 DEGC; TC=X5R                     | C3216X5R1A106M160                                                                                        | TDK                                                                  |
| C11, C14, C19, C20, C53, C54, C57, C58, C104     | -         |     9 | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                         | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA-T                                                  | TDK/MURATA/TAIYO YUDEN                                               |
| C12, C33, C62, C63                               | -         |     4 | 0.22UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                   | C1608X7R1H224K080                                                                                        | TDK                                                                  |
| C15, C21, C22, C27, C28, C35, C61                | -         |     7 | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                   | C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV | VENKEL LTD./SAMSUNG ELECTRONICS/MURATA/TDK/YAGEO PHICOMP/TAIYO YUDEN |

| REF_DES                               | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                                                      | MFG PART #          | MANUFACTURER              |
|---------------------------------------|-----------|-------|----------------|------------------------------------------------------------------------------------------------------------------|---------------------|---------------------------|
| C23-C26, C36, C60, C97                | -         |     7 | 1000PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      | C1005X7R1H102K050BA | TDK                       |
| C29, C85, C96, C99, C100              | -         |     5 | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=- 55 DEGC to +85 DEGC; TC=X5R          | GRM155R61C104KA88   | MURATA                    |
| C31                                   | -         |     1 | 470UF          | CAPACITOR; SMT (CASE_F); ALUMINUM- ELECTROLYTIC; 470UF; 16V; TOL=20%; MODEL=CR SERIES; TG=-55 DEGC TO +105 DEGC  | PCR1C471MCL6        | NICHICON                  |
| C118                                  | -         |     1 | 100UF          | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 16V; TOL=20%; MODEL=TQC SERIES                                      | 16TQC100MYF         | PANASONIC                 |
| C129                                  | -         |     1 | 2200PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      | C1005X7R1H222K050BA | TDK                       |
| D4, D5                                | -         |     2 | B360B-13-F     | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC                                   | B360B-13-F          | DIODES INCORPORATED       |
| D8                                    | -         |     1 | SML-210VTT86   | DIODE; LED; SML-21 SERIES; RED; SMT (0805); PIV=2V; IF=0.02A                                                     | SML-210VTT86        | ROHM                      |
| L4, L5, FB1, FB3, FB5, FB6, FB8, FB14 | -         |     8 | 120            | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                          | BLM18SG121TN1       | MURATA                    |
| TP1, GND1-GND4, TP_12V                | -         |     6 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5000                | KEYSTONE                  |
| H1-1-H1-3                             | -         |     3 | PBC16SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                | PBC16SAAN           | SULLINS ELECTRONICS CORP. |
| H2                                    | -         |     1 | PPPC141LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 14PINS                             | PPPC141LFBN-RC      | SULLINS ELECTRONICS CORP  |
| H3                                    | -         |     1 | PPTC031LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER; STRAIGHT THROUGH; 3PINS; -40 DEGC TO +105 DEGC                          | PPTC031LFBN-RC      | SULLINS                   |
| H4                                    | -         |     1 | PPPC021LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 2PINS                              | PPPC021LFBN-RC      | SULLINS ELECTRONICS CORP  |

| REF_DES                                                   | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                               | MFG PART #     | MANUFACTURER              |
|-----------------------------------------------------------|-----------|-------|----------------|-------------------------------------------------------------------------------------------|----------------|---------------------------|
| J1                                                        | -         |     1 | PJ-202BH       | CONNECTOR; MALE; THROUGH HOLE; PJ- 202BH; DC POWER JACK; RIGHT ANGLE; RIGHT ANGLE; 3PINS  | PJ-202BH       | CUI INC.                  |
| J2, J3, J18-J20, J34                                      | -         |     6 | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG  | 9020 BUSS      | WEICO WIRE                |
| J4, J5                                                    | -         |     2 | 59S2AX-400A5-Z | CONNECTOR; MALE; THROUGH HOLE; RIGHT ANGLE PLUG FOR PCB; RIGHT ANGLE; 5PINS               | 59S2AX-400A5-Z | ROSENBERGER               |
| J6                                                        | -         |     1 | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                 | PEC04SAAN      | SULLINS ELECTRONICS CORP. |
| J7                                                        | -         |     1 | PBC14SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 14PINS; -65 DEGC TO +125 DEGC         | PBC14SAAN      | SULLINS ELECTRONICS CORP. |
| J11, J13, J21, J22, J25, J30, J32, J35, J44-J46, J54, J55 | -         |    13 | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125 DEGC | PCC02SAAN      | SULLINS                   |
| J23, J26-J29, J33, J39-J43, J47, J48, J53                 | -         |    14 | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65 DEGC TO +125 DEGC | PCC03SAAN      | SULLINS                   |
| J38, J50-J52, JU2                                         | -         |     5 | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                 | PEC04SAAN      | SULLINS ELECTRONICS CORP. |
| J56-J60                                                   | -         |     5 | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                 | PEC02SAAN      | SULLINS                   |
| JU1                                                       | -         |     1 | PBC05SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC          | PBC05SAAN      | SULLINS ELECTRONICS CORP. |
| JU3, JU4                                                  | -         |     2 | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                 | PEC03SAAN      | SULLINS                   |
| L1, L8                                                    | -         |     2 | 330NH          | INDUCTOR; SMT (0603); FERRITE CORE; 330NH; TOL=+/-5%; 0.63A                               | LQW18CNR33J00  | MURATA                    |
| L2, L7                                                    | -         |     2 | 6.8UH          | INDUCTOR; SMT (1210); WIREWOUND CHIP; 6.8UH; TOL=20%; 0.62A                               | LBC3225T6R8MR  | TAIYO YUDEN               |
| L3, L6                                                    | -         |     2 | 100UH          | INDUCTOR; SMT (2424); WIREWOUND CHIP; 100UH; TOL=20%; 0.92A                               | LQH6PPN101M43L | MURATA                    |
| L25                                                       | -         |     1 | 1.5UH          | INDUCTOR; SMT; FERRITE-BEAD; 1.5UH; TOL=+/-20%; 27A                                       | 7443330150     | WURTH ELECTRONICS INC.    |
| MECH1-MECH4                                               | -         |     4 | 1902B          | STANDOFF; FEMALE-THREADED; HEX; 4- 40IN; 3/8IN; NYLON                                     | 1902B          | GENERIC PART              |

| REF_DES                             | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                        | MFG PART #                    | MANUFACTURER            |
|-------------------------------------|-----------|-------|----------------|------------------------------------------------------------------------------------|-------------------------------|-------------------------|
| MISC2                               | -         |     1 | MAXEVCNTR-NUV# | EVKIT PART-NUVOTON MICRO CONTROLLER                                                | MAXEVCNTR-NUV#                | MAXIM                   |
| N1, N2                              | -         |     2 | FDS8449        | TRAN; N-CHANNEL POWER TRENCH MOSFET; NCH; NSOIC8 ; PD-(2.5W); I-(7.6A); V-(40V)    | FDS8449                       | FAIRCHILD SEMICONDUCTOR |
| PCLK_SMA                            | -         |     1 | 5-1814832-1    | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS | 5-1814832-1                   | TYCO                    |
| R1                                  | -         |     1 | 0.015          | RESISTOR; 1206; 0.015 OHM; 5%; 200PPM; 1W; THICK FILM                              | ERJ-8BWJR015V                 | PANASONIC               |
| R2                                  | -         |     1 | 14.3K          | RESISTOR, 0402, 14.3K OHM, 1%, 100PPM, 0.0625W, THICK FILM                         | CRCW040214K3FK                | VISHAY DALE             |
| R3, R5, R38                         | -         |     3 | 24.9K          | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                           | CRCW060324K9FK                | VISHAY DALE             |
| R4                                  | -         |     1 | 41.2K          | RESISTOR; 0603; 41.2K OHM; 1%; 100PPM; 0.10W; METAL FILM                           | CRCW060341K2FK                | VISHAY DALE             |
| R6, R58                             | -         |     2 | 11K            | RESISTOR; 0603; 11K OHM; 1%; 100PPM; 0.10W; THICK FILM                             | CR0603-FX-1102ELF             | BOURNS                  |
| R7, R9, R11, R13-R15, R28, R29, R34 | -         |     9 | 2.2K           | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                            | CRCW06032K20FK                | VISHAY DALE             |
| R12, R27, R37, R39                  | -         |     4 | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM                              | CRCW04020000ZS                | VISHAY DALE             |
| R16, R19                            | -         |     2 | 45.3K          | RESISTOR; 0603; 45.3KOHM; 1%; 100PPM; 0.10W; THICK FILM                            | CRCW060345K3FK; ERJ-3EKF4532V | VISHAY DALE/PANASONIC   |
| R17, R20                            | -         |     2 | 4.99K          | RESISTOR; 0201; 4.99K OHM; 1%; 100PPM; 0.05W ; THICK FILM                          | CRCW02014K99FK                | VISHAY DALE             |
| R18, R21                            | -         |     2 | 49.9K          | RESISTOR; 0201; 49.9K OHM; 1%; 100PPM; 0.05W ; THICK FILM                          | CRCW020149K9FK                | VISHAY DALE             |
| R22, R36                            | -         |     2 | 1K             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                  | CRCW06031001FK; ERJ-3EKF1001V | VISHAY DALE; PANASONIC  |
| R23                                 | -         |     1 | 2              | RESISTOR, 0603, 2 OHM, 1%, 100PPM, 0.10W, THICK FILM                               | CRCW06032R00FN                | VISHAY DALE             |
| R24, R25, R30, R31                  | -         |     4 | 2K             | RESISTOR, 0603, 2K OHM, 1%, 100PPM, 0.10W, THICK FILM                              | CRCW06032K0FK; ERJ-3EKF2001V  | VISHAY DALE/PANASONIC   |
| R26, R32                            | -         |     2 | 2K             | RESISTOR; 0201; 2K OHM; 1%; 200PPM; 0.05W; THICK FILM                              | ERJ-1GEF2001C                 | PANASONIC               |
| R33                                 | -         |     1 | 30K            | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                             | CRCW060330K0FK                | VISHAY DALE             |

| REF_DES        | DNI/DNP   |   QTY | VALUE          | DESCRIPTION                                                                                                             | MFG PART #                                     | MANUFACTURER                        |
|----------------|-----------|-------|----------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|-------------------------------------|
| R74            | -         |     1 | 30K            | RESISTOR; 0402; 30K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                 | RC0402FR-0730KL                                | YAGEO PHICOMP                       |
| R75, R76       | -         |     2 | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    | RC1608J000CS; CR0603-J/- 000ELF;RC0603JR-070RL | SAMSUNG ELECTRONICS/BOURNS/YAGEO PH |
| R100           | -         |     1 | 1K             | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   | CR0603-FX-1001ELF                              | BOURNS                              |
| SCREW1-SCREW4  | -         |     4 | P440.375       | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                       | P440.375                                       | GENERIC PART                        |
| SU1-SU25       | -         |    25 | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | STC02SYAN                                      | SULLINS ELECTRONICS CORP.           |
| U1             | -         |     1 | MAX96705GTJ    | IC; HS81 PRELIMINARY; PACKAGE OUTLINE 32 TQFN; 0.50MM PITCH; 21-0140/T3255-8; MAX96705                                  | MAX96705GTJ                                    | MAXIM                               |
| U2,U3,U12      | -         |     3 | MAX1792EUA33   | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; UMAX8                                                                           | MAX1792EUA33                                   | MAXIM                               |
| U4             | -         |     1 | IDT8N0Q001     | EVKIT PART; IC; IDT8N0Q001; CD10 PACKAGE OUTLINE 7X5 BODY; 2.54MM PITCH; CUSTOM PART ONLY                               | IDT8N0Q001                                     | IDT                                 |
| U15            | -         |     1 | MAX3378EEUD+   | IC; TRANS; +/-15KV ESD-PROTECTED, 1UA, 16MBPS, QUAD LOW-VOLTAGE LEVEL TRANSLATOR; TSSOP14                               | MAX3378EEUD+                                   | MAXIM                               |
| U23            | -         |     1 | MAX16952AUE/V+ | IC; CTRL; STEP-DOWN CONTROLLER WITH LOW OPERATING CURRENT; TSSOP16-EP                                                   | MAX16952AUE/V+                                 | MAXIM                               |
| MISC1          | DNI       |     1 | AK67421-1-R    | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS              | AK67421-1-R                                    | ASSMANN                             |
| C37, C59, C128 | DNP       |     3 | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                | N/A                                            | N/A                                 |
| DB1            | DNP       |     1 | TEENSY 3.1     | EVKIT PART; MODULE; CTRL; TEENSY USB DEVELOPMENT BOARD; TH-37; CUSTOM PART ONLY                                         | TEENSY 3.1                                     | PJRC                                |

TOTAL 234

D

C

B

A

J1

PJ-202BH

8

1

3

2

C129

2200PF

8

D5

B360B-13-F

A

C

C127

10UF

DL

DH

R74

30K

C128

OPEN

+

C118

100UF

IN

IN

13

12

15

10

6

9

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

PGND

SGND

17

11

7

5

CS

7

+12V

1

SUP

2

7

4

3

16

14

8

+5V0

A

K

TP\_12V

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

IN

4

4

N2

FDS8449

6

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

C106

0.1UF

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

FB14

120

C108

10UF

+1V8IO

FB1

120

C8

10UF

+3V3

FB3

120

C18

10UF

+1V8VDD

R75

0

C107

0.1UF

C9

0.1UF

R4

41.2K

C17

0.1UF

L25

1.5UH

R58

11K

R38

24.9K

R6

11K

1

2

4

6

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

R1

0.015

5

EP

C2

10UF

U12

MAX1792EUA33

IN

OUT

IN

SHDN

SET

GND

5

9

U2

MAX1792EUA33

IN

OUT

IN

SHDN

SET

EP

GND

5

9

OUT

RST

OUT

RST

+5V0

1

REG+5V

2

C114

USB+5V

100UF

+1V8IO

C103

10UF

C10

3

10UF

+1V8VDD

7

8

3

EP

9

7

8

3

7

8

+3V3

C13

10UF

C104

4.7UF

C11

4.7UF

C14

4.7UF

3

4

POC5V

5

4

4

+5VIN

JU1

USB+5V

IOVDD

1

JU2

IOVDD

1

1

C3

10UF

4

C4

0.1UF

1.8V

EXT

3

2

3.3V

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

FB5

120

C20

4.7UF

FB8

120

C58

4.7UF

FB6

120

C54

4.7UF

3

C6

0.1UF

C19

4.7UF

C57

4.7UF

C53

4.7UF

3

J2

+5VIN

J3

GND

J20

EXT-IOVDD

J34

GND

J19

EXT-DVDD

J18

EXT-AVDD

2

GND1

GND2

X1

X2

PROJECT TITLE:

DRAWING TITLE:

SIZE

&lt;HARDWARE\_NUMBER&gt;

HARDWARE NUMBER:

B B

ENGINEER:

DRAWN BY:

&lt;ENGINEER&gt;

2

&lt;DRAWN\_BY&gt;

TEMPLATE REV:

1.5

GND3

X3

GND4

X4

MAX96705\_711\_EVKIT\_A

1

1

DATE:

&lt;DATE&gt;

REV:

A

SHEET 2 OF 5

D

C

B

A

D

C

B

A

8

RX/SDA

OUT

TX/SCL/DBL

I69

8

IOVDD

J50

2

DBL-H

1

DBL-L

TX/SCL/DBL

U15\_TX/SCL

3

4

POC5V

POC5VIN

POC12V

+12V

POC5V

POC5VIN

+12V

7

POC12V

7

J51

3

3

J52

+5V0

J21

SCLPU

1

POC5VOUT

2

POC+

1

4

C62

0.22UF

+5V0

POC5VOUT

2

4

POC-

1

C33

0.22UF

IOVDD

R7

2.2K

2

6

R9

2.2K

2

1

C64

100UF

C34

100UF

6

J22

SDAPU

C61

0.1UF

C35

0.1UF

LSH\_SDA

1

2

1

2

LSH\_SCL

1

VLC3

J11

VLC4

C60

1000PF

C36

1000PF

2

5

+3V3

5

1

3.3V

IOVDD

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

2

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

J54

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

R37

0

R39

0

3

J55

EXSCLPU

IN

LF+

IN

LF-

3

IN

IN

1

2

3

4

UC\_RX/SDA

UC\_TX/SCL

IN

1

1

J6

2

4

3

IN

2

4

3

VDD\_REF

EXT\_RX/SDA

GND

EXT\_TX/SCL

OUT+

J4

5

OUT-

J5

5

2

LMN0

IN

LF+

IN

AVDD

2

J60

LFAVDD

R16

45.3K

LMN1

J58

LFL+

R17

4.99K

LF-

R18

49.9K

J56

LFR+

1

2

1

2

1

PROJECT TITLE:

MAX96705\_711\_EVKIT\_A

DRAWING TITLE:

SIZE

&lt;HARDWARE\_NUMBER&gt;

HARDWARE NUMBER:

B B

ENGINEER:

DRAWN BY:

&lt;ENGINEER&gt;

2

&lt;DRAWN\_BY&gt;

TEMPLATE REV:

1.5

IN

IN

2

1

2

1

1

R19

45.3K

J59

LFL-

R20

4.99K

R21

49.9K

J57

LFR-

1

DATE:

&lt;DATE&gt;

REV:

A

SHEET 3 OF 5

D

C

B

A

D

C

B

A

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

15

16

IOVDD

8

H1-3

R14

2.2K

R15

2.2K

R28

2.2K

R29

2.2K

8

H1-1

2

2

1

1

1

3

H

J33

LMN0

GPIO4/LMNO

2

1

3

H

J23

LMN1

GPIO5/LMN1

IOVDD

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

15

16

J30

GPIO2

J32

GPIO3

2

H1-2

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

15

16

7

I158

I159

I152

I151

DIN10/GPIO2

DIN11/GPIO3

DIN12/GPIO4/LMN0

LMN0

I157

DIN13/GPIO5/LMN1

I156 LMN1

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

DIN10/GPIO2

DIN11/GPIO3

DIN12/GPIO4/LMN0

DIN13/GPIO5/LMN1

DIN14/HS

DIN15/VS

6

IOVDD

6

2

J44

HIM\_HI

1

R33

30K

5

5

IOVDD

R34

2.2K

1

J40

BWS

H

3

L

J45

1

2

GPO\_LOW

IOVDD

J47

MS/HVEN

1

H

L

2

3

2

3

IOVDD

1

H

H

L

3

L

4

IOVDD

J48

1

3

2

J41

LCCN

L

IOVDD

1

H

J42

CONF0

PWDN

2

2

4

2

3

L

DVDD

AVDD

PCLKIN

I102

TX/SCL/DBL

RX/SDA

IOVDD

1

H

J43

CONF1

3

C15

0.1UF

C21

0.1UF

C22

0.1UF

25

16

15

26

27

28

30

31

32

1

2

3

4

6

7

8

9

10

11

13

14

17

18

19

24

23

3

C23

1000PF

C24

1000PF

C25

1000PF

PCLKIN

PWDN

MS/HVEN

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

DIN10/GPIO2

DIN11/GPIO3

DIN12/GPIO4

DIN13/GPIO5/DE

DIN14/HS

DIN15/VS

GPO/HIM

GPIO1/BWS

LCCEN

CONF0

CONF1

TX/SCL/DBL

RX/SDA

5

AVDD

22

AVDD

29

DVDD

EP

33

12

IOVDD

2

IOVDD\_DUT

1

C26

1000PF

C27

0.1UF

U1

MAX96705GTJ

OUT+

21

OUT-

20

C63

C12

J46

2

IOVDD\_DUT

0.22UF

0.22UF

PROJECT TITLE:

MAX96705\_711\_EVKIT\_A

DRAWING TITLE:

SIZE

&lt;HARDWARE\_NUMBER&gt;

HARDWARE NUMBER:

B B

ENGINEER:

DRAWN BY:

&lt;ENGINEER&gt;

2

&lt;DRAWN\_BY&gt;

TEMPLATE REV:

1.5

IOVDD

1

I109 OUT+

I110

OUT-

DATE:

&lt;DATE&gt;

REV:

A

SHEET 4 OF 5

1

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

H

2

3

L

TNZ\_SDA0

I10

TNZ\_SCL0

I11

PCLK\_SMA

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

8

IDTVDD

IDTVDD

J27

1

3

J26

FSEL0

H

2

1

3

R36

R22

J35

U4\_SDA

IDT\_OE

H

2

L

1

1

1

L

2

2

J25

U4\_SCL

1K

1K

2

4

5

9

10

I45

8

VDD

U4

IDT8N0Q001

GND

IDTVDD

C28

0.1UF

OE

FSEL0

FSEL1

SDATA

SCLK

3

PCLK\_SMA

PCLK\_IDT

I42

TNZ\_SCL0

TNZ\_RX1

J38

PCLK\_IN

3

GND

SCL

TX

I25

TNZ\_SDA0

TNZ\_TX1

I26

SDA

RX

I27

7

7

I24

C29

0.1UF

DNU

DNU

Q

1

7

6

1

3

1

3

C30

10UF

SMA

2

1

4

IDT

J39

UC\_TX/SCL

2

I29

UC\_TX/SCL

J29

UC\_RX/SDA

2

I28

UC\_RX/SDA

6

6

1

+

2

I15

C31

470UF

I52

PCLK\_IDT

PCLKIN

R23

2

L5

120

5

+3V3

C32

10UF

TNZ\_RX1

TNZ\_TX1

TP1

5

I22

I23

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

4

36

35

DB1

TEENSY 3.1

DNI

GND

17

4

PROGRAM

18

34

A14/DAC

19

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

3

3

I92

I93

TNZ\_SCL0

TNZ\_SDA0

2

C85

0.1UF

14

12

13

11

9

10

8

6

7

5

3

4

2

1

C96

0.1UF

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

13

PROJECT TITLE:

MAX96705\_711\_EVKIT\_A

DRAWING TITLE:

SIZE

&lt;HARDWARE\_NUMBER&gt;

HARDWARE NUMBER:

B B

ENGINEER:

DRAWN BY:

&lt;ENGINEER&gt;

2

&lt;DRAWN\_BY&gt;

TEMPLATE REV:

1.5

L4

120

J7

1

USB+5V

C97

1000PF

1

DATE:

&lt;DATE&gt;

REV:

A

SHEET 5 OF 5

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