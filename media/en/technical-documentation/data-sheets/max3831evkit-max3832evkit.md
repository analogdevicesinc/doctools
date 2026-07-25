<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX3831/MAX3832 evaluation kits (EV kits) simplify  evaluation of the MAX3831/MAX3832 2.488Gbps interconnect mux/demux ICs with clock generator. The EV kits require only a +3.3V single supply and include all the external components necessary to interface with 3.3V CML and LVDS logic. A parallel data generator or stimulus system can be used with an oscilloscope to evaluate the chip's complete functionality. A built-in system test (BIST) function allows a system high-speed test.

The MAX3831/MAX3832 EV kits contain an on-board clock and data recovery IC (MAX3876EHJ) that is used to  generate 2.488Gbps clock and data inputs to the high-speed, CML-compatible serial-input ports.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 207-324-4140 | 603-224-1430 |

Note: Please indicate that you are using the MAX3831 or MAX3832 when contacting these component suppliers.

| DESIGNATION                                                                    |   QTY | DESCRIPTION                                            |
|--------------------------------------------------------------------------------|-------|--------------------------------------------------------|
| C1                                                                             |     1 | 0.33µF ±10%, 16V min ceramic capacitor (0805)          |
| C2-C5, C7-C14, C18, C22, C24-C28, C31-C33, C35, C36, C43-C47, C52-C56, C59-C62 |    38 | 0.1µF ±10%, 25V min ceramic capacitors (0603)          |
| C23                                                                            |     1 | 1.0µF ±10%, 16V min ceramic capacitor (0805)           |
| C29                                                                            |     1 | 33µF ±10%, 10V min tantalum cap Sprague 293D336X0016D2 |
| C30                                                                            |     1 | 2.2µF ±10%, 10V min ceramic capacitor (1206)           |
| R4, R60                                                                        |     2 | 390 Ω ±5% resistors                                    |
| R30, R33, R36, R39, R71                                                        |     0 | 100 Ω ±1% resistor (0603)- not placed                  |
| R28, R29                                                                       |     2 | 4.99k Ω ±1% resistors                                  |

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                             |
|--------------------|-------|-----------------------------------------|
| R61, R62           |     0 | 49.9 Ω ±1% resistor (0603)- not placed  |
| L1, L2, L4, L5, L6 |     5 | 56nH inductors Coilcraft 0805CS-560XKBC |
| D2, D3             |     2 | LEDs                                    |
| J1, J2, J33-J36    |     6 | SMA connectors (PC mount)               |
| J7, J8, J15-J32    |    20 | SMB connectors (PC mount)               |
| J38                |     1 | 2x12 header (0.1in centers)             |
| JP3                |     1 | 3-pin header (0.1in centers)            |
| JP4, JU2, JU3, JU7 |     4 | 2-pin headers (0.1in centers)           |
| +3.3V, GND         |     2 | Test points                             |
| U1                 |     1 | MAX3831UCBor MAX3832UCB 64-pin TQFP-EP  |
| U2                 |     1 | MAX3876EHJ (32-pin TQFP)                |
| U3                 |     1 | 74HCT04                                 |
| None               |     2 | Shunts for JP3 and J38                  |
| None               |     1 | MAX3831/MAX3832 PC board                |
| None               |     1 | MAX3831/MAX3832 data sheet              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## Features

- ♦ +3.3V Single Supply
- ♦ On-Board Clock and Data Recovery (CDR)
- ♦ Fully Assembled and Tested Surface-Mount Board
- ♦ Loss-of-Frame/Loss-of-Lock Monitors

## Ordering Information

| PART          | TEMP. RANGE   | IC PACKAGE   |
|---------------|---------------|--------------|
| MAX3831 EVKIT | 0°C to +85°C  | 64 TQFP-EP*  |
| MAX3832 EVKIT | 0°C to +85°C  | 64 TQFP-EP*  |

*Exposed paddle

## MAX3831/MAX3832 Evaluation Kits

## Quick Start

- 1) Apply 3.3V to the +3.3V pin. Connect power-supply ground to GND.
- 2) Short TEST to ground by tying pins 9 and 10 of J38 together. This places the chip into test mode, with PRBS data transmitted to the serial- and paralleldata output ports.
- 3) Reset the elastic store buffer by shorting pins 5 and 6 of J38.
- 4) Remove the jumper from pins 5 and 6 of J38; the LOF indicator (D3) should turn off.
- 5) Use a high-speed, 50 Ω input oscilloscope to monitor PDO\_± and SDO± for a proper eye diagram.

## Detailed Description

## Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs

To monitor an LVDS signal with a 50 Ω oscilloscope probe, leave the coupling capacitors in series with the outputs. If you are observing only one output with a

Table 1. Controls, Test Points, and LEDs

| NAME   | TYPE          | PIN    | DESCRIPTION                                                                                                   |
|--------|---------------|--------|---------------------------------------------------------------------------------------------------------------|
| JU2    | 2-pin header  | 1, 2   | RCLKI± common-mode bias connection. Shorting JU2 to ground sets V CM = 0 (allows a single-ended RCLK± input). |
| JU3    | 2-pin header  | 1, 2   | LOF test point (before buffering). Do not short.                                                              |
| JU7    | 2-pin header  | 1, 2   | LOF test point (after buffering). Do not short.                                                               |
| JP4    | 2-pin header  | 1, 2   | Loss-of-Lock ( LOL ) test point. Do not short.                                                                |
| JP3    | 3-pin header  | 1, 2   | Short to enable system-loopback input to CDR.                                                                 |
| JP3    | 3-pin header  | 2, 3   | Short to enable serial-data input to CDR.                                                                     |
| J38    | 24-pin header | 1, 2   | TRIEN -short to enable tristate mode.                                                                         |
| J38    | 24-pin header | 3, 4   | PLBEN -short to enable parallel-system-loopback mode.                                                         |
| J38    | 24-pin header | 5, 6   | RSETES -short to reset elastic store buffers.                                                                 |
| J38    | 24-pin header | 7, 8   | LBEN -short to enable serial-line-loopback mode.                                                              |
| J38    | 24-pin header | 9, 10  | TEST -short to enable BIST mode.                                                                              |
| J38    | 24-pin header | 11, 12 | N/A                                                                                                           |
| J38    | 24-pin header | 13, 14 | N/A                                                                                                           |
| J38    | 24-pin header | 15, 16 | RSETFR -short to reset frame-sync circuitry.                                                                  |
| J38    | 24-pin header | 17, 18 | LOF test point. Do not short.                                                                                 |
| J38    | 24-pin header | 19, 20 | N/A                                                                                                           |
| J38    | 24-pin header | 21, 22 | N/A                                                                                                           |
| J38    | 24-pin header | 23, 24 | N/A                                                                                                           |
| D2     | LED           | 1, 2   | LOL indicator*                                                                                                |
| D3     | LED           | 1, 2   | LOF indicator                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

50 Ω probe, balance the circuit by connecting the other output with a 50 Ω terminator to ground.

## Connecting LVDS Outputs to High-Impedance Oscilloscope Inputs

To monitor an LVDS signal with a high-impedance oscilloscope probe, install a 100 Ω differential  load resistor between the complementary outputs (see R30, R33, R36, R39, R71 in the Component List ).

## Connecting CML Outputs to High-Impedance Oscilloscope Inputs

To monitor a CML signal with a high-impedance instrument, install 49.9 Ω ±1% pull-up resistors (see R61 and R62 in the Component List ) between the respective output lines and VCC.

## Exposed-Paddle Package

The exposed-paddle (EP), 64-pin TQFP incorporates features that provide a very low thermal resistance path for heat removal from the IC. The paddle is electrical ground on the MAX3831/MAX3832 and should be soldered to the circuit board for proper thermal and electrical performance.

## MAX3831/MAX3832 Evaluation Kits

Figure 1. MAX3831/MAX3832 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 2. MAX3831/MAX3832 EV Kits Schematic (continued)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 3. MAX3831/MAX3832 EV Kits Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 4. MAX3831/MAX3832 EV Kits PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

<!-- image -->

Figure 5. MAX3831/MAX3832 EV Kits PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 6. MAX3831/MAX3832 EV Kits PC Board Layout-Power Plane

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 7. MAX3831/MAX3832 EV Kits PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3831/MAX3832 Evaluation Kits

Figure 8. MAX3831/MAX3832 EV Kits Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3831/MAX3832 Evaluation Kits

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_