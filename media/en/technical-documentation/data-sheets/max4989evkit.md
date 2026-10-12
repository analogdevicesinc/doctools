<!-- lastmod 2022-08-04 -->
## General Description

The MAX4989 evaluation kit (EV kit) provides a proven design to  evaluate  the  MAX4989  Hi-Speed  2-of-4  USB 2.0 crosspoint switch. The EV kit contains two sub circuits,  a  typical  USB  crosspoint  switch  application  (top half), and a test circuit (bottom half).

The  USB  crosspoint  switch  application  circuit  is  USB powered by the USB host. USB input/output connectors are also provided to easily interface with USB devices. All  USB  signal  traces  are  90 I differential  controlledimpedance traces.

A separate test circuit is also provided at the bottom of the  MAX4989  EV  kit  for  eye  diagram  evaluation  using SMA connections and 90 I controlled-impedance traces.

The MAX4989 EV kit PCB comes with two MAX4989ETD+ devices  installed.  The  MAX4989ETD+  is  available  in  a lead(Pb)-free 14-pin, 3mm x 3mm TDFN package.

<!-- image -->

WIXVW

## MAX4989 Evaluation Kit

## Features

- S USB Connectors for Inputs and Outputs
- S USB Powered (Cable Included)
- S Eye Diagram Test Circuit with SMA Input/Output
- S Jumper-Selectable USB Channel Connection
- S Lead(Pb)-Free and RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4989EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1-C4         |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K |
| D1, D2, D3    |     3 | 20V, 500mA Schottky diodes (SOD123) Fairchild Semi MBR0520L         |
| J1, J2        |     2 | USB type-B, right-angle PC-mount receptacles                        |
| J3, J4        |     2 | USB type-A, right-angle PC-mount receptacles                        |
| JU1-JU6       |     6 | 3-pin headers                                                       |
| LED1, LED2    |     2 | Orange LEDs (0603)                                                  |

| DESIGNATION                |   QTY | DESCRIPTION                                                 |
|----------------------------|-------|-------------------------------------------------------------|
| R1, R2                     |     2 | 680 I Q 5% resistors (0603)                                 |
| R3-R6                      |     0 | Not installed, resistors (0603)                             |
| SMA1+, SMA1-, SMA2+, SMA2- |     4 | Edge-mount receptacle SMA connectors                        |
| U1, U2                     |     2 | USB 2.0 crosspoint switches (14 TDFN-EP*) Maxim MAX4989ETD+ |
| -                          |     6 | Shunts                                                      |
| -                          |     2 | USB high-speed A-to-B cables, 6ft                           |
| -                          |     1 | PCB: MAX4989 EVALUATION KIT+                                |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX4989 when contacting these component suppliers.

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4989 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Required Equipment

- MAX4989 EV kit (2 USB cables included)
- User-supplied  Windows M 2000/XP M or  Windows Vista M PC with a spare USB port
- User-supplied  USB  signal  source  (e.g.,  USB  2.0 flash drive)

Note: In the following sections, text in bold and underlined refers to items from the Windows operating system.

## Procedure

The  MAX4989  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Place a shunt across pins 2-3 of jumper JU1.
- 2) Place a shunt across pins 1-2 of jumper JU2.
- 3) Place a shunt across pins 2-3 of jumper JU3.
- 4) Connect the USB cable from the PC to the J1 USB connector on the EV kit.
- 5) Verify that LED1 turns on.
- 6) Connect the USB signal source to the J3 USB connector on the EV kit.
- 7) Go  to  the  Windows System  Properties window (Windows  logo  key  +  Pause  Break  key  from  keyboard)  to  locate  and  open  the Device  Manager . Under the Universal Serial Bus Controllers subject directory,  verify  that  the  USB  2.0  signal  source  is recognized through the USB port .

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

2    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_Detailed Description of Hardware

The MAX4989 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX4989  Hi-Speed  2-of-4  USB 2.0  crosspoint  switch.  The  EV  kit  contains  two  sub  circuits,  a  typical  USB  crosspoint  switch  application  (top half), and a test circuit (bottom half).

## Application Circuit

The application circuit is located at the top of the board. Jumpers  JU1,  JU2,  and  JU3  are  used  to  control  the switch connection (see Table 1). The MAX4989 is powered  from  the  USB  port  that  is  connected  to  the  USB host. To use a user-supplied power supply, connect a 5V supply to the VCC and GND pads. All signal traces in the USB  application  circuit  are  90 I differential  controlledimpedance traces .

## Test Diagram Circuit

A separate test circuit is also provided at the bottom of the MAX4989 EV kit for timing critical tests such as eye diagrams. The test circuit is powered by applying a 2.7V to 5.5V power supply at the VCC2 and GND2 pads.

## Table 1. Jumper Settings

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | DESCRIPTION         |
|------------------|------------------|------------------|---------------------|
| JU1              | JU2              | JU3              | DESCRIPTION         |
| 2-3              | 2-3              | 2-3              | Shutdown            |
| 1-2              | 2-3              | 2-3              | Illegal state       |
| 2-3              | 1-2              | 2-3              | J1 and J3 connected |
| 1-2              | 1-2              | 2-3              | J2 and J3 connected |
| 2-3              | 2-3              | 1-2              | J2 and J4 connected |
| 1-2              | 2-3              | 1-2              | J1 and J4 connected |
| 2-3              | 1-2              | 1-2              | Illegal state       |
| 1-2*             | 1-2*             | 1-2*             | Shutdown            |

*Default position.

## Table 2. Test Circuit Jumper Settings

| SHUNT POSITION         | SHUNT POSITION         | SHUNT POSITION         | DESCRIPTION   |
|------------------------|------------------------|------------------------|---------------|
| JU4                    | JU5                    | JU6                    | DESCRIPTION   |
| 2-3                    | 1-2                    | 2-3                    | On            |
| All other combinations | All other combinations | All other combinations | Off           |

<!-- image -->

## MAX4989 Evaluation Kit

Figure 1a. MAX4989 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4989 Evaluation Kit

Figure 1b. MAX4989 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

4    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4989 Evaluation Kit

<!-- image -->

Figure 2. MAX4989 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX4989 Evaluation Kit

Figure 3. MAX4989 EV Kit PCB Layout-Component Side

<!-- image -->

6    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4989 Evaluation Kit

<!-- image -->

Figure 4. MAX4989 EV Kit PCB Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX4989 Evaluation Kit

Figure 5. MAX4989 EV Kit PCB Layout-Layer 3

<!-- image -->

8    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4989 Evaluation Kit

Figure 6. MAX4989 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

SPRINGER

9