<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8621Z evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8621Z dual step-down, DC-DC power-management IC for portable devices. The MAX8621Z EV kit BUCK1 and BUCK2 4MHz hysteretic step-down DC-DC converters are preset to 1.375V and 1.8V output voltages, respectively,  and each can supply 500mA output current. The OUT1 and OUT2 LDOs each supply 2.6V (default EV kit setting) at 300mA. The OUT3 and OUT4 LDOs each supply 1.8V and 3V (default EV kit setting), respectively, at 150mA. Proper power sequencing is built in to the MAX8621Y/MAX8621Z. The four LDO output voltages are pin selectable by SEL1 and SEL2 for flexibility. OUT2, OUT3, and OUT4 have individual logic-controlled shutdown. A microprocessor reset output ( RESET )  monitors VOUT1 and warns the system of impending power loss, allowing safe shutdown. RESET asserts during power-up, power-down, shutdown, and fault conditions when VOUT1 is  below its regulation voltage. An additional 200mA driver output is provided to control LED backlighting or provide an open-drain connection for resistors such as in feedback networks. The MAX8621Z EV kit operates from a 2.6V to 5.5V supply voltage. The MAX8621Z EV kit can also evaluate the MAX8621Y. To evaluate the MAX8621Y, order a free sample along with this EV kit.

| DESIGNATION     |   QTY | DESCRIPTION                                                             |
|-----------------|-------|-------------------------------------------------------------------------|
| C1              |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0805) Murata GRM219R60J106K      |
| C2, C3, C5, C10 |     4 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475KE19 |
| C4              |     1 | 0.01µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A103K        |
| C6, C8          |     2 | 150pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H151J         |

## Features

- ♦ Two 500mA Step-Down DC-DC Converters Up to 4MHz Switching Frequency Adjustable Output from 0.6V to 3.3V
- ♦ Four Low-Noise LDOs with Pin-Programmable Output Voltages
- ♦ One Open-Drain Driver
- ♦ 30ms (min) Reset Timer
- ♦ Power-On/Off Control Logic and Sequencing
- ♦ 4mm x 4mm x 0.8mm, 24-Pin Thin QFN
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE IC PACKAGE            |
|---------------|----------------------------------|
| MAX8621ZEVKIT | 0°C to +70°C 24 TQFN (4mm x 4mm) |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                             |
|------------------|-------|-------------------------------------------------------------------------|
| C7, C9, C11, C12 |     4 | 2.2µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J225KE19 |
| JU1, JU2         |     2 | 2-pin headers                                                           |
| JU3-JU7          |     5 | 3-pin headers                                                           |
| L1, L2           |     2 | 2.2µH inductor (1210), 790mA, 0.13 Ω Murata LQH32CN2R2M53               |
| R1, R3           |     2 | 150k Ω ±1% resistors (0402)                                             |
| R2               |     1 | 115k Ω ±1% resistor (0402)                                              |
| R4               |     1 | 75k Ω ±1% resistor (0402)                                               |
| U1               |     1 | MAX8621ZETG                                                             |
| -                |     7 | Shunts                                                                  |
| -                |     1 | MAX8621Z EV kit PC board                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX8621Z Evaluation Kit

## Procedure

The MAX8621Z EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Preset the variable DC power supply to 3.7V. Turn off  the  power  supply. Do not turn on the power supply until all connections are complete .
- 2) Connect the positive lead of the power supply to the IN pad on the EV kit and connect the negative lead of the power supply to the GND pad on the EV kit.
- 3) To enable the MAX8621Z, verify that jumper PWRON (JU1) has a shunt across it.
- 4) Verify that jumper EN2 (JU2) has no shunt connected to  it.  Verify  that  jumpers  EN3  (JU3), EN4 (JU4), and ENDR (JU5) have shunts connecting pins 2 and 3. Verify that jumpers SEL1 (JU7) and SEL2 (JU6) have all  pins  open (default configuration has shunts connected to pin 1 but does not shunt other pins).
- 5) Connect the positive lead of a voltmeter to the BUCK1 pad on the EV kit and connect the negative lead of the voltmeter to the GND pad on the EV kit.
- 6) Connect the positive lead of a second voltmeter to the BUCK2 pad on the EV kit and connect the negative  lead  of  the  voltmeter  to  the  GND  pad  on  the EV kit.
- 7) Connect the positive lead of a third voltmeter to the OUT1 pad on the EV kit and connect the negative lead of the voltmeter to the GND pad on the EV kit.

## Component Suppliers

| SUPPLIER   | PART                  | PHONE        | WEBSITE               |
|------------|-----------------------|--------------|-----------------------|
| Murata     | Inductors, Capacitors | 814-237-1431 | www.murata.om         |
| TDK        | Capacitors            | 888-835-6646 | www.component.tdk.com |
| Vishay     | Resistors             | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX8621Z EV Kit when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying up to 5.5V at 2A
- Four digital multimeters (DMMs)
- Ammeter (optional)
- Various loads (optional)
- 8) Connect the positive lead of a fourth voltmeter to the OUT2 pad on the EV kit and connect the negative  lead  of  the  voltmeter  to  the  GND  pad  on  the EV kit.
- 9) Turn on the power supply.
- 10) Verify that BUCK1 voltage is near 1.375V. Connect a load, if desired, from BUCK1 to GND. See Table 1 for maximum loads.
- 11) Verify that BUCK2 voltage is near 1.8V. Connect a load, if desired, from BUCK2 to GND. See Table 1 for maximum loads.
- 12) Verify  that  OUT1 voltage is near 2.6V. Connect a load, if desired, from OUT1 to GND. See Table 1 for maximum loads.
- 13) Verify  that  OUT2 voltage is near 2.6V. Connect a load, if desired, from OUT2 to GND. See Table 1 for maximum loads.
- 14) To verify OUT3 and OUT4, move the shunt on the respective jumpers to pins 1 and 2 and use a voltmeter to verify output voltage of 1.8V and 3.0V, respectively.
- 15) Connect loads from outputs OUT3 and OUT4 to GND if desired. See Table 1 for maximum load currents.

## Detailed Description

The MAX8621Z EV kit provides two step-down DC-DC converters with 500mA output current capability and four LDO outputs of 2.6V at OUT1, 2.6V at OUT2, 1.8V at OUT3, and 3V at OUT4. A 60ms (typ) reset and a 1.3 Ω , 200mA driver are also available. Table 1 lists output voltages and maximum currents. The EV kit incorporates jumpers JU2, JU3, and JU4 to enable or disable OUT2, OUT3, and OUT4, respectively. Tables 2 and 3 detail the jumper functions. The LDO output voltages-OUT1, OUT2, OUT3, and OUT4-are programmable by the logic states of SEL1 and SEL2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8621Z Evaluation Kit

Table 1. Default EV Kit Output Voltages and Maximum Currents

| OUTPUT   |   VOLTAGE (V) |   MAXIMUM CURRENT (mA) |
|----------|---------------|------------------------|
| BUCK1    |         1.375 |                    500 |
| BUCK2    |           1.8 |                    500 |
| OUT1     |           2.6 |                    300 |
| OUT2     |           2.6 |                    300 |
| OUT3     |           1.8 |                    150 |
| OUT4     |           3.0 |                    150 |

## Table 2. JU1 and JU2 Jumper Function

| LABEL (JUMPER)   | OUTPUT               | SHUNT CONNECTED   | SHUNT NOT CONNECTED   |
|------------------|----------------------|-------------------|-----------------------|
| PWRON (JU1)      | Power-On of MAX8621Z | MAX8621Z On*      | MAX8621Z Off          |
| EN2 (JU2)        | OUT2                 | OFF               | ON*                   |

* Default Position

Table 3. JU3, JU4, and JU5 Jumper Functions

| LABEL (JUMPER)   | OUTPUT   | PINS 1 AND 2   | PINS 2 AND 3       |
|------------------|----------|----------------|--------------------|
| EN3 (JU3)        | OUT3     | ON             | OFF*               |
| EN4 (JU4)        | OUT4     | ON             | OFF*               |
| ENDR (JU5)       | DR       | DR Low         | DR High Impedance* |

* Default Position

## Table 4. SEL1 (JU7) and SEL2 (JU6) Output Voltage Selection (MAX8621Z)

| SEL1 (JU7)   | SEL2 (JU6)   |   OUT1 (V) |   OUT2 (V) |   OUT3 (V) |   OUT4 (V) |
|--------------|--------------|------------|------------|------------|------------|
| IN           | IN           |        2.8 |        2.6 |        3.0 |        3.0 |
| IN           | OPEN         |        2.6 |        2.6 |        3.0 |        3.0 |
| IN           | GND          |        2.6 |        2.6 |        2.9 |        2.9 |
| OPEN         | IN           |        2.6 |        2.6 |        3.0 |        3.3 |
| OPEN*        | OPEN*        |        2.6 |        2.6 |        1.8 |        3.0 |
| OPEN         | GND          |        2.6 |        2.6 |        2.8 |        3.0 |
| GND          | IN           |        2.9 |        3.1 |        1.8 |        1.5 |
| GND          | OPEN         |        3.0 |        2.9 |        2.9 |        2.9 |
| GND          | GND          |        3.0 |        2.5 |        2.9 |        2.9 |

* Default Position

Note:

Where IN is pins 1 and 2 shunted together, GND is pins 2 and 3 shunted together, and open is with no shunt on the respective jumper.

## Programming LDO Output Voltages

As shown in Table 4, the LDO output voltages-OUT1, OUT2, OUT3, and OUT4-are pin programmable by the logic states of SEL1 and SEL2. SEL1 and SEL2 are tri-level  inputs:  IN,  open,  and  GND. The input voltage, VIN,  must be greater than the selected OUT1, OUT2, OUT3, and OUT4 voltages. The logic states of SEL1 and SEL2 are to be programmed only during power-up. Once the OUT\_ voltages are programmed, their values do  not  change  by  changing  SEL\_  unless  the MAX8621Z power is cycled.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8621Z Evaluation Kit

## Table 5. Suggested Component Values for Various Step-Down Output Voltages

|   OUTPUT VOLTAGE (V) |   R1 (k Ω ) |   R2 (k Ω ) |   C6 (pF) |
|----------------------|-------------|-------------|-----------|
|                  0.9 |         150 |         300 |       150 |
|                  1.1 |         150 |         178 |       150 |
|                  1.2 |         150 |         150 |       150 |
|                  1.3 |         150 |         130 |       150 |
|                  1.4 |         150 |         113 |       150 |
|                  1.5 |         150 |         100 |       150 |
|                  1.8 |         150 |          75 |       150 |

## LDO Output Capacitor Selection

The MAX8621Z EV kit has a 4.7µF ceramic capacitor, C5 in  Figure 1, between OUT1 and ground, and a second 4.7µF ceramic capacitor, C10 in Figure 1, between OUT2 and ground for 300mA applications. For 150mA applications, capacitor C5 and C10 can be decreased to 2.2µF ceramic capacitors. OUT3 and OUT4 have a 2.2µF ceramic capacitor connected between each respective output and ground, C11 and C12 in Figure 1. If an LDO output is not expected to exceed 50mA, then that respective output capacitor value can be reduced to 1µF.

## Evaluating Other Step-Down Output Voltages

Select an output voltage for BUCK1 between 0.6V and 3.3V by connecting FB1 to a resistor-voltage-divider between LX1 and GND. Ensure R2 (Figure 1) provides a  reasonable bias current in the resistor-divider. A wide range of resistor values is acceptable, but for ease of EV kit modification, choose R1 to be 150k Ω . Then, R2 (Figure 1) is given by:

<!-- formula-not-decoded -->

Table 5 provides suggested component values, R1, R2, and C6 in Figure 1, for various step-down output voltages.

For BUCK2, R3 and R4 are calculated using the same method.

## Reset Output ( RESET )

The reset circuit is active both at power-up and powerdown. RESET asserts low when VOUT1 drops below 87% (typ) of regulation. RESET deasserts 60ms after VOUT1 rises above 87% (typ) of regulation. RESET is pulled up through an internal 14k Ω resistor to OUT1.

## DR Driver

The MAX8621Z includes a 1.3 Ω ,  200mA n-channel MOSFET open-drain output that is controlled by ENDR. This output can be used to drive LEDs or allow adjustable output voltages. Refer to the MAX8621Z data sheet for more details.

## Evaluating the MAX8621Y

For evaluating the MAX8621Y, carefully remove the MAX8621Z and install the MAX8621Y. All other components can remain the same.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8621Z Evaluation Kit

Figure 1. MAX8621Z EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8621Z Evaluation Kit

<!-- image -->

Figure 2. MAX8621Z EV Kit Component Placement GuideComponent Side

Figure 3. MAX8621Z EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX8621Z EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600