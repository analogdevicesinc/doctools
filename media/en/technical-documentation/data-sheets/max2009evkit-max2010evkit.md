<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX2009/MAX2010 evaluation kits (EV kits) simplify the evaluation of the MAX2009 and MAX2010. These kits are fully assembled and tested at the factory. Standard 50 Ω SMA connectors are included for all inputs and outputs to facilitate evaluation on the test bench.

Each EV kit provides a list of equipment required to evaluate the device, a test procedure, a circuit schematic, a bill of materials (BOM), and artwork for each layer of the PC board.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE                   |
|------------|--------------|---------------------------|
| Johnson    | 507-833-8822 | www.johnsoncomponents.com |
| Murata     | 770-436-1300 | www.murata.com            |
| Skyworks   | 781-376-3018 | www.alphaind.com          |
| TOKO       | 800-745-8656 | www.toko.com              |

## MAX2009 Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                  |
|-----------------|-------|------------------------------------------------------------------------------|
| C1, C6, C8, C10 |     4 | 8.2pF ± 0.25pf 50V C0G ceramic capacitors (0402) Murata GRP1555C1H8R2C       |
| C2, C3          |     2 | 1.5pF ± 0.1pF, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H1R5B       |
| C4, C5          |     2 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K        |
| C7, C9          |     2 | 0.5pF ± 0.1pF, 50V C0G ceramic capacitors (0402) Murata GRP1555C1HR50B       |
| C11, C12        |     0 | Not installed                                                                |
| J1, J2, J3, J4  |     4 | PC board edge mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| J5              |     1 | 2 x 10 header, 0.100in centers Molex 10-89-1201                              |
| R1, R2, R3      |     3 | 1k Ω ± 5% resistors (0402)                                                   |
| U1              |     1 | MAX2009 28-pin thin QFN-EP Maxim MAX2009ETI-T                                |
| VR1, VR2        |     2 | Hyperabrupt varactor diodes Skyworks SMV1232-079                             |

- ♦ Fully Assembled and Tested
- ♦ Frequency Range 1200MHz to 2500MHz (MAX2009) 500MHz to 1100MHz (MAX2010)
- ♦ Up to 12dB ACPR Improvement*
- ♦ Independent Adjustable Gain and Phase Expansion
- ♦ Low Power Consumption

* Performance dependent on amplifier, bias, and modulation.

## Ordering Information

| PART         | TEMP RANGE         | PIN-PACKAGE     |
|--------------|--------------------|-----------------|
| MAX2009EVKIT | -40 ° C to +85 ° C | 28 Thin QFN-EP* |
| MAX2010EVKIT | -40 ° C to +85 ° C | 28 Thin QFN-EP* |

## MAX2010 Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                  |
|-----------------|-------|------------------------------------------------------------------------------|
| C1, C2, C3, C10 |     4 | 100pF ± 5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H101J          |
| C4, C5          |     2 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K        |
| C6, C8          |     2 | 15pF ±5%, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H150J            |
| C7, C9          |     0 | Not installed                                                                |
| C11, C12        |     2 | 2.2pF ± 0.1pF, 50V C0G ceramic capacitors (0402) Murata GRP1555C1H2R2B       |
| J1, J2, J3, J4  |     4 | PC board edge-mount SMA RF connectors (flat-tab launch) Johnson 142-0741-856 |
| J5              |     1 | 2 x 10 header, 0.100in centers Molex 10-89-1201                              |
| L1, L2          |     2 | 5.6nH ± 0.3nH chip inductors (0402) TOKO LL1005-FH5N6S                       |
| R1, R2, R3      |     3 | 1k Ω ± 5% resistors (0402)                                                   |
| U1              |     1 | MAX2010 28-pin thin QFN-EP Maxim MAX2010ETI-T                                |
| VR1, VR2        |     2 | Hyperabrupt varactor diodes Skyworks SMV1232-079                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

## MAX2009/MAX2010 Evaluation Kits

## Quick Start

The MAX2009/MAX2010 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  the  operation of the MAX2009/MAX2010. It is intended as a guide only, and substitutions may be possible:

- Two DC power supplies capable of delivering +5V and 20mA of continuous current
- Four adjustable DC power supplies capable of delivering +5V and 5mA of continuous current
- One high-current power supply capable of biasing a preamplifier
- One HP 8753D or equivalent network analyzer
- One preamplifier with a gain of 25dB in the 500MHz to  1100MHz (MAX2010) or 1200MHz to 2500MHz (MAX2009) frequency range with a minimum output 1dB compression point of 38dBm
- One 6dB attenuator
- One 3dB high-power attenuator
- Two 6dB high-power attenuators

## Connections and Setup

## Test Set Calibration

- 1) Set up the test equipment per Figure 1 with the network analyzer output power disabled.
- 2) Enable the preamplifier.
- 3) Set the network analyzer to perform a power sweep from -20dBm to +8dBm at the frequency of interest and enable the output power. For the best results, perform the standard network analyzer calibration with everything except the MAX2009/MAX2010 EV kit.
- 4) After the calibration, leave the preamplifier connected to port 1 of the network analyzer.

## Testing the Phase Section-Figure 1

- 1) With the network analyzer's power disabled, connect the output attenuator pad of the preamplifier to the SMA labeled PHASE\_IN (J1).
- 2) Connect the SMA labeled PHASE\_OUT (J2) to the attenuator pad on port 2 of the network analyzer.
- 3) With the +5V supply disabled, connect the positive terminal to the header pin labeled VCC\_P. Connect the ground terminal to a header pin labeled GND.
- 4) With all adjustable power supplies disabled, set their voltages to the recommended values in Table 1.  Connect these supplies to PB\_IN, PD\_CS1, PD\_CS2, and PF\_S1*. Connect all ground terminals to the header pins labeled GND.
- 5) Enable the +5V (VCC\_P) power supply first, followed by the adjustable supplies.
- 6) Enable the output power on the network analyzer.
- 7) With the recommended settings, the AM-PM response of the phase section should provide a phase expansion breakpoint of approximately 4dBm and a slope of approximately 1.2°/dB.
- 8) To power down: First disable the network analyzer, preamplifier, adjustable supplies, and then the +5V (VCC\_P) supply.

## Table 1. Phase Section Control Voltages

| PIN (J5)   |   VOLTAGE (V) |
|------------|---------------|
| PB_IN      |             0 |
| PD_CS1     |             0 |
| PD_CS2     |             0 |
| PF_S1*     |             5 |

* Note: PF\_S1 is shorted to PF\_S2 on layer 4 of the PC board.

## Testing the Gain Section-Figure 2

- 1) With the network analyzer's output power disabled, connect the output attenuator pad of the preamplifier to the SMA labeled GAIN\_IN (J3).
- 2) Connect the SMA labeled GAIN\_OUT (J4) to the attenuator pad on port 2 of the network analyzer.
- 3) With the +5V supply disabled, connect the positive terminal to the header pin labeled VCC\_G. Connect the ground terminal to a header pin labeled GND.
- 4) With all adjustable power supplies disabled, set their voltages to the recommended values in Table 2.  Connect these supplies to G\_BP, G\_FS, and G\_CS. Connect all ground terminals to the header pins labeled GND.
- 5) Enable the +5V (VCC\_G) power supply first, followed by the adjustable supplies.
- 6) Enable the output power on the network analyzer.
- 7) With the recommended settings, the AM-AM response of the gain section should provide a gain expansion breakpoint of approximately 5dBm and a slope of approximately 0.5dB/dB.
- 8) To power down: First disable the network analyzer, preamplifier, adjustable supplies, and then the +5V (VCC\_G) supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2009/MAX2010 Evaluation Kits

## Table 2. Gain Section Control Voltages

| PIN (J5)   |   VOLTAGE (V) |
|------------|---------------|
| G_BP       |           1.2 |
| G_FS       |             5 |
| G_CS       |           1.0 |

## Detailed Description

The following sections describe the tuning methodology best implemented with a class A amplifier. Other classes of operation may require significantly different settings.

## Supply Decoupling Capacitors

Capacitors C4 and C5 are 0.01µF (±10%) and are used for minimizing low-frequency noise on the supply.

## External Matching Components

The MAX2009 external matching networks at the input and output of the phase and gain sections consist of C1, C11, C10, C12, C9, C8, C6, C7, along with some high-impedance transmission lines. The MAX2010 matching consists of C1, C11, L1, L2, C10, C12, C9, C8, C6, and C7.

## Phase-Tuning Section

Varactors VR1 and VR2 provide fine tuning of the phase-expansion slope. Resistors R1 and R2 provide a high-impedance method to inject control voltage on the varactors. Capacitors C2 and C3 are coupling capacitors  that  also  offset  the  series  parasitic  inductance  of the chip and PC board. If phase-slope fine tuning is not required in the user's application, then only C2 and C3 to ground are necessary.

## Gain and Phase Controls

The MAX2009/MAX2010 controls can provide real-time software-controlled distortion corrections as well as setand-forget tuning by setting the expansion starting point (breakpoint) and the rate of expansion (slope). The gain and phase breakpoints are adjustable over a 20dB input power range. The phase expansion slope is variable from 0.3°/dB to 2.0°/dB and can be adjusted for  a  maximum of 24° of phase expansion. The gain expansion slope is variable from 0.1dB/dB to 0.6dB/dB and can be adjusted for a maximum of 7dB gain expansion.

## Phase-Expansion Breakpoint

The PB\_IN input voltage range of 0V to VCC corresponds to a breakpoint input power range of 3.7dBm to 23dBm. In order to achieve optimal performance, the phase-expansion  breakpoint  of  the  MAX2009/ MAX2010 must be set to equal the phase compression point of the PA.

Control pin PBRAW should be shorted to the PBEXP output pin for most applications. Driving PBRAW directly allows for additional control such as obtaining phase compression for some and/or all the input power sweep. Resistor R3 allows the option of driving PBRAW with a low-impedance voltage, which overrides the PBEXP output voltage.

## Phase-Expansion Slope

The phase-expansion slope of the MAX2009/MAX2010 is controlled by the PF\_S1, PF\_S2, PD\_CS1, and PD\_CS2 pins. Most applications require PF\_S1 and PF\_S2 to be driven identically, and therefore they are shorted on layer 4 of the PC board. The phase-expansion slope of the MAX2009/MAX2010 must also be adjusted to equal the opposite slope of the PA's phase-compression curve.

## Gain-Expansion Breakpoint

The  G\_BP  input  voltage  range  of  0.5V  to  5.0V corresponds to a breakpoint input power range of -3dBm to 23dBm. In order to achieve the optimal performance, the  gain-expansion breakpoint of the MAX2009/ MAX2010 must be set to equal the gaincompression point of the PA. The G\_BP control has a minimal effect on the small-signal gain when operated from 0.5V to 5.0V.

## Gain-Expansion Slope

Both G\_CS and G\_FS pins have an input voltage range of 0V to VCC, corresponding to a slope of approximately 0.1dB/dB to 0.6dB/dB. The slope is set to maximum when VGCS = 0V and VGFS = +5V, and the slope is at its minimum when VGCS = +5V and VGFS = 0V. In addition to properly setting the breakpoint, the gain-expansion slope of the MAX2009/MAX2010 must also be adjusted in order to compensate for the PA's gain compression. The slope should be set using the following equation:

<!-- formula-not-decoded -->

where:

MAX20XX\_SLOPE = MAX2009/MAX2010 gain section's slope in dB/dB.

PA\_SLOPE = PA's gain slope in dB/dB, a negative number for compressive behavior.

Unlike with the G\_BP pin, modifying the gain-expansion slope bias on the G\_CS pin causes a change in the part's  insertion  loss  and  noise  figure.  For  example,  a smaller slope caused by G\_CS results in a better insertion loss and lower noise figure.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2009/MAX2010 Evaluation Kits

## Modifying the EV Kit

The external varactors on the EV kit can be replaced with fixed capacitors if dynamic tuning of the fine phaseexpansion slope through PF\_S1 and PF\_S2 is not required. A closely matched minimum effective capacitance of 2pF to 6pF must be presented at these pins.

Component pads for external filtering components are included for pins PB\_IN, PB\_RAW, G\_BP, G\_CS, and G\_FS.

Pins PF\_S1 and PF\_S2 are shorted together on the EV kit.  If  independent  control  is  required,  disconnect  the trace connecting these two pins on the bottom side of the PC board (pins 19 and 20 of J5).

## Layout Considerations

The MAX2009/MAX2010 EV kits can serve as guides to board layout. Pay close attention to thermal design and placement of components on the PC board. The package's exposed paddle (EP) dissipates heat from the device and provides a low-impedance electrical connection. The EP must be solder attached to a PC board ground pad. This ground pad should be connected to the lower ground plane using multiple ground vias. The MAX2009/MAX2010 PC boards use a 3 x 3 grid of 0.012in diameter plated through holes. The MAX2009 layout uses high-impedance lines on the input and output paths of the gain section to aid in matching. In an actual application, matching capacitors C7, C9, C11, and C12 could be replaced with a microstrip equivalent solution to reduce component count. In order to provide increased tuning range, the ground plane under the varactor control section has been removed. The MAX2009/MAX2010 EV kits are constructed on FR4 with the top dielectric thickness of 0.015in.

Figure 1. Testing the Phase Section

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2009/MAX2010 Evaluation Kits

<!-- image -->

Figure 2. Testing the Gain Section

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2009/MAX2010 Evaluation Kits

Figure 3. MAX2009 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2009/MAX2010 Evaluation Kits

<!-- image -->

Figure 4. MAX2010 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2009/MAX2010 Evaluation Kits

Figure 5. MAX2009 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 7. MAX2009 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

8

Figure 6. MAX2009 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 8. MAX2009 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX2009/MAX2010 Evaluation Kits

<!-- image -->

Figure 9. MAX2009 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 11. MAX2009 EV Kit PC Board Layout-Bottom Soldermask

Figure 10. MAX2009 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 12. MAX2009 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

## MAX2009/MAX2010 Evaluation Kits

<!-- image -->

Figure 13. MAX2010 EV Kit PC Board Layout-Top Silkscreen

<!-- image -->

Figure 15. MAX2010 EV Kit PC Board Layout-Top Layer Metal

<!-- image -->

Figure 14. MAX2010 EV Kit PC Board Layout-Top Soldermask

<!-- image -->

Figure 16. MAX2010 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

## MAX2009/MAX2010 Evaluation Kits

<!-- image -->

Figure 17. MAX2010 EV Kit PC Board Layout-Inner Layer 3 (Routes)

<!-- image -->

Figure 19. MAX2010 EV Kit PC Board Layout-Bottom Soldermask

Figure 18. MAX2010 EV Kit PC Board Layout-Bottom Layer Metal

<!-- image -->

Figure 20. MAX2010 EV Kit PC Board Layout-Bottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_