<!-- lastmod 2023-08-03 -->
## TMC1320-LA DATASHEET

Dual N &amp; P-Channel 30V Power MOSFET with low on-resistance and fast switching performance. High energy efficiency and good thermal performance.

## APPLICATIONS

TMC1320 MOSFETs fit best with TRINAMIC 2-phase bipolar stepper

motor drivers:

TMC262:  up to 3.5A RMS motor current with 4xTMC1320-LA

TMC248:    up  to  3A  RMS  motor  current with 4xTMC1320

TMC249:    up  to  3A  RMS  motor  current with 4xTMC1320-LA

## DESCRIPTION

The advanced TMC1320-LA Power MOSFET provides the designer with the best combination  of  fast  switching,  low  onresistance and cost-effectiveness. The highly energy efficient TMC1320 is intended for power conversion and power management applications that require high efficiency and power density.

The  PQFN  3x3  package  has  a  backside heat  sink.  It  is  compatible  with  other DFN3 packages offering attractive thermal and electrical performance combined with a very small footprint.

<!-- image -->

## PRODUCT SUMMARY

|          | N-CH   | P-CH   |
|----------|--------|--------|
| BV DSS   | 30V    | -30V   |
| R DS(ON) | 30mΩ   | 60mΩ   |
| I D      | 7.3A   | -5.3A  |

## FEATURES AND BENEFITS

N &amp; P-Channel MOSFET Half Bridge Device

Simple Drive Requirement

Good Thermal Performance

Fast Switching Performance for quick motor reaction

PQFN Package, 3x3mm

; similar to DFN3x3 EP

RoHS Compliant and Halogen-Free

## TMC262 WITH 4X TMC1320-LA MOSFETS

<!-- image -->

| Order code   | Description                                   | Size          |
|--------------|-----------------------------------------------|---------------|
| TMC1320-LA   | N and P-channel enhancement mode power MOSFET | 3.1 x 3.1mm 2 |

<!-- image -->

## Table of Contents

| TABLE OF CONTENTS...........................................................................................................................................................2   | TABLE OF CONTENTS...........................................................................................................................................................2   | TABLE OF CONTENTS...........................................................................................................................................................2   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                                                                                                                                                               | PIN ASSIGNMENTS......................................................................................................................................................3          | PIN ASSIGNMENTS......................................................................................................................................................3          |
| 2                                                                                                                                                                               | ABSOLUTE MAXIMUM RATINGS..............................................................................................................................3                         | ABSOLUTE MAXIMUM RATINGS..............................................................................................................................3                         |
| 3                                                                                                                                                                               | THERMAL DATA............................................................................................................................................................3       | THERMAL DATA............................................................................................................................................................3       |
| 4                                                                                                                                                                               | ELECTRICAL CHARACTERISTICS..............................................................................................................................4                       | ELECTRICAL CHARACTERISTICS..............................................................................................................................4                       |
| 4.1                                                                                                                                                                             | N-CH @TJ=25°C ( UNLESS OTHERWISE SPECIFIED ) ................................................................................................... 4                              | N-CH @TJ=25°C ( UNLESS OTHERWISE SPECIFIED ) ................................................................................................... 4                              |
|                                                                                                                                                                                 | 4.1.1 Source-Drain Diode....................................................................................................................................... 4               | 4.1.1 Source-Drain Diode....................................................................................................................................... 4               |
| 4.2                                                                                                                                                                             | P-CH @TJ=25°C ( UNLESS OTHERWISE SPECIFIED ) ................................................................................................... 4                              | P-CH @TJ=25°C ( UNLESS OTHERWISE SPECIFIED ) ................................................................................................... 4                              |
|                                                                                                                                                                                 | 4.2.1 Source-Drain Diode....................................................................................................................................... 5               | 4.2.1 Source-Drain Diode....................................................................................................................................... 5               |
| 5                                                                                                                                                                               | N-CHANNEL DIAGRAMS .............................................................................................................................................6               | N-CHANNEL DIAGRAMS .............................................................................................................................................6               |
| N-CHANNEL DIAGRAMS......................................................................................................................................................7       | N-CHANNEL DIAGRAMS......................................................................................................................................................7       | N-CHANNEL DIAGRAMS......................................................................................................................................................7       |
| 6                                                                                                                                                                               | P-CHANNEL DIAGRAMS..............................................................................................................................................8               | P-CHANNEL DIAGRAMS..............................................................................................................................................8               |
| P-CHANNEL DIAGRAMS.......................................................................................................................................................9      | P-CHANNEL DIAGRAMS.......................................................................................................................................................9      | P-CHANNEL DIAGRAMS.......................................................................................................................................................9      |
| 7                                                                                                                                                                               | PACKAGE MECHANICAL DATA...............................................................................................................................10                        | PACKAGE MECHANICAL DATA...............................................................................................................................10                        |
| 7.1 DIMENSIONAL DRAWINGS                                                                                                                                                        | 7.1 DIMENSIONAL DRAWINGS                                                                                                                                                        | .................................................................................................10                                                                             |
| 7.2                                                                                                                                                                             | PACKAGE MARKING INFORMATION AND PACKAGE CODE..........................................................................................10                                        | PACKAGE MARKING INFORMATION AND PACKAGE CODE..........................................................................................10                                        |
| 8                                                                                                                                                                               | DISCLAIMER ................................................................................................................................................................11   | DISCLAIMER ................................................................................................................................................................11   |
| 9                                                                                                                                                                               | ESD SENSITIVE DEVICE...........................................................................................................................................11               | ESD SENSITIVE DEVICE...........................................................................................................................................11               |
| 10                                                                                                                                                                              | TABLE OF FIGURES....................................................................................................................................................12          | TABLE OF FIGURES....................................................................................................................................................12          |
| 11                                                                                                                                                                              | REVISION HISTORY ..................................................................................................................................................12           | REVISION HISTORY ..................................................................................................................................................12           |

## 1 Pin Assignments

PQFN package 3x3mm

<!-- image -->

Figure 1.1 TMC1320-LA pin assignments

## 2 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                            | Symbol          | N-channel   | P-channel   | Unit   |
|--------------------------------------|-----------------|-------------|-------------|--------|
| Drain-Source Voltage                 | V DS            | 30          | -30         | V      |
| Gate-Source Voltage                  | V GS            | ±20         | ±20         | V      |
| Continuous Drain Current* 2          | I D @T A = 25°C | 7.3         | -5.3        | A      |
| Continuous Drain Current* 2          | I D @T A = 70°C | 5.8         | -4.2        | A      |
| Pulsed Drain Current* 1              | I DM            | 28          | -20         | A      |
| Total Power Dissipation              | P D @T A = 25°C | 2.5         | 2.5         | W      |
| Linear Derating Factor               |                 | 0.02        | 0.02        | W/°C   |
| Storage Temperature Range            | T STG           | -55 to 150  | -55 to 150  | °C     |
| Operating Junction Temperature Range | T J             | -55 to 150  | -55 to 150  | °C     |

## 3 Thermal Data

| Parameter                                  | Symbol   |   Value | Unit   |
|--------------------------------------------|----------|---------|--------|
| Max. Thermal Resistance, Junction-case     | Rthj-c   |      10 | °C/W   |
| Max. Thermal Resistance, Junction-ambient* | Rthj-a   |      50 | °C/W   |

## 4 Electrical Characteristics

## 4.1 N-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                        | Min   | Typ   | Max   | Unit   |
|------------------------------------|----------|----------------------------------------|-------|-------|-------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =250µA                   | 30    |       |       | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =10V, I D =4A V GS =4.5V, I D =3A |       |       | 30 48 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =250µA               | 1     |       | 3     | V      |
| Forward Transconductance           | g fs     | V DS = 10V, I D =4A                    |       | 8.5   |       | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = 24V, V GS =0V                   |       |       | 1     | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                  |       |       | ±100  | mA     |
| Total Gate Charge*                 | Q g      | I D =4A                                |       | 4.5   | 7.2   | nC     |
| Gate-Source Charge                 | Q gs     | V DS =15V                              |       | 1     |       | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =4.5V                             |       | 2.5   |       | nC     |
| Turn-on Delay Time                 | t d(on)  | V DS =15V                              |       | 8     |       | ns     |
| Rise Time                          | t r      | I D =1A                                |       | 9     |       | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                              |       | 16    |       | ns     |
| Fall Time                          | t f      | V GS =10V                              |       | 3     |       | ns     |
| Input Capacitance                  | C iss    | V GS =0V                               |       | 250   | 400   | pF     |
| Output Capacitance                 | C oss    | V DS =25V                              |       | 55    |       | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                               |       | 50    |       | pF     |

## 4.1.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions     | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|---------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =1.2A |       |       | 1.2   | V      |
| Reverse Recovery Time*  | t rr     | V GS =0V, I S =4A   |       | 15    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=100A/µs       |       | 7     |       | nC     |

## 4.2 P-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                            | Min   | Typ   | Max   | Unit   |
|------------------------------------|----------|--------------------------------------------|-------|-------|-------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =-250µA                      | -30   |       |       | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =-10V, I D =-4A V GS =-4.5V, I D =-3A |       |       | 60 80 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =-250µA                  | -1    |       | -3    | V      |
| Forward Transconductance           | g fs     | V DS = -10V, I D =-4A                      |       | 9     |       | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = -24V, V GS =0V                      |       |       | -1    | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                      |       |       | ±100  | mA     |
| Total Gate Charge*                 | Q g      | I D =-4A                                   |       | 7     | 11.2  | nC     |
| Gate-Source Charge                 | Q gs     | V DS =-15V                                 |       | 1.5   |       | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =-4.5V                                |       | 3.5   |       | nC     |
| Turn-on Delay Time*                | t d(on)  | V DS =-15V                                 |       | 10    |       | ns     |
| Rise Time                          | t r      | I D =-1A                                   |       | 11    |       | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                                  |       | 22    |       | ns     |
| Fall Time                          | t f      | V GS =-10V                                 |       | 9     |       | ns     |
| Input Capacitance                  | C iss    | V GS =0V                                   |       | 570   | 910   | pF     |
| Output Capacitance                 | C oss    | V DS =-25V                                 |       | 80    |       | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                                   |       | 75    |       | pF     |

## 4.2.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions      | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|----------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =-1.2A |       |       | -1.2  | V      |
| Reverse Recovery Time*  | t rr     | V GS =0V, I S =-4A   |       | 19    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=-100A/µs       |       | 13    |       | nC     |

## 5 N-Channel Diagrams

<!-- image -->

Figure 5.1 Typical output characteristics

<!-- image -->

Figure 5.3 On-resistance v.s. gate voltage

<!-- image -->

Figure  5.5  Forward  characteristic  of  reverse diode

<!-- image -->

Figure 5.2 Typical output characteristics

Figure 5.4 Normalized on-resistance v.s. junction temperature

<!-- image -->

Figure 5.6 Gate threshold voltage v.s. junction temperature

<!-- image -->

## N-Channel Diagrams

<!-- image -->

Figure 5.7 Gate charge characteristics

<!-- image -->

Figure 5.9 Maximum safe operating area

<!-- image -->

Figure 5.11 Switching time waveform

<!-- image -->

Figure 5.8 Typical capacitance characteristics

Figure 5.10 Effective transient thermal impedance

<!-- image -->

Figure 5.12 Gate charge waveform

<!-- image -->

## 6 P-Channel Diagrams

<!-- image -->

Figure 6.1 Typical output characteristics

<!-- image -->

Figure 6.3 On-resistance v.s. gate voltage

<!-- image -->

Figure  6.5  Forward  characteristic  of  reverse diode

<!-- image -->

Figure 6.2 Typical output characteristics

Figure 6.4 Normalized on-resistance v.s. junction temperature

<!-- image -->

Figure 6.6 Gate Threshold voltage v.s. junction temperature

<!-- image -->

## P-Channel Diagrams

<!-- image -->

Figure 6.7 Gate charge characteristics

<!-- image -->

Figure 6.9 Maximum safe operating area

<!-- image -->

Figure 6.11 Switching time waveform

<!-- image -->

Figure 6.8 Typical capacitance characteristics

Figure 6.10 Effective transient thermal impedance

<!-- image -->

Figure 6.12 Gate charge waveform

<!-- image -->

## 7 Package Mechanical Data

## 7.1 Dimensional Drawings

<!-- image -->

Figure 7.1 Dimensional drawings

| Symbols   |   Min |   Nom |   Max |
|-----------|-------|-------|-------|
| A         |  2.9  |  3.1  |  3.4  |
| B         |  2.2  |  2.45 |  2.8  |
| e         |  0.6  |  0.65 |  0.7  |
| b2        |  0.2  |  0.3  |  0.4  |
| C         |  2.9  |  3.1  |  3.4  |
| c1        |  0.1  |  0.3  |  0.5  |
| c2        |  1.2  |  1.7  |  2.2  |
| C3        |  0.1  |  0.38 |  0.65 |
| D         |  0.65 |  0.8  |  1.05 |
| d1        |  0    |  0.1  |  0.2  |
| E         |  0.1  |  0.18 |  0.25 |

## 7.2 Package Marking Information and Package Code

<!-- image -->

Figure 7.2 Package marking information

| Device   | Package           | Temperature range   | Code/ Marking   |
|----------|-------------------|---------------------|-----------------|
| TMC1320  | PQFN 3 x3, I-type | -55° to +150°C      | TMC1320-LA      |

## 8 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 9 ESD Sensitive Device

The TMC1320-LA is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to  use  adequate  grounding  of  personnel  and  machines  in  manual  handling.  After  soldering  the devices  to  the  board,  ESD  requirements  are  more  relaxed.  Failure  to  do  so  can  result  in  defect  or decreased reliability.

<!-- image -->

## 10 Table of Figures

| Figure 1.1 TMC1320 pin assignments..............................................................................................................................3    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 5.1 Typical output characteristics........................................................................................................................6   |
| Figure 5.2 Typical output characteristics........................................................................................................................6   |
| Figure 5.3 On-resistance v.s. gate voltage.....................................................................................................................6     |
| Figure 5.4 Normalized on-resistance v.s. junction temperature .............................................................................6                         |
| Figure 5.5 Forward characteristic of reverse diode ....................................................................................................6             |
| Figure 5.6 Gate threshold voltage v.s. junction temperature..................................................................................6                       |
| Figure 5.7 Gate charge characteristics ............................................................................................................................7 |
| Figure 5.8 Typical capacitance characteristics...............................................................................................................7       |
| Figure 5.9 Maximum safe operating area ......................................................................................................................7       |
| Figure 5.10 Effective transient thermal impedance ....................................................................................................7              |
| Figure 5.11 Switching time waveform ...........................................................................................................................7     |
| Figure 5.12 Gate charge waveform..................................................................................................................................7  |
| Figure 6.1 Typical output characteristics........................................................................................................................8   |
| Figure 6.2 Typical output characteristics........................................................................................................................8   |
| Figure 6.3 On-resistance v.s. gate voltage.....................................................................................................................8     |
| Figure 6.4 Normalized on-resistance v.s. junction temperature .............................................................................8                         |
| Figure 6.5 Forward characteristic of reverse diode ....................................................................................................8             |
| Figure 6.6 Gate Threshold voltage v.s. junction temperature .................................................................................8                       |
| Figure 6.7 Gate charge characteristics ............................................................................................................................9 |
| Figure 6.8 Typical capacitance characteristics...............................................................................................................9       |
| Figure 6.9 Maximum safe operating area ......................................................................................................................9       |
| Figure                                                                                                                                                               |
| Figure 6.12 Gate charge waveform..................................................................................................................................9  |
| 6.11 Switching time waveform ...........................................................................................................................9            |

## 11 Revision History

|   Version | Date        | Author SD - Sonja Dwersteg   | Description                                                                      |
|-----------|-------------|------------------------------|----------------------------------------------------------------------------------|
|      0.92 | 2014-MAR-13 | SD                           | Initial version                                                                  |
|      1    | 2014-MAR-18 | SD                           | RMS current corrected. Front picture added. Total gate charge corrected.         |
|      1.01 | 2014-MAY-12 | SD                           | RMS motor current values in combination with TMC262, TMC248, and TMC249 updated. |