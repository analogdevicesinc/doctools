<!-- lastmod 2020-01-07 -->
<!-- image -->

Known Good Die

## FEATURES

## Dual-channel

Gain set with 1 resistor per amplifier (G = 1 to 10,000) Low noise 8 nV/√Hz eNI at 1 kHz 0.25 µV p-p RTI, G = 100 to 1000 (0.1 Hz to 10 Hz) High accuracy dc performance 120 µV maximum input offset voltage 0.4 µV/°C maximum average temperature coefficient 2.0 nA maximum input bias current 100 dB minimum CMRR at 4 kHz (G = 100 and G = 1000) Excellent ac performance 140 kHz small signal -3 dB bandwidth (G = 100) 13 µs settling time to 0.001% Differential output option (single channel) Fully specified Adjustable common-mode output Power supply operating range: ±2.3 V to ±18 V Operational up to 125°C 1 Known Good Die (KGD): these die are fully guaranteed to data sheet specifications

## APPLICATIONS

## Multichannel data acquisition for

Electrocardiogram (ECG) and medical instrumentation Industrial process controls Wheatstone bridge sensors Differential drives for High resolution input ADCs Remote sensors

## GENERAL DESCRIPTION

The AD8222-KGD is a dual-channel, high performance instrumentation amplifier (in-amp) that requires only one external resistor per amplifier to set gains of 1 to 10,000.

The AD8222-KGD is a dual, in-amp in a small 4 mm × 4 mm LFCSP. The device requires the same board area as a typical single in-amp. The smaller package allows a 2× increase in channel density and a lower cost per channel, all with no compromise in performance.

## Precision, Dual-Channel

## Instrumentation Amplifier

[AD8222-KGD](https://www.analog.com/AD8222?doc=AD8222-KGD.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The AD8222-KGD can also be configured as a single-channel, differential output in-amp. Differential outputs provide high noise immunity, which can be useful when the output signal must travel through a noisy environment, such as with remote sensors. The configuration can also drive differential input analog-to-digital converters (ADCs).

The AD8222-KGD maintains a minimum CMRR of 80 dB to 4 kHz for all grades at G = 1. High CMRR over frequency allows the AD8222-KGD to reject wideband interference and line harmonics, greatly simplifying filter requirements. The AD8222-KGD also has a typical CMRR drift over temperature of just 0.07 µV/V/°C at G = 1.

The AD8222-KGD operates on both single and dual supplies. The device is specified over the industrial temperature range of -40°C to +85°C and is fully RoHS compliant. Furthermore, the AD8222-KGD is operational from -40°C to +125°C 1 .

For a single-channel version, see the AD8221-KGD.

Additional application and technical information can be found in the AD8222 data sheet.

[1  See the AD8222 data sheet for expected operation from 85°C to 125°C.](https://www.analog.com/AD8222?doc=AD8222-KGD.pdf)

## AD8222-KGD

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

1/20 20 -Rev. 0 to Rev. A

Changes to Table 4  ............................................................................ 7

10/2019-Revision 0: Initial Version Maximum Power Dissipation ......................................................6

ESD Caution...................................................................................6

Pin Configuration and Function Descriptions  ..............................7

Outline Dimensions ..........................................................................8

Die Specifications and Assembly Recommendations ..............8

Ordering Guide .............................................................................8

## SPECIFICATIONS

Supply voltage (VS) = ±15 V, REFx voltage (VREF) = 0 V, TA = 25°C, G = 1, and load resistance (RL) = 2 kΩ, unless otherwise noted.

Table 1. Single-Ended and Differential Output Configuration

| Parameter                               | Test Conditions/Comments                               |   Min |   Typ |   Max | Unit    |
|-----------------------------------------|--------------------------------------------------------|-------|-------|-------|---------|
| COMMON-MODEREJECTION RATIO (CMRR)       | Common-mode voltage (V CM )= -10V to +10V              |       |       |       |         |
| CMRR DC to 60 Hz                        | 1 kΩ source imbalance                                  |       |       |       |         |
| G=1                                     |                                                        |    80 |       |       | dB      |
| G=10                                    |                                                        |   100 |       |       | dB      |
| G=100                                   |                                                        |   120 |       |       | dB      |
| G=1000                                  |                                                        |   130 |       |       | dB      |
| CMRR at 4 kHz                           |                                                        |       |       |       |         |
| G=1                                     |                                                        |    80 |       |       | dB      |
| G=10                                    |                                                        |    90 |       |       | dB      |
| G=100                                   |                                                        |   100 |       |       | dB      |
| G=1000                                  |                                                        |   100 |       |       | dB      |
| CMRR Drift                              | T A = -40°C to +85°C,G=1                               |       |  0.07 |       | µV/V/°C |
| NOISE                                   |                                                        |       |       |       |         |
| Voltage Noise, 1 kHz                    | RTI noise = √(e NI 2 + (e NO /G) 2 )                   |       |       |       |         |
| Input Voltage Noise, e NI               | +IN voltage (V +IN ), -IN voltage (V -IN ), V REF = 0V |       |       |     8 | nV/√Hz  |
| Output Voltage Noise, e NO              | V +IN ,V -IN ,V REF = 0V                               |       |       |    75 | nV/√Hz  |
| Return to Input (RTI) G=1               | Frequency = 0.1 Hz to 10 Hz                            |       |     2 |       | µV p-p  |
| G=10                                    |                                                        |       |   0.5 |       | µV p-p  |
|                                         |                                                        |       |  0.25 |       | µV p-p  |
| G=100to 1000                            | Frequency = 1 kHz                                      |       |    40 |       | fA/√Hz  |
| Current Noise                           |                                                        |       |       |       |         |
|                                         | Frequency = 0.1 Hz to 10 Hz                            |       |     6 |       | pA p-p  |
| VOLTAGE OFFSET,V OS                     | RTIV OS = (V OSI ) + (V OSO /G)                        |       |       |       |         |
| Input Offset,V OSI                      | V S = ±5Vto ±15V                                       |       |       |   120 | µV      |
| Over Temperature                        | T A = -40°C to +85°C                                   |       |       |   150 | µV      |
| Average Temperature Coefficient         |                                                        |       |       |   0.4 | µV/°C   |
| Output Offset,V OSO                     | V S = ±5Vto ±15V                                       |       |       |   500 | µV      |
| Over Temperature                        | T A = -40°C to +85°C                                   |       |       |   0.8 | mV      |
| Average Temperature Coefficient         |                                                        |       |       |     9 | µV/°C   |
| Offset RTI vs. Power Supply Ratio (PSR) | V S = ±2.3V to ±18V                                    |       |       |       |         |
| G=1                                     |                                                        |    90 |   110 |       | dB      |
| G=10                                    |                                                        |   110 |   120 |       | dB      |
| G=100                                   |                                                        |   124 |   130 |       | dB      |
| G=1000                                  |                                                        |   130 |   140 |       | dB      |
| INPUT CURRENT (PER CHANNEL)             |                                                        |       |       |       |         |
| Input Bias Current, I BIAS              |                                                        |       |   0.5 |   2.0 | nA      |
| Over Temperature                        | T A = -40°C to +85°C                                   |       |       |   3.0 | nA      |
| Average Temperature Coefficient         |                                                        |       |     1 |       | pA/°C   |
| Input Offset Current, I OFFSET          |                                                        |       |   0.2 |     1 | nA      |
| Over Temperature                        | T A = -40°C to +85°C                                   |       |       |   1.5 | nA      |
| Average Temperature Coefficient         |                                                        |       |     1 |       | pA/°C   |

## [AD8222-KGD](https://www.analog.com/AD8222?doc=AD8222-KGD.pdf)

## Known Good Die

| Parameter                         | Test Conditions/Comments   | Min        | Typ              | Max        | Unit             |
|-----------------------------------|----------------------------|------------|------------------|------------|------------------|
| REFERENCE INPUT                   |                            |            |                  |            |                  |
| Input Reference, R IN             |                            |            | 20               |            | kΩ               |
| Input Current, I IN               | V +IN ,V -IN ,V REF = 0V   |            | 50               | 60         | µA               |
| Voltage Range                     |                            | -V S       |                  | +V S       | V                |
| Reference Gain to Output          |                            |            | 1                |            | V/V              |
| Reference Gain Error              |                            |            | 0.01             |            | %                |
| GAIN                              | G=1+(49.4 kΩ/R G )         |            |                  |            |                  |
| Gain Range                        |                            | 1          |                  | 10,000     | V/V              |
| Gain Error                        | V OUT ± 10V                |            |                  |            |                  |
| G=1                               |                            |            |                  | 0.3        | %                |
| G=10                              |                            |            |                  | 0.3        | %                |
| G=100                             |                            |            |                  | 0.3        | %                |
| G=1000                            |                            |            |                  | 0.3        | %                |
| Gain Nonlinearity                 | V OUT = -10V to +10V       |            |                  |            |                  |
| G=1                               |                            |            | 3                | 10         | ppm              |
| G=10                              |                            |            | 7                | 20         | ppm              |
| G=100                             |                            |            | 7                | 20         | ppm              |
| Gain vs. Temperature              |                            |            |                  |            |                  |
| G=1                               |                            |            | 3                | 10         | ppm/°C           |
| G>1 1                             |                            |            |                  | -50        | ppm/°C           |
| INPUT                             |                            |            |                  |            |                  |
| Input Impedance                   |                            |            |                  |            |                  |
| Differential                      |                            |            | 100&#124;&#124;2 |            | GΩ&#124;&#124;pF |
| Common Mode                       |                            |            | 100&#124;&#124;2 |            | GΩ&#124;&#124;pF |
| Input Operating Voltage Range 2   | V S = ±2.3V to ±5V         | -V S + 1.9 |                  | +V S - 1.1 | V                |
| Over Temperature                  | T A = -40°C to +85°C       | -V S + 2.0 |                  | +V S - 1.2 | V                |
| Input Operating Voltage Range 2   | V S = ±5Vto ±18V           | -V S + 1.9 |                  | +V S - 1.2 | V                |
| Over Temperature                  | T A = -40°C to +85°C       | -V S + 2.0 |                  | +V S - 1.2 | V                |
| OUTPUT                            | R L = 10 kΩ                |            |                  |            |                  |
| Output Swing                      | V S = ±2.3V to ±5V         | -V S + 1.1 |                  | +V S - 1.2 | V                |
| Over Temperature                  | T A = -40°C to +85°C       | -V S + 1.4 |                  | +V S - 1.3 | V                |
| Output Swing                      | V S = ±5Vto ±18V           | -V S + 1.2 |                  | +V S - 1.4 | V                |
| Over Temperature                  | T A = -40°C to +85°C       | -V S + 1.6 |                  | +V S - 1.5 | V                |
| Short-Circuit Current             |                            |            | 18               |            | mA               |
| POWER SUPPLY                      |                            |            |                  |            |                  |
| Operating Range                   | V S = ±2.3V to ±18V        | ±2.3       |                  | ±18        | V                |
| Quiescent Current (per Amplifier) |                            |            | 0.9              | 1.1        | mA               |
| Over Temperature                  | T A = -40°C to +85°C       |            | 1                | 1.2        | mA               |
| TEMPERATURE RANGE                 |                            |            |                  |            |                  |
| Specified Performance             |                            | -40        |                  | +85        | °C               |
| Operational 3                     |                            | -40        |                  | +125       | °C               |

1 Does not include the effects of external resistor, RG.

2  One input grounded. G = 1.

3  See the AD8222 data sheet for expected operation from 85°C to 125°C.

VS = ±15 V, VREF = 0 V, TA = 25°C, and RL = 2 kΩ, unless otherwise noted.

Table 2. Single-Ended Output Configuration-Dynamic Performance (Both Amplifiers)

| Parameter                    | Test Conditions/Comments   |   Min |   Typ | Max   | Unit   |
|------------------------------|----------------------------|-------|-------|-------|--------|
| DYNAMIC RESPONSE             |                            |       |       |       |        |
| Small Signal -3 dB Bandwidth |                            |       |       |       |        |
| G=1                          |                            |       |  1200 |       | kHz    |
| G=10                         |                            |       |   750 |       | kHz    |
| G=100                        |                            |       |   140 |       | kHz    |
| G=1000                       |                            |       |    15 |       | kHz    |
| Settling Time to 0.01%       | 10V step                   |       |       |       |        |
| G=1to100                     |                            |       |    10 |       | µs     |
| G=1000                       |                            |       |    80 |       | µs     |
| Settling Time to 0.001%      | 10V step                   |       |       |       |        |
| G=1to100                     |                            |       |    13 |       | µs     |
| G=1000                       |                            |       |   110 |       | µs     |
| Slew Rate                    | G=1                        |   1.5 |     2 |       | V/µs   |
|                              | G=5to1000                  |     2 |   2.5 |       | V/µs   |

## ABSOLUTE MAXIMUM RATINGS

| Table 3.                              | Rating          |
|---------------------------------------|-----------------|
| V S                                   | ±18V            |
| Output Short-Circuit Current Duration | Indefinite      |
| Input Voltage (Common Mode)           | ±V S            |
| Differential Input Voltage            | ±V S            |
| Temperature                           |                 |
| Storage Range                         | -65°C to +130°C |
| Operational Range 1                   | -40°C to +125°C |
| Package Glass Transition (T G )       | 130°C           |
| Electrostatic Discharge (ESD)         |                 |
| Human Body Model                      | 2 kV            |
| Charge Device Model                   | 1 kV            |

1  See the AD8222 data sheet for expected operation from 85°C to 125°C.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## MAXIMUM POWER DISSIPATION

The maximum safe power dissipation for the AD8222-KGD is limited by the associated rise in junction temperature (TJ) on the die. At approximately 130°C, which is the glass transition temperature, the plastic changes its properties. Even temporarily exceeding this temperature limit may change the stresses that the package exerts on the die, permanently shifting the parametric performance of the amplifiers. Exceeding a temperature of 130°C for an extended period can result in a loss of functionality.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 4. Pad Function Descriptions

| Pad No.   | Mnemonic   | PadType   |   X-Axis (μm) |   Y-Axis (μm) | Description               |
|-----------|------------|-----------|---------------|---------------|---------------------------|
| 1         | -IN1       | Single    |         -1088 |          +859 | Negative Input In-Amp 1   |
| 2A        | RG1        | Single    |         -1088 |          +675 | Gain Resistor In-Amp 1    |
| 2B        | RG1        | Double    |         -1094 |          +431 | Gain Resistor In-Amp 1    |
| 3A        | RG1        | Double    |         -1096 |          -429 | Gain Resistor In-Amp 1    |
| 3B        | RG1        | Single    |         -1088 |          -672 | Gain Resistor In-Amp 1    |
| 4         | +IN1       | Single    |         -1088 |          -857 | Positive Input In-Amp 1   |
| 5         | +V S       | Single    |          -763 |         -1035 | Positive Supply           |
| 6         | REF1       | Double    |          -474 |         -1018 | Reference Adjust In-Amp 1 |
| 7         | REF2       | Double    |          +472 |         -1019 | Reference Adjust In-Amp 2 |
| 8         | -V S       | Single    |          +763 |         -1035 | Negative Supply           |
| 9         | +IN2       | Single    |         +1088 |          -857 | Positive Input In-Amp 2   |
| 10A       | RG2        | Single    |         +1088 |          -672 | Gain Resistor In-Amp 2    |
| 10B       | RG2        | Double    |         +1096 |       -430.52 | Gain Resistor In-Amp 2    |
| 11A       | RG2        | Double    |         +1094 |          +431 | Gain Resistor In-Amp 2    |
| 11B       | RG2        | Single    |         +1088 |          +675 | Gain Resistor In-Amp 2    |
| 12        | -IN2       | Single    |         +1088 |          +859 | Negative Input In-Amp 2   |
| 13        | -V S       | Single    |          +702 |         +1011 | Negative Supply           |
| 14        | OUT2       | Single    |          +204 |         +1012 | Output In-Amp 2           |
| 15        | OUT1       | Single    |          -204 |         +1012 | Output In-Amp 1           |
| 16        | +V S       | Single    |          -702 |         +1011 | Positive Supply           |

## OUTLINE DIMENSIONS

Figure 3. 16-Pad Bare Die [CHIP] (C-16-3)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 5. Die Specifications

| Parameter                   | Value                                 | Unit           |
|-----------------------------|---------------------------------------|----------------|
| Scribe Line Width           | 75                                    | µm             |
| Die Size (Maximum Size)     | 2460 × 2365                           | µm             |
| Thickness                   | 304.8                                 | µm             |
| Bond Pads (Minimum Size)    | 76 × 76                               | µm             |
| Bond Pad Composition        | Aluminum (Al), copper (Cu), (0.5%)    | %              |
| Backside                    | None 1                                | Not applicable |
| Passivation                 | Doped oxide/silicon (Si), nitride (N) | Not applicable |
| ESD, Human Body Model (HBM) | 2000                                  | V              |

## Table 6. Assembly Recommendations

| Assembly Component   | Recommendation              |
|----------------------|-----------------------------|
| Die Attach           | Ablestik 8290 conductive    |
| Bonding Method       | Gold ball or aluminum wedge |
| Bonding Sequence     | Unspecified                 |

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                 | Package Option   |
|---------------|---------------------|-------------------------------------|------------------|
| AD8222-KGD-WP | -40°C to +85°C      | 16-Pad Bare Die [CHIP], Waffle Pack | C-16-3           |

<!-- image -->

10-09-2019-A