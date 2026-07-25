<!-- lastmod 2022-08-04 -->
<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## General Description

The MAX5195 is an advanced, 14-bit, 260Msps digitalto-analog converter (DAC) designed to meet the demanding performance requirements of signal synthesis  applications found in wireless base stations and other communication systems. Operating from a single 5V supply, this DAC offers exceptional dynamic performance such as 77dBc spurious-free dynamic range (SFDR) at fOUT = 19.4MHz, while supporting update rates beyond 260Msps.

The MAX5195 current-source array architecture supports a full-scale current range of 10mA to 20mA, which allows a differential output voltage swing between 0.5VP-P and 1VP-P.

The MAX5195 features an integrated 1.2V bandgap reference and control amplifier to ensure high accuracy and low-noise performance. Additionally, a separate reference input pin allows the user to apply an external reference source for optimum flexibility.

The digital and clock inputs of the MAX5195 are designed for differential LVPECL-compatible voltage levels.

The MAX5195 is available in a 48-lead QFN package with exposed paddle and is specified for the extended industrial temperature range (-40°C to +85°C).

## Applications

Base Stations:

Single-/Multi-Carrier UMTS, GSM

LMDS, MMDS, Point-to-Point Microwave

Direct IF Synthesis

Digital-Signal Synthesis

Broadband Cable Systems

Automated Test Equipment

Instrumentation

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

- ♦ 260Msps Output Update Rate
- ♦ Excellent SFDR Performance To Nyquist (-12dBFS) At 19.4MHz Output = 77dBc At 51.6MHz Output = 76dBc
- ♦ Industry-Leading IMD Performance
- For 4 Tones (-15dBFS) At 18MHz Output = 86dBc At 31MHz Output = 84dBc
- ♦ Low Noise Performance SNR = 160dB/Hz at fOUT = 19.4MHz
- ♦ On-Chip 1.2V Bandgap Reference
- ♦ 20mA Full-Scale Current
- ♦ Single 5V Supply
- ♦ Differential LVPECL-Compatible Digital Inputs
- ♦ 48-Lead QFN-EP Package

## Ordering Information

| PART       | TEMP RANGE         | PIN-PACKAGE   |
|------------|--------------------|---------------|
| MAX5195EGM | -40 ° C to +85 ° C | 48 QFN-EP*    |

* EP = Exposed paddle.

## 14-Bit, 260Msps High-Dynamic Performance DAC

## ABSOLUTE MAXIMUM RATINGS

| AV CC , DV CC to AGND..............................................-0.3V                            | to +6V                          |
|-----------------------------------------------------------------------------------------------------|---------------------------------|
| AV CC , DV CC to DGND..............................................-0.3V                            | to +6V                          |
| AGND to DGND.....................................................-0.3V                              | to +0.3V                        |
| D0N-D013, D0P-D13P, T.P. to DGND                                                                    | .................-0.3V to +3.6V |
| OUTP, OUTN, AMPOUT, REFOUT, CLKP, CLKN, RSET to AGND..........................................-0.3V | to +6V                          |
| REFIN Voltage Range...............................................-0.3V                             | to +6V                          |

| Continuous Power Dissipation (T A = +70°C) 48-Pin QFN-EP (thermal resistance θ JA = +37°C/W)....2162W   |
|---------------------------------------------------------------------------------------------------------|
| Operating Temperature Range ...........................-40°C to +85°C                                   |
| Junction Temperature......................................................+150°C                        |
| Temperature Range.............................-60°C to                                                  |
| Storage +150°C                                                                                          |
| Lead Temperature (soldering, 10s) .................................+300°C                               |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(AVCC = DVCC = 5V, AGND = DGND = 0, external reference VREFIN = 1.196V, RT = 27.4 Ω referenced to AVCC, VOUT = 1VP-P, RSET = 3.83k Ω , f CLK = 156MHz, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                           | SYMBOL              | CONDITIONS                                                                |                                                                           | MIN                 | TYP                 | MAX                 | UNITS               |
|-----------------------------------------------------|---------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------|---------------------|---------------------|---------------------|
| STATIC PERFORMANCE                                  | STATIC PERFORMANCE  | STATIC PERFORMANCE                                                        | STATIC PERFORMANCE                                                        | STATIC PERFORMANCE  | STATIC PERFORMANCE  | STATIC PERFORMANCE  | STATIC PERFORMANCE  |
| Resolution                                          |                     |                                                                           |                                                                           |                     | 14                  |                     | LSB                 |
| Integral Nonlinearity                               | INL                 | Best-straight-line fit                                                    |                                                                           |                     | ± 2                 |                     | LSB                 |
|                                                     |                     |                                                                           |                                                                           |                     | ± 1.5               |                     |                     |
| Differential Nonlinearity                           | DNL                 | T A = +25°C                                                               |                                                                           | -3.3                |                     | +3.0                | LSB                 |
| Offset Error                                        | V OS                | (Note 1)                                                                  |                                                                           |                     | 0.05                | 0.1                 | %FS                 |
| Full-Scale Gain Error (Note 2)                      | GE                  | Internal reference                                                        |                                                                           |                     | 2.5                 | 6                   | %FS                 |
|                                                     | GE                  | External reference                                                        |                                                                           |                     | 1.6                 | 4                   | %FS                 |
| DYNAMIC PERFORMANCE                                 | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE                                                       | DYNAMIC PERFORMANCE                                                       | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE | DYNAMIC PERFORMANCE |
| Maximum Throughput Rate                             | f CLK               |                                                                           |                                                                           | 260                 |                     |                     | MHz                 |
| Signal-to-Noise Ratio                               | SNR                 | Full-scale output, within Nyquist window, f CLK = 260MHz, f OUT = 19.4MHz | Full-scale output, within Nyquist window, f CLK = 260MHz, f OUT = 19.4MHz | 160                 | 160                 | 160                 | dB/Hz               |
| Spurious-Free Dynamic Range to Nyquist, -12dBFS     | SFDR                | f CLK = 156MHz                                                            | f OUT = 1MHz, -2dBFS                                                      | 89 77 76            | 89 77 76            | 89 77 76            | dBc                 |
| Spurious-Free Dynamic Range to Nyquist, -12dBFS     | SFDR                | f CLK = 156MHz                                                            | f OUT = 19.42MHz                                                          |                     |                     |                     | dBc                 |
| Spurious-Free Dynamic Range to Nyquist, -12dBFS     | SFDR                | f CLK = 156MHz                                                            | f OUT = 51.67MHz                                                          |                     |                     |                     | dBc                 |
| Spurious-Free Dynamic Range to Nyquist, -12dBFS     | SFDR                | f CLK =                                                                   | f OUT = 19.4MHz                                                           | 74                  | 74                  | 74                  | dBc                 |
| Spurious-Free Dynamic Range to Nyquist, -12dBFS     | SFDR                | 260MHz                                                                    | f OUT = 51.61MHz                                                          | 72                  | 72                  | 72                  | dBc                 |
| Spurious-Free Dynamic Range ± 10MHz Window, -12dBFS | SFDR                | f CLK = 156MHz                                                            | f OUT = 19.42MHz                                                          | 82 75 82            | 82 75 82            | 82 75 82            | dBc                 |
| Spurious-Free Dynamic Range ± 10MHz Window, -12dBFS | SFDR                |                                                                           | f OUT = 51.67MHz                                                          |                     |                     |                     | dBc                 |
| Spurious-Free Dynamic Range ± 10MHz Window, -12dBFS | SFDR                | f CLK = 260MHz                                                            | f OUT = 19.42MHz                                                          |                     |                     |                     | dBc                 |
| Spurious-Free Dynamic Range ± 10MHz Window, -12dBFS | SFDR                | f CLK = 260MHz                                                            | f OUT = 51.61MHz                                                          | 76                  | 76                  | 76                  | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 156MHz                                                            | f OUT = 1.27MHz                                                           | -88 -86 -82 -79 -77 | -88 -86 -82 -79 -77 | -88 -86 -82 -79 -77 | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 156MHz                                                            | f OUT = 9.53MHz                                                           |                     |                     |                     | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 156MHz                                                            | f OUT = 19.42MHz                                                          |                     |                     |                     | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 156MHz                                                            | f OUT = 28.82MHz                                                          |                     |                     |                     | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 156MHz                                                            | f OUT = 38.42MHz                                                          |                     |                     |                     | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 |                                                                           | f OUT = 51.67MHz                                                          | -79                 | -79                 | -79                 | dBc                 |
| 2nd-Order Harmonic Distortion, -12dBFS              | HD2                 | f CLK = 260MHz                                                            | f OUT = 70.05MHz                                                          | -72                 | -72                 | -72                 | dBc                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## ELECTRICAL CHARACTERISTICS (continued)

(AVCC = DVCC = 5V, AGND = DGND = 0, external reference VREFIN = 1.196V, RT = 27.4 Ω referenced to AVCC, VOUT = 1VP-P, RSET = 3.83k Ω , f CLK = 156MHz, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                             | SYMBOL                          | CONDITIONS                      | CONDITIONS                      | TYP                             | UNITS                           |                                 |                                 |
|-------------------------------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
|                                                       |                                 | f CLK = 156MHz                  | f OUT = 1.27MHz                 | -90                             | dBc                             |                                 |                                 |
|                                                       |                                 |                                 | f OUT = 9.53MHz                 | -85                             | dBc                             |                                 |                                 |
| 3rd-Order Harmonic Distortion,                        |                                 |                                 | f OUT = 19.42MHz                | -81                             | dBc                             |                                 |                                 |
| 3rd-Order Harmonic Distortion,                        | HD3                             |                                 | f OUT = 28.82MHz                | -78                             | dBc                             |                                 |                                 |
| -12dBFS                                               |                                 |                                 | f OUT = 38.42MHz                | -78                             | dBc                             |                                 |                                 |
| 3rd-Order Harmonic Distortion,                        |                                 |                                 | f OUT = 51.64MHz                | -79                             | dBc                             |                                 |                                 |
| 3rd-Order Harmonic Distortion,                        |                                 | f CLK = 260MHz                  | f OUT = 70.05MHz                | -80                             | dBc                             |                                 |                                 |
| 2-Tone IMD, -9dBFS, 200kHz Frequency Spacing          | IM3                             | f CLK = 156MHz                  | f OUT = 18MHz                   | 92                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -9dBFS, 200kHz Frequency Spacing          | IM3                             |                                 | f OUT = 31MHz                   | 90                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -9dBFS, 200kHz Frequency Spacing          | IM3                             | f = 260MHz                      | f OUT = 18MHz                   | 91                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -9dBFS, 200kHz Frequency Spacing          | IM3                             | CLK                             | f OUT = 31MHz                   | 89                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -12dBFS, 200kHz Frequency Spacing         | IM3                             | f CLK = 156MHz                  | f OUT = 18MHz                   | 89                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -12dBFS, 200kHz Frequency Spacing         | IM3                             |                                 | f OUT = 31MHz                   | 87                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -12dBFS, 200kHz Frequency Spacing         | IM3                             |                                 | f OUT = 18MHz                   | 88                              | dBc                             |                                 |                                 |
| 2-Tone IMD, -12dBFS, 200kHz Frequency Spacing         | IM3                             | f CLK = 260MHz                  | f OUT = 31MHz                   | 87                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -15dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 18MHz                   | 86                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -15dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 156MHz                  | f OUT = 31MHz                   | 84                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -15dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 18MHz                   | 86                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -15dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 260MHz                  | f OUT = 31MHz                   | 84                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -18dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 156MHz                  | f OUT = 18MHz                   | 81                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -18dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 31MHz                   | 79                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -18dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 18MHz                   | 81                              | dBc                             |                                 |                                 |
| 4-Tone Power Ratio, -18dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 260MHz                  | f OUT = 31MHz                   | 78                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -21dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 156MHz                  | f OUT = 18MHz                   | 80                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -21dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 156MHz                  | f OUT = 31MHz                   | 77                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -21dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 260MHz                  | f OUT = 18MHz                   | 79                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -21dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 31MHz                   | 76                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -24dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 156MHz                  | f OUT = 18MHz                   | 75                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -24dBFS, 200kHz Frequency Spacing | MTPR                            |                                 | f OUT = 31MHz                   | 73                              | dBc                             |                                 |                                 |
| 8-Tone Power Ratio, -24dBFS, 200kHz Frequency Spacing | MTPR                            | f CLK = 260MHz                  | f OUT = 18MHz f OUT = 31MHz     | 76 74                           | dBc                             |                                 |                                 |
| REFERENCE AND CONTROL AMPLIFIER                       | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER | REFERENCE AND CONTROL AMPLIFIER |
| Internal Reference Voltage Range                      | V REFOUT                        |                                 |                                 | 1.196                           | V                               |                                 |                                 |
| Reference Input Voltage Range                         | V REFIN                         |                                 |                                 | 1.196 ±8%                       | V                               |                                 |                                 |
| Internal Reference Voltage Drift                      | TCO REF                         |                                 |                                 | 30                              | µV/ ° C                         |                                 |                                 |
| Internal Reference                                    | I SINK                          |                                 |                                 | 200                             | µA                              |                                 |                                 |
| Sink/Source Current                                   | I SOURCE                        |                                 |                                 | 1.5                             | mA                              |                                 |                                 |
| Amplifier Input Impedance                             | R IN                            |                                 |                                 | 1                               | M Ω                             |                                 |                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

## ELECTRICAL CHARACTERISTICS (continued)

(AVCC = DVCC = 5V, AGND = DGND = 0, external reference VREFIN = 1.196V, RT = 27.4 Ω referenced to AVCC, VOUT = 1VP-P, RSET = 3.83k Ω , f CLK = 156MHz, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.)

| PARAMETER                                     | SYMBOL                                        | CONDITIONS                                    | MIN                                           | TYP                                           | MAX                                           | UNITS                                         |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          | ANALOG OUTPUT TIMING                          |
| Output Fall Time                              | t FALL                                        | 90% to 10%                                    |                                               | 0.8                                           |                                               | ns                                            |
| Output Rise Time                              | t RISE                                        | 10% to 90%                                    |                                               | 0.8                                           |                                               | ns                                            |
| Glitch Energy                                 |                                               |                                               |                                               | 0.5                                           |                                               | pV-s                                          |
| TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        | TIMING CHARACTERISTICS                        |
| Data-to-Clock Setup Time (D0N-D13N, D0P-D13P) | t SETUP                                       | Referenced to the rising edge, Figure 4       |                                               | 0.5                                           | 1                                             | ns                                            |
| Data-to-Clock Hold Time (D0N-D13N, D0P-D13P)  | t HOLD                                        | Referenced to the rising edge, Figure 4       |                                               | 0.5                                           | 1.1                                           | ns                                            |
| Propagation Delay Time                        | t PD                                          | (Note 3)                                      |                                               | 0.5                                           |                                               | ns                                            |
| Minimum Clock Pulse Width High                | t CH                                          | CLKP, CLKN                                    | 1.6                                           |                                               |                                               | ns                                            |
| Minimum Clock Pulse Width Low                 | t CL                                          | CLKP, CLKN                                    | 1.6                                           |                                               |                                               | ns                                            |
| LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) | LOGIC INPUTS (D0N-D13N, D0P-D13P, CLKP, CLKN) |
| Input Logic High                              | V IH                                          |                                               | 2.4                                           |                                               |                                               | V                                             |
| Input Logic Low                               | V IL                                          |                                               |                                               |                                               | 1.6                                           | V                                             |
| Input Logic Current, Logic High               | I IH                                          | V IH = 2.4V                                   | -300                                          | 50                                            | +300                                          | µA                                            |
| Input Logic Current, Logic Low                | I IL                                          | V IL = 1.6V                                   | -300                                          | 10                                            | +300                                          | µA                                            |
| Digital Input Capacitance                     | CIN                                           |                                               |                                               | 2                                             |                                               | pF                                            |
| POWER SUPPLIES                                | POWER SUPPLIES                                | POWER SUPPLIES                                | POWER SUPPLIES                                | POWER SUPPLIES                                | POWER SUPPLIES                                | POWER SUPPLIES                                |
| Analog Supply Voltage Range                   | AV CC                                         |                                               | 4.75                                          | 5                                             | 5.25                                          | V                                             |
| Digital Supply Voltage Range                  | DV CC                                         |                                               | 4.75                                          | 5                                             | 5.25                                          | V                                             |
| Analog Supply Current                         | I AVCC                                        | AV CC = DV CC = 5V                            |                                               | 48                                            | 58                                            | mA                                            |
| Digital Supply Current                        | I DVCC                                        | AV CC = DV CC = 5V                            |                                               | 190                                           | 230                                           | mA                                            |
| Power Dissipation                             | P DISS                                        | AV CC = DV CC = 5V                            |                                               | 1190                                          | 1440                                          | mW                                            |
| Power-Supply Rejection Ratio                  | PSRR                                          | AV CC = DV CC = 5V ± 5% (Note 4)              |                                               | 0.2                                           |                                               | %FS/V                                         |

Note 4: Power-supply rejection ratio is the full-scale output change as the supply voltage varies over its specified range.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Typical Operating Characteristics

(AVCC = DVCC = 5V, external reference VREFIN = 1.196V, fCLK = 156.072MHz, RT = 27.4 Ω referenced to AVCC, CL = 15pF, VOUT = 1VP-P, RSET = 3.83k Ω , TA = +25°C, unless otherwise noted.)

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Typical Operating Characteristics (continued)

(AVCC = DVCC = 5V, external reference VREFIN = 1.196V, fCLK = 156.072MHz, RT = 27.4 Ω referenced to AVCC, CL = 15pF, VOUT = 1VP-P, RSET = 3.83k Ω , TA = +25°C, unless otherwise noted.)

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Typical Operating Characteristics (continued)

(AVCC = DVCC = 5V, external reference VREFIN = 1.196V, fCLK = 156.072MHz, RT = 27.4 Ω referenced to AVCC, CL = 15pF, VOUT = 1VP-P, RSET = 3.83k Ω , TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## Pin Description

| PIN    | NAME   | FUNCTION                                                                                                                                                    |
|--------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | D9P    | Data Bit 9                                                                                                                                                  |
| 2      | D8N    | Complementary Data Bit 8                                                                                                                                    |
| 3      | D8P    | Data Bit 8                                                                                                                                                  |
| 4      | D7N    | Complementary Data Bit 7                                                                                                                                    |
| 5      | D7P    | Data Bit 7                                                                                                                                                  |
| 6      | CLKP   | Converter Clock Input. Positive input terminal for LVPECL-compatible differential converter clock.                                                          |
| 7      | CLKN   | Complementary Converter Clock Input. Negative input terminal for LVPECL-compatible differential converter clock.                                            |
| 8      | D6N    | Complementary Data Bit 6                                                                                                                                    |
| 9      | D6P    | Data Bit 6                                                                                                                                                  |
| 10     | D5N    | Complementary Data Bit 5                                                                                                                                    |
| 11     | D5P    | Data Bit 5                                                                                                                                                  |
| 12     | D4N    | Complementary Data Bit 4                                                                                                                                    |
| 13     | D4P    | Data Bit 4                                                                                                                                                  |
| 14     | D3N    | Complementary Data Bit 3                                                                                                                                    |
| 15     | D3P    | Data Bit 3                                                                                                                                                  |
| 16, 47 | DV CC  | Digital Supply Voltage. Accepts a 4.75V to 5.25V supply voltage range. Bypass to DGND with a capacitor combination of 10µF in parallel with 0.1µF and 47pF. |
| 17, 46 | DGND   | Digital Ground                                                                                                                                              |
| 18     | D2N    | Complementary Data Bit 2                                                                                                                                    |
| 19     | D2P    | Data Bit 2                                                                                                                                                  |
| 20     | D1N    | Complementary Data Bit 1                                                                                                                                    |
| 21     | D1P    | Data Bit 1                                                                                                                                                  |
| 22     | D0N    | Complementary Data Bit 0 (LSB)                                                                                                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Pin Description (continued)

| PIN                | NAME   | FUNCTION                                                                                                                                                   |
|--------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 23                 | D0P    | Data Bit 0 (LSB)                                                                                                                                           |
| 24                 | T.P.   | Test Point. Must be connected to LVPECL high level (2.4V) for optimum dynamic performance.                                                                 |
| 25, 29, 32, 33, 35 | AV CC  | Analog Supply Voltage. Accepts a 4.75V to 5.25V supply voltage range. Bypass to AGND with a capacitor combination of 10µF in parallel with 0.1µF and 47pF. |
| 26                 | REFOUT | Reference Output. Output of the internal 1.2V precision bandgap reference. Bypass with a 1µF capacitor to AGND, if an external reference source is used.   |
| 27, 28             | AGND   | Analog Ground                                                                                                                                              |
| 30                 | OUTN   | Complementary DAC Output. Negative terminal for differential voltage output.                                                                               |
| 31                 | OUTP   | DAC Output. Positive terminal for differential voltage output.                                                                                             |
| 34                 | AMPOUT | Control Amplifier Output. For stable operation, bypass to AGND with a combination of a 3k Ω resistor in parallel with a 1.5µF tantalum capacitor.          |
| 36                 | RSET   | Output Current Set Resistor. External resistor (3.83k Ω to 7.66k Ω ) sets the full-scale current of the DAC.                                               |
| 37                 | REFIN  | Reference Input. Accepts an input voltage range of 1.196V ± 8%. Bypass to AGND with a 0.1µF capacitor, when used with the internal bandgap reference.      |
| 38                 | D13N   | Complementary Data Bit 13 (MSB)                                                                                                                            |
| 39                 | D13P   | Data Bit 13 (MSB)                                                                                                                                          |
| 40                 | D12N   | Complementary Data Bit 12                                                                                                                                  |
| 41                 | D12P   | Data Bit 12                                                                                                                                                |
| 42                 | D11N   | Complementary Data Bit 11                                                                                                                                  |
| 43                 | D11P   | Data Bit 11                                                                                                                                                |
| 44                 | D10N   | Complementary Data Bit 10                                                                                                                                  |
| 45                 | D10P   | Data Bit 10                                                                                                                                                |
| 48                 | D9N    | Complementary Data Bit 9                                                                                                                                   |

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Detailed Description

## Architecture

The MAX5195 is a high-performance, 14-bit, segmented current-source array DAC (Figure 1) capable of operating with clock speeds up to 260MHz. The converter consists of separate input and DAC registers, followed by a current-source array. This current-source array is capable of generating differential full-scale currents in the range of 10mA to 20mA. An internal R2R resistor network, in combination with external 27.4 Ω termination resistors, convert these differential output currents into a differential  output  voltage with a peak-to-peak output voltage range of 0.5V to 1V. An integrated 1.2V bandgap reference, control amplifier, and user-selectable,  external  resistor  determine the data converter's full-scale output range.

## Internal Reference and Control Amplifier

The MAX5195 supports operation with the on-chip 1.2V bandgap reference or an external reference voltage source. REFIN serves as the input for an external reference source, and REFOUT provides a 1.2V output voltage, if the internal reference is used. For internal reference operation, REFIN and REFOUT must be connected together and decoupled to AGND with a 1µF capacitor in parallel with a 0.1µF capacitor for stable operation.

The MAX5195 reference circuit also employs a control amplifier, designed to regulate the full-scale current IFS for the differential current outputs of the MAX5195. For stable operation, the output AMPOUT of this amplifier must be bypassed with a 3k Ω resistor in parallel with a 1.5µF tantalum capacitor to AGND. Configured as a voltage-to-current amplifier, the output current can be calculated as follows:

<!-- formula-not-decoded -->

<!-- image -->

Figure 1. Simplified MAX5195 Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Table 1. IFS and RSET Selection Matrix Based on a Typical 1.2V Reference Voltage

| FULL-SCALE CURRENT I FS (mA)   | REFERENCE CURRENT I (µA)   | RSET (k Ω )   | RSET (k Ω )   | OUTPUT VOLTAGE V OUTP/N * (mV P-P )   |
|--------------------------------|----------------------------|---------------|---------------|---------------------------------------|
| FULL-SCALE CURRENT I FS (mA)   | REF                        | CALCULATED    | 1% EIA STD    | OUTPUT VOLTAGE V OUTP/N * (mV P-P )   |
| 10                             | 156.26                     | 7.68          | 7.50          | 500                                   |
| 12                             | 187.50                     | 6.40          | 6.34          | 600                                   |
| 14                             | 218.80                     | 5.49          | 5.49          | 700                                   |
| 16                             | 250.00                     | 4.80          | 4.75          | 800                                   |
| 18                             | 281.30                     | 4.27          | 4.22          | 900                                   |
| 20                             | 312.50                     | 3.84          | 3.83          | 1000                                  |

Figure 2. Internal Reference Configuration

<!-- image -->

Figure 3. External Reference Configuration Using the MAX6520

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- formula-not-decoded -->

where IREF is the reference output current (IREF = VREFOUT/RSET) and IFS is the full-scale current. RSET is the reference resistor that determines the amplifier's output current (Figure 2) on the MAX5195. See Table 1 for a matrix of different IFS and RSET selections.

## External Reference Operation

Figure 3 illustrates  a  low-impedance reference source applied to the data converter for external reference operation. REFIN allows an input voltage range of 1.196V ±8%. Use a fixed output voltage reference source such as the 1.2V, 25ppm/°C (typ) MAX6520 bandgap reference for improved accuracy and drift performance. Bypass the unused REFOUT pin of the MAX5195 with a 1µF capacitor to AGND.

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Table 2. LVPECL Voltage Levels

| PARAMETER          | MINIMUM LVPECL SPECIFICATION   | MAXIMUM LVPECL SPECIFICATION   |
|--------------------|--------------------------------|--------------------------------|
| Input Voltage High | V CC ** - 1.16V                | V CC ** - 0.88V                |
| Input Voltage Low  | V CC ** - 1.81V                | V CC ** - 1.48V                |
| Common-Mode Level  | V CC ** - 1.3V                 | V CC ** - 1.3V                 |

## LVPECL-Compatible Digital Inputs (D0P-D13P, D0N-D13N)

The MAX5195 digital interface consists of 14 differential, LVPECL-compatible digital input pins. These inputs follow standard positive binary coding where D0P and D0N represent the differential inputs to the least significant bit (LSB), and D13P and D13N represent the differential  pair  associated  with  the  most  significant  bit (MSB). D0P/N through D13P/N accept LVPECL input levels of 0.8VP-P (Table 2).

Each of the digital input terminals can be terminated with  a  separate  50 Ω resistor;  however,  to  achieve  the lowest noise performance, it is recommended to terminate each differential pair with a 100 Ω resistor located between the positive and negative input terminals.

## Clock Inputs (CLKP, CLKN) and Data Timing Relationship

The MAX5195 features differential, LVPECL-compatible clock inputs. Internal edge-triggered flip-flops latch the input word on the rising edge of the clock-input pair CLKP/CLKN. The DAC is updated with the data word on the next rising edge of the clock input. This results in a conversion latency of one clock cycle. The MAX5195

provides for minimum setup and hold times (&lt;2ns), allowing for noncritical external interface timing (Figure 4).

For best AC performance, a differential, DC-coupled clock signal with LVPECL-compatible voltage levels (Table 2) should be used. The MAX5195 operates properly with a clock duty cycle set within the limits listed in the Electrical  Characteristics table.  However, a 50% duty cycle should be utilized for optimum dynamic performance. To maintain the DAC's excellent dynamic performance, clock and data signals should originate from separate signal sources.

## Analog Outputs (OUTP, OUTN)

The MAX5195's current array is designed to drive fullscale currents of 10mA to 20mA into an internal R2R resistor  network (RR2R). To achieve the desired differential  output  voltage  range  of  0.5VP-P to  1VP-P,  both OUTP and OUTN should be externally terminated into 27.4 Ω (RT),  resulting  in  a  combined  load  of  RLOAD = 25 Ω (Figure 5):

RLOAD = RR2R || RT RLOAD = (285 Ω ✕ 27.4 Ω ) / (285 Ω + 27.4 Ω ) RLOAD = 25 Ω

<!-- image -->

Figure 4. Input/Output Timing Information

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

Figure 5. Simplified Output Architecture

<!-- image -->

With a full-scale current of 10mA (20mA), both outputs OUTP and OUTN achieve a 0.25V (0.5V) voltage swing each, resulting in a 0.5VP-P (1VP-P) differential  output signal.  For  applications that require an even smaller output voltage swing, the termination resistor value RT can be as low as 0 Ω .

The proportional, differential output voltages can then be used to drive a wideband RF transformer or a fast, low-noise, low-distortion operational amplifier to convert the differential voltage into a single-ended output.

The MAX5195 analog outputs can also be configured in single-ended mode. For more details on different output configurations, see the Applications Information section.

## Applications Information

## Differential Coupling Using a Wideband RF Transformer

A wideband RF transformer such as the TTWB1010 (1:1 turns ratio)  from  Coilcraft  can  be  used  to  convert  the MAX5195 differential output signal to a single-ended signal (Figure 6). As long as the generated output spectrum is within the passband of the transformer, a differentially coupled transformer provides the best distortion performance. Additionally, the transformer helps to  reject  noise  and  even-order harmonics, provides electrical  isolation,  and  is  capable  of  delivering  more power to the load.

## Single-Ended Unbuffered Output Configuration

Figure 7a shows an unbuffered single-ended output, which is suitable for applications requiring a unipolar voltage output. The nominal termination resistor load of 27.4 Ω (referred to AVCC) results in a differential output

Figure 6. Differential Coupling Using a Wideband RF Transformer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

Figure 7a. Single-Ended Unbuffered Output Configuration

<!-- image -->

Figure 7b. Single-Ended Buffered Output Configuration

<!-- image -->

swing of 1VP-P (0.5VP-P single ended) when applying a full-scale current of 20mA.

Alternatively,  an  external  unity-gain  amplifier  can  be used to buffer the outputs. This circuit works as an I-V amplifier (Figure 7b), in which OUTP is held at AVCC by the inverting terminal of the buffer amplifier. OUTN should then be connected to AVCC to provide a DCcurrent path for the current switched to OUTP. The amplifier's  maximum output swing and the MAX5195 full-scale  current  determine the value of RLOOP. An optional roll-off capacitor (CLOOP) in the feedback loop helps to ease dV/dt requirements at the input of the operational amplifier. It is recommended that the amplifier's  power-supply rails be higher than the resistor's output reference voltage AVCC due to its positive and negative output swing around AVCC.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Grounding, Bypassing, and Power-Supply Considerations

Grounding and power-supply decoupling can strongly influence the performance of the MAX5195. Unwanted digital  crosstalk  can  couple  through the input, reference, power supply, and ground connections, thus affecting dynamic performance. Proper grounding and power-supply decoupling guidelines for high-speed, high-frequency applications should be closely followed. This reduces EMI and internal crosstalk, which can also affect the dynamic performance of the MAX5195.

Use of a multilayer printed circuit (PC) board with separate  ground and power-supply planes is recommended. High-speed signals should be run on lines directly above the ground plane. Since the MAX5195 has separate analog and digital ground buses (AGND and DGND, respectively), the PC board should have separate  analog and digital ground sections with only one point connecting the two planes. Digital signals should run above the digital ground plane and analog signals above the analog ground plane. Digital signals should be kept as far away from sensitive analog inputs, reference input lines, and clock inputs. Digital signal paths should be kept short and run lengths matched to avoid propagation delay mismatch.

The MAX5195 has two separate power-supply inputs for analog (AVCC) and digital (DVCC). Each AVCC input should be decoupled with parallel ceramic chip capacitors of 10µF in parallel with 0.1µF and 47pF with these capacitors as close to the supply pins as possible and their opposite ends with the shortest possible connection  to  the  ground  plane  (Figure  8).  The  DVCC pins should also have separate 10µF in parallel with 0.1µF and 47pF capacitors adjacent to their respective pins.

Try to minimize the analog and digital load capacitances for proper operation.

Figure 8. Decoupling and Bypassing Techniques for MAX5195-Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

The power-supply voltages should also be decoupled at the point where they enter the PC board with tantalum or electrolytic capacitors. Ferrite beads with additional  decoupling capacitors forming a π network can also improve performance.

greater) vias ( ≤ 0.3mm diameter per via hole and 1.2mm pitch between via holes) is recommended. A smaller via array can be used as well, but results in an increased θ ja.

The analog and digital power-supply inputs AVCC and DVCC of the MAX5195 allow a 4.75V to 5.25V supply voltage range.

## Enhanced Thermal Dissipation QFN-EP Package

The MAX5195 is packaged in a thermally enhanced 48pin QFN-EP package, providing greater design flexibility,  increased thermal efficiency, and a low thermal junction-case ( θ jc)  resistance  of ≈ 2°C/W. In this package, the data converter die is attached to an EP lead frame. The back of the lead frame is exposed at the package bottom surface (the PC board side of the package, Figure 9. This allows the package to be attached to the PC board with standard infrared (IR) flow soldering techniques. A specially created land pattern on the PC board, matching the size of the EP (5.5mm ✕ 5.5mm), guarantees proper attachment of the chip, and can also be used for heat-sinking purposes. Designing thermal vias* into the land area and implementing large ground planes in the PC board design further enhance the thermal conductivity between board and package. To remove heat from a 48-pin QFN-EP package effectively, an array of 3 ✕ 3 (or

* Connect the land pattern to internal or external copper planes.

<!-- image -->

Figure 9. MAX5195 Exposed Paddle/PC Board Cross Section

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note that efficient thermal management for the MAX5195 is  strongly  dependent on PC board and circuit design, component placement, and installation; therefore, exact performance figures cannot be provided. For more information on proper design techniques and recommendations to enhance the thermal performance of parts such as the MAX5195, refer to Amkor Technology's website at www.amkor.com.

## Static Performance Parameter Definitions

## Integral Nonlinearity (INL)

Integral nonlinearity is the deviation of the values on an actual transfer function from either a best-straight-line fit  (closest  approximation  to  the  actual  transfer  curve) or  a  line  drawn  between  the  endpoints  of  the  transfer function,  once offset and gain errors have been nullified.  For  a  DAC,  the  deviations  are  measured every individual step.

## Differential Nonlinearity (DNL)

Differential  nonlinearity  is  the  difference  between  an actual step height and the ideal value of 1LSB. A DNL error  specification of less than 1LSB guarantees no missing codes and a monotonic transfer function.

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Offset Error

The offset error is the difference between the ideal and the actual offset point. For a DAC, the offset point is the step value when the digital input is at midscale. This error affects all codes by the same amount.

## Gain Error

A gain error is the difference between the ideal and the actual full-scale output voltage on the transfer curve, after nullifying the offset error. This error alters the slope of  the  transfer  function  and  corresponds  to  the  same percentage error in each step.

## Glitch Energy

Glitch impulses are caused by asymmetrical switching times in the DAC architecture, which generates undesired output transients. The amount of energy that appears at DAC's output is measured over time and is usually specified in the pV-s range.

## Dynamic Performance Parameter Definitions

## Signal-to-Noise Ratio (SNR)

For a waveform perfectly reconstructed from digital samples, the theoretical maximum SNR is the ratio of the full-scale analog output (RMS value) to the RMS quantization error (residual error). The ideal, theoretical minimum can be derived from the DAC's resolution (N bits):

<!-- formula-not-decoded -->

However, noise sources such as thermal noise, reference noise, clock jitter, etc., affect the ideal reading. SNR is therefore computed by taking the ratio of the RMS signal to the RMS noise, which includes all spectral  components minus the fundamental, the first four harmonics, and the DC offset.

## Spurious-Free Dynamic Range

SFDR is the ratio of RMS amplitude of the carrier frequency (maximum signal components) to the RMS value of the next largest distortion component. SFDR is measured in dBc, with respect to the carrier frequency amplitude.

## Multitone Power Ratio (MTPR)

A series of equally spaced ones is applied to the DAC with one tone removed from the center of the range. MTPR is defined as the worst-case distortion (usually a 3rd-order harmonic product of the fundamental frequencies), which appears as the largest spur at the frequency of  the  missing tone in the sequence. This test can be performed with any number of input tones; however, four and eight tones are among the most common test conditions for CDMA- and GSM/EDGE-type applications.

## Intermodulation Distortion (IMD)

The two-tone IMD is the ratio expressed in dBc of either input tone to the worst 3rd-order (or higher) IMD products.  Note  that  2nd-order  IMD  products usually fall  at frequencies, which can be easily removed by digital filtering.  Therefore,  they  are  not  as  critical  as  3rd-order IMDs. The two-tone IMD performance of the MAX5195 was tested with the two individual input tone levels set to -9dBFS and -12dBFS.

## Chip Information

TRANSISTOR COUNT: 15,000

PROCESS: SiGe

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 14-Bit, 260Msps High-Dynamic Performance DAC

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.