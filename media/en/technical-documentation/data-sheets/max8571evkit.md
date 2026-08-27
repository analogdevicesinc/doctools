<!-- lastmod 2022-08-04 -->
## General Description

The MAX8571 evaluation kit (EV kit) contains a fully assembled and tested circuit for evaluating the MAX8571 step-up converter. This circuit operates with 2.7V to 5.5V input supply and provides a regulated 18V output at up to 10mA. The output voltage is adjustable from VCC to 28V by changing resistors on the EV kit. The MAX8571 EV kit contains a second unpopulated circuit  to  accomodate a larger inductor and diode for the higher-current-limited MAX8574 and MAX8575. Either circuit can be used to evaluate any of the parts in the MAX8570 family.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105M Panasonic ECJ0EB0J105M   |
| C2            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475K Panasonic ECJ1VB0J475K |
| C3            |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1206) TDK C3216X7R1H105K                           |
| C4            |     1 | 10pF ±5%, 50V C0G ceramic capacitor (0402) Murata GRM1555C1H100J TDK C1005C0G1H100J     |
| C5            |     0 | Not installed, ceramic capacitor (1206)                                                 |
| C6, C8        |     0 | Not installed, ceramic capacitors (0402)                                                |
| C7            |     0 | Not installed, ceramic capacitor (0603)                                                 |

<!-- image -->

## Features

- ♦ 18V Output Voltage, Adjustable from VCC Up to 28V
- ♦ Built-In Safety Features Protect Against Output Faults
- ♦ True Shutdown™
- ♦ 87% Efficiency
- ♦ Up to 800kHz Switching Frequency
- ♦ 0.01µA Shutdown Current
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX8571EVKIT | 0°C to +70°C | 6 SOT23-6    |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| D1            |     1 | 200mA, 30V Schottky diode (SOD-323) Central CMDSH2-3 |
| D2            |     0 | Not installed, diode (SOD-123)                       |
| JU1           |     1 | 3-pin header                                         |
| JU3           |     0 | Not installed, 3-pin header                          |
| L1            |     1 | 22µH inductor Murata LQH32CN220K23                   |
| L2            |     0 | Not installed, inductor                              |
| R1            |     1 | 3.92M Ω ±1% resistor (0402)                          |
| R2            |     1 | 287k Ω ±1% resistor (0402)                           |
| R3, R4        |     0 | Not installed, resistors (0402)                      |
| U1            |     1 | MAX8571EUT (6-pin SOT23)                             |
| U2            |     0 | Not installed, MAX857_EUT (6-pin SOT23)              |
| None          |     1 | Shunt, 2 position                                    |
| None          |     1 | MAX8571 EV kit PC board                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX8571 Evaluation Kit

## Procedure

The MAX8571 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the power supply to between 2.7V and 5.5V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 2) Connect the positive power-supply lead to the EV kit terminal labeled VCC1.
- 3) Connect the negative power-supply lead to the EV kit terminal labeled GND1.
- 4) Connect the load and voltmeter between EV kit terminals OUT1 and GND1.
- 5) Verify that jumper JU1 is shorted across pins 1 and 2.
- 6) Turn on the power supply.
- 7) Verify that the voltmeter reads 18V.

## Detailed Description

## Enable/Shutdown

The low-power True Shutdown feature is evaluated using the jumpers provided on the EV kit (see Table 1). Short pins 1-2 of JU1 to enable circuit 1, or short pins 23 for shutdown. Short pins 1-2 of JU3 to enable circuit 2, or short pins 2-3 for shutdown.

## Setting the Output Voltage

The output voltage is adjustable from VCC to 28V by using a resistor voltage-divider (R1 and R2). For circuit 1,

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE               |
|-----------------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   |
| Kamaya                | 260-489-1533 | www.kamaya.com        |
| Murata                | 814-237-1431 | www.murata.com        |
| Panasonic             | 714-373-7939 | www.panasonic.com     |
| TDK                   | 847-803-6100 | www.component.tdk.com |
| TOKO                  | 847-297-0070 | www.toko.com          |
| Vishay                | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8571 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Power supply or battery capable of supplying 2.7V to 5.5V at up to 100mA
- Load (up to 10mA)
- Voltmeter

## Table 1. JU1 and JU3 Jumper Settings

| JU1/JU3   | FUNCTION   |
|-----------|------------|
| 1-2       | Enable     |
| 2-3       | Shutdown   |

## Table 2. JU2 and JU4 Settings

| JU2/JU4   | INPUT POWER    | TRUE SHUTDOWN   |
|-----------|----------------|-----------------|
| Short     | VCC_ only      | Yes             |
| Open      | BATT_ and VCC_ | No              |

select R2 from 10k Ω to 600k Ω and calculate R1 with the following equation:

<!-- formula-not-decoded -->

where VFB = 1.226V and VOUT can range from VCC to 28V. For best accuracy, ensure that the bias current through the feedback resistors is at least 2µA.

The output voltage for circuit 2 is set similarly, only using resistors R4 and R3. When evaluating the ICs with a preset output voltage (MAX8572/MAX8573/ MAX8575), short R1/R4 and leave R2/R3 open.

## Using a Separate Supply for the Inductor

Separate power supplies can be used for the IC and the inductor. This allows power to be drawn from a separate supply (i.e.,  a  battery)  that  may  range  above  or below the 2.7V to 5.5V operating range of VCC. When using a separate inductor supply for circuit 1, cut the trace shorting JU2 and connect the inductor supply to the EV kit pad labeled BATT1 (see Table 2). For circuit 2, cut the trace shorting JU4 and connect the inductor supply to the EV kit pad labeled BATT2. A VCC\_ supply between 2.7V and 5.5V is still needed to power the IC;

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8571 Evaluation Kit

Figure 1. MAX8571 EV Kit Schematic

<!-- image -->

however, most of the power is drawn from BATT\_. Note that in this configuration, the output is no longer disconnected from the input during shutdown. In shutdown, the output voltage goes to a diode drop below the inductor supply voltage.

## Evaluating the MAX8570/MAX8572-MAX8575

The MAX8571 EV kit can be used to evaluate the entire MAX8570 family of step-up converters. The second (right-side)  circuit  on  the  PC  board  accommodates a larger inductor and diode for use with the MAX8574 and MAX8575, which have an inductor peak current limit of 500mA and can supply higher output current.

<!-- image -->

When changing to a part with a different current limit, refer to the MAX8570-MAX8575 data sheet for information  on  selecting  external  components. When using parts  with  a  preset  output  voltage  (MAX8572/ MAX8573/MAX8575), short R1 and remove R2 (for circuit 2, short R4 and leave R3 open).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8571 Evaluation Kit

<!-- image -->

Figure 2. MAX8571 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8571 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8571 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4