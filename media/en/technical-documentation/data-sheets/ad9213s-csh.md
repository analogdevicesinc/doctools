<!-- lastmod 2024-07-25 -->
<!-- image -->

## AD9213S-CSH

## 12-Bit, 10.25 GSPS, JESD204B, RF Analog-to-Digital Converter

## FEATURES

- Low power dissipation: &lt;4.6 W typical at 10 GSPS
- Integrated input buffer (6.5 GHz input bandwidth)
- 1.4 V p-p full-scale analog input with R IN = 50 Ω
- Overvoltage protection
- High instantaneous dynamic range
- NSD
- -155.1 dBFS/Hz at 10 GSPS with -9 dBFS, 170 MHz input
- -153 dBFS/Hz at 10 GSPS with -1 dBFS, 170 MHz input
- SFDR: 70 dBFS at 10 GSPS with -1 dBFS, 1000 MHz input
- SFDR excluding H2 and H3 (worst other spur): -89 dBFS at 10 GSPS with -1 dBFS, 1000 MHz input
- 16-lane JESD204B output (up to 16 Gbps line rate)
- Multichip synchronization capable with 1 sample accuracy ► DDC NCO synchronization included
- Integrated DDC
- Selectable decimation factors
- 16 profile settings for fast frequency hopping
- Fast overrange detection for efficient AGC
- On-chip temperature sensor
- On-chip negative voltage generators
- Low CER: &lt;1 × 10 -16
- 12 mm × 12 mm, 192-ball BGA-ED package

## COMMERCIAL SPACE FEATURES

- Supports aerospace applications
- Certificate of conformance
- Wafer diffusion lot traceability
- Qualification based on flows per NASA PEM-INST-001 and SAE AS6294
- Burn-in, life test, and deltas analysis
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Radiation benchmark
- No single event latchup (SEL) occurs at effective linear energy transfer (LET): ≤87 MeV-cm 2 /mg
- Outgassing characterization

## APPLICATIONS

- Low and medium earth orbit (LEO/MEO) satellites
- Geosynchronous earth orbit (GEO) satellites
- Avionics
- Ultrawideband satellite receiver

Rev. A

DOCUMENT FEEDBACK

TECHNICAL SUPPORT

## GENERAL DESCRIPTION

The AD9213S-CSH is a single, 12-bit, 10.25 GSPS, RF analogto-digital converter (ADC) with a 6.5 GHz input bandwidth. The AD9213S-CSH supports high dynamic range frequency and time domain applications requiring wide instantaneous bandwidth and low conversion error rates (CERs). The AD9213S-CSH features a 16-lane JESD204B interface to support maximum bandwidth capability.

The AD9213S-CSH achieves dynamic range and linearity performance while consuming &lt;4.6 W typical. The device is based on an interleaved pipeline architecture and features a proprietary calibration and randomization technique that suppresses interleaving spurious artifacts into its noise floor. The linearity performance of the AD9213S-CSH is preserved by a combination of on-chip dithering and calibration, which results in excellent spurious-free performance over a wide range of input signal conditions.

Applications that require less instantaneous bandwidth can benefit from the on-chip, digital signal processing (DSP) capability of the AD9213S-CSH that reduces the output data rate along with the number of JESD204B lanes required to support the device. The DSP path includes a digital downconverter (DDC) with a 48-bit, numerically controlled oscillator (NCO), followed by an in-phase/ quadrature (I/Q) digital decimator stage that allows selectable decimation rates that are factors of two or three. For fast frequency hopping applications, the AD9213S-CSH NCO supports up to 16 profile settings with a separate trigger input, allowing wide surveillance frequency coverage at a reduced JESD204B lane count.

The AD9213S-CSH supports sample accurate multichip synchronization that includes synchronization of the NCOs. The AD9213SCSH is offered in a 12 mm × 12 mm, 192-ball ball grid array (BGA) package and is specified over a junction temperature range of -20°C to +115°C. Additional application and technical information can be found in the Commercial Space Products Program brochure and the AD9213 data sheet.

## TABLE OF CONTENTS

| Features................................................................ 1 Commercial Space Features.................................1 Applications........................................................... 1 General Description...............................................1 Functional Block Diagram......................................3 Specifications........................................................ 4 AC Specifications...............................................6 Digital Specifications..........................................7 Switching Specifications.....................................8 Life Test and Burn-In Delta Specifications..........9   | Absolute Maximum Ratings.................................12 Thermal Characteristics................................... Explanation of Test Outgas Testing................................................. 12 Radiation Features...........................................12 ESD Caution.....................................................13 Pin Configuration and Function Descriptions...... 14 Typical Performance Characteristics...................17 Outline Dimensions............................................. 24   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Radiation Test and Limit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 12 Levels................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| REVISION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ordering Guide.................................................24                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Specifications..............9                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7/2024-Rev. 0 to Rev. A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Changes to Commercial Space Features                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Section...........................................................................................1                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Changes to Applications Section.....................................................................................................................1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Added Radiation Features Section and Table 11;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Renumbered Sequentially............................................... 12                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

1/2022-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and analog input (A IN ) = -1.0 dBFS. Minimum and maximum specifications represent performance at -20°C ≤ T J ≤ +115°C, unless otherwise noted. Typical specifications represent performance at T J = 70°C.

Table 1.

| Parameter                                                 | Test Level   | Temperature (T J )   | Min        | Typ   | Max    | Unit    |
|-----------------------------------------------------------|--------------|----------------------|------------|-------|--------|---------|
| RESOLUTION                                                | II           | Full                 | 12         |       |        | Bits    |
| ACCURACY                                                  |              |                      |            |       |        |         |
| No Missing Codes                                          | II           | Full                 | Guaranteed |       |        |         |
| Offset Error                                              | I            | 70°C                 | -2.0       | 0     | +0.7   | LSB     |
|                                                           | I            | Full                 | -11        |       | +11    | LSB     |
| Gain Error                                                | I            | 70°C                 | 0.1        | 7.4   | 12.7   | %FSR    |
|                                                           | I            | Full                 | -7.0       |       | +17.0  | %FSR    |
| Differential Nonlinearity (DNL)                           | I            | 70°C                 | -0.4       | ±0.3  | +0.5   | LSB     |
|                                                           | I            | Full                 | -0.5       |       | +0.6   | LSB     |
| Integral Nonlinearity (INL)                               | I            | 70°C                 | -4.2       | ±2.4  | +2.3   | LSB     |
|                                                           | I            | Full                 | -8.2       |       | +6.2   | LSB     |
| ANALOG INPUTS                                             |              |                      |            |       |        |         |
| Differential Input Voltage Range (Internal V REF = 0.5 V) | III          | 70°C                 |            | 1.4   |        | V p-p   |
| Resistance (R IN )                                        | I            | 70°C                 | 48.0       | 50.0  | 51.8   | Ω       |
|                                                           | I            | Full                 | 47.8       |       | 52.2   | Ω       |
| Capacitance                                               | III          | 70°C                 |            | 1     |        | pF      |
| Internal Common-Mode Voltage (V CM )                      | I            | Full                 | 0.45       | 0.5   | 0.5    | V       |
| Analog Full Power Bandwidth (Internal Termination)        | III          | 70°C                 |            | 6.5   |        | GHz     |
| Input Referred Noise                                      | III          | 70°C                 |            | 1.72  |        | LSB RMS |
| POWER SUPPLIES                                            |              |                      |            |       |        |         |
| BVDD2                                                     | II           | Full                 | 1.95       | 2.0   | 2.05   | V       |
| BVNN1                                                     | II           | Full                 | -1.025     | -1.0  | -0.975 | V       |
| AVNN1                                                     | II           | Full                 | -1.025     | -1.0  | -0.975 | V       |
| BVNN2 (Internally Generated)                              | II           | Full                 | -2.05      | -2.0  | -1.95  | V       |
| BVDD3 (Internally Generated)                              | II           | Full                 | 2.925      | 3.0   | 3.075  | V       |
| AVDD                                                      | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| CLKVDD_LF                                                 | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| PLLVDD2                                                   | II           | Full                 | 1.95       | 2.0   | 2.05   | V       |
| AVDDFS8                                                   | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| FVDD                                                      | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| VDD_NVG                                                   | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| RVDD2                                                     | II           | Full                 | 1.95       | 2.0   | 2.05   | V       |
| SVDD2                                                     | II           | Full                 | 1.75       | 2.0   | 2.05   | V       |
| JVDD2                                                     | II           | Full                 | 1.95       | 2.0   | 2.05   | V       |
| DVDD                                                      | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| JVTT                                                      | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| JVDD                                                      | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| TMU_AVDD2                                                 | II           | Full                 | 1.95       | 2.0   | 2.05   | V       |
| TMU_DVDD1                                                 | II           | Full                 | 0.975      | 1.0   | 1.025  | V       |
| Dynamic Supply Currents                                   |              |                      |            |       |        |         |
| I BVDD2                                                   | I            | Full                 |            | 112   | 147    | mA      |
| I BVNN1                                                   | I            | Full                 |            | -116  | -151   | mA      |
| I AVNN1                                                   | I            | Full                 |            | -1.8  | -2     | mA      |
| I BVNN2 1                                                 |              | Full                 | N/A 2      | N/A 2 | N/A 2  | mA      |
| I BVDD3 1                                                 |              | Full                 | N/A 2      | N/A 2 | N/A 2  | mA      |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                            | Test Level   | Temperature (T J )   | Min   | Typ   | Max   | Unit   |
|------------------------------------------------------|--------------|----------------------|-------|-------|-------|--------|
| I AVDD                                               | I            | Full                 |       | 2180  | 2790  | mA     |
| I CLKVDD_LF                                          | I            | Full                 |       | 31    | 37    | mA     |
| I PLLVDD2                                            | I            | Full                 |       | 1     | 2     | mA     |
| I AVDDFS8                                            | I            | Full                 |       | 38    | 56    | mA     |
| I FVDD                                               | I            | Full                 |       | 31    | 35    | mA     |
| I VDD_NVG 3                                          | I            | Full                 |       | 159   | 195   | mA     |
| I VDD_NVG 4                                          | I            | Full                 |       | 387   | 478   | mA     |
| I RVDD2                                              | I            | Full                 |       | 35    | 38    | mA     |
| I SVDD2                                              | I            | Full                 |       | 0.3   | 1     | mA     |
| I JVDD2                                              | I            | Full                 |       | 21    | 24    | mA     |
| I DVDD 5                                             | I            | Full                 |       | 643   | 1055  | mA     |
| I JVTT                                               | I            | Full                 |       | 173   | 247   | mA     |
| I JVDD                                               | I            | Full                 |       | 611   | 800   | mA     |
| I TMU_AVDD2                                          | I            | Full                 |       | 1.7   | 2     | mA     |
| I TMU_DVDD1                                          | I            | Full                 |       | 1     | 2     | mA     |
| Power-Down Supply Currents                           |              |                      |       |       |       |        |
| I BVDD2                                              | I            | Full                 |       | 0.5   | 0.9   | mA     |
| I BVNN1                                              | I            | Full                 |       | -11   | -9    | mA     |
| I AVNN1                                              | I            | Full                 |       | -0.15 | -0.10 | mA     |
| I BVNN2 1                                            | I            | Full                 | N/A 2 | N/A 2 | N/A 2 | mA     |
| I BVDD3 1                                            | I            | Full                 | N/A 2 | N/A 2 | N/A 2 | mA     |
| I AVDD                                               | I            | Full                 |       | 137   | 410   | mA     |
| I CLKVDD_LF                                          | I            | Full                 |       | 1.1   | 3     | mA     |
| I PLLVDD2                                            | I            | Full                 |       | 1     | 1.24  | mA     |
| I AVDDFS8                                            | I            | Full                 |       | 3.5   | 14.5  | mA     |
| I FVDD                                               | I            | Full                 |       | 1.5   | 5.3   | mA     |
| I VDD_NVG 3                                          | I            | Full                 |       | 0.8   | 2.8   | mA     |
| I RVDD2                                              | I            | Full                 |       | 0.65  | 0.82  | mA     |
| I SVDD2                                              | I            | Full                 |       | 0.23  | 0.4   | mA     |
| I JVDD2                                              | I            | Full                 |       | 0.2   | 0.4   | mA     |
| I DVDD 5                                             | I            | Full                 |       | 60    | 240   | mA     |
| I JVTT                                               | I            | Full                 |       | 20.8  | 85.7  | mA     |
| I JVDD                                               | I            | Full                 |       | 60    | 180   | mA     |
| I TMU_AVDD2                                          | I            | Full                 |       | 1.7   | 2     | mA     |
| I TMU_DVDD1                                          | I            | Full                 |       | 0.25  | 0.7   | mA     |
| Power Consumption 6                                  |              |                      |       |       |       |        |
| Total Power Dissipation (Including Output Drivers) 7 | I            | Full                 |       | 4.44  | 5.93  | W      |
| Power-Down                                           | I            | Full                 |       | 114   | 970   | mW     |
| Standby                                              | I            | Full                 |       | 2.7   | 5     | W      |

## SPECIFICATIONS

## AC SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and A IN = -1.0 dBFS. Minimum and maximum specifications represent performance at -20°C ≤ T J ≤ +115°C, unless otherwise noted. Typical specifications represent performance at T J = 70°C.

Table 2.

| Parameter                                                    | Test Level   | Temperature (T J )   | Min   | Typ    | Max   | Unit      |
|--------------------------------------------------------------|--------------|----------------------|-------|--------|-------|-----------|
| NOISE SPECTRAL DENSITY (NSD)                                 |              |                      |       |        |       |           |
| At 170 MHz, -1 dBFS                                          | III          | 70°C                 |       | -153   |       | dBFS/Hz   |
| At 170 MHz, -9 dBFS                                          | III          | 70°C                 |       | -155.1 |       | dBFS/Hz   |
| At 170 MHz, -30 dBFS                                         | III          | 70°C                 |       | -155.7 |       | dBFS/Hz   |
| SIGNAL-TO-NOISE RATIO (SNR)                                  |              |                      |       |        |       |           |
| Input Frequency (f IN ) = 170 MHz                            | I            | 70°C                 | 50.2  | 55.9   |       | dBFS      |
| f = 1000 MHz                                                 | I III        | Full 70°C            | 45.4  | 55.8   |       | dBFS      |
| IN f = 2600 MHz                                              | I            | 70°C                 | 44.1  |        |       | dBFS dBFS |
| IN                                                           | I            | Full                 | 43.8  | 51.0   |       | dBFS      |
| f IN = 4000 MHz                                              | III          | 70°C                 |       | 49.9   |       | dBFS      |
| SIGNAL-TO-NOISE AND DISTORTION (SINAD)                       |              |                      |       |        |       |           |
| f IN = 170 MHz                                               | I            | 70°C                 | 49.1  | 55.6   |       | dBFS      |
|                                                              | I            | Full                 | 46    |        |       | dBFS      |
| f IN = 1000 MHz                                              | III          | 70°C                 |       | 55.6   |       | dBFS      |
| f IN = 2600 MHz                                              | I            | 70°C                 | 43    | 50.8   |       | dBFS      |
|                                                              | I            | Full                 | 42.7  |        |       | dBFS      |
| f IN = 4000 MHz                                              | III          | 70°C                 |       | 49.4   |       | dBFS      |
| EFFECTIVE NUMBER OF BITS (ENOB)                              |              |                      |       |        |       |           |
| f IN = 170 MHz                                               | I            | 70°C                 | 7.86  | 8.9    |       | Bits      |
|                                                              | I            | Full                 | 7.35  |        |       | Bits      |
| f IN = 1000 MHz                                              | III          | 70°C                 |       | 8.9    |       | Bits      |
| f IN = 2600 MHz                                              | I            | 70°C                 | 6.85  | 8.1    |       | Bits      |
|                                                              | I            | Full                 | 6.8   |        |       | Bits      |
| f IN = 4000 MHz                                              | III          | 70°C                 |       | 7.9    |       | Bits      |
| SPURIOUS-FREE DYNAMIC RANGE (SFDR), SECOND OR THIRD HARMONIC |              |                      |       |        |       |           |
| f IN = 170 MHz                                               | I            | 70°C                 | 64.44 | 70     |       | dBFS      |
|                                                              | I            | Full                 | 57.3  |        |       | dBFS      |
| f IN = 1000 MHz                                              | III          | 70°C                 |       | 70     |       | dBFS      |
| f IN = 2600 MHz                                              | I            | 70°C                 | 61.9  | 65     |       | dBFS      |
|                                                              | I            | Full                 | 62    |        |       | dBFS      |
| f IN = 4000 MHz                                              | III          | 70°C                 |       | 60     |       | dBFS      |
| SECOND HARMONIC (H2)                                         |              |                      |       |        |       |           |
| f IN = 170 MHz                                               | I            | 70°C                 |       | -71    | -68.4 | dBFS      |
|                                                              | I            | Full                 |       |        | -63   | dBFS      |
| f IN = 1000 MHz                                              | III          | 70°C                 |       | -77    |       | dBFS      |
| f IN = 2600 MHz                                              | I            | 70°C                 |       | -65    | -62   | dBFS      |
|                                                              | I            | Full                 |       |        | -62   | dBFS      |
| f IN = 4000 MHz                                              | III          | 70°C                 |       | -60    |       | dBFS      |

## SPECIFICATIONS

Table 2. (Continued)

| Parameter                                                                                       | Test Level   | Temperature (T J )   | Min   | Typ   | Max   | Unit   |
|-------------------------------------------------------------------------------------------------|--------------|----------------------|-------|-------|-------|--------|
| THIRD HARMONIC (H3)                                                                             |              |                      |       |       |       |        |
| f IN = 170 MHz                                                                                  | I            | 70°C                 |       | -70   | -64.4 | dBFS   |
|                                                                                                 | I            | Full                 |       |       | -58   | dBFS   |
| f IN = 1000 MHz                                                                                 | III          | 70°C                 |       | -70   |       | dBFS   |
| f IN = 2600 MHz                                                                                 | I            | 70°C                 |       | -72   | -65   | dBFS   |
|                                                                                                 | I            | Full                 |       |       | -65   | dBFS   |
| f IN = 4000 MHz                                                                                 | III          | 70°C                 |       | -74   |       | dBFS   |
| WORST OTHER (WO), EXCLUDING SECOND OR THIRD HARMONIC (&#124;WO&#124; = SFDR EXCLUDING H2 OR H3) |              |                      |       |       |       |        |
| f IN = 170 MHz                                                                                  | I            | 70°C                 |       | -88   | -82   | dBFS   |
|                                                                                                 | I            | Full                 |       |       | -68   | dBFS   |
| f IN = 1000 MHz                                                                                 | III          | 70°C                 |       | -89   |       | dBFS   |
| f IN = 2600 MHz                                                                                 | I            | 70°C                 |       | -89   | -76   | dBFS   |
|                                                                                                 | I            | Full                 |       |       | -72   | dBFS   |
| f IN = 4000 MHz                                                                                 | III          | 70°C                 |       | -86   |       | dBFS   |
| TWO-TONE INTERMODULATION DISTORTION (IMD3, 2f IN1 - f IN2 ) f IN1 AND f IN2 = -7.0 dBFS         |              |                      |       |       |       |        |
| f IN1 = 1842 MHz, f IN2 = 1847 MHz                                                              | III          | 70°C                 |       | -77   |       | dBFS   |
| f IN1 = 2138 MHz, f IN2 = 2143 MHz                                                              | III          | 70°C                 |       | -76   |       | dBFS   |
| TWO-TONE INTERMODULATION DISTORTION (IMD3, 2f IN1 - f IN2 ) f IN1 AND f IN2 = -15.0 dBFS        |              |                      |       |       |       |        |
| f IN1 = 1842 MHz, f IN2 = 1847 MHz                                                              | III          | 70°C                 |       | -99   |       | dBFS   |
| f IN1 = 2138 MHz, f IN2 = 2143 MHz                                                              | III          | 70°C                 |       | -101  |       | dBFS   |

## DIGITAL SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and A IN = -1.0 dBFS. Minimum and maximum specifications represent performance at -20°C ≤ T J ≤ +115°C, unless otherwise noted. Typical specifications represent performance at T J = 70°C.

Table 3.

| Parameter                                  | Min          | Typ                                                 | Max          | Unit     |
|--------------------------------------------|--------------|-----------------------------------------------------|--------------|----------|
| CLOCK INPUTS (CLK_P, CLK_N)                |              |                                                     |              |          |
| Logic Compliance                           |              | Low voltage positive emitter coupled logic (LVPECL) |              |          |
| Differential Input Voltage                 | 300          | 800                                                 | 1800         | mV p - p |
| Common-Mode Input Voltage                  |              | 0.675                                               |              | V        |
| Input Resistance (Differential)            |              | 106                                                 |              | Ω        |
| Input Capacitance                          |              | 0.9                                                 |              | pF       |
| SYSREF_x INPUTS                            |              |                                                     |              |          |
| Logic Compliance                           |              | Low voltage differential signaling (LVDS)           |              |          |
| Differential Input Voltage                 | 500          | 700                                                 | 800          | mV p-p   |
| Common-Mode Input Voltage                  |              | 1.2                                                 |              | V        |
| Input Resistance (Differential)            |              | 100                                                 |              | Ω        |
| Input Capacitance                          |              | 0.5                                                 |              | pF       |
| LOGIC INPUTS (SDIO, SCLK, CSB, GPIO, PWDN) |              |                                                     |              |          |
| Logic Compliance                           |              | CMOS                                                |              |          |
| Voltage                                    |              |                                                     |              |          |
| Logic 1                                    | 0.70 × SVDD2 |                                                     |              | V        |
| Logic 0                                    | 0            |                                                     | 0.30 × SVDD2 | V        |
| Input Resistance (Single-Ended)            |              | 44                                                  |              | kΩ       |

## SPECIFICATIONS

Table 3. (Continued)

| Parameter                                         | Min          | Typ   | Max          | Unit   |
|---------------------------------------------------|--------------|-------|--------------|--------|
| SYNCINB_x INPUT                                   |              |       |              |        |
| Logic Compliance                                  |              | LVDS  |              |        |
| Input Voltage                                     |              |       |              |        |
| Differential                                      | 400          | 800   | 1800         | mV p-p |
| Common Mode                                       |              | 0.675 | 2.0          | V      |
| Input Resistance (Differential)                   |              | 18    |              | kΩ     |
| Input Capacitance                                 |              | 1     |              | pF     |
| LOGIC OUTPUT (SDIO, GPIO, FD)                     |              |       |              |        |
| Logic Compliance                                  |              | CMOS  |              |        |
| Voltage                                           |              |       |              |        |
| Logic 1, Output Logic Current High (I OH ) = 4 mA | SVDD2 - 0.45 |       |              | V      |
| Logic 0, Output Logic Current Low (I OL ) = 4 mA  | 0            |       | 0.45         | V      |
| RESET (RSTB) INPUT                                |              |       |              |        |
| Logic Compliance                                  |              | CMOS  |              |        |
| Voltage                                           |              |       |              |        |
| Logic 1                                           | 0.70 × SVDD2 |       |              | V      |
| Logic 0                                           | 0            |       | 0.30 × SVDD2 | V      |
| Input Resistance                                  |              | 77    |              | kΩ     |

## SWITCHING SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and A IN = -1.0 dBFS. Minimum and maximum specifications represent performance at -20°C ≤ T J ≤ +115°C, unless otherwise noted. Typical specifications represent performance at T J = 70°C.

Table 4.

| Parameter                                     | Test Level   | Temperature (T J )   | Min   | Typ      | Max   | Unit         |
|-----------------------------------------------|--------------|----------------------|-------|----------|-------|--------------|
| CLOCK (CLK)                                   |              |                      |       |          |       |              |
| Maximum Clock Rate                            | III          | Full                 |       |          | 10.25 | GSPS         |
| Minimum Clock Rate                            | III          | Full                 | 2.5   |          |       | GSPS         |
| Clock Duty Cycle                              | II           | Full                 | 45    | 50       | 55    | %duty cycle  |
| LATENCY                                       |              |                      |       |          |       |              |
| Pipeline Latency                              | III          | 70°C                 |       | 367      |       | Clock cycles |
| Fast Detect (FD) Latency                      | III          | 70°C                 |       | 170      |       | Clock cycles |
| OUTPUT PARAMETERS (SERDOUT_x[x], x = 0 to 15) |              |                      |       |          |       |              |
| Logic Compliance                              | II           | Full                 |       | JESD204B |       |              |
| Differential Output Voltage                   | II           | Full                 | 560   | 770      |       | mV p-p       |
| Differential Termination Impedance            | II           | Full                 | 100   | 120      |       | Ω            |
| Unit Interval (UI) 1                          | II           | Full                 | 62.5  | 80       | 588.2 | ps           |
| Rise Time (t R ) (20% to 80% into 100 Ω Load) | III          | 70°C                 |       | 26       |       | ps           |
| Fall Time (t F ) (20% to 80% into 100 Ω Load) | III          | 70°C                 |       | 26       |       | ps           |
| Phase-Locked Loop (PLL) Lock Time             | III          | 70°C                 |       | 5        |       | ms           |
| Lane Rate (Nonreturn to Zero) 2               | II           | Full                 | 1.7   | 12.5     | 16    | Gbps         |
| WAKE-UP TIME                                  |              |                      |       |          |       |              |
| Standby                                       | III          | 70°C                 |       | 1        |       | ms           |
| Power-Down                                    | III          | 70°C                 |       | 25       |       | ms           |

## SPECIFICATIONS

## Table 4. (Continued)

| Parameter                  | Test Level   | Temperature (T J )   | Typ   | Max   | Unit       |
|----------------------------|--------------|----------------------|-------|-------|------------|
| APERTURE                   |              |                      |       |       |            |
| Delay (t A )               | III          | 70°C                 | 120   |       | ps         |
| Uncertainty (Jitter, t J ) | III          | 70°C                 | 50    |       | (f S ) rms |

## LIFE TEST AND BURN-IN DELTA SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and A IN = -1.0 dBFS. Deltas are performed at room temperature (T A = 25°C) only, which represents performance at T J = 70°C.

## Table 5.

| Parameter 1            | Delta   | Unit   |
|------------------------|---------|--------|
| ACCURACY               |         |        |
| Offset Error           | ±1.1    | LSB    |
| Gain Error             | ±3.4    | %FSR   |
| DYNAMIC SUPPLY CURRENT |         |        |
| I BVDD2                | ±14.7   | mA     |
| I BVNN1                | ±15.1   | mA     |
| I AVNN1                | ±0.2    | mA     |
| I AVDD                 | ±0.3    | mA     |
| I CLKVDD_LF            | ±3.7    | mA     |
| I PLLVDD2              | ±0.2    | mA     |
| I AVDDFS8              | ±5.6    | mA     |
| I FVDD                 | ±3.5    | mA     |
| I VDD_NVG 2            | ±19.5   | mA     |
| I RVDD2                | ±3.8    | mA     |
| I SVDD2                | ±0.3    | mA     |
| I JVDD2                | ±2.4    | mA     |
| I DVDD 3               | ±105.5  | mA     |
| I JVTT                 | ±24.7   | mA     |
| I JVDD                 | ±80     | mA     |
| I TMU_AVDD2            | ±0.2    | mA     |
| I TMU_DVDD1            | ±0.2    | mA     |

## RADIATION TEST AND LIMIT SPECIFICATIONS

Nominal supply voltages, specified maximum sampling rate, internal reference, and A IN = -1.0 dBFS. Radiation testing is performed at room temperature (T A = 25°C) only, which represents performance at T J = 70°C. Total ionizing dose (TID) testing is characterized to 150 krads (100 krads + 50% overstress) with biased annealing at 100°C for 168 hours. Once characterized, TID testing is performed to 100 krads only.

## Table 6.

| Parameter    | Min   | Max   | Unit   |
|--------------|-------|-------|--------|
| ACCURACY     |       |       |        |
| Offset Error | -11   | +11   | LSB    |
| Gain Error   | -7.0  | +17.0 | %FSR   |

## SPECIFICATIONS

Table 6. (Continued)

| Parameter                                            | Test Conditions/Comments   | Min   | Max   | Unit   |
|------------------------------------------------------|----------------------------|-------|-------|--------|
| DYNAMIC SUPPLY CURRENTS                              |                            |       |       |        |
| I BVDD2                                              |                            |       | 147   | mA     |
| I BVNN1                                              |                            |       | -151  | mA     |
| I AVNN1                                              |                            |       | -2    | mA     |
| I AVDD                                               |                            |       | 2790  | mA     |
| I CLKVDD_LF                                          |                            |       | 37    | mA     |
| I PLLVDD2                                            |                            |       | 2     | mA     |
| I AVDDFS8                                            |                            |       | 56    | mA     |
| I FVDD                                               |                            |       | 35    | mA     |
| I VDD_NVG 1                                          |                            |       | 195   | mA     |
| I RVDD2                                              |                            |       | 38    | mA     |
| I SVDD2                                              |                            |       | 1     | mA     |
| I JVDD2                                              |                            |       | 24    | mA     |
| I DVDD 2                                             |                            |       | 1055  | mA     |
| I JVTT                                               |                            |       | 247   | mA     |
| I JVDD                                               |                            |       | 800   | mA     |
| I TMU_AVDD2                                          |                            |       | 2     | mA     |
| I TMU_DVDD1                                          |                            |       | 2     | mA     |
| POWER-DOWN SUPPLY CURRENTS                           | PDWN pin = 1               |       |       |        |
| I BVDD2                                              |                            |       | 0.9   | mA     |
| I BVNN1                                              |                            |       | -9    | mA     |
| I AVNN1                                              |                            |       | -0.1  | mA     |
| I AVDD                                               |                            |       | 410   | mA     |
| I CLKVDD_LF                                          |                            |       | 3     | mA     |
| I PLLVDD2                                            |                            |       | 1.24  | mA     |
| I AVDDFS8                                            |                            |       | 14.5  | mA     |
| I FVDD                                               |                            |       | 5.3   | mA     |
| I VDD_NVG 1                                          |                            |       | 2.8   | mA     |
| I RVDD2                                              |                            |       | 0.82  | mA     |
| I SVDD2                                              |                            |       | 0.4   | mA     |
| I JVDD2                                              |                            |       | 0.4   | mA     |
| I DVDD 2                                             |                            |       | 240   | mA     |
| I JVTT                                               |                            |       | 85.7  | mA     |
| I JVDD                                               |                            |       | 180   | mA     |
| I TMU_AVDD2                                          |                            |       | 2     | mA     |
| I TMU_DVDD1                                          |                            |       | 0.7   | mA     |
| Power Consumption 3                                  |                            |       |       |        |
| Total Power Dissipation (Including Output Drivers) 4 |                            |       | 5.93  | W      |
| Power-Down                                           |                            |       | 970   | mW     |
| SIGNAL-TO-NOISE RATIO (SNR)                          |                            |       |       |        |
| f IN = 170 MHz                                       |                            |       | 59.6  | dBFS   |
| f IN = 2600 MHz                                      |                            |       | 53.9  | dBFS   |
| SIGNAL-TO-NOISE AND DISTORTION (SINAD)               |                            |       |       |        |
| f IN = 170 MHz                                       |                            |       | 58.3  | dBFS   |
| f IN = 2600 MHz                                      |                            |       | 52.6  | dBFS   |
| SPURIOUS-FREE DYNAMIC RANGE (SFDR), SECOND OR        |                            |       |       |        |
| THIRD HARMONIC                                       |                            |       |       |        |
| f IN = 170 MHz                                       |                            |       | 75    | dBFS   |
| f IN = 2600 MHz                                      |                            |       | 70    | dBFS   |

## SPECIFICATIONS

## Table 6. (Continued)

| Parameter            | Test Conditions/Comments   | Min   | Max   | Unit   |
|----------------------|----------------------------|-------|-------|--------|
| SECOND HARMONIC (H2) |                            |       |       |        |
| f IN = 170 MHz       |                            |       | -61.2 | dBFS   |
| f IN = 2600 MHz      |                            |       | -61.2 | dBFS   |
| THIRD HARMONIC (H3)  |                            |       |       |        |
| f IN = 170 MHz       |                            |       | -64.4 | dBFS   |
| f IN = 2600 MHz      |                            |       | -67.3 | dBFS   |

## ABSOLUTE MAXIMUM RATINGS

| Table 7. Parameter                               | Rating                            |
|--------------------------------------------------|-----------------------------------|
| Supply Pins                                      |                                   |
| BVDD2 to AGND                                    | 2.2 V                             |
| BVNN1 to AGND                                    | -1.1 V                            |
| AVNN1 to GND                                     | -1.1 V                            |
| AVDD to AGND                                     | 1.1 V                             |
| CLKVDD_LF to AGND                                | 1.1 V                             |
| PLLVDD2 to AGND                                  | 2.2 V                             |
| AVDDFS8 to AVSSFS8                               | 1.1 V                             |
| FVDD to AGND                                     | 1.1 V                             |
| VDD_NVG to VSS_NVG                               | 1.1 V                             |
| RVDD2 to AGND                                    | 2.2 V                             |
| SVDD2 to DGND                                    | 2.2 V                             |
| DVDD to DGND                                     | 1.1 V                             |
| JVTT to JGND                                     | 1.1 V                             |
| JVDD to JGND                                     | 1.1 V                             |
| JVDD2 to JGND                                    | 2.2 V                             |
| TMU_AVDD2 to AGND                                | 2.2 V                             |
| TMU_DVDD1 to AGND                                | 1.1 V                             |
| GND Pins                                         |                                   |
| AVSSFS8 to DGND                                  | -0.3 V to +0.3 V                  |
| VSS_NVG to DGND                                  | -0.3 V to +0.3 V                  |
| AGND to DGND                                     | -0.3 V to +0.3 V                  |
| AGND to JGND                                     | -0.3 V to +0.3 V                  |
| DGND to JGND                                     | -0.3 V to +0.3 V                  |
| Input/Output Pins                                |                                   |
| VIN_x to AGND                                    | -0.125 V to AVDD + 0.150 V        |
| CLK_x to AGND                                    | AGND - 0.3 V to CLKVDD_LF + 0.3 V |
| CSB, RSTB, PDWN, SCLK, FD, GPIO[x], SDIO to DGND | DGND - 0.3 V to SVDD2 + 0.3 V     |
| SYNCINB_x to DGND                                | DGND - 0.3 V to DVDD + 0.3 V      |
| SYSREF_x, TRIG_x to AVSSFS8                      | 1.8 V                             |
| TMU_REFx to TMU_AGND                             | AGND - 0.3 V to TMU_AVDD2 + 0.3 V |
| VCM to AGND                                      | AGND - 0.3 V to RVDD2 + 0.3 V     |
|                                                  | 0.3 V                             |
| SERDOUT_x[x] to JGND                             | JGND - 0.3 V to JVTT +            |
| Operating Junction Temperature (T J )            | 125°C                             |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL CHARACTERISTICS

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure.

θ JC is the junction to case thermal resistance.

θ JB is the junction to board thermal resistance.

## Table 8. Thermal Resistance

| Package Type   |   θ JA |   θ JC |   θ JB | Unit   |
|----------------|--------|--------|--------|--------|
| BP-192-1 1     |   20.5 |    1.6 |    9.2 | °C/W   |

1 Thermal resistance values specified are simulated based on JEDEC specs in compliance with JESD51-12.

## EXPLANATION OF TEST LEVELS

## Table 9. Explanation of Test Levels

| Test Level   | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| I            | 100% production tested at minimum, room, and maximum operating temperatures |
| II           | Parameter is guaranteed by design and not production tested                 |
| III          | Parameter is a typical value only                                           |

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 10. Outgas Testing

| Specification (Tested per ASTM E595 -15)   | Value   | Unit   |
|--------------------------------------------|---------|--------|
| TML                                        | 0.03    | %      |
| CVCM                                       | <0.01   | %      |
| Water Vapor Recovered                      | 0.02    | %      |

## RADIATION FEATURES

## Table 11. Radiation Features

| Specifications                                                                 | Value   | Unit         |
|--------------------------------------------------------------------------------|---------|--------------|
| Maximum Total Dose Available (Dose Rate = 50 rad(Si)/sec to 300 rad(Si)/sec) 1 | 100     | krad(Si)     |
| No SEL Occurs at Effective LET 2                                               | ≤87     | MeV-cm 2 /mg |

1 Guaranteed by device and process characterization. Contact Analog Devices, Inc., for data available up to 100 krads.

- 2 Limits are characterized at initial qualification and after any design or process changes that might affect the SEL characteristics, but are not production lot tested unless specified by the customer through the purchase order or contract. For more information on single event effect (SEE) test results, contact Analog Devices for further data beyond published report on the Analog Devices website.

## ABSOLUTE MAXIMUM RATINGS

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration (Top View, Not to Scale)

<!-- image -->

Table 12. Pin Function Descriptions

| Pin No.                                       | Ball Mnemonic                | Ball Type   | Signal Type    | Description                |
|-----------------------------------------------|------------------------------|-------------|----------------|----------------------------|
| A1, A2, A13, A14, C3 to C12, E1, E2, E13, E14 | JGND                         | Ground      | Not applicable | JESD Ground.               |
| A3, B3                                        | SERDOUT_N[1], SERDOUT_P[1]   | Output      | JESD204B       | Lane 1 Differential Pair.  |
| A4, B4                                        | SERDOUT_N[0], SERDOUT_P[0]   | Output      | JESD204B       | Lane 0 Differential Pair.  |
| A5, B5                                        | SERDOUT_N[2], SERDOUT_P[2]   | Output      | JESD204B       | Lane 2 Differential Pair.  |
| A6, B6                                        | SERDOUT_N[4], SERDOUT_P[4]   | Output      | JESD204B       | Lane 4 Differential Pair.  |
| A7, B7                                        | SERDOUT_N[6], SERDOUT_P[6]   | Output      | JESD204B       | Lane 6 Differential Pair.  |
| A8, B8                                        | SERDOUT_N[8], SERDOUT_P[8]   | Output      | JESD204B       | Lane 8 Differential Pair.  |
| A9, B9                                        | SERDOUT_N[10], SERDOUT_P[10] | Output      | JESD204B       | Lane 10 Differential Pair. |
| A10, B10                                      | SERDOUT_N[12], SERDOUT_P[12] | Output      | JESD204B       | Lane 12 Differential Pair. |
| A11, B11                                      | SERDOUT_N[14], SERDOUT_P[14] | Output      | JESD204B       | Lane 14 Differential Pair. |
| A12, B12                                      | SERDOUT_N[15], SERDOUT_P[15] | Output      | JESD204B       | Lane 15 Differential Pair. |
| B1, B2                                        | SERDOUT_N[3], SERDOUT_P[3]   | Output      | JESD204B       | Lane 3 Differential Pair.  |
| B13, B14                                      | SERDOUT_P[13], SERDOUT_N[13] | Output      | JESD204B       | Lane 13 Differential Pair. |
| C1, C2                                        | SERDOUT_N[5], SERDOUT_P[5]   | Output      | JESD204B       | Lane 5 Differential Pair.  |
| C13, C14                                      | SERDOUT_P[11], SERDOUT_N[11] | Output      | JESD204B       | Lane 11 Differential Pair. |
| D1, D2                                        | SERDOUT_N[7], SERDOUT_P[7]   | Output      | JESD204B       | Lane 7 Differential Pair.  |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 12. Pin Function Descriptions (Continued)

| Pin No.                                                                                            | Ball Mnemonic              | Ball Type      | Signal Type                   | Description                                                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------|----------------------------|----------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D3, E3, E10, E11, F3, J12, K12, L12, N14, P12, P13                                                 | RES_DNC                    | Not applicable | Not applicable                | Reserved. Do not connect.                                                                                                                                                                                                                                                                              |
| D4, D5, D10, D11                                                                                   | JVTT                       | Supply         | Not applicable                | JESD204B Output Driver Termination Voltage, 1 V Supply.                                                                                                                                                                                                                                                |
| D6 to D9                                                                                           | JVDD                       | Supply         | Not applicable                | JESD204B Digital Circuitry Supply, 1 V Supply.                                                                                                                                                                                                                                                         |
| D12                                                                                                | JVDD2                      | Supply         | Not applicable                | 2 V Supply for JESD204B.                                                                                                                                                                                                                                                                               |
| D13, D14                                                                                           | SERDOUT_P[9], SERDOUT_N[9] | Output         | JESD204B                      | Lane 9 Differential Pair.                                                                                                                                                                                                                                                                              |
| E4                                                                                                 | TIE_LOW                    | Input          | CMOS                          | Internal Use Only. Connect to ground.                                                                                                                                                                                                                                                                  |
| E5 to E9, F4 to F6, F9, F10                                                                        | DGND                       | Ground         | Not applicable                | Digital Ground.                                                                                                                                                                                                                                                                                        |
| E12, F2                                                                                            | SVDD2                      | Supply         | Not applicable                | 2 V Supply for Digital Input/Output and Serial Peripheral Interface (SPI).                                                                                                                                                                                                                             |
| F1, G1                                                                                             | SYNCINB_P, SYNCINB_N       | Input          | Not applicable                | JESD204B Synchronization. When low, the JESD204B interface handshakes with the receiver. This pin goes high when handshake is complete.                                                                                                                                                                |
| F7, F8, G5 to G10                                                                                  | DVDD                       | Supply         | Not applicable                | 1 V Supply for Digital Core.                                                                                                                                                                                                                                                                           |
| F11, G13                                                                                           | AVSSFS8                    | Ground         | Not applicable                | Ground for AVSSFS8 Supply Domain. Connect to ground.                                                                                                                                                                                                                                                   |
| F12                                                                                                | SCLK                       | Input          | Not applicable                | Main SPI Clock Pin.                                                                                                                                                                                                                                                                                    |
| F13                                                                                                | CSB                        | Input          | Not applicable                | Chip Select Pin for SPI.                                                                                                                                                                                                                                                                               |
| F14, G14                                                                                           | SYSREF_N, SYSREF_P         | Input/output   | LVDS/current mode logic (CML) | Differential Synchronization Signal. Critical timing relative to CLK_x. This pin is placed near CLK_x inputs and establishes deterministic latency. This pin is internally tied to ground through 50 Ω in default configuration and can be left floating if set to Subclass 0 mode via Register 0x525. |
| G2                                                                                                 | TMU_REFP                   | Input          | Static                        | Temperature Measurement Unit (TMU) Reference Supply. Connect this pin to a clean, 1.8 V reference supply on the board that is ≤TMU_AVDD2.                                                                                                                                                              |
| G3, H3                                                                                             | TDN, TDP                   |                | Static                        | Temperature Diode Cathode/Anode. This pin can be left floating if unused.                                                                                                                                                                                                                              |
| G4                                                                                                 | TMU_DVDD1                  | Supply         | Not applicable                | TMU Digital Domain Supply.                                                                                                                                                                                                                                                                             |
| G11                                                                                                | AVDDFS8                    | Supply         | Not applicable                | 1 V Supply for Clocks with f S /8 Energy.                                                                                                                                                                                                                                                              |
| G12                                                                                                | SDIO                       | Input/output   | Not applicable                | Main SPI Input/Output Pin.                                                                                                                                                                                                                                                                             |
| H1                                                                                                 | FD                         | Output         | CMOS                          | Fast Detect Pin.                                                                                                                                                                                                                                                                                       |
| H2                                                                                                 | TMU_REFN                   | Input          | Static                        | TMU Reference Supply. Connect to clean ground on board.                                                                                                                                                                                                                                                |
| H4, H11                                                                                            | VSS_MOAT                   | Ground         | Not applicable                | Ground for Isolation Guard Ring. Connect to ground.                                                                                                                                                                                                                                                    |
| H5 to H10, J14, K2 to K11, L6 to L11, M6, M9, M13, M14, N4, N6, N9, N12, N13, P1, P6, P9, P11, P14 | AGND                       | Ground         | Not applicable                | Ground for ADC.                                                                                                                                                                                                                                                                                        |
| H12, J3 to J11, J13                                                                                | AVDD                       | Supply         |                               | Analog Core 1 V Supply for ADC.                                                                                                                                                                                                                                                                        |
| H13, H14                                                                                           | TRIG_P, TRIG_N             | Input          | LVDS                          | Trigger Input for Frequency Hopping. This pin is internally tied to ground through 50 Ω in default configuration and can be left floating if disabled by default with Register 0x602.                                                                                                                  |
| J1, J2                                                                                             | VDD_NVG                    | Supply         |                               | 1 V Supply for On-Board Negative Voltage Generator (NVG).                                                                                                                                                                                                                                              |
| K1                                                                                                 | VNEG_OUT                   | Output         |                               | Internally Generated -1 V Output.                                                                                                                                                                                                                                                                      |
| K13, L13                                                                                           | CLKVDD_LF                  | Supply         |                               | 1 V Supply for Clock Buffer.                                                                                                                                                                                                                                                                           |
| K14, L14                                                                                           | CLK_N, CLK_P               | Input          | RF                            | Clock Inputs, High Frequency.                                                                                                                                                                                                                                                                          |
| L1, L2                                                                                             | VSS_NVG                    | Ground         |                               | Supply Voltage (VSS) for NVG.                                                                                                                                                                                                                                                                          |
| L3                                                                                                 | TMU_AVDD2                  | Supply         |                               | TMU 2 V Analog Supply.                                                                                                                                                                                                                                                                                 |
| L4                                                                                                 | RVDD2                      | Supply         |                               | TOP_REF 2 V Supply.                                                                                                                                                                                                                                                                                    |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 12. Pin Function Descriptions (Continued)

| Pin No.            | Ball Mnemonic                               | Ball Type      | Signal Type    | Description                                                                                        |
|--------------------|---------------------------------------------|----------------|----------------|----------------------------------------------------------------------------------------------------|
| L5                 | BVDD3                                       | Supply         |                | Internally Generated 3 V Supply for Input Buffer. Bypass with 10 μF and 0.1 μF capacitors to GND.  |
| M1, M2, M3, N2, P2 | GPIO[4], GPIO[2], GPIO[3], GPIO[1], GPIO[0] | Input/output   |                | General-Purpose Input/Output Pins. These pins can be left floating in default configuration.       |
| M4                 | BVNN2                                       | Supply         | Not applicable | Internally Generated -2 V Supply for Input Buffer. Bypass with 10 μF and 0.1 μF capacitors to GND. |
| M5, N5, P5         | BVNN1                                       | Supply         | Not applicable | -1 V Supply for Input Buffer.                                                                      |
| M7, M8, N7, N8     | VOID                                        | Not applicable | Not applicable | No Balls at These Locations.                                                                       |
| M10, N10, P10      | BVDD2                                       | Supply         | Not applicable | 2 V Supply for Input Buffer.                                                                       |
| M11                | FVDD                                        | Supply         | Not applicable | 1 V Supply for Reference ADC (REF_ADC).                                                            |
| M12                | PLLVDD2                                     | Supply         | Not applicable | 2.0 V LDO Supply.                                                                                  |
| N1                 | RSTB                                        | Input          | Not applicable | Chip Reset, Active Low.                                                                            |
| N3                 | VREF                                        | Input          | Static         | Optional VREF Import.                                                                              |
| N11                | PDWN                                        | Input          | CMOS           | Power-Down/Standby Mode Control.                                                                   |
| P3                 | VCM                                         | Output         | Static         | Export VCM.                                                                                        |
| P4                 | AVNN1                                       | Supply         | Not applicable | -1 V Supply for TOP_REF.                                                                           |
| P7, P8             | VIN_P, VIN_N                                | Input          | RF             | ADC Inputs, High Frequency.                                                                        |

## TYPICAL PERFORMANCE CHARACTERISTICS

Nominal supply voltages, sampling rate = 10 GSPS, 1.4 V p-p full-scale differential input, A IN = -1.0 dBFS, T J = 70°C, and 128k fast Fourier transform (FFT), unless otherwise noted.

<!-- image -->

Figure 3. Single-Tone FFT with f IN = 170 MHz, 10 GSPS

<!-- image -->

Figure 4. Single-Tone FFT with f IN = 1 GHz, 10 GSPS

<!-- image -->

Figure 5. Single-Tone FFT with f IN = 2.6 GHz, 10 GSPS

<!-- image -->

Figure 6. Single-Tone FFT with f IN = 4 GHz, 10 GSPS

Figure 7. Single-Tone FFT with f IN = 5.5 GHz, 10 GSPS

<!-- image -->

Figure 8. Single-Tone FFT with f IN = 6.5 GHz, 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 9. Single-Tone FFT with f IN = 2.6 GHz, 10.25 GSPS

<!-- image -->

Figure 10. Single Tone FFT with f IN = 2.6 GHz, 10.75 GSPS

<!-- image -->

Figure 11. Power vs. Encode Clock (f S ) for 16 JESD204B Lanes, f IN = 170 MHz, 10 GSPS

Figure 12. Power vs. Encode Clock (f S ) for a Various Number of JESD204B Lanes, f IN = 170 MHz, 10 GSPS

<!-- image -->

<!-- image -->

Figure 14. SNR/SFDR vs. Sampling Frequency (f S ), f IN = 1000 MHz, 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. SNR/SFDR vs. Sampling Frequency, f IN = 2600 MHz, 10 GSPS

<!-- image -->

Figure 16. SNR/SFDR vs. Input Amplitude, f IN = 1000 MHz, 10 GSPS

<!-- image -->

Figure 17. SNR/SFDR vs. Input Amplitude (A IN ), f IN = 2600 MHz, 10 GSPS

<!-- image -->

Figure 18. SNR/SFDR vs. Input Frequency (f IN ), 10 GSPS, A IN = -1 dBFS

Figure 19. SNR/SFDR vs. V CM , 10 GSPS, Temperatures

<!-- image -->

Figure 20. SNR/SFDR vs. Clock Amplitude, f IN = 1000 MHz, 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. SNR/SFDR vs. Clock Amplitude, f IN = 2600 MHz, 10 GSPS

<!-- image -->

Figure 22. SNR/SFDR vs. T J , f IN = 2600 MHz, 10 GSPS

<!-- image -->

Figure 23. Power vs. T J , f IN = 2600 MHz, 10 GSPS

<!-- image -->

Figure 24. Two-Tone FFT, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, A IN1 and A IN2 = -7 dBFS, 10 GSPS

Figure 25. Two-Tone FFT, IMD3 Zoom In, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, AIN1 and A IN2 = -7 dBFS (See Figure 24ph&gt;), 10 GSPS

<!-- image -->

Figure 26. Two-Tone FFT, IMD2 Zoom In, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, AIN1 and A IN2 = -7 dBFS (See Figure 24), 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. Two-Tone FFT, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, A IN1 and A IN2 = -15 dBFS, 10 GSPS

<!-- image -->

Figure 28. Two-Tone FFT, IMD2 Zoom In, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, AIN1 and A IN2 = -15 dBFS (See Figure 27), 10 GSPS

<!-- image -->

Figure 29. Two-Tone FFT, IMD3 Zoom In, f IN1 = 1841.5 MHz, f IN2 = 1846.5 MHz, AIN1 and A IN2 = -15 dBFS (See Figure 27), 10 GSPS

<!-- image -->

Figure 30. Two-Tone FFT, f IN1 = 2137.5 MHz, f IN2 = 2142.5 MHz, A IN1 and A IN2 = -7 dBFS, 10 GSPS

Figure 31. Two-Tone FFT, IMD2 Zoom In, f IN1 = 2137.5 MHz, f IN2 = 2142.5 MHz, AIN1 and A IN2 = -7 dBFS (See Figure 30), 10 GSPS

<!-- image -->

Figure 32. Two-Tone FFT, IMD3 Zoom In, f IN1 = 2137.5 MHz, f IN2 = 2142.5 MHz, AIN1 and A IN2 = -7 dBFS (See Figure 30), 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 33. Two-Tone FFT, f IN1 = 2137.5 MHz, f IN2 = 2142.5 MHz, A IN1 and A IN2 = -15 dBFS, 10 GSPS

<!-- image -->

Figure 34. DNL at f IN = 170 MHz, 10 GSPS

<!-- image -->

Figure 35. INL at f IN = 170 MHz, 10 GSPS

<!-- image -->

Figure 36. Input-Referred Noise Histogram, 10 GSPS

Figure 37. IMD3/SFDR vs. Input Amplitude, f IN1 = 2137.5 MHz, f IN2 = 2142.5 MHz, 10 GSPS

<!-- image -->

Figure 38. IMD2/IMD3 vs. Input Frequency, (A IN = -7 dBFS), 100 MHz Spacing, 10 GSPS

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 39. IMD2/IMD3 vs. Input Frequency (A IN = -7 dBFS), 10 MHz Spacing, 10 GSPS

<!-- image -->

Figure 40. Reference Voltage vs. Junction Temperature, 10 GSPS

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                          |
|----------------------------|----------------|----------------------------------------------|
| BP-192-1                   | BGA_ED         | 192-Ball Ball Grid Array, Thermally Enhanced |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model             | Temperature Range   | Package Description                          | Packing Quantity   | Package Option   |
|-------------------|---------------------|----------------------------------------------|--------------------|------------------|
| AD9213BBP-10G-CSH | -40°C to +85°C      | 192-Ball BGA_ED (12mm x 12mm x 1.56mm w/ EP) | Tray, 189          | BP-192-1         |

<!-- image -->

Updated: March 11, 2023