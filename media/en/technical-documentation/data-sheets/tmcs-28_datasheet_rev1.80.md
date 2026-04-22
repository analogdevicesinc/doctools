<!-- lastmod 2023-08-03 -->
## TMCS-28 Hardware Manual

Hardware Version V1.00 | Document Revision V1.80 • 2022-JUL-13

TMCS-28 is a low-cost and small-size optical incremental encoder for use with stepper motors and 3-phase PMSM/BLDC motors. It comes with high resolution optical code wheels with a resolution of up to 625 lines (40.000 counts).

<!-- image -->

- Stepper Motor FOC · Servo Motors

## Applications

## Simpli/uniFB01ed Block Diagram

<!-- image -->

<!-- image -->

## Features

- High Resolution
- Low Cost
- Small Dimension
- Easy Mounting
- Precision Motion Control
- Robotics
- Automated Equipment

<!-- image -->

<!-- image -->

## Contents

| 1 Order Codes   | 1 Order Codes                      | 1 Order Codes                                                                                          | 3     |
|-----------------|------------------------------------|--------------------------------------------------------------------------------------------------------|-------|
| 2               | Technical Speci/uniFB01cations 2.1 | Technical Speci/uniFB01cations 2.1                                                                     | 5 5   |
|                 |                                    | Mechanical and Electrical Parameters . . . . . . . .                                                   |       |
|                 | 2.2 2.3                            | Signals and Connection . . Wave Form . . . . . . . .                                                   | 7     |
|                 |                                    | . . . . . . . . .                                                                                      | 8     |
|                 | 2.4                                | Mechanical Drawings . . . . . . . . . . . Motor Assembly . . .                                         | 9     |
|                 | 2.5                                | . . . . . . . . . . .                                                                                  | 10    |
| 3               | Figures Index                      | Figures Index                                                                                          | 11    |
| 4               | Tables Index                       | Tables Index                                                                                           | 12    |
| 5               | Supplemental Directives 5.1        | Supplemental Directives 5.1                                                                            | 13 13 |
|                 |                                    | Producer Information . . . . . . . . . . Copyright . . . . . . .                                       |       |
|                 | 5.2                                |                                                                                                        | 13    |
|                 | 5.3 5.4                            | . . . . . . . . . . . Trademark Designations and Symbols . Target User . . . . . . . . . . . . . . . . | 13    |
|                 |                                    | Disclaimer:                                                                                            | 13 13 |
|                 | 5.5 5.6                            | Life Support Systems . . . . Disclaimer: Intended Use . . . . .                                        | 13    |
|                 | 5.7                                | . . . Documents & Tools . . . . . .                                                                    | 14    |
|                 | Collateral Revision History 6.1    | Collateral Revision History 6.1                                                                        |       |
| 6               |                                    |                                                                                                        | 15    |
|                 | Hardware Revision                  | . . . . . . . . .                                                                                      | 15 15 |
| 6.2             | . . . Document Revision . . .      | . . . . . . . . .                                                                                      |       |

<!-- image -->

## 1 Order Codes

Order Code

| TMCS-28-5-10k-AT-01    | TMCS-28-5-10000-AT-01    | Encoder Mod- ule 28mmm diameter, Reso- lution of 625lpr (40.000cpr), ABN, 5mm shaft diameter, TTL                                            | 28mm x 28mm x 18mm   |
|------------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| TMCS-28-6.35-10k-AT-01 | TMCS-28-6.35-10000-AT-01 | Encoder Mod- ule 28mmm diameter, Reso- lution of 625lpr (40.000cpr), ABN, 6.35mm shaft diameter, TTL                                         | 28mm x 28mm x 18mm   |
| TMCS-28-5-1k-AT-01     | TMCS-28-5-1024-AT-01     | Encoder Mod- ule 28mmm diameter, Reso- lution of 64lpr (4.096cpr), ABN, 5mm shaft diameter, TTL Encoder Mod-                                 | 28mm x 28mm x 18mm   |
| TMCS-28-6.35-1k-AT-01  | TMCS-28-6.35-1024-AT-01  | ule 28mmm diameter, Reso- lution of 64lpr (4.096cpr), ABN, 6.35mm shaft diameter, TTL                                                        | 28mm x 28mm x 18mm   |
| TMCS-28-10k-KIT        | TMCS-28-KIT              | TRINAMIC TMCS-28 encoder kit including en- coder housing, 1x TMCS-28- 5-10k-AT-01, 1x TMCS-28- 6.35-10k-AT-01, cable loom and assembly tools | 100mm x 150mm x 30mm |

Size (LxWxH)

<!-- image -->

Old Order Code

Description

TMCS-28-1k-KIT

TMCS-28-1024-KIT

TRINAMIC

Table 1: Order codes

| TMCS-28 encoder kit including en- coder housing, 1x TMCS-28- 5-1k-AT-01, 1x TTMCS-28- 6.35-1k-AT-01, cable loom and assembly tools   |
|--------------------------------------------------------------------------------------------------------------------------------------|

Other encoder resolutions, signal output types, and shaft diameters on request.

<!-- image -->

100mm x 150mm x 30mm

## 2 Technical Speci/uniFB01cations

## 2.1 Mechanical and Electrical Parameters

Parameter

Parameter

Min

Typ

Max

Unit

Table 2: Electrical Characteristics

| Supply voltage                     | 4.5   | 5      | 5.5   | V                                    |
|------------------------------------|-------|--------|-------|--------------------------------------|
| Supply current                     |       |        | 110   | mA                                   |
| Rise/fall time                     |       |        | 10    | ns                                   |
| Frequency                          |       |        | 1500  | kHz                                  |
| Output Voltage "'H"'               | 2.4   |        |       | V                                    |
| Input Voltage "'L"'                |       |        | 0.4   | V                                    |
| Max. output current                |       |        | 20    | mA                                   |
| Resolution (TMCS-28-x-10000-AT-01) |       | 625    |       | lpr (lines per rotation)             |
| Resolution (TMCS-28-x-10000-AT-01) |       | 40.000 |       | cpr (increments/counts per rotation) |
| Resolution (TMCS-28-x-1024-AT-01)  |       | 64     |       | lpr (lines per rotation)             |
| Resolution (TMCS-28-x-1024-AT-01)  |       | 4.096  |       | cpr (increments/counts per rotation) |

Table 3: Mechanical Speci/uniFB01cations

| Hollow Diameter (symbol D in drawings)   | 5 / 6.35   |      | mm   |
|------------------------------------------|------------|------|------|
| Shaft Loading Axial                      |            | 50   | N    |
| Shaft Loading Radial                     |            | 80   | N    |
| Max. RPM                                 |            | 6000 | rpm  |
| Net weight                               | 30         |      | g    |

Min

Typ

Max

Unit

<!-- image -->

Parameter

Description

<!-- image -->

Table 4: Environmental Speci/uniFB01cations

| Operating Temperature   | -20 - +85°C                |
|-------------------------|----------------------------|
| Storage Temperature     | -20 - +85°C                |
| Operating Humidityl     | RH 85% max, non collecting |
| Shock                   | 490 m/s 2 , 3Dx2 times     |
| Vibration               | 1.2mm, 10-55kHz, 3Dx30min  |
| Protection              | IP40                       |

## 2.2 Signals and Connection

Pin Number

Color

Signal Name

Table 5: Connector and cable pinning and signals

|   1 | Red          | VCC    |
|-----|--------------|--------|
|   2 | Black        | GND    |
|   3 | White        | A+     |
|   4 | White/Black  | A-     |
|   5 | Green        | B+     |
|   6 | Green/Black  | B-     |
|   7 | Yellow       | Z+     |
|   8 | Yellow/Black | Z-     |
|   9 | Blue         | Shield |

The required encoder cable connector is a Molex type 5023800900 CLIK-MATE™ crimp housing using Molex type 5023810000 CLIK-MATE™ crimp terminals.

<!-- image -->

Figure 1: Connection and circuit diagram for the line driver outputs

<!-- image -->

## 2.3 Wave Form

<!-- image -->

Figure 2: Example wave form for CCW rotation

<!-- image -->

## 2.4 Mechanical Drawings

<!-- image -->

Figure 3: Bottom view, side view, and cut view (units = mm)

<!-- image -->

## 2.5 Motor Assembly

<!-- image -->

Figure 4: Required dimensions for motor assembly (units = mm) / D = 5mm or 6.35mm

<!-- image -->

## 3 Figures Index

|     | the line driver outputs . . . . . . . . .                                                                          | 7   | sembly (units = mm) / D = 5mm or . .   |
|-----|--------------------------------------------------------------------------------------------------------------------|-----|----------------------------------------|
| 2 3 | Example wave form for CCW rotation Bottom view, side view, and cut view (units = mm) . . . . . . . . . . . . . . . | 8 9 | 6.35mm . . . . . . . . . . . . . . . . |

1

Connection and circuit

diagram for

Download newest version at www.trinamic.com dimensions

for motor as-

<!-- image -->

4

Required

## 4 Tables Index

| 2   | Electrical                                                                                                  | 5                                                                   |
|-----|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| 3   | Characteristics Mechanical                                                                                  | nals . . . . . . . . . . . . . . . . . . . . 7 Revision . . . . . . |
|     | . . . . . . . . Speci/uniFB01cations . . . . . . . 5 Speci/uniFB01cations . . . . . 6 6 Hardware 7 Document | . . . . . 15 . . . . . 15                                           |
| 4   | Environmental                                                                                               | Revision . . . . . .                                                |

Connector and cable pinning and sig-

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

4

5

## 5 Supplemental Directives

## 5.1 Producer Information

## 5.2 Copyright

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

TRINAMIC owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources. © Copyright 2022 TRINAMIC. All rights reserved. Electronically published by TRINAMIC, Germany.

## 5.3 Trademark Designations and Symbols

This Hardware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by TRINAMIC or by other manufacturers, whose products are used or referred to in combination with TRINAMIC's products and TRINAMIC's product documentation.

## 5.4 Target User

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

## 5.5 Disclaimer: Life Support Systems

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 5.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

TRINAMIC products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by TRINAMIC. TRINAMIC conveys no patent, copyright, mask work right or other trade mark right to this product. TRINAMIC assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without TRINAMIC's speci/uniFB01c written consent.

## 5.7 Collateral Documents &amp; Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.trinamic.com.

<!-- image -->

## 6 Revision History

## 6.1 Hardware Revision

Version

Date

Author

## 6.2 Document Revision

Version

Date

Author

|   1.00 | 23.02.2017   | SK   | Initial release.                                                                                                   |
|--------|--------------|------|--------------------------------------------------------------------------------------------------------------------|
|   1.01 | 14.08.2017   | SK   | Correct hollow diameter and resolution on page 4.                                                                  |
|   1.1  | 11.10.2017   | SK   | Electrical ratings updated.                                                                                        |
|   1.11 | 21.12.2017   | OK   | Resolution entries clari/uniFB01ed.                                                                                |
|   1.12 | 27.08.2018   | SK   | Information on required shaft diameter D added.                                                                    |
|   1.3  | 24.09.2018   | SK   | Added 4.096 resolution versions.                                                                                   |
|   1.31 | 29.11.2018   | SK   | Waveform image description updated.                                                                                |
|   1.32 | 14.12.2018   | SK   | Updated order codes.                                                                                               |
|   1.4  | 01.07.2019   | SK   | Removed Start Torque Parameter since it is not needed/de/uniFB01ned for simply encoder kit without bearing inside. |
|   1.5  | 23.08.2019   | SK   | Order Codes updated.                                                                                               |
|   1.6  | 10.08.2020   | SK   | Corrected the lpr value.                                                                                           |
|   1.7  | 16.04.2021   | SK   | Order codes updated.                                                                                               |
|   1.8  | 13.07.2022   | SK   | Inconsistency in cpr parameter naming corrected in table 2.                                                        |

Description

Table 6: Hardware Revision

| 1.00   | 01.03.2017   | TMC   | Initial release   |
|--------|--------------|-------|-------------------|

Description

Table 7: Document Revision

<!-- image -->