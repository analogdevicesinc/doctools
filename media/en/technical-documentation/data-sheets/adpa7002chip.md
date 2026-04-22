<!-- lastmod 2023-07-24 -->
<!-- image -->

## Data Sheet

## ADPA7002CHIP

## GaAs, pHEMT, MMIC, 1/2 W, 20 GHz to 44 GHz, Power Amplifier

## FEATURES

- Output P1dB: 28 dBm (typical at 34 GHz to 44 GHz)
- PSAT : 30 dBm (typical at 20 GHz to 34 GHz)
- Gain: 15 dB (typical at 34 GHz to 44 GHz)
- IP3: 40 dBm (typical)
- Supply voltage: 5 V at 600 mA
- Die size: 2.75 mm × 1.805 mm × 0.1 mm

## APPLICATIONS

- Military and space
- Test instrumentation

## GENERAL DESCRIPTION

The ADPA7002CHIP is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), distributed power amplifier that operates from 20 GHz to 44 GHz. The amplifier provides 15 dB of small signal gain, 28 dBm output power at 1 dB gain compression (P1dB), and a typical output third-order intercept (IP3) of 40 dBm. The amplifier requires 600 mA from a 5 V supply on V DD1B , V DD2B , and V DD3B . The ADPA7002CHIP also features inputs/outputs (I/Os) that are internally matched to 50 Ω, and facilitates integration into multichip modules (MCMs). All data is taken with the on substrate chip connected via two wire bonds that are 0.025 mm (1 mil) wide and 0.31 mm (12 mils) long.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## Data Sheet

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 20 GHz to 34 GHz Frequency Range................ 3 34 GHz to 44 GHz Frequency Range................ 3 Absolute Maximum Ratings...................................4 Thermal Resistance........................................... 4 ESD Caution.......................................................4 Pin Configuration and Function Descriptions........ 5 Interface Schematics..........................................5 Typical Performance Characteristics.....................6   | Constant Drain Current (I DD ) Operation........... 13 Theory of Operation.............................................14 ADPA7002CHIP Assembly and Circuit Diagrams........................................................15 Alternate Assembly Diagram............................16 Biasing Procedures..........................................17 Biasing the ADPA7002CHIP with the HMC980LP4E................................................ 17 Mounting and Bonding Techniques for Millimeter Wave GaAs MMICs........................20 Outline Dimensions............................................. 22 Ordering Guide.................................................22   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 7/2023-Rev. C to Rev. Changes to Table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 47.................................................................................................................................... 12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| D                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 3..........................................................................................................................................4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Changes to Figure                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## ADPA7002CHIP

## SPECIFICATIONS

## 20 GHZ TO 34 GHZ FREQUENCY RANGE

TA = 25°C, drain voltage (V DD ) = 5 V, and quiescent drain current (I DQ ) = 600 mA for nominal operation, unless otherwise noted.

Table 1.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                       |
|-----------------------------------|----------|-------|-------|-------|--------|----------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 20    |       | 34    | GHz    |                                                                |
| GAIN                              |          | 15    | 17    |       | dB     |                                                                |
| Gain Flatness                     |          |       | ±0.5  |       | dB     |                                                                |
| Gain Variation over Temperature   |          |       | 0.012 |       | dB/°C  |                                                                |
| NOISE FIGURE                      |          |       | 6     |       | dB     |                                                                |
| RETURN LOSS                       |          |       |       |       |        |                                                                |
| Input                             |          |       | 20    |       | dB     |                                                                |
| Output                            |          |       | 20    |       | dB     |                                                                |
| OUTPUT                            |          |       |       |       |        |                                                                |
| Output Power for 1 dB Compression | P1dB     | 26    | 28.5  |       | dBm    |                                                                |
| Saturated Output Power            | P SAT    |       | 30    |       | dBm    |                                                                |
| Output Third-Order Intercept      | IP3      |       | 40    |       | dBm    | Measurement taken at output power (P OUT ) per tone = 14 dBm   |
| SUPPLY                            |          |       |       |       |        |                                                                |
| Quiescent Drain Current           | I DQ     |       | 600   |       | mA     | Adjust V GG1 between -1.5 V to 0 V to achieve the desired I DQ |
| Drain Voltage                     | V DD     | 4     | 5     |       | V      |                                                                |

## 34 GHZ TO 44 GHZ FREQUENCY RANGE

TA = 25°C, V DD = 5 V, and I DQ = 600 mA for nominal operation, unless otherwise noted.

Table 2.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                       |
|-----------------------------------|----------|-------|-------|-------|--------|----------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 34    |       | 44    | GHz    |                                                                |
| GAIN                              |          | 12    | 15    |       | dB     |                                                                |
| Gain Flatness                     |          |       | ±0.7  |       | dB     |                                                                |
| Gain Variation over Temperature   |          |       | 0.024 |       | dB/°C  |                                                                |
| NOISE FIGURE                      |          |       | 5     |       | dB     |                                                                |
| RETURN LOSS                       |          |       |       |       |        |                                                                |
| Input                             |          |       | 25    |       | dB     |                                                                |
| Output                            |          |       | 16    |       | dB     |                                                                |
| OUTPUT                            |          |       |       |       |        |                                                                |
| Output Power for 1 dB Compression | P1dB     | 25    | 28    |       | dBm    |                                                                |
| Saturated Output Power            | P SAT    |       | 28.5  |       | dBm    |                                                                |
| Output Third-Order Intercept      | IP3      |       | 40    |       | dBm    | Measurement taken at P OUT per tone = 14 dBm                   |
| SUPPLY                            |          |       |       |       |        |                                                                |
| Quiescent Drain Current           | I DQ     |       | 600   |       | mA     | Adjust V GG1 between -1.5 V to 0 V to achieve the desired I DQ |
| Drain Voltage                     | V DD     | 4     | 5     |       | V      |                                                                |

## ABSOLUTE MAXIMUM RATINGS

| Table 3.                                                                          |                         |
|-----------------------------------------------------------------------------------|-------------------------|
| Parameter                                                                         | Rating                  |
| V DDx                                                                             | 6.0 V                   |
| V GG1                                                                             | -1.6 V to 0 V           |
| RF Input Power (RFIN)                                                             | 25 dBm                  |
| Continuous Power Dissipation (P DISS ), T A = 85°C (Derate 75.2 mW/°C above 85°C) | 6.77W                   |
| Temperature                                                                       |                         |
| Storage Range                                                                     | -65°C to +150°C         |
| Operating Range                                                                   | -55°C to +85°C          |
| Nominal Junction (T A = 85°C, V DD = 5 V, I DQ = 600 mA)                          | 124.9°C                 |
| Maximum Channel Temperature                                                       | 175°C                   |
| Electrostatic Discharge (ESD) Sensitivity                                         |                         |
| Human Body Model (HBM)                                                            | Class 0A (passed 125 V) |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to printed circuit board (PCB) thermal design is required.

θ JC is the channel to case thermal resistance, channel to bottom of die.

## Table 4. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-22-3 1       |   13.3 | °C/W   |

1 θ JC was determined by simulation under the following conditions: the heat transfer is due solely to thermal conduction from the channel through the ground pad to the PCB, and the ground pad is held constant at the operating temperature of 85°C.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 5. Pad Function Descriptions

| Pad No.                    | Mnemonic                 | Description                                                                                                                                                                                                                                                                                                                            |
|----------------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                          | RFIN                     | RF Signal Input. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                           |
| 2, 4, 7, 9, 14, 16, 19, 21 | DNB                      | Do Not Bond. These pads are not bonded.                                                                                                                                                                                                                                                                                                |
| 3                          | V GG1A                   | Gate Control for the Amplifier. V GG1A is used with the alternate assembly configuration. External bypass capacitors of 4.7 µF and 0.01 µF are required (see Figure 57).                                                                                                                                                               |
| 5, 6, 8                    | V DD1A , V DD2A , V DD3A | Drain Biases for the Amplifier. V DD1A , V DD2A , and V DD3A, are used with the alternate assembly configuration. External bypass capacitors of 4.7 µF and 0.01 µF are required (see Figure 57).                                                                                                                                       |
| 10                         | V REF                    | Reference Diode for Temperature Compensation of V DET RF Output Power Measurements.                                                                                                                                                                                                                                                    |
| 11, 22, Die Bottom         | GND                      | Grounds. These pads and the die bottom must be connected to RF and dc ground.                                                                                                                                                                                                                                                          |
| 12                         | RFOUT                    | RF Signal Output. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                                          |
| 13                         | V DET                    | Detector Diode to Measure RF Output Power. Output power detection via this pad requires the application of a dc bias voltage through an external series resistor. Used in combination with the V REF pad, the difference voltage (V REF - V DET ) is a temperature compensated dc voltage that is proportional to the RF output power. |
| 15, 17, 18                 | V DD1B , V DD2B , V DD3B | Drain Biases for the Amplifier. External bypass capacitors of 4.7 µF and 0.01 µF are required (see Figure 53).                                                                                                                                                                                                                         |
| 20                         | V GG1B                   | Gate Control for the Amplifier. External bypass capacitors of 4.7 µF and 0.01 µF are required (see Figure 53).                                                                                                                                                                                                                         |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. V REF Interface Schematic

<!-- image -->

Figure 5. V DET Interface Schematic

<!-- image -->

Figure 6. RFIN Interface Schematic

<!-- image -->

Figure 7. V GG1A and V GG1B Schematic

Figure 8. RFOUT Interface Schematic

<!-- image -->

Figure 9. V DD1A , V DD2A , V DD3A, V DD1B , V DD2B , and V DD3B Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Where I DQ = I DD (drain current) = RF signal applied to I DQ .

<!-- image -->

Figure 10. Gain and Return Loss vs. Frequency

<!-- image -->

Figure 11. Gain vs. Frequency for Various Drain Voltages

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, V DD = 5 V, I DQ = 600 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures

Figure 14. Gain vs. Frequency for Various Quiescent Drain Currents

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Drain Voltages

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various Quiescent Drain Currents

<!-- image -->

Figure 17. Output Return Loss vs. Frequency for Various Drain Voltages

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperatures

Figure 20. Output Return Loss vs. Frequency for Various Quiescent Drain Currents

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. Output P1dB vs. Frequency for Various Temperatures

<!-- image -->

Figure 23. Output P1dB vs. Frequency for Various Quiescent Drain Currents

<!-- image -->

Figure 24. P SAT vs. Frequency for Various Drain Voltages

<!-- image -->

Figure 25. Output P1dB vs. Frequency for Various Drain Voltages

Figure 26. P SAT vs. Frequency for Various Temperatures

<!-- image -->

Figure 27. P SAT vs. Frequency for Various Quiescent Drain Currents

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 28. Power Added Efficiency (PAE) vs. Frequency over Temperature, PAE Measured at P SAT

<!-- image -->

Figure 29. PAE vs. Frequency for Various Quiescent Drain Currents, PAE Measured at P SAT

<!-- image -->

Figure 30. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 26 GHz

<!-- image -->

Figure 31. PAE vs. Frequency for Various Drain Voltages, PAE Measured at PSAT

Figure 32. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 22 GHz

<!-- image -->

Figure 33. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 30 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 34. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 34 GHz

<!-- image -->

Figure 35. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 42 GHz

<!-- image -->

Figure 36. Output IP3 vs. Frequency for Various Drain Currents, P OUT per Tone = 12 dBm

<!-- image -->

Figure 37. P OUT , Gain, PAE, and I DD vs. Input Power, Frequency = 38 GHz

Figure 38. Power Dissipation vs. Input Power, T A = 85°C

<!-- image -->

Figure 39. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 12 dBm, I DD = 600 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 40. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 12 dBm, I DD = 700 mA

<!-- image -->

Figure 41. Output IP3 vs. Frequency for Various Drain Voltages, P OUT per Tone = 12 dBm

<!-- image -->

Figure 42. Drain Current vs. Input Power over Various Frequencies

<!-- image -->

Figure 43. Output IP3 vs. Frequency for Various Temperatures, P OUT per Tone = 12 dBm, I DD = 800 mA

Figure 44. Output Third-Order Intermodulation (IM3) vs. P OUT per Tone for Various Frequencies at V DD = 5 V

<!-- image -->

Figure 45. Output IM3 vs. P OUT per Tone for Various Frequencies at V DD = 4 V (Specifically Tested at Minimum Voltage)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 46. Quiescent Drain Current vs. Gate Voltage

<!-- image -->

Figure 47. V REF - V DET vs. Output Power at Various Temperatures, Frequency = 32 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## CONSTANT DRAIN CURRENT (IDD) OPERATION

TA = 25°C, V DD = 5 V, I DD setpoint = 800 mA for nominal operation, unless otherwise noted. Figure 48 through Figure 51 are biased with the HMC980LP4E active bias controller. See the Biasing the ADPA7002CHIP with the HMC980LP4E section for biasing details.

<!-- image -->

Figure 48. Output P1dB vs. Frequency for Various Temperatures, Data Measured with Constant I DD

<!-- image -->

Figure 49. P SAT vs. Frequency for Various Temperatures, Data Measured with Constant I DD

Figure 50. Output P1dB vs. Frequency for Various Currents, Data Measured with Constant I DD

<!-- image -->

Figure 51. P SAT vs. Frequency for Various Currents, Data Measured with Constant I DD

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7002CHIP, a medium power amplifier, is shown in Figure 52. The ADPA7002CHIP uses a cascaded, three-stage amplifier operating in quadrature between two 90° hybrids.

The input signal is evenly divided into two. Each input signal is amplified through three independent gain stages and the amplified signals are combined at the output. This balanced amplifier approach creates an amplifier with a combined gain of 15 dB and a PSAT value of 30 dBm.

A portion of the RF output signal is directionally coupled to a diode to detect the RF output power (see Figure 52). When the diode is dc biased, the diode rectifies the RF power and makes the

RF power available for measurement as a dc voltage at the V DET pin. Temperature compensation is accomplished by referencing a symmetrical diode circuit that is not coupled to the RF output that contains a dc voltage output, at the V REF pin as shown in Figure 56. The difference of V REF - V DET provides a temperature compensated signal that is proportional to the RF output.

The 90° hybrids ensure that the input and output return losses are &gt;12 dB. See the application circuits in Figure 53 and Figure 54 for further details on biasing the various blocks.

To obtain optimal performance from the ADPA7002CHIP and avoid damaging the device, follow the recommended biasing sequences described in the Biasing Procedures section.

Figure 52. Fundamental Cell Schematic

<!-- image -->

## THEORY OF OPERATION

## ADPA7002CHIP ASSEMBLY AND CIRCUIT DIAGRAMS

<!-- image -->

Figure 53. Assembly Diagram

<!-- image -->

Figure 54. Typical Application Circuit

Figure 55. Simplified Internal ADPA7002CHIP Block Diagram

<!-- image -->

Figure 56. Power Detector Circuit

<!-- image -->

## THEORY OF OPERATION

## ALTERNATE ASSEMBLY DIAGRAM

The ADPA7002CHIP die is symmetric and can be biased from either the north side or the south side (see Figure 57) with equivalent performance.

Figure 57. Alternate Assembly Diagram

<!-- image -->

## THEORY OF OPERATION

## BIASING PROCEDURES

The ADPA7002CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all V GGxx and V DDxx pads (see Figure 54). Figure 53 shows the internal connections of the bypass capacitors.

VGG1A and V GG1B are the gate bias pads (see Figure 55). V DD1A and V DD1B are the drain bias pads for the first stage, V DD2A and VDD2B are the drain bias pad for the second stage, and V DD3A and VDD3B are drain bias pads for the third stage (see Figure 55).

All measurements for this device are taken using the typical application circuit (see Figure 54) and configured as shown in the assembly diagram (see Figure 53).

Adhere to the following bias sequence during power-up:

1. Connect GND to RF and dc ground.
2. Set the V GGxA or V GGxB voltage to -1.5 V.
4. Increase the gate bias voltage to achieve I DQ = 600 mA.
3. Set all drain bias voltages, V DDxA or V DDxB = 5 V.
5. Apply the RF signal.

Adhere to the following bias sequence during power-down:

1. Turn off the RF signal.
2. Decrease the V GG1A or V GG1B voltage to -1.5 V to achieve I DQ = 0 mA (approximately).
4. Decrease the V GGxA or V GGxB voltage to 0 V.
3. Decrease all V DDxA or V DDxB drain bias voltages to 0 V.

Simplified bias pad connections to dedicated gain stages are shown in Figure 54.

Table 6. Power Selection Table 1, 2

|   I DQ (mA) |   Gain (dB) |   P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) |   V GG1 (V) |
|-------------|-------------|--------------|--------------------|--------------|-------------|
|         600 |        17.2 |        30.04 |               40.6 |          3   |       -0.73 |
|         700 |        17.7 |        30.24 |               38.7 |          3.5 |       -0.67 |
|         800 |        18   |        30.25 |               37   |          4   |       -0.62 |

The V DD = 5 V and I DQ = 600 mA recommended bias conditions are to optimize overall performance. Unless otherwise noted, the data shown in the Typical Performance Characteristics section is taken using the recommended bias conditions. Operating the ADPA7002CHIP at different bias conditions can provide performance that differs from what is shown in Table 1 and Table 2. Table 6 shows how gain, OP1dB, and OIP3 vary with the bias current at 34 GHz.

## BIASING THE ADPA7002CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller that is designed to meet the bias requirement for depletion mode amplifiers like the ADPA7002CHIP. The HMC980LP4E provides constant current biasing over temperature and device to device variation.

Additionally, the HMC980LP4E properly sequences gate and drain voltages to ensure safe amplifier operation, and offers self protection in the event of a short circuit. The active bias controller contains an internal charge pump that generates negative voltage that is needed for the ADPA7002CHIP gate and that can also be used as an external negative voltage source.

For more information regarding the usage of HMC980LP4E, refer to the HMC980LP4E data sheet and the AN-1363 application note.

Figure 58. Functional Diagram of HMC980LP4E

<!-- image -->

## Application Circuit Setup

Figure 59 shows a schematic of an application circuit of the HMC980LP4E used with the ADPA7002CHIP biased at 920 mA. In this circuit, the negative gate control voltage is generated by HMC980LP4E. Figure 60 shows an application circuit using an external negative supply.

In the application circuit, the ADPA7002CHIP drain voltage and drain current are set by the following equations:

VDRAIN = VDD - ( IDRAIN × 0.85 Ω)

VDRAIN = 5.78 V - (920 mA × 0.85 Ω)

VDRAIN = 5 V

and

IDRAIN = (150 Ω)/( R10

)

IDRAIN = (150 Ω)/(163 Ω)

IDRAIN = 0.920 A

where:

## THEORY OF OPERATION

VDD is the supply voltage to the HMC980LP4E. IDRAIN is the output current from Pin 17 and Pin 18 on the HMC980LP4E. In this example, an IDRAIN setpoint of 920 mA was chosen. The IDRAIN setpoint must be set high enough to ensure that the desired output P1dB and the maximum RF output power levels can be reached (see Figure 30 through Figure 37 for the relationship between the drain current and the RF output power at various frequencies). The performance of this circuit is shown in Figure 63 to Figure 66.

## Limiting VGATE to Meet ADPA7002CHIP VGGx AMR Requirement

When using the ADPA7002CHIP with the HMC980LP4E, limit the minimum voltages for VNEG and VGATE to -1.5 V to keep the voltages within the absolute maximum ratings (AMR) limit for the ADPA7002CHIP V GGx pad. This is accomplished by setting the R15 resistor and the R16 resistor to the values shown in Figure 59 and Figure 60. Refer to the AN-1363 application note for more information and calculations for R15 and R16.

Figure 59. Application Circuit Using the HMC980LP4E with the ADPA7002CHIP

<!-- image -->

Figure 60. Application Circuit Using the HMC980LP4E with the ADPA7002CHIP as an External Negative Voltage Source

<!-- image -->

## HMC980LP4E Bias Sequence

Proper dc supply sequencing is required to prevent damage to HMC980LP4E. Adhere to the following power-up sequence steps:

1. Set VDIG, the voltage supply input (Pin 9) for the HMC980LP4E digital circuit (see Figure 60) to 3.3 V.
2. Set S0, the digital control pin (Pin 3) that sets the internal field effect transistor (FET) and the internal HMC980LP4E resistor (RDS) resistance (see Figure 60) to 3.3 V.

## THEORY OF OPERATION

3. Set the V DD pin to 5.78 V.
4. Set VNEG to -1.5 V. This step is not needed if using internally generated voltage.
5. Set the EN pad to 3.3 V. Transitioning from 0 V to 3.3 V turns on the VGATE and VDRAIN pads.

Adhere to the following power-down sequence steps:

1. Set the EN pad to 0 V. Transitioning from 3.3 V to 0 V turns off the VDRAIN and VGATE pads.
2. Set VNEG to 0 V. This step is not required if using internally generated voltage.
3. Set the V DD pin to 0 V.
4. Set S0 to 0 V.
5. Set VDIG to 0 V.

When the HMC980LP4E bias control circuit has been set up, the ADPA7002CHIP bias can be toggled on and off by applying 3.3 V or 0 V to the EN pad. If EN is set to +3.3 V, VGATE drops to -1.5 V and VDRAIN is turned on at +5 V. VGATE rises in voltage until IDRAIN equals 920 mA. The closed control loop then regulates IDRAIN at 920 mA. When the EN pad equals 0 V, VGATE is automatically set to -1.5 V and VDRAIN is set to 0 V (see Figure 61 and Figure 62).

Figure 61. Turn On-HMC980LP4E Outputs to the ADPA7002CHIP

<!-- image -->

Figure 62. Turn Off-HMC980LP4E Outputs to the ADPA7002CHIP

<!-- image -->

## Constant Drain Current Bias vs. Constant Gate Voltage Bias

The HMC980LP4E uses closed-loop feedback to continuously adjust VGATE to maintain a constant drain current bias over dc supply variation, temperature and part to part variation. Constant drain current bias is an excellent method for reducing time in calibration procedures and to maintain consistent performance over time.

In comparison to a constant gate voltage bias, where the current increases when the RF power is applied, this constant drain current circuit example has a slightly lower output P1dB. This effect can be seen in Figure 66. RF performance is lower for the constant drain current bias due to the drain current being lower at high input power levels.

The output P1dB for the constant drain current bias can increase if the bias current setpoint is increased. By increasing the bias current, the output P1dB increases up to the RF drive in the constant gate voltage bias condition shown in Figure 64. The trade-off with this approach is that this higher drain current is present for all RF input and output power levels

The current and temperature limit of I DD under the constant current operation is usually set by the thermal limitations found in Table 3 in the Absolute Maximum Ratings section along with the maximum power dissipation specification. Increasing the I DD does not indefinitely increase the output P1dB as the power dissipation increases. Therefore, consider the trade-off between power dissipation and output P1dB performance when using constant drain current bias.

## THEORY OF OPERATION

<!-- image -->

Figure 63. I DD vs. Input Power (P IN ) for Constant Gate Voltage Bias and Constant Drain Current Bias, V DD = 5 V, Frequency = 32 GHz

<!-- image -->

Figure 64. P OUT vs. P IN for Constant Gate Voltage Bias and Constant Drain Current Bias, V DD = 5 V, Frequency = 32 GHz

Figure 65. PAE vs. P IN for Constant Gate Voltage Bias and Constant Drain Current Bias, V DD = 5 V, Frequency = 32 GHz

<!-- image -->

Figure 66. Output P1dB vs. Frequency for Constant Gate Voltage Bias and Constant Drain Current Bias, V DD = 5 V

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETER WAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, Mounting section, and Wire Bonding section for instructions).

Microstrip, 50 Ω transmission lines on 0.127 mm (5 mil) thick alumina, thin film substrates are recommended to send the RF to and from the chip. Raise the die 0.075 mm (3 mil) to ensure that the surface of the die is coplanar with the surface of the substrate.

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil). To ensure wideband matching, a 15 fF capacitive stub is recommended to be placed on the PCB board before the ribbon bond. See Figure 67 and Figure 68 for details.

Figure 67. High Frequency Input Wideband Matching

<!-- image -->

## THEORY OF OPERATION

Figure 68. High Frequency Output Wideband Matching

<!-- image -->

## Handling Precautions

To avoid permanent damage to the die, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- When the bias is applied, suppress instrument and bias supply transients. Use a shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The chip surface has fragile air bridges and must not be touched with a vacuum collet, tweezers, or fingers.

## Mounting

Before the epoxy die is attached to the ADPA7002CHIP, apply a minimum amount of epoxy (must order separately) to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 0.003 inch × 0.0005 inch gold ribbon are recommended to be used with the RF ports. These bonds must be thermosonically bonded with a force between 40 g to 60 g . DC bonds of 0.001 inch (0.025 mm) in diameter, thermosonically bonded, are recommended for bond wire connections. Create ball bonds with a force between 40 g to 50 g , and wedge bonds with a force between 18 g to 22 g . Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 12 mil (0.31 mm).

Alternatively, short (≤3 mil) RF bonds made with two 1 mil wires can be used in place of the gold ribbon.

## OUTLINE DIMENSIONS

Figure 69. 22-Pad Bare Die [CHIP] (C-22-3) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1, 2    | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| ADPA7002CHIP  | -55°C to +85°C      | CHIPS OR DIE          | C-22-3           |
| ADPA7002C-KIT | -55°C to +85°C      | CHIPS OR DIE          | C-22-3           |

<!-- image -->