<!-- lastmod 2023-08-03 -->
## TMC1420-LA DATASHEET

Dual N &amp; P-Channel 40V Power MOSFET with extremely low on-resistance. High energy efficiency and good thermal performance.

<!-- image -->

<!-- image -->

## PRODUCT SUMMARY

|          | N-CH   | P-CH   |
|----------|--------|--------|
| BV DSS   | 40V    | -40V   |
| R DS(ON) | 26.5mΩ | 42mΩ   |
| I D      | 8.8A   | -7.3A  |

FEATURES AND BENEFITS N &amp; P-Channel MOSFET Half Bridge Device Simple Drive Requirement Good Thermal Performance IR-reflow and backside heat sink Fast Switching Performance for quick motor reaction PQFN package, 5x6 mm RoHS Compliant and Halogen-Free

## TMC262 WITH 4X TMC1420-LA MOSFETS

<!-- image -->

| Order code   | Description                                   | Size      |
|--------------|-----------------------------------------------|-----------|
| TMC1420-LA   | N and P-channel enhancement mode power MOSFET | 5 x 6mm 2 |

<!-- image -->

## APPLICATIONS

TMC1420 MOSFETs fit best with TRINAMIC 2-phase bipolar stepper motor drivers:

TMC262:    up  to  4A  RMS  motor  current with 4xTMC1420-LA

TMC248:  up to 3.5A RMS motor current with 4xTMC1420-LA

TMC249:  up to 3.5A RMS motor current with 4xTMC1420-LA

## DESCRIPTION

The TMC 1420-LA is highly energy efficient. Employing silicon process technology, the TMC1420  achieves an extremely  low  on-state  resistance  and fastest switching performance. The TMC1420-LA is intended for power conversion and power management applications  that  require  high  efficiency and power density. The PQFN 5x6 package  uses  standard  infrared  reflow technique  with  the  backside  heat  sink and has a very good thermal performance.  The  package  is  similar  to other  enhanced  SO-8  packages  in  the market, such as LFPak and PowerSO-8.

## Table of Contents

1

PIN ASSIGNMENTS

2

3

4

5

6

7

8

9

10

11

ABSOLUTE MAXIMUM RATINGS

THERMAL DATA

ELECTRICAL CHARACTERISTICS

N-CH @TJ=25°C

...................................................................................................  3

...................................................................................................  3

...................................................................................................  3

...................................................................................................  4

(UNLESS OTHERWISE SPECIFIED)

...................................................................................................  4

Source-Drain Diode  .......................................................................................................................................  4

P-CH @TJ=25°C

(UNLESS OTHERWISE SPECIFIED)

4.2.1

...................................................................................................  4

Source-Drain Diode  .......................................................................................................................................  5

N-CHANNEL DIAGRAMS

P-CHANNEL DIAGRAMS

PACKAGE MECHANICAL DATA

DIMENSIONAL DRAWINGS

PACKAGE MARKING INFORMATION

PACKAGE CODE

DISCLAIMER

ESD SENSITIVE DEVICE

TABLE OF FIGURES

REVISION HISTORY

...................................................................................................  6

...................................................................................................  8

.................................................................................................  10

.................................................................................................  10

.................................................................................................  10

.................................................................................................  10

.................................................................................................  11

.................................................................................................  11

.................................................................................................  12

.................................................................................................  12

4.1

4.2

7.1

7.2

7.3

4.1.1

## 1 Pin Assignments

Backside view Front view / internal circuit

<!-- image -->

<!-- image -->

Figure 1.1 TMC1420-LA pin assignments

## 2 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                            | Symbol          | N-channel   | P-channel   | Unit   |
|--------------------------------------|-----------------|-------------|-------------|--------|
| Drain-Source Voltage                 | V DS            | 40          | -40         | V      |
| Gate-Source Voltage                  | V GS            | ±20         | ±20         | V      |
| Continuous Drain Current* 2          | I D @T A = 25°C | 8.8         | -7.3        | A      |
| Continuous Drain Current* 2          | I D @T A = 70°C | 7           | -5.8        | A      |
| Pulsed Drain Current* 1              | I DM            | 30          | -30         | A      |
| Total Power Dissipation              | P D @T A = 25°C | 3.57        | 3.57        | W      |
| Storage Temperature Range            | T STG           | -55 to 150  | -55 to 150  | °C     |
| Operating Junction Temperature Range | T J             | -55 to 150  | -55 to 150  | °C     |

## 3 Thermal Data

| Parameter                                  | Symbol   |   N-channel |   P-channel | Unit   |
|--------------------------------------------|----------|-------------|-------------|--------|
| Max. Thermal Resistance, Junction-case     | Rthj-c   |           6 |           6 | °C/W   |
| Max. Thermal Resistance, Junction-ambient* | Rthj-a   |          35 |          35 | °C/W   |

<!-- image -->

## 4 Electrical Characteristics

## 4.1 N-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                        | Min   | Typ       | Max     | Unit   |
|------------------------------------|----------|----------------------------------------|-------|-----------|---------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =250µA                   | 40    |           |         | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =10V, I D =7A V GS =4.5V, I D =5A |       | 21.2 32.7 | 26.5 45 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =250µA               | 1     | 1.7       | 3       | V      |
| Forward Transconductance           | g fs     | V DS = 10V, I D =7A                    |       | 14        |         | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = 32V, V GS =0V                   |       |           | 10      | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                  |       |           | ±30     | mA     |
| Total Gate Charge                  | Q g      | I D =7A                                |       | 7         | 11.2    | nC     |
| Gate-Source Charge                 | Q gs     | V DS =20V                              |       | 2.2       |         | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =4.5V                             |       | 3.7       |         | nC     |
| Turn-on Delay Time                 | t d(on)  | V DS =20V                              |       | 6         |         | ns     |
| Rise Time                          | t r      | I D =1A                                |       | 18        |         | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                              |       | 17        |         | ns     |
| Fall Time                          | t f      | V GS =5V                               |       | 19        |         | ns     |
| Input Capacitance                  | C iss    | V GS =0V                               |       | 660       | 1050    | pF     |
| Output Capacitance                 | C oss    | V DS =15V                              |       | 120       |         | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                               |       | 75        |         | pF     |
| Gate Resistance                    | R g      | f=1.0MHz                               |       | 2.2       | 4.4     | Ω      |

## 4.1.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions     | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|---------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =2.9A |       |       | 1.2   | V      |
| Reverse Recovery Time   | t rr     | V GS =0V, I S =7A   |       | 24    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=100A/µs       |       | 21    |       | nC     |

## 4.2 P-CH @Tj=25°C (unless otherwise specified)

| Parameter                          | Symbol   | Test Conditions                            | Min   | Typ       | Max   | Unit   |
|------------------------------------|----------|--------------------------------------------|-------|-----------|-------|--------|
| Drain-Source Breakdown Voltage     | BV DSS   | V GS =0V, I D =-250µA                      | -40   |           |       | V      |
| Static Drain-Source On-Resistance* | R DS(ON) | V GS =-10V, I D =-5A V GS =-4.5V, I D =-3A |       | 33.3 53.3 | 42 70 | mΩ mΩ  |
| Gate Threshold Voltage             | V GS(th) | V DS = V GS , I D =-250µA                  | -1    | -1.7      | -3    | V      |
| Forward Transconductance           | g fs     | V DS = -10V, I D =-5A                      |       | 11        |       | S      |
| Drain-Source Leakage Current       | I DSS    | V DS = -32V, V GS =0V                      |       |           | -10   | mA     |
| Gate-Source Leakage                | I GSS    | V DS = 0V, V GS =±20V                      |       |           | ±30   | mA     |
| Total Gate Charge                  | Q g      | I D =-5A                                   |       | 11.5      | 18.4  | nC     |
| Gate-Source Charge                 | Q gs     | V DS =-20V                                 |       | 2.3       |       | nC     |
| Gate-Drain ("Miller") Charge       | Q gd     | V GS =-4.5V                                |       | 7         |       | nC     |
| Turn-on Delay Time                 | t d(on)  | V DS =-20V                                 |       | 7         |       | ns     |
| Rise Time                          | t r      | I D =-1A                                   |       | 20        |       | ns     |
| Turn-off Delay Time                | t d(off) | R G =3.3Ω                                  |       | 34        |       | ns     |
| Fall Time                          | t f      | V GS =-5V                                  |       | 29        |       | ns     |
| Input Capacitance                  | C iss    | V GS =0V                                   |       | 720       | 1150  | pF     |
| Output Capacitance                 | C oss    | V DS =-15V                                 |       | 205       |       | pF     |
| Reverse Transfer Capacitance       | C rss    | f=1.0MHz                                   |       | 165       |       | pF     |
| Gate Resistance                    | R g      | f=1.0MHz                                   |       | 6         | 12    | Ω      |

## 4.2.1 Source-Drain Diode

| Parameter               | Symbol   | Test Conditions      | Min   | Typ   | Max   | Unit   |
|-------------------------|----------|----------------------|-------|-------|-------|--------|
| Forward On Voltage*     | V SD     | V GS =0V, I S =-2.9A |       |       | -1.2  | V      |
| Reverse Recovery Time   | t rr     | V GS =0V, I S =-5A   |       | 32    |       | ns     |
| Reverse Recovery Charge | Q rr     | dl/dt=100A/µs        |       | 34    |       | nC     |

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

Figure 5.11 Transfer characteristics

<!-- image -->

Figure 5.8 Typical capacitance characteristics

Figure 5.10 Effective transient thermal impedance

<!-- image -->

Figure 5.12 Maximum continuous drain current v.s. ambient temperature

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

Figure 6.11 Transfer characteristics

<!-- image -->

-V ps , Drain-to-Source Voltage (V)

Figure 6.8 Typical capacitance characteristics

<!-- image -->

Figure 6.10 Effective transient thermal impedance

Figure 6.12 Maximum continuous drain current v.s. ambient temperature

<!-- image -->

## 7 Package Mechanical Data

## 7.1 PQFN 5x6 Dimensional Drawings

<!-- image -->

Note: All dimensions are in millimeters. Drawings are not to scale. The  dimensions  do  not  include mold protrusions.

<!-- image -->

Figure 7.1 Dimensional drawings

| Symbols        | Min      | Nom      | Max      |
|----------------|----------|----------|----------|
| A              | 0.90     | 1.00     | 1.10     |
| b              | 0.33     | 0.41     | 0.51     |
| C              | 0.20     |          |          |
| D1             | 4.80     | 4.90     | 5.10     |
| D2             |          |          | 4.20     |
| E              | 5.90     | 6.00     | 6.10     |
| E1 (reference) | 5.70     | 5.75     | 5.80     |
| E2 (reference) | 3.38     | 3.58     | 3.78     |
| e              | 1.27 BSC | 1.27 BSC | 1.27 BSC |
| H              |          |          | 0.62     |
| K (reference)  | 0.70     |          |          |
| L              | 0.51     | 0.61     | 0.71     |
| L1             |          |          | 0.20     |
| (reference)    | 0˚       |          | 12˚      |

## 7.2 Package Marking Information

Figure 7.2 Package marking information

<!-- image -->

## 7.3 Package Code

| Device   | Package   | Temperature range   | Code/ Marking   |
|----------|-----------|---------------------|-----------------|
| TMC1420  | PQFN 5x6  | -55° to +150°C      | TMC1420-LA      |

## 8 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 9 ESD Sensitive Device

The TMC1420-LA is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to  use  adequate  grounding  of  personnel  and  machines  in  manual  handling.  After  soldering  the devices  to  the  board,  ESD  requirements  are  more  relaxed.  Failure  to  do  so  can  result  in  defect  or decreased reliability.

<!-- image -->

## 10 Table of Figures

| Figure 1.1 TMC1420 pin assignments..............................................................................................................................3       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 5.1 Typical output characteristics........................................................................................................................6      |
| Figure 5.2 Typical output characteristics........................................................................................................................6      |
| Figure 5.3 On-resistance v.s. gate voltage.....................................................................................................................6        |
| Figure 5.4 Normalized on-resistance v.s. junction temperature .............................................................................6                            |
| Figure 5.5 Forward characteristic of reverse diode ....................................................................................................6                |
| Figure 5.6 Gate threshold voltage v.s. junction temperature..................................................................................6                          |
| Figure 5.7 Gate charge characteristics ............................................................................................................................7    |
| Figure 5.8 Typical capacitance characteristics...............................................................................................................7          |
| Figure 5.9 Maximum safe operating area ......................................................................................................................7          |
| Figure 5.10 Effective transient thermal impedance ....................................................................................................7                 |
| Figure 5.11 Transfer characteristics .................................................................................................................................7 |
| Figure 5.12 Maximum continuous drain current v.s. ambient temperature ........................................................7                                         |
| Figure 6.1 Typical output characteristics........................................................................................................................8      |
| Figure 6.2 Typical output characteristics........................................................................................................................8      |
| Figure 6.3 On-resistance v.s. gate voltage.....................................................................................................................8        |
| Figure 6.4 Normalized on-resistance v.s. junction temperature .............................................................................8                            |
| Figure 6.5 Forward characteristic of reverse diode ....................................................................................................8                |
| Figure 6.6 Gate Threshold voltage v.s. junction temperature .................................................................................8                          |
| Figure 6.8 Typical capacitance characteristics...............................................................................................................9          |
| Figure 6.9 Maximum safe operating area ......................................................................................................................9          |
| Figure 6.11 Transfer characteristics .................................................................................................................................9 |
| Figure 6.12 Maximum continuous drain current v.s. ambient temperature ........................................................9                                         |
| 7.2 Package marking information.....................................................................................................................10                  |
| Figure                                                                                                                                                                  |

## 11 Revision History

Table 11.1 Documentation revisions

|   Version | Date        | Author SD - Sonja Dwersteg   | Description                                                                      |
|-----------|-------------|------------------------------|----------------------------------------------------------------------------------|
|      1    | 2013-MAR-18 | SD                           | Initial version                                                                  |
|      1.01 | 2014-MAY-12 | SD                           | RMS motor current values in combination with TMC262, TMC248, and TMC249 updated. |