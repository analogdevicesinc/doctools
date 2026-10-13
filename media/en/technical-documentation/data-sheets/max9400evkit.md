<!-- lastmod 2022-08-02 -->
## General Description

The MAX9400 evaluation kit (EV kit) contains the MAX9400 low-skew quad buffer. The MAX9400 EV kit runs at PECL/ECL and LVPECL/LVECL supplies at clock rates up to 3.0GHz. The EV kit can be operated synchronously with an external clock or asynchronously.

The EV kit is designed with 50 Ω controlled-impedance traces in a four-layer PC board. It can also be used to evaluate the MAX9401-MAX9405.

## Component List

| DESIGNATION                                            |   QTY | DESCRIPTION                                                                                              |
|--------------------------------------------------------|-------|----------------------------------------------------------------------------------------------------------|
| C1, C2                                                 |     2 | 10µF ± 10%, 10V tantalum capacitors (case B) AVX TAJB106K010R Kemet T494B106010AS                        |
| C3-C11                                                 |     9 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Murata GRM39X7R104K016A or Taiyo Yuden EMK107BJ104KA |
| C12-C20                                                |     9 | 0.01µF ± 10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103KW or Murata GRM36X7R103K016AD    |
| IN0-IN3, IN0 - IN3 , OUT0-OUT3, OUT0 - OUT3 , CLK, CLK |    18 | SMA edge-mount connectors Johnson Components 142-0701-801                                                |
| JU1-JU4                                                |     4 | 3-pin jumpers                                                                                            |
| R1, R2                                                 |     0 | Not installed resistor (0402)                                                                            |
| R3-R8                                                  |     6 | 49.9 Ω ± 1% resistors (0402)                                                                             |
| R9-R36                                                 |    28 | 100 Ω ± 1%, 1/8W resistors (1206)                                                                        |
| U1                                                     |     1 | MAX9400EHJ (32-pin 5mm x 5mm TQFP)                                                                       |
| SEL, SEL , EN, EN                                      |     0 | Not installed, SMA edge-mount connectors                                                                 |
| None                                                   |     4 | Shunts                                                                                                   |
| None                                                   |     1 | MAX9400 PC board                                                                                         |
| None                                                   |     1 | MAX9400 EV kit data sheet                                                                                |
| None                                                   |     1 | MAX9400 data sheet                                                                                       |

<!-- image -->

## Features

- ♦ Controlled 50 Ω Coplanar Traces
- ♦ Input Trace Lengths Matched to &lt;2mils
- ♦ Output Trace Lengths Matched to &lt;1mil
- ♦ Frequency Range

Up to 3.0GHz (MAX9400/MAX9402/MAX9403/ MAX9405)

Up to 2.0GHz (MAX9401/MAX9405)

- ♦ PECL/ECL or LVPECL/LVECL Supply
- ♦ 32-Pin TQFP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX9400EVKIT | 0 ° C to +70 ° C | 32 TQFP      |

Note: To evaluate the MAX9401-MAX9405, request a MAX9401EHJ/MAX9402EHJ/MAX9403EHJ/MAX9404EHJ/ MAX9405EHJ free sample with the MAX9400EVKIT.

## Quick Start

The MAX9400 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- One 3GHz (min) differential signal generator (e.g., Agilent 8133A)
- One 12GHz (min) bandwidth oscilloscope with internal 50 Ω input termination (e.g., Tektronix 11801C digital sampling oscilloscope with SD-24 sampling head)
- Two power supplies:
- a) One 2.0V with 500mA current capability
- b) One adjustable -3.5V to -0.375V with 500mA current capability
- Matched male-SMA-to-male-SMA 50 Ω coax cables:
- a) Matched SMA 50 Ω coax cables for inputs IN1 and IN1
- b) Matched SMA 50 Ω coax cables for outputs OUT1 and OUT1

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9400 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Taiyo Yuden | 800-348-2496 | 847-945-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX9400-MAX9405 when contacting these component suppliers.

## Asynchronous Operation

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 (SEL) and JU3 (EN) and pins 2 and 3 of jumpers JU2 ( SEL ) and JU4 ( EN ).
- 2) Connect two matched coax cables to the oscilloscope. Then connect the other end of the cables to OUT1 and OUT1 on the MAX9400 EV kit board.
- 3) Connect the 2.0V power supply to the VCC pad. Set the supply to 2.00V. Connect the supply ground to the GND pad closest to VCC.
- 4) Connect the -0.375V to -3.5V power supply to the VEE pad. Set the supply to -1.3V. Connect the supply ground to the GND closest to VEE.
- 5) Connect two matched coax cables to the differential signal generator that provides differential square waves with the following setting:
- a) Frequency = 2GHz
- b) VIH = 1.5V
- c) VIL = 1.0V
- d) Duty cycle = 50%
- 6) Connect the other end of the cables to IN1 and IN1 .
- 7) Turn on the two power supplies, enable the function generator, and verify the differential output signal (VOUT1 - V OUT1 ) is greater than 500mV.

To evaluate other channels, make sure the corresponding output termination resistors on the EV kit board are removed and the unused outputs are terminated.

To eliminate signal distortion, use the matched samelength input cables, and use the matched same-length output cables.

## Detailed Description

The MAX9400 EV kit contains an extremely fast, lowskew quad LVECL/LVPECL or ECL/PECL buffer. The EV kit demonstrates ultra-low propagation delay and channel-to-channel skew. The four channels can be operated synchronously with an external clock, or in asynchronous mode, depending on the state of the SEL input.

## Power Supply

The MAX9400/MAX9402/MAX9403/MAX9405 are specified  with  outputs  terminated  with  50 Ω to  VCC -  2V.  In order to terminate the outputs with 50 Ω to  VCC -  2V using the 50 Ω oscilloscope input termination, VCC is set to 2.0V. The MAX9401/MAX9404 are specified with outputs terminated with 50 Ω to VCC - 3.3V, and with double swing outputs. In order to terminate the outputs with 50 Ω to VCC - 3.3V, VCC is set to 3.3V. Table 1 lists the supply ranges for VCC and VEE. In an actual application, VCC and VEE can have different supplies (refer to the MAX9400/MAX9402/MAX9403/MAX9405 data sheet or the MAX9401/MAX9404 data sheet).

## Enable and Select

EN, EN ,  SEL,  and SEL can be controlled by either jumpers or external signals. The MAX9400 EV kit can provide internal DC logic signals to EN, EN ,  SEL,  and SEL by using jumpers JU1, JU2, JU3, and JU4. Table 2 lists jumper JU3 and jumper JU4 functions. Table 3 lists jumper JU1 and jumper JU2 functions. The EV kit can also be controlled by external signals using EN, EN , SEL, and SEL connectors. Before connecting external signals to the EN, EN ,  SEL, SEL connectors, verify there are no shunts across jumpers JU1-JU4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. VCC and VEE Range

| DEVICE   |   V CC (V) | V EE RANGE (V)   |
|----------|------------|------------------|
| MAX9400  |        2.0 | -3.5 to -0.375   |
| MAX9401  |        3.3 | -2.2 to +0.3     |
| MAX9402  |        2.0 | -3.5 to -0.375   |
| MAX9403  |        2.0 | -3.5 to -0.375   |
| MAX9404  |        3.3 | -2.2 to +0.3     |
| MAX9405  |        2.0 | -3.5 to -0.375   |

Table 2. Jumper JU3 and JU4 Functions

| JU3 LOCATION                                   | EN PIN                                         | JU4 LOCATION                                   | EN PIN                                         | OUTPUT       |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|--------------|
| 1 and 2                                        | C onnected to V C C                            | 2 and 3                                        | C onnected to GN D                             | E nab l ed   |
| 2 and 3                                        | C onnected to GN D                             | 1 and 2                                        | C onnected to V C C                            | D i sab l ed |
| All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | U ndefi ned  |

Table 3. Jumpers JU1 and JU2 Functions

| JU1 LOCATION   | SEL PIN                                        | JU2 LOCATION                                   | SEL PIN                                        | O PER A T I N G M O D E   |
|----------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|---------------------------|
| 1 and 2        | Connected to V CC                              | 2 and 3                                        | Connected to GN D                              | Asynchr onous m od e      |
| 2 and 3        | Connected to GN D                              | 1 and 2                                        | Connected to V CC                              | Synchronous mode          |
|                | All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | Undefined                 |

<!-- image -->

## MAX9400 Evaluation Kit

## Evaluating the MAX9401-MAX9405

The MAX9400 EV kit is a four-layer PC board with 50 Ω controlled-impedance input traces with 50 Ω termination (two parallel 100 Ω resistors).  All  output  signal  traces are also 50 Ω controlled-impedance traces (with 49.9 Ω termination resistors).

The MAX9400 EV kit can be used to evaluate the MAX9401-MAX9405 after modification. Table 4 lists onchip input and output termination to the corresponding Maxim IC:

- To evaluate the MAX9401, replace the MAX9400EHJ with a MAX9401EHJ.
- To evaluate the MAX9402, replace the MAX9400EHJ with a MAX9402EHJ and remove output termination resistors R1 to R8. The output is half-amplitude compared to an open output because of the voltage-divider formed by the on-chip series 50 Ω and the 50 Ω oscilloscope input.
- To evaluate the MAX9403/MAX9404, replace the MAX9400EHJ with a MAX9403EHJ/MAX9404EHJ and remove input termination resistors R9 to R36.
- To evaluate the MAX9405, replace the MAX9400EHJ with  a  MAX9405EHJ and remove input and output termination resistors R1 to R36. The output is halfamplitude compared to an open output because of the voltage-divider formed by the on-chip series 50 Ω and the 50 Ω oscilloscope input.

## Table 4. On-Chip Input and Output Termination

| NAME    | INPUT TERMINATION RESISTOR   | OUTPUT TERMINATION RESISTOR   |
|---------|------------------------------|-------------------------------|
| MAX9400 | Open                         | Open                          |
| MAX9401 | Open                         | Open                          |
| MAX9402 | Open                         | 50 Ω                          |
| MAX9403 | 100 Ω                        | Open                          |
| MAX9404 | 100 Ω                        | Open                          |
| MAX9405 | 100 Ω                        | 50 Ω                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9400 Evaluation Kit

Figure 1. MAX9400 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9400 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX9400 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX9400 Evaluation Kit

Figure 3. MAX9400 EV Kit Component Place Guide-Solder Side

<!-- image -->

Figure 5. MAX9400 EV Kit PC Board Layout-Inner Layer 2 (GND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9400 Evaluation Kit

Figure 6. MAX9400 EV Kit PC Board Layout-Inner Layer 3 (VCC Layer)

<!-- image -->

Figure 7. MAX9400 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->