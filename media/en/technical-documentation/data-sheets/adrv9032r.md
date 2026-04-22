<!-- lastmod 2025-11-24 -->
<!-- image -->

## ADRV9032R

## Integrated 2T2R TDD and FDD RadioVerse Transceiver with Dual Observation Paths

## FEATURES

- 2 differential transmitters
- 2 differential receivers
- 2 differential observation receivers
- LO tunable range: 450 MHz to 7125 MHz
- RF range: 350 MHz to 7225 MHz 1
- Maximum transmitter large-signal bandwidth: 200 MHz
- Maximum transmitter synthesis bandwidth: 450 MHz
- Maximum receiver signal bandwidth: 200 MHz
- Maximum observation receiver signal bandwidth: 450 MHz
- Fully integrated fractional-N RF synthesizer
- Fully integrated clock synthesizer
- Dual external LO inputs supporting operation up to 6 GHz
- JESD204B and JESD204C digital interface: up to 16.5 Gbps
- TDD and FDD operation
- Simplifying thermal and power consumption challenges
- 4.82 W power consumption for the TDD mode, enabled use case with 200 MHz iBW/OBW 2

## APPLICATIONS

- Software defined radios
- Portable instrumentation
- Military communications
- General-purpose radios
- Wireless infrastructure
- TDD and FDD applications

## GENERAL DESCRIPTION

The ADRV9032R is a highly integrated, RF agile transceiver offering two transmitters, two observation receivers for monitoring transmitter channels, two receivers, integrated local oscillator (LO) and clock synthesizers, and digital-signal processing functions to provide a complete transceiver solution. The device provides the high radio performance and low-power consumption demanded by cellular infrastructure applications, software-defined radios, portable instruments, and military communications.

image filters, reducing system size and cost, and making band independent solutions possible.

The device also includes two wide-bandwidth observation path receiver sub-systems for monitoring transmitter outputs. The complete transceiver subsystem includes automatic and manual attenuation control, DC offset correction, quadrature error correction (QEC), and digital filtering. General-purpose inputs and outputs (GPIOs) that provide an array of digital control options are also integrated.

The transceiver includes four fully integrated phase-locked loops (PLLs). A single PLL provides high performance, low-power fractional-N RF LO synthesis supporting single and multiband time division duplex (TDD) and frequency division duplex (FDD) operation with large-signal bandwidth up to 200 MHz. An additional PLL provides a second RF LO in order to support multiband applications with spacing greater than 200 MHz, or to enable unique transmitter and receiver LO frequencies for frequency planning flexibility. A multichip synchronization mechanism synchronizes the phases of all local oscillators and clocks between multiple chips. All voltage-controlled oscillators (VCOs) and loop filter components are integrated and can be adjusted through the serial-peripheral interface (SPI).

External LO paths are supported on the ADRV9032RBBPZ-2T1 model to provide an option for improved phase noise performance, which meets the more restrictive performance requirements demanded by some radar and instrumentation applications.

The serial-data interface consists of eight serializer lanes and eight deserializer lanes. The interface supports both the JESD204B and JESD204C standards, and it operates at data rates up to 16.5 Gbps. Both fixed and floating-point data formats are supported. The floating-point format allows internal automatic gain control (AGC) to be transparent to the baseband processor.

The ADRV9032R is powered directly from the 0.8 V, 1.0 V, and 1.8 V regulators and is controlled by a standard SPI serial port. Comprehensive power-down modes are included to minimize power consumption in normal use. The device is packaged in a 506-ball ball grid array, thermally enhanced [BGA\_ED].

The receiver and transmitter signal paths use a zero-IF (ZIF) architecture that provides wide bandwidth with dynamic range suitable for non-contiguous multicarrier applications. The ZIF architecture has the benefits of low power and RF and bandwidth agility. The lack of aliases and out-of-band images eliminates anti-aliasing and

1 The relationship between the LO and RF ranges can be expressed as: RF range = LO tuning range ± (large-signal bandwidth/2).

2 Power consumption values shown are for a typical use case. Power consumption depends heavily on the device configuration (use case). Please refer to the power analysis tab in the EVAL-ADRV903X evaluation software (ACE) to estimate the power consumption for the specified use case.

Rev. A

DOCUMENT FEEDBACK

## TABLE OF CONTENTS

| Features................................................................                                                                                                                                  | 1   | 4500 MHz Band................................................93                                                                                      |     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| Applications...........................................................                                                                                                                                   | 1   | 5600 MHz Band..............................................106                                                                                       |     |
| General Description...............................................1                                                                                                                                       |     | 6300 MHz Band..............................................119                                                                                       |     |
| Functional Block Diagram......................................3                                                                                                                                           |     | 7100 MHz Band..............................................132                                                                                       |     |
| Specifications........................................................                                                                                                                                    | 4   | Across LO Frequency.....................................145                                                                                          |     |
| Power Supply Specifications............................19                                                                                                                                                 |     | Theory of Operation...........................................160                                                                                    |     |
| Digital Interface and Timing Specifications......                                                                                                                                                         | 19  | Transmitter.....................................................                                                                                     | 160 |
| Absolute Maximum Ratings.................................20                                                                                                                                               |     | Receiver.........................................................160                                                                                 |     |
| Reflow Profile...................................................20                                                                                                                                       |     | Observation Receiver.....................................160                                                                                         |     |
| Thermal Resistance.........................................                                                                                                                                               | 20  | Reference Clock Input....................................160                                                                                         |     |
| Electrostatic Discharge (ESD) Ratings.............21                                                                                                                                                      |     | Synthesizers...................................................160                                                                                   |     |
| ESD Caution.....................................................22                                                                                                                                        |     | SPI..................................................................161                                                                             |     |
| Pin Configuration and Function Descriptions......                                                                                                                                                         | 23  | GPIO_x Pins...................................................161                                                                                    |     |
| Typical Performance Characteristics...................28                                                                                                                                                  |     | Applications Information....................................                                                                                         | 162 |
| 450 MHz Band..................................................28                                                                                                                                          |     | Power Supply Sequence................................162                                                                                             |     |
| 900 MHz Band..................................................41                                                                                                                                          |     | Data Interface.................................................162                                                                                   |     |
| 1800 MHz Band................................................54                                                                                                                                           |     | Outline Dimensions...........................................                                                                                        | 163 |
| 2600 MHz Band................................................67                                                                                                                                           |     | Ordering Guide...............................................163                                                                                     |     |
| 3500 MHz Band................................................80                                                                                                                                           |     | Evaluation Boards..........................................163                                                                                       |     |
| REVISION HISTORY                                                                                                                                                                                          |     |                                                                                                                                                      |     |
| 9/2025-Rev. 0 to Rev. A                                                                                                                                                                                   |     |                                                                                                                                                      |     |
| Changes to Features Section                                                                                                                                                                               |     | .........................................................................................................................                            | 1   |
| Changes to General Description                                                                                                                                                                            |     | Section.........................................................................................................1                                    |     |
| Changes to Figure 1 ....................................................................................................................................... Changes to External LO Input Parameter, Table |     | 1..........................................................................................                                                          | 3 4 |
| Added Note                                                                                                                                                                                                |     | 2.................................................................................................................................................20 |     |
| Changes to Absolute Maximum Rating                                                                                                                                                                        |     | Section.............................................................................................20                                               |     |
| Added Table 5 and Table 6; Renumbered                                                                                                                                                                     |     | Sequentially.................................................................................20                                                      |     |
| Changes to Table                                                                                                                                                                                          |     | 8........................................................................................................................................21          |     |
| Changes to Table                                                                                                                                                                                          |     | 11......................................................................................................................................             | 23  |
| Deleted Figure 384 and Figure 385; Renumbered                                                                                                                                                             |     | Sequentially....................................................................93                                                                   |     |
| Changes to External LO Inputs                                                                                                                                                                             |     | Section.......................................................................................................161                                    |     |
| Changes to Ordering                                                                                                                                                                                       |     | Guide.........................................................................................................................163                    |     |
| Changes to Evaluation                                                                                                                                                                                     |     | Boards....................................................................................................................                           | 163 |

1/2025-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## SPECIFICATIONS

Table 1 shows electrical characteristics at ambient temperature range. All RF specifications are based on measurements that include printed circuit board (PCB) and matching circuit losses, unless otherwise noted.

Table 1. Specifications

| Parameter                               | Symbol   | Min   | Typ   | Max    | Unit    | Test Conditions/Comments                                                                                                       |
|-----------------------------------------|----------|-------|-------|--------|---------|--------------------------------------------------------------------------------------------------------------------------------|
| TRANSMITTERS (Tx)                       |          |       |       |        |         |                                                                                                                                |
| Center Frequency                        |          | 450   |       | 7125   | MHz     |                                                                                                                                |
| Large-Signal Bandwidth                  |          |       |       | 200    | MHz     |                                                                                                                                |
| Synthesis Bandwidth                     |          |       |       | 450    | MHz     |                                                                                                                                |
| Input Data Rate                         |          | 61.44 |       | 491.52 | MSPS    | Supported data rates: 61.44 MSPS, 122.88 MSPS, 184.32 MSPS, 245.76 MSPS, 368.64 MSPS and 491.52 MSPS                           |
| Full-Scale Output Power                 | P OUT    |       |       |        |         | Continuous wave (CW) output power at 0 dBFS, 0 dB Tx attenuation, 1 MHz tone                                                   |
| 450 MHz                                 |          |       | 5.5   |        | dBm     |                                                                                                                                |
| 900 MHz                                 |          |       | 5     |        | dBm     |                                                                                                                                |
| 1800 MHz                                |          |       | 4.5   |        | dBm     |                                                                                                                                |
| 2600 MHz                                |          |       | 4.5   |        | dBm     |                                                                                                                                |
| 3500 MHz                                |          |       | 3.5   |        | dBm     |                                                                                                                                |
| 4500 MHz                                |          |       | 2.5   |        | dBm     |                                                                                                                                |
| 5600 MHz                                |          |       | 2     |        | dBm     |                                                                                                                                |
| 6300 MHz                                |          |       | 2     |        | dBm     |                                                                                                                                |
| 7100 MHz                                |          |       | 2     |        | dBm     |                                                                                                                                |
| Flicker Noise                           |          |       |       |        |         |                                                                                                                                |
| 1 kHz Offset from LO                    |          |       | -137  |        | dBFS/Hz |                                                                                                                                |
| P OUT Temperature Slope                 |          |       | -30   |        | mdB/°C  | Valid over full power control range                                                                                            |
| Power Control Range                     |          |       | 32    |        | dB      | Signal-to-noise ratio (SNR) maintained for 0 to 20 dB RF attenuation                                                           |
| Power Control Resolution                |          |       | 0.05  |        | dB      |                                                                                                                                |
| Attenuation Accuracy                    |          |       | 0.1   |        | dB      | Valid over full power control range for any 4 dB step                                                                          |
|                                         |          |       | ±0.04 |        | dB      | Monotonic                                                                                                                      |
| Phase Change vs. RF Attenuation         |          |       | 3     |        | Degrees | Uncorrected, valid over full power control range, LO = 3500 MHz                                                                |
| RF Delay Variation With Temperature     |          |       | 1.2   |        | ps/°C   | Valid over full power control range                                                                                            |
| Peak-to-Peak Gain Deviation             |          |       |       |        |         | Includes compensation by programmable finite impulse response (FIR) filter; measured with 800 MHz synthesis bandwidth use case |
| 200 MHz RF Bandwidth                    |          |       | 0.2   |        | dB      |                                                                                                                                |
| 400 MHz RF Bandwidth                    |          |       | 0.4   |        | dB      |                                                                                                                                |
| Peak-to-Peak Gain Deviation Narrow Band |          |       |       |        |         |                                                                                                                                |
| 20 MHz RF Bandwidth                     |          |       | 0.1   |        | dB      | Any 20 MHz bandwidth span within the large-signal bandwidth; includes compensation by programmable FIR filter                  |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                   | Symbol   | Min   | Typ   | Max   | Unit    | Test Conditions/Comments                                                                                                                          |
|---------------------------------------------|----------|-------|-------|-------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Deviation from Linear Phase                 |          |       |       |       |         | Measured with 800 MHz synthesis bandwidth use case                                                                                                |
| 100 MHz RF Bandwidth                        |          |       | ±1    |       | Degrees |                                                                                                                                                   |
| 450 MHz RF Bandwidth                        |          |       | ±5    |       | Degrees |                                                                                                                                                   |
| Error Vector Magnitude                      | EVM      |       |       |       |         | PLL optimized for integrated noise measured using long-term evolution (LTE) 20 MHz signal; PLL loop filter bandwidth (LFBW) approximately 500 kHz |
| 450 MHz                                     |          |       | 0.1   |       | %       |                                                                                                                                                   |
| 900 MHz                                     |          |       | 0.1   |       | %       |                                                                                                                                                   |
| 1800 MHz                                    |          |       | 0.12  |       | %       |                                                                                                                                                   |
| 2600 MHz                                    |          |       | 0.26  |       | %       |                                                                                                                                                   |
| 3500 MHz                                    |          |       | 0.38  |       | %       |                                                                                                                                                   |
| 4500 MHz                                    |          |       | 0.28  |       | %       |                                                                                                                                                   |
| 5600 MHz                                    |          |       | 0.52  |       | %       |                                                                                                                                                   |
| 6300 MHz                                    |          |       | 0.7   |       | %       |                                                                                                                                                   |
| 7100 MHz                                    |          |       | 0.9   |       | %       |                                                                                                                                                   |
| Adjacent Channel Leakage Ratio (ACLR) (LTE) |          |       |       |       |         | 20 MHz LTE at -12 dBFS                                                                                                                            |
| 450 MHz                                     |          |       | -67   |       | dBc     |                                                                                                                                                   |
| 900 MHz                                     |          |       | -67   |       | dBc     |                                                                                                                                                   |
| 1800 MHz                                    |          |       | -67   |       | dBc     |                                                                                                                                                   |
| 2600 MHz                                    |          |       | -67   |       | dBc     |                                                                                                                                                   |
| 3500 MHz                                    |          |       | -65   |       | dBc     |                                                                                                                                                   |
| 4500 MHz                                    |          |       | -62   |       | dBc     |                                                                                                                                                   |
| 5600 MHz                                    |          |       | -60   |       | dBc     |                                                                                                                                                   |
| 6300 MHz                                    |          |       | -57   |       | dBc     |                                                                                                                                                   |
| 7100 MHz                                    |          |       | -57   |       | dBc     |                                                                                                                                                   |
| In-Band Noise Floor                         |          |       |       |       |         | In-band noise falls dB for dB with attenuation until limited by the thermal noise floor                                                           |
| 0 dB Attenuation                            |          |       | -157  |       | dBFS/Hz |                                                                                                                                                   |
| 20 dB Attenuation                           |          |       | -154  |       | dBFS/Hz |                                                                                                                                                   |
| Out-of-Band Noise Floor                     |          |       | -158  |       | dBFS/Hz | 0 dB attenuation                                                                                                                                  |
| Interpolation Images                        |          |       |       |       |         | 3 × synthesis bandwidth/2 offset                                                                                                                  |
| Large-Signal Bandwidth                      |          |       | -70   |       | dBc     |                                                                                                                                                   |
| Synthesis Bandwidth                         |          |       | -55   |       | dBc     |                                                                                                                                                   |
| Second- and Third-Order In-Band             | HD2/HD3  |       |       |       |         | -12 dBFS CW signal                                                                                                                                |
| 450 MHz                                     |          |       | -75   |       | dBc     |                                                                                                                                                   |
| 900 MHz                                     |          |       | -75   |       | dBc     |                                                                                                                                                   |
| 1800 MHz                                    |          |       | -75   |       | dBc     |                                                                                                                                                   |
| 2600 MHz                                    |          |       | -70   |       | dBc     |                                                                                                                                                   |
| 3500 MHz                                    |          |       | -70   |       | dBc     |                                                                                                                                                   |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                              | Symbol   | Min   | Typ     | Max   | Unit      | Test Conditions/Comments                                                   |
|--------------------------------------------------------|----------|-------|---------|-------|-----------|----------------------------------------------------------------------------|
| 4500 MHz                                               |          |       | -70     |       | dBc       |                                                                            |
| 5600 MHz                                               |          |       | -67     |       | dBc       |                                                                            |
| 6300 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 7100 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| Second- and Third-Order Out-of-                        | HD2/HD3  |       |         |       |           | -12 dBFS CW signal; HD product falling outside the large-signal bandwidth  |
| Band Harmonic Distortion 450 MHz                       |          |       | -70     |       | dBc       |                                                                            |
| 900 MHz                                                |          |       | -70     |       | dBc       |                                                                            |
| 1800 MHz                                               |          |       | -70     |       | dBc       |                                                                            |
| 2600 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 3500 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 4500 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 5600 MHz                                               |          |       | -63     |       | dBc       |                                                                            |
| 6300 MHz                                               |          |       | -60     |       | dBc       |                                                                            |
| 7100 MHz                                               |          |       | -60     |       | dBc       |                                                                            |
| Third-Order Intermodulation                            | IM3      |       |         |       |           | Two -15 dBFS carriers within the large-signal bandwidth                    |
| Products 450 MHz                                       |          |       | -70     |       | dBc       |                                                                            |
| 900 MHz                                                |          |       | -70     |       | dBc       |                                                                            |
| 1800 MHz                                               |          |       | -70     |       | dBc       |                                                                            |
| 2600 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 3500 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 4500 MHz                                               |          |       | -65     |       | dBc       |                                                                            |
| 5600 MHz                                               |          |       | -64     |       | dBc       |                                                                            |
| 6300 MHz                                               |          |       | -62     |       | dBc       |                                                                            |
| 7100 MHz                                               |          |       | -60     |       | dBc       |                                                                            |
| Image Rejection Within Large-Signal bandwidth          |          |       |         |       |           | Quadrature error correction (QEC) active; up to 20 dB of attenuation       |
| LO < 5000 MHz                                          |          |       | 65      |       | dBc       |                                                                            |
| 5000 MHz ≤ LO ≤ 6300 MHz                               |          |       | 60      |       | dBc       |                                                                            |
| LO > 6300 MHz                                          |          |       | 55      |       | dBc       |                                                                            |
| Beyond Large-Signal Bandwidth                          |          |       | 40      |       | dBc       | Assumes that distortion power density is 25 dB below desired power density |
| Output Impedance                                       | Z OUT    |       | 100     |       | Ω         | Differential - nominal                                                     |
| Maximum Output Load Voltage Standing Wave Ratio (VSWR) |          |       |         | 3     |           | Maximum value to ensure adequate calibration                               |
| Output Return Loss                                     |          |       | 10      |       | dB        |                                                                            |
| LO Leakage Power                                       |          |       |         |       |           | LO leakage (LOL) correction active                                         |
| Carrier Offset from LO 450 MHz                         |          |       | -84     |       | dBFS      |                                                                            |
|                                                        |          |       | -84     |       | dBFS      |                                                                            |
| 900 MHz 1800 MHz                                       |          |       | -84     |       | dBFS      |                                                                            |
| 2600 MHz                                               |          |       | -84     |       | dBFS      |                                                                            |
| 3500 MHz                                               |          |       | -84     |       | dBFS      |                                                                            |
| 4500 MHz                                               |          |       | -82     |       | dBFS      |                                                                            |
| 5600 MHz 6300 MHz                                      |          |       | -82 -82 |       | dBFS dBFS |                                                                            |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                | Symbol   | Min   | Typ   | Max    | Unit    | Test Conditions/Comments                                                                             |
|--------------------------|----------|-------|-------|--------|---------|------------------------------------------------------------------------------------------------------|
| 7100 MHz                 |          |       | -82   |        | dBFS    |                                                                                                      |
| Carrier on LO            |          |       |       |        |         |                                                                                                      |
| 450 MHz                  |          |       | -71   |        | dBFS    |                                                                                                      |
| 900 MHz                  |          |       | -71   |        | dBFS    |                                                                                                      |
| 1800 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 2600 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 3500 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 4500 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 5600 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 6300 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| 7100 MHz                 |          |       | -71   |        | dBFS    |                                                                                                      |
| RECEIVERS (Rx)           |          |       |       |        |         |                                                                                                      |
| Center Frequency         |          | 450   |       | 7125   | MHz     |                                                                                                      |
| Signal Bandwidth         |          |       |       | 200    | MHz     |                                                                                                      |
| Output Data Rate         |          | 61.44 |       | 491.52 | MSPS    | Supported data rates: 61.44 MSPS, 122.88 MSPS, 184.32 MSPS, 245.76 MSPS, 368.64 MSPS and 491.52 MSPS |
| Full-Scale Input Power   | P FS     |       |       |        |         | CW input power that produces 0 dBFS; 0 dB Rx attenuation                                             |
| 450 MHz                  |          |       | -11.5 |        | dBm     |                                                                                                      |
| 900 MHz                  |          |       | -11.5 |        | dBm     |                                                                                                      |
| 1800 MHz                 |          |       | -10.7 |        | dBm     |                                                                                                      |
| 2600 MHz                 |          |       | -10.4 |        | dBm     |                                                                                                      |
| 3500 MHz                 |          |       | -9.9  |        | dBm     |                                                                                                      |
| 4500 MHz                 |          |       | -9.7  |        | dBm     |                                                                                                      |
| 5600 MHz                 |          |       | -9.5  |        | dBm     |                                                                                                      |
| 6300 MHz                 |          |       | -9.5  |        | dBm     |                                                                                                      |
| 7100 MHz                 |          |       | -9    |        | dBm     |                                                                                                      |
| Attenuation Control      |          |       |       |        |         |                                                                                                      |
| Gain Range               |          |       | 32    |        | dB      |                                                                                                      |
| Analog Gain-Step Size    |          |       | 0.5   |        | dB      | Attenuator steps from 0 dB to 6 dB                                                                   |
|                          |          |       | 1     |        | dB      | Attenuator steps from 6 dB to 32 dB                                                                  |
| Residual Gain-Step Error |          |       | 0.1   |        | dB      | Attenuator steps from 0 dB to 20 dB                                                                  |
|                          |          |       | 0.2   |        | dB      | Attenuator steps from 20 dB to 32 dB                                                                 |
| Gain-Temperature Slope   |          |       |       |        |         |                                                                                                      |
| LO < 5000 MHz            |          |       | -3    |        | mdB/°C  |                                                                                                      |
| LO > 5000 MHz            |          |       | -4    |        | mdB/°C  |                                                                                                      |
| Phase Change vs. Rx Gain |          |       |       |        |         | Uncorrected, valid over full gain- control range                                                     |
| 450 MHz                  |          |       | 2     |        | Degrees |                                                                                                      |
| 900 MHz                  |          |       | 3     |        | Degrees |                                                                                                      |
| 1800 MHz                 |          |       | 6     |        | Degrees |                                                                                                      |
| 2600 MHz                 |          |       | 9     |        | Degrees |                                                                                                      |
| 3500 MHz                 |          |       | 12    |        | Degrees |                                                                                                      |
| 4500 MHz                 |          |       | 16    |        | Degrees |                                                                                                      |
| 5600 MHz                 |          |       | 19    |        | Degrees |                                                                                                      |
| 6300 MHz                 |          |       | 22    |        | Degrees |                                                                                                      |
| 7100 MHz                 |          |       | 25    |        | Degrees |                                                                                                      |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                           | Symbol   | Min   | Typ    | Max   | Unit    | Test Conditions/Comments                                                                  |
|-------------------------------------|----------|-------|--------|-------|---------|-------------------------------------------------------------------------------------------|
| RF Delay Variation with Temperature |          |       | 1      |       | ps/°C   | Valid over full gain-control range                                                        |
| Peak-to-Peak Gain Deviation         |          |       |        |       |         | Over signal bandwidth, includes compensation by programmable FIR filter                   |
| 200 MHz RF Bandwidth                |          |       | 1      |       | dB      |                                                                                           |
| Rx Decimation Image Rejection       |          | 80    |        |       | dB      | Due to digital filters                                                                    |
| Rx Alias Band Rejection             |          |       | 70     |       | dB      | Rejection of signals within the analog- to-digital converter (ADC) alias band             |
| Input Impedance                     | Z IN     |       | 100    |       | Ω       | Differential                                                                              |
| Maximum Source VSWR                 |          |       |        | 3     |         |                                                                                           |
| Input Port Return Loss              |          |       | 10     |       | dB      |                                                                                           |
| Rx Input LO Leakage at Maximum Gain |          |       |        |       |         | Leakage decreased dB for dB with attenuation for first 12 dB, over full attenuation range |
| 450 MHz                             |          |       | -68    |       | dBm     |                                                                                           |
| 900 MHz                             |          |       | -70    |       | dBm     |                                                                                           |
| 1800 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 2600 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 3500 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 4500 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 5600 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 6300 MHz                            |          |       | -65    |       | dBm     |                                                                                           |
| 7100 MHz                            |          |       | -60    |       | dBm     |                                                                                           |
| Image Rejection                     |          |       | -75    |       | dBc     | QEC active up to -1 dBFS                                                                  |
| Noise Spectral Density              | N 0      |       |        |       |         | Offset = 40 MHz, spot                                                                     |
| 450 MHz                             |          |       | -151.7 |       | dBFS/Hz |                                                                                           |
| 900 MHz                             |          |       | -151.5 |       | dBFS/Hz |                                                                                           |
| 1800 MHz                            |          |       | -151.5 |       | dBFS/Hz |                                                                                           |
| 2600 MHz                            |          |       | -151.1 |       | dBFS/Hz |                                                                                           |
| 3500 MHz                            |          |       | -150.5 |       | dBFS/Hz |                                                                                           |
| 4500 MHz                            |          |       | -150.7 |       | dBFS/Hz |                                                                                           |
| 5600 MHz                            |          |       | -150.3 |       | dBFS/Hz |                                                                                           |
| 6300 MHz                            |          |       | -149.7 |       | dBFS/Hz |                                                                                           |
| 7100 MHz                            |          |       | -149.5 |       | dBFS/Hz |                                                                                           |
| Noise Figure                        | NF       |       |        |       |         | 0 dB attenuation                                                                          |
| 450 MHz                             |          |       | 10.2   |       | dB      |                                                                                           |
| 900 MHz                             |          |       | 10.5   |       | dB      |                                                                                           |
| 1800 MHz                            |          |       | 11.8   |       | dB      |                                                                                           |
| 2600 MHz                            |          |       | 12.5   |       | dB      |                                                                                           |
| 3500 MHz                            |          |       | 13.5   |       | dB      |                                                                                           |
| 4500 MHz                            |          |       | 13.8   |       | dB      |                                                                                           |
| 5600 MHz                            |          |       | 14     |       | dB      |                                                                                           |
| 6300 MHz                            |          |       | 14.5   |       | dB      |                                                                                           |
| 7100 MHz                            |          |       | 15     |       | dB      |                                                                                           |
| Noise Figure Ripple                 |          |       | 1      |       | dB      | Peak-to-peak deviation in noise figure over large-signal bandwidth                        |
| Second-Order Harmonic Distortion    | HD2      |       | -76    |       | dBc     | HD2 products occurring anywhere in- band, -3.5 dBFS CW signal                             |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                            | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments                                                                                                         |
|------------------------------------------------------|----------|-------|-------|-------|--------|----------------------------------------------------------------------------------------------------------------------------------|
| Third-Order Harmonic Distortion                      | HD3      |       |       |       |        | HD3 products occurring anywhere in- band                                                                                         |
| LO ≤ 600 MHz                                         |          |       | -72   |       | dBc    | -3.5 dBFS CW signal                                                                                                              |
| 600 MHz < LO < 1200 MHz                              |          |       | -72   |       | dBc    | -2.5 dBFS CW signal                                                                                                              |
| LO ≥ 1200 MHz                                        |          |       | -70   |       | dBc    | -1 dBFS CW signal                                                                                                                |
| Fourth-Order Harmonic Distortion                     | HD4      |       | -90   |       | dBc    | HD4 products occurring anywhere in- band, -1 dBFS CW signal                                                                      |
| Fifth-Order Harmonic Distortion                      | HD5      |       | -80   |       | dBc    | HD5 products occurring anywhere in- band, -3.5 dBFS CW signal                                                                    |
| Second-Order Intermodulation Products                | IM2      |       |       |       |        |                                                                                                                                  |
| 450 MHz                                              |          |       | -80   |       | dBc    | Two CW tones at -9.5 dBFS, 200 MHz signal bandwidth                                                                              |
| 900 MHz                                              |          |       | -80   |       | dBc    | Two CW tones at -8.5 dBFS, 400 MHz signal bandwidth                                                                              |
| 1800 MHz                                             |          |       | -80   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 2600 MHz                                             |          |       | -80   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 3500 MHz                                             |          |       | -80   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 4500 MHz                                             |          |       | -80   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 5600 MHz                                             |          |       | -80   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 6300 MHz                                             |          |       | -78   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 7100 MHz                                             |          |       | -78   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| Third-Order Intermodulation Products                 | IM3      |       |       |       |        | IM products band edge                                                                                                            |
| 450 MHz                                              |          |       | -70   |       | dBc    | Two CW tones at -9.5 dBFS, 200 MHz signal bandwidth                                                                              |
| 900 MHz                                              |          |       | -66   |       | dBc    | Two CW tones at -8.5 dBFS, 400 MHz signal bandwidth                                                                              |
| 1800 MHz                                             |          |       | -60   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 2600 MHz                                             |          |       | -61   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 3500 MHz                                             |          |       | -61   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 4500 MHz                                             |          |       | -61   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 5600 MHz                                             |          |       | -61   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 6300 MHz                                             |          |       | -60   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| 7100 MHz                                             |          |       | -60   |       | dBc    | Two CW tones at -7 dBFS, 600 MHz signal bandwidth                                                                                |
| Rx Band Spurs Referenced to RF Input at Maximum Gain |          |       | -95   |       | dBm    | No more than one spur at this level per 10 MHz of Rx bandwidth; excludes converter clock spurs; no input signal applied; non-IoT |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                               | Symbol   | Min   | Typ   | Max    | Unit    | Test Conditions/Comments                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------|----------|-------|-------|--------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OBSERVATION RECEIVER (ORx)              |          |       |       |        |         | ORx digital datapath contains a -6 dB scaling due to the removal of the ADC image, therefore, a full-scale signal at the output of the ADC appears as a -6 dBFS signal at the digital datapath output, and ADI recommends adding this 6 dB back into the 2.14 (16-bit resolution) or 2.10 (12-bit resolution) data output (all values in the data sheet assume that this compensation has occurred) |
| Center of Input Frequency Range         |          | 450   |       | 7125   | MHz     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| Signal Bandwidth                        |          |       |       | 450    | MHz     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| Output Data Rate                        |          | 61.44 |       | 491.52 | MSPS    | Supported data rates: 61.44 MSPS, 122.88 MSPS, 184.32 MSPS, 245.76 MSPS, 368.64 MSPS and 491.52 MSPS                                                                                                                                                                                                                                                                                                |
| Maximum ORx Input Power                 |          |       |       | 16     | dBm     | Specified at the pin; peak power for modulated signals with peak-to- average ratio (PAR) ≥ 7 dB; for CW, it is reduced to 10 dBm                                                                                                                                                                                                                                                                    |
| Full-Scale Input Power                  | P FS     |       |       |        |         | CW input power that produces 0 dBFS; 0 dB ORx attenuation; no external attenuator                                                                                                                                                                                                                                                                                                                   |
| 450 MHz                                 |          |       | 5.5   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 900 MHz                                 |          |       | 5.4   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1800 MHz                                |          |       | 5.3   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2600 MHz                                |          |       | 6.1   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3500 MHz                                |          |       | 7.5   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4500 MHz                                |          |       | 7.5   |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5600 MHz                                |          |       | 9     |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6300 MHz                                |          |       | 10    |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7100 MHz                                |          |       | 11    |        | dBm     |                                                                                                                                                                                                                                                                                                                                                                                                     |
| Gain Range                              |          |       | 16    |        | dB      | Limited by maximum input power of 16 dBm at device under test (DUT) input pins; ORx attenuation ≤ 12 dB recommended to achieve linearity performance                                                                                                                                                                                                                                                |
| Gain Step                               |          |       | 1     |        | dB      |                                                                                                                                                                                                                                                                                                                                                                                                     |
| Peak-to-Peak Gain Deviation             |          |       |       |        |         | Within signal bandwidth, includes compensation by programmable FIR filter; flatness is dependent on the external match and external match is not de-embedded                                                                                                                                                                                                                                        |
| 200 MHz RF Bandwidth                    |          |       | 0.4   |        | dB      |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 400 MHz RF Bandwidth                    |          |       | 0.6   |        | dB      |                                                                                                                                                                                                                                                                                                                                                                                                     |
| Peak-to-Peak Gain Deviation Narrow Band |          |       |       |        |         |                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20 MHz RF Bandwidth                     |          |       | 0.1   |        | dB      | Any 20 MHz bandwidth span within the large-signal bandwidth, includes compensation by programmable FIR filter                                                                                                                                                                                                                                                                                       |
| Deviation from Linear Phase             |          |       | ±2    |        | Degrees | 800 MHz RF bandwidth                                                                                                                                                                                                                                                                                                                                                                                |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                           | Symbol   | Min   | Typ   | Max   | Unit    | Test Conditions/Comments                                                                                                                                                               |
|-------------------------------------|----------|-------|-------|-------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Input Impedance Input Source VSWR   | Z IN     |       | 100   | 3     | Ω       | Differential                                                                                                                                                                           |
| Input Port Return Loss              |          |       | 10    |       | dB      |                                                                                                                                                                                        |
| Third-Order Intermodulation Product | IM3      |       |       |       |         | Two tones, each at -13 dBFS; ORx attenuation ≤ 12 dB recommended to achieve performance                                                                                                |
| LO < 5000 MHz                       |          |       | -70   |       | dBc     |                                                                                                                                                                                        |
| LO > 5000 MHz                       |          |       | -65   |       | dBc     |                                                                                                                                                                                        |
| Second-Order Harmonic Distortion    | HD2      |       |       |       |         | 0 dB ORx attenuation; ORx attenuation ≤ 12 dB recommended to achieve performance                                                                                                       |
| LO < 5000 MHz                       |          |       |       |       |         |                                                                                                                                                                                        |
| -1 dBFS                             |          |       | -51   |       | dBc     |                                                                                                                                                                                        |
| -10 dBFS                            |          |       | -60   |       | dBc     |                                                                                                                                                                                        |
| LO > 5000 MHz                       |          |       |       |       |         |                                                                                                                                                                                        |
| -1 dBFS                             |          |       | -46   |       | dBc     |                                                                                                                                                                                        |
| -10 dBFS                            |          |       | -55   |       | dBc     |                                                                                                                                                                                        |
| Third-Order Harmonic Distortion     | HD3      |       |       |       |         | 0 dB ORx attenuation; ORx attenuation ≤ 12 dB recommended to achieve performance                                                                                                       |
| LO < 5000 MHz -1 dBFS               |          |       | -52   |       | dBc     |                                                                                                                                                                                        |
| -10 dBFS                            |          |       | -70   |       | dBc     |                                                                                                                                                                                        |
| LO > 5000 MHz                       |          |       |       |       |         |                                                                                                                                                                                        |
| -1 dBFS                             |          |       | -47   |       | dBc     |                                                                                                                                                                                        |
| -10 dBFS                            |          |       | -65   |       | dBc     |                                                                                                                                                                                        |
| Spurious-Free Dynamic Range         | SFDR     |       | -65   |       | dBFS    | Within signal bandwidth; -10 dBFS input; nonintermodulation related spurs; does not include harmonic distortion; limited by CW spur at N (where N is any integer number) × f S /4      |
|                                     |          |       | -70   |       | dBFS    | Within signal bandwidth; -10 dBFS input; nonintermodulation related spurs; does not include harmonic distortion; does not include f S /4 spur; limited by clock spurs at f IN ± f S /4 |
| Noise Spectral Density              | N 0      |       | -75   |       | dBFS    | -10 dBFS input, not including clock spurs at f IN ± f S /4 0 dB ORx attenuation; tone power -20 dBFS or lower                                                                          |
| 2949.12 MHz Sampling Frequency      |          |       | -144  |       | dBFS/Hz |                                                                                                                                                                                        |
| 3932.16 MHz Sampling Frequency      |          |       | -145  |       | dBFS/Hz |                                                                                                                                                                                        |
| 5898.24 MHz Sampling Frequency      |          |       | -147  |       | dBFS/Hz |                                                                                                                                                                                        |
| 7864.32 MHz Sampling Frequency      |          |       | -148  |       | dBFS/Hz |                                                                                                                                                                                        |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                    | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------------------|----------|-------|-------|-------|--------|----------------------------|
| CHANNEL TO CHANNEL ISOLATION |          |       |       |       |        |                            |
| Tx to Tx Isolation           |          |       |       |       |        |                            |
| 450 MHz                      |          |       | 73    |       | dB     |                            |
| 900 MHz                      |          |       | 73    |       | dB     |                            |
| 1800 MHz                     |          |       | 73    |       | dB     |                            |
| 2600 MHz                     |          |       | 69    |       | dB     |                            |
| 3500 MHz                     |          |       | 67    |       | dB     |                            |
| 4500 MHz                     |          |       | 66    |       | dB     |                            |
| 5600 MHz                     |          |       | 65    |       | dB     |                            |
| 6300 MHz                     |          |       | 65    |       | dB     |                            |
| 7100 MHz                     |          |       | 63    |       | dB     |                            |
| Tx to Rx Isolation           |          |       |       |       |        |                            |
| 450 MHz                      |          |       | 70    |       | dB     |                            |
| 900 MHz                      |          |       | 70    |       | dB     |                            |
| 1800 MHz                     |          |       | 70    |       | dB     |                            |
| 2600 MHz                     |          |       | 65    |       | dB     |                            |
| 3500 MHz                     |          |       | 63    |       | dB     |                            |
| 4500 MHz                     |          |       | 61    |       | dB     |                            |
| 5600 MHz                     |          |       | 60    |       | dB     |                            |
| 6300 MHz                     |          |       | 60    |       | dB     |                            |
| 7100 MHz                     |          |       | 60    |       | dB     |                            |
| Tx to ORx Isolation          |          |       |       |       |        |                            |
| 450 MHz                      |          |       | 75    |       | dB     |                            |
| 900 MHz                      |          |       | 75    |       | dB     |                            |
| 1800 MHz                     |          |       | 75    |       | dB     |                            |
| 2600 MHz                     |          |       | 74    |       | dB     |                            |
| 3500 MHz                     |          |       | 70    |       | dB     |                            |
| 4500 MHz                     |          |       | 67    |       | dB     |                            |
| 5600 MHz                     |          |       | 65    |       | dB     |                            |
| 6300 MHz                     |          |       | 65    |       | dB     |                            |
| 7100 MHz                     |          |       | 65    |       | dB     |                            |
| Rx to Rx Isolation           |          |       |       |       |        |                            |
| 450 MHz                      |          |       | 75    |       | dB     |                            |
| 900 MHz                      |          |       | 75    |       | dB     |                            |
| 1800 MHz                     |          |       | 75    |       | dB     |                            |
| 2600 MHz                     |          |       | 75    |       | dB     |                            |
| 3500 MHz                     |          |       | 63    |       | dB     |                            |
| 4500 MHz                     |          |       | 62    |       | dB     |                            |
| 5600 MHz                     |          |       | 60    |       | dB     |                            |
| 6300 MHz                     |          |       | 60    |       | dB     |                            |
| 7100 MHz                     |          |       | 60    |       | dB     |                            |
| Rx to ORx Isolation          |          |       |       |       |        |                            |
| 450 MHz                      |          |       | 75    |       | dB     |                            |
| 900 MHz                      |          |       | 75    |       | dB     |                            |
| 1800 MHz                     |          |       | 75    |       | dB     |                            |
| 2600 MHz                     |          |       | 75    |       | dB     |                            |
| 3500 MHz                     |          |       | 75    |       | dB     |                            |
| 4500 MHz                     |          |       | 70    |       | dB     |                            |
| 5600 MHz                     |          |       | 70    |       | dB     |                            |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                           | Symbol   | Min   | Typ    | Max   | Unit   | Test Conditions/Comments                                                                                                                     |
|-------------------------------------|----------|-------|--------|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 6300 MHz                            |          |       | 70     |       | dB     |                                                                                                                                              |
| 7100 MHz                            |          |       | 70     |       | dB     |                                                                                                                                              |
| ORx to ORx Isolation                |          |       |        |       |        |                                                                                                                                              |
| 450 MHz                             |          |       | 75     |       | dB     |                                                                                                                                              |
| 900 MHz                             |          |       | 75     |       | dB     |                                                                                                                                              |
| 1800 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 2600 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 3500 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 4500 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 5600 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 6300 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| 7100 MHz                            |          |       | 75     |       | dB     |                                                                                                                                              |
| LO SYNTHESIZER                      |          |       |        |       |        |                                                                                                                                              |
| LO Spectral Purity                  |          |       | -80    |       | dBc    | TDD mode, not including integer boundary spurs Integrated from 1 kHz to 50 MHz; PLL bandwidth optimized for integrated phase noise; PLL LFBW |
| Integrated Phase Noise, Wide Band   |          |       |        |       |        | approximately 500 kHz                                                                                                                        |
| 450 MHz                             |          |       | 0.017  |       | °RMS   |                                                                                                                                              |
| 900 MHz                             |          |       | 0.03   |       | °RMS   |                                                                                                                                              |
| 1800 MHz                            |          |       | 0.07   |       | °RMS   |                                                                                                                                              |
| 2600 MHz                            |          |       | 0.15   |       | °RMS   |                                                                                                                                              |
| 3500 MHz                            |          |       | 0.22   |       | °RMS   |                                                                                                                                              |
| 4500 MHz                            |          |       | 0.16   |       | °RMS   |                                                                                                                                              |
| 5600 MHz                            |          |       | 0.23   |       | °RMS   |                                                                                                                                              |
| 6300 MHz                            |          |       | 0.33   |       | °RMS   |                                                                                                                                              |
| 7100 MHz                            |          |       | 0.46   |       | °RMS   |                                                                                                                                              |
| Integrated Phase Noise, Narrow Band |          |       |        |       |        | Integrated from 1 kHz to 50 MHz; PLL optimized to minimize phase noise at offsets > 200 kHz; PLL LFBW approximately 70 kHz                   |
| 450 MHz                             |          |       | 0.058  |       | °RMS   |                                                                                                                                              |
| 900 MHz                             |          |       | 0.13   |       | °RMS   |                                                                                                                                              |
| 1800 MHz                            |          |       | 0.26   |       | °RMS   |                                                                                                                                              |
| 2600 MHz                            |          |       | 0.56   |       | °RMS   |                                                                                                                                              |
| 3500 MHz                            |          |       | 1.2    |       | °RMS   |                                                                                                                                              |
| 4500 MHz                            |          |       | 0.74   |       | °RMS   |                                                                                                                                              |
| 5600 MHz                            |          |       | 1.25   |       | °RMS   |                                                                                                                                              |
| 6300 MHz                            |          |       | 1.92   |       | °RMS   |                                                                                                                                              |
| 7100 MHz                            |          |       | 2.67   |       | °RMS   |                                                                                                                                              |
| Spot Phase Noise, Wide Band         |          |       |        |       |        | PLL bandwidth optimized for integrated phase noise; PLL LFBW approximately 500 kHz                                                           |
| 450 MHz                             |          |       |        |       |        |                                                                                                                                              |
| 100 kHz Offset                      |          |       | -133   |       | dBc/Hz |                                                                                                                                              |
| 1 MHz Offset                        |          |       | -145.9 |       | dBc/Hz |                                                                                                                                              |
| 10 MHz Offset                       |          |       | -158.8 |       | dBc/Hz |                                                                                                                                              |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                     | Symbol   | Min   | Typ       | Max   | Unit   | Test Conditions/Comments                                    |
|-------------------------------|----------|-------|-----------|-------|--------|-------------------------------------------------------------|
| 900 MHz                       |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -127      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -139      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -160      |       | dBc/Hz |                                                             |
| 1800 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -119      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -132      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -156      |       | dBc/Hz |                                                             |
| 2600 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -113      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -125      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -150      |       | dBc/Hz |                                                             |
| 3500 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -110      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -120      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -148      |       | dBc/Hz |                                                             |
| 4500 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -113      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -122      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -149      |       | dBc/Hz |                                                             |
| 5600 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -110      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -119      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -146      |       | dBc/Hz |                                                             |
| 6300 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -108      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -117      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -144      |       | dBc/Hz |                                                             |
| 7100 MHz                      |          |       |           |       |        |                                                             |
| 100 kHz Offset                |          |       | -105      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -114      |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       | -142      |       | dBc/Hz |                                                             |
| Spot Phase Noise, Narrow Band |          |       |           |       |        | PLL optimized to minimize phase noise at offsets > 200 kHz; |
| 100 kHz Offset                |          |       | -121      |       | dBc/Hz |                                                             |
| 200 kHz Offset                |          |       | -131      |       | dBc/Hz |                                                             |
| 250 kHz Offset                |          |       | -135      |       | dBc/Hz |                                                             |
| 400 kHz Offset                |          |       | -141      |       | dBc/Hz |                                                             |
| 600 kHz Offset                |          |       | -146      |       | dBc/Hz |                                                             |
| 1 MHz Offset                  |          |       | -151      |       | dBc/Hz |                                                             |
| 1.2 MHz Offset                |          |       | -152      |       | dBc/Hz |                                                             |
| 1.8 MHz Offset                |          |       | -155      |       | dBc/Hz |                                                             |
| 6 MHz Offset                  |          |       | -159 -159 |       | dBc/Hz |                                                             |
| 10 MHz Offset                 |          |       |           |       | dBc/Hz |                                                             |

<!-- image -->

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter          | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|--------------------|----------|-------|-------|-------|--------|----------------------------|
| 900 MHz            |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -114  |       | dBc/Hz |                            |
| 200 kHz Offset     |          |       | -125  |       | dBc/Hz |                            |
| 250 kHz Offset     |          |       | -128  |       | dBc/Hz |                            |
| 400 kHz Offset     |          |       | -134  |       | dBc/Hz |                            |
| 600 kHz Offset     |          |       | -139  |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -144  |       | dBc/Hz |                            |
| 1.2 MHz Offset     |          |       | -146  |       | dBc/Hz |                            |
| 1.8 MHz Offset     |          |       | -150  |       | dBc/Hz |                            |
| 6 MHz Offset       |          |       | -158  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -160  |       | dBc/Hz |                            |
| 1800 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -109  |       | dBc/Hz |                            |
| 200 kHz Offset     |          |       | -118  |       | dBc/Hz |                            |
| 250 kHz Offset     |          |       | -121  |       | dBc/Hz |                            |
| 400 kHz Offset     |          |       | -127  |       | dBc/Hz |                            |
| 600 kHz Offset     |          |       | -132  |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -138  |       | dBc/Hz |                            |
| 1.2 MHz Offset     |          |       | -140  |       | dBc/Hz |                            |
| 1.8 MHz Offset     |          |       | -144  |       | dBc/Hz |                            |
| 6 MHz Offset       |          |       | -154  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -156  |       | dBc/Hz |                            |
| 2600 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -100  |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -130  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -150  |       | dBc/Hz |                            |
| 3500 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -90   |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -123  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -148  |       | dBc/Hz |                            |
| 4500 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -95   |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -128  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -150  |       | dBc/Hz |                            |
| 5600 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -92   |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -124  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -146  |       | dBc/Hz |                            |
| 6300 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -88   |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -121  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -144  |       | dBc/Hz |                            |
| 7100 MHz           |          |       |       |       |        |                            |
| 100 kHz Offset     |          |       | -84   |       | dBc/Hz |                            |
| 1 MHz Offset       |          |       | -117  |       | dBc/Hz |                            |
| 10 MHz Offset      |          |       | -142  |       | dBc/Hz |                            |
| EXTERNAL LO INPUT  |          |       |       |       |        |                            |
| Input Frequency    |          | 3.55  |       | 12    | GHz    |                            |
| Input Signal Power |          |       |       |       |        | Specified at the pin       |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                               | Symbol   | Min   | Typ    | Max   | Unit    | Test Conditions/Comments                                                                                                                                                                                 |
|---------------------------------------------------------|----------|-------|--------|-------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                         |          | -3    |        | +6    | dBm     | 3.55 GHz to 8 GHz                                                                                                                                                                                        |
|                                                         |          | 0     |        | 6     | dBm     | 8 GHz to 12 GHz                                                                                                                                                                                          |
| Allowable Input Signal Differential                     |          | -15   |        | +15   | Degrees | To ensure adequate quadrature error                                                                                                                                                                      |
| Phase Imbalance                                         |          |       |        |       |         | correction                                                                                                                                                                                               |
| Allowable Input Signal Differential Amplitude Imbalance |          |       |        | 1.5   | dB      |                                                                                                                                                                                                          |
| Input Signal Duty Cycle Error                           |          |       |        | 2.5   | %       |                                                                                                                                                                                                          |
| Input Impedance                                         |          |       | 100    |       | Ω       | Off-chip AC coupling is required                                                                                                                                                                         |
| Input Port Return Loss                                  |          |       | 10     |       | dB      |                                                                                                                                                                                                          |
| Supported LO Divider Ratio                              |          |       |        |       |         | Frequency division ratio of external LO to mixer, only powers of 2 supported; Tx LO range between 3.00 GHz and 3.55 GHz is not currently supported when using the external LO input for the Tx LO source |
| Tx: LO ≤ 3.00 GHz                                       |          | 4     |        | 32    |         |                                                                                                                                                                                                          |
| Tx: LO ≥ 3.55 GHz                                       |          | 2     |        | 2     |         |                                                                                                                                                                                                          |
| Rx                                                      |          | 2     |        | 32    |         |                                                                                                                                                                                                          |
| External LO Path Phase Noise                            |          |       |        |       |         |                                                                                                                                                                                                          |
| Referred to 2 GHz                                       |          |       |        |       |         |                                                                                                                                                                                                          |
| 800 kHz                                                 |          |       | -150   |       | dBc/Hz  |                                                                                                                                                                                                          |
| 3 MHz                                                   |          |       | -153   |       | dBc/Hz  |                                                                                                                                                                                                          |
| 10 MHz                                                  |          |       | -156   |       | dBc/Hz  |                                                                                                                                                                                                          |
| CLOCK SYNTHESIZER                                       |          |       |        |       |         |                                                                                                                                                                                                          |
| Integrated Phase Noise, Wide Band                       |          |       |        |       |         | 1 kHz to 100 MHz; PLL bandwidth optimized for low jitter (491.52 MHz f PFD )                                                                                                                             |
| 2949.12 MHz Sample Clock                                |          |       | 0.15   |       | °RMS    |                                                                                                                                                                                                          |
| 3932.16 MHz Sample Clock                                |          |       | 0.165  |       | °RMS    |                                                                                                                                                                                                          |
| Integrated Phase Noise, Narrow Band                     |          |       |        |       |         | 1 kHz to 100 MHz;PLL bandwidth optimized for low phase noise at > 800 kHz                                                                                                                                |
| 2949.12 MHz Sample Clock                                |          |       | 0.77   |       | °RMS    |                                                                                                                                                                                                          |
| 3932.16 MHz Sample Clock                                |          |       | 0.86   |       | °RMS    |                                                                                                                                                                                                          |
| Spot Phase Noise, Wide Band                             |          |       |        |       |         | 1 kHz to 100 MHz; PLL bandwidth optimized for low jitter (491.52 MHz f PFD )                                                                                                                             |
| 2949.12 MHz Sample Clock                                |          |       |        |       |         |                                                                                                                                                                                                          |
| 100 kHz Offset                                          |          |       | -112   |       | dBc/Hz  |                                                                                                                                                                                                          |
| 1 MHz Offset                                            |          |       | -123.5 |       | dBc/Hz  |                                                                                                                                                                                                          |
| 10 MHz Offset                                           |          |       | -149.5 |       | dBc/Hz  |                                                                                                                                                                                                          |
| 3932.16 MHz Sample Clock                                |          |       |        |       |         |                                                                                                                                                                                                          |
| 100 kHz Offset                                          |          |       | -110.5 |       | dBc/Hz  |                                                                                                                                                                                                          |
| 1 MHz Offset                                            |          |       | -124.5 |       | dBc/Hz  |                                                                                                                                                                                                          |
| 10 MHz Offset                                           |          |       | -149.5 |       | dBc/Hz  |                                                                                                                                                                                                          |
| Spot Phase Noise, Narrow Band                           |          |       |        |       |         | 1 kHz to 100 MHz; PLL bandwidth optimized for low phase noise at > 800 kHz                                                                                                                               |
| 2949.12 MHz Sample Clock 100 kHz Offset                 |          |       | -96    |       | dBc/Hz  |                                                                                                                                                                                                          |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                                  | Symbol   | Min        | Typ                                       | Max        | Unit   | Test Conditions/Comments                                                                                                                                                                                                     |
|--------------------------------------------|----------|------------|-------------------------------------------|------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 800 kHz Offset                             |          |            | -125                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| 1 MHz Offset                               |          |            | -127.5                                    |            | dBc/Hz |                                                                                                                                                                                                                              |
| 3 MHz Offset                               |          |            | -140                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| 10 MHz Offset                              |          |            | -150                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| 3932.16 MHz Sample Clock 100 kHz Offset    |          |            | -97                                       |            | dBc/Hz |                                                                                                                                                                                                                              |
| 800 kHz Offset                             |          |            | -125                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| 1 MHz Offset                               |          |            | -127.5                                    |            | dBc/Hz |                                                                                                                                                                                                                              |
| 3 MHz Offset                               |          |            | -139                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| 10 MHz Offset                              |          |            | -149                                      |            | dBc/Hz |                                                                                                                                                                                                                              |
| REFERENCE CLOCK (DEVCLK_IN SIGNAL)         |          |            |                                           |            |        |                                                                                                                                                                                                                              |
| Frequency Range                            |          | 61.44      |                                           | 491.52     | MHz    |                                                                                                                                                                                                                              |
| Slew Rate (Differential)                   |          | 1          |                                           |            | V/ns   | Using ±100 mV differential window                                                                                                                                                                                            |
| Signal Level (Differential)                |          | 0.35       |                                           | 1.9        | V p-p  | AC-coupled; Common-mode voltage internally supplied; for best spurious performance and to meet the specified PLL performance parameters, use a 1.9 V p-p input clock                                                         |
| Input Impedance                            |          |            | 100                                       |            | Ω      | Needs external AC-coupling                                                                                                                                                                                                   |
| SYSTEM REFERENCE INPUTS (SYSREF+, SYSREF-) |          |            |                                           |            |        |                                                                                                                                                                                                                              |
| Logic Compliance                           |          |            | Low-voltage differential signaling (LVDS) |            |        | Alternative signal formats, such as low-voltage positive emitter coupled logic (LVPECL), can be supported through the use of external components, as long as they adhere to the specification and maximum pin voltage limits |
| Differential Input Voltage                 | V OD     | 0.225      | 0.7                                       | 0.9        | V p-p  | DC-coupled LVDS                                                                                                                                                                                                              |
| Input Common-Mode Voltage                  | V OC     | 1.075      |                                           | 1.375      | V      | Common mode supplied by LVDS driver                                                                                                                                                                                          |
| Input Resistance (Differential)            |          |            | 48                                        |            | kΩ     |                                                                                                                                                                                                                              |
| Input Capacitance (Differential)           |          |            | 1                                         |            | pF     |                                                                                                                                                                                                                              |
| Input Offset Range                         |          | 30         |                                           | 220        | mV     | Programmable input offset used to prevent SYSREF toggling if LVDS driver has been turned off                                                                                                                                 |
| Device Clock to SYSREF Setup Time          |          | 320        |                                           |            | ps     | Align SYSREF rising edges to falling edges of DEVCLK at their inputs                                                                                                                                                         |
| Device Clock to SYSREF Hold                |          | 180        |                                           |            | ps     | Align SYSREF rising edges to falling edges of DEVCLK at their inputs                                                                                                                                                         |
| Time                                       |          |            |                                           |            |        |                                                                                                                                                                                                                              |
| DIGITAL SPECIFICATIONS (CMOS) Logic Inputs |          |            |                                           |            |        |                                                                                                                                                                                                                              |
| Input Voltage High Level                   |          | VIF × 0.65 |                                           | VIF + 0.18 | V      | Power supply specification in Table 2                                                                                                                                                                                        |
| Low Level                                  |          | -0.30      |                                           | VIF × 0.35 | V      |                                                                                                                                                                                                                              |
| Input Current                              |          |            |                                           |            |        |                                                                                                                                                                                                                              |
| High Level                                 |          | -10        |                                           | 10         | µA     |                                                                                                                                                                                                                              |
| Low Level                                  |          | -10        |                                           | 10         | µA     |                                                                                                                                                                                                                              |
| Logic Outputs                              |          |            |                                           |            |        |                                                                                                                                                                                                                              |

## SPECIFICATIONS

Table 1. Specifications (Continued)

| Parameter                             | Symbol   | Min                      | Typ   | Max             | Unit   | Test Conditions/Comments                       |
|---------------------------------------|----------|--------------------------|-------|-----------------|--------|------------------------------------------------|
| Output Voltage High Level             |          | VIF - 0.45               |       |                 | V      |                                                |
| Low Level                             |          |                          |       | 0.45            | V      |                                                |
| Drive Capability                      |          |                          | 10    |                 | mA     |                                                |
| DIGITAL SPECIFICATIONS (LVDS)         |          |                          |       |                 |        |                                                |
| Logic Inputs                          |          |                          |       |                 |        |                                                |
| Input Voltage Range                   |          | 825                      |       | 1675            | mV     | Each differential input in the pair            |
| Input Differential Voltage Threshold  |          | -100                     |       | +100            | mV     |                                                |
| Receiver Differential Input Impedance |          |                          | 100   |                 | Ω      | Internal termination enabled                   |
| Logic Outputs                         |          |                          |       |                 |        |                                                |
| Output Voltage                        |          |                          |       |                 |        |                                                |
| High                                  |          |                          |       | 1375            | mV     |                                                |
| Low                                   |          | 1025                     |       |                 | mV     |                                                |
| Differential                          |          |                          | 225   |                 | mV     |                                                |
| Offset                                |          |                          | 1200  |                 | mV     |                                                |
| DIGITAL SPECIFICATIONS (GPIO_ANA)     |          |                          |       |                 |        |                                                |
| Logic Inputs                          |          |                          |       |                 |        |                                                |
| Input Voltage                         |          |                          |       |                 |        |                                                |
| High Level                            |          | VDDA_1P8 × 0.65          |       | VDDA_1P8 + 0.18 | V      | Power supply specification in Table 2          |
| Low Level                             |          | -0.30                    |       | VDDA_1P8 × 0.35 | V      |                                                |
| Input Current                         |          |                          |       |                 |        |                                                |
| High Level                            |          | -10                      |       | +10             | µA     |                                                |
| Low Level                             |          | -10                      |       | +10             | µA     |                                                |
| Logic Outputs                         |          |                          |       |                 |        |                                                |
| Output Voltage                        |          |                          |       |                 |        |                                                |
| High Level                            |          | (VDDA_1P8 × 0.95) - 0.45 |       |                 | V      | 2 mA drive current at default drive strength   |
|                                       |          | (VDDA_1P8 × 0.95) - 0.11 |       |                 | V      | 0.5 mA drive current at default drive strength |
|                                       |          | VDDA_1P8 × 0.95          |       |                 | V      | <20 µA drive current at default drive strength |
| Low Level                             |          |                          |       | 0.45            | V      |                                                |
| Drive Capability                      |          |                          | 2     |                 | mA     |                                                |

Figure 2. LVDS Input Levels for SYSREF

<!-- image -->

## SPECIFICATIONS

## POWER SUPPLY SPECIFICATIONS

Table 2. Power Supply Specifications

| Parameter              | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|------------------------|----------|-------|-------|-------|--------|----------------------------|
| SUPPLY CHARACTERISTICS |          |       |       |       |        |                            |
| VDIG_0P8 Supply        |          | 0.76  | 0.8   | 0.84  | V      | ±5%                        |
| VDDA_1P0 Supply        |          | 0.975 | 1     | 1.025 | V      | ±2.5%                      |
| VDDA_1P8 Supply        |          | 1.71  | 1.8   | 1.89  | V      | ±5%                        |
| VIF Supply             |          | 1.71  | 1.8   | 1.89  | V      | ±5%                        |

## DIGITAL INTERFACE AND TIMING SPECIFICATIONS

Table 3. Digital Interface and Timing Specifications

| Parameter                                                                                           | Symbol   | Min          | Typ   | Max          | Unit   | Test Conditions/Comments                                     |
|-----------------------------------------------------------------------------------------------------|----------|--------------|-------|--------------|--------|--------------------------------------------------------------|
| SERIAL-PERIPHERAL INTERFACE (SPI) TIMING                                                            |          |              |       |              |        |                                                              |
| Write SPI_CLK Period                                                                                | t CP     | 20           |       |              | ns     |                                                              |
| SPI_CLK High Pulse Width                                                                            | t MP     | 5            |       |              | ns     |                                                              |
| SPI_EN Setup to First SPI_CLK Rising Edge                                                           | t SC     | 4            |       |              | ns     |                                                              |
| Last SPI_CLK Falling Edge to SPI_EN Hold                                                            | t HC     | 0            |       |              | ns     |                                                              |
| SPI_DIO Data Input Setup to SPI_CLK                                                                 | t S      | 4            |       |              | ns     |                                                              |
| SPI_DIO Data Input Hold to SPI_CLK                                                                  | t H      | 0            |       |              | ns     |                                                              |
| SPI_CLK Falling Edge to Output Data Delay                                                           | t CO     | 3.5          |       | 8            | ns     | 3- or 4-wire mode                                            |
| Bus Turnaround Time After Baseband Processor Drives Last Address Bit                                | t HZM    | t CO MINIMUM |       | t CO MAXIMUM | ns     | 3-wire mode                                                  |
| Bus Turnaround Time After Transceiver Drives Last Data Bit (Must be in Terms of Baseband Processor) | t HZS    | t CO MINIMUM |       | t CO MAXIMUM | ns     | 3-wire mode                                                  |
| JESD204B/C DATA OUTPUT TIMING                                                                       |          |              |       |              |        |                                                              |
| Unit Interval                                                                                       | UI       | 61.7         |       | 407          | ps     | 20% to 80% in 100 Ω load 20% to 80% in 100 Ω load AC-coupled |
| Zero (NRZ) JESD204B JESD204C                                                                        |          |              |       |              |        |                                                              |
|                                                                                                     |          | 2457.6       |       | 16500        | Mbps   |                                                              |
|                                                                                                     |          | 2027.52      |       | 16500        | Mbps   |                                                              |
| Rise Time                                                                                           | t R      | 17           | 26    |              | ps     |                                                              |
| Fall Time                                                                                           | t F      | 17           | 26    |              | ps     |                                                              |
| Output Common-Mode Voltage                                                                          | V CM     | 0            |       | 1.8          | V      |                                                              |
| Differential Output Voltage                                                                         | V DIFF   | 360          | 466   | 1000         | mV ppd |                                                              |
| Short-Circuit Current                                                                               | I DSHORT | -100         |       | +100         | mA     |                                                              |
| Differential Termination Impedance                                                                  | Z RDIFF  | 80           | 100   | 120          | Ω      |                                                              |
| JESD204B/C DATA INPUT TIMING                                                                        |          |              |       |              |        |                                                              |
| Unit Interval                                                                                       | UI       | 61.7         |       | 407          | ps     | AC-coupled                                                   |
| Data Rate per Channel, NRZ JESD204B                                                                 |          | 2457.6       |       | 16500        | Mbps   | AC-coupled                                                   |
| JESD204C                                                                                            |          | 2027.52      |       | 16500        | Mbps   | AC-coupled                                                   |
| Input Common-Mode Voltage                                                                           | V CM     | 0.05         |       | 1.65         | V      | AC-coupled                                                   |
| Differential Input Voltage                                                                          | V DIFF   | 125          |       | 1000         | mV ppd | AC-coupled                                                   |
| Differential Termination Impedance                                                                  | Z RDIFF  | 80           | 106   | 120          | Ω      | AC-coupled                                                   |

## ABSOLUTE MAXIMUM RATINGS

Table 4. Absolute Maximum Ratings

| Parameter                                       | Rating                                   |
|-------------------------------------------------|------------------------------------------|
| VDDA_1P8 to VSSA                                | -0.2 V to +1.98 V                        |
| VDIG_0P8 to VSSD, VSSA                          | -0.2 V to +1.05 V                        |
| VDDA_1P0 to VSSA                                | -0.2 V to see Table 10                   |
| VIF Referenced Logic Inputs and Outputs to VSSD | -0.3 V to VIF + 0.3 V                    |
| JESD204B/C Logic Outputs to VSSA                | -0.2 V to +1.1 V                         |
| JESD204B/C Logic Inputs to VSSA                 | -0.2 V to +1.1 V                         |
| Input Current to Any Pin Except Supplies        | ±10 mA                                   |
| Maximum Input Power into Rx Ports               | See Table 9 for limits vs. survival time |
| Maximum Input Power into ORx Port               | 20 dBm 1                                 |
| Junction Temperature Range                      | -40°C to +110°C 2                        |
| Storage Temperature Range                       | -65°C to +150°C                          |

1 This is for modulated signals with PAR ≥ 7 dB and ORx attenuation ≥ 6 dB. For lower attenuation, the maximum rating decreases dB to dB. For CW, it is 14 dBm for all ORx attenuations.

2 Operation up to 125°C is supported, but specification compliance is only guaranteed up to 110°C. Operation above 110°C can impact device operating lifetime. To avoid a reduction in operating lifetime by operating above 110°C, the device must operate at a temperature below 110°C for a period. Use the following equation to calculate lifetime: Lifetime = (Σ(time T × AF T ) × 10), where: time T refers to time spent at discrete temperatures on Table 6 in terms of duty cycle, and AF T are acceleration factors taken from Table 5. Note that the maximum lifetime is 10 years.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Table 5. Acceleration Factors for High Temperature Operation

|   Operating Junction Temperature (°C) |   Acceleration Factor (AF) |
|---------------------------------------|----------------------------|
|                                   125 |                       3.32 |
|                                   120 |                       2.25 |
|                                   115 |                       1.51 |
|                                   110 |                       1    |
|                                   105 |                       0.89 |
|                                   100 |                       0.79 |
|                                    95 |                       0.7  |
|                                    90 |                       0.62 |
|                                    85 |                       0.56 |
|                                    80 |                       0.48 |

The following example shows how the equation and the acceleration factor values are used to understand whether operating lifetime is degraded or not. An example scenario is shown in Table 6 which indicates the time that the device spends on a certain junction temperature with a duty cycle.

Table 6. Example Scenario to Estimate Impact of Accelerating Factor on Lifetime

|   Operating Junction Temperature (°C) | Duty Cycle   |
|---------------------------------------|--------------|
|                                   125 | 0.05 (5%)    |
|                                   120 | 0.1 (10%)    |
|                                    95 | 0.4 (40%)    |
|                                    90 | 0.45 (45%)   |

With values from Table 5 and Table 6, the condition for operating lifetime of 10 years is satisfied and there is no degradation:

<!-- formula-not-decoded -->

To the extent that the customer operates the hardware under the condition T J &gt; 110°C, the customer represents and warrants that they first consult with an Analog Devices field representative. To support any failure analysis made by Analog Devices, the customer further warrants that it provides relevant historical logs reasonably requested by Analog Devices. In the absence of relevant historical logs being made available by the customer, Analog Devices determines, at its sole discretion by analyzing various technical indicators, whether or not the customer has operated the device within guidance, see Table 4 for reference.

Analog Devices represents and warrants that performance of its hardware products meets the provided specifications only to the extent that the customer has operated the device (see Table 4) and in accordance with Analog Devices' standard warranty. If the customer operates the hardware beyond the lifetime determined (see Table 4) Analog Devices does not warrant that the hardware operates as expected, operates without malfunction, damage, or failure, or performs in a manner consistent with its provided specifications. In such circumstances, Analog Devices further assumes no liability for the operation of the hardware.

## REFLOW PROFILE

The transceiver reflow profile is in accordance with the JEDEC JESD20 criteria for Pb-free devices. The maximum reflow temperature is 260°C.

## THERMAL RESISTANCE

Thermal performance is directly linked to PCB design and operating environment. Careful attention to PCB thermal design is required.

Thermal resistance values specified in Table 7 are calculated based on JEDEC specs (unless specified otherwise) and must be used in compliance with JESD51-12.

Using enhanced heat removal (such as PCB, heat sink, and airflow) techniques improve thermal resistance values.

θ JA is the natural convection, junction to ambient thermal resistance measured in a one cubic foot sealed enclosure, θ JC\_TOP is the junction to case, top thermal resistance, θ JB is the junction to board

## ABSOLUTE MAXIMUM RATINGS

thermal resistance, Ψ JT is the junction to top of the package thermal resistance, and Ψ JB is the junction to the board thermal resistance.

Table 7. Thermal Resistance

| Package Type   |   θ JA |   θ JC_TOP |   θ JB |   Ψ JT |   Ψ JB | Unit   |
|----------------|--------|------------|--------|--------|--------|--------|
| BP-506-1       |  11.61 |       1.12 |   3.15 |   0.83 |   2.72 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDDEC JS-001. Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for the ADRV9032R

Table 8. ADRV9032R, 506-Ball CSP\_BGA

| ESD Model   | Withstand Threshold (V)   | Class   |
|-------------|---------------------------|---------|
| HBM         | ±1000                     | 1B      |
| CDM         | ±175 1                    | C0B     |

Table 9. Maximum Input Power into Receiver Ports vs. Lifetime

| RF Port Input Power (Continuous Wave   | Lifetime      | Lifetime     |
|----------------------------------------|---------------|--------------|
| Signal)                                | ATTEN = 32 dB | ATTEN = 0 dB |
| 7 dBm                                  | >10 years     | >10 years    |
| 10 dBm                                 | >10 years     | >10 years    |
| 20 dBm                                 | >10 years     | 70 hours     |
| 21 dBm                                 | >10 years     | 24 hours     |
| 24 dBm                                 | >10 years     | 24 hours     |

Table 10. VDDA\_1P0 Voltage vs. Duty Cycle to Maintain 10-Year Lifetime

|   VDDA_1P0 (V) |   Required Duty Cycle to Maintain 10- Year Lifetime (%) |
|----------------|---------------------------------------------------------|
|           1    |                                                   100   |
|           1.01 |                                                   100   |
|           1.02 |                                                   100   |
|           1.03 |                                                   100   |
|           1.04 |                                                   100   |
|           1.05 |                                                    98.8 |
|           1.06 |                                                    66.5 |
|           1.07 |                                                    45   |
|           1.08 |                                                    30.5 |
|           1.09 |                                                    20.7 |
|           1.1  |                                                    14.2 |
|           1.11 |                                                     9.7 |
|           1.12 |                                                     6.7 |
|           1.13 |                                                     4.6 |
|           1.14 |                                                     3.2 |
|           1.15 |                                                     2.2 |
|           1.16 |                                                     1.5 |

Table 10. VDDA\_1P0 Voltage vs. Duty Cycle to Maintain 10-Year Lifetime (Continued)

|   VDDA_1P0 (V) |   Required Duty Cycle to Maintain 10- Year Lifetime (%) |
|----------------|---------------------------------------------------------|
|           1.17 |                                                     1.1 |
|           1.18 |                                                     0.8 |
|           1.19 |                                                     0.5 |
|           1.2  |                                                     0.4 |

## ABSOLUTE MAXIMUM RATINGS

ESD CAUTION

<!-- image -->

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 11. Pin Function Descriptions

| Pin No.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Mnemonic   | Type 1   | Description     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|----------|-----------------|
| A1, A2, A5, A7, A9, A11, A12, A14, A16, A18, A21, A22, B2 to B21, C2, C3, C5, C8, C11, C12, C15, C18, C20, C21, D1 to D3, D5, D9 to D14, D18, D20 to D22, E1 to E5, E9, E10, E13, E14, E18 to E22, F2 to F5, F9, F11, F12, F14, F18 to F21, G2, G3, G5 to G10, G13 to G18, G20, G21, H1 to H3, H5, H6, H8, H15, H17, H18, H20 to H22, J1 to J6, J8, J15, J17 to J22, K2 to K6, K8, K15, K17 to K21, L2 to L6, L17 to L21, M1 to M3, M5, M6, M17, M18, M20 to M22, N1 to N3, N5, N6, N8, N15, N17, N18, N20 to N22, P2 to P6, P8, P15, P17 to P21, R2 to R6, R8, R15, R17 to R21, T1 to T3, T5 to T7, T16 to T18, T20 to T22, U1 to U3, U5, U7, U18, U20 to U22, V2 to V7, V17 to V21, W2, W4 to W19, W21, Y1 to Y4, Y7, Y8, Y11, Y12, Y15, Y16, Y19 | VSSA       | I        | Analog Grounds. |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 11. Pin Function Descriptions (Continued)

| Pin No.                                                                                                                                                                                        | Mnemonic                                                                                                                                           | Type 1   | Description                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| to Y22, AA1, AA2, AA5, AA6, AA9, AA10, AA12 to AA14, AA17, AA18, AA21, AA22, AB1 to AB4, AB7, AB8, AB15, AB16, AB19 to AB22, AC1, AC2, AC5, AC6, AC9, AC10, AC13, AC14, AC17, AC18, AC21, AC22 |                                                                                                                                                    |          |                                                                                                                                                                                           |
| L8, M8                                                                                                                                                                                         | VSSA                                                                                                                                               | I        | Analog Grounds, Return Pins for VSCLK0_1P0. Connect decoupling capacitor between L7 and L8 and M7 and M8.                                                                                 |
| L15, M15                                                                                                                                                                                       | VSSA                                                                                                                                               | I        | Analog Grounds, Return Pins for VSCLK1_1P0. Connect decoupling capacitor between L16 and L15 and M16 and M15.                                                                             |
| A3                                                                                                                                                                                             | VVCO0_1P8                                                                                                                                          | I        | 1.8 V Supply Voltage. Requires local bypass to ground.                                                                                                                                    |
| A4                                                                                                                                                                                             | VVCO0_1P0                                                                                                                                          | O        | 1.0 V Internal Low-Dropout (LDO) Output. Connect a 4.7 µF ceramic capacitor from the A4 pin to VSSA.                                                                                      |
| A6                                                                                                                                                                                             | VRXLO0_1P0                                                                                                                                         | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A8                                                                                                                                                                                             | VTXLO0_1P0                                                                                                                                         | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A10                                                                                                                                                                                            | VLO0_1P0                                                                                                                                           | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A13                                                                                                                                                                                            | VLO1_1P0                                                                                                                                           | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A15                                                                                                                                                                                            | VTXLO1_1P0                                                                                                                                         | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A17                                                                                                                                                                                            | VRXLO1_1P0                                                                                                                                         | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| A19                                                                                                                                                                                            | VVCO1_1P0                                                                                                                                          | O        | 1.0 V Internal LDO Output. Connect a 4.7 µF ceramic capacitor from the A19 pin to VSSA.                                                                                                   |
| A20                                                                                                                                                                                            | VVCO1_1P8                                                                                                                                          | I        | 1.8 V Supply Voltage. Requires local bypass to ground.                                                                                                                                    |
| B1, C1                                                                                                                                                                                         | TX0N, TX0P                                                                                                                                         | O        | Differential Outputs for Transmitter Channel 0. Do not connect if unused.                                                                                                                 |
| B22, C22                                                                                                                                                                                       | TX4P, TX4N                                                                                                                                         | O        | Differential Outputs for Transmitter Channel 4. Do not connect if unused.                                                                                                                 |
| C4, D4                                                                                                                                                                                         | RX0P, RX0N                                                                                                                                         | I        | Differential Inputs for Receiver Channel 0. Do not connect if unused.                                                                                                                     |
| C6                                                                                                                                                                                             | VANA0_1P8                                                                                                                                          | I        | 1.8 V Supply Voltage.                                                                                                                                                                     |
| C7                                                                                                                                                                                             | VBB0_1P0                                                                                                                                           | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| C9, C10                                                                                                                                                                                        | EXT_LO0N, EXT_LO0P                                                                                                                                 | I        | Differential External LO Input 0. Do not connect if unused.                                                                                                                               |
| C13, C14                                                                                                                                                                                       | EXT_L01N,                                                                                                                                          | I        | Differential External LO Input 1. Do not connect if unused.                                                                                                                               |
| C16                                                                                                                                                                                            | VBB1_1P0                                                                                                                                           | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| C19,                                                                                                                                                                                           | RX4N, RX4P                                                                                                                                         | I        | Differential Inputs for Receiver Channel 4. Do not connect if                                                                                                                             |
| D19                                                                                                                                                                                            |                                                                                                                                                    |          | unused.                                                                                                                                                                                   |
| D6 to D8, D15 to D17, E6, E7, E16, E17, F6 to F8, F15 to F17                                                                                                                                   | GPIO_ANA_1, GPIO_ANA_0, GPIO_ANA_2, GPIO_ANA_10, GPIO_ANA_8, GPIO_ANA_9, GPIO_ANA_6, GPIO_ANA_4, GPIO_ANA_12, GPIO_ANA_14, GPIO_ANA_5, GPIO_ANA_3, | I/O      | General-Purpose Inputs and Outputs Referenced to 1.8 V. If unused, these pins can be connected to VSSA with a 10 kΩ resistor or configured as outputs, driven low, and left disconnected. |
| E8                                                                                                                                                                                             | VSYN0_1P0                                                                                                                                          | I        | 1.0 V Supply Voltage.                                                                                                                                                                     |
| E11, E12                                                                                                                                                                                       | DEVCLKP, DEVCLKN                                                                                                                                   | I        | Device Clock Differential Inputs.                                                                                                                                                         |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 11. Pin Function Descriptions (Continued)

| Pin No.                                                                                                              | Mnemonic                                               | Type 1   | Description                                                                                                                                                                                                                                     |
|----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| F1, F22, G1, G4, G19, G22, H4, H19, M4, M19, N4, N19, P1, P22, R1, R22, T4, T19, U4, U19, V1, V11, V12, V22, W1, W22 | DNC                                                    | N/A      | Do Not Connect. Do not connect to the DNC pins.                                                                                                                                                                                                 |
| F10                                                                                                                  | VDEV_1P0                                               | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| F13                                                                                                                  | VSYS_1P8                                               | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| G11, G12                                                                                                             | SYSREFP, SYSREFN                                       | I        | LVDS System Reference Clock Inputs for the Serializer/Deserializer (SERDES) Interface.                                                                                                                                                          |
| H7                                                                                                                   | VCONV0_1P0                                             | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| H9, H14, J9, J14, L9, L14, M9, M14                                                                                   | TRXA_CTRL, TRXE_CTRL, TRXB_CTRL, TRXF_CTRL, TRXC_CTRL, | I        | Radio Control Pins.                                                                                                                                                                                                                             |
| H10 to H13, J10 to J13, K10, K13, L10, L13, M10, M13, N9, N10, N13, N14, P9, P10, P13, P14, R10, R13                 | GPIO_0 to GPIO_23                                      | I/O      | General-Purpose Digital Inputs and Outputs. See Figure 3 to match the pin location to the GPIO_x signal name. If unused, these pins can be connected to VSSD with a 10 kΩ resistor or configured as outputs, driven low, and left disconnected. |
| H16                                                                                                                  | VCONV2_1P0                                             | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| J7                                                                                                                   | VCONV0_1P8                                             | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| J16                                                                                                                  | VCONV2_1P8                                             | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| K1, L1                                                                                                               | ORX0N, ORX0P                                           | I        | Differential Inputs for Observation Receiver Channel 0. Do not connect if unused.                                                                                                                                                               |
| K7                                                                                                                   | VORX0_1P8                                              | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| K9, K14                                                                                                              | ORXA_CTRL, ORXB_CTRL                                   | I        | ORx Control Pins.                                                                                                                                                                                                                               |
| K11, L11, M11, N11, P11, R11, U11                                                                                    | VSSD                                                   | I        | Digital Grounds.                                                                                                                                                                                                                                |
| K12, L12, M12, N12, P12, R12                                                                                         | VDIG_0P8                                               | I        | 0.8 V Supply Voltages.                                                                                                                                                                                                                          |
| K16                                                                                                                  | VORX1_1P8                                              | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| K22, L22                                                                                                             | ORX1P, ORX1N                                           | I        | Differential Inputs for Observation Receiver Channel 1. Do not connect if unused.                                                                                                                                                               |
| L7, M7                                                                                                               | VSCLK0_1P0                                             | I        | 1.0 V Supply Voltages.                                                                                                                                                                                                                          |
| L16, M16                                                                                                             | VSCLK1_1P0                                             | I        | 1.0 V Supply Voltages.                                                                                                                                                                                                                          |
| N7                                                                                                                   | VORX0_1P0                                              | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| N16                                                                                                                  | VORX1_1P0                                              | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| P7                                                                                                                   | VCONV1_1P8                                             | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| P16                                                                                                                  | VCONV3_1P8                                             | I        | 1.8 V Supply Voltage.                                                                                                                                                                                                                           |
| R7                                                                                                                   | VCONV1_1P0                                             | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| R9                                                                                                                   | RESET                                                  | I        | Active-Low Chip Reset.                                                                                                                                                                                                                          |
| R14                                                                                                                  | TEST_EN                                                | I        | Test Input Used for Joint Test Action Group (JTAG) Boundary Scan. Pull high to enable boundary scan. Connect to VSSA if unused.                                                                                                                 |
| R16                                                                                                                  | VCONV3_1P0                                             | I        | 1.0 V Supply Voltage.                                                                                                                                                                                                                           |
| T8, U8                                                                                                               | SYNCOUT1P,                                             | O        | LVDS Sync Signal Output 1. Do not connect if unused.                                                                                                                                                                                            |
| T9, T14                                                                                                              | GPINT0, GPINT1                                         | O        | General-Purpose Interrupt Pins.                                                                                                                                                                                                                 |
| T10                                                                                                                  | SPI_CLK                                                | I        | SPI Clock.                                                                                                                                                                                                                                      |
| T11                                                                                                                  | SPI_DIO                                                | I/O      | SPI Data In and Out.                                                                                                                                                                                                                            |
| T12                                                                                                                  | SPI_DO                                                 | O        | SPI Data Out.                                                                                                                                                                                                                                   |
| T13                                                                                                                  | SPI_EN                                                 | I        | Active-Low SPI Enable.                                                                                                                                                                                                                          |
| T15, U15                                                                                                             | SYNCIN1P, SYNCIN1N                                     | I        | LVDS Sync Signal Input 1. Connect to VSSA if unused.                                                                                                                                                                                            |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 11. Pin Function Descriptions (Continued)

| Pin No.    | Mnemonic             | Type 1   | Description                                                                                                                                                                          |
|------------|----------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U6, U17    | RBIAS0, RBIAS1       | I        | Bias Resistor Connections. Pin U6 and Pin U17 generate an internal current based on an external 0.1% resistor. Connect a 4.99 kΩ resistor between each pin and analog ground (VSSA). |
| U9, U10    | SYNCOUT0P, SYNCOUT0N | O        | LVDS Sync Signal Output 0. Do not connect if unused.                                                                                                                                 |
| U12        | VIF_1P8              | I        | 1.8 V Supply Voltage.                                                                                                                                                                |
| U13, U14   | SYNCIN0N, SYNCIN0P   | I        | LVDS Sync Signal Input 0. Connect to VSSA if unused.                                                                                                                                 |
| U16        | VCLKSYN_1P0          | I        | 1.0 V Supply Voltage.                                                                                                                                                                |
| V8         | VSERVCO_1P0          | O        | 1.0 V Internal LDO Output. Connect a 4.7 µF ceramic capacitor from V8 to VSSA.                                                                                                       |
| V9         | VSERVCO_1P8          | I        | 1.8 V Supply Voltage.                                                                                                                                                                |
| V10, V13   | SYNCIN2N, SYNCIN2P   | I        | LVDS Sync Signal Input 2. Connect to VSSA if unused.                                                                                                                                 |
| V14        | VCLKVCO_1P0          | O        | 1.0 V Internal LDO Output. Connect a 4.7 µF ceramic capacitor from V14 to VSSA.                                                                                                      |
| V15        | VCLKVCO_1P8          | I        | 1.8 V Supply Voltage.                                                                                                                                                                |
| V16        | VCLKGEN_1P0          | I        | 1.0 V Supply Voltage.                                                                                                                                                                |
| W3         | VTX0_1P8             | I        | 1.8 V Supply Voltage.                                                                                                                                                                |
| W20        | VTX1_1P8             | I        | 1.8 V Supply Voltage.                                                                                                                                                                |
| Y5, Y6     | SERDOUT1P, SERDOUT1N | O        | SERDES Differential Output 1. Do not connect if unused.                                                                                                                              |
| Y9, Y10    | SERDOUT4P, SERDOUT4N | O        | SERDES Differential Output 4. Do not connect if unused.                                                                                                                              |
| Y13, Y14   | SERDIN5N, SERDIN5P   | I        | SERDES Differential Input 5. Do not connect if unused.                                                                                                                               |
| Y17, Y18   | SERDIN1P, SERDIN1N   | I        | SERDES Differential Input 1. Do not connect if unused.                                                                                                                               |
| AA3, AA4   | SERDOUT0P, SERDOUT0N | O        | SERDES Differential Output 0. Do not connect if unused.                                                                                                                              |
| AA7, AA8   | SERDOUT5P, SERDOUT5N | O        | SERDES Differential Output 5. Do not connect if unused.                                                                                                                              |
| AA11       | VSERSYN_1P0          | I        | 1.0 V Supply Voltage.                                                                                                                                                                |
| AA15, AA16 | SERDIN4N, SERDIN4P   | I        | SERDES Differential Input 4. Do not connect if unused.                                                                                                                               |
| AA19, AA20 | SERDIN0P, SERDIN0N   | I        | SERDES Differential Input 0. Do not connect if unused.                                                                                                                               |
| AB5, AB6   | SERDOUT3P, SERDOUT3N | O        | SERDES Differential Output 3. Do not connect if unused.                                                                                                                              |
| AB9, AB10  | SERDOUT6P, SERDOUT6N | O        | SERDES Differential Output 6. Do not connect if unused.                                                                                                                              |
| AB11, AC11 | VSER_1P0             | I        | 1.0 V Supply Voltages.                                                                                                                                                               |
| AB12, AC12 | VDES_1P0             | I        | 1.0 V Supply Voltages.                                                                                                                                                               |
| AB13, AB14 | SERDIN6N, SERDIN6P   | I        | SERDES Differential Input 6. Do not connect if unused.                                                                                                                               |
| AB17, AB18 | SERDIN3P, SERDIN3N   | I        | SERDES Differential Input 3. Do not connect if unused.                                                                                                                               |
| AC3, AC4   | SERDOUT2P, SERDOUT2N | O        | SERDES Differential Output 2. Do not connect if unused.                                                                                                                              |
|            | SERDOUT7N SERDIN7N,  |          |                                                                                                                                                                                      |
| AC15, AC16 | SERDIN7P             | I        | SERDES Differential Input 7. Do not connect if unused.                                                                                                                               |

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 11. Pin Function Descriptions (Continued)

| Pin No.    | Mnemonic           | Type 1   | Description                                            |
|------------|--------------------|----------|--------------------------------------------------------|
| AC19, AC20 | SERDIN2P, SERDIN2N | I        | SERDES Differential Input 2. Do not connect if unused. |

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 450 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 450 MHz, unless otherwise noted.

<!-- image -->

Figure 4. Transmitter Noise vs. Transmitter Attenuation Setting, 50 MHz Offset

<!-- image -->

Figure 5. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 6. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25ºC

<!-- image -->

Figure 7. Transmitter Image Rejection vs. Baseband Offset Frequency, -12 dBFS CW Signal

Figure 8. Adjacent Channel Power vs. Transmitter Attenuation, 190 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 9. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 10 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 11. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 10 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 12. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 10 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 13. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 10 MHz Offset, -12 dBFS CW Signal

Figure 14. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 10 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 15. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 80 MHz Offset, F2 = 85 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Transmitter IM3, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 80 MHz Offset, F2 = 85 MHz Offset

<!-- image -->

Figure 17. Transmitter IM3 Sum, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 + 5 MHz, Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone

<!-- image -->

Figure 18. Transmitter IM3 Sum, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 + 5 MHz, Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone

<!-- image -->

Figure 19. Transmitter IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 + 5 MHz, Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone

Figure 20. Transmitter IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 + 5 MHz, Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone

<!-- image -->

Figure 21. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 22. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

<!-- image -->

Figure 23. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

<!-- image -->

Figure 24. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -3.5 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 25. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

Figure 26. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

<!-- image -->

Figure 27. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 28. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -3.5 dBFS Input Signal

<!-- image -->

Figure 29. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 245.76 MSPS Sample Rate

<!-- image -->

Figure 30. Receiver Gain Step Error vs. Reciever Attenuation, 20 MHz Offset, -3.5 dBFS Input Signal

<!-- image -->

Figure 31. Receiver Normalized Gain vs. Receiver Attenuation, 20 MHz Offset, -3.5 dBFS Input Signal

Figure 32. Receiver DC Offset vs. Receiver Attenuation, 20 MHz Offset, -3.5 dBFS Input Signal

<!-- image -->

Figure 33. Receiver Image vs. Receiver Attenuation, 20 MHz Offset, -3.5 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 34. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 51 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 35. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 92 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 36. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 37. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

Figure 38. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 51 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 39. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 92 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 40. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 102 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 41. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 42. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 43. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 97 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 44. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 97 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 45. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 46. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 47. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 48. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 49. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

Figure 50. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 51. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 35 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 52. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 35 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 53. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 54. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -9.5 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 55. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

Figure 56. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 57. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 58. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -9.5 dBFS Signal Level per Tone

<!-- image -->

Figure 59. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 60. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

Figure 61. Receiver Error Vector Magnitude vs. Receiver Input Power, 20 MHz LTE, TDD Mode, AGC Enabled

Figure 62. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 63. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 64. Observation Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

Figure 65. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 66. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 67. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

Figure 68. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 482 MHz, F2 = 452 MHz

<!-- image -->

Figure 69. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 482 MHz, F2 = 452 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 70. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 542 MHz, F2 = 452 MHz

<!-- image -->

Figure 71. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 542 MHz, F2 = 452 MHz

<!-- image -->

Figure 72. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 452 MHz

<!-- image -->

Figure 73. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 452 MHz

Figure 74. Observation Receiver HD2 vs. Observation Receiver Attenuation, -40 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 75. Observation Receiver HD3 vs. Observation Receiver Attenuation, -40 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 76. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, -40 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 900 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 900 MHz, unless otherwise noted.

<!-- image -->

Figure 77. Transmitter Noise vs. Transmitter Attenuation Setting, 100 MHz Offset

<!-- image -->

Figure 78. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 79. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 80. Transmitter Image Rejection vs. Baseband Offset Frequency, -12 dBFS CW Signal

Figure 81. Adjacent Channel Power vs. Transmitter Attenuation, 190 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 82. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 83. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 84. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 85. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 86. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 87. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 88. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 105 MHz Offset, F2 = 100 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 89. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 105 MHz Offset, F2 = 100 MHz Offset

<!-- image -->

Figure 90. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 91. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 92. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 93. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 94. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 95. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

<!-- image -->

Figure 96. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

<!-- image -->

Figure 97. Receiver Signal Power at SMA Connector vs. Baseband Offset Frequency, -2.5 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 98. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

Figure 99. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

<!-- image -->

Figure 100. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 101. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -2.5 dBFS Input Signal

<!-- image -->

Figure 102. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 103. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -2.5 dBFS Input Signal

<!-- image -->

Figure 104. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -2.5 dBFS Input Signal

Figure 105. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -2.5 dBFS Input Signal

<!-- image -->

Figure 106. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -2.5 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 107. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 108. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 109. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 110. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

Figure 111. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 112. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 87 MHz Offset, F2 = 85 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 113. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 114. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 202 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 115. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 116. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

Figure 117. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 118. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F2 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 119. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 197 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 120. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 121. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 122. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

Figure 123. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 124. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 125. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 126. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 127. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 27 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 128. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

Figure 129. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -8.5 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 130. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 131. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 132. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 133. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -8.5 dBFS Signal Level per Tone

<!-- image -->

Figure 134. Receiver Phase vs. Receiver Attenuation

Figure 135. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

Figure 136. Receiver Error Vector Magnitude vs. Receiver Input Power, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 137. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 138. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 139. Observation Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

Figure 140. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

Figure 141. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 142. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 143. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 902 MHz, F2 = 912 MHz

<!-- image -->

Figure 144. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 902 MHz, F2 = 912 MHz

<!-- image -->

Figure 145. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 902 MHz, F2 = 1112 MHz

<!-- image -->

Figure 146. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 902 MHz, F2 = 1112 MHz

Figure 147. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 902 MHz

<!-- image -->

Figure 148. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 902 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 149. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 150. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 151. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 1800 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 1800 MHz, unless otherwise noted.

<!-- image -->

Figure 152. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 153. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 154. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25ºC

<!-- image -->

Figure 155. Transmitter Image Rejection vs. Baseband Offset Frequency, -6 dBFS CW Signal

Figure 156. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 157. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 158. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 159. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 160. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 161. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 162. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 163. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 164. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 165. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 166. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 167. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 168. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 169. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 170. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 171. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 172. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 173. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

Figure 174. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 175. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 176. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 177. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 178. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 179. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

Figure 180. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 181. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 182. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 183. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 184. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 185. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 186. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 187. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 188. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 189. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 282 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 190. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 191. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 192. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 193. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 194. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 195. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 196. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 197. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

Figure 198. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 199. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 200. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 201. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 202. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 203. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 204. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 205. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 206. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 207. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 208. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 209. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 210. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 211. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 212. Receiver Error Vector Magnitude vs. Receiver Input Power, 10 MHz Offset, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 213. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 214. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 215. Observation Receiver Baseband Flatness vs. Baseband Offset

Figure 216. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 217. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 218. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 219. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 1802 MHz, F2 = 1812 MHz

<!-- image -->

Figure 220. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 1802 MHz, F2 = 1812 MHz

<!-- image -->

Figure 221. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 1802 MHz, F2 = 2012 MHz

Figure 222. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 1802 MHz, F2 = 2012 MHz

<!-- image -->

Figure 223. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 1802 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 224. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 1802 MHz

<!-- image -->

Figure 225. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 226. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 227. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 2600 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 2600 MHz, unless otherwise noted.

<!-- image -->

Figure 228. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 229. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 230. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 231. Transmitter Image Rejection vs. Baseband Offset Frequency, -6 dBFS CW Signal

Figure 232. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 233. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 234. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 235. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 236. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 237. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 238. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 239. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 240. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 241. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 242. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 243. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 244. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 245. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 246. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 247. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 248. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 249. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

Figure 250. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 251. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 252. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 253. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 254. Receiver Gain Step Error vs. Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 255. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

Figure 256. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 257. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 258. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 259. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 260. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 261. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 262. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 263. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 264. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 265. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 282 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 266. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 267. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 268. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 269. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 270. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 271. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 272. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 273. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

Figure 274. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 275. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 276. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 277. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 278. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 279. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 280. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 281. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 282. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 283. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 284. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 285. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 286. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 287. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 288. Receiver Error Vector Magnitude vs. Receiver Input Power, 10 MHz Offset, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 289. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 290. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 291. Observation Receiver Baseband Flatness vs. Baseband Offset

Figure 292. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 293. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 294. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 295. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 2602 MHz, F2 = 2612 MHz

<!-- image -->

Figure 296. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 2602 MHz, F2 = 2612 MHz

<!-- image -->

Figure 297. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 2602 MHz, F2 = 2812 MHz

Figure 298. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 2602 MHz, F2 = 2812 MHz

<!-- image -->

Figure 299. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 2602 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 300. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 2602 MHz

<!-- image -->

Figure 301. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 302. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 303. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 3500 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 3500 MHz, unless otherwise noted.

<!-- image -->

Figure 304. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 305. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 306. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 307. Transmitter Image Rejection vs. Baseband Offset Frequency, -6 dBFS CW Signal

Figure 308. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 309. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 310. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 311. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 312. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 313. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 314. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 315. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 316. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 317. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 318. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 319. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 320. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 321. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 322. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 323. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 324. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 325. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

Figure 326. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 327. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 328. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 329. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 330. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 331. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

Figure 332. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 333. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 334. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 335. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 336. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 337. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 338. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 339. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 340. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 341. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 282 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 342. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 343. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 344. Receiver IM3 DIfference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 345. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 346. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 347. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 348. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 349. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

Figure 350. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 351. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 352. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 353. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 354. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 355. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 356. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 357. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 358. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 359. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 360. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 361. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 362. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 363. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 364. Receiver Error Vector Magnitude vs. Receiver Input Power, 10 MHz Offset, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 365. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 366. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 367. Observation Receiver Baseband Flatness vs. Baseband Offset

Figure 368. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 369. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 370. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 371. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 3502 MHz, F2 = 3512 MHz

<!-- image -->

Figure 372. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 3502 MHz, F2 = 3512 MHz

<!-- image -->

Figure 373. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 3502 MHz, F2 = 3712 MHz

Figure 374. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 3502 MHz, F2 = 3712 MHz

<!-- image -->

Figure 375. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 3502 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 376. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 3502 MHz

<!-- image -->

Figure 377. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 378. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 379. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 4500 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 4500 MHz, unless otherwise noted.

<!-- image -->

Figure 380. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 381. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 382. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -10 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 383. Transmitter Image Rejection vs. Baseband Offset Frequency, -6 dBFS CW Signal

Figure 384. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 385. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 386. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 387. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 388. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 389. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

Figure 390. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 391. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 392. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 393. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 394. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 395. Transmitter Phase vs. Transmitter Attenuation

Figure 396. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 397. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 398. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 399. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 400. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 401. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

Figure 402. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 403. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 404. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 405. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 406. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 407. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

Figure 408. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 409. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 410. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 411. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 412. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 413. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

Figure 414. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 415. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 282 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 416. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 417. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 418. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 419. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 420. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 421. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 422. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 423. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 424. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 425. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 426. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 427. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 428. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 429. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 430. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 431. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 42 MHz Offset, F2 = 2 MHz Offset

Figure 432. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 433. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 434. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 435. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 436. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 437. Receiver Baseband Flatness vs. Baseband Offset

Figure 438. Receiver Error Vector Magnitude vs. Receiver Input Power, 10 MHz Offset, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 439. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 440. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 441. Observation Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

Figure 442. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 443. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

Figure 444. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 445. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 4502 MHz, F2 = 4512 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 446. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 4502 MHz, F2 = 4512 MHz

<!-- image -->

Figure 447. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 4502 MHz, F2 = 4712 MHz

<!-- image -->

Figure 448. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 4502 MHz, F2 = 4712 MHz

<!-- image -->

Figure 449. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 4502 MHz

Figure 450. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 4502 MHz

<!-- image -->

Figure 451. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 452. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 453. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 5600 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 5600 MHz, unless otherwise noted.

<!-- image -->

Figure 454. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 455. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 456. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -6 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 457. Transmitter Image Rejection vs. Baseband Offset Frequency, -12 dBFS CW Signal

Figure 458. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 459. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 460. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 461. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 462. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 463. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 464. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 465. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 466. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 467. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 468. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 469. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 470. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 471. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 472. Transmitter Error Vector Magnitude vs. Transmitter Attenuation, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 473. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 474. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 475. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

Figure 476. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 477. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 478. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 479. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 480. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 481. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal (Measured Using High Band Gain Table)

Figure 482. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 483. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 484. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 485. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 486. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 487. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 488. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 489. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 490. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

Figure 491. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 492. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 272 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 493. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 494. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 495. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 496. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 497. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = 275 MHz Offset

<!-- image -->

Figure 498. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 499. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

Figure 500. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 501. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 502. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 503. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 504. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 505. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 506. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 507. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 508. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 509. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 510. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 511. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 512. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 513. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 514. Receiver Error Vector Magnitude vs. Receiver Input Power, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 515. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 516. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 517. Observation Receiver Baseband Flatness vs. Baseband Offset

Figure 518. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 519. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 520. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 521. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 5602 MHz, F2 = 5612 MHz

<!-- image -->

Figure 522. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 5602 MHz, F2 = 5612 MHz

<!-- image -->

Figure 523. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 5602 MHz, F2 = 5612 MHz

Figure 524. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 5602 MHz, F2 = 5612 MHz

<!-- image -->

Figure 525. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 5602 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 526. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 5602 MHz

<!-- image -->

Figure 527. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 528. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 529. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 6300 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 6300 MHz, unless otherwise noted.

<!-- image -->

Figure 530. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 531. Transmitter Passband Flatness vs. Baseband Offset Frequency

<!-- image -->

Figure 532. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -6 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 533. Transmitter Image Rejection vs. Baseband Offset Frequency, -12 dBFS CW Signal

Figure 534. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 535. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 536. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 537. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 538. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 539. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 540. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 541. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 542. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 543. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 544. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 545. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 546. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 547. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 548. Transmitter Error Vector Magnitude vs. Transmitter Attenuation, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 549. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 550. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 551. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs Input Signal (Match Not De-Embedded)

Figure 552. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 553. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 554. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 555. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 556. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 557. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal (Measured Using High Band Gain Table)

Figure 558. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 559. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 560. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 561. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 562. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 563. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 564. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 565. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 566. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

Figure 567. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 568. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 272 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 569. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 570. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 571. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 572. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 573. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = 275 MHz Offset

<!-- image -->

Figure 574. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 575. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

Figure 576. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 577. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 578. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 579. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 580. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 581. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

Figure 582. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 583. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 584. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 585. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 586. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 587. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 588. Receiver Phase vs. Receiver Attenuation

<!-- image -->

Figure 589. Receiver Baseband Flatness vs. Baseband Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 590. Receiver Error Vector Magnitude vs. Receiver Input Power, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 591. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

Figure 592. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 593. Observation Receiver Baseband Flatness vs. Baseband Offset

Figure 594. Observation Receiver HD2 vs. Observation Receiver Attenuation, -10 dBFS Input Signal

<!-- image -->

Figure 595. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 596. Observation Receiver HD3 vs. Observation Receiver Attenuation, -10 dBFS Input Signal

<!-- image -->

Figure 597. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 598. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

Figure 599. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 6302 MHz, F2 = 6312 MHz

Figure 600. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 6302 MHz, F2 = 6312 MHz

<!-- image -->

Figure 601. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 6302 MHz, F2 = 6312 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 602. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 6302 MHz, F2 = 6312 MHz

<!-- image -->

Figure 603. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 6302 MHz

<!-- image -->

Figure 604. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 6302 MHz

<!-- image -->

Figure 605. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 606. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 607. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## 7100 MHZ BAND

The temperature settings refer to the die temperature. All LO frequencies set to 7100 MHz, unless otherwise noted.

<!-- image -->

Figure 608. Transmitter Noise vs. Transmitter Attenuation Setting, 150 MHz Offset

<!-- image -->

Figure 609. Transmitter Output Power Spectrum vs. Frequency, Tx0, 5 MHz LTE, 10 MHz Offset, -6 dBFS RMS, 1 MHz Resolution Bandwidth, T J = 25°C

<!-- image -->

Figure 610. Transmitter Image Rejection vs. Baseband Offset Frequency, -12 dBFS CW Signal

<!-- image -->

Figure 611. Adjacent Channel Power vs. Transmitter Attenuation, 290 MHz Offset, 20 MHz LTE, PAR = 12 dB

Figure 612. Adjacent Channel Power vs. Transmitter Attenuation, -10 MHz Offset, 20 MHz LTE, PAR = 12 dB

<!-- image -->

Figure 613. Transmitter Opposite Side Second Harmonic Distortion (HD2) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 614. Transmitter Same Side HD2 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 615. Transmitter Opposite Side Third Harmonic Distortion (HD3) vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 616. Transmitter Same Side HD3 vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

<!-- image -->

Figure 617. Transmitter Attenuation Step Error vs. Transmitter Attenuation Setting, 30 MHz Offset, -12 dBFS CW Signal

Figure 618. Transmitter IM3 Difference, 2F1 - F2 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

Figure 619. Transmitter IM3 Difference, 2F2 - F1 vs. Transmitter Attenuation Setting, -15 dBFS Signal Level per Tone, F1 = 160 MHz Offset, F2 = 165 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 620. Transmitter IM3 Sum, 2F1 + F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 621. Transmitter IM3 Sum, 2F2 + F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 622. Transmitter IM3 Difference, 2F1 - F2 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

<!-- image -->

Figure 623. Transmitter IM3 Difference, 2F2 - F1 vs. Baseband Tone Swept Across Passband, -15 dBFS Signal Level per Tone, F2 = F1 + 5 MHz

Figure 624. Transmitter Phase vs. Transmitter Attenuation

<!-- image -->

Figure 625. Transmitter Error Vector Magnitude vs. Transmitter Attenuation, 20 MHz LTE, PAR = 12 dB

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 626. Receiver Carrier Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 627. Receiver Image Rejection vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 628. Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -1 dBFs input Signal (Match Not De-Embedded)

<!-- image -->

Figure 629. Receiver Opposite Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

Figure 630. Receiver Opposite Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 631. Receiver Same Side HD2 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 632. Receiver Same Side HD3 vs. Fundamental Baseband Offset Frequency, -1 dBFS Input Signal

<!-- image -->

Figure 633. Receiver Integrated Noise Figure vs. Baseband Offset Frequency, 200 kHz Integration Steps, 983.04 MSPS Sample Rate

<!-- image -->

Figure 634. Receiver Gain Step Error vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal (Measured Using High Band Gain Table)

<!-- image -->

Figure 635. Receiver Normalized Gain vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

Figure 636. Receiver DC Offset vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

Figure 637. Receiver Image vs. Receiver Attenuation, 30 MHz Offset, -1 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 638. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 639. Receiver IM2 Difference, F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 640. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 641. Receiver IM2 Difference, F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 642. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 643. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 127 MHz Offset, F2 = 125 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 644. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 645. Receiver IM2 Sum, F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 272 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 646. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 647. Receiver IM2 Sum, F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 648. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 649. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 650. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 277 MHz Offset, F2 = 275 MHz Offset

<!-- image -->

Figure 651. Receiver IM3 Difference, 2F1 - F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 652. Receiver IM3 Difference, 2F2 - F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 653. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

Figure 654. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 655. Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 656. Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 657. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 658. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 37 MHz Offset, F2 = F1 - 2 MHz Offset

<!-- image -->

Figure 659. Receiver IM3 Sum Image, 2F1 + F2 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

Figure 660. Receiver IM3 Sum Image, 2F2 + F1 vs. Receiver Attenuation, -7 dBFS Signal Level per Tone, F1 = 32 MHz Offset, F2 = 2 MHz Offset

<!-- image -->

Figure 661. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 662. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = F1 - 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 663. Receiver IM3 Sum Image, 2F1 + F2 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 664. Receiver IM3 Sum Image, 2F2 + F1 vs. F1 Frequency Offset, F2 = 2 MHz, Baseband Tone Swept Across Passband, -7 dBFS Signal Level per Tone

<!-- image -->

Figure 665. Receiver Phase vs. Receiver Attenuation

Figure 666. Receiver Error Vector Magnitude vs. Receiver Input Power, 20 MHz LTE, TDD Mode, AGC Enabled

<!-- image -->

Figure 667. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 60 kHz, Phase Margin = 55º

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 668. LO Phase Noise vs. Frequency Offset, Loop Bandwidth = 500 kHz, Phase Margin = 55º

<!-- image -->

Figure 669. Observation Receiver HD2 vs. Observation Receiver Attenuation, -10 dBFS Input Signal

<!-- image -->

Figure 670. Observation Receiver HD2 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 671. Observation Receiver HD3 vs. Observation Receiver Attenuation, -10 dBFS Input Signal

Figure 672. Observation Receiver HD3 vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal

<!-- image -->

Figure 673. Observation Receiver Signal Power at SMA Connector vs. Fundamental Baseband Offset Frequency, -10 dBFS Input Signal (Match Not De-Embedded)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 674. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 7102 MHz, F2 = 7112 MHz

<!-- image -->

Figure 675. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 7102 MHz, F2 = 7112 MHz

<!-- image -->

Figure 676. Observation Receiver IM3 Difference, 2F1 - F2 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 7102 MHz, F2 = 7112 MHz

<!-- image -->

Figure 677. Observation Receiver IM3 Difference, 2F2 - F1 vs. Observation Receiver Attenuation, -13 dBFS Signal Level per Tone, F1 = 7102 MHz, F2 = 7112 MHz

Figure 678. Observation Receiver IM3 Difference, 2F1 - F2 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 7102 MHz

<!-- image -->

Figure 679. Observation Receiver IM3 Difference, 2F2 - F1 vs. F1 Frequency Offset, Baseband Tone Swept Across Passband, -13 dBFS Signal Level per Tone, F2 = 7102 MHz

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 680. Observation Receiver HD2 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

Figure 681. Observation Receiver HD3 vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

Figure 682. Observation Receiver Signal Power at SMA Connector vs. Observation Receiver Attenuation, 80 MHz Offset, -10 dBFS Input Signal

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## ACROSS LO FREQUENCY

## Ultralow Band Match

The ultralow band match board frequency range is 100 MHz to 1000 MHz. The temperature settings refer to the die temperature.

<!-- image -->

Figure 683. Transmitter Output Power vs. LO Frequency, 10 MHz Offset, 0 dB RF Attenuation, -12 dBFS Signal Level

<!-- image -->

Figure 684. Transmitter LO Leakage vs. LO Frequency

Figure 685. Receiver Integrated Noise Figure vs. LO Frequency, 200 MHz Integration Bandwidth

<!-- image -->

Figure 686. Receiver LO Leakage vs. Receiver LO Frequency, Maximum Receiver Gain

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 687. Receiver Carrier Rejection vs. LO Frequency

<!-- image -->

Figure 688. Receiver Signal Power at SMA Connector vs. LO Frequency

<!-- image -->

Figure 689. Observation Receiver (ORX) Integrated NSD vs. LO Frequency, 5898.24 MSPS Sample Rate

<!-- image -->

Figure 690. Transmitter to Transmitter Isolation vs. Transmitter LO Frequency

Figure 691. Transmitter to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 692. Transmitter to Observation Receiver Isolation vs. Observation Receiver LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 693. Receiver to Receiver Isolation vs. Receiver LO Frequency

Figure 694. Observation Receiver to Observation Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 695. Observation Receiver to Observation Receiver Isolation vs. Observation Receiver Center Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Low Band Match

The low band match board frequency range is 600 MHz to 2800 MHz. The temperature settings refer to the die temperature.

<!-- image -->

Figure 696. Transmitter Output Power vs. LO Frequency, 30 MHz Offset, 0 dB RF Attenuation, -12 dBFS Signal Level

<!-- image -->

Figure 697. Transmitter LO Leakage vs. LO Frequency

<!-- image -->

Figure 698. Receiver Integrated Noise Figure vs. LO Frequency, 400 MHz Integration Bandwidth

<!-- image -->

Figure 699. Receiver LO Leakage vs. Receiver LO Frequency, Maximum Receiver Gain

Figure 700. Receiver Carrier Rejection vs. LO Frequency

<!-- image -->

Figure 701. Receiver Signal Power at SMA Connector vs. LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 702. Observation Receiver (ORX) Integrated NSD vs. LO Frequency, 5898.24 MSPS Sample Rate

<!-- image -->

Figure 703. Transmitter to Transmitter Isolation vs. Transmitter LO Frequency

<!-- image -->

Figure 704. Transmitter to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 705. Transmitter to Observation Receiver Isolation vs. Observation Receiver LO Frequency

Figure 706. Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 707. Observation Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 708. Observation Receiver to Observation Receiver Isolation vs. Observation Receiver Center Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Midband Match

The midband match board frequency range is 1800 MHz to 4800 MHz. The temperature settings refer to the die temperature.

<!-- image -->

Figure 709. Transmitter Output Power vs. LO Frequency, 30 MHz Offset, 0 dB RF Attenuation, -6 dBFS Signal Level

<!-- image -->

Figure 710. Transmitter LO Leakage vs. LO Frequency

<!-- image -->

Figure 711. Receiver Integrated Noise Figure vs. LO Frequency, 600 MHz Integration Bandwidth

<!-- image -->

Figure 712. Receiver LO Leakage vs. Receiver LO Frequency, Maximum Receiver Gain

Figure 713. Receiver Carrier Rejection vs. LO Frequency

<!-- image -->

Figure 714. Receiver Signal Power at SMA Connector vs. LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 715. Observation Receiver (ORX) Integrated NSD vs. LO Frequency, 5898.24 MSPS Sample Rate

<!-- image -->

Figure 716. Transmitter to Transmitter Isolation vs. Transmitter LO Frequency

<!-- image -->

Figure 717. Transmitter to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 718. Transmitter to Observation Receiver Isolation vs. Observation Receiver LO Frequency

Figure 719. Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 720. Observation Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 721. Observation Receiver to Observation Receiver Isolation vs. Observation Receiver Center Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## High Band Match

The high band match board frequency range is 4500 MHz to 6000 MHz. The temperature settings refer to the die temperature.

<!-- image -->

Figure 722. Transmitter Output Power vs. LO Frequency, 10 MHz Offset, 0 dB RF Attenuation, -12 dBFS Signal Level

<!-- image -->

Figure 723. Transmitter LO Leakage vs. LO Frequency

<!-- image -->

Figure 724. Receiver Integrated Noise Figure vs. LO Frequency, 200 MHz Integration Bandwidth

<!-- image -->

Figure 725. Receiver LO Leakage vs. LO Frequency, Maximum Receiver Gain

Figure 726. Receiver Carrier Rejection vs. LO Frequency

<!-- image -->

Figure 727. Receiver Signal Power at SMA Connector vs. LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 728. Observation Receiver (ORX) Integrated NSD vs. LO Frequency, 7864.32 MSPS Sample Rate

<!-- image -->

Figure 729. Transmitter to Transmitter Isolation vs. Transmitter LO Frequency

<!-- image -->

Figure 730. Transmitter to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 731. Transmitter to Observation Receiver Isolation vs. Observation Receiver LO Frequency

Figure 732. Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 733. Observation Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 734. Observation Receiver to Observation Receiver Isolation vs. Observation Receiver Center Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## Ultrahigh Band Match

The ultrahigh band match board frequency range is 6000 MHz to 7100 MHz. The temperature settings refer to the die temperature.

<!-- image -->

Figure 735. Transmitter Output Power vs. LO Frequency, 10 MHz Offset, 0 dB RF Attenuation, -12 dBFS Signal Level

<!-- image -->

Figure 736. Transmitter LO Leakage vs. LO Frequency

<!-- image -->

Figure 737. Receiver Integrated Noise Figure vs. LO Frequency, 200 MHz Integration Bandwidth

<!-- image -->

Figure 738. Receiver LO Leakage vs. Receiver LO Frequency, Maximum Receiver Gain

Figure 739. Receiver Carrier Rejection vs. LO Frequency

<!-- image -->

Figure 740. Receiver Signal Power at SMA Connector vs. LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 741. Observation Receiver (ORX) Integrated NSD vs. LO Frequency, 7864.32 MSPS Sample Rate

<!-- image -->

Figure 742. Transmitter to Transmitter Isolation vs. Transmitter LO Frequency

<!-- image -->

Figure 743. Transmitter to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 744. Transmitter to Observation Receiver Isolation vs. Observation Receiver LO Frequency

Figure 745. Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

Figure 746. Observation Receiver to Receiver Isolation vs. Receiver LO Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 747. Observation Receiver to Observation Receiver Isolation vs. Observation Receiver Center Frequency

<!-- image -->

## THEORY OF OPERATION

The ADRV9032R is a highly integrated RF transceiver capable of configuration for a wide range of applications. The device integrates all the RF, mixed-signal, and digital blocks necessary to provide all transmitter, traffic receiver, and observation receiver functions in a single device. Programmability allows the device to be adapted for use in many applications.

Two observation receiver channels monitor the transmitter outputs and provide tracking correction of DC offset, quadrature error, and transmitter LO leakage to maintain a high-performance level under varying temperatures and input signal conditions. Firmware supplied with the device implements all initialization and calibration with no user interaction. Additionally, the device includes test modes allowing system designers to debug designs during prototyping and to optimize radio configurations.

The ADRV9032R contains eight high-speed serial interface (SERDES) links for the transmit chain and eight high-speed links shared by the receiver and observation receiver chains (JESD204B Subclass 1 compliant and supports JESD204C).

## TRANSMITTER

The ADRV9032R transmitter section consists of two identical and independently controlled channels that provide all the digital processing, mixed-signal, and RF blocks necessary to implement a direct conversion system while sharing a common frequency synthesizer. The digital data from the SERDES lanes pass through a digital processing block that includes a series of programmable half-band filters, interpolation stages, and FIR filters, including a programmable FIR filter with variable interpolation rates and up to 24 taps. The output of this digital chain is connected to the digital-to-analog converter (DAC). The DAC sample rate is adjustable for either 2949.12 MHz or 3932.16 MHz. The in-phase (I) and quadrature (Q) channels are identical in each transmitter signal chain.

After conversion to baseband analog signals, the I and Q signals are filtered to remove sampling artifacts and fed to the upconversion mixers. Each transmit chain provides a wide attenuation adjustment range with fine granularity to help designers optimize SNR.

## RECEIVER

The ADRV9032R provides two independent receiver channels. Each channel contains all the blocks necessary to receive RF signals and convert these signals to digital data usable by a baseband processor. Each channel contains a programmable attenuator stage, followed by matched I and Q mixers that downconvert received signals to baseband for digitization.

Two gain-control options are available, as follows:

- Users can implement their own gain-control algorithms using their baseband processor to manage manual gain-control mode.
- Users can use the on-chip AGC system.

Performance is optimized by mapping each gain-control setting to specific attenuation levels at each adjustable gain block in the receive signal path. Additionally, each channel contains independent receive signal power measurement capability, DC offset tracking, and all the circuitry necessary for self-calibration.

The receivers include ADCs and adjustable sample rates that produce data streams from the received signals. The signals can be conditioned further by a series of decimation filters and a programmable FIR filter with additional decimation settings. The sample rate of each digital filter block is adjustable by changing decimation factors to produce the desired output data rate. All receiver outputs are connected to the SERDES block, where the data is formatted and serialized for transmission to the baseband processor.

## OBSERVATION RECEIVER

The ADRV9032R provides two independent observation receiver inputs. Unlike the receiver channels, the observation receiver channels' path implements direct RF sampling. An RF ADC eliminates the need for a LO, which eliminates spurious often seen with LO coupling. Each channel also contains a programmable attenuator stage that provides 16 dB attenuation in analog domain with roughly 1 dB step size.

## REFERENCE CLOCK INPUT

The ADRV9032R requires a differential clock connected to the DEVCLK± pins. The frequency of the clock input must be between 61.44 MHz and 491.52 MHz and must have low phase noise because this signal generates the RF LO and internal sampling clocks.

## SYNTHESIZERS

The ADRV9032R contains four fractional-N PLLs to generate the RF LO for the signal paths and all internal clock sources. This group of PLLs includes two RF PLLs for transmit and receive LO generation, an SERDES PLL, and a clock PLL. Each PLL is independently controlled with no need for external components to set frequencies.

## RF Synthesizers

The two RF synthesizers use fractional-N PLLs to generate RF LOs for multiple receiver and transmitter channels. The fractional-N PLL incorporates a four-core internal voltage-controlled oscillator (VCO) and loop filter, capable of generating low phase noise signals with no external components required. An internal LO multiplexer (mux) enables each PLL to supply LOs to the desired receivers and transmitters (for example, LO1 to all transmitters, LO2 to all receivers), resulting in maximum flexibility when configuring the device for TDD operation. The LOs on multiple devices can be phase synchronized to support active antenna systems and beam forming applications.

## THEORY OF OPERATION

## SERDES Synthesizer

The SERDES synthesizer uses a single core VCO fractional -N PLL to generate the required clock for the serializer/deserializer physical layer (SERDES PHY) to achieve the desired lane rate.

## Clock Synthesizer

The ADRV9032R contains a single core VCO fractional-N PLL synthesizer that generates all baseband related clock signals and SERDES clocks. This fractional-N PLL is programmed based on the data rate and sample rate requirements of the system, which typically require the system to operate in integer mode.

## External LO Inputs

The ADRV9032R provides two external LO inputs, which allow an external synthesizer to be used with the device. These inputs must be at least 2× the desired LO frequency. See the external LO input section in Table 1 for more information.

## SPI

The ADRV9032R uses an SPI to communicate with the baseband processor. This interface can be configured as a 4-wire interface with dedicated receive and transmit ports, or the interface can be configured as a 3-wire interface with a bidirectional data communications port. This bus allows the baseband processor to set all device control parameters using a simple address data serial bus protocol.

Write commands follow a 24-bit format. The first bit sets the bus direction of the bus transfer. The next 15 bits set the address where data is written. The final eight bits are the data being transferred to the specific register address.

Read commands follow a similar format with the exception that the first 16 bits are transferred on the SPI\_DIO pin, and the final eight bits are read from the ADRV9032R, either on the SPI\_DO pin in 4-wire mode or on the SPI\_DIO pin in 3-wire mode.

## GPIO\_X PINS

The ADRV9032R provides 24 GPIOs referenced to VIF that can be configured for numerous functions. When configured as outputs, certain pins can provide real-time signal information to the baseband processor, allowing the baseband processor to determine receiver performance. A pointer register selects what information is output to these pins.

The signals used for manual gain mode, calibration flags, state machine status, and various receiver parameters are among the outputs that can be monitored on the GPIO pins. Additionally, certain GPIO pins can be configured as inputs and used for various functions, such as setting the receiver gain in real time.

## GPIO\_ANA\_x

The ADRV9032R contains 16 analog GPIOs ports that can be used to control other analog devices or receive control inputs referenced to the VDDA\_1P8 supply.

## APPLICATIONS INFORMATION

## POWER SUPPLY SEQUENCE

The ADRV9032R requires a specific power-up sequence to avoid undesired power-up currents. In the optimal power-up sequence, the VDIG\_0P8 supply is activated first. After the VDIG\_0P8 source is enabled, the VANA\_1P0 supplies must be enabled next, followed by the VANA\_1P8 supplies. Note that the VIF\_1P8 supply can be enabled at any time without affecting the other circuits in the device. In addition to this sequence, it is also recommended to toggle the RESET signal after power has stabilized before initializing the device.

The power-down sequence recommendation is similar to power-up. All supplies must be disabled in reverse order (or all together) before VDIG\_0P8 is disabled. If such a sequence is not possible, then all supplies must have their sources disabled simultaneously to ensure no back feeding to circuits that have been powered down.

## DATA INTERFACE

The digital data interface for the ADRV9032R implements the JESD204B and JESD204C JEDEC standards. The serial interface operates at speeds of up to 16,500 Mbps.

## OUTLINE DIMENSIONS

Figure 748. 506-Ball Grid Array Thermally Enhanced [BGA\_ED] (BP-506-1) Dimensions shown in millimeters

<!-- image -->

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                                   | Package Option   |
|--------------------|---------------------|-------------------------------------------------------|------------------|
| ADRV9032BBPZ-2T1   | -40°C to +110°C     | 506-Ball Ball Grid Array, Thermally Enhanced [BGA_ED] | BP-506-1         |
| ADRV9032BBPZRL-2T1 | -40°C to +110°C     | 506-Ball Ball Grid Array, Thermally Enhanced [BGA_ED] | BP-506-1         |

## EVALUATION BOARDS

## Table 12. Evaluation Boards

| Model 1          | Description                                     |
|------------------|-------------------------------------------------|
| ADRV903X-MB/PCBZ | Midband Evaluation Board, 1.8 GHz to 4.8 GHz    |
| ADRV903X-UB/PCBZ | Upper Band Evaluation Board, 6 GHz to 7.125 GHz |
| ADS10-V1EBZ      | ADS10 Motherboard                               |

<!-- image -->