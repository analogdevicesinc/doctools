<!-- lastmod 2022-08-03 -->
## General Description

The MAX1817 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that demonstrates the MAX1817 dual-output, step-up DC-DC converter. The main output is configured for +3.3V and provides up to 125mA of current. The LCD bias output is configured for +18.0V and provides up to 10mA. The EV kit can support the dual output with a +1.5V to +3.3V input voltage range.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C1            |     1 | 10 µ F, 6.3V, X5R ceramic capacitor (1206) Taiyo Yuden JMK316BJ106ML or TDK C3216X5R0J106KT |
| C2            |     1 | 1 µ F, 35V, X7R ceramic capacitor (1206) Taiyo Yuden GMK316BJ105ML or equivalent            |
| C3            |     1 | 22 µ F, 6.3V, X5R ceramic capacitor (1210) Taiyo Yuden JMK325BJ226MM                        |
| C4            |     1 | 5.0pF, 50V ceramic capacitor (0603) Murata GRM39COG050B050 or Taiyo Yuden UMK107CH050CZ     |
| C5, C6        |     0 | Not installed (0603)                                                                        |
| R1            |     1 | 1M Ω ± 1% resistor (0805)                                                                   |
| R2            |     1 | 75k Ω ± 1% resistor (0805)                                                                  |
| R3, R4        |     0 | Not installed (0805)                                                                        |
| D1            |     1 | 200mA, 75V junction diode (SOT-23) Central Semiconductor CMPD4448                           |
| D2            |     1 | 0.5A, 30V Schottky diode (SOD-123) Nihon EP05Q03L                                           |
| L1, L2        |     2 | 10 µ H, 1A inductors Sumida CR43-100MC                                                      |
| U1            |     1 | MAX1817EUB (10-pin µ MAX)                                                                   |
| JU1, JU2      |     2 | 3-pin headers                                                                               |
| None          |     2 | Shunts (JU1, JU2)                                                                           |
| None          |     1 | MAX1817 PC board                                                                            |
| None          |     1 | MAX1817 data sheet                                                                          |
| None          |     1 | MAX1817 EV kit data sheet                                                                   |

- ♦
- Dual Output Voltages +3.3V Main Output
- +18V LCD Bias Output
- ♦ Adjustable Output Voltages
- ♦ 125mA Available from the Main Output
- ♦ 10mA Available from the LCD Bias Output
- ♦ Input Voltage as Low as +1.5V
- ♦ Low 15µA Quiescent Supply Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1817EVKIT | 0°C to +70°C  | 10 µMAX      |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Central Semiconductor | 631-435-1110 | 631-435-3388 |
| Murata                | 814-237-1431 | 814-238-0490 |
| Nihon                 | 661-867-2555 | 661-867-2698 |
| Sumida                | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |
| TDK                   | 847-803-6100 | 847-803-6296 |

Note: Please indicate that you are using the MAX1817 when contacting these component suppliers.

## Quick Start

The MAX1817 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Do not turn on the power supply until all connections are completed .

- 1) Verify that shunts are across pins 1 and 2 of jumpers JU1 and JU2 to enable the main output and the LCD output, respectively.
- 2) Connect a voltmeter across the VOM pad and the nearest GND pad to monitor the main output voltage.
- 3) Connect a voltmeter across the VOLCD pad and the nearest GND pad to monitor the LCD output voltage.
- 4) Connect a +1.5V to +3.3V supply to the VBATT pad. Connect the ground to the GND pad.
- 5) Turn on the power supply and verify that the main output VOM is at +3.3V and the VOLCD output is at +18.0V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1817 Evaluation Kit

## Detailed Description

The MAX1817 EV kit is a fully assembled and tested surface-mount circuit containing a dual-output, step-up DC-DC converter. The main output (VOM) is configured to supply 125mA (typ) at +3.3V, and the LCD bias output (VOLCD) is configured to supply 10mA (typ) at +18.0V. The circuit requires a power supply with a +1.5V to +3.3V input voltage range. VOM and VOLCD output voltages are adjustable with external resistors.

## Input Source

The MAX1817 EV kit requires a +1.5V to +3.3V voltage input to maintain the main output voltage at +3.3V and the LCD bias output voltage at +18.0V. However, if the input voltage is raised to the +5.5V maximum input, the VOM output voltage will increase to equal the input voltage minus the diode (D2) voltage drop. At the +5.5V maximum input voltage, the VOLCD output voltage will remain steady at +18.0V.

## Adjustable Outputs

The VOM output voltage is set to +3.3V by a PCB short from FB to ground. The output voltage can be adjusted to a different voltage (+2.5V to +5.5V) by cutting open

## Table 1. Jumper JU1 Functions

| JUMPER   | STATUS   | PIN CONNECTION         | EV KIT OPERATION      |
|----------|----------|------------------------|-----------------------|
| JU1      | 1 and 2  | ON connected to VOM    | VOM output enabled    |
| JU1      | 2 and 3  | ON connected to GND    | VOM output disabled   |
| JU2      | 1 and 2  | ONLCD connected to VOM | VOLCD output enabled  |
| JU2      | 2 and 3  | ONLCD connected to GND | VOLCD output disabled |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

the PCB short (located at R4) and installing resistors R3 and R4. Refer to the Setting the Main Output Voltage section of the MAX1817 data sheet for instructions on selecting R3 and R4.

The +18.0V LCD bias output voltage is set with voltagedivider resistors R1 and R2. These resistors divide the output voltage to the +1.25V LCD feedback regulation threshold at FBLCD. The output can be adjusted to a maximum of +28.0V by replacing resistors R1 and R2. Refer to the Setting the LCD Output Voltage section of the MAX1817 data sheet for instructions on selecting R1 and R2.

## Enable/Disable

The EV kit contains two 3-pin jumpers (JU1 and JU2) that allow the user to enable and disable the main output (VOM) or the LCD output (VOLCD). Refer to Table 1 for jumper configuration. Note that the main output voltage must be at least +2.5V to enable the LCD output.

## MAX1817 Evaluation Kit

<!-- image -->

Figure 1. MAX1817 EV Kit Schematic

Figure 2. MAX1817 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX1817 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1817 Evaluation Kit

Figure 4. MAX1817 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600