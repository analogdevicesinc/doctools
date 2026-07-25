<!-- lastmod 2022-08-02 -->
## General Description

The MAX9382 evaluation kit (EV kit) includes the MAX9382, a high-speed PECL/ECL phase-frequency detector. The EV kit evaluates the MAX9382, which compares single-ended reference (R) and VCO (V) inputs and produces pulse streams on differential up (U) and down (D) outputs, depending on the input phase or frequency difference. The EV kit operates up to 450MHz.

The MAX9382 EV kit is designed with 50 Ω controlledimpedance traces in a four-layer PC board. The EV kit can also be used to evaluate the MAX9383.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ± 10%, 10V tantalum capacitors (B case) AVX TAJB106K010R or Kemet T494B106K010AS                    |
| C3, C4        |     2 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016A |
| C5, C6        |     2 | 0.01µF ± 10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103KW or Murata GRM36X7R103K016AD    |

<!-- image -->

Features

- ♦ Controlled 50 Ω Microstrip Traces
- ♦ Equal Input Trace Lengths
- ♦ Output Trace Lengths Matched to &lt;2mils
- ♦ Board Frequency: Up to 450MHz
- ♦ PECL/ECL Supply
- ♦ 8-Pin SO Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX9382EVKIT | 0°C to +70°C | 8 SO         |

Note: To evaluate the MAX9383, request a MAX9383ESA free sample with the MAX9382EVKIT.

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                  |
|-------------------|-------|--------------------------------------------------------------|
| R1, R3            |     2 | 49.9 Ω ± 1% resistors (0402)                                 |
| R2, R4            |     0 | Not installed, resistor (0402)                               |
| R5-R8             |     4 | 100 Ω ± 0.1%, 1/4W resistors (0805) IRC PFC-W0805R-03-1000-B |
| R, V, U, U , D, D |     6 | SMA edge-mount connectors Johnson Components 142-0701-801    |
| U1                |     1 | MAX9382ESA (8-pin SO)                                        |
| None              |     1 | MAX9382 PC board                                             |
| None              |     1 | MAX9382 EV kit data sheet                                    |
| None              |     1 | MAX9382 data sheet                                           |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| IRC         | 361-992-7900 | 361-992-3377 | www.irctt.com   |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX9382/MAX9383 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9382 Evaluation Kit

## Quick Start

The MAX9382 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- One 450MHz (min) two-channel pulse generator (e.g., Agilent 8133A)
- One 12GHz (min) bandwidth oscilloscope with internal 50 Ω input termination (e.g., Tektronix 1180IC digital sampling oscilloscope with SD-24 sampling head)
- Two power supplies
- a) One 2.0V with 500mA current capability
- b) One  adjustable  -3.5V  to  -2.2V  with  500mA current capability
- Matched male-SMA-to-male-SMA 50 Ω coax cables
- a) Matched SMA 50 Ω coax cables for inputs R and V
- b) Matched SMA 50 Ω coax cables for outputs U and D

## Evaluating the MAX9382 at the Same Frequency with Different Phase

- 1) Connect two matched coax cables to the oscilloscope. Connect the other end of the cables to U and D on the EV kit board.
- 2) Connect a 2.0V power supply to the VCC pad. Set the supply to 2.00V. Connect the supply ground to the GND pad closest to VCC.
- 3) Connect a -2.5V adjustable power supply to the pad labeled VEE. Set the supply to -2.5V. Connect the supply ground to the GND pad closest to VEE.
- 4) Connect one pair of matched coax cables to the pulse generator's noninverting outputs. Connect the other end of the cables to R and V on the EV kit.
- 5) Adjust the signal generator to the following settings:
- a) VIH = 1.0V
- b) VIL = 0.4V
- c) Duty cycle = 50%
- d) Frequency = 450MHz
- e) Set R lagging V = 600ps
- 6) Turn on the power supplies, enable the generator, and verify that the output signals meet the following specifications:
- a) VOH: 965mV &lt; VOH &lt; 1.12V
- b) VOL: 190mV &lt; VOL &lt; 380mV

The U and D waveforms should be similar to Figure 1.

Note: For other input levels, refer to the MAX9382/ MAX9383 data sheet, setting VCC = 2.0V.

Figure 1. Waveform for R Lagging V

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX9382 EV kit contains the MAX9382, a highspeed PECL/ECL phase-frequency detector. The EV kit compares two single-ended inputs, R (reference) and V (VCO), and produces pulse streams on differential up (U) and down (D) outputs. When integrated, the difference of the output pulse streams provides a control voltage proportional to the input phase or frequency difference.

## Power Supply

In order to terminate the outputs with 50 Ω to (VCC - 2 V) using the 50 Ω oscilloscope input termination, VCC is set to 2.0V. In an actual application, VCC and VEE can have different supplies (refer to the MAX9382/MAX9383 data sheet).

## MAX9382 Evaluation Kit

## Evaluating the MAX9383

The MAX9382 EV kit can be used to evaluate the MAX9383, a high-speed phase-frequency detector with a supply range different from the MAX9382. To evaluate the MAX9383, replace the MAX9382ESA with a MAX9383ESA. Table 1 shows the VEE ranges for the MAX9382 and MAX9383 when used with the MAX9382 EV kit.

## Table 1. VEE Ranges

| DEVICE   | V EE RANGE (V)   |
|----------|------------------|
| MAX9382  | -3.5 to -2.2     |
| MAX9383  | -3.5 to -2.75    |

<!-- image -->

Figure 2. MAX9382 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9382 Evaluation Kit

<!-- image -->

Figure 3. MAX9382 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX9382 EV Kit PC Board Layout-Inner Layer 2 (GND Layer)

Figure 4. MAX9382 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX9382 EV Kit PC Board Layout-Inner Layer 3 (VCC Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9382 Evaluation Kit

Figure 7. MAX9382 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600