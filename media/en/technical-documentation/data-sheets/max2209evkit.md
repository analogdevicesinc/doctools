<!-- lastmod 2022-08-02 -->
## General Description

The MAX2209 evaluation kit (EV kit) simplifies the evaluation of the MAX2209 RF power detector. It enables testing of all functions, with no additional support circuitry. The RF input utilizes a 50 I SMA connector for convenient connection to test equipment.

<!-- image -->

## MAX2209 Evaluation Kit

Features

- S 2.7V to 5V Single-Supply Operation
- S 50 I SMA Connector on RF Input
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2209EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| C1            |     1 | 0.1 F F Q 10% ceramic capacitor (0402) Murata GRM155R71C104K  |
| C2            |     1 | 0.01 F F Q 10% ceramic capacitor (0402) Murata GRM155R71C103K |
| C3            |     1 | 22 F F electrolytic capacitor (B case) AVX TAJB226K010        |
| GND, VCC      |     2 | 2-pin headers, 0.1in centers                                  |

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| ROUT          |     1 | 1k I Q 5% resistor (0402)                                 |
| SMA           |     1 | SMA edge-mount connector, 0.062in EF Johnson 142-0701-851 |
| T1            |     1 | 1-pin header                                              |
| U1            |     1 | RF power detector (4 UCSP K ) Maxim MAX2209EBS+           |
| -             |     1 | PCB: MAX2209 EVALUATION KIT+                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avx.com                 |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX2209 when contacting these component suppliers.

UCSP is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX2209 Evaluation Kit

## Quick Start

## Required Equipment

- Signal  generator  capable  of  delivering  continuouswave (CW) signals with -5dBm output power
- Power meter to accurately measure the power into the RF input
- Power supply capable of up to 10mA at 2.7V to 5V
- Digital multimeters (DMMs) to measure output voltage and supply and output current

## Connections and Setup

The MAX2209 EV kit is fully assembled and tested. This section provides a step-by-step guide to operating the MAX2209 EV kit  and  testing  the  device's  functionality.

Caution: Do not turn on the DC power supply or the RF signal generator until all connections are completed.

- 1)  Connect a DC power supply set to 2.85V (through a DMM, if desired) to the V CC  and GND terminals on the EV kit. If available, set the current limit to 10mA. Do not turn on the power supply.
- 2)  Connect the output (T1) to a DMM to measure output voltage.
- 3)  Set the signal generator output to -5dBm, f = 800MHz. Using the power meter, determine the actual power output of the signal generator. Use this value to determine proper operation of the part.
- 4)  Connect the signal generator to the SMA connector. Do not turn on the signal generator.
- 5)  Turn  on  the  DC  power  supply;  the  supply  current should read approximately 3.5mA.
- 6)  Activate  the  signal  generator.  The  output  voltage should read approximately 0.9V.

Figure 1. MAX2209 EV Kit Schematic

<!-- image -->

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX2209 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX2209 Evaluation Kit

Figure 3. MAX2209 EV Kit Component Placement GuideComponent Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.