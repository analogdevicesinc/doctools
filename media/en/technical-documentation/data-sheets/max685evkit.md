<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX685 evaluation kit (EV kit) provides dual-output +15V and -7.5V voltages from 2.7V to 5.5V input voltage. Each output regulates separately, and each can deliver 10mA output current. Both output voltages can be adjusted by changing the feedback resistor values.

The MAX685 EV kit provides low quiescent current and high efficiency for maximum battery life. The EV kit operates at a fixed 200kHz or 400kHz frequency, which allows the use of a tiny surface-mount inductor. This EV kit is a fully assembled and tested surface-mount circuit board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 10µF, 10V tantalum capacitor Sprague 595D106X0010A2T or AVX TAJA106K010R    |
| C2, C3        |     2 | 2.2µF, 25V ceramic capacitors (1206) Marcon/United Chemi-Con THCR30E1E225ZT |
| C4, C5        |     2 | 0.22µF ceramic capacitors                                                   |
| C6            |     1 | 47pF ceramic capacitor                                                      |
| C7            |     0 | Open                                                                        |
| D1, D2        |     2 | 0.5A, 20V Schottky diodes Motorola MBR0520LT3                               |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                               |
| L1            |     1 | 22µH inductor Murata LQH4N220K04M00 or TDK NLC453232 220K                   |
| R1            |     1 | 1.0M Ω , 1% resistor (1206)                                                 |
| R2            |     1 | 90.9k Ω , 1% resistor (1206)                                                |
| R3            |     1 | 750k Ω , 1% resistor (1206)                                                 |
| R4            |     1 | 124k Ω , 1% resistor (1206)                                                 |
| R5            |     1 | 100k Ω , 5% resistor (1206)                                                 |
| U1            |     1 | MAX685EEE                                                                   |
| None          |     3 | Shunts                                                                      |
| None          |     1 | MAX685 PC board                                                             |
| None          |     1 | MAX685 data sheet                                                           |

## MAXIM

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +15V Positive Output Voltage
- ' -7.5V Negative Output Voltage
- ' 2.7V to 5.5V Battery Input Voltage
- ' 10mA Output Current
- ' Single Inductor for Both Outputs
- ' 0.1µA Shutdown Current
- ' 200kHz or 400kHz Fixed Frequency
- ' Power-OK Output
- ' Surface-Mount, Low-Profile Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX685EVKIT | 0°C to +70°C  | 16 QSOP      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                 | PHONE          | FAX            |
|--------------------------|----------------|----------------|
| AVX                      | (803) 946-0690 | (803) 626-3123 |
| Coilcraft                | (847) 639-6400 | (847) 639-1469 |
| Dale-Vishay              | (402) 564-3131 | (402) 563-6418 |
| Marcon/ United Chemi-Con | (847) 696-2000 | (847) 696-9278 |
| Motorola                 | (602) 303-5454 | (602) 994-6430 |
| Murata                   | (814) 237-1431 | (814) 238-0490 |
| Sprague                  | (603) 224-1961 | (603) 224-1430 |
| Sumida                   | (847) 956-0666 | (847) 956-0702 |
| TDK                      | (847) 390-4373 | (847) 390-4428 |
| Vishay/Vitramon          | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX685 when contacting these component suppliers.

1

## MAX685 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX685 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +2.7V to +5.5V power supply to the VIN pad. Connect ground to the  GND pad.
- 2) Connect voltmeters and loads, if any, to the +VOUT and VOUT- pads.
- 3) Verify  that  the  shunts  are  on  JU1,  JU2,  and  JU3 across pins 2 and 3.
- 4) Turn on the power supply and verify the positive output voltage is +15V and the negative output is -7.5V.
- 5) For other output voltages, refer to the Setting the Output Voltage section in the MAX685 data sheet for instructions on selecting the feedback resistors.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX685 EV kit provides dual-output +15V and -7.5V voltages from 2.7V to 5.5V input voltage. Each output regulates separately and each can deliver 10mA output current. Both output voltages can be adjusted by changing the feedback-resistor values.

The EV kit minimizes total circuit size and cost by using a single inductor for both output voltages. It operates at a fixed 200kHz or 400kHz frequency and includes a shutdown function and a power-OK output.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Jumper Selection

The MAX685 EV kit features a shutdown mode that reduces quiescent current to 0.1µA typical to preserve battery life. The 3-pin header JU1 selects the shutdown mode. Table 1 lists the selectable jumper options.

The 3-pin header JU2 selects the switching frequency. Table 2 lists the selectable jumper options. The 3-pin header JU3 selects the power sequence. Table 3 lists the selectable jumper options.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX685 OUTPUT                                |
|------------------|------------------|----------------------------------------------|
| 1 and 2          | Connected to GND | Shutdown mode, +V OUT = 0, V OUT- = 0        |
| 2 and 3          | Connected to VIN | MAX685 enabled, V OUT = +15V, V OUT- = -7.5V |

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | SYNC PIN         |   FREQUENCY (kHz) |
|------------------|------------------|-------------------|
| 1 and 2          | Connected to GND |               200 |
| 2 and 3          | Connected to VIN |               400 |

Table 3.  Jumper JU3 Functions

| SHUNT LOCATION   | SEQ PIN          | POWER SEQUENCE                                      |
|------------------|------------------|-----------------------------------------------------|
| 1 and 2          | Connected to GND | Negative output pow- ers up before positive output. |
| 2 and 3          | Connected to VIN | Positive output powers up before negative output.   |

Figure 1.  MAX685 EV Kit Schematic

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX685 Evaluation Kit

Figure 2.  MAX685 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX685 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products. © 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products.

Figure 3.  MAX685 EV Kit PC Board Layout-Component Side

<!-- image -->