<!-- lastmod 2025-11-13 -->
<!-- image -->

## DESCRIPTION

The RH1573 is a regulator driver IC designed to provide a solution  for  applications  requiring  high  current,  low  dropout and fast transient response. When driving an external PNP power transistor , this device provides load current up to 5A with a dropout voltage as low as 0.35V . The RH1573 circuitry is  designed for extremely fast transient response. This greatly reduces bulk storage capacitance when the regulator is used in applications with fast, high current load transients. The RH1573 uses a time-delayed latching overcurrent protection technique that requires no external sense  resistor .  Base  drive  is  limited  for  instantaneous protection, and a time-delayed latch protects the regulator from continuous short circuits.

<!-- image -->

## Low Dropout PNP Regulator Driver

## ABSOLUTE MAXIMUM RATINGS (Note 1)

| Input Pin Voltage (V IN to GND) .................................10V                        |          |
|---------------------------------------------------------------------------------------------|----------|
| Drive Pin Voltage (V DRIVE to GND)............................10V                           |          |
| Output Pin Voltage (V OUT to GND)............................10V                            |          |
| Shutdown Pin Voltage (V SHDN to GND).....................10V                                |          |
| Operating Junction Temperature Range ................................................ -55°C | to 125°C |
| Storage Temperature Range................... -65°C                                          | to 150°C |

L , L T , L TC and L TM are registered trademarks of Linear Technology Corporation. All other trademarks are the property of their respective owners.

## TABLE 1: ELECTRICAL CHARACTERISTICS (Preirradiation)

| PARAMETER                                             | CONDITIONS                                                  | NOTES   | MIN   | T A = 25°C TYP   | MAX     | SUB- GROUP   | -55°C MIN   | ≤ T A ≤ TYP   | 125°C MAX   | SUB- GROUP   | UNITS   |
|-------------------------------------------------------|-------------------------------------------------------------|---------|-------|------------------|---------|--------------|-------------|---------------|-------------|--------------|---------|
| Reference Voltage                                     | I DRIVE = 20mA, T J = 25°C                                  | 2       | 1.252 | 1.265            | 1.278   | 1            |             |               |             |              | V       |
| Reference Voltage                                     | 5mA < I DRIVE < 250mA, 3V < V IN < 7V , 1.5V < V DRIVE < 7V | 2       |       |                  |         |              | 1.225       | 1.265         | 1.305       | 2, 3         | V       |
| Line Regulation (V FB )                               | I DRIVE = 20mA, 3V < V IN < 7V                              |         |       | 0.17             | 2       | 1            |             |               | 2           | 2, 3         | mV      |
| Load Regulation (V FB )                               | ∆I DRIVE = 20mA to 250mA                                    |         |       |                  | 18      | 1            |             |               | 40          | 2, 3         | mV      |
| FB Pin Bias Current                                   | V FB = 1.265V                                               |         |       | 0.8              | 4       | 1            |             |               | 6           | 2, 3         | µA      |
| DRIVE Pin Current                                     | V FB = 1.35V , V DRIVE = 7V V FB = 1.15V , V DRIVE = 1.5V   |         | 290   |                  | 1.2     | 1 1          | 230         |               | 2           | 2, 3 2, 3    | mA mA   |
| DRIVE Pin Saturation Voltage                          | I DRIVE = 20mA, V FB = 1.15V I DRIVE = 250mA, V FB = 1.15V  |         |       | 0.12 0.73        | 0.2 1.0 | 1 1          |             |               | 0.3 1.4     | 2, 3 2, 3    | V V     |
| SHDN Pin Threshold Voltage                            |                                                             |         | 1     | 1.3              | 1.5     | 1            | 1           |               | 1.6         | 2, 3         | V       |
| SHDN Pin Current                                      | V SHDN = 5V                                                 |         |       | 200              | 300     | 1            |             |               | 350         | 2, 3         | µA      |
| LATCH Pin Latch-Off Threshold Voltage                 |                                                             |         | 1     | 1.4              | 1.8     | 1            | 0.8         |               | 2.3         | 2, 3         | V       |
| LATCH Pin Charging Current                            |                                                             |         | 4     | 7                | 10      | 1            | 2           |               | 14          | 2, 3         | µA      |
| LATCH Pin Latching Current                            |                                                             |         |       | 0.65             | 0.85    | 1            |             |               | 0.85        | 2, 3         | mA      |
| V IN - V OUT Differential Threshold for Latch Disable |                                                             |         | 0.55  | 0.7              | 0.8     | 1            | 0.4         |               | 1.1         | 2, 3         | V       |
| Input Quiescent Current                               | V IN = 7V                                                   |         |       | 1.7              | 2.8     | 1            |             |               | 3.5         | 2, 3         | mA      |
| Minimum Input Voltage for Bias Operation              |                                                             |         | 2.4   |                  |         | 1            | 2.8         |               |             | 2, 3         | V       |

## TABLE 2: ELECTRICAL CHARACTERISTICS (Postirradiation)

|                              |                                                            | NOTES   | 10KRAD(Si)   | 10KRAD(Si)   | 20KRAD(Si)   | 20KRAD(Si)   | 50KRAD(Si)   | 50KRAD(Si)   | 100KRAD(Si)   | 100KRAD(Si)   | 200KRAD(Si)   | 200KRAD(Si)   |       |
|------------------------------|------------------------------------------------------------|---------|--------------|--------------|--------------|--------------|--------------|--------------|---------------|---------------|---------------|---------------|-------|
| PARAMETER                    | CONDITIONS                                                 |         | MIN          | MAX          | MIN          | MAX          | MIN          | MAX          | MIN           | MAX           | MIN           | MAX           | UNITS |
| Reference Voltage            | I DRIVE = 20mA, T J = 25°C                                 | 2       | 1.252        | 1.278        | 1.252        | 1.278        | 1.249        | 1.281        | 1.245         | 1.285         | 1.239         | 1.291         | V     |
| Line Regulation (V FB )      | I DRIVE = 20mA, 3V < V IN < 7V                             |         |              | 2.1          |              | 2.2          |              | 2.5          |               | 3             |               | 4             | mV    |
| Load Regulation (V FB )      | I DRIVE = 20mA to 250mA                                    |         |              | 19           |              | 20           |              | 22           |               | 25            |               | 30            | mV    |
| FB Pin Bias Current          | V FB = 1.265V                                              |         |              | 4.2          |              | 4.5          |              | 5            |               | 6             |               | 7             | µA    |
| DRIVE Pin Current            | V FB = 1.35V , V DRIVE = 7V V FB = 1.15V , V DRIVE = 1.5V  |         | 290          | 1.3          | 288          | 1.4          | 285          | 1.7          | 275           | 2.2           | 260           | 3             | mA mA |
| DRIVE Pin Saturation Voltage | I DRIVE = 20mA, V FB = 1.15V I DRIVE = 250mA, V FB = 1.15V |         |              | 0.2 1        |              | 0.21 1.02    |              | 0.23 1.05    |               | 0.25 1.1      |               | 0.3 1.2       | V V   |
| SHDN Pin Threshold Voltage   |                                                            |         | 1            | 1.5          | 1            | 1.5          | 1            | 1.52         | 1             | 1.55          | 1             | 1.6           | V     |
| SHDN Pin Current             | V SHDN = 5V                                                |         |              | 300          |              | 300          |              | 300          |               | 300           |               | 300           | µA    |

<!-- image -->

## TABLE 2: ELECTRICAL CHARACTERISTICS (Postirradiation)

|                                                       |            |       | 10KRAD(Si)   | 10KRAD(Si)   | 20KRAD(Si)   | 20KRAD(Si)   | 50KRAD(Si)   | 50KRAD(Si)   | 100KRAD(Si)   | 100KRAD(Si)   | 200KRAD(Si)   | 200KRAD(Si)   |       |
|-------------------------------------------------------|------------|-------|--------------|--------------|--------------|--------------|--------------|--------------|---------------|---------------|---------------|---------------|-------|
| PARAMETER                                             | CONDITIONS | NOTES | MIN          | MAX          | MIN          | MAX          | MIN          | MAX          | MIN           | MAX           | MIN           | MAX           | UNITS |
| LATCH Pin Latch-Off Threshold Voltage                 |            |       | 1            | 1.9          | 1            | 2            | 0.9          | 2.1          | 0.8           | 2.2           | 0.8           | 2.2           | V     |
| LATCH Pin Charging Current                            |            |       | 4.4          | 10           | 4.4          | 10           | 4.2          | 10.5         | 4             | 11            | 4             | 11            | µA    |
| LATCH Pin Latching Current                            |            |       |              | 0.85         |              | 0.85         |              | 0.85         |               | 0.85          |               | 0.85          | mA    |
| V IN - V OUT Differential Threshold for Latch Disable |            |       | 0.5          | 0.81         | 0.5          | 0.82         | 0.48         | 0.85         | 0.45          | 0.9           | 0.4           | 1             | V     |
| Input Quiescent Current                               | V IN = 7V  |       |              | 2.8          |              | 2.8          |              | 2.85         |               | 2.9           |               | 3.1           | mA    |
| Minimum Input Voltage for Bias Operation              |            |       | 2.4          |              | 2.4          |              | 2.4          |              | 2.4           |               | 2.4           |               | V     |

## TABLE 3: POST BURN-IN ENDPOINTS AND DELTA LIMITS REQUIREMENTS

T A  = 25°C

|                   |                               |       | ENDPOINT LIMITS   | ENDPOINT LIMITS   | DELTA LIMITS   | DELTA LIMITS   |       |
|-------------------|-------------------------------|-------|-------------------|-------------------|----------------|----------------|-------|
| PARAMETER         | CONDITIONS                    | NOTES | MIN               | MAX               | MIN            | MAX            | UNITS |
| Reference Voltage | I DRIVE = 20mA, V IN = 5V     |       | 1.252             | 1.278             | -0.005         | 0.005          | V     |
| DRIVE Pin Current | V FB = 1.15V , V DRIVE = 1.5v |       | 280               |                   | -10            | 10             | mA    |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

<!-- image -->

Note 2: Operating conditions are limited by maximum junction temperature. The regulated feedback or output voltage specifi  cation will not apply for all possible combinations of input voltage, drive voltage and drive current. When operating at maximum drive current, the drive voltage range must be limited. When operating at maximum input and drive voltage, the drive current must be limited.

rh1573kdicef

## TABLE 4: ELECTRICAL TEST REQUIREMENTS

| MIL-STD-883 TEST REQUIREMENTS                                            | SUBGROUP   |
|--------------------------------------------------------------------------|------------|
| Final Electrical Test Requirements (Method 5004)                         | 1*,2,3     |
| Group A Test Requirements (Method 5005)                                  | 1,2,3      |
| Group B and D for Class S, End Point Electrical Parameters (Method 5005) | 1,2,3      |

## TOTAL DOSE BIAS CIRCUIT

<!-- image -->

## PDA Test Notes

The PDA is specifi  ed as 5% based on failures from group A, subgroup 1, tests after cooldown as the fi  nal electrical test in accordance with method 5004 of MIL-STD-883. The verifi  ed failures of group A, subgroup 1, after burn-in divided by the total number of devices submitted for burn-in in that lot shall be used to determine the percent for the lot.

Linear Technology Corporation reserves the right to test to tighter limits than those given.

<!-- image -->