<!-- lastmod 2022-08-02 -->
## General Description

The MAX9311 evaluation kit (EV kit) includes the MAX9311 low-skew, 1-to-10 differential driver designed for  clock  distribution.  The  MAX9311 EV kit supports LVECL/LVPECL testing up to 3GHz. The kit allows selection of two sources and reproduces the selected signal at 10 identical differential outputs. Inputs can be differential or single ended. Single-ended input operation is achieved by using the on-chip reference, VBB.

The MAX9311 EV kit can also be used to evaluate the MAX9312, MAX9313, and MAX9314.

## Component List

| DESIGNATION                   |   QTY | DESCRIPTION                                                                     |
|-------------------------------|-------|---------------------------------------------------------------------------------|
| C1, C7                        |     2 | 10µF, 10V tantalum capacitors (B case) AVX TAJB106K010R Sprague 293D106X9016B2T |
| C2, C6, C9, C11, C12, C14     |     6 | 0.1µF ceramic capacitors (0603)                                                 |
| C3, C4, C5, C8, C10, C13, C15 |     7 | 0.01µF ceramic capacitors (0603)                                                |
| R1-R9, R30-R34                |    14 | 100 Ω ± 1% 1/8W resistors (1206)                                                |
| R10-R29                       |    20 | 49.9 Ω ± 1% 1/16W resistors (0603)                                              |
| J1-J26                        |    26 | SMA connectors (PC edge mount) EFJohnson 142-0701-801                           |
| U1                            |     1 | MAX9311 (32 LQFP) (no exposed paddle)                                           |

## Component Suppliers

| SUPPLIER        | PHONE        | FAX          | WEBSITE         |
|-----------------|--------------|--------------|-----------------|
| AVX             | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| Sprague- Vishay | 402-563-6866 | 402-563-6296 | www.vishay.com  |

Note: When contacting suppliers, please indicate that you are using the MAX9311-MAX9314.

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Controlled 50 Ω Impedance: Microstrip
- ♦ Input/Output Line Lengths Matched to &lt; 1.5ps
- ♦ LVPECL/LVECL and Differential HSTL Supply Range

VCC - VEE = 2.25V - 3.8V

- ♦ Footprint Compatible with MC100LVEP111 (MAX9311)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX9311EVKIT | 0°C to +70°C  | 32 LQFP      |

## Quick Start

The MAX9311 is specified with outputs terminated with 50 Ω to VCC - 2V. This EV kit sets VCC = +2V and uses the 50 Ω -to-ground inputs of an oscilloscope to both measure and terminate the MAX9311 outputs. With VCC = +2V and VEE varied from -0.25V to -1.8V, the device sees a supply of 2.25V to 3.8V with the output termination voltage equaling zero (VCC - 2V).

For 3.3V operation, for example, set VCC = +2V and VEE = -1.3V. Use 50 Ω coax cables to connect the MAX9311 outputs to a scope with inputs set for 50 Ω . The scope inputs provide a 50 Ω termination to zero. Input signals are referred to the shifted VCC and VEE supplies. The coax cables and 50 Ω scope input provide a high bandwidth connection without the use of probes.

The MAX9311 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are complete .

## MAX9311 Evaluation Kit

## Minimum Required Equipment

- Five matched SMA-male-to-SMA-male 50 Ω coax cables for inputs: CLKSEL, CLK0, CLK0 , CLK1, and CLK1
- Two matched SMA-male-to-SMA-male 50 Ω coax cables for outputs: Q0 and Q0
- Two differential adjustable clock sources like the Agilent 8133A 3GHz pulse generator
- One single-ended adjustable clock select (CLKSEL) source
- One 10GHz bandwidth oscilloscope with 50 Ω input impedance like the Tektronix 11801C digital sampling oscilloscope with the SD-24 sampling head
- ·

Two power supplies Power supply 1: +2V with 1A current capability Power supply 2: adjustable -0.25V to -1.8V with 1A current capability

## Procedure

- 1) Connect two of the five matched input cables to the first differential clock source. Then connect the other end of the cables to CLK0 and CLK0 on the MAX9311 EV kit board.
- 2) Connect two of the five matched input cables to the second differential clock source. Then connect the other end of the cables to CLK1 and CLK1 on the MAX9311 EV kit board.
- 3) Connect one of the five matched input cables to the single-ended clock select source. Then connect the other end of the cable to CLKSEL on the MAX9311 EV kit board.
- 4) Unsolder and remove the termination resistors located on the Q0 and Q0 outputs (R28 and R29). Make sure the input impedance of the oscilloscope is 50 Ω .
- 5) Connect the two matched output cables to the oscilloscope. Then connect the other end of the cables to Q0 and Q0 on the MAX9311 EV kit board.
- 6) Connect a +2VDC power supply to the pads labeled VCC on the MAX9311 EV kit board. This ensures that the outputs are loaded with 50 Ω to VCC - 2V.
- 7) Connect a -1.3VDC power supply to the pads labeled VEE on the MAX9311 EV kit board.
- 8) Configure the adjustable clock sources to the desired input levels defined in the MAX9311/ MAX9313 IC data sheet. Note that VCC = +2V.
- 9) Enable all clock sources.
- 10) Verify the timing of the waveforms using the oscilloscope.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

## Clock and Clock Select Inputs

All  clock  inputs  are  located  on  the  left  edge  of  the MAX9311 EV kit board. The board provides SMA connectors and 50 Ω termination for all clock inputs. The MAX9311 features an on-chip reference voltage, VBB, allowing single-ended operation. Connect VBB to one of the differential inputs for single-ended operation. Single-ended operation is limited to 3V ≤ (VCC - VEE) ≤ 3.8V. Differential operation can be used throughout the full supply range: 2.25V ≤ (VCC - VEE) ≤ 3.8V.

The clock select input accepts a single-ended input referenced to VCC. The clock select input has its own SMA connector and 50 Ω termination on the board.

## Outputs

The 10 differential outputs are in numeric order and are located on the top, right, and bottom edges of the MAX9311 EV kit board. All outputs are terminated with 50 Ω on the board. Note :  When analyzing an output, remove the corresponding output termination resistor on the MAX9311 EV kit board. (The output is connected to test equipment that has a 50 Ω input impedance.)

<!-- image -->

## MAX9311 Evaluation Kit

<!-- image -->

Figure 1. MAX9311 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9311 Evaluation Kit

<!-- image -->

Figure 2. MAX9311 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9311 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX9311 EV Kit PC Board Layout-Inner Layer 2 (GND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5. MAX9311 EV Kit PC Board Layout-Inner Layer 3 (VCC)

<!-- image -->

## MAX9311 Evaluation Kit

Figure 6. MAX9311 EV Kit PC Board Layout-Solder Side (VEE/GND)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.