<!-- lastmod 2022-08-02 -->
## General Description

The MAX3693 evaluation kit (EV kit) is an assembled, surface-mount demonstration board that provides easy evaluation of the MAX3693 622Mbps serializer with clock synthesis and LVDS inputs.

## Component List

| DESIGNATION                                                                    |   QTY | DESCRIPTION                                            |
|--------------------------------------------------------------------------------|-------|--------------------------------------------------------|
| C4-C9, C11, C12, C16-C21                                                       |    14 | 0.1µF, 10%, 25V min ceramic capacitors                 |
| C13, C22                                                                       |     2 | 1µF, 10%, 10V min ceramic capacitors X7R type          |
| C14                                                                            |     1 | 1µF, 10%, 25V min ceramic capacitor                    |
| C15                                                                            |     1 | 33µF, ±10%, 10V min tantalum capacitor AVX TAJD336K010 |
| L1-L5                                                                          |     1 | 56nH inductors Coilcraft 0805CS-560XKBC                |
| R1, R2, R11, C1-C3, C10, JU1, JU2, JU4, JU11-JU15                              |     0 | Not installed                                          |
| R3, R4                                                                         |     2 | 27 Ω , 5% resistors                                    |
| R5, R6                                                                         |     2 | 220 Ω , 5% resistors                                   |
| R7, R8                                                                         |     2 | 130 Ω , 5% resistors                                   |
| R9, R10                                                                        |     2 | 24 Ω , 5% resistors                                    |
| R12                                                                            |     1 | 20k Ω , 5% resistor                                    |
| PCLKI+, PCLKI-, PD0+, PD0-, PD1+, PD1-, PD2+, PD2-, PD3+, PD3-, PCLK0+, PCLK0- |    12 | SMB connectors (PC-mount)                              |
| RCLK+, RCLK-, SD+, SD-                                                         |     4 | SMA connectors (PC-mount)                              |
| GND, +3.3V                                                                     |     2 | Test points                                            |
| JU3                                                                            |     1 | 2x3 pin header                                         |
| U1                                                                             |     1 | MAX3693ECJ (32 TQFP)                                   |
|                                                                                |     1 | MAX3693 PC board                                       |
|                                                                                |     1 | MAX3693 data sheet                                     |
|                                                                                |     1 | Shunt for JU3                                          |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |

<!-- image -->

Features

- ' Single +3.3V Supply
- ' Selectable Clock-Reference Frequencies (155.52MHz, 77.76MHz, 51.84MHz, 38.88MHz)
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3693EVKIT | -40°C to +85°C | 32 TQFP      |

## Detailed Description

The  MAX3693 EV kit  simplifies  evaluation  of  the MAX3693. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with LVDS inputs and 3.3V PECL outputs.

The LVDS inputs (PD\_+, PD\_-, PCLKI+, PCLKI-, RCLK+, RCLK-) are internally terminated with 100 Ω differential  input  resistance,  and therefore do not require external termination. Ensure that LVDS devices driving these inputs are not redundantly terminated. The LVDS outputs (PCLKO+, PCLKO-) require a differential termination with a 100 Ω resistor  between complementary outputs.

The evaluation kit is designed to directly couple an LVDS reference clock. If the reference clock does not have LVDS-compatible levels:

- 1)  Cut  the  PC  board  traces  shorting  capacitors  C1 and C2.
- 2) Install 0.1µF capacitors.
- 3) Install 4.99k Ω resistors for R1 and R2 and tie the centerpoint of R1 and R2 (available at JU1) to VCC / 2. Install  a  0.1µF  capacitor  at  C3  for  addtional noise filtering.

The PECL outputs have an attenuation (0.6) and impedance matching network on the EV board that allow 50 Ω terminations to ground for oscilloscope interfacing. All signal inputs and outputs use coupled 50 Ω transmission lines.  All  input  signal  lines  are  of  equal  length  to minimize propagation-delay skew. Likewise, all output signal lines are of equal length.

The MAX3693 EV kit allows use of multiple reference clock frequencies with the appropriate setting on JU3. See Table 1 for jumper settings.

1

Figure 1.  MAX3693 EV Kit Schematic

<!-- image -->

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1. Jumper JU3 Functions

| SHUNT LOCATION   |   REFERENCE CLOCK FREQUENCY (MHz) | CKSET PIN                               |
|------------------|-----------------------------------|-----------------------------------------|
| 1-2              |                            155.52 | Connected to V CC                       |
| 3-4              |                             51.84 | Connected through 20k Ω resistor to GND |
| 5-6              |                             38.88 | Connected to GND                        |
| Open             |                             77.76 | Floating                                |

<!-- image -->

Figure 2. MAX3693 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3.  MAX3693 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3693 Evaluation Kit

<!-- image -->

Figure 4.  MAX3693 EV Kit PC Board Layout-Solder Side

Figure 5.  MAX3693 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 6.  MAX3693 EV Kit PC Board Layout-GND Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600