<!-- lastmod 2022-08-05 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX688 evaluation kit (EV kit) provides a regulated 3.3V output voltage while operating on input voltages from 3.5V to 11V. It delivers a 0.5A output current from a 3.5V to 5.75V input, with less than 200mV dropout. Operation with higher input voltages (up to 11V) is possible as long as the maximum power dissipation across the pass transistor is less than 1.25W.

The MAX688 EV kit is a fully assembled and tested surface-mount printed circuit board. The board comes with a 3.3V-output MAX688 IC installed, but can also be used to evaluate the MAX689 (3.0V output), or MAX687 (3.3V output, automatic shutdown). Additional pads are provided on the board's solder side to accommodate the external components used with the MAX687.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ceramic capacitor Marcon THCR30E1E225Z or AVX 1206YG225ZATZA                    |
| C2            |     1 | 68µF, 20V, low-ESR tantalum capacitor AVX TPSE686M020R0150 or Sprague 595D686X0016D2B |
| C4            |     1 | 0.01µF ceramic capacitor                                                              |
| R1            |     1 | 10 Ω , 5% resistor                                                                    |
| R2            |     1 | 100k Ω , 5% resistor                                                                  |
| Q1            |     1 | PNP power transistor V BRCE = 25V, IC = 3A, β > 100 Zetex FZT749                      |
| U1            |     1 | Maxim MAX688CSA                                                                       |
| JU1           |     1 | 3-pin header                                                                          |
| JU2           |     1 | 2-pin header                                                                          |
| None          |     2 | Shunts                                                                                |
| None          |     1 | MAX688 PC board                                                                       |
| None          |     1 | MAX688 data sheet                                                                     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0238 | (803) 626-3123 |
| IRC        | (213) 772-2000 | (213) 772-9028 |
| Marcon     | (708) 913-9980 | (708) 913-1150 |
| Sprague    | (508) 339-8900 | (508) 339-5063 |
| Zetex      | (516) 543-7100 | (516) 864-7630 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 3.5V to 11V Input Supply Range
- ♦ 3.3V Output Voltage
- ♦ Up to 0.5A Output Current
- ♦ &lt;0.02 µ A Shutdown Supply Current
- ♦ 150 µ A Quiescent Current
- ♦ External PNP Pass Transistor
- ♦ Adjustable Current Limit
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX688EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX688 EV kit is a fully assembled and tested surface-mount board. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 3.5V to 11V power supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place one shunt across JU1 pins 2 and 3 and remove the other shunt from JU2 for normal operation.
- 4) Turn on the power and verify that the output voltage is 3.3V.

Instructions for  modifying the board for a 3.0V output appear in the section Evaluating the MAX689 .

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX688 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Shutdown Function

The MAX688 has an active-low shutdown control input to turn its output on or off at any time. The 3-pin header JU1 selects the shutdown mode. Remove the shunt when driving shutdown with an external signal. Table 1 lists the jumper selectable options.

## Evaluating the MAX689

The MAX688 can be replaced with a MAX689 to generate a 3.0V output voltage with output current up to 0.5A. The only modification required is to replace the IC.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX688 OUTPUT                |
|------------------|------------------|------------------------------|
| 2 & 3            | Connected to VIN | MAX688 Enabled, V OUT = 3.3V |
| 2 & 1            | Connected to GND | Shutdown Mode, V OUT = 0V    |

## Evaluating the MAX687

The MAX688 can be replaced with a MAX687 to generate a 3.3V output voltage with output current up to 0.5A. The only modifications required are as follows:  1) replace the IC, 2) remove R2 and the shunt from JU1, and 3) add R3 and C3 (located on the board's solder side) or drive the ON pin with an external signal.

The MAX687's 3.3V output automatically shuts down whenever the output voltage drops below 2.96V. A power-fail comparator also monitors the output and provides an early warning of low output voltage before the device shuts down. When shut down, the output is latched off until the ON input is pulsed.

## Base-Current Limiting

The output current can be limited by installing a currentlimiting resistor, R1, between BASE (pin 7) and BLIM (pin 6) of U1. This EV kit comes with a 10 Ω current-limiting resistor that limits the base current to 6.67mA. If R1 is shorted via jumper JU2, base current is limited to 20mA.

Refer to the MAX687/MAX688/MAX689 data sheet for instructions on selecting the current-limiting resistor value.

Figure 1.  MAX688 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX688 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX688 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX688 Evaluation Kit

Figure 3.  MAX688 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX688 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3