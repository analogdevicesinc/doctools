<!-- lastmod 2022-08-02 -->
## General Description

The MAX3840 evaluation kit (EV kit) is a surface-mount demonstration board that provides easy evaluation of the MAX3840 2.7Gbps, dual 2 ✕ 2 crosspoint switch. The board includes an extra transmission line for calibration purposes.

The MAX3840 EV kit is fully assembled and tested.

## Component List

| DESIGNATION          |   QTY | DESCRIPTION                                      |
|----------------------|-------|--------------------------------------------------|
| C1                   |     1 | 33 µ F ± 10% tantalum capacitor                  |
| C2                   |     1 | 2.2 µ F ± 10% tantalum capacitor AVX TAJC225K016 |
| C3-C24, C27, C29-C31 |    26 | 0.1 µ F ± 10% ceramic capacitors (0402)          |
| R1-R8                |     8 | 1k Ω ± 1% (0402) resistors                       |
| R9-R12               |     4 | 100 Ω ± 1% (0402) resistors                      |
| L1                   |     1 | 4.7 µ H inductor, Coilcraft                      |
| U1                   |     1 | MAX3840EGJ, 32-pin QFN EP                        |
| JP1-JP8              |     8 | 1x2 pin headers (0.1in centers)                  |
| JP1-JP8              |     8 | Shunts Digi-Key S9000-ND                         |
| J1-J20               |    20 | SMA connectors (edge-mount)                      |
| J21, J22             |     2 | Test points                                      |
| None                 |     1 | MAX3840 Evaluation Kit circuit board             |
| None                 |     1 | MAX3840 Evaluation Kit data sheet                |
| None                 |     1 | MAX3840 data sheet                               |

<!-- image -->

## Features

- ♦ Fully Assembled and Tested Surface-Mount Board
- ♦ +3.3V Single Supply
- ♦ Includes Transmission Line for Calibration
- ♦ Part Assembled in a 32-pin QFN Exposed-Pad (EP) Package

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3840EVKIT | -40°C to +85°C | 32 QFN-EP    |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 843-626-3123 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 814-237-1431 | 814-238-0490 |

Note: Please indicate that you are using the MAX3840 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3840 Evaluation Kit

## Detailed Description

The MAX3840 EV kit simplifies evaluation of the MAX3840 dual 2 ✕ 2 crosspoint switch. The EV kit operates from a single +3.3V power supply and includes all external components necessary to interface with the CML inputs and outputs.

The CML inputs (DIA\_ and DIB\_) are internally terminated on the MAX3840 with 100 Ω differential  input  resistance and require no external termination. Ensure that the CML devices driving these inputs are not redundantly terminated. The CML outputs (DOA\_ and DOB\_) must be AC-coupled to a 50 Ω termination (100 Ω differential) load. On-board 100 Ω differential terminations are provided to reduce noise outputs that are not used.

## Connecting CML Outputs to 50 Ω Oscilloscope Inputs

To monitor one or more CML signals with 50 Ω oscilloscope inputs, leave the coupling capacitors in series with the outputs. Remove the associated 100 Ω differential  load  resistors from the EV kit on the outputs (R9-R12). It is important to remove the 100 Ω resistor on

## Table 1. Output Routing

| ROUTING CONTROLS   | ROUTING CONTROLS   | OUTPUT CONTROLS   | OUTPUT CONTROLS   | OUTPUT SIGNALS      | OUTPUT SIGNALS      |
|--------------------|--------------------|-------------------|-------------------|---------------------|---------------------|
| SELA0/SELB0        | SELA1/SELB1        | ENA0/1            | ENB0/1            | SIGNAL AT DOA0/DOB0 | SIGNAL AT DOA1/DOB1 |
| 0                  | 0                  | 1                 | 1                 | DIA0/DIB0           | DIA0/DIB0           |
| 0                  | 1                  | 1                 | 1                 | DIA0/DIB0           | DIA1/DIB1           |
| 1                  | 0                  | 1                 | 1                 | DIA1/DIB1           | DIA0/DIB0           |
| 1                  | 1                  | 1                 | 1                 | DIA1/DIB1           | DIA1/DIB1           |
| X                  | X                  | 0                 | 0                 | Power Down          | Power Down          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

the output monitored, otherwise the load impedance will  not  match the characteristic impedance of the line and the resulting reflections will cause a degradation in the output signal quality. If you are observing a singleended output, balance the other half with a 50 Ω termination to ground (through the AC-coupling capacitor).

## Connecting CML Outputs to High-Impedance Oscilloscope Inputs

To monitor the CML signals with high-impedance oscilloscope inputs, leave the coupling capacitors in series with the outputs, and make sure the differential load resistors are on all the outputs on the EV kit (R9-R12).

## Layout Considerations

The input and output data lines have equal lengths to minimize channel-to-channel skew.

## Jumpers

Jumpers JP1, JP2, JP5, and JP6 select the input signals for  channel A and B outputs. Jumpers JP3, JP4, JP7, and JP8 enable the output drivers for channel A and B (refer to Table 1).

<!-- image -->

Figure 1. Deterministic Jitter From Board Traces (Refer to application note HFAN-4.5.0, Rev 0, 12/00)

<!-- image -->

## MAX3840 Evaluation Kit

## Board Effects

Figure 2. Attenuation vs. Frequency-Attenuation of Board Trace (Refer to application note HFAN-4.5.0, Rev 0, 12/00)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

Figure 3. MAX3840 EV Kit Schematic Diagram

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

<!-- image -->

Figure 4. MAX3840 EV Kit Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

Figure 5. MAX3840 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

<!-- image -->

Figure 6. MAX3840 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

Figure 7. MAX3840 EV Kit PC Board Layout-Power Plane

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3840 Evaluation Kit

Figure 8. MAX3840 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600