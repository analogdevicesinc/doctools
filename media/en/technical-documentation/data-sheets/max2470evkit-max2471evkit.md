<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2470/MAX2471 evaluation kits (EV kits) simplify the evaluation of the MAX2470/MAX2471 VCO buffer amplifiers. They enable testing of the devices' performance and require no additional support circuitry. All inputs and outputs use SMA connectors to facilitate easy connection of RF test equipment.

The MAX2470 EV kit is assembled with the MAX2470 and provides one high-impedance input (with pads to terminate to 50 Ω ) and a pair of matched 50 Ω differential outputs. JU1 sets the logic level at the HI /LO bias-control input, allowing for selection between 10MHz to 500MHz and 10MHz to 200MHz operation. The MAX2471 EV kit is assembled with the MAX2471 and provides two highimpedance inputs (with pads to terminate to 50 Ω ) and a pair of matched 50 Ω differential outputs.

Features

- ' Easy Evaluation of MAX2470/MAX2471
- ' +2.7V to +5.5V Single-Supply Operation
- ' On-Board Input-Frequency Range Selection (MAX2470)
- ' Single-Ended (MAX2470) or Differential (MAX2471) Inputs
- ' All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE    | IC PACKAGE   | SOT TOP MARK   |
|---------------|----------------|--------------|----------------|
| MAX2470 EVKIT | -40°C to +85°C | SOT23-6      | AAAX           |
| MAX2471 EVKIT | -40°C to +85°C | SOT23-6      | AAAY           |

## Component Suppliers

| SUPPLIER     | PHONE        | FAX          | URL                       |
|--------------|--------------|--------------|---------------------------|
| AVX          | 803-946-0690 | 803-626-3123 | http://www.avx- corp.com  |
| E.F. Johnson | 402-474-4800 | 402-474-4858 | http://www.ef johnson.com |

## Component Lists

## Common Components for MAX2470/MAX2471 EV Kits

| DESIGNATION    |   QTY | DESCRIPTION                                                          |
|----------------|-------|----------------------------------------------------------------------|
| C1, C2, C3, C5 |     4 | 2200pF, 10%, 25V ceramic-chip capacitors (0603)                      |
| C6             |     1 | 10µF, 10%, 10V tantalum capacitor AVX TAJC106K016                    |
| R3, R4         |     2 | Optional 50 Ω input-termination resis- tors (0603) ( not installed ) |
| J1, J2, J3     |     3 | SMA connectors (PC top mount) E.F. Johnson 142-0701-216              |
| J5, J6         |     2 | Test points Mouser 151-203                                           |
| None           |     1 | MAX2470/2471EVKIT PC board                                           |
| None           |     1 | MAX2470/MAX2471 EV kit manual                                        |

## Additional Components for MAX2470 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                        |
|---------------|-------|----------------------------------------------------|
| C7            |     1 | 2200pF, 10%, 25V ceramic-chip capacitor (0603)     |
| JU1           |     1 | 3-pin header (0.100" centers) Digi-key S1012-36-ND |
| JU1           |     1 | Shunt (jumper) Digi-key S9000-ND                   |
| R1            |     1 | 0 Ω , 5% chip resistor (0603)                      |
| R2            |     1 | 1k Ω , 5% chip resistor (0603)                     |
| U1            |     1 | MAX2470EUT                                         |

## Additional Components for MAX2471 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| C4            |     1 | 2200pF, 10%, 25V ceramic-chip capacitor (0603)         |
| J4            |     1 | SMA connector (PC top mount) E.F. Johnson 142-0701-216 |
| U1            |     1 | MAX2471EUT                                             |

1

## MAX2470/MAX2471 Evaluation Kits

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2470/MAX2471 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  the  operation  of  the  MAX2470/MAX2471. It is intended as a guide only, and some substitutions are possible.

- One DC power supply capable of supplying a minimum of 10mA at +2.7V to +5.5V.
- One RF spectrum analyzer capable of making measurements over the bandwidth of the MAX2470/ MAX2471 and a few harmonics, such as the HP 8561E.
- One RF signal generator capable of delivering 0dBm output power at 500MHz, such as the HP 8648C signal generator.
- Two baluns with a 2:1 turns ratio and an operating range encompassing 10MHz to 500MHz, such as the Macom model number 96341 180° hybrid (balun). Fully  differential  measurements for the MAX2470 require a single 180° hybrid at the output. Fully differential  measurements for the MAX2471 require two 180° hybrids: one at the input, and one at the output.

## Connections and Setup

- 1) Verify the DC power supply is set to less than +5.5V and is off before connecting the supply to the EV kit. A good starting point is +3.0V. Connect the power supply between VCC and GND and turn it on.
- 2) Set the output power of the signal generator to -20dBm at 200MHz. Disable the output, then connect the output of the signal generator to the IN SMA connector of the MAX2470 EV kit board. For the MAX2471, use a balun between the signal generator and the differential inputs (IN and IN ).
- 3) For a differential power-gain measurement, connect a  balun between the outputs of the buffer and the spectrum analyzer.

## Analysis

Adjust the frequency span, center frequency, and amplitude of the spectrum analyzer to observe the signal  peak at 200MHz; the output signal power should read approximately -6dBm for the MAX2470 and -5dBm for the MAX2471.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

This section describes the circuitry surrounding the IC in  the  MAX2470/MAX2471 EV kits. For more detailed information about the device operation, please consult the MAX2470/MAX2471 data sheet.

Figure 1 is the schematic for the MAX2470/MAX2471 EV kits.  Capacitors C1, C2, C3, and C4 are 2200pF DCblocking capacitors; this value contributes minimal reactance to the signal paths, down to 10MHz. Capacitors C5 and C6 form the VCC decoupling network. Note the location of each component; a relatively large 10µF tantalum capacitor, C6, is located near the VCC connector. Near to C6, a much smaller 2200pF decoupling capacitor, C5, reduces any high-frequency interference.

The EV kit includes pads for R3 and R4 that can facilitate simple termination of the input(s). For the MAX2470 EV kit, R2 and C7 provide high-frequency filtering to prevent excess noise from coupling into the IC.

On the MAX2470 EV kit, jumper JU1 selects the state of the HI/ LO input on the MAX2470. Selecting the 'LO' setting optimizes the MAX2470 for input frequencies from 10MHz to 200MHz. Selecting the 'HI' setting optimizes the MAX2470 for input frequencies from 10MHz to 500MHz.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 1.  MAX2470/MAX2471 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2470/MAX2471 Evaluation Kits

<!-- image -->

Figure 2.  MAX2470/MAX2471 EV Kit Component Placement Guide-Component Side

Figure 3.  MAX2470/MAX2471 EV Kit PC Board LayoutGround Plane

<!-- image -->

Figure 4.  MAX2470/MAX2471 EV Kit PC Board LayoutComponent Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4