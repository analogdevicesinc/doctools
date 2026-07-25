<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX2387/MAX2388/MAX2389 Evaluation Kits

## General Description

The MAX2387/MAX2388/MAX2389 evaluation kits (EV kits)  simplify  evaluation of the MAX2387/MAX2388/ MAX2389. The EV kits allow the evaluation of the lownoise amplifier (LNA) as well as the downconverter mixer without the use of any additional support circuitry. The board comes in a single-ended IF load and singleended VCO configuration. The signal inputs and outputs use SMA connectors to simplify the connection of RF test equipment.

The MAX2387/MAX2388/MAX2389 are assembled with an associated IC and incorporate input- and outputmatching components optimized for RF frequencies from 2.11GHz to 2.17GHz and an IF frequency of 190MHz.

| DESIGNATION             |   QTY | DESCRIPTION                                                                                   |
|-------------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C18, C19, C22       |     4 | 6800pF ±10%, 10V ceramic capacitors (0402) Murata GRM36X7R682K025                             |
| C2, C27                 |     2 | 0.8pF ± 0.1pF, 50V ceramic capacitors (0402) Murata GRM36COG0R8B050                           |
| C3, C5                  |     2 | 82pF ±5%, 10V ceramic capacitors (0402) Murata GRM36COG820J050                                |
| C4                      |     1 | 0.068µF ±10%, 10V ceramic capacitor (0402) Murata GRM36X5R683K010                             |
| C6, C7, C8, C17         |     0 | Not installed                                                                                 |
| C11                     |     1 | 0.5pF ±0.1pF, 50V ceramic capacitor (0402) Murata GRM36COG0R5B050                             |
| C12, C13, C24, C25, C26 |     5 | 0.01µF ±10%, 16V ceramic capacitors (0402) Murata GRM36X7R103K016 or Taiyo Yuden EMK105B103KW |
| C14, C15                |     2 | 39pF ±5%, 50V ceramic capacitors (0402) Murata GRM36COG390J050                                |
| C16, C23                |     2 | 22pF ±5%, 050 ceramic capacitors (0402) Murata GRM36COG220J050 or Taiyo Yuden UMK105CH220JW   |
| C20                     |     1 | 0.01µF ±10%, 16V ceramic capacitor (0603) Murata GRM39X7R103K016                              |

## Features

- ♦ +2.7V to +3.3V Single-Supply Operation
- ♦ 50 Ω SMA Inputs and Outputs on RF, IF, and LO Ports for Easy Testing
- ♦ All Matching Components Included
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE     | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX2387 EVKIT | -40°C to +85°C | 12 QFN       |
| MAX2388 EVKIT | -40°C to +85°C | 12 QFN       |
| MAX2389 EVKIT | -40°C to +85°C | 12 QFN       |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                               |
|---------------------------------|-------|---------------------------------------------------------------------------|
| C21                             |     1 | 10µF ±20%, 10V tantalum capacitor (B case) AVX TAJB106M010R               |
| L1, L4                          |     2 | 2.2nH ±10% inductors (0402) Coilcraft 0402CS-2N2XKBG                      |
| L2, L3                          |     2 | 27nH ±5% inductors (0603) Coilcraft 0603CS-27NXJBC                        |
| C9, L5, L6                      |     3 | 0 Ω resistors (0402)                                                      |
| L7                              |     1 | 5.6nH ±5% inductor (0402) Coilcraft 0402CS-5N6XJBG                        |
| R1                              |     1 | 20 Ω ±5% resistor (0402)                                                  |
| R2, R3                          |     2 | 10k Ω ±5% resistors (0402)                                                |
| R4                              |     1 | 10k Ω ±1% resistor (0402)                                                 |
| R5                              |     1 | 24k Ω ±1% resistor (0402)                                                 |
| T1                              |     1 | Balun transformer (B4F type) Toko 617DB-1018                              |
| T2                              |     1 | Balun transformer Murata LDB15C201A2400                                   |
| LNA_IN, LNA_OUT, LO, MIX_IN, IF |     5 | SMA connectors (PC-edge mount) EFJohnson 142-0701-801 or Digi-Key J502-ND |
| JU1, JU2                        |     2 | 3-pin headers Digi-Key S1012-36-ND or equivalent                          |
| None                            |     2 | Shunts for JU1-JU12 Digi-Key S9000-ND or equivalent                       |
| VCC, GND                        |     2 | Test points Mouser 151-203 or equivalent                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2387/MAX2388/MAX2389 Evaluation Kits

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 847-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 770-436-1300 | 770-436-3030 |
| Toko       | 708-297-0070 | 708-699-1194 |

Note: Please indicate that you are using the MAX2387/ MAX2388/MAX2389 when contacting these component suppliers.

## Quick Start

The MAX2387/MAX2388/MAX2389 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

Table 1 lists the test equipment required to verify MAX2387/MAX2388/MAX2389 operation. It is intended as a guide only, and some substitutions are possible.

## Connections and Setup

This section provides a step-by-step guide to operating the  EV  kits  and  testing  the  devices'  functions. Do not turn on DC power or RF signal generators until all connections are made.

## Testing the LNA

- 1)  Set  the SHDN jumper (JU2) on the EV kit to VCC. This enables the device.
- 2)  Set  the  GAIN jumper (JU1) on the EV kit to VCC (high-gain mode) or to GND (low-gain mode).
- 3) Connect a DC supply set to +2.7V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. If available, set the current limit to 20mA. Do not turn on the supply.
- 4) Connect one RF signal generator to the LNA\_IN SMA connector. Do not turn on the generator's output. Set the generator to an output frequency of 2.14GHz and set the generator power level to -30dBm.
- 5)  Connect the spectrum analyzer to the LNA\_OUT SMA connector. Set the spectrum analyzer to a center  frequency of 2.14GHz and a total span of 10MHz.
- 6)  Turn on the DC supply; the supply current should read approximately 6.5mA (low-gain mode) or 9.5mA (high-gain mode), depending on the part version.

## Table 1. Test Equipment

| EQUIPMENT            | DESCRIPTION                                                                                                          |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| RF Signal Generators | Capable of delivering at least 0dBm of output power up to 2.5GHz (HP 8648C or equivalent)                            |
| RF Spectrum Analyzer | Capable of covering the operating frequency range of the devices as well as a few harmonics (HP 8561E or equivalent) |
| Power Supply         | Capable of up to 40mA at +2.7V to +3.3V                                                                              |
| Ammeter              | To measure supply current (optional)                                                                                 |
| Network Analyzer     | To measure small-signal return loss and gain (optional, HP 8753D or equivalent)                                      |

- 7) Activate the RF generator's output. A 2.14GHz signal shown on the spectrum analyzer display should indicate a magnitude of approximately -15dBm in highgain mode. In low-gain mode the magnitude should read approximately -46.5dBm for the MAX2387 and -33dBm for the MAX2388/MAX2389. Be sure to account for cable losses (between 0.5dB and 2dB) and circuit board losses (approximately 0.5dB) when computing gain and noise figure.
- 8) (Optional) Another method for determining gain is by using a network analyzer. This has the advantage of displaying gain over a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.

## Testing the Mixer

- 1) Connect a DC supply set to +2.7V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. If available, set the current limit to 20mA. Do not turn on the supply.
- 2)  Connect one RF signal generator to the LO SMA connector. Do not turn on the generator output. Set the frequency to 2.33GHz, and output power to -10dBm (MAX2387/MAX2388) or -4dBm (MAX2389). This is the LO signal.
- 3) Connect another RF signal generator to the MIX\_IN SMA connector. Do not turn on the generator output. Set the signal generator to 2.14GHz and output power level to -30dBm.
- 4)  Connect the spectrum analyzer to the IF SMA connector. Set the spectrum analyzer to a center frequency of 190MHz and a total span of 10MHz.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2387/MAX2388/MAX2389 Evaluation Kits

- 5) Turn on the DC supply and the signal generator outputs.
- 6)  A  190MHz signal shown on the spectrum analyzer display should indicate a magnitude of approximately -20dBm, indicating a conversion gain of 10dB. Be sure to account for cable losses (between 0.5dB and 2dB) and circuit board losses including the balun (approximately 1.0dB) when computing gain and noise figure.

<!-- image -->

## Layout

A good PC board layout is an essential part of an RF circuit  design.  The  EV  kit's  PC  board  can  serve  as  a guide for laying out a board using the MAX2387/ MAX2388/MAX2389.

Keep RF signal lines as short as possible to minimize losses and radiation. Always use controlled impedance lines on all high-frequency inputs and outputs and use low-inductance connections to ground on all GND pins. At the mixer outputs, keep the differential lines together and of the same length to ensure signal balance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2387/MAX2388/MAX2389 Evaluation Kits

Figure 1. MAX2387/MAX2388/MAX2389 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2387/MAX2388/MAX2389 Evaluation Kits

<!-- image -->

Figure 2. MAX2387/MAX2388/MAX2389 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX2387/MAX2388/MAX2389 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 3. MAX2387/MAX2388/MAX2389 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Figure 5. MAX2387/MAX2388/MAX2389 EV Kit PC Board Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2387/MAX2388/MAX2389 Evaluation Kits

Figure 6. MAX2387/MAX2388/MAX2389 EV Kit PC Board Layout-Ground Layer 3

<!-- image -->

Figure 7. MAX2387/MAX2388/MAX2389 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->