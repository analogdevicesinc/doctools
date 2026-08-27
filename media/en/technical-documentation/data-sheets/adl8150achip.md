<!-- lastmod 2020-10-28 -->
<!-- image -->

Data Sheet

## FEATURES

Output P1dB: 19 dBm (typical at 7 GHz to 11 GHz) PSAT: 23 dBm (typical at 7 GHz to 14 GHz) Gain: 13 dB (typical at 7 GHz to 11 GHz) Output IP3: 31.5 dBm (typical at 7 GHz to 11 GHz) Phase noise: -172 dBc/Hz at 10 kHz offset VCC: 5 V at ICQ = 76 mA

Die size: 1.490 mm × 0.930 mm × 0.102 mm

## APPLICATIONS

Military and space Test instrumentation

## GENERAL DESCRIPTION

The ADL8150ACHIP is a self biased, gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), heterojunction bipolar transistor (HBT), low phase noise amplifier that operates from 6 GHz to 14 GHz. The amplifier provides 13 dB of gain, 19 dBm output power for 1 dB gain compression (P1dB), and an output third-order intercept (IP3) of 31.5 dBm at 7 GHz to 11 GHz. The amplifier requires 76 mA of quiescent collector

## GaAs, HBT, MMIC, Low Phase Noise

## Amplifier, 6 GHz to 14 GHz

[ADL8150ACHIP](https://www.analog.com/ADL8150?doc=ADL8150ACHIP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

supply current (ICQ) from a 5 V supply voltage (VCC). The ADL8150ACHIP also features inputs and outputs (I/Os) that are internally matched to 50 Ω and facilitates integration into multichip modules (MCMs). All data is taken with the chip connected via two wire bonds that are 0.025 mm (1 mil) wide and 0.31 mm (12 mil) long.

## [ADL8150ACHIP](https://www.analog.com/ADL8150?doc=ADL8150ACHIP.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................1   |
|----------------------------------------------------------------------------------------------------------|
| Applications.....................................................................................1       |
| Functional Block Diagram.............................................................1                   |
| General Description........................................................................1             |
| Revision History..............................................................................2          |
| Specifications ...................................................................................3      |
| Frequency Range: 6 GHzto 7 GHz...........................................3                               |
| Frequency Range: 7 GHzto 11 GHz.........................................3                                |
| Frequency Range: 11 GHz to 14 GHz.......................................4                                |
| Absolute Maximum Ratings ..........................................................5                     |
| Thermal Resistance.....................................................................5                 |
| Electrostatic Discharge (ESD) Ratings......................................5                             |

## REVISION HISTORY

7/2020-Revision 0: Initial Version

| ESD Caution.................................................................................5   |
|-------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions ............................6                       |
| Interface Schematics....................................................................6       |
| Typical Performance Characteristics ............................................7               |
| Theory of Operation .....................................................................12     |
| Applications Information.............................................................13         |
| Biasing Procedures....................................................................13        |
| Assembly and Typical Application Circuit Diagrams...........13                                  |
| Outline Dimensions......................................................................14      |
| Ordering Guide..........................................................................14      |

## SPECIFICATIONS

## FREQUENCY RANGE: 6 GHz TO 7 GHz

TA = 25°C, VCC = 5 V, and ICQ = 76 mA for nominal operation, unless otherwise noted.

## Table 1.

| Parameter                       |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                                 |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------------------|
| FREQUENCY RANGE                 |     6 |       |     7 | GHz    |                                                          |
| GAIN                            |   9.5 | 12    |       | dB     |                                                          |
| Gain Flatness                   |       | ±1.0  |       | dB     |                                                          |
| Gain Variation over Temperature |       | 0.011 |       | dB/°C  |                                                          |
| NOISE FIGURE                    |       | 4     |       | dB     |                                                          |
| PHASE NOISE                     |       | -172  |       | dBc/Hz | Measurement taken at 10 kHz offset from carrier          |
| RETURN LOSS                     |       |       |       |        |                                                          |
| Input                           |       | 2     |       | dB     |                                                          |
| Output                          |       | 10    |       | dB     |                                                          |
| OUTPUT                          |       |       |       |        |                                                          |
| P1dB                            |  16.5 | 18.5  |       | dBm    |                                                          |
| Saturated Output Power (P SAT ) |       | 21    |       | dBm    |                                                          |
| IP3                             |       | 30.5  |       | dBm    | Measurement taken at output power (P OUT ) per tone=6dBm |
| SUPPLY                          |       |       |       |        |                                                          |
| I CQ                            |       | 76    |       | mA     | Self biased                                              |
| V CC                            |     3 | 5     |     6 | V      |                                                          |

## FREQUENCY RANGE: 7 GHz TO 11 GHz

TA = 25°C, VCC = 5 V, and ICQ = 76 mA for nominal operation, unless otherwise noted.

## Table 2.

| Parameter                       |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                        |
|---------------------------------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                 |     7 |       |    11 | GHz    |                                                 |
| GAIN                            |    11 | 13    |       | dB     |                                                 |
| Gain Flatness                   |       | ±0.8  |       | dB     |                                                 |
| Gain Variation over Temperature |       | 0.012 |       | dB/°C  |                                                 |
| NOISE FIGURE                    |       | 3.5   |       | dB     |                                                 |
| PHASE NOISE                     |       | -172  |       | dBc/Hz | Measurement taken at 10 kHz offset from carrier |
| RETURN LOSS                     |       |       |       |        |                                                 |
| Input                           |       | 6     |       | dB     |                                                 |
| Output                          |       | 7     |       | dB     |                                                 |
| OUTPUT                          |       |       |       |        |                                                 |
| P1dB                            |    17 | 19    |       | dBm    |                                                 |
| P SAT                           |       | 23    |       | dBm    |                                                 |
| IP3                             |       | 31.5  |       | dBm    | Measurement taken at P OUT per tone=6dBm        |
| SUPPLY                          |       |       |       |        |                                                 |
| I CQ                            |       | 76    |       | mA     | Self biased                                     |
| V CC                            |     3 | 5     |     6 | V      |                                                 |

## FREQUENCY RANGE: 11 GHz TO 14 GHz

TA = 25°C, VCC = 5 V, and ICQ = 76 mA for nominal operation, unless otherwise noted.

## Table 3.

| Parameter                       |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                        |
|---------------------------------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                 |    11 |       |    14 | GHz    |                                                 |
| GAIN                            |   9.5 | 11.5  |       | dB     |                                                 |
| Gain Flatness                   |       | ±0.7  |       | dB     |                                                 |
| Gain Variation over Temperature |       | 0.014 |       | dB/°C  |                                                 |
| NOISE FIGURE                    |       | 4     |       | dB     |                                                 |
| PHASE NOISE                     |       | -172  |       | dBc/Hz | Measurement taken at 10 kHz offset from carrier |
| RETURN LOSS                     |       |       |       |        |                                                 |
| Input                           |       | 5.5   |       | dB     |                                                 |
| Output                          |       | 8     |       | dB     |                                                 |
| OUTPUT                          |       |       |       |        |                                                 |
| P1dB                            |  17.5 | 19.5  |       | dBm    |                                                 |
| P SAT                           |       | 23    |       | dBm    |                                                 |
| IP3                             |       | 31    |       | dBm    | Measurement taken at P OUT per tone=6dBm        |
| SUPPLY                          |       |       |       |        |                                                 |
| I CQ                            |       | 76    |       | mA     | Self biased                                     |
| V CC                            |     3 | 5     |     6 | V      |                                                 |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                 | Rating          |
|---------------------------------------------------------------------------|-----------------|
| V CC RFIN                                                                 | 6.5 V 20 dBm    |
| Continuous Power Dissipation (P DISS ), T=85°C(Derate16.6mW/°CAbove       | 0.879W          |
| 85°C)                                                                     |                 |
| Temperature                                                               |                 |
| Storage Range                                                             | -65°C to +150°C |
| Operating Range                                                           | -55°C to +85°C  |
| Junction Temperature to Maintain 1,000,000 Hour MeanTimeto Failure (MTTF) | 138°C           |
| Nominal Junction Temperature (T J = 85°C, V CC = 5 V, I CQ = 76 mA)       | 107.9°C         |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to printed circuit board (PCB) thermal design is required.

θJC is the channel to case thermal resistance, channel to bottom of die.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-2-4          |   60.3 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## ESD Ratings for ADL8150ACHIP

## Table 6. ADL8150ACHIP, 2-Pad CHIP

| ESDModel   |   Withstand Threshold (V) | Class   |
|------------|---------------------------|---------|
| HBM        |                       250 | 1A      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

## Table 7. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                    |
|------------|------------|--------------------------------------------------------------------------------|
| 1          | RFIN       | RF Signal Input. The RFIN pad is ac-coupled and matched to 50 Ω.               |
| 2          | RFOUT/V CC | RF Signal Output/SupplyVoltage.TheRFOUT/V CC padis dc-coupledandmatchedto 50Ω. |
| Die Bottom | GND        | Die bottom must be connected to RF and dc ground.                              |

## INTERFACE SCHEMATICS

Figure 4. RFOUT/VCC Interface Schematic

<!-- image -->

<!-- image -->

Figure 5. RFIN Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Collector current without RF signal applied (ICQ) and collector current with RF signal applied (ICC).

Figure 6. Broadband Gain and Return Loss vs. Frequency (S11 Is the Input Return Loss, S21 Is the Gain, and S22 Is the Output Return Loss)

<!-- image -->

Figure 7. Gain vs. Frequency for Various Supply Voltages

<!-- image -->

23557-008

<!-- image -->

Figure 8. Input Return Loss vs. Frequency for Various Temperatures, VCC = 5 V, ICQ = 76 mA

<!-- image -->

Figure 9. Gain vs. Frequency for Various Temperatures

Figure 10. Input Return Loss vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 11. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

<!-- image -->

Figure 12. Output Return Loss vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 13. Output P1dB vs. Frequency for Various Temperatures

Figure 14. Output P1dB vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 15. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

23557-016

Figure 16. PSAT vs. Frequency for Various Temperatures

<!-- image -->

Figure 17. PSAT vs. Frequency for Various Supply Voltages

<!-- image -->

Figure 18. Power Added Efficiency (PAE) at PSAT vs. Frequency for Various Temperatures

<!-- image -->

23557-019

Figure 19. POUT, Gain, PAE, and ICC vs. Input Power, Frequency = 7 GHz

<!-- image -->

23557-020

<!-- image -->

Figure 20. POUT, Gain, PAE, and ICC vs. Input Power, Frequency = 10 GHz

<!-- image -->

Figure 21. PAE at PSAT vs. Frequency for Various Supply Voltages

Figure 22. POUT, Gain, PAE, and ICC vs. Input Power, Frequency = 13 GHz

<!-- image -->

Figure 23. PDISS vs. Input Power, T = 85°C

<!-- image -->

<!-- image -->

Figure 24. Output IP3 vs. Frequency for Various Temperatures, POUT per Tone = 6 dBm, VCC = 5 V

<!-- image -->

Figure 25. Output Third-Order Intermodulation (IM3) vs. POUT per Tone for Various Frequencies at VCC = 4 V

<!-- image -->

Figure 26. Output IM3 vs. POUT per Tone for Various Frequencies at VCC = 6 V

Figure 27. Output IM3 vs. POUT per Tone for Various Frequencies at VCC = 3 V

<!-- image -->

Figure 28. Output IM3 vs. POUT per Tone for Various Frequencies at VCC = 5 V

<!-- image -->

23557-029

Figure 29. Reverse Isolation vs. Frequency for Various Temperatures

<!-- image -->

23557-036

Figure 30. Phase Noise vs. Frequency at 10 GHz, POUT = 10 dBm

<!-- image -->

23557-037

Figure 31. Phase Noise vs. Frequency at 10 GHz, POUT = PSAT

<!-- image -->

Figure 32. Phase Noise vs. Frequency at 10 GHz, POUT = P1dB

<!-- image -->

## [ADL8150ACHIP](https://www.analog.com/ADL8150?doc=ADL8150ACHIP.pdf)

## THEORY OF OPERATION

The ADL8150ACHIP is a self biased, single 5 V power supply amplifier. RFIN is dc-coupled, and RFOUT/VCC requires an external bias tee (see Figure 35). Figure 33 shows the simplified block diagram.

<!-- image -->

## APPLICATIONS INFORMATION

## BIASING PROCEDURES

The ADL8150ACHIP is a self biased GaAs, MMIC, HBT, low phase noise amplifier. Figure 34 shows the typical application circuit. Adhere to the following bias sequence during power-up:

1. Connect the VCC power supply.
2. Set the VCC supply to 5 V on a bias tee on the RFOUT/VCC pin (see Figure 34).
3. Apply the RF input signal.

Adhere to the following bias sequence during power-down:

1. Turn off the RF input signal.
2. Set the VCC supply to 0 V.

## Handling Precautions

To avoid permanent damage to the die, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle-based or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- When the bias is applied, suppress instrument and bias supply transients. Use a shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The chip surface has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## Mounting

Before the epoxy die is attached to the ADL8150ACHIP, apply a minimum amount of epoxy (must order separately) to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 3 mil × 0.5 mil gold ribbon are recommended to be used with the RF ports. These bonds must be thermosonically bonded with a force between 40 g and 60 g . DC bonds of 0.025 mm (1 mil) in diameter, thermosonically bonded, are recommended for bond wire connections. Create ball bonds with a force between 40 g and 50 g , and wedge bonds with a force between 18 g and 22 g . Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm (12 mil).

## ASSEMBLY AND TYPICAL APPLICATION CIRCUIT DIAGRAMS

Figure 35 shows the assembly diagram, and Figure 34 shows the typical application circuit diagram.

Figure 35. Assembly Diagram

<!-- image -->

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

Figure 36. 2-Pad Bare Die [CHIP] (C-2-4) Dimensions shown in millimeters

| Model 1, 2     | Temperature Range   | Package Description   | Package Option   |
|----------------|---------------------|-----------------------|------------------|
| ADL8150ACHIP   | -55°C to +85°C      | 2-Pad Bare Die [CHIP] | C-2-4            |
| ADL8150CHIP-SX | -55°C to +85°C      | 2-Pad Bare Die [CHIP] | C-2-4            |

## ORDERING GUIDE

1  The ADL8150CHIP-SX is a sample order of two devices.

2  The ADL8150ACHIP and ADL8150CHIP-SX are RoHS compliant parts.

<!-- image -->

03-19-2020-A