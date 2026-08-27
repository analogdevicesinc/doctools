<!-- lastmod 2022-02-25 -->
<!-- image -->

## [AD7606BBCHIPS](http://www.analog.com/AD7606B)

## 8-Channel DAS with 16-Bit, 800 kSPS Bipolar Input, Simultaneous Sampling ADC

## FEATURES

- 16-bit ADC with 800 kSPS on all channels
- Input buffer with 5 MΩ analog input impedance
- 1 ppm/°C typical positive and negative full-scale error drift
- -40°C to +125°C operating temperature range
- Single 5 V analog supply and 1.71 V to 3.6 V V DRIVE supply
- ±21 V input clamp protection with 8 kV ESD
- Per channel selectable analog input ranges
- Single-ended, bipolar: ±10 V, ±5 V, and ±2.5 V
- Per channel system phase, offset, and gain calibration
- Analog input open circuit detection feature
- ≤22 LSB (typical) open circuit code error (R PD = 10 kΩ)
- Self diagnostics and monitoring features
- CRC error checking on read/write data and registers

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

## APPLICATIONS

- Power line monitoring
- Protective relays
- Multiphase motor control
- Instrumentation and control systems
- Data acquisition systems

## COMPANION PRODUCTS

- Voltage References: ADR4525, LT6657, LTC6655
- Digital Isolators: ADuM142E, ADuM6422A, ADuM5020, ADuM5028
- [AD7606x Family Software Model](https://www.analog.com/en/products/ad7606b.html#product-tools)
- Additional companion products on the AD7606B product page

## TABLE OF CONTENTS

Features................................................................ 1

Applications........................................................... 1

Companion Products ............................................ 1

Functional Block Diagram......................................1

General Description...............................................3

Specifications........................................................ 4

Timing Specifications......................................... 6

Universal Timing Specifications......................... 6

Parallel Mode Timing Specifications.................. 8

## REVISION HISTORY

2/2022-Revision 0: Initial Version

| Serial Mode Timing Specifications.....................                                   |   9 |
|------------------------------------------------------------------------------------------|-----|
| Absolute Maximum Ratings.................................11                              |     |
| Electrostatic Discharge (ESD) Ratings.............11                                     |     |
| ESD Caution.....................................................11                       |     |
| Pin Configuration and Function Descriptions......                                        |  12 |
| Outline Dimensions.............................................                          |  17 |
| Die Specifications and Assembly Recommendations......................................... |  17 |
| Ordering Guide.................................................17                        |     |

## GENERAL DESCRIPTION

The AD7606BBCHIPS is a 16-bit, simultaneous sampling, analog-to-digital data acquisition system (DAS) with eight channels. Each channel contains analog input clamp protection, a programmable gain amplifier (PGA), a low-pass filter, and a 16 -bit successive approximation register (SAR), analog-to-digital converter (ADC). The AD7606BBCHIPS also contains a flexible digital filter, low drift, 2.5 V precision reference and reference buffer to drive the ADC and flexible parallel and serial interfaces.

The AD7606BBCHIPS operates from a single 5 V supply and accommodates ±10 V, ±5 V, and ±2.5 V true bipolar input ranges when sampling at throughput rates of 800 kSPS for all channels. The input clamp protection tolerates voltages up to ±21 V. The AD7606BBCHIPS has a 5 MΩ analog input impedance, resulting in less than 20 LSB bipolar zero code when the input signal is disconnected and pulled to ground through a 10 kΩ external resistor. The single supply operation, on-chip filtering, and high input impedance eliminate the need for external driver op amps, which require bipolar supplies. For applications with lower throughput rates, the AD7606BBCHIPS flexible digital filter can be used to improve noise performance.

Table 1. Bipolar Input, Simultaneous Sampling Family of Devices

| Input Type        | Resolution (Bits)   | R IN 1 = 1 MΩ, 200 kSPS                | R IN = 5 MΩ, 800 kSPS   | R IN = 1 MΩ, 1 MSPS       | Number of Channels   |
|-------------------|---------------------|----------------------------------------|-------------------------|---------------------------|----------------------|
| Single-Ended      | 18 16 14            | AD7608 AD7606 AD7606-6 AD7606-4 AD7607 | AD7606B 2               | AD7606C-18 2 AD7606C-16 2 | 8 8 6 4 8            |
| True Differential | 18 16               | AD7609                                 |                         | AD7606C-18 2 AD7606C-16 2 | 8 8                  |

In hardware mode, the AD7606BBCHIPS is fully compatible with the AD7606. In software mode, the following advanced features are available:

- Additional ±2.5 V analog input range.
- Analog input range (±10 V, ±5 V, and ±2.5 V), selectable per channel.
- Additional oversampling (OS) options, up to OS × 256.
- System gain, system offset, and system phase calibration per channel.
- Analog input open circuit detector.
- Diagnostic multiplexer.
- Monitoring functions (serial peripheral interface (SPI)) invalid read/write, cyclic redundancy check (CRC), overvoltage and undervoltage events, busy stuck monitor, and reset detection).

Note that throughout this data sheet, multifunction pads, such as the RD/SCLK pad, are referred to either by the entire pad name or by a single function of the pad, for example, the SCLK pad, when only that function is relevant.

## SPECIFICATIONS

Voltage reference (V REF ) = 2.5 V external and internal, analog supply voltage (AV CC ) = 4.75 V to 5.25 V, logic supply voltage (V DRIVE ) = 1.71 V to 3.6 V, sample frequency (f SAMPLE ) = 800 kSPS, with no oversampling, T A = -40°C to +125°C, single-ended input, and all input voltage ranges, unless otherwise noted.

Table 2.

| Parameter                                     | Test Conditions/Comments                                          |   Min | Typ   | Max   | Unit        |
|-----------------------------------------------|-------------------------------------------------------------------|-------|-------|-------|-------------|
| DYNAMIC PERFORMANCE                           | Input frequency (f IN ) = 1 kHz sine wave, unless otherwise noted |       |       |       |             |
| Signal-to-Noise Ratio (SNR) 1                 | No OS, ±10 V range                                                |       | 89.5  |       | dB          |
|                                               | No OS, ±5 V range                                                 |       | 88.5  |       | dB          |
|                                               | No OS, ±2.5 V range                                               |       | 86    |       | dB          |
|                                               | Oversampling ratio (OSR) = 16×, ±10 V range                       |       | 93.5  |       | dB          |
|                                               | OSR = 16×, ±5 V range                                             |       | 92    |       | dB          |
|                                               | OSR = 16×, ±2.5 V range                                           |       | 89    |       | dB          |
| Total Harmonic Distortion (THD)               | All input ranges                                                  |       |       |       |             |
|                                               | f SAMPLE = 200 kSPS                                               |       | -102  |       | dB          |
|                                               | f SAMPLE = 800 kSPS                                               |       | -97   |       | dB          |
| Signal-to-Noise-and-Distortion                | No OS, ±10 V range                                                |       | 88.5  |       | dB          |
|                                               | No OS, ±5 V range                                                 |       | 87.7  |       | dB          |
|                                               | No OS, ±2.5 V range                                               |       | 85.5  |       | dB          |
|                                               | OSR = 16×, ±10 V range                                            |       | 92    |       | dB          |
|                                               | OSR = 16×, ±5 V range                                             |       | 91.3  |       | dB          |
|                                               | OSR = 16×, ±2.5 V range                                           |       | 88.7  |       | dB          |
| Spurious-Free Dynamic Range (SFDR)            |                                                                   |       | -104  |       | dB          |
| Channel to Channel Isolation                  | f IN on unselected channels up to 160 kHz                         |       | -110  |       | dB          |
| Full-Scale Step Settling Time                 | 0.01% of full scale                                               |       |       |       |             |
|                                               | ±10 V range                                                       |       | 70    |       | µs          |
|                                               | ±5 V range                                                        |       | 110   |       | μs          |
|                                               | ±2.5V range                                                       |       | 130   |       | μs          |
| ANALOG INPUT FILTER                           |                                                                   |       |       |       |             |
| Full Power Bandwidth                          | -3 dB, ±10 V range                                                |       | 22.5  |       | kHz         |
|                                               | -3 dB, ±5 V range                                                 |       | 13.5  |       | kHz         |
|                                               | -3 dB, ±2.5 V range                                               |       | 11.5  |       | kHz         |
|                                               | -0.1 dB, ±10 V range                                              |       | 3     |       | kHz         |
|                                               | -0.1 dB, ±5 V range                                               |       | 2     |       | kHz         |
|                                               | -0.1 dB, ±2.5 V range                                             |       | 2     |       | kHz         |
| Phase Delay                                   | ±10 V range                                                       |       | 7.5   |       | µs          |
|                                               | ±5 V range                                                        |       | 12    |       | µs          |
|                                               | ±2.5 V range                                                      |       | 14    |       | µs          |
| Phase Delay Matching                          | ±10 V range                                                       |       |       | 240   | ns          |
|                                               | ±5 V range                                                        |       |       | 365   | ns          |
|                                               | ±2.5 V range                                                      |       |       | 445   | ns          |
| DC ACCURACY                                   |                                                                   |       |       |       |             |
| Resolution                                    | No missing codes                                                  |    16 |       |       | Bits        |
| Differential Nonlinearity (DNL)               |                                                                   | -0.99 | ±0.5  | +1.4  | LSB 2       |
| Integral Nonlinearity (INL)                   | f SAMPLE = 200 kSPS f = 800 kSPS                                  |       | ±1 ±1 |       | LSB 2 LSB 2 |
| Total Unadjusted Error (TUE)                  | SAMPLE External reference                                         |       | ±3    |       | LSB         |
| Positive and Negative Full-Scale (FS) Error 3 |                                                                   |       | ±2    | ±30   | LSB         |
|                                               | R FILTER 4 = 20 kΩ, system gain calibration disabled              |       | 126   |       | LSB         |
|                                               | R FILTER 4 = 0 kΩ to 65 kΩ, system gain calibration enabled       |       | 4     |       | LSB         |
| Positive and Negative FS Error Drift          |                                                                   |       | ±1    | ±3    | ppm/°C      |

## SPECIFICATIONS

Table 2.

| Parameter                                          | Test Conditions/Comments                             | Min           | Typ          | Max           | Unit   |
|----------------------------------------------------|------------------------------------------------------|---------------|--------------|---------------|--------|
| Positive and Negative FS Error Matching            |                                                      |               | 3            | 20            | LSB    |
| Bipolar Zero Code Error                            |                                                      |               | ±1           | ±20           | LSB 2  |
|                                                    | T A = -40°C to +85°C                                 |               | ±1           | ±14           | LSB    |
| Bipolar Zero Code Error Drift                      |                                                      |               | ±0.5         | ±2.5          | ppm/°C |
| Bipolar Zero Code Error Matching                   |                                                      |               | 1.5          | 23            | LSB 2  |
|                                                    | T A = -40°C to +85°C                                 |               | 1.4          | 14            | LSB    |
| Open Circuit Code Error                            | Pull-down resistor (R PD ) = 10 kΩ, ±10 V range      |               | ±12          | ±30           | LSB    |
|                                                    | R PD = 10 kΩ, ±10 V range, T A = -40°C to +85°C      |               | ±12          | ±20           | LSB    |
|                                                    | R PD = 10 kΩ, ±5 V range                             |               | ±17          | ±35           | LSB    |
|                                                    | R PD = 10 kΩ, ±5 V range, T A = -40°C to +85°C       |               | ±17          | ±25           | LSB    |
|                                                    | R PD = 10 kΩ, ±2.5 V range                           |               | ±22          | ±40           | LSB    |
|                                                    | R PD = 10 kΩ, ±2.5 V range, T A = -40°C to +85°C     |               | ±22          | ±30           | LSB    |
| SYSTEM CALIBRATION                                 |                                                      |               |              |               |        |
| Positive Full-Scale (PFS) and Negative Full- Range | Series resistor in front of the Vx+ and VxGND inputs | 0             |              | 64            | kΩ     |
| Scale (NFS) Calibration Offset Calibration Range   |                                                      | -128          |              | +127          | LSB    |
| Phase Calibration Range                            |                                                      | 0             |              | 318.75        | μs     |
| PFS and NFS Error                                  | After gain calibration                               |               | ±5           |               | LSB    |
| Offset Error                                       | After offset calibration                             |               | ±0.5         |               | LSB    |
| Phase Error                                        | After phase calibration                              |               | ±1           |               | μs     |
| ANALOG INPUT                                       |                                                      |               |              |               |        |
| Input Voltage Ranges                               | Vx - VxGND                                           |               |              |               |        |
|                                                    | ±10 V range                                          | -10           |              | +10           | V      |
|                                                    | ±5 V range                                           | -5            |              | +5            | V      |
|                                                    | ±2.5 V range                                         | -2.5          |              | +2.5          | V      |
| Input Voltage Ranges                               | VxGND - AGND                                         |               |              |               |        |
|                                                    | ±10 V range                                          | -0.7          |              | +1.9          | V      |
|                                                    | ±5 V range                                           | -0.1          |              | +2.7          | V      |
|                                                    | ±2.5 V range                                         | -0.1          |              | +3.1          | V      |
| Analog Input Current                               |                                                      |               | (V IN - 2)/R | IN            | µA     |
| Input Capacitance (C IN ) 5                        |                                                      |               | 5            |               | pF     |
| Input Impedance (R IN ) 6                          |                                                      |               | 5            |               | MΩ     |
| Input Impedance Drift                              |                                                      |               | ±1           | ±25           | ppm/°C |
| REFERENCE INPUT/OUTPUT                             |                                                      |               |              |               |        |
| Reference Input Voltage                            | REF SELECT = 0, external reference                   | 2.495         | 2.5          | 2.505         | V      |
| DC Leakage Current                                 |                                                      |               |              | ±0.12         | µA     |
| Input Capacitance 6                                |                                                      |               | 7.5          |               | pF     |
| Reference Output Voltage                           | REF SELSECT = 1, internal reference, T A = 25°C      | 2.4975        | 2.5          | 2.5025        | V      |
| Reference Temperature Coefficient                  |                                                      |               | ±3           | ±10           | ppm/°C |
| Reference Voltage to the ADC                       | REFCAPA and REFCAPB pads                             | 4.39          |              | 4.41          | V      |
| LOGIC INPUTS                                       |                                                      |               |              |               |        |
| Input High Voltage (V INH )                        |                                                      | 0.7 × V DRIVE |              |               | V      |
| Input Low Voltage (V INL )                         |                                                      |               |              | 0.3 × V DRIVE | V      |
| Input Current (I IN )                              |                                                      |               |              | ±1            | µA     |
| Input Capacitance 6                                |                                                      |               | 5            |               | pF     |
| LOGIC OUTPUTS                                      |                                                      |               |              |               |        |
| Output High Voltage (V OH )                        | Current source (I SOURCE ) = 100 µA                  | V DRIVE - 0.2 |              |               | V      |
| Output Low Voltage (V OL )                         | Current sink (I SINK ) = 100 µA                      |               |              | 0.2           | V      |
| Floating State Leakage Current                     |                                                      |               |              | ±1            | µA     |

## SPECIFICATIONS

| Table 2. Parameter          | Test Conditions/Comments   |   Min |   Typ |   Max | Unit   |
|-----------------------------|----------------------------|-------|-------|-------|--------|
| Output Capacitance 6        |                            |       |     5 |       | pF     |
| Output Coding               | Twos complement            |       |       |       | N/A 7  |
| CONVERSION RATE             |                            |       |       |       |        |
| Conversion Time             | See Table 3                |       |  0.75 |       | µs     |
| Acquisition Time (t ACQ ) 8 |                            |       |   0.5 |       | µs     |
| Throughput Rate             | Per channel                |       |       |   800 | kSPS   |
| POWER REQUIREMENTS          |                            |       |       |       |        |
| AV CC                       |                            |  4.75 |     5 |  5.25 | V      |
| V DRIVE                     |                            |  1.71 |       |   3.6 | V      |
| REGCAP                      |                            | 1.875 |       |  1.93 | V      |
| AV CC Current (I AVCC )     |                            |       |       |       |        |
| Normal Mode (Static)        |                            |       |   7.5 |   9.5 | mA     |
| Normal Mode (Operational)   | f SAMPLE = 800 kSPS        |       |    43 |  47.5 | mA     |
|                             | f SAMPLE = 10 kSPS         |       |     8 |    10 | mA     |
| Standby                     |                            |       |   3.5 |   4.5 | mA     |
| Shutdown Mode               |                            |       |   0.5 |     5 | µA     |
| V DRIVE Current (I DRIVE )  |                            |       |       |       |        |
| Normal Mode (Static)        |                            |       |   1.8 |   3.5 | µA     |
| Normal Mode (Operational)   | f SAMPLE = 800 kSPS        |       |   1.1 |   1.5 | mA     |
|                             | f SAMPLE = 10 kSPS         |       |    30 |    75 | µA     |
| Standby                     |                            |       |   1.6 |     3 | µA     |
| Shutdown Mode               |                            |       |   0.8 |     2 | µA     |
| Power Dissipation           |                            |       |       |       |        |
| Normal Mode (Static)        |                            |       |    40 |    50 | mW     |
| Normal Mode (Operational)   | f SAMPLE = 800 kSPS        |       |   230 |   255 | mW     |
|                             | f SAMPLE = 10 kSPS         |       |    42 |    50 | mW     |
| Standby                     |                            |       |    18 |    24 | mW     |
| Shutdown Mode               |                            |       |   2.5 |    25 | µW     |

1 No OS means no oversampling is applied.

2 LSB means least significant bit. With a ±2.5 V input range, 1 LSB = 76.293 µV. With a ±5 V input range, 1 LSB = 152.58 µV. With a ±10 V input range, 1 LSB = 305.175 µV.

3 These specifications include the full temperature range variation and contribution from the reference buffer.

4 RFILTER is a resistor placed in a series to the analog input front end.

5 Not production tested. Sample tested during initial release to ensure compliance.

6 Input impedance variation is factory trimmed and accounted for in the system gain calibration.

7 N/A means not applicable.

8 The ADC input is settled by the internal PGA. Therefore, the acquisition time is the time between the end of the conversion and the start of the next conversion with no impact on external components.

## TIMING SPECIFICATIONS

## UNIVERSAL TIMING SPECIFICATIONS

AVCC  = 4.75 V to 5.25 V, V DRIVE = 1.71 V to 3.6 V, V REF = 2.5 V external reference and internal reference, and T A = -40°C to +125°C, unless otherwise noted. Interface timing is tested using a load capacitance of 20 pF, dependent on V DRIVE and load capacitance for serial interface.

## SPECIFICATIONS

## Table 3.

| Parameter      |   Min | Typ   |   Max | Unit   | Description                                                                                                                                                                    |
|----------------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| t CYCLE        |  1.25 |       |       | µs     | Minimum time between consecutive CONVST rising edges (excluding oversampling modes) 1                                                                                          |
| t LP_CNV       |    10 |       |       | ns     | CONVST low pulse width                                                                                                                                                         |
| t HP_CNV       |    10 |       |       | ns     | CONVST high pulse width                                                                                                                                                        |
| t D_CNV_BSY    |       |       |    20 | ns     | CONVST high to BUSY high delay time V DRIVE > 2.7 V                                                                                                                            |
|                |       |       |    25 | ns     | V DRIVE < 2.7 V                                                                                                                                                                |
| t S_BSY        |     0 |       |       | ns     | Minimum time from BUSY falling edge to RD falling edge setup time (in parallel interface) or to MSB being available on D OUT x line (in serial interface)                      |
| t D_BSY        |    25 |       |       | ns     | Minimum time between last RD falling edge (in parallel interface) or last LSB being clocked out (serial interface) and the following BUSY falling edge; read during conversion |
| t CONV         |  0.65 |       |  0.85 | μs     | Conversion time; no oversampling                                                                                                                                               |
|                |   2.2 |       |   2.3 | μs     | Oversampling by 2                                                                                                                                                              |
|                |  4.65 |       |   4.8 | μs     | Oversampling by 4                                                                                                                                                              |
|                |   9.6 |       |   9.9 | μs     | Oversampling by 8                                                                                                                                                              |
|                |  19.4 |       |    20 | μs     | Oversampling by 16                                                                                                                                                             |
|                |  39.2 |       |  40.2 | μs     | Oversampling by 32                                                                                                                                                             |
|                |  78.7 |       |  80.8 | μs     | Oversampling by 64                                                                                                                                                             |
|                | 157.6 |       | 161.9 | μs     | Oversampling by 128                                                                                                                                                            |
|                | 315.6 |       |   324 | μs     | Oversampling by 256                                                                                                                                                            |
| t RESET        |       |       |       |        |                                                                                                                                                                                |
| Partial Reset  |    55 |       |  2000 | ns     | Partial RESET high pulse width                                                                                                                                                 |
| Full Reset     |  3000 |       |       | ns     | Full RESET high pulse width                                                                                                                                                    |
| t DEVICE_SETUP |       |       |       | µs     | Time between RESET falling edge and first CONVST rising edge                                                                                                                   |
| Partial Reset  |    50 |       |       | ns     |                                                                                                                                                                                |
| Full Reset     |   253 |       |       | µs     |                                                                                                                                                                                |
| t WAKE_UP      |       |       |       |        | Wake-up time after standby/shutdown mode                                                                                                                                       |
| Standby        |     1 |       |       | µs     |                                                                                                                                                                                |
| Shutdown       |    10 |       |       | ms     |                                                                                                                                                                                |
| t POWER-UP     |    10 |       |       | ms     | Time between stable AV CC /V DRIVE and assertion of RESET                                                                                                                      |

1 Applies to serial mode when all four D OUT x lines are selected.

Figure 2. Universal Timing Diagram

<!-- image -->

## SPECIFICATIONS

## PARALLEL MODE TIMING SPECIFICATIONS

## Table 4.

Figure 3. Parallel Mode Read Timing Diagram, Separate and Pulses

| Parameter            |   Min | Typ   |   Max | Unit   | Description                                                                  |
|----------------------|-------|-------|-------|--------|------------------------------------------------------------------------------|
| t S_CS_RD t          |     0 |       |       | ns     | CS falling edge to RD falling edge setup time                                |
| H_RD_CSi             |     0 |       |       | ns     | RD rising edge to CS rising edge hold time                                   |
| t HP_RD              |    10 |       |       | ns     | RD high pulse width                                                          |
| t LP_RD              |    10 |       |       | ns     | RD low pulse width                                                           |
| t HP_CS              |    10 |       |       | ns     | CS high pulse width                                                          |
| t D_CS_DB            |       |       |    35 | ns     | Delay from CS until DBx three-state disabled                                 |
| t H_CS_DB            |     0 |       |       | ns     | CS to DBx hold time                                                          |
| t D_RD_DB            |       |       |       |        | Data access time after falling edge of RD                                    |
|                      |       |       |    27 | ns     | V DRIVE > 2.7 V                                                              |
|                      |       |       |    37 | ns     | V DRIVE < 2.7 V                                                              |
| t H_RD_DB            |    12 |       |       | ns     | Data hold time after falling edge of RD                                      |
| t DHZ_CS_DB t CYC_RD |       |       |    40 | ns     | CS rising edge to DBx high impedance RD falling edge to next RD falling edge |
|                      |    30 |       |       | ns     | V DRIVE > 2.7 V                                                              |
|                      |    40 |       |       | ns     | V DRIVE < 2.7 V                                                              |
| t D_CS_FD            |       |       |    26 | ns     | Delay from CS falling edge until FRSTDATA three-state disabled               |
| t D_RD_FDH           |       |       |    30 | ns     | Delay from RD falling edge until FRSTDATA high                               |
| t D_RD_FDL           |       |       |    30 | ns     | Delay from RD falling edge until FRSTDATA low                                |
| t DHZ_FD             |       |       |    28 | ns     | Delay from rising edge until FRSTDATA three-state enabled                    |
| t S_CS_WR            |     0 |       |       | ns     | CS to WR setup time                                                          |
| t HP_WR              |   213 |       |       | ns     | WR high pulse width                                                          |
| t LP_WR              |    88 |       |       | ns     | WR low pulse width V DRIVE > 2.7 V                                           |
|                      |   213 |       |       | ns     | V DRIVE < 2.7 V                                                              |
| t H_WR_CS            |     0 |       |       | ns     | WR hold time                                                                 |
| t S_DB_WR            |     5 |       |       | ns     | Configuration data to WR setup time                                          |
| t H_WR_DB            |     5 |       |       | ns     | Configuration data to WR hold time                                           |
| t CYC_WR             |   230 |       |       | ns     | Configuration data settle time, WR rising edge to next WR rising edge        |

<!-- image -->

## SPECIFICATIONS

Figure 4. Parallel Mode Read Timing Diagram, Linked and

<!-- image -->

Figure 5. Parallel Mode Write Operation Timing Diagram

<!-- image -->

## SERIAL MODE TIMING SPECIFICATIONS

Table 5.

| Parameter                                                           | Min                                    | Typ   | Max           | Unit                           | Description                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------------------------------|----------------------------------------|-------|---------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| f SCLK                                                              |                                        |       | 60            | MHz                            | SCLK frequency; f SCLK = 1/t SCLK V DRIVE > 2.7 V                                                                                                                                                                                                                                                               |
| t SCLK t S_CS_SCK t H_SCK_CS t LP_SCK t HP_SCK t D_CS_DO t D_SCK_DO | 1/f SCLK 2 2 0.4 × t SCLK 0.4 × t SCLK |       | 40 9 18 15 25 | MHz μs ns ns ns ns ns ns ns ns | V DRIVE < 2.7 V Minimum SCLK period CS to SCLK falling edge setup time SCLK to CS rising edge hold time SCLK low pulse width SCLK high pulse width Delay from CS until D OUT x three-state disabled V DRIVE > 2.7 V V DRIVE < 2.7 V Data out access time after SCLK rising edge V DRIVE > 2.7 V V DRIVE < 2.7 V |

## SPECIFICATIONS

Figure 6. Serial Timing Diagram, ADC Read Mode (Channel 1)

<!-- image -->

Figure 7. Serial Interface Timing Diagram, Register Map Read/Write Operations

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted.

## Table 6.

| Parameter                                  | Rating                    |
|--------------------------------------------|---------------------------|
| AV CC to AGND                              | -0.3 V to +6.5 V          |
| V DRIVE to AGND                            | -0.3 V to AV CC + 0.3 V   |
| Analog Input Voltage to AGND 1             | ±21 V                     |
| Digital Input Voltage to AGND              | -0.3 V to V DRIVE + 0.3 V |
| Digital Output Voltage to AGND             | -0.3 V to V DRIVE + 0.3 V |
| REFIN/REFOUT to AGND                       | -0.3 V to AV CC + 0.3 V   |
| Input Current to Any Pad Except Supplies 1 | ±10 mA                    |
| Operating Temperature Range                | -40°C to +125°C           |
| Storage Temperature Range                  | -65°C to +150°C           |
| Junction Temperature                       | 150°C                     |
| Pb/Sn Temperature, Soldering               |                           |
| Reflow (10 sec to 30 sec)                  | 240 (+0)°C                |
| Pb-Free Temperature, Soldering Reflow      | 260 (+0)°C                |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for AD7606BBCHIPS

## Table 7. AD7606BBCHIPS, 64-Pad CHIP

| ESD Model                     |   Withstand Threshold (V) | Class   |
|-------------------------------|---------------------------|---------|
| HBM                           |                           |         |
| All Pads Except Analog Inputs |                      3500 | 3A      |
| Analog Input Pads Only        |                      8000 | 3A      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 8. Pad Configuration

<!-- image -->

Table 8. Pad Function Description

| Pad No.   | Pad Type   | Mnemonic    |   X-Axis (μm) |   Y-Axis (μm) | Description                                                                                                                                                                                                                                                                          |
|-----------|------------|-------------|---------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1A        | Single     | AV CC       |         -2881 |          2628 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                    |
| 1B        | Single     | AV CC       |         -2881 |          2501 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                    |
| 1C        | Single     | AV CC       |         -2628 |          2881 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                    |
| 2A        | Single     | AGND        |         -2881 |          2374 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                           |
| 2B        | Single     | AGND        |         -2881 |          2247 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                           |
| 2C        | Single     | AGND        |         -2881 |          2120 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                           |
| 3         | Single     | OS0         |         -2880 |          1666 | Oversampling Mode 0.                                                                                                                                                                                                                                                                 |
| 4         | Single     | OS1         |         -2880 |          1336 | Oversampling Mode 1.                                                                                                                                                                                                                                                                 |
| 5         | Single     | OS2         |         -2880 |          1006 | Oversampling Mode 2.                                                                                                                                                                                                                                                                 |
| 6         | Single     | PAR/SER SEL |         -2880 |           746 | Parallel/Serial Interface Selection Input. If this pad is tied to a logic low, the parallel interface is selected. If this pad is tied to a logic high, the serial interface is selected.                                                                                            |
| 7         | Single     | STBY        |         -2880 |           321 | Standby Mode Input. In hardware mode, this pad, in combination with the RANGE pad, places the AD7606BBCHIPS in one of two power-down modes: standby mode or shutdown mode. In software mode, this pad is ignored. Therefore, it is recommended to connect this pad to logic high.    |
| 8         | Single     | RANGE       |         -2880 |            61 | Analog Input Range Selection Input. In hardware mode, this pad determines the input range of the analog input channels. If the pad is at logic low, this pad determines the power-down mode. In software mode, the RANGE pad is ignored. However, this pad must be tied high or low. |
| 9         | Single     | CONVST      |         -2880 |          -253 | Conversion Start Input. When the CONVST pad transitions from low to high, the analog input is sampled on all eight SAR ADCs.                                                                                                                                                         |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pad Function Description

| Pad No.   | Pad Type   | Mnemonic     |   X-Axis (μm) |   Y-Axis (μm) | Description                                                                                                                                                                                                                                                                                   |
|-----------|------------|--------------|---------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10        | Single     | WR           |         -2880 |          -568 | Digital Input. In hardware mode, this pad has no function. Therefore, it can be tied high, tied low, or shorted to CONVST. In software mode, this pad is an active low write pad for writing registers using the parallel interface.                                                          |
| 11        | Single     | RESET        |         -2880 |          -828 | Reset Input, Active High. Full and partial reset options are available on the AD7606BBCHIPS. The type of reset is determined by the length of the reset pulse. It is recommended that the device receives a full reset pulse after power-up.                                                  |
| 12        | Single     | RD/SCLK      |         -2880 |         -1253 | Parallel Data Read Control Input when the Parallel Interface is Selected (RD). Serial Clock Input when the Serial Interface is Selected (SCLK).                                                                                                                                               |
| 13        | Single     | CS           |         -2880 |         -1513 | Chip Select. This pad is the active low chip select input for ADC data read or register data read and write, in both serial and parallel interface.                                                                                                                                           |
| 14        | Single     | BUSY         |         -2880 |         -1814 | Busy Output. This pad transitions to a logic high along with the CONVST rising edge. The BUSY output remains high until the conversion process for all channels is complete.                                                                                                                  |
| 15        | Single     | FRSTDATA     |         -2880 |         -2045 | First Data Output. The FRSTDATA output signal indicates when the first channel, V1, is being read back on the parallel interface or the serial interface.                                                                                                                                     |
| 16        | Single     | DB0          |         -2880 |         -2455 | Parallel Output DB0. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 17        | Single     | DB1          |         -2455 |         -2880 | Parallel Output DB1. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 18        | Single     | DB2          |         -2235 |         -2880 | Parallel Output DB2. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 19        | Single     | DB3          |         -2014 |         -2880 | Parallel Output DB3. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 20        | Single     | DB4          |         -1794 |         -2880 | Parallel Output DB4. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 21        | Single     | DB5          |         -1573 |         -2880 | Parallel Output DB5. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 22        | Single     | DB6          |         -1353 |         -2880 | Parallel Output DB6. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                       |
| 23A       | Single     | V DRIVE      |         -1042 |         -2812 | Logic Power Supply Input. The voltage (1.71 V to 3.6 V) supplied at this pad determines the operating voltage of the interface. This pad is nominally at the same supply as the supply of the host interface, that is, data signal processing (DSP) and field programmable gate array (FPGA). |
| 23B       | Single     | V DRIVE      |          -915 |         -2812 | Logic Power Supply Input. The voltage (1.71 V to 3.6 V) supplied at this pad determines the operating voltage of the interface. This pad is nominally at the same supply as the supply of the host interface, that is, DSP and FPGA.                                                          |
| 23C       | Single     | V DRIVE      |          -788 |         -2812 | Logic Power Supply Input. The voltage (1.71 V to 3.6 V) supplied at this pad determines the operating voltage of the interface. This pad is nominally at the same supply as the supply of the host interface, that is, DSP and FPGA.                                                          |
| 24        | Single     | DB7/D OUT A  |          -258 |         -2880 | Parallel Output/Input Data Bit 7 (DB7)/Serial Interface Data Output Pad (D OUT A). When using the parallel interface, this pad acts as a three-state parallel digital input/ output pad. When using the serial interface, this pad functions as D OUT A.                                      |
| 25        | Single     | DB8/D OUT B  |          -478 |         -2880 | Parallel Output/Input Data Bit 8 (DB8)/Serial Interface Data Output Pad (D OUT B). When using the parallel interface, this pad acts as a three-state parallel digital input and output pad. When using the serial interface, this pad functions as D OUT B.                                   |
| 26A       | Single     | AGND         |           441 |         -2812 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                    |
| 26B       | Single     | AGND         |           314 |         -2812 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                    |
| 26C       | Single     | AGND         |           187 |         -2812 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                    |
| 27        | Single     | DB9/D OUT C  |           886 |         -2880 | Parallel Output/Input Data Bit 9 (DB9)/Serial Interface Data Output Pad (D OUT C). When using the parallel interface, this pad acts as a three-state parallel digital input and output pad. When using the serial interface, this pad functions as D C if in                                  |
| 28        | Single     | DB10/D OUT D |          1106 |         -2880 | Parallel Output/Input Data Bit 10 (DB10)/Serial Interface Data Output Pad (D OUT D). When using the parallel interface, this pad acts as a three-state parallel digital input/                                                                                                                |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pad Function Description

| Pad No.   | Pad Type   | Mnemonic   |   X-Axis (μm) |   Y-Axis (μm) | Description                                                                                                                                                                                                                                                                                                    |
|-----------|------------|------------|---------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 29        | Single     | DB11/SDI   |          1327 |         -2880 | mode and using the four data output lines option. Parallel Output/Input Data Bit DB11/Serial Data Input. When using the parallel interface, this pad acts as a three-state parallel digital input and output pad. When using the serial interface in software mode, this pad functions as a serial data input. |
| 30        | Single     | DB12       |          1547 |         -2880 | Parallel Output DB12. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                                       |
| 31        | Single     | DB13       |          1768 |         -2880 | Parallel Output DB13. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                                       |
| 32        | Single     | DB14       |          1988 |         -2880 | Parallel Output DB14. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                                       |
| 33        | Single     | DB15       |          2554 |         -2880 | Parallel Output DB15. When using serial interface, tie this pad to AGND.                                                                                                                                                                                                                                       |
| 34        | Single     | REF SELECT |          2881 |         -2575 | Internal/External Reference Selection Logic Input. If this pad is set to logic high, the internal reference is selected and enabled. If this pad is set to logic low, the internal reference is disabled and an external reference voltage must be applied to the REFIN/REFOUT pad.                            |
| 35A       | Single     | AGND       |          2881 |         -2410 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |
| 35B       | Single     | AGND       |          2881 |         -2283 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |
| 36A       | Single     | REGCAP     |          2881 |         -2029 | Decoupling Capacitor Pads for Voltage Output from 1.9 V Internal Regulator, Analog Low Dropout (ALDO) and Digital Low Dropout (DLDO).                                                                                                                                                                          |
| 36B       | Single     | REGCAP     |          2881 |         -2156 | Decoupling Capacitor Pads for Voltage Output from 1.9 V Internal Regulator, ALDO and DLDO.                                                                                                                                                                                                                     |
| 37A       | Single     | AV CC      |          2881 |         -1775 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 37B       | Single     | AV CC      |          2881 |         -1902 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 38A       | Single     | AV CC      |          2881 |         -1117 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 38B       | Single     | AV CC      |          2881 |         -1244 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 38C       | Single     | AV CC      |          2881 |         -1371 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 39A       | Single     | REGCAP     |          2881 |          -559 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 39B       | Single     | REGCAP     |          2881 |          -686 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 39C       | Single     | REGCAP     |          2881 |          -813 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                              |
| 40A       | Single     | AGND       |          2881 |          -432 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |
| 40B       | Single     | AGND       |          2881 |          -305 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |
| 40C       | Single     | AGND       |          2881 |          -178 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |
| 41A       | Single     | AGND       |          2881 |           -36 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                     |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pad Function Description

| Pad No.   | Pad Type   | Mnemonic      |   X-Axis (μm) |   Y-Axis (μm) | Description                                                                                                                                                                                                                                                                                                                                            |
|-----------|------------|---------------|---------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 41B       | Single     | AGND          |          2881 |            91 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                                                             |
| 41C       | Single     | AGND          |          2881 |           218 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                                                             |
| 42        | Single     | REFIN/ REFOUT |          2881 |           360 | Reference Input (REFIN)/Reference Output (REFOUT). The internal 2.5 V reference is available on the REFOUT pad for external use while the REF SELECT pad is set to logic high. Alternatively, by setting the REF SELECT pad to logic low, the internal reference is disabled and an external reference of 2.5 V must be applied to this input (REFIN). |
| 43A       | Single     | REFGND        |          2881 |           856 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 43B       | Single     | REFGND        |          2881 |           729 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 43C       | Single     | REFGND        |          2881 |           602 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 44A       | Single     | REFCAPA       |          2881 |          1235 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 44B       | Single     | REFCAPA       |          2881 |          1108 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 44C       | Single     | REFCAPA       |          2881 |           981 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 45A       | Single     | REFCAPB       |          2881 |          1614 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 45B       | Single     | REFCAPB       |          2881 |          1487 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 45C       | Single     | REFCAPB       |          2881 |          1360 | Reference Buffer Output Force/Sense Pads. This pad must be connected together. The voltage on this pad is typically 4.4 V.                                                                                                                                                                                                                             |
| 46A       | Single     | REFGND        |          2881 |          1993 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 46B       | Single     | REFGND        |          2881 |          1866 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 46C       | Single     | REFGND        |          2881 |          1739 | Reference Ground Pads. This pad must be connected to AGND.                                                                                                                                                                                                                                                                                             |
| 47A       | Single     | AGND          |          2881 |          2374 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad.                                                                                                                                                             |
| 47B       | Single     | AGND          |          2881 |          2247 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad                                                                                                                                                              |
| 47C       | Single     | AGND          |          2881 |          2120 | Analog Ground. This pad is the ground reference point for all analog circuitry on the AD7606BBCHIPS. All analog input signals and external reference signals must be referred to this pad                                                                                                                                                              |
| 48A       | Single     | AV CC         |          2628 |          2881 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                                                                      |
| 48B       | Single     | AV CC         |          2881 |          2628 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                                                                      |
| 48C       | Single     | AV CC         |          2881 |          2501 | Analog Supply Voltage, 4.75 V to 5.25 V. This supply voltage is applied to the internal front-end amplifiers and to the ADC core.                                                                                                                                                                                                                      |
| 49        | Single     | V1            |          2029 |          2887 | Channel 1 Positive Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 50        | Single     | V1GND         |          1891 |          2887 | Channel 1 Negative Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 51        | Single     | V2            |          1529 |          2887 | Channel 2 Positive Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 52        | Single     | V2GND         |          1391 |          2887 | Channel 2 Negative Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 53        | Single     | V3            |           953 |          2887 | Channel 3 Positive Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 54        | Single     | V3GND         |           815 |          2887 | Channel 3 Negative Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 55        | Single     | V4            |           452 |          2887 | Channel 4 Positive Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |
| 56        | Single     | V4GND         |           315 |          2887 | Channel 4 Negative Analog Input Pad.                                                                                                                                                                                                                                                                                                                   |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## Table 8. Pad Function Description

|   Pad No. | Pad Type   | Mnemonic   |   X-Axis (μm) |   Y-Axis (μm) | Description                          |
|-----------|------------|------------|---------------|---------------|--------------------------------------|
|        57 | Single     | V5         |          -315 |          2887 | Channel 5 Positive Analog Input Pad. |
|        58 | Single     | V5GND      |          -452 |          2887 | Channel 5 Negative Analog Input Pad. |
|        59 | Single     | V6         |          -815 |          2887 | Channel 6 Positive Analog Input Pad. |
|        60 | Single     | V6GND      |          -953 |          2887 | Channel 6 Negative Analog Input Pad. |
|        61 | Single     | V7         |         -1391 |          2887 | Channel 7 Positive Analog Input Pad. |
|        62 | Single     | V7GND      |         -1529 |          2887 | Channel 7 Negative Analog Input Pad. |
|        63 | Single     | V8         |         -1891 |          2887 | Channel 8 Positive Analog Input Pad. |
|        64 | Single     | V8GND      |         -2029 |          2887 | Channel 8 Negative Analog Input Pad. |

## OUTLINE DIMENSIONS

Figure 9. 64-Pad Bare Die [CHIP] (C-64-2) Dimensions shown in millimeters

<!-- image -->

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Table 9. Die Specifications

| Parameter            | Value                          | Unit   |
|----------------------|--------------------------------|--------|
| Die Size             | 5970 × 5970                    | μm     |
| Thickness            | 380                            | μm     |
| Bond Pad             | 70 × 70                        | μm     |
| Bond Pad Composition | Aluminum (Al), 0.5 Copper (Cu) | %      |

## Table 10. Assembly Recommendations

| Assembly Component   | Recommendation                |
|----------------------|-------------------------------|
| Die Attach           | Epoxy dispense                |
| Bonding Method       | Thermosonic gold ball bonding |
| Bonding Sequence     | Bond Pad 47A first            |

Updated: December 21, 2021

## ORDERING GUIDE

| Model 1       | Temperature Range   | Package Description   | Package Option   |
|---------------|---------------------|-----------------------|------------------|
| AD7606BBCHIPS | -40°C to +125°C     | CHIPS OR DIE          | C-64-2           |

<!-- image -->