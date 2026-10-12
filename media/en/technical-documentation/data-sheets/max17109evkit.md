<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX17109 evaluation kit (EV kit) is an assembled and tested circuit board that contains all the components necessary to evaluate the MAX17109 IC. The MAX17109 is a dual, high-voltage, level-shifting scan driver to drive the TFT panel integrated gate logic. The driver outputs swing from -30V to +40V. To save power, two sets of complementary outputs are provided to allow charge sharing during state changes. The EV kit operates from a DC supply range from +2.2V to +3.6V and consumes 200µA (typ).

| DESIGNATION                                   |   QTY | DESCRIPTION                                                                                |
|-----------------------------------------------|-------|--------------------------------------------------------------------------------------------|
| CKVBCS1, CKVBCS2, CKVCS1, CKVCS2, DISH, OECON |     6 | Test points, white                                                                         |
| C1                                            |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E473K or TDK C1608X7R1E473K |
| C2                                            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K or TDK C1608X7R1H104K   |

## Features

- ♦ Two High-Voltage, Level-Shifting Scan Drivers
- ♦ +2.2V to +3.6V Input Supply Voltage Range (VDD)
- ♦ -30V to +40V Output Swing
- ♦ Demonstrates Output Charge Sharing
- ♦ Evaluates the MAX17109 in a 32-Pin, 5mm x 5mm, Thin QFN Package with an Exposed Pad
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17109EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C3            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A105K or TDK C1608X5R1A105K   |
| C4, C5        |     2 | 1µF ±10%, 50V X7R ceramic capacitors (1206) Murata GRM31MR71H105KA or TDK C3216X7R1H105K |
| R1            |     1 | 20k Ω ±5% resistor (0603)                                                                |
| R2-R5         |     4 | 200 Ω ±5% resistors (1210)                                                               |
| U1            |     1 | High-voltage scan driver (32 TQFN-EP*) Maxim MAX17109ETJ+                                |
| -             |     1 | PCB: MAX17109 EVALUATION KIT+                                                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX17109 when contacting these component suppliers.

## MAXIM

1

## MAX17109 Evaluation Kit

## Quick Start

## Required Equipment

- +3.3V, 100mA DC power supply (VDD)
- +35V, 100mA DC power supply (GON)
- -25V, 100mA DC power supply (GOFF)
- One voltmeter
- 6) Verify  the  STVP1 logic per the table below at the respective test points:

| INPUT SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------------|---------------|---------------|---------------|---------------|
| STV1           | H             | H             | H             | L             |
| OECON          | X             | X             | X             | X             |
| CPV1           | L             | H             | X             | X             |
| OE             | L             | X             | H             | X             |
| OUTPUT SIGNAL  | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
| STVP1          | GON           | Hi-Z          | Hi-Z          | GOFF          |

H = VDD, L = GND, Hi-Z = High impedance, X = Don't care.

- 7) Verify  the  STVP2 logic per the table below at the respective test points:

H = VDD, L = GND, Hi-Z = High impedance, X = Don't care.

| INPUT SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------------|---------------|---------------|---------------|---------------|
| STV2           | H             | H             | H             | L             |
| OECON          | X             | X             | X             | X             |
| CPV2           | L             | H             | X             | X             |
| OE             | L             | X             | H             | X             |
| OUTPUT SIGNAL  | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
| STVP2          | GON           | Hi-Z          | Hi-Z          | GOFF          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Procedure

The MAX17109 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the +3.3V DC power supply to the VDD and AGND PCB pads.
- 2) Connect the +35V DC power supply to the GON and AGND PCB pads.
- 3) Connect the -25V DC power supply to the GOFF and AGND PCB pads.
- 4) Turn on the power supply.
- 5) Note that the logic inputs (STV1, STV2, CPV1, CPV2, and OE) must be set to AGND or VDD.

## MAX17109 Evaluation Kit

- 8) Verify the CKV1 and CKVB1 logic per the table below at the respective test points:

| INPUT SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| STV1           | H             | H             | H             | L             | L             | L             | L             | L             |
| OECON          | X             | X             | X             | L             | L             | L             | H             | H             |
| CPV1           | L             | H             | X             | L             | ↑             | X             | L             | ↑             |
| OE             | L             | X             | H             | L             | X             | ↑             | X             | X             |
| OUTPUT SIGNAL  | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
| CKV1           | GOFF          | GON           | GON           | CS            | Toggle        | Toggle        | CS            | Toggle        |
| CKVB1          | GON           | GOFF          | GOFF          | CS            | Toggle        | Toggle        | CS            | Toggle        |

H = VDD, L = GND, ↑ = Rising edge, CS = charge-share state, X = Don't care.

- 9) Verify the CKV2 and CKVB2 logic per the table below at the respective test points:

| INPUT SIGNAL   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
|----------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| STV2           | H             | H             | H             | L             | L             | L             | L             | L             |
| OECON          | X             | X             | X             | L             | L             | L             | H             | H             |
| CPV2           | L             | H             | X             | L             | ↑             | X             | L             | ↑             |
| OE             | L             | X             | H             | L             | X             | ↑             | X             | X             |
| OUTPUT SIGNAL  | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   | LOGIC STATE   |
| CKV2           | GOFF          | GON           | GON           | CS            | Toggle        | Toggle        | CS            | Toggle        |
| CKVB2          | GON           | GOFF          | GOFF          | CS            | Toggle        | Toggle        | CS            | Toggle        |

H = VDD, L = GND, ↑ = Rising edge, CS = charge-share state, X = Don't care.

## Detailed Description of Hardware

The MAX17109 EV kit contains all the components necessary to evaluate the MAX17109 IC. The MAX17109 is a dual, high-voltage, level-shifting scan driver to drive the TFT panel integrated gate logic. The driver outputs swing from -30V to +40V and two sets of complementary outputs are provided to allow charge sharing during state changes. The EV kit operates from a +2.2V to +3.6V DC supply range and consumes 200µA (typ).

The MAX17109 EV kit provides PCB pads to connect the logic inputs and scan-driver outputs. Test points are also provided to monitor the charge sharing, OECON, and DISH states.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17109 Evaluation Kit

Figure 1. MAX17109 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17109 Evaluation Kit

<!-- image -->

Figure 2. MAX17109 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17109 Evaluation Kit

Figure 3. MAX17109 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17109 Evaluation Kit

Figure 4. MAX17109 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7