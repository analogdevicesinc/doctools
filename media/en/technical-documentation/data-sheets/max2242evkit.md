<!-- lastmod 2022-08-02 -->
## General Description

The MAX2242 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2242 power amplifier (PA), which is designed for 2.4GHz ISM-band direct-sequence spread-spectrum (DSSS) applications. The kit enables testing of the device's RF performance and requires no additional support circuitry. The EV kit input and output use SMA connectors to facilitate the connection to RF test equipment.

Each kit is assembled with the MAX2242 and incorporates input- and output-matching components optimized for the 2.4GHz to 2.5GHz RF frequency band.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                       |
|-----------------|-------|---------------------------------------------------------------------------------------------------|
| C1, C9          |     2 | 33pF 5% 50V ceramic capacitors (0402), Murata GRM36C0G330J050AD or Taiyo Yuden UMK105CH330JW      |
| C2              |     1 | 1.8pF ± 0.1pF 50V ceramic capacitor (0402), Murata GRM36C0G1R8B050AD or Taiyo Yuden EVK105CH1R8JW |
| C3, C6, C8, C10 |     4 | 0.1 µ F 10% 10V ceramic capacitors (0402) Murata GRM36X5R104K010 or Taiyo Yuden LMK105BJ104MV     |
| C4, C7          |     2 | Not installed                                                                                     |
| C5              |     1 | 22 µ F 16V tantalum capacitor (Case B) AVX TAJB226M016                                            |
| C12             |     1 | 6.0pF ± 0.1pF 50V ceramic capacitor (0402), Murata GRM36C0G060B050AD or Taiyo Yuden EVK105CH060JW |
| L1              |     1 | 10nH ± 0.3nH 5% inductor (0402) Coilcraft 0402CS-10NXJBG                                          |
| L2              |     1 | 2.2nH inductor (0402) Murata LQP10A2N2B00                                                         |

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2242
- ♦ +2.7V to +3.6V True Single-Supply Operation
- ♦ Output Matched for 2.4GHz to 2.5GHz Operation
- ♦ All Matching Components Included

## Ordering Information

| PART         | TEMP. RANGE        | IC-PACKAGE   |
|--------------|--------------------|--------------|
| MAX2242EVKIT | -40 ° C to +85 ° C | 3 × 4 UCSP   |

## MAX2242 EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R1, R2        |     2 | 8.06k Ω ± 1% resistors (0402)                                              |
| R3            |     1 | 47k Ω ± 5% resistor (0402)                                                 |
| R4            |     1 | 51 Ω ± 5% resistor (0402)                                                  |
| IN, OUT       |     2 | SMA connectors (PC edge- mount) EFJohnson 142-0701-801 or Digi-Key J502-ND |
| JU1           |     1 | 3-pin header Digi-Key S1012-36-ND or equivalent                            |
| BIAS, PDOUT   |     2 | 1-pin headers Digi-Key S1012-36-ND or equivalent                           |
| None          |     1 | Shunt for JU1 Digi-Key S9000-ND or equivalent                              |
| VCC, GND      |     2 | Test points Mouser 151-203                                                 |
| U1            |     1 | MAX2242EBC (3 × 4 UCSP)                                                    |
| None          |     1 | MAX2242 PC board                                                           |
| None          |     1 | MAX2242 data sheet                                                         |
| None          |     1 | MAX2242 EV kit data sheet                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2242 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Coilcraft   | 847-639-6400 | 847-639-1469 |
| EF Johnson  | 402-474-4800 | 402-474-4858 |
| Murata      | 800-831-9172 | 814-238-0490 |
| Taiyo Yuden | 800-348-2496 | 408-434-0375 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2242 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the test equipment recommended to verify operation of the MAX2242. It is intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least  +10dBm of output power at the operating frequency with 802.11b comparable source
- One RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP 8482A, or equivalent)
- One 20dB high-power attenuator
- One RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP EPM-441A or equivalent)
- One RF spectrum analyzer capable of measuring ACPR and covering the MAX2242's operating frequency range (Rohde and Schwartz FSEA20, for example)
- One power supply capable of delivering up to 0.5A at +2.7V to +3.6V
- One  high-impedance voltmeter for measuring the actual operating voltage
- One ammeter for measuring the supply current (optional)
- Two 50 Ω SMA cables
- One network analyzer (HP 8753D, for example) to measure small signal return loss and gain (optional)

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functions. Do not turn  on  the  DC  power or RF signal generator until all connections are made:

- 1) Connect a 20dB high-power attenuator to the OUT SMA connector on the EV kit. This will prevent overloading the power sensor and the power meter.
- 2) Connect a DC supply set to +3.3V (through an ammeter if desired), and connect the voltmeter to the EV kit's VCC and GND terminals.
- 3) Connect an RF signal generator to the IN SMA connector. Set the generator for a 2.45GHz output frequency at a -10dBm power level.
- 4) Connect the power sensor to the power meter. Calibrate the power sensor for 2.45GHz. Set the power meter offset to compensate the 20dB attenuator plus any cable loss (between 0.5dB and 2dB), and circuit board losses (approximately 0.15dB).
- 5) Connect a power sensor to the 20dB high-power attenuator.
- 6) Place the SHDN jumper (JU1) in the ON position.
- 7) Turn on the DC supply and adjust BIAS voltage to give idle current of 280mA.
- 8) Activate the RF generator's output. Set the RF generator's output to produce a reading of +22dBm on the power meter. Verify that the voltmeter reads +3.3V. Iteratively  adjust  the  power  supply's  output and the RF generator's output to produce a +3.3V reading on the voltmeter and a reading of +22dBm on the power meter.
- The supply current should increase to approximately 305mA.

## Layout Issues

A good PC board is an essential part of an RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2242. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC\_ node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the IC to another. Using a star topology for the supply layout, in which each VCC\_ node on the circuit has a separate connection to a central VCC node, can further minimize coupling between sections of the IC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2242 Evaluation Kit

<!-- image -->

Figure 1. MAX2242 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2242 Evaluation Kit

Figure 2. MAX2242 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX2242 EV Kit PC Board Layout-Component Side

<!-- image -->

4

Figure 4. MAX2242 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX2242 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX2242 Evaluation Kit

Figure 6. MAX2242 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5