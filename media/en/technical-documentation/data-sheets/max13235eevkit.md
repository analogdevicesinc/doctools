<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX13235E Evaluation Kit

## General Description

The MAX13235E evaluation kit (EV kit) provides a proven design to evaluate the MAX13235E, a 3Mbps RS-232 transceiver with low-voltage interface and enhanced electrostatic discharge (ESD) protection. This EV kit demonstrates the MAX13235E in a 20-pin TSSOP package. The MAX13235E is also available in a 20-pin TQFN package with an exposed pad, but that package is not compatible with this EV kit.

The MAX13235E EV kit PCB comes with a MAX13235EEUP+ installed,  which is  the  3Mbps data-rate version. The MAX13235E EV kit can also be used to evaluate the MAX13234E (250kbps data-rate version). Contact the factory  for  free  samples  of  the  pin-compatible MAX13234EEUP+ to evaluate this device.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 10_F ±20%, 16V X5R ceramic capacitors (1206) Murata GRM31CR61C106M |
| C3-C6         |     4 | 0.1_F ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| J1            |     1 | Female RS-232 DB9 connector                                        |
| J2            |     1 | Dual-row (2 x 4) 8-pin header                                      |

Features

- ♦ 3V to 5.5V Single-Supply Operation
- ♦ 3Mbps RS-232 Data Rate
- ♦ Low-Voltage Logic Interface
- ♦ Digital Loopbacks
- ♦ RS-232 Loopbacks
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13235EEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| JU1-JU4       |     4 | 3-pin headers                                           |
| JU5, JU6      |     2 | 2-pin headers                                           |
| U1            |     1 | 3Mbsp RS-232 transceiver (20 TSSOP) Maxim MAX13235EEUP+ |
| -             |     6 | Shunts                                                  |
| -             |     1 | PCB: MAX13235E EVALUATION KIT+                          |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX13235E when contacting these component suppliers.

## MAX13235E Evaluation Kit

Figure 1. RealTerm Software Main Window (Port Tab)

<!-- image -->

## Quick Start

## Recommended Equipment

- MAX13235E EV kit
- DB9 I/O extension cable included
- Two 5V/100mA DC power supplies
- User-supplied Windows ® 2000/XP ® or Windows Vista ® PC with a spare RS-232 serial port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX13235E EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download the latest version of the EV kit software, 13235Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file. The EV kit software consists of the free, open-source terminal emulator, RealTerm (also available from http://realterm.sourceforge.net).
- 2) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1 and JU2 to enable normal operation.
- 3) Verify that shunts are installed across pins 1-3 and pins 5-7 of the J2 connector to enable the digital loopback.
- 4) Verify that shunts are not installed on jumpers JU3-JU6.
- 5) Connect the positive terminal of the first 5V supply to  the  VCC  pad.  Connect the negative terminal of the first 5V supply to the GND pad.
- 6) Connect the positive terminal of the second 5V supply to the VL pad. Connect the negative terminal of the second 5V supply to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13235E Evaluation Kit

- 7) Connect the DB9 I/O extension cable between the EV kit and the computer's serial port.

## Detailed Description of Hardware

- 8) Start  the  RealTerm software by opening its icon in the Start | Programs menu. The RealTerm software main window appears, as shown in Figure 1. Note: If the serial cable is connected to a serial port other than COM1, bring up the Port tab and open the corresponding serial port.
- 9) In  the  RealTerm window, click in the display area and type on the keyboard. The digital loopback connection immediately relays each character from the receiver to the transmitter, so each character typed on the keyboard appears in the display area.
- 10) Move the shunt on jumper JU2 to pins 2-3 to disable the MAX13235E.

The MAX13235E EV kit provides a proven design to evaluate the MAX13235E, a 3Mbps RS-232 transceiver with  low-voltage interface and enhanced ESD protection. Capacitors C3-C6 are used by the charge pump to generate the V+ and V- supplies from VCC.

Header J2 provides the digital connections to the MAX13235E. Header J2 also allows digital loopback by placing shunts across pins 1-3 and 5-7.

## Jumpers

Jumpers JU1 and JU2 control the MAX13235E powermanagement signals. Jumpers JU3 and JU4 can be used to set the logic level of T1IN and T2IN. Jumpers JU5 and JU6 allow RS-232 loopback.

- 11) In  the  RealTerm window, click in the display area and type on the keyboard. With the MAX13235E disabled, characters typed on the keyboard do not appear in the display area.

## EV Kit I/O Connections

The MAX13235E EV kit features a dual-row (2 x 4) 8-pin header (J2) for interfacing with logic signals. The J2 header and a DB9 connector (J1) are available to interface with an RS-232 serial line.

## Table 1. MAX13235E EV Kit Jumper Descriptions

| JUMPER   | SIGNAL           | SHUNT POSITION   | DESCRIPTION                                                                                       |
|----------|------------------|------------------|---------------------------------------------------------------------------------------------------|
| JU1      | FORCEON          | 1-2*             | FORCEON = VL                                                                                      |
| JU1      | FORCEON          | 2-3              | FORCEON = GND                                                                                     |
| JU2      | FORCEOFF         | 1-2*             | FORCEOFF = VL                                                                                     |
| JU2      | FORCEOFF         | 2-3              | FORCEOFF = GND                                                                                    |
| JU3      | T1IN             | Open*            | T1IN connects to pin 1 of J2 connector                                                            |
| JU3      | T1IN             | 1-2              | T1IN = VL                                                                                         |
| JU3      | T1IN             | 2-3              | T1IN = GND                                                                                        |
| JU4      | T2IN             | Open*            | T2IN connects to pin 7 of J2 connector                                                            |
| JU4      | T2IN             | 1-2              | T2IN = VL                                                                                         |
| JU4      | T2IN             | 2-3              | T2IN = GND                                                                                        |
| JU5      | RS-232 Loopback  | 1-2              | R1IN is driven by T1OUT from U1. Data received from digital side loops back at RS-232 connection. |
| JU5      | RS-232 Loopback  | Open*            | R1IN is not connected to T1OUT                                                                    |
| JU6      | RS-232 Loopback  | 1-2              | R2IN is driven by T2OUT from U1. Data received from digital side loops back at RS-232 connection. |
| JU6      | RS-232 Loopback  | Open*            | R2IN is not connected to T2OUT                                                                    |
| J2       | Digital Loopback | 1-3              | T1IN is driven by R1OUT from U1. Data received from RS-232 side loops back at digital connection. |
| J2       | Digital Loopback | Open*            | T1IN is not connected to R1OUT                                                                    |
| J2       | Digital Loopback | 5-7              | T2IN is driven by R2OUT from U1. Data received from RS-232 side loops back at digital connection. |
| J2       | Digital Loopback | Open*            | T2IN is not connected to R2OUT                                                                    |

*Default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13235E Evaluation Kit

Figure 2. MAX13235E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13235E Evaluation Kit

<!-- image -->

Figure 3. MAX13235E EV Kit Component Placement Guide

<!-- image -->

Figure 4. MAX13235E EV Kit PCB Layout-Component Side

Figure 5. MAX13235E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5