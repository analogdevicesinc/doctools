<!-- lastmod 2022-08-02 -->
## General Description

The MAX2056 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2056 general-purpose, high-performance, variable-gain amplifier with analog gain control. The EV kit is fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included at the input and output of the EV kit to allow quick and easy evaluation on the test bench.

This data sheet provides a list of equipment required to evaluate the device, a straightforward test procedure to verify functionality, a circuit schematic for the kit, a bill of  materials (BOM) for the kit, and artwork for each layer of the PC board.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |

| DESIGNATION        |   QTY | DESCRIPTION                                                                  |
|--------------------|-------|------------------------------------------------------------------------------|
| C1, C3, C5, C10    |     4 | 47pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H470J            |
| C2, C4, C6, C8, C9 |     5 | 1000pF ±10%, 50V X7R ceramic capacitors (0402) Murata GRP155R71H102K         |
| C7                 |     1 | 3.9pF ±0.1pF, 50V C0G ceramic capacitor (0402) Murata GRP1555C1H3R9B         |
| C11, C12, C16      |     0 | Not installed (0603)                                                         |
| C13, C14, C15      |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K          |
| C17                |     0 | Not installed (0402)                                                         |
| J1-J5              |     5 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| R1                 |     1 | 1.2k Ω ±1% resistor (0402)                                                   |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                                                                                    |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R2            |     1 | 3.92k Ω ±1% resistor (0402)                                                                                                                                                                                                    |
| R3, R4        |     2 | 0 Ω resistors (0402)                                                                                                                                                                                                           |
| TP1           |     1 | Large test point for 0.062in PC board (red) Mouser 151-107 or equivalent                                                                                                                                                       |
| TP2           |     1 | Large test point for 0.062in PC board (black) Mouser 151-103 or equivalent                                                                                                                                                     |
| U1            |     1 | Analog VGA IC (36-pin, 6mm x 6mm thin QFN-EP) Maxim MAX2056ETX NOTE: U1 HAS AN EXPOSED PADDLE CONDUCTOR THAT REQUIRES IT TO BE SOLDER ATTACHED TO A GROUNDED PAD ON THE PC BOARD TO ENSURE A PROPER ELECTRICAL/THERMAL DESIGN. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

- ♦ Analog Gain Control
- ♦ Up to 44dB Gain-Control Range
- ♦ 800MHz to 1000MHz Frequency Range
- ♦ Fully Assembled and Tested
- ♦ Input and Output Internally Matched to 50 Ω Over Entire Band Of Operation
- ♦ 50 Ω SMA Inputs and Outputs for Easy Testing of All MAX2056 Features

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE      |
|--------------|----------------|-----------------|
| MAX2056EVKIT | -40°C to +85°C | 36 Thin QFN-EP* |

## MAX2056 Evaluation Kit

## Quick Start

The MAX2056 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment

- One DC power supply capable of supplying 5V and 0.3A
- One DC power supply that can be adjusted from 1V to 4.5V for gain control
- Two digital multimeters (DMM) to monitor VCC and I CC, if desired
- HP 8648 (or equivalent) signal source
- HP 8561E (or equivalent) spectrum analyzer
- HP 8753D (or equivalent) network analyzer to measure return loss and gain over frequency (optional)

## Connections and Setup

This section provides a step-by-step guide to testing the basic functionality of the EV kit. To prevent damaging the device, do not turn on DC power or RF signal generators until all connections are made. Do not apply VCNTL without VCC present (see the VCNTL section).

## Testing the Supply Current

- 1) Connect 50 Ω terminations to J1 and J2.
- 2) With its output disabled, set the voltage on one of the DC supplies to +5.0V (through a low internal resistance ammeter, if desired) and connect to the +5.0V (TP1) and GND (TP2) terminals on the EV kit. If  the  power  supply  has  a  current-limiting  feature, set the current limit to 200mA.
- 3) With its output disabled, set the voltage on the second DC supply to 1V and connect to the gain-control connector VCNTL (J3) on the EV kit. This configures the device for its maximum gain setting. If the power supply has a current-limiting feature, set the current limit to 1mA.
- 4) Enable the VCC supply, then enable the gain-control supply; the VCC supply current should read approximately 136mA.

## Testing the Power Gain

- 1) With its supply output disabled, set the voltage on one of the DC supplies to +5.0V (through a low internal resistance ammeter, if desired) and connect to the +5.0V (TP1) and GND (TP2) terminals on the EV kit. If available, set the current limit to 200mA.
- 2) With its supply output disabled, set the voltage on the other DC supply to 1V and connect to the gain-control connector VCNTL (J3) on the EV kit. If available, set the current limit to 1mA.
- 3) With the generator output disabled, connect the RF signal generator to J1. Set the generator to a 900MHz output frequency, and set the power level to -13dBm.
- 4) Connect the spectrum analyzer to J2. Set the spectrum analyzer to a center frequency of 900MHz and a total span of 1MHz. Set the reference level on the spectrum analyzer to +10dBm.
- 5) Enable the VCC supply. Next, enable the gain-control supply. Finally, enable the RF generator's output. A 900MHz signal with a magnitude of approximately 3dBm should be displayed on the spectrum analyzer. Be sure to account for external cable losses.
- 6) Vary the gain-control supply voltage between +1.0V and +4.5V. The output power should vary by approximately 22dB.
- 7) Gain can also be determined with a network analyzer. This has the advantage of displaying gain over a swept frequency band, in addition to displaying input and output return loss. Refer to the network analyzer manufacturer's user manual for setup details (optional).

## Detailed Description

Figure 1 shows the schematic for the MAX2056 EV kit. C1, C3, C5, and C7 are DC-blocking capacitors for the IN\_A, IN, AMP\_IN, and OUT pins. To reduce the possibility of noise pickup from the power supply, capacitors C2, C4, C6, C8, C9, C10, C13, C14, and C15 are used to decouple VCC. Resistors R1 and R2 are used to bias the amplifier's first and second stages, respectively.

## Current-Setting Resistors

The MAX2056 amplifier section is a two-stage design whose input stage current is set by the external resistor R1, while the output stage current is set by resistor R2. These resistors were optimized at the factory to produce the highest OIP3 for a given current. The current of  the  device can be reduced by increasing these resistor  values  (see  the Modifying the EV Kit section), but linearity performance degrades.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## VCNTL

The VCNTL pin is used to control the gain of the amplifier.  The nominal operating range for the VCNTL pin is from 1V to 4.5V. Limiting VCNTL to this range ensures reliability of the device. Due to on-chip ESD diodes, do not apply VCNTL without VCC (+5V) present. If this condition is unavoidable, then change R4 on the EV kit to a resistor no smaller than 200 Ω .  This  resistor  will  limit  the current into the VCNTL pin for cases where VCC is grounded or left open.

## Modifying the EV Kit

Increasing the value of the external current-setting resistors,  R1  (first  amp  stage)  and  R2  (second amp stage), can reduce the current draw of the amplifier section of the device. Doubling the values of each of these external resistors cuts the DC current drain approximately in half but at the expense of approximately 5.4dB lower OIP3. Since the linearity of the amplifier is set by the cascaded performance of the two amplifier stages, one must be careful to balance the current distribution of the two stages to optimize OIP3 at the lowest current.

The MAX2056 EV kit has been designed and assembled to add the flexibility of measuring the device in different configurations. The kit has been assembled to cascade one attenuator section followed by the output amplifier. Some other configurations can be set as follows.

Configuration A) To use two attenuators followed by an output amplifier: Move capacitor C3 on the EV kit to connect pin 2 trace to pin 35 trace of the IC. Apply the RF input signal to SMA J4 and take the output signal from SMA J2.

Configuration B) To use only the attenuator between IC pins 2 and 8: Move capacitor C3 to connect the pin 2 trace of the IC to the trace of connector J1. Apply the RF input signal to SMA J4 and take the output signal from SMA J1.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2056 Evaluation Kit

Configuration C) To use only the attenuator between IC pins 35 and 29: Move capacitor C5 to connect the pin 29 trace of the IC to the trace of connector J5. Apply the RF input signal to SMA J1 and take the output signal from SMA J5.

Configuration D) To use only the amplifier: Move capacitor C5 to connect the pin 26 trace of the IC to the trace of connector J5. Apply the RF input signal to SMA J5 and take the output signal from SMA J2.

Configuration E) To insert a function between one attenuator and an output amplifier, configure the board for both configuration B and D. Insert the desired function between SMA connectors J1 and J5. Apply the input signal to SMA J4 and take the output signal from SMA J2.

## Layout Considerations

The MAX2056 evaluation boards can be used as a guide for board layout. Pay close attention to thermal design and placement of components on the PC board. The exposed paddle (EP) on the MAX2056 package conducts heat away from the die and provides a lowimpedance electrical connection. The EP must be attached to the PC board ground plane with a low thermal and electrical impedance contact. Ideally, this is provided by soldering the backside package contact directly to a metal ground plane on the PC board. Alternatively, the EP can be connected to a ground plane using an array of plated vias directly below the EP. The MAX2056 EV kit uses nine evenly spaced, 0.016in-diameter, plated through holes to connect the EP to the lower ground planes.

## MAX2056 Evaluation Kit

Figure 1. MAX2056 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX2056 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 4. MAX2056 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

## MAX2056 Evaluation Kit

Figure 3. MAX2056 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 5. MAX2056 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2056 Evaluation Kit

<!-- image -->

Figure 6. MAX2056 EV Kit PC Board Layout-Inner Layer 3 (Routing)

<!-- image -->

Figure 8. MAX2056 EV Kit PC Board Layout-Bottom Soldermask

Figure  7. MAX2056 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure  9. MAX2056 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600