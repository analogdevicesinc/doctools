<!-- lastmod 2022-10-10 -->
## SCOPE:     DUAL POWER MOSFET DRIVER

01

|   Device Type | Generic Number   | Circuit Function                                |
|---------------|------------------|-------------------------------------------------|
|            01 | TSC426M(x)/883B  | Dual Power Inverting MOSFET Driver              |
|            02 | TSC427M(x)/883B  | Dual Power Noninverting MOSFET Driver           |
|            03 | TSC428M(x)/883B  | Dual Power Inverting/Noninverting MOSFET Driver |

Case Outline(s ).   The case outlines shall be designated in Mil-Std-1835 and as follows:

JA

| Outline Letter   | Mil-Std-1835         | Case Outline        | Package Code   |
|------------------|----------------------|---------------------|----------------|
| JA               | GDIP1-T8 or CDIP2-T8 | 8 LEAD CERDIP       | J8             |
| NP               | CQCC1-N20            | 20 Leadless Carrier | L20            |

## Absolute Maximum Ratings

Supply Voltage V

Input Voltage .........................................................................V

DD to GND ................................................................................... 20V

Output Current (per pin, capacitive load) ............................................................... 1.5A

DD +0.3V to GND -0.3V

Peak Supply Current or GND Current (per pin) ..................................................... 3.0A

Lead Temperature (soldering, 10 seconds) ....................................................................... +300

Storage Temperature .......................................................................................... -65

°

C to +150

Continuous Power Dissipation  ............................................................................. TA=

8 pin CERDIP(derate 8.0mW/

°

20 pin LCC(derate 9.1mW/

°

C above +70

C above +70

°

+

70

°

C

C) ........................................................ 640mW

C) ............................................................ 727mW

Junction Temperature   T

J

°

.....................................................................................….  +150

Thermal Resistance, Junction to Case,

Θ

JC

8 pin CERDIP..................................................................................................... 55

20 pin LCC ........................................................................................................ 20

Thermal Resistance, Junction to Ambient,

Θ

JA:

8 pin CERDIP................................................................................................... 125

°

C

C/W

°

C/W

°

C/W

°

20 pin LCC ...................................................................................................... 110

## Recommended Operating Conditions

Ambient Operating Range (T

A

) ............................................................. -55

°

C  to

+

125

°

C

Supply Voltage Range .............................................................................. 4.5V

≤

VDD

≤

18V

|    | Package      | ORDERING INFORMATION:   | SMD Number     |
|----|--------------|-------------------------|----------------|
| 01 | 8 pin CERDIP | TSC426MJA/883B          | 5962-8850301PA |
| 01 | 20 pin LCC   | TSC426MNP/883B          | 5962-88503012C |
| 02 | 8 pin CERDIP | TSC427MJA/883B          | 5962-8850302PA |
| 02 | 20 pin LCC   | TSC427MNP/883B          | 5962-88503022C |
| 03 | 8 pin CERDIP | TSC428MJA/883B          | 5962-8850303PA |
| 03 | 20 pin LCC   | TSC428MNP/883B          | 5962-88503032C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of TSC426/427/428/883B   | 19-0385   |   Rev. B |
|--------------------------------|-----------------------------------------------------|-----------|----------|
| ----------------------------   | for SMD 5962-88503                                  | Page 2 of |        5 |

C/W

°

C

°

C

°

TABLE 1.   ELECTRICAL TESTS:

| TEST                  | TEST                  | Symbol     | CONDITIONS -55 ° C <=T A <= +125 ° C +4.5V ≤ V S ≤ 18V Unless otherwise specified                                            | CONDITIONS -55 ° C <=T A <= +125 ° C +4.5V ≤ V S ≤ 18V Unless otherwise specified                                            | Group A Subgroup   | Device type   | Limits Min   | Limits Max   | Units   |
|-----------------------|-----------------------|------------|------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------|---------------|--------------|--------------|---------|
| Logic 1 Input Voltage | Logic 1 Input Voltage | V IH       |                                                                                                                              |                                                                                                                              | 1,2,3              | All           | 2.4          |              | V       |
| Logic 0 Input Voltage | Logic 0 Input Voltage | V IL       |                                                                                                                              |                                                                                                                              | 1,2,3              | All           |              | 0.8          | V       |
| Input Voltage Range   | Input Voltage Range   | V IN (max) |                                                                                                                              |                                                                                                                              | 1,2,3              | All           | 0            | V DD         | V       |
| Input Current         | Input Current         | I IN       | V IN =0V to 18V                                                                                                              | V IN =0V to 18V                                                                                                              | 1,2,3              | All           |              | ± 1 ± 10     | µ A     |
| Output High Voltage   | Output High Voltage   | V OH       | RL= ∞                                                                                                                        | NOTE 1                                                                                                                       | 1,2,3              | All           | V DD -25     |              | mV      |
| Output Low Voltage    | Output Low Voltage    | V OL       | RL= ∞                                                                                                                        | NOTE 1                                                                                                                       | 1,2,3              | All           |              | 25           | mV      |
| Output Resistance     | Output Resistance     | R OUT      | Apply V IN to force V OUT high. V DD =18V, I OUT =10mA, V IN =0.8V for inverting stages, V =2.4V for noninverting stages     | Apply V IN to force V OUT high. V DD =18V, I OUT =10mA, V IN =0.8V for inverting stages, V =2.4V for noninverting stages     | 1,2,3              | All           |              | 20           | Ω       |
| Output Resistance     | Output Resistance     | R OUT      | IN Apply V IN to force V OUT low. V DD =18V, I OUT =10mA, V IN =0.8V for noninverting stages V IN =2.4V for inverting stages | IN Apply V IN to force V OUT low. V DD =18V, I OUT =10mA, V IN =0.8V for noninverting stages V IN =2.4V for inverting stages | 1,2,3              | All           |              | 15           | Ω       |
| Power Supply Current  | Power Supply Current  | I S1       | V IN =+3V, both inputs                                                                                                       | V IN =+3V, both inputs                                                                                                       | 1 2,3              | 01            |              | 8 12         | mA      |
| Power Supply Current  | Power Supply Current  | I S2       | V IN =0V, both inputs                                                                                                        | V IN =0V, both inputs                                                                                                        | 1 2,3              | 01            |              | 0.4 0.6      | mA      |
| Rise Time             | NOTE 2                | t R        | V DD =18V                                                                                                                    | NOTE 2                                                                                                                       | 9,10,11            | All           |              | 60           | ns      |
| Fall Time             | NOTE 2                | t F        | V DD =18V                                                                                                                    | NOTE 2                                                                                                                       | 9,10,11            | All           |              | 40           | ns      |
| Delay Time            | NOTE 1                | t D1       | V DD =18V                                                                                                                    | NOTE 2                                                                                                                       | 9,10,11            | All           |              | 60           | ns      |
| Delay Time            | NOTE 1                | t D2       | V DD =18V                                                                                                                    | NOTE 2                                                                                                                       | 9,10,11            | All           |              | 120          | ns      |

NOTE 1:  Guaranteed by design.

NOTE 2:  Subgroups 10 and 11 are guaranteed if not tested to the limits specified in Table 1.

## TERMINAL CONNECTIONS FOR 01, 02, 03.

|   8 PIN CERDIP | 8 PIN CERDIP   | 8 PIN CERDIP   | 8 PIN CERDIP   |   20 PIN LCC | 20 PIN LCC   | 20 PIN LCC   | 20 PIN LCC   |   20 PIN LCC | 20 PIN LCC   | 20 PIN LCC   | 20 PIN LCC   |
|----------------|----------------|----------------|----------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
|                | 01             | 02             | 03             |              | 01           | 02           | 03           |              | 01           | 02           | 03           |
|              1 | NC             | NC             | NC             |            1 | NC           | NC           | NC           |           11 | NC           | NC           | NC           |
|              2 | INA            | INA            | INA            |            2 | NC           | NC           | NC           |           12 | NC           | NC           | NC           |
|              3 | GND            | GND            | GND            |            3 | NC           | NC           | NC           |           13 | NC           | NC           | NC           |
|              4 | INB            | INB            | INB            |            4 | INA          | INA          | INA          |           14 | _____ OUTB   | OUTB         | OUTB         |
|              5 | _____ OUTB     | OUTB           | OUTB           |            5 | NC           | NC           | NC           |           15 | NC           | NC           | NC           |
|              6 | V DD           | V DD           | V DD           |            6 | GND          | GND          | GND          |           16 | V DD         | V DD         | V DD         |
|              7 | _____ OUTA     | OUTA           | _____ OUTA     |            7 | NC           | NC           | NC           |           17 | NC           | NC           | NC           |
|              8 | NC             | NC             | NC             |            8 | INB          | INB          | INB          |           18 | _____ OUTA   | OUTA         | _____ OUTA   |
|                |                |                |                |            9 | NC           | NC           | NC           |           19 | NC           | NC           | NC           |
|                |                |                |                |           10 | NC           | NC           | NC           |           20 | NC           | NC           | NC           |

| ----------------------------   | Electrical Characteristics of TSC426/427/428/883B for SMD 5962-88503   | 19-0385   |   Rev. B |
|--------------------------------|------------------------------------------------------------------------|-----------|----------|
| ----------------------------   |                                                                        | Page 3 of |        5 |

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
| Final Electrical Parameters Method 5005                   | 1*, 2, 3, 9, 10**, 11**              |
| Group A Test Requirements Method 5005                     | 1, 2, 3, 9, 10**, 11**               |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |

*     PDA applies to Subgroup 1 only.
- **    Subgroups 10 and 11, if not tested, shall be guaranteed to the specified limits of Table 1.

| ----------------------------   | Electrical Characteristics of TSC426/427/428/883B for SMD 5962-88503   | 19-0385 Page 4 of   | Rev. B 5   |
|--------------------------------|------------------------------------------------------------------------|---------------------|------------|