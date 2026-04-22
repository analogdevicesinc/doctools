<!-- lastmod 2024-10-07 -->
<!-- image -->

## FEATURES

- High RF input power survivability: 36.5 dBm
- Single positive supply (self-biased): 5 V with I DQ = 110 mA
- RBIAS drain current adjustment pad
- Low noise figure: 3.3 dB typical at 2 GHz to 18 GHz
- High gain: 15.5 dB typical at 2 GHz to 18 GHz
- High OIP3: 29 dBm typical at 2 GHz to 18 GHz
- Extended operating temperature range: -55°C to +125°C
- Die size: 0.945 mm × 1.540 mm × 0.100 mm

## APPLICATIONS

- Telecommunications
- Satellite communications
- Military radar
- Civil radar
- Electronic warfare
- Test and measurement equipment

## High Survivability, Low Noise Amplifier, 1 GHz to 20 GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADL8109CHIP is a 1 GHz to 20 GHz low noise amplifier (LNA) with 36.5 dBm RF input power survivability. The ADL8109CHIP has a gain of 15.5 dB, an output power for 1 dB compression (OP1dB) of 16.6 dBm, a typical output third-order intercept (OIP3) of 29 dBm, and a noise figure of 3.3 dB from 2 GHz to 18 GHz. This LNA operates on a 5 V supply voltage (V DD ) and has a nominal quiescent current (I DQ ) of 110 mA.

The ADL8109CHIP is fabricated on a gallium arsenide (GaAs), pseudomorphic high electron mobility transfer (pHEMT) process. This device is specified for operation from -55°C to +125°C.

## TABLE OF CONTENTS

Features................................................................ 1

Applications........................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

1 GHz to 2 GHz Frequency Range.................... 3

2 GHz to 18 GHz Frequency Range.................. 3

18 GHz to 20 GHz Frequency Range................ 4

DC Specifications............................................... 4

Absolute Maximum Ratings...................................5

Thermal Resistance........................................... 5

Electrostatic Discharge (ESD) Ratings...............5

ESD Caution.......................................................5

Pin Configuration and Function Descriptions........ 6

Interface Schematics..........................................6

## REVISION HISTORY

10/2024-Revision 0: Initial Version

| Typical Performance Characteristics.....................7                                                                                        |    |
|--------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Theory of Operation.............................................14                                                                               |    |
| Applications Information......................................                                                                                   | 15 |
| Recommended Bias Sequence...........................16                                                                                           |    |
| Power-Up Sequence........................................16                                                                                      |    |
| Power-Down Sequence....................................16                                                                                        |    |
| Assembly Diagram..............................................                                                                                   | 17 |
| Mounting and Bonding Techniques for Millimeterwave, GaAs, Monolithic Microwave ICs (MMICs)...................................................... | 18 |
| Handling Precaution.........................................18                                                                                   |    |
| Mounting...........................................................18                                                                            |    |
| Wire Bonding....................................................18                                                                               |    |
| Outline Dimensions.............................................                                                                                  | 19 |
| Ordering Guide.................................................19                                                                                |    |

## SPECIFICATIONS

## 1 GH z TO 2 GH z FREQUENCY RANGE

VDD  = 5 V, I DQ = 110 mA, bias resistance (R BIAS ) = 300 Ω, and T CASE = 25°C, unless otherwise noted.

Table 1. 1 GHz to 2 GHz Frequency Range Specifications

| Parameter                                  | Min   | Typ   | Max   | Unit     | Test Conditions/Comments                                    |
|--------------------------------------------|-------|-------|-------|----------|-------------------------------------------------------------|
| FREQUENCY RANGE                            | 1     |       | 2     | GHz      |                                                             |
| GAIN (S21) Gain Variation over Temperature | 12    | 14.5  |       | dB dB/°C |                                                             |
|                                            |       | 0.01  |       |          |                                                             |
| NOISE FIGURE                               |       | 4.1   |       | dB       |                                                             |
| RETURN LOSS                                |       |       |       |          |                                                             |
| Input (S11)                                |       | 9.6   |       | dB       |                                                             |
| Output (S22)                               |       | 14    |       | dB       |                                                             |
| OUTPUT                                     |       |       |       |          |                                                             |
| OP1dB                                      |       | 15.9  |       | dBm      |                                                             |
| Saturated Power (P SAT )                   |       | 18.5  |       | dBm      |                                                             |
| OIP3                                       |       | 28    |       | dBm      | Measurement taken at output power (P OUT ) per tone = 4 dBm |
| Second-Order Intercept (OIP2)              |       | 37    |       | dBm      | Measurement taken at P OUT per tone = 4 dBm                 |
| POWER ADDED EFFICIENCY (PAE)               |       | 9.4   |       | %        | Measured at P SAT                                           |

## 2 GH z TO 18 GH z FREQUENCY RANGE

VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω, and T CASE = 25°C, unless otherwise noted.

Table 2. 2 GHz to 18 GHz Frequency Range Specification

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                    |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                 | 2     |       | 18    | GHz    |                                             |
| S21                             | 14    | 15.5  |       | dB     |                                             |
| Gain Variation over Temperature |       | 0.01  |       | dB/°C  |                                             |
| NOISE FIGURE                    |       | 3.3   |       | dB     |                                             |
| RETURN LOSS                     |       |       |       |        |                                             |
| S11                             |       | 12    |       | dB     |                                             |
| S22                             |       | 19    |       | dB     |                                             |
| OUTPUT                          |       |       |       |        |                                             |
| OP1dB                           | 14    | 16.6  |       | dBm    |                                             |
| P SAT                           |       | 19.5  |       | dBm    |                                             |
| OIP3                            |       | 29    |       | dBm    | Measurement taken at P OUT per tone = 4 dBm |
| OIP2                            |       | 38    |       | dBm    | Measurement taken at P OUT per tone = 4 dBm |
| PAE                             |       | 11.6  |       | %      | Measured at P SAT                           |

## SPECIFICATIONS

## 18 GH z TO 20 GH z FREQUENCY RANGE

VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω, and T CASE = 25°C, unless otherwise noted.

Table 3. 18 GHz to 20 GHz Frequency Range Specification

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                    |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                 | 18    |       | 20    | GHz    |                                             |
| S21                             | 13.4  | 15.9  |       | dB     |                                             |
| Gain Variation over Temperature |       | 0.01  |       | dB/°C  |                                             |
| NOISE FIGURE                    |       | 4.4   |       | dB     |                                             |
| RETURN LOSS                     |       |       |       |        |                                             |
| S11                             |       | 12.5  |       | dB     |                                             |
| S22                             |       | 22.9  |       | dB     |                                             |
| OUTPUT                          |       |       |       |        |                                             |
| OP1dB                           |       | 14    |       | dBm    |                                             |
| P SAT                           |       | 18    |       | dBm    |                                             |
| OIP3                            |       | 27.6  |       | dBm    | Measurement taken at P OUT per tone = 4 dBm |
| OIP2                            |       | 51    |       | dBm    | Measurement taken at P OUT per tone = 4 dBm |
| PAE                             |       | 9     |       | %      | Measured at P SAT                           |

## DC SPECIFICATIONS

RBIAS = 300 Ω and T CASE = 25°C, unless otherwise noted.

## Table 4. DC Specification

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 110   |       | mA     |
| Amplifier Current (I DQ_AMP ) |       | 100   |       | mA     |
| RBIAS Current (I RBIAS )      |       | 10    |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 3     | 5     | 6     | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 5. Absolute Maximum Ratings

| Parameter                                                                               | Rating          |
|-----------------------------------------------------------------------------------------|-----------------|
| Drain Bias Voltage (V DD )                                                              | 7 V             |
| RF Input Power (RFIN)                                                                   | See Figure 2    |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 17.98 mW/°C Above 85°C)   | 1.618W          |
| Temperature                                                                             |                 |
| Storage Range                                                                           | -65°C to +150°C |
| Operating Range                                                                         | -55°C to +125°C |
| Quiescent Channel (T CASE = 85°C, V DD = 5 V, I DQ = 110 mA, Input Power (P IN ) = Off) | 115.6°C         |
| Maximum Channel                                                                         | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Figure 2. RF Input Power Absolute Maximum Ratings for Pulsed and Continuous Wave vs. Frequency, T CASE = 85°C

<!-- image -->

## THERMAL RESISTANCE

Overall thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is required with each material used in the thermal path below the IC. With an epoxy layer of nominal thickness assumed under the die, θ JC is the thermal resistance from the die channel to the bottom of the epoxy layer.

## Table 6. Thermal Resistance 1

| Package Type        |   θ JC | Unit   |
|---------------------|--------|--------|
| C-8-30 Worst Case 2 |   55.6 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8109CHIP

## Table 7. ADL8109CHIP, 8-Pad CHIP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±400                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 3. Pad Configuration

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                        |
|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS      | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set I DQ . See Figure 47 and Table 9 for more details. See Figure 4 for the interface schematic.                                |
| 2, 4, 6, 8 | GND        | Ground. See Figure 5 for the interface schematic.                                                                                                                                                  |
| 3          | RFIN       | RF Input. The RFIN pad is DC-coupled to 0 V and AC matched to 50 Ω. No DC blocking capacitor is necessary when the RF line potential is equal to 0 V DC. See Figure 6 for the interface schematic. |
| 5          | VDD        | Drain Bias. Connect the VDD pad to the supply voltage. See Figure 7 for the interface schematic.                                                                                                   |
| 7          | RFOUT      | RF Output. The RFOUT pad is AC-coupled and matched to 50 Ω. See RFOUT and VDD Interface Schematic for the interface schematic.                                                                     |
| Die Bottom | GND        | Die bottom must be connected to RF and DC ground.                                                                                                                                                  |

## Table 8. Pad Function Descriptions

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. RBIAS Interface Schematic

<!-- image -->

Figure 5. GND Interface Schematic

Figure 6. RFIN Interface Schematic

<!-- image -->

Figure 7. RFOUT and VDD Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Broadband Gain and Return Loss (Input, S11, and Output, S22) vs. Frequency, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 9. Gain vs. Frequency for Various Supply Voltages, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 10. Input Return Loss vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 11. Gain vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 12. Gain vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 13. Input Return Loss vs. Frequency for Various V DD Values, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Input Return Loss vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 15. Output Return Loss vs. Frequency for Various V DD Values, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 16. Reverse Isolation vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 17. Output Return Loss vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 18. Output Return Loss vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 19. Reverse Isolation vs. Frequency for Various V DD Values, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 20. Reverse Isolation vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various V DD Values, I DQ = 110 mA, RBIAS = 300 Ω

<!-- image -->

Figure 22. OP1dB vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 23. Noise Figure vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 24. Noise Figure vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 25. OP1dB vs. Frequency for Various V DD Values, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 26. OP1dB vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 27. P SAT vs. Frequency for Various V DD Values, I DQ = 110 mA, RBIAS = 300 Ω

<!-- image -->

Figure 28. OIP3 vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 29. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 30. P SAT vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 31. OIP3 vs. Frequency for Various V DD Values, I DQ = 110 mA, RBIAS = 300 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 32. OIP3 vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 33. OIP2 vs. Frequency for Various V DD Values, I DQ = 110 mA, RBIAS = 300 Ω

<!-- image -->

Figure 34. I DQ vs. P IN for Various Frequencies, VDD  = 5 V, R BIAS = 300 Ω

<!-- image -->

Figure 35. OIP2 vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 36. OIP2 vs. Frequency for Various I DQ Values, VDD  = 5 V

<!-- image -->

Figure 37. P DISS vs. P IN for Various Frequencies, V DD = 5 V, I DQ = 110 mA, RBIAS = 300 Ω at 125°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 38. PAE Measured at OP1dB vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

<!-- image -->

Figure 39. P OUT , Gain, PAE at 1 GHz, and Power Supply Current (I DD ) vs. PIN , V DD = 5 V, R BIAS = 300 Ω

<!-- image -->

Figure 40. P OUT , Gain, PAE at 18 GHz, and I DD vs. P IN , VDD  = 5 V, R BIAS = 300 Ω

<!-- image -->

Figure 41. PAE Measured at P SAT vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 110 mA, R BIAS = 300 Ω

Figure 42. P OUT , Gain, PAE at 10 GHz, and I DD vs. P IN , VDD  = 5 V, R BIAS = 300 Ω

<!-- image -->

Figure 43. P OUT , Gain, PAE at 20 GHz, and I DD vs. P IN , VDD  = 5 V, R BIAS = 300 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 44. I DQ vs. R BIAS at Various Supply Voltages, 0 Ω to 0.5 kΩ

<!-- image -->

Figure 45. I DQ vs. R BIAS at Various Supply Voltages, 0.5 kΩ to 5.5 kΩ

<!-- image -->

## THEORY OF OPERATION

The ADL8109CHIP is a wideband LNA that operates from 1 GHz to 20 GHz. A simplified block diagram is shown in Figure 46.

The RFIN pad is DC-coupled to 0 V and AC matched to 50 Ω. No DC blocking capacitor is necessary when the RF line potential is equal to 0 V DC. The RF output is AC-coupled. No external matching components are required. To adjust the I DQ , connect a supply-referenced external resistor to the RBIAS pad.

Figure 46. Simplified Schematic

<!-- image -->

## APPLICATIONS INFORMATION

The basic connections for operating the ADL8109CHIP from 1 GHz to 20 GHz are shown in Figure 47. No external biasing inductor is required for this device. It is recommended to use 1 µF and 1000 pF power supply decoupling capacitors for the VDD pad. To set I DQ , connect a resistor between the RBIAS and VDD pads; 300 Ω is recommended, which results in a nominal I DQ of 110 mA.

The RF input is shown as DC-coupled. If the RF input is driven by a signal with a bias level that is not equal to 0 V, an external AC-coupling capacitor must be used.

Table 9 details the resulting I DQ for various R BIAS values where the resistor is tied to 5 V.

The circuit shown in Figure 47 represents the configuration used to characterize and qualify the ADL8109CHIP.

Figure 47. Typical Application Circuit

<!-- image -->

Table 9. Recommended R BIAS Values for V DD = 5 V

|   R BIAS (Ω) |   I DQ (mA) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|-------------|-----------------|----------------|
|          672 |          50 |            44.7 |            5.3 |
|          456 |          70 |            62.7 |            7.3 |
|          353 |          90 |            81.2 |            8.8 |
|          300 |         110 |           100   |           10   |
|          263 |         130 |           119.2 |           10.8 |

## RECOMMENDED BIAS SEQUENCE

To avoid damaging the ADL8109CHIP, careful attention must be paid to the power-up and power-down sequence of the RF input, drain bias voltage, and RBIAS voltage.

## POWER-UP SEQUENCE

The following power-up sequence is recommended:

1. Connect the power supply grounds to GND.
2. Set VDD and RBIAS to 5 V.
3. Apply the RF signal.

## POWER-DOWN SEQUENCE

The following power-down sequence is recommended:

1. Turn off the RF signal.
2. Decrease VDD and RBIAS to 0 V.

## ASSEMBLY DIAGRAM

Figure 48. Assembly Diagram

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE, GAAS, MONOLITHIC MICROWAVE ICS (MMICS)

## HANDLING PRECAUTION

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle- or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all dies in a dry nitrogen environment.
- Handle the chip in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The surface of the chip has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## MOUNTING

Before the die is attached, apply enough epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## WIRE BONDING

RF bonds made with 1 mil gold wire are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded DC bonds of 0.025 mm diameter (0.001 in) are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm (12 mil).

Attach the die directly to the ground plane with high thermal conductive epoxy (see the Handling Precaution section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to minimize the wire bond length. Typical die substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 49. Input Wire Bonding and Substrate Spacing

<!-- image -->

Figure 50. Output Wire Bonding and Substrate Spacing

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

PKG-006596

## ORDERING GUIDE

| Model 1     | Temperature Range   | Package Description   | Package Option   |
|-------------|---------------------|-----------------------|------------------|
| ADL8109CHIP | -55°C to +125°C     | 8-Pad Bare Die [CHIP] | C-8-30           |

Figure 51. 8-Pad Bare Die [CHIP] C-8-30 Dimensions shown in millimeters

<!-- image -->

08-27-2024-A