<!-- lastmod 2026-02-06 -->
<!-- image -->

## Commercial Space Product

## ADL8141S

## GaAs, pHEMT, MMIC, Low Noise Amplifier, 14 GHz to 24 GHz

## FEATURES

- Low noise, high gain LNA for Ku and K band
- Frequency range: 14 GHz to 24 GHz
- Low noise figure: 1.4 dB typical at 15 GHz to 22 GHz
- High gain: 29 dB typical at 14 GHz to 15 GHz
- Integrated AC coupling capacitors
- Integrated bias inductor
- Single positive supply: 2 V with I DQ = 25 mA
- RBIAS drain current adjustment pin
- RoHS-compliant, 2 mm × 2 mm, 8-lead LFCSP

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID): 30 krads
- Radiation benchmark
- No single event latchup (SEL) occurs at ≤62.4 MeV-cm 2 /mg linear energy transfer

## APPLICATIONS

- Geosynchronous high throughput satellites (GEO HTS)
- Low Earth orbit (LEO) space payloads
- Satellite communication

## GENERAL DESCRIPTION

The ADL8141-CSL is a low power consumption, low noise amplifier that operates from 14 GHz to 24 GHz. Typical gain, noise figure, and output third-order intercept (OIP3) are 29 dB at 14 GHz to 15 GHz, 1.4 dB at 15 GHz to 22 GHz, and 18 dBm at 15 GHz to 22 GHz, respectively. Typical supply current is 25 mA from a 2 V supply. OIP3 and output power for 1 dB compression (OP1dB) can be increased by adjusting a supply-referenced resistor connected to the RBIAS pin. The RF input and output of the ADL8141-CSL are internally matched and AC-coupled.

The ADL8141-CSL is fabricated on a gallium arsenide (GaAs), pseudomorphic high electron mobility transistor (pHEMT), monolithic microwave integrated circuit (MMIC) process. The ADL8141-CSL is housed in a RoHS-compliant, 2 mm × 2 mm, 8-lead LFCSP and is specified for operation from -40°C to +85°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADL8141 data sheet.

Rev. 0

DOCUMENT FEEDBACK

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Commercial Space Features.................................1                |     |
| Applications...........................................................    | 1   |
| General Description...............................................1        |     |
| Functional Block Diagram......................................1            |     |
| Specifications........................................................     | 3   |
| 14 GHz to 15 GHz Frequency Range................                           | 3   |
| 15 GHz to 22 GHz Frequency Range................                           | 3   |
| 22 GHz to 24 GHz Frequency Range................                           | 3   |
| DC Specifications...............................................4          |     |
| Radiation Test and Limit Specifications..............4                     |     |

## REVISION HISTORY

12/2023-Revision 0: Initial Version

| Absolute Maximum Ratings...................................5        |    |
|---------------------------------------------------------------------|----|
| Thermal Resistance...........................................       | 5  |
| Outgas Testing...................................................   | 5  |
| Radiation Testing................................................5  |    |
| Electrostatic Discharge (ESD) Ratings...............5               |    |
| ESD Caution.......................................................5 |    |
| Pin Configuration and Function Descriptions........                 | 6  |
| Typical Performance Characteristics.....................7           |    |
| Outline Dimensions...............................................   | 8  |
| Ordering Guide...................................................8  |    |

## SPECIFICATIONS

## 14 GH z TO 15 GH z FREQUENCY RANGE

Supply voltage (V DD ) = 2 V, quiescent current (I DQ ) = 25 mA, bias reference (R BIAS ) = 768 Ω, and T CASE = 25°C, unless otherwise noted.

Table 1. 14 GHz to 15 GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                     |
|---------------------------------|-------|-------|-------|--------|--------------------------------------------------------------|
| FREQUENCY RANGE                 | 14    |       | 15    | GHz    |                                                              |
| GAIN                            | 27    | 29    |       | dB     |                                                              |
| Gain Variation over Temperature |       | 0.025 |       | dB/°C  |                                                              |
| NOISE FIGURE                    |       | 1.7   |       | dB     |                                                              |
| RETURN LOSS                     |       |       |       |        |                                                              |
| Input (S11)                     |       | 12.5  |       | dB     |                                                              |
| Output (S22)                    |       | 7     |       | dB     |                                                              |
| OUTPUT                          |       |       |       |        |                                                              |
| OP1dB                           | 3.5   | 6     |       | dBm    |                                                              |
| Saturated Output Power (P SAT ) |       | 9     |       | dBm    |                                                              |
| OIP3                            |       | 11    |       | dBm    | Measurement taken at output power (P OUT ) per tone = -2 dBm |
| Second-Order Intercept (OIP2)   |       | 8.5   |       | dBm    | Measurement taken at P OUT per tone = -2 dBm                 |

## 15 GH z TO 22 GH z FREQUENCY RANGE

VDD  = 2 V, I DQ = 25 mA, R BIAS = 768 Ω, and T C = 25°C, unless otherwise noted.

Table 2. 15 GHz to 22 GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                     |
|---------------------------------|-------|-------|-------|--------|----------------------------------------------|
| FREQUENCY RANGE                 | 15    |       | 22    | GHz    |                                              |
| GAIN                            | 26.5  | 28.5  |       | dB     |                                              |
| Gain Variation over Temperature |       | 0.024 |       | dB/°C  |                                              |
| NOISE FIGURE                    |       | 1.4   |       | dB     |                                              |
| RETURN LOSS                     |       |       |       |        |                                              |
| S11                             |       | 15    |       | dB     |                                              |
| S22                             |       | 12    |       | dB     |                                              |
| OUTPUT                          |       |       |       |        |                                              |
| OP1dB                           | 6     | 9     |       | dBm    |                                              |
| P SAT                           |       | 11.5  |       | dBm    |                                              |
| OIP3                            |       | 18    |       | dBm    | Measurement taken at P OUT per tone = -2 dBm |
| OIP2                            |       | 23    |       | dBm    | Measurement taken at P OUT per tone = -2 dBm |

## 22 GH z TO 24 GH z FREQUENCY RANGE

VDD  = 2 V, I DQ = 25 mA, R BIAS = 768 Ω, and T C = 25°C, unless otherwise noted.

Table 3. 22 GHz to 24 GHz Frequency Range Specifications

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|---------------------------------|-------|-------|-------|--------|----------------------------|
| FREQUENCY RANGE                 | 22    |       | 24    | GHz    |                            |
| GAIN                            |       | 26    |       | dB     |                            |
| Gain Variation over Temperature |       | 0.033 |       | dB/°C  |                            |
| NOISE FIGURE                    |       | 1.5   |       | dB     |                            |
| RETURN LOSS                     |       |       |       |        |                            |
| S11                             |       | 13.5  |       | dB     |                            |
| S22                             |       | 5     |       | dB     |                            |

## SPECIFICATIONS

## Table 3. 22 GHz to 24 GHz Frequency Range Specifications (Continued)

| Parameter   | Typ   | Max   | Unit   | Test Conditions/Comments                     |
|-------------|-------|-------|--------|----------------------------------------------|
| OUTPUT      |       |       |        |                                              |
| OP1dB       | 11    |       | dBm    |                                              |
| P SAT       | 12    |       | dBm    |                                              |
| OIP3        | 17    |       | dBm    | Measurement taken at P OUT per tone = -2 dBm |
| OIP2        | 31    |       | dBm    | Measurement taken at P OUT per tone = -2 dBm |

## DC SPECIFICATIONS

## Table 4. DC Specifications

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 25    |       | mA     |
| Amplifier Current (I DQ_AMP ) |       | 23    |       | mA     |
| RBIAS Current (I RBIAS )      |       | 2     |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 1.5   | 2     | 3.5   | V      |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 2 V, I DQ = 25 mA, R BIAS = 768 Ω, and T A = 25°C, unless otherwise noted. Total ionizing dose (TID) testing characterized to 30 krads.

## Table 5. Radiation Test and Limit Specifications

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE               | 22    |       | 24    | GHz    |
| GAIN                          | 22.5  | 26    |       | dB     |
| OUTPUT                        |       |       |       |        |
| OP1dB                         | 9     | 11    |       | dBm    |
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 25    | 32    | mA     |
| Amplifier Current (I DQ_AMP ) |       | 23    |       | mA     |
| RBIAS Current (I RBIAS )      |       | 2     |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 1.5   | 2     | 3.5   | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 6. Absolute Maximum Ratings

| Parameter                                                                              | Rating          |
|----------------------------------------------------------------------------------------|-----------------|
| VDD                                                                                    | 4 V             |
| RFIN Power                                                                             | 20 dBm          |
| Pulsed RFIN (Duty Cycle = 10%, Pulse Width = 100 μs)                                   | 22 dBm          |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 5.71 mW/°C Above 85°C)   | 0.51W           |
| Temperature                                                                            |                 |
| Storage Range                                                                          | -65°C to +150°C |
| Operating Range                                                                        | -40°C to +85°C  |
| Quiescent Channel (T CASE = 85°C, V DD = 2 V, I DQ = 25 mA, Input Power (P IN ) = Off) | 93.75°C         |
| Maximum Channel                                                                        | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the channel to case thermal resistance.

## Table 7. Thermal Resistance

| Package Type                  | θ JC   | Unit   |
|-------------------------------|--------|--------|
| CP-8-30                       |        |        |
| Quiescent, T CASE = 25°C      | 141    | °C/W   |
| Worst Case 1 , T CASE = 85°C. | 175    | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 8. Outgas Testing

| Specification (Tested per ASTM E595 -15)   |   Value | Unit   |
|--------------------------------------------|---------|--------|
| Total Mass Lost                            |    0.14 | %      |
| Collected Volatile Condensable Material    |    0.01 | %      |
| Water Vapor Recovered                      |    0.03 | %      |

## RADIATION TESTING

Table 9. Radiation Testing

| Specifications                                                                    | Value   | Unit         |
|-----------------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rads to 300 rads (Si)/sec) 1         | 30      | krads (Si)   |
| No Single Event Latch-Up (SEL) Occurs at Effective Linear Energy Transfer (LET) 2 | ≤62.4   | MeV-cm 2 /mg |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8141-CSL

Table 10. ADL8141-CSL, 8-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 11. Pin Function Descriptions

| Pin No.    | Mnemonic       | Description                                                                                                                                                                                                            |
|------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | RBIAS          | Bias Setting Resistor. Connect a resistor between RBIAS and VDD to set the I DQ . See the typical application circuit and the recommended bias values for V DD = 2 V table in the ADL8141 data sheet for more details. |
| 2, 4, 5, 7 | GND            | Ground. Connect to a ground plane that has low electrical and thermal impedance.                                                                                                                                       |
| 3          | RFIN           | RF Input. The RFIN pin is AC-coupled and matched to 50 Ω.                                                                                                                                                              |
| 6          | RFOUT          | RF Output. The RFOUT pin is AC-coupled and matched to 50 Ω.                                                                                                                                                            |
| 8          | VDD            | Drain Bias. Connect the VDD pin to the supply voltage.                                                                                                                                                                 |
|            | EXPOSED PADDLE | Exposed Ground Paddle. Connect the exposed paddle to a ground plane that has low electrical and thermal impedance.                                                                                                     |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADL8141 data sheet for the typical performance characteristics plot.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1, 2          | Temperature Range   | Package Description                          | Packing Quantity   | Package Option   |
|---------------------|---------------------|----------------------------------------------|--------------------|------------------|
| ADL8141ACPZN-CSL    | -40°C to +85°C      | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Reel, 500          | CP-8-30          |
| ADL8141ACPZN-R7-CSL | -40°C to +85°C      | 8-Lead Lead Frame Chip Scale Package [LFCSP] | Reel, 500          | CP-8-30          |

<!-- image -->

Figure 3. 8-Lead Lead Frame Chip Scale Package [LFCSP] 2 mm × 2 mm Body and 0.85 mm Package Height (CP-8-30) Dimensions shown in millimeters

<!-- image -->