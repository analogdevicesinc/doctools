<!-- lastmod 2022-08-04 -->
## General Description

The MAX4948 evaluation kit (EV kit) evaluates the MAX4948 hex single-pole/double-throw (SPDT) data switch. The EV kit utilizes the MAX4948 in a Secure Digital  (SD)  card  application.  The  EV  kit  provides  two SD card sockets and a single SD card printed-circuit board (PCB) plug. The supply voltage provided by the host interface powers the MAX4948 IC and any connected SD memory cards.

The MAX4948 EV kit is a customized PCB with an SD plug designed into the board. The PCB plug is designed to resemble an SD memory card's mechanical dimensions. The PCB plug measures 50.8mm x 24mm x 1.4mm. The mechanical specifications of an actual SD memory card can be obtained from the SD Card Association.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K TDK C1608X5R1A105K    |
| C2            |     0 | Not installed, ceramic capacitor (0603)                                                |
| C3, C4        |     2 | 0.1µF ±10%, 50V X5R ceramic capacitors (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| J1            |     1 | 24-pin, dual-row (2 x 12) vertical header (0.1in centers)                              |

<!-- image -->

Features

- ♦ Powered by Host Interface
- ♦ Customized PCB
- ♦ SD PCB Plug (1.4mm Thickness)
- ♦ On-Board SD Card Sockets (P1, P2)
- ♦ On-Board Power Indicator (LED1)

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4948EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| J2            |     1 | 16-pin, dual-row (2 x 8) vertical header (0.1in centers) |
| JU1, JU2      |     2 | 3-pin headers (0.1in centers)                            |
| LED1          |     1 | Green surface-mount LED (0603)                           |
| P1, P2        |     2 | SD memory card socket (SMD)                              |
| R1-R18        |     0 | Not installed, resistors-short (PC trace) (0402)         |
| R19           |     1 | 430 Ω ±5% resistor (0603)                                |
| TP1, TP2      |     2 | Multipurpose test points                                 |
| U1            |     1 | Maxim Hex SPDT data switch MAX4948ETG+ (24-pin TQFN-EP)  |
| -             |    22 | Shunts                                                   |
| -             |     1 | PCB: MAX4948 Evaluation Kit+                             |

1

## MAX4948 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Indicate that you are using the MAX4948 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- SD card reader/SD card slot
- Computer with Windows® 98SE/2000/XP/Vista operating system

Note: The MAX4948 EV kit does not require a driver or software. The EV kit acts only as an SPDT switch, connecting one of two SD memory cards to the host's SD bus.

## Procedure

The MAX4948 EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that shunts are installed between each odd-andeven pin of header J1 (i.e., between pins 1 and 2, pins 3 and 4, etc.).
- 2) Verify that shunts are installed between each odd-andeven pin of header J2 (i.e., between pins 1 and 2, pins 3 and 4, etc.).
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of header JU1. This connects the NO\_ inputs (from socket P1) to the COM outputs.
- 4) Verify  that  a  shunt  is  installed  across  pins  1-2  of header JU2. This powers on the analog switches.
- 5) Insert the SD PCB plug (P3) into the SD card reader/SD card slot.
- 6) Verify that LED1 is illuminated.

## Detailed Description

The MAX4948 evaluation kit (EV kit) evaluates the MAX4948 hex SPDT data switch.  The  EV  kit  is designed for an SD application, providing two SD sockets and a single SD plug. Standard and thin SD memory  cards  can  be  inserted  into  the  P1  and  P2  sockets. The MAX4948 is then used to switch between the two SD memory cards, connecting one of the cards to the SD plug. The SD plug can be inserted into any standard SD memory card slot. The SD plug is designed

Windows is a registered trademark of Microsoft Corp.

## Configuration (JU1)

Based on jumper JU1's configuration, the signal lines from one of the SD card sockets (P1 or P2) are connected to the common (COM) terminals of the analog switches (COM1-COM6). The COM1-COM6 terminals are then routed through header J2 to the SD PCB plug (P3). See Table 2 for configuration options and Figure 1 for an illustration of the MAX4948 analog switch connections.

## Table 2. MAX4948 Configuration

| CB PIN (JU1)   | COM_ TERMINAL             | CONFIGURATION                                          |
|----------------|---------------------------|--------------------------------------------------------|
| VDD (1-2)*     | Connected to NO_ terminal | SD card socket (P1) connected to the SD card plug (P3) |
| GND (2-3)      | Connected to NC_ terminal | SD card socket (P2) connected to the SD card plug (P3) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

into  the  PCB  and conforms to the dimensional standards of a thin SD memory card. The net effect is the ability  to  switch  between  two  SD  memory cards on a single SD bus.

## Enable and Configuration

The EV kit is configured through jumpers JU1 and JU2. Jumper JU2 is used to enable/disable the MAX4948 analog switches and jumper JU1 is used to switch between the two SD card sockets, P1 and P2.

## Enable (JU2)

The MAX4948 analog switch is enabled and disabled through jumper JU2. See Table 1 for jumper JU2 functions.

## Table 1. Jumper JU2 Functions

| SHUNT POSITION   | EN PIN           | DESCRIPTION                                 |
|------------------|------------------|---------------------------------------------|
| 1-2              | Connected to VDD | All switches are in a high-impedance state. |
| 2-3*             | Connected to GND | All switches are on.                        |

Note:

<!-- image -->

## MAX4948 Evaluation Kit

<!-- image -->

Figure 1. MAX4948 Switch Connections

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

## SD Sockets

The two on-board SD card sockets accommodate both a standard SD memory card and a thin SD memory card. The pinout for each SD socket is listed in Table 3.

## Table 3. P1 and P2 Pinout

| SD   | P1 PIN   | P2 PIN   |
|------|----------|----------|
| DAT1 | 8        | 8        |
| DAT0 | 7        | 7        |
| GND  | 6        | 6        |
| CLK  | 5        | 5        |
| VCC  | 4*       | 4**      |
| GND  | 3        | 3        |
| CMD  | 2        | 2        |
| DAT3 | 1        | 1        |
| DAT2 | 9        | 9        |

- *Shunted to VDD at header J2 (J2-7 to J2-8).
- **Shunted to VDD at header J2 (J2-9 to J2-10).

## Header J1

The 24-pin, dual-row header (J1) connects the P1 and P2 SD sockets to the normally open (NO) and normally closed (NC) terminals. The P1 socket is connected through header J1 to the switches' NO terminals (NO1-NO6). The P2 socket is connected through header  J1  to  the  switches'  NC  terminals  (NC1-NC6). See Table 4 for a pinout of header J1.

## Table 4. J1 Pinout

| NET    |   J1 PIN (ODD) |   J1 PIN (EVEN) | MAX4948 (U1) PIN   |
|--------|----------------|-----------------|--------------------|
| P1DAT1 |              1 |               2 | NO6                |
| P2DAT1 |              3 |               4 | NC6                |
| P1DAT0 |              5 |               6 | NO5                |
| P2DAT0 |              7 |               8 | NC5                |
| P1CLK  |              9 |              10 | NO4                |
| P2CLK  |             11 |              12 | NC4                |
| P1CMD  |             13 |              14 | NO3                |
| P2CMD  |             15 |              16 | NC3                |
| P2DAT3 |             17 |              18 | NC2                |
| P1DAT3 |             19 |              20 | NO2                |
| P2DAT2 |             21 |              22 | NC1                |
| P1DAT2 |             23 |              24 | NO1                |

## SD PCB Plug

The MAX4948 EV kit was designed on a customized PCB to allow for actual application evaluation. The SD plug (P3) is an extension of the PCB and can be inserted into a standard SD card socket. This design allows two SD memory cards to be switched into a single SD card socket. See Table 6 for the SD plug's net associations.  The  pinout  and  dimensions of the SD plug are shown in Figures 2 and 3.

## Table 6. SD Plug Pinout

| NET NAME   |   P3 PIN | SD   |
|------------|----------|------|
| SD8        |        8 | DAT1 |
| SD7        |        7 | DAT0 |
| GND        |        6 | GND  |
| SD5        |        5 | CLK  |
| VDD        |        4 | VDD  |
| GND        |        3 | GND  |
| SD2        |        2 | CMD  |
| SD1        |        1 | DAT3 |
| SD9        |        9 | DAT2 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Header J2

The  16-pin,  dual-row  header  (J2)  connects  the COM1-COM6 terminals to the PCB plug (P3). In addition, the VDD supply voltage from the SD card reader/SD card port is routed through J2 to each VCC pin of socket P1 and P2. See Table 5 for a pin-to-pin association between  J2,  the  PCB  plug,  and  the  switches' COM terminals.

## Table 5. J2 Pinout

| PIN ASSOCIATION   | J2 PIN (ODD)   | J2 PIN (EVEN)   | P3 PLUG PIN   |
|-------------------|----------------|-----------------|---------------|
| COM6              | 1              | 2               | P3-8          |
| COM5              | 3              | 4               | P3-7          |
| COM4              | 5              | 6               | P3-5          |
| P1-4              | 7*             | 8**             | P3-4          |
| P2-4              | 9*             | 10**            | P3-4          |
| COM3              | 11             | 12              | P3-2          |
| COM2              | 13             | 14              | P3-1          |
| COM1              | 15             | 16              | P3-9          |

- **VDD: Host-interface supply voltage.

## MAX4948 Evaluation Kit

Figure 2. PCB Plug (P3) Pinout

<!-- image -->

Figure 3. PCB Plug (P3) Dimensions

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

Figure 4. MAX4948 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

<!-- image -->

Figure 5. MAX4948 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

Figure 6. MAX4948 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

<!-- image -->

Figure 7. MAX4948 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4948 Evaluation Kit

Figure 8. MAX4948 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10