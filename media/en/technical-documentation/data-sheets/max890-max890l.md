<!-- lastmod 2022-08-05 -->
PCMCIA Slots

Access Bus Slots

Portable Equipment

## Typical Operating Circuit

<!-- image -->

- ♦ +2.7V to +5.5V Input Range
- ♦ Programmable Current Limit
- ♦ Low Quiescent Current 10 µ A (typ) at VIN = +3.3V 0.1 µ A (typ) with Switch Off
- ♦ Thermal Shutdown
- ♦ FAULT Indicator Output
- ♦ 0.09Ω (typ) On-Resistance

## Ordering Information

| PART          | TEMP RANGE     | PIN- PACKAGE   | CURRENT LIMIT   |
|---------------|----------------|----------------|-----------------|
| MAX890LC/D    | 0°C to +70°C   | Dice**         | 1.2A            |
| MAX890LESA+   | -40°C to +85°C | 8 SO           | 1.2A            |
| MAX890LESA/V+ | -40°C to +85°C | 8 SO           | 1.2A            |

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

<!-- image -->

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## General Description

The MAX890L smart, low-voltage, P-channel, MOSFET power switch is intended for high-side load-switching applications. This switch operates with inputs from +2.7V to +5.5V, making it ideal for both +3V and +5V systems. Internal current-limiting circuitry protects the input supply against overload. Thermal-overload protection  limits  power  dissipation  and  junction  temperatures.

The MAX890L's maximum current limit is 1.2A. The current limit  through the switch is programmed with a resistor from SET to ground. The quiescent supply current  is  a  low  10µA.  When  the  switch  is  off,  the  supply current decreases to 0.1µA.

The MAX890L is available in an 8-pin SO package.

## Applications

Features

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## ABSOLUTE MAXIMUM RATINGS

| IN to GND                                                             | ................................................................-0.3V to +6V   |
|-----------------------------------------------------------------------|--------------------------------------------------------------------------------|
| ON , FAULT to GND                                                     | .................................................-0.3V to +6V                  |
| SET, OUT to GND                                                       | ...................................... -0.3V to (V IN + 0.3V)                  |
| Maximum Continuous Switch Current                                     | ..................................1.5A                                         |
| Continuous Power Dissipation (T A = +70°C) SO (derate 5.88mW/°C above | +70°C) ..........................471mW                                         |

| Operating Temperature Range MAX890LESA ....................................................-40°C to +85°C   |
|-------------------------------------------------------------------------------------------------------------|
| Storage Temperature Range ........................... -65°C to +150°C                                       |
| Lead Temperature (soldering, 10s) . ...............................+300°C                                   |
| Soldering Temperature (reflow) .......................................+260°C                                |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VIN = +3V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                               | CONDITIONS                                     |   MIN |   TYP |   MAX | UNITS   |
|-----------------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                       |                                                |   2.7 |       |   5.5 | V       |
| Quiescent Current                       | V IN = 5V, ON = GND, I OUT = 0A                |       |    13 |    20 | µA      |
| Off-Supply Current                      | ON = IN, V IN = V OUT = 5.5V                   |       |  0.03 |     1 | µA      |
| Off-Switch Current                      | ON = IN, V IN = 5.5V, V OUT = 0V               |       |  0.04 |    15 | µA      |
| Undervoltage Lockout                    | Rising edge, 1% hysteresis                     |   2.0 |   2.4 |   2.6 | V       |
| On-Resistance                           | V IN = 4.5V                                    |       |    75 |   130 | m Ω     |
| On-Resistance                           | V IN = 3.0V                                    |       |    90 |   150 | m Ω     |
| Current-Limit-Amplifier Threshold       | V SET required to turn the switch off (Note 1) | 1.178 | 1.240 | 1.302 | V       |
| Maximum Output Current Limit            |                                                |       |   1.2 |       | A       |
| I OUT to I SET Current Ratio            | I OUT = 500mA, V OUT > 1.6V                    |   970 |  1110 |  1300 | A/A     |
| ON Input Low Voltage                    | V IN = 2.7V to 5.5V                            |       |       |   0.8 | V       |
| ON Input High Voltage                   | V IN = 2.7V to 3.6V                            |   2.0 |       |       | V       |
| ON Input High Voltage                   | V IN = 4.5V to 5.5V                            |   2.4 |       |       |         |
| ON Input Leakage Current                | V ON = 5.5V                                    |       |  0.01 |     1 | µA      |
| I SET Bias Current                      | V SET = 1.24V, I OUT = 0A; V IN = V OUT        |       |   0.5 |     3 | µA      |
| FAULT Logic Output Low Voltage          | I SINK = 1mA, V SET = 1.4V                     |       |       |   0.4 | V       |
| FAULT Logic Output High Leakage Current | V FAULT = 5.5V, V SET = 1V                     |       |  0.05 |     1 | µA      |
| Slow-Current-Loop Response Time         | 20% current overdrive, V CC = 5V               |       |     5 |       | µs      |
| Fast-Current-Loop Response Time         |                                                |       |     2 |       | µs      |
| Turn-On Time                            | V IN = 5V, I OUT = 500mA                       |       |   120 |   200 | µs      |
| Turn-On Time                            | V IN = 3V, I OUT = 500mA                       |       |   185 |       | µs      |
| Turn-Off Time                           | V IN = 5V                                      |     2 |     5 |       | µs      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## ELECTRICAL CHARACTERISTICS

(VIN = +3V, TA = -40°C to +85°C, unless otherwise noted.) (Note 2)

| PARAMETER                         | CONDITIONS                                     |   MIN | TYP   |   MAX | UNITS   |
|-----------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                 |                                                |   3.0 |       |   5.5 | V       |
| Quiescent Current                 | V IN = 5V, ON = GND, I OUT = 0A                |       |       |    50 | µA      |
| Off-Supply Current                | ON = IN, V IN = V OUT = 5.5V                   |       |       |   2.2 | µA      |
| Off-Switch Current                | ON = IN, V IN = 5.5V, V OUT = 0V               |       |       |    15 | µA      |
| Undervoltage Lockout              | Rising edge, 1% hysteresis                     |   2.0 |       |   2.9 | V       |
| On-Resistance                     | V IN = 4.5V                                    |       |       |   130 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                    |       |       |   150 | m Ω     |
| Current-Limit-Amplifier Threshold | V SET required to turn the switch off (Note 1) |  1.14 |       |  1.34 | V       |
| I OUT to I SET Current Ratio      | I OUT = 500mA, V OUT > 1.6V                    |   925 |       |  1390 | A/A     |
| FAULT Logic Output Low Voltage    | I SINK = 1mA, V SET = 1.4V                     |       |       |   0.4 | V       |
| Turn-On Time                      | V IN = 5V                                      |       |       |   200 | µs      |
| Turn-Off Time                     | V IN = 5V                                      |     1 |       |    20 | µs      |

Note 1: Tested with IOUT = 100mA and VSET raised until VIN - VOUT ≥ 0.8V.

Note 2: Specifications to -40°C are guaranteed by design; not production tested.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

<!-- image -->

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## Pin Description

| PIN   | NAME   | FUNCTION                                                                                                                                                                           |
|-------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2  | IN     | Input. P-channel MOSFET source. Bypass IN with a 1 µ F capacitor to ground.                                                                                                        |
| 3     | ON     | Active-Low Switch On Input. A logic low turns the switch on.                                                                                                                       |
| 4     | GND    | Ground                                                                                                                                                                             |
| 5     | SET    | Set Current-Limit Input. A resistor from SET to ground sets the current limit for the switch. R SET = 1.38 x 10 3 /I LIMIT, where I LIMIT is the desired current limit in amperes. |
| 6, 7  | OUT    | Switch Output. P-channel MOSFET drain. Bypass OUT with a 0.1 µ F capacitor to ground.                                                                                              |
| 8     | FAULT  | Fault-Indicator Output. This open-drain output goes low when in current limit or when the die temperature exceeds +135°C.                                                          |

## Detailed Description

The MAX890L P-channel MOSFET power switch limits output current to a programmed level. When the output current is increased beyond the programmed current limit, or 1.2A (IMAX), the current also increases through the replica switch (IOUT/1110) and through RSET (Figure 1). The current-limit error amplifier compares the voltage across RSET to the internal +1.24V reference and regulates the current back to the lesser of the programmed limit (ILIMIT) or 1.2A.

This switch is not bidirectional; therefore, the input voltage must be higher than the output voltage.

## Setting the Current Limit

The MAX890L features internal current-limiting circuitry with  a  maximum programmable value (IMAX) of 1.2A. For best performance, set the current limit (ILIMIT) between 0.2 IMAX ≤ I LIMIT ≤ I MAX.  This  current  limit remains in effect throughout the input supply-voltage range.

Program the current limit with a resistor (RSET) from SET to ground (Figure 2) as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where ILIMIT is the desired current limit.

## Short-Circuit Protection

The MAX890L is a short-circuit-protected switch. In the event of an output short circuit or current-overload condition,  the  current  through  the  switch  is  limited  by  the internal  current-limiting  error  amplifier  to  1.5  x  ILIMIT. When the fault condition is removed, the replica error amplifier sets the current limit back to ILIMIT.

Figure 1.  Functional Diagram

<!-- image -->

For a high dVDS/dt during an output short-circuit condition, the switch turns off and disconnects the input supply from the output. The current-limiting amplifier then slowly turns the switch on with the output current limited to 1.5 x ILIMIT.  When the fault condition is removed, the current limit  is  set  back  to  ILIMIT.  Refer  to  the  Output Short-Circuit Fast-Loop Response and Output Overload Slow-Loop  Response  in  the  Typical  Operating Characteristics.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

Figure 2.  Setting the Current Limit

<!-- image -->

## Output Capacitor

Connect a 0.1µF capacitor from OUT to GND. One function of this  capacitor  is  to  prevent  inductive  parasitics from pulling OUT negative during turn-off.

## Layout and Thermal-Dissipation Consideration

To take full  advantage of the switch-response time to output short-circuit conditions, it is very important to keep all traces as short as possible to reduce the effect of  undesirable parasitic inductance. Place input and output capacitors as close as possible to the device (no more than 5mm).

Under normal operating conditions, the package can dissipate and channel heat away. Calculate the maximum power as follows:

## P = I 2 LIMIT x RON

where RON is the on-resistance of the switch.

When the output is short circuited, the voltage drop across the switch equals the input supply. Hence, the power dissipated across the switch increases, as does the die temperature. If the fault condition is not removed, the thermal-overload-protection circuitry turns the switch off until the die temperature falls by 10°C. A ground plane in contact with the device helps dissipate additional heat.

## Package Information

For the latest package outline information and land patterns (footprints),  go  to www.maxim-ic.com/packages .  Note  that  a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 8 SO           | S8+5           | 21-0041       | 90-0096            |

## Thermal Shutdown

The MAX890L features thermal shutdown. The switch turns off when the junction temperature exceeds +135°C. Once the device cools by 10°C, the switch turns  back on. If  the  fault  short-circuit  condition  is  not removed, the switch cycles on and off, resulting in a pulsed output.

## Fault Indicator

The MAX890L provides a fault output ( FAULT ).  This open-drain output goes low when in current limit or when the die temperature exceeds +135°C. A 100k Ω pull-up  resistor  from FAULT to  IN  provides  a  logiccontrol signal.

## Applications Information

## Input Capacitor

To limit the input voltage drop during momentary output short-circuit conditions, connect a capacitor from IN to GND. A 1µF ceramic capacitor is adequate for most applications; however, higher capacitor values further reduce the voltage drop at the input.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 1.2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

| Revision History   | Revision History   | Revision History                                                                                       | Revision History   |
|--------------------|--------------------|--------------------------------------------------------------------------------------------------------|--------------------|
| REVISION NUMBER    | REVISION DATE      | DESCRIPTION                                                                                            | PAGES CHANGED      |
| 4                  | 4/11               | Added the MAX890LESA/V+ part number to the Ordering Information , deleted the Chip Information section | 1, 7               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600