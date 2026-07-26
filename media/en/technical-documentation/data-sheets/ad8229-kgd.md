<!-- lastmod 2020-06-03 -->
<!-- image -->

## Known Good Die

## FEATURES

Designed for 210°C operation Low noise

1 nV/√Hz input noise

45 nV/√Hz output noise

High CMRR

126 dB CMRR (minimum), G = 100

80 dB CMRR (minimum) to 5 kHz, G = 1

## Excellent ac specifications

15 MHz bandwidth (G = 1) 1.2 MHz bandwidth (G = 100) 22 V/µs slew rate THD: 130 dB (1 kHz, G = 1)

## Versatile

±4 V to ±17 V dual supply

Gain set with single resistor (G = 1 to 1000) Temperature range: -40°C to +210°C Known good die (KGD): these die are fully guaranteed to

data sheet specifications

## APPLICATIONS

Down-hole instrumentation Harsh environment data acquisition Exhaust gas measurements Vibration analysis

## GENERAL DESCRIPTION

The AD8229-KGD is an ultralow noise instrumentation amplifier designed for measuring small signals in the presence of large common-mode voltages and high temperatures.

The AD8229-KGD has been designed for high temperature operation. The process is dielectrically isolated to avoid leakage currents at high temperatures. The design architecture was chosen to compensate for the low V BE voltages at high temperatures.

The AD8229-KGD excels at distinguishing tiny signals. It delivers industry leading 1 nV/√Hz input noise performance. The high CMRR of the AD8229-KGD prevents unwanted signals from corrupting the acquisition. The CMRR increases as the gain increases, offering high rejection when it is most needed.

The AD8229-KGD is one of the fastest instrumentation amplifiers available. Its current feedback architecture provides bandwidth that is quite high, even at high gains, for example, 1.2 MHz at G = 100. With the high bandwidth comes excellent distortion performance, allowing use in demanding applications such as vibration analysis.

Rev. 0 Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However ,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No lic ense is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## 1 nV/√Hz Low Noise 210°C

## Instrumentation Amplifier

AD8229-KGD

## FUNCTIONAL BLOCK DIAGRAM

10107-003

<!-- image -->

Gain is set from 1 to 1000 with a single resistor. A reference pin allows the user to offset the output voltage. This feature is useful when interfacing with analog-to-digital converters.

Additional application and technical information can be found in the AD8229 standard product data sheet.

Figure 2. Typical Input Offset vs. Temperature (G = 100)

<!-- image -->

## AD8229-KGD

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |

## REVISION HISTORY

8/11-Revision 0: Initial Version

## Known Good Die

| Absolute Maximum Ratings ........................................................6              |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................6 |
| Pad Configuration and Function Descriptions.............................7                       |
| Outline Dimensions..........................................................................8   |
| Die Specifications and Assembly Recommendations ..............8                                 |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS

+VS = 15 V, -V S = -15 V, V REF = 0 V, T A = 25°C, G = 1, R L = 10 kΩ, unless otherwise noted.

Table 1.

| Parameter                       | Test Conditions/Comments   |   Min |   Typ |   Max | Unit    |
|---------------------------------|----------------------------|-------|-------|-------|---------|
| COMMON-MODEREJECTIONRATIO(CMRR) |                            |       |       |       |         |
| CMRRDCto60Hzwith                | V CM = ±10V                |       |       |       |         |
| 1kΩSourceImbalance              |                            |       |       |       |         |
| G=1                             |                            |    86 |       |       | dB      |
| Temperature Drift               | T A = -40°C to +210°C      |       |       |   300 | nV/V/°C |
| G=10                            |                            |   106 |       |       | dB      |
| Temperature Drift               | T A = -40°C to +210°C      |       |       |    30 | nV/V/°C |
| G=100                           |                            |   126 |       |       | dB      |
| Temperature Drift               | T A = -40°C to +210°C      |       |       |     3 | nV/V/°C |
| G=1000                          | T A = -40°C to +210°C      |   134 |       |       | dB      |
| CMRR at 5 kHz                   | V CM = ±10V                |       |       |       |         |
| G=1                             |                            |    80 |       |       | dB      |
| G=10                            |                            |    90 |       |       | dB      |
| G=100                           |                            |    90 |       |       | dB      |
| G=1000                          |                            |    90 |       |       | dB      |
| VOLTAGE NOISE                   | V IN +,V IN - = 0V         |       |       |       |         |
| Spectral Density 1 : 1 kHz      |                            |       |       |       |         |
| Input Voltage Noise, e ni       |                            |       |     1 |   1.1 | nV/√Hz  |
| Output Voltage Noise, e no      |                            |       |    45 |    50 | nV/√Hz  |
| Peak to Peak: 0.1 Hz to 10 Hz   |                            |       |       |       |         |
| G=1                             |                            |       |     2 |       | µV p-p  |
| G=1000                          |                            |       |   100 |       | nV p-p  |
| CURRENT NOISE                   |                            |       |       |       |         |
| Spectral Density: 1 kHz         |                            |       |   1.5 |       | pA/√Hz  |
| Peak to Peak: 0.1 Hz to 10 Hz   |                            |       |   100 |       | pA p-p  |
| VOLTAGE OFFSET                  | V OS =V OSI +V OSO /G      |       |       |       |         |
| Input Offset,V OSI              |                            |       |       |   100 | µV      |
| Average TC                      | -40°C to +210°C            |       |   0.1 |     1 | µV/°C   |
| Output Offset,V OSO             |                            |       |       |  1000 | µV      |
| Average TC                      | -40°C to +210°C            |       |     3 |    10 | µV/°C   |
| Offset RTI vs. Supply (PSR)     | V S = ±5Vto ±15V           |       |       |       |         |
| G=1                             | -40°C to +210°C            |    86 |       |       | dB      |
| G=10                            | -40°C to +210°C            |   106 |       |       | dB      |
| G=100                           | -40°C to +210°C            |   126 |       |       | dB      |
| G=1000                          | -40°C to +210°C            |   130 |       |       | dB      |
| INPUT CURRENT                   |                            |       |       |       |         |
| Input Bias Current              |                            |       |       |    70 | nA      |
| High Temperature                | T A = 210°C                |       |       |   200 | nA      |
| Input Offset Current            |                            |       |       |    35 | nA      |
| High Temperature                | T A = 210°C                |       |       |    50 | nA      |

## AD8229-KGD

## Known Good Die

| Parameter                       | Test Conditions/Comments   | Min        | Typ              | Max       | Unit             |
|---------------------------------|----------------------------|------------|------------------|-----------|------------------|
| DYNAMIC RESPONSE                |                            |            |                  |           |                  |
| Small Signal Bandwidth-3dB      |                            |            |                  |           |                  |
| G=1                             |                            |            | 15               |           | MHz              |
| G=10                            |                            |            | 4                |           | MHz              |
| G=100                           |                            |            | 1.2              |           | MHz              |
| G=1000                          |                            |            | 0.15             |           | MHz              |
| Settling Time 0.01%             | 10V step                   |            |                  |           |                  |
| G=1                             |                            |            | 0.75             |           | µs               |
| G=10                            |                            |            | 0.65             |           | µs               |
| G=100                           |                            |            | 0.85             |           | µs               |
| G=1000                          |                            |            | 5                |           | µs               |
| Settling Time 0.001%            | 10V step                   |            |                  |           |                  |
| G=1                             |                            |            | 0.9              |           | µs               |
| G=10                            |                            |            | 0.9              |           | µs               |
| G=100                           |                            |            | 1.2              |           | µs               |
| G=1000                          |                            |            | 7                |           | µs               |
| Slew Rate                       |                            |            |                  |           |                  |
| G=1to100                        |                            |            | 22               |           | V/µs             |
| GAIN 2                          | G=1+(6kΩ/R G )             |            |                  |           |                  |
| Gain Range                      |                            | 1          |                  | 1000      | V/V              |
| Gain Error                      | V OUT = ±10V               |            |                  |           |                  |
| G=1                             |                            |            | 0.01             | 0.03      | %                |
| G=10                            |                            |            | 0.05             | 0.3       | %                |
| G=100                           |                            |            | 0.05             | 0.3       | %                |
| G=1000                          |                            |            | 0.1              | 0.3       | %                |
| Gain Nonlinearity               | V OUT = -10Vto+10V         |            |                  |           |                  |
| G=1to1000                       | R L = 10 kΩ                |            | 2                |           | ppm              |
| Gain vs. Temperature            |                            |            |                  |           |                  |
| G=1                             | -40°C to +210°C            |            | 2                | 5         | ppm/°C           |
| G>10                            | -40°C to +210°C            |            |                  | -100      | ppm/°C           |
| INPUT                           |                            |            |                  |           |                  |
| Impedance (Pin to Ground) 3     |                            |            | 1.5&#124;&#124;3 |           | GΩ&#124;&#124;pF |
| Input Operating Voltage Range 4 | V S =±5Vto±18V             | -V S +2.8  |                  | +V S -2.5 | V                |
| Output Swing                    | R L = 2 kΩ                 | -V S + 1.9 |                  | +Vs - 1.5 | V                |
| OUTPUT                          |                            |            |                  |           |                  |
| High Temperature                | T A = 210°C                | -V S + 1.1 |                  | +Vs - 1.1 | V                |
| Output Swing                    | R L = 10 kΩ                | -V S + 1.8 |                  | +Vs - 1.2 | V                |
| High Temperature                | T A = 210°C                | -V S + 1.1 |                  | +Vs - 1.1 | V                |
| Short-Circuit Current           |                            |            | 35               |           | mA               |
| REFERENCE INPUT                 |                            |            |                  |           |                  |
| R IN                            |                            |            | 10               |           | kΩ               |
| I IN                            | V IN +,V IN - = 0V         |            | 70               |           | µA               |
| Voltage Range                   |                            | -V S       |                  | +V S      | V                |
| Reference Gain to Output        |                            |            | 1                |           | V/V              |
| Reference Gain Error            |                            |            | 0.01             |           | %                |

## Known Good Die

| Parameter                   | Test Conditions/Comments   | Min   |   Typ | Max   | Unit   |
|-----------------------------|----------------------------|-------|-------|-------|--------|
| POWER SUPPLY                |                            |       |       |       |        |
| Operating Range             |                            | ±4    |       | ±17   | V      |
| Quiescent Current           |                            |       |   6.7 | 7     | mA     |
| High Temperature            | T A = 210°C                |       |       | 12    | mA     |
| TEMPERATURE RANGE           |                            |       |       |       |        |
| For Specified Performance 5 |                            | -40   |       | +210  | °C     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                             | Rating          |
|---------------------------------------|-----------------|
| Supply Voltage                        | ±17V            |
| Output Short-Circuit Current Duration | Indefinite      |
| MaximumVoltage at -IN, +IN 1          | ±V S            |
| Differential Input Voltage 1          |                 |
| Gain ≤ 4                              | ±V S            |
| 4 > Gain > 50                         | ±50V/gain       |
| Gain ≥ 50                             | ±1V             |
| MaximumVoltage at REF                 | ±V S            |
| Storage Temperature Range             | -65°C to +150°C |
| Specified Temperature Range           | -40°C to +210°C |
| Maximum Junction Temperature          | 245°C           |

Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device at these or any other conditions above those indicated in the operational section of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ESD CAUTION

<!-- image -->

## PAD CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions 1

|   Pad No. |   X-Axis (μm) |   Y-Axis (μm) | Mnemonic   | PadType   | Description                |
|-----------|---------------|---------------|------------|-----------|----------------------------|
|         1 |          -661 |          +665 | -IN        | Single    | Negative Input Pad.        |
|         2 |          -661 |          +525 | R G        | Single    | Gain Setting Pad.          |
|         3 |          -661 |          +331 | R G        | Double    | Gain Setting Pad.          |
|         4 |          -661 |           +83 | R G        | Double    | Gain Setting Pad.          |
|         5 |          -661 |          -111 | R G        | Single    | Gain Setting Pad.          |
|         6 |          -661 |          -251 | +IN        | Single    | Positive Input Pad.        |
|         7 |          +682 |         -1231 | -V S       | Single    | Negative Power Supply Pad. |
|         8 |          +538 |          -839 | REF        | Double    | Reference Voltage Pad.     |
|         9 |          +626 |          +337 | V OUT      | Single    | Output Pad.                |
|        10 |          +717 |          +979 | +V S       | Single    | Positive Power Supply Pad. |

1 To minimize gain errors introduced by the bond wires, use Kelvin connections between the chip and the gain resistor, RG, by connecting Pad 2 and Pad 3 in parallel to one end of RG, and connecting Pad 4 and Pad 5 in parallel to the other end of RG. For unity-gain applications where RG is not required, Pad 2 and Pad 3 must be bonded together as do Pad 4 and Pad 5.

## OUTLINE DIMENSIONS

Figure 4. AD8229-KGD Die 1.755 mm × 2.890 mm Die Size (Dimensions shown in millimeters)

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 4. Die Specifications

| Parameter            | Value         | Unit 1      |
|----------------------|---------------|-------------|
| Chip Size            | 1665 × 2800   | μm          |
| Scribe Line Width    | 90 × 90       | μm          |
| Die Size             | 1.755 × 2.890 | mm(maximum) |
| Thickness            | 483 ± 10      | μm          |
| Bond Pad             | 92 × 92       | μm(minimum) |
| Bond Pad Composition | 0.5 AlCu      | %           |
| Backside             | Bare          | N/A         |
| Passivation          | Polymide      | N/A         |

## Table 5. Assembly Recommendations

| AssemblyComponent   | Recommendation              |
|---------------------|-----------------------------|
| Die Attach          | No special requirements     |
| Bonding Method      | Gold ball or aluminum wedge |
| Bonding Sequence    | Any                         |

## ORDERING GUIDE

| Model            | Temperature Range   | Package Option   |
|------------------|---------------------|------------------|
| AD8229-KGD-CHIPS | -40°C to +210°C     | Die Only         |

<!-- image -->

08-16-2011-A