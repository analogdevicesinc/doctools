<!-- lastmod 2022-08-02 -->
## General Description

The MAX2649 evaluation kit (EV kit) simplifies evaluation of the MAX2649. The EV kit allows the evaluation of the LNA without requiring additional support circuitry. The signal input and output use SMA connectors to simplify the connection of RF test equipment.

The MAX2649 EV kit is assembled with an associated IC and incorporates input and output matching components optimized for RF frequencies from 5150MHz to 5350MHz. For operation outside this range, refer to the MAX2649 data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| C1, C4, C6    |     3 | 3.9pF ceramic capacitors (0402) Murata GJ61555C1H3R9B  |
| C2            |     1 | 0.75pF ceramic capacitor (0402) Murata GJ61555C1HR75B  |
| C3            |     1 | 22pF ceramic capacitor (0402) Murata GRP1555C1H220J    |
| C5            |     1 | 20pF ceramic capacitor (0402) Murata GRP1555C1H200J    |
| C7            |     1 | 1pF ceramic capacitor (0402) Murata GRP1555C1H1R0B     |
| C8            |     1 | 100pF ceramic capacitor (0402) Murata GRP1555C1H101J   |
| C9            |     1 | 0.01µF ceramic capacitor (0402) Murata GRP1555R71C103K |
| C10           |     1 | 8.2pF ceramic capacitor (0402) Murata GRP1555C1H8R2B   |
| L1, L2        |     2 | 1.2nH inductors (0402) Toko LL1005-FH1N2S              |
| L3            |     1 | 22nH inductor (0402) Toko LL1005-FH22NJ                |
| R2            |     1 | 100 Ω ± 1% resistor                                    |
| R3            |     1 | 200 Ω ± 5% resistor                                    |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Murata     | 800-831-9172 | 814-238-0490 |
| Toko       | 408-432-8281 | 408-943-9790 |

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ +2.7V to +3.6V Single-Supply Operation
- ♦ 50 Ω SMA Inputs and Outputs on RF Ports for Easy Testing
- ♦ All Matching Components Included
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE    |
|--------------|----------------|---------------|
| MAX2649EVKIT | -40°C to +85°C | 2 × 3 UCSP TM |

## Quick Start

The MAX2649 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

Table 1 lists the required test equipment to verify the MAX2649 operation. It is intended as a guide only, and some substitutions are possible.

## Table 1. Test Equipment

| EQUIPMENT            | DESCRIPTION                                                                                                     |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| RF Signal Generators | Capable of delivering 0dBm of output power up to 6GHz (HP 8648C or equivalent)                                  |
| RF Spectrum Analyzer | Capable of covering the operating frequencies of the device as well as a few harmonics (HP 8561E or equivalent) |
| Power Supply         | Capable of 30mA at +2.7V to +3.6V                                                                               |
| Power Meter          | Capable of measuring 20dBm                                                                                      |
| Ammeter              | To measure supply current (optional)                                                                            |
| Network Analyzer     | To measure small-signal return loss and gain (optional, HP 8753D or equivalent)                                 |

## Connections and Setup

This section provides a step-by-step guide to operate and test the device's functions. Do not turn on DC power or RF signal generators until all connections are made.

## Testing the Supply Current

- 1) Connect a DC supply set to +3.0V (through an ammeter if desired) to the VCC (J3) and GND (J4) terminals on the EV kit. If available, set the current limit to 30mA. Do not turn on the supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2649 Evaluation Kit

- 2) Connect VCC to the shutdown test port (TP1).
- 3) Turn on the DC supply; the supply current should read approximately 14mA.
- 4) To test the shutdown current, repeat Steps 1, 2, and 3 with shutdown connected to GND.

## Testing the Power Gain

- 1) Connect a DC supply set to +3.0V (through an ammeter if desired) to the VCC and GND terminals on the EV kit. If available, set the current limit to 30mA. Do not turn on the supply.
- 2) Gain can be determined with a network analyzer. This has the advantage of displaying gain over a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.
- 3) (Optional) Connect one RF signal generator to the RFIN SMA connector. Do not turn on the generator's output. Set the generator to an output frequency of 5250MHz, and set the generator power level to -30dBm.
- 4) (Optional) Connect the spectrum analyzer to the RFOUT SMA connector. Set the spectrum analyzer to a center frequency of 5250MHz and a total span of 20MHz.
- 5) (Optional) Turn on the DC supply, and then activate the RF generator's output. A 5250MHz signal shown on the spectrum analyzer display should indicate a magnitude of approximately -15dBm. Account for cable losses (between 0.5dB and 2dB) and circuit board losses (approximately 0.5dB) when computing gain.

## Testing the Noise Figure

Noise-figure measurements on low-noise devices such as the MAX2649 are extremely sensitive to lab setup, board losses, and parasitics. There are many techniques and precautions for measuring a low noise-figure device. Detailed explanation of these items goes beyond the scope of this document. For more information on how to perform this level of noise-figure measurement, refer to Agilent Technologies Application Note 57-2, Noise Figure Measurement Accuracy .

## Layout

The EV kit's PC board can serve as a guide for laying out a board using the MAX2649.

Design the layout as compact as possible to minimize board parasitics. Install capacitors as close as possible to  the  IC  supply-voltage  pin.  Place  the  ground  end  of these capacitors near the IC GND pins to provide a low-impedance return path for the signal current. Connect multiple vias from the ground plane as close as possible to the ground pins. When using a UCSP package, round or square pads are permissible.

For the power supplies, a star topology works well to isolate different sections of the device. Each VCC node has its own path to a central VCC. Place decoupling capacitors that provide low impedance at the RF frequency of interest close to all VCC connections. The central VCC should have a large decoupling capacitor as well.

For the best gain and noise performance, use high-Q (40) components for the LNA input-matching circuit.

Figure 1. MAX2649 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2649 Evaluation Kit

Figure 2. MAX2649 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2649 Evaluation Kit

<!-- image -->

Figure 3. MAX2649 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX2649 EV Kit PC Board Layout-Component Side

Figure 4. MAX2649 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX2649 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600