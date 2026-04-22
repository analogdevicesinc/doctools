<!-- lastmod 2025-11-24 -->
<!-- image -->

## FEATURES

- Single positive supply: 1.5V and I DQ of 35mA nominal
- RBIAS drain current adjustment pin
- Gain: 28.5dB from 8GHz to 10GHz
- Noise figure: 1dB from 8GHz to 10GHz
- Extended operating temperature range: -55°C to +125°C
- Internally matched and AC-coupled
- RoHS-compliant, 2mm × 2mm, 8-lead LFCSP

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
- Satellite communications

## GENERAL DESCRIPTION

The ADL8143-CSL is a low noise amplifier (LNA) that operates from 8GHz to 14GHz. The typical gain, noise figure, output power for 1dB compression (OP1dB), and output third-order intercept (OIP3) are 28.5dB, 1dB, 7.5dBm, and 19.5dBm, respectively, from 8GHz to 10GHz. The nominal quiescent current (I DQ ), which can be adjusted, is 35mA from a 1.5V supply voltage (V DD ). The ADL8143CSL also features inputs and outputs that are AC-coupled and internally matched to 50Ω.

The ADL8143-CSL is housed in an RoHS-compliant, 2mm × 2mm, 8-lead lead frame chip scale package [LFCSP] and is specified for operation from -55°C to +125°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADL8143 data sheet.

## ADL8143-CSL

## 8GHz to 14GHz, Low Noise Amplifier

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1                                                                                       | Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5 Outgas Testing................................................... 5                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Description...............................................1                                                                                                                                                                                                                                    | Radiation Features.............................................5                                                                                                                                                                                                                                       |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                        | Electrostatic Discharge (ESD) Ratings...............5                                                                                                                                                                                                                                                  |
| Specifications........................................................ 3                                                                                                                                                                                                                               | ESD Caution.......................................................5                                                                                                                                                                                                                                    |
| 8GHz to 10GHz Frequency Range.................... 3                                                                                                                                                                                                                                                    | Pin Configuration and Function Descriptions........ 6                                                                                                                                                                                                                                                  |
| 10GHz to 14GHz Frequency Range.................. 3                                                                                                                                                                                                                                                     | Typical Performance Characteristics.....................7                                                                                                                                                                                                                                              |
| DC Specifications...............................................3                                                                                                                                                                                                                                      | Outline Dimensions............................................... 8                                                                                                                                                                                                                                    |
| Radiation Test and Limit Specifications..............4                                                                                                                                                                                                                                                 | Ordering Guide...................................................8                                                                                                                                                                                                                                     |
| REVISION HISTORY                                                                                                                                                                                                                                                                                       | REVISION HISTORY                                                                                                                                                                                                                                                                                       |
| 11/2025-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                               | 11/2025-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                               |
| Changes to Commercial Space Features Section...........................................................................................1 Changes to Table 8..........................................................................................................................................5 | Changes to Commercial Space Features Section...........................................................................................1 Changes to Table 8..........................................................................................................................................5 |

12/2024-Revision 0: Initial Version

## SPECIFICATIONS

## 8GH z TO 10GH z FREQUENCY RANGE

VDD  = 1.5V, I DQ = 35mA, bias resistance (R BIAS ) = 487Ω, and T CASE = 25°C, unless otherwise noted.

Table 1. 8GHz to 10GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                    |
|---------------------------------|-------|-------|-------|--------|-------------------------------------------------------------|
| FREQUENCY RANGE                 | 8     |       | 10    | GHz    |                                                             |
| GAIN                            | 26.5  | 28.5  |       | dB     |                                                             |
| Gain Variation over Temperature |       | 0.026 |       | dB/°C  |                                                             |
| NOISE FIGURE                    |       | 1     |       | dB     |                                                             |
| RETURN LOSS Input (S11)         |       | 11    |       | dB     |                                                             |
| Output (S22)                    |       | 19    |       | dB     |                                                             |
| OUTPUT                          |       |       |       |        |                                                             |
| OP1dB                           | 5.5   | 7.5   |       | dBm    |                                                             |
| Saturated Output Power (P SAT ) |       | 9     |       | dBm    |                                                             |
| OIP3                            |       | 19.5  |       | dBm    | Measurement taken at output power (P OUT ) per tone = -6dBm |
| Second-Order Intercept (OIP2)   |       | 14    |       | dBm    | Measurement taken at P OUT per tone = -6dBm                 |
| POWER ADDED EFFICIENCY (PAE)    |       | 15.53 |       | %      | Measured at P SAT                                           |

## 10GH z TO 14GH z FREQUENCY RANGE

VDD  = 1.5V, I DQ = 35mA, R BIAS = 487Ω, and T CASE = 25°C, unless otherwise noted.

Table 2. 10GHz to 14GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                    |
|---------------------------------|-------|-------|-------|--------|---------------------------------------------|
| FREQUENCY RANGE                 | 10    |       | 14    | GHz    |                                             |
| GAIN                            | 26.5  | 28.5  |       | dB     |                                             |
| Gain Variation over Temperature |       | 0.029 |       | dB/°C  |                                             |
| NOISE FIGURE                    |       | 1.1   |       | dB     |                                             |
| RETURN LOSS                     |       |       |       |        |                                             |
| S11                             |       | 17    |       | dB     |                                             |
| S22                             |       | 15    |       | dB     |                                             |
| OUTPUT                          |       |       |       |        |                                             |
| OP1dB                           | 6.5   | 8.5   |       | dBm    |                                             |
| P SAT                           |       | 10    |       | dBm    |                                             |
| OIP3                            |       | 22    |       | dBm    | Measurement taken at P OUT per tone = -6dBm |
| OIP2                            |       | 22.5  |       | dBm    | Measurement taken at P OUT per tone = -6dBm |
| PAE                             |       | 19.91 |       | %      |                                             |

## DC SPECIFICATIONS

Table 3. DC Specifications

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 35    |       | mA     |
| Amplifier Current (I DQ_AMP ) |       | 33.2  |       | mA     |
| R BIAS Current (I RBIAS )     |       | 1.8   |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 1.2   | 1.5   | 3.5   | V      |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 1.5V, I DQ = 35mA, R BIAS = 487Ω, and T CASE = 25°C, unless otherwise noted.

Table 4. Radiation Test and Limit Specifications

| Parameter       | Min   | Typ   | Max   | Unit   |
|-----------------|-------|-------|-------|--------|
| FREQUENCY RANGE | 10    |       | 14    | GHz    |
| GAIN            | 26.5  | 28.5  |       | dB     |
| OUTPUT          |       |       |       |        |
| OP1dB           | 6.5   | 8.5   |       | dBm    |
| SUPPLY CURRENT  |       |       |       |        |
| I DQ            |       | 35    |       | mA     |
| I DQ_AMP        |       | 33.2  |       | mA     |
| I RBIAS         |       | 1.8   |       | mA     |
| SUPPLY CURRENT  |       |       |       |        |
| V DD            | 1.2   | 1.5   | 3.5   | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 5. Absolute Maximum Ratings

| Parameter                                                                              | Rating          |
|----------------------------------------------------------------------------------------|-----------------|
| V DD                                                                                   | 4V              |
| RF Input Power (RF IN )                                                                | 20dBm           |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 10.6mW/°C Above 85°C)    | 0.95W           |
| Temperature                                                                            |                 |
| Storage Range                                                                          | -65°C to +150°C |
| Operating Range                                                                        | -55°C to +125°C |
| Quiescent Channel (T CASE = 85°C, V DD = 1.5V, I DQ = 35mA, Input Power (P IN ) = Off) | 89.95°C         |
| Maximum Channel                                                                        | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the channel-to-case thermal resistance.

## Table 6. Thermal Resistance

| Package Type                | θ JC   | Unit   |
|-----------------------------|--------|--------|
| CP-8-30                     |        |        |
| Quiescent, T CASE = 25°C    | 80.4   | °C/W   |
| Worst Case, 1 T CASE = 85°C | 94.3   | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 7. Outgas Testing

| Specification (Tested per ASTM E595 -15)   |   Value | Unit   |
|--------------------------------------------|---------|--------|
| Total Mass Lost                            |    0.14 | %      |
| Collected Volatile Condensable Material    |    0.01 | %      |
| Water Vapor Recovered                      |    0.03 | %      |

## RADIATION FEATURES

## Table 8. Radiation Features

| Specifications                                                          | Value   | Unit         |
|-------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50rads to 300rads (Si)/sec) 1 | 100     | krads (Si)   |
| No SEL Occurs at Effective Linear Energy Transfer (LET) 2               | ≤80     | MeV-cm 2 /mg |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8143-CSL

## Table 9. ADL8143-CSL, 8-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±300                      | 1A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 10. Pin Function Descriptions

| Pin No.    | Mnemonic      | Description                                                                                                                                                                                                                                            |
|------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS         | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set the I DQ . See the typical application circuit and the recommended bias resistor values for various I DQ values, V DD = 1.5 V table in the ADL8143 data sheet for more details. |
| 2, 4, 5, 7 | GND           | Ground. Connect the GND pins to a ground plane that has low electrical and thermal impedance.                                                                                                                                                          |
| 3          | RFIN          | RF Input. The RFIN pin is AC-coupled and matched to 50Ω.                                                                                                                                                                                               |
| 6          | RFOUT         | RF Output. The RFOUT pin is AC-coupled and matched to 50Ω.                                                                                                                                                                                             |
| 8          | VDD           | Drain Bias. Connect the VDD pin to the supply voltage.                                                                                                                                                                                                 |
|            | GROUND PADDLE | Ground Paddle. Connect the ground paddle to a ground plane that has low electrical and thermal impedance.                                                                                                                                              |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADL8143 data sheet for the typical performance characteristics plot.

## OUTLINE DIMENSIONS

Figure 3. 8-Lead Lead Frame Chip Scale Package [LFCSP] 2mm × 2mm Body and 0.85mm Package Height (CP-8-30) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1, 2          | Temperature Range   | Package Description                          | Packing Quantity   | Package Option   |
|---------------------|---------------------|----------------------------------------------|--------------------|------------------|
| ADL8143ACPZN-CSL    | -55°C to +125°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Tape, 1            | CP-8-30          |
| ADL8143ACPZN-R7-CSL | -55°C to +125°C     | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Reel, 3000         | CP-8-30          |

- 2 The lead finish of ADL8143ACPZN-CSL and ADL8143ACPZN-R7-CSL is nickel palladium gold.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.