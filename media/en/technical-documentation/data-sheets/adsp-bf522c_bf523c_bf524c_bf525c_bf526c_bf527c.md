<!-- lastmod 2025-09-05 -->
<!-- image -->

## Blackfin Embedded

## Processor with Codec

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## PROCESSOR FEATURES

Up to 600 MHz high performance Blackfin processor RISC-like register and instruction model for ease of programming and compiler-friendly support Advanced debug, trace, and performance monitoring operations. See operating conditions in the published ADSP-BF52x processor data sheet.

one-time-programmable (OTP) memory 2 dual-channel memory DMA controllers

## EMBEDDED CODEC FEATURES

Stereo, 24-bit ADCs and DACs

DAC SNR: 100 dB (A-weighted), THD: -80 dB at 48 kHz, 3.3 V ADC SNR: 90 dB (A-weighted), THD: -80 dB at 48 kHz, 3.3 V Highly efficient headphone amplifier

Stereo line input and monaural microphone input Low power

7 mW stereo playback (1.8 V supply) 14 mW record and playback (1.8 V supply)

Low supply voltages

Analog: 1.8 V to 3.6 V

Digital core: 1.8 V min

Digital I/O: 1.8 V to 3.6 V

256 × fS /384 × fS oversampling rate in normal mode; 250 × fS/272 × fS oversampling rate in USB mode Audio sampling rates: 8 kHz, 11.025 kHz, 12 kHz, 16 kHz,

22.05 kHz, 24 kHz, 32 kHz, 44.1 kHz, 48 kHz, 88.2 kHz, and 96 kHz

## PERIPHERALS

See the published ADSP-BF52x processor data sheet for additional peripherals

<!-- image -->

Blackfin and the Blackfin logo are registered trademarks of Analog Devices, Inc.

## Rev. A

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Accepts a wide range of supply voltages for internal and I/O Programmable on-chip voltage regulator (ADSP-BF523/ ADSP-BF525/ADSP-BF527processors only) Embedded low power audio codec 289-ball (12 mm x 12 mm) CSP\_BGA package 132K bytes of on-chip memory External memory controller with glueless support for SDRAM and asynchronous 8-bit and 16-bit memories Flexible booting options from external flash, SPI and TWI memory or from host devices including SPI, TWI, and UART Code security with Lockbox Secure Technology Memory management unit providing memory protection

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## TABLE OF CONTENTS

| Processor Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                     | . 1   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Embedded Codec Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                    | . 1   |
| Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                        | . 1   |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                  | . 2   |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                 | . 2   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                        | . 3   |
| Codec Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                            | . 3   |
| ADCand DAC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                         | . 4   |
| ADCHigh-Pass and DACDe-Emphasis Filters . . . . . . .                                                                                              | . 4   |
| Analog Audio Interfaces . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                    | . 4   |
| Stereo Line and Monaural Microphone Inputs . . . . .                                                                                               | . 4   |
| Bypass and Sidetone Paths to Output . . . . . . . . . . . . . . . . .                                                                              | . 5   |
| Line and Headphone Outputs . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | . 5   |
| Digital Audio Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                | . 6   |
| Recording Mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                               | . 8   |
| Playback Mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                            | . 8   |
| Digital Audio Data Sampling Rate . . . . . . . . . . . . . . . . . . . . .                                                                         | . 8   |
| Software Control Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | 11    |
| Codec Pin Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | 12    |
| Register Details . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                               | 15    |
| Bit Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                     | 16    |
| REVISION HISTORY                                                                                                                                   |       |
| 3/10-Rev. 0 to Rev.A                                                                                                                               |       |
| Revised the following figures. Recommended Application Circuit Using SPI Control .                                                                 | 13    |
| Recommended Application Circuit Using TWI Control                                                                                                  | 14    |
| Added Sampling Rate = 48 kHz to all figures in Converter Filter Response . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 30    |
| Revised Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                               | 36    |

Specifications  ........................................................  21

Operating Conditions ...........................................  21

Codec Electrical Characteristics  ..............................  21

Absolute Maximum Ratings ...................................  23

ESD Sensitivity  ...................................................  23

Package Information ............................................  23

Power Consumption  ............................................  24

Timing Specifications ...........................................  25

TWI Timing  ...................................................  25

SPI Timing  .....................................................  26

Digital Audio Interface Slave Mode Timing  ............  27

Digital Audio Interface Master Mode Timing ..........  28

System Clock Timing  ........................................  29

Digital Filter Characteristics ................................  30

Converter Filter Response  .....................................  30

Digital De-Emphasis  ............................................  31

289-Ball CSP\_BGA Ball Assignment  ........................  32

Outline Dimensions ................................................  35

Ordering Guide  .....................................................  36

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## GENERAL DESCRIPTION

This document describes the differences between the ADSP-BF52xC and the ADSP-BF52x standard Blackfin ® product. Please refer to the published ADSP-BF52x data sheet for general description and specifications. This document only describes the differences from that data sheet.

The ADSP-BF52xC processors add a low power, high quality stereo audio codec for portable digital audio applications with one set of stereo programmable gain amplifier (PGA) line inputs and one monaural microphone input. It features two 24bit analog-to-digital converter (ADC) channels and two 24-bit digital-to-analog (DAC) converter channels.

The codec can operate as a master or a slave. It supports various master clock frequencies, including 12 MHz or 24 MHz for USB devices; standard 256 × fS or 384 × f S based rates, such as 12.288 MHz and 24.576 MHz; and many common audio sampling rates, such as 96 kHz, 88.2 kHz, 48 kHz, 44.1 kHz, 32 kHz, 24 kHz, 22.05 kHz, 16 kHz, 12 kHz, 11.025 kHz, and 8 kHz.

The codec can operate at power supplies as low as 1.8 V for the analog circuitry and as low as 1.8 V for the digital circuitry. The maximum voltage supply is 3.6 V for all supplies.

The codec software-programmable stereo output options provide the programmer with many application possibilities because the device can be used as a headphone driver or as a speaker driver. Its volume control functions provide a large range of gain control of the audio signal.

## CODEC DESCRIPTION

The ADSP-BF52xC codec contains a central clock source, called the codec master clock (CODEC\_MCLK) that produces a reference clock for all internal audio data processing and synchronization. When using an external clock source to drive the CODEC\_MCLK pin, care should be taken to select a clock source with less than 50 ps of jitter. Without careful generation of the CODEC\_MCLK signal, the digital audio quality will suffer.

To enable the codec to generate the central reference clock in a system, connect a crystal oscillator between the XTI/ CODEC\_MCLK input pin and the XTO output pin.

Figure 1. Codec Block Diagram

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

To allow an external device to generate the central reference clock, apply the external clock signal directly through the XTI/ CODEC\_MCLK input pin. In this configuration, the oscillator circuit of the codec can be powered down by using the OSCPD bit (Register R6, Bit D5) to reduce power consumption.

To accommodate applications with very high frequency master clocks, the internal core reference clock of the codec can be set to either CODEC\_MCLK or CODEC\_MCLK divided by 2. This is enabled by adjusting the setting of the CLKDIV2 bit (Register R8, Bit D6). The CODEC\_CLKOUT pin can also drive external clock sources with either the codec clock signal or codec clock divided by 2 by enabling the CLKODIV2 bit (Register R8, Bit D7).

## ADC AND DAC

The codec contains a pair of oversampling Σ -∆ ADCs. The maximum ADC full-scale input level is 1.0 Vrms when AVDD=3.3 V. If the input signal to the ADC exceeds this level, data overloading occurs and causes audible distortion.

The ADC can accept analog audio input from either the stereo line inputs or the monaural microphone input. Note that the ADC can only accept input from a single source, so the programmer must choose either the line inputs or the microphone input using the INSEL bit (Register R4, Bit D2). The digital data from the ADC output, once converted, is processed using the ADC filters.

Complementary to the Σ -∆ ADC channels, the codec contains a pair of oversampling DACs that convert the digital audio data from the internal DAC filters into an analog audio signal. The DAC output can also be muted by setting the DACMU bit (Register R5, Bit D3) in the control register.

## ADC HIGH-PASS AND DAC DE-EMPHASIS FILTERS

The ADC and DAC employ separate digital filters that perform 24-bit signal processing. The digital filters are used for both record and playback modes and are optimized for each individual sampling rate used.

For recording mode operations, the unprocessed data from the ADC enters the ADC filters and is converted to the appropriate sampling frequency, then is output to the digital audio interface.

For playback mode operations, the DAC filters convert the digital audio interface data to oversampled data using a sampling rate selected by the programmer. The oversampled data is processed by the DAC and sent to the analog output mixer by enabling the DACSEL (Register R4, Bit D4).

Programmers have the option of setting up the device so that any dc offset in the input source signal is automatically detected and removed. To accomplish this, enable the digital high-pass filter (see Table 22 on Page 30 for characteristics) contained in the ADC digital filters by using the ADCHPD bit (Register R5, Bit D0).

In addition, programmers can implement digital de-emphasis by using the DEEMPH bits (Register R5, Bit D1 and Bit D2).

## ANALOG AUDIO INTERFACES

The codec includes stereo single-ended line inputs and a monaural microphone input to the on-board ADC. Either the line inputs or the microphone input, but not both simultaneously, can be connected to the ADC by setting the INSEL bit (Register R4, Bit D2).

The codec also includes line and headphone outputs from the on-board DAC. The line or microphone inputs can be routed and mixed directly to the output terminals.

## Stereo Line and Monaural Microphone Inputs

The single-ended stereo line inputs (RLINEIN and LLINEIN) are internally biased to VMID by way of a voltage divider between AVDD and AGND (see Figure 2). The line input signal can be connected to the internal ADC and, if desired, routed directly to the outputs via the bypass path by using the BYPASS bit (Register R4, Bit D3).

Figure 2. Line Input to ADC

<!-- image -->

The line input volume can be adjusted from -34.5 dB to +33 dB in steps of +1.5 dB by setting the LINVOL (Register R0, Bit D0 to Bit D5) and RINVOL (Register R1, Bit D0 to Bit D5) bits. By default the volume is independently adjustable for both right and left line inputs. However, if the LRINBOTH or RLINBOTH bit is programmed, both LINVOL and RINVOL are loaded with the same value. The programmer can also set the LINMUTE (Register R0, Bit D7) and RINMUTE (Register R1, Bit D7) bits to mute the line input signal to the ADC.

The high impedance, low capacitance monaural microphone input pin (MICIN, shown in Figure 3 ) has two gain stages and a microphone bias level (MICBIAS) that is internally biased to the VMID voltage level by way of a voltage divider between AVDD and AGND. The microphone input signal can be connected to the internal ADC and, if desired, routed directly to the outputs via the sidetone path by using the SIDETONE bit (Register R4, Bit D5).

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 3. Microphone Input to ADC

<!-- image -->

The first gain stage is composed of a low noise operational amplifier set to an inverting configuration with integrated 50 k Ω feedback and 10 k Ω input resistors. The default microphone input signal gain is 14 dB. An external resistor (R EXT ) can be connected in series with the MICIN pin to reduce the firststage gain of the microphone input signal to as low as 0 dB by using the following equation:

Microphone Input Gain = 50 k Ω /(10 k Ω + REXT)

The second-stage gain of the microphone signal path is derived from the internal microphone boost circuitry. The available settings are 0 dB, 20 dB, and 40 dB and are controlled by the MICBOOST (Register R4, Bit D0) and MICBOOST2 (Register R4, Bit D8) bits. To achieve 20 dB of secondary gain boost, the programmer can select either MICBOOST or MICBOOST2. To achieve 40 dB of secondary microphone signal gain, the programmer must select both MICBOOST and MICBOOST2.

The MUTEMIC bit (Register R4, Bit D1) mutes the microphone input signal to the ADC.

When using either the line or microphone inputs, the maximum full-scale input to the ADC is 1.0 V rms when AVDD = 3.3 V. Do not apply an input voltage larger than full-scale to avoid overloading the ADC, which causes distortion of sound and deterioration of audio quality. For best sound quality in both microphone and line inputs, gain should be carefully configured so that the ADC receives a signal equal to its full-scale. This maximizes the signal-to-noise ratio for best total audio quality.

## Bypass and Sidetone Paths to Output

The line and microphone inputs can be routed and mixed directly to the output terminals by programming the SIDETONE (Register R4, Bit D5) and BYPASS (Register R4, Bit D3) registers. In both modes, the analog input signal is routed directly to the output terminals and is not digitally converted. The bypass signal at the output mixer is the same level as the output of the PGA associated with each line input.

The sidetone signal at the output mixer can be attenuated from -6 dB to -15 dB in steps of -3 dB by configuring the SIDEATT (Register R4, Bit D6 and Bit D7) control register bits. The selected level of attenuation occurs after the initial microphone signal amplification from the microphone first and second stage gains.

## Line and Headphone Outputs

The DAC outputs, the microphone (the sidetone path), and the line inputs (the bypass path) are summed at an output mixer (see Figure 4). This output signal is then applied to both the stereo line outputs and stereo headphone outputs.

Figure 4. Output Signal Chain

<!-- image -->

The codec has a set of efficient headphone amplifier outputs, LHPOUT and RHPOUT, that are able to drive 16 Ω or 32 Ω headphones (shown in Figure 5).

Figure 5. Headphone Output

<!-- image -->

Like the line inputs, the LHPOUT and RHPOUT volumes, by default, are independently adjusted by setting the LHPVOL (Register R2, Bit D0 to Bit D6) and RHPVOL (Register R3, Bit D0 to Bit D6) bits of the headphone output control registers. The headphone outputs can be muted by writing codes less than 0110000 to the LHPVOL and RHPVOL bits.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

The programmer can simultaneously load the volume control of both channels by writing to the LRHPBOTH (Register R2, Bit D8) and RLHPBOTH (Register R3, Bit D8) bits of the left- or right-channel DAC volume registers.

The maximum output level of the headphone outputs is 1.0 V rms when AVDD and HPVDD = 3.3 V. To suppress audible pops and clicks, the headphone and line outputs are held at the VMID dc voltage level when the device is set to standby mode or when the headphone outputs are muted.

The stereo line outputs of the codec, the LOUT and ROUT pins, can drive a load impedance of 10 k Ω and 50 pF. The line output signal levels are not adjustable at the output mixer, which has a fixed gain of 0 dB. The maximum output level of the line outputs is 1.0 V rms when AVDD = 3.3 V.

Figure 7. Right-Justified Audio Input Mode

<!-- image -->

## DIGITAL AUDIO INTERFACE

The digital audio input can support the following digital audio communication protocols: right-justified mode, left-justified mode, I 2 S mode, and frame sync mode. See Figure 6 on Page 6 through Figure 10 on Page 7.

The mode selection is performed by writing to the FORMAT bits of the digital audio interface register (Register R7, Bit D1 and Bit D0). All modes are MSB first and operate with data of 16 to 32 bits.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 10. Frame Sync/PCM Mode Audio Input (Submode 2) [Bit LRP = 1]

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Recording Mode

The digital audio interface sends the ADC digital filter data to the ADCDAT output pin for recording. The ADCDAT data stream multiplexes the left- and right-channel audio data in the time domain. The ADCLRC clock signal separates left- and right-channel digital audio frames on the ADCDAT lines.

The CODEC\_BCLK signal clocks the digital audio data within the frames. The CODEC\_BCLK signal is either an input or an output depending on whether the codec is in master or slave mode. During a recording operation, ADCDAT and ADCLRC must be synchronous to the CODEC\_BCLK signal to avoid data corruption.

## Playback Mode

The digital audio interface receives data on the DACDAT input pin for playback. The digital audio data stream on the DACDAT pin is time-domain-multiplexed left and right channel audio data. The DACLRC clock signal separates left and right channel digital audio frames on the DACDAT lines.

The CODEC\_BCLK signal clocks the digital audio data within the frames. The CODEC\_BCLK signal is either an input or an output depending on whether the codec is in master or slave mode. During a playback operation, DACDAT and DACLRC must be synchronous to the CODEC\_BCLK signal to avoid data corruption.

## Digital Audio Data Sampling Rate

To accommodate a wide variety of commonly used DAC and ADC sampling rates, the codec allows for two modes of operation, normal and USB, selected by the USB bit (Register R8, Bit D0).

The sampling rate is generated as a fixed divider from the CODEC\_MCLK signal. Because all audio processing references the CODEC\_MCLK signal, corruption of this signal will corrupt the quality of the audio at the codec output. The ADCLRC/ ADCDAT/CODEC\_BCLK or DACLRC/DACDAT/ CODEC\_BCLK signals must be synchronized with CODEC\_MCLK in the digital audio interface circuit.

CODEC\_MCLK must be faster or equal to the CODEC\_BCLK frequency to guarantee that no data is lost during data synchronization. The CODEC\_BCLK frequency should be greater than the sampling rate × word length × 2. Ensuring that the CODEC\_BCLK frequency is greater than this, guarantees that all valid data bits are captured by the digital audio interface circuitry. For example, if a 32 kHz digital audio sampling rate with a 32-bit word length is desired, CODEC\_BCLK = 2.048 MHz.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Normal Mode

In normal mode, the codec supports digital audio sampling rates from 8 kHz to 96 kHz. Normal mode supports 256 × fS and 384 × fS based clocks. To select the desired sampling rate, the programmer must set the appropriate sampling rate register in

Table 1. Sampling Rate Lookup Table, Normal Mode (USB Disabled)

| CODEC_MCLK (CLKDIV2 = 0)   | CODEC_MCLK (CLKDIV2 = 1)   | ADCSampling Rate (ADCLRC)    | DACSampling Rate (DACLRC)    |   USB |   SR [3:0] |   BOSR | CODEC_BCLK (MS = 1) 1   |
|----------------------------|----------------------------|------------------------------|------------------------------|-------|------------|--------|-------------------------|
| 12.288MHz                  | 24.576MHz                  | 8 kHz (CODEC_MCLK/1536)      | 8 kHz (CODEC_MCLK/1536)      |     0 |       0011 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 8 kHz (CODEC_MCLK/1536)      | 48 kHz (CODEC_MCLK/256)      |     0 |       0010 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 12 kHz (CODEC_MCLK/1024)     | 12 kHz (CODEC_MCLK/1024)     |     0 |       0100 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 16 kHz (CODEC_MCLK/768)      | 16 kHz (CODEC_MCLK/768)      |     0 |       0101 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 24 kHz (CODEC_MCLK/512)      | 24 kHz (CODEC_MCLK/512)      |     0 |       1110 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 32 kHz (CODEC_MCLK/384)      | 32 kHz (CODEC_MCLK/384)      |     0 |       0110 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 48 kHz (CODEC_MCLK/256)      | 8 kHz (CODEC_MCLK/1536)      |     0 |       0001 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 48 kHz (CODEC_MCLK/256)      | 48 kHz (CODEC_MCLK/256)      |     0 |       0000 |      0 | CODEC_MCLK/4            |
| 12.288MHz                  |                            | 96 kHz (CODEC_MCLK/128)      | 96 kHz (CODEC_MCLK/128)      |     0 |       0111 |      0 | CODEC_MCLK/2            |
| 11.2896 MHz                | 22.5792 MHz                | 8.0182 kHz (CODEC_MCLK/1408) | 8.0182 kHz (CODEC_MCLK/1408) |     0 |       1011 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 8.0182 kHz (CODEC_MCLK/1408) | 44.1 kHz (CODEC_MCLK/256)    |     0 |       1010 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 11.025 kHz (CODEC_MCLK/1024) | 11.025 kHz (CODEC_MCLK/1024) |     0 |       1100 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 22.05 kHz (CODEC_MCLK/512)   | 22.05 kHz (CODEC_MCLK/512)   |     0 |       1101 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 44.1 kHz (CODEC_MCLK/256)    | 8.0182 kHz (CODEC_MCLK/1408) |     0 |       1001 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 44.1 kHz (CODEC_MCLK/256)    | 44.1 kHz (CODEC_MCLK/256)    |     0 |       1000 |      0 | CODEC_MCLK/4            |
| 11.2896 MHz                |                            | 88.2 kHz (CODEC_MCLK/128)    | 88.2 kHz (CODEC_MCLK/128)    |     0 |       1111 |      0 | CODEC_MCLK/2            |
| 18.432MHz                  | 36.864MHz                  | 8 kHz (CODEC_MCLK/2304)      | 8 kHz (CODEC_MCLK/2304)      |     0 |       0011 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 8 kHz (CODEC_MCLK/2304)      | 48 kHz (CODEC_MCLK/384)      |     0 |       0010 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 12 kHz (CODEC_MCLK/1536)     | 12 kHz (CODEC_MCLK/1536)     |     0 |       0100 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 16 kHz (CODEC_MCLK/1152)     | 16 kHz (CODEC_MCLK/1152)     |     0 |       0101 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 24 kHz (CODEC_MCLK/768)      | 24 kHz (CODEC_MCLK/768)      |     0 |       1110 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 32 kHz (CODEC_MCLK/576)      | 32 kHz (CODEC_MCLK/576)      |     0 |       0110 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 48 kHz (CODEC_MCLK/384)      | 48 kHz (CODEC_MCLK/384)      |     0 |       0000 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 48 kHz (CODEC_MCLK/384)      | 8 kHz (CODEC_MCLK/2304)      |     0 |       0001 |      1 | CODEC_MCLK/6            |
| 18.432MHz                  |                            | 96 kHz (CODEC_MCLK/192)      | 96 kHz (CODEC_MCLK/192)      |     0 |       0111 |      1 | CODEC_MCLK/3            |
| 16.9344 MHz                | 33.8688 MHz                | 8.0182 kHz (CODEC_MCLK/2112) | 8.0182 kHz (CODEC_MCLK/2112) |     0 |       1011 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 8.0182 kHz (CODEC_MCLK/2112) | 44.1 kHz (CODEC_MCLK/384)    |     0 |       1010 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 11.025 kHz (CODEC_MCLK/1536) | 11.025 kHz (CODEC_MCLK/1536) |     0 |       1100 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 22.05 kHz (CODEC_MCLK/768)   | 22.05 kHz (CODEC_MCLK/768)   |     0 |       1101 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 44.1 kHz (CODEC_MCLK/384)    | 8.0182 kHz (CODEC_MCLK/2112) |     0 |       1001 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 44.1 kHz (CODEC_MCLK/384)    | 44.1 kHz (CODEC_MCLK/384)    |     0 |       1000 |      1 | CODEC_MCLK/6            |
| 16.9344 MHz                |                            | 88.2 kHz (CODEC_MCLK/192)    | 88.2 kHz (CODEC_MCLK/192)    |     0 |       1111 |      1 | CODEC_MCLK/3            |

the SR control bits (Register R8, Bit D2 to Bit D5) and match this selection to the core clock frequency that is pulsed on the CODEC\_MCLK pin. See Table 1 for sampling rates in normal mode.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## USB Mode

In USB mode, the codec supports digital audio sampling rates from 8 kHz to 96 kHz. USB mode is enabled on the codec to support the common universal serial bus (USB) clock rate of

Table 2. Sampling Rate Lookup Table, USB Mode (USB Enabled)

| CODEC_MCLK (CLKDIV2 = 0)   | CODEC_MCLK (CLKDIV2 = 1)   | ADCSampling Rate (ADCLRC)     | DACSampling Rate (DACLRC)     |   USB |   SR [3:0] |   BOSR | CODEC_BCLK (MS = 1) 1   |
|----------------------------|----------------------------|-------------------------------|-------------------------------|-------|------------|--------|-------------------------|
| 12.000MHz                  | 24.000MHz                  | 8 kHz (CODEC_MCLK/1500)       | 8 kHz (CODEC_MCLK/1500)       |     1 |       0011 |      0 | CODEC_MCLK              |
|                            |                            | 8 kHz (CODEC_MCLK/1500)       | 48 kHz (CODEC_MCLK/250)       |     1 |       0010 |      0 | CODEC_MCLK              |
|                            |                            | 8.0214 kHz (CODEC_MCLK/1496)  | 8.0214 kHz (CODEC_MCLK/1496)  |     1 |       1011 |      1 | CODEC_MCLK              |
|                            |                            | 8.0214 kHz (CODEC_MCLK/1496)  | 44.118 kHz (CODEC_MCLK/272)   |     1 |       1010 |      1 | CODEC_MCLK              |
|                            |                            | 11.0259 kHz (CODEC_MCLK/1088) | 11.0259 kHz (CODEC_MCLK/1088) |     1 |       1100 |      1 | CODEC_MCLK              |
|                            |                            | 12 kHz (CODEC_MCLK/1000)      | 12 kHz (CODEC_MCLK/1000)      |     1 |       1000 |      0 | CODEC_MCLK              |
|                            |                            | 16 kHz (CODEC_MCLK/750)       | 16 kHz (CODEC_MCLK/750)       |     1 |       1010 |      0 | CODEC_MCLK              |
|                            |                            | 22.0588 kHz (CODEC_MCLK/544)  | 22.0588 kHz (CODEC_MCLK/544)  |     1 |       1101 |      1 | CODEC_MCLK              |
|                            |                            | 24 kHz (CODEC_MCLK/500)       | 24 kHz (CODEC_MCLK/500)       |     1 |       1110 |      0 | CODEC_MCLK              |
|                            |                            | 32 kHz (CODEC_MCLK/375)       | 32 kHz (CODEC_MCLK/375)       |     1 |       0110 |      0 | CODEC_MCLK              |
|                            |                            | 44.118 kHz (CODEC_MCLK/272)   | 8.0214 kHz (CODEC_MCLK/1496)  |     1 |       1001 |      1 | CODEC_MCLK              |
|                            |                            | 44.118 kHz (CODEC_MCLK/272)   | 44.118 kHz (CODEC_MCLK/272)   |     1 |       1000 |      1 | CODEC_MCLK              |
|                            |                            | 48 kHz (CODEC_MCLK/250)       | 8 kHz (CODEC_MCLK/1500)       |     1 |       0001 |      0 | CODEC_MCLK              |
|                            |                            | 48 kHz (CODEC_MCLK/250)       | 48 kHz (CODEC_MCLK/250)       |     1 |       0000 |      0 | CODEC_MCLK              |
|                            |                            | 88.235 kHz (CODEC_MCLK/136)   | 88.235 kHz (CODEC_MCLK/136)   |     1 |       1111 |      1 | CODEC_MCLK              |
|                            |                            | 96 kHz (CODEC_MCLK/125)       | 96 kHz (CODEC_MCLK/125)       |     1 |       0111 |      0 | CODEC_MCLK              |

12 MHz, or to support 24 MHz if the CLKDIV2 control register bit is activated. The programmer must set the appropriate sampling rate in the SR control bits (Register R8, Bit D2 to Bit D5). See Table 2 for sampling rates in USB mode.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## SOFTWARE CONTROL INTERFACE

The software control interface provides access to the programmer-selectable control registers and can operate with a 2-wire (TWI) or 3-wire (SPI) interface, depending on the setting of the CMODE pin. If the CMODE pin is set to 0, the 2-wire interface is selected; if 1, the 3-wire interface is selected.

Within each control register is a control data-word consisting of 16 bits, MSB first. Bit B15 to Bit B9 are the register map address, and Bit B8 to Bit B0 are register data for the associated register map.

When 2-wire (TWI) mode is selected, CSDA generates the serial control data-word; CSCL clocks the serial data; and CSB determines the TWI device address. If the CSB pin is set to 0, the address selected is 0011010; if 1, the address is 0011011.

When 3-wire (SPI) mode is selected, CSDA generates the control data-word, CSCL clocks the control data-word into the codec, and CSB latches in the control data-word.

<!-- image -->

Figure 11. Codec SPI Serial Interface

Figure 12. Codec TWI Serial Interface

<!-- image -->

Figure 13. Codec TWI Write and Read Sequences

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## CODEC PIN DESCRIPTIONS

Table 3 shows the signals added to the ADSP-BF52xC processor for the embedded codec. Please refer to the published ADSP-BF52x data sheet for descriptions of other signals for the processor.

Table 3. Codec Pin Descriptions

| PinName        | Type   | Function                                                  | Pull-Up/Down         |
|----------------|--------|-----------------------------------------------------------|----------------------|
| Codec          |        |                                                           |                      |
| CODEC_CLKOUT   | O      | Codec Clock Output                                        | None                 |
| CODEC_BCLK     | I/O    | Codec Digital Audio Bit Clock                             | Internal Pull-down 1 |
| DACDAT         | I      | Codec Digital Audio Data (DAC) Input                      | None                 |
| DACLRC         | I/O    | Codec DAC Sample Rate Left/Right Clock                    | Internal Pull-down 1 |
| ADCDAT         | O      | CodecADC Digital Audio Data Output                        | None                 |
| ADCLRC         | I/O    | CodecADC Sample Rate Left/Right Clock                     | Internal Pull-down 1 |
| CMODE          | I      | Codec Control Interface Selection                         | Internal Pull-up 1   |
| CSB            | I      | Codec Chip Select Interface Address Selection             | Internal Pull-up 1   |
| CSDA           | I/O    | Codec Data Input                                          | None                 |
| CSCL           | I/O    | Codec Data Clock                                          | None                 |
| XTI/CODEC_MCLK | I      | Codec Crystal Input/ Clock Input                          | None                 |
| XTO            | O      | Codec Crystal Output                                      | None                 |
| LHPOUT         | O      | Codec Left Channel Headphone Output (Analog Output)       | None                 |
| RHPOUT         | O      | Codec Right Channel Headphone Output (Analog Output)      | None                 |
| LOUT           | O      | Codec Left Channel Line Output (Analog Output)            | None                 |
| ROUT           | O      | Codec Right Channel Line Output (Analog Output)           | None                 |
| VMID           | O      | Codec Mid-rail Reference Decoupling Point (Analog Output) | None                 |
| MICBIAS        | O      | Codec Electret Microphone Bias (Analog Output)            | None                 |
| MICIN          | I      | Codec Microphone Input; (Analog Input, AC Coupled)        | None                 |
| RLINEIN        | I      | Codec Right Channel Line Input (Analog Input, AC Coupled) | None                 |
| LLINEIN        | I      | Codec Left Channel Line Input (Analog Input, AC Coupled)  | None                 |
| AVDD           | P      | Codec Analog V DD                                         | N/A                  |
| AGND           | P      | Codec Analog Ground                                       | N/A                  |
| CVDD           | P      | Codec Digital V DD                                        | N/A                  |
| HPVDD          | P      | Codec Analog Headphone V DD                               | N/A                  |
| HPGND          | P      | Codec Headphone Ground                                    | N/A                  |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 14 on Page 13 and Figure 15 on Page 14 describe alternative external connections for SPI or TWI control of the ADSP-BF52xC codec. The figures are the same except for the shaded area in each.

Figure 14. Recommended Application Circuit Using SPI Control

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 15. Recommended Application Circuit Using TWI Control

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## REGISTER DETAILS

| Register                                            | Address             | B8                  | B7                  | B6                  | B5                  | B4                  | B3                  | B2                  | B1                  | B0                  |
|-----------------------------------------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|
| Register 0 Left-Channel ADC Input Volume on Page 16 | 0x00                | LRINBOTH            | LINMUTE             | 0                   | LINVOL              | LINVOL              | LINVOL              | LINVOL              | LINVOL              | LINVOL              |
| Register 0 Left-Channel ADC Input Volume on Page 16 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 |
| Register 1 Right-ChannelADC Input Volume on Page 17 | 0x01                | RLINBOTH            | RINMUTE             | 0                   | RINVOL              | RINVOL              | RINVOL              | RINVOL              | RINVOL              | RINVOL              |
| Register 1 Right-ChannelADC Input Volume on Page 17 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 | Default = 010010111 |
| Register 2 Left-Channel DAC Volume on Page 17       | 0x02                | LRHPBOTH            | LZCEN               | LHPVOL              | LHPVOL              | LHPVOL              | LHPVOL              | LHPVOL              | LHPVOL              | LHPVOL              |
| Register 2 Left-Channel DAC Volume on Page 17       | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 |
| Register 3 Right-ChannelDAC Volume on Page 18       | 0x03                | RLHPBOTH            | RZCEN               | RHPVOL              | RHPVOL              | RHPVOL              | RHPVOL              | RHPVOL              | RHPVOL              | RHPVOL              |
| Register 3 Right-ChannelDAC Volume on Page 18       | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 | Default = 001111001 |
| Register 4 Analog Audio Path on Page 18             | 0x04                | MICBOOST2           | SIDEATT[1:0]        | SIDEATT[1:0]        | SIDETONE            | DACSEL              | BYPASS              | INSEL               | MUTEMIC             | MICBOOST            |
| Register 4 Analog Audio Path on Page 18             | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 |
| Register 5 Digital Audio Path on Page 19            | 0x05                | 0                   | 0                   | 0                   | 0                   | HPOR                | DACMU               | DEEMPH[1:0]         | DEEMPH[1:0]         | ADC HPD             |
| Register 5 Digital Audio Path on Page 19            | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 | Default = 000001000 |
| Register6PowerManagement on Page 19                 | 0x06                | 0                   | POWEROFF            | CLKOUTPD            | OSCPD               | OUTPD               | DACPD               | ADCPD               | MICPD               | LINEINPD            |
| Register6PowerManagement on Page 19                 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 | Default = 010011111 |
| Register 7 Digital Audio I/F on Page 20             | 0x07                | 0                   | BCLKINV             | MS                  | LRSWAP              | LRP                 | WL[1:0]             | WL[1:0]             | FORMAT[1:0]         | FORMAT[1:0]         |
| Register 7 Digital Audio I/F on Page 20             | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 | Default = 000001010 |
| Register 8 Sampling Rate on Page 20                 | 0x08                | 0                   | CLKODIV2            | CLKDIV2             | SR[3:0]             | SR[3:0]             | SR[3:0]             | SR[3:0]             | BOSR                | USB                 |
| Register 8 Sampling Rate on Page 20                 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 |
| Register 9 Active on Page 20                        | 0x09                | 0                   | 0                   | 0                   | 0                   | 0                   | 0                   | 0                   | 0                   | ACTIVE              |
| Register 9 Active on Page 20                        | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 | Default = 000000000 |
| Register 10 Software Reseton Page 20                | 0x0F                | RESET               | RESET               | RESET               | RESET               | RESET               | RESET               | RESET               | RESET               | RESET               |

Default = 000000000

Figure 16. Register Mapping

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## BIT DESCRIPTIONS

Table 4 through Table 14 on Page 20 describe each bit in the control registers.

Table 4. Register 0 Left-Channel ADC Input Volume

| BitName   | Bits   | Description                                    | Settings                                                                                                                                                                                                                                                                                                                                                             |
|-----------|--------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LRINBOTH  | B8     | Left-to-right line input ADC data load control | 0 = disable simultaneous loading of left-channel ADC data to right-channel register (default) 1 = enable simultaneous loading of left-channel ADC data to right-channel register                                                                                                                                                                                     |
| LINMUTE   | B7     | Left-channel input mute                        | 0 = disable mute 1 = enable mute on data path to ADC (default)                                                                                                                                                                                                                                                                                                       |
| LINVOL    | B[5:0] | Left-channel PGA volume control                | 00 0000 = -34.5 dB …1.5 dB step up 01 0111 = 0 dB (default) …1.5 dB step up 01 1111 = 12 dB 10 0000 = 13.5 dB 10 0001 = 15 dB 10 0010 = 16.5 dB 10 0011 = 18 dB 10 0100 = 19.5 dB 10 0101 = 21 dB 10 0110 = 22.5 dB 10 0111 = 24 dB 10 1000 = 25.5 dB 10 1001 = 27 dB 10 1010 = 28.5 dB 10 1011 = 30 dB 10 1100 = 31.5 dB 10 1101 = 33 dB 11 1111 to 10 1101 = 33 dB |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Table 5. Register 1 Right-Channel ADC Input Volume

| BitName   | Bits   | Description                                    | Settings                                                                                                                                                                         |
|-----------|--------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RLINBOTH  | B8     | Right-to-left line input ADC data load control | 0 = disable simultaneous loading of right-channel ADC data to left-channel register (default) 1 = enable simultaneous loading of right-channel ADC data to left-channel register |

## Table 6. Register 2 Left-Channel DAC Volume

| BitName   | Bits   | Description                                 | Settings                                                                                                                                                                                                   |
|-----------|--------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LRHPBOTH  | B8     | Left-to-right headphone volume load control | 0 = disable simultaneous loading of left-channel headphone volume data to right-channel register (default) 1 = enable simultaneous loading of left-channel headphone volume data to right-channel register |
| LZCEN     | B7     | Left-channel zero cross detect enable       | 0 = disable (default) 1 = enable                                                                                                                                                                           |
| LHPVOL    | B[6:0] | Left-channel headphone volume control       | 000 0000 to 010 1111 = mute 011 0000 = -73 dB … 111 1001 = 0 dB (default) …1dBsteps up to 111 1111 = +6 dB                                                                                                 |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Table 7. Register 3 Right-Channel DAC Volume

| BitName      | Bits   | Description                                 | Settings                                                                                                                                                                                                   |
|--------------|--------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RLHPBOTH     | B8     | Right-to-left headphone volume load control | 0 = disable simultaneous loading of right-channel headphone volume data to left-channel register (default) 1 = enable simultaneous loading of right-channel headphone volume data to left-channel register |
| RZCEN        | B7     | Right-channel zero cross detect enable      | 0 = disable (default) 1 = enable                                                                                                                                                                           |
| RHPVOL [6:0] | B[6:0] | Right-channel headphone volume control      | 000 0000 to 010 1111 = mute 011 0000 = -73 dB … 111 1001 = 0 dB (default) …1dBsteps up to 111 1111 = +6 dB                                                                                                 |

## Table 8. Register 4 Analog Audio Path

| BitName      | Bits   | Description                                                                               | Settings                                                                         |
|--------------|--------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| MICBOOST2    | B8     | Additional microphone amplifier gain booster control                                      | 0 = 0 dB (default) 1 = 20 dB                                                     |
| SIDEATT[1:0] | B[7:6] | Microphone sidetone gain control                                                          | 00 = -6 dB (default) 01 = -9 dB 10 = -12 dB 11 = -15 dB                          |
| SIDETONE     | B5     | Sidetone enable. Allow attenuated microphone signal to be mixed at device output terminal | 0 = sidetone disable (default) 1 = sidetone enable                               |
| DACSEL       | B4     | DAC select-allow DAC output to be mixed at device output terminal                         | 0 = do not select DAC (default) 1 = select DAC                                   |
| BYPASS       | B3     | Bypass select-allow line input signal to be mixed at device output terminal               | 0 = bypass disable 1 = bypass enable (default)                                   |
| INSEL        | B2     | Line input or microphone input select to ADC                                              | 0 = line input select to ADC (default) 1 = microphone input select to ADC        |
| MUTEMIC      | B1     | Microphone mute control to ADC                                                            | 0 = mute on data path to ADCdisable 1 = mute on data path to ADCenable (default) |
| MICBOOST     | B0     | Primary microphone amplifier gain booster control                                         | 0 = 0 dB (default) 1 = 20 dB                                                     |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Table 9. Register 5 Digital Audio Path

| BitName     | Bits   | Description                                       | Settings                                                                                                      |
|-------------|--------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| HPOR        | B4     | Store dc offset when high-pass filter is disabled | 0 = clear offset (default) 1 = store offset                                                                   |
| DACMU       | B3     | DAC digital mute                                  | 0 = no mute (signal active) 1 = mute (default)                                                                |
| DEEMPH[1:0] | B[2:1] | De-emphasis control                               | 00 = no de-emphasis (default) 01 = 32 kHz sampling rate 10 = 44.1 kHz sampling rate 11 = 48 kHz sampling rate |
| ADCHPD      | B0     | ADC high-pass filter control                      | 0 = ADC high-pass filter enable (default) 1 = ADC high-pass filter disable                                    |

## Table 10. Register 6 Power Management

| BitName   | Bits   | Description                         | Settings                              |
|-----------|--------|-------------------------------------|---------------------------------------|
| POWEROFF  | B7     | Whole chip power-down control       | 0 = power-up 1 = power-down (default) |
| CLKOUTPD  | B6     | Clock output power-down control     | 0 = power-up (default) 1 = power-down |
| OSCPD     | B5     | Crystal power-down control          | 0 = power-up (default) 1 = power-down |
| OUTPD     | B4     | Output power-down control           | 0 = power-up 1 = power-down (default) |
| DACPD     | B3     | DAC power-down control              | 0 = power-up                          |
| ADCPD     | B2     | ADC power-down control              | 0 = power-up 1 = power-down (default) |
| MICPD     | B1     | Microphone input power-down control | 0 = power-up 1 = power-down (default) |
| LINEINPD  | B0     | Line input power-down control       | 0 = power-up 1 = power-down (default) |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Table 11. Register 7 Digital Audio I/F

| BitName      | Bits   | Description                                                                     | Settings                                                                                                                 |
|--------------|--------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| BCLKINV      | B7     | CODEC_BCLK inversion control                                                    | 0 = CODEC_BCLK not inverted (default)                                                                                    |
| MS           | B6     | Master mode enable                                                              | 0 = enable slave mode (default)                                                                                          |
| LRSWAP       | B5     | Swap DAC data control                                                           | 0 = output left- and right-channel data as normal (default) 1 = swap left- and right-channel DAC data in audio interface |
| LRP          | B4     | Polarity control for clocks in right-justified, left-justified, and I 2 S modes | 0 = normal DACLRC and ADCLRC (default), or processor Submode 1                                                           |
| WL[1:0]      | B[3:2] | Data-word length control                                                        | 00 = 16 bits 01 = 20 bits 10 = 24 bits (default)                                                                         |
| FORMAT [1:0] | B[1:0] | Digital audio input format control                                              | 00 = right justified 01 = left justified 10 = I 2 S mode (default) 11 = processor mode                                   |

## Table 12. Register 8 Sampling Rate

| BitName   | Bits   | Description                 | Settings                                                                                                                                                                                           |
|-----------|--------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLKODIV2  | B7     | CODEC_CLKOUT divider select | 0 = CODEC_CLKOUT is codec clock (default) 1 = CODEC_CLKOUT is codec clock divided by 2                                                                                                             |
| CLKDIV2   | B6     | Codec clock divide select   | 0 = codec clock is CODEC_MCLK (default) 1= codec clock is CODEC_MCLK divided by 2                                                                                                                  |
| SR [3:0]  | B[5:2] | Clock setting condition     | See Table 1 on Page 9 and Table 2 on Page 10                                                                                                                                                       |
| BOSR      | B1     | Base oversampling rate      | USB mode: 0 = support for 250 × f S based clock (default) 1 = support for 272 × f S based clock Normal mode: 0 = support for 256 × f S based clock (default) 1 = support for 384 × f S based clock |
| USB       | B0     | USB mode select             | 0 = normal mode enable (default) 1 = USB mode enable                                                                                                                                               |

## Table 13. Register 9 Active

| BitName   | Bit   | Description                     | Settings                                                     |
|-----------|-------|---------------------------------|--------------------------------------------------------------|
| ACTIVE    | B0    | Digital core activation control | 0 = disable digital core (default) 1 = activate digital core |

## Table 14. Register 10 Software Reset

| BitName     | Bit    | Description                                                                                                                      | Settings            |
|-------------|--------|----------------------------------------------------------------------------------------------------------------------------------|---------------------|
| RESET [8:0] | B[8:0] | Write all 0s to this register to set all registers to their default settings. Other data written to this register has no effect. | 0 = reset (default) |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## SPECIFICATIONS

TAmbient = 25°C, AVDD = VDDEXT = 3.3 V, HPVDD = 3.3 V, 1 kHz signal, fS = 48 kHz, PGA gain = 0 dB, 24-bit audio data, unless otherwise noted.

## OPERATING CONDITIONS

See operating conditions in the published ADSP-BF52xC data sheet.

| Parameter   | Conditions   |   Min |   Typical |   Max | Unit   |
|-------------|--------------|-------|-----------|-------|--------|
| AVDD 1      |              |   1.8 |       3.3 |   3.6 | V      |
| HPVDD       |              |   1.8 |       3.3 |   3.6 | V      |

## CODEC ELECTRICAL CHARACTERISTICS

| Parameter                          | Conditions                                  | Min   | Typical     | Max   | Unit     |
|------------------------------------|---------------------------------------------|-------|-------------|-------|----------|
| Line Input                         |                                             |       |             |       |          |
| Input Signal Level (0 dB)          |                                             |       | AVDD/3.3    |       | V(rms)   |
| Input Impedance                    | PGA gain = 0 dB                             |       | 200         |       | k Ω      |
|                                    | PGA gain = +33 dB                           |       | 10          |       | k Ω      |
|                                    | PGA gain = -34.5 dB                         |       | 480         |       | k Ω      |
| Input Capacitance                  |                                             |       | 10          |       | pF       |
| Signal-to-Noise Ratio (A-Weighted) | PGA gain = 0 dB, AVDD = 3.3 V               | 82    | 87          |       | dB       |
|                                    | PGA gain = 0 dB, AVDD = 1.8 V               |       | 84          |       | dB       |
| Total Harmonic Distortion (THD)    | -1 dBFS input, AVDD = 3.3 V                 | -80   | -84         |       | dB       |
|                                    | -1 dBFS input, AVDD = 1.8 V                 |       | -71         | -60   | dB       |
| Channel Separation 1               |                                             |       | 80          |       | dB       |
| Programmable Gain                  |                                             | -34.5 | 0           | +33.5 | dB       |
| Gain Step                          |                                             |       | 1.5         |       | dB       |
| Mute Attenuation                   |                                             |       | -80         |       | dB       |
| Microphone Input                   |                                             |       |             |       |          |
| Input Signal Level                 |                                             |       | 1           |       | V(rms)   |
| Signal-to-Noise Ratio (A-Weighted) | Microphone gain = 0 dB (R SOURCE = 40 k Ω ) |       | 85          |       | dB       |
| Total Harmonic Distortion          | -1 dBFS input, 0 dB gain, AVDD = 3.3 V      |       | -75         |       | dB       |
|                                    | -1 dBFS input, 0 dB gain, AVDD = 1.8 V      |       | -65         |       | dB       |
| Power Supply Rejection Ratio       |                                             |       | 50          |       | dB       |
| Mute Attenuation                   |                                             |       | 80          |       | dB       |
| Input Resistance                   |                                             |       | 10          |       | k Ω      |
| Input Capacitance                  |                                             |       | 10          |       | pF       |
| Microphone Bias                    |                                             |       |             |       |          |
| Bias Voltage                       |                                             |       | 0.75 × AVDD |       | V        |
| Bias Current Source                |                                             |       |             | 3     | mA       |
| Noise in the Signal Bandwidth      | 20 Hz to 20 kHz                             |       | 40          |       | nV/ √ Hz |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

| Parameter                            | Conditions                      | Min   | Typical   | Max   | Unit   |
|--------------------------------------|---------------------------------|-------|-----------|-------|--------|
| Line Output                          |                                 |       |           |       |        |
| DAC                                  | -1 dBFS input DAC + line output |       |           |       |        |
| Full-Scale Output                    |                                 |       | AVDD/3.3  |       | V(rms) |
| Signal-to-Noise Ratio (A-Weighted)   | AVDD = 3.3 V                    | 90    | 95        |       | dB     |
| THD+N                                | AVDD = 1.8 V AVDD = 3.3 V       | 85    | 88 -80    | -70   | dB dB  |
| Power Supply Rejection Ratio         | AVDD = 1.8 V                    |       | -80       | -70   | dB     |
|                                      |                                 |       | 50        |       | dB     |
| Channel Separation                   |                                 |       | 80        |       | dB     |
| Headphone Output                     |                                 |       |           |       |        |
| Full-Scale Output Voltage            |                                 |       | AVDD/3.3  |       | V(rms) |
| Maximum Output Power                 | R L = 32 Ω                      |       | 30        |       | mW     |
| Signal-to-Noise Ratio (A-Weighted)   | AVDD = 3.3 V AVDD = 1.8 V       | 90 80 | 94 85     |       | dB     |
| THD+N                                | HPOUT=10mW                      |       | -65       |       | dB dB  |
|                                      | HPOUT=20mW                      |       |           |       | dB     |
| Power Supply Rejection Ratio         |                                 |       | -60       |       |        |
|                                      |                                 |       | 50        |       | dB     |
| Mute Attenuation                     |                                 |       | 80        |       | dB     |
| LIne Input To Line Output            |                                 |       |           |       |        |
| Full-Scale Output Voltage            |                                 |       | AVDD/3.3  |       | V(rms) |
| Signal-to-Noise Ratio (A-Weighted)   | AVDD = 3.3 V                    |       | 92        |       | dB     |
|                                      | AVDD = 1.8 V                    |       | 86        |       | dB     |
| Total Harmonic Distortion            | AVDD = 3.3 V                    |       | -80       |       | dB     |
| Power Supply Rejection               | AVDD = 1.8 V                    |       | -80 50    |       | dB dB  |
| Microphone Input To Headphone Output |                                 |       |           |       |        |
| Full-Scale Output Voltage            |                                 |       | AVDD/3.3  |       | V(rms) |
| Signal-to-Noise Ratio (A-Weighted)   | AVDD = 3.3 V AVDD = 1.8 V       |       | 94 88     |       | dB dB  |
| Power Supply Rejection Ratio         |                                 |       | 50        |       | dB     |
| Programmable Attenuation             |                                 | 6     |           | 15    | dB     |
| Gain Step                            |                                 |       | 3         |       | dB     |
| Mute Attenuation                     |                                 |       | 80        |       | dB     |

1 Guaranteed but not tested.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## ABSOLUTE MAXIMUM RATINGS

See absolute maximum ratings in the published ADSP-BF52x processor data sheet.

## ESD SENSITIVITY

<!-- image -->

ESD  (electrostatic  discharge)  sensitive  device. Charged  devices  and  circuit  boards  can  discharge without  detection.  Although  this  product  features patented or proprietary protection  circuitry,  damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PACKAGE INFORMATION

The information presented in Figure 17 and Table 15 provides details about the package branding for the ADSP-BF52xC processor. For a complete listing of product availability, see Ordering Guide on Page 36.

Figure 17. Product Information on Package

<!-- image -->

Table 15. Package Brand Information

| Brand Key   | Field Description   |
|-------------|---------------------|
| t           | Temperature Range   |
| pp          | Package Type        |
| Z           | Lead Free Option    |
| ccc         | See Ordering Guide  |
| vvvvvv.x    | Assembly Lot Code   |
| n.n         | Silicon Revision    |
| yyww        | Date Code           |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## POWER CONSUMPTION

These current consumption values are for the codec alone. Please refer to the published ADSP-BF52x processor data sheet for the additional current consumption of the Blackfin processor.

## Table 16. Power Consumption

| Mode   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   | CLKOUTPD OSCPD OUTPD DACPD ADCPD LINEINPD   |
|--------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|

1 VDDEXT here refers to the total of the codec's DCVDD and DBVDD signals and does not include VDDExt supplies in the Blackfin device.

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## TIMING SPECIFICATIONS

## TWI Timing

Table 17. TWI Timing

| Parameter   |                            | Test Conditions 1   | Min   | Max   | Unit   |
|-------------|----------------------------|---------------------|-------|-------|--------|
| t SCS       | Start condition setup time |                     | 600   |       | ns     |
| t SCH       | Start condition hold time  |                     | 600   |       | ns     |
| t PH        | CSCL pulse width high      |                     | 600   |       | ns     |
| t PL        | CSCL pulse width low       |                     | 1.3   |       | µs     |
| f SCL       | CSCL frequency             |                     | 0     | 526   | kHz    |
| t DS        | Data setup time            |                     | 100   |       | ns     |
| t DH        | Data hold time             |                     |       | 900   | ns     |
| t RT        | CSDA and CSCL rise time    |                     |       | 300   | ns     |
| t FT        | CSDA and CSCL fall time    |                     |       | 300   | ns     |
| t HCS       | Stop condition setup time  |                     | 600   |       | ns     |

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## SPI Timing

## Table 18. SPI Timing

| Parameter   | Parameter                              | Test Conditions 1   |   Min | Max   | Unit   |
|-------------|----------------------------------------|---------------------|-------|-------|--------|
| t DSU       | CSDA to CSCL setup time                |                     |    20 |       | ns     |
| t DHO       | CSCL to CSDA hold time                 |                     |    20 |       | ns     |
| t SCH       | CSCL pulse width high                  |                     |    20 |       | ns     |
| t SCL       | CSCL pulse width low                   |                     |    20 |       | ns     |
| t SCS       | CSCL rising edge to CSB rising edge    |                     |    60 |       | ns     |
| t CSS       | CSB rising to CSCL rising              |                     |    20 |       | ns     |
| t CSH       | CSB pulse width high                   |                     |    20 |       | ns     |
| t CSL       | CSB pulse width low                    |                     |    20 |       | ns     |
| t PS        | Pulse width of spikes to be suppressed |                     |     0 | 5     | ns     |

- 1 AVDD, HPVDD, VDDEXT = 3.3 V, AGND = 0 V, TA = +25°C, Slave Mode, fS = 48 kHz, XTI/CODEC\_MCLK = 256 × fS unless otherwise stated.

Figure 19. SPI Timing

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Digital Audio Interface Slave Mode Timing

Table 19. Digital Audio Interface Slave Mode Timing

| Parameter   |                                                                                | Test Conditions 1   | Min   | Max   | Unit   |
|-------------|--------------------------------------------------------------------------------|---------------------|-------|-------|--------|
| t DS        | DACDAT setup time from CODEC_BCLK rising edge                                  |                     | 10    |       | ns     |
| t DH        | DACDAT hold time from CODEC_BCLK rising edge                                   |                     | 10    |       | ns     |
| t LRSU      | ADCLRC/DACLRC setup time to CODEC_BCLK rising edge                             |                     | 10    |       | ns     |
| t LRH       | ADCLRC/DACLRC hold time to CODEC_BCLK rising edge                              |                     | 10    |       | ns     |
| t DD        | ADCDAT propagation delay from CODEC_BCLK falling edge (external load of 70 pF) |                     |       | 30    | ns     |
| t BCH       | CODEC_BCLK pulse width high                                                    |                     | 25    |       | ns     |
| t BCL       | CODEC_BCLK pulse width low                                                     |                     | 25    |       | ns     |
| t BCY       | CODEC_BCLK cycle time                                                          |                     | 50    |       | ns     |

Figure 20. Digital Audio Interface Slave Mode Timing

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Digital Audio Interface Master Mode Timing

Table 20. Digital Audio Interface Master Mode Timing

| Parameter   |                                                              | Test Conditions 1   | Min   | Max   | Unit   |
|-------------|--------------------------------------------------------------|---------------------|-------|-------|--------|
| t DST       | DACDAT setup time to CODEC_BCLK rising edge                  |                     | 30    |       | ns     |
| t DHT       | DACDAT hold time to CODEC_BCLK rising edge                   |                     | 10    |       | ns     |
| t DL        | ADCLRC/DACLRC propagation delay from CODEC_BCLK falling edge |                     |       | 10    | ns     |
| t DDA       | ADCDAT propagation delay from CODEC_BCLK falling edge        |                     |       | 10    | ns     |
| t BCLKR     | CODEC_BCLK rising time (10 pF load)                          |                     | 10    |       | ns     |
| t BCLKF     | CODEC_BCLK falling time (10 pF load)                         |                     | 10    |       | ns     |
| t BCLKDS    | CODEC_BCLK duty cycle (normal and USB mode)                  |                     | 45:55 | 55:45 |        |

Figure 21. Digital Audio Interface Master Mode Timing

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## System Clock Timing

Table 21. System Clock Timing

| Parameter   |                                                                 | Test Conditions 1   | Min   | Max   | Unit   |
|-------------|-----------------------------------------------------------------|---------------------|-------|-------|--------|
| t XTIY      | XTI/CODEC_MCLK system clock cycle time                          |                     | 72    |       | ns     |
| t MCLKDS    | XTI/CODEC_MCLK duty cycle                                       |                     | 40:60 | 60:40 |        |
| t XTIH      | XTI/CODEC_MCLK system clock pulse width high                    |                     | 32    |       | ns     |
| t XTIL      | XTI/CODEC_MCLK system clock pulse width low                     |                     | 32    |       | ns     |
| t COP       | CODEC_CLKOUT propagation delay from XTI/CODEC_MCLK falling edge |                     | 20    |       | ns     |
| t COPDIV2   | CLKODIV2 propagation delay from XTI/CODEC_MCLK falling edge     |                     | 20    |       | ns     |

Figure 22. System (CODEC\_MCLK) Clock Timing

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## Digital Filter Characteristics

## Table 22. Digital Filter Characteristics

| Parameter                         | Conditions      | Min         | Typical   | Max       | Unit   |
|-----------------------------------|-----------------|-------------|-----------|-----------|--------|
| ADC FILTER                        |                 |             |           |           |        |
| Pass Band                         | ±0.04 dB        | 0           |           | 0.445 × f | Hz     |
|                                   | -6 dB           | 0.5 × f     | S         |           | Hz     |
| Pass Band Ripple                  |                 |             |           | ±0.04     | dB     |
| Stop Band                         |                 | 0.555 × f S |           |           | Hz     |
| Stop Band Attenuation             | f > 0.567 × f S | -61         |           |           | dB     |
| High-Pass Filter Corner Frequency | -3 dB           |             | 3.7       |           | Hz     |
|                                   | -0.5 dB         |             | 10.4      |           | Hz     |
|                                   | -0.1 dB         | 21.6        |           |           | Hz     |
| DAC FILTER                        |                 |             |           |           |        |
| Pass Band                         | ±0.04 dB        | 0           |           | 0.445 × f | Hz     |
|                                   | -6 dB           | 0.5 × f     | S         |           | Hz     |
| Pass Band Ripple                  |                 |             | ±0.04     |           | dB     |
| Stop Band                         |                 | 0.555 × f S |           |           | Hz     |
| Stop Band Attenuation             | f > 0.565 × f S | -61         |           |           | dB     |
| Codec Clock Tolerance             |                 |             |           |           |        |
| Frequency Range                   |                 | 8.0         |           | 13.8      | MHz    |
| Jitter Tolerance                  |                 | 50          | 50        | 50        | pS     |

## CONVERTER FILTER RESPONSE

Figure 23. ADC Digital Filter Frequency Response, Sampling Rate = 48 kHz

<!-- image -->

Figure 24. ADC Digital Filter Ripple, Sampling Rate = 48 kHz

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 25. DAC Digital Filter Frequency Response, Sampling Rate = 48 kHz

<!-- image -->

Figure 26. DAC Digital Filter Ripple, Sampling Rate = 48 kHz

<!-- image -->

## DIGITAL DE-EMPHASIS

<!-- image -->

Figure 27. De-Emphasis Frequency Response, Sampling Rate = 32 kHz

<!-- image -->

Figure 28. De-Emphasis Frequency Response, Sampling Rate = 44.1 kHz

Figure 29. De-Emphasis Frequency Response, Sampling Rate = 48 kHz

<!-- image -->

Figure 30. De-Emphasis Error, Sampling Rate = 32 kHz

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 31. De-Emphasis Error, Sampling Rate = 44.1 kHz

<!-- image -->

Figure 32. De-Emphasis Error, Sampling Rate = 48 kHz

<!-- image -->

## 289-BALL CSP\_BGA BALL ASSIGNMENT

Signals added or changed to the ADSP-BF52xC processor for the embedded codec are shown in Table 23 and Table 24. Please refer to the published ADSP-BF52x processor data sheet for descriptions of additional signals for the processor.

Table 23. 289-Ball CSP\_BGA Ball Assignment (Alphabetically)

| Signal       | Ball No.   | Signal         | Ball No.   |
|--------------|------------|----------------|------------|
| ADCDAT       | A16        | HPGND          | G17        |
| ADCLRC       | A15        | HPVDD          | G16 1      |
| AGND         | H22        | LHPOUT         | B20        |
| AVDD         | J22 1      | LLINEIN        | E23        |
| CMODE        | E22        | LOUT           | F22        |
| CODEC_BCLK   | A19        | MICBIAS        | H23        |
| CODEC_CLKOUT | D22        | MICIN          | J23        |
| CSB          | D23        | RHPOUT         | B21        |
| CSCL         | B23        | RLINEIN        | F23        |
| CSDA         | C23        | ROUT           | G22        |
| CVDD         | H17 1      | VMID           | G23        |
| DACDAT       | A18        | XTI/CODEC_MCLK | A22        |
| DACLRC       | A17        | XTO            | A21        |

Table 24. 289-Ball CSP\_BGA Ball Assignment (Numerically)

| Ball No.   | Signal         | Ball No.   | Signal   |
|------------|----------------|------------|----------|
| A15        | ADCLRC         | E22        | CMODE    |
| A16        | ADCDAT         | E23        | LLINEIN  |
| A17        | DACLRC         | F22        | LOUT     |
| A18        | DACDAT         | F23        | RLINEIN  |
| A19        | CODEC_BCLK     | G16 1      | HPVDD    |
| A21        | XTO            | G17        | HPGND    |
| A22        | XTI/CODEC_MCLK | G22        | ROUT     |
| B20        | LHPOUT         | G23        | VMID     |
| B21        | RHPOUT         | H17 1      | CVDD     |
| B23        | CSCL           | H22        | AGND     |
| C23        | CSDA           | H23        | MICBIAS  |
| D22        | CODEC_CLKOUT   | J22 1      | AVDD     |
| D23        | CSB            | J23        | MICIN    |

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 33 shows the top view of the ADSP-BF52xC processor ball configuration.

Figure 33. ADSP-BF52xC Processor Ball Configuration (Top View)

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

Figure 34 shows the bottom view of the ADSP-BF52xC processor ball configuration.

Figure 34. ADSP-BF52xC Processor Ball Configuration (Bottom View)

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## OUTLINE DIMENSIONS

Dimensions in Figure 35, 289-Ball CSP\_BGA (BC-289-2) are shown in millimeters.

Figure 35. 289-Ball CSP\_BGA (BC-289-2)

<!-- image -->

## ADSP-BF522C/ADSP-BF523C/ADSP-BF524C/ADSP-BF525C/ADSP-BF526C/ADSP-BF527C

## ORDERING GUIDE

| Model 1            | Temperature Range 2   | Instruction Rate (Max)   | Package Description                                   | Package Option   |
|--------------------|-----------------------|--------------------------|-------------------------------------------------------|------------------|
| ADSP-BF522KBCZ-3C2 | 0°C to +70°C          | 300 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF522KBCZ-4C2 | 0°C to +70°C          | 400 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF523KBCZ-5C2 | 0°C to +70°C          | 533 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF523KBCZ-6C2 | 0°C to +70°C          | 600 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF524KBCZ-3C2 | 0°C to +70°C          | 300 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF524KBCZ-4C2 | 0°C to +70°C          | 400 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF525KBCZ-5C2 | 0°C to +70°C          | 533 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF525KBCZ-6C2 | 0°C to +70°C          | 600 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF526KBCZ-3C2 | 0°C to +70°C          | 300 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF526KBCZ-4C2 | 0°C to +70°C          | 400 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF527KBCZ-5C2 | 0°C to +70°C          | 533 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |
| ADSP-BF527KBCZ-6C2 | 0°C to +70°C          | 600 MHz                  | 289-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-289-2         |

<!-- image -->