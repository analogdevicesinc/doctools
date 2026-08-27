<!-- lastmod 2020-12-08 -->
<!-- image -->

Data Sheet

## FEATURES

250 ps propagation delay input to output 50 ps propagation delay dispersion Differential PECL compatible outputs Differential latch control Robust input protection Input common-mode range -2.0 V to +3.0 V Input differential range ±5 V ESD protection &gt;3 kV HBM, &gt;200 V MM Power supply sensitivity &gt;65 dB 200 ps minimum pulse width 5 GHz equivalent input rise time bandwidth Typical output rise/fall of 165 ps

## APPLICATIONS

High speed line receivers and signal restoration

High speed instrumentation Scope and logic analyzer front ends Window comparators Threshold detection Peak detection High speed triggers Patient diagnostics Disk drive read channel detection Hand-held test instruments Zero-crossing detectors Clock drivers

Automatic test equipment

## GENERAL DESCRIPTION

The ADCMP567 is an ultrafast voltage comparator fabricated on Analog Devices, Inc., proprietary XFCB process. The device features 250 ps propagation delay with less than 35 ps overdrive dispersion. Overdrive dispersion, a particularly important characteristic of high speed comparators, is a measure of the difference in propagation delay under differing overdrive conditions.

## Dual Ultrafast Voltage Comparator

[ADCMP567](http://www.analog.com/ADCMP567?doc=ADCMP567.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

A fast, high precision differential input stage permits consistent propagation delay with a wide variety of signals in the commonmode range from -2.0 V to +3.0 V. Outputs are complementary digital signals fully compatible with PECL 10 K and 10 KH logic families. The outputs provide sufficient drive current to directly drive transmission lines terminated in 50 Ω to VDD - 2 V. A latch input is included, which permits tracking, track-andhold, or sample-and-hold modes of operation.

The ADCMP567 is available in a 32-lead LFCSP package.

## ADCMP567

## TABLE OF CONTENTS

Features .............................................................................................. 1

Applications ...................................................................................... 1

Functional Block Diagram .............................................................. 1

General Description ......................................................................... 1

Revision History ............................................................................... 2

Specifications .................................................................................... 3

Electrical Characteristics ............................................................. 3

Absolute Maximum Ratings ........................................................... 5

Thermal Considerations  .............................................................. 5

ESD Caution.................................................................................. 5

Pin Configuration and Function Descriptions ............................ 6

## REVISION HISTORY

12/2020-Rev. A to Rev. B

Changed CP-32-8 to CP-32-7  ......................................  Throughout

Changes to Figure 2  .......................................................................... 6

Updated Outline Dimensions  ....................................................... 14

Change to Ordering Guide............................................................ 14

1/2015-Rev. 0 to Rev. A

Changes to Figure 2 and Table 3 .................................................... 6

Updated Outline Dimensions  ....................................................... 14

Changes to Ordering Guide  .......................................................... 14

## 10/2003-Revision 0: Initial Version

| Timing Information..........................................................................8   |
|-------------------------------------------------------------------------------------------------|
| Applications Information ................................................................9      |
| Clock Timing Recovery................................................................9          |
| Optimizing High Speed Performance........................................9                      |
| Comparator Propagation Delay Dispersion..............................9                          |
| Comparator Hysteresis.............................................................. 10          |
| Minimum Input Slew Rate Requirement ............................... 10                          |
| Typical Application Circuits......................................................... 11        |
| Typical Performance Characteristics .......................................... 12               |
| Outline Dimensions....................................................................... 14    |
| Ordering Guide .......................................................................... 14    |

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS

VCC = +5.0 V, VEE = -5.2 V, VDD = +3.3 V, TA = 25°C, unless otherwise noted.

Table 1.

| Parameter                                                | Symbol         | Condition                             | Min         | Typ   | Max         | Unit   |
|----------------------------------------------------------|----------------|---------------------------------------|-------------|-------|-------------|--------|
| DC INPUT CHARACTERISTICS 1                               |                |                                       |             |       |             |        |
| Input Common-Mode Range                                  | V CM           |                                       | -2.0        |       | +3.0        | V      |
| Input Differential Voltage                               |                |                                       | -5          |       | +5          | V      |
| Input Offset Voltage                                     | V OS           |                                       | -5.0        | ±1.0  | +5.0        | mV     |
| Input Offset Voltage Channel Matching                    |                |                                       |             | ±1.0  |             | mV     |
| Offset Voltage Tempco                                    | DV OS /d T     |                                       |             | 10.0  |             | µV/°C  |
| Input Bias Current                                       | I BC           |                                       | -10         | +24   | +42         | µA     |
| Input Bias Current Tempco                                |                |                                       |             | 10.0  |             | nA/°C  |
| Input Offset Current                                     |                |                                       | -8.0        | ±0.5  | +8.0        | µA     |
| Input Capacitance                                        | C IN           |                                       |             | 0.75  |             | pF     |
| Input Resistance, Differential Mode                      |                |                                       |             | 100   |             | kΩ     |
| Input Resistance, Common-Mode                            |                |                                       |             | 600   |             | kΩ     |
| Open Loop Gain                                           |                |                                       |             | 60    |             | dB     |
| Common-Mode Rejection Ratio                              | CMRR           | V CM = -2.0 V to +3.0 V               |             | 69    |             | dB     |
| Hysteresis                                               |                |                                       |             | ±1.0  |             | mV     |
| LATCH ENABLE CHARACTERISTICS                             |                |                                       |             |       |             |        |
| Latch Enable Common-Mode Range                           | V LCM          |                                       | V DD - 2.0  |       | V DD        | V      |
| Latch Enable Differential Input Voltage                  | V LD           |                                       | 0.4         |       | 2.0         | V      |
| Input High Current                                       |                | at 0.0 V                              | -12         | +6    | +12         | µA     |
| Input Low Current                                        |                | at -2.0 V                             | -12         | +6    | +12         | µA     |
| Latch Setup Time                                         | t S            | 250 mVoverdrive                       |             | 50    |             | ps     |
| Latch to Output Delay                                    | t PLOH, t PLOL | 250 mVoverdrive                       |             | 300   |             | ps     |
| Latch Pulse Width                                        | t PL           | 250 mVoverdrive                       |             | 150   |             | ps     |
| Latch Hold Time                                          | t H            | 250 mVoverdrive                       |             | 90    |             | ps     |
| OUTPUT CHARACTERISTICS                                   |                |                                       |             |       |             |        |
| Output Voltage-High Level                                | V OH           | PECL 50 Ωto -2.0 V                    | V DD - 1.1  |       | V DD - 0.81 | V      |
| Output Voltage-Low Level                                 | V OL           | PECL 50 Ωto -2.0 V                    | V DD - 1.95 |       | V DD - 1.54 | V      |
| Rise Time                                                | t R            | 20% to 80%                            |             | 175   |             | ps     |
| Fall Time                                                | t F            | 20% to 80%                            |             | 140   |             | ps     |
| AC PERFORMANCE                                           |                |                                       |             |       |             |        |
| Propagation Delay                                        | t PD           | 1 V overdrive                         |             | 250   |             | ps     |
| Propagation Delay                                        | t PD           | 20 mVoverdrive                        |             | 300   |             | ps     |
| Propagation Delay Tempco                                 |                |                                       |             | 0.5   |             | ps/°C  |
| Prop Delay Skew-Rising Transition to Falling Transition  |                |                                       |             | ±10   |             | ps     |
| Within Device Propagation Delay Skew- Channel to Channel |                |                                       |             | ±10   |             | ps     |
| Propagation Delay Dispersion vs. Duty Cycle              |                |                                       |             | ±10   |             | ps     |
| Propagation Delay Dispersion vs. Overdrive               |                | 50 mVto 1.5 V                         |             | 35    |             | ps     |
| Propagation Delay Dispersion vs. Overdrive               |                | 20 mVto 1.5 V                         |             | 50    |             | ps     |
| Propagation Delay Dispersion vs. Slew Rate               |                | 0 V to 1 V swing, 20% to 80%,         |             | 50    |             | ps     |
| Propagation Delay Dispersion vs.                         |                | 50 ps and 600 ps 1 V swing, -1.5 V to |             |       |             |        |
| Common-Mode Voltage                                      |                | 2.5 V CM                              |             | 5     |             | ps     |

## ADCMP567

## Data Sheet

| Parameter                            | Symbol   | Condition                                              |   Min | Typ   |   Max | Unit    |
|--------------------------------------|----------|--------------------------------------------------------|-------|-------|-------|---------|
| AC PERFORMANCE (continued)           |          |                                                        |       |       |       |         |
| Equivalent Input Rise Time Bandwidth | BW       | 0 V to 1 V swing, 20% to 80%, 50 ps t R , t F          |  3500 | 5000  |       | MHz     |
| Toggle Rate Minimum Pulse Width      | PW       | >50% output swing  t PD from 10 ns to 200 ps < ±25 ps |       | 5 200 |       | Gbps ps |
| Unit to Unit Propagation Delay Skew  |          |                                                        |       | ±10   |       | ps      |
| POWER SUPPLY                         |          |                                                        |       |       |       |         |
| Positive Supply Current              | I V CC   | at +5.0 V                                              |     7 | 13    |    20 | mA      |
| Negative Supply Current              | I V EE   | at -5.2 V                                              |    60 | 78    |    95 | mA      |
| Logic Supply Current                 | I V DD   | at 3.3 V, without load                                 |     8 | 13    |    18 | mA      |
| Logic Supply Current                 | I V DD   | at 3.3 V, with load                                    |    50 | 65    |    80 | mA      |
| Positive Supply Voltage              | V CC     | Dual                                                   |  4.75 | 5.0   |  5.25 | V       |
| Negative Supply Voltage              | V EE     | Dual                                                   | -4.96 | -5.2  | -5.45 | V       |
| Logic Supply Voltage                 | V DD     | Dual                                                   |   2.5 | 3.3   |   5.0 | V       |
| Power Dissipation                    |          | Dual, without load                                     |   415 | 515   |   615 | mW      |
| Power Dissipation                    |          | Dual, with load                                        |       | 575   |   675 | mW      |
| Power Supply Sensitivity-V CC        | PSS V CC |                                                        |       | 69    |       | dB      |
| Power Supply Sensitivity-V EE        | PSS V EE |                                                        |       | 85    |       | dB      |
| Power Supply Sensitivity-V DD        | PSS V DD |                                                        |       | 70    |       | dB      |

1  Under no circumstances should the input voltages exceed the supply voltages.

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                             | Rating           |
|---------------------------------------|------------------|
| Supply Voltages                       |                  |
| Positive Supply Voltage (V CC to GND) | -0.5 V to +6.0 V |
| Negative Supply Voltage (V EE to GND) | -6.0 V to +0.5 V |
| Logic Supply Voltage (V DD to GND)    | -0.5 V to +6.0 V |
| Ground Voltage Differential           | -0.5 V to +0.5 V |
| Input Voltages                        |                  |
| Input Common-Mode Voltage             | -3.0 V to +4.0 V |
| Differential Input Voltage            | -7.0 V to +7.0 V |
| Input Voltage, Latch Controls         | -0.5 V to +5.5 V |
| Output Current                        | 30mA             |
| Temperature                           |                  |
| Operating Temperature, Ambient        | -40°C to +85°C   |
| Operating Temperature, Junction       | 125°C            |
| Storage Temperature Range             | -65°C to +150°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL CONSIDERATIONS

The ADCMP567 LFCSP 32-lead package option has a θJA (junction-to-ambient thermal resistance) of 27.2°C/W in still air.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. ADCMP567 Pin Configuration

<!-- image -->

Table 3. ADCMP567 Pin Function Descriptions

|   Pin No. | Mnemonic   | Function                                                                                                                                                                                                                                                                                                                                      |
|-----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | GND        | Analog Ground.                                                                                                                                                                                                                                                                                                                                |
|         2 | -INA       | Inverting analog input of the differential input stage for Channel A. The inverting A input must be driven in conjunction with the noninverting A input.                                                                                                                                                                                      |
|         3 | +INA       | Noninverting analog input of the differential input stage for Channel A. The noninverting A input must be driven in conjunction with the inverting A input.                                                                                                                                                                                   |
|         4 | V CC       | Positive Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|         5 | V CC       | Positive Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|         6 | +INB       | Noninverting analog input of the differential input stage for Channel B. The noninverting B input must be driven in conjunction with the inverting B input.                                                                                                                                                                                   |
|         7 | -INB       | Inverting analog input of the differential input stage for Channel B. The inverting B input must be driven in conjunction with the noninverting B input.                                                                                                                                                                                      |
|         8 | GND        | Analog Ground.                                                                                                                                                                                                                                                                                                                                |
|         9 | GND        | Analog Ground.                                                                                                                                                                                                                                                                                                                                |
|        10 | LEB        | One of two complementary inputs for Channel B Latch Enable. In the compare mode (logic low), the output will track changes at the input of the comparator. In the latch mode (logic high), the output will reflect the input state just prior to the comparator's being placed in the latch mode. LEB must be driven in conjunction with LEB. |
|        11 | LEB        | One of two complementary inputs for Channel B Latch Enable. In the compare mode (logic high), the output will track changes at the input of the comparator. In the latch mode (logic low), the output will reflect the input state just prior to the comparator's being placed in the latch mode. LEB must be driven in conjunction with LEB. |
|        12 | NC         | No Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                       |
|        13 | V DD       | Logic Supply Terminal.                                                                                                                                                                                                                                                                                                                        |
|        14 | QB         | One of two complementary outputs for Channel B. QB will be at logic low if the analog voltage at the noninverting input is greater than the analog voltage at the inverting input (provided the comparator is in the compare mode). See the LEB description (Pin 11) for more information.                                                    |
|        15 | QB         | One of two complementary outputs for Channel B. QB will be at logic high if the analog voltage at the noninverting input is greater than the analog voltage at the inverting input (provided the comparator is in the compare mode). See the LEB description (Pin 11) for more information.                                                   |
|        16 | V DD       | Logic Supply Terminal.                                                                                                                                                                                                                                                                                                                        |
|        17 | V EE       | Negative Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        18 | NC         | No Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                       |
|        19 | V EE       | Negative Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        20 | V CC       | Positive Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        21 | V CC       | Positive Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        22 | V EE       | Negative Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        23 | NC         | No Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                       |

## Data Sheet

## ADCMP567

|   Pin No. | Mnemonic   | Function                                                                                                                                                                                                                                                                                                                                      |
|-----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        24 | V EE       | Negative Supply Terminal.                                                                                                                                                                                                                                                                                                                     |
|        25 | V DD       | Logic Supply Terminal.                                                                                                                                                                                                                                                                                                                        |
|        26 | QA         | One of two complementary outputs for Channel A. QAwill be at logic high if the analog voltage at the noninverting input is greater than the analog voltage at the inverting input (provided the comparator is in the compare mode). See the LEA description (Pin 30) for more information.                                                    |
|        27 | QA         | One of two complementary outputs for Channel A. QA will be at logic low if the analog voltage at the noninverting input is greater than the analog voltage at the inverting input (provided the comparator is in the compare mode). See the LEA description (Pin 30) for more information.                                                    |
|        28 | V DD       | Logic Supply Terminal.                                                                                                                                                                                                                                                                                                                        |
|        29 | NC         | No Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                       |
|        30 | LEA        | One of two complementary inputs for Channel A Latch Enable. In the compare mode (logic high), the output will track changes at the input of the comparator. In the latch mode (logic low), the output will reflect the input state just prior to the comparator's being placed in the latch mode. LEA must be driven in conjunction with LEA. |
|        31 | LEA        | One of two complementary inputs for Channel A Latch Enable. In the compare mode (logic low), the output will track changes at the input of the comparator. In the latch mode (logic high), the output will reflect the input state just prior to the comparator's being placed in the latch mode. LEA must be driven in conjunction with LEA. |
|        32 | GND EPAD   | Analog Ground. Exposed Pad. The recommended connection for the exposed pad is ground.                                                                                                                                                                                                                                                         |

## TIMING INFORMATION

Figure 3. System Timing Diagram

<!-- image -->

The timing diagram in Figure 3 shows the ADCMP567 compare and latch features. Table 4 describes the terms in the diagram.

Table 4. Timing Descriptions

| Symbol   | Timing                            | Description                                                                                                                                                       |
|----------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| t PDH    | Input to output high delay        | Propagation delay measured from the time the input signal crosses the reference (± the input offset voltage) to the 50% point of an output low-to-high transition |
| t PDL    | Input to output low delay         | Propagation delay measured from the time the input signal crosses the reference (± the input offset voltage) to the 50% point of an output high-to-low transition |
| t PLOH   | Latch enable to output high delay | Propagation delay measured from the 50% point of the Latch Enable signal low-to-high transition to the 50% point of an output low-to-high transition              |
| t PLOL   | Latch enable to output low delay  | Propagation delay measured from the 50% point of the Latch Enable signal low-to-high transition to the 50% point of an output high-to-low transition              |
| t H      | Minimum hold time                 | Minimum time after the negative transition of the Latch Enable signal that the input signal must remain unchanged to be acquired and held at the outputs          |
| t PL     | Minimum latch enable pulse width  | Minimum time that the Latch Enable signal must be high to acquire an input signal change                                                                          |
| t S      | Minimum setup time                | Minimum time before the negative transition of the Latch Enable signal that an input signal change must be present to be acquired and held at the outputs         |
| t R      | Output rise time                  | Amount of time required to transition from a low to a high output as measured at the 20% and 80% points                                                           |
| t F      | Output fall time                  | Amount of time required to transition from a high to a low output as measured at the 20% and 80% points                                                           |
| V OD     | Voltage overdrive                 | Difference between the differential input and reference input voltages                                                                                            |

## APPLICATIONS INFORMATION

The ADCMP567 comparators are very high speed devices. Consequently, high speed design techniques must be employed to achieve the best performance. The most critical aspect of any ADCMP567 design is the use of a low impedance ground plane. A ground plane, as part of a multilayer board, is recommended for proper high speed performance. Using a continuous conductive plane over the surface of the circuit board can create this, allowing breaks in the plane only for necessary signal paths. The ground plane provides a low inductance ground, eliminating any potential differences at different ground points throughout the circuit board caused by ground bounce. A proper ground plane also minimizes the effects of stray capacitance on the circuit board.

It is also important to provide bypass capacitors for the power supply in a high speed application. A 1 µF electrolytic bypass capacitor should be placed within 0.5 inches of each power supply pin to ground. These capacitors will reduce any potential voltage ripples from the power supply. In addition, a 10 nF ceramic capacitor should be placed as close as possible from the power supply pins on the ADCMP567 to ground. These capacitors act as a charge reservoir for the device during high frequency switching.

The LATCH ENABLE input is active low (latched). If the latching function is not used, the LATCH ENABLE input should be attached to VDD (VDD is a PECL logic high), and the complementary input, LATCH ENABLE, should be tied to VDD - 2.0 V. This will disable the latching function.

Occasionally, one of the two comparator stages within the ADCMP567 will not be used. The inputs of the unused comparator should not be allowed to float. The high internal gain may cause the output to oscillate (possibly affecting the comparator that is being used) unless the output is forced into a fixed state. This is easily accomplished by ensuring that the two inputs are at least one diode drop apart, while also appropriately connecting the LATCH ENABLE and LATCH ENABLE inputs as described above.

The best performance is achieved with the use of proper PECL terminations. The open emitter outputs of the ADCMP567 are designed to be terminated through 50 Ω resistors to VDD -2.0 V, or any other equivalent PECL termination. If high speed PECL signals must be routed more than a centimeter, microstrip or stripline techniques may be required to ensure proper transition times and prevent output ringing.

## CLOCK TIMING RECOVERY

Comparators are often used in digital systems to recover clock timing signals. High speed square waves transmitted over a distance, even tens of centimeters, can become distorted due to stray capacitance and inductance. Poor layout or improper termination can also cause reflections on the transmission line, further distorting the signal waveform. A high speed comparator can be used to recover the distorted waveform while maintaining a minimum of delay.

## OPTIMIZING HIGH SPEED PERFORMANCE

As with any high speed comparator amplifier, proper design and layout techniques should be used to ensure optimal performance from the ADCMP567. The performance limits of high speed circuitry can easily be a result of stray capacitance, improper ground impedance, or other layout issues.

Minimizing resistance from source to the input is an important consideration in maximizing the high speed operation of the ADCMP567. Source resistance in combination with equivalent input capacitance could cause a lagged response at the input, thus delaying the output. The input capacitance of the ADCMP567 in combination with stray capacitance from an input pin to ground could result in several picofarads of equivalent capacitance. A combination of 3 kΩ source resistance and 5 pF of input capacitance yields a time constant of 15 ns, which is significantly slower than the sub 500 ps capability of the ADCMP567. Source impedances should be significantly less than 100 Ω for best performance.

Sockets should be avoided due to stray capacitance and inductance. If proper high speed techniques are used, the ADCMP567 should be free from oscillation when the comparator input signal passes through the switching threshold.

## COMPARATOR PROPAGATION DELAY DISPERSION

The ADCMP567 has been specifically designed to reduce propagation delay dispersion over an input overdrive range of 100 mV to 1 V. Propagation delay overdrive dispersion is the change in propagation delay that results from a change in the degree of overdrive (how far the switching point is exceeded by the input). The overall result is a higher degree of timing accuracy since the ADCMP567 is far less sensitive to input variations than most comparator designs.

Propagation delay dispersion is a specification that is important in critical timing applications such as ATE, bench instruments, and nuclear instrumentation. Overdrive dispersion is defined

## ADCMP567

as the variation in propagation delay as the input overdrive conditions are changed (see Figure 4). For the ADCMP567, overdrive dispersion is typically 35 ps as the overdrive is changed from 100 mV to 1 V. This specification applies for both positive and negative overdrive since the ADCMP567 has equal delays for positive and negative going inputs.

The 35 ps propagation delay overdrive dispersion of the ADCMP567 offers considerable improvement of the 100 ps dispersion of other similar series comparators.

<!-- image -->

03633-0-004

Figure 4. Propagation Delay Dispersion

## COMPARATOR HYSTERESIS

The addition of hysteresis to a comparator is often useful in a noisy environment or where it is not desirable for the comparator to toggle between states when the input signal is at the switching threshold. The transfer function for a comparator with hysteresis is shown in Figure 5. If the input voltage approaches the threshold from the negative direction, the comparator will switch from a 0 to a 1 when the input crosses +VH/2. The new switching threshold becomes -VH/2. The comparator will remain in a 1 state until the threshold -VH/2 is crossed coming from the positive direction. In this manner, noise centered on 0 V input will not cause the comparator to switch states unless it exceeds the region bounded by ±VH/2.

Positive feedback from the output to the input is often used to produce hysteresis in a comparator (see Figure 9). The major problem with this approach is that the amount of hysteresis varies with the output logic levels, resulting in a hysteresis that is not symmetrical around zero.

Another method to implement hysteresis is generated by introducing a differential voltage between LATCH ENABLE and LATCH ENABLE inputs (see Figure 10). Hysteresis generated in this manner is independent of output swing and is symmetrical around zero. The variation of hysteresis with input voltage is shown in Figure 6.

03633-0-005 Figure 5. Comparator Hysteresis Transfer Function

<!-- image -->

Figure 6. Comparator Hysteresis Transfer Function Using Latch Enable Input

<!-- image -->

## MINIMUM INPUT SLEW RATE REQUIREMENT

As for all high speed comparators, a minimum slew rate must be met to ensure that the device does not oscillate when the input crosses the threshold. This oscillation is due in part to the high input bandwidth of the comparator and the parasitics of the package. Analog Devices recommends a slew rate of 5 V/µs or faster to ensure a clean output transition. If slew rates less than 5 V/µs are used, then hysteresis should be added to reduce the oscillation.

## TYPICAL APPLICATION CIRCUITS

<!-- image -->

03632-0-007

Figure 7. High Speed Sampling Circuits

<!-- image -->

03632-0-008

Figure 8. High Speed Window Comparator

<!-- image -->

Figure 9. Hysteresis Using Positive Feedback

<!-- image -->

ALL RESISTORS 50

UNLESS OTHERWISE NOTED

03632-0-010

Figure 10. Hysteresis Using Latch Enable Input

<!-- image -->

03632-0-011

Figure 11. How to Interface a PECL Output to an Instrument with a 50 Ω to Ground Input



## TYPICAL PERFORMANCE CHARACTERISTICS

VCC = +5.0 V, VEE = -5.2 V, VDD = +3.3 V, TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 12. Input Bias Current vs. Input Voltage

<!-- image -->

Figure 13. Input Offset Voltage vs. Temperature

<!-- image -->

Figure 14. Rise Time vs. Temperature

<!-- image -->

Figure 15. Input Bias Current vs. Temperature

Figure 16. Hysteresis vs. ∆Latch

<!-- image -->

Figure 17. Fall Time vs. Temperature

<!-- image -->

<!-- image -->

Figure 18. Propagation Delay vs. Temperature

<!-- image -->

Figure 19. Propagation Delay Error vs. Overdrive Voltage

<!-- image -->

Figure 20. Rise and Fall of Outputs vs. Time

Figure 21. Propagation Delay vs. Common-Mode Voltage

<!-- image -->

Figure 22. Propagation Delay Error vs. Pulse Width

<!-- image -->

03632-0-023

## OUTLINE DIMENSIONS

<!-- image -->

TOP VIEW

<!-- image -->

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-WHHD

Figure 23. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body and 0.75 mm Package Height (CP-32-7)

Dimensions shown in millimeters

| Model 1      | Temperature Range   | Package Description                           | Package Option   |
|--------------|---------------------|-----------------------------------------------|------------------|
| ADCMP567BCPZ | -40°C to +85°C      | 32-Lead Lead Frame Chip Scale Package [LFCSP] | CP-32-7          |

## ORDERING GUIDE

1  Z = RoHS Compliant Part

PKG-003898

<!-- image -->

09-12-2018-A