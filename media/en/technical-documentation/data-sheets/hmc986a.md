<!-- lastmod 2019-08-05 -->
<!-- image -->

Data Sheet

## FEATURES

Broadband frequency range: 0.1 GHz to 50 GHz Reflective 50 Ω design Low insertion loss: 2.3 dB at 50 GHz High isolation: 30 dB at 50 GHz High input linearity 1 dB power compression (P1dB): 28 dBm typical Third-order intercept (IP3): 40 dBm typical High power handling 27 dBm through path 13-pad, 0.98 mm × 0.75 mm × 0.1 mm, CHIP

## APPLICATIONS

## Test instrumentation

Microwave radios and very small aperture terminals (VSATs) Military radios, radars, and electronic counter measures (ECMs)

Broadband telecommunications systems

## GENERAL DESCRIPTION

The HMC986A is a reflective, single-pole, double throw (SPDT) switch, manufactured using a gallium arsenide (GaAs) process. This switch typically provides low insertion loss of 2.3 dB and high isolation of 30 dB in broadband frequency range from 0.1 GHz to 50 GHz.

## 0.1 GHz to 50 GHz, GaAs, MMIC Reflective SPDT Switch

[HMC986A](https://www.analog.com/hmc986A?doc=HMC986A.pdf)

13606-001

<!-- image -->

This switch operates with two negative logic control voltages from -5 V to -3 V . All electrical performance data is acquired with the RFx pads of the HMC986A connected to 50 Ω transmission lines via one 3.0 mil × 0.5 mil ribbon bond of minimal length.

## [HMC986A](https://www.analog.com/hmc986A?doc=HMC986A.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1                                                                                |
| Functional Block Diagram .............................................................. 1                                                                                            |
| General Description......................................................................... 1                                                                                       |
| Revision History ............................................................................... 2                                                                                   |
| Specifications..................................................................................... 3                                                                                |
| Absolute Maximum Ratings............................................................ 4                                                                                               |
| Power Derating Curve ................................................................. 4                                                                                             |
| ESD Caution.................................................................................. 4                                                                                      |
| Pin Configuration and Function Descriptions............................. 5                                                                                                           |
| Interface Schematics..................................................................... 5                                                                                          |
| REVISION HISTORY                                                                                                                                                                     |
| Deleted Figure 1; Renumbered Sequentially................................. 1                                                                                                         |
| Added Figure 1; Renumbered Sequentially .................................. 1                                                                                                         |
| Changes to Features Section and General Description Section .... 1                                                                                                                   |
| Changes to Specifications Section and Table 1............................. 3                                                                                                         |
| Added Figure 2, Thermal Resistance Section, and Table 3; Renumbered Sequentially................................................................ 4                                   |
| Changes to Table 2............................................................................ 4                                                                                     |
| Added Figure 3, Figure 4, and Figure 5 ......................................... 5                                                                                                   |
| Changes to Table 4............................................................................ 5                                                                                     |
| Added Figure 6 to Figure 9.............................................................. 6 Added Figure 10 to Figure 15............................................................. |

Typical Performance Characteristics ..............................................6

Insertion Loss, Return Loss, and Isolation ................................6

Input Power Compression (P1dB) and Third-Order Intercept

(IP3) ................................................................................................7

Theory of Operation .........................................................................9

Applications Information .............................................................. 10

Mounting and Bonding Techniques ........................................ 10

Assembly Diagram ..................................................................... 10

Outline Dimensions ....................................................................... 11

Ordering Guide .......................................................................... 11

## SPECIFICATIONS

VCTL = -5 V to -3 V or 0V , TDIE = 25°C, 50 Ω system, unless otherwise noted.

## Table 1.

| Parameter                  | Symbol          | Test Conditions/Comments     |   Min |   Typ |   Max | Unit   |
|----------------------------|-----------------|------------------------------|-------|-------|-------|--------|
| BROADBAND FREQUENCY RANGE  | f               |                              |   0.1 |       |    50 | GHz    |
| INSERTION LOSS             |                 | 0.1 GHz to 18 GHz            |       |   1.7 |   2.3 | dB     |
|                            |                 | 18 GHz to 40 GHz             |       |   1.9 |   2.5 | dB     |
|                            |                 | 40 GHz to 50 GHz             |       |   2.3 |   2.8 | dB     |
| ISOLATION                  |                 |                              |       |       |       |        |
| Between RFC and RF1 to RF2 |                 | 0.1 GHz to 18 GHz            |    30 |    36 |       | dB     |
|                            |                 | 18 GHz to 40 GHz             |    25 |    32 |       | dB     |
|                            |                 | 40 GHz to 50 GHz             |    22 |    30 |       | dB     |
| RETURN LOSS                |                 |                              |       |       |       |        |
| RFC and RF1/RF2            |                 | 0.1 GHz to 18 GHz            |       |    15 |       | dB     |
|                            |                 | 18 GHz to 40 GHz             |       |    15 |       | dB     |
|                            |                 | 40 GHz to 50 GHz             |       |    13 |       | dB     |
| SWITCHING CHARACTERISTICS  |                 |                              |       |       |       |        |
| Rise and Fall Time         | t RISE , t FALL | 10% to 90% of RF output      |       |     2 |       | ns     |
| On and Off Time            | t ON , t OFF    | 50%V CTL to 90% of RF output |       |    11 |       | ns     |
| INPUT LINEARITY 1          |                 | 2 GHz to 50 GHz              |       |       |       |        |
| 1 dB Compression           | P1dB            | V CTL = -5V/0V               |    22 |    28 |       | dBm    |
|                            |                 | V CTL = -3V/0V               |       |    25 |       | dBm    |
| 0.1 dB Compression         | P0.1dB          | V CTL = -5V/0V               |       |    25 |       | dBm    |
|                            |                 | V CTL = -3V/0V               |       |    22 |       | dBm    |
| Third-Order Intercept      | IP3             | 0 dBmper tone, 1 MHz spacing |       |       |       |        |
|                            |                 | V CTL = -5V/0V               |       |    40 |       | dBm    |
|                            |                 | V CTL = -3V/0V               |       |    40 |       | dBm    |
| DIGITAL CONTROL INPUTS     |                 | V 1 andV 2 pins              |       |       |       |        |
| Voltage                    | V CTL           |                              |       |       |       |        |
| Low                        | V INL           |                              |  -0.2 |     0 |  +0.2 | V      |
| High                       | V INH           |                              |    -5 |       |    -3 | V      |
| Current                    | I CTL           |                              |       |       |       |        |
| Low                        | I INL           | V CTL = 0V                   |       |     1 |       | µA     |
| High                       | I INH           | V CTL = -5V to -3V           |       |    10 |       | µA     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                            | Rating          |
|------------------------------------------------------|-----------------|
| Digital Control Input Voltage                        | -5.5V to +0.5V  |
| RF Input Power 1 (f = 2 GHz to 50 GHz, T DIE = 85°C) |                 |
| V CTL = -5V/0V                                       |                 |
| Through Path                                         | 27 dBm          |
| Hot Switching                                        | 24 dBm          |
| V CTL = -3V/0V                                       |                 |
| Through Path                                         | 24 dBm          |
| Hot Switching                                        | 21 dBm          |
| Temperature                                          |                 |
| Junction Temperature, T J                            | 150°C           |
| Die Bottom Temperature Range, T DIE                  | -55°C to +85°C  |
| Storage Temperature Range                            | -65°C to +150°C |
| ESD Sensitivity                                      |                 |
| Human Body Model (HBM)                               | 150V (Class 0)  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## POWER DERATING CURVE

Figure 2. Power Derating at Frequencies &lt;2 GHz

<!-- image -->

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

Table 3.

| Package Option   |   θ JC | Unit   |
|------------------|--------|--------|
| C-13-1           |    260 | °C/W   |

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

## Table 4. Pad Function Descriptions

| Pad No.          | Mnemonic   | Description                                                                                                                                                                                                                                                        |
|------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6, 7, 9 | GND        | Analog Ground. These pads are connected to die backside ground and can be used to achieve a ground to signal to ground interface for optimum RF performance.The performance of the HMC986A is measured with a Ground-Signal-Ground interface on RF1, RFC, and RF2. |
| 2                | RF1        | RFThrow Pad 1. This pad is dc-coupled to 0V and ac matched to 50 Ω. No dc blocking capacitor is necessary when the RF line potential is equal to 0Vdc. See Figure 4 for the interface schematic.                                                                   |
| 5                | RFC        | RF CommonPad.This pad is dc-coupled to 0V and ac matched to 50 Ω. No dc blocking capacitor is necessary when the RF line potential is equal to 0Vdc. See Figure 4 for the interface schematic.                                                                     |
| 8                | RF2        | RFThrow Pad 2. This pad is dc-coupled to 0V and ac matched to 50 Ω. No dc blocking capacitor is necessary when the RF line potential is equal to 0Vdc. See Figure 4 for the interface schematic.                                                                   |
| 10, 13           | GND        | Ground. These pads are connected to die backside ground and are optional for use asV 1 ,V 2 control signal ground return.                                                                                                                                          |
| 11               | V 2        | Control Input 2. See Table 5. See Figure 5 for the interface schematic.                                                                                                                                                                                            |
| 12               | V 1        | Control Input 1. See Table 5. See Figure 5 for the interface schematic.                                                                                                                                                                                            |
| Die Bottom       | GND        | Ground.TheDiebottom must beattached directly to the ground plane eutectically or with conductive epoxy.                                                                                                                                                            |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. RFC to RF1/RF2 Interface Schematic

<!-- image -->

13606-002

Figure 5. V1 and V2 Control Input Interface Schematic

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS INSERTION LOSS, RETURN LOSS, AND ISOLATION

<!-- image -->

Figure 6. Insertion Loss Between RFC and RF1 vs. Frequency over Temperature

Figure 7. Isolation Between RFC and RF1/ RF2 vs. Frequency

<!-- image -->

Figure 8. Insertion Loss Between RFC and RF1/RF2 vs. Frequency

<!-- image -->

13606-007

Figure 9. Return Loss for RFC, RF1 ON and  RF2 ON vs. Frequency

<!-- image -->

## INPUT POWER COMPRESSION (P1dB) AND THIRD-ORDER INTERCEPT (IP3)

<!-- image -->

Figure 10. Input P0.1dB vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 11. Input P0.1dB vs Low Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 12. Input P1dB vs. Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 13. Input P0.1dB vs  Frequency over Temperature, VCTL = -3 V

<!-- image -->

Figure 14. Input P0.1dB vs. Low Frequency over Temperature, VCTL = -3 V

<!-- image -->

Figure 15 Input P1dB vs. Low Frequency over Temperature, VCTL = -3 V

<!-- image -->

<!-- image -->

Figure 16. Input P1dB vs. Low Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 17. Input IP3 vs Frequency over Temperature, VCTL = -5 V

Figure 18. Input IP3 vs. Low Frequency over Temperature, VCTL = -5 V

<!-- image -->

Figure 19. Input P1dB vs. Low Frequency over Temperature, VCTL = -3 V

<!-- image -->

13606-019

Figure 20. Input IP3 vs. Frequency over Temperature, VCTL = -3 V

<!-- image -->

Figure 21 Input IP3 vs. Low Frequency over Temperature, VCTL = -3 V

<!-- image -->

## THEORY OF OPERATION

The HMC986A requires two logic control inputs at the V1 and V2 pads to control the state of the RF paths.

Depending on the logic level applied to the V1 and V2 pads, one RF path is in the insertion loss state while the other path is in an isolation state (see T able 5). The insertion loss path conducts the RF signal between the RF throw pad and RF common pad. The unselected RF port of the HMC986A is reflective. The isolation path provides high isolation between the unselected port and the insertion loss path.

Table 5. Control Voltage Truth Table

| Digital Control Input   |      |                     |                     |
|-------------------------|------|---------------------|---------------------|
|                         | Low  | Insertion loss (on) | Isolation           |
| High                    |      |                     | (off)               |
| Low                     | High | Isolation (off)     | Insertion loss (on) |

The ideal power-up sequence is as follows:

1. Ground to the die bottom.
2. Power up the digital control inputs. The relative order of the logic control inputs is not important. However, powering the digital control inputs before the VCTL supply can inadvertently become forward-biased and damage the internal electrostatic discharge (ESD) protection structures.
3. Apply an RF input signal. The design is bidirectional; the RF input signal can be applied to the RFC pad while the RF throw pads are the outputs or the RF input signal can be applied to the RF throw pads while the RFC pad is the output. All of the RF pads are dc-coupled to 0 V , and no dc blocking is required at the RF pads when the RF line potential is equal to 0 V .

The power-down sequence is the reverse of the power-up sequence.

<!-- image -->

## APPLICATIONS INFORMATION MOUNTING AND BONDING TECHNIQUES

The HMC986A is back metallized and must be attached directly to the ground plane with gold tin (AuSn) eutectic preforms or with electrically conductive epoxy.

The die thickness is 0.102 mm (4 mil). The 50 Ω microstrip transmission lines on 0.127 mm (5 mil) thick alumina thin film substrates are recommended for bringing RF to and from the HMC986A (see Figure 22).

The HMC986A must be raised 0.150 mm (6 mil) when using 0.254 mm (10 mil) thick alumina thin film substrates so that the surface of the HMC986A is coplanar with the surface of the substrate, which can be achieved by attaching the 0.102 mm (4 mil) thick die to a 0.15 mm (6 mil) thick molybdenum heat spreader (moly tab). The moly tab is then attached to the ground plane (see Figure 23).

Microstrip substrates are placed as close to the HMC986A as possible to minimize bond length. Typical die to substrate spacing is 0.076 mm (3 mil).

RF bonds made with 3 mil × 5 mil ribbon are recommended. DC bonds made with 1 mil diameter wire are recommended. All bonds must be as short as possible.

Figure 23. Bonding RF Pads to 10 mil Substrate

<!-- image -->

## ASSEMBLY DIAGRAM

An assembly diagram of the HMC986A is shown in Figure 24.

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

0.132

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 25. 13-Pad Bare Die [CHIP] (C-13-1) Dimensions shown in millimeters

| Model 1, 2   | Temperature Range   | Package Description    | Package Option   |
|--------------|---------------------|------------------------|------------------|
| HMC986A      | -55°C to +85°C      | 13-Pad Bare Die [CHIP] | C-13-1           |
| HMC986A-SX   | -55°C to +85°C      | 13-Pad Bare Die [CHIP] | C-13-1           |

## ORDERING GUIDE

1  The HMC986A is a RoHS-compliant part.

2  The HMC986A-SX is a sample order model.

<!-- image -->

07-09-2019-B

<!-- image -->