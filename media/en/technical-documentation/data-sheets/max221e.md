<!-- lastmod 2022-11-25 -->
<!-- image -->

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## General Description

The MAX221E is a +5V powered, single transmit/ receive RS-232 and V.28 communications interface with automatic shutdown/wake-up features and high data rate capabilities.

The MAX221E features enhanced electrostatic discharge (ESD) protection. Both the transmitter output and receiver input are protected to ±15kV using the IEC 1000-4-2 AirGap Discharge Method, to ±8kV using the IEC 1000-4-2 Contact Discharge Method, and to ±15kV using the Human Body Model.

The MAX221E achieves a low 1µA supply current with Maxim's  revolutionary  AutoShutdown™  feature. AutoShutdown saves power without changes to the existing BIOS or operating system by entering lowpower shutdown mode when the RS-232 cable is disconnected or when the transmitter of the connected peripheral is off. The MAX221E wakes up and drives the INVALID pin high when an active RS-232 cable is connected, signaling the host that a peripheral is connected to the communications port.

The MAX221E is available in a 16-pin SSOP package as well as a 16-pin TSSOP that uses 50% less board space than a 16-pin SO.

## Applications

Maintenance/Diagnostic Ports

Industrial Systems

Telecommunications

Set-Top Boxes

## Pin Configuration

<!-- image -->

AutoShutdown is a trademark of Maxim Integrated Products.

## Features

- ' Single RS-232 Transceiver in a Small 16-Pin TSSOP
- ' ESD Protection for RS-232 I/O Pins ±15kV-Human Body Model ±8kV-IEC 1000-4-2, Contact Discharge

±15kV-IEC 1000-4-2, Air-Gap Discharge

- ' Latchup Free
- ' 1µA Supply Current
- ' AutoShutdown Saves Power without Changes to BIOS
- ' Guaranteed 250kbps Data Rate

## Ordering Information

| PART       | TEMP. RANGE   | PIN-PACKAGE   |
|------------|---------------|---------------|
| MAX221ECUE | 0°C to +70°C  | 16 TSSOP      |
| MAX221ECAE | 0°C to +70°C  | 16 SSOP       |
| MAX221EEUE | 40°C to +85°C | 16 TSSOP      |
| MAX221EEAE | 40°C to +85°C | 16 SSOP       |

## Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## ABSOLUTE MAXIMUM RATINGS

VCC ..........................................................................-0.3V to +6V

V+ ...............................................................(VCC - 0.3V) to +14V

V-  ...........................................................................-14V to +0.3V

Input Voltages

TIN............................................................-0.3V to (V+ + 0.3V)

RIN...................................................................................±30V

FORCEON,

FORCEOFF

,

EN

..................-0.3V to (VCC + 0.3V)

Output Voltages

TOUT ................................................(V- - 0.3V) to (V+ + 0.3V)

ROUT,

INVALID

......................................-0.3V to (VCC + 0.3V)

Short-Circuit Duration, TOUT .....................................Continuous

Continuous Power Dissipation (TA = +70°C)

16-Pin TSSOP (derated 6.7mW/°C above +70°C).......533mW

16-Pin SSOP (derated 7.1mW/°C above +70°C).........571mW

Operating Temperature Range

MAX221EC\_ \_.....................................................0°C to +70°C

MAX221EE\_ \_ ..................................................-40°C to +85°C

Maximum Junction Temperature .................................... +150°C

Storage Temperature Range ........................... -65°C to +150°C

Lead Temperature (soldering, 10sec) ............................ +300°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = +5V ±10%, C1-C4 = 0.1µF, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                               | SYMBOL             | CONDITIONS                   |                              | MIN                | TYP                | MAX                | UNITS              |
|---------------------------------------------------------|--------------------|------------------------------|------------------------------|--------------------|--------------------|--------------------|--------------------|
| DC CHARACTERISTICS                                      | DC CHARACTERISTICS | DC CHARACTERISTICS           | DC CHARACTERISTICS           | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS |
| V CC Supply Current                                     | I CC               | No load, T A = +25°C         | No load, T A = +25°C         |                    | 5                  | 10                 | mA                 |
| Shutdown Supply Current                                 | I SHDN             | T A = +25°C, Figure 1        | T A = +25°C, Figure 1        |                    | 1                  | 10                 | µA                 |
| AutoShutdown Supply Current                             | I AS               |                              |                              |                    | 1                  | 10                 | µA                 |
| LOGIC INPUTS                                            | LOGIC INPUTS       | LOGIC INPUTS                 | LOGIC INPUTS                 | LOGIC INPUTS       | LOGIC INPUTS       | LOGIC INPUTS       | LOGIC INPUTS       |
| Input Leakage Current                                   |                    | TIN = 0 to V CC              | TIN = 0 to V CC              |                    |                    | ±1                 | µA                 |
| Input Threshold Low                                     | V IL               | TIN, EN , FORCEOFF , FORCEON | TIN, EN , FORCEOFF , FORCEON |                    |                    | 0.8                | V                  |
| Input Threshold High                                    | V IH               | EN , FORCEOFF , TIN          | EN , FORCEOFF , TIN          | 2.4                |                    |                    | V                  |
| Output Voltage Low                                      | V OL               | ROUT; I SINK = 3.2mA         | ROUT; I SINK = 3.2mA         |                    |                    | 0.4                | V                  |
| Output Voltage High                                     | V OH               | ROUT; I SOURCE = 1.0mA       | ROUT; I SOURCE = 1.0mA       | 3.5                |                    |                    | V                  |
| Output Leakage Current                                  |                    | EN = V CC , 0 ≤ ROUT ≤ V CC  | EN = V CC , 0 ≤ ROUT ≤ V CC  |                    | ±0.05              | ±10                | µA                 |
| AUTOSHUTDOWN                                            | AUTOSHUTDOWN       | AUTOSHUTDOWN                 | AUTOSHUTDOWN                 | AUTOSHUTDOWN       | AUTOSHUTDOWN       | AUTOSHUTDOWN       | AUTOSHUTDOWN       |
| Receiver Input Threshold,                               |                    | Figure 3                     | Positive threshold           |                    |                    | 2.7                | V                  |
| Transmitter Enabled                                     |                    | Figure 3                     | Negative threshold           | -2.7               |                    |                    |                    |
| Receiver Input Threshold, Transmitter Disabled          |                    | I CC = 1µA, Figure 3         | I CC = 1µA, Figure 3         | -0.3               |                    | 0.3                | V                  |
| INVALID Output Voltage Low                              |                    | I SINK = 1.6mA               | I SINK = 1.6mA               |                    |                    | 0.4                | V                  |
| INVALID Output Voltage High                             |                    | I SOURCE = 1.0mA             | I SOURCE = 1.0mA             | V CC - 0.6         |                    |                    | V                  |
| Receiver Threshold to Transmitter Enabled               | t WU               | Figure 3                     | Figure 3                     |                    | 250                |                    | µs                 |
| Receiver Positive or Negative Threshold to INVALID High | t INVH             | Figure 3                     | Figure 3                     | 1                  |                    |                    | µs                 |
| Receiver Positive or Negative Threshold to INVALID Low  | t INVL             | Figure 3                     | Figure 3                     |                    | 30                 |                    | µs                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = +5V ±10%, C1-C4 = 0.1µF, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                    | SYMBOL   | CONDITIONS                           | MIN   | TYP   | MAX   | UNITS   |
|------------------------------|----------|--------------------------------------|-------|-------|-------|---------|
| RECEIVER INPUT               |          |                                      |       |       |       |         |
| Input Voltage Range          |          |                                      | -25   |       | 25    | V       |
| Input Threshold Low          |          | T A = +25°C, V CC = 5V               | 0.8   | 1.2   |       | V       |
| Input Threshold High         |          | T A = +25°C, V CC = 5V               |       | 1.7   | 2.4   | V       |
| Input Hysteresis             |          | V CC = 5V, no hysteresis in shutdown |       | 0.5   |       | V       |
| Input Resistance             |          | T A = +25°C, V CC = 5V               | 3     | 5     | 7     | k Ω     |
| TRANSMITTER OUTPUT           |          |                                      |       |       |       |         |
| Output Voltage Swing         |          | Driver loaded with 3k Ω to ground    | ±5    | ±9    |       | V       |
| Output Resistance            |          | V CC = V+ = V- = 0, V OUT = ±2V      | 300   |       |       | Ω       |
| Output Short-Circuit Current |          |                                      |       | ±10   | ±60   | mA      |
| ESD PROTECTION               |          |                                      |       |       |       |         |
| RIN, TOUT                    |          | IEC 1000-4-2 Air-Gap Discharge       |       | ±15   |       | kV      |
| RIN, TOUT                    |          | IEC 1000-4-2 Contact Discharge       |       | ±8    |       | kV      |
| RIN, TOUT                    |          | Human Body Model                     |       | ±15   |       | kV      |

## TIMING CHARACTERISTICS

(VCC = +5V ±10%, C1-C4 = 0.1µF, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                    | SYMBOL                    | CONDITIONS                                                                                                 |   MIN |   TYP |   MAX | UNITS   |
|------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------|-------|-------|-------|---------|
| Maximum Data Rate            |                           | R L = 3k Ω to 7k Ω , CL = 50pF to 1000pF, V CC = 4.5V                                                      |   250 |       |       | kbps    |
| Receiver Propagation Delay   | t PHL, t PLH              | C L = 150pF                                                                                                |       |  0.15 |       | ms      |
| Receiver Output Enable Time  |                           | Normal operation                                                                                           |       |   300 |       | ns      |
| Receiver Output Disable Time |                           | Normal operation                                                                                           |       |   200 |       | ns      |
| Transmitter Skew             | &#124; t PHL t PLH &#124; | (Note 1)                                                                                                   |       |   200 |       | ns      |
| Receiver Skew                | &#124; t PHL t PLH &#124; |                                                                                                            |       |    50 |       | ns      |
| Transition-Region Slew Rate  |                           | T A = +25°C, V CC = 5V, R L = 3k Ω to 7k Ω , C L = 500pF to 1000pF, measured from -3V to +3V or +3V to -3V |     3 |     6 |    30 | V/µs    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note 1: Transmitter skew is measured at the transmitter zero crosspoints.

3

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## Typical Operating Characteristics

(V CC = +5V, 250kbps data rate, 0.1µF capacitors, transmitter loaded with 3k W and CL, TA = +25°C, unless otherwise noted.)

<!-- image -->

## Pin Description

|   PIN | NAME     | FUNCTION                                                                                                                                                           |
|-------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | EN       | Receiver Enable Control. Drive low for normal operation. Drive high to force the receiver output (ROUT) into a high-impedance state.                               |
|     2 | C1+      | Positive Terminal of the Voltage Doubler Charge-Pump Capacitor                                                                                                     |
|     3 | V+       | Positive Voltage Generated by the Charge Pump                                                                                                                      |
|     4 | C1-      | Negative Terminal of the Voltage Doubler Charge-Pump Capacitor                                                                                                     |
|     5 | C2+      | Positive Terminal of the Inverting Charge-Pump Capacitor                                                                                                           |
|     6 | C2-      | Negative Terminal of the Inverting Charge-Pump Capacitor                                                                                                           |
|     7 | V-       | Negative Voltage Generated by the Charge Pump                                                                                                                      |
|     8 | RIN      | RS-232 Receiver Input, ±15kV ESD protected                                                                                                                         |
|     9 | ROUT     | TTL/CMOS Receiver Output                                                                                                                                           |
|    10 | INVALID  | Output of the Invalid Signal Detector. INVALID is pulled low if no valid RS-232 level is present on the receiver input.                                            |
|    11 | TIN      | TTL/CMOS Transmitter Input                                                                                                                                         |
|    12 | FORCEON  | Drive high to override automatic circuitry, keeping transmitter and charge pump on. FORCEOFF must be high (Table 1).                                               |
|    13 | TOUT     | RS-232 Transmitter Output, ±15kV ESD Protected                                                                                                                     |
|    14 | GND      | Ground                                                                                                                                                             |
|    15 | V CC     | +4.5V to +5.5V Supply Voltage                                                                                                                                      |
|    16 | FORCEOFF | Force-Off Input, active low. Drive low to shut down transmitter, receiver, and on-board charge pump. This overrides all automatic circuitry and FORCEON (Table 1). |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

Figure 1. Shutdown Current Test Circuit

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Dual Charge-Pump Voltage Converter

The MAX221E's internal power supply consists of a dual charge pump that provides a positive output voltage (doubling charge pump) and negative output voltage (inverting charge pump) from a single +5V supply. The charge pumps operate in continuous mode. Each charge pump requires a flying capacitor (C1, C2) and a reservoir capacitor (C3, C4) to generate the V+ and Vsupplies.

## RS-232 Transmitter

The transmitter is an inverting level translator that converts CMOS-logic levels to 5.0V EIA/TIA-232 levels.  It guarantees a 250kbps data rate with worst-case loads of 3k W in parallel with 1000pF.

When FORCEOFF is  driven  to  ground,  or  when  the AutoShutdown circuitry senses invalid voltage levels on the receiver input, the transmitter is disabled and the output is forced into a high-impedance state. The transmitter input does not have a pull-up resistor.

<!-- image -->

## RS-232 Receiver

The MAX221E's receiver converts RS-232 signals to CMOS-logic output levels. The receiver has an inverting three-state output and can be active or inactive. In shutdown ( FORCEOFF = low) or in AutoShutdown, the receiver is active (Table 1). Drive EN high to place the receiver in a high-impedance state. The receiver is high-impedance when the MAX221E is in shutdown ( FORCEOFF = low).

The MAX221E's INVALID output is pulled low when there is  no  valid  RS-232  signal  level  detected  on  the receiver input. INVALID is  functional in any mode (Figures 2 and 3).

## AutoShutdown

The MAX221E achieves 1µA supply current with Maxim's AutoShutdown feature, which operates when FORCEON is low and FORCEOFF is  high.  When the device senses no valid signal levels on the receiver input  for  30µs,  the  on-board  charge  pump and driver are shut off, reducing supply current to 1µA. This occurs if the RS-232 cable is disconnected or the connected peripheral transmitter is turned off. The MAX221E turns on again when a valid level is applied to  the  RS-232 receiver input. As a result, the system saves power without changes to the existing BIOS or operating system.

Table 1 and Figure 2c summarize the MAX221E operati ng  modes. FORCEON and FORCEOFF override AutoShutdown. When neither control is asserted, the device selects between these states automatically, based on the receiver input level. Figures 2a, 2b, and 3a depict valid and invalid RS-232 receiver levels. Figure 3 shows the input levels and timing diagram for AutoShutdown operation.

A device or another system with AutoShutdown connected to the MAX221E may need time to wake up. Figure 4 shows a circuit that forces the transmitter on for 100ms, allowing enough time for the other system to realize that the MAX221E is awake. If the other system transmits valid RS-232 signals within that time, the RS-232 ports on both systems remain enabled.

When shut down, the device's charge pumps turn off, V+ is pulled to VCC, V- is pulled to ground, and the transmitter output is high impedance. The time required to exit shutdown is typically 100µs (Figure 3b).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

Table 1.  Output Control Truth Table

| OPERATION STATUS                | FORCEON   |   FORCEOFF |   EN | VALID RECEIVER   | TOUT   | ROUT   |
|---------------------------------|-----------|------------|------|------------------|--------|--------|
| Shutdown (Forced Off)           | X         |          0 |    0 | X                | High-Z | Active |
| Shutdown (Forced Off)           | X         |          0 |    1 | X                | High-Z | High-Z |
| Normal Operation (Forced On)    | 1         |          1 |    0 | X                | Active | Active |
| Normal Operation (Forced On)    | 1         |          1 |    1 | X                | Active | High-Z |
| Normal Operation (AutoShutdown) | 0         |          1 |    0 | Yes              | Active | Active |
| Normal Operation (AutoShutdown) | 0         |          1 |    1 | Yes              | Active | High-Z |
| Shutdown (AutoShutdown)         | 0         |          1 |    0 | No               | High-Z | Active |
| Shutdown (AutoShutdown)         | 0         |          1 |    1 | No               | High-Z | High-Z |

x = Don't care

Figure 2a. Entering 1µA Supply Mode via AutoShutdown

<!-- image -->

Figure 2b. Transmitter Enabled Using AutoShutdown

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2c. AutoShutdown Logic

<!-- image -->

Table 2. INVALID Truth Table

| RS-232 SIGNAL PRESENT AT RECEIVER INPUT   | INVALID OUTPUT   |
|-------------------------------------------|------------------|
| Yes                                       | High             |
| No                                        | Low              |

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

<!-- image -->

Figure 3. AutoShutdown Trip Levels

<!-- image -->

Figure 4. AutoShutdown with Initial Turn-On to Wake Up a Mouse or Another System

<!-- image -->

## Software-Controlled Shutdown

For direct software control, use INVALID to  indicate  a DTR or Ring Indicator signal. Connect FORCEOFF and FORCEON together to disable AutoShutdown so the line acts like a SHDN input.

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic  discharges encountered during handling and assembly. The driver output and receiver input of the MAX221E have extra protection against static electricity.  Maxim's  engineers have developed state-of-the-art structures to protect these pins against ESD of ±15kV without damage. The ESD structures withstand high ESD in all states: normal operation, shutdown, and powered down. After an ESD event, Maxim's E versions keep working without latchup, whereas competing RS-232 products can latch and must be powered down to remove latchup.

ESD protection can be tested in various ways; the transmitter output and receiver input of the MAX221E are characterized for protection to the following limits:

- 1) ±15kV using the Human Body Model
- 2) ±8kV using the Contact-Discharge Method specified in IEC 1000-4-2
- 3) ±15kV using IEC 1000-4-2's Air-Gap Method

## ESD Test Conditions

ESD performance depends on a variety of conditions. Contact Maxim for a reliability report that documents test setup, test methodology, and test results.

## Human Body Model

Figure 5a shows the Human Body Model, and Figure 5b shows the current waveform it generates when discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest,  which is then discharged into the test device through a 1.5k W resistor.

## IEC 1000-4-2

The IEC 1000-4-2 standard covers ESD testing and performance of finished equipment; it does not specifically  refer  to  integrated  circuits.  The  MAX221E  helps you design equipment that meets Level 4 (the highest level)  of  IEC  1000-4-2,  without  the  need  for  additional ESD-protection components.

The major difference between tests done using the Human Body Model and IEC 1000-4-2 (Figure 6) is higher peak current in the IEC 1000-4-2 because series resistance is lower in the IEC 1000-4-2 model. Hence,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

Figure 5a. Human Body ESD Test Model

<!-- image -->

Figure 5b. Human Body Model Current Waveform

<!-- image -->

the ESD that withstands voltage measured to IEC 10004-2 is generally lower than that measured using the Human Body Model. Figure 6a shows the IEEE 1000-42 model and Figure 6b shows the current waveform for the ±8kV IEC 1000-4-2 Level 4 ESD Contact-Discharge test.

The Air-Gap Method involves approaching the device with a charged probe. The Contact-Discharge Method connects the probe to the device before the probe is energized.

Figure 6a. IEC 1000-4-2 ESD Test Model

<!-- image -->

Figure 6b. IEC 1000-4-2 ESD Generator Current Waveform

<!-- image -->

## Machine Model

The Machine Model for ESD tests all pins, using a 200pF storage capacitor and zero discharge resistance. Its objective is to emulate the stress caused not only by RS-232 inputs and outputs, but also by contact that  occurs due to handling and assembling during manufacturing. Therefore, after PC board assembly, the Machine Model is less relevant to I/O ports.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Using INVALID

INVALID indicates when an RS-232 signal is present at the receiver input, and therefore when the port is in use. INVALID can be used in alternative shutdown control schemes where it relieves the processor from constantly polling the part for activity.

## Capacitor Selection

The capacitor type used for C1-C4 is not critical for proper operation; either polarized or nonpolarized capacitors are acceptable. If polarized capacitors are used, connect polarity as shown in the Typical Operating Circuit. The charge pump requires 0.1µF capacitors. Increasing the capacitor values (e.g., by a factor  of  2)  reduces  ripple  on  the  transmitter  output, and slightly reduces power consumption. C2, C3, and C4 can be increased without changing C1's value. However, do not increase C1's value without also increasing the values of C2, C3, and C4 to maintain the proper ratios (C1 to the other capacitors).

When using the minimum 0.1µF capacitors, make sure the capacitance does not degrade excessively with temperature. If in doubt, use capacitors with a larger nominal value. The capacitor's equivalent series resistance (ESR) usually rises at low temperatures and influences the amount of ripple on V+ and V-.

<!-- image -->

Figure 7. Transmitter Output when Exiting Shutdown or Powering Up

<!-- image -->

## Power-Supply Decoupling

In most circumstances, a 0.1µF VCC bypass capacitor is adequate. In applications that are sensitive to powersupply noise, use a capacitor of the same value as the charge-pump capacitor C1. Connect bypass capacitors as close to the IC as possible.

## Transmitter Output when Exiting Shutdown

Figure 7 shows the transmitter output when exiting shutdown mode. The transmitter is loaded with 3k W in parallel with 1000pF. The transmitter output displays no ringing or undesirable transients as the MAX221E comes out of shutdown.

## High Data Rates

The MAX221E maintains the RS-232 ±5.0V minimum transmitter output voltage even at high data rates. Figure 8 shows a transmitter loopback test circuit. Figure 9 shows the loopback test result at 120kbps, and Figure 10 shows the same test at 250kbps.

Figure 8. Loopback Test Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

Figure 9. Loopback Test Result at 120kbps

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Chip Information

TRANSISTOR COUNT: 157

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 10. Loopback Test Result at 250kbps

<!-- image -->

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## Package Information

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, +5V, 1µA, Single RS-232 Transceiver with AutoShutdown

## Package Information (continued)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

12

12