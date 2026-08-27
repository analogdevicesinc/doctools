<!-- lastmod 2022-08-03 -->
## MAX32600 Evaluation Kit

## General Description

The  MAX32600  evaluation  kit  (EV  kit) provides a convenient platform for evaluating the capabilities of the MAX32600  wellness  measurement  microcontroller.  The EV kit also provides a complete functional system, ideal for developing and debugging applications.

The  evaluation board  includes a  MAX32600  circuit, multiple power options, headers for access to the processor's I/O port pins and analog front-end devices, an 8-digit LCD, USB interface, UART interface, low-power Bluetooth ® transceiver, and other general-purpose IO devices.

## Features

- Easily Load and Debug Code Using the Included JTAG Adapter
- Selectable Power Sources Including USB, Coin Cell, Two AAA Batteries, or a Bench Power Supply
- Headers for Accessing MAX32600 I/O Pins and Analog Front-End (AFE) Input and Output Signals
- On-Board 8-Digit Alphanumeric LCD Glass

## EV Kit Contents

<!-- image -->

Evaluates: MAX32600

- MAX32600 Internal Real-Time Clock (RTC) with On-Board Supercap Keep-Alive Power
- On-Board Bluetooth 4.0 BLE Transceiver
- General-Purpose Pushbutton Switch, Indicator LEDs, and Beeper (All Connected to GPIOs) for User I/O
- Prototyping Matrix (0.1in Grid) with Integrated Power Rails for Customer Circuitry
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX32600 with Preprogrammed Demo
- Olimex Arm ® -USB-TINY-H JTAG Adapter with JTAG Ribbon Cable
- USB Standard A-to-Standard-B Cable (for Connecting the Olimex JTAG Adapter to a PC)
- USB Standard-A-to-Standard-B Cable
- USB Standard-A-to-Micro-B Adapter Cable
- Quick Start Guide

Ordering Information appears at end of data sheet.

Arm is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Maxim is under license.

<!-- image -->

## Quick Start

## Getting Started

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the EV kit board from its packaging. Inspect the  board  to  make  sure  that  no  damage  occurred during shipment.
- 2) Jumpers/shunts were preinstalled prior to testing and packaging. By default, they select the USB interface as  the  source  of  power  for  the  EV  kit  board.  The default jumper settings and all the jumper descriptions are described in the Detailed Description section.
- 3) The MAX32600 is preprogrammed with a Hello World demo program. To power up the board and run the demo,  simply  connect  the  Micro-USB  cable  to  the Micro-USB jack found on the bottom side of the EV kit PCB. The jack is labeled CN1 . To get +5V power, the other end of the Micro-USB cable can either be connected to a computer or to a USB wall charger. No data is sent over the USB in this demo.
- 4) Once power is applied, the Hello World demo begins, and the three LEDS (D4-D6) start flashing in an alter -nating fashion.
- 5) To  change  the  LED  flashing  sequence,  press  the switch labeled TEST (SW1).
- 6) The demo also displays scrolling text on the LCD.
- 7) Verify that the USB port is supplying +5V if the LEDs do not flash.
- 8) Do  not  connect  any  additional  USB  cables  or  the Olimex JTAG adapter until after the tool chain/drivers are installed.

If the demo runs as expected, the next step is to download and run the installer, as described in the Quick Start Guide. The  installer  is  a  small  application  that  allows  the  user to  select  which  components the user wants to download and install, including tools, drivers, and documentation. A description of each component and the required hard-drive size is available by clicking on the respective component.

## MAX32600 Evaluation Kit

## Block Diagram

<!-- image -->

│

Evaluates: MAX32600

## MAX32600 EV Kit Board

<!-- image -->

│

## Detailed Description

This section describes the major functions/components of the EV kit. This EV kit is general-purpose in nature and provides many user-selectable options.

## Board Power

The EV kit can be powered several ways.

The  default  jumper  settings  select  the  USB  interface as  the  source  of  power  for  the  EV  kit  board.  To  power up  the  board,  simply  connect  the  included  Micro-USB cable to the Micro-USB jack (labeled CN1) found on the bottom  side  of  the  EV  kit  PCB.  To  get  +5V  power,  the other end of the Micro-USB cable can either be connected to a computer or a USB wall charger. No data is sent over the USB, by default.

When 5V is available through the USB CN1 connector, the MAX32600 (IC) is automatically powered from this 5V input. When the IC senses 5V on its V BUS  pin, internal power management automatically switches to utilize the VBUS input, with no power drawn from the V DD  supply by the IC. Note that the U2 regulator output is set to 3.6V. This  allows  both  the  IC  and  on-board  peripherals  to  be powered  by  the  USB  supply  when  present,  and  when the USB is not connected, closing jumper J12 allows the board peripherals to be powered from the same supply that powers V DD . When the USB is connected, the 3.6V output supply overrides the V DD  source for the purposes of powering V DDIO\_P , since current will be forced through Schottky  diode  D3  and  no  current  drawn  through  D1; otherwise,  the  IC's  main  power-supply  input  (V DD )  can be supplied by on-board batteries or an external bench power supply. For the battery, the user can select either a lithium coin cell (Panasonic CR2032 or equivalent) or two AAA  batteries.  When  using  the  bench  supply,  carefully observe the V DD  limits (3.6V max). These power options are selectable with the combination of headers J5 and J4. Pin J5-2 is jumpered to one of the surrounding three pins to select the desired input. The V DD  input rail is protected against accidental polarity reversals by a resettable fuse (F1) and Schottky diode (D2).

Jumpers  J75/J76  provide  several  other  options  for powering  the  on-board  peripheral  devices,  such  as  the Bluetooth transceiver, LEDs, pushbutton input switches, and piezo buzzer. These options are the currently selected V DD  source supply (on-board batteries/bench supply, overridden  by  the  3.6V  regulator  output  when  the  USB is  connected), the IC's V DDIO  output or V REG18  output. Note that V DDIO  and V REG18  have load limits; refer to the MAX32600 IC data sheet for more details.

In  cases  where  power  is  not  supplied  through  the MAX32600  V DD   or  V BUS   pins,  the  internal  RTC  and battery-backed states of the IC are maintained by drawing power from the  0.22mF  supercap  on  V RTC.  Application firmware on the IC must first ensure that the supercap has been charged by setting the appropriate control registers; refer to the User's Guide for more details.

## Current Monitoring

The VDD, VBUS, and VRTC power rails into the IC incorporate low-resistancel series resistors for measuring supply currents. The VDD and VBUS rails have 1.0Ω resistors, which provide 1mV/mA (or 1µV/µA) sensitivity. The VRTC rail  has  a  100Ω  resistor  to  provide  higher  sensitivity (100µV/µA). Each resistor has two standard 2mm (.080in) tip jacks for access.

The  VDDIO\_P  rail  that  powers  all  peripherals  on  the board, as detailed above, also has a 1.0Ω series resistor to use for similar current measurements.

## Pushbuttons

Pushbutton  switch  SW1  can  be  used  to  generate  an input for test purposes on port pin P0.7; SW1 is normally open, and therefore, provides a logic 0 when depressed. Firmware defines the action taken on this switch closure.

Use pushbutton SW2 to manually reset the IC (systemreset source); SW2 is normally open and asserts SRSTN (system reset) when depressed.

Pushbutton SW3 provides a global POR reset function for the IC by asserting the RSTN input.

## USB

The  IC  features an  integrated USB  2.0  full-speed interface  (12Mbps). This  interface  is  accessible  through the USB Micro-B receptacle, CN1.

## USB-to-UART Bridge

A USB-to-UART bridge chip (FTDI FT230X) is available on the EV kit. This bridge eliminates the requirement for a physical RS-232 COM port. Instead, MAX32600 UART access  is  through  the  USB  standard-B  connector,  J73. Default parameters are 57600 baud, 8 bits, no parity, one stop bit, and no flow control.

The FT230X provides adjustable UART I/O levels based on  its  VCCIO  input.  Connecting  VCCIO  to  V DDIO\_P (using  J74/J75)  enables  the  FT230X  I/O  levels  to  track the IC's I/O levels. Maintaining  this  compatibility  is important because of the wide operating range of the IC.

## LEDs

Three  low-power  (2mA  typ)  LEDs  with  series  currentlimiting resistors are included. LEDs D4 (green), D5 (red) and  D6  (yellow)  connect  to  the  MAX32600  GPIO  pins P1.6,  P1.5,  and  P1.4,  respectively.  An  LED  illuminates when the appropriate GPIO pin is driven low.

## Beeper

A piezoelectric beeper connects to port P1.7. The beeper is  activated  when  the  P1.7  output  is  a  square-wave signal.  Maximum  volume  is  obtained  at  the  beeper resonant frequency, which is between 4kHz and 4.5kHz. Long-term DC bias should not be applied to the beeper, thus the default P1.7 output should be held at logic 1 (or open-circuit) when the beeper is not driven. For increased volume,  drive  the  beeper  differentially  by  installing  R46 and uninstalling R45 and C28. P1.4 must then provide the complement of the P1.7 output.

## Bluetooth Low-Energy (BLE) Controller

A  low-power  Bluetooth  controller  (EM9301)  is  included on the EV kit board. The EM9301 controller is Bluetooth Specification  V4.0  compliant.  Communication  with  the IC  is  selectable  through  either  an  SPI  or  UART  interface  using  jumpers  J36  and  J37.  An  in-board  PCB antenna  provides  a  convenient  RF  interface.  A  folded dipole  formed  by  PCB  etch  is  approximately  200Ω  and connects directly to the EM9301 RF stage. Refer to the EM  Microelectronic  EM9301  data  sheet  for  additional details.

## HF Crystal/Oscillator

The  IC  operates  from  an  external  24MHz,  12MHz,  or 8MHz crystal. The EV kit board has an 8MHz crystal (Y2) installed.  Optionally,  an  external  precision  clock  source can be selected by installing R27 and depopulating R28. J30 is the SMA connector for input of the external highfrequency clock if the crystal is not used.

## SMA Connectors

SMA connectors are included on several AFE interfaces for more robust connectivity to test equipment, if desired. J26  and  J25  provide  access  to  the  analog  mux  inputs, AIN2+  and  AIN2-/AIN10+,  respectively.  The  configuration  of  these  two  pins  is  programmable.  They  can  be combined  as  a  single  differential  input,  or  seen  as independent single-ended inputs.

J28 provides access to the OPAMP-D output, so the output of any of the four D-to-A converters can be examined.

## Temperature Sensor

Transistor  Q1  is  configured  as  a  forward-biased  diode with  a  series  resistor,  R17.  If  desired,  this  circuit  can be  designed  into  a  constant-current  configuration  using other  MAX32600  AFE  devices.  See  Maxim  Application Note  4296: Measuring  Temperature  with  the  MAX1358 Data Acquisition  System for  an  explanation  of  a  similar example configuration using the MAX1358.

## JTAG Connector

The  Arm  standard  20-pin  connector  is  provided  by shrouded  header  JTP1.  Various  debugger  modules  are available for this interface. The Olimex ARM-USB-TINY-H debugger is included with the EV kit.

## LCD Glass

The IC provides an integrated LCD controller for driving up  to  160  segments. A  standard  8-digit,  reflective  LCD glass is included on the EV kit board. Each digit is comprised  of  a  14-segment  character,  plus  a  decimal  point and apostrophe for a total segment count of 8 x 16 = 128.

## Prototyping Area

An area for adding customer-specific circuitry is provided. This matrix is on 0.1in spacing and is usable for solder or  wire-wrap  construction.  Power  and  ground  rails  run through  the  matrix.  The  pads  are  interconnected,  as shown in Figure 1. In addition, one of the power rails can switch between V DDIO\_P  and VDDA3ADC. Refer to the MAX32600 IC data sheet for VDDA3ADC current-sourcing characteristics.

Figure 1. MAX32600 EV Kit Prototype Area

<!-- image -->

│

## MAX32600 Evaluation Kit

## Jumper Descriptions

Table 1 details the functions of the configurable jumper headers on the EV kit board. The headers are standard 0.1in spacing and .025in posts. Settings in Table 1 marked with an asterisk (*) indicate the default settings.

Table 1. EV Kit Jumper Functions and Default Settings

| JUMPER                     | SETTING             | EFFECT OF SETTING                                                                                                                                                                                                                          |
|----------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J4, J5 (V IN SEL)          | Open*               | Board is powered by the USB (CN1).                                                                                                                                                                                                         |
| J4, J5 (V IN SEL)          | J5-2 to J4-1 Closed | Selects the external lab supply as power option for the board. The external supply must be connected through the J1(+) and J2(-) banana jacks. Note: Carefully observe polarity and the 3.6V VDD maximum.                                  |
| J4, J5 (V IN SEL)          | J5-2 to J5-1 Closed | Selects the coin-cell battery as power option for the board. A 3V lithium coin cell (CR2032 or equivalent) must be installed in BH2. The (+) side of the battery is UP.                                                                    |
| J4, J5 (V IN SEL)          | J5-2 to J5-3 Closed | Selects the AAA batteries as power option for the board. Two AAA cells (nominal 1.5V each) must be installed in BH1. Observe polarities as marked in the holder.                                                                           |
| J10 (VDD BRK)              | Open                | Connection broken between the MAX32600 VDD power input and Batteries/Ext PS.                                                                                                                                                               |
| J10 (VDD BRK)              | Closed*             | Connection enabled between the MAX32600 VDD power input and Batteries/Ext PS.                                                                                                                                                              |
| J12 (BATT/EXT VDDIO_P BRK) | Open                | Connection broken between VDDIO_P (board peripherals power) and Batteries/Ext PS.                                                                                                                                                          |
| J12 (BATT/EXT VDDIO_P BRK) | Closed*             | Connection enabled between VDDIO_P (board peripherals power) and Batteries/Ext PS.                                                                                                                                                         |
| J16 (VRTC BRK)             | Open                | Connection broken between the MAX32600 VRTC and supercap.                                                                                                                                                                                  |
| J16 (VRTC BRK)             | Closed*             | Connection enabled between the MAX32600 VRTC and supercap.                                                                                                                                                                                 |
| J17 (VBUS VDDIO_P BRK)     | Open                | Connection broken between the 3.6V LDO and VDDIO_P.                                                                                                                                                                                        |
| J17 (VBUS VDDIO_P BRK)     | Closed*             | Connection enabled between the 3.6V LDO and VDDIO_P.                                                                                                                                                                                       |
| J21 (VBUS BRK)             | Open                | Connection broken between the USB connector VBUS (5V nominal) and the MAX32600 VBUS power input.                                                                                                                                           |
| J21 (VBUS BRK)             | Closed*             | Connection enabled between the USB connector VBUS (5V nominal) and the MAX32600 VBUS power input.                                                                                                                                          |
| J27 (TSEL)                 | Open*               | The MAX32600 TSEL input is logic 1. The MAX32600 JTAG input is connected to the Arm JTAG port.                                                                                                                                             |
| J27 (TSEL)                 | Closed              | The MAX32600 TSEL input is logic 0. The MAX32600 JTAG input is connected to the MAX32600 test access port (TAP) controller. Note: This setting is intended for Maxim internal testing only and cannot be used for application development. |
| J29 (TAMPER)               | Open                | The MAX32600 TamperO-to-TamperI connection is broken. If the dynamic tamper sensor function is enabled on the MAX32600, breaking this connection triggers a tamper response.                                                               |
| J29 (TAMPER)               | Closed*             | The MAX32600 TamperO-to-TamperI connection is made. This connection should be left closed, unless you are testing the dynamic tamper sensor function.                                                                                      |

Evaluates: MAX32600

Evaluates: MAX32600

Table 1. EV Kit Jumper Functions and Default Settings (continued)

| JUMPER                    | SETTING                | EFFECT OF SETTING                                                                                                                                                                                      |
|---------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J35 (BLE PWR BRK)         | Open                   | Connection broken between VDDIO_P and the EM9301 BLE controller. The controller is disabled.                                                                                                           |
| J35 (BLE PWR BRK)         | Closed*                | Connection enabled between VDDIO_P and the EM9301 BLE controller.                                                                                                                                      |
| J36 (BLE OUT)             | Open                   | No communication/control between the MAX32600 and the BLE controller.                                                                                                                                  |
| J36 (BLE OUT)             | 2-1*                   | SPI bus communication between the MAX32600 (SDI) and the BLE (MISO output) is connected.                                                                                                               |
| J36 (BLE OUT)             | 2-3                    | UART communication between the MAX32600 (RX1) and the BLE (Tx) is enabled.                                                                                                                             |
| J37 (BLE IN)              | Open                   | No communication/control between the MAX32600 and the BLE controller.                                                                                                                                  |
| J37 (BLE IN)              | 2-1*                   | SPI bus communication between the MAX32600 (SDO) and the BLE (MOSI input) is enabled.                                                                                                                  |
| J37 (BLE IN)              | 2-3                    | UART communication between the MAX32600 (TX1) and the BLE (Rx) is enabled.                                                                                                                             |
| J38 (BLE INTFC SEL)       | Open*                  | SEL input to the BLE controller is set to logic 1. This enables the EM9301 SPI interface.                                                                                                              |
| J38 (BLE INTFC SEL)       | Closed                 | SEL input to the BLE controller is set to logic 0. This enables the EM9301 UART interface.                                                                                                             |
| J69 (PR VDD SEL)          | Open                   | No power applied to Proto Matrix J55 power rail.                                                                                                                                                       |
| J69 (PR VDD SEL)          | 2-1*                   | VDDIO_P power connected to Proto Matrix J55 power rail.                                                                                                                                                |
| J69 (PR VDD SEL)          | 2-3                    | VDDA3ADC power connected to Proto Matrix J55 power rail. Current constraints exist. Consult Maxim engineering before using this option.                                                                |
| J74 (USB-UART IO LEVEL)   | Open                   | USB-UART Bridge IOs are not powered.                                                                                                                                                                   |
| J74 (USB-UART IO LEVEL)   | 2-1*                   | USB-UART Bridge IO levels track VDDIO_P.                                                                                                                                                               |
| J74 (USB-UART IO LEVEL)   | 2-3                    | USB-UART Bridge IO levels are fixed at 3.3V.                                                                                                                                                           |
| J75, J76 (VDDIO_P SELECT) | Open                   | Board peripherals are not powered.                                                                                                                                                                     |
| J75, J76 (VDDIO_P SELECT) | J76-2 to J76-1 Closed* | VDDIO output from the MAX32600 powers peripherals.                                                                                                                                                     |
| J75, J76 (VDDIO_P SELECT) | J76-2 to J76-3 Closed  | VREG18 output from the MAX32600 powers peripherals.                                                                                                                                                    |
| J75, J76 (VDDIO_P SELECT) | J76-2 to J75-1 Closed  | Batteries, external PS, or LDO power the peripherals. If a USB host is connected to the micro-B connector (CN1), the 3.6V LDO output overrides the battery voltages through the D1/D3 Schottky diodes. |

* Default position.

## MAX32600 Evaluation Kit

## Additional Resources

- Additional Resources
- MAX32600 EV Kit Data Sheet (this document)
- MAX32600 EV Kit Schematic*
- MAX32600 IC Data Sheet*
- MAX32600 User's Guide*
- Arm Cortex ®  Toolchain User's Guide-README*
- MAX32600 CMSIS Libraries-Firmware User's Guide*
- Example projects and app notes describing them*

*A  lot  of  valuable  information  resides  in  the MAX32600 Resources component  of the Installer. Once  this component is installed, the information can then be found in  the  Windows Start Menu under Maxim Integrated, as shown in Figure 2.

## Technical Support

Visit http://support.maximintegrated.com for  technical support.

Cortex is a registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Evaluates: MAX32600

Figure 2. Screenshot of Installed Files and Folders

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX32600-KIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX32600 EV Kit Bill of Materials

| PART REFERENCE                                                                                                                                                                         | QTY   | DESCRIPTION                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------|
| BH1                                                                                                                                                                                    | 1     | HOLDER BATTERY 2CELL AAA PC MNT       |
| BH2                                                                                                                                                                                    | 1     | HOLDER BATT COIN COMPACT 20MM         |
| C1, C3, C5, C6, C10, C11, C12, C13, C14, C15, C42                                                                                                                                      | 11    | CAP CER 1UF 6.3V 10% X5R 0402         |
| C2, C22, C25, C41, C50                                                                                                                                                                 | 5     | CAP CER 47UF 6.3V 20% X5R 1206        |
| C4, C7, C9, C20, C24, C35                                                                                                                                                              | 6     | CAP CER 10UF 6.3V 20% X5R 0603        |
| C8                                                                                                                                                                                     | 1     | CAP SUPER 0.022F 5.5V RADIAL          |
| C16, C38, C39                                                                                                                                                                          | 3     | CAP CER 15PF 50V 5% NP0 0402          |
| C17, C18, C19, C21, C23                                                                                                                                                                | 5     | CAP CER 4.7UF 4V 20% X5R 0402         |
| C26, C27, C28, C29, C34, C40, C46, C47, C48, C49, C52, C59                                                                                                                             | 12    | CAP CER 0.1UF 16V 10% X7R 0402        |
| C30, C31, C45, C51, C58                                                                                                                                                                | 5     | CAP CER 4700PF 25V 10% X7R 0402       |
| C32, C33, C53, C54                                                                                                                                                                     | 4     | CAP CER 27PF 50V 5% NP0 0402          |
| C43, C44                                                                                                                                                                               | 2     | CAP CER 100PF 50V 5% NP0 0402         |
| C55, C56                                                                                                                                                                               | 2     | CAP CER 1000PF 50V 5% NP0 0402        |
| C57                                                                                                                                                                                    | 1     | CAP CER 330PF 50V 5% NP0 0402         |
| CN1                                                                                                                                                                                    | 1     | CONN RCPT MICRO USB R/A SMD           |
| D1, D2, D3                                                                                                                                                                             | 3     | DIODE SCHOTTKY 2A 30V SOD-123FL       |
| D4                                                                                                                                                                                     | 1     | LED GREEN 570NM 2MA PLCC-2 SMD        |
| D5                                                                                                                                                                                     | 1     | LED RED 630NM 2MA PLCC SMD            |
| D6                                                                                                                                                                                     | 1     | LED YELLOW 570NM 2MA PLCC-2 SMD       |
| EVM01                                                                                                                                                                                  | -     | MAX14676 Evaluation Module            |
| F1                                                                                                                                                                                     | 1     | POLYSWITCH .20A RESET FUSE SMD        |
| J1, J2                                                                                                                                                                                 | 2     | BANANA JACK NON-INSULATED .350"       |
| J3, J6, J10, J12, J13, J16, J17, J18, J19, J20, J21, J22, J27, J29, J35, J38                                                                                                           | 16    | CONN HEADER .100 SINGL STR 2POS       |
| J4, J44, J45, J46, J47, J75                                                                                                                                                            | 6     | CONN HEADER .100 SINGL STR 1POS       |
| J5, J36, J37, J69, J74, J76, J86                                                                                                                                                       | 7     | CONN HEADER .100 SINGL STR 3POS       |
| J7, J9, J14, J23, J84, J88                                                                                                                                                             | 6     | CONN JACK TEST VERT INSUL MIL R BLK   |
| J8, J11, J15, J24, J83, J87                                                                                                                                                            | 6     | CONN JACK TEST VERT INSUL MIL R RED   |
| J25, J26, J28, J30                                                                                                                                                                     | 4     | CONN SOCKET SMA STR DIE CAST PCB      |
| J32, J33, J34, J39, J40, J41, J42, J43, J48                                                                                                                                            | 9     | CONN HEADER .100 DUAL STR 8x2 16POS   |
| J49, J50                                                                                                                                                                               | -     | PROTO STRIP 18X1 0.1 LEAD SPACE       |
| J51, J52, J53, J54, J55, J56, J57, J58, J59, J60, J61, J62, J63, J64, J65, J66, J67, J68                                                                                               | -     | PROTO STRIP 20X1 0.1 LEAD SPACE       |
| J73                                                                                                                                                                                    | 1     | CONN RCPT USB TYPE B R/A PCB          |
| J77, J79                                                                                                                                                                               | 2     | CONN HEADER FMALE 12POS .1" GOLD      |
| J78                                                                                                                                                                                    | 1     | CONN HEADER FEMALE 8POS .1" GOLD      |
| J89, J90                                                                                                                                                                               | 2     | CONN IC SOCKET 18POS SIP TIN          |
| JTP1                                                                                                                                                                                   | 1     | CONN HEADER LOPRO STR 20POS GOLD      |
| L4                                                                                                                                                                                     | 1     | INDUCTOR 10UH 50MA 0603               |
| Q1                                                                                                                                                                                     | 1     | TRANSISTOR GP NPN AMP SOT-23 MMBT3904 |
| R1, R2, R14, R74, R94                                                                                                                                                                  | 5     | RES 1.0 OHM 1/8W 1% 0805 SMD          |
| R3, R4, R5                                                                                                                                                                             | 3     | RES 0.0 OHM 1/10W JUMP 0603 SMD       |
| R6, R21, R46                                                                                                                                                                           | 3     | RES 100 OHM 1/8W 1% 0805 SMD          |
| R7, R19, R20, R26, R86                                                                                                                                                                 | 5     | RES 4.99K OHM 1/10W 1% 0402 SMD       |
| R8                                                                                                                                                                                     | 1     | RES 187K OHM 1/10W 1% 0402 SMD        |
| R9, R10, R11, R13, R15, R16, R18, R27, R28, R32, R45, R47, R52, R53, R54, R55, R64, R65, R67, R68, R69, R70, R71, R78, R80, R81, R82, R87, R88, R89, R92, R93, R95, R96, R97, R98, R99 | 37    | RES 0.0 OHM 1/10W 0402 SMD            |
| R12, R83, R84, R85                                                                                                                                                                     | 4     | RES 100K OHM 1/10W 1% 0402 SMD        |
| R17                                                                                                                                                                                    | 1     | RES 4.02K OHM 1/10W 1% 0402 SMD       |
| R22, R23, R24 R25, R33, R35, R36, R38, R39, R41, R42, R43, R44, R56, R57,                                                                                                              | 3 18  | RES 499 OHM 1/10W 1% 0402 SMD         |
| R58, R59, R75, R76, R90, R91                                                                                                                                                           |       | RES 10.0K OHM 1/10W 1% 0402 SMD       |
| R37                                                                                                                                                                                    | 1     | RES 27.0K OHM 1/10W 1% 0402 SMD       |
| R50, R51                                                                                                                                                                               | 2     | RES 27.4 OHM 1/10W 1% 0402 SMD        |

## MAX32600 EV Kit Bill of Materials (continued)

| PART REFERENCE     |   QTY | DESCRIPTION                                                     |
|--------------------|-------|-----------------------------------------------------------------|
| R60, R63           |     2 | RES 49.9 OHM 1/10W 1% 0402 SMD                                  |
| R61, R62           |     2 | RES 604 OHM 1/10W 1% 0402 SMD                                   |
| SW1, SW2, SW3, SW4 |     4 | SWITCH TACT 6MM SMD MOM 160GF                                   |
| U10                |     1 | MAX32600 (MAX32600-P85B+)                                       |
| U2                 |     1 | IC REG LDO 3.15V/ADJ SOT23-5 (MAX8863TEUK+)                     |
| U3                 |     1 | TVS Diodes - TVS 2Ch Differential ESD Protection (MAX3207EAUT+) |
| U4                 |     1 | BUZZER PIEZO 25VP-P SMD                                         |
| U5                 |     1 | LCD 8-CHAR 14-SEG 0.275" REFL (VIM-878-DP-RC-S-LV)              |
| U7                 |     1 | BLE Controller without DCDC (EM9301V02LF024D+)                  |
| U11                |     1 | FT230XS USB/UART Bridge (FT230XS-R)                             |
| Y1                 |     1 | CRYSTAL 32.768KHZ 6.0PF SMD                                     |
| Y2                 |     1 | CRYSTAL 8.000 MHZ 18PF SMD                                      |
| Y3                 |     1 | CRYSTAL 26.0000MHZ 10PF SMD                                     |

│

## MAX32600 EV Kit Schematics (1 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (2 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (3 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (4 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (5 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (6 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (7 of 8)

<!-- image -->

│

## MAX32600 EV Kit Schematics (8 of 8)

<!-- image -->

│

## MAX32600 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 11/14           | Initial release                                                                                         | -               |
|                 1 | 10/16           | Updated MAX32600 EV Kit Board image, MAX32600 EV Kit Bill of Materials , and MAX32600 EV Kit Schematics | 4, 11-20        |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX32600