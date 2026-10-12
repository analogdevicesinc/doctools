<!-- lastmod 2022-08-02 -->
## MAX79356 G3-PLC Sniffer Kit

## General Description

The  MAX79356  G3-PLC  sniffer  dongle  is  a  lightweight test  and  monitoring  device  for  G3-PLC  powerline  com -munication  networks.  Accompanied  by  a  user-friendly Windows ® application, this portable sniffer enables cap -turing  and  analysis  of  data  and  command  packets  on powerline. A multifunction button allows the user to con -veniently  change  the  frequency  band  to  CENELEC-A, CENELEC-B, FCC, or ARIB. The sniffer dongle is pow -ered by a standard mini-USB port that can be connected to a power bank and used as a handheld test device in the field to check the signal phase and quality.

## Sniffer Kit Content

- ● One G3-PLC sniffer dongle with power cord
- ● One mini-USB cable

## Safety Notes

WARNING: Exercise  extreme  caution  once  connecting the device to the AC line. Ignoring the safety requirements can lead to shock, injury, and damage of the hardware.

Ordering Information appears at end of data sheet.

## Sniffer Dongle Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Benefits and Features

- ● Low Power, Lightweight, and Portable, Operating on Cold Wire, DC, or 110-240VAC, 50Hz/60Hz
- ● Single FW Supports G3-PLC Standard CENELEC-A, CENELEC-B, FCC, and ARIB Frequency Bands as Well as Proprietary FCC-High Band
- ● Captures and Displays Packets on PC with a Windows Graphic Application
- ● Demonstrates Color Coded and Time-Stamped G3-PLC PHY and MAC Frames Including Beacons, Bootstrapping, Routing, Tonemap Response, ACK/NACK and Data Packets
- ● Configurable Decryption Keys Enable Real-Time Display of Decrypted Packets
- ● Channel Analyzer Function Graphically Visualizes the Channel Quality of Each OFDM Tone
- ● One-Click Report Generation for Statistical Analysis of Network Stability, Topology, and Communication Quality
- ● Programmable for Frequency Notching Support
- ● Integrated Firmware Update Utility for Future Upgrades
- ● A Must-Have Stand-Alone Tool in the Field for PLC Installers and Professionals That Significantly Reduces the Installation Troubleshooting by Providing Signal Quality and Phase Information and Enabling Site Surveys

<!-- image -->

## Detailed Description

Powered by Maxim's pioneer multiband G3-PLC chipset, the  MAX79356  sniffer  dongle  works  both  as  a  sniffer device for monitoring and analyzing packets in powerline networks  and  as  a  handy  portable  test  tool  in  the  field to  verify  installations  and  diagnose  the  communica -tion  problems. The  sniffer  is  preloaded  with  a  universal band FW that supports G3-PLC standard CENELEC-A, CENELEC-B, FCC and ARIB bands as well as the pro -prietary  FCC-high  band  (320kHz-487kHz).  The  band selection is done using a multifunction pushbutton on the dongle. A mini-USB cable (provided) is used to connect it  to  a  PC.  All  necessary  Windows  drivers  are  installed automatically and it is identified as a COM port.

## Operation

The isolated power cord attached to the dongle is con -nected directly to AC, DC, or cold-wire line. If it is used as a sniffer, the mini-USB port is connected to a PC and sniffer application ( G3-PLC Sniffer Application section) is launched. In case it is used as a stand-alone tester, the mini-USB should be connected to a standard 5VDC USB supply port such as a power bank (recommended).

## Changing Frequency Band

By pressing the multifunction pushbutton, the frequency band is switched to the next band and red LED blinks to the number associated with each band:

- 1) CENELEC-A (default)
- 2) FCC
- 3) ARIB
- 4) FCC-High
- 5)  CENELEC-B

## G3-PLC Sniffer Application

The  application  communicates  with  the  sniffer  dongle through the installed COM port. Figure 1 shows the cap -ture of packets. The upper window shows the packets in tabular format with highlight of most frequently used infor -mation. The lower window shows the content of the select -ed packet with main fields dissected. The channel analyzer provides  a  measure  of  signal  quality  for  different  tones. Figure 2 shows an example of channel quality in presence of a strong 350kHz interference. To display the content of encrypted packets, the decryption function is chosen and appropriate network keys are updated in the sniffer.

The  application  is  also  capable  of  generating  graphical reports for a live sniffing session. The report displays the statistics of packet modulation. LQI distribution, Tonemap response analysis, percentage of usage of each subband, distribution of types of packets and number of discovered neighbors. Figure 3 displays an example of the report.

## Sniffer as a Standalone Test Tool

Sniffer  dongle  can  be  powered  through  a  5VDC  USB power bank (not included) and used as a test tool.

Channel  Quality: Upon  receiving  a  packet,  one  of  the colored  LEDs  blinks  to  show  the  quality  of  the  channel for  that  packet  with  green/yellow/red  indicating  good/ medium/bad quality, respectively.

Phase Difference: To monitor the phase difference of the transmitter of the packet with the sniffer, press and hold the  multifunction  button  for  2s.  The  phase  difference  is represented by color of 3 LEDs as shown in Table 1 (see the polarity in schematics).

## Firmware Upgrade

If  a  new  release  of  firmware  is  available,  the  integrated flash update utility in the Program menu of G3-PLC Sniffer GUI can be conveniently used to upgrade the firmware.

## MAX79356 G3-PLC Sniffer Kit

Figure 1. G3-PLC Sniffer GUI

<!-- image -->

Figure 2. Channel Quality Analyzer Showing Strong 350kHz Interference

<!-- image -->

## MAX79356 G3-PLC Sniffer Kit

Figure 3. Report Generation Using the Live Packets

<!-- image -->

Table 1. LED Colors Representing the Phase Difference of Sniffer to the Transmitter

| PHASE DIFFERENCE   | LED COLORS   | LED COLORS   | LED COLORS   |
|--------------------|--------------|--------------|--------------|
| PHASE DIFFERENCE   | GREEN        | YELLOW       | RED          |
| Same Phase         | X            |              |              |
| 60-Degree Lead     |              | X            |              |
| 120-Degree Lead    |              |              | X            |
| Opposite Phase     |              | X            | X            |
| 120-Degree Lag     | X            |              | X            |
| 60-Degree Lag      | X            | X            |              |
| Unavailable        | X            | X            | X            |

## MAX79356 G3-PLC Sniffer Kit

## Ordering Information

| PART         | TYPE               |
|--------------|--------------------|
| MAX79356SNF# | G3-PLC sniffer kit |

# Denotes RoHS compliance.

## General Specification

| Size           | 3 x 1.25 x 1 (in)                         |
|----------------|-------------------------------------------|
| Weight         | 4oz                                       |
| Power Supply   | 5VDC, 250mW                               |
| Port           | Mini-USB                                  |
| AC Connection  | 110-240VAC, 50/60Hz                       |
| Protocol       | G3-PLC                                    |
| Frequency Band | CENELEC-A, CENELEC-B, FCC, ARIB, FCC-High |
| Buttons        | One multifunction                         |
| LEDs           | 3                                         |

## MAX79356 G3-PLC Sniffer Kit

## MAX79356 SNIFFER EV Kit Bill of Materials

| DESIGNATION                  |   QTY | DESCRIPTION                          |
|------------------------------|-------|--------------------------------------|
| C1                           |     1 | SMT (0805) 22µF 35V 20% capacitor    |
| C2                           |     1 | SMT (0402) 4.7µF 10V 20% capacitor   |
| C3, C6                       |     2 | SMT (0805) 1µF 25V 10% capacitors    |
| C4, C8, C21, C22, C26, C27   |     6 | SMT (0402) 0.1µF 25V 10% capacitors  |
| C5, C11, C15, C17, C18, C24  |     6 | SMT (0402) 1 µ F 25V 20% capacitors  |
| C7                           |     1 | SMT (0805) 4.7µF 50V 10% capacitors  |
| C9, C10                      |     2 | SMT (0402) 47pF 50V 5% capacitors    |
| C12                          |     1 | SMT (0805) 10µF 35V 10% capacitors   |
| C13, C14, C16, C19, C20, C25 |     6 | SMT (0402) 0.1µF 35V 10% capacitors  |
| C23                          |     1 | SMT (0402) 1nF 25V 5% capacitor      |
| C29, C32                     |     2 | SMT (0402) 0.22µF 16V 10% capacitors |
| C30, C31                     |     2 | SMT (0402) 27pF 50V 5% capacitors    |
| C33                          |     1 | SMT (0603) 0.68µF 50V 20% capacitor  |
| C34                          |     1 | TH-LD POL 1µF 450V 5% capacitor      |
| C35                          |     1 | SMT (1812) 1.5µF 100V 10% capacitor  |
| D1                           |     1 | RECT; (SOD-123F) 30V 2A              |
| D2, D3                       |     2 | SS; (SOT-23) PIV = 175V 0.6A         |
| D4                           |     1 | LED; TH RED VF = 2V 0.02A            |
| D5                           |     1 | LED; TH GRN VF=2.1V 0.02A            |
| D7, D8                       |     2 | SS; 1N4148 DO-35 100V 0.2A           |
| D10                          |     1 | LED; TH YEL VF = 2.1V 0.02A          |
| D11                          |     1 | LED; BLU (0603) 3.2V 0.02A           |
| F1                           |     1 | FUSE FAST SMT 1.25A 125V             |

| DESIGNATION                  |   QTY | DESCRIPTION                          |
|------------------------------|-------|--------------------------------------|
| F2                           |     1 | FUSE SLOW (1206) 1A 63V              |
| FB1-FB5                      |     5 | SMT (0603) FB 1500 .3A 25%           |
| J1                           |     1 | Mini-USB B-TYPE SMT RA 5P            |
| L1, L3                       |     2 | SMT (0805) 10 µ H 0.19A 10%          |
| L2                           |     1 | SMT (1210) 1mH 0.1A 10%              |
| Q1                           |     1 | NPN SOT-23 225mW .1A 30V             |
| R5, R7                       |     2 | SMT (0402) 27Ω 0.063W 1% resistors   |
| R9, R11, R20, R23, R27       |     5 | SMT (0402) 10KΩ 0.063W 1% resistors  |
| R12, R13                     |     2 | SMT (0603) 0Ω 0.25W 0% resistors     |
| R14, R17, R22, R24, R33, R34 |     6 | SMT (0603) 100Ω 0.125W 1% resistors  |
| R15                          |     1 | SMT (0603) 4.99kΩ 0.125W 1% resistor |
| R21                          |     1 | SMT (0402) 1MΩ 0.063W 1% resistor    |
| R26                          |     1 | SMT (1206) 110Ω 0.25W 1% resistor    |
| R28, R30-R32                 |     4 | SMT (1206) 68kΩ 0.25W 5% resistors   |
| R29                          |     1 | SMT (1206) 18kΩ 0.25W 5% resistor    |
| SW1                          |     1 | TL1105 SPST TH RA 12V switch         |
| TX1                          |     1 | VITEC XMR TH 10P (1.0 : 1.5)         |
| U1                           |     1 | MAX16910CASA8 VREG                   |
| U2                           |     1 | FT234XD USB-UART DFN12               |
| U3                           |     1 | TCMT1107 OPTOCOUPLER                 |
| U10                          |     1 | MAX79356ECM+ ZENO IC                 |
| Y1                           |     1 | CRYSTAL; TH 18PF 16MHZ               |
| Z1-Z3                        |     3 | TVS SMC DO-214AB 10V 88A             |
| Z4                           |     1 | TVS SMC PIV = 440V; IF = 2.1A        |

## MAX79356 G3-PLC Sniffer Kit

## MAX79356 SNIFFER EV Kit Schematics

<!-- image -->

## MAX79356 G3-PLC Sniffer Kit

## MAX79356 SNIFFER EV Kit Schematics (continued)

<!-- image -->

## MAX79356 G3-PLC Sniffer Kit

## MAX79356 SNIFFER EV Kit Schematics (continued)

<!-- image -->

## MAX79356 G3-PLC Sniffer Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/17            | Initial release                                                                                                                                                                             | -               |
|                 1 | 6/18            | Updated General Description , Benefits and Features , Detailed Description , Changing Frequency Band , Firmware Upgrade , and General Specification for CENELEC-B band and notching support | 1, 2, 5         |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.