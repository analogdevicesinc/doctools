<!-- lastmod 2023-03-01 -->
<!-- image -->

## FEATURES

- Output P1dB: 29 dBm
- PSAT
- : 29.5 dBm
- Gain: 23.5 dB
- Output IP3: 38 dBm
- Supply voltage: 5 V at 800 mA
- Integrated power detector
- 50 Ω matched input/output
- Die size: 2.750 mm × 1.805 mm × 0.102 mm

## APPLICATIONS

- Military and space
- Test instrumentation
- Communications

## GENERAL DESCRIPTION

The ADPA7006CHIP is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), distributed power amplifier that operates from 18 GHz to 44 GHz. The amplifier provides 23.5 dB of small signal gain, 29 dBm output power for 1 dB compression, and a typical output third-order intercept of 38 dBm. The ADPA7006CHIP

## Data Sheet

## ADPA7006CHIP

## 18 GHz to 44 GHz, GaAs, pHEMT, MMIC,1/2 W Power Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

requires 800 mA from a 5 V supply on the supply voltage (V DD ), and features inputs and outputs that are internally matched to 50 Ω, facilitating integration in multichip modules (MCMs). All data is taken with the chip connected via two 0.025 mm wire bonds that are less than 0.31 mm long.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 18 GHz to 20 GHz Frequency Range................ 3 20 GHz to 28 GHz Frequency Range................ 3 28 GHz to 36 GHz Frequency Range ............... 4 36 GHz to 44 GHz Frequency Range ............... 4 Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5                                                                              | Mounting and Bonding Techniques for Millimeterwave GaAs MMICs ........................16 Biasing the ADPA7006CHIP with the HMC980LP4E....................................................18 Application Circuit Setup..................................18 Limiting VGATE for the ADPA7006CHIP V GGx AMR (Absolute Maximum Rating) Requirement...................................................18 HMC980LP4E Bias Sequence.........................20 Constant Drain Current Biasing vs. Constant Gate Voltage Biasing...................... 20                                                                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2/2023-Rev. 0 to Rev. A Changes to Figure 46.................................................................................................................................... 13 Changes to Table 5..........................................................................................................................................5 Changes to Mounting and Bonding Techniques for Millimeterwave GaAs MMICs Section...........................16 Changes to Figure 52.................................................................................................................................... 16 Changes to Figure 53.................................................................................................................................... 17 | 2/2023-Rev. 0 to Rev. A Changes to Figure 46.................................................................................................................................... 13 Changes to Table 5..........................................................................................................................................5 Changes to Mounting and Bonding Techniques for Millimeterwave GaAs MMICs Section...........................16 Changes to Figure 52.................................................................................................................................... 16 Changes to Figure 53.................................................................................................................................... 17 |

7/2019-Revision 0: Initial Version

## ADPA7006CHIP

## SPECIFICATIONS

## 18 GHZ TO 20 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, quiescent supply current (I DQ ) = 800 mA for nominal operation, unless otherwise noted.

Table 1.

| Parameter                                          | Symbol   | Min   | Typ              | Max   | Unit           | Test Conditions/Comments                                                             |
|----------------------------------------------------|----------|-------|------------------|-------|----------------|--------------------------------------------------------------------------------------|
| FREQUENCY RANGE                                    |          | 18    |                  | 20    | GHz            |                                                                                      |
| GAIN Gain Flatness Gain Variation Over Temperature |          |       | 22.5 ±0.75 0.011 |       | dB dB dB/°C dB |                                                                                      |
| NOISE FIGURE                                       |          |       |                  |       |                |                                                                                      |
|                                                    |          |       | 9.5              |       |                |                                                                                      |
| RETURN LOSS                                        |          |       | 13               |       | dB             |                                                                                      |
| Input Output                                       |          |       |                  |       | dB             |                                                                                      |
|                                                    |          |       | 17               |       |                |                                                                                      |
| OUTPUT                                             |          |       |                  |       |                |                                                                                      |
| Output Power for 1 dB Compression                  | P1dB     |       | 26               |       | dBm            |                                                                                      |
| Saturated Output Power                             | P SAT    |       | 27               |       | dBm            |                                                                                      |
| Output Third-Order Intercept                       | IP3      |       | 34               |       | dBm            |                                                                                      |
|                                                    |          |       |                  |       |                | Measurement taken at output power (P OUT ) per tone = 14 dBm                         |
| SUPPLY                                             |          |       |                  |       |                |                                                                                      |
| Current                                            | I DQ     |       | 800              |       | mA             | Adjust the gate bias voltage (V GGx ) from -1.5 V to 0 V to achieve the desired I DQ |
| Voltage                                            | V DD     | 4     | 5                |       | V              |                                                                                      |

## 20 GHZ TO 28 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, quiescent supply current (I DQ ) = 800 mA for nominal operation, unless otherwise noted.

Table 2.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                             |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 20    |       | 28    | GHz    |                                                                                      |
| GAIN                              |          | 23    | 25    |       | dB     |                                                                                      |
| Gain Flatness                     |          |       | ±1.0  |       | dB     |                                                                                      |
| Gain Variation Over Temperature   |          |       | 0.026 |       | dB/°C  |                                                                                      |
| NOISE FIGURE                      |          |       | 7.5   |       | dB     |                                                                                      |
| RETURN LOSS                       |          |       |       |       |        |                                                                                      |
| Input                             |          |       | 16    |       | dB     |                                                                                      |
| Output                            |          |       | 24    |       | dB     |                                                                                      |
| OUTPUT                            |          |       |       |       |        |                                                                                      |
| Output Power for 1 dB Compression | P1dB     | 26.0  | 28.5  |       | dBm    |                                                                                      |
| Saturated Output Power            | P SAT    |       | 29    |       | dBm    |                                                                                      |
| Output Third-Order Intercept      | IP3      |       | 36    |       | dBm    | Measurement taken at P OUT per tone = 14 dBm                                         |
| SUPPLY                            |          |       |       |       |        |                                                                                      |
| Current                           | I DQ     |       | 800   |       | mA     | Adjust the gate bias voltage (V GGX ) from -1.5 V to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                                      |

## SPECIFICATIONS

## 28 GHZ TO 36 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, I DQ = 800 mA for nominal operation, unless otherwise noted.

Table 3.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                             |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 28    |       | 36    | GHz    |                                                                                      |
| GAIN                              |          | 21.5  | 23.5  |       | dB     |                                                                                      |
| Gain Flatness                     |          |       | ±0.5  |       | dB     |                                                                                      |
| Gain Variation Over Temperature   |          |       | 0.016 |       | dB/°C  |                                                                                      |
| NOISE FIGURE                      |          |       | 5.5   |       | dB     |                                                                                      |
| RETURN LOSS                       |          |       |       |       |        |                                                                                      |
| Input                             |          |       | 16    |       | dB     |                                                                                      |
| Output                            |          |       | 23    |       | dB     |                                                                                      |
| OUTPUT                            |          |       |       |       |        |                                                                                      |
| Output Power for 1 dB Compression | P1dB     | 26.5  | 29    |       | dBm    |                                                                                      |
| Saturated Output Power            | P SAT    |       | 29.5  |       | dBm    |                                                                                      |
| Output Third-Order Intercept      | IP3      |       | 38    |       | dBm    | Measurement taken at P OUT per tone = 14 dBm                                         |
| SUPPLY                            |          |       |       |       |        |                                                                                      |
| Current                           | I DQ     |       | 800   |       | mA     | Adjust the gate bias voltage (V GGx ) from -1.5 V to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                                      |

## 36 GHZ TO 44 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, I DQ = 800 mA for nominal operation, unless otherwise noted.

## Table 4.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                             |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 34    |       | 44    | GHz    |                                                                                      |
| GAIN                              |          | 21    | 23    |       | dB     |                                                                                      |
| Gain Flatness                     |          |       | ±0.3  |       | dB     |                                                                                      |
| Gain Variation Over Temperature   |          |       | 0.03  |       | dB/°C  |                                                                                      |
| NOISE FIGURE                      |          |       | 5     |       | dB     |                                                                                      |
| RETURN LOSS                       |          |       |       |       |        |                                                                                      |
| Input                             |          |       | 23    |       | dB     |                                                                                      |
| Output                            |          |       | 23    |       | dB     |                                                                                      |
| OUTPUT                            |          |       |       |       |        |                                                                                      |
| Output Power for 1 dB Compression | P1dB     | 24.2  | 27    |       | dBm    |                                                                                      |
| Saturated Output Power            | P SAT    |       | 28    |       | dBm    |                                                                                      |
| Output Third-Order Intercept      | IP3      |       | 38    |       | dBm    | Measurement taken at P OUT per tone = 14 dBm                                         |
| SUPPLY                            |          |       |       |       |        |                                                                                      |
| Current                           | I DQ     |       | 800   |       | mA     | Adjust the gate bias voltage (V GGX ) from -1.5 V to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                                      |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                        |                        |
|---------------------------------------------------------------------------------|------------------------|
| Parameter                                                                       | Rating                 |
| Drain Bias Voltage (V DDxx )                                                    | 6.0 V                  |
| Gate Bias Voltage (V GG1 )                                                      | -1.5 V to 0 V          |
| Radio Frequency (RF) Input Power (RFIN)                                         | 20 dBm                 |
| Continuous Power Dissipation (P DISS ), T = 85°C (Derate 92.6 mW/°C Above 85°C) | 8.3W                   |
| Storage Temperature Range                                                       | -65°C to +150°C        |
| Operating Temperature Range                                                     | -55°C to +85°C         |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)                | Class 1B Passed, 750 V |
| Reliability Information Maximum Junction Temperature                            | 175°C                  |
| Nominal Junction Temperature (T = 85°C, V DD = 5 V, I DQ = 800 mA)              | 128.2°C                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to the printed circuit board (PCB) thermal design is required. θ JC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

| Table 6. Thermal Resistance Package Type   |   θ JC | Unit   |
|--------------------------------------------|--------|--------|
| C-14-7                                     |   10.8 | °C/W   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 7. Pin Function Descriptions

| Pin No.                    | Mnemonic                                                              | Description                                                                                                                                                                                                                                                                                                       |
|----------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                          | RFIN                                                                  | RF Signal Input. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                      |
| 2, 14                      | V GGA , V GGB                                                         | Amplifier Gate Control.                                                                                                                                                                                                                                                                                           |
| 3, 4, 5, 6, 10, 11, 12, 13 | V DD1B , V DD2B , V DD3B , V DD4B , V DD4A , V DD3A , V DD2A , V DD1A | Drain Bias for the Amplifier.                                                                                                                                                                                                                                                                                     |
| 7                          | VREF                                                                  | Reference Diode. Use this pad for temperature compensation of the VDET RF output power measurements. When used in combination with VDET, this voltage provides temperature compensation to the VDET RF output power measurements.                                                                                 |
| 8                          | RFOUT                                                                 | RF Signal Output. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                     |
| 9                          | VDET                                                                  | Detector Diode for Measuring the RF Output Power. Detection via this pad requires the application of a dc bias voltage through an external series resistor. When used in combination with VREF, the difference voltage, VREF - VDET, is a temperature compensated dc voltage proportional to the RF output power. |
| Die Bottom                 | GND                                                                   | The pads and die bottom must be connected to RF and dc ground.                                                                                                                                                                                                                                                    |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. VREF Interface Schematic

<!-- image -->

Figure 5. VDET Interface Schematic

<!-- image -->

Figure 6. RFIN Interface Schematic

<!-- image -->

Figure 7. V GGA , V GGB  Interface Schematic

Figure 8. RFOUT Interface Schematic

<!-- image -->

Figure 9. VDD1A, VDD1B to VDD4A, VDD4B Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 10. Gain and Return Loss vs. Frequency, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 11. Gain vs. Frequency for Various Supply Voltages (V DD ), I DQ = 800 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

Figure 14. Gain vs. Frequency for Various I DQ Values, V DD = 5 V

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Voltages, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various I DQ Values, V DD = 5 V

<!-- image -->

Figure 17. Output Return Loss vs Frequency for Various Supply Voltages (V DD ), I DQ = 800 mA

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

Figure 20. Output Return Loss vs. Frequency for Various Supply Currents (I DQ ), V DD = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 22. Output Power for 1 dB Compression (P1dB) vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 23. P1dB vs. Frequency for Various Supply Currents (I DQ ), V DD = 5 V

<!-- image -->

Figure 24. Saturated Output Power (P SAT ) vs. Frequency for Various Supply Voltages (V DD ), Drain Current (I DQ ) = 800 mA

<!-- image -->

Figure 25. P1dB vs. Frequency for Various Supply Voltages (V DD ), I DQ = 800 mA

Figure 26. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 27. P SAT vs. Frequency for Various Supply Currents (I DQ ), V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 28. Power Added Efficiency (PAE) vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 800 mA, PAE Measured at P SAT

<!-- image -->

Figure 29. PAE vs. Frequency for Various Supply Current (I DQ ), V DD = 5 V, PAE Measured at P SAT

<!-- image -->

Figure 30. Output Power (P OUT ), Gain, PAE, and I DD vs. Input Power, 26 GHz, VDD  = 5 V, I DQ = 800 mA

<!-- image -->

Figure 31. PAE vs. Frequency for Various Supply Voltages (V DD ), I DQ =800 mA, PAE Measured at P SAT

Figure 32. P OUT , Gain, PAE, and I DD vs. Input Power, 22 GHz, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 33. P OUT , Gain, PAE, and I DD vs. Input Power, 30 GHz, V DD = 5 V, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 34. P OUT , Gain, PAE, and I DD vs. Input Power, 34 GHz, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 35. P OUT , Gain, PAE, and I DD vs. Input Power, 42 GHz, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 36. Output IP3 vs. Frequency for Various Supply Voltages (V DD ), P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 37. P OUT , Gain, PAE, and I DD vs. Input Power, 38 GHz, V DD = 5 V, I DQ = 800 mA

Figure 38. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 39. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

<!-- image -->

Figure 40. Output IP3 vs Frequency for Various Supply Currents (I DQ ), P OUT per Tone = 14 dBm, V DD = 5 V

<!-- image -->

Figure 41. Third-Order Intermodulation Distortion Relative to Carrier (IM3) vs. POUT per Tone, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 42. Third-Order Intermodulation Distortion Relative to Carrier (IM3) vs. POUT per Tone, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 43. Quiescent Supply Current (I DQ ) vs. Gate Supply Voltage (V GGx )

Figure 44. Power Dissipation vs. Input Power at T = 85°C, V DD = 5 V, I DQ = 800 mA

<!-- image -->

Figure 45. Supply Current (I DD ) vs. Input Power at Various Frequencies, V DD = 5 V, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

Figure 46. Detector Voltage (V REF - V DET ) vs. Output Power for Various Temperatures at 32 GHz, V DD = 5 V, I DQ = 800 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTIC

## CONSTANT DRAIN CURRENT (IDD) OPERATION

TA = 25°C, V DD = 5 V, I DD = 900 mA for nominal operation, unless otherwise noted. Figure 47 to Figure 50 biased using the HMC980LP4E active bias control.

<!-- image -->

Figure 47. P1dB vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 48. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

Figure 49. P1dB vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 50. P SAT vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7006CHIP, a medium power amplifier, is shown in Figure 51. The ADPA7006CHIP uses two cascaded, four-stage amplifiers operating in quadrature between six 90° hybrids.

The input signal is divided evenly in two, and then each signal is divided in two again. Each path is amplified through three independent gain stages. The amplified signals are then combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 23 dB and a P SAT value of 28 dBm.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased, the diode rectifies the RF power and makes the RF power available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output (see Figure 51).

Figure 51. ADPA7006CHIP Architecture

<!-- image -->

## APPLICATIONS INFORMATION

The ADPA7006CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all primary and alternate V GGx and V DDxx pads.

VGGA  and V GGB are the gate bias pads for the cascaded amplifiers.

VDD1A , V DD1B , V DD2A , V DD2B , V DD3A , V DD3B , V DD4A , and V DD4B are the drain bias pads for the cascaded amplifiers.

All measurements for this device were taken using the typical application circuit (see Figure 62) and were configured as shown in the assembly diagram (see Figure 64 and Figure 65).

The recommended bias sequence during power-up is as follows:

1. Connect GND to RF and dc ground.
2. Set the primary gate bias voltages, V GGA and V GGB , to -1.5 V.
4. Increase the gate bias voltage to achieve a quiescent current, and set I DQ , = 800 mA.
3. Set all the drain bias voltages, V DDx x , to 5 V.
5. Apply the RF signal.

The recommended bias sequence during power-down is as follows:

1. Turn off the RF signal.
2. Decrease the primary gate bias voltage, V GGA , to -1.5 V to achieve I DQ = 0 mA (approximately).
3. Decrease all drain bias voltages to 0 V.
4. Increase the gate bias voltage to 0 V.

Simplified bias pad connections to dedicated gain stages and dependence and independence among pads are shown in Figure 51.

The V DD = 5 V and I DQ = 800 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data

Table 8. Power Selection Table

|   I DQ (mA) 1, 2 |   Gain (dB) |   P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) |   V GGx (V) |
|------------------|-------------|--------------|--------------------|--------------|-------------|
|              700 |        22.5 |         29.5 |               39.2 |          3.5 |       -0.7  |
|              800 |        22.9 |         29.6 |               37.5 |          4   |       -0.66 |
|              900 |        23.4 |         29.7 |               35.6 |          4.5 |       -0.62 |

shown was taken using the recommended bias conditions. Operation of the ADPA7006CHIP at different bias conditions may provide performance that differs from what is shown in the nominal (V DD = 5 V and I DQ = 800 mA) typical performance characteristic figures. Biasing the ADPA7006CHIP for higher drain current typically results in higher P1dB, output IP3, and gain at the expense of increased power consumption.

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 52. High Frequency Input Wideband Matching

<!-- image -->

## APPLICATIONS INFORMATION

Figure 53. High Frequency Output Wideband Matching

<!-- image -->

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The surface of the chip has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## Mounting

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 3 mil × 0.5 mil gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded dc bonds of 0.025 mm diameter, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm.

Alternatively, short RF bonds that are ≤3 mm and made with two 1 mm wires can be used.

## BIASING THE ADPA7006CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller designed to meet the bias requirements for enhancement mode and depletion mode amplifiers, such as the ADPA7006CHIP. The controller provides constant drain current biasing over temperature and device to device variation, and properly sequences gate and drain voltages to ensure the safe operation of the amplifier. The HMC980LP4E also offers self protection in the event of a short circuit, an internal charge pump that generates the negative voltage needed on the gate of the ADPA7006CHIP, and the option to use an external negative voltage source. The HMC980LP4E is also available in die form as the HMC980-DIE.

Figure 54. HMC980LP4E Active Bias Control

<!-- image -->

Figure 55. Application Circuit Using the HMC980LP4E with the ADPA7006CHIP

<!-- image -->

## APPLICATION CIRCUIT SETUP

Figure 55 shows an application circuit using the HMC980LP4E to control the ADPA7006CHIP. When using an external negative supply for VNEG, refer to the application circuit shown in Figure 56.

In the application circuit shown in Figure 55, the ADPA7006CHIP drain voltage and drain current are set by the following equations:

VDRAIN (5 V) = VDD (5.77 V) I DRAIN (900 mA) × 0.85 I DRAIN (900 mA) = 150 ÷ R10 (125 Ω)

## LIMITING VGATE FOR THE ADPA7006CHIP VGGX AMR (ABSOLUTE MAXIMUM RATING) REQUIREMENT

When using the HMC980LP4E to control the ADPA7006CHIP, the minimum voltages for VNEG and VGATE must be -1.5 V to keep them within the absolute maximum rating limit for the V GGx pad of the ADPA7006CHIP. To set the minimum voltages, set R15 and R16 to the values shown in Figure 56 and Figure 57. Refer to the AN-1363 Application Note for more information and calculations for R15 and R16.

## BIASING THE ADPA7006CHIP WITH THE HMC980LP4E

Figure 56. Application Circuit Using the HMC980LP4E with the ADPA7006CHIP (External Negative Voltage Source)

<!-- image -->

## BIASING THE ADPA7006CHIP WITH THE HMC980LP4E

## HMC980LP4E BIAS SEQUENCE

The dc supply sequence described in this section is required to prevent damage to the HMC980LP4E when using the device to control the ADPA7006CHIP.

## Power-Up Sequence

The power-up sequence for the HMC980LP4E is as follows:

1. VDIG = 3.3 V.
2. S0 = 3.3 V.
3. VDD = 5.77 V.
4. VNEG = -1.5 V (this step is unnecessary if using an internally generated voltage).
5. EN = 3.3 V (transition from 0 V to 3.3 V turns on V GATE and VDRAIN )

## Power-Down Sequence

The power-down sequence for the HMC980LP4E is as follows:

1. EN = 0 V (transition from 3.3 V to 0 V turns off V DRAIN and VGATE ).
2. VNEG = 0 V (unnecessary if using internally generated voltage).
3. VDD = 0 V.
4. S0 = 0 V.
5. VDIG = 0 V.

After the HMC980LP4E bias control circuit is set up, toggle the bias to the ADPA7006CHIP on or off by applying 3.3 V or 0 V, respectively, to the EN pad. At EN = 3.3 V, V GATE drops to -1.5 V and V DRAIN turns on at 5 V. V GATE then rises until I DRAIN = 800 mA, and the closed control loop regulates I DRAIN at 900 mA. When EN = 0 V, V DRAIN is set to -1.5 V and V DRAIN is set to 0 V.

Figure 57. Turn On HMC980LP4E Outputs to ADPA7006CHIP

<!-- image -->

Figure 58. Turn Off HMC980LP4E Outputs to ADPA7006CHIP

<!-- image -->

## CONSTANT DRAIN CURRENT BIASING VS. CONSTANT GATE VOLTAGE BIASING

The HMC980LP4E uses closed-loop feedback to continuously adjust VGATE to maintain a constant gate current bias over dc supply variation, temperature, and device to device variation. In addition, constant drain current bias is the optimum method for reducing time in calibration procedures and for maintaining consistent performance over time. By comparing with a constant gate voltage bias where the current is driven to increase when RF power is applied, a slightly lower output P1dB is seen with a constant drain current bias. This output P1db is shown in Figure 62, where the RF performance is slightly lower than constant gate voltage bias operation due to a lower drain current at high input powers as the device reaches 1dB compression.

The output P1dB performance for constant drain current bias can be increased toward constant gate voltage bias performance by increasing the set current toward the I DD it reaches under RF drive in the constant gate voltage bias condition, as shown in Figure 62. The limit of increasing I DQ under the constant current operation is set by thermal limitations which can be found in the absolute maximum ratings table from the amplifier data sheet with the maximum power dissipation specification. As the I DD increase continues, the actual output P1dB does not continue to increase indefinitely and the power dissipation increases. Therefore, take the exchange between power dissipation and output P1dB performance into consideration when using constant drain current biasing.

## BIASING THE ADPA7006CHIP WITH THE HMC980LP4E

<!-- image -->

Figure 59. I DD vs. Input Power (P IN ), V DD = 5 V, Frequency = 32 GHz, Constant Drain Current Bias vs. Constant Gate Voltage Bias

<!-- image -->

Figure 60. PAE vs. P IN , V DD = 5 V, Frequency = 32 GHz Constant Drain Current Bias vs. Constant Gate Voltage Bias

Figure 61. P OUT vs. P IN , V DD = 5 V, Frequency = 32 GHz Constant Drain Current Bias vs. Constant Gate Voltage Bias

<!-- image -->

Figure 62. Output P1dB vs. Frequency, V DD = 5 V, Constant Drain Current Bias vs. Constant Gate Voltage Bias

<!-- image -->

## TYPICAL APPLICATION CIRCUIT

Figure 63. Typical Application Circuit

<!-- image -->

## ASSEMBLY DIAGRAMS

## PRIMARY ASSEMBLY DIAGRAM

Figure 64. Primary Assembly Diagram

<!-- image -->

## ALTERNATE ASSEMBLY DIAGRAM

Figure 65. Alternate Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

Figure 66. 14-Pad Bare Die [CHIP] (C-14-7) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| ADPA7006CHIP  | -55°C to +85°C      | CHIPS OR DIE          | C-14-7           |
| ADPA7006C-KIT | -55°C to +85°C      | CHIPS OR DIE          | C-14-7           |

<!-- image -->

Updated: February 16, 2023