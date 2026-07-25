<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX1742 and MAX1842 evaluation kits (EV kits) provide a +1.8V adjustable output voltage from a +3V to +5.5V input source. The MAX1742 delivers up to 1A of output current, and the MAX1842 delivers up to 2.5A of output current.

The MAX1742/MAX1842 are step-down switching regulators  with  internal  synchronous-rectifiers  that  operate up to 1MHz, which minimizes external components. The devices feature resistor-programmable, fixed off-time current-mode operation for superior load- and line-transient response, and achieve efficiencies up to 95%.

The MAX1742/MAX1842 EV kits can also be used to evaluate other output voltages by adding feedback resistors R1 and R2 or by using the jumper-selectable +1.1V, +1.5V, +1.8V, or +2.5V settings.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                   |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 10 µ F, 6.3V, X5R ceramic capacitor Taiyo Yuden JMK316BJ106ML, Murata GRM42-6X5R106K6.3, or Panasonic ECJ3YB0J106K            |
| C2            |     1 | MAX1742 47 µ F, 6.3V low-ESR capacitor Sanyo 6TPA47M (POSCAP) MAX1842 100 µ F, 6.3V low-ESR capacitor Sanyo 6TPC100M (POSCAP) |
| C3            |     1 | 2.2 µ F, 10V, X5R ceramic capacitor Taiyo Yuden LMK212BJ225MG                                                                 |
| C4            |     1 | 0.01 µ F, 50V, X7R ceramic capacitor                                                                                          |
| C5            |     1 | 470pF, 50V, X7R ceramic capacitor                                                                                             |
| C6            |     1 | 1 µ F, 10V, X7R ceramic capacitor Taiyo Yuden LMK212B105KG or Murata GRM40X7R105K010                                          |
| C7            |     0 | Not installed                                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 1A Output Current for MAX1742 2.5A Output Current for MAX1842
- ♦ Up to 1MHz Switching Frequency
- ♦ Up to 95% Efficiency
- ♦ Synchronous Rectification for Improved Efficiency
- ♦ No External Schottky Diode Required
- ♦ Output Voltage +1.1V, +1.5V, +1.8V, or +2.5V Selectable

+1.1V to VIN Adjustable

- ♦ +3V to +5.5V Input Voltage Range
- ♦ &lt;1µA (typ) IC Shutdown Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP. RANGE      | IC PACKAGE   |
|---------------|------------------|--------------|
| MAX1742 EVKIT | 0 ° C to +70 ° C | 16 QSOP      |
| MAX1842 EVKIT | 0 ° C to +70 ° C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| C8            |     1 | 33 µ F, 10V low-ESR capacitor Sanyo 10TPA33M (POSCAP)                                                                                              |
| JU1, JU3      |     2 | 2-pin headers                                                                                                                                      |
| JU2           |     1 | 4-pin header                                                                                                                                       |
| L1            |     1 | MAX1742 5.3 µ H, 1.9A inductor Sumida CDRH5D28-5R3NC MAX1842 2.2 µ H, 3.8A inductor Sumida 4762-TO54, Coiltronics UP1B-2R2, or Murata LQS66C2R2M04 |
| R1            |     0 | Not installed                                                                                                                                      |
| R2            |     0 | Not installed                                                                                                                                      |
| R3            |     1 | 10 Ω ±5% resistor                                                                                                                                  |
| R4            |     1 | 1M Ω ±5% resistor                                                                                                                                  |
| R5            |     1 | 75k Ω ±1% resistor                                                                                                                                 |
| U1            |     1 | MAX1742EEE or MAX1842EEE                                                                                                                           |
| NONE          |     3 | Shunts                                                                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1742/MAX1842 Evaluation Kits

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Coiltronics | 561-241-7876 | 561-241-9339 |
| Murata      | 814-237-1431 | 814-238-0490 |
| Panasonic   | 201-392-7522 | 201-392-4441 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1742 or MAX1842 when contacting these suppliers.

## Quick Start

The MAX1742 and MAX1842 EV kits are fully assembled and tested surface-mount boards. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

1. Verify that a shunt is on JU1 (shutdown disable) to enable operation and on JU2 (1-4) to set the output voltage for 1.8V.
2. Connect a voltmeter and load (if any) to VOUT and GND.
3. Connect a +3V to +5.5V supply to the pads marked VIN and GND.
4. Turn on the power and verify that the output voltage is +1.8V.
5. Refer to the Output Voltage Selection section to modify the board for a different output voltage.

## Detailed Description

The MAX1742 and MAX1842 EV kits provide a +1.8V output voltage from a +3V to +5.5V input voltage. The MAX1742 EV kit delivers up to 1A of output current, and the MAX1842 EV kit delivers up to 2.5A of output current.  Continuous operation at 2.5A with high ambient temperatures may be limited due to thermal consideration. (See the MAX1742/MAX1842 data sheet, Extended Current Limit section).

## Table 1. Jumper JU1 Function

| SHUNT LOCATION   | SHDN PIN                           | MAX1742/MAX1842 OUTPUT                  |
|------------------|------------------------------------|-----------------------------------------|
| Open             | Connected to GND through 1M Ω (R4) | Shutdown mode, V OUT = 0                |
| Closed (Default) | Connected to VIN                   | MAX1742/MAX1842 enabled, V OUT = +1.8V. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Selection

The 2-pin header JU1 selects the MAX1742/MAX1842 shutdown mode. Table 1 lists the jumper options.

## Output Voltage Selection

The MAX1742 and MAX1842 EV kits are shipped with the output voltage set to +1.8V. To change the output voltage to +1.1V, +1.5V, or +2.5V, move the shunt on JU2 to the location listed in Table 2. For other voltages, remove the shunt on JU3, place a shunt on JU2 (1-3), and add resistors R1 and R2.

Never operate the board with the shunt removed from jumper JU3, unless resistors R1 and R2 are installed.

Use the following equation for calculating the resistors:

<!-- formula-not-decoded -->

Typical values for R1 are 10k Ω to 56k Ω .

Note: The switching frequency of the MAX1742 and MAX1842 EV kits is 900kHz when the input voltage is +5V and the output voltage is +1.8V. This frequency will change when the input or output voltages change. When operated from a 3.3V input voltage, the switching frequency will be 650kHz. Do not operate the MAX1742 or MAX1842 above 1MHz. To set the switching frequency,  change the TOFF resistor (R5) and the inductor. Refer to the MAX1742/MAX1842 IC data sheet to determine the values.

## Input Capacitors

The MAX1742 and MAX1842 EV kits have a 33µF tantalum polymer capacitor and a 10µF ceramic capacitor on the input, but only the 10µF is actually needed. The 33µF capacitor may be needed to stabilize the input if a lab power supply is connected to the EV kit through long wires or if it  has  a  poor  transient  response.  In  a typical application, where the MAX1742/MAX1842 input is directly connected to the output of a regulated supply, the additional capacitance will not be needed.

## MAX1742/MAX1842 Evaluation Kits

Table 2. Output Voltage Configurations

| OUTPUT VOLTAGE (V)                         | JU3    | JU2   |
|--------------------------------------------|--------|-------|
| 1.1                                        | Closed | 1-3   |
| 1.5                                        | Closed | Open  |
| *1.8                                       | Closed | 1-4   |
| 2.5                                        | Closed | 1-2   |
| Adjustable (Set by resistor divider R1/R2) | Open   | 1-3   |

*Default

<!-- image -->

Figure 1. MAX1742/MAX1842 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1742/MAX1842 Evaluation Kits

<!-- image -->

Figure 2. MAX1742/MAX1842 EV Kits Component Placement Guide-Component Side

Figure 3. MAX1742/MAX1842 EV Kits PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX1742/MAX1842 EV Kits PC Board LayoutSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4