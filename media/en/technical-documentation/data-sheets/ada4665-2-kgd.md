<!-- lastmod 2019-11-01 -->
<!-- image -->

Known Good Die

## FEATURES

Low supply current per amplifier: 290 µA typical, IOUT = 0 mA

Low input bias current: 1 pA maximum Wide gain bandwidth product: 1.2 MHz typical Slew rate: 1 V/µs typical Offset voltage drift: 3 µV/°C typical Single-supply operation: 5 V to 16 V Dual-supply operation: ±2.5 V to ±8 V Unity-gain stable

## APPLICATIONS

Portable systems High density power budget systems Medical equipment Physiological measurement Precision references Multipole filters Sensors Transimpedance amplifiers Buffer and level shifting

## 16 V, 1.2 MHz, CMOS Rail-to-Rail

## Input/Output Operational Amplifier

[ADA4665-2-KGD](https://www.analog.com/ADA4665-2?doc=ADA4665-2-KGD.pdf)

## GENERAL DESCRIPTION

The ADA4665-2-KGD is a rail-to-rail, input and output, dual amplifier optimized for lower power budget designs. The ADA4665-2-KGD offers a low supply current of 400 µA maximum per amplifier at 25°C and 600 μA maximum per amplifier over the extended industrial temperature range. This feature makes the ADA4665-2-KGD well suited for low power applications.

In addition, the ADA4665-2-KGD has a low bias current of 1 pA maximum, low offset voltage drift of 3 µV/°C, and bandwidth of 1.2 MHz. The combination of these features, together with a wide supply voltage range from 5 V to 16 V, allows the device to be used in a wide variety of other applications, including process control, instrumentation equipment, buffering, and sensor front ends.

Furthermore, its rail-to-rail input and output swing adds to its versatility. The ADA4665-2-KGD is specified from -40°C to +125°C.

Additional application and technical information can be found in the ADA4665-2 data sheet.

Known Good Die (KGD): this die is fully guaranteed to data sheet specifications.

Tel: 781.329.4700

## [ADA4665-2-KGD](https://www.analog.com/ADA4665-2?doc=ADA4665-2-KGD.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Characteristics-16 VOperation.............................. 3                                    |
| Electrical Characteristics-5 VOperation................................ 5                                   |

## REVISION HISTORY

10/2019-Revision 0: Initial Version

| Absolute Maximum Ratings ............................................................6          |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................6 |
| Pin Configuration and Function Description ...............................7                     |
| Outline Dimensions..........................................................................8   |
| Die Specifications and Assembly Recommendations...............8                                 |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-16 V OPERATION

Supply voltage (VSY) = 16 V, common-mode voltage (VCM) = VSY/2, and TA = 25°C, unless otherwise noted.

Table 1.

| Parameter                    | Symbol    | Test Conditions/Comments                                              | Min   | Typ   | Max     | Unit    |
|------------------------------|-----------|-----------------------------------------------------------------------|-------|-------|---------|---------|
| INPUT CHARACTERISTICS        |           |                                                                       |       |       |         |         |
| Offset Voltage               | V OS      | V CM = 16V                                                            |       | 1     | 4       | mV      |
|                              |           | V CM = 0V to 16V                                                      |       | 1     | 6       | mV      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   |       |       | 9       | mV      |
| Offset Voltage Drift         | ∆V OS /∆T | -40°C ≤T A ≤ +125°C                                                   |       | 3     |         | µV/°C   |
| Input Bias Current           | I B       |                                                                       |       | 0.1   | 1       | pA      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   |       |       | 200     | pA      |
| Input Offset Current         | I OS      |                                                                       |       | 0.1   | 1       | pA      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   |       |       | 40      | pA      |
| Input Voltage Range          |           | -40°C ≤T A ≤ +125°C                                                   |       |       | 16      | V       |
| Common-Mode Rejection Ratio  | CMRR      | V CM = 0V to 16V                                                      | 0 55  | 75    |         | dB      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   | 50    |       |         | dB      |
| Large Signal Voltage Gain    | A VO      | Load resistance (R L ) = 10 kΩ, output voltage (V OUT ) = 0.5V to 15V | 85    | 100   |         | dB      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   | 75    |       |         | dB      |
| Input Resistance             | R IN      |                                                                       |       | 4     |         | GΩ      |
| Input Capacitance            |           |                                                                       |       |       |         |         |
| Differential Mode            | C INDM    |                                                                       |       | 2     |         | pF      |
| Common Mode                  | C INCM    |                                                                       |       | 7     |         | pF      |
| OUTPUTCHARACTERISTICS        |           |                                                                       |       |       |         |         |
| Output Voltage               |           |                                                                       |       |       |         |         |
| High                         | V OH      | R L = 100 kΩ toV CM                                                   | 15.95 | 15.99 |         | V       |
|                              |           | -40°C ≤T A ≤ +125°C                                                   | 15.9  |       |         | V       |
|                              |           | R L = 10 kΩ toV CM                                                    | 15.9  | 15.95 |         | V       |
| Low                          | V OL      | -40°C ≤T A ≤ +125°C R L = 100 kΩ toV CM                               | 15.8  | 4     | 7.5     | V mV    |
|                              |           | R L = 10 kΩ toV CM                                                    |       | 40    | 75      | mV      |
| Short-Circuit Current        |           | -40°C ≤T A ≤ +125°C                                                   |       |       | 150     | mV      |
| Closed-Loop Output           | I SC Z    | 1                                                                     |       | ±30   |         | mA      |
| Impedance                    | OUT       | Frequency = 100 kHz,A V =                                             |       | 100   |         | Ω       |
| POWER SUPPLY                 |           |                                                                       |       |       |         |         |
| Power Supply Rejection Ratio | PSRR      | V SY = 5V to 16V                                                      | 70    | 95    |         | dB      |
|                              |           | -40°C ≤T A ≤ +125°C                                                   | 65    |       |         | dB µA   |
| Supply Current perAmplifier  | I SY      | Output current (I OUT )=0mA -40°C ≤T A ≤ +125°C                       |       | 290   | 400 600 | µA      |
| Operating Range              |           | Single supply                                                         | 5     |       |         |         |
|                              | V SY      | Dual supply                                                           | ±2.5  |       | ±8      | V       |
|                              |           |                                                                       |       |       | 16      | V       |
| DYNAMIC PERFORMANCE          |           |                                                                       |       |       |         |         |
| Slew Rate                    | SR        | R L = 10 kΩ, load capacitance (C L )= 50 pF,A V = 1                   |       | 1     |         | V/µs    |
| Settling Time to 0.1%        | t S       | Input voltage (V IN ) = 1V step, R L = 2 kΩ, C L = 50 pF              |       | 6.5   |         | µs      |
| Gain Bandwidth Product       | GBP       | R L = 10 kΩ, C L = 50 pF,A V = 1                                      |       | 1.2   |         | MHz     |
| Phase Margin                 | Φ M       | R L = 10 kΩ, C L = 50 pF,A V = 1                                      |       | 50    |         | Degrees |

## [ADA4665-2-KGD](https://www.analog.com/ADA4665-2?doc=ADA4665-2-KGD.pdf)

## Known Good Die

| Parameter             | Symbol   | Test Conditions/Comments    |   Typ | Max   | Unit   |
|-----------------------|----------|-----------------------------|-------|-------|--------|
| NOISE PERFORMANCE     |          |                             |       |       |        |
| Voltage Noise         | e n p-p  | Frequency = 0.1 Hz to 10 Hz |     3 |       | µV p-p |
| Voltage Noise Density | e n      | Frequency = 1 kHz           |    32 |       | nV/√Hz |
|                       |          | Frequency = 10 kHz          |    27 |       | nV/√Hz |
| Current Noise Density | i n      | Frequency = 1 kHz           |    50 |       | fA/√Hz |

## ELECTRICAL CHARACTERISTICS-5 V OPERATION

VSY = 5 V, VCM = VSY/2, and TA = 25°C, unless otherwise noted.

Table 2.

| Parameter                       | Symbol    | Test Conditions/Comments                | Min   | Typ    | Max   | Unit    |
|---------------------------------|-----------|-----------------------------------------|-------|--------|-------|---------|
| INPUT CHARACTERISTICS           |           |                                         |       |        |       |         |
| Offset Voltage                  | V OS      | V CM = 5V                               |       | 1      | 4     | mV      |
|                                 |           | V CM = 0V to 5V                         |       | 1      | 6     | mV      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 9     | mV      |
| Offset Voltage Drift            | ∆V OS /∆T | -40°C ≤T A ≤ +125°C                     |       | 3      |       | µV/°C   |
| Input Bias Current              | I B       |                                         |       | 0.1    | 1     | pA      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 100   | pA      |
| Input Offset Current            | I OS      |                                         |       | 0.1    | 1     | pA      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 10    | pA      |
| Input Voltage Range             |           | -40°C ≤T A ≤ +125°C                     | 0     |        | 5     | V       |
| Common-Mode Rejection Ratio     | CMRR      | V CM = 0V to 5V                         | 55    | 75     |       | dB      |
|                                 |           | -40°C ≤T A ≤ +125°C                     | 50    |        |       | dB      |
| Large Signal Voltage Gain       | A VO      | R L = 10 kΩ,V OUT = 0.5V to 4.5V        | 85    | 100    |       | dB      |
|                                 |           | -40°C ≤T A ≤ +125°C                     | 75    |        |       | dB      |
| Input Resistance                | R IN      |                                         |       | 1      |       | GΩ      |
| Input Capacitance               |           |                                         |       |        |       |         |
| Differential Mode               | C INDM    |                                         |       | 2      |       | pF      |
| Common Mode                     | C INCM    |                                         |       | 7      |       | pF      |
| OUTPUTCHARACTERISTICS           |           |                                         |       |        |       |         |
| Output Voltage                  |           |                                         |       |        |       |         |
| High                            | V OH      | R L = 100 kΩ toV CM                     | 4.95  | 4.99   |       | V       |
|                                 |           | -40°C ≤T A ≤ +125°C                     | 4.9   |        |       | V       |
|                                 |           | R L = 10 kΩ toV CM                      | 4.9   | 4.96   |       | V       |
|                                 |           | -40°C ≤T A ≤ +125°C                     | 4.8   |        |       | V       |
| Low                             | V OL      | R L = 100 kΩ toV CM                     |       | 3      | 5     | mV      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 10    | mV      |
|                                 |           | R L = 10 kΩ toV CM                      |       | 30     | 50    | mV      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 100   | mV      |
| Short-Circuit Current Impedance | I SC      | Frequency = 100 kHz,A V = 1             |       | ±8 100 |       | mA Ω    |
| Closed-Loop Output POWER SUPPLY | Z OUT     |                                         |       |        |       |         |
| Power Supply Rejection Ratio    | PSRR      | V SY = 5V to 16V                        | 70    | 95     |       | dB      |
|                                 |           | -40°C ≤T A ≤ +125°C                     | 65    |        |       | dB      |
| Supply Current perAmplifier     | I SY      | I OUT =0mA                              |       | 270    | 350   | µA      |
|                                 |           | -40°C ≤T A ≤ +125°C                     |       |        | 600   | µA      |
| Operating Range                 | V SY      | Dual supply                             | ±2.5  |        | ±8    | V       |
|                                 |           | Single supply                           | 5     |        | 16    | V       |
| DYNAMIC PERFORMANCE             |           |                                         |       |        |       |         |
| Slew Rate                       | SR        | R L = 10 kΩ, C L = 50 pF,A V = 1        |       | 1      |       | V/µs    |
| Settling Time to 0.1%           | t S       | V IN = 1V step, R L = 2 kΩ, C L = 50 pF |       | 6.5    |       | µs      |
| Gain Bandwidth Product          | GBP       | R L = 10 kΩ, C L = 50 pF,A V = 1        |       | 1.2    |       | MHz     |
| Phase Margin                    | Φ M       | R L = 10 kΩ, C L = 50 pF,A V = 1        |       | 50     |       | Degrees |
| NOISE PERFORMANCE               |           |                                         |       |        |       |         |
| Voltage Noise                   | e n p-p   | Frequency = 0.1 Hz to 10 Hz             |       | 3      |       | µV p-p  |
| Voltage Noise Density           | e n       | Frequency = 1 kHz                       |       | 32     |       | nV/√Hz  |
|                                 |           | Frequency = 10 kHz                      |       | 27     |       | nV/√Hz  |
| Current Noise Density           | i n       | Frequency = 1 kHz                       |       | 50     |       | fA/√Hz  |

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                               | Rating                     |
|-----------------------------------------|----------------------------|
| V SY                                    | 16.5V                      |
| V IN 1                                  | Ground -0.3V to V SY +0.3V |
| Input Current                           | ±10mA                      |
| DifferentialV IN                        | ±V SY                      |
| Output Short-Circuit Duration to Ground | Indefinite                 |
| Temperature                             | Temperature                |
| Storage Range                           | -65°C to +150°C            |
| Operating Range                         | -40°C to +125°C            |
| Junction Range                          | -65°C to +150°C            |
| Lead (Soldering, 60sec)                 | 300°C                      |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTION

Figure 1. Pad Configuration

<!-- image -->

Table 4. Pad Configuration Descriptions 1

|   Pad No. | Mnemonic   |   XCoordinate |   YCoordinate | Description                   |
|-----------|------------|---------------|---------------|-------------------------------|
|         1 | OUTA       |          -541 |          +888 | Output, ChannelA              |
|         2 | -INA       |          -541 |          +604 | Inverting Input, ChannelA     |
|         3 | +INA       |          -541 |          +331 | Noninverting Input, ChannelA  |
|         4 | V-         |          -541 |          -888 | Negative Supply Voltage       |
|         5 | +IN B      |          +541 |          -888 | Noninverting Input, Channel B |
|         6 | -IN B      |          +541 |          -583 | Inverting Input, Channel B    |
|         7 | OUTB       |          +541 |          -337 | Output, Channel B             |
|         8 | V+         |          +541 |          +713 | Positive Supply Voltage       |

1  All dimensions are referenced from the center of the die to the center of each bond pad.

## OUTLINE DIMENSIONS

Figure 2. 8-Pad Bare Die [CHIP] (C-8-18) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 5. Die Specifications

| Parameter            | Value                         | Unit           |
|----------------------|-------------------------------|----------------|
| Chip Size            | 1310 × 2015                   | µm             |
| Scribe Line Width    | 80                            | µm             |
| Die Size             | 1390 × 2085                   | µm             |
| Thickness            | 305                           | µm             |
| Backside             | Negative supply               | Not applicable |
| Passivation          | 1 (oxynitride)                | µm             |
| Bond Pads (Minimum)  | 70 × 70                       | µm             |
| Bond Pad Composition | 99.5 aluminum (Al)/0.5 copper | %              |

## Table 6. Assembly Recommendations

| AssemblyComponent   | Recommendation             |
|---------------------|----------------------------|
| Die Attach          | Hitachi CEL9240HF10AK      |
| Bonding Method      | Gold ballor aluminum wedge |
| Bonding Sequence    | Unspecified                |

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                | Package Option   |
|------------------|---------------------|------------------------------------|------------------|
| ADA4665-2-KGD-WP | -40°C to +125°C     | 8-Pad Bare Die [CHIP], Waffle Pack | C-8-18           |

<!-- image -->

03-11-2019-A