<!-- lastmod 2022-08-02 -->
## General Description

The MAX1896 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a fixed-frequency 1.4MHz, pulse-width-modulated (PWM), step-up DC-DC converter. The EV kit provides a 12.0V output voltage from a 2.5V to 5.5V input source. It delivers up to 100mA output current.

The EV kit provides low quiescent current and high efficiency. It can also be used to evaluate other output voltages from VIN voltage up to 13.0V by changing the feedback resistors, R1 and R2.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 10.0V tantalum capacitor (A) AVX TAJA106K010                                          |
| C2            |     1 | 4.7µF, 16.0V, X5R ceramic capacitor (1206) Taiyo Yuden EMK316BJ475ML                        |
| C3            |     1 | 0.1µF, 16.0V, X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ104KA                        |
| C4            |     1 | 100pF, 50.0V ceramic capacitor (0603) Taiyo Yuden UMK107CH101JZ or Murata GRM39C0G101J050AD |
| C5            |     1 | 0.033µF, 16.0V, X7R ceramic capacitor (0603) Taiyo Yuden EMK107BJ333KA or equivalent        |

<!-- image -->

Features

- ♦ 2.5V to 5.5V Input Voltage Range
- ♦ Output Voltage Fixed 12.0V Adjustable Output (From VIN to 13.0V)
- ♦ Up to 100mA Output Current
- ♦ 1.4MHz Fixed-Frequency PWM Operation
- ♦ 0.01µA IC Shutdown Current
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1896EVKIT | 0 o C to +70 o C | 6 SOT23-6    |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| L1            |     1 | 10µH inductor Sumida CR43-100MC                          |
| D1            |     1 | 1A, 30.0V Schottky diode Toshiba CRS02 or Nihon EP10QY03 |
| JU1           |     1 | 3-pin header                                             |
| R1            |     1 | 107k Ω ± 1% resistor (0603)                              |
| R2            |     1 | 12.4k Ω ± 1% resistor (0603)                             |
| R3            |     1 | 10k Ω ± 5% resistor (0603)                               |
| U1            |     1 | MAX1896EUT (SOT23-6) top mark AAUX                       |
| None          |     1 | Shunt                                                    |
| None          |     1 | MAX1896 PC board                                         |
| None          |     1 | MAX1896 EV kit data sheet                                |
| None          |     1 | MAX1896 data sheet                                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1896 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE         | FAX           | WEBSITE         |
|-------------|---------------|---------------|-----------------|
| AVX         | 843-946-0238  | 843-626-3123  | www.avxcorp.com |
| Murata      | 770-436-1300  | 770-436-3030  | www.murata.com  |
| Nihon       | 81-33343-3411 | 81-33342-5407 | www.niec.co.jp  |
| Sumida      | 847-545-6700  | 847-545-6720  | www.sumida.com  |
| Taiyo Yuden | 800-348-2496  | 847-925-0899  | www.t-yuden.com |
| Toshiba     | 949-455-2000  | 949-859-3963  | www.toshiba.com |

Note: Please indicate that you are using the MAX1896 when contacting these component suppliers.

## Quick Start

The MAX1896 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that the shunt is across jumper JU1 ( SHDN ) pins 1 and 2.
- 2) Connect a voltmeter and load (if any) to the VOUT pad. Connect the load and voltmeter ground to the GND pad closest to VOUT.
- 3) Connect a 2.5V to 5.5V power supply to the VIN pad. Connect the power-supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply and verify that the output voltage is 12.0V.

To evaluate other output voltages, see the Evaluating Other Output Voltages section.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                                          | MAX1896 OUTPUT                                         |
|------------------|---------------------------------------------------|--------------------------------------------------------|
| 1 and 2          | Connected to VIN                                  | MAX1896 enabled, VOUT = 12.0V                          |
| 2 and 3          | Connected to GND                                  | Shutdown mode, VOUT = VIN - Forward Diode Voltage Drop |
| None             | Connected to SHDN pad (driven by external source) | MAX1896 output depends on external SHDN signal         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

## Shutdown Jumper Selection

The MAX1896 EV kit features a shutdown mode that reduces quiescent current to 0.01µA (typ) to preserve battery life.  JU1 options select the circuit operating modes (shutdown or normal). Table1 shows JU1 functions.

## Soft-Start Control

The MAX1896 EV kit uses a 0.033µF ceramic capacitor (C5) for soft-start control. The full-load current limit will be reached after about 8.25ms. To change the soft-start duration, replace the soft-start capacitor C5, so C5 (µF) = desired soft-start duration (ms) / 250 (ms/µF). For no softstart operation, remove C5 and leave the SS pin open.

## Evaluating Other Output Voltages

The EV kit default output voltage is 12.0V. The output voltage can also be adjusted from VIN to 13.0V by selecting R1 and R2 values. Choose R2 between 10k Ω and 50 Ω :

<!-- formula-not-decoded -->

where VFB = 1.24V.

## MAX1896 Evaluation Kit

<!-- image -->

Figure 1. MAX1896 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1896 Evaluation Kit

<!-- image -->

Figure 2. MAX1896 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1896 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1896 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4