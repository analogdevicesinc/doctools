<!-- lastmod 2019-04-03 -->
<!-- image -->

Data Sheet

## FEATURES

P1dB output power: 29 dBm Gain: 13 dB Output IP3: 44 dBm 50 Ω matched input/output 32-lead, 5 mm × 5 mm LFCSP package: 25 mm 2

## APPLICATIONS

Telecom infrastructure Microwave radio Very small aperture terminal (VSAT) Military and space Test instrumentation Fiber optics

## GENERAL DESCRIPTION

The HMC637ALP5E is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT) distributed power amplifier which operates between 0.1 GHz and 6 GHz. The amplifier provides 13 dB of gain, 44 dBm output third-order intercept (IP3), and 29 dBm of output power at 1 dB gain compression while requiring 400 mA from a 12 V supply. Gain

## GaAs, pHEMT, MMIC,

## 1 W Power Amplifier, 0.1 GHz to 6 GHz

[HMC637ALP5E](https://www.analog.com/HMC637ALP5E?doc=HMC637A.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

flatness is ±0.75 dB from 100 MHz to 6 GHz making the HMC637ALP5E ideal for electronic warfare (EW), electronic counter-measure (ECM), radar and test equipment applications. The HMC637ALP5E amplifier radio frequency (RF) I/Os are internally matched to 50 Ω, and the 5 mm × 5 mm lead frame chip scale package (LFCSP) is compatible with high volume surface-mount technology (SMT) assembly equipment.

## [HMC637ALP5E](https://www.analog.com/HMC637ALP5E?doc=HMC637A.pdf)

## TABLE OF CONTENTS

Features .............................................................................................. 1

Applications  ....................................................................................... 1

Functional Block Diagram .............................................................. 1

General Description ......................................................................... 1

Revision History ............................................................................... 2

Specifications  ..................................................................................... 3

Electrical Specifications  ............................................................... 3

Absolute Maximum Ratings  ............................................................ 4

Thermal Resistance ...................................................................... 4

REVISION HISTORY

This Hittite Microwave Products data sheet has been reformatted

to meet the styles and standards of Analog Devices, Inc.

4/2019-v02.0418 to Rev. C

Updated Format ..................................................................  Universal

Changed HMC637ALP5 to HMC637ALP5E  ........... Throughout

Changes to Product Title, Features Section, Applications

Section, General Description Section, and Figure 1 .................... 1

Changes to Electrical Specifications Section and Table 1 ........... 3

Changes to Table 2  ............................................................................ 4

Added Thermal Resistance Section ............................................... 4

| ESD Caution...................................................................................4                                                                                        |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions..............................5                                                                                                             |
| Interface Schematics .....................................................................6                                                                                            |
| Typical Performance Characteristics ..............................................7                                                                                                    |
| Applications Information.................................................................9                                                                                             |
| Evaluation PCB............................................................................... 10                                                                                       |
| List of Materials for PCB EV1HMC637ALP5E ..................... 10                                                                                                                      |
| Outline Dimensions....................................................................... 11                                                                                           |
| Ordering Guide .......................................................................... 11                                                                                           |
| Added Table 3; Renumbered Sequentially .....................................4                                                                                                          |
| Added Figure 2; Renumbered Sequentially ...................................5                                                                                                           |
| Changes to Table 4.............................................................................5                                                                                       |
| Changes to Figure 10 Caption through Figure 14 Caption .........7                                                                                                                      |
| Changes to Figure 15 Caption, Figure 16 Caption, Figure 18                                                                                                                             |
| Caption, and Figure 20 Caption ......................................................8                                                                                                 |
| Changes to Application Information Section and Figure 21.......9                                                                                                                       |
| Section and Table 5......................................................................... 10 Changes to Ordering Guide.......................................................... 11 |

## SPECIFICATIONS ELECTRICAL SPECIFICATIONS

TA = 25°C, drain bias voltage (VDD) = 12 V , gate bias voltage (VGG2) = 5 V , supply current (IDD) = 400 mA (adjust VGG1 between -2 V to 0 V to achieve IDD = 400 mA typical), 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                         | Symbol   | Test Conditions/Comments              |   Min | Typ   |   Max | Units   |
|-----------------------------------|----------|---------------------------------------|-------|-------|-------|---------|
| FREQUENCY RANGE                   |          |                                       |   0.1 |       |     6 | GHz     |
| GAIN                              |          |                                       |    12 | 13    |       | dB      |
| Gain Flatness                     |          |                                       |       | ±0.75 |       | dB      |
| Gain Variation Over Temperature   |          |                                       |       | 0.015 |       | dB/°C   |
| RETURN LOSS                       |          |                                       |       |       |       |         |
| Input                             |          |                                       |       | 12    |       | dB      |
| Output                            |          |                                       |       | 15    |       | dB      |
| OUTPUT                            |          |                                       |       |       |       |         |
| Output Power for 1 dB Compression | P1dB     |                                       |    27 | 29    |       | dBm     |
| Saturated Output Power            | P SAT    |                                       |       | 31    |       | dBm     |
| Output Third-Order Intercept      | OIP3     | P OUT per tone = 10 dBm, 1 MHzspacing |       | 44    |       | dBm     |
| NOISE FIGURE                      |          |                                       |       | 12    |       | dB      |
|                                   |          | 2.0 GHz to 6.0 GHz                    |       | 5     |       | dB      |
| SUPPLY CURRENT                    | I DD     |                                       |   320 | 400   |   480 | mA      |
| Drain Bias Voltage 1              | V DD     | I DD = 400mA                          |       | 11.5  |       | V       |
|                                   |          |                                       |       | 12.0  |       | V       |
|                                   |          |                                       |       | 12.5  |       | V       |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                                        | Rating                |
|------------------------------------------------------------------|-----------------------|
| Drain Bias Voltage (V DD )                                       | 14V DC                |
| Gate Bias Voltage                                                |                       |
| V GG1                                                            | -3V DC to 0V DC       |
| V GG2                                                            | 4V DC to 7V DC        |
| RF Input Power (RFIN),V DD = 12V DC                              | 25dBm                 |
| Channel Temperature                                              | 175°C                 |
| Continuous P DISS (T = 85°C, Derate 95 mW/°C Above 85°C)         | 8.6W                  |
| Maximum Peak Reflow Temperature                                  | 260°C (MSL3 1 Rating) |
| Storage Temperature Range                                        | -65°C to +150°C       |
| Operating Temperature Range                                      | -40°C to +85°C        |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM) | Class 1B              |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JC 1 | Unit   |
|---------------|----------|--------|
| HCP-32-1      |     10.5 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. NIC = NO INTERNAL CONNECTION. THESE PINS MAY BE CONNECTED TO RF GROUND. PERFORMANCE IS NOT AFFECTED.
2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED TO RF/DC GROUND.

Figure 2. Pin Configuration

## Table 4. Pin Function Descriptions

| Pin No.                                       | Mnemonic   | Description 1                                                                                                                                                                                                                     |
|-----------------------------------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 6 to 11, 14, 17 to 20, 23 to 28, 31, 32 | NIC        | No Internal Connection. These pins may be connected to RF ground. Performance is not affected.                                                                                                                                    |
| 2                                             | V GG2      | Gate Control 2 for Amplifier.Apply5VtoV GG2 for nominal operation. Attach a bypass capacitor per the application circuit shownin the Applications Information section.                                                            |
| 4, 12, 22                                     | GND        | Ground. Connect Pin 4, Pin 12, and Pin 22 to RF/dc ground.                                                                                                                                                                        |
| 5                                             | RFIN       | This pad is dc-coupled and matched to 50 Ω.                                                                                                                                                                                       |
| 13                                            | V GG1      | Gate Control 1 for Amplifier. Attach a bypass capacitor per the application circuit shown in the Applications Information section. Follow the power up and power down sequences outlines in the Applications Information section. |
| 15                                            | ACG4       | Low Frequency Termination. Attach a bypass capacitor per the application circuit shown in the Applications Information section.                                                                                                   |
| 16                                            | ACG3       | Low Frequency Termination. Attach a bypass capacitor per the application circuit shown in the Applications Information section.                                                                                                   |
| 21                                            | RFOUT/V DD | RF Output/Power Supply Voltage for Amplifier. Connect the dc bias (V DD ) network to provide drain current (I DD ). See the application circuit shown in the Applications Information section.                                    |
| 29                                            | ACG2       | Low Frequency Termination. Attach a bypass capacitor per the application circuit shown in the Applications Information section.                                                                                                   |
| 30                                            | ACG1       | Low Frequency Termination. Attach a bypass capacitor per the application circuit shown in the Applications Information section.                                                                                                   |
|                                               | EPAD       | Exposed Pad. The exposed pad must be connected to RF/dc ground.                                                                                                                                                                   |

17308-002

<!-- image -->

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. VGG2 Interface Schematic

<!-- image -->

Figure 4. ACG1, ACG2, and RFOUT/VDD Interface Schematic

<!-- image -->

Figure 5. RFIN Interface Schematic

<!-- image -->

Figure 6. RFIN, ACG4, and ACG3 Interface Schematic

Figure 7. VGG1 Interface Schematic

<!-- image -->

Figure 8. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

<!-- image -->

Figure 10. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 11. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 12. Gain vs. Frequency at Various Temperatures

Figure 13. Output Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 14. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

## [HMC637ALP5E](https://www.analog.com/HMC637ALP5E?doc=HMC637A.pdf)

<!-- image -->

Figure 15. P1dB vs. Frequency at Various Temperatures

<!-- image -->

Figure 16. Output IP3 vs. Frequency at Various Temperatures

Figure 17. Gain and Return Loss vs. Frequency, Log Scale

<!-- image -->

Figure 18. PSAT vs. Frequency at Various Temperatures

<!-- image -->

17308-019

Figure 19. Gain, Power, and Output IP3 vs. Supply Voltage at 3 GHz, Fixed VGG

<!-- image -->

Figure 20. Output IP3 vs. Frequency at Various Temperatures, Log Scale

<!-- image -->

## APPLICATIONS INFORMATION

For the application circuit shown in Figure 21, VDD must be applied through a broadband bias tee or external bias network.

The power-up bias sequence is as follows:

1. Set VGG1 to -2 V
2. Set VDD to 12 V
3. Set VGG2 to 5 V
4. Adjust VGG1 to achieve IDD for 400 mA

Figure 21. Application Circuit

<!-- image -->

The power-down sequence is as follows:

1. Remove VGG2 bias
2. Remove VDD bias
3. Remove VGG1 bias

## EVALUATION PCB

Figure 22. Evaluation Board PCB

<!-- image -->

## LIST OF MATERIALS FOR PCB EV1HMC637ALP5E

Table 5. Bill of Materials for Evaluation PCB

It is recommended that the circuit board used in the application follows proper RF circuit design techniques. Signal lines must have 50 Ω impedance while the package ground leads and package bottom are connected directly to the ground plane similar to that shown in Figure 22. Ensure that a sufficient number of via holes are used to connect the top and bottom ground planes. The evaluation board thermal design must also be considered and mounted to an appropriate heat sink. The evaluation circuit board shown is available from Analog Devices, Inc. upon request.

## [EV1HMC637ALP5E](https://www.analog.com/EVAL-HMC637ALP5E?doc=HMC637A.pdf)

| Item     | Description                     |
|----------|---------------------------------|
| J1, J2   | SRI SMA connector               |
| J3, J4   | 2 mmMolex header                |
| C1, C2   | 100 pF capacitor, 0402 package  |
| C3 to C6 | 1000 pF capacitor, 0603 package |
| C7 to C9 | 4.7 μF capacitor, tantalum      |
| U1       | HMC637ALP5E                     |
| PCB 1    | 109765 evaluation PCB           |

## OUTLINE DIMENSIONS

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-VHHD-4

Figure 23. 32-Lead Lead Frame Chip Scale Package [LFCSP]

5 mm × 5 mm and 0.85 mm Package Height (HCP-32-1) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1       | Temperature Range   | MSLRating 2   | Package Description                           | Package Option   |
|---------------|---------------------|---------------|-----------------------------------------------|------------------|
| HMC637ALP5E   | -40°C to +85°C      | MSL3          | 32-Lead Lead Frame Chip Scale Package [LFCSP] | HCP-32-1         |
| HMC637ALP5ETR | -40°C to +85°C      | MSL3          | 32-Lead Lead Frame Chip Scale Package [LFCSP] | HCP-32-1         |
| EV1HMC637ALP5 |                     |               | Evaluation Board                              |                  |

PKG-004898

<!-- image -->

02-19-2019-B

<!-- image -->