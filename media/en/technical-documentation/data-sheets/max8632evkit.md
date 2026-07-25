<!-- lastmod 2022-08-04 -->
## General Description

The MAX8632 evaluation kit (EV kit) is designed to evaluate the MAX8632 DDR power-supply solution for notebooks, desktops, and graphics cards. The EV kit board produces VDDQ at the output of the synchronous PWM buck, VTT at the output of the sourcing/sinking LDO linear regulator, and VTTR at the output of the reference buffer.

The VDDQ output is preset to 1.8V and sources up to 10A. The VTT output is always VDDQ/2 and can source/sink up to 3A of peak current and 1.5A of continuous current. The VTTR output is also always VDDQ/2 and can source/sink up to 10mA.

The MAX8632 EV kit was conveniently designed with jumpers to select the OVP/UVP, TON, SKIP , STBY , and SHDN modes. The board's default settings enable OVP (overvoltage protection), 300kHz switching frequency, low-noise PWM mode, VDDQ, VTT, and VTTR.

The VIN input accepts voltages from 7V to 20.5V and VDD requires a 5V bias supply.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R (0603) ceramic capacitor Taiyo Yuden EMK107BJ104MA                       |
| C2, C4A, C4B  |     3 | 10µF ±10%, 6.3V X5R (0805) ceramic capacitors Kemet C0805C106K9PAC Taiyo Yuden JMK212BJ106MG |
| C3, C6        |     2 | 1µF ±10%, 10V X5R (0603) ceramic capacitors TDK C1608X5R1A105K                               |
| C5            |     1 | 4.7µF ±20%, 6.3V (0805) X5R ceramic capacitor TDK C2012X5R0J475M                             |
| C7, C10       |     2 | 0.22µF ±20%, 16V X7R (0603) ceramic capacitors TDK C1608X7R1C224M                            |
| C8A, C8B, C8C |     3 | 10µF ±20%, 25V X5R (1210) ceramic capacitors Taiyo Yuden TMK325BJ106MM TDK C3225X5R1E106M    |

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE            |
|--------------|--------------|-----------------------|
| MAX8632EVKIT | 0°C to +70°C | 28 Thin QFN 5mm x 5mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                  |
|---------------|-------|--------------------------------------------------------------------------------------------------------------|
| C9            |     1 | 4700pF ±10%, 50V X7R (0603) ceramic capacitor Kemet C0603C472K5RAC or equivalent                             |
| C11, C12      |     2 | 150µF, 4V, 18m Ω POS capacitors Sanyo 4TPE150MI                                                              |
| D1            |     1 | Schottky diode, 30V, 100mA (SOD-323) Central CMDSH-3                                                         |
| JU1-JU4, JU6  |     5 | 3-pin headers, 0.1in center 36-pin header, 0.1in center Sullins PTC36SAAN or equivalent Digi-key S1012-36-ND |
| L1            |     1 | 1.4µH, 15.5A, 2.8m Ω power inductor Sumida CEP125-1R4MC-U                                                    |
| Q1            |     1 | 30V, 12m Ω (SO-8) n-channel MOSFET International Rectifier IRF7821                                           |
| Q2            |     1 | 30V, 4m Ω (SO-8) n-channel MOSFET International Rectifier IRF7832                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

- ♦ VDDQ Preset to 1.8V/10A
- ♦ VTT 0.9V Source/Sink 1.5A Continuous/3A Peak
- ♦ VTTR 0.9V Source/Sink 10mA
- ♦ VIN Range: 7V to 20.5V
- ♦ Optimized Switching Frequency: 300kHz
- ♦ Overvoltage/Undervoltage Protection
- ♦ Independent Shutdown and Standby Controls
- ♦ Power OK

## MAX8632 Evaluation Kit MAX8632 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                           |
|---------------|-------|-----------------------------------------------------------------------|
| R1            |     1 | 10 Ω ±5% (0603) resistor                                              |
| R2, R3, R4    |     3 | 100k Ω ±5% (0603) resistors                                           |
| R5            |     1 | 36.5k Ω ±1% (0603) resistor                                           |
| R13           |     1 | 20 Ω ±5% (0603) resistor                                              |
| R18           |     1 | 0 Ω ±5% (0603) resistor                                               |
| U1            |     1 | Integrated DDR power supply (28-pin, 5mm x 5mm, Thin QFN) MAX8632ETI+ |
| -             |     5 | Shunts Sullins STC02SYAN Digi-key S9000-ND or equivalent              |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com   |
| International Rectifier | 310-322-3331 | www.irf.com           |
| Kemet                   | 864-963-6300 | www.kemet.com         |
| Sanyo USA               | 619-661-6835 | www.sanyo.com         |
| Sumida                  | 847-545-6700 | www.sumida.com        |
| Taiyo Yuden             | 800-348-2496 | www.t-yuden.com       |
| TDK                     | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX8632 when contacting these component suppliers.

## Recommended Equipment

- 5VDC power supply (500mA rated)
- 7VDC to 20.5VDC power supply (5A rated)
- Two digital voltmeters (DVM)

## Quick Start

The MAX8632 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

- 1) Ensure a shunt is placed across pins 1-4 of jumper JU2 to enable OVP and UVP.
- 2) Ensure jumper JU1 is open to set the switching frequency to approximately 300kHz.
- 3) Ensure a shunt is placed across pins 1-2 of jumper JU3 to enable low-noise PWM mode.
- 4) Ensure a shunt is placed across pins 2-3 of jumper JU4 to disable the VDDQ buck output.
- 5) Ensure a shunt is placed across pins 2-3 of jumper JU6 to set the board in normal operation mode.
- 6) Connect the 5VDC power supply across the VDD pad and the GND pad nearest VIN.
- 7) Connect the 12VDC power supply across the VIN pad and the corresponding GND pad.
- 8) Turn on both of the power supplies.
- 9) Set JU4 (1-2). This turns VDDQ on.
10. 10)Using one of the DVMs, verify that the VDDQ voltage between the VDDQ and PGND pads is 1.8V (±2%).
11. 11)Using the other DVM, verify that the VTT voltage between the VTT and PGND pads is 0.9V (±2%).

## Detailed Description

## Jumper Selection

## Table 1. Overvoltage/Undervoltage Control Input (OVP/UVP)

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU2      | 1-2              | Disable OVP and UVP.     |
| JU2      | 1-3              | Enable UVP. Disable OVP. |
| JU2      | 1-4*             | Enable OVP and UVP.      |
| JU2      | Open             | Enable OVP. Disable UVP. |

Note: Refer to the MAX8632 data sheet for additional information on OVP/UVP.

## Setting the Buck Regulator Output Voltage (VDDQ)

The output voltage of the buck regulator is preset to 1.8V on the MAX8632 EV kit for DDR memory applications. To pin-strap the output voltage to 2.5V, follow the steps below:

- 1) Remove R18.
- 2) Solder the 0 Ω resistor from step 1 in the R9 location. Refer to the MAX8632 data sheet to change the external components for optimum performance.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. On-Time Selection Input (TON)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                |
|----------|------------------|----------------------------|
| JU1      | 1-2              | 600kHz switching frequency |
| JU1      | 1-3              | 450kHz switching frequency |
| JU1      | 1-4              | 200kHz switching frequency |
| JU1      | Open*            | 300kHz switching frequency |

Note: Refer to the MAX8632 data sheet for additional information on TON.

Table 3. Pulse-Skipping Control Input ( SKIP )

| JUMPER   | SHUNT POSITION   | DESCRIPTION          |
|----------|------------------|----------------------|
| JU3      | 1-2*             | Low-noise PWM mode.  |
| JU3      | 2-3              | Pulse-skipping mode. |

Note: Refer to the MAX8632 data sheet for additional information on SKIP .

<!-- image -->

## MAX8632 Evaluation Kit

Table 4. Shutdown Control Input ( SHDN )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                        |
|----------|------------------|------------------------------------|
| JU4      | 1-2              | The VDDQ buck output is enabled.   |
| JU4      | 2-3*             | The VDDQ buck output is shut down. |

Note: Refer to the MAX8632 data sheet for additional information on SHDN .

Table 5. Standby Control Input ( STBY )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                  |
|----------|------------------|------------------------------|
| JU6      | 2-3              | The VTT output is shut down. |
| JU6      | 1-2*             | Normal operation.            |

Note: Refer to the MAX8632 data sheet for additional information on STBY .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit

Figure 1. MAX8632 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit MAX8632 Evaluation Kit

Figure 2. MAX8632 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit

Figure 3. MAX8632 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit

Figure 4. MAX8632 EV Kit PC Board Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit

Figure 5. MAX8632 EV Kit PC Board Layout-Inner Layer 3

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8632 Evaluation Kit MAX8632 Evaluation Kit

Figure 6. MAX8632 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9