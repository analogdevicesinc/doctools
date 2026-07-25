<!-- lastmod 2022-08-02 -->
## General Description

The MAX2247 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2247 power amplifier (PA). The kit enables testing of the device's RF performance and requires no additional support circuitry. The EV kit input and output use SMA connectors to facilitate the connection to RF test equipment.

Each kit is assembled with the MAX2247 and incorporates all matching components optimized for the 2.4GHz to 2.5GHz RF frequency band, and POUT = +24dBm. For lower power applications, see Table 2 for appropriate matching components.

## Component List

| DESIGNATION           | QTY   | DESCRIPTION                                    |
|-----------------------|-------|------------------------------------------------|
| C1, C8, C10, C12, C32 | 5     | 22pF ceramic capacitors (0402) GRP1555C1H220J  |
| C2, C6, C7, C9        | 4     | 10nF ceramic capacitors (0402) GRP155R71C103K  |
| C3                    | 1     | 2.7pF ceramic capacitor (0402) GRP1555C1H2R7B  |
| C4, C5                | 2     | 47pF ceramic capacitors (0402) GRP1555C1H470J  |
| C11                   | 1     | 4.7µF tantalum capacitor JMK212BJ475MG-B       |
| C31                   | -     | Open                                           |
| C33                   | 1     | 0.75pF ceramic capacitor (0402) GJ61555C1HR75B |
| L1                    | 1     | 3.9nH inductor (0402) LL1005_FH3N95            |
| R1                    | 1     | 3k Ω ± 5% resistor                             |
| R2                    | 1     | 7.5k Ω ± 5% resistor                           |
| R8                    | 1     | 51k Ω ± 5% resistor                            |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| EFJohnson   | 402-474-4800 | 402-474-4858 |
| Kamaya      | 260-489-1533 | 260-489-2261 |
| Murata      | 800-831-9172 | 814-238-0490 |
| Taiyo Yuden | 800-348-2496 | 408-434-0375 |
| Toko        | 800-715-8656 | 408-943-9790 |

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2247
- ♦ +2.7V to +3.6V Single-Supply Operation
- ♦ Output Matched for 2.4GHz to 2.5GHz Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2247EVKIT | -40°C to +85°C | 3 ✕ 4 UCSP   |

## Quick Start

The MAX2247 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

Table 1 lists the required test equipment to verify MAX2247 operation. It is intended as a guide only, and some substitutions are possible.

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's functions. Do not turn on DC power or RF signal generators until all connections are made.

## Testing the Supply Current

- 1) Connect a 20dB attenuator to the OUT SMA connector on the EV kit. This prevents overloading of the power sensor and power meter.
- 2) Connect a DC supply set to +3.3V (through an ammeter, if desired) and connect a voltmeter to the EV kit's VCC and GND terminals. Do not turn on the supply.
- 3) Connect an RF signal generator to the IN SMA connector. Calibrate the generator to produce an 802.11b compatible -10dBm signal, at 2.45GHz output frequency. Do not turn on the output.
- 4) Connect the power sensor to the power meter. Calibrate the power sensor for 2.45GHz. Set the power meter offset to compensate the 20dB attenuator,  the  coupler, and any cable loss (from 0.5dB to 2dB), and circuit board losses (approximately 0.3dB).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2247 Evaluation Kit

## Table 1. Test Equipment Required

| EQUIPMENT                   |   QTY | DESCRIPTION                                                                                                                  |
|-----------------------------|-------|------------------------------------------------------------------------------------------------------------------------------|
| Power Supply                |     1 | Capable of delivering up to 500mA at +2.7V to +3.6V                                                                          |
| RF Signal Generator         |     1 | Capable of delivering +10dBm of output power up to 2.5GHz with 802.11b-compatible source                                     |
| RF Power Sensor             |     1 | Capable of handling +20dBm of output power at the operating frequency (HP 8482A, or equivalent)                              |
| 20dB High-Power Attenuator  |     1 | -                                                                                                                            |
| Power Meter                 |     1 | Capable of handling +20dBm of output power at the operating frequency (HP EPM-441A, or equivalent)                           |
| Coupler                     |     1 | Capable of operating at the desired frequency                                                                                |
| RF Spectrum Analyzer        |     1 | Capable of measuring ACPR/ALT and covering the MAX2247's operating frequency range (Rohde and Schwarz FSEA20, or equivalent) |
| Ammeter/Voltmeter           |     2 | -                                                                                                                            |
| 50 Ω SMA Cables             |     2 | -                                                                                                                            |
| Network Analyzer (Optional) |     1 | For measuring small-signal return loss and gain                                                                              |

- 5) Connect the power sensor to the coupler. Connect one of the remaining terminals of the coupler to the 20dB high-power attenuator and another end to the spectrum analyzer.
- 6) Place the SHDN jumper in the ON position.
- 7) Turn on the DC supply. The idle current should read approximately 250mA.
- 8) Activate the RF generator output. Set the RF generator's  output  to  produce  a  reading  of  +23dBm on the power meter. Adjust the supply voltage so that the voltmeter reads +3.3V. Adjust the output of the generator until the  power meter reads +24dBm.
- The supply current should increase to approximately 315mA.
- The ACPR/ALT measurements should meet the MAX2247 EC table specifications.

## Lower Power Applications

This evaluation kit can be easily modified for POUT = +21dBm, +18dBm, and +15dBm applications by changing the position of C3 and the bias current and removing C33. (See Table 2 and Applications Notes.)

## Layout

The EV kit's PC board can serve as a guide for laying out a board using the MAX2247.

Keep RF signal lines as short as possible to minimize losses and radiation. Always use controlled impedance lines on all high-frequency inputs and outputs, and use low-inductance connections to ground on all GND pins. Each VCC node on the PC board should have its own decoupling capacitor. Using a star topology for the supply layout, in which each VCC\_ node on the circuit has a separate connection to a central VCC node, can further  minimize  coupling between the sections of the IC. (Refer to the MAX2247 data sheet.)

## Table 2. EV Kit Modifications for POUT = +21dBm, +18dBm, and +15dBm Applications

|   P OUT (dBm) |   C3 LOCATION | R1 (I BIAS )   |
|---------------|---------------|----------------|
|           +21 |             7 | 6.1k Ω (135mA) |
|           +18 |             6 | 12k Ω (75mA)   |
|           +15 |             6 | 13k Ω (65mA)   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2247 Evaluation Kit

<!-- image -->

Figure 1. MAX2247 EV Kit Schematic

Figure 2. MAX2247 EV Kit Component Placement GuidePrimary-Side Silkscreen

<!-- image -->

<!-- image -->

Figure 3. MAX2247 EV Kit Component Placement GuideSecondary-Side Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX2247

## MAX2247 Evaluation Kit

<!-- image -->

Figure 4. MAX2247 EV Kit PC Board Layout-Layer 2

<!-- image -->

Figure 6. MAX2247 EV Kit PC Board Layout-Primary Component Side

Figure 5. MAX2247 EV Kit PC Board Layout-Layer 3

<!-- image -->

Figure 7. MAX2247 EV Kit PC Board Layout-Secondary Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600