<!-- lastmod 2025-11-24 -->
<!-- image -->

## FEATURES

## 30kHz to 20GHz, Ultra-Wideband, Low Noise Amplifier

## FUNCTIONAL BLOCK DIAGRAM

- Wideband operation: 30kHz to 20GHz
- Single positive supply (self biased): 3.3V and I DQ = 55mA
- RBIAS drain current adjustment pin
- Extended operating temperature range: -55°C to +125°C
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
- Satellite communication

## GENERAL DESCRIPTION

The ADL8120-CSL is an ultra-wideband low noise amplifier (LNA) that operates from 30kHz to 20GHz. Typical gain and noise figure are 14dB and 1.9dB, respectively, from 30kHz to 14GHz. Output power for 1dB compression (OP1dB), output third-order intercept (OIP3), and output second-order intercept (OIP2) are 16dBm, 29.5dBm and 33dBm, respectively, from 30kHz to 14GHz. The nominal quiescent current (I DQ ), which can be adjusted, is 55mA from a 3.3V supply voltage (V DD ). The internally matched, DC-coupled RF input and output pins require external AC coupling capacitors along with a bias inductor on RFOUT. In addition, the RF input is biased through an external inductor connected between the VBIAS pin and the RFIN pin.

The ADL8120-CSL is fabricated on a pseudomorphic high electron mobility transistor (pHEMT) process. It is housed in a RoHS-compliant, 2mm × 2mm, 8-lead LFCSP and is specified for operation from -55°C to +125°C.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the ADL8120 data sheet.

Figure 1. Functional Block Diagram

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1                                                                                       | Absolute Maximum Ratings...................................5 Thermal Resistance........................................... 5 Outgas Testing................................................... 5 Radiation Features.............................................5                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| General Description...............................................1                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                        |
| Functional Block Diagram......................................1                                                                                                                                                                                                                                        | Electrostatic Discharge (ESD) Ratings...............5                                                                                                                                                                                                                                                  |
| Specifications........................................................ 3                                                                                                                                                                                                                               | ESD Caution.......................................................5                                                                                                                                                                                                                                    |
| 30kHz to 14GHz Frequency Range................... 3                                                                                                                                                                                                                                                    | Pin Configuration and Function Descriptions........ 6                                                                                                                                                                                                                                                  |
| 14GHz to 20GHz Frequency Range.................. 3                                                                                                                                                                                                                                                     | Typical Performance Characteristics.....................7                                                                                                                                                                                                                                              |
| DC Specifications...............................................4                                                                                                                                                                                                                                      | Outline Dimensions............................................... 8                                                                                                                                                                                                                                    |
| Radiation Test and Limit Specifications..............4                                                                                                                                                                                                                                                 | Ordering Guide...................................................8                                                                                                                                                                                                                                     |
| REVISION HISTORY                                                                                                                                                                                                                                                                                       | REVISION HISTORY                                                                                                                                                                                                                                                                                       |
| 11/2025-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                               | 11/2025-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                               |
| Changes to Commercial Space Features Section...........................................................................................1 Changes to Table 8..........................................................................................................................................5 | Changes to Commercial Space Features Section...........................................................................................1 Changes to Table 8..........................................................................................................................................5 |

1/2025-Revision 0: Initial Version

## SPECIFICATIONS

## 30KH z TO 14GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, bias resistance (R BIAS ) = 542Ω, and T CASE = 25°C, unless otherwise noted.

Table 1. 30kHz to 14GHz Frequency Range

| Parameter                       | Min     | Typ    | Max   | Unit   | Test Conditions/Comments                                                                                                               |
|---------------------------------|---------|--------|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------|
| FREQUENCY RANGE                 | 0.00003 |        | 14    | GHz    | Refer to the Low Frequency Bias Tee section in the ADL8120 data sheet for the parameter coverage and operation down to the 30kHz range |
| GAIN                            | 12      | 14     |       | dB     |                                                                                                                                        |
| Gain Variation over Temperature |         | 0.0213 |       | dB/°C  |                                                                                                                                        |
| NOISE FIGURE                    |         | 1.9    |       | dB     |                                                                                                                                        |
| RETURN LOSS                     |         |        |       |        |                                                                                                                                        |
| Input (S11)                     |         | 14     |       | dB     |                                                                                                                                        |
| Output (S22)                    |         | 15     |       | dB     |                                                                                                                                        |
| OUTPUT                          |         |        |       |        |                                                                                                                                        |
| OP1dB                           | 13.5    | 16     |       | dBm    |                                                                                                                                        |
| Saturated Power (P SAT )        |         | 17.5   |       | dBm    |                                                                                                                                        |
| OIP3                            |         | 29.5   |       | dBm    | Measurement taken at output power (P OUT ) per tone = 0dBm                                                                             |
| OIP2                            |         | 33     |       | dBm    | Measurement taken at P OUT per tone = 0dBm                                                                                             |
| POWER ADDED EFFICIENCY (PAE)    |         | 20.5   |       | %      | Measured at P SAT                                                                                                                      |

## 14GH z TO 20GH z FREQUENCY RANGE

VDD  = 3.3V, I DQ = 55mA, R BIAS = 542Ω, and T CASE = 25°C, unless otherwise noted.

Table 2. 14GHz to 20GHz Frequency Range

| Parameter                       | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                   |
|---------------------------------|-------|-------|-------|--------|--------------------------------------------|
| FREQUENCY RANGE                 | 14    |       | 20    | GHz    |                                            |
| GAIN                            | 13    | 15    |       | dB     |                                            |
| Gain Variation over Temperature |       | 0.022 |       | dB/°C  |                                            |
| NOISE FIGURE                    |       | 2.3   |       | dB     |                                            |
| RETURN LOSS                     |       |       |       |        |                                            |
| S11                             |       | 8     |       | dB     |                                            |
| S22                             |       | 15    |       | dB     |                                            |
| OUTPUT                          |       |       |       |        |                                            |
| OP1dB                           | 11    | 13.5  |       | dBm    |                                            |
| P SAT                           |       | 16    |       | dBm    |                                            |
| OIP3                            |       | 26.5  |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| OIP2                            |       | 33    |       | dBm    | Measurement taken at P OUT per tone = 0dBm |
| PAE                             |       | 16    |       | %      | Measured at P SAT                          |

## SPECIFICATIONS

## DC SPECIFICATIONS

Table 3. DC Specifications

| Parameter                     | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------|-------|-------|--------|
| SUPPLY CURRENT                |       |       |       |        |
| I DQ                          |       | 55    |       | mA     |
| Amplifier Current (I DQ_AMP ) |       | 51    |       | mA     |
| RBIAS Current (I RBIAS )      |       | 4     |       | mA     |
| SUPPLY VOLTAGE                |       |       |       |        |
| V DD                          | 3     | 3.3   | 3.6   | V      |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Electrical characteristics at V DD = 3.3V, I DQ = 55mA, R BIAS = 542Ω, and T A = 25°C, unless otherwise noted.

Table 4. Radiation Test and Limit Specifications

| Parameter       | Min   | Typ   | Max   | Unit   |
|-----------------|-------|-------|-------|--------|
| FREQUENCY RANGE | 14    |       | 20    | GHz    |
| GAIN            | 13    | 15    |       | dB     |
| OUTPUT          |       |       |       |        |
| OP1dB           | 11    | 13.5  |       | dBm    |
| SUPPLY CURRENT  |       |       |       |        |
| I DQ            |       | 55    |       | mA     |
| I DQ_AMP        |       | 51    |       | mA     |
| I RBIAS         |       | 4     |       | mA     |
| SUPPLY VOLTAGE  |       |       |       |        |
| V DD            | 3     | 3.3   | 3.6   | V      |

## ABSOLUTE MAXIMUM RATINGS

## Table 5. Absolute Maximum Ratings

| Parameter                                                                              | Rating          |
|----------------------------------------------------------------------------------------|-----------------|
| V DD RF Input Power (RFIN)                                                             | 5.5V 28dBm      |
| Continuous Power Dissipation (P DISS ), T CASE = 85°C (Derate 10mW/°C Above 85°C)      |                 |
|                                                                                        | 0.9W            |
| Temperature                                                                            |                 |
| Storage Range                                                                          | -65°C to +150°C |
| Operating Range                                                                        | -55°C to +125°C |
| Quiescent Channel (T CASE = 85°C, V DD = 3.3V, I DQ = 55mA, Input Power (P IN ) = Off) | 103.15°C        |
| Maximum Channel                                                                        | 175°C           |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JC is the channel to case thermal resistance.

## Table 6. Thermal Resistance 1

| Package Type                 | θ JC   | Unit   |
|------------------------------|--------|--------|
| CP-8-30                      |        |        |
| Quiescent, T CASE = 25°C     | 98     | °C/W   |
| Worst Case 2 , T CASE = 85°C | 100    | °C/W   |

- 1 Thermal resistance varies with operating conditions.

2 Across all specified operating conditions.

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

- 1 Guaranteed by device and process characterization. Contact Analog Devices, Inc, Technical Support for data available up to 100krads.
- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics but are not production lot tested.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for ADL8120-CSL

Table 9. ADL8120-CSL, 8-Lead LFCSP

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

| Pin No.   | Mnemonic           | Description                                                                                                                                                                                                                   |
|-----------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | RBIAS              | Bias Setting Resistor. Connect a resistor between RBIAS and VDDx to set I DQ . See the Typical Application Circuit and the Recommended Bias Values for V DD = 3.3V table in the ADL8120 data sheet for more details.          |
| 2         | VBIAS              | Bias Setting Voltage Output. VBIAS sets the bias voltage for the RFIN pin. Connect VBIAS to RFIN using an inductor or ferrite bead as shown in Typical Application Circuit in the ADL8120 data sheet.                         |
| 3, 6      | GND                | Ground. Connect to a ground plane that has low electrical and thermal impedance.                                                                                                                                              |
| 4         | RFIN               | RF Input. The RFIN pin is DC-coupled and matched to 50Ω.                                                                                                                                                                      |
| 5         | RFOUT/VDD1         | RF Output and Drain Bias Voltage. The RF output is DC-coupled and also serves as the drain biasing node. For the drain bias voltage, connect a DC bias network to provide the drain current and AC-couple the RF output path. |
| 7         | NIC                | No Internal Connection. The NIC pin is not connected internally. For normal operation, connect this pin to ground.                                                                                                            |
| 8         | VDD2 GROUND PADDLE | Drain Bias. Connect the VDD2 pin to a common supply with VDD1. Ground Paddle. Connect the ground paddle to a ground plane that has low electrical and thermal impedance.                                                      |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADL8120 data sheet for the typical performance characteristics plot.

## OUTLINE DIMENSIONS

Figure 3. 8-Lead Lead Frame Chip Scale Package [LFCSP] 2mm × 2mm Body and 0.85mm Package Height (CP-8-30) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1, 2          | Temperature Range   | Package Description              | Packing Quantity   | Package Option   |
|---------------------|---------------------|----------------------------------|--------------------|------------------|
| ADL8120ACPZN-CSL    | -55°C to +125°C     | 8-lead LFCSP, 2mm × 2mm × 0.85mm | Tape, 1            | CP-8-30          |
| ADL8120ACPZN-R7-CSL | -55°C to +125°C     | 8-lead LFCSP, 2mm × 2mm × 0.85mm | Reel, 3000         | CP-8-30          |

- 2 The lead finish of the ADL8120ACPZN-CSL and the ADL8120ACPZN-R7-CSL is nickel palladium gold.

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.