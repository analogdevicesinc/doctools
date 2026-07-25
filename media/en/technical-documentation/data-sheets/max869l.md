<!-- lastmod 2022-08-03 -->
<!-- image -->

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX869L P-channel load switch features an accurate  user-set  current  limit  and  low  on-resistance.  This switch is designed to protect your power source from shorts and surges by limiting current and preventing the system supply from being pulled low. The input voltage range is 2.7V to 5.5V.

The MAX869L features a 2A, 45m Ω switch controlled by a logic signal. Current-limit accuracy is ±21%, and can be set from 400mA to 2.4A using a single resistor.

The device has a low 12µA quiescent supply current, which reduces to 2µA max in shutdown. It features thermal-shutdown protection and a logic-signal output pin ( FAULT )  that  signals  when  there  is  an  overcurrent  or overtemperature condition.

For other devices in this family, consult the Selector Guide.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Selector Guide

| PART    |   RON AT 3V (m Ω ) |   NOMINAL CURRENT (A) | COUNT   | PACKAGE   |
|---------|--------------------|-----------------------|---------|-----------|
| MAX869L |                 45 |                     2 | Single  | 16 QSOP   |
| MAX890L |                 90 |                     1 | Single  | 8 SO      |
| MAX891L |                150 |                   0.5 | Single  | 8 µMAX    |
| MAX892L |                300 |                  0.25 | Single  | 8 µMAX    |
| MAX894L |                150 |                   0.5 | Dual    | 8 SO      |
| MAX895L |                300 |                  0.25 | Dual    | 8 SO      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Universal Serial Bus (USB)

Notebook Computers

Personal Communicators

Palmtop Computers

Hand-Held Instruments

Portable Medical Instruments

Pin Configuration appears at end of data sheet.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Very Small Footprint (16-pin QSOP is the same size as an 8-pin SO)
- '
- Low Resistance: 45m Ω at 3V
- ' ±21%-Accurate, User-Set Current Limit
- ' 12µA (typ) Quiescent Current
- ' 0.01µA (typ) Shutdown Current
- ' 0.04µA (typ) Leakage to Output when Switch is Off
- ' 2.7V to 5.5V Input Range
- ' Thermal Shutdown
- ' FAULT Output

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART       | TEMP. RANGE    | PIN-PACKAGE   |
|------------|----------------|---------------|
| MAX869LC/D | 0°C to +70°C   | Dice*         |
| MAX869LEEE | -40°C to +85°C | 16 QSOP       |

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## ABSOLUTE MAXIMUM RATINGS

| IN to GND                                                        | ..................................................................-0.3V to 6V   |
|------------------------------------------------------------------|---------------------------------------------------------------------------------|
| ON , FAULT to GND                                                | ....................................................-0.3V to 6V                 |
| SET, OUT to GND                                                  | ...................................... -0.3V to (V IN + 0.3V)                   |
| Maximum Continuous Switch Current                                | .....................................3A                                         |
| Continuous Power Dissipation (T A = +70°C) QSOP (derate 8.3mW/°C | above +70°C) .......................667mW                                       |

| Operating Temperature Range                                                   |
|-------------------------------------------------------------------------------|
| MAX869LEEE.....................................................-40°C to +85°C |
| Storage Temperature Range ........................... -65°C to +150°C         |
| Lead Temperature (soldering, 10sec) .............................+300°C       |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = 0°C to +85°C, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                               | CONDITIONS                                     |   MIN |   TYP | MAX   | UNITS   |
|-----------------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                       |                                                |   2.7 |       | 5.5   | V       |
| Quiescent Current                       | V IN = 5V, ON = GND, I OUT = 0A                |       |    12 | 20    | µA      |
| Off-Supply Current                      | ON = IN, V IN = V OUT = 5.5V                   |       |  0.01 | 2     | µA      |
| Off-Switch Current                      | ON = IN, V IN = 5.5V, V OUT = 0V               |       |  0.04 | 30    | µA      |
| Undervoltage Lockout                    | Rising edge, 1% hysteresis                     |   2.0 |   2.3 | 2.6   | V       |
| On-Resistance                           | V IN = 4.75V                                   |       |    38 | 70    | m Ω     |
| On-Resistance                           | V IN = 3.0V                                    |       |    45 | 90    | m Ω     |
| Nominal Current-Limit Set Range         | R SET = 1% tolerance (Note 1)                  |  0.40 |       | 2.4   | A       |
| Current-Limit-Amplifier Threshold       | V SET required to turn the switch off (Note 2) | 1.178 | 1.240 | 1.302 | V       |
| I OUT to I SET Current Ratio            | I OUT = 1A, V OUT > 1.6V                       |   810 |   955 | 1100  | A/A     |
| ON Input Low Voltage                    | V IN = 2.7V to 5.5V                            |       |       | 0.8   | V       |
| ON Input High Voltage                   | V IN = 2.7V to 3.6V                            |   2.0 |       |       | V       |
| ON Input High Voltage                   | V IN = 4.5V to 5.5V                            |   2.4 |       |       | V       |
| ON Input Leakage                        | V ON = 5.5V                                    |       |  0.01 | ±1    | µA      |
| I SET Bias Current                      | V SET = 1.24V, I OUT = 0A                      |       |  0.05 | ±3    | µA      |
| FAULT Logic Output Low Voltage          | I SINK = 1mA, V SET = 1.4V                     |       |       | 0.4   | V       |
| FAULT Logic Output High Leakage Current | V FAULT = 5.5V, V SET = 1V                     |       |  0.05 | 1     | µA      |
| Slow-Current-Loop Response Time         | 20% current overdrive, V CC = 5V               |       |    10 |       | µs      |
| Fast-Current-Loop Response Time         |                                                |       |     4 |       | µs      |
| Turn-On Time                            | V IN = 5V, I OUT = 500mA                       |       |   100 | 300   | µs      |
| Turn-On Time                            | V IN = 3V, I OUT = 500mA                       |       |   200 |       | µs      |
| Turn-Off Time                           | V IN = 5V, I OUT = 500mA                       |     2 |    10 | 30    | µs      |

Note 1: Guaranteed by design. Derived from the ISET current ratio; current-limit amplifier and external set resistor accuracies.

Note 2: Tested with IOUT = 200mA and VSET raised until (VIN - VOUT) ‡ 0.8V.

Note 3: Specifications to -40°C are guaranteed by design, not production tested.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

## ELECTRICAL CHARACTERISTICS

(VIN = 3V, TA = -40°C to +85°C, unless otherwise noted.) (Note 3)

| PARAMETER                         | CONDITIONS                                     |   MIN | TYP   |   MAX | UNITS   |
|-----------------------------------|------------------------------------------------|-------|-------|-------|---------|
| Operating Voltage                 |                                                |   2.9 |       |   5.5 | V       |
| Quiescent Current                 | V IN = 5V, ON = GND, I OUT = 0A                |       |       |    25 | µA      |
| Off-Supply Current                | ON = IN, V IN = V OUT = 5.5V                   |       |       |   2.5 | µA      |
| Off-Switch Current                | ON = IN, V IN = 5.5V, V OUT = 0V               |       |       |    30 | µA      |
| Undervoltage Lockout              | Rising edge, 1% hysteresis                     |   2.0 |       |  2.85 | V       |
| On-Resistance                     | V IN = 4.75V                                   |       |       |    70 | m Ω     |
| On-Resistance                     | V IN = 3.0V                                    |       |       |    90 | m Ω     |
| Nominal Current-Limit Set Range   | R SET = 1% tolerance (Note 1)                  |  0.40 |       |   2.4 | A       |
| Current-Limit-Amplifier Threshold | V SET required to turn the switch off (Note 2) |  1.14 |       |  1.34 | V       |
| I OUT to I SET Current Ratio      | I OUT = 1A, V OUT > 1.6V                       |   765 |       |  1145 | A/A     |
| FAULT Logic Output Low Voltage    | I SINK = 1mA, V SET = 1V                       |       |       |   0.4 | V       |
| Turn-On Time                      | V IN = 5V, I OUT = 500mA                       |       |       |   400 | µs      |
| Turn-Off Time                     | V IN = 5V, I OUT = 500mA                       |     2 |       |    30 | µs      |

Note 1: Guaranteed by design. Derived from the ISET current ratio; current-limit amplifier and external set resistor accuracies. Note 2: Tested with IOUT = 200mA and VSET raised until (VIN - VOUT) ‡ 0.8V.

Note 3: Specifications to -40°C are guaranteed by design, not production tested.

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

*REFER TO TYPICAL OPERATING CIRCUIT

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN                 | NAME   | FUNCTION                                                                                                                                                                                 |
|---------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 4, 5, 12, 13, 16 | IN     | Input, P-channel MOSFET source. Bypass IN with a 1µF capacitor to ground.                                                                                                                |
| 2, 3, 6, 11, 14, 15 | OUT    | Switch output. P-channel MOSFET drain. Bypass OUT with a 0.1µF capacitor to GND.                                                                                                         |
| 7                   | ON     | Active-Low Switch-On Input. A logic low turns the switch on.                                                                                                                             |
| 8                   | GND    | Ground                                                                                                                                                                                   |
| 9                   | SET    | Set Current-Limit Input. A resistor from SET to ground sets the current limit for the switch. R SET = 1,184 / I LIMIT , where I LIMIT is the desired cur- rent limit in amperes.         |
| 10                  | FAULT  | Fault-Indicator Output. This open- drain output goes low when in cur- rent limit or when the die temperature exceeds +135°C. FAULT remains low for Turn-On Time + 50µs during start- up. |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX869L P-channel MOSFET power switch limits output current to a programmed level. When the output current passes through the main switch, a smaller current also passes through the replica switch (IOUT / 955) and through RSET (Figure 1). When the voltage on RSET exceeds the trip voltage of 1.24V, the current-limit error amplifier regulates the output current to the programmed current limit, ILIMIT (400mA to 2.4A).

This switch is not bidirectional; therefore, the input voltage must be higher than the output voltage.

## Setting the Current Limit

The MAX869L features internal current-limiting circuitry with  a  maximum programmable value (IMAX) of 2.4A. For best performance, set the current limit (ILIMIT) between 0.2 IMAX ≤ I LIMIT ≤ I MAX.  This  current  limit remains in effect throughout the input supply-voltage range.

Program the current limit with a resistor (RSET) from SET to ground (Figure 2) as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where ILIMIT is the desired current limit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

Figure 1.  Functional Diagram

<!-- image -->

## Short-Circuit Protection

The MAX869L is a short-circuit-protected switch. In the event of an output short circuit (VOUT ≤ 1.6V typical), the current through the switch is limited by the internal current-limiting error amplifier to 1.4 x ILIMIT. When the short-circuit condition is removed, the current-limit amplifier sets the current limit back to ILIMIT.

For a high ∆ VDS/ ∆ t  during an output short-circuit condition, the switch turns off and disconnects the input supply from the output. The current-limiting amplifier then slowly turns the switch on with the output current limited to 1.4 x ILIMIT. When the short-circuit condition is removed, the current limit is set back to ILIMIT. Refer to the Fast Current-Limit Response and Slow Current-Limit Response graphs in the Typical Operating Characteristics.

## Thermal Shutdown

The MAX869L features thermal shutdown. The switch turns off when the junction temperature exceeds 135 ° C. Once the device cools by 10°C, the switch turns back on. If  the  fault  condition  is  not  removed,  the  switch cycles on and off, resulting in a pulsed output.

<!-- image -->

## Fault Indicator

The MAX869L provides a fault output ( FAULT ).  This open-drain output goes low when in current limit or when the die temperature exceeds 135°C. A 100k Ω pull-up  resistor  from FAULT to  IN  provides  a  logiccontrol signal.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Input Capacitor

To limit the input voltage drop during momentary output short-circuit conditions, connect a capacitor from IN to GND. A 1µF ceramic capacitor is adequate for most applications; however, higher capacitor values further reduce the voltage drop at the input.

## Output Capacitor

Connect a 0.1µF capacitor from OUT to GND to prevent inductive parasitics from pulling OUT below GND during turn-off.  USB applications require COUT to  be  at least  120µF.  This  larger  output  capacitance  slows  the output rise and fall times, as shown in the Typical Operating Characteristics, but does not adversely affect the MAX869L's turn-off response time.

## Layout and Thermal-Dissipation Considerations

To take full  advantage of the switch-response time to output short-circuit conditions, it is very important to keep all traces as short as possible to reduce the effect of  undesirable parasitic inductance. Place input and output capacitors as close as possible to the device (less than 5mm).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  Setting the Current Limit

<!-- image -->

## 2A, Current-Limited, High-Side P-Channel Switch with Thermal Shutdown

Under normal operating conditions, the package can dissipate and channel heat away. Calculate the maximum power as follows:

P = I 2 LIMIT x RON

where RON is the on-resistance of the switch.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

When the output is short circuited, the voltage drop across the switch equals the input supply. Hence, the power dissipated across the switch increases, as does the die temperature. If the fault condition is not removed, the thermal-overload-protection circuitry turns the switch off until the die temperature falls by 10°C. A ground plane in contact with the device helps dissipate additional heat.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT:  433 SUBSTRATE CONNECTED TO GND

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

8

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600