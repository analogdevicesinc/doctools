<!-- lastmod 2022-08-03 -->
## General Description

The MAX1573 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board. The EV kit contains the MAX1573, a white LED driver with a high-efficiency charge pump. The EV kit accepts a 2.7V to 5.5V input voltage and drives up to 4 white LEDs with regul ated  constant current for uniform intensity. The MAX1573 runs at 1MHz fixed frequency, allowing tiny external components. An EV kit is available for both the UCSP and the TQFN packages.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| C1-C4         |     4 | 1µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J105K |
| D1-D4         |     4 | Surface-mount white LEDs Nichia NSCW215T                        |
| JU1, JU2      |     2 | 3-pin headers                                                   |
| JU3           |     1 | Not installed                                                   |
| R1            |     1 | 7.5k Ω ±1% resistor (0603)                                      |
| U1            |     1 | MAX1573EBE or MAX1573ETE                                        |
| None          |     2 | Shunts                                                          |
| None          |     1 | MAX1573EVKIT PC board                                           |

<!-- image -->

## Features

- ♦ Proprietary Adaptive 1x/1.5x Modes
- ♦ High Efficiency (PLEDs / PBATT), Up to 92%
- ♦ 2% LED Current Matching
- ♦ 28mA/LED Drive Capability
- ♦ Eliminates Ballast Resistor
- ♦ Low 0.1µA Shutdown Current
- ♦ 2.7V to 5.5V Input Voltage Range
- ♦ Tiny 2.1 x 2.1 x 0.6mm UCSP  Package
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART             | TEMP RANGE   | IC PACKAGE    |
|------------------|--------------|---------------|
| MAX1573EVKIT     | 0°C to +70°C | 14 UCSP 4 x 4 |
| MAX1573TQFNEVKIT | 0°C to +70°C | 16 TQFN       |

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE        | WEBSITE                  |
|-------------|-------------|--------------|--------------------------|
| Nichia      | LEDs        | 717-285-2323 | www.nichia.com           |
| Panasonic   | Resistors   | 714-373-7366 | www.maco.panasonic.co.jp |
| Taiyo Yuden | Capacitors  | 408-573-4150 | www.t-yuden.com          |
| TDK         | Capacitors  | 888-835-6646 | www.component.tdk.com    |

Note: Please indicate that you are using the MAX1573 when contacting these suppliers.

## Quick Start

## Recommended Equipment

For evaluation of either EV kit:

- Variable-output power supply capable of supplying up to +5.5V at 300mA

## Procedure

The MAX1573 EV kit is fully assembled and tested. Perform the following steps to verify board operation. Do not turn on the power supply until all connections are completed:

UCSP is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 1) Verify  that  shunts  are  across  pins  1  and  2  of  JU1 (EN1) and JU2 (EN2).
- 2) Preset the power supply to 2.7V and turn off.
- 3) Connect the positive lead of the power supply to the VIN pad on the EV kit board. Connect the ground lead of the power supply to the GND pad directly below the VIN pad.
- 4) Turn on the power supply.
- 5) Verify that all 4 white LEDs are on with uniform intensity.

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1573 Evaluation Kit

## Table 1. JU1 and JU2 Functions (Dimming Control)

| JU1 POSITION   | EN1              | JU2 POSITION   | EN2              | MAX1573 OUTPUT   |
|----------------|------------------|----------------|------------------|------------------|
| 1 and 2        | Connected to VIN | 1 and 2        | Connected to VIN | Full brightness  |
| 1 and 2        | Connected to VIN | 2 and 3        | Connected to GND | 3/10 brightness  |
| 2 and 3        | Connected to GND | 1 and 2        | Connected to VIN | 1/10 brightness  |
| 2 and 3        | Connected to GND | 2 and 3        | Connected to GND | Shutdown         |

- 6) Sweep the power supply to 5.5V. Verify that all 4 LEDs remain on with constant and uniform intensity.
- 7) Reconfigure JU1 and JU2 to verify the different brightness levels. For instructions on brightness control, see Table 1.

## Detailed Description

## Jumper Selection

EN1 and EN2 on the MAX1573 provide control for ON/OFF, 1/10, 3/10, and full current. JU1 and JU2 connect these 2 pins to either VIN or GND (see Table 1). An external signal can be used to drive EN1 or EN2 by removing the corresponding shunt completely from the jumper and connecting the external signal to the appropriate connecting pad.

## Setting LED Current

The default LED current is set to 17mA (with shunts

Figure 1. MAX1573 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

across pins 1 and 2 on JU1 and JU2). To set a different LED current, change R1, where R1 = 215 x 0.6 / I LED(FULL).

## Evaluating Off-Board LEDs

The MAX1573 EV kit allows for easy evaluation of offboard LEDs. To evaluate off-board LEDs, first cut the trace that shorts JU3. Next, connect the pad labeled VOUT on the EV kit to the anodes of the LEDs under evaluation. Last, connect the cathode of each LED to one of the EV kit pads labeled LED1-LED4. If evaluating fewer than 4 off-board LEDs, see the Evaluating Fewer Than 4 LEDs section.

## Evaluating Fewer than 4 LEDs

To evaluate fewer than 4 LEDs, remove the desired LED(s) and connect the corresponding LED pad(s) to the input voltage. Do not leave LED pad(s) floating.

<!-- image -->

<!-- image -->

Figure 2. MAX1573 UCSP EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX1573 UCSP EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX1573 Evaluation Kit

Figure 4. MAX1573 UCSP EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 5. MAX1573 UCSP EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1573 Evaluation Kit

<!-- image -->

Figure 6. MAX1573 TQFN EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 8. MAX1573 TQFN EV Kit PC Board LayoutComponent Side

Figure 7. MAX1573 TQFN EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Figure 9. MAX1573 TQFN EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600