<!-- lastmod 2022-08-04 -->
<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## General Description

The MAX4906EF are electrostatic discharge (ESD)-protected analog switches that combine low on-capacitance (CON) and low on-resistance (RON) necessary for highperformance switching applications. The COM\_ inputs are protected against ±15kV ESD without latchup or damage. The device is designed for USB 2.0 high-speed applications at 480Mbps. The switches also handle all the requirements for USB low- and full-speed signaling.

The MAX4906EF features two single-pole/double-throw (SPDT) switches. The device is fully specified to operate from a single +2.7V to +3.6V power supply and is protected against a +5.5V short to all analog inputs (COM\_, NC\_, NO\_). This feature makes the MAX4906EF fully compliant with the USB 2.0 specification of +5.5V fault protection. The device features a low threshold voltage and a +1.4V VIH, permitting them to be used with low-voltage logic. The device features a QP input that when driven high, turns the charge pump off and sets the device in standby mode. When the device is in standby mode, the quiescent supply current is reduced to 3µA (max) and the switches remain operable.

The MAX4906EF is available in a space-saving, 2mm x 2mm µDFN package and operates over a -40°C to +85°C temperature range.

## Applications

USB Switching

Cell Phones

PDAs

Digital Still Cameras

GPS

Notebook Computers

Relay Replacements

Ethernet Switching

Video Switching

Bus Switches

T3/E3 Switches for Redundancy Protection

## Typical Operating Characteristics

<!-- image -->

## Features

- ♦ ±15kV (Human Body Model) ESD Protection, on COM\_
- ♦ Fully Specified for a Single +2.7V to +3.6V Power-Supply Voltage
- ♦ Low 4Ω (typ), 7Ω (max) On-Resistance (RON)
- ♦ -3dB Bandwidth: 500MHz (typ)
- ♦ Low Bit-to-Bit Skew ≤ 20ps
- ♦ Charge-Pump Noise = 90 µ V (typ)
- ♦ Charge-Pump Enable
- ♦ No Need for Logic-Level Shifters for 1.4V or Above
- ♦ COM\_ Analog Inputs Fault-Protected Against Shorts to USB Supply Rail Up to +5.5V
- ♦ Low Supply Current 3 µ A (max) in Standby
- ♦ Space-Saving 10-Pin, 2mm x 2mm µ DFN Package

## Ordering Information

| PART           | TEMP RANGE     | PIN- PACKAGE   | TOP MARK   |
|----------------|----------------|----------------|------------|
| MAX4906EFELB+T | -40°C to +85°C | 10 µDFN        | AAJ        |

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## High-/Full-Speed USB 2.0 Switches with High ESD

## ABSOLUTE MAXIMUM RATINGS

| (All voltages referenced to GND.)                                             | V+.............................................................................-0.3V to +4V   |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| IN, QP (Note 1).........................................................-0.3V | to +4V                                                                                        |
| COM_, NO_,                                                                    | NC_..................................................-0.3V to +5.5V                           |
| Continuous Current (COM_ to NO_/NC_)                                          | ......................±120mA                                                                  |
| Peak Current, (COM_ to NO_/NC_) (pulsed at 1ms 10% duty                       | cycle).................................±240mA                                                 |

| Continuous Power Dissipation (T A = +70°C) 10-Pin µDFN (derate 5.0mW/°C above +70°C)   |
|----------------------------------------------------------------------------------------|
| ...........403mW Operating Temperature Range ..........................-40°C to +85°C  |
| Junction Temperature .....................................................+150°C       |
| Storage Temperature Range.............................-65°C to +150°C                  |
| Lead Temperature (soldering, 10s) .................................+300°C              |

Note 1: Signals on IN, QP exceeding GND are clamped by internal diodes. Limit forward-diode current to maximum current rating.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(V+ = +2.7V to +3.6V, TA = TMIN to TMAX, charge-pump enabled, unless otherwise noted. Typical values are at V+= 3.3V, TA = +25°C.) (Note 2)

| PARAMETER                                | SYMBOL                | CONDITIONS                                                  |                                              | MIN           | TYP           | MAX           | UNITS         |
|------------------------------------------|-----------------------|-------------------------------------------------------------|----------------------------------------------|---------------|---------------|---------------|---------------|
| ANALOG SWITCH                            | ANALOG SWITCH         | ANALOG SWITCH                                               | ANALOG SWITCH                                | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH |
| Analog Signal Range                      | V COM _,V NO_ , V NC_ | QP = GND or V+ (Note 3)                                     | QP = GND or V+ (Note 3)                      | 0             | 0             | 3.6           | V             |
| Fault-Protection Trip Threshold (Note 4) | V FP                  |                                                             |                                              | 3.62          | 3.9           | 4.20          | V             |
| On-Resistance, Charge-Pump Enabled       | R ON                  | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, QP = GND      | T A = +25°C                                  |               | 3.8           | 5             | Ω             |
| On-Resistance, Charge-Pump Enabled       | R ON                  | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, QP = GND      | T A = T MIN to T MAX                         |               |               | 6             | Ω             |
| On-Resistance, Charge-Pump Enabled       | R ON                  | V+ = 2.7V, I COM_ = -10mA, V COM_ = 2.7V, QP                | T A = +25°C                                  |               | 4             | 7             | Ω             |
| On-Resistance, Charge-Pump Enabled       | R ON                  | V+ = 2.7V, I COM_ = -10mA, V COM_ = 2.7V, QP                | T A = T MIN to T MAX                         |               |               | 8             | Ω             |
| On-Resistance, Charge-Pump Disabled      | R ON                  | V+ = 3.0V, I COM_ = -10mA, V COM_ = 0V, 1.5V,               | T A = +25°C                                  |               | 5             | 12            | Ω             |
| On-Resistance, Charge-Pump Disabled      | R ON                  | V+ = 3.0V, I COM_ = -10mA, V COM_ = 0V, 1.5V,               | T A = T MIN to T MAX                         |               |               | 13            | Ω             |
| On-Resistance, Charge-Pump Disabled      | R ON                  | V+=2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, QP = V+         | T A = +25°C                                  |               | 8             | 15            | Ω             |
| On-Resistance, Charge-Pump Disabled      | R ON                  | V+=2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, QP = V+         | T A = T MIN to T MAX                         |               |               | 17            | Ω             |
| On-Resistance Match Between Channels     | ∆ R ON                | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, 2.7V (Note 5) | T A = +25°C                                  |               | 0.5           | 0.8           | Ω             |
| On-Resistance Match Between Channels     | ∆ R ON                | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V, 2.7V (Note 5) | T A = T MIN to T MAX                         |               |               | 1.0           | Ω             |
| On-Resistance Flatness                   | R FLAT(ON)            | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V                | V+ = 2.7V, I COM_ = -10mA, V COM_ = 0V, 1.5V | 0.5           | 0.5           | 0.5           | Ω             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## ELECTRICAL CHARACTERISTICS (continued)

(V+ = +2.7V to +3.6V, TA = TMIN to TMAX, charge-pump enabled, unless otherwise noted. Typical values are at V+= 3.3V, TA = +25°C.) (Note 2)

| PARAMETER                               | SYMBOL                | CONDITIONS                                                                                | MIN TYP               | MAX                   | UNITS                 |                       |
|-----------------------------------------|-----------------------|-------------------------------------------------------------------------------------------|-----------------------|-----------------------|-----------------------|-----------------------|
| Off-Leakage Current                     | I NC_, I NO_ (OFF)    | V+ = 3.6V, V COM_ = 0.3V, 3.3V; V NO_ or V NC_ = 3.3V, 0.3V                               | -1                    | +1                    | µA                    |                       |
| On-Leakage Current                      | I NC_, I NO_ (ON)     | V+ = 3.6V, V COM = 0.3V, 3.3V; V NO_ or V NC_ = 0.3V, 3.3V, or unconnected                | -1                    | +1                    | µA                    |                       |
| SWITCH AC PERFORMANCE                   | SWITCH AC PERFORMANCE | SWITCH AC PERFORMANCE                                                                     | SWITCH AC PERFORMANCE | SWITCH AC PERFORMANCE | SWITCH AC PERFORMANCE | SWITCH AC PERFORMANCE |
| On-Channel -3dB Bandwidth               | BW                    | R L = R S = 50 Ω , signal = 0dBm, Figure 1                                                | 500                   |                       | MHz                   |                       |
| Off-Isolation                           | V ISO                 | f = 10MHz; V NO_ , V NC_ = 1V P-P ; R L = R S = 50 Ω , Figure 1                           | -60                   |                       | dB                    |                       |
|                                         | V ISO                 | f = 250MHz; V NO_ , V NC_ = 1V P-P ; R L = R S = 50 Ω , Figure 1                          | -32                   |                       | dB                    |                       |
| Crosstalk (Note 7)                      | V CT                  | f = 10MHz; V NO_ , V NC_ = 1V P-P ; R L = R S = 50 Ω , Figure 1                           | -59                   |                       | dB                    |                       |
| Crosstalk (Note 7)                      | V CT                  | f = 250MHz; V NO_ , V NC_ = 1V P-P ; R L = R S = 50 Ω , Figure 1                          | -31                   |                       | dB                    |                       |
| Charge-Pump Noise (Note 8)              | V QP                  | Any input or output switch terminal = 50 Ω                                                | 90                    |                       | µV                    |                       |
| SWITCH DYNAMICS                         | SWITCH DYNAMICS       | SWITCH DYNAMICS                                                                           | SWITCH DYNAMICS       | SWITCH DYNAMICS       | SWITCH DYNAMICS       | SWITCH DYNAMICS       |
| NO_, NC_, COM_ Off-Capacitance (Note 9) | C(OFF)                | f = 1MHz, Figure 2                                                                        | 9                     | 10                    | pF                    |                       |
| NO_, NC_, COM_ On-Capacitance (Note 9)  | C(ON)                 | f = 1MHz, Figure 2                                                                        | 10                    | 12                    | pF                    |                       |
| Switch On-Capacitance Matching (Note 9) | CONM                  | f = 1MHz                                                                                  | 0.4                   |                       | pF                    |                       |
| Turn-On Time                            | t ON                  | V NO _, V NC _= 1.5V; R L = 300 Ω , C L = 35pF, V IH = V+, V IL = 0V, QP = GND, Figure 3  | 1.4                   |                       | ns                    |                       |
| Turn-Off Time                           | t OFF                 | V NO _, V NC _ = 1.5V; R L = 300 Ω , CL = 35pF, V IH = V+, V IL = GND, QP = GND, Figure 3 | 35                    |                       | ns                    |                       |
| Propagation Delay                       | t PLH_ ,t PHL         | R L = R S = 50 Ω , Figure 4                                                               | 0.2                   |                       | ns                    |                       |
| Fault-Protection Response Time          | t FP                  | V COM_ = 0 to 5V step, R L = R S = 50 Ω , CL = 10pF, Figure 5                             | 1                     |                       | µs                    |                       |
| Fault-Protection Recovery Time          | t FPR                 | V COM_ = 5V to 3V step, R L = R S = 50 Ω , CL = 10pF, Figure 5                            | 1                     |                       | µs                    |                       |
| Output Skew Between Switches (Note 9)   | t SK(o)               | Skew between switch 1 and switch 2, R L = R S = 50 Ω , Figure 4                           | 20                    | 100                   | ps                    |                       |
| Output Skew Same Switch (Note 9)        | t SK(p)               | Skew between opposite transitions in same switch, R L = R S = 50 Ω , Figure 4             | 5                     | 100                   | ps                    |                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-/Full-Speed USB 2.0 Switches with High ESD

## ELECTRICAL CHARACTERISTICS (continued)

(V+ = +2.7V to +3.6V, TA = TMIN to TMAX, charge-pump enabled, unless otherwise noted. Typical values are at V+= 3.3V, TA = +25°C.) (Note 2)

| PARAMETER                                          | SYMBOL   | CONDITIONS                                        |   MIN | TYP   |   MAX | UNITS   |
|----------------------------------------------------|----------|---------------------------------------------------|-------|-------|-------|---------|
| Total Harmonic Distortion Plus Noise               | THD+N    | V COM_ = 2V P-P , R L = 600 Ω , f = 20Hz to 20kHz |       | 0.01  |       | %       |
| Charge Injection                                   | Q        | V GEN = 1.5V, R GEN = 0 Ω , CL = 100pF, Figure 6  |       | 20    |       | pC      |
| SWITCH LOGIC                                       |          |                                                   |       |       |       |         |
| Logic-Input Voltage Low                            | V IL     |                                                   |       |       |   0.4 | V       |
| Logic-Input Voltage High                           | V IH     |                                                   |   1.4 |       |       | V       |
| Input-Logic Hysteresis                             | V HYST   |                                                   |       | 100   |       | mV      |
| Input Leakage Current                              | I IN     | V+ = 3.6V, V IN = 0 or V+                         |    -1 |       |    +1 | µA      |
| Operating Supply-Voltage Range                     | V+       |                                                   |   2.7 |       |   3.6 | V       |
| Quiescent Supply Current                           | I+       | V+ = 3.6V, V IN = 0 or V+, QP = GND               |       | 160   |  1000 | µA      |
| Quiescent Supply Current With Charge-Pump Disabled | I+       | V+ = 3.6V, V IN = 0 or V+, QP = V+                |       |       |     3 | µA      |
| ESD PROTECTION                                     |          |                                                   |       |       |       |         |
| COM_                                               |          | Human Body Model                                  |       | ±15   |       | kV      |

- Note 2: All units are 100% production tested at TA = +25°C. Limits over the operating temperature range are guaranteed by design and not production tested.
- Note 3: The switch will turn off for voltages above (VFP); therefore, protecting downstream circuits in case of a fault condition.
- Note 4: Fault-protection trip threshold limits are not production tested; guaranteed by design.
- Note 5: ∆ RON(MAX) = | RON(CH1) - RON(CH2) |
- Note 6: Flatness is defined as the difference between the maximum and minimum value of on-resistance, as measured over specified analog signal ranges.
- Note 7: Between any two switches.
- Note 8: Noise specification is measured peak to peak.
- Note 9: Switch off-capacitance, switch on-capacitance, output skew between switches, and output skew same-switch limits are not production tested; design guaranteed by correlation.

## Typical Operating Characteristics

<!-- image -->

(V+ = 3.3V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## Typical Operating Characteristics (continued)

(V+ = 3.3V, TA = +25°C, unless otherwise noted.)

MAX4906EF toc11

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX4906EF toc12

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## Pin Description

|   PIN | NAME   | FUNCTION                                                                                                               |
|-------|--------|------------------------------------------------------------------------------------------------------------------------|
|     1 | IN     | Digital Control Input. IN controls switch 1 and switch 2.                                                              |
|     2 | QP     | Charge-Pump Enable Input. Drive QP high to turn charge pump off. For normal operation, drive QP low.                   |
|     3 | GND    | Ground                                                                                                                 |
|     4 | COM1   | Analog Switch 1-Common Terminal                                                                                        |
|     5 | COM2   | Analog Switch 2-Common Terminal                                                                                        |
|     6 | NO2    | Analog Switch 2-Normally Open Terminal                                                                                 |
|     7 | NO1    | Analog Switch 1-Normally Open Terminal                                                                                 |
|     8 | NC2    | Analog Switch 2-Normally Closed Terminal                                                                               |
|     9 | NC1    | Analog Switch 1-Normally Closed Terminal                                                                               |
|    10 | V+     | Positive-Supply Voltage Input. Connect V+ to a +2.7V to +3.6V supply voltage. Bypass V+ to GND with a 0.1µF capacitor. |

## Test Circuits/Timing Diagrams

<!-- image -->

Figure 1. Off-Isolation and Crosstalk

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-/Full-Speed USB 2.0 Switches with High ESD

## Test Circuits/Timing Diagrams (continued)

Figure 2. Channel Off-/On-Capacitance

<!-- image -->

Figure 3. Switching Time

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## Test Circuits/Timing Diagrams (continued)

Figure 4. Output Signal Skew, Rise/Fall Time, Propagation Delay

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-/Full-Speed USB 2.0 Switches with High ESD

## Test Circuits/Timing Diagrams (continued)

Figure 5. MAX4906EF Fault-Protection Response/Recovery Time

<!-- image -->

Figure 6. Charge Injection

<!-- image -->

## Detailed Description

The MAX4906EF are ESD-protected analog switches where the COM\_ inputs are further protected up to ±15kV ESD without latchup or damage. The device is targeted for USB 2.0 high-speed (480Mbps) switching applications. The device still meets USB low- and fullspeed requirements and is suitable for 10/100 Ethernet switching. The MAX4906EF features two SPDT switches.

The MAX4906EF is fully specified to operate from a single +2.7V to +3.6V supply and is +5.5V fault protected.

When operating from a +2.7V to +3.6V supply, the low threshold of the device permits them to be used with logic levels as low as 1.4V. The MAX4906EF is based on a charge-pump-assisted n-channel architecture and thus operate at 170µA (max) quiescent current. The device features a standby mode to reduce the quiescent current to less than 3µA (max).

## Digital Control Input

The MAX4906EF provides a single-digit control logic input,  IN.  IN  controls  the  position  of  the  switches  as shown in the Functional Diagram/Truth Table. Driving IN

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## High-/Full-Speed USB 2.0 Switches with High ESD

## Functional Diagram/Truth Table

| MAX4906EF   | MAX4906EF   | MAX4906EF   | MAX4906EF   | MAX4906EF        |
|-------------|-------------|-------------|-------------|------------------|
| QP          | IN          | NO1 NO2     | NC1 NC2     |                  |
| 0           | 0           | OFF         | ON          | HIGH PERFORMANCE |
| 0           | 1           | ON          | OFF         | HIGH PERFORMANCE |
| 1           | 0           | OFF         | ON          | LOW PERFORMANCE  |
| 1           | 1           | ON          | OFF         | LOW PERFORMANCE  |

<!-- image -->

rail-to-rail minimizes power consumption. With a +2.7V to  +3.6V supply voltage range, the device is +1.4V logic compatible.

## Analog Signal Levels

The on-resistance of the MAX4906EF is very low and stable as the analog input signals are swept from ground to V+ (see the Typical Operating Characteristics). These switches are bidirectional, allowing NO\_, NC\_, and COM\_ to be configured as either inputs or outputs.

## Overvoltage Fault Protection

The MAX4906EF features +5.5V fault protection to all  analog inputs. Fault protection prevents these switches from being damaged due to shorts to the USB bus voltage rail.

## Charge-Pump Enable

The MAX4906EF features a charge-pump enable mode that improves the performance and the dynamic range of the device. The device features a QP input that when driven high, turns the charge pump off and sets the device in standby mode. When the device is in standby mode, the quiescent supply current is reduced to 3µA (max) and the switches remain operable. When QP is driven low, the charge pump is enabled and the switches enter an improved high-performance mode.

<!-- image -->

## Applications Information USB Switching

The MAX4906EF analog switch is fully compliant with the USB 2.0 specification. The low on-resistance and low on-capacitance of these switches make the device ideal for high-performance switching applications. The MAX4906EF is ideal for routing USB data lines (see Figure 7) and for applications that require switching between multiple USB hosts (see Figure 8). The MAX4906EF also features +5.5V fault protection to guard systems against shorts to the USB bus voltage that is recommended for all USB applications.

## Ethernet Switching

The wide bandwidth of the MAX4906EF meets the needs of 10/100 Ethernet switching. The device switch the signals from two interface transformers and connect the signals to a single 10/100 Base-T Ethernet PHY, simplifying docking station design and reducing manufacturing costs.

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic discharges encountered during handling and assembly. COM\_ are further protected against static electricity. Maxim's engineers have developed state-of-the-art structures to protect these pins against ESD up to ±15kV without damage. The ESD structures withstand high ESD in normal operation, and when the device is powered down. After an ESD event, the MAX4906EF continues to function without latchup, whereas competing products can latch and must be powered down to restore functionality.

ESD protection can be tested in various ways. The ESD protection of COM\_ are characterized for ±15kV (Human Body Model) using the MIL-STD-883.

## ESD Test Conditions

ESD performance depends on a variety of conditions. Contact Maxim for a reliability report that documents test setup, test methodology, and test results.

## Human Body Model

Figure 9a shows the Human Body Model and Figure 9b shows the current waveform it generates when discharged into a low impedance. This model consists of

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## High-/Full-Speed USB 2.0 Switches with High ESD

Figure 7. USB Data Routing

<!-- image -->

Figure 8. Switching Between Multiple USB Hosts

<!-- image -->

a 100pF capacitor charged to the ESD voltage of interest,  which is then discharged into the test device through a 1.5k Ω resistor.

## Layout

High-speed switches require proper layout and design procedures for optimum performance. Keep designcontrolled-impedance PC board traces as short as possible. Ensure that bypass capacitors are as close to the device as possible. Use large ground planes where possible.

Figure 9a. Human Body ESD Test Model

<!-- image -->

Figure 9b. Human Body Current Waveform

<!-- image -->

Chip Information

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 10 µDFN        | L1022+1        | 21-0164        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

PROCESS: BiCMOS

## High-/Full-Speed USB 2.0 Switches with High ESD

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 8/06            | Initial release.                                               | -               |
|                 1 | 11/07           | Changed the Electrical Characteristics table.                  | 2, 4            |
|                 2 | 3/09            | Changed the Electrical Characteristics table to show QP = GND. | 2, 3, 4         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.