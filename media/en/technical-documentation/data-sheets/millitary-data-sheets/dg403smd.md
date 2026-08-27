<!-- lastmod 2022-10-10 -->
## SCOPE: DUAL, SPST,  HIGH-SPEED CHANNEL ANALOG SWITCHES

Device Type                    Generic Number                SMD Number DG403A(x)/883B                 5962-89763

01

Case Outline(s ).   The case outlines shall be designated in Mil-Std-1835 and as follows:

SMD    Maxim

E          K

| Outline Letter   | Outline Letter   | Mil-Std-1835           | Case Outline       | Package Code   |
|------------------|------------------|------------------------|--------------------|----------------|
| SMD              | Maxim            |                        |                    |                |
| E                | K                | GDIP1-T16 or CDIP2-T16 | 16 LEAD            | J16            |
| 2                | Z                | CQCC1-N20              | 20-Pin Ceramic LCC | L20            |

## Absolute Maximum Ratings -

Voltage Referenced to V

V

.............................................................................................................................. 44V

V

to V

+

+

-

to GND .........................................................................................................................  25V

V

.................................................................................................... (GND-0.3V) to V

Digital Inputs, V

, V

+0.3V)

+

D 1/ ......................................................................... .(V

-2V) to (V

+2V)

-

+

L

or 30mA whichever occurs first.

S

Current, Any terminal ..................... ................................................................................ 30mA

Peak Current, S or D (Pulsed at 1ms, 10% duty cycle max) ......................................... 100mA

Lead Temperature (soldering, 10 seconds) ........................................................................ +300

Storage Temperature ........................................................................................... -65

C to +150

°

Continuous Power Dissipation ...................................................................………....... TA=

16 lead CERDIP(derate 10.0mW/

20 lead LCC (derate 9.1 mW/

C above +70

°

C above +70

+

°

70

C

°

C

C

°

C) ..............................................……... 800mW

°

C) ...................................................……..... 727mW

°

Junction Temperature   T

J

°

...................................................................................………..  +150

Thermal Resistance, Junction to Case, JC:

Θ

Case Outline 16 lead CERDIP..............................................................……...... 50

Case Outline 20 lead LCC ....................................................................……..... 20

Thermal Resistance, Junction to Ambient, JA:

Θ

Case Outline 16 lead CERDIP.............................................................……..... 100

Case Outline 20 lead LCC ..................................................................……..... 110

## Recommended Operating Conditions

Ambient Operating Range (T

Positive Supply Voltage (V

A

+

) ........................................................………... -55

C  to

C

°

C/W

°

C/W

°

C/W

°

C/W

°

125

C

°

°

) ................................................................................……….. +15V

+

Negative Supply Voltage (V

V

V

) ................................................................................……….. -15V

-

(max) .............................................................................................................………... 0.8V

INL

INH

(min) .............................................................................................................……….... 2.4V

Logic Supply Voltage (V

) ...................................................................................………...  +5V

Charge Injection ..................................................................................................……….... 60pC

L

Crosstalk (channel-to-channel) 2/ ........................................................................……….... 90dB

1/  Signals on S X, D X or IN X exceeding V + or V -are clamped by internal diodes.  Limit forward current to maximum current ratings.

2/  Crosstalk performance is improved with case outline for 20LCC.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

| ----------------------------   | Electrical Characteristics of DG403/883B for   | 19-0337   |   Rev. B |
|--------------------------------|------------------------------------------------|-----------|----------|
| ----------------------------   | SMD 5962-89763                                 | Page 2 of |        6 |

## TABLE 1.   ELECTRICAL TESTS

| TEST                                                | Symbol             | CONDITIONS -55 ° C <=T A <= +125 ° C V + =+15V, V - =-15V, GND=0V V INH =2.4V, V INL =0.8V, V L =5V Unless otherwise specified   | Group A Subgroup   | Device type   | Limits Min   | Limits Max   | Units   |
|-----------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------|---------------|--------------|--------------|---------|
| SWITCH                                              |                    |                                                                                                                                  |                    |               |              |              |         |
| Analog-Signal Range                                 | V ANALOG           |                                                                                                                                  | 1,2,3              | All           | -15          | 15           | V       |
| Drain-Source ON Resistance                          | r DS(ON)           | V + =+13.5V, V - =-13.5V, I S =-10mA, V D = ± 10V, V INH =2.4V, V INL =0.8V                                                      | 1 2,3              | All           |              | 30 45        | Ω       |
| Drain-SourceON Resistance Matching between Channels | ∆ r DS (ON)        | V + =+16.5V, V - =-16.5V, I S =-10mA, V D =+5V, 0V, -5V                                                                          | 1 2,3              | All           |              | 3.0 5.0      | Ω       |
| Switch-OFF Leakage Current                          | I S(OFF)           | V + =+16.5V, V - =-16.5V, V D = ± 15.5V, V S = ± 15.5V                                                                           | 1 2                | All           | -0.25 -20    | 0.25 20      | nA      |
| Drain-OFF Leakage Current                           | I D(OFF)           | V + =+16.5V, V - =-16.5V, V D = ± 15.5V, V S = ± 15.5V                                                                           | 1 2                | All           | -0.25 -20    | 0.25 20      | nA      |
| Drain-ON Leakage Current                            | I D(ON) or I S(ON) | V + =+16.5V, V - =-16.5V, V D = ± 15.5V, V S = ± 15.5V                                                                           | 1 2                | All           | 0.4 40       | 0.4 40       | nA      |
| INPUT                                               |                    |                                                                                                                                  |                    |               |              |              |         |
| Input Current/Voltage High                          | I INH              | V IN = 2.4V, all others = 0.8V                                                                                                   | 1,2                | All           | -1.0         | 1.0          | µ A     |
| Input Current/Voltage Low                           | I INL              | V IN = 0.8V, all others = 2.4V                                                                                                   | 1,2                | All           | -1.0         | 1.0          | µ A     |
| SUPPLY                                              |                    |                                                                                                                                  |                    |               |              |              |         |
| Power-Supply Range                                  |                    |                                                                                                                                  |                    |               | ± 4.5        | ± 20         | V       |
| Positive Supply Current                             | I+                 | All channels on or off, V + =+16.5V, V - =-16.5V, V IN =0V or 5V                                                                 | 1 2,3              | All           | -1.0 -5.0    | 1.0 5.0      | µ A     |
| Negative Supply Current                             | I-                 | All channels on or off, V + =+16.5V, V - =-16.5V, V IN =0V or 5V                                                                 | 1 2,3              | All           | -1.0 -5.0    | 1.0 5.0      | µ A     |
| Logic Supply Current                                | I L                | All channels on or off, V + =+16.5V, V - =-16.5V, V IN =0V or 5V                                                                 | 1 2,3              | All           | -1.0 -5.0    | 1.0 5.0      | µ A     |
| Ground Current                                      | I GND              | All channels on or off, V + =+16.5V, V - =-16.5V, V IN =0V or 5V                                                                 | 1 2,3              | All           | -1.0 -5.0    | 1.0 5.0      | µ A     |
| DYNAMIC                                             |                    |                                                                                                                                  |                    |               |              |              |         |
| Turn-On Time                                        | t ON               | R L =300 Ω , CL=35pF, Figure 1                                                                                                   | 9 10,11            | All           |              | 150 275      | ns      |
| Turn-Off Time                                       | t OFF              | R L =300 Ω , CL=35pF, Figure 2                                                                                                   | 9 10 11            | All           |              | 100 250 175  | ns      |
| Break-Before- Make Delay                            | t D                | R L =300 Ω , CL=35pF, Figure 3                                                                                                   | 9                  | All           | 10           | 150          | ns      |

| ----------------------------   | Electrical Characteristics of DG403/883B for   | 19-0337   |   Rev. B |
|--------------------------------|------------------------------------------------|-----------|----------|
| ----------------------------   | SMD 5962-89763                                 | Page 3 of |        6 |

FIGURE 1:   SWITCHING TIME TEST CIRCUIT: See Commercial Data Sheet FIGURE 2:   SWITCHING TIME TEST CIRCUIT: See Commercial Data Sheet FIGURE 3:   BREAK-BEFORE-MAKE INTERVAL: See Commercial Data Sheet

| ORDERING INFORMATION:   | ORDERING INFORMATION:   | SMD Number      |
|-------------------------|-------------------------|-----------------|
| DG403AK/883B            | 16 CDIP                 | 5962-8976301MEA |
| DG403AZ/883B            | 20 LCC                  | 5962-8976301M2C |

## TRUTH TABLES:

| DG403   | DG403       | DG403        |
|---------|-------------|--------------|
| LOGIC   | SWITCHES 1, | SWITCHES 3,4 |
| 0       | OFF         | ON           |
| 1       | ON          | OFF          |

## TERMINAL CONNECTIONS :

|    | DG403   | DG403   |
|----|---------|---------|
|    | J16     | LCC20   |
|  1 | D1      | NC      |
|  2 | NC      | D1      |
|  3 | D3      | NC      |
|  4 | S3      | D3      |
|  5 | S4      | S3      |
|  6 | D4      | NC      |
|  7 | NC      | S4      |
|  8 | D2      | D4      |
|  9 | S2      | NC      |
| 10 | IN2     | D2      |
| 11 | V+      | NC      |
| 12 | V L     | S2      |
| 13 | GND     | IN2     |
| 14 | V-      | V+      |
| 15 | IN1     | V L     |
| 16 | S1      | NC      |
| 17 |         | GND     |
| 18 |         | V-      |
| 19 |         | IN1     |
| 20 |         | S1      |

| ----------------------------   | Electrical Characteristics of DG403/883B for   | 19-0337   |   Rev. B |
|--------------------------------|------------------------------------------------|-----------|----------|
| ----------------------------   | SMD 5962-89763                                 | Page 4 of |        6 |

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
- **    Subgroups 10 and 11 if not tested shall be guaranteed to the limits specified in Table 1.

| ----------------------------   | Electrical Characteristics of DG403/883B for   | 19-0337   |   Rev. B |
|--------------------------------|------------------------------------------------|-----------|----------|
|                                | SMD 5962-89763                                 | Page 5 of |        6 |