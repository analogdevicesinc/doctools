<!-- lastmod 2022-08-04 -->
<!-- image -->

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## General Description

The MAX894L/MAX895L smart, dual, low-voltage, P-channel, MOSFET power switches are intended for high-side load-switching applications. These switches operate with inputs from +2.7V to +5.5V, making them ideal for both 3V and 5V systems. Internal currentlimiting circuitry protects the input supply against overload. Thermal-overload protection limits power dissipation and junction temperature.

The MAX894L/MAX895L's maximum current limits are 500mA and 250mA, respectively. The current limit through the switches is programmed with resistors from SET A/SET B to ground. When the switches are on, the quiescent supply current is a low 16µA. When the switches are off, the supply current decreases to 0.1µA. The MAX894L/MAX895L are available in an 8-pin SO package.

<!-- image -->

## Typical Operating Circuit

<!-- image -->

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ +2.7V to +5.5V Input Range
- ♦ Programmable Current Limits
- ♦
- Low Supply Current: 16 µ A IQ at VIN = 3.3V

0.1 µ A with Switch Off

- ♦ Thermal Shutdown

## Ordering Information

| PART*       | TEMP. RANGE    | PIN- PACKAGE   | CURRENT LIMIT   |
|-------------|----------------|----------------|-----------------|
| MAX894L C/D | 0°C to +70°C   | Dice**         | 500mA           |
| MAX894LESA  | -40°C to +85°C | 8 SO           | 500mA           |
| MAX895L C/D | 0°C to +70°C   | Dice**         | 250mA           |
| MAX895LESA  | -40°C to +85°C | 8 SO           | 250mA           |

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## ABSOLUTE MAXIMUM RATINGS

IN to GND...................................................................-0.3V to 6V

ONA , ONB

to GND.....................................................-0.3V to 6V

SET A, SET B, OUT A, OUT B to GND ........-0.3V to (VIN + 0.3V)

Maximum Continuous Switch Current

MAX894L..........................................................................0.75A

MAX895L........................................................................0.375A

Continuous Power Dissipation (TA = +70°C)

SO (derate 5.88mW/°C above +70°C) .......................471mW

Operating Temperature Range

MAX89\_LESA .................................................-40°C to +85°C

Storage Temperature Range...............................-65°C to+150°C

Lead Temperature (soldering, 10sec)..............................+300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                         | CONDITION                                                       | CONDITION                                                       |   MIN |    TYP |   MAX | UNITS   |
|-----------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-------|--------|-------|---------|
| Operating                         | Voltage                                                         | Voltage                                                         |   2.7 |        |   5.5 | V       |
| Quiescent Current                 | V IN = 5V, ONA = ONB = GND, I OUT A = I OUT B = 0               | V IN = 5V, ONA = ONB = GND, I OUT A = I OUT B = 0               |       |     18 |    30 | µA      |
| Off-Supply Current                | ONA = ONB = IN, V IN = V OUT A = V OUT B = 5.5V                 | ONA = ONB = IN, V IN = V OUT A = V OUT B = 5.5V                 |       | 0.0001 |     1 | µA      |
| Off-Switch Current                | ONA = ONB = IN, V IN = 5.5V, V OUT A = V OUT B = 0              | ONA = ONB = IN, V IN = 5.5V, V OUT A = V OUT B = 0              |       |  0.002 |    10 | µA      |
| Undervoltage Lockout              | Rising edge, 1% hysteresis                                      | Rising edge, 1% hysteresis                                      |   2.0 |    2.4 |   2.6 | V       |
| On-Resistance                     | V IN = 4.5V                                                     | MAX894L                                                         |       |    120 |   225 | m Ω     |
| On-Resistance                     | V IN = 4.5V                                                     | MAX895L                                                         |       |    250 |   420 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                                     | MAX894L                                                         |       |    150 |   300 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                                     | MAX895L                                                         |       |    300 |   500 | m Ω     |
| Current-Limit-Amplifier Threshold | V SET required to turn the switch off (Note 1)                  | V SET required to turn the switch off (Note 1)                  | 1.178 |  1.240 | 1.302 | V       |
| Maximum Output Current            | MAX894L                                                         | MAX894L                                                         |       |    500 |       | mA      |
| Maximum Output Current            | MAX895L                                                         | MAX895L                                                         |       |    250 |       | mA      |
| I OUT to I SET Current Ratio      | V OUT > 1.6V                                                    | MAX894L, I OUT = 250mA                                          |   945 |   1085 |  1270 | A/A     |
| I OUT to I SET Current Ratio      | V OUT > 1.6V                                                    | MAX895L, I OUT = 125mA                                          |   910 |   1050 |  1235 | A/A     |
| ONA, ONB Input Low Voltage        | V IN = 2.7V to 5.5V                                             | V IN = 2.7V to 5.5V                                             |       |        |   0.8 | V       |
| ONA, ONB Input High Voltage       | V IN = 2.7V to 3.6V                                             | V IN = 2.7V to 3.6V                                             |   2.0 |        |       |         |
| ONA, ONB Input High Voltage       | V IN = 4.5V to 5.5V                                             | V IN = 4.5V to 5.5V                                             |   2.4 |        |       | V       |
| ONA, ONB Input Leakage            | V ONA = V ONB = 5.5V                                            | V ONA = V ONB = 5.5V                                            |       |   0.01 |     1 | µA      |
| I SETA, I SETB Bias Current       | V SET A = 1.4V, ONA = 0, ONB = V IN , I OUT A = 0, V IN = V OUT | V SET A = 1.4V, ONA = 0, ONB = V IN , I OUT A = 0, V IN = V OUT |       |    0.5 |     3 | µA      |
| I SETA, I SETB Bias Current       | V SET B = 1.4V, ONB = 0, ONA = V IN , I OUT B = 0, V IN = V OUT | V SET B = 1.4V, ONB = 0, ONA = V IN , I OUT B = 0, V IN = V OUT |       |    0.5 |     3 | µA      |
| Slow-Current-Loop Response Time   | 20% current overdrive, V CC = 5V                                | 20% current overdrive, V CC = 5V                                |       |      5 |       | µs      |
| Fast-Current-Loop Response Time   |                                                                 |                                                                 |       |      2 |       | µs      |
| Turn-On Time                      | V IN = 5V, I OUT = 250mA (MAX894L), 125mA (MAX895L)             | V IN = 5V, I OUT = 250mA (MAX894L), 125mA (MAX895L)             |       |    100 |   200 | µs      |
| Turn-On Time                      | V IN = 3V, I OUT = 250mA (MAX894L), 125mA (MAX895L)             | V IN = 3V, I OUT = 250mA (MAX894L), 125mA (MAX895L)             |       |    150 |       | µs      |
| Turn-Off Time                     |                                                                 |                                                                 |   0.8 |    1.2 |    20 | µs      |

Note 1: Tested with IOUT = 50mA for the MAX894L and 25mA for the MAX895L, and VSET raised until VIN - VOUT ≥ 0.8V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.) (Note 2)

| PARAMETER                         | CONDITION                                          | CONDITION                                          |   MIN | TYP   |   MAX | UNITS   |
|-----------------------------------|----------------------------------------------------|----------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                 |                                                    |                                                    |   3.0 |       |   5.5 | V       |
| Quiescent Current                 | V IN = 5V, ONA = ONB = GND, I OUT A = I OUT B = 0  | V IN = 5V, ONA = ONB = GND, I OUT A = I OUT B = 0  |       |       |    50 | µA      |
| Off-Supply Current                | ONA = ONB = IN, V IN = V OUT A = V OUT B = 5.5V    | ONA = ONB = IN, V IN = V OUT A = V OUT B = 5.5V    |       |       |   2.2 | µA      |
| Off-Switch Current                | ONA = ONB = IN, V IN = 5.5V, V OUT A = V OUT B = 0 | ONA = ONB = IN, V IN = 5.5V, V OUT A = V OUT B = 0 |       |       |    10 | µA      |
| Undervoltage Lockout              | Rising edge, 1% hysteresis                         | Rising edge, 1% hysteresis                         |   2.0 |       |   2.9 | V       |
| On-Resistance                     | V IN = 4.5V                                        | MAX894L                                            |       |       |   225 | m Ω     |
| On-Resistance                     | V IN = 4.5V                                        | MAX895L                                            |       |       |   420 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                        | MAX894L                                            |       |       |   300 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                        | MAX895L                                            |       |       |   500 | m Ω     |
| Current-Limit-Amplifier Threshold | V SET_ required to turn the switch off (Note 1)    | V SET_ required to turn the switch off (Note 1)    |  1.14 |       |  1.34 | V       |
| I OUT to I SET Current Ratio      | V OUT > 1.6V                                       | MAX894L, I OUT = 250mA                             |   910 |       |  1360 | A/A     |
| I OUT to I SET Current Ratio      | V OUT > 1.6V                                       | MAX895L, I OUT = 125mA                             |   880 |       |  1315 | A/A     |
| Turn-On Time                      | V IN = 5V                                          | V IN = 5V                                          |       |       |   200 | µs      |
| Turn-Off Time                     |                                                    |                                                    |  0.25 |       |    20 | µs      |

Note 2: Specifications to -40°C are guaranteed by design, not production tested.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(Typical Operating Circuit, TA = +25°C, unless otherwise noted.)

<!-- image -->

MXI

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Typical Operating Circuit, TA = +25°C, unless otherwise noted.)

## CURRENT-LIMIT RESPONSE (MAX894L, RL = 1 Ω )

<!-- image -->

CIN  = 47

µ

F, C OUT  = 0.1

µ

F

A:   V IN,  500mV/div, AC coupled

B:   I OUT,  2A/div

C:   V OUT,  5V/div

<!-- image -->

## LOAD-TRANSIENT RESPONSE (MAX894L)

<!-- image -->

## SWITCH TURN-ON TIME

<!-- image -->

VIN  = 5V,  I OUT  = I LIMIT

A: V ON , 2V/div

B: V OUT , 2V/div VIN  = 5V

<!-- image -->

A:  I OUT  = 0 to 500mA, 0.2A/div

- B:  V OUT   RIPPLE, 200mV/div, AC COUPLED

## SWITCH TURN-OFF TIME

<!-- image -->

VIN  = 5V,  I OUT  = I LIMIT

A: V ON , 2V/div

B: V OUT , 2V/div

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX894L/MAX895L

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

Figure 1.  Functional Diagram

|   PIN | NAME   | FUNCTION                                                                                                                             |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------|
|     1 | OUT A  | Switch A Output. P-channel MOSFET drain. Bypass OUT A with a 0.1 µ F capacitor to ground.                                            |
|     2 | OUT B  | Switch B Output. P-channel MOSFET drain. Bypass OUT B with a 0.1 µ F capacitor to ground.                                            |
|     3 | SET A  | Set Current-Limit Input. A resistor from SET A to ground sets the current limit for switch A. See Setting the Current Limit section. |
|     4 | ONA    | Active-Low Switch A On Input. A logic low turns switch A on.                                                                         |
|     5 | GND    | Ground                                                                                                                               |
|     6 | SET B  | Set Current-Limit Input. A resistor from SET B to ground sets the current limit for switch B. See Setting the Current Limit section. |
|     7 | IN     | Input, Switches A and B. P-channel MOSFET source. Bypass IN with a 1 µ F capacitor to ground.                                        |
|     8 | ONB    | Active-Low Switch B On Input. A logic low turns switch B on.                                                                         |

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX894L/MAX895L P-channel MOSFET power switches limit output current to a user-programmed level. When the output current is increased beyond the set current level, the current  also increases through the replica switch (IOUT/1050) (MAX895) and through RSET (Figure 1). The current-limit error amplifier compares the voltage across RSET to the internal 1.24V reference, and regulates the current back to the lesser of the programmed current limit (ILIMIT) or the maximum current limit (IMAX).

These switches are not bidirectional; therefore, the input voltage must be higher than the output voltage.

## Setting the Current Limit

The MAX894L/MAX895L feature internal current-limiting circuitry with maximum programmable values (IMAX) of 500mA, and 250mA, respectively. For best performance, set the current limit (ILIMIT) between 0.2IMAX ≤ I LIMIT ≤ I MAX. This current limit remains in effect throughout the input supply-voltage range.

Program the current limit with a resistor (RSET\_) connected from SET\_ to ground (Figure 2) as follows:

<!-- formula-not-decoded -->

where ILIMIT is the desired current limit for either switch and IRATIO is the IOUT to ISET current ratio (1085A/A for the MAX894L and 1050A/A for the MAX895L.

## Short-Circuit Protection

The MAX894L/MAX895L are short-circuit-protected switches. In the event of an output short circuit or current-overload condition, the current through either switch is limited by the internal current-limiting error amplifier to 1.5 x ILIMIT. When the fault condition is removed, the replica error amplifier sets the current limit back to ILIMIT.

For a high ∆ VDS/ ∆ t  during an output short-circuit condition, the switch turns off and disconnects the input supply from the output. The current-limiting amplifier then slowly turns the switch on with the output current limited to 1.5 x ISET. When the fault condition is removed, the current limit is set back to ILIMIT. Refer to Current-Limit Response graphs in the Typical Operating Characteristics .

## Thermal Shutdown

The MAX894L/MAX895L feature thermal shutdown. The switch turns off when the junction temperature exceeds +135°C. Once the device cools by 10°C, the switch turns back on. If the fault short-circuit condition is not removed, the switch cycles on and off, resulting in a pulsed output.

<!-- image -->

Figure 2.  Setting the Current Limit

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Input Capacitor

To limit  input  voltage  drop  during  momentary output short-circuit  conditions,  place  a  capacitor  from  IN  to GND. A 1 µ F ceramic capacitor is adequate for most applications; however, higher capacitor values further reduce voltage drop at the input.

## Output Capacitor

Connect a 0.1 µ F capacitor from OUT to GND. This capacitor prevents inductive parasitics from pulling OUT negative during turn-off.

## Layout and Thermal-Dissipation Consideration

To take full  advantage of the switch-response time to output short-circuit conditions, it is very important to keep all traces as short as possible, reducing the effect of  undesirable parasitic inductance. Place input and output capacitors as close as possible to the device (no more than 5mm).

Under normal operating conditions, the package can dissipate and channel heat away. Calculate the maximum power as follows:

<!-- formula-not-decoded -->

where R ONA and R ONB are the on-resistances of switches A and B, respectively.

When one or both outputs are short circuited, the voltage drop across the switch equals the input supply. Hence, the power dissipated across the switch increases, as does the die temperature. If the fault condition is not removed, the thermal-overload-protection circuitry turns the switch off until the die temperature falls by 10°C. A ground plane in contact with the device helps to further dissipate heat.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual, Current-Limited, High-Side P-Channel Switches with Thermal Shutdown

## Tape-and-Reel Information

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 453 SUBSTRATE CONNECTED TO GND.

## Revision History

Pages changed at Rev 1: 1, 7, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8