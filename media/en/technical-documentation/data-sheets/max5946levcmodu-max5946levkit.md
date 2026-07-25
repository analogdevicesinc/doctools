<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5946L Evaluation Kit/Evaluation System

## General Description

The MAX5946L evaluation kit (EV kit) is a fully assembled and tested surface-mount, dual hot-plug controller circuit board for two PCI Express™ hot-plug slots. The circuit uses a MAX5946L IC in a 36-pin thin QFN package. The EV kit provides independent power control for the 12V, 3.3V, and 3.3V auxiliary outputs at two PCI Express-16 connectors. The EV kit demonstrates the MAX5946L IC's inrush current control, output overcurrent/short-circuit protection, and input undervoltage monitoring features.

The MAX5946L IC controls two separate external n-channel MOSFETs for the 12V and 3.3V outputs of each channel,  respectively. Additionally, the MAX5946L has two internal MOSFETs that control the 3.3V auxiliary outputs of channels A and B. Switches on the EV kit are provided to  independently enable/disable each channels' 12V/3.3V and 3.3V auxiliary supply.

The MAX5946L EV kit can be reconfigured to evaluate an x1, x4, or x8 PCI Express dual hot-plug design. Alternatively, the EV kit can also be used to demonstrate the MAX5946L hot-plug features without using the PCI Express-16 connectors.

The EV kit includes a MAX7313 I/O expander that enables communication through an SMBus™ interface for the MAX5946L signals and some of the PCI Express channel A and B signals. An SMBus interface board (CMODUSB) can be used to enable PC communication through  the  SMBus  interface.  Simple  Windows 98/2000/XP®-compatible software is provided to access the MAX7313 I/O expander registers at the bit level. The MAX5946L EV kit can be used in local control without any software.

Order the MAX5946LEVCMODU for a complete PCbased  evaluation  of  the  MAX5946L.  Order  the MAX5946LEVKIT if you already have a CMODUSB SMBus interface board or do not require PC-based evaluation of the MAX5946L.

## Ordering Information

| PART            | TEMP RANGE   | IC PACKAGE      | SMBus INTERFACE TYPE   |
|-----------------|--------------|-----------------|------------------------|
| MAX5946LEVKIT   | 0°C to +70°C | 36-Thin QFN-EP* | Not Included           |
| MAX5946LEVCMODU | 0°C to +70°C | 36-Thin QFN-EP* | CMODUSB                |

Note: The MAX5946L EV kit software is provided with the MAX5946LEVKIT. However, the CMODUSB interface board is required to interface the EV kit to the computer when using the software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Demonstrates PCI Express-16 Dual Hot-Plug Design
- ♦ Independent Output Controls for Each Channel
- ♦ 12V at Up to 5.5A (Adjustable)
- ♦ 3.3V at Up to 3A (Adjustable)
- ♦ 3.3VAux at Up to 0.375A
- ♦ Evaluates Hot-Plugging PCI Express x1, x4, x8, or x16 Cards
- ♦ Demonstrates Input Inrush-Current Control
- ♦ Demonstrates Output Overcurrent/Short-Circuit Protection
- ♦ Monitors Input Undervoltage for 12V, 3.3V, and 3.3VAux with Status Reports
- ♦ Configurable Power-On Reset (POR)
- ♦ Independent On/Off Controls for Channels A/B (12V/3.3V and 3.3VAux)
- ♦ Independent +3.3VAux Output with Separate On/Off Control
- ♦ Latched Output after Fault Conditions (12V, 3.3V, 3.3VAux)
- ♦ Input/Output Interface Using a MAX7313 I/O Expander (SMBus Interface) or Local Control
- ♦ Controlled Locally without Software
- ♦ Windows 98/2000/XP-Compatible Software
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

PCI Express is a trademark of PCI-SIG Corp. SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

## MAX5946LEVCMODU (MAX5946L EV System) Component List

| PART          |   QTY | DESCRIPTION             |
|---------------|-------|-------------------------|
| MAX5946LEVKIT |     1 | MAX5946L evaluation kit |
| CMODUSB       |     1 | SBMus interface board   |

## MAX5946L Evaluation Kit/Evaluation System

## Component List

| DESIGNATION                              |   QTY | DESCRIPTION                                                        |
|------------------------------------------|-------|--------------------------------------------------------------------|
| R3, R4                                   |     2 | 0.005 Ω ±1%, 0.5W sense resistors (2010) Vishay WSL2010R005F       |
| R5, R8, R19, R20, R21, R26, R27, R34-R37 |     0 | Not installed, resistors (0805)                                    |
| R6, R7, R9-R12, R15, R16, R22, R23, R24  |    11 | 10k Ω ±5% resistors (0603)                                         |
| R13, R14, R17, R18, R28, R29, R32, R33   |     8 | 150 Ω ±5% resistors (0603)                                         |
| R25                                      |     1 | 750 Ω ±1% resistor (1210)                                          |
| R30, R31                                 |     2 | 1k Ω ±5% resistors (1206)                                          |
| R38-R41                                  |     4 | 51k Ω ±5% resistors (0603)                                         |
| R42, R43                                 |     2 | 3.3k Ω ±5% resistors (0603)                                        |
| SW1, SW2                                 |     2 | SPST momentary-contact switches                                    |
| SW3-SW6                                  |     4 | SPDT slide switches                                                |
| TP1-TP4, TP6-TP10, TP21, TP22, TP27,TP28 |    13 | PC test points, red                                                |
| TP5, TP11, TP12, TP15-TP20, TP29, TP30   |    11 | PC test points, black                                              |
| TP13, TP14, TP23-TP26                    |     6 | PC test points, miniature, red                                     |
| U1                                       |     1 | MAX5946LETX (36-pin thin QFN, 6mm x 6mm)                           |
| U2                                       |     1 | 16-port I/O expander (24-pin thin QFN, 4mm x 4mm) Maxim MAX7313ATG |
| VIN1, VIN2, VIN3, GND,GND                |     5 | Uninsulated banana jacks                                           |
| None                                     |     8 | Shunts (JU1-JU8)                                                   |
| None                                     |     5 | Rubber bumpers                                                     |
| None                                     |     1 | MAX5946L evaluation kit software CD-ROM                            |

| DESIGNATION        |   QTY | DESCRIPTION                                                                                |
|--------------------|-------|--------------------------------------------------------------------------------------------|
| C1                 |     1 | 1500µF, 16V electrolytic capacitor (12.5mm x 13.5mm case) Panasonic EEVFK1C152Q            |
| C2                 |     1 | 3300µF, 6.3V low-Z electrolytic capacitor (12.5mm x 13.5mm case) Sanyo 6.3CV3300KX         |
| C3, C7, C8         |     3 | 10µF ±20%, 25V X7R ceramic capacitors (1812) TDK 4532X7R1E106M                             |
| C4, C13-C18        |     7 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K                          |
| C5, C6             |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                        |
| C9-C12             |     0 | Not installed, ceramic capacitors (0805)                                                   |
| D1, D2, D3, D6-D10 |     8 | Green surface-mount LEDs (1206)                                                            |
| D4, D5             |     2 | Yellow surface-mount LEDs (1206)                                                           |
| D11                |     1 | 1A, 40V Schottky diode (SOD-123) Diodes Inc. 1N5819HW                                      |
| J1, J2             |     2 | PCI Express-16 connectors Molex 87715-3305                                                 |
| J3                 |     1 | 16-pin header                                                                              |
| J4                 |     1 | 2 x 10 right-angle female receptacle                                                       |
| JU1-JU4            |     4 | 2-pin headers                                                                              |
| JU5-JU8            |     4 | 3-pin headers                                                                              |
| N1-N4              |     4 | 20V, 13.4A n-channel MOSFETs(SO-8) Vishay Si7448DP-T1                                      |
| R1, R2             |     2 | 0.008 Ω ±2%, 0.5W sense resistors (2010) IRC LRC-LRF2010-01-R008-G or Vishay WSL20108L600F |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- ·

## MAX5946L Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Diodes Inc.             | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| IRC                     | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                  | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic               | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Sanyo Electronic Device | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay                  | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5946L when contacting these component suppliers.

## Quick Start

## Required Equipment

## One each of the following DC power supplies: 12V at 12A (the 12V supply must be rated 12A or higher) 3.3V at 10A

- Three voltmeters

The 3.3V power supply can be used to power the main 3.3V and 3.3V\_AUX inputs.

The MAX5946L EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

Note: The banana leads connecting the 12V and 3.3V power supply to the EV kit must be short (&lt;12 inches long).

## MAX5946L Configuration A/B Channel Outputs

- 1) Verify that shunts are installed on jumpers JU1 ( PRES-DETA ) and JU2 ( PRES-DETB ).
- 2) Verify that shunts are not installed on jumpers JU3 (MRLA) and JU4 (MRLB).
- 3) Verify  that  shunts  are  installed  on  pins  1  and  2  of jumpers JU5-JU8 (local switch control).
- 4) Set switches SW3 (ONB) and SW4 (AUXONB) to the ON position (Channel B).
- 5) Set switches SW5 (ONA) and SW6 (AUXONA) to the ON position (Channel A).
- 6) Utilizing short 10A-rated banana leads (&lt;12in long) connect the 12V DC power supply to the VIN1 banana jack. Utilizing short 10A-rated banana leads (&lt;12in long) connect the supply ground to the GND banana jack.
- 7) Utilizing short 10A-rated banana leads (&lt;12in long) connect the 3.3V DC power supply to the VIN2 banana jack. Utilizing short 10A-rated banana leads (&lt;12in long) connect the supply ground to the GND banana jack.
- 8) Connect the 3.3V DC power supply to the VIN3 banana jack with a short banana lead. Connect the supply ground to the GND banana jack.
- 9) Connect a voltmeter to the 12VA pad or test point TP1 and GND. Connect a voltmeter to the 3.3VA pad or test point TP9 and GND. Connect a voltmeter to the 3.3VAUXA pad or test point TP10 and GND.
- 10) Turn on both power supplies in any sequence.
- 11) Verify  that  the  voltage  at  the  following  pads  is  as shown below:
- a. 12VA, 12VB = 12V
- b. 3.3VA, 3.3VB = 3.3V
- c. 3.3VAUXA, 3.3VAUXB = 3.3V
- 12) Sliding switches SW5 and SW6 to the OFF position will disable channel A on the MAX5946L EV kit dual hot-plug controller.
- 13) Sliding switches SW3 and SW4 to the OFF position will disable channel B on the MAX5946L EV kit dual hot-plug controller.
- 14) Test points TP25, TP26, TP24, TP23, and GND pads nearby are provided to observe MOSFETs N1-N4 gate voltage, respectively, with an oscilloscope.

<!-- image -->

See the MAX7313 Input/Output Expander and SMBus Interface section for configuring the Input/Output Expander and using the CMODUSB interface board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

## Detailed Description

The MAX5946L EV kit demonstrates a PCI Express-16 dual hot-plug circuit design. Two PCI Express-16 channels are provided to evaluate a PCI Express-16 card. The EV kit uses a latching MAX5946L hot-plug controller in  a  36-pin  thin  QFN  package to control both A and B channels' output power and monitor for faults.

The MAX5946L IC independently controls each channel's  output  power. External n-channel MOSFETs are used to control power to the 12V and 3.3V outputs of each channel. Current-sensing resistors (R1-R4) are used for the 12V and 3.3V outputs of each channel.

Internal  MOSFETs on the MAX5946L control the 3.3V auxiliary outputs of each channel.

If  an  overcurrent  fault  persists  on  either  channel,  the MAX5946L will shut down the respective channel. The fault is reported at the respective channel's open-drain power-good pin ( PWRGDA , PWRGDB )  and  fault  pin ( FAULTA , FAULTB ).  The  MAX5946L power-on reset (POR) is configured for 160ms; however, the POR can be reconfigured after installing resistor R27.

Slide switches are provided to independently enable/disable each channel's main output (SW3, SW5) and auxiliary (SW4, SW6) 3.3V output when the SMBus control is not used. Jumpers JU1 and JU2 can be used to provide a presence-detect function for the respective channel if PCI Express cards are not used. Momentary pushbutton switches SW1 and SW2 are provided to demonstrate the MAX5946L de-bounced logic gate outputs.

The MAX5946L EV kit features green LEDs connected to each channel's 12V, 3.3V, and 3.3V auxiliary outputs that  indicate  if  the  respective  output  is  currently  powered. Red test points for the 12V and 3.3V outputs, various PCI Express signals, and other circuit signals such as the gate drive of each MOSFET have been provided for probing on the EV kit board. All of the EV kit's black test points are GND points.

be installed at these locations. See Figure 1 for each of the MOSFET's gate R and C designators.

The EV kit can be reconfigured for evaluating an x1, x4, or  x8  PCI  Express  dual  hot-plug  design by replacing the appropriate current-sense resistor, R1 or R2. Consult the appropriate PCI Express specification or Table 1 in the MAX5946 IC data sheet for selecting other designs. PC board pads are provided to demonstrate  the  MAX5946L hot-plug features without using the PCI Express-16 connectors.

For evaluating external DC loads, the cables connecting  the  12V  and  3.3V  outputs  to  the  external  DC  load must be rated for at least 10A and be shorter than 12in. Additionally, current-sense resistors R1-R4 are configured for the maximum allowable output current on the 12V and 3.3V outputs. These resistors should only be reconfigured for lower output currents.

The MAX5946L EV kit features a MAX7313 16-port I/O expander (U2) and PC board pads for interfacing to a user's SMBus system. Resistors R19-R24 configure the MAX7313 SMBus serial address. The MAX7313 can be used to enable/disable each channel's main output and auxiliary 3.3V output independently. See the MAX7313 Input/Output Expander and SMBus Interface section in this document for more details.

## Jumper and Switch Selection

Several jumper and switch selections in Tables 1-6 display the functions provided by the MAX5946L EV kit.

## Presence Detect Channels A and B

The MAX5946L EV kit features two jumpers that can simulate a PCI Express-16 card being plugged into a connector. Jumpers JU1 and/or JU2 are used to provide a presence-detect function for the respective A or B channel. An external load (resistive and capacitive) must be connected to the channel's output PC board pads simulating a real PCI Express card. Table 1 lists the various jumper options.

The EV kit also features PC board pads for installing external resistors and capacitors near each MOSFET gate terminal to increase the MOSFET's gate turn-on time.  Surface-mount 0805 case size components can When using a real PCI Express card, these jumper shunts must be removed so that the card has control of the presence detection.

## Table 1. Channel A and B Presence-Detection Functions

| JUMPER   | SHUNT     | MAX5946L PIN CONNECTION   | EV KIT OPERATION SIMULATED             |
|----------|-----------|---------------------------|----------------------------------------|
| JU1      | Installed | PRES-DETA pin pulled low  | PCI Express card inserted in channel A |
| JU1      | None *    | PRES-DETA pin pulled high | No PCI Express card in channel A       |
| JU2      | Installed | PRES-DETB pin pulled low  | PCI Express card inserted in channel B |
| JU2      | None *    | PRES-DETB pin pulled high | No PCI Express card in channel B       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5946L Evaluation Kit/Evaluation System

## Table 2. Channel A Switch Functions

| SWITCH   | SWITCH STATE   | MAX5946L PIN CONNECTION   | MAX5946L OPERATION                       |
|----------|----------------|---------------------------|------------------------------------------|
| SW5      | On             | ONA pin pulled high       | Enable channel A main outputs            |
| SW5      | Off            | ONA pin pulled low        | Disable channel A main outputs           |
| SW6      | On             | AUXONA pin pulled high    | Enable channel A +3.3V auxiliary output  |
| SW6      | Off            | AUXONA pin pulled low     | Disable channel A +3.3V auxiliary output |

## Table 3. Channel B Switch Functions

| SWITCH   | SWITCH STATE   | MAX5946L PIN CONNECTION   | MAX5946L OPERATION                       |
|----------|----------------|---------------------------|------------------------------------------|
| SW3      | On             | ONB pin pulled high       | Enable channel B main outputs            |
| SW3      | Off            | ONB pin pulled low        | Disable channel B main outputs           |
| SW4      | On             | AUXONB pin pulled high    | Enable channel B +3.3V auxiliary output  |
| SW4      | Off            | AUXONB pin pulled low     | Disable channel B +3.3V auxiliary output |

## Channel A Enable/Disable Switches

The  MAX5946L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel A outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 2 lists the various switch options.

## Channel B Enable/Disable Switches

The  MAX5946L EV kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V auxiliary channel B outputs. The switches can also be used to reset a channel that has latched off after a fault has occurred. Table 3 lists the various switch options.

## Control Methods, Other Configurations, and I/O Expander

## Fault Resetting

The MAX5946L EV kit features two slide switches to reset a latched fault at each channel. The switch will reset  the  EV  kit  and  unlatch  faults  when  toggled  from ON to OFF and back to ON. See Table 2 for resetting channel A or Table 3 for channel B. Refer to the MAX5946L data sheet for additional functions of the MAX5946L ONA or ONB pins.

## Fault Timeout and POR Periods

The MAX5946L fault timeout period is configured for 10ms and can be reconfigured to a new timeout period by installing surface-mount resistor R5. The MAX5946L

<!-- image -->

POR timeout period is configured for 160ms; however, a new POR timeout period can be reconfigured by installing surface-mount resistor R27. Refer to the MAX5946 data sheet's Applications Information section to select the values of resistors R5 or R27.

## Forced-On Inputs

Either channel A or B's PCI Express slot can be forced to  turn  on  regardless  of  the  MAX5946L logic status inputs. To force channel A on, install surface-mount resistor R28; to force channel B on, install surfacemount resistor R8. Typical values are less than 1k Ω .

## Current Limiting

The MAX5946L EV kit can evaluate other current-limit configurations for the 12V and 3.3V main outputs of either channel. Resistors R1 and R2 set the 12V current limit  for  channels  A  and  B,  respectively.  Resistors  R3 and R4 set the 3.3V current limit for channels A and B, respectively.

The 3.3V auxiliary current limit is fixed at 470mA (typ) and is not reconfigurable. Refer to the MAX5946 IC data sheet for information on selecting other currentlimit resistors.

Evaluating Other MAX5946 Hot-Plug Controllers The MAX5946L EV kit can be used to evaluate the MAX5946A. Replace U1 with the MAX5946A IC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

## Table 4. MAX5946L Channel A and B On Signals Configuration

| JUMPER   | SHUNT LOCATION   | MAX5946L PIN CONNECTION                        | EV KIT OPERATION          |
|----------|------------------|------------------------------------------------|---------------------------|
| JU5      | 1 and 2          | AUXONA controlled by SW6                       | Local switch control      |
| JU6      | 1 and 2          | ONA controlled by SW5                          | Local switch control      |
| JU7      | 1 and 2          | ONB controlled by SW3                          | Local switch control      |
| JU8      | 1 and 2          | AUXONB controlled by SW4                       | Local switch control      |
| JU5      | 2 and 3          | AUXONA controlled by U2, MAX7313 through SMBus | SMBus or computer control |
| JU6      | 2 and 3          | ONA controlled by U2, MAX7313 through SMBus    | SMBus or computer control |
| JU7      | 2 and 3          | ONB controlled by U2, MAX7313 through SMBus    | SMBus or computer control |
| JU8      | 2 and 3          | AUXONB controlled by U2, MAX7313 through SMBus | SMBus or computer control |

## MAX7313 Input/Output Expander and SMBus Interface

The  MAX5946L  EV  kit  features  a  MAX7313  I/O expander (U2) and PC board pads for connecting to an SMBus system (SDA and SCL signals). The I/O expander interfaces with the PRES-DET, FAULT, ON, and OUT signals of the MAX5946L for each channel. Header J3 (16 pins) is provided to enable easy access to  each channel's signals through a ribbon cable or scope probe. Green and yellow LEDs (D3-D6) are also provided for user applications such as status indication. Jumpers JU3 (MRLA) and JU4 (MRLB) are provided to mimic a PCI Express mechanical retention locking (MRL) signal. Surface-mount resistors R19-R24 configure the MAX7313 SMBus serial address. The MAX7313 default SMBus address is 0x40.

If the MAX7313 I/O expander is used to control the ON signals and read back other MAX5946L signals of each channel, jumpers JU5-JU8 must be reconfigured or U2 will be destroyed when switching logic states . See Table 4 for configuration of jumpers JU5-JU8. Pads are provided on the EV kit's PC board to interface with a user's system SMBus VDD, SDA, SCL, and GND signals.

If  a  user's SMBus system is not available, a Windowsbased computer can be interfaced with the EV kit by connecting the CMODUSB SMBus interface board to connector J4. The CMODUSB SMBus interface board enables the computer to interface with the EV kit's SMBus signals. The SMBus interface board and soft- ware provide the user with the capability of 'bit banging'  signals  to  and  from  the  MAX7313  I/O  expander's various registers.

Figure 1. MAX5946L Evaluation Software's Main Window for Accessing the General-Purpose Two-Wire Interface Utility

<!-- image -->

## Software Startup

A mouse or the tab key is used to navigate the Main Window items. Upon starting the program, the GeneralPurpose Two-Wire Interface Utility is launched by selecting the Interface button. Hexadecimal or binary data can be entered into the Hexadecimal or Binary Data combo boxes and then the alternate combo box will display the corresponding number in the respective number base. This is used as an easy means of converting between hexadecimal and binary data.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

Table 5. MAX7313 Port Configuration/Function for Channel A

| MAX7313 PORT (REGISTER)   | PORT P7 (BIT D7)   | PORT P6 (BIT D6)   | PORT P5 (BIT D5)   | PORT P4 (BIT D4)   | PORT P3 (BIT D3)   | PORT P2 (BIT D2)   | PORT P1 (BIT D1)   | PORT P0 (BIT D0)   |
|---------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Port Configuration        | Output             | Output             | Input              | Input              | Output             | Output             | Input              | Input              |
| EV Kit Function           | YELLOW LED (D4)    | GREEN LED (D3)     | PRES- DETA\        | FAULTA             | AUXONA             | ONA                | OUT1               | MRLA               |

Table 6. MAX7313 Port Configuration/Function for Channel B

Figure 2. The two-wire interface window provides direct, low-level access to the MAX5946L through the SMBus 2-wire interface.

| MAX7313PORT (REGISTER)   | PORT P15 (BIT D7)   | PORT P14 (BIT D6)   | PORT P13 (BIT D5)   | PORT P12 (BIT D4)   | PORT P11 (BIT D3)   | PORT P10 (BIT D2)   | PORT P9 (BIT D1)   | PORT P8 (BIT D0)   |
|--------------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|--------------------|--------------------|
| Port Configuration       | Output              | Output              | Input               | Input               | Output              | Output              | Input              | Input              |
| EV Kit Function          | YELLOW LED (D5)     | GREEN LED (D6)      | PRES-DETB\          | FAULTB              | AUXONB              | ONB                 | OUT2               | MRLB               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

## General-Purpose Two-Wire Interface Utility

The General-Purpose Two-Wire Interface Utility is used to communicate with the MAX7313 and thus controls or reads back signals from the MAX5946L. The utility configures  the  SMBus interface parameters such as Start and Stop bits, Acknowledgements, and clock timing. The Two-Wire Interface screen allows you to send general-purpose  SMBus  commands  using  the SMBusWriteByte and SMBusReadByte .  All  data is in hexadecimal format.

The ' Hunt for active listeners ' button scans the entire 2-wire address space, reporting each address that is acknowledged. The SMBusWriteByte transmits the device address, command, and one byte of data. The SMBusReadByte transmits the device address, a command, and then retransmits the device address and reads one byte of data.

## Software Quick Start

- 1) Install shunts on pins 2 and 3 of jumpers JU5-JU8 (computer control) on the MAX5946L EV kit.
- 2) Connect the CMODUSB interface board to the MAX5946L EV kit's J4 connector.
- 3) Set both CMODUSB SW1 switches to enable. These provide pullup resistors for the SMBus.
- 4) Connect the computer's USB port to the CMODUSB interface board with a USB cable.
- 5) Install  the  MAX5946L evaluation software on your computer by running the INSTALL.EXE program on the CD-ROM disk. The program files are copied and icons are created for them in the Windows Start menu. Restart the computer when prompted. For Windows 2000 or XP, you may need administrator privileges.
- 6) Turn on the power supplies for the EV kit.
- 7) Start the MAX5946L program by opening its icon in the Start menu.
- 8) Configure the MAX7313 I/O Expander for operation as follows.

## Port configuration:

- Configure the MAX7313 ports to Inputs/Outputs per  Tables  5  and  6  above  by  using  the SMBusWriteByte command to write 0x33 data to command bytes 0x06 and 0x07 .

## Reading from channels A or B:

- To read a specific channel, use the SMBusReadByte command. Use the 0x00 command byte for reading the ports on channel A. Use the SMBusReadByte command and the 0x01 command byte for reading the ports on channel B.

## Writing to channels A or B:

- To write a specific channel, use the SMBusWriteByte command. Use the 0x02 command byte for writing to the ports on channel A. Use the SMBusWriteByte command and the 0x03 command byte for writing to the ports on channel B. Enter the desired hexadecimal data in the Dataout Edit field.
- When writing to an output ( 0x03 , 0x04 ) the data corresponding to input bits are ignored and are therefore 'don't care' bits.

The main window hexadecimal and binary combo boxes can be used to convert between both number formats. The general-purpose Two-Wire Interface Utility only accepts and outputs a hexadecimal number format.

## General Troubleshooting

## Problem: Software reports it cannot find the board.

- Is the CMODUSB board power LED lit?
- Is the USB communications cable connected?
- Has Windows plug-and-play detected the board? Bring up Control Panel-&gt;System-&gt;Device Manager, and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to  the  USB,  delete  it-this  forces  plug-and-play  to try again.

## Problem: Unable to find DUT (device under test).

- Are the SCL and SDA signals pulled up to VDD? The CMODUSB dip-switch SW1 enables the on-board resistors on the CMODUSB interface board. There must be pullup resistors somewhere on the bus.
- If using jumper wires to connect, could the SCL and SDA signals be swapped? Could the ground return be missing?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5946L Evaluation Kit/Evaluation System

Figure 3. MAX5946L EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

Figure 4. MAX5946L EV Kit Schematic, PCI Express-16 Connectors

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5946L Evaluation Kit/Evaluation System

<!-- image -->

Figure 5. MAX5946L EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX5946L EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5946L Evaluation Kit/Evaluation System

Figure 7. MAX5946L EV Kit PC Board Layout-Inner Layer, Ground Plane

<!-- image -->

Figure 8. MAX5946L EV Kit PC Board Layout-Inner Layer, Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5946L Evaluation Kit/Evaluation System

Figure 9. MAX5946L EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 10. MAX5946L EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.