<!-- lastmod 2022-08-05 -->
## General Description

The MAX1698 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains a boost switching-regulator current source and array of white LEDs. As configured, the circuit is set up to drive 3 banks of 3 series LED arrays at 20mA each; however, a wide variety of other configurations are possible. The IC can be powered from a separate +2.7VDC to +5.5VDC input, while LED power has a wider input range and can be supplied either from a logic supply or battery source.

The MAX1698 features digital soft-start and adjustable lossless LED current control. The MAX1698 EV kit demonstrates low quiescent current, open-circuit protection, and up to 90% efficiency for maximum battery life. Operation up to 500kHz allows the use of tiny surface-mount components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 25V X5R ceramic cap (1812) Taiyo Yuden TMK432BJ106KM                             |
| C2            |     1 | 1µF, 25V X5R ceramic cap (1206) Taiyo Yuden TMK316BJ105KL or Murata GRM42-6X7R105K025A |
| C3            |     1 | 1µF, 6.3V X5R ceramic cap (0603) Taiyo Yuden JMK107BJ105KA                             |
| D1            |     1 | 40V, 0.5A Schottky diode (SOD-123) Motorola MBR0540T1 or Nihon EP05Q04                 |
| D2            |     1 | 24V, 350mW zener diode (SOT-23) Central Semiconductor CMPZ5253B                        |
| D3-D11        |     9 | White LEDs Nichia NSPW500BS (T-1-3/4)                                                  |
| L1            |     1 | 10µH inductor Sumida CDRH5D18-100NC                                                    |
| N1            |     1 | 30V, 2.2A, N-channel MOSFET (SuperSOT™-3) Fairchild Semiconductor FDN337N              |
| R1            |     1 | 500k Ω potentiometer Bourns 3352E-1-504                                                |
| R2, R3, R4    |     3 | 15 Ω ±1% resistors (0805)                                                              |
| U1            |     1 | MAX1698EUB (10-pin µMAX)                                                               |
| JU1           |     1 | 3-pin header                                                                           |
| None          |     1 | Shunt (JU1)                                                                            |
| None          |     1 | MAX1698 PC board                                                                       |
| None          |     1 | MAX1698 data sheet                                                                     |
| None          |     1 | MAX1698 EV kit data sheet                                                              |

- ♦ Input Voltage Down to +0.8V
- ♦ 3x3 White LED Array
- ♦ Potentiometer-Adjustable Output Current Level (LED Brightness Control)
- ♦ External Low-Loss N-Channel Switch
- ♦ 10nA IC Shutdown Current
- ♦ Operation Up to 500kHz Switching Frequency
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1698EVKIT | 0°C to +70°C  | 10 µMAX      |

## Component Suppliers

| SUPPLIER                   | PHONE        | FAX          |
|----------------------------|--------------|--------------|
| Central Semiconductor      | 516-435-1110 | 516-435-1824 |
| Fairchild                  | 408-822-2000 | 408-822-2102 |
| Motorola                   | 602-303-5454 | 602-994-6430 |
| Murata                     | 814-956-0666 | 847-238-0490 |
| Nichia America Corporation | 408-573-0933 | 408-573-0934 |
| Nihon USA                  | 661-867-2555 | 661-867-2698 |
| Sumida                     | 708-956-0666 | 708-956-0702 |
| Taiyo Yuden                | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1698 when contacting these component suppliers.

SuperSOT is a trademark of Fairchild Semiconductor.

## Quick Start

The MAX1698 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX1698 Evaluation Kit

## Main Output

- 1) Connect a +2.7V to +5.5V supply to the VCC pad. Connect the ground to the GND pad.
- 2)  Connect a +0.8V to +7V supply to the VBATT pad. Connect the ground to the GND pad.
- 3)  Connect a voltmeter to the VOUT pad.
- 4)  Verify that shunt JU1 ( SHDN ) is across pins 1 and 2.
- 5)  Rotate the potentiometer (R1) to the midposition.
- 6)  Turn on the power supply, and verify that the output is approximately 9.0V and the LEDs are moderately lit.

For instructions on selecting R1, or other means of adjusting brightness, refer to the Adjusting LED Current section in the MAX1698 data sheet.

## Detailed Description

The MAX1698 EV kit contains a switching-regulator current-source circuit. The circuit requires +2.7V to +5.5V for  IC  power (VCC); however, the LED power input (VBATT) can accept a wide input voltage range from +0.8V up to the forward voltage of the LED array (+7V for the 3x3 array supplied on the EV kit). The board can drive up to +24V for the LED output, as limited by the open-circuit protection zener (D2).

Output current is adjusted with R1 to control LED brightness. The boost converter operates up to a maximum frequency of 500kHz.

The MAX1698 EV kit can evaluate additional off-board LEDs. For instructions on evaluating additional LEDs, see the Evaluating Off-Board LEDs section.

## Jumper Selection Shutdown Mode

The MAX1698 EV kit features a shutdown mode that reduces the MAX1698 quiescent current to less than 1µA (max), preserving battery life. The three-pin jumper (JU1) selects the shutdown mode for the circuit. Table 1 lists the selectable jumper options.

## Changing Maximum LED Current

The maximum LED current is determined by feedback resistor  R2.  LED  current  =  300mV / R2. Resistors R3 and R4 must also match the value of R2 to balance the current in each LED bank. Refer to the Setting the Output Current section of the MAX1698 data sheet for more information on selecting other maximum current settings.

## Evaluating Off-Board LEDs

The MAX1698 EV kit can evaluate off-board LEDs. Current resistors R2, R3, and R4 must be removed from the EV kit. The EV kit LEDs will no longer function. An external feedback resistor must be connected between the FB pad and GND pad. Refer to the Setting the Output Current section of the MAX1698 data sheet for more information on selecting the maximum currentsetting resistor.

## Evaluating Output Voltages Over +24V

Zener diode D2 clamps the output voltage VOUT at +24V if the LED array circuit opens. To evaluate output voltages greater than +24V, zener diode D2 must be replaced. Choose the zener diode +2V above the maximum VOUT. The MOSFET N1 breakdown voltage should exceed the zener voltage. Output capacitor C2's voltage rating must exceed the zener diode voltage.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1698 OUTPUT                      |
|------------------|------------------|-------------------------------------|
| 1 and 2          | Connected to VCC | MAX1698 enabled, V OUT = up to +24V |
| 2 and 3          | Connected to GND | Shutdown mode, V OUT = V IN - V D1  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1698 Evaluation Kit

Figure 1. MAX1698 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1698 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1698 Evaluation Kit

Figure 3. MAX1698 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1698 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4