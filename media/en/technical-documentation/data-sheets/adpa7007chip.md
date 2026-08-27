<!-- lastmod 2020-07-31 -->
<!-- image -->

## Data Sheet

## FEATURES

Output P1dB: 31 dBm typical at 22 GHz to 36 GHz PSAT: 32 dBm typical at 22 GHz to 36 GHz Gain: 21.5 dB typical at 22 GHz to 36 GHz Output IP3: 41 dBm typical at 22 GHz to 44 GHz Supply voltage: 5 V typical at 1400 mA maximum 50 Ω matched input and output Die size: 3.610 mm × 3.610 mm × 0.102 mm

## APPLICATIONS

Military and space Test instrumentation

## GENERAL DESCRIPTION

The ADPA7007CHIP is a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC), distributed power amplifier that operates from 18 GHz to 44 GHz. The amplifier provides a gain of 21.5 dB, an output power for 1 dB compression (P1dB) of 31 dBm, and a typical output third-

## GaAs, pHEMT, MMIC,1 W Power Amplifier, 18 GHz to 44 GHz

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

order intercept (IP3) of 41 dBm. The ADPA7007CHIP requires 1400 mA from a 5 V supply on the supply voltage (VDD) and features inputs and outputs that are internally matched to 50 Ω, facilitating integration into multichip modules (MCMs). All data was taken with the chip connected via two 0.025 mm wire bonds that are at least 0.31 mm long.

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| 18 GHz to 22 GHz Frequency Range......................................... 3                                 |
| 22 GHz to 36 GHz Frequency Range......................................... 3                                 |
| 36 GHz to 44 GHz Frequency Range......................................... 4                                 |
| Absolute Maximum Ratings............................................................ 5                      |
| Thermal Resistance ...................................................................... 5                 |
| Electrostatic Discharge (ESD) Ratings ...................................... 5                              |
| ESD Caution.................................................................................. 5             |
| Pin Configuration and Function Descriptions............................. 6                                  |
| Interface Schematics..................................................................... 7                 |
| Typical Performance Characteristics ............................................. 8                         |

## REVISION HISTORY

4/2020-Revision 0: Initial Version

| Constant I DD Operation.............................................................                                                                       |   15 |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| Theory of Operation ......................................................................                                                                 |   16 |
| Applications Information..............................................................                                                                     |   17 |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.........................................................................................     |   18 |
| Biasing ADPA7007CHIP with the HMC980LP4E....................                                                                                               |   19 |
| Application Circuit Setup..........................................................                                                                        |   19 |
| Limiting VGATE for ADPA7007CHIPV GGx Absolute Maximum Rating Requirement................................................                                   |   19 |
| Constant Drain Current Biasing vs. Constant Gate Voltage Biasing.......................................................................................... |   21 |
| Typical Application Circuit...........................................................                                                                     |   23 |
| Assembly Diagram.........................................................................                                                                  |   24 |
| Outline Dimensions.......................................................................                                                                  |   25 |
| Ordering Guide ..........................................................................                                                                  |   25 |

## SPECIFICATIONS

## 18 GHz TO 22 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V , and quiescent supply current (IDQ) = 1400 mA for nominal operation, unless otherwise noted.

## Table 1.

| Parameter                                          | Symbol   |   Min | Typ           |   Max | Unit        | Test Conditions/Comments                                                                          |
|----------------------------------------------------|----------|-------|---------------|-------|-------------|---------------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                                    |          |    18 |               |    22 | GHz         |                                                                                                   |
| GAIN Gain Flatness Gain Variation Over Temperature |          |    20 | 23 ±0.1 0.011 |       | dB dB dB/°C |                                                                                                   |
| NOISE FIGURE                                       |          |       |               |       |             |                                                                                                   |
|                                                    |          |       | 6.5           |       | dB          |                                                                                                   |
| RETURN LOSS                                        |          |       |               |       |             |                                                                                                   |
| Input                                              |          |       | 15.5          |       | dB          |                                                                                                   |
| Output                                             |          |       | 26.5          |       | dB          |                                                                                                   |
| OUTPUT                                             |          |       |               |       |             |                                                                                                   |
| Output Power for 1 dB Compression                  | P1dB     |    26 | 28.5          |       | dBm         |                                                                                                   |
| Saturated Output Power                             | P SAT    |       | 30            |       | dBm         |                                                                                                   |
| Output Third-Order Intercept                       | IP3      |       | 37            |       | dBm         | Measurement taken at output power (P OUT ) per tone = 16 dBm                                      |
| SUPPLY                                             |          |       |               |       |             |                                                                                                   |
| Quiescent Current                                  | I DQ     |       | 1400          |       | mA          | Adjust the gate bias voltage (V GG1 andV GG2 ) between -1.5V up to 0V to achieve the desired I DQ |
| Voltage                                            | V DD     |     4 | 5             |       | V           |                                                                                                   |

## 22 GHz TO 36 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V , and IDQ = 1400 mA for nominal operation, unless otherwise noted.

## Table 2.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                                                       |
|-----------------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          |    22 |       |    36 | GHz    |                                                                                |
| GAIN                              |          |  19.5 | 21.5  |       | dB     |                                                                                |
| Gain Flatness                     |          |       | ±1.4  |       | dB     |                                                                                |
| Gain Variation Over Temperature   |          |       | 0.026 |       | dB/°C  |                                                                                |
| NOISE FIGURE                      |          |       | 5.5   |       | dB     |                                                                                |
| RETURN LOSS                       |          |       |       |       |        |                                                                                |
| Input                             |          |       | 17    |       | dB     |                                                                                |
| Output                            |          |       | 22    |       | dB     |                                                                                |
| OUTPUT                            |          |       |       |       |        |                                                                                |
| Output Power for 1 dB Compression | P1dB     |    29 | 31    |       | dBm    |                                                                                |
| Saturated Output Power            | P SAT    |       | 32    |       | dBm    |                                                                                |
| Output Third-Order Intercept      | IP3      |       | 41    |       | dBm    | Measurement taken at P OUT per tone = 16 dBm                                   |
| SUPPLY                            |          |       |       |       |        |                                                                                |
| Quiescent Current                 | I DQ     |       | 1400  |       | mA     | Adjust the (V GG1 andV GG2 ) between -1.5V up to0V to achieve the desired I DQ |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                                                |

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

## 36 GHz TO 44 GHz FREQUENCY RANGE

TA = 25°C, VDD = 5 V , and IDQ = 1400 mA for nominal operation, unless otherwise noted.

## Table 3.

| Parameter                         | Symbol   |   Min | Typ   |   Max | Unit   | Test Conditions/Comments                                                    |
|-----------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------------------------------|
| FREQUENCY RANGE                   |          |    36 |       |    44 | GHz    |                                                                             |
| GAIN                              |          |    18 | 21    |       | dB     |                                                                             |
| Gain Flatness                     |          |       | ±0.7  |       | dB     |                                                                             |
| Gain Variation Over Temperature   |          |       | 0.039 |       | dB/°C  |                                                                             |
| NOISE FIGURE                      |          |       | 6.5   |       | dB     |                                                                             |
| RETURN LOSS                       |          |       |       |       |        |                                                                             |
| Input                             |          |       | 21    |       | dB     |                                                                             |
| Output                            |          |       | 18    |       | dB     |                                                                             |
| OUTPUT                            |          |       |       |       |        |                                                                             |
| Output Power for 1 dB Compression | P1dB     |    27 | 30    |       | dBm    |                                                                             |
| Saturated Output Power            | P SAT    |       | 31.5  |       | dBm    |                                                                             |
| Output Third-Order Intercept      | IP3      |       | 41    |       | dBm    | Measurement taken at P OUT per tone = 16 dBm                                |
| SUPPLY                            |          |       |       |       |        |                                                                             |
| Quiescent Current                 | I DQ     |       | 1400  |       | mA     | Adjust (V GG1 andV GG2 ) between -1.5V up to 0V to achieve the desired I DQ |
| Voltage                           | V DD     |     4 | 5     |       | V      |                                                                             |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                    | Rating          |
|------------------------------------------------------------------------------|-----------------|
| Drain Bias Voltage (V DDx )                                                  | 6.0V            |
| V GGx                                                                        | -1.5 to 0V      |
| RF Input Power (RFIN)                                                        | 18 dBm          |
| Continuous Power Dissipation (P DISS ), T A =85°C(Derate149.2mW/°CAbove85°C) | 13.6W           |
| Temperature Range                                                            |                 |
| Storage                                                                      | -65°C to +150°C |
| Operating                                                                    | -55°C to +85°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to system design and operating environment. Careful attention to the printed circuit board (PCB) thermal design is required.

θJC is the channel to case thermal resistance, channel to bottom of die using die attach epoxy.

## Table 5. Thermal Resistance

| PackageType   |   θ JC | Unit   |
|---------------|--------|--------|
| C-10-11       |    6.6 | °C/W   |

## Table 6. Reliability Information

| Parameter                                                                  |   Temperature(°C) |
|----------------------------------------------------------------------------|-------------------|
| Junction Temperature to Maintain 1,000,000 Hour MeanTime to Failure (MTTF) |               175 |
| Nominal Junction Temperature (T J = 85°C, V DD = 5 V, I DQ = 1400 mA)      |             131.2 |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## ESD Ratings ADPA7007CHIP

## Table 7. ADPA7007CHIP, 10-Pad CHIP

| ESD Model   | WithstandThreshold (V)   | Class   |
|-------------|--------------------------|---------|
| HBM         | ±250                     | 1A      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

## Table 8. Pin Function Descriptions

| Pin No.     | Mnemonic                   | Description                                                                                                                                                                                                                                                                                                      |
|-------------|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | RFIN                       | RF Signal Input. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                     |
| 2, 10       | V GG1 ,V GG2               | Amplifier Gate Controls. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads. ESD protection diodes are included and turn on below -1.5 V.                                                                                                                                     |
| 3, 4, 8, 9, | V DD1 ,V DD3 ,V DD4 ,V DD2 | Drain Biases for the Amplifier. External bypass capacitors of 4.7 µF, 0.01 µF, and 100 pF are required for these pads.                                                                                                                                                                                           |
| 5           | VREF                       | Reference Diode Voltage. Use this pad for temperature compensation of theVDET RF output power measurements. Used in combination with VDET, this voltage provides temperature compensation to theVDET RF output power measurements.                                                                               |
| 6           | RFOUT                      | RF Signal Output. This pad is ac-coupled and matched to 50 Ω.                                                                                                                                                                                                                                                    |
| 7           | VDET                       | Detector Diode Used for Measuring the RF Output Power. Detection via this pad requires the application of a dc bias voltage through an external series resistor. Used in combination with VREF, the difference voltage, VREF -VDET, is a temperature compensated dc voltage proportional to the RF output power. |
| Die Bottom  | GND                        | Die bottom must be connected to RF and dc ground.                                                                                                                                                                                                                                                                |

## INTERFACE SCHEMATICS

21924-003

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. VREF Interface Schematic

<!-- image -->

Figure 5. VDET Interface Schematic

<!-- image -->

<!-- image -->

Figure 7. VGG1, VGG2 Interface Schematic

Figure 8. RFOUT Interface Schematic

<!-- image -->

Figure 9. VDD1 to VDD4 Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 10. Gain and Return Loss vs. Frequency, VDD = 5 V, IDQ = 1400 mA (S11 Is the Input Return Loss, S21 Is the Gain, and S22 is the Output Return Loss)

<!-- image -->

21924-011

<!-- image -->

Figure 11. Gain vs. Frequency for Various Supply Voltages, IDQ = 1400 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

Figure 13. Gain vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

Figure 14. Gain vs. Frequency for Various Supply Currents, VDD = 5 V

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Voltages, IDQ = 1400 mA

<!-- image -->

## Data Sheet

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various Supply Currents, VDD = 5 V

Figure 17. Output Return Loss vs. Frequency for Various Supply Voltages, IDQ = 1400 mA

<!-- image -->

Figure 18. Reverse Isolation vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Temperature, VDD = 5 V, IDQ = 1400 mA

Figure 20. Output Return Loss vs. Frequency for Various Supply Currents, VDD = 5 V

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

<!-- image -->

Figure 22. P1dB vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

Figure 23. P1dB vs. Frequency for Various Supply Currents, VDD = 5 V

Figure 24. Saturated Output Power (PSAT) vs. Frequency for Various Supply Voltages, IDQ = 1200 mA

<!-- image -->

Figure 25. P1dB vs. Frequency for Various Supply Voltages, IDQ = 1400 mA

<!-- image -->

21924-026

Figure 26. PSAT vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

Figure 27. PSAT vs. Frequency for Various Supply Currents, VDD = 5 V

<!-- image -->

## Data Sheet

<!-- image -->

Figure 28. Power Added Efficiency (PAE) at PSAT vs. Frequency for Various Temperatures, VDD = 5 V, IDQ = 1400 mA

Figure 29. PAE at PSAT vs. Frequency for Various Supply Currents, VDD = 5 V

<!-- image -->

Figure 30. POUT, Gain, PAE, Drain Current with RF Applied (IDD) vs. Input Power, 26 GHz, VDD = 5 V, IDD = 1400 mA

<!-- image -->

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

<!-- image -->

Figure 31. PAE at PSAT vs. Frequency for Various Supply Voltages, IDQ = 1400 mA

Figure 32. POUT, Gain, PAE, and IDD vs. Input Power, 22 GHz, VDD = 5 V, IDD = 1400 mA

<!-- image -->

Figure 33. POUT, Gain, PAE, and IDD vs. Input Power, 30 GHz, VDD = 5 V, IDD = 1400 mA

<!-- image -->

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

<!-- image -->

Figure 34. POUT, Gain, PAE, and IDD vs. Input Power, 34 GHz, VDD = 5 V, IDD = 1400 mA

Figure 35. POUT, Gain, PAE, and IDD vs. Input Power, 42 GHz, VDD = 5 V, IDD = 1400 mA

<!-- image -->

Figure 36. Output IP3 vs. Frequency for Various Temperatures, POUT per Tone = 16 dBm, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

21924-034

21924-035

<!-- image -->

Figure 37. POUT, Gain, PAE, and IDD vs. Input Power, 38 GHz, VDD = 5 V, IDD = 1400 mA

Figure 38. Power Dissipation vs. Input Power for Various Frequencies at TA = 85°C, VDD = 5 V, IDD = 1400 mA

<!-- image -->

Figure 39. Output IP3 vs. Frequency for Various Supply Voltages, POUT per Tone = 14 dBm, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

<!-- image -->

Figure 40. Output IP3 vs. Frequency for Various Supply Currents, POUT per Tone = 16 dBm, VDD = 5 V

Figure 41. Quiescent Drain Supply Current vs. Gate Supply Voltage

<!-- image -->

Figure 42. Drain Current vs. Input Power at Various Frequencies, VDD = 5 V, IDD = 1400 mA

<!-- image -->

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

Figure 43. IM3 Distortion Relative to Carrier vs. POUT per Tone, VDD = 4 V, IDQ = 1400 mA

<!-- image -->

21924-044

Figure 44. IM3 Distortion Relative to Carrier vs. POUT per Tone, VDD = 5 V, IDQ = 1400 mA

<!-- image -->

Figure 45. Detector Voltage (VREF - VDET) vs. Output Power for Various Temperatures at 32 GHz

<!-- image -->

Figure 46. Detector Voltage (VREF - VDET) vs. Output Power for Various Frequencies

<!-- image -->

## CONSTANT IDD OPERATION

TA = 25°C, VDD = 5 V , and IDQ = 1600 mA for nominal operation, unless otherwise noted. Figure 47 to Figure 50 are biased with HMC980LP4E active bias controller. See the Biasing ADPA7007CHIP with the HMC980LP4E section for biasing details.

<!-- image -->

Figure 47. P1dB vs. Frequency for Various Temperatures, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

Figure 48. PSAT vs. Frequency for Various Temperatures, VDD = 5 V, Data Measured with Constant IDD

Figure 49. P1dB vs. Frequency for Various Drain Currents, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

Figure 50. PSAT vs. Frequency for Various Drain Currents, VDD = 5 V, Data Measured with Constant IDD

<!-- image -->

## THEORY OF OPERATION

The architecture of the ADPA7007CHIP, a medium power amplifier, is shown in Figure 51. The ADPA7007CHIP uses two cascaded, four-stage amplifiers operating in quadrature between six 90° hybrids.

The input signal is divided evenly into two, and then each signal is divided into two again. Each of these new paths are amplified through three independent gain stages. The amplified signals are then combined at the output. This balanced amplifier approach forms an amplifier with a combined gain of 21.5 dB and a PSAT value of 32 dBm.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF output power. When the diode is dc biased, the diode rectifies the RF power and makes the RF power available for measurement as a dc voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit, minus the coupled RF power, is available via VREF. Taking the difference of VREF - VDET provides a temperature compensated signal that is proportional to the RF output (see Figure 51).

The 90° hybrids ensure that the input and output return losses are greater than 14 dB. See the application circuits shown in Figure 64 and Figure 65 for further details on biasing the various blocks.

Figure 51. ADPA7007CHIP Architecture

<!-- image -->

## APPLICATIONS INFORMATION

The ADPA7007CHIP is a GaAs, pHEMT, MMIC power amplifier. Capacitive bypassing is required for all VGGx and VDDx pins (see Figure 52). VGG1 is the gate bias pad for the top cascaded amplifiers. VGG2 is the gate bias pad for the bottom cascaded amplifiers. VDD1 and VDD3 are drain bias pads for the top cascaded amplifiers. VDD2 and VDD4 are drain bias pads for the bottom cascaded amplifiers.

All measurements for this device were taken using the typical application circuit (see Figure 64) and were configured as shown in the assembly diagram (see Figure 65).

The following is the recommended bias sequence during power-up:

1. Connect GND to RF and dc ground.
2. Set all the gate bias voltages, VGG1 and VGG2, to -2 V .
3. Set all the drain bias voltages, VDDX, to 5 V .
4. Increase the gate bias voltages to achieve a quiescent supply current of 1400 mA.
5. Apply the RF signal.

The following is the recommended bias sequence during power-down:

1. Turn off the RF signal.
2. Decrease the gate bias voltages, VGG1 and VGG2, to -2 V to achieve a IDQ = 0 mA (approximately).
3. Decrease all of the drain bias voltages to 0 V .
4. Increase the gate bias voltages to 0 V .

## Table 9. Power Selection Table 1, 2

|   I DQ (mA) |   Gain (dB) |   P1dB (dBm) |   Output IP3 (dBm) |   P DISS (W) |   V GGx (V) |
|-------------|-------------|--------------|--------------------|--------------|-------------|
|        1200 |        21.7 |         30.7 |               38.9 |          5.9 |       -0.62 |
|        1300 |        22.1 |         30.9 |               39.7 |          6.4 |       -0.59 |
|        1400 |        22.6 |         31.0 |               39.8 |          6.8 |       -0.56 |
|        1500 |        23.1 |         31.1 |               39.4 |          7.3 |       -0.54 |
|        1600 |        23.5 |         31.2 |               38.6 |          7.7 |       -0.51 |

Simplified bias pad connections to dedicated gain stages and dependence and independence among pads are shown in Figure 52.

Figure 52. Simplified Block Diagram

<!-- image -->

The VDD = 5 V and IDD = 1400 mA bias conditions are recommended to optimize overall performance. Unless otherwise noted, the data shown was taken using the recommended bias conditions. Operation of the ADPA7007CHIP at different bias conditions may provide performance that differs from what is shown in Table 1, Table 2, and Table 3. Biasing the ADPA7007CHIP for higher drain current typically results in higher P1dB, output IP3, and gain at the expense of increased power consumption (see Table 9).

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section).

Microstrip, 50 Ω transmission lines on 0.127 mm thick alumina thin film substrates are recommended for bringing the RF to and from the chip. Raise the die 0.075 mm to ensure that the surface of the die is coplanar with the surface of the substrate.

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm. To ensure wideband matching, a 15 fF capacitive stub is recommended on the PCB before the ribbon bond.

21924-053

Figure 53. High Frequency Input Wideband Matching

<!-- image -->

21924-054

Figure 54. High Frequency Output Wideband Matching

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

RF bonds made with 3 mil × 0. 5 mil gold ribbon are recommended for the RF ports. These bonds must be thermosonically bonded with a force of 40 g to 60 g. Thermosonically bonded dc bonds of 0.025 mm diameter are recommended. Create ball bonds with a force of 40 g to 50 g, and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31 mm.

Alternatively, short RF bonds that are ≤3 mm and made with two 1 mm wires can be used.

## BIASING ADPA7007CHIP WITH THE HMC980LP4E

The HMC980LP4E is an active bias controller that is designed to meet the bias requirements for enhancement mode and depletion mode amplifiers such as the ADPA7007CHIP. The controller provides constant drain current biasing over temperature and part to part variation, and properly sequences gate and drain voltages to ensure the safe operation of the amplifier. The HMC980LP4E also offers self protection in the event of a short circuit, as well as an internal charge pump that generates the negative voltage needed on the gate of the ADPA7007CHIP, and the option to use an external negative voltage source. The HMC980LP4E is also available in die form as HMC980-Die.

Figure 55. Functional Diagram of HMC980LP4E

<!-- image -->

## APPLICATION CIRCUIT SETUP

Figure 56 displays the schematic of an application circuit using the HMC980LP4E to control the ADPA7007CHIP. When using an external negative supply for VNEG, refer to the schematic in Figure 57.

In the application circuit shown in Figure 56, the ADPA7007CHIP drain voltage and drain current are set by the following equations:

VDRAIN (5 V) = VDD (6.12 V) IDRAIN (1600 mA) × 0.7 Ω   (1)

IDRAIN (1600 mA) = 150 Ω × A / R10 (93.1 Ω) (2)

## LIMITING VGATE FOR ADPA7007CHIP VGGx ABSOLUTE MAXIMUM RATING REQUIREMENT

When using the HMC980LP4E to control the ADPA7007CHIP , the minimum voltages for VNEG and VGATE must be -1.5 V to keep the voltages within the absolute maximum rating limit for the VGGx pad of the ADPA7007CHIP . To set the minimum voltages, set R15 and R16 to the values shown in Figure 56 and Figure 57. Refer to the AN-1363 for more information and calculations for R15 and R16

The HMC980LP4E application circuits for biasing figures in the AN-1363 are two examples of how the HMC980LP4E is used as an active bias controller. Both application circuits within the AN-1363 show the R5 and R7 resistors, which are analogous to the R15 and R16 resistor shown in Figure 56 and Figure 57 within this data sheet.

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

## Data Sheet

<!-- image -->

Figure 56. Application Circuit using HMC980LP4E with ADPA7007CHIP

<!-- image -->

21924-057

Figure 57. Application Circuit using HMC980LP4E with ADPA7007CHIP with External Negative Voltage Source

## HMC980LP4E BIAS SEQUENCE

The dc supply sequencing that follows is required to prevent damage to the HMC980LP4E when using the device to control the ADPA7007CHIP.

## Power-Up Sequence

The power-up sequence of the HMC980LP4E follows:

1. Set VDIG = 3.3 V
2. Set S0 = 3.3 V
3. Set VDD = 5.68 V
4. Set VNEG = -1.5 V (unnecessary if using internally generated voltage)
5. Set EN = 3.3 V (the transition from 0 V to 3.3 V turns on VGATE and VDRAIN)

## Power-Down Sequence

The power-down sequence of the HMC980LP4E follows:

1. Set EN = 0 V (the transition from 3.3 V to 0 V turns off VDRAIN and VGATE)
2. Set VNEG = 0 V (unnecessary if using internally generated voltage)
3. Set VDD = 0 V
4. Set S0 = 0 V
5. Set VDIG = 0 V

After the HMC980LP4E bias control circuit is set up, toggle the bias to the ADPA7007CHIP on or off by applying 3.3 V or 0 V , respectively, to the EN pad. At EN = 3.3 V , VGATE drops to -1.5 V , and VDRAIN turns on at 5 V. VGATE then rises until IDRAIN = 1400 mA, and the closed control loop regulates IDRAIN at 1600 mA. When EN = 0 V, VGATE is set to -1.5 V , and VDRAIN is set to 0 V (see Figure 58 and Figure 59).

Figure 58. Turn On HMC980LP4E Outputs to ADPA7007CHIP

<!-- image -->

21924-059

Figure 59. Turn Off HMC980LP4E Outputs to ADPA7007CHIP

<!-- image -->

## CONSTANT DRAIN CURRENT BIASING vs. CONSTANT GATE VOLTAGE BIASING

The HMC980LP4E uses closed-loop feedback to continuously adjust VGATE to maintain a constant gate current bias over dc supply variation, temperature, and part to part variation. In addition, constant drain current bias is the optimum method for reducing time in calibration procedures and for maintaining consistent performance over time. By comparing constant gate current bias with a constant gate voltage bias where the current is driven to increase when RF power is applied, a slightly lower output P1dB is seen with a constant drain current bias. This output P1dB is shown in Figure 63, where the RF performance is slightly lower than the constant gate voltage bias operation due to a lower drain current at the high input powers as the device reaches 1 dB compression.

To increase the output P1dB performance for the constant drain current bias towards the constant gate voltage bias performance, increase the set current toward the IDD this performance reaches under the RF drive in the constant gate voltage bias condition, as shown in Figure 63. The limit of increasing IDQ under the constant drain current operation is set by the thermal limitations found in Table 4 from the amplifier data sheet with the maximum power dissipation specification. As IDD increase continues, the actual output P1dB does not continue to increase indefinitely, and the power dissipation increases. Therefore, when using constant drain current biasing, note this exchange between the power dissipation and the output P1dB performance.

## [ADPA7007CHIP](https://www.analog.com/ADPA7007?doc=ADPA7007CHIP.pdf)

<!-- image -->

Figure 60. IDQ vs. Input Power, VDD = 5 V, Frequency = 32 GHz for Constant Gate Voltage Bias and Constant Drain Current Bias

<!-- image -->

Figure 61. Output Power vs. Input Power, VDD = 5 V, Frequency = 32 GHz for Constant Gate Voltage Bias and Constant Drain Current Bias

Figure 62. PAE vs. Input Power, VDD = 5 V, Frequency = 32 GHz for Constant Gate Voltage Bias and Constant Drain Current Bias

<!-- image -->

Figure 63. Output P1dB vs. Frequency, VDD = 5 V, Frequency = 32 GHz for Constant Gate Voltage Bias and Constant Drain Current Bias

<!-- image -->

## TYPICAL APPLICATION CIRCUIT

Figure 64 shows the typical application circuit.

Figure 64. Typical Application Circuit (VOUT Is the Output Voltage)

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 65 shows the assembly diagram.

Figure 65. Assembly Diagram

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

* This die utilizes fragile air bridges. Any pickup tools used must not contact this area.

Figure 66. 10-Pad Bare Die [CHIP]

(C-10-11)

Dimensions shown in millimeters

| Model 1       | Temperature Range   | Package Description    | Package Option   |
|---------------|---------------------|------------------------|------------------|
| ADPA7007CHIP  | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-11          |
| ADPA7007C-KIT | -55°C to +85°C      | 10-Pad Bare Die [CHIP] | C-10-11          |

## ORDERING GUIDE

1  The ADPA7007CHIP and ADPA7007C-KIT are RoHS compliant parts.

<!-- image -->

03-06-2020-A