<!-- lastmod 2024-06-26 -->
<!-- image -->

## Enhanced Product

## FEATURES

Ease of use-16-bit, 1 MSPS complete data acquisition system High impedance, 8-channel input: &gt;500 MΩ Differential input voltage range: ±24.576 V maximum High input common-mode rejection: &gt;100 dB User-programmable input ranges Channel sequencer with individual channel gains On-chip 4.096 V reference and buffer Auxiliary input-direct interface to PulSAR® ADC inputs No latency or pipeline delay (SAR architecture) Serial 4-wire, 1.8 V to 5 V SPI-/SPORT-compatible interface 40-Lead LFCSP package (6 mm × 6 mm)

## ENHANCED FEATURES

Supports defense and aerospace applications (AQEC standard) Military temperature range (such as -55°C to +105°C) Controlled manufacturing baseline One assembly/test site Enhanced product change notification Qualification data available on request

## APPLICATIONS

Multichannel data acquisition and system monitoring Process controls Power line monitoring Automated test equipment Instrumentation GENERAL DESCRIPTION

The ADAS3022-EP is a complete 16-bit, 1 MSPS, successive approximation-based, analog-to-digital data acquisition system that is manufactured on Analog Devices, Inc., proprietary i CMOS® high voltage industrial process technology. The device integrates

## 16-Bit, 1 MSPS, 8-Channel Data Acquisition System

ADAS3022-EP

an 8-channel, low leakage multiplexer; a high impedance programmable gain instrumentation amplifier (PGIA) stage with high common-mode rejection; a precision, low drift 4.096 V reference and buffer; and a 16-bit charge redistribution analogto-digital converter (ADC) with a successive approximation register (SAR) architecture. The ADAS3022-EP can resolve eight single-ended inputs or four fully differential inputs up to ± 24.576 V when using ±15 V supplies. In addition, the device can accept the commonly used bipolar differential, bipolar single-ended, pseudo bipolar, or pseudo unipolar input signals, as shown in Table 1, thus enabling the use of almost any direct sensor interface.

The ADAS3022-EP simplifies design challenges by eliminating signal buffering, level shifting, amplification/attenuation, common-mode rejection, settling time, and any other analog signal conditioning challenge while allowing a smaller form factor, faster time to market, and lower cost.

Additional application and technical information can be found in the ADAS3022 data sheet.

Table 1. Typical Input Range Selection

| Signal (V)   | Input Range,V IN (V)   |
|--------------|------------------------|
| Differential |                        |
| ±1           | ±1.28                  |
| ±2.5         | ±2.56                  |
| ±5           | ±5.12                  |
| ±10          | ±10.24                 |
| Single Ended |                        |
| 0 to 1       | ±1.28                  |
| 0 to 2.5     | ±2.56                  |
| 0 to 5       | ±5.12                  |
| 0 to 10      | ±10.24                 |

## ADAS3022-EP

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Features............................................................................ 1             |
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Revision History........................................................................... 2               |
| Functional Block Diagram .............................................................. 3                   |
| Specifications..................................................................................... 4       |
| Timing Specifications .................................................................. 8                  |

## REVISION HISTORY

6/2017-Revision 0: Initial Version

| Absolute Maximum Ratings .........................................................          |   10 |
|---------------------------------------------------------------------------------------------|------|
| ESD Caution................................................................................ |   10 |
| Pin Configuration and Function Descriptions...........................                      |   11 |
| Typical Performance Characteristics ...........................................             |   13 |
| Outline Dimensions.......................................................................   |   21 |
| Ordering Guide ..........................................................................   |   21 |

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## SPECIFICATIONS

VDDH = 15 V ± 5%, VSSH = -15 V ± 5%, AVDD = DVDD = 5 V ± 5%, VIO = 1.8 V to AVDD, internal voltage reference (VREF) = 4.096 V, sampling frequency (fS) = 1 MSPS unless otherwise noted. All specifications TMIN to TMAX, unless otherwise noted.

## Table 2.

| Parameter                                                 | Test Conditions/Comments                       | Min           | Typ   | Max           | Unit 1   |
|-----------------------------------------------------------|------------------------------------------------|---------------|-------|---------------|----------|
| RESOLUTION                                                |                                                | 16            |       |               | Bits     |
| ANALOG INPUTS-IN[7:0],COM                                 |                                                |               |       |               |          |
| Operating InputVoltage Range                              | V IN                                           | -VSSH+2.5     |       | VDDH - 2.5    | V        |
| Differential InputVoltage Range,V IN                      | V IN+ -V IN-                                   |               |       |               |          |
|                                                           | PGIA gain = 0.16,V IN = 49.15V p-p             | -6×V REF      |       | +6×V REF      | V        |
|                                                           | PGIA gain = 0.2,V IN = 40.96V p-p              | -5×V REF      |       | +5×V REF      | V        |
|                                                           | PGIA gain = 0.4,V IN = 20.48V p-p              | -2.5×V REF    |       | +2.5×V REF    | V        |
|                                                           | PGIA gain = 0.8,V IN = 10.24V p-p              | -1.25×V REF   |       | +1.25×V REF   | V        |
|                                                           | PGIA gain = 1.6,V IN = 5.12V p-p               | -0.625×V REF  |       | +0.625×V REF  | V        |
|                                                           | PGIA gain = 3.2,V IN = 2.56V p-p               | -0.3125×V REF |       | +0.3125×V REF | V        |
|                                                           |                                                | -0.1563×V REF |       | +0.1563×V REF | V        |
| IN                                                        | PGIA gain = 6.4,V IN = 1.28V p-p               |               |       |               | MΩ       |
| Input Impedance, Z                                        |                                                | 500           | ±0.6  |               | nA       |
| Channel Off Leakage                                       |                                                |               | ±0.02 |               |          |
| ChannelOn Leakage                                         |                                                |               |       |               | nA       |
| Common-ModeVoltage Range (V CM ) 2                        | V IN+ ,V IN- ; full-scale differential inputs  |               |       |               |          |
|                                                           | PGIA gain = 0.4                                | -5.12         |       | +5.12         | V        |
|                                                           | PGIA gain = 0.8                                | -7.68         |       | +7.68         | V        |
|                                                           | PGIA gain = 1.6                                | -8.96         |       | +8.96         | V        |
|                                                           | PGIA gain = 3.2                                | -9.60         |       | +9.60         | V        |
|                                                           | PGIA gain = 6.4                                | -9.92         |       | +9.92         | V        |
| ANALOG INPUTS-AUX+, AUX- Differential Input Voltage Range |                                                | -V REF        |       | +V REF        | V        |
| THROUGHPUT                                                |                                                |               |       |               |          |
| Conversion Rate                                           | One channel and one pair                       | 0             |       | 1000          | kSPS     |
|                                                           | Two channels and two pairs                     | 0             |       | 500           | kSPS     |
|                                                           | Four channels and four pairs                   | 0             |       | 250           | kSPS     |
|                                                           | Eight channels                                 | 0             |       | 125           | kSPS     |
| Transient Response                                        | Full-scale step                                |               |       | 520           | ns       |
| DC ACCURACY                                               |                                                |               |       |               |          |
| No Missing Codes                                          |                                                | 16            |       |               | Bits     |
| Integral Linearity Error                                  | PGIA gain = 0.16, 0.2, 0.4, 0.8, and 1.6       | -2            | ±0.6  | +2            | LSB      |
|                                                           | PGIA gain = 3.2                                | -3            | ±1.0  | +3            | LSB      |
|                                                           | PGIA gain = 6.4                                | -5            | ±1.5  | +5            | LSB      |
| Differential Linearity Error                              | PGIA gain = 0.16, 0.2, 0.4, 0.8, and 1.6       | -0.9          | ±0.6  | +1.0          | LSB      |
|                                                           | PGIA gain = 3.2                                | -0.9          | ±0.75 | +1.25         | LSB      |
|                                                           | PGIA gain = 6.4                                | -0.9          | ±0.75 | +1.25         | LSB      |
| Transition Noise                                          | External reference                             |               |       |               |          |
|                                                           | PGIA gain = 0.16, 0.2, 0.4, 0.8, and 1.6       |               | 5     |               | LSB      |
|                                                           | PGIA gain = 3.2                                |               | 7     |               | LSB      |
|                                                           | PGIA gain = 6.4                                |               | 11    |               | LSB      |
| Gain Error                                                | External reference, all PGIA gains, T A = 25°C | -9            |       | +9            | LSB      |
| Gain Error Temperature Drift                              | External reference, all PGIA gains             |               |       | 0.1           | ppm/°C   |

| Parameter                              | Test Conditions/Comments                      | Min   | Typ      | Max   | Unit 1   |
|----------------------------------------|-----------------------------------------------|-------|----------|-------|----------|
| Offset Error                           | External reference, T A = 25°C                |       |          |       |          |
|                                        | PGIA gain = 0.16, 0.2, 0.4, and 0.8           | -3.0  | +0.2     | +3.0  | LSB      |
|                                        | PGIA gain = 1.6                               | -4.0  | +0.2     | +4.0  | LSB      |
|                                        | PGIA gain = 3.2                               | -7.5  | +0.2     | +7.5  | LSB      |
|                                        | PGIA gain = 6.4                               | -12.5 | +0.2     | +12.5 | LSB      |
| Offset Error Temperature Drift         | External reference                            |       |          |       |          |
|                                        | PGIA gain = 0.16, 0.2, 0.4, and 0.8           |       | 0.1      | 0.5   | ppm/°C   |
|                                        | PGIA gain = 1.6                               |       | 0.2      | 1.0   | ppm/°C   |
|                                        | PGIA gain = 3.2                               |       | 0.4      | 2.0   | ppm/°C   |
|                                        | PGIA gain = 6.4                               |       | 0.8      | 4.0   | ppm/°C   |
| Total Unadjusted Error                 | External reference, ambient temperature       |       |          |       |          |
|                                        | PGIA gain = 0.16, 0.2, 0.4, 0.8, 1.6, and 3.2 | -9    |          | +9    | LSB      |
|                                        | PGIA gain = 6.4                               | -15   |          | +15   | LSB      |
| AC ACCURACY 3                          |                                               |       |          |       |          |
| Signal-to-Noise Ratio (SNR)            | f IN = 10 kHz PGIA gain = 0.16                | 90.0  | 91.5     |       | dB       |
|                                        | PGIA gain = 0.2                               | 90.0  | 91.5     |       | dB       |
|                                        | PGIA gain = 0.4                               | 89.5  | 91.5     |       | dB       |
|                                        | PGIA gain = 0.8                               | 89.0  | 91.0     |       | dB       |
|                                        | PGIA gain = 1.6                               | 88.0  | 89.7     |       | dB       |
|                                        | PGIA gain = 3.2                               | 86.0  | 86.8     |       | dB       |
|                                        | PGIA gain = 6.4                               | 83.0  | 84.5     |       | dB       |
| Signal-to-Noise-and-Distortion (SINAD) | Input frequency (f IN ) = 10 kHz              |       |          |       |          |
|                                        | PGIA gain = 0.16                              | 88.0  | 90.0     |       | dB       |
|                                        | PGIA gain = 0.2                               | 88.0  | 90.0     |       | dB       |
|                                        | PGIA gain = 0.4                               | 88.5  | 91.0     |       | dB       |
|                                        | PGIA gain = 0.8                               | 88.5  | 90.5     |       | dB       |
|                                        | PGIA gain = 1.6                               | 87.5  | 89.5     |       | dB       |
|                                        | PGIA gain = 3.2                               | 85.5  | 86.5     |       | dB       |
|                                        | PGIA gain = 6.4                               | 82.5  | 84.0     |       | dB       |
| Dynamic Range                          | f IN = 10 kHz, -60 dB input                   |       |          |       |          |
|                                        | PGIA gain = 0.16                              | 91.0  | 92.0     |       | dB       |
|                                        | PGIA gain = 0.2                               | 91.0  | 92.0     |       | dB       |
|                                        | PGIA gain = 0.4                               | 90.5  | 91.5     |       | dB       |
|                                        | PGIA gain = 0.8                               | 90.0  | 91.0     |       | dB       |
|                                        | PGIA gain = 1.6                               | 89.0  | 90.0     |       | dB       |
|                                        | PGIA gain = 3.2                               | 86.0  | 87.0     |       | dB       |
|                                        | PGIA gain = 6.4                               | 83.5  | 85.0     |       | dB       |
| Total Harmonic Distortion (THD)        | f IN = 10 kHz, all PGIA gains                 |       | -100 101 |       | dB       |
| Spurious-Free Dynamic Range (SFDR)     | f IN = 10 kHz, all PGIA gains                 |       |          |       | dB       |
| Channel to Channel Crosstalk           | f IN = 10 kHz, all channels inactive          |       | -120     |       | dB       |
| (CMRR)                                 | PGIA gain = 0.16, 0.2, 0.4, and 0.8           | 90.0  | 110.0    |       | dB       |
|                                        | PGIA gain = 1.6                               | 90.0  | 105.0    |       | dB       |
|                                        | PGIA gain = 3.2                               | 90.0  | 98.0     |       | dB       |
|                                        | PGIA gain = 6.4                               | 90.0  | 98.0     |       | dB       |
| -3 dB Input Bandwidth                  | -40 dBFS                                      |       | 8        |       | MHz      |

## ADAS3022-EP

## Enhanced Product

| Parameter                                        | Test Conditions/Comments                     | Min       | Typ        | Max        | Unit 1   |
|--------------------------------------------------|----------------------------------------------|-----------|------------|------------|----------|
| AUXILIARY ADC INPUT CHANNEL                      |                                              |           |            |            |          |
| DC Accuracy                                      | External reference                           |           |            |            |          |
| Integral Nonlinearity Error                      |                                              | -1.5      | ±0.5       | +1.5       | LSB      |
| Differential Nonlinearity Error                  |                                              | -0.8      | ±0.6       | +1.0       | LSB      |
| Gain Error                                       |                                              | -2.5      | ±0.2       | +2.5       | LSB      |
| Offset Error                                     |                                              | -5        | ±0.2       | +5         | LSB      |
| AC Performance                                   | Internal reference                           |           |            |            |          |
| SNR                                              |                                              | 90.0      | 93.0       |            | dB       |
| SINAD                                            |                                              | 89.5      | 92.5       |            | dB       |
| THD                                              |                                              |           | -105       |            | dB       |
| SFDR                                             |                                              |           | 110        |            | dB       |
| INTERNAL REFERENCE                               |                                              |           |            |            |          |
| REF1 and REF2 Output Voltage                     | T A = 25°C                                   | 4.088     | 4.096      | 4.104      | V        |
| REF1 and REF2 Output Current                     | T A = 25°C                                   |           | 250        |            | µA       |
| REF1 and REF2Temperature Drift                   | REFEN = 1                                    |           | ±5         |            | ppm/°C   |
|                                                  | REFEN = 0                                    |           | ±1         |            | ppm/°C   |
| REF1 and REF2 Line Regulation Internal Reference | AVDD=5V±5%                                   |           | 20         |            | µV/V     |
| Buffer Only                                      |                                              |           | 4          |            | µV/V     |
| REFIN Output Voltage 4                           | T A = 25°C                                   | 2.495     | 2.500      | 2.505      | V        |
| Turn-On Settling Time                            | C REFIN , C REF1 , C REF2 = 10 µF and 0.1 µF |           | 100        |            | ms       |
| EXTERNAL REFERENCE                               |                                              |           |            |            |          |
| Voltage Range                                    | REFx input                                   | 4.000     | 4.096      | 4.104      | V        |
|                                                  | REFIN input (buffered)                       |           | 2.5        | 2.505      | V        |
| Current Drain                                    | V REF = 4.096V                               |           | 100        |            | µA       |
| TEMPERATURE SENSOR                               |                                              |           |            |            |          |
| Output Voltage                                   | T A = 25 °C                                  |           | 275        |            | mV       |
| Temperature Sensitivity                          |                                              |           | 800        |            | µV/°C    |
| DIGITAL INPUTS                                   |                                              |           |            |            |          |
| Logic Levels                                     |                                              |           |            |            |          |
| Input Voltage Low,V IL                           | VIO > 3V                                     | -0.3      |            | +0.3 ×VIO  | V        |
|                                                  | VIO ≤ 3V                                     | -0.3      |            | +0.1 ×VIO  | V        |
| Input Voltage High,V IH                          | VIO > 3V                                     | 0.7 ×VIO  |            | VIO + 0.3  | V        |
|                                                  | VIO ≤ 3V                                     | 0.9 ×VIO  |            | VIO + 0.3  | V        |
| Input Low Current, I IL                          |                                              | -1        |            | +1         | µA       |
| Input High Current, I IH                         |                                              | -1        |            | +1         | µA       |
| DIGITAL OUTPUTS 5                                |                                              |           |            |            |          |
| Data Format                                      |                                              | Twos      | complement |            |          |
| Output LowVoltage,V OL                           | I SINK = +500 µA                             |           |            | 0.4        | V        |
| Output High Voltage,V OH                         | I SOURCE = -500 µA                           | VIO - 0.3 |            |            | V        |
| POWER SUPPLIES                                   | PD = 0                                       |           |            |            |          |
| VIO                                              |                                              | 1.8       |            | AVDD + 0.3 | V        |
| AVDD                                             |                                              | 4.75      | 5          | 5.25       | V        |
| DVDD                                             |                                              | 4.75      | 5          | 5.25       | V        |
| VDDH 6                                           | VDDH > input voltage + 2.5V                  | 14.25     | 15         | 15.75      | V        |
| VSSH 6                                           | VSSH < input voltage - 2.5V                  | -15.75    | -15        | -14.25     | V        |

<!-- image -->

| Parameter                      | Test Conditions/Comments                                            | Min   | Typ   | Max   | Unit 1   |
|--------------------------------|---------------------------------------------------------------------|-------|-------|-------|----------|
| VDDH Capacitance, I VDDH       | PGIA gain = 0.16                                                    |       | 3.0   | 3.5   | mA       |
|                                | PGIA gain = 0.2                                                     |       | 3.0   | 3.5   | mA       |
|                                | PGIA gain = 0.4                                                     |       | 3.5   | 4.0   | mA       |
|                                | PGIA gain = 0.8                                                     |       | 5.0   | 5.5   | mA       |
|                                | PGIA gain = 1.6                                                     |       | 8.5   | 9.5   | mA       |
|                                | PGIA gain = 3.2                                                     |       | 15.5  | 17.5  | mA       |
|                                | PGIA gain = 6.4                                                     |       | 15.5  | 17.5  | mA       |
|                                | All PGIA gains, PD = 1                                              |       | 100   |       | µA       |
| Current at VSSH Supply, I VSSH | PGIA gain = 0.16                                                    | -3.0  | -2.5  |       | mA       |
|                                | PGIA gain = 0.2                                                     | -3.0  | -2.5  |       | mA       |
|                                | PGIA gain = 0.4                                                     | -3.5  | -3.0  |       | mA       |
|                                | PGIA gain = 0.8                                                     | -5.5  | -4.5  |       | mA       |
|                                | PGIA gain = 1.6                                                     | -9.5  | -8.0  |       | mA       |
|                                | PGIA gain = 3.2                                                     | -17.5 | -15   |       | mA       |
|                                | PGIA gain = 6.4                                                     | -17.5 | -15   |       | mA       |
|                                | All PGIA gains, PD = 1                                              |       | 10    |       | µA       |
| Current at AVDD, I AVDD        | PGIA gain = 6.4, reference buffer enabled                           |       | 18    | 21.0  | mA       |
|                                | All other PGIA gains, reference buffer enabled                      |       | 16    | 19.0  | mA       |
|                                | PGIA gain = 6.4, reference buffer disabled                          |       | 14    | 17.5  | mA       |
|                                | All other PGIA gains, reference buffer disabled                     |       | 12    | 16.0  | mA       |
|                                | All PGIA gains, PD = 1                                              |       | 100   |       | µA       |
| Current at DVDD, I DVDD        | All PGIA gains, PD = 0                                              |       | 2.5   | 3.5   | mA       |
|                                | All PGIA gains, PD = 1                                              |       | 10    |       | µA       |
| Current at VIO, I VIO          | VIO = 3.3 V, PD = 0                                                 |       | 0.30  | 1.2   | mA       |
|                                | PD = 1                                                              |       | 10    |       | µA       |
| Power Supply Sensitivity       |                                                                     |       |       |       |          |
| At T A = 25°C                  | External reference PGIA gain =0.16, 0.2, 0.4, and 0.8; VDDH/VSSH±5% |       | ±0.5  |       | LSB      |
|                                | PGIA gain = 3.2,VDDH/VSSH±5%                                        |       | ±1.0  |       | LSB      |
|                                | PGIA gain = 6.4,VDDH/VSSH±5%                                        |       | ±2.0  |       | LSB      |
|                                | PGIA gain = 0.16, AVDD/DVDD±5%                                      |       | ±0.6  |       | LSB      |
|                                | PGIA gain = 0.2,AVDD/DVDD±5%                                        |       | ±0.8  |       | LSB      |
|                                | PGIA gain = 0.4,AVDD/DVDD±5%                                        |       | ±1.0  |       | LSB      |
|                                | PGIA gain = 0.8,AVDD/DVDD±5%                                        |       | ±1.5  |       | LSB      |
|                                | PGIA gain = 1.6,AVDD/DVDD±5%                                        |       | ±2.0  |       | LSB      |
|                                | PGIA gain = 3.2,AVDD/DVDD±5%                                        |       | ±3.5  |       | LSB      |
|                                | PGIA gain = 6.4,AVDD/DVDD±5%                                        |       | ±7.0  |       | LSB      |
| TEMPERATURE RANGE              |                                                                     |       |       |       |          |
| Specified Performance          | T MIN to T MAX                                                      | -55   |       | +105  | °C       |

## TIMING SPECIFICATIONS

VDDH = 15 V ± 5%, VSSH = -15 V ± 5%, AVDD = DVDD = 5 V ± 5%, VIO = 1.8 V to AVDD, internal reference, VREF = 4.096 V, fS = 1 MSPS unless otherwise noted. All specifications TMIN to TMAX, unless otherwise noted.

## Table 3.

| Parameter                                          | Symbol   | Min   | Typ   | Max   | Unit   |
|----------------------------------------------------|----------|-------|-------|-------|--------|
| Time Between Conversions Warp Mode, 1 CMS = 0      | t CYC    | 1     |       | 1000  | µs     |
| Normal Mode (Default), CMS = 1                     |          | 1.1   |       |       | µs     |
| Conversion Time: CNV Rising Edge to Data Available | t CONV   |       |       |       |        |
| Warp Mode, CMS = 0                                 |          |       | 825   |       | ns     |
| Normal Mode (Default), CMS = 1                     |          |       | 925   | 1000  | ns     |
| Auxiliary ADC Input Channel AcquisitionTime        | t ACQ    | 600   |       |       | ns     |
| CNV Pulse Width                                    | t CH     | 10    |       |       | ns     |
| CNV High to Hold Time (Aperture Delay)             | t AD     |       | 2     |       | ns     |
| CNV High to Busy Delay                             | t CBD    |       |       | 520   | ns     |
| Safe Data AccessTime During Conversion             | t DDC    |       |       | 500   | ns     |
| Quiet Conversion Time (BUSY High)                  | t QUIET  |       |       |       |        |
| Warp Mode, CMS = 0                                 |          |       |       | 400   | ns     |
| Normal Mode (Default), CMS = 1                     |          |       |       | 500   | ns     |
| Data Access During Quiet ConversionTime            | t DDCA   |       |       |       |        |
| Warp Mode, CMS = 0                                 |          |       |       | 200   | ns     |
| Normal Mode (Default), CMS = 1 SCK Period          | t SCK    | 15    |       | 300   | ns ns  |
| SCK LowTime                                        | t SCKL   | 5     |       |       | ns     |
| SCK High Time                                      | t SCKH   | 5     |       |       | ns     |
| SCK Falling Edge to Data Valid                     | t SDOH   | 4     |       |       | ns     |
| Delay                                              |          |       |       |       |        |
| SCK Falling Edge to Data Valid                     | t SDOD   |       |       |       |        |
| VIO > 4.5V                                         |          |       |       | 12    | ns     |
| VIO > 3.0V                                         |          |       |       | 18    | ns     |
| VIO > 2.7V                                         |          |       |       | 24    | ns     |
| VIO > 2.3V                                         |          |       |       | 25    | ns     |
| VIO > 1.8V                                         |          |       |       | 37    | ns     |
| CS/RESET/PD Low to SDO                             | t EN     |       |       |       |        |
| VIO > 4.5V                                         |          |       |       | 15    | ns     |
| VIO > 3.0V                                         |          |       |       | 16    | ns     |
| VIO > 2.7V                                         |          |       |       | 18    | ns     |
| VIO > 2.3V                                         |          |       |       | 23    | ns     |
| VIO > 1.8V                                         |          |       |       | 28    | ns     |
| CS/RESET/PD High to SDO High Impedance             | t DIS    |       |       | 25    | ns     |
| DINValid Setup Time from SCK Rising Edge           | t DINS   | 4     |       |       | ns     |
| DINValid Hold Time from SCK Rising Edge            | t DINH   | 4     |       |       | ns     |
| CNV Rising to CS                                   | t CCS    | 5     |       |       | ns     |
| RESET/PD High Pulse                                | t RH     | 5     |       |       | ns     |

## Enhanced Product

## Timing Diagrams

<!-- image -->

Figure 2. Load Circuit for Digital Interface Timing

<!-- image -->

Figure 3. Voltage Levels for Timing

<!-- image -->

<!-- image -->

## NOTES

1. DATA ACCESS CAN OCCUR DURING A CONVERSION (tDDC ), AFTER A CONVERSION (tDAC ), OR BOTH DURING AND AFTER A CONVERSION. THE CONVERSION RESULT AND THE CFG REGISTER ARE UPDATED AT THE END OF A CONVERSION (EOC).
2. DATA ACCESS CAN ALSO OCCUR UP TO tDDCA  WHILE BUSY IS ACTIVE (SEE THE ADAS3022 DATA SHEET FOR DETAILS). ALL OF THE BUSY TIME CAN BE USED TO ACQUIRE DATA.
3. A TOTAL OF 16 SCK FALLING EDGES IS REQUIRED FOR A CONVERSION RESULT. AN ADDITIONAL 16 EDGES ARE REQUIRED TO READ BACK THE CFG RESULT ASSOCIATED WITH THE CURRENT CONVERSION.
4. CS CAN BE HELD LOW OR CONNECTED TO CNV. CS WITH FULL INDEPENDENT CONTROL IS SHOWN IN THIS FIGURE.
5. FOR OPTIMAL PERFORMANCE, DATA ACCESS SHOULD NOT OCCUR DURING THE SAMPLING EDGE. A MINIMUM TIME OF THE APERTURE DELAY (tAD ) SHOULD ELAPSE PRIOR TO DATA ACCESS.

Figure 4. General Timing Diagram

15983-028

## ABSOLUTE MAXIMUM RATINGS

## Table 4.

| Parameter                                                                                                                                                                                                                                                                                                                                                                                           | Rating                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analog Inputs/Outputs INx,COMtoAGND AUX+, AUX- toAGND REFx toAGND REFIN toAGND REFN toAGND Ground Voltage Differences AGND, RGND,DGND Supply Voltages VDDH toAGND VSSH to AGND AVDD, DVDD,VIO to AGND ACAP, DCAP, RCAP toGND Digital Inputs/Outputs CNV, DIN, SCK, RESET, PD, CS toDGND SDO, BUSY toDGND Internal Power Dissipation Junction Temperature Storage Temperature Range ThermalImpedance | VSSH-0.3VtoVDDH+0.3V -0.3VtoAVDD+0.3V AGND - 0.3V to AVDD + 0.3V AGND - 0.3V to +2.7V ±0.3V ±0.3V -0.3V to +16.5V +0.3V to -16.5V -0.3V to +7V -0.3V to +2.7V -0.3V to VIO + 0.3V -0.3V to VIO + 0.3V 2W 125°C -65°C to +125°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.    | Mnemonic   | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                                |
|------------|------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 to 4     | IN0 to IN3 | AI       | Input Channel 0 to Input Channel 3.                                                                                                                                                                                                                                                                                                                                        |
| 5          | AUX+       | AI       | Auxiliary Input Channel Positive Input.                                                                                                                                                                                                                                                                                                                                    |
| 6 to 9     | IN4 to IN7 | AI       | Input Channel 4 to Input Channel 7.                                                                                                                                                                                                                                                                                                                                        |
| 10         | COM        | AI       | IN[7:0] CommonChannel Input. The IN[7:0] input channels can be referenced to a common point. The maximum voltage on this pin is ±10.24V for all PGIA gains except for a PGIA gain of 0.16, in which case, the maximum voltage on this pin is ±12.228 V. AUX+ and AUX- are not referenced to COM.                                                                           |
| 11         | CS         | DI       | Chip Select. Active low signal. Enables the digital interface for writing and reading data. Use this pin when sharing the serial bus. For a dedicated ADAS3022-EP serial interface, CS can be tied to DGNDor CNV to simplify the interface.                                                                                                                                |
| 12         | DIN        | DI       | Data Input. Serial data input used for writing the 16-bit configuration word (CFG) that is latched on SCK rising edges. CFGis aninternal register that is updated ontherising edgeoftheendofaconversion, which is the falling edge of BUSY. The configuration register can be written to during and after a conversion.                                                    |
| 13         | RESET      | DI       | Asynchronous Reset. A low to high transition resets the ADAS3022-EP. The current conversion, if active, is aborted and CFG is reset to the default state.                                                                                                                                                                                                                  |
| 14, 29, 30 | NC         | N/A      | No Connect. This pin is not connected internally.                                                                                                                                                                                                                                                                                                                          |
| 15         | PD         | DI       | Power-Down. A low to high transition powers down the ADAS3022-EP, minimizing the bias current. Note that this pin must be held high until the user is ready to power on the device; after powering on the device, the user must wait 100 ms until the reference is enabled and then wait for the completion of two dummyconversions before the device is ready to convert. |
| 16         | SCK        | DI       | Serial Clock Input.The DIN and SDO data sent to and from the ADAS3022-EP are synchronized with SCK.                                                                                                                                                                                                                                                                        |
| 17         | VIO        | P        | Digital Interface Supply. Nominally, this supply is at the same voltage as the supply of the host interface: 1.8 V, 2.5 V, 3.3 V, or 5 V.                                                                                                                                                                                                                                  |
| 18         | SDO        | DO       | Serial Data Output.The conversion result is output on this pin and is synchronized to SCK falling edges. The conversion result is output in twos complement format.                                                                                                                                                                                                        |
| 19         | BUSY       | DO       | Busy Output. An active high signal on this pin indicates that a conversion is in process. Reading or writing data during the quiet conversion phase (t QUIET ) may cause incorrect bit decisions.                                                                                                                                                                          |
| 20         | CNV        | DI       | Convert Input. A conversion is initiated on the rising edge of this pin.                                                                                                                                                                                                                                                                                                   |
| 21, 22     | DGND       | P        | Digital Ground. Connect these pins to the system digital ground plane.                                                                                                                                                                                                                                                                                                     |
| 23, 24     | AGND       | P        | Analog Ground. Connect these pins to the system analog ground plane.                                                                                                                                                                                                                                                                                                       |
| 25         | DCAP       | P        | Internal 2.5V Digital Regulator Output. Decouple this internally regulated output using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                                                                                                                                                                    |
| 26         | ACAP       | P        | Internal 2.5V Analog Regulator Output. This regulator supplies power to the internal ADC core and all of the supporting analog circuits with the exception of the internal reference. Decouple this internally regulated output using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                      |

## ADAS3022-EP

| Pin No.   | Mnemonic   | Type 1   | Description                                                                                                                                                                                                                                       |
|-----------|------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 27        | DVDD       | P        | Digital 5V Supply. Decouple this supply using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                                                                                     |
| 28        | AVDD       | P        | Analog 5V Supply. Decouple this supply using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                                                                                      |
| 31        | RCAP       | P        | Internal 2.5V Analog Regulator Output. This regulator supplies power to the internal reference. Decouple this pin using a 1 μF capacitor connected to RCAP and a 0.1 μF local capacitor.                                                          |
| 32        | REFIN      | AI/O     | Internal 2.5V Band Gap Reference Output, Reference Buffer Input, or Reference Power-Down Input. See the Voltage Reference Input/Output section of the ADAS3022 data sheet for more information.                                                   |
| 33, 34    | REF1, REF2 | AI/O     | Reference Input/Output. Regardless of the reference method, these pins need individual decoupling using external 10 μF ceramic capacitors connected as close to REF1, REF2, and REFN as possible. REF1 and REF2 must be tied together externally. |
| 35        | RGND       | P        | Reference Supply Ground. Connect this pin to the system analog ground plane.                                                                                                                                                                      |
| 36, 37    | REFN       | P        | Reference Input/Output Ground. Connect the 10 μF capacitors on REF1 and REF2 to these pins, and connect these pins to the system analog ground plane.                                                                                             |
| 38        | VSSH       | P        | High Voltage Analog Negative Supply. Nominally, the supply of this pin should be -15 V. Decouple this pin using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                   |
| 39        | VDDH       | P        | High Voltage Analog Positive Supply. Nominally, the supply of this pin should be +15 V. Decouple this pin using a 10 μF capacitor and a 0.1 μF local capacitor.                                                                                   |
| 40        | AUX- EPAD  | AI       | Auxiliary Input Channel Negative Input. Exposed Paddle. Connect the exposed paddle to VSSH.                                                                                                                                                       |

## TYPICAL PERFORMANCE CHARACTERISTICS

VDDH = 15 V, VSSH = -15 V, AVDD = DVDD = 5 V, VIO = 1.8 V to AVDD, unless otherwise noted.

Figure 6. Integral Nonlinearity (INL) vs. Code, PGIA Gain = 0.16, 0.2, 0.4, 0.8, and 1.6

<!-- image -->

Figure 7. Integral Nonlinearity vs. Code, PGIA Gain = 3.2

<!-- image -->

15983-106

<!-- image -->

Figure 8. Integral Nonlinearity vs. Code, PGIA Gain = 6.4

<!-- image -->

Figure 9. Differential Nonlinearity (DNL) vs. Code for All PGIA Gains

Figure 10. Histogram of a DC Input at Code Center, PGIA Gain = 0.16, 0.2, 0.4, 0.8, and 1.6

<!-- image -->

Figure 11. Histogram of a DC Input at Code Center, PGIA Gain = 3.2

<!-- image -->

## ADAS3022-EP

<!-- image -->

Figure 12. Histogram of a DC Input at Code Center, PGIA Gain = 6.4

<!-- image -->

Figure 13. Offset Drift, PGIA Gain = 0.16, 0.2, 0.4, 0.8, and 1.6

<!-- image -->

Figure 14. Offset Drift, PGIA Gain = 3.2

<!-- image -->

Figure 15. Offset Drift, PGIA Gain = 6.4

Figure 16. Reference Buffer Drift, External 2.5 V Reference

<!-- image -->

Figure 17. Reference Buffer Drift, Internal 2.5 V Reference

<!-- image -->

Figure 18. 10 kHz FFT, PGIA Gain = 0.16

<!-- image -->

15983-122

<!-- image -->

Figure 19. 10 kHz FFT, PGIA Gain = 0.2

<!-- image -->

Figure 20. 10 kHz FFT, PGIA Gain = 0.4

Figure 21. 10 kHz FFT, PGIA Gain = 0.8

<!-- image -->

Figure 22. 10 kHz FFT, PGIA Gain = 1.6

<!-- image -->

15983-126

Figure 23. 10 kHz FFT, PGIA Gain = 3.2

<!-- image -->

<!-- image -->

Figure 24. 10 kHz FFT, PGIA Gain = 6.4

<!-- image -->

Figure 25. SNR vs. Frequency

Figure 26. SINAD vs. Frequency

<!-- image -->

Figure 27. THD vs. Frequency

<!-- image -->

15983-300

Figure 28. Crosstalk vs. Frequency

<!-- image -->

15983-139

Figure 29. CMRR vs. Frequency

<!-- image -->

<!-- image -->

Figure 30. Power Supply Rejection Ration (PSRR) vs. Frequency

<!-- image -->

Figure 31. AVDD Current vs. AVDD Supply, Internal Reference

<!-- image -->

Figure 32. AVDD Current vs. AVDD Supply, External Reference

Figure 33. AVDD Current vs. Throughput, Internal Reference

<!-- image -->

Figure 34. AVDD Current vs. Throughput, External Reference

<!-- image -->

15983-136

Figure 35. DVDD Current vs. Throughput

<!-- image -->

Figure 36. VDDH Current vs. Throughput

<!-- image -->

15983-138

<!-- image -->

Figure 37. VSSH Current vs. Throughput

<!-- image -->

Figure 38. VDDH Current vs. Temperature

<!-- image -->

Figure 39. VSSH Current vs. Temperature

Figure 40. AVDD Current vs. Temperature

<!-- image -->

Figure 41. DVDD Current vs. Temperature

<!-- image -->

<!-- image -->

Figure 42. VIO Current vs. Temperature

<!-- image -->

Figure 43. SNR vs. Temperature

<!-- image -->

Figure 44. THD vs. Temperature

<!-- image -->

<!-- image -->

Figure 45. Gain Error vs. Temperature

Figure 46. Offset Error vs. Temperature

<!-- image -->

Figure 47. Offset and Gain Errors of the AUX +/AUX- ADC Channel Pair vs. Temperature

<!-- image -->

<!-- image -->

Figure 48. Temperature Sensor Output Code vs. Temperature

Figure 49. Large Signal Frequency Response vs. Gain

<!-- image -->

Figure 50. Temperature Sensor Output Error vs. Throughput

<!-- image -->

15983-154

## OUTLINE DIMENSIONS

<!-- image -->

(See the ADAS3022 Data Sheet for Additional Information)

| Model 1            | Temperature Range   | Package Description                           | Package Option   |
|--------------------|---------------------|-----------------------------------------------|------------------|
| ADAS3022SCPZ-EP    | -55°C to +105°C     | 40-Lead Lead Frame Chip Scale Package [LFCSP] | CP-40-15         |
| ADAS3022SCPZ-EP-RL | -55°C to +105°C     | 40-Lead Lead Frame Chip Scale Package [LFCSP] | CP-40-15         |
| EVAL-ADAS3022EDZ   |                     | Evaluation Board                              |                  |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

11-22-2013-B