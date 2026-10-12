<!-- lastmod 2022-08-04 -->
## General Description

The MAX5090 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a step-down DC-DC switching regulator. The circuit utilizes  a  MAX5090C adjustable converter configured for a +5V output at up to 2A of current. The converter operates from a wide +7.5V to +76V input range.

The MAX5090 IC features a built-in high-side switch and automatic pulse-skipping mode operation. The MAX5090 EV kit demonstrates low quiescent current and high efficiency up to 90%. The MAX5090 IC switches at 127kHz but can be synchronized with an external clock to operate at a switching frequency between 119kHz and 200kHz.

The MAX5090 EV kit is a fully assembled and tested surface-mount circuit board. It can also be used to test other fixed output-voltage versions: MAX5090A (3.3V) and MAX5090B (5.0V).

Warning: The MAX5090 EV kit is designed to operate with high voltages. Dangerous voltages are present on this  EV  kit  and  on  equipment  connected to it. Users who power up this EV kit or power the sources connected to it must be careful to follow appropriate safety procedures when working with high-voltage equipment.

Under severe fault or failure conditions, this EV kit may dissipate large amounts of power, which could result in the mechanical ejection of a component or component debris at high velocity. Operate this EV kit with care to avoid possible injury.

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 68µF ±20%, 100V electrolytic capacitors (12.5mm x 13.5mm) Panasonic EEVFK2A680Q          |
| C3            |     1 | 0.47µF ±10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A474KA                    |
| C4            |     1 | 1µF ±20%, 100V X7R ceramic capacitor (1206) TDK C3216X7R2A105K                           |
| C5            |     1 | 3.3µF ±10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E335KA                      |
| C6            |     1 | 0.047µF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H473KA TDK C1608X7R1H473K |

## MAXIM

- ♦ +7.5V to +76V Input Voltage Range
- ♦ 5V Output at Up to 2A
- ♦ 90% Efficiency
- ♦ Adjustable Output Voltage (1.25V to 11V)
- ♦ 127kHz Fixed Switching Frequency
- ♦ External Clock Synchronization (119kHz to 200kHz)
- ♦ Automatic Pulse-Skipping Mode at Light Load
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE*   | IC PACKAGE          |
|--------------|---------------|---------------------|
| MAX5090EVKIT | 0°C to +70°C  | 16 TQFN (5mm x 5mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C7            |     1 | 0.22µF ±20%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C224K TDK C1608X7R1C224K |
| C8            |     1 | 100µF ±20%, 6.3V, 40m Ω electrolytic capacitor (6.3mm x 5.9mm) Sanyo 6SVQP100M         |
| D1            |     1 | 100V, 5A Schottky barrier rectifier Diodes Incorporated PDS5100H                       |
| JU1           |     1 | 2-pin header                                                                           |
| L1            |     1 | 100µH, 3A inductor Coilcraft DO5022P-104 Coiltronics DRA127-101                        |
| R1            |     1 | 13.3k Ω ±1% resistor (0603)                                                            |
| R2            |     1 | 4.42k Ω ±1% resistor (0603)                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX5090 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                  |
|---------------|-------|------------------------------|
| R3            |     1 | 10 Ω ±5% resistor (0805)     |
| R4            |     1 | 1M Ω ±5% resistor (0603)     |
| R5            |     1 | 10k Ω ±5% resistor (0603)    |
| U1            |     1 | MAX5090CATE (TQFN 5mm x 5mm) |
| -             |     1 | Shunts                       |
| -             |     1 | MAX5090 EV kit PC board      |

## Recommended Equipment

- 100V, 5A DC power supply
- Voltmeter

## Quick Start

The MAX5090 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are complete.

## 5V Output Verification

- 1) Verify that a shunt is not installed across jumper JU1 (ON/ OFF ).
- 2) Connect the voltmeter across the VOUT pad and PGND pad.
- 3) Connect the DC power supply across the VIN and PGND pads.
- 4) Set the DC power supply to +12V.
- 5) Turn on the power supply and verify that VOUT is +5V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## Component Suppliers

| SUPPLIER            | PHONE        | WEBSITE               |
|---------------------|--------------|-----------------------|
| Coilcraft           | 847-639-6400 | www.coilcraft.com     |
| Coiltronics         | 561-752-5000 | www.cooperet.com      |
| Diodes Incorporated | 805-446-4800 | www.diodes.com        |
| Murata              | 770-436-1300 | www.murata.com        |
| Panasonic           | 714-373-7366 | www.panasonic.com     |
| Sanyo               | 619-661-6835 | www.sanyodevice.com   |
| TDK                 | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX5090 when contact-

ing these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX5090 EV kit features a 10W, step-down, DCDC switching-regulator circuit. The circuit uses a MAX5090C adjustable output-voltage converter to provide a +5V output voltage at up to 2A of current. The EV kit is powered by a +7.5V to +76V DC source.

The MAX5090C converter's built-in, high-side, low-onresistance DMOS transistor reduces component count while maximizing efficiency. Under light loads the MAX5090C operates in pulse-skipping mode and under heavy loads it automatically enters PWM mode. The circuit switches at a 127kHz fixed frequency.

The EV kit features a SYNC pad to allow the converter to synchronize with an external clock. See the External Clock Synchronization section.

## Shutdown Mode

The MAX5090 EV kit features a shutdown mode that reduces the quiescent current to 19µA (typ), thus reducing the power drain during shutdown mode. Jumper JU1 selects the shutdown mode for the MAX5090 EV kit (see Table 1).

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | ON/ OFF PIN                 | MAX5090 EV KIT OUTPUT        |
|------------------|-----------------------------|------------------------------|
| Not installed    | Connected to VIN through R4 | MAX5090 enabled, V OUT = 5V  |
| Installed        | Connected to GND            | MAX5090 disabled, V OUT = 0V |

## External Clock Synchronization

As configured, the MAX5090 EV kit operates at a fixed 127kHz switching frequency. The EV kit can operate at a switching frequency between 119kHz and 200kHz by applying an external clock across the SYNC and SGND pads provided on the EV kit. Synchronization will occur provided that the external clock signal is TTL compatible with at least a 350ns pulse width. Refer to the MAX5090 IC data sheet for detailed information.

<!-- image -->

## MAX5090 Evaluation Kit

Figure 1. MAX5090 EV Kit Schematic

<!-- image -->

## Evaluating Other Output Voltages

The MAX5090C step-down DC-DC switching regulator output is set to 5V by feedback resistors R1 and R2. To generate output voltages other than 5V (1.25V to 11V), select a different external inductor, output capacitor, and voltage-divider resistors R1 and R2. Choose R2 less than 10k Ω and then calculate R1 as follows:

<!-- formula-not-decoded -->

<!-- image -->

The minimum input voltage for a given output voltage is dependent on the maximum duty cycle. Refer to the MAX5090 IC data sheet for additional information.

## Evaluating the MAX5090A and MAX5090B

The MAX5090 EV kit can also evaluate the fixed outputvoltage versions MAX5090A (3.3V) and MAX5090B (5.0V) step-down DC-DC converters. To evaluate the MAX5090A or MAX5090B, remove resistor R2 and replace resistor R1 with a short or 0 Ω resistance. Refer to  the  MAX5090 data sheet to select components for output voltages other than 5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5090 Evaluation Kit

<!-- image -->

Figure 2. MAX5090 EV Kit Component Placement GuideComponent Side

Figure 3. MAX5090 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX5090 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet Boblet