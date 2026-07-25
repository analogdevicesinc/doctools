<!-- lastmod 2022-08-02 -->
## General Description

The MAX1790 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a fixed-frequency, pulse-width-modulated (PWM), stepup DC-DC converter. The EV kit provides a +5V output voltage from an input as low as +2.6V. It delivers up to 500mA output current. The MAX1790 features an internal  MOSFET switch, programmable soft-start, and fast transient response.

The MAX1790 EV kit provides low quiescent current and high efficiency for maximum battery life. Operation at 640kHz allows the use of a tiny surface-mount inductor.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 33µF, 10V, low-ESR electrolytic cap (POSCAP) Sanyo 10TPA33M        |
| C2            |     1 | 47µF, 6.3V, low-ESR electrolytic cap (POSCAP) Sanyo 6TPA47M        |
| C3            |     1 | 0.033µF ceramic capacitor (1206)                                   |
| C4            |     1 | 820pF ceramic capacitor (1206)                                     |
| C5            |     1 | 0.22µF ceramic capacitor (1206)                                    |
| C6            |     1 | 56pF ceramic capacitor (0805)                                      |
| C7            |     1 | 0.1µF ceramic capacitor (0805)                                     |
| L1            |     1 | 5.4µH, 1.6A inductor Sumida CDRH5D18-5R4NC or Sumitomo CXLM120-5R6 |
| D1            |     1 | 1A Schottky diode Nihon EP10QY03 or Toshiba CRS02                  |
| JU1           |     1 | 3-pin header                                                       |
| R1            |     1 | 1M Ω ±1% resistor (1206)                                           |
| R2            |     1 | 324k Ω ±1% resistor (1206)                                         |
| R3            |     1 | 62k Ω ±5% resistor (1206)                                          |
| U1            |     1 | MAX1790EUA (8-pin µMAX)                                            |
| None          |     1 | Shunt                                                              |
| None          |     1 | MAX1790 PC board                                                   |
| None          |     1 | MAX1790 EV kit data sheet                                          |
| None          |     1 | MAX1790 data sheet                                                 |

- ♦ +2.6V to +5V Input Voltage Range
- ♦ 5V Output Voltage
- ♦ Up to 500mA Output Current
- ♦ 640kHz Fixed-Frequency PWM Operation
- ♦ Internal MOSFET Switch
- ♦ 0.1µA IC Shutdown Current
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1790EVKIT | 0°C to +70°C  | 8 µMAX       |

## Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| Coilcraft  | 708-639-6400   | 708-639-1469   |
| Nihon      | 847-843-7500   | 847-843-2798   |
| Sumida     | 408-982-9660   | 408-982-9858   |
| Sumitomo   | 81-3-5952-8533 | 81-3-5952-8690 |
| Toshiba    | 949-455-2000   | 949-859-3963   |
| Zetex      | 516-543-7100   | 516-864-7630   |

Note: Please indicate that you are using the MAX1790 when contacting these component suppliers.

## Quick Start

The MAX1790 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +2.6V to +5V supply to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify that the shunt is across JU1 pins 1 and 2 to enable the MAX1790.
- 4) Turn on the power supply and verify that the output is at +5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX1790 Evaluation Kit

## Detailed Description

## Shutdown Mode

The EV kit features a shutdown mode that reduces the MAX1790 quiescent current to 0.1µA, preserving battery  life.  The  three-pin  header,  JU1,  selects  the  shutdown mode (Table 1).

## Evaluating Other Output Voltages

The EV kit output is programmed to 5V. However, the output voltage can also be adjusted from VIN to 12V by selecting R1 and R2 values. R2 can have a value up to 500k Ω without sacrificing accuracy. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.24V.

Refer  to  the Application Circuits section  of  the MAX1790 data sheet for different output voltage circuits.

## Switching Frequency Selection

The MAX1790 is shipped to operate at 640kHz. The switching frequency can be changed to 1.2MHz by installing jumper JU2 (Table 2). Refer to the MAX1790 data sheet for selecting the proper components to operate at 1.2MHz.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1790 OUTPUT                        |
|------------------|------------------|---------------------------------------|
| 1-2              | Connected to VIN | MAX1790 enabled, V OUT = +5V          |
| 2-3              | Connected to GND | Shutdown mode, V OUT = V IN - V DIODE |

## Table 2.  Frequency Pin Setting

| SHUNT LOCATION   | FREQUENCY PIN    | SWITCHING FREQUENCY   |
|------------------|------------------|-----------------------|
| Installed        | Connected to VIN | 1.2MHz                |
| Not installed    | Floating         | 640kHz                |

<!-- image -->

## MAX1790 Evaluation Kit

<!-- image -->

Figure 1.  MAX1790 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1790 Evaluation Kit

<!-- image -->

Figure 2.  MAX1790 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1790 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1790 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600