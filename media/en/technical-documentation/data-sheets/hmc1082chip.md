<!-- lastmod 2020-08-04 -->
<!-- image -->

Data Sheet

## FEATURES

High saturated output power: 26 dBm with 24% PAE High gain: 24 dB typical High output IP3: 36 dBm typical High output P1dB: 25.5 dBm Die size: 2.19 mm × 1.05 × 0.1 mm

## APPLICATIONS

Software defined radios Electronics warfare (EW) Radar applications

Electronic countermeasures (ECMs)

## GENERAL DESCRIPTION

The HMC1082CHIP is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), driver amplifier that operates from 5.5 GHz to 18 GHz. The HMC1082CHIP provides a typical gain of 24 dB, 36 dBm output IP3, and 25.5 dBm of output power for 1 dB compression, requiring only 220 mA

## 5.5 GHz to 18 GHz, GaAs, pHEMT, MMIC,

## Medium Power Amplifier

[HMC1082CHIP](http://www.analog.com/HMC1082CHIP?doc=HMC1082CHIP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

20651-001

<!-- image -->

from a 5 V supply voltage. The saturated output power (PSAT) is 26 dBm with 24% power added efficiency (PAE).

The HMC1082CHIP is an ideal driver amplifier for a wide range of applications including point to point radios from 5.5 GHz to 18 GHz and marine radars at 9 GHz. The HMC1082CHIP can also be used for 6 GHz to 18 GHz EW and ECM applications.

## [HMC1082CHIP](http://www.analog.com/HMC1082CHIP?doc=HMC1082CHIP.pdf)

| TABLE OF CONTENTS                                                                                            |
|--------------------------------------------------------------------------------------------------------------|
| Features.............................................................................................. 1     |
| Applications ...................................................................................... 1        |
| Functional Block Diagram.............................................................. 1                     |
| General Description......................................................................... 1               |
| Revision History ............................................................................... 2           |
| Specifications .................................................................................... 3        |
| 5.5 GHz to 7 GHz Frequency Range ......................................... 3                                 |
| 7 GHz to 15.5 GHz Frequency Range ....................................... 3                                  |
| 15.5 GHz to 18 GHz Frequency Range ..................................... 4                                   |
| Absolute Maximum Ratings ........................................................... 5                       |
| Thermal Resistance...................................................................... 5                   |
| ESD Caution.................................................................................. 5              |
| Pin Configuration and Function Descriptions ............................ 6                                   |
| REVISION HISTORY                                                                                             |
| Change to Features Section............................................................. 1                    |
| 3/2020-Rev. 0 to Rev.A Changes to General Description .................................................... 1 |

| Interface Schematics.....................................................................6                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------|
| Typical Performance Characteristics .............................................7                                                             |
| Theory of Operation...................................................................... 12                                                   |
| Applications Information ............................................................. 13                                                      |
| Recommended Bias Sequencing .............................................. 13                                                                  |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.............................................................................. 13 |
| Application Circuit ........................................................................ 14                                                |
| Assembly Diagram..................................................................... 14                                                       |
| Outline Dimensions....................................................................... 15                                                   |
| Ordering Guide .......................................................................... 15                                                   |

6/2019-Revision 0: Initial Version

## SPECIFICATIONS

## 5.5 GHz TO 7 GHz FREQUENCY RANGE

TA = 25°C, drain bias voltage (VDD) = 5 V, and IDQ = 220 mA, unless otherwise noted.

## Table 1.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                               |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------|
| FREQUENCY RANGE                   |          |   5.5 |       |     7 | GHz    |                                                        |
| GAIN                              |          |    22 |    24 |       | dB     |                                                        |
| Gain Variation Over Temperature   |          |       | 0.006 |       | dB/°C  |                                                        |
| RETURN LOSS                       |          |       |       |       |        |                                                        |
| Input                             |          |       |    14 |       | dB     |                                                        |
| Output                            |          |       |    11 |       | dB     |                                                        |
| OUTPUT                            |          |       |       |       |        |                                                        |
| Output Power for 1 dB Compression | P1dB     |    23 |    25 |       | dBm    |                                                        |
| Saturated Output Power            | P SAT    |       |  25.5 |       | dBm    |                                                        |
| Output Third-Order Intercept      | IP3      |       |  37.5 |       | dBm    | Measurement taken at output power(P OUT )pertone=12dBm |
| SUPPLY                            |          |       |       |       |        |                                                        |
| Current                           | I DQ     |       |   220 |       | mA     | Adjust V GG to achieve I DQ = 220 mAtypical            |
| Voltage                           | V DD     |     4 |     5 |       | V      |                                                        |

## 7 GHz TO 15.5 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, and IDQ = 220 mA, unless otherwise noted.

## Table 2.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |     7 |       |  15.5 | GHz    |                                             |
| GAIN                              |          |    22 |    24 |       | dB     |                                             |
| Gain Variation Over Temperature   |          |       | 0.008 |       | dB/°C  |                                             |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |  11.5 |       | dB     |                                             |
| Output                            |          |       |    13 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |  23.5 |  25.5 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |    26 |       | dBm    | With 24% PAE                                |
| Output Third-Order Intercept      | IP3      |       |    36 |       | dBm    | Measurement taken at P OUT per tone = 12dBm |
| SUPPLY                            |          |       |       |       |        |                                             |
| Current                           | I DQ     |       |   220 |       | mA     | Adjust V GG to achieve I DQ = 220 mAtypical |
| Voltage                           | V DD     |     4 |     5 |       | V      |                                             |

## [HMC1082CHIP](http://www.analog.com/HMC1082CHIP?doc=HMC1082CHIP.pdf)

## 15.5 GHz TO 18 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, and IDQ = 220 mA, unless otherwise noted.

## Table 3.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |  15.5 |       |    18 | GHz    |                                             |
| GAIN                              |          |    23 |    25 |       | dB     |                                             |
| Gain Variation Over Temperature   |          |       | 0.009 |       | dB/°C  |                                             |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |  14.5 |       | dB     |                                             |
| Output                            |          |       |    20 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |    22 |    24 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |  24.5 |       | dBm    |                                             |
| Output Third-Order Intercept      | IP3      |       |  35.5 |       | dBm    | Measurement taken at P OUT per tone = 12dBm |
| SUPPLY                            |          |       |       |       |        |                                             |
| Current                           | I DQ     |       |   220 |       | mA     | Adjust V GG to achieve I DQ = 220 mAtypical |
| Voltage                           | V DD     |     4 |     5 |       | V      |                                             |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                    | Rating                  |
|------------------------------------------------------------------------------|-------------------------|
| Drain Bias Voltage (V DD )                                                   | 5.5 V dc                |
| Radio Frequency (RF) Input Power (RFIN)                                      | 20 dBm                  |
| ContinuousPower Dissipation (P DISS ),T= 85°C (Derate 20.4 mW/°C Above 85°C) | 1.84W                   |
| Channel Temperature                                                          | 175°C                   |
| Storage Temperature Range                                                    | -65°C to +150°C         |
| Operating Temperature Range                                                  | -55°C to +85°C          |
| Junction Temperature to Maintain 1,000,000 Hour Mean Time to Failure (MTTF)  | 175°C                   |
| Nominal Junction Temperature (T = 85°C, V DD = 5 V, I DQ = 220 mA)           | 138.8°C                 |
| ESD Sensitivity Human Body Model (HBM)                                       | Class 1A (passed 250 V) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

θJC is the junction to case thermal resistance, channel to bottom of die.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-6-13         |   48.9 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

20651-002

Figure 2. Pad Configuration

<!-- image -->

Table 6. Pad Function Descriptions

| Pin No.    | Mnemonic              | Description                                                   |
|------------|-----------------------|---------------------------------------------------------------|
| 1          | RFIN                  | RF Signal Input. This pad is dc-coupled and matched to 50 Ω.  |
| 2, 3, 4    | V DD1 , V DD2 , V DD3 | Drain Bias for the Amplifier.                                 |
| 5          | RFOUT                 | RF Signal Output. This pad is dc-coupled and matched to 50 Ω. |
| 6          | V GG                  | Amplifier Gate Control.                                       |
| Die Bottom | GND                   | Ground. Die bottom must be connected to RF and dc ground.     |

## INTERFACE SCHEMATICS

<!-- image -->

<!-- image -->

Figure 4. VDD1, VDD2, and VDD3 Interface Schematic

<!-- image -->

Figure 5. VGG Interface Schematic

Figure 6. RFOUT Interface Schematic

<!-- image -->

Figure 7. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Gain and Return Loss vs. Frequency

Figure 9. Input Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 10. Gain vs. Frequency for Various Supply Voltages (VDD), IDQ = 220 mA

<!-- image -->

20651-011

Figure 11. Gain vs. Frequency for Various Temperatures

<!-- image -->

20651-012

Figure 12. Output Return Loss vs. Frequency for Various Temperatures

<!-- image -->

Figure 13. Input Return Loss vs. Frequency for Various Supply Voltages, IDQ = 220 mA

<!-- image -->

<!-- image -->

Figure 14. Output Return Loss vs. Frequency for Various Supply Voltages (VDD), IDQ = 220 mA

<!-- image -->

Figure 15. Gain vs. Frequency for Various IDQ Values, VDD = 5 V

<!-- image -->

Figure 16. P1dB vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 220 mA

<!-- image -->

Figure 17. Input Return Loss vs. Frequency for Various IDQ Values, VDD = 5 V

Figure 18. Output Return Loss vs. Frequency for Various Supply Currents (IDQ), VDD = 5 V

<!-- image -->

Figure 19. PSAT vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 220 mA

<!-- image -->

Figure 20. P1dB vs. Frequency for Various VDD, IDQ = 220 mA

<!-- image -->

20651-021

<!-- image -->

Figure 21. P1dB vs. Frequency for Various IDQ, VDD = 5 V

Figure 22. POUT, Gain, PAE, and Drain Current (IDD) vs. Input Power, Frequency = 11 GHz

<!-- image -->

Figure 23. PSAT vs. Frequency for Various VDD, IDQ = 220 mA

<!-- image -->

20651-024

Figure 24. PSAT vs. Frequency for Various IDQ, VDD = 5 V

<!-- image -->

Figure 25. Power Dissipation vs. Input Power at T = 85°C, VDD = 5 V, IDD = 220 mA

<!-- image -->

## [HMC1082CHIP](http://www.analog.com/HMC1082CHIP?doc=HMC1082CHIP.pdf)

<!-- image -->

Figure 26. Output IP3 vs. Frequency for Various Temperatures, POUT per Tone = 12 dBm, VDD = 5 V, IDQ = 220 mA

<!-- image -->

Figure 27. Output IP3 vs. Frequency for Various IDQ, POUT per Tone = 12 dBm, VDD = 5 V

<!-- image -->

Figure 28. Third-Order Intermodulation vs. POUT per Tone, VDD = 4.5 V, IDQ = 220 mA

<!-- image -->

Figure 29. Output IP3 vs. Frequency for Various VDD, POUT per Tone = 12 dBm, IDQ = 220 mA

Figure 30. Third-Order Intermodulation vs. POUT per Tone, VDD = 4 V, IDQ = 220 mA

<!-- image -->

Figure 31. Third-Order Intermodulation vs. POUT per Tone, VDD = 5 V, IDQ = 220 mA

<!-- image -->

<!-- image -->

Figure 32. Reverse Isolation vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 220 mA

Figure 33. Phase Noise vs. Offset Frequency, RF Frequency = 8 GHz, RF Input Power = 3 dBm (P1dB)

<!-- image -->

Figure 34. Quiescent Drain Supply Current vs. Gate Supply Voltage

<!-- image -->

## [HMC1082CHIP](http://www.analog.com/HMC1082CHIP?doc=HMC1082CHIP.pdf)

## THEORY OF OPERATION

The architecture of the HMC1082CHIP medium power amplifier is shown in Figure 35. The HMC1082CHIP uses cascaded three-stage amplifiers. The nominal VDD voltage of each stage is 5 V.

Data Sheet

Figure 35. Basic Schematic for HMC1082CHIP

<!-- image -->

## APPLICATIONS INFORMATION

The HMC1082CHIP is a GaAs, pHEMT, MMIC medium power amplifier. Capacitive bypassing is required for all VGG and VDDx pads.

All measurements for this device were taken using the application circuit (see Figure 38) and were configured as shown in the assembly diagram (see Figure 39).

## RECOMMENDED BIAS SEQUENCING

The recommended bias sequence during power-up is as follows:

1. Connect GND to RF and dc ground.
2. Set the gate bias voltage, VGG to -2.0 V.
3. Set all the drain bias voltages, VDDx, to 5 V.
4. Increase the gate bias voltage to achieve a quiescent current, and set IDQ = 220 mA.
5. Apply the RF signal.

The recommended bias sequence during power-down is as follows:

1. Turn off the RF signal.
2. Decrease the primary gate bias voltage, VGG, to -2.0 V to achieve IDQ = 0 mA (approximately).
3. Decrease all drain bias voltages to 0 V.
4. Increase the gate bias voltage to 0 V.

Simplified bias pad connections to dedicated gain stages and dependence and independence among pads are shown in Figure 35.

The VDD = 5 V and IDQ = 220 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the HMC1082CHIP at different bias conditions may provide performance that differs from what is shown in the Typical Performance Characteristics section with nominal (VDD = 5 V and IDQ = 220 mA) conditions.

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICS

Attach the die directly to the ground plane eutectically or with conductive epoxy (see the Handling Precautions section).

To bring the radio frequency to and from the chip, implementing 50 Ω transmission lines using a microstrip or coplanar waveguide on 0.127 mm (5 mil) thick alumina, thin film substrates is recommended (see Figure 36). When using 0.254 mm (10 mil) thick alumina, it is recommended that the die be raised to ensure that the die and substrate surfaces are coplanar. Raise the die 0.150 mm (6 mil) to ensure that the surface of the die is coplanar with the surface of the substrate. To accomplish this, attach the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick, molybdenum (Mo) heat spreader (moly tab), which can then be attached to the ground plane (see Figure 36 and Figure 37).

Figure 36. Die Without the Moly Tab

<!-- image -->

20651-037

Figure 37. Die With the Moly Tab

<!-- image -->

Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## APPLICATION CIRCUIT

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 39. Assembly Diagram

<!-- image -->

Figure 38. Application Circuit

20651-039

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 40. 6-Pad Bare Die [CHIP] (C-6-13)

Dimensions shown in millimeters

| Model 1      | Temperature Range   | Package Description   | Package Option   |
|--------------|---------------------|-----------------------|------------------|
| HMC1082C-KIT | -55°C to +85°C      | 6-Pad Bare Die [CHIP] | C-6-13           |
| HMC1082CHIP  | -55°C to +85°C      | 6-Pad Bare Die [CHIP] | C-6-13           |

## ORDERING GUIDE

1  The HMC1082CHIP and HMC1082C-KIT are RoHS compliant parts.

<!-- image -->

05-29-2019-A