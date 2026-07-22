<!-- lastmod 2022-08-05 -->
## General Description

The MAX8614 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board. The EV kit contains the MAX8614B (0.8A/0.75A current limit), a dualoutput, step-up DC-DC converter that generates an adjustable positive and an adjustable negative output. The EV kit accepts a 2.7V to 5.5V input and provides a +15V and -7.5V output at 1MHz fixed PWM operation.

The MAX8614 EV kit can also be used to evaluate the MAX8614A, a dual-output, step-up DC-DC converter that has a lower current limit (0.44A/0.33A).

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| AVX         | 843-946-0238 | www.avxcorp.com       |
| Central     | 631-435-1110 | www.centralsemi.com   |
| Murata      | 770-436-1300 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |
| TOKO        | 847-297-0070 | www.tokoam.com        |

Note: Indicate you are using the MAX8614A/MAX8614B when contacting these manufacturers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMKBJ212106MG TDK C2012X5R0J106M or equivalent |
| C3            |     1 | 4.7µF ±20%, 25V X5R ceramic capacitor (0805) AVX 08053D475MAT or equivalent                              |
| C4            |     1 | 2.2µF ±10%, 25V X5R ceramic capacitor (0805) Murata FRM219R61E225KA TDK C2012S5R1E225K or equivalent     |
| C5            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0402) Taiyo Yuden JMK105BJ105MV TDK C1005X5R0J105M or equivalent   |
| C6            |     1 | 1µF ±10%, 16V X5R ceramic capacitor (0603) Murata GRM188R61C1405K TDK C1608X5R1C105K or equivalent       |
| C7            |     1 | 0.22µF ±20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J224M or equivalent                          |

- ♦ 2.7V to 5.5V Input Range
- ♦ Adjustable Output VBST = +15V (At 20mA) VINV = -7.5V (At 80mA)
- ♦ Adjustable Up to +24V and Down to -10V at a +5.5V Input
- ♦ 0.1µA (typ) IC Shutdown Current
- ♦ Fixed 1MHz PWM Switching Frequency
- ♦ Surface-Mount Component Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX8614EVKIT | 0°C to +70°C | 14 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| D1, D2        |     2 | 20V, 0.5A Schottky diodes (SOD-123) Central CMHSH5-2L (top mark: C2L) |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                         |
| L1            |     1 | 2.0µH, 1.4A power inductor TOKO 1098AS-2R0M                           |
| L2            |     1 | 4.7µH, 0.8A power inductor TOKO 1068AS-4R7N (top mark: AJ)            |
| R1            |     1 | 150k Ω ±1% resistor (0402)                                            |
| R2            |     1 | 24.9k Ω ±1% resistor (0402)                                           |
| R3            |     1 | 698k Ω ±1% resistor (0402)                                            |
| R4            |     1 | 49.9k Ω ±1% resistor (0402)                                           |
| R5            |     1 | 100k Ω ±5% resistor (0402)                                            |
| U1            |     1 | MAX8614BETD+ (14-pin TDFN, 3mm x 3mm)                                 |
| -             |     3 | Shunts                                                                |
| -             |     1 | MAX8614 PC board                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

## MAX8614 Evaluation Kit

## Quick Start

The MAX8614 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- 3.6V, 2A power supply
- Two voltage meters

## Procedure

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 (ONBST = high) and JU3 (ONINV = high); pins 2 and 3 of jumper JU2 (SEQ = low).
- 2) Connect the 3.6V power supply to the VBATT pad. Connect the power-supply ground to the GND pad.
- 3) Connect a voltmeter and load (if any) across the VBST and GND pads, and connect another voltmeter and load (if any) across the VINV and GND pads.
- 4) Turn on the power supply.
- 5) Verify that outputs are VBST = +15V and VINV = -7.5V.

## Detailed Description

The MAX8614 EV kit is a fully assembled tested surface-mount circuit board. The EV kit generates both a positive 15V and negative 7.5V output. The positive output delivers up to 20mA while the inverter supplies up to 80mA with a 2.7V to 5.5V input voltage.

## Jumper Selection

The MAX8614 EV kit incorporates jumpers JU1, JU2, and JU3 to control the ONBST, SEQ, and ONINV pins, respectively. See Tables 1, 2, and 3 for jumper functions.

## Table 1. JU1 Functions (ONBST)

| JU1 SHUNT LOCATION     | ONBST PIN              | VBST OUTPUT                                                  |
|------------------------|------------------------|--------------------------------------------------------------|
| Pins 1 and 2 (default) | Connected to VPWR      | Enabled                                                      |
| Pins 2 and 3           | Connected to GND       | Disabled                                                     |
| Open                   | Connected to ONBST pad | VBST output state depends on the external ONBST signal level |

## Table 2. JU2 Functions (SEQ)

| JU2 SHUNT LOCATION     | SEQ PIN              | EV KIT POWER-ON SEQUENCING                                                                                        |
|------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------|
| Pins 1 and 2           | Connected to VPWR    | Boost output power on first                                                                                       |
| Pins 2 and 3 (default) | Connected to GND     | Both outputs power on at the same time (if ONBST = ONINV or can be controlled independently with ONBST and ONINV) |
| Open                   | Connected to SEQ pad | Power-on sequencing depends on the external SEQ signal level                                                      |

## Table 3. JU3 Functions (ONINV)

| JU3 SHUNT LOCATION     | ONINV PIN              | VINV OUTPUT                                                  |
|------------------------|------------------------|--------------------------------------------------------------|
| Pins 1 and 2 (default) | Connected to VPWR      | Enabled                                                      |
| Pins 2 and 3           | Connected to GND       | Disabled                                                     |
| Open                   | Connected to ONINV pad | VBST output state depends on the external ONINV signal level |

## Evaluating Other Output Voltages

The MAX8614 EV kit output voltages are preset at +15V and -7.5V. To generate voltages other than the preset voltages, change the feedback resistors R1 to R4.

Select the feedback resistors R2 and R4 in the 20k Ω to 100k Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFBP = 1.01V.

## Evaluating the MAX8614A

The MAX8614 EV kit can be used to evaluate the MAX8614A. To evaluate the MAX8614A with the MAX8614 EV kit, replace the MAX8614BETD+ with the MAX8614AETD+. The power output capability will be reduced. Refer to the MAX8614A/MAX8614B data sheet for selection of components.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8614 Evaluation Kit

<!-- image -->

Figure 1. MAX8614 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8614 Evaluation Kit

<!-- image -->

Figure 2. MAX8614 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX8614 EV Kit PC Board Layout-Solder Side

Figure 3. MAX8614 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX8614 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet