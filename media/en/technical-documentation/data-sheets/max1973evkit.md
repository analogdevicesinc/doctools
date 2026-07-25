<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX1973/MAX1974 evaluation kit (EV kit) is a fully assembled and tested circuit board with separate circuits to evaluate the MAX1973 and MAX1974. Both circuits have an input voltage range of 2.6V to 5.5V. The output of the MAX1973 circuit (OUT1) is a selectable preset of 2.5V or 1.8V, or can be adjusted from 1.25V to VIN by adding external feedback resistors. The output of the MAX1974 circuit (OUT2) is a selectable preset of 1.5V or 1V, or can be adjusted from 0.75V to VIN by adding external feedback resistors. Each output can deliver 1A. The MAX1973 circuit  also  features jumper-selected voltage margining, which allows the output voltage to be increased or decreased by 4%, while the MAX1974 circuit features a power-OK (POK) output that indicates when the regulator output voltage is in regulation.

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE         |
|-------------|--------------|-----------------|
| Murata      | 770-436-1300 | www.murata.com  |
| Sumida      | 847-956-0666 | www.sumida.com  |
| Taiyo Yuden | 408-573-4150 | www.t-yuden.com |

Note: Please indicate that you are using the MAX1973/MAX1974 when contacting these component suppliers.

| DESIGNATION    |   QTY | DESCRIPTION                                                       |
|----------------|-------|-------------------------------------------------------------------|
| C1, C3, C5, C7 |     4 | 4.7µF ± 10%, 6.3V X5R capacitors (0805) Taiyo Yuden JMK212BJ475KG |
| C2             |     1 | 560pF ± 5%, 50V (0603) capacitor Murata GRM39COG561J50            |
| C4, C8         |     2 | 0.1µF ± 10%, 16V X7R capacitors (0603) Taiyo Yuden EMK107BJ104KA  |
| C6             |     1 | 330pF ± 5%, 50V (0603) capacitor Murata GRM39COG331J50            |
| JU1-JU5        |     5 | 3-pin headers                                                     |
| -              |     5 | Shunts                                                            |

- ♦ Tiny 0.19in 2  Circuit Footprint
- ♦ Ultra-Low 1.8mm Circuit Height
- ♦ 4.7µF Ceramic Input and Output Capacitors
- ♦ 2.6V to 5.5V Input Voltage Range
- ♦ Up to 1A Output Current
- ♦ 1% Accurate Output Voltage
- ♦ Built-In ±4% Logic-Controlled Voltage Margining (MAX1973)
- ♦ Preset 1V, 1.5V, 1.8V, and 2.5V Outputs or 0.75V to VIN Adjustable Output
- ♦ Fixed-Frequency Current-Mode PWM Operation
- ♦ 1.4MHz Switching Frequency-Operation Outside DSL Band
- ♦ 100% Duty Cycle Dropout Capability
- ♦ Power-OK Output (MAX1974)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX1973EVKIT | -40 ° C to +85 ° C | 10 µMAX      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| L1, L2        |     2 | 3.3µH, 1.1A inductors Sumida CDRH3D16-3R3 |
| R1            |     1 | 43k Ω ± 5% resistor (0603)                |
| R2, R4        |     0 | Not installed, PC board short (0603)      |
| R3, R5        |     0 | Not installed (0603)                      |
| R6            |     1 | 43k Ω ± 5% resistor (0603)                |
| R7            |     1 | 100k Ω ± 5% resistor (0603)               |
| U1            |     1 | MAX1973EUB, 10-pin µMAX                   |
| U2            |     1 | MAX1974EUB, 10-pin µMAX                   |
| None          |     1 | MAX1973 EV kit PC board                   |
| None          |     1 | MAX1973 EV kit data sheet                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

## MAX1973/MAX1974 Evaluation Kit

## Quick Start

## MAX1973 Circuit

Follow the steps below to verify operation of the MAX1973 circuit. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  the  shunts  on  JU2  and  JU3  are  across pins 1 and 2.
- 2) Set JU1 for the desired output voltage.
- 3) Connect a voltmeter and load from OUT1 to GND1.
- 4) Preset the power supply to between 2.6V and 5.5V, and turn supply off.
- 5) Connect the power supply to IN1 and GND1.
- 6) Turn on the power supply and verify the output voltage.

## MAX1974 Circuit

Follow the steps below to verify operation of the MAX1974 circuit. Do not turn on the power supply until all connections are completed:

- 1) Verify that the shunt on JU5 is across pins 1 and 2.
- 2) Set JU4 for the desired output voltage.
- 3) Connect a voltmeter and load from OUT2 to GND2.
- 4) Preset the power supply to between 2.6V and 5.5V, and turn supply off.
- 5) Connect the power supply to IN2 and GND2.
- 6) Turn on the power supply and verify the output voltage.

## Detailed Description

## MAX1973 Circuit

## Selecting Preset Output Voltages (MAX1973)

The MAX1973 circuit is configured for preset output voltages, selected with jumper JU1 as shown in Table 1.

## Table 1. JU1 Functions

| SHUNT LOCATION   | FBSEL PIN   |   OUT1 (V) |
|------------------|-------------|------------|
| 1-2              | IN1         |        2.5 |
| 2-3              | GND1        |        1.8 |

## Adjustable Output Voltage (MAX1973)

The output voltage of the MAX1973 circuit can also be adjusted from 1.25V to VIN. To set the output voltage of the MAX1973 circuit, use the following procedure:

- 1) Cut the trace shorting the pads for R2.
- 2) Remove the jumper from JU1.
- 3) Select a resistor value for R3 from 1k Ω to 22k Ω .
- 4) Calculate the value for R2 using the equation:

<!-- formula-not-decoded -->

- 5) Install resistors R2 and R3.
- 6) Refer to the MAX1973/MAX1974 data sheet to determine the optimum value for compensation resistor R1.

## Voltage Margining and Shutdown (MAX1973)

Voltage margining and shutdown are selected using jumpers JU2 and JU3 (see Table 2).

## Table 2. JU2 and JU3 Functions

| JU2   | JU3   | CTL1 PIN   | CTL2 PIN   | OUT1     |
|-------|-------|------------|------------|----------|
| 1-2   | 1-2   | IN1        | IN1        | Nominal  |
| 2-3   | 1-2   | GND1       | IN1        | +4%      |
| 1-2   | 2-3   | IN1        | GND1       | -4%      |
| 2-3   | 2-3   | GND1       | GND1       | Shutdown |

## MAX1974 Circuit

## Selecting Preset Output Voltages (MAX1974)

The MAX1974 circuit is configured for preset output voltages, selected with jumper JU4 as shown in Table 3.

## Table 3. JU4 Functions

| SHUNT LOCATION   | FBSEL PIN   |   OUT2 (V) |
|------------------|-------------|------------|
| 1-2              | IN2         |        1.5 |
| 2-3              | GND2        |          1 |

## Adjustable Output Voltage (MAX1974)

The output voltage of the MAX1974 circuit can also be adjusted from 0.75V to VIN. To set the output voltage of the MAX1974 circuit, use the following procedure:

- 1) Cut the trace shorting the pads for R4.
- 2) Remove the jumper from JU4.
- 3) Select a resistor value for R5 from 1k Ω to 22k Ω .
- 4) Calculate the value for R4 using the equation:

<!-- formula-not-decoded -->

- 5) Install resistors R4 and R5.
- 6) Refer to the MAX1973/MAX1974 data sheet to determine the optimum value for compensation resistor R6.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 4. JU5 Functions

| SHUNT LOCATION   | EN PIN   | OUT2     |
|------------------|----------|----------|
| 1-2              | IN2      | Active   |
| 2-3              | GND2     | Shutdown |

## Shutdown (MAX1974)

JU5 is used to select shutdown mode on the MAX1974 circuit. Place jumper JU5 between pins 1 and 2 for normal operation, or place jumper JU5 between pins 2 and 3 to select shutdown mode. See Table 4.

<!-- image -->

Figure 1. MAX1973/MAX1974 EV Kit Schematic (MAX1973 Circuit)

<!-- image -->

Figure 2. MAX1973/MAX1974 EV Kit Schematic (MAX1974 Circuit)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1973/MAX1974 Evaluation Kit

## Power-OK (POK-MAX1974)

POK is an open-drain output that pulls low when the output voltage is below 90% of its nominal regulation voltage. A 100k Ω pullup resistor is connected from POK to OUT2. If a pullup resistor is not desired, cut the trace shorting jumper JU6.

## MAX1973/MAX1974 Evaluation Kit

Figure 3. MAX1973/MAX1974 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX1973/MAX1974 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1973/MAX1974 Evaluation Kit

Figure 5. MAX1973/MAX1974 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 6. MAX1973/MAX1974 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5