<!-- lastmod 2022-08-03 -->
## MAX49140 Evaluation Kit

## General Description

The MAX49140 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX49140 30ns, rail-to-rail single supply comparator.

The MAX49140 EV kit comes with a MAX49140AXK/V+ installed  that  operates  off  a  V DD   supply  between  2.7V and 5.5V. The MAX49140AXK/V+ is fully specified over -40°C  to  +125°C  automotive  temperature  range  and  is AEC-Q100 qualified.

## Features

- Fast, 30ns Propagation Delay (10mV Overdrive)
- Low Power 100μA Supply Current (V DD = 3V)
- Optimized for 3V and 5V Applications
- Rail-to-Rail Input Voltage Range
- Low, 500μV Offset Voltage
- Internal Hysteresis for Clean Switching
- Output Swing 300mV of Power Rails
- CMOS/TTL-Compatible Outputs
- Small SC70 Package
- AEC-Q100 Qualified
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX49140

## Quick Start

## Required Equipment

- MAX49140 EV kit
- 2.7V to 5.5V, 100mA DC power supply
- Two precision voltage calibrators
- Two multimeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the MAX49140 devices:

- 1) Set the DC power supply output to 5V. Disable the output.
- 2) Verify that all components except R1/R2/R3 are properly installed.
- 3) Connect the 5V supply positive terminal to V DD test point on the EV kit. Use the first multimeter to measure the supply current (set the multimeter to measure μA current).
- 4) Connect the 5V supply ground terminal to GND test point on the EV kit.
- 5) Connect the second multimeter to measure the voltage on OUT test point on the EV kit.
- 6) Connect the first calibrator output (set to 0.5V) to IN\_P test point on the EV kit. Disable the output.
- 7) Connect the second calibrator output (set to 0.1V) IN\_N test point on the EV kit. Disable the output.
- 8) Enable the power supply.
- 9) Enable all the calibrators.
- 10) Verify that the first multimeter reads less than 180µA.
- 11)  Verify that the second multimeter reads 5V ±0.3V.
- 12)  Disable the calibrators.
- 13)  Disable the power supply output.
- 14) Set the first calibrator to 0.1V.
- 15) Set the second calibrator to 0.5V.
- 16)  Enable the power supply output.
- 17)  Enable the calibrators.
- 18) Verify that the first multimeter reads less than 180µA.
- 19)  Verify that the second multimeter reads 0V ±0.3V.

<!-- image -->

## MAX49140 Evaluation Kit

## Detailed Description of Hardware

The MAX49140 EV kit provides a proven layout for the MAX49140. The MAX49140 EV kit by default comes with the MAX49140 IC, which is a 30ns, rail-to-rail single supply comparator in 5-pin SC70 package. The EV kit oper -ates from a single 2.7V to 5.5V DC power supply.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Murata GCJ188R71H104KA12   |
| C2            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (0603) TAIYO YUDEN UMK107AB- 7105KA |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX49140EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX49140

## Add Extra Input Hysteresis

The MAX49140 has a built-in hysteresis  of  1.2mV  typical. If the environment noise or signal noise is large, the output  may  oscillate  when  the  input  differential  voltage is  around the hysteresis. To avoid this issue, the EV kit allows  users  to  add  extra  hysteresis  in  addition  to  the 1.2mV internal hysteresis by adding a positive feedback circuit. R3 and R4 pads are provided for this purpose. The extra  hysteresis  added  is  given  by  the  equation  below (assuming the high output is close to V DD ) and low output is close to ground):

HYSTERESIS = (R3/R4) x V DD

| DESIGNATION     |   QTY | DESCRIPTION                   |
|-----------------|-------|-------------------------------|
| GND             |     1 | Black test point              |
| IN_P, IN_N, OUT |     3 | White test points             |
| R1, R2, R3      |     0 | Not installed, 0603 resistors |
| R4              |     1 | 0Ω ±5% resistor (0603)        |
| U1              |     1 | MAX49140AXK/V+                |
| V DD            |     1 | Red test point                |

│

## MAX49140 EV Kit Schematic

<!-- image -->

│

## MAX49140 Evaluation Kit

## MAX49140 EV Kit PCB Layouts

MAX49140 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX49140 EV Kit PCB Layout-Top

<!-- image -->

MAX49140 EV Kit PCB Layout-Bottom

<!-- image -->

MAX49140 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX49140