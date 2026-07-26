<!-- lastmod 2022-08-05 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1640 evaluation kit (EV kit) is an adjustable switch-mode current source that operates from a 5.5V to 26V input. It is intended for microprocessor-controlled battery chargers. The charging current, maximum voltage, and pulse-trickle charge are programmed with external resistors. The EV kit is shipped configured for a maximum charge voltage (6 cells). It is configured as a step-down pulse-width modulator (PWM) with synchronous rectification, allowing fast-charge currents up to 1.5A with greater than 90% efficiency. The MAX1640 uses high-side current sense; this allows the load to connect directly to ground, eliminating ground potential errors. The MAX1641 uses low-side current sense.

The MAX1640 EV kit is a fully assembled and tested surface-mount printed circuit board. It can also be used to evaluate the MAX1641.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 5.5V to 26V Input Voltage Range
- ' Tight Current-Regulation Accuracy: 2% (MAX1641); 5% (MAX1640)
- ' Up to 1.5A Fast-Charge Current
- ' Up to 500kHz PWM Operation
- ' Pulse-Trickle Charge Current
- ' 100% Maximum Duty Cycle (low dropout)
- ' Synchronous Rectifier
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1640EVKIT | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX1641, request a MAX1641EEE free sample with the MAX1640 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1, C8        |     2 | 47µF, 35V electrolytic capacitors Sanyo 35CV47GX                                      |
| C2            |     1 | 0.33µF ceramic capacitor                                                              |
| C3, C6, C7    |     3 | 0.1µF ceramic capacitors                                                              |
| C4            |     1 | 0.01µF ceramic capacitor                                                              |
| C5            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2T                                 |
| C9            |     0 | Open                                                                                  |
| D1 (optional) |     0 | 1A, 30V Schottky diode Motorola MBRS130LT3 or Nihon EC10QS03                          |
| J1, J2        |     2 | 2-pin term connectors                                                                 |
| J3            |     1 | 6-pin header                                                                          |
| L1            |     1 | 47µH power inductor Sumida CDRH125-470, Coilcraft DO3316P-473, or Coiltronics UP2-470 |

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| R1, R2        |     2 | 0.100 W , 1% 1/2W resistors Dale WSL-2010-R100-F or IRC LR2010-01-R100-F                  |
| R3, R5        |     2 | 68k W , 5% resistors                                                                      |
| R4, R7, R10   |     3 | 200k W , 5% resistors                                                                     |
| R6, R8, R9    |     3 | 1M W , 5% resistors                                                                       |
| R11           |     0 | Open                                                                                      |
| SW1           |     1 | 4-position dip switch                                                                     |
| U1            |     1 | MAX1640EEE (QSOP-16)                                                                      |
| U2            |     1 | Dual P- and N-channel MOSFET (SO-8) International Rectifier IRF7309 or Siliconix Si4539DY |
| None          |     1 | MAX1640/MAX1641 data sheet                                                                |
| None          |     1 | MAX1640/MAX1641 PC board                                                                  |
| None          |     1 | Shunt                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1640 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| AVX                     | (803) 946-0690 | (803) 626-3123 |
| Coilcraft               | (847) 639-6400 | (847) 639-1469 |
| Coiltronics             | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay             | (402) 564-3131 | (402) 563-6418 |
| International Rectifier | (310) 322-3331 | (310) 322-3332 |
| IRC                     | (512) 992-7900 | (512) 992-3377 |
| Motorola                | (602) 303-5454 | (602) 994-6430 |
| Nihon                   | (805) 867-2555 | (805) 867-2698 |
| Sanyo                   | (619) 661-6835 | (619) 661-1055 |
| Siliconix               | (408) 988-8000 | (408) 970-3950 |
| Sprague                 | (603) 224-1961 | (603) 224-1430 |
| Sumida                  | (847) 956-0666 | (847) 956-0702 |
| Vishay/Vitramon         | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX1640 when contacting these component suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1640 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Set the number of cells in the battery pack being charged by placing the shunt across J3, pins 1 and 6. The MAX1640 EV kit is shipped configured for six cells and 1.5A of charge current.
- 2) Connect the input power supply (26V max) to the 2-pin power connector J1. The input supply must be 1V greater than the maximum battery-charging voltage and capable of providing the charge current.
- 3) Connect the battery terminals to the 2-pin power connector J2. Observe the polarity markings.
- 4) Turn on the power supply to the board, and use a voltmeter to confirm the voltage across the battery.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1640 EV kit is a switch-mode current source that uses a hysteretic current-mode, step-down, pulsewidth-moduled (PWM) topology with constant off time. The switching mechanism is controlled by internal comparators that monitor the current through a sense resistor  (R1  or  R2)  and  the  voltage  at  TERM. When the inductor current reaches the current limit, the P-channel FET turns off, and the N-channel FET synchronous rectifier  turns  on.  Inductor energy is delivered to the load as the current ramps down at a rate controlled by a resistor  from TOFF to ground (R3) and the inductor value. When the off time expires, the P-channel FET is turned back on, and the N-channel FET is turned off.

## Selecting the Output Current Levels

Switch SW1 controls the two digital inputs, D0 and D1, that select between four possible current levels (see Table 1).

In pulse-trickle mode, the switch is on for 12.5% of the period set by R3, resulting in a lower current for trickle charging. Refer to the Programming the Output Currents section in the MAX1640/MAX1641 data sheet for instructions on selecting the current levels.

## Selecting the Number of Cells

Selection of the maximum charge voltage (number of cells)  in  the  MAX1640 EV kit is made via a voltage divider  selected by J3. Place the shunt across the J3 pins to select the desired number of cells as indicated by the silkscreen on the board. Refer to the section Setting the Maximum Output Voltage Level in the MAX1640/MAX1641 data sheet for instructions on selecting the resistor-divider values. The EV kit is shipped configured for a maximum charge voltage of 12V (six cells). Refer to Table 2 for the selectable J3 options.

## Table 1.  Charge-Current Levels (SW1)

|   D1 |   D0 | OUTPUT CURRENT                           |
|------|------|------------------------------------------|
|    0 |    0 | 0A, current off                          |
|    0 |    1 | 0.375A, top-off charge                   |
|    1 |    0 | 0.5A at 12.5% duty cycle, trickle charge |
|    1 |    1 | 1.5A, fast charge                        |

## Table 2.  Jumper J3 Functions

| SHUNT LOCATION   | NUMBER OF CELLS    |
|------------------|--------------------|
| 1 and 6          | 6 (12V)            |
| 2 and 5          | 2 (4V)             |
| 3 and 4          | (User-defined R11) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_Evaluating the MAX1641

The MAX1640 EV kit can also be used to evaluate the MAX1641. Replace the MAX1640 with the MAX1641, cut jumpers JU2 and JU4, and install jumpers JU1 and JU3. Table 3 summarizes the JU1-JU4 functions.

## Table 3.  Jumper JU1-JU4 Functions

| JUMPER   | MAX1641 LOW-SIDE SENSE   | MAX1640 HIGH-SIDE SENSE   |
|----------|--------------------------|---------------------------|
| JU1      | Short                    | Open                      |
| JU2      | Open                     | Short                     |
| JU3      | Short                    | Open                      |
| JU4      | Open                     | Short                     |

<!-- image -->

Figure 1.  MAX1640 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1640 Evaluation Kit

<!-- image -->

Figure 2.  MAX1640 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1640 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1640 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600