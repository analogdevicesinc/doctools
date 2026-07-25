<!-- lastmod 2021-12-21 -->
<!-- image -->

Enhanced Product

## FEATURES

- Low noise figure: 1.7 dB typical
- Single positive supply (self biased)
- High gain: 15.5 dB typical
- High OIP3: 34 dBm typical
- 6-lead, 2 mm × 2 mm LFCSP

## ENHANCED PRODUCT FEATURES

- Supports defense and aerospace applications (AQEC standard) Military temperature range (-55°C to +125°C)
- Controlled manufacturing baseline 1 assembly/test site
- 1 fabrication site
- Product change notification
- Qualification data available on request

## APPLICATIONS

- Test instrumentation
- Military communications

## [HMC8411TCPZ-EP](http://www.analog.com/HMC8411)

## 0.01 GHz to 10 GHz Low Noise Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The HMC8411TCPZ-EP is a gallium arsenide (GaAs), monolithic microwave integrated circuit (MMIC), pseudomorphic high electron mobility transistor (pHEMT), low noise wideband amplifier that operates from 0.01 GHz to 10 GHz.

The HMC8411TCPZ-EP provides a typical gain of 15.5 dB, a 1.7 dB typical noise figure, and a typical output third-order intercept (OIP3) of 34 dBm, requiring only 55 mA from a 5 V supply voltage. The saturated output power (P SAT ) of 19.5 dBm typical enables the low noise amplifier (LNA) to function as a local oscillator (LO) driver for many of Analog Devices, Inc., balanced, in-phase/quadrature (I/Q), or image rejection mixers.

The HMC8411TCPZ-EP also features inputs and outputs that are internally matched to 50 Ω, making the device ideal for surfacemounted technology (SMT)-based, high capacity microwave radio applications.

The HMC8411TCPZ-EP is housed in a RoHS compliant, 2 mm × 2 mm, 6-lead LFCSP.

Multifunction pin names may be referenced by their relevant function only.

Additional application and technical information can be found in the HMC8411LP2FE data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                     | Absolute Maximum Ratings...................................5                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features..................................1                                                                                                   | Thermal Resistance........................................... 5                                                                                                |
| Applications........................................................... 1                                                                                      | Power Derating Curves......................................5                                                                                                   |
| Functional Block Diagram......................................1                                                                                                | ESD Caution.......................................................5                                                                                            |
| General Description...............................................1                                                                                            | Pin Configuration and Function Descriptions........ 6                                                                                                          |
| Specifications........................................................ 3                                                                                       | Interface Schematics..........................................6                                                                                                |
| 0.01 GHz to 1 GHz Frequency Range............... 3                                                                                                             | Typical Performance Characteristics.....................7                                                                                                      |
| 1 GHz to 6 GHz Frequency Range.................... 3                                                                                                           | Outline Dimensions..............................................11                                                                                             |
| 6 GHz to 10 GHz Frequency Range.................. 3                                                                                                            | Ordering Guide.................................................11                                                                                              |
| REVISION HISTORY                                                                                                                                               |                                                                                                                                                                |
| 10/2021-Rev. 0 to Rev. A                                                                                                                                       |                                                                                                                                                                |
| Changes to Output Power for 1 dB Compression Parameter, Table 3.............................................................3                                  | Changes to Output Power for 1 dB Compression Parameter, Table 3.............................................................3                                  |
| Changes to Continuous Power Dissipation, P DIS Parameter, Table 4............................................................. 5                               | Changes to Continuous Power Dissipation, P DIS Parameter, Table 4............................................................. 5                               |
| Change to Table 5............................................................................................................................................5 | Change to Table 5............................................................................................................................................5 |
| Changes to Figure 2........................................................................................................................................ 5  | Changes to Figure 2........................................................................................................................................ 5  |

7/2019-Revision 0: Initial Version

## SPECIFICATIONS

## 0.01 GHZ TO 1 GHZ FREQUENCY RANGE

VDD  = 5 V, supply current (I DQ ) = 55 mA, and T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                    |
|-----------------------------------|----------|-------|-------|-------|--------|-------------------------------------------------------------|
| FREQUENCY RANGE                   |          |  0.01 |       |     1 | GHz    |                                                             |
| GAIN                              |          |  12.5 |  15.5 |       | dB     |                                                             |
| Gain Variation over Temperature   |          |       | 0.005 |       | dB/°C  |                                                             |
| NOISE FIGURE                      |          |       |   1.8 |       | dB     |                                                             |
| RETURN LOSS Input                 |          |       |       |       |        |                                                             |
|                                   |          |       |    22 |       | dB     |                                                             |
| Output                            |          |       |    17 |       | dB     |                                                             |
| OUTPUT                            |          |       |       |       |        |                                                             |
| Output Power for 1 dB Compression | P1dB     |    17 |    20 |       | dBm    |                                                             |
| Saturated Output Power            | P SAT    |       |  20.5 |       | dBm    |                                                             |
| Output Third-Order Intercept      | OIP3     |       |  33.5 |       | dBm    | Measurement taken at output power (P OUT ) per tone = 6 dBm |
| Output Second-Order Intercept     | OIP2     |       |    43 |       | dBm    | Measurement taken at P OUT per tone = 6 dBm                 |
| POWER ADDED EFFICIENCY            | PAE      |       |    30 |       | %      | Measured at P SAT                                           |
| SUPPLY CURRENT                    | I DQ     |       |    55 |       | mA     |                                                             |
| SUPPLY VOLTAGE                    | V DD     |     2 |     5 |     6 | V      |                                                             |

## 1 GHZ TO 6 GHZ FREQUENCY RANGE

VDD  = 5 V, I DQ = 55 mA, and T A = 25°C, unless otherwise noted.

## Table 2.

| Parameter                         | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                   |          |     1 |       |     6 | GHz    |                                             |
| GAIN                              |          |    12 |    15 |       | dB     |                                             |
| Gain Variation over Temperature   |          |       | 0.010 |       | dB/°C  |                                             |
| NOISE FIGURE                      |          |       |   1.7 |       | dB     |                                             |
| RETURN LOSS                       |          |       |       |       |        |                                             |
| Input                             |          |       |    25 |       | dB     |                                             |
| Output                            |          |       |    18 |       | dB     |                                             |
| OUTPUT                            |          |       |       |       |        |                                             |
| Output Power for 1 dB Compression | P1dB     |    17 |    20 |       | dBm    |                                             |
| Saturated Output Power            | P SAT    |       |    21 |       | dBm    |                                             |
| Output Third-Order Intercept      | OIP3     |       |    34 |       | dBm    | Measurement taken at P OUT per tone = 6 dBm |
| Output Second-Order Intercept     | OIP2     |       |    39 |       | dBm    | Measurement taken at P OUT per tone = 6 dBm |
| POWER ADDED EFFICIENCY            | PAE      |       |    34 |       | %      | Measured at P SAT                           |
| SUPPLY CURRENT                    | I DQ     |       |    55 |       | mA     |                                             |
| SUPPLY VOLTAGE                    | V DD     |     2 |     5 |     6 | V      |                                             |

## 6 GHZ TO 10 GHZ FREQUENCY RANGE

VDD  = 5 V, I DQ = 55 mA, and T A = 25°C, unless otherwise noted.

Table 3.

| Parameter                       | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments   |
|---------------------------------|----------|-------|-------|-------|--------|----------------------------|
| FREQUENCY RANGE                 |          |     6 |       |    10 | GHz    |                            |
| GAIN                            |          |    11 |    14 |       | dB     |                            |
| Gain Variation over Temperature |          |       | 0.013 |       | dB/°C  |                            |

## SPECIFICATIONS

## Table 3.

| Parameter                         | Symbol   | Min    | Typ    | Max    | Unit   | Test Conditions/Comments                    |
|-----------------------------------|----------|--------|--------|--------|--------|---------------------------------------------|
| NOISE FIGURE                      |          |        | 2      |        | dB     |                                             |
| RETURN LOSS Input                 |          |        | 15     |        | dB     |                                             |
| Output                            |          |        | 17     |        | dB     |                                             |
| OUTPUT                            | OUTPUT   | OUTPUT | OUTPUT | OUTPUT | OUTPUT | OUTPUT                                      |
| Output Power for 1 dB Compression | P1dB     | 13     | 16     |        | dBm    |                                             |
| Saturated Output Power            | P SAT    |        | 19.5   |        | dBm    |                                             |
| Output Third-Order Intercept      | OIP3     |        | 33     |        | dBm    | Measurement taken at P OUT per tone = 6 dBm |
| Output Second-Order Intercept     | OIP2     |        | 40     |        | dBm    | Measurement taken at P OUT per tone = 6 dBm |
| POWER ADDED EFFICIENCY            | PAE      |        | 23     |        | %      | Measured at P SAT                           |
| SUPPLY CURRENT                    | I DQ     |        | 55     |        | mA     |                                             |
| SUPPLY VOLTAGE                    | V DD     | 2      | 5      | 6      | V      |                                             |

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                                                      |                 |
|---------------------------------------------------------------|-----------------|
| Drain Bias Voltage (V DD )                                    | 7 V             |
| Radio Frequency Input (RF IN ) Power                          | 20 dBm          |
| Channel Temperature                                           | 175°C           |
| Continuous Power Dissipation, P DIS 2                         |                 |
| T CASE = 85°C                                                 | 0.78W           |
| T CASE = 125°C                                                | 0.43W           |
| Storage Temperature Range                                     | -65°C to +150°C |
| Operating Temperature Range                                   | -55°C to +125°  |
| Peak Reflow Temperature Moisture Sensitivity Level 1 (MSL1) 3 | 260°C           |
| Electrostatic Discharge (ESD) Sensitivity Human Body          | 500 V,          |
| Model (HBM)                                                   | Class 1B passed |

- 1 When referring to a single function of a multifunction pin in the parameters, only the portion of the pin name that is relevant to the specification is listed. For full pin names of multifunction pins, refer to the Pin Configuration and Function Descriptions section.
- 2 For maximum power dissipation vs. case temperature, see Figure 2.
- 3 See the Ordering Guide section for more information.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θ JC is the junction to case thermal resistance.

Table 5. Thermal Resistance

| Package Type   |   θ JC | Unit   |
|----------------|--------|--------|
| CP-6-12        | 115.35 | °C/W   |

## POWER DERATING CURVES

Figure 2. Maximum Power Dissipation vs. Case Temperature

<!-- image -->

Figure 2 shows the maximum power dissipation vs. case temperature.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 6. Pin Function Descriptions

| Pin No.   | Mnemonic     | Description                                                                                                                                                    |
|-----------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | R BIAS       | Current Mirror Bias Resistor Pin. Use this pin to set the current to the internal resistor by the external resistor. See Figure 4 for the interface schematic. |
| 2         | RF IN        | RF Input. This pin is ac-coupled and matched to 50 Ω. See Figure 5 for the interface schematic.                                                                |
| 3, 4      | NIC          | Not Internally Connected. This pin is not connected internally. This pin must be connected to the RF and dc ground.                                            |
| 5         | RF OUT /V DD | Radio Frequency Output (RF OUT ). This pin is ac-coupled and matched to 50 Ω. See Figure 6 for the interface schematic.                                        |
| 6         | GND          | Ground. This pin must be connected to the RF and dc ground. See Figure 7 for the interface schematic.                                                          |

## INTERFACE SCHEMATICS

<!-- image -->

Figure 4. R BIAS Interface Schematic

<!-- image -->

Figure 5. RF IN Interface Schematic

Figure 6. RF OUT /V DD Interface Schematic

<!-- image -->

Figure 7. GND Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Gain vs. Frequency, 10 MHz to 200 MHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

<!-- image -->

Figure 9. Input Return Loss vs. Frequency, 10 MHz to 200 MHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 10. Output Return Loss vs. Frequency, 10 MHz to 200 MHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 11. Gain vs. Frequency, 200 MHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

Figure 12. Input Return Loss vs. Frequency, 200 MHz to 12 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 13. Output Return Loss vs. Frequency, 200 MHz to 12 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Reverse Isolation vs. Frequency, 10 MHz to 200 MHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 15. Noise Figure vs. Frequency, 10 MHz to 200 MHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 16. P1dB vs. Frequency, 0.01 GHz to 1.0 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 17. Reverse Isolation vs. Frequency, 200 MHz to 12 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

Figure 18. Noise Figure vs. Frequency, 200 MHz to 12 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 19. P1dB vs. Frequency, 1 GHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 20. P SAT vs. Frequency, 0.01 GHz to 1.0 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 21. PAE vs. Frequency, 0.01 GHz to 1.0 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 22. OIP3 vs. Frequency, 0.01 GHz to 1.0 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 23. P SAT vs. Frequency, 1 GHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

Figure 24. PAE vs. Frequency, 1 GHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

<!-- image -->

Figure 25. OIP3 vs. Frequency, 1 GHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 26. OIP2 vs. Frequency, 0.01 GHz to 1.0 GHz, for Various Temperatures, V DD = 5 V, I DQ = 55 mA

<!-- image -->

Figure 27. OIP2 vs. Frequency, 1 GHz to 12 GHz, for Various Temperatures, VDD  = 5 V, I DQ = 55 mA

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1           | Temperature Range   | MSL Rating 2   | Package Description 3                        | Package Option   |
|-------------------|---------------------|----------------|----------------------------------------------|------------------|
| HMC8411TCPZ-EP-PT | -55°C to +125°C     | MSL1           | 6-Lead Lead Frame Chip Scale Package [LFCSP] | CP-6-12          |
| HMC8411TCPZ-EP-R7 | -55°C to +125°C     | MSL1           | 6-Lead Lead Frame Chip Scale Package [LFCSP] | CP-6-12          |

<!-- image -->

Figure 28. 6-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 2 mm Body and 0.85 mm Package Height (CP-6-12) Dimensions shown in millimeters

<!-- image -->