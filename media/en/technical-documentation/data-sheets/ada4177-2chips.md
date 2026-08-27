<!-- lastmod 2020-11-17 -->
<!-- image -->

Data Sheet

## FEATURES

Low offset voltage: 120 µV maximum at 25°C

Low input bias current: 1 nA maximum at 25°C

Low voltage noise density: 8 nV/√Hz typical at 1 kHz

Large signal voltage gain (AVO): 108 dB minimum over full

supply voltage and operating temperature

Input overvoltage protection to 32 V above and below the

supply voltage rail

Integrated EMI filter

70 dB typical rejection at 1000 MHz 90 dB typical rejection at 2400 MHz

Rail-to-rail output swing

Low supply current: 500 µA typical per amplifier Wide bandwidth

Gain bandwidth product (AV = 100): 3.5 MHz typical Unity-gain crossover (AV = 1): 3.5 MHz typical

-3 dB bandwidth (AV = 1): 6 MHz typical

Dual-supply operation

Specified at ±5 V to ±15 V, operates over ±2.5 V to ±18 V

Unity-gain stable No phase reversal

## APPLICATIONS

Wireless base station control circuits Optical network control circuits

Instrumentation

Sensors and controls

Thermocouples, RTDs, strain gages, shunt current measurements

## GENERAL DESCRIPTION

The ADA4177-2CHIPS is a dual-channel amplifier that features low offset voltage (3 µV typical), low input bias current, low noise, and low current consumption (500 µA typical). Outputs are stable with capacitive loads of more than 1000 pF with no external compensation.

The inputs of the ADA4177-2CHIPS feature outstanding precision amplifier robustness, providing input protection against

## OVP and EMI Protected, Precision,

## Low Noise and Low Bias Current Op Amp

[ADA4177-2CHIPS](https://www.analog.com/ADA4177-2?doc=ADA4177-2CHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

signal excursions 32 V beyond either supply, as well as 70 dB of rejection for electromagnetic interference (EMI) at 1000 MHz.

Additional application and technical information can be found in the ADA4177-2 data sheet.

The ADA4177-2CHIPS is specified for +25°C only, and is functional over the -40°C to +125°C temperature range. The ADA4177-2CHIPS is guaranteed only on the specifications of this data sheet.

## [ADA4177-2CHIPS](https://www.analog.com/ADA4177-2?doc=ADA4177-2CHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| Electrical Characteristics, ±5 V.................................................. 3                       |
| Electrical Characteristics, ±15 V................................................ 4                        |

## REVISION HISTORY

10/2020-Revision 0: Initial Version

| Absolute Maximum Ratings............................................................5           |
|-------------------------------------------------------------------------------------------------|
| Electrostatic Discharge (ESD) Ratings.......................................5                   |
| ESD Caution ..................................................................................5 |
| Pin Configuration and Function Description...............................6                      |
| Outline Dimensions..........................................................................7   |
| Die Specifications and Assembly Recommendations..............7                                  |
| Ordering Guide .............................................................................7   |

## SPECIFICATIONS ELECTRICAL CHARACTERISTICS, ±5 V

Power supply voltage (VSY) = ±5.0 V, common-mode voltage (VCM) = 0 V, TA = 25°C, unless otherwise noted.

Table 1.

| Parameter                             | Symbol   | Test Conditions/Comments                                                  |   Min |   Typ |   Max | Unit   |
|---------------------------------------|----------|---------------------------------------------------------------------------|-------|-------|-------|--------|
| INPUT CHARACTERISTICS                 |          |                                                                           |       |       |       |        |
| Offset Voltage                        | V OS     |                                                                           |       |     3 |   120 | µV     |
| Offset Voltage Matching               |          |                                                                           |       |       |   110 | µV     |
| Input Bias Current                    | I B      |                                                                           |    -1 |  -0.4 |    +1 | nA     |
| Input Offset Current                  | I OS     |                                                                           | -0.75 |  +0.1 | +0.75 | nA     |
| Input Voltage Range                   | IVR      |                                                                           |  -3.5 |       |  +3.5 | V      |
| Overvoltage Current Limit 1           | I OVP    | 5 V < V CM < 37 V                                                         |       |    12 |       | mA     |
|                                       |          | -37 V < V CM < -5 V                                                       |       |    10 |       | mA     |
| Common-Mode Rejection Ratio           | CMRR     | -3.5 V ≤ V CM ≤ +3.5 V                                                    |   122 |   130 |       | dB     |
| Large Signal (Open-Loop) Voltage Gain | A VO     | Load resistance (R L ) = 2 kΩ, output voltage (V OUT ) = -4.5 V to +4.5 V |   108 |   110 |       | dB     |
|                                       |          | R L = 10 kΩ, V OUT = -4.5 V to +4.5 V                                     |   115 |   120 |       | dB     |
| Input Capacitance                     | C INDM   | Differential mode                                                         |       |     1 |       | pF     |
|                                       | C INCM   | Commonmode                                                                |       |     8 |       | pF     |
| Input Resistance                      | R DIFF   | Differential mode                                                         |       |     4 |       | MΩ     |
|                                       | R CM     | Commonmode                                                                |       |   100 |       | GΩ     |
| OUTPUT CHARACTERISTICS                |          |                                                                           |       |       |       |        |
| Output Voltage                        |          |                                                                           |       |       |       |        |
| High                                  | V OH     | Load current (I LOAD )=1mA                                                |  4.95 |       |       | V      |
|                                       |          | I LOAD =7mA                                                               |  4.80 |       |       | V      |
| Low                                   | V OL     | I LOAD =1mA                                                               |       |       | -4.95 | V      |
|                                       |          | I LOAD =7mA                                                               |       |       | -4.80 | V      |
| Output Current                        | I OUT    | Dropout voltage (V DROPOUT ) < 1 V                                        |       |    25 |       | mA     |
| Short-Circuit Current                 | I SC     | T A = 25°C                                                                |       |       |       |        |
| Sourcing                              |          |                                                                           |       |    36 |       | mA     |
| Sinking                               |          |                                                                           |       |    48 |       | mA     |
| Closed-Loop Output Impedance          | Z OUT    | f = 1 kHz, closed-loop gain (A V ) = 1                                    |       |  0.11 |       | Ω      |
| POWER SUPPLY                          |          |                                                                           |       |       |       |        |
| Power Supply Rejection Ratio          | PSRR     | V SY = ±2.5 V to ±18 V                                                    |   125 |   145 |       | dB     |
| Supply Current per Amplifier          | I SY     | V OUT = 0 V                                                               |       |   500 |   560 | µA     |
| DYNAMIC PERFORMANCE                   |          |                                                                           |       |       |       |        |
| Slew Rate                             | SR       | R L = 2 kΩ                                                                |       |   1.5 |       | V/µs   |
| Settling Time                         | t S      |                                                                           |       |       |       |        |
| To 0.1%                               |          | Input voltage (V IN ) = 1 V step, R L = 2 kΩ, A V = -1                    |       |   1.8 |       | µs     |
| To 0.01%                              |          | V IN = 1 V step, R L = 2 kΩ, A V = -1                                     |       |   3.5 |       | µs     |
| Gain Bandwidth Product                | GBP      | V IN = 10 mVp-p, R L = 2 kΩ, A V = 100                                    |       |   3.5 |       | MHz    |
| Unity-Gain Crossover                  | UGC      | V IN = 10 mVp-p, R L = 2 kΩ, A V = 1                                      |       |   3.5 |       | MHz    |
| -3 dB Closed-Loop Bandwidth           | f -3 dB  | V IN = 10 mVp-p, R L = 2 kΩ, A V = 1                                      |       |     6 |       | MHz    |
| Total Harmonic Distortion Plus Noise  | THD+N    | V IN = 1 V rms, R L = 2 kΩ, A V = 1, f = 1 kHz                            |       | 0.003 |       | %      |
| EMI Rejection of +IN x                | EMIR     | V IN = 200 mVp-p                                                          |       |       |       |        |
| f = 1000MHz                           |          |                                                                           |       |    70 |       | dB     |
| f = 2400MHz                           |          |                                                                           |       |    90 |       | dB     |
| NOISE PERFORMANCE                     |          |                                                                           |       |       |       |        |
| Voltage Noise                         | e n p-p  | 0.1 Hz to 10 Hz                                                           |       |   175 |       | nV p-p |
| Voltage Noise Density                 | e n      | f = 10 Hz                                                                 |       |    10 |       | nV/√Hz |
|                                       |          | f = 1 kHz                                                                 |       |     8 |       | nV/√Hz |
| Current Noise Density                 | i n      | f = 1 kHz                                                                 |       |   0.2 |       | pA/√Hz |

1 All inputs are stressed to 32 V beyond supplies for 500 ms.

## ELECTRICAL CHARACTERISTICS, ±15 V

VSY = ±15 V, VCM = 0 V, TA = 25°C, unless otherwise noted.

## Table 2.

| Parameter                                                                                                                                                       | Symbol                     | Test Conditions/Comments                                                                                                                                                     | Min             | Typ     | Max           | Unit          |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------|---------------|---------------|
| INPUT CHARACTERISTICS                                                                                                                                           |                            |                                                                                                                                                                              |                 |         |               |               |
| Offset Voltage                                                                                                                                                  | V OS                       |                                                                                                                                                                              | 3               |         | 120           | µV            |
| Offset Voltage Matching                                                                                                                                         |                            |                                                                                                                                                                              |                 |         | 110           | µV            |
| Input Bias Current                                                                                                                                              | I B                        |                                                                                                                                                                              | -1              | -0.3    | +1            | nA            |
| Input Offset Current                                                                                                                                            | I OS                       |                                                                                                                                                                              | -0.75           | +0.1    | +0.75         | nA            |
| Input Voltage Range                                                                                                                                             | IVR                        |                                                                                                                                                                              | -13.5           |         | +13.5         | V             |
| Overvoltage Current Limit 1                                                                                                                                     | I OVP                      | 15                                                                                                                                                                           |                 | 12      |               | mA            |
|                                                                                                                                                                 |                            | V < V CM < 47 V -47 V < V CM < -15 V                                                                                                                                         |                 | 10      |               | mA            |
| Common-Mode Rejection Ratio Large Signal Voltage Gain                                                                                                           | CMRR A VO                  | -13.5 V ≤ V CM ≤+13.5 V                                                                                                                                                      | 128             | 130 114 |               | dB            |
|                                                                                                                                                                 |                            | R L = 2 kΩ, V OUT = -14.2 V to +14.2                                                                                                                                         | 110             |         |               | dB            |
| Input Capacitance Input Resistance                                                                                                                              | C INDM C INCM R DIFF       | Differential mode Commonmode Differential mode                                                                                                                               |                 | 1 8 4   |               | pF pF MΩ      |
| OUTPUT CHARACTERISTICS                                                                                                                                          |                            |                                                                                                                                                                              |                 |         |               |               |
| Output Voltage High                                                                                                                                             | V OH                       | I LOAD =1mA                                                                                                                                                                  | 14.95           |         |               | V             |
| Low Output Current Short-Circuit Current                                                                                                                        | V OL I OUT I SC            | I =7mA I LOAD =1mA I LOAD =7mA V DROPOUT < 1 V T A = 25°C                                                                                                                    | 14.80           | 25      | -14.95 -14.80 | V V V mA      |
| Closed-Loop Output Impedance POWER SUPPLY                                                                                                                       | OUT                        | f = 1 kHz, A V = 1                                                                                                                                                           |                 | 0.08    |               | Ω             |
| To 0.1% To 0.01% f = 1000 MHz f = 2400 MHz NOISE PERFORMANCE                                                                                                    | Z t S                      | V IN = 10 V p-p, R L = 2 kΩ, A V = -1 V = 10 V p-p, R = 2 kΩ, A = -1 V IN = 200 mVp-p                                                                                        |                 | 5.5 7.5 |               | µs µs dB dB   |
|                                                                                                                                                                 | SY                         |                                                                                                                                                                              |                 |         |               |               |
| Gain Bandwidth Product Unity-Gain Crossover -3 dB Closed-Loop Bandwidth Total Harmonic Distortion Plus Noise EMI Rejection of +IN x Voltage Noise Voltage Noise | GBP UGC f -3 dB THD+N EMIR | V SY = ±2.5 V to ±18 V V V IN = 10 mVp-p, R L = 2 kΩ, A V = 100 V IN = 10 mVp-p, R L = 2 kΩ, A V = 1 V IN = 10 mVp-p, R L = 2 kΩ, A V = 1 V IN =1Vrms,A V =1,R L =2kΩ,f=1kHz | 125             | 145     |               | MHz MHz MHz % |
| Power Supply Rejection Ratio Supply Current per Amplifier                                                                                                       | PSRR                       | OUT = 0 V                                                                                                                                                                    |                 |         |               | dB µA         |
| DYNAMIC PERFORMANCE Slew Rate Settling Time                                                                                                                     | I                          |                                                                                                                                                                              |                 | 500     |               |               |
|                                                                                                                                                                 | SR                         | R L = 2 kΩ IN L V                                                                                                                                                            | 3.5 3.5 6 0.002 | 1.5     | 580           | V/µs          |
| MULTIPLE AMPLIFIERS, CHANNEL                                                                                                                                    | C S                        | f = 1 kHz                                                                                                                                                                    | 70 90           |         |               |               |
|                                                                                                                                                                 |                            |                                                                                                                                                                              | 8               |         |               | dB            |
|                                                                                                                                                                 | i n                        | = 1 kHz                                                                                                                                                                      |                 |         |               |               |
|                                                                                                                                                                 |                            |                                                                                                                                                                              |                 | 0.2     |               |               |
|                                                                                                                                                                 |                            |                                                                                                                                                                              |                 |         |               | pA/√Hz        |
| Current Noise Density                                                                                                                                           |                            |                                                                                                                                                                              |                 | 10      |               | nV/√Hz        |
| Density                                                                                                                                                         | e n                        | = 10 Hz f = 1 kHz                                                                                                                                                            |                 |         |               | nV/√Hz        |
|                                                                                                                                                                 |                            | f                                                                                                                                                                            |                 |         |               |               |
|                                                                                                                                                                 | e n p-p                    | 0.1 Hz to 10 Hz f                                                                                                                                                            |                 | 175     |               | nV p-p        |
|                                                                                                                                                                 |                            |                                                                                                                                                                              |                 | 127     |               |               |
| SEPARATION                                                                                                                                                      |                            |                                                                                                                                                                              |                 |         |               |               |

1 All inputs are stressed to 32 V beyond supplies for 500 ms.

## ABSOLUTE MAXIMUM RATINGS

Table 3.

| Parameter                   | Rating          |
|-----------------------------|-----------------|
| Supply Voltage              | 36 V            |
| Input Voltage               | V SY ± 32 V     |
| Differential Input Voltage  | ±V SY           |
| Storage Temperature Range   | -65°C to +150°C |
| Operating Temperature Range | -40°C to +125°C |
| Junction Temperature Range  | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001. Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

Machine model (MM) per ANSI/ESD STM5.2. MM voltage values are for characterization only.

## ESD Ratings for ADA4177-2CHIPS

## Table 4. ADA4177-2CHIPS, 8-Pad CHIP

| ESD Model   |   Withstand Threshold (V) | Class          |
|-------------|---------------------------|----------------|
| HBM         |                      4000 | 3A             |
| FICDM       |                      1250 | IV             |
| MM          |                       200 | Not applicable |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTION

<!-- image -->

Table 5. Pad Configuration Descriptions 1

|   Pad No. | Mnemonic   |   XCoordinate |   Y Coordinate | Description                   |
|-----------|------------|---------------|----------------|-------------------------------|
|         1 | OUT A      |          -600 |           +522 | Output, Channel A             |
|         2 | -IN A      |          -625 |           +421 | Inverting Input, Channel A    |
|         3 | +IN A      |          -625 |           -389 | Noninverting Input, Channel A |
|         4 | V-         |          -520 |           -550 | Negative Supply Voltage       |
|         5 | +IN B      |          +625 |           -389 | Noninverting Input, Channel B |
|         6 | -IN B      |          +625 |           +421 | Inverting Input, Channel B    |
|         7 | OUT B      |          +600 |           +522 | Output, Channel B             |
|         8 | V+         |          +510 |           +550 | Positive Supply Voltage       |

## OUTLINE DIMENSIONS

Figure 3. 8-Pad Bare Die [CHIP] (C-8-24))

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 6. Die Specifications

| Parameter            | Value                                              | Unit           |
|----------------------|----------------------------------------------------|----------------|
| Chip Size            | 1360 × 1210                                        | µm             |
| Scribe Line Width    | 90                                                 | µm             |
| Die Size (Maximum)   | 1450 × 1300                                        | µm             |
| Thickness            | 12                                                 | mils           |
| Backside             | Connect to V-                                      | Not applicable |
| Passivation          | Undoped oxide/silicon nitride (SiN)                | Not applicable |
| Bond Pads (Minimum)  | 70 × 70                                            | µm             |
| Bond Pad Composition | Aluminum silicon (AlSi) (1.0%), copper (Cu) (0.5%) | %              |
| Polyimide Thickness  | 18                                                 | µm             |
| Die Marker ID        | ada4177_2z                                         | Not applicable |

## Table 7. Assembly Recommendations

| Assembly Component   | Recommendation         |
|----------------------|------------------------|
| Die Attach           | Hitachi EN 4900GC      |
| Bonding Method       | Forward bond           |
| Bonding Sequence     | Lead to bond first = 1 |

## ORDERING GUIDE

| Model 1        | Temperature Range   | Package Description   | Package Option   |   Ordering Quantity |
|----------------|---------------------|-----------------------|------------------|---------------------|
| ADA4177-2CHIPS | -40°C to +125°C     | 8-Pad Bare Die [CHIP] | C-8-24           |                 400 |

PKG-004502

<!-- image -->