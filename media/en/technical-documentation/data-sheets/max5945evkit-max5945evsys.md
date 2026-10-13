<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

## General Description

The MAX5945 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board featuring an Ethernet four-port network power controller circuit for -48V supply rail systems. The MAX5945 IEEE 802.3afcompliant network power controller is available in a 36pin SSOP package. The circuit includes four n-channel power MOSFETs used to form the main power-sourcing equipment (PSE) circuit on the EV kit. The MAX5945 is used in power-over-ethernet (POE) applications requiring DC power over four Ethernet network ports. The EV kit provides optical isolation for the I 2 C-compliant 3-wire interface. The isolated interface connects to a PC parallel port (LPT) through a MAXSMBus interface board. The EV kit  can easily be reconfigured for interfacing to a user's stand-alone microcontroller for isolated or nonisolated operation.

The MAX5945 EV kit requires a -32V to -60V power supply (-48V supply rail) capable of supplying 2A or more to the EV kit for powering the power device (PD) through the four 10/100 base-TX Ethernet network ports. The EV kit  demonstrates PD discovery, classification, currentlimit control and other functions of an IEEE 802.3af-compliant PSE. The user must also supply two separate 3.3V power supplies capable of supplying 100mA for the EV kit's digital logic and 3.3V (VCC) optically isolated 3-wire interface. The MAXSMBus interface board requires a dedicated 9V power supply capable of supplying 250mA. The +9V power supply is not required for nonisolated operation.

The MAX5945 controls the -48V DC power to each of the four Ethernet network ports by controlling each port's power MOSFET and sensing current through the respective port's current-sense resistor. The current is fed to a 10/100 base-TX Voice-over-IP (VoIP) magnetic module at each Ethernet network output port. The MAX5945 EV kit provides a separate independent power channel for each of the four Ethernet network output ports.

The EV kit demonstrates the full functionality of the MAX5945 for each power channel such as configurable operational modes, PD detection, PD classification, overcurrent protection, current foldback, under/overvoltage protection, and AC disconnect monitoring. All of these features are configurable on the EV kit and additional test points for voltage probing and current measurements have been provided.

Windows is a registered trademark of Microsoft Corp.

MAXIM

The MAX5945 EV kit software is Windows® 95/98/2000compatible and provides a user-friendly interface to demonstrate the features of the MAX5945 while providing access to each register at the bit level. The program is menu-driven and offers a graphic interface with control buttons. The program also includes a macro engine to allow automated evaluation and testing of the MAX5945 at the system level. The program's macro output files can be automatically saved.

Order the MAX5945EVSYS for a complete PC-based evaluation of the MAX5945. Order the MAX5945EVKIT if you already have a MAXSMBus interface board or do not require PC-based evaluation of the MAX5945.

## Features

- ♦ IEEE 802.3af-Compliant Power-Sourcing Equipment (PSE) Circuit
- ♦ Input Voltages

-32V to -60V Providing 2A (-48V Power Circuit, 350mA/Port)

- +3.3V Providing 100mA (Digital Logic Power) VCC (+3.3V) Provides 100mA (Optical Interface) +9V Provides 250mA (SMBus LPT Interface Board)
- ♦ Ethernet Network Ports

Four RJ-45 10/100 Base-TX Ethernet Network Input Ports

- Four RJ-45 10/100 Base-TX Ethernet Network Output Power-Over-Ethernet Ports
- ♦ Demonstrates Four Separate Independent Power Switch Controllers
- ♦ Provides PD Detection and Classification
- ♦ Configurable DC/AC Load Removal Detection and Disconnect Monitoring
- ♦ Configurable Current Sensing
- ♦ Convenient Voltage and Current Test Points
- ♦ Four Output-Port LED Status Indicators
- ♦ Optically Isolated 3-Wire I 2 C-Compliant PC Interface
- ♦ Reconfigurable for Stand-Alone Operation or with External Microcontroller
- ♦ Windows 95/98/2000-Compatible Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   | SMBus INTERFACE TYPE   |
|--------------|--------------|--------------|------------------------|
| MAX5945EVKIT | 0°C to +70°C | 36 SSOP      | Not included           |
| MAX5945EVSYS | 0°C to +70°C | 36 SSOP      | MAXSMBus               |

Note: The MAX5945EV kit software is provided with the MAX5945EVKIT. However, the MAXSMBUS interface board is required to interface the EV kit to the computer when using the software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX5945 Evaluation Kit/Evaluation System

## MAX5945EVSYS (MAX5945 EV System) Component List

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX5945EVKIT |     1 | MAX5945 evaluation kit |
| MAXSMBus     |     1 | SMBus interface board  |

| DESIGNATION                                   |   QTY | DESCRIPTION                                                                                                        |
|-----------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C1                                            |     1 | 220µF ± 20%, 100V electrolytic capacitor (18mm x 16.5mm) Panasonic EEVFK2A221M                                     |
| C2, C3                                        |     2 | 1.0µF ± 10%, 6.3V X5R ceramic capacitors (0603) Taiyo Yuden JMK107BJ105KA                                          |
| C4                                            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (1206) Taiyo Yuden JMK316BJ106ML                                            |
| C5, C8, C13, C15                              |     4 | 0.47µF ± 10%, 100V X7R ceramic capacitors (1210) Vishay VJ1210Y474KXBAB                                            |
| C6                                            |     1 | 1.0µF ± 20%, 100V X7R ceramic capacitor (1210) TDK C3225X7R2A105M                                                  |
| C7, C9, C16, C23, C30, C31, C33-C36, C38, C39 |    12 | 0.1µF ± 10%, 16V X5R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA                                           |
| C10, C11, C12, C17                            |     0 | Not installed ceramic capacitors (0805) 3300pF ± 10%, 50V X7R ceramic capacitors Murata GRM219R71H333K recommended |
| C14                                           |     1 | 4.7µF ± 10%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475KG                                           |
| C18, C26-C29, C47-C52, C54-C63                |    21 | 0.1µF ± 10%, 100V X7R ceramic capacitors (0805) TDK C2012X7R2A104K                                                 |
| C19, C20, C21, C22, C24, C25                  |     6 | 1000pF ± 10%, 250VAC X7R UL ceramic capacitors (2010) Murata GA352QR7GF102K                                        |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C32           |     1 | 3.3µF ± 10%, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ335KG                   |
| D1-D4         |     4 | 1A, 200V rectifier diodes (SMA) Central Semiconductor CMR1-02M or Diodes Incorporated S1B |
| D5-D8         |     4 | 250mA, 75V high-speed switching diodes (SOT23) Central Semiconductor CMPMD4448            |
| D9-D12        |     4 | 56.7V, 600W transient voltage suppressors (SMB) Diodes Incorporated SMBJ51A               |
| D13-D16       |     4 | Green-leaded LEDs (T 1-3/4) Panasonic LN31GPHL                                            |
| D17-D20       |     4 | 5.6V, 500mW ± 5% low-noise zener diodes (SOD-123) Central Semiconductor CMHZ4626          |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                      |
| J2            |     1 | 6-pin header                                                                              |
| J3-J10        |     8 | RJ-45 black through-hole connectors, 8P-8C                                                |
| JU1-JU8       |     8 | 3-pin headers                                                                             |
| JU9           |     1 | 2 x 5-pin header                                                                          |
| JU11-JU14     |     4 | 2 x 3-pin headers                                                                         |
| JU15-JU30     |    16 | 2-pin headers                                                                             |
| N1-N4         |     4 | 100V, 3.7A n-channel MOSFETs (SOT-223) Fairchild FDT3612                                  |
| N5-N8         |     4 | 100V, 0.17A n-channel MOSFETs (SOT23) Fairchild BSS123                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION          |   QTY | DESCRIPTION                                                                                                     |
|----------------------|-------|-----------------------------------------------------------------------------------------------------------------|
| U1-Socket            |     1 | 36-pin IC socket                                                                                                |
| U1                   |     1 | MAX5945EAX (36-pin SSOP)                                                                                        |
| U2                   |     1 | SPDT analog switch (6-pin SC70) Maxim MAX4599EXT-T                                                              |
| U3                   |     1 | Dual-output op amp (8-pin SOT23) Maxim LMX358AKA                                                                |
| U4                   |     1 | Dual universal switched-capacitor filter (16-pin QSOP) Maxim MAX7491EEE                                         |
| U5                   |     1 | 3V EconOscillator ™ /divider (8-pin µSOP) Dallas Semiconductor/Maxim DS1077LU-40                                |
| U6                   |     1 | 2.048V voltage reference (3-pin SOT23) MAX6106EUR                                                               |
| U7, U8               |     2 | High-speed, 10Mbps logic gate optocouplers (8-pin surface- mount lead bend) Fairchild Semiconductor HCPL- 2630S |
| U9                   |     1 | TinyLogic UHS dual buffer with Schmitt trigger inputs (SC70-6) Fairchild NC7WZ17P6X                             |
| OSC_INPUT            |     1 | BNC connector                                                                                                   |
| TP3                  |     1 | PC test point red                                                                                               |
| GND                  |     4 | PC test points black                                                                                            |
| VDIG, DGND, VEE, GND |     4 | Uninsulated banana jacks                                                                                        |
| -                    |    15 | Shunts (JU1-JU8, JU15-JU22)                                                                                     |
| -                    |     5 | Rubber bumpers                                                                                                  |
| -                    |     1 | MAX5945 PC board                                                                                                |
| -                    |     1 | Software disk (CD-ROM) 'MAX5945 Evaluation Kit'                                                                 |

| DESIGNATION                                               |   QTY | DESCRIPTION                                                           |
|-----------------------------------------------------------|-------|-----------------------------------------------------------------------|
| R1-R4                                                     |     4 | 0.500 Ω ± 1% resistors (1206) IRC LR1206-01-R500-F                    |
| R5, R8, R56, R71                                          |     4 | 180 Ω ± 5% resistors (0603)                                           |
| R6, R7, R9, R29, R30, R53, R54, R77                       |     8 | 3k Ω ± 5% resistors (0603)                                            |
| R10-R22, R26, R28, R31, R34, R35, R62, R63, R65, R66, R67 |    23 | 1k Ω ± 5% resistors (0603)                                            |
| R23                                                       |     1 | 51 Ω ± 5% resistor (0805)                                             |
| R24, R27, R32, R64                                        |     4 | 10 Ω ± 5% resistors (0603)                                            |
| R25, R33, R36, R57                                        |     0 | Not installed resistors (0603) 2k Ω ± 5% recommended                  |
| R37-R52                                                   |    16 | 75 Ω ± 5% resistors (0805)                                            |
| R55                                                       |     1 | 0.56 Ω ± 5% resistor (0603)                                           |
| R58-R61                                                   |     4 | 5.1k Ω ± 5% resistors (0603)                                          |
| R68                                                       |     1 | 0 Ω ± 5% resistor (0805)                                              |
| R69, R70                                                  |     2 | 40.2k Ω ± 1% resistors (0603)                                         |
| R72                                                       |     0 | Not installed resistor (1206) 0 Ω ± 5% resistor recommended           |
| R73-R76                                                   |     4 | 301k Ω ± 1% resistors (0603)                                          |
| R78, R80                                                  |     2 | 10k Ω ± 1% resistors (0603)                                           |
| R79, R91                                                  |     2 | 100 Ω ± 1% resistors (0603)                                           |
| R81                                                       |     1 | 32.4k Ω ± 1% resistor (0603)                                          |
| R82, R86                                                  |     2 | 20k Ω ± 1% resistors (0603)                                           |
| R83                                                       |     1 | 46.4k Ω ± 1% resistor (0603)                                          |
| R84                                                       |     1 | 226k Ω ± 1% resistor (0603)                                           |
| R85                                                       |     1 | 200k Ω ± 1% resistor (0603)                                           |
| R87-R90                                                   |     4 | 2.2M Ω ±5% resistor (0805)                                            |
| S1-S5                                                     |     5 | Micro miniature pushbutton switches                                   |
| T1, T2                                                    |     2 | 10/100BASE-TX voice-over-IP magnetic modules Pulse Engineering H2005A |

EconOscillator is a trademark of Dallas Semiconductor.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Incorperated   | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild             | 888-522-5372 | -            | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic             | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Pulse Engineering     | 858-674-8100 | 858-674-8262 | www.pulseeng.com      |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay                | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5945 when contacting these component suppliers.

## Quick Start

The MAX5945 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

Required Equipment:

- One -32V to -60V, 2A-capable DC power supply
- Two separate +3.3V, 100mA-capable DC power supplies
- One +9V, 250mA-capable DC power supply
- Maxim MAX5945 EV kit and MAXSMBus interface board
- Windows 95/98/2000 computer with a spare parallel (printer) port
- 25-pin I/O extension cable, straight-through, maleto-female cable
- One voltmeter for confirming output voltages

## Hardware Connections

- 1) Connect the MAXSMBus interface board to the MAX5945 EV kit's interface connector J1.
- 2) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumpers JU1 (A0, low), JU2 (A1, low), JU3 (A2, low),  and  JU4 (A4, low) to set the MAX5945 I 2 Ccompliant slave address to 0x40 hexadecimal.
- 3) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumpers JU5 (signal mode).
- 4) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU6 (automatic mode) and JU8 (on-board 100Hz oscillator running).

4

- 5) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumper JU7 (OSC\_IN, 100Hz oscillator).
- 6) Verify  that  no  shunt  is  installed  on  jumpers JU15-JU18 (AC disconnect).
- 7) Verify  that  shunts  are  installed  on  jumpers JU19-JU22 (RC filter).
- 8) Connect one of the +3.3V DC power supplies to the metal VDIG banana jack or PC board pad and the supply ground to the metal DGND banana jack or PC board pad.
- 9) Connect the -32V to -60V DC power supply to the metal VEE banana jack and the supply ground to the metal GND banana jack.
- 10) Connect the second +3.3V DC power supply to the optically isolated VCC pad and the supply ground to the OPTO\_GND pad.

## Note: The GND is more positive than the VEE jacks.

- 11) Connect  the  +9V  DC  power  supply  to  the MAXSMBus interface board's POS9 pad and the supply ground to the GND pad on the MAXSMBus Interface board.
- 12) Connect a PD to the desired Ethernet network output port's RJ-45 connector on the MAX5945 EV kit as listed below:
- PORT1\_OUT at J7
- PORT2\_OUT at J8
- PORT3\_OUT at J9
- PORT4\_OUT at J10

This step is optional if network connectivity is not required.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

- 13) Connect the MAX5945 EV kit's network input LAN port to the corresponding PD LAN connection as listed below:
- PORT1\_IN at J3
- PORT2\_IN at J4
- PORT3\_IN at J5
- PORT4\_IN at J6
- 14) Connect  the  computer's  parallel  port  to  the MAXSMBus interface board. Use the straightthrough 25-pin female-to-male cable. The EV kit software uses a loopback connection to confirm that the correct port is selected.
- 15) Install the MAX5945 evaluation software on your computer by running the INSTALL.EXE program on the CD-ROM disk. The program files are copied and icons are created for them in the Windows Start Menu. Restart the computer when prompted. For Windows 2000, you may need administrator privileges.
- 16) Turn on all four power supplies.
- 17) Start the MAX5945 program by opening its icon in the Start Menu.
- 18) Observe as the program automatically detects the parallel  port  connected to the MAXSMBus, starts the main program, and then automatically detects the I 2 C-compliant address configured for the MAX5945.
- 19) Load and run the Power\_on.smb macro program from the File|Open|Run Macro menu. The script automatically runs after selecting open.
- 20) All four network port green status LEDs should light.
- 21) Four other example macros allow quick testing of the manual mode, auto mode, semiauto mode, and with DC and/or AC load disconnect detection. These macros are:
- test#1\_manual\_mode.smb
- test#2\_auto\_mode\_dc.smb
- test#3\_auto\_mode\_dc.smb
- test#4\_semiauto\_mode.smb

Please read the embedded comments in each macro

- for detailed descriptions using a plain text editor.
- 22) Pressing pushbutton switches S1 through S4 shuts down PORT1\_OUT through PORT4\_OUT's respective DC power.
- 23) Test points TP3 (U1 VEE pin) and GND test points are provided throughout the PC board to observe desired signals with an oscilloscope or voltage meter.
- 24) Header J2 is provided to monitor the SHDN pin signals.  These signals are not isolated and are referenced to the DGND. DGND and GND are shorted by a PC board trace between the pads of resistor R72.
- 25) Pressing the RESET pushbutton turns off power to all ports and returns the MAX5945 IC to the powerup condition.

<!-- image -->

Note: An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Detailed Description of Hardware

The MAX5945 EV kit features a 10/100 base-TX Ethernet four-port network power controller circuit for -48V supply rail systems. The EV kit's PSE circuit uses the IEEE 802.3af-compliant MAX5945 network power controller, four n-channel power MOSFETs in SOT-223 surface-mount packages, four surface-mount currentsensing resistors and two 10/100 base-TX VoIP magnetic modules to form the basic portion of a PSE circuit. The MAX5945 EV kit has been designed as an IEEE 802.3af-compliant PSE and demonstrates all the required functions such as PD discovery, classification, current-limit control of a connected PD at each Ethernet output port, and DC/AC disconnect detection. The EV kit  also  has  a  separate  on-board, 100Hz sine-wave oscillator  circuit  for  the  AC  disconnect  detection  features.  An  IBM-compatible PC is used to communicate with  the  slave  MAX5945 over an I 2 C-compliant 3-wire interface, optically coupled logic, and a 2-wire to parallel port (LPT) MAXSMBus interface board.

The MAX5945 EV kit PSE circuit requires a -32V to -60V power supply (-48V supply rail) capable of supplying 2A to the EV kit's GND and VEE steel banana jacks or PC board pads. Two separate +3.3V power supplies capable of supplying 100mA are also required for the MAX5945 digital logic (VDIG, DGND) and optically isolated I 2 C-compliant  3-wire  interface. Note that DGND and GND are shorted by a PC board trace between the pads of resistor R72.

The MAX5945 controls the -48V DC power to each of the four 10/100 base-TX Ethernet network output ports by regulating the respective port's n-channel power

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

MOSFET and sensing current through the respective port's  current-sense resistor. The current is fed to a 10/100 base-TX VoIP magnetic module connected to the respective Ethernet network output port's RJ-45 jack.  An  IEEE 802.3af-compliant PD connects to the respective Ethernet network output port on the EV kit. The PD can be located up to 350ft from the EV kit when connected with Category 5 Ethernet cable. The MAX5945 EV kit provides separate and independent power control for each of the four Ethernet network output ports. The 10/100 base-TX VoIP magnetic module is decoupled to the EV kit's chassis ground by system chassis capacitors C19-C22, C24, and C25. The EV kit's isolated chassis ground (Chassis\_GND) PC board pad connects to the network system ground.

The MAX5945 EV kit features configurable operational modes, PD detection, PD classification, overcurrent protection, current foldback, under/overvoltage protection,  DC  and  AC disconnect monitoring. The overcurrent  protection  can  be  programmed through software and/or changing current-sense resistors R1-R4 for the desired output port. Each of the four modes of operation  (auto,  semi,  manual,  shutdown)  can  be  evaluated after configuring jumper JU6 and configuring the appropriate MAX5945 register (see Table 3). PD detection diodes D1-D4 can be bypassed to reduce power dissipation when AC disconnect monitoring is not required, using jumpers JU15-JU18. Each port's AC detection circuit resistor-capacitor diode (RCD) network can be reconfigured with a jumper also. See Tables 4, 8, and 9 for various AC detection-disconnect and oscillator configurations. Each port features a 600W bidirectional overvoltage transient suppressor diode (D9-D12) and decoupling capacitor (C26-C29) for transient protection at the port.

Test points and jumpers have been provided for voltage probing and current measurements of each channel's power circuit. Additionally, a 6-pin 0.100in center header is also provided for monitoring the SHDN1 , SHDN2 , SHDN3 , SHDN4 , and RESET signals routed to the MAX5945 pins from the respective switch (S1-S5). When using the header signals, caution should be exercised since the DGND and GND are shorted by resistor R72's PC board shorting trace. Green LEDs near each port's RJ-45 output jack indicate when the respective port power is turned on.

A 100Hz oscillator circuit that meets the IEEE 802.3af PSE power interface (PI) parameters for AC disconnect detection is provided by the MAX5945 EV kit. Five ICs make up the 100Hz oscillator circuit, which consists of U5, a programmable Dallas Semiconductor 40MHz EconOscillator/divider squarewave oscillator and a

MAX7491 dual universal switched-capacitor filter, U4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Voltage reference source U6 (MAX6106) provides 2.048V for the circuit and level shifts the sine wave's output. The MAX4599, an SPDT analog switch, and U3, an LMX358 dual-output op amp, provides support functions  for  the  oscillator  circuit.  An  external  sine-wave oscillator meeting the IEEE 802.3af PSE PI parameters can be connected to the EV kit's BNC connector (OSC\_INPUT) after reconfiguring jumper JU7. The EV kit's  100Hz  oscillator  circuit  can  be  shut  down  using jumper JU8 if an external oscillator is used or AC disconnect detection is not required.

The EV kit provides the required optical isolation for the I 2 C-compliant 3-wire interface so the MAX5945 can operate as a slave device. The optically isolated interface  connects  to  a  PC  parallel  port  through  a MAXSMBus interface board. The MAXSMBus interface board requires a dedicated 9V power supply capable of supplying 250mA. The EV kit's I 2 C-compliant 2-wire or  3-wire  interface  can  be  reconfigured  for  interfacing to a stand-alone microcontroller for isolated (2-wire) or nonisolated (3-wire) serial operation. Additionally, for stand-alone microcontroller operation, the MAXSMBus interface board and 9V power supply are not required.

The optical isolation consists of optocoupler U7, which provides galvanic isolation for the serial interface clock line  (SCL)  and  serial  interface  input  data  line  signals. Optocoupler U8 provides galvanic isolation for the serial output and data line (SDAOUT) and INT signals. The SCL and SDAOUT signals' 3-wire serial interface are combined on the isolated 2-wire side prior to feeding l ogic  buffer  U9.  The  SCL\_IN,  SDA, INT \_OUT, OPTO\_GND and VCC PC board pads are used for a 2wire isolated stand-alone operation. For nonisolated stand-alone 3-wire operation, jumper JU9 must be reconfigured and then the SCL, SDAIN, SDAOUT, INT , DGND, and VDIG PC board pads must be connected to  the  microcontroller circuit. Note that VDIG is at +3.3V, which is required by the EV kit. The OPTO\_GND and GND, DGND planes are isolated by the optical couplers. However, when using the EV kit in a nonisolated configuration, caution should be exercised since DGND and GND are shorted by resistor R72's PC board shorting trace.

The MAX5945 slave address is configured by four jumpers (JU1-JU4) and can be configured from 0x40 through 0x5F hexadecimal serial address. Global address 0x60 is accepted by the MAX5945 regardless of  the  jumper settings. Refer to Table 1 and the Address Inputs section in the MAX5945 data sheet for more information on setting the MAX5945 slave address.

## MAX5945 Evaluation Kit/Evaluation System

Table 1. MAX5945 Slave Address Selection

| JU4 (BIT A3) SHUNT   | JU3 (BIT A2) SHUNT   | JU2 (BIT A1) SHUNT   | JU1 (BIT A0) SHUNT   | MAX5945 SLAVE ADDRESS   | READ/WRITE      |
|----------------------|----------------------|----------------------|----------------------|-------------------------|-----------------|
| 2-3                  | 2-3                  | 2-3                  | 2-3                  | 0x40 0x41               | Read Write      |
| 2-3                  | 2-3                  | 2-3                  | 1-2                  | 0x42 0x43               | Read Write      |
| 2-3                  | 2-3                  | 1-2                  | 2-3                  | 0x44 0x45               | Read Write      |
| 2-3                  | 2-3                  | 1-2                  | 1-2                  | 0x46 0x47               | Read Write      |
| 2-3                  | 1-2                  | 2-3                  | 2-3                  | 0x48 0x49               | Read Write      |
| 2-3                  | 1-2                  | 2-3                  | 1-2                  | 0x4A 0x4B 0x4C          | Read Write Read |
| 2-3                  | 1-2                  | 1-2                  | 2-3                  | 0x4D                    | Write           |
| 2-3                  | 1-2                  | 1-2                  | 1-2                  | 0X4E 0x4F               | Read Write      |
| 1-2                  | 2-3                  | 2-3                  | 2-3                  | 0x50 0x51               | Read Write      |
| 1-2                  | 2-3                  | 2-3                  | 1-2                  | 0x52 0x53               | Read Write      |
| 1-2                  | 2-3                  | 1-2                  | 2-3                  | 0x54 0x55               | Read Write      |
| 1-2                  | 2-3                  | 1-2                  | 1-2                  | 0x56 0x57               | Read Write      |
| 1-2                  | 1-2                  | 2-3                  | 2-3                  | 0x58 0x59               | Read Write      |
| 1-2                  | 1-2                  | 2-3                  | 1-2                  | 0x5A 0x5B               | Read Write      |
| 1-2                  | 1-2                  | 1-2                  | 2-3                  | 0x5C 0x5D               | Read Write      |
| 1-2                  | 1-2                  | 1-2                  | 1-2                  | 0X5E                    | Read Write      |
| X                    | X                    | X                    | X                    | 0x5F                    | Read            |
|                      |                      |                      |                      | 0x60* 0x61*             | Write           |

X = Don't care.

* Global address calls.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

## Jumper Selection

The MAX5945 EV kit features several jumpers to reconfigure the EV kit for various PSE configurations and PD requirements. Additionally, jumpers and PC board pads are provided for connecting an external microcontroller.

## MAX5945 I 2 C-Compatible 2-Wire or 3-Wire Slave Address Selection

The MAX5945 EV kit features several 3-pin jumpers (JU1-JU4) to set the slave address of the MAX5945 least significant bits (LSB) of the slave address on the I 2 C-compatible 2-wire or 3-wire interface. The three most significant bits are set by the MAX5945 to 010. The EV kit's software automatically sets the LSB for the proper read/write command. Table 1 lists the jumper addressing options.

## Midspan/Signal-Mode Selection

The MAX5945 EV kit features a 3-pin jumper (JU5) to set  the  MAX5945 in midspan or signal mode.  Table 2 lists  the  jumper  options for the two modes used to detect a valid PD connected to the PSE respective Ethernet network output port. Refer to the MAX5945 data sheet for more information on the modes.

## Table 2. Jumper JU5 Functions

| SHUNT LOCATION   | MIDSPAN PIN                            | MAX5945 MODE   |
|------------------|----------------------------------------|----------------|
| 1 and 2          | Connected to VDIG through resistor R14 | Midspan mode   |
| 2 and 3          | Connected to DGND through resistor R14 | Signal mode    |

## Operational Modes (Automatic, Shutdown)

The MAX5945 EV kit features a 3-pin jumper JU6 to set the MAX5945's initial startup operational mode. After startup, data sent to the mode register (0x12) reconfigure the operational mode of the MAX5945. Table 3 lists the jumper options.

## Table 3. Initial Startup Operational Mode

| JU6 SHUNT LOCATION   | AUTO PIN                               | MODE REGISTER (0x12) STATUS BITS   | OPERATION MODE   |
|----------------------|----------------------------------------|------------------------------------|------------------|
| 1 and 2              | Connected to VDIG through resistor R15 | 10xff                              | Automatic        |
| 2 and 3              | Connected to DGND through resistor R14 | 0x00                               | Shutdown         |

## AC Disconnect Monitoring Oscillator Input

The MAX5945 EV kit features a 3-pin jumper (JU7) to configure the MAX5945's oscillator input at the OSC\_IN pin. The oscillator is used for AC disconnect monitoring of the PD. Table 4 lists the jumper options for the three oscillator configurations available on the EV kit.

## Table 4. Jumper JU7 Functions

| SHUNT LOCATION   | MAX5945 OSC_IN PIN                              | EV KIT MODE                                                    |
|------------------|-------------------------------------------------|----------------------------------------------------------------|
| 1 and 2          | Connected to the OSC_INPUT BNC connector        | AC disconnect detection using external 100Hz oscillator        |
| 2 and 3          | Connected to EV kit's on-board 100Hz oscillator | AC disconnect detection using EV kit on-board 100Hz oscillator |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

## 100Hz Oscillator Shutdown

The MAX5945 EV kit features a jumper to set the EV kit's  on-board 100Hz oscillator modes of operation. Table 5 lists the selectable jumper options to configure the 100Hz oscillator.

Table 5. Jumper JU8 Functions

| SHUNT LOCATION   | U4, SHDN PIN        | 100Hz OSCILLATOR MODE   |
|------------------|---------------------|-------------------------|
| 1 and 2          | Connected to VDIG_F | Running                 |
| 2 and 3*         | Connected to GND    | Shutdown                |

## Stand-Alone Microcontroller Interface (Isolated/Nonisolated)

The MAX5945 EV kit features PC board pads and a jumper to interface directly with a microcontroller. The 2 x 5-pin jumper JU9 has shorting connections on the bottom layer that must be cut open to disable the optical  coupler interface for nonisolated evaluation. The jumper shorting connections must be in place for evaluating an isolated stand-alone microcontroller interface. Table 6 lists the selectable jumper options.

## MAX5945 PORT DET\_, OUT\_, GATE\_, and SENSE\_ Pins Signal Measurements

The MAX5945 EV kit features jumpers to facilitate current  and  voltage  measuring at each port's respective DET\_,  OUT\_,  GATE\_,  and  SENSE\_  pins  on  the MAX5945 IC. Several 2 x 3-pin and 2-pin jumpers are used to obtain the desired measurement for each port. Jumpers JU11 and JU23 are provided for port 1, jumpers JU12 and JU24 are provided for port 2, jumpers JU13 and JU25 are provided for port 3, and jumpers JU14 and JU26 are provided for port 4. The jumper pins are shorted by a PC board trace on the bottom layer of the EV kit by default for normal operation.  The  shorts  can  be  cut  open  for  measurements. See Figure 3, the controller circuit schematic for a specific ports jumper.

## AC Disconnect Operation (Rectifier Diodes D1-D4)

The MAX5945 EV kit features jumpers JU15-JU18 to bypass each port's respective AC disconnect rectifier diode (D1-D4), thus reducing diode power dissipation when  AC  disconnect  is  not  required.  Jumpers JU15-JU18 are used to bypass the respective port's rectifier diode. Table 7 lists the selectable jumper options for each port.

Table 6. Jumper JU9 and Microcontroller PC Board Pads Function

| JU9 PIN NUMBER SHORT LOCATION   | ISOLATION MODE   | MAX5945 EV KIT PC PAD TO MICROCONTROLLER CONNECTION                       |
|---------------------------------|------------------|---------------------------------------------------------------------------|
| 1 and 2 Shorted*                | Isolated         | VCC PC pad connects to microcontroller +3.3V power supply.                |
| 3 and 4 Shorted*                | Isolated         | SCL_IN PC pad connects to microcontroller serial clock line.              |
| 5 and 6 Shorted*                | Isolated         | SDA PC pad connects to microcontroller bidirectional serial data line.    |
| 7 and 8 Shorted*                | Isolated         | SDA PC pad connects to microcontroller bidirectional serial data line.    |
| 9 and 10 Shorted*               | Isolated         | INT_OUT PC pad connects to microcontroller interrupt pin.                 |
| -                               | Isolated         | OPTO_GND PC pad connects to microcontroller power-supply ground.          |
| 1 and 2 Cut Open                | Nonisolated      | VDIG PC pad supplies power to the microcontroller from VDIG voltage.      |
| 3 and 4 Cut Open                | Nonisolated      | SCL PC pad connects to microcontroller serial clock line.                 |
| 5 and 6 Cut Open                | Nonisolated      | SDAIN PC pad connects to microcontroller bidirectional serial data line.  |
| 7 and 8 Cut Open                | Nonisolated      | SDAOUT PC pad connects to microcontroller bidirectional serial data line. |
| 9 and 10 Cut Open               | Nonisolated      | INT PC pad connects to microcontroller interrupt pin.                     |
| -                               | Nonisolated      | DGND PC pad connects to microcontroller power-supply ground.              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

## Table 7. AC Disconnect Jumper Functions

| PORT   | JUMPER   | SHUNT POSITION   | AC DISCONNECT RECTIFIER DIODE                                      |
|--------|----------|------------------|--------------------------------------------------------------------|
| Port 1 | JU15     | Open             | AC disconnect diode D1 active, AC disconnect function can be used. |
| Port 1 | JU15     | Installed*       | AC disconnect diode D1 bypassed, no AC disconnect function.        |
| Port 2 | JU16     | Open             | AC disconnect diode D2 active, AC disconnect function can be used. |
| Port 2 | JU16     | Installed*       | AC disconnect diode D2 bypassed, no AC disconnect function.        |
| Port 3 | JU17     | Open             | AC disconnect diode D3 active, AC disconnect function can be used. |
| Port 3 | JU17     | Installed*       | AC disconnect diode D3 bypassed, no AC disconnect function.        |
| Port 4 | JU18     | Open             | AC disconnect diode D4 active, AC disconnect function can be used. |
| Port 4 | JU18     | Installed*       | AC disconnect diode D4 bypassed, no AC disconnect function.        |

## Table 8. AC Detection RC Jumper Functions

| PORT   | JUMPER   | SHUNT POSITION   | AC DETECTION RC NETWORK                                        |
|--------|----------|------------------|----------------------------------------------------------------|
| Port 1 | JU19     | Open*            | RC network R22/C5 bypassed.                                    |
| Port 1 | JU19     | Installed        | RC network R22/C5 active, AC disconnect function can be used.  |
| Port 2 | JU20     | Open*            | RC network R26/C8 bypassed.                                    |
| Port 2 | JU20     | Installed        | RC network R26/C8 active, AC disconnect function can be used.  |
| Port 3 | JU21     | Open*            | RC network R34/C13 bypassed.                                   |
| Port 3 | JU21     | Installed        | RC network R34/C13 active, AC disconnect function can be used. |
| Port 4 | JU22     | Open*            | RC network R35/C15 bypassed.                                   |
| Port 4 | JU22     | Installed        | RC network R35/C15 active, AC disconnect function can be used. |

## Table 9. -48V Port Power Interface Jumper Functions

| PORT   | JUMPER   | PC BOARD TRACE SHORT   | EV KIT OPERATION                       |
|--------|----------|------------------------|----------------------------------------|
| Port 1 | JU27     | Shorting trace intact  | Normal operation.                      |
| Port 1 | JU27     | Cut open               | -48V_1 power available at pin 1* only. |
| Port 2 | JU28     | Shorting trace intact  | Normal operation.                      |
| Port 2 | JU28     | Cut open               | -48V_2 power available at pin 1* only. |
| Port 3 | JU29     | Shorting trace intact  | Normal operation.                      |
| Port 3 | JU29     | Cut open               | -48V_3 power available at pin 1* only. |
| Port 4 | JU30     | Shorting trace intact  | Normal operation.                      |
| Port 4 | JU30     | Cut open               | -48V_4 power available at pin 1* only. |

## AC Detection RC Network

The MAX5945 EV kit features jumpers JU19-JU22 to bypass the AC detection RC network when AC load disconnect detection is not needed. The inclusion of this RC network does not affect other circuit parameters. Table 8 lists  the  selectable jumper options to reconfigure each port's AC detection network. See Table 7 above for bypassing the respective port's AC disconnect diode.

-48V Port Power Interface or Voltage Measurement The MAX5945 EV kit includes jumpers JU27-JU30 to disconnect each port's -48V power independently for connection to an external network interface circuit. Additionally, the respective jumper's pins can be utilized to measure the voltage or current for the respective port. Table 9 lists the specific jumper for each port. Each jumper is shorted on the bottom layer of the  PC board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

## Table 10. Switch and Header J2 pin signals

| SWITCH   | SIGNAL   |   HEADER J2 PIN |
|----------|----------|-----------------|
| S1       | SHDN1    |               1 |
| S2       | SHDN2    |               2 |
| S3       | SHDN3    |               3 |
| S4       | SHDN4    |               4 |
| S5       | RESET    |               5 |
| None     | DGND     |               6 |

## SHDN and RESET Signals

The MAX5945 EV kit features four pushbutton switches (S1, S2, S3, S4) to independently shut down each channel's respective power circuit. A reset pushbutton (S5) is also provided to reset the MAX5945.

Header J2 (6-pin 0.100in center header) is available for monitoring the SHDN1 , SHDN2 , SHDN3 , SHDN4 ,  and RESET signals routed to the MAX5945 pins. Digital ground is provided at the header on pin 6. See Table 10, which lists the specific switch and header pin signals that can be interfaced with a ribbon cable or test leads. These signals are not isolated and are referenced to DGND on the EV kit .

## Bypassing AC Disconnect and the DGND-to-GND Connection (Resistor R72)

The AC disconnect detection function requires that the EV kit's DGND be connected directly to the GND. If the AC disconnect detection function is not required, the PC board trace shorting DGND-to-GND at resistor R72 pads can be cut open. Cutting open the PC board shorting trace at resistor R72 allows DGND to be referenced to a voltage potential anywhere from VEE to (VEE + 60V). Additionally, when the PC board trace at R72 is  cut  open, the appropriate AC detection jumper tables must be set and the OSC\_IN pin on the MAX5945 must be floating by removing jumper JU7. See Tables 4, 7, and 8 for the appropriate jumper settings to bypass the AC detection function. Refer to  the AC Disconnect Monitoring Oscillator Input section in the MAX5945 data sheet for additional information. If the AC disconnect detection function is required again, install a 0 Ω ± 5% 1206 case size surface-mount resistor at R72 pads and set the appropriate jumpers.

Detailed Description of Software (Words in bold are user-selectable features in the software).

## Software Startup

A mouse or the tab key is used to navigate various items on the Main Window. Upon starting the program, the MAX5945 EV kit software starts in the Auto Read state. The software automatically detects the Slave Address and begins reading the contents of each register in the MAX5945. The register's contents are placed on the appropriate line of the Register Read tables in binary and hexadecimal format. If data changes between the next register read, the updated register hexadecimal data is displayed in red and blinks four times. The blink rate can be changed in the View|Red Hex Data Blink Rate menu. The left status bar at the bottom of the main window provides the MAXSMBus interface board status. The center status bar provides the current EV kit and macro engine status.

<!-- image -->

## Autoread/Run Macro State Controls

When the Auto Read checkbox is checked, the program continuously updates the main window registers and is operating in the autoread state. In the autoread state, data can be written to the MAX5945 by entering or selecting the desired data in the Register Address and Hexadecimal or Binary Data combo boxes. Selecting the Write Byte button writes the combo box data to the MAX5945. To perform an immediate register read, enter, or choose the desired Register Address, and choose the Read Byte button. Hexadecimal or binary data may be entered into the Hexadecimal or Binary Data combo boxes and then the alternate combo box displays the corresponding number in the respective number base.

If  the Auto Read check box is unchecked, the program's main window displays register data from the last read. To obtain current data, a Read Byte must be performed after selecting the appropriate register address from the Register Address combo box. The autoread state does not read the clear on read (COR) registers.

A macro can be run after loading the file from the File|Open Macro menu. The opened macro is displayed in the upper half of the Macro edit box and has an smb file extension. Selecting the Run button runs the macro to completion and displays the output in the Macro Script Output edit box field. Each edit box can be sized relative to the other half using the splitter bar above the Script Output text.  Selecting the Single Step button instead of the Run button causes the macro to execute a single line with each activation of the Single Step button. The Reset button is used to reset the macro script engine and clear the Macro Script Output edit box field. A macro can be run regardless of the Auto Read checkbox status. A macro can be run immediately after opening by using the File|Open/Run Macro menu, selecting the desired macro to run, and clicking on the Open button. Selecting the Cancel button exits this feature.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 1. The MAX5945 Evaluation Software's Main Window for Controlling the Software State, Configuring the MAX5945 Registers Using the Macro Engine and Displaying All the Registers In Binary and Hexadecimal Format

<!-- image -->

The Locate Slave button is used to search for a MAX5945 located on the I 2 C-compliant 2-wire serial interface  whose address has been changed while the software was running. The valid MAX5945 slave address range is 0x40 through 0x5F. The MAX5945 does respond to global address 0x60, although the EV kit hardware cannot be set to this specific address.

## Record Macro State Controls

When the Record checkbox is checked, the program automatically enters the record macro state and disables certain buttons and menus. Choosing the Commands|Clear Script Input menu clears any script presently in the Macro script input edit box field. Comment lines in a macro script begin with a # / ; ' * character. A line of script is entered by choosing the appropriate Slave Address , Register Address and entering the desired Hexadecimal Data or Binary Data in the combo boxes. Then selecting the Write Byte or Read Byte button enters the script into the Macro input edit box field. For time delays in a macro, choose the desired delay time from the combo box on the right side of the Delay button and then select the Delay button. The macro must be saved before exiting the record macro state, using the File|Save Macro menu. The macro file must have an smb file extension name.

To edit a previously saved macro, open the macro using the File|Open Macro menu and make the desired edits. The modified file must be saved prior to exiting  the  record  macro state. Uncheck the Record checkbox to exit the record macro state. Additionally, a macro can be created or edited using a plain text editor in 'Text Mode.' The file must be saved with an smb extension.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

## Pulldown Menus and Saving Data

Most of the main window's available functions and a few more can be evaluated by using the pulldown menu .

## General-Purpose 2-Wire Interface Utility

There are two methods for communicating with the MAX5945: through the Main Window Display or through the general-purpose Two-Wire Interface Diagnostics Utility using the ViewInterface menu. The utility configures the I 2 C-compliant 2-wire interface parameters such as Start and Stop bits, Acknowledgements, and clock timing. The two-wire Interface screen allows you to  send general-purpose I 2 C-compliant 2-wire commands using the SMBusWriteByte / ReadByte and WriteWord / ReadWord commands. For more information  on  the  differences  between the I 2 C-compliant 2wire interface and an SMBus interface, read the application note, ' Comparing the I 2 C Bus to the SMBus ' at www.maxim-ic.com. When using the Two-Wire Utility, the Main Window display no longer keeps track of changes sent to hardware. The EV kit can be reinitialized to the startup screen settings by resetting the MAX5945 using Reset pushbutton S5.

The Hunt for active devices button scans the entire two-wire address space, reporting each address that is acknowledged. The SMBusWriteByte transmits the device address, command, and one byte of data. The SMBusReadByte transmits the device address, a command and then retransmits the device address and reads one byte of data. The SMBusWriteWord and SMBusReadWord operate the same, except two bytes of data are used.

## Troubleshooting Problem: Cannot find MAX5945 EV kit parallel port connection.

Ensure that the I/O extension cable is connected to a parallel port, and not a SCSI or other type of port. If a local  printer  driver  is  installed,  temporarily  disable  it. The software will not work if the program icon is dragged onto the Windows desktop; instead, install the software into a subdirectory, such as C:\MAX5945.

<!-- image -->

Figure 2. The 2-Wire Interface Window Provides Direct, Low-Level Access to the MAX5945 through the I 2 C-Compliant 2-Wire Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 3. MAX5945 EV Kit Schematic (Controller Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX5945 EV Kit Schematic (Optical Coupler Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 5. MAX5945 EV Kit Schematic (Network Interface)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX5945 EV Kit Schematic (100Hz Oscillator Circuit)

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 7. MAX5945 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. MAX5945 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 9. MAX5945 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit/Evaluation System

<!-- image -->

Figure 10. MAX5945 EV Kit PC Board Layout-VCC Layer 3

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5945 Evaluation Kit/Evaluation System

Figure 11. MAX5945 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5945 Evaluation Kit

Figure 12. MAX5945 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_