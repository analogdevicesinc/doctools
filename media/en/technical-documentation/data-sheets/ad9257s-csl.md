<!-- lastmod 2021-10-11 -->
<!-- image -->

## Octal, 14-Bit, 65 MSPS Serial LVDS 1.8 V Analog-to-Digital Converter

## GENERAL DESCRIPTION

The AD9257S-CSL is an octal, 14-bit, 65 MSPS analog-to-digital converter (ADC) with an on-chip sample-and-hold circuit designed for low cost, low power, small size, and ease of use. The product operates at a conversion rate of up to 65 MSPS and is optimized for outstanding dynamic performance and low power in applications where a small package size is critical.

The ADC requires a single 1.8 V power supply and low voltage, positive emitter-coupled logic (LVPECL)-/ CMOS-/low voltage differential signaling (LVDS)-compatible sample rate clock for full performance operation. No external reference or driver components are required for many applications.

The ADC automatically multiplies the sample rate clock for the appropriate LVDS serial data rate. A data clock output (DCO) for capturing data on the output and a frame clock output (FCO) for signaling a new output byte are provided. Individual channel power-down is supported and typically consumes 1 mW when all channels are disabled. The ADC contains several features designed to maximize flexibility and minimize system cost, such as programmable clock and data alignment and programmable digital test pattern generation. The available digital test patterns include built-in deterministic and pseudorandom patterns, along with custom user-defined test patterns entered via the serial port interface (SPI).

The AD9257S-CSL is available in an RoHS-compliant, 64-lead lead frame chip scale package (LFCSP). The device is specified over the -55°C to +125°C temperature range. This product is protected by a U.S. patent. Additional application and technical information can be found in the Commercial Space Products Program brochure and the AD9257 data sheet.

## PRODUCT HIGHLIGHTS

1. Small Footprint. Eight ADCs are contained in a small, spacesaving package.
2. Low Power of 55 mW/Channel at 65 MSPS with Scalable Power Options.
3. Ease of Use. A DCO is provided that operates at frequencies of up to 455 MHz and supports double data rate (DDR) operation.
4. User Flexibility. The SPI control offers a wide range of flexible features to meet specific system requirements.
5. Pin Compatible with the AD9637 (12-Bit Octal ADC).

## FEATURES

- Low power: 55 mW per channel at 65 MSPS with scalable power options
- SNR = 75.5 dB (to Nyquist)
- SFDR = 91 dBc (to Nyquist)
- DNL = ±0.6 LSB (typical), INL = ±1.1 LSB (typical)
- Serial LVDS (ANSI-644, default)
- Low power, reduced signal option (similar to IEEE 1596.3)
- Data and frame clock outputs
- 650 MHz full power analog bandwidth
- 2 V p-p input voltage range
- 1.8 V supply operation
- Serial port control
- Full chip and individual channel power-down modes
- Flexible bit orientation
- Built-in and custom digital test pattern generation
- Programmable clock and data alignment
- Programmable output resolution
- Standby mode

## COMMERCIAL SPACE FEATURES

- Military temperature range (-55°C to +125°C)
- Wafer diffusion lot traceability
- Radiation lot acceptance test (RLAT)
- Total ionizing dose (TID)
- Radiation benchmark
- Single event latch-up (SEL)

## APPLICATIONS

- Low Earth orbit (LEO) space payloads
- Quadrature and diversity radio receiver
- Optical imaging

## TABLE OF CONTENTS

| Features................................................................   |   1 |
|----------------------------------------------------------------------------|-----|
| Commercial Space Features.................................1                |     |
| Applications...........................................................    |   1 |
| General Description...............................................1        |     |
| Product Highlights.................................................        |   1 |
| Functional Block Diagram......................................3            |     |
| Specifications........................................................     |   4 |
| DC Specifications...............................................4          |     |
| AC Specifications...............................................5          |     |
| Digital Specifications..........................................6          |     |
| Switching Specifications.....................................7             |     |

## REVISION HISTORY

10/2021-Revision 0: Initial Version

| Timing Specifications.........................................     |   8 |
|--------------------------------------------------------------------|-----|
| Radiation Test and Limit Specifications............10              |     |
| Absolute Maximum Ratings.................................11        |     |
| Thermal Characteristics....................................11      |     |
| Outgas Testing..................................................11 |     |
| ESD Caution.....................................................11 |     |
| Pin Configuration and Function Descriptions......                  |  12 |
| Typical Performance Characteristics...................14           |     |
| Outline Dimensions.............................................    |  15 |
| Ordering Guide.................................................15  |     |

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## SPECIFICATIONS

## DC SPECIFICATIONS

AVDD = 1.8 V, DRVDD = 1.8 V, 2 V p-p differential input, 1.0 V internal reference, and analog input (A IN ) = -1.0 dBFS, unless otherwise noted.

Table 1.

| Parameter 1                                                  | Temperature   |   Min | Typ        |   Max | Unit    |
|--------------------------------------------------------------|---------------|-------|------------|-------|---------|
| RESOLUTION                                                   |               |    14 |            |       | Bits    |
| ACCURACY                                                     |               |       |            |       |         |
| No Missing Codes                                             | Full          |       | Guaranteed |       |         |
| Offset Error                                                 | Full          |  -0.7 | -0.3       |  +0.1 | %FSR    |
| Offset Matching                                              | Full          |     0 | 0.23       |   0.6 | %FSR    |
| Gain Error                                                   | Full          |  -7.0 | -2.9       |  +1.0 | %FSR    |
| Gain Matching                                                | Full          |  -1.0 | +1.6       |  +5.0 | %FSR    |
| Differential Nonlinearity (DNL)                              | Full          | -0.95 | ±0.6       |  +1.6 | LSB     |
| Integral Nonlinearity (INL)                                  | Full          |  -4.5 | ±1.1       |  +4.5 | LSB     |
| TEMPERATURE DRIFT                                            |               |       |            |       |         |
| Offset Error                                                 | Full          |       | ±2         |       | ppm/°C  |
| INTERNAL VOLTAGE REFERENCE                                   |               |       |            |       |         |
| Output Voltage (1 V Mode)                                    | Full          |  0.98 | 0.99       |  1.01 | V       |
| Load Regulation at 1.0 mA (Reference Voltage (V REF ) = 1 V) | Full          |       | 2          |       | mV      |
| Input Resistance                                             | Full          |       | 7.5        |       | kΩ      |
| INPUT-REFERRED NOISE                                         |               |       |            |       |         |
| V REF = 1.0 V                                                | 25°C          |       | 0.94       |       | LSB rms |
| ANALOG INPUTS                                                |               |       |            |       |         |
| Differential Input Voltage (V REF = 1 V)                     | Full          |       | 2          |       | V p-p   |
| Common-Mode Voltage                                          | Full          |       | 0.9        |       | V       |
| Common-Mode Range                                            | Full          |   0.5 |            |   1.3 | V       |
| Differential Input Resistance                                |               |       | 5.2        |       | kΩ      |
| Differential Input Capacitance                               | Full          |       | 3.5        |       | pF      |
| POWER SUPPLY                                                 |               |       |            |       |         |
| AVDD                                                         | Full          |   1.7 | 1.8        |   1.9 | V       |
| DRVDD                                                        | Full          |   1.7 | 1.8        |   1.9 | V       |
| AVDD Current (I AVDD )                                       | Full          |       | 198        |   211 | mA      |
| DRVDD Current (I DRVDD ) (ANSI-644 Mode)                     | Full          |       | 60         |    93 | mA      |
| I DRVDD (Reduced Range Mode)                                 | 25°C          |       | 45         |       | mA      |
| TOTAL POWER CONSUMPTION                                      |               |       |            |       |         |
| Total Power Dissipation (Eight Channels, ANSI-644 Mode)      | Full          |       | 464        |   547 | mW      |
| Total Power Dissipation (Eight Channels, Reduced Range Mode) | 25°C          |       | 437        |       | mW      |
| Power-Down Dissipation                                       | 25°C          |       | 1          |       | mW      |
| Standby Dissipation 2                                        | 25°C          |       | 92         |       | mW      |

1 See the AN-835 Application Note, Understanding High Speed ADC Testing and Evaluation , for definitions and for details on how these tests were completed.

2 Can be controlled via the SPI.

## SPECIFICATIONS

## AC SPECIFICATIONS

AVDD = 1.8 V, DRVDD = 1.8 V, 2 V p-p differential input, 1.0 V internal reference, and A IN = -1.0 dBFS, unless otherwise noted. CLK divider = 8 used for typical characteristics at input frequency ≥ 19.7 MHz.

Table 2.

| Parameter 1                                                         | Temperature   |   Min |   Typ |   Max | Unit   |
|---------------------------------------------------------------------|---------------|-------|-------|-------|--------|
| SIGNAL-TO-NOISE RATIO (SNR)                                         |               |       |       |       |        |
| Input Frequency (f IN ) = 9.7 MHz                                   | 25°C          |       |  75.7 |       | dBFS   |
| f IN = 19.7 MHz                                                     | Full          |  72.8 |  75.6 |       | dBFS   |
| f IN = 30.5 MHz                                                     | 25°C          |       |  75.5 |       | dBFS   |
| f IN = 63.5 MHz                                                     | 25°C          |       |  74.9 |       | dBFS   |
| f IN = 123.4 MHz                                                    | 25°C          |       |  73.2 |       | dBFS   |
| SIGNAL-TO-NOISE AND DISTORTION (SINAD) RATIO                        |               |       |       |       |        |
| f IN = 9.7 MHz                                                      | 25°C          |       |  75.6 |       | dBFS   |
| f IN = 19.7 MHz                                                     | Full          |  70.9 |  75.6 |       | dBFS   |
| f IN = 30.5 MHz                                                     | 25°C          |       |  75.4 |       | dBFS   |
| f IN = 63.5 MHz                                                     | 25°C          |       |  74.8 |       | dBFS   |
| f IN = 123.4 MHz                                                    | 25°C          |       |  72.8 |       | dBFS   |
| EFFECTIVE NUMBER OF BITS (ENOB)                                     |               |       |       |       |        |
| f IN = 9.7 MHz                                                      | 25°C          |       |  12.3 |       | Bits   |
| f IN = 19.7 MHz                                                     | Full          |  11.5 |  12.3 |       | Bits   |
| f IN = 30.5 MHz                                                     | 25°C          |       |  12.2 |       | Bits   |
| f IN = 63.5 MHz                                                     | 25°C          |       |  12.1 |       | Bits   |
| f IN = 123.4 MHz                                                    | 25°C          |       |  11.8 |       | Bits   |
| SPURIOUS-FREE DYNAMIC RANGE (SFDR)                                  |               |       |       |       |        |
| f IN = 9.7 MHz                                                      | 25°C          |       |    96 |       | dBc    |
| f IN = 19.7 MHz                                                     | Full          |    78 |    96 |       | dBc    |
| f IN = 30.5 MHz                                                     | 25°C          |       |    91 |       | dBc    |
| f IN = 63.5 MHz                                                     | 25°C          |       |    95 |       | dBc    |
| f IN = 123.4 MHz                                                    | 25°C          |       |    83 |       | dBc    |
| WORST HARMONIC (SECOND OR THIRD)                                    |               |       |       |       |        |
| f IN = 9.7 MHz                                                      | 25°C          |       |   -99 |       | dBc    |
| f IN = 19.7 MHz                                                     | Full          |       |   -98 |   -78 | dBc    |
| f IN = 30.5 MHz                                                     | 25°C          |       |   -91 |       | dBc    |
| f IN = 63.5 MHz                                                     | 25°C          |       |   -98 |       | dBc    |
| f IN = 123.4 MHz                                                    | 25°C          |       |   -83 |       | dBc    |
| WORST OTHER (EXCLUDING SECOND OR THIRD)                             |               |       |       |       |        |
| f IN = 9.7 MHz                                                      | 25°C          |       |   -96 |       | dBc    |
| f IN = 19.7 MHz                                                     | Full          |       |   -96 |   -86 | dBc    |
| f IN = 30.5 MHz                                                     | 25°C          |       |   -98 |       | dBc    |
| f IN = 63.5 MHz                                                     | 25°C          |       |   -95 |       | dBc    |
| f IN = 123.4 MHz                                                    | 25°C          |       |   -94 |       | dBc    |
| TWO-TONE INTERMODULATION DISTORTION (IMD)-AIN1 AND AIN2 = -7.0 dBFS |               |       |       |       |        |
| f IN1 = 30 MHz, f IN2 = 32 MHz                                      | 25°C          |       |    92 |       | dBc    |
| CROSSTALK 2                                                         | 25°C          |       |   -98 |       | dB     |
| Crosstalk (Overrange Condition) 3                                   | 25°C          |       |   -94 |       | dB     |
| POWER SUPPLY REJECTION RATIO (PSRR) 4                               | 25°C          |       |       |       |        |
| AVDD                                                                |               |       |    52 |       | dB     |
| DRVDD                                                               |               |       |    71 |       | dB     |

## SPECIFICATIONS

Table 2.

| Parameter 1                        | Temperature   | Min   |   Typ | Max   | Unit   |
|------------------------------------|---------------|-------|-------|-------|--------|
| ANALOG INPUT BANDWIDTH, FULL POWER | 25°C          |       |   650 |       | MHz    |

1 See the AN-835 Application Note, Understanding High Speed ADC Testing and Evaluation , for definitions and for details on how these tests were completed.

2 Crosstalk is measured at 10 MHz with -1.0 dBFS analog input on one channel and no input on the adjacent channel.

3 Overrange condition is 3 dB above the full-scale input range.

4 PSRR is measured by injecting a sinusoidal signal at 10 MHz to the power supply pin and measuring the output spur on the fast Fourier transform (FFT). PSRR is calculated as the ratio of the amplitudes of the spur voltage over the pin voltage, expressed in decibels.

## DIGITAL SPECIFICATIONS

AVDD = 1.8 V, DRVDD = 1.8 V, 2 V p-p differential input, 1.0 V internal reference, and A IN = -1.0 dBFS, unless otherwise noted.

Table 3.

| Parameter 1, 2                                         | Temperature   | Min        | Typ              | Max        | Unit   |
|--------------------------------------------------------|---------------|------------|------------------|------------|--------|
| CLOCK INPUTS (CLK+, CLK-)                              |               |            |                  |            |        |
| Logic Compliance                                       |               |            | CMOS/LVDS/LVPECL |            |        |
| Differential Input Voltage 3                           | Full          | 0.2        |                  | 3.6        | V p-p  |
| Input Voltage Range                                    | Full          | AGND - 0.2 |                  | AVDD + 0.2 | V      |
| Input Common-Mode Voltage                              | Full          |            | 0.9              |            | V      |
| Input Resistance (Differential)                        | 25°C          |            | 15               |            | kΩ     |
| Input Capacitance                                      | 25°C          |            | 4                |            | pF     |
| LOGIC INPUTS (PDWN, SYNC, SCLK)                        |               |            |                  |            |        |
| Logic 1 Voltage                                        | Full          | 1.2        |                  | AVDD + 0.2 | V      |
| Logic 0 Voltage                                        | Full          | 0          |                  | 0.8        | V      |
| Input Resistance                                       | 25°C          |            | 30               |            | kΩ     |
| Input Capacitance                                      | 25°C          |            | 2                |            | pF     |
| LOGIC INPUT (CSB)                                      |               |            |                  |            |        |
| Logic 1 Voltage                                        | Full          | 1.2        |                  | AVDD + 0.2 | V      |
| Logic 0 Voltage                                        | Full          | 0          |                  | 0.8        | V      |
| Input Resistance                                       | 25°C          |            | 26               |            | kΩ     |
| Input Capacitance                                      | 25°C          |            | 2                |            | pF     |
| LOGIC INPUT (SDIO)                                     |               |            |                  |            |        |
| Logic 1 Voltage                                        | Full          | 1.2        |                  | AVDD + 0.2 | V      |
| Logic 0 Voltage                                        | Full          | 0          |                  | 0.8        | V      |
| Input Resistance                                       | 25°C          |            | 26               |            | kΩ     |
| Input Capacitance                                      | 25°C          |            | 5                |            | pF     |
| LOGIC OUTPUT (SDIO) 4                                  |               |            |                  |            |        |
| Logic 1 Voltage (Output High Current (I OH ) = 800 μA) | Full          |            | 1.79             |            | V      |
| Logic 0 Voltage (Output Low Current (I OL ) = 50 μA)   | Full          |            |                  | 0.05       | V      |
| DIGITAL OUTPUTS (D± x), ANSI-644                       |               |            |                  |            |        |
| Logic Compliance                                       |               |            | LVDS             |            |        |
| Differential Output Voltage (V OD )                    | Full          | ±247       | ±350             | ±454       | mV     |
| Output Offset Voltage (V OS )                          | Full          | 1.13       | 1.21             | 1.38       | V      |
| Output Coding (Default)                                |               |            | Twos complement  |            |        |

## SPECIFICATIONS

| Table 3. Parameter 1, 2                                  | Temperature   | Min   | Typ             | Max             | Unit   |
|----------------------------------------------------------|---------------|-------|-----------------|-----------------|--------|
| DIGITAL OUTPUTS (D± x), LOW POWER, REDUCED SIGNAL OPTION |               |       |                 |                 |        |
| Logic Compliance Differential Output Voltage (V OD )     | LVDS Full     | ±150  | ±200            | ±250            | mV     |
| Output Offset Voltage (V OS )                            | Full          | 1.13  | 1.21            | 1.38            | V      |
| Output Coding (Default)                                  |               |       | Twos complement | Twos complement |        |

- 1 See the AN-835 Application Note, Understanding High Speed ADC Testing and Evaluation , for definitions and for details on how these tests were completed.

2 When referencing a single function of a multifunction pin in the parameters, only the portion of the pin name that is relevant to the specification is listed. For full pin names of multifunction pins, refer to the Pin Configuration and Function Descriptions section.

3 This is specified for LVDS and LVPECL only.

4 This is specified for 13 SDIO/DFS pins sharing the same connection.

## SWITCHING SPECIFICATIONS

AVDD = 1.8 V, DRVDD = 1.8 V, 2 V p-p differential input, 1.0 V internal reference, and A IN = -1.0 dBFS, unless otherwise noted.

Table 4.

| Parameter 1, 2                             | Temperature   | Min                  | Typ                    | Max                  | Unit         |
|--------------------------------------------|---------------|----------------------|------------------------|----------------------|--------------|
| CLOCK 3                                    |               |                      |                        |                      |              |
| Input Clock Rate                           | Full          | 10                   |                        | 520                  | MHz          |
| Conversion Rate                            | Full          | 10                   |                        | 65                   | MSPS         |
| Clock Pulse Width High (t EH )             | Full          |                      | 7.69                   |                      | ns           |
| Clock Pulse Width Low (t EL )              | Full          |                      | 7.69                   |                      | ns           |
| OUTPUT PARAMETERS 3                        |               |                      |                        |                      |              |
| Propagation Delay (t PD )                  | Full          | 1.5                  | 2.3                    | 3.1                  | ns           |
| Rise Time (t R ) (20% to 80%)              | Full          |                      | 300                    |                      | ps           |
| Fall Time (t F ) (20% to 80%)              | Full          |                      | 300                    |                      | ps           |
| FCO Propagation Delay (t FCO )             | Full          | 1.5                  | 2.3                    | 3.1                  | ns           |
| DCO Propagation Delay (t CPD ) 4           | Full          |                      | t FCO + (t SAMPLE /28) |                      | ns           |
| DCO to Data Delay (t DATA ) 4              | Full          | (t SAMPLE /28) - 300 | (t SAMPLE /28)         | (t SAMPLE /28) + 300 | ps           |
| DCO to FCO Delay (t FRAME ) 4              | Full          | (t SAMPLE /28) - 300 | (t SAMPLE /28)         | (t SAMPLE /28) + 300 | ps           |
| Data to Data Skew (t DATA-MAX - t DATA-MIN | Full          |                      | ±50                    | ±200                 | ps           |
| Wake-Up Time (Standby)                     | 25°C          |                      | 35                     |                      | μs           |
| Wake-Up Time (Power-Down) 5                | 25°C          |                      | 375                    |                      | μs           |
| Pipeline Latency                           | Full          |                      | 16                     |                      | Clock cycles |
| APERTURE                                   |               |                      |                        |                      |              |
| Aperture Delay (t A )                      | 25°C          |                      | 1                      |                      | ns           |
| Aperture Uncertainty (Jitter)              | 25°C          |                      | 0.1                    |                      | ps rms       |
| Out-of-Range Recovery Time                 | 25°C          |                      | 1                      |                      | Clock cycles |

## SPECIFICATIONS

## TIMING SPECIFICATIONS

Table 5.

| Parameter                 | Description                                                                                                                   | Limit     | Unit                  |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------|-----------|-----------------------|
| SYNC TIMING REQUIREMENTS  |                                                                                                                               |           |                       |
| t SSYNC t HSYNC           | SYNC to rising edge of CLK+ setup time SYNC to rising edge of CLK+ hold time                                                  | 0.24 0.40 | ns typical ns typical |
| SPI TIMING REQUIREMENTS 1 | See Figure 4                                                                                                                  |           |                       |
| t DS                      | Setup time between the data and the rising edge of SCLK                                                                       | 2         | ns minimum            |
| t DH                      | Hold time between the data and the rising edge of SCLK                                                                        | 2         | ns minimum            |
| t CLK                     | Period of the SCLK                                                                                                            | 40        | ns minimum            |
| t S                       | Setup time between CSB and SCLK                                                                                               | 2         | ns minimum            |
| t H                       | Hold time between CSB and SCLK                                                                                                | 2         | ns minimum            |
| t HIGH                    | SCLK pulse width high                                                                                                         | 10        | ns minimum            |
| t LOW                     | SCLK pulse width low                                                                                                          | 10        | ns minimum            |
| t EN_SDIO                 | Time required for the SDIO pin to switch from an input to an output relative to the SCLK falling edge (not shown in Figure 4) | 10        | ns minimum            |
| t DIS_SDIO                | Time required for the SDIO pin to switch from an output to an input relative to the SCLK rising edge (not shown in Figure 4)  | 10        | ns minimum            |

1 When referring to a single function of a multifunction pin, only the portion of the pin name that is relevant to the specification is listed. For full pin names of multifunction pins, refer to the Pin Configuration and Function Descriptions section.

## Timing Diagrams

Figure 2. Word Wise DDR, 1× Frame, 14-Bit Output Mode (Default)

<!-- image -->

## SPECIFICATIONS

<!-- image -->

## SPECIFICATIONS

## RADIATION TEST AND LIMIT SPECIFICATIONS

AVDD = 1.8 V, DRVDD = 1.8 V, 2 V p-p differential input, 1.0 V internal reference, and A IN = -1.0 dBFS, unless otherwise noted. CLK divider = 8 used for typical characteristics at input frequency ≥ 19.7 MHz. Total ionizing dose (TID) testing characterized to 45 krads (30 krads + 50% overstress) with biased annealing at 100°C for 168 hours. Once characterized, TID testing is performed to 30 krads only.

Table 6.

| Parameter 1                                                  | Temperature   |   Min | Typ   |   Max | Unit   |
|--------------------------------------------------------------|---------------|-------|-------|-------|--------|
| ACCURACY                                                     |               |       |       |       |        |
| Offset Error                                                 | 25°C          |  -1.1 |       |  +0.2 | %FSR   |
| Offset Matching                                              | 25°C          |     0 |       |   0.8 | %FSR   |
| Gain Error                                                   | 25°C          | -10.0 |       |  +2.0 | %FSR   |
| Gain Matching                                                | 25°C          |  -2.0 |       |  +8.0 | %FSR   |
| Differential Nonlinearity (DNL)                              | 25°C          |  -1.2 |       |  +1.8 | LSB    |
| Integral Nonlinearity (INL)                                  | 25°C          |  -7.0 |       |  +7.0 | LSB    |
| INTERNAL VOLTAGE REFERENCE                                   |               |       |       |       |        |
| Output Voltage (1 V Mode)                                    | 25°C          |  0.98 |       |  1.01 | V      |
| POWER SUPPLY                                                 |               |       |       |       |        |
| AVDD Current (I AVDD )                                       | 25°C          |       |       |   232 | mA     |
| DRVDD Current (I DRVDD ) (ANSI-644 Mode)                     | 25°C          |       |       |   102 | mA     |
| TOTAL POWER CONSUMPTION                                      |               |       |       |       |        |
| Total Power Dissipation (Eight Channels, ANSI-644 Mode)      | 25°C          |       |       |   700 | mW     |
| Power-Down Dissipation                                       | 25°C          |       |       |    12 | mW     |
| Standby Dissipation 2                                        | 25°C          |       |       |   139 | mW     |
| SIGNAL-TO-NOISE RATIO (SNR)                                  |               |       |       |       |        |
| f IN = 19.7 MHz                                              | 25°C          |  56.0 |       |       | dBFS   |
| SIGNAL-TO-NOISE AND DISTORTION (SINAD) RATIO f IN = 19.7 MHz | 25°C          |  54.0 |       |       | dBFS   |
| SPURIOUS-FREE DYNAMIC RANGE (SFDR) f IN = 19.7 MHz           | 25°C          |    57 |       |       | dBc    |
| WORST HARMONIC (SECOND OR THIRD) f IN = 19.7 MHz             | 25°C          |       |       |   -59 | dBc    |
| WORST OTHER (EXCLUDING SECOND OR THIRD) f IN = 19.7 MHz      | 25°C          |       |       |   -62 | dBc    |

1 See the AN-835 Application Note, Understanding High Speed ADC Testing and Evaluation , for definitions and for details on how these tests were completed.

2 Can be controlled via the SPI.

## ABSOLUTE MAXIMUM RATINGS

| Table 7.                                               |                  |
|--------------------------------------------------------|------------------|
| Parameter                                              | Rating           |
| Electrical                                             |                  |
| AVDD to AGND                                           | -0.3 V to +2.0 V |
| DRVDD to AGND                                          | -0.3 V to +2.0 V |
| Digital Outputs (D± x, DCO+, DCO-, FCO+, FCO-) to AGND | -0.3 V to +2.0 V |
| CLK+, CLK- to AGND                                     | -0.3 V to +2.0 V |
| VIN+ x, VIN- x to AGND                                 | -0.3 V to +2.0 V |
| SCLK/DTP, SDIO/DFS, CSB to AGND                        | -0.3 V to +2.0 V |
| SYNC, PDWN to AGND                                     | -0.3 V to +2.0 V |
| RBIAS to AGND                                          | -0.3 V to +2.0 V |
| VREF, SENSE to AGND                                    | -0.3 V to +2.0 V |
| Environmental                                          |                  |
| Operating Temperature Range (Ambient)                  | -55°C to +125°C  |
| Maximum Junction Temperature                           | 150°C            |
| Lead Temperature (Soldering, 10 sec)                   | 300°C            |
| Storage Temperature Range (Ambient)                    | -65°C to +150°C  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL CHARACTERISTICS

The exposed pad must be soldered to the ground plane for the LFCSP. Soldering the exposed pad to the printed circuit board (PCB) increases the reliability of the solder joints and maximizes the thermal capability of the package.

| Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   | Table 8. Thermal Resistance 1   |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Package Type                    | Airflow Velocity (m/ sec)       | θ JA 2,3                        | θ JC 2, 4                       | θ JB 2, 5                       | Ψ JT 2, 3                       | Unit                            |
| CP-64-17                        | 0                               | 22.3                            | 1.4                             | N/A                             | 0.1                             | °C/W                            |
|                                 | 1.0                             | 19.5                            | N/A                             | 11.8                            | 0.2                             | °C/W                            |
|                                 | 2.5                             | 17.5                            | N/A                             | N/A                             | 0.2                             | °C/W                            |

- 1 N/A means not applicable.
- 2 Per JEDEC 51-7, plus JEDEC 25-5 2S2P test board.
- 3 Per JEDEC JESD51-2 (still air) or JEDEC JESD51-6 (moving air).
- 4 Per MIL-Std 883, Method 1012.1.
- 5 Per JEDEC JESD51-8 (still air).

Typical θ JA is specified for a 4-layer PCB with a solid ground plane. As shown in Table 8, airflow improves heat dissipation, which reduces θ JA . In addition, metal in direct contact with the package leads from metal traces, through holes, ground, and power planes reduces θ JA .

## OUTGAS TESTING

The criteria used for the acceptance and rejection of materials must be determined by the user and based upon specific component and system requirements. Historically, a total mass loss (TML) of 1.00% and collected volatile condensable material (CVCM) of 0.10% have been used as screening levels for rejection of spacecraft materials.

## Table 9. Outgas Testing

| Specification (Tested per ASTM E595-15)   |   Value | Unit   |
|-------------------------------------------|---------|--------|
| Total Mass Lost                           |    0.06 | %      |
| Collected Volatile Condensable Material   |    0.01 | %      |
| Water Vapor Recovered                     |    0.03 | %      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 6. Pin Configuration, Top View

<!-- image -->

Table 10. Pin Function Descriptions

| Pin No.                                        | Mnemonic          | Description                                                                                                                                                                                    |
|------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0                                              | AGND, Exposed Pad | Analog Ground, Exposed Pad. The exposed thermal pad on the bottom of the package provides the analog ground for the device. This exposed pad must be connected to ground for proper operation. |
| 1, 4, 7, 8, 11, 12, 37, 42, 45, 48, 51, 59, 62 | AVDD              | 1.8 V Analog Supply.                                                                                                                                                                           |
| 13, 36                                         | NIC               | Not Internally Connected. These pins can be connected to ground.                                                                                                                               |
| 14, 35                                         | DRVDD             | 1.8 V Digital Output Driver Supply.                                                                                                                                                            |
| 2, 3                                           | VIN+ G, VIN- G    | ADC G Analog Input True, ADC G Analog Input Complement.                                                                                                                                        |
| 5, 6                                           | VIN- H, VIN+ H    | ADC H Analog Input Complement, ADC H Analog Input True.                                                                                                                                        |
| 9, 10                                          | CLK-, CLK+        | Input Clock Complement, Input Clock True.                                                                                                                                                      |
| 15, 16                                         | D- H, D+ H        | ADC H Digital Output Complement, ADC H Digital Output True.                                                                                                                                    |
| 17, 18                                         | D- G, D+ G        | ADC G Digital Output Complement, ADC G Digital Output True.                                                                                                                                    |
| 19, 20                                         | D- F, D+ F        | ADC F Digital Output Complement, ADC F Digital Output True.                                                                                                                                    |
| 21, 22                                         | D- E, D+ E        | ADC E Digital Output Complement, ADC E Digital Output True.                                                                                                                                    |
| 23, 24                                         | DCO-, DCO+        | Data Clock Digital Output Complement, Data Clock Digital Output True.                                                                                                                          |
| 25, 26                                         | FCO-, FCO+        | Frame Clock Digital Output Complement, Frame Clock Digital Output True.                                                                                                                        |
| 27, 28                                         | D- D, D+ D        | ADC D Digital Output Complement, ADC D Digital Output True.                                                                                                                                    |
| 29, 30                                         | D- C, D+ C        | ADC C Digital Output Complement, ADC C Digital Output True.                                                                                                                                    |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 10. Pin Function Descriptions

| Pin No.   | Mnemonic       | Description                                                                      |
|-----------|----------------|----------------------------------------------------------------------------------|
| 31, 32    | D- B, D + B    | ADC B Digital Output Complement, ADC B Digital Output True.                      |
| 33, 34    | D- A, D+ A     | ADC A Digital Output Complement, ADC A Digital Output True.                      |
| 38        | SCLK/DTP       | Serial Clock (SCLK)/Digital Test Pattern (DTP).                                  |
| 39        | SDIO/DFS       | Serial Data Input/Output (SDIO)/Data Format Select (DFS).                        |
| 40        | CSB            | Chip Select Bar.                                                                 |
| 41        | PDWN           | Power-Down.                                                                      |
| 43, 44    | VIN+ A, VIN- A | ADC A Analog Input True, ADC A Analog Input Complement.                          |
| 46, 47    | VIN- B, VIN+ B | ADC B Analog Input Complement, ADC B Analog Input True.                          |
| 49, 50    | VIN+ C, VIN- C | ADC C Analog Input True, ADC C Analog Input Complement.                          |
| 52, 53    | VIN- D, VIN+ D | ADC D Analog Input Complement, ADC D Analog Input True.                          |
| 54        | RBIAS          | Analog Current Bias Setting. Connect to 10 kΩ (1% tolerance) resistor to ground. |
| 55        | SENSE          | Reference Mode Selection.                                                        |
| 56        | VREF           | Voltage Reference Input/Output.                                                  |
| 57        | VCM            | Analog Output Voltage at Midsupply. Sets common mode of the analog inputs.       |
| 58        | SYNC           | Digital Input. SYNC input to clock divider. 30 kΩ internal pull-down.            |
| 60, 61    | VIN+ E, VIN- E | ADC E Analog Input True, ADC E Analog Input Complement.                          |
| 63, 64    | VIN- F, VIN+ F | ADC F Analog Input Complement, ADC F Analog Input True.                          |

## TYPICAL PERFORMANCE CHARACTERISTICS

See the AD9257 data sheet for a full set of Typical Performance Characteristics plots.

Figure 7. SNR/SFDR vs. Temperature, f IN = 9.7 MHz, Sample Frequency (f SAMPLE ) = 65 MSPS

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

Figure 8. 64-Lead Lead Frame Chip Scale Package [LFCSP] 9 mm × 9 mm Body and 0.75 mm Package Height (CP-64-17)

Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description                         | Packing Quantity   | Package Option   |
|-------------------|---------------------|---------------------------------------------|--------------------|------------------|
| AD9257TCPZ-65-CSL | -55°C to +125°C     | 64-Lead LFCSP (9 mm × 9 mm × 0.75 mm w/ EP) | Tray, 260          | CP-64-17         |

<!-- image -->

Updated: September 29, 2021