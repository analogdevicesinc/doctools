<!-- lastmod 2023-12-19 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1701 evaluation kit provides a regulated 3.3V output while operating on input voltages as low as 0.7V. The input may be a DC source or a 1 to 2-cell battery. Efficiency is up to 95% with output loads up to 200mA.

The kit, which uses surface-mount components, is fully assembled and tested for quick evaluation. Jumpers are provided to select the output voltage, switching mode, and shutdown control. This EV kit can also be used to evaluate the MAX1700. Simply order a free sample  of  the  MAX1700EEE  and  replace  the MAX1701EEE that comes installed on the board.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 22µF, 25V, low-ESR tantalum capacitor AVX TPSD226M025R0200 Sprague 593D226X0025D        |
| C2, C3        |     2 | 0.22µF, 25V ceramic capacitors                                                          |
| C4            |     1 | 0.10µF, 25V ceramic capacitor                                                           |
| C5            |     1 | 100µF, 10V low-ESR tantalum capaci- tor AVX TPSD107M010R0100 or Sprague 593D107X0010D7  |
| C6, C7        |     0 | Not installed. Space for optional user capacitor.                                       |
| D1            |     1 | 0.5A, 20V Schottky diode Motorola MBR0520L                                              |
| J1, J2, J3    |     3 | 3-pin jumpers                                                                           |
| J4, J5        |     2 | 2-pin jumpers                                                                           |
| L1            |     1 | 10µH, 1.6A power inductor CoilCraft DO3316-103, Coiltronics UP1B-100, Sumida CDR74B-100 |
| R1, R4, R6    |     3 | 100k Ω , 1% resistors                                                                   |
| R2, R3, R5    |     3 | Not installed                                                                           |
| R7, R8, R9    |     3 | 100k Ω , 5% resistors                                                                   |
| R10, R11, R12 |     3 | 1M Ω , 5% resistors                                                                     |
| R13           |     1 | 10 Ω , 5% resistor                                                                      |
| U1            |     1 | MAX1701EEE                                                                              |
| None          |     5 | Shunts                                                                                  |
| None          |     1 | 3.4' x 2.4' printed circuit board                                                       |
| None          |     1 | MAX1700/MAX1701 data sheet                                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 3.3V Output
- ' 200mA Output
- ' 0.7V to 3.5V Input
- ' Up to 95% Efficiency
- ' 3µA Shutdown Current
- ' 300kHz PWM Operation
- ' Optional Low-Power PFM Mode
- ' Small Surface-Mount Components

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | PIN-PACKAGE   |
|--------------|---------------|---------------|
| MAX1701EVKIT | 0°C to +70°C  | 16-pin QSOP   |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER    | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (803) 946-0690 | (803) 626-3123 |
| Coilcraft   | (847) 639-6400 | (847) 639-1469 |
| Coiltronics | (561) 241-7876 | (561) 241-9339 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |
| Sumida      | (847) 956-0666 | (847) 956-0702 |
| Motorola    | (303) 675-2140 | (303) 675-2150 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1701 EV kit is shipped fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that the shunts are connected as listed in Table 2 for a 3.3V output.
- 2) Connect a +1.1V to +3.3V supply to the pad marked VIN. The ground connects to the GND pad. Note: the input voltage may drop as low as 0.7V after startup.
- 3) Connect a voltmeter to the VOUT pad.
- 4) Turn on the power and verify that the output voltage is 3.3V.
- 5) Connect a load (if any).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1701 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

Jumper Selection

Five jumpers on the printed circuit board allow user selection of several configurations. Table 1 lists the jumpers and their functions. Table 2 lists the jumper positions when the board is set for normal 3.3V output operation.

## Table 1. Jumper Functions

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                       | MAX1701 OPERATION                                                                                                                    |
|----------|------------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1 and 2          | ONA connected to GND                 | MAX1701 is disabled if ONB is VOUT.                                                                                                  |
| J1       | 2 and 3          | ONA connected to VOUT                | MAX1701 is enabled.                                                                                                                  |
| J1       | Open             | ONA is not controlled by the board   | ONA must be driven by a signal connected to the ONA pad.                                                                             |
| J2       | 1 and 2          | ONB connected to GND                 | MAX1701 is enabled.                                                                                                                  |
| J2       | 2 and 3          | ONB connected to VOUT                | MAX1701 is disabled if ONA = GND.                                                                                                    |
| J2       | Open             | ONB is not controlled by the board   | ONB must be driven by a signal connected to the ONB pad.                                                                             |
| J3       | 1 and 2          | CLK/SEL connected to GND             | Low-power mode, MAX1701 operates in the PFM mode.                                                                                    |
| J3       | 2 and 3          | CLK/SEL connected to VOUT            | High-power mode, MAX1701 operates in the PWM mode.                                                                                   |
| J3       | Open             | CLK/SEL connected to CLK/SEL pad     | CLK/SEL pin can be driven by an external source to select power mode, or a 200kHz to 400kHz signal to control switching fre- quency. |
| J4       | Shorted          | FB connected to GND                  | VOUT is preset to 3.3V.                                                                                                              |
| J4       | Open             | FB connected to the resistor divider | Resistors must be installed in R3 and R4 for proper circuit operation.                                                               |
| J5       | Shorted          | Shorted for normal operation         | VOUT connected to pull-up resistors.                                                                                                 |
| J5       | Open             | Pull-ups disconnected                | R7-R9 are disconnected so that MAX1701 shutdown current may be verified.                                                             |

Table 2. Jumper Position for Normal 3.3V Operation

| JUMPER   | SHUNT LOCATION   | PIN CONNECTION                      | MAX1701 OPERATION                                                                                                     |
|----------|------------------|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| J1       | 2 and 3          | ONA connected to VOUT               | MAX1701 is enabled.                                                                                                   |
| J2       | 1 and 2          | ONB connected to GND                | MAX1701 is enabled.                                                                                                   |
| J3       | 2 and 3          | CLK/SEL connected to VOUT           | High-power mode, MAX1701 operates in the PWM mode.                                                                    |
| J4       | Shorted          | FB connected to GND                 | VOUT is preset to 3.3V. This jumper must be shorted or resistors installed in R3 and R4 for proper circuit operation. |
| J5       | Shorted          | VOUT connected to pull-up resistors |                                                                                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component Selection

The final circuit performance is determined by the quality  of  the  components  surrounding the MAX1701. The power inductor must not saturate at the 1.6A maximum peak current produced by MAX1701. Inductors in the Component List all have high current ratings and low coil resistance.

The input and output capacitors must have low equivalent  series  resistance  (ESR)  to  handle  the  high  peak currents found in switching regulators. Low ESR is especially critical  in  low-voltage  circuits  to  reduce  the AC voltage across the capacitors. A higher ESR on the output capacitor will increase the output ripple. Consider using parallel capacitors to reduce the total ESR if the application requires lower output ripple. An additional output capacitor (C6) may be required for output current greater than 200mA or output voltages less than 3.3V.

A low-ESR input capacitor must be located physically close to the inductor. The Schottky diode must be con-

<!-- image -->

Figure 1.  MAX1701 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

nected between LX and POUT as close to the IC as possible. A Schottky diode is specified for the lower forward voltage drop as well as the fast switching characteristic.  Most  Schottky  diodes  with  a  sufficient  current rating will work. The diode for the evaluation board was selected for its small size.

A separate low-noise ground plane connects pin 5 to the reference and signal grounds. This low-noise ground plane is then connected to the power-ground plane at the PGND pin (Figure 4).

3

## MAX1701 Evaluation Kit

Figure 2.  MAX1701 EV Kit Component Placement Guide

<!-- image -->

Figure 4.  MAX1701 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 3.  MAX1701 EV Kit PC Board Layout-Component Side

<!-- image -->