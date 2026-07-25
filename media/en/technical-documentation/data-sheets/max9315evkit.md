<!-- lastmod 2022-08-02 -->
## General Description

The MAX9315 evaluation kit (EV kit) includes the MAX9315, a 1-to-5 low-skew differential clock driver with  two  differential  clock  inputs.  The  MAX9315  EV  kit accepts one or two LVECL/LVPECL or HSTL differential inputs and reproduces the selected input at five differential outputs. The EV kit operates up to 1.5GHz. Inputs can be single ended by connecting the on-chip VBB reference to one side of a differential input.

The MAX9315 EV kit can be modified to evaluate the MAX9316. The MAX9316 has one differential clock input and one single-ended input.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                |
|---------------|-------|------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ± 10%, 10V tantalum capacitors (Case B) AVX TAJB106K010R or Kemet T494B106K010AS                      |
| C3, C4, C5    |     3 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016AD  |
| C6-C9         |     4 | 0.01µF ± 10%, 16V X7R ceramic chip capacitors (0402) Taiyo Yuden EMK105BJ103KW or Murata GRM36X7R103K016AD |
| C10           |     0 | Not installed, capacitor (0402)                                                                            |
| JU1, JU2      |     2 | 3-pin jumpers                                                                                              |
| R1, R2        |     0 | Not installed, resistor (0402)                                                                             |
| R3-R10        |     8 | 49.9 Ω ± 1% resistors (0402)                                                                               |

<!-- image -->

Features

- ♦ Controlled 50 Ω Microstrip Traces
- ♦ Input Trace Lengths Matched to &lt;2mils
- ♦ Output Trace Lengths Matched to &lt;1mil
- ♦ Board Frequency: Up to 1.5GHz
- ♦ 2.375V (VCC - VEE) Supply Voltage
- ♦ 20-Pin TSSOP Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX9315EVKIT | 0 o C to +70 o C | 20 TSSOP     |

Note: To evaluate the MAX9316, request a MAX9316EUP free sample with the MAX9315EVKIT.

## Component List

| DESIGNATION                                                             |   QTY | DESCRIPTION                                                         |
|-------------------------------------------------------------------------|-------|---------------------------------------------------------------------|
| R11, R12                                                                |     0 | Not installed, resistor (1210)                                      |
| R13-R22                                                                 |    10 | 100 Ω ± 1% 1/4W resistors (1210) Digi-Key P100AACT-ND or equivalent |
| Q0, Q0, Q1, Q1 , Q2, Q2, Q3, Q3 , Q4, Q4 , CLK0, CLK0 , CLK1, CLK1, VBB |    15 | SMA edge-mount connectors Digi-Key J502-ND                          |
| CLKSEL                                                                  |     0 | Not installed, SMA edge-mount connector                             |
| U1                                                                      |     1 | MAX9315EUP (20-pin TSSOP)                                           |
| None                                                                    |     2 | Shunts                                                              |
| None                                                                    |     1 | MAX9315 PC board                                                    |
| None                                                                    |     1 | MAX9315 EV kit data sheet                                           |
| None                                                                    |     1 | MAX9315 data sheet                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX9315 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX9315/MAX9316 when contacting these component suppliers.

## Quick Start

The MAX9315 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- One 1.5GHz (min) differential signal generator (e.g., Agilent 8133A)
- One 8GHz (min) bandwidth oscilloscope with internal  50 Ω input termination (e.g., Tektronix 11801C digital  sampling  oscilloscope with SD-24 sampling head)
- Two power supplies a) One 2V ± 0.05V with 500mA current capability b)One adjustable -1.8V to -0.375V with 500mA
- current capability
- Matched male-SMA-to-male-SMA 50 Ω coax cables Ω coax cables for input
- a) Matched SMA 50 CLK0 and CLK0
- b)Matched SMA 50 Ω coax cables for output Q0 and Q0

## Evaluating the MAX9315 with One Differential Input

- 1) Verify that shunts are across pins 2 and 3 of jumper JU1 ( EN ), and pins 2 and 3 of jumper JU2 (CLKSEL).
- 2) Connect two matched coax cables to the oscilloscope. Connect the other end of the cables to Q0 and Q0 on the EV kit board.
- 3) Connect a 2.0V power supply to the VCC pad. Connect the supply ground to the GND pad closest to VCC.
- 4) Connect a -1.3V adjustable power supply to the pad labeled VEE. Connect the supply ground to the GND pad closest to VEE.
- 5) Adjust the differential signal generator to the following settings:
- a) VIH = 1.0V

b)VIL = 0.3V

- c) Duty cycle = 50%
2. d)Frequency = 1.5GHz
- 6) Connect one pair of matched coax cables to the differential signal generator. Connect the other end of the cables to CLK0 and CLK0 on the EV kit.
- 7) Turn on the power supplies, enable the generator, and verify that the output signals meet the following specifications:
5. a)VOH: 0.855V &lt; VOH &lt; 1.135V
6. b)VOL: 0.055V &lt; VOL &lt; 0.305V
7. c)VOH - VOL: 550mV &lt; (VOH - VOL) &lt; 910mV

## Notes:

- 1) To verify output signals other than Q0 and Q0 , remove the corresponding 50 Ω output termination resistor, and make sure the untested output signals are terminated with 50 Ω resistors.
- 2) For other input levels, refer to the MAX9315 and MAX9316 data sheets, setting VCC = 2.0V.
- 3) To evaluate the MAX9316, see the Evaluating the MAX9316 section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

## Power Supply

In  order  to  terminate  outputs  with  50 Ω to  (VCC -  2V) using the 50 Ω oscilloscope input, VCC is set to 2.0V. In an actual application, VCC and VEE can have different supplies; refer to the MAX9315 and MAX9316 data sheets.

VBB is an on-chip reference output voltage. Connect VBB to the inverting or noninverting clock input to provide a reference for single-ended operation. For VCC = 2.0V, the MAX9315 EV kit provides a VBB from 0.475V to 0.675V.

## Enable

The MAX9315 EV kit features a DC logic-level EN function  using jumper JU1. Table 1 shows the EN settings and its corresponding functions.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | EN PIN          | MAX9315 FUNCTION       |
|------------------|-----------------|------------------------|
| 1 and 2          | Connect to V CC | MAX9315 output disable |
| 2 and 3          | Connect to V EE | MAX9315 output enable  |

<!-- image -->

## MAX9315 Evaluation Kit

## Clock Select

Input CLKSEL pin selects channel 0 (CLK0 and CLK0 ) or  channel 1 (CLK1 and CLK1 ).  The  MAX9315 EV kit can either provide an internal DC select signal by using jumper JU2, or accept an AC external signal from an SMA connector CLKSEL. (Before connecting the external signal to the CLKSEL connector, verify there is no shunt across jumper JU2) . Table 2 shows the functions of jumper JU2.

## Evaluating the MAX9316

The MAX9315 EV kit can also be used to evaluate the MAX9316, which has one differential LVECL/LVPECL, HSTL input, or single-ended input for scan clock. To evaluate the MAX9316, the following modifications have to be made:

- 1) Replace the MAX9315EUP with the MAX9316EUP.
- 2) Remove R19, R20, and C8.
- 3) Add 100 Ω resistors on R11 and R12 and a 0.01µF capacitor on C10.

Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | CLKSEL PIN                   | INPUT SOURCE                |
|------------------|------------------------------|-----------------------------|
| 1 and 2          | Connect to V CC              | CLK1 and CLK1               |
| 2 and 3          | Connect to V EE              | CLK0 and CLK0               |
| No shunt         | Driven by external AC signal | Selected by AC signal level |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9315 Evaluation Kit

Figure 1. MAX9315 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9315 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9315 Evaluation Kit

Figure 3. MAX9315 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX9315 EV Kit PC Board Layout-Inner Layer 2 (Ground Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9315 Evaluation Kit

Figure 5. MAX9315 EV Kit PC Board Layout-Inner Layer 3 (VCC Layer)

<!-- image -->

Figure 6. MAX9315 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->