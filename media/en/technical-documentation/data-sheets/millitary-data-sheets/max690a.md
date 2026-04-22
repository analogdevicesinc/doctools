<!-- lastmod 2023-09-11 -->
## SCOPE:      MICROPROCESSOR SUPERVISORY CIRCUITS

01

|   Device Type | Generic Number   |
|---------------|------------------|
|            01 | MAX690A(x)/883B  |
|            02 | MAX692A(x)/883B  |
|            03 | MAX805L(x)/883B  |

Case Outline(s ).   The case outlines shall be designated in Mil-Std-1835 and as follows:

Outline Letter           Mil-Std-1835                         Case Outline           Package Code

JA          GDIP1-T08 or CDIP2-T08        8 LEAD CERDIP              J08

## Absolute Maximum Ratings

Terminal Voltage (with respect to GND)

V

..................................................................................................................... -0.3V to 6.0V

V

CC

BATT

................................................................................................................... -0.3V to 6.0V

All other Inputs 1/ .................................................................................... -0.3V to (V

Input Current

V

V

CC

CC+0.3V)

....................................................................................................................……..... 200mA

BATT

....................................................................................................................…....... 50mA

GND ....................................................................................................................…........ 20mA

Output Current

V

........................................................................... Short-circuit protected for up to 10 sec.

All other outputs ............................................................................................................ 20mA

OUT

Rate of Rise, V

CC

, V

BATT

.................................................................................................. 100V/

µ

s

Lead Temperature (soldering, 10 seconds) .......................................................................... +300 ° C Storage Temperature ........................................................................................... -65 ° C to +160 ° C

Continuous Power Dissipation  ............................................................................ TA=

8  lead CERDIP(derate 8.0mW/

°

C above +70

Junction Temperature   T

J

°

+

70

°

C

C) ................................................... 640mW

.......................................................................................  +150

Thermal Resistance, Junction to Case,

Θ

JC:

Case Outline 8 lead CERDIP..................................................................... 55

Thermal Resistance, Junction to Ambient,

Θ

JA:

Case Outline 8 lead CERDIP................................................................... 125

## Recommended Operating Conditions

Ambient Operating Range (T

A

) ............................................................ -55

°

C  to

+

°

°

C

C/W

C/W

°

125

°

C

1/  The input voltage limits on PFI and WDI may be exceeded if the current into these pins is limited to less than 10mA.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of MAX690AM/692AM/   | 19-0321   |   Rev. B |
|--------------------------------|-------------------------------------------------|-----------|----------|
| ----------------------------   | /805LM/883B                                     | Page 2 of |        6 |

## TABLE 1.   ELECTRICAL TESTS:

| TEST                                        | Symbol   | CONDITIONS -55 ° C ≤ T A ≤ +125 ° C V CC =4.75V to 5.5V for 01,03. V CC =4.5V to 5.5V for 02. V BATT =2.8V Unless otherwise specified   | Group A Subgroup   | Device type   | Limits Min        | Limits Max   | Units   |
|---------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------|---------------|-------------------|--------------|---------|
| Operating Voltage Range V CC , V BATT .     |          | NOTE 2                                                                                                                                  | 1,2,3              | All           | 1.2               | 5.5          | V       |
| Supply Current (Excluding I OUT )           | I SUPPLY |                                                                                                                                         | 1,2,3              | All           |                   | 500          | µ A     |
| I SUPPLY in Battery Mode (Excluding I OUT ) |          | V CC =0V, V BATT =2.8V                                                                                                                  | 1 2,3              | All           |                   | 1.0 5.0      | µ A     |
| V BATT Standby Current NOTE 3               |          | 5.5V>V CC >V BATT +0.2V                                                                                                                 | 1 2,3              | All           | -0.1 -1.0         | 0.02 0.02    | µ A     |
| V OUT Output                                |          | I OUT =5mA I =50mA                                                                                                                      | 1,2,3              | All           | V CC -0.05 V -0.5 |              | V       |
| V OUT in Battery- Backup Mode               |          | OUT I OUT =250 µ A, V CC <V BATT -0.2V                                                                                                  | 1,2,3              | All           | CC V BATT - 0.1   |              | V       |
| Battery Switch Threshold, V CC to V BATT    |          | V CC <V RT , Power Up V CC <V RT , Power Down                                                                                           | 1,2,3              | All           | -200              | +200         | mV      |
| Reset Threshold                             | V RT     |                                                                                                                                         | 1,2,3              | 01,03 02      | 4.50 4.25         | 4.75 4.50    | V       |
| Reset Threshold Hysteresis                  |          |                                                                                                                                         | 1,2,3              | All           |                   | 250          | mV      |
| Reset Pulse Width                           | t RS     |                                                                                                                                         | 9,10,11            | All           | 140               | 280          | ms      |
| _____ RESET Output Voltage                  |          | I SOUCE =800 µ A I SINK =3.2mA                                                                                                          | 1,2,3              | All           | V CC -1.5         | 0.4          | V       |
|                                             |          | V CC =1.0V, I SINK =50 µ A V CC =1.2V, I SINK =100 µ A                                                                                  | 1 1,2,3            | 01,02         |                   | 0.3 0.3      |         |
| Reset Output Voltage                        |          | I SOURCE =4 µ A, V CC =1.2V I SOURCE =800 µ A I SINK =3.2mA                                                                             | 1,2,3              | 03            | 0.9 V CC -1.5     | 0.4          | V       |
| Watchdog Timeout                            | t WD     |                                                                                                                                         | 9,10,11            | All           | 1.00              | 2.25         | sec     |
| WDI Pulse Width                             | t WP     | V IL =0.4V, V IH =(0.8)(V CC )                                                                                                          | 9,10,11            | All           | 50                |              | ns      |
| WDI Input Threshold NOTE 4                  |          | V CC =5V, Logic low V CC =5V, Logic high                                                                                                | 1,2,3              | All           | 3.5               | 0.8          | V       |
| WDI Input Current                           |          | WDI=V CC WDI=0V                                                                                                                         | 1,2,3              | All           | -150              | 150          | µ A     |
| PFI Input Threshold                         |          | V CC =5V                                                                                                                                | 1,2,3              | All           | 1.20              | 1.30         | V       |
| PFI Input Current                           |          |                                                                                                                                         | 1,2,3              | All           | -25               | 25           | nA      |
| ___ PFO Output                              |          | I SOURCE =800 µ A                                                                                                                       | 1,2,3              | All           | V CC -1.5         |              | V       |
| Voltage                                     |          | I SINK =3.2mA                                                                                                                           |                    |               |                   | 0.4          |         |

| ----------------------------   | Electrical Characteristics of MAX690AM/692AM/   | 19-0321 Page 3   | Rev. B 6   |
|--------------------------------|-------------------------------------------------|------------------|------------|
| ----------------------------   | 805LM/883B                                      | of               |            |

- NOTE 2:  Either V CC or V BATT can go to 0V, if the other is greater than 2.0V.

- NOTE 3:  '-'= battery-charging, '+' = battery-discharging current.

- NOTE 4:  WDI is guaranteed to be in an intermediate, non-logic state if WDI is floating and V CC is in the operating voltage range.  WDI is internally biased 35% of V CC with an input impedance of 50k Ω .

|    | Package      | ORDERING INFORMATION:   |
|----|--------------|-------------------------|
| 01 | 8 pin CERDIP | MAX690AMJA/883B         |
| 02 | 8 pin CERDIP | MAX692AMJA/883B         |
| 03 | 8 pin CERDIP | MAX805LMJA/883B         |

## TERMINAL CONNECTIONS :

|    | MAX690A/692A   | MAX805L   |
|----|----------------|-----------|
|    | J8             | J8        |
| 1  | V OUT          | V OUT     |
| 2  | V CC           | V CC      |
| 3  | GND            | GND       |
| 4  | PFI            | PFI       |
| 5  | ____ PFO       | ____ PFO  |
| 6  | WDI            | WDI       |
| 7  | ______ RESET   | RESET     |
| 8  | V BATT         | V BATT    |

| ----------------------------   | Electrical Characteristics of MAX690AM/692AM/ 805LM/883B   | 19-0321 Page 4   | Rev. B 6   |
|--------------------------------|------------------------------------------------------------|------------------|------------|
| ----------------------------   |                                                            | of               |            |

## QUALITY ASSURANCE

Sampling and inspection procedures shall be in accordance with  MIL-Prf-38535, Appendix A as specified in MilStd-883.

Screening shall be in accordance with Method 5004 of Mil-Std-883.  Burn-in test Method 1015:

1.   Test Condition, A, B, C, or D.
2.   TA = +125 ° C minimum.
3.   Interim and final electrical test requirements shall be specified in Table 2.

Quality conformance inspection shall be in accordance with Method 5005 of Mil-Std-883, including Groups A, B, C,  and D inspection.

## Group A inspection:

1.   Tests as specified in Table 2.
2.   Selected subgroups in Table 1, Method 5005 of Mil-Std-883 shall be omitted.

## Group C and D inspections:

- a.  End-point electrical parameters shall be specified in Table 1.
- b.  Steady-state life test, Method 1005 of Mil-Std-883:
1.   Test condition A, B, C, D.
2.   TA = +125 ° C, minimum.
3.   Test duration, 1000 hours, except as permitted by Method 1005 of Mil-Std-883.

## TABLE 2.                             ELECTRICAL TEST REQUIREMENTS

| Mil-Std-883 Test Requirements                             | Subgroups per Method 5005, Table 1   |
|-----------------------------------------------------------|--------------------------------------|
| Interim Electric Parameters Method 5004                   | 1                                    |
| Final Electrical Parameters Method 5005                   | 1*, 2, 3, 9, 10, 11                  |
| Group A Test Requirements Method 5005                     | 1, 2, 3, 9, 10, 11                   |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |

*     PDA applies to Subgroup 1 only.

| ----------------------------   | Electrical Characteristics of MAX690AM/692AM/   | 19-0321   |   Rev. B |
|--------------------------------|-------------------------------------------------|-----------|----------|
| ----------------------------   | 805LM/883B                                      | Page 5 of |        6 |