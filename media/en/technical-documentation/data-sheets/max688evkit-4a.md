<!-- lastmod 2022-08-03 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX688-4A evaluation kit (EV kit) provides a regulated 3.3V output voltage while operating on input voltages from 3.5V to 11V. It delivers up to 4A output current from a 4.5V to 5.5V input, with low dropout.

The MAX688-4A EV kit is a fully assembled and tested printed circuit board. The board comes with a 3.3V-output MAX688 IC installed, but can also be used to evaluate the MAX689 (3.0V output).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------|
| C3            |     1 | 1µF ceramic capacitor Marcon THCR30E1E105M                                                                                                 |
| C4            |     1 | 4.7µF, 16V tantalum capacitor Sprague 595D475X0016A2B                                                                                      |
| C1, C2        |     2 | 150µF, 35V aluminum electrolytic caps. Nichicon UPL1V151MPH6 or Sanyo 35MV150GX                                                            |
| C16           |     1 | 0.01µF ceramic capacitor                                                                                                                   |
| C5            |     1 | 1200µF, 16V aluminum electrolytic cap. Nichicon UPL1C122MRH6 or Sanyo 16MV1200GX OR 1000µF, 25V aluminum electrolytic cap. Sanyo 25MV100GX |
| R4            |     1 | 10 Ω , 5% resistor                                                                                                                         |
| R1            |     1 | 100k Ω , 5% resistor                                                                                                                       |
| R3            |     1 | 1k Ω , 5% resistor                                                                                                                         |
| Q1            |     1 | PNP power transistor (TO-220) Motorola TIP42A                                                                                              |
| Q2            |     1 | PNP transistor, Motorola 2N4403                                                                                                            |
| None          |     1 | Heatsink, Thermalloy 6072B                                                                                                                 |
| U1            |     1 | Maxim MAX688CSA (8-pin SO)                                                                                                                 |
| JU1           |     1 | 3-pin header                                                                                                                               |
| JU2           |     1 | 2-pin header                                                                                                                               |
| None          |     2 | Shunt                                                                                                                                      |
| None          |     1 | PC board                                                                                                                                   |
| None          |     1 | MAX688 data sheet                                                                                                                          |

<!-- image -->

- ' 3.5V to 11V Input Supply Range
- ' 3.3V Output Voltage
- ' Up to 4A Output Current
- ' &lt;0.02µA/MAX688 Shutdown Supply Current
- ' 150µA Quiescent Current
- ' External PNP Pass Transistor
- ' Adjustable Current Limit
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   |
|----------------|---------------|
| MAX688EVKIT-4A | 0°C to +70°C  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0238 | (803) 626-3123 |
| IRC        | (213) 772-2000 | (213) 772-9028 |
| Marcon     | (708) 913-9980 | (708) 913-1150 |
| Sanyo      | (619) 661-6835 | (619) 661-1055 |
| Sprague    | (508) 339-8900 | (508) 339-5063 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX688-4A EV kit is a fully assembled and tested board. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5V power supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place one shunt across JU1 pins 2 and 3 and the other shunt across JU2 for normal operation.
- 4) Turn on the power and verify that the output voltage is 3.3V.

Instructions for  modifying the board for a 3.0V output appear in the section Evaluating the MAX689.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX688-4A Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Shutdown Function

The MAX688 has an active-low shutdown control input to turn its output on or off at any time. The 3-pin header JU1 selects the shutdown mode. Remove the shunt when driving shutdown with an external signal. Table 1 lists the jumper selectable options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX688 OUTPUT                  |
|------------------|------------------|--------------------------------|
| 2 & 3            | Connected to VIN | MAX6884A Enabled, V OUT = 3.3V |
| 2 & 1            | Connected to GND | Shutdown Mode, V OUT = 0V      |

## Evaluating the MAX689

The MAX688 can be replaced with a MAX689 to generate a 3.0V output voltage with output current up to 4A. The only modification required is to replace the IC.

## Base-Current Limiting

The output current can be limited by installing a currentlimiting resistor, R2, between BASE (pin 7) and BLIM (pin 6) of U1. This EV kit comes with a shunt across JU2, which limits base current to 20mA.

For lower base current limit, refer to the MAX687/ MAX688/MAX689 data sheet for instructions on selecting the current-limiting resistor value.

Figure 1.  MAX688-4A EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  Component Placement Guide-Component Side

<!-- image -->

Figure 4.  PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  PC Board Layout-Component Side

<!-- image -->

## MAX688-4A Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

© 1995 Maxim Integrated Products