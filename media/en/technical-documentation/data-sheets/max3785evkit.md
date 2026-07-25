<!-- lastmod 2022-08-02 -->
## General Description

The MAX3785 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3785 6.25Gbps equalizer. The EV kit enables testing of all device functions. SMA connectors with 50 Ω controlled impedance to the MAX3785 are provided for all input and output ports to facilitate connection to high-speed test equipment.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Please indicate that you are using the MAX3785 when contacting these component suppliers.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1            |     1 | 33µF ± 10% tantalum capacitor, case B AVX TAJB336M010R          |
| C2, C3        |     2 | 0.1µF ±10%, 10V ceramic capacitors (0402)                       |
| J1, J2        |     2 | Test points Digi-Key 5000K-ND                                   |
| J3-J8         |     6 | SMA connectors, edge mount, tab contacts EFJohnson 142-0701-851 |
| L1            |     1 | 4.7µH inductor Coilcraft 1008CT-040XJBC                         |
| U1            |     1 | MAX3785UBL                                                      |
| None          |     1 | MAX3785 evaluation circuit board, rev A                         |
| None          |     1 | MAX3785 data sheet                                              |

<!-- image -->

## Features

- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested
- ♦ Calibration Test Strip

## Ordering Information

| PART         | TEMP RANGE   | PIN-PACKAGE   |
|--------------|--------------|---------------|
| MAX3785EVKIT | 0°C to +85°C | 6 UCSP        |

## Quick Start

- 1) Connect a +1.8V power supply to J1 (VCC). Connect the power supply ground to J2.
- 2) Connect DC-blocking capacitors or bias T networks to  IN+  and  IN-  inputs.  Then  connect  a  differential signal from 400mVP-P to 1600mVP-P to the inputs using 50 Ω cables. If not using DC-blocking capacitors,  then  the  high  level  for  each  input  signal  must be VCC.

Warning: The SMA connectors are directly connected to the chip's inputs and outputs. To avoid damage to laboratory equipment or device, always use DC-blocking capacitors or bias T networks.

- 3) Connect DC-blocking capacitors or bias T networks to  OUT+ and OUT- outputs. Then connect signals from the DC-blocking capacitors to an oscilloscope with 50 Ω input terminations.
- 4) At the signal source, start with a short, simple pattern  such  as  a  2 7 -  1  PRBS.  The  data  rate  can  be 1Gbps to 6.4Gbps.
- 5) Evaluation: After the EV kit has been initially checked out, evaluation can begin with a FR4 PC board. Start with a board length of 20in and progress to longer lengths. For data rates of 3.2Gbps and slower, the part equalizes board lengths up to 40in. For data rates of 6.4Gbps and slower, the part equalizes board lengths up to 30in. When connecting the equalizer with the board, keep the cables from the board to the equalizer as short as possible.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

Figure 1. MAX3785 EV Kit Schematic

<!-- image -->

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

<!-- image -->

Figure 2. MAX3785 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

Figure 3. MAX3785 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

<!-- image -->

Figure 4. MAX3785 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

Figure 5. MAX3785 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785 Evaluation Kit

Figure 6. MAX3785 EV Kit PC Board Layout-Bottom Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7