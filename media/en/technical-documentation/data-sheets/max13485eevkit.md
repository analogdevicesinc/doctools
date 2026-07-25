<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX13485E evaluation kit (EV kit) provides a proven design to evaluate the MAX13485E half-duplex RS-485/RS-422 transceivers in an 8-pin µDFN package.

The  MAX13485E  EV  kit  PCB  comes  with  a MAX13485EELA+ installed. Contact the factory for free samples of the pin-compatible MAX13486EELA+ to evaluate this device.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                     |
|----------------|-------|-----------------------------------------------------------------|
| C1             |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C104K |
| C2             |     1 | 1µF ±20%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105M   |
| J1             |     1 | 2-position terminal block                                       |
| JU1, JU2, JU3  |     3 | 2-pin headers                                                   |
| R1             |     1 | 120 Ω ±5% resistor (1206)                                       |
| R2, R3, R4, R5 |     4 | Not installed, resistors (0603)                                 |
| TP1, TP2       |     2 | Not installed, test points                                      |
| U1             |     1 | RS-485 half-duplex transceiver (8 µDFN) Maxim MAX13485EELA+     |
| -              |     3 | Shunts                                                          |
| -              |     1 | PCB: MAX13485E Evaluation Kit+                                  |

## Component Supplier

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| TDK Corp.  | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX13485E when contacting this component supplier.

Features

- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13485EEVKIT+ | EV Kit |

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX13485E EV kit
- 5V DC power supply
- Two digital voltmeters

## Procedure

The MAX13485E EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that the jumpers are in their default position, as shown in Table 1. JU1 connects the 120 Ω load resistor between A and B.
- 2) For testing purposes, remove the shunt from JU1.
- 3) Connect the positive terminal of the 5V supply to VCC and the negative terminal of the supply to GND.
- 4) Apply 5V on the RE and DE pads. This is a logic to RS-485 DC test.
- 5) Apply 5V on the DI pad and check that A-B is positive.
- 6) Apply 0V on the DI pad and check that B-A is positive.
- 7) Apply 0V on RE and DE. Apply 5V on A and 0V on B. This is an RS-485 to logic DC test.
- 8) Check the state of RO using a voltmeter. RO should be approximately 5V.

1

## MAX13485E Evaluation Kit

## Table 1. Jumper Table (JU1, JU2, JU3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                    |
|----------|------------------|------------------------------------------------------------------------------------------------|
| JU1      | Open             | Does not connect the 120 Ω resistor differentially between A and B                             |
| JU1      | Closed*          | Connects the 120 Ω resistor differentially between A and B                                     |
| JU2      | Open*            | R2 and R5 not connected                                                                        |
| JU2      | Closed           | Connects A and B through R2 and R5 if populated for testing custom termination and common-mode |
| JU3      | Open             | Keeps DE and RE electrically separate                                                          |
| JU3      | Closed*          | Shorts DE and RE                                                                               |

## Detailed Description of Hardware

The MAX13485E EV kit provides a proven layout for the MAX13485E. On-board pads are included for adding external fail-safe resistors. JU2 can be used to monitor the A and B lines with a differential probe. A terminal block is also included to easily connect a cable to the EV kit board.

An electrical grid with vias and GND vias are present on the board to enable prototyping.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13485E Evaluation Kit

Figure 1. MAX13485E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX13485E Evaluation Kit

Figure 2. MAX13485E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX13485E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX13485E Evaluation Kit

Figure 4. MAX13485E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5

SPRINGER