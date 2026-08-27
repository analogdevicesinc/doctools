<!-- lastmod 2022-08-02 -->
## General Description

The MAX1515 evaluation kit (EV kit) is designed to evaluate the MAX1515 constant off-time, pulse-width-modulated (PWM) source/sink step-down DC-DC converter that  is  optimized  for  use  in  low-voltage  active-termination  power solutions in notebook and subnotebook computers. The EV kit board defaults in DDR mode and accepts 1.3V to 3.6V at VIN, 3.3V at VDD as the bias, and 2.5V or 1.8V at VDDQ as the reference. An output voltage is produced at VOUT equal to VDDQ / 2 that can sink or source 2.5A.

In  non-DDR mode, the voltage at VOUT is pin selectable with the following options: 1.5V, 1.8V, or 2.5V. In addition, the voltage at VOUT is adjustable from 0.5V to 2.7V.

The MAX1515 EV kit is conveniently designed with jumpers to activate the feedback selection (FBSEL0, FBSEL1), reference selection (REFIN), DDR mode (MODE), pulse-skipping mode ( SKIP ),  and  shutdown mode ( SHDN ).

| DESIGNATION     |   QTY | DESCRIPTION                                                                             |
|-----------------|-------|-----------------------------------------------------------------------------------------|
| C1              |     1 | 22µF, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J226                               |
| C2              |     1 | 220µF, 4V, 15m Ω , 3.1A RMS POSCAP (D2E) Sanyo 4TPE220MF                                |
| C3, C4, C8      |     3 | 0.01µF ±10%, 25V X7R ceramic capacitors (0402) Murata GRP155R71E103J TDK C1005X7R1E103K |
| C5              |     1 | 470pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRP155R71H471K TDK C1005COG1H471J    |
| C6, C7, C9, C11 |     4 | 1µF ±20%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105M                         |
| C10             |     1 | 0.47µF ±20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J474M                       |

- ♦ 1.3V to 3.6V VIN Range
- ♦ VOUT Range: 0.5V to 2.7V at 2.5A
- ♦ Pin-Selectable Output Voltages: 1.5V, 1.8V, or 2.5V at 2.5A
- ♦ DDR Mode Enable ( MODE )
- ♦ Forced PWM/Pulse-Skipping Selection ( SKIP )
- ♦ Optimized Switching Frequency: 500kHz
- ♦ Shutdown Input ( SHDN )
- ♦ Power-Good Output (PGOOD)

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE          |
|--------------|--------------|---------------------|
| MAX1515EVKIT | 0°C to +70°C | 24 TQFN (4mm x 4mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C12           |     1 | 0.01µF ±10%, 16V X7R reverse- termination ceramic capacitor (0306) TDK C0816X7R1C103K |
| C13           |     1 | 100µF, 4V, 35m Ω , 1.4A RMS POSCAP (B2) Sanyo 4TPE100MZB                              |
| D2, D3        |     0 | Not installed, diodes (SOD123)                                                        |
| L1            |     1 | 1.2µH inductor (7.6mm x 7.6mm x 3mm) Sumida CDR7D28MN-1R2                             |
| R1            |     1 | 110k Ω ±1% resistor (0402)                                                            |
| R2, R3        |     2 | 10k Ω ±1% resistors (0402)                                                            |
| R4            |     1 | 100k Ω ±5% resistor (0402)                                                            |
| R5            |     1 | 10 Ω ±5% resistor (0402)                                                              |
| R6            |     0 | Shorted trace resistor (0402)                                                         |
| R7            |     0 | Not installed, resistor (0402)                                                        |
| U1            |     1 | MAX1515ETG (4mm x 4mm 24-pin thin QFN)                                                |
| None          |     6 | 3-pin headers                                                                         |
| None          |     1 | MAX1515 evaluation kit PC board                                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX1515 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.5VDC power supply (2.5A rated): VIN/VDDQ
- 3.3VDC power supply: VDD
- 2 digital voltmeters (DVMs)

The MAX1515 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed:

- 1) Verify the shunts are placed in the proper positions
2. for the jumpers below: JU0 (2-3): FBSEL0 = GND. JU1 (2-3): FBSEL1 = GND. VOUT = VREFIN. JU2 (1-2): MODE = VCC. DDR mode enabled. JU3 (1-2): REFIN = VDDQ / 2. JU4 (1-2): SHDN = VCC. Shutdown mode disabled. JU5  (1-2): SKIP =  VCC.  Forced-PWM  mode enabled.
- 2) Connect the 2.5VDC power supply rated for 2.5A across the VIN pad and the corresponding PGND pad.
- 3) Connect the 3.3VDC power supply across the VDD pad and the corresponding PGND pad.
- 4) Turn on both supplies: VDD = 3.3V and VIN = 2.5V. (Power-up sequence does not matter.)
- 5) Using a DVM, verify that the REFOUT voltage between the REFOUT and GND pads is 1.25V.
- 6) Using the other DVM, verify that the VOUT voltage between the VOUT and PGND pads is 1.25V.

## Detailed Description

The MAX1515 EV kit is designed to evaluate the MAX1515 constant off-time, PWM source/sink stepdown DC-DC converter that is optimized for use in lowvoltage, active-termination power solutions in notebook and subnotebook computers.

## Setting the Output Voltage in DDR Mode (VOUT = VTT)

In DDR mode, the voltage produced at VOUT is equal to  REFIN (VDDQ / 2) and can sink or source 2.5A. Connect FBSEL0 and FBSEL1 to GND for DDR mode.

## Setting the Output Voltage in Non-DDR Mode (VOUT)

In  non-DDR mode, the voltage at VOUT is pin selectable with the following options: 1.5V, 1.8V, or 2.5V. See Table 1 for the correct FBSEL0 and FBSEL1 settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

In addition, the voltage at VOUT is adjustable from 1.1V to 2.7V by setting the FBSEL0/FBSEL1 to GND, shorting REFIN to REF, opening the PC board short across R6, and installing R6 and R7. Calculate R6 using the following equation:

<!-- formula-not-decoded -->

where VREF = 1.1V, R7 = 100k Ω .

The voltage at VOUT is also adjustable from 0.5V to 1.1V by setting FBSEL0/FBSEL1 to GND and directly driving REFIN to a voltage equal to the desired voltage at VOUT. When adjusting VOUT from 0.5V to 1.1V, use the following equation:

<!-- formula-not-decoded -->

Table 1 shows the proper jumper configurations for setting the output voltage.

## Jumper Settings

See Tables 1-5 for all jumper setting descriptions on the MAX1515 EV kit.

## Table 1. Output Voltage Settings (FBSEL0/FBSEL1)

| FBSEL0 JU0   | FBSEL1 JU1   | DESCRIPTION               |
|--------------|--------------|---------------------------|
| 2-3*         | 2-3*         | Adjustable V FB = V REFIN |
| 2-3          | 1-2          | 1.5V                      |
| 1-2          | 2-3          | 1.8V                      |
| 1-2          | 1-2          | 2.5V                      |

Note: Refer to the MAX1515 data sheet for additional information on FBSEL0/FBSEL1.

## Table 2. DDR Mode (MODE)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                       |
|----------|------------------|-----------------------------------|
| JU2      | 1-2*             | DDR mode (REFOUT is active)       |
| JU2      | 2-3              | Non-DDR mode (REFOUT is disabled) |

Note: Refer to the MAX1515 data sheet for additional information on MODE.

<!-- image -->

Table 3. REFIN Selection (REFIN)

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU3      | 1-2*             | REFIN = VDDQ / 2 |
| JU3      | 2-3              | REFIN = REF      |

Note: Refer to the MAX1515 data sheet for additional information on REFIN.

Table 4. Shutdown Control Input ( SHDN )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                     |
|----------|------------------|-------------------------------------------------------------------------------------------------|
| JU4      | 1-2*             | The MAX1515 is in normal operation.                                                             |
| JU4      | 2-3              | The MAX1515 is in low-power shutdown. REFOUT is only in shutdown when MODE is connected to GND. |

* = Default position.

Note: Refer to the MAX1515 data sheet for additional information on SHDN .

## MAX1515 Evaluation Kit

Table 5. Pulse-Skipping Control Input ( SKIP )

| JUMPER   | SHUNT POSITION   | DESCRIPTION                   |
|----------|------------------|-------------------------------|
| JU5      | 1-2*             | Low-noise forced PWM mode     |
| JU5      | 2-3              | Low-power pulse-skipping mode |

Note: Refer to the MAX1515 data sheet for additional information on SKIP .

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| Sanyo USA  | 619-661-6835 | www.sanyo.com         |
| Sumida USA | 847-545-6700 | www.sumida.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX1515 when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1515 Evaluation Kit

Figure 1. MAX1515 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1515 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1515 EV Kit PC Board Layout-Inner Layer 2 (GND, PGND)

<!-- image -->

## MAX1515 Evaluation Kit

Figure 3. MAX1515 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1515 EV Kit PC Board Layout-Inner Layer 3 (GND, PGND)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1515 Evaluation Kit

Figure 6. MAX1515 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600