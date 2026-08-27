<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The DS8005 evaluation kit (EV kit) conveniently evaluates the  capabilities  of  the  DS8005  dual  smart  card  interface chip. The EV kit includes a MAXQ622 16-bit RISC microcontroller to control the smart card interface. One full-size socket,  as  well  as  one  SIM  card  socket,  is  included  to communicate  with  a  1.8V,  3V,  or  5V  IC  card.  An  LCD screen and/or serial port can provide detailed feedback on program operations and aids in debugging applications. In addition, the MAXQ622 has a built-in USB serial interface engine (SIE) to allow USB card reader applications.

## EV Kit Contents

- DS8005	EV	kit	board	features	a	MAXQ622	low-power microcontroller,  SIM  and  SAM  smart  card  sockets, DB9 female serial connector, serial cable, USB Mini-B connector, power supply, and LCD screen.
- JTAG	interface	board	(in-application	debugging).
- DS8005	 EV	 kit	 CD	 includes	 evaluation	 kit	 sample code, schematics, and data sheets.

Ordering Information appears at end of data sheet.

| DESIGNATION                                  |   QTY | DESCRIPTION                                             |
|----------------------------------------------|-------|---------------------------------------------------------|
| C1, C2, C6-C11, C13, C22, C24, C27, C28, C30 |    14 | 100nF, 16V ceramic X7R capacitors (0603) ECJ-1VB1C104K  |
| C3, C4, C5, C12, C16-C18                     |     7 | 1µF, 10V ceramic X7R capacitors (0603) LMK107B7105KA-T  |
| C14, C15                                     |     2 | 43pF Q 5%, 50V C0G capacitors (0603) GRM1885C1H430JA01D |
| C19, C20, C25, C26                           |     4 | 18pF Q 5%, 50V C0G capacitors (0603) GRM1885C1H180JA01D |
| C21, C29                                     |     2 | 220nF, 16V ceramic X7R capacitors (0603) C1608X7R1C224K |
| C23                                          |     1 | 10µF Q 10%, 10V ceramic X7R capacitor (1206)            |
| CN1                                          |     1 | USB receptacle (Mini-B)                                 |
| D1                                           |     1 | TVS Schottky diode                                      |

## DS8005 Evaluation Kit Evaluates: DS8005

## Features

- S Quickly Develop Smart Card Applications Using Maxim's Example Code and Easily Port to Any MAXQ RISC Microcontroller
- S 2-Line LCD Screen for Graphical User Interface
- S USB Interface for Prototyping USB Card Reader Applications
- S Two Card Sockets (One Full-Size Socket and One SIM Socket) for Prototyping Smart Card Applications
- S Single 5V Power-Supply Input with an On-Board 3.3V Regulator
- S Card Interface Pins Brought Out to Headers for Customer Card Socket
- S Pushbuttons for Reset, Interrupt, and Application Control
- S Level-Shifted RS-232 Interface
- S Schematics and BOM Provides a Proven Solution for New Designs
- S Proven PCB Layout
- S Fully Assembled and Tested

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| D2            |     1 | Blue LED HSMR-C150                                     |
| D3            |     1 | Orange LED HSMD-C150                                   |
| D4            |     1 | Red LED HSMS-C150                                      |
| D5            |     1 | Green LED HSMG-C150                                    |
| F1            |     1 | 2A, 125V surface-mount fuse Picofuse 0459002.UR        |
| FB1           |     1 | SMD chip ferrite bead, 2000 I Steward HZ1206C202R-00   |
| J1            |     1 | 2.5mm power jack with tapered PC pins CUI Inc. PJ-102B |
| J2            |     1 | DB-9 female header 1734348-1                           |
| J3            |     1 | 10-pin (2 x 5), 0.1in. spaced JTAG headers PEC05DAAN   |

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| J4, J8        |     2 | 6-pin 1 x 6), 0.1in spaced headers PEC06SAAN    |
| J5            |     1 | 20-pin (2 x 10), 0.1in spaced headers PEC10DAAN |
| JU1, JU4-JU7  |     5 | 2-pin jumpers PEC02SAAN                         |
| JU2, JU3      |     2 | 3-pin jumpers PEC03SAAN                         |
| R1            |     1 | 330 I resistor ERJ-6GEYJ331V                    |
| R2            |     1 | 4.7 I resistor CRCW25124R70JNEG                 |
| R3, R4, R5    |     3 | 270 I resistors ERJ-6GEYJ271V                   |
| R6            |     1 | 10k I potentiometer ST4ETB103                   |
| R7            |     1 | 1k I resistor CRCW08051K00FKEA                  |
| R8, R9        |     2 | 10k I resistors CRCW080510K0FKEA                |
| SW1-SW5       |     5 | Momentary tact switches TL3301AF160QG/TR        |
| TP1-TP4       |     4 | Test points 5012                                |

## Table 1. Jumper Settings

| JUMPER   | SETTING       | DESCRIPTION                                                                                                                         |
|----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Open          | JTAG dongle is not able to supply power to the board; an external power source (i.e., power jack) is needed to program the MAXQ622. |
| JU1      | Closed        | JTAG dongle supplies power to the board and no external power source (i.e., power jack) is needed.                                  |
| JU2      | Closed (V50)  | Connects the 5V supplies directly to the VBUS pin on the MAXQ622.                                                                   |
| JU2      | Closed (VBUS) | Connects VBUS to the VBUS pin on the MAXQ622. This should be used only if the board relies on the USB for power.                    |
| JU3      | Closed (V33)  | 3.3V is supplied to the smart card interface supply.                                                                                |
| JU3      | Closed (V50)  | 5V is supplied to the smart card interface supply.                                                                                  |
| JU4      | Open          | No power is supplied to the U6 device.                                                                                              |
| JU4      | Closed        | 3.3V is supplied to the U6 device.                                                                                                  |
| JU5      | Open          | Breaks the smart card interface power-supply connection (JH3 setting)                                                               |
| JU5      | Closed        | Closes the smart card interface power-supply connection (JH3 setting)                                                               |

## DS8005 Evaluation Kit

## Evaluates: DS8005

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| U1            |     1 | 1A, 3.3V LDO linear regulator Maxim MAX8869EUE33+                 |
| U2            |     1 | RS-232 transceiver Maxim MAX3381ECUP+                             |
| U3            |     1 | LCD module 20 x 2 character with LED LCM-S02002DSF                |
| U4            |     1 | 16-bit RISC microcontroller with USB SIE Maxim MAXQ622            |
| U5            |     1 | Dual high-speed differential ESD-protection IC Maxim MAX3207EAUT+ |
| U6            |     1 | Dual SIM card interface (SO version) Maxim DS8005                 |
| XC1           |     1 | Smart card EMV wiping contact C702 10M008 2724 A                  |
| XC2           |     1 | SM Card without alignment pins C707 10M006 0492                   |
| XY1           |     1 | Crystal socket strip (strip of 64) 801-43-064-10-002000           |
| Y1            |     1 | 12MHz crystal, 18pF SMD ECS-120-18-5G3XDS-TR                      |

## Table 1. Jumper Settings (continued)

Figure 1. DS8005 EV Kit with Jumpers Labeled

| JUMPER   | SETTING   | DESCRIPTION                                                                                                                                                                                                                      |
|----------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU6      | Open      | The interface A card presence indicator (SIM/SAM card) is pulled up to 3.3V. This pin is active-high.                                                                                                                            |
| JU6      | Closed    | The interface A card presence indicator (SIM/SAM card) is connected to ground. This pin is active-high.                                                                                                                          |
| JU7      | Open      | The MAXQ622 is not able to supply a clock signal to the U6 device; an external clock is needed in socket XY1.                                                                                                                    |
| JU7      | Closed    | Either the MAXQ622 or external clock can supply a clock signal to the DS8005. If the MAXQ622 is used, pin 6 of port 0 (TBB0) needs to be used to provide the clock signal. Otherwise, an external clock is needed in socket XY1. |

<!-- image -->

## DS8005 Evaluation Kit Evaluates: DS8005

## Detailed Description

This  EV  kit  board  should  be  used  with  the  following documents:

- DS8005	data	sheet
- MAXQ622	data	sheet
- MAXQ	Family	user's	guide
- MAXQ612/MAXQ622	user's	guide

The  EV  kit  should  also  be  used  with  App  Note  5388: Getting  Started  with  the  DS8005  Evaluation  Kit ,  as  it describes how to bring up and build simple applications for the EV kit board.

The  EV  kit  board  is  fully  defined  in  the  schematics. However,	a	 short	 description	 of	 the	 major	 components and connectors of the boards follow.

## LCD Module

A  Lumex  2-line,  20-character  LCD  screen  is  included in  the EV kit board, part number LCM-S02002DSF. It is interfaced	to	the	MAXQ622's	GPIO.	The	example	code contains software for initializing and writing characters to the LCD screen.

## DS8005 Evaluation Kit Evaluates: DS8005

## Smart Card and SIM Card Socket

The EV kit includes one SAM socket and one SIM card socket.  The  sockets  allow  developers  to  quickly  prototype  applications  that  require  one  or  two  smart  card interfaces.

## USB Interface

The EV kit  provides  USB  connectivity  using  the  built-in SIE on the MAXQ622, which contains everything necessary  to  implement  a  full-speed  USB  peripheral  compliant  to  the  USB  2.0  specification  without  any  additional hardware. This provides an ideal solution for applications such as a PC-based USB card reader.

## Serial Port

The EV kit provides a level-shifted RS-232 interface for additional output and debugging purposes. The example code utilizes the UART on the MAXQ622 to display the output to the serial port.

## Programming the DS8005 EV Kit

Refer to App Note 5388: Getting Started with the DS8005 Evaluation Kit document for details on loading a program onto the EV kit board.

Figure 2. DS8005 EV Kit Board

<!-- image -->

## DS8005 Evaluation Kit

## Evaluates: DS8005

Figure 3a. DS8005 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## DS8005 Evaluation Kit

## Evaluates: DS8005

Figure 3b. DS8005 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## Ordering Information

| PART       | TYPE   |
|------------|--------|
| DS8005-KIT | EV Kit |

## DS8005 Evaluation Kit Evaluates: DS8005

## DS8005 Evaluation Kit

## Evaluates: DS8005

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.