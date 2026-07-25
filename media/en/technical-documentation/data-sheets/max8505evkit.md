<!-- lastmod 2022-08-02 -->
## General Description

The MAX8505 evaluation kit (EV kit) provides a 1.2V output voltage from a 2.6V to 5.5V input source, and delivers 3A output current. The MAX8505 EV kit includes the MAX8505 step-down switching regulator with an internal high-efficiency switch. The EV kit operates in PWM mode at a fixed 1MHz frequency, allowing use of the small-size external components.

The MAX8505 EV kit is a fully assembled and tested surface-mount printed circuit board. It can also be used to evaluate other output voltages, from 0.8V up to 85% of VIN, by changing the feedback resistors R2 and R3.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 22µF ±20%, 6.3V X5R ceramic capacitors (1206) TDK C3216X5R0J226M                                   |
| C3            |     0 | Not installed, capacitor (0603)                                                                    |
| C4            |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J476M                                    |
| C5, C7        |     2 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104KT                                  |
| C6            |     1 | 0.033µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM39X7R333K025 or Taiyo Yuden EMK107BJ333KA |
| C8            |     1 | 220pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221K                                    |
| C9            |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K          |
| C10, C11      |     2 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRP155R61A104K or TDK C1005X5R1A104K          |

- ♦ 2.6V to 5.5V Input Voltage Range
- ♦
- Output Voltage Preset to 1.2V (by External Voltage-Divider)

0.8V to 85% of VIN Output Voltage Range

- ♦ 3A Output Current
- ♦ 1MHz Switching Frequency
- ♦ POK (Power-OK) Output
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART       | TEMP RANGE   | IC PACKAGE   |
|------------|--------------|--------------|
| MAX8505EEE | 0°C to +70°C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C12, C13      |     2 | 470µF ±20%, 6.3V POSCAP (D4) Sanyo 6TPB470M                                     |
| D1            |     1 | 100mA, 30V Schottky diode (SOD-523) Central Semiconductor CMOSH-3 (Top Mark 53) |
| JU1           |     1 | 2-pin header                                                                    |
| L1            |     1 | 1.0µH inductor TOKO FDV0630-1R0M                                                |
| R1            |     1 | 49.9k Ω ±1% resistor (0603)                                                     |
| R2            |     1 | 11.3k Ω ±1% resistor (0603)                                                     |
| R3            |     1 | 22.6k Ω ±1% resistor (0603)                                                     |
| R4            |     1 | Not installed, shorted with PC trace (0603)                                     |
| R5            |     1 | 200k Ω ±5% resistor (0603)                                                      |
| R6            |     1 | 20k Ω ±5% resistor (0603)                                                       |
| R7            |     1 | 10 Ω ±5% resistor (0603)                                                        |
| U1            |     1 | MAX8505EEE (16-pin QSOP)                                                        |
| None          |     1 | Shunt                                                                           |
| None          |     1 | MAX8505 PC board                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

## MAX8505 Evaluation Kit

## Quick Start

The MAX8505 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for proper board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that there is a shunt on jumper JU1.
- 2) Connect a voltmeter and load (if any) from VOUT to GND.
- 3) Connect a 2.6V to 5.5V power supply to the VIN pad. Connect the power-supply ground to GND closest to VIN (with the supply off).
- 4) Turn on the power supply and verify that the output voltage is 1.2V.

To evaluate other output voltages, see the Evaluating Other Output Voltages section.

## Detailed Description

The MAX8505 EV kit operates from an input voltage range of 2.6V to 5.5V, and delivers up to 3A of output current at a fixed 1MHz frequency. To change the switching frequency to 500kHz, cut open the short on the R4 pads and install a 100k Ω resistor.

The POK pad provides a logic low when the output voltage moves outside ±12% of the nominal voltage. Connect the pullup resistor (100k Ω or less) from POK to VIN, or any supply voltage ≤ 5.5V.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION      | CTL PIN                               | MAX8505 OUTPUT               |
|---------------------|---------------------------------------|------------------------------|
| Not installed       | Connected to 200k Ω pulldown resistor | MAX8505 disabled             |
| Installed (default) | Connected to VIN                      | MAX8505 enabled, VOUT = 1.2V |

## Jumper Selection

Jumper JU1 controls the MAX8505 shutdown function. Table 1 lists the jumper options.

## Evaluating Other Output Voltages

The output voltage of the MAX8505 EV kit can be adjusted from 0.8V to 85% of the input voltage VIN by selecting appropriated external components; refer to the Design Procedure section in the MAX8505 data sheet.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| TOKO                  | 847-297-0070 | 847-699-1194 | www.toko.com          |

Note: Please indicate that you are using the MAX8505 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8505 Evaluation Kit

<!-- image -->

Figure 1. MAX8505 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8505 Evaluation Kit

<!-- image -->

Figure 2. MAX8505 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX8505 EV Kit PC Board Layout-Solder Side

Figure 3. MAX8505 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX8505 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600