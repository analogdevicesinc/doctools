<!-- lastmod 2022-08-02 -->
## MAX14914 Peripheral Module

## General Description

The MAX14914 peripheral module provides the hardware to evaluate the MAX14914 high-side/push-pull driver that operates as both an industrial digital output (DO) and an industrial digital input (DI). Refer to the MAX14914 IC data sheet for detailed information regarding operation of the IC.

The module can be used in various ways; Maxim sells a low-cost USB2PMB1 adapter board that uses the Munich GUI  software  for  communication  through  a  USB  cable. This  is  not  included with  this  board.  Alternatively,  any microcontroller or FPGA with a 12-pin Pmod TM -compatible connector can be used, but the user needs to adapt the signalling because this is not a standard SPI port. Another option for the user is to wire-wrap a temporary connection from their system to the pins on connector X1.

## Contents

- MAX14914PMB with the MAX14914

## MAX14914PMB

<!-- image -->

Pmod is a trademark of Digilent Inc.

## Features

- Easy Evaluation of the MAX14914
- Configurable as a Digital Input or a High-Side or Push-Pull Digital Output
- Accurate Internal Current Limiter for Types 1, 2, and 3 Digital Inputs
- Support High-Side Current Up to 1.3A with External 24V Supply
- Adjustable Short-Circuit Current Limit
- Safe-Demagnetization for Safe Turn Off of Unlimited Inductance
- Works with USB2PMB1 Adapter and Munich GUI Software
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

Ordering Information appears at end of data sheet.

Evaluates: MAX14914

<!-- image -->

## Quick Start

## Required Equipment

- MAX14914PMB peripheral module
- 24V DC supply (&gt; 1.5A recommended) - not included The following items are Optional:
- USB2PMB1 adapter board
- Mini-USB cable
- Windows XP®, Windows® 7, Windows 8.1, or Windows 10 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

If the USB2PMB1 adapter is used, the user can download software by following the steps below to get started:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  Munich\_GUI  software, version 2.12 or later, Munich\_GUISetupV2.12.ZIP.
- 2) Save the software  to  a  temporary  folder.  Unzip  the .ZIP  file  and  double-click  the  .EXE  file  to  run  the installer.  A  message  box  asking Do  you  want  to allow the following program to make changes to this computer? might appear. If so, click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 4) Connect the MAX14914PMB Pmod connector X1 to the connector on USB2PMB1.
- 5) Connect the USB2PMB1 to the PC with the Mini-USB cable.  Windows  should  automatically  recognize  the device and display a message near the System Icon menu indicating that the hardware is ready to use.
- 6) Once  the  hardware  is  ready  to  use,  launch  the software.  The  status  bar  in  the  GUI  should  display Disconnected in the bottom right-hand corner. Go to the Device tab to select the MAX14914PMB.
- 7) Click Update Once to read the default status of the MAX14914.

## Detailed Description of Software

## Connect to Hardware

The Device menu has options to search and connect to the hardware. Use the Scan Adapters option to search for  the  USB2PMB1  modules  connected  to  the  PC.  If modules are found, the serial numbers of the modules are listed  in  the USB2PMB1s menu  item.  Select  the  serial number in the USB2PMB1s list  to  connect the software to communicate with that module. The software can only communicate to one module at a time only.

## Setting MAX14914 Configuration

The Setting buttons (Figure 1) control the configuration and operating modes for the MAX14914:

DI\_ENA defines the DOI as a digital output (set to 0) or as a digital input (set to 1).

DO\_PP defines  the  mode of DOI, depending upon how DI\_ENA is set. If the MAX14914 is configured as a digital output, DO\_PP selects high-side mode (set to 0) or pushpull mode (set to 1). If the MAX14914 is configured as a digital input, DO\_PP selects type 1/3 mode (set to 0) or type 2 mode (set to 1).

DO\_SET is used when the MAX14914 is configured as a DO; when DO\_SET is 0 the output pin DOI is either high impedance (in high-side mode) or 0V (in push-pull mode). When DO\_SET is 1, the output pin DOI is turned on (24V) in high-side mode or in push-pull mode.

Changing  one  of  these  buttons  causes  changes  to  be made directly to the MAX14914.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## MAX14914 Peripheral Module

## Monitoring MAX14914 Status

Two boxes show the status of the MAX14914 as well as the visual indication from the three LEDs on the PCB.

DIDO\_LVL: Reports the level of DOI pin.

FAULT: Reports  a  FAULT  condition  such  as  thermal shutdown or loss of ground occurs.

Refer to the MAX41914 IC data sheet for more details of the configuration settings.

## Sample

To start continuous monitoring, check the Update Continuously check  box.  For  a  single  status  check, uncheck Update  Continuously and  click  the Update Once button.

## Detailed Description of Hardware

The MAX14914PMB  hardware  provides everything needed  to  evaluate  the  MAX14914,  and  includes  the MAX14914, a screw terminal for the external load or input, and a 24V DC power connector. An on-chip 5V regulator supply's local power to the board for MAX14914 control interface. An  optional  USB2PMB1  module  can  be  used with  the  Munich  GUI  to  provide  the  USB-to-MAX14914 interface to configure and control the MAX14914. Note an external 24V DC supply is required even if used with the USB2PMB1 and a USB cable.

## Pmod-Style Connector

The  MAX14914PMB  can  plug  directly  into  a  Pmodcompatible port through X1. Note the pin definitions are not compatible with SPI, and the user must configure the microcontroller or FPGA to match MAX14914 signals. For more information on the interface and control, refer to the MAX41914 IC data sheet. Three pins are used to configure the  MAX14914  (DO\_SET,  DO\_PP,  and  DI\_ENA),  and three pins are used to monitor the status of MAX14914 (DIDO\_LVL, OV\_VDD, and FAULT). See Figure 2 for the X1 pinout.

## External Supply

An external 24V DC supply is required. The rating of this supply must be aligned to the load connected to X3.

## LEDs

Two LEDs are used to indicate the status of the MAX41914. LED1 (RED) is illuminated if a FAULT condition, such as thermal shutdown or loss of ground, occurs. The FAULT LED reflects  the  status  of  the  MAX41914's FAULT pin. When the LED is on, the FAULT pin is active to indicate that there a fault is occurring. LED3 (GREEN) is illuminated based on the logic level of DOI pin: on for 24V or off for 0V.

The  MAX14914PMB  comes  with  LED2  (YELLOW)  not populated,  but  can  be  added  to  monitor  an  OV\_VDD overvoltage condition  when,  a)  the  device  is  configured for DI operation, or b) the DOI level is higher than VDD (nominally 24V).

## Default Condition

Resistors R7, R8, and R9 are used to initially configure the  MAX14914  as  a  Type  2  DI.  The  user  can  change this  functionality  by  driving  pins  DI\_ENA,  DO\_SET,  and DO\_PP.

## Current Limiting

The  MAX14914  has  a  settable  current  limiting  when  in high-side switch mode. The load current is limited between 135mA (min) and 1.3A (max), depending on the value of the  resistor  used  at  the  CLIM  pin.  The  MAX14914PMB comes with R\_CLIM not populated, meaning the current is  limited  at  1.1A.  If  the  82.5k Ω resistor  is  inserted,  the current limit is 500mA. Refer to the MAX14914 data sheet for full details on current limit adjustment.

## Surge Protection

No external surge suppression is needed on DOI as it is protected  against  surge  pulses  as  per  IEC61000-4-5.  A suppressor/diode D1 is connected between VDD and GND to clamp high-surge transients on the VDD supply input.

│

Evaluates: MAX14914

Figure 1. MAX41914PMB Software (Munich GUI Tab)

<!-- image -->

Evaluates: MAX14914

Figure 2. MAX14914PMB Schematic

<!-- image -->

Figure 3. MAX14914PMB PCB Layout-Top Silkscreen

<!-- image -->

Figure 4. MAX14914PMB PCB Layout-Bottom

<!-- image -->

## MAX14914 Peripheral Module

## Bill of Materials

| DESIGNATION   |   QTY | DESCRIPTION                                   |
|---------------|-------|-----------------------------------------------|
| C1            |     1 | 1µF ceramic capacitor (0805)                  |
| C2            |     1 | 0.1µF ceramic capacitor (0402)                |
| D1            |     1 | 36V diode/TVS                                 |
| X1            |     1 | 12-pin (2x6) right-angle header, 2.54mm pitch |
| X2            |     1 | Female DC power jack                          |
| X3            |     1 | 2-pin terminal block                          |

## Ordering Information

| PART         | TYPE              |
|--------------|-------------------|
| MAX14914PMB# | Peripheral Module |

#Denotes RoHS compliant.

Evaluates: MAX14914

| DESIGNATION   |   QTY | DESCRIPTION                         |
|---------------|-------|-------------------------------------|
| R1-R3         |     3 | 2.7kΩ ±1% resistors (0201)          |
| R4-R9         |     6 | 10kΩ ±1% resistors (0201)           |
| R_CLIM        |     1 | 82.5kΩ ±1% resistor (1206)          |
| LED1          |     1 | Red LED (0402)                      |
| LED2          |     1 | Yellow LED (0402)                   |
| LED3          |     1 | Green LED (0402)                    |
| U1            |     1 | DIO IC (16 TQFN) Maxim MAX14914ATE+ |
| -             |     1 | PCB: MAX41914PMB#                   |

## MAX14914 Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX14914