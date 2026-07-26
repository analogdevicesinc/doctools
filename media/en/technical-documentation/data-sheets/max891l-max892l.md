<!-- lastmod 2022-08-05 -->
<!-- image -->

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX891L/MAX892L smart, low-voltage, P-channel, MOSFET power switches are intended for high-side load-switching applications. These switches operate with inputs from 2.7V to 5.5V, making them ideal for both 3V and 5V systems. Internal current-limiting circuitry protects the input supply against overload. Thermaloverload protection limits power dissipation and junction temperatures.

The MAX891L/MAX892L's maximum current limits are 500mA and 250mA, respectively. The current limit through the switch is programmed with a resistor from SET to ground. When the switch is on, the quiescent supply current is a low 13µA. When the switch is off, the quiescent current decreases to 0.1µA.

The MAX891L/MAX892L are available in 8-pin µMAX packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

PCMCIA Slots

Access Bus Slots

Portable Equipment

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Ultra-Small µMAX Package-Only 1.11mm High
- ' 2.7V to 5.5V Input Range
- ' Programmable Current Limit
- ' Low 13µA Quiescent Current at VIN = 3.3V, 0.1µA Switch Off
- ' Thermal Shutdown
- ' FAULT Indicator Output
- ' On-Resistances:

0.12 Ω (MAX891L) 0.25 Ω (MAX892L)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE    | PIN- PACKAGE   | CURRENT LIMIT   |
|-------------|----------------|----------------|-----------------|
| MAX891L C/D | 0°C to +70°C   | Dice**         | 500mA           |
| MAX891LEUA* | -40°C to +85°C | 8 µMAX         | 500mA           |
| MAX892L C/D | 0°C to +70°C   | Dice**         | 250mA           |
| MAX892LEUA* | -40°C to +85°C | 8 µMAX         | 250mA           |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## ABSOLUTE MAXIMUM RATINGS

IN to GND  ..................................................................-0.3V to 6V

ON, FAULT

to GND.................................................... -0.3V to 6V

SET, OUT to GND........................................-0.3V to (VIN + 0.3V)

Maximum Continuous Switch Current

MAX891L ..........................................................................0.75A

MAX892L ........................................................................0.375A

Continuous Power Dissipation (TA = +70°C)

µMAX (derate 4.1mW/°C above +70°C)  .......................330mW

Operating Temperature Range

MAX891LEUA/MAX892LEUA ............................-40°C to +85°C

Storage Temperature Range ............................-65°C to +150°C

Lead Temperature (soldering, 10sec)  ........................... +300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                        | CONDITIONS                                     | CONDITIONS                                     |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------|------------------------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating                        | Voltage                                        | Voltage                                        |   2.7 |       |   5.5 | V       |
| Quiescent Current                | V IN = 5V, ON = GND, I OUT = 0mA               | V IN = 5V, ON = GND, I OUT = 0mA               |       |    13 |    20 | µA      |
| Off-Supply Current               | ON = IN, V IN = V OUT = 5.5V                   | ON = IN, V IN = V OUT = 5.5V                   |       |  0.02 |     1 | µA      |
| Off-Switch Current               | ON = IN, V IN = 5.5V, V OUT = 0V               | ON = IN, V IN = 5.5V, V OUT = 0V               |       |  0.02 |     3 | µA      |
| Undervoltage Lockout             | Rising edge, 1% hysteresis                     | Rising edge, 1% hysteresis                     |   2.0 |   2.3 |   2.6 | V       |
| On-Resistance                    |                                                | MAX891L                                        |       |   120 |   225 | m Ω     |
| On-Resistance                    |                                                | MAX892L                                        |       |   250 |   420 | m Ω     |
| On-Resistance                    |                                                | MAX891L                                        |       |   150 |   300 | m Ω     |
| On-Resistance                    |                                                | MAX892L                                        |       |   300 |   500 | m Ω     |
| Current-Limit-Amplifier Accuracy | V SET required to turn the switch off (Note 1) | V SET required to turn the switch off (Note 1) | 1.178 | 1.240 | 1.302 | V       |
| Maximum Output Current           | MAX891L                                        | MAX891L                                        |       |   500 |       | mA      |
| Maximum Output Current           | MAX892L                                        | MAX892L                                        |       |   250 |       | mA      |
| I OUT to I SET Current Ratio     | V OUT = 1.6V to 2.8V                           | MAX891L, I OUT = 250mA                         |   840 |   965 |  1130 | A/A     |
| I OUT to I SET Current Ratio     | V OUT = 1.6V to 2.8V                           | MAX892L, I OUT = 125mA                         |   840 |   965 |  1130 | A/A     |
| ON Input Low Voltage             | V IN = 2.7V to 5.5V                            | V IN = 2.7V to 5.5V                            |       |       |   0.8 | V       |
| ON Input High Voltage            | V IN = 2.7V to 3.6V                            | V IN = 2.7V to 3.6V                            |   2.0 |       |       | V       |
| ON Input High Voltage            | V IN = 4.5V to 5.5V                            | V IN = 4.5V to 5.5V                            |   2.4 |       |       | V       |
| ON Input Leakage                 | V ON = 5.5V                                    | V ON = 5.5V                                    |    -1 |  0.01 |     1 | µA      |
| I SET Bias Current               | V SET = 1.24V, I OUT = 0mA                     | V SET = 1.24V, I OUT = 0mA                     |       |   0.5 |     3 | µA      |
| FAULT Logic Output Low Voltage   | I SINK = 1mA, V SET = 1.4V                     | I SINK = 1mA, V SET = 1.4V                     |       |       |   0.4 | V       |
| FAULT Logic Output High Leakage  | V FAULT = 5.5V, V SET = 1V                     | V FAULT = 5.5V, V SET = 1V                     |       |  0.05 |     1 | µA      |
| Slow-Current-Loop Response Time  | 20% current overdrive, V IN = 5V               | 20% current overdrive, V IN = 5V               |       |     5 |       | µs      |
| Fast-Current-Loop Response Time  |                                                |                                                |       |     2 |       | µs      |
| Turn-On Time                     | I OUT = 250mA (MAX891L), or 125mA (MAX892L)    | V IN = 5V                                      |       |   100 |   200 | µs      |
| Turn-On Time                     | I OUT = 250mA (MAX891L), or 125mA (MAX892L)    | V IN = 3V                                      |       |   150 |       | µs      |
| Turn-Off Time                    | V IN = 5V                                      | V IN = 5V                                      |   0.8 |     2 |    20 | µs      |

## 2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Current-Limited, High-Side

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = -40°C to +85°C, unless otherwise noted.) (Note 2)

| PARAMETER                        | CONDITIONS                                     |                                                |   MIN | TYP   |   MAX | UNITS   |
|----------------------------------|------------------------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                | 3.0                                            | 3.0                                            |       |       |   5.5 | V       |
| Quiescent Current                | V IN = 5V, ON = GND, I OUT = 0mA               | V IN = 5V, ON = GND, I OUT = 0mA               |       |       |    50 | µA      |
| Off-Supply Current               | ON = IN, V IN = V OUT = 5.5V                   | ON = IN, V IN = V OUT = 5.5V                   |       |       |   2.2 | µA      |
| Off-Switch Current               | ON = IN, V IN = 5.5V, V OUT = 0V               | ON = IN, V IN = 5.5V, V OUT = 0V               |       |       |     8 | µA      |
| Undervoltage Lockout             | Rising edge, 1% hysteresis                     | Rising edge, 1% hysteresis                     |   2.0 |       |   2.9 | V       |
| On-Resistance                    | V IN = 4.5V                                    | MAX891L                                        |       |       |   225 | m Ω     |
| On-Resistance                    | V IN = 4.5V                                    | MAX892L                                        |       |       |   420 | m Ω     |
| On-Resistance                    | V IN = 3.0V                                    | MAX891L                                        |       |       |   300 | m Ω     |
| On-Resistance                    | V IN = 3.0V                                    | MAX892L                                        |       |       |   500 | m Ω     |
| Current-Limit-Amplifier Accuracy | V SET required to turn the switch off (Note 1) | V SET required to turn the switch off (Note 1) |  1.14 |       |  1.34 | V       |
| I OUT to I SET Current Ratio     | V OUT = 1.6V to 2.8V                           | MAX891L, I OUT = 250mA                         |   805 |       |  1210 | A/A     |
| I OUT to I SET Current Ratio     | V OUT = 1.6V to 2.8V                           | MAX892L, I OUT = 125mA                         |   805 |       |  1210 | A/A     |
| FAULT Logic Output Low Voltage   | I SINK = 1mA, V SET = 1.4V                     | I SINK = 1mA, V SET = 1.4V                     |       |       |   0.4 | V       |
| Turn-On Time                     | V IN = 5V                                      | V IN = 5V                                      |       |       |   200 | µs      |
| Turn-Off Time                    | V IN = 5V                                      | V IN = 5V                                      |  0.25 |       |    20 | µs      |

Note 1: Tested with IOUT = 50mA for the MAX891L, 25mA for the MAX892L, and VSET raised until VIN - VOUT ‡ 0.8V. Note 2: Parameters to -40°C are guaranteed by design, not production tested.

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(Typical Operating Circuit, TA = +25°C, unless otherwise noted.)

<!-- image -->

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

VIN  = 5V

A: I LOAD, 0.1A/div

B: V ON ,  5V/div

C: V OUT , 5V/div

D: V FAULT , 5V/div

<!-- image -->

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN   | NAME   | FUNCTION                                                                                                                             |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2  | IN     | Input. P-channel MOSFET source. Bypass IN with a 1µF capacitor to ground.                                                            |
| 3     | ON     | Active-Low Switch On Input. A logic low turns the switch on.                                                                         |
| 4     | GND    | Ground                                                                                                                               |
| 5     | SET    | Set Current-Limit Input. A resistor from SET to ground sets the current limit for the switch. See Setting the Current Limit section. |
| 6     | FAULT  | Fault-Indicator Output. This open-drain output goes low when in current limit or when the die temperature exceeds +135°C.            |
| 7, 8  | OUT    | Switch Output. P-channel MOSFET drain. Bypass OUT with a 0.1µF capacitor to ground.                                                  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX891L/MAX892L P-channel MOSFET power switches limit  output  current  to  a  user-programmed level.  When the output current is increased beyond the  set  current  level,  the  current  is  also  increased through the replica switch (IOUT/965) and through RSET (Figure 1). The current-limit error amplifier compares the voltage across RSET to the internal 1.24V reference and regulates the current back to the lesser of the  programmed current limit (ILIMIT) or the maximum current limit (IMAX).

These switches are not bidirectional; therefore, the input voltage must be higher than the output voltage.

## Setting the Current Limit

The MAX891L/MAX892L feature internal current-limiting circuitry with maximum programmable values (IMAX) of 500mA and 250mA, respectively. For best performance, set the current limit (ILIMIT) between 0.2IMAX ≤ I LIMIT ≤ I MAX.  This  current  limit  remains  in effect throughout the input supply-voltage range.

Program the current limit with a resistor (RSET) from SET to ground (Figure 2) as follows:

<!-- formula-not-decoded -->

RSET = 1.240 / ISET

where ILIMIT is the desired current limit, and IRATIO is the IOUT to ISET current ratio (965).

## Short-Circuit Protection

The MAX891L/MAX892L are short-circuit-protected switches. In the event of an output short circuit or current-overload condition, the current through the switch is limited by the internal current-limiting error amplifier to 1.5 x ILIMIT. When the fault condition is removed, the replica error amplifier sets the current limit back to I LIMIT.

Figure 1.  Functional Diagram

<!-- image -->

For a high D VDS/ D t  during an output short-circuit condition, the switch turns off and disconnects the input supply  from  the  output.  The  current-limiting  amplifier  then slowly turns the switch on with the output current limited to 1.5 x ILIMIT. When the fault condition is removed, the current limit is set back to ILIMIT. Refer to the CurrentLimit Response graphs in the Typical Operating Characteristics.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

Figure 2.  Setting the Current Limit

<!-- image -->

## Output Capacitor

Connect a 0.1µF capacitor from OUT to GND. One function of this  capacitor  is  to  prevent  inductive  parasitics from pulling OUT negative during turn-off.

## Layout and Thermal-Dissipation Consideration

To take full  advantage of the switch-response time to output short-circuit conditions, it is very important to keep all traces as short as possible to reduce the effect of  undesirable parasitic inductance. Place input and output capacitors as close as possible to the device (no more than 5mm).

Under normal operating conditions, the package dissipates and channels heat away. Calculate maximum power as follows:

<!-- formula-not-decoded -->

where RON is the on-resistance of the switch.

When the output is short circuited, voltage drop across the  switch  equals  the  input  supply.  Hence,  the  power dissipated across the switch increases, as does the die temperature. If the fault condition is not removed, the thermal-overload-protection circuitry turns the switch off until the die temperature falls by 10°C. A ground plane in  contact  with  the  device  helps  dissipate  additional heat.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 396 SUBSTRATE CONNECTED TO GND

## Thermal Shutdown

The MAX891L/MAX892L feature thermal shutdown. The switch turns off when the junction temperature exceeds +135°C. Once the device cools by 10°C, the switch turns  back on. If  the  fault  short-circuit  condition  is  not removed, the switch will cycle on and off, resulting in a pulsed output.

## Fault Indicator

The MAX891L/MAX892L provide a fault output ( FAULT ). This open-drain output goes low when in current limit or when the die temperature exceeds +135°C. During start-up, FAULT is low until the switch is fully on and no over-current condition exists. A 100k Ω pull-up resistor from FAULT to IN provides a logic-control signal.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Input Capacitor

To limit  input  voltage  drop  during  momentary output short-circuit conditions, connect a capacitor from IN to GND. A 1µF ceramic capacitor is adequate for most applications; however, higher capacitor values further reduce voltage drop at the input.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Tape-and-Reel Information

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

8LUMAXD.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600