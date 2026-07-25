<!-- lastmod 2022-05-11 -->
<!-- image -->

## FEATURES

- Gain: 21.5 dB typical at 30 GHz to 44 GHz
- Input return loss: 22 dB typical at 30 GHz to 44 GHz
- Output return loss: 23 dB typical at 30 GHz to 44 GHz
- OP1dB: 14 dB typical at 30 GHz to 44 GHz
- PSAT : 18 dBm typical at 30 GHz to 44 GHz
- OIP3: 21.5 dBm typical at 30 GHz to 44 GHz
- Noise figure: 3.0 dB typical at 30 GHz to 44 GHz
- 3 V supply voltage at 120 mA
- 50 Ω matched input and output
- Die size: 2.3 mm x 1.45 mm x 0.1 mm

## APPLICATIONS

- Test instrumentation
- Military and space
- Satellite

## GENERAL DESCRIPTION

The ADL8106 is a gallium arsenide (GaAs), pseudomorphic high electron mobility transfer (pHEMT), monolithic microwave integrated circuit (MMIC), wideband low noise amplifier that operates from 20 GHz to 54 GHz. The ADL8106 provides a gain of 21.5 dB, an output power for 1 dB compression (OP1dB) of 14 dBm, and a typical output third-order intercept (OIP3) of 21.5 dBm at 30 GHz to 44 GHz. The ADL8106 requires 120 mA from a 3 V supply voltage (V DD ) and features inputs and outputs that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the RFIN and RFOUT pads connected via one 0.076 mm (3 mil) wide gold ribbon bond of 0.076 mm to 0.152 mm (3 mil to 6 mil) minimal length.

## GaAs, pHEMT, Low Noise Amplifier, 20 GHz to 54 GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1                                                       |
|----------------------------------------------------------------------------|---------------------------------------------------------|
| Applications...........................................................    | 1                                                       |
| General Description...............................................1        |                                                         |
| Functional Block Diagram......................................1            |                                                         |
| Electrical Specifications.........................................3        |                                                         |
| 20 GHz to 30 GHz Frequency Range................                           | 3                                                       |
| 30 GHz to 44 GHz Frequency Range................                           | 3                                                       |
| 44 GHz to 50 GHz Frequency Range................                           | 4                                                       |
| 50 GHz to 54 GHz Frequency Range................                           | 4                                                       |
| Absolute Maximum Ratings...................................5               |                                                         |
| Thermal Resistance...........................................              | 5                                                       |
| Electrostatic Discharge (ESD) Ratings...............5                      |                                                         |
| ESD Caution.......................................................5        |                                                         |
| Pin Configuration and Function Descriptions........ Interface              | 6 Schematics..........................................6 |

## REVISION HISTORY

5/2022-Revision 0: Initial Version

| Typical Performance Characteristics.....................7                                 |    |
|-------------------------------------------------------------------------------------------|----|
| Lower Voltage Higher Current Operation.........14                                         |    |
| Theory of Operation.............................................21                        |    |
| Applications Information......................................                            | 22 |
| Power-Up and Power-Down Sequencing.........23                                             |    |
| Biasing the ADL8106 with the HMC920...........23                                          |    |
| Assembly Diagram..............................................                            | 26 |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs............................ | 27 |
| Handling Precautions.......................................27                             |    |
| Mounting...........................................................27                     |    |
| Wire Bonding....................................................27                        |    |
| Outline Dimensions.............................................                           | 28 |
| Ordering Guide.................................................28                         |    |

## ELECTRICAL SPECIFICATIONS

## 20 GH z TO 30 GH z FREQUENCY RANGE

TCASE = 25°C, VDD1 drain bias voltage (V DD1 ) = VDD2 drain bias voltage (V DD2 ) = 3 V, and quiescent drain current (I DQ ) = 120 mA, unless otherwise stated. Adjust the negative gate bias voltage (V GG1 ) between -2 V to 0 V to achieve an I DQ = 120 mA typical.

Table 1.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                       |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------------------------|
| FREQUENCY RANGE                 |    20 |       |    30 | GHz    |                                                                |
| GAIN                            |    18 |  20.5 |       | dB     |                                                                |
| Gain Variation over Temperature |       | 0.020 |       | dB/°C  |                                                                |
| RETURN LOSS                     |       |       |       |        |                                                                |
| Input                           |       |  22.5 |       | dB     |                                                                |
| Output                          |       |    23 |       | dB     |                                                                |
| OUTPUT                          |       |       |       |        |                                                                |
| OP1dB                           |  10.5 |    13 |       | dBm    |                                                                |
| Saturated Power (P SAT )        |       |  16.5 |       | dBm    |                                                                |
| OIP3                            |       |  21.5 |       | dBm    | Output power (P OUT ) per tone = 0 dBm with 1 MHz tone spacing |
| Second-Order Intercept (IP2)    |       |  22.5 |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing                 |
| NOISE FIGURE                    |       |   3.0 |       | dB     |                                                                |
| SUPPLY                          |       |       |       |        |                                                                |
| I DQ                            |       |   120 |       | mA     | Adjust V GG1 to achieve I DQ = 120 mA typical                  |
| V DD                            |   2.5 |     3 |   3.5 | V      |                                                                |

## 30 GH z TO 44 GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 = V DD2 = 3 V, and I DQ = 120 mA, unless otherwise stated. Adjust V GG1 between -2 V to 0 V to achieve an I DQ = 120 mA typical.

Table 2.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 |    30 |       |    44 | GHz    |                                                |
| GAIN                            |    19 |  21.5 |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.020 |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       |    22 |       | dB     |                                                |
| Output                          |       |    23 |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |  11.5 |    14 |       | dBm    |                                                |
| P SAT                           |       |    18 |       | dBm    |                                                |
| OIP3                            |       |  21.5 |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       |   3.0 |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       |   120 |       | mA     | Adjust V GG1 to achieve I DQ = 120 mA typical  |
| V DD                            |   2.5 |     3 |   3.5 | V      |                                                |

## ELECTRICAL SPECIFICATIONS

## 44 GH z TO 50 GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 = V DD2 = 3 V, and I DQ = 120 mA, unless otherwise stated. Adjust V GG1 between -2 V to 0 V to achieve an I DQ = 120 mA typical.

Table 3.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 |    44 |       |    50 | GHz    |                                                |
| GAIN                            |    20 |  22.5 |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.021 |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       |    20 |       | dB     |                                                |
| Output                          |       |    15 |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |    14 |  16.5 |       | dBm    |                                                |
| P SAT                           |       |  19.5 |       | dBm    |                                                |
| OIP3                            |       |  21.5 |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       |   3.5 |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       |   120 |       | mA     | Adjust V GG1 to achieve I DQ = 120 mA typical  |
| V DD                            |   2.5 |     3 |   3.5 | V      |                                                |

## 50 GH z TO 54 GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 = V DD2 = 3 V, and I DQ = 120 mA, unless otherwise stated. Adjust V GG1 between -2 V to 0 V to achieve an I DQ = 120 mA typical.

Table 4.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 |    50 |       |    54 | GHz    |                                                |
| GAIN                            |       |  21.5 |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.017 |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       |    15 |       | dB     |                                                |
| Output                          |       |    15 |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |       |  18.5 |       | dBm    |                                                |
| P SAT                           |       |    19 |       | dBm    |                                                |
| OIP3                            |       |  23.5 |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       |   3.8 |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       |   120 |       | mA     | Adjust V GG1 to achieve I DQ = 120 mA typical  |
| V DD                            |   2.5 |     3 |   3.5 | V      |                                                |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                                |                 |
|-----------------------------------------------------------------------------------------|-----------------|
| Parameter                                                                               | Rating          |
| Drain Bias Voltage (V DD1 and V DD2 )                                                   | 4 V             |
| Negative Gate Bias Voltage (V GG1 )                                                     | -2.1 V to 0 V   |
| RF Input Power (RF IN )                                                                 | 17 dBm          |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 17 mW/°C Above 85°C)      | 1.53W           |
| Temperature                                                                             |                 |
| Storage Range                                                                           | -65°C to +150°C |
| Operating Range                                                                         | -55°C to +85°C  |
| Quiescent Channel (T CASE = 85°C, V DD = 3 V, I DQ = 120 mA, Input Power (P IN ) = Off) | 106.2°C         |
| Maximum Channel                                                                         | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Overall thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC.

With an epoxy layer of nominal thickness assumed under the die, θ JC is the thermal resistance from the die channel to the bottom of the epoxy layer.

## Table 6. Thermal Resistance 1

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-5-9          |   58.9 | °C/W   |

1 Thermal resistance varies with operating conditions.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8106

## Table 7. ADL8106, 5-Pad CHIP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±300                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 8. Pad Function Descriptions

| Pad No.   | Mnemonic   | Description                                                                                                                                                 |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | RFIN       | RF Input. The RFIN pin is ac-coupled and matched to 50 Ω. If the dc bias level of the input signal is not equal to 0 V, externally ac-couple the RFIN pin.  |
| 2         | VGG1       | Negative Gate Bias Control. The gate voltage can be applied to VGG1. Adjust the negative voltage on the VGG1 pin to set the I DQ to the desired level.      |
| 3, 5      | VDD1, VDD2 | Drain Bias Pads with Integrated RF Chokes. Connect a common dc bias to the VDDx pads to provide drain current.                                              |
| 4         | RFOUT      | RF Output. The RFOUT pin is ac-coupled and matched to 50 Ω. If the dc bias level of the next stage is not equal to 0 V, externally ac-couple the RFOUT pin. |
|           | GND        | Ground. Connect to a ground plane that has low electrical and thermal impedance.                                                                            |

## INTERFACE SCHEMATICS

Figure 6. VDD1, VDD2, and RFOUT Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 7. Gain and Return Loss vs. Frequency, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 8. Gain vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

Figure 9. Input Return Loss vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

Figure 10. Gain vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

Figure 11. Gain vs. Frequency for Various I DQ Values, V DD = 3 V

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. Input Return Loss vs. Frequency for Various I DQ Values, V DD = 3 V

<!-- image -->

Figure 14. Output Return Loss vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

Figure 15. Reverse Isolation vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

Figure 16. Output Return Loss vs. Frequency for Various Temperature, VDD  = 3 V, I DQ = 120 mA

Figure 17. Output Return Loss vs. Frequency for Various I DQ Values, VDD  = 3 V

<!-- image -->

Figure 18. Noise Figure vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. Noise Figure vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

Figure 20. OP1dB vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

Figure 21. OP1dB vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

Figure 22. Noise Figure vs. Frequency for Various I DQ Values, V DD = 3 V

Figure 23. P SAT vs. Frequency for Various Temperatures, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

Figure 24. P SAT vs. Frequency for Various V DD Values, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. OP1dB vs. Frequency for Various I DQ Values, V DD = 3 V

<!-- image -->

Figure 26. P OUT , Gain, PAE, and Drain Current (I DD ) vs. P IN , 20 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 27. P OUT , Gain, PAE, and I DD vs. P IN , 28 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 28. P SAT vs. Frequency for Various I DQ Values, V DD = 3 V

Figure 29. P OUT , Gain, PAE, and I DD vs. P IN , 36 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 30. P OUT , Gain, PAE, and I DD vs. P IN , 48 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. P OUT , Gain, PAE, and I DD vs. P IN , 54 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 32. OIP3 vs. Frequency for Various Temperature, POUT per Tone = 0 dBm, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 33. OIP3 vs. Frequency for Various I DQ Values, P OUT per Tone = 0 dBm, VDD  = 3 V

<!-- image -->

Figure 34. P DISS vs. P IN for Various Frequencies at T CASE = 85°C, V DD = 3 V, I DQ = 120 mA

Figure 35. OIP3 vs. Frequency for V DD Values, P OUT per Tone = 0 dBm, I DQ = 120 mA

<!-- image -->

Figure 36. Third-Order Intermodulation Distortion (IM3) vs. P OUT per Tone for Various Frequencies, V DD = 2.5 V, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 37. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 38. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 3.5 V, I DQ = 120 mA

<!-- image -->

Figure 39. OIP2 vs. Frequency for Various Temperature, POUT per Tone = 0 dBm, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 40. OIP2 vs. Frequency for Various V DD Values, POUT per Tone = 0 dBm, I DQ = 120 mA

Figure 41. OIP2 vs. Frequency for Various I DQ Values, P OUT per Tone = 0 dBm, VDD  = 3 V

<!-- image -->

Figure 42. I DD vs. P IN at Various Temperatures, 36 GHz, VDD  = 3 V, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 43. I DQ vs. Gate Voltage for Various Temperature, V DD = 3 V

Figure 44. I DD vs. P IN at Various Frequencies, V DD = 3 V, I DQ = 120 mA

<!-- image -->

Figure 45. VGG1 Current (I GG1 ) vs. P IN at Various Temperatures, 36 GHz, V DD = 3 V, I DQ = 120 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## LOWER VOLTAGE HIGHER CURRENT OPERATION

<!-- image -->

Figure 46. Gain and Return Loss vs. Frequency, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 47. Gain vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

Figure 48. Input Return Loss vs. Frequency for Various Temperatures, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 49. Gain vs. Frequency for Various Temperatures, VDD  = 2.5 V, I DQ = 160 mA

Figure 50. Gain vs. Frequency for Various I DQ Values, V DD = 2.5 V

<!-- image -->

Figure 51. Input Return Loss vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 52. Input Return Loss vs. Frequency for Various I DQ Values, VDD  = 2.5 V

<!-- image -->

Figure 53. Output Return Loss vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

Figure 54. Reverse Isolation vs. Frequency for Various Temperatures, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 55. Output Return Loss vs. Frequency for Various Temperature, VDD  = 2.5 V, I DQ = 160 mA

Figure 56. Output Return Loss vs. Frequency for Various I DQ Values, VDD  = 2.5 V

<!-- image -->

Figure 57. Noise Figure vs. Frequency for Various Temperatures, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 58. Noise Figure vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

Figure 59. OP1dB vs. Frequency for Various Temperatures, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 60. OP1dB vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

Figure 61. Noise Figure vs. Frequency for Various I DQ Values, V DD = 2.5 V

Figure 62. P SAT vs. Frequency for Various Temperatures, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 63. P SAT vs. Frequency for Various V DD Values, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 64. OP1dB vs. Frequency for Various I DQ Values, V DD = 2.5 V

<!-- image -->

Figure 65. P OUT , Gain, PAE, and I DD vs. P IN , 20 GHz, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 66. P OUT , Gain, PAE, and I DD vs. P IN , 28 GHz, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 67. P SAT vs. Frequency for Various I DQ Values, V DD = 2.5 V

Figure 68. P OUT , Gain, PAE, and I DD vs. P IN , 36 GHz, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 69. P OUT , Gain, PAE, and I DD vs. P IN , 48 GHz, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 70. P OUT , Gain, PAE, and I DD vs. P IN , 54 GHz, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 71. OIP3 vs. Frequency for Various Temperature, POUT per Tone = 0 dBm, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 72. OIP3 vs. Frequency for Various I DQ Values, P OUT per Tone = 0 dBm, VDD  = 2.5 V

<!-- image -->

Figure 73. P DISS vs. P IN for Various Frequencies at T CASE = 85°C, V DD = 2.5 V, I DQ = 160 mA

Figure 74. OIP3 vs. Frequency for Various V DD Values, POUT per Tone = 0 dBm, I DQ = 160 mA

<!-- image -->

Figure 75. IM3 vs. P OUT per Tone for Various Frequencies, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 76. IM3 vs. P OUT per Tone for Various Frequencies, VDD  = 3 V, I DQ = 160 mA

<!-- image -->

Figure 77. IM3 vs. P OUT per Tone for Various Frequencies, VDD  = 3.5 V, I DQ = 160 mA

<!-- image -->

Figure 78. OIP2 vs. Frequency for Various Temperature, POUT per Tone = 0 dBm, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 79. OIP2 vs. Frequency for Various V DD Values, POUT per Tone = 0 dBm, I DQ = 160 mA

Figure 80. OIP2 vs. Frequency for Various I DQ Values, P OUT per Tone = 0 dBm, VDD  = 2.5 V

<!-- image -->

Figure 81. I DD vs. P IN at Various Temperatures, 36 GHz, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 82. I DQ vs. Gate Voltage for Various Temperature, V DD = 2.5 V

Figure 83. I DD vs. P IN at Various Frequencies, V DD = 2.5 V, I DQ = 160 mA

<!-- image -->

Figure 84. I GG1 vs. P IN at Various Temperatures, 36 GHz, VDD  = 2.5 V, I DQ = 160 mA

<!-- image -->

## THEORY OF OPERATION

The ADL8106 is a wideband GaAs, pHEMT, low noise amplifier. Figure 85 shows a simplified block diagram. The drain current is set by the negative voltage applied to the VGG1 pin. The drain bias voltage is applied through the VDD1 and VDD2 pins with the current split evenly between the two pins. Bias inductors are integrated.

The RFIN and RFOUT pins are ac-coupled and matched to 50 Ω. However, if these pins are connecting to devices with bias levels that are not equal to 0 V, externally ac-couple the RFIN and RFOUT pins.

Figure 85. Simplified Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

Figure 86 shows the basic connections for operating the ADL8106. The RFIN and RFOUT pins are internally ac-coupled in the RF path. However, if the dc bias level of the input signal is not equal to 0 V, externally ac-couple the RFIN pin. Likewise, if the RFOUT pin is driving an input with a bias level other than 0 V, externally ac-couple this pin.

Apply a gate voltage of approximately -0.65V to the VGG1 pad to set the I DQ to 120 mA. The drain bias voltage is applied to the VDD1 and VDD2 pads (3 V nominal). Both pads must be used with each pad drawing the same current. Decouple all gate and drain bias pins as shown in Figure 86.

The recommended assembly drawing is shown in Figure 94, which represents the configuration used to characterize and qualify the device.

Figure 86. Basic Connections

<!-- image -->

## APPLICATIONS INFORMATION

## POWER-UP AND POWER-DOWN SEQUENCING

To avoid damaging the device, careful attention must be paid to the power-up and power-down sequencing of the RF input, the gate bias voltages, and the drain bias voltage.

## Power-Up Sequence

The following power-up sequencing is recommended:

1. Connect GND to ground.
2. Set V GG1 to -2 V.
4. Increase V GG1 to achieve an I DQ = 120 mA.
3. Set V DD1 and V DD2 to 3 V.
5. Apply the RF signal.

Note that if the desired final gate voltage is known, V GG1 can be set to that voltage value directly in Step 2 and skip Step 4.

## Power-Down Sequence

The following power-down sequencing is recommended:

1. Turn off the RF signal.
2. Decrease V GG1 to -2 V to achieve an I DQ = 0 mA.
4. Increase V GG1 to 0 V.
3. Decrease V DD1 and V DD2 to 0 V.

## BIASING THE ADL8106 WITH THE HMC920

The HMC920 is designed to provide active bias control for depletion mode amplifiers, such as the ADL8106. The HMC920 measures and regulates drain current to compensate for temperature changes and part-to-part variations in drain current to gate voltage relationship. Additionally, the HMC920 properly sequences gate and drain voltages to ensure safe on and off operation and offers circuit self protection in the event of a short circuit. The active bias controller contains an internal charge pump that generates the negative voltage needed to drive the VGG1 pin on the ADL8106. Alternatively, an external negative voltage can be provided.

For more information regarding the use of the HMC920, refer to the HMC920 data sheet and the AN-1363 Application Note.

## Application Circuit Setup

Figure 87 shows the application circuit for bias control of the ADL8106 using the HMC920. The HMC920 drain current is measured and the VGATE output voltage adjusts until the set point drain current is achieved. The various external component values around the HMC920 are calculated as follows.

The target drain current must first be determined and set. This current must be set based on the maximum drain current that is expected to be required during operation, including when the device is generating the maximum expected output power. This current is set by the resistor connected between the ISENSE pin on the HMC920 (Pin 25) and ground using the following equation:

I DRAIN (A) = 165/R SENSE + 0.0135

To ensure adequate headroom, the supply voltage for the HMC920 must be set higher than the target drain voltage to the ADL8106 (3 V). Accordingly, the supply voltage to HMC920 is set to 5 V.

The voltage on the LDOCC pin (Pin 29) on the HMC920 drives the VDRAIN pins which in turn drive the VDDx pins of the ADL8106. Because the LDOCC output is connected to the VDRAIN output through an internal metal-oxide semiconductor field effect transistor (MOSFET) switch with an on resistance of 0.5 Ω, the LDOCC voltage must be set slightly higher than the target drain voltage to the ADL8106. To determine the required LDOCC voltage, use the following equation:

VLDOCC = VDRAIN + IDRAIN × 0.5

Therefore, VLDOCC = 3 V + (0.14 × 0.5) = 3.07 V.

To set VLDOCC to 3.07 V, use the following equation with R5 set to 10 kΩ:

R8 = (R5/2) × (VDOCC - 2)

Therefore, R8 = (10000/2) × (3.07 - 2) = 5.350 kΩ (choose 5.36 kΩ standard value).

## APPLICATIONS INFORMATION

Figure 87. Active Bias Control of the ADL8106 Using the HMC920

<!-- image -->

Note that Figure 88 indicates a current consumption of 175 mA, which includes the complete current consumption of the circuit, that is, 140 mA drain current for the ADL8106 and an additional 35 mA of I DQ in the HMC920. Also, the PAE for constant drain current bias in Figure 91 assumes a supply voltage of 5 V (the supply voltage to the HMC920) and a constant current of 175 mA.

The HMC920 is not available in die form. If a die-level active bias controller is required, the HMC981 can be used. However, the minimum output voltage that the HMC981 supports is 4 V. As a result, to operate the HMC981 with the ADL8106 at 3 V, insert a small resistor between the HMC981 and the ADL8106 (for example, 6.98 Ω achieves a 1 V drop for a constant drain current of 140 mA).

Figure 88. I DD vs. P IN , V DD = 3 V, Frequency = 36 GHz, Constant Drain Current Bias (140 mA + 35 mA) and Constant Gate Voltage Bias (I DQ = 120 mA)

<!-- image -->

## HMC920 Bias Sequence

When the ADL8106 bias control circuit (HMC920) is set up, the bias can be toggled on and off by applying 3.5 V (high) or 0 V (low) to the EN pin. If EN is left floating, the pin floats high. When EN is set to 3.5 V, gate voltage (V GATE ) initially drops to -2 V and drain voltage (V DRAIN ) rises to 3 V. Then, V GATE and VGG1 voltage (V GG1 ) increase until drain current (I DRAIN ) reaches its target value. The closed control loop then regulates I DRAIN to its target value. When the EN pin goes low, V GATE and V GG1 drop back to -2 V and VDRAIN drops to 0 V.

## Constant Drain Current Biasing vs. Constant Gate Voltage Biasing

In comparison to a constant gate voltage bias, where the current increases dynamically when RF power is applied, constant drain current bias results in constant power consumption.

The performance of the constant drain current circuit is summarized in Figure 88 to Figure 93. (Note that these measurements were performed on the ADL8106 encapsulated in a surface-mount package for convenience). These figures include comparisons with constant gate voltage bias.

The OP1dB and P SAT performance for the constant drain current bias can be varied by varying the drain current setpoint. By increasing the bias current, OP1dB and P SAT improve as shown in Figure 90 and Figure 93. The trade-off with constant drain current is that the drain current is present for all RF input and output power levels.

## APPLICATIONS INFORMATION

<!-- image -->

Figure 89. OP1dB vs. Frequency for Various Temperatures, Data Measured with Constant Drain Current of 140 mA

<!-- image -->

Figure 90. OP1dB vs. Frequency for Various Constant Drain Currents

<!-- image -->

Figure 91. PAE vs. P IN , V DD = 3V, Frequency = 36 GHz, Constant Drain Current Bias (140 mA + 35 mA) and Constant Gate Voltage Bias (I DQ = 120 mA)

Figure 92. P SAT vs. Frequency for Various Temperatures, Data Measured with I DD = 140 mA

<!-- image -->

Figure 93. P SAT vs. Frequency for Various Constant Drain Currents

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 94. Assembly Diagram

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

Figure 95. High Frequency Input Wideband Matching

<!-- image -->

Figure 96. High Frequency Output Wideband Matching

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. Once the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pick up.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## MOUNTING

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## WIRE BONDING

RF bonds made with 0.076 mm × 0.0127 mm (3 mil × 0. 5 mil) gold ribbon is recommended for the RF ports. These bonds must be thermionically bonded with a force of 40 g to 60 g. Thermionically bonded dc bonds of 0.025 mm (1mil) diameter are recommended. Create ball bonds with a force of 40 g to 50 g, and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.203 mm (8 mil).

Alternatively, use short RF bonds that are 0.076 mm to 0.152 mm (3 mil to 6 mil) and made with two 0.025 mm (1 mil) diameter wires.

## OUTLINE DIMENSIONS

Figure 97. 5-Pad Bare Die [CHIP] (C-5-9) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1, 2      | Temperature Range   | Package Description   | Package Option   |
|-----------------|---------------------|-----------------------|------------------|
| ADL8106CHIPS    | -55°C to +85°C      | 5-Pad Bare Die [CHIP] | C-5-9            |
| ADL8106CHIPS-SX | -55°C to +85°C      | Die Sample Pack       | C-5-9            |

<!-- image -->