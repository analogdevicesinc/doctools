<!-- lastmod 2022-10-10 -->
## SCOPE:     5V, STEP-DOWN, CURRENT-MODE PWM DC-DC CONVERTER

Device Type        Generic Number

MAX738A(x)/883B

01

Case Outline(s ).   The case outlines shall be designated in Mil-Std-1835 and as follows:

Outline Letter           Mil-Std-1835                         Case Outline           Package Code

JA

GDIP1-T8 or CDIP2-T8               8 LEAD CERDIP             J8

## Absolute Maximum Ratings

| V+ ..........................................................................................................………... +18V, -0.3V                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LX ......................................................................................……….. (V+ -21V) to (V+ +0.3V)                                                     |
| OUT...................................................................................................................………... ± 25V _____                                   |
| SS, CC, SHDN ...........................................................................………. -0.3V to (V+ +0.3V)                                                           |
| Peak Switch Current (I LX ) ......................................................................................……….. 2A                                                 |
| Reference Current (I REF ) ...................................................................................………. 2.5mA                                                   |
| Lead Temperature (soldering, 10 seconds) ....................................................................... +300 ° C                                                  |
| Storage Temperature .......................................................................................... -65 ° C to +150 ° C                                         |
| Continuous Power Dissipation ..........................................................................…….. T A = + 70 ° C                                                 |
| 8 pin CERDIP(derate 8.0mW/ ° C above +70 ° C) ....................................................…….. 640mW                                                               |
| Junction Temperature T J .....................................................................................……... +150 ° C                                               |
| Thermal Resistance, Junction to Case, Θ JC 8 pin CERDIP..................................................................................................……... 55 ° C/W    |
| Thermal Resistance, Junction to Ambient, Θ JA: 8 pin CERDIP...............................................................................................…….... 125 ° C/W |

## Recommended Operating Conditions

Ambient Operating Range (T

A

) .........................................................……….. -55

°

C  to

+

125

°

C

Input Voltage Range ..........................................................................……………... 6.0V to 16V

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of MAX738A/883B and   | 19-0118   |   Rev. C |
|--------------------------------|--------------------------------------------------|-----------|----------|
| ----------------------------   | SMD 5962-93121                                   | Page 2 of |        5 |

## TABLE 1.   ELECTRICAL TESTS:

| TEST                           | Symbol   | CONDITIONS -55 ° C <=T A <= +125 ° C V+=12V, I LOAD =0mA Unless otherwise specified   | Group A Subgroup   | Device type   |   Limits Min |   Limits Max | Units   |
|--------------------------------|----------|---------------------------------------------------------------------------------------|--------------------|---------------|--------------|--------------|---------|
| Output Voltage NOTE 1          | V OUT    | V+=16.0V, I LOAD =0mA                                                                 | 1,2,3              | All           |         4.75 |         5.25 | V       |
| Output Voltage NOTE 1          | V OUT    | V+=6.0V, I LOAD =0mA                                                                  | 1,2,3              | All           |         4.75 |         5.25 | V       |
| Output Voltage NOTE 1          | V OUT    | V+=6.0V, I LOAD =350mA                                                                | 1,2,3              | All           |         4.75 |         5.25 | V       |
| Output Voltage NOTE 1          | V OUT    | V+=10.2V, I LOAD =750mA                                                               | 1,2,3              | All           |         4.75 |         5.25 | V       |
| Output Voltage NOTE 1          | V OUT    | V+=16.0V, I LOAD =750mA                                                               | 1,2,3              | All           |         4.75 |         5.25 | V       |
| Input Voltage Range            | V IN     |                                                                                       | 1,2,3              | All           |          6.0 |         16.0 | V       |
| Supply Current                 | I S      | Includes switch current                                                               | 1,2,3              | All           |              |          3.0 | mA      |
| Standby Current                | I STDBY  | _____ SHDN = 0V NOTE 2                                                                | 1,2,3              | All           |              |        100.0 | µ A     |
| Shutdown input threshold       | V SIT    | V IH                                                                                  | 1,2,3              | All           |          2.0 |              | V       |
| Shutdown input threshold       | V SIT    | V IL                                                                                  | 1,2,3              | All           |              |         0.25 | V       |
| Shutdown input leakage current | I SIL    |                                                                                       | 1,2,3              | All           |              |          1.0 | µ A     |
| Under Voltage Lockout          | V UL     |                                                                                       | 1,2,3              | All           |              |          6.0 | V       |
| Reference Voltage              | V REF    |                                                                                       | 1,2,3              | All           |         1.15 |         1.30 | V       |
| Oscillator frequency           | f OSC    | V IN =0V, both inputs                                                                 | 1,2,3              | All           |          130 |          190 | kHz     |

## ORDERING INFORMATION:

| Package      |   Device | Part #          | SMD #           |
|--------------|----------|-----------------|-----------------|
| 8 pin CERDIP |       01 | MAX738AMJA/883B | 5962-9312101MPA |

## TERMINAL CONNECTIONS

|   1 | _____ SHDN   |
|-----|--------------|
|   2 | V REF        |
|   3 | SS           |
|   4 | CC           |
|   5 | V OUT        |
|   6 | GND          |
|   7 | LX           |
|   8 | V+           |

| ----------------------------   | Electrical Characteristics of MAX738A/883B and   | 19-0118   |   Rev. C |
|--------------------------------|--------------------------------------------------|-----------|----------|
| ----------------------------   | SMD 5962-93121                                   | Page 3 of |        5 |

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
| Final Electrical Parameters Method 5005                   | 1*, 2, 3                             |
| Group A Test Requirements Method 5005                     | 1, 2, 3                              |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |

*     PDA applies to Subgroup 1 only.

| ----------------------------   | Electrical Characteristics of MAX738A/883B and SMD 5962-93121   | 19-0118 Page 4 of   | Rev. C 5   |
|--------------------------------|-----------------------------------------------------------------|---------------------|------------|