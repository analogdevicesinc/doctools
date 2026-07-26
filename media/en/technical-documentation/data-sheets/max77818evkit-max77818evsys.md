<!-- lastmod 2022-08-05 -->
## MAX781 EV System

## General Description

The MAX77818 evaluation system (EV system) consists of a MAX77818 evaluation kit (EV kit) and a companion Maxim MINIQUSB interface board.

The MAX77818 EV kit is an assembled and tested PC board that demonstrates the MAX77818. The IC contains 12V input and 3A output switching mode charger.

The  Maxim  MINIQUSB  interface  board  allows  an  IBMcompatible  PC  to  use  its  USB  port  to  emulate  an  I 2 C 2-wire  interface.  Windows  XP ® /Windows ®   7  software provides a user-friendly interface to exercise the features of  the  MAX77818.  The  menu-driven  program  offers  a graphical user interface with control buttons.

## Applications

- Smartphones and Tablets
- Other Handheld Devices

## Benefits and Features

- Demonstrates 12V CHGIN , 3A Charge
- Demonstrates m5 Fuel Gauge Performance
- Demonstrates Dual Input Charge
- Demonstrates OTG Mode
- Evaluates MAX77818 Detail Performances

Ordering Information appears at end of data sheet.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX781

## Required Equipment

- IBM PC-compatible computer capable of running Windows XP/Windows 7
- PC with an unused USB port
- Standard Mini-USB cable to connect the computer's USB port to the Maxim MINIQUSB interface board
- DC power supply capable of supplying 15.0V/3A

## Initial Test Setup

Do  not  turn  on  the  DC  power  supplies  until  all connections are made.

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX77818 EV kit with the 20-pin header of the MINIQUSB interface board. Gently press them together. The two boards should be flush against each other.
- 2) Connect a cable from the computer's USB port to the MINIQUSB interface board. Use the USB cable that Maxim provides.
- 3) Install the MAXIM MINIQUSB driver when PC prompts USB device detection.
- 4) Connect a single cell Li-Ion battery to the pads labeled BATT+ and BATT-.
- 5) Connect the DC power supply capable of supplying 15V ±0.2V/3A to the pads labeled VBUS and GND on the MAX77818 EV board.
- 6) Turn on the 5V DC power supply.
- 7) Start the MAX77818 program by opening its icon in the Start menu. The MAX77818.EXE software program can be run from the hard drive using Windows. If desired, use the INSTALL.EXE program to copy the files and create icons for them in the Windows XP/ Window 7 Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 8) Observe as the program automatically detects the address of the MAX77818 and starts the main program.

<!-- image -->

## MAX77818 EV System

## Detailed Description of Software

The  software  provides  an  easy-to-use,  point-and-click method to exercise all of the features of the MAX77818.

The software can control most of function blocks of the MAX77818.

## Main Display

The  charger  current,  top-off  current  level,  and  all  other charger related functions can be programmed in Charger section list boxes. All FG section parameters can be programmed in separate FG GUI.

Evaluates: MAX77818

## Simple 2-Wire Interface Commands

There  are  methods  for  communicating  the  MAX77818 through either the main display or the simple 2-wire interface  commands  available  by  using  the Advanced  Tab and 2-Wire Interface window. A display pops up to allow 2-wire  interface  protocols,  such  as  read  byte  and  write byte to be individually executed. When using the 2-wire interface  general  commands,  uncheck Device-Present Checking to  prevent  any  errors  from  occurring.  The general  command  dialog  boxes  accept  numeric  data  in binary,  decimal,  or  hexadecimal.  Hexadecimal  numbers should be prefixed by $ or 0x. Binary numbers must be exactly 8 bits.

Figure 1. MAX77818 EV Kit GUI Screen

<!-- image -->

│

## MAX77818 EV System

Evaluates: MAX77818

Figure 2. MAX77818 EV Kit Fuel Gauge GUI Screen

<!-- image -->

## Detailed Description of Hardware

## Battery Charger Test Setup

- 1) When using the DC power supply, adjust its voltage and current limit to 5.0V with 3.0A current limited.
- 2) Connect a single cell Li-Ion battery between BATT+ and BATT-.
- 3) Connect the 5.0V/3A current limited DC power supply between VBUS and GND.
- 4) Monitor the DC power supply current meter if the current reading is the same as the fast charge current that is set.
- 5) Open software screen and program the charger settings adequate to your system.
- 6) Use data log equipment to log charge current and VBATT profile while charging a fully discharged single cell Li+ battery.

## Table 1. Jumper Settings

| JUMPER NO.   | DEFAULT POSITION      | FUNCTION                  | PCB SILKSCREEN   |
|--------------|-----------------------|---------------------------|------------------|
| JU8          | Open between JU2: 1-2 | VIO from external or VSYS | VIO              |

│

## MAX77818 EV System

## Fuel Gauge Test Setup

- 1) Close MAX77818 EV kit GUI. Fuel gauge uses a separate GUI.
- 2) Open FG section software screen and see if FG reads proper OCV and SOC while charging.
- 3) Open FG section software screen and see if FG reads proper OCV and SOC while discharging.

Figure 3. Schematic Diagram

<!-- image -->

│

## MAX77818 EV System

## MAX77818 EV System Component List

| PART           |   QTY | DESCRIPTION              |
|----------------|-------|--------------------------|
| MAX77818EVKIT  |     1 | MAX77818 evaluation kit  |
| MAXIM MINIQUSB |     1 | MINIQUSB interface board |

## MAX77818 EV Kit Component List

| DESIGNATION                                        |   QTY | DESCRIPTION                                                                    |
|----------------------------------------------------|-------|--------------------------------------------------------------------------------|
| C1                                                 |     1 | 0.1µF, 35V or 50V, 0402 ceramic capacitor Taiyo Yuden GMK105BJ104MV            |
| C2, C4                                             |     2 | 2.2µF, 16V, 0603, ceramic capacitor Taiyo Yuden EMK107BJ225MA                  |
| C3                                                 |     1 | 4.7µF, 10V, 0603, ceramic capacitor Taiyo Yuden LMK107BJ475MA                  |
| C5, C6                                             |     2 | 1µF, 10V, X5R, 0402, ceramic capacitor Taiyo Yuden LMK105BJ105MV               |
| C8, C12-C14                                        |     4 | 10µF, 10V, X5R, 0603, ceramic capacitor Taiyo Yuden LMK107BBJ106MAL            |
| C9, C10                                            |     2 | 10µF, 16V, X5R, 0603, ceramic capacitor Taiyo Yuden EMK107BBJ106MAL            |
| C11, C15                                           |     2 | 0.1µF, 16V or higher, X5R, 0402, ceramic capacitor Taiyo Yuden EMK105BJ104MP   |
| C16                                                |     1 | N.C.                                                                           |
| C17                                                |     1 | 10nF, 6.3V or higher, X5R, 0402 Taiyo Yuden TMK105BJ103MP                      |
| L1                                                 |     1 | 0.47µH, 2016, TOKO DFE201610P-H-R47M 1µH, 2520, TOKO, DFE252012C 1239AS-H-1R0M |
| CON1                                               |     1 | 2x 10 right-angle female receptacle                                            |
| VBUS, CHGIN, WCIN, VSYS, BATT, BATTGND, CHGPG, GND |    11 | MAXIM LOOP                                                                     |

| DESIGNATION                                                                                                                                 |   QTY | DESCRIPTION                                      |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------|--------------------------------------------------|
| BYPS, ENB, VBUS_DET, SYSS, BATTS, SCL, SDA, INOKB, INTB, WCINOKB, SAFEOUT1, SAFEOUT2, TP1, CHGINS, WCINS, CHGPGS, CHGLXS, DETBATB, THM, VIO |    20 | Test point, small                                |
| R1                                                                                                                                          |     1 | 100kΩ, 1%, resistor, 0402                        |
| R2, R7                                                                                                                                      |     2 | 10kΩ, 1%, resistor, 0402                         |
| R3, R5, R6, R14                                                                                                                             |     4 | 0Ω, 0402                                         |
| R12, R13                                                                                                                                    |     2 | 2.2kΩ, 5%, resistor, 0402                        |
| R15-R17                                                                                                                                     |     3 | 200kΩ, 5%, resistor, 0402                        |
| R9                                                                                                                                          |     1 | 470kΩ, 5%, resistor, 0402                        |
| R10                                                                                                                                         |     1 | 47kΩ, 5%, resistor, 0402                         |
| R4, R11                                                                                                                                     |     2 | N.C.                                             |
| U1                                                                                                                                          |     1 | MAX77818EWZ+ 72-bump WLP, 0.4mm pitch            |
| U2                                                                                                                                          |     1 | MAX14681                                         |
| THM                                                                                                                                         |     1 | 10Ω, 1%, NTC, 0402                               |
| JU1                                                                                                                                         |     1 | Two-pin header                                   |
| JU2-JU11 (socket board only)                                                                                                                |    10 | Two-pin header                                   |
| J7                                                                                                                                          |     1 | Micro B receptacle SMD type Panasonic, AXJ53312G |

Note:

All resistors are 0402 size.

│

## MAX77818 EV System

## PCB Layout Guide

Figure 4. PCB Layout

<!-- image -->

│

Evaluates: MAX77818

Figure 5. PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX77818

Figure 6. PCB Layout-Inner Layer 2

<!-- image -->

Evaluates: MAX77818

Figure 7. PCB Layout-Inner Layer 3

<!-- image -->

## Evaluates: MAX77818

Figure 8. PCB Layout-Bottom Layer

<!-- image -->

## MAX77818 EV System

## Evaluates: MAX77818

Figure 9. PCB Layout-Assembly Top

<!-- image -->

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX77818EVSYS# | EV System |

# Denotes RoHS compliant.

Evaluates: MAX77818

│

## MAX77818 EV System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/15            | Initial release                                                                               | -               |
|                 1 | 8/16            | Updated m5 designation, Detailed Description of Software , Figure 3, and Ordering Information | 1, 2, 4, 12     |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77818