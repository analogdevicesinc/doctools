<!-- lastmod 2022-08-02 -->
## General Description

The MAX3971 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3971 10.3Gbps limiting amplifier. The EV kit enables testing of all the device's functions. SMA connectors with 50 Ω controlled-impedance connections  to  the  MAX3971 are provided for all data input and output ports to facilitate connection to high-speed test equipment.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1-C4         |     4 | 0.001µF ± 10% ceramic capacitors (0402) Murata GRM36X7R102K050AD |
| C6, CZ        |     2 | 0.1µF ± 10% ceramic capacitors (0603) Murata GRM39X7R104K016AD   |
| C7            |     1 | 2.2µF ± 10% ceramic capacitor (1206) Murata GRM42-6X7R225K016AD  |
| C8            |     1 | 33µF ± 10% tantalum capacitor AVX TAJC336K010                    |
| C9, C16-C21   |     0 | Open                                                             |
| C11-C14       |     4 | 0.1µF ± 10% ceramic capacitors (0402) Murata GRM36X5R104K010AD   |
| J1-J4         |     4 | SMA connectors (edge-mount, tab contact)                         |
| J6, J7        |     2 | Test points Digi-Key 5000K-ND                                    |
| J8-J14        |     0 | Open                                                             |
| JU1           |     1 | 1 × 3-pin header (0.1in center)                                  |
| L1            |     1 | Murata BLM11HA102SG                                              |
| R3, R4        |     0 | Open                                                             |
| U1            |     1 | MAX3971UGP (20 QFN)                                              |
| None          |     1 | Shunt                                                            |
| None          |     1 | MAX3971 evaluation circuit board, Rev B                          |
| None          |     1 | MAX3971 data sheet                                               |

<!-- image -->

## Features

- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested
- ♦ Single 3.3V Power Supply

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX3971EVKIT | 0°C to +85°C | 20 QFN*      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3971 when contacting these component suppliers.

## Quick Start

- 1) Connect a 3.3V power supply to J6 (VCC). Connect the power supply ground to J7.
- 2) Connect a differential or single-ended input signal (differential  voltage  amplitude between 10mVp-p and 800mVp-p) to the inputs (IN+ and IN-) by using SMA cables suitable for 10.3GHz use.
- 3) Connect a 50 Ω oscilloscope to the SMA connectors J3 and J4 (OUT+, OUT-) to observe the output of the limiter. The output signal is approximately 200mVp-p to 400mVp-p differential.
- 4) To disable the output signals OUT+ and OUT-, jumper the three-pin header JU1 from the center pin (pin 2) to VCC (pin 1). To enable the output signals, jumper should be from pin 2 to ground (pin 3).

## Notes

- 1) At high frequencies such as from 1GHz to 10GHz, delays with the board and cables affect measurements. Mismatches in cables can cause significant measurement errors. Edge speeds are best observed by using single-ended methods. Careful calibration of cables, attenuators and the board is necessary.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX3971 Evaluation Kit

Figure 1. MAX3971 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX3971 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX3971 Evaluation Kit

Figure 3. MAX3971 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3971 Evaluation Kit

Figure 4. MAX3971 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3971 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX3971 Evaluation Kit

Figure 6. MAX3971 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3971 Evaluation Kit

Figure 7. MAX3971 EV Kit PC Board Layer Profile

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600