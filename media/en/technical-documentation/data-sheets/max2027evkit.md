<!-- lastmod 2022-08-02 -->
## General Description

The MAX2027 evaluation kit (EV kit) simplifies the evaluation of the MAX2027 high-linearity, digitally controlled, variable-gain amplifier. The kit is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included for the input and output to allow quick and easy evaluation on the test bench.

This EV kit provides a list of equipment required to evaluate the device, a straightforward test procedure to verify  functionality,  a  circuit  schematic,  a  bill  of  materials (BOM), and artwork for each layer of the PC board.

Contact MaximDirect sales at 888-629-4642 to check pricing and availability of these kits.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Coilcraft  | 847-639-6400 | www.coilcraft.com         |
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |

<!-- image -->

Features

- ♦ Fully Assembled and Tested

- ♦ 50MHz to 400MHz Frequency Range

- ♦ Variable Gain: -8dB to +15dB

- ♦ Output IP3: 35dBm (All Gain Settings)

- ♦ Noise Figure: 4.7dB at Maximum Gain

- ♦ Digitally Controlled Gain with 1dB Resolution and ±0.05dB State-to-State Accuracy

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2027EVKIT | -40°C to +85°C | 20 TSSOP-EP* |

## Component List (Unmatched)

| DESIGNATION         |   QTY | DESCRIPTION                                                                         |
|---------------------|-------|-------------------------------------------------------------------------------------|
| C1, C3, C4 (Note 1) |     3 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H102J                 |
| C2, C5              |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J                  |
| C6, C7              |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                 |
| C8, C9              |     0 | Not installed                                                                       |
| C10                 |     1 | 0.047µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E473K                |
| J1, J2              |     2 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856        |
| J3                  |     1 | Header 5 × 2 (0.100 spacing for 0.062in thick board) Molex 10-88-1101 or equivalent |
| J4                  |     0 | Not installed                                                                       |
| L1                  |     1 | 330nH ±5% wire-wound IND (0805) Coilcraft 0805CS-331XJBC                            |
| L2                  |     1 | 680nH ±5% wire-wound IND (1008) Coilcraft 1008CS-681XJBC                            |
| L3                  |     1 | 0 Ω resistor (0603) (used as a jumper for unmatched board)                          |
| L4                  |     0 | Not installed                                                                       |
| R1                  |     1 | 825 Ω ±1% resistor (0603)                                                           |
| R2-R6               |     5 | 47k Ω ±5% resistors (0603)                                                          |
| U1                  |     1 | MAX2027EUP-T                                                                        |

Note 1: If matching is not required, C3 is installed using one pad of L4 and one pad of C3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2027 Evaluation Kit

## Table 1. Suggested Components for Matching

|   FREQUENCY (MHz) | COMPONENT   | VALUE   |   SIZE |
|-------------------|-------------|---------|--------|
|               300 | L3, L4      | 11nH    |   0603 |
|               300 | C8, C9      | 6.8pF   |   0603 |
|               400 | L3, L4      | 8.7nH   |   0603 |
|               400 | C8, C9      | 5pF     |   0603 |

## Quick Start

The MAX2027 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation. Table 2 lists the attenuation setting vs. gain-control bits.

## Test Equipment Required

- DC supply capable of delivering 5.25V and 100mA of continuous current
- HP 8648 (or equivalent) signal source
- HP 8561E (or equivalent) spectrum analyzer capable of covering the MAX2027's frequency range as well as a few harmonics
- Two digital multimeters (DMMs) to monitor VCC and I CC, if desired
- HP8753D (or equivalent) network analyzer to measure return loss and gain
- Lowpass filters to attenuate harmonic output of signal sources, if harmonic measurements are desired

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made.

## Gain Setting

Connect the header pins for B4-B0 to GND for maximum gain (15dB, typ). See Table 2 for other gain setting configurations. To set a logic high on B4-B0, leave the respective header pin unconnected as on-board resistors pull up the logic to +5V. To control B4-B0 using external logic (voltage limits per data sheet), ensure that +5V is applied to the chip. Failure to do so can cause the on-chip ESD diodes to draw significant current and may damage the part.

## Testing the Supply Current

- 1) Connect 50 Ω terminations to RF\_IN and RF\_OUT.
- 2) With the DC supply disabled, set it to +5.0V (through a low internal resistance ammeter, if desired) and connect to the +5V and GND terminals on the EV kit. If available, set the current limit to 100mA.
- 3) Enable the DC supply; the supply current should read approximately 60mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Attenuation Setting vs. GainControl Bits

|   ATTENUATION (dB) |   B4 (16dB) | B3* (8dB)   |   B2 (4dB) |   B1 (2dB) |   B0 (1dB) |
|--------------------|-------------|-------------|------------|------------|------------|
|                  0 |           0 | 0           |          0 |          0 |          0 |
|                  1 |           0 | 0           |          0 |          0 |          1 |
|                  2 |           0 | 0           |          0 |          1 |          0 |
|                  3 |           0 | 0           |          0 |          1 |          1 |
|                  4 |           0 | 0           |          1 |          0 |          0 |
|                  5 |           0 | 0           |          1 |          0 |          1 |
|                  6 |           0 | 0           |          1 |          1 |          0 |
|                  7 |           0 | 0           |          1 |          1 |          1 |
|                  8 |           0 | 1           |          0 |          0 |          0 |
|                  9 |           0 | 1           |          0 |          0 |          1 |
|                 10 |           0 | 1           |          0 |          1 |          0 |
|                 11 |           0 | 1           |          0 |          1 |          1 |
|                 12 |           0 | 1           |          1 |          0 |          0 |
|                 13 |           0 | 1           |          1 |          0 |          1 |
|                 14 |           0 | 1           |          1 |          1 |          0 |
|                 15 |           0 | 1           |          1 |          1 |          1 |
|                 16 |           1 | X           |          0 |          0 |          0 |
|                 17 |           1 | X           |          0 |          0 |          1 |
|                 18 |           1 | X           |          0 |          1 |          0 |
|                 19 |           1 | X           |          0 |          1 |          1 |
|                 20 |           1 | X           |          1 |          0 |          0 |
|                 21 |           1 | X           |          1 |          0 |          1 |
|                 22 |           1 | X           |          1 |          1 |          0 |
|                 23 |           1 | X           |          1 |          1 |          1 |

## Testing the Power Gain

- 1) Connect the RF signal generator to the RF\_IN SMA connector. Do not turn on the generator's output. Set the generator to an output frequency of 50MHz, and set the generator power level to -10dBm.
- 2) Connect the spectrum analyzer to the RF\_OUT SMA connector. Set the spectrum analyzer to a center frequency of 50MHz and a total span of 1MHz.
- 3) With the DC supply disabled, set it to +5.0V (through a low internal-resistance ammeter if desired) and connect to the +5V and GND terminals on the EV kit. If available, set the current limit to 100mA.
- 4) Connect B4-B0 to GND for 0dB attenuation.
- 5) Enable the DC supply, and then activate the RF generator's output. A 50MHz signal shown on the spectrum analyzer display should indicate a magnitude of approximately 5dBm. Be sure to account for external cable losses.
- 6) (Optional) Gain can be determined with a network analyzer. This has the advantage of displaying gain over a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.

## Detailed Description

Figure 1 is the schematic for the EV kit as shipped. This circuit is internally matched for operation up to 250MHz. Component pads for external matching components, L3,

<!-- image -->

## MAX2027 Evaluation Kit

L4, C8, and C9, are included to allow modification for higher frequency operation (see Table 1 for suggested components for additional frequencies). C1, C3, and C4 are DC-blocking capacitors for the RF\_IN, ATTNOUT, and RF\_OUT ports. To reduce the possibility of noise pickup, C2, C5, C6, and C7 form the VCC decoupling network. Note the location of each component.

## Modifying the MAX2027 EV Kit

The EV kit can be configured for use at any frequency between 50MHz and 400MHz. See Table 1 for the correct matching component values for the desired operating frequency.

## Layout Considerations

The MAX2027 evaluation board can be a guide for your board layout. Pay close attention to thermal design and close placement of parts to the IC. The MAX2027 package exposed paddle (EP) conducts heat from the part and provides a low-impedance electrical connection. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance contact. Ideally, this can be achieved by soldering the backside package contact directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly  below the EP. The MAX2027 EV kit uses eight evenly spaced, 0.016in-diameter, plated through holes to connect EP to the lower ground planes.

Depending on the RF ground-plane spacing, large surface-mount pads in the RF path may need the ground plane relieved under them to reduce shunt capacitance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2027 Evaluation Kit

Figure 1. MAX2027 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2027 Evaluation Kit

<!-- image -->

Figure 2. Test Setup Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2027 Evaluation Kit

Figure 3. MAX2027 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX2027 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 6. MAX2027 EV Kit PC Board Layout-Primary Component Side

<!-- image -->

## MAX2027 Evaluation Kit

Figure 5. MAX2027 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Figure 7. MAX2027 EV Kit PC Board Layout-GND Layer (Layer 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2027 Evaluation Kit

<!-- image -->

Figure 8. MAX2027 EV Kit PC Board Layout-Route Layer (Layer 3)

<!-- image -->

Figure 10. MAX2027 EV Kit PC Board Layout-Top Soldermask

Figure 9. MAX2027 EV Kit PC Board Layout-Secondary Side

<!-- image -->

Figure 11. MAX2027 EV Kit PC Board Layout-Bottom Soldermask

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8