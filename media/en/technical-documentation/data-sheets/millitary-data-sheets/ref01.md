<!-- lastmod 2022-10-10 -->
## Not Recommended for New Designs

This product was manufactured for Maxim by an outside wafer foundry using a process that is no longer available.  It is not recommended for new designs. The data sheet remains available for existing users.

A Maxim replacement or an industry second-source may be available. Please see the QuickView data sheet for this part or contact technical support for assistance.

[For further information, contact Maxim's Applications Tech Support.](http://www.maxim-ic.com/support/request/new.mvp)

## SCOPE: PRECISION REFERENCE +10 VOLT ADJUSTABLE OUTPUT

01

02

Device Type                    Generic Number

REF01A(x)/883B

REF01(x)/883B

Case Outline(s).   The case outlines shall be designated in Mil-Std-1835 and as follows:

MAXIM     SMD

| Outline Letter   | Outline Letter   | Mil-Std-1835         | Case Outline       | Package Code   |
|------------------|------------------|----------------------|--------------------|----------------|
| MAXIM            | SMD              |                      |                    |                |
| Z                | P                | GDIP1-T8 or CDIP2-T8 | 8 LEAD CERDIP      | J8             |
| J                | G                | MACY1-X8             | 8 LEAD CAN         | G99            |
| RC               | 2                | CQCC1-N20            | 20 Pin Ceramic LCC | L20            |

## Absolute Maximum Ratings

| Supply Voltage V DD to GND ................................................................................... 40V Output Short Circuit Duration (to GND or V IN ) ............................................... Indefinite   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Lead Temperature (soldering, 10 seconds) ............................................................... +300 ° C C                                                                                                             |
| Storage Temperature .................................................................................. -65 ° C to +150 °                                                                                                        |
| Continuous Power Dissipation .............................................................................T A = + 70 ° C                                                                                                        |
| 8 lead CERDIP(derate 8.0mW/ ° C above +70 ° C) .................................................... 640mW                                                                                                                       |
| 8 pin CAN (derate 6.67mW/ ° C above +70 ° C)......................................................... 533mW                                                                                                                     |
| 20-Pin LCC (derate 9.09mW/ ° C above +70 ° C) ...................................................... 727mW                                                                                                                      |
| Junction Temperature T J ....................................................................................... +150 ° C                                                                                                       |
| Thermal Resistance, Junction to Case, Θ JC:                                                                                                                                                                                     |
| Case Outline 8 lead CERDIP.................................................................. 55 ° C/W                                                                                                                           |
| Case Outline 8 lead CAN ....................................................................... 45 ° C/W                                                                                                                        |
| Case Outline 20-Pin LCC ....................................................................... 20 ° C/W                                                                                                                        |
| Thermal Resistance, Junction to Ambient, Θ JA: °                                                                                                                                                                                |
| Case Outline 8 lead CAN ...................................................................... 150 ° C/W                                                                                                                        |
| Case Outline 20-Pin LCC ..................................................................... 110 ° C/W                                                                                                                         |
| Recommended Operating Conditions. V OUT @25 ° C for device 01 ............................................................................ 5V ± 15mV                                                                            |
| V OUT @25 ° C for device 02 ............................................................................ 5V ± 25mV                                                                                                              |
| Ambient Operating Range (T A ) ........................................................... -55 ° C to + 125 ° C                                                                                                                 |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of REF01 &01A/883B for /883B and SMD 5962-89581   | 19-0490 Page 2   |   Rev. C |
|--------------------------------|------------------------------------------------------------------------------|------------------|----------|
| ----------------------------   |                                                                              | of               |        6 |

TABLE 1   ELECTRICAL TESTS

| TEST                                   | Symbol   | CONDITIONS -55 ° C ≤ T A ≤ +125 ° C V DD =+15V, V IN =+15V Unless otherwise specified   | Group A Subgroup   | Device type   | Limits Min   | Limits Max   | Units    |
|----------------------------------------|----------|-----------------------------------------------------------------------------------------|--------------------|---------------|--------------|--------------|----------|
| Quiescent Supply Current               | I IN     | No load                                                                                 | 1 2,3              | All           |              | 1.4 2.0      | mA       |
| Output Adjustment Range                | ∆ V TRIM | R P =10k Ω                                                                              | 1                  | All           | -3.0         | +3.0         | %        |
| Output Voltage                         | V O      | I L =0mA                                                                                | 1 2,3              | 01            | 9.97 9.95    | 10.03 10.04  | V        |
| Output Voltage                         | V O      | I L =0mA                                                                                | 1 2,3              | 02            | 9.95 9.905   | 10.05 10.095 | V        |
| Short Circuit Current                  | I SC     | V O =0                                                                                  | 1                  | All           | +15          | +60          | mA       |
| Sink Current                           | I S      |                                                                                         | 1                  | All           | -0.3         |              | mA       |
| Load Regulation NOTES 1, 2, 3          | LD reg   | I L =0 to 10 mA                                                                         | 1                  | 01 02         |              | 0.008 0.010  | %/m A    |
|                                        | LD reg   | I L =0 to 8mA                                                                           | 2,3                | 01 02         |              | 0.012 0.015  | %/m A    |
| Line Regulation NOTE 2                 | LN reg   | V IN =13V to                                                                            | 1                  | All           |              | 0.010        | %/V      |
|                                        | LN reg   | 33V                                                                                     | 2,3                | All           |              | 0.015        | %/V      |
| Load Current                           | I L      | NOTE 1                                                                                  | 1 2,3              | All           | 10 8         |              | mA       |
| Output Voltage Noise                   | e np-p   | 0.1Hz to 10Hz                                                                           | 4                  | All           |              | 150          | µ Vp- p  |
| Output Voltage Temperature Coefficient | TCVo     | NOTE 4                                                                                  | 4,5,6              | 01            |              | ± 8.5        | ppm/ ° C |
| Output Voltage Temperature Coefficient | TCVo     | NOTE 4                                                                                  | 4,5,6              | 02            |              | ± 25         | ppm/ ° C |

NOTE 1:  Minimum load current guaranteed by load regulation test.

NOTE 2:  Line and Load Regulation specifications include the effect of self-heating.

NOTE 3:   LD Reg= ∆ I L / ∆ VOUTx100

NOTE 4:               V

MAX-VMIN          (-55

° C to +125 ° C)1x10 6

TCV O=  ----------------- x ----------------------------------

10V                        +180

## ORDERING INFORMATION:

° C

|   Device | Package   | Maxim Device   | SMD Number     |
|----------|-----------|----------------|----------------|
|       01 | G99       | REF01AJ/883B   | 5962-8958103GC |
|       01 | J8        | REF01AZ/883B   | 5962-8958103PA |
|       01 | L20       | REF01ARC/883B  | 5962-89581032C |
|       02 | G99       | REF01J/883B    | 5962-8958104GC |
|       02 | J8        | REF01Z/883B    | 5962-8958104PA |
|       02 | L20       | REF01RC/883B   | 5962-89581042C |

| ----------------------------   | Electrical Characteristics of REF01 &01A/883B for /883B and SMD 5962-89581   | 19-0490 Page 3   |   Rev. C |
|--------------------------------|------------------------------------------------------------------------------|------------------|----------|
| ----------------------------   |                                                                              | of               |        6 |

|   PIN CONFIGURATIONS: | PIN CONFIGURATIONS:   | PIN CONFIGURATIONS:   | PIN CONFIGURATIONS:   |
|-----------------------|-----------------------|-----------------------|-----------------------|
|                       | 8 Lead CERDIP         | 8 Lead CAN            | 20 Lead LCC           |
|                     1 | NC                    | NC                    | NC                    |
|                     2 | V IN                  | V IN                  | NC                    |
|                     3 | NC                    | NC                    | NC                    |
|                     4 | GND                   | GND (case)            | NC                    |
|                     5 | TRIM                  | TRIM                  | V IN                  |
|                     6 | V OUT                 | V OUT                 | NC                    |
|                     7 | NC                    | NC                    | NC                    |
|                     8 | NC                    | NC                    | NC                    |
|                     9 |                       |                       | NC                    |
|                    10 |                       |                       | GND                   |
|                    11 |                       |                       | NC                    |
|                    12 |                       |                       | TRIM                  |
|                    13 |                       |                       | NC                    |
|                    14 |                       |                       | NC                    |
|                    15 |                       |                       | V OUT                 |
|                    16 |                       |                       | NC                    |
|                    17 |                       |                       | NC                    |
|                    18 |                       |                       | NC                    |
|                    19 |                       |                       | NC                    |
|                    20 |                       |                       | NC                    |

| ----------------------------   | Electrical Characteristics of REF01 &01A/883B   | 19-0490   |   Rev. C |
|--------------------------------|-------------------------------------------------|-----------|----------|
| ----------------------------   | for /883B and SMD 5962-89581                    | Page 4 of |        6 |

## QUALITY ASSURANCE

Sampling and inspection procedures shall be in accordance with  MIL-Prf-38535, Appendix A as specified in Mil-Std-883.

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
| Final Electrical Parameters Method 5005                   | 1*, 2, 3, 4, 5, 6                    |
| Group A Test Requirements Method 5005                     | 1, 2, 3, 4, 5, 6                     |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |

| ----------------------------   | Electrical Characteristics of REF01 &01A/883B   | 19-0490   |   Rev. C |
|--------------------------------|-------------------------------------------------|-----------|----------|
| ----------------------------   | for /883B and SMD 5962-89581                    | Page 5 of |        6 |