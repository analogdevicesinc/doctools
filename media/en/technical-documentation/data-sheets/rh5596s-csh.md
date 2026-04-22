<!-- lastmod 2024-10-01 -->
<!-- image -->

## Commercial Space Product

## FEATURES

- Ultra-wide matched input frequency range: 100 MHz to 40 GHz
- 35 dB linear dynamic range (&lt; ±1 dB error)
- 29 mV/dB logarithmic slope
- ±1 dB flat response from 200 MHz to 30 GHz
- Accurate RMS power measurement of high crest factors (up to 12 dB) modulated waveforms
- Low-power shutdown mode
- Low-supply current: 30 mA at 3.3 V (typical)
- 8-lead plastic LFCSP (05-08-1957)
- -40°C to +125°C rated with guaranteed log slope and log intercept

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Certificate of Conformance
- Wafer diffusion lot traceability
- Qualification based on flows per NASA PEM-INST-001 and SAE AS6294
- Burn-in, life test, and deltas analysis
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Radiation benchmark
- No single event latch-up (SEL) occurs at effective linear energy transfer (LET): ≤ 80 MeV-cm 2 /mg
- Outgassing characterization

## APPLICATIONS

- Low and medium Earth orbit (LEO/MEO) space payloads
- Geosynchronous Earth orbit (GEO) satellites
- Avionics
- Point-to-point microwave links
- Instrumentation and measurement equipment
- Military radios
- Long-term evolution (LTE), Wi-Fi, WiMAX wireless networks
- RMS power measurement
- Receive and transmit gain control
- RF power amplifier (PA) transmit power control

## RH5596S-CSH

## 100 MHz to 40 GHz Linear-in-dB RMS Power Detector with 35 dB Dynamic Range

## GENERAL DESCRIPTION

The RH5596S-CSH is a high accuracy RMS power detector that provides a very wide RF input bandwidth, from 100 MHz up to 40 GHz. This makes the device suitable for a wide range of RF and microwave applications, such as point-to-point microwave links, instrumentation, and power control applications.

The DC output-voltage of the detector is an accurate representation of the average signal power applied to the RF input. The response is linear-in-dB with 29 mV/dB logarithmic slope over a 35 dB dynamic range with typically better than ±1 dB accuracy over the full operating temperature range and RF frequency range, from 200 MHz to 30 GHz. In addition, the device's response has ±1dB flatness within the frequency range of 200 MHz to 30 GHz. The detector is particularly suited for measurement of waveforms with crest factor (CF) as high as 12 dB, and waveforms that exhibit a significant variation of the CF during measurement.

To achieve higher accuracy and lower output ripple, the averaging bandwidth can be externally adjusted by a capacitor connected between the FLTR pin and OUT pin.

The enable interface switches the device between an active measurement mode and a low-power shutdown mode.

Additional application and technical information can be found in the Commercial Space Products Program brochure and the LTC5596 data sheet.

| Data Sheet RH5596S-CSH                                                                                                                                                          | Data Sheet RH5596S-CSH                                                                                                                                                          | Data Sheet RH5596S-CSH                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TABLE OF CONTENTS                                                                                                                                                               | TABLE OF CONTENTS                                                                                                                                                               | TABLE OF CONTENTS                                                                                                                                                               |
| Features................................................................ 1                                                                                                      | Outgas Testing...................................................                                                                                                               | 9                                                                                                                                                                               |
| Commercial Space Features.................................1                                                                                                                     |                                                                                                                                                                                 | Radiation Features.............................................9                                                                                                                |
| Applications...........................................................                                                                                                         | 1                                                                                                                                                                               | Electrostatic Discharge (ESD) Ratings...............9                                                                                                                           |
| General Description...............................................1                                                                                                             | ESD                                                                                                                                                                             | Caution.......................................................9                                                                                                                 |
| Specifications........................................................                                                                                                          | 3                                                                                                                                                                               | Pin Configuration and Function Descriptions...... 10                                                                                                                            |
| Burn-In Delta Limit Specifications......................                                                                                                                        | 7                                                                                                                                                                               | Typical Performance Characteristics................... 11                                                                                                                       |
| Radiation Test and Limit Specifications..............8                                                                                                                          | Outline                                                                                                                                                                         | Dimensions............................................. 12                                                                                                                      |
| Absolute Maximum Ratings...................................9                                                                                                                    |                                                                                                                                                                                 | Ordering Guide.................................................12                                                                                                               |
| Thermal Resistance........................................... 9                                                                                                                 | Thermal Resistance........................................... 9                                                                                                                 | Thermal Resistance........................................... 9                                                                                                                 |
| REVISION HISTORY                                                                                                                                                                | REVISION HISTORY                                                                                                                                                                | REVISION HISTORY                                                                                                                                                                |
| 2/2024-Rev. 0 to Rev. A Change to Features Section............................................................................................................................1 | 2/2024-Rev. 0 to Rev. A Change to Features Section............................................................................................................................1 | 2/2024-Rev. 0 to Rev. A Change to Features Section............................................................................................................................1 |

## 2/2023-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, V CC = 3.3 V, EN = 3.3 V, unless otherwise noted. Continuous wave, 50 Ω source at RF IN , RF frequency (f RF ) = 2140 MHz, unless otherwise noted.

Table 1. Electrical Characteristics

| Parameter                          | Test Conditions               | Temperature 1   | Min   | Typ              | Max   | Unit            |
|------------------------------------|-------------------------------|-----------------|-------|------------------|-------|-----------------|
| RF INPUT                           |                               |                 |       |                  |       |                 |
| Input Frequency Range              |                               |                 |       | 0.1 to 40        |       | GHz             |
| Input Impedance                    |                               |                 |       | 52&#124;&#124;50 |       | Ω&#124;&#124;fF |
| DETECTOR RESPONSE (RF IN TO OUT)   |                               |                 |       |                  |       |                 |
| RF Input Power Range, T A = 25°C   | f RF = 50 MHz                 |                 |       | -33.2 to +6.3    |       | dBm             |
| ±1 dB Log Linearity Error 2, 3     | f RF = 100 MHz                |                 |       | -37.1 to +5.8    |       | dBm             |
|                                    | f RF = 500 MHz                |                 |       | -40.8 to +3.3    |       | dBm             |
|                                    | f RF = 2.14 GHz               |                 |       | -39.1 to +4.2    |       | dBm             |
|                                    | f RF = 5.8 GHz                |                 |       | -39.7 to +3.7    |       | dBm             |
|                                    | f RF = 7.6 GHz                |                 |       | -38.9 to +4.3    |       | dBm             |
|                                    | f RF = 10 GHz                 |                 |       | -39.0 to +4.2    |       | dBm             |
|                                    | f RF = 12 GHz                 |                 |       | -38.5 to +4.5    |       | dBm             |
|                                    | f RF = 15 GHz                 |                 |       | -37.5 to +5.5    |       | dBm             |
|                                    | f RF = 18 GHz                 |                 |       | -38.4 to +4.6    |       | dBm             |
|                                    | f RF = 24 GHz                 |                 |       | -39.3 to +0.2    |       | dBm             |
|                                    | f RF = 26 GHz                 |                 |       | -37.8 to +5.0    |       | dBm             |
|                                    | f RF = 28 GHz                 |                 |       | -40.1 to -0.6    |       | dBm             |
|                                    | f RF = 30 GHz                 |                 |       | -39.8 to +3.1    |       | dBm             |
|                                    | f RF = 35 GHz                 |                 |       | -37.3 to +3.1    |       | dBm             |
|                                    | f RF = 38 GHz                 |                 |       | -34.2 to +3.6    |       | dBm             |
|                                    | f RF = 40 GHz                 |                 |       | -32.6 to +2.9    |       | dBm             |
|                                    | f RF = 43.5 GHz               |                 |       | -28.2 to +4.6    |       | dBm             |
| RF Input Power Range Over          | f RF = 50 MHz                 | Full            |       | -28.4 to +3.0    |       | dBm             |
| Operating Temperature Range        | f RF = 100 MHz                | Full            |       | -37.1 to +3.0    |       | dBm             |
| ±1 dB Log Linearity Error 2, 3     | f RF = 500 MHz                | Full            |       | -35.9 to -1.2    |       | dBm             |
|                                    | f RF = 2.14 GHz               | Full            |       | -35.2 to -0.2    |       | dBm             |
|                                    | f RF = 5.8 GHz                | Full            |       | -35.3 to -0.7    |       | dBm             |
|                                    | f RF = 7.6 GHz                | Full            |       | -34.7 to -0.2    |       | dBm             |
|                                    | f RF = 10 GHz                 | Full            |       | -34.5 to -0.5    |       | dBm             |
|                                    | f RF = 12 GHz                 | Full            |       | -34.1 to +0.3    |       | dBm             |
|                                    | f RF = 15 GHz                 | Full            |       | -33.5 to +1.4    |       | dBm             |
|                                    | f RF = 18 GHz                 | Full            |       | -35.2 to -0.1    |       | dBm             |
|                                    | f RF = 24 GHz                 | Full            |       | -36.0 to -1.2    |       | dBm             |
|                                    | f RF = 26 GHz                 | Full            |       | -34.8 to -0.1    |       | dBm             |
|                                    | f RF = 28 GHz                 | Full            |       | -36.4 to -2.5    |       | dBm             |
|                                    | f RF = 30 GHz                 | Full            |       | -35.3 to -2.1    |       | dBm             |
| ±1.5 dB Log Linearity Error        | f RF = 35 GHz                 | Full            |       | -32.3 to -1.5    |       | dBm             |
|                                    | f RF = 38 GHz                 | Full            |       | -29.2 to -0.2    |       | dBm             |
|                                    | f RF = 40 GHz                 | Full            |       | -27.1 to -0.9    |       | dBm             |
|                                    | f RF = 43.5 GHz               | Full            |       | -22.1 to +0.3    |       | dBm             |
| Linear Dynamic Range, T A = 25°C 3 | f RF = 50 MHz                 |                 |       | 39.5             |       | dB              |
|                                    | f RF = 100 MHz                |                 |       | 42.9             |       | dB              |
|                                    | f RF = 500 MHz                |                 |       | 44.1             |       | dB              |
|                                    | f RF = 2.14 GHz               |                 |       | 43.3             |       | dB              |
|                                    | f RF = 5.8 GHz f RF = 7.6 GHz |                 |       | 43.3             |       | dB dB           |
|                                    |                               |                 |       | 43.2             |       |                 |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                       | Test Conditions   | Temperature 1   | Min   |   Typ | Max   | Unit   |
|---------------------------------|-------------------|-----------------|-------|-------|-------|--------|
|                                 | f RF = 10 GHz     |                 |       |  43.1 |       | dB     |
|                                 | f RF = 12 GHz     |                 |       |  43.1 |       | dB     |
|                                 | f RF = 15 GHz     |                 |       |  43   |       | dB     |
|                                 | f RF = 18 GHz     |                 |       |  43   |       | dB     |
|                                 | f RF = 24 GHz     |                 |       |  39.5 |       | dB     |
|                                 | f RF = 26 GHz     |                 |       |  42.8 |       | dB     |
|                                 | f RF = 28 GHz     |                 |       |  39.5 |       | dB     |
|                                 | f RF = 30 GHz     |                 |       |  43   |       | dB     |
|                                 | f RF = 35 GHz     |                 |       |  40.4 |       | dB     |
|                                 | f RF = 38 GHz     |                 |       |  37.7 |       | dB     |
|                                 | f RF = 40 GHz     |                 |       |  35.6 |       | dB     |
|                                 | f RF = 43.5 GHz   |                 |       |  32.8 |       | dB     |
| Linear Dynamic Range Over       | f RF = 50 MHz     | Full            |       |  31.4 |       | dB     |
| Operating Temperature Range 3   | f RF = 100 MHz    | Full            |       |  40.1 |       | dB     |
|                                 | f RF = 500 MHz    | Full            |       |  34.7 |       | dB     |
|                                 | f RF = 2.14 GHz   | Full            |       |  35.1 |       | dB     |
|                                 | f RF = 5.8 GHz    | Full            |       |  34.6 |       | dB     |
|                                 | f RF = 7.6 GHz    | Full            |       |  34.5 |       | dB     |
|                                 | f RF = 10 GHz     | Full            |       |  34   |       | dB     |
|                                 | f RF = 12 GHz     | Full            |       |  34.4 |       | dB     |
|                                 | f RF = 15 GHz     | Full            |       |  35   |       | dB     |
|                                 | f RF = 18 GHz     | Full            |       |  35.1 |       | dB     |
|                                 | f RF = 24 GHz     | Full            |       |  34.8 |       | dB     |
|                                 | f RF = 26 GHz     | Full            |       |  34.8 |       | dB     |
|                                 | f RF = 28 GHz     | Full            |       |  33.9 |       | dB     |
|                                 | f RF = 30 GHz     | Full            |       |  33.2 |       | dB     |
| ±1.5 dB Log Linearity Error     | f RF = 35 GHz     | Full            |       |  30.7 |       | dB     |
|                                 | f RF = 38 GHz     | Full            |       |  29   |       | dB     |
|                                 | f RF = 40 GHz     | Full            |       |  26.2 |       | dB     |
|                                 | f RF = 43.5 GHz   | Full            |       |  22.4 |       | dB     |
| Logarithmic Slope, T A = 25°C 4 | f RF = 50 MHz     |                 |       |  27.2 |       | mV/dB  |
|                                 | f RF = 100 MHz    |                 |       |  28.9 |       | mV/dB  |
|                                 | f RF = 500 MHz    |                 |       |  28.2 |       | mV/dB  |
|                                 | f RF = 2.14 GHz   |                 | 25.5  |  29.3 | 33.5  | mV/dB  |
|                                 | f RF = 5.8 GHz    |                 |       |  28.7 |       | mV/dB  |
|                                 | f RF = 7.6 GHz    |                 |       |  28.8 |       | mV/dB  |
|                                 | f RF = 8 GHz      |                 |       |  28.6 |       | mV/dB  |
|                                 | f RF = 10 GHz     |                 |       |  28.8 |       | mV/dB  |
|                                 | f RF = 12 GHz     |                 |       |  28.9 |       | mV/dB  |
|                                 | f RF = 15 GHz     |                 |       |  29   |       | mV/dB  |
|                                 | f RF = 18 GHz     |                 |       |  28.9 |       | mV/dB  |
|                                 | f RF = 20 GHz     |                 |       |  28.8 |       | mV/dB  |
|                                 | f RF = 24 GHz     |                 |       |  28.9 |       | mV/dB  |
|                                 | f RF = 26 GHz     |                 |       |  29.1 |       | mV/dB  |
|                                 | f RF = 28 GHz     |                 |       |  29.1 |       | mV/dB  |
|                                 | f RF = 30 GHz     |                 |       |  28.9 |       | mV/dB  |
|                                 | f RF = 35 GHz     |                 |       |  29   |       | mV/dB  |
|                                 | f RF = 38 GHz     |                 |       |  29.2 |       | mV/dB  |
|                                 | f RF = 40 GHz     |                 |       |  29.5 |       | mV/dB  |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                           | Test Conditions   | Temperature 1   | Min   | Typ            | Max   |
|-------------------------------------|-------------------|-----------------|-------|----------------|-------|
|                                     | f RF = 43.5 GHz   |                 |       | 29.7           |       |
| Logarithmic Slope                   | f RF = 50 MHz     | Full            |       | 27.6 to 28.6   |       |
| Operating Temperature Range 4       | f RF = 100 MHz    | Full            |       | 28.2 to 29.4   |       |
|                                     | f RF = 500 MHz    | Full            |       | 27.4 to 28.9   |       |
|                                     | f RF = 2.14 GHz   | Full            | 25    | 28.0 to 29.5   | 33.5  |
|                                     | f RF = 5.8 GHz    | Full            |       | 28.0 to 29.4   |       |
|                                     | f RF = 7.6 GHz    | Full            |       | 28.1 to 29.5   |       |
|                                     | f RF = 8 GHz      | Full            |       | 28.5 to 28.6   |       |
|                                     | f RF = 10 GHz     | Full            |       | 28.1 to 29.5   |       |
|                                     | f RF = 12 GHz     | Full            |       | 28.2 to 29.5   |       |
|                                     | f RF = 15 GHz     | Full            |       | 28.3 to 29.4   |       |
|                                     | f RF = 18 GHz     | Full            |       | 28.2 to 29.6   |       |
|                                     | f RF = 20 GHz     | Full            |       | 28.6 to 28.8   |       |
|                                     | f RF = 24 GHz     | Full            |       | 28.3 to 29.5   |       |
|                                     | f RF = 26 GHz     | Full            |       | 28.4 to 29.6   |       |
|                                     | f RF = 28 GHz     | Full            |       | 28.3 to 29.5   |       |
|                                     | f RF = 30 GHz     | Full            |       | 28.3 to 29.5   |       |
|                                     | f RF = 35 GHz     | Full            |       | 28.4 to 29.3   |       |
|                                     | f RF = 38 GHz     | Full            |       | 28.6 to 29.4   |       |
|                                     | f RF = 40 GHz     | Full            |       | 28.8 to 29.7   |       |
|                                     | f RF = 43.5 GHz   | Full            |       | 29.1 to 29.7   |       |
| Logarithmic Intercept, T A = 25°C 5 | f RF = 50 MHz     |                 |       | -33.1          |       |
|                                     | f RF = 100 MHz    |                 |       | -36.2          |       |
|                                     | f RF = 500 MHz    |                 |       | -39.9          |       |
|                                     | f RF = 2.14 GHz   |                 | -41.5 | -39.0          | -34   |
|                                     | f RF = 5.8 GHz    |                 |       | -38.7          |       |
|                                     | f RF = 7.6 GHz    |                 |       | -37.9          |       |
|                                     | f RF = 8 GHz      |                 |       | -39.0          |       |
|                                     | f RF = 10 GHz     |                 |       | -38.0          |       |
|                                     | f RF = 12 GHz     |                 |       | -37.6          |       |
|                                     | f RF = 15 GHz     |                 |       | -36.5          |       |
|                                     | f RF = 18 GHz     |                 |       | -37.4          |       |
|                                     | f RF = 20 GHz     |                 |       | -37.1          |       |
|                                     | f RF = 24 GHz     |                 |       | -38.4          |       |
|                                     | f RF = 26 GHz     |                 |       | -36.8          |       |
|                                     | f RF = 28 GHz     |                 |       | -37.1          |       |
|                                     | f RF = 30 GHz     |                 |       | -38.9          |       |
|                                     | f RF = 35 GHz     |                 |       | -36.3          |       |
|                                     | f RF = 38 GHz     |                 |       | -33.2          |       |
|                                     | f RF = 40 GHz     |                 |       | -31.7          |       |
|                                     | f RF = 43.5 GHz   |                 |       | -27.2          |       |
| Logarithmic Intercept Over          | f RF = 50 MHz     | Full            |       | -32.6 to -31.3 |       |
| Operating Temperature Range 5       | f RF = 100 MHz    | Full            |       | -38.1 to -37.9 |       |
|                                     | f RF = 500 MHz    | Full            |       | -40.4 to -38.6 |       |
|                                     | f RF = 2.14 GHz   | Full            | -42   | -39.7 to -37.0 | -33   |
|                                     | f RF = 5.8 GHz    | Full            |       | -39.2 to -37.4 |       |
|                                     | f RF = 7.6 GHz    | Full            |       | -38.5 to -36.7 |       |
|                                     | f RF = 10 GHz     | Full            |       | -38.6 to -36.7 |       |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                                                   | Test Conditions                                                 | Temperature   | Min   | Typ            | Max   | Unit   |
|-------------------------------------------------------------|-----------------------------------------------------------------|---------------|-------|----------------|-------|--------|
|                                                             | f RF = 12 GHz                                                   | Full          |       | -38.1 to -36.3 |       | dBm    |
|                                                             | f RF = 15 GHz                                                   | Full          |       | -37.0 to -35.5 |       | dBm    |
|                                                             | f RF = 18 GHz                                                   | Full          |       | -38.1 to -36.4 |       | dBm    |
|                                                             | f RF = 20 GHz                                                   | Full          |       | -37.3 to -36.8 |       | dBm    |
|                                                             | f RF = 24 GHz                                                   | Full          |       | -38.8 to -37.3 |       | dBm    |
|                                                             | f RF = 26 GHz                                                   | Full          |       | -37.5 to -35.9 |       | dBm    |
|                                                             | f RF = 28 GHz                                                   | Full          |       | -37.7 to -35.9 |       | dBm    |
|                                                             | f RF = 30 GHz                                                   | Full          |       | -39.7 to -38.0 |       | dBm    |
|                                                             | f RF = 35 GHz                                                   | Full          |       | -37.1 to -34.9 |       | dBm    |
|                                                             | f RF = 38 GHz                                                   | Full          |       | -34.1 to -31.7 |       | dBm    |
|                                                             | f RF = 40 GHz                                                   | Full          |       | -32.8 to -30.3 |       | dBm    |
|                                                             | f RF = 43.5 GHz                                                 | Full          |       | -28.3 to -25.9 |       | dBm    |
| Linear Dynamic Range for Various Modulation Formats 6       | Code division multiple access (CDMA), 9 channels, forward       |               |       | -39.7 to +1.7  |       | dB     |
|                                                             | CDMA, 32 channels, forward                                      |               |       | -39.6 to +1.7  |       | dB     |
|                                                             | CDMA, 64 channels, forward                                      |               |       | -39.5 to +1.7  |       | dB     |
|                                                             | CDMA, 3 carriers                                                |               |       | -40.4 to +3.0  |       | dB     |
|                                                             | CDMA, 4 carriers                                                |               |       | -40.3 to +2.7  |       | dB     |
|                                                             | Wideband code division multiple access (W- CDMA), 1 channel, up |               |       | -39.9 to +1.8  |       | dB     |
|                                                             | W-CDMA, 1 channel, down                                         |               |       | -39.9 to +1.7  |       | dB     |
|                                                             | W-CDMA, 2 carriers                                              |               |       | -40.0 to +1.9  |       | dB     |
|                                                             | W-CDMA, 3 carriers                                              |               |       | -40.4 to +2.0  |       | dB     |
|                                                             | W-CDMA, 4 carriers                                              |               |       | -40.3 to +1.7  |       | dB     |
|                                                             | additive white Gaussian noise (AWGN), 5 MHz bandwidth           |               |       | -40.2 to +2.6  |       | dB     |
|                                                             | AWGN, 10 MHz bandwidth                                          |               |       | -40.2 to +3.1  |       | dB     |
|                                                             | AWGN, 15 MHz bandwidth                                          |               |       | -40.1 to +3.1  |       | dB     |
| Propagation Delay 7                                         | P IN from -55 dBm to 0 dBm                                      |               |       | 1.2            |       | μs     |
| OUT INTERFACE                                               |                                                                 |               |       |                |       |        |
| Output DC Voltage                                           | No RF signal present, EN = 1.1 V                                |               |       | 1.0            | 5.0   | mV     |
|                                                             | P IN = 10 dBm, EN = 1.1 V                                       |               | 1.150 | 1.2            | 1.250 | V      |
| Output-Voltage Droop                                        | 25 mA sourcing                                                  |               | -35   | +6             | +20   | mV     |
|                                                             | 25 mA sinking                                                   |               |       | 30             |       | mV     |
| Integrated Output Noise                                     | 1 kHz to 6.5 kHz, P IN = 0 dBm                                  |               |       | 22             |       | μV RMS |
| Rise Time 8                                                 | 50 Ω load at OUT                                                |               |       | 2.9            |       | μs     |
| Fall Time 9                                                 | 50 Ω load at OUT                                                |               |       | 8.1            |       | μs     |
| ENABLE (EN) LOW = OFF, HIGH = ON EN Input High Voltage (On) |                                                                 | Full          | 1.1   |                |       | V      |

## SPECIFICATIONS

Table 1. Electrical Characteristics (Continued)

| Parameter                  | Test Conditions                   | Temperature   | Min   | Typ   | Max   | Unit   |
|----------------------------|-----------------------------------|---------------|-------|-------|-------|--------|
| EN Input Low Voltage (Off) |                                   | Full          |       |       | 0.6   | V      |
| EN Pin Input Current       |                                   |               |       | 50    | 500   | nA     |
| Turn-On Time 10            | 50 Ω load at OUT                  |               |       | 8     |       | μs     |
| Turn-Off Time 11           | 50 Ω load at OUT                  |               |       | 45    |       | ns     |
|                            | 1 MΩ&#124;&#124;11 pF load at OUT |               |       | 100   |       | μs     |
| POWER SUPPLY               |                                   |               |       |       |       |        |
| Supply Voltage             |                                   | Full          | 2.7   | 3.3   | 3.6   | V      |
| Active Supply Current      | EN = 3.3 V                        |               | 25    | 30    | 35    | mA     |
| Shutdown Supply Current    | EN = 0 V                          |               |       | 50    | 500   | nA     |

- 1 The RH5596S-CSH is guaranteed functional over the case temperature range -40°C to +125°C. All limits at -40°C and +125°C are guaranteed by 100% production testing.
- 2 Log linearity error is the input-referred power measurement error relative to the best fit straight line (VOUT vs. pin in dBm) obtained by linear regression at TA = 25°C. The input power range used for the linear regression is from -32 dBm to +5 dBm for 50 MHz, from -37 dBm to -5 dBm for 100 MHz through 35 GHz, from -34 dBm to -5 dBm for 38 GHz, from-32 dBm to -5 dBm for 40 GHz, and from -28 dBm to -5 dBm for 43.5 GHz. An offset of 0.5 dB is added to the log intercept for frequencies from 50 MHz to 38 GHz, and 0.25 dB is added for 40 GHz and 43.5 GHz to center the errors over the full temperature range. See also the LTC5596 data sheet for an explanation of measurement error metrics.
- 3 Range for which the log linearity error is within ±1 dB.
- 4 Slope of the best fit straight line obtained by linear regression.
- 5 Extrapolated input power level (straight line obtained by linear regression) where the voltage at OUT equals 0 V.
- 6 Power range for which log linearity error is within ±1 dB, relative to best fit straight line for continuous wave data (see footnote 2).
- 7 Delay from 50% change in RF IN to 50% change in output voltage.
- 8 Time required to change voltage at OUT pin from 10% to 90% of final value. Input power stepped from -55 dBm to 0 dBm.
- 9 Time required to change voltage at OUT pin from 90% to 10% of initial value. Input power stepped from 0 dBm to -55 dBm.
- 10 Time required to change voltage at OUT pin to 90% of final value. Input power 0 dBm.
- 11 Time required to change voltage at OUT pin to 10% of initial value. Input power 0 dBm. For higher load impedance, the turn-off time is larger because the OUT interface is high-impedance in shutdown mode.

## BURN-IN DELTA LIMIT SPECIFICATIONS

Electrical characteristics at V CC = 3.3 V and EN = 3.3 V. Continuous wave, 50 Ω source at RF IN , and f RF = 2140 MHz. Delta limits apply at room temperature (T A = 25°C) for post 240 hour burn-in test. Delta calculation is based on absolute maximum changes.

## Table 2. Burn-In Delta Limit Specifications

| Parameter 1, 2                                                    | Test Conditions/Comments   | Delta   | Unit   |
|-------------------------------------------------------------------|----------------------------|---------|--------|
| ACTIVE SUPPLY CURRENT                                             |                            | ±3.5    | mA     |
| OUTPUT DC VOLTAGE f RF = 100 MHz, 2.14 GHz, 8 GHz, 18 GHz, 20 GHz | P IN = 5 dBm               | ±0.2    | V      |

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

TA = 25°C, V CC = 3.3 V, and EN = 3.3 V. Continuous wave, 50 Ω source at RF IN , f RF = 2140 MHz, unless otherwise noted. Total ionizing dose (TID) testing is characterized to 100 krads.

Table 3. Radiation Test and Limit Specifications

| Parameter                           | Test Conditions/Comments                 | Min   | Typ   | Max   | Unit   |
|-------------------------------------|------------------------------------------|-------|-------|-------|--------|
| LOGARITHMIC SLOPE, T A = 25°C 1     | f RF = 100 MHz                           | 24    | 28.9  | 34    | mV/dB  |
| LOGARITHMIC SLOPE, T A = 25°C 1     | f RF = 2.14 GHz                          | 24    | 29.3  | 35    | mV/dB  |
| LOGARITHMIC SLOPE, T A = 25°C 1     | f RF = 8 GHz                             | 23    | 28.6  | 34    | mV/dB  |
| LOGARITHMIC SLOPE, T A = 25°C 1     | f RF = 18 GHz                            | 24    | 28.9  | 34    | mV/dB  |
| LOGARITHMIC SLOPE, T A = 25°C 1     | f RF = 20 GHz                            | 24    | 28.8  | 34    | mV/dB  |
| LOGARITHMIC INTERCEPT, T A = 25°C 2 | f RF = 100 MHz                           | -43   | -36.2 | -30   | dBm    |
| LOGARITHMIC INTERCEPT, T A = 25°C 2 | f RF = 2.14 GHz                          | -46   | -39   | -32   | dBm    |
| LOGARITHMIC INTERCEPT, T A = 25°C 2 | f RF = 8 GHz                             | -46   | -39   | -32   | dBm    |
| LOGARITHMIC INTERCEPT, T A = 25°C 2 | f RF = 18 GHz                            | -44   | -37.4 | -31   | dBm    |
| LOGARITHMIC INTERCEPT, T A = 25°C 2 | f RF = 20 GHz                            | -44   | -37.1 | -30   | dBm    |
| OUT INTERFACE                       |                                          |       |       |       |        |
| Output DC Voltage                   | No RF signal present, EN = 1.1 V         |       | 1.0   | 5.0   | mV     |
| Output DC Voltage                   | Input power (P IN ) = 10 dBm, EN = 1.1 V | 1.150 | 1.2   | 1.250 | V      |
| ENABLE (EN) LOW = OFF, HIGH = ON    |                                          |       |       |       |        |
| EN Pin Input Current                |                                          |       | 50    | 500   | nA     |
| POWER SUPPLY                        |                                          |       |       |       |        |
| Active Supply Current               | EN = 3.3 V                               | 25    | 30    | 35    | mA     |
| Shutdown Supply Current             | EN = 0 V                                 |       | 50    | 500   | nA     |

1 Slope of the best fit straight line obtained by linear regression.

2 Extrapolated input power level (straight line obtained by linear regression) where the voltage at OUT equals 0 V.

## ABSOLUTE MAXIMUM RATINGS

| Table 4.                             |                  |
|--------------------------------------|------------------|
| Parameter 1                          | Rating           |
| Supply Voltage (V CC )               | 3.8 V            |
| Input Signal Power (RF IN ), Average | 15 dBm           |
| Input Signal Power (RF IN ), Peak 2  | 20 dBm           |
| DC Voltage at RF IN                  | -0.3 V to +1 V   |
| DC Voltage at FLTR                   | -0.3 V to +0.4 V |
| DC Voltage at EN                     | -0.3 V to +3.8 V |
| T JMAX                               | 150°C            |
| Operating Temperature Range          | -40°C to 125°C   |
| Storage Temperature Range            | -65°C to 150°C   |

- 1 The voltage on all pins must not exceed 3.8 V, V CC + 0.3 V, or be less than -0.3 V, otherwise damage to the ESD diodes may occur.
- 2 Not production tested. Guaranteed by design and correlation to production tested parameters.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to the printed circuit board (PCB) design and operating environment. Careful attention to the PCB thermal design is required.

θ JC is the junction-to-case thermal resistance.

## Table 5. Thermal Resistance

| Package Option   |   θ JC | Unit   |
|------------------|--------|--------|
| 05-08-1957       |     25 | °C/W   |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 6. Outgas Testing

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           |    0.06 | %      |
| Collected Volatile Condensable Material   |    0.01 | %      |

## Table 6. Outgas Testing (Continued)

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Water Vapor Recovered                     |    0.02 | %      |

## RADIATION FEATURES

## Table 7. Radiation Features

| Specifications                                                                    | Value   | Unit          |
|-----------------------------------------------------------------------------------|---------|---------------|
| Maximum Total Dose Available (Dose Rate = 50 rad(Si)/s to 300 rad(Si)/s) 1        | 100     | krad(Si)      |
| No Single Event Latch-Up (SEL) Occurs at Effective Linear Energy Transfer (LET) 2 | ≤80     | MeV- cm 2 /mg |

- 1 Guaranteed by device and process characterization. Contact Analog Devices, Inc., for data available up to 100 krads.
- 2 Limits are characterized at initial qualification and after any design or process changes that may affect the SEL characteristics but are not production lot tested, unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices for further data beyond published report on the Analog Devices website.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in and ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Rating for the RH5596S-CSH

Table 8. RH5596S-CSH, 8-Lead Plastic LFCSP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      3500 | 2       |
| CDM         |                      2000 | C3      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 1. Pin Configuration

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1         | V CC       | Power-Supply Pin. Typical current consumption is 30 mA at room temperature. The V CC pin must be externally bypassed with a 100 nF capacitor.                                                                                                                                                                                                                                                                                                                                             |
| 2         | OUT        | Detector Output. The DC voltage at the OUT pin varies linearly with the RF input power level in dBm. The detector output is able to drive a 50 Ω load. To avoid permanent damage, do not short to V CC or GND. In shutdown mode (EN = low), the detector output pin becomes high impedance, to avoid discharge of capacitors in an external ripple filter.                                                                                                                                |
| 3         | FLTR       | Filter. An optional capacitor connected between the FLTR pin and the OUT pin (Pin 2) reduces the detector ripple averaging bandwidth, and increases the rise and fall times of the detector. To avoid permanent damage to the circuit, the DC voltage at the FLTR pin must not exceed 0.4 V.                                                                                                                                                                                              |
| 4, 5, 7   | GND        | Circuit Ground. All ground pins are internally connected. Pin 5 and Pin 7 must be used as RF return ground and connected to the transmission line interfacing to the RF IN pin (Pin 6).                                                                                                                                                                                                                                                                                                   |
| 6         | RF IN      | RF Input. The RF IN pin is internally DC-coupled to the GND through a 50 Ω termination resistor. To avoid damage to the internal circuit, the DC voltage applied to the RF IN pin must not exceed 1 V. The ground-signal-ground arrangement of Pin 5 through Pin 7 support termination of Pin 6 by a high-frequency transmission line, such as a grounded co-planar waveguide (GCPW). No external decoupling capacitor is necessary as long as the DC voltage on Pin 6 is kept below 1 V. |
| 8         | EN         | Chip-Enable. A voltage above 1.1 V applied to the EN pin brings the device into normal operating mode. A voltage below 0.6 V brings the device into a low-power shutdown mode. Do not float the EN pin.                                                                                                                                                                                                                                                                                   |
|           | EPAD       | Exposed Pad. The exposed pad must be soldered to PCB ground .                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Table 9. Pin Function Descriptions

## TYPICAL PERFORMANCE CHARACTERISTICS

See the LTC5596 data sheet for the full set of typical performance characteristics plots.

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                   |
|----------------------------|----------------|---------------------------------------|
| 05-08-1957                 | LFCSP          | 8-Lead, Lead Frame Chip Scale Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description                          | Packing Quantity   | Package Option   |
|-------------------|---------------------|----------------------------------------------|--------------------|------------------|
| RH5596HDC#PBF-CSH | -40°C to +125°C     | 8-Lead Lead Frame Chip Scale Package (LFCSP) | Reel, 500          | 05-08-1957       |

<!-- image -->