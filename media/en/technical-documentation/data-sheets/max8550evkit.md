<!-- lastmod 2022-08-02 -->
## General Description

The MAX8550 evaluation kit (EV kit) is designed to evaluate the MAX8550 DDR power-supply solution for notebooks, desktops, and graphics cards. The EV kit board produces VDDQ at the output of the synchronous PWM buck, VTT at the output of the sourcing/sinking LDO linear regulator, and VTTR at the output of the reference buffer.

The VDDQ output is preset to 2.5V and sources up to 12A. The VTT output is always VDDQ/2 and can source/sink up to 3A of peak current and 1.5A of continuous current. The VTTR output is also always VDDQ/2 and can source/sink up to 10mA.

The MAX8550 EV kit was conveniently designed with jumpers to select the OVP/UVP, TON, SKIP , STBY, and SHDN\_ modes. The board's default settings enable OVP (overvoltage protection), 600kHz switching frequency, low-noise PWM mode, VDDQ, VTT, and VTTR.

The VIN input accepts voltages from 9V to 20V and VDD requires a 5V bias supply.

The EV kit comes with the MAX8550 installed. Contact the factory for free samples of the MAX8550A or MAX8551 to evaluate these parts.

| DESIGNATION                      |   QTY | DESCRIPTION                                                                                |
|----------------------------------|-------|--------------------------------------------------------------------------------------------|
| C1                               |     1 | 0.1µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K                           |
| C2, C4A, C4B, C4C, C4D, C4E, C4F |     7 | 10µF ± 10%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J106K or TDK C3216X5R0J106M    |
| C3, C6, C13                      |     3 | 1µF ± 10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K                            |
| C5                               |     1 | 4.7µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475M                          |
| C7, C10                          |     2 | 0.22µF ± 20%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C224M                         |
| C8A, C8B, C8C                    |     3 | 10µF ± 20%, 25V X5R ceramic capacitors (1210) Taiyo Yuden TMK325BJ106MM TDK C3225X5R1E106M |

- ♦ VDDQ Preset to 2.5V/12A
- ♦ VTT 1.25V Source/Sink 1.5A Continuous/3A Peak
- ♦ VTTR 1.25V Source/Sink 10mA
- ♦ VIN Range: 9V to 20V
- ♦ Optimized Switching Frequency: 600kHz
- ♦ Overvoltage/Undervoltage Protection
- ♦ Standby
- ♦ Independent Shutdown
- ♦ Power OK

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX8550EVKIT | 0°C to +70°C | 28 Thin QFN 5mm x 5mm |

Note: To evaluate the MAX8550A, request a free sample of the MAX8550AETI when ordering the MAX8550 EV kit. To evaluate the MAX8551, request a free sample of the MAX8551ETI when ordering the MAX8550 EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C8D           |     0 | Not installed 470µF ± 20%, 25V aluminum electrolytic capacitor (10mm x 16mm) Sanyo 25MV470WX |
| C9            |     1 | 3900pF, 50V X7R ceramic capacitor (0603) Kemet C0603C392K5RAC                                |
| C11, C12      |     2 | 150µF, 4V, 25m Ω low-ESR POS capacitors (D2E) Sanyo 4TPE150M                                 |
| C14           |     1 | 470pF ± 5%, 50V COG ceramic capacitor (0603) TDK C1608COG1H471J                              |
| C15, C16      |     2 | Not installed (0603)                                                                         |
| D1            |     1 | Schottky diode, 30V, 100mA (SOD-323) Central CMDSH-3                                         |
| JU1, JU2      |     2 | 4-pin headers                                                                                |
| JU3-JU6       |     4 | 3-pin headers                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX8550 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                   |
|---------------|-------|-------------------------------------------------------------------------------|
| L1            |     1 | 1.0µH, 20A, 1.6m Ω power inductor (12.6mm x 12.6mm x 5.2mm) TOKO FDA1254-1R0M |
| Q1            |     1 | n-channel MOSFET 30V, 9m Ω (SO-8) International Rectifier IRF7821             |
| Q2            |     1 | n-channel MOSFET 30V, 5m Ω (SO-8) International Rectifier IRF7832             |
| R1            |     1 | 10 Ω ± 5% resistor (0603)                                                     |
| R2, R3        |     2 | 100k Ω ± 5% resistors (0603)                                                  |
| R4            |     1 | 75k Ω ± 1% resistor (0603)                                                    |
| R5            |     1 | 124k Ω ± 1% resistor (0603)                                                   |
| R6, R7, R8    |     2 | Not installed (0603)                                                          |
| R9, R10, R11  |     3 | 0 Ω resistors (0603)                                                          |
| R12           |     1 | Not installed (1812)                                                          |
| R13           |     1 | 20 Ω ± 5% resistor (0603)                                                     |
| U1            |     1 | MAX8550ETI (28-pin 5mm x 5mm Thin QFN)                                        |
| None          |     6 | Shunts                                                                        |
| None          |     1 | MAX8550 EV kit PC board                                                       |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com   |
| International Rectifier | 310-322-3331 | www.irf.com           |
| Kemet                   | 864-963-6300 | www.kemet.com         |
| Sanyo USA               | 619-661-6835 | www.sanyo.com         |
| TDK                     | 847-803-6100 | www.component.tdk.com |
| TOKO America            | 847-297-0070 | www.tokoam.com        |

Note: Indicate that you are using the MAX8550 when contacting these component suppliers.

## Recommended Equipment

- 5VDC power supply (500mA rated)
- 9VDC to 20VDC power supply (5A rated)
- Two digital voltmeters (DVM)

## Quick Start

The MAX8550 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

- 1) Ensure a shunt is placed across pins 1-4 of jumper JU1 to enable OVP and UVP.
- 2) Ensure a shunt is placed across pins 1-2 of jumper JU2 to set the switching frequency to approximately 600kHz.
- 3) Ensure a shunt is placed across pins 1-2 of jumper JU3 to enable low-noise PWM mode.
- 4) Ensure a shunt is placed across pins 2-3 of jumper JU4 to disable the VDDQ buck output.
- 5) Ensure a shunt is placed across pins 1-2 of jumper JU5 to enable the VTT and VTTR outputs.
- 6) Ensure a shunt is placed across pins 2-3 of jumper JU6 to set the board in normal operation mode.
- 7) Connect the 5VDC power supply across the VDD pad and the PGND pad nearest VIN.
- 8) Connect the 12VDC power supply across the VIN pad and the corresponding PGND pad.
- 9) Turn on both of the power supplies.
10. 10)Set JU4 (1-2). This turns VDDQ on.
11. 11)Using one of the DVMs, verify that the VDDQ voltage between the VDDQ and PGND pads is 2.5V (±2%).
12. 12)Using the other DVM, verify that the VTT voltage between the VTT and PGND pads is 1.25V (±2%).

## Detailed Description

## Jumper Selection

## Table 1. Overvoltage/Undervoltage Control Input (OVP/UVP)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU1      | 1-2              | Disable OVP and UVP.     |
| JU1      | 1-3              | Enable UVP. Disable OVP. |
| JU1      | 1-4*             | Enable OVP and UVP.      |
| JU1      | Open             | Enable OVP. Disable UVP. |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on OVP/UVP. This mode does not directly apply to the MAX8551.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. On-Time Selection Input (TON)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                |
|----------|------------------|----------------------------|
| JU2      | 1-2*             | 600kHz switching frequency |
| JU2      | 1-3              | 450kHz switching frequency |
| JU2      | 1-4              | 200kHz switching frequency |
| JU2      | Open             | 300kHz switching frequency |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on TON.

Table 3. Pulse-Skipping Control Input ( SKIP )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                              |
|----------|------------------|--------------------------------------------------------------------------|
| JU3      | 1-2*             | Low-noise PWM mode.                                                      |
| JU3      | 2-3              | Pulse-skipping mode. Use only this position when evaluating the MAX8551. |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on SKIP .

Caution: Do not connect an external controller to the SKIP pad while a shunt is on jumper JU3.

Table 4. Shutdown Control Input A ( SHDNA )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU4      | 1-2              | The VDDQ buck output is enabled.   |
| JU4      | 2-3*             | The VDDQ buck output is shut down. |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on SHDNA . SHDNA is SHDN on the MAX8550A.

Caution: Do not connect an external controller to the SHDNA pad while a shunt is on jumper JU4.

<!-- image -->

## MAX8550 Evaluation Kit

Table 5. Shutdown Control Input B ( SHDNB )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                             |
|----------|------------------|-----------------------------------------|
| JU5      | 1-2*             | The VTT and VTTR outputs are enabled.   |
| JU5      | 2-3              | The VTT and VTTR outputs are shut down. |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on SHDNB . SHDNB is TP0 on the MAX8550A.

Caution: Do not connect an external controller to the SHDNB pad while a shunt is on jumper JU5.

Table 6. Standby Control Input (STBY)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                  |
|----------|------------------|------------------------------|
| JU6      | 1-2              | The VTT output is shut down. |
| JU6      | 2-3*             | Normal operation.            |

Note: Refer to the MAX8550/MAX8551 or MAX8550A data sheet for additional information on STBY. STBY is STBY on the MAX8550A.

Caution: Do not connect an external controller to the STBY pad while a shunt is on jumper JU6.

## Setting the Buck Regulator Output Voltage (VDDQ)

The output voltage of the buck regulator is preset to 2.5V on the MAX8550 EV kit for DDR memory applications. To pin-strap the output voltage to 1.8V follow the steps below:

- 1) Remove R9.
- 2) Solder the 0 Ω resistor from step 1 in the R7 location.

Refer to the MAX8550/MAX8551 data sheet to change the external components for optimum performance.

Low-Side MOSFET Snubber Circuit (Buck) Fast switching transitions cause ringing because of the resonating circuit formed by the parasitic inductance and capacitance at the switching LX node. This highfrequency ringing occurs at the LX node's rising and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8550 Evaluation Kit

falling  transitions  and  may  interfere  with  circuit  performance and generate EMI. To dampen this ringing, an optional series RC snubber circuit is added across the low-side switch. Below is a simple procedure for selecting the value of the series RC for the snubber circuit:

- 1) Connect a scope probe to the LX node labeled on the MAX8550 EV kit schematic and observe the ringing frequency, fR.
- 2) Estimate the circuit parasitic capacitance (CPAR) at LX by first finding a capacitor value, which, when connected from LX to PGND1, reduces the ringing frequency by half. CPAR can then be approximated as 1/3 the value of the capacitor value found.
- 3) Estimate the circuit parasitic inductance (LPAR) from the equation:

<!-- formula-not-decoded -->

- 4)

<!-- formula-not-decoded -->

Adjust the resistor value up or down to tailor the desired damping and the peak voltage excursion.

- 5) Capacitor C15 should be at least 2 to 4 times the value of CPAR to be effective.

The power loss of the snubber circuit (PWR\_SNUB) is dissipated in the resistor and can be calculated as:

<!-- formula-not-decoded -->

where VIN is the input voltage and fSW is the switching frequency. Choose the power rating of R12 according to the specific application's derating rule for the power dissipation calculated in the equation above.

Recommended snubber values for this EV kit are 3 Ω (R12) and 2.2nF (C15).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8550 Evaluation Kit

Figure 1. MAX8550 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX8550 Evaluation Kit

Figure 2. MAX8550 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX8550 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8550 Evaluation Kit

<!-- image -->

Figure 4. MAX8550 EV Kit PC Board Layout-Inner Layer 2 (GND, PGND1 and PGND2)

<!-- image -->

Figure 5. MAX8550 EV Kit PC Board Layout-Inner Layer 3 (GND, PGND1 and PGND2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8550 Evaluation Kit

Figure 6. MAX8550 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8