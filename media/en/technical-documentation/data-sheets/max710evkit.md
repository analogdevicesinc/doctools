<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX710 evaluation kit (EV kit) is a step-up DC-DC converter with a linear-regulator output. The MAX710 accepts a +1.8V to +11V input and converts it to a 3.3V or  5V  output  for  up  to  250mA  currents.  The  EV  kit  is optimized for battery applications where the input varies above and below the regulated output voltage. It can be set in two modes: one optimized for lowest noise, the other for highest efficiency.

The MAX710 EV kit is a fully assembled and tested surface-mount circuit board. It can also be used to evaluate  the  MAX711, which has an adjustable output voltage (2.7V to 5.5V). Additional pads on the board accommodate the external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                            |
|----------------|-------|----------------------------------------------------------------------------------------|
| C1, C2         |     2 | 100µF, 16V low-ESR tantalum capacitors AVX TPSE107M016R0100 or Sprague 593D107X0016E2W |
| C3             |     1 | 0.1µF ceramic capacitor                                                                |
| C4             |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2T                                  |
| C5             |     0 | Open                                                                                   |
| D1             |     1 | Schottky diode Motorola MBRS130LT3                                                     |
| L1             |     1 | 22µH inductor Sumida CD75-220, Coiltronics UP2-220, or Coilcraft DO3316P-223           |
| R1, R2, R7, R8 |     0 | Open                                                                                   |
| R3, R4, R5     |     3 | 100k Ω , 5% resistors                                                                  |
| U1             |     1 | MAX710ESE (SO-16)                                                                      |
| JU1, JU6       |     2 | 3-pin headers                                                                          |
| JU2, JU3, JU4  |     3 | 2-pin headers                                                                          |
| JU5            |     1 | 4-pin header                                                                           |
| None           |     3 | Shunts                                                                                 |
| None           |     1 | MAX710 PC board                                                                        |
| None           |     1 | MAX710 data sheet                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Step-Up/Down Voltage Conversion
- ' +1.8V to +11V Input Range
- ' 3.3V or 5V Selectable Output Voltage (MAX710)
- ' 2.7V to 5.5V Adjustable Output Voltage (MAX711)
- ' 250mA Output Current
- ' No External FETs Required
- ' Output is Fully Off during Shutdown
- ' 5µA Max Shutdown Current
- ' Low-Battery Comparator
- ' Low-Noise and High-Efficiency Modes
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | BOARD TYPE    |
|-------------|---------------|---------------|
| MAX710EVKIT | 0°C to +70°C  | Surface Mount |

Note: To evaluate the MAX711, request a MAX711ESE free sample with the MAX710 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE          | FAX            |
|-----------------|----------------|----------------|
| AVX             | (803) 946-0690 | (803) 626-3123 |
| Coilcraft       | (847) 639-6400 | (847) 639-1469 |
| Coiltronics     | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay     | (402) 564-3131 | (402) 563-6418 |
| Motorola        | (602) 303-5454 | (602) 994-6430 |
| Sprague         | (603) 224-1961 | (603) 224-1430 |
| Sumida          | (847) 956-0666 | (847) 956-0702 |
| Vishay/Vitramon | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX710 when contacting these component suppliers.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX710 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX710 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +1.8V to +11V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Place the shunt on JU1 across pins 1 and 2.
- 4) Turn on the power supply and verify that the output voltage is 3.3V. For a 5V output, remove the shunt from JU1 pins 1 and 2, and place it across JU1 pins 2 and 3.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX710 EV kit is a step-up DC-DC converter with a linear-regulator output. It accepts a +1.8V to +11V input  and converts it to a 3.3V or 5V output for up to 250mA currents. The EV kit is shipped configured for a 3.3V output.

## Jumper Selection

The 3-pin header JU1 selects output voltage. Table 1 lists the selectable jumper options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | 3/ 5 PIN         | OUTPUT       |
|------------------|------------------|--------------|
| 1 and 2          | Connected to V+  | V OUT = 3.3V |
| 2 and 3          | Connected to GND | V OUT = 5V   |

The 2-pin header JU2 selects shutdown mode. Table 2 lists the selectable jumper options.

Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | SHDN PIN         | OUTPUT                             |
|------------------|------------------|------------------------------------|
| On               | Connected to GND | Shutdown mode, V OUT = 0V          |
| Off              | Connected to V+  | MAX710 enabled, V OUT = 3.3V or 5V |

The 2-pin header JU3 selects standby mode. Table 3 lists the selectable jumper options.

Table 3.  Jumper JU3 Functions

| SHUNT LOCATION   | STDBY PIN        | OUTPUT           |
|------------------|------------------|------------------|
| On               | Connected to GND | Standby mode     |
| Off              | Connected to V+  | Normal operation |

The 2-pin header JU4 selects the current limit. Table 4 lists the selectable jumper options.

## Table 4.  Jumper JU4 Functions

| SHUNT LOCATION   | ILIM PIN         | CURRENT LIMIT   |
|------------------|------------------|-----------------|
| On               | Connected to V+  | ILIM = 0.8A     |
| Off              | Connected to GND | ILIM = 1.5A     |

The 4-pin header JU5 selects low-noise or high-efficiency mode. Refer to the MAX710/MAX711 data sheet for information on operating configurations. Table 5 lists the selectable jumper options.

Table 5.  Jumper JU5 Functions

| SHUNT LOCATION   | N/ E PIN         | OPERATING MODE                                                                      |
|------------------|------------------|-------------------------------------------------------------------------------------|
| 1 and 2          | Connected to LBO | High-efficiency, V IN(MAX) = 11V (LBI- must be con- nected to V OUT (JU6, 2 and 3)) |
| 1 and 3          | Connected to GND | High-efficiency, V IN(MAX) = 7V                                                     |
| 1 and 4          | Connected to V+  | Low-noise, V IN(MAX) = 11V                                                          |

The 3-pin header JU6 connects LBI- to either the output voltage or the reference voltage. Table 6 lists the selectable jumper options.

Table 6.  Jumper JU6 Functions

| SHUNT LOCATION   | LBI- PIN          |
|------------------|-------------------|
| 1 and 2          | Connected to REF  |
| 2 and 3          | Connected to VOUT |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Low-Battery Comparator Output

The MAX710 has an on-chip comparator for powergood detection that can be used to detect low-battery voltage. The comparator's LBI- input is connected to either VOUT or reference, and its LBI+ input is connected to an external resistor divider, R7 or R8. Refer to the Low-Battery Comparator section of the MAX710/ MAX711 data sheet for instructions on selecting R7 and R8 values.

## MAX710 Evaluation Kit

## Evaluating Other Output Voltages

To generate output voltages other than 3.3V or 5V, replace the MAX710 with the MAX711 (adjustable output), and select the external voltage resistor divider, R1 and R2. The only other modification required is removing the shunt from JU1. Refer to the Output Voltage Selection section in the MAX710/MAX711 data sheet for instructions on selecting R1 and R2 values. C5 is an optional space for a feed-forward capacitor.

<!-- image -->

Figure 1.  MAX710 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX710 Evaluation Kit

<!-- image -->

Figure 2.  MAX710 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX710 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX710 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600