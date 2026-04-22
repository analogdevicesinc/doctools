<!-- lastmod 2024-08-02 -->
## General Description

The MAX1678 evaluation kit (EV kit) provides a regulated 3.3V output while operating on input voltages as low as 0.7V with guaranteed start-up at 0.87V. The input source can be a 1 or 2-cell battery or a DC supply. Efficiency is typically 90% with output loads up to 100mA.

The kit uses surface-mount components and is fully assembled and tested for quick evaluation. Jumpers are provided for selecting an adjustable output voltage and for shutdown control.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF, 10V ceramic capacitor Taiyo Yuden LMK325BJ106MN, TDK C3225X5R1A106M         |
| L1            |     1 | 47µH, 240mA power inductor Coilcraft DS1608C-473 Sumida CD43-470 Murata LQH4N470K |
| J1            |     1 | 3-pin jumper                                                                      |
| J2            |     1 | 2-pin jumper                                                                      |
| R1, R4        |     2 | 1M Ω , 1% resistors                                                               |
| R2, R3        |     2 | Open                                                                              |
| R5            |     1 | 100k Ω , 5%resistor                                                               |
| U1            |     1 | MAX1678EUA                                                                        |
| None          |     2 | Shunts                                                                            |
| None          |     1 | MAX1678 EV kit PC board                                                           |
| None          |     1 | MAX1678 data sheet                                                                |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Coilcraft   | 847-639-6400 | 847-639-1469 |
| Coiltronics | 561-241-7876 | 561-241-9339 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-390-4373 | 847-390-4428 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ' 0.87V to V OUT Input Range
- ' Synchronous Rectified-No External Diode Required
- ' 3.3V Output Voltage (or Adjustable)
- ' 100mA Output
- ' 90% Efficiency
- ' 2µA Shutdown Current
- ' Small Surface-Mount Components
- ' Inductor Damping Switch Suppresses EMI

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1678EVKIT | 0°C to +70°C  | 8 µMAX       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1678 EV kit is shipped fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that the shunts are positioned on the jumpers as listed in Table 2 for a 3.3V output.
- 2) Connect a +0.87V to +3.3V supply voltage to the VIN pad. Connect ground to the GND pad. Note: once started, the input voltage may drop as low as 0.7V if the output current is less than 10mA.
- 3) Connect a voltmeter and the load (if any) to the VOUT pad.
- 4) Turn on the power and verify that the output voltage is +3.3V.

1

## MAX1678 Evaluation Kit

## Detailed Description

## Jumper Selections

Two jumpers on the PC board allow selection of several configurations. Table 1 lists the jumper functions. Table 2 lists the jumper positions when setting the board for 3.3V operation.

## Table 1.  Jumper Functions

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                           | MAX1678 OPERATION                                                                                                |
|----------|------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| J1       | 1 & 2            | SHDN connected to BATT                   | The MAX1678 is enabled.                                                                                          |
| J1       | 2 & 3            | SHDN connected to GND                    | The MAX1678 is disabled.                                                                                         |
| J1       | Open             | SHDN not controlled by the board         | SHDN must be driven by a signal connected to the SHDN pad.                                                       |
| J2       | Shorted          | FB pin connected to GND                  | VOUT is preset to 3.3V.                                                                                          |
| J2       | Open             | FB pin connected to the resistor-divider | A resistor must be installed in R3 to set the output volt- age. See the MAX1678 data sheet for more information. |

## Table 2.  Jumper Positions for Normal 3.3V Operation

| JUMPER   | SHUNT POSITION   | PIN CONNECTION             | MAX1678 OPERATION       |
|----------|------------------|----------------------------|-------------------------|
| J1       | 1 & 2            | SHDN pin connected to BATT | The MAX1678 is enabled. |
| J2       | Shorted          | FB pin connected to GND    | VOUT is preset to 3.3V. |

Figure 1.  MAX1678 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component Selection

The final circuit performance is determined by the quality of the components surrounding the MAX1678. The input and output capacitors must have low equivalent-seriesresistance (ESR) to handle the high peak currents found in switching regulators. Low ESR is especially critical in low-voltage circuits to reduce the output ripple. Ceramic capacitors are supplied on the MAX1678 EV kit because of their small size and low ESR in the value range needed for the circuit.

<!-- image -->

## MAX1678 Evaluation Kit

<!-- image -->

Figure 2.  Component Placement Guide-Component Side

Figure 3.  PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1678 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products