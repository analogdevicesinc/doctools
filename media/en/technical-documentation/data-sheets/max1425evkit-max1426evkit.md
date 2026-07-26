<!-- lastmod 2022-08-05 -->
## General Description

The MAX1425 evaluation kit (EV kit) is an assembled and tested board for prototyping designs using the MAX1425 or MAX1426 analog-to-digital converters (ADCs). The board interfaces to a user-provided logic analyzer or data-acquisition system. An external clock generator and +5V power supply are required.

| DESIGNATION                                                 |   QTY | DESCRIPTION                                      |
|-------------------------------------------------------------|-------|--------------------------------------------------|
| C1, C4-C8, C15, C16, C20, C22, C25, C27, C30, C34, C35, C37 |    16 | 0.1µF ceramic capacitors (0805)                  |
| C2, C10                                                     |     2 | 100pF ceramic capacitors (0805)                  |
| C3, C9                                                      |     2 | 22pF ceramic capacitors (0805)                   |
| C11, C17, C18, C21, C26, C28, C29, C31, C32, C33            |    10 | 2.2µF, 10V capacitors Sprague 595D 'A' case size |
| C12, C13, C14, C23                                          |     4 | 100µF, 25V capacitors Sprague 595D 'R' case size |
| J1                                                          |     1 | 2x10-pin header                                  |
| REF IN, IN1, CLK IN                                         |     3 | SMA connectors                                   |
| JU1                                                         |     1 | 2-pin header                                     |
| JU2                                                         |     1 | 3-pin header                                     |
| R1                                                          |     1 | 2k Ω ±5% resistor (0805)                         |
| R2, R3, R35, R38                                            |     4 | 100 Ω ±5% resistors (0805)                       |

- ♦ 20Msps Conversion Rate
- ♦ Clock Shaping Circuit
- ♦ On-Board TTL Buffers
- ♦ Wideband Transformer Accepts Single-Ended Input
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX1425EVKIT | -40°C to +85°C | 28 SSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                         |
|---------------|-------|-------------------------------------|
| R4, R5        |     2 | 25 Ω ±5% resistors (1206)           |
| R6, R7, R8    |     3 | 51 Ω ±5% resistors (1206)           |
| R9            |     1 | 2.5k Ω ±5% resistor (1206)          |
| R10           |     1 | 2.5k Ω ±5% resistor (0805)          |
| R11           |     1 | 1k Ω ±5% resistor (0805)            |
| R12           |     1 | 4k Ω ±5% resistor (0805)            |
| R13-R33       |    21 | 200 Ω ±5% resistors (0805)          |
| R34           |     1 | 2k Ω potentiometer                  |
| R36           |     1 | 3k Ω ±5% resistor (0805)            |
| R37           |     1 | 100 Ω ±5% resistor (1206)           |
| T1            |     1 | Transformer Minicircuits T1-1T-KK81 |
| U1            |     1 | Maxim MAX1425EAI                    |
| U2, U3        |     2 | 74ALS541A                           |
| U4            |     1 | Maxim MAX473ACSA                    |
| U5            |     1 | Maxim MAX961CSA                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX1425 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

You'll need the following required equipment:

- DC power supplies: 2 each (use for digital +5V and analog +5V)
- Function generator for clock input, 2Vp-p
- Function generator for signal input, 2Vp-p
- Logic analyzer or data-acquisition system
- Voltage reference (optional)

Note: To ensure maximum performance, use a clock generator with low phase noise, such as the HP 8662A filtered with an appropriate bandpass filter.

The MAX1425 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are complete.

- 1) Connect one +5V DC power supply to +5VA and +5VADUT. Connect the negative terminal of this supply  to  AGND. Connect the second +5V supply to +5VDDUT and +5VD. Connect the negative terminal of the second supply to DGND. See Table 1.
- 2) If  using  an  external  reference,  connect a 2.500V ±1mV voltage reference to the REF IN connector. If using the internal reference, do not connect anything to the REF IN connector.
- 3) Connect a 20MHz, 1Vp-p clock function generator to the CLK IN connector.
- 4) Connect the signal function generator to the IN1 connector.
- 5) Connect a logic analyzer (e.g. HP16500C) or dataacquisition system to header J1. Configure jumpers JU1 and JU2 as shown in Table 2.
- 6) Turn on the power supplies and reference supply (if used).
- 7) Enable the function generators. Adjust potentiometer R34 so that the strobe signal has 50% duty cycle.
- 8) Begin acquiring digital data.

## Detailed Description of the Hardware

The MAX1425 EV kit is a proven PC board layout pattern that gives good analog performance. Refer to the MAX1425 data sheet for more information.

The clock signal from the CLK IN connector is terminated by R35/R38 and AC-coupled by C16 into U5, the MAX961 comparator. Potentiometer R34 sets the clock threshold. Comparator U5 produces a square-wave output, driving the MAX1425 and providing a clock output (J1-20) to be used with a user-supplied data-acquisition system. Jumper JU2 selects the polarity of the J1 strobe signal.

The analog input signal from the IN1 connector is terminated by R2/R3 and coupled through transformer T1. The transformer converts the single-ended input into a differential signal between VINP and VINN, with commonmode voltage set by the CML pin and buffered by U4.

The device under test, U1, samples analog input VINPVINN. Its digital outputs are buffered by U2 and U3 (74ALS541). The twenty 200 Ω series resistors help isolate  the  A/D  converter  from  switching  transients.  The buffered digital outputs appear on connector J1.

## Performance Considerations

Careful attention to setup and testing is necessary to achieve optimum results with this high-performance converter. Precise and accurate phase-locked signal sources should be employed in all cases. Low jitter sources, such as the HP 8664B for the input phaselocked with a second low-jitter clock generator, will give the best results. In addition, lowpass or bandpass filters should be used on the input signal to ensure that the MAX1425's low-distortion characteristics are maintained.

## Table 1. Power Connections

| TERMINAL   | FUNCTION                                         |
|------------|--------------------------------------------------|
| +5VA       | Analog Supply to the Signal Conditioning Op Amps |
| +5VADUT    | Analog Supply to the Device Under Test           |
| AGND       | Analog Ground Return                             |
| DGND       | Digital Ground Return                            |
| +5VDDUT    | Digital Supply to the Device Under Test          |
| +5VD       | Digital Supply to the Digital Buffers            |

## Table 2. Jumper Settings

| JUMPER   | SETTING               | FUNCTION                                 |
|----------|-----------------------|------------------------------------------|
| JU1      | Open                  | Output Enable = low (enabled)            |
| JU1      | Closed                | Output Enable = high (disabled)          |
| JU2      | 1-2 (bottom position) | STROBEIN polarity is the same as CLK     |
| JU2      | 2-3 (top position)    | STROBEIN polarity is the opposite of CLK |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1425 Evaluation Kit

Figure 1. MAX1425 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1425 Evaluation Kit

Figure 1. MAX1425 EV Kit Schematic (continued)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1425 Evaluation Kit

<!-- image -->

Figure 2. MAX1425 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX1425 EV Kit Component Placement Guide-Reverse Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1425 Evaluation Kit

Figure 4. MAX1425 EV Kit PC Board Layout-Layer 1

<!-- image -->

Figure 5. MAX1425 EV Kit PC Board Layout-Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1425 Evaluation Kit

Figure 6. MAX1425 EV Kit PC Board Layout-Layer 3

<!-- image -->

Figure 7. MAX1425 EV Kit PC Board Layout-Layer 4

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600