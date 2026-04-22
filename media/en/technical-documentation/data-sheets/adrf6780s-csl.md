<!-- lastmod 2024-11-18 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- Wideband RF output frequency range: 5.9 GHz to 23.6 GHz
- Two upconversion modes
- Direct conversion from baseband I/Q to RF
- Single sideband upconversion from real IF
- LO input frequency range: 5.4 GHz to 14 GHz
- LO doubler (x2 LO) for up to 28 GHz
- Matched 100 Ω balanced RF output, LO input, and IF input
- High impedance baseband inputs
- Sideband suppression and carrier feedthrough optimization
- Variable attenuator and power detector for transmit power control
- Programmable via 4-wire SPI
- 32-lead, 5 mm × 5 mm LFCSP

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID)
- Outgassing characterization

## APPLICATIONS

- Low and medium Earth orbit (LEO/MEO) space payloads
- Avionics
- Point to point microwave radios
- Radar and electronic warfare systems

## ADRF6780S-CSL

## 5.9 GHz to 23.6 GHz, Wideband, Microwave Upconverter

## GENERAL DESCRIPTION

The ADRF6780S-CSL is a silicon germanium (SiGe) design, wideband, microwave upconverter optimized for point to point microwave radio designs operating in the 5.9 GHz to 23.6 GHz frequency range.

The upconverter offers two modes of frequency translation. The device is capable of direct conversion to RF from baseband in-phase quadrature (I/Q) input signals, as well as single sideband (SSB) upconversion from a real intermediate frequency (IF) input carrier frequency. The baseband inputs are high impedance and are generally terminated off chip with 100 Ω differential back terminations. The baseband I/Q input path can be disabled and a modulated real IF signal anywhere from 0.8 GHz to 3.5 GHz can fed into the IF input path and upconverted to 5.9 GHz to 23.6 GHz while suppressing the unwanted sideband by typically better than 25 dBc. The serial port interface (SPI) allows tweaking of the quadrature phase adjustment to allow optimum sideband suppression. In addition, the SPI allows powering down the output power detector to reduce power consumption when power monitoring is not necessary.

The ADRF6780S-CSL upconverter comes in a compact, thermally enhanced, 5 mm × 5 mm LFCSP. The ADRF6780S-CSL operates over the -40°C to +85°C temperature range.

Additional application and technical information can be found in the Commercial Space Products Program brochure and ADRF6780 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 General Description...............................................1 Functional Block Diagram......................................3 Specifications........................................................ 4 Radiation Test and Limit Specifications..............7 Absolute Maximum Ratings...................................9   | Outgas Testing................................................... 9 Radiation Features.............................................9 Electrostatic Discharge (ESD) Ratings...............9 ESD Caution.......................................................9 Pin Configuration and Function Descriptions...... 10 Typical Performance Characteristics...................12 Outline Dimensions............................................. 13   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Thermal Resistance...........................................                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Ordering Guide.................................................13                                                                                                                                                                                                                                                                                                                                                                                 |
| 9                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11/2024-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Change to Table 6............................................................................................................................................9                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

11/2024-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

VPBB = VPBI = VPLO = 3.3 V, VP18 = 1.8 V, VPDT = VPRF = 5 V, T A = 25°C, LO = 0 dBm differential drive, baseband I/Q amplitude = -15 dBm differential sine waves in quadrature with a 500 mV DC bias, baseband input termination with 100 Ω externally, and IF amplitude = -12 dBm differential sine waves, unless otherwise noted.

Table 1. Specifications

| Parameter                                     | Test Conditions/Comments                                                                                                                                   | Min   | Typ    | Max   | Unit   |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|-------|--------|
| RF OUTPUT FREQUENCY RANGE                     |                                                                                                                                                            | 5.9   |        | 23.6  | GHz    |
| LOCAL OSCILLATOR (LO) INPUT FREQUENCY RANGE   |                                                                                                                                                            | 5.4   |        | 14    | GHz    |
| LO AMPLITUDE RANGE                            |                                                                                                                                                            | -6    | 0      | +6    | dBm    |
| IF INPUT FREQUENCY RANGE                      |                                                                                                                                                            | 0.8   |        | 3.5   | GHz    |
| BASEBAND I/Q INPUT FREQUENCY RANGE            |                                                                                                                                                            | DC    |        | 750   | MHz    |
| I/Q MODULATOR PERFORMANCE                     |                                                                                                                                                            |       |        |       |        |
| Modulator Voltage Gain                        | Maximum gain at maximum gain setting Minimum gain at minimum gain setting                                                                                  | 10    | 13 -12 |       | dB dB  |
| Output Noise Density                          | Output carrier > -5 dBm                                                                                                                                    |       | -147   |       | dBc/Hz |
|                                               | Output carrier > -14 dBm                                                                                                                                   |       | -145   |       | dBc/Hz |
|                                               | Output carrier > -22.5 dBm                                                                                                                                 |       | -136   |       | dBc/Hz |
| Output Third-Order Intercept (OIP3)           | f 1 baseband = 10 MHz, f 2 baseband = 12 MHz, baseband I/Q amplitude per tone = -15 dBm sine waves in quadrature with a 500 mV DC bias, 10 dB gain setting |       |        |       |        |
| 5.9 GHz to 10 GHz                             |                                                                                                                                                            |       | 24     |       | dBm    |
| 10 GHz to 14 GHz                              |                                                                                                                                                            |       | 25     |       | dBm    |
| 14 GHz to 20 GHz                              |                                                                                                                                                            |       | 27     |       | dBm    |
| 20 GHz to 23.6 GHz                            |                                                                                                                                                            |       | 27     |       | dBm    |
| Fifth-Order Intermodulation Distortion (IMD5) | f 1 baseband = 10 MHz, f 2 baseband = 12 MHz, baseband I/Q amplitude per tone = -15 dBm sine waves in quadrature with a 500 mV DC bias, 10 dB gain setting |       | 65     |       | dBm    |
| Output Second-Order Intercept (OIP2)          | f 1 baseband = 10 MHz, f 2 baseband = 12 MHz, baseband I/Q amplitude per tone = -15 dBm sine waves in quadrature with a 500 mV DC bias, 10 dB gain setting |       |        |       |        |
| 5.9 GHz to 10 GHz                             |                                                                                                                                                            |       | 65     |       | dBm    |
| 10 GHz to 14 GHz                              |                                                                                                                                                            |       | 65     |       | dBm    |
| 14 GHz to 20 GHz                              |                                                                                                                                                            |       | 66     |       | dBm    |
| 20 GHz to 23.6 GHz                            |                                                                                                                                                            |       | 50     |       | dBm    |
| Output 1 dB Compression Point (P1dB)          |                                                                                                                                                            |       |        |       |        |
| 5.9 GHz to 10 GHz                             | At 10 dB gain setting                                                                                                                                      |       | 10.5   |       | dBm    |
|                                               | At maximum gain setting                                                                                                                                    |       | 11     |       | dBm    |
| 10 GHz to 14 GHz                              | At 10 dB gain setting                                                                                                                                      |       | 11     |       | dBm    |
|                                               | At maximum gain setting                                                                                                                                    |       | 12     |       | dBm    |
| 14 GHz to 20 GHz                              | At 10 dB gain setting                                                                                                                                      |       | 10     |       | dBm    |
|                                               | At maximum gain setting                                                                                                                                    |       | 12     |       | dBm    |
| 20 GHz to 23.6 GHz                            | At 10 dB gain setting                                                                                                                                      |       | 10     |       | dBm    |
|                                               | At maximum gain setting                                                                                                                                    |       | 11     |       | dBm    |
| LO Feedthrough                                | At 10 dB gain setting (can be improved by baseband DC offset adjustment)                                                                                   |       | -25    |       | dBm    |
| Sideband Suppression                          | At 10 dB gain setting                                                                                                                                      |       | 25     |       | dBc    |
| IF UPCONVERTER PERFORMANCE                    |                                                                                                                                                            |       |        |       |        |
| Upconversion Voltage Gain                     | Maximum gain at maximum gain setting                                                                                                                       | 7     | 11     |       | dB     |
|                                               | Minimum gain at minimum gain setting                                                                                                                       |       | -14    |       | dB     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                       | Test Conditions/Comments                                                                     | Min        | Typ   | Max   | Unit   |
|---------------------------------|----------------------------------------------------------------------------------------------|------------|-------|-------|--------|
| Output Noise Density            | Output carrier > -5 dBm                                                                      |            | -147  |       | dBc/Hz |
|                                 | Output carrier > -14 dBm                                                                     |            | -145  |       | dBc/Hz |
|                                 | Output carrier > -22.5 dBm                                                                   |            | -136  |       | dBc/Hz |
| OIP3                            | f 1 IF = 1810 MHz, f 2 IF = 1812 MHz, amplitude per tone = -15                               |            |       |       |        |
| 5.9 GHz to 10 GHz               | dBm sine waves in quadrature with AC bias, 7 dB gain setting                                 |            | 27    |       | dBm    |
| 10 GHz to 14 GHz                |                                                                                              |            | 24    |       | dBm    |
| 14 GHz to 20 GHz                |                                                                                              |            | 22.5  |       | dBm    |
| 20 GHz to 23.6 GHz              |                                                                                              |            | 22.5  |       | dBm    |
| IMD5                            | f 1 IF = 1810 MHz, f 2 IF = 1812 MHz, amplitude per tone = -15                               |            | 80    |       | dBm    |
|                                 | dBm sine waves in quadrature with AC bias, 7 dB gain setting                                 |            |       |       |        |
| Output P1dB                     |                                                                                              |            |       |       |        |
| 5.9 GHz to 10 GHz               | At 7 dB gain setting                                                                         |            | 10.5  |       | dBm    |
|                                 | At maximum gain setting                                                                      |            | 11.5  |       | dBm    |
| 10 GHz to 14 GHz                | At 7 dB gain setting                                                                         |            | 10    |       | dBm    |
|                                 | At maximum gain setting                                                                      |            | 12    |       | dBm    |
| 14 GHz to 20 GHz                | At 7 dB gain setting                                                                         |            | 9.5   |       | dBm    |
|                                 | At maximum gain setting                                                                      |            | 12    |       | dBm    |
| 20 GHz to 23.6 GHz              | At 7 dB gain setting                                                                         |            | 9.5   |       | dBm    |
|                                 | At maximum gain setting                                                                      |            | 11.5  |       | dBm    |
| LO Feedthrough                  | At 7 dB gain setting (can be improved by baseband DC offset adjustment)                      |            | -35   |       | dBm    |
| Sideband Suppression            | At 7 dB gain setting                                                                         |            | 25    |       | dBc    |
| Tx POWER DETECTOR PERFORMANCE   |                                                                                              |            |       |       |        |
| Output Level                    |                                                                                              |            |       |       |        |
| Maximum                         |                                                                                              |            | 2     |       | dBm    |
| Minimum                         |                                                                                              |            | -30   |       | dBm    |
| ±1 dB Dynamic Range             |                                                                                              |            | 34    |       | dB     |
| Output Voltage                  |                                                                                              |            |       |       |        |
| Maximum                         |                                                                                              |            | 1     |       | V      |
| Minimum                         |                                                                                              |            | 0.2   |       | V      |
| Log Slope                       |                                                                                              |            | 25    |       | mV/dB  |
| Time                            |                                                                                              |            |       |       |        |
| Rise                            | Input power (P IN ) = off to -10 dBm, 10% to 90%, C7 = 10 pF (see ADRF6780 for more details) |            | 134   |       | ns     |
| Fall                            | P IN = -10 dBm to off, 10% to 90%, C7 = 10 pF (see ADRF6780 for more details)                |            | 190   |       | ns     |
| Response                        | C7 = 10 pF (see ADRF6780 for more details)                                                   |            | 30    |       | ns     |
| RETURN LOSS                     |                                                                                              |            |       |       |        |
| RF Output                       | 100 Ω differential                                                                           |            | 12    |       | dB     |
| LO Input                        | 100 Ω differential                                                                           |            | 12    |       | dB     |
| IF Input                        | 100 Ω differential                                                                           |            | 17    |       | dB     |
| Baseband I/Q Input Impedance    |                                                                                              |            | 1     |       | MΩ     |
| LOGIC INPUTS                    |                                                                                              |            |       |       |        |
| Input High Voltage Range, V INH |                                                                                              | VP18 - 0.4 |       | 1.8   | V      |
| Input Low Voltage Range, V INL  |                                                                                              | 0          |       | 0.4   | V      |
| Input Current, I INH /I INL     |                                                                                              |            | 100   |       | µA     |
| Input Capacitance, C IN         |                                                                                              |            | 3     |       | pF     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                         | Test Conditions/Comments                                  | Min        | Typ      | Max    | Unit   |
|-----------------------------------|-----------------------------------------------------------|------------|----------|--------|--------|
| LOGIC OUTPUTS                     |                                                           |            |          |        |        |
| Output High Voltage Range, V OH   |                                                           | VP18 - 0.4 |          | 1.8    | V      |
| Output Low Voltage Range, V OL    |                                                           | 0          |          | 0.4    | V      |
| Output High Current, I OH         |                                                           |            |          | 500    | µA     |
| POWER INTERFACE                   |                                                           |            |          |        |        |
| VPBB, VPLO, and VPBI              |                                                           | 3.15       | 3.3      | 3.45   | V      |
| Supply Current                    | ×1 LO path enabled, IF path disabled VPBI                 |            |          | 40     | mA     |
|                                   | VPBB                                                      |            |          | 40     | mA     |
|                                   | VPLO                                                      |            |          | 360    | mA     |
|                                   | Total (VPBI, VPBB, and VPLO)                              |            | 340      | 440    | mA     |
|                                   | ×2 LO path enabled, IF path disabled                      |            |          |        |        |
|                                   | VPBI                                                      |            |          | 40     | mA     |
|                                   | VPBB                                                      |            |          | 40     | mA     |
|                                   | VPLO                                                      |            |          | 430    | mA     |
|                                   | Total (VPBI, VPBB, and VPLO)                              |            | 390      | 510    | mA     |
|                                   | ×1 LO path enabled, IF path enabled VPBI                  |            |          | 40     | mA     |
|                                   | VPBB                                                      |            |          | 190    | mA     |
|                                   | VPLO                                                      |            |          | 360    | mA     |
|                                   | Total (VPBI, VPBB, and VPLO)                              |            | 490      | 590    | mA     |
|                                   | ×2 LO path enabled, IF path enabled VPBI                  |            |          | 40     | mA     |
|                                   | VPBB                                                      |            |          | 190    | mA     |
|                                   | VPLO                                                      |            |          | 430    |        |
|                                   |                                                           |            |          |        | mA     |
|                                   | Total (VPBI, VPBB, and VPLO)                              |            | 540      | 660    | mA     |
| VP18                              |                                                           | 1.7        | 1.8      | 1.9    | V      |
| VP18 Supply Current VPDT and VPRF |                                                           | 4.75       | 1 5      | 2 5.25 | mA V   |
| Supply Current                    | ×1/×2 LO path enabled, IF path disabled                   |            |          |        |        |
|                                   | VPDT                                                      |            |          | 6      | mA     |
|                                   | VPRF                                                      |            |          | 260    | mA     |
|                                   | Total (VPDT and VPRF)                                     |            | 180      | 266    | mA     |
|                                   | ×1/×2 LO path enabled, IF path enabled VPDT               |            |          |        | mA     |
|                                   | VPRF                                                      |            |          | 6 240  | mA     |
|                                   | Total (VPDT and VPRF) ×2 LO path enabled, IF path enabled |            | 160 2.58 | 246    | mA W   |
| Total Power Consumption           | Power down                                                |            | 35       | 50     |        |
|                                   |                                                           |            |          |        | mW     |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

VPBB = VPBI = VPLO = 3.3 V, VP18 = 1.8 V, VPDT = VPRF = 5 V, T A = 25°C, LO = 0 dBm differential drive, baseband I/Q amplitude = -15 dBm differential sine waves in quadrature with a 500 mV DC bias, baseband input termination with 100 Ω externally, and IF amplitude = -12 dBm differential sine waves, unless otherwise noted.

Table 2. Radiation Test and Limit Specification

| Parameter                  | Test Conditions/Comments 1                                                      | Min   | Typ   | Max   | Unit   |
|----------------------------|---------------------------------------------------------------------------------|-------|-------|-------|--------|
| I/Q MODULATOR PERFORMANCE  |                                                                                 |       |       |       |        |
| Modulator Voltage Gain     |                                                                                 |       |       |       |        |
| At 6701 MHz 2              |                                                                                 | 10    | 13    |       | dB     |
| At 10001 MHz 2             |                                                                                 | 10    | 13    |       | dB     |
| At 20001 MHz 3             |                                                                                 | 7     | 13    |       | dB     |
| At 235001 MHz 3            |                                                                                 | 7     | 13    |       | dB     |
| OIP3                       |                                                                                 |       |       |       |        |
| At 6002 MHz 2              |                                                                                 | 14    | 24    |       | dBm    |
| IF UPCONVERTER PERFORMANCE |                                                                                 |       |       |       |        |
| Upconversion Voltage Gain  |                                                                                 |       |       |       |        |
| At 6000 MHZ 4              |                                                                                 | 7     | 11    |       | dB     |
| At 11760 MHz 4             |                                                                                 | 7     | 11    |       | dB     |
| At 20000 MHz 5             |                                                                                 | 7     | 11    |       | dB     |
| Output P1dB                |                                                                                 |       |       |       |        |
| At 6000 MHz 4              |                                                                                 | 8     | 11.5  |       | dBm    |
| At 11750 MHz 4             |                                                                                 | 8     | 12    |       | dBm    |
| At 20000 MHz 5             |                                                                                 | 8     | 12    |       | dBm    |
| At 23500 MHz 5             |                                                                                 | 6     | 11.5  |       | dBm    |
| POWER INTERFACE            |                                                                                 |       |       |       |        |
| 3.3 V Supply Current       | ×1 LO path enabled, IF path disabled, detector off                              |       |       |       |        |
|                            | VPBI                                                                            |       |       | 40    | mA     |
|                            | VPBB                                                                            |       |       | 40    | mA     |
|                            | VPLO                                                                            |       |       | 360   | mA     |
|                            | Total (VPBI, VPBB, and VPLO) ×2 LO path enabled, IF path disabled, detector off |       | 340   | 440   | mA     |
|                            | VPBI                                                                            |       |       | 40    | mA     |
|                            | VPBB                                                                            |       |       | 40    | mA     |
|                            | VPLO                                                                            |       |       | 430   | mA     |
|                            | Total (VPBI, VPBB, and VPLO)                                                    |       | 390   | 510   | mA     |
|                            | ×1 LO path enabled, IF path enabled, detector off                               |       |       |       |        |
|                            | VPBI                                                                            |       |       | 40    | mA     |
|                            | VPBB                                                                            |       |       | 190   | mA     |
|                            | VPLO                                                                            |       |       | 360   | mA     |
|                            | Total (VPBI, VPBB, and VPLO)                                                    |       | 490   | 590   | mA     |
|                            | ×2 LO path enabled, IF path enabled, detector off                               |       |       |       |        |
|                            | VPBI                                                                            |       |       | 40    | mA     |
|                            | VPBB                                                                            |       |       | 190   | mA     |
|                            | VPLO                                                                            |       |       | 430   | mA     |
|                            | Total (VPBI, VPBB, and VPLO)                                                    |       | 540   | 660   | mA     |

## SPECIFICATIONS

Table 2. Radiation Test and Limit Specification (Continued)

| Parameter            | Test Conditions/Comments 1                            | Min   | Typ   | Max   | Unit   |
|----------------------|-------------------------------------------------------|-------|-------|-------|--------|
| 1.8 V Supply Current |                                                       |       | 1     | 2     | mA     |
| 5 V Supply Current   | ×1/×2 LO path enabled, IF path disabled, detector off |       |       |       |        |
|                      | VPDT                                                  |       |       | 6     | mA     |
|                      | VPRF                                                  |       |       | 260   | mA     |
|                      | Total (VPDT and VPRF)                                 |       | 180   | 266   | mA     |
|                      | ×1/×2 LO path enabled, IF path enabled, detector off  |       |       |       |        |
|                      | VPDT                                                  |       |       | 6     | mA     |
|                      | VPRF                                                  |       |       | 240   | mA     |
|                      | Total (VPDT and VPRF)                                 |       | 160   | 246   | mA     |

## ABSOLUTE MAXIMUM RATINGS

## Table 3. Absolute Maximum Ratings

| Parameter                     | Rating          |
|-------------------------------|-----------------|
| Supply Voltage                |                 |
| VPDT and VPRF                 | 6.5 V           |
| VPBB, VPLO, and VPBI          | 4.3 V           |
| VP18                          | 2.0 V           |
| Temperature                   |                 |
| Maximum Junction              | 125°C           |
| Operating Range               | -40°C to +85°C  |
| Storage Range                 | -55°C to +125°C |
| Lead Range (Soldering 60 sec) | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θ JA is thermal resistance, junction to ambient (°C/W), and θ JC, TOP and θ JC, BOT are the top and bottom thermal resistance, junction to case (°C/W).

## Table 4. Thermal Resistance

| Package Type 1   |   θ JA |   θ JC, TOP |   θ JC, BOT | Unit   |
|------------------|--------|-------------|-------------|--------|
| CP-32-20         |   32.5 |          23 |         1.7 | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

Table 5. Outgas Testing

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           |    0.03 | %      |
| Collected Volatile Condensable Material   |    0.01 | %      |
| Water Vapor Recovered                     |    0.03 | %      |

## RADIATION FEATURES

## Table 6. Radiation Features

| Specifications                            |   Value | Unit      |
|-------------------------------------------|---------|-----------|
| Maximum Total Dose Available (Dose Rate = |     100 | krad (Si) |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF6780S-CSL

Table 7. ADRF6780S-CSL, 32-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±500                      | 1B      |
| CDM         | ±1250 1                   | C3      |
|             | ±500 2                    | C2a     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.                 | Mnemonic               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                       | VDET                   | RF Detector Output. The voltage output is proportional to the decibel RF output power. The detector slope is nominally 50 mV/dB.                                                                                                                                                                                                                                                                                                                       |
| 2                       | VPDT                   | Power Supply Connection for the RF Detector. Decouple the VPDT pin with 100 pF and 0.1 µF capacitors as close as possible to the pin. Note that this pin must always be supplied with 5 V.                                                                                                                                                                                                                                                             |
| 3, 9                    | VPRF                   | Power Supply Connections for the RF Path. Decouple the VPRF pins with 100 pF and 0.1 µF capacitors as close as possible to the pins.                                                                                                                                                                                                                                                                                                                   |
| 4, 6, 8, 19, 29 5, 7 10 | AGND RFOP, RFON VATT   | Analog Grounds. Connect these pins to a low impedance ground plane. RF Outputs. These outputs are 100 Ω differential outputs for the RF path. Frequency range is 5.9 GHz to 23.6 GHz. Modulator Output Attenuator Control Input. The RF voltage variable attenuator is controlled by applying a 0 V to 2.6 V control voltage to the VATT pin. Increase the gain when the VATT voltage increases. This pin is linear in dB over the central gain range. |
| 11 to 14                | BBQN, BBQP, BBIP, BBIN | I Channel and Q Channel Baseband Inputs. These inputs are high input impedance and are typically differentially terminated to a 100 Ω resistor using an off chip termination. The nominal common-mode bias level on these pins must be 0.5 V.                                                                                                                                                                                                          |
| 15                      | VPBB                   | Power Supply Connection for Baseband Path. Decouple the VPBB pin with 100 pF and 0.1 µF capacitors as close as possible to the pin.                                                                                                                                                                                                                                                                                                                    |
| 16                      | PWDN                   | Power Down. The ADRF6780S-CSL powers up when the PWDN pin is at a low logic level (<0.5 V). To power down the ADRF6780S-CSL, apply a logic high level (>1.2 V). When the ADRF6780S-CSL is powered up, the SPI can also be used as a power-down capability. The PWDN pin has an internal 18 kΩ pull-down resistor.                                                                                                                                      |
| 17                      | RST                    | Reset. This pin provides the ability to reset the SPI to the default register settings. Pull the RST pin to a logic high level in normal operation. Driving the RST pin to a logic low level loads the default SPI register settings. The RST pin has an internal 7.75 kΩ pull-up resistor.                                                                                                                                                            |
| 18, 20                  | IFIN, IFIP             | IF Inputs. These inputs are 100 Ω differential inputs for IF upconversion, and these pins must be AC-coupled. When the IF mode is set, remove the 0 Ω R10 to R13 resistors from the I/Q lines.                                                                                                                                                                                                                                                         |
| 21                      | VPBI                   | Power Supply Connection. Decouple the VPBI pin with 100 pF and 0.1 µF capacitors as close as possible to the pin.                                                                                                                                                                                                                                                                                                                                      |
| 22                      | VP18                   | 1.8 V Power Supply. Decouple the VP18 pin with 100 pF and 0.1 µF capacitors as close as possible to the pin.                                                                                                                                                                                                                                                                                                                                           |
| 23                      | SDIN                   | Serial Data Input. Serial data applied to the SDIN pin is loaded into the SPI register upon a successful write command as indicated in the timing diagrams (see the ADRF6780 data sheet for more details). The first MSB is a control bit, and this bit determines whether data is written to the register (logic low) or read from the serial data output pin (logic high). The SDIN pin has an internal 18 kΩ pull-down resistor.                    |
| 24                      | SCLK                   | Serial Clock. This pin is the clock input for the SPI. The SCLK pin has an internal 18 kΩ pull-down resistor.                                                                                                                                                                                                                                                                                                                                          |
| 25                      | SDTO                   | Serial Data Output. The SDTO pin provides a SPI readback capability. See the timing diagrams for normal operation (see the ADRF6780 data sheet for more details). The SDTO pin has an internal 18 kΩ pull-down resistor.                                                                                                                                                                                                                               |
| 26                      | SEN                    | Serial Enable. When the SEN input pin goes high, the data stored in the shift registers is loaded into the register. The pin has an internal 7.75 kΩ pull-up resistor.                                                                                                                                                                                                                                                                                 |
| 27, 31                  | VPLO                   | Power Supply Connections for the LO Path. Decouple the VPLO pin with 100 pF and 0.1 µF capacitors as close as possible to the pins.                                                                                                                                                                                                                                                                                                                    |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                  |
|-----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 28, 30    | LOIN, LOIP | LO Inputs. These inputs are 100 Ω differential inputs for the LO path. The LO input frequency range is 5.4 GHz to 14 GHz. The on-chip LO frequency doubler can be enabled via a SPI command. |
| 32        | ALM        | Alarm. The ALM pin indicates the internal alarm conditions. The ALM pin is logic low when an alarm condition is detected.                                                                    |
|           | EP         | Exposed Pad. Solder the exposed pad to a low impedance ground plane.                                                                                                                         |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF6780 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

Figure 3. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body and 0.75 mm Package Height (CP-32-20) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1              | Temperature Range   | Package Description                   | Package Quantity   | Package Option   |
|----------------------|---------------------|---------------------------------------|--------------------|------------------|
| ADRF6780ACPZN-CSL    | -40°C to +85°C      | 32-Lead LFCSP (5 mm × 5 mm × 0.75 mm) | Tray, 490          | CP-32-20         |
| ADRF6780ACPZN-CSL-R7 | -40°C to +85°C      | 32-Lead LFCSP (5 mm × 5 mm × 0.75 mm) | Reel, 500          | CP-32-20         |

<!-- image -->