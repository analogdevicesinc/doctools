<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX4899AE evaluation kit (EV kit) provides a proven design to evaluate the MAX4899AE USB 2.0 high-speed, fault-tolerant 4:1 multiplexer. The EV kit routes a single USB signal to one of the four type-A USB ports.

The MAX4899AE EV kit printed-circuit board (PCB) comes with a MAX4899AEETE+ installed. Contact the factory  for  free  samples  of  the  pin-compatible MAX4899EETE+.

| DESIGNATION          |   QTY | DESCRIPTION                                                         |
|----------------------|-------|---------------------------------------------------------------------|
| C1, C2, C3, C5, C7   |     5 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| C4, C6, C8           |     3 | 10µF ± 10%, 16V X5R ceramic capacitors (0805) Murata GRM21BR61C106K |
| C9                   |     1 | 1µF ± 10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C105K   |
| D1                   |     1 | Green LED (0603)                                                    |
| FB1                  |     1 | Ferrite bead (0603) TDK MMZ1608R301A                                |
| IN+, IN-, OUT+, OUT- |     4 | Edge-mount receptacle SMA connectors                                |
| JU1-JU5              |     5 | 3-pin headers                                                       |
| L1-L4                |     4 | 15nH inductors (0603) Murata LQW18AN15NG00                          |

Features

- ♦ USB Powered (Cable Included)
- ♦ Complete USB 2.0 (480Mbps) Switching Circuit
- ♦ Eye Diagram Test Circuit with SMA Input/Output
- ♦ Lead-Free and RoHS-Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX4899AEEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| P1            |     1 | USB series-B right-angle PC-mount receptacle                                   |
| P2-P5         |     4 | USB series-A right-angle PC-mount receptacles                                  |
| R1            |     1 | 270 Ω ± 5% resistor (0603)                                                     |
| U1, U2        |     2 | U S B 2.0 m ul ti p l exer ( 16- p i n TQFN- E P *) M axi m M AX 4899AE E TE + |
| U3            |     1 | LDO linear regulator (5-pin SC70) Maxim MAX8511EXK33+T (Top Mark: AEI)         |
| -             |     5 | Shunts                                                                         |
| -             |     1 | USB high-speed A-to-B cable, 6ft                                               |
| -             |     1 | PCB: MAX4899AE Evaluation Kit+                                                 |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com        |
| TDK Corp.             | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX4899AE or the MAX4899E when contacting these component suppliers.

## MAX4899AE Evaluation Kit

## Quick Start-Application Circuit

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX4899AE EV kit (USB cable included)
- A user-supplied Windows 2000/XP/Vista ® -compatible PC with a spare USB port
- One USB 2.0 signal source (i.e., USB 2.0 flash drive)

Note: In the following sections, text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX4899AE EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU5) are in their default position, as shown in Table 1.
- 2) Connect the USB cable from the PC to P1 of the EV kit.
- 3) Connect the USB 2.0 signal source to P2.
- 4) Go to the Windows System Properties window (Windows logo key + Pause Break key from keyboard) to locate and open the Device Manager . Under the Ports (COM &amp; LPT )  subject  directory, verify that the USB 2.0 signal source is recognized through the COM port.

## Quick Start-Test Circuit

## Required Equipment

Before beginning, the following equipment is needed:

- MAX4899AE EV kit
- 3.3V DC power supply
- Pulse generator with minimum frequency of 1GHz (i.e., HP8133A)
- Communication signal analyzer with minimum frequency of 1GHz (i.e., Tektronix CSA8000)
- Five SMA cables of equal lengths

## Procedure

The MAX4899AE EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are complete.

- 1) Connect the 3.3V power supply to the VCC1 and GND1 pads of the EV kit.
- 2) Set the pulse generator to a frequency of 240MHz and the trigger amplitude to 400mV with 0V offset.
- 3) Select the PRBS (psuedo-random binary (bit) sequence) mode on the pulse generator.
- 4) Use a pair of SMA cables to connect the differential signals of the pulse generator (DATA and DATA ) to IN+ and IN- of the EV kit.
- 5) Use a single SMA cable to connect the trigger input of the communication signal analyzer to the trigger output of the pulse generator.
- 6) Use the other pair of SMA cables to connect the two channels of the communication signal analyzer to OUT+ and OUT- of the EV kit.
- 7) Set the communication signal analyzer to infinite persistence and select the math function of the signal ((OUT+) - (OUT-)).
- 8) Adjust the vertical scale to 100mV/div and horizontal scale to 500ps/div on the communication signal analyzer.
- 9) Turn on the DC power supply.
- 10) Enable the trigger on the pulse generator and observe the diagram on the communication signal analyzer.

## Detailed Description

The MAX4899AE EV kit provides a proven layout for the MAX4899AE. The kit contains two electrically separate sub circuits: a typical 4:1 USB 2.0 analog switch application circuit and an eye diagram test circuit.

## Application Circuit

The application circuit is located at the top of the board. JU2 is used to enable the switching of the USB channels and JU1 is used to enable the charge pump. The user can switch to one of the four USB inputs by moving jumpers JU3 and JU4 (see Table 2). The EV kit is powered from the USB port (P1) and provides an onboard-regulated 3.3V supply to power the MAX4899AE IC.  All  signal  traces  in  the  USB  application  circuit  are 90 Ω differential controlled-impedance traces.

## Test Diagram Circuit

A separate test circuit is also provided at the bottom of the MAX4899AE EV kit for timing critical tests such as eye diagrams.

## User-Supplied Power Supply

The MAX4899AE EV kit is powered completely from the USB port by default. Move the shunt of JU5 to the 2-3 position and apply a 2.7V to 3.6V power supply at the VCC and GND pads.

The test circuit at the bottom of the board is powered by applying 2.7V to 3.6V at the VCC1 and GND1 pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Windows Vista is a registered trademark of Microsoft Corp.

<!-- image -->

## MAX4899AE Evaluation Kit

Table 1. MAX4899AE EV Kit Jumper Descriptions (JU1-JU5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | QP connected to ground (enabled charge pump for normal operation)                                                                   |
| JU1      | 2-3              | QP connected to V+ (the charge pump is disabled with the switches still active at a reduced analog logic range and higher R ON )    |
| JU2      | 1-2*             | EN connected to ground (enabled channels for normal operation)                                                                      |
| JU2      | 2-3              | EN connected to V+ (all channels are off and in high-impedance state; the internal charge pump is disabled when EN is a logic-high) |
| JU3      | 1-2*             | C1 connected to ground (see Table 2)                                                                                                |
| JU3      | 2-3              | C1 connected to V+ (see Table 2)                                                                                                    |
| JU4      | 1-2*             | C0 connected to ground (see Table 2)                                                                                                |
| JU4      | 2-3              | C0 connected to V+ (see Table 2)                                                                                                    |
| JU5      | 1-2*             | Connected to USB supply (+3.3V)                                                                                                     |
| JU5      | 2-3              | Connected to user-supplied 2.7V to 3.6V power supply to VCC and GND pads                                                            |

Table 2. MAX4899AE EV Kit USB Switching Description

| USB PORT   | C1 (JU3 SHUNT POSITION)   | C0 (JU4 SHUNT POSITION)   | FUNCTION                                     |
|------------|---------------------------|---------------------------|----------------------------------------------|
| P2         | 1-2                       | 1-2                       | COMA+ and COMA- connected to USB0+ and USB0- |
| P3         | 1-2                       | 2-3                       | COMA+ and COMA- connected to USB1+ and USB1- |
| P4         | 2-3                       | 1-2                       | COMA+ and COMA- connected to USB2+ and USB2- |
| P5         | 2-3                       | 2-3                       | COMA+ and COMA- connected to USB3+ and USB3- |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4899AE Evaluation Kit

Figure 1. MAX4899AE EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4899AE Evaluation Kit

Figure 2. MAX4899AE EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX4899AE EV Kit Component PCB LayoutComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX4899AE/MAX4899E

## MAX4899AE Evaluation Kit

Figure 4. MAX4899AE EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX4899AE EV Kit PCB Layout-Inner Layer 3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4899AE Evaluation Kit

Figure 6. MAX4899AE EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 7