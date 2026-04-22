<!-- lastmod 2023-02-22 -->
<!-- image -->

## FEATURES

- Gain: 12 dB typical at 10 GHz to 26 GHz
- Input return loss: 14 dB typical at 10 GHz to 26 GHz
- Output return loss: 16 dB typical at 10 GHz to 40 GHz
- OP1dB: 17.5 dB typical at 10 GHz to 26 GHz
- PSAT : 21 dBm typical at 10 GHz to 26 GHz
- OIP3: 28.5 dBm typical at 10 GHz to 26 GHz
- Noise figure: 3.5 dB typical at 10 GHz to 26 GHz
- 5 V supply voltage at 85 mA
- 50 Ω matched input and output
- No external passive components required
- 5.00 mm × 5.00 mm, 24-terminal LGA\_CAV package

## APPLICATIONS

- Test instrumentation
- Military and space

## GENERAL DESCRIPTION

The HMC1126ACEZ is a gallium arsenide (GaAs), pseudomorphic high electron mobility transfer (pHEMT), low noise amplifier that operates from 400 MHz to 52 GHz. The HMC1126ACEZ provides 12 dB of typical gain, 28.5 dBm typical output third-order intercept (OIP3), 17.5 dBm typical output power at 1 dB gain compression (OP1dB), and a 3.5 dB typical noise figure at 10 GHz to 26 GHz. The HMC1126ACEZ requires 85 mA from a 5 V supply. All of

## GaAs, pHEMT, Low Noise Amplifier, 400 MHz to 52 GHz

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

the typically required external passive components for operation (ac coupling capacitors and power supply decoupling capacitors) are integrated, which facilitates a small and compact printed circuit board (PCB) footprint.

The HMC1126ACEZ is housed in a 5.00 mm × 5.00 mm, 24-terminal chip array small outline no lead cavity (LGA\_CAV) package.

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Electrical Specifications.........................................3 400 MHz to 10 GHz Frequency Range..............3 10 GHz to 26 GHz Frequency Range................ 3 26 GHz to 40 GHz Frequency Range................ 4 40 GHz to 52 GHz Frequency Range................ 4 Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5 Electrostatic Discharge (ESD) Ratings...............5   | Pin Configuration and Function Descriptions........ 6 Interface Schematics..........................................6 Typical Performance Characteristics.....................7 Theory of Operation.............................................15 Applications Information...................................... 16 Power-Up and Power-Down Sequencing.........16 Biasing the HMC1126ACEZ With the HMC920LP5E................................................ 17 Constant Drain Current Biasing Vs. Constant Gate Voltage Biasing...................... 19 Outline Dimensions............................................. 21 Ordering Guide.................................................21   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

11/2021-Revision 0: Initial Version

## ELECTRICAL SPECIFICATIONS

## 400 MHZ TO 10 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, V GG 2 = 1 V, and supply current (I DQ ) = 85 mA, unless otherwise stated. Adjust V GG 1 between -2 V and 0 V to achieve I DQ = 85 mA typical.

Table 1.

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                       |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------------------------|
| FREQUENCY RANGE                 | 0.4   |       | 10    | GHz    |                                                                |
| GAIN                            | 10.5  | 12.5  |       | dB     |                                                                |
| Gain Variation over Temperature |       | 0.003 |       | dB/°C  |                                                                |
| RETURN LOSS                     |       |       |       |        |                                                                |
| Input                           |       | 11.5  |       | dB     |                                                                |
| Output                          |       | 13    |       | dB     |                                                                |
| OUTPUT                          |       |       |       |        |                                                                |
| OP1dB                           | 15    | 17.5  |       | dBm    |                                                                |
| Saturated Output Power (P SAT ) |       | 20    |       | dBm    |                                                                |
| OIP3                            |       | 29    |       | dBm    | Output power (P OUT ) per tone = 0 dBm with 1 MHz tone spacing |
| Second-Order Intercept (OIP2)   |       | 31    |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing                 |
| NOISE FIGURE                    |       | 4.0   |       | dB     |                                                                |
| SUPPLY                          |       |       |       |        |                                                                |
| I DQ                            |       | 85    |       | mA     | Adjust V GG 1 to achieve I DQ = 85 mA typical                  |
| V DD                            | 3.3   | 5     |       | V      |                                                                |

## 10 GHZ TO 26 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, V GG 2 = 1 V, and I DQ = 85 mA, unless otherwise stated. Adjust V GG 1 between -2 V and 0 V to achieve I DQ = 85 mA typical.

Table 2.

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 | 10    |       | 26    | GHz    |                                                |
| GAIN                            | 10    | 12    |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.006 |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       | 14    |       | dB     |                                                |
| Output                          |       | 16    |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |       | 17.5  |       | dBm    |                                                |
| P SAT                           |       | 21    |       | dBm    |                                                |
| OIP3                            |       | 28.5  |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| OIP2                            |       | 28    |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       | 3.5   |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       | 85    |       | mA     | Adjust V GG 1 to achieve I DQ = 85 mA typical  |
| V DD                            | 3.3   | 5     |       | V      |                                                |

## ELECTRICAL SPECIFICATIONS

## 26 GHZ TO 40 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, V GG 2 = 1 V, and I DQ = 85 mA, unless otherwise stated. Adjust V GG 1 between -2 V and 0 V to achieve I DQ = 85 mA typical.

Table 3.

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 | 26    |       | 40    | GHz    |                                                |
| GAIN                            | 10.5  | 12.5  |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.007 |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       | 13.5  |       | dB     |                                                |
| Output                          |       | 16    |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |       | 16    |       | dBm    |                                                |
| P SAT                           |       | 20    |       | dBm    |                                                |
| OIP3                            |       | 27    |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       | 4.5   |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       | 85    |       | mA     | Adjust V GG 1 to achieve I DQ = 85 mA typical  |
| V DD                            | 3.3   | 5     |       | V      |                                                |

## 40 GHZ TO 52 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, V GG 2 = 1 V, and I DQ = 85 mA, unless otherwise stated. Adjust V GG 1 between -2 V and 0 V to achieve I DQ = 85 mA typical.

Table 4.

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                       |
|---------------------------------|-------|-------|-------|--------|------------------------------------------------|
| FREQUENCY RANGE                 | 40    |       | 52    | GHz    |                                                |
| GAIN                            |       | 12    |       | dB     |                                                |
| Gain Variation over Temperature |       | 0.01  |       | dB/°C  |                                                |
| RETURN LOSS                     |       |       |       |        |                                                |
| Input                           |       | 7.5   |       | dB     |                                                |
| Output                          |       | 15    |       | dB     |                                                |
| OUTPUT                          |       |       |       |        |                                                |
| OP1dB                           |       | 12.5  |       | dBm    |                                                |
| P SAT                           |       | 17.5  |       | dBm    |                                                |
| OIP3                            |       | 23.5  |       | dBm    | P OUT per tone = 0 dBm with 1 MHz tone spacing |
| NOISE FIGURE                    |       | 6     |       | dB     |                                                |
| SUPPLY                          |       |       |       |        |                                                |
| I DQ                            |       | 85    |       | mA     | Adjust V GG 1 to achieve I DQ = 85 mA typical  |
| V DD                            | 3.3   | 5     |       | V      |                                                |

## ABSOLUTE MAXIMUM RATINGS

| Table 5.                                                                          | Rating          |
|-----------------------------------------------------------------------------------|-----------------|
| V DD                                                                              | 6 V             |
| Gate Bias Voltage                                                                 |                 |
| V GG 1                                                                            | -3 V to 0 V     |
| V GG 2                                                                            |                 |
| For V DD = 3.3 V                                                                  | 0.5 V to 2.5 V  |
| For V DD = 4 V                                                                    | 0.5 V to 3 V    |
| For V DD = 5 V                                                                    | 1.0 V to 4 V    |
| RFIN Power                                                                        | 22 dBm          |
| Continuous Power Dissipation (P DISS ), T A = 85°C (Derate 18.4 mW/°C Above 85°C) | 1.66W           |
| Temperature                                                                       |                 |
| Channel                                                                           | 175°C           |
| Peak Reflow (Moisture Sensitivity Level (MSL) 3) 1                                | 260°C           |
| Storage Range                                                                     | -55°C to +150°C |
| Operating Range                                                                   | -40°C to +85°C  |
| Maximum Channel Temperature                                                       | 175°C           |
| Nominal Channel Temperature (T A = 85°C, V DD = 5 V, I DQ = 85 mA)                | 108°C           |

1 See the Ordering Guide for more information.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to the PCB thermal design is required.

θ JC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 6. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| CE-24-2 1      |   54.3 | °C/W   |

1 θ JC was determined by simulation under the following conditions: the heat transfer is due solely to thermal conduction from the channel, through the ground paddle, to the PCB, and the ground pad is held constant at the operating temperature of 85°C.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## Table 7. HMC1126ACEZ, 24-Terminal LGA\_CAV

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±250                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.                                             | Mnemonic   | Description                                                                                                                            |
|-----------------------------------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 3, 5, 6, 7, 9, 11 to 15, 17, 18, 19, 21 to 24 | GND        | Ground. All the ground pins must be connected to a low impedance ground plane. See Figure 7 for the interface schematic.               |
| 4                                                   | RFIN       | RF Input. RFIN is ac-coupled and matched to 50 Ω. See Figure 3 for the interface schematic.                                            |
| 8                                                   | V GG 1     | Gate Control 1 for the Amplifier. Adjust V GG 1 to achieve I DQ = 85 mA. See Figure 6 for the interface schematic.                     |
| 10                                                  | V GG 2     | Gate Control 2 for the Amplifier. For nominal operation, apply 1 V to V GG 2. See Figure 5 for the interface schematic.                |
| 16                                                  | RFOUT      | RF Output. RFOUT is ac-coupled and matched to 50 Ω. See Figure 4 for the interface schematic.                                          |
| 20                                                  | V DD       | Drain Supply Voltage with Integrated RF Choke. Connect the dc bias to V DD to provide I DQ . See Figure 4 for the interface schematic. |
|                                                     | EPAD       | Exposed Pad. Connect the exposed pad to a ground plane with low thermal and electrical impedance.                                      |

## Table 8. Pin Function Descriptions

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. RFIN Interface Schematic

<!-- image -->

Figure 4. V DD and RFOUT Interface Schematic

<!-- image -->

Figure 5. V GG 2 Interface Schematic

Figure 6. V GG 1 Interface Schematic

<!-- image -->

Figure 7. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

I DQ is the drain current without the RF signal applied, and I DD is the drain current with the RF signal applied.

<!-- image -->

Figure 8. Low Frequency Gain and Return Loss vs. Frequency, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V (S22 Is the Output Return Loss, S21 Is the Gain, and S11 Is the Input Return Loss)

<!-- image -->

Figure 9. Gain vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 10. Input Return Loss vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 11. Gain and Return Loss vs. Frequency, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

Figure 12. Output Return Loss vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 13. Gain vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Input Return Loss vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 15. Output Return Loss vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 16. Gain vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

<!-- image -->

Figure 17. Input Return Loss vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

Figure 18. Output Return Loss vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

<!-- image -->

Figure 19. Gain vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 20. Input Return Loss vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 21. Output Return Loss vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 22. Low Frequency OP1dB vs. Frequency at Various Temperatures, VDD  = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 23. OP1dB vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

Figure 24. OP1dB vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

<!-- image -->

Figure 25. OP1dB vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 26. OP1dB vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 27. P SAT vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 28. Low Frequency P SAT vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 29. P SAT vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

Figure 30. P SAT vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 31. P SAT vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 32. P OUT , Gain, Power Added Efficiency (PAE), and I DD vs. Input Power at 2 GHz, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 33. P OUT , Gain, PAE, and I DD vs. Input Power at 26 GHz, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 34. P OUT , Gain, PAE, and I DD vs. Input Power at 50 GHz, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 35. P DISS vs. Input Power at 85°C for Various Frequencies, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

Figure 36. Drain Current vs. Gate Voltage, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 37. OIP3 vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 38. Low Frequency OIP3 vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 39. OIP3 vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

<!-- image -->

Figure 40. OIP3 vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 41. OIP3 vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

Figure 42. Third-Order Intermodulation (IM3) vs. P OUT per Tone at Various Frequencies, V DD = 3.3 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 43. IM3 vs. P OUT per Tone at Various Frequencies, V DD = 4 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 44. IM3 vs. P OUT per Tone at Various Frequencies, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 45. OIP2 vs. Frequency at Various V DD Voltages, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 46. Low Frequency OIP2 vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 47. OIP2 vs. Frequency at Various V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

Figure 48. OIP2 vs. Frequency at Various I DQ Currents, V DD = 5 V, V GG 2 = 1 V

<!-- image -->

Figure 49. OIP2 vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 50. Noise Figure vs. Frequency at Various V DD Voltages, I DQ = 85 mA, VGG2 = 1 V

<!-- image -->

Figure 51. Low Frequency Noise Figure vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 52. Noise Figure vs. Frequency at V GG 2 Voltages, V DD = 5 V, I DQ = 85 mA

<!-- image -->

Figure 53. Noise Figure vs. Frequency at Various I DQ Currents, V DD = 5 V, VGG2 = 1 V

Figure 54. Noise Figure vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

Figure 55. Reverse Isolation vs. Frequency at Various Temperatures, V DD = 5 V, I DQ = 85 mA, V GG 2 = 1 V

<!-- image -->

## THEORY OF OPERATION

The HMC1126ACEZ is a GaAs, pHEMT, low noise amplifier.

The low noise amplifier uses a fundamental cell of two field effect transistors (FETs), as shown in Figure 56. This fundamental cell is duplicated a number of times, thereby increasing the operational bandwidth.

The negative V GG 1 sets the supply current, and the voltage on VGG2 ensures that there are approximately equal dc voltages across the top and bottom FETs. The RFIN and RFOUT pins are ac-coupled and matched to 50 Ω. V DD is applied through an integrated choke. The 0.1 μF and 100 pF decoupling capacitors are integrated. As a result, no external passive components are required for operation.

Figure 56. Simplified Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

Figure 57 shows the basic connections for operating the HMC1126ACEZ. Because the RFIN and RFOUT pins are internally ac-coupled, no external ac coupling is required. Because V DD , VGG1, and V GG 2 are internally decoupled, no external components are required on these pins. Figure 57 shows the configuration used to characterize and qualify the device.

See the HMC1126-EVALZ user guide for information on using the evaluation board.

## POWER-UP AND POWER-DOWN SEQUENCING

To avoid damaging the device, careful attention must be paid to the power-up and power-down sequencing of the RF input, the gate bias voltages, and the drain bias voltage.

## Power-Up

The following power-up sequencing is recommended:

1. Connect GND to ground.
2. Set V GG 1 to -2 V.
4. Set V GG 2 to 1 V.
3. Set V DD to 5 V.
5. Increase V GG 1 to achieve an I DQ = 85 mA.
6. Apply the RF signal.

## Power-Down

The following power-down sequencing is recommended:

1. Turn off the RF signal.
2. Decrease V GG 1 to -2 V to achieve an I DQ = 0 mA.
4. Decrease V DD to 0 V.
3. Decrease V GG 2 to 0 V.
5. Increase V GG 1 to 0 V.

Figure 57. Basic Connections

<!-- image -->

## APPLICATIONS INFORMATION

## BIASING THE HMC1126ACEZ WITH THE HMC920LP5E

The HMC920LP5E (see Figure 58) is designed to provide active bias control for enhancement mode and depletion mode amplifiers, such as the HMC1126ACEZ. The HMC920LP5E measures and regulates drain current to compensate for temperature changes and part to part variations.

Figure 58. Functional Diagram of the HMC920LP5E

<!-- image -->

Additionally, the HMC920LP5E properly sequences gate and drain voltages to ensure safe on and off operation and offers circuit self protection in the event of a short circuit. The active bias controller contains an internal charge pump that generates the negative voltage needed to drive the V GG 1 pin on the HMC1126ACEZ. Alternatively, an external negative voltage can be provided.

For more information regarding the use of the HMC920LP5E, refer to the HMC920LP5E data sheet and the AN-1363 Application Note.

## Application Circuit Setup

Figure 58 shows the application circuit for bias control of the HMC1126ACEZ using the HMC920LP5E. The current through the HMC920LP5E is measured, and the VGATE output voltage serves until the setpoint drain current is achieved. The various external components around the HMC920LP5E are set as follows in this section.

The target drain current must first be determined and set. This current must be set based on the maximum drain current required during operation, including when the device is generating the maximum expected output power. In this case, a target drain current of 120 mA was chosen. Set the target value by attaching a 2.05 kΩ ground referenced resistor to the ISENSE pin (Pin 25) on the HMC920LP5E.

To ensure adequate headroom, the supply voltage for the HMC920LP5E must be set higher than the target drain voltage to the HMC1126ACEZ (5 V). Accordingly, VDD1 and VDD2 on the HMC920LP5E are set to 5.3 V.

The voltage on the LDOCC pin (Pin 29) on the HMC920LP5E drives the VDRAIN pins which in turn drive the V DD pin of the HMC1126ACEZ. Because the LDOCC output is connected to the VDRAIN output through an internal metal-oxide semiconductor field effect transistor (MOSFET) switch with an on resistance of 0.5 Ω, the LDOCC voltage (V LDOCC ) must be set slightly higher than the target drain voltage to the HMC1126ACEZ. To determine the required LDOCC voltage, use the following equation:

VLDOCC = VDRAIN + IDRAIN × 0.5

Therefore, VLDOCC = 5 V+ (0.12 × 0.5) = 5.06 V.

To set V LDOCC to 5.06 V, use the following equation with R5 set to 10 kΩ:

R10 = ( R5 /2) × ( VLDOCC - 2)

Therefore, R10 = (10000/2) × (5.06 - 2) = 15.3 kΩ.

## Setting VGG1 and VGG2

The V GG 2 fixed bias voltage is set to 1 V using a resistor divider that is derived from VDD1 and VDD2 on the HMC920LP5E. Because the current into the V GG 2 pin is low (&lt;1 mA), large resistor values in the kΩ range can be used to set the V GG 2 voltage and save on overall current usage.

The recommended minimum voltage for V GG 1 into the HMC1126ACEZ is -2 V, which is also the default value for the VNEGIN pin on the HMC920LP5E. As a result, there is no need to adjust the VNEGIN and VGATE voltages.

Refer to the HMC920LP5E data sheet for the detailed schematic.

## APPLICATIONS INFORMATION

Figure 59. Application Circuit Using the HMC920LP5E with the HMC1126ACEZ (Additional Circuitry Omitted for Clarity)

<!-- image -->

## HMC920LP5E Bias Sequence

When the HMC920LP5E bias control circuit is set up, the HMC1126ACEZ bias can be toggled on and off by applying 3.5 V (high) or 0 V (low) to the EN pin of the HMC920LP5E. If EN is left floating, the pin floats high. When EN is set to 3.5 V, VGATE initially drops to -2 V, and VDRAIN rises to 5 V. Then, VGATE and V GG 1 increase until IDRAIN equals 120 mA. The closed control loop then regulates IDRAIN to 120 mA. When the EN pin goes low, VGATE and V GG 1 drop back to -2 V and VDRAIN drops to 0 V.

## APPLICATIONS INFORMATION

## CONSTANT DRAIN CURRENT BIASING VS. CONSTANT GATE VOLTAGE BIASING

## Voltage Biasing

The HMC920LP5E uses closed loop feedback to continuously adjust VGATE to maintain a constant drain current bias over the dc supply variation, temperature, and part to part variations. Constant drain current bias is an ideal method for reducing time in calibration procedures and maintaining consistent performance over time.

In comparison to a constant gate voltage bias, where the current increases dynamically when the RF power is applied, a constant drain current bias results in constant power consumption.

The OP1dB performance for the constant drain current bias can be varied by varying the bias setpoint. By increasing the bias current, OP1dB increases, as shown in Figure 66. The trade-off with a constant drain current is that this higher drain current is present for all RF input and output power levels.

The current and temperature limit of I DD under the constant current operation is usually set by the thermal limitations detailed in the Absolute Maximum Ratings section (see the continuous power dissipation specification in Table 5). Increasing I DD does not indefinitely increase OP1dB. Therefore, consider the trade-off between the power dissipation and OP1dB performance when using a constant drain current bias.

The performance of the constant drain current circuit is summarized in Figure 60 to Figure 67. These figures include comparisons with a constant gate voltage bias. Note that Figure 60 indicates a current consumption of 140 mA, which includes the complete current consumption of the circuit, that is, 120 mA drain current for the HMC1126ACEZ and an additional 20 mA of quiescent current in the HMC920LP5E. Using 140 mA as the current consumption also results in lower PAE compared to a constant gate voltage bias.

<!-- image -->

Figure 60. I DD vs. Input Power, V DD = 5 V, Frequency = 26 GHz, Constant Drain Current Bias (I DD = 140 mA) and Constant Gate Voltage Bias

<!-- image -->

Figure 61. Output Power vs. Input Power, V DD = 5 V, Frequency = 26 GHz, Constant Drain Current Bias (I DD = 140 mA) and Constant Gate Voltage Bias

Figure 62. PAE vs. Input Power, V DD = 5 V, Frequency = 26 GHz,Constant Drain Current Bias (I DD = 140 mA) and Constant Gate Voltage Bias

<!-- image -->

Figure 63. OP1dB vs. Frequency, V DD =5 V, Constant Drain Current Bias (I DD = 140 mA) and Constant Gate Voltage Bias

<!-- image -->

## APPLICATIONS INFORMATION

<!-- image -->

Figure 64. OP1dB vs. Frequency for Various Temperatures, Data Measured with Constant Drain Current

<!-- image -->

Figure 65. P SAT vs. Frequency for Various Temperatures,Data Measured with Constant Drain Current

Figure 66. OP1dB vs. Frequency for Various Drain Currents, Data Measured with Constant Drain Current Bias

<!-- image -->

Figure 67. P SAT vs. Frequency for Various Drain Currents,Data Measured with Constant Drain Current Bias

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1        | Temperature Range   | Package Description                           | Packing Quantity   | Package Option   |
|----------------|---------------------|-----------------------------------------------|--------------------|------------------|
| HMC1126ACEZ    | -40°C to +85°C      | 24-terminal LGA_CAV (15 mm x 15 mm x 1.60 mm) | Reel, 100          | CE-24-2          |
| HMC1126ACEZ-R7 | -40°C to +85°C      | 24-terminal LGA_CAV (15 mm x 15 mm x 1.60 mm) | Reel, 100          | CE-24-2          |

## EVALUATION BOARDS

| Model 1, 2    | Description      |
|---------------|------------------|
| HMC1126-EVALZ | Evaluation Board |

<!-- image -->

Figure 68. 24-Terminal Chip Array Small Outline No Lead Cavity [LGA\_CAV] 5.00 mm × 5.00 mm Body and 1.60 mm Package Height (CE-24-2)

<!-- image -->

Dimensions shown in millimeters

Updated: February 13, 2023