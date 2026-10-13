<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1703 evaluation kit (EV kit) provides a regulated 5.0V output while operating on input voltages as low as 1.2V. The input may be a DC source or a 1 to 3-cell battery.  Efficiency  is  up  to  95%,  and  output  loads  are up to 1A.

The kit, which uses surface-mount components, is fully assembled and tested for quick evaluation. Jumpers are provided to select the output voltage, switching mode, and shutdown control.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                             |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.22µF, 25V ceramic capacitors                                                                                          |
| C4            |     1 | 100µF, 10V low-ESR tantalum capacitor: AVX TPSD107M010R0100 or Sprague 593D107X0010D                                    |
| C5, C6        |     2 | 220µF, 10V low-ESR tantalum capacitors AVX TPSE227M010R0100 or Sprague 593D227X0010E                                    |
| C7            |     1 | Not installed, optional user capacitor                                                                                  |
| D1            |     1 | 0.5A, 20V Schottky diode Motorola MBR0520L                                                                              |
| L1            |     1 | 4.7µH, 3.2A power inductor Sumida CDH74-4R7 Coilcraft DO3316-4R7, Coiltronics UP2B-4R7 or Sumida CDRH 104, 4746-JPS-007 |
| J1, J2        |     2 | 3-pin jumpers                                                                                                           |
| J3, J4        |     2 | 2-pin jumpers                                                                                                           |
| R1, R7, R5    |     3 | 100k Ω 1% resistors                                                                                                     |
| R2, R4, R6    |     0 | Not installed, user-selected resistor                                                                                   |
| R3            |     1 | 10 Ω , 5% resistor                                                                                                      |
| R8, R9        |     2 | 100k Ω , 5% resistors                                                                                                   |
| R10, R11      |     2 | 1M Ω , 5% resistors                                                                                                     |
| U1            |     1 | MAX1703ESE                                                                                                              |
| None          |     4 | Shunts                                                                                                                  |
| None          |     1 | 3.40' X 2.40' printed circuit board                                                                                     |
| None          |     1 | MAX1703 data sheet                                                                                                      |

## MAXIM

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 5.0V Output
- ' 1A Output Current
- ' 1.2V to 5.5V Input
- ' Up to 95% Efficiency
- ' 0.1µA Shutdown Current
- ' 300kHz PWM Operation
- ' Optional Low-Power Mode
- ' Small Surface-Mount Components

## Ordering Information

| PART         | TEMP. RANGE   | PIN-PACKAGE   |
|--------------|---------------|---------------|
| MAX1703EVKIT | 0°C to +70°C  | 16 Narrow SO  |

## Component Suppliers

| SUPPLIER    | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (803) 946-0690 | (803) 626-3123 |
| Coilcraft   | (847) 639-6400 | (847) 639-1469 |
| Coiltronics | (561) 241-7876 | (561) 241-9339 |
| Motorola    | (602) 244-5303 | (602) 244-4015 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |
| Sumida      | (847) 956-0666 | (847) 956-0702 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1703 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1703 EV kit is shipped fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify  that  the  shunts  are  connected as listed in Table 2 for a 5V output.
- 2) Connect a 1.2V to 5.5V supply to the VIN pad. The ground connects to the GND pad.
- 3) Connect a voltmeter to the VOUT pad.
- 4) Turn on the power, and verify that the output voltage is 5V.
- 5) Connect a load if any.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selections

Four jumpers on the printed circuit board allow user selection of several configurations. Table 1 lists the jumpers and their functions. Table 2 lists the jumper positions when the board is set for normal 5V output operation.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Selection

The final circuit performance is determined by the quality  of  the  components  surrounding the MAX1703. The

## Table 1.  Jumper Functions

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                           | MAX1703 OPERATION                                                                                                                                      |
|----------|------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1 & 2            | ON connected to GND                      | The MAX1703 is enabled.                                                                                                                                |
| J1       | 2 & 3            | ON connected to VOUT                     | The MAX1703 is disabled.                                                                                                                               |
| J1       | Open             | ON is not controlled by the board.       | ON must be driven by a signal connected to the ON pad.                                                                                                 |
| J2       | 1 & 2            | CLK/SEL pin connected to GND             | Low-power mode, the MAX1703 operates in the PFM mode.                                                                                                  |
| J2       | 2 & 3            | CLK/SEL pin connected to VOUT            | High-power mode, the MAX1703 operates in the PWM mode.                                                                                                 |
| J2       | Open             | CLK/SEL connected to CLK/SEL pad         | CLK/SEL pin can be driven by an external source to select the power mode or a 200kHz to 400kHz signal to control the switching frequency.              |
| J3       | Shorted          | FB pin connected to GND                  | VOUT preset to 5V.                                                                                                                                     |
| J3       | Open             | FB pin connected to the resistor divider | Output voltage determined by the R4-R5 resistor divider. Note: A resistor must be installed in R4 to set the output voltage before removing the shunt. |
| J4       | Shorted          | VOUT connected to pull-up resistors      | This jumper is necessary for normal circuit operation.                                                                                                 |
| J4       | Open             | The pull-up resistors are disconnected   | The J4 shunt should only be removed when testing the MAX1703 shutdown current.                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

power inductor must not saturate at the 3.2A peak current  produced by MAX1703. All inductors listed in the component list have high current ratings and low coil resistance.

The input and output capacitors must have low equivalent-series resistance (ESR) to handle the high peak currents found in switching regulators. Low ESR is especially critical  in  low-voltage  circuits  to  reduce  the AC voltage across the capacitors. A higher ESR on the output capacitor will increase the output ripple. Consider using  parallel capacitors to reduce the total ESR if the application requires lower output ripple.

A low-ESR input capacitor must be located physically close to the inductor. A Schottky diode is used for the lower forward voltage drop as well as the fast switching characteristic. The diode selected for the evaluation board was selected for its small size. The Schottky diode must be connected between LX and POUT as close to the IC as possible.

A separate low-noise ground plane connects pin 5 to the reference and signal grounds. This low-noise ground plane is then connected to the power ground plane at the two PGND pins (Figure 4).

## MAX1703 Evaluation Kit

Table 2.  Jumper Position for Normal 5.0V Operation

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                           | MAX1703 OPERATION                                      |
|----------|------------------|------------------------------------------|--------------------------------------------------------|
| J1       | 1 & 2            | ON pin connected to GND.                 | The MAX1703 is enabled.                                |
| J2       | 2 & 3            | CLK/SEL pin connected to VOUT.           | High-power mode; the MAX1703 operates in the PWM mode. |
| J3       | Shorted          | FB pin connected to GND.                 | VOUT is preset to 5V.                                  |
| J4       | Shorted          | VOUT connected to the pull-up resistors. | This shunt is necessary for normal circuit operation.  |

Figure 1.  MAX1703 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1703 Evaluation Kit

<!-- image -->

Figure 2.  MAX1703 EV Kit Component Placement Guide

Figure 3.  MAX1703 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1703EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600