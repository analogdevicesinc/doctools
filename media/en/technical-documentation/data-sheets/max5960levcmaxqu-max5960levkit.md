<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

## General Description

The MAX5960L evaluation kit (EV kit) is a fully assembled and tested surface-mount quad hot-plug controller printed-circuit board (PCB) with four PCI Express ® hotplug slots. The circuit uses a MAX5960L IC in an 80-pin TQFP package. The EV kit provides independent power control for the 12V, 3.3V, and 3.3V auxiliary outputs at four  PCI  Express x16 connectors. The EV kit demonstrates  the  MAX5960L IC's inrush current control, output overcurrent/short-circuit protection, and input undervoltage monitoring features.

The MAX5960L IC controls two separate external n-channel MOSFETs for the 12V and 3.3V outputs of each channel, respectively. Additionally, the MAX5960L has internal MOSFETs that control the 3.3V auxiliary outputs of channels A, B, C, and D. Switches are provided to independently enable/disable each channels' main (12V, 3.3V) and auxiliary supply (3.3V).

The MAX5960L EV kit can be reconfigured for evaluating a x1, x4, or x8 PCI Express quad hot-plug design. Alternatively,  the  EV  kit  can  also  be  used  to  demonstrate  the  MAX5960L hot-plug features without using the PCI Express x16 connectors.

The EV kit includes three MAX7313 I/O expanders that enable communication through an SMBus™ interface for the MAX5960L signals and some of the PCI Express channel signals. A CMAXQUSB interface board can be used to enable PC communication through the SMBus interface. Simple Windows® 98SE/2000/XP-compatible software is provided to access each MAX7313 I/O expander register at the bit level. The MAX5960L EV kit can also be used in local control, without any software.

Order the MAX5960LEVCMAXQU for a complete PCbased  evaluation  of  the  MAX5960L.  Order  the MAX5960LEVKIT if you already have a CMAXQUSB interface board or do not require PC-based evaluation of the MAX5960L.

PCI Express is a registered trademark of PCI-SIG Corp. SMBus is a trademark of Intel Corp.

Windows is a registered trademark of Microsoft Corp.

## Features

- ♦ Demonstrates PCI Express x16 Quad Hot-Plug Design
- ♦ Independent Output Controls for Each Channel 12V and Up to 5.5A (Adjustable) 3.3V and Up to 3.3A (Adjustable)
- 3.3VAUX and Up to 0.550A
- ♦ Evaluates Hot-Plugging PCI Express x1, x4, x8, or x16 Line Cards
- ♦ Demonstrates Input Inrush Current Control
- ♦ Demonstrates Output Overcurrent/Short-Circuit Protection
- ♦ Undervoltage Lockout Protection for 12V, 3.3V, and 3.3V Auxiliary Supplies
- ♦ Configurable Power-On Reset (POR)
- ♦ Independent On/Off Controls for Each Channel's 12V/3.3V Main and 3.3V Aux Power
- ♦ Latched Output (MAX5960L) after Fault Conditions; also Evaluates MAX5959A, MAX5960A Autoretry
- ♦ Input/Output Interface Using MAX7313 I/O Expanders (SMBus Interface) or Local Control
- ♦ Can Be Controlled Locally Without Software
- ♦ Windows 98SE/2000/XP-Compatible Software
- ♦ Fully Assembled and Tested

## Ordering Information

| TYPE      | PART               |
|-----------|--------------------|
| EV Kit    | MAX5960LEVKIT +    |
| EV System | MAX5960LEVCMAXQU + |

Note: The MAX5960L EV kit software can be downloaded from the Maxim website at www.maxim-ic.com/evkitsoftware. However, the CMAXQUSB interface board is required to interface the EV kit to a computer when using the software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

## MAX5960L EV System

| PART           |   QTY | DESCRIPTION             |
|----------------|-------|-------------------------|
| MAX5960LEVKIT+ |     1 | MAX5960L evaluation kit |
| CMAXQUSB+      |     1 | SMBus interface board   |

## MAX5960L EV Kit

| DESIGNATION                                         |   QTY | DESCRIPTION                                                                       |
|-----------------------------------------------------|-------|-----------------------------------------------------------------------------------|
| C1, C3, C40, C41, C42                               |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K               |
| C2, C4, C11, C14, C17, C20, C24, C25, C28, C30      |     0 | Not installed, ceramic capacitors (0805)                                          |
| C5, C10, C15, C16, C21, C22, C23, C26, C27, C31-C34 |    13 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K                 |
| C12, C18, C29                                       |     3 | 10µF ±20%, 25V X7R ceramic capacitors (1812) TDK 4532X7R1E106M                    |
| C13                                                 |     1 | 1500µF, 16V electrolytic capacitor (12.5mm x 13.5mm case) Panasonic EEVFK1C152Q   |
| C19                                                 |     1 | 3300µF, 6.3V, low-Z electrolytic capacitor (12.5mm x 13.5mm case) SANYO 6CE3300KX |
| C35                                                 |     1 | 100µF, 6.3V, low-Z electrolytic capacitor (6.3mm x 6.0mm case) SANYO 6CE100KX     |
| D1                                                  |     1 | 1A, 40V Schottky diode (SOD-123) Diodes Inc. 1N5819HW-F                           |
| D2-D14, D17, D18, D21                               |    16 | Green surface-mount LEDs (1206)                                                   |
| D15, D16, D19, D20                                  |     4 | Yellow surface-mount LEDs (1206)                                                  |
| J1-J4                                               |     4 | PCI Express x16 connectors Molex 87715-9305                                       |
| J5-J8                                               |     4 | 8-pin headers                                                                     |
| J9                                                  |     1 | 2 x 10 right-angle female receptacle                                              |

## Component Lists

## MAX5960L EV Kit (continued)

| DESIGNATION                                                                    |   QTY | DESCRIPTION                                                                                    |
|--------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------|
| JU1-JU4, JU9, JU10, JU15, JU16                                                 |     8 | 2-pin headers                                                                                  |
| JU5-JU8, JU11-JU14                                                             |     8 | 3-pin headers                                                                                  |
| N1-N8                                                                          |     8 | 20V, 13.4A n-channel MOSFETs (8-pin SO) Vishay Si7448DP-T1-E3                                  |
| R1-R6, R11-R16, R73, R76, R82, R83, R84, R90, R93, R99-R104                    |    25 | 10k Ω ±5% resistors (0603)                                                                     |
| R7-R10, R17, R18                                                               |     0 | Not installed, resistors (0603)                                                                |
| R30, R36, R45, R50                                                             |     4 | 1k Ω ±5% resistors (1206)                                                                      |
| R31, R35, R38, R42, R46, R49, R52, R55                                         |     0 | Not installed, resistors (0805)                                                                |
| R32, R34, R47, R48                                                             |     4 | 0.008 Ω ±1%, 0.5W sense resistors (2010) Vishay WSL20108L000FEA or IRC LRC-LRF2010LF-01-R008-G |
| R33                                                                            |     1 | 750 Ω ±1% resistor (1210)                                                                      |
| R37, R41, R43, R44, R51, R56, R57, R58, R74, R75, R80, R81, R91, R92, R97, R98 |    16 | 150 Ω ±5% resistors (0603)                                                                     |
| R39, R40, R53, R54                                                             |     4 | 0.005 Ω ±1%, 0.5W sense resistors (2010) Vishay WSL20105L000FEA                                |
| R70, R71, R78, R79, R88, R89, R95, R96                                         |     8 | 51k Ω ±5% resistors (0603)                                                                     |
| R72, R77, R94, R111                                                            |     4 | 3.3k Ω ±5% resistors (0603)                                                                    |
| SW1-SW4                                                                        |     4 | SPST momentary-contact switches                                                                |
| SW5-SW12                                                                       |     8 | SPDT slide switches                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                                                                                |   QTY | DESCRIPTION                    |
|------------------------------------------------------------------------------------------------------------|-------|--------------------------------|
| TP3,TP5,TP7,TP8, TP20,TP22,TP25, TP26,TP28,TP30, TP32,TP33,TP34, TP37,TP38,TP40, TP43,TP44,TP45, OUT1-OUT4 |    23 | PC test points, red            |
| TP11-TP18, TP23, TP29, TP41, TP46, TP47, TP48, TP53, TP54                                                  |    16 | PC test points, black          |
| TP21, TP24, TP27, TP31, TP35, TP36, TP39, TP42, TP50, TP51                                                 |    10 | PC test points, miniature, red |

Required equipment:

- One each of the following DC power supplies: 12V, 25A 3.3V, 20A
- Three voltmeters

## MAX5960L Evaluation Kit/ Evaluation System

## MAX5960L EV Kit (continued)

| DESIGNATION                |   QTY | DESCRIPTION                                                                             |
|----------------------------|-------|-----------------------------------------------------------------------------------------|
| U1                         |     1 | Quad PCI Express hot-swap controller (80-pin TQFP 12mm x 12mm x 1mm) Maxim MAX5960LECS+ |
| U2, U3, U4                 |     3 | Maxim 16-port I/O expanders (24-pin thin QFN, 4mm x 4mm) MAX7313ATG+                    |
| VIN1, VIN2, VIN3, GND, GND |     5 | Uninsulated banana jacks                                                                |
| -                          |    16 | Shunts (JU1-JU16)                                                                       |
| -                          |    10 | Rubber bumpers                                                                          |
| -                          |     1 | PCB: MAX5960L Evaluation Kit+                                                           |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Diodes Inc.             | 805-446-4800 | www.diodes.com        |
| IRC                     | 361-992-7900 | www.irctt.com         |
| Murata                  | 770-436-1300 | www.murata.com        |
| Panasonic               | 714-373-7366 | www.panasonic.com     |
| SANYO Electronic Device | 619-661-6835 | www.sanyodevice.com   |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| Vishay                  | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5959A/MAX5959L/MAX5960A/MAX5960L when contacting these component suppliers.

## MAX5960L EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX5960L.EXE            | Application program                        |
| HELPFILE.HTM            | MAX5960L EV kit help file                  |
| FTD2XX.INF              | USB device driver file                     |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |
| UNINST.INI              | Uninstalls the EV kit software             |

## Quick Start (Hardware Only)

The 3.3V power supply can be used to power the main 3.3V and 3.3VAUX inputs.

The MAX5960L EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

Note the banana leads connecting the 12V and 3.3V power supply to the EV kit must be short (&lt; 12in long) and rated for at least 25A.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

## MAX5960L Hardware Only Configuration

- 1) Verify  that  shunts  are  installed  on  jumpers  JU1, JU2, JU3, and JU4 ( PRES-DET\_ ).
- 2) Verify that shunts are installed on pins 1 and 2 of jumpers JU5, JU6, JU7, JU8, JU11, JU12, JU13, and JU14 (local switch control).
- 3) Verify that a shunt is not installed on jumpers JU9, JU10, JU15, and JU16 (MRL\_).
- 4) Utilizing  short  25A-rated banana leads (&lt; 12in long) connect the 12V DC power supply to the VIN1 banana jack. Utilizing short 25A-rated banana leads (&lt; 12in long) connect the supply ground to the GND banana jack.
- 5) Utilizing  short  25A-rated banana leads (&lt; 12in long) connect the 3.3V DC power supply to the VIN2 banana jack. Utilizing short 25A-rated banana leads (&lt; 12in long) connect the supply ground to the GND banana jack.
- 6) Connect the 3.3V DC power supply to the VIN3 banana jack with a short banana lead.
- 7) Connect a voltmeter to the 12VA pad and GND. Connect a voltmeter to the 3.3VA pad and GND. Connect a voltmeter to the 3.3VAUXA pad and GND.
- 8) Set switches SW5, SW7, SW9, SW11 (ON\_), and SW6, SW8, SW10, SW12 (AUXON\_) to the OFF position.
- 9) Turn on both power supplies in any sequence.
- 10) Set switches SW5 (ONA) and SW6 (AUXONA) to the ON position.
- 11) Verify that the voltage at channel A pad is as shown below:

12VA = 12V

3.3VA = 3.3V

3.3VAUXA = 3.3V

- 12) Sliding switches SW5 and SW6 to the OFF position will disable the channel A main or auxiliary outputs on the MAX5960L EV kit.
- 13)  For  evaluating channels B, C, and D, use analogous actions on steps 10 through 12 above for the respective channel switch setting and output voltage reading. See the Jumper and Switch Selection section for more information on configuring the respective channel.
- 14)  Test points are provided to observe the MOSFET's gate voltage respectively with an oscilloscope.

## Software and Hardware Quick Start

The MAX5960L EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn  on  the  power supplies until all connections are completed.

## Required Equipment

- One each of the following DC power supplies: 12V, 25A
- 3.3V, 20A (used to power the main 3.3V and 3.3VAUX inputs)
- Maxim MAX5960L EV kit and CMAXQUSB interface board (USB cable included)
- Windows 98SE/2000/XP computer with a spare USB port
- Three voltmeters for confirming output voltages

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## MAX5960L Software and Hardware Configuration

- 1) Visit www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 5960LRxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Verify that no shunts are installed on jumpers JU1, JU2, JU3, and JU4 ( PRES-DET\_ ).
- 4) Verify that shunts are installed on pins 2 and 3 of jumpers JU5, JU6, JU7, JU8, JU11, JU12, JU13, and JU14 (computer control).
- 5) Verify that a shunt is not installed on jumpers JU9, JU10, JU15, and JU16 (MRL\_).
- 6) Utilizing  short  25A-rated banana leads (&lt; 12in long) connect the 12V DC power supply to the VIN1 banana jack. Utilizing short 25A-rated banana leads (&lt; 12in long) connect the supply ground to the GND banana jack.
- 7) Utilizing  short  25A-rated banana leads (&lt; 12in long) connect the 3.3V DC power supply to the VIN2 banana jack. Utilizing short 25A-rated banana leads (&lt; 12in long) connect the supply ground to the GND banana jack.
- 8) Connect the 3.3V DC power supply to the VIN3 banana jack with a short banana lead. Do not turn on the power supplies.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

- 9) Connect a voltmeter to the 12VA pad and GND. Connect a voltmeter to the 3.3VA pad and GND. Connect a voltmeter to the 3.3VAUXA pad and GND.
- 10) Connect the CMAXQUSB interface board to the MAX5960L EV kit's J9 connector.
- 11) Set both CMAXQUSB interface board SW1 switches to enable. These provide pullup resistors for the SDA and SCL 2-wire bus signals.
- 12) Turn on the 12V and 3.3V power supplies for the EV kit. The CMAXQUSB interface board is powered through the computer's USB port.
- 13) Connect the USB cable from the PC to the CMAXQUSB board. A Building Driver Database window should pop up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If you do not see a window that is similar to the one described above after 30s, try  removing the USB cable from the CMAXQUSB interface board and reconnect it. Administrator privileges are required to install the USB device driver on Windows 2000 and XP. Refer to the document TROUBLESHOOTING\_USB.PDF included with the software if you have any problems during this step.
- 14) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify the location of the device driver to be C:\Program Files\MAX5960L (default  installation directory) using the Browse button.
- 15) Start the MAX5960L program by opening its icon in the Start | Programs menu.
- 16) The software will detect the CMAXQUSB interface board, the SMBus address of ICs U2, U3, U4, and will also be updated on the status screen. The software is then ready for changes in the command section.
- 17) Install a shunt on jumper JU3 ( PRES-DETA )  or insert a PCI Express card into channel A PCI Express connector J1.
- 18) To evaluate channels B, C, and D, use analogous actions on step 17 above for the respective channel.  See  the Jumper and Switch Selection section for more information on configuring each channel.

See the Detailed Description of Software section for more information on the software GUI features. See the MAX7313  Input/Output  Expanders  and  SMBus Interface section for configuring the input/output expander, using the CMAXQUSB interface board.

<!-- image -->

## Detailed Description

The MAX5960L EV kit demonstrates a PCI Express x16 quad hot-plug circuit design. Four PCI Express x16 channels (A, B, C, and D) are provided to evaluate PCI Express x16 line cards. The EV kit uses a latching MAX5960L hot-plug controller in an 80-pin TQFP package to control all four channels' output power and monitor for faults.

The MAX5960L IC controls each channel's output power independently. External n-channel MOSFETs are used to control power to the 12V and 3.3V outputs of each channel. Current-sensing resistors R32, R47, R34, and R48 are used for the 12V, and resistors R39, R53, R40, and R54 for the 3.3V outputs of the respective channel. Internal MOSFETs on the MAX5960L control the 3.3V auxiliary outputs of each channel.

If  an  overcurrent  fault  persists  on  either  channel,  the MAX5960L will shut down the respective channel. The fault is reported at the respective channels' open-drain power-good pin ( PWRGD\_ ) and fault pin ( FAULT\_ ). The MAX5960L power-on reset (POR) is configured for 160ms; however, the POR can be reconfigured after installing resistor R18.

Slide switches are provided to enable/disable each channel's main output and auxiliary output independently when the SMBus control is not used. Jumpers JU1-JU4 can be used to provide a presence-detect function for the respective channel if PCI Express cards are  not  used.  Momentary  pushbutton  switches SW1-SW4 are provided to demonstrate the MAX5960L debounced logic gate outputs.

The MAX5960L EV kit features green LEDs connected to each channel's 12V, 3.3V, and 3.3V auxiliary output that  indicate  if  the  respective  output  is  currently  powered. Red test points for the 12V and 3.3V outputs, various PCI Express signals, and other circuit signals such as the gate drive of each MOSFET have been provided for  probing  on  the  EV  kit  board.  All  the  EV  kit's  black test points are GND points.

The EV kit also features PCB pads for installing external resistors and capacitors near each MOSFET gate terminal to increase the MOSFET's gate-turn-on time. Surface-mount 0805 case-size components can be installed at these locations. See Figure 4 for each of the MOSFET's gate R and C designators.

The EV kit can be reconfigured for evaluating a x1, x4, or x8 PCI Express quad hot-plug design by replacing the appropriate current-sense resistor, R32, R34, R47, or R48. Consult the appropriate PCI Express specification in  the  MAX5960L IC data sheet for selecting other designs. PCB pads are provided to demonstrate the MAX5960L hot-plug features without using the PCI Express x16 connectors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

For evaluating external DC loads, the cables connecting  the  12V  and  3.3V  outputs  to  the  external  DC  load must be rated for at least 10A and be shorter than 12in. Additionally,  all  current-sense  resistors  are  configured for  the  maximum allowable output current on the 12V and 3.3V outputs. These resistors should be reconfigured only for lower output currents.

The MAX5960L EV kit features three MAX7313 16-port I/O expanders (U2, U3, U4) and PCB pads for interfacing to a user's SMBus system. Resistors configure each MAX7313 to a fixed SMBus serial address. The address of U2 is 0x40, U3 is 0x42, and U4 is 0x44. The MAX7313 can also be used to enable/disable each channel's main output and auxiliary output independently. See the MAX7313 Input/Output Expanders and SMBus Interface section for more details.

## Jumper and Switch Selection

The jumper and switch selections in the following tables display the functions provided by the MAX5960L EV kit.

## Presence-Detect Channels A, B, C, and D

The MAX5960L EV kit features four jumpers that can simulate a PCI Express x16 card being plugged into a connector. Jumpers JU1, JU2, JU3, and/or JU4 are used to provide a presence-detect function for the respective channel. An external load (resistive and capacitive) must be connected to the channel's output PCB pads simulating a real PCI Express card. Table 1 lists the various jumper options.

## Channel A Enable/Disable Switches

The  MAX5960L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel A outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 2 lists the various switch options.

## Channel B Enable/Disable Switches

The  MAX5960L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel B outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 3 lists the various switch options.

Table 1. Channel A, B, C, and D Presence-Detection Functions

| JUMPER   | SHUNT     | MAX5960L PIN CONNECTION   | EV KIT OPERATION SIMULATED             |
|----------|-----------|---------------------------|----------------------------------------|
| JU3      | Installed | PRES-DETA pin pulled low  | PCI Express card inserted in channel A |
| JU3      | None*     | PRES-DETA pin pulled high | No PCI Express card in channel A       |
| JU4      | Installed | PRES-DETB pin pulled Low  | PCI Express card inserted in channel B |
| JU4      | None*     | PRES-DETB pin pulled high | No PCI Express card in channel B       |
| JU2      | Installed | PRES-DETC pin pulled low  | PCI Express card inserted in channel C |
| JU2      | None*     | PRES-DETC pin pulled high | No PCI Express card in channel C       |
| JU1      | Installed | PRES-DETD pin pulled low  | PCI Express card inserted in channel D |
| JU1      | None*     | PRES-DETD pin pulled high | No PCI Express card in channel D       |

Table 2. Channel A Switch Functions

| SWITCH   | SWITCH STATE   | MAX5960L PIN CONNECTION   | MAX5960L OPERATION                      |
|----------|----------------|---------------------------|-----------------------------------------|
| SW5      | ON             | ONA pin pulled high       | Enable channel A main outputs           |
| SW5      | OFF            | ONA pin pulled low        | Disable channel A main outputs          |
| SW6      | ON             | AUXONA pin pulled high    | Enable channel A 3.3V auxiliary output  |
| SW6      | OFF            | AUXONA pin pulled low     | Disable channel A 3.3V auxiliary output |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

## Channel C Enable/Disable Switches

The  MAX5960L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel C outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 4 lists the various switch options.

## Channel D Enable/Disable Switches

The  MAX5960L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel D outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 5 lists the various switch options.

## Table 3. Channel B Switch Functions

| SWITCH   | SWITCH STATE   | MAX5960L PIN CONNECTION   | MAX5960L OPERATION                      |
|----------|----------------|---------------------------|-----------------------------------------|
| SW7      | ON             | ONB pin pulled high       | Enable channel B main outputs           |
| SW7      | OFF            | ONB pin pulled low        | Disable channel B main outputs          |
| SW8      | ON             | AUXONB pin pulled high    | Enable channel B 3.3V auxiliary output  |
| SW8      | OFF            | AUXONB pin pulled low     | Disable channel B 3.3V auxiliary output |

## Table 4. Channel C Switch Functions

| SWITCH   | SWITCH STATE   | MAX5960L PIN CONNECTION   | MAX5960L OPERATION                      |
|----------|----------------|---------------------------|-----------------------------------------|
| SW9      | ON             | ONC pin pulled high       | Enable channel C main outputs           |
| SW9      | OFF            | ONC pin pulled low        | Disable channel C main outputs          |
| SW10     | ON             | AUXONC pin pulled high    | Enable channel C 3.3V auxiliary output  |
| SW10     | OFF            | AUXONC pin pulled low     | Disable channel C 3.3V auxiliary output |

## Table 5. Channel D Switch Functions

| SWITCH   | SWITCH STATE   | MAX5960L PIN CONNECTION   | MAX5960L OPERATION                      |
|----------|----------------|---------------------------|-----------------------------------------|
| SW11     | ON             | OND pin pulled high       | Enable channel D main outputs           |
| SW11     | OFF            | OND pin pulled low        | Disable channel D main outputs          |
| SW12     | ON             | AUXOND pin pulled high    | Enable channel D 3.3V auxiliary output  |
| SW12     | OFF            | AUXOND pin pulled low     | Disable channel D 3.3V auxiliary output |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Control Methods, Other Configurations, and I/O Expander

## Fault Resetting

The MAX5960L EV kit features slide switches to reset a latched fault at each channel. The switch resets the respective EV kit channel and unlatches the fault when toggled from ON to OFF. See Tables 2 through 5 for resetting  the  respective  channel.  Refer  to  the MAX5960L IC data sheet for additional functions of the MAX5960L ON\_ pins.

## Fault Timeout and POR Periods

The MAX5960L fault timeout period is configured for 10ms and can be reconfigured to a new timeout period by installing surface-mount resistor R17. The MAX5960L POR timeout period is configured for 160ms; however, a new POR timeout period can be reconfigured by installing surface-mount resistor R18. Install a 0 Ω resistor at R18 to bypass the POR time period delay. Refer to MAX5960L IC data sheet Power-Good (PWRGD\_) section for selecting the values of resistors R17 or R18.

## MAX5960L Evaluation Kit/ Evaluation System

## Forced ON Inputs

Either  channel PCI Express slot can be forced to turn on regardless of the MAX5960L logic status inputs. To force channel A on, install surface-mount resistor R9 or install  the  respective channel's resistor. Typical values are less than 1k Ω .  Additionally,  the  MAX5960L EV kit software can be used to force a channel on without installing the resistor. See the Software Startup section for more information.

## Current Limiting

The MAX5960L EV kit is configured for PCI Express x16 current limits.  The  EV  kit  can  also  evaluate  other  current-limit configurations for the 12V and 3.3V main outputs of each channel. Resistors R32, R47, R34, and R48 set the 12V current-limit for channels A, B, C, and D, respectively. Resistors R39, R53, R40, and R54 set the 3.3V current limit for channels A, B, C, and D, respectively. These resistors should be reconfigured only for lower output currents. Refer to the MAX5960L IC data sheet for information on selecting other currentlimit resistors.

The 3.3V auxiliary current limit is fixed at 700mA (typ) and is not reconfigurable. However, a MAX5959L can be installed to evaluate an auxiliary current limit of 470mA (typ) with the EV kit.

## Evaluating Other Quad PCI Express Hot-Plug Controllers

The MAX5960L EV kit can be used to evaluate the MAX5959A, MAX5959L, or MAX5960A. Replace U1 with the desired Maxim IC that can be ordered through the factory.

## MAX7313 Input/Output Expanders and SMBus Interface

The MAX5960L EV kit features three MAX7313 I/O expanders (U2, U3, U4) and PCB pads for connecting to an SMBus system (SDA and SCL signals). The I/O expander interfaces with the PRES-DET\_, FAULT\_, ON\_, OUT\_, PWRGD\_, and FON\_ signals of the MAX5960L for each channel. Headers J5-J8 (8 pins) are provided to enable easy access to the respective channel's signals through a ribbon cable or scope probe. Green and yellow LEDs (D14-D21) are also provided for user applications such as status indication. Jumpers JU9, JU10, JU15, and JU16 are provided to mimic a PCI Express mechanical retention locking (MRL) signal for the respective channel. Resistors configure each MAX7313 to a fixed SMBus serial address, where U2 is 0x40, U3 is 0x42, and U4 is 0x44.

If the MAX7313 I/O expander is used to control the ON\_ signals and read back various other MAX5960L signals of each channel, jumpers JU5-JU14 must be properly configured or the I/O expanders may be destroyed when switching logic states. See Table 6 for configuring jumpers JU5-JU14. Pads are provided on the EV kit's  PCB  for  interfacing  with  a  user's  system  SMBus VDD, SDA, SCL, and GND signals.

If  a  user's  SMBus system is not available, a Windowsbased computer can be interfaced with the EV kit by connecting the CMAXQUSB interface board to connector J9. The interface board enables the computer to interface with the EV kit's SMBus signals. The SMBus interface board and software provides the user with an option of using a Windows-based GUI interface or 'bitbanging'  signals  to  and  from  the  MAX7313  I/O expander's various registers to control the MAX5960L IC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

## Table 6. MAX5960L Channels A, B, C, and D ON\_ Signals Configuration

| JUMPER   | SHUNT LOCATION   | MAX5960L PIN CONNECTION                     | EV KIT OPERATION          |
|----------|------------------|---------------------------------------------|---------------------------|
| JU5      | 1 and 2          | AUXONA controlled by SW6                    | Local switch control      |
| JU6      | 1 and 2          | ONA controlled by SW5                       | Local switch control      |
| JU7      | 1 and 2          | ONB controlled by SW7                       | Local switch control      |
| JU8      | 1 and 2          | AUXONB controlled by SW8                    | Local switch control      |
| JU11     | 1 and 2          | AUXONC controlled by SW9                    | Local switch control      |
| JU12     | 1 and 2          | ONC controlled by SW10                      | Local switch control      |
| JU13     | 1 and 2          | OND controlled by SW11                      | Local switch control      |
| JU14     | 1 and 2          | AUXOND controlled by SW12                   | Local switch control      |
| JU5      | 2 and 3          | AUXONA controlled by U2, MAX7313 with SMBus | SMBus or computer control |
| JU6      | 2 and 3          | ONA controlled by U2, MAX7313 with SMBus    | SMBus or computer control |
| JU7      | 2 and 3          | ONB controlled by U2, MAX7313 with SMBus    | SMBus or computer control |
| JU8      | 2 and 3          | AUXONB controlled by U2, MAX7313 with SMBus | SMBus or computer control |
| JU11     | 2 and 3          | AUXONC controlled by U3, MAX7313 with SMBus | SMBus or computer control |
| JU12     | 2 and 3          | ONC controlled by U3, MAX7313 with SMBus    | SMBus or computer control |
| JU13     | 2 and 3          | OND controlled by U3, MAX7313 with SMBus    | SMBus or computer control |
| JU14     | 2 and 3          | AUXOND controlled by U3, MAX7313 with SMBus | SMBus or computer control |

<!-- image -->

Figure 1. The MAX5960L Evaluation Software Main Window for Reading Current EV Kit Status and Sending Commands

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

## Detailed Description of Software

A mouse or the keyboard's Tab key is used to navigate various items on the Main Window. Most of the main window's available functions and a few more can be evaluated by using the pulldown menu. The software features a demo mode that is available using the View|Demo Mode pulldown menu.

## Software Startup

Upon starting the program, the MAX5960L EV kit software automatically detects U2, U3, and U4 addresses and configures their I/O. See Tables 7 and 8 for U2, U3, and U4 configuration by the software. The MAX5960L EV kit's various status signals are then updated by the program approximately every 500ms. Use the checkboxes to enable/disable various EV kit functions and then select the Execute Command button to send the commands to the respective I/O expander and/or U1. Deselecting a checkbox disables the command.

To force a respective channel ON, select the respective channel's latching FORCE ON button. To turn OFF a forced ON channel, select the button again. When a respective channel is forced ON, that particular channel's controls are disabled until force ON is turned off.

The software's Status area provides information on the various MAX5960L and PCI Express system signal's condition. Each MAX7313 I/O expander SMBus address is provided in hexadecimal and decimal format, respectively. The left bottom status bar of the main window provides the CMAXQUSB interface board communication status. The right bottom status bar provides the current program status and SMBus communication status with respect to the respective I/O expander.

The MAX5960L EV kit software configures the CMAXQUSB interface board's SMBus communication speed to 400kHz by default. The speed can be reduced to 100kHz if required, by selecting the pulldown menu's View|2-Wire Speed|100kHz selection. This may be required if slower SMBus or 2-wire devices are connected to the bus on the EV kit.

## General-Purpose 2-Wire Interface Utility

The general-purpose 2-wire interface utility can also be used to communicate with the MAX7313 and thus control  or  read  back  signals  from  the  MAX7313 and/or MAX5960L. Use the View|Interface pulldown menu to access the utility. The utility configures the SMBus interface parameters such as start and stop bits, acknowledgments, and clock timing. The 2-wire interface screen allows you to send general-purpose SMBus commands  using the SMBusWriteByte and SMBusReadByte .  The  interface  utility  only  accepts and outputs hexadecimal number format.

The Hunt for active listeners button scans the entire 2-wire address space, reporting each address that is acknowledged. The SMBusWriteByte transmits the device address, command, and 1 byte of data. The SMBusReadByte transmits the device address, a command, and then retransmits the device address and reads 1 byte of data.

Table 7. MAX7313 I/O Port Configuration/Function for U2 and U3

| MAX7313 PORT I/O   | PORT P7 (BIT D7)   | PORT P6 (BIT D6)   | PORT P5 (BIT D5)   | PORT P4 (BIT D4)   | PORT P3 (BIT D3)   | PORT P2 (BIT D2)   | PORT P1 (BIT D1)   | PORT P0 (BIT D0)   |
|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| PORT CONFIG        | OUTPUT             | OUTPUT             | INPUT              | INPUT              | OUTPUT             | OUTPUT             | INPUT              | INPUT              |
| EV KIT FUNCTION    | YELLOW LED         | GREEN LED          | PRES-DET           | FAULT              | AUXON              | ON                 | OUT                | MRL                |

Table 8. MAX7313 I/O Port Configuration/Function for U4

| MAX7313 PORT I/O   | PORT P7 (BIT D7)   | PORT P6 (BIT D6)   | PORT P5 (BIT D5)   | PORT P4 (BIT D4)   | PORT P3 (BIT D3)   | PORT P2 (BIT D2)   | PORT P1 (BIT D1)   | PORT P0 (BIT D0)   |
|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| PORT CONFIG        | OUTPUT             | OUTPUT             | OUTPUT             | OUTPUT             | INPUT              | INPUT              | INPUT              | INPUT              |
| EV KIT FUNCTION    | FOND               | FONC               | FONB               | FONA               | PWRGDD             | PWRGDC             | PWRGDB             | PWRGDA             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

For information on the differences between a 2-wire and an SMBus interface, read Application Note: Comparing the I 2 C Bus to the SMBus at www.maxim-ic.com.

## Problem: Unable to find U2, U3, or U4 (MAX7313).

## General Troubleshooting

## Problem: Software reports it cannot find the interface board.

- Is the interface board power LED lit?
- Is the USB communications cable connected?
- Has Windows plug-and-play detected the board? Bring  up Control  Panel-&gt;System-&gt;Device Manager ,  and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to the USB, delete it-this forces plugand-play to try again.
- Is power applied to the MAX5960L EV kit VIN2 and VIN3 banana jacks? This is required for powering U2, U3, and U4.
- Are the SCL and SDA signals pulled up to VDD? The CMAXQUSB interface board dip switch SW1 enables the on-board resistors on the interface board. There must be pullup resistors somewhere for the SMBus SCL and SDA signals.
- If  using  jumper wires to connect, are the SCL and SDA signals swapped? Is the ground return missing?

<!-- image -->

Figure 2. The 2-Wire Interface Window Provides Direct, Low-Level Access to the MAX5960L with the MAX7313 and SMBus 2-Wire Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 3. MAX5960L EV Kit Schematic, Quad PCI Express Controller

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 4. MAX5960L EV Kit Schematic, Quad PCI Express Hot Swap

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 5. MAX5960L EV Kit Schematic, SMBus I/O Control

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 6. MAX5960L EV Kit Schematic, PCI Express x16 Channels A and B

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 7. MAX5960L EV Kit Schematic, PCI Express x16 Channels C and D

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 8. MAX5960L EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 9. MAX5960L EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 10. MAX5960L EV Kit PCB Layout-Inner Layer, Ground Plane Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 11. MAX5960L EV Kit PCB Layout-Inner Layer, Power Plane Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 12. MAX5960L EV Kit PCB Layout-Inner Layer, Ground Plane Layer 4

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 13. MAX5960L EV Kit PCB Layout-Inner Layer, Signal Layer 5

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5960L Evaluation Kit/ Evaluation System

<!-- image -->

Figure 14. MAX5960L EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5960L Evaluation Kit/ Evaluation System

Figure 15. MAX5960L EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

24

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Janet Freed