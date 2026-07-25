<!-- lastmod 2022-08-05 -->
Mobile Communications

Notebooks and PDAs

Automotive Applications

Battery-Powered Electronics

General-Purpose Portable Devices

General-Purpose Low-Voltage Applications

<!-- image -->

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## General Description

The LMX331/LMX393/LMX339 single/dual/quad comparators are drop-in, pin-for-pin-compatible replacements for the LMV331/LMV393/LMV339. The LMX331H/ LMX393H/LMX339H offer the performance of the LMX331/LMX393/LMX339 with the added benefit of internal hysteresis to provide noise immunity, preventing output oscillations even with slow-moving input signals.

Advantages of the LMX331/LMX393/LMX339 series include low supply voltage, small package, and low cost. The LMX331 is available in both 5-pin SC70 and SOT23 packages, LMX393 is available in both 8-pin µMAX ® and smaller SOT23 packages, and the LMX339 is available in 14-pin TSSOP and SO packages. They are manufactured using advanced submicron CMOS technology. Designed with the most modern techniques, the LMX331/LMX393/LMX339 achieve superior performance over BiCMOS or bipolar versions on the market.

The LMX331/LMX393/LMX339 offer performance advantages such as wider supply voltage range, wider operating temperature range, better CMRR and PSRR, improved response time characteristics, reduced offset,  reduced output saturation voltage, reduced input bias current, and improved RF immunity.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Applications

Features

- ♦ Guaranteed 1.8V to 5.5V Performance
- ♦ -40°C to +125°C Automotive Temperature Range
- ♦ Low Supply Current (60µA/Comparator at VDD = 5.0V)
- ♦ Input Common-Mode Voltage Range Includes Ground
- ♦ No Phase Reversal for Overdriven Inputs
- ♦ Low Output Saturation Voltage (100mV)
- ♦ Internal 2mV Hysteresis (LMX331H/LMX393H/LMX339H)
- ♦ 5-Pin SC70 Space-Saving Package (2.0mm ✕ 2.1mm ✕ 1.0mm) (LMX331/LMX331H)

## Ordering Information

| PART          | TEMP RANGE          | PIN- PACKAGE   | TOP MARK   |
|---------------|---------------------|----------------|------------|
| LMX331 AXK+T  | -40 ° C to +125 ° C | 5 SC70         | ACD        |
| LMX331AUK+T   | -40 ° C to +125 ° C | 5 SOT23        | ADQR       |
| LMX331H AXK+T | -40 ° C to +125 ° C | 5 SC70         | ACE        |
| LMX331HAUK+T  | -40 ° C to +125 ° C | 5 SOT23        | ADQS       |
| LMX393 AKA+T  | -40 ° C to +125 ° C | 8 SOT23        | AAIF       |
| LMX393AUA+T   | -40 ° C to +125 ° C | 8 µMAX         | -          |
| LMX393H AKA+T | -40 ° C to +125 ° C | 8 SOT23        | AAIG       |
| LMX393HAUA+T  | -40 ° C to +125 ° C | 8 µMAX         | -          |
| LMX339 AUD+T  | -40 ° C to +125 ° C | 14 TSSOP       | -          |
| LMX339ASD+T   | -40 ° C to +125 ° C | 14 SO          | -          |
| LMX339H AUD+T | -40 ° C to +125 ° C | 14 TSSOP       | -          |
| LMX339HASD+T  | -40 ° C to +125 ° C | 14 SO          | -          |

T = Tape and reel.

## Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## ABSOLUTE MAXIMUM RATINGS

| Supply Voltage (VDD to VSS)...................................-0.3V to +6V       |
|----------------------------------------------------------------------------------|
| All Other Pins .................................. (V SS - 0.3V) to (V DD + 0.3V) |
| Continuous Power Dissipation (TA = +70°C)                                        |
| 5-Pin SC70 (derate 3.1mW/°C above +70°C)..............247mW                      |
| 5-Pin SOT23 (derate 7.1mW/°C above +70°C)............571mW                       |
| 8-Pin SOT23 (derate 8.9mW/°C above +70°C)............714mW                       |
| 8-Pin µMAX (derate 10.3mW/°C above +70°C)...........825mW                        |

| 14-Pin TSSOP (derate 9.1mW/°C above +70°C) .........727mW                        |
|----------------------------------------------------------------------------------|
| 14-Pin SO (derate 8.3mW/°C above +70°C).............666.7mW                      |
| Operating Temperature Range .........................-40°C to +125°C             |
| Junction Temperature......................................................+150°C |
| Storage Temperature Range.............................-65°C to +150°C            |
| Lead Temperature (soldering, 10s) .................................+300°C        |
| Soldering Temperature (reflow) .......................................+260°C     |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC ELECTRICAL CHARACTERISTICS-2.7V OPERATION

(VDD = 2.7V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits apply at the defined temperature extremes.) (Note 1)

| PARAMETER                                      | SYMBOL   | CONDITIONS                            |   MIN | TYP   | MAX   | UNITS   |
|------------------------------------------------|----------|---------------------------------------|-------|-------|-------|---------|
| Input Offset Voltage                           | V OS     |                                       |       | 0.2   | 7     | mV      |
| Input Voltage Hysteresis                       | V HYST   | LMX331H/LMX393H/LMX339H only          |       | 2     |       | mV      |
| Input Offset Voltage Average Temperature Drift | TCV OS   |                                       |       | 5     |       | µV/°C   |
| Input Bias Current                             | I B      | T A = +25°C                           |       | ±0.05 | ±250  | nA      |
| Input Bias Current                             | I B      | T A = -40°C to +85°C                  |       |       | ±400  | nA      |
| Input Bias Current                             | I B      | T A = -40°C to +125°C                 |       |       | ±400  | nA      |
| Input Offset Current                           | I OS     | T A = +25°C                           |       | ±0.05 | ±50   | nA      |
| Input Offset Current                           | I OS     | T A = -40°C to +85°C                  |       |       | ±150  | nA      |
| Input Offset Current                           | I OS     | T A = -40°C to +125°C                 |       |       | ±150  | nA      |
| Input Voltage Range                            | V CM     |                                       |       | -0.1  |       | V       |
| Input Voltage Range                            | V CM     |                                       |       | 2.0   |       | V       |
| Voltage Gain                                   | A V      | LMX331/LMX393/LMX339 only             |       | 50    |       | V/mV    |
| Output Saturation Voltage                      | V SAT    | I SINK ≤ 1mA                          |       | 50    |       | mV      |
| Output Sink Current                            | I O      | V O ≤ 1.5V                            |     5 | 37    |       | mA      |
|                                                | I S      | LMX331/LMX331H                        |       | 50    | 100   | µA      |
| Supply Current (Note 2)                        |          | LMX393/LMX393H (both comparators)     |       | 70    | 140   |         |
| Supply Current (Note 2)                        |          | LMX339/LMX339H (all four comparators) |       | 140   | 200   |         |
| Output Leakage Current                         |          | T A = +25°C                           |       | 0.003 |       | µA      |
| Output Leakage Current                         |          | T A = -40°C to +85°C                  |       |       | 1     | µA      |
| Output Leakage Current                         |          | T A = -40°C to +125°C                 |       |       | 2     | µA      |

## AC ELECTRICAL CHARACTERISTICS-2.7V OPERATION

(VDD = 2.7V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits apply at the defined temperature extremes.) (Note 1)

| PARAMETER          | SYMBOL   | CONDITIONS                       |   MIN TYP | MAX   | UNITS   |
|--------------------|----------|----------------------------------|-----------|-------|---------|
| Propagation Delay  | t PHL    | Input overdrive = 10mV (Note 3)  |       500 |       | ns      |
| Output High to Low | t PHL    | Input overdrive = 100mV (Note 3) |       100 |       | ns      |
| Propagation Delay  | t PLH    | Input overdrive = 10mV (Note 3)  |       500 |       | ns      |
| Output Low to High | t PLH    | Input overdrive = 100mV (Note 3) |       100 |       | ns      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## DC ELECTRICAL CHARACTERISTICS-5.0V OPERATION

(VDD = 5V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits  apply  at  the defined temperature extremes.) (Note 1)

| PARAMETER                                      | SYMBOL   | CONDITIONS                              |                              |   MIN | TYP   | MAX   | UNITS   |
|------------------------------------------------|----------|-----------------------------------------|------------------------------|-------|-------|-------|---------|
|                                                | V        | T A = +25°C                             | T A = +25°C                  |       | 0.25  | 7     | mV      |
| Input Offset Voltage                           | OS       | T A = -40°C to +85°C                    | T A = -40°C to +85°C         |       |       | 9     | mV      |
| Input Offset Voltage                           | OS       | T A = -40°C to +125°C                   | T A = -40°C to +125°C        |       |       | 9     | mV      |
| Input Voltage Hysteresis                       |          | LMX331H/LMX393H/LMX339H only            | LMX331H/LMX393H/LMX339H only |       | 2     |       | mV      |
| Input Offset Voltage Average Temperature Drift | TCV OS   |                                         |                              |       | 5     |       | µV/°C   |
| Input Bias Current                             | I B      | T A = +25°C                             | T A = +25°C                  |       | ±0.05 | ±250  | nA      |
| Input Bias Current                             | I B      | T A = -40°C to +85°C                    | T A = -40°C to +85°C         |       |       | ±400  | nA      |
| Input Bias Current                             | I B      | T A = -40°C to +125°C                   | T A = -40°C to +125°C        |       |       | ±400  | nA      |
| Input Offset Current                           | I OS     | T A = +25°C                             | T A = +25°C                  |       | ±0.05 | ±50   | nA      |
| Input Offset Current                           | I OS     | T A = -40°C to +85°C                    | T A = -40°C to +85°C         |       |       | ±150  | nA      |
| Input Offset Current                           | I OS     | T A = -40°C to +125°C                   | T A = -40°C to +125°C        |       |       | ±150  | nA      |
| Input Voltage Range                            | V CM     |                                         |                              |       | -0.1  |       | V       |
| Input Voltage Range                            | V CM     |                                         |                              |       | 4.2   |       | V       |
| Voltage Gain                                   | A V      | LMX331/LMX393/LMX339 only               | LMX331/LMX393/LMX339 only    |    20 | 50    |       | V/mV    |
| Output Saturation Voltage                      | V SAT    | T T A = 4mA                             | A = +25°C                    |       | 70    | 400   | mV      |
| Output Saturation Voltage                      | V SAT    | T T A = 4mA                             | -40°C to +85°C               |       |       | 700   | mV      |
| Output Saturation Voltage                      | V SAT    | T T A = 4mA                             | T A = -40°C to +125°C        |       |       | 700   | mV      |
| Output Sink Current                            | I O      | V O ≤ 1.5V                              | V O ≤ 1.5V                   |    10 | 73    |       | mA      |
| Supply Current (Note 2)                        | I S      | A T A = LMX331/LMX331H                  | T = +25°C                    |       | 60    | 120   | µA      |
| Supply Current (Note 2)                        | I S      | A T A = LMX331/LMX331H                  | -40°C to +85°C               |       |       | 150   | µA      |
| Supply Current (Note 2)                        | I S      | A T A = LMX331/LMX331H                  | T A = -40°C to +125°C        |       |       | 170   | µA      |
| Supply Current (Note 2)                        | I S      | T A = LMX393/LMX393H                    | +25°C                        |       | 100   | 200   | µA      |
| Supply Current (Note 2)                        | I S      | T A = LMX393/LMX393H                    | T A = -40°C to +85°C         |       |       | 250   | µA      |
| Supply Current (Note 2)                        | I S      | comparators) T =                        | A -40°C to +125°C            |       |       | 300   | µA      |
| Supply Current (Note 2)                        | I S      | T A = T A = LMX339/LMX339H comparators) | +25°C                        |       | 170   | 300   | µA      |
| Supply Current (Note 2)                        | I S      | T A = T A = LMX339/LMX339H comparators) | -40°C to +85°C               |       |       | 350   | µA      |
| Supply Current (Note 2)                        | I S      | T A = T A = LMX339/LMX339H comparators) | T A = -40°C to +125°C        |       |       | 430   | µA      |
| Output Leakage Current                         |          | T A = +25°C                             | T A = +25°C                  | 0.003 | 0.003 | 0.003 | µA      |
| Output Leakage Current                         |          | T A = -40°C to +85°C                    | T A = -40°C to +85°C         |       |       | 1     | µA      |
| Output Leakage Current                         |          | T A = -40°C to +125°C                   | T A = -40°C to +125°C        |       |       | 2     | µA      |

## AC ELECTRICAL CHARACTERISTICS-5.0V OPERATION

(VDD = 5V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits  apply  at  the defined temperature extremes.) (Note 1)

| PARAMETER          | SYMBOL   | CONDITIONS                       |   MIN TYP | MAX   | UNITS   |
|--------------------|----------|----------------------------------|-----------|-------|---------|
| Propagation Delay  | t PHL    | Input overdrive = 10mV (Note 3)  |       400 |       | ns      |
| Output High to Low | t PHL    | Input overdrive = 100mV (Note 3) |        90 |       | ns      |
| Propagation Delay  | t PLH    | Input overdrive = 10mV (Note 3)  |       600 |       | ns      |
| Output Low to High | t PLH    | Input overdrive = 100mV (Note 3) |       200 |       | ns      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## DC ELECTRICAL CHARACTERISTICS-1.8V OPERATION

(VDD = 1.8V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits apply at the defined temperature extremes.) (Note 1)

| PARAMETER                                      | SYMBOL   | CONDITIONS                            |   MIN | TYP    |   MAX | UNITS   |
|------------------------------------------------|----------|---------------------------------------|-------|--------|-------|---------|
| Input Offset Voltage                           | V OS     |                                       |       | 0.2    |     5 | mV      |
| Input Voltage Hysteresis                       |          | LMX331H/LMX393H/LMX339H only          |       | 2      |       | mV      |
| Input Offset Voltage Average Temperature Drift | TCV OS   |                                       |       | 5      |       | µV/ ° C |
| Input Bias Current                             | I B      |                                       |       | 0.05   |       | nA      |
| Input Offset Current                           | I OS     |                                       |       | 0.05   |       | nA      |
| Input Voltage Range                            | V CM     |                                       |       | -0.1 1 |       | V       |
| Output Saturation Voltage                      | V SAT    | I SINK ≤ 1mA                          |       | 35     |       | mV      |
| Power-Supply Rejection Ratio                   | PSRR     | V DD = 1.8V to 5.5V                   |    60 | 70     |       | dB      |
| Output Sink Current                            | I O      | V O ≤ 1.5V                            |       | 15     |       | mA      |
| Supply Current (Note 2)                        | I S      | LMX331/LMX331H                        |       | 40     |   100 | µA      |
| Supply Current (Note 2)                        | I S      | LMX393/LMX393H (both comparators)     |       | 65     |   140 | µA      |
| Supply Current (Note 2)                        | I S      | LMX339/LMX339H (all four comparators) |       | 120    |   200 | µA      |
| Output Leakage Current                         |          |                                       |       | 0.003  |       | µA      |

## AC ELECTRICAL CHARACTERISTICS-1.8V OPERATION

(VDD = 1.8V, VSS = 0V, VCM = 0V, RL = 5.1k Ω connected to VDD. Typical values are at TA = +25 ° C. Boldface limits apply at the defined temperature extremes.) (Note 1)

| PARAMETER          | SYMBOL   | CONDITIONS                       |   MIN TYP | MAX   | UNITS   |
|--------------------|----------|----------------------------------|-----------|-------|---------|
| Propagation Delay  | t PHL    | Input overdrive = 10mV (Note 3)  |       500 |       | ns      |
| Output High to Low | t PHL    | Input overdrive = 100mV (Note 3) |       100 |       | ns      |
| Propagation Delay  | t PLH    | Input overdrive = 10mV (Note 3)  |       500 |       | ns      |
| Output Low to High | t PLH    | Input overdrive = 100mV (Note 3) |       100 |       | ns      |

Note 1: All devices are production tested at +25°C. All temperature limits are guaranteed by design.

Note 2: Supply current when output is high.

Note 3: Input overdrive is the overdrive voltage beyond the offset and hysteresis-determined trip points.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## Typical Operating Characteristics

(VDD = 5V, VSS = 0V, VCM = 0V, RL = 5.1k Ω , CL = 10pF, overdrive = 100mV, TA = +25°C, unless otherwise noted.)

<!-- image -->

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## Typical Operating Characteristics (continued)

(VDD = 5V, VSS = 0V, VCM = 0V, RL = 5.1k Ω , CL = 10pF, overdrive = 100mV, TA = +25°C, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## Pin Description

| PIN    | PIN    | PIN    | NAME   | FUNCTION                         |
|--------|--------|--------|--------|----------------------------------|
| LMX331 | LMX393 | LMX339 | NAME   | FUNCTION                         |
| 1      | -      | -      | IN+    | Noninverting Input               |
| 2      | 4      | 12     | V SS   | Negative Supply (Connect to GND) |
| 3      | -      | -      | IN-    | Inverting Input                  |
| 4      | -      | -      | OUT    | Comparator Output (Open-Drain)   |
| 5      | 8      | 3      | V DD   | Positive Supply                  |
| -      | 1      | 2      | OUTA   | Comparator A Output (Open-Drain) |
| -      | 7      | 1      | OUTB   | Comparator B Output (Open-Drain) |
| -      | 2      | 4      | INA-   | Comparator A Inverting Input     |
| -      | 3      | 5      | INA+   | Comparator A Noninverting Input  |
| -      | 5      | 7      | INB+   | Comparator B Noninverting Input  |
| -      | 6      | 6      | INB-   | Comparator B Inverting Input     |
| -      | -      | 8      | INC-   | Comparator C Inverting Input     |
| -      | -      | 9      | INC+   | Comparator C Noninverting Input  |
| -      | -      | 10     | IND-   | Comparator D Inverting Input     |
| -      | -      | 11     | IND+   | Comparator D Noninverting Input  |
| -      | -      | 13     | OUTD   | Comparator D Output (Open-Drain) |
| -      | -      | 14     | OUTC   | Comparator C Output (Open-Drain) |

## Detailed Description

The LMX331/LMX393/LMX339 are single/dual/quad, low-cost, general-purpose comparators. They have a single-supply operating voltage of 1.8V to 5V. The common-mode input range extends from -0.1V below the negative supply to within 0.7V of the positive supply. They require approximately 60µA per comparator with a 5V supply and 40µA with a 2.7V supply.

The LMX331H/LMX393H/LMX339H have 2mV of hysteresis for noise immunity. This significantly reduces the chance of output oscillations even with slow-moving input signals. The LMX331/LMX393/LMX339 and LMX331H/LMX393H/LMX339H are ideal for automotive applications because they operate from -40 ° C to +125 ° C (see Typical Operating Characteristics ).

## Applications Information

## Hysteresis

Many comparators oscillate in the linear region of operation because of noise or undesired parasitic feedback. This tends to occur when the voltage on one input is equal or very close to the voltage on the other input. The LMX331H/LMX393H/LMX339H have internal hysteresis to counter parasitic effects and noise.

The hysteresis in a comparator creates two trip points: one for the rising input voltage and one for the falling input voltage (Figure 1). The difference between the trip points is  the  hysteresis.  When the comparator's input voltages are equal, the hysteresis effectively causes one comparator input to move quickly past the other, thus taking the input out of the region where oscillation occurs. This provides clean output transitions for noisy, slow-moving input signals.

<!-- image -->

Additional hysteresis can be generated with two resistors, using positive feedback (Figure 2). Use the following procedure to calculate resistor values:

Figure 1. Threshold Hysteresis Band (Not to Scale)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

Figure 2. Adding Hysteresis with External Resistors

<!-- image -->

- 1) Find output voltage when output is high:

<!-- formula-not-decoded -->

- 2) Find the trip points of the comparator using these formulas:

<!-- formula-not-decoded -->

where VTH is the threshold voltage at which the comparator switches its output from high to low as VIN rises above the trip point, and VTL is the threshold voltage at which the comparator switches its output from low to high as VIN drops below the trip point.

- 3) The hysteresis band will be:

<!-- formula-not-decoded -->

In  this  example,  let  VDD = 5V, VREF = 2.5V, ILOAD = 50nA, RL = 5.1k Ω :

<!-- formula-not-decoded -->

Select R2. In this example, we will choose 1k Ω . Select VHYST. In this example, we will choose 50mV. Solve for R1:

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

where R1 ≈ 100k Ω , VTH = 2.525V, and VTL = 2.475V. Choose R1 and R2 to be large enough as not to exceed the amount of current the reference can supply.

The source current required is VREF / (R1 + R2).

The sink current is (VOUT(HIGH) - VREF) ✕ (R1 + R2). Choose RL to be large enough to avoid drawing excess current, yet small enough to supply the necessary current to drive the load. RL should be between 1k Ω and 10k Ω .

## Board Layout and Bypassing

Use 0.1µF bypass capacitors from VDD to VSS. To maximize performance, minimize stray inductance by putting this capacitor close to the VDD pin and reducing trace lengths. For slow-moving input signals (rise time &gt; 1ms), use a 1nF capacitor between IN+ and INto reduce high-frequency noise.

## Chip Information

LMX331/LMX331H TRANSISTOR COUNT: 112

LMX393/LMX393H TRANSISTOR COUNT: 211

LMX339/LMX339H TRANSISTOR COUNT: 411

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   | LAND PATTERN NO.   |
|----------------|----------------|----------------|--------------------|
| 5 SC70         | X5+1           | 21-0076        | 90-0188            |
| 5 SOT23        | U5+2           | 21-0057        | 90-0174            |
| 8 SOT23        | K8F+4          | 21-0078        | 90-0176            |
| 8 µMAX         | U8+1           | 21-0036        | 90-0092            |
| 14 TSSOP       | U16M+1         | 21-0066        | 90-0117            |
| 14 SOIC        | S8+4           | 21-0041        | 90-0041            |

## General-Purpose, Low-Voltage, Single/Dual/Quad, Tiny-Pack Comparators

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION           | PAGES CHANGED   |
|-------------------|-----------------|-----------------------|-----------------|
|                 3 | 8/10            | Added lead-free parts | 1               |
|                 4 | 5/11            | Added thermal data    | 2, 3, 4         |

9