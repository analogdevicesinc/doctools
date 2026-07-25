<!-- lastmod 2022-08-02 -->
## General Description

The MAX3690 evaluation kit (EV kit) is an assembled surface-mount demonstration board that provides easy evaluation of the MAX3690 622Mbps serializer with TTL input, clock synthesis, and differential PECL output.

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                                             |
|--------------------------------|-------|-------------------------------------------------------------------------|
| C4-C12, C16-C21                |    15 | 0.1µF, 25V min, 10% ceramic capacitors (0603)                           |
| C13, C22                       |     2 | 1µF, 10V min, 10% ceramic capacitors (0805) X7R                         |
| C14                            |     1 | 1µF, 25V min, 10% ceramic capacitor (0805)                              |
| C15*                           |     1 | 33µF ±10%, 10V min tantalum cap AVX TAJD336K010                         |
| C2, C3, R2, R11, JU1, JU2, JU4 |     0 | Do not install                                                          |
| L1-L5*                         |     5 | 56nH inductors Coilcraft 0805CS-560XKBC                                 |
| R3, R4                         |     2 | 27 Ω , 5% resistors (0603)                                              |
| R5, R6                         |     2 | 220 Ω , 5% resistors (0603)                                             |
| R7, R8                         |     2 | 130 Ω , 5% resistors (0603)                                             |
| R9, R10                        |     2 | 24 Ω , 5% resistors (0603)                                              |
| R12                            |     1 | 20k Ω , 5% resistor (0603)                                              |
| PCLKI, PD0-PD7, PCLKO          |    10 | SMB connectors (PC mount) Suhner 82 SMB-50-0-1/111                      |
| RCLK, SD+, SD-                 |     3 | SMA connectors (PC mount) E.F. Johnson 142-0701-206 or Digi-Key J495-ND |
| V CC , GND                     |     2 | Test points Mouser 151-203                                              |
| JU3                            |     1 | 2x2 pin header (0.1" centers) Digi-Key S2012-36-ND                      |
| None                           |     1 | Shunt Digi-Key S9000-ND                                                 |
| U1*                            |     1 | MAX3690ECJ (32 TQFP)                                                    |
| None                           |     1 | MAX3690 EV kit circuit board, Rev. B                                    |
| None                           |     1 | MAX3690 data sheet*                                                     |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +3.3V Single Supply
- ' 77.76MHz Overhead Generation Clock Reference Frequency
- ' Selectable Input Clock Reference Frequencies

77.76MHz

51.84MHz

38.88MHz

## ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3690EVKIT | -40°C to +85°C | 32 TQFP      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX3690 when contacting these component suppliers.

## Detailed Description

The  MAX3690  EV  kit  simplifies  evaluation  of  the MAX3690ECJ. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with TTL inputs and 3.3V PECL outputs.

## PD\_, PCLKI

These TTL inputs are high impedance, with a range of 0 to VCC (+3.3V) with respect to ground. All input signal lines are of equal length to minimize propagation-delay skew.

## RCLK

See Table 1 for changing reference clock rates. In normal operation with a high-impedance TTL reference source, RCLK should be driven like PCLKI with R2 open and C2 shorted. If RCLK is driven by a 50 Ω TTL source, R2 should be 50 Ω , JU1 should be shorted, and C2 should be shorted. If a non-TTL source is used for RCLK, C2 = 0.1µF (ensure trace under C2 is cut) and VCC / 2 should be applied to the stub on the nonground side of JU1. Important: Note that the output of the reference clock generator must swing at least 1.2V peak to peak.

## PCLKO

PCLKO is designed to drive a high-impedance TTL input. To drive other I/O standards, a converter on this output is recommended. The PCLKO output is sensitive to  capacitance loading (see MAX3690 data sheet for specified capacitance loading).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX3690 Evaluation Kit

SD+, SDThe PECL outputs have an attenuation and impedance matching network on the EV board that allows 50 Ω terminations to ground for oscilloscope interfacing. All signal  inputs  and  outputs  use  coupled  50 Ω transmission lines. All output signal lines are of equal length.

## Table 1. Jumper JU3 Functions

| SHUNT LOCATION   |   REFERENCE CLOCK FREQUENCY | CKSET PIN                               |
|------------------|-----------------------------|-----------------------------------------|
| 1-2*             |                       51.84 | Connected to a 20k Ω termination to GND |
| 3-4*             |                       38.88 | Connected to GND                        |
| Open             |                       77.76 | Floating                                |

Figure 1.  MAX3690 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX3690 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX3690 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3690 Evaluation Kit

Figure 3.  MAX3690 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5.  MAX3690 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3690 Evaluation Kit

Figure 6.  MAX3690 EV Kit PC Board Layout-Silk Screen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4