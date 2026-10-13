<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX629 evaluation kit (EV kit) contains two separate  switching-regulator circuits. The first circuit converts  a  +0.8V  to  VOUT battery voltage to a +24V LCD backplane bias voltage for currents up to 20mA. The second circuit converts a +0.8V to +12V battery voltage to a -20V voltage for currents up to 20mA. The MAX629 requires a +2.7V to +5.5V supply at VCC, but the inductor can be powered from as low as 0.8V. Both output voltages can be adjusted by changing the feedback-resistor values.

The MAX629 EV kit provides low quiescent current and high efficiency for maximum battery life. Operation up to 300kHz allows the use of a tiny surface-mount inductor. This EV kit is a fully assembled and tested surfacemount circuit board.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                                   |
|------------------|-------|-------------------------------------------------------------------------------|
| C1, C2, C10, C11 |     4 | 10µF, 35V tantalum capacitors AVX TPSD106M035R0300 or Sprague 593D106X0035D2W |
| C3, C4, C8, C9   |     4 | 0.1µF ceramic capacitors                                                      |
| C5, C6           |     2 | 150pF ceramic capacitors                                                      |
| C7               |     1 | 2.2µF ceramic capacitor Marcon/United Chemi-Con THCR30E1225Z                  |
| D1, D2, D3       |     3 | 40V, 0.5A Schottky diodes Motorola MBR0540LT3                                 |
| JU1-JU4          |     4 | 3-pin headers                                                                 |
| L1, L2           |     2 | 47µH inductors Sumida CD54-470                                                |
| R1, R3           |     2 | 576k Ω , 1% resistors                                                         |
| R2               |     1 | 31.6k Ω , 1% resistor                                                         |
| R4               |     1 | 35.7k Ω , 1% resistor                                                         |
| R5               |     1 | 2 Ω , 5% resistor                                                             |
| U1, U2           |     2 | MAX629ESA (SO-8)                                                              |
| None             |     4 | Shunts                                                                        |
| None             |     1 | MAX629 PC board                                                               |

<!-- image -->

| ____________________________Features                                          |            |
|-------------------------------------------------------------------------------|------------|
| ' Output Voltage: +24V Positive -20V Negative +0.8V to +15V (Negative Output) | Evaluates: |
| ' Battery Input Voltage:                                                      |            |
| +0.8V to VOUT (Positive Output)                                               |            |
| ' +2.7V to +5.5V VCC Supply Range                                             |            |
| ' Up to 20mA Output Current                                                   |            |
| ' Internal 28V N-Channel Switch                                               |            |
| ' 1µA (Max) IC Shutdown Current                                               |            |
| ' Up to 300kHz Switching Frequency                                            |            |
| ' Surface-Mount Components                                                    |            |
| ' Fully Assembled and Tested                                                  | MAX629     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | BOARD TYPE    |
|-------------|---------------|---------------|
| MAX629EVKIT | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER*               | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| AVX                     | (803) 946-0690 | (803) 626-3123 |
| Coilcraft               | (847) 639-6400 | (847) 639-1469 |
| Coiltronics             | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay             | (402) 564-3131 | (402) 563-6418 |
| Marcon/United Chemi-Con | (847) 696-2000 | (847) 696-9278 |
| Motorola                | (602) 303-5454 | (602) 994-6430 |
| Sprague                 | (603) 224-1961 | (603) 224-1430 |
| Sumida                  | (847) 956-0666 | (847) 956-0702 |
| Vishay/Vitramon         | (203) 268-6261 | (203) 452-5670 |

## MAX629 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX629 EV kit is fully assembled and tested. Follow these steps to verify board operation. VCC and VBATT are separated on each circuit to demonstrate operation of VBATT down to 0.8V. VCC and VBATT can be connected together and to a single supply from 2.7V to 5.5V. Do not turn on the power supply until all connections are completed.

## Positive Output:

- 1) Connect a +2.7V to +5.5V supply to the VCC pad, and a +0.8V to VOUT supply to the VBATT pad. Connect the grounds to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Place the shunt on JU1 across pins 2 and 3.
- 4) Turn on the power supplies and verify that the output voltage is +24V.

## Negative Output:

- 1) Connect a +2.7V to +5.5V supply to the VCC pad, and a +0.8V to +15V supply to the VBATT pad. Connect the grounds to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Place the shunt on JU3 across pins 2 and 3.
- 4) Turn on the power supplies and verify that the output voltage is -20V.

For other output voltages, refer to the Setting the Output Voltage section in the MAX629 data sheet for instructions on selecting the feedback resistors.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX629 EV kit contains two separate switchingregulator circuits. The first circuit provides a +24V output for  currents  up  to  20mA  with  87%  typical  conversion efficiency. The second circuit provides a -20V output voltage for currents up to 20mA with 82% typical conversion efficiency. Both output voltages can be adjusted by changing the feedback-resistor values.

## Shutdown Mode

The MAX629 EV kit features a shutdown mode that reduces quiescent current to less than 1µA to preserve battery life. The two-pin header JU1 selects shutdown mode for the positive output, and JU3 selects shutdown mode for the negative output. Tables 1 and 2 list the selectable jumper options.

## Current Limit

The two-pin header JU2 selects the current limit for the positive output, and JU4 selects the current limit for the negative output. Table 3 lists the selectable jumper options. The MAX629 EV kit comes configured for a 500mA current limit.

## Table 1.  Jumper JU1 Functions (Positive Output)

| SHUNT LOCATION   | SHDN PIN         | MAX629 OUTPUT                           |
|------------------|------------------|-----------------------------------------|
| 1 and 2          | Connected to GND | Shutdown mode, V OUT = V BATT - V DIODE |
| 2 and 3          | Connected to VCC | MAX629 enabled, V OUT = +24V            |

Table 2.  Jumper JU3 Functions (Negative Output)

| SHUNT LOCATION   | SHDN PIN         | MAX629 OUTPUT                |
|------------------|------------------|------------------------------|
| 1 and 2          | Connected to GND | Shutdown mode, V OUT = 0V    |
| 2 and 3          | Connected to VCC | MAX629 enabled, V OUT = -20V |

Table 3.  Jumper JU2 and JU4 Functions

| SHUNT LOCATION   | ISET PIN         |   CURRENT LIMIT (mA) |
|------------------|------------------|----------------------|
| 1 and 2          | Connected to GND |                  250 |
| 2 and 3          | Connected to VCC |                  500 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1a.  MAX629 EV Kit Schematic (Positive Output Voltage)

<!-- image -->

Figure 1b.  MAX629 EV Kit Schematic (Negative Output Voltage)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX629 Evaluation Kit

<!-- image -->

Figure 2.  MAX629 EV Kit Component Placement Guide-Component Side

Figure 3.  MAX629 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX629 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600