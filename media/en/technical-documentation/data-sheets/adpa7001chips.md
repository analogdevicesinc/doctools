<!-- lastmod 2019-10-24 -->
<!-- image -->

Data Sheet

## FEATURES

Gain: 14.5 dB typical at 50 GHz to 70 GHz S11: 22 dB typical at 50 GHz to 70 GHz S22: 19 dB typical at 50 GHz to 70 GHz P1dB: 17 dBm typical at 50 GHz to 70 GHz PSAT: 21 dBm typical OIP3: 25 dBm typical at 70 GHz to 90 GHz Supply voltage: 3.5 V at 350 mA 50 Ω matched input/output

Die size: 2.5 mm × 3.32 mm × 0.05 mm

## APPLICATIONS

Test instrumentation Military and space Telecommunications infrastructure

## GENERAL DESCRIPTION

The ADPA7001CHIPS is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), balanced medium power amplifier, with an integrated temperature compensated on-chip power detector that operates from 50 GHz to 95 GHz. In the lower band of 50 GHz to 70 GHz, the ADPA7001CHIPS provides 14.5 dB (typical) of gain, 25.5 dBm output third-order intercept (OIP3), and 17 dBm of output power for 1 dB gain compression.

## 50 GHz to 95 GHz, GaAs, pHEMT, MMIC,

## Wideband Power Amplifier

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

In the upper band of 70 GHz to 90 GHz, the ADPA7001CHIPS provides 14 dB (typical) of gain, 25 dBm output IP3, and 17.5 dBm of output power for 1 dB gain compression. The ADPA7001CHIPS requires 350 mA from a 3.5 V supply. The ADPA7001CHIPS amplifier inputs/outputs are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data is taken with the chip connected via one 0.076 mm (3 mil) ribbon bond of 0.076 mm (3 mil) minimal length.

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   |
|-----------------------------------------------------------------------------------------------------------|
| Applications.......................................................................................       |
| Functional Block Diagram ..............................................................                   |
| General Description.........................................................................              |
| Revision History ...............................................................................          |
| Specifications.....................................................................................       |
| 50 GHz to 70 GHz Frequency Range.........................................                                 |
| 70 GHz to 90 GHz Frequency Range.........................................                                 |
| 90 GHz to 95 GHz Frequency Range.........................................                                 |
| Absolute Maximum Ratings............................................................                      |
| Thermal Resistance ......................................................................                 |
| ESD Caution..................................................................................             |

## REVISION HISTORY

10/2019-Rev. A to Rev. B

Added Figure 19 and Figure 22; Renumbered Sequentially ....... 9

## 3/2019-Rev. 0 to Rev. A

Changes to Figure 44  ...................................................................... 16

| Pin Configuration and Function Descriptions..............................6                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------|
| Interface Schematics .....................................................................7                                                    |
| Typical Performance Characteristics ..............................................8                                                            |
| Theory of Operation ...................................................................... 13                                                  |
| Applications Information.............................................................. 14                                                      |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.............................................................................. 14 |
| Typical Application Circuit....................................................... 16                                                          |
| Assembly Diagram..................................................................... 17                                                       |
| Outline Dimensions....................................................................... 18                                                   |
| Ordering Guide .......................................................................... 18                                                   |

8/2018-Revision 0: Initial Version

## SPECIFICATIONS

## 50 GHz TO 70 GHz FREQUENCY RANGE

TDIE BOTTOM = 25°C, VDD = VDD1A = VDD2A = VDD3A = VDD4A = 3.5 V and supply current (IDQ) = IDQ1A + IDQ2A + IDQ3A + IDQ4A = 350 mA, unless otherwise noted. Adjust VGG = VGG12A = VGG34A from -1.5 V to 0 V to achieve the desired IDQ. Typical VGG = -0.5 V for IDQ = 350 mA.

## Table 1.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                      |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------------------------|
| FREQUENCY RANGE                   |          |    50 |       |    70 | GHz    |                                                               |
| GAIN                              |          |  12.5 |  14.5 |       | dB     |                                                               |
| Gain Variation over Temperature   |          |       |  0.02 |       | dB/°C  |                                                               |
| RETURN LOSS                       |          |       |       |       |        |                                                               |
| Input                             | S11      |       |    22 |       | dB     |                                                               |
| Output                            | S22      |       |    19 |       | dB     |                                                               |
| OUTPUT                            |          |       |       |       |        |                                                               |
| Output Power for 1 dB Compression | P1dB     |  15.5 |    17 |       | dBm    |                                                               |
| Saturated Output Power            | P SAT    |       |    21 |       | dBm    |                                                               |
| Output Third-Order Intercept      | OIP3     |       |  25.5 |       | dBm    | Output power (P OUT ) per tone = 0 dBmwith 1 MHz tone spacing |
| INPUT                             |          |       |       |       |        |                                                               |
| Input Third-Order Intercept       | IIP3     |       |  11.5 |       | dBm    | P OUT per tone = 0 dBmwith 1 MHz tone spacing                 |
| SUPPLY                            |          |       |       |       |        |                                                               |
| Current                           | I DQ     |       |   350 |   400 | mA     | AdjustV GG to achieve I DQ = 350 mAtypical                    |
| Voltage                           | V DD     |   1.5 |   3.5 |   4.0 | V      |                                                               |

## 70 GHz TO 90 GHz FREQUENCY RANGE

TDIE BOTTOM = 25°C, VDD = VDD1A = VDD2A = VDD3A = VDD4A = 3.5 V and IDQ = IDQ1A + IDQ2A + IDQ3A + IDQ4A = 350 mA, unless otherwise noted. Adjust VGG = VGG12A = VGG34A from -1.5 V to 0 V to achieve the desired IDQ. Typical VGG = -0.5 V for IDQ = 350 mA.

## Table 2.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                   |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                   |          |    70 |       |    90 | GHz    |                                            |
| GAIN                              |          |    12 |    14 |       | dB     |                                            |
| Gain Variation over Temperature   |          |       |  0.02 |       | dB/°C  |                                            |
| RETURN LOSS                       |          |       |       |       |        |                                            |
| Input                             | S11      |       |    18 |       | dB     |                                            |
| Output                            | S22      |       |    13 |       | dB     |                                            |
| OUTPUT                            |          |       |       |       |        |                                            |
| Output Power for 1 dB Compression | P1dB     |    16 |  17.5 |       | dBm    |                                            |
| Saturated Output Power            | P SAT    |       |    21 |       | dBm    |                                            |
| Output Third-Order Intercept      | OIP3     |       |    25 |       | dBm    | P OUT pertone=0dBmwith1MHztonespacing      |
| INPUT                             |          |       |       |       |        |                                            |
| Input Third-Order Intercept       | IIP3     |       |    11 |       | dBm    | P OUT pertone=0dBmwith1MHztonespacing      |
| SUPPLY                            |          |       |       |       |        |                                            |
| Current                           | I DQ     |       |   350 |   400 | mA     | AdjustV GG to achieve I DQ = 350 mAtypical |
| Voltage                           | V DD     |   1.5 |   3.5 |   4.0 | V      |                                            |

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

## 90 GHz TO 95 GHz FREQUENCY RANGE

TDIE BOTTOM = 25°C, VDD = VDD1A = VDD2A = VDD3A = VDD4A = 3.5 V , and IDQ = IDQ1A + IDQ2A + IDQ3A + IDQ4A = 350 mA, unless otherwise noted. Adjust VGG = VGG12A = VGG34A from -1.5 V to 0 V to achieve the desired IDQ. Typical VGG = -0.5 V for IDQ = 350 mA.

## Table 3.

| Parameter                       | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                   |
|---------------------------------|----------|-------|-------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 |          |    90 |       |    95 | GHz    |                                            |
| GAIN                            |          |       |    15 |       | dB     |                                            |
| Gain Variation over Temperature |          |       |  0.02 |       | dB/°C  |                                            |
| RETURN LOSS                     |          |       |       |       |        |                                            |
| Input                           | S11      |       |    15 |       | dB     |                                            |
| Output                          | S22      |       |    12 |       | dB     |                                            |
| SUPPLY                          |          |       |       |       |        |                                            |
| Current                         | I DQ     |       |   350 |   400 | mA     | AdjustV GG to achieve I DQ = 350 mAtypical |
| Voltage                         | V DD     |   1.5 |   3.5 |   4.0 | V      |                                            |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                                      | Rating          |
|------------------------------------------------------------------------------------------------|-----------------|
| Drain Bias Voltage (V DD )                                                                     | 4.5V            |
| Gate Bias Voltage (V GG )                                                                      | -2V to 0V dc    |
| Radio Frequency (RF) Input Power (RFIN)                                                        | 17 dBm          |
| Continuous Power Dissipation (P DISS ), at T DIE BOTTOM = 85°C (Derate 26.95 mW/°C Above 85°C) | 2.4W            |
| Storage Temperature Range (Ambient)                                                            | -65°C to +150°C |
| Operating Temperature Range (Die Bottom)                                                       | -55°C to +85°C  |
| ESD Sensitivity Human Body Model (HBM)                                                         | Class 0 125V    |
| Channel Temperature to Maintain 1 Million Hour MeanTime to Failure (MTTF)                      | 175°C           |
| Nominal Channel Temperature at T DIE BOTTOM = 85°C,VDD = 3.5V                                  | 130.4°C         |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required. θJC is the junction-to-case thermal resistance.

## Table 5. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| C-16-2        |   37.1 | °C/W   |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

16895-002

Figure 2. Pad Configuration

<!-- image -->

Table 6. Pad Function Descriptions

| Pad No.    | Mnemonic         | Description                                                                                                                                                                                                                       |
|------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RFIN             | RF Input. This pad is ac-coupled and matched to 50 Ω. See Figure 3 for the interface schematic.                                                                                                                                   |
| 2          | V GG 12A         | Gate Control Pad for the First and Second Stage Amplifiers. See Figure 4 for the interface schematic.                                                                                                                             |
| 3, 4       | V DD 1A, V DD 2A | Drain BiasVoltage Pads for the First and Second Stage Amplifiers. External bypass capacitors of 100 pF, 0.1 µF, and 4.7 µFare required onthese pads.Connect these pads to a 3.5V supply. See Figure 5for the interface schematic. |
| 5          | V GG 34A         | Gate Control Pad for the Third and Fourth Stage Amplifiers. See Figure 4 for the interface schematic.                                                                                                                             |
| 6, 7       | V DD 3A, V DD 4A | Drain BiasVoltage Pads for theThird and Fourth Stage Amplifiers. External bypass capacitors of 100 pF, 0.1 µF, and 4.7 µFare required onthese pads.Connect these pads to a 3.5V supply. See Figure 5for the interface schematic.  |
| 8          | RFOUT            | RF Output. This pad is ac-coupled and matched to 50 Ω. See Figure 9 for the interface schematic.                                                                                                                                  |
| 9          | V DET            | DCVoltage Representing the RF Output Power. This pad is rectified by the diode that is biased through an external resistor. See Figure 9 for the interface schematic.                                                             |
| 10         | V REF            | DCVoltage of the Diode. This pad is biased through an external detector circuit used for temperature compensation ofV DET . See Figure 10 for the interface schematic.                                                            |
| 11, 12     | V DD 4B, V DD 3B | Drain Bias Voltage Pads for the Fourth andThird Stage Alternative Bias Configuration. External bypass capacitors of 100 pF, 0.1 µF, and 4.7 µF are required. See Figure 7 for the interface schematic.                            |
| 13         | V GG 34B         | Gate Control Pad for the Third and Fourth Stage Alternative Bias Configuration. Coupling capacitors are required. See Figure 8 for the interface schematic.                                                                       |
| 14, 15     | V DD 2B, V DD 1B | Drain Bias Voltage Pads for the Second and First Stage Alternative Bias Configuration. External bypass capacitors of 100 pF, 0.1 µF, and 4.7 µF are required. See Figure 7 for the interface schematic.                           |
| 16         | V GG 12B         | Gate Control Pad for the First and Second Stage Alternative Bias Configuration. Coupling capacitors are required. See Figure 8 for the interface schematic.                                                                       |
| Die Bottom | GND              | Ground. Die bottom must be connected to RF/dc ground. See Figure 6 for the interface schematic.                                                                                                                                   |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. RFIN Interface Schematic

<!-- image -->

Figure 4. VGG12A and VGG34A Interface Schematic

<!-- image -->

Figure 5. VDD1A to VDD4A Interface Schematic

<!-- image -->

Figure 6. GND Interface Schematic

<!-- image -->

Figure 7. VDD1B to VDD4B Interface Schematic

<!-- image -->

Figure 8. VGG12B and VGG34B Interface Schematic

Figure 9. RFOUT and VDET Interface Schematic

<!-- image -->

Figure 10. VREF Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 11. Broadband Gain and Return Loss vs. Frequency

<!-- image -->

Figure 12. Gain vs. Frequency for Various Temperatures

<!-- image -->

Figure 13. Gain vs. Frequency for Various IDQ Values

<!-- image -->

Figure 14. Gain vs. Frequency for Various VDD Values

Figure 15. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various IDQ Values

<!-- image -->

<!-- image -->

Figure 17. Input Return Loss vs. Frequency for Various VDD Values

<!-- image -->

Figure 18. Output Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 19. P1dB vs. Frequency at Various Temperatures

<!-- image -->

Figure 20. Output Return Loss vs. Frequency for Various VDD Values

Figure 21. Output Return Loss vs. Frequency for Various IDQ Values

<!-- image -->

Figure 22. PSAT vs. Frequency at Various Temperatures

<!-- image -->

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

<!-- image -->

Figure 23. P1dB vs. Frequency for Various IDQ Values

<!-- image -->

Figure 24. P1dB vs. Frequency for Various VDD Values

Figure 25. IIP3 vs. Frequency at Various Temperatures

<!-- image -->

Figure 26. PSAT vs. Frequency for Various IDQ Values

<!-- image -->

16895-027

Figure 27. PSAT vs. Frequency for Various VDD Values

<!-- image -->

Figure 28. IIP3 vs. Frequency for Various IDQ Values

<!-- image -->

<!-- image -->

Figure 29. IIP3 vs. Frequency for Various VDD Values

<!-- image -->

Figure 30. OIP3 vs. Frequency at Various Temperatures

<!-- image -->

Figure 31. OIP3 vs. Frequency for Various IDQ Values

<!-- image -->

Figure 32. OIP3 vs. Frequency for Various VDD Values

Figure 33. PDISS vs. Input Power at 85°C for Various Frequencies

<!-- image -->

Figure 34. Drain Supply Current vs. RF Input Power for Various Frequencies

<!-- image -->

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

<!-- image -->

Figure 35. Reverse Isolation vs. Frequency at Various Temperatures

<!-- image -->

Figure 36. Detector Voltage (VREF - VDET) vs. Output Power for Various Temperatures at 70 GHz

Figure 37. Gate Supply Current vs. RF Input Power

<!-- image -->

Figure 38. Drain Supply Current vs. Gate Supply Voltage

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7001CHIPS medium power amplifier is shown in Figure 39. The ADPA7001CHIPS uses four cascaded, four-stage amplifiers operating in quadrature between six 90 ° hybrids.

The input signal is divided evenly into two. Then, each signal is again divided into two, and each of these paths is amplified through four independent gain stages. Then, the amplified signals are combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 14 dB and a PSAT value of 21 dBm.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased, it rectifies the RF power and makes it available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output. (see Figure 36).

The 90° hybrids ensure that the input and output return losses are greater than or equal to 15 dB and 12 dB, respectively. See the application circuits shown in Figure 43 and Figure 44 for further details on biasing the various blocks.

Figure 39. ADPA7001CHIPS Architecture

<!-- image -->

## APPLICATIONS INFORMATION

The ADPA7001CHIPS is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for VDD1A through VDD4A and VDD1B through VDD4B (see Figure 43). VGG12A is the gate bias pad for the first and second gain stages. VGG34A is the gate bias pad for the third and fourth gain stages. Apply a gate bias voltage to VGG12A and VGG34A, and use capacitive bypassing as shown in Figure 43.

All measurements for this device were taken using the typical application circuit (see Figure 43) and configured as shown in the assembly diagram (Figure 45).

The following is the recommended bias sequence during power-up:

1. Connect GND to RF/dc ground.
2. Set the gate bias voltage to -1.5 V .
3. Set all the drain bias voltages, VDD = 3.5 V .
4. Increase the gate bias voltage to achieve a quiescent current, IDQ = 350 mA.
5. Apply the RF signal.

The following is the recommended bias sequence during power-down:

1. Turn off the RF signal.
2. Decrease the gate bias voltage to -1.5 V to achieve IDQ = 0 mA (approximately).
3. Decrease all of the drain bias voltages to 0 V .
4. Increase the gate bias voltage to 0 V .

Figure 40. Simplified Block Diagram

<!-- image -->

Simplified bias pad connections to dedicated gain stages and dependence and independence among pads are shown in Figure 40.

Table 7. Power Selection Table 1, 2

|   I DQ (mA) |   Gain (dB) |   P1dB (dBm) |   OIP3 (dBm) |   P DISS (mW) |   V GG (V) |
|-------------|-------------|--------------|--------------|---------------|------------|
|         200 |          10 |           11 |           22 |           700 |      -0.64 |
|         250 |        11.5 |         13.5 |           23 |           875 |      -0.59 |
|         300 |          13 |         15.5 |           24 |          1050 |      -0.54 |
|         350 |          14 |         16.5 |           25 |          1225 |      -0.48 |
|         400 |          15 |         17.5 |           26 |          1400 |      -0.44 |
|         450 |          16 |           18 |           27 |          1575 |      -0.39 |

- 1 Data taken at the following nominal bias conditions: VDD = 3.5 V, T = 25°C.
- 2 Adjust VGG12A and VGG34A from -1.5 V to 0 V to achieve the desired drain current.

The VDD = 3.5 V and IDD = 350 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the ADPA7001CHIPS at different bias conditions may provide performance that differs from what is shown in Table 1 and Table 2. Biasing the ADPA7001CHIPS for higher drain current typically results in higher P1dB, output IP3, and gain at the expense of increased power consumption (see Table 7).

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GaAs MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Microstrip, 50 Ω transmission lines on 0.127 mm (5 mil) thick alumina, thin film substrates are recommended for bringing the radio frequency to and from the chip. Raise the die 0.075 mm (3 mil) to ensure that the surface of the die is coplanar with the surface of the substrate.

Place microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil). To ensure wideband matching, a 15 fF capacitive stub is recommended on the PCB board before the ribbon bond.

16895-040

Figure 41. High Frequency Input Wideband Matching

<!-- image -->

16895-041

Figure 42. High Frequency Output Wideband Matching

<!-- image -->

Place microstrip substrates as close to the die as possible to minimize bond wire length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

-  Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.

## [ADPA7001CHIPS](https://www.analog.com/ADPA7001CHIPS?doc=ADPA7001CHIPS.pdf)

-  Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
-  Follow ESD precautions to protect against ESD strikes.
-  While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
-  Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers. The surface of the chip have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## Mounting

Before epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 0.003 in. × 0.0005 in. gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. DC bonds of 0.001 in. (0.025 mm) diameter, thermosonically bonded, are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply a minimum amount of ultrasonic energy to achieve reliable bonds. Keep all bonds as short as possible, less than 12 mil (0.31 mm).

Alternatively, short (≤3 mil) RF bonds made with two 1 mil wires can be used.

## TYPICAL APPLICATION CIRCUIT

The drain and gate voltages can be applied to either the north or the south side of the circuit.

NO DC BIAS APPLIED

Figure 44. Alternate Application Circuit

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 45. Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 46. 16-Pad Bare Die [CHIP] (C-16-2)

Dimensions shown in millimeters

| Model            | Temperature Range   | Package Description    | Package Option   |
|------------------|---------------------|------------------------|------------------|
| ADPA7001CHIPS    | -55°C to +85°C      | 16-Pad Bare Die [CHIP] | C-16-2           |
| ADPA7001CHIPS-SX | -55°C to +85°C      | 16-Pad Bare Die [CHIP] | C-16-2           |

<!-- image -->

## ORDERING GUIDE

07-30-2018-A