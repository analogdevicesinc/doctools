<!-- lastmod 2022-08-03 -->
## General Description

The MAX5527 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX5527 digital potentiometer. Included software generates the required signals for one-time-programmable (OTP) operation and allows easy control of the wiper position. An on-board 8-pin µMAX ® socket eases replacement of the device. The EV kit connects to a standard IBM-compatible PC parallel (printer) port.

Windows ® 98/2000/XP-compatible software provides a user-friendly interface to exercise the MAX5527's features. The program is menu driven and offers a graphic user interface.

This EV kit can also be used to evaluate the MAX5528 and MAX5529 digital potentiometers.

Windows is a registered trademark of Microsoft Corp.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475M                                  |
| C2            |     1 | 22µF ±20%, 16V X5R ceramic capacitor (1812) TDK C4532X5R1C226M                                    |
| D1            |     1 | Green surface-mount LED                                                                           |
| D2            |     1 | Dual Schottky diode (SOT23) Diodes Inc BAT54C or Fairchild BAT54C or General Semiconductor BAT54C |
| J1            |     1 | DB-25 right-angle plug (male)                                                                     |
| R1            |     1 | 1.6k Ω ±5% resistor (1206)                                                                        |

<!-- image -->

## Features

- ♦ On-Board 8-Pin µMAX Socket
- ♦ Windows 98/2000/XP Evaluation Software
- ♦ Software Adjusts and Programs Wiper Position
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX5527EVKIT | 0°C to +70°C | 8 µMAX       |

Note: To evaluate the MAX5528 or the MAX5529, request a free  sample of the MAX5528GUA or MAX5529GUA with the MAX5527EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| U1            |     1 | 8-pin µMAX socket Wells-CTI 656-1082211                |
| U1**          |     5 | Digital potentiometer (8-pin µMAX) MAX5527GUA          |
| U2            |     1 | Low-voltage, analog switch (6- pin SOT23) MAX4544EUT   |
| U3            |     1 | Low-voltage level translator (10- pin µMAX) MAX1840EUB |
| -             |     1 | MAX5527 EV kit PC board                                |
| -             |     1 | MAX5527 EV kit software, CD-ROM*                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX5527 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Diodes Inc.             | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| General Semiconductor   | 760-804-9258 | www.gensemi.com       |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| Wells-CTI               | 623-581-5330 | www.wellscti.com      |

Note: Indicate that you are using the MAX5527/MAX5528/ MAX5529 when contacting these component suppliers.

## MAX5527 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files to the PC        |
| MAX5527.EXE  | Application program                        |
| UNIST.INI    | Uninstalls the EV kit software             |
| PORT95NT.EXE | LPT driver required by the EV kit software |

## Quick Start

## Recommended Equipment

- DC power supply capable of supplying between 2.7V and 5.5V at 100mA
- A fixed DC power supply capable of supplying 11V at 20mA
- An ohmmeter
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A  computer  running  Windows  98/2000/XP Note: The DriverLINX Port I/O LPT driver must be installed  on  this  machine.  If  it  is  not,  run the PORT95NT.EXE program included with the EV kit software.
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX5527EVKIT

## Procedure

The MAX5527 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a cable from the computer's parallel port to  the  MAX5527EVKIT. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or  any  other  connector  that  is  physically  similar  to the  25-pin  parallel  printer  port.  The  parallel  port  is typically labeled LPT or PRINTER.
- 2) Adjust the variable power supply to 5V.
- 3) Ensure that the variable power supply is turned off.
- 4) Ensure that the fixed 11V power supply is turned off.
- 5) Connect the positive terminal of the variable power supply to the pad labeled VDD.
- 6) Connect the ground return of the variable power supply to the corresponding pad labeled GND.
- 7) Connect the positive terminal of the fixed 11V power supply to the pad labeled PV.
- 8) Connect the ground return of the fixed 11V power supply to the corresponding pad labeled GND.
- 9) Connect the positive terminal of the ohmmeter to the pad marked H.
- 10) Connect the ground return of the ohmmeter to the pad marked W.
- 11) Install  the  software  by  running  the  INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows Start menu.
- 12) Turn on the 5V variable power supply.
- 13) Turn on the 11V fixed power supply.
- 14) Start the MAX5527 program by opening its icon in the Start menu.
- 15) Wait until the program automatically detects the MAX5527 and displays the main window (Figure 1). The MAX5527 is now in its default power-on-reset (POR) mode (wiper is at midscale for an unprogrammed device).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description of Software

Each button corresponds to a command used to set the wiper position or program the device.

## Wiper Control

The wiper position is adjusted sequentially through the tap positions using a simple 2-wire interface. To increment the wiper position, press the Up button. To decrement the wiper position, press the Down button.

## Programming OTP

To program the power-on-reset (POR) wiper position into the MAX5527's OTP memory:

- 1) Set the Lockout Bit checkbox appropriately
- Checked disables up/down digital interface after programming.
-  Unchecked enables up/down digital interface after programming.
- 2) Adjust  wiper  to  desired  position  using Up and Down .
- 3) Press the Program OTP button.

.

Note: The wiper is still adjustable using the Up and Down buttons immediately after OTP programming with  the Lockout Bit checked. The wiper will not be locked until a complete power cycle occurs, which includes disabling the parallel port. Follow the directions in the Resetting the MAX5527 section to perform a complete power cycle.

<!-- image -->

Figure 1. MAX5527 EV Kit Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5527 Evaluation Kit

## Resetting the MAX5527

To reset the device:

- 1) Turn off the power supply connected to PV.
- 2) Turn off the power supply connected to VDD.
- 3)  Check the Disable Parallel Port checkbox. (This ensures the device is not powered through the interface.)
- 4)  Disconnect any power supply connected to the H, W, and L pads.
- 5) Turn on the power supply connected to VDD.
- 6) Turn on the power supply connected to PV.
- 7) Uncheck the Disable Parallel Port checkbox.

## Detailed Description of Hardware

The MAX5527 EV kit is a complete programming platform for the MAX5527 digital potentiometer. Parallel port signals are level translated through a MAX1840 to ensure reliable operation. The EV kit also includes an 8-pin µMAX socket to ease the programming of multiple devices.

## MAX5527 Evaluation Kit

Figure 2. MAX5527 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX5527 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX5527 Evaluation Kit

Figure 4. MAX5527 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX5527 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5