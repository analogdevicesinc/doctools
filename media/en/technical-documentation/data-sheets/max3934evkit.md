<!-- lastmod 2022-08-02 -->
## General Description

The MAX3934 evaluation kit (EV kit) is an assembled demonstration board that provides electrical evaluation of the MAX3934 10.7Gbps compact laser driver. The die version mounted on the board is the MAX3934A, which contains a 12 Ω internal damping resistor (RD). The output of the evaluation board is interfaced to an SMA connector that can be connected to a 50 Ω terminated oscilloscope.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EFJohnson  | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3934 when contacting these component suppliers.

| DESIGNATION                    |   QTY | DESCRIPTION                                                                       |
|--------------------------------|-------|-----------------------------------------------------------------------------------|
| C1, C2                         |     2 | 150pF chip MIS capacitors Metelics Corporation, 35 mils × 35 mils MC2-S-150-35-35 |
| C3-C9, C13, C14, C18, C19, C20 |    12 | 0.01µF ±15% ceramic capacitors (0201)                                             |
| C10, C15                       |     2 | 56pF ±15% ceramic capacitors (0201)                                               |
| C11                            |     1 | 10µF ±10% tantalum capacitor (0805) AVX TAJA106K010                               |
| C12                            |     1 | 0.1µF ±15% ceramic capacitor (0603)                                               |
| C32                            |     1 | 33µF ±10% tantalum capacitor                                                      |
| J1, J2, J3, J6, J7             |     5 | SMA connectors, edge mount EFJohnson 142-0701-851                                 |
| J4, J5                         |     2 | Test points Digi-Key 5000K-ND                                                     |
| JU1                            |     1 | 2-pin header, 0.1in centers Digi-Key S1012-36-ND                                  |
| JU1                            |     1 | Shunt Digi-Key S9000-ND                                                           |
| L1                             |     1 | 56nH inductor                                                                     |
| L2                             |     1 | EMI ferrite bead Murata BLM18HA601SG                                              |

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE    |
|--------------|----------------|---------------|
| MAX3934EVKIT | -40°C to +85°C | Chip on board |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                         |
|------------------|-------|-----------------------------------------------------|
| R1, R2, R12, R13 |     4 | 39 Ω ±5% resistors (0201)                           |
| R3               |     1 | 10k Ω ±1% resistor (0402)                           |
| R4               |     1 | 11.8k Ω ±1% resistor (0402)                         |
| R5               |     1 | 20k Ω ±1% resistor (0402)                           |
| R6               |     1 | 4.99k Ω ±1% resistor (0402)                         |
| R11              |     1 | Not installed                                       |
| TP5-TP10, TP12   |     7 | Test points Digi-Key 5000K-ND                       |
| U1               |     1 | MAX3934AE/D die                                     |
| U2, U3           |     2 | MAX480ESA, 8-pin SO                                 |
| U4               |     1 | MAX6190AESA,8-pin SO                                |
| VR1, VR2         |     2 | 200k Ω variable resistors Bourns 3296W-204          |
| VR3, VR4         |     2 | 100k Ω variable resistors Bourns 3296W-104          |
| None             |     1 | Epoxy, conductive, for U1, C1, C2 Ablefilm 84-1 LMI |
| None             |     1 | MAX3934 evaluation circuit board, rev A             |
| None             |     1 | MAX3934 EV kit data sheet                           |
| None             |     1 | MAX3934 data sheet                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ Fully Assembled and Tested
- ♦ On-Board Op Amps for Bias and Modulation Current Control
- ♦ Fully Matched for Best Input Return Loss
- ♦ Calibration Trace

## MAX3934 Evaluation Kit

## Quick Start

- 1) Remove shunt from JU1 to maintain data polarity.
- 2) Adjust VR1 and VR2 to their full clockwise positions. A light clicking noise indicates the end of the adjustment range.
- 3) Apply  a  differential  input  signal  (amplitude ≤ 800mVP-P single ended) to J2 and J3 (IN+ and IN-).
- 4) Attach a high-speed oscilloscope with 50 Ω inputs to J1. For optimum performance, see the interconnect recommendations that follow.
- 5) Connect a -5V supply to J4 (VEE) and ground to J5 (VCC).
- 6) Adjust VR1 counterclockwise until the desired bias current is achieved:

<!-- formula-not-decoded -->

where VBIASMON is the measured voltage at TP7 and RBIAS is 6 Ω .

- 7) Adjust VR2 counterclockwise until the desired modulation current is achieved.

<!-- formula-not-decoded -->

where VMODMON is the measured voltage at TP8 and RMOD is 3 Ω .

## Recommendations for Interconnect Between the MAX3934 EV Kit and an Oscilloscope

- 1) For optimum performance, use a high-bandwidth sampling oscilloscope, such as the Tektronix CSA8000 mainframe with an 80E01 50GHz sampling head. If a 50GHz sampling head is not available, use a 20GHz sampling head, such as the Tektronix 80E03 or 80E04.
- 2) A high-quality SMA attenuator (6dB or 14dB) is required to reduce the signal level for compatibility with the sampling head. Connect the attenuator directly to the output SMA connector on the EV kit to minimize transmission-line reflections.
- 3) The total path length from the EV kit to the oscilloscope must to be minimized. If possible, connect the female connector of the attenuator to the female input of the oscilloscope with an SMA adapter. If cables must be used, a 0.141in semirigid 50 Ω coaxial cable with high-quality SMA connectors is recommended (for example, the Tektronix 0151015-00).
- 4) The output of the EV kit can be AC- or DC-coupled to the oscilloscope. If AC-coupling is preferred, use a DC block rated for high-bandwidth signals and connect it between the output attenuator and the oscilloscope. If the board is DC-coupled to the oscilloscope, use low bias currents so the output voltage does not exceed the maximum voltage of the sampling head.

## Adjustments and Control Descriptions

| COMPONENT   | NAME             | FUNCTION                                                                                                     |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------|
| JU1         | POLARITY SWITCH  | Enables/disables the polarity switch. Remove shunt to maintain data polarity. Shunt to invert data polarity. |
| VR1         | BIAS ADJUST      | Adjusts the bias current.                                                                                    |
| VR2         | MOD ADJUST       | Adjusts the modulation current.                                                                              |
| VR3         | BIAS OP-AMP NULL | Adjustment to null the operational amplifier input offset.                                                   |
| VR4         | MOD OP-AMP NULL  | Adjustment to null the operational amplifier input offset.                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3934 Evaluation Kit

Figure 1. MAX3934 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3934 Evaluation Kit

Figure 2. MAX3934 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3934 EV Kit PC Board Layout-Component Side

Figure 4. MAX3934 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3934 Evaluation Kit

Figure 5. MAX3934 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 6. MAX3934 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5