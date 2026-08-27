<!-- lastmod 2022-08-02 -->
## General Description

The MAX2307 evaluation kit simplifies evaluation of the MAX2307 integrated RF upconverter-driver. It enables testing of all functions with no additional support circuitry. Signal inputs and outputs use SMA connectors and are compatible with the 50 Ω impedance of the test equipment.

Each EV kit is shipped with a Maxim device configured for operation with an IF input frequency of 165MHz and LO input frequency of 722MHz to 760MHz. The outputmatching network of each kit is optimized for an RF output frequency of 887MHz to 925MHz.

| DESIGNATION          |   QTY | DESCRIPTION                                                   |
|----------------------|-------|---------------------------------------------------------------|
| C1, C4, C6, C11, C13 |     5 | 100pF 5% ceramic capacitors (0402) Murata GRM36C0G101J050     |
| C15                  |     2 | Not installed                                                 |
| C16                  |     1 | 3.0pF ceramic capacitor (0402) Murata GRM36C0G030B050         |
| C3                   |     1 | 4.7 µ F A Case 10V AVXTAJA475M010                             |
| C2, C7, C12, C14     |     4 | 0.01 µ F 10% ceramic capacitors (0402) Murata GRM36X7R103K016 |
| C8                   |     1 | 1.5pF ± 0.1pF ceramic capacitor (0402) Murata GRM36C0G1R5B050 |
| C9, C10              |     2 | 10pF ± 0.25% ceramic capacitors (0402) Murata GRM36C0G100C050 |

<!-- image -->

## Features

- ♦ +2.8V to +4.2V Single Supply
- ♦ Output Matched to 50 Ω from 887MHz to 925MHz
- ♦ Differential 400 Ω IF Input Matched and Converted to 50 Ω Single-Ended for Ease of Lab Testing
- ♦ Optimal Component Placement
- ♦ Easy Evaluation of All Product Functions
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART NUMBER    | TEMP. RANGE        | PIN-PACKAGE   |
|----------------|--------------------|---------------|
| MAX2307EVKIT-T | -40 ° C to +85 ° C | 3 × 4 UCSP    |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                 |
|--------------------|-------|-----------------------------------------------------------------------------|
| L1, L2             |     2 | 5.6nH inductors (0402) Murata LQP10A5N6B00                                  |
| L3                 |     1 | 180nH inductor (0603) Coilcraft 0603CS-18XJBC                               |
| L4                 |     1 | 6.2nH inductor (0402) Coilcraft 0402CS-6N2XJBG                              |
| R1, R2             |     2 | 10k Ω 5% resistors (0402)                                                   |
| T1                 |     1 | Balun transformer (B5F type) Toko 458DB-1011                                |
| RF_OUT, LOIN, IFIN |     3 | SMA connectors (PC edge- mount) EF Johnson 142-0701-801 or Digi-Key J502-ND |
| JU1, JU2           |     2 | 3-pin headers                                                               |
| VCC, GND, VGC      |     3 | Test points Mouser 151-203                                                  |
| U1                 |     1 | MAX2307EBC (UCSP-4 × 3L)                                                    |
| None               |     1 | MAX2307 PC board                                                            |
| None               |     1 | MAX2307 data sheet                                                          |
| None               |     1 | MAX2307 EV Kit data sheet                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2307 Evaluation Kit

## Quick Start

Each EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section.

## Test Equipment Required

| EQUIPMENT                  | DESCRIPTION                                                |
|----------------------------|------------------------------------------------------------|
| DC Power Supply            | Capable of supplying +2.8V to 4.2V at a minimum of 50mA    |
| HP 8561E Spectrum Analyzer | Or equivalent high-sensitivity spectrum analyzer           |
| Digital Multimeters        | To monitor supply voltage and supply current (if desired)  |
| HP 8648C RF Generators, 2  | For the IFIN and LO inputs or equivalent sine-wave sources |

## Connections and Setup

- 1) Verify the DC power supply is set to less than +4.2V before attaching the supply to the EV kit. A good starting voltage is +2.8V.
- 2) Set VGC to +2.2V.
- 3) Verify  the  jumpers  JU1  and JU2 are in the 'VCC' position.
- 4) The supply current should be approximately 30mA.
- 5) Connect a signal generator to the IFIN connector using an SMA cable. Set the generator's output to 165MHz at -20dBm power level.
- 6) Connect a second signal generator to the LO input connector using an SMA cable. Set the generator's output to 741MHz at -15dBm power level.
- 7) Connect the RF output of the EV kit to the spectrum analyzer using an SMA cable. Take care to use quality  connector adapters for the spectrum analyzer's input. Avoid using BNC-type connectors due to their high VSWR while operating in the gigahertz range.

## Table 1. Nominal DC Voltage

| PIN NUMBER   | PIN NAME     |   NOMINAL DC VOLTAGE (V) |
|--------------|--------------|--------------------------|
| A1           | VCC          |                     +2.8 |
| A2           | VCCMIXP      |                     +2.8 |
| A3           | VCCMIXM      |                     +2.8 |
| A4, C1       | GND          |                        0 |
| B1           | LOIN/ SHDNLO |                     +2.8 |
| B3           | GC           |                     +2.2 |
| B4           | RFOUT        |                     +2.8 |
| C2           | IFINP        |                    0.948 |
| C3           | IFINM        |                    0.948 |
| C4           | SHDN         |                     +2.8 |

- 8) To assist in troubleshooting, verify the correct voltages on the PC board with a multimeter. Use Table 1 to  verify  correct  node  voltage during proper operation.
- 9) Set  the  spectrum analyzer's center frequency to 906MHz.
3. 10)Set the marker position to the peak level.
4. 11)Read the output power of the center frequency. This should be about +4dBm, depending on cable and connector losses.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEB               |
|------------|--------------|--------------|-------------------|
| AVX        | 843-448-9411 | 843-448-1943 | www.avxcorp.com   |
| Coilcraft  | 847-639-6400 | 843-639-1469 | www.coilcraft.com |
| Digi-Key   | 800-344-4539 | 218-681-3380 | www.digikey.com   |
| EF Johnson | 800-328-3911 | 507-835-6969 | www.efjohnson.com |
| Murata     | 800-831-9172 | 814-238-0490 | www.murata.com    |
| Toko       | 800-745-8656 | 708-699-1194 | www.tokoam.com    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2307 Evaluation Kit

Figure 1. MAX2307 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2307 Evaluation Kit

<!-- image -->

Figure 2. MAX2307 EV Kit PC Board Layout-Top Silkscreen

Figure 3. MAX2307 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2307 EV Kit PC Board Layout-GND

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

4

Figure 5. MAX2307 EV Kit PC Board Layout-GND2

<!-- image -->

## MAX2307 Evaluation Kit

Figure 6. MAX2307 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5