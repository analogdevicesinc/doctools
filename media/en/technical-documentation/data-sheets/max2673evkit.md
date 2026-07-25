<!-- lastmod 2022-08-02 -->
## General Description

The MAX2673 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2673 upconverter mixer and enables testing  of  all  functions,  with  no  additional  support  circuitry.  Signal  inputs  and  outputs  use  SMA  connectors and are compatible with the 50 Ω impedance of test equipment.

Each EV kit is shipped with a MAX2673 configured for operation with an IF input frequency of 40MHz to 500MHz, and LO input frequency of 600MHz to 2400MHz. The output matching network is optimized for an RF output frequency of 900MHz.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                  |
|----------------|-------|----------------------------------------------|
| C1, C4, C8     |     3 | 220pF, ±10%, NP0 ceramic capaci- tors (0603) |
| C2, C3, C6, C9 |     4 | 47pF, ±10%, NP0 ceramic capaci- tors (0603)  |
| C5             |     1 | 1.5pF, ±0.25pF, NP0 ceramic capacitor (0603) |
| C7             |     1 | 10µF, 6.3V, ±20% A-size tantalum capacitor   |
| C10            |     1 | 22pF, ±10%, NP0 ceramic capacitor (0603)     |
| J1, J2, J3     |     3 | SMA connectors                               |
| SHDN           |     1 | 3-pin header (0.025" sq., 0.10" cen- ters)   |
| L1             |     1 | 27nH inductor                                |
| L2             |     1 | 18nH inductor                                |
| R2             |     1 | 100 Ω , 5% resistor (0603)                   |
| T1             |     1 | RF transformer Mini-Circuits TO-75           |
| U1             |     1 | MAX2673EUA                                   |

## Component Suppliers

| SUPPLIER      | PHONE        | FAX          |
|---------------|--------------|--------------|
| AVX           | 803-946-0690 | 803-626-3123 |
| Mini-Circuits | 800-654-7949 | 718-332-4661 |
| Toko          | 847-297-0700 | 847-699-7864 |

- ' +2.7V to +5.5V Single Supply
- ' Output Matched for 50 Ω at 900MHz
- ' Optimal Component Placement
- ' Easy Evaluation of All Product Functions
- ' Includes All Critical Peripheral Components

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX2673EVKIT | -40°C to +85°C | 8 µMAX       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX2673 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section.

## Test Equipment Required

- DC power supply capable of supplying +2.7V to +5.5V at a minimum of 50mA
- HP8561E spectrum analyzer or equivalent high-sensitivity spectrum analyzer
- Digital  multimeters to monitor supply voltage and supply current, if desired
- Two HP8648C RF generators for the IFIN and LO inputs or equivalent sine-wave sources

## Connections and Setup

- Verify the DC power supply is set to less than +5.5V before attaching the supply to the EV kit. A good starting voltage is +3.0V. Connect the power supply to the EV kit, and turn the power supply on.
- 2) Verify the SHDN jumper is connected to VCC, pin 1 shorted to pin 2.
- 3) Connect a signal generator to the IFIN connector using an SMA cable. As with any precision RF connector, care should be exercised while threading the connector. For optimal performance, consult the connector manufacturer's specifications for torque recommendation. Set the generator's output to 70MHz at -30dBm power level.
- 4) Connect a second signal generator to the LO input connector using an SMA cable. Set the generator's output to 970MHz at -10dBm power level.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

<!-- image -->

## Features

## MAX2673 Evaluation Kit

- 5) Connect the RF output of the EV kit to the spectrum analyzer using an SMA cable. Take care to use quality connector adapters for the spectrum analyzer's  input.  Avoid  the  use  of  BNC-type  connectors due to their high VSWR while operating in the GHz range.
- 6) To assist in troubleshooting, verify the correct DC voltages on the PC board with a multimeter. Use Table 1 to verify correct node voltage during proper operation.

## Table 1. Nominal DC Voltages

| PIN NUMBER   | PIN NAME   | NOMINAL DC VOLTAGE             |
|--------------|------------|--------------------------------|
| 1            | LO         | (V CC - 0.4V) to (V CC - 1.0V) |
| 2, 6         | GND        | 0                              |
| 3            | SHDN       | V CC for normal operation      |
| 4            | V CC       | +2.7V to +5.5V                 |
| 5            | RF OUT     | V CC                           |
| 7            | IFIN-      | +1.37V                         |
| 8            | IFIN+      | +1.37V                         |

## Analysis

- 1) Set the spectrum analyzer's center frequency to 900MHz, with a span of 30MHz.
- 2) Set the marker position to the peak level.
- 3) Read the output power of the center frequency. This should be nominally -18dBm ±1.3dBm. The output frequency is equal to the algebraic difference of the LO and IF frequencies. The power is equal to the IFIN input power, plus the conversion gain of the upconverter mixer. The MAX2673 has a typical conversion gain of 12dB.

## Detailed Description

Figure 1 is the schematic for the EV kit as shipped. The output matching components (L1, L2, C4, and C5) are optimized  for  an  output  frequency  of  900MHz. Capacitor C1 is a DC-blocking capacitor for the LO input port. To reduce the possibility of noise pickup, resistor R2 and capacitor C9 form a lowpass filter at the SHDN pin.

Capacitors C2, C3, C6, C7, and C8 form the VCC decoupling network. Note the location of each component. Capacitor C7, a 10µF tantalum type, is located near the VCC input test point. This serves as the central node for distribution of VCC to  the  mixer's  supply  pin and the output pull-up inductor L2. Both of these supply points need separate bypass capacitors as well as separate traces on the PCB. This is prudent practice to curtail crosstalk in high-frequency systems.

## Modifying the EV Kit

The MAX2673 EV kit is easily used at output frequencies from 400MHz to 2500MHz. To operate at frequencies other than the factory configuration of 900MHz, refer to Table 2 for the required component values.

Table 2. Output Matching Components vs. RF Output Frequency

| REFERENCE DESIGNATOR   | RF OUTPUT FREQUENCY   | RF OUTPUT FREQUENCY   | RF OUTPUT FREQUENCY   | RF OUTPUT FREQUENCY   |
|------------------------|-----------------------|-----------------------|-----------------------|-----------------------|
| REFERENCE DESIGNATOR   | 400MHz                | 900MHz                | 1900MHz               | 2450MHz               |
| L1                     | Short                 | 27nH                  | 5.6nH                 | 3.9nH                 |
| L2                     | 39nH                  | 18nH                  | 4.7nH                 | 6.8nH                 |
| C4                     | 3300pF                | 220pF                 | 100pF                 | 220pF                 |
| C5                     | 6.8pF                 | 1.5pF                 | 1.5pF                 | 1pF                   |
| C2, C3, C6, C9         | 470pF                 | 47pF                  | 47pF                  | 47pF                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1.  MAX2673 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX2673 Evaluation Kit

Figure 2.  MAX2673 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX2673 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX2673 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX2673 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products

© 1998 Maxim Integrated Products