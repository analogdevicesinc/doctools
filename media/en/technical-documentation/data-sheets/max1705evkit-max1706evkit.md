<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1705 evaluation kit (EV kit) is a step-up switching regulator for battery-powered systems operating from 1 to 3 NiCd/NiMH cells or 1 Li-Ion cell. The EV kit accepts a +0.9V to +4.5V input and converts it to a 4.5V step-up output and a 3.3V linear-regulator output. It provides low quiescent current, high-efficiency pulsefrequency-modulation operation for maximum battery life,  and  a  high-power,  fixed-frequency pulse-widthmodulation mode. The MAX1705 features a built-in, low-dropout linear post-regulator that reduces high-frequency ripple.

The MAX1705 EV kit is a fully assembled and tested surface-mount circuit board. It can also be used to evaluate the MAX1706.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                     |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 22µF, 25V tantalum capacitor Sprague 593D226X0025D2W or AVX TPSD226M025R0200                                    |
| C8            |     1 | 220µF, 10V low-ESR tantalum capacitor Sprague 594D227X0010D2T, Sprague 593D227X0010D2W, or AVX TPSE227M010R0100 |
| C3            |     1 | 0.1µF ceramic capacitor                                                                                         |
| C4            |     1 | 22µF, 6.3V tantalum capacitor Sprague 595D226X06R3B2T                                                           |
| C5, C7, C9    |     3 | 0.33µF ceramic capacitors                                                                                       |
| C6            |     1 | 22pF ceramic capacitor                                                                                          |
| C2            |     0 | Open                                                                                                            |
| D1            |     1 | Schottky diode Motorola MBR0520L                                                                                |
| L1            |     1 | 10µH inductor Sumida CDR74B-100                                                                                 |
| R1            |     1 | 267k Ω , 1% resistor                                                                                            |
| R2, R4        |     2 | 100k Ω , 1% resistors                                                                                           |
| R3            |     1 | 165k Ω , 1% resistor                                                                                            |
| R5            |     0 | Open                                                                                                            |
| R6            |     1 | 0 Ω resistor                                                                                                    |
| R7, R8, R9    |     3 | 100k Ω , 5% resistors                                                                                           |
| U1            |     1 | MAX1705EEE (QSOP-16)                                                                                            |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                                                                   |
| JU4           |     1 | 3-pin header                                                                                                    |
| None          |     1 | Shunt                                                                                                           |
| None          |     1 | MAX1705 PC board                                                                                                |

## MAXIM

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +0.9V to +4.5V Input Range
- '
- High-Power Output: 4.5V or Adjustable
- ' Dual Outputs:  Step-Up and Linear Regulator
- ' 200mA Max Linear-Regulator Output Current
- ' Optional Track Mode for Highest Efficiency
- ' Low-Noise, 3.3V or Adjustable Output Voltage
- ' High-Efficiency Step-Up Converter:  Up to 96%
- ' Up to 850mA Total Output Current
- ' Internal 300kHz Oscillator
- ' Internal MOSFET and Synchronous Rectifier
- ' 1µA Shutdown Current
- ' Power-Good Output
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1705EVKIT | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX1706, request a MAX1706EEE free sample with the MAX1705 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE          | FAX            |
|-----------------|----------------|----------------|
| AVX             | (803) 946-0690 | (803) 626-3123 |
| Coilcraft       | (847) 639-6400 | (847) 639-1469 |
| Coiltronics     | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay     | (402) 564-3131 | (402) 563-6418 |
| Motorola        | (602) 303-5454 | (602) 994-6430 |
| Sprague         | (603) 224-1961 | (603) 224-1430 |
| Sumida          | (847) 956-0666 | (847) 956-0702 |
| Vishay/Vitramon | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX1705 when contacting these component suppliers.

## MAX1705 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1705 evaluation kit (EV kit) is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +2.4V power supply to the VIN pad. The ground connects to the GND pad.
- 2) Connect voltmeters, if any, to the POUT and VOUT pads.
- 3) Turn on the power supply and verify that POUT is 4.5V and VOUT is 3.3V.
- 4) Apply the loads, if any.
- 5) For other output voltages, refer to the Setting the Output Voltages section in the MAX1705/MAX1706 data sheet for instructions on selecting the feedback resistors.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1705 EV kit is designed to supply both power and low-noise circuitry in portable RF and dataacquisition instruments. It combines a linear regulator, step-up switching regulator, N-channel power MOSFET, P-channel synchronous rectifier, precision reference, and low-battery comparator in a single, tiny 16-pin QSOP. The switching DC-DC converter boosts an input from one or two cells to a 4.5V output. An on-chip linear regulator also provides a low-noise 3.3V output.

The EV kit operates in a constant-frequency (300kHz), low-noise pulse-width-modulation (PWM) mode with 450mA total output current capability at VIN = 2.4V. A low-quiescent-current standby pulse-frequency-modulation  (PFM) mode offers a total output current up to 120mA and reduces quiescent power consumption to 500µW.

## Shutdown Mode

The MAX1705 EV kit features a shutdown mode that reduces quiescent supply current to 7µA (1µA for the IC plus 6µA for the feedback resistors) to preserve battery  life.  During  shutdown,  the  reference,  the  low-battery comparator, and all feedback and control circuitry are turned off. The step-up converter's output drops to within a Schottky diode drop below the input, and the linear-regulator output is turned off.

The two-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | ONA PIN           | MAX1705 OUTPUT                                  |
|------------------|-------------------|-------------------------------------------------|
| On               | Connected to GND  | Shutdown mode, VOUT = 0V, POUT = V IN - V DIODE |
| Off              | Connected to POUT | MAX1705 enabled, VOUT = 3.3V, POUT = 4.5V       |

## Switching Mode

The two-pin header JU2 selects either PFM or PWM switching mode. Table 2 lists the selectable jumper options.

Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | CLK/SEL PIN       | SWITCHING MODE                                         |
|------------------|-------------------|--------------------------------------------------------|
| On               | Connected to GND  | PFM mode, I TOTAL = 120mA at 2.4V input                |
| Off              | Connected to POUT | Fixed PWM mode (300kHz), I TOTAL = 450mA at 2.4V input |

## Tracking Mode

Connecting the TRACK input to POUT implements a tracking mode that sets the step-up converter output to 300mV above the linear-regulator output, improving efficiency. In tracking mode, feedback for the step-up converter is derived from the OUT pin. Connect TRACK to GND for normal operation.

The two-pin header JU3 selects the tracking mode. Table 3 lists the selectable jumper options.

Table 3.  Jumper JU3 Functions

| SHUNT LOCATION   | TRACK PIN         | TRACKING MODE                           |
|------------------|-------------------|-----------------------------------------|
| On               | Connected to POUT | Tracking mode; POUT is 300mV above VOUT |
| Off              | Connected to GND  | Normal operation                        |

## Power-Good Output

The MAX1705 has an on-chip comparator for powergood detection. This comparator can be used to detect a low battery voltage at the input or low-voltage output. The MAX1705 EV kit is supplied with the comparator's

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1.  MAX1705 EV Kit Schematic Diagram

<!-- image -->

LBN input connected to the reference, and the LBP input connected to GND through R6 (0 Ω ). LBP can be connected to an external resistor-divider, R5-R6, to set the comparator threshold. PWRGD, an open-drain output, is low when LBN &gt; LBP. Refer to the Low-Battery Comparator section of the MAX1705/MAX1706 data sheet for instructions on selecting R5 and R6. The three-pin header JU4 selects input or output detection. Remove R6 and refer to the Low-Battery Comparator section of the MAX1705/MAX1706 data sheet to determine R5 and R6. Table 4 lists the selectable jumper options.

<!-- image -->

## Evaluating the MAX1706

The MAX1705 EV kit can also be used to evaluate the MAX1706. Simply replace the MAX1705EEE with the MAX1706EEE and replace the 10µH inductor, L1, with a 22µH inductor (Sumida CD74B-220).

## Table 4.  Jumper JU4 Functions

| SHUNT LOCATION   | PWRGD OUTPUT                      |
|------------------|-----------------------------------|
| 1 and 2          | Detects low-battery voltage input |
| 2 and 3          | Detects low-voltage output        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1705 Evaluation Kit

<!-- image -->

Figure 2.  MAX1705 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1705 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1705 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600