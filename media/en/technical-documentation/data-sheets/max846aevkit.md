<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX846A evaluation kit (EV kit) is a stand-alone charger for lithium-ion (Li-Ion) batteries. The charging regulator consists of voltage and current loops driving an external, low-cost, PNP pass transistor. In voltageregulation mode, a current-to-voltage converter supplies a voltage proportional to the current flowing through the Li-Ion battery. The float voltage and charging current can be programmed with just two external resistors. The MAX846A EV kit is shipped configured for charging two Li-Ion cells at 800mA from a 10V power source.

The MAX846A EV kit is a fully assembled and tested surface-mount printed circuit board.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 22µF, 35V electrolytic capacitor Sanyo 35CV22GX                                                                                                  |
| C2            |     1 | 0.1µF ceramic capacitors                                                                                                                         |
| C3            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2B                                                                                            |
| C4, C5, C6    |     3 | 0.01µF ceramic capacitors                                                                                                                        |
| C7            |     1 | 4.7µF, 35V electrolytic capacitor Sanyo 35CV4.7GX                                                                                                |
| D1            |     1 | 1A, 100V fast-recovery diode Nihon EC10DS1                                                                                                       |
| Q1            |     1 | PNP power transistor (SOT-223) Zetex FZT749                                                                                                      |
| R1, R6        |     2 | 0.400 Ω , 1%, 1/2W resistors Dale WSL-2010-R400-F or IRC LR2010-01-R400-F                                                                        |
| R2            |     1 | 680 Ω , 5% resistor                                                                                                                              |
| R3            |     1 | 10k Ω , 5% resistor                                                                                                                              |
| R4            |     1 | 100k Ω , 5% resistor                                                                                                                             |
| R5            |     1 | 825k Ω , 1% resistor                                                                                                                             |
| U1            |     1 | Maxim MAX846AEEE                                                                                                                                 |
| J1            |     1 | PC mount jack RDI Electronics DJ-005                                                                                                             |
| J2            |     1 | 2-pin term connector                                                                                                                             |
| JU1-JU4       |     4 | 3-pin headers                                                                                                                                    |
| JU5           |     1 | 2-pin header                                                                                                                                     |
| None          |     0 | 6.0V at 800mA AC adapter (1 cell) James Electronics 14311 (not supplied) 9V at 830mA AC adapter (2 cells) James Electronics 14323 (not supplied) |
| None          |     4 | Shunts                                                                                                                                           |
| None          |     1 | MAX846A PC board                                                                                                                                 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 0.5% Internal Reference for Li-Ion Charging
- ' Regulates Voltage and Current into Battery
- ' Selectable 1 or 2-Cell Li-Ion Charge
- ' 1%, 3.3V, On-Chip, Low-Dropout Linear Regulator
- ' 1µA Max Battery Drain when Off
- ' Power-Good Function
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | BOARD TYPE    |
|-------------|---------------|---------------|
| MAX846EVKIT | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER          | PHONE                         | FAX            |
|-------------------|-------------------------------|----------------|
| AVX               | (803) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Dale-Vishay       | (402) 564-3131                | (402) 563-6418 |
| IRC               | (512) 992-7900                | (512) 992-3377 |
| James Electronics | (312) 463-6500                | (312) 463-1504 |
| Motorola          | (602) 303-5454                | (602) 994-6430 |
| Nichicon          | (847) 843-7500                | (847) 843-2798 |
| Nihon             | (805) 867-2555                | (805) 867-2698 |
| Sanyo             | (619) 661-6835                | (619) 661-1055 |
| Sprague           | (603) 224-1961                | (603) 224-1430 |
| RDI Electronics   | (914) 773-1000                | (914) 773-1111 |
| Vishay/Vitramon   | (203) 268-6261                | (203) 452-5670 |
| Zetex             | (516) 543-7100                | (516) 864-7630 |

1

## MAX846A Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX846A Evaluation Kit (EV kit) is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Place the shunt across JU2's pins to set the number of  cells  being  charged in the battery pack. The EV kit  is  shipped  configured for two lithium-ion (Li-Ion) cells (shunt across pins 1 and 2).
- 2) Set the charging current with R1 and R6. The charge current is preset for 800mA (R1 = R6 = 400m Ω ). For 400mA charge current, remove R6. Consult the battery manufacturer for recommended charging currents.
- 3) Connect the battery pack to the two-pin power connector J2. Observe the polarity markings.
- 4) Connect the external supply voltage to the VIN and GND pads. For charging one cell, use a 6V supply; for 2 cells, use a 10V supply.
- 5) Turn on the power supply to the board and confirm the voltage across the battery using a voltmeter.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX846A EV kit is a stand-alone charger for Li-Ion batteries. The charging regulator consists of voltage and current loops driving an external, low-cost, PNP pass transistor (Q1). The MAX846A requires an input 1V greater than the maximum charging voltage.

Higher input voltages and charging currents can be used as long as Q1's power dissipation does not exceed 2W. (At 2W, Q1 may exceed +70°C). For higher power dissipation and cooler operation, replace Q1 with  a  TO220 transistor (TIP42) and heatsink in holes provided.

Selecting the Number of Li-Ion Cells Jumper JU2 selects the number of battery-pack cells. Place the shunt across JU2's pins to select the desired number of cells (Table 1). The MAX846A EV kit is shipped configured for two cells.

Table 1.  Jumper JU2 Functions

| SHUNT LOCATION   | CELL2 PIN        |   NUMBER OF CELLS |
|------------------|------------------|-------------------|
| 1 & 2            | Connected to VL  |                 2 |
| 2 & 3            | Connected to GND |                 1 |

Jumper Selection

The three-pin header JU1 selects shutdown mode. Table 2 lists the selectable jumper options.

## Table 2.  Jumper JU1 Functions

| SHUNT LOCATION   | ON PIN             | MAX846A OUTPUT              |
|------------------|--------------------|-----------------------------|
| 1 & 2            | Connected to PWROK | Enabled                     |
| 2 & 3            | Connected to GND   | Shutdown mode, I BATT < 1µA |

The three-pin header JU3 disables the voltage-regulation loop. Table 3 lists the selectable jumper options. The MAX846A EV kit is shipped configured for two Li-Ion cells with the voltage-regulation loop enabled.

Table 3.  Jumper JU3 Functions

| SHUNT LOCATION   | OFFV PIN         | CHARGER STATUS        |
|------------------|------------------|-----------------------|
| 1 & 2            | Connected to VL  | Voltage loop disabled |
| 2 & 3            | Connected to GND | Voltage loop enabled  |

The three-pin header JU4 selects the float-voltage reference. An 825k Ω , 1% resistor is provided for adjusting the float voltage. Table 4 lists the selectable jumper options. The MAX846A EV kit is shipped configured for two Li-Ion cells with the default float voltage reference at 8.4V.

## Table 4.  Jumper JU4 Functions

| SHUNT LOCATION   | VSET PIN         | FLOAT VOLTAGE                                   |
|------------------|------------------|-------------------------------------------------|
| 1 & 2            | Connected to VL  | Adjust up                                       |
| 2 & 3            | Connected to GND | Adjust down                                     |
| Open             | Floating         | 8.4V for 2 Li-Ion cells, 4.2V for 1 Li-Ion cell |

The two-pin header JU5 enables adjustment of the current-regulation point. When shorted, a 10k Ω ,  5% resistor  (R3)  connects the ISET pin to GND, and the charging current is determined by R1 and R6. During float  charge,  the  charging current can be monitored at the ISET pin. When open, an external voltage source must be connected between ICNTRL and GND to adjust the charging current. Refer to the Detailed Description in the MAX846A data sheet for more information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1.  MAX846A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX846A Evaluation Kit

<!-- image -->

Figure 2.  MAX846A EV Kit Component Placement Guide

Figure 3.  MAX846A EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX846A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600