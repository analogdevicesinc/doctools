<!-- lastmod 2020-04-28 -->
<!-- image -->

Data Sheet

## FEATURES

Broadband frequency range: 0.1 GHz to 20 GHz Nonreflective, 50 Ω design Low insertion loss: 1.7 dB typical to 20 GHz High isolation: 46 dB typical to 20 GHz High input linearity Input P1dB: 25 dBm typical Input IP3: 41 dBm typical High power handling 27 dBm through path 25 dBm terminated path

10-pad, 1.3 mm × 0.85 mm × 0.102 mm CHIP

## APPLICATIONS

## Test instrumentations

Microwave radios and very small aperture terminals (VSATs)

Military radios, radars, electronic counter measure (ECMs) Broadband telecommunications systems

## GENERAL DESCRIPTION

The HMC347B is a broadband, nonreflective gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT) SPDT monolithic microwave integrated circuit (MMIC) chip. The switch operates from 0.1 GHz to 20 GHz with an insertion loss of 1.7 dB and an isolation of 46 dB to 20 GHz due to the implementation of on-chip, via hole structures.

## GaAs, SPDT Switch, Nonreflective,

## 0.1 GHz to 20 GHz

[HMC347B](https://www.analog.com/HMC347B?doc=HMC347B.pdf)

<!-- image -->

The switch operates with two negative control voltage inputs (VCTL = -5 V or 0 V), requires no supply, and has no current consumption. All electrical performance data is acquired with the RFx pads of the HMC347B connected to 50 Ω transmission lines via one 3.0 mil × 0.5 mil ribbon of minimal length.

## [HMC347B](https://www.analog.com/HMC347B?doc=HMC347B.pdf)

| TABLE OF CONTENTS Features.............................................................................................. 1                                                             | Typical Performance Characteristics .............................................6                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1                                                                                  | Insertion Loss, Return Loss, and Isolation ................................6                                                                                                     |
| Functional Block Diagram.............................................................. 1                                                                                               | Input P1dB, Input P0.1dB, and Input IP3.................................7                                                                                                        |
| General Description......................................................................... 1                                                                                         | Theory of Operation.........................................................................8                                                                                    |
| Revision History ............................................................................... 2                                                                                     | Applications Information ................................................................9                                                                                       |
| Specifications .................................................................................... 3                                                                                  | Mounting and Bonding Techniques ..........................................9                                                                                                      |
| Absolute Maximum Ratings ........................................................... 4                                                                                                 | Assembly Diagram........................................................................9                                                                                        |
| Thermal Resistance...................................................................... 4                                                                                             | Outline Dimensions....................................................................... 10                                                                                     |
| ESD Caution.................................................................................. 4                                                                                        | Ordering Guide .......................................................................... 10                                                                                     |
| Pin Configuration and Function Descriptions ............................ 5                                                                                                             |                                                                                                                                                                                  |
| REVISION HISTORY                                                                                                                                                                       |                                                                                                                                                                                  |
| 4/2020-Rev. Dto Rev. E                                                                                                                                                                 | Deleted Handling Precautions Section, Mounting Section, and                                                                                                                      |
| Changes to Ordering Guide.......................................................... 10                                                                                                 | Wire Bonding Section.......................................................................6                                                                                     |
| This Hittite Microwave Products data sheet has been reformatted                                                                                                                        | Added Figure 7 .................................................................................6 Changes to Figure 5, Figure 6, and Figure 8..................................6 |
| to meet the styles and standards of Analog Devices, Inc.                                                                                                                               | Added Figure 9 and Figure 12 to Figure 14...................................7                                                                                                    |
| 3/2020-Rev. 03.0518 to Rev.D                                                                                                                                                           | Changes to Figure 10 and Figure 11...............................................7                                                                                               |
| Updated Format ................................................................ Universal                                                                                              | Added Theory of Operation Section ..............................................8                                                                                                |
| Changes to Features Section and General Description Section ...... 1 Changes to Table 1........................................................................... 3                   | Added Applications Information Section and Assembly Diagram Section ................................................................................9                            |
| Deleted Control Voltages Table ..................................................... 3 Changes to Table 2........................................................................... 4 | Changed Mounting &Bonding Techniques for Millimeterwave                                                                                                                          |
|                                                                                                                                                                                        | GaAs MMICs Section to Mounting and Bonding Techniques                                                                                                                            |
| Deleted Suggested Drive Circuit Figure and GNDInterface                                                                                                                                | Section.................................................................................................9                                                                        |
| Schematic Figure .............................................................................. 4                                                                                      | Changes to Figure 15 and Figure 16...............................................9                                                                                               |
| Added Figure 2 and Figure 3; Renumbered Sequentially........... 5                                                                                                                      | Updated Outline Dimensions ...................................................... 10                                                                                             |
| Changes to Table 4 and Figure 4.................................................... 5                                                                                                  | Changes to Ordering Guide.......................................................... 10                                                                                           |

## SPECIFICATIONS

Control voltage (VCTL) = -5 V or 0 V, die temperature (TDIE) = 25°C, 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                   | Symbol          | Test Conditions/Comments      |   Min |   Typ |   Max | Unit   |
|-----------------------------|-----------------|-------------------------------|-------|-------|-------|--------|
| BROADBAND FREQUENCY RANGE   | f               |                               |   0.1 |       |    20 | GHz    |
| INSERTION LOSS              |                 | 0.1 GHz to 10 GHz             |       |   1.6 |       | dB     |
|                             |                 | 0.1 GHz to 20 GHz             |       |   1.7 |   2.2 | dB     |
| ISOLATION                   |                 |                               |       |       |       |        |
| BetweenRFCandRF1toRF2       |                 | 0.1 GHz to 10 GHz             |       |    52 |       | dB     |
|                             |                 | 0.1 GHz to 20 GHz             |    40 |    46 |       | dB     |
| RETURN LOSS                 |                 | 0.1 GHz to 20 GHz             |       |       |       |        |
| RFC                         |                 |                               |       |    12 |       | dB     |
| RF1 and RF2                 |                 |                               |       |       |       |        |
| On State                    |                 |                               |       |    16 |       | dB     |
| Off State                   |                 |                               |       |    18 |       | dB     |
| SWITCHING CHARACTERISTICS   |                 |                               |       |       |       |        |
| Rise and Fall Time          | t RISE , t FALL | 10% to 90% of RF output       |       |     3 |       | ns     |
| On and Off Time             | t ON , t OFF    | 50% V CTL to 90% of RF output |       |    10 |       | ns     |
| INPUT LINEARITY             |                 | 0.5 GHz to 20 GHz             |       |       |       |        |
| Input 1 dB Compression      | P1dB            | V CTL = -5 V or 0 V           |    23 |    25 |       | dBm    |
|                             |                 | V CTL = -3 V or 0 V           |       |    24 |       | dBm    |
| Input 0.1 dB Compression    | P0.1dB          | V CTL = -5 V or 0 V           |       |    21 |       | dBm    |
|                             |                 | V CTL = -3 V or 0 V           |       |    19 |       | dBm    |
| Input Third-Order Intercept | IP3             | 10 dBmper tone, 1 MHz spacing |       |       |       |        |
|                             |                 | V CTL = -5 V or 0 V           |       |    41 |       | dBm    |
|                             |                 | V CTL = -3 V or 0 V           |       |    41 |       | dBm    |
| DIGITAL CONTROL INPUTS      |                 |                               |       |       |       |        |
| Voltage                     |                 |                               |       |       |       |        |
| Low                         | V INL           |                               |  -0.2 |       |     0 | V      |
| High                        | V INH           |                               |    -5 |       |    -3 | V      |
| Current                     |                 |                               |       |       |       |        |
| Low                         | I INL           | V CTL = 0 V                   |       |     3 |       | µA     |
| High                        | I INH           | V CTL = -5 V to -3 V          |       |    10 |       | µA     |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                            | Rating                |
|------------------------------------------------------|-----------------------|
| V CTL                                                | -7.5 V dc to +0.5 V   |
| RF Input Power (f = 0.5 GHz to 20 GHz, T DIE = 85°C) |                       |
| V CTL = -5 V or 0 V                                  |                       |
| Through Path                                         | 27dBm                 |
| Terminated Path                                      | 25dBm                 |
| Hot Switching                                        | 23dBm                 |
| V CTL = -3 V or 0 V                                  |                       |
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
| C-10-10                   |        |        |
| Through Path              |    118 | °C/W   |
| Terminated Path           |    200 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions 1

| Pin No.     | Mnemonic   | Description                                                                                                                  |
|-------------|------------|------------------------------------------------------------------------------------------------------------------------------|
| 1           | RF1        | RF Throw Pad 1. This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ 0 V. |
| 2, 5, 8, 10 | CTRLA      | Control Input A. See Figure 4 for the interface schematic.                                                                   |
| 3, 6, 9     | CTRLB      | Control Input B. See Figure 4 for the interface schematic.                                                                   |
| 4           | RFC        | RF CommonPad. This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ 0 V.   |
| 7           | RF2        | RF Throw Pad 2. This pad is dc-coupled and matched to 50 Ω. Blocking capacitors are required if the RF line potential ≠ 0 V. |
| Die Bottom  | GND        | Die bottom must be connected to RF ground.                                                                                   |

## INTERFACE SCHEMATICS

Figure 3. RFC, RF1, and RF2 Interface Schematic

<!-- image -->

Figure 4. CTRLA, CTRLB Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## INSERTION LOSS, RETURN LOSS, AND ISOLATION

<!-- image -->

Figure 5. Insertion Loss vs. Frequency over Temperature

<!-- image -->

Figure 6. Return Loss vs. Frequency

Figure 7. Insertion Loss vs. Frequency, Between RFC and RF1/RF2

<!-- image -->

Figure 8. Isolation vs. Frequency, Between RFC and RF1/RF2

<!-- image -->

## INPUT P1dB, INPUT P0.1dB, AND INPUT IP3

<!-- image -->

Figure 9. Input P1dB vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 10. Input P0.1dB vs. Frequency over Temperature, VCTL = -5 V

Figure 11. Input IP3 vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 12. Input P1dB vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

22319-013

Figure 13. Input P0.1dB vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

Figure 14. Input IP3 vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

## THEORY OF OPERATION

The HMC347B requires two negative control voltages at the CTRLx pads to control the state of the RF paths and requires no supply.

Depending on the logic level applied to the CTRLx pads, one RF path is in the insertion loss state and the other path is in the isolation state (see Table 5). The insertion loss path conducts the RF signal between the RF1 pad or RF2 pad and the RFC pad. The isolation path provides high loss between the selected insertion loss path and the unselected RF1 pad or RF2 pad that is terminated to an internal 50 Ω resistor.

Table 5. Control Voltage Truth Table

| Digital Control Inputs   | Digital Control Inputs   | RF Paths            | RF Paths            |
|--------------------------|--------------------------|---------------------|---------------------|
| CTRLA                    | CTRLB                    | RF1 to RFC          | RF2 to RFC          |
| High                     | Low                      | Insertion loss (on) | Isolation (off)     |
| Low                      | High                     | Isolation (off)     | Insertion loss (on) |

The ideal power-up sequence is as follows:

1. Ground to the die bottom.
2. Power up the digital control inputs. The relative order of the logic control inputs is not important.
3. Apply an RF input signal. The design is bidirectional and the RF input signal can be applied to the RFC pad when the RF1 and RF2 throw pads are outputs, or the RF input signal can be applied to the RF1 and RF2 throw pads when the RFC pad is the output. The RFx pads are dc-coupled to 0 V, and no dc blocking is required at the RFx pads when the RF line potential is equal to 0 V.

The power-down sequence is the reverse of the power-up sequence.

## APPLICATIONS INFORMATION MOUNTING AND BONDING TECHNIQUES

The HMC347B is back metallized and must be attached directly to the ground plane with gold tin (AuSn) eutectic preforms or with electrically conductive epoxy.

The die thickness is 0.102 mm (4 mil). The 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick, alumina thin film substrates are recommended to bring the RF signal to and from the HMC347B (see Figure 15).

Figure 15. Bonding RF Pads to 5 mil Substrate

<!-- image -->

When using 0.254 mm (10 mil) thick, alumina thin film substrates, the HMC347B must be raised 0.150 mm (6 mil) so that the surface of the HMC347B is coplanar with the surface of the substrate. The device can be raised by attaching the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick molybdenum (Mo)

heat spreader (moly tab), which is then attached to the ground plane (see Figure 16).

22319-016

Figure 16. Bonding RF Pads to 10 mil Substrate

<!-- image -->

Microstrip substrates are placed as close to the HMC347B as possible to minimize bond length. Typical die to substrate spacing is 0.076 mm (3 mil).

RF bonds with 3 mil × 0.5 mil ribbon and dc bonds with 1 mil diameter wire are recommended. All bonds must be as short as possible.

## ASSEMBLY DIAGRAM

An assembly diagram of the HMC347B is shown in Figure 17.

Figure 17. Die Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

Figure 18. 10-Pad Bare Die [CHIP]

<!-- image -->

(C-10-10) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1    | Packing Information        | Temperature Range   | Package Description    | Package Option   |
|------------|----------------------------|---------------------|------------------------|------------------|
| HMC347B    | Waffle Pack                | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-10          |
| HMC347B-GP | Gel Pack                   | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-10          |
| HMC347B-SX | Waffle Pack (Sample Order) | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-10          |

<!-- image -->