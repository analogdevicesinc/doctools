<!-- lastmod 2025-10-14 -->
<!-- image -->

## FEATURES

- Frequency range: 2GHz to 22GHz
- 50Ω matched input and output
- Power gain: 12dB typical from 8GHz to 16GHz
- POUT: 42dBm typical from 8GHz to 16GHz
- PAE: 24% typical from 8GHz to 16GHz
- S21: 20dB typical from 8GHz to 16GHz
- OIP3: 43.5dBm typical from 8GHz to 16GHz
- Integrated RF power detector
- VDD : 28V
- I DQ : 600mA

## APPLICATIONS

- Electronic warfare
- Test and measurement equipment

## 2GHz to 22GHz, 15W, GaN Power Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADPA1112CHIP is a 2GHz to 22GHz wideband power amplifier with a saturated output power (P OUT ) of 42dBm, power added efficiency (PAE) of 24%, and a power gain of 12dB typical from 8GHz to 16GHz at input power (P IN ) of 30dBm. The RF input and RF output are internally matched and AC-coupled. A drain bias voltage (V DD ) of 28V is applied to the VDD1 and VDD2 pads, which have integrated bias inductors. The drain current is set by applying a negative voltage to the VGG1 pad. A temperature-compensated RF detector is integrated allowing monitoring of the RF output power.

The ADPA1112CHIP is fabricated on a gallium nitride (GaN) process and is specified for operation from -55°C to +85°C.

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Electrical Specifications.........................................3        |     |
| 2GHz to 8GHz Frequency Range......................                         | 3   |
| 8GHz to 16GHz Frequency Range....................                          | 3   |
| 16GHz to 20GHz Frequency Range..................                           | 4   |
| 20GHz to 22GHz Frequency Range..................                           | 4   |
| Absolute Maximum Ratings...................................5               |     |
| Thermal Resistance...........................................              | 5   |
| Electrostatic Discharge (ESD) Ratings...............5                      |     |
| ESD Caution.......................................................5        |     |
| Pin Configuration and Function Descriptions........                        | 6   |
| Interface Schematics..........................................7            |     |
| Typical Performance Characteristics.....................8                  |     |

## REVISION HISTORY

8/2025-Revision 0: Initial Version

| Theory of Operation.............................................16                                                                              |    |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Applications Information......................................                                                                                  | 17 |
| Power-Up Sequence........................................17                                                                                     |    |
| Power-Down Sequence....................................17                                                                                       |    |
| Operation Less Than 2GHz..............................17                                                                                        |    |
| Typical Application Circuit....................................18                                                                               |    |
| Assembly Diagram..............................................                                                                                  | 19 |
| Mounting and Bonding Techniques for Millimeterwave, GaN, Monolithic Microwave ICs (MMICs)...................................................... | 20 |
| Handling Precaution.........................................20                                                                                  |    |
| Mounting...........................................................20                                                                           |    |
| Wire Bonding....................................................20                                                                              |    |
| Outline Dimensions.............................................                                                                                 | 21 |
| Ordering Guide.................................................21                                                                               |    |

## ELECTRICAL SPECIFICATIONS

## 2GH z TO 8GH z FREQUENCY RANGE

TCASE = 25°C, VDD1 drain bias voltage (V DD1 ) and VDD2 drain bias voltage (V DD2 ) = 28V, target quiescent current (I DQ ) = 600mA, and frequency range = 2GHz to 8GHz, unless otherwise stated.

Table 1. 2GHz to 8GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                        |
|---------------------------------|-------|-------|-------|--------|-------------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                 | 2     |       | 8     | GHz    |                                                                                                 |
| GAIN                            |       |       |       |        |                                                                                                 |
| Small Signal Gain (S21)         | 16.5  | 20.5  |       | dB     |                                                                                                 |
| Gain Flatness                   |       | ±0.5  |       | dB     |                                                                                                 |
| Gain Variation over Temperature |       | 0.03  |       | dB/°C  |                                                                                                 |
| RETURN LOSS                     |       |       |       |        |                                                                                                 |
| Input (S11)                     |       | 16    |       | dB     |                                                                                                 |
| Output (S22)                    |       | 10    |       | dB     |                                                                                                 |
| POWER                           |       |       |       |        | P IN = 30.0dBm                                                                                  |
| Output (P OUT )                 | 39.5  | 41.5  |       | dBm    |                                                                                                 |
| Gain                            | 9.5   | 11.5  |       | dB     |                                                                                                 |
| Power Added Efficiency (PAE)    |       | 24    |       | %      |                                                                                                 |
| OIP3                            |       | 44.5  |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                                                      |
| OIP2                            |       | 51    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                                                      |
| SUPPLY                          |       |       |       |        |                                                                                                 |
| V DD                            |       | 28    | 30    | V      |                                                                                                 |
| I DQ                            |       | 600   |       | mA     | Adjust the gate control voltage (V GG1 ) between -3V and -1V to achieve an I DQ = 600mA typical |

## 8GH z TO 16GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 = V DD2 = 28V, I DQ = 600mA, and frequency range = 8GHz to 16GHz, unless otherwise stated.

Table 2. 8GHz to 16GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                            |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------------------------------|
| FREQUENCY RANGE                 | 8     |       | 16    | GHz    |                                                                     |
| GAIN                            |       |       |       |        |                                                                     |
| S21                             | 16    | 20    |       | dB     |                                                                     |
| Gain Flatness                   |       | ±0.3  |       | dB     |                                                                     |
| Gain Variation over Temperature |       | 0.03  |       | dB/°C  |                                                                     |
| RETURN LOSS                     |       |       |       |        |                                                                     |
| S11                             |       | 16    |       | dB     |                                                                     |
| S22                             |       | 13    |       | dB     |                                                                     |
| POWER                           |       |       |       |        | P IN = 30.0dBm                                                      |
| P OUT                           | 40    | 42    |       | dBm    |                                                                     |
| Gain                            | 10    | 12    |       | dB     |                                                                     |
| PAE                             |       | 24    |       | %      |                                                                     |
| OIP3                            |       | 43.5  |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| OIP2                            |       | 54    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| SUPPLY                          |       |       |       |        |                                                                     |
| V DD                            |       | 28    | 30    | V      |                                                                     |
| I DQ                            |       | 600   |       | mA     | Adjust V GG1 between -3V and -1V to achieve an I DQ = 600mA typical |

## ELECTRICAL SPECIFICATIONS

## 16GH z TO 20GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 = V DD2 = 28V, I DQ = 600mA, and frequency range = 16GHz to 20GHz, unless otherwise stated.

Table 3. 16GHz to 20GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                            |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------------------------------|
| FREQUENCY RANGE                 | 16    |       | 20    | GHz    |                                                                     |
| GAIN                            |       |       |       |        |                                                                     |
| S21                             | 16.5  | 20.5  |       | dB     |                                                                     |
| Gain Flatness                   |       | ±0.5  |       | dB     |                                                                     |
| Gain Variation over Temperature |       | 0.03  |       | dB/°C  |                                                                     |
| RETURN LOSS                     |       |       |       |        |                                                                     |
| S11                             |       | 16    |       | dB     |                                                                     |
| S22                             |       | 14    |       | dB     |                                                                     |
| POWER                           |       |       |       |        | P IN = 30.0dBm                                                      |
| P OUT                           | 39.5  | 41.5  |       | dBm    |                                                                     |
| Gain                            | 9.5   | 11.5  |       | dB     |                                                                     |
| PAE                             |       | 21    |       | %      |                                                                     |
| OIP3                            |       | 44    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| OIP2                            |       | 55    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| SUPPLY                          |       |       |       |        |                                                                     |
| V DD                            |       | 28    | 30    | V      |                                                                     |
| I DQ                            |       | 600   |       | mA     | Adjust V GG1 between -3V and -1V to achieve an I DQ = 600mA typical |

## 20GH z TO 22GH z FREQUENCY RANGE

TCASE = 25°C, V DD1 and V DD2 = 28V, I DQ = 600mA, and frequency range = 20GHz to 22GHz, unless otherwise stated

Table 4. 20GHz to 22GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                            |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------------------------------|
| FREQUENCY RANGE                 | 20    |       | 22    | GHz    |                                                                     |
| GAIN                            |       |       |       |        |                                                                     |
| S21                             |       | 19.5  |       | dB     |                                                                     |
| Gain Flatness                   |       | ±1.2  |       | dB     |                                                                     |
| Gain Variation over Temperature |       | 0.03  |       | dB/°C  |                                                                     |
| RETURN LOSS                     |       |       |       |        |                                                                     |
| S11                             |       | 12    |       | dB     |                                                                     |
| S22                             |       | 13    |       | dB     |                                                                     |
| POWER                           |       |       |       |        | P IN = 30.0dBm                                                      |
| P OUT                           |       | 40.5  |       | dBm    |                                                                     |
| Gain                            |       | 10.5  |       | dB     |                                                                     |
| PAE                             |       | 16    |       | %      |                                                                     |
| OIP3                            |       | 44    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| OIP2                            |       | 55    |       | dBm    | P OUT per tone = 32.0dBm with 1MHz spacing                          |
| SUPPLY                          |       |       |       |        |                                                                     |
| V DD                            |       | 28    | 30    | V      |                                                                     |
| I DQ                            |       | 600   |       | mA     | Adjust V GG1 between -3V and -1V to achieve an I DQ = 600mA typical |

## ABSOLUTE MAXIMUM RATINGS

Table 5. Absolute Maximum Ratings

| Parameter                                                                  | Rating                |
|----------------------------------------------------------------------------|-----------------------|
| Bias Voltage                                                               |                       |
| Drain (V DD1 and V DD2 )                                                   | 35V                   |
| Gate (V GG1 )                                                              | -8.0V DC to 0V DC     |
| Bias Current                                                               |                       |
| Gate Current (I GG1 ) at 85°C                                              | 7.2mA (see Figure 51) |
| RF Input Power (RFIN)                                                      | 33 dBm                |
| Continuous Power Dissipation (P DISS ),                                    | 63.3W                 |
| T CASE = 85°C, Derate 452mW/°C Above 85°C                                  |                       |
| Temperature                                                                |                       |
| Nominal Peak Channel, T CASE = 85°C, P IN = 30dBm, P DISS = 52.5W at 20GHz | 201°C                 |
| Storage Range                                                              | -55°C to +150°C       |
| Operating Range                                                            | -55°C to +85°C        |
| Maximum Channel                                                            | 225°C                 |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Overall thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is required with each material used in the thermal path under the IC. With an epoxy layer of nominal thickness assumed under the die, θ JC is the thermal resistance from the die channel to the bottom of the epoxy layer.

Table 6. Thermal Resistance

| Package Type   |   θ JC 1 | Unit   |
|----------------|----------|--------|
| C-16-6         |     2.21 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADPA1112CHIP

Table 7. ADPA1112CHIP, 16-Pad Bare Die

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.                       | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 3, 5, 7, 8, 10, 12, 13, 15 | GND        | Ground. Do not bond the GND pins. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                                                      |
| 2                             | RFIN       | RF Input. The RFIN pin is AC-coupled and matched to 50Ω. See Figure 4 for the interface schematic.                                                                                                                                                                                                                                                               |
| 4                             | VDD2       | Drain Bias for the Second Gain Stage. Capacitively bypass as shown in the typical application circuit (see Figure 56). See Figure 5 for the interface schematic.                                                                                                                                                                                                 |
| 6                             | VREF       | Reference Diode for Temperature Compensation of the VDET RF P OUT Measurements. Connect a 40.2kΩ resistor between the VREF pin and 5V to provide the DC bias. See Figure 6 for the interface schematic.                                                                                                                                                          |
| 9                             | RFOUT      | RF Output. The RFOUT pin is AC-coupled and matched to 50Ω. See Figure 5 for the interface schematic.                                                                                                                                                                                                                                                             |
| 11                            | VDET       | Detector Diode to Measure the RF P OUT . Used in combination with the VREF pin. The difference in voltage (VREF voltage (V REF ) - VDET voltage (V DET )) is a temperature compensated DC voltage that is proportional to the RF P OUT . Connect a 40.2kΩ resistor between the VDET pin and 5V to provide the DC bias. See Figure 5 for the interface schematic. |
| 14                            | VDD1       | Drain Bias for the First Gain Stage. Capacitively bypass as shown in the typical application circuit (see Figure 56). See Figure 7 for the interface schematic.                                                                                                                                                                                                  |
| 16                            | VGG1       | Gate Bias for the First and Second Gain Stages. Adjust the negative voltage on the VGG1 pin to set the I DQ to the desired level. See Figure 8 for the interface schematic.                                                                                                                                                                                      |
| Die Bottom                    | GND        | Ground. Connect the die bottom to the RF and DC ground. See Figure 3 for the interface schematic.                                                                                                                                                                                                                                                                |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. RFIN Interface Schematic

<!-- image -->

Figure 5. VDD2, VDET, and RFOUT Interface Schematic

<!-- image -->

Figure 6. VREF Interface Schematic

Figure 7. VDD1 Interface Schematic

<!-- image -->

Figure 8. VGG1 interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Small Signal Gain and Return Loss vs. Frequency, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 10. Small Signal Gain vs. Frequency for Various Supply Voltages, I DQ = 600mA

<!-- image -->

Figure 11. Input Return Loss vs. Frequency for Various Temperatures, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 12. Small Signal Gain vs. Frequency for Various Temperatures, VDD  = 28V, I DQ = 600mA

Figure 13. Small Signal Gain vs. Frequency for Various Supply Currents, VDD  = 28V

<!-- image -->

Figure 14. Input Return Loss vs. Frequency for Various Supply Voltages, I DQ  = 600mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. Input Return Loss vs. Frequency for Various Supply Currents, VDD  = 28V

<!-- image -->

Figure 16. Output Return Loss vs. Frequency for Various Supply Voltages, I DQ = 600mA

<!-- image -->

Figure 17. Reverse Isolation vs. Frequency for Various Temperatures, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 18. Output Return Loss vs. Frequency for Various Temperatures, VDD  = 28V, I DQ = 600mA

Figure 19. Output Return Loss vs. Frequency for Various Supply Currents, VDD  = 28V

<!-- image -->

Figure 20. P OUT vs. Frequency for Various P IN Levels, VDD  = 28V, I DQ = 600mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. PAE vs. Frequency for Various P IN Levels, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 22. P OUT vs. Frequency at Various Temperatures for P IN = 30dBm, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 23. Power Gain vs. Frequency at Various Temperatures for PIN = 30dBm, V DD = 28V, I DQ = 600mA

<!-- image -->

Figure 24. Power Gain vs. Frequency for Various P IN Levels, VDD  = 28V, I DQ = 600mA

Figure 25. PAE vs. Frequency at Various Temperatures for P IN = 30dBm, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 26. P OUT vs. Frequency for Various Supply Voltages at P IN = 30dBm, I DQ = 600mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. PAE vs. Frequency for Various Supply Voltages at P IN = 30dBm, I DQ = 600mA

<!-- image -->

Figure 28. P OUT vs. Frequency for Various Supply Currents at P IN = 30dBm, VDD  = 28V

<!-- image -->

Figure 29. Power Gain vs. Frequency for Various Supply Currents at PIN = 30dBm, V DD = 28V

<!-- image -->

Figure 30. Power Gain vs. Frequency for Various Supply Voltages at PIN = 30dBm I DQ = 600mA

Figure 31. PAE vs. Frequency for Various Supply Currents at P IN = 30dBm, VDD  = 28V

<!-- image -->

Figure 32. PAE, P OUT , Gain, and Supply Current (I DD ) vs. P IN at 4GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 33. PAE, P OUT , Gain, and I DD vs. P IN at 8GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 34. PAE, P OUT , Gain, and I DD vs. P IN at 16GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 35. Second Harmonic vs. P OUT for Various Frequencies, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 36. PAE, P OUT , Gain, and I DD vs. P IN at 12GHz, VDD  = 28V, I DQ = 600mA

Figure 37. PAE, P OUT , Gain, and I DD vs. P IN at 20GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 38. Third Harmonic vs. P OUT for Various Frequencies, VDD  = 28V, I DQ = 600mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 39. OIP3 vs. Frequency for Various Temperatures at POUT per Tone = 32dBm, V DD = 28V, I DQ = 600mA

<!-- image -->

Figure 40. OIP3 vs. Frequency for Various Supply Currents at POUT per Tone = 32dBm, V DD = 28V, I DQ = 600mA

<!-- image -->

Figure 41. OIP2 vs. Frequency for Various Supply Voltages at POUT per Tone = 32dBm I DQ = 600mA

<!-- image -->

Figure 42. OIP3 vs. Frequency for Various Supply Voltages at POUT per Tone = 32dBm, I DQ = 600mA

Figure 43. OIP2 vs. Frequency for Various Temperatures at POUT per Tone = 32dBm V DD = 28V, I DQ = 600mA

<!-- image -->

Figure 44. OIP2 vs. Frequency for Various Supply Currents at POUT per Tone = 32dBm V DD = 28V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. IM3 vs. P OUT per Tone for Various Frequencies, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 46. Noise Figure vs. Frequency for Various Temperatures, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 47. Noise Figure vs. Frequency for Various Supply Currents, VDD  = 28V

<!-- image -->

Figure 48. Noise Figure vs. Frequency for Various Supply Voltages, I DQ = 600mA

Figure 49. P DISS vs. P IN for Various Frequencies at T CASE = 85°C, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 50. I DQ vs. V GG1 for Various Temperatures, VDD  = 28V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 51. I GG1 vs. P IN for Various Frequencies at VDD  = 28V, I DQ = 600mA at 85°C

<!-- image -->

Figure 52. V REF - V DET vs. P OUT for Various Temperature at 12GHz, VDD  = 28V, I DQ = 600mA

Figure 53. V REF - V DET vs. P OUT for Various Temperature at 4GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

Figure 54. V REF - V DET vs. P OUT for Various Temperature at 20GHz, VDD  = 28V, I DQ = 600mA

<!-- image -->

## THEORY OF OPERATION

The ADPA1112CHIP is a GaN power amplifier with cascaded gain stages that are biased by a positive drain supply (V DD1 and V DD2 ) and an externally applied negative gate voltage (V GG1 ). A nominal 28V is applied to the first and second stage drains (VDD1 and VDD2) and a negative voltage is applied to VGG1 to set the total I DQ to 600mA nominal.

When biased as described, the ADPA1112CHIP operates in Class AB, resulting in the maximum PAE at saturation. The ADPA1112CHIP features integrated RF chokes for each drain plus on-chip DC blocking of the RFIN and RFOUT ports.

A portion of the RF output signal is directionally coupled to a diode for detection of the RF P OUT. When the diode is DC biased, the diode rectifies the coupled RF power and makes it available for measurement as a DC voltage at VDET. To allow temperature compensation of VDET, an identical and symmetrically located circuit without the coupled RF power is available through VREF. Taking the difference of V REF - V DET provides a temperature-compensated signal that is proportional to the RF output.

Figure 55. Basic Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

## POWER-UP SEQUENCE

To turn on the ADPA1112CHIP, take the following steps:

1. Connect the power supply grounds to GND.
2. Set V GG1 to -4V.
4. Adjust V GG1 more positive to achieve an I DQ of 600mA, approximately -2V.
3. Set V DD1 and V DD2 to 28V.
5. Apply the RF signal.

## POWER-DOWN SEQUENCE

To turn off the ADPA1112CHIP, take the following steps:

1. Turn off the RF signal.
2. Set V GG1 to -4V to achieve an I DQ of 0mA.
4. Increase V GG1 to 0V.
3. Set the voltage on V DD1 and V DD2 to 0V.

<!-- image -->

## OPERATION LESS THAN 2GH z

Though the ADPA1112CHIP is specified for operation from 2GHz to 22GHz, there may be uses for the device as low as 1GHz. Approaching saturation at less than 2GHz, the gate current may increase more than its 7.2mA absolute maximum rating. For typical I GG1 vs. P IN performance, see Figure 51. To limit that current, a series resistor can be inserted in the gate line. Note that the series resistor may affect performance.

## TYPICAL APPLICATION CIRCUIT

Figure 56 shows the typical application circuit.

Figure 56. Typical Application Circuit

<!-- image -->

## ASSEMBLY DIAGRAM

Figure 57 shows the assembly diagram for the ADPA1112CHIP.

Figure 57. Assembly Diagram

<!-- image -->

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETERWAVE, GAN, MONOLITHIC MICROWAVE ICS (MMICS)

## HANDLING PRECAUTION

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle-based or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. After the sealed ESD protective bag is opened, store all dies in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pickup.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of tweezers.

## MOUNTING

Before the die is attached, apply enough high thermal conductive epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## WIRE BONDING

RF bonds made with 1mil gold wire are recommended for the RF pads. These bonds must be thermosonically bonded with a force of 40g to 60g. Thermosonically bonded DC bonds of 0.025mm diameter (0.001in) are recommended. Create ball bonds with a force of 40g to 50g, and wedge bonds with a force of 18g to 22g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.31mm (12mil).

Attach the die directly to the ground plane with high thermal conductive epoxy (see the Handling Precaution section, the Mounting section, and the Wire Bonding section).

Place the microstrip substrates as close to the die as possible to wire bond length. Typical die to substrate spacing is 0.076mm to 0.152mm (3mil to 6mil).

Figure 58. Input Wire Bonding and Substrate Spacing

<!-- image -->

Figure 59. Output Wire Bonding and Substrate Spacing

<!-- image -->

## OUTLINE DIMENSIONS

Figure 60. 16-Pad Bare Die [CHIP]

<!-- image -->

(C-16-6) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1         | Temperature Range   | Package Description    | Package Option   |
|-----------------|---------------------|------------------------|------------------|
| ADPA1112CHIP    | -55°C to +85°C      | 16-Pad Bare Die [CHIP] | C-16-6           |
| ADPA1112CHIP-SX | -55°C to +85°C      | Die Sample Pack        | C-16-6           |

<!-- image -->

11-04-2024-A