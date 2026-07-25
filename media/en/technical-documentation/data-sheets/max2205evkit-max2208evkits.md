<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2205-MAX2208 evaluation kits (EV kits) simplify the evaluation of the MAX2205-MAX2208 RF power detectors. They enable testing of all functions, with no additional support circuitry. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

## MAX2205Component List

| DESIGNATION   |   QTY | DESCRIPTION                                               |
|---------------|-------|-----------------------------------------------------------|
| C1            |     1 | 47pF ±5% ceramic capacitor (0402) Murata GRP1555CIH470J   |
| C2            |     1 | 27pF ±5% ceramic capacitor (0402) Murata GRP1555CIH270J   |
| C3            |     1 | 22µF electrolytic capacitor, B case size AVX TAJB226K010  |
| C4            |     1 | Not installed                                             |
| SMA           |     1 | SMA connector, edge mount, 0.031in EFJohnson 142-0701-881 |
| J1, J2        |     2 | 2-pin headers, 0.1in centers                              |
| J3            |     1 | 1-pin header                                              |
| JU1           |     1 | 3-pin header, 0.1in center                                |
| R1            |     1 | 10k Ω ±5% resistor (0402)                                 |
| R2            |     1 | 680 Ω ±5% resistor (0402)                                 |
| R3-R6         |     4 | 200 Ω ±5% resistors (0402)                                |
| U1            |     1 | MAX2205EBS                                                |

Features

- ♦ +2.7V to +5V Single-Supply Operation
- ♦ 50 Ω SMA Connector on RF Input
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE    |
|----------------|--------------|---------------|
| -40°C to +85°C | 2 × 2 UCSP   | MAX2205 EVKIT |
| -40°C to +85°C | 2 × 2 UCSP   | MAX2206 EVKIT |
| -40°C to +85°C | 2 × 2 UCSP   | MAX2207 EVKIT |
| -40°C to +85°C | 2 × 2 UCSP   | MAX2208 EVKIT |

## MAX2206/MAX2207/MAX2208 Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1            |     1 | 47pF ±5% ceramic capacitor (0402) Murata GRP1555CIH470J                       |
| C2            |     1 | 27pF ±5% ceramic capacitor (0402) Murata GRP1555CIH270J                       |
| C3            |     1 | 22µF capacitor, electrolytic, B case size AVX TAJB226K010                     |
| C4            |     1 | Not installed                                                                 |
| SMA           |     1 | SMA connector, edge mount, 0.031in EFJohnson 142-0701-881                     |
| J1, J2        |     2 | 12-pin headers, 0.1in centers                                                 |
| J3            |     1 | 1-pin header                                                                  |
| JU1           |     1 | 3-pin header, 0.1in center                                                    |
| R1            |     1 | 240 Ω ± 5% resistor (0402)                                                    |
| R2            |     1 | 0 Ω ± 5% resistor (0402) (MAX2207/MAX2208), 10 Ω ± 5% resistor (MAX2206)      |
| U1            |     1 | MAX2206EBS (MAX2206EVKIT) MAX2207EBS (MAX2207EVKIT) MAX2208EBS (MAX2208EVKIT) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2205-MAX2208 Evaluation Kits

## Quick Start

The MAX2205-MAX2208 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device setup.

## Connections and Setup

This section provides a step-by-step guide to operating the EV kits and testing the devices' functions. Do not turn on DC power or RF signal generators until all connections are made:

- 1) Set the SHDN jumper (JU1) on the EV kit to ON. This enables the device.
- 2) Connect a DC supply set to +2.85V (through a DMM, if  desired) to the VCC and GND terminals on the EV kit.  If  available, set the current limit to 10mA. Do not turn on the supply.
- 3) Connect the output (J3) to a DMM to measure output voltage.
- 4) Set  the  signal  generator  output  to  +15dBm, f  = 800MHz. For the MAX2206, use a CW input from the signal generator to the RF input. For the MAX2207, use a TDMA input. For the MAX2205/MAX2208, use a CDMA input. Using the power meter, determine the actual power output of the signal generator. Use this value to determine proper operation of the part.
- 5) Connect the signal generator to the SMA connector. Do not turn on the signal generator.
- 6) Turn on the DC supply; the supply current should read approximately 3.5mA (MAX2206) or 2mA (MAX2205/MAX2207/MAX2208), depending on the part being tested.
- 7) Activate the signal generator. The output voltage should read approximately +1.8V for the MAX2206/ MAX2207/MAX2208, or +0.25V for the MAX2205.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Test Equipment Required

| EQUIPMENT                                             | DESCRIPTION                                                                                 |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Signal Generator with Digital Modulation Capabilities | Capable of delivering continuous wave (CW), CDMA, and TDMA signals with +15dBm output power |
| Power Meter                                           | To accurately measure the power into the RF input                                           |
| Power Supply                                          | Capable of up to 10mA at +2.7V to +6V                                                       |
| Digital Multimeters (DMMs)                            | To measure output voltage and supply and output current                                     |

<!-- image -->

<!-- image -->

Figure 1. MAX2205 EV Kit Schematic

<!-- image -->

Figure 2. MAX2206/MAX2207/MAX2208 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2205-MAX2208 Evaluation Kits

<!-- image -->

Figure 3. MAX2205 EV Kit Component Placement GuideSecondary/Bottom Component Side

<!-- image -->

Figure 5. MAX2205 EV Kit Component Placement Guide-Top Silkscreen

Figure 4. MAX2205 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Figure 6. MAX2205 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2205-MAX2208 Evaluation Kits

Figure 7. MAX2206/MAX2207/MAX2208 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 8. MAX2206/MAX2207/MAX2208 EV Kit Component Placement Guide-Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5