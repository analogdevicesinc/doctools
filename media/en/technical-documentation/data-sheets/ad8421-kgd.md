<!-- lastmod 2019-10-03 -->
<!-- image -->

## Known Good Die

## FEATURES

Low power: 2.3 mA maximum quiescent current Low noise

3.2 nV/√Hz maximum input voltage noise at 1 kHz 200 fA/√Hz typical current noise spectral density at 1 kHz Excellent ac specifications

10 MHz typical small signal bandwidth (gain = 1 and gain = 10)

2 MHz typical small signal bandwidth (gain = 100)

0.6 µs typical settling time to 0.001% (gain = 10)

80 dB minimum CMRR at 20 kHz (gain = 1)

- 35 V/µs typical slew rate

## High precision dc performance

- 84 dB minimum CMRR DC to 60 Hz with 1 kΩ source imbalance (gain = 1)
- 0.9 µV/°C maximum input offset voltage, average temperature coefficient

5 ppm/°C maximum gain vs. temperature (gain = 1)

2 nA maximum input bias current Inputs protected to 40 V from opposite supply ±2.5 V to ±18 V dual supply (+5 V to +36 V single supply) Gain set with a single resistor (gain = 1 to 10,000) Known Good Die (KGD): these die are fully guaranteed to data sheet specification.

## APPLICATIONS

Medical instrumentation Precision data acquisition Microphone preamplification Vibration analysis Multiplexed input applications ADC driver

## GENERAL DESCRIPTION

The AD8421-KGD is a low cost, low power, low noise, ultralow bias current, high speed instrumentation amplifier that is ideally suited for a broad spectrum of signal conditioning and data acquisition applications. This device features high CMRR, allowing the device to extract low level signals in the presence of high frequency common-mode noise over a wide temperature range.

## 3 nV/√Hz, Low Power Instrumentation Amplifier

[AD8421-KGD](https://www.analog.com/AD8421?doc=AD8421-KGD.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

20316-001

Figure 1.

The 10 MHz small signal bandwidth, 35 V/µs slew rate, and 0.6 µs settling time to 0.001% (gain = 10) allow the AD8421-KGD to amplify high speed signals and excel in applications that require high channel count, multiplexed systems. Even at higher gains, the current feedback architecture maintains high performance. For example, at gain = 100, the bandwidth is 2 MHz and the settling time is 0.8 µs.

The AD8421-KGD has excellent distortion performance, making this device suitable for use in demanding applications such as vibration analysis.

The AD8421-KGD delivers 3 nV/√Hz input voltage noise and 200 fA/√Hz current noise spectral density with only 2 mA quiescent current, making the device an ideal choice for measuring low level signals. For applications with high source impedance, the AD8421-KGD employs innovative process technology and design techniques to provide noise performance that is limited only by the sensor.

The AD8421-KGD uses unique protection methods to ensure robust inputs while still maintaining low noise. This protection allows input voltages up to 40 V from the opposite supply rail without damage to the device.

A single resistor sets the gain from 1 to 10,000. The reference pin can be used to apply a precise offset to the output voltage. The AD8421-KGD is specified from -40°C to +85°C and

operational to 125°C.

Additional application and technical information can be found in the AD8421 data sheet.

## [AD8421-KGD](https://www.analog.com/AD8421?doc=AD8421-KGD.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 6                      |

## REVISION HISTORY

9/2019-Revision 0: Initial Version

## Known Good Die

| ESD Caution...................................................................................6   |
|---------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions..............................7                        |
| Outline Dimensions..........................................................................8     |
| Die Specifications and Assembly Recommendations...............8                                   |
| Ordering Guide .............................................................................8     |

## SPECIFICATIONS

Supply voltage (VS) = ±15 V, REF voltage (VREF) = 0 V , TA = 25°C, gain = 1, and load resistance (RL) = 2 kΩ, unless otherwise noted.

Table 1.

| Parameter                                   | Test Conditions/Comments                      |   Min |   Typ |   Max | Unit   |
|---------------------------------------------|-----------------------------------------------|-------|-------|-------|--------|
| COMMON-MODEREJECTION RATIO (CMRR)           |                                               |       |       |       |        |
| CMRR DC to 60 Hz with 1 kΩ Source Imbalance | Common-mode voltage (V CM ) = -10V to +10V    |       |       |       |        |
| Gain = 1                                    |                                               |    84 |       |       | dB     |
| Gain = 10                                   |                                               |   104 |       |       | dB     |
| Gain = 100                                  |                                               |   124 |       |       | dB     |
| Gain = 1000                                 |                                               |   134 |       |       | dB     |
| Over Temperature, Gain = 1                  | T A = -40°C to +85°C                          |    80 |       |       | dB     |
| CMRR at 20 kHz                              | V CM = -10V to +10V                           |       |       |       |        |
| Gain = 1                                    |                                               |    80 |       |       | dB     |
| Gain = 10                                   |                                               |    90 |       |       | dB     |
| Gain = 100                                  |                                               |   100 |       |       | dB     |
| Gain = 1000                                 |                                               |   100 |       |       | dB     |
| NOISE                                       |                                               |       |       |       |        |
| Voltage Noise, 1 kHz 1                      | +IN voltage (V +IN ), -IN voltage (V -IN )=0V |       |       |       |        |
| Input Voltage Noise, e ni                   |                                               |       |     3 |   3.2 | nV/√Hz |
| Output Voltage Noise, e no                  |                                               |       |       |    60 | nV/√Hz |
| Peak to Peak, Referred to Input (RTI)       | Frequency = 0.1 Hz to 10 Hz                   |       |       |       |        |
| Gain = 1                                    |                                               |       |     2 |       | µV p-p |
| Gain = 10                                   |                                               |       |   0.5 |       | µV p-p |
| Gain = 100 to 1000                          |                                               |       |  0.07 |       | µV p-p |
| Current Noise                               |                                               |       |       |       |        |
| Spectral Density                            | Frequency = 1 kHz                             |       |   200 |       | fA/√Hz |
| Peak to Peak, RTI                           | Frequency = 0.1 Hz to 10 Hz                   |       |    18 |       | pAp-p  |
| VOLTAGE OFFSET 2                            |                                               |       |       |       |        |
| Input Offset Voltage,V OSI                  | V S = ±5Vto ±15V                              |       |       |    70 | µV     |
| Over Temperature                            | T A = -40°C to +85°C                          |       |       |   135 | µV     |
| Average Temperature Coefficient             |                                               |       |       |   0.9 | µV/°C  |
| Output Offset Voltage,V OSO                 |                                               |       |       |   600 | µV     |
| Over Temperature                            | T A = -40°C to +85°C                          |       |       |     1 | mV     |
| Average Temperature Coefficient             |                                               |       |       |     9 | µV/°C  |
| Offset RTI vs. Supply (Power Supply Ratio)  | V S = ±2.5V to ±18V                           |       |       |       |        |
| Gain = 1                                    |                                               |    90 |   120 |       | dB     |
| Gain = 10                                   |                                               |   110 |   120 |       | dB     |
| Gain = 100                                  |                                               |   124 |   130 |       | dB     |
| Gain = 1000                                 |                                               |   130 |   140 |       | dB     |
| INPUT CURRENT                               |                                               |       |       |       |        |
| Input Bias Current                          |                                               |       |     1 |     2 | nA     |
| Over Temperature                            | T A = -40°C to +85°C                          |       |       |     8 | nA     |
| Average Temperature Coefficient             |                                               |       |    50 |       | pA/°C  |
| Input Offset Current                        |                                               |       |   0.5 |     2 | nA     |
| Over Temperature                            | T A = -40°C to +85°C                          |       |       |     3 | nA     |
| Average Temperature Coefficient             |                                               |       |     1 |       | pA/°C  |

## [AD8421-KGD](https://www.analog.com/AD8421?doc=AD8421-KGD.pdf)

## Known Good Die

| Parameter                     | Test Conditions/Comments       | Min       | Typ             | Max        | Unit             |
|-------------------------------|--------------------------------|-----------|-----------------|------------|------------------|
| DYNAMIC RESPONSE              |                                |           |                 |            |                  |
| Small Signal Bandwidth        | -3 dB                          |           |                 |            |                  |
| Gain = 1                      |                                |           | 10              |            | MHz              |
| Gain = 10                     |                                |           | 10              |            | MHz              |
| Gain = 100                    |                                |           | 2               |            | MHz              |
| Gain = 1000                   |                                |           | 0.2             |            | MHz              |
| Settling Time to 0.01%        | 10V step                       |           |                 |            |                  |
| Gain = 1                      |                                |           | 0.7             |            | µs               |
| Gain = 10                     |                                |           | 0.4             |            | µs               |
| Gain = 100                    |                                |           | 0.6             |            | µs               |
| Gain = 1000                   |                                |           | 5               |            | µs               |
| Settling Time to 0.001%       | 10V step                       |           |                 |            |                  |
| Gain = 1                      |                                |           | 1               |            | µs               |
| Gain = 10                     |                                |           | 0.6             |            | µs               |
| Gain = 100                    |                                |           | 0.8             |            | µs               |
| Gain = 1000                   |                                |           | 6               |            | µs               |
| Slew Rate                     |                                |           |                 |            |                  |
| Gain = 1 to 100               |                                |           | 35              |            | V/µs             |
| GAIN 3                        | Gain = 1 + (9.9 kΩ/R G )       |           |                 |            |                  |
| Gain Range                    |                                | 1         |                 | 10,000     | V/V              |
| Gain Error                    | Output voltage (V OUT ) = ±10V |           |                 |            |                  |
| Gain = 1                      |                                |           |                 | 0.05       | %                |
| Gain = 10 to 1000             |                                |           |                 | 0.3        | %                |
| Gain Nonlinearity             | V OUT = -10V to +10V           |           |                 |            |                  |
| Gain = 1                      | R L ≥ 2 kΩ                     |           |                 | 1          | ppm              |
|                               | R L = 600Ω                     |           | 1               | 3          | ppm              |
| Gain = 10 to 1000             | R L ≥ 600Ω                     |           | 30              | 50         | ppm              |
|                               | V OUT = -5V to +5V             |           | 5               | 10         | ppm              |
| Gain vs. Temperature 3        |                                |           |                 |            |                  |
| Gain = 1                      |                                |           |                 | 5          | ppm/°C           |
| Gain > 1                      |                                |           |                 | -50        | ppm/°C           |
| INPUT                         |                                |           |                 |            |                  |
| Input Impedance               |                                |           |                 |            |                  |
| Differential                  |                                |           | 30&#124;&#124;3 |            | GΩ&#124;&#124;pF |
| Input Operating Voltage Range | V S = ±2.5V to ±18V            | -V S +2.3 |                 | +V S -1.8  | V                |
| Over Temperature              | T A = -40°C                    | -V S +2.5 |                 | +V S - 2.0 | V                |
|                               | T A = 85°C                     | -V S +2.1 |                 | +V S - 1.8 | V                |
| OUTPUT                        | R L = 2 kΩ                     |           |                 |            |                  |
| Output Swing                  | V S = ±2.5V to ±18V            | -V S +1.2 |                 | +V S -1.6  | V                |
| Over Temperature              | T A = -40°C to +85°C           | -V S +1.2 |                 | +V S -1.6  | V                |
| Short-Circuit Current         |                                |           | 65              |            | mA               |
| REFERENCE INPUT               |                                |           |                 |            |                  |
| Input Reference, R IN         |                                |           | 20              |            | kΩ               |
| Input Current, I IN           | V +IN ,V -IN = 0V              |           | 20              | 24         | µA               |
| Voltage Range                 |                                | -V S      |                 | +V S       | V                |
| Reference Gain to Output      |                                |           | 1 ± 0.0001      |            | V/V              |

## Known Good Die

| Parameter                 | Test Conditions/Comments   | Min   |   Typ | Max   | Unit   |
|---------------------------|----------------------------|-------|-------|-------|--------|
| POWER SUPPLY              |                            |       |       |       |        |
| Operating Range           | Dual supply                | ±2.5  |       | ±18   | V      |
|                           | Single supply              | 5     |       | 36    | V      |
| Quiescent Current         |                            |       |     2 | 2.3   | mA     |
| Over Temperature          | T A = -40°C to +85°C       |       |       | 2.6   | mA     |
| TEMPERATURE RANGE         |                            |       |       |       |        |
| For Specified Performance |                            | -40   |       | +85   | °C     |
| Operational 5             |                            | -40   |       | +125  | °C     |

## ABSOLUTE MAXIMUM RATINGS

| Parameter                             | Rating                        |
|---------------------------------------|-------------------------------|
| Supply Voltage                        | ±18V                          |
| Output Short-Circuit Current Duration | Indefinite                    |
| MaximumVoltage at -IN or +IN 1        | -V S + 40V                    |
| MinimumVoltage at -IN or +IN          | +V S - 40V                    |
| MaximumVoltage at REF 2               | +V S + 0.3V                   |
| MinimumVoltage at REF                 | -V S - 0.3V                   |
| Storage Temperature Range             | -65°C to +150°C               |
| Operating Temperature Range           | -40°C to +125°C               |
| Maximum Junction Temperature          | 150°C                         |
| Electrostatic Discharge (ESD)         | Electrostatic Discharge (ESD) |
| Human Body Model                      | 2 kV                          |
| Charged Device Model                  | 1.25 kV                       |
| Machine Model                         | 0.2 kV                        |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions 1

| Pad No.   | Mnemonic   | PadType   |   X-Axis (µm) |   Y-Axis (µm) | Description                |
|-----------|------------|-----------|---------------|---------------|----------------------------|
| 1         | -IN        | Single    |        -548.2 |          +376 | Negative Input Pad.        |
| 2A        | R G        | Double    |        -548.2 |          +241 | Gain Setting Pad.          |
| 2B        | R G        | Double    |        -548.2 |           +66 | Gain Setting Pad.          |
| 3A        | R G        | Double    |        -548.2 |          -112 | Gain Setting Pad.          |
| 3B        | R G        | Double    |        -548.2 |          -287 | Gain Setting Pad.          |
| 4         | +IN        | Single    |        -548.2 |          -422 | Positive Input Pad.        |
| 5         | -V S       | Single    |        +566.4 |          -841 | Negative Power Supply Pad. |
| 6         | REF        | Double    |          +502 |        -565.8 | Reference Voltage Pad.     |
| 7A        | V OUT      | Single    |          +512 |        -359.5 | Output Pad.                |
| 7B        | V OUT      | Double    |          +512 |        -191.6 | Output Pad.                |
| 8         | +V S       | Single    |        +635.8 |          +929 | Positive Power Supply Pad. |

1  To minimize gain errors introduced by the bond wires, use Kelvin connections between the chip and the gain resistor, RG, by connecting Pad 2A and Pad 2B in parallel to one end of RG and by connecting Pad 3A and Pad 3B in parallel to the other end of RG. For unity-gain applications where RG is not required, Pad 2A and Pad 2B must be bonded together as well as Pad 3A and Pad 3B.

## OUTLINE DIMENSIONS

Figure 3. 8-Pad Bare Die [CHIP] (C-8-15)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 4. Die Specifications

| Parameter            | Value                                 | Unit           |
|----------------------|---------------------------------------|----------------|
| Scribe Line Width    | 90 × 90                               | µm             |
| Die Size             | 1555 × 2125                           | µm             |
| Thickness            | 304.8                                 | µm             |
| Backside             | None 1                                | Not applicable |
| Passivation          | Doped oxide/silicon (Si)/Nitrogen (N) | Not applicable |
| Bond Pads (Minimum)  | 70 × 70                               | µm             |
| Bond Pad Composition | 1.0Aluminum (Al)/Si, 0.5 Copper (Cu)  | %              |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation              |
|----------------------|-----------------------------|
| Die Attach           | No special requirements     |
| Bonding Method       | Gold ball or aluminum wedge |
| Bonding Sequence     | Any                         |

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                | Package Option   |
|---------------|---------------------|------------------------------------|------------------|
| AD8421-KGD-WP | -40°C to +85°C      | 8-Pad Bare Die [CHIP], Waffle Pack | C-8-15           |

©2019  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered  trademarks  are  the  property  of  their  respective  owners. D20316-0-9/19(0)

<!-- image -->

03-11-2018-A