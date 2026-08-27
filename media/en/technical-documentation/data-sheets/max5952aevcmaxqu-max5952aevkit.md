<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

## General Description

The MAX5952A evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board featuring an Ethernet four-port power-sourcing equipment (PSE) circuit  for  -48V  supply rail systems. The IEEE 802.3af and pre-802.3at-compliant MAX5952A PSE controller in a 36pin SSOP package and four n-channel power MOSFETs are used to form the main power-sourcing equipment circuit on the EV kit. The MAX5952A is used in power-overEthernet (PoE) applications requiring DC power over four Ethernet network ports. The EV kit provides optical isolation for the I 2 C-compliant 3-wire interface. The isolated interface can connect to a PC's USB port through a CMAXQUSB interface board. The EV kit can easily be reconfigured for interfacing to a user's stand-alone microcontroller for isolated or nonisolated operation. In standalone operation, the user must supply a separate 3.3V power supply capable of supplying 100mA for the EV kit's +3.3V optically isolated 3-wire interface.

The MAX5952A EV kit requires a -32V to -60V power supply (-48V supply rail) capable of supplying 4A or more to the EV kit for the power device (PD) through the four 10/100BASE-TX Ethernet network ports. The EV kit demonstrates PD discovery, classification, current-limit control, and other functions of an IEEE 802.3af and pre802.3at-compliant PSE.

The MAX5952A controls the -48V DC power to each of the four Ethernet network ports by controlling the port's power MOSFET and sensing current through the respective port's current-sense resistor. The current is fed to a 10/100BASE-TX voice-over-IP magnetic module at each Ethernet output port. The MAX5952A EV kit provides a separate, independent power channel for each of the four Ethernet output ports.

The EV kit demonstrates the full functionality of the MAX5952A for each power channel such as configurable operational modes, high-power modes (programmable for up to 45W per port), port current information through I 2 C interface, PD detection, PD classification,  overcurrent  protection,  current  foldback, under/overvoltage protection and AC-disconnect monitoring. All these features are configurable on the EV kit and additional test points for voltage probing and current measurements have been provided.

The EV kit software is Windows® 98SE/2000/XP compatible and provides a user-friendly interface to demonstrate the features of the MAX5952A while also providing access to each register at the bit level. The program is menu driven and offers a graphic interface with control buttons. The program also includes a macro engine to allow automated evaluation and testing of the MAX5952A at the system level. The program's macro output files can be automatically saved.

Order the MAX5952AEVCMAXQU for a complete PCbased evaluation  of  the  MAX5952A.  Order  the MAX5952AEVKIT if you already have a CMAXQUSB interface board or do not require PC-based evaluation of the MAX5952A.

## Features

- ♦ IEEE 802.3af and Pre-802.3at-Compliant PowerSourcing Equipment (PSE) Circuit
- ♦ High-Power Mode Programmable Up to 45W per Port
- ♦ Port Current Readout Through I 2 C Interface
- ♦ Input Voltages

-32V to -60V Providing 4A (-48V Power Circuit, 750mA/Port)

- ♦ Ethernet Network Ports

Four RJ-45 10/100BASE-TX Ethernet Network Input Ports

Four RJ-45 10/100BASE-TX Ethernet Network Output Power-Over-Ethernet Ports

- ♦ Demonstrates Four Separate Independent Power Switch Controllers
- ♦ Provides PD Detection and Classification
- ♦ Configurable DC/AC Load Removal Detection and Disconnect Monitoring
- ♦ Configurable Current Sensing
- ♦ Convenient Voltage and Current Test Points
- ♦ Four Output-Port LED Status Indicators
- ♦ Optically Isolated 3-Wire I 2 C-Compliant PC Interface
- ♦ Reconfigurable for Stand-Alone Operation or with an External Microcontroller (Requires +3.3V 100mA Supply)
- ♦ Windows 98SE/2000/XP-Compatible Software
- ♦ Fully Assembled and Tested

Windows is a registered trademark of Microsoft Corp.

## Ordering Information

| PART             | TYPE      |
|------------------|-----------|
| MAX5952AEVKIT    | EV Kit    |
| MAX5952AEVCMAXQU | EV System |

Note: The MAX5952A EV kit software is provided with the MAX5952AEVKIT. However, the CMAXQUSB interface board is required to interface the EV kit to the computer when using the software.

## MAX5952A Evaluation Kit/Evaluation System

## Component Lists

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C32           |     1 | 3.3µF ±10%, 10V X5R ceramic capacitor (0805) AVX 0805ZD335KA                     |
| C40           |     1 | 0.015µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H153K             |
| C43           |     1 | 0.022µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K             |
| C45           |     1 | 2.2µF ±10%, 16V X7R ceramic capacitor (1206) Murata GRM31MR71C225K               |
| C46           |     1 | 0.0047µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H472K            |
| C48           |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C224K              |
| D1-D4         |     4 | 1A, 200V rectifier diodes (SMA) Central Semiconductor CMR1-02M+                  |
| D5-D8         |     4 | 250mA, 75V high-speed switching diodes (SOT23) Central Semiconductor CMPD4448+   |
| D9-D12        |     4 | 56.7V, 600W transient voltage suppressors (SMB) Vishay SMBJ51A                   |
| D13-D16       |     4 | Green surface-mount LEDs (1206)                                                  |
| D17-D20       |     4 | 5.6V, 500mW ±5% low-noise zener diodes (SOD-123) Central Semiconductor CMHZ4626+ |
| D21           |     1 | 1A, 100V high-voltage Schottky diode (SMA) Diodes Incorporated B1100             |
| D22           |     1 | 2A, 100V high-voltage Schottky diode (SMB) Diodes Incorporated B2100-13-F        |
| J1            |     1 | 2 x 10 right-angle female receptacle                                             |
| J2            |     1 | 6-pin header                                                                     |

## MAX5952A EV System

| PART          |   QTY | DESCRIPTION             |
|---------------|-------|-------------------------|
| MAX5952AEVKIT |     1 | MAX5952A evaluation kit |
| CMAXQUSB      |     1 | I 2 C interface board   |

## MAX5952A EV Kit

| DESIGNATION                                          |   QTY | DESCRIPTION                                                                                 |
|------------------------------------------------------|-------|---------------------------------------------------------------------------------------------|
| C1                                                   |     1 | 220µF ±20%, 100V electrolytic capacitor (18mm x 16.5mm) Panasonic EEVFK2A221M               |
| C2, C3                                               |     2 | 1.0µF ±10%, 6.3V X5R ceramic capacitors (0603) AVX 06036D105KA or Taiyo Yuden JMK107BJ105KA |
| C4                                                   |     1 | 220µF ±20%, 6.3V electrolytic capacitor (8.3mm x 9mm) SANYO 6SVPA220MAA                     |
| C5, C8, C13, C15, C41                                |     5 | 0.47µF ±10%, 100V X7R ceramic capacitors (1210) Vishay VJ1210Y474KXBAB                      |
| C6                                                   |     1 | 1µF ±10%, 100V X7R ceramic capacitor (1210) AVX 12101C105KAT9A                              |
| C7, C9, C16, C23, C30, C31, C33-C36, C38, C39, C44   |    13 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) AVX 0603YC104KA                               |
| C10, C11, C12, C17                                   |     0 | Not installed, ceramic capacitors (0805)                                                    |
| C14, C42                                             |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0805) AVX 08056D475KA or Taiyo Yuden JMK212BJ475KG |
| C18, C26-C29, C47, C49, C51, C55, C57, C59, C61, C63 |    13 | 0.1µF ±10%, 100V X7R ceramic capacitors (0805) AVX 08051C104KA                              |
| C19-C22, C24, C25                                    |     6 | 1000pF ±10%, 250V AC X7R UL ceramic capacitors (2010) Murata GA352QR7GF102K                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

## MAX5952A EV Kit (continued)

| DESIGNATION                            |   QTY | DESCRIPTION                                          |
|----------------------------------------|-------|------------------------------------------------------|
| R21, R28, R31, R65, R79, R91           |     6 | 100 Ω ±1% resistors (0603)                           |
| R23                                    |     1 | 51 Ω ±5% resistor (0805)                             |
| R24, R27, R32, R64                     |     4 | 10 Ω ±5% resistors (0603)                            |
| R25, R33, R36, R57                     |     0 | Not installed, resistors (0603) 2k Ω ±5% recommended |
| R37, R39, R41, R43, R45, R47, R49, R51 |     8 | 75 Ω ±5% resistors (0805)                            |
| R38, R40                               |     2 | 22.1k Ω ±1% resistors (0805)                         |
| R42                                    |     1 | 60.4k Ω ±1% resistor (0805)                          |
| R44                                    |     1 | 1.02k Ω ±1% resistor (0805)                          |
| R46                                    |     1 | 1k Ω ±5% resistor (0805)                             |
| R48, R50                               |     2 | 2 Ω ±5% resistors (1206)                             |
| R52                                    |     1 | 30 Ω ±5% resistor (0805)                             |
| R55                                    |     1 | 0.56 Ω ±5% resistor (0603)                           |
| R56, R71, R94, R97                     |     4 | 180 Ω ±5% resistors (0603)                           |
| R58-R61                                |     4 | 5.1k Ω ±5% resistors (0603)                          |
| R68                                    |     1 | 0 Ω ±5% resistor (0805)                              |
| R69, R70                               |     2 | 40.2k Ω ±1% resistors (0603)                         |
| R72                                    |     1 | 0 Ω ±5% resistor (1206)                              |
| R73-R76                                |     4 | 301k Ω ±1% resistors (0603)                          |
| R78, R80                               |     2 | 10k Ω ±1% resistors (0603)                           |
| R81                                    |     1 | 32.4k Ω ±1% resistor (0603)                          |
| R82, R86                               |     2 | 20k Ω ±1% resistors (0603)                           |
| R83                                    |     1 | 46.4k Ω ±1% resistor (0603)                          |
| R84                                    |     1 | 226k Ω ±1% resistor (0603)                           |
| R85                                    |     1 | 200k Ω ±1% resistor (0603)                           |
| R87-R90                                |     4 | 2.2M Ω ±5% resistors (0805)                          |
| R92, R93                               |     2 | 1 Ω ±1% resistors (1206)                             |
| R98-R101                               |     0 | Not installed, resistors (0603) 1k Ω ±5% recommended |
| S1-S5                                  |     5 | Micro miniature pushbutton switches                  |
| U1-Socket                              |     1 | 36 IC socket                                         |
| U1                                     |     1 | Quad PSE controller (36 SSOP) Maxim MAX5952AUAX+     |

| DESIGNATION                                     |   QTY | DESCRIPTION                                                                                                                                                                                                                                                    |
|-------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                                              |     1 | 2 x 4 FASTJACK® through-hole RJ-45 jack (8P-8C ) with 10/100BASE-TX voice-over-IP magnetics (700mA DC) Halo Electronics HFJ24-MAX2E Specific application recommendations Midspan: HFJ14-RP07-S2L11RL or HFJ24-RP07E Endspan: HFJ14-RP32-S2L11RL or HFJ24-RP32E |
| JU1-JU8                                         |     8 | 3-pin headers                                                                                                                                                                                                                                                  |
| JU9, JU10                                       |     0 | Not installed, 2 x 5-pin headers                                                                                                                                                                                                                               |
| JU11-JU14                                       |     0 | Not installed, 2 x 3-pin headers                                                                                                                                                                                                                               |
| JU15-JU18, JU27-JU30                            |     8 | 2-pin headers                                                                                                                                                                                                                                                  |
| JU19-JU26                                       |     0 | Not installed, 2-pin headers                                                                                                                                                                                                                                   |
| L1                                              |     1 | 68µH, 0.9A inductor Coilcraft DO3308P-683ML                                                                                                                                                                                                                    |
| N1-N4                                           |     4 | 100V, 3.7A n-channel MOSFETs (PowerPAK 8-pin SO) Vishay Si7454DP-E3                                                                                                                                                                                            |
| N5-N8                                           |     4 | 100V, 0.17A n-channel MOSFETs (SOT23) Fairchild BSS123                                                                                                                                                                                                         |
| N9                                              |     1 | 100V, 1.5A n-channel MOSFET (SOT23) Vishay Si2328DS-T1-E3                                                                                                                                                                                                      |
| Q1, Q2, Q3                                      |     3 | 80V, 500mA pnp transistors (SOT23) Central Semiconductor CMPTA56+                                                                                                                                                                                              |
| R1-R8                                           |     8 | 0.250 Ω ±1%, 1W resistors (1206) IRC LRC-LR1206LF-01-R250-F or Panasonic ERJ8BQFR25V                                                                                                                                                                           |
| R9, R29, R30, R53, R54, R77, R95, R96           |     8 | 3k Ω ±5% resistors (0603)                                                                                                                                                                                                                                      |
| R10-R20, R22, R26, R34, R35, R62, R63, R66, R67 |    19 | 1k Ω ±5% resistors (0603)                                                                                                                                                                                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

## MAX5952A EV Kit (continued)

| DESIGNATION                                      |   QTY | DESCRIPTION                                          |
|--------------------------------------------------|-------|------------------------------------------------------|
| U10                                              |     1 | Current-mode PWM controller (8 SO) Maxim MAX5020ESA+ |
| OSC_INPUT                                        |     1 | BNC connector                                        |
| GND, GND, GND, GND, DGND, DGND, DGND, DGND, DGND |     9 | PC test points, miniature, red                       |
| VDIG, VDIG, VDIG, VDIG                           |     4 | PC test points, miniature, yellow                    |
| VEE                                              |     1 | PC test point, miniature, black                      |
| VEE, GND                                         |     2 | Uninsulated banana jacks                             |
| -                                                |    12 | Shunts ( JU1-JU8, JU15-JU18)                         |
| -                                                |     1 | Software disk (CD-ROM) MAX5952A Evaluation Kit       |
| -                                                |     1 | PCB: MAX5952A Evaluation Kit+                        |

## Component Suppliers

| SUPPLIER                                 | PHONE        | WEBSITE                 |
|------------------------------------------|--------------|-------------------------|
| AVX Corp.                                | 843-946-0238 | www.avxcorp.com         |
| CEL/NEC; California Eastern Laboratories | 800-997-5227 | www.cel.com             |
| Central Semiconductor Corp.              | 631-435-1110 | www.centralsemi.com     |
| Coilcraft, Inc.                          | 847-639-6400 | www.coilcraft.com       |
| Diodes Inc.                              | 805-446-4800 | www.diodes.com          |
| Fairchild Semiconductor                  | 888-522-5372 | www.fairchildsemi.com   |
| HALO Electronics, Inc.                   | 650-903-3800 | www.haloelectronics.com |
| IRC, Inc.                                | 361-992-7900 | www.irctt.com           |
| Murata Electronics North America, Inc.   | 770-436-1300 | www.murata.com          |
| Panasonic                                | 714-373-7366 | www.panasonic.com       |
| SANYO Electronic Co., Ltd.               | 619-661-6835 | www.sanyodevice.com     |
| Taiyo Yuden                              | 800-348-2496 | www.t-yuden.com         |
| Vishay                                   | -            | www.vishay.com          |

Note: Indicate that you are using the MAX5952A/MAX5952C when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| U2            |     1 | SPDT analog switch (6 SC70) Maxim MAX4599EXT+                                        |
| U3            |     1 | Dual-output op amp (8 SOT23) Maxim LMX358AKA+                                        |
| U4            |     1 | Dual universal switched-capacitor filter (16 QSOP) Maxim MAX7491EEE+                 |
| U5            |     1 | 3V EconOscillator™/divider (8 µSOP) Maxim DS1077LU-40+                               |
| U6            |     1 | 2.048V voltage reference (3 SOT23) Maxim MAX6106EUR+                                 |
| U7, U8        |     2 | High-speed, 15Mbps logic gate optocouplers (8 SO) CEL/NEC PS9821-2-A                 |
| U9            |     1 | TinyLogic® UHS dual buffer with Schmitt trigger inputs (6 SC70) Fairchild NC7WZ17P6X |

EconOscillator is a trademark of Dallas Semiconductor Corp. TinyLogic is a registered trademark of Fairchild Semiconductor, Corp.

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

## MAX5952A EV Kit Files

| FILE                     | DESCRIPTION                                |
|--------------------------|--------------------------------------------|
| INSTALL.EXE              | Installs the EV kit files on your computer |
| MAX5952A.EXE             | Application program                        |
| HELPFILE.HTM             | MAX5952A EV kit help file                  |
| FTD2XX.INF               | USB device driver file                     |
| POWER_ON.SMB             | Bitmap macro routine                       |
| TEST#1_MANUAL_MODE.SMB   | Bitmap macro routine                       |
| TEST#2_AUTO_MODE_DC.SMB  | Bitmap macro routine                       |
| TEST#3_AUTO_MODE_AC.SMB  | Bitmap macro routine                       |
| TEST#4_SEMIAUTO_MODE.SMB | Bitmap macro routine                       |
| TROUBLESHOOTING_USB.PDF  | USB driver installation help file          |
| UNINST.INI               | Uninstalls the EV kit software             |

## Quick Start

The MAX5952A EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

## Required Equipment

- One -32V to -60V, 4A capable DC power supply
- Maxim MAX5952A EV kit and CMAXQUSB interface board
- Windows 98SE/2000/XP computer with a spare USB port
- USB I/O extension cable, straight-through male-tofemale cable
- One voltmeter for confirming output voltages

Note: The GND banana jack is more positive than the VEE banana jack.

Use an isolated oscilloscope for probing with respect to VEE.

Note: In  the  following section(s), software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underline refers to items from the Windows operating system.

## Hardware Connections

- 1) Visit  the  Maxim Integrated Products website (www.maxim-ic.com/evkitsoftware) to download the most  recent  version  of  the  EV  kit  software 5952ARXX.ZIP. Save the EV kit software to a temporary folder and uncompress the .ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Connect the CMAXQUSB interface board to the MAX5952A EV kit's interface connector J1.
- 4) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU1 (A0, high), JU2 (A1, high), JU3 (A2, high), and JU4 (A3, high) to set the MAX5952A I 2 Ccompliant slave address to 0x5E hexadecimal.
- 5) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumper JU5 (signal mode).
- 6) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumpers JU6 (automatic mode) and JU8 (on-board 100Hz oscillator running).
- 7) Verify  that  a  shunt  is  installed  on  pins  2  and  3  of jumper JU7 (OSC\_IN, 100Hz oscillator).
- 8) Verify  that  no  shunt  is  installed  on  jumpers  JU15, JU16, JU17, and JU18 (AC disconnect).
- 9) Connect the -32V to -60V DC power supply to the metal VEE banana jack and the supply ground to the metal GND banana jack. Do not turn on the power supply until all connections are completed.
- 10) Connect a PD to the desired Ethernet output port's RJ-45 connector (upper row) on the MAX5952A EV kit's 2 x 4 FASTJACK (J3) as listed below:
- PORT1\_OUT at upper row RJ-45
- PORT2\_OUT at upper row RJ-45
- PORT3\_OUT at upper row RJ-45
- PORT4\_OUT at upper row RJ-45

<!-- image -->

This step is optional if network connectivity and/or a PD is not required.

- 11) Connect the MAX5952A EV kit's network input LAN port (lower row) to the corresponding PD LAN connection as listed below:
- PORT1\_IN at lower row RJ-45
- PORT2\_IN at lower row RJ-45
- PORT3\_IN at lower row RJ-45
- PORT4\_IN at lower row RJ-45

This step is optional if network connectivity is not required.

- 12) Install the MAX5952A evaluation software on your computer by running the INSTALL.EXE program on the CD-ROM. The program files are copied and icons  are  created  for  them  in  the  Windows Start menu. Restart the computer when prompted. For Windows 2000 and XP, you may need administrator privileges.
- 13) Turn on the power supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

- 14) Connect  the  USB  cable  from  the  PC  to  the CMAXQUSB interface board. A Building Driver Database window should pop up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If you do not see a window that is similar to the one described above after 30s, try removing the USB cable from the CMAXQUSB and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000  and  XP.  Refer  to  the  document  TROU-BLESHOOTING\_USB.PDF included with the software if you have any problems during this step.
- 15) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX5952A (default installation directory) using the Browse button.
- 16) Start the MAX5952A EV kit software by opening its icon in the Start | Programs menu.
- 17) Observe as the program automatically detects the CMAXQUSB interface board, starts the main program, and then automatically detects the I 2 C-compliant address configured for the MAX5952A.
- 18) Select the BitMap Controls tab at the top.
- 19) Load and run the Power\_on.smb macro program from the File | Open | Run Macro menu. The script automatically runs after selecting Open .
- 20) All four network port green status LEDs should be lit.
- 21) Four other example macros allow quick testing of the manual mode, auto mode, semiauto mode, and with DC and/or AC load-disconnect detection. These macros are:
- test#1\_manual\_mode.smb
- test#2\_auto\_mode\_dc.smb
- test#3\_auto\_mode\_ac.smb
- test#4\_semiauto\_mode.smb

Read the embedded comments in each macro for detailed descriptions using a plain text editor.

- 22) Pressing pushbutton switches S1 through S4 shuts down  the  PORT1\_OUT  through  PORT4\_OUT respective DC power.
- 23) Test points VEE (U1 VEE pin) and GND test points are provided throughout the printed-circuit board (PCB) to observe desired signals with an oscilloscope or voltage meter. Use an isolated oscilloscope for probing with respect to VEE.
- 24) Header J2 is provided to monitor the SHDN pin signals.  These signals are not isolated and are referenced to DGND. DGND and GND are shorted by a PCB trace between the pads of resistor R72.
- 25) Pressing the RESET pushbutton turns off power to all  ports  and returns the MAX5952A IC to the power-up condition.

Note: The GND banana jack is more positive than the VEE banana jack. Use an isolated oscilloscope for probing with respect to VEE.

Note: An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Detailed Description of Hardware

The MAX5952A EV kit features a 10/100BASE-TX Ethernet four-port PSE controller circuit for -48V supply rail systems. The EV kit's PSE circuit uses the IEEE 802.3af and pre802.3at-compliant MAX5952A network power controller, four n-channel power MOSFETs in 8-pin SO surfacemount packages, eight surface-mount current-sensing resistors, and four 10/100BASE-TX voice-over-IP magnetic modules (integrated in J3) to form the basic portion of a PSE circuit. The MAX5952A EV kit has been designed as an IEEE 802.3af and pre-802.3at-compliant PSE and demonstrates all the required functions such as PD discovery, classification, current-limit control of a connected PD at each Ethernet output port, and DC/AC disconnect detection. The EV kit also has a separate on-board 100Hz sine-wave oscillator circuit for the AC-disconnect detection features. An IBM-compatible PC can be used to  communicate with the slave MAX5952A over an I 2 Ccompliant 3-wire interface, optically coupled logic, and a 2-wire to USB-port CMAXQUSB interface board.

The MAX5952A EV kit PSE circuit requires a -32V to -60V power supply (-48V supply rail) capable of supplying 4A to the EV kit's GND and VEE steel banana jacks or PCB pads. A separate +3.3V power supply capable of supplying 100mA is also required for the MAX5952A optically isolated I 2 C-compliant 3-wire interface if a CMAXQUSB interface board is not used. Note that DGND and GND are shorted by a PCB trace between the pads of resistor R72.

The MAX5952A controls the -48V DC power to each of the four 10/100BASE-TX Ethernet output ports by regulating the respective port's n-channel power MOSFET and sensing current through the respective port's currentsense resistors. The current is fed to the 10/100BASE-TX voice-over-IP magnetic module connected to the respective  Ethernet output port's RJ-45 jack. An IEEE 802.3af and pre-802.3at-compliant PD connects to the respective Ethernet output port (J3 upper ports) on the EV kit. The

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

PD can be located up to 350ft from the EV kit when connected  with  twisted  4-pair  Ethernet  cable.  The MAX5952A EV kit provides separate and independent power control for each of the four Ethernet output ports. The 10/100BASE-TX voice-over-IP magnetic module is decoupled to the EV kit's chassis ground by system chassis capacitors C19, C20, C21, C22, C24, and C25. The EV kit's isolated chassis ground (Chassis\_GND) PCB pad connects to the network system ground.

The MAX5952A EV kit features configurable operational modes, PD detection, PD classification, overcurrent protection, current foldback, under/overvoltage protection, DC and AC disconnect monitoring, high-power mode, and port current information through the I 2 C interface. The overcurrent protection can be programmed through software and/or changing current-sense resistors (R1 and R5), (R2 and R6), (R3 and R7), or (R4 and R8) for the desired output port. Each of the four modes of operation (auto, semi, manual, shutdown) can be evaluated after configuring jumper JU6 and configuring the appropriate MAX5952A register (see Table 3) or using the software's high-level Configuration window. PD detection diodes D1-D4 can be bypassed to reduce power dissipation when AC-disconnect monitoring is not required, using jumpers JU15-JU18. Each port's AC detection circuit resistor-capacitor-diode (RCD) network can be reconfigured with a jumper also. See Tables 4, 8, and 9 for various AC detection disconnect and oscillator configurations. Each port features a 600W bidirectional overvoltage transient suppressor, diodes (D9-D12), and decoupling capacitors (C26-C29) for transient protection at the port.

Test points and jumpers have been provided for voltage probing and current measurements of each channel's power circuit. Additionally, a 6-pin, 0.100in center header is also provided for monitoring the SHDN1 , SHDN2 , SHDN3 , SHDN4 , and RESET signals routed to the MAX5952A pins from the respective switch (S1-S5). When using the header signals, caution should be exercised since DGND and GND are shorted by resistor R72 PCB shorting trace. Additionally, since the GND is more positive than VEE, use an isolated oscilloscope when probing signals, with respect to VEE. Green LEDs relative to each port's RJ-45 output jack, indicate when the respective port's power is turned on.

A 100Hz oscillator circuit, which meets the IEEE 802.3af and pre-802.3at PSE power interface (PI) parameters for AC-disconnect detection, is provided by the MAX5952A EV kit. Five ICs make up the 100Hz oscillator circuit that consists of U5, a programmable 40MHz EconOscillator/Divider square-wave oscillator, and the MAX7491 dual universal switched-capacitor filter, U4. Voltage reference source U6 (MAX6106) provides 2.048V for the circuit and level shifts the sine wave's output. The MAX4599, an SPDT analog switch, and IC U3, the LMX358 dual-output op amps, pro- vide support functions for the oscillator circuit. An external sine-wave oscillator meeting the IEEE 802.3af and pre802.3at PSE PI parameters can be connected to the EV kit's BNC connector (OSC\_INPUT) after reconfiguring jumper JU7. The EV kit's 100Hz oscillator circuit can be shut down by using jumper JU8 if an external oscillator is used or AC-disconnect detection is not required.

<!-- image -->

The EV kit provides optical isolation for the I 2 C-compliant 3-wire interface required by the MAX5952A, operating as a slave device by optical couplers U7 and U8. The optically isolated interface connects to a computer's USB port through a CMAXQUSB interface board. The EV kit's I 2 C-compliant 2-wire or 3-wire interface can be reconfigured for interfacing to a stand-alone microcontroller for isolated (2-wire) or nonisolated (3-wire) serial operation. Additionally, for stand-alone microcontroller operation, the CMAXQUSB interface is not required. A separate +3.3V power supply capable of supplying 100mA is required for the MAX5952A optically isolated I 2 C-compliant 3-wire interface. Note that DGND and GND are shorted by a PCB trace between the pads of resistor R72.

The optical isolation consists of optocoupler U7 that provides galvanic isolation for the serial-interface clock line (SCL) and serial-interface input data line signals. Optocoupler U8 provides galvanic isolation for the serial output and data line (SDAOUT) and INT signals. The SCL and SDAOUT signals' 3-wire serial interface are combined on the isolated 2-wire side prior to feeding logic buffer U9. The SCL\_IN, SDA, INT \_OUT, OPTO\_GND, and OPTO\_VCC PCB pads are used for a 2-wire isolated stand-alone operation. For nonisolated stand-alone 3-wire operation, jumper JU9 shorting trace must be cut open and then the SCL, SDAIN, SDAOUT, INT , DGND, and VDIG PCB pads must be connected to the microcontroller circuit. Note that the EV kit's provided VDIG is at +3.3V. The OPTO\_GND and GND, DGND planes are isolated by the optical couplers. However, when using the EV kit  in  a  nonisolated configuration, caution should be exercised since DGND and GND are shorted by resistor R72 PCB shorting trace. Since GND is more positive than VEE, use an isolated oscilloscope when probing signals with respect to VEE.

The MAX5952A slave address is configured by four jumpers (JU1-JU4) and can be configured from 0x40 through 0x5F hexadecimal serial address. Global address 0x60 is accepted by the MAX5952A regardless of the jumper settings. See Table 1 for more information on setting the MAX5952A slave address.

## Jumper Selection

The MAX5952A EV kit features several jumpers to reconfigure the EV kit for various PSE configurations and PD requirements. Additionally, jumpers and PCB pads are provided for connecting an external microcontroller.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

## MAX5952A I 2 C-Compatible 2-Wire or 3-Wire Slave Address Selection

The MAX5952A EV kit features several 3-pin jumpers (JU1, JU2, JU3, JU4) to set the slave address of the MAX5952A least significant bits (LSB) of the slave

Table 1. MAX5952A Slave Address Selection

| JU4 (BIT A3) SHUNT   | JU3 (BIT A2) SHUNT   | JU2 (BIT A1) SHUNT   | JU1 (BIT A0) SHUNT   | MAX5952A SLAVE ADDRESS   | READ/WRITE      |
|----------------------|----------------------|----------------------|----------------------|--------------------------|-----------------|
| 2-3                  | 2-3                  | 2-3                  | 2-3                  | 0x40 0x41                | Read Write      |
| 2-3                  | 2-3                  | 2-3                  | 1-2                  | 0x42 0x43                | Read Write      |
| 2-3                  | 2-3                  | 1-2                  | 2-3                  | 0x44 0x45                | Read Write      |
| 2-3                  | 2-3                  | 1-2                  | 1-2                  | 0x46 0x47                | Read Write      |
| 2-3                  | 1-2                  | 2-3                  | 2-3                  | 0x48 0x49                | Read Write      |
| 2-3                  | 1-2                  | 2-3                  | 1-2                  | 0x4A 0x4B 0x4C           | Read Write Read |
| 2-3                  | 1-2                  | 1-2                  | 2-3                  | 0x4D                     | Write           |
| 2-3                  | 1-2                  | 1-2                  | 1-2                  | 0X4E 0x4F                | Read Write      |
| 1-2                  | 2-3                  | 2-3                  | 2-3                  | 0x50 0x51                | Read Write      |
| 1-2                  | 2-3                  | 2-3                  | 1-2                  | 0x52 0x53                | Read Write      |
| 1-2                  | 2-3                  | 1-2                  | 2-3                  | 0x54 0x55                | Read Write      |
| 1-2                  | 2-3                  | 1-2                  | 1-2                  | 0x56 0x57                | Read Write      |
| 1-2                  | 1-2                  | 2-3                  | 2-3                  | 0x58 0x59                | Read Write      |
| 1-2                  | 1-2                  | 2-3                  | 1-2                  | 0x5A 0x5B                | Read Write      |
| 1-2                  | 1-2                  | 1-2                  | 2-3                  | 0x5C 0x5D                | Read Write      |
| 1-2                  | 1-2                  | 1-2                  | 1-2                  | 0X5E                     | Read            |
|                      |                      |                      |                      | 0x5F                     | Write Read      |
| X                    | X                    | X                    | X                    | 0x60* 0x61*              | Write           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

address on the I 2 C-compatible 2-wire or 3-wire interface. The 3 most significant bits are set by the MAX5952A to 010. The EV kit's software automatically sets the LSB for the proper read/write command. Table 1 lists the jumper addressing options.

## MAX5952A Evaluation Kit/Evaluation System

## Midspan/Signal Mode Selection

The MAX5952A EV kit features a 3-pin jumper (JU5) to set the MAX5952A in midspan or signal mode. Table 2 lists  the  jumper  options for the two modes used to detect a valid PD connected to the PSE-respective Ethernet output port. Refer to the MAX5952 IC data sheet for more information on the modes.

Table 2. Jumper JU5 Functions

| SHUNT LOCATION   | MIDSPAN PIN                         | MAX5952A MODE   |
|------------------|-------------------------------------|-----------------|
| 1 and 2          | Connected to VDIG with resistor R14 | Midspan mode    |
| 2 and 3          | Connected to DGND with resistor R14 | Signal mode     |

## Operational Modes (Automatic, Shutdown)

The MAX5952A EV kit features a 3-pin jumper JU6 to set  the  MAX5952A's initial startup operational mode. After startup, data sent to the mode register (0x12) reconfigures the operational mode of the MAX5952A. Table 3 lists the jumper options.

Table 3. Initial Startup Operational Mode

| JU6 SHUNT LOCATION   | AUTO PIN                            | MODE REGISTER (0x12) STATUS BITS   | OPERATIONAL MODE   |
|----------------------|-------------------------------------|------------------------------------|--------------------|
| 1 and 2              | Connected to VDIG with resistor R15 | 0xFF                               | Automatic          |
| 2 and 3              | Connected to DGND with resistor R15 | 0x00                               | Shutdown           |

## AC Disconnect Monitoring Oscillator Input

The MAX5952A EV kit features a 3-pin jumper (JU7) to configure the MAX5952A's oscillator input at the OSC\_IN pin. The oscillator is used for AC-disconnect monitoring of the PD. Table 4 lists the jumper options for the two oscillator configurations available on the EV kit.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 4. Jumper JU7 Functions

| SHUNT LOCATION   | MAX5952A OSC_IN PIN                           | EV KIT MODE                                                    |
|------------------|-----------------------------------------------|----------------------------------------------------------------|
| 1 and 2          | Connected to OSC_INPUT BNC connector          | AC disconnect detection using external 100Hz oscillator        |
| 2 and 3          | Connected to EV kit on-board 100Hz oscillator | AC disconnect detection using EV kit on-board 100Hz oscillator |

## 100Hz Oscillator Shutdown

The MAX5952A EV kit features a jumper to set the EV kit's  on-board 100Hz oscillator modes of operation. Table 5 lists the selectable jumper options to configure the 100Hz oscillator.

Table 5. Jumper JU8 Functions

| SHUNT LOCATION   | U4, SHDN PIN        | 100Hz OSCILLATOR MODE   |
|------------------|---------------------|-------------------------|
| 1 and 2          | Connected to VDIG_F | Running                 |
| 2 and 3*         | Connected to GND    | Shutdown                |

## Stand-Alone Microcontroller Interface (Isolated/Nonisolated)

The MAX5952A EV kit features PCB pads and a jumper to  interface directly with a microcontroller. The 2 x 5-pin jumper JU9 has shorting connections on the bottom layer that must be cut open to disable the optical  coupler interface for nonisolated evaluation. The jumper shorting connections must be in place for evaluating an isolated stand-alone microcontroller interface. Table 6 lists the selectable jumper options.

## MAX5952A Evaluation Kit/Evaluation System

Table 6. Jumper JU9 and Microcontroller PCB Pads Function

| JU9 PIN NO. SHORT LOCATION   | ISOLATION MODE   | MAX5952A EV KIT PC PAD TO MICROCONTROLLER CONNECTION                    |
|------------------------------|------------------|-------------------------------------------------------------------------|
| 1 and 2 shorted*             | Isolated         | OPTO_VCC PC pad connects to microcontroller +3.3V power supply.         |
| 3 and 4 shorted*             | Isolated         | SCL_IN PC pad connects to microcontroller serial-clock line.            |
| 5 and 6 shorted*             | Isolated         | SDA PC pad connects to microcontroller SDA data line.                   |
| 7 and 8 shorted*             | Isolated         | SDA PC pad connects to microcontroller SDA data line.                   |
| 9 and 10 shorted*            | Isolated         | INT _OUT PC pad connects to microcontroller interrupt pin.              |
| -                            | Isolated         | OPTO_GND PC pad connects to microcontroller power-supply ground.        |
| 1 and 2 cut open             | Nonisolated      | JU9-2 VDIG pin supplies power to the microcontroller from VDIG voltage. |
| 3 and 4 cut open             | Nonisolated      | JU9-4 SCL pin connects to microcontroller serial-clock line.            |
| 5 and 6 cut open             | Nonisolated      | JU9-6 SDAIN pin connects to microcontroller SDA data line.              |
| 7 and 8 cut open             | Nonisolated      | JU9-8 SDAOUT pin connects to microcontroller SDA data line.             |
| 9 and 10 cut open            | Nonisolated      | JU9-10 INT pin connects to microcontroller interrupt pin.               |
| -                            | Nonisolated      | TP DGND connects to microcontroller power-supply ground.                |

*Default set by PCB trace.

## MAX5952A PORT DET\_, OUT\_, GATE\_, and SENSE\_ Pin Signal Measurements

The MAX5952A EV kit features jumpers to facilitate current  and  voltage  measuring at each port's respective DET\_,  OUT\_,  GATE\_,  and  SENSE\_  pins  on  the MAX5952A IC. Several 2-pin and 2 x 3-pin jumpers are used to obtain the desired measurement for each port. Jumpers JU11 and JU19 are provided for port 1, jumpers JU12 and JU20 are provided for port 2, jumpers JU13 and JU21 are provided for port 3, and jumpers JU14 and JU22 are provided for port 4. The jumper pins are shorted by a PCB trace on the bottom and top layer, respectively, of the EV kit by default for normal operation. The shorts can be cut open for measurements. See Figures 5 and 7, the controller circuit and network schematics, for a specific port's jumper.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

## AC-Disconnect Operation (Rectifier Diodes D1-D4)

The MAX5952A EV kit features jumpers JU15-JU18 to bypass each port's respective AC disconnect rectifier diode (D1-D4), thus reducing diode power dissipation when AC disconnect is not required. Table 7 lists the selectable jumper options for each port. Also see Table 8.

## Table 7. AC-Disconnect Jumper Functions

| PORT   | JUMPER   | SHUNT POSITION   | AC-DISCONNECT RECTIFIER DIODE                                      |
|--------|----------|------------------|--------------------------------------------------------------------|
| Port 1 | JU15     | Open             | AC disconnect diode D1 active; AC disconnect function can be used. |
| Port 1 | JU15     | Installed*       | AC disconnect diode D1 bypassed, no AC disconnect function.        |
| Port 2 | JU16     | Open             | AC disconnect diode D2 active; AC disconnect function can be used. |
| Port 2 | JU16     | Installed*       | AC disconnect diode D2 bypassed, no AC disconnect function.        |
| Port 3 | JU17     | Open             | AC disconnect diode D3 active; AC disconnect function can be used. |
| Port 3 | JU17     | Installed*       | AC disconnect diode D3 bypassed, no AC disconnect function.        |
| Port 4 | JU18     | Open             | AC disconnect diode D4 active; AC disconnect function can be used. |
| Port 4 | JU18     | Installed*       | AC disconnect diode D4 bypassed, no AC disconnect function.        |

## Table 8. AC-Detection RC Jumper Functions

| PORT   | JUMPER   | SHORT POSITION   | AC-DETECTION RC NETWORK                                        |
|--------|----------|------------------|----------------------------------------------------------------|
| Port 1 | JU19     | Cut open*        | RC network R22/C5 bypassed.                                    |
| Port 1 | JU19     | Installed        | RC network R22/C5 active; AC disconnect function can be used.  |
| Port 2 | JU20     | Cut open*        | RC network R26/C8 bypassed.                                    |
| Port 2 | JU20     | Installed        | RC network R26/C8 active; AC disconnect function can be used.  |
| Port 3 | JU21     | Cut open*        | RC network R34/C13 bypassed.                                   |
| Port 3 | JU21     | Installed        | RC network R34/C13 active; AC disconnect function can be used. |
| Port 4 | JU22     | Cut open*        | RC network R35/C15 bypassed.                                   |
| Port 4 | JU22     | Installed        | RC network R35/C15 active; AC disconnect function can be used. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## AC-Detection RC Network

The MAX5952A EV kit features jumpers JU19-JU22 to bypass the AC-detection RC network when AC load disconnect detection is not needed. The inclusion of this RC network does not affect other circuit parameters. Each jumper has a PCB trace shorting it on the top layer. Table 8 lists the selectable jumper options to reconfigure each port's AC detection network. See Table 7 for bypassing the respective port's AC-disconnect diode.

## MAX5952A Evaluation Kit/Evaluation System

## Table 9. -48V Port Power Interface Jumper Functions

| PORT   | JUMPER   | PCB TRACE SHORT       | EV KIT OPERATION                      |
|--------|----------|-----------------------|---------------------------------------|
| Port 1 | JU27     | Shorting trace intact | Normal operation                      |
| Port 1 | JU27     | Cut open              | -48V_1 power available at pin 1* only |
| Port 2 | JU28     | Shorting trace intact | Normal operation                      |
| Port 2 | JU28     | Cut open              | -48V_2 power available at pin 1* only |
| Port 3 | JU29     | Shorting trace intact | Normal operation                      |
| Port 3 | JU29     | Cut open              | -48V_3 power available at pin 1* only |
| Port 4 | JU30     | Shorting trace intact | Normal operation                      |
| Port 4 | JU30     | Cut open              | -48V_4 power available at pin 1* only |

*Pin close to U1.

## -48V Port Power Interface or Voltage Measurement

The MAX5952A EV kit includes jumpers JU27-JU30 to disconnect each port's -48V power independently for connection to an external network interface circuit. Additionally, the respective jumper's pins can be utilized to measure the voltage or current for the respective port. Table 9 lists the specific jumper for each port. Each jumper is shorted on the bottom layer of the PCB.

## SHDN and RESET Signals

The MAX5952A EV kit features four pushbutton switches (S1-S4) to independently shut down each channel's power circuit. A reset pushbutton (S5) is also provided to reset the MAX5952A. Header J2 (6-pin 0.100in center  header) is available for monitoring the SHDN1 , SHDN2 , SHDN3 , SHDN4 , and RESET signals routed to the  MAX5952A pins. Digital ground is provided at the header on pin 6. See Table 10, which lists the specific switch and header pin signals that can be interfaced with a ribbon cable or test leads. These signals are not isolated and are referenced to DGND on the EV kit.

Table 10. Switch and Header J2 Pin Signals

| SWITCH   | SIGNAL   |   HEADER J2 PIN |
|----------|----------|-----------------|
| S1       | SHDN1    |               1 |
| S2       | SHDN2    |               2 |
| S3       | SHDN3    |               3 |
| S4       | SHDN4    |               4 |
| S5       | RESET    |               5 |
| -        | DGND     |               6 |

## Bypassing AC Disconnect and the DGND-to-GND Connection (Resistor R72)

The AC disconnect detection function requires that the EV kit's DGND be connected directly to GND. If the ACdisconnect detection function is not required, resistor R72, which shorts DGND to GND, can be removed. Removing resistor R72 allows DGND to be referenced to a voltage potential anywhere from VEE to (VEE + 60V). Additionally, when resistor R72 is removed, the appropriate AC detection jumper tables must be set and the OSC\_IN pin on the MAX5952A must be floating by removing jumper JU7. See Tables 4, 7, and 8 for the appropriate jumper settings to bypass the AC detection function. Refer to the AC Disconnect Monitoring section in the MAX5952 IC data sheet for additional information. If the AC-disconnect detection function is required again, install a 0 Ω ±5%, 1206 case size surface-mount resistor at the R72 pads and set the appropriate jumpers.

## Detailed Description of Software

A mouse or the keyboard's tab key is used to navigate various items on the main window. The MAX5952A EV kit  software  features  window  tabs  to  select  a Configuration , Events  and  Status ,  or BitMap Controls window. Most of the main window's available functions and a few more can be evaluated by using the pulldown menu. The left status bar at the bottom of the main window provides the CMAXQUSB interface board status. The center status bar provides the current EV kit and macro engine status.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

Figure 1. In the MAX5952A evaluation software's events and status window for reading system and port events/status information, the current reading is not valid when the port is not enabled.

<!-- image -->

## Software Startup

Upon starting the program, the MAX5952A EV kit software starts in the program's auto read state. The software automatically detects the Slave Address and begins reading the contents of each register from the MAX5952A, updating each tab window. The software starts up with the Events and Status window selected.

<!-- image -->

## Events and Status

The Events and Status window provides the EV kit's system and port events/status information obtained from the MAX5952A IC registers. The System Events and Status section provides system-level information on the VEE and VDD power supplies, oscillator input, present operating mode, and address in hexadecimal and deci-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 2. MAX5952A Evaluation Software's Configuration Window for Configuring the EV Kit as a 4-Port PSE

<!-- image -->

mal formats. The Port Events section provides each PSE port event or change. The Port Status section provides each PSE port operating status during detection, classification, and current usage by the connected PD.

## Configuration

The Configuration window provides a high-level method of configuring the MAX5952A EV kit as a 4-port PSE. System and port level configurations can be made in  this  window.  Additionally,  the  MAX5952A watchdog timer, MAX5952A IC, or a specific port can be immediately reset using the respective Reset button. All other configuration changes on this window take place after the Update MAX5952A button has been selected. To view a specific port event or status after updating, select the Events and Status tab. Each port's operating mode, disconnect mode, detection/classification,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 3. MAX5952A Evaluation Software's BitMap Controls Window for Controlling the Software State, Configuring the MAX5952A Registers, Using the Macro Engine, and Displaying All the Registers in Binary and Hexadecimal Format

<!-- image -->

and various power settings can be set independently. After  configuring  the  port  or  making  system  changes, select the Update MAX5952A button to write these changes to the MAX5952A IC, thus updating the EV kit's  respective  PSE  port.  Certain  configurations  may not be enabled, depending upon the MAX5952A current state or status.

<!-- image -->

## BitMap Controls

The BitMap Controls window provides a bit-level method of configuring the EV kit as a 4-port PSE. The MAX5952A register's contents are placed on the appropriate line of the Registers Read tables in binary and hexadecimal format. If data changes between the next register read, the updated register hexadecimal data is displayed in red and blinks four times. The blink rate

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

can be changed in the Commands | Red Hex Data Blink Rate menu. The left status bar at the bottom of the main window provides the CMAXQUSB interface board status. The center status bar provides the current EV kit and macro engine status.

## Autoread/Run Macro State Controls

When the Auto Read checkbox is checked, the program continuously updates the main window registers and is operating in the autoread state. In the autoread state, data can be written to the MAX5952A by entering or selecting the desired data in the Register Address and Hexadecimal Data or Binary Data combo boxes. Selecting the Write Byte button writes the combo box data to the MAX5952A. To perform an immediate register read, enter or choose the desired Register Address and choose the Read Byte button. Hexadecimal or binary data can be entered in to the Hexadecimal Data or Binary Data combo boxes and then the alternate combo box displays the corresponding number in the respective number base.

If  the Auto Read checkbox is unchecked, the program's main window displays register data from the last read. To obtain current data, a Read Byte must be performed after selecting the appropriate register address from the Register Address combo box. Autoread state does not read the clear-on-read (COR) registers.

A macro can be run after loading the file from the File | Open Macro menu. The opened macro is displayed in the upper half of the Macro edit field and has an .smb file extension. Selecting the Run button runs the macro to completion and the output is displayed in the Macro Script Output edit field. Each edit box can be sized relative to the other half using the splitter bar above the Script Output text.  Selecting the Single Step button instead of the Run button causes the macro to execute a single line with each activation of the Single Step button. The Reset button is used to reset the macro script engine and clear the Macro Script Output edit field.  A  macro can be run regardless of the Auto Read checkbox status.  A  macro can be run immediately after opening by using the File | Open | Run Macro menu, selecting the desired macro to run, and clicking on the Open button. Selecting the Cancel button exits this feature.

The Locate Slave button is used to search for a MAX5952A located on the I 2 C-compliant 2-wire serial interface  whose address has been changed while the software was running. The valid MAX5952A slave address range is 0x40 through 0x5F. The MAX5952A

does respond to global address 0x60, although the EV kit hardware cannot be set to this specific address.

## Record Macro State Controls

When the Record checkbox is checked, the program automatically enters the record macro state and disables certain buttons and menus. Choosing the Commands | Clear Script Input menu clears any script presently in the Macro script input edit field. Comment lines in a macro script begin with a # / ; ' * character. A line of script is entered by choosing the appropriate Slave Address , Register Address ,  and entering the desired Hexadecimal Data or Binary Data in the combo boxes. Then selecting the Write Byte or Read Byte button enters the script into the Macro input edit field.  For  time  delays in a macro, choose the desired delay time from the combo box on the right side of the Delay button and then select the Delay button. The macro must be saved before exiting the record macro state, using the File  |  Save  Macro menu. The macro file must have an .smb file extension name.

To edit a previously saved macro, open the macro using the File | Open Macro menu and make the desired edits. The modified file must be saved prior to exiting the record macro state. Uncheck the Record checkbox to exit the record macro state. Additionally, a macro can be created or edited using a plain text editor in text mode. The file must be saved with an .smb extension.

## General-Purpose 2-Wire Interface Utility

There are two methods for communicating with the MAX5952A: through the main window display or through the general-purpose 2-wire interface utility using the View | Interface menu. The utility configures the I 2 C-compliant 2-wire interface parameters such as start  and  stop  bits,  acknowledgments, and clock timing.  The 2-wire interface screen allows you to send general-purpose, I 2 C-compliant, 2-wire commands using the SMBus-WriteByte/ReadByte and WriteWord/ReadWord commands. For more information  on  the  differences between the I 2 C-compliant 2-wire interface and an SMBus™ interface, refer to the Maxim Application Note Comparing the I 2 C Bus to the SMBus at www.maxim-ic.com. When using the 2-wire utility, the main window display no longer keeps track of changes sent to hardware. The EV kit can be reinitialized to the startup screen settings by resetting the MAX5952A using reset pushbutton S5.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

The Hunt for active listeners button scans the entire 2-wire address space, reporting each address that is acknowledged. The SMBusWriteByte transmits the device address, command, and 1 byte of data. The SMBusReadByte transmits the device address, a command, and then retransmits the device address and reads 1 byte of data. The SMBusWriteWord and SMBusReadWord operate the same, except 2 bytes of data are used.

## General Troubleshooting

Problem: Software reports it cannot find the board.

- Is the CMAXQUSB interface board power LED lit?
- Is the USB communications cable connected?
- Has Windows plug-and-play detected the board? Bring up Control Panel | System | Device Manager

<!-- image -->

Figure 4. 2-Wire Interface Window Provides Direct Low-Level Access to the MAX5952A

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

and look at what device nodes are indicated for USB. If there is an unknown device node attached to the  USB, delete it-this forces plug-and-play to try again.

## Problem: Unable to find device-under-test (DUT).

- Are  the  SCL  and  SDA  signals  pulled  up  to OPTO\_VCC (CMAXQUSB VDD)? The CMAXQUSB dip switch SW1 enables the on-board resistors on the CMAXQUSB interface board. There must be pullup resistors somewhere on the bus.
- If  using  jumper wires to connect, are the SCL and SDA signals swapped? Is the ground return missing?

## MAX5952A Evaluation Kit/Evaluation System

## High-Power PSE for Power-Over-Ethernet

Figure 5. MAX5952A EV Kit Schematic, Controller Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX5952A EV Kit Schematic, Optical Coupler Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 7. MAX5952A EV Kit Schematic, Network Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. MAX5952A EV Kit Schematic, 100Hz Oscillator Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 9. MAX5952A EV Kit Schematic, +3.3V Power-Supply Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

<!-- image -->

Figure 10. MAX5952A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 11. MAX5952A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

<!-- image -->

Figure 12. MAX5952A EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 13. MAX5952A EV Kit PCB Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5952A Evaluation Kit/Evaluation System

<!-- image -->

Figure 14. MAX5952A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5952A Evaluation Kit/Evaluation System

Figure 15. MAX5952A EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

28