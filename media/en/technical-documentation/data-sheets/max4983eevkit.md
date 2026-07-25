<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX4983E Evaluation Kit

## General Description

The MAX4983E evaluation kit (EV kit) provides a proven design to evaluate the MAX4983E high ESD-protected double-pole/double-throw (DPDT) switch. The EV kit is designed to demonstrate the MAX4983E ICs used in USB 2.0 high-speed (480Mbps) switching applications. The EV kit routes a single USB signal between one of two type-A USB ports.

The MAX4983E EV kit PCB comes with a MAX4983EEVB+ installed.

| DESIGNATION    |   QTY | DESCRIPTION                                                                            |
|----------------|-------|----------------------------------------------------------------------------------------|
| C1, C3, C5, C6 |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104K |
| C2, C4         |     2 | 10µF ±10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K                     |
| C7             |     1 | 1µF ±10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105K TDK C1608X5R1C105K    |
| D1             |     1 | Green LED (0603)                                                                       |
| FB1            |     1 | Ferrite bead (0603) TDK MMZ1608R301A                                                   |
| JU1, JU2, JU3  |     3 | 3 pin headers, 0.1in centers                                                           |
| L1, L2         |     0 | Not installed, chip inductors-short (PCB trace) (0603)                                 |
| P1             |     1 | USB series-B right-angle PC-mount receptacle                                           |

Features

- ♦ USB Powered (Cable Included)
- ♦ Complete USB 2.0 (480Mbps) Switching Circuit
- ♦ On-Board VBUS Power-Switching Circuit
- ♦ Lead-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX4983EEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| P2, P3        |     2 | USB series-A right-angle PC-mount receptacles                             |
| Q1            |     1 | Dual n-channel MOSFET (6 SSOT) Fairchild Semi FDC6305N                    |
| Q2            |     1 | Dual p-channel MOSFET (6 SSOT) Fairchild Semi FDC6312P                    |
| R1            |     1 | 270 Ω ±5% resistor (0603)                                                 |
| R2, R3        |     2 | 10k Ω ±5% resistors (0603)                                                |
| U1            |     1 | High-speed USB 2.0 switches (10 UTQFN) Maxim MAX4983EEVB+ (Top Mark: AAA) |
| U2            |     1 | 3.3V linear regulator (5 SC70) Maxim MAX8511EXK33+T (Top Mark: AEI)       |
| -             |     3 | Shunts                                                                    |
| -             |     1 | PCB: MAX4983E Evaluation Kit+                                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4983E or MAX4984E when contacting these component suppliers.

1

## MAX4983E Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX4983E EV kit (USB cable included)
- A user-supplied Windows ® 2000/XP/Vista ® -compatible PC with a spare high-speed USB port
- One USB 2.0 high-speed/full-speed device (i.e., USB 2.0 flash drive)

## Procedure

The MAX4983E EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  all  jumpers  (JU1,  JU2,  and  JU3)  are  in their default position, as shown in Table 1.
- 2) Connect the USB cable from the PC to the type-B USB port (P1) on the EV kit.
- 3) Connect the USB 2.0 device source to P2, type-A USB port.
- 4) Verify that the USB 2.0 device is detected by the PC.

## Table 1. Default Shunt Positions

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |
| JU2      | 1-2              |
| JU3      | 1-2              |

## Detailed Description

The MAX4983E EV kit provides a proven layout for the MAX4983E and demonstrates the devices used in USB 2.0 high-speed switching applications. The EV kit provides one type-B (P1) and two type-A (P2, P3) USB ports. The MAX4983E routes the USB signals between P1 and one of the two type-A USB ports, depending on the configuration of jumper JU1.

Jumper JU1 is used to switch between the USB channels and JU2 is used to enable/disable the internal switches. The user can switch to one of the two USB

## Device Enable ( EN )

The MAX4983E is enabled/disabled by configuring jumper JU2 (Table 3). When disabled, the MAX4983E switches are placed in a high-impedance state.

## Table 3. Jumper JU2 Function

| SHUNT POSITION   | EN PIN           | DESCRIPTION                                   |
|------------------|------------------|-----------------------------------------------|
| 1-2*             | Connected to GND | Switches enabled for normal operation         |
| 2-3              | Connected to VCC | Switches are off and in high- impedance state |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

inputs by configuring jumper JU1, as shown in Table. 2. The EV kit is powered from the type-B USB port (P1) and provides an on-board regulated 3.3V supply to power the MAX4983E IC. All USB signal traces are 90 Ω differential controlled-impedance traces.

The EV kit also includes an on-board VBUS powerswitching circuit that routes the USB power from port P1 to either the P2 or P3 type-A USB ports. See the OnBoard VBUS Power Switching section.

## USB Switch Control (CB)

The USB signals are routed between P1 and P2 or between P1 and P3, depending on the state of the MAX4983E DPDT switch. The DPDT switch is controlled through jumper JU1 (Table 2).

## Table 2. Jumper JU1 Function

| SHUNT POSITION   | CB PIN           | DESCRIPTION                                                |
|------------------|------------------|------------------------------------------------------------|
| 1-2*             | Connected to GND | COM1 and COM2 connected to NC1 and NC2 (P1 /bleftright P2) |
| 2-3              | Connected to VCC | COM1 and COM2 connected to NO1 and NO2 (P1 /bleftright P3) |

<!-- image -->

## MAX4983E Evaluation Kit

## Power Supply (VCC)

The MAX4983E EV kit can be powered by the P1 USB port (through the 3.3V LDO) or by an external power supply (VIN). The on-board MAX8511 linear regulator (U2) provides the regulated 3.3V from the USB bus voltage (5V) provided at P1. To evaluate the board with an external supply, configure jumper JU3 according to Table 4.

## Table 4. Jumper JU3 Function

## On-Board VBUS Power Switching

The EV kit includes a power-switching circuit, designed with n-channel and p-channel MOSFETs, that routes the P1 USB bus voltage (V1) to the P2 or P3 USB ports. The power-switching circuit is controlled by the state of the CB control pin, which is set through jumper JU1. See Table 5 for operation.

<!-- image -->

Figure 1. VBUS Power Switching

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| SHUNT POSITION   | VCC SUPPLY      | DESCRIPTION                                                                              |
|------------------|-----------------|------------------------------------------------------------------------------------------|
| 1-2*             | On-board supply | Device powered by on-board linear regulator (3.3V)                                       |
| 2-3              | External supply | Device powered by user- supplied 2.8V to 5.5V power supply connected to VIN and GND pads |

## Table 5. Relay Operation (Jumper JU1)

| SHUNT POSITION   | CB PIN           | DESCRIPTION                                            |
|------------------|------------------|--------------------------------------------------------|
| 1-2*             | Connected to GND | P1USB bus voltage (V1) routed to USB port P2 (V2 = V1) |
| 2-3              | Connected to VCC | P1USB bus voltage (V1) routed to USB port P3 (V3 = V1) |

## MAX4983E Evaluation Kit

Figure 2. MAX4983E EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4983E Evaluation Kit

<!-- image -->

Figure 3. MAX4983E EV Kit Component Placement GuideComponent Side

Figure 4. MAX4983E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX4983E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4983E Evaluation Kit

Figure 6. MAX4983E EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 7. MAX4983E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_