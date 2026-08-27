<!-- lastmod 2019-10-16 -->
<!-- image -->

## Known Good Die

## FEATURES

Low offset voltage: 5 µV maximum at 5.0 V and 30 V Extremely low offset voltage drift: 22 nV/°C maximum at 30 V Low voltage noise density: 5.8 nV/ √ Hz typical Low peak-to-peak voltage noise: 117 nV p-p from 0.1 Hz to

10 Hz typical Low input bias current: 50 pA typical Unity-gain crossover: 3 MHz Single-supply operation: input voltage range includes ground and rail-to-rail output Wide range of operating voltages Single-supply operation: 4.5 V to 55 V Dual-supply operation: ±2.25 V to ±27.5 V Integrated EMI filters Unity-gain stable

## APPLICATIONS

Inductance, capacitance, and resistance (LCR) meter/megohmmeter front-end amplifiers Load cell and bridge transducers Magnetic force balance scales High precision shunt current sensing

Thermocouple/resistance temperature detector (RTD) sensors

Programmable logic controller (PLC) input and output amplifiers

## 55 V, EMI Enhanced, Zero Drift, Ultralow Noise, Rail-to-Rail Output Operational Amplifier

[ADA4522-2-KGD](https://www.analog.com/ADA4522-2?doc=ADA4522-2-KGD.pdf)

## GENERAL DESCRIPTION

The ADA4522-2-KGD is a dual channel, zero drift op amp with low noise and power, ground sensing inputs, and rail -to-rail output, optimized for total accuracy over time, temperature, and voltage conditions. The wide operating voltage and temperature ranges, as well as the high open-loop gain and low dc and ac errors make the device well suited for amplifying small input signals and for accurately reproducing larger signals in a wide variety of applications.

The ADA4522-2-KGD performance is specified at 5.0 V , 30 V , and 55 V power supply voltages, and the device operates over the 4.5 V to 55 V range. The ADA4522-2-KGD is an excellent selection for applications using single-ended supplies of 5 V and 30 V or for applications using higher single supplies and dual supplies of ±2.5 V and ±15 V . The ADA4522-2-KGD uses on-chip filtering to achieve high immunity to electromagnetic interference (EMI).

The ADA4522-2-KGD is fully specified over the -40°C to +125°C extended industrial temperature range.

Additional application and technical information can be found in the ADA4522-2 data sheet.

Known Good Die (KGD): these die are fully guaranteed to data sheet specifications.

©2019 Analog Devices, Inc. All rights reserved.

## [ADA4522-2-KGD](https://www.analog.com/ADA4522-2?doc=ADA4522-2-KGD.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   |   1 |
|-----------------------------------------------------------------------------------------------------------|-----|
| Applications.......................................................................................       |   1 |
| General Description.........................................................................              |   1 |
| Revision History ...............................................................................          |   2 |
| Specifications.....................................................................................       |   3 |
| Electrical Characteristics-5.0 VOperation.............................                                    |   3 |
| Electrical Characteristics-30 VOperation..............................                                    |   4 |
| Electrical Characteristics-55 VOperation..............................                                    |   6 |

## REVISION HISTORY

10/2019-Revision 0: Initial Version

## Known Good Die

| Absolute Maximum Ratings ............................................................8          |    |
|-------------------------------------------------------------------------------------------------|----|
| ESD Caution...................................................................................8 |    |
| Pin Configuration and Function Descriptions..............................9                      |    |
| Outline Dimensions.......................................................................       | 10 |
| Die Specifications and Assembly Recommendations............                                     | 10 |
| Ordering Guide ..........................................................................       | 10 |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-5.0 V OPERATION

Supply voltage (VSY) = 5.0 V , common-mode voltage (VCM) = VSY/2 V , and TA = 25°C, unless otherwise specified.

Table 1.

| Parameter                                                                                                      | Symbol                      | Test Conditions/Comments                                                                                                         | Min             | Typ              | Max                   | Unit                |
|----------------------------------------------------------------------------------------------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------|-----------------------|---------------------|
| INPUT CHARACTERISTICS                                                                                          |                             |                                                                                                                                  |                 |                  |                       |                     |
| Offset Voltage                                                                                                 | V OS                        | V CM =V SY /2                                                                                                                    |                 | 0.7              | 5                     | µV                  |
| Offset Voltage Drift                                                                                           | ΔV OS /ΔT                   |                                                                                                                                  |                 | 2.5              | 15                    | nV/°C               |
| Input Bias Current                                                                                             | I B IVR CMRR                | -40°C ≤T A ≤ +85°C -40°C ≤T A ≤ +125°C -40°C ≤T A ≤ +125°C                                                                       | 0               | 50               | 150 500 2 250 350 3.5 | pA pA V dB dB dB dB |
| Input Offset Current Input Voltage Range Common-Mode Rejection Ratio                                           | I OS                        | -40°C ≤T A ≤ +85°C                                                                                                               |                 | 80               | 500                   | nA pA pA pA         |
| Large Signal Voltage Gain Input Resistance Differential Mode                                                   | A VO                        | V CM = 0V to 3.5V -40°C ≤T A ≤ +125°C Load resistance (R L ) = 10 kΩ, output voltage (V OUT ) = 0.5V to 4.5V -40°C ≤T A ≤ +125°C | 135 130 125 125 | 155 145          |                       |                     |
| CommonMode Input Capacitance Differential Mode CommonMode                                                      | R INDM R INCM C INDM C INCM |                                                                                                                                  |                 | 30 100 7         |                       | kΩ GΩ pF pF         |
| OUTPUT CHARACTERISTICS                                                                                         |                             |                                                                                                                                  |                 | 35               |                       |                     |
| Output Voltage High                                                                                            | V OH                        | R L = 10 kΩ toV SY /2 -40°C ≤T A ≤ +125°C                                                                                        | 4.97 4.95       | 4.98             |                       | V V                 |
| Output Voltage Low                                                                                             | V OL                        | R L = 10 kΩ toV SY /2 -40°C ≤T A ≤ +125°C Dropout voltage = 1V                                                                   |                 | 20               | 30 50                 | mV                  |
| Continuous Output Current Short-Circuit Current Source Short-Circuit Current Sink Closed-Loop Output Impedance | I OUT I SC+ I SC- Z OUT     | T A = 125°C T A = 125°C Frequency = 1 MHz, closed-loop gain (A V )= +1                                                           |                 | 14 22 15 29 19 4 |                       | mV mA mA mA mA mA Ω |
| POWER SUPPLY Power Supply Rejection Ratio                                                                      |                             | SY +55V, and for dual-supply operation,V SY = ±2.25V to ±27.5V -40°C ≤T A ≤ +125°C                                               | 150             | 160              |                       | dB                  |
|                                                                                                                | PSRR                        | For single-supply operation,V = +4.5V to                                                                                         |                 |                  |                       |                     |
|                                                                                                                |                             |                                                                                                                                  | 145             |                  |                       |                     |
|                                                                                                                |                             | Output current (I OUT )=0mA                                                                                                      |                 |                  |                       | dB                  |
| Supply Current per Amplifier                                                                                   | I SY                        |                                                                                                                                  |                 | 830              | 900                   | µA                  |
|                                                                                                                |                             | ≤T A ≤ +125°C                                                                                                                    |                 |                  | 950                   |                     |
|                                                                                                                |                             | -40°C                                                                                                                            |                 |                  |                       | µA                  |

## [ADA4522-2-KGD](https://www.analog.com/ADA4522-2?doc=ADA4522-2-KGD.pdf)

## Known Good Die

| Parameter                                            | Symbol   | Test Conditions/Comments                                              | Min   |   Typ | Max   | Unit    |
|------------------------------------------------------|----------|-----------------------------------------------------------------------|-------|-------|-------|---------|
| DYNAMIC PERFORMANCE                                  |          |                                                                       |       |       |       |         |
| Slew Rate                                            | SR+      | R L = 10 kΩ, C L = 50 pF,A V = 1                                      |       |   1.4 |       | V/µs    |
|                                                      | SR-      | R L = 10 kΩ, C L = 50 pF,A V = 1                                      |       |   1.3 |       | V/µs    |
| Gain Bandwidth Product                               | GBP      | Input voltage (V IN ) = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A VO = 100 |       |   2.7 |       | MHz     |
| Unity-Gain Crossover                                 | UGC      | V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A VO = 1                    |       |     3 |       | MHz     |
| -3 dB Closed-Loop Bandwidth                          | f -3dB   | V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A V = 1                     |       |   6.5 |       | MHz     |
| Phase Margin                                         | ΦM       | V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A VO = 1                    |       |    64 |       | Degrees |
| Settling Time to 0.1%                                | t S      | V IN = 1V step, R L = 10 kΩ, C L = 50 pF,A V = 1                      |       |     4 |       | µs      |
| Channel Separation                                   | CS       | V IN = 1V p-p, f = 10 kHz, R L = 10 kΩ, C L = 50 pF                   |       |    98 |       | dB      |
| EMI Rejection Ratio of +IN x                         | EMIRR    | V IN = 100mV PEAK , frequency = 400 MHz                               |       |    72 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 900 MHz                               |       |    80 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 1800 MHz                              |       |    83 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 2400 MHz                              |       |    85 |       | dB      |
| NOISE PERFORMANCE                                    |          |                                                                       |       |       |       |         |
| Total Harmonic Distortion + Noise Bandwidth = 80 kHz | THD+N    | A V = +1, frequency = 1 kHz,V IN = 0.6V rms                           |       | 0.001 |       | %       |
| Bandwidth = 500 kHz                                  |          |                                                                       |       |  0.02 |       | %       |
| Peak-to-Peak Voltage Noise                           | e N p-p  | A V = 100, frequency = 0.1 Hz to 10 Hz                                |       |   117 |       | nV p-p  |
| Voltage Noise Density                                | e N      | A V = 100, frequency = 1 kHz                                          |       |   5.8 |       | nV/√Hz  |
| Peak-to-Peak Current Noise                           | i N p-p  | A V = 100, frequency = 0.1 Hz to 10 Hz                                |       |    16 |       | pAp-p   |
| Current Noise Density                                | i N      | A V = 100, frequency = 1 kHz                                          |       |   0.8 |       | pA/√Hz  |

## ELECTRICAL CHARACTERISTICS-30 V OPERATION

VSY = 30 V , VCM = VSY/2 V , and TA = 25°C, unless otherwise specified.

## Table 2.

| Parameter                   | Symbol    | Test Conditions/Comments          |   Min |   Typ |   Max | Unit   |
|-----------------------------|-----------|-----------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS       |           |                                   |       |       |       |        |
| Offset Voltage              | V OS      | V CM =V SY /2                     |       |     1 |     5 | µV     |
|                             |           | -40°C ≤T A ≤ +125°C               |       |       |   7.2 | µV     |
| Offset Voltage Drift        | ΔV OS /ΔT |                                   |       |     4 |    22 | nV/°C  |
| Input Bias Current          | I B       |                                   |       |    50 |   150 | pA     |
|                             |           | -40°C ≤T A ≤ +85°C                |       |       |   500 | pA     |
|                             |           | -40°C ≤T A ≤ +125°C               |       |       |     3 | nA     |
| Input Offset Current        | I OS      |                                   |       |    80 |   300 | pA     |
|                             |           | -40°C ≤T A ≤ +85°C                |       |       |   400 | pA     |
|                             |           | -40°C ≤T A ≤ +125°C               |       |       |   500 | pA     |
| Input Voltage Range         | IVR       |                                   |     0 |       |  28.5 | V      |
| Common-Mode Rejection Ratio | CMRR      | V CM = 0V to 28.5V                |   145 |   160 |       | dB     |
|                             |           | -40°C ≤T A ≤ +125°C               |   140 |       |       | dB     |
| Large Signal Voltage Gain   | A VO      | R L = 10 kΩ,V OUT = 0.5V to 29.5V |   140 |   150 |       | dB     |
|                             |           | -40°C ≤T A ≤ +125°C               |   135 |       |       | dB     |
| Input Resistance            |           |                                   |       |       |       |        |
| Differential Mode           | R INDM    |                                   |       |    30 |       | kΩ     |
| CommonMode                  | R INCM    |                                   |       |   400 |       | GΩ     |
| Input Capacitance           |           |                                   |       |       |       |        |
| Differential Mode           | C INDM    |                                   |       |     7 |       | pF     |
| CommonMode                  | C INCM    |                                   |       |    35 |       | pF     |

## Known Good Die

## [ADA4522-2-KGD](https://www.analog.com/ADA4522-2?doc=ADA4522-2-KGD.pdf)

| Parameter                                                  | Symbol       | Test Conditions/Comments                                                                             |   Min | Typ     | Max     | Unit          |
|------------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------|-------|---------|---------|---------------|
| OUTPUT CHARACTERISTICS                                     |              |                                                                                                      |       |         |         |               |
| Output Voltage High                                        | V OH         | R L = 10 kΩ toV SY /2                                                                                | 29.87 | 29.89   |         | V             |
| Output Voltage Low                                         | V OL         | R L = 10 kΩ toV SY /2                                                                                |       | 110     | 130     | mV            |
| Continuous Output Current                                  | I OUT        | Dropout voltage = 1V                                                                                 |       | 14      |         | mA            |
| Short-Circuit Current Source                               | I SC+        | T A = 125°C                                                                                          |       | 21 15   |         | mA mA         |
| Short-Circuit Current Sink                                 | I SC-        | T A = 125°C                                                                                          |       | 33 22   |         | mA mA         |
| Closed-Loop Output Impedance                               | Z OUT        | Frequency = 1 MHz,A V = +1                                                                           |       | 4       |         | Ω             |
| Power Supply Rejection Ratio                               |              | V SY = 4.5V to 55V -40°C ≤T A ≤ +125°C                                                               |   145 | 830     |         | dB µA         |
| POWER SUPPLY                                               |              |                                                                                                      |       |         |         |               |
|                                                            | PSRR         |                                                                                                      |   150 | 160     |         | dB            |
| Supply Current per Amplifier DYNAMIC PERFORMANCE Slew Rate | I SY SR+ SR- | I OUT =0mA -40°C ≤T A ≤ +125°C R L = 10 kΩ, C L = 50 pF,A V = 1 R L = 10 kΩ, C L = 50 pF,A V = 1     |       | 1.8 0.9 | 900 950 | µA V/µs V/µs  |
| Gain Bandwidth Product                                     | GBP          | V IN =10mVp-p,R L =10kΩ,C L =50pF,A VO =100                                                          |       | 2.7     |         | MHz           |
| Unity-Gain Crossover                                       | UGC          | V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A VO =1                                                    |       | 3       |         | MHz           |
| -3 dB Closed-Loop Bandwidth Phase Margin                   | f -3 dB Φ M  | V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A V = 1 V IN = 10 mVp-p, R L = 10 kΩ, C L = 50 pF,A VO = 1 |       | 6.5 64  |         | MHz Degrees   |
| Settling Time to 0.1%                                      | t S          | V IN = 10V step, R L = 10 kΩ, C L = 50 pF,A V = 1                                                    |       | 12      |         | µs            |
| Settling Time to 0.01%                                     | t S          | V IN = 10V step, R L = 10 kΩ, C L = 50 pF,A V = 1                                                    |       | 14      |         | µs            |
| Channel Separation                                         | CS           | V IN = 10V p-p, f = 10 kHz, R L = 10 kΩ, C L = 50 pF                                                 |       | 98      |         | dB            |
| EMI Rejection Ratio of +IN                                 | EMIRR        | V                                                                                                    |       |         |         | dB            |
| x                                                          |              | IN = 100mV PEAK , frequency = 400 MHz                                                                |       | 72      |         |               |
|                                                            |              | V IN = 100mV PEAK , frequency = 1800 MHz                                                             |       | 80 83   |         | dB            |
|                                                            |              | V IN = 100mV PEAK , frequency = 900 MHz                                                              |       |         |         | dB            |
| NOISE PERFORMANCE                                          |              | V IN = 100mV PEAK , frequency = 2400 MHz                                                             |       | 85      |         | dB            |
| Total Harmonic Distortion + Noise                          | THD+N        | A V = +1, frequency = 1 kHz,V IN = 6Vrms                                                             |       | 0.0005  |         | %             |
| Bandwidth = 500 kHz                                        |              |                                                                                                      |       | 0.004   |         | %             |
| Bandwidth = 80 kHz                                         |              |                                                                                                      |       |         |         |               |
| Peak-to-Peak Voltage Noise                                 | e N p-p e    | A V = 100, frequency = 0.1 Hz to 10 Hz                                                               |       | 117     |         | nV p-p nV/√Hz |
| Voltage Noise Density Peak-to-Peak Current Noise           | N i N p-p    | A V = 100, frequency = 1 kHz A V = 100, frequency = 0.1 Hz to 10 Hz                                  |       | 5.8 16  |         | pAp-p         |
| Current Noise Density                                      | i N          | A V = 100, frequency = 1 kHz                                                                         |       | 0.8     |         | pA/√Hz        |

## ELECTRICAL CHARACTERISTICS-55 V OPERATION

VSY = 55 V , VCM = VSY/2 V , TA = 25°C, unless otherwise specified.

Table 3.

| Parameter                    | Symbol    | Test Conditions/Comments          |   Min |   Typ |   Max | Unit   |
|------------------------------|-----------|-----------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS        |           |                                   |       |       |       |        |
| Offset Voltage               | V OS      | V CM =V SY /2                     |       |   1.5 |     7 | µV     |
|                              |           | -40°C ≤T A ≤ +125°C               |       |       |    10 | µV     |
| Offset Voltage Drift         | ΔV OS /ΔT |                                   |       |     6 |    30 | nV/°C  |
| Input Bias Current           | I B       |                                   |       |    50 |   150 | pA     |
|                              |           | -40°C ≤T A ≤ +85°C                |       |       |   500 | pA     |
|                              |           | -40°C ≤T A ≤ +125°C               |       |       |   4.5 | nA     |
| Input Offset Current         | I OS      |                                   |       |    80 |   300 | pA     |
|                              |           | -40°C ≤T A ≤ +85°C                |       |       |   400 | pA     |
|                              |           |                                   |       |       |       | pA     |
| Input Voltage Range          |           | -40°C ≤T A ≤ +125°C               |       |       |   500 |        |
|                              | IVR       |                                   |     0 |       |  53.5 | V      |
| Common-Mode Rejection Ratio  | CMRR      | V CM = 0V to 53.5V                |   140 |   144 |       | dB     |
|                              |           | -40°C ≤T A ≤ +125°C               |   135 |       |       | dB     |
| Large Signal Voltage Gain    | A VO      | R L = 10 kΩ,V OUT = 0.5V to 54.5V |   135 |   137 |       | dB     |
|                              |           | -40°C ≤T A ≤ +125°C               |   125 |       |       | dB     |
| Input Resistance             |           |                                   |       |       |       |        |
| Differential Mode            | R INDM    |                                   |       |    30 |       | kΩ     |
| CommonMode                   | R INCM    |                                   |       |  1000 |       | GΩ     |
| Input Capacitance            |           |                                   |       |       |       |        |
| DifferentialMode             | C INDM    |                                   |       |     7 |       | pF     |
| CommonMode                   | C INCM    |                                   |       |    35 |       | pF     |
| OUTPUT CHARACTERISTICS       |           |                                   |       |       |       |        |
| Output Voltage High          | V OH      | R L = 10 kΩ toV SY /2             | 54.75 |  54.8 |       | V      |
|                              |           | -40°C ≤T A ≤ +125°C               | 54.65 |       |       | V      |
| Output Voltage Low           | V OL      | R L = 10 kΩ toV SY /2             |       |   200 |   250 | mV     |
| Continuous Output Current    |           | -40°C ≤T A ≤ +125°C               |       |       |   350 | mV     |
|                              | I OUT     | Dropout voltage = 1V              |       |    14 |       | mA     |
| Short-Circuit Current Source | I SC+     |                                   |       |    21 |       | mA     |
|                              |           | T A = 125°C                       |       |    15 |       | mA     |
| Short-Circuit Current Sink   | I SC-     |                                   |       |    32 |       | mA     |
|                              |           | T A = 125°C                       |       |    22 |       | mA     |
| Closed-Loop Output Impedance | Z OUT     | Frequency = 1 MHz,A V = +1        |       |     4 |       | Ω      |
| POWER SUPPLY                 |           |                                   |       |       |       |        |
| Power Supply Rejection Ratio | PSRR      | V SY = 4.5V to 55V                |   150 |   160 |       | dB     |
|                              |           | -40°C ≤T A ≤ +125°C               |   145 |       |       | dB     |
| Supply Current per Amplifier | I SY      | I OUT =0mA                        |       |   830 |   900 | µA     |
|                              |           | -40°C ≤T A ≤ +125°C               |       |       |   950 | µA     |

## Known Good Die

## [ADA4522-2-KGD](https://www.analog.com/ADA4522-2?doc=ADA4522-2-KGD.pdf)

| Parameter                                            | Symbol   | Test Conditions/Comments                          | Min   |    Typ | Max   | Unit    |
|------------------------------------------------------|----------|---------------------------------------------------|-------|--------|-------|---------|
| DYNAMIC PERFORMANCE                                  |          |                                                   |       |        |       |         |
| Slew Rate                                            | SR+      | R L = 10 kΩ, C L = 50 pF,A V = 1                  |       |    1.7 |       | V/µs    |
|                                                      | SR-      | R L = 10 kΩ, C L = 50 pF,A V = 1                  |       |    0.8 |       | V/µs    |
| Gain Bandwidth Product                               | GBP      | V IN =10mVp-p,R L =10kΩ,C L =50pF,A VO =100       |       |    2.7 |       | MHz     |
| Unity-Gain Crossover                                 | UGC      | V IN =10mVp-p,R L =10kΩ,C L =50pF,A VO =1         |       |      3 |       | MHz     |
| -3 dB Closed-Loop Bandwidth                          | f -3 dB  | V IN =10mVp-p,R L =10kΩ,C L =50pF,A V =1          |       |    6.5 |       | MHz     |
| Phase Margin                                         | Φ M      | V IN =10mVp-p,R L =10kΩ,C L =50pF,A VO =1         |       |     64 |       | Degrees |
| Settling Time to 0.1%                                | t S      | V IN = 10V step, R L = 10 kΩ, C L = 50 pF,A V = 1 |       |     12 |       | µs      |
| Settling Time to 0.01%                               | t S      | V IN = 10V step, R L = 10 kΩ, C L = 50 pF,A V = 1 |       |     14 |       | µs      |
| Channel Separation                                   | CS       | V IN =10Vp-p,f=10kHz,R L =10kΩ,C L =50pF          |       |     98 |       | dB      |
| EMI Rejection Ratio of +IN x                         | EMIRR    | V IN = 100mV PEAK , frequency = 400 MHz           |       |     72 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 900 MHz           |       |     80 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 1800 MHz          |       |     83 |       | dB      |
|                                                      |          | V IN = 100mV PEAK , frequency = 2400 MHz          |       |     85 |       | dB      |
| NOISE PERFORMANCE                                    |          |                                                   |       |        |       |         |
| Total Harmonic Distortion + Noise Bandwidth = 80 kHz | THD+N    | A V = +1, frequency = 1 kHz,V IN = 10V rms        |       | 0.0007 |       | %       |
| Bandwidth = 500 kHz                                  |          |                                                   |       |  0.003 |       | %       |
| Peak-to-Peak Voltage Noise                           | e N p-p  | A V = 100, frequency = 0.1 Hz to 10 Hz            |       |    117 |       | nV p-p  |
| Voltage Noise Density                                | e N      | A V = 100, frequency = 1 kHz                      |       |    5.8 |       | nV/√Hz  |
| Peak-to-Peak Current Noise                           | i N p-p  | A V = 100, frequency = 0.1 Hz to 10 Hz            |       |     16 |       | pAp-p   |
| Current Noise Density                                | i N      | A V = 100, frequency = 1 kHz                      |       |    0.8 |       | pA/√Hz  |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                               | Rating                  |
|-----------------------------------------|-------------------------|
| Supply Voltage                          | 60V                     |
| Input Voltage Range                     | (V-)-300mVto (V+)+300mV |
| Input Current 1                         | ±10mA                   |
| Differential Input Voltage              | ±5V                     |
| Output Short-Circuit Duration to Ground | Indefinite              |
| Temperature Range                       |                         |
| Storage                                 | -65°C to +150°C         |
| Operating                               | -40°C to +125°C         |
| Junction                                | -65°C to +150°C         |
| Lead Temperature (Soldering, 60 sec)    | 300°C                   |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 1. Pad Configuration

<!-- image -->

## Table 5. Pad Function Descriptions 1

|   Pad Number | Mnemonic   |   XCoordinate |   YCoordinate | Description                   |
|--------------|------------|---------------|---------------|-------------------------------|
|            1 | OUTA       |          -627 |          +782 | Output, ChannelA              |
|            2 | -INA       |          -613 |           -93 | Inverting Input, ChannelA     |
|            3 | +INA       |          -613 |          -219 | Noninverting Input, ChannelA  |
|            4 | V-         |          -626 |          -797 | Negative Supply Voltage       |
|            5 | +IN B      |          +613 |          -298 | Noninverting Input, Channel B |
|            6 | -IN B      |          +613 |          -172 | Inverting Input, Channel B    |
|            7 | OUTB       |          +627 |          +703 | Output, Channel B             |
|            8 | V+         |          +626 |          +944 | Positive Supply Voltage       |

## OUTLINE DIMENSIONS

Figure 2. 8-Pad Bare Die [CHIP] (C-8-17)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter            | Value                                        | Unit           |
|----------------------|----------------------------------------------|----------------|
| Chip Size            | 1470 × 2140                                  | µm             |
| Scribe Line Width    | 80 × 80                                      | µm             |
| Die Size             | 1550 × 2220                                  | µm             |
| Thickness            | 305                                          | µm             |
| Backside             | V- or left floating                          | V              |
| Passivation          | 10 kAhigh density plasma oxide + 7 kAnitride | Not applicable |
| Bond Pads (Minimum)  | 70 × 70                                      | µm             |
| Bond Pad Composition | 0.5Aluminum (Al), copper (Cu)                | %              |

## Table 7. Assembly Recommendations

| Assembly Component   | Recommendation        |
|----------------------|-----------------------|
| Die Attach           | Hitachi CEL9240HF10AK |
| Bonding Method       | 1 mil gold            |
| Bonding Sequence     | Unspecified           |

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                | Package Option   |
|------------------|---------------------|------------------------------------|------------------|
| ADA4522-2-KGD-WP | -40°C to +125°C     | 8-Pad Bare Die [CHIP], Waffle Pack | C-8-17           |

©2019  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered  trademarks  are  the  property  of  their  respective  owners. D20268-0-10/19(0)

<!-- image -->

11-01-2018-A