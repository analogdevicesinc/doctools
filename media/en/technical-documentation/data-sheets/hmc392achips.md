<!-- lastmod 2020-06-03 -->
<!-- image -->

## Typical Applications

The HMC392A is ideal for:

- Point-to-Point Radios
- VSAT
- LO Driver for HMC Mixers
- Military EW, ECM, C 3 I
- Space

## Functional Diagram

<!-- image -->

## Electrical Specifications, T A = +25° C, Vdd = 5V

| Parameter                                |   Min. | Typ.      |   Max. |   Min. | Typ.      |   Max. | Units   |
|------------------------------------------|--------|-----------|--------|--------|-----------|--------|---------|
| Frequency Range                          |        | 4.0 - 6.0 |        |        | 3.5 - 7.0 |        | GHz     |
| Gain                                     |   14.5 | 17.4      |        |   14.5 | 17.2      |        | dB      |
| Gain Variation Over Temperature          |        | 0.005     |        |        | 0.005     |        | dB/ °C  |
| Noise Figure                             |        | 1.7       |    3.0 |        | 1.7       |    3.4 | dB      |
| Input Return Loss                        |        | 12        |        |        | 12        |        | dB      |
| Output Return Loss                       |        | 20        |        |        | 18        |        | dB      |
| Output Power for 1 dB Compression (P1dB) |        | 19.5      |        |        | 19        |        | dBm     |
| Saturated Output Power (Psat)            |        | 20.5      |        |        | 20        |        | dBm     |
| Output Third Order Intercept (IP3)       |        | 32.5      |        |        | 32.5      |        | dBm     |
| Supply Current (Idd)                     |        | 59        |     75 |        | 59        |     75 | mA      |

Note: Data taken with pad PS2 bonded to ground (state 2) unless otherwise noted.

## Features

Gain: 17.2 dB

Noise Figure: 1.7 dB

Single Supply Voltage: +5V

50 Ohm Matched Input/Output

No External Components Required

Small Size: 1.3 x 1.0 x 0.1 mm

## General Description

The HMC392A is a GaAs MMIC Low Noise Amplifier die  which  operates  between  3.5  and  7.0  GHz.  The amplifier provides 17.2 dB of gain, 1.7 dB noise figure, and  32.5  dBm  IP3  from  a  +5V  supply  voltage.  The HMC392A has six bonding adjustment options which allow  the  user  to  select  the  bias  point  and  output power of the device (+10 to +19.7 dBm). The HMC392A amplifier  can  easily  be  integrated  into  Multi-ChipModules (MCMs) due to its small (1.3 mm 2 ) size. All data is with the chip in a 50 Ohm test fixture connected via 0.025mm (1 mil) diameter wire bonds of minimal length 0.31mm (12 mils).

## HMC392A

v02.0618

## GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz

<!-- image -->

Broadband Gain &amp; Return Loss

<!-- image -->

Input Return Loss vs. Temperature

<!-- image -->

Noise Figure vs. Temperature

<!-- image -->

## HMC392A

v02.0618

## GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz

Gain vs. Temperature

<!-- image -->

Output Return Loss vs. Temperature

<!-- image -->

Reverse Isolation vs. Temperature

<!-- image -->

<!-- image -->

P1dB vs. Temperature

<!-- image -->

Output IP3 vs. Temperature

<!-- image -->

## HMC392A

v02.0618

## GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz

Psat vs. Temperature

<!-- image -->

Gain, Noise Figure &amp; Power vs. Supply Voltage @ 5.5 GHz

<!-- image -->

Gain &amp; Noise Figure vs. Power Select State

<!-- image -->

<!-- image -->

## Absolute Maximum Ratings

| Drain Bias Voltage (Vdd)                                   | +7 Vdc         |
|------------------------------------------------------------|----------------|
| RF Input Power (RFIN)(Vdd = +5 Vdc)                        | +20 dBm        |
| Channel Temperature                                        | 175 °C         |
| Continuous Pdiss (T= 85 °C) (derate 9.3 mW/°C above 85 °C) | 0.83W          |
| Thermal Resistance (channel to die bottom)                 | 108 °C/W       |
| Storage Temperature                                        | -65 to +150 °C |
| Operating Temperature                                      | -55 to +85° C  |
| ESD                                                        | Class 1A       |

<!-- image -->

## ELECTROSTATIC SENSITIVE DEVICE OBSERVE HANDLING PRECAUTIONS

## Outline Drawing

<!-- image -->

## Die Packaging Information [1]

| Standard            | Alternate   |
|---------------------|-------------|
| WP-16 (Waffle Pack) | [2]         |

[1] Refer to the 'Packaging Information' section for die packaging dimensions.

[2] For alternate packaging information contact Hittite Microwave Corporation.

## NOTES:

1. ALL DIMENSIONS IN INCHES [MILLIMETERS]
2. ALL TOLERANCES ARE ±0.001 (0.025)
3. DIE THICKNESS IS 0.004 (0.100) BACKSIDE IS GROUND
4. BOND PADS ARE 0.004 (0.100) SQUARE
5. BOND PAD SPACING, CTR-CTR: 0.006 (0.150)
6. BACKSIDE METALLIZATION: GOLD
7. BOND PAD METALLIZATION: GOLD

## HMC392A

v02.0618

## GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz

## Typical Supply Current vs. Vdd

| Vdd (Vdc)          | Idd (mA)           |
|--------------------|--------------------|
| +4.5               | 57                 |
| +5.0               | 59                 |
| +5.5               | 62                 |
| (State 2 Depicted) | (State 2 Depicted) |

<!-- image -->

## Pad Descriptions

| Pad Number   | Function                         | Description                                                                                                         | Interface Schematic   |
|--------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------|
| 3            | RFIN                             | This pad is AC coupled and matched to 50 Ohms                                                                       |                       |
| 5 6 7 8 9 10 | Power Select PS1 PS2 PS3 PS4 PS5 | One of these pads must be connected to ground. See Power Select Table for selection criteria.                       |                       |
| 1, 2         | Vdd, Vdd (alt.)                  | Power supply voltage. Connect either pad 1 or pad 2 to +5V supply. No choke inductor or bypass capacitor is needed. |                       |
| 4            | RFOUT                            | This pad is AC coupled and matched to 50 Ohms                                                                       |                       |
| Die Bottom   | GND                              | Die bottom must be connected to RF/DC ground.                                                                       |                       |

## Power Select Table

|   State | Pads Bonded to Ground   |   Typical Idd (mA) |   Typical P1dB (dBm) |
|---------|-------------------------|--------------------|----------------------|
|       1 | PS1                     |                 69 |                 19.7 |
|       2 | PS2                     |                 59 |                 19.4 |
|       3 | PS3                     |                 49 |                 18.8 |
|       4 | PS4                     |                 38 |                 17.5 |
|       5 | PS5                     |                 27 |                 14.8 |
|       6 | PS6                     |                 17 |                 10.3 |

Application Support: Phone: 1-800-ANALOG-D

## HMC392A

v02.0618

## GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz

<!-- image -->

<!-- image -->

## Assembly Diagram

<!-- image -->

Note: State 2 shown. PS2 bonded to ground.

## Handling Precautions

Follow these precautions to avoid permanent damage.

Storage: All bare die are placed in either Waffle or Gel based ESD protective containers, and then sealed in an ESD protective bag for shipment. Once the sealed ESD protective bag has been opened, all die should be stored in a dry nitrogen environment.

Cleanliness: Handle the chips in a clean environment. DO NOT attempt to clean the chip using liquid cleaning systems.

Static Sensitivity: Follow ESD precautions to protect against  ESD strikes.

Transients: Suppress instrument and bias supply transients while bias is applied. Use shielded signal and bias cables to minimize inductive pick-up.

General Handling: Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip has fragile air bridges and should not be touched with vacuum collet, tweezers, or fingers.

## Mounting

The chip is back-metallized and can be die mounted with AuSn eutectic preforms or with electrically conductive epoxy.  The mounting surface should be clean and flat.

Eutectic Die Attach: A 80/20 gold tin preform is recommended with a work surface temperature of 255 °C and a tool temperature of 265 °C.  When hot 90/10 nitrogen/hydrogen gas is applied, tool tip temperature should be 290 °C. DO NOT expose the chip to a temperature greater than 320 °C for more than 20 seconds.  No more than 3 seconds of scrubbing should be required for attachment. Epoxy Die Attach: Apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip once it is placed into position.  Cure epoxy per the manufacturer's schedule.

## Wire Bonding

Ball or wedge bond with 0.025mm (1 mil) diameter pure gold wire.  Thermosonic wirebonding with a nominal stage temperature of 150 °C and a ball bonding force of 40 to 50 grams or wedge bonding force of 18 to 22 grams is recommended.  Use the minimum level of ultrasonic energy to achieve reliable wirebonds. Wirebonds should be started on the chip and terminated on the package or substrate.  All bonds should be as short as possible &lt;0.31mm (12 mils).

<!-- image -->

GaAs MMIC LOW NOISE AMPLIFIER, 3.5 - 7.0 GHz