<!-- lastmod 2023-08-03 -->
## TMC34NP-PSO Manual

## Complementary 30V Enhancement Mode MOSFET In Miniature Package For use with e.g. TMC239 or TMC249

<!-- image -->

Version: 1.01 15 August 2007

<!-- image -->

Trinamic Motion Control GmbH &amp; Co KG

Sternstraße 67

D - 20 357 Hamburg, Germany http://www.trinamic.com

## Table of Contents

1

Features........................................................................................................................................................................... 4

2

3

4

5

6

7

8

9

Life support policy....................................................................................................................................................... 5

Operational Ratings..................................................................................................................................................... 6

3.1

Absolute Maximum Ratings............................................................................................................................. 6

3.2

3.3

Thermal Resistance............................................................................................................................................. 6

Characteristics ...................................................................................................................................................... 7

N-Channel....................................................................................................................................................................... 8

4.1

Electrical Characteristics.................................................................................................................................... 8

4.2

Typical Characteristics........................................................................................................................................ 9

P-Channel...................................................................................................................................................................... 11

5.1

Electrical Characteristics.................................................................................................................................. 11

5.2

Typical Characteristics...................................................................................................................................... 12

Application with TMC239 / TMC249....................................................................................................................... 14

6.1

Example Wiring ................................................................................................................................................. 14

6.2

Example Layout ................................................................................................................................................. 15

Package Outline / Dimensions ............................................................................................................................... 15

Revision History.......................................................................................................................................................... 19

8.1

Documentation Revision................................................................................................................................. 19

References.................................................................................................................................................................... 19

## List of Figures

| Figure 3.1: N-channel Safe Operating Area ................................................................................................................... 7                                                                                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 3.2: P-channel Safe Operating Area.................................................................................................................... 7                                                                                                                                                                              |
| Figure 3.3: Normalized Thermal Transient Impedance, Junction-to-Ambient ..................................................... 7                                                                                                                                                                                                              |
| Figure 3.4: Normalized Thermal Transient Impedance, Junction-to-Case............................................................. 7                                                                                                                                                                                                          |
| Figure 4.1: Output Characteristics (N).............................................................................................................................. 9                                                                                                                                                                       |
| Figure 4.2: Transfer Characteristics (N) ........................................................................................................................... 9                                                                                                                                                                       |
| Figure 4.3: On-Resistance vs. Drain current (N)............................................................................................................ 9                                                                                                                                                                                |
| Figure 4.4: Capacitance (N)................................................................................................................................................. 9                                                                                                                                                               |
| Figure 4.5: Gate Charge (N)................................................................................................................................................ 9                                                                                                                                                                |
| Figure 4.6: On-Resistance vs. Junction Temp. (N)........................................................................................................ 9                                                                                                                                                                                   |
| Figure 4.7: Source-Drain Diode Forward Voltage (N) ...............................................................................................10                                                                                                                                                                                         |
| Figure 4.8: On-Resistance vs. Gate-to-Source Voltage (N) .......................................................................................10                                                                                                                                                                                           |
| Figure 4.9: Threshold Voltage (N)...................................................................................................................................10                                                                                                                                                                       |
| Figure 4.10: Single Pulse Power (N)..............................................................................................................................10                                                                                                                                                                          |
| Figure 5.1: Output Characteristics (P)............................................................................................................................12                                                                                                                                                                         |
| Figure 5.2: Transfer Characteristics (P)..........................................................................................................................12                                                                                                                                                                         |
| 5.3: On-Resistance vs. Drain Current (P)..........................................................................................................12                                                                                                                                                                                         |
| Figure                                                                                                                                                                                                                                                                                                                                       |
| Figure 5.5: Gate Charge (P) ..............................................................................................................................................12                                                                                                                                                                 |
| Figure 5.6: On-Resistance vs. Junction Temp. (P).......................................................................................................12                                                                                                                                                                                    |
| Figure 5.7: Source-Drain Diode Forward Voltage (P)................................................................................................13                                                                                                                                                                                         |
| Figure 5.8: On-Resistance vs. Gate-to-Source Voltage (P)........................................................................................13                                                                                                                                                                                           |
| 5.9: Threshold Voltage                                                                                                                                                                                                                                                                                                                       |
| Figure (P)...................................................................................................................................13                                                                                                                                                                                              |
| Figure 5.10: Single Pulse Power (P) ..............................................................................................................................13                                                                                                                                                                         |
| Figure 6.2: Example Layout in original size on PCB.................................................................................................15                                                                                                                                                                                        |
| Figure 7.1: Package Outline..............................................................................................................................................16                                                                                                                                                                  |
| Figure 7.2: Package Outline..............................................................................................................................................17                                                                                                                                                                  |
| List of Tables Table 1.1: Order codes......................................................................................................................................................... 4                                                                                                                                             |
| Table 3.1: Absolute Maximum Ratings............................................................................................................................ 6 Table 3.2: Thermal Resistance........................................................................................................................................... 6 |
| Table 5.1: Electrical Characteristics, P-Channel...........................................................................................................11                                                                                                                                                                                |
| Table 6.1: Example Layout................................................................................................................................................15                                                                                                                                                                  |
| Table 7.1: Package Dimensions in Millimeters...........................................................................................................16 Table 7.2: Package Dimensions in Inches ...................................................................................................................17                      |
| 8.1: Documentation Revisions .............................................................................................................................19                                                                                                                                                                                 |
| Table                                                                                                                                                                                                                                                                                                                                        |

## 1 Features

Packaged in the low thermal resistance 3.3mm x 3.3mm PowerPAK 1212-8 with low 1.07 mm profile outline this 30V N and P channel Trench MOSFET utilizes a unique structure combining the benefits of low on-resistance with fast switching speed. This makes them ideal for high efficiency, low voltage power management applications, such as stepper motor drivers. Its low gate charge makes it an ideal power driver for the TMC239A and TMC249A family of stepper motor drivers. Using only four of these transistor packages, and the miniaturized TMC239A-LA or TMC249A-LA, a 2A stepper driver can be build in the size of a stamp. Up to 4A peak (2.8A RMS) continuous current are possible.

## SUMMARY

- N-Channel: V (BR)DSS = 30V,

VGS = 10V : R

DS(on) = 0.035 Ω ; I D = 7.7A

VGS = 4.5V: R DS(on) = 0.050 Ω ; I D = 6.5A

- P-Channel: V (BR)DSS = -30V,

VGS = -10V: R

DS(on) = 0.051 Ω ; I D = -6.4A

VGS = -6V : R

DS(on) = 0.075 Ω ; I D = -5.3A

## Applications

- Stepper motor driver stages

## Highlights

- Low on-resistance
- Fast switching speed
- Low threshold
- Low gate drive
- High motor current
- Good thermal characteristics

## Other

- 3.3mm x 3.3mm PowerPAK package
- RoHS compliant

Pinout / Dimensions

<!-- image -->

PowerPAK1212-8

<!-- image -->

Table 1.1: Order codes

| Order code   | Description                                                          |
|--------------|----------------------------------------------------------------------|
| TMC34NP-PSO  | Complementary 30V Enhancement Mode MOSFET in PowerPAK 1212-8 package |

## 2 Life support policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does  not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems  are equipment  intended  to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2007

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.

## 3 Operational Ratings

## 3.1 Absolute Maximum Ratings

T A = 25°C unless otherwise noted

Table 3.1: Absolute Maximum Ratings

<!-- image -->

|            |                                                      | N-Channel   | N-Channel    | P-Channel   | P-Channel    |      |
|------------|------------------------------------------------------|-------------|--------------|-------------|--------------|------|
| Symbol     | Parameter                                            | 10secs      | Steady state | 10secs      | Steady state | Unit |
| V DS       | Drain-source voltage                                 | 30          | 30           | -30         | -30          | V    |
| V GS       | Gate-source voltage                                  | ± 20        | ± 20         | ± 25        | ± 25         | V    |
| I D        | Continuos drain current (a) T A =25°C T A =70°C      | 7.7 4.7     | 5.4 4.3      | -6.4 -5.1   | -4.5 -3.6    | A    |
| I DM       | Pulsed drain current                                 | 25          | 25           | -25         | -25          | A    |
| I S        | Continuous source current (diode) (a)                | 2.6         | 1.3          | -2.6        | -1.3         | A    |
| P D        | Maximum power dissipation (a) T A =25°C T =70°C      | 3.1 2       | 1.6 1.0      | 3.1 3       | 1.6 1.0      | W    |
| T J ,T STG | A Operating junction and storage temperature range   | -55 to 150  | -55 to 150   | -55 to 150  | -55 to 150   | °C   |
|            | Soldering recommendations (peak temperature) (b) (c) | 260         | 260          | 260         | 260          | °C   |

## 3.2 Thermal Resistance

Table 3.2: Thermal Resistance

| Symbol   | Parameter               | Parameter    |   Typical |   Maximum | Unit   |
|----------|-------------------------|--------------|-----------|-----------|--------|
| R THJA   | Junction to ambient (a) | t ≤ 10 sec   |        32 |      40   | °C/W   |
| R THJA   | Junction to ambient (a) | Steady state |        65 |      81   | °C/W   |
| R THJC   | Junction to foot        | Steady state |         5 |       6.3 | °C/W   |

(a) Surface mounted on '1 x 1' FR4 board.

(b) The PowerPAK 1212-8 is a leadless package. The end of the lead terminal is exposed copper (not plated) as a result of the singulation  process  in  manufacturing.  A  solder  fillet  at  the  exposed  copper  tip  cannot  be  guaranteed  and  is  not  required  to ensure adequate bottom side solder interconnection.

(c) Rework conditions: manual soldering with soldering iron is not recommended for leadless components.

## 3.3 Characteristics

T A = 25°C unless otherwise noted

<!-- image -->

## 4 N-Channel

## 4.1 Electrical Characteristics

at T J = 25°C unless otherwise stated

Table 4.1: Electrical Characteristics, N-Channel

| Symbol      | Parameter                            | Min         | Typ         | Max         | Unit        | Conditions                                                |
|-------------|--------------------------------------|-------------|-------------|-------------|-------------|-----------------------------------------------------------|
| STATIC      | STATIC                               | STATIC      | STATIC      | STATIC      | STATIC      | STATIC                                                    |
| I DSS       | Zero gate voltage drain current      |             |             | 1           | µA          | V DS = 30V, V GS = 0V                                     |
| I DSS       | Zero gate voltage drain current      |             |             | 5           | µA          | V DS = 30V, V GS = 0V, T J = 55°C                         |
| I GSS       | Gate-body leakage                    |             |             | ±100        | nA          | V GS = ±20V, V DS = 0V                                    |
| V GS(th)    | Gate-source threshold voltage        | 1.0         |             | 3           | V           | I D = 250µA, V DS = V GS                                  |
| I D(on)     | On-state drain current (a)           | 25          |             |             | A           | V DS ≤ 5V, V GS = 10V                                     |
| R DS(on)    | Drain-source on-state resistance (a) |             | 0.028 0.040 | 0.035 0.050 | Ω           | V GS = 10V, I D = 7.7A V GS = 4.5V, I D = 6.5A            |
| g fs        | Forward transconductance (a)         |             | 15          |             | S           | V DS = 15V, I D = 7.7A                                    |
| V SD        | Diode forward voltage (a)            |             | 0.80        | 1.2         | V           | I S = 1.7A, V GS = 0V                                     |
| DYNAMIC (b) | DYNAMIC (b)                          | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b)                                               |
| Q g         | Total gate charge                    |             | 9           | 14          | nC          | V DS = 15V, V GS = 10V I D = 7.7A                         |
| Q gs        | Gate-source charge                   |             | 2           |             | nC          | V DS = 15V, V GS = 10V I D = 7.7A                         |
| Q gd        | Gate drain charge                    |             | 1.3         |             | nC          | V DS = 15V, V GS = 10V I D = 7.7A                         |
| R G         | Gate resistance                      |             | 3           |             | Ω           |                                                           |
| t d(on)     | Turn-on-delay time                   |             | 10          | 15          | ns          | V DD = 15V, I D = 3A, R L = 5 Ω , R G = 1 Ω , V GEN = 10V |
| t r         | Rise time                            |             | 15          | 25          | ns          | V DD = 15V, I D = 3A, R L = 5 Ω , R G = 1 Ω , V GEN = 10V |
| t d(off)    | Turn-off delay time                  |             | 20          | 30          | ns          | V DD = 15V, I D = 3A, R L = 5 Ω , R G = 1 Ω , V GEN = 10V |
| t f         | Fall time                            |             | 10          | 15          | ns          | V DD = 15V, I D = 3A, R L = 5 Ω , R G = 1 Ω , V GEN = 10V |
| t rr        | Source-drain reverse recovery time   |             | 20          | 40          | ns          | I F = 1.7A, di/dt= 100A/µs                                |

(a) Pulse test; pulse width ≤ 300µs, duty cycle ≤ 2%

(b) Guaranteed by design, not subject to production testing

## 4.2 Typical Characteristics

T A = 25°C unless otherwise noted

<!-- image -->

## T A = 25°C unless otherwise noted

<!-- image -->

## 5 P-Channel

## 5.1 Electrical Characteristics

at T J = 25°C unless otherwise stated

Table 5.1: Electrical Characteristics, P-Channel

| Symbol      | Parameter                            | Min         | Typ         | Max         | Unit        | Conditions                                                   |
|-------------|--------------------------------------|-------------|-------------|-------------|-------------|--------------------------------------------------------------|
| STATIC      | STATIC                               | STATIC      | STATIC      | STATIC      | STATIC      | STATIC                                                       |
| I DSS       | Zero gate voltage drain current      |             |             | -1          | µA          | V DS = -30V, V GS = 0V                                       |
| I DSS       | Zero gate voltage drain current      |             |             | -5          | µA          | V DS = -30V, V GS = 0V, T J = 55°C                           |
| I GSS       | Gate-body leakage                    |             |             | ±200        | nA          | V GS = ±25V, V DS = 0V                                       |
| V GS(th)    | Gate-source threshold voltage        | -1.0        |             | -3          | V           | I D = -250µA, V DS = V GS                                    |
| I D(on)     | On-state drain current (a)           | -25         |             |             | A           | V DS ≥ -5V, V GS = -10V                                      |
| R DS(on)    | Drain-source on-state resistance (a) |             | 0.041 0.055 | 0.051 0.075 | Ω           | V GS = -10V, I D = -6.4A V GS = -6V, I D = -5.3A             |
| g fs        | Forward transconductance (a)         |             | 13          |             | S           | V DS = -15V, I D = 6.4A                                      |
| V SD        | Diode forward voltage (a)            |             | -0.80       | -1.2        | V           | I S = -1.7A, V GS = 0V                                       |
| DYNAMIC (b) | DYNAMIC (b)                          | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b) | DYNAMIC (b)                                                  |
| Q g         | Total gate charge                    |             | 12.5        | 19          | nC          | V DS = -15V, V GS = -10V I D = -6.4A                         |
| Q gs        | Gate-source charge                   |             | 2.5         |             | nC          | V DS = -15V, V GS = -10V I D = -6.4A                         |
| Q gd        | Gate drain charge                    |             | 3.6         |             | nC          | V DS = -15V, V GS = -10V I D = -6.4A                         |
| R G         | Gate resistance                      |             | 9           |             | Ω           |                                                              |
| t d(on)     | Turn-on-delay time                   |             | 10          | 15          | ns          | V DD = -15V, I D = -3A, R L = 5 Ω , R G = 1 Ω , V GEN = -10V |
| t r         | Rise time                            |             | 20          | 30          | ns          | V DD = -15V, I D = -3A, R L = 5 Ω , R G = 1 Ω , V GEN = -10V |
| t d(off)    | Turn-off delay time                  |             | 25          | 40          | ns          | V DD = -15V, I D = -3A, R L = 5 Ω , R G = 1 Ω , V GEN = -10V |
| t f         | Fall time                            |             | 30          | 45          | ns          | V DD = -15V, I D = -3A, R L = 5 Ω , R G = 1 Ω , V GEN = -10V |
| t rr        | Source-drain reverse recovery time   |             | 25          | 50          | ns          | I F =-1.7A, di/dt= 100A/µs                                   |

(a) Pulse test; pulse width ≤ 300µs, duty cycle ≤ 2%

(b) Guaranteed by design, not subject to production testing

## 5.2 Typical Characteristics

T A = 25°C unless otherwise noted

<!-- image -->

## T A = 25°C unless otherwise noted

<!-- image -->

## 6 Application with TMC239 / TMC249

## 6.1 Example Wiring

Example wiring with four TMC34NP-PSO and a TMC239. Sense resistors shown are selected for 3.09A peak  current  (2.2A  RMS).  The  Schottky  diodes  are  ZHCS1000  or  MSS1P3  types.  (Power  supply  filter capacitors not shown.)

Figure 6.1: Example wiring with a TMC239

<!-- image -->

## 6.2 Example Layout

Table 6.1 shows an example layout for four TMC34NP-PSO with a TMC249A-LA driver chip. Original size of this layout on a PCB is about 29x25mm, see Figure 6.2. Current capability with is 4A peak (2.8A RMS).

Table 6.1: Example Layout

<!-- image -->

Figure 6.2: Example Layout in original size on PCB

<!-- image -->

Please refer to the evaluation board manual / website for more details.

## 7 Package Outline / Dimensions

Table 7.1: Package label

| 7501   | Base part id number   |
|--------|-----------------------|
| LL     | Lot code              |
| T      | Assembly factory code |
| Y      | Year code             |
| W      | Week code             |
| F      | Wafer fab code        |
| •      | Pin 1 indicator       |
|        | ESD symbol            |

<!-- image -->

## PowerPAK 1212 Package Outline (3.3mm x 3.3mm)

Figure 7.1: Package Outline

<!-- image -->

Table 7.2: Package Dimensions in Millimeters

| DIM    | Millimeters   | Millimeters   | Millimeters   | DIM    | Millimeters   | Millimeters   | Millimeters   |
|--------|---------------|---------------|---------------|--------|---------------|---------------|---------------|
| DIM    | Min           | Nom           | Max           | DIM    | Min           | Nom           | Max           |
| A      | 0.97          | 1.04          | 1.12          | E2     | 1.47          | 1.60          | 1.73          |
| A1     | 0             | -             | 0.05          | E3 (a) | 1.75          | 1.85          | 1.98          |
| b      | 0.23          | 0.30          | 0.41          | e (b)  | 0.65 BSC      | 0.65 BSC      | 0.65 BSC      |
| c      | 0.23          | 0.28          | 0.33          | K      | 0.64          | -             | -             |
| D      | 3.20          | 3.30          | 3.40          | K1     | 0.35          | -             | -             |
| D1     | 2.95          | 3.05          | 3.15          | H      | 0.30          | 0.41          | 0.51          |
| D2     | 1.98          | 2.11          | 2.24          | L      | 0.30          | 0.43          | 0.56          |
| D3     | 0.48          | -             | 0.89          | L1     | 0.06          | 0.13          | 0.20          |
| D4 (a) | -             | -             | 0.71          | Θ      | 0°            | -             | 12°           |
| E      | 3.20          | 3.30          | 3.40          | W (a)  | 0.15          | 0.25          | 0.36          |
| E1     | 2.95          | 3.05          | 3.15          | M (a)  | -             | -             | 0.23          |

(a) Dimensions exclusive of mold flash and cutting burrs

(b) Dimensions exclusive of mold gate burrs

## PowerPAK 1212 Package Outline (0.13inch x 0.13 inch)

Figure 7.2: Package Outline

<!-- image -->

Table 7.3: Package Dimensions in Inches

| DIM    | Inches   | Inches   | Inches   | DIM    | Inches    | Inches    | Inches    |
|--------|----------|----------|----------|--------|-----------|-----------|-----------|
| DIM    | Min      | Nom      | Max      | DIM    | Min       | Nom       | Max       |
| A      | 0.038    | 0.041    | 0.044    | E2     | 0.058     | 0.063     | 0.068     |
| A1     | 0        | -        | 0.002    | E3 (a) | 0.069     | 0.073     | 0.078     |
| b      | 0.009    | 0.012    | 0.016    | e (b)  | 0.026 BSC | 0.026 BSC | 0.026 BSC |
| c      | 0.009    | 0.011    | 0.013    | K      | 0.025     | -         | -         |
| D      | 0.126    | 0.130    | 0.134    | K1     | 0.014     | -         | -         |
| D1     | 0.116    | 0.120    | 0.124    | H      | 0.012     | 0.016     | 0.020     |
| D2     | 0.078    | 0.083    | 0.088    | L      | 0.012     | 0.017     | 0.022     |
| D3     | 0.019    | -        | 0.035    | L1     | 0.002     | 0.005     | 0.008     |
| D4 (a) | -        | -        | 0.028    | Θ      | 0°        | -         | 12°       |
| E      | 0.126    | 0.130    | 0.134    | W (a)  | 0.006     | 0.010     | 0.014     |
| E1     | 0.116    | 0.120    | 0.124    | M (a)  | -         | -         | 0.009     |

(a) Dimensions exclusive of mold flash and cutting burrs

(b) Dimensions exclusive of mold gate burrs

## 8 Solder profile

| CLASSIFICATION REFLOW PROFILES (IPC/JEDEC J-STD-020C)                           | CLASSIFICATION REFLOW PROFILES (IPC/JEDEC J-STD-020C)                                                 | CLASSIFICATION REFLOW PROFILES (IPC/JEDEC J-STD-020C)                                                 | CLASSIFICATION REFLOW PROFILES (IPC/JEDEC J-STD-020C)   |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
|                                                                                 | Sn-PbEutecticAssembly                                                                                 | Sn-PbEutecticAssembly                                                                                 | Pb-Free Assembly                                        |
| Profile Feature                                                                 | Large Body                                                                                            | Small Body                                                                                            | All Packages                                            |
| Reflow Conditions Averageramp-uprate (TL to Tp)                                 | Pkg.Thickness≥2.5mm or Pkg.Thickness<2.5mmand Pkg.Volume ≥ 350 mm3 Pkg.Volume<350mm3 3 °C/second max. | Pkg.Thickness≥2.5mm or Pkg.Thickness<2.5mmand Pkg.Volume ≥ 350 mm3 Pkg.Volume<350mm3 3 °C/second max. | 3°C/second max.                                         |
| Preheat ·Temperature Min.(Tsmin) ·TemperatureMax.(Tsmax) ·Time (min to max)(ts) | 100°℃ 150°C 60-120 seconds                                                                            | 100°℃ 150°C 60-120 seconds                                                                            | 150°C 200°℃ 60-180 seconds                              |
| Timemaintained above: ·Temperature (TL) ，Time (tL)                              | 183°℃ 60-150 seconds                                                                                  | 183°℃ 60-150 seconds                                                                                  | 217°C 60-150 seconds                                    |
| PeakTemperature(Tp)                                                             | 225+0/-5°℃                                                                                            | 240+0/-5°℃                                                                                            | 260+0/-5°C                                              |
| Timewithin5°CofactualPeak Temperature (tp)                                      | 10-30 seconds                                                                                         | 10-30 seconds                                                                                         | 20-40 seconds                                           |
| Ramp-down Rate                                                                  | 6 °C/second max.                                                                                      | 6 °C/second max.                                                                                      | 6°C/second max.                                         |
| Time25°CtoPeakTemperature（t 25 °Cto Peak)                                       | 6 minutes max.                                                                                        | 6 minutes max.                                                                                        | 8 minutes max.                                          |

NOTE:Alltemperaturesrefertotopsideof thepackage,measuredonthepackagebodysurface.

Table 8.1: Soldering profile

<!-- image -->

Definitions of ClassificationReflowProfiles asGiven in the aboveTable

Figure 8.1: Soldering profile

## 9 Revision History

## 9.1 Documentation Revision

Table 9.1: Documentation Revisions

|   Version | Comment     | Author   | Description                                                                       |
|-----------|-------------|----------|-----------------------------------------------------------------------------------|
|      1    | 26-Jul-2007 | HC       | Initial Version                                                                   |
|      1.01 | 15-Aug-2007 | HC       | Added note that ambient temp is 25°C unless otherwise noted and soldering profile |

## 10 References

[TMC239] [TMC249]

Microstep driver manual (see http://www.trinamic.com) Microstep driver manual, with StallGuard (see http://www.trinamic.com)