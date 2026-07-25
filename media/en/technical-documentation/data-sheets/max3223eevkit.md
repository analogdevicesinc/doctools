<!-- lastmod 2022-08-02 -->
## MAX3223E Evaluation Kit

## General Description

The MAX3223E evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX3223E  1μA  supply  cur -rent,  1Mbps,  3.0V  to  5.5V,  RS-232  transceivers  with AutoShutdown™.

The MAX3223E EV kit PCB comes with a MAX3223EEUP+ installed.

AutoShutdown is a trademark of Maxim Integrated Products, Inc.

## Component List

| DESIGNATION            |   QTY | DESCRIPTION                                                       |
|------------------------|-------|-------------------------------------------------------------------|
| C1-C5                  |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K  |
| C6                     |     1 | 10µF ±20%, 16V X5R ceramic capacitor (1206) Murata GRM31CR61C106M |
| H1, H2                 |     2 | 10-pin headers                                                    |
| H3                     |     1 | 6-pin header                                                      |
| J1                     |     1 | DB9 female right-angle receptacle                                 |
| JU1, JU2, JU3, JU5-JU8 |     7 | 3-pin headers                                                     |
| JU4, JU9, JU10, JU11   |     4 | 2-pin headers                                                     |

## Component Suppliers

| SUPPLIER                                | WEBSITE                     |
|-----------------------------------------|-----------------------------|
| Murata Electronics, North America, Inc. | www.murata-northamerica.com |
| TDK Corp.                               | www.component.tdk.com       |

Note: Indicate that you are using the MAX3223E when contacting these component suppliers.

Evaluates: MAX3223E

## Features

- Single-Supply Operation
- 6-Pin Signal Header
- DCE-Connected DB9 Socket
- Digital Loopbacks
- RS-232 Loopbacks
- Hardware Handshake Loopbacks
- Lead(Pb)-Free and RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX3223EEVKIT+ | EV Kit |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| LED1, LED2    |     2 | Red LEDs (0805)                                                                                                     |
| R1, R2        |     2 | 470Ω ±5% resistors (0603)                                                                                           |
| U1            |     1 | ±15kV ESD-protected, 1µA, 3.0V to 5.5V, 250kbps, RS-232 transceiver with AutoShutdown (20 TSSOP) Maxim MAX3223EEUP+ |
| -             |    11 | Shunts                                                                                                              |
| -             |     1 | DB9 I/O extension cable, 6ft                                                                                        |
| -             |     1 | PCB: MAX3223E Evaluation Kit+                                                                                       |

<!-- image -->

## Quick Start-Digital Loopback

## Required Equipment

- MAX3223E EV kit (DB9 I/O extension cable included)
- A  user-supplied  Windows ® 2000/XP-  or  Windows Vista ® -compatible PC with a spare RS-232 serial port
- 3.3V DC power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  MAX3223E  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  board  operation.  This procedure is written for one particular terminal emulator (RealTerm version 2.0.0.57), but any terminal emulation software should work.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 3223Rxx.ZIP. Save the EV kit software to a tempo -rary folder and uncompress the ZIP file. The EV kit software consists of  the  free,  open-source  terminal emulator,  RealTerm  (also  available  from  http://real -term.sourceforge.net).
- 2) Verify that all jumpers (JU1-JU11) are in their default positions, as shown in Table 1.
- 3) Connect  the  3.3V  DC  power  supply  between  the VCC and GND pads on EV kit.
- 4) Connect the DB9 I/O extension cable between the EV kit and the computer's serial port.
- 5) Start  the  RealTerm  software  by  opening  its  icon  in the Start | Programs menu. The RealTerm software main window appears, as shown in Figure 1. Note: If the serial cable is connected to a serial port other than COM1, then bring up the Port tab and open the corresponding serial port.
- 6) Install a shunt across jumper JU1 pins 2-3 to enable normal operation.
- 7) Install a shunt across jumper JU9 pins 1-2 to enable digital loopback.
- 8) Enable the 3.3V DC power supply.
- 10)  Move  the  JU1  shunt  to  pins  1-2  to  disable  the MAX3223E.
- 11) In the RealTerm window, click in the display area and type on the keyboard. With the MAX3223E disabled, characters typed on the keyboard do not appear in the display area.

## Quick Start-External Microcontroller

## Required Equipment

Before beginning, the following equipment is needed:

- MAX3223E EV kit (DB9 I/O extension cable included)
- A  user-supplied  Windows  2000/XP-  or  Windows Vista-compatible PC with a spare RS-232 serial port
- 3.3V DC power supply
- A user-supplied microcontroller, such as MAXQ2000EVKIT or DS89C450-K00

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The  MAX3223E  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  board  operation.  This procedure is written for one particular terminal emulator (RealTerm version 2.0.0.57), but any terminal emulation software should work.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 3223Rxx.ZIP. Save the EV kit software to a tempo -rary folder and uncompress the ZIP file. The EV kit software consists of  the  free,  open-source  terminal emulator,  RealTerm  (also  available  from  http://real -term.sourceforge.net).
- 2) Verify that all jumpers (JU1-JU11) are in their default positions, as shown in Table 1.
- 3) Connect  the  3.3V  DC  power  supply  between  the VCC and GND pads on EV kit.
- 4) Connect the DB9 I/O extension cable between the EV kit and the computer's serial port.
- 9) In  the  RealTerm  window,  click  in  the  display  area and type on the keyboard. The digital loopback con -nection immediately relays each character from the receiver to the transmitter, so each character typed on the keyboard appears in the display area.
- 5) Start  the  RealTerm  software  by  opening  its  icon  in the Start | Programs menu. The RealTerm software main window appears, as shown in Figure 1. Note: If the serial cable is connected to a serial port other than COM1, then bring up the Port tab and open the corresponding serial port.

Windows and Windows Vista are registered trademarks of Microsoft Corp.

## MAX3223E Evaluation Kit

## Table 1. MAX3223E EV Kit Jumper Descriptions (JU1-JU11)

| JUMPER   | SIGNAL         | SHUNT POSITION   | DESCRIPTION                                                                                            |
|----------|----------------|------------------|--------------------------------------------------------------------------------------------------------|
| JU1      | EN             | 1-2              | EN = VCC                                                                                               |
| JU1      | EN             | 2-3*             | EN = GND                                                                                               |
| JU2      | FORCEON        | 1-2*             | FORCEON = VCC                                                                                          |
| JU2      | FORCEON        | 2-3              | FORCEON = GND                                                                                          |
| JU3      | FORCEOFF       | 1-2*             | FORCEOFF = VCC                                                                                         |
| JU3      | FORCEOFF       | 2-3              | FORCEOFF = GND                                                                                         |
| JU4      | INVALID        | 1-2*             | INVALID drives LED2                                                                                    |
| JU4      | INVALID        | Open             | INVALID is not connected to LED2                                                                       |
| JU5      | R2IN           | 1-2*             | R2IN is driven by DTRIN from connector J1                                                              |
| JU5      | R2IN           | 2-3              | R2IN is driven by RTSIN from connector J1                                                              |
| JU5      | R2IN           | Open             | R2IN is not connected to J1                                                                            |
| JU6      | DCDOUT         | 1-2*             | DCDOUT drives DTRIN from connector J1                                                                  |
| JU6      | DCDOUT         | 2-3              | DCDOUT drives T2OUT from U1                                                                            |
| JU7      | DSROUT         | 1-2*             | DSROUT drives DTRIN from connector J1                                                                  |
| JU7      | DSROUT         | 2-3              | DSROUT drives T2OUT from U1                                                                            |
| JU8      | CTSOUT         | 1-2*             | CTSOUT drives RTSIN from connector J1                                                                  |
| JU8      | CTSOUT         | 2-3              | CTSOUT drives T2OUT from U1                                                                            |
| JU9      | T1IN Loopback  | 1-2              | T1IN is driven by R1OUT from U1. Data received from RS-232 side loops back at digital connection.      |
| JU9      | T1IN Loopback  | Open*            | T1IN is not connected to R1OUT                                                                         |
| JU10     | T2IN Loopback  | 1-2              | T2IN is driven by R2OUT from U1. Handshake received from RS-232 side loops back at digital connection. |
| JU10     | T2IN Loopback  | Open*            | T2IN is not connected to R2OUT                                                                         |
| JU11     | RS232 Loopback | 1-2              | R1IN is driven by T1OUT from U1. Data received from digital side loops back at RS-232 connection.      |
| JU11     | RS232 Loopback | Open*            | R1IN is not connected to T1OUT                                                                         |

* Default position.

- 6) Install a shunt across jumper JU1 pins 2-3 to enable normal operation.
- 7) Enable the 3.3V DC power supply.
- 8) Connect the microcontroller's 3.3V bus to the EV kit header's H3 VCC (H3-1) pin.
- 9) Connect the microcontroller's UART RXD input to the EV kit header's H3 R1OUT (H3-2) output.
- 10)  Connect the microcontroller's  UART TXD output to the EV kit header's H3 T1IN (H3-3) input.
- 11) Connect  the  microcontroller's  ground  return  to  the EV kit header's H3 GND (H3-6) pin.
- 12)  In  the  RealTerm  window,  click  in  the  display  area and  type  on  the  keyboard.  Characters  typed  from the keyboard are sent to the microcontroller UART. Characters  sent  by  the  microcontroller  UART  are displayed in the terminal window.

## Detailed Description of Hardware

The MAX3223E EV kit provides a proven layout for the MAX3223E. Capacitors C1-C4 are used by the charge pump to generate the internal  V+  and  V-  supplies  from VCC.  Capacitors  C5  and  C6  bypass  the  VCC  sup -ply.  Header  H3  provides  the  digital  connections  to  the MAX3223E.  Jumpers  JU1,  JU2,  and  JU3  control  the

Figure 1. RealTerm Software Main Window (Port Tab Sheet)

<!-- image -->

MAX3223E  power-management  signals.  Jumper  JU4 connects  the INVALID status  output  to  LED2.  Jumpers JU5-JU8  configure  the  hardware  handshake  signals. Jumpers  JU9  and  JU10  allow  digital  loopback.  Jumper JU11 allows RS-232 loopback.

The DCE-connected RS-232 connector (J1) uses MAX3223E transmitter 1 and receiver 1 for the serial data. MAX3223E transmitter 2 and receiver 2 can optionally be used for DTR-DSR or RTS-CTS hardware handshake.

## Hardware Handshakes

A  hardware  handshake  consists  of  two  or  more  signal wires used to control the flow of information on the other wires.  The  MAX3223E  does  not  enforce  any  hardware handshake convention, but allows a microcontroller to use the secondary receiver/transmitter to conduct active flow control using one of the defined hardware handshakes.

If the hardware handshake is not being actively managed by a microcontroller, then the corresponding handshake signals  should  be  connected  together  to  allow  data  to flow.  Without  a  hardware  handshake  connection,  com -munication may be blocked.

Tables 2 and 3 provide suggested jumper settings for the two most common hardware handshakes.

## Table 2. Jumper Settings for DTR-DSR Handshake (JU5-JU8)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                               |
|----------|----------|------------------|-------------------------------------------|
| JU5      | R2IN     | 1-2              | R2IN is driven by DTRIN from connector J1 |
| JU6      | DCDOUT   | 1-2              | DCDOUT = DTRIN from connector J1          |
| JU7      | DSROUT   | 2-3              | DSROUT = T2OUT from U1                    |
| JU8      | CTSOUT   | 1-2              | CTSOUT = RTSIN from connector J1          |

## Table 3. Jumper Settings for RTS-CTS Handshake (JU5-JU8)

| JUMPER   | SIGNAL   | SHUNT POSITION   | DESCRIPTION                      |
|----------|----------|------------------|----------------------------------|
| JU5      | R2IN     | 2-3              | R2IN = RTSIN from connector J1   |
| JU6      | DCDOUT   | 1-2              | DCDOUT = DTRIN from connector J1 |
| JU7      | DSROUT   | 1-2              | DSROUT = DTRIN from connector J1 |
| JU8      | CTSOUT   | 2-3              | CTSOUT = T2OUT from U1           |

Evaluates: MAX3223E

Figure 2. MAX3223E EV Kit Schematic

<!-- image -->

Figure 3. MAX3223E EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX3223E

Figure 4. MAX3223E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX3223E EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------|-----------------|
|                 0 | 2/09            | Initial Release             | -               |
|                 1 | 2/18            | Updated trademark reference | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAX3223E