<!-- lastmod 2021-04-15 -->
<!-- image -->

Data Sheet

## FEATURES

Output P1dB: 28.5 dBm typical at 24 GHz to 36 GHz PSAT: 29 dBm typical at 24 GHz to 36 GHz Gain: 19.5 dB typical at 24 GHz to 36 GHz Input return loss: 17.5 dB typical at 24 GHz to 36 GHz Output return loss: 22.0 dB typical at 24 GHz to 36 GHz Output IP3: 35 dBm typical at 24 GHz to 36 GHz Supply voltage: 5 V typical at 750 mA 50 Ω matched input and output

Die size: 2.750 mm × 1.845 mm× 0.102 mm

## APPLICATIONS

Military and space Test instrumentation

Satellite communications

## GENERAL DESCRIPTION

The ADPA7009CHIP is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), 29 dBm saturated output power (0.5 W) distributed power amplifier that operates from 20 GHz to 54 GHz. The amplifier provides a gain of 19.5 dB, an output power for 1 dB compression (P1dB) of 28.5 dBm, and a typical output third-order intercept (IP3) of

## 20 GHz to 54 GHz, GaAs, pHEMT, MMIC,

## 29 dBm (0.5 W) Power Amplifier

[ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

35 dBm at 24 GHz to 36 GHz. The ADPA7009CHIP requires 750 mA from a 5 V supply voltage (VDD) and features inputs and outputs that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the RFIN and RFOUT pads connected via one 0.076 mm (3 mil) ribbon bond of 0.076 mm (3 mil) minimal length.

## [ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| 20 GHz to 24 GHz Frequency Range ........................................ 3                                |
| 24 GHz to 36 GHz Frequency Range ........................................ 3                                |
| 36 GHz to 50 GHz Frequency Range ........................................ 4                                |
| 50 GHz to 54 GHz Frequency Range ........................................ 4                                |
| Absolute Maximum Ratings ........................................................... 5                     |
| Thermal Resistance...................................................................... 5                 |
| Electrostatic Discharge (ESD) Ratings...................................... 5                              |
| ESD Caution.................................................................................. 5            |
| Pin Configuration and Function Descriptions ............................ 6                                 |
| Interface Schematics .................................................................... 7                |
| Typical Performance Characteristics............................................. 8                         |
| Lower Bias Operation................................................................15                     |

## REVISION HISTORY

3/2021-Revision 0: Initial Version

| Theory of Operation......................................................................                                                                  |   18 |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| Applications Information .............................................................                                                                     |   19 |
| Typical Application Circuit......................................................                                                                          |   19 |
| Biasing the ADPA7009CHIP with the HMC980LP4E.............                                                                                                  |   21 |
| Application Circuit Setup .........................................................                                                                        |   21 |
| Limiting VGATE for the ADPA7009CHIPV GGx Absolute Maximum Rating Requirement...............................................                                |   21 |
| HMC980LP4E Bias Sequence...................................................                                                                                |   23 |
| Constant Drain Current Biasing vs. Constant Gate Voltage Biasing.......................................................................................... |   23 |
| Constant I DD Operation.............................................................                                                                       |   24 |
| Assembly Diagram.........................................................................                                                                  |   26 |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs............................................................................................. |   27 |
| Handling Precautions................................................................                                                                       |   27 |
| Mounting.....................................................................................                                                              |   27 |
| Wire Bonding .............................................................................                                                                 |   27 |
| Outline Dimensions.......................................................................                                                                  |   28 |
| Ordering Guide ..........................................................................                                                                  |   28 |

## SPECIFICATIONS

## 20 GHz TO 24 GHz FREQUENCY RANGE

TA = 25°C, supply voltage (VDD) = 5 V, IDQ = 750 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust the gate voltage (VGGx) from -1.5 V to 0 V to achieve IDQ = 750 mA typical.

## Table 1.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                                       |
|-----------------------------------|----------|-------|-------|-------|--------|----------------------------------------------------------------|
| FREQUENCY RANGE                   |          |    20 |       |    24 | GHz    |                                                                |
| GAIN Gain Flatness                |          |  14.5 | 17    |       | dB     |                                                                |
| Gain Variation                    |          |       | ±1.2  |       | dB     |                                                                |
| Over Temperature                  |          |       | 0.033 |       | dB/°C  |                                                                |
| NOISE FIGURE                      |          |       | 6.5   |       | dB     |                                                                |
| RETURN LOSS                       |          |       |       |       |        |                                                                |
| Input                             |          |       | 15.0  |       | dB     |                                                                |
| Output                            |          |       | 20.0  |       | dB     |                                                                |
| OUTPUT                            |          |       |       |       |        |                                                                |
| Output Power for 1 dB Compression | P1dB     |    25 | 27.5  |       | dBm    |                                                                |
| Saturated Output Power            | P SAT    |       | 28.5  |       | dBm    |                                                                |
| Output Third-Order Intercept      | IP3      |       | 32    |       | dBm    | Output power (P OUT ) per tone = 14 dBmwith 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                                |
| Quiescent Current                 | I DQ     |       | 750   |       | mA     | Adjust V GGx to achieve I DQ = 750 mAtypical                   |
| Voltage                           | V DD     |     3 | 5     |       | V      |                                                                |

## 24 GHz TO 36 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, IDQ = 750 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust VGGx from -1.5 V to 0 V to achieve IDQ = 750 mA typical.

## Table 2.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                       |
|-----------------------------------|----------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                   |          |    24 |       |    36 | GHz    |                                                |
| GAIN                              |          |  17.0 | 19.5  |       | dB     |                                                |
| Gain Flatness                     |          |       | ±1.1  |       | dB     |                                                |
| Gain Variation Over Temperature   |          |       | 0.023 |       | dB/°C  |                                                |
| NOISE FIGURE                      |          |       | 5.5   |       | dB     |                                                |
| RETURN LOSS                       |          |       |       |       |        |                                                |
| Input                             |          |       | 17.5  |       | dB     |                                                |
| Output                            |          |       | 22.0  |       | dB     |                                                |
| OUTPUT                            |          |       |       |       |        |                                                |
| Output Power for 1 dB Compression | P1dB     |    26 | 28.5  |       | dBm    |                                                |
| Saturated Output Power            | P SAT    |       | 29    |       | dBm    |                                                |
| Output Third-Order Intercept      | IP3      |       | 35    |       | dBm    | P OUT per tone = 14 dBmwith 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                |
| Quiescent Current                 | I DQ     |       | 750   |       | mA     | Adjust V GGx to achieve I DQ = 750 mAtypical   |
| Voltage                           | V DD     |     3 | 5     |       | V      |                                                |

## 36 GHz TO 50 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, IDQ = 750 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust VGGx from -1.5 V to 0 V to achieve IDQ = 750 mA typical.

Table 3.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                     |
|-----------------------------------|----------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                   |          |    36 |       |    50 | GHz    |                                              |
| GAIN                              |          |  17.5 | 20.0  |       | dB     |                                              |
| Gain Flatness                     |          |       | ±1.1  |       | dB     |                                              |
| Gain Variation Over Temperature   |          |       | 0.026 |       | dB/°C  |                                              |
| NOISE FIGURE                      |          |       | 6.0   |       | dB     |                                              |
| RETURN LOSS                       |          |       |       |       |        |                                              |
| Input                             |          |       | 20    |       | dB     |                                              |
| Output                            |          |       | 20    |       | dB     |                                              |
| OUTPUT                            |          |       |       |       |        |                                              |
| Output Power for 1 dB Compression | P1dB     |    22 | 25    |       | dBm    |                                              |
| Saturated Output Power            | P SAT    |       | 27.0  |       | dBm    |                                              |
| Output Third-Order Intercept      | IP3      |       | 34.5  |       | dBm    | P OUT per tone = 14 dBmwith1MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                              |
| Quiescent Current                 | I DQ     |       | 750   |       | mA     | Adjust V GGx to achieve I DQ = 750 mAtypical |
| Voltage                           | V DD     |     3 | 5     |       | V      |                                              |

## 50 GHz TO 54 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V, IDQ = 750 mA, and 50 Ω matched input and output, unless otherwise noted. Adjust VGGx from -1.5 V to 0 V to achieve IDQ = 750 mA typical.

## Table 4.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                     |
|-----------------------------------|----------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                   |          |    50 |       |    54 | GHz    |                                              |
| GAIN                              |          |       | 20.5  |       | dB     |                                              |
| Gain Flatness                     |          |       | ±0.85 |       | dB     |                                              |
| Gain Variation Over Temperature   |          |       | 0.027 |       | dB/°C  |                                              |
| NOISE FIGURE                      |          |       | 6.0   |       | dB     |                                              |
| RETURN LOSS                       |          |       |       |       |        |                                              |
| Input                             |          |       | 16.5  |       | dB     |                                              |
| Output                            |          |       | 20.0  |       | dB     |                                              |
| OUTPUT                            |          |       |       |       |        |                                              |
| Output Power for 1 dB Compression | P1dB     |       | 24.0  |       | dBm    |                                              |
| Saturated Output Power            | P SAT    |       | 26.0  |       | dBm    |                                              |
| Output Third-Order Intercept      | IP3      |       | 33    |       | dBm    | P OUT per tone = 14 dBmwith1MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                              |
| Quiescent Current                 | I DQ     |       | 750   |       | mA     | Adjust V GGx to achieve I DQ = 750 mAtypical |
| Voltage                           | V DD     |     3 | 5     |       | V      |                                              |

## ABSOLUTE MAXIMUM RATINGS

## Table 5.

| Parameter                                                                   | Rating          |
|-----------------------------------------------------------------------------|-----------------|
| Drain Bias Voltage (V DDx )                                                 | 6.0 V           |
| V GGx                                                                       | -1.6 V to 0 V   |
| RF Input Power (RFIN)                                                       | 20dBm           |
| Continuous Power Dissipation (P DISS ), T A =85°C(Derate85mW/°CAbove85°C)   | 7.7W            |
| Junction Temperature to Maintain 1,000,000 Hour Mean Time to Failure (MTTF) | 175°C           |
| Nominal Junction Temperature (T J = 85°C, V DD = 5 V, I DQ = 750 mA)        | 129°C           |
| Temperature Range                                                           |                 |
| Storage                                                                     | -65°C to +150°C |
| Operating                                                                   | -55°C to +85°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC.

θJC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 6. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-10-13        |   11.7 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADPA7009CHIP

## Table 7. ADPA7009CHIP, 10-Pad Die

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.    | Mnemonic                      | Description                                                                                                                                                                                                                                                                                                                                                          |
|------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RFIN                          | RF Signal Input. This pad is ac-coupled and matched to 50 Ω. See Figure 6 for the interface schematic.                                                                                                                                                                                                                                                               |
| 2, 10      | V GG1 , V GG2                 | Amplifier Gate Controls. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads. AdjustV GGx from -1.5 Vto0Vtoachievethedesired quiescent current. See Figure 7 for the interface schematic.                                                                                                                                          |
| 3, 4, 8, 9 | V DD1 , V DD2 , V DD4 , V DD3 | Drain Biases for the Amplifier. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads. See Figure 9 for the interface schematic.                                                                                                                                                                                                     |
| 5          | VREF                          | Reference Diode Voltage. Use this pad for temperature compensation of the VDET RF output power measurements. Used in combination with VDET, this voltage provides temperature compensation to the VDET RF output power measurements. See Figure 4 for the interface schematic.                                                                                       |
| 6          | RFOUT                         | RF Signal Output. This pad is ac-coupled and matched to 50 Ω. See Figure 8 for the interface schematic.                                                                                                                                                                                                                                                              |
| 7          | VDET                          | Detector Diode Used for Measuring the RF Output Power. Detection via this pad requires the application of a dc bias voltage through an external series resistor. Used in combination with VREF, the difference detector voltage, VREF - VDET, is a temperature compensated dc voltage proportional to the RF output power. See Figure 5 for the interface schematic. |
| Die Bottom | GND                           | Ground. The die bottom must be connected to RF and dc ground. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                              |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. VREF Interface Schematic

<!-- image -->

Figure 5. VDET Interface Schematic

<!-- image -->

Figure 6. RFIN Interface Schematic

Figure 7. VGG1, VGG2 Interface Schematic

<!-- image -->

Figure 8. RFOUT Interface Schematic

<!-- image -->

26020-009

Figure 9. VDD1 to VDD4 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Gain and Return Loss vs. Frequency, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 11. Gain vs. Frequency for Various Supply Voltages, IDQ = 750 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

Figure 14. Gain vs. Frequency for Various IDQ Currents, VDD = 5 V

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Voltages, IDQ = 750 mA

<!-- image -->

## Data Sheet

Figure 16. Input Return Loss vs. Frequency for Various IDQ Currents, VDD = 5 V

<!-- image -->

Figure 17. Output Return Loss vs. Frequency for Various Supply Voltages, IDQ = 750 mA

<!-- image -->

26020-018

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

Figure 20. Output Return Loss vs. Frequency for Various IDQ Currents, VDD = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

<!-- image -->

<!-- image -->

Figure 22. Output P1dB vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 23. Output P1dB vs. Frequency for Various IDQ Currents, VDD = 5 V

<!-- image -->

Figure 24. Output P1dB vs. Frequency for Various Supply Voltages, IDQ = 750 mA

<!-- image -->

Figure 25. PSAT vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA

Figure 26. PSAT vs. Frequency for Various IDQ Currents, VDD = 5 V

<!-- image -->

Figure 27. PSAT vs. Frequency for Various Voltages, IDQ = 750 mA

<!-- image -->

<!-- image -->

Figure 28. Power Added Efficiency (PAE) vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 750 mA, PAE at PSAT (dBm)

<!-- image -->

Figure 29. PAE vs. Frequency for Various IDQ Currents, VDD = 5 V, PAE at PSAT (dBm)

Figure 30. POUT, Gain, PAE, and Drain Current with RF Applied (IDD) vs. Input Power, 26 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 31. PAE vs. Frequency for Various Supply Voltages, IDQ = 750 mA, PAE at PSAT (dBm)

<!-- image -->

26020-032

Figure 32. POUT, Gain, PAE, and IDD vs. Input Power, 22 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 33. POUT, Gain, PAE, and IDD vs. Input Power, 30 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

## [ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

<!-- image -->

Figure 34. POUT, Gain, PAE, and IDD vs. Input Power, 36 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 35. POUT, Gain, PAE, and IDD vs. Input Power, 44 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 36. PDISS vs. Input Power for Various Frequencies at TA = 85°C, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 37. POUT, Gain, PAE, and IDD vs. Input Power, 40 GHz, VDD = 5 V, IDQ = 750 mA

Figure 38. POUT, Gain, PAE, and IDD vs. Input Power, 50 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 39. Output IP3 vs. Frequency at -20°C, -40°C, and -55°C, POUT per Tone = 14 dBm, VDD = 5 V, IDQ = 750 mA

<!-- image -->

## Data Sheet

<!-- image -->

Figure 40. Output IP3 vs. Frequency at +25°C, +85°C and -20°C, POUT per Tone = 14 dBm, VDD = 5 V, IDQ = 750 mA

Figure 41. Output IP3 vs. Frequency for Various IDQ Currents, POUT per Tone = 14 dBm, VDD = 5 V

<!-- image -->

Figure 42. Third-Order Intermodulation Distortion (IM3) vs. POUT per Tone, VDD = 4 V, IDQ = 750 mA

<!-- image -->

## [ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

<!-- image -->

Figure 43. Drain Supply Current vs. Input Power at Various Frequencies, VDD = 5 V, IDQ = 750 mA

Figure 44. Output IP3 vs. Frequency for Various Supply Voltages, POUT per Tone = 14 dBm, IDQ = 750 mA

<!-- image -->

Figure 45. IM3 vs. POUT per Tone, VDD = 5 V, IDQ = 750 mA

<!-- image -->

## [ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

<!-- image -->

Figure 46. Drain Supply Current vs. Input Power at Various Temperature, 36 GHz, VDD = 5 V, IDQ = 750 mA

<!-- image -->

Figure 47. Drain Supply Current vs. Gate Voltage at Various Temperature

<!-- image -->

Figure 48. Detector Voltage (VREF - VDET) vs. Output Power for Various Temperatures at 36 GHz

Figure 49. Detector Voltage (VREF - VDET) vs. Output Power for Various Frequencies

<!-- image -->

Figure 50. Detector Voltage (VREF - VDET) vs. Frequency for Various Output Powers

<!-- image -->

## LOWER BIAS OPERATION

<!-- image -->

Figure 51. Gain vs. Frequency for Various IDQ Currents, VDD = 3 V

<!-- image -->

Figure 52. Input Return Loss vs. Frequency for Various IDQ Currents, VDD = 3 V

<!-- image -->

Figure 53. Output Return Loss vs. Frequency for Various IDQ Currents, VDD = 3 V

Figure 54. Gain vs. Frequency for Various IDQ Currents, VDD = 4 V

<!-- image -->

Figure 55. Input Return Loss vs. Frequency for Various IDQ Currents, VDD = 4 V

<!-- image -->

26020-062

Figure 56. Output Return Loss vs. Frequency for Various IDQ Currents, VDD = 4 V

<!-- image -->

<!-- image -->

Figure 57. Output P1dB vs. Frequency for Various IDQ Currents, VDD = 3 V

<!-- image -->

Figure 58. PSAT vs. Frequency for Various IDQ Currents, VDD = 3 V

<!-- image -->

Figure 59. Noise Figure vs. Frequency for Various IDQ Currents, VDD = 3 V

<!-- image -->

Figure 60. Output P1dB vs. Frequency for Various IDQ Currents, VDD = 4 V

Figure 61. PSAT vs. Frequency for Various IDQ Currents, VDD = 4 V

<!-- image -->

Figure 62. Noise Figure vs. Frequency for Various IDQ Currents, VDD = 4 V

<!-- image -->

Figure 63. Output IP3 vs. Frequency for Various IDQ Currents, POUT per Tone = 14 dBm, VDD = 3 V

<!-- image -->

Figure 64. Output IP3 vs. Frequency for Various IDQ Currents, POUT per Tone = 14 dBm, VDD = 4 V

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7009CHIP, a medium power amplifier, is shown in Figure 65. The ADPA7009CHIP uses a cascaded, four-stage amplifier operating in quadrature between two 90° hybrids.

The input signal is divided evenly in two. Each path is amplified through four independent gain stages. The amplified signals are then combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 19.5 dB and a PSAT value of 29 dBm. The gate pins are internally connected and can be biased from either north or south of the circuit.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased, the diode rectifies the RF power and makes the RF power available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output (see Figure 65).

26020-071

Figure 65. ADPA7009CHIP Architecture

<!-- image -->

## APPLICATIONS INFORMATION

The ADPA7009CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all primary and alternate VGGx and VDDx pads. VGG1 and VGG2 are the gate bias pads for the amplifier. VDD1, VDD2, VDD3, and VDD4 are the drain bias pads for the amplifier.

All measurements for this device were taken using the primary application circuit (see Figure 66) and were configured as shown in the assembly diagram (see Figure 79).

The recommended bias sequence during power-up is as follows:

1. Connect GND to RF and dc ground.
2. Set the gate bias voltages, VGG1 and VGG2, to -1.5 V.
3. Set all the drain bias voltages, VDDx, to 5 V.
4. Increase the gate bias voltages, VGG1 and VGG2, to achieve an IDQ of 750 mA.
5. Apply the RF signal.

Table 9. Power Selection Table 1, 2

The recommended bias sequence during power-down is as follows:

1. Turn off the RF signal.
2. Decrease the primary gate bias voltages, VGG1 and VGG2, to -1.5 V to achieve IDQ = 0 mA (approximately).
3. Decrease all the drain bias voltages to 0 V.
4. Increase the gate bias voltage to 0 V.

The VDD = 5 V and IDQ = 750 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the ADPA7009CHIP at different bias conditions may provide performance that differs from what is shown in Table 1 to Table 4. Biasing the ADPA7009CHIP for higher drain current typically results in higher P1dB and gain at the expense of increased power consumption (see Table 9).

## TYPICAL APPLICATION CIRCUIT

Figure 66 shows the primary application circuit. Figure 67 shows the alternate typical application circuit.

|   I DQ (mA) |   Gain (dB) |   P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) at P SAT |   V GGx (V) |
|-------------|-------------|--------------|--------------------|-----------------------|-------------|
|         650 |       20.33 |        27.57 |              37.07 |                  3.25 |       -0.68 |
|         750 |       21.02 |        27.93 |              34.83 |                  3.75 |       -0.63 |
|         850 |       21.52 |        28.17 |              32.69 |                  4.25 |       -0.59 |
|         950 |       22.02 |        28.34 |              31.19 |                  4.75 |       -0.54 |

1 Data taken at the following nominal bias conditions: VDD = 5 V, TA = 25°C, and frequency = 36 GHz.

2 Adjust VGGx from -1.5 V to 0 V to achieve the desired drain current.

Figure 66. Primary Application Circuit

<!-- image -->

Figure 67. Alternate Application Circuit

<!-- image -->

## BIASING THE ADPA7009CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller that is designed to meet the bias requirements for enhancement mode and depletion mode amplifiers such as the ADPA7009CHIP. The controller provides constant drain current biasing over temperature and device to device variation, and properly sequences gate and drain voltages to ensure the safe operation of the amplifier. The HMC980LP4E also offers self-protection in the event of a short circuit, an internal charge pump that generates the negative voltage needed on the gate of the ADPA7008CHIP, and the option to use an external negative voltage source. The HMC980LP4E is also available in die form as the HMC980-Die.

Figure 68. HMC980LP4E Active Bias Control

<!-- image -->

## APPLICATION CIRCUIT SETUP

Figure 69 shows an application circuit using the HMC980LP4E to control the ADPA7009CHIP. When using an external negative supply for VNEG, refer to the application circuit shown in Figure 70.

In the application circuit shown in Figure 69, the ADPA7009CHIP drain voltage, VDRAIN, and drain current, IDRAIN, are set by the following equations:

<!-- formula-not-decoded -->

## where:

VDD and VDRAIN are in volts.

IDRAIN is in amperes.

<!-- formula-not-decoded -->

## where:

R10 is in ohms.

IDRAIN is in amperes.

## LIMITING VGATE FOR THE ADPA7009CHIP VGGx ABSOLUTE MAXIMUM RATING REQUIREMENT

When using the HMC980LP4E to control the ADPA7009CHIP, the minimum voltages for VNEG and VGATE must be -1.5 V to keep the voltages within the absolute maximum rating limit for the VGGx pad of the ADPA7009CHIP. To set the minimum voltages, set R15 and R16 to the values shown in Figure 69 and Figure 70. Refer to the AN-1363 Application Note for more information and calculations for R15 and R16.

The HMC980LP4E application circuits for biasing figures in the AN-1363 are two examples of how the HMC980LP4E is used as an active bias controller. Both application circuits within the AN-1363 show the R5 and R7 resistors, which are analogous to the R15 and R16 resistor shown in Figure 69 and Figure 70.

<!-- formula-not-decoded -->

## [ADPA7009CHIP](https://www.analog.com/adpa7009?doc=adpa7009chip.pdf)

## Data Sheet

Figure 69. Application Circuit Using the HMC980LP4E with the ADPA7009CHIP (Internal Negative Voltage Source)

<!-- image -->

26020-077

Figure 70. Application Circuit Using the HMC980LP4E with the ADPA7009CHIP (External Negative Voltage Source)

<!-- image -->

## HMC980LP4E BIAS SEQUENCE

The dc supply sequence described in this section is required to prevent damage to the HMC980LP4E when using the device to control the ADPA7009CHIP.

## Power-Up Sequence

The power-up sequence for the HMC980LP4E is as follows:

1. Set VDIG = 3.3 V.
2. Set S0 = 3.3 V.
3. Set VDD = 5.72 V.
4. Set VNEG = -1.5 V (this step is unnecessary if using an internally generated voltage).
5. Set EN = 3.3 V (the transition from 0 V to 3.3 V turns on VGATE and VDRAIN).

## Power-Down Sequence

The power-down sequence for the HMC980LP4E is as follows:

1. Set EN = 0 V (the transition from 3.3 V to 0 V turns off VDRAIN and VGATE).
2. Set VNEG = 0 V (this step is unnecessary if using and internally generated voltage).
3. Set VDD = 0 V.
4. Set S0 = 0 V.
5. Set VDIG = 0 V.

After the HMC980LP4E bias control circuit is set up, toggle the bias to the ADPA7009CHIP on or off by applying 3.3 V or 0 V, respectively, to the EN pad. At EN = +3.3 V, VGATE drops to -1.5 V, and VDRAIN turns on at +5 V. VGATE then rises until IDRAIN = 850 mA, and the closed control loop regulates IDRAIN at 850 mA. When EN = 0 V, VDRAIN is set to -1.5 V, and VDRAIN is set to 0 V.

## CONSTANT DRAIN CURRENT BIASING vs. CONSTANT GATE VOLTAGE BIASING

The HMC980LP4E uses closed-loop feedback to continuously adjust VGATE to maintain a constant drain current bias over dc supply variation, temperature, and device to device variation. In addition, constant drain current bias is the optimum method for reducing time in calibration procedures and for maintaining consistent performance over time. By comparing the constant drain current bias with a constant gate voltage bias where the current is driven to increase when RF power is applied, a slightly lower output P1dB is seen with a constant drain current bias. This output P1dB is shown in Figure 78, where the RF performance is slightly lower than the constant gate voltage bias operation due to a lower drain current at the high input powers as the device reaches 1 dB compression.

To increase the output P1dB performance for the constant drain current bias toward the constant gate voltage bias performance, increase the set current toward the IDD value this performance reaches under the RF drive in the constant gate voltage bias condition, as shown in Figure 78. The limit of increasing IDQ under the constant drain current operation is set by the thermal limitations found in Table 5 with the maximum power dissipation specification. As the IDD increase continues, the actual output P1dB does not continue to increase indefinitely and the power dissipation increases. Therefore, when using constant drain current biasing, take the trade-off between the power dissipation and the output P1dB performance into consideration.

## CONSTANT IDD OPERATION

TA = 25°C, VDD = 5 V, IDD = 850 mA for nominal operation, unless otherwise noted. Figure 71 to Figure 78 are biased with the HMC980LP4E active bias controller. See the Biasing the ADPA7009CHIP with the HMC980LP4E section for biasing details.

<!-- image -->

Figure 71. P1dB vs. Frequency for Various Temperatures, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

Figure 72. PSAT vs. Frequency for Various Temperatures, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

Figure 73. P1dB vs. Frequency for Various Drain Currents, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

Figure 74. PSAT vs. Frequency for Various Drain Currents, VDD = 5 V, Data Measured with Constant IDD

Figure 75. IDD vs. Input Power, VDD = 5 V, Frequency = 36 GHz, Constant Drain Current Bias (IDRAIN Setpoint = 850 mA) and Constant Gate Voltage Bias (VGGx ≈ -0.63 V)

<!-- image -->

Figure 76. PAE vs. Input Power, VDD = 5 V, Frequency = 36 GHz, Constant Drain Current Bias (IDRAIN Setpoint = 850 mA) and Constant Gate Voltage Bias (VGGx ≈ -0.63 V)

<!-- image -->

## Data Sheet

Figure 77. POUT vs. Input Power, VDD = 5 V, Frequency = 36 GHz, Constant Drain Current Bias (IDRAIN Setpoint = 850 mA) and Constant Gate Voltage Bias (VGGx ≈ -0.63 V)

<!-- image -->

Figure 78. P1dB vs. Frequency, VDD = 5 V, Constant Drain Current Bias (IDRAIN Setpoint = 850 mA) and Constant Gate Voltage Bias (VGGx ≈ -0.63 V)

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 79 shows the assembly diagram for the ADPA7009CHIP.

Figure 79. Assembly Diagram with Bias Control on North Side of Die

<!-- image -->

26020-074

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 80. High Frequency Input Wideband Matching

<!-- image -->

Figure 81. High Frequency Output Wideband Matching

<!-- image -->

26020-079

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

RF bonds made with 0.076 mm × 0.0127 mm (3 mil × 0. 5 mil) gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded dc bonds of 0.025 mm (1mil) diameter are recommended. Create ball bonds with a force of 40 g to 50 g, and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm (12.2 mil).

Alternatively, use short RF bonds that are ≤3 mm and made with two 1 mm wires.

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 82. 10-Pad Bare Die [CHIP] (C-10-13)

Dimensions shown in millimeter

| Model 1, 2    | Temperature Range   | Package Description    | Package Option   |
|---------------|---------------------|------------------------|------------------|
| ADPA7009CHIP  | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-13          |
| ADPA7009C-KIT | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-13          |

## ORDERING GUIDE

1  The ADPA7009CHIP and ADPA7009C-KIT are RoHS compliant parts.

2  Die inspected to meet MIL-STD-883 Method 2010, Condition B.

<!-- image -->

<!-- image -->

04-12-2021-C