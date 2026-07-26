<!-- lastmod 2022-08-02 -->
## General Description

The MAX1776 evaluation kit (EV kit) provides a +5.0V output voltage from a +5.5V to +24V input source. It delivers 500mA output current and operates up to 100% duty cycle at dropout. The MAX1776 is a stepdown switching regulator with an internal power switch.

The EV kit is a fully assembled and tested surfacemount PC board. It can also be used to evaluate other output voltages in the +1.25V to +23.5V range by adding the feedback resistors and changing a jumper setting.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF ± 10%, 25V, X5R ceramic capacitor (1812) Taiyo Yuden TMK432BJ106KM or TDK C4532X5R1E106M |
| C2            |     1 | 100µF, 6.3V, 45m Ω low-ESR electrolytic capacitor (POSCAP) (D2) Sanyo 6TPC100M                |
| D1            |     1 | 1A, 30V Schottky diode Nihon EP10QY03                                                         |
| L1            |     1 | 10µH inductor Sumida CDRH6D28-100NC                                                           |
| R1            |     0 | Not installed (0603)                                                                          |
| R2            |     0 | Not installed, pads shorted with PC                                                           |
| JU1, JU4      |     2 | 3-pin headers                                                                                 |
| JU2, JU3      |     0 | Not installed, pins 1 and 2 shorted with PC trace                                             |
| U1            |     1 | MAX1776EUA (8-pin µ MAX)                                                                      |
| None          |     2 | Shunts                                                                                        |
| None          |     1 | MAX1776 PC board                                                                              |
| None          |     1 | MAX1776 EV kit data sheet                                                                     |
| None          |     1 | MAX1776 data sheet                                                                            |

- ♦ +5.5V to +24V Input Voltage Range (for Fixed +5V Output)
- ♦ +4.5V to +24V Input Voltage Range (for +3.3V Output)
- ♦ Output Voltage Fixed +5V Adjustable Output (+1.25V to +23.5V)
- ♦ 500mA Output Current
- ♦ 3µA IC Shutdown Mode
- ♦ 8-Pin µMAX Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE        | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX1776EVKIT | -40 ° C to +85 ° C | 8 µMAX       |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Nihon       | 847-843-7500 | 847-843-2798 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1776 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

1

## MAX1776 Evaluation Kit

## Quick Start

The MAX1776 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are across pins 1 and 2 of jumper JU1 ( SHDN ) and pins 1 and 2 of jumper JU4.
- 2) Connect a voltmeter and load (if any) to the VOUT pad. Connect the ground to the GND pad closest to VOUT.
- 3) Connect a +5.5V to +24V power supply to the VIN pad. Connect the power-supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply, and verify that the output voltage is +5.0V.

To evaluate other output voltages, refer to Evaluating Other Output Voltages

## Detailed Description

## Shutdown Jumper Selection

The MAX1776 EV kit features a shutdown mode that reduces quiescent current to 3µA (typ) to preserve battery life. Jumper (JU1) options select the circuit operating modes: shutdown or normal mode (Table 1).

## Adjustable Current Limit

The MAX1776 EV kit can operate at different current limits after modification. Jumper (JU2 and JU3) options select the MAX1776 internal switch current limit. The EV

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                            | MAX1776 OUTPUT                                 |
|------------------|-------------------------------------|------------------------------------------------|
| 1 and 2          | Connected to VIN                    | MAX1776 enabled, V OUT = +5.0V                 |
| 2 and 3          | Connected to GND                    | Shutdown mode, V OUT = 0V                      |
| None             | Connect external source to SHDN pad | MAX1776 output depends on external SHDN signal |

kit's default setting provides the maximum 1.2A switch current limit.  To  change the switch current limit, cut open the PC board traces, shorting pins 1 and 2 of JU2 and JU3, and short the appropriate pins for the desired current limit (Table 2). Changing the current limit requires inductor L1 and output capacitor C2 to be replaced. Refer to the Recommended Components Table (Table 3) of the MAX1776 data sheet.

## Evaluating Other Output Voltages

The default output for the MAX1776 EV kit is +5.0V. To generate output voltages other than +5.0V, set the JU4 shunt to pins 2 and 3 (Table 3), cut the PC board trace shorting the pads of R2, and install feedback resistors R1 and R2. Select feedback resistor R2 in the 10k Ω to 100k Ω range.

R1 = R2 [(VOUT / 1.25V) - 1]

## Table 2. Jumper JU2 and JU3 Functions

| JU2 SHUNT LOCATION   | JU3 SHUNT LOCATION   |   MAX1776 SWITCH CURRENT LIMIT (A) |
|----------------------|----------------------|------------------------------------|
| 2 and 3              | 2 and 3              |                               0.15 |
| 1 and 2              | 2 and 3              |                               0.30 |
| 2 and 3              | 1 and 2              |                               0.60 |
| 1 and 2*             | 1 and 2*             |                               1.20 |

Table 3. Jumper JU4 Functions

| SHUNT LOCATION   | JUMPER CONNECTION              | MAX1776 OUTPUT              |
|------------------|--------------------------------|-----------------------------|
| 1 and 2          | Connected to OUT               | Fixed output, V OUT = +5.0V |
| 2 and 3          | Connected to a voltage-divider | Adjustable output           |

Note: Do not switch JU4 shunt location or leave JU4 floating (no shunt across JU4) when power is on.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1776 Evaluation Kit

<!-- image -->

Figure 1. MAX1776 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1776 Evaluation Kit

<!-- image -->

Figure 2. MAX1776 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1776 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1776 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4