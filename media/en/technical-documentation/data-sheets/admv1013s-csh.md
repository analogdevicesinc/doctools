<!-- lastmod 2025-03-20 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- Wideband RF output frequency range: 24GHz to 44GHz
- 2 upconversion modes
- Direct conversion from baseband I/Q to RF
- Single-sideband upconversion from real IF
- LO input frequency range: 5.4GHz to 10.25GHz
- LO quadrupler for up to 41GHz
- Matched 50Ω single-ended RF output and IF inputs
- Option between matched 100Ω differential or 50Ω single-ended LO inputs
- 100Ω differential baseband inputs
- Sideband suppression and carrier feedthrough optimization
- Variable attenuator for transceiver power control
- Programmable via 4-wire SPI
- 40-terminal land grid array (LGA) package

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Certificate of Conformance
- Wafer diffusion lot traceability
- Qualification based on flows per NASA PEM-INST-001 and SAE AS6294
- Burn-in, life test, and deltas analysis
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Outgassing characterization

## GENERAL DESCRIPTION

The ADMV1013S-CSH is a wideband, microwave upconverter optimized for point-to-point microwave radio designs operating in the 24GHz to 44GHz RF output frequency range.

The upconverter offers two modes of frequency translation. The device is capable of direct conversion to RF from baseband inphase quadrature (I/Q) input signals, as well as single-sideband upconversion from complex intermediate frequency (IF) inputs. The baseband I/Q input path can be disabled and modulate complex IF signals, anywhere from 0.8GHz to 6.0GHz, can be inserted in the IF path, and can be upconverted to 24GHz to 44GHz while suppressing the unwanted sideband by typically better than 26dBc. The serial port interface (SPI) of the ADMV1013S-CSH allows adjustment of the quadrature phase and mixer gate voltage to allow optimum sideband suppression and local oscillator (LO) nulling.

Rev. 0

DOCUMENT FEEDBACK

## 24GHz to 44GHz, Wideband, Microwave Upconverter

## APPLICATIONS

- Low Earth orbit (LEO) and medium Earth orbit (MEO) satellites
- Geosynchronous Earth orbit (GEO) satellites
- Avionics
- Point to point microwave radios
- Radars and electronic warfare systems

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

In addition, the SPI allows powering down the output envelope detector to reduce power consumption.

The ADMV1013S-CSH upconverter comes in a 40-terminal land grid array package (LGA) package. The ADMV1013S-CSH operates over the -40°C to +85°C T CASE range.

Additional application and technical information can be found in the Commercial Space Products Program brochure and ADMV1013 data sheet.

## TABLE OF CONTENTS

Features................................................................ 1

Commercial Space Features................................. 1

Applications........................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

Serial Port Register Timing................................ 6

Burn-in Delta Limit Specifications.......................7

Radiation Test and Limit Specifications..............8

Absolute Maximum Ratings...................................9

## REVISION HISTORY

3/2025-Revision 0: Initial Version

| Thermal Resistance...........................................      | 9   |
|--------------------------------------------------------------------|-----|
| Explanation of Test Levels..................................9      |     |
| Outgas Testing...................................................  | 9   |
| Radiation Features...........................................10    |     |
| Electrostatic Discharge (ESD) Ratings.............10               |     |
| ESD Caution.....................................................10 |     |
| Pin Configuration and Function Descriptions.......11               |     |
| Typical Performance Characteristics...................13           |     |
| Outline Dimensions.............................................    | 14  |
| Ordering Guide.................................................14  |     |

## SPECIFICATIONS

IF and I/Q amplitude = -20dBm, VCC\_DRV = VCC2\_DRV = VCC\_AMP2 = VCC\_ENV = VCC\_AMP1 = VCC\_BG2 = VCC\_MIXER = VCC\_BG = VCC\_QUAD = 3.3V, DVDD = VCC\_VVA = 1.8V, and set Register 0x0A to 0xE700, unless otherwise noted.

Measurements in IF mode performed with a 90° hybrid; Register 0x03, Bit 7 (MIXER\_IF\_EN) = 1; and IF input frequency (f IF ) = 3.5GHz.

Measurements in I/Q mode are measured as a composite of the I and Q channel performance, common-mode voltage (V CM ) = 0V; Register 0x03, Bit 7 = 0; and Register 0x05, Bits[6:0] (MIXER\_VGATE) = 0x051, unless otherwise noted. I/Q baseband frequency (f BB ) = 100MHz.

VCTRL1 = VCTRL2. V CTRL is the attenuation voltage at the VCTRL1 and VCTRL2 pins. V CTRL = 1800mV, unless otherwise specified.

Minimum and maximum specifications represent performance at -40°C ≤ T A ≤ +85°C, unless otherwise noted. Typical specifications represent performance at T A = 25°C.

Table 1. Specifications

| Parameter                                   | Test Conditions/Comments        | Test Level 1   | T A   | Min   | Typ   | Max   | Unit   |
|---------------------------------------------|---------------------------------|----------------|-------|-------|-------|-------|--------|
| FREQUENCY RANGES                            |                                 |                |       |       |       |       |        |
| RF Output                                   |                                 |                |       | 24    |       | 44    | GHz    |
| LO Input                                    |                                 |                |       | 5.4   |       | 10.25 | GHz    |
| LO Quadrupler                               |                                 |                |       | 21.6  |       | 41    | GHz    |
| IF Input                                    |                                 |                |       | 0.8   |       | 6.0   | GHz    |
| Baseband I/Q Input                          |                                 |                |       | DC    |       | 6.0   | GHz    |
| LO AMPLITUDE RANGE                          |                                 |                |       | -6    | 0     | +6    | dBm    |
| I/Q MODULATOR PERFORMANCE                   |                                 |                |       |       |       |       |        |
| Conversion Gain                             | At maximum gain                 |                |       |       |       |       |        |
| 24GHz to 40GHz                              | f BB ≤ 3.5GHz                   | I              | 25°C  | 18    | 23    |       | dB     |
|                                             |                                 | I              | Full  | 17    |       |       | dB     |
|                                             | 6GHz > f BB > 3.5GHz            | III            | 25°C  |       | 21    |       |        |
| 40GHz to 44GHz                              |                                 | III            | 25°C  |       | 19    |       | dB     |
| Voltage Variable Attenuator Control Range   |                                 | II             | 25°C  |       | 35    |       | dB     |
| Single-Sideband Noise Figure                | At maximum gain                 | III            | 25°C  |       |       |       |        |
| 24GHz to 40GHz                              |                                 |                |       |       | 18    |       | dB     |
| 40GHz to 44GHz                              |                                 |                |       |       | 19    |       | dB     |
| Output Third-Order Intercept (IP3)          | At maximum gain                 |                |       |       |       |       |        |
| 24GHz to 40GHz                              |                                 | I              | 25°C  |       | 23    |       | dBm    |
| 40GHz to 44GHz                              |                                 | III            | 25°C  |       | 22    |       | dBm    |
| Output 1 dB Compression Point (P1dB)        | At maximum gain                 |                |       |       |       |       |        |
| 24GHz to 40GHz                              |                                 | I              | 25°C  | 10    | 13    |       | dBm    |
|                                             |                                 | I              | Full  | 9     |       |       | dBm    |
| 40GHz to 44GHz                              |                                 | III            | 25°C  |       | 12    |       | dBm    |
| Sideband Rejection Uncalibrated             | 24GHz to 44GHz, at maximum gain | III            | 25°C  |       | 32    |       | dBc    |
| IF SINGLE-SIDEBAND UPCONVERSION PERFORMANCE |                                 |                |       |       |       |       |        |
| Conversion Gain                             | At maximum gain                 |                |       |       |       |       |        |
| 24GHz to 40GHz                              | f IF ≤ 3.5GHz                   | I              | 25°C  | 13    | 18    |       | dB     |
|                                             |                                 | I              | Full  | 11    |       |       | dB     |
|                                             | 6GHz > f IF > 3.5GHz            | I              | 25°C  |       | 12    |       | dB     |
|                                             |                                 | I              | Full  | 7.5   |       |       | dB     |
| 40GHz to 44GHz                              |                                 | III            | 25°C  |       | 14    |       | dB     |
| Voltage Variable Attenuator Control Range   |                                 | II             | 25°C  |       | 35    |       | dB     |
| Single-Sideband Noise Figure                | At maximum gain                 | III            | 25°C  |       |       |       |        |
| 24GHz to 40GHz                              |                                 |                |       |       | 25    |       | dB     |
| 40GHz to 44GHz                              |                                 |                |       |       | 28    |       | dB     |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                     | Test Conditions/Comments                                                                                                                                                 | Test Level 1   | T A   | Min   | Typ     | Max   | Unit   |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|-------|-------|---------|-------|--------|
| Output IP3                    | At maximum gain                                                                                                                                                          |                |       |       |         |       |        |
| 24GHz to 40GHz                |                                                                                                                                                                          | I              | 25°C  |       | 23      |       | dBm    |
| 40GHz to 44GHz                |                                                                                                                                                                          | III            | 25°C  |       | 22      |       | dBm    |
| Output P1dB                   | At maximum gain                                                                                                                                                          |                |       |       |         |       |        |
| 24GHz to 40GHz                |                                                                                                                                                                          | I              | 25°C  | 10    | 13      |       | dBm    |
|                               |                                                                                                                                                                          | I              | Full  | 8     |         |       |        |
| 40GHz to 44GHz                |                                                                                                                                                                          | III            | 25°C  |       | 12      |       | dBm    |
| Sideband Rejection            | 24GHz to 44GHz, at maximum gain                                                                                                                                          |                |       |       |         |       |        |
| Uncalibrated                  |                                                                                                                                                                          | III            | 25°C  |       | 26      |       | dBc    |
| Calibrated                    | Calibrated using the LOAMP_PH_ADJ_ Q_FINE and LOAMP_PH_ADJ_I_FINE bits (see the ADMV1013 data sheet for additional register and bit information)                         | II             | 25°C  |       | 36      |       | dBc    |
| ENVELOPE DETECTOR PERFORMANCE |                                                                                                                                                                          |                |       |       |         |       |        |
| Output Level                  | For optimum performance                                                                                                                                                  | II             | 25°C  |       |         |       |        |
| Minimum                       |                                                                                                                                                                          |                |       |       | -45     |       | dBm    |
| Maximum                       |                                                                                                                                                                          |                |       |       | -20     |       | dBm    |
| Envelope Bandwidth 3dB        | Measured with two tones with a total power output (P OUT ) at RF = 10dBm RF frequency (f RF ) = 28GHz                                                                    | II             | 25°C  |       | 350 1   |       | MHz    |
| 10dB RETURN LOSS              | f RF = 28GHz                                                                                                                                                             |                |       |       |         |       | GHz    |
|                               |                                                                                                                                                                          | II             | 25°C  |       |         |       |        |
| RF Output                     | 50Ω single-ended                                                                                                                                                         |                |       |       | -8      |       | dB     |
| LO Input IF Input             | 100Ω differential 50Ω single-ended                                                                                                                                       |                |       |       | -12 -12 |       | dB     |
| Baseband Input                | 100Ω differential                                                                                                                                                        |                |       |       | -10     |       | dB     |
|                               |                                                                                                                                                                          |                |       |       |         |       | dB     |
| Baseband I/Q Input Impedance  |                                                                                                                                                                          |                |       |       | 100     |       | Ω      |
| LEAKAGE Fundamental LO to RF  | At maximum gain                                                                                                                                                          |                |       |       | -80     |       | dBm    |
| 5.4GHz to 6.8GHz LO           | Uncalibrated                                                                                                                                                             | III            | 25°C  |       | -12     |       | dBm    |
| 6.8GHz to 10.25GHz LO         | Uncalibrated                                                                                                                                                             | III            | 25°C  |       | -20     |       | dBm    |
| 5.4GHz to 10.25GHz LO         | Calibrated using the MXER_OFF_ADJ_I_P, MXER_OFF_ADJ_I_N, MXER_OFF_ADJ_Q_P, MXER_OFF_ADJ_Q_N bits at V CTRL = 1800mV, IF mode (see the ADMV1013 data sheet for additional | II             | 25°C  |       | -45     |       | dBm    |
| 5 × LO to RF                  |                                                                                                                                                                          | II             | 25°C  |       | -55     |       | dBm    |
| Fundamental LO to IF          |                                                                                                                                                                          | II             | 25°C  |       | -70     |       | dBm    |
| Fundamental LO to I/Q         |                                                                                                                                                                          | II             | 25°C  |       | -75     |       | dBm    |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                                                       | Test Conditions/Comments                         | Test Level 1   | T A   | Min        | Typ   | Max   | Unit   |
|---------------------------------------------------------------------------------|--------------------------------------------------|----------------|-------|------------|-------|-------|--------|
| LOGIC INPUTS                                                                    |                                                  | II             | 25°C  |            |       |       |        |
| Input Voltage Range                                                             |                                                  |                |       |            |       |       |        |
| High, V INH                                                                     |                                                  |                |       | DVDD - 0.4 |       | 1.8   | V      |
| Low, V INL                                                                      |                                                  |                |       | 0          |       | 0.4   | V      |
| Input Current, I INH /I INL                                                     |                                                  |                |       |            | 100   |       | µA     |
| Input Capacitance, C IN                                                         |                                                  |                |       |            | 3     |       | pF     |
| LOGIC OUTPUTS                                                                   |                                                  | II             | 25°C  |            |       |       |        |
| Output Voltage Range                                                            |                                                  |                |       |            |       |       |        |
| High, V OH                                                                      |                                                  |                |       | DVDD - 0.4 |       | 1.8   | V      |
| Low, V OL                                                                       |                                                  |                |       | 0          |       | 0.4   | V      |
| Output High Current, I OH                                                       |                                                  |                |       |            |       | 500   | µA     |
| POWER INTERFACE                                                                 |                                                  |                |       |            |       |       |        |
| VCC_DRV, VCC2_DRV, VCC_AMP2, VCC_ENV, VCC_AMP1, VCC_BG2, VCC_MIXER, VCC_BG, and |                                                  |                |       | 3.15       | 3.3   | 3.45  | V      |
| 3.3V Supply Current                                                             | V CTRL = 1.8V, no IF, and I/Q or LO input signal | I              | 25°C  |            | 550   |       | mA     |
| VCC_DRV                                                                         |                                                  | I              | Full  |            |       | 165   | mA     |
| VCC2_DRV                                                                        |                                                  | I              | Full  |            |       | 105   | mA     |
| VCC_AMP2                                                                        |                                                  | I              | Full  |            |       | 125   | mA     |
| VCC_ENV                                                                         |                                                  | I              | Full  |            |       | 80    | mA     |
| VCC_AMP1                                                                        |                                                  | I              | Full  |            |       | 105   | mA     |
| VCC_BG2                                                                         |                                                  | I              | Full  |            |       | 45    | mA     |
| VCC_MIXER                                                                       |                                                  | I              | Full  |            |       | 145   | mA     |
| VCC_BG                                                                          |                                                  | I              | Full  |            |       | 45    | mA     |
| VCC_QUAD                                                                        |                                                  | I              | Full  |            |       | 80    | mA     |
| DVDD and VCC_VVA                                                                |                                                  | I              | Full  | 1.7        | 1.8   | 1.9   | V      |
| 1.8V Supply Current                                                             | V CTRL = 1.8V, no IF, and I/Q or LO input signal | I              | 25°C  |            | 3     |       | mA     |
| DVDD                                                                            |                                                  | I              | Full  |            |       | 210   | μA     |
| VCC_VVA                                                                         |                                                  | I              | Full  |            |       | 8     | mA     |
| Total Current IF Mode Detector On Power-Up 2                                    |                                                  | I              | Full  |            | 553   | 760   | mA     |
| Total Power Consumption                                                         |                                                  | I              | 25°C  |            | 1.9   |       | W      |
| Power-Down                                                                      |                                                  | I              | 25°C  |            | 77    | 136   | mW     |

1 Refer to Table 7 for an explanation of the test levels.

2 The total current IF mode detector on power-up is equivalent to the total current drawn at the 1.8V and 3.3V supplies.

## SPECIFICATIONS

## SERIAL PORT REGISTER TIMING

## Table 2. Serial Port Register Timing

| Parameter                 | Description                                | Min      | Typ   | Max   | Unit   |
|---------------------------|--------------------------------------------|----------|-------|-------|--------|
| t SDI, SETUP              | Data to clock setup time                   | 10       |       |       | ns     |
| t SDI, HOLD               | Data to clock hold time                    | 10       |       |       | ns     |
| t SCLK, HIGH              | Clock high duration                        | 40 to 60 |       |       | %      |
| t SCLK, LOW               | Clock low duration                         | 40 to 60 |       |       | %      |
| t SCLK, SEN/SENS2_SETUP   | Clock to SEN/SEN2 setup time               | 30       |       |       | ns     |
| t SCLK, DOT               | Clock to data out transition time          |          |       | 10    | ns     |
| t SCLK, DOV               | Clock to data out valid time               |          |       | 10    | ns     |
| t SCLK, SEN/SEN2_INACTIVE | Clock to SEN/SEN2 inactive                 | 20       |       |       | ns     |
| t SEN/SEN2_INACTIVE       | Inactive SEN/SEN2 (between two operations) | 80       |       |       | ns     |

## Timing Diagram

Figure 2. Serial Port Register Timing Diagram

<!-- image -->

## SPECIFICATIONS

## BURN-IN DELTA LIMIT SPECIFICATIONS

IF and I/Q amplitude = -20dBm, VCC\_DRV = VCC2\_DRV = VCC\_AMP2 = VCC\_ENV = VCC\_AMP1 = VCC\_BG2 = VCC\_MIXER = VCC\_BG = VCC\_QUAD = 3.3V, DVDD = VCC\_VVA = 1.8V, T A = 25°C, and set Register 0x0A to 0xE700, unless otherwise noted.

Measurements in IF mode performed with a 90° hybrid; Register 0x03, Bit 7 = 1; and f IF = 3.5GHz.

Measurements in I/Q mode are measured as a composite of the I and Q channel performance; V CM  = 0V; Register 0x03, Bit 7 = 0; and Register 0x05, Bits[6:0] = 0x051, unless otherwise noted. I/Q f BB = 1.62GHz.

VCTRL1 = VCTRL2. V CTRL is the attenuation voltage at the VCTRL1 and VCTRL2 pins. V CTRL = 1800mV, unless otherwise specified. Delta calculation is based on absolute maximum changes.

## Table 3. Burn-In Delta Limit Specifications

| Parameter 1                                  | Test Conditions/ Comments                        | Delta   | Unit   |
|----------------------------------------------|--------------------------------------------------|---------|--------|
| I/Q MODULATOR PERFORMANCE                    |                                                  |         |        |
| Conversion Gain                              | At maximum gain                                  |         |        |
| At 24GHz                                     |                                                  | ±2      | dB     |
| At 28GHz                                     |                                                  | ±2      | dB     |
| At 39GHz                                     |                                                  | ±2      | dB     |
| IF SINGLE-SIDEBAND UPCONVERSION PERFORMANCE  |                                                  |         |        |
| Conversion Gain                              | At maximum gain                                  |         |        |
| At 24GHz                                     |                                                  | ±2      | dB     |
| At 28GHz                                     |                                                  | ±2      | dB     |
| At 39GHz                                     |                                                  | ±2      | dB     |
| POWER INTERFACE                              | V CTRL = 1.8V, no IF, and I/Q or LO input signal |         |        |
| Total Current IF Mode Detector On Power-Up 2 |                                                  | ±55     | mA     |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

IF and I/Q amplitude = -20dBm, VCC\_DRV = VCC2\_DRV = VCC\_AMP2 = VCC\_ENV = VCC\_AMP1 = VCC\_BG2 = VCC\_MIXER = VCC\_BG = VCC\_QUAD = 3.3V, DVDD = VCC\_VVA = 1.8V, T A = 25°C, and set Register 0x0A to 0xE700, unless otherwise noted.

Measurements in IF mode performed with a 90° hybrid; Register 0x03, Bit 7 = 1; and f IF = 3.5GHz.

Measurements in I/Q mode are measured as a composite of the I and Q channel performance; V CM ) = 0V; Register 0x03, Bit 7 = 0; and Register 0x05, Bits[6:0] = 0x051, unless otherwise noted. I/Q f BB = 1.62GHz.

VCTRL1 = VCTRL2. V CTRL is the attenuation voltage at the VCTRL1 and VCTRL2 pins. V CTRL = 1800mV, unless otherwise specified. The device is characterized and production tested to 100krads.

Table 4. Radiation Test and Limit Specification

| Parameter                                    | Test Conditions/Comments                         | Min   | Typ   | Max   | Unit   |
|----------------------------------------------|--------------------------------------------------|-------|-------|-------|--------|
| I/Q MODULATOR PERFORMANCE                    |                                                  |       |       |       |        |
| Conversion Gain                              | At maximum gain                                  |       |       |       |        |
| At 24GHz                                     |                                                  | 18    | 23    |       | dB     |
| At 28GHz                                     |                                                  | 18    | 23    |       | dB     |
| At 39GHz                                     |                                                  | 18    | 23    |       | dB     |
| Output P1dB                                  | At maximum gain                                  |       |       |       |        |
| At 24GHz                                     |                                                  | 10    | 13    |       | dBm    |
| At 28GHz                                     |                                                  | 10    | 13    |       | dBm    |
| At 39GHz                                     |                                                  | 10    | 13    |       | dBm    |
| Output IP3                                   | At maximum gain, upper sideband                  |       |       |       |        |
| At 24GHz                                     |                                                  | 20    | 23    |       | dBm    |
| At 28GHz                                     |                                                  | 20    | 23    |       | dBm    |
| At 39GHz                                     |                                                  | 20    | 23    |       | dBm    |
| IF SINGLE-SIDEBAND UPCONVERSION PERFORMANCE  |                                                  |       |       |       |        |
| Conversion Gain                              | At maximum gain                                  |       |       |       |        |
| At 24GHz                                     |                                                  | 13    | 18    |       | dB     |
| At 28GHz                                     |                                                  | 13    | 18    |       | dB     |
| At 39GHz                                     |                                                  | 13    | 18    |       | dB     |
| Output P1dB                                  | At maximum gain                                  |       |       |       |        |
| At 24GHz                                     |                                                  | 10    | 13    |       | dBm    |
| At 28GHz                                     |                                                  | 10    | 13    |       | dBm    |
| At 39GHz                                     |                                                  | 10    | 13    |       | dBm    |
| Output IP3                                   | At maximum gain, upper sideband                  |       |       |       |        |
| At 24GHz                                     |                                                  | 20    | 23    |       | dBm    |
| At 28GHz                                     |                                                  | 20    | 23    |       | dBm    |
| At 39GHz                                     |                                                  | 20    | 23    |       | dBm    |
| POWER INTERFACE                              |                                                  |       |       |       |        |
| Total Current IF Mode Detector On Power-Up 1 | V CTRL = 1.8V, no IF, and I/Q or LO input signal | 490   |       | 760   | mA     |

1 The total current IF mode detector on power-up is equivalent to the total current drawn at the 1.8V and 3.3V supplies.

## ABSOLUTE MAXIMUM RATINGS

Table 5. Absolute Maximum Ratings

| Parameter                                                                      | Rating          |
|--------------------------------------------------------------------------------|-----------------|
| Supply Voltage                                                                 |                 |
| VCC_DRV, VCC2_DRV, VCC_AMP2, VCC_ENV, VCC_AMP1, VCC_BG2, VCC_BG, and VCC_MIXER | 3.6V            |
| DVDD, VCC_VVA                                                                  | 2.0V            |
| IF Input Power                                                                 | 5dBm            |
| I/Q Input Power                                                                | 5dBm            |
| LO Input Power                                                                 | 9dBm            |
| Maximum Power Dissipation 1                                                    | 2.9W            |
| Temperature                                                                    |                 |
| Maximum Junction (T J )                                                        | 125°C           |
| Lifetime at Maximum T J 2                                                      | 1 ×10 6 hours   |
| Operating T CASE Range                                                         | -40°C to +85°C  |
| Storage Range                                                                  | -55°C to +125°C |
| Lead (Soldering 60 sec)                                                        | 260°C           |
| Moisture Sensitivity Level (MSL) Rating 2                                      | MSL3            |

1 The maximum power dissipation is a theoretical number calculated by (T J -85°C)/θ JC\_TOP

- 2 Based on IPC/JEDEC J-STD-20 MSL classifications.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

θ JA and θ JC must only be used to compare the thermal performance of the different packages if all test conditions listed are similar to JEDEC specifications. Instead, Ѱ JT and Ѱ JB can be used to calculate the junction temperature of the device by using the following equations: T J =  P × Ψ JT + T TOP (1) where:

ѰJT refers to the junction to top thermal characterization number. TTOP refers to the package top temperature (°C) and is measured at the top center of the package. T J =   P × Ψ JB + T BOARD (2) where:

P refers to the total power dissipation in the chip (W).

P refers to the total power dissipation in the chip (W).

ѰJB refers to the junction to board thermal characterization number. TBOARD refers to the board temperature measured on the midpoint of the longest side of the package, no more than 1mm from the edge of the package body (°C).

As stated in JEDEC51-12, the previous equations must be used when no heat sink or heat spreader is present. When a heat sink or heat spreader is added, estimating and calculating junction temperature can be achieved using θ JC\_TOP .

## Table 6. Thermal Resistance

| Package Type 1   |   θ JA 2 |   θ JC_TOP 3 |   θ JB 4 |   Ψ JT 5 |   Ψ JB 6 | Unit   |
|------------------|----------|--------------|----------|----------|----------|--------|
| CC-40-5          |       28 |         13.8 |     11.1 |      6.4 |     13.8 | °C/W   |

- 1 The thermal resistance values specified in Table 6 are simulated based on JEDEC specifications, unless specified otherwise, and must be used in compliance with JESD51-12.
- 2 θ JA is the junction to ambient thermal resistance in a natural convection, JEDEC environment.

3 θ JC\_TOP is the junction to case (top) JEDEC thermal resistance.

4 θ JB is the junction to board JEDEC thermal resistance.

- 5 ΨJT is the junction to top JEDEC thermal characterization parameter.
- 6 ΨJB  is the junction to board JEDEC thermal characterization parameter.

## EXPLANATION OF TEST LEVELS

Table 7. Explanation of Test Levels

| Test Level   | Description                                                                    |
|--------------|--------------------------------------------------------------------------------|
| I            | 100% production tested at minimum, room, and maximum oper- ating temperatures. |
| II           | Parameter is guaranteed by design and not production tested.                   |
| III          | Parameter is guaranteed by bench characterization and not production tested.   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials shall be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and a collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 8. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Loss                           | 0.09    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.05    | %      |

## ABSOLUTE MAXIMUM RATINGS

## RADIATION FEATURES

Table 9. Radiation Features

| Specifications                                                                 |   Value | Unit       |
|--------------------------------------------------------------------------------|---------|------------|
| Maximum Total Dose Available (Dose Rate = 50rad (Si)/sec to 300rad (Si)/sec) 1 |     100 | krads (Si) |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMV1013S-CSH

Table 10. ADMV1013S-CSH, 40-Terminal LGA

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±1500 1                   | 1C      |
| FICDM       | ±1250 1                   | C3      |
|             | ±500 2                    | C2a     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

## Table 11. Pin Function Descriptions

| Pin No.           | Mnemonic   | Description                                                                                                                                                                          |
|-------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                 | RST        | SPI Reset. Connect the RST pin to logic high for normal operation. The SPI logic is 1.8V.                                                                                            |
| 2                 | DVDD       | 1.8V SPI Digital Supply.                                                                                                                                                             |
| 3                 | SCLK       | SPI Clock Digital Input.                                                                                                                                                             |
| 4                 | SDI        | SPI Serial Data Input.                                                                                                                                                               |
| 5                 | SDO        | SPI Serial Data Output.                                                                                                                                                              |
| 6                 | BG_RBIAS2  | Voltage Gain Amplifier (VGA) Chip Bandgap Circuit, External High Precision Resistor. Place a 1.1kΩ, high precision resistor shunt to ground close to the BG_RBAIS2 pin.              |
| 7                 | VCC_DRV    | 3.3V Power Supply for the RF Driver. Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_DRV pin.                                                                             |
| 8, 10, 27, 36, 39 | GND        | Grounds.                                                                                                                                                                             |
| 9                 | RF         | RF Output. The RF pin is DC-coupled internally to GND and matched to 50Ω single ended.                                                                                               |
| 11                | VCC2_DRV   | 3.3V Power Supply for the RF Predriver. Place a 100pF, a 0.01µF, and 10µF capacitor close to this pin.                                                                               |
| 12, 13, 31        | DNC        | Do Not Connect. Do not connect to these pins.                                                                                                                                        |
| 14                | VCC_VVA    | 1.8V Power Supply for VVA Control Circuit. Place a 100 pF, 0.01 µF, and a 10 µF capacitor close to the VCC_VVA pin.                                                                  |
| 15                | VCTRL1     | RF Voltage Variable Attenuator 1 (VVA1) Control Voltage. Place a 1kΩ series resistor with the VCTRL1 pin.                                                                            |
| 16                | VCTRL2     | RF Voltage Variable Attenuator 2 (VVA2) Control Voltage. Place a 1kΩ series resistor with the VCTRL2 pin.                                                                            |
| 17                | VCC_AMP2   | 3.3V Power Supply for RF Amplifier 2 (AMP2). Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_AMP2 pin.                                                                    |
| 18                | SEN2       | SPI Serial Enable for the VGA Chip. Connect the SEN2 pin to the SEN pin (Pin 40).                                                                                                    |
| 19                | VCC_ENV    | 3.3V Power Supply for the Envelope Detector. Place a 100 pF, a 0.01µF, and a 10µF capacitor close to the VCC_ENV pin.                                                                |
| 20                | VCC_AMP1   | 3.3V Power Supply for the RF Amplifier 1 (AMP1). Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_AMP1 pin.                                                                |
| 21                | VENV_N     | Negative Differential Envelope Detector Output.                                                                                                                                      |
| 22                | VENV_P     | Positive Differential Envelope Detector Output.                                                                                                                                      |
| 23                | VCC_BG2    | 3.3V Power Supply for the VGA Chip Bandgap Circuit. Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_BG2 pin.                                                              |
| 24, 30            | IF_Q, IF_I | IF Single-Ended Complex Inputs. The IF_Q and IF_I pins are internally AC-coupled. When in IF mode, Pin 25 (Q_P), Pin 26 (Q_N), Pin 28 (I_P), and Pin 29 (I_N) must be kept floating. |
| 25, 26            | Q_N, Q_P   | Differential Baseband Q Inputs. The Q_N and Q_P pins are DC-coupled. Do not connect the Q_N and Q_P pins in IF mode.                                                                 |
| 28, 29            | I_P, I_N   | Differential Baseband I Inputs. The I_P and I_N pins are DC-coupled. Do not connect the I_P and I_N pins in IF mode.                                                                 |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 11. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                  |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 32        | VCC_MIXER  | 3.3V Power Supply for the Mixer. Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_MIXER pin.                                                                                                                                                       |
| 33        | VCC_BG     | 3.3V Power Supply for the Mixer Chip Bandgap Circuit. Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_BG pin.                                                                                                                                     |
| 34        | BG_RBIAS1  | Mixer Chip BandGap Circuit, External High Precision Resistor. Place a 1.1kΩ, high precision resistor shunt to ground close to the BG_RBIAS1 pin.                                                                                                             |
| 35        | VCC_QUAD   | 3.3V Power Supply for the Quadruppler. Place a 100pF, 0.01µF, and 10µF capacitor close to the VCC_QUAD pin.                                                                                                                                                  |
| 37, 38    | LON, LOP   | Negative and Positive Differential Local Oscillator Inputs. These pins are DC-coupled internally to ground and matched to 100Ω differential or 50Ω single ended. If using the LO as single ended, terminate the unused LO port with 50Ω impedance to ground. |
| 40        | SEN        | SPI Serial Enable for the Mixer Chip. Connect the SEN pin to the SEN2 pin (Pin 18).                                                                                                                                                                          |
| 40        | EPAD       | Exposed Pad. Solder the exposed pad to a low impedance ground plane.                                                                                                                                                                                         |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADMV1013 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing Option   | Package Type   | Package Description                 |
|--------------------------|----------------|-------------------------------------|
| CC-40-5                  | LGA            | 40-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                  | Packing Quantity   | Package Option   |
|------------------|---------------------|--------------------------------------|--------------------|------------------|
| ADMV1013ACCZ-CSH | -40°C to +85°C      | 40-Terminal LGA (6mm × 6mm × 0.67mm) | Tray, 490          | CC-40-5          |

<!-- image -->