<!-- lastmod 2022-03-02 -->
<!-- image -->

## FEATURES

- Low noise figure: 1.5 dB typical
- Single positive supply (self biased)
- High gain: ≤15 dB typical
- High OIP3: 32 dBm typical
- VDD : 5 V at I DQ = 60 mA
- 50 Ω matched input and output
- Die size: 0.945 mm × 1.545 mm × 0.102 mm

## APPLICATIONS

- Test instrumentation
- Military and space
- Telecommunications infrastructure
- Software defined radios
- Electronic warfare
- Radar applications

## [HMC8412CHIPS](http://www.analog.com/HMC8412CHIPS)

## Low Noise Amplifier, 0.4 GHz to 10 GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The HMC8412CHIPS is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), low noise amplifier that operates from 0.4 GHz to 10 GHz. The HMC8412CHIPS provides ≤15 dB of typical gain, ≤19 dBm typical output power at 1 dB gain compression (OP1dB), and a typical output third-order intercept (OIP3) of 32 dBm.

The HMC8412CHIPS requires 60 mA from a 5 V supply on V DD . The HMC8412CHIPS also features inputs and outputs (I/Os) that are internally matched to 50 Ω and facilitates integration into multichip modules (MCMs). In addition, the bias choke to the HMC8412CHIPS and the dc blocking capacitors on the RF IN and RFOUT  pads are integrated, creating a small form factor solution.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 0.4 GHz to 8 GHz Frequency Range................. 3 8 GHz to 10 GHz Frequency Range.................. 3 Absolute Maximum Ratings...................................4 Thermal Resistance........................................... 4 Electrostatic Discharge (ESD) Ratings...............4 ESD Caution.......................................................4   | Typical Performance Characteristics.....................6 Small Signal Response......................................6 Large Signal Response....................................12 Theory of Operation.............................................18 Applications Information...................................... 19 Typical Application Circuit................................ 19 Recommended Bias Sequencing.....................19 Assembly Diagram...........................................19 Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.........................19 Handling Precautions.......................................20   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin Configuration and Function Descriptions........ 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Outline Dimensions............................................. 21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Interface Schematics..........................................5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ordering Guide.................................................21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2/2022-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 2/2022-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Changes to Table 3..........................................................................................................................................4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Changes to Table 3..........................................................................................................................................4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Changes to Figure 74.................................................................................................................................... 19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Changes to Figure 74.................................................................................................................................... 19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Changes to Figure 75.................................................................................................................................... 19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Changes to Figure 75.................................................................................................................................... 19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## 9/2020-Revision 0: Initial Version

## SPECIFICATIONS

## 0.4 GHZ TO 8 GHZ FREQUENCY RANGE

VDD  = 5 V, supply current (I DQ ) = 60 mA, and T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                            |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                    |
|--------------------------------------|-------|-------|-------|--------|-------------------------------------------------------------|
| FREQUENCY RANGE                      |   0.4 |       |     8 | GHz    |                                                             |
| GAIN (S21)                           |    13 |    15 |       | dB     |                                                             |
| Gain Variation over Temperature      |       |  0.01 |       | dB/°C  |                                                             |
| NOISE FIGURE                         |       |   1.5 |       | dB     |                                                             |
| RETURN LOSS                          |       |       |       |        |                                                             |
| Input (S11)                          |       |    17 |       | dB     |                                                             |
| Output (S22)                         |       |    14 |       | dB     |                                                             |
| OUTPUT                               |       |       |       |        |                                                             |
| OP1dB                                |    17 |    19 |       | dBm    |                                                             |
| Saturated Output Power (P SAT )      |       |    20 |       | dBm    |                                                             |
| OIP3                                 |       |    32 |       | dBm    | Measurement taken at output power (P OUT ) per tone = 0 dBm |
| Output Second-Order Intercept (OIP2) |       |    38 |       | dBm    | Measurement taken at P OUT per tone = 0 dBm                 |
| POWER ADDED EFFICIENCY (PAE)         |       |       |       | %      | SAT                                                         |
|                                      |       |    29 |       |        | Measured at P                                               |
| SUPPLY                               |       |       |       |        |                                                             |
| I DQ                                 |       |    60 |       | mA     |                                                             |
| V DD                                 |     3 |     5 |     6 | V      |                                                             |

## 8 GHZ TO 10 GHZ FREQUENCY RANGE

VDD  = 5 V, I DQ = 60 mA, and T A = 25°C, unless otherwise noted.

Table 2.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                 |     8 |       |    10 | GHz    |                                             |
| GAIN (S21)                      |    13 |  14.5 |       | dB     |                                             |
| Gain Variation over Temperature |       | 0.018 |       | dB/°C  |                                             |
| NOISE FIGURE                    |       |   1.7 |       | dB     |                                             |
| RETURN LOSS                     |       |       |       |        |                                             |
| Input (S11)                     |       |    20 |       | dB     |                                             |
| Output (S22)                    |       |    15 |       | dB     |                                             |
| OUTPUT                          |       |       |       |        |                                             |
| OP1dB                           |  11.5 |  14.5 |       | dBm    |                                             |
| P SAT                           |       |    19 |       | dBm    |                                             |
| OIP3                            |       |    32 |       | dBm    | Measurement taken at P OUT per tone = 0 dBm |
| OIP2                            |       |    43 |       | dBm    | Measurement taken at P OUT per tone = 0 dBm |
| PAE                             |       |    15 |       | %      | Measured at P SAT                           |
| SUPPLY                          |       |       |       |        |                                             |
| I DQ                            |       |    60 |       | mA     |                                             |
| V DD                            |     3 |     5 |     6 | V      |                                             |

## ABSOLUTE MAXIMUM RATINGS

| Table 3.                                                                          |                 |
|-----------------------------------------------------------------------------------|-----------------|
| Parameter                                                                         | Rating          |
| V DD                                                                              | 7 V             |
| RF Input Power                                                                    | 25 dBm          |
| Continuous Power Dissipation (P DISS ), T A = 85°C (Derate 12.2 mW/°C Above 85°C) | 1.1W            |
| Temperature                                                                       |                 |
| Storage Range                                                                     | -65°C to +150°C |
| Operating Range                                                                   | -55°C to +85°C  |
| Maximum Channel Temperature                                                       | 175°C           |
| Nominal Channel Temperature (T A = 85°C, V DD = 5 V, I DQ = 60 mA)                | 113.4°C         |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to the printed circuit board (PCB) thermal design is required.

θ JC is the junction-to-case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 4. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-4-5          |   94.6 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## ESD Ratings for HMC8412CHIPS

## Table 5. HMC8412CHIPS, 4-Pad Die

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 6. Pad Function Descriptions

|   Pad No. | Mnemonic   | Description                                                                                               |
|-----------|------------|-----------------------------------------------------------------------------------------------------------|
|         1 | RF IN      | RF Input. The RF IN pad is ac-coupled and matched to 50 Ω. See Figure 4 for the interface schematic.      |
|           | GND        | Ground. The GND pads must be connected to the RF and dc ground. See Figure 6 for the interface schematic. |
|         2 | R BIAS     | Bias Resistor. See Figure 3 for the interface schematic.                                                  |
|         3 | V DD       | Drain Bias Voltage for the Amplifier. See Figure 5 for the interface schematic.                           |
|         4 | RF OUT     | RF Output. The RF OUT pad is ac-coupled and matched to 50 Ω. See Figure 5 for the interface schematic.    |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. R BIAS Interface Schematic

<!-- image -->

Figure 4. RF IN Interface Schematic

<!-- image -->

Figure 5. RF OUT and V DD Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## SMALL SIGNAL RESPONSE

<!-- image -->

Figure 7. Gain and Return Loss vs. Frequency, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 8. Gain vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, VDD  = 5 V, I DQ = 60 mA

<!-- image -->

Figure 9. Gain vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 10. Gain and Return Loss vs. Frequency, V DD = 5 V, I DQ = 60 mA

Figure 11. Gain vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 12. Gain vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. Gain vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 14. Input Return Loss vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 16. Gain vs. Frequency for Various Supply Currents, V DD = 5 V

Figure 17. Input Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 18. Input Return Loss vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. Input Return Loss vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 20. Output Return Loss vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 21. Output Return Loss vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 22. Input Return Loss vs. Frequency for Various Supply Currents, V DD = 5 V

Figure 23. Output Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 24. Output Return Loss vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. Output Return Loss vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 26. Noise Figure vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 27. Noise Figure vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 28. Output Return Loss vs. Frequency for Various Supply Currents, VDD  = 5 V

Figure 29. Noise Figure vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 30. Noise Figure vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. Noise Figure vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 32. Reverse Isolation vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 33. Reverse Isolation vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 34. Noise Figure vs. Frequency for Various Supply Currents, V DD = 5 V

Figure 35. Reverse Isolation vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 36. Reverse Isolation vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 37. Reverse Isolation vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 38. Reverse Isolation vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## LARGE SIGNAL RESPONSE

<!-- image -->

Figure 39. OP1dB vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 40. OP1dB vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 41. OP1dB vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 42. OP1dB vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 60 mA

Figure 43. OP1dB vs. Frequency at Various Supply Voltages, I DQ = 60 mA

<!-- image -->

Figure 44. OP1dB vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 46. P SAT vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

Figure 47. P SAT vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

Figure 48. PAE vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA

Figure 49. PAE vs. Frequency at Various Supply Voltages, I DQ = 60 mA

<!-- image -->

Figure 50. PAE vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 51. OIP3 vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, VDD  = 5 V, I DQ = 60 mA, P OUT = 0 dBm per Tone

<!-- image -->

Figure 52. OIP3 vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 53. OIP3 vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 54. OIP3 vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA, P OUT = 0 dBm per Tone

Figure 55. OIP3 vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

Figure 56. OIP3 vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 57. OIP2 vs. Frequency for Various Temperatures, 200 MHz to 1 GHz, VDD  = 5 V, I DQ = 60 mA, P OUT = 0 dBm per Tone

<!-- image -->

Figure 58. OIP2 vs. Frequency for Various Supply Voltages, 200 MHz to 1 GHz, I DQ = 60 mA

<!-- image -->

Figure 59. OIP2 vs. Frequency for Various Supply Currents, 200 MHz to 1 GHz, V DD = 5 V

<!-- image -->

Figure 60. OIP2 vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 60 mA, P OUT = 0 dBm per Tone

Figure 61. OIP2 vs. Frequency for Various Supply Voltages, I DQ = 60 mA

<!-- image -->

Figure 62. OIP2 vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 63. P OUT , Gain, PAE, and I DQ vs. Input Power, Power Compression at 1 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 64. P OUT , Gain, PAE, and I DQ vs. Input Power, Power Compression at 5 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 65. P OUT , Gain, PAE, and I DQ vs. Input Power, Power Compression at 10 GHz, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 66. Gain, OP1dB, P SAT , and I DQ vs. Supply Voltage, Power Compression at 1 GHz, R BIAS = 1.43 kΩ

Figure 67. Gain, OP1dB, P SAT , and I DQ vs. Supply Voltage, Power Compression at 5 GHz, R BIAS = 1.43 kΩ

<!-- image -->

Figure 68. Gain, OP1dB, P SAT , and I DQ vs. Supply Voltage, Power Compression at 10 GHz, R BIAS = 1.43 kΩ

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 69. P DISS vs. Input Power at T A = 85°C, V DD = 5 V, I DQ = 60 mA

<!-- image -->

Figure 70. I DQ vs. R BIAS Resistor Value, V DD = 5 V

Figure 71. Drain Current (I DD ) vs. Input Power for Various Frequencies, VDD  = 5 V, R BIAS = 1.43 kΩ

<!-- image -->

Figure 72. I DQ vs. V DD , R BIAS = 1.43 kΩ

<!-- image -->

## THEORY OF OPERATION

The HMC8412CHIPS is a GaAs, MMIC, pHEMT, low noise wideband amplifier with integrated ac coupling capacitors and a bias inductor. A simplified block diagram is shown in Figure 73.

The HMC8412CHIPS has ac-coupled, single-ended input and output ports with impedances that are nominally equal to 50 Ω over the 0.4 GHz to 10 GHz frequency range. No external matching components are required. To adjust the drain bias current, connect an external resistor between the R BIAS and V DD pads.

Figure 73. Simplified Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

The basic connections for operating the HMC8412CHIPS over the specified frequency range are shown in Figure 74. No external biasing inductor is required, allowing the 5 V supply to be connected to the V DD pad. The 4.7 μF, 0.01 μF, and 100 pF power supply decoupling capacitors are recommended. The power supply decoupling capacitors shown in Figure 74 represent the configuration used to characterize and qualify the HMC8412CHIPS. It is possible to reduce the number of capacitors, but this reduction varies from system to system. It is recommended to first remove the largest capacitors that are farthest from the device when reducing the number of capacitors.

To set I DQ , connect a resistor, R1, between the R BIAS and V DD pads (see Figure 74). A default value of 1.43 kΩ is recommended, which results in a nominal I DQ of 60 mA. Table 7 shows how the I DQ varies vs. the bias resistor value. The R BIAS pad also draws a current that varies with the value of R BIAS (see Table 7). Do not leave the R BIAS pad open.

## TYPICAL APPLICATION CIRCUIT

Figure 74 shows the typical application circuit of the HMC8412CHIPS.

Figure 74. Typical Application Circuit

<!-- image -->

## RECOMMENDED BIAS SEQUENCING

## During Power-Up

To power up, follow this bias sequence:

1. Set V DD to 5 V.
2. Apply the RF signal.

## During Power-Down

To power down, follow this bias sequence:

1. Turn off the RF signal.
2. Set V DD to 0 V.

Table 7. Recommended Bias Resistor Values

|   R BIAS (Ω) |   Total Current (mA) |   I DQ (mA) |   R BIAS Current (mA) |
|--------------|----------------------|-------------|-----------------------|
|          604 |                82.83 |          80 |                  2.93 |
|          802 |                75.98 |          75 |                  2.68 |
|         1000 |                70.96 |          70 |                  2.36 |
|         1210 |                66.95 |          65 |                  2.05 |
|         1430 |                62.08 |          60 |                  1.98 |
|         1800 |                57.13 |          55 |                  1.73 |
|         2500 |                51.68 |          50 |                  1.48 |
|         3010 |                43.74 |          45 |                  1.24 |
|         3500 |                41.15 |          40 |                  1.05 |
|         4990 |                35.35 |          35 |                  0.85 |
|         6650 |                30.55 |          30 |                  0.65 |
|         8450 |                27.37 |          25 |                  0.47 |
|        18000 |                20.35 |          20 |                  0.25 |

## ASSEMBLY DIAGRAM

Figure 75 shows the assembly diagram of the HMC8412CHIPS.

Figure 75. Assembly Diagram

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section).

To bring RF to and from the HMC8412CHIPS, implement 50 Ω transmission lines using a microstrip or coplanar waveguide on 0.127 mm (5 mil) thick alumina, thin film substrates (see Figure 76). When using 0.254 mm (10 mil) thick alumina, raise the die to ensure that the die and substrate surfaces are coplanar. Raise the die 0.150 mm (6 mil) to ensure that the surface of the die is coplanar with the surface of the substrate. To make the die coplanar with the surface of the substrate, attach the 0.102 mm (4 mil) thick die to a 0.150 mm (6 mil) thick, molybdenum (Mo) heat spreader (moly tab), which then attaches to the ground plane (see Figure 76 and Figure 77).

Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

## APPLICATIONS INFORMATION

Figure 76. High Frequency Input Matching

<!-- image -->

Figure 77. High Frequency Output Matching

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage to the die, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle-based or gel-based ESD protective containers, and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chip in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While applying bias, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description   | Packing Quantity   | Package Option   |
|-----------------|---------------------|-----------------------|--------------------|------------------|
| HMC8412CHIPS    | -55°C to +85°C      | CHIPS OR DIE          | Tray, 25           | C-4-5            |
| HMC8412CHIPS-SX | -55°C to +85°C      | CHIPS OR DIE          | Tray, 2            | C-4-5            |

<!-- image -->

Figure 78. 4-Pad Bare Die [CHIP] (C-4-5) Dimensions shown in millimeters

<!-- image -->

Updated: February 11, 2022