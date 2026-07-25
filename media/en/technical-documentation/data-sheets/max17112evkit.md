<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX17112 evaluation kit (EV kit) provides a proven design to evaluate the MAX17112 high-performance step-up DC-DC converter, which provides a regulated supply voltage for active-matrix thin-film transistor (TFT) liquid-crystal displays (LCDs).

The EV kit operates from a DC supply voltage of 4.5V to 5.5V and is configured to operate with a switching frequency of 1MHz. The high switching frequency allows the use of small, surface-mount components. The stepup switching regulator is configured for a 15V output and provides 600mA with a 4.5V input.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C2        |     2 | 4.7µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A475K     |
| C3, C9, C10   |     3 | 1µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J105K   |
| C4            |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K |
| C5            |     1 | 560pF ±5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H561J    |
| C6            |     0 | Not installed, capacitor                                             |
| C7, C8        |     2 | 10µF ±10%, 25V X5R ceramic capacitors (1210) Murata GRM32DR61E106K   |

Features

- ♦ 4.5V to 5.5V Input Range
- ♦ 15V Output Voltage
- ♦ 1MHz Switching Frequency
- ♦ Programmable Soft-Start
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17112EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| D1            |     1 | 3A, 30V Schottky diode (M-Flat) Toshiba CMS03                            |
| JU1           |     1 | 3-pin header                                                             |
| L1            |     1 | 2.7µH ±20% power inductor (65m Ω , 3.9A) TOKO FDV0630-2R7 (27m Ω , 4.4A) |
| R1            |     1 | 0 Ω ±5% resistor (0603)                                                  |
| R2            |     1 | 47k Ω ±5% resistor (0603)                                                |
| R3            |     1 | 20k Ω ±1% resistor (0603)                                                |
| R4            |     1 | 221k Ω ±1% resistor (0603)                                               |
| R5            |     1 | 10k Ω ±5% resistor (0603)                                                |
| U1            |     1 | High-performance step-up converter (10 TDFN-EP*) Maxim MAX17112ETB+      |
| -             |     1 | Shunt                                                                    |
| -             |     1 | PCB: MAX17112 Evaluation Kit+                                            |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                                   | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                          | 847-297-0070 | www.tokoam.com              |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |

Note:

Indicate that you are using the MAX17112 when contacting these component suppliers.

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX17112 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX17112 EV kit
- 4.5V to 5.5V, 5A DC power supply (VIN)
- One voltmeter

## Procedure

The MAX17112 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply or the electronic load until all connections are completed.

- 1) Verify that a shunt is placed across pins 1-2 of JU1.
- 2) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the GND pad.
- 3) Turn on the 4.5V to 5.5V DC power supply and verify  that  the  step-up switching regulator output (VOUT) is 15V.

## Detailed Description of Hardware

The MAX17112 evaluation kit (EV kit) provides a proven design to evaluate the MAX17112 high-performance step-up DC-DC converter, which provides a regulated supply voltage for active-matrix thin-film transistor (TFT) liquid-crystal displays (LCDs).

The EV kit operates from a 4.5V to 5.5V DC power supply.  As  configured, the step-up switching regulator generates a 15V output (VOUT) and provides 600mA with a 4.5V input. The step-up switching regulator output voltage can be adjusted from VIN to 20V by changing the values of the feedback resistors (see the Evaluating Other Output Voltages section).

The MAX17112 EV kit can operate from a 2.6V to 5.5V input supply. When input voltage is less than 4.5V, output current needs to be reduced from 600mA to avoid reaching inductor current limit. Operation at a different input voltage, output voltage, or switching frequency may require a different inductor, output capacitor, and compensation components. Refer to the MAX17112 IC data sheet for detailed information on loop compensation and component selection.

## Shutdown Mode ( SHDN )

The EV kit features a shutdown mode that reduces the MAX17112 quiescent current. JU1 selects the shutdown mode. See Table 1 for jumper JU1 functions.

When the shunt of JU1 is placed in the 1-2 position, the SHDN pin is connected to the on-board capacitor (C10).  The  internal  5µA  current  source  of  the MAX17112 charges this capacitor. When the voltage on the SHDN pin rises above 1.24V, the MAX17112 is enabled.

To shut down the MAX17112, place the shunt of JU1 in the 2-3 position.

When JU1 is open, the SHDN pin is controlled by the external signal on the SHDN pad.

## Evaluating Other Output Voltages

The MAX17112 EV kit's step-up switching-regulator output (VOUT) is set to 15V by feedback resistors R3 and R4. To generate output voltages other than 15V, select different external voltage-divider resistors, R3 and R4. Select R3 in the 10k Ω to  50k Ω range. R4 is then given by the following equation:

<!-- formula-not-decoded -->

where VFB = 1.24V. For significantly different operation points, the EV kit might require a different inductor and component changes. Refer to the MAX17112 IC data sheet for proper component selection.

## Table 1. Jumper JU1 Functions.

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                    |
|----------|------------------|----------------------------------------------------------------|
| JU1      | Open             | Connects the external shutdown signal to the on-board SHDN pad |
| JU1      | 1-2*             | MAX17112 enabled (VOUT = 15V)                                  |
| JU1      | 2-3              | Shutdown mode (VOUT = VIN - VDIODE)                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17112 Evaluation Kit

Figure 1. MAX17112 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17112 Evaluation Kit

<!-- image -->

Figure 2. MAX17112 EV Kit Component Placement GuideComponent Side

Figure 3. MAX17112 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17112 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_