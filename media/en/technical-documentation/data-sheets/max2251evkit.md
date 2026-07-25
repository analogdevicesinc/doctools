<!-- lastmod 2022-08-02 -->
## General Description

The MAX2251 evaluation kit (EV kit) simplifies evaluation of the MAX2251 power amplifier (PA), which is designed for  operation in IS-136-based TDMA and AMPS. The kit enables testing of the device's RF performance and requires no additional support circuitry. The EV kit's signal input and output use SMA connectors to facilitate the connection of RF test equipment.

Each kit is assembled with the MAX2251 and incorporates input and output matching components optimized for the 824MHz to 849MHz RF frequency band. The EV kit is capable of operating at RF frequencies from 750MHz to 1000MHz with the appropriate matching components.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C1            |     1 | 4.7 µ F ± 20%,10Vtantalum cap AVXTAJA475M010(10VAcase) AVXTAJA475M020(20VAcase) (Aor Bcase PCboard pads) |
| C3            |     1 | 9pF ± 0.5pF ceramic cap (0402) Murata GRM36COG090D050 or Taiyo Yuden UMK105CH090DW                       |
| C4, C7, C10   |     3 | 0.01 µ F ± 10% ceramic caps (0402) Murata GRM36X7R103K016 or Taiyo Yuden EMK105BJ103KV                   |
| C5, C6, C11   |     3 | 100pF ± 5% ceramic caps (0402) Murata GRM36COG101J050 or Taiyo Yuden UMK105CH101JW                       |
| C9            |     1 | 4700pF ± 10% ceramic cap (0402) Murata GRM36X7R472K025 or Taiyo Yuden TMK105B472KW                       |
| C12           |     1 | 10pF ± 1% porcelain capacitor ATC 100A100FW150X                                                          |
| C13           |     1 | 220pF ± 10% ceramic cap Murata GRM36COG221K050                                                           |
| C14           |     1 | 4.7pF ± 0.25pF ceramic cap (0402) Murata GRM36COG4R7C050 Taiyo Yuden EVK105CH4R7JW                       |

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2251
- ♦ +2.8V to +4.5V Single-Supply Operation
- ♦ RF Input/Output Matched for 824MHz to 849MHz Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX2251EVKIT | -40 ° C to +85 ° C | 4 ✕ 4 UCSP   |

## MAX2251 EV Kit Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                            |
|-----------------|-------|------------------------------------------------------------------------|
| C15             |     1 | Do not install                                                         |
| L1              |     1 | 4.7nH ± 5% inductor (0402) Murata LQG10A4N7S00                         |
| L2              |     1 | 7.15nH ± 5% air core inductor Coilcraft 1606-7                         |
| L3              |     1 | Do not install                                                         |
| R1, R2          |     2 | 10k Ω ± 5% resistors (0402)                                            |
| R3              |     1 | 47.5k Ω ± 1% resistor (0603)                                           |
| R4              |     1 | 11k Ω ± 1% resistor (0603)                                             |
| B1              |     1 | Ferrite bead Murata BLM11P300SPT                                       |
| JU1, JU2        |     2 | 3-pin headers                                                          |
| None            |     2 | Shunts (JU1, JU2)                                                      |
| RFIN, RFOUT     |     2 | SMA connectors (PC edge mount) EFJohnson 142-0701-801 Digi-Key J502-ND |
| V CC , GND, TP1 |     3 | Test points, Mouser 151-203                                            |
| U1              |     1 | MAX2251E/B (16 CSP)                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX2251 Evaluation Kit

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          | WEB                |
|--------------------|--------------|--------------|--------------------|
| ATC                | 516-622-4700 | 516-622-4748 | www.atceramics.com |
| AVX                | 803-946-0690 | 803-626-3123 | www.avx-corp.com   |
| Coilcraft          | 847-639-6400 | 847-639-1469 | www.coilcraft.com  |
| EFJohnson          | 402-474-4800 | 402-474-4858 | www.efjohnson.com  |
| Kamaya             | 219-489-1533 | 219-489-2261 | www.kamaya.com     |
| Murata Electronics | 800-831-9172 | 814-238-0490 | www.murata.com     |
| NEC                | 408-243-2111 | 408-243-2410 | www.cel.com        |
| ROHM               | 408-433-2225 | 408-434-0531 | www.rohm.com       |
| Taiyo Yuden        | 408-573-4150 | 408-573-4159 | www.t-yuden.com    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2251 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists the test equipment recommended to verify operation of the MAX2251. It is intended as a guide only, and some substitutions are possible:

- An RF signal generator capable of delivering at least +10dBm of output power at the operating frequency with TDMA modulation (HP E4433G or equivalent)
- An RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP 8482A, or equivalent)
- A 20dB high-power attenuator
- An RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP EPM-441A or equivalent)
- An RF spectrum analyzer capable of measuring ACPR in NADC modulation mode and covering the MAX2251's operating frequency range (Rohde and Schwarz FSEA20, for example)
- A power supply capable of up to 1.5A at +2.8V to +4.5V
- A high-impedance voltmeter for measuring the actual operating voltage
- An ammeter for measuring the supply current (optional)
- Two 50 Ω SMA cables
- A network analyzer (HP 8753D, for example) to measure small-signal return loss and gain (optional)

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functions. Do not turn  on  the  DC  power or RF signal generator until all connections are made:

- 1) Connect a 20dB high-power attenuator to the RFOUT SMA connector on the EV kit. This will prevent overloading the power sensor and the power meter.
- 2) Connect a DC supply set to +3.3V (through an ammeter, if desired), and connect the voltmeter to the EV kit's VCC and GND terminals.
- 3) Connect an RFIN signal generator to the RFIN SMA connector. Set the generator for an 836MHz output frequency at a 0dBm power level.
- 4) Connect the power sensor to the power meter. Calibrate the power sensor for 836MHz. Set the power meter offset to compensate the 20dB attenuator plus any cable loss (between 0.5dB and 2dB).
- 5) Connect a power sensor to the 20dB high-power attenuator.
- 6) Place the MODE jumper (JU1) in the VCC position and the SHDN jumper (JU2) in the VCC position.
- 7) Turn on the DC supply. The supply current should read approximately 210mA.
- 8) Activate the RF generator's output. Set the RF generator's output to produce a reading of +30dBm on the power meter. Verify that the voltmeter reads +3.3V. Iteratively  adjust  the  power  supply's  output and the RF generator's output to produce a +3.3V reading on the voltmeter and a reading of +30dBm on the power meter. The supply current should increase to approximately 750mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Layout Issues

A good PC board is an essential part of an RF circuit design. The EV kit PC board can serve as a guide for laying out a board using the MAX2251. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC node on the PC board should have its own decoupling capaci-

## MAX2251 Evaluation Kit

tor.  This  minimizes supply coupling from one section of the IC to another. Using a star topology for the supply layout, in which each VCC node on the circuit has a separate connection to a central VCC node, can further minimize coupling between sections of the IC.

<!-- image -->

Figure 1. MAX2251 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2251 Evaluation Kit

<!-- image -->

Figure 2. MAX2251 EV Kit-Component Placement Guide

Figure 3. MAX2251 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2251 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 5. MAX2251 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX2251Evaluation Kit

Figure 6. MAX2251 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5