<!-- lastmod 2021-03-24 -->
<!-- image -->

## Data Sheet

## [ADPA7008CHIP](https://www.analog.com/adpa7008)

## 20 GHz to 54 GHz, GaAs, pHEMT, MMIC, 31 dBm (1 W) Power Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADPA7008CHIP is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), 31 dBm saturated output power (1 W) distributed power amplifier that operates from 20 GHz to 54 GHz. The amplifier provides a gain of 18 dB, an output power for 1 dB compression (P1dB) of 30.5 dBm, and a typical output third-order intercept (IP3) of 38 dBm at 22 GHz to 42 GHz. The ADPA7008CHIP requires 1500 mA from a 5 V supply voltage (V DD ) and features inputs and outputs that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the RFIN and RFOUT pads connected via one 0.076 mm (3 mil) ribbon bond of 0.076 mm (3 mil) minimal length.

## FEATURES

- Output P1dB: 30.5 dBm typical at 22 GHz to 42 GHz
- PSAT : 31 dBm typical at 22 GHz to 42 GHz
- Gain: 18 dB typical at 22 GHz to 42 GHz
- Input return loss: 22 dB typical at 22 GHz to 42 GHz
- Output return loss: 23 dB typical at 22 GHz to 42 GHz
- Output IP3: 38 dBm typical at 22 GHz to 42 GHz
- Supply voltage: 5 V typical at 1500 mA
- 50 Ω matched input and output
- Die size: 3.610 mm × 3.610 mm × 0.102 mm

## APPLICATIONS

- Military and space
- Test instrumentation
- Satellite communications

## Data Sheet

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 20 GHz to 22 GHz Frequency Range................ 3 22 GHz to 42 GHz Frequency Range................ 3 42 GHz to 50 GHz Frequency Range................ 4 50 GHz to 54 GHz Frequency Range................ 4 Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5 Electrostatic Discharge (ESD) Ratings...............5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6 Interface Schematics..........................................7 Typical Performance Characteristics.....................8   | Biasing ADPA7008CHIP with the HMC980LP4E....................................................19 Application Circuit Setup..................................19 Limiting VGATE for the ADPA7008CHIP V GGx Absolute Maximum Rating HMC980LP4E Bias Constant Drain Current Biasing vs. Constant Gate Voltage Biasing...................... Constant I DD Operation.................................... Assembly Diagram.............................................. Mounting and Bonding Techniques for Millimeterwave GaAs MMICs............................ Handling Precautions.......................................24 Mounting...........................................................24 Wire Bonding....................................................24 25   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Requirement...................................................19 Sequence.........................21 22 22 23 24                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Applications Information...................................... Typical Application Circuit................................                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Theory of Operation.............................................16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Outline Dimensions.............................................                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 17 17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ordering Guide.................................................25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5/2026-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Dimensions.........................................................................................................................25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Updated Outline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 3/2021-Revision 0: Initial Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## SPECIFICATIONS

## 20 GHZ TO 22 GHZ FREQUENCY RANGE

TA = 25°C, supply voltage (V DD ) = 5 V, quiescent supply current (I DQ ) = 1500 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust V GG1 from -1.5 V to 0 V to achieve I DQ = 1500 mA typical.

Table 1.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                                        |
|-----------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------------------|
| FREQUENCY RANGE                   |          |    20 |       |    22 | GHz    |                                                                 |
| GAIN                              |          |  14.5 | 17    |       | dB     |                                                                 |
| Gain Flatness                     |          |       | ±0.8  |       | dB     |                                                                 |
| Gain Variation Over Temperature   |          |       | 0.036 |       | dB/°C  |                                                                 |
| NOISE FIGURE                      |          |       | 7.5   |       | dB     |                                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                                 |
| Input                             |          |       | 21    |       | dB     |                                                                 |
| Output                            |          |       | 22    |       | dB     |                                                                 |
| OUTPUT                            |          |       |       |       |        |                                                                 |
| Output Power for 1 dB Compression | P1dB     |  26.5 | 29    |       | dBm    |                                                                 |
| Saturated Output Power            | P SAT    |       | 30.5  |       | dBm    |                                                                 |
| Output Third-Order Intercept      | IP3      |       | 37    |       | dBm    | Output power (P OUT ) per tone = 14 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                                 |
| Quiescent Current                 | I DQ     |       | 1500  |       | mA     | Adjust V GG1 to achieve I DQ = 1500 mA typical                  |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                                 |

## 22 GHZ TO 42 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, I DQ = 1500 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust V GG1 from -1.5 V to 0 V to achieve I DQ = 1500 mA typical.

Table 2.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                        |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                   |          |    22 |       |    42 | GHz    |                                                 |
| GAIN                              |          |  15.5 | 18    |       | dB     |                                                 |
| Gain Flatness                     |          |       | ±0.8  |       | dB     |                                                 |
| Gain Variation Over Temperature   |          |       | 0.022 |       | dB/°C  |                                                 |
| NOISE FIGURE                      |          |       | 6.0   |       | dB     |                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                 |
| Input                             |          |       | 22    |       | dB     |                                                 |
| Output                            |          |       | 23    |       | dB     |                                                 |
| OUTPUT                            |          |       |       |       |        |                                                 |
| Output Power for 1 dB Compression | P1dB     |    28 | 30.5  |       | dBm    |                                                 |
| Saturated Output Power            | P SAT    |       | 31    |       | dBm    |                                                 |
| Output Third-Order Intercept      | IP3      |       | 38    |       | dBm    | P OUT per tone = 14 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                 |
| Quiescent Current                 | I DQ     |       | 1500  |       | mA     | Adjust V GG1 to achieve I DQ = 1500 mA typical  |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                 |

## SPECIFICATIONS

## 42 GHZ TO 50 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, I DQ = 1500 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust V GG1 from -1.5 V to 0 V to achieve I DQ = 1500 mA typical.

Table 3.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                        |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                   |          |    42 |       |    50 | GHz    |                                                 |
| GAIN                              |          |  14.5 | 17    |       | dB     |                                                 |
| Gain Flatness                     |          |       | ±0.55 |       | dB     |                                                 |
| Gain Variation Over Temperature   |          |       | 0.019 |       | dB/°C  |                                                 |
| NOISE FIGURE                      |          |       | 6.5   |       | dB     |                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                 |
| Input                             |          |       | 20    |       | dB     |                                                 |
| Output                            |          |       | 24    |       | dB     |                                                 |
| OUTPUT                            |          |       |       |       |        |                                                 |
| Output Power for 1 dB Compression | P1dB     |    25 | 27.5  |       | dBm    |                                                 |
| Saturated Output Power            | P SAT    |       | 28    |       | dBm    |                                                 |
| Output Third-Order Intercept      | IP3      |       | 37    |       | dBm    | P OUT per tone = 14 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                 |
| Quiescent Current                 | I DQ     |       | 1500  |       | mA     | Adjust V GG1 to achieve I DQ = 1500 mA typical  |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                 |

## 50 GHZ TO 54 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, I DQ = 1500 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust V GG1 from -1.5 V to 0 V to achieve I DQ = 1500 mA typical.

Table 4.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                        |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                   |          |    50 |       |    54 | GHz    |                                                 |
| GAIN                              |          |       | 18.5  |       | dB     |                                                 |
| Gain Flatness                     |          |       | ±0.8  |       | dB     |                                                 |
| Gain Variation Over Temperature   |          |       | 0.012 |       | dB/°C  |                                                 |
| NOISE FIGURE                      |          |       | 7.0   |       | dB     |                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                 |
| Input                             |          |       | 16    |       | dB     |                                                 |
| Output                            |          |       | 17    |       | dB     |                                                 |
| OUTPUT                            |          |       |       |       |        |                                                 |
| Output Power for 1 dB Compression | P1dB     |       | 26    |       | dBm    |                                                 |
| Saturated Output Power            | P SAT    |       | 28    |       | dBm    |                                                 |
| Output Third-Order Intercept      | IP3      |       | 37    |       | dBm    | P OUT per tone = 14 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                 |
| Quiescent Current                 | I DQ     |       | 1500  |       | mA     | Adjust V GG1 to achieve I DQ = 1500 mA typical  |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                 |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                         |                 |
|----------------------------------------------------------------------------------|-----------------|
| Parameter                                                                        | Rating          |
| Drain Bias Voltage (V DDx )                                                      | 6.0 V           |
| V GGx                                                                            | -1.6 V to 0 V   |
| RF Input Power (RFIN)                                                            | 20 dBm          |
| Continuous Power Dissipation (P DISS ), T A = 85°C (Derate 170 mW/°C Above 85°C) | 15.3W           |
| Junction Temperature to Maintain 1,000,000 Hour Mean Time to Failure (MTTF)      | 175°C           |
| Nominal Junction Temperature (T J = 85°C, V DD = 5 V, I DQ = 1500 mA)            | 129°C           |
| Temperature Range                                                                |                 |
| Storage                                                                          | -65°C to +150°C |
| Operating                                                                        | -55°C to +85°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC.

θ JC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 6. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-10-12        |   5.87 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADPA7008CHIP

## Table 7. ADPA7008CHIP, 10-Pad Die

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±250                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.    | Mnemonic                      | Description                                                                                                                                                                                                                                                                                                                                                          |
|------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RFIN                          | RF Signal Input. This pad is ac-coupled and matched to 50 Ω. See Figure 6 for the interface schematic.                                                                                                                                                                                                                                                               |
| 2, 10      | V GG1 , V GG2                 | Amplifier Gate Controls. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads. Adjust V GG1 from -1.5 V to 0 V to achieve the desired quiescent current. See Figure 7 for the interface schematic.                                                                                                                                  |
| 3, 4, 8, 9 | V DD1 , V DD2 , V DD4 , V DD3 | Drain Biases for the Amplifier. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads. See Figure 9 for the interface schematic.                                                                                                                                                                                                     |
| 5          | VREF                          | Reference Diode Voltage. Use this pad for temperature compensation of the VDET RF output power measurements. Used in combination with VDET, this voltage provides temperature compensation to the VDET RF output power measurements. See Figure 4 for the interface schematic.                                                                                       |
| 6          | RFOUT                         | RF Signal Output. This pad is ac-coupled and matched to 50 Ω. See Figure 8 for the interface schematic.                                                                                                                                                                                                                                                              |
| 7          | VDET                          | Detector Diode Used for Measuring the RF Output Power. Detection via this pad requires the application of a dc bias voltage through an external series resistor. Used in combination with VREF, the difference detector voltage, VREF - VDET, is a temperature compensated dc voltage proportional to the RF output power. See Figure 5 for the interface schematic. |
| Die Bottom | GND                           | Ground. The die bottom must be connected to RF and dc ground. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                              |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

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

Figure 9. V DD1 to V DD4 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Gain, Input and Output Return Loss vs. Frequency, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 11. Gain vs. Frequency for Various Supply Voltages, I DQ = 1500 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA

Figure 14. Gain vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Voltages, I DQ = 1500 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various Supply Currents, VDD  = 5 V

<!-- image -->

Figure 17. Output Return Loss vs. Frequency for Various Supply Voltages, I DQ = 1500 mA

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperatures, VDD  = 5 V, I DQ = 1500 mA

Figure 20. Output Return Loss vs. Frequency for Various Supply Currents, VDD  = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. Output P1dB vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 23. Output P1dB vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1700 mA

<!-- image -->

Figure 24. Output P1dB vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

Figure 25. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA

Figure 26. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1700 mA

<!-- image -->

Figure 27. P SAT vs. Frequency for Various Supply Currents, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 28. Output P1dB vs. Frequency for Various Supply Voltages, I DQ = 1500 mA

<!-- image -->

Figure 29. Power Added Efficiency (PAE) vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 1500 mA, PAE at P SAT (dBm)

<!-- image -->

Figure 30. PAE vs. Frequency for Various Supply Currents, V DD = 5 V, PAE at PSAT (dBm)

<!-- image -->

Figure 31. P SAT vs. Frequency for Various Voltages, I DQ = 1500 mA

Figure 32. PAE vs. Frequency for Various Supply Voltages, I DQ = 1500 mA, PAE at P SAT (dBm)

<!-- image -->

Figure 33. P OUT , Gain, PAE, and Drain Current with RF Applied (I DD ) vs. Input Power, 22 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 34. P OUT , Gain, PAE, and I DD vs. Input Power, 26 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 35. P OUT , Gain, PAE, and I DD vs. Input Power, 36 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 36. P OUT , Gain, PAE, and I DD vs. Input Power, 44 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 37. P OUT , Gain, PAE, and I DD vs. Input Power, 30 GHz, V DD = 5 V, I DQ = 1500 mA

Figure 38. P OUT , Gain, PAE, and I DD vs. Input Power, 40 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 39. P OUT , Gain, PAE, and I DD vs. Input Power, 50 GHz, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 40. P DISS vs. Input Power for Various Frequencies at T A = 85°C, VDD  = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 41. Output IP3 vs. Frequency at -20°C, +25°C, and +85°C, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 42. Output IP3 vs. Frequency at -20°C, -40°C, and -55°C, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 43. Output IP3 vs. Frequency for Various Supply Voltages, P OUT per Tone = 14 dBm, I DQ = 1500 mA

Figure 44. I DD vs. Input Power at Various Frequencies, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

Figure 45. Output IP3 vs. Frequency at -20°C, +25°C, and +85°C, P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1700 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 46. Output IP3 vs. Frequency at -20°C, -40°C, and -55°C,P OUT per Tone = 14 dBm, V DD = 5 V, I DQ = 1700 mA

<!-- image -->

Figure 47. Output IP3 vs. Frequency for Various Supply Currents, P OUT per Tone = 14 dBm, V DD = 5 V

<!-- image -->

Figure 48. Third-Order Intermodulation Distortion (IM3) vs. P OUT per Tone, VDD  = 4 V, I DQ = 1500 mA

<!-- image -->

Figure 49. I DD vs. Input Power for Various Temperaturesat 36 GHz, V DD = 5 V, I DQ = 1500 mA

Figure 50. Detector Voltage (VREF - VDET) vs. Output Power for Various Frequencies

<!-- image -->

Figure 51. IM3 vs. P OUT per Tone, V DD = 5 V, I DQ = 1500 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 52. Drain Current vs. Gate Voltage for Various Temperatures, VDD  = 5 V, I DQ = 1500 mA

Figure 53. Detector Voltage (VREF - VDET) vs. Output Power for Various, Temperatures at 36 GHz

<!-- image -->

Figure 54. Detector Voltage (VREF - VDET) vs. Frequency for Various Output Powers

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7008CHIP, a medium power amplifier, is shown in Figure 55. The ADPA7008CHIP uses two cascaded, four-stage amplifiers operating in quadrature between six 90° hybrids.

The input signal is divided evenly into two, and then each signal is divided into two again. Each of these new paths are amplified through four independent gain stages. The amplified signals are then combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 18 dB and a P SAT value of 31 dBm.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased, the diode rectifies the RF power and makes the RF power available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output (see Figure 55).

Figure 55. ADPA7008CHIP Architecture

<!-- image -->

The 90° hybrids ensure that the input and output return losses are greater than 14 dB. See the application circuits shown in Figure 56 and Figure 57 for further details on biasing the various blocks.

## APPLICATIONS INFORMATION

The ADPA7008CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all V GGx and V DDx pads. V GG1 is the gate bias pad for the top cascaded amplifiers. V GG2 is the gate bias pad for the bottom cascaded amplifiers. V DD1 and V DD3 are the drain bias pads for the top cascaded amplifiers. V DD2 and VDD4 are the drain bias pads for the bottom cascaded amplifiers.

All measurements for this device were taken using the primary application circuit (see Figure 56) and were configured as shown in the assembly diagram (see Figure 65).

The recommended bias sequence during power-up is as follows:

1. Connect GND to RF and dc ground.
2. Set the gate bias voltages, V GG1 and V GG2 , to -1.5 V.
4. Increase the gate bias voltages, V GG1 and V GG2 , to achieve an I DQ of 1500 mA.
3. Set all the drain bias voltages, V DDx , to 5 V.
5. Apply the RF signal.

The recommended bias sequence during power-down is as follows:

Table 9. Power Selection Table 1, 2

|   I DQ (mA) |   Gain (dB) |   P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) at P SAT |   V GGx (V) |
|-------------|-------------|--------------|--------------------|-----------------------|-------------|
|        1300 |        18.9 |         30.0 |               39.8 |                   7.9 |       -0.65 |
|        1500 |        19.6 |         30.4 |               38.4 |                   8.4 |        -0.6 |
|        1700 |        20.1 |         30.7 |               36.6 |                   8.9 |       -0.55 |

Figure 56. Primary Application Circuit

<!-- image -->

1. Turn off the RF signal.
2. Decrease the gate bias voltages, V GG1 and V GG2 , to -1.5 V to achieve a I DQ = 0 mA (approximately).
4. Increase the gate bias voltages, V GG1 and V GG2 , to 0 V.
3. Decrease all the drain bias voltages, V DDx , to 0 V.

The V DD = 5 V and I DQ = 1500 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the ADPA7008CHIP at different bias conditions may provide performance that differs from what is shown in Table 1, Table 2, Table 3, and Table 4. Biasing the ADPA7008CHIP for higher drain current typically results in higher P1dB and gain at the expense of increased power consumption (see Table 9).

## TYPICAL APPLICATION CIRCUIT

Figure 56 shows the primary application circuit. Figure 57 shows the alternate primary application circuit.

## APPLICATIONS INFORMATION

Figure 57. Alternate Application Circuit

<!-- image -->

## BIASING ADPA7008CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller that is designed to meet the bias requirements for enhancement mode and depletion mode amplifiers such as the ADPA7008CHIP. The controller provides constant drain current biasing over temperature and device to device variation, and properly sequences gate and drain voltages to ensure the safe operation of the amplifier. The HMC980LP4E also offers self protection in the event of a short circuit, an internal charge pump that generates the negative voltage needed on the gate of the ADPA7008CHIP, and the option to use an external negative voltage source. Because the HMC980LP4E can deliver a maximum current of 1.6 A and because the ADPA7008CHIP requires a peak current of I DD = 1.7 A, two HMC980LP4E devices must be used in parallel in this instance.

The HMC980LP4E is also available in die form as the HMC980-Die.

Figure 58. Functional Diagram of HMC980LP4E

<!-- image -->

## APPLICATION CIRCUIT SETUP

Figure 59 shows an application circuit using the HMC980LP4E to control the ADPA7008CHIP. When using an external negative supply for VNEG, refer to the schematic in Figure 60.

In the application circuit shown in Figure 59, the ADPA7008CHIP drain voltage, V DRAIN , and drain current, I DRAIN , are set by the following equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## where:

VDD and VDRAIN are in volts. I DRAIN is in amperes.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## where:

R10 is in ohms.

I DRAIN is in amperes.

I DRAIN is set to 850 mA in these equations because the current is split between two HMC980LP4E devices. Because both I SENSE currents flow through the same resistor, the actual value used must be half of the above value (that is, 88 Ω).

## LIMITING VGATE FOR THE ADPA7008CHIP VGGX ABSOLUTE MAXIMUM RATING REQUIREMENT

When using the HMC980LP4E to control the ADPA7008CHIP, the minimum voltages for VNEG and VGATE must be -1.5 V to keep the voltages within the absolute maximum rating limit for the V GGx pad of the ADPA7008CHIP. To set the minimum voltages, set R15 and R16 to the values shown in Figure 59 and set R16 to the value shown in Figure 60. Refer to the AN-1363 for more information and calculations for R15 and R16.

The HMC980LP4E application circuits for biasing figures in the AN-1363 are two examples of how the HMC980LP4E is used as an active bias controller. Both application circuits within the AN-1363 show the R5 and R7 resistors, which are analogous to the R15 and R16 resistor shown in Figure 59 and Figure 60.

## BIASING ADPA7008CHIP WITH THE HMC980LP4E

Figure 59. Application Circuit Using HMC980LP4E with ADPA7008CHIP (Internal Negative Voltage Source)

<!-- image -->

## BIASING ADPA7008CHIP WITH THE HMC980LP4E

Figure 60. Application Circuit Using HMC980LP4E with ADPA7008CHIP (External Negative Voltage Source)

<!-- image -->

## HMC980LP4E BIAS SEQUENCE

The dc supply sequence described in this section is required to prevent damage to the HMC980LP4E when using the device to control the ADPA7008CHIP.

## Power-Up Sequence

The power-up sequence for the HMC980LP4E is as follows:

1. Set VDIG = 3.3 V
2. Set S0 = 3.3 V
3. Set V DD = 5.72 V.
4. Set VNEG = -1.5 V (this step is unnecessary if using internally generated voltage)
5. Set EN = 3.3 V (the transition from 0 V to 3.3 V turns on VGATE and VDRAIN).

## Power-Down Sequence

The power-down sequence for the HMC980LP4E is as follows:

1. Set EN = 0 V (the transition from 3.3 V to 0 V turns off VDRAIN and VGATE).
2. Set VNEG = 0 V (this step is unnecessary if using internally generated voltage)
3. Set V DD = 0 V.
4. Set S0 = 0 V
5. Set VDIG = 0 V

After the HMC980LP4E bias control circuit is set up, toggle the bias to the ADPA7008CHIP on or off by applying 3.3 V or 0 V, respectively, to the EN pad. At EN = +3.3 V, VGATE drops to -1.5 V, and VDRAIN turns on at +5 V. VGATE then rises until I DRAIN = 1700 mA, and the closed control loop regulates I DRAIN at 1600 mA. When EN = 0 V, VGATE is set to -1.5 V, and VDRAIN is set to 0 V.

## BIASING ADPA7008CHIP WITH THE HMC980LP4E

## CONSTANT DRAIN CURRENT BIASING VS. CONSTANT GATE VOLTAGE BIASING

The HMC980LP4E uses closed-loop feedback to continuously adjust VGATE to maintain a constant drain current bias over dc supply variation, temperature, and device to device variation. In addition, constant drain current bias is the optimum method for reducing time in calibration procedures and for maintaining consistent performance over time. By comparing the constant drain current bias with a constant gate voltage bias where the current is driven to increase when RF power is applied, a slightly lower output P1dB is seen with a constant drain current bias. This output P1dB is shown in Figure 61 and Figure 63, where the RF performance is slightly lower than the constant gate voltage bias operation due to a lower drain current at the high input powers as the device reaches 1 dB compression.

To increase the output P1dB performance for the constant drain current bias toward the constant gate voltage bias performance, increase the set current toward the I DD value this performance reaches under the RF drive in the constant gate voltage bias condition, as shown in Figure 61 and Figure 63. The limit of increasing I DQ under the constant drain current operation is set by the thermal limitations found in Table 5 with the maximum power dissipation specification. As I DD increase continues, the actual output P1dB does not continue to increase indefinitely, and the power dissipation increases. Therefore, when using constant drain current biasing, take the trade-off between the power dissipation and the output P1dB performance.

## CONSTANT IDD OPERATION

TA = 25°C, V DD = 5 V, and I DQ = 1700 mA for nominal operation, unless otherwise noted. Figure 61 to Figure 64 are biased with the HMC980LP4E active bias controller. See the Biasing ADPA7008CHIP with the HMC980LP4E section for biasing details.

<!-- image -->

Figure 61. P1dB vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 62. P SAT vs. Frequency for Various Temperatures, V DD = 5 V, Data Measured with Constant I DD

Figure 63. P1dB vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

Figure 64. P SAT vs. Frequency for Various Drain Currents, V DD = 5 V, Data Measured with Constant I DD

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 65 shows the assembly diagram for the ADPA7008CHIP.

Figure 65. Assembly Diagram

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 66. High Frequency Input Wideband Matching

<!-- image -->

Figure 67. High Frequency Output Wideband Matching

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle- or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chips using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The surface of the chip has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## MOUNTING

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## WIRE BONDING

RF bonds made with 0.076 mm × 0.0127 mm (3 mil × 0. 5 mil) gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded dc bonds of 0.025 mm (1 mil) diameter are recommended. Create ball bonds with a force of 40 g to 50 g, and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm (12.2 mil).

Alternatively, use short RF bonds that are ≤3 mm and made with two 1 mm wires.

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 68. 10-Pad Bare Die [CHIP] (C-10-12) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1, 2    | Temperature Range   | Package Description    | Package Option   |
|---------------|---------------------|------------------------|------------------|
| ADPA7008CHIP  | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-12          |
| ADPA7008C-KIT | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-12          |

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.

04-28-2026-E