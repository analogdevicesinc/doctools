<!-- lastmod 2023-09-08 -->
## SCOPE: +5V-POWERED MULTI-CHANNEL RS-232 DRIVERS/RECEIVERS

|   Device Type | Generic Number   | Pkg Code   |
|---------------|------------------|------------|
|            01 | MAX220(x)/883B   | J16 &L20   |
|            02 | MAX222(x)/883B   | J18 &L20   |
|            03 | MAX232A(x)/883B  | J16 &L20   |
|            04 | MAX242(x)/883B   | J18 &L20   |
|            05 | MAX243(x)/883B   | J16 &L20   |

| Case Outline(s). The case outlines    | Case Outline(s). The case outlines    | shall be designated in Mil-Std-1835 Mil-Std-1835          | Package Code    |
|---------------------------------------|---------------------------------------|-----------------------------------------------------------|-----------------|
| MAXIM                                 | SMD                                   |                                                           |                 |
| JE                                    | E                                     | GDIP1-T16 OR CDIP2-T16                                    | J16             |
| JN                                    | V                                     | GDIP1-T18 OR CDIP2-T18                                    | J18             |
| LP                                    | 2                                     | CQCC1-N20                                                 | L20             |
| Absolute Maximum Ratings              | Absolute Maximum Ratings              |                                                           |                 |
| V CC                                  | V CC                                  | ……………………..……………………………………………………………………….....………-0.3Vto+6V   |                 |
| Input Voltages:                       | Input Voltages:                       |                                                           |                 |
| T IN                                  | T IN                                  | ……………………..……………………….……………………………………….….-0.3Vto(V           | CC -0.3V)       |
| R IN                                  | R IN                                  | …………………….....…………………….……………………...……………………………...……+25V     |                 |
| Output Voltages:                      | Output Voltages:                      |                                                           |                 |
| T OUT                                 | T OUT                                 | 1/…………………………………………………………………………………………………..…+15V            |                 |
| T OUT                                 | T OUT                                 | (MAX220)1/……………………………..…………...…………………………………………...+13.2V   |                 |
| R OUT                                 | R OUT                                 | ……………………………………………..……..………………..…………………...-0.3to(V         | CC +0.3V)       |
| Driver/Receiver Output Short          | Driver/Receiver Output Short          | Circuit to GND….……………..………………..…………………………..Continuous     |                 |
| Lead Temperature (soldering, 10       | Lead Temperature (soldering, 10       | seconds)………..…………………………..……………………………………+300               | o C             |
|                                       |                                       | StorageTemperature……………………………...……….………………………………………………-65 | o C to+160 o C  |
| Continuous Power                      | Continuous Power                      | Dissipation……………...……………………………………………...……….…………..T        | A =+70 o C      |
| 16 pin CERDIP(derate 10mW/ o C        | 16 pin CERDIP(derate 10mW/ o C        | above +70 o C)………………………………………...………….…………….800mW          |                 |
| 18 pin CERDIP(derate 10.5mW/ o C      | 18 pin CERDIP(derate 10.5mW/ o C      | above +70 o C)..……………………………………...……….………………842mW          |                 |
| 20 pin LCC(derate 9.1mW/ o C above    | 20 pin LCC(derate 9.1mW/ o C above    | +70 o C)…………………………………………...……….…………...…...727mW           |                 |
| Junction Temperature T J              | Junction Temperature T J              | ………………………………………………………………...…………….………...…+150              | o C             |
| Thermal Resistance, Junction to Case, | Thermal Resistance, Junction to Case, | /g81 JC                                                   |                 |
|                                       |                                       | 16pinCERDIP…………………………………………………………………………………………………50        | o C/W           |
|                                       |                                       | 18pinCERDIP…………………………………………………………………………………………………45        | o C/W           |
|                                       |                                       | 20pinLCC…..………………………...………………………………………………………...………..……20  | o C/W           |
| Thermal Resistance, Junction to       | Thermal Resistance, Junction to       | ambient, /g81 JA                                          |                 |
|                                       |                                       | 16pinCERDIP………………………………………………………………………………………………..100      | o C/W           |
|                                       |                                       | 18pinCERDIP…………………………………………………………………………………………………95        | o C/W           |
|                                       |                                       | 20pinLCC…………………...……………………………………………………………………………….110      | o C/W           |
| Recommended Operating Conditions      | Recommended Operating Conditions      |                                                           |                 |
| Ambient Operating Range (T A          | Ambient Operating Range (T A          | )……..…………….………………………...………….………………-55                     | o C to +125 o C |
| Supply Voltage Range (V CC            | Supply Voltage Range (V CC            | )………………………………………………………...………………...…+4.5Vto+5.5V           |                 |

\_\_\_\_\_

NOTE 1:  Input voltage measured with TOUT in high-impedance state, SHDN or VCC=0V

NOTE 2:  For the MAX220, V+ and V- can have a maximum magnitude of 7V, but their absolute difference cannot exceed 13V.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device.  These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied.  Exposure to absolute maximum rating conditions for extended periods may affect device reliability

## TABLE 1. ELECTRICAL TESTS:

| TEST                                 | Symbol              | CONDITIONS -55 o C <T A <+125 o C 3/ Unless otherwise specified                                 | Group A Subgroup    | Device Type         | Limits Min          | Limits Max          | Units               |
|--------------------------------------|---------------------|-------------------------------------------------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|---------------------|
| RS-232 TRANSMITTERS                  | RS-232 TRANSMITTERS | RS-232 TRANSMITTERS                                                                             | RS-232 TRANSMITTERS | RS-232 TRANSMITTERS | RS-232 TRANSMITTERS | RS-232 TRANSMITTERS | RS-232 TRANSMITTERS |
| Output voltage swing                 | V OLTOUT            | All transmitter outputs loaded with 3k /g87 to GND                                              | 1,2,3               | All                 | +5.0                |                     | V                   |
| Input Logic Threshold low            | V ILTOUT            |                                                                                                 | 1,2,3               | All                 |                     | 0.8                 | V                   |
| Input Logic                          | V IHTIN             | MAX220: V CC = 5.0V                                                                             | 1,2,3               | 2-5                 | 2.0                 |                     | V                   |
| Threshold high                       | V IHTIN             | MAX220: V CC = 5.0V                                                                             | 1,2,3               | 1                   | 2.4                 |                     | V                   |
| Logic Pull-up/ Input Current         | I ILTIN             | Normal Mode                                                                                     | 1,2,3               | 2-5                 |                     | 40                  | /g109 A             |
| Logic Pull-up/ Input Current         | I ILTIN             | _____ SHDN= 0V, Shutdown Mode                                                                   | 1,2,3               | 01,02,04            |                     | +1                  | /g109 A             |
| Output Leakage Current               | I ILTOUT            | V CC =5.5V _____ V OUT =+15V, SHDN=0V                                                           | 1,2,3               | 02,04               |                     | +10                 | /g109 A             |
| Output Leakage Current               | I ILTOUT            | _____ V CC = SHDN=0V, V OUT = +15V                                                              | 1,2,3               | 02,04               |                     | +10                 | /g109 A             |
| Output Leakage Current               | I ILTOUT            | V CC =0V V OUT =+12V                                                                            | 1,2,3               | 01                  |                     | +25                 | /g109 A             |
| Output Leakage Current               | I ILTOUT            | V CC =0V V OUT =+15V                                                                            | 1,2,3               | 03,05               |                     | +10                 | /g109 A             |
| Output Short-Circuit Current         | I OST               | V OUT =0V                                                                                       | 1,2,3               | 1                   |                     | +60                 | mA                  |
|                                      | I OST               | V OUT =0V                                                                                       | 1,2,3               | 2-5                 | +7                  |                     | mA                  |
| Transition Slew Rate                 | t SLEW              | C L =50pF to 2500pF, R L =3k /g87 to 7k /g87 , V CC =5V, measured from +3V to -3V or -3V to +3V | 9                   | 01                  | 1.5                 | 30                  | V/ /g109 s          |
| Transition Slew Rate                 | t SLEW              | C L =50pF to 2500pF, R L =3k /g87 to 7k /g87 , V CC =5V, measured from +3V to -3V or -3V to +3V | 9                   | 02,03, 04,05        | 6.0                 | 30                  | V/ /g109 s          |
| Data Rate                            | f MAX               | Normal Mode                                                                                     | 1,2,3               | 01 02,03,04,        |                     | 20 116              | kbits/sec           |
| Transmitter Output Resistance        | RT OUT              | V CC =V+=V-=0V, V OUT =+2V                                                                      | 1,2,3               | 05 All              | 300                 |                     | /g87                |
| RS-232 RECEIVERS                     | RS-232 RECEIVERS    | RS-232 RECEIVERS                                                                                | RS-232 RECEIVERS    | RS-232 RECEIVERS    | RS-232 RECEIVERS    | RS-232 RECEIVERS    | RS-232 RECEIVERS    |
| RS-232 Input Voltage Operating Range |                     |                                                                                                 | 1,2,3               | 01                  |                     | +25                 | V                   |
|                                      |                     |                                                                                                 | 1,2,3               | 02,03,04, 05        |                     | +30                 | V                   |
| RS-232 Input Threshold Low           | V ILRINP            | V CC =5V, Except MAX243 R2 IN                                                                   | 1,2,3               | 01,02, 03,04        | 0.8                 |                     | V                   |
| RS-232 Input Threshold Low           | V ILRINN            | V CC =5V, MAX243 R2 IN, Note 4                                                                  | 1,2,3               | 05                  | -3.0                |                     | V                   |
| RS-232 Input Threshold High          | V IHRINP            | V CC =5V, Except MAX243 R2 IN                                                                   | 1,2,3               | 01,02, 03,04        |                     | 2.4                 | V                   |
| RS-232 Input Threshold High          | V IHRINN            | V CC =5V, MAX243 R2 IN, Note 4                                                                  | 1,2,3               | 05                  |                     | -0.1                | V                   |
| RS-232 Input Hysteresis              | HYSR IN             | V CC =5V, Normal Mode. All receiver inputs except MAX243 R2                                     | 1,2,3               | 01                  |                     | 1.0                 | V                   |
| RS-232 Input Hysteresis              | HYSR IN             | IN                                                                                              | 1,2,3               | 02,03,04            | 0.2                 | 1.0                 | V                   |
| RS-232 Input Hysteresis              | HYSR IN             | V CC =5V, MAX243 R2 IN, Note 5                                                                  | 1,2,3               | 05                  | 1.0                 |                     | V                   |

| TEST                                        | Symbol             | CONDITIONS -55 o C <T A <+125 o C 2/ Unless otherwise specified   | Group A Subgroup   | Device Type        | Limits Min         | Limits Max         | Units              |
|---------------------------------------------|--------------------|-------------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| RS-232 Input Resistance                     |                    |                                                                   | 1                  | 01                 | 3.0                | 7.0                | K /g87             |
|                                             | R IN               |                                                                   | 1,2,3              | 02,03,04, 05       | 3.0                | 7.0                | K /g87             |
| TTL/CMOS Output Voltage Low                 | V OLROUT           | I OUT =1.6mA                                                      | 1,2,3              | 01                 |                    | 0.4                | V                  |
| TTL/CMOS Output Voltage Low                 | V OLROUT           | I OUT =3.2mA                                                      | 1,2,3              | 02,03,04, 05       |                    | 0.4                | V                  |
| TTL/CMOS Output Voltage High                | V OHROUT           | I OUT =-1.0mA                                                     | 1,2,3              | All                | 3.5                |                    | V                  |
| TTL/CMOS Output Short                       | I                  | Sourcing V OUT =GND                                               | 1,2,3              | All                | -2.0               |                    | mA                 |
| Circuit Current                             | OSROUT             | SinkingV OUT =V CC                                                | 1,2,3              | All                | 10                 |                    |                    |
| TTL/CMOS Output Leakage Current             | I ILROUT           | 0V<V OUT <V CC,                                                   | 1,2,3              | 02,04              |                    | +10                | /g109 A            |
| TTL/CMOS Output Leakage Current             | I ILROUT           | _____ SHDN=0V 0V<V OUT <V CC , ___                                | 1,2,3              | 04                 |                    | +10                | /g109 A            |
| __ EN Input Threshold Low                   | __ V IL EN         |                                                                   | 1,2,3              | 04                 |                    | 0.8                | V                  |
| __ EN Input Threshold High                  | __ V IH EN         |                                                                   | 1,2,3              | 04                 | 2.0                |                    | V                  |
| _____ SHDN Input Leakage Current            | _____ I IL SHDN    |                                                                   | 1,2,3              | 02,04              |                    | +1                 | /g109 A            |
| _____ SHDN Threshold Low                    | _____ V IL SHDN    |                                                                   | 1,2,3              | 02,04              |                    | 0.8                | V                  |
| _____ SHDN Threshold High                   | _____ V IH SHDN    |                                                                   | 1,2,3              | 02,04              | 2.0                |                    | V                  |
| POWER SUPPLY                                | POWER SUPPLY       | POWER SUPPLY                                                      | POWER SUPPLY       | POWER SUPPLY       | POWER SUPPLY       | POWER SUPPLY       | POWER SUPPLY       |
| Operating Supply Voltage                    |                    |                                                                   | 1,2,3              | All                | 4.5                | 5.5                | V                  |
| V CC Supply Current                         |                    |                                                                   |                    | 01                 |                    | 2.0                | mA                 |
| _____ SHDN= V CC                            | I CC               | No load, Normal Mode                                              | 1,2,3              | 02,03, 04,05       |                    | 10                 | mA                 |
| Shutdown Supply Current                     | I CC _____ SHDN    | Shutdown mode                                                     | 1                  | 02,04              |                    | 10                 | /g109 A            |
|                                             | I CC _____ SHDN    | _____ SHDN= 0V                                                    | 2,3                | 02,04              |                    | 100                | /g109 A            |
| AC CHARACTERISTICS                          | AC CHARACTERISTICS | AC CHARACTERISTICS                                                | AC CHARACTERISTICS | AC CHARACTERISTICS | AC CHARACTERISTICS | AC CHARACTERISTICS | AC CHARACTERISTICS |
| Receiver Output Enable Time                 | t ER               | See Figure 3 in Commercial datasheet                              | 9,10,11            | 04                 |                    | 500                | ns                 |
| Receiver Output Disable Time                | t DR               | See Figure 3 in Commercial datasheet                              | 9,10,11            | 04                 |                    | 500                | ns                 |
| Receiver Propagation Delay RS-232 to TTL    | t PHLR             | Normal mode. See Figure 3 in                                      | 9,10,11            | 01                 |                    | 3.0                | /g109 s            |
| Receiver Propagation Delay RS-232 to TTL    | t PLHR             | Commercial datasheet                                              | 9,10,11            | 02,03, 04,05       |                    | 1.0                | /g109 s            |
| Receiver Propagation Delay RS-232 to TTL    | t PHLS t PLHS      | See Figure 3. Shutdown _____                                      | 9,10,11            | 04                 |                    | 10                 | /g109 s            |
| Transmitter Propagation Delay TTL to RS-232 | t                  | Normal mode. See Figure 1 in                                      |                    | 01                 |                    | 10                 |                    |
| Transmitter Propagation Delay TTL to RS-232 | PHLT t PLHT        | Commercial datasheet                                              | 9,10,11            | 02,03, 04,05       |                    | 3.5                | /g109 s            |

NOTE 3:  For device types 02,03,04,05, all external capacitors=0.1 /g109 F.  For device type 01, external capacitor C1=0.047 /g109 F; C2-C4=0.33 /g109 F.

NOTE 4:  For device type 05, R2OUT is low when the receiver R2IN is &gt;0V or is floating.

NOTE 5:  For design purposes only, not tested.

## TERMINAL CONNECTIONS:

|    | 01,03,05   | 01,03,05   | 02         | 02         | 04         | 04         |
|----|------------|------------|------------|------------|------------|------------|
|    | J16        | L20        | J18        | L20        | J18        | L20        |
| 1  | C1+        | NC         | NC         | NC         | __ EN      | __ EN      |
| 2  | V+         | C1+        | C1+        | C1+        | C1+        | C1+        |
| 3  | C1-        | V+         | V+         | V+         | V+         | V+         |
| 4  | C2+        | C1-        | C1-        | C1-        | C1-        | C1-        |
| 5  | C2-        | C2+        | C2+        | C2+        | C2+        | C2+        |
| 6  | V-         | NC         | C2-        | NC         | C2-        | NC         |
| 7  | T2 OUT     | C2-        | V-         | C2-        | V-         | C2-        |
| 8  | R2 IN      | V-         | T2 OUT     | V-         | T2 OUT     | V-         |
| 9  | R2 OUT     | T2 OUT     | R2 IN      | T2 OUT     | R2 IN      | T2 OUT     |
| 10 | T2 IN      | R2 IN      | R2 OUT     | R2 IN      | R2 OUT     | R2 IN      |
| 11 | T1 IN      | NC         | T2 IN      | NC         | T2 IN      | NC         |
| 12 | R1 OUT     | R2 OUT     | T1 IN      | R2 OUT     | T1 IN      | R2 OUT     |
| 13 | R1 IN      | T2 IN      | R1 OUT     | T2 IN      | R1 OUT     | T2 IN      |
| 14 | T1 OUT     | T1 IN      | R1 IN      | T1 IN      | R1 IN      | T1 IN      |
| 15 | GND        | R1 OUT     | T1 OUT     | R1 OUT     | T1 OUT     | R1 OUT     |
| 16 | V CC       | NC         | GND        | R1 IN      | GND        | R1 IN      |
| 17 |            | R1 IN      | V CC       | T1 OUT     | V CC       | T1 OUT     |
| 18 |            | T1 OUT     | _____ SHDN | GND        | _____ SHDN | GND        |
| 19 |            | GND        |            | V CC       |            | V CC       |
| 20 |            | V CC       |            | _____ SHDN |            | _____ SHDN |

|    | Package       | ORDERING INFORMATION   | SMDNumber       |
|----|---------------|------------------------|-----------------|
| 01 | 16 pin CERDIP | MAX220MJE/883B         | 5962-9456501MEA |
| 01 | 20 pin LCC    | MAX220MLP/883B         | 5962-9456501M2C |
| 02 | 18 pin CERDIP | MAX222MJN/883B         | 5962-9456502MVA |
| 02 | 20 pin LCC    | MAX222MLP/883B         | 5962-9456502M2C |
| 03 | 16 pin CERDIP | MAX232AMJE/883B        | 5962-9456503MEA |
| 03 | 20 pin LCC    | MAX232AMLP/883B        | 5962-9456503M2C |
| 04 | 18 pin CERDIP | MAX242MJN/883B         | 5962-9456504MVA |
| 04 | 20 pin LCC    | MAX242MLP/883B         | 5962-9456504M2C |
| 05 | 16 pin CERDIP | MAX243MJE/883B         | 5962-9456505MEA |
| 05 | 20 pin LCC    | MAX243MLP/883B         | 5962-9456505M2C |

## TRUTH TABLE:  FOR DEVICE TYPE 05, MAX243

| RECEIVER INPUT   | R1 OUTPUT   | R2 OUTPUT   |
|------------------|-------------|-------------|
| < -3V            | HIGH        | HIGH        |
| OPEN             | HIGH        | LOW         |
| > +3V            | LOW         | LOW         |

---------------------- Electrical Characteristics of MAX220/222/232A/242/243            19-0217

/883B for /883B and SMD 5962-94565                                         page 4 of 5

## SELECTION TABLE:

|   PART NUMBER | PART NUMBER   |   MAX kBITS/SEC | EXTERNAL CAPACITORS   |   MAX SUPPLY | SHUTDOWN AND TRI-STATE   | FEATURES          |
|---------------|---------------|-----------------|-----------------------|--------------|--------------------------|-------------------|
|            01 | MAX220        |              20 | 0.047/0.33            |            2 | NO                       | Lowest power      |
|            02 | MAX222        |             116 | 0.1                   |           10 | YES/NO                   | _____ SHDN        |
|            03 | MAX232A       |             116 | 0.1                   |           10 | NO                       | High Speed        |
|            04 | MAX242        |             116 | 0.1                   |           10 | YES/YES                  | __ _____ EN, SHDN |
|            05 | MAX243        |             116 | 0.1                   |           10 | NO                       | Open-Line Detect  |

## QUALITY ASSURANCE

Sampling and inspection procedures shall be in accordance with MIL-Prf-38535, Appendix A as specified in Mil-Std883.

Screening shall be in accordance with Method 5004 of Mil-Std-883.  Burn-in test Method 1015:

1. Test Condition, A, B, C, or D.
2. TA= +125  o C minimum.
3. Interim and final electrical test requirements shall be specified in Table 2.

Quality conformance inspection shall be in accordance with Method 5005 of Mil-Std-883, including Groups A, B, C, and D inspection.

Group A inspection:

1. Tests as specified in Table 2.
2. Selected subgroups in Table 1, Method 5005 of Mil-Std-883 shall be omitted.

## Group C and D inspections:

- a.  End -point electrical parameters shall be specified in Table 1.
- b.  Steady-state life test, Method 1005 of Mil-Std-883:
1.  Test condition A, B, C, D.
2.  TA= +125 o C minimum.
3.  Test duration, 1000 hours, except as permitted by Method 1005 of Mil-Std-883.

## TABLE 2.

## ELECTRICAL TEST REQUIREMENTS

| Mil-Std-883 Test Requirements                             | Subgroups per Method 5005, Table 1   |
|-----------------------------------------------------------|--------------------------------------|
| Interim Electrical Parameters Method 5004                 | 1                                    |
| Final Electrical Parameters Method 5005                   | 1*, 2, 3, 9, 10, 11                  |
| Group ATest Requirements Method 5005                      | 1, 2, 3, 9, 10, 11                   |
| Group C and D End-Point Electrical Parameters Method 5005 | 1                                    |