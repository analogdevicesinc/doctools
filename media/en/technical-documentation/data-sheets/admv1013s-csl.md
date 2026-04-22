<!-- lastmod 2025-04-08 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- Wideband RF input frequency range: 24 GHz to 44 GHz
- 2 upconversion modes
- Direct conversion from baseband I/Q to RF
- Single-sideband upconversion from real IF
- LO input frequency range: 5.4 GHz to 10.25 GHz
- LO quadrupler for up to 41 GHz
- Matched 50 Ω single-ended RF output and IF inputs
- Option between matched 100 Ω balanced or 50 Ω single-ended LO inputs
- 100 Ω balanced baseband inputs
- Sideband suppression and carrier feedthrough optimization
- Variable attenuator for transceiver power control
- Programmable via 4-wire SPI
- 40-terminal land grid array package (LGA)

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Wafer diffusion lot traceability
- Radiation monitors
- Total ionizing dose (TID)
- Outgassing characterization

## APPLICATIONS

- Low and medium Earth orbit (LEO/MEO) satellites
- Avionics
- Point to point microwave radios
- Radar and electronic warfare systems

## 24 GHz to 44 GHz, Wideband, Microwave Upconverter

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADMV1013S-CSL is a wideband, microwave upconverter optimized for point-to-point microwave radio designs operating in the 24 GHz to 44 GHz RF range.

The upconverter offers two modes of frequency translation. The device is capable of direct conversion to RF from baseband in-phase quadrature (I/Q) input signals, as well as single-sideband (SSB) upconversion from complex intermediate frequency (IF) inputs. The baseband I/Q input path can be disabled and modulated complex IF signals, anywhere from 0.8 GHz to 6.0 GHz, can be inserted in the IF path and upconverted to 24 GHz to 44 GHz while suppressing the unwanted sideband by typically better than 26 dBc. The serial port interface (SPI) allows adjustment of the quadrature phase and mixer gate voltage to allow optimum sideband suppression and local oscillator (LO) nulling. In addition, the SPI allows powering down the output envelope detector to reduce power consumption.

The ADMV1013S-CSL upconverter comes in a 40-terminal land grid array package (LGA) package. The ADMV1013S-CSL operates over the -40°C to +85°C case temperature range.

Additional application and technical information can be found in the Commercial Space Products Program brochure and ADMV1013 data sheet.

## TABLE OF CONTENTS

Features................................................................ 1

Commercial Space Features................................. 1

Applications........................................................... 1

Functional Block Diagram......................................1

General Description...............................................1

Specifications........................................................ 3

Serial Port Register Timing................................ 5

Radiation Test and Limit Specifications..............5

Absolute Maximum Ratings...................................7

## REVISION HISTORY

## 4/2025-Rev. 0 to Rev. A

Changes to Radiation Test and Limit Specifications Section and Table 3....................................................... 5

12/2024-Revision 0: Initial Version

| Thermal Resistance...........................................       | 7   |
|---------------------------------------------------------------------|-----|
| Outgas Testing...................................................   | 7   |
| Radiation Features.............................................7    |     |
| Electrostatic Discharge (ESD) Ratings...............8               |     |
| ESD Caution.......................................................8 |     |
| Pin Configuration and Function Descriptions........                 | 9   |
| Typical Performance Characteristics...................              | 11  |
| Outline Dimensions.............................................     | 12  |
| Ordering Guide.................................................12   |     |

## SPECIFICATIONS

IF and I/Q amplitude = -20 dBm, VCC\_DRV = VCC2\_DRV = VCC\_AMP2 = VCC\_ENV = VCC\_AMP1 = VCC\_BG2 = VCC\_MIXER = VCC\_BG = VCC\_QUAD = 3.3 V, DVDD = VCC\_VVA = 1.8 V, T A = 25°C, and set Register 0x0A to 0xE700, unless otherwise noted.

Measurements in IF mode performed with a 90° hybrid, Register 0x03, Bit 7 = 1, IF input frequency (f IF ) = 3.5 GHz.

Measurements in I/Q mode are measured as a composite of the I and Q channel performance, common-mode voltage (V CM ) = 0 V, Register 0x03, Bit 7 = 0, and Register 0x05, Bits[6:0] = 0x051, unless otherwise noted. I/Q baseband frequency (f BB ) = 100 MHz.

VCTRL1 = VCTRL2. V CTRL is the attenuation voltage at the VCTRL1 and VCTRL2 pins. V CTRL = 1800 mV, unless otherwise specified.

Table 1. Specifications

| Parameter                                       | Test Conditions/Comments          | Min   | Typ   | Max   | Unit   |
|-------------------------------------------------|-----------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGES                                |                                   |       |       |       |        |
| RF Output                                       |                                   | 24    |       | 44    | GHz    |
| LO Input                                        |                                   | 5.4   |       | 10.25 | GHz    |
| LO Quadrupler                                   |                                   | 21.6  |       | 41    | GHz    |
| IF Input                                        |                                   | 0.8   |       | 6.0   | GHz    |
| Baseband (BB) I/Q Input                         |                                   | DC    |       | 6.0   | GHz    |
| LO AMPLITUDE RANGE                              |                                   | -6    | 0     | +6    | dBm    |
| I/Q MODULATOR PERFORMANCE                       |                                   |       |       |       |        |
| Conversion Gain                                 | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                | f BB ≤ 3.5 GHz                    | 18    | 23    |       | dB     |
|                                                 | 6 GHz > f BB > 3.5 GHz            |       | 21    |       | dB     |
| 40 GHz to 44 GHz                                |                                   |       | 19    |       | dB     |
| Voltage Variable Attenuator (VVA) Control Range |                                   |       | 35    |       | dB     |
| SSB Noise Figure                                | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   |       | 18    |       | dB     |
| 40 GHz to 44 GHz                                |                                   |       | 19    |       | dB     |
| Output Third-Order Intercept (IP3)              | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   | 20    | 23    |       | dBm    |
| 40 GHz to 44 GHz                                |                                   |       | 22    |       | dBm    |
| Output 1 dB Compression Point (P1dB)            | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   | 10    | 13    |       | dBm    |
| 40 GHz to 44 GHz                                |                                   |       | 12    |       | dBm    |
| Sideband Rejection (SBR)                        | 24 GHz to 44 GHz, at maximum gain |       |       |       |        |
| Uncalibrated                                    |                                   |       | 32    |       | dBc    |
| IF SINGLE-SIDEBAND UPCONVERSION PERFORMANCE     |                                   |       |       |       |        |
| Conversion Gain                                 | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                | f IF ≤ 3.5 GHz                    | 13    | 18    |       | dB     |
|                                                 | 6 GHz > f IF > 3.5 GHz            |       | 12    |       | dB     |
| 40 GHz to 44 GHz                                |                                   |       | 14    |       | dB     |
| VVA Control Range                               |                                   |       | 35    |       | dB     |
| SSB Noise Figure                                | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   |       | 25    |       | dB     |
| 40 GHz to 44 GHz                                |                                   |       | 28    |       | dB     |
| Output IP3                                      | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   | 20    | 23    |       | dBm    |
| 40 GHz to 44 GHz                                |                                   |       | 22    |       | dBm    |
| Output P1dB                                     | At maximum gain                   |       |       |       |        |
| 24 GHz to 40 GHz                                |                                   | 10    | 13    |       | dBm    |
| 40 GHz to 44 GHz                                |                                   |       | 12    |       | dBm    |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                       | Test Conditions/Comments                                                                                          | Min        | Typ   | Max   | Unit   |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|------------|-------|-------|--------|
| SBR                                             | 24 GHz to 44 GHz, at maximum gain                                                                                 |            |       |       |        |
| Uncalibrated                                    |                                                                                                                   |            | 26    |       | dBc    |
| Calibrated                                      | Calibrated using LOAMP_PH_ADJ_ Q_FINE and LOAMP_PH_ADJ_I_FINE bits                                                |            | 36    |       | dBc    |
| ENVELOPE DETECTOR PERFORMANCE                   |                                                                                                                   |            |       |       |        |
| Output Level                                    | For optimum performance                                                                                           |            |       |       |        |
| Minimum                                         |                                                                                                                   |            | -45   |       | dBm    |
| Maximum                                         |                                                                                                                   |            | -20   |       | dBm    |
| Envelope Bandwidth                              | Measured with two tones with total power output (P ) at RF = 10 dBm                                               |            |       |       |        |
| 3 dB                                            | OUT RF frequency (f RF ) = 28 GHz                                                                                 |            | 350   |       | MHz    |
| 10 dB                                           | f RF = 28 GHz                                                                                                     |            | 1     |       | GHz    |
| RETURN LOSS                                     |                                                                                                                   |            |       |       |        |
| RF Output                                       | 50 Ω single-ended                                                                                                 |            | -8    |       | dB     |
| LO Input                                        | 100 Ω differential                                                                                                |            | -12   |       | dB     |
| IF Input                                        | 50 Ω single-ended                                                                                                 |            | -12   |       | dB     |
| Baseband Input                                  | 100 Ω differential                                                                                                |            | -10   |       | dB     |
| Baseband I/Q Input Impedance                    |                                                                                                                   |            | 100   |       | Ω      |
| LEAKAGE                                         | At maximum gain                                                                                                   |            |       |       |        |
| Fundamental LO to RF                            |                                                                                                                   |            | -80   |       | dBm    |
| 4 × LO to RF                                    |                                                                                                                   |            |       |       |        |
| 5.4 GHz to 6.8 GHz LO                           | Uncalibrated                                                                                                      |            | -12   |       | dBm    |
| 6.8 GHz to 10.25 GHz LO                         | Uncalibrated                                                                                                      |            | -20   |       | dBm    |
| 5.4 GHz to 10.25 GHz LO                         | Calibrated using MXER_OFF_ADJ_I_N, MXER_OFF_ADJ_I_P, MXER_OFF_ADJ_Q_N, MXER_OFF_ADJ_Q_P bits at V CTRL = 1800 mV, |            | -45   |       | dBm    |
| 5 × LO to RF                                    | IF mode                                                                                                           |            | -55   |       | dBm    |
| Fundamental LO to IF                            |                                                                                                                   |            | -70   |       | dBm    |
| Fundamental LO to I/Q                           |                                                                                                                   |            | -75   |       | dBm    |
| LOGIC INPUTS                                    |                                                                                                                   |            |       |       |        |
| Input Voltage Range                             |                                                                                                                   |            |       |       |        |
| High, V INH                                     |                                                                                                                   | DVDD - 0.4 |       | 1.8   | V      |
| Low, V INL                                      |                                                                                                                   | 0          |       | 0.4   | V      |
| Input Current, I INH /I INL                     |                                                                                                                   |            | 100   |       | µA     |
| Input Capacitance, C IN                         |                                                                                                                   |            | 3     |       | pF     |
| LOGIC OUTPUTS                                   |                                                                                                                   |            |       |       |        |
| Output Voltage Range                            |                                                                                                                   |            |       |       |        |
| High, V OH                                      |                                                                                                                   | DVDD - 0.4 |       | 1.8   | V      |
| Low, V OL                                       |                                                                                                                   | 0          |       | 0.4   | V      |
| Output High Current, I OH                       |                                                                                                                   |            |       | 500   | µA     |
| POWER INTERFACE                                 |                                                                                                                   |            |       |       |        |
| VCC_DRV, VCC2_DRV, VCC_AMP2, VCC_ENV, VCC_AMP1, |                                                                                                                   | 3.15       | 3.3   | 3.45  | V      |
| VCC_BG2, VCC_MIXER, VCC_BG, and VCC_QUAD        | V CTRL = 1.8 V, no IF, and I/Q or LO input signal                                                                 |            | 550   |       | mA     |
| 3.3 V Supply Current DVDD and VCC_VVA           |                                                                                                                   | 1.7        | 1.8   | 1.9   | V      |
| 1.8 V Supply Current                            | V CTRL = 1.8 V, no IF, and I/Q or LO input signal                                                                 |            | 3     |       | mA     |
| Total Power Consumption                         |                                                                                                                   |            | 1.9   |       | W      |
| Power-Down                                      |                                                                                                                   |            | 77    | 136   | mW     |

## SPECIFICATIONS

## SERIAL PORT REGISTER TIMING

## Table 2. Serial Port Register Timing

| Parameter                  | Description                                | Min      | Typ   | Max   | Unit   |
|----------------------------|--------------------------------------------|----------|-------|-------|--------|
| t SDI, SETUP               | Data to clock setup time                   | 10       |       |       | ns     |
| t SDI, HOLD                | Data to clock hold time                    | 10       |       |       | ns     |
| t SCLK, HIGH               | Clock high duration                        | 40 to 60 |       |       | %      |
| t SCLK, LOW                | Clock low duration                         | 40 to 60 |       |       | %      |
| t SCLK, SEN/SEN2 _SETUP    | Clock to SEN/SEN2 setup time               | 30       |       |       | ns     |
| t SCLK, DOT                | Clock to data out transition time          |          |       | 10    | ns     |
| t SCLK, DOV                | Clock to data out valid time               |          |       | 10    | ns     |
| t SCLK, SEN/SEN2 _INACTIVE | Clock to SEN/SEN2 inactive                 | 20       |       |       | ns     |
| t SEN/SEN2 _INACTIVE       | Inactive SEN/SEN2 (between two operations) | 80       |       |       | ns     |

## Serial Port Register Timing Diagram

Figure 2. Serial Port Register Timing Diagram

<!-- image -->

## RADIATION TEST AND LIMIT SPECIFICATIONS

IF and I/Q amplitude = -20 dBm, VCC\_DRV = VCC2\_DRV = VCC\_AMP2 = VCC\_ENV = VCC\_AMP1 = VCC\_BG2 = VCC\_MIXER = VCC\_BG = VCC\_QUAD = 3.3 V, DVDD = VCC\_VVA = 1.8 V, T A = 25°C, and set Register 0x0A to 0xE700, unless otherwise noted.

Measurements in IF mode performed with a 90° hybrid, Register 0x03, Bit 7 = 1, f IF = 3.5 GHz.

Measurements in I/Q mode are measured as a composite of the I and Q channel performance, V CM  = 0 V, Register 0x03, Bit 7 = 0, and Register 0x05, Bits[6:0] = 0x051, unless otherwise noted. I/Q f BB = 1.62 GHz.

VCTRL1 = VCTRL2. V CTRL is the attenuation voltage at the VCTRL1 and VCTRL2 pins. V CTRL = 1800 mV, unless otherwise specified.

Table 3. Radiation Test and Limit Specifications

| Parameter                 | Test Conditions/Comments        | Min   | Typ   | Max   | Unit   |
|---------------------------|---------------------------------|-------|-------|-------|--------|
| I/Q MODULATOR PERFORMANCE |                                 |       |       |       |        |
| Conversion Gain           | At maximum gain                 |       |       |       |        |
| At 24 GHz                 |                                 | 18    | 23    |       | dB     |
| At 28 GHz                 |                                 | 18    | 23    |       | dB     |
| At 39 GHz                 |                                 | 18    | 23    |       | dB     |
| Output P1dB               | At maximum gain                 |       |       |       |        |
| At 24 GHz                 |                                 | 10    | 13    |       | dBm    |
| At 28 GHz                 |                                 | 10    | 13    |       | dBm    |
| At 39 GHz                 |                                 | 10    | 13    |       | dBm    |
| Output IP3                | At maximum gain, upper sideband |       |       |       |        |
| At 24 GHz                 |                                 | 20    | 23    |       | dBm    |
| At 28 GHz                 |                                 | 20    | 23    |       | dBm    |
| At 39 GHz                 |                                 | 20    | 23    |       | dBm    |

## SPECIFICATIONS

Table 3. Radiation Test and Limit Specifications (Continued)

| Parameter                                    | Test Conditions/Comments                          | Min   | Typ   | Max   | Unit   |
|----------------------------------------------|---------------------------------------------------|-------|-------|-------|--------|
| IF SINGLE-SIDEBAND UPCONVERSION PERFORMANCE  |                                                   |       |       |       |        |
| Conversion Gain                              | At maximum gain                                   |       |       |       |        |
| At 24 GHz                                    |                                                   | 13    | 18    |       | dB     |
| At 28 GHz                                    |                                                   | 13    | 18    |       | dB     |
| At 39 GHz                                    |                                                   | 13    | 18    |       | dB     |
| Output P1dB                                  | At maximum gain                                   |       |       |       |        |
| At 24 GHz                                    |                                                   | 10    | 13    |       | dBm    |
| At 28 GHz                                    |                                                   | 10    | 13    |       | dBm    |
| At 39 GHz                                    |                                                   | 10    | 13    |       | dBm    |
| Output IP3                                   | At maximum gain, upper sideband                   |       |       |       |        |
| At 24 GHz,                                   |                                                   | 20    | 23    |       | dBm    |
| At 28 GHz                                    |                                                   | 20    | 23    |       | dBm    |
| At 39 GHz                                    |                                                   | 20    | 23    |       | dBm    |
| POWER INTERFACE                              |                                                   |       |       |       |        |
| Total Current IF Mode Detector On Power Up 1 | V CTRL = 1.8 V, no IF, and I/Q or LO input signal |       | 553   | 760   | mA     |

1 The total current IF mode detector on power up is equivalent to the total current drawn at the 1.8 V and 3.3 V supplies.

## ABSOLUTE MAXIMUM RATINGS

## Table 4. Absolute Maximum Ratings

| Parameter                                                                                                      | Rating          |
|----------------------------------------------------------------------------------------------------------------|-----------------|
| Supply Voltage VCC_DRV, VCC2_DRV, VCC_AMP2, VCC_ENV, VCC_AMP1, VCC_BG2, VCC_BG, and VCC_MIXER DVDD and VCC_VVA | 3.6 V           |
|                                                                                                                | 2.0 V           |
| IF Input Power                                                                                                 | 5 dBm           |
| I/Q Input Power                                                                                                | 5 dBm           |
| LO Input Power                                                                                                 | 9 dBm           |
| Maximum Junction Temperature                                                                                   | 125°C           |
| Maximum Power Dissipation 1                                                                                    | 2.9W            |
| Lifetime at Maximum Junction Temperature (T J )                                                                | 1 × 10 6 hours  |
| Operating Case Temperature Range                                                                               | -40°C to +85°C  |
| Storage Temperature Range                                                                                      | -55°C to +125°C |
| Lead Temperature (Soldering 60 sec)                                                                            | 260°C           |
| Moisture Sensitivity Level (MSL) Rating 2                                                                      | MSL3            |

1 The maximum power dissipation is a theoretical number calculated by (T J -85°C)/θ JC\_TOP .

2 Based on IPC/JEDEC J-STD-20 MSL classifications.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

θ JA and θ JC must only be used to compare the thermal performance of the different packages if all test conditions listed are similar to JEDEC specifications. Instead, Ѱ JT and Ѱ JB can be used to calculate the junction temperature of the device by using the following equations: T J =  P × Ψ JT + T TOP (1) where:

<!-- formula-not-decoded -->

P refers to the total power dissipation in the chip (W).

P refers to the total power dissipation in the chip (W).

ѰJB refers to the junction to board thermal characterization number.

TBOARD refers to the board temperature measured on the midpoint of the longest side of the package, no more than 1mm from the edge of the package body (°C).

As stated in JEDEC51-12, the previous equations must be used when no heat sink or heat spreader is present. When a heat sink or heat spreader is added, estimating and calculating junction temperature can be achieved using θ JC\_TOP .

## Table 5. Thermal Resistance

| Package Type 1   |   θ JA 2 |   θ JC_TOP 3 |   θ JB 4 |   Ψ JT 5 |   Ψ JB 6 | Unit   |
|------------------|----------|--------------|----------|----------|----------|--------|
| CC-40-5          |       28 |         13.8 |     11.1 |      6.4 |     13.8 | °C/W   |

1 The thermal resistance values specified in Table 5 are simulated based on JEDEC specifications, unless specified otherwise, and must be used in compliance with JESD51-12.

2 θ JA is the junction to ambient thermal resistance in a natural convection, JEDEC environment.

3 θ JC\_TOP is the junction to case (top) JEDEC thermal resistance.

4 θ JB is the junction to board JEDEC thermal resistance.

5 ΨJT is the junction to top JEDEC thermal characterization parameter.

6 ΨJB  is the junction to board JEDEC thermal characterization parameter.

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials shall be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 6. Outgas Testing

| Specification (Tested per ASTM E595-15)   | Value   | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Loss                           | 0.09    | %      |
| Collected Volatile Condensable Material   | <0.01   | %      |
| Water Vapor Recovered                     | 0.05    | %      |

## RADIATION FEATURES

## Table 7. Radiation Features

| Specifications                                                                   |   Value | Unit      |
|----------------------------------------------------------------------------------|---------|-----------|
| Maximum Total Dose Available (Dose Rate = 50 rad (Si)/sec to 300 rad (Si)/sec) 1 |      50 | krad (Si) |

1 Guaranteed by device and process characterization. Contact Analog Devices, Inc, Technical Support for data available up to 50 krads.

## ABSOLUTE MAXIMUM RATINGS

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADMV1013S-CSL

Table 8. ADMV1013S-CSL, 40-Terminal LGA

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

Table 9. Pin Function Descriptions

| Pin No.        | Mnemonic   | Description                                                                                                                                                              |
|----------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1              | RST        | SPI Reset. Connect this pin to logic high for normal operation. The SPI logic is 1.8 V.                                                                                  |
| 2              | DVDD       | 1.8 V SPI Digital Supply.                                                                                                                                                |
| 3              | SCLK       | SPI Clock Digital Input.                                                                                                                                                 |
| 4              | SDI        | SPI Serial Data Input.                                                                                                                                                   |
| 5              | SDO        | SPI Serial Data Output.                                                                                                                                                  |
| 6              | BG_RBIAS2  | Voltage Gain Amplifier (VGA) Chip Band-Gap Circuit, External High Precision Resistor. Place a 1.1 kΩ, high precision resistor shunt to ground close to this pin.         |
| 7              | VCC_DRV    | 3.3 V Power Supply for RF Driver. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                                    |
| 8, 10, 27, 36, | GND        | Grounds.                                                                                                                                                                 |
| 9              | RF         | RF Output. This pin is DC-coupled internally to GND and matched to 50 Ω single ended.                                                                                    |
| 11             | VCC2_DRV   | 3.3 V Power Supply for RF Predriver. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                                 |
| 12, 13, 31     | DNC        | Do Not Connect. Do not connect to these pins.                                                                                                                            |
| 14             | VCC_VVA    | 1.8 V Power Supply for VVA Control Circuit. Place a 100 pF, 0.01 µF, and a 10 µF capacitor close to this pin.                                                            |
| 15             | VCTRL1     | RF Voltage Variable Attenuator 1 (VVA1) Control Voltage. Place a 1 kΩ series resistor with this pin.                                                                     |
| 16             | VCTRL2     | RF Voltage Variable Attenuator 2 (VVA2) Control Voltage. Place a 1 kΩ series resistor with this pin.                                                                     |
| 17             | VCC_AMP2   | 3.3 V Power Supply for RF Amplifier 2 (AMP2). Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                        |
| 18             | SEN2       | SPI Serial Enable for VGA Chip. Connect this pin with Pin 40 (SEN).                                                                                                      |
| 19             | VCC_ENV    | 3.3 V Power Supply for Envelope Detector. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                            |
| 20             | VCC_AMP1   | 3.3 V Power Supply for RF Amplifier 1 (AMP1). Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                        |
| 21             | VENV_N     | Negative Differential Envelope Detector Output.                                                                                                                          |
| 22             | VENV_P     | Positive Differential Envelope Detector Output.                                                                                                                          |
| 23             | VCC_BG2    | 3.3 V Power Supply for VGA Chip Band-Gap Circuit. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                    |
| 24, 30         | IF_Q, IF_I | IF Single-Ended Complex Inputs. These pins are internally AC-coupled. When in IF mode, Pin 25 (Q_N), Pin 26 (Q_P), Pin 28 (I_P), and Pin 29 (I_N) must be kept floating. |
| 25, 26         | Q_N, Q_P   | Differential Baseband Q Inputs. These pins are DC-coupled. Do not connect these pins in IF mode.                                                                         |
| 28, 29         | I_P, I_N   | Differential Baseband I Inputs. These pins are DC-coupled. Do not connect these pins in IF mode.                                                                         |
| 32             | VCC_MIXER  | 3.3 V Power Supply for Mixer. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                                        |
| 33             | VCC_BG     | 3.3 V Power Supply for Mixer Chip Band-Gap Circuit. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                  |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 9. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                     |
|-----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 34        | BG_RBIAS1  | Mixer Chip Band-Gap Circuit, External High Precision Resistor. Place a 1.1 kΩ, high precision resistor shunt to ground close to this pin.                                                                                                                       |
| 35        | VCC_QUAD   | 3.3 V Power Supply for Quadruppler. Place a 100 pF, a 0.01 µF, and a 10 µF capacitor close to this pin.                                                                                                                                                         |
| 37, 38    | LON, LOP   | Negative and Positive Differential Local Oscillator Inputs. These pins are DC-coupled internally to ground and matched to 100 Ω differential or 50 Ω single ended. If using the LO as single ended, terminate the unused LO port with 50 Ω impedance to ground. |
| 40        | SEN        | SPI Serial Enable for the Mixer Chip. Connect this pin with Pin 18 (SEN2).                                                                                                                                                                                      |
| 40        | EPAD       | Exposed Pad. Solder the exposed pad to a low impedance ground plane.                                                                                                                                                                                            |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADMV1013 data sheet for a full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                 |
|----------------------------|----------------|-------------------------------------|
| CC-40-5                    | LGA            | 40-Terminal Land Grid Array Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                     | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------------|--------------------|------------------|
| ADMV1013ACCZR7-CSL | -40°C to +85°C      | 40-Terminal LGA (6 mm × 6 mm × 0.67 mm) | Reel, 500          | CC-40-5          |

<!-- image -->