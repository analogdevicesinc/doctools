<!-- lastmod 2019-10-03 -->
<!-- image -->

Data Sheet

## FEATURES

Fixed gain of 2000 Access to internal nodes provides flexibility Low noise: 1.5 nV/√Hz voltage noise High accuracy dc performance Gain drift: 10 ppm/°C maximum Input offset voltage, average temperature coefficient: 1 µV/°C maximum Total gain error: 0.2% maximum CMRR, dc to 60 Hz: 130 dB minimum Excellent ac specifications -3 dB small signal bandwidth: 3.5 MHz Slew rate: 40 V/µs minimum Power supply operating range: ±4 V to ±18 V ESD protection: 5000 V (HBM) Temperature range for specified performance: -40°C to +85°C Operational up to 125°C Known Good Die (KGD): these die are fully guaranteed to

data sheet specifications.

## APPLICATIONS

Sensor interface Medical instrumentation Patient monitoring

## GENERAL DESCRIPTION

The AD8428-KGD is an ultralow noise instrumentation amplifier (in-amp) designed to accurately measure small, high speed signals. All gain setting resistors for the AD8428-KGD are internal to the device and are precisely matched. Care is taken in both the chip pinout and layout that results in excellent gain drift and quick settling to the final gain value after the device powers on.

The high common-mode rejection ratio (CMRR) of the AD8428-KGD prevents unwanted signals from corrupting the signal of interest. The pin configuration of the AD8428-KGD is designed to avoid parasitic capacitance mismatches that can degrade CMRR at high frequencies.

The AD8428-KGD is one of the fastest in-amps available. The circuit architecture is designed for high bandwidth at high gain.

## Low Noise, Low Gain Drift, G = 2000,

## Instrumentation Amplifier

[AD8428-KGD](https://www.analog.com/AD8428?doc=AD8428-KGD.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The AD8428-KGD uses a current feedback topology for the initial preamplifier gain stage of 200, followed by a difference amplifier stage of 10. This architecture results in a 3.5 MHz bandwidth at a gain of 2000.

The AD8428-KGD pin configuration allows access to internal nodes between the first and second stages. This feature can be useful for modifying the frequency response between the two amplification stages, thereby preventing unwanted signals from contaminating the output results.

The performance of the AD8428-KGD is specified from -40°C to +85°C and operational to 125°C.

Additional application and technical information can be found in the AD8428 data sheet.

## [AD8428-KGD](https://www.analog.com/AD8428?doc=AD8428-KGD.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |

## REVISION HISTORY

10/2019-Revision 0: Initial Version

| Absolute Maximum Ratings ............................................................5          |
|-------------------------------------------------------------------------------------------------|
| ESD Caution...................................................................................5 |
| Pin Configuration and Function Descriptions..............................6                      |
| Outline Dimensions..........................................................................7   |
| Die Specifications and Assembly Recommendations...............7                                 |
| Ordering Guide .............................................................................7   |

## SPECIFICATIONS

Supply voltage (VS) = ±15 V, REF voltage (VREF) = 0 V , TA = 25°C, G = 2000, and load resistance (RL) = 10 kΩ, unless otherwise noted.

Table 1.

| Parameter                                       | TestConditions/Comments                                  | Min        | Typ            | Max        | Unit             |
|-------------------------------------------------|----------------------------------------------------------|------------|----------------|------------|------------------|
| CMRR                                            | Referred to input (RTI), common-mode voltage (V ) = ±10V |            |                |            |                  |
| DC to 60 Hz                                     |                                                          | 130        |                |            | dB               |
| At 50 kHz                                       |                                                          | 110        |                |            | dB               |
| NOISE, RTI                                      | +IN voltage (V +IN ), -IN voltage (V -IN )=0V            |            |                |            |                  |
| Voltage Noise                                   | Frequency = 1 kHz                                        |            | 1.3            | 1.5        | nV/√Hz           |
|                                                 | Frequency = 0.1 Hz to 10 Hz                              |            | 40             | 50         | nV p-p           |
| Current Noise                                   | Frequency = 1 kHz                                        |            | 1.5            |            | pA/√Hz           |
|                                                 | Frequency = 0.1 Hz to 10 Hz                              |            | 150            |            | pA p-p           |
| VOLTAGE OFFSET                                  |                                                          |            |                |            |                  |
| Input Offset (V OSI )                           |                                                          |            |                | 100        | µV               |
| Average Temperature Coefficient                 | T A = -40°C to +85°C                                     |            |                | 1          | µV/°C            |
| OffsetRTIvs.Supply(PowerSupply Rejection Ratio) |                                                          | 120        |                |            | dB               |
| INPUT CURRENT                                   |                                                          |            |                |            |                  |
| Input Bias Current                              |                                                          |            |                | 200        | nA               |
| Over Temperature                                | T A = -40°C to +85°C                                     |            | 250            |            | pA/°C            |
| Input Offset Current                            |                                                          |            |                | 50         | nA               |
| Over Temperature                                | T A = -40°C to +85°C                                     |            | 20             |            | pA/°C            |
| DYNAMIC RESPONSE                                |                                                          |            |                |            |                  |
| -3 dB Small Signal Bandwidth                    |                                                          |            | 3.5            |            | MHz              |
| Settling Time                                   |                                                          |            |                |            |                  |
| To 0.01%                                        | 10V step                                                 |            | 0.75           |            | µs               |
| To 0.001%                                       | 10V step                                                 |            | 1.4            |            | µs               |
| Slew Rate                                       |                                                          | 40         | 50             |            | V/µs             |
| GAIN                                            |                                                          |            |                |            |                  |
| First Stage Gain                                |                                                          |            | 200            |            | V/V              |
| Subtractor Stage Gain                           |                                                          |            | 10             |            | V/V              |
| Total Gain Error                                | Output voltage (V OUT )= -10V to +10V                    |            |                | 0.2        | %                |
| Total Gain Nonlinearity                         | V OUT = -10V to +10V                                     |            |                | 5          | ppm              |
| Gain Drift                                      |                                                          |            |                | 10         | ppm/°C           |
| INPUT                                           |                                                          |            |                |            |                  |
| Impedance (Pin to Ground) 1                     |                                                          |            | 1&#124;&#124;2 |            | GΩ&#124;&#124;pF |
| Input Operating Voltage Range                   | V S = ±4Vto ±18V                                         | -V S + 2.5 |                | +V S - 2.5 | V                |
| Over Temperature                                | T A = -40°C to +85°C                                     | -V S + 2.5 |                | +V S - 2.5 | V                |
| OUTPUT                                          |                                                          |            |                |            |                  |
| Output Voltage Swing                            | R L = 2 kΩ                                               | -V S + 1.7 |                | +V S - 1.2 | V                |
| Over Temperature                                | T A = -40°C                                              | -V S + 2.0 |                | +V S - 1.3 | V                |
|                                                 | T A = +85°C                                              | -V S + 1.6 |                | +V S - 1.1 | V                |
| Output Voltage Swing                            | R L = 10 kΩ                                              | -V S + 1.7 |                | +V S - 1.0 | V                |
| Over Temperature                                | T A = -40°C                                              | -V S + 1.8 |                | +V S - 1.2 | V                |
|                                                 | T A = +85°C                                              | -V S + 1.4 |                | +V S - 0.9 | V                |
| Short-Circuit Current                           |                                                          |            | 30             |            | mA               |

## [AD8428-KGD](https://www.analog.com/AD8428?doc=AD8428-KGD.pdf)

## Data Sheet

| Parameter                 | TestConditions/Comments   | Min   |   Typ | Max   | Unit   |
|---------------------------|---------------------------|-------|-------|-------|--------|
| REFERENCE INPUT           |                           |       |       |       |        |
| Input Impedance (R IN )   |                           |       |   132 |       | kΩ     |
| Input Current (I IN )     | V IN +,V IN - = 0V        |       |   6.5 |       | µA     |
| Voltage Range             |                           | -V S  |       | +V S  | V      |
| Reference Gain to Output  |                           |       |     1 |       | V/V    |
| Reference Gain Error      |                           |       |  0.01 |       | %      |
| FILTERTERMINALS           |                           |       |       |       |        |
| R IN 2                    |                           |       |     6 |       | kΩ     |
| Voltage Range             |                           | -V S  |       | +V S  | V      |
| POWER SUPPLY              |                           |       |       |       |        |
| Operating Range           |                           | ±4    |       | ±18   | V      |
| Quiescent Current         |                           |       |   6.5 | 6.8   | mA     |
| Over Temperature          | T A = -40°C to +85°C      |       |       | 8     | mA     |
| TEMPERATURE RANGE         |                           |       |       |       |        |
| For Specified Performance |                           | -40   |       | +85   | °C     |
| Operational 3             |                           | -40   |       | +125  | °C     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                             | Rating          |
|---------------------------------------|-----------------|
| Supply Voltage                        | ±18V            |
| Output Short-Circuit Current Duration | Indefinite      |
| MaximumVoltage at -IN, +IN 1          | ±V S            |
| MaximumVoltage at -FIL, +FIL          | ±V S            |
| Differential Input Voltage 1          | ±1V             |
| MaximumVoltage at REF                 | ±V S            |
| Temperature Range                     |                 |
| Storage                               | -65°C to +150°C |
| Specified                             | -40°C to +85°C  |
| Maximum Junction Temperature          | 140°C           |
| Electrostatic Discharge (ESD)         |                 |
| Human Body Model (HBM)                | 5000V           |
| Charged Device Model                  | 1250V           |
| Machine Model                         | 400V            |

1 For voltages beyond these limits, use input protection resistors. See the AD8428 data sheet for more information.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions

| Pad No.        | Mnemonic   |   XCoordinate (µm) |   YCoordinate (µm) | Description               |
|----------------|------------|--------------------|--------------------|---------------------------|
| 1              | -IN        |               -661 |               +665 | Negative Input Pad        |
| 2              | -FIL       |               -661 |               +525 | Negative Filter Pad       |
| Not applicable | DNC        |               -661 |           +331.024 | Do Not Connect Pad        |
| Not applicable | DNC        |               -661 |            +83.008 | Do Not Connect Pad        |
| 3              | +FIL       |               -661 |               -111 | Positive Filter Pad       |
| 4              | +IN        |               -661 |               -251 | Positive Input Pad        |
| 5              | -V S       |               +682 |              -1231 | Negative Power Supply Pad |
| 6              | REF        |               +538 |               -839 | Reference Voltage Pad     |
| 7              | OUT        |               +626 |               +337 | Output Pad                |
| 8              | +V S       |               +717 |               +979 | Positive Power Supply Pad |

## OUTLINE DIMENSIONS

Figure 3. 8-Pad Bare Die [CHIP] (C-8-16)

<!-- image -->

Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 4. Die Specifications

| Parameter                   | Value                                          | Unit           |
|-----------------------------|------------------------------------------------|----------------|
| Scribe Line Width           | 90                                             | µm             |
| Die Size                    | 1755 × 2890                                    | µm             |
| Thickness                   | 304.8                                          | µm             |
| Backside                    | None 1                                         | Not applicable |
| Passivation                 | 1 silicon oxide nitride/18 polyimide           | µm             |
| Bond Pads Opening (Minimum) | 92 × 92                                        | µm             |
| Bond Pad Composition        | 1.0 aluminum (Al), silicon(Si)/0.5 copper (Cu) | %              |

## Table 5. Assembly Recommendations

| Assembly Component   | Recommendation              |
|----------------------|-----------------------------|
| Die Attach           | Hitachi EN4900GC conductive |
| Bonding Method       | 0.8 mils, gold              |
| Bonding Sequence     | Unspecified                 |

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description                | Package Option   |
|---------------|---------------------|------------------------------------|------------------|
| AD8428-KGD-WP | -40°C to +85°C      | 8-Pad Bare Die [CHIP], Waffle Pack | C-8-16           |

<!-- image -->

03-11-2019-A