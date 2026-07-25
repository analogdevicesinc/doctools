<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXQ Serial-to-JTAG Evaluation Kit

## General Description

The MAXQ ® serial-to-JTAG evaluation kit (EV kit) is a convenient way to evaluate the capabilities of the MAXQ serial-to-JTAG programming interface board, used to interface the JTAG port on MAXQ microcontrollers to a PC. The EV kit contains the MAXQ serial-toJTAG board and an interface cable. With the included board and cable, the EV kit provides a completely functional system ideal for evaluating the capabilities of the MAXQ serial-to-JTAG board.

## EV Kit Contents

- ♦ MAXQSERIALJTAG Evaluation Board
- ♦ Interface Ribbon Cable

| DESIGNATION                                           |   QTY | DESCRIPTION                                 |
|-------------------------------------------------------|-------|---------------------------------------------|
| C1, C3, C4, C5, C6, C10, C11, C13, C15, C17, C18, C19 |    12 | 100nF, 10V min capacitors (0805)            |
| C2, C9, C12, C16                                      |     4 | 10nF, 25V min capacitors (0805)             |
| C7, C8                                                |     2 | 22pF ± 10%, 10V min capacitors (0805)       |
| C14, C20                                              |     2 | 3.3µF, 10V min capacitors (1206)            |
| C21                                                   |     1 | 47pF, 10V min capacitor (0805)              |
| DS1                                                   |     1 | Red LED Lumex SML-LX23SRC or SML-LX23IC     |
| D1                                                    |     1 | Diode, 1N5908 (DO-201)                      |
| D2                                                    |     1 | Diode, 1N5819 (SOD123)                      |
| FB1, FB2, FB3, FB4, FB5, FB7, FB8, FB9, FB10          |     9 | Ferrite chips (0805) Steward HZ0805G471R-00 |
| FB6                                                   |     1 | Ferrite chip (1206) Steward HZ1206E601R-00  |
| F1                                                    |     1 | Fuse Littlefuse 0251.500M                   |
| JH1, JH2, JH3                                         |     3 | Single-row 1x2 headers Molex 22-28-4020     |
| J1                                                    |     1 | Connector, DB9, female Amp/Tyco 745781-4    |

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

## Features

- ♦ Easily Load Code and Debug Using On-Board Serial Interface
- ♦ Serial-to-JTAG Interface Provides In-Application Debugging Features

Step-by-Step Execution Tracing Breakpointing by Code Address, Data Memory Address, or Register Access Data Memory View and Edit

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAXQSERIALJTAG-KIT | EV Kit |

## Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                                                                       |
|---------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| J2                  |     1 | Jack, coaxial, ID = 2.5mm, OD= 5.5mm, barrel length = 9.5mm CUI Inc. PJ-102B                                      |
| P1                  |     0 | Do not populate                                                                                                   |
| P2                  |     1 | 2x5 header Molex 10-88-1101                                                                                       |
| P3                  |     0 | Do not populate                                                                                                   |
| Q1                  |     1 | MOSFET, 2N7002 (SOT23)                                                                                            |
| R1, R2, R3, R4, R12 |     5 | 47 ± 5%, 1/10W resistors (0805)                                                                                   |
| R5                  |     1 | 68k ± 5%, 1/10W resistor (0805)                                                                                   |
| R6                  |     0 | Do not populate (0 resistor)                                                                                      |
| R7                  |     0 | Do not populate (3.3k resistor)                                                                                   |
| R8, R9              |     2 | 47k ± 5%, 1/10W resistors (0805)                                                                                  |
| R10                 |     1 | 820 ± 5%, 1/10W resistor (0805)                                                                                   |
| R11, R16            |     2 | 10k ± 5%, 1/10W resistors (0805)                                                                                  |
| R13                 |     1 | 1.0k ± 5%, 1/10W resistor (0805)                                                                                  |
| R14                 |     1 | 3.3k ± 5%, 1/10W resistor (0805)                                                                                  |
| R15                 |     1 | 10 ± 5%, 1/10W resistor (0805)                                                                                    |
| U1                  |     1 | 40ns, low-power, 3V/5V, rail-to-rail single-supply comparator (5 SOT23) Maxim MAX9140EUK-T                        |
| U2                  |     1 | Low-capacitance, 4-channel, ±15kV ESD-protection array for high-speed data interfaces (6 TDFN) Maxim MAX3204EETT+ |

## MAXQ Serial-to-JTAG Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| U6            |     1 | Quad buffer with 3-state outputs 74VHC125   |
| U7            |     0 | Do not populate Maxim DS1086                |
| Y1            |     1 | 7.3728MHz crystal Citizen HC49US7.3728MABJB |
| None          |     1 | PCB: MAXQ Serial-to-JTAG EV Kit Board       |

Figure 1. MAXQSERIALJTAG Evaluation Board

| DESIGNATION   |   QTY | DESCRIPTION                                                                          |
|---------------|-------|--------------------------------------------------------------------------------------|
| U3            |     1 | Ultra-high-speed flash microcontroller (44 TQFP) Maxim DS89C430-ENL+                 |
| U4            |     1 | ±15kV ESD-protected, +5V RS-232 transceiver (20 SO) Maxim MAX203ECWP+                |
| U5            |     1 | High-speed, low-voltage, CMOS analog multiplexer/switch (16 TSSOP) Maxim MAX4619CUE+ |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXQ Serial-to-JTAG Evaluation Kit

Figure 2. MAXQSERIALJTAG Schematic

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3