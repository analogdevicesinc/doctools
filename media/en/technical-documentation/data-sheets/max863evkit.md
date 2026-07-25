<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX863 evaluation kit (EV kit) is an assembled and tested PC board that demonstrates the MAX863 dual, step-up DC-DC controller. The EV kit is factory preset to provide 5V and 3.3V outputs at 700mA and 1.1A, respectively (VIN = 2.4V). Both outputs can also be set to other voltages by pin-strapping or with external resistors.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                                               |
|-----------------|-------|-----------------------------------------------------------------------------------------------------------|
| C1              |     1 | 330µF, 10V tantalum capacitor 0.060 Ω max ESR Sprague 594D337X0010R2                                      |
| C2, C9          |     2 | 100µF, 16V tantalum capacitor 0.1 Ω max ESR AVX TPSE107M016R0100                                          |
| C3, C6, C10,C11 |     0 | Open                                                                                                      |
| C4              |     1 | 10µF, 16V tantalum capacitor                                                                              |
| C5              |     1 | 220µF, 16V tantalum capacitor 0.060 Ω max ESR Sprague 594D227X0016R2                                      |
| C7, C8          |     1 | 0.1µF ceramic capacitor                                                                                   |
| D1, D2          |     2 | 3A, 40V Schottky diode Motorola MBRS340T3                                                                 |
| JU1-JU5         |     5 | 3-pin headers                                                                                             |
| L1, L2          |     2 | 10µH, 2.5A inductor Sumida CD75-10uH (2.3A, 0.07 Ω )                                                      |
| R1, R3, R7, R9  |     0 | Open                                                                                                      |
| R2, R4          |     2 | 0.050 Ω , 1% sense resistor Dale WSL-2010-0.050 Ω ±1% or IRC LR2010-R050-F                                |
| R5              |     1 | 165k Ω , 1% resistor                                                                                      |
| R6, R8          |     2 | 100k Ω , 1% resistors                                                                                     |
| U1              |     1 | Maxim MAX863EEE                                                                                           |
| U2              |     1 | Dual, logic-level N-channel FET International Rectifier IRF7301 (V T < 0.70V, R DS(ON) = 0.070 Ω at 2.7V) |
| None            |     1 | PC board                                                                                                  |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Output Voltages:  Preset 5V and 3.3V, or User-Defined

♦ Output Currents: 700mA at 5V, 1.1A at 3.3V (VIN = 2.4V) 350mA at 5V, 600mA at 3.3V (VIN = 1.5V)

- ♦ Low-Battery Detector
- ♦ Fully Assembled and Tested
- ♦ Proven PC Board Layout

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE   | BOARD TYPE    |
|-------------|---------------|---------------|
| MAX863EVKIT | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER*               | SUPPLIER*               | PHONE                         | FAX            |
|-------------------------|-------------------------|-------------------------------|----------------|
| AVX                     | AVX                     | (803) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Dale                    | Dale                    | (605) 668-4131                | (605) 665-1627 |
| International Rectifier | International Rectifier | (310) 322-3331                | (310) 322-3332 |
| IRC                     | IRC                     | (512) 992-7900                | (512) 992-3377 |
| Motorola                | Motorola                | (602) 303-5454                | (602) 994-6430 |
| Sprague                 | Sprague                 | (603) 224-1961                | (603) 224-1430 |
| Sumida                  | USA                     | (847) 956-0666                | (847) 956-0702 |
| Sumida                  | Japan                   | 81-3-3607-5111                | 81-3-3607-5144 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

This section describes how to operate the MAX863 EV kit  and  evaluate  its  performance. Do not turn on the power supply until all connections are completed.

- 1) Configure the jumpers in accordance with Table 1.
- 2) Connect a 1.5V to 3.3V DC power supply between the VIN and GND input pads.
- 3) Turn on the power supply. With no load and the output in regulation, supply current for the board should be less than a few hundred microamperes.
- 4) Measure the output voltage at OUT1. With FB1 = GND (JU3 = 1-2), OUT1 will be preset to 5V.
- 5) Measure the output voltage at OUT2. The standard factory setting of R5 = 165k Ω and R6 = 100k Ω sets OUT2 to 3.3V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX863 Evaluation Kit

## \_Detailed Description of Hardware

## Adjustable Output Voltage

OUT2 must be set with a resistor divider. The EV kit board provides R5 and R6 for this purpose. OUT1 can be set with a resistor divider (R1 and R3) or configured for a preset value (JU3). The EV kit board is preset for a 5.0V output.

To configure OUT1 for an adjustable output, open jumper JU3 and then install resistors at sites R1 and R3. Select the resistors according to the following formulas:

R1 / R3 = (VOUT1 / VREF) - 1

R5 / R6 = (VOUT2 / VREF) - 1

where VREF = 1.25V.

Note: Output capacitors C1 and C5 are rated for 10V and 16V, respectively. For higher output voltages, replace these capacitors.

## Table 1. Jumper Settings

| FUNCTION      | JUMPER   | STATE   | DESCRIPTION                                                                                                                |
|---------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------|
| BOOT Pin      | JU1      | 1-2*    | BOOT = V DD ; bootstrapped mode (V IN < 2.7V). If BOOT is high, V DD must be connected to OUT1.                            |
| BOOT Pin      | JU1      | 2-3     | BOOT = GND; non-bootstrapped mode (V IN > 2.7V). When using a non-bootstrapped circuit configuration, connect BOOT to GND. |
| V DD Select   | JU2      | 1-2*    | V DD = OUT1; bootstrapped mode (V IN < 2.7V)                                                                               |
| V DD Select   | JU2      | 2-3     | V DD = VIN; non-bootstrapped mode (V IN > 2.7V)                                                                            |
| OUT1 Set      | JU3      | 1-2*    | FB1 = GND; OUT1 set to 5V; R1 and R3 should be open.                                                                       |
| OUT1 Set      | JU3      | 2-3     | FB1 = V DD ; OUT1 set to 3.3V; R1 and R3 should be open.                                                                   |
| OUT1 Set      | JU3      | Open    | OUT1 determined by R1 and R3                                                                                               |
| OUT1 Shutdown | JU4      | 1-2*    | SHDN1 = V DD ; OUT1 enabled                                                                                                |
| OUT1 Shutdown | JU4      | 2-3     | SHDN1 = GND; OUT1 disabled; OUT1 and OUT2 can be independently disabled.                                                   |
| OUT2 Shutdown | JU5      | 1-2*    | SHDN2 = V DD ; OUT2 enabled                                                                                                |
| OUT2 Shutdown | JU5      | 2-3     | SHDN2 = GND; OUT2 disabled                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The EV kit board provides space at C3, C6, C10, and C11 for optional compensation capacitors. Refer to the Set Feedback Compensation section in the MAX863 data sheet for more information.

## Low-Battery Detector

The EV kit board provides pads at R7 and R8 for an optional resistor divider for the low-battery voltage detector. When the voltage at the LBI pin falls below 1.25V, the LBO pin is pulled low. Select the resistors according to the following formula:

<!-- formula-not-decoded -->

where VREF = 1.25V.

<!-- image -->

## MAX863 Evaluation Kit

Figure 1.  MAX863 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX863 Evaluation Kit

<!-- image -->

Figure 2.  MAX863 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX863 EV Kit PC Board Layout-Component Side

Figure 3.  MAX863 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX863 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600