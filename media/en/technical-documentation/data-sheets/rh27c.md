<!-- lastmod 2025-08-03 -->
<!-- image -->

## DESCRIPTION

The RH27 combines very low noise with excellent  precision and high speed specifications. The low 1/f noise corner frequency of 2.7Hz combined with 3.5nV√Hz 10Hz noise and low offset voltage make the RH27 an excellent choice for low frequency military instrumentation applications. The wafer lots are processed to Analog Devices' in-house Class S flow to yield circuits usable in stringent military applications.

For complete electrical specifications and performance curves see the OP-27/OP-37 data sheet.

## BURN-IN CIRCUIT

## Precision Operational Amplifier

## ABSOLUTE MAXIMUM RATINGS

| Supply Voltage ......................................................   | ±22V           |
|-------------------------------------------------------------------------|----------------|
| Internal Power Dissipation.................................             | 500mW          |
| Input Voltage............................. Equal to Supply              | Voltage        |
| Output Short-Circuit Duration .........................                 | Indefinite     |
| Differential Input Current (Note 8) ......................              | ±25mA          |
| Operating Temperature Range............... -55°C                        | to 125°C       |
| Junction Temperature Range ................                             | -55°C to 150°C |
| Storage Temperature Range..................                             | -65°C to 150°C |
| Lead Temperature (Soldering, 10 sec) .................                  | 300°C          |

All registered trademarks and trademarks are the property of their respective owners.

<!-- image -->

## PACKAGE INFORMATION

<!-- image -->

TABLE 1: ELECTRICAL CHARACTERISTICS (Preirradiation) (Note 9)

| SYMBOL      | PARAMETER                                | CONDITIONS                                                                                                            | NOTES       | MIN               | TYP T A = 25°C   | MAX                   | SUB- GROUP   | MIN -55°C   | TYP MAX ≤ T A ≤ 125°C   | SUB- GROUP     | UNITS                                           |
|-------------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------|-------------------|------------------|-----------------------|--------------|-------------|-------------------------|----------------|-------------------------------------------------|
| V OS        | Input Offset Voltage                     | RH27AE RH27E RH27C                                                                                                    | 11 1 1      |                   |                  | 35 55 100             | 4 4 4        |             | 60 100 300              | 2, 3 2, 3 2, 3 | µV µV µV                                        |
| ∆V OS ∆Temp | Average Offset Drift                     | RH27E RH27C                                                                                                           | 4, 7 4, 7   |                   |                  |                       |              |             | 1.8                     |                | µV/°C µV/°C                                     |
| ∆V OS ∆Time | Long-Term Input Offset Voltage Stability | RH27E RH27C                                                                                                           | 2, 4 2, 4   |                   |                  | 1 2                   |              |             |                         |                | µV/ Month                                       |
| I OS        | Input Offset Current                     | RH27E RH27C                                                                                                           |             |                   |                  | 35 75                 | 1 1          |             | 50 135                  | 2, 3 2, 3      | nA nA                                           |
| I B         | Input Bias Current                       | RH27E RH27C                                                                                                           |             |                   |                  | ±40 ±80               | 1 1          |             | ±60 ±150                | 2, 3 2, 3      | nA nA                                           |
| e n         | Input Noise Voltage                      | 0.1Hz to 10Hz (RH27E) 0.1Hz to 10Hz (RH27C)                                                                           | 4, 5 4, 5   |                   |                  | 0.18 0.25             |              |             |                         |                | µV P-P µV P-P                                   |
|             | Input Noise Voltage Density              | f O = 10Hz (RH27E) f O = 30Hz (RH27E) f O = 1000Hz (RH27E) f O = 10Hz (RH27C) f O = 30Hz (RH27C) f O = 1000Hz (RH27C) | 3 4 4 3 4 4 |                   |                  | 5.5 4.5 3.8 8 5.6 4.5 |              |             |                         |                | nV/√ Hz nV/√ Hz nV/√ Hz nV/√ Hz nV/√ Hz nV/√ Hz |
| i n         | Input Noise Current Density              | f O = 1000Hz                                                                                                          | 4, 6        |                   |                  | 0.6                   |              |             |                         |                | pA/√ Hz                                         |
|             | Input Resistance Common Mode             | RH27E RH27C                                                                                                           |             |                   | 3 2              |                       |              |             |                         |                | GΩ GΩ                                           |
|             | Input Voltage Range                      | RH27E RH27C                                                                                                           | 4 4         | ±11 ±11           |                  |                       |              | ±10.3 ±10.2 |                         |                | V V                                             |
| CMRR        | Common Mode Rejection Ratio              | V CM = ±11V (RH27E) V CM = ±10V (RH27E) V CM = ±11V (RH27C) V CM = ±10V (RH27C)                                       |             | 114 100           |                  | 1 1                   | 94           | 108         |                         | 2, 3 2, 3      | dB dB dB dB                                     |
| PSRR        | Power Supply Rejection Ratio             | V S = ±4V to ±18V (RH27E) V S = ±4.5V to ±18V (RH27E) V S = ±4V to ±18V (RH27C) V S = ±4.5V to ±18V (RH27C)           |             | 100 94            |                  | 1 1                   |              | 96 86       |                         | 2, 3 2, 3      | dB dB dB dB                                     |
| A VOL       | Large-Signal Voltage Gain                | R L ≥ 2kΩ, V O = ±10V (RH27E) R L ≥ 600Ω, V O = ±1V (RH27E) V S = ±4V                                                 | 4           | 1000 250          |                  | 4                     | 600          |             |                         | 5, 6           | V/mV V/mV                                       |
|             |                                          | R L ≥ 2kΩ, V O = ±10V (RH27C) R L ≥ 600Ω, V O = ±1V (RH27C) V S = ±4V                                                 | 4           | 700 200           |                  | 4                     | 300          |             |                         | 5, 6           | V/mV V/mV                                       |
| V OUT       | Maximum Output Voltage Swing             | R L ≥ 2kΩ (RH27E) R L ≥ 600Ω (RH27E) R L ≥ 2kΩ (RH27C) R L ≥ 600Ω (RH27C)                                             |             | ±12 ±10 ±11.5 ±10 |                  | 4 4 4 4               | ±11.5 ±10.5  |             |                         | 5, 6 5, 6      | V V V V                                         |
| SR          | Slew Rate                                | R L ≥ 2kΩ                                                                                                             |             | 1.7               |                  | 7                     |              |             |                         |                | V/µs                                            |
| GBW         | Gain-Bandwidth Product                   | f O = 100kHz                                                                                                          | 4           | 5                 |                  |                       |              |             |                         |                | MHz                                             |
| Z O         | Open-Loop Output Resistance              | V O = 0, I O = 0                                                                                                      |             |                   | 70               |                       |              |             |                         |                | Ω                                               |
| P D         | Power Dissipation                        | RH27E RH27C                                                                                                           |             |                   |                  | 140 170 1 1           |              |             |                         |                | mW mW                                           |

Rev. G

## TABLE 1A: ELECTRICAL CHARACTERISTICS (Postirradiation) (Note 10, 12)

| SYMBOL   | PARAMETER                    | CONDITIONS                                                                | NOTES   | MIN MAX 10KRAD(Si)   | MIN MAX 20KRAD(Si)   | MIN MAX 50KRAD(Si)   | MIN MAX 100KRAD(Si)   | MIN MAX 200KRAD(Si)   | UNITS     |
|----------|------------------------------|---------------------------------------------------------------------------|---------|----------------------|----------------------|----------------------|-----------------------|-----------------------|-----------|
| V OS     | Input Offset Voltage         | RH27E RH27C                                                               | 1 1     | 55 100               | 80 130               | 100 180              | 150 280               | 200 400               | µV µV     |
| I OS     | Input Offset Current         | RH27E RH27C                                                               |         | 35 75                | 40 75                | 50 90                | 60 120                | 90 180                | nA nA     |
| I B      | Input Bias Current           | RH27E RH27C                                                               |         | ±40 ±80              | ±50 ±80              | ±80 ±125             | ±100 ±200             | ±200 ±400             | nA nA     |
|          | Input Resistance Common Mode | RH27E RH27C                                                               |         | 3 (Typ) 2 (Typ)      | 3 (Typ) 2 (Typ)      | 3 (Typ) 2 (Typ)      | 3 (Typ) 2 (Typ)       | 3 (Typ) 2 (Typ)       | GΩ GΩ     |
|          | Input Voltage Range          |                                                                           | 4       | ±11                  | ±11                  | ±11                  | ±11                   | ±11                   | V         |
| CMRR     | Common Mode Rejection Ratio  | V CM = ±11V (RH27E) V CM = ±11V (RH27C)                                   |         | 114 100              | 114 100              | 110 97               | 105 94                | 100 90                | dB dB     |
| PSRR     | Power Supply Rejection Ratio | V S = ±4V to ±18V (RH27E) V S = ±4V to ±18V (RH27C)                       |         | 100 94               | 100 94               | 98 92                | 96 90                 | 94 86                 | dB dB     |
| A VOL    | Large-Signal Voltage Gain    | R L ≥ 2kΩ, V O = ±10V (RH27E) R L ≥ 2kΩ, V O = ±10V (RH27C)               |         | 1000 700             | 1000 700             | 1000 700             | 900 700               | 800 400               | V/mV V/mV |
| V OUT    | Maximum Output Voltage Swing | R L ≥ 2kΩ (RH27E) R L ≥ 600Ω (RH27E) R L ≥ 2kΩ (RH27C) R L ≥ 600Ω (RH27C) |         | ±12 ±10 ±11.5 ±10    | ±12 ±10 ±11.5 ±10    | ±12 ±10 ±11.5 ±10    | ±12 ±10 ±11.5 ±10     | ±12 ±10 ±11.5 ±10     | V V V V   |
| Z O      | Open-Loop Output Resistance  | V O = 0, I O = 0                                                          |         | 70 (Typ)             | 70 (Typ)             | 70 (Typ)             | 70 (Typ)              | 70 (Typ)              | Ω         |
| P D      | Power Dissipation            | RH27E RH27C                                                               |         | 140 170              | 140 170              | 140 170              | 140 170               | 140 170               | mW mW     |

Note 1: Input offset voltage measurements are performed by automatic test equipment approximately 0.5 seconds after application of power .

Note 2: Long-term input offset voltage stability refers to the averaged trend line of offset voltage vs time over extended periods after the first 30 days of operation. Excluding the initial hour of operation, changes in V OS during the first 30 days are typically 2.5µV . Refer to the typical performance curve.

Note 3: Sample tested to an LTPD of 15 on every lot. Contact factory for 100% testing of 10Hz voltage density noise.

Note 4: Parameter is guaranteed by design, characterization, or correlation to other tested parameters.

Note 5: See test circuit and frequency response curve for 0.1Hz to 10Hz tester on OP-27/OP-37 data sheet.

Note 6: See test circuit for current noise measurement on OP-27/OP-37 data sheet.

Note 7: The average input offset drift performance is within the specifications unnulled or when nulled with a pot having a range 8kΩ to 20kΩ.

Note 8: The RH27's inputs are protected by back-to-back diodes. Current limiting resistors are not used in order to achieve low noise. If differential input voltage exceeds ±0.7V , the input current should be limited to 25mA.

Note 9: V S  = ±15V , V CM = 0V unless otherwise noted.

Note 10: T A = 25°C, V S  = ±15V , V CM = 0V , unless otherwise noted.

Note 11: RH27AEW is marked and processed as RH27EW. Orders will be delivered through box stock screening at 25°C, -55°C to 125°C to the V OS specification shown on Table 1.

Note 12: Device is characterized at 10KRAD, 20KRAD, 50KRAD, 100KRAD and 200KRAD and is production tested at 100KRAD only.

<!-- image -->

## TOTAL DOSE BIAS CIRCUIT

<!-- image -->

## TABLE 2: ELECTRICAL TEST REQUIREMENTS

| MIL-PRF-38535 TEST REQUIREMENTS         | SUBGROUP             |
|-----------------------------------------|----------------------|
| Final Electrical Test Requirements      | 1*, 2, 3, 4, 5, 6, 7 |
| Group A Test Requirements               | 1, 2, 3, 4, 5, 6, 7  |
| Group C End Point Electrical Parameters | 1                    |
| Group D End Point Electrical Parameters | 1                    |
| Group E End Point Electrical Parameters | 1                    |

## PDA Test Notes

The PDA is specified as 5% based on failures from group A, subgroup 1, tests after cooldown as the final electrical test in accordance with method 5004 of MIL-STD-883 Class B. The verified failures of group A, subgroup 1, after burn-in divided by the total number of devices submitted for burnin in that lot shall be used to determine the percent for the lot.

Analog Devices reserves the right to test to tighter limits than those given.

*PDA applies to subgroup 1. See PDA Test Notes.

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

RH27 G01

<!-- image -->

RH27 G02

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

RH27 G03

Common Mode Rejection Ratio

<!-- image -->

RH27 G06

<!-- image -->

Input Offset Current

<!-- image -->

For more information www.analog.com

<!-- image -->

Power Supply Rejection Ratio

<!-- image -->

## PACKAGE OUTLINE DRAWINGS

<!-- image -->

*

**

LEAD DIAMETER IS UNCONTROLLED BETWEEN THE REFERENCE PLANE

AND THE SEATING PLANE

FOR SOLDER DIP LEAD FINISH, LEAD DIAMETER IS

.016 - .024

(0.406 - 0.610)

H Package 8-Lead TO-5 Metal Can (.200 Inch PCD) (Reference LTC DWG # 05-08-1320)

## PACKAGE OUTLINE DRAWINGS

J8 Package 8-Lead CERDIP (Narrow .300 Inch, Hermetic) (Reference LTC DWG # 05-08-1110)

<!-- image -->

## PACKAGE OUTLINE DRAWINGS

<!-- image -->

W Package 10-Lead Flatpak Glass Sealed (Hermetic) (Reference LTC DWG # 05-08-1130)

For more information www.analog.com

<!-- image -->

## REVISION HISTORY

| REV   | DATE   | DESCRIPTION                                                                                        | PAGE NUMBER   |
|-------|--------|----------------------------------------------------------------------------------------------------|---------------|
| E     | 07/23  | Updated art title in the Electrical Characteristics section and updated the document to ADI format | 1-6           |
| F     | 07/24  | Changes to Table 2: Electrical Test Requirements                                                   | 6             |
| G     | 07/25  | Changes to Table 1: Characteristics                                                                | 2             |
|       |        | Changes to Table 1A: Electrical Characteristics                                                    | 3             |
|       |        | Added Package Outline Drawings                                                                     | 7, 8          |
|       |        | Reorganized Layout                                                                                 | Global        |

<!-- image -->