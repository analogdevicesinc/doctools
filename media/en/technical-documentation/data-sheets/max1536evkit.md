<!-- lastmod 2022-08-02 -->
## General Description

The MAX1536 evaluation kit (EV kit) provides dynamically adjustable 1.5V/1.8V output voltages from a 3.0V to 5.5V input voltage source. It delivers up to 3.6A output current with up to 93% efficiency.

The MAX1536 EV kit includes the MAX1536 step-down switching regulator with an internal synchronous rectifier  to  increase  efficiency  and  reduce the number of external components. The resistor-programmable fixedoff-time,  current-mode architecture allows an optimum response to load-and-line transients. This EV kit, as configured, operates at approximately 570kHz and is optimized for 3.3V input and 1.8V output.

The EV kit is a fully assembled and tested circuit board. It  also allows the evaluation of other output voltages in the 0.7V to VIN range.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5RDJ106M or Taiyo Yuden JMK316BJ106ML |
| C3            |     1 | 100µF ±20%, 6.3V, 18m Ω -ESR POSCAP capacitor (D2E) Sanyo 6TPE100MI                           |
| C4, C7        |     2 | 470pF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H471K or equivalent                |
| C5            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K                              |
| C6            |     1 | 0.22µF ±20%, 10V X7R ceramic capacitor (0603) Taiyo Yuden LMK107BJ224MA                       |
| C8            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105MA                         |
| D1            |     0 | Not installed, Schottky diode                                                                 |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin headers                                                               |
| JU4           |     1 | 4-pin header                                                                |
| L1            |     1 | 1.2µH inductor Sumida CDR7D28MN-1R2 or 1.0µH inductor Sumida CDRH8D28-1R0NC |
| R1            |     1 | 10 Ω ±5% resistor (0603)                                                    |
| R2            |     1 | 100k Ω ±5% resistor (0603)                                                  |
| R3            |     1 | 75k Ω ±1% resistor (0603)                                                   |
| R4            |     0 | Not installed, resistor (0603) (shorted by PC trace)                        |
| R5, R8        |     0 | Not installed, resistor (0603)                                              |
| R6            |     1 | 20k Ω ±1% resistor (0603)                                                   |
| R7            |     1 | 90.9k Ω ±1% resistor (0603)                                                 |
| R9            |     1 | 182k Ω ±1% resistor (0603)                                                  |
| U1            |     1 | MAX1536ETI (28-pin thin QFN 5mm × 5mm)                                      |
| None          |     4 | Shunts                                                                      |
| None          |     1 | MAX1536 PC board                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

- ♦ 3.0V to 5.5V Input Voltage Range
- ♦ Dynamically Selectable 1.5V/1.8V Output Voltage
- ♦ Adjustable Output Voltage from 0.7V to VIN
- ♦ Up to 3.6A Output Current
- ♦ Up to 1.4MHz Switching Frequency
- ♦ &lt;0.2µA (typ) IC Shutdown Supply Current
- ♦ No External Schottky Diode Required
- ♦ Power-Good Output
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                |
|--------------|--------------|---------------------------|
| MAX1536EVKIT | 0°C to +70°C | 28 Thin QFN 5mm × 5mm-EP* |

## MAX1536 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Sanyo       | 619-661-6322 | 619-661-1055 | www.sanyo.com         |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1536 when contacting these component suppliers.

## Quick Start

The MAX1536 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for proper board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and load (if any) from VOUT to GND.
- 2) Verify that the shunts are across JU1 ( SHDN ) pins 1 and 2, JU2 ( SKIP ) pins 1 and 2, JU3 (GATE) pins 2 and 3, and JU4 (FBLANK) pins 1 and 2.
- 3) Connect a 3.0V to 5.5V supply to the pads marked VIN and GND.
- 4) Turn on the power supply and verify that the output voltage is 1.8V.

See the Evaluating Other Output Voltages section for different output voltages.

## Detailed Description

## Jumper Selection

In  shutdown mode, the MAX1536 reduces the supply current to 0.2µA (typ). Jumper JU1 controls the MAX1536's shutdown function. Table 1 lists jumper JU1 functions.

The MAX1536 has two modes of operation: low-noise, constant-off-time, forced-PWM mode and automatic PWM/PFM mode. Jumper JU2 controls the MAX1536's operation function. Table 2 lists jumper JU2 functions.

The MAX1536 EV kit is preset to a dynamically selectable 1.5V/1.8V output. The EV kit incorporates jumper JU3 to control the dynamic outputs. Table 3 lists jumper JU3 functions.

Jumper JU4 controls the fault blanking control input (FBLANK). The FBLANK input determines how long the MAX1536 maintains forced-PWM operation and forces PGOOD high impedance when a transition is detected on the GATE pin. Table 4 lists jumper JU4 functions.

## Table 1. Jumper JU1 Functions ( SHDN )

| SHUNT LOCATION    | SHDN PIN                                  | MAX1536 OUTPUT                                        |
|-------------------|-------------------------------------------|-------------------------------------------------------|
| 1 and 2 (default) | Connected to VCC                          | MAX1536 enabled, VOUT = 1.8V                          |
| 2 and 3           | Connected to GND                          | MAX1536 disabled                                      |
| Not installed     | SHDN must be driven by an external signal | MAX1536 output depends on external SHDN signal levels |

## Table 2. Jumper JU2 Functions ( SKIP )

| SHUNT LOCATION    | SKIP PIN         | MODE OF OPERATION                                                                                   |
|-------------------|------------------|-----------------------------------------------------------------------------------------------------|
| 1 and 2 (default) | Connected to VCC | Constant-off-time forced-PWM mode                                                                   |
| 2 and 3           | Connected to GND | Automatic PWM/PFM mode, high-efficiency idle mode under light loads, and PWM mode under heavy loads |

Table 3. Jumper JU3 Functions (GATE)

| SHUNT LOCATION    | GATE PIN                                  | MAX1536 OUTPUT                               |
|-------------------|-------------------------------------------|----------------------------------------------|
| 1 and 2           | Connected to VCC                          | VOUT = 1.5V                                  |
| 2 and 3 (default) | Connected to GND                          | VOUT = 1.8V                                  |
| Not installed     | GATE must be driven by an external signal | V OUT depends on external GATE signal levels |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 4. Jumper JU4 Functions (FBLANK)

| SHUNT LOCATION    | FBLANK PIN       | FAULT- BLANKING FUNCTION   |   TYPICAL FORCED-PWM TIME (µs) |
|-------------------|------------------|----------------------------|--------------------------------|
| 1 and 2 (default) | Connected to REF | Enabled                    |                             50 |
| 1 and 3           | Connected to GND | Disabled                   |                            100 |
| 1 and 4           | Connected to VCC | Enabled                    |                            150 |
| Not installed     | Open             | Enabled                    |                            100 |

## Evaluating Other Output Voltages

## Evaluating Dynamic Output Voltages

The MAX1536 EV kit is preset to 1.5V/1.8V. When GATE is  high  (JU3,  1-2),  VOUT = 1.5V. When GATE is low (JU3, 2-3), VOUT = 1.8V.

- To evaluate output voltages from 0.7V to 2V, change resistors R6 and R9. Select R9 in the 10k Ω to 100k Ω range, then use equations 1 and 2 to calculate R6 and R7:

VOUT(HIGH) = VFB(HIGH) = VREF [R9 / (R6 + R9)]  (Eq 1) where VREF = 2V.

<!-- formula-not-decoded -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1536 Evaluation Kit

- To evaluate output voltages greater than 2V, change resistors R6, R7, and R9, cut the trace shorting R4, and install feedback resistors R4 and R5. Select R5 and R9 in the 10k Ω to 100k Ω range, and use the following equations to calculate R4:

VOUT(HIGH) = VFB (HIGH) [(R4 + R5) / R5]VO

<!-- formula-not-decoded -->

where VFB(HIGH) and VFB(LOW) are calculated from equations (1) and (2), respectively.

## Evaluating Fixed Output Voltages

The MAX1536 EV kit can also be used to evaluate fixed output voltages. For fixed output voltage applications, OD and OD are not used, and GATE should be connected to GND. Remove R7 and R8. Verify that the shunt is across jumper JU3 pins 2 and 3:

- To evaluate output voltages from 0.7V to 2V, change resistors R6 and R9. Select R9 in the 10k Ω to 100k Ω range. Calculate R6 using equation 1.

If VOUT equals 2V, short R6 and remove R9:

- To evaluate output voltages from 2V to VIN, short R6, remove R9, and install feedback resistors R4 and R5. Select R5 in the 10k Ω to 100k Ω range:

<!-- formula-not-decoded -->

For other output voltages, refer to the MAX1536 IC data sheet to recalculate the inductor and output capacitor.

## MAX1536 Evaluation Kit

Figure 1. MAX1536 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1536 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 4. MAX1536 EV Kit PC Board Layout-Layer 2 (PGND and AGND)

<!-- image -->

## MAX1536 Evaluation Kit

Figure 3. MAX1536 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1536 EV Kit PC Board Layout-Layer 3 (AGND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1536 Evaluation Kit

Figure 6. MAX1536 EV Kit PC Board Layout-Solder Side (AGND)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600