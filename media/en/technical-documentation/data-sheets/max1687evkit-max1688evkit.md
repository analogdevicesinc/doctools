<!-- lastmod 2022-08-04 -->
## General Description

The MAX1688 evaluation kit (EV kit) is a boost switching regulator for one Li-Ion cell or three NiCd/NiMH cells in battery-powered systems. The EV kit accepts a positive input between 2.7V and 6V and converts it to a 5V out put. It  can easily deliver the current burst required for cell-phone power amplifier systems. The MAX1688 reduces battery surge current by slowly charging a reservoir capacitor, which supplies the necessary peak energy for the current burst. As a result, the peak battery input current is limited, thereby minimizing the battery voltage sag and transient dips. The EV kit operates at 600kHz, allowing the use of small external components.

The MAX1688 EV kit provides low quiescent current and high efficiency for maximum battery life. An internal synchronous rectifier is used to provide over 90% conversion efficiency. This EV kit is a fully assembled and tested surface-mount circuit board. The MAX1688 EV kit can also be used to evaluate the MAX1687.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1            |     1 | 47µF, 16V tantalum capacitor AVX TPSC476M016R0350 or Sprague 595D476X0016C2T |
| C2            |     1 | 0.1µF ceramic capacitor                                                      |
| C3, C4        |     2 | 1000µF, 6.3V electrolytic capacitors* Sanyo 6CV1000AX                        |
| C5            |     0 | Not installed                                                                |
| L1            |     1 | 10µH inductor Sumida CLS62B-100 or Coiltronics TP2-100                       |
| R1            |     1 | 60.4k Ω 1% resistor                                                          |
| R2, R3        |     2 | 20.0k Ω 1% resistors                                                         |
| R4            |     1 | 1M Ω 5% resistor                                                             |
| R5            |     0 | Not installed (for MAX1687 only)                                             |
| U1            |     1 | MAX1688EUE                                                                   |
| None          |     1 | MAX1688 PC board                                                             |
| None          |     1 | MAX1688 data sheet                                                           |

*For low-profile applications, use Sprague tantalum 595108X06R3R2.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Coiltronics | 561-241-7876 | 561-241-9339 |
| Dale-Vishay | 402-564-3131 | 402-563-6418 |
| Sanyo       | 619-661-6835 | 619-661-1055 |
| Sprague     | 603-224-1961 | 603-224-1430 |
| Sumida      | 708-956-0666 | 708-956-0702 |

- ♦ 2.7V to 6V Input Voltage Range
- ♦ 5V Output Voltage
- ♦ Less than 500mV Output Voltage Droop with 1.42A Burst Current
- ♦ 90% Efficiency
- ♦ Output Disconnected from Input during Shutdown
- ♦ 600kHz Switching Frequency
- ♦ Internal MOSFET and Synchronous Rectifier
- ♦ 3µA IC Shutdown Current
- ♦ Surface-Mount Components (TSSOP Package)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1688EVKIT | 0°C to +70°C  | 16 TSSOP     |

Note: To evaluate the MAX1687, order a MAX1687EUE sample with the MAX1688 EV kit.

## Quick Start

The MAX1688 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 3V supply voltage to the VIN pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Turn on the power supply.
- 4) Synchronize the GSM pulse load to the ON signal by applying the logic signal that controls the power amplifier  to  the  ON/ OFF pad. ON is low when GSM load is applied.
- 5) Verify the output voltage is 5V. For other output voltages, refer to the Adjusting the Output Voltage section in the MAX1687/MAX1688 data sheet for instructions on selecting the feedback resistors.

†

Pg

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

-

†

## MAX1688 Evaluation Kit

## Detailed Description

The MAX1688 EV kit is designed for supplying short-dura tion, high-current bursts for GSM cell phone applications. It combines a boost switching regulator, an N-channel power MOSFET, a P-channel synchronous rectifier, and a precision reference in a single, tiny 16-pin TSSOP package. The EV kit accepts a positive input between 2.7V and 6V and converts it to a 5V output with less than 500mV output volt age droop at 1.4A burst load. The EV kit operates at 600kHz, allowing the use of small external components. For other applications including component value selection, refer to the Applications Information  section in the MAX1687/MAX1688 data sheet.

## Evaluating the MAX1687

The MAX1688 EV kit can also be used to evaluate the MAX1687. Follow the steps below to evaluate the MAX1687.

- 1) Replace the MAX1688 with a MAX1687EUE.
- 2) Install  a  short  at  location  JU1  to  run  the  MAX1687 continuously or apply a logic signal for ON/ OFF control.
- 3) Turn on the power supply.
- 4) Set up the voltage to the MAX1687's LIM pad by applying an external voltage to the CHG(LIM) pad or by completing the voltage divider (R3/R5). Refer to the Adjusting Current Limit (MAX1687) section of the MAX1687/MAX1688 data sheet.

Figure 1.  MAX1688 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

-

-

<!-- image -->

## MAX1688 Evaluation Kit

<!-- image -->

Figure 2.  MAX1688 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1688 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX1688 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1688 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600