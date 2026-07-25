<!-- lastmod 2022-08-04 -->
Notebook and SubNotebook Computers Wake-On LAN 2 to 4 Li+ Cells BatteryPowered Devices

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## General Description

The MAX1534 is a high-efficiency, triple-output power supply for keep-alive (always on) voltage rails. The 500mA buck regulator with an internal current-limited 0.5 Ω PMOS steps down the battery or wall adapter supply rail to a fixed 5V or an adjustable output voltage. Two integrated low-voltage linear regulators follow this output and provide two independent preset output voltages of 3.3V and 1.8V, or adjustable output voltages.

The buck regulator utilizes a peak current-limit, pulsefrequency modulation (PFM) architecture for highest light-load efficiency to conserve battery life. High switching frequencies (up to 200kHz) allow the use of tiny  surface-mount inductors and output capacitors. Operation to 100% duty cycle minimizes dropout voltage (250mV at 500mA).

The low-dropout linear regulators use an internal P-channel metal-oxide (PMOS) pass transistor to minimize supply current and deliver up to 160mA each of continuous current.

The MAX1534 includes a power-OK (POK) signal that indicates all outputs are in regulation. The 4% accurate threshold of the SHDN input  permits  its  use  as  a  lowbattery detector.

The MAX1534 is available in a small 16-pin thin QFN (4mm ✕ 4mm) package, occupying 33% less board space than discrete solutions.

## Applications

Hand-Held Devices Keep-Alive Supplies Standby Supplies

## Features

- ♦ One Switching and Two Linear Regulators
- ♦ Switching Regulator

+4.5V to +24V Input Voltage Range Over 95% Efficiency Up to 500mA Output Current Up to 200kHz Switching Frequency Fixed 5V or Adjustable Output Voltage Internal 0.5 Ω PMOS Switch 100% Maximum Duty Cycle for Low-Dropout Operation

- ♦ Two Low-Dropout Linear Regulators Up to 160mA Output Current (Each) 3.3V/Adj Output Voltage for OUT1 1.8V/Adj Output Voltage for OUT2
- ♦ ±1.5% Accurate Output Voltage
- ♦ ±4% Accurate Shutdown for Low Battery Detection
- ♦ Thermal Shutdown Protection
- ♦ POK Output
- ♦ 1mW Typical Standby Power

## Ordering Information

Pin Configuration appears at end of data sheet.

| PART       | TEMP RANGE     | PIN-PACKAGE             |
|------------|----------------|-------------------------|
| MAX1534ETE | -40°C to +85°C | 16 Thin QFN (4mm × 4mm) |

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## ABSOLUTE MAXIMUM RATINGS

IN, ILIM, PRESET , SHDN

to GND...........................-0.3V to +25V

FB1, FB2, FB3, LDOIN, BP to GND..........................-0.3V to +6V

OUT1, OUT2, POK to GND ...................-0.3V to (VLDOIN + 0.3V)

LX to GND.......................................................-2V to (V IN + 0.3V)

OUT1, OUT2 Short Circuit to GND.............................Continuous

Peak IN Current........................................................................2A

Maximum IN DC Current...................................................500mA

Continuous Power Dissipation (TA = +70°C)

16-Pin Thin QFN (derate 16.9mW/°C

above +70°C)............................................................1349mW

Operating Temperature Range ...........................-40°C to +85°C

Junction Temperature......................................................+150°C

Storage Temperature Range.............................-65°C to +150°C

Lead Temperature (soldering, 10s) .................................+300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 1, VIN = 12V, ILIM = GND, PRESET = GND, TA = 0°C to +85°C , unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                   | SYMBOL            | CONDITIONS                            | CONDITIONS                              | MIN               | TYP               | MAX               | UNITS             |
|---------------------------------------------|-------------------|---------------------------------------|-----------------------------------------|-------------------|-------------------|-------------------|-------------------|
| Input Voltage Range                         | V IN              |                                       |                                         | 4.5               |                   | 24                | V                 |
| Input Supply Current                        | I IN              | No load, FB3 = 5.2V, LDOIN = GND      | No load, FB3 = 5.2V, LDOIN = GND        |                   | 15                | 30                | µA                |
| Input Supply Current in Dropout             | I IN(DROP)        | No load, FB3 = V IN = 4.5V,LDOIN=GND  | No load, FB3 = V IN = 4.5V,LDOIN=GND    |                   | 60                | 110               | µA                |
| Shutdown Supply Current                     |                   | SHDN = GND                            | SHDN = GND                              |                   | 3.5               | 7                 | µA                |
| Input UVLO Threshold                        | V UVLO            | V IN rising                           | V IN rising                             | 3.6               | 4.0               | 4.4               | V                 |
| Input UVLO Threshold                        | V UVLO            | V IN falling                          | V IN falling                            | 3.5               | 3.9               | 4.3               | V                 |
| BUCK REGULATOR                              | BUCK REGULATOR    | BUCK REGULATOR                        | BUCK REGULATOR                          | BUCK REGULATOR    | BUCK REGULATOR    | BUCK REGULATOR    | BUCK REGULATOR    |
| FB3 Voltage Accuracy (Preset Mode) (Note 1) |                   | PRESET = GND                          | T A = +25°C to +85°C                    | 4.92              | 5.00              | 5.08              | V                 |
| FB3 Voltage Accuracy (Preset Mode) (Note 1) |                   | PRESET = GND                          | T A = 0°C to +85°C                      | 4.90              | 5.00              | 5.10              | V                 |
| FB3 Set Voltage (Adjustable Mode) (Note 1)  | V FB3             | PRESET = IN                           | T A = +25°C to +85°C T A = 0°C to +85°C | 0.985 0.98        | 1.00 1.00         | 1.015 1.02        | V                 |
| FB3 Bias Current                            | I FB3             | V FB3 = 5.5V                          | V FB3 = 5.5V                            |                   | 3.5               | 6.25              | µA                |
| LX Switch Minimum Off-Time                  | t OFF(MIN)        |                                       |                                         | 0.22              | 0.42              | 0.62              | µs                |
| LX Switch Minimum On-Time                   | t ON(MIN)         |                                       |                                         |                   | 0.50              |                   | µs                |
| LX Switch Maximum On-Time                   | t ON(MAX)         |                                       |                                         | 9                 | 10                | 11                | µs                |
| LX Switch On-Resistance                     | R LX              | V IN = 6V                             | V IN = 6V                               |                   | 0.5               | 1.0               | Ω                 |
| LX Switch On-Resistance                     | R LX              | V IN = 4.5V                           | V IN = 4.5V                             |                   | 0.6               | 1.2               | Ω                 |
| LX Current Limit                            | I LX(PEAK)        | ILIM = IN                             | ILIM = IN                               | 800               | 1000              | 1200              | mA                |
| LX Current Limit                            | I LX(PEAK)        | ILIM = GND                            | ILIM = GND                              | 425               | 500               | 575               | mA                |
| LX Zero-Crossing Threshold                  |                   |                                       |                                         | -75               |                   | +75               | mV                |
| LX Zero-Crossing Timeout                    |                   | LX does not rise above threshold      | LX does not rise above threshold        |                   | 30                |                   | µs                |
| LX Switch Leakage Current                   |                   | V IN = 24V, not switching             | T A = +25°C                             |                   |                   | 1                 | µA                |
| LX Switch Leakage Current                   |                   | V IN = 24V, not switching             | T A = 0°C to +85°C                      |                   |                   | 10                | µA                |
| Dropout Voltage                             | V OUT3(DROPOUT)   | I LX(DC) = 500mA                      | I LX(DC) = 500mA                        |                   | 250               |                   | mV                |
| Line Regulation                             |                   | V IN = 8V to 24V, I LX(DC) = 200mA    | V IN = 8V to 24V, I LX(DC) = 200mA      |                   | 0.1               |                   | %/V               |
| Load Regulation                             |                   | I LX(DC) = 80mA to 400mA              | I LX(DC) = 80mA to 400mA                |                   | 0.9               |                   | %                 |
| LINEAR REGULATORS                           | LINEAR REGULATORS | LINEAR REGULATORS                     | LINEAR REGULATORS                       | LINEAR REGULATORS | LINEAR REGULATORS | LINEAR REGULATORS | LINEAR REGULATORS |
| LDOIN Input Voltage                         | V LDOIN           |                                       |                                         | 2.5               |                   | 5.5               | V                 |
| LDOIN Undervoltage Lockout                  | V UVLO(LDO)       | V LDOIN rising, hysteresis = 40mV typ | V LDOIN rising, hysteresis = 40mV typ   | 2.15              |                   | 2.4               | V                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 1, VIN = 12V, ILIM = GND, PRESET = GND, TA = 0°C to +85°C , unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                  | SYMBOL             | CONDITIONS                                                | CONDITIONS                                                | MIN                | TYP                | MAX                | UNITS              |
|--------------------------------------------|--------------------|-----------------------------------------------------------|-----------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| OUT1 Voltage Accuracy (Preset Mode)        | V OUT1             | PRESET = GND                                              | I OUT1 = 100µA to 160mA                                   | 3.20               | 3.30               | 3.37               | V                  |
| OUT2 Voltage Accuracy (Preset Mode)        | V OUT2             | PRESET = GND                                              | I OUT2 = 100µA to 160mA                                   | 1.74               | 1.80               | 1.84               | V                  |
| FB1, FB2 Set Voltage (Adjustable Mode)     | V FB1 , V FB2      | PRESET = IN                                               | I OUT_ = 100µA to 160mA                                   | 0.97               | 1.00               | 1.02               | V                  |
| FB1, FB2 Bias Current                      |                    | PRESET = IN, V FB1 = V FB2 = 1.1V                         | PRESET = IN, V FB1 = V FB2 = 1.1V                         | -25                |                    | +25                | nA                 |
| OUT1, OUT2 Adjustable Output Voltage Range | V OUT1 , V OUT2    | PRESET = IN                                               | PRESET = IN                                               | 1.0                |                    | V LDOIN            | V                  |
| Maximum OUT1 Output Current                | I OUT1(MAX)        | Continuous                                                | Continuous                                                | 160                |                    |                    | mA                 |
| OUT1 Current Limit                         |                    |                                                           |                                                           | 160                |                    | 550                | mA                 |
| Maximum OUT2 Output Current                | I OUT2(MAX)        | Continuous                                                | Continuous                                                | 160                |                    |                    | mA                 |
| OUT2 Current Limit                         |                    |                                                           |                                                           | 160                |                    | 550                | mA                 |
| LDOIN Current                              |                    | I OUT1 = I OUT2 = 0, V LDOIN = 5.5V                       | I OUT1 = I OUT2 = 0, V LDOIN = 5.5V                       |                    | 165                | 265                | µA                 |
| LDO_ Dropout Voltage                       |                    | I OUT_ = 80mA (Note 2)                                    | I OUT_ = 80mA (Note 2)                                    |                    | 120                | 240                | mV                 |
| LDO_ Line Regulation                       |                    | V LDOIN = (V OUT_ + 0.4V) or +2.5V to +5.5V, I OUT_ = 1mA | V LDOIN = (V OUT_ + 0.4V) or +2.5V to +5.5V, I OUT_ = 1mA | -0.2               | 0                  | +0.2               | %/V                |
| FAULT DETECTION                            | FAULT DETECTION    | FAULT DETECTION                                           | FAULT DETECTION                                           | FAULT DETECTION    | FAULT DETECTION    | FAULT DETECTION    | FAULT DETECTION    |
| POK Threshold                              |                    | OUT1, OUT2, and FB3 rising edge, 1% hysteresis (Note 3)   | OUT1, OUT2, and FB3 rising edge, 1% hysteresis (Note 3)   | -13                | -11                | -9                 | %                  |
| POK Propagation Delay                      |                    | Falling edge, 50mV overdrive                              | Falling edge, 50mV overdrive                              |                    | 10                 |                    | µs                 |
| POK Output Low Voltage                     |                    | I SINK = 1mA                                              | I SINK = 1mA                                              |                    |                    | 0.4                | V                  |
| POK Leakage Current                        |                    | High state, forced to 5.5V                                | High state, forced to 5.5V                                |                    |                    | 1                  | µA                 |
| Thermal Shutdown Threshold                 |                    | Typical hysteresis = 15°C                                 | Typical hysteresis = 15°C                                 |                    | +160               |                    | °C                 |
| INPUTS AND OUTPUTS                         | INPUTS AND OUTPUTS | INPUTS AND OUTPUTS                                        | INPUTS AND OUTPUTS                                        | INPUTS AND OUTPUTS | INPUTS AND OUTPUTS | INPUTS AND OUTPUTS | INPUTS AND OUTPUTS |
| SHDN Input Trip Level                      |                    | Rising trip level, 100mV hysteresis                       | Rising trip level, 100mV hysteresis                       | 0.96               | 1.0                | 1.04               | V                  |
| Input Leakage Current                      |                    | V SHDN , V PRESET , V ILIM = 0 or 24V                     | V SHDN , V PRESET , V ILIM = 0 or 24V                     | -1                 |                    | +1                 | µA                 |
| PRESET , ILIM Logic Levels                 |                    | Low                                                       | Low                                                       |                    |                    | 0.5                | V                  |
|                                            |                    | High                                                      | High                                                      | 2.2                |                    |                    | V                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## ELECTRICAL CHARACTERISTICS

(Circuit of Figure 1, VIN = 12V, ILIM = GND, PRESET = GND, TA = -40°C to +85°C , unless otherwise noted.) (Note 4)

| PARAMETER                                  | SYMBOL          | CONDITIONS                                                | CONDITIONS                                                |   MIN | TYP   | MAX     | UNITS   |
|--------------------------------------------|-----------------|-----------------------------------------------------------|-----------------------------------------------------------|-------|-------|---------|---------|
| Input Voltage Range                        | V IN            | V IN                                                      | V IN                                                      |   4.5 |       | 24      | V       |
| Input Undervoltage Lockout                 | V UVLO          | V IN rising                                               | V IN rising                                               |   3.6 |       | 4.4     | V       |
| Threshold                                  |                 | V IN falling                                              | V IN falling                                              |   3.5 |       | 4.3     |         |
| BUCK REGULATOR                             |                 |                                                           |                                                           |       |       |         |         |
| FB3 Voltage Accuracy (Preset Mode)         |                 | PRESET = GND                                              | PRESET = GND                                              |  4.85 |       | 5.15    | V       |
| FB3 Set Voltage (Adjustable Mode)          | V FB3           | PRESET = IN                                               | PRESET = IN                                               |  0.97 |       | 1.03    | V       |
| LX Switch Minimum Off-Time                 | t OFF(MIN)      |                                                           |                                                           |  0.22 |       | 0.62    | µs      |
| LX Switch Maximum On-Time                  | t ON(MAX)       |                                                           |                                                           |     8 |       | 12      | µs      |
| LX Switch On-Resistance                    | R LX            | V IN = 6V                                                 | V IN = 6V                                                 |       |       | 1.0     | Ω       |
| LX Switch On-Resistance                    |                 | V IN = 4.5V                                               | V IN = 4.5V                                               |       |       | 1.2     |         |
| LX Current Limit                           | I LX(PEAK)      | ILIM = IN                                                 | ILIM = IN                                                 |   800 |       | 1200    | mA      |
| LX Current Limit                           |                 | ILIM = GND                                                | ILIM = GND                                                |   425 |       | 575     |         |
| LINEAR REGULATORS                          |                 |                                                           |                                                           |       |       |         |         |
| LDOIN Input Voltage                        | V LDOIN         |                                                           |                                                           |   2.5 |       | 5.5     | V       |
| LDOIN UVLO                                 | V UVLO(LDO)     | V LDOIN rising, hysteresis = 40mV (typ)                   | V LDOIN rising, hysteresis = 40mV (typ)                   |  2.15 |       | 2.40    | V       |
| OUT1 Voltage Accuracy (Preset Mode)        | V OUT1          | PRESET = GND                                              | I OUT1 = 100µA to 160mA                                   |  3.20 |       | 3.40    | V       |
| OUT2 Voltage Accuracy (Preset Mode)        | V OUT2          | PRESET = GND                                              | I OUT2 = 100µA to 160mA                                   |  1.74 |       | 1.86    | V       |
| FB1, FB2 Set Voltage (Adjustable Mode)     | V FB1 , V FB2   | PRESET = IN                                               | I OUT_ = 100µA to 160mA                                   |  0.97 |       | 1.03    | V       |
| OUT1, OUT2 Adjustable Output Voltage Range | V OUT1 , V OUT2 | PRESET = IN                                               | PRESET = IN                                               |   1.0 |       | V LDOIN | V       |
| Maximum OUT1 Output Current                | I OUT1(MAX)     | Continuous                                                | Continuous                                                |   160 |       |         | mA      |
| OUT1 Current Limit                         |                 |                                                           |                                                           |   160 |       | 550     | mA      |
| Maximum OUT2 Output Current                | I OUT2(MAX)     | Continuous                                                | Continuous                                                |   160 |       |         | mA      |
| OUT2 Current Limit                         |                 |                                                           |                                                           |   160 |       | 550     | mA      |
| LDO_ Dropout Voltage                       |                 | I OUT_ = 80mA (Note 2)                                    | I OUT_ = 80mA (Note 2)                                    |       |       | 250     | mV      |
| LDO_ Line Regulation                       |                 | V LDOIN = (V OUT_ + 0.4V) or +2.5V to +5.5V, I OUT_ = 1mA | V LDOIN = (V OUT_ + 0.4V) or +2.5V to +5.5V, I OUT_ = 1mA |  -0.2 |       | +0.2    | %/V     |
| FAULT DETECTION                            |                 |                                                           |                                                           |       |       |         |         |
| POK Threshold                              |                 | OUT1, OUT2, and FB3 rising edge, 1% hysteresis (Note 3)   | OUT1, OUT2, and FB3 rising edge, 1% hysteresis (Note 3)   |   -13 |       | -8      | %       |

## 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## ELECTRICAL CHARACTERISTICS (continued)

(Circuit of Figure 1, VIN = 12V, ILIM = GND, PRESET = GND, TA = -40°C to +85°C , unless otherwise noted.) (Note 4)

| PARAMETER                  | SYMBOL   | CONDITIONS                          |   MIN | TYP   |   MAX | UNITS   |
|----------------------------|----------|-------------------------------------|-------|-------|-------|---------|
| INPUTS AND OUTPUTS         |          |                                     |       |       |       |         |
| SHDN Input Trip Level      |          | Rising trip level, 100mV hysteresis |  0.96 |       |  1.04 | V       |
| PRESET , ILIM Logic Levels |          | Low                                 |       |       |   0.5 | V       |
| PRESET , ILIM Logic Levels |          | High                                |   2.2 |       |       | V       |

Note 1: The output voltage at light loads has a DC regulation level higher than the error comparator threshold by half the ripple voltage.

Note 2: The dropout voltage is defined as VLDOIN - VOUT\_ when VLDOIN = VOUT\_(NOM). Specification only applies when VOUT\_ ≥ 2.5V.

Note 3: OUT1, OUT2 DC set point, FB3 set point at the DC trip threshold of buck regulator.

Note 4: Specifications to -40°C are guaranteed by design, not production tested.

## Typical Operating Characteristics

(Circuit of Figure 1, VIN = +12V, PRESET = GND, TA = +25°C, unless otherwise noted.)

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## Typical Operating Characteristics (continued)

(Circuit of Figure 1, VIN = +12V, PRESET = GND, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## Typical Operating Characteristics (continued)

(Circuit of Figure 1, VIN = +12V, PRESET = GND, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## Pin Description

| PIN   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                  |
|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | SHDN   | Shutdown Control Input. Drive SHDN above 1V to start up, and below 0.9V to shut down. LX is high impedance in shut down, and supply current reduces to 3.5µA. Connect SHDN to IN for automatic startup. SHDN can be connected to IN through a resistive voltage-divider to implement a programmable undervoltage lockout. |
| 2     | POK    | Open-Drain Power-OK (POK) Output. POK asserts low while any output voltage is below the reset threshold. Connect a 100k Ω pullup resistor to OUT_. POK is driven low in shut down. If not used, leave this pin unconnected.                                                                                               |
| 3     | GND    | Ground. Connect backside pad to GND.                                                                                                                                                                                                                                                                                      |
| 4     | ILIM   | Peak LX Current Control Input. Connect to IN for 1000mA peak LX current. Connect to GND for 500mA peak LX current.                                                                                                                                                                                                        |
| 5, 8  | LX     | Inductor Connection. Connect LX to external inductor and diode as shown in Figure 1. Both LX pins must be connected together on the PC board.                                                                                                                                                                             |
| 6, 7  | IN     | Buck Regulator Input Supply Voltage. Input voltage range is 4.5V to 24V. Both IN pins must be connected together on the PC board.                                                                                                                                                                                         |
| 9     | OUT2   | Regulated LDO2 Output Voltage. Sources up to 160mA guaranteed. Bypass with 2.2µF (<0.2 Ω typical ESR) ceramic capacitor to GND.                                                                                                                                                                                           |
| 10    | LDOIN  | Input Supply for both LDOs. Supply voltage can range from 2.5V to 5.5V. Bypass with 2.2µF capacitor to GND (see Capacitor Selection and LDO Stability ).                                                                                                                                                                  |
| 11    | OUT1   | Regulated LDO1 Output Voltage. Sources up to 160mA guaranteed. Bypass with 2.2µF (<0.2 Ω typical ESR) ceramic capacitor to GND.                                                                                                                                                                                           |
| 12    | BP     | LDO Reference Noise Bypass. Bypass with a low-leakage 0.01µF ceramic capacitor for reduced noise at both outputs.                                                                                                                                                                                                         |
| 13    | FB1    | Feedback Input for LDO1. For a fixed 3.3V output, connect PRESET and FB1 to GND. For an adjustable output, connect PRESET = IN and connect a resistive divider between OUT1 and GND.                                                                                                                                      |
| 14    | FB2    | Feedback Input for LDO2. For a fixed 1.8V output, connect PRESET and FB2 to GND. For an adjustable output, connect PRESET = IN and connect a resistive divider between OUT2 and GND.                                                                                                                                      |
| 15    | PRESET | Preset Feedback Select Input. Connect to GND for the preset 5V buck output voltage, preset 3.3V OUT1 output voltage, and preset 1.8V OUT2 output voltage. Connect PRESET to IN to select adjustable feedback mode for all three regulators.                                                                               |
| 16    | FB3    | Buck Output Feedback Input. For a fixed 5.0V output, connect PRESET toGND and FB3 to OUT3. For an adjustable output, connect PRESET to IN and connect a resistive divider between OUT3 and GND.                                                                                                                           |

## Detailed Description

The MAX1534 regulator provides efficient light-load power conversion for notebook computers or hand-held devices that require keep-alive power or standby power. The main step-down buck regulator uses a unique peak current-limited control scheme, providing high efficiency at light loads over a wide load range. Operation up to 100% duty cycle allows the lowest possible dropout voltage, increasing the usable supply voltage range. Under no load, the MAX1534 consumes only 1mW, and in shutdown mode, it draws only 3.5µA. The internal 24V switching MOSFET, internal current sensing, and a high-switching frequency minimize PC board space and component costs.

The MAX1534 includes two low-noise, low-dropout, low-quiescent-current linear regulators. The linear regulators are available with preset output voltages of 3.3V and 1.8V. Each linear regulator can supply loads up to 160mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

Figure 1. MAX1534 Typical Application Circuit

<!-- image -->

The MAX1534 PFM step-down topology consumes less power than the traditional linear regulator solution when converting from a high-input voltage source.

## Buck Converter

## Current-Limited Control Architecture

The MAX1534's buck converter uses a proprietary current-limited control scheme with operation to 100% duty cycle. This DC-to-DC converter pulses as needed to maintain regulation, resulting in a variable switching frequency that increases with the load. This eliminates the high supply currents associated with conventional constant-frequency pulse-width-modulation (PWM) controllers that switch the MOSFET unnecessarily.

When the output voltage is too low, the error comparator sets a flip-flop, which turns on the internal P-channel MOSFET and begins a switching cycle (Figure 2). As shown in Figure 3, the inductor current ramps up linearly, storing energy in a magnetic field while charging the output capacitor and servicing the load. The MOSFET turns off  when the peak current limit is reached, or when the maximum on-time of 10µs is exceeded and the output voltage is in regulation. If the output is out of regulation and the peak current is never reached, the MOSFET remains on, allowing a duty cycle up to 100%. This feature ensures the lowest possible dropout voltage. Once the MOSFET turns off, the flip-flop resets, the inductor current is pulled through D1, and the current through the inductor ramps back down, transferring the stored energy to the output capacitor and load. The MOSFET remains off until the 0.42µs minimum off-time expires, and the output voltage drops out of regulation.

<!-- image -->

## Current Limit (ILIM)

The MAX1534's buck converter has an adjustable peak current limit.  Configure  this  peak  current  limit  by  connecting ILIM as shown in Table 3. Choose a current limit that realistically reflects the maximum load current. The maximum output current is half the peak current limit.  Although  choosing a lower current limit allows using an inductor with a lower current rating, it requires a higher inductance (see Inductor Selection ) and does little to reduce inductor package size.

ILIM can be dynamically switched to achieve the highest efficiency over the load range. (See Buck Efficiency vs.  Load Current (Circuit 1) in the Typical Operating Characteristics .

## Linear Regulators

## Internal P-Channel Pass Transistor

The MAX1534 features two 1.5 Ω P-channel MOSFET pass transistors. A P-channel MOSFET provides several  advantages over similar designs using PNP pass transistors,  including  longer  battery  life.  It  requires  no

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

Table 1. Recommended Components

|                 | CIRCUIT 1                                | CIRCUIT 1                                | CIRCUIT 2                                 | CIRCUIT 2                                 |
|-----------------|------------------------------------------|------------------------------------------|-------------------------------------------|-------------------------------------------|
| Input voltage   | 7V                                       | 24V                                      | 7V                                        | 24V                                       |
| Max frequency   | 73kHz                                    | 175kHz                                   | 71kHz                                     | 160kHz                                    |
| On-time         | 8.8µs                                    | 1µs                                      | 9µs                                       | 1µs                                       |
| Buck output     | 5V, 500mA                                | 5V, 500mA                                | 5V, 250mA                                 | 5V, 250mA                                 |
| ILIM connection | IN                                       | IN                                       | GND                                       | GND                                       |
| L1              | 15µH, 57m Ω , 1.60A Sumida CDRH6D38R-150 | 15µH, 57m Ω , 1.60A Sumida CDRH6D38R-150 | 33µH, 124m Ω , 1.10A Sumida CDRH6D38R-330 | 33µH, 124m Ω , 1.10A Sumida CDRH6D38R-330 |
| D1              | 1A, 30V Schottky Nihon EP10QY03          | 1A, 30V Schottky Nihon EP10QY03          | 0.5A, 30V Schottky Nihon EP05Q03L         | 0.5A, 30V Schottky Nihon EP05Q03L         |
| COUT3           | 47µF, 6.3V, ceramic TDK C3225X5R0J476M   | 47µF, 6.3V, ceramic TDK C3225X5R0J476M   | 33µF, 6.3V, ceramic TDK C3225X5R0J336M    | 33µF, 6.3V, ceramic TDK C3225X5R0J336M    |

Table 2. Component Suppliers

| SUPPLIER                | WEBSITE                |
|-------------------------|------------------------|
| DIODES                  |                        |
| Central Semiconductor   | www.centralsemi.com    |
| Fairchild Semiconductor | www.fairchildsemi.com  |
| General Semiconductor   | www.gensemi.com        |
| International Rectifier | www.irf.com            |
| Nihon                   | www.niec.co.jp         |
| ON Semiconductor        | www.onsemi.com         |
| Vishay-Siliconix        | www.vishay.com         |
| Zetex                   | www.zetex.com          |
| CAPACITORS              |                        |
| AVX                     | www.avxcorp.com        |
| Kemet                   | www.kemet.com          |
| Nichicon                | www.nichicon-us.com    |
| Sanyo                   | www.sanyo.com          |
| TDK                     | www.components.tdk.com |
| Taiyo Yuden             | www.t-yuden.com        |
| INDUCTORS               |                        |
| Coilcraft               | www.coilcraft.com      |
| Coiltronics             | www.cooperet.com       |
| Pulse Engineering       | www.pulseeng.com       |
| Sumida USA              | www.sumida.com         |
| Toko                    | www.tokoam.com         |

base drive, which reduces quiescent current significantly.  PNP-based regulators waste considerable current in dropout when the pass transistor saturates, and they also use high base-drive currents under large

## Table 3. Current-Limit Configuration

| ILIM   |   PEAK LX CURRENT LIMIT (mA) |   MAXIMUM BUCK OUTPUT CURRENT (mA) |
|--------|------------------------------|------------------------------------|
| IN     |                         1000 |                                500 |
| GND    |                          500 |                                250 |

loads. The MAX1534 does not suffer from these problems. While a PNP-based regulator has dropout voltage that is independent of the load, a P-channel MOSFET's dropout voltage is proportional to load current, providi ng  for  low  dropout voltage at heavy loads and extremely low dropout voltage at lighter loads.

## Current Limit

The MAX1534 contain two independent current limiters, one for each linear regulator, which monitor and control the  pass transistor's  gate  voltage,  limiting  the  guaranteed maximum output current to 160mA minimum. The output can be shorted to ground for an indefinite time without damaging the part.

## Low-Noise Operation

An external 0.01µF bypass capacitor at BP, in conjunction  with  an  internal  resistor,  creates  a  lowpass  filter, reducing the LDO output voltage noise.

## Shutdown ( SHDN )

The MAX1534's accurate SHDN input can be used as a low-battery voltage detector. Drive SHDN above the 1V input rising-edge trip level to start up the MAX1534. The 100mV SHDN i nput  hysteresis prevents the MAX1534 from oscillating between startup and shutdown. Drive SHDN low to shut down the MAX1534's buck converter and linear regulators. When in shut-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

Figure 2. MAX1534 Functional Block Diagram

<!-- image -->

down, the supply current drops to 3.5µA, maximizing battery life. The internal P-channel MOSFET in the buck converter and linear regulators turn off to isolate each input from its output. The output capacitance and load current determine the rate at which the output voltage decays. For automatic shutdown and startup, connect SHDN to  IN.  Connect SHDN to  IN  through  a  resistive voltage-divider to implement a programmable undervoltage lockout. Do not leave SHDN floating.

## Power-OK (POK)

The open-drain POK output is useful as a simple error flag, as well as a delayed reset output. POK sinks current when any of the three regulated output voltages is 11% below its regulation point. Connect POK to OUT\_ through a high-value resistor for a simple error flag indi- cator.  Connect a capacitor from POK to GND to produce a delayed POK signal (delay set by the RC time constant). POK is low in shutdown and is high impedance when all three outputs are in regulation.

<!-- image -->

## Thermal-Overload Protection

Thermal-overload protection limits total power dissipation in the MAX1534. When the junction temperature exceeds TJ = +160°C, a thermal sensor turns off the pass transistor, allowing the IC to cool. The thermal sensor turns the IC on again after the IC's junction temperature cools by 15°C, resulting in a pulsed output during continuous thermal-overload conditions.

Thermal-overload protection is designed to protect the MAX1534 in the event of fault conditions. For continu-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

ous operation, do not exceed the absolute maximum junction temperature rating of TJ = +150°C.

Operating Region and Power Dissipation The MAX1534's maximum power dissipation depends on the thermal resistance of the case and circuit board, the temperature difference between the die junction and ambient air, and the rate of air flow. The power dissipated in the device is the sum of the buck MOSFET switching and conduction losses and the linear regulators'  conduction losses. The maximum power dissipation is:

<!-- formula-not-decoded -->

where TJ - TA is the temperature difference between the MAX1534 die junction and the surrounding air, θ JB (or θ JC) is the thermal resistance of the package, and θ BA is the thermal resistance through the printed circuit board, copper traces, and other materials to the surrounding air.  The  exposed backside pad of the MAX1534 provides a low thermal impedance to channel heat out of the package. Connect the exposed backside pad to ground using a large pad or ground plane.

## Preset and Adjustable Output Voltages ( PRESET )

The MAX1534 features dual mode operation; it operates in either a preset voltage mode (see Table 4) or an adjustable mode. In preset voltage mode, internal trimmed feedback resistors set the MAX1534 outputs to 3.3V for VOUT1, 1.8V for VOUT2, and 5.0V for FB3 (buck regulator). Select this mode by connecting PRESET to ground.  Connect PRESET to  IN  to  operate  the MAX1534 in the adjustable mode. Select an output voltage using two external resistors connected as a voltage-divider to FB\_ (Figure 4). The output voltage is set by the following equation:

<!-- formula-not-decoded -->

where VFB\_ = 1.0V, VOUT1 and VOUT2 can range from 1.0V to VLDOIN, and VOUT3 can range from 1.0V to VIN. To simplify resistor selection:

<!-- formula-not-decoded -->

Choose RBOT\_ = 100k Ω to  optimize  power consumption, accuracy, and high-frequency power-supply rejection.  The  total  current  through  the  external  resistive feedback and load resistors should not be less than 10µA. Since the VFB\_ tolerance is typically less than

## Table 4. PRESET Setting

| PRESET   | MODE       | OUT_ AND FB_                                                      |
|----------|------------|-------------------------------------------------------------------|
| IN       | Adjustable | FB_ regulates to 1.0V                                             |
| GND      | Preset     | OUT1 = 3.3V, FB1 = GND, OUT2 = 1.8V, FB2 = GND, OUT3 = FB3 = 5.0V |

±15mV, the output can be set using fixed resistors instead of trim pots.

## Design Procedure

## Buck Converter

## Inductor Selection

When selecting the inductor, consider these four parameters: inductance value, saturation rating, series resistance, and size. The MAX1534 operates with a wide range of inductance values. For most applications,  values  between 10µH and 50µH work best with the controller's high switching frequency. Larger inductor values reduce the switching frequency and thereby improve efficiency and EMI. The trade-off for improved efficiency is a higher output ripple and slower transient response. On the other hand, low-value inductors respond faster to transients, improve output ripple, offer smaller physical size, and minimize cost. If the inductor value is too small, the peak inductor current exceeds the current limit due to current-sense comparator propagation delay, potentially exceeding the inductor's current rating. Calculate the minimum inductance value as follows:

<!-- formula-not-decoded -->

where tON(MIN) = 0.5µs.

The inductor's saturation current rating must be greater than the peak switch current limit, plus the overshoot due to the 150ns current-sense comparator propagation delay. Saturation occurs when the inductor's magnetic flux density reaches the maximum level the core can support and the inductance starts to fall. Choose an inductor with a saturation rating greater than IPEAK in the following equation:

<!-- formula-not-decoded -->

Inductor series resistance affects both efficiency and dropout voltage (see the Buck Dropout Performance section).

High series resistance limits the maximum current available at lower input voltages, and increases the dropout

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

Figure 3. Normal Buck Operation

<!-- image -->

voltage. For optimum performance, select an inductor with  the  lowest  possible  DC  resistance  that  fits  in  the allotted  dimensions. Some recommended component manufacturers are listed in Table 2.

## Maximum Buck Output Current

The MAX1534's buck converter's maximum output current is limited by the peak inductor current. For the typical  application,  the  maximum  output  current  is approximately:

<!-- formula-not-decoded -->

For low-input voltages, the maximum on-time can be reached and the load current is limited by:

<!-- formula-not-decoded -->

Note that any current provided by the linear regulators comes from the buck regulator and subtracts from the maximum current that the buck provides for other loads.

## Buck Output Capacitor Selection

Choose the output capacitor to service the maximum load current with acceptable voltage ripple. The output ripple has two components: variations in the charge stored in the output capacitor with each LX pulse, and the voltage drop across the capacitor's equivalent series resistance (ESR) caused by the current into and out of the capacitor:

<!-- formula-not-decoded -->

The output voltage ripple as a consequence of the ESR and output capacitance is:

<!-- formula-not-decoded -->

<!-- image -->

Figure 4. Adjustable Output Voltages

<!-- image -->

<!-- formula-not-decoded -->

where IPEAK is the peak inductor current (see Inductor Selection ).  The  worst-case ripple occurs at no load. These equations are suitable for initial capacitor selection,  but  final  values  should  be set by testing a prototype or evaluation circuit. As a general rule, a smaller amount of charge delivered in each pulse results in less output ripple. Since the amount of charge delivered in each oscillator pulse is determined by the inductor value and input voltage, the voltage ripple increases with larger inductance, and as the input voltage decreases. See Table 1 for recommended capacitor  values  and  Table  2  for  recommended component manufacturers.

## Buck Input Capacitor Selection

The input filter capacitor reduces peak currents drawn from the power source and reduces noise and voltage ripple  on  the  input  caused  by  the  circuit's  switching. The input capacitor must meet the ripple-current requirement (IRMS) imposed by the switching current defined by the following equation:

<!-- formula-not-decoded -->

For most applications, nontantalum chemistries (ceramic, aluminum, polymer, or OSCON) are preferred due to their  robustness to high inrush currents typical of systems with low-impedance battery inputs. Choose an

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

input capacitor that exhibits less than +10°C temperature  rise  at  the  RMS  input  current  for  optimal  circuit longevity.

## Diode Selection

The current in the external diode (D1 in Figure 1) changes abruptly from zero to its peak value each time the LX switch turns off. To avoid excessive losses, the diode must have a fast turn-on time and a low forward voltage. Make sure that the diode's peak current rating exceeds the peak current set by the current limit, and that its breakdown voltage exceeds VIN. Use Schottky diodes when possible.

## Linear Regulators

## Capacitor Selection and LDO Stability

Use a 2.2µF capacitor on the MAX1534 LDOIN pin and a 2.2µF capacitor on the outputs. Larger input capacitor values and lower ESRs provide better supply-noise rejection and line-transient response. To reduce noise, improve load transients, and for loads up to 160mA, use larger output capacitors (up to 10µF). For stable operation over the full temperature range and with load currents up to 80mA, use 2.2µF. Note that some ceramic dielectrics exhibit large capacitance and ESR variation with temperature. With dielectrics such as Z5U and Y5V, it may be necessary to use 4.7µF or more to ensure stability at temperatures below -10°C. With X7R or  X5R dielectrics, 2.2µF is sufficient at all operating temperatures. These regulators are optimized for ceramic capacitors, and tantalum capacitors are not recommended.

Use a 0.01µF bypass capacitor at BP for low output voltage noise. Increasing the capacitance slightly decreases the output noise, but increases the startup time.

## Applications Information

## Buck Dropout Performance

A step-down converter's minimum input-to-output voltage differential (dropout voltage) determines the lowest usable supply voltage. In battery-powered systems, this limits the useful end-of-life battery voltage. To maximize battery life, the MAX1534 operates with duty cycles up to 100%, which minimizes the dropout voltage and eliminates switching losses while in dropout. When the supply voltage approaches the output voltage, the P-channel MOSFET remains on continuously to supply the load.

For a step-down converter with 100% duty cycle, dropout depends on the MOSFET drain-to-source onresistance and inductor series resistance; therefore, it is proportional to the load current:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

VDROPOUT(BUCK) = IOUT3 ✕ (RLX + RINDUCTOR)

## LDO PSRR

The MAX1534's linear regulators are designed to deliver low dropout voltages and low quiescent currents in battery-powered systems. Power-supply rejection is 55dB at low frequencies and rolls off above 20kHz. (See the LDO PSRR vs. Frequency graph in the Typical Operating Characteristics .)

To improve supply-noise rejection and transient response, increase the values of the input and output bypass capacitors or use passive filtering techniques.

## LDO Dropout Voltage

A linear regulator's minimum input-output voltage differential (or dropout voltage) determines the lowest usable supply voltage. Because the MAX1534 uses a P-channel  MOSFET pass transistor, its dropout voltage is a function of drain-to-source on-resistance (RDS(ON)) multiplied by the load current (see LDO Dropout Voltage vs. Load Current in the Typical Operating Characteristics ).

## PC Board Layout Guidelines

High switching frequencies and large peak currents make PC board layout an important part of the design. Poor layout introduces switching noise into the feedback path, resulting in jitter,  instability,  or  degraded  performance. High current traces, highlighted in the Typical Application Circuit (Figure 1), should be as short and wide as possible. Additionally, the current loops formed by the power components (CIN, COUT3, L1, and D1) should be as short as possible to avoid radiated noise. Connect the ground pins of these power components at a  common node in a star-ground configuration. Separate the noisy traces, such as the LX node, from the  feedback  network  with  grounded  copper. Furthermore, keep the extra copper on the board and integrate it into a pseudoground plane. When using external feedback, place the resistors as close to the feedback pin as possible to minimize noise coupling.

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## Pin Configuration

<!-- image -->

Chip Information

TRANSISTOR COUNT: 1512 PROCESS: BiCMOS

## High-Efficiency, Triple-Output, Keep-Alive Power Supply for Notebook Computers

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

24L QFN THIN.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600