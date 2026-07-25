<!-- lastmod 2022-08-03 -->
<!-- image -->

## Supervisory Circuit Evaluation Kit

## General Description

Maxim's line of supervisory circuits offers multiple wafer trimmable options, leading to thousands of variations. The large number of variations makes it difficult to offer samples for each unique version. The Supervisory Circuit Evaluation Kit (SUPEVKIT) has been developed to  emulate all  the  different  variations  of  the  MAX63XX line. It reproduces the logic of this line but not the electrical characteristics. Any device in these product families  can be emulated simply by changing jumper settings and using a capacitor, if required.

The SUPEVKIT supports the following MAX63XX devices:

| MAX6305   | MAX6315   | MAX6322HP   |
|-----------|-----------|-------------|
| MAX6306   | MAX6316L  | MAX6326     |
| MAX6307   | MAX6316M  | MAX6327     |
| MAX6308   | MAX6317H  | MAX6328     |
| MAX6309   | MAX6318LH | MAX6332*    |
| MAX6310   | MAX6318MH | MAX6333*    |
| MAX6311   | MAX6319LH | MAX6334*    |
| MAX6312   | MAX6319MH | MAX6335*    |
| MAX6313   | MAX6320P  | MAX6336*    |
| MAX6314   | MAX6321HP | MAX6337*    |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Central Semiconductor | 515-435-1110 | 515-435-1824 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1            |     1 | 470pF, ±20% ceramic capacitor                            |
| C2            |     0 | Not installed (user supplied)                            |
| C3, C4        |     0 | Not installed (user supplied)                            |
| C5            |     1 | 0.01µF, ±20% ceramic capacitor                           |
| C6            |     1 | 0.068µF, ±20% ceramic capacitor                          |
| C7            |     1 | 0.47µF, ±10% ceramic capacitor Taiyo Yuden TMK316BJ474KL |
| JU1, JU2      |     2 | 3-pin jumpers                                            |
| JU3, JU4, JU5 |     3 | 2-pin jumpers                                            |
| R1, R8        |     2 | 30k Ω , 5% resistors                                     |
| R2, R9        |     2 | 39k Ω , 5% resistors                                     |

- ' Easy to Configure
- '
- Five Reset Outputs Bidirectional RESET Open-Drain RESET Push/Pull RESET Push/Pull RESET Open-Drain RESET
- ' Adjustable Reset Timeout
- ' Manual Reset Input
- ' Adjustable Under/Overvoltage Supply Monitoring
- ' Adjustable Watchdog Timeout
- ' Reset Valid Down to VCC = 1V
- ' Immune to Short Negative-Going VCC Transients
- ' Assembled and Tested

## Ordering Information

| PART     | TEMPERATURE   |
|----------|---------------|
| SUPEVKIT | +25°C         |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                           |
|---------------------------|-------|-------------------------------------------------------|
| R3, R4, R5, R10, R13, R16 |     6 | 10k Ω , 5% resistors                                  |
| R6, R7                    |     2 | 1M Ω , 5% resistors                                   |
| R11, R12, R14, R15, R17   |     5 | 100k Ω , 5% resistors                                 |
| R18, R19                  |     2 | 100k Ω trimmer potentiometers                         |
| Q1                        |     1 | 2N3906 PNP transistor Central Semiconductor CMPT3906  |
| Q2-Q5                     |     4 | 2N3904 NPN transistors Central Semiconductor CMPT3904 |
| U1                        |     1 | MAX969EEE                                             |
| U2                        |     1 | MAX6303CUA                                            |
| U3                        |     1 | MAX6314US26D1-T                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

## Supervisory Circuit Evaluation Kit

## Quick Start

Before you begin, you will need the following equipment:

- A 1V to 5.5V variable DC power supply
- A voltmeter
- A trimmer potentiometer adjustment tool (small flat-blade screwdriver)

Table 1 lists the features that can be emulated by the SUPEVKIT. Refer to the corresponding device's data sheet to look up the specifications for these features.

To configure the supervisory circuit, take the following steps:

- 1) Install  jumpers  JU2-JU5 in the positions listed in Table 1.

Example: For the MAX6320PUK33BX-T, the jumper settings are JU2 = 2-3, JU3 = open, JU4 = closed, and JU5 = closed.

- 2) Set the reset timeout period, referring to Table 2 to determine which trace (if any) needs to be cut.

Example: For the MAX6320PUK33BX-T, the reset timeout period is 20ms, so it is necessary to cut the trace between C5 and C6.

- 3) If  the  selected  supervisory  circuit  has  a  watchdog timeout feature, consult Table 3 to determine which capacitor value to use for C2 and which position to use for jumper JU1.

Example: For the MAX6320PUK33BX-T, the watchdog timeout period is 71ms. Use a value of 0.039µF for capacitor C2. Jumper JU1 should be in the 2-3 position.

- 4) Turn on the power supply and connect it to the voltmeter. Set the power-supply voltage to the desired reset threshold voltage. The accuracy of the trip threshold is determined by the accuracy of the voltmeter.

Example: For the MAX6320PUK33BX-T, set the power supply to 3.30V.

- 5) Connect the power supply to the SUPEVKIT at the pads labeled VCC and GND. The SUPEVKIT operates from +1V to +5.5V. The supply voltage must not exceed +5.5V.
- 6) Connect the voltmeter to the pads labeled TP and GND.
- 7) Turn potentiometer R18 clockwise until the voltmeter reading goes high (approximately equal to VCC). Then slowly turn potentiometer R18 counterclockwise until the voltmeter reading decreases
4. to 0. The reset threshold voltage on the SUPEVKIT is now set.
- 8) Connect the SUPEVKIT to the test circuit, using the device inputs and outputs listed in Table 1.

Example: The MAX6320PUK33BX-T uses pads MR , WDI, and RESETOD.

## Detailed Description

## Watchdog Circuit

A watchdog circuit consists of an input (WDI) and an output (RESET). If WDI is not toggled within the watchdog timeout period (which is a predetermined amount of time), then a RESET is issued. Disable the watchdog function by installing jumper JU3.

Capacitor C2 selects the watchdog timeout period. To choose a value for this capacitor, refer to Table 3 or use the following formula:

<!-- formula-not-decoded -->

where tWD is the watchdog timeout period in µs and C2 is in pF.

The SUPEVKIT features two modes of watchdog timer operation: normal mode and extended mode. In normal mode (JU1 = 2-3), the formula shown above determines the watchdog timeout period. In extended mode (JU1 = 1-2), the watchdog timeout (tWD) is multiplied by a factor of 500.

Note: In  extended mode operation, leaving pad WDI floating disables the watchdog feature.

## Reset Outputs

The SUPEVKIT has five reset outputs: active-low push/pull ( RESET ),  active-low  bidirectional  ( RESETBD ), active-low open-drain ( RESETOD ), active-high push/pull (RESET), and active-high open-drain (RESETOD).

These outputs are valid down to VCC = 1V. The reset timeout period is the amount of time RESET is asserted after VCC rises above the reset threshold voltage.

Capacitors C1, C5, C6, and C7 set the reset timeout period. The SUPEVKIT comes with the period set at 1120ms. To change the period to either 1ms, 20ms, or 140ms, cut a PC board trace as specified in Table 2.

The bidirectional reset output of the SUPEVKIT is valid only for reset threshold voltages down to 2.63V.

## Undervoltage Setup

Potentiometer R18 sets the undervoltage reset threshold. To enable the undervoltage reset feature, install the jumpers in the positions specified in Table 4. Use a voltmeter to set the power-supply voltage to the desired trip

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Supervisory Circuit Evaluation Kit

Table 1.  Devices and Settings

| DEVICE    | DEVICE   | DEVICE   | DEVICE   | DEVICE   | DEVICE   | DEVICE OUTPUTS   | DEVICE OUTPUTS   | DEVICE OUTPUTS   | DEVICE OUTPUTS   | DEVICE OUTPUTS   | USER SETTINGS   | USER SETTINGS   | USER SETTINGS   | USER SETTINGS   | USER SETTINGS   | USER SETTINGS   |
|-----------|----------|----------|----------|----------|----------|------------------|------------------|------------------|------------------|------------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| DEVICE    | RSTIN1   | RSTIN2   | OVERSTIN | MR       | WDI      | RESET            | RESETOD          | RESET            | RESETOD          | RESETBD          | INSTALL         | ADJUST          | JU2             | JU3             | JU4             | JU5             |
| MAX6305   | X        | X        |          |          |          |                  |                  |                  | X                |                  |                 |                 | 2-3             | closed          | open            | open            |
| MAX6306   |          | X        |          | X        |          |                  |                  |                  | X                |                  |                 | R18             | 2-3             | closed          | closed          | open            |
| MAX6307   |          | X        | X        |          |          |                  |                  |                  | X                |                  |                 | R18             | open            | closed          | closed          | open            |
| MAX6308   | X        | X        |          |          |          |                  |                  | X                |                  |                  |                 |                 | 2-3             | closed          | open            | open            |
| MAX6309   |          | X        |          | X        |          |                  |                  | X                |                  |                  |                 | R18             | 2-3             | closed          | closed          | open            |
| MAX6310   |          | X        | X        |          |          |                  |                  | X                |                  |                  |                 | R18             | open            | closed          | closed          | open            |
| MAX6311   | X        | X        |          |          |          | X                |                  |                  |                  |                  |                 |                 | 2-3             | closed          | open            | open            |
| MAX6312   |          | X        |          | X        |          | X                |                  |                  |                  |                  |                 | R18             | 2-3             | closed          | closed          | open            |
| MAX6313   |          | X        | X        |          |          | X                |                  |                  |                  |                  |                 | R18             | open            | closed          | closed          | open            |
| MAX6314   |          |          |          | X        |          |                  |                  |                  |                  | X                |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6315   |          |          |          | X        |          |                  |                  |                  | X                |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6316L  |          |          |          | X        | X        |                  |                  | X                |                  |                  | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6316M  |          |          |          | X        | X        |                  |                  |                  |                  | X                | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6317H  |          |          |          | X        | X        | X                |                  |                  |                  |                  | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6318LH |          |          |          |          | X        | X                |                  | X                |                  |                  | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6318MH |          |          |          |          | X        | X                |                  |                  |                  | X                | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6319LH |          |          |          | X        |          | X                |                  | X                |                  |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6319MH |          |          |          | X        |          | X                |                  |                  |                  | X                |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6320P  |          |          |          | X        | X        |                  |                  |                  | X                |                  | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6321HP |          |          |          |          | X        | X                |                  |                  | X                |                  | C2              | R18             | 2-3             | open            | closed          | closed          |
| MAX6322HP |          |          |          | X        |          | X                |                  |                  | X                |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6326   |          |          |          |          |          |                  |                  | X                |                  |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6327   |          |          |          |          |          | X                |                  |                  |                  |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6328   |          |          |          |          |          |                  |                  |                  | X                |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6332   |          |          |          |          |          | X                |                  |                  |                  |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6333   |          |          |          |          |          |                  |                  | X                |                  |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
| MAX6334   |          |          |          |          |          |                  |                  |                  | X                |                  |                 | R18             | 2-3             | closed          | closed          | closed          |
|           |          |          |          |          |          |                  |                  |                  |                  |                  |                 |                 | 2-3             | closed          |                 | closed          |
| MAX6335   |          |          |          | X        |          | X                |                  |                  |                  |                  |                 | R18             |                 |                 | closed          |                 |
| MAX6336   |          |          |          | X X      |          |                  |                  | X                | X                |                  |                 | R18             | 2-3             | closed closed   | closed closed   | closed closed   |
| MAX6337   |          |          |          |          |          |                  |                  |                  |                  |                  |                 | R18             | 2-3             |                 |                 |                 |

Note:

All devices require VCC and GND connections.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## Supervisory Circuit Evaluation Kit

voltage. Connect a voltmeter or oscilloscope to the TP pad. Turn R18 clockwise until the voltage at TP goes high (VCC). Slowly turn R18 counterclockwise until the voltage goes low. The SUPEVKIT is now set to trip when the supply voltage decreases to this voltage. To disable undervoltage reset, open jumper JU4.

## Overvoltage Setup

Potentiometer R19 sets the overvoltage reset threshold. To enable the overvoltage reset feature, install the jumpers in the positions specified in Table 5. Use a voltmeter to set the power-supply voltage to the desired trip voltage. Connect a voltmeter or oscilloscope to the TP pad. Turn R19 clockwise until the voltage at TP goes high (VCC). Slowly turn R19 counterclockwise until the voltage goes low. The SUPEVKIT is now set to trip when the supply voltage increases to this voltage. To disable overvoltage reset, move JU2's shunt to position 2-3.

Note: If the voltage at TP does not pull high after turning R19 clockwise for 14 turns, turn R18 counterclockwise. The undervoltage trip point might be set higher than the supply voltage, holding the SUPEVKIT in reset.

## Negative-Going VCC Transients

The SUPEVKIT is relatively immune to short-duration negative-going transients (glitches). If more immunity is required, install 0.1µF bypass capacitors for C3 and C4.

Table 2.  Selecting the Reset Timeout Period

|   MINIMUM TIMEOUT PERIOD (ms) | CUT TRACE BETWEEN:    |
|-------------------------------|-----------------------|
|                             1 | C1 and C5             |
|                            20 | C5 and C6             |
|                           140 | C6 and C7             |
|                          1120 | No cutting necessary* |

*Default jumper state.

Table 3. Capacitance Values for Common Watchdog Timeout Periods

| MINIMUM WATCHDOG TIMEOUT (t WD )   | C1 VALUE     | JU1 STATE   |
|------------------------------------|--------------|-------------|
| 4.3ms                              | 2200pF ±20%  | 2-3         |
| 71ms                               | 0.039µF ±20% | 2-3         |
| 1.12sec                            | 1200pF ±20%  | 1-2         |
| 17.9sec                            | 0.018µF ±20% | 1-2         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 4.  Undervoltage Setup

| JUMPER   | STATE   |
|----------|---------|
| JU2      | 2-3     |
| JU3      | Closed  |
| JU4      | Closed  |
| JU5      | Closed  |

Table 5.  Overvoltage Setup

| JUMPER   | STATE   |
|----------|---------|
| JU2      | 1-2     |
| JU3      | Closed  |
| JU4      | Closed  |
| JU5      | Closed  |

Table 6.  Jumper Function Table

| JUMPER   | STATE   | FUNCTION                                           |
|----------|---------|----------------------------------------------------|
| JU1      | 1-2     | Watchdog-select connected to V CC (extended mode). |
| JU1      | 2-3*    | Watchdog-select connected to GND (normal mode).    |
| JU2      | 1-2     | Use R19 to set overvoltage threshold.              |
| JU2      | 2-3*    | Disable overvoltage comparator.                    |
| JU2      | Open    | Use OVRSTIN pad.                                   |
| JU3      | Open    | Use watchdog function (insert C2).                 |
| JU3      | Closed* | Disable watchdog function.                         |
| JU4      | Open    | Use RSTIN1 pad.                                    |
| JU4      | Closed* | Use R18 to set undervoltage threshold.             |
| JU5      | Open    | Use RSTIN2 pad.                                    |
| JU5      | Closed* | Disable RSTIN2 undervoltage comparator.            |

*Default jumper state.

## Supervisory Circuit Evaluation Kit

Pad Description

| PAD NAME   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V CC       | Supply Voltage and Reset Threshold Monitor Input (1V to 5.5V)                                                                                                                                                                                                                                                                                                                                                                                                 |
| GND        | Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| WDI        | Watchdog Input. A rising or falling transition must occur on this input within the selected watchdog timeout period, or a reset will occur.                                                                                                                                                                                                                                                                                                                   |
| RSTIN1     | Undervoltage Reset Comparator Input. Asserts reset when the monitored voltage falls below the programmed thresh- old. Set the reset threshold with an external resistor-divider.                                                                                                                                                                                                                                                                              |
| RSTIN2     | Undervoltage Reset Comparator Input. Asserts reset when the monitored voltage falls below the programmed threshold. Set the reset threshold with an external resistor-divider.                                                                                                                                                                                                                                                                                |
| OVRSTIN    | Overvoltage Reset Comparator Input. Asserts reset when the monitored voltage exceeds the programmed thresh- old. Set the reset threshold with an external resistor-divider.                                                                                                                                                                                                                                                                                   |
| MR         | Manual Reset Input. A logic low on MR asserts reset. Reset remains asserted as long as MR is low, and for the duration of the reset timeout period (t RP ) after the reset condition is terminated.                                                                                                                                                                                                                                                           |
| RESET      | Push/Pull, Active-High Reset Output. RESET changes from low to high whenever a reset condition occurs. After the reset condition is terminated, RESET remains high for the duration of the reset timeout period and then goes low.                                                                                                                                                                                                                            |
| RESETOD    | Open-Drain, Active-High Reset Output. RESETOD is asserted high whenever a reset condition occurs. After the reset condition is terminated, RESETOD remains high for the duration of the reset timeout period.                                                                                                                                                                                                                                                 |
| RESET      | Push/Pull, Active-Low Reset Output. RESET changes from high to low whenever a reset condition occurs. RESET remains low for the duration of the reset timeout period. After the reset condition is terminated, RESET remains low for the duration of the timeout period and then goes high.                                                                                                                                                                   |
| RESETOD    | Open-Drain, Active-Low Reset Output. RESETOD is asserted low whenever a reset condition occurs. After the reset condition is terminated, RESETOD remains low for the duration of the reset timeout period.                                                                                                                                                                                                                                                    |
| RESETBD    | Bidirectional, Active-Low Reset Output. RESETBD changes from high to low whenever a reset condition occurs. After the reset condition is terminated, RESETBD remains low for the duration of the reset timeout period and then goes high. In addition to the normal N-channel pull-down, RESETBD has a P-channel pull-up transistor in parallel with a 4.7k Ω resistor to facilitate connection to µPs with bidirectional resets. See the MAX6314 data sheet. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  SUPEVKIT Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  SUPEVKIT Component Placement GuideComponent Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Supervisory Circuit Evaluation Kit

Figure 3.  SUPEVKIT PC Board Layout-Component Side

<!-- image -->

Figure 4.  SUPEVKIT PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products.