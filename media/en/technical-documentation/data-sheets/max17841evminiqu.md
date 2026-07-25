<!-- lastmod 2022-08-03 -->
## MAX17841B Evaluation Kit

## General Description

The MAX17841B evaluation kit (EV kit) demonstrates the capabilities  of  the  MAX17841B  automotive  SPI  communication interface (ASCI) IC, in conjunction with a Maxim high-voltage  data-acquisition  system  (MHVDAS).  The MAX17841B allows the connection of multiple high-voltage data-acquisition IC EV kits, supporting up to a 32-device (max) daisy-chain configuration.

## Benefits and Features

- Supports Maxim's Battery-Management UART Protocol
- SPI Interface Up to 4MHz
- Supports ASIL Requirements
- Windows XP ® -, Windows Vista ® -, Windows ®  7-, and Windows 10-Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Quick Start

The following procedure describes the setup and testing of  a  two-module-distributed  daisy-chained  system  using any  of  the  Maxim  high-voltage  data-acquisition  system (MHVDAS). The user can choose to configure as many EV kit  modules  as  needed,  based  on  their  system  and testing requirements.

## Required Equipment

- MAX17841B EV kit (includes the MINIQUSB)
- MHVDAS EV kit (two (min))
- Maxim command module (MINIQUSB)
-  MINIQUSB board
- MINIQUSB-XHV board (do not use this board)
- DC power supplies (refer to the respective MHVDAS IC data sheet for recommended operating ranges)
- User-supplied Windows XP-, Windows Vista-, Windows 10-, or Windows 7-compatible PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluates: MAX17841B

## Procedure

The  MAX17841B  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not enable the power supplies until all connections are completed.

- 1) Install the EV kit software on your PC by running the installer package of the MHVDAS.
- 2) Connect  the  MINIQUSB  module  to  the  J3  and  J4 headers on the MAX17841B EV kit.
- 3) Connect the USB cable from the PC to the MINIQUSB board. A Building Driver Database window pops up in addition to a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen like the one described above after 30s, remove the USB cable from the MINIQUSB and reconnect  it.  Administrator  privileges  are  required  to install the USB device driver on Windows XP, Windows Vista, Windows 10, and Windows 7.
- 4) Appropriate  FTDI  drivers  may  need  to  be  downloaded and installed from the website at http://www.ftdichip.com/Drivers/D2XX.html .
- 5) Ensure  that  all  jumper  shunts  and  switches  are configured, as shown in Table 1.
- 6) Configure the DC power supplies for the MHVDAS for 18V and disable their outputs.
- 7) Connect the grounds of each power supply together, and then connect this common ground to AGND on the MAX17841B EV kit.
- 8) Connect the first 18V supply between the PACK+ and PACK- PCB pads on the MHVDASEV kit.
- 9) Connect the second 18V supply between the PACK+ and PACK- PCB pads on the second MHVDAS EV kit (if applicable).
- 10) Connect the 2-wire blue crossover cables as described below:
- Connect P1 on the MAX17841B EV kit to the appropriate port of the MHVDAS EV kit.
- Connect P2 on the MAX17841B EV kit to the appropriate port of the MHVDAS EV kit.
- Any daisy-chain MHVDAS ICs should be configured accordingly (refer to the respective MHVDAS EV kit data sheet for details).
- 11) Enable the DC power supply.
- 12) Start the appropriate MHVDAS EV kit software. The MHVDAS EV  kit  software  automatically  establishes a connection with the MAX17841B EV kit. Typically, a  status  bar  at  the  bottom  of  the  GUI  will  display MAX17841 Detected , so proceed to the next step.
- 13) The EV kit is now ready for further evaluation. Refer to the respective MHVDAS EV kit data sheet and GUI for details on how to proceed with evaluation.

## Description of Software

The MAX17841B EV kit is evaluated in conjunction with the  MHVDAS  graphical  user  interface  (GUI)  evaluation software.  The  GUI  provides  a  friendly  environment  for reading  and  writing  to  all  device  registers,  as  well  as executing several device commands and evaluating the functionality of the IC.

The GUI provides shutdown/enabling of the MAX17841B device, waking up the device, as well as the communication with the MHVDAS IC.

## Table 1. MAX17841B EV Kit Default Jumper Settings

| JUMPER            | SHUNT POSITION   |
|-------------------|------------------|
| JU1-JU4, JU6, JU7 | On one pin only  |
| JU5               | 1-2              |

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17841EVMINIQU# | EV Kit |

#Denotes RoHS compliant.

│

## MAX17841B EV Kit Bill of Materials

| REFERENCE DESIGNATOR               |   QTY. | DESCRIPTION                                                                 | MFG. PART NO.                  | RoHS AND LEAD-FREE COMPLIANT?   |
|------------------------------------|--------|-----------------------------------------------------------------------------|--------------------------------|---------------------------------|
| AGND, DCIN, GNDL (X2)              |      4 | 20G tinned copper Bus wire formed into 'U' shaped loops (0.25' off the PCB) |                                |                                 |
| ALRMOV, ALRMUV                     |      2 | LED, Red (0603)                                                             | LITE-ON LTST-C190EKT           |                                 |
| /CS\, DIN, DOUT, SCLK, VAA         |      5 | Miniature Test Points, Red                                                  | KEYSTONE 5000                  |                                 |
| C1, C7                             |      2 | 1μF ±10%, 16V X7R ceramic capacitors, automotive grade (0603)               | Murata GCM188R71C105KA64D      | Yes                             |
| C2, C3                             |      2 | 15pF ±5%, 100V C0G ceramic capacitors, automotive grade (0603)              | Murata GCM1885C2A150J          | Yes                             |
| C6                                 |      1 | 0.01uF ±10%, 25V X7R ceramic capacitors (0603)                              | Murata GRM188R71E103K          | Yes                             |
| C8                                 |      1 | 0.1uF ±10%, 50V X7R ceramic capacitor (0603)                                | Murata GRM188R71H104K          |                                 |
| C10-13                             |      4 | 2200pF ±10%, 630V U2J ceramic capacitors, auto grade (1206)                 | Murata GCM31A7U2J222JX01D      |                                 |
| C10-13                             |      4 | 2200pF ±10%, 630V X7R ceramic capacitors (1206)                             | TDK C3216X7R2J222K             |                                 |
| C24, C25                           |      2 | 1nF ±10%, 630V X7R ceramic capacitors, auto grade (1206)                    | Murata GCJ31BR72J102KXJ1L      |                                 |
| D1                                 |      1 | ESD protection diodes (SOT-23)                                              | NXP Semiconductors PESD1CAN    |                                 |
| D2-D7                              |      6 | Unidirectional ESD protection diodes (SOD323)                               | NXP Semiconductors PESD5V0U1UA |                                 |
| D9                                 |      1 | Schottky diode (SOT-23)                                                     | Fairchild Semiconductor BAT54  |                                 |
| GPIO7, GPIO8, RX_N (x2), TX_N (x2) |      6 | Multipurpose Test Points, Black                                             | KEYSTONE 5011                  |                                 |
| J1, J2, J4                         |      3 | 8 pin receptacles (0.1in centers)                                           | Samtec SSW-108-01-T-S          |                                 |
| J3                                 |      1 | 2x8 pin straight double-row header, 0.1in centers                           | Sullins PEC36DAAN              |                                 |
| J5, J6                             |      2 | 6-pin female receptacle, 0.1in centers                                      | Samtec SSW-106-01-T-S          |                                 |
| J7                                 |      1 | 6 pin right angle header, 0.1in centers                                     | SAMTEC TSW-106-08-S-S-RA       |                                 |
| JU1, JU2, JU3, JU4,                |      4 | 2 pin headers (0.1in centers)                                               | Sullins PEC36SAAN              | Yes                             |
| JU5                                |      1 | 3 pin headers (0.1in centers)                                               | Sullins PEC36SAAN              |                                 |
| LED3                               |      1 | LED, Yello (0603)                                                           | LITE-ONLTST-C190YKT            |                                 |
| L1, L2                             |      2 | Custom Transformer, 8-pin (9.0mm x 9.2mm)                                   | Sumida CEP99-102               |                                 |
| P1, P2                             |      2 | 2-circuit CLIK-Mate Vertical PCB Receptacle, 1.50mm pitch                   | Molex 5025840270               |                                 |
| R1, R2                             |      2 | 470 ±5%, resistors (0805)                                                   |                                |                                 |
| R3, R4, R18                        |      3 | 100kΩ ±5%, resistors (0603)                                                 |                                |                                 |
| R5, R6                             |      2 | 47Ω ±5 resistors (0603)                                                     |                                |                                 |
| R7                                 |      1 | 100Ω ±5% resistors (0603)                                                   |                                |                                 |
| R8                                 |      1 | 10kΩ ±5% resistors (0603)                                                   |                                |                                 |
| R9-R11                             |      3 | 470Ω ±5% resistors (0603)                                                   |                                |                                 |
| R12                                |      1 | 1.5MΩ ±5% resistors (0603)                                                  |                                |                                 |
| R13                                |      1 | 25.5kΩ ±1% resistors (0603)                                                 |                                |                                 |
| U1                                 |      1 | Daisy-Chainable Analog Front End (16L TSSOP)                                | Maxim MAX17841BGUE/V+          | Yes                             |
| U2                                 |      1 | High-Performance Flash Microcontorller (6L SOT-23)                          | Microchip PIC10F222E/OT        |                                 |
| 3.3V, 5V , RX_P (x2), TX_P (x2)    |      6 | Multipurpose Test Points, Red                                               | KEYSTONE 5010                  | Yes                             |
| -                                  |      6 | Shunts                                                                      | Sullins: STC02SYAN             | Yes                             |
| -                                  |      1 | PCB: MAX17841 EVKIT                                                         | Maxim MAX17841EVMINIQU#        | Yes                             |
| NOT INSTALLED COMPONENTS           |        |                                                                             |                                |                                 |
| ALRML-N, ALRML_N                   |      0 | Multipurpose Test Points, Black                                             | KEYSTONE 5011                  |                                 |
| ALRML-P, ALRML_P                   |      0 | Multipurpose Test Points, Red                                               | KEYSTONE 5010                  |                                 |
| C14, C15                           |      0 | Not Installed, 2200pF ±10%, 630V X7R ceramic capacitors, auto grade (1206)  |                                |                                 |
| C16                                |      0 | Not Installed, 0.1uF ±10%, 50V X7R ceramic capacitor (0603)                 | Murata GRM188R71H104K          |                                 |
| C17, C18, C20-C23, C26, C27, C28   |      0 | Not installed, ceramic capacitors (0603)                                    |                                |                                 |
| C19                                |      0 | Not Installed, 0.1uF ±10%, 50V X7R ceramic capacitor (0603)                 |                                |                                 |
| D8                                 |      0 | Not installed, Unidirectional ESD protection diodes (SOD323)                |                                |                                 |
| JU6, JU7                           |      0 | Not Installed, 2 pin headers (0.1in centers)                                |                                |                                 |
| L3                                 |      0 | Not Installed, Custom Transformer, 8-pin (9.0mm x 9.2mm)                    |                                |                                 |
| P3                                 |      0 | Not installed, 2-circuit CLIK-Mate Vertical PCB Receptacle, 1.50mm pitch    |                                |                                 |
| RX_CT, TX_CT, ALRML_CT             |      0 | Not installed, miniature test points                                        | KEYSTONE 5000                  |                                 |
| R12                                |      0 | Not Installed, 1.5MΩ ±5% resistors (0603)                                   |                                |                                 |
| R13                                |      0 | Not Installed, 25.5kΩ ±1% resistors (0603)                                  |                                |                                 |
| R14, R15                           |      0 | Not Installed, 15kΩ ±5% resistors (0603)                                    |                                |                                 |
| R16, R17                           |      0 | Not Installed, 10kΩ ±5% resistors (0603)                                    |                                |                                 |
| U3                                 |      0 | Not Installed, High-Speed, Low-Voltage Rail-to-Rail I/O Comparator          | Maxim MAX987EUK+               |                                 |

## MAX17841B EV Kit Schematic

<!-- image -->

## MAX17841B EV Kit Schematic (continued)

<!-- image -->

│

## MAX17841B EV PCB Layouts

MAX17841B EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX17841B EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX17841B EV PCB Layouts (continued)

MAX17841B EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

MAX17841B EV Kit PCB Layout-Layer 3 (GND)

<!-- image -->

│

## MAX17841B EV PCB Layouts (continued)

MAX17841B EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSlied  Ma[iP InWegraWed reserYes Whe righW Wo change Whe circuiWry and sSecificaWions ZiWhouW noWice aW any WiPe  7he SaraPeWric Yalues  Pin and Pa[ liPiWs shoZn in Whe (lecWrical CharacWerisWics Wable are guaranWeed Other parametric values quoted in this data sheet are provided for guidance.

<!-- image -->

│

Evaluates: MAX17841B