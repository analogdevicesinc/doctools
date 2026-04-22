<!-- lastmod 2025-11-24 -->
<!-- image -->

## FEATURES

- Single positive supply: 1.5 V and I DQ of 35 mA nominal
- RBIAS drain current adjustment pin
- Internally matched and AC-coupled
- Frequency range: 10 GHz to 18 GHz
- Noise figure: 1 dB from 12 GHz to 15 GHz
- Gain: 27.5 dB from 12 GHz to 15 GHz
- Extended operating temperature range: -55°C to +125°C
- RoHS-compliant, 2 mm × 2 mm, 8-lead LFCSP

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID) benchmark characterization
- Radiation lot acceptance test (RLAT) for production TID assurance
- Single event latch-up (SEL) benchmark characterization
- Outgassing characterization

## APPLICATIONS

- Low Earth orbit (LEO) space payloads
- Satellite communication

## GENERAL DESCRIPTION

The ADL8140-CSL is a low noise amplifier (LNA) that operates from 10 GHz to 18 GHz.

Typical gain and noise figure are 27.5 dB and 1 dB, respectively, from 12 GHz to 15 GHz. Output power for 1 dB compression (OP1dB) and output third-order intercept (OIP3), are 8 dBm and 23 dBm, respectively, from 12 GHz to 15 GHz. The nominal quiescent current (I DQ ), which can be adjusted, is 35 mA from a 1.5 V supply voltage (V DD ). The ADL8140-CSL also features inputs and outputs that are AC-coupled and internally matched to 50 Ω.

The ADL8140-CSL is housed in a RoHS-compliant, 2 mm × 2 mm, 8-lead lead frame chip scale package [LFCSP] and is specified for operation from -55°C to +125°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADL8140 data sheet.

## ADL8140-CSL

## 10 GHz to 18 GHz Low Noise Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 10 GHz to 12 GHz Frequency Range................ 3 12 GHz to 15 GHz Frequency Range................ 3 15 GHz to 18 GHz Frequency Range................ 4 DC Specifications...............................................4   | Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5 Outgas Testing................................................... 5 Radiation Features.............................................5 Electrostatic Discharge (ESD) Ratings...............5 ESD Caution.......................................................5 Pin Configuration and Function Descriptions........ 6 Typical Performance Characteristics.....................7 Outline Dimensions............................................... 8 Ordering Guide...................................................8   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

11/2024-Revision 0: Initial Version

## SPECIFICATIONS

## 10 GH z TO 12 GH z FREQUENCY RANGE

VDD  = 1.5 V, I DQ = 35 mA, bias resistance (R BIAS ) = 562 Ω, and T CASE = 25°C, unless otherwise noted.

Table 1. 10 GHz to 12 GHz Frequency Range Specifications

| Parameter                            | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                     |
|--------------------------------------|-------|-------|-------|--------|--------------------------------------------------------------|
| FREQUENCY RANGE                      | 10    |       | 12    | GHz    |                                                              |
| GAIN Gain Variation over Temperature | 25    | 27    |       | dB     |                                                              |
|                                      |       | 0.039 |       | dB/°C  |                                                              |
| NOISE FIGURE                         |       | 0.95  |       | dB     |                                                              |
| RETURN LOSS                          |       |       |       |        |                                                              |
| Input (S11)                          |       | 11    |       | dB     |                                                              |
| Output (S22)                         |       | 12    |       | dB     |                                                              |
| OUTPUT                               |       |       |       |        |                                                              |
| OP1dB                                | 4.5   | 6.5   |       | dBm    |                                                              |
| Saturated Output Power (P SAT )      |       | 8     |       | dBm    |                                                              |
| OIP3                                 |       | 18    |       | dBm    | Measurement taken at output power (P OUT ) per tone = -6 dBm |
| Second-Order Intercept (OIP2)        |       | 14    |       | dBm    | Measurement taken at P OUT per tone = -6 dBm                 |
| POWER ADDED EFFICIENCY (PAE)         |       | 10    |       | %      | Measured at P SAT                                            |

## 12 GH z TO 15 GH z FREQUENCY RANGE

VDD  = 1.5 V, I DQ = 35 mA, R BIAS = 562 Ω, and T CASE = 25°C, unless otherwise noted.

Table 2. 12 GHz to 15 GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                     |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                 | 12    |       | 15    | GHz    |                                              |
| GAIN                            | 25.5  | 27.5  |       | dB     |                                              |
| Gain Variation over Temperature |       | 0.034 |       | dB/°C  |                                              |
| NOISE FIGURE                    |       | 1     |       | dB     |                                              |
| RETURN LOSS                     |       |       |       |        |                                              |
| S11                             |       | 14    |       | dB     |                                              |
| S22                             |       | 14    |       | dB     |                                              |
| OUTPUT                          |       |       |       |        |                                              |
| OP1dB                           | 6     | 8     |       | dBm    |                                              |
| P SAT                           |       | 9.5   |       | dBm    |                                              |
| OIP3                            |       | 23    |       | dBm    | Measurement taken at P OUT per tone = -6 dBm |
| OIP2                            |       | 22    |       | dBm    | Measurement taken at P OUT per tone = -6 dBm |
| PAE                             |       | 14.3  |       | %      | Measured at P SAT                            |

## SPECIFICATIONS

## 15 GH z TO 18 GH z FREQUENCY RANGE

VDD  = 1.5 V, I DQ = 35 mA, R BIAS = 562 Ω, and T CASE = 25°C, unless otherwise noted.

Table 3. 15 GHz to 18 GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                     |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                 | 15    |       | 18    | GHz    |                                              |
| GAIN                            | 26    | 28    |       | dB     |                                              |
| Gain Variation over Temperature |       | 0.041 |       | dB/°C  |                                              |
| NOISE FIGURE                    |       | 1.1   |       | dB     |                                              |
| RETURN LOSS                     |       |       |       |        |                                              |
| S11                             |       | 13    |       | dB     |                                              |
| S22                             |       | 10    |       | dB     |                                              |
| OUTPUT                          |       |       |       |        |                                              |
| OP1dB                           | 6.5   | 8.5   |       | dBm    |                                              |
| P SAT                           |       | 10.5  |       | dBm    |                                              |
| OIP3                            |       | 21.5  |       | dBm    | Measurement taken at P OUT per tone = -6 dBm |
| OIP2                            |       | 27    |       | dBm    | Measurement taken at P OUT per tone = -6 dBm |
| PAE                             |       | 17.2  |       | %      | Measured at P SAT                            |

## DC SPECIFICATIONS

## Table 4. DC Specifications

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 35    |       | mA     |
| Amplifier Current (I DQ_AMP ) |       | 33.3  |       | mA     |
| R BIAS Current (I R BIAS )    |       | 1.7   |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 1.2   | 1.5   | 3.5   | V      |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 1.5 V, I DQ = 35 mA, R BIAS = 562 Ω, and T A = 25°C, unless otherwise noted.

## Table 5. Radiation Test and Limit Specifications

| Parameter       | Min   | Typ   | Max   | Unit   |
|-----------------|-------|-------|-------|--------|
| FREQUENCY RANGE | 15    |       | 18    | GHz    |
| GAIN            | 26    | 28    |       | dB     |
| OUTPUT          |       |       |       |        |
| OP1dB           | 6.5   | 8.5   |       | dBm    |
| SUPPLY CURRENT  |       |       |       |        |
| I DQ            |       | 35    |       | mA     |
| I DQ_AMP        |       | 33.3  |       | mA     |
| I RBIAS         |       | 1.7   |       | mA     |
| SUPPLY VOLTAGE  |       |       |       |        |
| V DD            | 1.2   | 1.5   | 3.5   | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 6. Absolute Maximum Ratings

| Parameter                                                                                    | Rating          |
|----------------------------------------------------------------------------------------------|-----------------|
| V DD                                                                                         | 4 V             |
| RF Input Power (RFIN)                                                                        | 20 dBm          |
| Continuous Power Dissipation (P DISS ) and T CASE = 85°C (Derate 12.09 mW/°C Above 85°C)     | 1.09W           |
| Temperature                                                                                  |                 |
| Storage Range                                                                                | -65°C to +150°C |
| Operating Range                                                                              | -55°C to +125°C |
| Quiescent Channel (T CASE = 85°C, V DD = 1.5 V, I DQ = 35 mA, and Input Power (P IN ) = Off) | 89.34°C         |
| Maximum Channel                                                                              | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the channel-to-case thermal resistance.

Table 7. Thermal Resistance 1

| Package Type                 | θ JC   | Unit   |
|------------------------------|--------|--------|
| CP-8-30                      |        |        |
| Quiescent, T CASE = 25°C     | 68.4   | °C/W   |
| Worst Case 2 , T CASE = 85°C | 82.7   | °C/W   |

- 1 Thermal resistance varies with operating conditions.

2 Across all specified operating conditions.

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 8. Outgas Testing

| Specification (Tested per ASTM E595 -15)   |   Value | Unit   |
|--------------------------------------------|---------|--------|
| Total Mass Lost                            |    0.14 | %      |
| Collected Volatile Condensable Material    |    0.01 | %      |
| Water Vapor Recovered                      |    0.03 | %      |

## RADIATION FEATURES

## Table 9. Radiation Features

| Specifications                                                            | Value   | Unit         |
|---------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rads to 300 rads (Si)/sec) 1 | 100     | krads (Si)   |
| No SEL Occurs at Effective Linear Energy Transfer (LET) 2                 | ≤80     | MeV-cm 2 /mg |

- 1 Guaranteed by device and process characterization. Contact Analog Devices, Inc, Technical Support for data available up to 100 krads.
- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics but are not production lot tested.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8140-CSL

Table 10. ADL8140-CSL, 8-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±300                      | 1A      |

## ESD CAUTION

## ESD (electrostatic discharge) sensitive device . Charged

<!-- image -->

devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 11. Pin Function Descriptions

| Pin No.    | Mnemonic      | Description                                                                                                                                                                                                                                            |
|------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS         | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set the I DQ . See the typical application circuit and the recommended bias resistor values for various I DQ values, V DD = 1.5 V table in the ADL8140 data sheet for more details. |
| 2, 4, 5, 7 | GND           | Grounds. Connect these pins to a ground plane that has low electrical and thermal impedance.                                                                                                                                                           |
| 3          | RFIN          | RF Input. The RFIN pin is AC-coupled and matched to 50 Ω.                                                                                                                                                                                              |
| 6          | RFOUT         | RF Output. The RFOUT pin is AC-coupled and matched to 50 Ω.                                                                                                                                                                                            |
| 8          | VDD           | Drain Bias. Connect the VDD pin to the supply voltage.                                                                                                                                                                                                 |
|            | GROUND PADDLE | Ground Paddle. Connect the ground paddle to a ground plane which has a low electrical and thermal impedance.                                                                                                                                           |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADL8140 data sheet for the typical performance characteristics plot.

## OUTLINE DIMENSIONS

Figure 3. 8-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 2 mm Body and 0.85 mm Package Height (CP-8-30) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1, 2          | Temperature Range   | Package Description                          | Packing Quantity   | Package Option   |
|---------------------|---------------------|----------------------------------------------|--------------------|------------------|
| ADL8140ACPZN-CSL    | -55°C to +125°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Tape, 1            | CP-8-30          |
| ADL8140ACPZN-R7-CSL | -55°C to +125°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Reel, 3000         | CP-8-30          |

- 2 The lead finish of the ADL8140ACPZN-CSL and ADL8140APCZN-R7-CSL is nickel palladium gold.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.