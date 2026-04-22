<!-- lastmod 2023-09-13 -->
## TMC32NP-MLP Manual

## Complementary 30V Enhancement Mode MOSFET In Miniature Package For use with e.g. TMC239 or TMC249

<!-- image -->

Version: 1.01 11 April 2007

<!-- image -->

Trinamic Motion Control GmbH &amp; Co KG Sternstraße 67 D - 20 357 Hamburg, Germany http://www.trinamic.com

| Table of Contents   | Table of Contents                                                                                                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                   | Features........................................................................................................................................................................... 4 |
| 2                   | Life support policy....................................................................................................................................................... 5          |
| 3                   | Operational Ratings..................................................................................................................................................... 6            |
| 3.1                 | Absolute Maximum Ratings ............................................................................................................................. 6                              |
| 3.2                 | Thermal Resistance............................................................................................................................................. 6                     |
| 3.3                 | Characteristics ...................................................................................................................................................... 7              |
| 4                   | N-Channel....................................................................................................................................................................... 8    |
| 4.1                 | Electrical Characteristics.................................................................................................................................... 8                      |
| 4.2                 | Typical Characteristics........................................................................................................................................ 9                     |
| 5                   | P-Channel......................................................................................................................................................................11     |
| 5.1                 | Electrical Characteristics..................................................................................................................................11                        |
| 5.2                 | Typical Characteristics......................................................................................................................................12                       |
| 6                   | Application with TMC239 / TMC249.......................................................................................................................14                             |
| 6.1                 | Example Wiring .................................................................................................................................................14                    |
| 6.2                 | Example Layout .................................................................................................................................................15                    |
| 7                   | Package Outline / Dimensions ...............................................................................................................................16                        |
| 8                   | Revision History..........................................................................................................................................................17          |
|                     | 8.1 Documentation Revision.................................................................................................................................17                         |
| 9                   | References....................................................................................................................................................................17      |

| List of Figures                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 3.1: N-channel Safe Operating Area ................................................................................................................... 7                                                                                                                                                                                                                                                                                                                                                  |
| Figure 3.2: P-channel Safe Operating Area.................................................................................................................... 7                                                                                                                                                                                                                                                                                                                                                  |
| Figure 3.3: Transient Thermal Impedance..................................................................................................................... 7                                                                                                                                                                                                                                                                                                                                                   |
| Figure 3.4: Derating Curve.................................................................................................................................................. 7                                                                                                                                                                                                                                                                                                                                   |
| Figure 3.5: Power Dissipation v Board Area................................................................................................................. 7                                                                                                                                                                                                                                                                                                                                                    |
| Figure 3.6: Thermal Resistance v Board Area............................................................................................................... 7                                                                                                                                                                                                                                                                                                                                                     |
| Figure 4.1: Output Characteristics (N).............................................................................................................................. 9                                                                                                                                                                                                                                                                                                                                           |
| Figure 4.2: Output Characteristics (N).............................................................................................................................. 9                                                                                                                                                                                                                                                                                                                                           |
| Figure 4.3: Typical Transfer Characteristics (N)............................................................................................................. 9                                                                                                                                                                                                                                                                                                                                                  |
| Figure 4.4: Normalized Curves v Temperature (N)....................................................................................................... 9                                                                                                                                                                                                                                                                                                                                                         |
| Figure 4.5: On-Resistance v Drain Current (N) .............................................................................................................. 9                                                                                                                                                                                                                                                                                                                                                   |
| Figure 4.6: Source-Drain Diode Forward Voltage (N) ................................................................................................. 9                                                                                                                                                                                                                                                                                                                                                           |
| Figure 4.7: Capacitance v Drain-Source Voltage (N)..................................................................................................10                                                                                                                                                                                                                                                                                                                                                           |
| Figure 4.8: Gate-Source Voltage v Gate Charge (N) ..................................................................................................10                                                                                                                                                                                                                                                                                                                                                           |
| Figure 4.9: Basic Gate Charge Waveform (N)..............................................................................................................10                                                                                                                                                                                                                                                                                                                                                       |
| Figure 4.10: Gate Charge Test Circuit (N) .....................................................................................................................10                                                                                                                                                                                                                                                                                                                                                |
| Figure 4.11: Switching Time Waveforms (N)...............................................................................................................10                                                                                                                                                                                                                                                                                                                                                       |
| Figure 4.12: Switching Time Test Circuit (N)...............................................................................................................10                                                                                                                                                                                                                                                                                                                                                    |
| Figure 5.1: Output Characteristics (P)............................................................................................................................12                                                                                                                                                                                                                                                                                                                                             |
| Figure 5.3: Typical Transfer Characteristics (P) ...........................................................................................................12                                                                                                                                                                                                                                                                                                                                                   |
| Figure 5.4: Normalized Curves v Temperature (P).....................................................................................................12 5.5: On-Resistance v Drain Current                                                                                                                                                                                                                                                                                                                        |
| Figure (P).............................................................................................................12                                                                                                                                                                                                                                                                                                                                                                                        |
| Figure 5.6: Source-Drain Diode Forward Voltage (P)................................................................................................12                                                                                                                                                                                                                                                                                                                                                             |
| Figure 5.7: Capacitance v Drain-Source Voltage (P) ..................................................................................................13                                                                                                                                                                                                                                                                                                                                                          |
| Figure 5.8: Gate-Source Voltage v Gate Charge (P)...................................................................................................13                                                                                                                                                                                                                                                                                                                                                           |
| Figure 5.9: Basic Gate Charge Waveform (P) ..............................................................................................................13                                                                                                                                                                                                                                                                                                                                                      |
| Figure 5.12: Switching Time Test Circuit (P) ...............................................................................................................13                                                                                                                                                                                                                                                                                                                                                   |
| Figure 5.10: Gate Charge Test Circuit (P)......................................................................................................................13 Figure 5.11: Switching Time Waveforms (P)...............................................................................................................13                                                                                                                                                                                     |
| 6.1: Example wiring with a TMC239.................................................................................................................14 Figure 6.2: Example Layout in original size on PCB.................................................................................................15                                                                                                                                                                                                       |
| Figure                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Figure 7.1: Package Outline..............................................................................................................................................16                                                                                                                                                                                                                                                                                                                                      |
| List of Tables                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Table 1.1: Order codes......................................................................................................................................................... 4                                                                                                                                                                                                                                                                                                                                |
| Table 3.1: Absolute Maximum Ratings............................................................................................................................ 6 6                                                                                                                                                                                                                                                                                                                                              |
| Table 3.2: Thermal Resistance........................................................................................................................................... Table 4.1: Electrical Characteristics, N-Channel............................................................................................................. 8                                                                                                                                                                         |
| Table 5.1: Electrical Characteristics, P-Channel...........................................................................................................11 Table 6.1: Example Layout................................................................................................................................................15 Table 7.1: Package Dimensions.......................................................................................................................................16 |
| Table 8.1: Documentation Revisions                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| .............................................................................................................................17                                                                                                                                                                                                                                                                                                                                                                                  |

## 1 Features

Packaged in the new innovative 3mm x 2mm MLP (Micro Leaded Package) outline this dual 30V N and P channel Trench MOSFET utilizes a unique structure combining the benefits of low on-resistance with fast  switching  speed.  This  makes  them  ideal  for  high  efficiency,  low  voltage  power  management applications, such as stepper motor drivers. Its low gate charge makes it an ideal power driver for the TMC239A and TMC249A family of stepper motor drivers. Using only four of these transistor packages, and the miniaturized TMC239A-LA or TMC249A-LA, a 2A stepper driver can be build in the size of a stamp.  Up  to  2.8A  peak  (2A  RMS)  are  possible  with  limited  duty  cycle.  A  second  set  of  transistors doubles the current capability.

## SUMMARY

- N-Channel = V (BR)DSS = 30V : R DS(on) = 0.12 Ω ; I D = 3.7A
- P-Channel = V (BR)DSS = -30V : R DS(on) = 0.21 Ω ; I D = -2.7A

## Applications

- Stepper motor driver stages

## Highlights

- Low on-resistance
- Fast switching speed
- Low threshold
- Low gate drive
- PCB area and device placement savings

## Other

- 3mm x 2mm Dual Die MLP package
- RoHS compliant

<!-- image -->

<!-- image -->

Underside view

Table 1.1: Order codes

| Order code   | Description                                         |
|--------------|-----------------------------------------------------|
| TMC32NP-MLP  | Miniature Complementary 30V Enhancement Mode MOSFET |

## 2 Life support policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does  not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems  are equipment  intended  to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2007

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.

## 3 Operational Ratings

## 3.1 Absolute Maximum Ratings

Table 3.1: Absolute Maximum Ratings

| Symbol   | Parameter                                                                                                               | N-Channel   | P-Channel      | Unit    |
|----------|-------------------------------------------------------------------------------------------------------------------------|-------------|----------------|---------|
| V DSS    | Drain-source voltage                                                                                                    | 30          | -30            | V       |
| V GS     | Gate-source voltage                                                                                                     | ± 20        | ± 20           | V       |
| I D      | Continuos drain current (V GS = 10V; T A =25°C) (a) (f) (V GS = 10V; T A =25°C) (b) (f) (V GS = 10V; T A =70°C) (b) (f) | 2.9 3.7 3.0 | -2.1 -2.7 -2.2 | A       |
| I DM     | Pulsed drain current                                                                                                    | 12.4        | -9.2           | A       |
| I S      | Continuous source current (body diode) (b)(f)                                                                           | 2.4         | -2.8           | A       |
| I SM     | Pulsed source current (body diode)                                                                                      | 12.4        | -9.2           | A       |
| P D      | Power dissipation at T A =25°C (a) (f) Linear derating factor                                                           | 1.5 12      | 1.5 12         | W mW/°C |
| P D      | Power dissipation at T A =25°C (b) (f) Linear derating factor                                                           | 2.45 19.6   | 2.45 19.6      | W mW/°C |
| P D      | Power dissipation at T A =25°C (c) (f) Linear derating factor                                                           | 1 8         | 1 8            | W mW/°C |
| P D      | Power dissipation at T A =25°C (d) (f) Linear derating factor                                                           | 1.13 8      | 1.13 8         | W mW/°C |
| P D      | Power dissipation at T A =25°C (d) (g) Linear derating factor                                                           | 1.7 13.6    | 1.7 13.6       | W mW/°C |

## 3.2 Thermal Resistance

Table 3.2: Thermal Resistance

| Symbol        | Parameter                   |   Value | Unit   |
|---------------|-----------------------------|---------|--------|
| R GLYPH<31>JA | Junction to ambient (a) (f) |    83.3 | °C/W   |
| R GLYPH<31>JA | Junction to ambient (b) (f) |    51   | °C/W   |
| R GLYPH<31>JA | Junction to ambient (c) (f) |   125   | °C/W   |
| R GLYPH<31>JA | Junction to ambient (d) (f) |   111   | °C/W   |
| R GLYPH<31>JA | Junction to ambient (d) (g) |    73.5 | °C/W   |
| R GLYPH<31>JA | Junction to ambient (e) (g) |    41.7 | °C/W   |

(a) For a dual device surface mounted on 8 sq cm single sided 70µm copper on FR4 PCB, in still air conditions with all exposed pads attached .

(b) Measured at t&lt;5 secs for a dual device surface mounted on 8 sq cm single sided 70µm copper on FR4 PCB, in still air conditions with all exposed pads attached.

(c) For a dual device surface mounted on 8 sq cm single sided 70µm copper on FR4 PCB, in still air conditions with minimal lead connections only.

(d) For a dual device surface mounted on 10 sq cm single sided 35µm copper on FR4 PCB, in still air conditions with all exposed pads attached .

(e) For a dual device surface mounted on 85 sq cm single sided 70µm copper on FR4 PCB, in still air conditions with all exposed pads attached .

(f) For a dual device with one active die.

(g) For dual device with 2 active die running at equal power.

## 3.3 Characteristics

<!-- image -->

## 4 N-Channel

## 4.1 Electrical Characteristics

at T amb = 25°C unless otherwise stated

Table 4.1: Electrical Characteristics, N-Channel

| Symbol             | Parameter                                   | Min                | Typ                | Max                | Unit               | Conditions                                      |
|--------------------|---------------------------------------------|--------------------|--------------------|--------------------|--------------------|-------------------------------------------------|
| STATIC             | STATIC                                      | STATIC             | STATIC             | STATIC             | STATIC             | STATIC                                          |
| V (BR)DSS          | Drain-source breakdown voltage              | 30                 |                    |                    | V                  | I D = 250µA, V GS = 0V                          |
| I DSS              | Zero gate voltage drain current             |                    |                    | 0.5                | µA                 | V DS = 30V, V GS = 0V                           |
| I GSS              | Gate-body leakage                           |                    |                    | 100                | nA                 | V GS = ±20V, V DS = 0V                          |
| V GS(th)           | Gate-source threshold voltage               | 1.0                |                    |                    | V                  | I D = 250µA, V DS = V GS                        |
| R DS(on)           | Static drain-source on-state resistance (1) |                    | 0.106              | 0.12 0.18          | Ω Ω                | V GS = 10V, I D = 2.5A V GS = 4.5V, I D = 2.0A  |
| g fs               | Forward transconductance (1) (3)            |                    | 3.5                |                    | S                  | V DS = 4.5V, I D = 2.5A                         |
| DYNAMIC (3)        | DYNAMIC (3)                                 | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)                                     |
| C iss              | Input capacitance                           |                    | 190                |                    | pF                 | V DS = 25V, V GS = 0V F = 1MHz                  |
| C oss              | Output capacitance                          |                    | 38                 |                    | pF                 | V DS = 25V, V GS = 0V F = 1MHz                  |
| C rss              | Reverse transfer capacitance                |                    | 20                 |                    | pF                 | V DS = 25V, V GS = 0V F = 1MHz                  |
| SWITCHING (2) (3)  | SWITCHING (2) (3)                           | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)                               |
| t d(on)            | Turn-on-delay time                          |                    | 1.7                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V |
| t r                | Rise time                                   |                    | 2.3                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V |
| t d(off)           | Turn-off delay time                         |                    | 6.6                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V |
| t f                | Fall time                                   |                    | 2.9                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V |
| Q g                | Gate Charge                                 |                    | 2.3                |                    | nC                 | V DS = 15V, V GS = 5V I D = 2.5A                |
| Q g                | Total gate charge                           |                    | 3.9                |                    | nC                 | V = 15V, V = 10V                                |
| Q gs               | Gate-source charge                          |                    | 0.6                |                    | nC                 | DS GS I = 2.5A                                  |
| Q gd               | Gate drain charge                           |                    | 0.9                |                    | nC                 | V = 15V, V = 10V                                |
| SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                          | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                              |
| V SD               | Diode forward voltage (1)                   |                    | 0.85               | 0.95               | V                  | T j = 25°C, I S = 1.7A, V GS = 0V               |
| t rr               | Reverse recovery time (3)                   |                    | 17.7               |                    | ns                 | T j = 25°C, I S = 2.5A, di/dt = 100A/µs         |
| Q rr               | Reverse recovery charge (3)                 |                    | 13.0               |                    | nC                 | T j = 25°C, I S = 2.5A, di/dt = 100A/µs         |

(1) Measured under pulsed conditions. Pulse width ≤ 300 µ s; duty cycle ≤ 2%.

(2) Switching characteristics are independent of operating junction temperature.

(3) For design aid only, not subject to production testing.

## 4.2 Typical Characteristics

<!-- image -->

<!-- image -->

## 5 P-Channel

## 5.1 Electrical Characteristics

at T amb = 25°C unless otherwise stated

Table 5.1: Electrical Characteristics, P-Channel

| Symbol             | Parameter                                   | Min                | Typ                | Max                | Unit               | Conditions                                         |
|--------------------|---------------------------------------------|--------------------|--------------------|--------------------|--------------------|----------------------------------------------------|
| STATIC             | STATIC                                      | STATIC             | STATIC             | STATIC             | STATIC             | STATIC                                             |
| V (BR)DSS          | Drain-source breakdown voltage              | -30                |                    |                    | V                  | I D = -250µA, V GS = 0V                            |
| I DSS              | Zero gate voltage drain current             |                    |                    | -1.0               | µA                 | V DS = -30V, V GS = 0V                             |
| I GSS              | Gate-body leakage                           |                    |                    | 100                | nA                 | V GS = ±20V, V DS = 0V                             |
| V GS(th)           | Gate-source threshold voltage               | -0.8               |                    |                    | V                  | I D = -250µA, V DS = V GS                          |
| R DS(on)           | Static drain-source on-state resistance (1) |                    |                    | 0.210 0.330        | Ω Ω                | V GS = -10V, I D = -1.4A V GS = -4.5V, I D = -1.1A |
| g fs               | Forward transconductance (1) (3)            |                    | 2.48               |                    | S                  | V DS = -15V, I D = 1.4A                            |
| DYNAMIC (3)        | DYNAMIC (3)                                 | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)                                        |
| C iss              | Input capacitance                           |                    | 204                |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| C oss              | Output capacitance                          |                    | 39.8               |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| C rss              | Reverse transfer capacitance                |                    | 25.8               |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| SWITCHING (2) (3)  | SWITCHING (2) (3)                           | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)                                  |
| t d(on)            | Turn-on-delay time                          |                    | 1.5                |                    | ns                 | V DD = -15V, I D = -1A R G = 6.0 Ω , V GS = -10V   |
| t r                | Rise time                                   |                    | 2.8                |                    | ns                 | V DD = -15V, I D = -1A R G = 6.0 Ω , V GS = -10V   |
| t d(off)           | Turn-off delay time                         |                    | 11.3               |                    | ns                 | V DD = -15V, I D = -1A R G = 6.0 Ω , V GS = -10V   |
| t f                | Fall time                                   |                    | 7.5                |                    | ns                 | V DD = -15V, I D = -1A R G = 6.0 Ω , V GS = -10V   |
| Q g                | Gate charge                                 |                    | 2.58               |                    | nC                 | V DS = -15V, V GS = -5V I D = -1.4A                |
| Q g                | Total gate charge                           |                    | 5.15               |                    | nC                 | V = -15V, V = -10V                                 |
| Q gs               | Gate-source charge                          |                    | 0.65               |                    | nC                 | DS GS I = -1.4A                                    |
| Q gd               | Gate drain charge                           |                    | 0.92               |                    | nC                 | V = -15V, V = -10V                                 |
| SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                          | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                                 |
| V SD               | Diode forward voltage (1)                   |                    | -0.85              | -0.95              | V                  | T j = 25°C, I S = -1.1A, V GS = 0V                 |
| t rr               | Reverse recovery time (3)                   |                    | 18.6               |                    | ns                 | T j = 25°C, I S = -0.95A, di/dt = 100A/µs          |
| Q rr               | Reverse recovery charge (3)                 |                    | 14.8               |                    | nC                 | T j = 25°C, I S = -0.95A, di/dt = 100A/µs          |

(1) Measured under pulsed conditions. Pulse width ≤ 300 \_ s; duty cycle ≤ 2%.

(2) Switching characteristics are independent of operating junction temperature.

(3) For design aid only, not subject to production testing.

## 5.2 Typical Characteristics

、

<!-- image -->

<!-- image -->

## 6 Application with TMC239 / TMC249

## 6.1 Example Wiring

Example wiring with four TMC32NP-MLP and a TMC239. Sense resistors shown are selected for 2.26A peak current (1.6A RMS). (Power supply filter capacitors not shown.)

Figure 6.1: Example wiring with a TMC239

<!-- image -->

## 6.2 Example Layout

Table 6.1  shows an example layout for four TMC32NP-MLP with a TMC249A-LA driver chip. Be aware that T204 to T207, C203 and C204 and R206 to R208 are not equipped. Original  size  of  this  layout  on  a  PCB  is  about  21x23mm,  see  Figure  6.2.  Current capability with one set of transistors is 2A peak (1.4A RMS) respectively 2.8A peak (2A RMS) with limited duty cycle. A second set of transistors doubles current capability.

Figure 6.2: Example Layout in original size on PCB

<!-- image -->

Table 6.1: Example Layout

<!-- image -->

Please refer to the evaluation board manual / website for more details.

## 7 Package Outline / Dimensions

MLP832 Package Outline (3mm x 2mm Micro Leaded Package)

Figure 7.1: Package Outline

<!-- image -->

Controlling dimensions are in millimeters. Approximate conversions are given in inches.

Table 7.1: Package Dimensions

| DIM   | Millimeters   | Millimeters   | Inches    | Inches    | DIM       | Millimeters   | Millimeters   | Inches     | Inches     |
|-------|---------------|---------------|-----------|-----------|-----------|---------------|---------------|------------|------------|
| DIM   | Min           | Max           | Min       | Max       | DIM       | Min           | Max           | Min        | Max        |
| A     | 0.80          | 1.00          | 0.0315    | 0.0394    | e         | 0.65 BSC      | 0.65 BSC      | 0.0256 BSC | 0.0256 BSC |
| A1    | 0.00          | 0.05          | 0.00      | 0.002     | E         | 2.00 BSC      | 2.00 BSC      | 0.0787 BSC | 0.0787 BSC |
| A2    | 0.65          | 0.75          | 0.0256    | 0.0295    | E2        | 0.43          | 0.63          | 0.017      | 0.0248     |
| A3    | 0.15          | 0.25          | 0.006     | 0.0098    | L         | 0.20          | 0.45          | 0.0079     | 0.0177     |
| b     | 0.24          | 0.34          | 0.0095    | 0.0134    | L2        | 0.00          | 0.125         | 0.00       | 0.005      |
| b1    | 0.17          | 0.30          | 0.0068    | 0.0118    | r         | 0.075 BSC     | 0.075 BSC     | 0.0029 BSC | 0.0029 BSC |
| D     | 3.00 BSC      | 3.00 BSC      | 0.118 BSC | 0.118 BSC | GLYPH<31> | 0°            | 12°           | 0°         | 12°        |
| D2    | 0.82          | 1.02          | 0.0323    | 0.0402    | -         | -             | -             | -          | -          |
| D3    | 1.01          | 1.20          | 0.0398    | 0.0476    | -         | -             | -             | -          | -          |

## 8 Revision History

## 8.1 Documentation Revision

Table 8.1: Documentation Revisions

|   Version | Comment     | Author   | Description          |
|-----------|-------------|----------|----------------------|
|      1    | 16-Mar-2007 | HC       | Initial Version      |
|      1.01 | 11-Apr-2007 | HC       | Example layout added |

## 9 References

[TMC239] [TMC249]

Microstep driver manual (see http://www.trinamic.com)

Microstep driver manual, with StallGuard (see http://www.trinamic.com)