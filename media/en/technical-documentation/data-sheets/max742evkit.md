<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX742 evaluation kit (EV kit) is a built and tested surface-mount printed circuit assembly intended for quick prototyping and testing purposes. This kit generates a dual regulated ±12V or ±15V output from a 5V regulated input supply. Power conversion efficiency ranges up to 90%, depending on output loading. Applications include low-noise power supplies for precision analog subsystems and distributed power.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                     |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 220µF, 10V low-ESR tantalum capacitors AVX TPSE227M010R0100                                                     |
| C11-C16       |     6 | 120µF, 20V low-ESR tantalum capacitors Sprague 595D127X0020R2B                                                  |
| C6, C7        |     2 | 0.01µF ceramic capacitors                                                                                       |
| C3, C8        |     2 | 0.1µF ceramic capacitors                                                                                        |
| C4, C5        |     2 | 1µF, 20V tantalum capacitors Sprague 595D105X0020T2B or Matsuo 267M 1602 105                                    |
| C10           |     1 | 22µF, 25V tantalum capacitor Sprague 595D225X0025B2B or Matsuo 267E 2502 225                                    |
| C9            |     1 | 10µF, 10V tantalum capacitor Sprague 595D106X0010A2B                                                            |
| D1, D2        |     2 | 3A, 30V 1N5821 equivalent (SMT) Schottky diodes, Nihon NSQ03A03 or Motorola MBRS340T3                           |
| D3            |     1 | Dual Schottky diode (SOT-23) Central Semiconductor CMPSH-3S                                                     |
| L1, L2        |     2 | 47µH inductors, Coiltronics CTX03- 12384-1 (500mA output) or CoilCraft D03316-473 (alternate for ±250mA output) |
| R1            |     1 | 100 Ω , 5% resistor                                                                                             |
| R2, R3        |     2 | 0.082 Ω , 1% resistors, Dale WSL-2512- R082F or IRC LR2512-01-R082-F                                            |
| N1            |     1 | Dual N-channel MOSFET (both sections in parallel), Motorola MMDF3N02HD or Siliconix Si9936HD                    |
| P1            |     1 | Dual P-channel MOSFET (both sections in parallel), Motorola MMDF2P03HD                                          |
| U1            |     1 | Maxim MAX742CWP                                                                                                 |
| JU1, JU2      |     2 | 3-pin headers                                                                                                   |
| None          |     2 | Shunts                                                                                                          |
| None          |     1 | MAX742 PC board                                                                                                 |
| None          |     1 | MAX742 data sheet                                                                                               |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ ±12V or ±15V Dual Tracking Outputs

- ♦ 15W Output Power:  ±12V at 625mA

±15V at 500mA

- ♦ 13mA Quiescent Supply Current
- ♦ 100kHz or 200kHz Fixed-Frequency PWM Operation
- ♦ All Surface-Mount Construction

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX742EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER    | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (207) 282-5111 | (207) 283-1941 |
| Coilcraft   | (708) 639-6400 | (708) 639-1469 |
| Coiltronics | (561) 241-7876 | (561) 241-9339 |
| Dale        | (402) 563-6582 | (402) 563-6418 |
| IRC         | (704) 264-8861 | (704) 264-8866 |
| Matsuo      | (714) 969-2491 | (714) 960-6492 |
| Motorola    | (602) 244-3576 | (602) 244-4015 |
| Murata-Erie | (404) 436-1300 | (404) 684-1591 |
| Siliconix   | (408) 988-8000 | (408) 970-3950 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX742 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX742 EV kit is a fully assembled and tested surface-mount board. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 4.5V to 6.0V supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on JU1 across pins 1 &amp; 2 for 200kHz operation and on JU2 across pins 1 &amp; 2 for ±15V outputs.
- 4) Turn on the power and verify that the output voltage is ±15V.
- 5) For ±12V outputs, remove the shunt from JU2 pins 1 &amp; 2 and place it across pins 2 &amp; 3.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The 3-pin header JU1 selects the frequency of operation. Table 1 lists the jumper-selectable options.

The 3-pin header JU2 selects the output voltages. Table 2 lists the jumper-selectable options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | 100/200 PIN      | FREQUENCY   |
|------------------|------------------|-------------|
| 2 & 3            | Connected to VIN | 100kHz      |
| 1 & 2            | Connected to GND | 200kHz      |

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | 12/15 PIN        | OUTPUT VOLTAGE   |
|------------------|------------------|------------------|
| 2 & 3            | Connected to VIN | ±12V             |
| 1 & 2            | Connected to GND | ±15V             |

Figure 1.  MAX742 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX742 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX742 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX742 Evaluation Kit

Figure 3.  MAX742 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX742 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3