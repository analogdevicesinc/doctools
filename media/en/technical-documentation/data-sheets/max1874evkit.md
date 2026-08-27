<!-- lastmod 2022-08-03 -->
## General Description

The MAX1874 evaluation kit (EV kit) is designed to evaluate the MAX1874 USB and/or AC-adapter-powered, single-cell  Li+  battery  charger.  The  EV  kit  board  contains  an  AC-adapter power jack, a male USB type-B connector, and a charging LED indicator.

The MAX1874 EV kit has four jumpers (JU1-JU4) to easily change the battery charger's configuration. Jumper JU1 enables or disables charging, jumper JU2 selects the USB charging current for either a maximum of  100mA or 500mA, jumper JU3 allows thermistor sensing, and jumper JU4 sets the DC input fast-charge current for either 750mA or 1A. The DC input fastcharge current is also resistor-adjustable.

The DC input accepts up to 18V, but inhibits charging above 6.2V. The USB input accepts inputs up to 6.5V.

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| C1            |     1 | 4.7µF ± 10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475K             |
| C2            |     1 | 1µF ± 10%, 10V X7R ceramic capacitor (0603) TDK C1608X7R1A105K                |
| C3            |     1 | 2.2µF ± 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K             |
| C4            |     1 | 2.2µF ±20%, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ225MG        |
| C5            |     1 | 4.7µF ± 20%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E475M              |
| C6            |     1 | 0.1µF ± 10%, 10V X5R capacitor (0402) TDK C1005X5R1A104K                      |
| D1            |     0 | Not installed (SOD-123)                                                       |
| D2, D3        |     2 | 500mA Schottky diodes (SOD-123) Fairchild Semiconductor MBR0520L Top-Mark: B2 |
| D4            |     1 | Small red LED                                                                 |
| J1            |     1 | Male USB type-B connector, right angle Assmann Electronics AU-Y1007           |

- ♦ DC Input Up to 18V
- ♦ USB Input Up to 6.5V
- ♦ Charge from USB and/or AC Adapter
- ♦ Male USB Type-B Connector
- ♦ AC-Adapter Power Jack
- ♦ Easy Configuration Changes Using Jumpers

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX1874EVKIT | 0°C to +70°C | 16 (5 ✕ 5) Thin QFN |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| J2            |     1 | 2mm power jack, right angle                                                                 |
| JU1, JU2      |     2 | 3-pin headers                                                                               |
| JU3, JU4      |     2 | 2-pin headers                                                                               |
| None          |     4 | Shunts                                                                                      |
| Q1            |     0 | Not installed (SuperSOT-3)                                                                  |
| Q2, Q3        |     2 | P-channel MOSFETs 0.055 Ω , -20V (SuperSOT-3) Fairchild Semiconductor FDN302P Top-Mark: 302 |
| R1            |     1 | 10k Ω ± 5% resistor (0603)                                                                  |
| R2            |     1 | 1k Ω ± 5% resistor (0603)                                                                   |
| R3, R4        |     0 | Not installed (0603)                                                                        |
| R5            |     1 | 100k Ω ± 1% resistor (0603)                                                                 |
| R6            |     1 | 301k Ω ± 1% resistor (0603)                                                                 |
| R7            |     1 | 3k Ω ± 5% resistor (0603)                                                                   |
| U1            |     1 | MAX1874ETE (16-pin 5 ✕ 5 thin QFN)                                                          |
| None          |     1 | MAX1874 EV kit PC board                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX1874 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Assmann Electronics     | 877-277-6266 | www.usa-assmann.com   |
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| TDK                     | 847-803-6100 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1874 when contacting these component suppliers.

## Recommended Equipment

- +5V DC power supply
- Single-cell Li+ battery
- Digital voltmeter (DVM)

## Quick Start

The MAX1874 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed. Observe all precautions on the battery manufacturer's data sheet. Only use a single Li+ cell with this charger.

- 1) Ensure a shunt is placed across pins 1-2 of jumper JU1 to enable charging.
- 2) Ensure a shunt is placed across pins 1-2 of jumper JU2 to set the maximum USB charging current to 500mA.
- 3) Ensure a shunt is ON jumper JU3 to disable thermistor sensing.
- 4) Ensure a shunt is ON jumper JU4 to set the DC input fast-charging current to 750mA.
- 5) Connect the +5V DC power supply across the USBIN and GND pads.
- 6) Turn on the power supply.
- 7) Using the DVM, verify that the battery voltage between the BATT+ and GND pads is 4.2V ( ± 0.75%).
- 8) Observe the correct Li+ polarity. Connect a singlecell Li+ battery between the BATT+ and GND pads.
- 9) Monitor the BATT+ voltage until it reaches 4.2V ( ± 0.75%).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

## Jumper Selection

## Table 1. Enable Charging (EN)

| JUMPER   | SHUNT POSITION   | DESCRIPTION               |
|----------|------------------|---------------------------|
| JU1      | 1-2              | Enable charging (default) |
| JU1      | 2-3              | Disable charging          |

Caution: Do not connect an external controller to the EN pad while a shunt is on jumper JU1.

## Table 2. Maximum USB Charging Current (USEL)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU2      | 1-2              | Maximum of 500mA of USB charging (default) |
| JU2      | 2-3              | Maximum of 100mA of USB charging           |

Caution: Do not connect an external controller to the USEL pad while a shunt is on jumper JU2.

## Table 3. Thermistor Setting (THRM)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                           |
|----------|------------------|---------------------------------------------------------------------------------------|
| JU3      | ON               | Disable thermistor sensing (default)                                                  |
| JU3      | OFF              | Enable thermistor sensing (see the Using Thermistor Sensing section for more details) |

## Table 4. DC Input Fast-Charge Current (DCI)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                     |
|----------|------------------|-------------------------------------------------|
| JU4      | ON               | DC input fast-charge current is 750mA (default) |
| JU4      | OFF              | DC input fast-charge current is 1A              |

<!-- image -->

## Evaluating Other DC Input FastCharge Currents (IBATT)

The MAX1874 EV kit is preset with a DC input fastcharge current (IBATT) of 750mA. Taking the shunt OFF jumper JU4 changes IBATT to 1A. However, IBATT can also be resistor-programmed by placing the shunt ON jumper JU4 and changing the R5 and R6 resistors using the equation below:

I BATT = (R6 / (R5 + R6)) A

## Allowing USB to Power the System Load

The MAX1874 EV kit is shipped with Q1 and D1 not installed. To allow the USB to power the system load, install a P-channel MOSFET such as the Fairchild FDN302P, and a Schottky diode, such as the Fairchild MBR0520L, on the Q1 and D1 pads, respectively, of the MAX1874 EV kit board.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1874 Evaluation Kit

## Using Thermistor Sensing

The MAX1874 EV kit is preset with thermistor sensing disabled through jumper JU3. Removing jumper JU3 and installing a 10k Ω ±1% resistor for R4 allows an NTCtype thermistor (10k Ω at +25°C) to be used. The thermistor  must be located in close proximity to the single-cell Li+ battery with the ungrounded end connected to the THRM pad of the MAX1874 EV kit board. Charging is interrupted when the cold temperature limit is reached, which typically occurs at VTHRM ≥ 2.22V. Charging also is interrupted when the hot temperature limit is reached, which typically occurs at VTHRM ≤ 0.87V.

## MAX1874 Evaluation Kit

Figure 1. MAX1874 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1874 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1874 Evaluation Kit

Figure 3. MAX1874 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1874 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5