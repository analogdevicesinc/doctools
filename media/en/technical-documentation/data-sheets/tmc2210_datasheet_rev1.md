<!-- lastmod 2023-08-03 -->
<!-- image -->

TMC2210

## General Description

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

- 3D Printers, ID Printers/Card Printers

The TMC2210 is a high-performance stepper motor driver IC  with  configuration  options  through  package  pins  and additional diagnostic outputs.

It combines industries' most advanced stepper motor driver based on the 256 microsteps, built-in indexer and two fully integrated 36V, 3.0A MAX  H-Bridges plus non-dissipative integrated current sensing (ICS).

ADI-Trinamic's StealthChop2 chopper ensures absolutely noiseless  operation  combined  with  maximum  efficiency and best motor torque.

High integration, high energy efficiency, and a small form factor enable miniaturized and scalable systems for costeffective solutions while giving best in class performance.

The H-Bridge FETs have very low impedance resulting in high  driving  efficiency  and  minimal  heat  generated.  The typical total R ON  (high side + low side) is 0.23Ω.

The  integrated  Overcurrent  Protection  (OCP)  adapts  to the selected motor current range.

The  maximum  RMS  current  per  H-Bridge  is  I RMS = 2.1A RMS   at  room  temperature,  assuming  a  four-layer PCB.

Since this current is limited by thermal considerations, the actual maximum RMS current would depend on the thermal characteristics of the application (PCB ground planes, heatsinks, ventilation, etc.).

The maximum full-scale current per H-Bridge is I FS  = 3.0A and can be set by an external resistor connected to I REF . This current is defined as the maximum current setting of the embedded current drive regulation circuit.

The  non-dissipative  ICS  eliminates  the  bulky  external power resistors resulting in a dramatic space and power saving compared to mainstream applications based on external sense resistor.

The TMC2210 features diagnostic outputs and protections such as short protection/OCP, thermal shutdown, and undervoltage lockout (UVLO).

During thermal shutdown and UVLO events, the driver is disabled.

The TMC2210 is available in a small TQFN32 5mm x 5mm package  and  a  thermally  optimized  TSSOP38  9.7mm  x 4.4mm with exposed pad.

## Applications

- Textile, Sewing Machines, Knitting Machines

Ordering Information appears at end of data sheet.

- Office Automation, Printers, Scanners, Copy Machines
- Automated Teller Machine (ATM), Cash Recycler, Bill Validators, Cash Machines
- Point-of-Sale (POS) Equipment
- Pumps and Valve Control

## Benefits and Features

- Voltage Range 4.5V to 36V DC
- Low R DS(ON)  (HS + LS): 230mΩ Typical (T A  = 25°C)
- Current Ratings per H-Bridge (Typical at 25°C):
- I MAX = 5.0A  (Bridge Peak Current)
- I RMS = 2.1A RMS  (3A Sine Wave Peak)
- Fully Integrated Lossless Current Sensing
- Step/Direction (S/D) Interface with MicroPlyer Step Interpolation
- Highest Resolution 256 Microsteps per Full Step
- StealthChop2 Silent Motor Operation
- SpreadCycle Highly Dynamic Current Control
- Full Protection and Diagnostics
- Overvoltage Protection Output
-  Compact 5mm x 5mm TQFN32 Package or 9.7mm x 4.4mm TSSOP38

19-101595D; Rev 2; 4/24

© 2024 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Simplified Block Diagram

<!-- image -->

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

| TABLE OF CONTENTS                                                                | TABLE OF CONTENTS   |
|----------------------------------------------------------------------------------|---------------------|
| General Description. . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . . 1               |
| Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . 1               |
| Benefits and Features . . . . . . . . . . . . . . . . . . . . . . . . . .        | . . 1               |
| Simplified Block Diagram . . . . . . . . . . . . . . . . . . . . . . .           | . . 2               |
| Absolute Maximum Ratings. . . . . . . . . . . . . . . . . . . . . .              | . . 7               |
| Package Information . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . . 7               |
| TQFN32 5mm x 5mm. . . . . . . . . . . . . . . . . . . . . . . .                  | . . 7               |
| TSSOP38 9.7mm x 4.4mm EP. . . . . . . . . . . . . . . . .                        | . . 7               |
| Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . .         | . . 7               |
| Pin Configurations . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | . 11                |
| TMC2210 TQFN Pin Configuration . . . . . . . . . . . . .                         | . 11                |
| TMC2210 TSSOP Pin Configuration . . . . . . . . . . . .                          | . 11                |
| Pin Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    | . 12                |
| Functional Diagrams . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 14                |
| TMC2210 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 14                |
| Detailed Description . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . 15                |
| Pin-Configurable Step and Direction Driver . . . . . . .                         | . 15                |
| Step/Direction Interface . . . . . . . . . . . . . . . . . . . . . .             | . 16                |
| Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | . 16                |
| MicroPlyer Step Interpolator and Standstill Detection.                           | . 17                |
| Pin Configuration Options . . . . . . . . . . . . . . . . . . . .                | . 18                |
| StealthChop2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | . 19                |
| SpreadCycle. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | . 19                |
| Integrated Current Sense. . . . . . . . . . . . . . . . . . . . .                | . 21                |
| Setting the Full Scale Current Range . . . . . . . . .                           | . 21                |
| Diagnostic Outputs. . . . . . . . . . . . . . . . . . . . . . . . . .            | . 22                |
| External Reset, Sleep Mode, and Bridge Three State                               | . 23                |
| Protections and Driver Diagnostics . . . . . . . . . . . . .                     | . 23                |
| Overcurrent Protection . . . . . . . . . . . . . . . . . . . .                   | . 23                |
| Thermal Protection and Shutdown . . . . . . . . . . .                            | . 24                |
| Overvoltage Protection and Pin OV . . . . . . . . . .                            | . 24                |
| Short to GND Protection . . . . . . . . . . . . . . . . . . .                    | . 25                |
| Undervoltage Lockout Protection . . . . . . . . . . . .                          | . 25                |
| ESD Protections . . . . . . . . . . . . . . . . . . . . . . . . .                | . 25                |
| Typical Application Circuits . . . . . . . . . . . . . . . . . . . . . .         | . 26                |
| Standard Application Circuit . . . . . . . . . . . . . . . . . . .               | . 26 26             |
| High Motor Current. . . . . . . . . . . . . . . . . . . . . . . . . .            | .                   |
| Driver Protection and EME Circuitry. . . . . . . . . . . . .                     | . 26                |
| Ordering Information . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . 28                |

| TABLE OF CONTENTS (CONTINUED)   |   TABLE OF CONTENTS (CONTINUED) |
|---------------------------------|---------------------------------|
| Revision History                |                              29 |

TMC2210

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

| LIST OF FIGURES                                                                                                                         |   LIST OF FIGURES |
|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| Figure 1. Block Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |                14 |
| Figure 2. Block Diagram with Typical External Components . . . . . . . . . . . . . . . . . . . . . . . . . . . .                        |                16 |
| Figure 3. STEP/DIR Signal Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        |                17 |
| Figure 4. STEP/DIR Signal Internal Input Filter Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 |                17 |
| Figure 5. MicroPlyer Microstep Interpolation with Rising STEP Frequency (Example: 16 to 256)                                            |                18 |
| Figure 6. SpreadCycle Chopper Decay Phases . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  |                20 |
| Figure 7. Phase Current Profile During one SpreadCycle Chopper Cycle . . . . . . . . . . . . . . . . . .                                |                20 |
| Figure 8. Diagnostic Outputs INDEX and ERROR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    |                22 |
| Figure 9. Index Signal Pulse at Positive Zero Transition of the Coil B Microstep Wave . . . . . . . .                                   |                23 |
| Figure 10. Brake Chopper Circuit Example. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             |                25 |
| Figure 11. Standard Application Circuit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        |                26 |
| Figure 12. Simple ESD Enhancement. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            |                27 |
| Figure 13. Extended Motor Output Protection. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              |                28 |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

| LIST OF TABLES                                                                                                                                                     |   LIST OF TABLES |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Table 1. TMC2210 Advanced Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |               15 |
| Table 2. Microstep Resolution Configuration for the Step Input . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               |               18 |
| Table 3. Run Current (IRUN) Configuration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      |               18 |
| Table 4. Digital Current Scale Configuration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   |               18 |
| Table 5. Chopper Mode Selection. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |               19 |
| Table 6. Hold Current (IHOLD) Reduction Configuration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              |               19 |
| Table 7. StealthChop2 PWM Frequency. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |               19 |
| Table 8. SpreadCycle Parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  |               21 |
| Table 9. I FS Full Scale Current Range Settings (Example for R REF = 12KΩ) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         |               21 |
| Table 10. IFS Full Scale RMS Current in Ampere (A RMS) based on CFG2/CFG3 Pin Settings and different R . .                                                         |               21 |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Absolute Maximum Ratings

| V S to GND................................................................ -0.3V to 41V   |
|-------------------------------------------------------------------------------------------|
| V DD1V8 to GND...............................-0.3V to min (2.2, V S + 0.3)V               |
| AGND to GND....................................................... -0.3V to +0.3V         |
| OUT1A, OUT2A, OUT1B, OUT2B...................-0.3V to V S + 0.3V                          |
| V CP to GND.................................. V S - 0.3V to min (44, V S + 6)V            |
| CPO to GND................................. V S - 0.3V to min (44, V S + 6)V              |
| CPI to GND.......................................-0.3V to min (41, V S + 0.3)V            |
| SLEEPN to GND.............................................-0.3V to V S + 0.3V             |

| IREF to GND........................... -0.3V to min (2.2, V DD1V8 + 0.3)V               |
|-----------------------------------------------------------------------------------------|
| V CC_IO to GND........................................................ -0.3V to 5.5V    |
| Logic Input/Output Voltage to GND.........-0.3V to V CC_IO + 0.3V                       |
| OV to GND.................................................................. -0.3V to 6V |
| Operating Temperature Range.............................-40°C to 125°C                  |
| Junction Temperature.......................................................+165°C       |
| Storage Temperature Range..............................-65°C to +150°C                  |
| Soldering Temperature (reflow) ........................................+260°C           |

## Package Information

## TQFN32 5mm x 5mm

| Package Code                            | T3255+5C                                |
|-----------------------------------------|-----------------------------------------|
| Outline Number                          | 21-0140                                 |
| Land Pattern Number                     | 90-0013                                 |
| Thermal Resistance, Single-Layer Board: | Thermal Resistance, Single-Layer Board: |
| Junction to Ambient (θ JA )             | 47°C/W                                  |
| Junction to Case (θ JC )                | 1.7°C/W                                 |
| Thermal Resistance, Four-Layer Board:   | Thermal Resistance, Four-Layer Board:   |
| Junction to Ambient (θ JA )             | 29°C/W                                  |
| Junction to Case (θ JC )                | 1.7°C/W                                 |

## TSSOP38 9.7mm x 4.4mm EP

| Package Code                          | U38E+3C                               |
|---------------------------------------|---------------------------------------|
| Outline Number                        | 21-0714                               |
| Land Pattern Number                   | 90-0435                               |
| Thermal Resistance, Four-Layer Board: | Thermal Resistance, Four-Layer Board: |
| Junction to Ambient (θ JA )           | 25°C/W                                |
| Junction to Case (θ JC )              | 1°C/W                                 |

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a four-layer board. For detailed information on package thermal considerations, refer to www.maximintegrated.com/thermal-tutorial .

## Electrical Characteristics

(V S  = 4.5V to 36V, R REF  = from 12kΩ to 24kΩ , Typical values assume T A  = 25ºC and V S  = 24V, Limits are 100% tested at T A  = +25°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization.)

| PARAMETER                      | SYMBOL       | CONDITIONS    | MIN          | TYP          | MAX          | UNITS        |
|--------------------------------|--------------|---------------|--------------|--------------|--------------|--------------|
| POWER SUPPLY                   | POWER SUPPLY | POWER SUPPLY  | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY |
| Supply Voltage Range           | S            | V             | 4.5          |              | 36           | V            |
| Sleep Mode Current Consumption | I VS         | V(SLEEPN) = 0 |              | 4            | 18           | μA           |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Electrical Characteristics (continued)

(V S  = 4.5V to 36V, R REF  = from 12kΩ to 24kΩ , Typical values assume T A  = 25ºC and V S  = 24V, Limits are 100% tested at T A  = +25°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization.)

| PARAMETER                                    | SYMBOL                     | CONDITIONS                                | MIN                        | TYP                        | MAX                        | UNITS                      |
|----------------------------------------------|----------------------------|-------------------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Quiescent Current Consumption                | I VS                       | V(SLEEPN) = 1, V(DRV_ENN) = 1             |                            | 3.5                        | 5                          | mA                         |
| 1.8V Regulator Output Voltage                | V VDD                      | V S = 4.5V                                |                            | 1.8                        |                            | V                          |
| V DD Current Limit                           | IV18 LIM                   |                                           | 20                         |                            |                            | mA                         |
| Charge Pump Voltage                          | V CP                       |                                           |                            | V S + 2.7                  |                            | V                          |
| Logic I/O Supply Voltage Range               | V CC_IO                    |                                           | 2.2                        |                            | 5.5                        | V                          |
| Sleep Mode Current Consumption               | I VCC_IO                   | V(SLEEPN) = 0                             |                            | 5                          | 10                         | μA                         |
| Quiescent Current Consumption                | I VCC_IO                   | V(SLEEPN) = 1                             |                            | 35                         | 60                         | μA                         |
| LOGIC LEVEL INPUTS-OUTPUTS                   | LOGIC LEVEL INPUTS-OUTPUTS | LOGIC LEVEL INPUTS-OUTPUTS                | LOGIC LEVEL INPUTS-OUTPUTS | LOGIC LEVEL INPUTS-OUTPUTS | LOGIC LEVEL INPUTS-OUTPUTS | LOGIC LEVEL INPUTS-OUTPUTS |
| Input Voltage Level - High                   | V IH                       |                                           | 0.7 x V CC_IO              |                            |                            | V                          |
| Input Voltage Level - Low                    | V IL                       |                                           |                            |                            | 0.3 x V CC_IO              | V                          |
| Input Hysteresis                             | V HYS                      |                                           |                            | 0.15 x V CC_IO             |                            | V                          |
| Internal Pullup/Pulldown Resistance          | R PULL                     | to GND or to V CC_IO                      | 60                         | 100                        | 140                        | kΩ                         |
| Input Leakage                                | In Leak                    | Inputs without pullup/pulldown resistance | -1                         |                            | +1                         | μA                         |
| Output Logic-Low Voltage                     | V OL                       | I LOAD = 5mA                              |                            |                            | 0.4                        | V                          |
| Push-Pull Output Logic- High Voltage         | V OH                       | I LOAD = 5mA                              | V CC_IO - 400mV            |                            |                            |                            |
| Open-Drain Output Logic High Leakage Current | I OH                       | V(PIN) = 5.5V                             | -1                         |                            | +1                         | μA                         |
| SLEEPN Voltage Level High                    | VIH SLEEPN                 |                                           | 0.9                        |                            |                            | V                          |
| SLEEPN Voltage Level Low                     | VIL SLEEPN                 |                                           |                            |                            | 0.6                        | V                          |
| SLEEPN Pulldown Input Resistance             | RPD SLEEPN                 |                                           | 0.8                        | 1.5                        |                            | MΩ                         |
| OUTPUT SPECIFICATIONS                        | OUTPUT SPECIFICATIONS      | OUTPUT SPECIFICATIONS                     | OUTPUT SPECIFICATIONS      | OUTPUT SPECIFICATIONS      | OUTPUT SPECIFICATIONS      | OUTPUT SPECIFICATIONS      |
| Output ON-Resistance Low Side                | RON LS                     | CFG3/CFG2 = 10                            |                            | 0.11                       | 0.2                        | Ω                          |
| Output ON-Resistance Low Side                | RON LS                     | CFG3/CFG2 = 01                            |                            | 0.15                       | 0.28                       | Ω                          |
| Output ON-Resistance Low Side                | RON LS                     | CFG3/CFG2 = 00                            |                            | 0.28                       | 0.54                       | Ω                          |
| Output ON-Resistance High Side               | RON HS                     |                                           |                            | 0.12                       | 0.22                       | Ω                          |
| Output Leakage                               | I LEAK                     |                                           | -5                         |                            | +5                         | μA                         |
| Output Slew Rate                             | SR                         |                                           |                            | 400                        |                            | V/μs                       |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Electrical Characteristics (continued)

(V S  = 4.5V to 36V, R REF  = from 12kΩ to 24kΩ , Typical values assume T A  = 25ºC and V S  = 24V, Limits are 100% tested at T A  = +25°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization.)

| PARAMETER                                 | SYMBOL              | CONDITIONS                                               | MIN                 | TYP                 | MAX                 | UNITS               |
|-------------------------------------------|---------------------|----------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|
| PROTECTION CIRCUITS                       | PROTECTION CIRCUITS | PROTECTION CIRCUITS                                      | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS | PROTECTION CIRCUITS |
| Overcurrent Protection Threshold          | OCP                 | CFG3/CFG2 = 10                                           | 5.0                 |                     |                     | A                   |
|                                           | OCP                 | CFG3/CFG2 = 01                                           | 3.33                |                     |                     | A                   |
|                                           | OCP                 | CFG3/CFG2 = 00                                           | 1.67                |                     |                     | A                   |
| Overcurrent Protection Blanking Time      | T OCP               |                                                          | 0.9                 | 1.5                 | 2.3                 | μs                  |
| UVLO Threshold on V S                     | UVLO                | V S falling                                              | 3.75                | 3.9                 | 4.05                | V                   |
| UVLO Threshold on V S Hysteris            | UVLOHYS             |                                                          |                     | 0.12                |                     | V                   |
| UVLO Threshold on V CC_IO                 | UVLO                | V CC_IO falling                                          | 0.9                 | 1.5                 | 1.95                |                     |
| V CC_IO UVLO Hysteresis                   | UVLOVCCH            |                                                          |                     | 100                 |                     | mV                  |
| Thermal Protection Threshold Temperature  | TSD                 |                                                          |                     | 165                 |                     | °C                  |
| Thermal Protection Temperature Hysteresis |                     |                                                          |                     | 20                  |                     | °C                  |
| CURRENT REGULATION                        | CURRENT REGULATION  | CURRENT REGULATION                                       | CURRENT REGULATION  | CURRENT REGULATION  | CURRENT REGULATION  | CURRENT REGULATION  |
| IREF Pin Resistor Range                   | R REF               |                                                          | 12                  |                     | 60                  | kΩ                  |
| IREF Output Voltage                       | V REF               |                                                          | 0.882               | 0.9                 | 0.918               | V                   |
| Full-Scale Current Constant               | KIFS                | IFS = 1A                                                 |                     | 11.75               |                     | A x kΩ              |
| Full-Scale Current Constant               | KIFS                | IFS = 2A                                                 |                     | 24                  |                     | A x kΩ              |
| Full-Scale Current Constant               | KIFS                | IFS = 3A                                                 |                     | 36                  |                     | A x kΩ              |
| Regulation Accuracy                       | DITRIP1             | Output current from 7% to 100% FS, R REF = 12kΩ          | -5                  |                     | +5                  | %                   |
| FUNCTIONAL TIMINGS                        | FUNCTIONAL TIMINGS  | FUNCTIONAL TIMINGS                                       | FUNCTIONAL TIMINGS  | FUNCTIONAL TIMINGS  | FUNCTIONAL TIMINGS  | FUNCTIONAL TIMINGS  |
| SLEEP Time                                | t SLEEP             | SLEEPN = 0 to OUT_ three state                           |                     |                     | 50                  | μs                  |
| Wake-Up Time from Sleep                   | TWAKE               | SLEEPN = 1 to normal operation                           |                     |                     | 2.5                 | ms                  |
| Enable Time                               | TEN                 | Time from DRV_ENN pin falling edge to driver on          |                     |                     | 1.5                 | μs                  |
| Disable Time                              | TEN                 | Time from DRV_ENN pin rising edge to driver off          |                     |                     | 6                   | μs                  |
| CLOCK                                     | CLOCK               | CLOCK                                                    | CLOCK               | CLOCK               | CLOCK               | CLOCK               |
| Internal Clock Frequency                  | f CLK               | min/max values take temperature coefficient into account | 11.9                | 12.5                | 13.2                | MHz                 |
| STEP/DIR TIMINGS                          | STEP/DIR TIMINGS    | STEP/DIR TIMINGS                                         | STEP/DIR TIMINGS    | STEP/DIR TIMINGS    | STEP/DIR TIMINGS    | STEP/DIR TIMINGS    |
| Step Frequency                            | f STEP              |                                                          |                     |                     | f CLK /4            |                     |
| Fullstep Frequency                        | f FS                |                                                          |                     |                     | f CLK /512          |                     |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Electrical Characteristics (continued)

(V S  = 4.5V to 36V, R REF  = from 12kΩ to 24kΩ , Typical values assume T A  = 25ºC and V S  = 24V, Limits are 100% tested at T A  = +25°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization.)

| PARAMETER              | SYMBOL   | MIN        | TYP   | MAX   | UNITS   |
|------------------------|----------|------------|-------|-------|---------|
| STEP High Time         | t SH     | t CLK + 20 |       |       | ns      |
| STEP Low Time          | t SL     | t CLK + 20 |       |       | ns      |
| DIR to STEP Setup Time | t SU     | 20         |       |       | ns      |
| DIR to STEP HoldTime   | t H      | 20         |       |       | ns      |

## Pin Configurations

## TMC2210 TQFN Pin Configuration

<!-- image -->

## TMC2210 TSSOP Pin Configuration

<!-- image -->

## Pin Description

| PIN            | PIN        | NAME    |                                                                                                                                                                   | REF     | TYPE                        |
|----------------|------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------|
| TQFN32         | TSSOP38    |         | FUNCTION                                                                                                                                                          | SUPPLY  |                             |
| 4              | 10         | AGND    | Analog Ground. Connect to ground plane.                                                                                                                           |         | GND                         |
| -              | 27, 31     | PGND    | Power ground. Connect to ground plane.                                                                                                                            |         | GND                         |
| 17, 20, 21, 24 | 25, 29, 33 | V S     | Motor supply voltage. Provide filtering capacity near pin with shortest loop to GND plane/exposed pad.                                                            |         | Supply                      |
| 3              | 9          | V DD1V8 | Output of internal 1.8V regulator. Attach 2.2µF or larger ceramic capacitor to AGND near to pin for best performance.                                             |         | Supply                      |
| 16             | 23         | V CP    | Charge pump voltage. Tie to V S using 1.0µF capacitor. Connect positive end of capacitor close to V S pin to avoid inductive peaks.                               |         | Analog Output               |
| 5              | 11         | V CC_IO | Digital IO supply voltage provided from external source to define circuit IO level. Required for proper voltage level settings on output pins.                    | V CC_IO | Analog Input                |
| 15             | 22         | CPO     | Charge pump capacitor output.                                                                                                                                     |         | Analog Output               |
| 14             | 20         | CPI     | Charge pump capacitor input. Tie to CPO using 22nF 50V capacitor.                                                                                                 |         | Analog Output               |
| 31             | 5          | STEP    | STEP input.                                                                                                                                                       | V CC_IO | Digital Input               |
| 32             | 6          | DIR     | Direction input.                                                                                                                                                  | V CC_IO | Digital Input               |
| 1              | 7          | IREF    | Analog reference current for current scaling. Provide external resistor to GND.                                                                                   | V CC_IO | Analog Input                |
| 9              | 15         | DRV_ENN | Enable input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a high level.                                     | V CC_IO | Digital Input (pull up)     |
| 11             | 17         | ERROR   | Open-drain error output. Use external pullup resistor. In system reset state, this pin is actively pulled low to indicate reset condition to external controller. | V CC_IO | Digital Output (open drain) |
| 12             | 18         | INDEX   | Open drain index pulse output indicating microstep 0 position of coil B.                                                                                          | V CC_IO | Digital Output (open drain) |

## Pin Description (continued)

| PIN    | PIN                     | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                            | REF     | TYPE                      |
|--------|-------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------------------------|
| TQFN32 | TSSOP38                 |        |                                                                                                                                                                                                                                                                                                                                                                                     | SUPPLY  |                           |
| 25     | 35                      | SLEEPN | Low active power down input / reset input. Apply a continuous low level to bring the device to sleep mode. SLEEPN has an internal pulldown. If not used connect to V S or V CC_IO (this is a high voltage pin). Once the IC returns from sleep mode/reset the configuration inputs are read and internal registers are set accordingly. Do not toggle while at high motor velocity! | V S     | Analog Input (pull down)  |
| 19     | 28                      | OUT2B  | Motor coil B output 2                                                                                                                                                                                                                                                                                                                                                               | V S     | Analog Output             |
| 18     | 26                      | OUT1B  | Motor coil B output 1                                                                                                                                                                                                                                                                                                                                                               | V S     | Analog Output             |
| 22     | 30                      | OUT2A  | Motor coil A output 2                                                                                                                                                                                                                                                                                                                                                               | V S     | Analog Output             |
| 23     | 32                      | OUT1A  | Motor coil A output 1                                                                                                                                                                                                                                                                                                                                                               | V S     | Analog Output             |
| EP     | EP                      | GND    | Exposed die pad. Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for power stage and internal circuitry.                                                                                                                                                                                             |         | GND                       |
| 2, 30  | 3, 4, 8, 21, 24, 34, 37 | N.C.   | Not connected, keep open or connect to GND for additional cooling                                                                                                                                                                                                                                                                                                                   |         | N.C.                      |
| 29     | 2                       | CFG0   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input             |
| 28     | 1                       | CFG1   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 27     | 38                      | CFG2   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 26     | 36                      | CFG3   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 7      | 13                      | CFG4   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 8      | 14                      | CFG5   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 6      | 12                      | CFG6   | Configuration input, see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                                | V CC_IO | Digital Input (pull up)   |
| 10     | 16                      | CFG7   | Configuration input , see Table 1 to Table 5 for details on the configuration options                                                                                                                                                                                                                                                                                               | V CC_IO | Digital Input (pull down) |

## Pin Description (continued)

| PIN    | PIN     | NAME   | FUNCTION                                                                                                                                                                                                               | REF     | TYPE                        |
|--------|---------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------|
| TQFN32 | TSSOP38 |        |                                                                                                                                                                                                                        | SUPPLY  |                             |
| 13     | 19      | OV     | Overvoltage indicator output (open drain) with fixed threshold voltage for maximum voltage rating of the device. Attach external MOSFET with load resistor to limit supply voltage. External pullup resistor required. | V CC_IO | Digital Output (open drain) |

## Functional Diagrams

## TMC2210

Figure 1. Block Diagram

<!-- image -->

## Detailed Description

## Pin-Configurable Step and Direction Driver

The TMC2210 is a step and direction stepper motor driver with pin-configurable settings.  Optional  feedback  signals (ERROR  and  INDEX)  allow  error  detection  and  synchronization  of  motion  if  required.  The  TMC2210  implements advanced  features  exclusive  to  ADI-Trinamic  products.  These  features  contribute  toward  greater  precision,  greater energy efficiency, higher reliability, and quieter and smoother motion.

Table 1. TMC2210 Advanced Features

| StealthChop2   | No-noise, high-precision chopper algorithm for inaudible motion and standstill of the motor.   |
|----------------|------------------------------------------------------------------------------------------------|
| SpreadCycle    | High-precision cycle-by-cycle current control for highest dynamic movements.                   |
| MicroPlyer     | Microstep interpolator for full 256-microstep smoothness with low-resolution step inputs.      |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

Figure 2. Block Diagram with Typical External Components

<!-- image -->

## Step/Direction Interface

The STEP and DIR inputs provide a simple, standard interface compatible with many existing motion controllers. The MicroPlyer step pulse interpolator brings the smooth motor operation of high-resolution microstepping to applications originally designed for coarser stepping.

## Timing

The following figure shows the timing parameters for the STEP and DIR signals.

Only the rising edges are active and result in a new step. STEP and DIR are sampled and synchronized to the internal system clock. An internal analog filter of approximately 10ns removes glitches on the signals, such as those caused by long PCB traces. If the signal source is far from the chip, and especially if the signals are carried on cables, the signals

should be filtered or transmitted differentially.

See the Electrical Characteristics table for the specified timing parameters.

Figure 3. STEP/DIR Signal Timing

<!-- image -->

Figure 4. STEP/DIR Signal Internal Input Filter Structure

<!-- image -->

## MicroPlyer Step Interpolator and Standstill Detection

For each active edge on the STEP input, MicroPlyer produces microsteps at a resolution of 256 microsteps per fullstep. It interpolates the time in between two step impulses at the STEP input based on the last step interval. This way, from 4 microsteps (64 microstep input to 256 microstep interpolation) up to 32 microsteps (8 microstep input to 256 microstep interpolation)  are  driven  for  a  single-step  pulse.  This  enables  seamless  drop-in  microstepping  capability  without  the requirement of adapting the step source.

The TMC2210 allows configuration of four different input resolutions: 8, 16, 32, and 64 microsteps. MicroPlyer is always enabled in the TMC2210.

The step frequency for the interpolation to 256 microsteps is determined by measuring the time interval of the previous step period and dividing it into up to 256 equal parts. The maximum time between two microsteps corresponds to 2 20 (roughly one million system clock cycles), for an even distribution of 256 microsteps. A lower step rate results in the standstill detection and condition. When a standstill is detected, the driver automatically switches the motor to holding current IHOLD .

In the figure above, the first STEP cycle is long enough to set the internal standstill bit stst . This internal bit is cleared on the next STEP active edge. Then, the external STEP frequency increases. After one cycle at the higher rate, MicroPlyer adapts the interpolated microstep rate to the higher frequency. During the last cycle at the slower rate, MicroPlyer does not generate all 16 microsteps. So, there is a small jump in motor angle between the first and second cycles at the higher rate.

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## TMC2210 36V 2A RMS + Standalone Integrated S/D Stepper Driver

Figure 5. MicroPlyer Microstep Interpolation with Rising STEP Frequency (Example: 16 to 256)

<!-- image -->

## Pin Configuration Options

The following settings can be adjusted using the CFGx pins:

## Table 2. Microstep Resolution Configuration for the Step Input

| CFG0/CFG1: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT   | CFG0/CFG1: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT   | CFG0/CFG1: CONFIGURATION OF MICROSTEP RESOLUTION FOR STEP INPUT   |
|-------------------------------------------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------------|
| CFG1                                                              | CFG0                                                              | MICROSTEP SETTING                                                 |
| GND                                                               | GND                                                               | 8 microsteps                                                      |
| GND                                                               | V CC_IO                                                           | 16 microsteps                                                     |
| V CC_IO                                                           | GND                                                               | 32 microsteps                                                     |
| V CC_IO                                                           | V CC_IO                                                           | 64 microsteps                                                     |

Hint: A change during motor rotation leads to a velocity jerk unless the step frequency is adapted at the same moment.

## Table 3. Run Current (IRUN) Configuration

| CFG3/CFG2: CONFIGURATION OF RUN CURRENT IRUN (ALONG WITH IREF RESISTOR), DO NOT CHANGE DURING OPERATION   | CFG3/CFG2: CONFIGURATION OF RUN CURRENT IRUN (ALONG WITH IREF RESISTOR), DO NOT CHANGE DURING OPERATION   | CFG3/CFG2: CONFIGURATION OF RUN CURRENT IRUN (ALONG WITH IREF RESISTOR), DO NOT CHANGE DURING OPERATION   |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| CFG3                                                                                                      | CFG2                                                                                                      | CURRENT RANGE SETTING                                                                                     |
| GND                                                                                                       | GND                                                                                                       | Current Scaling = 1A peak                                                                                 |
| GND                                                                                                       | V CC_IO                                                                                                   | Current Scaling = 2A peak                                                                                 |
| V CC_IO                                                                                                   | GND                                                                                                       | Current Scaling = 3A peak                                                                                 |
| V CC_IO                                                                                                   | V CC_IO                                                                                                   | Not used (3A peak)                                                                                        |

## Table 4. Digital Current Scale Configuration

| CFG4: DIGITAL CURRENT SCALE (MAY BE CHANGED DURING OPERATION)   | CFG4: DIGITAL CURRENT SCALE (MAY BE CHANGED DURING OPERATION)   |
|-----------------------------------------------------------------|-----------------------------------------------------------------|
| CFG4                                                            | CURRENT SCALE                                                   |
| GND                                                             | I = 75% of full scale current IRUN                              |
| V CC_IO                                                         | I = 100% of full scale current IRUN                             |

## Table 5. Chopper Mode Selection

| CFG5: SELECTION OF CHOPPER MODE   | CFG5: SELECTION OF CHOPPER MODE   |
|-----------------------------------|-----------------------------------|
| CFG5                              | CHOPPER MODE                      |
| GND                               | SpreadCycle operation             |
| V CC_IO                           | StealthChop2 operation            |

Hint : First operation with StealthChop2 can only be enabled during standstill to allow for tuning of the integrated current scaling algorithm.

## Table 6. Hold Current (IHOLD) Reduction Configuration

| CFG7/CFG6: CONFIGURATION OF HOLD CURRENT REDUCTION   | CFG7/CFG6: CONFIGURATION OF HOLD CURRENT REDUCTION   | CFG7/CFG6: CONFIGURATION OF HOLD CURRENT REDUCTION   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| CFG7                                                 | CFG6                                                 | HOLD CURRENT REDUCTION                               |
| GND                                                  | GND                                                  | No hold current reduction. IHOLD = IRUN              |
| GND                                                  | V CC_IO                                              | Reduction to 50%. IHOLD = 1/2 IRUN                   |
| V CC_IO                                              | GND                                                  | Reduction to 25%. IHOLD = 1/4 IRUN                   |
| V CC_IO                                              | V CC_IO                                              | Reduction to 12.5%. IHOLD = 1/8 IRUN                 |

## StealthChop2

StealthChop2  is  an  extremely  quiet  mode  of  operation  for  stepper  motors.  It  is  based  on  a  voltage  mode  PWM.  In case of standstill and at low velocities, the motor is absolutely noiseless. Thus, StealthChop2 operated stepper motor applications are very suitable for indoor or home use. The motor operates absolutely free of vibration at low velocities. With StealthChop2, the motor current is applied by driving a certain effective voltage into the coil, using a voltage mode PWM. With the enhanced StealthChop2, the driver automatically adapts to the application for best performance. No more configuration is required.

To match the motor current to a certain level, the effective PWM voltage becomes scaled depending on the actual motor velocity. Several additional factors influence the required voltage level to drive the motor at the target current: the motor resistance, its back EMF (that is, directly proportional to its velocity), as well as the actual level of the supply voltage. The StealthChop2 PWM frequency depends on the internal clock frequency.

Be sure to allow the motor to rest for at least 100ms before starting a motion using StealthChop2. This allows the current regulation to set the initial motor current.

For high-velocity use cases, SpreadCycle should be considered in combination with StealthChop2 by switching between the two modes using the pin CFG5. When switching between both modes, a small jerk might be visible because of a phase shift between voltage and current.

Attention :  A  motor  stall,  or  abrupt  stop  of  the  motion  during  operation  in  StealthChop2  can  trigger  an  overcurrent condition. Depending on the previous motor velocity, and on the coil resistance of the motor, it significantly increases motor current for 10ms to 100ms. With low velocities, where the back EMF is just a fraction of the supply voltage, there is no danger of triggering the short detection.

## Table 7. StealthChop2 PWM Frequency

| CLOCK FREQUENCY f CLK   | PWM FREQUENCY f PWM = 2/1024 f CLK   |
|-------------------------|--------------------------------------|
| 12.5MHz (internal)      | 24.4kHz                              |

## SpreadCycle

While  StealthChop2  is  a  voltage  mode  PWM-controlled  chopper,  SpreadCycle  is  a  cycle-by-cycle  current  control chopper. Therefore, it can react extremely fast to changes in motor velocity or motor load. The currents through both motor coils are controlled using dedicated chopper circuits. The chopper circuits work independently of each other. In the following figure, the different chopper phases are shown. The dedicated sense resistor in the following figure is only used for better explanation. The TMC2210 comes with fully internal current sensing.

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

Figure 6. SpreadCycle Chopper Decay Phases

<!-- image -->

Figure 7. Phase Current Profile During one SpreadCycle Chopper Cycle

<!-- image -->

Although the current can be regulated using only on phases (ON) and fast decay (FD) phase, insertion of the slow decay (SD) phase is important to reduce electrical losses and current ripple in the motor. The current comparator can measure coil current during phases when the current flows through exactly one low-side transistor, but not during the SD phase. So, the SD phase is terminated by a timer. The on phase is terminated by the comparator when the current through the coil reaches the target current plus some hysteresis. The FD phase may be terminated by either the comparator or another timer.

When  the  coil  current  is  switched,  spikes  in  the  R DS(ON) -based  current  measurement  occur  due  to  charging  and discharging parasitic capacitance.

During this time, typically one or two microseconds, the current cannot be measured. Blanking is the time when the input to the comparator is masked to block these spikes.

The high-performance chopper algorithm called SpreadCycle cycles through four phases: on, slow decay, fast decay, and a second slow decay.

## Table 8. SpreadCycle Parameters

| PARAMETER   | DESCRIPTION                                                                                                              | SETTING   |
|-------------|--------------------------------------------------------------------------------------------------------------------------|-----------|
| TOFF        | The slow decay time ( off time ) is set to 120 t CLK .                                                                   | 120 t CLK |
| TBL         | The comparator blank time safely covers the switching event and the duration of the ringing on the R DS(ON) measurement. | 36 t CLK  |

## Integrated Current Sense

Non-dissipative current sensing is integrated in the TMC2210 (ICS). This feature eliminates the bulky external power resistors, which are normally required with external current sensing. The ICS results in a dramatic space and power saving compared with mainstream applications based on the external sense resistor. For optimum performance, the ICS individually measures R DS(ON)  for each of the power MOSFETs taking into account individual MOSFET temperature to yield the best results.

## Setting the Full Scale Current Range

The  full  scale  current  I FS  is  a  peak  current  setting.  It  is  selected  with  an  external  reference  resistor  and  the  two configuration pins CFG2 and CFG3 (see also Table 2 in the Pin Configuration Options section).

Three different full-scale current ranges can be configured through the pins with the same reference resistor to adapt to different motor sizes and applications. This is needed to benefit from the best possible current control resolution.

Connect a reference resistor R REF  from I REF  to GND. Together with pins CFG3 and CFG2, the full scale current range I FS  is set based on the external resistor .

The following equation shows the full-scale current I FS  as a function of the R REF  shunt resistor connected to pin IREF and  the  configuration  pin  setting.  The  proportionality  constant  K IFS   is  defined  by  the  CFG2  and  CFG3  setting.  The external resistor R REF  can range between 12kΩ and 60kΩ.

I FS = K IFS (KV) / R REF (kΩ)

## Table 9. I FS  Full Scale Current Range Settings (Example for R REF  = 12KΩ)

| PIN CONFIG IN STANDALONE MODE   | PIN CONFIG IN STANDALONE MODE   | K IFS (A x   | MAX FS SETTING   | TYPICAL R DS(ON)   | NOTES                                                                  |
|---------------------------------|---------------------------------|--------------|------------------|--------------------|------------------------------------------------------------------------|
| CFG3                            | CFG2                            | kΩ)          |                  | (HS + LS)          |                                                                        |
| 1                               | 1                               | 36           | 3A               | 0.23Ω              | Optimized efficiency for motors and applications rated up to 2.1A rms. |
| 1                               | 0                               | 36           | 3A               | 0.23Ω              | Optimized efficiency for motors and applications rated up to 2.1A rms. |
| 0                               | 1                               | 24           | 2A               | 0.27Ω              | Optimized efficiency for motors and applications rated up to 1.4A rms. |
| 0                               | 0                               | 11.75        | 1A               | 0.40Ω              | Optimized efficiency for motors and applications rated up to 0.7A rms. |

The following table is a matrix of different reference resistor values (at pin I REF ) versus the different pin configurations for the full-scale current. The resulting maximum RMS current is given in each cell.

## Table 10. IFS Full Scale RMS Current in Ampere (A RMS) based on CFG2/CFG3 Pin Settings and different R REF

|           | MAX FULL SCALE CURRENT (A RMS) BASED ON CFG PIN SETTING AND K IFS (A x kΩ)   | MAX FULL SCALE CURRENT (A RMS) BASED ON CFG PIN SETTING AND K IFS (A x kΩ)   | MAX FULL SCALE CURRENT (A RMS) BASED ON CFG PIN SETTING AND K IFS (A x kΩ)   | MAX FULL SCALE CURRENT (A RMS) BASED ON CFG PIN SETTING AND K IFS (A x kΩ)   |
|-----------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| RREF (kΩ) | CFG3/CFG2 = 1/1                                                              | CFG3/CFG2 = 1/0                                                              | CFG3/CFG2 = 0/1                                                              | CFG3/CFG2 = 0/0                                                              |
|           | K IFS = 36                                                                   | K IFS = 36                                                                   | K IFS = 24                                                                   | K IFS = 11.75                                                                |
| 12        | 2,12                                                                         | 2,12                                                                         | 1,41                                                                         | 0,69                                                                         |

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Table 10. IFS Full Scale RMS Current in Ampere (A RMS) based on CFG2/CFG3 Pin Settings and different R REF  (continued)

|   15 | 1,70   | 1,70   | 1,13   | 0,55   |
|------|--------|--------|--------|--------|
|   18 | 1,41   | 1,41   | 0,94   | 0,46   |
|   22 | 1,16   | 1,16   | 0,77   | 0,38   |
|   27 | 0,94   | 0,94   | 0,63   | 0,31   |
|   33 | 0,77   | 0,77   | 0,51   | 0,25   |
|   39 | 0,65   | 0,65   | 0,44   | 0,21   |
|   47 | 0,54   | 0,54   | 0,36   | 0,18   |
|   56 | 0,45   | 0,45   | 0,30   | 0,15   |

Additional options to scale and adapt the motor run and hold current is the digital current scale configuration and hold current reduction configuration using the configuration pins.

See also Table 3 and Table 5 in the Pin Configuration Options section.

## Diagnostic Outputs

Operation with an external motion controller often requires quick reaction to certain states of the stepper motor driver. Therefore, the diagnostic outputs ERROR and INDEX supply a fixed set of real-time information complementing the STEP/DIR interface.

Figure 8. Diagnostic Outputs INDEX and ERROR

<!-- image -->

ERROR shows any driver error that prevents the chip from operating. This is an open-drain output. To determine a reset of the driver, ERROR always shows a power-on reset condition by pulling low during a reset condition.

An active INDEX output signals that the cosine curve of motor coil B is at its positive zero transition. The duration of the index pulse corresponds to the duration of the microstep. The index output allows precise detection of the microstep position within one electrical wave, that is, within a range of four fullsteps. With this, homing accuracy and reproducibility can be enhanced to microstep accuracy, even when using an inexpensive home switch. Thereby, the INDEX signal is a low active open-drain output. The active pulse is a low pulse.

Figure 9. Index Signal Pulse at Positive Zero Transition of the Coil B Microstep Wave

<!-- image -->

## External Reset, Sleep Mode, and Bridge Three State

The reset and sleep mode are controlled with the SLEEPN pin.

A short pulse on SLEEPN with a duration &gt;30µs results in a chip reset.

Very short pulses of &lt;30µs are filtered out and do not have an effect on the operation.

If SLEEPN is kept at GND, the IC goes into low power standby state (sleep mode). All internal supplies and bridge drivers are switched off.

After  power-up or leaving sleep mode and reset condition, the configuration pins are read and internal registers set accordingly.

The wake-up time is given in the EC table.

If not used, connect to V S  or V CC\_IO  (this is a high voltage pin).

Driving the DRV\_ENN pin high, the bridge drivers of TMC2210 can be disabled and the motor is freewheeling.

Be careful using these pins during high motor velocity as energy fed back from the motor might damage the chip!

## Protections and Driver Diagnostics

## Overcurrent Protection

The overcurrent protection (OCP) protects the device against short-circuits to the rails (supply voltage and ground) and between the outputs (OUT1A, OUT2A, OUT1B, OUT2B).

The OCP threshold depends on the selected full-scale current range (selected by configuration pins)/see the Electrical Characteristics table for the respective threshold values.

If the output current is greater than the OCP threshold for longer than the deglitch time (blanking time), then an OCP event is detected.

When an OCP event is detected, the H-bridges are immediately disabled.

The short protection is tried three times before the ERROR output is set and the bridges become disabled.

To re-enable the H-bridges, DRV\_ENN pin must be cycled.

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Thermal Protection and Shutdown

The TMC2210 has an internal thermal protection.

If the local die temperature exceeds 165°C (typical value), the driver is three-stated until the junction temperature drops below 145°C (typical value). After that, the driver is re-enabled.

As long as the overtemperature condition persists, the ERROR output is set high.

Heat is mainly generated by the motor driver stages, and, at increased voltage, by the internal voltage regulator. Most critical situations, where the driver MOSFETs can be overheated, are avoided when enabling the short to GND protection. The thermal shutdown is an emergency measure and temperature rising to the shutdown level should be prevented by design.

## Overvoltage Protection and Pin OV

A  stepper  motor  application  can  generate  significant  overvoltage,  especially  when  the  motor  becomes  quickly decelerated from a high velocity, or when the motor stalls.

This voltage is fed back to the supply rails by the driver output stage.

For typical NEMA17 or larger motors, and also for smaller motors with sufficient flywheel mass, the energy fed back can be substantial, so that the power capacitors and circuit consumption are not sufficient to keep the supply within its limits.

To  protect  the  driver  as  well  as  connected  circuitry,  the  TMC2210  has  an  overvoltage  detection  and  protection mechanism.

The OV output allows attaching an NPN or MOSFET with a power resistor (brake resistor) to dump the excess energy into the resistor.

The transistor is switched with approximately 3kHz to 4kHz (depending on the clock frequency) to keep the supply within the limits.

Very fast transients cannot be captured with this overvoltage protection mechanism.

The supply voltage is permanently monitored with the internal ADC (except while in sleep mode).

The upper threshold level for the supply voltage is set to 38V and is compared against the actual measured value of the supply voltage.

In a typical application, the maximum current fed back from the motor to the supply is less than a single coil RMS coil current.

A good resistor value can be calculated as

<!-- formula-not-decoded -->

USupply  being the nominal driver supply voltage V S . I Coil  being the nominal motor coil current.

Make sure the MOSFET is capable of switching the resulting current.

The OV output pin shows the actual state of the overvoltage monitor.

As soon as and as long as the supply voltage is greater or equal to 38V, the OV output pin is active (pulled low).

The OV output pin is an open-drain pin. The following diagram shows an example brake chopper circuit:

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

Figure 10. Brake Chopper Circuit Example

<!-- image -->

## Short to GND Protection

The TMC2210 power stages are protected against a short-circuit condition by an additional measurement of the current flowing through the high-side MOSFETs. This is important, as most short-circuit conditions result from a motor cable insulation defect, example., when touching the conducting parts connected to the system ground. The short detection is protected against spurious triggering, example, by ESD discharges, by retrying three times before switching off the motor.

Once a short condition  is  safely  detected,  the  corresponding  driver  bridge  is  switched  off  and  the  error  condition  is indicated at the ERROR pin. To restart the motor, disable and re-enable the driver using the DRV\_ENN pin.Note that the short to GND protection cannot protect the system and the power stages for all possible short events, as a short event is  rather undefined and a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## Undervoltage Lockout Protection

The TMC2210 features a UVLO protection for V S , V CC\_IO , and the charge pump.

- UVLO on V S  is set at 4.5V (max).
- UVLO condition on V CC\_IO  is triggered below 1.95V (max).
- UVLO condition on the charge pump is triggered in case of an error condition of the charge pump, example, due to a wrong capacitor value.

All UVLO conditions result in a chip reset and the ERROR pin is active low (open-drain).

## ESD Protections

The TMC2210 has internal ESD protection on every pin.

The motor phase output pins are protected up to 8kV HBM in the application when using a bypass capacitor of at least 1μF on the positive voltage supply (V S  pin).

Anyway, this is no protection against hot plugging of a motor. See the Typical Application Circuits section for additional external protection options.

## Typical Application Circuits

## Standard Application Circuit

The standard application circuit uses a minimum set of additional components. Use low ESR electrolytic capacitors to filter the power supply. The capacitors need to cope with the current ripple caused by chopper operation. A minimum capacity of 100µF at V S   is recommended for best performance. Current ripple in the supply capacitors also depends on the power supply internal resistance and cable length. V CC\_IO  must be supplied from an external source, example, a low-drop 3.3V regulator.

Place all filter capacitors as close as possible to the related IC pins. Use a solid common ground plane for all GND connections. Connect VDD1V8 filtering capacitor directly to the V DD1V8  pin.

Figure 11. Standard Application Circuit

<!-- image -->

## High Motor Current

When operating at a high motor current, the driver power dissipation due to MOSFET switch-on resistance significantly heats up the driver. This power dissipation heats up the PCB cooling infrastructure also, if operated at an increased duty cycle. This in turn leads to a further increase of driver temperature. An increase of temperature by about 100°C increases MOSFET resistance by roughly 50%. This is a typical behavior of MOSFET switches. Therefore, under high duty cycle, high load conditions, thermal characteristics have to be carefully taken into account, especially when increased environment temperatures are to be supported. See Package Information for the thermal characteristics and the online evaluation kit information for the layout example.

As a rule of thumb, thermal properties of the PCB design may become critical at or above 1.5A RMS motor current for increased periods of time. Note that the resistive power dissipation raises with the square of the motor current. On the other hand, this means that a small reduction of motor current significantly saves heat dissipation and energy.

## Driver Protection and EME Circuitry

Some applications have to cope with ESD events caused by motor operation or external influence. Despite ESD

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver

## Typical Application Circuits (continued)

circuitry within the driver chips, ESD events occurring during operation can cause a reset or even a destruction of the motor driver, depending on their energy. Especially, plastic housings and belt drive systems tend to cause ESD events of several kV. It is best practice to avoid ESD events by attaching all conductive parts, especially the motors themselves to PCB ground, or to apply electrically conductive plastic parts. In addition, the driver can be protected up to a certain degree against ESD events or live plugging/pulling the motor, which also causes high voltages and high currents into the motor connector terminals.

A simple scheme uses capacitors at the driver outputs to reduce the dV/dt caused by ESD events. Larger capacitors bring more benefit concerning ESD suppression, but cause additional current flow in each chopper cycle, and thus increase driver power dissipation, especially at high supply voltages. The values shown are example values - they might be varied between 100pF and 1nF. The capacitors also dampen high-frequency noise injected from digital parts of the application PCB circuitry and thus reduce electromagnetic emission.

Figure 12. Simple ESD Enhancement

<!-- image -->

A more elaborate scheme uses LC filters to decouple the driver outputs from the motor connector. Varistors V1 and V2 in between of the coil terminals eliminate coil overvoltage caused by live plugging. Optionally, protect all outputs by a varistor (V1A, V1B, V2A, V2B) against the ESD voltage. Fit the varistors to the supply voltage rating. The SMD inductivities conduct full motor coil current and need to be selected accordingly.

## Typical Application Circuits (continued)

Figure 13. Extended Motor Output Protection

<!-- image -->

## Ordering Information

| PART NUMBER   | TEMPERATURE RANGE   | PIN-PACKAGE               |
|---------------|---------------------|---------------------------|
| TMC2210ATJ+   | -40°C to +125°C     | 32 TQFN - 5mm x 5mm       |
| TMC2210ATJ+T  | -40°C to +125°C     | 32 TQFN - 5mm x 5mm       |
| TMC2210AUU+   | -40°C to +125°C     | 38 TSSOP-EP 4.4mm x 9.7mm |
| TMC2210AUU+T  | -40°C to +125°C     | 38 TSSOP-EP 4.4mm x 9.7mm |

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------|-----------------|
|                 0 | 9/22            | Release for Market Intro                                          | -               |
|                 1 | 1/23            | Made changes in Pin Description. Updated the Ordering Information | 13, 28          |
|                 2 | 4/24            | Updated Overvoltage Protection and OV Pin                         | 24              |

<!-- image -->

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no  responsibility  is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## 36V 2A RMS + Standalone Integrated S/D Stepper Driver