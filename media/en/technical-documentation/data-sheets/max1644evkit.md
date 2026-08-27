<!-- lastmod 2022-08-02 -->
## General Description

The MAX1644 evaluation kit (EV kit) provides a 1.5V output voltage from a +3V to +5.5V input source. It delivers up to 2A output current with 92% (max) efficiency. The MAX1644 is a step-down switching regulator  with  an  internal  synchronous rectifier to reduce the number of external components. It features a resistorprogrammable fixed off-time as well as current-mode operation for superior load- and line-transient response.

The MAX1644 EV kit can also be used to evaluate other output voltages by changing the feedback resistors (R1 and R2) or by using the preset +3.3V or +2.5V settings.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                 |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------|
| C1, C8, C9    |     3 | 10µF, 6.3V, X5R ceramic capacitors Taiyo Yuden JMK316BJ106ML or Murata GRM42-6X5R106K6.3                                    |
| C2            |     1 | 100µF, 6.3V, low-ESR capacitor Sanyo 6TPC100M (POSCAP), AVX TPSD107M010R0080 (tantalum), Sprague 594D107X0010C2T (tantalum) |
| C3            |     1 | 2.2µF, 10V, X5R ceramic capacitor Taiyo Yuden LMK212BJ225MG                                                                 |
| C4            |     1 | 0.01µF, 50V, X7R ceramic capacitor                                                                                          |
| C5            |     1 | 470pF, 50V, X7R ceramic capacitor                                                                                           |
| C6            |     1 | 1µF, 10V, X7R ceramic capacitor Taiyo Yuden LMK212B105KG or Murata GRM40X7R105K010                                          |
| C7            |     0 | Not installed                                                                                                               |
| D1            |     0 | Not installed                                                                                                               |
| JU1           |     1 | 2-pin header                                                                                                                |
| L1            |     1 | 6.0µH, 2.25A inductor Sumida CDRH6D28-6R0NC                                                                                 |
| R1            |     1 | 49.9k Ω ±1% resistor                                                                                                        |
| R2            |     1 | 18.2k Ω ±1% resistor                                                                                                        |
| R3            |     1 | 10 Ω ±5% resistor                                                                                                           |
| R4            |     1 | 1M Ω ±5% resistor                                                                                                           |
| R5            |     1 | 270k Ω ±5% resistor                                                                                                         |
| U1            |     1 | Maxim MAX1644EAE                                                                                                            |
| None          |     1 | Shunt                                                                                                                       |

<!-- image -->

Features

- ♦ +3V to +5.5V Input Voltage Range
- ♦ Output Voltage Preset to 1.5V 2.5V or 3.3V Selectable 1.1V to VIN Adjustable
- ♦ 2A Output Current
- ♦ 92% Efficiency
- ♦ 300kHz Switching Frequency
- ♦ Synchronous Rectification for Improved Efficiency
- ♦ No External Schottky Diode Required
- ♦ Less than 1µA typical IC Shutdown Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1644EVKIT | 0°C to +70°C  | 16 SSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1644 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed .

- 1) Connect a +3V to +5.5V supply to the pads marked VIN and GND.
- 2) Connect a voltmeter and load (if any) to VOUT and GND.
- 3) Verify that the shunt is on JU1.
- 4) Turn on the power and verify that the output voltage is +1.5V.
- 5) Refer to Output Voltage Selection to  modify the board for a different output voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1644 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Detailed Description

The MAX1644 EV kit provides a 1.5V output voltage from a +3V to +5.5V input voltage. It delivers up to 2A of output current.

## Jumper Selection

The 2-pin header JU1 selects the MAX1644's shutdown mode. Table 1 lists the jumper options.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                           | MAX1644 OUTPUT                |
|------------------|------------------------------------|-------------------------------|
| Open             | Connected to GND through 1M Ω (R4) | Shutdown mode, V OUT = 0      |
| Closed (Default) | Connected to VIN                   | MAX1644 enabled V OUT = +1.5V |

Table 2. Output Voltage Configurations

| OUTPUT VOLTAGE   | JU3    | JU 2                                     | R2             |
|------------------|--------|------------------------------------------|----------------|
| 1.1              | Closed | Short 1-4 (default trace)                | Shorted by JU3 |
| 1.5              | Open   | Short 1-4 (default trace)                | Default value  |
| 2.5              | Closed | Cut default trace across 1-4; short 1-2  | Shorted by JU3 |
| 3.3              | Closed | Cut default trace across 1-4; leave open | Shorted by JU3 |
| Adjustable       | Open   | Short 1-4                                | Change         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Output Voltage Selection

The MAX1644 EV kit is programmed for a 1.5V output voltage. However, the output voltage may also be adjusted by changing the resistor divider formed by R1 and R2 or by using the preset +2.5V or +3.3V settings. For selecting the resistor values, refer to Setting the Output Voltage in the MAX1644 data sheet.

To use the preset +2.5V or +3.3V settings, place a short across JU3 and cut the trace between pins 1 and 4 of JU2. See Table 2 for further instructions.

## Thermal Resistance

The MAX1644's junction-to-ambient thermal resistance is 60°C/W, based on the MAX1644 EV kit printed circuit board.

## MAX1644 Evaluation Kit

Figure 1. MAX1644 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1644 Evaluation Kit

<!-- image -->

Figure 2. MAX1644 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1644 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1644 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600