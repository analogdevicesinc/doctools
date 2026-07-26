<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1623 evaluation kit (EV kit) provides a preset 3.3V output voltage from a +4.5V to +5.5V input source. It  delivers  up  to  3A  output  current  with  greater  than 90% efficiency.

The MAX1623 is a step-down switching regulator with synchronous rectification that includes two low-onresistance 0.1 W (max), 3A MOSFET power switches. It features a resistor-programmable fixed off-time as well as current-mode operation for superior load- and linetransient response.

The MAX1623 EV kit can also be used to evaluate other output voltages besides 3.3V by changing RTOFF and the  feedback resistors R1 and R2 located on the bottom of the board.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| C1            |     1 | 220µF, 10V, low-ESR tantalum cap Sprague 593D227X0010E2W or AVX TPSE227M010R0100 |
| C2            |     1 | 330µF, 10V, low-ESR tantalum cap Kemet T510X337M010AS                            |
| C3            |     1 | 470pF ceramic capacitor                                                          |
| C4            |     1 | 0.47µF ceramic capacitor                                                         |
| C5            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2B                            |
| C6, C7        |     0 | Not installed                                                                    |
| C8            |     1 | 4.7µF, 10V X5R ceramic capacitor Taiyo Yuden LMK316BJ475ML                       |
| L1            |     1 | 4.7µH power inductor Sumida CDRH125-4R4 or Coiltronics UP2-4R7                   |
| R TOFF        |     1 | 110k W , 1% resistor                                                             |
| R1, R2        |     0 | Not installed                                                                    |
| R3            |     1 | 10 Ω , 5% resistor                                                               |
| U1            |     1 | MAX1623EAP (SSOP-20)                                                             |
| None          |     2 | Shunts                                                                           |
| JU1, JU2      |     2 | 3-pin headers                                                                    |
| None          |     1 | MAX1623 PC board                                                                 |
| None          |     1 | MAX1623 data sheet                                                               |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +4.5V to +5.5V Input Voltage Range
- ' Output Voltage

3.3V Preset

- 1.1V to 3.8V Adjustable (optional resistor-divider)
- ' Guaranteed 3A Output Current
- ' 94% Efficiency (VIN = 5V, VOUT = 3.3V at IOUT = 2A)
- ' Internal 3A, 0.1 W (max) MOSFET Switches
- ' Up to 350kHz Switching Frequency
- ' Thermal Shutdown at Tj = +145°C
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1623EVKIT | 0°C to +70°C  | 20 SSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Coiltronics | 561-241-7876 | 561-241-9339 |
| Dale-Vishay | 402-564-3131 | 402-563-6418 |
| Kemet       | 408-986-0424 | 408-986-1442 |
| Motorola    | 602-303-5454 | 602-994-6430 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1623 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX1623 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1623 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5V, 3A supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Verify that the shunt is across JU1 pins 2 and 3 for normal operation.
- 4) Turn on the power supply to the board. Verify that the output voltage is 3.3V.
- 5) To select other output voltages, refer to the Setting the Output Voltage section in the MAX1623 data sheet for instructions on selecting feedback resistors R1 and R2.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1623 EV kit provides a preset 3.3V output from a +4.5V to +5.5V input voltage. It delivers up to 3A of output current.

## Table 1. Jumper JU1 Functions (Shutdown Mode)

| SHUNT LOCATION   | SHDN PIN         | MAX1623 OUTPUT                |
|------------------|------------------|-------------------------------|
| 2 & 3            | Connected to VIN | MAX1623 enabled, V OUT = 3.3V |
| 1 & 2            | Connected to GND | Shutdown mode, V OUT = 0      |

## Other Output Voltages

The MAX1623 EV kit is preset for a 3.3V output voltage. However, the output voltage may also be adjusted by an external voltage divider formed by R1 and R2 (located on the bottom of the board). In addition, RTOFF must be changed to obtain the desired switching frequency (see Switching Frequency and Programming the OffTime in the MAX1623 data sheet). The only other modifications  required  are  to  cut  the  trace  across  R1  and remove the shunt from JU2. Refer to the Setting the Output Voltage and Output Filter Capacitor sections in the MAX1623 data sheet for instructions on selecting feedback resistors R1 and R2 and output capacitor values.

## PC Board Thermal Resistance

Junction to ambient thermal resistance greatly depends on the amount of copper area immediately surrounding the IC's leads. This EV kit has 0.85 in. 2 of copper area and has a measured thermal resistance of 45°C/W.

## Table 2. Jumper JU2 Functions (FB Selection)

| SHUNT LOCATION   | FBSEL PIN        | MAX1623 OUTPUT   |
|------------------|------------------|------------------|
| 1 & 2            | Connected to VIN | V OUT = 2.5V     |
| Not installed    | Floating         | V OUT = 3.3V     |
| 2 & 3            | Connected to GND | Adjustable mode  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1623 Evaluation Kit

| SHUNT LOCATION              | FBSEL PIN        | MAX1623 OUTPUT                                                                                  |   R TOFF (k W ) (for 300kHz) |
|-----------------------------|------------------|-------------------------------------------------------------------------------------------------|------------------------------|
| JU2 pins 1, 2               | Connected to VIN | 2.5V                                                                                            |                          180 |
| JU2 Not installed (default) | Floating         | 3.3V                                                                                            |                          110 |
| JU2 pins 2, 3               | Connected to GND | Adjustable output. Cut trace between R1 pads. Refer to MAX1623 data sheet for R1 and R2 values. |                          270 |

<!-- image -->

Figure 1. MAX1623 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1623 Evaluation Kit

<!-- image -->

Figure 2. MAX1623 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1623 EV Kit PC Board Layout-Component Side

Figure 3. MAX1623 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX1623 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600