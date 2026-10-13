<!-- lastmod 2022-10-10 -->
## SCOPE: MONOLITHIC  CMOS, ANALOG MULTIPLEXER

## Device Type                    Generic Number SMD Number

01

## Case Outline(s

DG508AA(x)/883B         7705201

).   The case outlines shall be designated in Mil-Std-1835 and as follows:

## Outline Letter           Mil-Std-1835                         Case Outline           Package Code MAXIM     SMD

K           E GDIP1-T16 or CDIP2-T16     16 LEAD CERDIP              J16 L           X            CDFP4-16                               16 LEAD FLATPACK       F16 P           E            GDIP1-T16 or CDIP2-T16      16 LEAD Sidebraze            P16 Z           2             CQCC1-N20                           20-Pin Ceramic LCC           L20

## Absolute Maximum Ratings

Voltage Referenced to V -V + to V -.............................................................................................................................. 44V V + to GND ........................................................................................................................ +22V V -to GND .......................................................................................................................... -22V Digital  Inputs, VS or VD 1/.......................................................................... (V -) -3.0V to (V + ) Analog Inputs Voltage ........................................................................... (V -) -2.0V to (V + )+2V Analog  Input, Overvoltage Range ............................................................... (V -) -3.0V to (V + )

Lead Temperature (soldering, 10 seconds) ............................................................................ +300 ° C Storage Temperature .............................................................................................. -65 ° C to +150 ° C Continuous Power Dissipation ............................................................................. TA= + 70 ° C 16 lead FLATPACK (derate 6.1mW/ ° C above +70 ° C) ............................................. 485mW 16 lead CERDIP(derate 10.0mW/ ° C above +70 ° C) .................................................. 800mW 16 lead Side Braze(derate 10.5mW/ ° C above +70 ° C) ............................................... 842mW 20 lead LCC (derate 9.1mW/ ° C above +70 ° C) ......................................................... 727mW Junction Temperature   T J .....................................................................................….. +150 ° C Thermal Resistance, Junction to Case, Θ JC: Case Outline 16 lead FLATPACK ............................................................ 65 ° C/W Case Outline 16 lead CERDIP................................................................... 50 ° C/W Case Outline 16 lead Side Braze................................................................ 45 ° C/W Case Outline 20 lead LCC ........................................................................ 20 ° C/W Thermal Resistance, Junction to Ambient, Θ JA: Case Outline 16 lead FLATPACK ........................................................... 165 ° C/W Case Outline 16 lead CERDIP.................................................................. 100 ° C/W Case Outline 16 lead Side Braze................................................................. 95 ° C/W Case Outline 20 lead LCC ....................................................................... 110 ° C/W

## Recommended Operating Conditions.

Ambient Operating Range (T

A

) ............................................................... -55

°

C  to

+

125

°

C

NOTE 1:  Signals on S, D, IN exceeding V+ or V- will be clamped by internal diodes.  Limit forward diode current to maximum current ratings.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of DG508A/883B   | 19-0339   |   Rev. B |
|--------------------------------|---------------------------------------------|-----------|----------|
|                                | for SMD 7705201                             | Page 2 of |        6 |

## TABLE 1.   ELECTRICAL TESTS

| TEST                                              | Symbol             | CONDITIONS -55 ° C <=T A <= +125 ° C V+=+15V, V-=-15V, GND=0V V AH =2.4V, V AL =0.8V, V EN =4.5V Unless otherwise specified   | Group A Subgroup   | Device type   |   Limits Min | Limits Max   | Units   |
|---------------------------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------|--------------------|---------------|--------------|--------------|---------|
| SWITCH                                            |                    |                                                                                                                               |                    |               |              |              |         |
| Input Leakage Current 2/                          | I IH               | Measure inputs sequentially, connect all unused inputs to GND                                                                 | 1,2,3              | All           |              | 0.8          | µ A     |
| Input Leakage Current 2/                          | I IL               | Measure inputs sequentially, connect all unused inputs to 5.0V                                                                | 1,2,3              | All           |              | -0.8         | µ A     |
| Switch ON Resistance                              | r DS(ON1)          | I D = ± 1mA, V S = ± 10V                                                                                                      | 1,3 2              | All           |              | 400 500      | Ω       |
| Switch ON Resistance                              | r DS(ON2)          | V+=+10V, V-= ± 10V, I D = ± 1mA, V S = ± 7.5V                                                                                 | 1,2,3              | All           |              | 1000         | Ω       |
| Source-OFF Leakage Current                        | ± I S(OFF)         | V S =+/-10V, V EN =0.8V, All unused inputs= ± 10V                                                                             | 1,2,3              | All           |          -50 | 50           | nA      |
| Drain-OFF Leakage Current                         | ± I D(OFF)         | V D = ± 10V, V EN =0.8V, All unused inputs= ± 10V                                                                             | 1,2,3              | All           |         -250 | 250          | nA      |
| Drain-ON Leakage Current                          | ± I D(ON)          | V S =+/-10V, V D =-/+10V, All unused inputs= ± 10V                                                                            | 1,2,3              | All           |         -250 | 250          | nA      |
| INPUT                                             |                    |                                                                                                                               |                    |               |              |              |         |
| Standby Positive Supply Current                   | +I SBY             | V A =0V, V EN =0V                                                                                                             | 1,2,3              | All           |              | 3.5          | mA      |
| Standby Negative Supply Current                   | -I SBY             | V A =0V, V EN =0V                                                                                                             | 1,2,3              | All           |         -3.5 |              | mA      |
| SUPPLY                                            |                    |                                                                                                                               |                    |               |              |              |         |
| Positive Supply Current                           | I+                 | V EN =5V, V A =0V                                                                                                             | 1,2,3              | All           |              | 12           | mA      |
| Negative Supply Current                           | I+                 | V EN =5V, V A =0V                                                                                                             | 1,2,3              | All           |          -12 |              | mA      |
| DYNAMIC                                           |                    |                                                                                                                               |                    |               |              |              |         |
| Capacitance: Address                              | C A                | V + =V - =0V, f=1MHz, NOTE 3                                                                                                  | 4                  | All           |              | 10           | pF      |
| Capacitance: Output Switch                        | C OS               | V + =V - =0V, f=1MHz, NOTE 3                                                                                                  | 4                  | All           |              | 45           | pF      |
| Capacitance: Input Switch                         | C IS               | V + =V - =0V, f=1MHz, NOTE 3                                                                                                  | 4                  | All           |              | 10           | pF      |
| Charge Transfer Error                             | V CTE              | V S =GND, V GEN =0V to 5V, f=500kHz, CL=100pF NOTE 3                                                                          | 4                  | All           |              | 10           | mV      |
| Single Channel Isolation                          | V ISO              | V GEN =1Vp-p, f=200kHz NOTE 3                                                                                                 | 4                  | All           |           50 |              | dB      |
| Crosstalk Between Channels                        | V CT               | V GEN =1Vp-p, f=200kHz NOTE 3                                                                                                 | 4                  | All           |           50 |              | dB      |
| Break Before Make Time Delay                      | t D                | Figure 3                                                                                                                      | 9                  | All           |          5.0 |              | ns      |
| Propagation Delay: Address Inputs to I/O Channels | t ON(A) t OFF(A)   | Figure 1,2, R L =1k Ω , CL=100pF                                                                                              | 9,11 10            | All           |              | 1000 1500    | ns      |
| Enable to I/O                                     | t ON(EN) t OFF(EN) | Figure1,2, R L =1k Ω , CL=100pF                                                                                               | 9,11 10            | All           |              | 1000 1500    | ns      |

| ----------------------------   | Electrical Characteristics of DG508A/883B   | 19-0339   |   Rev. B |
|--------------------------------|---------------------------------------------|-----------|----------|
|                                | for SMD 7705201                             | Page 3 of |        6 |

NOTE 2:   Input Current of one input mode.

NOTE 3:  Guaranteed, if not tested, to the limits specified.

FIGURE 1:   SWITCHING TIME TEST CIRCUIT: See Commercial Data Sheet

FIGURE 2:   ENABLE TIME TEST CIRCUIT:

See Commercial Data Sheet

FIGURE 3:   BREAK-BEFORE-MAKE TEST CIRCUIT

: See Commercial Data Sheet

| ORDERING INFORMATION:   | SMD NUMBER   | PACKAGE CODE   |
|-------------------------|--------------|----------------|
| DG508AAK/883B           | 7705201EA    | 16 CERDIP      |
| DG508AAL/883B           | 7705201XC    | 16 FLATPACK    |
| DG508AAP/883B           | 7705201EC    | 16 SIDE BRAZE  |
| DG508AAZ/883B           | 77052012C    | 20 LCC         |

## TRUTH TABLE                                                             TERMINAL CONNECTION

| A2   | A1   | A0   | EN   | DG508A ON SWITCH   |   TERMINAL NUMBER | DG508A         | DG508A   |
|------|------|------|------|--------------------|-------------------|----------------|----------|
| X    | X    | X    | L    | None               |                   | J16, P16 & F16 | L20      |
| L    | L    | L    | H    | 1                  |                 1 | A0             | NC       |
| L    | L    | H    | H    | 2                  |                 2 | EN             | A0       |
| L    | H    | L    | H    | 3                  |                 3 | V-             | EN       |
| L    | H    | H    | H    | 4                  |                 4 | IN1            | V-       |
| H    | L    | L    | H    | 5                  |                 5 | IN2            | IN1      |
| H    | L    | H    | H    | 6                  |                 6 | IN3            | NC       |
| H    | H    | L    | H    | 7                  |                 7 | IN4            | IN2      |
| H    | H    | H    | H    | 8                  |                 8 | OUT            | IN3      |
|      |      |      |      |                    |                 9 | IN8            | IN4      |
|      |      |      |      |                    |                10 | IN7            | OUT      |
|      |      |      |      |                    |                11 | IN6            | NC       |
|      |      |      |      |                    |                12 | IN5            | IN8      |
|      |      |      |      |                    |                13 | V+             | IN7      |
|      |      |      |      |                    |                14 | GND            | IN6      |
|      |      |      |      |                    |                15 | A2             | IN5      |
|      |      |      |      |                    |                16 | A1             | NC       |
|      |      |      |      |                    |                17 |                | V+       |
|      |      |      |      |                    |                18 |                | GND      |
|      |      |      |      |                    |                19 |                | A2       |
|      |      |      |      |                    |                20 |                | A1       |

| ----------------------------   | Electrical Characteristics of DG508A/883B   | 19-0339   |   Rev. B |
|--------------------------------|---------------------------------------------|-----------|----------|
|                                | for SMD 7705201                             | Page 4 of |        6 |

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
| Final Electrical Parameters Method 5005                   | 1*, 2, 3, 4**                        |
| Group A Test Requirements Method 5005                     | 1, 2, 3, 4**, 9, 10, 11***           |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |

- **     Subgroup 4 (capacitance measurements) shall be measured only for the initial test and after process or design changes which may affect capacitance.
- ***    Subgroups 10 and 11, if not tested, shall be guaranteed to the specified limits in Table 1.

| ----------------------------   | Electrical Characteristics of DG508A/883B   | 19-0339   |   Rev. B |
|--------------------------------|---------------------------------------------|-----------|----------|
| ----------------------------   | for SMD 7705201                             | Page 5 of |        6 |