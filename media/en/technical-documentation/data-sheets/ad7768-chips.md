<!-- lastmod 2021-04-08 -->
<!-- image -->

## Data Sheet

## FEATURES

Precision ac and dc performance

8-channel simultaneous sampling

256 kSPS maximum ADC ODR per channel

108 dB dynamic range

- -120 dB THD, typical
- ±2 ppm of FSR INL, ±50 µV offset error, ±30 ppm of FSR gain error

Optimized power dissipation vs. noise vs. input bandwidth Selectable power, speed, and input bandwidth Input bandwidth range up to 110.8 kHz (-3 dB bandwidth)

Programmable input bandwidth/sampling rates

CRC error checking on data interface

Daisy-chaining

Linear phase digital filter

Low latency sinc5 filter

## 8-Channel, 24-Bit, Simultaneous Sampling ADC with Power Scaling, 110.8 kHz Bandwidth

[AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

Wideband brick wall filter: ±0.005 dB pass-band ripple to 102.4 kHz

Analog input precharge buffers Power supply

AVDD1 = 5.0 V, AVDD2 = 2.25 V to 5.0 V

IOVDD = 2.5 V to 3.3 V or IOVDD = 1.8 V

Temperature range: -40°C to +105°C

## APPLICATIONS

Data acquisition systems: USB/PXI/Ethernet Instrumentation and industrial control loops Audio testing and measurement Vibration and asset condition monitoring 3-phase power quality analysis Sonar EEG/EMG/ECG

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=AD7768-CHIPS.pdf&product=AD7768-CHIPS&rev=0)

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| Revision History ............................................................................... 2         |
| General Description......................................................................... 3             |
| Specifications .................................................................................... 4      |
| 1.8 VIOVDDSpecifications....................................................... 9                          |
| Timing Specifications ................................................................ 12                  |

## REVISION HISTORY

3 /2021-Revision 0: Initial Version

| 1.8 VIOVDDTiming Specifications ......................................                      |   13 |
|---------------------------------------------------------------------------------------------|------|
| Absolute Maximum Ratings.........................................................           |   17 |
| ESD Caution ............................................................................... |   17 |
| Pin Configuration and Function Descriptions ..........................                      |   18 |
| Outline Dimensions.......................................................................   |   21 |
| Die Specifications and Assembly Recommendations...........                                  |   21 |
| Ordering Guide ..........................................................................   |   22 |

## GENERAL DESCRIPTION

The AD7768-CHIPS is an 8-channel simultaneous sampling sigma-delta (Σ-Δ) analog-to-digital converter (ADC) with a Σ-Δ modulator and digital filter per channel, enabling synchronized sampling of ac and dc signals.

The AD7768-CHIPS achieves 108 dB dynamic range at a maximum input bandwidth of 110.8 kHz, combined with a typical performance of ±2 ppm integral nonlinearity (INL), ±50 µV offset error, and ±30 ppm of full-scale range (FSR) gain error.

The AD7768-CHIPS user can trade off input bandwidth, output data rate (ODR), and power dissipation, and select one of three power modes to optimize for noise targets and power consumption. The flexibility of the AD7768-CHIPS allows the device to become a reusable platform for low power dc and high performance ac measurement modules.

The AD7768-CHIPS has three modes: fast mode (256 kSPS maximum, 110.8 kHz input bandwidth), median mode (128 kSPS maximum, 55.4 kHz input bandwidth) and low power mode (32 kSPS maximum, 13.8 kHz input bandwidth).

The AD7768-CHIPS offers extensive digital filtering capabilities, such as a wideband, a low ±0.005 dB pass-band ripple, an antialiasing low-pass filter with sharp roll-off, and 105 dB stop band attenuation at the Nyquist frequency.

Frequency domain measurements can use the wideband linear phase filter. This filter has a flat pass band (±0.005 dB ripple) from dc to 102.4 kHz at 256 kSPS, from dc to 51.2 kHz at 128 kSPS, or from dc to 12.8 kHz at 32 kSPS.

The AD7768-CHIPS also offers sinc response via a sinc5 filter, a low latency path for low bandwidth, and low noise measurements. The wideband and sinc5 filters can be selected and run on a per channel basis.

Within these filter options, the user can improve the dynamic range by selecting from decimation rates of ×32, ×64, ×128, ×256, ×512, and ×1024. The ability to vary the decimation filtering optimizes noise performance to the required input bandwidth.

Embedded analog functionality on each ADC channel makes design easier, such as a precharge buffer on each analog input that reduces analog input current and a precharge reference buffer per channel that reduces input current and glitches on the reference input terminals.

The device operates with a 5 V AVDD1A and AVDD1B supply, a 2.25 V to 5.0 V AVDD2A and AVDD2B supply, and a 2.5 V to 3.3 V or 1.8 V IOVDD supply.

The device requires an external reference. The absolute input reference voltage range is 1 V to AVDD1 - AVSS.

For the purposes of clarity in this data sheet, the AVDD1A and AVDD1B supplies are referred to as AVDD1, and the AVDD2A and AVDD2B supplies are referred to as AVDD2. For the negative supplies, AVSS refers to the AVSS1A, AVSS1B, AVSS2A, AVSS2B, and AVSS pins.

The specified operating temperature range is -40°C to +105°C.

Throughout this data sheet, multifunction pins, such as XTAL2/MCLK, are referred to either by the entire pin name or by a single function of the pin, for example MCLK, when only that function is relevant.

Additional application and technical information can be found in the AD7768 data sheet.

## SPECIFICATIONS

AVDD1A = AVDD1B = 4.5 V to 5.5 V, AVDD2A = AVDD2B = 2.0 V to 5.5 V, IOVDD = 2.25 V to 3.6 V, AVSS = DGND = 0 V, REFx+ = 4.096 V and REFx- = 0 V, master clock (MCLK) = 32.768 MHz, analog input precharge buffers on, reference precharge buffers off, wideband filter, chopping frequency (fCHOP) = modulator frequency (fMOD) ÷ 32, TA = -40°C to +105°C, unless otherwise noted.

See Table 2 for specifications at 1.8 V IOVDD.

## Table 1.

| Parameter                                     | Test Conditions/Comments                          | Min Typ          | Max       | Unit   |
|-----------------------------------------------|---------------------------------------------------|------------------|-----------|--------|
| ADCSPEEDANDPERFORMANCE                        |                                                   |                  |           |        |
| ODR, per Channel 1                            | Fast mode                                         | 8                | 256       | kSPS   |
|                                               | Median mode                                       | 4                | 128       | kSPS   |
|                                               | Low power mode                                    | 1                | 32        | kSPS   |
| -3 dB Bandwidth                               | Fast mode, wideband filter                        |                  | 110.8     | kHz    |
|                                               | Median mode, wideband filter                      |                  | 55.4      | kHz    |
|                                               | Low power mode, wideband filter                   | 13.8             | 13.8      | kHz    |
| Data Output Coding                            |                                                   | Twos complement, | MSB first | Bits   |
| Fast Mode                                     | Decimation by 32, 256 kSPS ODR                    |                  |           |        |
| Dynamic Range                                 | Shorted input, wideband filter                    | 108              |           | dB     |
| Signal-to-Noise Ratio (SNR)                   | 1 kHz, -0.5 dBFS, sine waveinput                  |                  |           |        |
|                                               | Sinc5 filter                                      | 111              |           | dB     |
|                                               | Wideband                                          |                  |           |        |
|                                               | filter                                            | 107.8            |           | dB     |
| Signal-to-Noise-and- Distortion Ratio (SINAD) | 1 kHz, -0.5 dBFS, sine waveinput                  | 107.5            |           | dB     |
| Total Harmonic Distortion (THD)               | 1 kHz, -0.5 dBFS, sine waveinput                  | -120             |           | dB     |
| Spurious-Free Dynamic Range (SFDR)            | Decimation by 32, 128 kHz ODR                     | 128              |           | dBc    |
| Median Mode                                   |                                                   |                  |           |        |
| Dynamic Range                                 | Shorted input, wideband filter                    | 108              |           | dB     |
| SNR                                           | Sinc5 filter, 1 kHz, -0.5 dBFS, sine waveinput    | 111              |           | dB     |
|                                               | Wideband filter, 1 kHz, -0.5 dBFS, sine waveinput | 107.8            |           | dB     |
| THD                                           |                                                   | -120             |           |        |
|                                               | 1 kHz, -0.5 dBFS, sine waveinput                  |                  |           | dB     |
| SFDR                                          |                                                   | 128              |           |        |
|                                               |                                                   |                  |           | dBc    |
| Low Power Mode                                | Decimation by 32, 32 kHz ODR                      |                  |           |        |
| Dynamic Range                                 | Shorted input, wideband filter                    | 108              |           | dB     |
| SNR                                           | Sinc5 filter, 1 kHz, -0.5 dBFS, sine waveinput    | 111              |           | dB     |
|                                               | Wideband filter, 1 kHz, -0.5 dBFS, sine waveinput | 107.8            |           | dB     |
| SINAD                                         | 1 kHz, -0.5 dBFS, sine waveinput                  | 107.5            |           | dB     |
| THD                                           | 1 kHz, -0.5 dBFS, sine waveinput                  | -120             |           | dB     |
| SFDR                                          |                                                   | 128              |           | dBc    |
| INTERMODULATON DISTORTION 3                   | fa = 9.7 kHz, fb = 10.3 kHz                       |                  |           |        |
| (IMD)                                         | Second-order                                      | -125             |           | dB     |
|                                               | Third-order                                       | -125             |           | dB     |
| Offset Error 4                                | DCLK frequency ≤ 24 MHz                           | ±50              |           | µV     |
|                                               | 24MHzto32.768MHzDCLKfrequency 2                   | ±75              |           | µV     |

## Data Sheet

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

| Parameter                                                                                                                                       | Test Conditions/Comments                                                                                                                            | Min         | Typ              | Max          | Unit                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|--------------|----------------------------|
| Offset Error Drift Gain Error 4                                                                                                                 | DCLK frequency ≤ 24 MHz 24MHzto32.768MHzDCLKfrequency T A = 25°C                                                                                    |             | ±250 ±750 ±30    |              | nV/°C nV/°C ppmof FSR      |
| Output                                                                                                                                          | With respect to AVSS Change in output voltage to change in load                                                                                     |             | (AVDD1 - AVSS)/2 |              | V                          |
| VCM PIN                                                                                                                                         |                                                                                                                                                     |             |                  |              |                            |
| Load Regulation Voltage Regulation Short-Circuit Current                                                                                        | current (∆V OUT /∆I L ) Applies to the followingVCMoutputoptions only: common-modevoltage(V CM )=∆V OUT /∆(AVDD1- AVSS)/2,V CM =1.65V,andV CM =2.5V |             | 400 5 30         |              | µV/mA µV/V mA              |
| ANALOG INPUTS                                                                                                                                   |                                                                                                                                                     |             |                  |              |                            |
| Differential Input Voltage Range Input Common-Mode Range                                                                                        | V REF = (REFx+) - (REFx-)                                                                                                                           | -V REF AVSS |                  | +V REF AVDD1 | V V                        |
|                                                                                                                                                 |                                                                                                                                                     |             | ±31              |              | V                          |
| Absolute Analog Input Voltage Limits 2 Analog Input Current Unbuffered Precharge Buffer On 5 Input Current Drift Unbuffered Precharge Buffer On | Differential component Common-mode component                                                                                                        | AVSS        | ±48 17 -20 ±5    | AVDD1        | µA/V µA/V µA nA/V/°C nA/°C |
| Reference Voltage                                                                                                                               | V REF = (REFx+) - (REFx-)                                                                                                                           | 1           |                  | AVDD1- AVSS  | V V                        |
| Absolute Reference Limits 2                                                                                                                     | Precharge reference buffers off                                                                                                                     |             |                  | AVDD1+       |                            |
| Voltage                                                                                                                                         | Precharge reference buffer on                                                                                                                       | AVSS- 0.05  |                  | 0.05 AVDD1   | V                          |
| EXTERNAL REFERENCE                                                                                                                              |                                                                                                                                                     |             |                  |              |                            |
| Average Reference Current                                                                                                                       | Fast mode Precharge reference buffers off Precharge reference buffers on                                                                            | AVSS        | ±72              |              |                            |
|                                                                                                                                                 |                                                                                                                                                     |             | ±16              |              | µA/V/channel µA/V/channel  |
| Average Reference Current                                                                                                                       | Fast mode                                                                                                                                           |             |                  |              |                            |
| Drift                                                                                                                                           | Precharge reference buffers off                                                                                                                     |             |                  |              | nA/V/°C                    |
| Common-Mode Rejection DIGITAL FILTER RESPONSE                                                                                                   | Precharge reference buffers on FILTER = 0 Uptosix selectable decimation                                                                             |             | ±1.7 ±49 95      |              | nA/V/°C dB                 |
| Low Ripple Wideband Filter Decimation Rate                                                                                                      | rates Latency                                                                                                                                       | 32          |                  | 1024         | sec                        |
| Group Delay Settling Time 2                                                                                                                     | Complete settling From dc to 102.4 kHz at 256 kSPS                                                                                                  |             | 34/ODR 68/ODR    | ±0.005       | sec dB                     |
| Pass-Band Ripple                                                                                                                                | ±0.005 dB bandwidth                                                                                                                                 |             | 0.4 × ODR 0.409× |              | Hz                         |
| Pass Band                                                                                                                                       | -0.1 dB bandwidth                                                                                                                                   |             | ODR 0.433×       |              | Hz                         |
|                                                                                                                                                 | -3 dB bandwidth                                                                                                                                     |             | ODR              |              | Hz                         |
| Stop Band Frequency                                                                                                                             | Attenuation > 105                                                                                                                                   |             |                  |              |                            |
|                                                                                                                                                 | dB                                                                                                                                                  |             | 0.499× ODR       |              | Hz                         |
| Stop Band Attenuation                                                                                                                           |                                                                                                                                                     |             | 105              |              |                            |
|                                                                                                                                                 |                                                                                                                                                     |             |                  |              | dB                         |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## Data Sheet

| Parameter                                    | Test Conditions/Comments                                               | Min         | Typ        |   Max | Unit   |
|----------------------------------------------|------------------------------------------------------------------------|-------------|------------|-------|--------|
| Sinc5 Filter                                 | FILTER = 1                                                             |             |            |       |        |
| Decimation Rate                              | Uptosix selectable decimation rates                                    | 32          |            |  1024 |        |
| Group Delay                                  | Latency                                                                |             | 3/ODR      |       | sec    |
| Settling Time                                | Complete settling                                                      |             | 7/ODR      |       | sec    |
| Pass Band                                    | -3 dB bandwidth                                                        |             | 0.204× ODR |       | Hz     |
| REJECTION                                    |                                                                        |             |            |       |        |
| AC Power Supply Rejection Ratio (PSRR)       | Input voltage (V IN ) = 0.1 V, AVDD1 = 5 V, AVDD2 = 5 V, IOVDD = 2.5 V |             |            |       |        |
| AVDD1                                        |                                                                        |             | 90         |       | dB     |
| AVDD2                                        |                                                                        |             | 100        |       | dB     |
| IOVDD                                        |                                                                        |             | 75         |       | dB     |
| DC PSRR                                      | V IN = 1 V                                                             |             |            |       |        |
| AVDD1                                        |                                                                        |             | 100        |       | dB     |
| AVDD2                                        |                                                                        |             | 118        |       | dB     |
| IOVDD                                        |                                                                        |             | 90         |       | dB     |
| AC Analog Input Common- Mode Rejection Ratio | Up to 10 kHz                                                           |             | 95         |       | dB     |
| Crosstalk                                    | -0.5 dBFS input onadjacent channels                                    |             | -120       |       | dB     |
| CLOCK                                        |                                                                        |             |            |       |        |
| Crystal Frequency                            |                                                                        | 8           | 32.768     |    34 | MHz    |
| External Clock (MCLK)                        |                                                                        |             | 32.768     |       | MHz    |
| Duty Cycle                                   |                                                                        |             | 50:50      |       | %      |
| MCLK Pulse Width 2                           |                                                                        |             |            |       |        |
| Logic Low                                    |                                                                        | 12.2        |            |       | ns     |
| Logic High                                   |                                                                        | 12.2        |            |       | ns     |
| CMOS Clock Input Voltage High (V INH )       | See the Logic Inputs parameter                                         |             |            |       |        |
| Low Voltage Differential 2                   | Load resistance (R L ) = 100Ω                                          |             |            |       |        |
| Signaling (LVDS) Clock                       |                                                                        |             |            |       |        |
| Differential Input Voltage                   |                                                                        | 100         |            |   650 | mV     |
| Common-Mode Input Voltage                    |                                                                        | 800         |            |  1575 | mV     |
| Absolute Input Voltage                       |                                                                        |             |            |  1.88 | V      |
| ADC RESET 2                                  |                                                                        |             |            |       |        |
| ADCStart-Up Time After Reset 6               | Time to first DRDY, fast mode, decimation by 32                        |             | 1.58       |  1.66 | ms     |
| Minimum RESET Low Pulse Width                | MCLK time period (t MCLK ) = 1/MCLK                                    | 2 × t MCLK  |            |       |        |
| LOGIC INPUTS                                 |                                                                        |             |            |       |        |
| Input Voltage 2                              |                                                                        |             |            |       |        |
| High (V INH )                                |                                                                        | 0.65× IOVDD |            |       | V      |
| Low (V INL )                                 |                                                                        |             |            |   0.7 | V      |
| Hysteresis 2                                 |                                                                        | 0.04        |            |  0.09 | V      |
| Leakage Current                              | RESET                                                                  | -10         | +0.03      |   +10 | µA     |
|                                              | pin                                                                    | -10         |            |   +10 | µA     |

## Data Sheet

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

| Parameter                     | Test Conditions/Comments                                                                                             | Min                | Typ         | Max         | Unit   |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------|--------------------|-------------|-------------|--------|
| LOGIC OUTPUTS                 | See Table 2 for 1.8 V operation                                                                                      |                    |             |             |        |
| Output Voltage 2              |                                                                                                                      |                    |             |             |        |
| High (V OH )                  | Source current (I SOURCE ) = 200 μA                                                                                  | 0.8× IOVDD         |             |             | V      |
| Low (V OL )                   | Sink current (I SINK ) = 400 µA                                                                                      |                    |             | 0.4         | V      |
| Leakage Current               | Floating state                                                                                                       | -10                |             | +10         | µA     |
| Output Capacitance            | Floating state                                                                                                       |                    | 10          |             | pF     |
| SYSTEM CALIBRATION 2          |                                                                                                                      |                    |             |             |        |
| Full-Scale Calibration Limit  |                                                                                                                      |                    |             | 1.05 × V    | V      |
| Zero-Scale Calibration Limit  |                                                                                                                      | -1.05× V REF 0.4 × |             |             | V      |
| Input Span                    |                                                                                                                      | V REF              |             | 2.1 × V REF | V      |
| POWER REQUIREMENTS            |                                                                                                                      |                    |             |             |        |
| Power Supply Voltage          |                                                                                                                      |                    |             |             |        |
| AVDD1 - AVSS                  |                                                                                                                      | 4.5                | 5.0         | 5.5         | V      |
| AVDD2- AVSS                   |                                                                                                                      | 2.0                | 2.25 to 5.0 | 5.5         | V      |
| AVSS-DGND                     |                                                                                                                      | -2.75              |             | 0           | V      |
| IOVDD-DGND                    | See Table 2 for 1.8 V operation                                                                                      | 2.25               | 2.5 to 3.3  | 3.6         | V      |
| POWER SUPPLY CURRENTS 7       | Maximumoutputdatarate,CMOSMCLK,eight DOUTx signals, all supplies at maximum voltages, all channels in Channel Mode A |                    |             |             |        |
| Eight Channels Active         |                                                                                                                      |                    |             |             |        |
| Fast Mode                     |                                                                                                                      |                    |             |             |        |
| AVDD1 Current                 | Precharge reference buffers off                                                                                      |                    | 36          | 40          | mA     |
|                               | Precharge reference buffers on                                                                                       |                    | 57.5        | 64          | mA     |
| AVDD2Current                  |                                                                                                                      |                    | 37.5        | 40          | mA     |
| IOVDD Current                 | Wideband filter                                                                                                      |                    | 63          | 67          | mA     |
|                               | Sinc5 filter                                                                                                         |                    | 32          | 35          | mA     |
| Median Mode                   |                                                                                                                      |                    |             |             |        |
| AVDD1 Current                 | Precharge reference buffers off                                                                                      |                    | 18.5        | 20.5        | mA     |
|                               | Precharge reference buffers on                                                                                       |                    | 29          | 32.5        | mA     |
| AVDD2Current                  |                                                                                                                      |                    | 21.3        | 23          | mA     |
| IOVDD Current                 | Wideband filter                                                                                                      |                    | 34          | 37          | mA     |
|                               | Sinc5 filter                                                                                                         |                    | 22          | 25          | mA     |
| Low Power Mode                |                                                                                                                      |                    |             |             |        |
| AVDD1 Current                 | Precharge reference buffers off                                                                                      |                    | 5.1         | 5.8         | mA     |
|                               | Precharge reference buffers on                                                                                       |                    | 8           | 9           | mA     |
| AVDD2Current                  |                                                                                                                      |                    | 9.3         | 10.1        | mA     |
| IOVDD Current                 | Wideband filter                                                                                                      |                    | 12.5        | 13.7        | mA     |
| 2                             | Sinc5 filter Serial peripheral interface (SPI) control                                                               |                    | 12          | 15          | mA     |
| Two Channels Active Fast Mode | mode only                                                                                                            |                    |             |             |        |
| AVDD1 Current                 | Precharge reference buffers off                                                                                      |                    | 9.3         | 10.5        | mA     |
|                               | Precharge reference buffers on                                                                                       |                    | 14.7        | 16.6        | mA     |
| AVDD2Current                  |                                                                                                                      |                    | 9.5         | 10.5        | mA     |
| IOVDD Current                 | Wideband filter                                                                                                      |                    | 33.7        |             | mA     |
|                               | Wideband filter, disabled channels in Channel Mode A, and set to sinc5 filter mode                                   |                    | 23.4        |             | mA     |
|                               | Sinc5 filter                                                                                                         |                    | 11.9        |             | mA     |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## Data Sheet

| Parameter                  | Test Conditions/Comments                                                                                                   | Min   |   Typ |   Max | Unit   |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Median Mode                |                                                                                                                            |       |       |       |        |
| AVDD1 Current              | Precharge reference buffers off                                                                                            |       |   4.8 |   5.5 | mA     |
|                            | Precharge reference buffers on                                                                                             |       |   7.5 |   8.6 | mA     |
| AVDD2Current               |                                                                                                                            |       |   5.5 |   6.2 | mA     |
| IOVDD Current              | Wideband filter                                                                                                            |       |  19.4 |       | mA     |
|                            | Wideband filter, disabled channels in Channel Mode A, and set to sinc5 filter mode                                         |       |  14.1 |       | mA     |
|                            | Sinc5 filter                                                                                                               |       |   8.5 |       | mA     |
| Low Power Mode             |                                                                                                                            |       |       |       |        |
| AVDD1 Current              | Precharge reference buffers off                                                                                            |       |  1.52 |  1.77 | mA     |
|                            | Precharge reference buffers on                                                                                             |       |   2.2 |   2.6 | mA     |
| AVDD2Current               |                                                                                                                            |       |   2.4 |     3 | mA     |
| IOVDD Current              | Wideband filter                                                                                                            |       |   8.6 |       | mA     |
|                            | Wideband filter, disabled channels in Channel Mode A, and set to sinc5 filter mode                                         |       |   7.2 |       | mA     |
|                            | Sinc5 filter                                                                                                               |       |   5.8 |       | mA     |
| Standby Mode               | All channels disabled (sinc5 filter enabled)                                                                               |       |    10 |    13 | mA     |
| Sleep Mode 2               | Full power-down(SPI controlmodeonly)                                                                                       |       |  0.73 |   1.2 | mA     |
| Crystal Excitation Current | Extra current in IOVDD when using an external crystal compared to using the CMOS MCLK                                      |       |   540 |       | µA     |
| POWER DISSIPATION 7        | External CMOS MCLK, all channels active,MCLK = 32.768 MHz, all channels in Channel Mode A except where otherwise specified |       |       |       |        |
| Full Operating Mode        | Analog precharge buffers on                                                                                                |       |       |       |        |
| Fast Mode                  | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers on                                                |       |   631 |   814 | mW     |
| Median Mode                | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers on                                                |       |   341 |   439 | mW     |
| Low Power Mode             | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers on                                                |       |   124 |   155 | mW     |
| Sinc5 Filter               |                                                                                                                            |       |       |       |        |
| Fast Mode                  | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers off                                               |       |   501 |   566 | mW     |
| Median Mode                | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers off                                               |       |   292 |   330 | mW     |
| Low Power Mode             | AVDD1 = 5.5 V, AVDD2 = 5.5 V, IOVDD = 3.6 V, precharge reference buffers off                                               |       |   120 |   142 | mW     |

## 1.8 V IOVDD SPECIFICATIONS

AVDD1A = AVDD1B = 4.5 V to 5.5 V, AVDD2A = AVDD2B = 2.0 V to 5.5 V, IOVDD = 1.72 V to 1.88 V, AVSS = DGND = 0 V, REFx+ = 4.096 V and REFx- = 0 V, MCLK = 32.768 MHz, analog precharge buffers on, reference precharge buffers off, wideband filter, fCHOP = fMOD/32, TA = -40°C to +105°C, unless otherwise noted.

## Table 2.

| Parameter                  | Test Conditions/Comments                          | Min          | Typ      |   Max | Unit          |
|----------------------------|---------------------------------------------------|--------------|----------|-------|---------------|
| DYNAMIC PERFORMANCE        |                                                   |              |          |       |               |
| Fast Mode                  | Decimation by 32, 256 kSPS ODR                    |              |          |       |               |
| Dynamic Range              | Shorted input, wideband filter                    |              | 108      |       | dB            |
| SNR                        | Sinc5 filter, 1 kHz, -0.5 dBFS, sine waveinput    |              | 111      |       | dB            |
|                            | Wideband filter, 1 kHz, -0.5 dBFS, sine waveinput |              | 107.8    |       | dB            |
| SINAD 1                    | 1 kHz, -0.5 dBFS, sine waveinput                  |              | 107.5    |       | dB            |
| THD                        | 1 kHz, -0.5 dBFS, sine waveinput                  |              | -120     |       | dB            |
| SFDR                       |                                                   |              | 128      |       | dBc           |
| Median Mode                | Decimation by 32, 128 kHz ODR                     |              |          |       |               |
| Dynamic Range              | Shorted input, wideband filter                    |              | 108      |       | dB            |
| SNR                        | 1 kHz, -0.5 dBFS, sine waveinput                  |              |          |       |               |
|                            | Sinc5 filter                                      |              | 111      |       | dB            |
|                            | Wideband filter                                   |              | 107.8    |       | dB            |
| SINAD                      | 1 kHz, -0.5 dBFS, sine waveinput                  |              | 107.5    |       | dB            |
| THD                        | 1 kHz, -0.5 dBFS, sine waveinput                  |              | -120     |       | dB            |
| SFDR                       |                                                   |              | 128      |       | dBc           |
| Low Power Mode             | Decimation by 32, 32 kHz ODR                      |              |          |       |               |
| Dynamic Range              | Shorted input, wideband filter                    |              | 108      |       | dB            |
| SNR                        | Sinc5 filter, 1 kHz, -0.5 dBFS, sine waveinput    |              | 111      |       | dB            |
|                            | Wideband filter, 1 kHz, -0.5 dBFS, sine waveinput |              | 107.8    |       | dB            |
| SINAD                      | 1 kHz, -0.5 dBFS, sine waveinput                  |              | 107.5    |       | dB            |
| THD                        | 1 kHz, -0.5 dBFS, sine waveinput                  |              | -120     |       | dB            |
| SFDR                       |                                                   |              | 128      |       | dBc           |
| ACCURACY 1                 |                                                   |              |          |       |               |
| INL                        | Endpoint method                                   |              | ±2       |       | ppmofFSR      |
| Offset Error 2             | DCLKfrequency≤24MHz                               |              | ±50      |       | µV            |
|                            | 24 MHz to 32.768 MHz DCLK frequency               |              | ±75      |       | µV            |
| Offset Error Drift         | DCLK frequency ≤ 24 MHz                           |              | ±250     |       | nV/°C         |
| Gain Error 2               | 24 MHz to 32.768 MHz DCLK frequency               |              | ±750 ±60 |       | nV/°C ppm/FSR |
| Gain Drift vs. Temperature | T A = 25°C                                        |              | ±0.5     |       | ppm/°C        |
| LOGIC INPUTS               |                                                   |              |          |       |               |
| Input Voltage 1            |                                                   |              |          |       |               |
| V INH                      |                                                   | 0.65 × IOVDD |          |       | V             |
| V INL                      |                                                   |              |          |   0.4 | V             |
| Hysteresis 1               |                                                   | 0.04         |          |   0.2 | V             |
| Leakage Current            | RESET E                                           | -10          | +0.03    |   +10 | µA            |
|                            | pin                                               | -10          |          |   +10 | µA            |
| LOGIC OUTPUTS              |                                                   |              |          |       |               |
| Output Voltage 1           |                                                   |              |          |       |               |
| V OH                       | I SOURCE = 200 µA                                 | 0.8×IOVDD    |          |       | V             |
| V OL                       | I SINK = 400 µA                                   |              |          |   0.4 | V             |
| Leakage Current            | Floating state                                    | -10          |          |   +10 | µA            |
| Output Capacitance         | Floating state                                    |              | 10       |       | pF            |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## Data Sheet

| Parameter               | Test Conditions/Comments                                                                                                                                                           |   Min | Typ         |   Max | Unit   |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------------|-------|--------|
| POWERREQUIREMENTS       |                                                                                                                                                                                    |       |             |       |        |
| PowerSupply Voltage     |                                                                                                                                                                                    |       |             |       |        |
| AVDD1 - AVSS            |                                                                                                                                                                                    |   4.5 | 5.0         |   5.5 | V      |
| AVDD2- AVSS             |                                                                                                                                                                                    |   2.0 | 2.25 to 5.0 |   5.5 | V      |
| AVSS-DGND               |                                                                                                                                                                                    | -2.75 |             |     0 | V      |
| IOVDD-DGND              | DREGCAP shorted to IOVDD                                                                                                                                                           |  1.72 | 1.8         |  1.88 | V      |
| POWER SUPPLY CURRENTS 1 | Maximum output data rate, CMOS MCLK, eight DOUTx signals, all supplies at maximum voltages, all channels in Channel Mode A except where otherwise specified, eight channels active |       |             |       |        |
| Fast Mode               |                                                                                                                                                                                    |       |             |       |        |
| AVDD1 Current           | Precharge reference buffers off                                                                                                                                                    |       | 36          |    40 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 57.5        |    64 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 37.5        |    40 | mA     |
| IOVDD Current           | Wideband filter                                                                                                                                                                    |       | 63          |  66.8 | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       | 32          |  34.4 | mA     |
| Median Mode             |                                                                                                                                                                                    |       |             |       |        |
| AVDD1 Current           | Precharge reference buffers off                                                                                                                                                    |       | 18.5        |  20.5 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 29          |  32.5 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 21.3        |    23 | mA     |
| IOVDD Current           | Wideband filter                                                                                                                                                                    |       | 34          |  36.8 | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       | 22          |  23.8 | mA     |
| Low Power Mode          |                                                                                                                                                                                    |       |             |       |        |
| AVDD1 Current           | Precharge reference buffers off                                                                                                                                                    |       | 5.1         |   5.8 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 8           |     9 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 9.3         |  10.1 | mA     |
| IOVDD Current           | Wideband filter                                                                                                                                                                    |       | 11.6        |  12.9 | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       |             |  14.1 |        |
|                         |                                                                                                                                                                                    |       | 12          |       | mA     |
| Two Channels Active     | SPI controlmodeonly                                                                                                                                                                |       |             |       |        |
| Fast Mode               |                                                                                                                                                                                    |       |             |       |        |
| AVDD1Current            | Precharge reference buffers off                                                                                                                                                    |       | 9.3         |  10.5 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 14.7        |  16.6 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 9.5         |  10.5 | mA     |
| IOVDD Current           | Widebandfilter                                                                                                                                                                     |       | 33.8        |       | mA     |
|                         | Wideband filter, SPI mode only, disabled channels in                                                                                                                               |       | 23.1        |       | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       | 11          |       | mA     |
| Median Mode             |                                                                                                                                                                                    |       |             |       |        |
| AVDD1Current            | Precharge reference buffers off                                                                                                                                                    |       | 4.8         |   5.5 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 7.5         |   8.6 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 5.5         |   6.2 | mA     |
| IOVDD Current           | Widebandfilter                                                                                                                                                                     |       | 18.9        |       | mA     |
|                         | Wideband filter, SPI mode only; disabled channels in                                                                                                                               |       | 13.4        |       | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       | 7.4         |       | mA     |
| Low Power Mode          |                                                                                                                                                                                    |       |             |       |        |
| AVDD1Current            | Precharge reference buffers off                                                                                                                                                    |       | 1.52        |  1.77 | mA     |
|                         | Precharge reference buffers on                                                                                                                                                     |       | 2.2         |   2.6 | mA     |
| AVDD2Current            |                                                                                                                                                                                    |       | 2.4         |     3 | mA     |
| IOVDD Current           | Widebandfilter                                                                                                                                                                     |       | 7.6         |       | mA     |
|                         | Wideband filter, SPI mode only, disabled channels in Channel Mode A, and set to sinc5 filter                                                                                       |       | 6.3         |       | mA     |
|                         | Sinc5 filter                                                                                                                                                                       |       | 4.8         |       | mA     |

## Data Sheet

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

| Parameter                          | Test Conditions/Comments                                                                                                                                       | Min   |   Typ |   Max | Unit   |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| Standby Mode                       | All channels disabled (sinc5 filter enabled)                                                                                                                   |       |    10 |    13 | mA     |
| Sleep Mode                         | Full power-down (SPI controlmode)                                                                                                                              |       |  0.73 |   1.2 | mA     |
| Crystal Excitation Current         | Extra current in IOVDD when using an external crystal compared to using the CMOS MCLK                                                                          |       |   540 |       | µA     |
| POWERDISSIPATION 1                 | External CMOS MCLK, all channels active, AVDD1 = AVDD2 = 5.5 V, IOVDD = 1.88 V, MCLK = 32.768 MHz, all channels in Channel Mode A except where otherwise noted |       |       |       |        |
| Full OperatingMode Wideband Filter | Analog precharge buffers on, eight channels active                                                                                                             |       |       |       |        |
| Fast Mode                          | Reference precharge buffers on                                                                                                                                 |       |   638 |   704 | mW     |
| MedianMode                         | Reference precharge buffers on                                                                                                                                 |       |   342 |   375 | mW     |
| Low Power Mode                     | Reference precharge buffers on                                                                                                                                 |       |   118 |   130 | mW     |
| Sinc5 Filter                       |                                                                                                                                                                |       |       |       |        |
| Fast Mode                          | Reference precharge buffers off                                                                                                                                |       |   455 |       | mW     |
| Median Mode                        | Reference precharge buffers off                                                                                                                                |       |   248 |       | mW     |
| Low Power Mode                     | Reference precharge buffers off                                                                                                                                |       |    94 |       | mW     |

1 These specifications are not production tested but are supported by characterization data at initial product release.

2 Following a system zero-scale calibration, the offset error is in the order of the noise for the programmed ODR selected. A system full-scale calibration reduces the gain error to the order of the noise for the programmed ODR.

## TIMING SPECIFICATIONS

AVDD1A = AVDD1B = 5 V, AVDD2A = AVDD2B = 5 V, IOVDD = 2.25 V to 3.6 V, Input Logic 0 = DGND, Input Logic 1 = IOVDD, load capacitance (CLOAD) = 10 pF on the DCLK pin, CLOAD = 20 pF on the other digital outputs, REFx+ = 4.096 V, TA = -40°C to +105°C. See Table 5 and Table 6 for timing specifications at 1.8 V IOVDD. See the AD7768 data sheet for information about the RETIME\_EN bit. tODR is the ODR time period.

Table 3. Data Interface Timing1, 2

| Parameter   | Description                           | TestConditions/Comments                                             | Min             | Typ                   | Max           | Unit     |
|-------------|---------------------------------------|---------------------------------------------------------------------|-----------------|-----------------------|---------------|----------|
| MCLK        | Master clock                          |                                                                     | 1.15            |                       | 34            | MHz      |
| f MOD       | Modulator frequency                   | Fast mode Median mode Low power mode                                |                 | MCLK/4 MCLK/8 MCLK/32 |               | Hz Hz Hz |
| t 1         | DRDY high time                        | DCLKtimeperiod (t DCLK )=t 8 +t 9                                   | t DCLK -10%     | 28                    |               | ns       |
| t 2         | DCLK rising edge to DRDY rising edge  |                                                                     |                 |                       | 2             | ns       |
| t 3         | DCLK rising to DRDY falling           |                                                                     | -3.5            |                       | 0             | ns       |
| t 4         | DCLK rise to DOUTx valid              |                                                                     |                 |                       | 1.5           | ns       |
| t 5         | DCLK rise to DOUTx invalid            |                                                                     | -3              |                       |               | ns       |
| t 6         | DOUTx valid to DCLK falling           |                                                                     | 9.5             | t DCLK /2             |               | ns       |
| t 7         | DCLK falling edge to DOUTx invalid    |                                                                     | 9.5             | t DCLK /2             |               | ns       |
| t 8         | DCLK high time, DCLK = MCLK/1         | 50:50 CMOS clock                                                    | t DCLK /2       | t DCLK /2             | (t DCLK /2)+5 | ns       |
|             | t 8a = DCLK = MCLK/2                  | t MCLK =1/MCLK                                                      |                 | t MCLK                |               | ns       |
|             | t 8b = DCLK = MCLK/4                  |                                                                     |                 | 2 × t MCLK            |               | ns       |
|             | t 8c = DCLK = MCLK/8                  |                                                                     |                 | 4 × t MCLK            |               | ns       |
| t 9         | DCLK low time DCLK = MCLK/1           | 50:50 CMOS clock                                                    | (t DCLK /2) - 5 | t MCLK /2             | t DCLK /2     | ns       |
|             | t 9a = DCLK = MCLK/2                  |                                                                     |                 | t MCLK                |               | ns       |
|             | t 9b = DCLK = MCLK/4                  |                                                                     |                 | 2 × t MCLK            |               | ns       |
|             | t 9c = DCLK = MCLK/8                  |                                                                     |                 | 4 × t MCLK            |               | ns       |
| t 10        | MCLK rising to DCLK rising            | CMOS clock                                                          |                 |                       | 30            | ns       |
| t 11        | Setup time (daisy-chain inputs)       | DOUT6andDOUT7                                                       | 14              |                       |               | ns       |
| t 12        | Hold time (daisy-chain inputs)        | DOUT6andDOUT7                                                       | 0 1 × t MCLK    |                       |               | ns ns    |
| t 13 t 14   | START low time MCLK to SYNC_OUT valid | CMOS clock                                                          |                 |                       |               |          |
|             |                                       | SYNC_OUT RETIME_EN bit disabled, measured from falling edge of MCLK | 4.5             |                       | 22            | ns       |
|             |                                       | SYNC_OUT RETIME_EN bit enabled, measured from rising edge of MCLK   | 9.5             |                       | 27.5          | ns       |
| t 15        | SYNC_IN setup time                    | CMOS clock                                                          | 0               |                       |               | ns       |
| t 16        | SYNC_IN hold time                     | CMOS clock                                                          | 10              |                       |               | ns       |

Table 4. SPI Control Interface Timing 1, 2

| Parameter                                                             | Description                                                                                                                                                                                                                                                                                                     | TestConditions/Comments                       | Min                                                   | Typ   | Max     | Unit                                            |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------------------------------------------------|-------|---------|-------------------------------------------------|
| t 17 t 18 t 19 t 20 t 21 t 22 t 23 t 24 t 25 t 26 t 27 t 28 t 29 t 30 | SCLK period CS falling edge to SCLK rising edge SCLK falling edge to CS rising edge CS falling edge to data output enable SCLK high time SCLK low time SCLK falling edge to SDO valid SDO hold time after SCLK falling SDI setup time SDI hold time SCLK enable time SCLK disable time CS high time CS low time | f MOD = MCLK/4 f MOD = MCLK/8 f MOD = MCLK/32 | 100 26.5 27 22.5 20 20 7 0 6 0 0 10 1.1 × 2.2 × 8.8 × | 50 50 | 40.5 15 | ns ns ns ns ns ns ns ns ns ns ns ns ns ns ns ns |

## 1.8 V IOVDD TIMING SPECIFICATIONS

AVDD1A = AVDD1B = 5 V, AVDD2A = AVDD2B = 5 V, IOVDD = 1.72 V to 1.88 V (DREGCAP tied to IOVDD), Input Logic 0 = DGND, Input Logic 1 = IOVDD, CLOAD = 10 pF on DCLK pin, CLOAD = 20 pF on other digital outputs, TA = -40°C to +105°C. See the AD7768 data sheet for information about the RETIME\_EN bit. tODR is the ODR time period.

Table 5. Data Interface Timing 1, 2

| Parameter   | Description                                        | Test Conditions/Comments             | Min             | Typ                   | Max           | Unit     |
|-------------|----------------------------------------------------|--------------------------------------|-----------------|-----------------------|---------------|----------|
| MCLK        | Master clock                                       |                                      | 1.15            |                       | 34            | MHz      |
| f MOD       | Modulator frequency                                | Fast mode Median mode Low power mode |                 | MCLK/4 MCLK/8 MCLK/32 |               | Hz Hz Hz |
| t 1         | DRDY high time                                     |                                      | t DCLK - 10%    | 28                    |               | ns       |
| t 2         | DCLK rising edge to DRDY rising edge               |                                      |                 |                       | 2             | ns       |
| t 3         | DCLK rising to DRDY falling                        |                                      | -4.5            |                       | 0             | ns       |
| t 4         | DCLK rise to DOUTx valid                           |                                      |                 |                       | 2.0           | ns       |
| t 5         | DCLK rise to DOUTx invalid                         |                                      | -4              |                       |               | ns       |
| t 6         | DOUTx valid to DCLK falling                        |                                      | 8.5             | t DCLK /2             |               | ns       |
| t 7         | DCLK falling edge to DOUTx invalid                 |                                      | 8.5             | t DCLK /2             |               | ns       |
| t 8         | DCLK high time, DCLK = MCLK/1 t 8a = DCLK = MCLK/2 | 50:50 CMOS clock                     | t DCLK /2       | t DCLK /2 t MCLK      | (t DCLK /2)+5 | ns ns    |
| t 9         | t 8b = DCLK = MCLK/4 t 8c = DCLK = MCLK/8          |                                      |                 | 2 × t MCLK 4 × t MCLK |               | ns ns    |
|             | DCLK low time DCLK = MCLK/1 t 9a = DCLK = MCLK/2   | 50:50 CMOS clock                     | (t DCLK /2) - 5 | t MCLK /2 t MCLK      | t DCLK /2     | ns ns    |
| t 10        | MCLK rising to DCLK rising                         |                                      |                 |                       |               |          |
|             |                                                    | CMOS clock                           |                 |                       | 37            | ns       |
| t 11        | Setup time (daisy-chain inputs)                    | DOUT6 and DOUT7                      | 14              |                       |               | ns       |
| t 12        | Hold time (daisy-chain inputs)                     | DOUT6 and DOUT7                      | 0               |                       |               | ns       |
| t 13        | START low time                                     |                                      | 1 × t MCLK      |                       |               | ns       |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## Data Sheet

| Parameter   | Description            | Test Conditions/Comments                                                   |   Min | Typ   |   Max | Unit   |
|-------------|------------------------|----------------------------------------------------------------------------|-------|-------|-------|--------|
| t 14        | MCLK to SYNC_OUT valid | CMOS clock SYNC_OUT RETIME_EN disabled, measured from falling edge of MCLK |       |       |       |        |
|             |                        | bit                                                                        |    10 |       |    31 | ns     |
|             |                        | SYNC_OUT RETIME_EN bit enabled, measured from rising edge of MCLK          |    15 |       |    37 | ns     |
| t 15        | SYNC_IN setup time     | CMOS clock                                                                 |     0 |       |       | ns     |
| t 16        | SYNC_IN hold time      | CMOS clock                                                                 |    11 |       |       | ns     |

## Table 6. SPI Control Interface Timing 1, 2

| Parameter                                                        | Description                                                                                                                                                                                                                                                                                  | Test Conditions/Comments   | Min          |   Typ |   Max | Unit   |
|------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|--------------|-------|-------|--------|
| t 17 t 18 t 19 t 20 t 21 t 22 t 23 t 24 t 25 t 26 t 27 t 28 t 29 | SCLK period CS falling edge to SCLK rising edge SCLK falling edge to CS rising edge CS falling edge to data output SCLK high time SCLK low time SCLK falling edge to SDO valid SDO hold time after SCLK falling SDI setup time SDI hold time SCLK enable time SCLK disable time CS high time |                            | 100          |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 31.5         |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 30           |       |       | ns     |
|                                                                  | enable                                                                                                                                                                                                                                                                                       |                            | 29           |       |    54 | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 20           |    50 |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 20           |    50 |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            |              |       |    16 | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 7            |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 0            |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 10           |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 0            |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 0            |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              |                            | 10           |       |       | ns     |
| t 30                                                             | CS low time                                                                                                                                                                                                                                                                                  | f MOD = MCLK/4             | 1.1 × t MCLK |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              | f MOD = MCLK/8             | 2.2 × t MCLK |       |       | ns     |
|                                                                  |                                                                                                                                                                                                                                                                                              | f MOD = MCLK/32            | 8.8 × t MCLK |       |       | ns     |

## Timing Diagrams

Figure 2. Data Interface Timing Diagram

<!-- image -->

t

9a

t

9b

MCLK

DCLK = MCLK/2

DCLK = MCLK/4

DCLK = MCLK/8

DRDY

DCLK

DOUT6

DOUT7

AND

MCLK

START

SYNC\_OUT

t

11

t

t

12

8a

t

8b

t

8c tODR

Figure 3. MCLK to DCLK Divider Timing Diagram

Figure 4. Daisy-Chain Setup and Hold Timing Diagram

t

14

t

13

Figure 5. Asynchronous START and SYNC\_OUT Timing Diagram

Rev. 0 | Page 15 of 22

t

9c

t

10

25518-003

25518-005

25518-004

<!-- image -->

<!-- image -->

Figure 7. SPI Serial Read Timing Diagram

<!-- image -->

Figure 8. SPI Serial Write Timing Diagram

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Table 7.

| Parameter                                                | Rating                                             |
|----------------------------------------------------------|----------------------------------------------------|
| AVDD1, AVDD2to AVSS 1 toDGND                             | -0.3 V to +6.5 V -0.3 V to +6.5 V -0.3 V to +6.5 V |
| AVDD1                                                    |                                                    |
| IOVDD toDGND                                             |                                                    |
| IOVDD,DREGCAPtoDGND(IOVDDTied toDREGCAPfor1.8VOperation) | -0.3 V to +2.25 V                                  |
| IOVDDtoAVSS                                              | -0.3 V to +7.5 V                                   |
| AVSStoDGND                                               | -3.25 V to +0.3 V                                  |
| Analog Input Voltage to AVSS                             | -0.3VtoAVDD1 +0.3V                                 |
| Reference Input Voltage to AVSS                          | -0.3VtoAVDD1 +0.3V                                 |
| Digital Input Voltage toDGND                             | -0.3 V to IOVDD + 0.3 V                            |
| Digital Output Voltage toDGND                            | -0.3 V to IOVDD + 0.3 V                            |
| Operating Temperature Range                              | -40°C to +105°C                                    |
| Storage Temperature Range                                | -65°C to +150°C                                    |
| MaximumJunction Temperature                              | 150°C                                              |
| Maximum Package Classification Temperature               | 260°C                                              |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 10. Pad Configuration

Table 8. Pad Function Descriptions

| Pad No.   | Mnemonic   | Pad Type   |   X-Axis (µm) |   Y-Axis (µm) | Description                                                                                                    |
|-----------|------------|------------|---------------|---------------|----------------------------------------------------------------------------------------------------------------|
| 1         | AIN1-      | Single     |         -3435 |          2307 | Negative Analog Input to ADCChannel 1.                                                                         |
| 2         | AIN1+      | Single     |         -3435 |          2186 | Positive Analog Input to ADC Channel 1.                                                                        |
| 3         | AVSS1A     | Single     |         -3435 |          1544 | Negative Analog Supply. AVSS1A is nominally 0 V.                                                               |
| 4         | AVDD1A     | Single     |         -3435 |          1228 | Analog Supply Voltage, 5 V ± 10% with Respect to AVSS.                                                         |
| 5A        | REF1-      | Double     |         -3435 |           754 | Negative reference terminal for Channel 0 to Channel 3. The REF1- voltage range is from AVSS to (AVDD1 - 1 V). |
| 5B        | REF1-      | Double     |         -3435 |           633 | Negative reference terminal for Channel 0 to Channel 3. The REF1- voltage range is from AVSS to (AVDD1 - 1 V). |
| 6A        | REF1+      | Double     |         -3435 |           513 | Positive reference terminal for Channel 0 to Channel 3. The REF1+ voltage range is from (AVSS + 1 V) to AVDD1. |
| 6B        | REF1+      | Double     |         -3435 |           392 | Positive reference terminal for Channel 0 to Channel 3. The REF1+ voltage range is from (AVSS + 1 V) to AVDD1. |
| 7         | AIN2-      | Single     |         -3435 |           159 | Negative Analog Input to ADCChannel 2.                                                                         |
| 8         | AIN2+      | Single     |         -3435 |            39 | Positive Analog Input to ADC Channel 2.                                                                        |
| 9         | AIN3-      | Single     |         -3435 |          -535 | Negative Analog Input to ADCChannel 3.                                                                         |
| 10        | AIN3+      | Single     |         -3435 |          -656 | Positive Analog Input to ADC Channel 3.                                                                        |

## Data Sheet

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

| Pad No.   | Mnemonic     | Pad Type   |   X-Axis (µm) |   Y-Axis (µm) | Description                                                                                                                                                                               |
|-----------|--------------|------------|---------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 11        | FILTER/GPIO4 | Single     |         -3435 |         -1415 | Filter Select/General-Purpose Input/Output 4. In pin control mode, FILTER/GPIO4 selects the filter type. In SPI control mode, FILTER/GPIO4 can be used as a general-purpose input/output. |
| 12        | MODE0/GP1O0  | Single     |         -3435 |         -1629 | Mode Selection/General-Purpose I/O Pin 0.                                                                                                                                                 |
| 13        | MODE1/GP1O1  | Single     |         -3435 |         -1948 | Mode Selection/General-Purpose I/O Pin 1.                                                                                                                                                 |
| 14        | MODE2/GP1O2  | Single     |         -3435 |         -2162 | Mode Selection/General-Purpose I/O Pin 2.                                                                                                                                                 |
| 15        | MODE3/GP1O3  | Single     |         -3435 |         -2376 | Mode Selection/General-Purpose I/O Pin 3.                                                                                                                                                 |
| 16        | ST0/CS       | Single     |         -3435 |         -2610 | Standby 0/Chip Select Input.                                                                                                                                                              |
| 17        | ST1/SCLK     | Single     |         -2610 |         -2835 | Standby 1/Serial Clock Input.                                                                                                                                                             |
| 18        | DEC1/SDI     | Single     |         -2296 |         -2835 | Decimation Rate Control Input 1/Serial Data Input.                                                                                                                                        |
| 19        | DEC0/SDO     | Single     |         -1982 |         -2835 | Decimation Rate Control Input 0/Serial Data Output.                                                                                                                                       |
| 20        | DOUT7        | Single     |         -1668 |         -2835 | Conversion Data Output 7.                                                                                                                                                                 |
| 21        | DOUT6        | Single     |         -1355 |         -2835 | Conversion Data Output 6.                                                                                                                                                                 |
| 22        | DOUT5        | Single     |         -1041 |         -2835 | Conversion Data Output 5.                                                                                                                                                                 |
| 23        | DOUT4        | Single     |          -727 |         -2835 | Conversion Data Output 4.                                                                                                                                                                 |
| 24        | DOUT3        | Single     |          -413 |         -2835 | Conversion Data Output 3.                                                                                                                                                                 |
| 25        | DOUT2        | Single     |           -94 |         -2835 | Conversion Data Output 2.                                                                                                                                                                 |
| 26        | DOUT1        | Single     |           219 |         -2835 | Conversion Data Output 1.                                                                                                                                                                 |
| 27        | DOUT0        | Single     |           533 |         -2835 | Conversion Data Output 0.                                                                                                                                                                 |
| 28        | DCLK         | Single     |           847 |         -2835 | ADC Conversion Data Clock.                                                                                                                                                                |
| 29        | DRDY         | Single     |          1161 |         -2835 | Data Ready.                                                                                                                                                                               |
| 30        | RESET        | Single     |          1475 |         -2835 | Hardware Asynchronous Reset Input.                                                                                                                                                        |
| 31        | XTAL1        | Single     |          2884 |         -2835 | Input 1 for Crystal or Connection to an LVDS Clock.                                                                                                                                       |
| 32        | XTAL2/MCLK   | Single     |          3089 |         -2835 | Input 2 for CMOS or Crystal/LVDS Sampling Clock.                                                                                                                                          |
| 33        | DGND         | Single     |          3435 |         -2565 | Digital Ground. DGNDis nominally 0 V.                                                                                                                                                     |
| 34A       | DREGCAP      | Double     |          3437 |         -2435 | Digital Low Dropout (LDO) Regulator Output.                                                                                                                                               |
| 34B       | DREGCAP      | Double     |          3437 |         -2323 | Digital LDO Regulator Output.                                                                                                                                                             |
| 35        | IOVDD        | Single     |          3435 |         -1993 | Digital Supply. IOVDD sets the logic levels for all interface pins.                                                                                                                       |
| 36        | SYNC_IN      | Single     |          3435 |         -1853 | Synchronization Input. SYNC_IN receives the synchronous signal from SYNC_OUT.                                                                                                             |
| 37        | START        | Single     |          3435 |         -1639 | Start Signal. The START pulse synchronizes the AD7768-CHIPS to other devices. The signal can be asynchronous                                                                              |
| 38        | SYNC_OUT     | Single     |          3435 |         -1425 | Synchronization Output. SYNC_OUT operates only when the START input is used.                                                                                                              |
| 39        | AIN7+        | Single     |          3435 |          -656 | Positive Analog Input to ADC Channel 7.                                                                                                                                                   |
| 40        | AIN7-        | Single     |          3435 |          -535 | Negative Analog Input to ADCChannel 7.                                                                                                                                                    |
| 41        | AIN6+        | Single     |          3435 |            39 | Positive Analog Input to ADC Channel 6.                                                                                                                                                   |
| 42        | AIN6-        | Single     |          3435 |           159 | Negative Analog Input to ADCChannel 6.                                                                                                                                                    |
| 43A       | REF2+        | Double     |          3435 |           392 | Reference Input, Positive. REF2+ is the positive reference                                                                                                                                |
| 43B       | REF2+        | Double     |          3435 |           513 | Reference Input, Positive. REF2+ is the positive reference terminal for Channel 4 to Channel 7.                                                                                           |
| 44A       | REF2-        | Double     |          3435 |           633 | Reference Input, Negative. REF2- is the negative reference terminal for Channel 4 to Channel 7.                                                                                           |
| 44B       | REF2-        | Double     |          3435 |           754 | Reference Input, Negative. REF2- is the negative reference terminal for Channel 4 to Channel 7.                                                                                           |
| 45        | AVDD1B       | Single     |          3435 |          1228 | Analog Supply Voltage. AVDD1B is 5 V ± 10% with respect to AVSS.                                                                                                                          |
| 46        | AVSS1B       | Single     |          3435 |          1544 | Negative Analog Supply. AVSS1B is nominally 0 V.                                                                                                                                          |
| 47        | AIN5+        | Single     |          3435 |          2186 | Positive Analog Input to ADC Channel 5.                                                                                                                                                   |
| 48        | AIN5-        | Single     |          3435 |          2307 | Negative Analog Input to ADCChannel 5.                                                                                                                                                    |
| 49        | AIN4+        | Single     |          3197 |          2835 | Positive Analog Input to ADC Channel 4.                                                                                                                                                   |
| 50        | AIN4-        | Single     |          3076 |          2835 | Negative Analog Input to ADCChannel 4.                                                                                                                                                    |
| 51        | AVSS2B       | Single     |          2808 |          2835 | Negative Analog Supply. AVSS2B is nominally 0 V.                                                                                                                                          |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

| Pad No.   | Mnemonic   | Pad Type   |   X-Axis (µm) |   Y-Axis (µm) | Description                                                                                               |
|-----------|------------|------------|---------------|---------------|-----------------------------------------------------------------------------------------------------------|
| 52A       | REGCAPB    | Double     |          2529 |          2837 | Analog LDO Regulator Output.                                                                              |
| 52B       | REGCAPB    | Double     |          2415 |          2837 | Analog LDO Regulator Output.                                                                              |
| 53        | AVDD2B     | Single     |          2035 |          2835 | Analog Supply Voltage. AVDD2B is 2 V to 5.5 V with respect to AVSS.                                       |
| 54        | AVSS       | Single     |           885 |          2835 | Negative Analog Supply. AVSS is nominally 0 V.                                                            |
| 55        | FORMAT1    | Single     |           479 |          2835 | Format Selection.                                                                                         |
| 56        | FORMAT0    | Single     |           165 |          2835 | Format Selection.                                                                                         |
| 57        | PIN/SPI    | Single     |          -155 |          2835 | Pin Control/SPI Control. PIN/SPI sets the control method.                                                 |
| 58        | CLK_SEL    | Single     |          -469 |          2835 | Clock Select.                                                                                             |
| 59A       | VCM        | Double     |          -819 |          2835 | Common-Mode Voltage Output. VCMoutputs (AVDD1 - AVSS)/2 V, which is 2.5 V by default in pin control mode. |
| 59B       | VCM        | Double     |          -940 |          2835 | Common-Mode Voltage Output. VCMoutputs (AVDD1 - AVSS)/2 V, which is 2.5 V by default in pin control mode. |
| 60        | AVDD2A     | Single     |         -2035 |          2835 | Analog Supply Voltage. AVDD2A is 2 V to 5.5 V with respect to AVSS.                                       |
| 61A       | REGCAPA    | Double     |         -2415 |          2835 | Analog LDO Regulator Output.                                                                              |
| 61B       | REGCAPA    | Double     |         -2529 |          2835 | Analog LDO Regulator Output.                                                                              |
| 62        | AVSS2A     | Single     |         -2808 |          2835 | Negative Analog Supply.                                                                                   |
| 63        | AIN0-      | Single     |         -3076 |          2835 | Negative Analog Input to ADCChannel 0.                                                                    |
| 64        | AIN0+      | Single     |         -3197 |          2835 | Positive Analog Input to ADC Channel 0.                                                                   |

## OUTLINE DIMENSIONS

Figure 11. 64-Pad Bare Die [CHIP] (C-64-1) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

Table 9. Die Specifications

| Parameter            | Value                      | Unit   |
|----------------------|----------------------------|--------|
| Die Size             | 7080 × 5880                | µm     |
| Thickness            | 305                        | µm     |
| Bond Pad             | 70 × 70                    | µm     |
| Bond Pad Composition | 0.5 aluminum copper (AlCu) | %      |

## Table 10. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy dispense                |
| Bonding Method       | Thermosonic gold ball bonding |
| Bonding Sequence     | Bond Pad 54 (AVSS) first      |

## [AD7768-CHIPS](https://www.analog.com/AD7768?doc=AD7768-CHIPS.pdf)

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description                 | Package Option   |
|--------------|---------------------|-------------------------------------|------------------|
| AD7768-CHIPS | -40°C to +105°C     | 64-Pad Bare Die [CHIP], Waffle Pack | C-64-1           |

<!-- image -->