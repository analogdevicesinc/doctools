<!-- lastmod 2022-07-28 -->
<!-- image -->

## FEATURES

- Low noise figure: 1.8 dB typical at 27 GHz to 31 GHz
- Single positive supply (self biased)
- High gain: 26.5 dB typical at 27 GHz to 31 GHz
- High OIP3: 20 dBm typical at 27 GHz to 31 GHz
- Die size: 0.945 mm × 1.015 mm × 0.100 mm

## APPLICATIONS

- Satellite communication
- Telecommunications
- Civilian radar

## GENERAL DESCRIPTION

The ADL8142-2CHIP is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), low noise wideband amplifier that operates from 23 GHz to 31 GHz. The ADL8142-2CHIP provides a typical gain of 26.5 dB, a 1.8 dB typical noise figure, and a typical output third-order intercept (OIP3) of 20 dBm at 27 GHz to 31 GHz, requiring only 25 mA from a 2 V supply voltage. Note that the OIP3 can be improved with larger drain currents. The ADL8142-2CHIP also features inputs and outputs that are ac-coupled and internally matched to 50 Ω, making it ideal for high capacity microwave radio applications.

## [ADL8142-2CHIP](http://www.analog.com/ADL8142-2)

## GaAs, pHEMT, MMIC, Low Noise Amplifier, 23 GHz to 31 GHz

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   |   1 |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    |   1 |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     |   3 |
| Frequency Range: 23 GHz to 27 GHz...............                           |   3 |
| Frequency Range: 27 GHz to 31 GHz...............                           |   3 |
| DC Specifications...............................................3          |     |
| Absolute Maximum Ratings...................................4               |     |
| Thermal Resistance...........................................              |   4 |
| Electrostatic Discharge (ESD) Ratings...............4                      |     |
| ESD Caution.......................................................4        |     |
| Pin Configuration and Function Descriptions........                        |   5 |

## REVISION HISTORY

7/2022-Revision 0: Initial Version

| Interface Schematics..........................................5                          |    |
|------------------------------------------------------------------------------------------|----|
| Typical Performance Characteristics.....................6                                |    |
| Theory of Operation.............................................15                       |    |
| Applications Information......................................                           | 16 |
| Recommended Bias Sequencing.....................16                                       |    |
| Assembly Diagram...........................................16                            |    |
| Recommended Power Management Circuit.....16                                              |    |
| Mounting and Bonding Techniques for Millimeterwave GaAs MMICs.........................18 |    |
| Outline Dimensions.............................................                          | 19 |
| Ordering Guide.................................................19                        |    |

## SPECIFICATIONS

## FREQUENCY RANGE: 23 GH z TO 27 GH z

TCASE = 25°C, supply voltage (V DD ) = 2 V, and quiescent current (I DQ ) = 25 mA for nominal operation, unless otherwise noted.

Table 1.

| Parameter                            |   Min | Typ      |   Max | Unit     | Test Conditions/Comments                                     |
|--------------------------------------|-------|----------|-------|----------|--------------------------------------------------------------|
| FREQUENCY RANGE                      |    23 |          |    27 | GHz      |                                                              |
| GAIN Gain Variation over Temperature |       | 28 0.023 |       | dB dB/°C |                                                              |
| NOISE FIGURE                         |       | 1.9      |       | dB       |                                                              |
| RETURN LOSS Input                    |       |          |       |          |                                                              |
|                                      |       | 11       |       | dB       |                                                              |
| Output                               |       | 12       |       | dB       |                                                              |
| OUTPUT                               |       |          |       |          |                                                              |
| Power for 1 dB Compression (OP1dB)   |       | 7        |       | dBm      |                                                              |
| Saturated Output Power (P SAT )      |       | 9        |       | dBm      |                                                              |
| OIP3                                 |       | 16       |       | dBm      | Measurement taken at output power (P OUT ) per tone = -2 dBm |
| POWER ADDED EFFICIENCY (PAE)         |       | 14       |       | %        | Measured at P SAT                                            |

## FREQUENCY RANGE: 27 GH z TO 31 GH z

TCASE = 25°C, V DD = 2 V, and I DQ = 25 mA for nominal operation, unless otherwise noted.

## Table 2.

| Parameter                       |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                     |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                 |    27 |       |    31 | GHz    |                                              |
| GAIN                            |  23.5 |  26.5 |       | dB     |                                              |
| Gain Variation over Temperature |       | 0.022 |       | dB/°C  |                                              |
| NOISE FIGURE                    |       |   1.8 |       | dB     |                                              |
| RETURN LOSS                     |       |       |       |        |                                              |
| Input                           |       |    21 |       | dB     |                                              |
| Output                          |       |     8 |       | dB     |                                              |
| OUTPUT                          |       |       |       |        |                                              |
| OP1dB                           |     6 |   8.5 |       | dBm    |                                              |
| P SAT                           |       |    10 |       | dBm    |                                              |
| OIP3                            |       |    20 |       | dBm    | Measurement taken at P OUT per tone = -2 dBm |
| POWER ADDED EFFICIENCY (PAE)    |       |    17 |       | %      | Measured at P SAT                            |

## DC SPECIFICATIONS

## Table 3.

| Parameter                     |   Min |   Typ |   Max | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       |    25 |       | mA     |
| Amplifier Current (I DQ_AMP ) |       |  22.6 |       | mA     |
| RBIAS Current (I RBIAS )      |       |   2.4 |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          |   1.5 |     2 |   3.5 | V      |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                                             |                 |
|--------------------------------------------------------------------------------------|-----------------|
| V DD RFIN                                                                            | 4.0 V 20 dBm    |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 6 mW/°C Above 85°C)    | 0.54W           |
| Temperature Storage Range                                                            |                 |
|                                                                                      | -65°C to +150°C |
| Nominal Channel (T CASE = 85°C, V DD = 2 V, I DQ = 25 mA, Input Power (P IN ) = Off) | 93.3°C          |
| Maximum Channel                                                                      |                 |
|                                                                                      | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Overall thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC. With an epoxy layer of nominal thickness assumed under the die, θ JC is the thermal resistance from the die channel to the bottom of the epoxy layer.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| C-8-28         |  166.5 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001.

## ESD Ratings for the ADL8142-2CHIP

Table 6. ADL8142-2CHIP, 8-Pad CHIP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±250                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 7. Pad Function Descriptions

| Pad No.    | Mnemonic   | Description                                                                                                                                                                                                                |
|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS      | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set the I DQ . See Figure 60 and Table 8 for more details. See Figure 3 for the interface schematic.                                                    |
| 2, 4, 5, 7 | GND        | Ground. Connect the GND pins to a ground plane that has low electrical and thermal impedance. See Figure 6 for the interface schematic.                                                                                    |
| 3          | RFIN       | RF Input. The RFIN pin is ac-coupled and matched to 50 Ω. See Figure 4 for the interface schematic.                                                                                                                        |
| 6          | RFOUT      | RF Output. The RFOUT pin is ac-coupled and matched to 50 Ω. While the RF output path is ac-coupled, there is a dc path to ground on the RFOUT side of the ac coupling capacitor. See Figure 5 for the interface schematic. |
| 8          | VDD        | Drain Bias. Connect the VDD pin to the supply voltage. See Figure 5 for the interface schematic.                                                                                                                           |
| Die Bottom | GND        | Die bottom must be connected to RF and dc ground.                                                                                                                                                                          |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. RBIAS Interface Schematic

<!-- image -->

Figure 4. RFIN Interface Schematic

<!-- image -->

Figure 5. RFOUT/VDD Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 7. Gain and Return Loss vs. Frequency, V DD = 2 V, I DQ = 25 mA

<!-- image -->

Figure 8. Gain vs. Frequency for Various Supply Voltages and I DQ Values, RBIAS = 499 Ω

<!-- image -->

Figure 9. Gain vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 10. Gain vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

Figure 11. Gain vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Supply Voltages and I DQ Values, R BIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 13. Input Return Loss vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 14. Input Return Loss vs. Frequency for Various Supply Voltages and RBIAS Values, I DQ = 25 mA

<!-- image -->

Figure 15. Output Return Loss vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various I DQ and R BIAS Values, VDD  = 2 V

Figure 17. Output Return Loss vs. Frequency for Various Supply Voltages and I DQ Values, R BIAS = 499 Ω

<!-- image -->

Figure 18. Output Return Loss vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 19. Output Return Loss vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 20. Reverse Isolation vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 21. Reverse Isolation vs. Frequency for Various Supply Voltages and RBIAS Values, I DQ = 25 mA

<!-- image -->

Figure 22. Reverse Isolation vs. Frequency for Various Supply Voltages and I DQ Values, R BIAS = 499 Ω

Figure 23. Reverse Isolation vs. Frequency for Various I DQ and R BIAS Values, VDD  = 2 V

<!-- image -->

Figure 24. Noise Figure vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 25. Noise Figure vs. Frequency for Various Supply Voltages and I DQ Values, R BIAS = 499 Ω

<!-- image -->

Figure 26. Noise Figure vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 27. OP1dB vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 28. Noise Figure vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

Figure 29. OP1dB vs. Frequency for Various Supply Voltages and I DQ Values, RBIAS = 499 Ω

<!-- image -->

Figure 30. OP1dB vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 31. OP1dB vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 32. P SAT vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 33. P SAT vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 34. P SAT vs. Frequency for Various Supply Voltages and I DQ Values, RBIAS = 499 Ω

Figure 35. P SAT vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

<!-- image -->

Figure 36. PAE Measured at P SAT vs. Frequency for Various Supply Voltages and I DQ Values, R BIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 37. PAE Measured at P SAT vs. Frequency for Various Temperatures, VDD  = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 38. PAE Measured at P SAT vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 39. P OUT , Gain, PAE, and Power Supply Current (I DD ) vs. P IN at 27 GHz, VDD  = 2 V, R BIAS = 499 Ω

<!-- image -->

Figure 40. PAE Measured at P SAT vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

Figure 41. P OUT , Gain, PAE, and I DD vs. P IN at 24 GHz, V DD = 2 V, R BIAS = 499 Ω

<!-- image -->

Figure 42. P OUT , Gain, PAE, and I DD vs. P IN at 31 GHz, V DD = 2 V, R BIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 43. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage at 24 GHz, R BIAS = 499 Ω

<!-- image -->

Figure 44. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage at 31 GHz, R BIAS = 499 Ω

<!-- image -->

Figure 45. I DD vs. P IN for Various Frequencies, V DD = 2 V

<!-- image -->

Figure 46. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage at 27 GHz, R BIAS = 499 Ω

Figure 47. P DISS vs. P IN at Various Frequencies

<!-- image -->

Figure 48. OIP3 vs. Frequency for Various Supply Voltages and I DQ Values, RBIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 49. OIP3 vs. Frequency for Various Temperatures, V DD = 2 V, I DQ = 25 mA, R BIAS = 499 Ω

<!-- image -->

Figure 50. OIP3 vs. Frequency for Various Supply Voltages and R BIAS Values, I DQ = 25 mA

<!-- image -->

Figure 51. Third-Order Intermodulation (IM3) vs. P OUT per Tone for Various Frequencies, V DD = 2 V, R BIAS = 499 Ω

<!-- image -->

Figure 52. OIP3 vs. Frequency for Various I DQ and R BIAS Values, V DD = 2 V

Figure 53. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 1.5 V, R BIAS = 499 Ω

<!-- image -->

Figure 54. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 2.5 V, R BIAS = 499 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 55. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 3.0 V, R BIAS = 499 Ω

<!-- image -->

Figure 56. I DQ vs. V DD , R BIAS = 499 Ω

Figure 57. I DQ vs. R BIAS Value, V DD = 2 V

<!-- image -->

Figure 58. IM3 vs. P OUT per Tone for Various Frequencies, V DD = 3.5 V, R BIAS = 499 Ω

<!-- image -->

## THEORY OF OPERATION

The ADL8142-2CHIP is a GaAs, MMIC, pHEMT, low noise wideband amplifier with an integrated bias inductor and ac-coupling capacitors. The simplified block diagram is shown in Figure 59.

To adjust the drain bias current, connect an external resistor between the RBIAS and VDD pins.

The ADL8142-2CHIP has ac-coupled, single-ended input and output ports with impedance that is nominally equal to 50 Ω over the 23 GHz to 31 GHz frequency range. No external matching components are required. While the RF output path is ac-coupled, there is a dc path to ground on the RFOUT side of the ac coupling capacitor.

Figure 59. Simplified Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

The basic connections for operating the ADL8142-2CHIP over the specified frequency range are shown in Figure 60. No external biasing inductor is required, allowing the 2 V supply to be connected to the VDD pin. It is recommended to use 0.1 µF and 100 pF power supply decoupling capacitors. The power supply decoupling capacitors shown in Figure 60 represent the configuration used to characterize and qualify the ADL8142-2CHIP.

To set I DQ , connect a resistor (R2) between the RBIAS and VDD pins. A default value of 499 Ω is recommended, which results in a nominal I DQ of 25 mA. The RBIAS pin also draws a current that varies with the value of RBIAS, and this current is typically a few mA. Do not leave the RBIAS pin open.

The RFIN and RFOUT pins are internally ac-coupled. If the RFOUT pin is connected to a dc bias level other than 0 V, ac-couple this pin because of the internal dc path to ground on RFOUT.

Figure 60. Basic Connections

<!-- image -->

## RECOMMENDED BIAS SEQUENCING

## During Power-Up

To power up the ADL8142-2CHIP, take the following bias sequencing steps:

1. Connect the VDD power supply.
2. Set the VDD supply to 2 V.
3. Apply the RF input signal.

## During Power-Down

To power down the ADL8142-2CHIP, take the following bias sequencing steps:

1. Turn off the RF input signal.
2. Set the VDD supply to 0 V.

Table 8. Recommended Bias Resistor Values for V DD = 2 V

|   R BIAS (Ω) |   I DQ (mA) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|-------------|-----------------|----------------|
|          180 |          50 |            43.3 |            6.7 |
|          260 |          40 |            34.6 |            5.4 |
|          400 |          30 |            26.2 |            3.8 |
|          499 |          25 |            22.6 |            2.4 |
|          700 |          20 |              18 |            2.0 |
|         1000 |          15 |            14.2 |            0.8 |

## ASSEMBLY DIAGRAM

Figure 61 shows the assembly diagram of the ADL8142-2CHIP.

Figure 61. Assembly Diagram

<!-- image -->

## RECOMMENDED POWER MANAGEMENT CIRCUIT

Figure 62 shows a recommended power management circuit that uses the LT3083 low dropout (LDO) regulator that is available as a space-qualified die. With the IN and V CONTROL pins tied together, the minimum input voltage (V IN ) is 3.6 V when an output voltage (V OUT ) of 2 V and a current draw of up to 3 A are required. Assuming that the ADL8142-2CHIP is being used in a large array, a single LT3083 can provide power to the low noise amplifier in a 64-element array.

Table 9 provides recommended resistor values to set the other VDD  voltages. In each case, the minimum external supply is the minimum dropout voltage from the V CONTROL input to OUT.

## APPLICATIONS INFORMATION

Figure 62. Recommended Power Management Circuit

<!-- image -->

Table 9. Recommended Resistor Values for Various LDO Output Voltages

|   V OUT for the LT3083 |   R1 (kΩ) |   Minimum Supply Voltage for the LT3083 |
|------------------------|-----------|-----------------------------------------|
|                    1.5 |      30.1 |                                     3.1 |
|                      2 |      40.2 |                                     3.6 |
|                    2.5 |      49.9 |                                     4.1 |
|                    3.3 |      66.5 |                                     4.9 |

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE G a A s MMIC s

Figure 61 shows the recommend assembly diagram. Attach the die directly to the ground plane with conductive epoxy (see the Handling Precautions section, the Mounting section, and the Wire Bonding section for additional information). Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076 mm to 0.152 mm (3 mil to 6 mil).

## Handling Precautions

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. Once the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pick up.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## Mounting

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF wire bonds made with 0.076 mm × 0.0127 mm (3 mil × 0. 5 mil) gold ribbon is recommended for the RF ports. These bonds must be thermionically bonded with a force of 40 g to 60 g. Thermionically bonded dc wire bonds of 0.025 mm (1 mil) diameter are recommended. Create ball bonds with a force of 40 g to 50 g and wedge bonds with a force of 18 g to 22 g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.203 mm (8 mil).

Alternatively, use short RF wire bonds that are 0.076 mm to 0.152 mm (3 mil to 6 mil) and made with three 0.025 mm (1 mil) diameter wires.

## OUTLINE DIMENSIONS

Figure 63. 8-Pad Bare Die [CHIP]

<!-- image -->

(C-8-28) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1, 2    | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| ADL8142-2CHIP | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-28           |
| ADL8142-2C-SX | -55°C to +85°C      | 8-Pad Bare Die [CHIP] | C-8-28           |

<!-- image -->