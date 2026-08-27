<!-- lastmod 2022-08-02 -->
## MAX11947 Evaluation Kit

## General Description

The MAX11947 evaluation kit (EV kit) includes two fully assembled and tested circuit boards (PCBs) that contain all  the  components  necessary  to  evaluate  the  performance  and  functionality  of  the  MAX11947  AISG  V2.0/ V3.0-compliant, fully integrated modem with a 4:1 multiplexer.

The  EV  kit  includes  Windows ®   10-compatible  software that provides a simple graphical user interface (GUI) for controlling the circuit board through a standard USB micro connection. The GUI provides the user access to hardware controls through a MAX32625PICO board.

The  MAX32625PICO  board  is  a  rapid  development platform  designed  to  help  engineers  quickly  implement designs with the MAX32625 Arm ®  Cortex ® -M4 microcontroller with FPU. The board also includes the MAX14750 PMIC that can directly power the entire MAX11947EV kit board.

Additional  features  of  the  MAX11947  include  on  board crystal reference, SMA connectors for RF ports, optional component  footprints  for  filter  design  and  an  off-board RS485 interface providing 2.75kVRMS of isolation.

## Features

- USB-Powered Operation
- Low-Voltage and Low-Power Operation
- On-Board Crystal Reference
- On-Board SPI Interface Circuit
- User-Selectable VCC Supply Voltage
-  +3.3V
-  +5V
- LED Indicators
-  Power
- Active Port
- Operational Modes
- Simple Windows 10-compatible GUI Control
- Lead(Pb)-Free and RoHS Compliant
- Fully Assembled and Tested

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX11947

## Quick Start

## Required Equipment

- User-supplied Windows PC
- Two spare USB ports
- MAX11947 EV kit
- Two MAX11947 EV kit circuit boards
- Two USB A-micro B cables
- One or more 50Ω coax cable
- SMA connectors on both ends

## Recommended Equipment

- Two-channel oscilloscope
- Spectrum analyzer
- Multimeter

## Optional Equipment

- External power supply
- User supplied RS485 peripheral

## MAX11947 EV Kit Files

| FILE                     | DESCRIPTION                      |
|--------------------------|----------------------------------|
| MAX11947EVKit.exe        | EV kit control application       |
| MAX11947EVKit.exe.config | XML configuration file           |
| MAX11947EVKit.pdb        | Program debug database           |
| MaximStyle.dll           | Application extension            |
| MaximStyle.pdb           | Debug database                   |
| RegisterView.xml         | XML SPI register definition file |
| unins000.dat             | Uninstall data file              |
| unins000.exe             | Uninstall application            |

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. The MAX11947 EV Kit Circuit Board, Top (left) and Bottom (right) Views

<!-- image -->

## MAX11947 Evaluation Kit

## Procedure

The MAX11947 EV kit contains two fully assembled and tested  surface-mount  boards.  Follow  the  steps  below  to begin operational evaluation of the performance and features of the MAX11947 AISG modem with Integrated 4:1 RF MUX.

- 1) Verify that shunts on both boards are installed across their default positions as defined in Table 1 and shown in Figure 2 below.
- 2) Connect the two EV kit boards using any of the RF ports (P0-P3) and the 50Ω cable(s).
- 3) Visit www.maximintegrated.com/MAX11947 . On the device landing page select the Design Resources tab then follow the link to download the EV kit software. Once the download has completed, run the installation program. All required files are copied to the local hard drive and icons can be created in the Windows Start menu.
- 4) Connect the software to the hardware.
- a) Connect one (1) USB A to micro-B cable to the PC and one EV kit board (PCB1). Red and green LEDs, 4 each, should be illuminated on the top side of the board along with a single green LED on the bottom.
- b) Start the MAX11947EVKit program by opening its icon in the Start menu or double clicking the executable in the installation folder.
- c) A splash screen showing the program revision information replaces by a custom graphical user interface (GUI).
- d) Select the COM port listed in the connection section drop-down box then click the Connect button.
- e) Select the Auto Update checkbox in the Data Configuration section. The P0 selected LED should be the only one illuminated on the top of the board. The LED on the PICO module should be flashing blue and green indicating communi -cation activity with the PC.
- f) Repeat steps a-e for the second board (PCB2), ensuring to use the newly identified port, result -ing in two application windows independently connected to two PCBs.

## Table 1. Quick Start Jumper Settings

Figure 2. MAX11947 EV Kit Board-Jumper Locations

| JUMPER   | POSITION   |
|----------|------------|
| J2       | 1-2        |
| J3       | 1-2        |
| J4       | Open       |
| J5       | 2-3        |
| J6       | 2-3        |
| J7       | 1-2        |
| J8       | 1-2        |
| J9       | 1-2        |

<!-- image -->

│

## MAX11947 Evaluation Kit

- 5) Map the connections
- a. Select one PCB (PCB1 or PCB2) as a temporary transmitter and one as receiver.
- i. Using the GUI, enable a continuous carrier on the transmit board by clicking the TX ON button.
- ii. Select the desired RF output port (P0-P3)
- b. Scan the ports on the receiver.
- i. Using the second GUI window, select the Scan/Status/Messaging tab
- ii. Scan settings:
1. Automatic
2. Full Dwell
3. 1X Bit Period
- iii. Click the Start Scan button
- c. Note the AISG Carrier indicator, identifying the RF port where the carrier was detected.
- 6) On the receiver PCB GUI
- a. Select the Configuration tab
- b. Change the port selection to match the port where the carrier was detected in step 5c.
- 7) On the transmitter PCB GUI
- a. Disable the output by clicking the TX ON (Continuous) button
- b. Select the Scan/Status/Messaging tab
- c. Enter a hex string message of several bytes (user choice how many) with a space between each byte, i.e. 55 AA 99 33 etc.
- d. Click the Send Message button
- 8) Back on the receiver PCB GUI
- a. Select the Scan/Status/Messaging tab.
- b. Click the Read Message button
- i. The message typed into the transmitter PCB GUI should appear in the RX message box.

Figure 3. TX ON Button States, Continuous Carrier Disabled (left) and Continuous Carrier Enabled (right)

<!-- image -->

Figure 4. Start Scan Button

<!-- image -->

Evaluates: MAX11947

Figure 5. Port Scan Indicators-AISG Carrier Detected on Port 2

<!-- image -->

│

## Detailed Description of Hardware

## Overview

The  MAX11947  EV  kit  circuit  boards  (PCBs)  provide  a flexible environment for evaluating the performance of the MAX11947 AISG Modem with 4:1 RF MUX. The compact 2 x 4 PCB is functionally divided into three sections. The top  third  of  the  board  incorporates  a  MAX32625PICO (PICO) module (on the bottom of the board) which sources power for rest of the PCB, controls the LED indicators, and enables communications through both the SPI and TX/RX interface on the MAX11947.

The center section contains the MAX11947 and minimal support  components  such  as  supply  bypass  capacitors, filter  or  DC block capacitors, the pullup resistor for SYNCOUT,  and  an  8.704MHz  reference  crystal.  The MAX11947 RF ports are routed to the board edge using 50Ω  microstrip  through  several  SMT  component  foot -prints allowing for custom filtering for the AISG/RF signal boundary. The off-board  connections  are  through  edgelaunch SMA connectors.

The  lower  third  of  the  board  integrates  the  MAX14852 (also  on  the  bottom  layer),  providing  an  isolated  RX/TX connection  with  the  MAX11947.  The  MAX14852  combines 2.75kVRMS of isolation with ±35kV ESD protection. The off-board signaling is available through an unpopulated SIP (J1) connector, where a pin-strip or header can be installed or a user defined connector can be wired directly. The device can be powered from the on-board VL supply or by an off-board supply.

## Power Supplies

Each  PCB  can  be  run  entirely  from  the  USB  sourced power  supplies  of  5V  (direct  USB)  or  3.3V  (regulated output  from  PICO  module).  The  two  MAX11947  supply domains are selected using shorting block jumpers. Both the VCC and VL supplies can be connected to either onboard or external supplies through J2 for VCC and J7 for VL. The on-board VL supply is constrained to 3.3V due to limitations on the digital interface with the PICO module. However, the on-board VCC source can use the regulated 3.3V level or the 5V USB source by selecting either with the J6 jumper. Supply currents can be monitored using J2 for VCC or J3 for VL.

## Evaluates: MAX11947

The MAX14852 is connected to the VL domain by default using J8. An external, isolated, power supply can be used for the off-board interface by swapping the position of J8 to  use  the  external  connection  and  removing  J9  (GND short).

## LED Indicators

There  are  11  LED  indicators  on  the  PCB.  One  LED  is located  on  the  PICO  module,  and  turns  green  when connected to a PC USB port, and turns blue when communicating  with  the  PC.  DS1  and  DS2  are  yellow  and indicate  the  status  of  the  SCAN  operating  mode  of  the MAX11947; they illuminate  only  when  the  Manual  scan mode is selected. DS3-DS6 are green and placed near the four SMA connectors for the RF ports, P0-P3. All of these  are  illuminated  when  the  USB  power  is  applied. Once the GUI control is enabled, only the selected port is  illuminated.  DS7-DS10  are  unused  by  the  current GUI release (Rev 1.2.4) but are populated and could be implemented by end user edits to the software. Contact the factory for more details.

## SPI Interface

The SPI signals from the MAX32625PICO are limited to 3.3V operation, thus restricting  the  supported,  on-board VL supply to that voltage. However, the MAX11947 specifies VL anywhere within the 1.6V to 5.5V range. The SPI signals (CSB, SCLK, MOSI, MISO) and the transmit logic signals  (TXIN/RXOUT/DIR)  must  be  disconnected  from the PICO module when using an external VL supply level set to any value other than 3.3V.

## Table 2. LED Indicator Functions

| LED ID   | COLOR   | FUNCTION             |
|----------|---------|----------------------|
| DS1      | YELLOW  | Manual scan selected |
| DS2      | YELLOW  | Manual scan active   |
| DS3      | GREEN   | P0 selected          |
| DS4      | GREEN   | P1 selected          |
| DS5      | GREEN   | P2 selected          |
| DS6      | GREEN   | P3 selected          |
| DS7-DS10 | RED     | Undefined            |

Operation  of  the  PCB  at  VL  levels  other  than  3.3V requires the user to make several modifications. First, a SPI controller is suggested which can tolerate the target supply  levels  with  appropriate  VIH  and  VIL  capabilities. Second the SPI and RX/TX logic signals must be disconnected from the PICO module. These signals are disconnected  by  removing  resistors  placed  in  series  between the module and the MAX11947. The RXOUT connection (RXD), routed through R31, should be opened by removing the 1kΩ resistor. All the other signals use SMT foot -prints with copper shorts. These are opened by carefully cutting and removing the copper foil on the surface of the board between the component pads. Damage to the SMT pads  should  be  minimized  to  support  reconnecting  the PICO module at a later time.

Once  the  signals  are  isolated  from  the  PICO  module, the external SPI signals can be connected through J10. Note, that the SPI signal levels are required to meet the VIH/VIL/VOH/VOL specifications for the MAX11947 and it determines by the VL level applied. The TX/RX signals can  remain  connected  to  the  MAX14852  and  the  DIR signal  from  the  MAX11947  controls  RS-485  TX  or  RX operation in half-duplex mode. However, the MAX143852 is  only  specified  down  to  1.71V,  so  another  signaling source  can  be  required  when  operating  the  MAX11947 below that level.

## Frequency Reference

The  MAX11947  EV  kit  PCB  includes  a  crystal  to  provide the 8.704MHz reference frequency required by the MAX11947. The crystal was selected to match the XTAL1/ XTAL2  input  requirements  and  has  been  validated  for operation across the -40°C to +105°C temperature range for both the startup and operation.

The  MAX11947  can  also  operate  with  a  single-ended input  reference  signal  (clock  or  oscillator)  such  as  the SYNC output from another MAX11947. When this mode is desired, the user must provide a reference signal meeting the XTAL1 input specifications which are referenced to VCC. Install J4 to ground the input to XTAL2 and switch J5 jumper to pins 1-2 which connects the XTAL1 pin to the edge launch SMA connector labeled SYNC IN.

Another SMA connector is provided, along with a 1k pullup,  for  the  open  drain  SYNC  OUT  signal.  Connecting the SYNC OUT of one MAX11947 board to the properly configured SYNC IN of the second MAX11947 can demonstrate the daisy chain capabilities of the AISG modem.

## RS-485 Interface

The MAX14852 RS-485 transceiver provides modem TX/ RX communication  path  which  is  independent  from  the PICO module. The MAX11947 RXOUT and TXIN signals are  connected  to  the  MAX14852  TXD  and  RXD  pins, which  provides  pass-through  communications  between the RS-485 bus and the RF domain. The DIR signal from the  MAX11947  acts  as  both  the  receiver  enable  (REN, active  low)  and  driver  output  enable  (DE,  active  high) inputs  to  the  MAX14852, providing flow-control with the RS-485 bus.

The  off-board  interface  is  powered  by  the  on-board  VL net  by  default  but  can  be  powered  independently  as well. Test point connections are provided for the external power and ground connections and can be selected using J8.  The  external  power  connections  are  also  provided along with the RS-485 bus connections on J1, a 1x6 SIP through-hole connector footprint. The connector footprint is  designed  to  accommodate  a  standard  0.025  square post  pin  strip  on  0.1  center.  Optionally,  discrete  wire connections for each signal can employed for a custom interconnect.

The  MAX14852  allows  for  up  to  2.75kVRMS  isolation between supply domains. When an isolated external supply  is  connected,  remove  J9,  which  shorts  the  external ground to the main board ground.

## RF Ports

The four multiplexed RF ports of the MAX11947 are connected  to  four  SMA  connectors  on  the  left  side  of  the board. Each port includes a 470pF filtering capacitor and a  series  DC  blocking  capacitor.  50Ω  microstrip  is  used to  route  between  the  MAX11947  MUX  ports  and  the board edge were a multistage π-network is available for the installation of additional components for filtering and impedance matching requirements.

Edge launch SMA connectors are provided, one for each RF  port,  to  ensure  a  high-fidelity  interconnect  within  a small footprint.

## Jumper Options

The numerous jumpers on the PCB provide the flexibility to change the operating conditions and capabilities of the MAX11947. There are 10 components with the J designation, two of these are the 1x6 SIP outlines: J1 and J10. The following table provides listing of all valid jumper positions and the function controlled.

## Table 3. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                            |
|----------|------------|-----------------------------------------------------|
| J2       | 1-2        | VCC connected to on-board source                    |
|          | 2-3        | VCC connected to EXT_VCC test point                 |
| J3       | 1-2        | VL connection to the MAX11947                       |
|          | -          | VL current meter connection for the MAX11947        |
| J4       | -          | XTAL2 connected to Y1, oscillator enabled           |
|          | 1-2        | XTAL2 connected to GND, apply 8.704MHz at SYNC_IN   |
| J5       | 1-2        | External reference mode, XTAL1 connected to SYNC_IN |
|          | 2-3        | XTAL1 connected to Y1, oscillator enabled           |
| J6       | 1-2        | On-board VCC option connected to 3.3V               |
|          | 2-3        | On-board VCC option connected to 5V                 |
| J7       | 1-2        | VL source connected to on-board 3.3V                |
|          | 2-3        | VL source connected to EXT_VL test point            |
| J8       | 1-2        | On-board VL used for RS-485 supply                  |
|          | 2-3        | EXT_RS485 test point connected for RS-485 supply    |
| J9       | -          | RS-485 GND reference Isolated from board GND        |
|          | 1-2        | RS-485 GND connected to board GND                   |

## Detailed Description of Software

## Overview

The MAX11947 evaluation kit tool is a Windows 10 application  (APP)  installed  on  a  host  PC.  When  combined with the firmware installed on the MAX32625PICO module,  PC-to-SPI  communications  are  enabled.  The  APP provides  controls  for  monitor  and/or  modification  of  the register contents within the MAX11947 which provide configuration and status information to and from the device.

The APP provides a few simple menu options including Save Configuration, Load Configuration, and Exit options under the File menu. The Help menu provides an About option which displays the initial splash screen (Figure 6) that  is  also  displayed  upon  initial  execution  of  the  GUI based application. The splash screen can be disabled by checking the appropriate box.

The main features of the APP are broken into three functional groups arranged on separate tabs within the main GUI  framework:  Configuration  (Figure  7),  Scan/Status/ Messaging  (Figure  8),  and  Register  Map  (Figure  10). Each of these tabs is also broken into various sections which is discussed in detail below. The GUI starts on the Configuration tab  and  the  other  tabs  are  inaccessible until a valid connection is made with a MAX11947 EV kit over a USB Comm Port.

The bottom status strip of the main window displays three pieces of information. The left-most block is for messages from the APP including the firmware version of the connected  PCB.  The  right-most  block  states  Disconnected or  Connected,  and  the  middle  block  indicates  the  state (enabled or disabled) of the UART in a connected PICO module.

│

Evaluates: MAX11947

Figure 6. MAX11947 EV Kit Tool Splash Screen

<!-- image -->

## Configuration Tab

The Configuration tab  is  displayed  by  default  following the start of the software and after the Splash Screen. The first action is to select and connect the GUI to an EV kit PCB. The Connection section, located in the upper left corner of the Configuration tab, populates the COM Port drop-down  box  with  any  MAX11947  EV  kit  boards  that have  been  connected  to  the  computers  USB  ports  and are not already connected to another instance of the GUI. Select an available port and click the Connect button to begin interacting with the hardware.

Immediately  below  the  Connection  block  is  the Data Configuration group box. The tools in this section allow manipulation of the UART pins on the PICO module, and enable the Auto Update function of the GUI. Auto Update periodically reads all the register values in the device and updates the GUI to reflect the actual status of the device.

The Power section  provides  a  set  of  radio  buttons  to switch between the Active , Standby and Power Down modes of the MAX11947. A check box is also provided which allows the crystal oscillator to be left on when the Power Down mode is selected, ensuring the SYNCOUT signal is available for use as needed.

The MUX section,  as  the  name  implies,  controls  the selection of which RF Port is connected to the modem. The  controls  are  further  divided  into  two  groups,  the MUX-to-Port common connection and the individual port selected when the modem is connected. The buttons only allow one of the options to be selected within each group. The selection of the Disconnected option deselects any active port and all ports are terminated to ground.

## MAX11947 Evaluation Kit

The SYNCOUT group  is  next  to  the MUX and  includes a Disabled option or allows the user to select the output drive level.

The bottom section is for configuring the RX/TX configuration power levels. Settings in this section include a dropdown list to select the RX sensitivity threshold and one for

the TX output power level. Radio buttons are provided to switch between the supported Data Rates (9.6kbps is the default for AISG v). Finally, a TX ON button is provided which produces a continuous AISG carrier on the selected port.  Once  the  button  is  clicked,  the  name  changes  to TX ON (Continuous) to  indicate  the  modem  is  actively transmitting.

Figure 7. MAX11947 EV Kit Tool Configuration Tab

<!-- image -->

│

## MAX11947 Evaluation Kit

## Scan/Status/Messaging Tab

The  configuration  and  performance  of  a  Port  scan  are provided on the first  tool  group  on  this  tab,  titled  Scan. The Scan block is then further divided into SCAN Mode , Port Mask (Excluded) and Dwell Settings .  The SCAN Mode section can switch between Manual and Automatic scan  and  provides  a  checkbox  to  enable  scan  on  all unmasked ports regardless of carrier detection status.

The Start Scan button  initiates  the  scan  process  within the  MAX11947.  The  automatic  scan  is  completed  too quickly to allow feedback during the scan process, however if any port had an AISG carrier detected, it reportes in the Status section. The Index button and Current Port text box are activated during a manual scan; the button increments through the ports and the text box displays the currently connected port, if any.

Figure 8. MAX11947 EV Kit Tool Scan/Status/Messaging Tab

<!-- image -->

│

## MAX11947 Evaluation Kit

Additional scan settings include the Port Mask (Excluded) options for skipping selected ports. The Dwell Settings impact how long the automatic scan lasts. Enabling the Full Dwell option causes the state machine to wait for the entire Dwell Time selected.

The Status section cannot be modified directly, but rather displays the state of the various bits within the Scan register  of  the  MAX11947.  When Auto  Update  is  enabled, the state of the various monitors are updated accordingly.

The final section of this tab is the Messaging block which allows  the  user  to  send  and  receive  messages  from the  GUI  to  the  MAX1947  for  transmission  and  to  read any  messages  that  the  MAX11947  has  received.  The message  format  is  a  text  string  of  hexadecimal  space separated values which can be up to 180 bytes in length. The  hexadecimal  message  is  sent  once  by  clicking  on the Send Message button. The Continuous Mode option for  sending  messages  is  useful  for  evaluating  spectral emissions when transmitting a modulated signal. An error condition has been identified that occurs when attempting a  &lt;Read  Message&gt;  on  the  receiver  GUI  that  throws  a message as shown in Figure 9. Click the Continue option

## Evaluates: MAX11947

to proceed. Normal operation of the receiver GUI returns when continuous messaging is disabled.

Received messages, up to the 180-byte limit, are stored in the PICO module until cleared by the user. The message is retrieved by clicking on the Read Message button. The Clear Read Buffer option clears the buffer on the PICO module, ensuring a clear buffer for future messages.

## Register Map Tab

The  Register  Map  tab  is  relatively  self-explanatory.  It provides  a  few  buttons  to Write  All  Registers , Read Register X ,  and Write Register X ,  where X is the currently  selected  register  address  from  the  list.  Click  the desired  register  address  and  name  on  the  left  side  of the tab to display the contents within the register at the top of the page in either hex or decimal format. Each bit field within the register is shown with the contents at the top of the bit field description table. The bit fields can be individually modified by clicking the field (to switch states) and entering the new value (for multi-bit fields).

Figure 9. Potential Error Message Due to Continuous Messaging Mode

<!-- image -->

│

Figure 10. MAX11947 EV Kit Tool Register Map Tab

<!-- image -->

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NDKAmerica, Inc                        | 408-428-0800 | www.ndk.com                 |
| Susumu International USA               | 208-328-0307 | www.susumu-usa.com          |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX11947 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11947EVKIT# | EV Kit |

Evaluates: MAX11947

│

## MAX11947 EV Kit Bill of Materials

| ITEM     | REF_DES                             | DNI/DNP   | QTY   | MFG PART #                                                                                                                                   | MANUFACTURER                                 | VALUE          | DESCRIPTION                                                                                                               |
|----------|-------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C5, C27-C29                     | -         | 5     | 885012206071;CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA;C0603C104K3RAC; GRM188R71E104KA01;C1608X7R1E104K; 06033C104KAT2A;CGA3E2X7R1E104K080AA | WURTH ELECTRONICS INC; TDK;TDK;KEMET;AVX;TDK | 0.1UF          | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC                |
| 2        | C2, C3                              | -         | 2     | C0402C390J5GAC; GRM1555C1H390JA01                                                                                                            | KEMET;MURATA                                 | 39PF           | CAPACITOR; SMT; 0402; CERAMIC; 39pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                  |
| 3        | C4, C30, C31                        | -         | 3     | UMK107AB7105KA;CC0603KRX7R9BB105                                                                                                             | TAIYO YUDEN;YAGEO                            | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                  |
| 4        | C6, C32                             | -         | 2     | C1608X5R1A106K080AC                                                                                                                          | TDK                                          | 10UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                          |
| 5        | C7-C10                              | -         | 4     | C0402S471K5RAC; GRM155R71H471K; GRM155R71H471KA01;C1005X7R1H471K050BA                                                                        | KEMET;MURATA; MURATA;TDK                     | 470PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 470PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
| 6        | C11-C14                             | -         | 4     | TMK105BJ104KV; GRM155R61E104KA87                                                                                                             | TAIYO YUDEN;MURATA                           | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
| 7        | DIR, RXD, TXD                       | -         | 3     | 5011                                                                                                                                         | KEYSTONE                                     | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
| 8        | DS1, DS2                            | -         | 2     | LTST-C190YKT                                                                                                                                 | LITE-ON ELECTRONICS INC.                     | LTST-C190YKT   | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                        |
| 9        | DS3-DS6                             | -         | 4     | LTST-C190GKT                                                                                                                                 | LITE-ON ELECTRONICS INC.                     | LTST-C190GKT   | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                        |
| 10       | DS7-DS10                            | -         | 4     | LTST-C190EKT                                                                                                                                 | LITE-ON ELECTRONICS INC.                     | LTST-C190EKT   | DIODE; LED; STANDARD; RED; SMT (0603); PIV=2V; IF=0.02A                                                                   |
| 11       | EXT_GND, EXT_RS485, EXT_VCC, EXT_VL | -         | 4     | 5010                                                                                                                                         | KEYSTONE                                     | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                     |
| 12       | J1, J10                             | -         | 2     | PEC06SAAN                                                                                                                                    | SULLINS ELECTRONICS CORP.                    | PEC06SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                                                 |
| 13       | J2, J5                              | -         | 2     | TSW-103-07-T-S                                                                                                                               | SAMTEC                                       | TSW-103-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                          |
| 14       | J3, J4                              | -         | 2     | TSW-102-07-T-S                                                                                                                               | SAMTEC                                       | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                   |
| 15       | J6-J8                               | -         | 3     | PEC03SAAN                                                                                                                                    | SULLINS                                      | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                 |
| 16       | J9                                  | -         | 1     | PEC02SAAN                                                                                                                                    | SULLINS                                      | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                 |
| 17       | P0-P3, SYNC_IN, SYNC_OUT            | -         | 6     | 132322                                                                                                                                       | AMPHENOL                                     | 132322         | CONNECTOR; FEMALE; BOARDMOUNT; SMA END LAUNCH RECEPT. JACK;0.25IN SQUARE FLANGE; 0.062IN BOARD THICKNESS; STRAIGHT; 5PINS |
| 18       | R1                                  | -         | 1     | PLT0603Z2500AS                                                                                                                               | VISHAY DALE                                  | 250            | RESISTOR; 0603; 250 OHM; 0.05%; 5PPM; 0.15W; THIN FILM                                                                    |
| 19       | R3                                  | -         | 1     | CRCW060349R9FK                                                                                                                               | VISHAY DALE                                  | 49.9           | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |
| 20       | R4-R15                              | -         | 12    | CRCW06030000Z0                                                                                                                               | VISHAY DALE                                  | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                       |
| 21       | R16-R18, R21-R27                    | -         | 10    | CRCW0603499RFK;RK73H1J4990FT; ERJ-3EKF4990;RC1608F4990                                                                                       | KOA;VISHAY;PANASONIC; SAMSUNG                | 499            | RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                    |
| 22       | R19, R20                            | -         | 2     | TNPW060310K0BE; RN731JTTD1002B                                                                                                               | VISHAY DALE; KOA SPEER ELECTRONICS           | 10K            | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                                    |
| 23       | R28, R29                            | -         | 2     | CRCW0603120RFK                                                                                                                               | VISHAY DALE                                  | 120            | RESISTOR, 0603, 120 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                    |
| 24       | R30, R31                            | -         | 2     | RR0816P-102-B-T5;PCF0603R-1K0B                                                                                                               | SUSUMU CO LTD; TT ELECTRONICS                | 1K             | RESISTOR; 0603; 1K OHM; 0.1%; 25PPM; 0.063W; METAL FILM                                                                   |
| 25       | U1                                  | -         | 1     | MAX11947GTP+                                                                                                                                 | MAXIM                                        | MAX11947GTP+   | IC; UCON; 4 CHANNEL AISG INTEGRATED MODEM; TQFN20-EP                                                                      |
| 26       | U2                                  | -         | 1     | MAX7320ATE+                                                                                                                                  | MAXIM                                        | MAX7320ATE+    | IC; INFC; I2C PORT EXPANDER WITH EIGHT PUSH-PULL OUTPUT; TQFN16-EP                                                        |
| 27       | U3                                  | -         | 1     | MAX32625PICO                                                                                                                                 | MAXIM                                        | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD           |
| 28       | U4                                  | -         | 1     | MAX14852GWE+                                                                                                                                 | MAXIM                                        | MAX14852       | EVKIT PART-IC; PACKAGE CODE: W16M+10; OUTLINE DRAWING NO.: 21-0042; LAND PATTERN DRAWING NO.: 90-0107; WSOIC16 300MIL     |
| 29       | Y1                                  | -         | 1     | SSL87040N1HS188F0-0                                                                                                                          | HONG KONG CRYSTALS                           | 8.704MHZ       | CRYSTAL; SMT; 18PF; 8.704MHZ; +/-30PPM; +/-50PPM ;                                                                        |
| 30       | PCB                                 | -         | 1     | MAX11947                                                                                                                                     | MAXIM                                        | PCB            | PCB:MAX11947                                                                                                              |
| 31       | R39                                 | DNP       | 0     | CRCW06030000Z0                                                                                                                               | VISHAY DALE                                  | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN;                    |
| 33       | C15-C26                             | DNP       | 0     | N/A                                                                                                                                          | N/A                                          | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                  |
| 34 TOTAL | R2, R32-R38                         | DNP       | 0 88  | N/A                                                                                                                                          | N/A                                          | SHORT          | PACKAGE OUTLINE 0603 RESISTOR                                                                                             |

Evaluates: MAX11947

## MAX11947 EV Kit Schematics

<!-- image -->

## MAX11947 EV Kit Schematics (continued)

<!-- image -->

│

## MAX11947 EV Kit PCB layouts

MAX11947 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX11947 EV Kit PCB Layout-Top

<!-- image -->

│

## MAX11947 EV Kit PCB layouts (continued)

MAX11947 EV Kit PCB Layout-Internal2

<!-- image -->

MAX11947 EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX11947 EV Kit PCB layouts (continued)

MAX11947 EV Kit PCB Layout-Bottom

<!-- image -->

MAX11947 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11947