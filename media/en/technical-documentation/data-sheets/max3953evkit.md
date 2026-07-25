<!-- lastmod 2022-08-02 -->
## General Description

The MAX3953 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3953 10Gbps 1:16 deserializer with clock data recovery (CDR). The EV kit includes all components necessary to interface with +3.3V CML inputs and LVDS outputs.

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                               |
|-----------------|-------|-------------------------------------------|
| C1              |     1 | 2.2µF ±10% ceramic capacitor (0805)       |
| C2, C4, C16     |     3 | 0.1µF±10% ceramic capacitors (0402)       |
| C3, C5, C7      |     3 | 0.01µF±10% ceramic capacitors (0402)      |
| C6, C10         |     2 | 0.1µF±10% ceramic capacitors (0201)       |
| C8              |     1 | 33µF±10% tantalum capacitor, caseB        |
| C9              |     1 | 0.047µF±10% ceramic capacitor (0402)      |
| C13, C15        |     2 | 0.01µF±10% ceramic capacitors (0201)      |
| J1, J2, J7-J40  |    36 | SMB connectors                            |
| J3, J4          |     2 | SMP698 connectors, edge mount             |
| J41, J42        |     2 | Test points                               |
| J43, J44        |     2 | Do not install                            |
| JU2             |     1 | 10 x 2 pin headers, 0.1in centers         |
| L1              |     1 | 56nH ± 10% inductor (0805) 0805HS-560TKBC |
| R1              |     1 | 100 Ω ± 1% resistor (0402)                |
| R5-R16, R18-R22 |    17 | Open                                      |
| TP1, TP2        |     2 | Test points                               |
| U1*             |     1 | MAX3953UGK 68-pin QFN                     |
| None            |     4 | Shunts                                    |
| None*           |     1 | MAX3953 EV kit circuit board              |
| None*           |     1 | MAX3953 EV kit data sheet                 |
| None*           |     1 | MAX3953 data sheet                        |

<!-- image -->

## Features

- ♦ Single +3.3V Supply
- ♦ 9.953Gbps/10.312Gbps Evaluation
- ♦ Fully Assembled and Tested
- ♦ Fully Matched with High-Bandwidth SMP Connectors at the Input

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX3953EVKIT | 0 o C to +85 o C | 68 QFN       |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 408-224-8566 | 408-224-6304 |
| Murata     | 770-436-1300 | 770-436-3030 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3953 Evaluation Kit

## Quick Start

- 1) Apply +3.3V to the VCC (J41) pin. Connect powersupply ground to GND (J42). Set the supply current limit to 500mA.
- 2) Install shunts from pins 1 to 2, 7 to 8, 9 to 10, and 17 to 18, of JU2.
- 3) Apply a differential input clock from 200mVP-P to 1600mVP-P at 622.08MHz to J1 and J2 (REFCLK+ and REFCLK-).
- 4) Apply a differential input signal from 100mVP-P to 1600mVP-P at 9.95328Gbps to J3 and J4 (SDI+ and SDI-).
- 5) Use a 50 Ω terminated oscilloscope to monitor the output data on any of the parallel output lines (PDO0± to PDO15±). Monitor the output clock on PCLKO+ and PCLKO-. The oscilloscope should show a 622.08MHz clock output and a 622.08Mbps data output. LVDS outputs must be AC-coupled into the oscilloscope.

## Detailed Description

The MAX3953 EV kit simplifies evaluation of the MAX3953 1:16 deserializer with CDR. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with +3.3V CML inputs and LVDS outputs. Transmission-line test structures (J43 to J44) are included on the evaluation board to allow measurement of signal loss and dispersion of clock and data signals at 10GHz.

## Applications Information

## Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs

To monitor LVDS signals with 50 Ω oscilloscope inputs, set  the  inputs  of  the  oscilloscope  to  'AC-coupling'  or place a DC block in series with each output. If you are observing only one output with a 50 Ω probe, balance the complementary output with a DC block and a 50 Ω terminator to ground.

## Connecting LVDS Outputs to HighImpedance Oscilloscope Inputs

To monitor LVDS signals with high-impedance oscilloscope inputs, install 100 Ω (0402) resistors on locations R5-R16 and R18-R22. Note that this does not provide as good a termination scheme as using the 50 Ω inputs on an oscilloscope, which degrades the resulting output.

Figure 1. JU2 Header Configuration

<!-- image -->

## Exposed-Pad Package

The 68-pin QFN package with exposed pad incorporates features that provide a very low thermal-resistance path for heat removal from the IC, either to a PC board or to an external heatsink. The exposed pad on the MAX3953 must be soldered directly to a ground plane with good thermal conductance.

## Configuration for JU2

The 10 × 2 header (JU2) provides control for the input configuration of the MAX3953. Figure 1 shows the control structure for the JU2 header.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Clock Holdover

The clock holdover mode of the MAX3953 is designed to provide an accurate parallel clock in the event of a loss-of-lock (LOL) or loss-of-signal (LOS) condition. The activation of the holdover mode is controlled by the

## MAX3953 Evaluation Kit

SYNC\_ERR, LOS\_IN , and CLKSEL pins. CLKSEL is an input signal used to select the VCO to lock on to incoming data (SDI) or the reference clock (REFCLK). Connecting SYNC\_ERR to CLKSEL (pin 17 to 18 on JU2) activates the holdover mode.

## Adjustment and Control Description (see Quick Start first)

| COMPONENT   | NAME     | FUNCTION                                                                                                                                                                                                                                                                     |
|-------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU2         | CLKSEL   | Output Clock Selector, TTL. CLKSEL is the control input for clock holdover. When CLKSEL = GND, PCLKO is derived from the input data. When CLKSEL = V CC , PCLKO is derived from the reference clock.                                                                         |
| JU2         | REFSET   | Reference Clock Select Input, TTL. When the reference clock is 155MHz/161MHz, set REFSET to GND. When the reference clock is 622MHz/644MHz then set REFSET to V CC .                                                                                                         |
| JU2         | RATESET  | Serial Data Rate Select Input, TTL. When the input serial data stream is 9.953Gbps, set RATESET to GND. When the input serial data stream is 10.312Gbps, set RATESET to V CC .                                                                                               |
| JU2         | LOS_IN   | Loss-of-Signal Input, TTL. The LOS_IN is an external input. Clock holdover is activated when LOS_IN is TTL low. (See the Clock Holdover section.)                                                                                                                            |
| TP1         | SYNC_ERR | Synchronization Error Output, TTL. SYNC_ERR is intended to drive CLKSEL for holdover mode. (See the Clock Holdover section.)                                                                                                                                                 |
| TP2         | LOL      | Loss-of-Lock Indicator Output, TTL. LOL signals a TTL low when the VCO frequency is more than 1000ppm from the reference clock frequency. LOL signals a TTL high when the VCO frequency is within 500ppm of the reference clock frequency. (See the Clock Holdover section.) |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3953 Evaluation Kit

Figure 2. MAX3953 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3953 Evaluation Kit

<!-- image -->

Figure 3. MAX3953 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3953 Evaluation Kit

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600