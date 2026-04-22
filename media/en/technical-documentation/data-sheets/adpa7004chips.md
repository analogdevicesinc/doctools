<!-- lastmod 2023-08-25 -->
<!-- image -->

## ADPA7004CHIPS

## 40 GHz to 80 GHz, GaAs, pHEMT, MMIC, Wideband Power Amplifier

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

upper band of 75 GHz to 80 GHz, the ADPA7004CHIPS provides a gain of 16 dB (typical), an output IP3 of 31.5 dBm, and an output P1dB of 20.5 dBm. The ADPA7004CHIPS requires 550 mA from a 3.5 V supply. The ADPA7004CHIPS amplifier input and output are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the RFIN and RFOUT pads connected via one 0.076 mm (3 mil) ribbon bond of 0.076 mm (3 mil) minimal length.

## FEATURES

- Gain: 18.5 dB typical at 45 GHz to 75 GHz
- Input return loss: 20.0 dB typical at 45 GHz to 75 GHz
- Output return loss: 22.0 dB typical at 45 GHz to 75 GHz
- Output P1dB: 22.0 dBm typical at 45 GHz to 75 GHz
- PSAT : 24.0 dBm typical at 45 GHz to 75 GHz
- Output IP3: 31.0 dBm typical at 45 GHz to 75 GHz
- Supply voltage: 3.5 V at 550 mA
- 50 Ω matched input and output
- Die size: 2.940 mm × 3.320 mm × 0.05 mm

## APPLICATIONS

- Test instrumentation
- Military and space
- Telecommunications infrastructure

## GENERAL DESCRIPTION

The ADPA7004CHIPS is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), balanced medium power amplifier, with an integrated temperature compensated on-chip power detector that operates from 40 GHz to 80 GHz. In the lower band of 40 GHz to 45 GHz, the ADPA7004CHIPS provides a gain of 17 dB typical, an output third-order intercept (IP3) of 30.5 dBm, and output power for 1 dB gain compression (P1dB) of 21.5 dBm. In the

## TABLE OF CONTENTS

| Features................................................................ 1 Applications...........................................................    | Theory                  | Typical Performance Characteristics.....................8 of                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                       | 1                       | Operation.............................................14                                                                                     |
| Functional Block Diagram......................................1                                                                                       |                         | Applications Information...................................... 15                                                                            |
| General Description...............................................1                                                                                   | Power-Up and Power-Down | Sequencing.........15                                                                                                                        |
| Specifications........................................................                                                                                | 3                       | Power-Up Sequence........................................15                                                                                  |
| 40 GHz to 45 GHz Frequency Range................                                                                                                      | 3                       | Power-Down Sequence....................................15                                                                                    |
| 45 GHz to 75 GHz Frequency Range................                                                                                                      | 3                       | RF Detector Operation.....................................15                                                                                 |
| 75 GHz to 80 GHz Frequency Range................                                                                                                      | 3                       | Assembly Diagram...........................................16                                                                                |
| Absolute Maximum Ratings...................................5                                                                                          |                         | Mounting and Bonding Techniques for                                                                                                          |
| Thermal Resistance........................................... 5                                                                                       | Millimeterwave GaAs     | MMICs.........................17                                                                                                             |
| Electrostatic Discharge (ESD) Ratings...............5                                                                                                 |                         | Handling Precautions.......................................17                                                                                |
| ESD Ratings for ADPA7004CHIPS....................5                                                                                                    |                         | Mounting...........................................................18                                                                        |
| ESD Caution.......................................................5                                                                                   |                         | Wire Bonding....................................................18                                                                           |
| Pin Configuration and Function Descriptions........ 6                                                                                                 | Outline                 | Dimensions............................................. 19                                                                                   |
| Interface Schematics..........................................6                                                                                       |                         | Ordering Guide.................................................19                                                                            |
| REVISION HISTORY                                                                                                                                      |                         |                                                                                                                                              |
| 8/2023-Rev. A to Rev. B                                                                                                                               |                         |                                                                                                                                              |
| Changes to Table                                                                                                                                      |                         | 4..........................................................................................................................................5 |
| 11/2022-Rev. 0 to Rev. A                                                                                                                              |                         |                                                                                                                                              |
| Updated Outline Dimensions.........................................................................................................................19 |                         |                                                                                                                                              |

1/2021-Revision 0: Initial Version

## ADPA7004CHIPS

## SPECIFICATIONS

## 40 GHZ TO 45 GHZ FREQUENCY RANGE

Die bottom temperature (T DIE BOTTOM ) = 25°C, drain bias voltage (V DD ) = V DD 1A and V DD 1B = V DD 2A and V DD 2B = V DD 3A and V DD 3B = V DD4A and V DD 4B = 3.5 V, and I DQ 1x + I DQ 2x + I DQ 3x + I DQ 4x = 550 mA, unless otherwise noted. Note that I DQ 1x, I DQ 2x, I DQ 3x, and I DQ 4x are the I DQ for V DD 1x, V DD 2x, V DD 3x, V DD 4x, respectively, where x stands for A and B. Adjust V GG 1234A from -1.5 V to 0 V to achieve the desired supply current (I DQ ). The typical gate bias voltage (V GG ) = -0.4 V for I DQ = 550 mA.

Table 1.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                        |
|-----------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------------------|
| FREQUENCY RANGE                   |          | 40    |       | 45    | GHz    |                                                                 |
| GAIN                              |          |       | 17    |       | dB     |                                                                 |
| Gain Variation over Temperature   |          |       | 0.023 |       | dB/°C  |                                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                                 |
| Input                             | S11      |       | 18    |       | dB     |                                                                 |
| Output                            | S22      |       | 23    |       | dB     |                                                                 |
| OUTPUT                            |          |       |       |       |        |                                                                 |
| Output Power for 1 dB Compression | P1dB     |       | 21.5  |       | dBm    |                                                                 |
| Saturated Output Power            | P SAT    |       | 23.5  |       | dBm    |                                                                 |
| Output Third-Order Intercept      | IP3      |       | 30.5  |       | dBm    | Output power (P OUT ) per tone = 12 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                                 |
| Current                           | I DQ     |       | 550   |       | mA     | Adjust V GG to achieve I DQ = 550 mA typical                    |
| Voltage                           | V DD     | 3     | 3.5   | 4     | V      |                                                                 |

## 45 GHZ TO 75 GHZ FREQUENCY RANGE

TDIE BOTTOM = 25°C, V DD = V DD 1A and V DD 1B = V DD 2A and V DD 2B = V DD 3A and V DD 3B = V DD 4A and V DD 4B = 3.5 V and I DQ 1x + I DQ 2x + I DQ 3x + I DQ 4x = 550 mA, unless otherwise noted. Adjust V GG 1234A from -1.5 V to 0 V to achieve the desired I DQ . The typical V GG  = -0.4 V for I DQ = 550 mA.

Table 2.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                        |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                   |          | 45    |       | 75    | GHz    |                                                 |
| GAIN                              |          | 15    | 18.5  |       | dB     |                                                 |
| Gain Variation over Temperature   |          |       | 0.023 |       | dB/°C  |                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                 |
| Input                             | S11      |       | 20.0  |       | dB     |                                                 |
| Output                            | S22      |       | 22.0  |       | dB     |                                                 |
| OUTPUT                            |          |       |       |       |        |                                                 |
| Output Power for 1 dB Compression | P1dB     | 20    | 22.0  |       | dBm    |                                                 |
| Saturated Output Power            | P SAT    |       | 24.0  |       | dBm    |                                                 |
| Output Third-Order Intercept      | IP3      |       | 31.0  |       | dBm    | P OUT per tone = 12 dBm with 1 MHz tone spacing |
| Current                           | I DQ     |       | 550   |       | mA     | Adjust V GG to achieve I DQ = 550 mA typical    |
| Voltage                           | V DD     | 3     | 3.5   | 4     | V      |                                                 |

## 75 GHZ TO 80 GHZ FREQUENCY RANGE

TDIE BOTTOM = 25°C, V DD = V DD 1A and V DD 1B = V DD 2A and V DD 2B = V DD 3A and V DD 3B = V DD 4A and V DD 4B = 3.5 V, and I DQ 1x + I DQ 2x + I DQ 3x + I DQ 4x = 550 mA, unless otherwise noted. Adjust V GG 1234A from -1.5 V to 0 V to achieve the desired I DQ . The typical V GG  = -0.4 V for I DQ = 550 mA.

## SPECIFICATIONS

## Table 3.

| Parameter                         | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                        |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------|
| FREQUENCY RANGE                   |          | 75    |       | 80    | GHz    |                                                 |
| GAIN                              |          | 13    | 16    |       | dB     |                                                 |
| Gain Variation over Temperature   |          |       | 0.023 |       | dB/°C  |                                                 |
| RETURN LOSS                       |          |       |       |       |        |                                                 |
| Input                             | S11      |       | 25.0  |       | dB     |                                                 |
| Output                            | S22      |       | 21.0  |       | dB     |                                                 |
| OUTPUT                            |          |       |       |       |        |                                                 |
| Output Power for 1 dB Compression | P1dB     | 18    | 20.5  |       | dBm    |                                                 |
| Saturated Output Power            | P SAT    |       | 22.0  |       | dBm    |                                                 |
| Output Third-Order Intercept      | IP3      |       | 31.5  |       | dBm    | P OUT per tone = 12 dBm with 1 MHz tone spacing |
| SUPPLY                            |          |       |       |       |        |                                                 |
| Current                           | I DQ     |       | 550   |       | mA     | Adjust V GG to achieve I DQ = 550 mA typical    |
| Voltage                           | V DD     | 3     | 3.5   | 4     | V      |                                                 |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                                                      | Rating                  |
|-----------------------------------------------------------------------------------------------|-------------------------|
| V DD V GG                                                                                     | 4.5 V -2 V DC to 0 V DC |
| RF Input Power (RFIN)                                                                         | 18 dBm                  |
| Continuous Power Dissipation (P DISS ), at T DIE BOTTOM = 85°C (Derate 33.3 mW/°C Above 85°C) | 3.04W                   |
| Temperature                                                                                   |                         |
| Storage Range (Ambient)                                                                       | -65°C to +150°C         |
| Operating Range (Die Bottom)                                                                  | -55°C to +85°C          |
| Maximum Channel Temperature                                                                   | 175°C                   |
| Nominal Channel Temperature (T DIE BOTTOM = 85°C, V DD = 3.5 V, I DQ = 550 mA)                | 142°C                   |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to printed circuit board (PCB) thermal design is required.

θ JC is the channel to case thermal resistance, channel to bottom of die attach epoxy.

| Table 5. Package   |   θ JC | Unit   |
|--------------------|--------|--------|
| C-16-4             |   29.6 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## ESD RATINGS FOR ADPA7004CHIPS

## Table 6. ADPA7004CHIPS, 16-Pad CHIP

| ESD Model   | Withstand Threshold (V)   |   Class |
|-------------|---------------------------|---------|
| HBM         | ±125                      |       0 |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pad Configuration

| Pad No.        | Mnemonic                           | Description                                                                                                                                                                                                                                                           |
|----------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1              | RFIN                               | RF Input. This pad is ac-coupled and matched to 50 Ω. See Figure 3 for the interface schematic.                                                                                                                                                                       |
| 2, 6           | V GG 1234A                         | Gate Bias Voltage Pads for the First, Second, Third, and Fourth Stage Amplifiers. See Figure 4 for the interface schematic.                                                                                                                                           |
| 3, 4, 5, 7     | V DD 1A, V DD 2A, V DD 3A, V DD 4A | Top Edge Drain Bias Voltage Pads for the Amplifiers. External bypass capacitors are required on the V DD 1A, V DD 2A, V DD 3A, and V DD 4A pads. Connect the V DD 1A, V DD 2A, V DD 3A, and V DD 4A pads to a 3.5 V supply. See Figure 5 for the interface schematic. |
| 8              | RFOUT                              | RF Output. This pad is ac-coupled and matched to 50 Ω. See Figure 9 for the interface schematic.                                                                                                                                                                      |
| 9              | V DET                              | DC Voltage Representing the RF Output Power. The voltage is rectified by the diode that is biased through external resistor. See Figure 9 for the interface schematic.                                                                                                |
| 10             | V REF                              | Reference DC Voltage for the Temperature Compensation of the V DET diode. See Figure 10 for the interface schematic.                                                                                                                                                  |
| 11, 13, 14, 15 | V DD 4B, V DD 3B, V DD 2B, V DD 1B | Bottom Edge Drain Bias Voltage Pads for Amplifiers. External bypass capacitors are required on the V DD 4B, V DD 3B, V DD 2B, and V DD 1B pads. Connect the V DD 4B, V DD 3B, V DD 2B, and V DD 1B pads to a 3.5 V supply. See Figure 7 for the interface schematic.  |
| 12, 16         | V GG 1234B                         | Gate Bias Voltage Pads for the First, Second, Third, and Fourth Stage Amplifiers, Alternative Bias Configuration. See Figure 8 for the interface schematic.                                                                                                           |
| Die Bottom     | GND                                | Ground. Die bottom must be connected to RF and DC ground. See Figure 6 for the interface schematic.                                                                                                                                                                   |

Table 7. Pad Function Descriptions

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 9. RFOUT and V DET Interface Schematic

<!-- image -->

Figure 10. V REF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. Broadband Gain and Return Loss vs. Frequency

<!-- image -->

Figure 12. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 13. Gain vs. Frequency at Various Supply Currents

<!-- image -->

Figure 14. Gain vs. Frequency at Various Drain Bias Voltages

Figure 15. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 16. Input Return Loss vs. Frequency at Various Supply Currents

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 17. Input Return Loss vs. Frequency at Various Drain Bias Voltages

<!-- image -->

Figure 18. Output Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 19. Output P1dB vs. Frequency at Various Temperatures

<!-- image -->

Figure 20. Output Return Loss vs. Frequency at Various Drain Bias Voltages

Figure 21. Output Return Loss vs. Frequency at Various Supply Currents

<!-- image -->

Figure 22. P SAT vs. Frequency at Various Temperatures

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 23. Output P1dB vs. Frequency at Various Supply Currents

<!-- image -->

Figure 24. Output P1dB vs. Frequency at Various Drain Bias Voltages

<!-- image -->

Figure 25. Output IP3 vs. Frequency at Various Temperatures

<!-- image -->

Figure 26. P SAT vs. Frequency at Various Supply Currents

Figure 27. P SAT vs. Frequency at Various Drain Bias Voltages

<!-- image -->

Figure 28. Output IP3 vs. Frequency at Various Drain Bias Voltages

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 29. Output IP3 vs. Frequency at Various Supply Currents

<!-- image -->

Figure 30. Third-Order Intermodulation (IM3) vs. P OUT per Tone at Various Frequencies at V DD = 3 V, I DQ = 550 mA

<!-- image -->

Figure 31. IM3 vs. P OUT per Tone at Various Frequencies at V DD = 3.5 V, I DQ = 550 mA

<!-- image -->

Figure 32. IM3 vs. P OUT per Tone at Various Frequencies at V DD = 4 V, I DQ = 550 mA

Figure 33. Gate Current vs. RF Input Power at Various Frequencies

<!-- image -->

Figure 34. Drain Current vs. RF Input Power at Various Frequencies

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 35. P DISS vs. Input Power at 85°C at Various Frequencies, V DD = 3.5 V, I DQ = 550 mA

<!-- image -->

Figure 36. P DISS vs. Input Power at 85°C at Various Frequencies, V DD = 4 V, I DQ = 550 mA

<!-- image -->

Figure 37. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 38. Detector Voltage (V REF - V DET ) vs. Output Power at Various Temperatures at 40 GHz

Figure 39. V REF - V DET vs. Output Power at Various Temperatures at 50 GHz

<!-- image -->

Figure 40. V REF - V DET vs. Output Power at Various Temperatures at 60 GHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 41. V REF - V DET vs. Output Power at Various Temperatures at 70 GHz

<!-- image -->

Figure 42. V REF - V DET vs. Output Power at Various Temperatures at 80 GHz

Figure 43. Noise Figure vs. Frequency at 25°C

<!-- image -->

Figure 44. Typical Drain Current vs. Gate Voltage at 25°C

<!-- image -->

## THEORY OF OPERATION

Figure 45 shows a simplified block diagram of ADPA7004CHIPS. The ADPA7004CHIPS consists of two cascaded, four-stage amplifiers, operating in quadrature between two 90° hybrids. This balanced approach forms an amplifier with a combined gain of 17 dB and a P SAT of 23.5 dBm. The 90° hybrids ensure that the input and output return losses are excellent.

All gate bias voltages pads (V GG 1234x) are internally connected together. The drain bias pads (V DD xA through V DD xB) are internally connected together in four pairs of two with each pair providing bias current for one amplifier stage. In the case of the gate bias, the gate bias voltage can be applied to a single pad. However, in the case of the eight V DD xA and V DD xB drain bias pad connections, all eight pads must be used to minimize voltage drops. See Figure 46 and Figure 47 for further details on biasing the various blocks.

A portion of the RF output signal (RFOUT) is directionally coupled to a diode for detection of the RF output power. When the diode is DC biased, the diode rectifies the RF power and makes this power available for measurement as a DC voltage at V DET . To allow temperature compensation of V DET , the reference DC voltage detected through an identical diode that is not coupled to the RF power is available on the V REF pad. The difference of V REF -VDET provides a temperature compensated detector voltage that is proportional to the RF output power (see Figure 38 to Figure 42).

Figure 45. Simplified Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

Basic connections for operating the ADPA7004CHIPS are shown in Figure 46 and Figure 47. There are eight V DD xA and V DD xB drain bias pads. To minimize voltage drops in bond wires and on die traces, all eight pads (V DD xA through V DD xB) must be used. Each V DD xA and V DD xB line has a 100 pF decoupling capacitor with adjacent pads sharing larger decoupling capacitors. The power supply decoupling capacitors shown in Figure 46 represent the configuration that was used to characterize and qualify the device. It may be possible to reduce the number of capacitors, but the scope varies from system to system. It is recommended to first remove or combine the largest capacitors that are farthest from the device.

All four gate bias voltages pads (V GG 1234x) are internally connected. In contrast to the V DD xA through V DD xB drain bias lines, the gate bias voltage can be applied through a single pad on either the north or the south side of the die. Figure 46 shows the gate bias voltage applied through the V GG 1234B pins on the south side of the die, and Figure 47 shows the gate bias voltage applied to the VGG1234A pins on the north side of the die. In both cases, a single 100 pF capacitor must be connected to one of the gate bias pads on the unused side.

## POWER-UP AND POWER-DOWN SEQUENCING

To prevent damage to the ADPA7004CHIPS, follow the power-up and power-down sequences.

## POWER-UP SEQUENCE

Take the following steps to power up the device:

Table 8. DC Power Consumption Selection Table

1. Connect all grounds.
2. Set the gate bias voltages (V GG 1234x) to -1.5 V.
4. Increase the gate bias voltages (V DD xA through V DD xB) to achieve I DQ = 550 mA.
3. Set the drain bias voltages (V DD xA through V DD xB) to 3.5 V.
5. Apply the RF signal.

## POWER-DOWN SEQUENCE

Take the following steps to power down the device:

1. Turn off the RF signal.
2. Decrease the gate bias voltages (V GG 1234x) to -1.5 V to reduce I DQ to approximately 0 mA.
4. Increase the gate bias voltages (V GG 1234x) to 0 V.
3. Reduce the drain bias voltages (V DD xA through V DD xB) to 0 V.

The V DD = 3.5 V and I DQ = 550 mA bias conditions are recommended to optimize overall performance. Table 8 summarizes the performance at 60 GHz at other drain current settings along with the DC quiescent power consumption (DC power consumption increases with RF applied). In this case, higher drain current slightly increases output IP3 but has minimal impact on output P1dB.

## RF DETECTOR OPERATION

To achieve a temperature stable RF detector output voltage (V OUT ), subtract the voltage on the V DET pad from the voltage on the V REF pad, which can be done by using the differential op-amp circuit shown in Figure 46 and Figure 47.

|   I DQ (mA) 1, 2 |   Gain (dB) |   Output P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) |   V GG (V) |
|------------------|-------------|---------------------|--------------------|--------------|------------|
|              450 |        16.4 |                22   |               30.1 |          1.6 |       -0.5 |
|              550 |        18   |                22.2 |               31   |          1.9 |       -0.4 |
|              650 |        19.5 |                22.2 |               31.9 |          2.3 |       -0.3 |

## APPLICATIONS INFORMATION

Figure 46. Basic Connections for Operation with Gate Bias Control on South Side of Die

<!-- image -->

Figure 47. Basic Connections for Operation with Gate Bias Control on North Side of Die

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 48 shows the recommended assembly diagram for the ADPA7004CHIPS.

## APPLICATIONS INFORMATION

Figure 48. Assembly Diagram with Gate Bias Control on South Side of Die

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with high thermal conductivity epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Microstrip, 50 Ω transmission lines on 0.127 mm (5 mil) thick alumina, thin film substrates are recommended for bringing the RF to and from the chip. Raise the die 0.076 mm (3 mil) to ensure that the surface of the die is coplanar with the surface of the substrate.

Place microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm (3 mil). To ensure wideband matching, a 15 fF capacitive stub is recommended on the transmission line before the ribbon bond.

Figure 49. High Frequency Input Matching

<!-- image -->

Figure 50. High Frequency Output Matching

<!-- image -->

## HANDLING PRECAUTIONS

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle-based or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chip in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.

## APPLICATIONS INFORMATION

- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The surface of the chip has fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## MOUNTING

Before epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## WIRE BONDING

RF bonds made with 0.003 in. × 0.0005 in. gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. DC bonds of 0.001 in. (0.025 mm) diameter, thermosonically bonded, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 12 mil (0.31 mm).

Alternatively, short (≤3 mil) RF bonds made with two 1 mil wires can be used.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description   | Package Option   |
|-----------------|---------------------|-----------------------|------------------|
| ADPA7004CHIPS   | -55°C to +85°C      | CHIPS OR DIE          | C-16-4           |
| ADPA7004CHIP-SX | -55°C to +85°C      | CHIPS OR DIE          | C-16-4           |

<!-- image -->

Figure 51. 16-Pad Bare Die [CHIP] (C-16-4) Dimensions shown in millimeters

<!-- image -->

Updated: July 12, 2023