<!-- lastmod 2025-04-25 -->
<!-- image -->

## FEATURES

- Wideband RF output frequency range: 5.9GHz to 23.6GHz
- Two upconversion modes
- Direct conversion from baseband I/Q to RF
- Single sideband upconversion from real IF
- LO input frequency range: 5.4GHz to 14GHz
- LO doubler (×2 LO) for up to 28GHz
- Matched 100Ω balanced RF output, LO input, and IF input
- High impedance baseband inputs
- Sideband suppression and carrier feedthrough optimization
- Variable attenuator and power detector for transmit power control
- Programmable via 4-wire SPI
- 32-lead, 5mm × 5mm LFCSP

## COMMERCIAL SPACE FEATURES

- Support aerospace applications
- Certificate of Conformance
- Wafer diffusion lot traceability
- Qualification based on flows per NASA PEM-INST-001 and SAE AS6294
- Burn-in, life test, and deltas analysis
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Outgassing characterization

## APPLICATIONS

- Low and medium Earth orbit (LEO/MEO) satellites
- Geosynchronous Earth orbit (GEO) satellites
- Avionics
- Point to point microwave radios
- Radar, electronic warfare systems

## ADRF6780S-CSH

## 5.9GHz to 23.6GHz, Wideband, Microwave Upconverter

## GENERAL DESCRIPTION

The ADRF6780S-CSH is a silicon germanium (SiGe) design, wideband, microwave upconverter optimized for point to point microwave radio designs operating in the 5.9GHz to 23.6GHz frequency range.

The upconverter offers two modes of frequency translation. The device is capable of direct conversion to RF from baseband I/Q input signals, as well as single sideband (SSB) upconversion from a real intermediate frequency (IF) input carrier frequency. The baseband inputs are high impedance and are generally terminated off chip with 100Ω differential back terminations. The baseband I/Q input path can be disabled and a modulated real IF signal anywhere from 0.8GHz to 3.5GHz can fed into the IF input path and upconverted to 5.9GHz to 23.6GHz while suppressing the unwanted sideband by typically better than 25dBc. The serial port interface (SPI) allows tweaking of the quadrature phase adjustment to allow optimum sideband suppression. In addition, the SPI allows powering down the output power detector to reduce power consumption when power monitoring is not necessary.

The ADRF6780S-CSH upconverter comes in a compact, thermally enhanced, 5mm × 5mm LFCSP. The ADRF6780S-CSH operates over the -40°C to +85°C temperature range.

Additional application and technical information can be found in the Commercial Space Products Program brochure and ADRF6780 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 General Description...............................................1 Functional Block Diagram......................................3 Specification.......................................................... 4 Burn-In Delta Limit Specifications...................... 8 Radiation Test and Limit Specifications..............8 Absolute Maximum Ratings.................................10   | Explanation of Test Levels................................10 Outgas Testing................................................. 10 Radiation Features...........................................10 Electrostatic Discharge (ESD) Ratings.............10 ESD Caution.....................................................10 Pin Configuration and Function Descriptions.......11 Typical Performance Characteristics...................13 Outline Dimensions............................................. 14   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Thermal Resistance......................................... 10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ordering Guide.................................................14                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4/2025-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Change to 1.8V Supply Current Parameter, Table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 3........................................................................................8                                                                                                                                                                                                                                                                                                                                                                                                                 |

2/2025-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## SPECIFICATION

VPBB = VPBI = VPLO = 3.3V, VP18 = 1.8V, VPDT = VPRF = 5V, LO = 0dBm differential drive; baseband I/Q amplitude = -15dBm differential sine waves in quadrature with a 500mV DC bias, baseband input termination with 100Ω externally, IF amplitude = -12dBm differential sine waves. Minimum and maximum specifications represent performance at -40°C ≤ T A ≤ +85°C, unless otherwise noted. Typical specifications represent performance at T A = 25°C.

Table 1. Specification

| Parameter                                            | Test Conditions/Comments                                                                                                                  | Test Level 1   | Temperature (T A )   | Min   | Typ     | Max   | Unit    |
|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------------|-------|---------|-------|---------|
| RF OUTPUT FREQUENCY RANGE                            |                                                                                                                                           |                |                      | 5.9   |         | 23.6  | GHz     |
| LOCAL OSCILLATOR (LO) INPUT FREQUENCY RANGE          |                                                                                                                                           |                |                      | 5.4   |         | 14    | GHz     |
| LO AMPLITUDE RANGE                                   |                                                                                                                                           |                |                      | -6    | 0       | +6    | dBm     |
| IF INPUT FREQUENCY RANGE                             |                                                                                                                                           |                |                      | 0.8   |         | 3.5   | GHz     |
| BASEBAND (BB) I/Q INPUT FREQUENCY RANGE              |                                                                                                                                           |                |                      | DC    |         | 750   | MHz     |
| I/Q MODULATOR PERFORMANCE                            |                                                                                                                                           |                |                      |       |         |       |         |
| Modulator Voltage Gain                               | Maximum gain at maximum gain setting                                                                                                      | I              | Full                 | 10    | 13      |       | dB      |
|                                                      | Minimum gain at minimum gain setting                                                                                                      | III            | 25°C                 |       | -12     |       | dB      |
| Output Noise Density                                 | Output carrier > -5dBm                                                                                                                    | II             | 25°C                 |       | -147    |       | dBc/Hz  |
|                                                      | Output carrier > -14dBm                                                                                                                   | II             | 25°C                 |       | -145    |       | dBc/Hz  |
|                                                      | Output carrier > -22.5dBm                                                                                                                 | II             | 25°C                 |       | -136    |       | dBc/Hz  |
| Output Third-Order Intercept (OIP3)                  | f 1 BB = 10MHz, f 2 BB = 12MHz, baseband I/Q amplitude per tone = -15dBm sine waves in quadrature with a 500mV DC bias, 10dB gain setting |                |                      |       |         |       |         |
| 5.9GHz to 10GHz                                      |                                                                                                                                           | I              | 25°C                 |       | 24      |       | dBm     |
|                                                      |                                                                                                                                           | I              | Full                 | 14    | 24      |       | dBm     |
| 10GHz to 14GHz                                       |                                                                                                                                           | I              | 25°C                 |       | 25      |       | dBm     |
|                                                      |                                                                                                                                           | I              | Full                 | 14    | 25      |       | dBm     |
| 14GHz to 20GHz                                       |                                                                                                                                           | I              | 25°C                 |       | 27      |       | dBm     |
|                                                      |                                                                                                                                           | I              | Full                 | 14    | 27      |       | dBm     |
| 20GHz to 23.6GHz                                     |                                                                                                                                           | I              | 25°C                 |       | 27      |       | dBm     |
|                                                      |                                                                                                                                           | I              | Full                 | 10    | 27      |       | dBm     |
| Fifth-Order Intermodulation Distortion (IMD5)        | f 1 BB = 10MHz, f 2 BB = 12MHz, baseband I/Q amplitude per tone = -15dBm sine waves in quadrature with a 500mV DC bias, 10dB gain setting | II             | 25°C                 |       | 65      |       | dBc     |
| Output Second-Order Intercept (OIP2)                 | f 1 BB = 10MHz, f 2 BB = 12MHz, baseband I/Q amplitude per tone = -15dBm sine waves in quadrature with a 500mV DC bias, 10dB gain setting |                |                      |       |         |       |         |
| 5.9GHz to 10GHz                                      |                                                                                                                                           | II             | 25°C                 |       | 65      |       | dBm     |
| 10GHz to 14GHz                                       |                                                                                                                                           | II             | 25°C                 |       | 65      |       | dBm     |
| 14GHz to 20GHz                                       |                                                                                                                                           | II             | 25°C                 |       | 66      |       | dBm     |
| 20GHz to 23.6GHz                                     |                                                                                                                                           | II             | 25°C                 |       | 50      |       | dBm     |
| Output 1 dB Compression Point (P1dB) 5.9GHz to 10GHz | At 10dB gain setting At maximum gain setting                                                                                              | III I          | 25°C Full            | 8     | 10.5 11 |       | dBm dBm |
| 10GHz to 14GHz                                       | At 10dB gain setting                                                                                                                      | III            | 25°C                 |       | 11      |       | dBm     |
|                                                      | At maximum gain setting                                                                                                                   | I              | Full                 | 8     | 12      |       | dBm     |
| 14GHz to 20GHz                                       | At 10dB gain setting                                                                                                                      | III            | 25°C                 |       | 10      |       | dBm     |
|                                                      | At maximum gain setting                                                                                                                   | I              | Full                 | 8     | 12      |       | dBm     |
| 20GHz to 23.6GHz                                     | At 10dB gain setting                                                                                                                      | III            | 25°C                 |       | 10      |       | dBm     |
|                                                      | At maximum gain setting                                                                                                                   | I              | Full                 | 5.5   | 11      |       | dBm     |

## SPECIFICATION

Table 1. Specification (Continued)

| Parameter                     | Test Conditions/Comments                                                                                                | Test Level   | Temperature (T A )   | Min   | Typ   | Max   | Unit   |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------|--------------|----------------------|-------|-------|-------|--------|
| LO Feedthrough                | At 10dB gain setting (can be improved baseband DC offset adjustment)                                                    | III          | 25°C                 |       | -25   |       | dBm    |
| Sideband Suppression          | At 10dB gain setting                                                                                                    | III          | 25°C                 |       | 25    |       | dBc    |
| IF UPCONVERTER PERFORMANCE    |                                                                                                                         |              |                      |       |       |       |        |
| Upconversion Voltage Gain     | Maximum gain at maximum gain setting                                                                                    | I            | Full                 | 7     | 11    |       | dB     |
|                               | Minimum gain at minimum gain setting                                                                                    | III          | 25°C                 |       | -14   |       | dB     |
| Output Noise Density          | Output carrier > -5dBm                                                                                                  | II           | 25°C                 |       | -147  |       | dBc/Hz |
|                               | Output carrier > -14dBm                                                                                                 | II           | 25°C                 |       | -145  |       | dBc/Hz |
|                               | Output carrier > -22.5dBm f 1 IF = 1810MHz, f 2 IF = 1812MHz,                                                           | II           | 25°C                 |       | -136  |       | dBc/Hz |
| OIP3 5.9GHz to 10GHz          | amplitude per tone = -15dBm sine waves in quadrature with AC bias, 7dB gain setting                                     | I            | 25°C                 |       | 27    |       | dBm    |
|                               |                                                                                                                         | I            | Full                 | 18    | 27    |       | dBm    |
| 10GHz to 14GHz                |                                                                                                                         |              |                      |       |       |       | dBm    |
|                               |                                                                                                                         | I            | 25°C                 |       | 24    |       |        |
|                               |                                                                                                                         | I            | Full                 | 18    | 24    |       | dBm    |
| 14GHz to 20GHz                |                                                                                                                         | I            | 25°C                 |       | 22.5  |       | dBm    |
|                               |                                                                                                                         | I            | Full                 | 18    | 22.5  |       | dBm    |
| 20GHz to 23.6GHz              |                                                                                                                         | I            | 25°C                 |       | 22.5  |       | dBm    |
|                               |                                                                                                                         |              | Full                 | 13    | 22.5  |       | dBm    |
| IMD5                          | f 1 IF = 1810MHz, f 2 IF = 1812MHz, amplitude per tone = -15dBm sine waves in quadrature with AC bias, 7dB gain setting | II           | 25°C                 |       | 80    |       | dBc    |
| Output P1dB                   |                                                                                                                         |              |                      |       |       |       |        |
| 5.9GHz to 10GHz               | At 7dB gain setting                                                                                                     | III          | 25°C                 |       | 10.5  |       | dBm    |
|                               | At maximum gain setting                                                                                                 | I            | Full                 | 8     | 11.5  |       | dBm    |
| 10GHz to 14GHz                | At 7dB gain setting                                                                                                     | III          | 25°C                 |       | 10    |       | dBm    |
|                               | At maximum gain setting                                                                                                 | I            | Full                 | 8     | 12    |       | dBm    |
| 14GHz to 20GHz                | At 7dB gain setting                                                                                                     | III          | 25°C                 |       | 9.5   |       | dBm    |
|                               | At maximum gain setting                                                                                                 | I            | Full                 | 8     | 12    |       | dBm    |
| 20GHz to                      | At 7dB gain setting                                                                                                     | III          | 25°C                 |       | 9.5   |       | dBm    |
| 23.6GHz                       | At maximum gain setting                                                                                                 | I            | Full                 | 6     | 11.5  |       | dBm    |
| LO Feedthrough                | At 7dB gain setting (can be improved by baseband DC offset adjustment)                                                  | III          | 25°C                 |       | -35   |       | dBm    |
| Sideband Suppression          | At 7dB gain setting                                                                                                     | III          | 25°C                 |       | 25    |       | dBc    |
| Tx POWER DETECTOR PERFORMANCE |                                                                                                                         |              |                      |       |       |       |        |
| Output Level                  |                                                                                                                         | II           | 25°C                 |       |       |       |        |
| Maximum                       |                                                                                                                         |              |                      |       | 2     |       | dBm    |
| Minimum                       |                                                                                                                         |              |                      |       | -30   |       | dBm    |
| ±1dB Dynamic Range            |                                                                                                                         | II           | 25°C                 |       | 34    |       | dB     |
| Output Voltage                |                                                                                                                         | II           | 25°C                 |       |       |       |        |
| Maximum Minimum               |                                                                                                                         |              |                      |       | 1 0.2 |       | V V    |
| Log Slope                     |                                                                                                                         | II           | 25°C                 |       | 25    |       | mV/dB  |

## SPECIFICATION

Table 1. Specification (Continued)

| Parameter                                                                                                                                                                                                                                                                             | Test Conditions/Comments                                                                 | Test Level 1                  | Temperature (T A )   | Min                  | Max                            | Unit                   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|-------------------------------|----------------------|----------------------|--------------------------------|------------------------|
| Time                                                                                                                                                                                                                                                                                  |                                                                                          | II                            | 25°C                 |                      |                                |                        |
| Rise                                                                                                                                                                                                                                                                                  | Input power (P IN ) = off to -10dBm, 10%                                                 |                               |                      |                      |                                | ns                     |
| Fall                                                                                                                                                                                                                                                                                  | to 90%, C7 = 10pF (see ADRF6780 for more details) P IN = -10dBm to off, 10% to 90%, C7 = |                               |                      |                      |                                | ns                     |
| Response                                                                                                                                                                                                                                                                              | 10pF (see ADRF6780 for more details) C7 = 10pF (see ADRF6780 for more details)           |                               |                      |                      |                                | ns                     |
| RETURN LOSS                                                                                                                                                                                                                                                                           |                                                                                          | II                            | 25°C                 |                      |                                |                        |
| RF Output                                                                                                                                                                                                                                                                             | 100Ω differential                                                                        |                               |                      |                      |                                | dB                     |
| VPBI                                                                                                                                                                                                                                                                                  |                                                                                          |                               |                      |                      |                                |                        |
| LO Input IF Input Baseband I/Q Input Impedance                                                                                                                                                                                                                                        | 100Ω differential 100Ω differential                                                      |                               |                      |                      | 20                             | dB dB MΩ               |
| LOGIC INPUTS Input High Voltage Range, V INH Input Low Voltage Range, V INL Input Current, I INH /I INL Input Capacitance, C IN LOGIC OUTPUTS Output High Voltage Range, V Output Low Voltage Range, V Output High Current, I OH POWER INTERFACE VPBB, VPLO, VPBI Supply Current VPBI | ×1 LO path enabled, IF path disabled                                                     | II II I                       | 25°C 25°C            | 0 VP18 0.4 0 270 190 | 1.8 0.4 18. 0.4 500 3.45 20 25 | V V µA pF V V µA mA mA |
| VPBB                                                                                                                                                                                                                                                                                  | ×2 LO path enabled, IF path disabled                                                     |                               |                      | VP18 - 0.4           | 30 345 370                     | V mA                   |
| VPBI                                                                                                                                                                                                                                                                                  | ×1 LO path enabled, IF path enabled                                                      |                               | 3.15 10 10           | 10 10 250 170        | 543                            | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               | 25°C Full 25°C Full  |                      | 23 25                          | mA mA mA               |
| VPBB VPLO                                                                                                                                                                                                                                                                             |                                                                                          |                               | 25°C Full            |                      | 390                            | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          | I                             | 25°C Full            |                      | 423                            | mA mA                  |
| Total (VPBI, VPBB, VPLO)                                                                                                                                                                                                                                                              |                                                                                          |                               | 25°C                 | 10 10                | 23 30 410                      | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          | Full 25°C Full 25°C Full 25°C |                      | 10 10 275 230        |                                |                        |
| VPLO                                                                                                                                                                                                                                                                                  |                                                                                          |                               | 25°C Full            | 295 250              |                                | mA                     |
| VPBB                                                                                                                                                                                                                                                                                  |                                                                                          |                               | 25°C                 | 10                   | 23                             | mA                     |
| Total (VPBI, VPBB,                                                                                                                                                                                                                                                                    |                                                                                          |                               |                      |                      | 190                            | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      | 10 125               | 250                            |                        |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      | 100                  |                                | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               | Full                 |                      |                                |                        |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      |                      | 490 455                        | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      |                      |                                | mA mA                  |
|                                                                                                                                                                                                                                                                                       |                                                                                          | I                             | Full                 |                      |                                |                        |
| VPLO)                                                                                                                                                                                                                                                                                 |                                                                                          |                               |                      |                      |                                | mA                     |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      |                      | 20                             |                        |
|                                                                                                                                                                                                                                                                                       |                                                                                          |                               |                      |                      |                                | mA                     |

## SPECIFICATION

Table 1. Specification (Continued)

| Parameter                | Test Conditions/Comments                | Test Level 1   | Temperature (T A )   | Min   | Typ   | Max   | Unit   |
|--------------------------|-----------------------------------------|----------------|----------------------|-------|-------|-------|--------|
| VPLO                     |                                         |                | 25°C                 | 250   |       | 345   | mA     |
|                          |                                         |                | Full                 | 170   |       | 370   | mA     |
| Total (VPBI, VPBB, VPLO) |                                         |                | 25°C                 | 385   |       | 555   | mA     |
|                          | ×2 LO path enabled, IF path enabled     | I              | Full                 | 280   |       | 643   |        |
| VPBI                     |                                         |                | 25°C                 | 10    |       | 20    | mA     |
|                          |                                         |                | Full                 | 10    |       | 23    | mA     |
| VPBB                     |                                         |                | 25°C                 | 125   |       | 190   | mA     |
|                          |                                         |                | Full                 | 100   |       | 250   | mA     |
| VPLO                     |                                         |                | 25°C                 | 275   |       | 410   | mA     |
|                          |                                         |                | Full                 | 230   |       | 490   | mA     |
| Total (VPBI, VPBB, VPLO) |                                         |                | 25°C                 | 410   |       | 620   | mA     |
|                          |                                         |                | Full                 | 340   |       | 763   |        |
| VP18                     |                                         |                |                      | 1.7   | 1.8   | 1.9   | V      |
| Supply Current           |                                         | I              | Full                 | 0.2   |       | 1.2   | mA     |
| VPDT, VPRF               |                                         |                |                      | 4.75  | 5     | 5.25  | V      |
| Supply Current           | ×1/×2 LO path enabled, IF path disabled | I              |                      |       |       |       |        |
| VPDT                     |                                         |                | 25°C                 | 0.3   |       | 1.5   | mA     |
|                          |                                         |                | Full                 | 0.2   |       | 1.7   | mA     |
| VPRF                     |                                         |                | Full                 | 120   |       | 192   | mA     |
| Total (VPDT, VPRF)       |                                         |                | 25°C                 | 120.3 |       | 193.5 | mA     |
|                          | ×1/×2 LO path enabled, IF path          | I              | Full                 | 120.3 |       | 193.7 |        |
| VPDT                     |                                         |                | 25°C                 | 0.3   |       | 1.5   | mA     |
|                          |                                         |                | Full                 | 0.3   |       | 1.7   | mA     |
| VPRF                     |                                         |                | Full                 | 130   |       | 180   | mA     |
| Total (VPDT, VPRF)       |                                         |                | 25°C                 | 130.3 |       | 181.5 | mA     |
|                          |                                         |                | Full                 | 130.3 |       | 181.7 | mA     |
| Total Power Consumption  | ×2 LO path enabled, IF path enabled     | I              | Full                 |       | 2.58  |       | W      |
|                          | Power down                              | I              | 25°C                 |       | 35    | 50    | mW     |

1 Refer to Table 6 for an explanation of the test levels.

## SPECIFICATION

## BURN-IN DELTA LIMIT SPECIFICATIONS

VPBB = VPBI = VPLO = 3.3V, VP18 = 1.8V, VPDT = VPRF = 5V; baseband I/Q amplitude = -15dBm differential sine waves in quadrature with a 500mV DC bias, baseband input termination with 100Ω externally, IF amplitude = -12dBm differential sine waves. Delta limits apply at room temperature (T A = 25°C) for post 240 hour burn-in test. Delta calculation is based on absolute maximum changes.

Table 2. Burn-In Delta Limit Specifications

| Parameter 1    | Test Conditions/Comments 2                                                                            | Delta   | Unit   |
|----------------|-------------------------------------------------------------------------------------------------------|---------|--------|
| VOLTAGE GAIN   |                                                                                                       |         |        |
| Modulator      | RF frequency = 20001MHz, baseband frequency = 1MHz, LO ×2, detector off, LO = 0dBm single-ended drive | ±1.5    | dB     |
| Upconversion   | RF frequency = 20000MHz, IF frequency = 3500MHz, LO ×2, detector on, LO = -4dBm single-ended drive    | ±1.5    | dB     |
| SUPPLY CURRENT | ×1 LO path enabled, IF path disabled                                                                  |         |        |
| VPBB           |                                                                                                       | ±2      | mA     |
| VPLO           |                                                                                                       | ±7      | mA     |
| VPBI           |                                                                                                       | ±2      | mA     |
| VPDT           |                                                                                                       | ±0.25   | mA     |
| VPRF           |                                                                                                       | ±7      | mA     |

1 Devices are serialized during testing.

2 Maximum gain at maximum gain setting.

## RADIATION TEST AND LIMIT SPECIFICATIONS

VPBB = VPBI = VPLO = 3.3V, VP18 = 1.8V, VPDT = VPRF = 5V, T A = 25°C, LO = 0dBm differential drive; baseband I/Q amplitude = -15dBm differential sine waves in quadrature with a 500mV DC bias, baseband input termination with 100Ω externally, IF amplitude = -12dBm differential sine waves, unless otherwise noted. The device is characterized and production tested to 100krads.

Table 3. Radiation Test and Limit Specification

| Parameter                  | Test Conditions/comments 1   | Min   | Typ   | Max   | Unit   |
|----------------------------|------------------------------|-------|-------|-------|--------|
| I/Q MODULATOR PERFORMANCE  |                              |       |       |       |        |
| Modulator Voltage Gain     |                              |       |       |       |        |
| At 6701MHz 2               |                              | 10    | 13    |       | dB     |
| At 10001MHz 2              |                              | 10    | 13    |       | dB     |
| At 20001MHz 3              |                              | 7     | 13    |       | dB     |
| At 235001MHz 3             |                              | 7     | 13    |       | dB     |
| OIP3                       |                              |       |       |       |        |
| At 6002MHz 2               |                              | 14    | 24    |       | dBm    |
| IF UPCONVERTER PERFORMANCE |                              |       |       |       |        |
| Upconversion Voltage Gain  |                              |       |       |       |        |
| At 6000MHz 4               |                              | 7     | 11    |       | dB     |
| At 11750MHz 4              |                              | 7     | 11    |       | dB     |
| At 20000MHz 5              |                              | 7     | 11    |       | dB     |
| Output P1dB                |                              |       |       |       |        |
| At 6000MHz 4               |                              | 8     | 11.5  |       | dBm    |
| At 11750MHz 4              |                              | 8     | 12    |       | dBm    |
| At 20000MHz 5              |                              | 8     | 12    |       | dBm    |
| At 23500MHz 5              |                              | 6     | 11.5  |       | dBm    |

## SPECIFICATION

Table 3. Radiation Test and Limit Specification (Continued)

| Parameter                    | Test Conditions/comments 1                            | Min   | Typ   | Max   | Unit   |
|------------------------------|-------------------------------------------------------|-------|-------|-------|--------|
| POWER INTERFACE              |                                                       |       |       |       |        |
| 3.3V Supply Current VPBI     | ×1 LO path enabled, IF path disabled, detector off    | 10    |       | 20    | mA     |
| VPBB                         |                                                       | 10    |       | 25    | mA     |
| VPLO                         |                                                       | 250   |       | 345   | mA     |
| Total (VPBI, VPBB, and VPLO) |                                                       | 270   |       | 390   | mA     |
|                              | ×2 LO path enabled, IF path disabled, detector off    |       |       |       |        |
| VPBI                         |                                                       | 10    |       | 20    | mA     |
| VPBB                         |                                                       | 10    |       | 25    | mA     |
| VPLO                         |                                                       | 275   |       | 410   | mA     |
| Total (VPBI, VPBB, and VPLO) |                                                       | 295   |       | 445   | mA     |
|                              | ×1 LO path enabled, IF path enabled, detector off     |       |       |       |        |
| VPBI                         |                                                       | 10    |       | 20    | mA     |
| VPBB                         |                                                       | 125   |       | 190   | mA     |
| VPLO                         |                                                       | 250   |       | 345   | mA     |
| Total (VPBI, VPBB, and VPLO) |                                                       | 385   |       | 555   | mA     |
|                              | ×2 LO path enabled, IF path enabled, detector off     |       |       |       |        |
| VPBI                         |                                                       | 10    |       | 20    | mA     |
| VPBB                         |                                                       | 125   |       | 190   | mA     |
| VPLO                         |                                                       | 275   |       | 410   | mA     |
| Total (VPBI, VPBB, and VPLO) |                                                       | 410   |       | 620   | mA     |
| 1.8V Supply Current          |                                                       | 0.2   |       | 2     | mA     |
| 5V Supply Current            | ×1/×2 LO path enabled, IF path disabled, detector off |       |       |       |        |
| VPDT                         |                                                       | 0.3   |       | 1.5   | mA     |
| VPRF                         |                                                       | 120.0 |       | 192   | mA     |
| Total (VPDT and VPRF)        |                                                       | 120.3 |       | 193.5 | mA     |
|                              | ×1/×2 LO path enabled, IF path enabled, detector off  |       |       |       |        |
| VPDT                         |                                                       | 0.3   |       | 1.5   | mA     |
| VPRF                         |                                                       | 130   |       | 180   | mA     |
| Total (VPDT and VPRF)        |                                                       | 130.3 |       | 181.5 | mA     |

## ABSOLUTE MAXIMUM RATINGS

## Table 4. Absolute Maximum Ratings

| Parameter                     | Rating          |
|-------------------------------|-----------------|
| Supply Voltage                |                 |
| VPDT and VPRF                 | 6.5V            |
| VPBB, VPLO, and VPBI          | 4.3V            |
| VP18                          | 2.0V            |
| Temperature                   |                 |
| Maximum Junction              | 125°C           |
| Operating Range               | -40°C to +85°C  |
| Storage Range                 | -55°C to +125°C |
| Lead Range (Soldering 60 sec) | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

θ JA is thermal resistance, junction to ambient (°C/W), and θ JC, TOP and θ JC, BOT are the top and bottom thermal resistance, junction to case (°C/W).

## Table 5. Thermal Resistance

| Package Type 1   |   θ JA |   θ JC, TOP |   θ JC, BOT | Unit   |
|------------------|--------|-------------|-------------|--------|
| CP-32-20         |   32.5 |          23 |         1.7 | °C/W   |

## EXPLANATION OF TEST LEVELS

## Table 6. Explanation of Test Levels

| Test Level   | Description                                                                    |
|--------------|--------------------------------------------------------------------------------|
| I            | 100% production tested at minimum, room, and maximum oper- ating temperatures. |
| II           | Parameter is guaranteed by design and not production tested.                   |
| III          | Parameter is guaranteed by bench characterization and not production tested.   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 7. Outgas Testing

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Loss                           |    0.03 | %      |
| Collected Volatile Condensable Material   |    0.01 | %      |
| Water Vapor Recovered                     |    0.03 | %      |

## RADIATION FEATURES

## Table 8. Radiation Features

| Specifications                                                                 |   Value | Unit      |
|--------------------------------------------------------------------------------|---------|-----------|
| Maximum Total Dose Available (Dose Rate = 50rad (Si)/sec to 300rad (Si)/sec) 1 |     100 | krad (Si) |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADRF6780S-CSH

Table 9. ADRF6780S-CSH, 32-Lead LFCSP

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

Table 10. Pin Function Descriptions

| Pin No.         | Mnemonic               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1               | VDET                   | RF Detector Output. The voltage output is proportional to the decibel RF output power. The detector slope is nominally 50mV/dB.                                                                                                                                                                                                                                                                                                                           |
| 2               | VPDT                   | Power Supply Connection for the RF Detector. Decouple the VPDT pin with 100pF and 0.1µF capacitors as close as possible to this pin. Note that this pin must always be supplied with 5V.                                                                                                                                                                                                                                                                  |
| 3, 9            | VPRF                   | Power Supply Connections for the RF Path. Decouple the VPRF pin with 100pF and 0.1µF capacitors as close as possible to these pins.                                                                                                                                                                                                                                                                                                                       |
| 4, 6, 8, 19, 29 | AGND                   | Analog Grounds. Connect these pins to a low impedance ground plane.                                                                                                                                                                                                                                                                                                                                                                                       |
| 5, 7            | RFOP, RFON             | RF Outputs. These outputs are 100Ω differential outputs for the RF path. The frequency range is 5.9GHz to 23.6GHz.                                                                                                                                                                                                                                                                                                                                        |
| 10              | VATT                   | Modulator Output Attenuator Control Input. The RF voltage variable attenuator is controlled by applying a 0V to 2.6V control voltage to the VATT pin. Increase the gain when the VATT voltage increases. This pin is linear in dB over the central gain range.                                                                                                                                                                                            |
| 11 to 14        | BBQN, BBQP, BBIP, BBIN | I Channel and Q Channel Baseband Inputs. These inputs are high input impedance and are typically differentially terminated to a 100Ω resistor using an off chip termination. The nominal common-mode bias level on these pins must be 0.5V.                                                                                                                                                                                                               |
| 15              | VPBB                   | Power Supply Connection for Baseband Path. Decouple the VPBB pin with 100pF and 0.1µF capacitors as close as possible to this pin.                                                                                                                                                                                                                                                                                                                        |
| 16              | PWDN                   | Power Down. The ADRF6780S-CSH powers up when the PWDN pin is at a low logic level (<0.5V). To power down the ADRF6780S- CSH, apply a logic high level (>1.2V). When the ADRF6780S-CSH is powered up, the SPI can also be used as a power-down capability. The PWDN pin has an internal 18kΩ pull-down resistor.                                                                                                                                           |
| 17              | RST                    | Reset. The RST pin provides the ability to reset the SPI to the default register settings. Pull the RST pin to a logic high level in normal operation. Driving the RST pin to a logic low level loads the default SPI register settings. The RST pin has an internal 7.75kΩ pull-up resistor.                                                                                                                                                             |
| 18, 20          | IFIN, IFIP             | IF Inputs. These inputs are 100Ω differential inputs for IF upconversion, and they must be AC-coupled. When the IF mode is set, remove the 0Ω R10 to R13 resistors from the I/Q lines.                                                                                                                                                                                                                                                                    |
| 21              | VPBI                   | Power Supply Connection. Decouple the VPBI pin with 100pF and 0.1µF capacitors as close as possible to this pin.                                                                                                                                                                                                                                                                                                                                          |
| 22              | VP18                   | 1.8V Power Supply. Decouple the VP18 pin with 100pF and 0.1µF capacitors as close as possible to this pin.                                                                                                                                                                                                                                                                                                                                                |
| 23              | SDIN                   | Serial Data Input. Serial data applied to the SDIN pin is loaded into the SPI register upon a successful write command as indicated in the timing diagrams (see the ADRF6780 data sheet for more details). The first most significant bit (MSB) is the control bit, and it determines whether the data is written to the register (logic low) or read from the serial data output pin (logic high). The SDIN pin has an internal 18kΩ pull-down resistor. |
| 24              | SCLK                   | Serial Clock. This pin is the clock input for the SPI. The SCLK pin has an internal 18kΩ pull-down resistor.                                                                                                                                                                                                                                                                                                                                              |
| 25              | SDTO                   | Serial Data Output. The SDTO pin provides a SPI readback capability. See the timing diagrams for normal operation (see the ADRF6780 data sheet for more details). The SDTO pin has an internal 18kΩ pull-down resistor.                                                                                                                                                                                                                                   |
| 26              | SEN                    | Serial Enable. When the SEN input pin goes high, the data stored in the shift registers is loaded into the register. This pin has an internal 7.75kΩ pull-up resistor.                                                                                                                                                                                                                                                                                    |
| 27, 31          | VPLO                   | Power Supply Connections for the LO Path. Decouple the VPLO pins with 100pF and 0.1µF capacitors as close as possible to these pins.                                                                                                                                                                                                                                                                                                                      |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 10. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 28, 30    | LOIN, LOIP | LO Inputs. These inputs are 100Ω differential inputs for the LO path. The LO input frequency range is 5.4GHz to 14GHz. The on-chip LO frequency doubler can be enabled via an SPI command. |
| 32        | ALM        | Alarm. The ALM pin indicates the internal alarm conditions. The ALM pin is logic low when an alarm condition is detected.                                                                  |
|           | EP         | Exposed Pad. Solder the exposed pad to a low impedance ground plane.                                                                                                                       |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the ADRF6780 data sheet for a full set of Typical Performance Characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                   |
|----------------------------|----------------|---------------------------------------|
| CP-32-20                   | LFCSP          | 32-Lead Lead Frame Chip Scale Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description                | Package Quantity   | Package Option   |
|-------------------|---------------------|------------------------------------|--------------------|------------------|
| ADRF6780ACPZN-CSH | -40°C to +85°C      | 32-Lead LFCSP (5mm × 5mm × 0.75mm) | Tray, 490          | CP-32-20         |

<!-- image -->