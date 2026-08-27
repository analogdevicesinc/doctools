<!-- lastmod 2022-08-03 -->
## General Description

The MAX5427 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX5427 digital potentiometer. Included software generates the required signals for one-time-programmable operation and allows easy control of the wiper position. An on-board 8-pin µMAX ® socket eases replacement of the device. The EV kit is designed to be connected to a standard IBM-compatible PC-parallel (printer) port.

Windows ® 95/98/2000-compatible software provides a user-friendly interface to exercise the MAX5427's features. The program is menu driven and offers a graphic user interface with control buttons. ( Note: Windows 2000 requires the installation of a driver; refer to Win2000.pdf or Win2000.txt located on the diskette for information.)

This EV kit can also be used to evaluate the MAX5428 and MAX5429 digital potentiometers.

Windows is a registered trademark of Microsoft Corp. µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                          |
|---------------|-------|------------------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475M                                     |
| C2            |     1 | 22µF ±20%, 16V X5R ceramic capacitor (1812) TDK C4532X7R1C226M                                       |
| D1            |     1 | Green surface-mount LED                                                                              |
| D2            |     1 | Dual Schottky diode (SOT23) Diodes Inc BAT54C or Fairchild BAT54C or General Semiconductor or BAT54C |
| J1            |     1 | DB-25 right-angle plug (male)                                                                        |
| R1            |     1 | 1.6k Ω ±5% resistor (1206)                                                                           |
| U1            |     1 | 8-pin µMAX socket Wells-CTI 656-1082211                                                              |

<!-- image -->

## Features

- ♦ On-Board 8-Pin µMAX Socket
- ♦ Windows 95/98/2000 Evaluation Software
- ♦ Software Adjusts and Programs Wiper Position
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5427EVKIT | 0°C to +70°C | 8 µMAX       |

Note: To evaluate the MAX5428 or the MAX5429, request a free sample of MAX5428EUA or MAX5429EUA with the MAX5427EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| U1*           |     5 | Digital potentiometer (8-pin µMAX) MAX5427EUA         |
| U2            |     1 | Low-voltage, analog switch (6-pin SOT23) MAX4544EUT   |
| U3            |     1 | Low-voltage level translator (10-pin µMAX) MAX1840EUB |
| -             |     1 | MAX5427 PC board                                      |
| -             |     1 | 3 1/2in software disk MAX5427 evaluation kit          |
| -             |     1 | MAX5427 data sheet                                    |
| -             |     1 | MAX5427 EV kit data sheet                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX5427 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Diodes Inc.             | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild Semiconductor | 888-522-5372 | -            | www.fairchildsemi.com |
| General Semiconductor   | 760-804-9258 | 760-804-9259 | www.gensemi.com       |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Wells-CTI               | 623-581-5330 | 623-780-3987 | www.wellscti.com      |

Note: Indicate that you are using the MAX5427 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying between 2.7V and 5.5V at 100mA
- One fixed DC power supply capable of supplying 11V at 20mA
- One ohmmeter
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A computer running Windows 95, 98, or 2000. ( Note: Windows 2000 requires the installation of a driver;  refer  to  Win2000.pdf or Win2000.txt located on the diskette for information.)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX5427EVKIT

## Procedure

The MAX5427 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a cable from the computer's parallel port to  the  MAX5427EVKIT. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or  any  other  connector  that  is  physically  similar  to the  25-pin  parallel  printer  port.  The  parallel  port  is typically labeled LPT or PRINTER.
- 2) Adjust the variable power supply to 5V.
- 3) Ensure that the variable power supply is turned off.
- 4) Ensure that the fixed 11V power supply is turned off.
- 5) Connect the positive terminal of the variable power supply to the pad labeled VDD.
- 6) Connect the ground return of the variable power supply to the corresponding pad labeled GND.
- 7) Connect the positive terminal of the fixed 11V power supply to the pad labeled VPP.
- 8) Connect the ground return of the fixed 11V power supply to the corresponding pad labeled GND.
- 9) Connect the positive terminal of the ohmmeter to the pad marked H.
- 10) Connect the ground return of the ohmmeter to the pad marked W.
- 11) Install  the  software  by  running  the  INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000 Start menu.
- 12) Turn on the 5V variable power supply.
- 13) Turn on the 11V fixed power supply.
- 14) Start the MAX5427 program by opening its icon in the Start menu.
- 15) Wait until the program automatically detects the MAX5427 and displays the main window (Figure 1). The MAX5427 is now in its default power-on-reset (POR) mode (wiper is at midscale for an unprogrammed device).

## Detailed Description of Software

Use the mouse or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to commands used to set the wiper position or program the device. Note: Words in boldface indicate user-selectable features in the software.

## Wiper Control

The wiper position is adjusted sequentially through the tap positions using a simple 2-wire interface. To increment the wiper position, press the Up button. To decrement the wiper position, press the Down button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Program Control

To set the power-on position of the wiper, press the Program button. Checking the Disable Interface checkbox disables the 2-wire interface, preventing further unwanted adjustment. Refer to the One-Time Programming section of the MAX5427/MAX5428/ MAX5429 data sheet for more details.

## Resetting the MAX5427

The Disable Parallel Port checkbox is used to reset the digital  potentiometer at power-up. Checking this box forces all of the parallel port lines to a logic low (0V),  ensuring  that  the  device  is  not  powered  through the interface. To reset the device, do the following:

- 1) Turn off the power supply connected to VPP.
- 2) Turn off the power supply connected to VDD.

## MAX5427 Evaluation Kit

- 3) Check the Disable Parallel Port checkbox.
- 4)  Disconnect any power supply connected to the H, W, and L pads.
- 5) Turn on the power supply connected to VDD.
- 6) Turn on the power supply connected to VPP.
- 7) Uncheck the Disable Parallel Port checkbox.

## Detailed Description of Hardware

The MAX5427 EV kit is a complete programming platform for the MAX5427 digital potentiometer. Parallel port signals are level translated through a MAX1840 to ensure reliable operation. The EV kit also includes an 8-pin µMAX socket to ease the programming of multiple devices.

<!-- image -->

Figure 1. MAX5427 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5427 Evaluation Kit

Figure 2. MAX5427 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX5427 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX5427 Evaluation Kit

Figure 4. MAX5427 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX5427 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5