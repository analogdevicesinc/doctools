<!-- lastmod 2020-03-26 -->
<!-- image -->

Data Sheet

## FEATURES

Low noise figure: 1.1 dB typical High gain: 19.5 dB typical High output third order intercept (IP3): 33 dBm typical Die size: 0.945 mm × 0.61 × 0.102 mm

## APPLICATIONS

Software defined radios Electronic warfare Radar applications

## GENERAL DESCRIPTION

The HMC8410CHIPS is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), low noise, wideband amplifier that operates over a 0.01 GHz to 10 GHz frequency range. The HMC8410CHIPS provides a typical gain of 19.5 dB, a 1.1 dB typical noise figure, and a typical output IP3 of 33 dBm, requiring only 65 mA from a 5 V supply voltage. The saturated

## 0.01 GHz to 10 GHz, GaAs, pHEMT, MMIC, Low Noise Amplifier

[HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

output power (PSAT) of 22.5 dBm enables the low noise amplifier (LNA) to function as a local oscillator (LO) driver for many of Analog Devices, Inc., balanced, I/Q or image rejection mixers. The HMC8410CHIPS also features inputs/outputs internally matched to 50 Ω, making the device ideal for surface mounted technology (SMT)-based, high capacity microwave radio

applications.

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

## TABLE OF CONTENTS

Features .............................................................................................. 1

Applications ...................................................................................... 1

Functional Block Diagram .............................................................. 1

General Description ......................................................................... 1

Revision History ............................................................................... 2

Specifications .................................................................................... 3

0.01 GHz to 3 GHz Frequency Range ....................................... 3

3 GHz to 8 GHz Frequency Range  ............................................. 3

8 GHz to 10 GHz Frequency Range .......................................... 4

Absolute Maximum Ratings ........................................................... 5

Thermal Resistance ...................................................................... 5

ESD Caution.................................................................................. 5

REVISION HISTORY

3/2020-Rev. B to Rev. C

Changes to Features Section ........................................................... 1

Changes to Table 4 and Table 5...................................................... 5

Changes to Theory of Operation Section and Figure 37 .......... 13

Updated Outline Dimensions  ....................................................... 17

11/2018-Rev. A to Rev. B

Updated Outline Dimensions  ....................................................... 17

| Pin Configuration and Function Descriptions .............................6                                                                  |                        |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Interface Schematics.....................................................................6                                                  |                        |
| Typical Performance Characteristics .............................................7                                                          |                        |
| Theory of Operation......................................................................                                                   | 13                     |
| Applications Information .............................................................                                                      | 14                     |
| Recommended Bias Sequencing ..............................................                                                                  | 14                     |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.............................................................................. | 14                     |
| Application Circuit ........................................................................                                                | 16                     |
| Assembly Diagram.....................................................................                                                       | 16                     |
| Outline Dimensions.......................................................................                                                   | 17                     |
| Ordering Guide ..........................................................................                                                   | 17                     |
| 1/2018-Rev. 0 to Rev.A Added Output Second Order Intercept Parameter, and Output Second Order Intercept Parameter, Table                    | Table 1 2............3 |
| Change to Noise Figure Parameter Test Conditions, Table 1 ....3 Added Output Second Order Parameter, Table 3........................4       |                        |
| Changes to Table 6............................................................................6                                             |                        |
| Change to Figure 33.......................................................................                                                  | 11                     |
| Moved Figure 35.............................................................................                                                | 12                     |
| Added Figure 36; Renumbered Sequentially..............................                                                                      | 12                     |

10/2016-Revision 0: Initial Version

## SPECIFICATIONS

## 0.01 GHz TO 3 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, and IDQ = 65 mA, unless otherwise noted.

## Table 1.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |  0.01 |       |     3 | GHz    |                                             |
| GAIN                              |          |  17.5 |  19.5 |       | dB     |                                             |
| Gain Variation Over Temperature   |          |       |  0.01 |       | dB/°C  |                                             |
| NOISE FIGURE                      |          |       |   1.1 |   1.6 | dB     | 0.3 GHz to 3 GHz                            |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |    15 |       | dB     |                                             |
| Output                            |          |       |    24 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |  19.0 |  21.0 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |  22.5 |       | dBm    |                                             |
| Output Third Order Intercept      | IP3      |       |    33 |       | dBm    |                                             |
| Output Second Order Intercept     | IP2      |       |    37 |       | dBm    |                                             |
| SUPPLY                            |          |       |       |       |        |                                             |
| Current                           | I DQ     |       |    65 |    80 | mA     | Adjust V GG1 to achieve I DQ = 65 mAtypical |
| Voltage                           | V DD     |     2 |     5 |     6 | V      |                                             |

## 3 GHz TO 8 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, and IDQ = 65 mA, unless otherwise noted.

## Table 2.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |     3 |       |     8 | GHz    |                                             |
| GAIN                              |          |  15.5 |    18 |       | dB     |                                             |
| Gain Variation Over Temperature   |          |       |  0.01 |       | dB/°C  |                                             |
| NOISE FIGURE                      |          |       |   1.4 |   1.9 | dB     |                                             |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |    12 |       | dB     |                                             |
| Output                            |          |       |    12 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |  17.5 |  20.5 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |  22.5 |       | dBm    |                                             |
| Output Third Order Intercept      | IP3      |       |  31.5 |       | dBm    |                                             |
| Output Second Order Intercept     | IP2      |       |    33 |       | dBm    |                                             |
| SUPPLY                            |          |       |       |       |        |                                             |
| Current                           | I DQ     |       |    65 |    80 | mA     | Adjust V GG1 to achieve I DQ = 65 mAtypical |
| Voltage                           | V DD     |     2 |     5 |     6 | V      |                                             |

<!-- image -->

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

## 8 GHz TO 10 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, and IDQ = 65 mA, unless otherwise noted.

## Table 3.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |     8 |       |    10 | GHz    |                                             |
| GAIN                              |          |    13 |    16 |       | dB     |                                             |
| Gain Variation Over Temperature   |          |       |  0.01 |       | dB/°C  |                                             |
| NOISE FIGURE                      |          |       |   1.7 |   2.2 | dB     |                                             |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |     6 |       | dB     |                                             |
| Output                            |          |       |    10 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |  17.5 |  19.5 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |  21.5 |       | dBm    |                                             |
| Output Third Order Intercept      | IP3      |       |    33 |       | dBm    |                                             |
| Output Second Order Intercept     | IP2      |       |    33 |       | dBm    |                                             |
| SUPPLY                            |          |       |       |       |        |                                             |
| Current                           | I DQ     |       |    65 |    80 | mA     | Adjust V GG1 to achieve I DQ = 65 mAtypical |
| Voltage                           | V DD     |     2 |     5 |     6 | V      |                                             |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter 1                                                                | Rating                |
|----------------------------------------------------------------------------|-----------------------|
| Drain Bias Voltage (V DD )                                                 | 7 V dc                |
| Radio Frequency (RF) Input Power (RFIN)                                    | 20 dBm                |
| ContinuousPower Dissipation (P DISS ),T=85°C (Derate 8.0 mW/°C Above 85°C) | 0.72W                 |
| Channel Temperature                                                        | 175°C                 |
| Storage Temperature Range                                                  | -65°C to +150°C       |
| Operating Temperature Range                                                | -55°C to +85°C        |
| ESD Sensitivity Human Body Model (HBM)                                     | Class 1B passed 500 V |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θJC is the junction to case thermal resistance, and channel to bottom of die.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-2-3          | 125.85 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 6. Pad Function Descriptions

| Pin No.    | Mnemonic    | Description                                                                                                                                                                                                                       |
|------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RFIN/V GG 1 | RF Input (RFIN). This pin is dc-coupled and matched to 50 Ω. See Figure 4 for the interface schematic. Gate Bias of the Amplifier (V GG 1). This pin is dc-coupled and matched to 50 Ω. See Figure 4 for the interface schematic. |
| 2          | RFOUT/V DD  | RF Output (RFOUT). This pin is dc-coupled and matched to 50 Ω. See Figure 5 for the interface schematic. Drain Bias for Amplifier (V DD ). This pin is dc-coupled and matched to 50 Ω. See Figure 5 for the interface schematic.  |
| Die Bottom | GND         | Ground. Die Bottom. This pin must be connected to RF/dc ground.                                                                                                                                                                   |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

Figure 4. RFIN/VGG1 Interface Schematic

<!-- image -->

Figure 5. RFOUT/VDD Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 6. Gain and Return Loss vs. Frequency

<!-- image -->

Figure 7. Input Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 8. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

<!-- image -->

Figure 9. Gain vs. Frequency for Various Temperatures

Figure 10. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 11. Noise Figure vs. Frequency for Various Temperatures, 10 MHz to 1 GHz

<!-- image -->

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

<!-- image -->

Figure 12. P1dB vs. Frequency for Various Temperatures

<!-- image -->

Figure 13. PSAT vs. Frequency for Various Temperatures

<!-- image -->

Figure 14. Output IP3 vs. Frequency for Various Temperatures, Output Power (POUT)/Tone = 5 dBm

<!-- image -->

Figure 15. Output IP2 vs. Frequency for Various Temperatures at POUT/Tone = 5 dBm

Figure 16. Reverse Isolation vs. Frequency for Various Temperatures

<!-- image -->

Figure 17. Output IP3 vs. Frequency for Various POUT/Tone

<!-- image -->

Figure 18. Gain, P1dB, PSAT, and Output IP3 vs. Frequency

<!-- image -->

Figure 19. P1dB and Power Added Efficiency (PAE) vs. Frequency

<!-- image -->

15093-020

Figure 20. POUT, Gain, PAE, and Supply Current (IDD) with RF Applied (IDD) vs. Input Power at 5 GHz

<!-- image -->

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

<!-- image -->

Figure 21. PSAT and PAE vs. Frequency

Figure 22. Power Dissipation vs. Input Power for Various Frequencies, TA = 85°C

<!-- image -->

Figure 23. Gain vs. Frequency for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

<!-- image -->

Figure 24. Noise Figure vs. Frequency for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

Figure 25. P1dB vs. Frequency for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

Figure 26. PSAT vs. Frequency for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

Figure 27. Output IP3 vs. Frequency for Various Supply Currents (IDQ), POUT/Tone = 5 dBm, VDD = 5 V

Figure 28. Gain vs. Frequency for Various Supply Voltages, IDQ = 65 mA

<!-- image -->

Figure 29. Noise Figure vs. Frequency for Various Supply Voltages, IDQ = 65 mA

<!-- image -->

<!-- image -->

Figure 30. P1dB vs. Frequency for Various Supply Voltages, IDQ = 65 mA

<!-- image -->

Figure 31. PSAT vs. Frequency for Various Supply Voltages, IDQ = 65 mA

Figure 32. Output IP3 vs. Frequency for Various Supply Voltages, POUT/Tone = 5 dBm

<!-- image -->

Figure 33. Supply Current (IDD) vs. VGG1, VDD = 5 V, Representative of a Typical Device

<!-- image -->

15093-034

Figure 34. Supply Current with RF Applied (IDD) vs. Input Power for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

Figure 35. Gain vs. Input Power for Various Supply Currents (IDQ) at 5 GHz, VDD = 5 V

<!-- image -->

Figure 36. Additive Phase Noise vs. Offset Frequency, RF Frequency = 5 GHz, RF Input Power = 3 dBm (P1dB)

<!-- image -->

## THEORY OF OPERATION

The HMC8410CHIPS is a GaAs, MMIC, pHEMT, low noise wideband amplifier.

The HMC8410CHIPS has single-ended input and output ports whose impedances are nominally equal to 50 Ω over the 0.01 GHz to 10 GHz frequency range. Consequently, it can directly insert into a 50 Ω system with no required impedance matching circuitry, which also means that multiple HMC8410CHIPS amplifiers can be cascaded back to back without the need for external matching circuitry.

The input and output impedances are sufficiently stable vs. variations in temperature and supply voltage so that no impedance matching compensation is required.

To achieve optimal performance from the HMC8410CHIPS and prevent damage to the device, do not exceed the absolute maximum ratings.

Figure 37. Simplified HMC8410CHIPS Architecture

<!-- image -->

## APPLICATIONS INFORMATION

Figure 40 shows the basic connections for operating the HMC8410CHIPS. The data taken herein used wideband bias tees on the input and output ports to provide both ac coupling and the necessary supply voltages to the RFIN/VGG1 and RFOUT/VDD pins. A 5 V dc drain bias is supplied to the amplifier through the choke inductor connected to the RFOUT/VDD pin, and the -2 V gate bias voltage is supplied to the RFIN/VGG1 pin through the choke inductor. The RF signal must be ac-coupled to prevent disrupting the dc bias applied to the RFIN/VGG1 and RFOUT/VDD pins. The nonideal characteristics of ac coupling capacitors and choke inductors (for example, self resonance) can introduce performance tradeoffs that must be considered when using a single application circuit across a wide frequency range.

## RECOMMENDED BIAS SEQUENCING

The recommended bias sequence during power-up is as follows:

1. Connect to GND.
2. Set RFIN/VGG1 to -2 V.
3. Set RFOUT/VDD to 5 V.
4. Increase RFIN/VGG1 to achieve a typical supply current (IDQ) = 65 mA.
5. Apply the RF signal.

The recommended bias sequence during power-down is as follows:

1. Turn off the RF signal.
2. Decrease RFIN/VGG1 to -2 V to achieve a typical IDQ = 0 mA.
3. Decrease RFOUT/VDD to 0 V.
4. Increase RFIN/VGG1 to 0 V.

The bias conditions previously listed (RFOUT/VDD = 5 V and IDQ = 65 mA) are the recommended operating conditions to achieve optimum performance. The data used in this data sheet was taken with the recommended bias conditions. When using the HMC8410CHIPS with different bias conditions, different performance than that shown in the Typical Performance Characteristics section can result.

Figure 29, Figure 30, and Figure 31 show that increasing the voltage from 3 V to 7 V typically increases P1dB and PSAT at the expense of power consumption with minor degradation on noise figure (NF).

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICS

Attach the die directly to the ground plane eutectically or with conductive epoxy (see the Handling Precautions section).

To bring the radio frequency to and from the chip, implementing 50 Ω transmission lines using a microstrip or coplanar waveguide on 0.127 mm (5 mil) thick alumina, thin film substrates is recommended (see Figure 38). When using 0.254 mm (10 mil) thick alumina, it is recommended that the die be raised to ensure that the die and substrate surfaces are coplanar. Raise the die 0.150 mm (6 mil) to ensure that the surface of the die is coplanar with the surface of the substrate. To accomplish this, attach the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick, molybdenum (Mo) heat spreader (moly tab), which can then be attached to the ground plane (see Figure 38 and Figure 39).

Figure 38. Die Without the Moly Tab

<!-- image -->

Figure 39. Die With the Moly Tab

<!-- image -->

Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

## Data Sheet

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

-  Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
-  Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.

## [HMC8410CHIPS](https://www.analog.com/HMC8410-die?doc=HMC8410CHIPS.pdf)

-  Follow ESD precautions to protect against ESD strikes.
-  While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
-  Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip can have fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## APPLICATION CIRCUIT

Figure 40. Application Circuit

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 41. Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

Figure 42. 2-Pad Bare Die [CHIP] (C-2-3)

<!-- image -->

Dimensions shown in millimeters

| Model 1         | Temperature Range   | Package Description   | Package Option   |
|-----------------|---------------------|-----------------------|------------------|
| HMC8410CHIPS    | -55°C to +85°C      | 2-Pad Bare Die [CHIP] | C-2-3            |
| HMC8410CHIPS-SX | -55°C to +85°C      | 2-Pad Bare Die [CHIP] | C-2-3            |

## ORDERING GUIDE

1  The HMC8410CHIPS and HMC8410CHIPS-SX are RoHS Compliant Parts.

<!-- image -->