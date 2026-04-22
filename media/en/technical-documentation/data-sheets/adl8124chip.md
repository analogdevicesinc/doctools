<!-- lastmod 2025-11-03 -->
<!-- image -->

## ADL8124CHIP

## 1GHz to 20GHz, Low Noise Amplifier with Integrated Temperature Sensor and Enable Function

## FEATURES

- Single positive supply: 3.3V and I DQ of 55mA nominal
- RBIAS drain current adjustment pin
- Integrated temperature sensor
- Integrated enable and disable function
- Gain: 14.5dB typical from 10GHz to 15GHz
- OIP3: 29dBm typical from 10GHz to 15GHz
- Noise figure: 2dB typical from 10GHz to 15GHz
- Extended operating temperature range: -55°C to +125°C
- Die size: 1.55mm × 0.95mm × 0.1mm

## APPLICATIONS

- Telecommunications
- Test instrumentation
- Military

## GENERAL DESCRIPTION

The ADL8124CHIP is a highly integrated, 1GHz to 20GHz, low noise amplifier (LNA). On-chip features include input and output AC coupling capacitors, an integrated bias inductor, an integrated temperature sensor, and an enable or disable pad (VENBL).

The typical gain and noise figure are 14.5dB and 2dB, respectively, from 10GHz to 15GHz. The output power for 1 dB compression (OP1dB), output third-order intercept (OIP3), and output second-order intercept (OIP2) are 15dBm, 29dBm, and 38dBm, respectively, from 10GHz to 15GHz. The nominal operating current (I DQ ), which can be adjusted, is 55mA operating from a 3.3V supply voltage (V DD ). Operation at 5V is also supported.

The ADL8124CHIP is fabricated on a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT) process. This device is specified for operation over an extended temperature range of -55°C to +125°C.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| General Description...............................................1        |     |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     | 3   |
| 1GHz to 2GHz Frequency Range......................                         | 3   |
| 2GHz to 10GHz Frequency Range....................                          | 3   |
| 10GHz to 15GHz Frequency Range..................                           | 4   |
| 15GHz to 18GHz Frequency Range..................                           | 4   |
| 18GHz to 20GHz Frequency Range..................                           | 5   |
| DC Specifications...............................................6          |     |
| Absolute Maximum Ratings...................................7               |     |
| Thermal Resistance...........................................              | 7   |
| Electrostatic Discharge (ESD) Ratings...............7                      |     |

## REVISION HISTORY

9/2025-Revision 0: Initial Version

| ESD Caution.......................................................7                           |    |
|-----------------------------------------------------------------------------------------------|----|
| Pin Configuration and Function Descriptions........                                           | 8  |
| Interface Schematics..........................................9                               |    |
| Typical Performance Characteristics...................10                                      |    |
| Amplifier On State (V ENBL = 3.3V)....................10                                      |    |
| Amplifier Off State (V ENBL = 0V).......................25                                    |    |
| Theory of Operation.............................................26                            |    |
| Applications Information......................................                                | 27 |
| Mounting and Bonding Techniques for Millimeter GaAs MMICs..................................28 |    |
| Recommended Bias Sequencing.....................29                                            |    |
| Outline Dimensions.............................................                               | 30 |
| Ordering Guide.................................................30                             |    |

## SPECIFICATIONS

## 1GH z TO 2GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, bias resistance (R BIAS ) = 1540Ω, VENBL voltage (V ENBL ) = 3.3V, and T CASE = 25°C, unless otherwise noted.

Table 1. 1GHz to 2GHz Frequency Range

| Parameter                       | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                                   |
|---------------------------------|-------|--------|-------|--------|------------------------------------------------------------|
| FREQUENCY RANGE                 | 1     |        | 2     | GHz    |                                                            |
| GAIN                            | 11.5  | 13.5   |       | dB     |                                                            |
| Gain Variation over Temperature |       | 0.0042 |       | dB/°C  |                                                            |
| NOISE FIGURE                    |       | 1.8    |       | dB     |                                                            |
| RETURN LOSS                     |       |        |       |        |                                                            |
| Input (S11)                     |       | 8      |       | dB     |                                                            |
| Output (S22)                    |       | 8      |       | dB     |                                                            |
| OUTPUT                          |       |        |       |        |                                                            |
| OP1dB                           | 13    | 15     |       | dBm    |                                                            |
| Saturated Power (P SAT )        |       | 16     |       | dBm    |                                                            |
| OIP3                            |       | 28     |       | dBm    | Measurement taken at output power (P OUT ) per tone = 0dBm |
| OIP2                            |       | 35     |       | dBm    | Measurement taken at P OUT per tone = 0dBm                 |
| POWER ADDED EFFICIENCY (PAE)    |       | 19     |       | %      | Measured at P SAT                                          |

## 2GH z TO 10GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, V ENBL = 3.3V, and T CASE = 25°C, unless otherwise noted.

Table 2. 2GHz to 10GHz Frequency Range

| Parameter                       | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                   |
|---------------------------------|-------|--------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 | 2     |        | 10    | GHz    |                                            |
| GAIN                            | 12    | 14     |       | dB     |                                            |
| Gain Variation over Temperature |       | 0.0052 |       | dB/°C  |                                            |
| NOISE FIGURE                    |       | 1.8    |       | dB     |                                            |
| RETURN LOSS                     |       |        |       |        |                                            |
| S11                             |       | 10.5   |       | dB     |                                            |
| S22                             |       | 12     |       | dB     |                                            |
| OUTPUT                          |       |        |       |        |                                            |
| OP1dB                           | 13.5  | 15.5   |       | dBm    |                                            |
| P SAT                           |       | 16     |       | dBm    |                                            |
| OIP3                            |       | 28.5   |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| OIP2                            |       | 30     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| PAE                             |       | 21     |       | %      | Measured at P SAT                          |

## SPECIFICATIONS

## 10GH z TO 15GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, V ENBL = 3.3V, and T CASE = 25°C, unless otherwise noted.

Table 3. 10GHz to 15GHz Frequency Range

| Parameter                       | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                   |
|---------------------------------|-------|--------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 | 10    |        | 15    | GHz    |                                            |
| GAIN                            | 12.5  | 14.5   |       | dB     |                                            |
| Gain Variation over Temperature |       | 0.0067 |       | dB/°C  |                                            |
| NOISE FIGURE                    |       | 2      |       | dB     |                                            |
| RETURN LOSS                     |       |        |       |        |                                            |
| S11                             |       | 11     |       | dB     |                                            |
| S22                             |       | 11     |       | dB     |                                            |
| OUTPUT                          |       |        |       |        |                                            |
| OP1dB                           | 13    | 15     |       | dBm    |                                            |
| P SAT                           |       | 16.5   |       | dBm    |                                            |
| OIP3                            |       | 29     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| OIP2                            |       | 38     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| PAE                             |       | 21     |       | %      | Measured at P SAT                          |

## 15GH z TO 18GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, V ENBL = 3.3V, and T CASE = 25°C, unless otherwise noted.

Table 4. 15GHz to 18GHz Frequency Range

| Parameter                       | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                   |
|---------------------------------|-------|--------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 | 15    |        | 18    | GHz    |                                            |
| GAIN                            | 12.5  | 14.5   |       | dB     |                                            |
| Gain Variation over Temperature |       | 0.0079 |       | dB/°C  |                                            |
| NOISE FIGURE                    |       | 2.2    |       | dB     |                                            |
| RETURN LOSS                     |       |        |       |        |                                            |
| S11                             |       | 12     |       | dB     |                                            |
| S22                             |       | 10.5   |       | dB     |                                            |
| OUTPUT                          |       |        |       |        |                                            |
| OP1dB                           | 11    | 13     |       | dBm    |                                            |
| P SAT                           |       | 15     |       | dBm    |                                            |
| OIP3                            |       | 26     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| OIP2                            |       | 51     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| PAE                             |       | 17     |       | %      | Measured at P SAT                          |

## SPECIFICATIONS

## 18GH z TO 20GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, V ENBL = 3.3V, and T CASE = 25°C, unless otherwise noted.

Table 5. 18GHz to 20GHz Frequency Range

| Parameter                       | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                   |
|---------------------------------|-------|--------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 | 18    |        | 20    | GHz    |                                            |
| GAIN                            | 12.5  | 14.5   |       | dB     |                                            |
| Gain Variation over Temperature |       | 0.0114 |       | dB/°C  |                                            |
| NOISE FIGURE                    |       | 2.5    |       | dB     |                                            |
| RETURN LOSS                     |       |        |       |        |                                            |
| S11                             |       | 12     |       | dB     |                                            |
| S22                             |       | 12     |       | dB     |                                            |
| OUTPUT                          |       |        |       |        |                                            |
| OP1dB                           |       | 10     |       | dBm    |                                            |
| P SAT                           |       | 13.5   |       | dBm    |                                            |
| OIP3                            |       | 21     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| OIP2                            |       | 57     |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| PAE                             |       | 10     |       | %      | Measured at P SAT                          |

## SPECIFICATIONS

## DC SPECIFICATIONS

## Table 6. DC Specifications

| Parameter                                    | Typ   | Max   | Unit   | Test Conditions/Comments   |
|----------------------------------------------|-------|-------|--------|----------------------------|
| SUPPLY CURRENT                               |       |       |        |                            |
| Enable                                       |       |       |        | V ENBL = 3.3V              |
| I DQ = Amplifier Current (I DQ_AMP ) + RBIAS | 55    |       | mA     |                            |
| Current (I RBIAS )                           |       |       |        |                            |
| I DQ_AMP                                     | 53.6  |       | mA     |                            |
| I RBIAS                                      | 1.4   |       | mA     |                            |
| Disable                                      |       |       |        | V ENBL = 0V                |
| I DQ = I DQ_AMP + I RBIAS                    | 6.6   |       | mA     |                            |
| I DQ_AMP                                     | 6.6   |       | mA     |                            |
| I RBIAS                                      | 0     |       | mA     |                            |
| SUPPLY VOLTAGE                               |       |       |        |                            |
| V DD                                         | 3.3   | 6     | V      |                            |

## Table 7. Logic Control (V ENBL )

| Parameter                                                                                           | Min   | Typ   | Max      | Unit   | Test Conditions/Comments                                                                                                 |
|-----------------------------------------------------------------------------------------------------|-------|-------|----------|--------|--------------------------------------------------------------------------------------------------------------------------|
| DIGITAL CONTROL INPUT Low, Amplifier Off State High, Amplifier On State VENBL Input Current (I ENBL | 0 1.5 | 0.4   | 1.1 V DD | V V mA | V ENBL = 3.3V                                                                                                            |
| SWITCHING TIME Amplifier On State Time Amplifier Off State Time                                     | 29 38 |       |          | ns ns  | 50% of the V ENBL rising edge to the output envelope at 90% 50% of the V ENBL falling edge to the output envelope at 10% |

## Table 8. Temperature Sensor

| Parameter                                                      | Min   |   Typ | Max   | Unit   |
|----------------------------------------------------------------|-------|-------|-------|--------|
| VTEMP Voltage (V TEMP ) Output Voltage (V OUT ), T CASE = 25°C |       |  1.6  |       | V      |
| V TEMP Temperature Coefficient, T CASE = -55°C to +125°C       |       |  2.55 |       | mV/°C  |

## ABSOLUTE MAXIMUM RATINGS

## Table 9. Absolute Maximum Ratings

| Parameter                              | Rating          |
|----------------------------------------|-----------------|
| V DD                                   | 7.5V            |
| V ENBL                                 | V DD            |
| RF Input Power Survivability (RFIN)    | 28dBm           |
| Continuous Power Dissipation (P DISS ) |                 |
| T CASE = 85°C                          | 0.92W           |
| T CASE = 125°C                         | 0.47W           |
| Temperature                            |                 |
| Storage Range                          | -65°C to +150°C |
| Operating Range                        | -55°C to +125°C |
| Maximum Channel                        | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Overall thermal performance is directly linked to the carrier or substrate on which the die is mounted. Careful attention is needed with each material used in the thermal path below the IC. With an epoxy layer of nominal thickness assumed under the die, θ JC is the thermal resistance from the die channel to the bottom of the epoxy layer.

## Table 10. Thermal Resistance 1

| Package Type   | θ JC   | Unit   |
|----------------|--------|--------|
| C-10-14        |        |        |
| T CASE = 25°C  | 84.3   | °C/W   |
| T CASE = 85°C  | 98.1   | °C/W   |
| T CASE = 125°C | 106.9  | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8124CHIP

Table 11. ADL8124CHIP, 10-Pad CHIP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

## ESD (electrostatic discharge) sensitive device . Charged

<!-- image -->

devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 12. Pin Function Descriptions

| Pin No.    | Mnemonic   | Description                                                                                                                                                                                                                 |
|------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS      | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set the I DQ . See the typical application circuit (see Figure 100) and Table 13 to Table 16 for more details. See Figure 7 for the interface schematic. |
| 2          | VTEMP      | Temperature Sensor Output Voltage. See Figure 5 for the interface schematic.                                                                                                                                                |
| 3, 5, 6, 8 | GND        | Ground. Connect the GND pads to a ground plane that has low electrical and thermal impedance. See Figure 3 for the interface schematic.                                                                                     |
| 4          | RFIN       | RF Input. RFIN is AC-coupled and matched to 50Ω. See Figure 4 for the interface schematic.                                                                                                                                  |
| 7          | RFOUT      | RF Output. The RFOUT pad is AC-coupled and matched to 50Ω. See Figure 6 for the interface schematic.                                                                                                                        |
| 9          | VENBL      | Device Enable. An active high digital signal enables the device, and an active low digital signal disables the device. See Figure 8 for the interface schematic.                                                            |
| 10         | VDD        | Drain Bias. Connect the VDD pad to the supply voltage. See Figure 6 for the interface schematic.                                                                                                                            |
| Die Bottom | GND        | Ground. Connect the die bottom to RF and DC ground. See Figure 3 for the interface schematic.                                                                                                                               |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. GND Interface Schematic

<!-- image -->

Figure 4. RFIN Interface Schematic

<!-- image -->

Figure 5. VTEMP Interface Schematic

<!-- image -->

Figure 6. RFOUT and VDD Interface Schematic

<!-- image -->

Figure 7. RBIAS Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## AMPLIFIER ON STATE (VENBL = 3.3V)

<!-- image -->

Figure 9. Broadband Gain and Return Loss vs. Frequency, 10MHz to 24GHz, V DD = 3.3V, I DQ = 55mA

<!-- image -->

Figure 10. Gain vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 11. Gain vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 12. Broadband Gain and Return Loss vs. Frequency, 10MHz to 24GHz, V DD = 5V, I DQ = 85mA

Figure 13. Gain vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 14. Gain vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. Gain vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 16. Input Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 17. Input Return Loss vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 18. Gain vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 19. Input Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 20. Input Return Loss vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. Input Return Loss vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 22. Output Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 23. Output Return Loss vs Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 24. Input Return Loss vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 25. Output Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 26. Output Return Loss vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. Output Return Loss vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 28. Reverse Isolation vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 29. Reverse Isolation vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 30. Output Return Loss vs. Frequency for Various I DQ Values, 1GHz to 20GHz, and V DD = 5V

Figure 31. Reverse Isolation vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 32. Reverse Isolation vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 33. Reverse Isolation vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 34. Noise Figure vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 35. Noise Figure vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 36. Reverse Isolation vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 37. Noise Figure vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 38. Noise Figure vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 39. Noise Figure vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V V

<!-- image -->

Figure 40. OP1dB vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 41. OP1dB vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 42. Noise Figure vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 43. OP1dB vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 44. OP1dB vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. OP1dB vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 46. P SAT vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 47. P SAT vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 48. OP1dB vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 49. P SAT vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 50. P SAT vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 51. P SAT vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 52. P DISS vs. P IN at for Various Frequencies at T CASE = 85°C, V DD = 3.3V, R BIAS = 1540Ω

<!-- image -->

Figure 53. PAE, Measured at P SAT vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V, I DQ = 15mA, R BIAS = 1540Ω

<!-- image -->

Figure 54. P SAT vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

Figure 55. P DISS vs. P IN for Various Frequencies at TCASE = 85°C, V DD = 5V, R BIAS = 1731Ω

<!-- image -->

Figure 56. PAE, Measured at P SAT vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 57. PAE, Measured at P SAT vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 55mA

<!-- image -->

Figure 58. PAE, Measured at P SAT vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 59. P OUT , Gain, PAE, and Drain Current (I DD ) vs. P IN , Power Compression at 5 GHz, V DD = 3.3V, R BIAS = 1540Ω

<!-- image -->

Figure 60. PAE, Measured at P SAT vs. Frequency for Various Supply Voltages, 1GHz to 20GHz, I DQ = 85mA

Figure 61. PAE, Measured at P SAT vs. Frequency for Various I DQ Values, 1GHz to 20GHz, V DD = 5V

<!-- image -->

Figure 62. P OUT , Gain, PAE, and I DD vs. P IN , Power Compression at 5 GHz, V DD = 5V, R BIAS = 1731Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 63. P OUT , Gain, PAE, and I DD vs. P IN , Power Compression at 10GHz, V DD = 3.3V, R BIAS = 1540Ω

<!-- image -->

Figure 64. P OUT , Gain, PAE, and I DD vs. P IN , Power Compression at 15GHz, V DD = 3.3V, R BIAS = 1540Ω

<!-- image -->

Figure 65. OIP3 vs. Frequency for Various Temperatures, 1GHz to 22GHz, VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, P OUT per Tone = 0dBm

<!-- image -->

Figure 66. P OUT , Gain, PAE, and I DD vs. P IN , Power Compression at 10GHz, V DD = 5V, R BIAS = 1731Ω

Figure 67. P OUT , Gain, PAE, and I DD vs. P IN , Power Compression at 15GHz, V DD = 5V, R BIAS = 1731Ω

<!-- image -->

Figure 68. OIP3 vs. Frequency for Various Temperatures, 1GHz to 20GHz, VDD  = 5V, I DQ = 85mA, R BIAS = 1731Ω, P OUT per Tone = 0dBm

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 69. OIP3 vs. Frequency for Various Supply Voltages, I DQ = 55mA, P OUT per Tone = 0dBm

<!-- image -->

Figure 70. OIP3 vs. Frequency for Various I DQ Values, VDD  = 3.3V, P OUT per Tone = 0dBm

<!-- image -->

Figure 71. OIP2 vs. Frequency for Various Temperatures, 1GHz to 20GHz, VDD  = 3.3V, I DQ = 55mA, R BIAS = 1540Ω, P OUT per Tone = 0dBm

<!-- image -->

Figure 72. OIP3 vs. Frequency for Various Supply Voltages, I DQ = 85mA, P OUT per Tone = 0dBm

Figure 73. OIP3 vs. Frequency for Various I DQ Values, VDD  = 5V, P OUT per Tone = 0dBm

<!-- image -->

Figure 74. OIP2 vs. Frequency for Various Temperatures, 1GHz to 20GHz, VDD  = 5V, I DQ = 85mA, R BIAS = 1731Ω, P OUT per Tone = 0dBm

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 75. OIP2 vs. Frequency for Various Supply Voltages, I DQ = 55mA, P OUT per Tone = 0dBm

<!-- image -->

Figure 76. OIP2 vs. Frequency for Various I DQ Values, VDD  = 3.3V, P OUT per Tone = 0dBm

<!-- image -->

Figure 77. Output IM3 vs. P OUT per Tone for Various Frequencies, VDD  = 3.3V, R BIAS = 1540Ω

<!-- image -->

Figure 78. OIP2 vs. Frequency for Various Supply Voltages, I DQ = 85mA, P OUT per Tone = 0dBm

Figure 79. OIP2 vs. Frequency for Various I DQ Values, VDD  = 5V, P OUT per Tone = 0dBm

<!-- image -->

Figure 80. Output IM3 vs P OUT per Tone for Various Frequencies, VDD  = 5V, R BIAS = 1731Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 81. Residual Phase Noise vs. Frequency at 5GHz for Various POUT Values, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 82. Residual Phase Noise vs. Frequency at 15GHz for Various POUT Values, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 83. I DQ vs. R BIAS for Various Supply Voltages, 0Ω to 5kΩ

<!-- image -->

Figure 84. Residual Phase Noise vs. Frequency at 10GHz for Various POUT Values, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

Figure 85. Overdrive Recovery Time vs. Pulsed P IN at 8 GHz, Recovery to Within 90% of Small Signal Gain Value, V DD = 5V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

Figure 86. I DQ vs. R BIAS for Various Supply Voltages, 5kΩ to 10kΩ

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 87. I DQ vs. Supply Voltage, R BIAS = 1540Ω

<!-- image -->

Figure 88. I DQ and I ENBL vs. V ENBL , R BIAS = 1540Ω

<!-- image -->

Figure 89. V TEMP vs. Temperature for Various Frequencies at OP1dB, VDD  = 3.3V V, I DQ = 55mA, R BIAS = 1540Ω

<!-- image -->

Figure 90. I DQ vs. Supply Voltage, R BIAS = 1731Ω

Figure 91. I DQ and I ENBL vs. V ENBL , R BIAS = 1731Ω

<!-- image -->

Figure 92. V TEMP vs. Temperature for Various Frequencies at OP1dB, VDD  = 5V V, I DQ = 85mA, R BIAS = 1731Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

093

Figure 93. On Response of the RFOUT Envelope Timing When the VENBL Pin Is Toggled

<!-- image -->

Figure 94. Off Response of the RFOUT Envelope Timing When the VENBL Pin Is Toggled

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## AMPLIFIER OFF STATE (VENBL = 0V)

<!-- image -->

Figure 95. Isolation and Return Loss vs. Frequency, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 96. Isolation vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V

Figure 97. Input Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

Figure 98. Output Return Loss vs. Frequency for Various Temperatures, 1GHz to 20GHz, V DD = 3.3V

<!-- image -->

## THEORY OF OPERATION

The ADL8124CHIP is a wideband LNA with integrated AC-coupling capacitors, a bias inductor, a temperature sensor, and an enable or disable function. Figure 99 shows the simplified architecture of the ADL8124CHIP.

The ADL8124CHIP has AC-coupled, single-ended input and output ports with impedance that are nominally equal to 50Ω over the 1GHz to 20GHz frequency range. No external matching components are required. The value of the resistor connected between VDD and RBIAS controls the I DQ .

The ADL8124CHIP contains an integrated temperature sensor. The temperature sensor is biased internally through the VDD pad. The voltage that is proportional to the device temperature can be measured on the VTEMP pad.

The ADL8124CHIP also has an enable or disable function. By pulling the VENBL pad high or low, the ADL8124CHIP can be enabled or disabled, respectively.

Figure 99. Simplified Architecture

<!-- image -->

## APPLICATIONS INFORMATION

The basic connections for operating the ADL8124CHIP over the specified frequency range are shown in Figure 100 . No external biasing inductor is required, which allows the 3.3V supply to be connected to the VDD pad. Alternatively, 5V supply operation is also supported. It is recommended to use 100pF power-supply decoupling capacitor. The power-supply decoupling capacitor shown in Figure 100 represent the configuration used to characterize and qualify the ADL8124CHIP.

To set I DQ , connect a resistor (R3) between the RBIAS and VDD pads. A default value of 1540Ω is recommended, which results in a nominal I DQ of 55mA. Table 13 shows how I DQ and I DQ\_AMP vary vs. R BIAS . The RBIAS pad also draws a current that varies with the value of R BIAS (see Table 13). Do not leave the RBIAS pad open.

The VTEMP pad provides an output voltage that is proportional to the die temperature. The VTEMP pad has a high output resistance that must be buffered using an op-amp. The temperature sensor is internally supplied through the VDD pad.

The VENBL pad provides a convenient method to power up or power down the ADL8124CHIP. To enable the amplifier, connect the VENBL pad to a supply. To disable the amplifier, connect the VENBL pad to ground.

Figure 100. Typical Application Circuit

<!-- image -->

## APPLICATIONS INFORMATION

## MOUNTING AND BONDING TECHNIQUES FOR MILLIMETER GAAS MMICS

Attach the die directly to the ground plane with conductive epoxy (see the Handling Precaution section, the Mounting section, and the Wire Bonding) section.

Place the microstrip substrates as close to the die as possible to minimize ribbon bond length. Typical die to substrate spacing is 0.076mm to 0.152mm (3mil to 6mil).

Figure 101. High Frequency Input Wideband Matching

<!-- image -->

Figure 102. High Frequency Output Wideband Matching

<!-- image -->

## Handling Precaution

To avoid permanent damage, follow these storage, cleanliness, static sensitivity, transient, and general handling precautions:

- Place all bare die in either waffle or gel-based ESD protective containers and then seal the die in an ESD protective bag for shipment. Once the sealed ESD protective bag is opened, store all die in a dry nitrogen environment.
- Handle the chips in a clean environment. Do not attempt to clean the chip using liquid cleaning systems.
- Follow ESD precautions to protect against ESD strikes.
- While bias is applied, suppress instrument and bias supply transients. Use shielded signal and bias cables to minimize inductive pick up.
- Handle the chip along the edges with a vacuum collet or with a sharp pair of bent tweezers. The surface of the chip may have fragile air bridges and must not be touched with vacuum collet, tweezers, or fingers.

## Mounting

Before the epoxy die is attached, apply a minimum amount of epoxy to the mounting surface so that a thin epoxy fillet is observed around the perimeter of the chip after it is placed into position. Cure the epoxy per the schedule of the manufacturer.

## Wire Bonding

RF bonds made with 0.076mm × 0.0127mm (3mil × 0.5mil) gold ribbon are recommended for the RF ports. These bonds must be thermionically bonded with a force of 40g to 60g. Thermionically bonded DC bonds of 0.025mm (1mil) diameter are recommended. Create ball bonds with a force of 40g to 50g and wedge bonds with a force of 18g to 22g. Create all bonds with a nominal stage temperature of 150°C. Apply the minimum amount of ultrasonic energy (depending on the process and package being used) to achieve reliable bonds. Keep all bonds as short as possible, less than 0.203mm (8mil).

Alternatively, use short RF bonds that are 0.076mm to 0.152mm (3mil to 6mil) and made with two 0.025mm (1mil) diameter wires.

## APPLICATIONS INFORMATION

## RECOMMENDED BIAS SEQUENCING

Correct sequencing of the DC and RF power is required to safely operate the ADL8124CHIP. To power up the ADL8124CHIP, take the following bias sequencing steps:

1. Set VDD to 3.3V.
2. Set VENBL to VDD.
3. Apply the RF input signal.

The ideal power-down sequence is the reverse order of the powerup sequence. Table 13 , Table 14 , Table 15, and Table 16 show alternate bias resistor options for different I DQ and V DD choices.

Table 13. Recommended Bias Resistor Values for V DD = 3.3V

|   R BIAS (Ω) |   I DQ (mA) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|-------------|-----------------|----------------|
|         5540 |          30 |            29.6 |            0.4 |
|         2836 |          40 |            39.2 |            8   |
|         1836 |          50 |            48.8 |            1.2 |
|         1540 |          55 |            53.6 |            1.4 |
|         1322 |          60 |            58.4 |            1.6 |
|         1015 |          70 |            68   |            2   |

Table 14. Recommended Bias Resistor Values for V DD = 5V

|   R BIAS (Ω) |   I DQ (mA) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|-------------|-----------------|----------------|
|         5539 |          50 |            49.3 |            0.7 |
|         3531 |          60 |            58.8 |            1.2 |
|         2532 |          70 |            68.5 |            1.5 |

Table 14. Recommended Bias Resistor Values for V DD = 5V (Continued)

|   R BIAS (Ω) |   I DQ (mA) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|-------------|-----------------|----------------|
|         1945 |          80 |            78   |            2   |
|         1731 |          85 |            82.8 |            2.2 |
|         1555 |          90 |            87.6 |            2.4 |
|         1275 |         100 |            97.2 |            2.8 |

Table 15. Recommended Bias Resistor Values for Various Supply Voltages, I DQ = 55mA

|   R BIAS (Ω) |   V DD (V) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|------------|-----------------|----------------|
|          776 |        2.5 |            53.3 |            1.7 |
|         1222 |        3   |            53.4 |            1.6 |
|         1540 |        3.3 |            53.6 |            1.4 |
|         2456 |        4   |            53.8 |            1.2 |
|         4312 |        5   |            54.1 |            0.9 |
|         7780 |        6   |            54.4 |            0.6 |

Table 16. Recommended Bias Resistor Values for Various Supply Voltages, I DQ = 85mA

|   R BIAS (Ω) |   V DD (V) |   I DQ_AMP (mA) |   I RBIAS (mA) |
|--------------|------------|-----------------|----------------|
|         1103 |        4   |            82.6 |            2.4 |
|         1399 |        4.5 |            82.7 |            2.3 |
|         1731 |        5   |            82.8 |            2.2 |
|         2102 |        5.5 |            82.9 |            2.1 |
|         2534 |        6   |            83   |            2   |

## OUTLINE DIMENSIONS

Figure 103. 10-Pad Bare Die [CHIP] (C-10-14) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1        | Temperature Range   | Package Description    | Package Option   |
|----------------|---------------------|------------------------|------------------|
| ADL8124CHIP    | -55°C to +125°C     | 10-Pad Base Die [CHIP] | C-10-14          |
| ADL8124CHIP-SX | -55°C to +125°C     | Die Sample Pack        | C-10-14          |

<!-- image -->

07-21-2025-A