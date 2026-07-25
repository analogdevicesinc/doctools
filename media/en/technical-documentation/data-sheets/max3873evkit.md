<!-- lastmod 2022-08-02 -->
## General Description

The MAX3873 evaluation kit (EV kit) simplifies evaluation of  the  MAX3873, a low-power 2.488Gbps/2.67Gbps clock recovery and data retiming IC. The EV kit enables testing of all  the  MAX3873 functions. SMA connectors are provided for the differential CML-compatible data and clock outputs. The differential data and clock outputs have on-board AC-coupling capacitors to allow direct connection to a high-speed oscilloscope. The MAX3873 EV kit is configured for 3.3V operation and consumes up to 150mA.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                          |
|--------------------|-------|--------------------------------------|
| C1-C6, C10-C22     |    19 | 0.1µF ±10% ceramic capacitors (0402) |
| C7                 |     1 | 0.01µF ±10% ceramic capacitor (0402) |
| C8                 |     1 | 33µF ±20% tantalum capacitor         |
| C9                 |     1 | 2.2µF ±10% ceramic capacitor (1206)  |
| C23-C26            |     0 | Not installed                        |
| D1                 |     1 | Red LED                              |
| J1-J6              |     6 | SMA connectors (edge-mount)          |
| J9-J12             |     0 | Not installed                        |
| R1                 |     1 | 392 Ω ±1% resistor (0402)            |
| L1-L4              |     4 | 56nH inductors                       |
| JU1-JU5, JU9, JU11 |     0 | Not installed                        |
| JU6-JU8, JU10      |     4 | 3-pin headers (0.1in centers)        |
| JU6-JU8, JU10      |     4 | Shunts                               |
| VCC, GND           |     2 | Test points                          |
| U1                 |     1 | MAX3873EGP (20-pin QFN) 4mm x 4mm    |
| None               |     1 | MAX3873 evaluation kit               |
| None               |     1 | MAX3873 data sheet                   |

<!-- image -->

## Features

- ♦ SMA Connections for All System I/Os
- ♦ Test Point for Monitoring Loss-of-Lock ( LOL )
- ♦ Single 3.3V Power-Supply Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE           |
|--------------|----------------|----------------------|
| MAX3873EVKIT | -40°C to +85°C | 20 QFN-EP (4mm x4mm) |

## Detailed Description

The MAX3873 EV kit is fully assembled and factory tested. It enables testing of all MAX3873 functions.

## Test Equipment Required

- 3.3V power supply with 300mA current capability
- Signal-source, 2.7Gbps minimum capability
- Jitter analyzer capable of 2.7Gbps performance
- Oscilloscope with at least 3GHz performance

## Connections

The serial data inputs (SDI+, SDI-) have on-board ACcoupling capacitors. All the MAX3873 data and clock outputs (SDO+, SDO-, SCLKO+, SCLKO-) are internally terminated to 50 Ω and have on-board AC-coupling capacitors. Configured in this way, these outputs can be directly connected to the 50 Ω inputs of a highspeed oscilloscope for analysis.

## Setup

- 1)  Select either 2.488Gbps or 2.67Gbps with JU10 (RATESET).
- 2)  Enable/Disable FASTRACK capture mode with JU6 (FASTRACK).
- 3)  Enable/Disable Clock output with JU8 (SCLKEN).
- 4) Select amplitude of CML outputs to high/medium/low with JU7 (MODE).
- 5) Connect a 2.488Gbps/2.67Gbps PRBS NRZ signal to (SDI+, SDI-) inputs with 50 Ω cables.
- 6) Connect the (SDO+, SDO-, SCLKO+, SCLKO-) outputs to a 50 Ω high-speed oscilloscope. Terminate unused outputs with 50 Ω .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3873 Evaluation Kit

Jitter  analysis  and  product  performance can also be observed by appropriately interfacing the EV kit with a bit-error-rate tester (BERT) and a jitter analyzer.

## Layout Considerations

The MAX3873's performance can be greatly affected by circuit board layout and design. Use good high-fre- quency design techniques, including minimizing ground inductances and using controlled-impedance transmission lines on the data and clock signals.

## Jumpers and Test Points

Figure 1. MAX3873 EV Kit Schematic

| NAME   | TYPE   | DESCRIPTION                   | VCC      | GND       | OPEN   |
|--------|--------|-------------------------------|----------|-----------|--------|
| JU10   | 3-pin  | Sets VCO frequency            | 2.67Gbps | 2.488Gbps | N/A    |
| JU6    | 3-pin  | Enables quick phase lock      | Enabled  | Disabled  | N/A    |
| JU7    | 3-pin  | Sets amplitude of CML outputs | Medium   | Low       | High   |
| JU8    | 3-pin  | Enables clock output          | Enabled  | Disabled  | N/A    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX3873 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX3873 Evaluation Kit

Figure 3. MAX3873 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX3873 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3873 Evaluation Kit

Figure 5. MAX3873 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 6. MAX3873 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4