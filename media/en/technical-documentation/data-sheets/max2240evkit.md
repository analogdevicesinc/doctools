<!-- lastmod 2022-08-02 -->
## General Description

The MAX2240 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2240 power amplifier (PA). It enables testing of the device's RF performance and requires no additional support circuitry. The EV kit's signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment.

The MAX2240 EV kit is assembled with a MAX2240 and incorporates output matching components optimized for 2.4GHz to 2.5GHz.

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| Digi-Key           | 218-681-6674 | 218-681-3380 |
| Kamaya             | 219-489-1533 | 219-489-2261 |
| Murata Electronics | 800-831-9172 | 814-238-0490 |
| Toko               | 408-432-8281 | 408-943-9790 |

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1, C2, C3    |     3 | 470pF ±10% ceramic caps (0402) Murata GRM36X7R471K050A          |
| C4, C9        |     2 | 220pF ±10% ceramic caps (0402) Murata GRM36X7R221K050A          |
| C6            |     1 | 18pF ±5% ceramic cap (0402) Murata GRM36COG180J050A             |
| C5, C7, C10   |     3 | 1000pF ±10% 25V min ceramic caps (0402) Murata GRM36X7R102K050A |
| C8            |     1 | 8pF±2.5pF25V min ceramic cap(0402) MurataGRM36COG080D050A       |
| C11           |     1 | 1µF ±10% 10V min ceramic cap (0805) Murata GRM40X7R105010A      |
| C12           |     1 | 0.01µF ±10% 10V min ceramic cap (0402) Murata GRM36X7R103K016A  |

<!-- image -->

## Features

- ♦ Easy Evaluation of the MAX2240
- ♦ +2.7V to +5V Single-Supply Operation
- ♦ RF Output Matched for Operation from 2.4GHz to 2.5GHz
- ♦ Jumpers for Digital Power Control and Shutdown
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2240EVKIT | -40°C to +85°C | 9 UCSP       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                           |
|---------------|-------|-------------------------------------------------------|
| J1, J2, J3    |     3 | 3-pin headers, 0.1in centers Digi-Key S1012-36-ND     |
| J4, J5        |     2 | SMA connectors (PC edge mount) EFJohnson 142-0701-801 |
| J6, J7        |     2 | Connectors Digi-Key 500K-ND                           |
| L1            |     1 | 22nH inductor Toko LL1608FS-22NK                      |
| R1, R2, R3    |     3 | 8.2 Ω ±5% resistors (0402) Kamaya RMC 16S-18R2JT      |
| U1            |     1 | MAX2240EBL 9-pin ultra-chipscale package (UCSP)       |
| VCC, GND      |     2 | Test points                                           |
| None          |     1 | MAX2240 EV kit PC board, Rev B                        |
| None          |     1 | MAX2240 data sheet                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2240 Evaluation Kit

## Quick Start

The MAX2240 EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2240. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least  +5dBm of output power at the operating frequency (HP 8648D, or equivalent)
- One RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP 8482A, or equivalent)
- One RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP 438A, or equivalent)
- An RF spectrum analyzer that covers the MAX2240 operating frequency range, as well as a few harmonics (HP 8562E, for example)
- A power supply capable of up to 0.25A at +2.7V to +5V
- An optional ammeter for measuring the supply current
- Two 50 Ω SMA cables
- One SMA 20dB pad
- A network analyzer (HP 8753D, for example) to measure small-signal return loss and gain (optional)

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's function. Do not turn on the DC power or RF signal generators until all connections are made:

- 1) Connect a DC supply set to +3.2V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.
- 2) Connect one RF signal generator to the RFIN SMA connector; do not turn on the generator's output. Set the generator for an output frequency of 2.45GHz at a power level of +3dBm.
- 3) Connect a 20dB pad to the RFOUT SMA connector on the EV kit. This is to prevent overloading of the power sensor and the power meter.
- 4) Connect a power sensor to the 20dB pad.
- 5) Connect the power sensor to a power meter. Set the power meter offset to 20dB and frequency to 2.45GHz.
- 6) Connect jumpers J1, J2, and J3 to short D0 and D1 to VCC. This sets the MAX2240 to its highest power mode. The MAX2240 EV kit is shipped in this setting.
- 7) Turn on the DC supply. The supply current should read approximately 70mA.
- 8) Activate the RF generator's output. The power meter should read approximately +20dBm. The supply current should increase to approximately 105mA.
- 9) Another method for determining gain is by using a network analyzer (optional). This has the advantage of displaying gain versus a swept-frequency band, in  addition  to  displaying  input  return  loss.  Refer  to the network analyzer manufacturer's user manual for setup details.
- 10) The additional MAX2240 power modes are set by the jumper settings of J2 (D0) and J3 (D1). See Table 1 in the MAX2240 data sheet for these powerlevel settings.

## Layout Issues

A good PC board is an essential part of an RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2240. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the IC to another. A star topology for the supply layout, in which each VCC node on the circuit has a separate connection to a central VCC node, can further  minimize coupling between sections of the IC. See the Layout section of the MAX2240 data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2240 Evaluation Kit

Figure 1. MAX2240 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2240 Evaluation Kit

<!-- image -->

Figure 2. MAX2240 EV Kit Component Placement Guide

Figure 3. MAX2240 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2240 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 5. MAX2240 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX2240 Evaluation Kit

Figure 6. MAX2240 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2240 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products