<!-- lastmod 2022-08-02 -->
## General Description

The MAX1833 evaluation kit (EV kit) evaluates the MAX1833 high-efficiency, step-up DC-DC converter for portable hand-held devices. The EV kit accepts a positive input voltage between 1.5V to VOUT and converts it to  a  3.3V  output  for  currents  up  to  150mA.  The  EV  kit provides ultra-low quiescent current and high efficiency for maximum battery life.

The MAX1833 EV kit is a fully assembled and tested surface-mount printed circuit board. It can also be used to evaluate the MAX1832/MAX1834/MAX1835 for other output voltages in the 2V to 5.5V range. Additional pads on the board accommodate the external feedback resistors for setting different output voltages.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 10 µ F, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK325BJ106MN or TDK C3225X5R1A106M |
| C3            |     1 | 0.01µF ceramic capacitor (0805)                                                            |
| JU1           |     1 | 3-pin header                                                                               |
| L1            |     1 | 10µH power inductor Sumida CDRH5D18-100                                                    |
| R1            |     1 | 309k Ω ± 1% resistor (0805)                                                                |
| R2            |     0 | Not installed (0805)                                                                       |
| R3            |     1 | 1M Ω ± 5% resistor (0805)                                                                  |
| R4            |     1 | 220k Ω ± 5% resistor (0805)                                                                |
| U1            |     1 | MAX1833EUT (6-pin SOT23)                                                                   |
| None          |     1 | Shunt                                                                                      |
| None          |     1 | MAX1833 PC board                                                                           |
| None          |     1 | MAX1832 - MAX1835 data sheet                                                               |
| None          |     1 | MAX1833EVKIT data sheet                                                                    |

<!-- image -->

## Features

- ♦ Reverse-Battery Protection
- ♦ 1.5V to VOUT Input Supply Voltage
- ♦ 3.3V Output Voltage (MAX1833/MAX1835)
- ♦ Adjustable Output Voltage (MAX1832/MAX1834, 2V to 5.5V)
- ♦ Up to 150mA Output Current
- ♦ No External Schottky Diode Required
- ♦ Synchronous Rectification for Improved Efficiency
- ♦ 1µA IC Shutdown Current
- ♦ RST Output (MAX1833/MAX1835)
- ♦ 6-Pin SOT23 Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1833EVKIT | 0 ° C to +70 ° C | 6 SOT23      |

Note: To evaluate the MAX1832/MAX1834/MAX1835, request a MAX1832EUT-T/MAX1834EUT-T/MAX1835EUT-T free sample with the MAX1833EVKIT.

## Selector Guide

| PART       | OUTPUT VOLTAGE   | V OUT IN SHUTDOWN   |
|------------|------------------|---------------------|
| MAX1832EUT | Adjustable       | VBATT               |
| MAX1833EUT | Fixed 3.3V       | VBATT               |
| MAX1834EUT | Adjustable       | VBATT - 0.7V        |
| MAX1835EUT | Fixed 3.3V       | VBATT - 0.7V        |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1832, MAX1833, MAX1834, or MAX1835 when contacting these component suppliers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1833 Evaluation Kit

## Quick Start

The MAX1833 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a voltmeter and load (if any) to the VOUT pad.
- 2) Verify that the shunt is across JU1 pins 1 and 2.
- 3) Connect the input supply (1.5V to 3.3V) to the pads marked VBATT and GND.
- 4) Turn on the power and verify that the output voltage is 3.3V.
- 5) Refer to the Setting the Output Voltage section in the MAX1832-MAX1835 data sheet to modify the board for a different output voltage.

## Detailed Description

## Shutdown Jumper Selection

The MAX1833 EV kit features a shutdown mode that reduces quiescent current to &lt;1µA to preserve battery life.  In  shutdown, the MAX1833 (and MAX1832) output connects to the battery input voltage through the inductor and the internal synchronous rectifier PFET.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN          | MAX1833 OUTPUT                |
|------------------|-------------------|-------------------------------|
| 1 and 2          | Connected to VOUT | MAX1833 enabled, V OUT = 3.3V |
| 2 and 3          | Connected to GND  | Shutdown mode, V OUT = VBATT  |

## Evaluating Other Output Voltages (MAX1832/MAX1834)

The MAX1833EVKIT output is set to +3.3V. However, the MAX1832/MAX1834 can be used to evaluate other output voltages in the +2V to +5.5V range. Replace the MAX1833 device with a MAX1832 or MAX1834, and select feedback resistors R1 and R2 values. Select feedback resistor R2 in the 100k Ω to 1M Ω range. R1 is then given by:

<!-- formula-not-decoded -->

where VFB = 1.228V.

Care must be taken when installing the IC. Refer to the MAX1832-MAX1835 data sheet for soldering instructions and limitations.

Figure 1. MAX1833 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1833 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1833 Evaluation Kit

Figure 3. MAX1833 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1833 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3