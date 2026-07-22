<!-- lastmod 2022-08-02 -->
## General Description

The MAX8668 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) for evaluating the MAX8668 dual step-down DC-DC converter with dual LDOs. The MAX8668 EV kit operates from a 2.6V to  5.5V  supply  and  provides  a  600mA step-down output, a 1200mA step-down output, and two 300mA LDO outputs. The EV kit comes with the MAX8668ETEA+ installed,  providing  two  adjustable  step-down outputs and two 2.8V preset LDO outputs. The adjustable output voltages for the two step-down converters are set to 1.2V (OUT1) and 1.8V (OUT2), and can be adjusted from 0.6V to 3.3V by changing resistors on the board. The MAX8668 EV kit can also be used to evaluate any version of the MAX8667 (preset step-down/preset LDO) or MAX8668 (adjustable step-down/preset LDO). Refer to the Selector Guide in the MAX8667/MAX8668 IC data sheet for a list of available preset output voltages.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 0.01µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103K Murata GRM155R71E103KA |
| C2            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106K                         |
| C3, C7        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K                       |
| C4            |     1 | 68pF, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H680J Murata GRM1555C1H680J         |
| C5            |     1 | 27pF, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H270J Murata GRM1555C1H270J         |
| C6            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225K                        |

<!-- image -->

## Features

- ♦ Tiny, Thin QFN, 3mm x 3mm IC Package
- ♦ Individual Enables
- ♦ Dual Step-Down Converters 600mA Guaranteed Current on OUT1 1200mA Guaranteed Current on OUT2 Output Voltage from 0.6V to 3.3V Ultra-Fast Line and Load Transients Low 25µA Supply Current Each
- ♦ Dual 300mA LDOs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8668EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C8, C9        |     2 | 4.7µF ±10%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A475K Murata GRM21BR61A475K |
| C10           |     1 | 56pF, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H560J Murata GRM1555C1H560J        |
| JU1-JU5       |     5 | 3-pin headers                                                                          |
| L1            |     1 | 2.2µH inductor Murata LQH32CN2R2M53                                                    |
| L2            |     1 | 2.3µH inductor Sumida CDRH4D22-2R3                                                     |
| R1, R6        |     2 | 200k Ω ±1% resistors (0402)                                                            |
| R2, R4        |     2 | 100k Ω ±1% resistors (0402)                                                            |
| R3, R5        |     2 | 402k Ω ±1% resistors (0402)                                                            |
| TP1, TP2      |     0 | Not installed, test points                                                             |
| U1            |     1 | MAX8668ETEA+ (16-pin Thin QFN, 3mm x 3mm)                                              |
| -             |     5 | Shunts, 2 positions                                                                    |
| -             |     1 | PCB: MAX8668 Evaluation Kit+                                                           |

## MAX8668 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 2.6V to 5.5V power supply capable of delivering 2.5A
- Voltmeter
- Loads (resistors or electronic loads)

## Procedure

The MAX8668 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Place a shunt across pins 2-3 of jumpers JU1-JU4 on the EV kit to enable all outputs.
- 2) Place a shunt across pins 2-3 of jumper JU5 for single-supply operation.
- 3) Set the power-supply voltage to 3.6V. Turn the power supply off. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive power-supply lead to the EV kit  pad  labeled  IN12.  Connect the power-supply ground to one of the EV kit pads labeled GND.
- 5) Connect loads between the EV kit pads labeled OUT\_ and GND.
- 6) Turn on the power supply.
- 7) Connect a voltmeter across the EV kit OUT\_ pads and GND to verify that the output voltage matches the voltages listed in Table 1.

## Table 1. Default Output Voltages and Maximum Load Current

| OUTPUT   | CONVERTER TYPE   |   DEFAULT VOLTAGE (V) |   MAXIMUM LOAD CURRENT (mA) |
|----------|------------------|-----------------------|-----------------------------|
| OUT1     | Step-down        |                   1.2 |                         600 |
| OUT2     | Step-down        |                   1.8 |                        1200 |
| OUT3     | LDO              |                   2.8 |                         300 |
| OUT4     | LDO              |                   2.8 |                         300 |

## Detailed Description

## Enable Inputs

The MAX8668 provides individual enable inputs for each regulator. On the MAX8668 EV kit, they are controlled by jumpers JU1-JU4. Place a shunt on pins 1-2 of the corresponding jumper to shut down the regulator, or place the shunt on pins 2-3 to enable the regulator.

## LDO Input Supply

The MAX8668 allows the LDO regulators to be powered from a supply range of 1.7V to VIN12. To power the LDOs from a separate external supply, remove the shunt from JU5 and connect the supply from IN34 to GND. To power the LDOs from OUT2, place a shunt across pins 1-2 of JU5. To use the step-down input supply (IN12) for the LDOs, place a shunt across pins 2-3 of JU5.

## Adjusting the Output Voltages

The step-down output voltages for the MAX8668 (OUT1 and OUT2) can be adjusted from 0.6V to 3.3V. This is done by changing the feedback resistors (R1 and R6 for  OUT1 or R3 and R5 for OUT2). For optimal performance, the feed-forward capacitor (C4 for OUT1 or C5 for  OUT2)  may  also  be  changed.  Refer  to  the MAX8667/MAX8668 IC data sheet for detailed information on calculating these component values.

## Evaluating Other Versions of the MAX8668

Other versions of the MAX8668 are available with different LDO output voltages. To evaluate one of these parts,  carefully  remove the MAX8668 from the EV kit board and replace it with the new part.

## Evaluating the MAX8667

The MAX8667 has factory-preset output voltages for both the step-down converters and the LDOs. To evaluate the MAX8667, carefully remove the IC from the EV kit  board  and replace it with the MAX8667. Remove components C4, C5, C10, R1, R2, R3, R4, R5, and R6, and then short the pads of R5 and R6.

Table 2. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                     |
|----------|------------|------------------------------------------------------------------------------|
| JU1      | 1-2        | Disable OUT1                                                                 |
| JU1      | 2-3        | Enable OUT1                                                                  |
| JU2      | 1-2        | Disable OUT2                                                                 |
| JU2      | 2-3        | Enable OUT2                                                                  |
| JU3      | 1-2        | Disable OUT3                                                                 |
| JU3      | 2-3        | Enable OUT3                                                                  |
| JU4      | 1-2        | Disable OUT4                                                                 |
| JU4      | 2-3        | Enable OUT4                                                                  |
| JU5      | 1-2        | LDOs are powered from OUT2                                                   |
| JU5      | 2-3        | LDOs are powered from IN12                                                   |
| JU5      | Open       | LDOs are powered from IN34 (external voltage supply between 1.7V to V IN12 ) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8668 Evaluation Kit

Figure 1. MAX8668 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8668 Evaluation Kit

<!-- image -->

Figure 2. MAX8668 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8668 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8668 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600