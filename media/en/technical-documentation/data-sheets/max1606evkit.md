<!-- lastmod 2022-08-02 -->
## General Description

The MAX1606 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a step-up switching converter that generates a positive voltage to drive low-power LCD displays. The circuit is configured for a +18V output voltage and provides up to 20mA. Higher output voltages are possible by selecting different components.

The IC operates from a +2.4V to +5.5V supply voltage but can boost battery voltages as low as +0.8V up to +28V at the output. The IC also offers a true shutdown mode that disconnects the output from the input. Three different  inductor  current  limits  can  be  evaluated  with the EV kit as configured.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 10µF, 6.3V,X5Rceramiccap (1206) Taiyo Yuden JMK316BJ106ML or equivalent            |
| C2            |     1 | 0.1µF, 16V, X7R ceramiccap (0603) Taiyo Yuden EMK107BJ104KA or equivalent          |
| C3            |     1 | 1.0pF, 25V, X7Rceramiccap (1206) Taiyo Yuden TMK316BJ105KL or equivalent           |
| C4            |     1 | 10pF, 50V, COGceramiccap(0603) Murata GRM39COG100D050 or Taiyo Yuden UMK107CG100DZ |
| R1            |     1 | 1.0M Ω ± 1% resistor (0805)                                                        |
| R2            |     1 | 75k Ω ± 1% resistor (0805)                                                         |
| D1            |     1 | 0.5A schottky diode (SOD-123) Nihon EP05Q03L                                       |
| L1            |     1 | 10 µ H, 1.2A inductor Sumida CDRH5D18-100                                          |
| U1            |     1 | MAX1606EUA (8-pin µ MAX)                                                           |
| JU1, JU2      |     2 | 3-pin headers                                                                      |
| None          |     2 | Shunts                                                                             |
| None          |     1 | MAX1606 PC board                                                                   |
| None          |     1 | MAX1606 data sheet                                                                 |
| None          |     1 | MAX1606 EV kit data sheet                                                          |

- ♦ Input Voltage
- +0.8V to +5.5V (VIN)
- +2.4V to +5.5V (VCC)
- ♦ Output Voltage
- +18V Output Up to 20mA (as configured)
- ♦ True Shutdown (output disconnected from input)
- ♦ Output Voltage Adjustable with Resistors
- ♦ Adjustable Inductor Current-Limit Setting
- ♦ Internal MOSFET Switches
- ♦ 1µA (max) IC Shutdown Current
- ♦ Switching Frequency Up to 500kHz
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1606EVKIT | 0 ° C to +70 ° C | 8 µ MAX      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Murata      | 814-237-1431 | 814-238-0409 |
| Nihon USA   | 661-867-2555 | 661-867-2698 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1606 when contacting these component suppliers.

## Quick Start

The MAX1606 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

1. Verify that shunts are across pins 1 and 2 of jumpers JU2 ( SHDN ) and JU1 (LIM, 500mA).
2. Connect a +0.8V to +5.5V DC power supply to the VIN pad. Connect the supply ground to the GND pad (or use the same supply and limits as in step 3)
3. Connect a +2.4V to +5.5V DC power supply to the VCC pad. Connect the supply ground to the GND pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1606 Evaluation Kit

4. Turn on the VCC power supply, then the VIN power supply. Power-supply sequencing is not critical.
5. Verify that the output (VOUT) is +18V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## Detailed Description

The MAX1606 EV kit is a fully assembled and tested surface-mount circuit board that contains a step-up switching converter generating +18V used to drive lowpower LCD displays. The circuit provides up to 20mA of current to the EV kit's output. Higher output voltages up to +28V are possible by selecting different feedback resistors

Power for the converter circuit can be supplied from a +0.8V to +5.5V DC source or a multiple-cell lithium-ion (Li+) battery. The IC requires a +2.4V to +5.5V DC source. The IC can also be powered from the converter's input supply if the input voltage is limited to between +2.4V and +5.5V.

Three different inductor current limits can be evaluated with the EV kit-125mA, 250mA, and 500mA-by changing a jumper position.

The MAX1606 EV kit demonstrates low quiescent current (18µA typ).

## Jumper Selection

## Shutdown Mode

The MAX1606 EV kit features a shutdown mode that reduces MAX1606 supply current to &lt;1µA and disconnects the output from the input, thus preserving battery life and obtaining a true shutdown output voltage of 0V. The 3-pin jumper, JU2, selects the shutdown mode for the MAX1606. Table 1 lists the selectable jumper options.

## Inductor Current Limit

The MAX1606 EV kit features options for evaluating several different inductor current limits.

The 3-pin jumper, JU1, selects the inductor current limit for  the  MAX1606 EV kit. Table 2 lists the selectable jumper options.

## Evaluating Other Output Voltages

## Output

The MAX1606 EV kit's step-up converter output (VOUT) is  set  to  +18V  by  two  feedback  resistors  (R1,  R2).  To generate output voltages other than +18V (VIN to +28V), select different voltage-divider resistors (R1, R2). Refer to the Setting the Output Voltage section in the MAX1606 data sheet for instructions on selecting the resistors. The output voltage (VOUT) is determined by the following equation:

<!-- formula-not-decoded -->

where VFB = 1.25V.

## Single-Supply Operation

## VIN and VCC

The MAX1606 EV kit can be operated from a single power supply. To evaluate the EV kit with a single supply, connect a jumper wire from the VIN pad to the VCC pad. Connect a +2.4V (min) to +5.5V (max) power supply to the VIN or VCC pad.

## Table 1. Jumper JU2 Options

| SHUNT LOCATION   | SHDN PIN         | MAX1606 OUTPUT                               |
|------------------|------------------|----------------------------------------------|
| 1 and 2          | Connected to VCC | MAX1606 enabled, VOUT = +18V (as configured) |
| 2 and 3          | Connected to GND | Shutdown mode, VOUT = 0V                     |

## Table 2. Jumper JU1 Options

| SHUNT LOCATION   | LIM PIN          |   INDUCTOR CURRENT LIMIT (mA) |
|------------------|------------------|-------------------------------|
| 1 and 2          | Connected to VCC |                           500 |
| 2 and 3          | Connected to GND |                           125 |
| None             | Floating         |                           250 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1606 Evaluation Kit

<!-- image -->

Figure 1. MAX1606 EV Kit Schematic

Figure 2. MAX1606 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX1606 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1606 Evaluation Kit

Figure 4. MAX1606 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600