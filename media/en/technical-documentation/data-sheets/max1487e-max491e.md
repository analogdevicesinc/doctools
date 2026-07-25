<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## General Description

The  MAX481E,  MAX483E,  MAX485E,  MAX487EMAX491E, and MAX1487E are low-power transceivers for RS-485 and RS-422 communications in harsh environments. Each driver output and receiver input is protected against ±15kV electro-static discharge (ESD) shocks, without latchup. These parts contain one driver and one receiver. The MAX483E, MAX487E, MAX488E, and MAX489E feature reduced slew-rate drivers that minimize EMI and reduce reflections caused by improperly terminated cables, thus allowing error-free data transmission up to 250kbps. The driver slew rates of the MAX481E, MAX485E, MAX490E, MAX491E, and MAX1487E are not limited, allowing them to transmit up to 2.5Mbps.

These transceivers draw as little as 120µA supply current when unloaded or when fully loaded with disabled drivers (see Selector Guide ). Additionally, the MAX481E, MAX483E, and MAX487E have a low-current shutdown mode in which they consume only 0.5µA. All parts operate from a single +5V supply.

Drivers are short-circuit current limited, and are protected against excessive power dissipation by thermal shutdown circuitry that places their outputs into a high-impedance state. The receiver input has a fail-safe feature that guarantees a logic-high output if the input is open circuit.

Functional Diagrams The MAX487E and MAX1487E feature quarter-unit-load receiver input impedance, allowing up to 128 transceivers on the bus. The MAX488E-MAX491E are designed for full-duplex communications, while the MAX481E, MAX483E, MAX485E, MAX487E, and MAX1487E are designed for half-duplex applications. For applications that are not ESD sensitive see the pinand function-compatible MAX481, MAX483, MAX485, MAX487-MAX491, and MAX1487.

## Applications

Low-Power RS-485 Transceivers Low-Power RS-422 Transceivers Level Translators Transceivers for EMI-Sensitive Applications Industrial-Control Local Area Networks

Pin Configurations appear at end of data sheet.

Functional Diagrams continued at end of data sheet.

UCSP is a trademark of Maxim Integrated Products, Inc.

## Next-Generation Device Features

- ♦ For Fault-Tolerant Applications: MAX3430: ±80V Fault-Protected, Fail-Safe, 1/4Unit Load, +3.3V, RS-485 Transceiver MAX3080-MAX3089: Fail-Safe, High-Speed (10Mbps), Slew-Rate-Limited, RS-485/RS-422 Transceivers
- ♦ For Space-Constrained Applications: MAX3460-MAX3464: +5V, Fail-Safe, 20Mbps, Profibus, RS-485/RS-422 Transceivers MAX3362: +3.3V, High-Speed, RS-485/RS-422 Transceiver in a SOT23 Package MAX3280E-MAX3284E: ±15kV ESD-Protected, 52Mbps, +3V to +5.5V, SOT23, RS-485/RS-422 True Fail-Safe Receivers MAX3030E-MAX3033E: ±15kV ESD-Protected, +3.3V, Quad RS-422 Transmitters
- ♦ For Multiple Transceiver Applications: MAX3293/MAX3294/MAX3295: 20Mbps, +3.3V, SOT23, RS-485/RS-422 Transmitters
- ♦ For Fail-Safe Applications: MAX3440E-MAX3444E: ±15kV ESD-Protected, ±60V Fault-Protected, 10Mbps, Fail-Safe RS-485/J1708 Transceivers
- ♦ For Low-Voltage Applications: MAX3483E/MAX3485E/MAX3486E/MAX3488E/ MAX3490E/MAX3491E: +3.3V Powered, ±15kV ESD-Protected, 12Mbps, Slew-Rate-Limited, True RS-485/RS-422 Transceivers

## Ordering Information

| PART        | TEMP RANGE     | PIN-PACKAGE   |
|-------------|----------------|---------------|
| MAX481E CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX481ECSA  | 0°C to +70°C   | 8 SO          |
| MAX481EEPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX481EESA  | -40°C to +85°C | 8 SO          |
| MAX483E CPA | 0°C to +70°C   | 8 Plastic DIP |
| MAX483ECSA  | 0°C to +70°C   | 8 SO          |
| MAX483EEPA  | -40°C to +85°C | 8 Plastic DIP |
| MAX483EESA  | -40°C to +85°C | 8 SO          |

Ordering Information continued at end of data sheet.

Selector Guide appears at end of data sheet .

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## ABSOLUTE MAXIMUM RATINGS

| Supply Voltage (V CC ) .............................................................12V   | 14-Pin Plastic DIP (derate 10.00mW/°C above +70°C)..800mW               |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Control Input Voltage ( - R - E - , DE)...................-0.5V to (V CC + 0.5V)          | 8-Pin SO (derate 5.88mW/°C above +70°C).................471mW           |
| Driver Input Voltage (DI).............................-0.5V to (V CC + 0.5V)              | 14-Pin SO (derate 8.33mW/°C above +70°C)...............667mW            |
| Driver Output Voltage (Y, Z; A, B) ..........................-8V to +12.5V                | Operating Temperature Ranges                                            |
| Receiver Input Voltage (A, B).................................-8V to +12.5V               | MAX4_ _C_ _/MAX1487EC_ A.............................0°C to +70°C       |
| Receiver Output Voltage (RO)....................-0.5V to (V CC + 0.5V)                    | MAX4_ _E_ _/MAX1487EE_ A...........................-40°C to +85°C       |
| Continuous Power Dissipation (T A = +70°C)                                                | Storage Temperature Range.............................-65°C to +160°C   |
| 8-Pin Plastic DIP (derate 9.09mW/°C above +70°C) ....727mW                                | Lead Temperature (soldering, 10sec) .............................+300°C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC ELECTRICAL CHARACTERISTICS

(VCC = 5V ±5%, TA = TMIN to TMAX, unless otherwise noted.) (Notes 1, 2)

| PARAMETER                                                                                 | SYMBOL   | CONDITIONS                                            | CONDITIONS                                            |   MIN | TYP   | MAX   | UNITS   |
|-------------------------------------------------------------------------------------------|----------|-------------------------------------------------------|-------------------------------------------------------|-------|-------|-------|---------|
| Differential Driver Output (no load)                                                      | V OD1    |                                                       |                                                       |       |       | 5     | V       |
| Differential Driver Output (with load)                                                    | V OD2    | R = 50 Ω (RS-422)                                     | R = 50 Ω (RS-422)                                     |     2 |       |       | V       |
| Differential Driver Output (with load)                                                    | V OD2    | R = 27 Ω (RS-485), Figure 8                           | R = 27 Ω (RS-485), Figure 8                           |   1.5 |       | 5     | V       |
| Change in Magnitude of Driver Differential Output Voltage for Complementary Output States | ∆ V OD   | R = 27 Ω or 50 Ω , Figure 8                           | R = 27 Ω or 50 Ω , Figure 8                           |       |       | 0.2   | V       |
| Driver Common-Mode Output Voltage                                                         | V OC     | R = 27 Ω or 50 Ω , Figure 8                           | R = 27 Ω or 50 Ω , Figure 8                           |       |       | 3     | V       |
| Change in Magnitude of Driver Common-Mode Output Voltage for Complementary Output States  | ∆ V OD   | R = 27 Ω or 50 Ω , Figure 8                           | R = 27 Ω or 50 Ω , Figure 8                           |       |       | 0.2   | V       |
| Input High Voltage                                                                        | V IH     | DE, DI, - R - E -                                     | DE, DI, - R - E -                                     |   2.0 |       |       | V       |
| Input Low Voltage                                                                         | V IL     | DE, DI, - R - E -                                     | DE, DI, - R - E -                                     |       |       | 0.8   | V       |
| Input Current                                                                             | I IN1    | DE, DI, - R - E -                                     | DE, DI, - R - E -                                     |       |       | ±2    | µA      |
| Input Current (A, B)                                                                      | I IN2    | DE = 0V; V CC = 0V or 5.25V, all devices except       | V IN = 12V                                            |       |       | 1.0   | mA      |
| Input Current (A, B)                                                                      | I IN2    | DE = 0V; V CC = 0V or 5.25V, all devices except       | V IN = -7V                                            |       |       | -0.8  | mA      |
| Input Current (A, B)                                                                      | I IN2    | MAX487E/MAX1487E, DE = 0V, V CC = 0V or 5.25V         | V IN = 12V                                            |       |       | 0.25  | mA      |
| Input Current (A, B)                                                                      | I IN2    | MAX487E/MAX1487E, DE = 0V, V CC = 0V or 5.25V         | V IN = -7V                                            |       |       | -0.2  |         |
| Receiver Differential Threshold Voltage                                                   | V TH     | -7V ≤ V CM ≤ 12V                                      | -7V ≤ V CM ≤ 12V                                      |  -0.2 |       | 0.2   | V       |
| Receiver Input Hysteresis                                                                 | ∆ V TH   | V CM = 0V                                             | V CM = 0V                                             |    70 |       |       | mV      |
| Receiver Output High Voltage                                                              | V OH     | I O = -4mA, V ID = 200mV                              | I O = -4mA, V ID = 200mV                              |   3.5 |       |       | V       |
| Receiver Output Low Voltage                                                               | V OL     | I O = 4mA, V ID = -200mV                              | I O = 4mA, V ID = -200mV                              |       |       | 0.4   | V       |
| Three-State (high impedance) Output Current at Receiver                                   | I OZR    | 0.4V ≤ V O ≤ 2.4V                                     | 0.4V ≤ V O ≤ 2.4V                                     |       |       | ±1    | µA      |
| Receiver Input Resistance                                                                 | R IN     | -7V ≤ V CM ≤ 12V, all devices except MAX487E/MAX1487E | -7V ≤ V CM ≤ 12V, all devices except MAX487E/MAX1487E |    12 |       |       | k Ω     |
| Receiver Input Resistance                                                                 | R IN     | -7V ≤ V CM ≤ 12V, MAX487E/MAX1487E                    | -7V ≤ V CM ≤ 12V, MAX487E/MAX1487E                    |    48 |       |       | k Ω     |

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## DC ELECTRICAL CHARACTERISTICS (continued)

(VCC = 5V ±5%, TA = TMIN to TMAX, unless otherwise noted.) (Notes 1, 2)

| PARAMETER                                | SYMBOL   | CONDITIONS                                      |                                                 |                                                 | MIN   | TYP   | MAX   | UNITS   |
|------------------------------------------|----------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------|-------|-------|---------|
| No-Load Supply Current (Note 3)          | I CC     | MAX488E/MAX489E, DE, DI, - R - E - = 0V or V CC | MAX488E/MAX489E, DE, DI, - R - E - = 0V or V CC | MAX488E/MAX489E, DE, DI, - R - E - = 0V or V CC |       | 120   | 250   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX490E/MAX491E, DE, DI, - R - E - = 0V or V CC | MAX490E/MAX491E, DE, DI, - R - E - = 0V or V CC | MAX490E/MAX491E, DE, DI, - R - E - = 0V or V CC |       | 300   | 500   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX481E/MAX485E, - R - E - = 0V or V CC         | DE = V CC                                       | DE = V CC                                       |       | 500   | 900   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX481E/MAX485E, - R - E - = 0V or V CC         | DE = 0V                                         | DE = 0V                                         |       | 300   | 500   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX1487E, - R - E - = 0V or V CC                | DE = V CC                                       | DE = V CC                                       |       | 300   | 500   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX1487E, - R - E - = 0V or V CC                | DE = 0V                                         | DE = 0V                                         |       | 230   | 400   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX483E/MAX487E, - R - E - = 0V or V CC         | DE = V CC                                       | MAX483E                                         |       | 350   | 650   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX483E/MAX487E, - R - E - = 0V or V CC         | DE = V CC                                       | MAX487E                                         |       | 250   | 400   | µA      |
| No-Load Supply Current (Note 3)          | I CC     | MAX483E/MAX487E, - R - E - = 0V or V CC         | DE = 0V                                         | DE = 0V                                         |       | 120   | 250   | µA      |
| Supply Current in Shutdown               | I SHDN   | MAX481E/483E/487E, DE = 0V, - R - E - = V CC    | MAX481E/483E/487E, DE = 0V, - R - E - = V CC    | MAX481E/483E/487E, DE = 0V, - R - E - = V CC    |       | 0.5   | 10    | µA      |
| Driver Short-Circuit Current, V O = High | I OSD1   | -7V ≤ V O ≤ 12V (Note 4)                        | -7V ≤ V O ≤ 12V (Note 4)                        | -7V ≤ V O ≤ 12V (Note 4)                        | 35    |       | 250   | mA      |
| Driver Short-Circuit Current, V O = Low  | I OSD2   | -7V ≤ V O ≤ 12V (Note 4)                        | -7V ≤ V O ≤ 12V (Note 4)                        | -7V ≤ V O ≤ 12V (Note 4)                        | 35    |       | 250   | mA      |
| Receiver Short-Circuit Current           | I OSR    | 0V ≤ V O ≤ V CC                                 | 0V ≤ V O ≤ V CC                                 | 0V ≤ V O ≤ V CC                                 | 7     |       | 95    | mA      |
| ESD Protection                           |          | A,B,YandZpins,testedusingHumanBodyModel         | A,B,YandZpins,testedusingHumanBodyModel         | A,B,YandZpins,testedusingHumanBodyModel         | ±15   | ±15   | ±15   | kV      |

## SWITCHING CHARACTERISTICS-MAX481E/MAX485E, MAX490E/MAX491E, MAX1487E

(VCC = 5V ±5%, TA = TMIN to TMAX, unless otherwise noted.) (Notes 1, 2)

| PARAMETER                                              | SYMBOL        | CONDITIONS                                           | CONDITIONS                                           |   MIN |   TYP |   MAX | UNITS   |
|--------------------------------------------------------|---------------|------------------------------------------------------|------------------------------------------------------|-------|-------|-------|---------|
| Driver Input to Output                                 | t PLH         | Figures 10 and 12, R DIFF = 54 Ω ,                   | Figures 10 and 12, R DIFF = 54 Ω ,                   |    10 |    40 |    60 | ns      |
| Driver Input to Output                                 | t PHL         | CL1 = CL2 = 100pF                                    | CL1 = CL2 = 100pF                                    |    10 |    40 |    60 | ns      |
| Driver Output Skew to Output                           | t SKEW        | Figures 10 and 12,R DIFF =54 Ω , CL1 =CL2 =100pF     | Figures 10 and 12,R DIFF =54 Ω , CL1 =CL2 =100pF     |       |     5 |    10 | ns      |
| Driver Rise or Fall Time                               | t R , t F     | Figures 10 and 12, R DIFF = 54 Ω , CL1 = CL2 = 100pF | MAX481E,MAX485E,MAX1487E                             |     3 |    20 |    40 | ns      |
| Driver Rise or Fall Time                               | t R , t F     | Figures 10 and 12, R DIFF = 54 Ω , CL1 = CL2 = 100pF | MAX490EC/E, MAX491EC/E                               |     5 |    20 |    25 | ns      |
| Driver Enable to Output High                           | t ZH          | Figures 11 and 13, CL = 100pF, S2 closed             | Figures 11 and 13, CL = 100pF, S2 closed             |       |    45 |    70 | ns      |
| Driver Enable to Output Low                            | t ZL          | Figures 11 and 13, CL = 100pF, S1 closed             | Figures 11 and 13, CL = 100pF, S1 closed             |       |    45 |    70 | ns      |
| Driver Disable Time from Low                           | t LZ          | Figures 11 and 13, CL = 15pF, S1 closed              | Figures 11 and 13, CL = 15pF, S1 closed              |       |    45 |    70 | ns      |
| Driver Disable Time from High                          | t HZ          | Figures 11 and 13, CL = 15pF, S2 closed              | Figures 11 and 13, CL = 15pF, S2 closed              |       |    45 |    70 | ns      |
| Receiver Input to Output                               | t PLH , t PHL | Figures 10 and 14, R DIFF = 54 Ω , CL1 = CL2 = 100pF | MAX481E,MAX485E,MAX1487E                             |    20 |    60 |   200 | ns      |
| Receiver Input to Output                               | t PLH , t PHL | Figures 10 and 14, R DIFF = 54 Ω , CL1 = CL2 = 100pF | MAX490EC/E, MAX491EC/E                               |    20 |    60 |   150 | ns      |
| &#124; t PLH - t PHL &#124; Differential Receiver Skew | t SKD         | Figures 10 and 14, R DIFF = 54 Ω , CL1 = CL2 = 100pF | Figures 10 and 14, R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |     5 |       | ns      |
| Receiver Enable to Output Low                          | t ZL          | Figures 9 and 15, CRL = 15pF, S1 closed              | Figures 9 and 15, CRL = 15pF, S1 closed              |       |    20 |    50 | ns      |
| Receiver Enable to Output High                         | t ZH          | Figures 9 and 15, CRL = 15pF, S2 closed              | Figures 9 and 15, CRL = 15pF, S2 closed              |       |    20 |    50 | ns      |
| Receiver Disable Time from Low                         | t LZ          | Figures 9 and 15, CRL = 15pF, S1 closed              | Figures 9 and 15, CRL = 15pF, S1 closed              |       |    20 |    50 | ns      |
| Receiver Disable Time from High                        | t HZ          | Figures 9 and 15, CRL = 15pF, S2 closed              | Figures 9 and 15, CRL = 15pF, S2 closed              |       |    20 |    50 | ns      |
| Maximum Data                                           | f MAX         | Rate                                                 | Rate                                                 |   2.5 |       |       | Mbps    |
| Time to Shutdown                                       | t SHDN        | MAX481E (Note 5)                                     | MAX481E (Note 5)                                     |    50 |   200 |   600 | ns      |

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## SWITCHING CHARACTERISTICS-MAX481E/MAX485E, MAX490E/MAX491E, MAX1487E (continued)

(VCC = 5V ±5%, TA = TMIN to TMAX, unless otherwise noted.) (Notes 1, 2)

| PARAMETER                                              | SYMBOL     | CONDITIONS                                         | MIN   |   TYP |   MAX | UNITS   |
|--------------------------------------------------------|------------|----------------------------------------------------|-------|-------|-------|---------|
| Driver Enable from Shutdown to Output High (MAX481E)   | t ZH(SHDN) | Figures 11 and 13, CL = 100pF, S2 closed           |       |    45 |   100 | ns      |
| Driver Enable from Shutdown to Output Low (MAX481E)    | t ZL(SHDN) | Figures 11 and 13, CL = 100pF, S1 closed           |       |    45 |   100 | ns      |
| Receiver Enable from Shutdown to Output High (MAX481E) | t ZH(SHDN) | Figures 9 and 15, CL = 15pF, S2 closed, A - B = 2V |       |   225 |  1000 | ns      |
| Receiver Enable from Shutdown to Output Low (MAX481E)  | t ZL(SHDN) | Figures 9 and 15, CL = 15pF, S1 closed, B - A = 2V |       |   225 |  1000 | ns      |

## SWITCHING CHARACTERISTICS-MAX483E, MAX487E/MAX488E/MAX489E

(VCC = 5V ±5%, TA = TMIN to TMAX, unless otherwise noted.) (Notes 1, 2)

| PARAMETER                                    | SYMBOL     | CONDITIONS                                                |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------------------|------------|-----------------------------------------------------------|-------|-------|-------|---------|
| Driver Input to Output                       | t PLH      | Figures 10 and 12, R DIFF = 54 Ω ,                        |   250 |   800 |  2000 | ns      |
|                                              | t PHL      | CL1 = CL2 = 100pF                                         |   250 |   800 |  2000 | ns      |
| Driver Output Skew to Output                 | t SKEW     | Figures 10 and 12, R DIFF = 54 Ω , CL1 = CL2 = 100pF      |       |    20 |   800 | ns      |
| Driver Rise or Fall Time                     | t R , t F  | Figures 10 and 12, R DIFF = 54 Ω , CL1 = CL2 = 100pF      |   250 |       |  2000 | ns      |
| Driver Enable to Output High                 | t ZH       | Figures 11 and 13, CL = 100pF, S2 closed                  |   250 |       |  2000 | ns      |
| Driver Enable to Output Low                  | t ZL       | Figures 11 and 13, CL = 100pF, S1 closed                  |   250 |       |  2000 | ns      |
| Driver Disable Time from Low                 | t LZ       | Figures 11 and 13, CL = 15pF, S1 closed                   |   300 |       |  3000 | ns      |
| Driver Disable Time from High                | t HZ       | Figures 11 and 13, CL = 15pF, S2 closed                   |   300 |       |  3000 | ns      |
| Receiver Input to Output                     | t PLH      | Figures 10 and 14, R DIFF = 54 Ω ,                        |   250 |       |  2000 | ns      |
| Receiver Input to Output                     | t PHL      | CL1 = CL2 = 100pF                                         |   250 |       |  2000 | ns      |
| I t PLH - t PHL I Differential Receiver Skew | t SKD      | Figures 10 and 14, R DIFF = 54 Ω , CL1 = CL2 = 100pF      |       |   100 |       | ns      |
| Receiver Enable to Output Low                | t ZL       | Figures 9 and 15, CRL = 15pF, S1 closed                   |       |    25 |    50 | ns      |
| Receiver Enable to Output High               | t ZH       | Figures 9 and 15, CRL = 15pF, S2 closed                   |       |    25 |    50 | ns      |
| Receiver Disable Time from Low               | t LZ       | Figures 9 and 15, CRL = 15pF, S1 closed                   |       |    25 |    50 | ns      |
| Receiver Disable Time from High              | t HZ       | Figures 9 and 15, CRL = 15pF, S2 closed                   |       |    25 |    50 | ns      |
| Maximum Data Rate                            | f MAX      | t PLH , t PHL < 50% of data period                        |   250 |       |       | kbps    |
| Time to Shutdown                             | t SHDN     | MAX483E/MAX487E (Note 5)                                  |    50 |   200 |   600 | ns      |
| Driver Enable from Shutdown to Output High   | t ZH(SHDN) | MAX483E/MAX487E, Figures 11 and 13, CL = 100pF, S2 closed |       |       |  2000 | ns      |
| Driver Enable from Shutdown to Output Low    | t ZL(SHDN) | MAX483E/MAX487E, Figures 11 and 13, CL = 100pF, S1 closed |       |       |  2000 | ns      |
| Receiver Enable from Shutdown to Output High | t ZH(SHDN) | MAX483E/MAX487E, Figures 9 and 15, CL = 15pF, S2 closed   |       |       |  2500 | ns      |
| Receiver Enable from Shutdown to Output Low  | t ZL(SHDN) | MAX483E/MAX487E, Figures 9 and 15, CL = 15pF, S1 closed   |       |       |  2500 | ns      |

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## NOTES FOR ELECTRICAL/SWITCHING CHARACTERISTICS

Note 1: All currents into device pins are positive; all currents out of device pins are negative. All voltages are referenced to device ground unless otherwise specified.

Note 2: All typical specifications are given for VCC = 5V and TA = +25°C.

Note 3: Supply current specification is valid for loaded transmitters when DE = 0V.

Note 4: Applies to peak current. See Typical Operating Characteristics.

Note 5: The MAX481E/MAX483E/MAX487E are put into shutdown by bringing -R - E -high and DE low. If the inputs are in this state for less than 50ns, the parts are guaranteed not to enter shutdown. If the inputs are in this state for at least 600ns, the parts are guaranteed to have entered shutdown. See Low-Power Shutdown Mode section.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VCC = 5V, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

OUTPUT CURRENT (mA)

## RECEIVER OUTPUT LOW VOLTAGE vs. TEMPERATURE

RECEIVER OUTPUT HIGH VOLTAGE vs. TEMPERATURE

<!-- image -->

OUTPUT HIGH VOLTAGE (V)

<!-- image -->

## DRIVER OUTPUT CURRENT vs. DIFFERENTIAL OUTPUT VOLTAGE

<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(VCC = 5V, TA = +25°C, unless otherwise noted.)

DRIVER DIFFERENTIAL OUTPUT VOLTAGE vs. TEMPERATURE

<!-- image -->

<!-- image -->

MAX481E/MAX485E/MAX490E/MAX491E SUPPLY CURRENT vs. TEMPERATURE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN                                      | PIN             | PIN             |           |                                                                                                                                                                                                                                                                                          |
|------------------------------------------|-----------------|-----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX481E/MAX483E MAX485E/MAX487E MAX1487E | MAX488E MAX490E | MAX489E MAX491E | NAME      | FUNCTION                                                                                                                                                                                                                                                                                 |
| 1                                        | 2               | 2               | RO        | Receiver Output: If A > B by 200mV, RO will be high; If A < B by 200mV, RO will be low.                                                                                                                                                                                                  |
| 2                                        | -               | 3               | - R - E - | Receiver Output Enable. RO is enabled when - R - E - is low; RO is high impedance when - R - E - is high.                                                                                                                                                                                |
| 3                                        | -               | 4               | DE        | Driver Output Enable. The driver outputs, Y and Z, are enabled by bringing DE high. They are high imped- ance when DE is low. If the driver outputs are enabled, the parts function as line drivers. While they are high impedance, they function as line receivers if - R - E - is low. |
| 4                                        | 3               | 5               | DI        | Driver Input. A low on DI forces output Y low and out- put Z high. Similarly, a high on DI forces output Y high and output Z low.                                                                                                                                                        |
| 5                                        | 4               | 6, 7            | GND       | Ground                                                                                                                                                                                                                                                                                   |
| -                                        | 5               | 9               | Y         | Noninverting Driver Output                                                                                                                                                                                                                                                               |
| -                                        | 6               | 10              | Z         | Inverting Driver Output                                                                                                                                                                                                                                                                  |
| 6                                        | -               | -               | A         | Noninverting Receiver Input and Noninverting Driver Output                                                                                                                                                                                                                               |
| -                                        | 8               | 12              | A         | Noninverting Receiver Input                                                                                                                                                                                                                                                              |
| 7                                        | -               | -               | B         | Inverting Receiver Input and Inverting Driver Output                                                                                                                                                                                                                                     |
| -                                        | 7               | 11              | B         | Inverting Receiver Input                                                                                                                                                                                                                                                                 |
| 8                                        | 1               | 14              | V CC      | Positive Supply: 4.75V ≤ V CC ≤ 5.25V                                                                                                                                                                                                                                                    |
| -                                        | -               | 1, 8, 13        | N.C.      | No Connect-not internally connected                                                                                                                                                                                                                                                      |

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

<!-- image -->

Figure 1.  MAX481E/MAX483E/MAX485E/MAX487E/MAX1487E Pin Configuration and Typical Operating Circuit

Figure 2.  MAX488E/MAX490E Pin Configuration and Typical Operating Circuit

<!-- image -->

Figure 3.  MAX489E/MAX491E Pin Configuration and Typical Operating Circuit

<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

## \_\_\_\_\_\_\_\_\_\_Function Tables (MAX481E/MAX483E/MAX485E/MAX487E/MAX1487E)

## Table 1.  Transmitting

| INPUTS   | INPUTS   | INPUTS   | OUTPUTS   | OUTPUTS   |
|----------|----------|----------|-----------|-----------|
| RE       | DE       | DI       | Z         | Y         |
| X        | 1        | 1        | 0         | 1         |
| X        | 1        | 0        | 1         | 0         |
| 0        | 0        | X        | High-Z    | High-Z    |
| 1        | 0        | X        | High-Z *  | High-Z *  |

High-Z = High impedance

*   Shutdown mode for MAX481E/MAX483E/MAX487E

## \_\_\_\_\_\_\_\_\_\_Applications Information

The MAX481E/MAX483E/MAX485E/MAX487E-MAX491E and MAX1487E are low-power transceivers for RS-485 and RS-422 communications. These 'E' versions of the MAX481, MAX483, MAX485, MAX487-MAX491, and MAX1487 provide extra protection against ESD. The rugged MAX481E, MAX483E, MAX485E, MAX497EMAX491E, and MAX1487E are intended for harsh environments where high-speed communication is important. These devices eliminate the need for transient suppressor diodes and the associated high capacitance loading. The standard (non-'E') MAX481, MAX483, MAX485, MAX487-MAX491, and MAX1487 are recommended for applications where cost is critical.

The MAX481E, MAX485E, MAX490E, MAX491E, and MAX1487E can transmit and receive at data rates up to 2.5Mbps, while the MAX483E, MAX487E, MAX488E, and MAX489E are specified for data rates up to 250kbps. The MAX488E-MAX491E are full-duplex transceivers, while the MAX481E, MAX483E, MAX487E, and MAX1487E are half-duplex. In addition, driverenable (DE) and receiver-enable (RE) pins are included on the MAX481E, MAX483E, MAX485E, MAX487E, MAX489E, MAX491E, and MAX1487E. When disabled, the driver and receiver outputs are high impedance.

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic  discharges encountered during handling and assembly. The driver outputs and receiver inputs have extra protection against static electricity. Maxim's engi- High-Z = High impedance

Table 2.  Receiving

| INPUTS   | INPUTS   | INPUTS      | OUTPUT   |
|----------|----------|-------------|----------|
| RE       | DE       | A-B         | RO       |
| 0        | 0        | > +0.2V     | 1        |
| 0        | 0        | < -0.2V     | 0        |
| 0        | 0        | Inputs open | 1        |
| 1        | 0        | X           | High-Z * |

*   Shutdown mode for MAX481E/MAX483E/MAX487E

neers developed state-of-the-art structures to protect these pins against ESD of ±15kV without damage. The ESD structures withstand high ESD in all states:  normal operation, shutdown, and powered down. After an ESD event, Maxim's MAX481E, MAX483E, MAX485E, MAX487E-MAX491E, and MAX1487E keep working without latchup.

ESD protection can be tested in various ways; the transmitter  outputs  and  receiver  inputs  of  this  product family are characterized for protection to ±15kV using the Human Body Model.

Other ESD test methodologies include IEC10004-2 contact discharge and IEC1000-4-2 air-gap discharge (formerly IEC801-2).

## ESD Test Conditions

ESD performance depends on a variety of conditions. Contact Maxim for a reliability report that documents test set-up, test methodology, and test results.

## Human Body Model

Figure 4 shows the Human Body Model, and Figure 5 shows the current waveform it generates when discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest,  which is then discharged into the test device through a 1.5k Ω resistor.

## IEC1000-4-2

The IEC1000-4-2 standard covers ESD testing and performance of finished equipment; it does not specifically refer to integrated circuits (Figure 6).

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

<!-- image -->

Figure 4.  Human Body ESD Test Model

<!-- image -->

Figure 6.  IEC1000-4-2 ESD Test Model

<!-- image -->

Figure 8.  Driver DC Test Load

<!-- image -->

Figure 5.  Human Body Model Current Waveform

Figure 7.  IEC1000-4-2 ESD Generator Current Waveform

<!-- image -->

Figure 9.  Receiver Timing Test Load

<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

<!-- image -->

Figure 10.  Driver/Receiver Timing Test Circuit

<!-- image -->

Figure 12.  Driver Propagation Delays

<!-- image -->

Figure 14.  Receiver Propagation Delays

<!-- image -->

Figure 11.  Driver Timing Test Load

Figure 13.  Driver Enable and Disable Times (except MAX488E and MAX490E)

<!-- image -->

Figure 15.  Receiver Enable and Disable Times (except MAX488E and MAX490E)

<!-- image -->

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

Figure 16.  Driver Output Waveform and FFT Plot of MAX485E/MAX490E/MAX491E/MAX1487E Transmitting a 150kHz Signal

<!-- image -->

The major difference between tests done using the Human Body Model and IEC1000-4-2 is higher peak current in IEC1000-4-2, because series resistance is lower in the IEC1000-4-2 model. Hence, the ESD withstand voltage measured to IEC1000-4-2 is generally lower than that measured using the Human Body Model. Figure 7 shows the current waveform for the 8kV IEC1000-4-2 ESD contact-discharge test.

The air-gap test involves approaching the device with a charged probe. The contact-discharge method connects the probe to the device before the probe is energized.

## Machine Model

The Machine Model for ESD tests all pins using a 200pF storage capacitor and zero discharge resistance. Its objective is to emulate the stress caused by contact that occurs with handling and assembly during manufacturing. Of course, all pins require this protection during manufacturing-not just inputs and outputs. Therefore, after PC board assembly, the Machine Model is less relevant to I/O ports.

## MAX487E/MAX1487E: 128 Transceivers on the Bus

The 48k Ω , 1/4-unit-load receiver input impedance of the MAX487E and MAX1487E allows up to 128 transceivers on a bus, compared to the 1-unit load (12k Ω input impedance) of standard RS-485 drivers (32 transceivers maximum). Any combination of MAX487E/MAX1487E and other RS-485 transceivers with a total of 32 unit loads or less can be put on the bus. The MAX481E, MAX483E, MAX485E, and MAX488E-MAX491E have standard 12k Ω receiver input impedance.

Figure 17.  Driver Output Waveform and FFT Plot of MAX483E/MAX487E-MAX489E Transmitting a 150kHz Signal

<!-- image -->

## MAX483E/MAX487E/MAX488E/MAX489E: Reduced EMI and Reflections

The MAX483E and MAX487E-MAX489E are slew-rate limited, minimizing EMI and reducing reflections caused by improperly terminated cables. Figure 16 shows the driver output waveform and its Fourier analysis  of  a  150kHz signal transmitted by a MAX481E, MAX485E, MAX490E, MAX491E, or MAX1487E. Highfrequency harmonics with large amplitudes are evident. Figure 17 shows the same information displayed for a MAX483E, MAX487E, MAX488E, or MAX489E transmitting  under the same conditions. Figure 17's high-frequency harmonics have much lower amplitudes, and the potential for EMI is significantly reduced.

## Low-Power Shutdown Mode (MAX481E/MAX483E/MAX487E)

A low-power shutdown mode is initiated by bringing both RE high and DE low. The devices will not shut down unless both the driver and receiver are disabled. In  shutdown, the devices typically draw only 0.5µA of supply current.

RE and DE may be driven simultaneously; the parts are guaranteed not to enter shutdown if RE is high and DE is  low  for  less  than  50ns. If the inputs are in this state for  at  least  600ns,  the  parts  are  guaranteed  to  enter shutdown.

For the MAX481E, MAX483E, and MAX487E, the tZH and tZL enable times assume the part was not in the low-power shutdown state (the MAX485E, MAX488EMAX491E, and MAX1487E can not be shut down). The t ZH(SHDN) and tZL(SHDN) enable times assume the parts were shut down (see Electrical Characteristics).

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

Figure 18.  Receiver Propagation Delay Test Circuit

<!-- image -->

It  takes the drivers and receivers longer to become enabled from the low-power shutdown state (tZH(SHDN), tZL(SHDN)) than from the operating mode (tZH, tZL). (The parts are in operating mode if the RE, DE inputs equal a logical 0,1 or 1,1 or 0, 0.)

## Driver Output Protection

Excessive output current and power dissipation caused by faults or by bus contention are prevented by two mechanisms. A foldback current limit on the output stage provides immediate protection against short circuits over the whole common-mode voltage range (see Typical Operating Characteristics). In addition, a thermal shutdown circuit forces the driver outputs into a high-impedance state if the die temperature rises excessively.

## Propagation Delay

Many digital encoding schemes depend on the difference between the driver and receiver propagation delay times. Typical propagation delays are shown in Figures 19-22 using Figure 18's test circuit.

The difference in receiver delay times, tPLH -  tPHL,  is typically under 13ns for the MAX481E, MAX485E, MAX490E, MAX491E, and MAX1487E, and is typically less than 100ns for the MAX483E and MAX487EMAX489E.

The driver skew times are typically 5ns (10ns max) for the MAX481E, MAX485E, MAX490E, MAX491E, and MAX1487E, and are typically 100ns (800ns max) for the MAX483E and MAX487E-MAX489E.

## Typical Applications

The  MAX481E,  MAX483E,  MAX485E,  MAX487EMAX491E, and MAX1487E transceivers are designed for bidirectional data communications on multipoint bus transmission lines.  Figures 25 and 26 show typical network application circuits. These parts can also be used as line repeaters, with cable lengths longer than 4000 feet.

To minimize reflections, the line should be terminated at both ends in its characteristic impedance, and stub lengths off the main line should be kept as short as possible. The slew-rate-limited MAX483E and MAX487EMAX489E are more tolerant of imperfect termination. Bypass the VCC pin with 0.1µF.

## Isolated RS-485

For isolated RS-485 applications, see the MAX253 and MAX1480 data sheets.

## Line Length vs. Data Rate

The RS-485/RS-422 standard covers line lengths up to 4000 feet. Figures 23 and 24 show the system differential  voltage  for  the  parts  driving  4000  feet  of  26AWG twisted-pair wire at 110kHz into 100 Ω loads.

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

<!-- image -->

Figure 19.  MAX481E/MAX485E/MAX490E/MAX1487E Receiver t PHL

<!-- image -->

Figure 21.  MAX483E/MAX487E-MAX489E Receiver tPHL

<!-- image -->

Figure 23.  MAX481E/MAX485E/MAX490E/MAX491E/ MAX1487E System Differential Voltage at 110kHz Driving 4000ft of Cable

<!-- image -->

Figure 20.  MAX481E/MAX485E/MAX490E/MAX491E/ MAX1487E Receiver tPLH

Figure 22.  MAX483E/MAX487E-MAX489E Receiver tPLH

<!-- image -->

Figure 24.  MAX483E/MAX1487E-MAX489E System Differential Voltage at 110kHz Driving 4000ft of Cable

<!-- image -->

## MAX481E/MAX483E/MAX485E/ MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited, Low-Power, RS-485/RS-422 Transceivers

Figure 25.  MAX481E/MAX483E/MAX485E/MAX487E/MAX1487E Typical Half-Duplex RS-485 Network

<!-- image -->

Figure 26.  MAX488E-MAX491E Full-Duplex RS-485 Network

<!-- image -->

## MAX481E/MAX483E/MAX485E/

## MAX487E-MAX491E/MAX1487E

## ±15kV ESD-Protected, Slew-Rate-Limited,

Low-Power, RS-485/RS-422 Transceivers

## Ordering Information (continued)

| PART         | TEMP RANGE     | PIN-PACKAGE    |
|--------------|----------------|----------------|
| MAX489EEPD   | -40°C to +85°C | 14 Plastic DIP |
| MAX489EESD   | -40°C to +85°C | 14 SO          |
| MAX490E CPA  | 0°C to +70°C   | 8 Plastic DIP  |
| MAX490ECSA   | 0°C to +70°C   | 8 SO           |
| MAX490EEPA   | -40°C to +85°C | 8 Plastic DIP  |
| MAX490EESA   | -40°C to +85°C | 8 SO           |
| MAX491E CPD  | 0°C to +70°C   | 14 Plastic DIP |
| MAX491ECSD   | 0°C to +70°C   | 14 SO          |
| MAX491EEPD   | -40°C to +85°C | 14 Plastic DIP |
| MAX491EESD   | -40°C to +85°C | 14 SO          |
| MAX1487E CPA | 0°C to +70°C   | 8 Plastic DIP  |
| MAX1487ECSA  | 0°C to +70°C   | 8 SO           |
| MAX1487EEPA  | -40°C to +85°C | 8 Plastic DIP  |
| MAX1487EESA  | -40°C to +85°C | 8 SO           |

## Selector Guide

| PART NUMBER   |   HALF/FULL DUPLEX | DATA RATE (Mbps)   | SLEW- RATE LIMITED   | LOW-POWER SHUTDOWN   |   RECEIVER/ DRIVER ENABLE |   QUIESCENT CURRENT ( μ A) |   NUMBER OF TRANSMITTERS ON BUS | PIN COUNT   |
|---------------|--------------------|--------------------|----------------------|----------------------|---------------------------|----------------------------|---------------------------------|-------------|
| Half          |                2.5 | No                 | Yes                  | Yes                  |                       300 |                         32 |                               8 | MAX481E     |
| Half          |               0.25 | Yes                | Yes                  | Yes                  |                       120 |                         32 |                               8 | MAX483E     |
| Half          |                2.5 | No                 | No                   | Yes                  |                       300 |                         32 |                               8 | MAX485E     |
| Half          |               0.25 | Yes                | Yes                  | Yes                  |                       120 |                        128 |                               8 | MAX487E     |
| Full          |               0.25 | Yes                | No                   | No                   |                       120 |                         32 |                               8 | MAX488E     |
| Full          |               0.25 | Yes                | No                   | Yes                  |                       120 |                         32 |                              14 | MAX489E     |
| Full          |                2.5 | No                 | No                   | No                   |                       300 |                         32 |                               8 | MAX490E     |
| Full          |                2.5 | No                 | No                   | Yes                  |                       300 |                         32 |                              14 | MAX491E     |
| Half          |                2.5 | No                 | No                   | Yes                  |                       230 |                        128 |                               8 | MAX1487E    |

Chip Information

TRANSISTOR COUNT: 295

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Package Information

For the latest package outline information, go to www.maxim-ic.com/packages .

| PART        | TEMP RANGE     | PIN-PACKAGE    |
|-------------|----------------|----------------|
| MAX485E CPA | 0°C to +70°C   | 8 Plastic DIP  |
| MAX485ECSA  | 0°C to +70°C   | 8 SO           |
| MAX485EEPA  | -40°C to +85°C | 8 Plastic DIP  |
| MAX485EESA  | -40°C to +85°C | 8 SO           |
| MAX487E CPA | 0°C to +70°C   | 8 Plastic DIP  |
| MAX487ECSA  | 0°C to +70°C   | 8 SO           |
| MAX487EEPA  | -40°C to +85°C | 8 Plastic DIP  |
| MAX487EESA  | -40°C to +85°C | 8 SO           |
| MAX488E CPA | 0°C to +70°C   | 8 Plastic DIP  |
| MAX488ECSA  | 0°C to +70°C   | 8 SO           |
| MAX488EEPA  | -40°C to +85°C | 8 Plastic DIP  |
| MAX488EESA  | -40°C to +85°C | 8 SO           |
| MAX489E CPD | 0°C to +70°C   | 14 Plastic DIP |
| MAX489ECSD  | 0°C to +70°C   | 14 SO          |