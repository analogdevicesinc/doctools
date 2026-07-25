<!-- lastmod 2022-08-02 -->
## MAX20751S1VKIT# Evaluation Kit

## General Description

The MAX20751S1VKIT# evaluation kit (EV kit) is a proven  application-circuit  design  for  the  MAX20751  DC-DC power-supply controller and the VT1697SB power train. The  EV  kit  is  a  programmable-output,  4-phase  switching regulator with a PMBus™ interface. The IC controls up to four power trains to generate a single output voltage.  The  EV  kit  can  be  used  as  a  stand-alone  board, if  desired.  However,  to  take  full  advantage  of  the  IC's capabilities,  the  user  must  connect  the  EV  kit  to  a  PC using the MAXPOWERTOOL002 (PowerTool™), Maxim's USB-to-PMBus interface dongle for power products. The PowerTool  is  Windows  XP-®,  Windows  Vista-®,  and Windows  7-compatible  software  that  provides  a  simple graphical user interface (GUI) for exercising the features of the IC. The PowerTool GUI allows a PC to control the PMBus  interface  and  to  collect  real-time  data  from  the EV kit.

The EV kit contains a fully functional PCB assembly and is capable of delivering up to 100W of continuous 0.6V to 1.52V power output from a 7V to 14V input supply.

The  PowerTool  is  sold  separately  and  contains  a  USB cable (to  connect  PC to  dongle)  and  a  ribbon  cable  (to connect dongle to EV kit).

The EV kit also evaluates the VT1697SB smart slave IC with  integrated  current  and  temperature  sensors.  The VT1697SB  is  a  features-rich  smart  slave  IC  designed to work with Maxim's master switch-mode power-supply controller to implement a high-density multiphase voltage regulator.

PMBus is a trademark of SMIF, Inc.

PowerTool is a trademark of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX20751/VT1697SB

## Features

- MAX20751 Master Switch-Mode Controller
- Up to Four Interleaved Power Stages
- Up to 100A Output Current
- PMBus Interface
- Digital Telemetry and Control
- Patented Synchronous Buck Topology Using Coupled Inductors
- Smaller Size
- Higher Efficiency
- Reduced Output Capacitance
- 300kHz to 800kHz Switching Frequency
- 7V to 14V Input Voltage Range
- All Ceramic Capacitor Output Capacitors
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20751S1VKIT# Evaluation Kit

## Evaluates: MAX20751/VT1697SB

Figure 1. System Setup

<!-- image -->

## Quick Start

## Required Equipment

- MAX20751S1VKIT# EV kit
- MAXPOWERTOOL002
- 12V, 15A DC  supply
- 100MHz oscilloscope with two or more channels
- Electronic load capable of 100A (min)
- Digital multimeters (DMMs)
- PC with Windows XP, Windows Vista, or Windows 7 and available USB port
- Differential voltage probe for oscilloscope connection

## Precautions

- 1) Before applying power, make sure the input power supply is set for a voltage within the EV kit's 7V to 14V operating limits.
- 2) Do not turn on any power supplies until all electrical connections are completed.
- 3) Do not exceed the current rating for the test leads used to connect V IN  and V OUT . The EV kit is capable of supplying at least 150A output current.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation and begin evaluation:

- 1) Visit www.maximintegrated.com/en/ design/tools/applications/evkit-software/index. mvp/id/1183 to download the latest version of the Digital PowerTool software and follow the automated installation procedures. Refer to the software's Help tab for detailed operating instructions.
- 2) Connect the PowerTool interface to the PC using the supplied USB cable.
- 3) After connecting the PowerTool to the PC, wait until the PC finishes installing the required USB-to-PM -Bus interface device driver.
- 4) Start the PowerTool software and verify that the GUI connects to the interface and that the interface device LED illuminates green.
- 5) Connect the input power source (V IN ), to the EV kit using wire capable of at least 15A DC . It is best if the wires have crimped-on spade lugs to connect to the terminal blocks with ease. Be careful to observe correct polarity.

│

## MAX20751S1VKIT# Evaluation Kit

- 6) Connect the load to the EV kit output by soldering to the top of the output connector, as shown in Figure 1.
- 7) Connect the oscilloscope to V OUT  as desired. Measuring V OUT  with a differential voltage probe provides cleaner waveforms.
- 8) Connect the PowerTool (dongle) J80 with the supplied 16-pin ribbon cable.
- 9) Ensure that the EV kit enable switch (SW1) is in the OFF position. Note that the OFF position points away from the J80 ribbon-cable connector.
- 10)  Turn on the input power supply.
- 11)  The GUI should detect the EV kit and display PMBus information for the MAX20751.
- 12)  Enable the EV kit output by placing SW1 in the ON position. Note that the ON position points toward the J80 ribbon-cable connector.

## Detailed Description of Hardware

## Setting Output Voltage

The  default  output  voltage  is  pin  strapped  to  1.0V  by resistors  R1  and  R21,  connected  to  the  R\_SEL1  and R\_SEL2 pins. The user can change this voltage through PMBus  to  a  value  between  0.6V  and  1.52V.  Refer  to the MAX20751 IC data sheet for setting output voltages greater than 1.52V.

The IC reads the R\_SELx resistor values one time, when input  power  is  first  applied  to  the  EV  kit.  The  outputvoltage set point can be changed at any time by sending a new VOUT\_COMMAND value from the GUI through the PMBus interface.

## Setting PMBus Address

The EV kit slave address is configured to 0x70h by pinstrapped resistors R21 and R22, as shown in Table 7 in the MAX20751 IC data sheet. Additional slave addresses can be configured by changing R21 and R22 per the IC data sheet. These resistors also set the output voltage, so choose the appropriate values needed for both.

Note  that  these  resistors  are  read  only  once  when  the IC is powered up. The slave address cannot be changed through the PMBus interface.

## Evaluates: MAX20751/VT1697SB

## Input-Voltage Terminal Block (J78)

The positive input terminal block (J78) is located on the left side of the connector with the PCB oriented as shown in Figure 1. The negative side is located on the right side of the connector.

## Output-Voltage Connector (J34)

Access the EV kit output voltage through the J34 connector. Note that J34 is an integral part of the board layout. Access  the  output  voltage  by  connecting  high-current wires to the top layer. Access the ground return by connecting high-current wires to the bottom layer.

## PMBus Connector (J80)

Connect the 16-pin ribbon cable from the PowerTool to the J80 connector. J80 provides PMBus communication to and from the EV kit. The PMBus clock, data, and alert signals  can  be  accessed  with  TP24,  TP25,  and  TP23, respectively.

## Enable Switch (SW1)

The EV kit includes enable switch SW1 to control the IC's VR\_ON input. The ON position is up and the OFF position is down when the board is oriented per Figure 1.

## LED Indicators (D5)

The EV kit features a 'power-good' green LED (D5) that illuminates when the IC is asserting PWRGD.

## 3.3V External Bias Input (TP35)

The  EV  kit  provides  an  input  to  apply  3.3V  if  the  user wants to bypass the on-board 12V to 3.3V switching regulator. Apply the external 3.3V supply and ground return to TP35 and TP36, respectively. If an external 3.3V supply is used, install a 0Ω resistor in R160 and R5199 and remove the shorting jumper on J82.

## 3.3V Bias Jumper (J82)

Install  the  shorting  jumper  on  J82  when  using  the  onboard 12V to 3.3V bias circuitry. Remove J82 if supplying an external 3.3V bias supply.

## Ground Jumper (J30)

J30 provides additional test points to the ground plane. Both J30 pins are connected to ground.

## MAX20751S1VKIT# Evaluation Kit

## TS\_FAULTB Test Point (TP17)

TP17  is  connected  to  the  IC's  temperature  sensor  and slave fault flag pin, TS\_FAULTB.

## Bode Measurement Test Points (TP26 and TP27)

TP26 and TP27 provide a convenient connection to the 10Ω resistor used to take bode measurements of the EV kit. TP27 is connected to the output voltage and TP26 is connected to the IC's positive remote-voltage sense pin, SENSE\_P.

## Ground Jumper (J55)

J55 provides an additional ground-connection test point.

## Input Current Shunt (J81)

J81 provides test points across the input current resistor shunts. These are two 5mΩ resistors in parallel (2.5mΩ) to  provide  easy  measurement  of  the  input  current.  The current scale factor is 0.4A/mV.

## Efficiency-Measurement Connector (J8)

J8  provides  Kelvin  connections  to  the  EV  kit's  proper efficiency-measurement points.

J8-1 and J8-2 are the input-voltage test points.

J8-3 and J8-4 are the output-voltage test points.

J8-5 and J8-6 are the bias-voltage test points.

## Ordering Information

| PART             | TYPE                                                       |
|------------------|------------------------------------------------------------|
| MAX20751S1VKIT#  | MAX20751 EV Kit                                            |
| MAXPOWERTOOL002# | PowerTool USB-to-PMBus Interface Dongle for Power Products |

# Denotes RoHS compliant.

## Evaluates: MAX20751/VT1697SB

Note that for a proper efficiency measurement, the user must disable the internal 3.3V bias supply and provide an external bias supply.

J8-7 and J8-8 provide jumpers to measure the bias current. It is recommended these pins not be used and the bias supply input current be measured prior to being connected to the EV kit.

## Load Regulation Jumper (J27)

Use J27 to measure the EV kit's load regulation; it provides a convenient Kelvin connection to the power supply's output-voltage sensing location.

## Performance Characteristics

Refer  to  the  MAX20751  IC  data  sheet  for  the  EV  kit's performance characteristics.

## Component List, Schematics, and PCB Layout Diagrams

Click on the links below for component information, schematics, and PCB layout diagrams:

- MAX20751S1VKIT# BOM
- MAX20751S1VKIT# Schematic Diagrams
- MAX20751S1VKIT# PCB Layout Diagrams

│

## MAX20751S1VKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 12/15           | Initial release                                                                                      | -               |
|                 1 | 4/16            | Updates to General Description , Features , and Quick Start sections; update to Billing of Materials | 1-2, 6          |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20751/VT1697SB

<!-- image -->

MAX20751S1VKIT# BOM; Rev 1; 4/16

| QTY Reference Designators                                                                       | Description                                                | Case Size            | Manufacturer Part Number                | Manufacturer            |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------------|-----------------------------------------|-------------------------|
| 13 C1000 C2000 C3000 C4000 C5066 C5079 C5080 C5081                                              | 47uF, 25V, 20%, X5R 1206                                   |                      | C3216X5R1E476M                          | TDK                     |
| C5082 C5089 C5093 C5094 C5106 6 C1001 C2001 C3001 C4001 C5067 C5084                             | 1000pF, 50V, 10%, X7R 0402                                 |                      | 04022R102K9B20D                         | Phycomp                 |
| 7 C1002 C2002 C3002 C4002 C5062 C5064 C5103 4 C1003                                             | 0.1uF, 25V, 10%, X7R 0402                                  | 0402                 | C1005X7R1E104K050BB GRM155R71H223KA12D  | TDK Murata              |
| C2003 C3003 C4003 8 C1004 C2004 C2005 C3004 C3005 C4004 C4005 C5088                             | 22000pF, 50V, 10%, X7R 25V, 10%, X7R                       | 0603                 | CGA3E1X7R1E105K                         | TDK                     |
| 8 C1006 C1010 C2006 C2010                                                                       | 1uF, 0.22uF, 16V, 10%, X7R                                 | 0402                 | GRM155R71C224KA12D                      | Murata                  |
| C3006 C3010 C4006 C4010 30 C106 C107 C117 C124 C125 C126 C127 C132 C133 C154                    | 100uf, 6.3V, 20%, X5R                                      | 1206                 | C3216X5R0J107M160AB                     | TDK                     |
| C134 C135 C136 C137 C142 C143 C145 C151 C152 C155 C161 C162 C163 C164 C165 C169 C170 C171 1 C11 | C172 1200pF, 25V, 10%, X7R 0402                            |                      | GRM155R71H122KA01D                      | Murata Taiyo Yuden      |
| 1 C12 5 C14 C1011 C2011 C3011 C4011                                                             | 0.1uF, 10V, 10%, X7R 2.2uF, 6.3V, 10%, X7S                 | 0402 0402            | LMK105 BJ104KV C1005X7S0J225K050BC      | TDK                     |
| 2 C17 R54 4 C181 C292 C297 C5110                                                                | 10000pF, 16V, 5%, X7R 1.0uF, 6.3V, 10%, X5R                | 0402 0402            | 0402YC103JAT2A C1005X5R0J105K           | AVX TDK                 |
| 1 C184                                                                                          | 47uF, 6.3V, 20%, X5R                                       | 0805                 | JMK212 BJ476MG                          | TaiyoYuden              |
| 1 C185 8 C298 C299 C5069 C5070 C5071                                                            | 4.7uF, 6.3V, 20%, X5R 100uF, 25V, 20%, TANTALUM            | 0402 7343(D)         | GRM155R60J475ME47D T521X107M025ATE060   | Murata Kemet            |
| C289 C290 C293 5 C3 C100 C101 C102 C103                                                         | 0.1uF, 16V, 10%, X7R                                       | 0402                 | GRM155R71C104KA88D                      | Murata                  |
| 5 C4 C291 C5060 C5061 C5100                                                                     | 1.0uF, 25V, 20%, X5R                                       | 0402                 | TMK105BJ105MV-F                         | Taiyo Yuden             |
| 1 C4030 C5092 C5095 C5104 C5105                                                                 | 5600pF, 25V, 5%, X7R                                       | 0402                 | 04023C562JAT2A GRM21BC81E106ME11L       | AVX                     |
| 7 C5063 C5086 C5087 2 C5065 C5101                                                               | 10uF, 25V, 20%, X6S 16V, 10%, X5R                          | 0805 0805            | C2012X5R1C226K                          | Murata TDK              |
| 1 C5068                                                                                         | 22uF, 33pF, 50V, 5%, NPO                                   | 0603                 | GRM1555C1H330JA01D                      | Murata                  |
| 1 C5077 C5078                                                                                   | 220pF, 50V, 10%, X7R                                       | 0402 0805            | GRM155R71H221KA01D TMK212BBJ106KG-T     | Murata                  |
| 3 C5090 C5107 1                                                                                 | 10uF, 25V, 10%, X5R                                        | 0603                 | EMK107BBJ106MA-T                        | Taiyo Yuden             |
| C5083 1 C5085                                                                                   | 10uF, 16V, 20%, X5R 0.22uF, 25V, 10%, X6S                  | 0402                 | C1005X6S1E224K                          | Taiyo Yuden TDK         |
| 4 C5096 C5097 C5098 C5099 5 C7 C8 C9 C34 C5073                                                  | 56pF, 50V, 5%, NPO 22pF, 50V, 5%, NPO                      | 0402                 | GRM1555C1H560JA01D GRM1555C1H220JA01D   | Murata Murata           |
| 1 D14                                                                                           |                                                            | 0402 DO-214AC        |                                         | Bourns                  |
|                                                                                                 | SMAJ20A Diode TVS, 400W, Vrc=32.4V, Ipp=12.3A              |                      |                                         |                         |
| 1 D15 D5                                                                                        | MBRS130L, 40A, 30V                                         | SMB                  |                                         | Fairchild Semiconductor |
| 1 4                                                                                             | GREEN LED 2 PIN-1X2 Straight                               | 1206                 | LTST-C150GKT                            | Lite-On                 |
| J27 J30 J81 J82 3 J34 MTG11 MTG12                                                               | FINGERS_MOLEX, 24 signal, 14 power.                        |                      | TSW-101-07-L-D                          | Samtec                  |
| 1 J55                                                                                           | Edge Finger Connector 1 PIN-1X1 Straight                   |                      | TSW-101-07-L-S                          | Samtec                  |
| 1 J78                                                                                           | 2_PIN-Single Row Terminal Block, 2 position                |                      | A382202                                 | Cooper Bussmann         |
| 1 J8                                                                                            | 8 PIN-2X4 Straight                                         |                      | 87215-1                                 | AMP                     |
| 1 J80 1 L1                                                                                      | 16 PIN-BoxHeader 2x8 3.3uH, 1.23A, 167mOhm                 | 2x2mm                | TSW-108-07-T-D EPL2014-332MLB           | SamTec Coilcraft        |
| 2 L2 L3 1                                                                                       | 100nH, +/-20%, 30A, 0.3mOhm, 2-phase                       | 18x11x10mm 6x6x3.5mm | CTX17-18913-R LPS6235-333MR             | Cooper Coilcraft        |
| L4 4 MTG1 MTG2 MTG3 MTG4                                                                        | 33uH, +/-20%, Low DCR Standoff-Hex Standoff, F/F, 4-40, 1" |                      | 2205                                    | Keystone                |
| 1 Q3                                                                                            | BSS138-N-Channel Logic Level                               | 4-40 Hex SOT-23      | BSS138                                  | Fairchild               |
|                                                                                                 | Enhancement                                                |                      |                                         |                         |
| 1 R1 5 R1002                                                                                    | 402Ω, 1%, 1/16W                                            | 402                  | CRCW0402402RFKED                        | Vishay Panasonic        |
| R2002 R3002 R4002 R5197 1 R104 R107                                                             | 4.7Ω, 5%, 1/16W 100Ω, 1%, 1/4W                             | 0402 1206            | ERJ-2GEJ4R7X RCWP1206101F ERJ-2RKF5113X | Vishay Dale Panasonic   |
| 1 R109 R115 R139 R140 R157 R169 R5207 R5208                                                     | 511KΩ, 1%, 1/16W 1KΩ, 1%, 1/16W                            | 0402 0402            | ERJ-2RKF1001X                           | Panasonic               |
| 8 1 R11                                                                                         | 226Ω, 1%, 1/16W                                            | 0402                 | ERJ-2RKF2260X                           | Panasonic               |
| 1 R13                                                                                           | 18.2KΩ, 1%, 1/16W                                          | 0402                 | ERJ-2RKF1822X                           | Panasonic               |
| 1 R148 1                                                                                        | 0Ω, 5%, 1/16W                                              | 0603 0402            | ERJ-3GEY0R00V RR0510P-203-D             | Panasonic Susumu        |
| R15 1 R21                                                                                       | 20KΩ, 0.5%, 1/16W 115Ω, .5%, 1/16W                         | 0402                 | RR0510P-1150-D                          | Susumu                  |
| 1 R22 4 R24 R30 R66 R74                                                                         | 95.3Ω, 1%, 1/10W                                           | 0402 0402            | ERJ-2RKF95R3X ERJ-2RKF3011X             | Panasonic Panasonic     |
| 1 R25                                                                                           | 3.01KΩ, 1%, 1/16W 274Ω, 1%, 1/16W                          | 0402                 | ERJ-2RKF2740X                           | Panasonic               |
| 1 R26                                                                                           | 402Ω, 1%, 1/16W                                            | 0402                 | ERJ-2RKF4020X CRCW0402383RFKED          | Panasonic Vishay        |
| 1 R36 1                                                                                         | 383Ω, 1%, 1/16W                                            | 0402 0402            | CRCW040229K4FKED                        | Vishay                  |
| R37 1 R40 6                                                                                     | 29.4KΩ, 1%, 1/16W 10KΩ, .1%, 1/10W                         | 0603                 | PTN0603E1002BST ERJ-2RKF10R0X           | Vishay                  |
| R41 R103 R1000 R2000 R3000 R4000 R42 R67 R100 R5187                                             | 10Ω, 1%, 1/16W 0Ω, 5%, 1/16W                               | 0402 0402            | ERJ-2GE0R00X                            | Panasonic Panasonic     |
| 13 R101 R102 R105 R106 R108 R5185 R5186 R5188 R5204                                             |                                                            |                      |                                         |                         |
| R43 R44 R45 R91 R48 R50                                                                         | 10KΩ, 1%, 1/16W 1KΩ, 1%, 1/16W                             | 0402 0603            | ERJ-2RKF1002X ERJ-3EKF1001V             | Panasonic Panasonic     |
| 4 2 1 1                                                                                         | 2.15KΩ, 1%, 1/16W                                          | 0402                 | ERJ-2RKF2151X                           | Panasonic               |
| R49 R5180 R5181                                                                                 | 1.00MΩ, 1%, 1/16W 301KΩ, 1%, 1/10W                         | 0402 0402            | ERJ2RKF1004X ERJ-2RKF3013X              | Panasonic Panasonic     |
| 1 1 R5182 5                                                                                     | 100Ω, .5%, 1/16W                                           | 0402 0603            | RR0510P-101-D ERJ-3GSYJ4R7V             | Susumu                  |
| R5183 R5193 R5194 R5195 R5196 R52                                                               | 4.7Ω, 5%, 1/16W 1.2KΩ, 1%, 1/16W                           | 0402                 |                                         | Panasonic Yageo         |
| R5202 R5206                                                                                     | 0.005Ω, 1%, 5W                                             | 2818                 | 9C04021A1201FLHF3 WSH28185L000FEK       | Vishay                  |
| 1 2 1                                                                                           | 3.30KΩ, 1%, 1/16W                                          | 0402                 | ERJ-2RKF3301X ERJ-3EKF1000V             | Panasonic               |
| R5203 2 R68 R84 4 R7                                                                            | 100Ω, 1%, 1/16W                                            | 0603 0402            | ERJ-2RKF4990X                           | Panasonic Panasonic     |
| R8 R9 R14 1 R72 R77                                                                             | 499Ω, 1%, 1/16W 680Ω, .5%, 1/16W                           | 0402                 | RR0510P-681-D ERJ-3GSYJ103V             | Susumu Panasonic        |
| 1 1 SW1                                                                                         | 10KΩ, 5%, 1/16W DPDT-DPDT, 6pins, 1switch                  | 0603                 | GT21MCBE                                | C&K                     |
| 6 TP16 TP17 TP18 TP23 TP24 TP25                                                                 | TP-Miniature Style Test Point Terminals                    |                      | 5000                                    | Keystone                |
| 5 TP19 TP20 TP21 TP22 TP36                                                                      | TP_Loop-BLACK-Large Test Point w/Loop, BLACK               |                      | 5006                                    | Keystone                |
| 3 TP26 TP27 TP35                                                                                | TP_Loop-RED-Large Test Point w/Loop, RED                   |                      | 5005                                    |                         |
| 1                                                                                               | MAX20751 Multiphase Master Controller                      |                      |                                         | Keystone                |
| U1                                                                                              |                                                            | QFN-36               | MAX20751EKX+                            | Maxim Integrated        |
| 4 U3000 U4000                                                                                   | with PMBus VT1697SB Slave Power Stage, 14V, 50A            | QFN-16               | VT1697SBFQX                             | Maxim Integrated        |
| U1000 1                                                                                         | MAX17501E IC REG BUCK SYNC 3.3V 0.5A 10TDFN                |                      | MAX17501EATB+                           | Maxim Integrated        |
| U2000 U4001                                                                                     |                                                            | 10-TDFN(3x2)         |                                         |                         |

D

C

B

A

5

5

4

4

3

3

2

2

1

1

D

<!-- image -->

A

D

C

B

A

5

5

4

3

<!-- image -->

4

3

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

J78

2\_PIN

1,2,8

12VIN

1,2,3,4

VOUT\_CORE

1,5

1.8V\_REG

1,2,3,4,5,7,8

GND

R5207

1K

1

2

J81

2

1

C5110

1.0uF

R5202

R5206

0.005

0.005

TP35

1

R5208

1K

D14

SMAJ20A

3.3V\_EXTERNAL

TP\_Loop-RED

+

C295

TP36

1

TP\_Loop-BLACK

5

Do Not Stuff

5

Test Point for input current across shunt.

D15

MBRS130L

J55

1

1\_PIN

C294

Do Not Stuff

+

Vin / Iin sense

12VIN

C299

100uF

+

C290

100uF

+

C289

100uF

R148

0

Ibias COMM (0.25)

R158

IBIAS+

IBIAS-

C296

R163

Do Not Stuff

Do Not Stuff

3.3V\_BIAS

3.3V\_BIAS

+

C298

100uF

Do Not Stuff

R160

Do Not Stuff

4

+

4

C293

100uF

GND

+

C5069

100uF

+

C5070

100uF

+

C5071

100uF

R169

1K

R157

1K

C5079

47uF

C5080

47uF

Vbias COMM

VBIAS+

C297

1.0uF

VBIAS- C5081

47uF

3

3

TRACE FROM CAP

NEAR Slave Cin

C5082

47uF

R139

1K

R140

1K

TRACE FROM

NEAR

inductor

Vout efficiency for

measurement

Efficiency  Test

J8

VIN\_EFF-

VOUT\_EFF-

VBIAS-

IBIAS-

2

4

6

8

1

3

5

VIN\_EFF+

VOUT\_EFF+

VBIAS+

7

IBIAS+

R102

VOUT\_CORE

R104

100

1206

VIN\_EFF+

C291

1.0uF

VIN\_EFF-

VOUT\_CORE

0

R105

0

1K

2

2

Vout  EFFICENCY

measurement

point

R109

1K

R115

J30

2

1

VOUT\_EFF+

C292

1.0uF

VOUT\_EFF-

TP27

1

TP\_Loop-RED

R103

10

1

TP26

TP\_Loop-RED

R108

0

R107

511K

1

J27

2

1

C181

1.0uF

R100

0

R106

0

1

Vout  LOAD

LINE /

REGULATION

measurement

point

R101

0

K1\_CORE\_SENSE+

K1\_CORE\_SENSE-

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

1,3,4,6

VOUT\_CORE

1,6

12VIN

1,3,4,5,6,7

GND

1

1

1

1

5

1 K1\_TSENSE\_FAULTB

1,5

K1\_ISENSE1

1,5

K1\_PWM1

6

1.8V\_REG

K1\_TSENSE\_FAULTB

K1\_ISENSE3

K1\_PWM3

1.8V\_REG

5

C1000

47uF

25V

1206

C5106

47uF

25V

1206

12VIN

C3000

47uF

25V

1206

C5086

10uF

25V

0805

R1002

4.7

C5094

47uF

25V

1206

R3002

C5087

10uF

25V

0805

R1000

10

C1010

0.22uF

C1001

1000pF

GND

C5105

10uF

25V

0805

4.7

C5095

C3005

10uF

25V

0805

R3000

10

C3010

0.22uF

C3004

1uF

25V

1uF

25V

0603

0603

K1\_VDD3

C3001

1000pF

GND

C1004

1uF

25V

0603

C5088

1uF

25V

0603

K1\_VDD1

C1002

0.1uF

25V

0402

16

15

13

12

4

10

BST

TS\_FAULTB

IPH

VT1697SB

PWM

VDD

11

VCC

C1011

VSS

QFN

VSS

VSS

3

2.2uF

C3002

0.1uF

25V

0402

5

2

VSS

4

C3003

22000pF

50V

0402

AGND

14

1

VDDH

10

BST

16

15

13

12

TS\_FAULTB

IPH

VT1697SB

PWM

VDD

11

VCC

C3011

VSS

3

2.2uF

QFN

VSS

5

4

VSS

2

VSS

4

AGND

14

12VIN

C1003

22000pF

50V

0402

1

VDDH

VX

VX

VX

VX

VX

VX

VX

VX

U1000

VT1697SB

7

8

6

9

U3000

VT1697SB

7

8

6

9

VX3

C5096

56pF

R5193

4.7

C1006

0.22uF

16V

0402

VX1

C5098

56pF

R5195

4.7

C3006

0.22uF

16V

0402

VOUT\_CORE

1

Vx

100nH

2

3

Vx

VX1

MTG11

1

1,5

1,5

6

MTG12

MTG\_130\_Pad\_.090\_Hole MTG\_130\_Pad\_.090\_Hole

3

3

L2

4

Vx

1

VX2

1

1,5

1,5

1

100nH

2

Vx

3

VX3

K1\_TSENSE\_FAULTB

K1\_ISENSE2

K1\_PWM2

1.8V\_REG

L3

4

VX4

K1\_TSENSE\_FAULTB

K1\_ISENSE4

K1\_PWM4

1.8V\_REG

1.8V\_REG

C2000

47uF

25V

C5089

47uF

25V

1206

1206

C5107

10uF

25V

0805

R2002

C4000

47uF

25V

1206

C5093

C5104

47uF

25V

1206

R4002

10uF

25V

0805

4.7

2

C5090

10uF

25V

0805

4.7

C4001

1000pF

GND

2

C2005

1uF

25V

0603

R2000

10

C2001

1000pF

GND

C5092

10uF

25V

0805

R4000

10

C4010

0.22uF

C2004

1uF

25V

0603

C2002

0.1uF

25V

0402

K1\_VDD2

C2010

0.22uF

C4004

1uF

25V

0603

C4005

1uF

25V

0603

K1\_VDD5

C2003

22000pF

50V

0402

16

15

13

12

10

BST

TS\_FAULTB

IPH

VT1697SB

PWM

VDD

11

VCC

C2011

VSS

QFN

VSS

VSS

3

2.2uF

12VIN

C4002

0.1uF

25V

0402

16

15

13

12

C4003

22000pF

50V

0402

10

BST

TS\_FAULTB

IPH

VT1697SB

PWM

VDD

11

VCC

C4011

VSS

3

2.2uF

QFN

VSS

5

VSS

2

VSS

4

AGND

14

5

2

VSS

4

AGND

14

1

VDDH

12VIN

1

VDDH

VX

VX

VX

VX

U2000

VT1697SB

7

8

6

9

U4000

VT1697SB

VX

7

VX

VX

VX

8

6

9

C2006

0.22uF

16V

0402

VX2

C5099

56pF

R5196

4.7

C4006

0.22uF

16V

0402

VX4

C5097

56pF

R5194

4.7

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

5

5

4

4

3

<!-- image -->

<!-- image -->

<!-- image -->

3

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

5

5

4

4

3

<!-- image -->

<!-- image -->

3

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

5

J80

<!-- image -->

5

4

3

2

4

3

2

1

1

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