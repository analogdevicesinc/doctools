<!-- lastmod 2022-08-02 -->
## General Description

The MAX1951 evaluation kit (EV kit) provides a 1.5V output voltage from a 2.6V to 5.5V input source.The output voltage can be adjusted from 0.8V to VIN. The MAX1951 delivers up to 1.5A output current. The MAX1951 is a fixed-frequency, pulse-width modulated (PWM) step-down switching regulator with internal synchronous-rectifier. Operation at 1MHz minimizes external components.

The MAX1951 EV kit can also be used to evaluate other output voltages by changing the feedback resistors R2 and R3. The EV kit can also be used to evaluate the MAX1952, which is a 1.5A PWM step-down switching regulator with a 1.8V fixed output voltage.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                 |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------|
| C1, C5        |     2 | 10µF ± 20%, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK316BJ106ML or TDK C3216X5R0J106MT                             |
| C2            |     1 | 220pF ± 10%, 50V X7R ceramic capacitor (0603) Murata GRM39X7R221K050AD or Taiyo Yuden UMK107CH221KZ                         |
| C3, C4        |     2 | 0.1µF ± 20%, 16V X7R ceramic capacitors (0603) Taiyo Yuden EMK107BJ104MA or TDK C1608X7R1C104K or Murata GRM 39X7R104K016AD |
| C6            |     0 | Not installed, capacitor (1206)                                                                                             |
| D1            |     0 | Not installed, Schottky diode                                                                                               |
| JU1           |     1 | 2-pin header                                                                                                                |
| L1            |     1 | 2µH, 2A inductor Toko A915AY-2R0M or 1.8µH, 2A inductor Sumida CDRH4D28-1R8                                                 |
| Q1            |     1 | NPNbipolar transistorSOT23 Fairchild MMBT3904 or Zetex FMMT413                                                              |
| R1            |     1 | 51.1k Ω ± 1% resistor (0603)                                                                                                |
| R2            |     1 | 15k Ω ± 1% resistor (0603)                                                                                                  |
| R3            |     1 | 13k Ω ± 1% resistor (0603)                                                                                                  |
| R4            |     1 | 10 Ω ± 5% resistor (0603)                                                                                                   |
| R5            |     1 | 10k Ω ± 5% resistor (0603)                                                                                                  |
| U1            |     1 | MAX1951ESA 8-lead SO                                                                                                        |
| None          |     1 | Shunt                                                                                                                       |
| None          |     1 | MAX1951 PC board                                                                                                            |

- ♦ 2.6V to 5.5V Input Range
- ♦ Output Voltage Adjustable 0.8V to VIN (MAX1951) Fixed 1.8V (MAX1952)
- ♦ 1.5A Output Current
- ♦ Tiny Circuit Footprint: 0.55 ✕ 0.7in 2
- ♦ Low-Profile Components: &lt; 3mm
- ♦ All Ceramic Design
- ♦ Fixed 1MHz Switching Frequency
- ♦ No External Schottky Diode Required
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1951EVKIT | 0°C to +85°C | 8 SO         |

Note: To evaluate MAX1952ESA, request an MAX1952ESA-18 free sample with the MAX1951EVKIT.

## Quick Start

The MAX1951 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that there is no shunt (open) across JU1 (shutdown disabled).
- 2) Connect a voltmeter and load (if any) to the VOUT pad. Connect the ground to the GND closest to VOUT.
- 3) Connect a 2.6V to 5.5V power supply to the VIN pad. Connect the power-supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply and verify that the output voltage is 1.5V.

To evaluate other output voltages with the MAX1951, see the Evaluating Other Output Voltages section . To evaluate the MAX1952, see the Evaluating the MAX1952 section .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

## MAX1951 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Fairchild   | 888-522-5372 | 408-822-2102 | www.fairchildsemi.com |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toko        | 847-297-0070 | 847-699-1194 | www.tokoam.com        |
| Zetex       | 631-543-7100 | 631-864-7630 | www.zetex.com         |

Note: Please indicate that you are using the MAX1951/MAX1952 when contacting these suppliers.

## Detailed Description

The MAX1951 EV kit provides a 1.5V output voltage from a 2.6V to 5.5V input voltage. The EV kit operates at 1MHz fixed frequency and delivers up to 1.5A of output current. An additional pad (D1) is provided on the bottom side of the EV kit for optimizing efficiency evaluation.

## Evaluating Other Output Voltages

The MAX1951 EV kit can provide an output voltage from 0.8V to VIN. The default output voltage is set to 1.5V. To evaluate other output voltages, select R2 between 20k Ω and 50k Ω . R3 is calculated by:

<!-- formula-not-decoded -->

For stable operation, minimum duty cycle should not be less than 18%.

## Shutdown Selection

The MAX1951 enters shutdown mode when the COMP pin is below 0.17V or the IN pin is less than 2.25V. The MAX1951 EV kit incorporates JU1 with a bipolar transistor to control COMP pin. JU1 provides options to select the circuit operating modes, normal or shutdown mode. Table 1 lists JU1 functions.

## Evaluating the MAX1952

The MAX1951 EV kit can be used to evaluate the MAX1952. To evaluate the MAX1952, change the MAX1951ESA to a MAX1952ESA-18, remove R2 and R3, and short the two pads labeled R3.

## Table 1. Jumper JU1 Functions

Figure 1. MAX1951 EV Kit Schematic

| SHUNT LOCATION   | COMP PIN                | MAX1951 OUTPUT                                                                                   |
|------------------|-------------------------|--------------------------------------------------------------------------------------------------|
| On               | Connected to GND        | MAX1951 is disabled, V OUT = 0V                                                                  |
| Off (Open)       | Connected to RC network | MAX1951 is enabled when IN ≥ 2.25V, V OUT = 1.5V MAX1951 is disabled when IN < 2.25V, V OUT = 0V |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1951 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1951 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX1951 Evaluation Kit

Figure 3. MAX1951 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1951 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3