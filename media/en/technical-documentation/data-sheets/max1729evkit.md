<!-- lastmod 2022-08-02 -->
## General Description

The MAX1729 evaluation kit (EV kit) is a low-power, step-up DC-DC converter followed by a low-dropout linear regulator. It accepts a positive input voltage between 2.7V to 5.5V and converts it to an output voltage ranging from 2.5V to 16V. The output voltage is dynamically adjustable through an external 3kHz to 12kHz pulse-width-modulated (PWM) control signal. An on-chip temperature sensor provides compensation for display temperature characteristics. This makes the MAX1729 ideally suited for electrically controlled birefringence (ECB) and LCD bias-supply generation

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                      |
|---------------|-------|--------------------------------------------------|
| C1, C6        |     2 | 0.1µF ceramic capacitors                         |
| C2            |     0 | Not installed                                    |
| C3            |     1 | 0.068µF ceramic capacitor                        |
| C4, C7        |     2 | 1µF ceramic capacitors Taiyo Yuden TMK316BJ105KL |
| C5            |     1 | 1000pF ceramic capacitor                         |
| JU1           |     1 | 3-pin jumper                                     |
| L1            |     1 | 220µH inductor Murata LQH3C221K34                |
| R1-R5         |     0 | Not installed                                    |
| U1            |     1 | MAX1729EUB                                       |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Murata      | 814-237-1431 | 814-238-0490 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

<!-- image -->

## Features

- ' High-Accuracy Reference Voltage (±1%)
- ' On-Chip Temperature-Sensor Output
- ' 2.7V to 5.5V Input Range
- ' Dynamic Control of Output Voltage
- ' 0.4µA Typical Shutdown Current
- ' 10-Pin µMAX Package
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1729EVKIT | 0°C to +70°C  | 10µMAX       |

## Quick Start

The MAX1729 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 2.7V to 5.5V supply to the pads marked VIN and GND.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Place the shunt on JU1 across pins 2 and 3.
- 4) Turn on the power and verify that the output voltage is approximately 16.35V.
- 5) For other output voltages, refer to the Output Voltage Control section.

## Detailed Description

## Jumper Selection

Jumper JU1, in the 2-3 position, connects CTLIN to VIN. This places the output voltage at maximum and is equivalent to applying a PWM signal with a 100% duty cycle.

In  the  1-2  position,  CTLIN  is  connected  to  GND.  This places the MAX1729 into shutdown mode and is equivalent to applying a PWM signal with a 0% duty cycle.

When applying a PWM signal to the CTLIN pad, the shunt must be removed from jumper JU1.

1

## MAX1729 Evaluation Kit

## Table 1.  Jumper JU1 Functions

| JUMPER   | JUMPER POSITION   | FUNCTION                                                        |
|----------|-------------------|-----------------------------------------------------------------|
| JU1      | 2-3               | CTLIN = high, MAX1729 enabled. Output voltage at maximum value. |
| JU1      | 1-2               | CTLIN = low, MAX1729 in shutdown mode.                          |
| JU1      | Open              | Drive CTLIN pad with external PWM signal.                       |

## Output Voltage Control

The output voltage of the MAX1729 EV kit is dynamically adjustable through a 3kHz to 12kHz PWM control signal applied to the CTLIN pad. The output is adjustable from 2.5V to 16V in internal feedback mode or from 2.5V to 18V in external feedback mode.

The EV kit is initially set up for internal feedback operation. To use the EV kit for external feedback operation, cut the traces across R2 and R4 and insert resistors R1-R5. Refer to the MAX1729 data sheet to determine the resistor values.

Figure 1.  MAX1729 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Temperature Compensation

The MAX1729 EV kit includes a TC pad, which is a temperature-sensor output. This pad is used to compensate for  ECB color or LCD contrast variations caused by changes in temperature. In internal feedback mode, this output is read by an external ADC and used to adjust the duty cycle of the PWM control signal. In external feedback mode, this output is summed directly into the feedback-resistor network. Refer to the MAX1729 data sheet to determine feedback-resistor values.

<!-- image -->

<!-- image -->

Figure 2.  Component Placement Guide-Component Side

Figure 3.  PC Board Layout-Component Side

<!-- image -->

Figure 4.  PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1729 Evaluation Kit

NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

4

© 1999 Maxim Integrated Products Printed USA

is a registered trademark of Maxim Integrated Products.