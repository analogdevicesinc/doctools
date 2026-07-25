<!-- lastmod 2022-08-03 -->
## General Description

The MAX4206 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX4206 logarithmic amplifier. The MAX4206 computes the log ratio of an input current relative to a reference current and provides a corresponding voltage output with a default 0.25V/decade scale factor. The EV kit operates from a single +2.7V to +11V supply or from dual ±2.7V to ±5.5V supplies, with the ability to select one of four reference currents.

The MAX4206 EV kit can be used to evaluate the MAX4207 by changing the IC and the input RC networks R1, R2, C7, and C8.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 16V X5R ceramic capacitor (1206) TDK C3216X5R1C106M                                |
| C2            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106MG or TDK C2012X5R0J106M  |
| C3-C6         |     4 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K                              |
| C7, C8        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J or TDK C1608C0G1H101J      |
| D1, D2        |     0 | Not installed, photodiode (TO-46)                                                             |
| R1, R2        |     2 | 100 Ω ±1% resistors (0603)                                                                    |
| R3            |     0 | Not installed, resistor (0603)                                                                |
| R4            |     0 | Not installed, potentiometer                                                                  |
| R5            |     1 | 30.1k Ω ±0.1%, precision chip resistor (0603) ICR PCF-W0603R-03-3012-B or Vishay P0603K3012BB |

<!-- image -->

## Features

- ♦ +2.7V to +11V Single-Supply Operation or ±2.7V to ±5.5V Dual-Supply Operation
- ♦ Selectable 10nA/100nA/1µA/10µA On-Board Reference Current
- ♦ Adjustable Output Scale Factor
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | PIN PACKAGE                 |
|--------------|--------------|-----------------------------|
| MAX4206EVKIT | 0°C to +70°C | 16 Thin QFN-EP* (4mm x 4mm) |

Note: To evaluate the MAX4207, order a MAX4207ETE free sample with the MAX4206EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| R6-R9         |     4 | 10k Ω ±0.1%, precision chip resistors (0603) IRC PCF-W0603R-03-1002-B or Vishay P0603K1002BB      |
| R10           |     1 | 4.99M Ω ±0.5%, precision chip resistor (0805) IRC CR0805F4M99D or Vishay D11P10049940.5PN         |
| R11           |     1 | 499k Ω ±0.5%, precision chip resistor (0805) IRC PCF-W0805R-03-4993-D or Vishay D11P10049930.5PN  |
| R12           |     1 | 49.9k Ω ±0.5%, precision chip resistor (0603) IRC PCF-W0603R-01-4992-D or Vishay D11P10049920.5PN |
| R13           |     1 | 4.99k Ω ±0.5%, precision chip resistor (0603) IRC PCF-W0603R-02-4991-D or Vishay D11P10049910.5PN |
| R14           |     0 | Not installed, shorted by PC trace (0603)                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX4206 Evaluation Kit

| DESIGNATION               |   QTY | DESCRIPTION                              |
|---------------------------|-------|------------------------------------------|
| U1                        |     1 | MAX4206ETE (16-pin TQFN 4mm x 4mm)       |
| J1, J2                    |     0 | Not installed, edge-mount SMA connectors |
| JU1, JU6, JU9, JU10, JU11 |     5 | 2-pin headers                            |

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION        |
|--------------------|-------|--------------------|
| JU2, JU5, JU7, JU8 |     4 | 3-pin headers      |
| JU3                |     1 | 5-pin header       |
| JU4                |     1 | 4-pin header       |
| None               |    11 | Shunts             |
| None               |     1 | MAX4206/7 PC board |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| IRC         | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note: Indicate that you are using the MAX4206/MAX4207 when contacting these suppliers.

## Quick Start

The MAX4206 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are complete.

## Recommended Equipment

- Current source capable of sourcing 10nA to 1mA current
- Single +2.7V to +11V, 20mA DC power supply

## Evaluating the MAX4206 with Single Supply

- 1) Verify  that  shunts  are  connected across jumpers JU1 and JU11 (single-supply operation, sets CMVIN = CMVOUT).
- 2) Verify  that  shunts  are  connected across jumpers JU4 (pins 1 and 4), JU5 (pins 2 and 3), JU6, and JU7 (pins 1 and 2) (sets output scale factor K = 1V/decade).
- 3) Verify  that  shunts  are  connected across jumpers JU8 (pins 2 and 3) and JU3 (pins 1 and 3) (sets onboard reference current = 100nA).
- 4) Verify  that  there  is  no  shunt  across  jumpers  JU2, JU9, and JU10.
- 5) Connect a +5V power supply to the VCC pad. Connect the power-supply ground to the GND pad.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Connect a 100µA current source to the LOGIIN pad.
- 7) Turn on the power supply and verify the output voltages LOGV1 = 0.75V and LOGV2 = 3.00V.

Note: For dual-supply operation, JU1 should be open. Reset the VCC and VDD to within operation range.

## Detailed Description

## Jumper Selection

Jumper JU3 controls the REFISET pin of the MAX4206/ MAX4207 device. See Table 1 for JU3 function.

## Table 1. JU3 Function

| JU3 SHUNT POSITION   | REFERENCE CURRENT   |
|----------------------|---------------------|
| Pins 1 and 2         | 10nA                |
| Pins 1 and 3         | 100nA               |
| Pins 1 and 4         | 1µA                 |
| Pins 1 and 5         | 10µA                |

Note: Make sure a shunt is across pins 2 and 3 of JU8 when using the on-board reference current source.

<!-- image -->

## MAX4206 Evaluation Kit

## Table 2. Setting Output Scale Factor for MAX4206 (Single-Supply Operation)

|   SCALE FACTOR (V/decade) | JU2 SHUNT POSITION   | JU4 SHUNT POSITION   | JU5 SHUNT POSITION   | JU6 SHUNT POSITION   | JU7 SHUNT POSITION   |
|---------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
|                      0.25 | Not installed        | Pins 1 and 2         | Pins 2 and 3         | Installed            | Pins 1 and 2         |
|                      0.50 | Not installed        | Pins 1 and 3         | Pins 2 and 3         | Installed            | Pins 1 and 2         |
|                      0.50 | Not installed        | Pins 1 and 2         | Pins 1 and 2         | Installed            | Pins 1 and 2         |
|                      0.75 | Not installed        | Pins 1 and 3         | Pins 1 and 2         | Installed            | Pins 1 and 2         |
|                      1.00 | Not installed        | Pins 1 and 4         | Pins 2 and 3         | Installed            | Pins 1 and 2         |
|                      1.25 | Not installed        | Pins 1 and 4         | Pins 1 and 2         | Installed            | Pins 1 and 2         |

## Table 3. Setting Output Scale Factor for MAX4206 (Dual-Supply Operation)/MAX4207

|   SCALE FACTOR (V/decade) | JU2 SHUNT POSITION   | JU4 SHUNT POSITION   | JU5 SHUNT POSITION   | JU6 SHUNT POSITION   | JU7 SHUNT POSITION   |
|---------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
|                      0.25 | Pins 2 and 3         | Pins 1 and 3         | Pins 2 and 3         | Not Installed        | Pins 2 and 3         |
|                      0.25 | Pins 2 and 3         | Pins 1 and 2         | Pins 1 and 2         | Not Installed        | Pins 2 and 3         |
|                      0.50 | Pins 2 and 3         | Pins 1 and 3         | Pins 1 and 2         | Not Installed        | Pins 2 and 3         |
|                      0.75 | Pins 2 and 3         | Pins 1 and 4         | Pins 2 and 3         | Not Installed        | Pins 2 and 3         |
|                      1.00 | Pins 2 and 3         | Pins 1 and 4         | Pins 1 and 2         | Not Installed        | Pins 2 and 3         |

The EV kit incorporates jumpers JU2 and JU4-JU7 to set the output scale factor. See Tables 2 and 3 for setting the output scale factor for the MAX4206 and MAX4207.

Jumper JU8 controls the REFIIN pin of the MAX4206/ MAX4207 device. See Table 4 for JU8 function.

The EV kit incorporates jumper JU11 to create a connection between CMVIN and CMVOUT pins. To set the common-mode voltage input to a voltage other than 0.5V (MAX4206) or 0V (MAX4207), remove the shunt across JU11, and then connect a desired commonmode voltage on the CMVIN pad.

## Output Offset (MAX4206)

To adjust the output offset voltage for single-supply operation, cut open the short on R14, install a resistor on the R14 pads, and then apply a current on the OSADJ pad. The value of R14 can be calculated by the following equation:

R14 = VOS / IOSADJ

where VOS is the desired offset voltage, and IOSADJ is a user-supplied offset current.

<!-- image -->

## Evaluating the MAX4207

To evaluate the MAX4207 with the MAX4206 EV kit, replace the MAX4206ETE with a MAX4207ETE, replace R1, R2, C7, and C8 with component values 330 Ω , 330 Ω , 33pF, and 33pF, respectively.

Jumper JU1 must be open to ensure proper operation with dual supplies.

Table 4. JU8 Function

| JU8 SHUNT POSITION   | REFIIN PIN                                                                           |
|----------------------|--------------------------------------------------------------------------------------|
| Pins 1 and 2         | REFIIN is connected to the REFIIN pad, requiring an external reference source.       |
| Pins 2 and 3         | REFIIN is connected to the REFIOUT pad, using the internal reference current source. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4206 Evaluation Kit

## Evaluating the MAX4207 (Dual-Supply Operation)

- 1) Verify  that  there  is  no  shunt  across  jumpers  JU1, JU9, and JU10 (dual-supply operation).
- 2) Verify that there is a shunt across JU11 (sets CMVIN = CMVOUT).
- 3) Verify  that  shunts  are  connected across jumpers JU2 (pins 2 and 3), JU4 (pins 1 and 4), JU5 (pins 1 and 2), and JU7 (pins 2 and 3); and JU6 is open (sets output scale factor K = 1V/decade).
- 4) Verify  that  shunts  are  connected across jumpers JU8 (pins 2 and 3) and JU3 (pins 1 and 3) (sets onboard reference current = 100nA).
- 5) Connect a +5V power supply to the VCC pad. Connect the power-supply ground to the GND pad. Connect a -5V power supply to the VEE pad.
- 6) Connect a 100µA current source to the LOGIIN pad.
- 7) Turn on the power supply and verify the output voltages LOGV1 = -0.75V and LOGV2 = 3.00V.

## Output Offset Adjustment (MAX4207)

The MAX4207 accepts a large output-offset voltage adjustment at the inverting configuration. To adjust the output offset voltage, install a resistor on R3 and potentiometer on R4 pads, and make sure there is a shunt across JU2 (pins 1 and 2). The magnitude of the offset voltage is given by the following equation:

VOS = REFOUT x (R4 / (R3 + R4)) x (1 + RCOMB / R6)

where VOS is the desired offset voltage, and RCOMB is the effective resistance between the LOGV2 and SCALE pins.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4206 Evaluation Kit

Figure 1. MAX4206 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4206 Evaluation Kit

<!-- image -->

Figure 2. MAX4206 EV Kit Component Placement GuideComponent Side

Figure 3. MAX4206 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4206 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600