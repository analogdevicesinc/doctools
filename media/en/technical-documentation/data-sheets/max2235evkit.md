<!-- lastmod 2022-08-02 -->
## General Description

The MAX2235 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2235 power amplifier (PA). It enables testing of the device's RF performance and requires no additional support circuitry. The EV kit's signal inputs and outputs use SMA connectors to facilitate the connection of RF test equipment.

The MAX2235 EV kit is assembled with a MAX2235 and incorporates input and output matching components optimized for the 824MHz to 849MHz RF frequency band. All matching components may be changed to work at RF frequencies from 800MHz to 1000MHz.

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| ATC                | 516-622-4700 | 516-622-4748 |
| Kamaya             | 219-489-1533 | 219-489-2261 |
| Murata Electronics | 800-831-9172 | 814-238-0490 |
| Toko               | 408-432-8281 | 408-943-9790 |

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| C1            |     1 | 100pF, 5% ceramic capacitor (0603) Murata GRM39COG101J050V    |
| C2            |     1 | 68pF, 5% ceramic capacitor (0603) Murata GRM39COG680J050V     |
| C3, C4        |     2 | 1000pF, 10% ceramic capacitors (0603) Murata GRM39X7R102K050V |
| C5, C6        |     2 | 100pF, 5% ceramic capacitors (0402) Murata GRM36COG101J050V   |
| C7            |     1 | 22pF, 5% ceramic capacitor (0603) Murata GRM39COG220J050V     |
| C8            |     1 | 0.068µF, 10% Murata GRM39X7R683K016V                          |
| C9, C10       |     2 | 470pF, 10% ceramic capacitors (0603) Murata GRM39X7R471K050V  |
| C11           |     1 | 220pF, 5% ceramic capacitor (0603) Murata GRM39COG221J050V    |
| C12           |     1 | 1500pF, 10% ceramic capacitor (0603) Murata GRM39X7R152K0504  |
| C13           |     1 | 47pF, 5% ceramic capacitor ATC 100A470JW150X                  |

<!-- image -->

Features

- ♦ Easy Evaluation of MAX2235
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Input and Output Matched for Operation from 824MHz to 849MHz
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2235EVKIT | -40°C to +85°C | 20 TSSOP-EP  |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C14           |     1 | 11pF, 5% ceramic capacitor ATC 100A110JW150X                       |
| C15           |     1 | 0.01µF, 10% ceramic capacitor (0805) Murata GRM40X7R103K050V       |
| C16           |     1 | 1µF, +80%, -20% ceramic capacitor (1206) Murata GRM42-6Y5V105Z025V |
| C17, C18      |     2 | 1000pF, 10% ceramic capacitors (0805) Murata GRM40X7R102K050V      |
| L1            |     1 | 8.2nH (0603) inductor Toko LL1608-FH8N2K                           |
| L3            |     1 | 30-gauge wire short                                                |
| J1, J2        |     2 | SMA connectors (PC edge mount) E.F. Johnson 142-0701-801           |
| J3, J4        |     2 | Test points                                                        |
| JU1           |     1 | 3-pin header (0.1" centers)                                        |
| R1            |     1 | 0 Ω resistor (0603) Kamaya RMC16-000T                              |
| VCTRL         |     1 | 1-pin header                                                       |
| U1            |     1 | MAX2235EUP (TSSOP-20)                                              |
| None          |     1 | MAX2235 EV kit PC board                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2235 Evaluation Kit

## Quick Start

The MAX2235 EV kit is fully assembled and factory tested.  Follow  the  instructions  in  the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2235. It is intended as a guide only, and some substitutions are possible.

- One RF signal generator capable of delivering at least +10dBm of output power at the operating frequency (HP8648C, or equivalent)
- One RF power sensor capable of handling at least +20dBm of output power at the operating frequency (HP8482A, or equivalent)
- One RF power meter capable of measuring up to +20dBm of output power at the operating frequency (HP EPM-441A, or equivalent)
- An RF spectrum analyzer that covers the operating frequency range of the MAX2235 as well as a few harmonics (HP8561E, for example)
- A power supply capable of up to 1A at +2.7V to +5.5V
- An optional ammeter for measuring the supply current
- Two 50 Ω SMA cables
- One SMA 20dB pad
- Network Analyzer (HP8753D, for example) to measure small-signal return loss and gain (optional)

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's function. Do not turn on the DC power or RF signal generators until all connections are made.

- 1) Connect a DC supply set to +3.6V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. Do not turn on the supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 2) Connect one RF signal generator to the RFIN SMA connector; do not turn on the generator's output. Set the generator for an output frequency of 836MHz at a power level of 0dBm.
- 3) Connect a 20dB pad to the RFOUT SMA connector on the EV kit. This is to prevent overloading of the power sensor and the power meter.
- 4) Connect a power sensor to the 20dB pad.
- 5) Connect the power sensor to a power meter. Set the power meter offset to 20dB and frequency to 836MHz.
- 6) Turn on the DC supply. The supply current should read approximately 70mA.
- 7) Activate the RF generator's output. The power meter should read approximately +30dBm. The supply-current should increase to approximately 600mA.
- 8) Another method for determining gain is by using a Network Analyzer (optional). This has the advantage of displaying gain versus a swept-frequency band, in addition to displaying input and output return loss. Refer to the Network Analyzer manufacturer's user manual for setup details.

## Layout Issues

A good PC board (PCB) is an essential part of an RF circuit design. The EV kit PCB can serve as a guide for laying out a board using the MAX2235. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PCB. Each VCC node on the PCB should have its own decoupling capacitor. This minimizes supply coupling from one section of the IC to another. A star topology for the supply layout, in which each VCC node on the circuit has a separate connection to a central VCC node, can further minimize coupling between sections of the IC.

<!-- image -->

## MAX2235 Evaluation Kit

<!-- image -->

Figure 1. MAX2235 EV Kit Schematic

<!-- image -->

Figure 2. MAX2235 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

ase re

3 Please regist Figure 3. MAX2235 EV Kit PC Board Layout-Component Side MAX2235 Evaluation Kit ase regis ase re ase re ase re Figure 6. MAX2235 EV Kit PC Board Layout-Solder Side Please register! Figure 4. MAX2235 EV Kit PC Board Layout-Ground Plane Figure 5. MAX2235 EV Kit PC Board Layout-Power Plane Please regis Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

4

<!-- image -->