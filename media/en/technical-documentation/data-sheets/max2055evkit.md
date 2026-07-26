<!-- lastmod 2022-08-02 -->
## General Description

The MAX2055 evaluation kit (EV kit) simplifies the evaluation of the MAX2055 high-linearity, digitally controlled, variable-gain analog-to-digital converter (ADC) driver/amplifier  (DVGA). The EV kit is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included on the EV kit for the input and output to allow quick and easy evaluation on the test bench.

This data sheet provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a circuit schematic for the kit, a bill of  materials (BOM) for the kit, and artwork for each layer of the PC board.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Coilcraft  | 847-639-6400 | www.coilcraft.com         |
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |
| TOKO       | 800-745-8656 | www.tokoam.com            |

Note: When contacting these component suppliers, please specify you are using the MAX2055.

| DESIGNATION                 |   QTY | DESCRIPTION                                                         |
|-----------------------------|-------|---------------------------------------------------------------------|
| C1, C3-C6, C8, C9, C10, C12 |     9 | 1000pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H102J |
| C2, C11                     |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J  |
| C7                          |     1 | Not used                                                            |
| R1                          |     1 | 1.13k Ω ±1% resistor (0603)                                         |
| R2-R6                       |     5 | 47k Ω ±5% resistors (0603)                                          |
| R7                          |     1 | 10 Ω ±5% resistor (0603)                                            |
| L1, L3                      |     2 | 330nH ±5%, wire-wound inductors (0603) Coilcraft 0603LS-331XJBC     |
| L2                          |     1 | 100nH ±5%, wire-wound inductor (0603) Coilcraft 0603LS-101XJBC      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| L4, L5        |     2 | 680nH ±5%, wire-wound inductors (1008) Coilcraft 1008CS-681XJBC or TOKO FSLM2520-R68J |
| J1, J2        |     2 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856          |
| J3            |     1 | Header 5 x 2 (0.100 spacing for 0.062in thick board) Molex 10-88-1101 or equivalent   |
| J4, J5, J6    |     0 | Not installed                                                                         |
| T1, T2        |     2 | MiniCircuit TC1-50-4 transformers                                                     |
| U1            |     1 | MAX2055EUP-T                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ 30MHz to 300MHz Frequency Range
- ♦ -3dB to +20dB Variable Gain
- ♦ Output IP3: 40dBm (All Gain Settings at 70MHz)
- ♦ -76dBc 2nd Harmonic
- ♦ -69dBc 3rd Harmonic
- ♦ Noise Figure: 5.8dB at Maximum Gain
- ♦ Digitally Controlled Gain with 1dB Resolution and ±0.2dB Accuracy
- ♦ Adjustable Bias Currents

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX2055EVKIT | -40 ° C to +85 ° C | 20 TSSOP-EP* |

## MAX2055 Evaluation Kit

## Quick Start

The MAX2055 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation. Table 1 lists the attenuation setting vs. gain-control bit.

## Test Equipment Required

- DC supply capable of delivering 5.25V and 400mA of continuous current
- HP 8648 (or equivalent) signal source
- HP 8561E (or equivalent) spectrum analyzer capable of covering the MAX2055's frequency range, as well as a few harmonics
- Two digital multimeters (DMMs) to monitor VCC and ICC, if desired
- HP 8753D (or equivalent) network analyzer to measure return loss and gain
- Filters to attenuate harmonic output of signal sources, if harmonic measurements are desired

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. As a general precaution to prevent damaging the outputs by driving high-VSWR loads, do not turn on DC power or RF signal generators until all connections are made .

## Gain Setting

Connect the header pins for B4-B0 to GND for maximum gain (20dB typ). See Table 1 for other gainsetting  configurations.  To  set  a  logic  high  on  B4-B0, leave the respective header pin unconnected as onboard resistors pull up the logic to +5V. To control B4-B0 using external logic (voltage limits per the data sheet), ensure that +5V is applied to the chip. Failure to  do  so  can  cause  the  on-chip  ESD  diodes  to  draw significant current and can damage the part.

## Testing the Supply Current

- 1) Connect 50 Ω terminations to RF\_IN and RF\_OUT.
- 2) With the DC supply disabled, set it to +5.0V (through a low internal resistance ammeter, if desired) and connect to the +5V and GND terminals on the EV kit. If available, set the current limit to 400mA.
- 3) Enable the DC supply; the supply current should read approximately 250mA.

## Testing the Power Gain

- 1) Connect the RF signal generator to the RF\_IN SMA connector. Do not turn on the generator's output. Set

## Table 1. Attenuation Setting vs. GainControl Bits

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

the generator to an output frequency of 70MHz, and set the generator power level to -15dBm.

- 2) Connect the spectrum analyzer to the RF\_OUT SMA connector. Set the spectrum analyzer to a center frequency of 70MHz and a total span of 1MHz.
- 3) With the DC supply disabled, set it to +5.0V (through a low internal-resistance ammeter, if desired) and connect to the +5V and GND terminals on the EV kit. If available, set the current limit to 400mA.
- 4) Connect B4-B0 to GND for 0dB attenuation.
- 5) Enable the DC supply, and then activate the RF generator's output. A 70MHz signal shown on the spec-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

trum analyzer display should indicate a magnitude of  approximately 5dBm. Be sure to account for external cable losses.

- 6) (Optional) Gain can be determined with a network analyzer. This has the advantage of displaying gain over a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details.

## Detailed Description

Figure 1 shows the schematic for the MAX2055 EV kit. The EV kit is matched for operation up to 300MHz. Capacitors C1, C4, C5, C8, and C9 are DC-blocking capacitors for the RF\_IN, ATTNOUT, and RF\_OUT ports. To reduce the possibility of noise pickup, capacitors C2, C3, C10, C11, and C12 form the VCC decoupling network. Inductors L1-L5 provide a method of biasing. Inductor L2 needs to handle the total IC current and have a DC resistance that is less than 0.2 Ω .  If  the  DC resistance is higher than 0.2 Ω ,  the  value  of  R1  may need to be adjusted down to maintain the nominal operating current. Inductors L4 and L5 are nonmagnetic  coils  that  provide  the  output  supply  bias  for  the amplifier. Transformer T1 is used to convert the singleended attenuator output to a differential signal. This technique results in an improved 2nd harmonic performance for the device. The amplifier can be driven single ended if the improved 2nd harmonic is not required (see Modifying the EV Kit section). Output transformer T2 enables single-ended measurements, in addition to providing common-mode rejection for the 2nd harmonic.  Resistor  R7  helps reduce video leakage during switching. Replace R7 with a 0 Ω resistor if video leakage is not a concern.

<!-- image -->

## MAX2055 Evaluation Kit

## Modifying the EV Kit

The EV kit is easily configured for other topologies. For a single-ended amplifier input:

- 1) Remove T1 and place a low-inductance short circuit between the T1 surface-mount pads that connect capacitors C4 to C5.
- 2) Add a 1000pF 0603 case style capacitor for C7.
- 3) Change L2 to the same style and value inductor as L1 (330nH) noted in the Component List .
- 4) Change R1 to 909 Ω (to  adjust  the  DC  current  to compensate for the higher L2 resistance).

Note: In this configuration, C6 is not required.

The EV kit also provides the ability for additional methods of  testing by adding in the option for an interstage RF connection along with differential RF output connections.

## Layout Considerations

The MAX2055 evaluation boards can be used as a guide for your board layout. Give close attention to thermal design and close placement of parts to the IC. The MAX2055 package exposed paddle (EP) conducts heat out of the part and provides a low-impedance electrical connection. The EP must be attached to the PC board ground plane with a low thermal and electrical-impedance contact. Ideally, this is provided by soldering the backside package contact directly to a top metal ground plane on the PC board. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP. The MAX2055 EV kit uses eight evenly spaced, 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

Depending on the RF ground plane spacing, large surface-mount pads in the RF path may need to have the ground plane relieved under them to reduce shunt capacitance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2055 Evaluation Kit

Figure 1. MAX2055 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2055 Evaluation Kit

<!-- image -->

Figure 2. Test Setup Diagram

Figure 3. MAX2055 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX2055 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2055 Evaluation Kit

<!-- image -->

Figure 5. MAX2055 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Figure 7. MAX2055 EV Kit PC Board Layout-GND Layer (Layer 2)

Figure 6. MAX2055 EV Kit PC Board Layout-Primary Component Side

<!-- image -->

Figure 8. MAX2055 EV Kit PC Board Layout-Route Layer (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 9. MAX2055 EV Kit PC Board Layout-Secondary Side

<!-- image -->

## MAX2055 Evaluation Kit

Figure 10. MAX2055 EV Kit PC Board Layout-Top Solder Mask

<!-- image -->

Figure 11. MAX2055 EV Kit PC Board Layout-Bottom Solder Mask

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7