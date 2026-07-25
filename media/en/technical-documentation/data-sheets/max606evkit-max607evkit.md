<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX606 evaluation kit (EV kit) provides a regulated +5V output voltage at up to 200mA while operating from a +3V to +5V input voltage. The MAX606 operates at  frequencies up to 1MHz, allowing the use of small external components.

The MAX606 EV kit is a fully assembled and tested, surface-mount printed circuit board. It comes with the output voltage set to +5V, but can also be used to evaluate other output voltages between VIN and +12.5V.

The MAX606 EV kit can also be used to evaluate the MAX607, which operates at 500kHz. Simply order a free sample of the MAX607EUA along with the MAX606 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| C1            |     1 | 2.2µF, 10V ceramic capacitor Taiyo Yuden LMK212BJ225MG-T |
| C2            |     1 | 4.7µF, 16V ceramic capacitor Taiyo Yuden EMK316BJ475ML-T |
| C4            |     1 | 0.01µF ceramic capacitor                                 |
| C5            |     1 | 0.1µF ceramic capacitor                                  |
| C6*           |     1 | 22µF, 16V tantalum capacitor                             |
| L1            |     1 | 5µH, 1A inductor Sumida CLS62B-5R0                       |
| D1            |     1 | Schottky diode Zetex ZHCS1000                            |
| R1            |     1 | 1M Ω , 5% resistor                                       |
| JU1           |     1 | 2-pin header                                             |
| None          |     1 | Shunt                                                    |
| U1            |     1 | MAX606EUA (8-pin µMAX)                                   |
| None          |     1 | MAX606 PC board                                          |
| C3, R2, R3    |     0 | Not installed                                            |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| Zetex       | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX606 when contacting the above component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +5V, +12V, or Adjustable Voltage
- ' Tiny Surface-Mount Design
- ' 200mA Output Current
- ' +3V to +5V Input Voltage Range
- ' 1µA IC Shutdown Current
- ' Up to 1MHz Switching Frequency
- ' Fully Assembled and Tested Surface-Mount Board

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX606EVKIT | 0°C to +70°C  | 8 µMAX       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX606 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +3V to +5V power supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Make sure that JU1 is shunted.
- 4) Turn on the power and verify that the output voltage is +5V.
- 5) Refer to the Other Output Voltages section to modify the board for different output voltages.

## Evaluating the MAX607

To evaluate the MAX607, turn off the power to the EV kit.  Replace  L1  with  a  10µH  inductor  and  replace  the MAX606 with a MAX607EUA. No other hardware changes are necessary. A good candidate for a 10µH inductor is a Sumida CLS62-100, which fits the same footprint as the CLS62B-5R0. Note that the CLS62-100 has a maximum current rating of 700mA, rather than 1A for the CLS62B-5R0.

1

## MAX606 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

Jumper Selection

The 2-pin header JU1 selects the shutdown mode for the MAX606 and JU2 selects the output voltage. Table 1 lists jumper options.

## Table 1.  Jumper Functions

| JUMPER   | STATE                | FUNCTION                                                                                         |
|----------|----------------------|--------------------------------------------------------------------------------------------------|
| JU1      | Open                 | SHDN pin connected to GND through a 1M Ω resistor. MAX606 in shutdown mode, V OUT = V IN - V D . |
| JU1      | Closed*              | SHDN pin connected to VIN. MAX606 enabled, V OUT = 5V.                                           |
| JU2      | 1-2* (default trace) | FB pin connected to VIN. V OUT = 5V.                                                             |
| JU2      | 2-3                  | FB pin connected to GND. V OUT = 12V.                                                            |
| JU2      | Open                 | FB pin connected to resistor- divider R2 and R3, for adjustable output voltage.                  |

Figure 1.  MAX606 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Other Output Voltages

The MAX606 output voltage is pin-programmable to 5V and 12V, and also adjustable to voltages between VIN and 12.5V. The MAX606 EV kit comes with the output voltage set at 5V through a cuttable trace between JU2 pins 1 and 2. If a 12V output is desired from the MAX606 circuit, cut the trace between JU2 pins 1 and 2,  install  a  jumper  between JU2 pins 2 and 3, and change C2 to a 1µF ceramic capacitor.

If  an  adjustable output voltage is desired from the circuit, cut the trace between JU2 pins 1 and 2 and add the voltage-divider resistors R2 and R3 located on the board's solder side. Choose R2 and R3 as follows:

<!-- formula-not-decoded -->

where VREF = 2V. Since the input current at FB is 200nA (max), large values (up to 100k Ω ) can be used for R3 with no significant loss of accuracy. C3, also provided on the solder side, is an optional feed-forward capacitor that can reduce output voltage ripple at light loads. If this feature is desired, choose a value of C3 in the 4.7pF to 10pF range.

<!-- image -->

Figure 2.  MAX606 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3.  MAX606 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX606 Evaluation Kit

Figure 4.  MAX606 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 5.  MAX606 EV Kit PC Board Layout-Solder Side

<!-- image -->