<!-- lastmod 2024-04-15 -->
<!-- image -->

## Commercial Space Product

## HMC8413-CSL

## GaAs, pHEMT, MMIC, Low Noise Amplifier, 0.01 GHz to 9 GHz

## FEATURES

- Low noise figure: 1.9 dB typical at 0.01 GHz to 7 GHz
- Single positive supply (self biased)
- High gain: 19.5 dB typical at 0.01 GHz to 7 GHz
- High OIP3: 35 dBm typical at 0.01 GHz to 7 GHz
- RoHS-compliant, 2 mm × 2 mm, 6-lead LFCSP

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation benchmark
- Total ionizing dose (TID): 30 krads
- No single event latchup (SEL) occurs at ≤ 62.4 MeV-cm 2 /mg linear energy transfer

## APPLICATIONS

- Low Earth orbit (LEO) space payloads
- Satellite communication

## GENERAL DESCRIPTION

The HMC8413-CSL is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), low noise wideband amplifier that operates from 0.01 GHz to 9 GHz.

The HMC8413-CSL provides a typical gain of 19.5 dB, a 1.9 dB typical noise figure, and a typical output third-order intercept (OIP3) of 35 dBm at 0.01 GHz to 7 GHz, requiring only 95 mA from a 5 V supply voltage. The saturated output power (P SAT ) of 22 dBm typical at 0.01 GHz to 7 GHz enables the low noise amplifier to function as a local oscillator (LO) driver for many of Analog Devices, Inc., balanced, in-phase/quadrature (I/Q) or image rejection mixers.

The HMC8413-CSL also features inputs and outputs that are internally matched to 50 Ω, making the device ideal for surface-mounted technology (SMT)-based, high capacity microwave radio applications.

The HMC8413-CSL is housed in an RoHS-compliant, 2 mm × 2 mm, 6-lead LFCSP.

Throughout this data sheet, multifunction pins, such as RF OUT /V DD , are referred to either by the entire pin name or by a single function of the pin, for example RF OUT , when only that function is relevant.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the HMC8413 data sheet.

Rev. 0

DOCUMENT FEEDBACK

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Commercial Space Features.................................1                |     |
| Applications...........................................................    | 1   |
| General Description...............................................1        |     |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     | 3   |
| 0.01 GHz to 7 GHz Frequency Range...............                           | 3   |
| 7 GHz to 9 GHz Frequency Range....................                         | 3   |
| Radiation Test and Limit Specifications..............4                     |     |
| Absolute Maximum Ratings...................................5               |     |

## REVISION HISTORY

3/2023-Revision 0: Initial Version

Thermal Resistance........................................... 5

Outgas Testing................................................... 5

Radiation Testing................................................5

Electrostatic Discharge (ESD) Ratings...............5

ESD Caution.......................................................5

Pin Configuration and Function Descriptions........ 6

Typical Performance Characteristics..................... 7

Outline Dimensions............................................. 18

Ordering Guide.................................................18

## SPECIFICATIONS

## 0.01 GHZ TO 7 GHZ FREQUENCY RANGE

Supply voltage (V DD ) = 5 V, supply current (I DQ ) = 95 mA, bias resistance (R BIAS ) = 787 Ω, and T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                                 | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                    |
|-------------------------------------------|-------|-------|-------|--------|-------------------------------------------------------------|
| FREQUENCY RANGE                           | 0.01  |       | 7     | GHz    |                                                             |
| GAIN                                      | 17.5  | 19.5  |       | dB     |                                                             |
| Gain Variation over Temperature           |       | 0.013 |       | dB/°C  |                                                             |
| NOISE FIGURE                              |       | 1.9   |       | dB     |                                                             |
| RETURN LOSS                               |       |       |       |        |                                                             |
| Input                                     |       | 15    |       | dB     |                                                             |
| Output                                    |       | 18    |       | dB     |                                                             |
| OUTPUT                                    |       |       |       |        |                                                             |
| Output Power for 1 dB Compression (OP1dB) | 19    | 21.5  |       | dBm    |                                                             |
| P SAT                                     |       | 22    |       | dBm    |                                                             |
| OIP3                                      |       | 35    |       | dBm    | Measurement taken at output power (P OUT ) per tone = 5 dBm |
| Output Second-Order Intercept (OIP2)      |       | 39    |       | dBm    | Measurement taken at P OUT per tone = 5 dBm                 |
|                                           |       | 37    |       | %      | Measured at P SAT                                           |
| POWER ADDED EFFICIENCY (PAE)              |       |       |       |        |                                                             |
| I DQ                                      |       | 95    |       | mA     |                                                             |
| V DD                                      | 2     | 5     | 6     | V      |                                                             |

## 7 GHZ TO 9 GHZ FREQUENCY RANGE

VDD  = 5 V, I DQ = 95 mA, R BIAS = 787 Ω, and T A = 25°C, unless otherwise noted.

## Table 2.

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                    |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                 | 7     |       | 9     | GHz    |                                             |
| GAIN                            | 17    | 19    |       | dB     |                                             |
| Gain Variation over Temperature |       | 0.02  |       | dB/°C  |                                             |
| NOISE FIGURE                    |       | 2.8   |       | dB     |                                             |
| RETURN LOSS                     |       |       |       |        |                                             |
| Input                           |       | 12    |       | dB     |                                             |
| Output                          |       | 15    |       | dB     |                                             |
| OUTPUT                          |       |       |       |        |                                             |
| OP1dB                           | 16.5  | 19    |       | dBm    |                                             |
| P SAT                           |       | 21    |       | dBm    |                                             |
| OIP3                            |       | 33    |       | dBm    | Measurement taken at P OUT per tone = 5 dBm |
| OIP2                            |       | 45    |       | dBm    | Measurement taken at P OUT per tone = 5 dBm |
| PAE                             |       | 22    |       | %      | Measured at P SAT                           |
| SUPPLY                          |       |       |       |        |                                             |
| I DQ                            |       | 95    |       | mA     |                                             |
| V DD                            | 2     | 5     | 6     | V      |                                             |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 5 V, I DQ = 95 mA, R BIAS = 787 Ω, and T A = 25°C, unless otherwise noted. Total ionizing dose (TID) testing characterized to 30 krads, no SEL occurs at ≤ 62.4 MeV-cm 2 /mg linear energy transfer.

Table 3.

| Parameter              | Min   | Typ   | Max   | Unit   |
|------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE        | 7     |       | 9     | GHz    |
| GAIN                   | 17    | 19    |       | dB     |
| OUTPUT OP1dB           | 16.5  | 19    |       | dBm    |
| SUPPLY CURRENT (I DQ ) |       | 95    |       | mA     |
| SUPPLY VOLTAGE V DD    | 2     | 5     | 6     | V      |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                                           |                 |
|------------------------------------------------------------------------------------|-----------------|
| V DD                                                                               | 7 V             |
| RF IN Power                                                                        | 25 dBm          |
| Continuous Power Dissipation (P DISS ), T A = 105°C (Derate 13.9 mW/°C Above 85°C) | 0.973W          |
| Temperature                                                                        |                 |
| Storage Range                                                                      | -65°C to +150°C |
| Operating Range                                                                    | -55°C to +105°C |
| Nominal Junction (T A = 105°C, V DD = 5 V, I DQ = 95 mA)                           | 139.2°C         |
| Maximum Junction                                                                   | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θ JC is the junction to case thermal resistance.

## Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| CP-6-12        |     72 | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 6. Outgas Testing

| Specification (Tested per ASTM E595 -15)   | Value   | Unit   |
|--------------------------------------------|---------|--------|
| Total Mass Lost                            | 0.08    | %      |
| Collected Volatile Condensable Material    | <0.01   | %      |
| Water Vapor Recovered                      | 0.04    | %      |

## RADIATION TESTING

Table 7. Radiation Testing

| Specifications                                                                    | Value   | Unit         |
|-----------------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (dose rate = 50 to 300 rads (Si)/sec) 1              | 30      | krads (Si)   |
| No Single Event Latch-Up (SEL) Occurs at Effective Linear Energy Transfer (LET) 2 | ≤62.4   | MeV-cm 2 /mg |

- 1 Guaranteed by device and process characterization. Contact Analog Devices for data available up to 30 krads.
- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices for further data beyond published report on the Analog Devices website.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for HMC8413-CSL

Table 8. HMC8413-CSL, 6-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 9. Pin Function Descriptions

| Pin No.   | Mnemonic     | Description                                                                                                                                |
|-----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | R BIAS       | Current Mirror Bias Resistor. Use the R BIAS pin via the external resistor (R2, see Figure 1) to set the current to the internal resistor. |
| 2         | RF IN        | RF Input. The RF IN pin is DC-coupled and matched to 50 Ω.                                                                                 |
| 3, 4      | GND          | Ground. This pin must be connected to the RF and DC ground.                                                                                |
| 5         | RF OUT /V DD | RF Output/Drain Bias for the Amplifier. The RF OUT /V DD pin is DC-coupled and matched to 50 Ω.                                            |
| 6         | NC           | No Connect. This pin is not connected internally. This pin must be connected to the RF and DC ground.                                      |
|           | EPAD         | Exposed Pad. The exposed pad must be connected to the RF and DC ground.                                                                    |

## TYPICAL PERFORMANCE CHARACTERISTICS

I DQ is the collector current without RF signal applied, and I DD is the collector current with RF signal applied.

<!-- image -->

Figure 3. Broadband Gain and Return Loss vs. Frequency, 200 MHz to 14 GHz, V DD = 5 V, I DQ = 95 mA (S22 Is the Output Return Loss, S21 Is the Gain, and S11 Is the Input Return Loss)

<!-- image -->

Figure 4. Gain vs. Frequency for Various Temperatures, 10 MHz to 200 MHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 5. Gain vs. Frequency for Various Supply Voltages and I DQ , R BIAS = 787 Ω

<!-- image -->

Figure 6. Gain and Return Loss vs. Frequency, 10 MHz to 200 MHz, V DD = 5 V, I DQ = 95 mA

Figure 7. Gain vs. Frequency for Various Temperatures, 200 MHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 8. Gain vs. Frequency for Various Bias Resistor Values and I DQ , VDD  = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Input Return Loss vs. Frequency for Various Temperatures, 10 MHz to 200 MHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 10. Input Return Loss vs. Frequency for Various Supply Voltages and I DQ , R BIAS = 787 Ω

<!-- image -->

Figure 11. Output Return Loss vs. Frequency for Various Temperatures, 10 MHz to 200 MHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 12. Input Return Loss vs. Frequency for Various Temperatures, 200 MHz to 12 GHz, V DD = 5 V, I DQ = 95 mA

Figure 13. Input Return Loss vs. Frequency for Various Bias Resistor Values and I DQ , V DD = 5 V

<!-- image -->

Figure 14. Output Return Loss vs. Frequency for Various Temperatures, 200 MHz to 12 GHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. Output Return Loss vs. Frequency for Various Supply Voltages and I DQ , R BIAS = 787 Ω

<!-- image -->

Figure 16. Reverse Isolation vs. Frequency for Various Temperatures, 10 MHz to 200 MHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 17. Reverse Isolation vs. Frequency for Various Supply Voltages and I DQ , R BIAS = 787 Ω

<!-- image -->

Figure 18. Output Return Loss vs. Frequency for Various Bias Resistor Values and I DQ , V DD = 5 V

Figure 19. Reverse Isolation vs. Frequency for Various Temperatures, 200 MHz to 12 GHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 20. Reverse Isolation vs. Frequency for Various Bias Resistor Values and I DQ , V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. Noise Figure vs. Frequency for Various Temperatures, 10 MHz to 200 MHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 22. Noise Figure vs. Frequency for Various Supply Voltages and I DQ , 10 MHz to 200 MHz, R BIAS = 787 Ω

<!-- image -->

Figure 23. Noise Figure vs. Frequency for Various Bias Resistor Values and I DQ , 10 MHz to 200 MHz, V DD = 5 V

<!-- image -->

Figure 24. Noise Figure vs. Frequency for Various Temperatures, 200 MHz to 12 GHz, V DD = 5 V, I DQ = 95 mA

Figure 25. Noise Figure vs. Frequency for Various Supply Voltages and I DQ , 200 MHz to 12 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 26. Noise Figure vs. Frequency for Various Bias Resistor Values and I DQ , 200 MHz to 12 GHz, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. OP1dB vs. Frequency for Various Temperatures, 0.01 GHz to 1.0 GHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 28. OP1dB vs. Frequency for Various Supply Voltages and I DQ , 0.01 GHz to 1.0 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 29. OP1dB vs. Frequency for Various Bias Resistor Values and I DQ , 0.01 GHz to 1.0 GHz, V DD = 5 V

<!-- image -->

Figure 30. OP1dB vs. Frequency for Various Temperatures, 1 GHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

Figure 31. OP1dB vs. Frequency for Various Supply Voltages and I DQ , 1 GHz to 12 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 32. OP1dB vs. Frequency for Various Bias Resistor Values and I DQ , 1 GHz to 12 GHz, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 33. P SAT vs. Frequency for Various Temperatures, 0.01 GHz to 1.0 GHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 34. P SAT vs. Frequency for Various Supply Voltages and I DQ , 0.01 GHz to 1.0 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 35. P SAT vs. Frequency for Various Bias Resistor Values and I DQ , 0.01 GHz to 1.0 GHz, V DD = 5 V

<!-- image -->

Figure 36. P SAT vs. Frequency for Various Temperatures, 1 GHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

Figure 37. P SAT vs. Frequency for Various Supply Voltages and I DQ , 1 GHz to 12 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 38. P SAT vs. Frequency for Various Bias Resistor Values and I DQ , 1 GHz to 12 GHz, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 39. PAE vs. Frequency for Various Temperatures, 0.01 GHz to 1.0 GHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 40. P OUT , Gain, PAE, and I DD vs. Input Power, Power Compression at 1 GHz, V DD = 5 V, R BIAS = 787 Ω

<!-- image -->

Figure 41. P OUT , Gain, PAE, and I DD vs. Input Power, Power Compression at 9 GHz, V DD = 5 V, R BIAS = 787 Ω

<!-- image -->

Figure 42. PAE vs. Frequency for Various Temperatures, 1 GHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

Figure 43. P OUT , Gain, PAE, and I DD vs. Input Power, Power Compression at 5 GHz, V DD = 5 V, R BIAS = 787 Ω

<!-- image -->

Figure 44. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage, Power Compression at 1 GHz, R BIAS = 787 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 45. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage, Power Compression at 5 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 46. OIP3 vs. Frequency for Various Temperatures, 0.01 GHz to 1.0 GHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 47. OIP3 vs. Frequency for Various Supply Voltages and I DQ , 0.01 GHz to 1.0 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 48. OP1dB, P SAT , Gain, and I DD vs. Supply Voltage, Power Compression at 9 GHz, R BIAS = 787 Ω

Figure 49. OIP3 vs. Frequency for Various Temperatures, 1 GHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 50. OIP3 vs. Frequency for Various Supply Voltages and I DQ , 1 GHz to 12 GHz, R BIAS = 787 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 51. OIP3 vs. Frequency for Various Bias Resistor Values and I DQ , 0.01 GHz to 1.0 GHz, V DD = 5 V

<!-- image -->

Figure 52. OIP2 vs. Frequency for Various Temperatures, 0.01 GHz to 1.0 GHz, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 53. OIP2 vs. Frequency for Various Supply Voltages and I DQ , 0.01 GHz to 1.0 GHz, R BIAS = 787 Ω

<!-- image -->

Figure 54. OIP3 vs. Frequency for Various Bias Resistor Values and I DQ , 1 GHz to 12 GHz, V DD = 5 V

Figure 55. OIP2 vs. Frequency for Various Temperatures, 1 GHz to 12 GHz, VDD  = 5 V, I DQ = 95 mA

<!-- image -->

Figure 56. OIP2 vs. Frequency for Various Supply Voltages and I DQ , 1 GHz to 12 GHz, R BIAS = 787 Ω

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 57. OIP2 vs. Frequency for Various Bias Resistor Values and I DQ , 0.01 GHz to 1.0 GHz, V DD = 5 V

<!-- image -->

Figure 58. P DISS vs. Input Power at T A = 85°C, V DD = 5 V, I DQ = 95 mA

<!-- image -->

Figure 59. I DQ vs. Bias Resistor Value, 300 Ω to 1 kΩ, V DD = 5 V

<!-- image -->

Figure 60. OIP2 vs. Frequency for Various Bias Resistor Values and I DQ , 1 GHz to 12 GHz, V DD = 5 V

Figure 61. I DD vs. Input Power for Various Frequencies, V DD = 5 V

<!-- image -->

Figure 62. I DQ vs. Bias Resistor Value, 1 kΩ to 12 kΩ, V DD = 5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 63. I DQ vs. Bias Resistor Value, 1 Ω to 1 kΩ, V DD = 3 V

Figure 64. I DQ vs. Supply Voltage, R BIAS = 787 Ω

<!-- image -->

Figure 65. I DQ vs. Bias Resistor Value, 1 kΩ to 12 kΩ, V DD = 3 V

<!-- image -->

## OUTLINE DIMENSIONS

Figure 66. 6-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 2 mm Body and 0.85 mm Package Height (CP-6-12) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                          | Package Option   |
|--------------------|---------------------|----------------------------------------------|------------------|
| HMC8413LP2FE-CSL   | -55°C to +105°C     | 6-Lead Lead Frame Chip Scale Package [LFCSP] | CP-6-12          |
| HMC8413LP2FETR-CSL | -55°C to +105°C     | 6-Lead Lead Frame Chip Scale Package [LFCSP] | CP-6-12          |

<!-- image -->