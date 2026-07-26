<!-- lastmod 2022-08-02 -->
## General Description

The MAX1605 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a boost switching converter that generates a positive voltage to drive low-power LCD displays. The circuit is configured for a +18V output voltage and provides up to 30mA. Higher output voltages are possible by selecting different components.

The IC operates from a +2.4V to +5.5V supply voltage but can boost battery voltages as low as +0.8V up to +30V at the output. Three different inductor current limits can be evaluated with the EV kit as configured.

The MAX1605 EV kit demonstrates low quiescent current and high efficiency up to 88% for maximum battery life. Operation up to 500kHz allows the use of tiny surface-mount components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 0.1µF, 16V, X7R ceramic cap (0603) Taiyo Yuden EMK107BJ104KA        |
| C2, C3        |     2 | 1.0µF, 25V, X7R ceramic caps (1206) Taiyo Yuden TMK316BJ105KL       |
| C4            |     1 | 10pF, 50V ceramic cap (0603) Taiyo Yuden UMK107CG100DZ              |
| D1            |     1 | 500mA, 30V Schottky diode (SOD-123) Nihon EP05Q03L or Toshiba CRS02 |
| L1            |     1 | 10µH, 700mA inductor Sumida CR32-100                                |
| R1            |     1 | 2.2M Ω ± 1% resistor (0805)                                         |
| R2            |     1 | 165k Ω ± 1% resistor (0805)                                         |
| U1            |     1 | MAX1605EUT (6-pin SOT23)                                            |
| JU1, JU2      |     2 | 3-pin headers                                                       |
| None          |     2 | Shunts (JU1, JU2)                                                   |
| None          |     1 | MAX1605 PC board                                                    |
| None          |     1 | MAX1605 data sheet                                                  |
| None          |     1 | MAX1605 EV kit data sheet                                           |

<!-- image -->

Features

- ♦ Input Voltage
- +0.8V to +18V (as configured)
- +2.4V to +5.5V (IC VCC)
- ♦ Output Voltage
- +18V Output Up to 30mA  (as configured)
- ♦ Output Voltage Adjustable with Resistors
- ♦ Adjustable Inductor Current-Limit Setting
- ♦ Internal MOSFET Switches
- ♦ 1µA (typ) IC Shutdown Current
- ♦ Switching Frequency Up to 500kHz
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1605EVKIT | 0 ° C to +70 ° C | 6 SOT23-6    |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Nihon USA   | 661-867-2555 | 661-867-2698 |
| Sumida      | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| Toshiba     | 949-455-2000 | 949-859-3963 |

Note: Please indicate that you are using the MAX1605 when contacting these component suppliers.

## Quick Start

The MAX1605 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +0.8V to +18V DC power supply to the VIN pad. Connect the supply ground to the GND pad (or use the same supply and limits as in step 2).
- 2) Connect a +2.4V to +5.5V DC power supply to the VCC pad. Connect the supply ground to the GND pad.
- 3) Verify that shunts are across pins 1 and 2 of jumpers JU1 ( SHDN ) and JU2 (LIM, 500mA).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1605 Evaluation Kit

- 4) Turn on the VCC power supply, followed by the VIN power-supply. Power-supply sequencing is not critical.
- 5) Verify that the output (VOUT) is +18V.

For instructions on selecting the feedback resistors for other output voltages, refer to the Evaluating Other Output Voltages section in this document.

## Detailed Description

The MAX1605 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a boost switching converter, generating +18V used to drive low power LCD displays. The circuit provides up to 30mA of current to the EV kit's output. Higher output voltages up to +30V are possible by selecting different feedback resistors.

Power for the converter circuit can be supplied from a +0.8V to VOUT DC source or a multiple-cell lithium-ion (Li+)  battery.  The  IC  requires  a  +2.4V  to  +5.5V  DC source. The IC can also be powered from the converter's input supply if the input voltage is limited to between +2.4V and +5.5V.

Three different inductor current limits can be evaluated with the EV kit (125mA, 250mA, and 500mA) by changing a jumper position.

The MAX1605 EV kit demonstrates low quiescent current  (18µA ICC operating current) and high efficiency up to 88% for maximum battery life.

## Jumper Selection

## Shutdown Mode

The MAX1605 EV kit features a shutdown mode that reduces the MAX1605 shutdown current to less than 0.1µA, thus preserving battery life. The 3-pin jumper, JU1, selects the shutdown mode for the MAX1605. Table 1 lists the selectable jumper options.

Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1605 OUTPUT                                |
|------------------|------------------|-----------------------------------------------|
| 1 and 2          | Connected to VIN | MAX1605 enabled, V OUT = +18V (as configured) |
| 2 and 3          | Connected to GND | Shutdown mode, V OUT = V IN - V DIODE         |

## Inductor Current Limit

The MAX1605 EV kit features options for evaluating several different inductor current limits.

The 3-pin jumper, JU2 selects the inductor current limit for  the  MAX1605 EV kit. Table 2 lists the selectable jumper options.

## Table 2. Jumper JU2 Function

| SHUNT LOCATION   | LIM PIN          | INDUCTOR CURRENT LIMIT   |
|------------------|------------------|--------------------------|
| 1 and 2          | Connected to VCC | 500mA                    |
| 2 and 3          | Connected to GND | 125mA                    |
| None             | Floating         | 250mA                    |

## Evaluating Other Output Voltages

## Output

The MAX1605 EV kit's boost converter output (VOUT) is set to +18V by two feedback resistors (R1, R2). To generate output voltages other than +18V (+0.8V to +30V), select different voltage-divider resistors (R1, R2). Capacitor C3 must be rated for higher than VOUT. Refer to the Setting the Output Voltages section in the MAX1605 data sheet for instructions on selecting the resistors.  The  output  voltage  (VOUT)  is  determined  by the following equation:

<!-- formula-not-decoded -->

where VFB = 1.25V.

## Single-Supply Operation

## VIN and VCC

The MAX1605 EV kit can be operated from a single power supply. To evaluate the EV kit with a single supply, connect a jumper wire from the VIN pad to the VCC pad. Connect a +2.4V (min) to +5.5V (max) power supply to the VIN or VCC pad.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1605 Evaluation Kit

<!-- image -->

Figure 1. MAX1605 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1605 Evaluation Kit

<!-- image -->

Figure 2. MAX1605 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1605 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1605 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4