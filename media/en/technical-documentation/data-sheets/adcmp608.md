<!-- lastmod 2019-05-11 -->
<!-- image -->

Data Sheet

## FEATURES

Fully specified rail to rail at VCC = 2.5 V to 5.5 V Input common-mode voltage from -0.2 V to VCC + 0.2 V Low glitch CMOS-/TTL-compatible output stage 40 ns propagation delay Low power: 1 mW at 2.5 V Shutdown pin Power supply rejection &gt; 60 dB -40°C to +125°C operation

## APPLICATIONS

High speed instrumentation Clock and data signal restoration Logic level shifting or translation High speed line receivers Threshold detection Peak and zero-crossing detectors High speed trigger circuitry Pulse-width modulators

Current-/voltage-controlled oscillators

## GENERAL DESCRIPTION

The ADCMP608 is a fast comparator fabricated on XFCB2, an Analog Devices, Inc. proprietary process. This comparator is exceptionally versatile and easy to use. Features include an input range from VEE - 0.2 V to VCC + 0.2 V , low noise, TTL-/CMOScompatible output drivers, and shutdown inputs. The device offers 40 ns propagation delays driving a 15 pF load with 10 mV overdrive on 500 µA typical supply current.

A flexible power supply scheme allows the device to operate with a single +2.5 V positive supply and a -0.2 V to + 2.7 V input signal range up to a +5.5 V positive supply with a -0.2 V to +5.7 V input signal range.

## Rail-to-Rail, Fast, Low Power 2.5 V to 5.5 V, Single-Supply TTL/CMOS Comparator

[ADCMP608](http://analog.com/ADCMP608?doc=ADCMP608.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The TTL-/CMOS-compatible output stage is designed to drive up to 15 pF with full rated timing specifications and to degrade in a graceful and linear fashion as additional capacitance is added. The input stage of the comparator offers robust protection against large input overdrive, and the outputs do not phase reverse when the valid input signal range is exceeded.

The ADCMP608 is available in a tiny 6-lead SC70 package with a single-ended output and a shutdown pin.

## ADCMP608

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Characteristics............................................................. 3                   |
| Absolute Maximum Ratings............................................................ 4                      |
| Thermal Resistance ...................................................................... 4                 |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Typical Performance Characteristics ............................................. 6                         |
| REVISION HISTORY                                                                                            |
| 11/14-Rev. Ato Rev. B Changes to Figure 7 and Figure 8................................................... 6 |
| 6/14-Rev. 0 to Rev.A                                                                                        |
| Changes to Temperature Parameter, Table 2................................. 4                                |
| Changes to Ordering Guide.......................................................... 10                      |

4/07-Revision 0: Initial Version

| Applications Information.................................................................7   |
|----------------------------------------------------------------------------------------------|
| Power/Ground Layout and Bypassing........................................7                   |
| TTL-/CMOS-Compatible Output Stage ....................................7                      |
| Optimizing Performance..............................................................7        |
| Comparator Propagation Delay Dispersion..................................7                   |
| Crossover Bias Point .....................................................................8  |
| Minimum Input Slew Rate Requirement...................................8                      |
| Typical Application Circuits ............................................................9   |
| Outline Dimensions....................................................................... 10 |
| Ordering Guide .......................................................................... 10 |

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS

VCC = 2.5 V, TA = -40°C to +125°C. Typical values are TA = 25°C, unless otherwise noted.

## Table 1.

| Parameter                                           | Symbol    | Conditions                              | Min        | Typ          | Max   | Unit   |
|-----------------------------------------------------|-----------|-----------------------------------------|------------|--------------|-------|--------|
| DC INPUT CHARACTERISTICS                            |           |                                         |            |              |       |        |
| Voltage Range                                       | V P , V N | V CC = 2.5 V to 5.5 V                   | -0.2       |              | V CC  | V      |
| Common-Mode Range                                   |           | V CC = 2.5 V to 5.5 V                   | -0.2       |              | V CC  | V      |
| Differential Voltage                                |           | V CC = 2.5 V to 5.5 V                   |            |              | V CC  | V      |
| Offset Voltage                                      | V OS      |                                         | -5.0       | ±3           | +5.0  | mV     |
| Bias Current                                        | I P , I N |                                         | -0.4       |              | +0.4  | µA     |
| Offset Current                                      |           |                                         | -1.0       |              | +1.0  | µA     |
| Capacitance                                         | C P , C N |                                         |            | 1            |       | pF     |
| Resistance, Differential Mode                       |           | -0.5 V to V CC + 0.5 V                  | 200        |              | 7000  | kΩ     |
| Resistance,CommonMode                               |           | -0.5 V to V CC + 0.5 V                  | 100        |              | 4000  | kΩ     |
| Active Gain                                         | A V       |                                         |            | 80           |       | dB     |
| Common-Mode Rejection                               | CMRR      | V CC =2.5 V,V CM =-0.2Vto2.7V           | 45         |              |       | dB     |
|                                                     |           | V CC = 5.5 V                            | 45         |              |       | dB     |
| SHUTDOWNPINCHARACTERISTICS 1                        |           |                                         |            |              |       |        |
| V IH                                                |           | Comparator is operating                 | 2.0        |              | V CC  | V      |
| V IL                                                |           | Shutdown guaranteed                     | -0.2       | +0.4         | +0.4  | V      |
| I IH                                                |           | V IH = V CC                             | -6         |              | +6    | µA     |
| Sleep Time                                          | t SD      | l CC < 100 µA                           |            | 300          |       | ns     |
| Wake-Up Time                                        | t H       | V PP = 10 mV, output valid              |            | 150          |       | ns     |
| DC OUTPUT CHARACTERISTICS                           |           | V CC = 2.5 V to 5.5 V                   |            |              |       |        |
| Output Voltage High Level                           | V OH      | I OH = 0.8 mA, V CC = 2.5 V             | V CC - 0.4 |              |       | V      |
| Output Voltage Low Level                            | V OL      | I OL = 0.8 mA, V CC = 2.5 V             |            |              | 0.4   | V      |
| AC PERFORMANCE 2                                    |           | V CC = 2.5 V to 5.5 V                   |            |              |       |        |
| Rise Time/Fall Time                                 | t R , t F | 10% to 90%, V CC = 2.5 V                |            | 25 to 50     |       | ns     |
|                                                     |           | 10% to 90%, V CC = 5.5 V                |            | 45 to 75     |       | ns     |
| Propagation Delay                                   | t PD      | V OD = 10 mV, V CC = 2.5 V              |            | 30 to 50     |       | ns     |
| Propagation Delay Skew-Rising to Falling Transition |           | V OD = 50 mV, V CC = 5.5 V V CC = 2.5 V |            | 35 to 60 4.5 |       | ns ns  |
|                                                     |           | V CC = 5.5 V                            |            | 8            |       | ns     |
| Overdrive Dispersion                                |           | 10mV<V OD < 125mV                       |            | 12           |       | ns     |
| Common-Mode Dispersion                              |           | -0.2 V < V CM < V CC + 0.2 V            |            | 1.5          |       | ns     |
| POWER SUPPLY                                        |           |                                         |            |              |       |        |
| Supply Voltage Range                                | V CC      |                                         | 2.5        |              | 5.5   | V      |
| Positive Supply Current                             | I VCC     | V CC = 2.5 V                            |            | 550          | 800   | µA     |
|                                                     |           | V CC = 5.5 V                            |            | 800          | 1300  | µA     |
| Power Dissipation                                   | P D       | V CC = 2.5 V                            |            | 1.375        | 2.0   | mW     |
|                                                     |           | V CC = 5.5 V                            |            | 4.95         | 7.15  | mW     |
| Power Supply Rejection Ratio                        | PSRR      | V CC = 2.5 V to 5.5 V                   | -50        |              |       | dB µA  |
| Shutdown Current                                    | I SD      | V CC = 2.5 V to 5.5 V                   |            | 250          | 350   |        |

1  The output will be in a high impedance mode when the device is in shutdown mode. Note that this feature should be used with care since the enable/disable time is much longer than with a true tristate output.

2 VIN = 100 mV square input at 1 MHz, VCM = 0 V, CL = 15 pF, VCCI = 2.5 V, unless otherwise noted.

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                       | Rating              |
|---------------------------------|---------------------|
| Supply Voltages                 |                     |
| Supply Voltage (V CC to GND)    | -0.5V to +6.0V      |
| Supply Differential             | -6.0V to +6.0V      |
| Input Voltages                  |                     |
| Input Voltage                   | -0.5V toV CC + 0.5V |
| Differential Input Voltage      | ±(V CC + 0.5 V)     |
| Maximum Input/Output Current    | ±50mA               |
| Shutdown Control Pin            |                     |
| Applied Voltage (S DN to GND)   | -0.5V toV CC + 0.5V |
| Maximum Input/Output Current    | ±50mA               |
| Output Current                  | ±50mA               |
| Temperature                     |                     |
| Operating Temperature, Ambient  | -40°C to +125°C     |
| Operating Temperature, Junction | 150°C               |
| Storage Temperature Range       | -65°C to +150°C     |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θJA is specified for the worst-case conditions, that is, a device soldered in a circuit board for surface-mount packages.

## Table 3. Thermal Resistance

| PackageType          |   θ JA 1 | Unit   |
|----------------------|----------|--------|
| ADCMP608 6-Lead SC70 |      426 | °C/W   |

1 Measurement in still air.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

## Table 4. ADCMP608 Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                                                                  |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | Q          | Noninverting Output. Qis at logic high if the analog voltage at the noninverting input,V P , is greater than the analog voltage at the inverting input,V N . |
|         2 | V EE       | Negative Supply Voltage.                                                                                                                                     |
|         3 | V P        | Noninverting Analog Input.                                                                                                                                   |
|         4 | V N        | Inverting Analog Input.                                                                                                                                      |
|         5 | S DN       | Shutdown. Drive this pin low to shut down the device.                                                                                                        |
|         6 | V CC       | V CC Supply.                                                                                                                                                 |

## TYPICAL PERFORMANCE CHARACTERISTICS

VCC =2.5 V , TA = 25°C, unless otherwise noted.

<!-- image -->

Figure 3. Input Bias Current vs. Input Common-Mode Voltage

<!-- image -->

Figure 4. Propagation Delay vs. Input Overdrive at VCC = 2.5 V and 5.5 V

<!-- image -->

Figure 5. Load Current (mA) vs. VOH/VOL

<!-- image -->

Figure 6. Propagation Delay vs. Input Common-Mode Voltage

Figure 7. 1 MHz Output Voltage Waveform VCC = 2.5 V

<!-- image -->

Figure 8. 1 MHz Output Voltage Waveform VCC = 5.5 V

<!-- image -->

## APPLICATIONS INFORMATION

## POWER/GROUND LAYOUT AND BYPASSING

The ADCMP608 comparator is a high speed device. Despite the low noise output stage, it is essential to use proper high speed design techniques to achieve the specified performance. Because comparators are uncompensated amplifiers, feedback in any phase relationship is likely to cause oscillations or undesired hysteresis. Of critical importance is the use of low impedance supply planes, particularly the output supply plane (VCC) and the ground plane (GND). Individual supply planes are recommended as part of a multilayer board. Providing the lowest inductance return path for switching currents ensures the best possible performance in the target application.

It is also important to adequately bypass the input and output supplies. A 0.1 µF bypass capacitor should be placed as close as possible to the VCC supply pin. The capacitor should be connected to the GND plane with redundant vias placed to provide a physically short return path for output currents flowing back from ground to the VCC pin. High frequency bypass capacitors should be carefully selected for minimum inductance and ESR. Parasitic layout inductance should also be strictly controlled to maximize the effectiveness of the bypass at high frequencies.

## TTL-/CMOS-COMPATIBLE OUTPUT STAGE

Specified propagation delay performance can be achieved only by keeping the capacitive load at or below the specified minimums. The output of the ADCMP608 is designed to directly drive one Schottky TTL, or three low power Schottky TTL loads, or the equivalent. For large fan outs, buses, or transmission lines, use an appropriate buffer to maintain the excellent speed and stability of the comparator.

With the rated 15 pF load capacitance applied, more than half of the total device propagation delay is output stage slew time. Because of this, the total propagation delay decreases as VCC decreases, and instability in the power supply may appear as excess delay dispersion.

Delay is measured to the 50% point for whatever supply is in use; thus, the fastest times are observed with the VCC supply at 2.5 V , and larger values are observed when driving loads that switch at other levels.

Overdrive and input slew rate dispersions are not significantly affected by output loading and VCC variations.

The TTL-/CMOS-compatible output stage is shown in the simplified schematic diagram (see Figure 9). Because of its inherent symmetry and generally good behavior, this output stage is readily adaptable for driving various filters and other unusual loads.

Figure 9. Simplified Schematic Diagram of TTL-/CMOS-Compatible Output Stage

<!-- image -->

## OPTIMIZING PERFORMANCE

As with any high speed comparator, proper design and layout techniques are essential for obtaining the specified performance. Stray capacitance, inductance, common power and ground impedances, or other layout issues can severely limit performance and can often cause oscillation. The source impedance should be minimized as much as is practicable. High source impedance, in combination with the parasitic input capacitance of the comparator, causes an undesirable degradation in bandwidth at the input, thus degrading the overall response. Higher impedances encourage undesired coupling.

## COMPARATOR PROPAGATION DELAY DISPERSION

The ADCMP608 comparator is designed to reduce propagation delay dispersion over a wide input overdrive range of 10 mV to VCC - 1 V . Propagation delay dispersion is the variation in propagation delay that results from a change in the degree of overdrive or slew rate (how far or how fast the input signal exceeds the switching threshold).

Propagation delay dispersion is a specification that becomes important in high speed, time-critical applications, such as data communication, automatic test and measurement, and instrumentation. It is also important in event-driven applications, such as pulse spectroscopy, nuclear instrumentation, and medical imaging. Dispersion is defined as the variation in propagation delay as the input overdrive conditions are changed (see Figure 10 and Figure 11).

ADCMP608 dispersion is typically &lt; 12 ns as the overdrive varies from 10 mV to 125 mV . This specification applies to both positive and negative signals because the device has very closely matched delays for both positive-going and negative-going inputs, and very low output skews. Remember to add the actual device offset to the overdrive for repeatable dispersion measurements.

Figure 11. Propagation Delay-Slew Rate Dispersion

<!-- image -->

## CROSSOVER BIAS POINT

Rail-to-rail inputs of this type, in both op amps and comparators, have a dual front-end design. Certain devices are active near the VCC rail and others are active near the VEE rail. At some predetermined point in the common-mode range, a crossover occurs. At this point, normally VCC/2, the direction of the bias current reverses and there are changes in measured offset voltages and currents.

The ADCMP608 slightly elaborates on this scheme. Crossover points can be found at approximately 0.8 V and 1.6 V.

## MINIMUM INPUT SLEW RATE REQUIREMENT

With the rated load capacitance and normal good PC board design practice, as discussed in the Optimizing Performance section, these comparators should be stable at any input slew rate with no hysteresis. Broadband noise from the input stage is observed in place of the violent chattering seen with most other high speed comparators. With additional capacitive loading or poor bypassing, oscillation may be encountered. These oscillations are due to the high gain bandwidth of the comparator in combination with feedback through parasitics in the package and PC board. In many applications, chattering is not harmful.

## Data Sheet

## TYPICAL APPLICATION CIRCUITS

Figure 12. Self-Biased, 50% Slicer

<!-- image -->

## ADCMP608

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

Figure 14. 6-Lead Thin Shrink Small Outline Transistor Package [SC70] (KS-6) Dimensions shown in millimeters

| Model 1            | Temperature Range   | Package Description                                        | Package Option   | Branding   |
|--------------------|---------------------|------------------------------------------------------------|------------------|------------|
| ADCMP608BKSZ-R2    | -40°C to +125°C     | 6-Lead Thin Shrink Small Outline Transistor Package [SC70] | KS-6             | G0U        |
| ADCMP608BKSZ-RL    | -40°C to +125°C     | 6-Lead Thin Shrink Small Outline Transistor Package [SC70] | KS-6             | G0U        |
| ADCMP608BKSZ-REEL7 | -40°C to +125°C     | 6-Lead Thin Shrink Small Outline Transistor Package [SC70] | KS-6             | G0U        |
| EVAL-ADCMP608BKSZ  |                     | Evaluation Board                                           |                  |            |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

072809-A