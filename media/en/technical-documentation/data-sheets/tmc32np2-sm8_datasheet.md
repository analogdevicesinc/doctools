<!-- lastmod 2023-09-13 -->
## TMC32NP2-SM8 Manual

## Complementary 30V Enhancement Mode MOSFET H-Bridge For use with e.g. TMC239 or TMC249

<!-- image -->

Version: 1.02 11 April 2007

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
|                     | 6.1 Example Wiring .................................................................................................................................................14                |
| 6.2                 | DC motor control with TMC239 and TMC32NP2-SM8..............................................................................14                                                         |
| 6.3                 | Example Layout .................................................................................................................................................16                    |
| 7                   | Package Outline / Dimensions ...............................................................................................................................17                        |
| 8                   | Revision History..........................................................................................................................................................18          |
|                     | 8.1 Documentation Revision.................................................................................................................................18                         |
| 9                   | References....................................................................................................................................................................18      |

## List of Figures

| Figure 3.2: P-channel Safe Operating Area.................................................................................................................... 7                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 3.3: Transient Thermal Impedance..................................................................................................................... 7                                                                                                                                                                                                                                                                                                                    |
| Figure 3.4: Derating Curve.................................................................................................................................................. 7                                                                                                                                                                                                                                                                                                    |
| Figure 3.5: Pulse Power Dissipation................................................................................................................................ 7                                                                                                                                                                                                                                                                                                             |
| Figure 4.1: Output Characteristics (N).............................................................................................................................. 9                                                                                                                                                                                                                                                                                                            |
| Figure 4.2: Output Characteristics (N).............................................................................................................................. 9                                                                                                                                                                                                                                                                                                            |
| Figure 4.3: Typical Transfer Characteristics (N)............................................................................................................. 9                                                                                                                                                                                                                                                                                                                   |
| Figure 4.4: Normalized Curves v Temperature (N)....................................................................................................... 9                                                                                                                                                                                                                                                                                                                          |
| Figure 4.5: On-Resistance v Drain Current (N) .............................................................................................................. 9                                                                                                                                                                                                                                                                                                                    |
| Figure 4.6: Source-Drain Diode Forward Voltage (N) ................................................................................................. 9                                                                                                                                                                                                                                                                                                                            |
| Figure 4.7: Capacity v Drain-Source Voltage (N) ........................................................................................................10                                                                                                                                                                                                                                                                                                                        |
| Figure 4.8: Gate-Source Voltage v Gate Charge (N) ..................................................................................................10                                                                                                                                                                                                                                                                                                                            |
| Figure 4.9: Basic Gate Charge Waveform (N)..............................................................................................................10                                                                                                                                                                                                                                                                                                                        |
| 4.10: Gate Charge Test Circuit (N) .....................................................................................................................10                                                                                                                                                                                                                                                                                                                        |
| Figure                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Figure 4.12: Switching Time Test Circuit (N)...............................................................................................................10                                                                                                                                                                                                                                                                                                                     |
| 5.1: Output Characteristics (P)............................................................................................................................12                                                                                                                                                                                                                                                                                                                     |
| Figure                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Figure 5.2: Output Characteristics (P)............................................................................................................................12                                                                                                                                                                                                                                                                                                              |
| Figure 5.3: Typical Transfer Characteristics (P) ...........................................................................................................12 Figure 5.4: Normalized Curves v Temperature (P).....................................................................................................12                                                                                                                                                             |
| Figure 5.5: On-Resistance v Drain Current (P).............................................................................................................12                                                                                                                                                                                                                                                                                                                      |
| Figure 5.6: Source-Drain Diode Forward Voltage (P)................................................................................................12                                                                                                                                                                                                                                                                                                                              |
| Figure 5.7: Capacity v Drain-Source Voltage (P).........................................................................................................13                                                                                                                                                                                                                                                                                                                        |
| Figure 5.8: Gate-Source Voltage v Gate Charge (P)...................................................................................................13                                                                                                                                                                                                                                                                                                                            |
| Figure 5.9: Basic Gate Charge Waveform (P) ..............................................................................................................13                                                                                                                                                                                                                                                                                                                       |
| Figure 5.10: Gate Charge Test Circuit                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| (P)......................................................................................................................13                                                                                                                                                                                                                                                                                                                                                       |
| Figure 5.11: Switching Time Waveforms (P)...............................................................................................................13 Figure 5.12: Switching Time Test Circuit (P) ...............................................................................................................13                                                                                                                                                         |
| Figure 6.1: Example wiring with a TMC239.................................................................................................................14                                                                                                                                                                                                                                                                                                                       |
| Figure 6.3: Microcontroller PWM and DC motor PWM.............................................................................................15 Figure 6.4: Example Layout in original size on PCB.................................................................................................16 Figure 7.1: Package Outline..............................................................................................................................................17 |
| List of Tables                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Table 1.1: Order codes.........................................................................................................................................................                                                                                                                                                                                                                                                                                                   |
| 4 Table 3.1: Absolute Maximum Ratings............................................................................................................................ 6                                                                                                                                                                                                                                                                                                               |
| Table 7.1: Package Dimensions.......................................................................................................................................17                                                                                                                                                                                                                                                                                                            |
| 8.1: Documentation Revisions .............................................................................................................................18                                                                                                                                                                                                                                                                                                                      |
| Table                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## 1 Features

This new generation of trench MOSFETs utilizes a unique structure that combines the benefits of low on-resistance with fast switching speed. Their unique high density four device package makes them ideal for high efficiency, low voltage, power management applications such as stepper motor drivers or DC motor drivers, using only a single package. Its low gate charge makes it an ideal power driver for  the  TMC239A  and  TMC249A family of stepper motor drivers. Using only two of these transistor packages, and the miniaturized TMC239A-LA or TMC249A-LA, a 1.5A (continuously) / 2.5A (current for 5 seconds) stepper driver can be build in the size of a stamp, using only three inexpensive devices.

## SUMMARY

- N-Channel = V (BR)DSS = 30V : R DS(on) = 0.12 ; I D = 3.1A
- P-Channel = V (BR)DSS = -30V : R DS(on) = 0.21 ; I D = -2.3A

## Applications

- Single phase stepper motor driver stage

## Highlights

- Low on-resistance
- Fast switching speed
- Low threshold
- Low gate drive

## Other

- Single SM-8 surface mount package
- RoHS compliant

Table 1.1: Order codes

<!-- image -->

| Order code   | Description                                        |
|--------------|----------------------------------------------------|
| TMC32NP2-SM8 | Complementary 30V Enhancement Mode MOSFET H-Bridge |

## 2 Life support policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does  not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems  are equipment  intended  to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2007

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.

## 3 Operational Ratings

## 3.1 Absolute Maximum Ratings

Table 3.1: Absolute Maximum Ratings

| Symbol      | Parameter                                                                                                               | N-Channel   | P-Channel      | Unit    |
|-------------|-------------------------------------------------------------------------------------------------------------------------|-------------|----------------|---------|
| V DSS       | Drain-source voltage                                                                                                    | 30          | -30            | V       |
| V GS        | Gate-source voltage                                                                                                     | ±20         | ±20            | V       |
| I D         | Continuos drain current (V GS = 10V; T A =25°C) (a) (d) (V GS = 10V; T A =25°C) (b) (d) (V GS = 10V; T A =70°C) (b) (d) | 2.7 3.1 2.5 | -2.0 -2.3 -1.8 | A       |
| I DM        | Pulsed drain current (c)                                                                                                | 14.5        | -10.8          | A       |
| I S         | Continuous source current (body diode) (b)                                                                              | 2.3         | -2.2           | A       |
| I SM        | Pulsed source current (body diode) (c)                                                                                  | 14.5        | -10.8          | A       |
| P D         | Power dissipation at T A =25°C (a) (d) Linear derating factor                                                           | 1.3 10.4    | 1.3 10.4       | W mW/°C |
| P D         | Power dissipation at T A =25°C (b) (d) Linear derating factor                                                           | 1.7 13.6    | 1.7 13.6       | W mW/°C |
| T j , T stg | Operating and storage temperature range                                                                                 | -55 … +150  | -55 … +150     | °C      |

## 3.2 Thermal Resistance

Table 3.2: Thermal Resistance

| Symbol        | Parameter                   |   Value | Unit   |
|---------------|-----------------------------|---------|--------|
| R GLYPH<31>JA | Junction to ambient (a) (d) |      96 | °C/W   |
| R GLYPH<31>JA | Junction to ambient (b) (d) |      73 | °C/W   |

(a)  For a device surface mounted on 50mm x 50mm x 1.6mm FR4 PCB with high coverage of single sided 70µm copper, in still air conditions.

(b) For a device surface mounted on FR4 PCB measured at t ≤ 10 sec.

(c) Repetitive rating on 50mm x 50mm x 1.6mm FR4, D = 0.02, pulse width 300µS - pulse width limited by maximum junction temperature. Refer to transient thermal impedance graph.

(d) For device with one active die.

## 3.3 Characteristics

<!-- image -->

## 4 N-Channel

## 4.1 Electrical Characteristics

at T amb = 25°C unless otherwise stated

| Symbol             | Parameter                                   | Min                | Typ                | Max                | Unit               | Conditions                                      |
|--------------------|---------------------------------------------|--------------------|--------------------|--------------------|--------------------|-------------------------------------------------|
| STATIC             | STATIC                                      | STATIC             | STATIC             | STATIC             | STATIC             | STATIC                                          |
| V (BR)DSS          | Drain-source breakdown voltage              | 30                 |                    |                    | V                  | I D = 250µA, V GS = 0V                          |
| I DSS              | Zero gate voltage drain current             |                    |                    | 1.0                | µA                 | V DS = 30V, V GS = 0V                           |
| I GSS              | Gate-body leakage                           |                    |                    | 100                | nA                 | V GS = ±20V, V DS = 0V                          |
| V GS(th)           | Gate-source threshold voltage               | 1.0                |                    | 3.0                | V                  | I D = 250µA, V DS = V GS                        |
| R DS(on)           | Static drain-source on-state resistance (1) |                    |                    | 0.12 0.18          | Ω Ω                | V GS = 10V, I D = 2.5A V GS = 4.5V, I D = 2.0A  |
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
| Q g                | Total gate charge                           |                    | 3.9                |                    | nC                 | V DS = 15V, V GS = 10V I D = 2.5A               |
| Q gs               | Gate-source charge                          |                    | 0.6                |                    | nC                 | V DS = 15V, V GS = 10V I D = 2.5A               |
| Q gd               | Gate drain charge                           |                    | 0.9                |                    | nC                 | V DS = 15V, V GS = 10V I D = 2.5A               |
| SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                          | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                              |
| V SD               | Diode forward voltage (1)                   |                    |                    | 0.95               | V                  | T j = 25°C, I S = 1.7A, V GS = 0V               |
| t rr               | Reverse recovery time (3)                   |                    | 17.7               |                    | ns                 | T j = 25°C, I S = 2.5A, di/dt = 100A/µs         |
| Q rr               | Reverse recovery charge (3)                 |                    | 13.0               |                    | nC                 | T j = 25°C, I S = 2.5A, di/dt = 100A/µs         |

Table 4.1: Electrical Characteristics, N-Channel

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
| V GS(th)           | Gate-source threshold voltage               | -1.0               |                    | -3.0               | V                  | I D = -250µA, V DS = V GS                          |
| R DS(on)           | Static drain-source on-state resistance (1) |                    |                    | 0.21 0.33          | Ω Ω                | V GS = -10V, I D = -1.4A V GS = -4.5V, I D = -1.1A |
| g fs               | Forward transconductance (1) (3)            |                    | 2.5                |                    | S                  | V DS = -15V, I D = 1.4A                            |
| DYNAMIC (3)        | DYNAMIC (3)                                 | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)        | DYNAMIC (3)                                        |
| C iss              | Input capacitance                           |                    | 204                |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| C oss              | Output capacitance                          |                    | 39.8               |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| C rss              | Reverse transfer capacitance                |                    | 25.8               |                    | pF                 | V DS = -15V, V GS = 0V F = 1MHz                    |
| SWITCHING (2) (3)  | SWITCHING (2) (3)                           | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)  | SWITCHING (2) (3)                                  |
| t d(on)            | Turn-on-delay time                          |                    | 1.2                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V    |
| t r                | Rise time                                   |                    | 2.3                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V    |
| t d(off)           | Turn-off delay time                         |                    | 12.1               |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V    |
| t f                | Fall time                                   |                    | 7.5                |                    | ns                 | V DD = 15V, I D = 2.5A R G = 6.0 Ω , V GS = 10V    |
|                    | Total gate charge                           |                    | 2.6                |                    | nC                 | V DS = -15V, V GS = -5V I D = -1.4A                |
| Q g                | Total gate charge                           |                    | 5.2                |                    | nC                 | V DS = -15V, V GS = -10V I = -1.4A                 |
| Q gs               | Gate-source charge                          |                    | 0.7                |                    | nC                 | V DS = -15V, V GS = -10V I = -1.4A                 |
| Q gd               | Gate drain charge                           |                    | 0.9                |                    | nC                 | V DS = -15V, V GS = -10V I = -1.4A                 |
| SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                          | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE | SOURCE-DRAIN-DIODE                                 |
| V SD               | Diode forward voltage (1)                   |                    | -0.85              | -0.95              | V                  | T j = 25°C, I S = -1.1A, V GS = 0V                 |
| t rr               | Reverse recovery time (3)                   |                    | 19                 |                    | ns                 | T j = 25°C, I S = -0.95A, di/dt = 100A/µs          |
| Q rr               | Reverse recovery charge (3)                 |                    | 15                 |                    | nC                 | T j = 25°C, I S = -0.95A, di/dt = 100A/µs          |

(1) Measured under pulsed conditions. Pulse width ≤ 300 \_ s; duty cycle ≤ 2%.

(2) Switching characteristics are independent of operating junction temperature.

(3) For design aid only, not subject to production testing.

## 5.2 Typical Characteristics

<!-- image -->

<!-- image -->

## 6 Application with TMC239 / TMC249

## 6.1 Example Wiring

Example wiring with two TMC32NP2-SM8 and a TMC239. (Power supply capacitors not shown.)

Figure 6.1: Example wiring with a TMC239

<!-- image -->

## 6.2 DC motor control with TMC239 and TMC32NP2-SM8

The TMC239 uses a constant current chopper principle, which is optimum for driving stepper motors. When operating DC motors with constant current, they provide a roughly constant torque. This in other words means, that velocity is very dependent upon mechanical load on the motor. Normally a velocity  control  is  desired,  with  a  torque  limit  as  an  add  on.  The  TMC239  can  do  both!  All  of  its advanced protection and diagnostic features can be used. One TMC239 can control two DC motors!

This solution uses the SPI interface of the TMC239 and allows full access to all of its features (Figure 6.2). The CPU provides three PWM signals to the TMC239: It directly controls the chopper clock (OSC) and uses INA / INB to provide a PWM signal for motor 1 and motor 2 (please keep in mind that the voltage for INA / INB should not be higher than 3V). The chopper clock can be in a range of a few kilo Hertz to a few ten kHz.

The PWM signal for motor 1 is related to the rising edge of the OSC pin (see Figure 6.3), while the PWM signal for motor 2 (if used) is related to the falling edge. The motor chopper is on, beginning from its related OSC edge until the processor switches the related INA / INB input to low. Required low time for INA / INB is 3µs or more. INA / INB shall return to high latest at the next related OSC edge. The resulting chopper on time controls the motor velocity. Please never let the OSC pin PWM output tri-stated. Provide a 10K pullup if this can not be guaranteed.

The  motor  torque  is  controlled  by  the  current  setting.  The  current  calculation  is  identical  as  for  a stepper motor: It is given via the digital current control bits in combination with the sense resistors and  the  INA  /  INB  voltage  divider  control.  You  can  try  with  slow  or  mixed  decay  setting  for  this mode. The motor direction is controlled by the SPI PHA / PHB bits. The motor can be stopped by programming the related DAC bits to zero. The three required PWM signals can be generated via a microcontroller with capture / compare unit, or using a single shot timer and interrupt operation.

This chopper scheme is the standard for DC motors. The TMC239 adds torque control and protection and diagnostic features.

<!-- image -->

Figure 6.2: Example wiring for DC motor control with PWM using one TMC32NP2 per motor

<!-- image -->

The waves show motor 1 PWM operating with 25% duty cycle and motor 2 PWM operating with 38% duty cycle.

Figure 6.3: Microcontroller PWM and DC motor PWM

## 6.3 Example Layout

Table 6.1 shows an 2 layer example layout for two TMC32NP2-SM8 with a TMC249ASA driver chip. Original size of this layout on a PCB is about 24x24mm, see Figure 6.4. Current capability is 1.5A peak (1.1A RMS) respectively 2.5A peak (1.8A RMS) with limited duty cycle.

Figure 6.4: Example in original size on PCB

<!-- image -->

Table 6.1: Example Layout

Please refer to the evaluation board manual / website for more details.

<!-- image -->

## 7 Package Outline / Dimensions

Single SM-8 surface mount package

Figure 7.1: Package Outline

<!-- image -->

Controlling dimensions are in millimeters. Approximate conversions are given in inches.

Table 7.1: Package Dimensions

| DIM   | Millimeters   | Millimeters   | Millimeters   | Inches   | Inches   | Inches   | DIM       | Millimeters   | Millimeters   | Millimeters   | Inches   | Inches   | Inches   |
|-------|---------------|---------------|---------------|----------|----------|----------|-----------|---------------|---------------|---------------|----------|----------|----------|
| DIM   | Min           | Max           | Typ.          | Min      | Max      | Typ.     | DIM       | Min           | Max           | Typ.          | Min      | Max      | Typ.     |
| A     | -             | 1.7           | -             | -        | 0.067    | -        | e1        | -             | -             | 4.59          | -        | -        | 0.1807   |
| A1    | 0.02          | 0.1           | -             | 0.008    | 0.004    | 0.0275   | e2        | -             | -             | 1.53          | -        | -        | 0.0602   |
| b     | -             | -             | 0.7           | -        | -        | -        | He        | 6.7           | 7.3           | -             | 0.264    | 0.287    | -        |
| c     | 0.24          | 0.32          | -             | 0.009    | 0.013    | -        | Lp        | 0.9           | -             | -             | 0.035    | -        | -        |
| D     | 6.3           | 6.7           | -             | 0.248    | 0.264    | -        | GLYPH<31> | -             | 15°           | -             | -        | 15°      | -        |
| E     | 3.3           | 3.7           | -             | 0.130    | 0.145    | -        | GLYPH<31> | -             | -             | 10°           | -        | -        | 10°      |

## 8 Revision History

## 8.1 Documentation Revision

Table 8.1: Documentation Revisions

|   Version | Comment     | Author   | Description                  |
|-----------|-------------|----------|------------------------------|
|      1    | 16-Mar-2007 | HC       | Initial Version              |
|      1.01 | 4-Apr-2007  | HC       | DC motor application added   |
|      1.02 | 11-Apr-2007 | HC       | Example Layout added         |
|      1.03 | 16-Aug-07   | DW       | Corrected DC motor schematic |

## 9 References

| [TMC239]   | Microstep driver manual (see http://www.trinamic.com)                  |
|------------|------------------------------------------------------------------------|
| [TMC249]   | Microstep driver manual, with StallGuard (see http://www.trinamic.com) |