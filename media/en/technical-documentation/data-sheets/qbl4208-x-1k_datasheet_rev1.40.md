<!-- lastmod 2023-09-13 -->
## QBL4208-x-1k Hardware Manual

Hardware Version V1.00 | Document Revision V1.40 • 16.04.2021

QBL4208-x-1k is a NEMA17 (42mm) 3-phase BLDC motor including a small size optical incremental encoder kit. Besides the standard HALL sensor signals, it comes with an encoder resolution of 64 lines (4096 counts). Trinamic's BLDC motors are quality motors for universal use. They feature a long life due to ball bearings and no wearing out parts.

<!-- image -->

## Applications

- Closed Loop Servo Motors · Industrial Automation

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2021 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at: www.trinamic.com

<!-- image -->

<!-- image -->

- Automated Equipment · Robotics

## Features

- High Resolution
- Low Cost
- Small Dimension
- Including optional HALL Sensors
- StandardIncrementalEncoderInterface

## Contents

| 1 Order Codes                                                    | 1 Order Codes                                                           | 1 Order Codes                                                           | 3     |
|------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------|
| 2 Motor Speci/uniFB01cations and Characteristics 2.1             | 2 Motor Speci/uniFB01cations and Characteristics 2.1                    | 2 Motor Speci/uniFB01cations and Characteristics 2.1                    | 4     |
|                                                                  | Technical and Mechanical Parameters Torque-Speed Diagrams . . . . . . . | Technical and Mechanical Parameters Torque-Speed Diagrams . . . . . . . | 4 5   |
| 2.2                                                              | 2.2.1                                                                   | 2.2.1                                                                   |       |
|                                                                  |                                                                         | QBL4208-61-04-013-1k QBL4208-100-04-025-1k                              | 5 6   |
|                                                                  | 2.2.2                                                                   |                                                                         |       |
| . . . . . . . . . . . . . . . . . . . . . . .                    | . . . . . . . . . . . . . . . . . . . . . . .                           | . . . . . . . . . . . . . . . . . . . . . . .                           |       |
| 3 Technical Speci/uniFB01cations of the Encoders 3.1 . . . .     | 3 Technical Speci/uniFB01cations of the Encoders 3.1 . . . .            | 3 Technical Speci/uniFB01cations of the Encoders 3.1 . . . .            | 6     |
| Electrical Encoder Parameters Mechanical Encoder                 | Electrical Encoder Parameters Mechanical Encoder                        | Electrical Encoder Parameters Mechanical Encoder                        | 6     |
| 3.2 3.3                                                          | Parameters                                                              | Parameters                                                              | 7     |
|                                                                  | . . Environmental Encoder Parameters                                    | . . Environmental Encoder Parameters                                    | 7     |
| 4 Connectors and Signals .                                       | 4 Connectors and Signals .                                              | 4 Connectors and Signals .                                              |       |
|                                                                  |                                                                         |                                                                         | 7     |
| 4.1 4.2                                                          | Motor Connector . . . . . . . . .                                       | .                                                                       | 7     |
|                                                                  | Hall Signal Connector . .                                               | . .                                                                     | 8     |
| 4.3 4.4                                                          | Encoder Connector .                                                     | . . .                                                                   | 8 9   |
|                                                                  | . . Encoder Wave Form . . .                                             | . . .                                                                   |       |
| 5 Mechanical Drawings                                            | 5 Mechanical Drawings                                                   | 5 Mechanical Drawings                                                   | 9     |
| 6 Motor Sizing                                                   | 6 Motor Sizing                                                          | 6 Motor Sizing                                                          | 11    |
|                                                                  |                                                                         | . .                                                                     | 11    |
| 6.1 Peak Torque Requirement . 6.2 RMS Torque Requirement .       | 6.1 Peak Torque Requirement . 6.2 RMS Torque Requirement .              | . .                                                                     | 11    |
| 6.3 Motor Velocity . . . . . . . .                               | 6.3 Motor Velocity . . . . . . . .                                      | 6.3 Motor Velocity . . . . . . . .                                      | 11    |
|                                                                  |                                                                         | . .                                                                     |       |
| 7 Figures Index                                                  | 7 Figures Index                                                         | 7 Figures Index                                                         | 13    |
| 8 Tables Index                                                   | 8 Tables Index                                                          | 8 Tables Index                                                          | 14    |
| Supplemental Directives 9.1 Producer Information . . . . . . . . | Supplemental Directives 9.1 Producer Information . . . . . . . .        | . . . . .                                                               | 15    |
| 9.2 Copyright 9.3 Trademark                                      | 9.2 Copyright 9.3 Trademark                                             | . . . . .                                                               | 15 15 |
|                                                                  |                                                                         | and Symbols                                                             | 15    |
| Designations 9.4 Target User                                     | Designations 9.4 Target User                                            | . . . . . . . . . . .                                                   | 15    |
| 9.5 Disclaimer: 9.6 Disclaimer:                                  | 9.5 Disclaimer: 9.6 Disclaimer:                                         | Systems                                                                 | 15    |
| Life Support Intended                                            | Life Support Intended                                                   | Use . . .                                                               |       |
| 9.7 Collateral Documents 10                                      | 9.7 Collateral Documents 10                                             | & Tools .                                                               | 16    |
| Revision History 10.1 Hardware                                   | Revision History 10.1 Hardware                                          | Revision History 10.1 Hardware                                          |       |
|                                                                  |                                                                         |                                                                         | 17    |
| Revision                                                         | Revision                                                                | . . . . . . .                                                           | 17    |
| 10.2 Document Revision                                           | 10.2 Document Revision                                                  | . . . . . . .                                                           | 17    |

<!-- image -->

## 1 Order Codes

Order Code

| QBL4208-61-04-013-1k   | QBL4208-61-04-013-1024-AT   | Motor + Encoder Mod- ule, NEMA17 3-phase BLDC motor (3.5A / 0.13Nm, 4000rpm, round shaft) with inte- grated HALL sensors and incremental en- coder kit, resolution of 64lpr (4.096cpr), ABN, TTL   | 42 x 42 x 79   |
|------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| QBL4208-100-04-025-1k  | QBL4208-100-04-025-1024-AT  | Motor + Encoder Mod- ule, NEMA17 3-phase BLDC motor (7.0A / 0.25Nm, 4000rpm, round shaft) with inte- grated HALL sensors and incremental en- coder kit, resolution of 64lpr (4.096cpr), ABN, TTL   | 42 x 42 x 118  |

Old Order Code

Description

Table 1: Order codes

Other encoder resolutions, signal output types, and customized motor options (without HALL signals for example) on request.

<!-- image -->

Size mm (LxWxH)

## 2 Motor Speci/uniFB01cations and Characteristics

TRINAMIC's BLDC motors are quality motors for universal use. They feature a long life due to ball bearings and no wearing out parts. These BLDC motors give a good /uniFB01t to the TRINAMIC family of medium and high current BLDC motor modules and custom/customized solutions.

## 2.1 Technical and Mechanical Parameters

- Hall Effect Angle: 120°electric angle

The main characteristics are:

- Shaft run out: 0.025mm
- Radial Play: 0.02mm 450G load
- Insulation Class: B
- Max Radial Force: 28N (10mm from /uniFB02ange)
- Dielectric Strength: 500 VDC For One Minute
- Max Axial Force: 10N
- Insulation Resistance: 100M Ohm min. 500VDC
- Bearing: Brushless motors /uniFB01tted with ball bearings
- Recommended Ambient Temp.: -20 to +40°C
- Coil windings in delta topology

Speci/uniFB01cations

Unit

QBL4208-61-04-013-1k

Table 2: Electrical and Mechanical Characteristics Motor

| No. of Poles            |               |        8 |        8 |
|-------------------------|---------------|----------|----------|
| No. of Phases           |               |    3     |    3     |
| Rated Voltage           | V             |   24     |   24     |
| Rated Phase Current     | A             |    3.47  |    6.95  |
| Rated Speed             | RPM           | 4000     | 4000     |
| Rated Torque            | Nm            |    0.125 |    0.25  |
| Max Peak Torque         | Nm            |    0.38  |    0.75  |
| Torque Constant         | Nm/A          |    0.036 |    0.036 |
| Line to Line Resistance | Ω             |    0.72  |    0.28  |
| Line to Line Inductance | mH            |    1.2   |    0.54  |
| Max Peak Current        | A             |   10.6   |   20     |
| Length (LMAX)           | mm            |   61     |  100     |
| Rotor Inertia           | kgm 2 x10 - 6 |   48     |   96     |
| Mass                    | kg            |    0.45  |    0.8   |

QBL4208-100-04-025-1k

<!-- image -->

## 2.2 Torque-Speed Diagrams

The torque-speed /uniFB01gures detail motor torque characteristics measured in block commutation. Please be careful not to operate the motors outside the blue /uniFB01eld. This is possible for short times only because of a resulting high coil temperature. The motors have insulation class B. The blue /uniFB01eld is described by rated speed and rated torque.

## 2.2.1 QBL4208-61-04-013-1k

Velocity vs. torque measured with 24V supply voltage.

<!-- image -->

Figure 1: QBL4208-61-04-013-1k velocity vs. torque characteristic

<!-- image -->

## 2.2.2 QBL4208-100-04-025-1k

Velocity vs. torque measured with 24V supply voltage.

Figure 2: QBL4208-100-04-025-1k velocity vs. torque characteristics

<!-- image -->

## 3 Technical Speci/uniFB01cations of the Encoders

## 3.1 Electrical Encoder Parameters

Parameter

| Supply voltage       | 4.5   | 5    | 5.5   | V          |
|----------------------|-------|------|-------|------------|
| Supply current       |       |      | 110   | mA         |
| Rise/fall time       |       |      | 10    | ns         |
| Frequency            |       |      | 1500  | kHz        |
| Output Voltage "'H"' | 2.4   |      |       | V          |
| Input Voltage "'L"'  |       |      | 0.4   | V          |
| Max. output current  |       |      | 20    | mA         |
| Disc lines           |       | 64   |       | lines      |
| Resolution           |       | 4096 |       | increments |

Min

Table 3: Electrical Characteristics Encoder

Typ

Max

Unit

<!-- image -->

## 3.2 Mechanical Encoder Parameters

Parameter

Table 4: Mechanical Speci/uniFB01cations

| Hollow Diameter (symbol D in drawings)   | 5 / 6.35   |      | mm   |
|------------------------------------------|------------|------|------|
| Starting Torque                          |            | 0.8  | Ncm  |
| Shaft Loading Axial                      |            | 50   | N    |
| Shaft Loading Radial                     |            | 80   | N    |
| Max. RPM                                 |            | 6000 | rpm  |
| Net weight                               | 30         |      | g    |

## 3.3 Environmental Encoder Parameters

Parameter

Table 5: Environmental Speci/uniFB01cations

| Operating Temperature   | -20 - +85°C                |
|-------------------------|----------------------------|
| Storage Temperature     | -20 - +85°C                |
| Operating Humidity      | RH 85% max, non collecting |
| Shock                   | 490 m/s 2 , 3Dx2 times     |
| Vibration               | 1.2mm, 10-55kHz, 3Dx30min  |
| Protection              | IP40                       |

## 4 Connectors and Signals

## 4.1 Motor Connector

|   1 | Yellow   | UL1430 AWG20   | Phase U   |
|-----|----------|----------------|-----------|
|   2 | Red      | UL1430 AWG20   | Phase V   |
|   3 | Black    | UL1430 AWG20   | PhaseW    |

Color

Wire Type

Signal Name

Table 7: Connector and signals of motor

#

Min

Typ

Description

Max

Unit

<!-- image -->

## 4.2 Hall Signal Connector

#

Wire Type

Signal Name

Table 9: HALL sensor connector and signals

|   1 | Red   | UL1430 AWG26   | VCC Hall Sensor +5VDC to +24VDC   |
|-----|-------|----------------|-----------------------------------|
|   2 | Blue  | UL1430 AWG26   | HALL A                            |
|   3 | Green | UL1430 AWG26   | HALL B                            |
|   4 | White | UL1430 AWG26   | HALL C                            |
|   5 | Black | UL1430 AWG26   | GND, Sensor Ground                |

Signal Name

Color

## 4.3 Encoder Connector

#

Color

Wire Type

Table 11: Connector and signals of the encoder

|   1 | Red          | UL2517 AWG28      | VCC    |
|-----|--------------|-------------------|--------|
|   2 | Black        | UL2517 AWG28      | GND    |
|   3 | White        | UL2517 AWG28      | A+     |
|   4 | White/Black  | UL2517 AWG28Black | A-     |
|   5 | Green        | UL2517 AWG28      | B+     |
|   6 | Green/Black  | UL2517 AWG28      | B-     |
|   7 | Yellow       | UL2517 AWG28      | Z+     |
|   8 | Yellow/Black | UL2517 AWG28      | Z-     |
|   9 | Blue         | UL2517 AWG28      | Shield |

The required encoder cable connector is a Molex type 5023800900 CLIK-MATE™ crimp housing using Molex type 5023810000 CLIK-MATE™ crimp terminals.

<!-- image -->

Figure 3: Connection and circuit diagram for the line driver outputs

<!-- image -->

## 4.4 Encoder Wave Form

Figure 4: Example wave form for CCW rotation

<!-- image -->

## 5 Mechanical Drawings

Figure 5: Dimensions of motor &amp; encoder kit (all units = mm)

<!-- image -->

Motor Type

Body Length

| QBL4208-61-04-013-1k   | 61mm   |
|------------------------|--------|
| QBL4208-100-04-013-1k  | 100mm  |

Table 13: Motor length

<!-- image -->

<!-- image -->

Figure 6: Length of motor wires/cables (all units = mm)

<!-- image -->

## 6 Motor Sizing

For the optimum solution it is important to /uniFB01t the motor to the application. The three key parameters are peak torque requirement, RMS torque requirement and motor velocity.

## 6.1 Peak Torque Requirement

Peak torque TP is the sum of the torque due to acceleration of inertia (T I ), load (T L ) and friction (T F ):

<!-- formula-not-decoded -->

The torque due to inertia is the product of the load (including motor rotor) inertia and the load acceleration:

<!-- formula-not-decoded -->

The torque due to the load is de/uniFB01ned by the con/uniFB01guration of the mechanical system coupled to the motor. The system also determines the amount of torque required to overcome the friction.

## 6.2 RMS Torque Requirement

- t 1 : acceleration time

Root-Mean-Square or RMS torque is a value used to approximate the average continuous torque requirement. Its statistical approximation is with

- t 2 : run time
- t 4 : time in a move
- t 3 : deceleration time

<!-- formula-not-decoded -->

## 6.3 Motor Velocity

The motor velocity is also dictated by the con/uniFB01guration of the mechanical system that is coupled to the motor shaft, and by the type of move that is to be affected. For example, a single velocity application would require a motor with rated velocity equal to the average move velocity. A point to point positioning would require a motor with a rated velocity higher than the average move velocity. (The higher velocity would account for acceleration, deceleration and run times of the motion pro/uniFB01le).Figure 6.1: Trapezoidal move and triangular move relates rated motor velocity to average move velocity for two point to point positioning move pro/uniFB01les.

<!-- image -->

<!-- image -->

Symbol

Description

<!-- image -->

| ω max   | rated operating speed of motor RPM                                          |
|---------|-----------------------------------------------------------------------------|
| ω trap  | average speed of motor required for a speci/uniFB01ed trapezoidal move, RPM |
| ω tri   | average speed of motor required for a speci/uniFB01ed triangular move, RPM  |
| D       | total distance traveled, motor shaft revolutions                            |
| t 1     | acceleration time, seconds                                                  |
| t 2     | run time, seconds                                                           |
| t 3     | deceleration time, seconds                                                  |
| t 4     | dwell time, seconds                                                         |

Table 14: Trapezoidal and triangular move symbols

<!-- image -->

## 7 Figures Index

|    | torque characteristic . . . . . . . . . .                                    |
|----|------------------------------------------------------------------------------|
|  2 | QBL4208-100-04-025-1k velocity vs. torque characteristics . . . . . . . . .  |
|  3 | Connection and circuit diagram for the line driver outputs . . . . . . . . . |

4

Example wave form for CCW rotation

9

|   5 | Dimensions of motor & encoder kit (all units = mm) . . . . . . . . . . . . .   |   9 |
|-----|--------------------------------------------------------------------------------|-----|
|   6 | Length of motor wires/cables (all units = mm) . . . . . . . . . . . . . . .    |  10 |

<!-- image -->

## 8 Tables Index

| 2   | Electrical and Mechanical Characteris- tics Motor . . . . . . . . . . . . . . . . . .   | 11 13   | Connector and signals of the encoder Motor length . . . . . . . . . . . . . .       | 8 9   |
|-----|-----------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------|-------|
| 3   |                                                                                         | 4 6     |                                                                                     |       |
| 4   | Electrical Characteristics Encoder . Mechanical Speci/uniFB01cations . . . . .          | 14      | . Trapezoidal and triangular move sym- bols . . . . . . . . . . . . . . . . . . . . | 12    |
|     | . . Environmental . . .                                                                 | 7       | . . . . . . . . . . .                                                               | 17    |
| 5   | Speci/uniFB01cations . . .                                                              | 7 15    | Hardware Revision . . . . . . . . . .                                               | 17    |
| 7   | . . Connector and signals of motor                                                      | 7 16    | Document Revision .                                                                 |       |

HALL sensor connector and signals

.

8

<!-- image -->

1

Order codes

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

3

9

## 9 Supplemental Directives

## 9.1 Producer Information

## 9.2 Copyright

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

TRINAMIC owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources. © Copyright 2021 TRINAMIC. All rights reserved. Electronically published by TRINAMIC, Germany.

## 9.3 Trademark Designations and Symbols

This Hardware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by TRINAMIC or by other manufacturers, whose products are used or referred to in combination with TRINAMIC's products and TRINAMIC's product documentation.

## 9.4 Target User

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 9.5 Disclaimer: Life Support Systems

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 9.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

TRINAMIC products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by TRINAMIC. TRINAMIC conveys no patent, copyright, mask work right or other trade mark right to this product. TRINAMIC assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without TRINAMIC's speci/uniFB01c written consent.

## 9.7 Collateral Documents &amp; Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.trinamic.com.

<!-- image -->

## 10 Revision History

## 10.1 Hardware Revision

Version

Date

Author

## 10.2 Document Revision

Version

Date

Author

|   1.00 | 22.02.2019   | SK   | Initial release.                                             |
|--------|--------------|------|--------------------------------------------------------------|
|    1.1 | 11.12.2019   | SK   | Motor wires type update to UL1430.                           |
|    1.2 | 27.04.2020   | SK   | HALL sensors and signals updated.                            |
|    1.3 | 11.08.2020   | SK   | Lpr parameter updated. Motor cable length information added. |
|    1.4 | 16.04.2021   | SK   | Order codes updated.                                         |

Description

Table 15: Hardware Revision

| 1.00   | 24.01.2019   | TMC   | Initial release   |
|--------|--------------|-------|-------------------|

Description

Table 16: Document Revision

<!-- image -->