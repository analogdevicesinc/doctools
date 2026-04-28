<!-- lastmod 2023-08-23 -->
<!-- image -->

## DESCRIPTION

The RH1185AMK is a 3A low dropout regulator with adjustable current limit and remote sense capability. It can be used as a positive regulator with floating input or as a standard negative regulator with grounded input. The output voltage range is 2.5V to 25V , with ±1% accuracy on the internal reference voltage.

The RH1185AMK uses a saturation-limited NPN transistor as  the  pass  element.  This  structure  gives  the  linear  dropout characteristics  of  a  FET  pass  element  with  significantly  less die area. High efficiency is maintained by using special anti-saturation circuitry that adjusts base drive to track load current.

The  on-resistance is typically 0.25Ω. Accurate current limit is programmed with a single 1/8W external resistor , with a range of zero to three amperes. A second, fixed internal limit circuit prevents destructive currents if the programming current is accidentally overranged.

The RH1185AMK has all the protection features of previous LTC regulators, including power limiting and thermal shutdown.

## BURN-IN CIRCUIT

<!-- image -->

## Negative Regulator with Adjustable Current Limit

## ABSOLUTE MAXIMUM RATINGS

| (Note 1)                                                                                                |                                                               |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Input Voltage.............................................................35V                           |                                                               |
| Input-Output Differential                                                                               | ...........................................30V                |
| FB Voltage...................................................................7V                         |                                                               |
| REF Voltage.................................................................7V                          |                                                               |
| Output Voltage                                                                                          | ..........................................................30V |
| Output Reverse Voltage...............................................2V                                 |                                                               |
| Operating Ambient Temperature Range.. -55°C                                                             | to 125°C                                                      |
| Operating Junction Temperature Range Control Section..................................                  | -55°C to 150°C                                                |
| Power Transistor Section                                                                                | ................... -55°C to 175°C                            |
| Storage Temperature Range...................                                                            | -65°C to 150°C                                                |
| Thermal Resistance Junction to Case TO-3 Control Area.............................................1°C/W |                                                               |
| Power Transistor...............................................3°C/W                                    |                                                               |
| Lead Temperature (Soldering, 10 sec)                                                                    | ..................300°C                                       |

All registered trademarks and trademarks are the property of their respective owners.

## PACKAGE INFORMATION

<!-- image -->

## TABLE 1: ELECTRICAL CHARACTERISTICS (Preirradiation)

VIN  = 7.4V , V OUT  = 5V , I OUT  = 1mA, R LIM  = 4.02k, unless otherwise noted. Device is characterized at the TID levels below. Device is production tested at 100kRad(si).

| PARAMETER AND CONDITIONS                                                                                                                        | MIN   | TYP T A = 25°C   | MAX   | SUB- GROUP   | MIN -55°C ≤ T A   | TYP ≤ 125°C   | MAX SUB- GROUP   | UNITS   |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-------|------------------|-------|--------------|-------------------|---------------|------------------|---------|
| Reference Voltage (At FB Pin)                                                                                                                   |       | 2.37             |       |              |                   | 2.37          |                  | V       |
| Reference Voltage Tolerence (At FB Pin) (Note 2) V IN - V OUT = 5V , V OUT = V REF                                                              | -1.0  | 0.3              | 1.0   | 1            |                   |               |                  | %       |
| Reference Voltage Tolerance V IN - V OUT = 1.2V to V IN = 30V , 1mA ≤ I OUT ≤ 3A, P D ≤ 25W (Note 6), V OUT = 5V , T MIN ≤ T J ≤ T MAX (Note 9) |       |                  |       |              | -2.5              |               | 2.5 2, 3         | %       |
| Feedback Pin Bias Current, V OUT = V REF                                                                                                        |       | 0.7              | 2     | 1            |                   |               | 2 2, 3           | µA      |
| Dropout Voltage (Note 3) I OUT = 0.5A, V OUT = 5V                                                                                               |       | 0.2              | 0.37  | 1            |                   |               | 0.55 2, 3        | V       |
| I OUT = 3A, V OUT = 5V                                                                                                                          |       | 0.67             | 1     | 1            |                   |               | 1.4 2, 3         | V       |
| Load Regulation (Note 7) I OUT = 5mA to 3A, V IN - V OUT = 1.5V to 10V , V OUT = 5V                                                             |       | 0.05             | 0.3   | 1            |                   |               | 0.8 2, 3         | %       |
| Line Regulation (Note 7) V IN - V OUT = 1V to 20V , V OUT = 5V                                                                                  |       | 0.002            | 0.01  | 1            |                   |               | 0.03 2, 3        | %/V     |
| Minimum Input Votlage (Note 4)                                                                                                                  |       |                  | 3.9   | 1            |                   |               |                  | V       |
| I OUT = 1A, V OUT = V REF I OUT = 3A, V OUT = V REF                                                                                             |       |                  | 4.4   | 1            |                   |               |                  | V       |
| Internal Current Limit (See Graph for Guaranteed                                                                                                |       |                  |       |              |                   |               |                  |         |
| Curve) (Note 12) 1.5V ≤ V IN - V OUT ≤ 10V                                                                                                      | 3.3   | 3.6              | 4.2   | 1            | 3.1               |               | 4.4 2, 3         | A       |
| V IN - V OUT = 15V                                                                                                                              | 2     | 3                | 4.2   | 1            | 2                 |               | 4.3 2, 3         | A       |
| V IN - V OUT = 20V                                                                                                                              | 1     | 1.7              | 2.6   | 1            | 1                 |               | 3 2, 3           | A       |
| V IN - V OUT = 30V                                                                                                                              | 0.2   | 0.4              | 1     | 1            | 0.2               |               | 1.1 2, 3         | A       |
| External Current Limit (Note 11) R LIM = 5k, V OUT = 1V                                                                                         | 2.7   | 3                | 3.3   | 1            | 2.5               |               | 3.5 2, 3         | A       |
| R LIM = 15k, V OUT = 1V                                                                                                                         | 0.9   | 1                | 1.1   | 1            | 0.8               |               | 1.2 2, 3         | A       |
| Quiescent Supply Current (Note 5) I OUT = 5mA, V OUT = V REF , 4V ≤ V IN ≤ 25V                                                                  |       | 2.5              | 3.5   | 1            |                   |               | 3.5 2, 3         | mA      |
| Supply Current Change With Load V IN - V OUT = V SAT (Note 10)                                                                                  |       |                  | 25    | 1            |                   |               | 40 2, 3          | mA      |
| V IN - V OUT ≥ 2V                                                                                                                               |       |                  | 15    | 1            |                   |               | 25 2, 3          | mA      |
| Thermal Regulation V IN - V OUT = 10V , I OUT = 5mA to 2A                                                                                       |       |                  |       |              |                   |               | 0.014            | %/W     |
| Reference Voltage Temperature Coefficient (Note 8)                                                                                              |       |                  |       |              |                   |               | 0.01             | %/°C    |

## TABLE 1A: ELECTRICAL CHARACTERISTICS (Postirradiation)

Device is characterized at the TID levels below. Device is production tested at 100kRad(si).

| PARAMETER AND CONDITONS                                                                                                                         | 10KRAD(Si) MIN MAX   | 10KRAD(Si) MIN MAX   | 20KRAD(Si) MIN MAX   | 20KRAD(Si) MIN MAX   | 50KRAD(Si) MIN MAX   | 50KRAD(Si) MIN MAX   | 100KRAD(Si) MIN MAX   | 100KRAD(Si) MIN MAX   | 200KRAD(Si) MIN MAX   | 200KRAD(Si) MIN MAX   | UNITS     |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|-----------------------|-----------------------|-----------------------|-----------------------|-----------|
| Reference Voltage Tolerance V IN - V OUT = 5V , V OUT = V REF                                                                                   | -1.2                 | 1.2                  | -1.2                 | 1.2                  | -1.5                 | 1.5                  | -1.5                  | 1.5                   | -2                    | 2                     | %         |
| Reference Voltage Tolerance V IN - V OUT = 1.2V to V IN = 30V , 1mA ≤ I OUT ≤ 3A, P D ≤ 25W (Note 6), V OUT = 5V , T MIN ≤ T J ≤ T MAX (Note 9) | -3                   | 3                    | -3                   | 3                    | -3.2                 | 3.2                  | -3.5                  | 3.5                   | -4                    | 4                     | %         |
| Feedback PIn Bias Current, V OUT = V REF                                                                                                        |                      | 2                    |                      | 2                    |                      | 2.5                  |                       | 3                     |                       | 3                     | µA        |
| Dropout Voltage (Note 3) I OUT = 0.5A, V OUT = 5V                                                                                               |                      | 0.4 1                |                      | 0.4 1                |                      | 0.4 1                |                       | 0.425 1.05            |                       | 0.45 1.1              | V V       |
| I OUT = 3A, V OUT = 5V Load Regulation (Note 7) I OUT = 5mA to                                                                                  |                      | 0.3                  |                      | 0.4                  |                      | 0.5                  |                       | 0.8                   |                       | 1                     | %         |
| 3A V IN - V OUT = 1.5V to 10V , V OUT = 5V Line Regulation, Absolute Value (Note 7) V IN - V OUT = 1V to 20V , V OUT = 5V                       |                      | 0.01                 |                      | 0.01                 |                      | 0.01                 |                       | 0.02                  |                       | 0.05                  | %/V       |
| Minimum Input Voltage (Note 4) I OUT = 1A, V OUT = V REF I = 3A, V = V                                                                          |                      | 3.9                  |                      | 3.9                  |                      | 3.9 4.4              |                       | 4                     |                       | 4                     | V         |
| OUT OUT REF Internal Current Limit (Note 12) 1.5V ≤ V IN - V OUT ≤ 10V                                                                          |                      | 4.4                  |                      | 4.4                  |                      |                      |                       | 4.5                   |                       | 4.5                   | V         |
| V IN - V OUT = 15V                                                                                                                              | 3.3                  | 4.3                  | 3.3                  | 4.3                  | 3.3                  | 4.4                  | 3.3                   | 4.55                  | 3.3                   | 4.75                  | A         |
|                                                                                                                                                 | 2                    | 4.3                  | 2                    | 4.3                  | 2 1                  | 4.35                 | 2                     | 4.5                   | 2                     | 4.7                   | A         |
| V IN - V OUT = 20V V IN - V OUT = 30V                                                                                                           | 1 0.2                | 2.7 1                | 1 0.2                | 2.75 1.15            | 0.2                  | 2.85 1.3             | 1 0.2                 | 3.1 1.6               | 1 0.2                 | 3.3 2                 | A A       |
| External Current Limit (Note 11) R LIM = 5k                                                                                                     | 2.7                  | 3.3                  | 2.7                  | 3.4                  | 2.7                  | 3.5                  | 2.7                   | 3.7                   | 2.7                   | 3.9                   | A         |
| R LIM = 15k Quiescent Supply Current I = 5mA, V = V , 4V ≤ V ≤ 25V                                                                              | 0.9                  | 1.1 3.5              | 0.9                  | 1.25 3.5             | 0.9                  | 1.4 3.5              | 0.9                   | 1.6 3.5               | 0.9                   | 1.9 3.5               | A         |
| OUT OUT REF IN Supply Current Change With Load V IN - V OUT = V SAT                                                                             |                      | 25                   |                      | 27                   |                      | 30                   |                       | 35                    |                       | 45                    | mA        |
| V IN - V OUT ≥ 2V                                                                                                                               |                      | 15                   |                      | 16                   |                      | 18                   |                       | 21                    |                       | 27                    | mA/A mA/A |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

Note 2: Reference voltage is guaranteed both at nominal conditions (no load, 25°C) and at worst-case conditions of load, line, power and temperature.

Note 3: Dropout voltage is tested by reducing input voltage until the output drops 1% below its nominal value. Tests are done at 0.5A and 3A. The power transistor looks basically like a pure resistance in this range so that minimum differential at any intermediate current can be calculated by interpolation; V DROPOUT  = 0.25V + 0.25Ω · I OUT . For load current other than 0.5A and 3.0A, see graph in LT1185 data sheet.

Note 4: 'Minimum input voltage' is limited by base emitter voltage drive of the power transistor section, not saturation as measured in Note 3. For output voltages below 4V , 'minimum input voltage' specification may limit dropout voltage before transistor saturation limitation.

Note 5: Supply current is measured on the ground pin, and does not include load current, R LIM , or output divider current.

Note 6: The 25W power level is guaranteed for an input-output voltage of 8.3V to 17V . At lower voltages the 3A limit applies, and at higher voltages the internal power limiting may restrict regulator power below 25W . See graph of Internal Current Limit in L T1185 data sheet.

Note 7: Line and load regulation are measured on a pulse basis with a pulse width of ≈2ms, to minimize heating. DC regulation will be affected by thermal regulation and temperature coefficient of the reference. See the Applications Information section of LT1185 data sheet for details.

Note 8: Guaranteed by design and correlation to other tests, but not tested.

Note 9: T JMIN  = -55°C for the RH1185AMK. Power transistor area and control circuit area have different maximum junction temperatures. Control area limit is T JMAX  = 150°C for the RH1185AMK. Power area limit is 175°C for RH1185AMK.

Note 10: V SAT  is the maximum specified dropout voltage;

.

0.25V + 0.25Ω • I OUT

Note 11: Current limit is programmed with a resistor from REF pin to GND pin. The value is 15k · A/I-limit.

Note 12: For V IN - V OUT = 1.5V , V IN = 5V and V OUT  = 3.5V . For all other current limit tests, V OUT  = 1.0V

Rev. B

<!-- image -->

## TABLE 2: POST BURN-IN ENDPOINTS AND DELTA LIMITS REQUIREMENTS T A  = 25°C

| PARAMETER AND CONDITIONS                             | ENDPOINT LIMITS   | ENDPOINT LIMITS   | DELTA LIMITS   | DELTA LIMITS   | UNITS   |
|------------------------------------------------------|-------------------|-------------------|----------------|----------------|---------|
|                                                      | MIN               | MAX               | MIN            | MAX            |         |
| Reference Voltage, V REF V IN = 7.4V , V OUT = V REF | 2.346             | 2.394             | -0.040         | 0.040          | V       |

## TABLE 3: ELECTRICAL TEST REQUIREMENTS

| MIL-STD-883 TEST REQUIREMENTS                                            | SUBGROUP   |
|--------------------------------------------------------------------------|------------|
| Final Electrical Test Requirements (Method 5004)                         | 1*, 2, 3   |
| Group A Test Requirements (Method 5005)                                  | 1, 2, 3    |
| Group B and D for Class S, End Point Electrical Parameters (Method 5005) | 1, 2, 3    |

## TOTAL DOSE BIAS CIRCUIT

## PDA Test Notes

The PDA is specified as 5% based on failures from Group A, Subgroup 1, tests after cooldown as the final electrical test in accordance with method 5004 of MIL-STD-883. The verified failures of Group A, Subgroup 1, after burn-in divided by the total number of devices submitted for burn-in in that lot shall be used to determine the percent for the lot.

Linear Technology Corporation reserves the right to test to tighter limits than those given.

<!-- image -->

## REVISION HISTORY

| REV   | DATE   | DESCRIPTION                                                                                         | PAGE NUMBER   |
|-------|--------|-----------------------------------------------------------------------------------------------------|---------------|
| A     | 02/11  | Changed title from RH1185MK to RH1185AMK.                                                           | 1-6           |
|       |        | Revised Description.                                                                                | 1             |
|       |        | Removed REF Pin Shutoff Current from Tables 1 and Table 1A Electrical Characteristics.              | 2, 3          |
|       |        | Removed REF Pin Shutoff Current Plot from the Typical Performance Characteristics section.          | 6             |
| B     | 07/23  | Updated art title in the Electrical Characteristics section and updated the document to ADI format. | 1-6           |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

<!-- image -->

<!-- image -->

External Current Limit

<!-- image -->

<!-- image -->

Load Regulation

<!-- image -->

<!-- image -->

<!-- image -->

RH1185AMK G06

For more information www.analog.com