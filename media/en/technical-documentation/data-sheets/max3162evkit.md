<!-- lastmod 2022-08-02 -->
## General Description

The MAX3162 evaluation kit (EV kit) provides a proven design to evaluate the MAX3162 programmable RS-232/ RS-485/422 multiprotocol transceiver. The MAX3162 EV kit  can  be  used  as  an  RS-232  to  RS-485/RS-422  converter and/or an RS-485/RS-422 to RS-232 converter.

The MAX3162 EV kit PCB comes with a MAX3162CAI+ installed.

## Component List

| DESIGNATION                                |   QTY | DESCRIPTION                                                            |
|--------------------------------------------|-------|------------------------------------------------------------------------|
| C1, C4, C5, C6                             |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K    |
| C2                                         |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106M  |
| C3                                         |     1 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |
| GTP1-GTP5                                  |     5 | Test points, black                                                     |
| J1                                         |     1 | DB9 female right-angle recep- tacle, 0.318in D-sub                     |
| J2                                         |     1 | 4-position terminal block                                              |
| JU1-JU6, JU9                               |     7 | 3-pin headers                                                          |
| JU7, JU8, JU10, JU11                       |     4 | 2-pin headers                                                          |
| R1, R3, R4, R6                             |     0 | Not installed, resistors (0603)                                        |
| R2, R5                                     |     2 | 120 I Q 5% resistors (0603)                                            |
| TP1+, TP1-, TP2, TP3, TP4+, TP4-, TP5, TP6 |     8 | Test points, white                                                     |
| VCC                                        |     1 | Test point, red                                                        |
| U1                                         |     1 | Multiprotocol transceiver (28 SSOP) Maxim MAX3162CAI+                  |
| -                                          |     1 | DB9 I/O extension cable                                                |
| -                                          |    11 | Shunts                                                                 |
| -                                          |     1 | PCB: MAX3162 EVALUATION KIT+                                           |

<!-- image -->

## Features

- S 3.0V to 5.5V Single-Supply Operation
- S Converts RS-232 to RS-485/RS-422
- S Converts RS-485/RS-422 to RS-232
- S RS-485 Loopback
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3162EVKIT+ | EV Kit |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX3162 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3162 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX3162 EV kit
- DB9 I/O extension cable (included)
- 5.0V/250mA DC power supply
- User-supplied  Windows M 2000,  Windows  XP M ,  or Windows Vista M PC with a spare RS-232 serial port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX3162 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not  turn  on  power  supply  until  all  connections  are completed.

- 1)  Visit www.maxim-ic.com/evkitsoftware to download the latest version of the EV kit software, 3162Rxx.ZIP. Save the  EV  kit  software  to  a  temporary  folder  and uncompress the ZIP file. The EV kit software consists of the free, open-source terminal emulator, RealTerm (also available from http://realterm.sourceforge.net).
- 2)  Verify that all jumpers (JU1-JU11) are in their default positions, as shown in Table 1.
- 3)  Move the shunts of jumpers JU7 and JU8 to the 1-2 position to enable RS-485 loopback.
- 4)  Connect  the  positive  terminal  of  the  5.0V  supply  to VCC on the EV kit and connect the negative terminal of the 5.0V supply to GND.
- 5)  Connect the DB9 I/O extension cable between the EV kit and the computer's serial port.
- 6)  Start  the  RealTerm  software  by  opening  its  icon  in the Start | Programs menu. The RealTerm software main window appears, as shown in Figure 1. Note: If the serial cable is connected to a serial port other than COM1, bring up the Port tab and open the corresponding serial port.
- 7)  In  the  RealTerm  window,  click  in  the  display  area and type on the keyboard. The digital loopback connection  immediately  relays  each  character  from  the receiver to the transmitter, so each character typed on the keyboard appears in the display area.
- 8)  Move the shunt of jumper JU3 to the 2-3 position to disable the RS-232 transmitter.
- 9)  In the RealTerm window, click in the display area and type  on  the  keyboard.  With  the  RS-232  transmitter disabled,  characters  typed  on  the  keyboard  do  not appear in the display area.

## Detailed Description of Hardware

The MAX3162 evaluation kit (EV kit) provides a proven design to evaluate the MAX3162 programmable RS-232/ RS-485/RS-422 multiprotocol transceiver. The MAX3162 EV kit is configured to bidirectionally convert between the RS-232 and RS-485/RS-422 signals. The DB9 connector (J1)  provides  the  RS-232  connection  to  the  MAX3162 and the terminal block (J2) provides the RS-485 connections to the MAX3162.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3162 Evaluation Kit

Figure 1. RealTerm Software Main Window (Port Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX3162 Evaluation Kit

Table 1. MAX3162 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                 |
|----------|------------------|-------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | SHDN = VCC (enables the MAX3162)                                                                            |
| JU1      | 2-3              | SHDN = GND (shuts down the MAX3162)                                                                         |
| JU2      | 1-2*             | FAST = VCC (enables maximum data rate)                                                                      |
| JU2      | 2-3              | FAST = GND (the RS-232 transmitters and the RS-485/RS-422 driver are slew-rate limited to reduce EMI)       |
| JU3      | 1-2*             | TE232 = VCC (enables RS-232 transmitter output)                                                             |
|          | 2-3              | TE232 = GND (disables RS-232 transmitter output)                                                            |
| JU4      | 1-2*             | DE485 = VCC (enables the RS-485 driver)                                                                     |
| JU4      | 2-3              | DE485 = GND (disables the RS-485 driver)                                                                    |
| JU5      | 1-2*             | RE485 = GND (enables the RS-485 receiver)                                                                   |
| JU5      | 2-3              | RE485 = VCC (disables the RS-485 receiver)                                                                  |
| JU6      | 1-2*             | RE232 = GND (enables the RS-232 receiver)                                                                   |
| JU6      | 2-3              | RE232 = VCC (disables the RS-232 receiver)                                                                  |
| JU7      | 1-2              | RS-485 noninverting receiver input A is driven by the noninverting driver output Y (RS-485 loopback)        |
| JU7      | Open*            | RS-485 noninverting receiver input A is not connected to the noninverting driver output Y (RS-485 loopback) |
| JU8      | 1-2              | RS-485 inverting receiver input A is driven by the inverting driver output Y (RS-485 loopback)              |
| JU8      | Open*            | RS-485 inverting receiver input B is not connected to the inverting driver output Z (RS-485 loopback)       |
| JU9      | 1-2*             | T2IN = GND                                                                                                  |
| JU9      | 2-3              | T2IN = VCC                                                                                                  |
| JU10     | 1-2              | Connects the 120 I termination resistor between the RS-485 inverting and noninverting receiver inputs       |
| JU10     | Open*            | Disconnects the 120 I termination resistor between the RS-485 inverting and noninverting receiver inputs    |
| JU11     | 1-2              | Connects the 120 I termination resistor between the RS-485 inverting and noninverting driver outputs        |
| JU11     | Open*            | Disconnects the 120 I termination resistor between the RS-485 inverting and noninverting driver outputs     |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3162 Evaluation Kit

Figure 2. MAX3162 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX3162 Evaluation Kit

<!-- image -->

Figure 3. MAX3162 EV Kit Component Placement Guide

Figure 4. MAX3162 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX3162 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600