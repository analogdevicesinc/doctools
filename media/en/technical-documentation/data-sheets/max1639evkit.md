<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1639 evaluation kit (EV kit) provides a 2.5V output voltage from a +4.5V to +5.5V input supply. It delivers up to 8A output current with greater than 90% efficiency. Features include pin-selectable switching frequencies of 300kHz, 600kHz, and 1MHz, as well as current-mode operation for superior load- and line-transient response. This EV kit operates at 600kHz switching frequency. It can also be used to evaluate other output voltages by changing the feedback resistors R2 and R3.

This EV kit is fully assembled and tested, and is offered in a 16-pin narrow SO package.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1            |     1 | 330µF, 6.3V, low-ESR capacitor Sanyo 6SA330M                                 |
| C2, C3        |     2 | 560µF, 4V, low-ESR capacitors Sanyo 4SP560M                                  |
| C4, C5, C9    |     3 | 0.1µF ceramic capacitors                                                     |
| CC1           |     1 | 1000pF ceramic capacitor                                                     |
| CC2           |     1 | 0.056µF ceramic capacitor                                                    |
| C6            |     1 | 2.2µF, 10V ceramic capacitor TDK C3216X7R1C225M or Taiyo Yuden EMK316BJ225ML |
| C7            |     1 | 10µF, 10V tantalum capacitor Sprague 595D106X0010A2T                         |
| C8            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2T                        |
| C10, D1       |     0 | Not installed                                                                |
| D2            |     1 | Schottky diode Central Semiconductor CMPSH-3                                 |
| L1            |     1 | 1.0µH power inductor Coiltronics UP2B-1R0 or Coilcraft DO3316P-102HC         |
| N1, N2        |     1 | N-channel MOSFETs (SO-8) Fairchild FDS6680                                   |
| R1            |     1 | 0.009 W , 1%, 1W resistor Dale WSL-2512-R009-F or IRC LR2512-01-R009-F       |
| R2            |     1 | 12.7k W , 1% resistor                                                        |
| R3            |     1 | 10k W , 1% resistor                                                          |
| R4            |     1 | 10 W , 5% resistor                                                           |
| R5            |     1 | 100k W , 5% resistor                                                         |
| R6            |     1 | 1k W , 5% resistor                                                           |
| U1            |     1 | MAX1639ESE                                                                   |
| JU1           |     1 | 2-pin header                                                                 |
| None          |     1 | Shunt                                                                        |
| None          |     1 | MAX1639 PC board                                                             |
| None          |     1 | MAX1639 data sheet                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +4.5V to +5.5V Input Voltage Range
- ' 2.5V Output Voltage (1.1V to 4.0V adjustable)
- ' 8A Output Current
- ' Power-Good Output
- ' 600kHz Switching Frequency
- ' 16-Pin Narrow SO Package
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE                    | PIN-PACKAGE   |
|--------------|--------------------------------|---------------|
| MAX1639EVKIT | 0°C to +70°C                   | 16 Narrow SO  |
|              | _________________________Quick | Start         |

The MAX1639 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V supply voltage to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Remove the shunt from JU1.
- 4) Turn on the power supply to the board. Verify that the output voltage is 2.5V.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1639 provides a 2.5V output from 4.5V to 5.5V input voltage. It delivers up to 8A and operates at 600kHz. Other output voltages can be programmed by changing the feedback resistor R2. R2 is given by:

<!-- formula-not-decoded -->

where R3 =10k W .

For output voltages greater than 3.3V, use appropriately rated output capacitors (C2, C3).

## Jumper Selection

The 2-pin header JU1 selects the shutdown mode. Table 1 lists the selectable jumper options.

The 4-pin header JU2 selects the switching frequency. Table 2 lists the selectable jumper options. The EV kit's components are selected for 600kHz operation. If 300kHz or 1MHz operation is selected, component values need to be changed and the PC board trace between pins 1 and 2 of JU2 must be cut (refer to the Design Procedure section in the MAX1639 data sheet).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1639 Evaluation Kit

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | REF PIN          | MAX1639 OUTPUT                |
|------------------|------------------|-------------------------------|
| ON               | Connected to GND | Shutdown mode, V OUT = 0V     |
| OFF              | Floating         | MAX1639 enabled, V OUT = 2.5V |

Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | FREQ PIN          |   SWITCHING FREQUENCY (kHz) |
|------------------|-------------------|-----------------------------|
| 1 and 3          | Connected to GND  |                         300 |
| 1 and 2          | Connected to REF  |                         600 |
| 1 and 4          | Connected to V CC |                        1000 |

Note: 1MHz operation can affect the allowable output voltage range (due to duty factor limitations); it also affects soft-start and foldback current limiting (see the MAX1639 data sheet).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

Note: Please indicate that you are using the MAX1639 when contacting these component suppliers.

| SUPPLIER                | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| AVX                     | (803) 946-0690 | (803) 626-3123 |
| Central Semiconductor   | (516) 435-1110 | (516) 435-1824 |
| Coilcraft               | (847) 639-6400 | (847) 639-1469 |
| Dale-Vishay             | (402) 564-3131 | (402) 563-6418 |
| Fairchild               | (408) 721-2181 | (408) 721-1635 |
| International Rectifier | (310) 322-3331 | (310) 322-3332 |
| IRC                     | (512) 992-7900 | (512) 992-3377 |
| Motorola                | (602) 303-5454 | (602) 994-6430 |
| Nihon                   | (805) 867-2555 | (805) 867-2698 |
| Sanyo                   | (619) 661-6835 | (619) 661-1055 |
| Sprague                 | (603) 224-1961 | (603) 224-1430 |
| Sumida                  | (847) 956-0666 | (847) 956-0702 |
| Taiyo Yuden             | (408) 573-4150 | (408) 573-4159 |
| TDK                     | (847) 390-4373 | (847) 390-4428 |
| Vishay/Vitramon         | (203) 268-6261 | (203) 452-5670 |

Figure 1.  MAX1639 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX1639 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1639 EV Kit PC Board Layout-Two Internal Ground Planes

<!-- image -->

## MAX1639 Evaluation Kit

Figure 3.  MAX1639 EV Kit  PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX1639 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 3 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1998 Maxim Integrated Products