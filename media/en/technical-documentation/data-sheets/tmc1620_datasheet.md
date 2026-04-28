<!-- lastmod 2023-08-03 -->
## TMC1620-TO DATASHEET

Dual N &amp; P-Channel 60V Power MOSFET with low on-resistance and fast switching performance High energy efficiency and good thermal performance.

<!-- image -->

## PRODUCT SUMMARY

|          | N-CH   | P-CH   |
|----------|--------|--------|
| BV DSS   | 60V    | -60V   |
| R DS(ON) | 36mΩ   | 75mΩ   |
| I D      | 6.6A   | -4.7A  |

FEATURES AND BENEFITS N &amp; P-Channel MOSFET Half Bridge Device Simple Drive Requirement Good Thermal Performance Fast Switching Performance for quick motor reaction TO-252-4L Package, 6.5x10mm RoHS Compliant and Halogen-Free

## TMC262 WITH 4X TMC1620-TO MOSFETS

<!-- image -->

| Order code   | Description                                   | Size         |
|--------------|-----------------------------------------------|--------------|
| TMC1620-TO   | N and P-channel enhancement mode power MOSFET | 6.5 x 10mm 2 |

<!-- image -->

## APPLICATIONS

TMC1620-TO MOSFETs fit best with TRINAMIC bipolar stepper motor drivers:

TMC262:

two-phase stepper motor driver; up to 3.5A (48V DC) or 4.5A (24V DC) RMS motor current with 4xTMC1620-TO.

TMC389:

three-phase stepper motor driver; up to 3.5A (48V DC) or 4.5A (24V DC) RMS motor current with 3xTMC1620-TO.

## DESCRIPTION

This advanced TMC1620-TO power MOSFET  provides  the  designer  with  the best combination of fast switching, ruggedized device design, low onresistance and cost-effectiveness. The highly energy efficient TMC1620 is intended for power conversion and power management applications that require high efficiency and power density.

The  TO-252-4L  6.5x10mm  package  has  a very good thermal performance.

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

Figure 1.1 TMC1620-TO pin assignments

<!-- image -->

## 2 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                            | Symbol          | N-channel   | P-channel   | Unit   |
|--------------------------------------|-----------------|-------------|-------------|--------|
| Drain-Source Voltage                 | V DS            | 60          | -60         | V      |
| Gate-Source Voltage                  | V GS            | ±20         | ±20         | V      |
| Continuous Drain Current* 2          | I D @T A = 25°C | 6.6         | -4.7        | A      |
| Continuous Drain Current* 2          | I D @T A = 70°C | 5.3         | -3.8        | A      |
| Pulsed Drain Current* 1              | I DM            | 20          | -20         | A      |
| Total Power Dissipation              | P D @T A = 25°C | 3.13        | 3.13        | W      |
| Storage Temperature Range            | T STG           | -55 to 150  | -55 to 150  | °C     |
| Operating Junction Temperature Range | T J             | -55 to 150  | -55 to 150  | °C     |

## 3 Thermal Data

| Parameter                                  | Symbol   |   Value | Unit   |
|--------------------------------------------|----------|---------|--------|
| Max. Thermal Resistance, Junction-case     | Rthj-c   |       6 | °C/W   |
| Max. Thermal Resistance, Junction-ambient* | Rthj-a   |      40 | °C/W   |

## 4 Electrical Characteristics

## 4.1 N-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                        | Min   | Typ   | Max   | Unit   |
|------------------------------------|----------|----------------------------------------|-------|-------|-------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =250µA                   | 60    |       |       | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =10V, I D =6A V GS =4.5V, I D =4A |       |       | 36 42 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =250µA               | 1     |       | 3     | V      |
| Forward Transconductance           | g fs     | V DS = 10V, I D =5A                    |       | 12.5  |       | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = 48V, V GS =0V                   |       |       | 10    | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                  |       |       | ±100  | mA     |
| Total Gate Charge*                 | Q g      | I D =5A                                |       | 12    | 19.2  | nC     |
| Gate-Source Charge                 | Q gs     | V DS =48V                              |       | 3     |       | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =4.5V                             |       | 7     |       | nC     |
| Turn-on Delay Time                 | t d(on)  | V DS =30V                              |       | 7     |       | ns     |
| Rise Time                          | t r      | I D =5A                                |       | 10.5  |       | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                              |       | 23    |       | ns     |
| Fall Time                          | t f      | V GS =10V                              |       | 5     |       | ns     |
| Input Capacitance                  | C iss    | V GS =0V                               |       | 975   | 1560  | pF     |
| Output Capacitance                 | C oss    | V DS =25V                              |       | 75    |       | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                               |       | 65    |       | pF     |
| Gate Resistance                    | R g      | f=1.0MHz                               |       | 1.6   | 3.2   | Ω      |

## 4.1.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions     | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|---------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =2.4A |       |       | 1.3   | V      |
| Reverse Recovery Time*  | t rr     | V GS =0V, I S =5A   |       | 23    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=100A/µs       |       | 22    |       | nC     |

## 4.2 P-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                            | Min   | Typ   | Max   | Unit   |
|------------------------------------|----------|--------------------------------------------|-------|-------|-------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =-250µA                      | -60   |       |       | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =-10V, I D =-4A V GS =-4.5V, I D =-3A |       |       | 75 90 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =-250µA                  | -1    |       | -3    | V      |
| Forward Transconductance           | g fs     | V DS = -10V, I D =-3A                      |       | 11    |       | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = -48V, V GS =0V                      |       |       | -10   | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                      |       |       | ±100  | mA     |
| Total Gate Charge*                 | Q g      | I D =-3A                                   |       | 14    | 22.4  | nC     |
| Gate-Source Charge                 | Q gs     | V DS =-48V                                 |       | 2.5   |       | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =-4.5V                                |       | 8     |       | nC     |
| Turn-on Delay Time*                | t d(on)  | V DS =-30V                                 |       | 9     |       | ns     |
| Rise Time                          | t r      | I D =-3A                                   |       | 9.5   |       | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                                  |       | 42    |       | ns     |
| Fall Time                          | t f      | V GS =-10V                                 |       | 28    |       | ns     |
| Input Capacitance                  | C iss    | V GS =0V                                   |       | 1000  | 1600  | pF     |
| Output Capacitance                 | C oss    | V DS =-25V                                 |       | 125   |       | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                                   |       | 95    |       | pF     |
| Gate Resistance                    | R g      | f=1.0MHz                                   |       | 1.6   | 3.2   | Ω      |

## 4.2.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions      | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|----------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =-2.4A |       |       | -1.3  | V      |
| Reverse Recovery Time   | t rr     | V GS =0V, I S =-3A   |       | 30    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=-100A/µs       |       | 45    |       | nC     |

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

V ps , Drain-to-Source Voltage (V)

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

H

Figure 7.1 Dimensional drawings

| Symbols   | Min       | Nom       | Max       |
|-----------|-----------|-----------|-----------|
| A         | 6.40      | 6.60      | 6.80      |
| B         | 5.20      | 5.35      | 5.50      |
| C         | 9.40      | 9.80      | 10.20     |
| D         | 2.40      | 2.70      | 3.00      |
| P         | 1.27 REF. | 1.27 REF. | 1.27 REF. |
| S         | 0.50      | 0.65      | 0.80      |
| E3        | 3.50      | 4.00      | 4.50      |
| R         | 0.80      | 1.00      | 1.20      |
| G         | 0.40      | 0.50      | 0.60      |
| H         | 2.20      | 2.30      | 2.40      |
| J         | 0.45      | 0.50      | 0.55      |
| K         | 0.00      | 0.075     | 0.15      |
| L         | 0.90      | 1.20      | 1.50      |
| M         | 5.40      | 5.60      | 5.80      |

## 7.2 Package Marking Information and Package Code

<!-- image -->

Figure 7.2 Package marking information

| Device   | Package                  | Temperature range   | Code/ Marking   |
|----------|--------------------------|---------------------|-----------------|
| TMC1620  | TO-252-4L package 6.5x10 | -55° to +150°C      | TMC1620-TO      |

Note:

All dimensions are in millimeters.

Drawings are not to scale.

The dimensions do not include mold protrusions.

## 8 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 9 ESD Sensitive Device

The TMC1620-TO is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to  use  adequate  grounding  of  personnel  and  machines  in  manual  handling.  After  soldering  the devices  to  the  board,  ESD  requirements  are  more  relaxed.  Failure  to  do  so  can  result  in  defect  or decreased reliability.

<!-- image -->

## 10 Table of Figures

| Figure 1.1 TMC1620 pin assignments..............................................................................................................................3    |
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
| Figure 6.6 Gate Threshold voltage v.s. junction temperature.................................................................................8                        |
| Figure 6.7 Gate charge characteristics ............................................................................................................................9 |
| Figure 6.8 Typical capacitance characteristics...............................................................................................................9       |
| Figure 6.9 Maximum safe operating area ......................................................................................................................9       |
| Figure 6.12 Gate charge waveform..................................................................................................................................9  |
| Figure 6.11 Switching time waveform ...........................................................................................................................9     |
| Figure 7.2 Package marking                                                                                                                                           |
| information.....................................................................................................................10                                   |

## 11 Revision History

|   Version | Date        | Author SD - Sonja Dwersteg   | Description                                                      |
|-----------|-------------|------------------------------|------------------------------------------------------------------|
|      0.9  | 2014-FEB-26 | SD                           | Initial version                                                  |
|      1    | 2014-MAR-18 | SD                           | New front picture, thermal data corrected                        |
|      1.01 | 2014-MAY-12 | SD                           | RMS motor current in combination with TMC262 and TMC389 updated. |