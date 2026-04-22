<!-- lastmod 2023-06-26 -->
<!-- image -->

## ADPA7005CHIP

## GaAs, pHEMT, MMIC, 1 W Power Amplifier, 20 GHz to 44 GHz

## FEATURES

- Output P1dB: 30.5 dBm typical at 22 GHz to 34 GHz
- PSAT : 32 dBm typical at 22 GHz to 34 GHz
- Gain: 17 dB typical at 22 GHz to 34 GHz
- Output IP3: 41 dBm typical at 22 GHz to 34 GHz
- Supply voltage: 5 V at 1200 mA
- 50 Ω matched input/output
- Die size: 3.75 mm × 3.47 mm × 0.1 mm

## APPLICATIONS

- Military and space
- Test instrumentation

## GENERAL DESCRIPTION

The ADPA7005CHIP is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), distributed power amplifier that operates from 20 GHz to 44 GHz. The amplifier provides 17 dB of small signal gain, 30.5 dBm output power for 1 dB compression (P1dB), and a typical output third-order intercept (IP3) of 41 dBm. The

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

ADPA7005CHIP requires 1200 mA from a 5 V supply on the supply voltage (V DD ) and features inputs and outputs that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the chip connected via two 0.025 mm wire bonds that are at least 0.31 mm long.

## Data Sheet

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                                                                              | Applications Information...................................... 15                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                                                                                                                               | Mounting and Bonding Techniques for                                                                                                 |
| Functional Block Diagram......................................1                                                                                                                                                                                                         | Millimeterwave GaAs MMICs ........................ 15                                                                               |
| General Description...............................................1                                                                                                                                                                                                     | Biasing ADPA7005CHIP with the                                                                                                       |
| Specifications........................................................ 3                                                                                                                                                                                                | HMC980LP4E....................................................17                                                                    |
| 20 GHz to 22 GHz Frequency Range................ 3                                                                                                                                                                                                                      | Application Circuit Setup..................................17                                                                       |
| 22 GHz to 34 GHz Frequency Range................ 3                                                                                                                                                                                                                      | Limiting V GATE for ADPA7005CHIP V GGx                                                                                              |
| 34 GHz to 44 GHz Frequency Range ............... 4                                                                                                                                                                                                                      | Absolute Maximum Rating Requirement........17                                                                                       |
| Absolute Maximum Ratings...................................5                                                                                                                                                                                                            | HMC980LP4E Bias Sequence.........................18                                                                                 |
| Thermal Resistance........................................... 5                                                                                                                                                                                                         | Constant Drain Current Biasing vs.                                                                                                  |
| ESD Caution.......................................................5                                                                                                                                                                                                     | Constant Gate Voltage Biasing...................... 19                                                                              |
| Pin Configuration and Function Descriptions........ 6 Interface Schematics .........................................6                                                                                                                                                   | Typical Application Circuit....................................20 Assembly Diagram.............................................. 21 |
| Typical Performance Characteristics.....................7                                                                                                                                                                                                               | Outline Dimensions............................................. 22                                                                  |
| Constant I DD Operation.................................... 13                                                                                                                                                                                                          | Ordering Guide.................................................22                                                                   |
| Theory of Operation.............................................14                                                                                                                                                                                                      |                                                                                                                                     |
| REVISION HISTORY                                                                                                                                                                                                                                                        |                                                                                                                                     |
| 6/2023-Rev. 0 to Rev. A Changes to Features                                                                                                                                                                                                                             | Section.......................................................................................................................... 1 |
| Change to General Description                                                                                                                                                                                                                                           | Section...........................................................................................................1                 |
| Added 20 GHz to 22 GHz Frequency Range Section and Table 1; Renumbered                                                                                                                                                                                                  | Sequentially.......................3                                                                                                |
| Changed 20 GHz to 34 GHz Frequency Range Section Changes to Frequency Range Parameter, Gain Flatness Parameter, Gain Variation Over Temperature Parameter, and Output Power for 1 dB Compression Parameter, Table 2.................................................... | to 22 GHz to 34 GHz Frequency Range Section.... 3 3                                                                                 |
| Changes to Table 4..........................................................................................................................................5                                                                                                           |                                                                                                                                     |
| Changes to Thermal Resistance Section and Table                                                                                                                                                                                                                         | 6.....................................................................................5                                             |
| Changes to Figure 45....................................................................................................................................                                                                                                                | 12                                                                                                                                  |

2/2019-Revision 0: Initial Version

## SPECIFICATIONS

## 20 GHZ TO 22 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, and quiescent supply current (I DQ ) = 1200 mA for nominal operation, unless otherwise noted.

Table 1.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                   |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 20    |       | 22    | GHz    |                                                                                            |
| GAIN                              |          |       | 16.5  |       | dB     |                                                                                            |
| Gain Flatness                     |          |       | ±0.7  |       | dB     |                                                                                            |
| Gain Variation Over Temperature   |          |       | 0.012 |       | dB/°C  |                                                                                            |
| NOISE FIGURE                      |          |       | 9     |       | dB     |                                                                                            |
| RETURN LOSS                       |          |       |       |       |        |                                                                                            |
| Input                             |          |       | 21    |       | dB     |                                                                                            |
| Output                            |          |       | 24    |       | dB     |                                                                                            |
| OUTPUT                            |          |       |       |       |        |                                                                                            |
| Output Power for 1 dB Compression | P1dB     |       | 28.5  |       | dBm    |                                                                                            |
| Saturated Output Power            | P SAT    |       | 30    |       | dBm    |                                                                                            |
| Output Third-Order Intercept      | IP3      |       | 38.5  |       | dBm    | Measurement taken at output power (P OUT ) per tone = 14 dBm                               |
| SUPPLY                            |          |       |       |       |        |                                                                                            |
| Current                           | I DQ     |       | 1200  |       | mA     | Adjust the gate bias voltage (V GG1 ) between -1.5 V up to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                                            |

## 22 GHZ TO 34 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, and quiescent supply current (I DQ ) = 1200 mA for nominal operation, unless otherwise noted.

Table 2.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                   |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 22    |       | 34    | GHz    |                                                                                            |
| GAIN                              |          | 15    | 17    |       | dB     |                                                                                            |
| Gain Flatness                     |          |       | ±0.6  |       | dB     |                                                                                            |
| Gain Variation Over Temperature   |          |       | 0.023 |       | dB/°C  |                                                                                            |
| NOISE FIGURE                      |          |       | 7     |       | dB     |                                                                                            |
| RETURN LOSS                       |          |       |       |       |        |                                                                                            |
| Input                             |          |       | 18    |       | dB     |                                                                                            |
| Output                            |          |       | 20    |       | dB     |                                                                                            |
| OUTPUT                            |          |       |       |       |        |                                                                                            |
| Output Power for 1 dB Compression | P1dB     | 28    | 30.5  |       | dBm    |                                                                                            |
| Saturated Output Power            | P SAT    |       | 32    |       | dBm    |                                                                                            |
| Output Third-Order Intercept      | IP3      |       | 41    |       | dBm    | Measurement taken at output power (P OUT ) per tone = 14 dBm                               |
| SUPPLY                            |          |       |       |       |        |                                                                                            |
| Current                           | I DQ     |       | 1200  |       | mA     | Adjust the gate bias voltage (V GG1 ) between -1.5 V up to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                                            |

## SPECIFICATIONS

## 34 GHZ TO 44 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, and I DQ = 1200 mA for nominal operation, unless otherwise noted.

Table 3.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                          |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 34    |       | 44    | GHz    |                                                                   |
| GAIN                              |          | 11.5  | 14.5  |       | dB     |                                                                   |
| Gain Flatness                     |          |       | ±0.7  |       | dB     |                                                                   |
| Gain Variation Over Temperature   |          |       | 0.024 |       | dB/°C  |                                                                   |
| NOISE FIGURE                      |          |       | 6     |       | dB     |                                                                   |
| RETURN LOSS                       |          |       |       |       |        |                                                                   |
| Input                             |          |       | 15    |       | dB     |                                                                   |
| Output                            |          |       | 17    |       | dB     |                                                                   |
| OUTPUT                            |          |       |       |       |        |                                                                   |
| Output Power for 1 dB Compression | P1dB     | 27    | 30    |       | dBm    |                                                                   |
| Saturated Output Power            | P SAT    |       | 31    |       | dBm    |                                                                   |
| Output Third-Order Intercept      | IP3      |       | 40.5  |       | dBm    | Measurement taken at P OUT per tone = 14 dBm                      |
| SUPPLY                            |          |       |       |       |        |                                                                   |
| Current                           | I DQ     |       | 1200  |       | mA     | Adjust V GG1 between -1.5 V up to 0 V to achieve the desired I DQ |
| Voltage                           | V DD     | 4     | 5     |       | V      |                                                                   |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                                         |                         |
|----------------------------------------------------------------------------------|-------------------------|
| Parameter                                                                        | Rating                  |
| Drain Bias Voltage (V DDx )                                                      | 6.0 V                   |
| V GG1                                                                            | -1.5 to 0 V             |
| Radio Frequency Input Power (RFIN)                                               | 27 dBm                  |
| Continuous Power Dissipation (P DISS ), T = 85°C (Derate 149.2 mW/°C Above 85°C) | 13.4W                   |
| Storage Temperature Range                                                        | -65°C to +150°C         |
| Operating Temperature Range                                                      | -55°C to +85°C          |
| Electrostatic Discharge (ESD) Sensitivity                                        |                         |
| Human Body Model (HBM)                                                           | Class 1A (passed 250 V) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC. θ JC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-12-3         |    6.7 | °C/W   |

## Table 6. Reliability Information

| Parameter                                                          | Temperature (°C)   |
|--------------------------------------------------------------------|--------------------|
| Maximum Channel Temperature                                        | 175°C              |
| Nominal Channel Temperature (T = 85°C, V DD = 5 V, I DQ = 1200 mA) | 125.2°C            |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 7. Pin Function Descriptions

| Pin No.              | Mnemonic                                           | Description                                                                                                                                                                                                                                                                                                       |
|----------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                    | RFIN                                               | RF Signal Input. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                      |
| 2, 12                | V GG1 , V GG2                                      | Amplifier Gate Control. External bypass capacitors of 4.7 μF, 0.01 μF, and 100 pF are required. ESD protection diodes are included and turn on below -1.5 V.                                                                                                                                                      |
| 3, 4, 5, 9, 10, 11 6 | V DD5 , V DD3 , V DD1 , V DD2 , V DD4 , V DD6 VREF | Drain Bias for the amplifier. External bypass capacitors of 4.7 μF, 0.01 μF, and 100 pF are required. Reference Diode. Use this pin in combination with VDET. The voltage provides temperature compensation to the VDET RF output power measurements.                                                             |
| 7                    | RFOUT                                              | RF Signal Output. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                     |
| 8                    | VDET                                               | Detector Diode Used for Measuring the RF Output Power. Detection via this pin requires the application of a dc bias voltage through an external series resistor. Used in combination with VREF, the difference voltage, VREF - VDET, is a temperature compensated dc voltage proportional to the RF output power. |
| Die Bottom           | GND                                                | Ground. The pads and die bottom must be connected to RF and dc ground.                                                                                                                                                                                                                                            |

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

Figure 7. V GG1 , V GG2 Interface Schematic

Figure 8. RFOUT Interface Schematic

<!-- image -->

Figure 9. V DD1 to V DD6 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Gain and Return Loss vs. Frequency, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 11. Gain vs. Frequency for Various V DD , I DQ = 1200 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

Figure 14. Gain vs. Frequency for Various I DQ , V DD = 5 V

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various V DD , I DQ = 1200 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various I DQ , V DD = 5 V

<!-- image -->

Figure 17. Output Return Loss vs. Frequency for Various V DD , I DQ = 1200 mA

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperature, V DD = 5 V, I DQ = 1200 mA

Figure 20. Output Return Loss vs. Frequency for Various I DQ , V DD = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. Output P1dB vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 23. P1dB vs. Frequency for Various I DQ , V DD = 5 V

<!-- image -->

Figure 24. P SAT vs. Frequency for Various V DD , I DQ = 1200 mA

<!-- image -->

Figure 25. P1dB vs. Frequency for Various V DD , I DQ = 1200 mA

Figure 26. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 27. P SAT vs. Frequency for Various I DQ , V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 28. Power Added Efficiency (PAE) at P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1200 mA, PAE Measured at P SAT

<!-- image -->

Figure 29. PAE at P SAT vs. Frequency for Various I DQ , V DD = 5 V, I DQ = 1200 mA, PAE Measured at P SAT

<!-- image -->

Figure 30. P OUT , Gain, PAE, and Power PAE, Drain Current with RF Applied (I DD ) vs. Input Power, 26 GHz, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 31. PAE at P SAT vs. Frequency for Various V DD , I DQ = 1200 mA, PAE Measured at P SAT

Figure 32. P OUT , Gain, PAE, and I DD vs. Input Power, 22 GHz, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 33. P OUT , Gain, PAE, and I DD vs. Input Power, 30 GHz, V DD = 5 V, I DD = 1200 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 34. P OUT , Gain, PAE, and I DD vs. Input Power, 34 GHz, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 35. P OUT , Gain, PAE, and I DD vs. Input Power, 42 GHz, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 36. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

Figure 37. P OUT , Gain, PAE, and I DD vs. Input Power, 38 GHz, V DD = 5 V, I DD = 1200 mA

Figure 38. Power Dissipation vs. Input Power at T = 85°C, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 39. Output IP3 vs. Frequency for Various V DD , P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1200 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 40. Output IP3 vs. Frequency for Various I DQ , P OUT per Tone = 14 dBm, VDD  = 5 V

<!-- image -->

Figure 41. Quiescent Drain Supply Current vs. Gate Supply Voltage

<!-- image -->

Figure 42. Supply Current I DD vs. Input Power at Various Frequencies, V DD = 5 V, I DD = 1200 mA

<!-- image -->

Figure 43. IM3 Distortion Relative to Carrier vs. P OUT per Tone, V DD = 5 V, I DQ = 1200 mA

Figure 44. Third-Order Intermodulation (IM3) Distortion Relative to Carrier vs. POUT per Tone, V DD = 4 V, I DQ = 1200 mA

<!-- image -->

Figure 45. VREF - VDET vs. Output Power for Various Temperatures at 32 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## CONSTANT IDD OPERATION

Biased with HMC980LP4E active bias controller (see Figure 55), T A = 25°C, V DD = 5 V, and I DD = 1600 mA for nominal operation, unless otherwise noted.

<!-- image -->

Figure 46. P1dB vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 47. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

Figure 48. P1dB vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 49. P SAT vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7005CHIP, a medium power amplifier, is shown in Figure 50. The ADPA7005CHIP uses two cascaded, three stage amplifiers operating in quadrature between six 90° hybrids.

The input signal is divided evenly into two, and then each signal is divided into two again. Each of these new paths is amplified through three independent gain stages. The amplified signals are then combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 15 dB and a P SAT value of 32 dBm.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased,

Figure 50. ADPA7005CHIP Architecture

<!-- image -->

the diode rectifies the RF power and makes the RF power available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output (see Figure 50).

The 90° hybrids ensure that the input and output return losses are greater than 15 dB. See the application circuits shown in Figure 63 and Figure 64 for further details on biasing the various blocks.

## APPLICATIONS INFORMATION

The ADPA7005CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all V GGx and V DDx pins (see Figure 51). V GG1 is the gate bias pad for the top cascaded amplifiers. V GG2 is the gate bias pad for the bottom cascaded amplifiers. VDD1 , V DD3 , and V DD5 are drain bias pads for the top cascaded amplifiers. V DD2 , V DD4 , and V DD6 are drain bias pads for the bottom cascaded amplifiers.

All measurements for this device were taken using the typical application circuit (see Figure 63) and were configured as shown in the assembly diagram (Figure 64).

The following is the recommended bias sequence during power-up:

1. Connect GND to RF and dc ground.
2. Set all gate bias voltages, V GG1 and V GG2 , to -2 V.
4. Increase the gate bias voltage to achieve the quiescent supply current and set I DQ, = 1200 mA.
3. Set all drain bias voltages, V DDxx, to 5 V.
5. Apply the RF signal.

The following is the recommended bias sequence during powerdown:

1. Turn off the RF signal.
2. Decrease the gate bias voltages, V GG1 and V GG2 , to -2 V to achieve an I DQ = 0 mA (approximately).
3. Decrease all drain bias voltages to 0 V.
4. Increase the V GG1 and V GG2 gate bias voltage to 0 V.

Figure 51. Simplified Block Diagram

<!-- image -->

Simplified bias pad connections to the dedicated gain stages and dependence and independence among pads are shown in Figure 51.

## Table 8. Power Selection Table

|   I DQ (mA) 1, 2 |   Gain (dB) |   P1dB (dBm) |   OIP3 (dBm) |   P DISS (W) |   V GG (V) |
|------------------|-------------|--------------|--------------|--------------|------------|
|             1200 |        17   |         32   |         42   |            6 |      -0.59 |
|             1400 |        17.4 |         32.3 |         40.2 |            7 |      -0.53 |
|             1600 |        17.7 |         32.5 |         38.4 |            8 |      -0.46 |

The V DD = 5 V and I DD = 1200 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the ADPA7005CHIP at different bias conditions may provide performance that differs from what is shown in Figure 63 and Figure 64. Biasing the ADPA7005CHIP for higher drain current typically results in higher P1dB, output IP3, and gain at the expense of increased power consumption (see Table 8).

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Microstrip, 50 Ω transmission lines on 0.127 mm thick alumina thin film substrates are recommended for bringing the RF to and from the chip. Raise the die 0.075 mm to ensure that the surface of the die is coplanar with the surface of the substrate.

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm. To ensure wideband matching, a 15 fF capacitive stub is recommended on the PCB before the ribbon bond.

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

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after the chip is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 3 mil × 0. 5 mil gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded dc bonds of 0.025 mm diameter, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm.

Alternatively, short RF bonds that are ≤3 mm and made with two 1 mm wires can be used.

## BIASING ADPA7005CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller that is designed to meet the bias requirements for enhancement mode and depletion mode amplifiers such as the ADPA7005CHIP. The controller provides constant drain current biasing over temperature and part to part variation, and properly sequences gate and drain voltages to ensure the safe operation of the amplifier. The HMC980LP4E also offers self protection in the event of a short circuit, as well as an internal charge pump that generates the negative voltage needed on the gate of the ADPA7005CHIP, and the option to use an external negative voltage source. The HMC980LP4E is also available in die form as the HMC980-DIE.

Figure 54. Functional Diagram of HMC980LP4E

<!-- image -->

Figure 55. Application Circuit using HMC980LP4E with ADPA7005CHIP

<!-- image -->

## APPLICATION CIRCUIT SETUP

Figure 55 displays the schematic of an application circuit using the HMC980LP4E to control the ADPA7005CHIP. When using an external negative supply for VNEG, refer to the schematic in Figure 56.

In the application circuit shown in Figure 55, the ADPA7005CHIP drain voltage and drain current are set by the following equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where I DRAIN is constant drain current.

## LIMITING VGATE FOR ADPA7005CHIP VGGX ABSOLUTE MAXIMUM RATING REQUIREMENT

When using the HMC980LP4E to control the ADPA7005CHIP, the minimum voltages for VNEG and VGATE must be -1.5 V to keep these voltages within the absolute maximum rating limits for the VGGx pads of the ADPA7005CHIP. To set the minimum voltages, set R15 and R16 to the values shown in Figure 55 and Figure 56. Please refer to the AN-1363 for more information and calculations for R15 and R16.

## BIASING ADPA7005CHIP WITH THE HMC980LP4E

Figure 56. Application Circuit using HMC980LP4E with ADPA7005CHIP with External Negative Voltage Source

<!-- image -->

## HMC980LP4E BIAS SEQUENCE

The dc supply sequencing in the Power-Up Sequence section and the Power-Down Sequence section is required to prevent damage to the HMC980LP4E when using it to control the ADPA7005CHIP.

## Power-Up Sequence

The power-up sequence is as follows:

1. VDIG = 3.3 V
2. S0 = 3.3 V
3. VDD = 5.68 V
4. VNEG = -1.5 V (unnecessary if using internally generated voltage)
5. EN = 3.3 V (transition from 0 V to 3.3 V turns on VGATE and VDRAIN)

## Power-Down Sequence

The power-down sequence is as follows:

1. EN = 0 V (transition from 3.3 V to 0 V turns off VDRAIN and VGATE)
2. VNEG = 0 V (unnecessary if using internally generated voltage)
3. VDD = 0 V
4. S0 = 0 V
5. VDIG = 0 V

After the HMC980LP4E bias control circuit is set up, toggle the bias to the ADPA7005CHIP on or off by applying 3.3 V or 0 V, respectively, to the EN pad. At EN = 3.3 V, VGATE drops to -1.5 V and VDRAIN turns on at 5 V. VGATE then rises until I DRAIN = 800 mA, and the closed control loop regulates I DRAIN at 1600 mA. When EN = 0 V, VGATE is set to -1.5 V, and VDRAIN is set to 0 V (see Figure 57 and Figure 58).

Figure 57. Turn On HMC980LP4E Outputs to ADPA7005CHIP

<!-- image -->

Figure 58. Turn Off HMC980LP4E Outputs to ADPA7005CHIP

<!-- image -->

## BIASING ADPA7005CHIP WITH THE HMC980LP4E

## CONSTANT DRAIN CURRENT BIASING VS. CONSTANT GATE VOLTAGE BIASING

The HMC980LP4E uses a closed-loop feedback to continuously adjust VGATE to maintain a constant gate current bias over dc supply variation, temperature, and part to part variation. In addition, constant drain current bias is the optimum method for reducing time in calibration procedures and for maintaining consistent performance over time. By comparing with a constant gate voltage bias where the current is driven to increase when RF power is applied, a slightly lower output P1dB is seen with a constant drain current bias. This output P1db is displayed in Figure 62, where the RF performance is slightly lower than constant gate voltage bias operation due to a lower drain current at the high input powers as the device reaches 1 dB compression.

The output P1dB performance for constant drain current bias can be increased towards constant gate voltage bias performance by increasing the set current towards the I DD it would reach under RF drive in the constant gate voltage bias condition, as shown in Figure 62. The limit of increasing I DQ under the constant current operation is set by the thermal limitations that can be found in the absolute maximum ratings table (see Table 4) from the amplifier data sheet with the maximum power dissipation specification. As the I DD increase continues, the actual output P1dB does not continue to increase indefinitely, and the power dissipation increases. Thus, take the exchange between the power dissipation and output P1dB performance into consideration when using constant drain current biasing.

<!-- image -->

Figure 59. I DD vs. RF Input Power (P IN ), V DD = 5 V, Frequency = 32 GHz for Constant Drain Current Bias and Constant Gate Voltage Bias

<!-- image -->

Figure 60. P OUT vs. P IN , V DD = 5 V, Frequency = 32 GHz, Constant Drain Current Bias and Constant Gate Voltage Bias

Figure 61. PAE vs. P IN , V DD = 5 V, Frequency = 32 GHz, Constant Drain Current Bias and Constant Gate Voltage Bias

<!-- image -->

Figure 62. Output P1dB vs. P IN , V DD = 5 V, Frequency = 32 GHz, Constant Drain Current Bias and Constant Gate Voltage Bias

<!-- image -->

## TYPICAL APPLICATION CIRCUIT

Figure 63. Typical Application Circuit Using the HMC980LP4E with the ADPA7005CHIP

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 64. Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 65. 12-Pad Bare Die [CHIP] (C-12-3) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| ADPA7005CHIP  | -55°C to +85°C      | CHIPS OR DIE          | C-12-3           |
| ADPA7005C-KIT | -55°C to +85°C      | CHIPS OR DIE          | C-12-3           |

<!-- image -->

06-23-2023-B

Updated: June 20, 2023