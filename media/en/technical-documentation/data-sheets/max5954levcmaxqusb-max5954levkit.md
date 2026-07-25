<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

## General Description

The MAX5954L evaluation kit (EV kit) is a fully assembled and tested surface-mount single hot-plug controller  PC  board  for  a  single  PCI  Express™  hot-plug slot.  The  circuit  uses  a  MAX5954L  IC  in  a  36-pin  thin QFN package. The EV kit provides independent power control for the 12V, 3.3V, and 3.3V-auxiliary outputs of a single PCI-Express x16 connector. The EV kit demonstrates the MAX5954L IC's inrush current control, output overcurrent/short-circuit protection and input undervoltage monitoring features.

The MAX5954L IC controls two separate external n-channel MOSFETs for the 12V and 3.3V outputs, respectively. Additionally, the MAX5954L has an internal MOSFET that controls the 3.3V-auxiliary output. Switches are provided to independently enable/disable the 12V/3.3V main and 3.3V-auxiliary supplies.

The MAX5954L EV kit can be reconfigured for evaluating a x1, x4, or x8 PCI Express single hot-plug design. Alternatively,  the  EV  kit  can  also  be  used  to  demonstrate  the  MAX5954L hot-plug features without using the PCI Express x16 connector.

The EV kit includes a MAX7313 I/O expander that enables communication through an SMBus™ interface for the MAX5954L signals and some of the PCI Express signals. A CMAXQUSB interface board can be used to enable PC communication through the SMBus interface. Windows® 98-/2000-/XP-compatible GUI software is  provided to access the MAX7313 I/O expander and MAX5954L signals. The MAX5954L EV kit can also be used in local control, without any software, or interfaced to a user-provided SMBus system signal.

Order the MAX5954LEVCMAXQUSB for a complete PCbased  evaluation  of  the  MAX5954L.  Order  the MAX5954LEVKIT if you already have a CMAXQUSB interface board or do not require PC-based evaluation of the MAX5954L.

## Ordering Information

| PART*              | IC PACKAGE   | SMBus INTERFACE TYPE   |
|--------------------|--------------|------------------------|
| MAX5954LEVKIT      | 36 TQFN-EP** | Not included           |
| MAX5954LEVCMAXQUSB | 36 TQFN-EP** | CMAXQUSB               |

Note: The MAX5954L EV kit software is provided with the MAX5954LEVKIT. However, the CMAXQUSB interface board is required to interface the EV kit to a computer when using the software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ Demonstrate PCI Express x16 Single Hot-Plug Design
- ♦
- Independent Output Controls 12V and Up to 5.5A (Adjustable) 3.3V and Up to 3A (Adjustable)

3.3V-Aux and Up to 0.375A

- ♦ Evaluate Hot-Plugging PCI Express x1, x4, x8, or x16 Line Cards
- ♦ Demonstrate Input Inrush Current Control
- ♦ Demonstrate Output Overcurrent/Short-Circuit Protection
- ♦ Monitor Input Undervoltage for 12V, 3.3V, and 3.3V-Aux with Status Reports
- ♦ Configurable Power-On Reset (POR)
- ♦ Independent On/Off Controls for 12V/3.3V
- ♦ Independent 3.3V-Aux Output with Separate On/Off Control
- ♦ Latched Output After Fault Conditions (12V, 3.3V, 3.3V-Aux)
- ♦ Input/Output Interface Using a MAX7313 I/O Expander (SMBus Interface) or Local Control
- ♦ Can be Controlled Locally without Software
- ♦ Windows 98-/2000-/XP-Compatible Software
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

PCI Express is a trademark of PCI-SIG Corp. SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

## MAX5954LEVCMAXQUSB (MAX5954L EV System)

## Component List

| PART          |   QTY | DESCRIPTION             |
|---------------|-------|-------------------------|
| MAX5954LEVKIT |     1 | MAX5954L evaluation kit |
| CMAXQUSB      |     1 | SMBus interface board   |

Maxim Integrated Products

## MAX5954L Evaluation Kit/Evaluation System

## MAX5954LEVKIT Component List

| DESIGNATION                                       |   QTY | DESCRIPTION                                                    |
|---------------------------------------------------|-------|----------------------------------------------------------------|
| R2                                                |     1 | 750 Ω ±1% resistor (1210)                                      |
| R3                                                |     1 | 1k Ω ±5% resistor (1206)                                       |
| R4, R10, R11, R12, R17, R20, R21, R22             |     0 | Not installed resistors (0805)                                 |
| R5, R8, R18, R19, R23, R24, R25                   |     7 | 10k Ω ±5% resistors (0603)                                     |
| R6, R7                                            |     2 | 51k Ω ±5% resistors (0603)                                     |
| R9                                                |     1 | 3.3k Ω ±5% resistor (0603)                                     |
| R13, R14, R16, R28                                |     4 | 150 Ω ±5% resistors (0603)                                     |
| R15                                               |     1 | 0.005 Ω ±1%, 0.5W sense resistor (2010) Vishay WSL20105L000FTA |
| SW1                                               |     1 | SPST momentary-contact switch                                  |
| SW2, SW3                                          |     2 | SPDT slide switches                                            |
| VIN1, VIN2, VIN3, GND, GND                        |     5 | Uninsulated banana jacks                                       |
| TP1, TP2, TP3, TP13, TP15, TP16, TP18, TP19, TP20 |     9 | PC test points, red                                            |
| TP4-TP12                                          |     9 | PC test points, black                                          |
| TP14, TP17                                        |     2 | PC test points, miniature, red                                 |
| U1                                                |     1 | MAX5954LETX (6mm x 6mm, 36-pin TQFN)                           |
| U2                                                |     1 | 16-port I/O expander (4mm x 4mm, 24-pin TQFN) MAX7313ATG       |
| -                                                 |     4 | Shunts (JU1-JU4)                                               |
| -                                                 |     1 | MAX5954L EV kit PC board                                       |
| -                                                 |     2 | Rubber bumpers                                                 |

| DESIGNATION    |   QTY | DESCRIPTION                                                                                 |
|----------------|-------|---------------------------------------------------------------------------------------------|
| C1             |     1 | 1500µF, 16V electrolytic capacitor (12.5mm x 13.5mm case) Panasonic EEVFK1C152Q             |
| C2             |     1 | 3300µF, 6.3V, low-impedance electrolytic capacitor (12.5mm x 13.5mm case) Sanyo 6.3CV3300KX |
| C3, C4, C5     |     3 | 10µF ±20%, 25V X7R ceramic capacitors (1812) TDK 4532X7R1E106M                              |
| C6-C9          |     4 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K                           |
| C11, C12       |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                         |
| C13, C14       |     0 | Not installed ceramic capacitors (0805)                                                     |
| D1             |     1 | 1A, 40V Schottky diode (SOD-123) Diodes Incorporated 1N5819HW-F                             |
| D2, D3, D5, D6 |     4 | Green surface-mount LEDs (1206)                                                             |
| D4             |     1 | Yellow surface-mount LED (1206)                                                             |
| J1             |     1 | PCI Express x16 connector Molex 87715-3305                                                  |
| J2             |     1 | 9-pin header                                                                                |
| J4             |     1 | 2 x 10 right-angle female receptacle                                                        |
| JU1, JU2       |     2 | 2-pin headers                                                                               |
| JU3, JU4       |     2 | 3-pin headers                                                                               |
| N1, N2         |     2 | 20V, 13.4A n-channel MOSFETs (SO-8) Vishay Si7448DP-T1                                      |
| R1             |     1 | 0.008 Ω ±2%, 0.5W sense resistor (2010) IRC LRC-LRF2010-01-R008-G or Vishay WSL20108L000F   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5954L Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Diodes Incorporated     | 805-446-4800 | www.diodes.com        |
| IRC                     | 361-992-7900 | www.irctt.com         |
| Murata                  | 770-436-1300 | www.murata.com        |
| Panasonic               | 714-373-7366 | www.panasonic.com     |
| Sanyo Electronic Device | 619-661-6835 | www.sanyodevice.com   |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| Vishay                  | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5954L when contacting these component suppliers.

## Quick Start

## Required equipment

- One each of the following DC power supplies

12V, 7A

3.3V, 5A

- Three voltmeters

The 3.3V power supply can be used to power the main 3.3V and 3.3VAUX inputs.

The MAX5954L EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

Note: The banana leads connecting the 12V and 3.3V power supply to the EV kit must be short (&lt; 12in long).

## MAX5954L Hardware-Only Configuration

- 1) Verify that a shunt is installed on jumper JU1 ( PRES-DET ).
- 2) Verify that a shunt is not installed on jumper JU2 (MRL).
- 3) Verify  that  shunts  are  installed  on  pins  1  and  2  of jumpers JU3 and JU4 (local switch control).
- 4) Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the 12V DC power supply to the VIN1 banana jack. Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the supply ground to the GND banana jack.
- 5) Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the 3.3V DC power supply to the VIN2 banana jack. Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the supply ground to the GND banana jack.
- 6) Connect the 3.3V DC power supply to the VIN3 banana jack with a short banana lead.
- 7) Connect a voltmeter to the 12V pad or test point TP13 and GND. Connect a voltmeter to the 3.3V pad or test point TP16 and GND. Connect a voltmeter to the 3.3VAUX pad or test point TP19 and GND.
- 8) Set switches SW3 (ON) and SW2 (AUXON) to the OFF position.
- 9) Turn on both power supplies in any sequence.
- 10) Set switches SW3 (ON) and SW2 (AUXON) to the ON position.
- 11) Verify  that  the  voltage  at  the  following  pads  is  as shown below:

<!-- image -->

12V = 12V

3.3V = 3.3V

3.3VAUX = 3.3V

- 12) Sliding switches SW3 and SW2 to the OFF position disables the respective output on the MAX5954L EV kit single hot-plug controller main or auxiliary outputs.
- 13) Test points TP14, TP17, and GND pads nearby are provided to observe MOSFETs N1 or N2 gate voltage, respectively, with an oscilloscope.

Software and Hardware Quick Start The MAX5954L EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

## Required Equipment:

- One each of the following DC power supplies 12V, 7A
- 3.3V,  5A  (used  to  power  the  main  3.3V  and 3.3VAUX inputs)
- MAX5954L EV kit and CMAXQUSB interface board
- Windows 98/2000/XP computer with a spare USB port
- USB I/O extension cable, straight-through, male-tofemale cable
- Three voltmeters for confirming output voltages

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5954L Evaluation Kit/Evaluation System

## MAX5954L Software and Hardware Configuration

- 1) Verify  that  a  shunt  is  not  installed  on  jumper  JU1 ( PRES-DET ) and a shunt is installed on jumper JU2 (MRL).
- 2) Verify  that  shunts  are  installed  on  pins  2  and  3  of jumpers JU3 and JU4 (computer control) on the EV kit.
- 3) Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the 12V DC power supply to the VIN1 banana jack. Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the supply ground to the GND banana jack.
- 4) Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the 3.3V DC power supply to the VIN2 banana jack. Utilizing short 10A-rated banana leads (&lt; 12in long) ,  connect the supply ground to the GND banana jack.
- 5) Connect the 3.3V DC power supply to the VIN3 banana jack with a short banana lead.
- 6) Connect a voltmeter to the 12V pad or test point TP13 and GND. Connect a voltmeter to the 3.3V pad or test point TP16 and GND. Connect a voltmeter to the 3.3VAUX pad or test point TP19 and GND.
- 7) Connect the CMAXQUSB interface board to the MAX5954L EV kit's J4 connector.
- 8) Set both CMAXQUSB interface board SW1 switches to  enable. These provide pullup resistors for the SDA and SCL 2-wire bus signals.
- 9) Install  the  MAX5954L evaluation software on your computer by running the INSTALL.EXE program on the CD-ROM disk. The program files are copied and icons are created for them in the Windows Start Menu. Restart the computer when prompted. For Windows 2000 and XP, you may need administrator privileges.
- 10) Turn on the 12V and 3.3V power supplies for the EV kit.  The  CMAXQUSB interface board is powered through the computer's USB port.
- 11) Connect the included USB cable from the PC to the CMAXQUSB interface board. A Building Driver Database window should pop up in addition to a New Hardware Found message. If you do not see any window that is similar to the one described above after 30s, try removing the USB cable from the CMAXQUSB interface board and reconnect it again. Administrator privileges are required to install the USB device driver on Windows 2000 and XP.
- 12) Follow the directions of the Add New Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  as C:\Program Files\MAX5954L using the Browse button. Refer to the document Troubleshooting USB.PDF included with the software for more information.
- 13) Start the MAX5954L program by opening its icon in the Start Menu.
- 14) Install  the  shunt  on  jumper JU1 ( PRES-DET )  or insert a PCI Express card into connector J1.
- 15) The software detects the CMAXQUSB interface board, the SMBus address of U2, and updates the status screen. The software is then ready for changes in the command section.

See the MAX7313 Input/Output Expander and SMBus Interface section for configuring the input/output expander, using the CMAXQUSB interface board. See the Detailed Description of Software in  this  document for more information on the software GUI features.

## Detailed Description of Hardware

The MAX5954L EV kit demonstrates a PCI Express x16 single hot-plug circuit design. A PCI Express x16 single channel is provided to evaluate a PCI Express x16 line card. The EV kit uses a latching MAX5954L hot-plug controller in a 36-pin TQFN package to control the output power and monitor for faults.

The MAX5954L IC controls output power independently and external n-channel MOSFETs are used to control power to the 12V and 3.3V outputs. Current-sensing resistors  (R1,  R15)  are  used  for  monitoring  current  at the 12V and 3.3V outputs. An internal MOSFET on the MAX5954L controls the 3.3V-auxiliary output.

If  an  overcurrent  fault  persists,  the  MAX5954L shuts down the channel. The fault is reported at the opendrain power-good pin ( PWRGD ) and fault pin ( FAULT ). The MAX5954L power-on reset (POR) is configured for a default value of 160ms; however, the POR can be reconfigured by installing resistor R11.

Slide switches are provided to enable/disable the main output (SW3) and auxiliary (SW2) 3.3V output independently when the SMBus control is not used. Jumper JU1 can be used to provide a presence-detect function if a PCI Express card is not used. Momentary pushbutton  switch  SW1 is provided to demonstrate the MAX5954Ldebouncedlogicgateinput andoutput signals.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

The MAX5954L EV kit features green LEDs connected to  the  12V,  3.3V,  and  3.3V-auxiliary  outputs  that  indicate if the respective output is currently powered. Red test  points  for  the  12V  and  3.3V  outputs,  various  PCI Express signals, and other circuit signals (such as the gate drive of each MOSFET) have been provided for probing on the EV kit board. All of the EV kit's black test points are GND points.

The EV kit also features PC board pads for installing external resistors and capacitors near each MOSFET gate terminal to slow the MOSFETs gate-turn-on time. Surface-mount 0805 case size components can be installed at these locations. See Figure 3 for each of the MOSFETs' gate reference designators.

When adding capacitance to the gates of N1 and N2, ensure that adequate startup time (tSU) is allowed. To successfully power up, the 5µA gate-charge current must be able to bring the gate voltages of N1 and N2 above their maximum PWRGD thresholds before tSU has elapsed. The maximum PWRGD threshold for 12V MOSFET N1 is 4.8V above V12VIN, and the threshold for 3.3V MOSFET N2 is 4.5V above V3.3VIN. The time required to reach these thresholds is

total gate capaci ce PWRGDthreshold voltage tan

## A 5

## × µ

The EV kit can be reconfigured for evaluating a x1, x4, or x8 PCI Express single hot-plug design by replacing current-sense resistor R1. Consult the appropriate PCI Express specification or Table 1 in the MAX5954L IC data sheet for selecting other designs. PC board pads are provided to demonstrate the MAX5954L hot-plug features without using the PCI Express x16 connector.

For evaluating external DC loads, the cables connecting  the  12V  and  3.3V  outputs  to  the  external  DC  load must be rated for at least 10A and be shorter than 12in. Additionally, current-sense resistors R1 and R15 are configured for the maximum allowable output current on the 12V and 3.3V outputs. These resistors should be reconfigured only for lower output currents.

The MAX5954L EV kit features a MAX7313 16-port I/O expander (U2) and PC board pads for interfacing to a user's SMBus system. Resistors R20-R25 configure the MAX7313 SMBus serial address. The MAX7313 can be used to enable/disable the EV kit's main outputs and auxiliary 3.3V output independently. See the MAX7313 Input/Output Expander and SMBus Interface section for more details.

## Jumper and Switch Selection

Several jumper and switch selections in the following tables display the functions provided by the MAX5954L EV kit.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Channel Presence-Detect Functions

| JUMPER   | SHUNT     | MAX5954L PIN CONNECTION   | EV KIT OPERATION SIMULATED           |
|----------|-----------|---------------------------|--------------------------------------|
| JU1      | Installed | PRES-DET pin pulled low   | PCI Express card inserted in channel |
| JU1      | None*     | PRES-DET pin pulled high  | No PCI Express card in channel       |

## Presence Detect

The MAX5954L EV kit features a jumper that can simulate  a  PCI  Express  x16  card  being  plugged into connector J1. Jumper JU1 is used to provide a presencedetect function for the channel. An external load (resistive  and  capacitive)  must  be  connected to the channel's output PC board pads to simulate a real PCI Express card. Table 1 lists the various jumper options.

## Channel Enable/Disable Switches

The  MAX5954L  EV  kit  features  two  switches  to enable/disable the 12V/3.3V main and 3.3V-auxiliary outputs. The switches can also be used to reset the channel when it has latched off after a fault has occurred. Table 2 lists the various switch options.

## Table 2. Channel Switch Functions

| SWITCH   | SWITCH STATE   | MAX5954L PIN CONNECTION   | MAX5954L OPERATION             |
|----------|----------------|---------------------------|--------------------------------|
| SW3      | On             | ON pin pulled high        | Enable main outputs            |
| SW3      | Off            | ON pin pulled low         | Disable main outputs           |
| SW2      | On             | AUXON pin pulled high     | Enable 3.3V- auxiliary output  |
| SW2      | Off            | AUXON pin pulled low      | Disable 3.3V- auxiliary output |

## MAX5954L Evaluation Kit/Evaluation System

## Control Methods, Other Configurations, and I/O Expander

## Fault Resetting

The MAX5954L EV kit features two slide switches to reset a latched fault at the channel. The respective switch resets the MAX5954L and unlatches faults when toggled from on to off. See Table 2 for resetting the channel. Refer to the MAX5954L data sheet for additional functions of the MAX5954L ON pin.

## Fault Timeout and POR Periods

The MAX5954L fault timeout period is configured for a default value of 10ms and can be reconfigured to a new timeout period by installing surface-mount resistor R10. The MAX5954L POR timeout period is configured for a default value of 160ms, however a new POR timeout period can be reconfigured by installing surfacemount resistor R11. Refer to the MAX5954L data sheet Applications Information section for selecting the values of resistors R10 or R11.

When adjusting the tFAULT timeout, be sure to allow adequate startup time, tSU. The minimum required startup time for a given output is the greater of either

| PWRGDthreshold voltage input voltage output load capaci ce + × tan   |
|----------------------------------------------------------------------|
| A or 5 µ                                                             |
| total gate capaci ce PWRGD thresholdvoltage A × tan 5 µ              |

as described in the Detailed Description of Hardware section. Refer to the MAX5954 data sheet for more information on selecting RTIM and RPORADJ.

## Forced On Inputs

The PCI Express slot can be forced to turn on regardless of the MAX5954L logic status inputs. To force the channel on, install surface-mount resistor R12. A typical value is less than 1k Ω .

## Current Limiting

The MAX5954L EV kit can evaluate other current-limit configurations for the 12V and 3.3V main outputs. Resistor R1 sets the 12V current limit and R15 sets the 3.3V current limit. The 3.3V-auxiliary current limit is fixed at 470mA (typ) and is not reconfigurable. Refer to the MAX5954L IC data sheet for information on selecting other current-limit resistors.

## Evaluating Other MAX5954L Hot-Plug Controllers

The MAX5954L EV kit can be used to evaluate the MAX5954A. Replace U1 with the MAX5954A that can be ordered by contacting the factory.

## MAX7313 Input/Output Expander and SMBus Interface

The  MAX5954L  EV  kit  features  a  MAX7313  I/O expander (U2) and PC board pads for connecting to an SMBus system (SDA and SCL signals). The I/O expander interfaces with the PRES-DET , FAULT ,  ON, and OUT signals of the MAX5954L. A 9-pin header, J2, is  provided to enable easy access to each signal through a ribbon cable or scope probe. Green and yellow LEDs (D3, D4) are also provided for user applications  such as status indication. Jumper JU2 (MRL) is provided to mimic a PCI Express mechanical retention locking (MRL) signal. Surface-mount resistors R20-R25 configure the MAX7313 SMBus address, which is set to 0x40 by default.

Table 3. MAX5954L Channel ON Signals Configuration

| JUMPER   | SHUNT LOCATION   | MAX5954L PIN CONNECTION                    | EV KIT OPERATION          |
|----------|------------------|--------------------------------------------|---------------------------|
| JU4      | 1 and 2          | ON controlled by SW3                       | Local switch control      |
| JU3      | 1 and 2          | AUXON controlled by SW4                    | Local switch control      |
| JU4      | 2 and 3          | ON controlled by U2, MAX7313 with SMBus    | SMBus or computer control |
| JU3      | 2 and 3          | AUXON controlled by U2, MAX7313 with SMBus | SMBus or computer control |

If  the  MAX7313 I/O expander is used to control the MAX5954L ON/AUXON signals and read back the various other signals, jumpers JU3 and JU4 must be reconfigured or U2 may be destroyed when switching logic states. See Table 3 below for configuring jumpers JU3 and JU4. Pads are provided on the EV kit's PC board for interfacing with a user's system SMBus VDD, SDA, SCL, and GND signals if the CMAXQUSB interface board is not used.

If  a  user's SMBus system is not available, a Windowsbased computer can be interfaced with the EV kit by connecting the CMAXQUSB interface board to connector  J4.  The  CMAXQUSB interface board enables the computer to interface with the EV kit's SMBus signals. The interface board and GUI software provides the user with the capability of controlling and monitoring the MAX5954L IC using the MAX7313 I/O expander.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

Figure 1. MAX5954L Evaluation Software Main Window for Reading Current EV Kit Status and Sending Commands

<!-- image -->

## Table 4. MAX7313 I/O Port Configuration/Function

| MAX7313 PORT I/O   | PORT P7 (BIT D7)   | PORT P6 (BIT D6)   | PORT P5 (BIT D5)   | PORT P4 (BIT D4)   | PORT P3 (BIT D3)   | PORT P2 (BIT D2)   | PORT P1 (BIT D1)   | PORT P0 (BIT D0)   |
|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Port Config        | OUTPUT             | OUTPUT             | INPUT              | INPUT              | OUTPUT             | OUTPUT             | INPUT              | INPUT              |
| EV Kit Function    | YELLOW LED (D4)    | GREEN LED (D3)     | PRES-DET           | FAULT              | AUXON              | ON                 | OUT                | MRL                |

## Detailed Description of Software

Words in boldface are user-selectable features in the MAX5954L EV kit software. A mouse or the keyboard's tab key is used to navigate various items on the Main Window. Most of the main window's available functions and  a  few  more  can  be  evaluated  by  using  the pulldown  menu .  The  software  features  a  demo mode that is available using the View|Demo Mode pulldown menu.

## Software Startup

Upon starting the program, the MAX5954L EV kit software automatically detects U2 address and configures its  I/O.  See  Table  4  for  U2's  configuration  by  the  software. The MAX5954L EV kit's various status signals are then updated by the program approximately every 500ms. Use the checkboxes to enable/disable various EV  kit  functions  and  then  select  the Execute Command button to send the commands to U2 and/or U1. Deselecting a checkbox disables the command.

<!-- image -->

The software's Status area provides information on the various MAX5954L and PCI Express system signals condition. The MAX7313 U2 SMBus address is provided in hexadecimal and decimal format, respectively. The left bottom status bar of the main window provides the CMAXQUSB interface board communication status. The right bottom status bar provides the current pro-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5954L Evaluation Kit/Evaluation System

Figure 2. 2-Wire Interface Window (Provides Direct, Low-Level Access to the MAX5954L with the MAX7313 and SMBus 2-Wire Interface)

<!-- image -->

gram status and SMBus communication status with respect to U2.

The  MAX5954L  EV  kit  software  configures  the CMAXQUSB interface board's SMBus communication speed to 400kHz by default. The speed can be reduced to 100kHz if required, by selecting the pulldown menu's View|2-Wire Speed|100kHz selection. This may be required if slower SMBus or 2-wire devices are connected to the bus on the EV kit.

## General-Purpose 2-Wire Interface Utility

The general-purpose 2-wire interface utility can also be used to communicate with the MAX7313 and control or read back signals from the MAX7313 and/or MAX5954L. Use the View|Interface pulldown menu to access the utility.  The  utility  configures  the  SMBus  interface  parameters such as start and stop bits, acknowledgements, and clock timing. The 2-wire interface screen allows the user to send general-purpose SMBus commands using the SMBusWriteByte and SMBusReadByte . The inter- face utility only accepts and outputs hexadecimal number format.

The Hunt for active listeners button scans the entire 2-wire address space, reporting each address that is acknowledged. The SMBusWriteByte transmits the device address, command, and one byte of data. The SMBusReadByte transmits the device address, a command, and then retransmits the device address and reads 1 byte of data. For information on the differences between a 2-wire and an SMBus interface, read application note ' Comparing the I 2 C Bus to the SMBus '  at www.maxim-ic.com

General Troubleshooting

Problem: software reports it cannot find the interface board.

- Is the interface board power LED lit?
- Is the USB communications cable connected?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

- Has Windows plug-and-play detected the board? Bring up Control Panel-&gt;System-&gt;Device Manager, and look at what device nodes are indicated for USB. If there is an 'unknown device' node attached to  the  USB,  delete  it-this  forces  plug-and-play  to try again.

## Problem: Unable to find U2 (MAX7313)

- Is power applied to the MAX5954L EV kit VIN2 and VIN3banana jacks?This is required for powering U2.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Are the SCL and SDA signals pulled up to VDD? The CMAXQUSB interface board dip switch SW1 enables the on-board resistors on the interface board. There must be pullup resistors somewhere for the SMBus SCL and SDA signals.
- If  using  jumper  wires  to  connect,  are  the  SCL  and SDAsignals swapped?Is theground return missing?

## MAX5954L Evaluation Kit/Evaluation System

Figure 3. MAX5954L EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX5954L EV Kit Schematic, PCI Express X16 Connectors

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5954L Evaluation Kit/Evaluation System

Figure 5. MAX5954L EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 6. MAX5954L EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5954L Evaluation Kit/Evaluation System

<!-- image -->

Figure 7. MAX5954L EV Kit PC Board Layout-Inner Layer, Ground Plane

<!-- image -->

Figure 8. MAX5954L EV Kit PC Board Layout-Inner Layer, Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5954L Evaluation Kit/Evaluation System

Figure 9. MAX5954L EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 10. MAX5954L EV Kit Component Place Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600