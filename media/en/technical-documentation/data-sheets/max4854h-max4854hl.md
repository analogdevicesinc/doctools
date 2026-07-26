<!-- lastmod 2022-08-05 -->
<!-- image -->

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## General Description

The MAX4854H/MAX4854HL analog switches operate from a single +2V to +5.5V supply and can handle signals greater than the supply rail. These devices feature four low on-resistance (7 Ω )  single-pole/single-throw (SPST) switches, with 27.5pF on-capacitance, making them ideal for data signals. If the input signal exceeds the supply rail, the switches become high impedance and prevent the signal from feeding through to the output.

The MAX4854H/MAX4854HL are available in the space-saving (3mm x 3mm), 16-pin, thin QFN package and operate over the extended (-40°C to +85°C) temperature range.

## Applications

USB Switching

High-Bandwidth Data Switching

Cellular Phones

Notebook Computers

PDAs and Other Handheld Devices

## Block Diagram/Truth Table

<!-- image -->

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

- ♦ USB 2.0 Full Speed (12MB) and USB 1.1 Signal Switching
- ♦ Overvoltage Protection if Signal Exceeds VCC
- ♦ 150MHz -3dB Bandwidth
- ♦ 27.5pF On-Capacitance
- ♦ +2V to +5.5V Supply Range
- ♦ 7 Ω On-Resistance
- ♦ Low 10µA Supply Current
- ♦ 1.8V Logic Compatible
- ♦ Available in a Space-Saving (3mm x 3mm) 16-Pin TQFN Package

## Ordering Information

* EP = Exposed paddle.

| PART         | TEMP RANGE     | PIN- PACKAGE   | TOP MARK   |
|--------------|----------------|----------------|------------|
| MAX4854HETE  | -40°C to +85°C | 16 TQFN-EP*    | ACD        |
| MAX4854HLETE | -40°C to +85°C | 16 TQFN-EP*    | ACX        |

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## ABSOLUTE MAXIMUM RATINGS

VCC, IN\_, COM\_, NO\_, NC\_ to GND (Note 1)...........-0.3V to +6.0V

Closed Switch Continuous Current COM\_, NO\_, NC\_.........±50mA

Peak Current COM\_, NO\_, NC\_

(pulsed at 1ms, 50% duty cycle) ....................................±100mA

Peak Current COM\_, NO\_, NC\_

(pulsed at 1ms, 10% duty cycle) ....................................±120mA

Continuous Power Dissipation (TA = +70°C)

16-Pin Thin QFN (derate 20.8mW/°C above +70°C).....1667mW

Operating Temperature Range................................-40°C to +85°C

Junction Temperature...........................................................+150°C

Storage Temperature Range .................................-65°C to +150°C

Lead Temperature (soldering, 10s)......................................+300°C

Note 1: Signals on NO\_/NC\_ or COM\_ exceeding GND are clamped by internal diodes. Signals on IN exceeding GND are clamped by an internal diode. Limit the forward-diode current to the maximum current rating.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +2.7V to +5.5V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +3.0V, TA = +25°C, unless otherwise noted.) (Note 2)

| PARAMETER                                         | SYMBOL                  | CONDITIONS                                                                          |                         | MIN                     | TYP                     | MAX                     | UNITS                   |
|---------------------------------------------------|-------------------------|-------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Supply Voltage                                    | V CC                    |                                                                                     |                         | 2.0                     |                         | 5.5                     | V                       |
| Supply Current                                    | I CC                    | V CC = 5.5V, V IN_ = 0V or V CC                                                     |                         |                         | 10                      | 20                      | µA                      |
| ANALOG SWITCH                                     | ANALOG SWITCH           | ANALOG SWITCH                                                                       | ANALOG SWITCH           |                         |                         |                         |                         |
| Analog Signal Range                               | V NO_ , V COM_          |                                                                                     |                         | 0                       |                         | V CC                    | V                       |
| Analog Signal Range                               | R ON                    | V CC = 3V, I COM_ = 10mA, V NO_ or V NC_ = 0 to V CC                                | T A = +25°C             |                         | 7                       | 9                       | Ω                       |
| On-Resistance                                     | R ON                    | V CC = 3V, I COM_ = 10mA, V NO_ or V NC_ = 0 to V CC                                | T A = -40°C to +85°C    |                         |                         | 10                      | Ω                       |
| On-Resistance Match Between Channels (Notes 3, 4) | ∆ R ON                  | V CC = 3V, I COM = 10mA, or V NO_ or V NC_ = 1.5V                                   | T A = +25°C             |                         | 0.2                     | 0.4                     | Ω                       |
| On-Resistance Match Between Channels (Notes 3, 4) | ∆ R ON                  | V CC = 3V, I COM = 10mA, or V NO_ or V NC_ = 1.5V                                   | T A = -40°C to +85°C    |                         |                         | 0.5                     | Ω                       |
| On-Resistance Flatness (Note 5)                   | R FLAT                  | V CC = 3V, I COM_ = 10mA, V NO_ or V NC_ = 1V, 2V, 3V                               | T A = +25°C             |                         | 2.5                     | 3.75                    | Ω                       |
| On-Resistance Flatness (Note 5)                   | R FLAT                  | V CC = 3V, I COM_ = 10mA, V NO_ or V NC_ = 1V, 2V, 3V                               | T A = -40°C to +85°C    |                         |                         | 4                       | Ω                       |
| NO_ or NC_ Off-Leakage Current                    | I OFF                   | V CC = 5.5V, V NO_ or V NC_ =1V or 4.5V, V COM_ = 4.5V or 1V                        | T A = +25°C             | -2                      |                         | +2                      | nA                      |
| NO_ or NC_ Off-Leakage Current                    | I OFF                   | V CC = 5.5V, V NO_ or V NC_ =1V or 4.5V, V COM_ = 4.5V or 1V                        | T A = -40°C to +85°C    | -10                     |                         | +10                     | nA                      |
| COM_ On-Leakage Current                           | I ON                    | V CC = 5.5V; V NO_ or V NC_ = 1V, 4.5V, or floating; V COM_ = 1V, 4.5V, or floating | T A = +25°C             | -2                      |                         | +2                      | nA                      |
| COM_ On-Leakage Current                           | I ON                    | V CC = 5.5V; V NO_ or V NC_ = 1V, 4.5V, or floating; V COM_ = 1V, 4.5V, or floating | T A = -40°C to +85°C    | -12.5                   |                         | +12.5                   | nA                      |
| DYNAMIC CHARACTERISTICS                           | DYNAMIC CHARACTERISTICS | DYNAMIC CHARACTERISTICS                                                             | DYNAMIC CHARACTERISTICS | DYNAMIC CHARACTERISTICS | DYNAMIC CHARACTERISTICS | DYNAMIC CHARACTERISTICS | DYNAMIC CHARACTERISTICS |
| Signal Over Rail to High-Z Switching Time         |                         | V NO_ or V NC_ = V CC to (V CC + 0.5V), V (Figure 1)                                | CC < 5V                 |                         | 0.5                     | 1                       | µs                      |
| High-Z to Low-Z Switching Time                    |                         | V NO_ or V NC_ = (V CC + 0.5V) to V CC , V CC (Figure 1)                            | < 5V                    |                         | 0.5                     | 1                       | µs                      |
| Skew (Note 3)                                     | t SKEW                  | R S = 39 Ω , CL = 50pF (Figure 2)                                                   |                         |                         | 0.15                    | 1                       | ns                      |
| Propagation Delay (Note 3)                        | t PD                    | R S = 39 Ω , CL = 50pF (Figure 2)                                                   |                         |                         | 0.9                     | 2                       | ns                      |
| Turn-On Time                                      | t ON                    | V CC = 3V, V NO_ or V NC_ = 1.5V, R L = 300 Ω , CL = 50pF (Figure 1)                | T A = +25°C             |                         | 40                      | 60                      | ns                      |
| Turn-On Time                                      | t ON                    | V CC = 3V, V NO_ or V NC_ = 1.5V, R L = 300 Ω , CL = 50pF (Figure 1)                | T A = -40°C to +85°C    |                         |                         | 100                     | ns                      |
| Turn-Off Time                                     | t OFF                   | V CC = 3V, V NO_ or V NC_ = 1.5V, R L = 300 Ω , CL = 50pF (Figure 1)                | T A = +25°C             |                         | 30                      | 40                      | ns                      |
| Turn-Off Time                                     | t OFF                   | V CC = 3V, V NO_ or V NC_ = 1.5V, R L = 300 Ω , CL = 50pF (Figure 1)                | T A = -40°C to +85°C    |                         |                         | 60                      | ns                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +2.7V to +5.5V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VCC = +3.0V, TA = +25°C, unless otherwise noted.) (Note 2)

| PARAMETER                 | SYMBOL            | CONDITIONS                                                     | MIN               | TYP               | MAX               | UNITS             |
|---------------------------|-------------------|----------------------------------------------------------------|-------------------|-------------------|-------------------|-------------------|
| Charge Injection          | Q                 | V COM_ = 1.5V, R S = 0 Ω , CL = 1nF (Figure 3)                 | 8                 | 8                 | 8                 | pC                |
| Off-Isolation (Note 6)    | V ISO             | f = 100kHz, V COM_ = 1V RMS , R L = 50 Ω , CL = 5pF (Figure 4) | -80               | -80               | -80               | dB                |
| Crosstalk                 | V CT              | f = 1MHz, V COM_ = 1V RMS , R L = 50 Ω , CL = 5pF (Figure 4)   | -95               | -95               | -95               | dB                |
| -3dB Bandwidth            | BW                | Signal = 0dBm, R L = 50 Ω , CL = 5pF (Figure 4)                | 150               | 150               | 150               | MHz               |
| Total Harmonic Distortion | THD               | f = 20Hz to 20kHz, V COM_ = 1V + 2V P-P , R L = 600 Ω          | 0.04              | 0.04              | 0.04              | %                 |
| NO_ Off-Capacitance       | COFF              | f = 1MHz (Figure 5)                                            | 12                | 12                | 12                | pF                |
| COM On-Capacitance        | CON               | f = 1MHz (Figure 5)                                            | 27.5              | 27.5              | 27.5              | pF                |
| DIGITAL I/O (IN_)         | DIGITAL I/O (IN_) | DIGITAL I/O (IN_)                                              | DIGITAL I/O (IN_) | DIGITAL I/O (IN_) | DIGITAL I/O (IN_) | DIGITAL I/O (IN_) |
| Input-Logic High Voltage  | V IH              | V CC = 2V to 3.6V                                              | 1.4               | 1.4               | 1.4               | V                 |
|                           | V IH              | V CC = 3.6V to 5.5V                                            | 1.8               | 1.8               | 1.8               | V                 |
| Input-Logic Low Voltage   | V IL              | V CC = 2V to 3.6V                                              | 0.5               | 0.5               | 0.5               | V                 |
| Input-Logic Low Voltage   | V IL              | V CC = 3.6V to 5.5V                                            | 0.8               | 0.8               | 0.8               | V                 |
| Input Leakage Current     | I IN              | V IN_ = 0 or 5.5V                                              | -0.5 +0.5         | -0.5 +0.5         | -0.5 +0.5         | µA                |

Note 2: Specifications are 100% tested at TA = +85°C only, and guaranteed by design and characterization over the specified temperature range.

Note 3: Guaranteed by design and characterization; not production tested.

- Note 4: ∆ RON = RON(MAX) - RON(MIN).

Note 5: Flatness is defined as the difference between the maximum and minimum value of on-resistance as measured over the specified analog signal ranges.

Note 6: Off-Isolation = 20log10 (VCOM\_ / VNO\_), VCOM\_ = output, VNO\_ = input to off switch.

## Typical Operating Characteristics

(VCC = 3.0V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## Typical Operating Characteristics (continued)

(VCC = 3.0V, TA = +25°C, unless otherwise noted.)

<!-- image -->

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## Pin Description

| PIN         | NAME               | FUNCTION                                                                                                                                                                                            |
|-------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 5, 7, 10 | NO1, NO2, NO3, NO4 | Normally Open Terminals for Analog Switch (MAX4854H)                                                                                                                                                |
| 1, 5, 7, 10 | NC1, NC2, NC3, NC4 | Normally Closed Terminals for Analog Switch (MAX4854HL)                                                                                                                                             |
| 2, 11       | N.C.               | No Connection. Internally not connected.                                                                                                                                                            |
| 3           | IN2                | Digital Control Input for Analog Switch 2. A logic-low (MAX4854H) or logic-high (MAX4854HL) on IN2 opens switch 2 and a logic-high (MAX4854H) or logic-low (MAX4854HL) on IN2 connects COM2 to NO2. |
| 4           | COM2               | Common Terminal for Analog Switch 2                                                                                                                                                                 |
| 6           | GND                | Ground                                                                                                                                                                                              |
| 8           | COM3               | Common Terminal for Analog Switch 3                                                                                                                                                                 |
| 9           | IN3                | Digital Control Input for Analog Switch 3. A logic-low (MAX4854H) or logic-high (MAX4854HL) on IN3 opens switch 3 and a logic-high (MAX4854H) or logic-low (MAX4854HL) on IN3 connects COM3 to NO3. |
| 12          | COM4               | Common Terminal for Analog Switch 4                                                                                                                                                                 |
| 13          | IN4                | Digital Control Input for Analog Switch 4. A logic-low (MAX4854H) or logic-high (MAX4854HL) on IN4 opens switch 4 and a logic-high (MAX4854H) or logic-low (MAX4854HL) on IN4 connects COM4 to NO4. |
| 14          | V CC               | Supply Voltage. Bypass V CC to GND with a 0.01µF capacitor as close to the pin as possible.                                                                                                         |
| 15          | IN1                | Digital Control Input for Analog Switch 1. A logic-low (MAX4854H) or logic-high (MAX4854HL) on IN1 opens switch 1 and a logic-high (MAX4854H) or logic-low (MAX4854HL) on IN1 connects COM1 to NO1. |
| 16          | COM1               | Common Terminal for Analog Switch 1                                                                                                                                                                 |
| -           | EP                 | Exposed Paddle. Connect to PC board ground plane.                                                                                                                                                   |

## Detailed Description

The MAX4854H/MAX4854HL quad SPST switches have low on-resistance, operate from a +2V to +5.5V supply, and are fully specified for nominal 3.0V applications. These devices feature overvoltage protection by putting the switch into high-impedance mode when the switch input exceeds VCC.

These switches have low 27.5pF on-channel capacitance, which allows for 12Mbps switching of the data signals for USB 2.0 full speed/1.1 applications. The MAX4854H/MAX4854HL are designed to switch D+ and D- USB signals with a guaranteed skew of less than 1ns (see Figure 2) as measured from 50% of the input signal to 50% of the output signal.

## Applications Information

## Digital Control Inputs

The logic inputs (IN\_) accept up to +5.5V even if the supply voltages are below this level. For example, with a +3.3V VCC supply, IN\_ can be driven low to GND and high to +5.5V, allowing for mixing of logic levels in a system. Driving IN\_ rail-to-rail minimizes power consumption. For a +2V supply voltage, the logic thresholds are 0.5V (low) and 1.4V (high); for a +5V supply voltage, the logic thresholds are 0.8V (low) and 1.8V (high).

<!-- image -->

## Analog Signal Levels

The on-resistance of these switches changes very little for  analog  input  signals  across  the  entire  supply  voltage range (see the Typical Operating Characteristics ). The switches are bidirectional, so the NO\_ and COM\_ pins can be either inputs or outputs.

## Power-Supply Sequencing

Caution: Do not exceed the absolute maximum ratings because stresses beyond the listed ratings may cause permanent damage to the device.

Proper power-supply sequencing is recommended for all  CMOS devices. Always apply VCC before applying analog signals, especially if the analog signal is not current limited.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## Test Circuits/Timing Diagrams

Figure 1. Switching Time

<!-- image -->

Figure 2. Output Signal Skew

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

<!-- image -->

Figure 3. Charge Injection

<!-- image -->

Figure 4. On-Loss, Off-Isolation, and Crosstalk

<!-- image -->

Figure 5. Channel Off-/On-Capacitance

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

TRANSISTOR COUNT: 735 PROCESS: CMOS

## Chip Information

## Quad SPST, High-Bandwidth, Signal Line Protection Switch

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information go to www.maxim-ic.com/packages .)

12x16L QFN THIN.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600