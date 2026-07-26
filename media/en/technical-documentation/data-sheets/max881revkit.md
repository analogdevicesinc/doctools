<!-- lastmod 2022-08-02 -->
## General Description

The MAX881R IC is an inverting, charge-pump DC-DC converter with a low-noise, regulated output. Low output ripple voltage makes this device ideal for biasing the GaAsFETs commonly found in cellular telephone transmitters.

The MAX881R evaluation kit (EV kit) is a fully assembled and tested surface-mount board. Provisions are made for mounting a second voltage-divider resistor, which is required for setting output voltages other than -2V. A special scope-probe socket is also mounted on the board, so output noise can be observed on an oscilloscope.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1, C2, C3    |     3 | 1µF, 16V, low-ESR ceramic capacitors Taiyo Yuden EMK316BJ105KL  |
| C4            |     1 | 4.7µF, 10V, low-ESR ceramic capacitor Taiyo Yuden LMK316BJ475ML |
| J1            |     1 | Scope-probe connector Berg Electronics 33JR135-1                |
| JU1           |     1 | 2-pin jumper                                                    |
| R1            |     0 | Not installed                                                   |
| R2            |     1 | 100k Ω , 1% resistor                                            |
| R3, R4        |     2 | 1M Ω resistors                                                  |
| U1            |     1 | MAX881RREUB                                                     |
| None          |     1 | Shunt                                                           |
| None          |     1 | Printed circuit board                                           |

## Component Suppliers

| SUPPLIER         | PHONE          | FAX            |
|------------------|----------------|----------------|
| Berg Electronics | (317) 738-2800 | (317) 738-2858 |
| Sprague          | (603) 224-1961 | (603) 224-1430 |
| Taiyo Yuden      | (408) 573-4150 | (408) 573-4159 |

<!-- image -->

## Features

- ' 1mVp-p Output Voltage Ripple
- ' 2.5V to 5.5V Input Range
- ' Uses One 4.7µF and Three 1µF Ceramic Capacitors
- ' -2V Regulated Output (or Adjustable)
- ' 4mA Output Current
- ' Power OK ( POK ) Output
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP. RANGE    | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX881REVKIT | -40°C to +85°C | 10 µMAX      |

## Quick Start

The MAX881R EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 2.5V to 5.5V supply to the pad labeled VIN. Connect the ground lead to the pad labeled GND.
- 2) Connect a voltmeter and the load to the VOUT pad.
- 3) Make sure there is no shunt across JU1.
- 4) Turn on the power and verify that the output is -2V. You can insert a scope probe into J1 to observe the output noise. Be sure the scope ground makes contact with the outside of the connector.

1

## MAX881R Evaluation Kit

## Detailed Description

## Jumper Selection

The 2-pin header, JU1, controls pin 5 ( SHDN ) on the IC. Table 1 outlines the shunt positions for JU1.

The POK pad allows easy connection to an external system. This output pulls low when the bias voltage has reached 92.5% of its set value.

## Output Voltage Adjustment

For output voltages other than -2V, install R1 to complete the R1/R2 output voltage divider. R2 is a 100k Ω , 1% resistor. To maintain accuracy, use a 1% resistor for R1. Use the following equations to calculate R1:

<!-- formula-not-decoded -->

## Capacitor Selection

Use capacitors with a low effective series resistance (ESR), such as ceramic or surface-mount chip tantalum types.

Output ripple with the supplied components is typically 1mVp-p. For lower output ripple, replace C4 with a 10µF ceramic capacitor such as the Taiyo Yuden JMK316BJ106ML or a 10µF tantalum such as the Sprague 595D106X0010A2.

## Table 1.  JU1 Shunt Position

Figure 1.  MAX881R EV Kit Schematic

| SHUNT POSITION   | MAX881R FUNCTION                                |
|------------------|-------------------------------------------------|
| Open             | Device enabled, or apply signal to the SHDN pad |
| Closed           | Device disabled                                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX881R Evaluation Kit

<!-- image -->

Figure 2.  MAX881R EV Kit Component Placement GuideComponent Side

Figure 3.  MAX881R EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX881R EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX881R Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products