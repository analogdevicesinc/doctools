<!-- lastmod 2019-03-01 -->
<!-- image -->

## Known Good Die

## FEATURES

Low wideband noise

1 nV/√Hz

2.8 pA/√Hz

Low 1/f noise: 2.4 nV/√Hz at 10 Hz Low distortion: -115 dBc at 100 kHz, VOUT = 2 V p-p Low input offset voltage: 500 μV maximum High speed

-3 dB bandwidth: 230 MHz (G = +1)

Slew rate: 120 V/μs

Settling time to 0.1%: 45 ns

Rail-to-rail output

Wide supply range: 3 V to 10 V

Disable feature

Known good die (KGD): these die are fully guaranteed to data sheet specifications

## APPLICATIONS

Low noise preamplifiers Ultrasound amplifiers Phase-locked loop (PLL) filters High performance ADC drivers Digital-to-analog converter (DAC) buffers

1  Protected by U.S. Patent Numbers 6,486,737B1 and 6,518,842B1.

## 1 nV/√Hz, Low Power, Rail-to-Rail Output Amplifier

[ADA4897-2-KGD](https://www.analog.com/ada4897-2-kgd?doc=ada4897-2-kgd.pdf)

## GENERAL DESCRIPTION

The ADA4897-2-KGD 1  is a unity-gain stable, low noise, rail-torail output, high speed voltage feedback amplifier that has a quiescent current of 3 mA. With a 1/f noise of 2.4 nV/√Hz at 10 Hz and a spurious-free dynamic range of -80 dBc at 2 MHz, the ADA4897-2-KGD is an ideal solution in a variety of applications, including ultrasound, low noise preamplifiers, and drivers of high performance analog-to-digital converters (ADCs). The Analog Devices, Inc., proprietary next generation silicon germanium (SiGe) bipolar process and innovative architecture enable such high performance amplifiers.

The ADA4897-2-KGD has a 230 MHz bandwidth, a 120 V/μs slew rate, and settles to 0.1% in 45 ns. With a wide supply voltage range of 3 V to 10 V , the ADA4897-2-KGD is ideal for systems that require high dynamic range, precision, low power, and high speed.

The ADA4897-2-KGD is rated to work over the industrial temperature range of -40°C to +125°C.

Additional application and technical information can be found in the ADA4897-2 data sheet.

## [ADA4897-2-KGD](https://www.analog.com/ada4897-2-kgd?doc=ada4897-2-kgd.pdf)

| TABLE OF CONTENTS Features .............................................................................................. 1                                                                             | Absolute Maximum Ratings ............................................................8                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1                                                                                                   | ESD Caution...................................................................................8                 |
| General Description......................................................................... 1                                                                                                          | Pin Configuration and Function Descriptions..............................9                                      |
| Revision History ............................................................................... 2                                                                                                      | Outline Dimensions....................................................................... 10                    |
| Specifications..................................................................................... 3                                                                                                   | Die Specifications and Assembly Recommendations ........... 10                                                  |
| ±5 VSupply................................................................................... 3 +5 VSupply................................................................................... 4         | Ordering Guide .......................................................................... 10                    |
| +3 VSupply................................................................................... 6                                                                                                         | 11/2014-Rev. 0 to Rev.A                                                                                         |
| REVISION HISTORY 2/2019-Rev. B to Rev.C Changes to Product Title, Features Section, Applications Section, and General Description Section .................................... 1 3/2015-Rev. Ato Rev. B | Change to Thickness Parameter, Table 6..................................... 10 4/14-Revision 0: Initial Version |

## SPECIFICATIONS

## ±5 V SUPPLY

TA = 25°C, G = +1, RL = 1 kΩ to ground, unless otherwise noted.

## Table 1.

| Parameter                          | Test Conditions/Comments      |   Min | Typ          |   Max | Unit   |
|------------------------------------|-------------------------------|-------|--------------|-------|--------|
| DYNAMIC PERFORMANCE                |                               |       |              |       |        |
| -3 dB Bandwidth                    | G=+1,V OUT = 0.02V p-p        |       | 230          |       | MHz    |
|                                    | G=+1,V OUT = 2V p-p 100Ω      |       | 30 90        |       | MHz    |
|                                    | G=+2,V OUT = 0.02V p-p        |       |              |       | MHz    |
| Bandwidth for 0.1 dB Flatness      | G=+2,V OUT = 2V p-p, R L =    |       | 7            |       | MHz    |
| Slew Rate                          | G=+2,V OUT = 6V step          |       | 120          |       | V/µs   |
| Settling Time to 0.1%              | G=+2,V OUT = 2V step          |       | 45           |       | ns     |
| Settling Time to 0.01%             | G=+2,V OUT = 2V step          |       | 90           |       | ns     |
| NOISE/HARMONIC PERFORMANCE         |                               |       |              |       |        |
| Harmonic Distortion (SFDR)         | V OUT = 2V p-p                |       |              |       | dBc    |
|                                    | f C = 100 kHz                 |       | -115         |       |        |
|                                    | f C = 1MHz                    |       | -93          |       | dBc    |
|                                    | f C = 2MHz                    |       | -80          |       | dBc    |
|                                    | f C = 5MHz                    |       | -61          |       | dBc    |
| Input Voltage Noise                | f = 10 Hz                     |       | 2.4          |       | nV/√Hz |
|                                    | f = 100 kHz                   |       | 1            |       | nV/√Hz |
| Input Current Noise                | f = 10 Hz                     |       | 11           |       | pA/√Hz |
|                                    | f = 100 kHz                   |       | 2.8          |       | pA/√Hz |
| 0.1 Hz to 10 Hz Noise              | G=+101, R F = 1 kΩ, R G = 10Ω |       | 99           |       | nV p-p |
| DC PERFORMANCE                     |                               |       |              |       |        |
| Input Offset Voltage               |                               |  -500 | -28          |  +500 | µV     |
| Input Offset Voltage Drift         |                               |       | 0.2          |       | µV/°C  |
| Input Bias Current                 |                               |   -17 | -11          |    -4 | µA     |
| Input Bias Current Drift           |                               |       | 3            |       | nA/°C  |
| Input Bias Offset Current          |                               |  -0.6 | -0.02        |  +0.6 | µA     |
| Open-Loop Gain                     | V OUT = -4V to +4V            |   100 | 110          |       | dB     |
| INPUT CHARACTERISTICS              |                               |       |              |       |        |
| Input Resistance                   |                               |       |              |       |        |
| Common-Mode                        |                               |       | 10           |       | MΩ     |
| Differential                       |                               |       | 10           |       | kΩ     |
| Input Capacitance                  |                               |       |              |       |        |
| Common-Mode                        |                               |       | 3            |       | pF     |
| Differential                       |                               |       | 11           |       | pF     |
| Input Common-ModeVoltage Range     |                               |       | -4.9 to +4.1 |       | V      |
| Common-Mode Rejection Ratio (CMRR) | V CM = -2V to +2V             |   -92 | -120         |       | dB     |
| OUTPUT CHARACTERISTICS             |                               |       |              |       |        |
| Output Overdrive RecoveryTime      | V IN = ±5V,G=+2               |       | 81           |       | ns     |
| Output Voltage Swing               |                               |       |              |       |        |
| Positive                           | R L = 1 kΩ                    |  4.85 | 4.96         |       | V      |
|                                    | R L = 100Ω                    |   4.5 | 4.73         |       | V      |
| Negative                           | R L = 1 kΩ                    | -4.85 | -4.97        |       | V      |
|                                    | R L = 100Ω                    |  -4.5 | -4.84        |       | V      |
| Output Current                     | SFDR = -45 dBc                |       | 80           |       | mA     |
| Short-Circuit Current              | Sinking/sourcing              |       | 135          |       | mA     |
| Capacitive Load Drive              | 30% overshoot,G=+2            |       | 39           |       | pF     |

## [ADA4897-2-KGD](https://www.analog.com/ada4897-2-kgd?doc=ada4897-2-kgd.pdf)

## Known Good Die

| Parameter                           | Test Conditions/Comments    |   Min | Typ         |   Max | Unit   |
|-------------------------------------|-----------------------------|-------|-------------|-------|--------|
| POWER SUPPLY                        |                             |       |             |       |        |
| Operating Range                     |                             |       | 3 to 10     |       | V      |
| Quiescent Current per Amplifier     |                             |   2.8 | 3.0         |   3.2 | mA     |
|                                     | DISABLEx = -5V              |       | 0.13        |  0.25 | mA     |
| Power Supply Rejection Ratio (PSRR) |                             |       |             |       |        |
| Positive                            | +V S = 4Vto 6V, -V S = -5V  |   -96 | -125        |       | dB     |
| Negative                            | +V S = 5V, -V S = -4V to-6V |   -96 | -121        |       | dB     |
| DISABLEx PIN                        |                             |       |             |       |        |
| DISABLExVoltage                     | Enabled                     |       | >+V S - 0.5 |       | V      |
|                                     | Disabled                    |       | <+V S - 2   |       | V      |
| Input Current                       |                             |       |             |       |        |
| Enabled                             | DISABLEx = +5V              |       | -1.2        |       | µA     |
| Disabled                            | DISABLEx = -5V              |       | -40         |       | µA     |
| Switching Speed                     |                             |       |             |       |        |
| Enabled                             |                             |       | 0.25        |       | µs     |
| Disabled                            |                             |       | 12          |       | µs     |

## +5 V SUPPLY

TA = 25°C, G = +1, RL = 1 kΩ to midsupply, unless otherwise noted.

## Table 2.

| Parameter                     | Test Conditions/Comments        |   Min |   Typ |   Max | Unit   |
|-------------------------------|---------------------------------|-------|-------|-------|--------|
| DYNAMIC PERFORMANCE           |                                 |       |       |       |        |
| -3 dB Bandwidth               | G=+1,V OUT = 0.02V p-p          |       |   230 |       | MHz    |
|                               | G=+1,V OUT = 2V p-p             |       |    30 |       | MHz    |
|                               | G=+2,V OUT = 0.02V p-p          |       |    90 |       | MHz    |
| Bandwidth for 0.1 dB Flatness | G=+2,V OUT = 2V p-p, R L = 100Ω |       |     7 |       | MHz    |
| Slew Rate                     | G=+2,V OUT = 3V step            |       |   100 |       | V/µs   |
| Settling Time to 0.1%         | G=+2,V OUT = 2V step            |       |    45 |       | ns     |
| Settling Time to 0.01%        | G=+2,V OUT = 2V step            |       |    95 |       | ns     |
| NOISE/HARMONIC PERFORMANCE    |                                 |       |       |       |        |
| Harmonic Distortion (SFDR)    | V OUT = 2V p-p f C = 100 kHz    |       |  -115 |       | dBc    |
|                               | f C = 1MHz                      |       |   -93 |       | dBc    |
|                               | f C = 2MHz                      |       |   -80 |       | dBc    |
|                               | f C = 5MHz                      |       |   -61 |       | dBc    |
| Input Voltage Noise           | f = 10 Hz                       |       |   2.4 |       | nV/√Hz |
|                               | f = 100 kHz                     |       |     1 |       | nV/√Hz |
| Input Current Noise           | f = 10 Hz                       |       |    11 |       | pA/√Hz |
|                               | f = 100 kHz                     |       |   2.8 |       | pA/√Hz |
| 0.1 Hz to 10 Hz Noise         | G=+101, R F = 1 kΩ, R G = 10Ω   |       |    99 |       | nV p-p |
| DC PERFORMANCE                |                                 |       |       |       |        |
| Input Offset Voltage          |                                 |  -500 |   -30 |  +500 | µV     |
| Input Offset Voltage Drift    |                                 |       |   0.2 |       | µV/°C  |
| Input Bias Current            |                                 |   -17 |   -11 |    -4 | µA     |
| Input Bias Current Drift      |                                 |       |     3 |       | nA/°C  |
| Input Bias Offset Current     |                                 |  -0.6 | -0.02 |  +0.6 | µA     |
| Open-Loop Gain                | V OUT = 0.5V to 4.5V            |    97 |   110 |       | dB     |

## Known Good Die

## [ADA4897-2-KGD](https://www.analog.com/ada4897-2-kgd?doc=ada4897-2-kgd.pdf)

| Parameter                           | Test Conditions/Comments         |   Min | Typ         |   Max | Unit   |
|-------------------------------------|----------------------------------|-------|-------------|-------|--------|
| INPUT CHARACTERISTICS               |                                  |       |             |       |        |
| Input Resistance                    |                                  |       |             |       |        |
| Common-Mode                         |                                  |       | 10          |       | MΩ     |
| Differential                        |                                  |       | 10          |       | kΩ     |
| Input Capacitance                   |                                  |       |             |       |        |
| Common-Mode                         |                                  |       | 3           |       | pF     |
| Differential                        |                                  |       | 11          |       | pF     |
| Input Common-ModeVoltage Range      |                                  |       | 0.1 to 4.1  |       | V      |
| Common-Mode Rejection Ratio (CMRR)  | V CM = 1V to 4V                  |   -91 | -118        |       | dB     |
| OUTPUT CHARACTERISTICS              |                                  |       |             |       |        |
| Output Overdrive RecoveryTime       | V IN = 0V to 5V,G=+2             |       | 96          |       | ns     |
| Output Voltage Swing                |                                  |       |             |       |        |
| Positive                            | R L = 1 kΩ                       |  4.85 | 4.98        |       | V      |
|                                     | R L = 100Ω                       |   4.8 | 4.88        |       | V      |
| Negative                            | R L = 1 kΩ                       |  0.15 | 0.014       |       | V      |
|                                     | R L = 100Ω                       |   0.2 | 0.08        |       | V      |
| Output Current                      | SFDR = -45 dBc                   |       | 70          |       | mA     |
| Short-Circuit Current               | Sinking/sourcing                 |       | 125         |       | mA     |
| Capacitive Load Drive               | 30% overshoot,G=+2               |       | 39          |       | pF     |
| POWER SUPPLY                        |                                  |       |             |       |        |
| Operating Range                     |                                  |       | 3 to 10     |       | V      |
| Quiescent Current per Amplifier     |                                  |   2.6 | 2.8         |   2.9 | mA     |
|                                     | DISABLEx = 0V                    |       | 0.05        |  0.18 | mA     |
| Power Supply Rejection Ratio (PSRR) |                                  |       |             |       |        |
| Positive                            | +V S = 4.5V to 5.5 V, -V S = 0V  |   -96 | -123        |       | dB     |
| Negative                            | +V S = 5V, -V S = -0.5V to +0.5V |   -96 | -121        |       | dB     |
| DISABLEx PIN                        |                                  |       |             |       |        |
| DISABLExVoltage                     | Enabled                          |       | >+V S - 0.5 |       | V      |
|                                     | Disabled                         |       | <+V S - 2   |       | V      |
| Input Current                       |                                  |       |             |       |        |
| Enabled                             | DISABLEx = 5V                    |       | -1.2        |       | µA     |
| Disabled                            | DISABLEx = 0V                    |       | -20         |       | µA     |
| Switching Speed                     |                                  |       |             |       |        |
| Enabled                             |                                  |       | 0.25        |       | µs     |
| Disabled                            |                                  |       | 12          |       | µs     |

## +3 V SUPPLY

TA = 25°C, G = +1, RL = 1 kΩ to midsupply, unless otherwise noted.

## Table 3.

| Parameter                          | Test Conditions/Comments        |   Min | Typ        |   Max | Unit   |
|------------------------------------|---------------------------------|-------|------------|-------|--------|
| DYNAMIC PERFORMANCE                |                                 |       |            |       |        |
| -3 dB Bandwidth                    | G=+1,V OUT = 0.02V p-p          |       | 230        |       | MHz    |
|                                    | G=-1,V OUT = 1V p-p             |       | 45         |       | MHz    |
|                                    | G=+2,V OUT = 0.02V p-p          |       | 90         |       | MHz    |
| Bandwidth for 0.1 dB Flatness      | G=+2,V OUT = 2V p-p, R L = 100Ω |       | 7          |       | MHz    |
| Slew Rate                          | G=+2,V OUT = 1V step            |       | 85         |       | V/µs   |
| Settling Time to 0.1%              | G=+2,V OUT = 2V step            |       | 45         |       | ns     |
| Settling Time to 0.01%             | G=+2,V OUT = 2V step            |       | 96         |       | ns     |
| NOISE/HARMONIC PERFORMANCE         |                                 |       |            |       |        |
| Harmonic Distortion (SFDR)         | f C = 100 kHz,V OUT =2Vp-p,G=+2 |       | -105       |       | dBc    |
|                                    | f C = 1 MHz,V OUT = 1V p-p,G=-1 |       | -84        |       | dBc    |
|                                    | f C = 2 MHz,V OUT = 1V p-p,G=-1 |       | -77        |       | dBc    |
|                                    | f C = 5 MHz,V OUT = 1V p-p,G=-1 |       | -60        |       | dBc    |
| Input Voltage Noise                | f = 10 Hz                       |       | 2.3        |       | nV/√Hz |
|                                    | f = 100 kHz                     |       | 1          |       | nV/√Hz |
| Input Current Noise                | f = 10 Hz                       |       | 11         |       | pA/√Hz |
|                                    | f = 100 kHz                     |       | 2.8        |       | pA/√Hz |
| 0.1 Hz to 10 Hz Noise              | G=+101, R F = 1 kΩ, R G = 10Ω   |       | 99         |       | nV p-p |
| DC PERFORMANCE                     |                                 |       |            |       |        |
| Input Offset Voltage               |                                 |  -500 | -30        |  +500 | µV     |
| Input Offset Voltage Drift         |                                 |       | 0.2        |       | µV/°C  |
| Input Bias Current                 |                                 |   -17 | -11        |    -4 | µA     |
| Input Bias Current Drift           |                                 |       | 3          |       | nA/°C  |
| Input Bias Offset Current          |                                 |  -0.6 | -0.02      |  +0.6 | µA     |
| Open-Loop Gain                     | V OUT = 0.5V to 2.5V            |    95 | 108        |       | dB     |
| INPUT CHARACTERISTICS              |                                 |       |            |       |        |
| Input Resistance                   |                                 |       |            |       |        |
| Common-Mode                        |                                 |       | 10         |       | MΩ     |
| Differential                       |                                 |       | 10         |       | kΩ     |
| Input Capacitance                  |                                 |       |            |       |        |
| Common-Mode                        |                                 |       | 3          |       | pF     |
| Differential                       |                                 |       | 11         |       | pF     |
| Input Common-ModeVoltage Range     |                                 |       | 0.1 to 2.1 |       | V      |
| Common-Mode Rejection Ratio (CMRR) | V CM = 1.1V to 1.9V             |   -90 | -124       |       | dB     |
| OUTPUT CHARACTERISTICS             |                                 |       |            |       |        |
| Output Overdrive Recovery Time     | V IN = 0V to 3V,G=+2            |       | 83         |       | ns     |
| Output Voltage Swing               |                                 |       |            |       |        |
| Positive                           | R L = 1 kΩ                      |  2.85 | 2.97       |       | V      |
|                                    | R L = 100Ω                      |   2.8 | 2.92       |       | V      |
| Negative                           | R L = 1 kΩ                      |  0.15 | 0.01       |       | V      |
|                                    | R L = 100Ω                      |   0.2 | 0.05       |       | V      |
| Output Current                     | SFDR = -45 dBc Sinking/sourcing |       | 60         |       | mA     |
| Short-Circuit Current              |                                 |       | 120        |       | mA     |
| Capacitive Load Drive              | 30% overshoot,G=+2              |       | 39         |       | pF     |

## Known Good Die

## [ADA4897-2-KGD](https://www.analog.com/ada4897-2-kgd?doc=ada4897-2-kgd.pdf)

| Parameter                           | Test Conditions/Comments         |   Min | Typ         |   Max | Unit   |
|-------------------------------------|----------------------------------|-------|-------------|-------|--------|
| POWER SUPPLY                        |                                  |       |             |       |        |
| Operating Range                     |                                  |       | 3 to 10     |       | V      |
| Quiescent Current per Amplifier     |                                  |   2.5 | 2.7         |   2.9 | mA     |
|                                     | DISABLEx = 0V                    |       | 0.035       |  0.15 | mA     |
| Power Supply Rejection Ratio (PSRR) |                                  |       |             |       |        |
| Positive                            | +V S = 2.7V to 3.7 V, -V S = 0V  |   -96 | -121        |       | dB     |
| Negative                            | +V S = 3V, -V S = -0.3V to +0.7V |   -96 | -120        |       | dB     |
| DISABLEx PIN                        |                                  |       |             |       |        |
| DISABLExVoltage                     | Enabled                          |       | >+V S - 0.5 |       | V      |
|                                     | Disabled                         |       | <-V S + 2   |       | V      |
| Input Current                       |                                  |       |             |       |        |
| Enabled                             | DISABLEx = 3V                    |       | -1.2        |       | µA     |
| Disabled                            | DISABLEx = 0V                    |       | -15         |       | µA     |
| Switching Speed                     |                                  |       |             |       |        |
| Enabled                             |                                  |       | 0.25        |       | µs     |
| Disabled                            |                                  |       | 12          |       | µs     |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                   | Rating          |
|-----------------------------|-----------------|
| Supply Voltage              | 12.6V           |
| Common-Mode Input Voltage   | ±V S ± 0.5V     |
| Differential Input Voltage  | ±1.8V           |
| Storage Temperature Range   | -65°C to +125°C |
| Operating Temperature Range | -40°C to +125°C |
| Junction Temperature        | 150°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 1. Pad Configuration

<!-- image -->

Table 5. Pad Function Descriptions

| Pad No.   |   X-Axis |   Y-Axis | Mnemonic   | Description                      |
|-----------|----------|----------|------------|----------------------------------|
| 1         |     -402 |     +279 | OUT1       | Output 1                         |
| 1A        |     -402 |     +354 | OUT1       | Output 1, Double Bond Pad        |
| 2         |     -400 |      -41 | -IN1       | Inverting Input 1                |
| 3         |     -400 |     -197 | +IN1       | Noninverting Input 1             |
| 4         |     -420 |     -303 | -V S       | Negative Supply                  |
| 4A        |     -420 |     -378 | -V S       | Negative Supply, Double Bond Pad |
| 5         |     -395 |     -485 | DISABLE1   | Disable Control 1                |
| 6         |     +395 |     -485 | DISABLE2   | Disable Control 2                |
| 7         |     +402 |     -317 | +IN2       | Noninverting Input 2             |
| 8         |     +402 |     -161 | -IN2       | Inverting Input 2                |
| 9         |     +402 |     +275 | OUT2       | Output 2                         |
| 9A        |     +402 |     +203 | OUT2       | Output 2, Double Bond Pad        |
| 10        |     +364 |     +477 | +V S       | Positive Supply                  |
| 10A       |     +364 |     +402 | +V S       | Positive Supply, Double Bond Pad |

## OUTLINE DIMENSIONS

Figure 2. 10-Pad Bare Die [CHIP] (C-10-6) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter                | Value           | Unit           |
|--------------------------|-----------------|----------------|
| Scribe Line Width        | 75              | µm             |
| Die Size (Maximum Size)  | 1095 × 1445     | µm             |
| Thickness                | 483             | µm             |
| Bond Pads (Minimum Size) | 70 × 70         | µm             |
| Bond Pad Composition     | 1%AlCu          | %              |
| Backside                 | Si              | Not applicable |
| Passivation              | Doped oxide/SiN | Not applicable |
| ESD                      | HBM2000         | V              |

## Table 7. Assembly Recommendations

| Assembly Component   | Recommendation       |
|----------------------|----------------------|
| Die Attach           | Ablestik 84-1LMIS R4 |
| Bonding Method       | 1 mil gold           |

## ORDERING GUIDE

| Model         | Temperature Range   | Package Description    | Package Option   |
|---------------|---------------------|------------------------|------------------|
| ADA4897-2-KGD | -40°C to +125°C     | 10-Pad Bare Die [CHIP] | C-10-6           |

<!-- image -->