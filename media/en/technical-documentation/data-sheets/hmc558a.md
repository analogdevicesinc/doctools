<!-- lastmod 2020-03-24 -->
<!-- image -->

Data Sheet

## FEATURES

Conversion loss: 7.5 dB typical at 5.5 GHz to 10 GHz Local oscillator (LO) to radio frequency (RF) isolation: 45 dB

typical at 5.5 GHz to 10 GHz

LO to intermediate frequency (IF) isolation: 45 dB typical at 10 GHz to 14 GHz

Input third-order intercept (IIP3): 21 dBm typical at 10 GHz to 14 GHz

Input P1dB: 11.5 dBm typical at 10 GHz to 14 GHz

Input second-order intercept (IIP2): 55 dBm typical at 10 GHz

to 14 GHz

Passive double-balanced topology Wide IF bandwidth: dc to 6 GHz

12-lead ceramic leadless chip carrier package

## APPLICATIONS

Point to point microwave radios

Point to multipoint radios Military end use

Instrumentation, automatic test equipment (ATE), and sensors

## GENERAL DESCRIPTION

The HMC558A is a general-purpose, double-balanced mixer in a leadless RoHS compliant SMT package that can be used as an upconverter or downconverter between 5.5 GHz and 14 GHz. This mixer is fabricated in a gallium arsenide (GaAs) metal semiconductor field effect transistor (MESFET) process, and requires no external components or matching circuitry.

## 5.5 GHz to 14 GHz, GaAs MMIC Fundamental Mixer

[HMC558A](http://www.analog.com/HMC558A?doc=HMC558A.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The HMC558A provides excellent LO to RF and LO to IF isolation due to optimized balun structures, and operates with LO drive levels as low as 9 dBm. The RoHS compliant HMC558A eliminates the need for wire bonding, and is compatible with high volume surface-mount manufacturing techniques.

<!-- image -->

## [HMC558A](http://www.analog.com/HMC558A?doc=HMC558A.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   | 1                                                                            |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Applications.......................................................................................       | 1                                                                            |
| Functional Block Diagram ..............................................................                   | 1                                                                            |
| General Description.........................................................................              | 1                                                                            |
| Revision History ...............................................................................          | 2                                                                            |
| Specifications.....................................................................................       | 3                                                                            |
| Absolute Maximum Ratings............................................................                      | 4                                                                            |
| Thermal Resistance ......................................................................                 | 4                                                                            |
| ESD Caution..................................................................................             | 4                                                                            |
| Pin Configuration and Function Descriptions.............................                                  | 5                                                                            |
| Interface Schematics.....................................................................                 | 5                                                                            |
| Typical Performance Characteristics .............................................                         | 6                                                                            |
| REVISION HISTORY                                                                                          |                                                                              |
| Changes to Spurious Performance                                                                           | Section................................. 12                                  |
| Added IF Spurious Performance Table........................................                               | 12                                                                           |
| 12/2017-Rev. Ato Rev. B Changes to Figure                                                                 | 16........................................................................ 7 |
| Changes to Ordering Guide..........................................................                       | 15                                                                           |

Downconverter Performance ......................................................6

Upconverter Performance  ............................................................9

Return Loss and Isolation Performance  .................................. 10

Spurious Performance ............................................................... 12

Theory of Operation ...................................................................... 13

Applications Information .............................................................. 14

Typical Application Circuit  ....................................................... 14

Evaluation Board Information.................................................. 14

Outline Dimensions ....................................................................... 15

Ordering Guide .......................................................................... 15

6/2017-Rev. 0 to Rev. A

Changes E-12-1 to E-12-4 ............................................ Throughout

Updated Outline Dimensions  ....................................................... 15

Changes to Ordering Guide .......................................................... 15

11/2016-Revision 0: Initial Version

## SPECIFICATIONS

LO drive level = 15 dBm, TA = 25°C, IF = 100 MHz, upper sideband, unless otherwise noted. All measurements performed as a downconverter.

## Table 1.

| Parameter                             | Min   |   Typ |   Max | Unit   |
|---------------------------------------|-------|-------|-------|--------|
| RF FREQUENCY RANGE                    | 5.5   |       |    14 | GHz    |
| LO FREQUENCY RANGE                    | 5.5   |       |    14 | GHz    |
| LO DRIVE LEVEL                        |       |    15 |       | dBm    |
| IF FREQUENCY RANGE                    | DC    |       |     6 | GHz    |
| PERFORMANCE AT RF = 5.5 GHz to 10 GHz |       |       |       |        |
| Conversion Loss                       |       |   7.5 |   9.5 | dB     |
| Single Sideband (SSB) Noise Figure    |       |   7.5 |       | dB     |
| Input Third-Order Intercept (IIP3)    | 15    |  17.5 |       | dBm    |
| Input 1 dB Compression Point (IP1dB)  |       |    10 |       | dBm    |
| Input Second-Order Intercept (IIP2)   |       |    50 |       | dB     |
| RF to IF Isolation                    | 8     |    16 |       | dB     |
| LO to RF Isolation                    | 35    |    45 |       | dB     |
| LO to IF Isolation                    | 20    |    35 |       | dB     |
| PERFORMANCE AT RF = 10 GHz to 14 GHz  |       |       |       |        |
| Conversion Loss                       |       |   8.5 |    10 | dB     |
| SSB Noise Figure                      |       |    10 |       | dB     |
| IIP3                                  | 16    |    21 |       | dBm    |
| IP1dB                                 |       |  11.5 |       | dBm    |
| IIP2                                  |       |    55 |       | dB     |
| RF to IF Isolation                    | 10    |    19 |       | dB     |
| LO to RF Isolation                    | 30    |    40 |       | dB     |
| LO to IF Isolation                    | 20    |    45 |       | dB     |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                                       | Rating           |
|-----------------------------------------------------------------|------------------|
| RF Input Power                                                  | 25dBm            |
| LO Input Power                                                  | 25dBm            |
| IF Input Power                                                  | 25dBm            |
| IF Source/Sink Current                                          | 3mA              |
| Maximum Junction Temperature                                    | 175°C            |
| Continuous P DISS (T = 85°C) (Derate 5.5 mW/°C Above 85°C)      | 495mW            |
| Operating Temperature Range                                     | -40°C to +85°C   |
| Storage Temperature Range                                       | -65°C to +150°C  |
| LeadTemperature Range (Soldering 60 sec)                        | -65°C to +150°C  |
| Electrostatic Discharge (ESD) Sensitivity HumanBody Model (HBM) | 2500V (Class 2)  |
| Field Induced Charged Device Model (FICDM)                      | 1000V (Class C5) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

## Table 3. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| E-12-4 1      |    180 | °C/W   |

1  See JEDEC standard JESD51-2 for additional information on optimizing the thermal impedance (PCB with 3 × 3 vias).

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NIC = NO INTERNAL CONNECTION.
2. EXPOSED PAD. CONNECT THE EXPOSED PAD TO A LOW IMPEDANCE THERMAL AND ELECTRICAL GROUND PLANE.

Figure 2. Pin Configuration

Table 4. Pin Function Descriptions

| Pin No.          | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                      |
|------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 4, 6, 7, 9 | GND        | Ground. See Figure 6 for the ground interface schematic.                                                                                                                                                                                                                                                                                                                         |
| 2                | LO         | Local Oscillator Port. This pin is ac-coupledandmatchedto 50 Ω. See Figure 4for the LOinterface schematic.                                                                                                                                                                                                                                                                       |
| 5                | IF         | DC-Coupled IF. For applications not requiring operation to dc, dc block this port externally using a series capacitor whose value is chosen to pass the necessary IF frequency range. For operation to dc, this pin must not source or sink more than 3 mAof current, or device nonfunction and possible device failure may result. See Figure 5 for the IF interface schematic. |
| 8                | RF         | RF Port. This pin is ac-coupled internally and matched to 50 Ω. See Figure 3 for the RF interface schematic.                                                                                                                                                                                                                                                                     |
| 10, 11, 12       | NIC        | No Internal Connection. These pins can be grounded.                                                                                                                                                                                                                                                                                                                              |
|                  | EPAD       | Exposed Pad. Connect the exposed pad to a low impedance thermal and electrical ground plane.                                                                                                                                                                                                                                                                                     |

## INTERFACE SCHEMATICS

<!-- image -->

<!-- image -->

RF

15000-003

Figure 3. RF Interface

LO

15000-004

Figure 4. LO Interface

IF

15000-005

Figure 5. IF Interface

GND

15000-006

Figure 6. Ground Interface

15000-002

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## DOWNCONVERTER PERFORMANCE

Data taken as downconverter, upper sideband (low-side LO), TA = 25°C, LO drive level = 15 dBm unless otherwise specified.

<!-- image -->

Figure 7. Conversion Gain vs. RF Frequency at Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 8. Input IP3 vs. RF Frequency at Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 9. Conversion Gain vs. RF Frequency at Various Temperatures, IF = 2 GHz

<!-- image -->

Figure 10. Conversion Gain vs. RF Frequency at Various LO Powers, IF = 100 MHz

Figure 11. Input IP3 vs. RF Frequency at Various LO Powers, IF = 100 MHz

<!-- image -->

Figure 12. Conversion Gain vs. RF Frequency at Various LO Powers, IF = 2 GHz

<!-- image -->

<!-- image -->

Figure 13. Input IP3 vs. RF Frequency at Various Temperatures, IF = 2 GHz

<!-- image -->

Figure 14. Conversion Gain vs. IF Frequency at Various Temperatures

<!-- image -->

Figure 15. Input IP3 vs. RF Frequency at Various LO Powers, IF = 2 GHz

<!-- image -->

<!-- image -->

Figure 16. Input P1dB vs. RF Frequency at Various Temperatures, IF = 100 MHz

Figure 17. SSB Noise Figure vs. RF Frequency at Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 18. SSB Noise Figure vs. RF Frequency at Various LO Powers, IF = 100 MHz

<!-- image -->

<!-- image -->

Figure 19. Input IP2 vs. RF Frequency at Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 20. Input IP2 vs. RF Frequency at Various Temperatures, IF = 2000 MHz

<!-- image -->

15000-128

Figure 21. Input IP2 vs. RF Frequency at Various LO Powers, IF = 100 MHz

<!-- image -->

Figure 22. Input IP2 vs. RF Frequency, at Various LO Powers, IF = 2000 MHz

<!-- image -->

## UPCONVERTER PERFORMANCE

Data taken as upconverter, upper sideband, TA = 25°C, LO drive level = 15 dBm unless otherwise specified.

<!-- image -->

Figure 23. Conversion Gain vs. RF Frequency for Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 24. Input IP3 vs. RF Frequency for Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 25. Conversion Gain vs. RF Frequency for Various LO Powers, IF = 100 MHz

<!-- image -->

Figure 26. Input IP3 vs. RF Frequency for Various LO Powers, IF = 100 MHz

<!-- image -->

<!-- image -->

## RETURN LOSS AND ISOLATION PERFORMANCE

Data taken at TA = 25°C, LO drive level = 15 dBm unless otherwise specified.

<!-- image -->

Figure 27. LO to RF and LO to IF Isolation vs. LO Frequency at Various Temperatures, IF = 100 MHz

<!-- image -->

Figure 28. RF to IF Isolation vs. RF Frequency at Various Temperatures, IF = 100 MHz

Figure 29. LO to RF and LO to IF Isolation vs. LO Frequency at Various LO Powers, IF = 100 MHz

<!-- image -->

Figure 30. RF to IF Isolation vs. RF Frequency at Various LO Powers, IF = 100 MHz

<!-- image -->

<!-- image -->

Figure 31. LO Return Loss vs. LO Frequency at Various Temperatures

Figure 32. IF Return Loss vs. IF Frequency at Various Temperatures, LO Power = 15 dBm, LO Frequency = 11 GHz

<!-- image -->

<!-- image -->

Figure 33. RF Return Loss vs. RF Frequency at Various Temperatures, IF = 100 MHz, LO Power = 15 dBm

<!-- image -->

## [HMC558A](http://www.analog.com/HMC558A?doc=HMC558A.pdf)

## SPURIOUS PERFORMANCE

Mixer spurious products are measured in decibels from either below the RF or the IF output power level. N/A means not applicable.

RF frequency = 8.1 GHz at -10 dBm, LO frequency = 8.0 GHz at 15 dBm are applied. Spur values are (M × RF) - (N × LO), IF output = 100 MHz.

|      |    | N×LO   |   N×LO |   N×LO |   N×LO |   N×LO |
|------|----|--------|--------|--------|--------|--------|
|      |    | 0      |      1 |      2 |      3 |      4 |
| M×RF |  0 | N/A    |     -1 |  +24.7 |  +24.4 |  +35.9 |
| M×RF |  1 | +10.3  |      0 |  +22.7 |  +34.9 |  +54.3 |
| M×RF |  2 | +83.6  |    +59 |    +64 |  +58.9 |  +81.9 |
| M×RF |  3 | +79    |  +84.3 |  +77.8 |  +69.6 |  +75.7 |
| M×RF |  4 | +76.3  |  +78.4 |  +84.6 |  +85.7 |  +91.3 |

IF frequency = 100 MHz at -10 dBm, LO frequency = 10.0 GHz at 15 dBm are applied. Spur values are (M × IF) + (N × LO).

|    | N×LO   | N×LO   | N×LO   | N×LO   | N×LO   |
|----|--------|--------|--------|--------|--------|
|    | 0      | 1      | 2      | 3      | 4      |
| -4 |        | N/A    | N/A    | N/A    | N/A    |
| -3 | N/A    | +60    | +77    | +82.7  | N/A    |
| -2 | N/A    | +56.5  | +70.2  | +71.8  | +74.8  |
| -1 | N/A    | 0      | +29.1  | +24.6  | +45.5  |
|  0 | N/A    | -1.4   | +31.6  | +27    | +37.5  |
| +1 | +69.8  | +0.3   | +28    | +24.9  | +45.7  |
| +2 | N/A    | +55.8  | +71.8  | +74.4  | +75.5  |
| +3 | N/A    | +60.6  | +76.8  | +84.2  | +91.2  |
| +4 | N/A    | N/A    | N/A    | N/A    | N/A    |

## THEORY OF OPERATION

The HMC558A is a general-purpose double balanced mixer in a leadless RoHS compliant SMT package that can be used as an upconverter or downconverter between 5.5 GHz and 14 GHz. This mixer is fabricated in a GaAs MESFET process, and requires no external components or matching circuitry. The HMC558A provides excellent LO to RF and LO to IF isolation due to optimized balun structures and operates with LO drive levels as low as 9 dBm. The RoHS compliant HMC558A eliminates the need for wire bonding, and is compatible with high volume surface mount manufacturing techniques.

## APPLICATIONS INFORMATION

## TYPICAL APPLICATION CIRCUIT

15000-028

Figure 34. Typical Application Circuit

<!-- image -->

## Table 5. Bill of Materials for the EV1HMC558ALC3B Evaluation Board

|   Level |   Item | Part Number   |   Quantity | Reference Designator   | Description             |
|---------|--------|---------------|------------|------------------------|-------------------------|
|       1 |      1 | 117611-1      |          1 |                        | PCB, evaluation board   |
|       1 |      2 | 104935        |          2 | J1 to J2               | 2.92 mmconnector, SRI   |
|       1 |      3 | 105192        |          1 | J3                     | SMA connector, Johnson  |
|       1 |      4 | HMC558ALC3B   |          1 | U1                     | Device under test (DUT) |

## EVALUATION BOARD INFORMATION

The circuit board used in an application must use RF circuit design techniques. Signal lines must have 50 Ω impedance, and the package ground leads and exposed pad must be connected directly to the ground plane, similarly to that shown in Figure 35. Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation circuit board shown in Figure 35 is available from Analog Devices, Inc., upon request.

Figure 35. HMC558A Evaluation Board Top Layer

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

TOP VIEW

<!-- image -->

<!-- image -->

Figure 36. 12-Terminal Ceramic Leadless Chip Carrier [LCC] (E-12-4) Dimensions shown in millimeters

| Model 1          | Temperature Range   | Description                                     | Package Option   | Package Body Material   | Lead Finish      | MSL Rating   |
|------------------|---------------------|-------------------------------------------------|------------------|-------------------------|------------------|--------------|
| HMC558ALC3B      | -40°C to +85°C      | 12-Terminal Ceramic Leadless Chip Carrier [LCC] | E-12-4           | Alumina Ceramic         | Gold over Nickel | MSL3         |
| HMC558ALC3BTR    | -40°C to +85°C      | 12-Terminal Ceramic Leadless Chip Carrier [LCC] | E-12-4           | Alumina Ceramic         | Gold over Nickel | MSL3         |
| HMC558ALC3BTR-R5 | -40°C to +85°C      | 12-Terminal Ceramic Leadless Chip Carrier [LCC] | E-12-4           | Alumina Ceramic         | Gold over Nickel | MSL3         |
| EV1HMC558ALC3B   |                     | Evaluation PCB Assembly                         |                  |                         |                  |              |

## ORDERING GUIDE

1  The HMC558ALC3B, HMC558ALC3BTR, and HMC558ALC3BTR-R5 are RoHS Compliant.

<!-- image -->

PKG-004837

03-02-2017-A

<!-- image -->