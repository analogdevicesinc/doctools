<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX713 Switch-Mode Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX713SWEVKIT-SO is a fully assembled and tested surface-mount board. The MAX713 high-current, switchmode battery charger controls a P-channel power MOSFET, allowing charge currents up to 1A. Switch-mode operation typically provides 75%-efficient conversion, reducing heat compared to linear-regulator solutions.

The MAX713SWEVKIT can also be used to evaluate the MAX712 just by replacing the MAX713CSE with a MAX712CSE.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART             | TEMP. RANGE   | BOARD TYPE    |
|------------------|---------------|---------------|
| MAX713SWEVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 1µF, 25V capacitor Sprague 595D105X0025A                                    |
| C2            |     1 | 220pF, 50V capacitor                                                        |
| C3, C5, C6    |     3 | 10µF, 50V capacitors Sprague 595D106X0050R                                  |
| C4            |     1 | 0.1µF, 50V capacitor                                                        |
| D1, D2        |     2 | 3A, 40V Schottky diodes Motorola MBRS340T3                                  |
| D3            |     1 | Red LED                                                                     |
| D4            |     1 | 8.2mA, 50V current-limiting diode Central Semiconductor CCLHM080            |
| J1, J2        |     2 | 2-pin power connectors                                                      |
| L1            |     1 | 220µH, 1.5A inductor CoilCraft DO3340-224                                   |
| M1            |     1 | 0.3 Ω , 50V P-channel MOSFET International Rectifier IRFR9024               |
| Q1, Q3, Q4    |     3 | 50V NPN transistors Central Semiconductor CMPTA06 or Motorola MMBTA06LT1    |
| Q2            |     1 | 50V PNP transistor Central Semiconductor CMPT2907A or Motorola MMBT2907ALT1 |
| R1, R6        |     0 | Reserved for optional resistors                                             |
| R2            |     1 | 5.1k Ω , 5% resistor                                                        |
| R3            |     1 | 0.25 Ω , 1/2W resistor Dale WSL-2512-R250-J or IRC LR2010-01-R250-K         |
| R4            |     1 | 1.5k Ω , 5% resistor                                                        |
| R5            |     1 | 470 Ω , 5% resistor                                                         |
| R7            |     1 | 68k Ω , 5% resistor                                                         |
| R8            |     1 | 22k Ω , 5% resistor                                                         |
| U1            |     1 | Maxim MAX713CSE IC                                                          |
| None          |     1 | MAX712/MAX713 data sheet                                                    |
| None          |     1 | 3.0 " x 3.0 " printed circuit board                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Up to 1A Charge Current
- ' 45V Peak Input Voltage Range
- ' Switch-Mode Operation Reduces Heat Dissipation
- ' Surface-Mount Components
- ' Charges 1 to 16 Series Cells

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                                                                       | PHONE                         | FAX                           |
|--------------------------------------------------------------------------------|-------------------------------|-------------------------------|
| Tantalum Capacitors                                                            | Tantalum Capacitors           | Tantalum Capacitors           |
| AVX Sprague                                                                    | (207) 282-5111 (603) 224-1961 | (207) 283-1941 (603) 224-1430 |
| Low-Value Resistors                                                            | Low-Value Resistors           | Low-Value Resistors           |
| Dale-Vishay IRC                                                                | (402) 564-3131 (512) 992-7900 | (402) 563-1841 (512) 992-3377 |
| High-Current Inductor                                                          | High-Current Inductor         | High-Current Inductor         |
| CoilCraft                                                                      | (708) 241-7876                | (708) 639-1469                |
| Semiconductors                                                                 | Semiconductors                | Semiconductors                |
| Central Semiconductor International Rectifier Motorola Nihon: USA Nihon: Japan | (516) 435-1110                | (516) 435-1824                |
|                                                                                | (310) 322-3331                | (310) 322-3332                |
|                                                                                | (602) 244-3576 (805) 867-2555 | (602) 244-4015 (805) 867-2556 |
|                                                                                | 81-3-3494-7411                | 81-3-3494-7414                |

Please indicate that you are using these parts with the MAX713 when contacting the above vendors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX713 Switch-Mode Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX713 Switch-Mode EV kit is a fully assembled and tested surface-mount board. Follow these steps to verify board operation. Do not turn on the power until all connections are completed.

- 1) Set the charging parameters to match the charge current and number of cells of the battery being charged. Refer to the section Setting the Charging Parameters and to the MAX712/MAX713 data sheet for instructions. The board is shipped configured for six cells and 1A of charge current.
- 2) Connect the input power source (14V to 16V, 1.3A as configured) to the 2-pin power connector. Observe the polarity indicated next to the connector.  The  input  supply  must  be  2V  greater  than  the maximum battery charging voltage, and capable of providing the charge current.
- 3) Connect the battery to the 2-pin battery terminal. Observe the polarity markings.
- 4) Turn on the power to the board and use a DVM to confirm the voltage across the battery and the sense resistor.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Input Supply Range

The input power supply must be at least 2V greater than the peak battery voltage. The upper limit is determined by the breakdown voltage of the P-channel power MOSFET and the capacitors across the input supply.  When choosing an adapter for use with the MAX712/MAX713 switch-mode circuit, make sure that the lowest wall-cube voltage level during fast charge and full load is a least 2V higher than the maximum battery voltage while being fast charged.  Typically, the voltage on the battery pack is higher during a fast-charge cycle than while in trickle charge or while supplying a load.  The voltage across some battery packs may approach 1.9V/cell.  This minimum input voltage requirement is critical, because its violation may inhibit proper termination of the fast-charge cycle.  A safe rule of thumb is to choose a source that has a minimum input voltage = 2V + (1.9V x the maximum number of cells to be charged).

The components included in this kit are rated at 50V, so the input source must never exceed 50V. Depending on your application, you can substitute capacitors and other components with different ratings.

The EV kit is shipped with all programming inputs (PGM0-PGM3) open. This sets the MAX713 for six cells, 1A of charging current, 45 minutes maximum charge time, and 42 seconds between battery voltage measurements. The default conditions require an input source greater than 14V and capable of greater than 1.3A. Be sure to read the section titled Setting the Charging Parameters before connecting any battery.

A current-limiting diode (D4) on the EV kit allows a wide input voltage range. This diode provides a fixed 8mA of current to the MAX713 shunt regulator. For applications with a narrow input voltage range, you can replace the diode with a resistor selected for the same current flow between the input source and the V+ pin.

## Setting the Charging Parameters

For each battery type connected, the EV kit must be set for  the  proper  number of cells, the proper maximum charging time and sampling intervals, and the proper charging current. Select the number of cells by connecting the PGM0 and PGM1 pins per Table 1.  Whenever changing the number of cells to be charged, PGM0 and PGM1 need to be adjusted accordingly.  Attempting to charge more or fewer cells than the number programmed may disable the voltage-slope fast-charge termination circuitry.

The EV kit is shipped with PGM0 and PGM1 open, which sets the number of cells at six. You can alter the programmed number of cells by installing jumper wires across the holes provided on the board. For example, to configure the board for four cells, solder wires between pins 1 &amp; 4 of SW1 (PGM0) and pins 1 &amp; 2 of SW2 (PGM1).

Table 1.  Programming the Number of Cells

|   NUMBER OF CELLS | PGM0 CONNECTION   | SW1 JUMPER   | PGM1 CONNECTION   | SW2 JUMPER   |
|-------------------|-------------------|--------------|-------------------|--------------|
|                 1 | V+                | 1-4          | V+                | 1-4          |
|                 2 | V+                | 1-4          | Open              | -            |
|                 3 | V+                | 1-4          | REF               | 1-3          |
|                 4 | V+                | 1-4          | BATT-             | 1-2          |
|                 5 | Open              | -            | V+                | 1-4          |
|                 6 | Open              | -            | Open              | -            |
|                 7 | Open              | -            | REF               | 1-3          |
|                 8 | Open              | -            | BATT-             | 1-2          |
|                 9 | REF               | 1-3          | V+                | 1-4          |
|                10 | REF               | 1-3          | Open              | -            |
|                11 | REF               | 1-3          | REF               | 1-3          |
|                12 | REF               | 1-3          | BATT-             | 1-2          |
|                13 | BATT-             | 1-2          | V+                | 1-4          |
|                14 | BATT-             | 1-2          | Open              | -            |
|                15 | BATT-             | 1-2          | REF               | 1-3          |
|                16 | BATT-             | 1-2          | BATT-             | 1-2          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 1.  MAX713 Switch-Mode EV Kit Schematic

Table 2.  Programming the Timing Functions

|   TIMEOUT (MINUTES) |   SAMPLE INTERVAL (SECONDS) | SLOPE LIMIT   |   TRICKLE VOLTAGE (mV) | PGM2 CONNECTION   | SW3 JUMPER   | PGM3 CONNECTION   | SW4 JUMPER   |
|---------------------|-----------------------------|---------------|------------------------|-------------------|--------------|-------------------|--------------|
|                  22 |                          21 | Off           |                      4 | Open              | -            | V+                | 1-4          |
|                  22 |                          21 | On            |                      4 | REF               | 1-3          | V+                | 1-4          |
|                  33 |                          21 | Off           |                      4 | V+                | 1-4          | V+                | 1-4          |
|                  33 |                          21 | On            |                      4 | BATT-             | 1-2          | V+                | 1-4          |
|                  45 |                          42 | Off           |                      8 | Open              | -            | Open              | -            |
|                  45 |                          42 | On            |                      8 | REF               | 1-3          | Open              | -            |
|                  66 |                          42 | Off           |                      8 | V+                | 1-4          | Open              | -            |
|                  66 |                          42 | On            |                      8 | BATT-             | 1-2          | Open              | -            |
|                  90 |                          84 | Off           |                     16 | Open              | -            | REF               | 1-3          |
|                  90 |                          84 | On            |                     16 | REF               | 1-3          | REF               | 1-3          |
|                 132 |                          84 | Off           |                     16 | V+                | 1-4          | REF               | 1-3          |
|                 132 |                          84 | On            |                     16 | BATT-             | 1-2          | REF               | 1-3          |
|                 180 |                         168 | Off           |                     32 | Open              | -            | BATT-             | 1-2          |
|                 180 |                         168 | On            |                     32 | REF               | 1-3          | BATT-             | 1-2          |
|                 264 |                         168 | Off           |                     32 | V+                | 1-4          | BATT-             | 1-2          |
|                 264 |                         168 | On            |                     32 | BATT-             | 1-2          | BATT-             | 1-2          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX713 Switch-Mode Evaluation Kit

This jumper configuration connects PGM0 to V+ and PGM1 to BATT-.

Select the maximum charging time and the time interval between cell voltage readings for delta-slope termination by connecting the PGM2 and PGM3 pins per Table 2. Refer to the MAX712/MAX713 data sheet for detailed information on the operation of these pins.

The charge current is determined by the value of the current-sense resistor (R3) and the fixed 250mV across the  resistor  during  fast-charge.  To  change  the  charge current, calculate the new current-sense resistor value and install that value in the position provided (R8), then remove the factory-installed R3. Choose RSENSE using the following formula:

## RSENSE = 0.25V/IFAST

See the MAX712/MAX713 data sheet for detailed information on setting the fast-charge and trickle-charge currents.

## Inductor Selection

The inductor value is not critical to circuit operation. However, the greater its value, the lower the output ripple current. The CoilCraft inductor used on the evaluation board was chosen because it is the highest value (220µH) surface-mount inductor with a 1.5A rating currently available. Larger inductors, such as toroids, may be used for lower output ripple current or higher current-charge rates.

## Gate-Drive Current

The voltage swing on the gate of the power MOSFET (M1) must be greater than 8V and less than 15V.

Figure 3.  MAX713 EV Kit PC Board Layout-Component Side

<!-- image -->

Transistors Q1 and Q2 provide a low-impedance drive to  the  gate.  If  the  DCIN  voltage  is  less  than  15V,  the MAX713 DRV pin can be directly connected to Q1 and Q2. For DCIN voltages greater than 15V, a transistor level  shifter  (Q3,  R4)  is  inserted  to  provide  the  proper voltage swing to Q1 and Q2. Q3 is mounted on the evaluation board, but it is not used in the standard configuration.  If  Q3  is  needed,  then  cut  the  trace  across JU2 and solder a jumper across JU1.

Figure 2.  MAX713 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX713 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600