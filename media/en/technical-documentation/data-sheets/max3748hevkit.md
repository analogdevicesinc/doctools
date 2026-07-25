<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3748H evaluation kit (EV kit) simplifies evaluation of the MAX3748H limiting amplifier. The fully assembled  and  tested  EV  kit  allows  for  quick  threshold  level selections,  provides  an  RSSI  output  signal  (when  used with the MAX3744), and includes a calibration circuit.

## EV Kit Contents

- S MAX3748H EV Kit Board

| DESIGNATION                           |   QTY | DESCRIPTION                                        |
|---------------------------------------|-------|----------------------------------------------------|
| C1, C2, C7, C10                       |     4 | 0.001 F F ±10%, 10V min ceramic capacitors (0201)  |
| C3, C4, C6, C8, C9, C11, C12, C14-C18 |    12 | 0.1 F F ±10%, 10V min ceramic capacitors (0402)    |
| C20                                   |     1 | 2.2 F F ±10%, 10V min ceramic capacitor (0805)     |
| C21                                   |     1 | 33 F F ±5%, 10V min tantalum capacitor (B case)    |
| J1-J8                                 |     8 | SMA edge-mount tab connectors Johnson 142-0701-851 |
| JU2-JU5, JU9, JU11                    |     6 | 2-pin jumper blocks, 0.1in spacing                 |
| JU6, JU7, JU8                         |     3 | 3-pin jumper blocks, 0.1in spacing                 |
| L1                                    |     1 | 1.2 F H ±5% chip inductor Coilcraft 1008LS         |

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

## Features

- S Fully Assembled and Tested
- S Test Point for Easy LOS Monitoring
- S Polarity Reversal Control
- S Selectable Offset Correction Loop Capacitance
- S Jumpers Allow Quick Selection for LOS Threshold Level

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                   |   QTY | DESCRIPTION                                         |
|-------------------------------|-------|-----------------------------------------------------|
| R3                            |       | 82 I ±5% resistor (0201)                            |
| R4                            |     1 | 270 I ±5% resistor (0201)                           |
| R5                            |     1 | 20k I ±1% resistor (0201)                           |
| R6                            |     1 | 4.75k I ±1% resistor (0402)                         |
| R7                            |     1 | 10k I ±1% resistor (0402)                           |
| R8                            |     1 | 3.01k I ±1% resistor (0402)                         |
| TP2, TP3, TP9, TP10, J10, J11 |     4 | Test points Digi-Key 5000K-ND                       |
| JU2-JU9, JU11                 |     9 | Shunts                                              |
| U1                            |     1 | Limiting amplifier Maxim MAX3748HEGE+ (16 TQFN-EP*) |
| -                             |     1 | PCB: MAX3748H EVALUATION BOARD REV A                |

## Component Suppliers

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| AVX                              | 843-946-0238 | www.avx.com                 |
| Coilcraft                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX3748H when ordering from these suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Quick Start

- 1) Connect  OUT+  and  OUT-  to  a  50 Ω terminated oscilloscope.
- 2) Connect IN+ and IN- to a 500mV P-P ,  3.2Gbps  differential data stream.
- 3) Remove all shunts.
- 4) Shunt  JU8  to  VCC  so  that  there  is  no  inversion  of signal polarity (OUTPOL, VCC). Figure 2 shows the jumper diagram for the board.
- 5) Shunt JU4 connecting R3 = 82 Ω (R TH ).
- 6) Shunt JU6 connecting R7 = 10k Ω (R LOS ).

## Table 1. Adjustment and Control Descriptions (see Quick Start first)

| NAME          | FUNCTION                                                                                                      |
|---------------|---------------------------------------------------------------------------------------------------------------|
| JU2, JU3, JU4 | Selects LOS assert/deassert level.                                                                            |
| JU5           | Shunt to connect the LOS pin to the DISABLE pin (squelch).                                                    |
| JU6           | Shunt to connect series resistor from LOS to test point TP2. Make sure TP2 is connected to a positive supply. |
| JU7           | Disable. Shunting to VCC holds the outputs static.                                                            |
| JU8           | Shunt to GND to reverse the output signal's polarity (OUTPOL). Shunt to VCC for normal operation.             |
| JU9           | Shunt to connect RSSI output to RSSI resistor R8.                                                             |
| JU11          | Shunt to connect C12 to CAZ1 and CAZ2.                                                                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3748H Evaluation Kit Evaluates: MAX3748H

- 7) Shunt JU5 connecting pin LOS to DISABLE.
- 8) Connect TP2 to VCC.
- 9) Shunt jumper JU11 so that the capacitor C12 is connected to pins CAZ1 and CAZ2.
- 10)  Connect the power-supply ground to the GND pad and then connect a +3.3V power supply to the VCC.
- 11)  Observe a limited signal at the output, approximately 0.8V P-P .
- 12)  Lower the amplitude of the input signal from 500mVP-P  to 15mV P-P  or less. The output signal is squelched.

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

<!-- image -->

Figure 1. MAX3748H EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. Jumper Diagram

<!-- image -->

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

Figure 3. MAX3748H EV Kit Component Placement GuideComponent Side (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX3748H EV Kit PCB Layout-Component Side (2X)

<!-- image -->

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

Figure 5. MAX3748H EV Kit PCB Layout-Ground Plane (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX3748H EV Kit PCB Layout-Power Plane (2X)

<!-- image -->

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

Figure 7. MAX3748H EV Kit PCB Layout-Solder Side (2X)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3748HEVKIT | EV Kit |

## MAX3748H Evaluation Kit

## Evaluates: MAX3748H

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8