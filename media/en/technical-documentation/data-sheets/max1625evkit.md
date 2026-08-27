<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1625 evaluation kit (EV kit) provides a 2.5V output voltage from a 4.5V to 5.5V input. It delivers up to  5A  output  current  with  greater  than  90%  efficiency. The MAX1625 features a resistor-programmable switching frequency from 100kHz to 1MHz, as well as currentmode operation for superior load- and line-transient response. This EV kit operates at a 500kHz switching frequency. It can also be used to evaluate other output voltages by changing feedback resistors R2 and R3.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1625EVKIT | 0°C to +70°C  | Surface Mount |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 4.5V to 5.5V Input Voltage Range
- ' 2.5V Output Voltage (1.1V to 4.0V adjustable)
- ' 5A Output Current
- ' Efficiency = 91%, VIN = 5V, VOUT = 2.5V @ IOUT = 2.5A
- ' Power-OK Output
- ' 500kHz Switching Frequency
- ' 16-Pin Narrow SO
- ' Low-Profile Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1            |     1 | 100µF, 10V electrolytic capacitor Sanyo 10SL100M                                      |
| C2, C3        |     2 | 220µF, 4V electrolytic capacitors Sanyo 4SP220M                                       |
| C4, C5, C9    |     3 | 0.1µF ceramic capacitors                                                              |
| C6            |     1 | 2.2µF ceramic capacitor                                                               |
| C7, C8        |     2 | 4.7µF, 16V tantalum capacitors Sprague 595D475X0016A2T                                |
| C10           |     0 | Open                                                                                  |
| C11, C12      |     2 | 4700pF ceramic capacitors                                                             |
| CC1           |     1 | 1000pF ceramic capacitor                                                              |
| CC2           |     1 | 0.056µF ceramic capacitor                                                             |
| D1 (optional) |     1 | Schottky diode Nihon NSQ03A02 or Motorola MBRS340T3                                   |
| D2            |     1 | Schottky diode Central Semiconductor CMPSH-3                                          |
| L1            |     1 | 1.5µH power inductor Coiltronix UP2-1R5, Coilcraft DO3316P-152, or Sumida CDRH127-1R3 |

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| N1, N2        |     2 | N-channel MOSFETs (SO-8) International Rectifier IRF7413 or Siliconix Si4410DY |
| R1            |     1 | 0.012 Ω , 1%, 1W resistor Dale WSL-2512-R012-F or IRC LR2512-01-R012-F         |
| R2            |     1 | 127k Ω , 1% resistor                                                           |
| R3            |     1 | 100k Ω , 1% resistor                                                           |
| R4            |     1 | 40.2k Ω , 1% resistor                                                          |
| R5            |     1 | 100k Ω , 5% resistor                                                           |
| R6            |     1 | 100 Ω , 5% resistor                                                            |
| R7, R8        |     2 | 39 Ω , 5% resistors                                                            |
| R9            |     1 | 1k Ω , 5% resistor                                                             |
| U1            |     1 | MAX1625ESE                                                                     |
| JU1           |     1 | 2-pin header                                                                   |
| None          |     1 | Shunt                                                                          |
| None          |     1 | MAX1625 PC board                                                               |
| None          |     1 | MAX1625 data sheet                                                             |

1

## MAX1625 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER*               | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| AVX                     | (803) 946-0690 | (803) 626-3123 |
| Central Semiconductor   | (516) 435-1110 | (516) 435-1824 |
| Coilcraft               | (708) 639-6400 | (708) 639-1469 |
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

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1625 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5V supply voltage to the VIN pad. The ground connects to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Remove the shunt from JU1.
- 4) Turn on the power supply to the board. Verify that the output voltage is 2.5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1625 provides a 2.5V output from 4.5V to 5.5V input voltage. It delivers up to 5A and operates at 500kHz. Other output voltages can be programmed by changing the feedback resistor R2. R2 is given by:

<!-- formula-not-decoded -->

where R3 = 100k Ω .

## Jumper Selection

The 2-pin header JU1 selects the shutdown mode. Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | REF PIN          | MAX1625 OUTPUT                |
|------------------|------------------|-------------------------------|
| On               | Connected to GND | Shutdown mode, V OUT = 0V     |
| Off              | Floating         | MAX1625 enabled, V OUT = 2.5V |

<!-- image -->

Figure 1.  MAX1625 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1625 Evaluation Kit

<!-- image -->

Figure 2.  MAX1625 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1625 EV Kit PC Board Layout-Two Internal Ground Planes

Figure 3.  MAX1625 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX1625 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600