<!-- lastmod 2022-08-05 -->
## General Description

The MAX745 evaluation kit (EV kit) is an assembled and tested PC board that implements a step-down, switching power supply designed for charging lithium-ion (LiIon) batteries. The output voltage can be set for one to four  cells.  The  cell  voltage  can  be  set  between  4.0V and 4.4V, with 0.75% accuracy, using standard 1% resistors. Two LEDs indicate the charging status.

The MAX745 should be used to charge only Li-Ion battery packs. To charge other types of batteries, use the MAX1648 or the MAX712/MAX713. To charge SMBus™ smart-battery packs, use the MAX1645/MAX1647/ MAX1667.

## Component Suppliers

| SUPPLIER*               | PHONE        | FAX          |
|-------------------------|--------------|--------------|
| AVX                     | 803-946-0690 | 803-626-3123 |
| Dale-Vishay             | 402-564-3131 | 402-563-6418 |
| International Rectifier | 310-322-3331 | 310-322-3377 |
| IRC                     | 512-992-7900 | 512-992-3377 |
| Kemet                   | 864-963-6300 | 864-963-6322 |
| Motorola                | 602-303-5454 | 602-996-6430 |
| Murata                  | 770-436-1300 | 770-436-3030 |
| Sanyo                   | 619-661-6835 | 619-661-1055 |
| Sumida                  | 847-956-6835 | 847-956-0702 |
| TDK                     | 847-803-6100 | 847-390-4405 |

| DESIGNATION     |   QTY | DESCRIPTION                                                           |
|-----------------|-------|-----------------------------------------------------------------------|
| C1              |     1 | 68µF, 20V, 0.150 Ω , low-ESR tantalum capacitor AVX TPSE686M020R0150  |
| C2, C7, C9, C12 |     4 | 0.1µF ceramic capacitors                                              |
| C3              |     1 | 47nF ceramic capacitor                                                |
| C4              |     1 | 0.22µF ceramic capacitor                                              |
| C5              |     1 | 4.7µF ceramic capacitor TDK C2012X5R0J475K Murata GRM21BR60J475M      |
| C6              |     0 | Open                                                                  |
| C8, C10         |     2 | 150µF, 35V, 0.17 Ω , aluminum electrolytic capacitors Sanyo 35CV150GX |

SMBus is a trademark of Intel Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Charges One to Four Li-Ion Cells
- ♦ Low Heat/High Efficiency
- ♦ 300kHz PWM Operation
- ♦ 0.75% Overall Accuracy over Temperature
- ♦ 6V to 24V Input Voltage Range
- ♦ Proven PC Board Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART        | TEMP RANGE   | BOARD TYPE    |
|-------------|--------------|---------------|
| MAX745EVKIT | 0°C to +70°C | Surface Mount |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C11           |     1 | 1000pF ceramic capacitor                                                            |
| D1, D4, D6    |     3 | 3A, 40V, surface-mount Schottky diodes Motorola MBRS340T3                           |
| D2            |     1 | 1N4148-type signal diode (SOT23)                                                    |
| J3, J4        |     2 | Banana jacks                                                                        |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                       |
| JU4           |     1 | 2-pin header                                                                        |
| L1            |     1 | 22µH, 2.8A surface-mount inductor Sumida CDRH125-220                                |
| LED1, LED2    |     2 | Light-emitting diodes                                                               |
| M1            |     1 | 2A, 30V, 0.080 Ω , logic-level, dual, N-channel FET International Rectifier IRF7303 |

Maxim Integrated Products 1

## MAX745 Evaluation Kit

## Component List (continued)

| DESIGNATION       |   QTY | DESCRIPTION                                                         |
|-------------------|-------|---------------------------------------------------------------------|
| R1                |     1 | 0.100 Ω ±1% sense resistor Dale WSL-2010-R1F or IRC LR2010-01-R100F |
| R2, R15           |     2 | 10k Ω ±5% surface-mount resistors                                   |
| R3, R11, R12, R16 |     4 | 100k Ω ±1% surface-mount resistors                                  |
| R4, R5, R10       |     0 | Shorted                                                             |
| R6, R7            |     2 | 1k Ω ±5%, surface-mount resistors                                   |
| R13               |     1 | 8k Ω ±5%, surface-mount resistor                                    |
| R14               |     1 | 24 Ω ±5%, surface-mount resistor                                    |
| U1                |     1 | Maxim MAX745EAP                                                     |
| U2                |     1 | Maxim MAX931CSA                                                     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

Do not turn on power until all connections are complete. Observe all precautions on the battery manufacturer's data sheet. Use only lithium-ion (Li-Ion) cells with this charger.

- 1) Set jumpers JU1 and JU2 to indicate the number of cells in the battery pack (Table 1).
- 2) Set jumper JU3 to the 2A position to enable 2A output current (Table 2).
- 3) Make sure that jumper JU4 is open to enable charger output.
- 4) Connect a DC power supply with sufficient power rating across the VIN and GND banana jacks (VIN is  positive,  GND is negative). DC input voltage should be between 6V and 24V.

## Table 1. Configuring Number of Li-Ion Cells

|   NUMBER OF CELLS | VOLTAGE ADJUSTMANT RANGE   | JU1 POSITION   | JU2 POSITION   |
|-------------------|----------------------------|----------------|----------------|
|                 1 | 4V-4.4V                    | 1, 2           | 1, 3           |
|                 2 | 8V-8.8V                    | 1, 2           | 2, 4           |
|                 3 | 12V-13.2V                  | 3, 4           | 1, 3           |
|                 4 | 16V-17.6V                  | 3, 4           | 2, 4           |

- 5) Connect a Li-Ion battery pack between BATT and GND (BATT is positive, GND is negative). The battery can be connected with the charger off without causing damage, or it can be connected after power is applied.
- 6) Turn on the DC power supply. Fast charging begins as soon as the battery is connected and the DC power supply is on.
- 7) When the STATUS LED turns on, the charger is operating in current-regulating mode (fast charge). When the STATUS LED turns off, the charger is operating in voltage-regulating mode (float charge).
- 8) When the DONE LED turns on, the charging current has fallen below the threshold set by R13, indicating that charging is over. The charger can be shut down by closing jumper JU4.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

Upon insertion, batteries are fast charged at a constant current. Batteries enter float charge when the total battery terminal voltage reaches the voltage limit.

LED2 (STATUS) indicates that the charger is in currentregulating mode. This signal can be used to detect the transition from fast charge to float charge.

LED1 (DONE) indicates that the battery current (fast charge) is below the 1.6A threshold set by R13 = 8k Ω . The IBAT output pin sources a current that is proportional  to  the  load  current,  and  comparator  U2  detects when that load current exceeds 1.182V. R13 should not cause the IBAT voltage to exceed 2V under maximum load current. Refer to the MAX745 data sheet.

## Table 2. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                    |
|----------|---------|---------------------------------------------|
| JU1      | 3, 4    | CELL1 = VL; three or four cells selected.   |
| JU1      | 1, 2    | CELL1 = GND; one or two cells selected.     |
| JU2      | 2, 4    | CELL0 = VL; two or four cells selected.     |
| JU2      | 1, 3    | CELL0 = GND; one or three cells selected.   |
| JU3      | 2A      | ISET = REF; output current limited to 2A.   |
| JU3      | Open    | ISET is open; output current limited to 1A. |
| JU3      | 0A      | ISET = GND; output current disabled.        |
| JU4      | Open    | THM = REF; output enabled.                  |
| JU4      | Closed  | THM = GND; output enabled.                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX745 Evaluation Kit

Figure 1.  MAX745 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX745 Evaluation Kit

<!-- image -->

Figure 2.  MAX745 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX745 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX745 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4