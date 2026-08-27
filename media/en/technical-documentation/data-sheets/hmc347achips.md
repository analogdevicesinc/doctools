<!-- lastmod 2020-01-08 -->
<!-- image -->

Data Sheet

## FEATURES

Broadband frequency range: 0.1 GHz to 20 GHz

Nonreflective, 50 Ω design Low insertion loss: 2.0 dB to 20 GHz High isolation: 40 dB to 20 GHz High input linearity Input P1dB: 29 dBm typical Input IP3: 45 dBm typical High power handling 27 dBm through path 25 dBm terminated path

10-pad, 1.22 mm × 0.85 mm × 0.1 mm, CHIP

## APPLICATIONS

Test instrumentations

Microwave radio(s) and very small aperture terminals (VSATs)

Military radios, radars, electronic counter measure (ECMs) Broadband telecommunications systems

## GENERAL DESCRIPTION

The HMC347A is a broadband, nonreflective, gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), single-pole, double throw (SPDT), monolithic microwave integrated circuit (MMIC) chip. The switch operates from 0.1 GHz to 20 GHz with an insertion loss of &lt;2.0 dB and an isolation of &gt;40 dB due to the implementation of on-chip, via hole structures.

## GaAs, SPDT Switch, Nonreflective, 0.1 GHz to 20 GHz

[HMC347A](https://www.analog.com/HMC347A-die?doc=HMC347ACHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

13910-001

<!-- image -->

The switch operates with two negative control voltage inputs (VCTL = -5 V/0 V) and requires no supply. All electrical performance data is acquired with the RFx pads of the HMC347A connected to 50 Ω transmission lines via one 3.0 mil × 0.5 mil ribbon of minimal length.

## [HMC347A](https://www.analog.com/HMC347A-die?doc=HMC347ACHIPS.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................                                                                                       | 1   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| Applications.......................................................................................                                                                                           | 1   |
| Functional Block Diagram ..............................................................                                                                                                       | 1   |
| General Description.........................................................................                                                                                                  | 1   |
| Revision History ...............................................................................                                                                                              | 2   |
| Specifications.....................................................................................                                                                                           | 3   |
| Absolute Maximum Ratings............................................................                                                                                                          | 4   |
| Thermal Resistance ......................................................................                                                                                                     | 4   |
| ESD Caution..................................................................................                                                                                                 | 4   |
| Pin Configuration and Function Descriptions.............................                                                                                                                      | 5   |
| REVISION HISTORY                                                                                                                                                                              |     |
| 1/2020-Rev. Ato Rev. B Changes to Features Section, Figure 1, and General Description Section................................................................................................ | 1   |
| Changes to Table 1............................................................................                                                                                                | 3   |
| Changes to Table 3 and Table 4.......................................................                                                                                                         | 4   |
| Changes to Figure 2 and Table 4.....................................................                                                                                                          | 5   |
| Changes to Theory of Operation Section......................................                                                                                                                  | 8   |
| This Hittite Microwave Products data sheet has been reformatted meet the styles and standards of Analog Devices, Inc.                                                                         | to  |
| 3/2017-Rev. 02.0317 to Rev.A                                                                                                                                                                  |     |
| Changes to Features Section, Figure 1, and General Description Section ................................................................................................                       | 1   |
| ChangedV SS = -5 VtoV SS = -5 Vto -3 V, Table 1..................... 1............................................................................                                            | 3   |
| Changes to Table                                                                                                                                                                              | 3   |

Interface Schematics .....................................................................5

Typical Performance Characteristics ..............................................6

Insertion Loss, Return Loss, and Isolation ................................6

Input P1dB, Input P0.1dB, and Input IP3) ................................7

Theory of Operation .........................................................................8

Applications Information .................................................................9

Mounting and Bonding Techniques ...........................................9

Assembly Diagram ..................................................................... 10

Outline Dimensions ....................................................................... 11

Ordering Guide .......................................................................... 11

Deleted Bias Voltage &amp; Current Table, TTL/CMOS Control

Voltage Table, and Truth Table ........................................................  3

Changes to Table 2  .............................................................................  4

Added Power Derating Curve Section and Figure 2;

Renumbered Sequentially ................................................................  4

Added Figure 4  ...................................................................................  5

Deleted GND Interface Schematic Figure and TTL Interface

Circuit Figure .....................................................................................  5

Changes to Table 3 and Figure 5  ......................................................  5

Added Table 4; Renumbered Sequentially .....................................  8

Added Theory of Operation Section ..............................................  8

Added Applications Information Section, Figure 14, Figure 15,

and Assembly Diagram Section  .......................................................  9

Updated Outline Dimensions ....................................................... 10

Updated Ordering Guide .............................................................. 10

## SPECIFICATIONS

Control voltage (VCTL) = -5 V/0 V , die temperature (TDIE) = 25°C, 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                   | Symbol          | Test Conditions/Comments      |   Min |   Typ |   Max | Unit   |
|-----------------------------|-----------------|-------------------------------|-------|-------|-------|--------|
| BROADBAND FREQUENCY RANGE   | f               |                               |   0.1 |       |    20 | GHz    |
| INSERTION LOSS              |                 | 0.1 GHz to 10 GHz             |       |   1.6 |   2.2 | dB     |
|                             |                 | 0.1 GHz to 20 GHz             |       |   2.0 |   2.7 | dB     |
| ISOLATION                   |                 |                               |       |       |       |        |
| BetweenRFCandRF1toRF2       |                 | 0.1 GHz to 10 GHz             |    47 |    52 |       | dB     |
|                             |                 | 0.1 GHz to 20 GHz             |    35 |    40 |       | dB     |
| RETURN LOSS                 |                 | 0.1 GHz to 20 GHz             |       |       |       |        |
| RFC                         |                 |                               |     9 |    12 |       | dB     |
| RF1 and RF2                 |                 |                               |       |       |       |        |
| On State                    |                 |                               |    13 |    18 |       | dB     |
| Off State                   |                 |                               |     8 |    11 |       | dB     |
| SWITCHING CHARACTERISTICS   |                 |                               |       |       |       |        |
| Rise and Fall Time          | t RISE , t FALL | 10% to 90% of RF output       |       |     3 |       | ns     |
| On and Off Time             | t ON , t OFF    | 50%V CTL to 90% of RF output  |       |    10 |       | ns     |
| INPUT LINEARITY             |                 | 0.5 GHz to 20 GHz             |       |       |       |        |
| Input 1 dB Compression      | P1dB            | V CTL = -5V/0V                |    22 |    29 |       | dBm    |
|                             |                 | V CTL = -3V/0V                |       |    24 |       | dBm    |
| Input 0.1 dB Compression    | P0.1dB          | V CTL = -5V/0V                |       |    27 |       | dBm    |
|                             |                 | V CTL = -3V/0V                |       |    21 |       | dBm    |
| Input Third-Order Intercept | IP3             | 10 dBmper tone, 1 MHz spacing |       |       |       |        |
|                             |                 | V CTL = -5V/0V                |    40 |    45 |       | dBm    |
|                             |                 | V CTL = -3V/0V                |       |    44 |       | dBm    |
| DIGITAL CONTROL INPUTS      |                 |                               |       |       |       |        |
| Voltage                     |                 |                               |       |       |       |        |
| Low                         | V INL           |                               |  -0.2 |       |     0 | V      |
| High                        | V INH           |                               |    -5 |       |    -3 | V      |
| Current                     | I CTL           |                               |       |       |       |        |
| Low                         | I INL           | V CTL = 0V                    |       |     3 |       | µA     |
| High                        | I INH           | V CTL = -5V to -3V            |       |    10 |       | µA     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                            | Rating                |
|------------------------------------------------------|-----------------------|
| V CTL                                                | -7.5 V dc to +0.5 V   |
| RF Input Power (f = 0.5 GHz to 20 GHz, T DIE = 85°C) |                       |
| V CTL = -5 V/0 V                                     |                       |
| Through Path                                         | 27dBm                 |
| Terminated Path                                      | 25dBm                 |
| Hot Switching                                        | 23dBm                 |
| V CTL = -3 V/0 V                                     |                       |
| Through Path                                         | 21dBm                 |
| Terminated Path                                      | 19dBm                 |
| Hot Switching                                        | 17dBm                 |
| Temperature                                          |                       |
| Channel                                              | 150°C                 |
| Storage                                              | -65°C to +150°C       |
| Operating                                            | -55°C to +85°C        |
| ESD(Electrostatic Discharge) Sensitivity             |                       |
| Human Body Model (HBM)                               | Class 0, passed 150 V |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case bottom (channel to package bottom) thermal resistance.

| Table 3. Package Option   |   θ JC | Unit   |
|---------------------------|--------|--------|
| C-10-9                    |        |        |
| Through Path              |    118 | °C/W   |
| Terminated Path           |    200 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions 1

| Pin No.     | Mnemonic   | Description                                                                                                                    |
|-------------|------------|--------------------------------------------------------------------------------------------------------------------------------|
| 1           | RF1        | RFThrow Pad 1. This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ 0 V.    |
| 2, 5, 8, 10 | CTRLA      | Control Input A. See Figure 4 for the interface schematic.                                                                     |
| 3, 6, 9     | CTRLB      | Control Input B. See Figure 4 for the interface schematic.                                                                     |
| 4           | RFC        | RF CommonPad.This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ 0 V.      |
| 7           | RF2        | RFThrow Pad 2. This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ to 0 V. |
| Die Bottom  | GND        | Die bottom must be connected to RF ground.                                                                                     |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. RFC, RF1, and RF2 Interface Schematic

<!-- image -->

Figure 4. CTRLA, CTRLB Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS INSERTION LOSS, RETURN LOSS, AND ISOLATION

<!-- image -->

Figure 5. Insertion Loss vs. Frequency over Temperature

Figure 6. Return Loss vs. Frequency

<!-- image -->

Figure 7. Insertion Loss Between RFC and RF1/RF2 vs. Frequency

<!-- image -->

13910-008

Figure 8. Isolation Between RFC and RF1/RF2 vs. Frequency

<!-- image -->

## INPUT P1dB, INPUT P0.1dB, AND INPUT IP3

Figure 9. Input P1dB vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

13910-010

<!-- image -->

Figure 10. Input Power 0.1 dB vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 11. Input IP3 vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 10. Input P1dB vs. Frequency over Temperature, VCTL = -3 V

Figure 11. Input P0.1dB vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

Figure 12. Input IP3 vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

## THEORY OF OPERATION

The HMC347A requires two negative control voltages at the CTRLx pads to control the state of the RF paths and requires no supply.

Depending on the logic level applied to the CTRLx pads, one RF path is in the insertion loss state and the other path is in isolation state (see Table 5). The insertion loss path conducts the RF signal between the RF1 pad or RF2 pad and the RFC pad. The isolation path provides high loss between the selected insertion loss path and the unselected RF1 pad or RF2 pad that is terminated to an internal 50 Ω resistor.

Table 5. Control Voltage Truth Table

| Digital Control Input   | Digital Control Input   | RF Paths            | RF Paths            |
|-------------------------|-------------------------|---------------------|---------------------|
| CTRLA                   | CTRLB                   | RF1 to RFC          | RF2 to RFC          |
| High                    | Low                     | Insertion loss (on) | Isolation (off)     |
| Low                     | High                    | Isolation (off)     | Insertion loss (on) |

The ideal power-up sequence is as follows:

1. Ground to the die bottom.
2. Power up the digital control inputs. The relative order of the logic control inputs is not important.
3. Apply an RF input signal. The design is bidirectional and the RF input signal can be applied to the RFC pad when the RF1 and RF2 throw pads are outputs, or the RF input signal can be applied to the RF1 and RF2 throw pads when the RFC pad is the output. The RFx pads are dc-coupled to 0 V , and no dc blocking is required at the RFx pads when the RF line potential is equal to 0 V .

The power-down sequence is the reverse of the power-up sequence.

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES

The HMC347A is back metallized and must be attached directly to the ground plane with gold tin (AuSn) eutectic preforms or with electrically conductive epoxy.

The die thickness is 0.102 mm (4 mil). The 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick, alumina thin film substrates are recommended to bring the RF signal to and from the HMC347A (see Figure 13).

<!-- image -->

Figure 13. Bonding RF Pads to 5 mil Substrate

<!-- image -->

When using 0.254 mm (10 mil) thick, alumina thin film substrates, the HMC347A must be raised 0.150 mm (6 mil) so that the surface of the HMC347A is coplanar with the surface of the substrate. The device can be raised by attaching the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick molybdenum (Mo) heat spreader (moly tab), which is then attached to the ground plane (see Figure 14).

Figure 14. Bonding RF Pads to 10 mil Substrate

<!-- image -->

Microstrip substrates are placed as close to the HMC347A as possible to minimize bond length. Typical die to substrate spacing is 0.076 mm (3 mil).

RF bonds with 3 mil × 0.5 mil ribbon and dc bonds with 1 mil diameter wire are recommended. All bonds must be as short as possible.

<!-- image -->

## ASSEMBLY DIAGRAM

An assembly diagram of the HMC347A is shown in Figure 15.

Figure 15. Die Assembly Diagram

<!-- image -->

13910-017

## OUTLINE DIMENSIONS

<!-- image -->

Figure 16. 10-Pad Bare Die [CHIP] (C-10-9) Dimensions shown in millimeters

| Model 1, 2   | Temperature Range   | Package Description    | Package Option   |
|--------------|---------------------|------------------------|------------------|
| HMC347A      | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-9           |
| HMC347A-SX   | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-9           |

## ORDERING GUIDE

1  The HMC347A is a RoHS Compliant Part.

2  The HMC347A-SX is a sample order model.

<!-- image -->

11-18-2019-B