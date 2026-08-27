<!-- lastmod 2022-08-02 -->
## General Description

The MAX9360 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit (PC) board. The EV kit includes two MAX9360s with different packages. The MAX9360 is a low-skew, single LVTTL/ CMOS-to-differential LVECL/ECL translator. The EV kit accepts an LVTTL/TTL/CMOS input signal and converts it  to  a  differential  LVECL/ECL signal at frequencies up to 1GHz.

The MAX9360 EV kit is a four-layer PC board with 50 Ω controlled-impedance traces. It can also be used to evaluate the MAX9361, a TTL/CMOS-to-differential LVECL/ECL translator.

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                                      |
|-------------------------|-------|--------------------------------------------------------------------------------------------------|
| C1-C6                   |     6 | 10µF ± 10%, 10V tantalum capacitors (case B) AVX TAJB106K010R Kemet T494B106K010A                |
| C7-C12                  |     6 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA Murata GRM39X7R104K016A |
| C13-C18                 |     6 | 0.01µF ± 20%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103KMV                       |
| D1, Q1, Q1 , D2, Q2, Q2 |     6 | SMA edge-mount connectors                                                                        |
| U1                      |     1 | MAX9360ESA (8-pin SO)                                                                            |
| U2                      |     1 | MAX9360UKA (8-pin SOT23) (top mark AAJI)                                                         |
| None                    |     1 | MAX9360 PC board                                                                                 |
| None                    |     1 | MAX9360 EV kit data sheet                                                                        |
| None                    |     1 | MAX9360/MAX9361 data sheet                                                                       |

<!-- image -->

## Features

- ♦ Controlled 50 Ω Coplanar Impedance Traces
- ♦ Output Line Lengths Matched to &lt;1mil (24.5 ✕ 10 -3 mm)
- ♦ Up to 1GHz Board Frequency Range
- ♦ Evaluates Both 8-Pin SO and 8-Pin SOT23 Packages
- ♦ Fully Assembled and Tested
- ♦ Surface-Mount Construction

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE    |
|--------------|--------------|---------------|
| MAX9360EVKIT | 0°C to +70°C | 8 SO, 8 SOT23 |

Note: To evaluate the MAX9361ESA/MAX9361EKA (top mark AAJJ), request a MAX9361ESA/MAX9361EKA free sample with the MAX9360EVKIT.

## Quick Start

The MAX9360 EV kit is a fully assembled and tested surface-mount board. The EV kit contains two independent LVTTL/CMOS-to-LVECL translators with different packages: an 8-pin SO package (upper circuit) and an 8-pin SOT23 package (lower circuit).

## Recommended Equipment

- Three power supplies
- a) One 2.0V with 70mA current capability
- b) One adjustable 5.0V to 7.5V with 20mA current capability
- c) One adjustable -3.5V to -0.375V with 30mA current capability
- Signal generator (e.g., Agilent 8133A 3GHz pulse generator)
- One 10GHz bandwidth oscilloscope with internal 50 Ω termination (e.g., Tektronix11801C Digital Sampling with the SD-24 sampling head)

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX9360/MAX9361 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9360 Evaluation Kit

- Two matched SMA-to-SMA 50 Ω coax cables for outputs: Q1 and Q1 (or Q2 and Q2 )
- One SMA-to-SMA 50 Ω coax cable for input (should be less than 6in long): D1/D2
- One SMA-to-SMA 50 Ω coax cable for triggering connection

## Evaluating the MAX9360 on Either Upper or Lower Circuit

## Do not turn on the power supplies until all connections are completed:

- 1) Connect two matched output coax cables to the oscilloscope. Then connect the other end of the cables to Q1 and Q1 /(Q2 and Q2 ).
- 2) Connect the input coax cable to D1/D2. Connect the other end to one of the positive outputs from the signal generator with the following setting:
- a)  Frequency = 1GHz
- b)  VIH = 2.0V, VIL = 1.4V
- c)  Duty cycle = 50%
- 3) Connect one coax cable to the trigger output of the signal generator. Connect the other end to trigger the input of the oscilloscope.
- 4) Connect a 2.000V power supply to the VGG1/VGG2 pad. Connect the supply ground to the GND pad closest to VGG1/VGG2.
- 5) Connect a +5.3V power supply to the VCC1/VCC2 pad. Connect the supply ground to the GND pad closest to VCC1/VCC2.
- 6) Connect a -1.3V power supply to the VEE1/VEE2 pad. Connect the supply ground to the GND pad closest to VEE1/VEE2.
- 7) Turn on the power supply, enable the pulse generator, and verify the single-ended output:
- a)  Frequency = 1GHz
- b)  VOH: 0.855V to 1.115V
- c)  VOL: 0.065V to 0.375V
- d)  VOD ≥ 550mV

## Table 1. MAX9360 EV Kit VCC and VEE Supply Ranges

| PART    | LOGIC TYPE   | V CC RANGE (V)   | V EE RANGE (V)   |
|---------|--------------|------------------|------------------|
| MAX9360 | LVTTL/CMOS   | 5.0 to 5.6       | -3.5V to -0.375  |
| MAX9361 | TTL/CMOS     | 6.5 to 7.5       | -3.5V to -0.375  |

Note:

VCC and VEE are shifted by 2V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note: VGG1/VGG2 is an additional power supply to shift  up the system voltage by 2V. In the real application, VGG1/VGG2 can be eliminated. Since the EV kit is shifted up 2V, VOH and VOL ranges are also shifted accordingly.

## Detailed Description

The MAX9360 EV kit contains two low-skew, high-speed single LVTTL/CMOS-to-differential LVECL translators with different packages. Each circuit has independent power supplies preventing noise injection from one to the other. In order to terminate outputs with 50 Ω to -2V using the 50 Ω oscilloscope termination, an extra power supply (VGG1/VGG2) is added to shift the system by 2V. The LVTTL/TTL/CMOS logic inputs are referred to 2V.

## Input Signal

The MAX9360 EV kit can accept a maximum 1GHz LVTTL/TTL/CMOS signal. Since the circuit is shifted by 2.0V, the new input high level is 4V, and the input low level is  2.8V. Input termination resistors could be added for optimum performance. Note that there is no provision on the EV kit for input termination. Set the signal generator output levels to half the magnitudes given above for use without input termination.

## Supply Range

Table 1 shows the VCC and VEE ranges for the corresponding logic type.

## Evaluating the MAX9361

To evaluate the MAX9361, replace the MAX9360ESA/ MAX9360UKA (top mark AAJI) with the MAX9361ESA/ MAX9361EKA (top mark AAJJ), and adjust the VCC supply (refer to the MAX9360/MAX9361 data sheet).

<!-- image -->

## MAX9360 Evaluation Kit

<!-- image -->

Figure 1. MAX9360 EV Kit Schematic (MAX9360ESA Circuit)

<!-- image -->

Figure 2. MAX9360 EV Kit Schematic (MAX9360UKA Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9360 Evaluation Kit

Figure 3. MAX9360 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9360 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX9360 EV Kit PC Board Layout-Inner Layer 2 (Ground Layer)

<!-- image -->

## MAX9360 Evaluation Kit

Figure 6. MAX9360 EV Kit PC Board Layout-Inner Layer 3 (VCC Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9360 Evaluation Kit

Figure 7. MAX9360 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600