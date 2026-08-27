<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAXQ1004 evaluation kit (EV kit) provides a proven platform  for  conveniently  evaluating  the  capabilities of  the  MAXQ1004  1-Wire M /SPI™  authentication  microcontroller.  The  EV  kit  includes  the  MAXQ1004  EV  kit board, which contains an on-board USB-to-JTAG loader/ debugger interface using the MAXQ610 microcontroller, off-board connectors for the 1-Wire and SPI communications  interfaces,  two  GPIO-controlled  pushbuttons  and two  LED  indicators  for  application  use,  and  headers providing access to all I/O pins on the MAXQ1004. With the included software and a USB cable connected to a Windows M PC, the EV kit provides a complete, functional system  ideal  for  developing  and  debugging  applications as well as evaluating the overall capabilities of the MAXQ1004 RISC microcontroller.

## EV Kit Contents

- S MAXQ1004 EV Kit Board with 16-Pin TQFN MAXQ1004 Installed

## Additional Documentation/ Software

This EV kit must be used with the following documents:

- MAXQ1004	IC	Data	Sheet
- MAXQ1004	User's	Guide
- MAXQ1004	EV	Kit	Data	Sheet	(this	document)
- MAXQ1004-KIT	Quick	Start	Guide

These documents are included in the MAXQ1004 EV kit software package, along with additional documentation and application notes. Download the latest version of the EV kit software package at www.maximintegrated.com/ MAXQ1004-KIT .

Ordering Information appears at end of data sheet.

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

SPI is a trademark of Motorola, Inc.

Windows is a registered trademark of Microsoft Corp.

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

## Features

- S Easily Loads and Debugs Code Using On-Board USB-to-JTAG Interface
- S JTAG Interface Provides In-Application Debugging Features
-  Step-by-Step Execution Tracing
-  Up to Four Simultaneous Hardware Breakpoints by Code Address
-  Data Memory or Register Content View and Edit
- S On-Board 3.3V (Powered by USB) and 2.5V (Powered by 1-Wire Bus) Voltage Supplies
- S Two GPIO-Connected Pushbuttons for Application Use
- S Two GPIO-Connected LEDs for Application Use
- S 1-Wire and SPI Connectors for Off-Board Use

## Component List

| DESIGNATION                   |   QTY | DESCRIPTION                                                     |
|-------------------------------|-------|-----------------------------------------------------------------|
| CN1                           |     1 | USB Mini-B connector TE Connectivity 1734035-2                  |
| C1                            |     1 | 10nF, 50V ceramic capacitor (0603)                              |
| C2                            |     1 | 4.7 F F, 10V ceramic capacitor (0805)                           |
| C3, C4, C8, C9, C10, C11, C13 |     7 | 100nF, 16V ceramic capacitors (0603)                            |
| C5                            |     1 | 10 F F, 10V ceramic capacitors (0805)                           |
| C6, C7, C12                   |     3 | 1.0 F F, 10V ceramic capacitors (0603)                          |
| DN1                           |     1 | Dual fast-switching diode, 200mW 75V Diodes Inc. MMBD4448DW-7-F |
| DS1, DS2                      |     2 | Surface-mount, 660nm red LEDs (1206) Lumex SML-LX1206SRC-TR     |
| D1                            |     1 | 5.6V Zener diode, 200mW ON Semiconductor MM5Z5V6ST1G            |
| JH1, JH2, JH4, JH5, P3, P4    |     6 | 2x1 header pins, 0.100in spaced Sullins PEC02SAAN               |
| JH3                           |     1 | 1x3 header pins, 0.100in spaced Sullins PEC03SAAN               |
| J1                            |     1 | Right-angle PCB mount RJ11 jack Molex 95009-2447                |
| P1, P2                        |     2 | 2x5 header pins, 0.100in spaced Sullins PEC05DAAN               |

| DESIGNATION              |   QTY | DESCRIPTION                                             |
|--------------------------|-------|---------------------------------------------------------|
| P5                       |     1 | 1x6 header pins, 0.100in spaced Sullins PEC06SAAN       |
| Q1                       |     1 | SOT23 n-channel MOSFET Fairchild FDV301N                |
| R1                       |     1 | 10 I Q 1%, 1/10W SMD resistor (0603)                    |
| R2, R3, R12, R13         |     4 | 475k I Q 1%, 1/10W SMD resistors (0603)                 |
| R4, R8                   |     2 | 10k I Q 1%, 1/10W SMD resistors (0603)                  |
| R5, R6, R7, R9, R10, R11 |     6 | 182 I Q 1%, 1/10W SMD resistors (0603)                  |
| SW1, SW2, SW3            |     3 | SPST normally-open pushbutton switches Omron B3FS-1000P |

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| TP1-TP5       |     5 | Test points                                                                         |
| U1            |     1 | USB-to-serial translation IC FTDI FT232RL 28-SSOP                                   |
| U2            |     1 | 2.5V LDO regulator Maxim MAX1726EUK25+T (5 SOT23)                                   |
| U3            |     1 | 1-Wire and SPI authentication microcontroller Maxim MAXQ1004-B01+ (16 TQFN-EP*)     |
| U4            |     1 | 16-bit microcontroller (used for JTAG interface) Maxim MAXQ610B-0000+ (40 TQFN-EP*) |
| -             |     1 | PCB: MAXQ1004 Evaluation Kit                                                        |

Figure 1. MAXQ1004 EV Kit Board

<!-- image -->

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

Figure 2. MAXQ1004 EV Kit Board Functional Layout

<!-- image -->

## Detailed Description of Hardware

## Power Supply

The EV board should normally be powered by connecting  a  standard  USB  interface  cable  (A-to-mini-B)  from connector CN1 on the EV board to a PC. This allows the board  to  draw  power  directly  over  the  +5V  supply  on the USB port. The built-in +3.3V linear regulator on the FT232RL IC (U1) is normally used to generate the V DD power rail used by the MAXQ1004 and the MAXQ610.

If the MAXQ1004 kit is 'free-running,' that is, the user is running an application that has been previously loaded on the MAXQ1004, and does not need to use the loader or  debugger,  it  is  not  necessary  to  connect  the  USB cable. In this configuration, the EV kit can be powered by connecting a regulated DC bench supply to pin JH3.2

(MAXQ1004  VDD/AVDD).  Refer  to  the  MAXQ1004  IC data sheet for allowable power-supply range values.

## GPIO Pushbuttons and Indicator LEDs

The  two  pushbuttons  on  the  bottom  side  of  the  EV  kit (SW2 and SW3) are connected to the MAXQ1004 GPIO pins  P0.1  (SW3)  and  P0.0  (SW2).  If  the  pushbutton  is pressed, it pulls the attached port pin low. The label indicating which port pin is connected to the switch is found on the board below the switch.

If jumper JH4 is closed, the GPIO pin P0.2 can be used to  drive  LED  DS1.  If  P0.2  is  driven  low,  then  LED  DS1 lights; otherwise, it is dark.

If jumper JH5 is closed, the GPIO pin P0.3 can be used to  drive  LED  DS2.  If  P0.3  is  driven  low,  then  LED  DS2 lights; otherwise, it is dark.

## MAXQ610 and the JTAG Loader/ Debug Interface

The  MAXQ610  microcontroller  (U4)  is  preloaded  with interface  firmware  that  provides  a  link  between  the JTAG loader/debug interface on the MAXQ1004 and the serial port output from the FTDI USB-to-serial bridge IC. This  firmware  handles  commands  that  are  transmitted by  application  development  and  debugging  software running	 on	 the	 PC,	 such	 as	 MTK,	 MAX-IDE,	 or	 IAR M Embedded Workbench environment.

Under  normal circumstances, the firmware in the MAXQ610  should  not  be  altered.  If  it  is  necessary  to update or change the JTAG loader/debug firmware, the standard	MAXQ	JTAG	loader	tools	(such	as	MTK)	can be used to do so, using any of the available MAXQ JTAG interface boards and the P2 JTAG connector.

## FTDI USB-to-Serial Bridge

The FTDI USB-to-serial interface IC (U1, FT232RL) provides  an  interface  between  a  virtual  COM  port  running on the PC and the MAXQ610 over a USB-to-serial link. Refer to the MAXQ1004-KIT Quick Start Guide for details on  installing  and  configuring  the  FTDI  drivers  required for this interface to operate correctly. The FT232RL also provides the +3.3V regulated supply (used by all devices on the EV kit) and a direct 12MHz digital clock (used by the MAXQ610 only).

## Reset Pushbutton

Pushbutton  SW1  can  be  used  to  manually  reset  the MAXQ1004.  Normally,  this  should  only  be  done  when the part is free-running, that is, when the loader/debug interface is not in use, or when the part is running with a breakpoint set in the debugger (not during step-by-step tracing  mode).  Triggering  a  manual  reset  when  code

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

is  being loaded to the part or during active debugging mode can cause the development environment to lose communications with the part, which means that the project session may have to be restarted and the application reloaded in order to continue.

## 1-Wire Interface and Power Over 1-Wire

The EV kit can optionally be configured to operate using a  'parasite  power'  supply  mode,  where  all  power  to operate the MAXQ1004 is drawn from the 1-Wire signal line. Using this supply scheme, power is 'captured' from the  1-Wire  line  during  high  signal  periods  using  diode DN1, and energy is stored in capacitor C4. This supply voltage (which is at the 1-Wire line voltage) is regulated down to +2.5V by linear regulator U2.

To configure the MAXQ1004 to run using this power supply, set JH3 to pins 2+3 (VDD+V25). However, this only powers the MAXQ1004. The MAXQ610 (and the accompanying FTDI device) does not operate from this supply, which means that the application code must already be loaded  into  the  MAXQ1004  (the  MAXQ1004  must  be free-running).

There are additional considerations when using this type of  power  supply.  If  a  standard  1-Wire  pullup  is  being used, the energy stored in the parasite power capacitor can only power the MAXQ1004 for a brief time. The length of time that the MAXQ1004 can run before exhausting the parasite power supply varies depending on the operating frequency and activity of the MAXQ1004, as well as the resistance of the pullup on the 1-Wire line.

[For  a  more  detailed  discussion  of  this  topic,  refer  to Application  Note  4255: How  to  Power  the  Extended Features of 1-Wire® Devices .](http://www.maxim-ic.com/AN4255)

## Jumper Function List

Table 1 details the functions of the EV kit's configurable jumpers. Settings marked with '  ' indicate jumper placements  that  should  be  used  for  most  normal  operation (default settings).

Table 1. Configurable Jumper Setting Functions

| JUMPER   | SETTING                  | EFFECT                                                                                                                                                                  |
|----------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JH1      | Open                     | No supply is connected to the V DD pin on the MAXQ1004. This setting should not normally be used.                                                                       |
| JH1      |  Closed                 | The VDD on-board supply (normally +3.3V) is connected to the V DD pin on the MAXQ1004.                                                                                  |
| JH2      | Open                     | No supply is connected to the AVDD pin on the MAXQ1004. This setting should not normally be used.                                                                       |
| JH2      |  Closed                 | The VDD on-board supply (normally +3.3V) is connected to the AVDD pin on the MAXQ1004.                                                                                  |
| JH3      | Open                     | No power supply source is connected to the VDD on-board supply. If this setting is used, an appropriate DC bench supply should be connected to pin JH3.2 (VDD) and GND. |
| JH3      |  Closed (1+2, MVDD+VDD) | The VDD on-board supply is powered by the +3.3V regulated output from the FT232RL IC (which is also the MVDD supply used by the MAXQ610).                               |
| JH3      | Closed (2+3, VDD+V25)    | This setting should not normally be used, unless the parasite power option is required. This setting leaves the MAXQ610 and the FT232RL unpowered.                      |
| JH4      | Open                     | LED DS1 is disabled.                                                                                                                                                    |
| JH4      |  Closed                 | LED DS1 can be lit by driving GPIO pin P0.2 low.                                                                                                                        |
| JH5      | Open                     | LED DS2 is disabled.                                                                                                                                                    |
| JH5      |  Closed                 | LED DS2 can be lit by driving GPIO pin P0.3 low                                                                                                                         |
| P3       | N/A                      | Not a configuration jumper. Pin P3.1 provides access to the 1-Wire data line on the MAXQ1004.                                                                           |
| P4       | N/A                      | Not a configuration jumper. Pin P4.2 provides access to the AN0 pin (ADC input) on the MAXQ1004.                                                                        |

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

## MAXQ1004 Evaluation Kit Evaluates: MAXQ1004

Figure 3. MAXQ1004 EV Kit Schematic

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAXQ1004-KIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt unde the RoHS requirements.

## MAXQ1004 Evaluation Kit

## Evaluates: MAXQ1004

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/11            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.