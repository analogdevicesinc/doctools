<!-- lastmod 2021-11-29 -->
<!-- image -->

## Precision Analog Microcontroller, 16-Bit Analog Input/Output with MDIO interface, Arm Cortex-M33

## FEATURES

- Analog input/output
- Multichannel, 16-bit, 2 MSPS ADC
- Up to 16 external channels
- On-chip die temperature monitor
- 4 power monitor channels
- 4 PGA/TIA channels supporting voltage and current measurements
- Fully differential and single-ended modes
- 0 V to VREF analog input range
- 12-bit voltage output DACs
- 8× 0 V to 2.5 V, 1 kΩ load
- 4× 0 V to 2.5 V, 2.5 kΩ load
- On-chip low drift voltage reference, 1.25 V or 2.5 V
- Buffered 1.25 V or 2.5 V output
- 4 voltage comparators
- Microcontroller
- 32-bit Arm Cortex-M33 core, 32-bit RISC architecture, FPU
- Serial wire port supports code download and debug
- Clocking options
- 16 MHz on-chip oscillator
- 160 MHz PLL output with programmable divider
- External clock source
- Memory
- 2× 512 kB independent Flash/EE memories
- 10,000-cycle Flash/EE endurance
- 20-year Flash/EE retention
- 128 kB SRAM with ECC
- Software triggered, in circuit reprogrammability via MDIO or I 2 C
- On-chip peripherals
- 2× UART, 3× SPI, 3× I 2 C serial input/output
- Multilevel voltage (3.3 V, 1.8 V, 1.2 V) GPIOs
- MDIO slave up to 10 MHz
- 5 general-purpose timers
- Wake-up timer (WUTs)
- Watchdog timers (WDTs)
- 32-element PLA
- 16-bit PWM
- 10 external Interrupts
- Power
- Multiple supplies: 3.3 V for voltage DACs and ADCs, and 3.3
- V, 1.8 V, or 1.2 V for digital inputs/outputs
- Flexible operating modes for low power applications

Rev. B

<!-- image -->

- Packages and temperature range
- 5 mm × 5 mm 81-ball CSP\_BGA and 3.46 mm × 3.46 mm 64-ball WLCSP
- BGA package uses ULA molding compounds
- Fully specified for -40°C to +105°C operation
- Tools
- Low cost quick start development system
- Full third-party support

## APPLICATIONS

- Optical networking 100 Gbps/200 Gbps/400 Gbps and higher frequency modules
- Industrial control, automation, and instrumentation systems

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                                                                                                                               | RMS Noise Resolution of ADC............................29                                                                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                                                                                                                                                                                | Applications Information...................................... 30                                                                                                                                                                                                                                                        |
| General Description...............................................3                                                                                                                                                                                                                                                      | Power Supplies................................................ 30                                                                                                                                                                                                                                                        |
| Functional Block Diagram......................................4                                                                                                                                                                                                                                                          | Power-Up Requirements..................................30                                                                                                                                                                                                                                                                |
| Specifications........................................................ 5 Timing Specifications .......................................11                                                                                                                                                                                 | Recommended Circuit and Component Values.............................................................30                                                                                                                                                                                                                  |
| Absolute Maximum Ratings.................................16                                                                                                                                                                                                                                                              | Silicon Anomaly...................................................32                                                                                                                                                                                                                                                     |
| Thermal Resistance......................................... 16                                                                                                                                                                                                                                                           | ADuCM410 Functionality Issues......................32                                                                                                                                                                                                                                                                    |
| Electrostatic Discharge (ESD) Ratings.............16                                                                                                                                                                                                                                                                     | Functionality Issues .........................................32                                                                                                                                                                                                                                                         |
| ESD Caution.....................................................16                                                                                                                                                                                                                                                       | Section 1. ADuCM410 Functionality Issues.....32                                                                                                                                                                                                                                                                          |
| Typical Performance Characteristics...................17                                                                                                                                                                                                                                                                 | Outline Dimensions............................................. 33                                                                                                                                                                                                                                                       |
| Pin Configurations and Function Descriptions.....18                                                                                                                                                                                                                                                                      | Ordering Guide ................................................33                                                                                                                                                                                                                                                        |
| Theory of Operation.............................................28                                                                                                                                                                                                                                                       | Evaluation Boards............................................33                                                                                                                                                                                                                                                          |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                         | REVISION HISTORY                                                                                                                                                                                                                                                                                                         |
| 11/2021-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                 | 11/2021-Rev. A to Rev. B                                                                                                                                                                                                                                                                                                 |
| Changes to Offset Error Parameter and Actual Offset Error Parameter, Table 1............................................ 5                                                                                                                                                                                               | Changes to Offset Error Parameter and Actual Offset Error Parameter, Table 1............................................ 5                                                                                                                                                                                               |
| Change to Table 10........................................................................................................................................16 Changes to Table 13......................................................................................................................................23 | Change to Table 10........................................................................................................................................16 Changes to Table 13......................................................................................................................................23 |

## GENERAL DESCRIPTION

The ADuCM410 is a fully integrated, single package device that includes high performance analog peripherals together with digital peripherals (controlled by a 160 MHz Arm ®  Cortex ™ -M33 processor) and integrated flash for code and data.

The analog-to-digital converter (ADC) on the ADuCM410 provides 16-bit, 2 MSPS data acquisition using up to 16 input pins that can be programmed for single-ended or differential operation with a programmable gain amplifier (PGA) or transimpedance amplifier (TIA) for voltage and current measurements. Additionally, the die temperature and supply voltages can be measured.

The ADC input voltage is 0 V to VREF. A sequencer is provided that allows a user to select a set of ADC channels to be measured in sequence without software involvement during the sequence. The sequence can optionally repeat automatically at a user-selectable rate.

Up to 12 channels of 12-bit voltage digital-to-analog converters (VDACs) are provided with output buffers supported.

The ADuCM410 can be configured so that the digital and analog outputs retain their output voltages through a watchdog or software reset sequence. Therefore, a product can remain functional even while the ADuCM410 is resetting itself.

The ADuCM410 has a low power Arm Cortex-M33 processor and a 32-bit reduced instruction set computer (RISC) machine that offers up to 240 MIPS peak performance with a floating-point unit (FPU). Also integrated are 2× 512 kB Flash/EE memories and 128 kB static random access memory (SRAM)-both with single-error correction (SEC) and double error detection (DED) error checking and correction (ECC). The flash comprises two separate 512 kB blocks supporting execution from one flash block and simultaneous writing and/or erasing of the other flash block.

The ADuCM410 operates from an on-chip oscillator and has a phase-locked loop (PLL) of 160 MHz. This clock can optionally be divided down to reduce current consumption. Additional low power modes can be set via the ADuCM410 software.

The device includes a management data input/output (MDIO) interface capable of operating up to 10 MHz. User programming is eased by incorporating physical address (PHYADR) and device address (DEVAD) hardware comparators. The nonerasable kernel code combined with flags in user flash allow user code to reliably switch between the two hardware independent flash blocks.

The ADuCM410 integrates a range of on-chip peripherals that can be configured under software control, as required in the application. These peripherals include 2× universal asynchronous receiver transmitter (UART), 3× I 2 C, and 3× serial peripheral interface (SPI) serial input/output communication controllers, generalpurpose inputs/outputs (GPIOs), 32-element programmable logic arrays (PLAs), five general-purpose timers, a wake-up timer (WUT), and a system watchdog timer (WDT). A 16-bit pulse-width modulation (PWM) with eight output channels is also provided.

The GPIO pins (Px.x) power up in high impedance input mode. In output mode, the software chooses between open-drain mode and push/pull mode. The pull-up and pull-down resistors can be disabled and enabled in the software. The GPIO pins can be configured with different voltage levels according to the IOVDDx pin, such as 3.3 V, 1.8 V, and 1.2 V. In GPIO output mode, the inputs can remain enabled to monitor the GPIO pins. The GPIO pins can also be programmed to handle digital or analog peripheral signals, in which case, the pin characteristics are matched to the specific requirement.

A large support ecosystem is available for the Arm Cortex-M33 processor to ease product development of the ADuCM410. Access is via the Arm serial wire debug port. On-chip factory firmware supports in-circuit serial download via MDIO or I 2 C. These features are incorporated into a low cost, quick start development system supporting this precision analog microcontroller.

Note that throughout this data sheet, multifunction pins, such as VDAC7/P4.2, are referred to either by the entire pin name or by a single function of the pin, for example, P4.2, when only that function is relevant.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## SPECIFICATIONS

AVDD = IOVDD0 = 2.85 V to 3.6 V, IOVDD1 = 1.2 V or 1.8 V, DVDD = 1.8 V to 3.6 V, VREF = 2.5 V for the internal reference, the core frequency (f CORE ) = 160 MHz, and T A = -40°C to +105°C, unless otherwise noted. HCLK is the high speed system clock.

Table 1.

| Parameter                   |   Min | Typ   |   Max | Unit     | Test Conditions/Comments                                                                                                                                                                         |
|-----------------------------|-------|-------|-------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADC CHANNEL SPECIFICATIONS  |       |       |       |          |                                                                                                                                                                                                  |
| ADC Power-Up Time           |       | 5     |       | μs       |                                                                                                                                                                                                  |
| Data Rate (f ADC )          |       |       |     2 | MSPS     |                                                                                                                                                                                                  |
| Resolution                  |    16 |       |       | Bits     | 2.5 V internal reference                                                                                                                                                                         |
| Integral Nonlinearity       |    -4 | ±1    |    +3 | LSB      | Voltage input to AINx, PGA off, differential mode                                                                                                                                                |
|                             |  -9.5 | ±1    |    +6 | LSB      | Voltage input to AINx, PGA off, single-ended mode                                                                                                                                                |
|                             |  -9.5 | ±5    |    +8 | LSB      | PGA voltage input to ADC, G = 2                                                                                                                                                                  |
|                             |       | ±4    |       | LSB      | G = 4                                                                                                                                                                                            |
|                             |       | ±5    |       | LSB      | G = 6                                                                                                                                                                                            |
|                             |       | ±5    |       | LSB      | G = 8                                                                                                                                                                                            |
|                             |       | ±8    |       | LSB      | G = 10                                                                                                                                                                                           |
|                             |       |       |       |          | TIA input channels                                                                                                                                                                               |
|                             |    -8 | ±3    |   +12 | LSB      | TIA resistance (R TIA ) = 250 Ω                                                                                                                                                                  |
|                             |    -8 | ±3    |    +8 | LSB      | R TIA = 750 Ω, 2 kΩ                                                                                                                                                                              |
|                             | -11.5 | ±6    | +11.5 | LSB      | R TIA = 5 kΩ                                                                                                                                                                                     |
|                             |   -15 | ±8    |   +15 | LSB      | R TIA = 10 kΩ, 20 kΩ,100 kΩ                                                                                                                                                                      |
| Differential Nonlinearity   |  -0.9 | ±0.9  |  +1.5 | LSB      | Differential and single-ended                                                                                                                                                                    |
| DC Code Distribution 1      |       | ±9    |       | LSB      | Minimum and maximum range from mean ADC codes for 1000 samples ADC input = 2 V, single-ended mode, f ADC = 2 MSPS, PGA off                                                                       |
|                             |       | ±5    |       | LSB      | ADC input = 1 V, differential mode, f ADC = 50 kSPS, PGA gain = 2, oversampling ratio (OSR) = 8                                                                                                  |
|                             |       | ±5    |       | LSB      | ADC input = 200 mV, differential mode, f ADC = 50 kSPS, PGA gain = 10, OSR = 8                                                                                                                   |
|                             |       | ±5    |       | LSB      | TIA mode, gain resistor = 100 kΩ, f ADC = 25 kSPS, OSR = 4, input current = 10 µA                                                                                                                |
| ENDPOINT ERRORS             |       |       |       |          | Voltage inputs only                                                                                                                                                                              |
| Offset Error                |  -425 | ±150  |  +330 | µV       | PGA off                                                                                                                                                                                          |
|                             |  -770 | ±200  |  +830 | µV       | PGA channels; voltage input to ADC; G = 2, 4, 6, 8, 10; TIA input channels; all gain settings; current converted to a voltage; not production calibrated; user calibration can remove this error |
|                             |  -250 | ±150  |  +225 | µV       | Gain resistor = 250 Ω, 750 Ω                                                                                                                                                                     |
|                             |  -800 | ±250  |  +800 | µV       | Gain resistor = 2 kΩ                                                                                                                                                                             |
|                             | -1250 | ±200  | +1250 | µV       | Gain resistor = 5 kΩ                                                                                                                                                                             |
|                             | -1460 | ±250  | +1375 | µV       | Gain resistor = 10 kΩ, 20 kΩ,100 kΩ                                                                                                                                                              |
| Offset Error Drift          |       | ±4    |       | µV/°C    | PGA off                                                                                                                                                                                          |
| Offset Error Drift Matching |       | ±1    |       | µV/°C    | Matching compared to AIN0; for voltage input channels, PGA off only                                                                                                                              |
| Full-Scale Error            |  -900 | ±250  |  +370 | µV       | PGA off, voltage input to AINx                                                                                                                                                                   |
|                             | -0.33 | ±0.2  |  +0.3 | %of FS 2 | PGA voltage input to ADC; G = 2, 4 (not factory calibrated); user calibration can remove this error                                                                                              |
|                             |  -0.5 | ±0.2  |  +0.4 | %of FS 2 | G = 6, 8, 10 (not factory calibrated); user calibration can remove this error                                                                                                                    |
|                             |    -5 | +5    |   +12 | %of FS 2 | TIA input channels, all gain settings, current converted to a voltage                                                                                                                            |
|                             |    -1 | ±0.5  |    +1 | %of FS 2 | Internal channels only                                                                                                                                                                           |

## SPECIFICATIONS

Table 1.

| Parameter                           | Min                     | Typ     | Max                              | Unit   | Test Conditions/Comments                                                                                                      |
|-------------------------------------|-------------------------|---------|----------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------|
| Gain Error Drift                    |                         | ±5      |                                  | ppm/°C |                                                                                                                               |
| Gain Error Drift Matching           |                         | ±0.5    |                                  | ppm/°C | Matching compared to AIN0; for voltage input channels, PGA off only                                                           |
| PGA Mismatch Error                  | -0.3                    | +0.2    | +0.3                             | %      | Error between adjacent gain settings of PGA                                                                                   |
| PGA Mismatch Error Drift            |                         | 4       |                                  | ppm/°C |                                                                                                                               |
| DYNAMIC PERFORMANCE                 |                         |         |                                  |        | Input frequency (f IN ) = 500 Hz sine wave, sampling frequency (f SAMPLE ) = 1 MSPS internally                                |
| Signal-to-Noise Ratio (SNR)         |                         | 84      |                                  | dB     | Includes distortion and noise components, voltage input, PGA off, single-ended mode Voltage input, PGA off, differential mode |
| Total Harmonic Distortion (THD)     |                         | 89 -100 |                                  | dB dB  |                                                                                                                               |
| Peak Harmonic or Spurious Noise     |                         | -88     |                                  | dB     |                                                                                                                               |
| Channel to Channel Crosstalk        |                         | -96     |                                  | dB     | Measured on adjacent channels                                                                                                 |
| ANALOG INPUT (VOLTAGE CHANNELS)     |                         |         |                                  |        |                                                                                                                               |
| Differential Mode                   | V CM - VREF/ (2 × gain) |         | V CM + VREF/(2 × gain)           | V      | PGA gain = 2, 4, 6, 8, 10; V CM is common-mode voltage                                                                        |
| Single-Ended Mode                   | 0                       |         | 2.5                              | V      | Gain = 1 and PGA = off                                                                                                        |
| Leakage Current                     |                         | ±5      |                                  | nA     | Input voltage to AINx = 0.15 V to 2.5 V (except AIN4 and AIN7)                                                                |
| Input Current                       |                         | ±30     |                                  | nA     | AIN4 and AIN7 only Input buffer enabled                                                                                       |
|                                     | -60                     | ±10     | +60                              | nA     | At 100 kHz sample rate from 0.15 V to 2.5 V, AINx = 0.15 V to 2.5 V (except AIN4 and AIN7)                                    |
|                                     | -60 -230                | ±50     | +135                             | nA nA  | AIN4 and AIN7 only PGA off, 2 MSPS ADC sample                                                                                 |
| Input Capacitance                   |                         | ±50 30  | +530                             | pF     | rate During ADC acquisition                                                                                                   |
| ANALOG INPUT (PGA VOLTAGE CHANNELS) |                         |         |                                  |        |                                                                                                                               |
| PGA Gain Options                    | 1                       |         | 10                               |        | G = 1, 2, 4, 6, 8, or 10                                                                                                      |
| Settling Time                       | 10                      |         |                                  | μs     |                                                                                                                               |
| Compliant Range                     | 250                     |         | Lower of 2500 or AVDD - 800      | mV     |                                                                                                                               |
| ANALOG INPUT (TIA CURRENT CHANNELS) |                         |         |                                  |        |                                                                                                                               |
| Source and Sink Current Range       | -5                      |         | +5                               | mA     |                                                                                                                               |
| TIA Bias Voltage Range              | 250 500                 |         | Lower of 2500 or AVDD - 800 1800 | mV mV  | R = 250 Ω                                                                                                                     |
| Output Voltage Range                | 250                     |         | Lower of 2500 or AVDD - 800      | mV     | Except R TIA = 250 Ω                                                                                                          |
|                                     | 500                     |         | 1800                             | mV     | R TIA = 250 Ω No external extra capacitors to AGND or to supply                                                               |
| Allowed External Load Capacitance 1 |                         |         |                                  |        | on AINx when used as TIA inputs                                                                                               |
| TIA Gain Resistors 250 Ω, 750 Ω     |                         |         | 120                              | pF     |                                                                                                                               |
| 2 kΩ, 5 kΩ, 10 kΩ, 20 kΩ, 100 kΩ    |                         |         | 30                               | pF     |                                                                                                                               |
| Gain Accuracy                       | -5                      | +5      | +12                              | %      | TIA gain resistor and ADC gain error                                                                                          |
| Gain Drift over Temperature         |                         | 60      | 120                              | ppm/°C |                                                                                                                               |
| Gain Mismatch Error                 | -0.8                    | ±0.3    | +0.9                             | %      | Error introduced when moving up or down one R TIA value                                                                       |

## SPECIFICATIONS

Table 1.

| Parameter                                      |   Min | Typ         | Max                        | Unit     | Test Conditions/Comments                                                                                                                                                                                                                 |
|------------------------------------------------|-------|-------------|----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ON-CHIP VOLTAGE REFERENCE                      |       |             |                            |          | 4.7 μF decoupling capacitor between ADCREFP and ADCREFN                                                                                                                                                                                  |
| Output Voltage                                 |       | 2.5         |                            | V        |                                                                                                                                                                                                                                          |
| Accuracy                                       |       |             | ±5                         | mV       | T A = 25°C                                                                                                                                                                                                                               |
| Reference Temperature Coefficient              |       | 10          | 30                         | ppm/°C   | T A = -40°C to +25°C range                                                                                                                                                                                                               |
|                                                |       | 10          | 20                         | ppm/°C   | T A = 25°C to 105°C range                                                                                                                                                                                                                |
| Power Supply Rejection Ratio (PSRR)            |       |             |                            |          |                                                                                                                                                                                                                                          |
| DC                                             |       | 70          |                            | dB       | AVDD change effects, 2.85 V to 3.6 V                                                                                                                                                                                                     |
| AC                                             |       | 60          |                            | dB       | Tested with AVDD noise of 1 kHz, 10 kHz, 100 kHz, and 1 MHz                                                                                                                                                                              |
| Output Impedance                               |       | 2           |                            | Ω        | Do not use as external reference source, T A = 25°C                                                                                                                                                                                      |
| EXTERNAL REFERENCE INPUT                       |       |             |                            |          |                                                                                                                                                                                                                                          |
| Input Voltage Range                            |       | 2.5         |                            | V        | Only supports 2.5 V external reference input                                                                                                                                                                                             |
| Input Impedance                                |       | 5           |                            | kΩ       | External reference source must be capable of sourcing 500 µA minimum                                                                                                                                                                     |
| BUFFERED REFERENCE VOLTAGE OUTPUTS (BUFx_VREF) |       |             |                            |          | 1 μF capacitor required on both outputs                                                                                                                                                                                                  |
| Output Voltage                                 |       | 1.25 or 2.5 |                            | V        |                                                                                                                                                                                                                                          |
| Accuracy                                       |       |             | ±6                         | mV       | T A = 25°C, load = 4 mA                                                                                                                                                                                                                  |
| Reference Temperature Coefficient              |       | 10          | 30                         | ppm/°C   | T A = -40°C to +25°C range                                                                                                                                                                                                               |
|                                                |       | 10          | 20                         | ppm/°C   | T A = 25°C to 105°C range                                                                                                                                                                                                                |
| Load Regulation                                |       | 2.5         |                            | mV/mA Ω  |                                                                                                                                                                                                                                          |
| Output Impedance Load Current                  |       | 2.5         |                            | mA       |                                                                                                                                                                                                                                          |
| PSRR                                           |       | 70          | 4                          | dB       |                                                                                                                                                                                                                                          |
| VOLTAGE DAC (VDAC) CHANNEL SPECIFICATIONS      |       |             |                            |          | VDAC Channel 0 to Channel 7: buffer on; load resistance (R L ) = 1 kΩ, load capacitance (C L ) = 100 pF; DACCONx, Bit 9 = 0 (normal drive, unless otherwise stated); VDAC Channel 8 to Channel 11: buffer on, R L = 2.5 kΩ, C L = 100 pF |
| DC Accuracy                                    |       |             |                            |          |                                                                                                                                                                                                                                          |
| Resolution                                     |    12 |             |                            | Bits     |                                                                                                                                                                                                                                          |
| Relative Accuracy 3                            |    -2 | ±1.5        | +3                         | LSB      |                                                                                                                                                                                                                                          |
| Differential Nonlinearity 3                    |  -0.9 | ±0.5        | +0.9                       | LSB      | Guaranteed monotonic                                                                                                                                                                                                                     |
| Calculated Offset Error                        | -13.5 | ±5          | +15.5                      | mV       | 2.5 V internal reference                                                                                                                                                                                                                 |
| Actual Offset Error                            |   -15 | +2          | +15                        | mV       | Measured at Code 0                                                                                                                                                                                                                       |
|                                                |   -15 | +2          | +15                        | mV       | VDAC Channel 0 to Channel 7: DACCONx,                                                                                                                                                                                                    |
| Gain Error                                     |  -0.7 | ±0.2        | +0.5                       | %of FS 2 |                                                                                                                                                                                                                                          |
|                                                |  -0.7 | ±0.2        | +0.5                       | %of FS 2 | VDAC Channel 0 to Channel 7: DACCONx,                                                                                                                                                                                                    |
| Offset Error Drift                             |       | ±10         |                            | μV/°C    |                                                                                                                                                                                                                                          |
|                                                |       | 15          |                            |          |                                                                                                                                                                                                                                          |
| Gain Error Drift                               |       |             |                            | ppm/°C   |                                                                                                                                                                                                                                          |
|                                                |       | ±15         |                            | mA       | VDAC Channel 8 to Channel 11                                                                                                                                                                                                             |
| DAC OUTPUTS                                    |       |             |                            |          |                                                                                                                                                                                                                                          |
| Output Range 1                                 |     0 |             | 2.5                        | V        | VDAC Channel 0 to Channel 7                                                                                                                                                                                                              |
|                                                |     0 |             | Lower of 2.5 or AVDD - 0.7 | V        | VDAC Channel 8 to Channel 11                                                                                                                                                                                                             |
| Output Impedance                               |       | 1           |                            | Ω        |                                                                                                                                                                                                                                          |

## SPECIFICATIONS

Table 1.

| Parameter                       | Min    | Typ     | Max        | Unit                  | Test Conditions/Comments                                                                                                                                                                                                                                         |
|---------------------------------|--------|---------|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DAC AC CHARACTERISTICS          |        |         |            |                       |                                                                                                                                                                                                                                                                  |
| Slew Rate                       |        | 2.5     |            | V/µs                  |                                                                                                                                                                                                                                                                  |
| Voltage Output Settling Time    |        | 10      |            | µs                    |                                                                                                                                                                                                                                                                  |
| Digital to Analog Glitch Energy |        | ±20     |            | nV-sec                | 1 LSB change at major carry (where maximum number of bits simultaneously changes in DACDATx register)                                                                                                                                                            |
| COMPARATOR INPUT                |        |         |            |                       |                                                                                                                                                                                                                                                                  |
| Offset Voltage                  |        | ±15     |            | mV                    | The offset voltage is dependent on the comparator being enabled with its input pins connected to external biasing circuits; if the comparator is left powered down or if the inputs to the comparator are left floating, over time the offset error may increase |
| Bias Current                    | -30    | 3 1     | +43        | nA                    | Noninverting (positive) input                                                                                                                                                                                                                                    |
|                                 |        | 10 1    |            | nA                    | Inverting (negative) input, hysteresis disabled                                                                                                                                                                                                                  |
|                                 |        | 50 1    |            | nA                    | Inverting (negative) input, hysteresis = 10 mV                                                                                                                                                                                                                   |
|                                 | 740    | 840     | 940        | nA                    | Inverting (negative) input, hysteresis = 210 mV                                                                                                                                                                                                                  |
| Voltage Range                   | 0.5    |         | AVDD - 1.2 | V                     | Negative input range (reference node of the comparator)                                                                                                                                                                                                          |
|                                 | AGND   |         | AVDD       | V                     | Positive input range to comparator                                                                                                                                                                                                                               |
|                                 | 0      |         | 2.0        | V                     | Differential input range; positive input - negative input voltage                                                                                                                                                                                                |
| Capacitance                     |        | 7       |            | pF                    |                                                                                                                                                                                                                                                                  |
| Hysteresis                      | 10     | 50      | 210        | mV                    | 16 configurable options 4                                                                                                                                                                                                                                        |
| Hysteresis Voltage Accuracy     |        | 10      | 35         | %of target hysteresis | 10 mV to 35 mV settings                                                                                                                                                                                                                                          |
|                                 |        | 5       | 15         | %of target hysteresis | 50 mV to 210 mV settings                                                                                                                                                                                                                                         |
| Response Time                   |        | 5       |            | µs                    |                                                                                                                                                                                                                                                                  |
| POWER-ON RESET (POR)            |        |         |            |                       | Refers to voltage at DVDD pin                                                                                                                                                                                                                                    |
| POR Trip Level (DVDD)           | 1.6    |         | 1.77       | V                     | Power-on level, see Figure 18                                                                                                                                                                                                                                    |
|                                 | 1.62   | 1.66    | 1.7        | V                     | Power-down level (brownout)                                                                                                                                                                                                                                      |
| Timeout from POR                |        | 32      |            | ms                    |                                                                                                                                                                                                                                                                  |
| FLASH MEMORY                    |        |         |            |                       | 2× 512 kB, 128 kB SRAM                                                                                                                                                                                                                                           |
| Endurance                       | 10,000 |         |            | Cycles                |                                                                                                                                                                                                                                                                  |
| Data Retention                  | 10     |         |            | Years                 | Junction temperature (T J ) = 125°C                                                                                                                                                                                                                              |
|                                 | 20     |         |            | Years                 | T J = 85°C                                                                                                                                                                                                                                                       |
| INTERNAL HIGH POWER OSCILLATOR  |        | 16      |            | MHz                   |                                                                                                                                                                                                                                                                  |
| Accuracy                        |        |         | ±3         | %                     |                                                                                                                                                                                                                                                                  |
| TEMPERATURE SENSOR              |        |         |            |                       | Indicates die temperature                                                                                                                                                                                                                                        |
| Voltage Output at 25°C          |        | 0.13625 |            | V                     |                                                                                                                                                                                                                                                                  |
| Voltage Temperature Coefficient |        | 0.4568  |            | mV/°C                 |                                                                                                                                                                                                                                                                  |
| Accuracy                        | -3     | ±2      | +4.4       | °C                    |                                                                                                                                                                                                                                                                  |
| INTERNAL LOW POWER OSCILLATOR   |        | 32      |            | kHz                   |                                                                                                                                                                                                                                                                  |
| Accuracy                        | -10    | ±7      | +10        | %                     |                                                                                                                                                                                                                                                                  |
| 3.3 V GPIO                      |        |         |            |                       | IOVDD0 = 3.3 V                                                                                                                                                                                                                                                   |
| Logic Inputs                    |        |         |            |                       |                                                                                                                                                                                                                                                                  |
| Input Low Voltage (V INL )      |        |         | 0.99       | V                     | IOVDD × 0.3                                                                                                                                                                                                                                                      |
| Input High Voltage (V INH )     | 2      |         |            | V                     |                                                                                                                                                                                                                                                                  |
| Pull-Up Current                 | 120    | 160     | 210        | µA                    | V IN = 0 V                                                                                                                                                                                                                                                       |
| Pull-Down Current               | 125    | 163     | 210        | µA                    | V IN = 3.3 V                                                                                                                                                                                                                                                     |

## SPECIFICATIONS

Table 1.

| Parameter                              |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                                                                                      |
|----------------------------------------|-------|-------|-------|--------|-------------------------------------------------------------------------------------------------------------------------------|
| Internal Pull-Up/Pull-Down Disabled    |   -32 |    +1 |   +65 | nA     | IOVDD0 power source                                                                                                           |
| Logic Outputs                          |       |       |       |        |                                                                                                                               |
| Output High Voltage (V )               |   2.4 |       |       | V      | Source current (I SOURCE ) = 12 mA                                                                                            |
| OH Output Low Voltage (V OL )          |       |       |   0.4 | V      | Sink current (I SINK ) = 12 mA; for I 2 C SCL0, SCL2, SDA0, and SDA2, I SINK = 20 mA; for I 2 C SCL1 and SDA1, I SINK = 12 mA |
| Input Capacitor                        |       |       |    10 | pF     |                                                                                                                               |
| Short-Circuit Current                  |       |    13 |       | mA     |                                                                                                                               |
| 1.8 V GPIO                             |       |       |       |        | IOVDD1 = 1.8 V                                                                                                                |
| Logic Inputs                           |       |       |       |        |                                                                                                                               |
| V INL                                  |       |       |  0.54 | V      |                                                                                                                               |
| V INH                                  |  1.26 |       |       | V      |                                                                                                                               |
| Pull-Up Current                        |   155 |   194 |   240 | µA     | Input voltage (V IN ) = 0 V                                                                                                   |
| Pull-Down Current                      |   170 |   217 |   270 | µA     | V IN = 1.8 V                                                                                                                  |
| Internal Pull-Up or Pull-Down Disabled |  -500 |   +25 | +2000 | nA     | IOVDD1 power source                                                                                                           |
| Logic Outputs                          |       |       |       |        |                                                                                                                               |
| V OH                                   |   1.4 |       |       | V      | I SOURCE = 12 mA                                                                                                              |
| V OL                                   |       |       |   0.3 | V      | I SINK = 12 mA                                                                                                                |
| Input Capacitor                        |       |       |    10 | pF     |                                                                                                                               |
| Short-Circuit Current                  |       |    17 |       | mA     |                                                                                                                               |
| 1.2 V GPIO                             |       |       |       |        | IOVDD1 = 1.2 V                                                                                                                |
| Logic Inputs                           |       |       |       |        |                                                                                                                               |
| V INL                                  |       |       |  0.36 | V      |                                                                                                                               |
| V INH                                  |  0.84 |       |       | V      |                                                                                                                               |
| Pull-Up Current                        |    55 |    76 |   100 | µA     | V IN = 0 V                                                                                                                    |
| Pull-Down Current                      |    55 |    82 |   110 | µA     | V IN = 1.2 V                                                                                                                  |
| Internal Pull-Up/Pull-Down Disabled    |  -450 |   +20 | +1510 | nA     | IOVDD1 power source                                                                                                           |
| Logic Outputs                          |       |       |       |        |                                                                                                                               |
| V OH                                   |   1.0 |       |       | V      | I SOURCE = 6 mA                                                                                                               |
| V OL                                   |       |       |  0.18 | V      | I SINK = 6 mA                                                                                                                 |
| Input                                  |       |       |    10 | pF     |                                                                                                                               |
| Capacitor Short-Circuit Current        |       |     7 |       | mA     |                                                                                                                               |
| MDIO                                   |       |       |       |        |                                                                                                                               |
| Logic Inputs                           |       |       |       |        |                                                                                                                               |
| V INL                                  |       |       |  0.36 | V      |                                                                                                                               |
| V INH                                  |  0.84 |       |       | V      |                                                                                                                               |
| Logic Output                           |       |       |       |        |                                                                                                                               |
| V OH                                   |   1.0 |       |       | V      | I SOURCE = 4 mA                                                                                                               |
| V OL                                   |       |       |   0.2 | V      | I SINK = 4 mA                                                                                                                 |
| Input Capacitor                        |       |       |    10 | pF     |                                                                                                                               |
| Short-Circuit Current                  |       |     7 |       | mA     |                                                                                                                               |
| MICROCONTROLLER UNIT (MCU) CLOCK       |       |       |       |        |                                                                                                                               |
| RATE                                   |       |       |       |        |                                                                                                                               |
| Using PLL Output                       |       |   160 |   163 | MHz    |                                                                                                                               |
| EXTERNAL RESET                         |       |       |       |        |                                                                                                                               |
| Minimum Pulse Duration                 |    10 |       |       | µs     | Pin voltage must stay low for this period                                                                                     |
| PROCESSOR START-UP TIME                |       |       |       |        |                                                                                                                               |
| At Power-On                            |       |    32 |       | ms     | Includes kernel power-on execution time                                                                                       |
| After Reset Event                      |       |     1 |       | ms     | Includes kernel power-on execution time                                                                                       |

## SPECIFICATIONS

| Parameter                                   |   Min | Typ        |   Max | Unit        | Test Conditions/Comments                              |
|---------------------------------------------|-------|------------|-------|-------------|-------------------------------------------------------|
| After Processor Power-Down                  |       |            |       |             |                                                       |
| Core Sleep (Mode 1) 5                       |       | 30         |       | HCLK cycles | Fixed number of HCLK periods                          |
| System Sleep (Mode 2), Hibernate (Mode 3) 5 |       | 85         |       | µs          | HCLK = 160 MHz from PLL                               |
|                                             |       | 3          |       | µs          | HCLK = 16 MHz from internal oscillator                |
| POWER REQUIREMENTS                          |       |            |       |             |                                                       |
| Power Supply Voltage Range                  |       |            |       |             |                                                       |
| AVDD to AGND                                |  2.85 | 3.3        |   3.6 | V           |                                                       |
| DVDD to DGND                                |   1.8 | 1.8 or 3.3 |   3.6 | V           |                                                       |
| IOVDD0 to IOGND                             |  2.85 | 3.3        |   3.6 | V           |                                                       |
| IOVDD1 to IOGND                             |  1.08 | 1.2 or 1.8 |  1.98 | V           | If unused, can be tied to DVDD_REG or to DGND         |
| Analog Power Supply Currents                |       |            |       |             |                                                       |
| AVDD Current                                |       | 900        |  1050 | µA          | Analog peripherals in idle mode                       |
| Digital Power Supply Current                |       |            |       |             |                                                       |
| Current in Normal Mode                      |       |            |       |             | On power-up, GPIOs unloaded                           |
| IOVDD0                                      |       | 175        |   200 | µA          |                                                       |
| IOVDD1                                      |       | 20         |    60 | µA          |                                                       |
| DVDD Current                                |       | 12         |    30 | mA          |                                                       |
| Active Mode                                 |       |            |       |             | Executing typical code (current from all supplies)    |
|                                             |       | 16         |       | mA          | HCLK = 160 MHz from PLL                               |
|                                             |       | 4.8        |       | mA          | HCLK = 16 MHz from internal oscillator                |
| Core Sleep (Mode 1) 5                       |       | 11         |       | mA          | HCLK = 160 MHz from PLL                               |
|                                             |       | 4.3        |       | mA          | HCLK = 16 MHz from internal oscillator                |
| System Sleep (Mode 2) 5                     |       | 2.46       |    19 | mA          |                                                       |
| Hibernate (Mode 3) 5                        |       | 2.44       |    17 | mA          | Full clock, PLL = 160 MHz                             |
| Additional Power Supply Currents            |       |            |       |             |                                                       |
| ADC                                         |       | 2.8        |   3.4 | mA          | Continuously converting at 2 MSPS                     |
| PGA                                         |       | 0.375      | 0.465 | mA          | Per powered up PGA, excluding load current            |
| DAC                                         |       | 330        |   350 | µA          | Per powered up DAC, excluding load current            |
| Total Supply Current                        |       | 18.8       |       | mA          | Active mode with PLL clock of 160 MHz and ADC enabled |

1 These numbers are not production tested but are guaranteed by design and/or characterization data at production release.

2 FS is full scale.

3 VDAC linearity specifications generated using reduced DAC code range of 82 to 4095. For VDAC Channel 8 to Channel 11, end code of 4095 only used when AVDD - 0.7 V &gt; 2.5 V.

4 These options include 10 mV, 25 mV, 35 mV, 50 mV, 60 mV, 75 mV, 100 mV, 110 mV, 125 mV, 135 mV, 150 mV, 160 mV, 175 mV, 185 mV, 200 mV, and 210 mV.

5 In core sleep mode, the system gates the clock to the Cortex-M33 core after the Cortex-M33 enters sleep mode. In system sleep mode, the system gates the system bus clock and the peripheral bus clock after the Cortex-M33 enters sleep mode. See the ADuCM410 hardware reference manual for more information about the various power modes.

## SPECIFICATIONS

## TIMING SPECIFICATIONS

## I 2 C Timing

Table 2. I 2 C Timing in Standard Mode (100 kHz)-Slave/Master

| Parameter   | Description                                                                                                    |   Min |   Typ |   Max | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   4.7 |       |       | µs     |
| t H         | SCLx high pulse width                                                                                          |   4.0 |       |       | µs     |
| t SHD       | Start condition hold time                                                                                      |   4.0 |       |       | µs     |
| t DSU       | Data setup time                                                                                                |   250 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |  3.45 | µs     |
| t RSU       | Setup time for repeated start                                                                                  |   4.7 |       |       | µs     |
| t PSU       | Stop condition setup time                                                                                      |   4.0 |       |       | µs     |
| t BUF       | Bus free time between a stop condition and a start condition                                                   |   4.7 |       |       | µs     |
| t R         | Rise time for both SCLx and SDAx                                                                               |       |       |     1 | µs     |
| t F         | Fall time for both SCLx and SDAx                                                                               |       |    15 |   300 | ns     |
| t VD; DAT   | Data valid time                                                                                                |       |       |  3.45 | µs     |
| t VD; ACK   | Data valid acknowledge time                                                                                    |       |       |  3.45 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       |   400 | pF     |

Table 3. I 2 C Timing in Fast Mode (400 kHz)-Slave/Master

| Parameter   | Description                                                                                                    |   Min |   Typ |   Max | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   1.3 |       |       | µs     |
| t H         | SCLx high pulse width                                                                                          |   0.6 |       |       | µs     |
| t SHD       | Start condition hold time                                                                                      |   0.6 |       |       | µs     |
| t DSU       | Data setup time                                                                                                |   100 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |       | µs     |
| t RSU       | Setup time for repeated start                                                                                  |   0.6 |       |       | µs     |
| t PSU       | Stop condition setup time                                                                                      |   0.6 |       |       | µs     |
| t BUF       | Bus free time between a stop condition and a start condition                                                   |   1.3 |       |       | µs     |
| t R         | Rise time for both SCLx and SDAx                                                                               |    20 |       |   300 | ns     |
| t F         | Fall time for both SCLx and SDAx                                                                               |       |    15 |   300 | ns     |
| t VD; DAT   | Data valid time                                                                                                |       |       |   0.9 | µs     |
| t VD; ACK   | Data valid acknowledge time                                                                                    |       |       |   0.9 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       |   400 | pF     |

I 2 C GPIOs (P0.7 to P0.4 and P1.3 to P1.2) drive strength set to 20 mA.

Table 4. I 2 C Timing in Fast Mode Plus (1 MHz)-Slave/Master

| Parameter   | Description                                                                                                    |   Min | Typ   | Max   | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   0.5 |       |       | µs     |
| t H         | SCLx high pulse width                                                                                          |  0.26 |       |       | µs     |
| t SHD       | Start condition hold time.                                                                                     |  0.26 |       |       | µs     |
| t DSU       | Data setup time                                                                                                |    50 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |       | µs     |
| t RSU       | Setup time for repeated start                                                                                  |  0.26 |       |       | µs     |
| t PSU       | Stop condition setup time                                                                                      |  0.26 |       |       | µs     |
| t BUF       | Bus-free time between a stop condition and a start condition                                                   |   0.5 |       |       | µs     |

## SPECIFICATIONS

Table 4. I 2 C Timing in Fast Mode Plus (1 MHz)-Slave/Master

| Parameter   | Description                                               | Min   | Typ   |   Max | Unit   |
|-------------|-----------------------------------------------------------|-------|-------|-------|--------|
| t R         | Rise time for both SCLx and SDAx                          |       |       |   120 | ns     |
| t F         | Fall time for both SCLx and SDAx                          |       |       |   120 | ns     |
| t VD; DAT   | Data valid time                                           |       |       |  0.45 | µs     |
| t VD; ACK   | Data valid acknowledge time                               |       |       |  0.45 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2) |       |       |   550 | pF     |

I 2 C GPIOs (P0.7 to P0.4 and P1.3 to P1.2) drive strength set to 20 mA.

Table 5. I 2 C Timing in High Speed Mode (3.4 MHz)-Slave Only

| Parameter   | Description                                                                                                    |   Min | Typ   |   Max | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   160 |       |       | ns     |
| t H         | SCLx high pulse width                                                                                          |    60 |       |       | ns     |
| t SHD       | Start condition hold time.                                                                                     |   160 |       |       | ns     |
| t DSU       | Data setup time                                                                                                |    10 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |       | ns     |
| t RSU       | Setup time for repeated start                                                                                  |   160 |       |       | ns     |
| t PSU       | Stop condition setup time                                                                                      |   160 |       |       | ns     |
| t BUF       | Bus-free time between a stop condition and a start condition                                                   |   200 |       |       | ns     |
| t R         | Rise time for both SCLx and SDAx                                                                               |       |       |       |        |
|             | Up to C B = 100 pF                                                                                             |    10 |       |    40 | ns     |
|             | Up to C B = 400 pF                                                                                             |       |       |    80 | ns     |
| t F         | Fall time for both SCLx and SDAx                                                                               |    10 |       |    40 | ns     |
|             | Up to C B = 400 pF                                                                                             |       |       |    80 | ns     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       |   400 | pF     |

Figure 2. I 2 C-Compatible Interface Timing

<!-- image -->

## SPECIFICATIONS

## SPI Timing Specifications: Slave Mode

SPI GPIOs (P0.3 to P0.0, P1.7 to P1.4, and P2.7 to P2.4) drive strength set to 12 mA, IOVDD1 ≥ 1.2 V, and 40 MHz SPI clock.

See Figure 3 and Figure 4.

Table 6. SPI Slave Mode Timing

| Parameter                               | Symbol   |   Min |   Typ | Max   | Unit   |
|-----------------------------------------|----------|-------|-------|-------|--------|
| TIMING REQUIREMENTS                     |          |       |       |       |        |
| to SCLKx Edge                           | tCS      |    25 |       |       | ns     |
| Minimum valid CSx inactive period       | tCS M    |    25 |       |       | ns     |
| SCLKx Low Pulse Width                   | t SL     |       |    10 |       | ns     |
| SCLKx High Pulse Width                  | t SH     |       |    10 |       | ns     |
| Data Input Setup Time Before SCLKx Edge | t DSU    |     5 |       |       | ns     |
| Data Input Hold Time After SCLKx Edge   | t DHD    |     5 |       |       | ns     |
| SWITCHING CHARACTERISTICS               |          |       |       |       |        |
| Data Output Valid After SCLKx Edge      | t DAV    |       |    10 |       | ns     |
| Data Output Valid After CSx Edge        | t DOCS   |       |    15 |       | ns     |
| CSx High After SCLKx Edge               | t SFS    |       |  8.75 |       | ns     |

<!-- image -->

Figure 3. SPI Slave Mode Timing (Serial Clock Phase Mode, CTL Register, Bit 2, CPHA = 0)

Figure 4. SPI Slave Mode Timing (CPHA = 1)

<!-- image -->

## SPECIFICATIONS

## SPI Timing Specifications: Master Mode

SCLKx = 40 MHz, SPI GPIOs (P0.3 to P0.0, P1.7 to P1.4, and P2.7 to P2.4) pin drive strength set to 12 mA. IOVDD1 ≥ 1.2 V. DIV is the SPI clock divider in the SPI baud rate selection register (see the ADuCM410 hardware reference manual for more information). t HCLK is the time period of HCLK set up by the user.

Table 7. SPI Master Mode Timing (CPHA = 0 and 1)

| Parameter   | Description                             |   Min | Typ                   | Max   | Unit   |
|-------------|-----------------------------------------|-------|-----------------------|-------|--------|
| t SL        | SCLKx low pulse width                   |       | (DIV + 1) × t HCLK /2 |       | ns     |
| t SH        | SCLKx high pulse width                  |       | (DIV + 1) × t HCLK /2 |       | ns     |
| t DAV       | Data output valid after SCLKx edge      |     0 |                       |       | ns     |
| t DSU       | Data input setup time before SCLKx edge |     5 |                       |       | ns     |
| t DHD       | Data input hold time after SCLKx edge   |     5 |                       |       | ns     |
| t DF        | Data output fall time                   |       | 5                     |       | ns     |
| t DR        | Data output rise time                   |       | 5                     |       | ns     |
| t SR        | SCLKx rise time                         |       | 5                     |       | ns     |
| t SF        | SCLKx fall time                         |       | 5                     |       | ns     |

<!-- image -->

Figure 5. SPI Master Mode Timing (CPHA = 1)

Figure 6. SPI Master Mode Timing (CPHA = 0)

<!-- image -->

Table 8. MDIO vs. Management Data Clock (MDC) Timing

| Parameter 1             | Description                                             |   Min | Typ   |   Max | Unit   |
|-------------------------|---------------------------------------------------------|-------|-------|-------|--------|
| Maximum MCK Clock Speed | Push/pull mode                                          |       |       |    10 | MHz    |
|                         | Open-drain mode, pull-up resistance (R PULLUP ) = 312 Ω |       |       |     4 | MHz    |
| t SETUP                 | MDIO setup before MCK edge (push/pull mode)             |     5 |       |       | ns     |
|                         | Open-drain mode, R PULLUP = 312 Ω                       |    10 |       |       | ns     |
| t HOLD                  | MDIO valid after MCK edge (push/pull mode)              |     7 |       |       | ns     |
|                         | Open-drain mode, R PULLUP = 312 Ω                       |    10 |       |       | ns     |

## SPECIFICATIONS

Table 8. MDIO vs. Management Data Clock (MDC) Timing

| Parameter 1   | Description                                                                   | Min   | Typ   | Max    | Unit   |
|---------------|-------------------------------------------------------------------------------|-------|-------|--------|--------|
| t DELAY       | Data output after MCK edge (push/pull mode) Open-drain mode, R PULLUP = 312 Ω |       |       | 26 100 | ns     |

Figure 7. MDIO Timing

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 9. Parameter                                                    | Rating                                    |
|-----------------------------------------------------------------------|-------------------------------------------|
| AVDD to AGND                                                          | -0.3 V to +3.63 V                         |
| IOVDD0 to IOGND                                                       | -0.3 V to +3.63 V                         |
| IOVDD1 to IOGND                                                       | -0.3 V to +1.98 V                         |
| DVDD to DGND                                                          | -0.3 V to +3.63 V                         |
| AVDD to IOVDD0                                                        | IOVDD0 ± 0.3 V                            |
| Analog Input Voltage to AGND (AVDD Range = 2.85 V to 3.6 V)           | -0.3 V to AVDD + 0.3 V, must be ≤3.63 V   |
| Digital Input Voltage to IOGND                                        | -0.3 V to IOVDD0 + 0.3 V, must be ≤3.63 V |
| Digital Input Voltage to IOGND (P1.0 to P1.7 and P0.0 to P0.3 Only) 1 | -0.3 V to IOVDD1 + 0.3 V, must be ≤1.98 V |
| AGND to DGND                                                          | -0.3 V to +0.3 V                          |
| IOGND to DGND                                                         | -0.3 V to +0.3 V                          |
| Total Positive GPIO Pins Current                                      | 0 mA to 40 mA                             |
| Total Negative GPIO Pins Current                                      | -40 mA to 0 mA                            |
| Temperature Ranges                                                    |                                           |
| Storage                                                               | -65°C to +150°C                           |
| Operating                                                             | -40°C to +105°C                           |
| Reflow Profiles                                                       |                                           |
| SnPb Assemblies (10 sec to 30 sec)                                    | 240°C                                     |
| Pb-Free Assemblies (20 sec to 40 sec)                                 | 260°C                                     |
| Junction Temperature                                                  | 150°C                                     |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

Table 10. Thermal Resistance

| Package Type   |   θ JA 1 |   θ JC | Unit   |
|----------------|----------|--------|--------|
| BC-81-4        |       35 |  12.76 | °C/W   |
| CB-64-2        |       34 |   0.16 | °C/W   |

- 1 JEDEC 2S2P.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001. Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADuCM410

Table 11. ADuCM410, 81-Ball CSP\_BGA and 64-Ball WLCSP

| ESD Model   |   Withstand Threshold (kV) | Class   |
|-------------|----------------------------|---------|
| HBM         |                          3 | 2       |
| FICDM       |                        0.5 | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. BUF0\_VREF Load Regulation, 2.5 V Output Setting

<!-- image -->

Figure 9. BUF0\_VREF Load Regulation, 1.25 V Output Setting

<!-- image -->

Figure 10. Input Current vs. Voltage on AINx, f SAMPLE = 2 MSPS

<!-- image -->

Figure 11. ADC Input Current vs. Voltage on AINx, f SAMPLE = 100 kSPS

Figure 12. Temperature Sensor Accuracy, No Calibration, 240 Devices

<!-- image -->

Figure 13. Reference Voltage Drift vs. Temperature, 250 Devices

<!-- image -->

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Figure 14. 81-Ball CSP\_BGA Pin Configuration

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic               | Type 1   | Description                                                                                                                                                                     |
|------------|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A1         | VDAC1                  | AO       | Voltage DAC 1 Output.                                                                                                                                                           |
| A2         | VDAC3/P4.0/PLAI11      | AO/I/O   | Voltage DAC 3 Output (VDAC3). Digital Input/Output Port 4.0 (P4.0). Input to PLA Element 11 (PLAI11).                                                                           |
| A3         | VDAC7/P4.2             | AO/I/O   | Voltage DAC 7 Output (VDAC7). Digital Input/Output Port 4.2 (P4.2).                                                                                                             |
| A4         | RESET                  | I        | Reset Input (Active Low). An internal pull-up resistor is included with this pin.                                                                                               |
| A5         | P2.3/BM/PLAI10         | I/O      | Digital Input/Output Port 2.3 (P2.3). An internal pull-up resistor is enabled at power-up on P2.3. Boot Mode (BM). This pin determines the start-up sequence after every reset. |
| A6         | P2.5/MISO2/PLAO19      | I/O      | Digital Input/Output Port 2.5 (P2.5). SPI Channel 2 (SPI2) Master Input, Slave Output (MISO2). Output of PLA Element 19 (PLAO19).                                               |
| A7         | P2.6/IRQ5/SCLK2/PLAO20 | I/O      | Digital Input/Output Port 2.6 (P2.6). External Interrupt 5 (IRQ5). SPI2 Clock (SCLK2). Output of PLA Element 20 (PLAO20).                                                       |
| A8         | IOVDD0                 | S        | 3.3 V GPIO Supply.                                                                                                                                                              |
| A9         | IOGND                  | S        | Ground for Digital Inputs/Outputs.                                                                                                                                              |
| B1         | VREF                   | AO/AI    | 0.92 V Reference with a 100 nF Capacitor.                                                                                                                                       |
| B2         | AIN15/COM3N/BUF1_VREF  | AI/AO    | Analog Input 15 (AIN15). Comparator 3 Negative Input (COM3N).                                                                                                                   |
| B3         | VDAC6/P4.1/PLAO28      | AO/I/O   | Buffered Reference Voltage Source (BUF1_VREF). Voltage DAC 6 Output (VDAC6).                                                                                                    |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic                           | Type 1   | Description                                                                                                                                                                            |
|------------|------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B4         | SWDIO                              | I/O      | Output of PLA Element 2 (PLAO28). Serial Wire Bidirectional Data.                                                                                                                      |
| B5         | SWCLK                              | I        | Serial Wire Debug Clock.                                                                                                                                                               |
| B6         | P2.4/MOSI2/PLAO18                  | I/O      | Digital Input/Output Port 2.4 (P2.4). SPI2 Master Output, Slave Input (MOSI2). Output of PLA Element 18 (PLAO18).                                                                      |
| B7         | P2.7/IRQ6/CS2/PLAO21               | I/O      | Digital Input/Output Port 2.7 (P2.7). External Interrupt 6 (IRQ6). SPI2 Chip Select (CS2). Active low.                                                                                 |
| B8         | P0.4/SCL0/SIN0/PLAO2               | I/O      | Output of PLA Element 21 (PLAO21). Digital Input/Output Port 0.4 (P0.4). I 2 C Channel 0 (I 2 C0) Serial Clock (SCL0). UART Channel 0 (UART0) Input (SIN0).                            |
| B9         | P0.5/SDA0/SOUT0/PLAO3              | I/O      | Output of PLA Element 2 (PLAO2). Digital Input/Output Port 0.5 (P0.5). I 2 C0 Serial Data (SDA0). UART0 Output (SOUT0). Output of PLA Element 3 (PLAO3).                               |
| C1         | AIN0                               | AI       | Analog Input 0.                                                                                                                                                                        |
| C3         | AIN10/COM1P                        | AI       | PGA Channel 1 Positive Input(PADC1P). Analog Input 10 (AIN10). Comparator 1 Positive input (COM1P).                                                                                    |
| C4         | VDAC5/P4.4                         | AO       | Voltage DAC 5 Output (VDAC5). Digital Input/Output Port 4.4 (P4.4).                                                                                                                    |
| C5         | P2.2/POR/CLKOUT/SWO                | I/O      | Digital Input/Output Port 2.2 (P2.2). Reset Output (POR). This pin function is an output and it is the default. Clock Output (CLKOUT).                                                 |
| C6         | P2.0/ADCCONV/COMPDIN2/PLAI8        | I/O      | Serial Wire Debug Output (SWO). Digital Input/Output Port 2.0 (P2.0). External Input to Start ADC Conversions (ADCCONV). Comparator 2 Digital Input for Three-State (COMPDIN2).        |
| C7         | P2.1/DM/IRQ2/ECLKIN/COMPDIN3/PLAI9 | I/O      | Input to PLA Element 8 (PLAI8). Digital Input/Output Port 2.1 (P2.1). Download Mode Selection (DM). External Interrupt 2 (IRQ2).                                                       |
| C8         | P0.7/IRQ4/SDA2/COMPDIN1/PLAO5      | I/O      | Input to PLA Element 9 (PLAI9). Digital Input/Output Port 0.7 (P0.7). External Interrupt 4 (IRQ4). I 2 C Channel 2 (I 2 C2) Serial Data (SDA2).                                        |
| C9         | P0.6/IRQ3/SCL2/COMPDIN0/PLAO4      | I/O      | Output of PLA Element 5 (PLAO5). Digital Input/Output Port 0.6 (P0.6). External Interrupt 3 (IRQ3). I 2 C2 Serial Clock (SCL2). Comparator 0 Digital Input for Three-State (COMPDIN0). |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic                 | Type 1   | Description                                                                                                                                                                                                                              |
|------------|--------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1         | AIN1                     | AI       | Output of PLA Element 4 (PLAO4). Analog Input 1.                                                                                                                                                                                         |
| D2         | AIN2/PADC0P              | AI       | Analog Input 2 (AIN2). PGA Channel 0 Positive (PADC0P).                                                                                                                                                                                  |
| D3         | AIN11/COM1N/PGA0OUT      | AO/AI    | Analog Input 11 (AIN11). Comparator 1 Negative Input (COM1N). PGA Channel 0 Output (PGA0OUT).                                                                                                                                            |
| D4         | VDAC8/P5.0               | AO/I/O   | Voltage DAC 8 Output (VDAC8). Digital Input/Output Port 5.0 (P5.0).                                                                                                                                                                      |
| D5         | VDAC11/P5.3              | AO/I/O   | Voltage DAC 11 Output (VDAC11). Digital Input/Output Port 5.1 (P5.3).                                                                                                                                                                    |
| D6         | P5.6                     | I/O      | Digital Input/Output Port 5.6.                                                                                                                                                                                                           |
| D7         | P4.7/IRQ7/PLACLK2        | I/O      | Digital Input/Output Port 4.7 (P4.7). External Interrupt 7 (IRQ7). PLA Input Clock 2 (PLACLK2).                                                                                                                                          |
| D8         | IOGND                    | S        | Ground for Digital Inputs/Outputs.                                                                                                                                                                                                       |
| D9         | IOVDD1                   | S        | 1.2 V/1.8 V GPIO Supply. If unused, IOVDD1 can be tied to DVDD_REG or to DGND.                                                                                                                                                           |
| E1         | ADCREFN                  | AO/AI    | Decoupling Capacitor Connection for ADC Reference Buffer. Connect this pin to AGND.                                                                                                                                                      |
| E2         | AIN5/PADC2P              | AI       | Analog Input 5 (AIN5). PGA Channel 2 Positive Input (PADC2P).                                                                                                                                                                            |
| E3         | AIN12/COM2P              | AI       | Analog Input 12 (AIN12). Comparator 2 Positive Input (COM2P).                                                                                                                                                                            |
| E4         | VDAC9/P5.1               | AO/I/O   | Voltage DAC 9 Output (VDAC9). Digital Input/Output Port 5.1 (P5.1).                                                                                                                                                                      |
| E5         | DNC                      |          | Do Not Connect. Keep this pin floating.                                                                                                                                                                                                  |
| E6         | P5.5                     | I/O      | Digital Input/Output Port 5.5.                                                                                                                                                                                                           |
| E7         | P1.2/SCL1/PWM0/PLAI6     | I/O      | Digital Input/Output Port 1.2 (P1.2). I 2 C Channel 1 (I 2 C1) Serial Clock (SCL1). PWM Output 0 (PWM0). Input to PLA Element 6 (PLAI6). Ball E7 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 |
| E8         | P1.1/SOUT1/COMOUT3/PLAI5 | I/O      | V is the default. Digital Input/Output Port 1.1 (P1.1). UART1 Output (SOUT1). Comparator 3 Output (COMOUT3). Input to PLA Element 5 (PLAI5).                                                                                             |
| E9         | P1.0/SIN1/COMOUT2/PLAI4  | I/O      | Digital Input/Output Port 1.0 (P1.0). UART1 Input (SIN1). Comparator 2 Output (COMOUT2). Input to PLA Element 4 (PLAI4). Ball E9 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                 |
| F1         | ADCREFP                  | AO/AI    | V is the default. Decoupling Capacitor Connection for ADC Reference Buffer with 4.7 µF Decoupling Capacitor.                                                                                                                             |
| F2         | AIN6/PADC3P              | AI       | Analog Input 6 (AIN6). PGA Channel 3 Positive Input (PADC3P).                                                                                                                                                                            |
| F3         | AIN9/COM0N/PGA2OUT       | AO/AI    | Analog Input 9 (AIN9).                                                                                                                                                                                                                   |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic                     | Type 1   | Description                                                                                                                                                                                                                                                   |
|------------|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| F4         | VDAC10/P5.2                  | AO/I/O   | PGA Channel 2 Output (PGA2OUT). Voltage DAC 10 Output (VDAC10). Digital Input/Output Port 5.2 (P5.2).                                                                                                                                                         |
| F5         | P5.4                         | I/O      | Digital Input/Output Port 5.4.                                                                                                                                                                                                                                |
| F6         | P4.5/PWM7                    | I/O      | Digital Input/Output Port 4.5 (P4.5). PWM Output 7 (PWM7).                                                                                                                                                                                                    |
| F7         | P1.3/SDA1/PWM1/PLAI7         | I/O      | Digital Input/Output Port 1.3 (P1.3). I 2 C1 Serial Data (SDA1). PWM Output 1 (PWM1). Input to PLA Element 7 (PLAI7). Ball F7 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                                         |
| F8         | P0.1/MISO0/COMOUT1/PLAI1     | I/O      | Digital Input/Output Port 0.1 (P0.1). SPI Channel 0 (SPI0) Master Input, Slave Output (MISO0). Comparator 1 Output (COMOUT1). Input to PLA Element 1 (PLAI1). Ball F8 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 |
| F9         | P0.0/SCLK0/COMOUT0/PLAI0     | I/O      | V is the default. Digital Input/Output Port 0.0 (P0.0). SPI0 Clock (SCLK0). Comparator 0 Output (COMOUT0). Input to PLA Element 0 (PLAI0). Ball F9 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                    |
| G1         | AIN4/PADC01N/VDAC0           | AI/AO    | Analog Input 4 (AIN4). PGA Channel 0/PGA Channel 1 Negative Input (PADC01N). Voltage DAC 0 Output (VDAC0).                                                                                                                                                    |
| G2         | AIN14/COM3P/BUF0_VREF        | AI/AO    | Analog Input 14 (AIN14). Comparator 3 Positive Input (COM3P). Buffered Reference Voltage Source (BUF0_VREF).                                                                                                                                                  |
| G3         | AIN8/COM0P                   | AI       | Analog Input 8 (AIN8).                                                                                                                                                                                                                                        |
| G4         | P3.2/PRTADDR2/PWMTRIP/PLAI14 | I/O      | Comparator 0 Positive Input (COM0P). Digital Input/Output Port 3.2 (P3.2). MDIO Port Address Bit 2 (PRTADDR2). PWM Trip (PWMTRIP). Input to PLA Element 14 (PLAI14).                                                                                          |
| G5         | P3.3/PRTADDR3/SIN0/PLAI15    | I/O      | Digital Input/Output Port 3.3 (P3.3). MDIO Port Address Bit 3 (PRTADDR3). UART0 Input (SIN0). Input of PLA Element 15 (PLAI15).                                                                                                                               |
| G6         | P4.3/PWM6                    | I/O      | Digital Input/Output Port 4.3 (P4.3). PWM Output 6 (PWM6).                                                                                                                                                                                                    |
| G7         | P1.4/SCLK1/PWM2/PLAO10       | I/O      | Digital Input/Output Port 1.4 (P1.4). SPI Channel 1 (SPI1) Clock (SCLK1). PWM Output 2 (PWM2). Output of PLA Element 10 (PLAO10). Ball G7 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default.           |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic                        | Type 1   | Description                                                                                                                                                                                                                                                                     |
|------------|---------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| G8         | P0.3/IRQ0/CS0/PLACLK0/PLAI3     | I/O      | Digital Input/Output Port 0.3 (P0.3). External Interrupt 0 (IRQ0). SPI0 Chip Select (CS0). Active low. PLA Clock 0 (PLACLK0). Input to PLA Element 3 (PLAI3). Ball G8 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. |
| G9         | P0.2/MOSI0/PLACLK1/PLAI2        | I/O      | Digital Input/Output Port 0.2 (P0.2). SPI0 Master Output, Slave Input (MOSI0). PLA Clock 1 (PLACLK1). Input to PLA Element 2 (PLAI2). Ball G9 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                                           |
| H1         | AIN7/PADC23N/VDAC2              | AI/AO    | Analog Input 7 (AIN7). PGA Channel 2/PGA Channel 3 Negative Input (PADC23N). Voltage DAC 2 Output (VDAC2).                                                                                                                                                                      |
| H2         | AIN13/COM2N                     | AI       | Analog Input 13 (AIN13). Comparator 2 Negative Input (COM2N).                                                                                                                                                                                                                   |
| H3         | AGND                            | S        | Analog Ground.                                                                                                                                                                                                                                                                  |
| H4         | P3.1/PRTADDR1/PWMSYNC/PLAI13    | I/O      | Digital Input/Output Port 3.1 (P3.1). MDIO Port Address Bit 1 (PRTADDR1). PWM Synchronization (PWMSYNC). Input to PLA Element 13 (PLAI13).                                                                                                                                      |
| H5         | P3.4/IRQ9/PRTADDR4/SOUT0/PLAO26 | I/O      | Digital Input/Output Port 3.4 (P3.4). External Interrupt 9 (IRQ9). MDIO Port Address Bit 4 (PRTDR4). UART0 Output (SOUT0). Output of PLA Element 26 (PLAO26).                                                                                                                   |
| H6         | P3.7/PLAO29                     | I/O      | Digital Input/Output Port 3.7 (P3.7). Output of PLA Element 29 (PLAO29).                                                                                                                                                                                                        |
| H7         | P1.5/MISO1/PWM3/PLAO11          | I/O      | Digital Input/Output Port 1.5 (P1.5). SPI1 Master Input, Slave Output (MISO1). PWM Output 3 (PWM3). Output of PLA Element 11 (PLAO11). Ball H7 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                                          |
| H8         | DGND                            | S        | Digital Ground.                                                                                                                                                                                                                                                                 |
| H9         | DVDD                            | S        | 1.8 V/3.3 V Digital Power Supply.                                                                                                                                                                                                                                               |
| J1         | VDAC4                           | AO       | Voltage DAC 4 Output.                                                                                                                                                                                                                                                           |
| J2         | AVDD_REG                        | AO       | 2.5 V Analog Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use AVDD_REG to power external circuits.                                                                                                                                                                |
| J3         | AVDD                            | S        | 3.3 V Analog Power Supply.                                                                                                                                                                                                                                                      |
| J4         | P3.0/IRQ8/PRTADDR0/SRDY0/PLAI12 | I/O      | Digital Input/Output Port 3.0 (P3.0). External Interrupt 8 (IRQ8). MDIO Port Address Bit 0 (PRTADDR0). SPI0 Ready (SRDY0).                                                                                                                                                      |
| J5         | P3.5/MCK/SRDY1/PLAO27           | I/O      | Input to PLA Element 12 (PLAI12). Digital Input/Output Port 3.5 (P3.5). MDIO Slave Clock (MCK).                                                                                                                                                                                 |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 12. 81-Ball CSP\_BGA Pin Configuration Descriptions

| Ball No.   | Mnemonic                  | Type 1   | Description                                                                                                                                                                                                                                                                      |
|------------|---------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J6         | P3.6/MDIO/SRDY2/PLAO30    | I/O      | SPI1 Ready (SRDY1). Output of PLA Element 27 (PLAO27). Digital Input/Output Port 3.6 (P3.6). MDIO Slave Data (MDIO). SPI2 Ready (SRDY2). Output of PLA Element 30 (PLAO30).                                                                                                      |
| J7         | P1.6/MOSI1/PWM4/PLAO12    | I/O      | Digital Input/Output Port 1.6 (P1.6). SPI1 Master Output, Slave Input (MOSI1). PWM Output 4 (PWM4). Output of PLA Element 12 (PLAO12). Ball J7 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                                           |
| J8         | P1.7/IRQ1/CS1/PWM5/PLAO13 | I/O      | V is the default. Digital Input/Output Port 1.7 (P1.7). External Interrupt 1 (IRQ1). SPI1 Chip Select (CS1). Active low. PWM Output 5 (PWM5). Output of PLA Element 13 (PLAO13). Ball J8 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 |
| J9         | DVDD_REG                  | AO       | 1.1 V Digital Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use DVDD_REG to power external circuits.                                                                                                                                                                |

Figure 15. 64-Ball WLCSP Pin Configuration

<!-- image -->

Table 13. 64-Ball WLCSP Pin Function Descriptions

| Pin No.   | Mnemonic                    | Type 1   | Description                           |
|-----------|-----------------------------|----------|---------------------------------------|
| A1        | IOGND                       | S        | Ground for Digital Inputs/Outputs.    |
| A2        | P2.0/ADCCONV/COMPDIN2/PLAI8 | I/O      | Digital Input/Output Port 2.0 (P2.0). |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 13. 64-Ball WLCSP Pin Function Descriptions

| Pin No.   | Mnemonic                           | Type 1   | Description                                                                                                                                                                                                                                                     |
|-----------|------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A3        | P2.1/DM/IRQ2/ECLKIN/COMPDIN3/PLAI9 | I/O      | Input to PLA Element 8 (PLAI8). Digital I/O Port 2.1 (P2.1). Download Mode Selection (DM). External Interrupt 2 (IRQ2). External Input Clock (ECLKIN). Comparator 3 Digital Input for Three-State (COMPDIN3). Input to PLA Element 9 (PLAI9).                   |
| A4        | SWDIO                              | I/O      | Serial Wire Bidirectional Data.                                                                                                                                                                                                                                 |
| A5        | VDAC7                              | AO       | Voltage DAC 7 Output.                                                                                                                                                                                                                                           |
| A6        | VDAC6                              | AO       | Voltage DAC 6 Output.                                                                                                                                                                                                                                           |
| A7        | VDAC5                              | AO       | Voltage DAC 5 Output.                                                                                                                                                                                                                                           |
| A8        | VDAC3                              | AO       | Voltage DAC 3 Output.                                                                                                                                                                                                                                           |
| B1        | P0.3/IRQ0/CS0/PLACLK0/PLAI3        | I/O      | Digital Input/Output Port 0.3 (P0.3). External Interrupt 0 (IRQ0). SPI0 Chip Select (CS0). PLA Clock 0 (PLACLK0).                                                                                                                                               |
| B2        | P0.2/MOSI0/PLACLK1/PLAI2           | I/O      | Digital Input/Output Port 0.2 (P0.2). SPI0 Master Out, Slave In (MOSI0). PLA Clock 1 (PLACLK1). Input to PLA Element 2 (PLAI2). Ball B2 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                                 |
| B3        | P2.3/BM/PLAI10                     | I/O      | V is the default. Digital Input/Output Port 2.3 (P2.3). An internal pull-up resistor is enabled at power-up on P2.3. Boot Mode (BM). This pin determines the start-up sequence after every reset. Input to PLA Element 10 (PLAI10).                             |
| B4        | SWCLK                              | I        | Serial Wire Debug Clock.                                                                                                                                                                                                                                        |
| B5        | RESET                              | I        | Reset Input (Active Low). An internal pull-up resistor is included with this pin.                                                                                                                                                                               |
| B6        | VDAC1                              | AO       | Voltage DAC 1 Output.                                                                                                                                                                                                                                           |
| B7        | VREF                               | AO/AI    | 0.92 V Reference with a 100 nF Capacitor.                                                                                                                                                                                                                       |
| B8        | AVDD                               | S        | 3.3 V Analog Power Supply.                                                                                                                                                                                                                                      |
| C1        | IOVDD1                             | S        | 1.2 V/1.8 V GPIO Supply. If unused, IOVDD1 can be tied to DVDD_REG or to DGND.                                                                                                                                                                                  |
| C2        | P0.1/MISO0/COMOUT1/PLAI1           | I/O      | Digital Input/Output Port 0.1 (P0.1). SPI 0 Master Input, Slave Output (MISO0). Comparator 1 Output (COMOUT1) Input to PLA Element 1 (PLAI1). Ball C2 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. |
| C3        | P0.0/SCLK0/COMOUT0/PLAI0           | I/O      | Digital Input/Output Port 0.0 (P0.0). SPI 0 Clock (SCLK0). Comparator 0 Output (COMOUT0). Input to PLA Element 0 (PLAI0). Ball C3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default.                     |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 13. 64-Ball WLCSP Pin Function Descriptions

| Pin No.   | Mnemonic                 | Type 1   | Description                                                                                                                                                                                                                                 |
|-----------|--------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C4        | P1.0/SIN1/COMOUT2/PLAI4  | I/O      | Digital Input/Output Port 1.0 (P1.0). UART Input 1 (SIN1). Comparator 2 Output (COMOUT2). Input to PLA Element 4 (PLAI4). Ball C4 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. |
| C5        | P2.2/POR/CLKOUT/SWO      | I/O      | Digital Input/Output Port 2.2 (P2.2). Reset Output (POR). This pin function is an output, and it is the default. Clock Output (CLKOUT).                                                                                                     |
| C6        | AIN14/COM3P/BUF0_VREF    | AI/AO    | Analog Input 14 (AIN14). Comparator 3 Positive Input (COM3P).                                                                                                                                                                               |
| C7        | AIN2/PADC0P              | AI       | Buffered Reference Voltage source (BUF0_VREF). Analog Input 2 (AIN2). PGA Channel 0 Positive (PADC0P).                                                                                                                                      |
| C8        | AIN4/PADC01N/VDAC0       | AI/AO    | Analog Input 4 (AIN4). PGA Channel 0/PGA Channel 1 Negative Input (PADC01N).                                                                                                                                                                |
| D1        | DVDD_REG                 | AO       | Voltage DAC 0 Output (VDAC0). 1.1 V Digital Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use DVDD_REG to power external circuits.                                                                                             |
| D2        | DGND                     | S        | Digital Ground.                                                                                                                                                                                                                             |
| D3        | P1.2/SCL1/PWM0/PLAI6     | I/O      | Digital Input/Output Port 1.2 (P1.2). I 2 C1 Serial Clock (SCL1). PWM Output 0 (PWM0). Input to PLA Element 6 (PLAI6). Ball D3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                      |
| D4        | P1.3/SDA1/PWM1/PLAI7     | I/O      | Digital Input/Output Port 1.3 (P1.3). I 2 C1 Serial Data (SDA1). PWM Output 1 (PWM1). Input to PLA Element 7 (PLAI7). Ball D4 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                       |
| D5        | P1.1/SOUT1/COMOUT3/PLAI5 | I/O      | Digital Input/Output Port 1.1 (P1.1). UART Channel 1 (UART1) Output (SOUT1). Comparator 3 Output (COMOUT3) Input to PLA Element 5 (PLAI5). Ball D5 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3  |
| D6        | AIN3/PADC1P              | AI       | Analog Input 3 (AIN3). PGA Channel 1 Positive Input (PADC1P).                                                                                                                                                                               |
| D7        | AIN0                     | AI       | Analog Input 0.                                                                                                                                                                                                                             |
| D8        | AIN10/COM1P              | AI       | Analog Input 10 (AIN10). Comparator 1 Positive Input (COM1P).                                                                                                                                                                               |
| E1        | IOVDD0                   | S        | 3.3 V GPIO Supply.                                                                                                                                                                                                                          |
| E2        | IOGND                    | S        | Ground for Digital Inputs/Outputs.                                                                                                                                                                                                          |
| E3        | P1.4/SCLK1/PWM2/PLAO10   | I/O      | Digital Input/Output Port 1.4 (P1.4). SPI1 Clock (SCLK1). PWM Output 2 (PWM2).                                                                                                                                                              |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 13. 64-Ball WLCSP Pin Function Descriptions

| Pin No.   | Mnemonic                      | Type 1   | Description                                                                                                                                                                                                                                           |
|-----------|-------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| E4        | P1.7/IRQ1/CS1/PWM5/PLAO13     | I/O      | Ball E3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. Digital Input/Output Port 1.7 (P1.7). External Interrupt 1 (IRQ1). SPI1 Chip Select (CS1). PWM Output 5 (PWM5).                     |
| E5        | VDAC8/P5.0                    | AO/I/O   | V is the default. Voltage DAC 8 Output (VDAC8). Digital Input/Output Port 5.0 (P5.0).                                                                                                                                                                 |
| E6        | AIN12/COM2P                   | AI       | Analog Input 12 (AIN12).                                                                                                                                                                                                                              |
| E7        | AGND                          | S        | Comparator 2 Positive Input (COM2P). Analog Ground.                                                                                                                                                                                                   |
| E8        | AVDD_REG                      | AO       | 2.5 V Analog Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use AVDD_REG to power external circuits.                                                                                                                                      |
| F1        | P1.5/MISO1/PWM3/PLAO11        | I/O      | Digital Input/Output Port 1.5 (P1.5). SPI1 Master Input, Slave Output (MISO1). PWM Output 3 (PWM3). Output of PLA Element 11 (PLAO11). Ball F1 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3                |
| F2        | P1.6/MOSI1/PWM4/PLAO12        | I/O      | V is the default. Digital Input/Output Port 1.6 (P1.6). SPI1 Master Out, Slave Input (MOSI1). PWM Output 4 (PWM4). Output of PLA Element 12 (PLAO12). Ball F2 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 |
| F3        | P0.7/IRQ4/SDA2/COMPDIN1/PLAO5 | I/O      | V is the default. Digital Input/Output Port 0.7 (P0.7). External Interrupt 4 (IRQ4). I 2 C2 Serial Data (SDA2). Comparator 1 Digital Input for Three-State (COMPDIN1).                                                                                |
| F4        | P3.2/PRTADDR2/PWMTRIP/PLAI14  | I/O      | Digital Input/Output Port 3.2 (P3.2). MDIO Port Address Bit 2 (PRTADDR2). PWM Trip (PWMTRIP). Input to PLA Element 14 (PLAI14).                                                                                                                       |
| F5        | VDAC9/P5.1                    | AO/I/O   | Voltage DAC 9 Output (VDAC9). Digital Input/Output Port 5.1 (P5.1).                                                                                                                                                                                   |
| F6        | AIN8/COM0P                    | AI       | Analog Input 8 (AIN8). Comparator 0 Positive Input (COM0P).                                                                                                                                                                                           |
| F7        | ADCREFN                       | AO/AI    | Decoupling Capacitor Connection for ADC. Connect ADCREFN to AGND.                                                                                                                                                                                     |
| F8        | ADCREFP                       | AO/AI    | Decoupling Capacitor Connection for ADC Reference Buffer with 4.7 µF Decoupling Capacitor.                                                                                                                                                            |
| G1        | P0.4/SCL0/SIN0/PLAO2          | I/O      | Digital Input/Output Port 0.4 (P0.4). I 2 C0 Serial Clock (SCL0). UART0 Input (SIN0).                                                                                                                                                                 |
| G2        | P0.5/SDA0/SOUT0/PLAO3         | I/O      | Output of PLA Element 2 (PLAO2). Digital Input/Output Port 0.5 (P0.5).                                                                                                                                                                                |

## PIN CONFIGURATIONS AND FUNCTION DESCRIPTIONS

Table 13. 64-Ball WLCSP Pin Function Descriptions

| Pin No.   | Mnemonic                      | Type 1   | Description                                                                                                                                                                                                  |
|-----------|-------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| G3        | P0.6/IRQ3/SCL2/COMPDIN0/PLAO4 | I/O      | UART0 Output (SOUT0). Output of PLA Element 3 (PLAO3). Digital Input/Output Port 0.6 (P0.6). External Interrupt 3 (IRQ3). I 2 C2 Serial Clock (SCL2). Comparator 0 Digital Input for Three-State (COMPDIN0). |
| G4        | P3.1/PRTADDR1/PWMSYNC/PLAI13  | I/O      | Digital Input/Output Port 3.1 (P3.1). MDIO Port Address Bit 1 (PRTADDR1). PWM Synchronization (PWMSYNC).                                                                                                     |
| G5        | VDAC11/P5.3                   | AO/I/O   | Voltage DAC 11 Output (VDAC11). Digital Input/Output Port 5.1 (P5.3).                                                                                                                                        |
| G6        | AIN7/PADC23N/VDAC2            | AI/AO    | Analog Input 7 (AIN7). PGA Channel 2/PGA Channel 3 Negative Input (PADC23N). Voltage DAC 2 Output (VDAC2).                                                                                                   |
| G7        | AIN1                          | AI       | Analog Input 1.                                                                                                                                                                                              |
| G8        | AIN9/COM0N                    | AI       | Analog Input 9 (AIN9). Comparator 0 Negative Input (COM0N).                                                                                                                                                  |
| H1        | IOGND                         | S        | Ground for Digital Inputs/Outputs.                                                                                                                                                                           |
| H2        | DVDD                          | S        | 1.8 V/3.3 V Digital Power Supply.                                                                                                                                                                            |
| H3        | P3.6/MDIO                     | I/O      | Digital Input/Output Port 3.6 (P3.6).                                                                                                                                                                        |
| H4        | P3.5/MCK/SRDY1/PLAO27         | I/O      | Digital Input/Output Port 3.5 (P3.5). MDIO Slave Clock (MCK). See the Silicon Anomaly section. SPI1 Ready (SRDY1).                                                                                           |
| H5        | P3.0/PRTADDR0/SRDY0/PLAI12    | I/O      | Output of PLA Element 27 (PLAO27). Digital Input/Output Port 3.0 (P3.0). MDIO Port Address Bit 0 (PRTADDR0). SPI 0 Ready (SRDY0). Input to PLA Element 12 (PLAI12).                                          |
| H6        | VDAC10/P5.2                   | AO/I/O   | Voltage DAC 10 Output (VDAC10). Digital Input/Output Port 5.2 (P5.2).                                                                                                                                        |
| H7        | VDAC4                         | AO       | Voltage DAC 4 Output.                                                                                                                                                                                        |
| H8        | AIN13/COM2N                   | AI       | Analog Input 13 (AIN13). Comparator 2 Negative Input (COM2N).                                                                                                                                                |

## THEORY OF OPERATION

The ADuCM410 is an on-chip system. The ADuCM410 is mixedsignal microcontroller based on the Arm Cortex-M33 processor.

See the ADuCM410 hardware reference manual for full details on the operation of the ADuCM410, including, but not limited to, all register details and information about the various features and operation of the power management unit, the Arm Cortex-M33 processor, the ADC circuit, the flash controller, and the SPI, I 2 C, and UART interfaces.

## RMS NOISE RESOLUTION OF ADC

The rms noise specifications for the ADC with different ADC digital filter settings are described in Table 14.

The internal 2.5 V reference was used for all measurements.

For gain = 1, single-ended measurements with V IN = 2 V was used.

For PGA gains ≥ 2, a differential input voltage was applied, ensuring the PGA output to the ADC was always 2 V. For example, for gain = 4, V IN = 500 mV.

Table 15 shows the rms and peak-to-peak effective number of bits based on the noise results in Table 14 for various PGA gain set-

## Table 14. ADC RMS Noise

|                  | Oversampling Ratio   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   | RMS Noise (μV), PGA Output Voltage = 2 V for All Settings   |
|------------------|----------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Update Rate (Hz) | (OSR)                | Gain = 1                                                    | Gain = 2                                                    | Gain = 4                                                    | Gain = 6                                                    | Gain = 8                                                    | Gain = 10                                                   |
| 2,000,000        | 1                    | 81.3                                                        | Not applicable                                              | Not applicable                                              | Not applicable                                              | Not applicable                                              | Not applicable                                              |
| 50,000           | 8                    | 32.44                                                       | 30.8                                                        | 17.4                                                        | 11.9                                                        | 7.5                                                         | 5.2                                                         |
| 20,000           | 32                   | 20.15                                                       | Not applicable                                              | Not applicable                                              | Not applicable                                              | Not applicable                                              | Not applicable                                              |
| 5000             | 16                   | Not applicable                                              | 13.4                                                        | 10.0                                                        | 11.5                                                        | 9.96                                                        | 10.78                                                       |
| 5000             | 8                    | Not applicable                                              | 15.8                                                        | 11.47                                                       | 12.7                                                        | 10.6                                                        | 11.4                                                        |

Table 15. ADC Effective Bits, Based on RMS Noise (Peak-to-Peak Effective Bits in Parenthesis)

|   Update Rate (Hz) |   Sinc3 OSR | Gain = 1         | Gain = 2        | Gain = 4        | Gain = 6         | Gain = 8         | Gain = 10       |
|--------------------|-------------|------------------|-----------------|-----------------|------------------|------------------|-----------------|
|          2,000,000 |           1 | 14.9 (12.18 p-p) | Not applicable  | Not applicable  | Not applicable   | Not applicable   | Not applicable  |
|             50,000 |           8 | 16 (13.5 p-p)    | 15.3 (12.6 p-p) | 15.1 (12.4 p-p) | 15.1 (12.37 p-p) | 15.3 (12.6 p-p)  | 15.5 (12.8 p-p) |
|             20,000 |          32 | 16 (14.19 p-p)   | Not applicable  | Not applicable  | Not applicable   | Not applicable   | Not applicable  |
|               5000 |          16 | Not applicable   | 16 (13.78 p-p)  | 15.9 (13.2 p-p) | 15.15 (12.4 p-p) | 14.9 (12.2 p-p)  | 14.5 (11.8 p-p) |
|               5000 |           8 | Not applicable   | 16 (13.54 p-p)  | 15.73 (13 p-p)  | 15 (12.27 p-p)   | 14.85 (12.1 p-p) | 14.4 (11.7 p-p) |

tings. Peak-to-peak effective bit results are shown in parentheses. RMS bits are calculated as follows:

log Input Range RMS Noise (1) Peak-to-peak bits are calculated as follows: log 2 Input Range 6.6 × RMS Noise (2)

## APPLICATIONS INFORMATION

## POWER SUPPLIES

The ADuCM410 operational power supply voltage range is 2.85 V to 3.6 V for AVDD and IOVDD0. IOVDD1 can be 1.2 V, 1.8 V, or the same as IOVDD0. The DVDD range is 1.8 V to 3.6 V. Separate analog (AVDD) and digital power supply pins (IOVDD1 and DVDD) allow AVDD to be kept relatively free of noisy digital signals often present in the system DVDD line. In this mode, the ADuCM410 can also operate with split supplies. That is, the device can use different voltage levels for each supply (see Table 1). A typical split supply configuration is shown in Figure 16.

Figure 16. External Multiple Supply Connections

<!-- image -->

As an alternative to providing two separate power supplies, the user can reduce noise on AVDD by placing a small series resistor and/or ferrite bead between AVDD and DVDD, and then decoupling AVDD separately to ground. An example of this configuration is shown in Figure 17. With this configuration, other analog circuitry (such as op amps and voltage reference) can be powered from the AVDD supply line as well.

Figure 17. External Single-Supply Connections

<!-- image -->

In both Figure 16 and Figure 17, a large value (10 µF) reservoir capacitor is connected to DVDD, and a separate 10 µF capacitor is connected to AVDD. In addition, local small value (0.1 µF) capacitors are located at each AVDD, IOVDD0, IOVDD1, and DVDD pin of the chip. Include all recommended capacitors shown, and ensure that the smaller capacitors are close to each supply pin with trace lengths as short as possible. Connect the ground terminal of each of these capacitors directly to the underlying ground plane.

The analog and digital ground pins on the ADuCM410 must be referenced to the same system ground reference point.

## POWER-UP REQUIREMENTS

Figure 18 and Figure 19 show the power-up requirements for DVDD and AVDD. Figure 20 shows the power-up requirement for IOVDD0 if no external pull-up is applied to the P2.3/BM/PLAI10 pin.

<!-- image -->

Figure 18. DVDD Power-Up Requirements

Figure 19. AVDD Power-Up Requirements

<!-- image -->

Figure 20. IOVDD0 Power-Up Requirement, No External Pull-Up

<!-- image -->

## RECOMMENDED CIRCUIT AND COMPONENT VALUES

Figure 21 shows a typical connection diagram for the ADuCM410.

Adequately decouple the supplies and regulators with capacitors connected between the AVDD\_REG, DVDD\_REG, and IOVDDx balls and their associated ground balls (AGND and DGND). Table 12 and Table 13 indicate which ground balls are paired with which supply balls.

## APPLICATIONS INFORMATION

There are three digital supply balls, IOVDD0, IOVDD1, and DVDD. Decouple these balls with a 0.1 µF capacitor placed as near as possible to each of the three balls and their associated ground balls (IOGND and DGND). In addition, place a 10 μF capacitor near these balls. For DVDD, to improve noise reduction, place a ferrite bead in series with a 10 μF capacitor to DGND.

Similarly, the analog supply pin (AVDD) requires a 0.1 µF capacitor placed as near as possible to each ball and its associated AGND ball. Also, place a 10 μF capacitor near these balls.

The ADC reference requires a 4.7 μF capacitor be placed between ADCREFP and ADCREFN and located as near as possible to each ball. ADCREFN must be connected directly to AGND. The ADuCM410 contains two internal regulators. These regulators require external decoupling capacitors. The DVDD\_REG and AVDD\_REG balls each require a 0.47 µF capacitor to DGND and AGND, respectively. Take care in the layout to ensure that currents flowing from the ground end of each decoupling capacitor to its associated ground ball share as little track as possible with other ground currents on the PCB.

Figure 21. Recommended Circuit and Component Values (ADuCM410, LT3022EMSE, and ADP7104ARDZ-3.3)

<!-- image -->

## SILICON ANOMALY

This anomaly list describes the known bugs, anomalies, and workarounds for the ADuCM410 microcontroller Revision B silicon. The anomaly listed applies to the WLCSP ADuCM410 packaged material that is branded as follows:

First Line

ADuCM410

Third Line

B90 or newer (revision identifier)

The anomaly does not apply to the CSP\_BGA version of the ADuCM410.

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improve silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined here.

## ADUCM410 FUNCTIONALITY ISSUES

| Silicon Revision Identifier   |   Kernel Revision Identifier | Chip Marking            | Silicon Status   | Anomaly Sheet   |   No. of Reported Anomalies |
|-------------------------------|------------------------------|-------------------------|------------------|-----------------|-----------------------------|
| B                             |                            0 | All silicon branded B90 | Release          | Rev. 0          |                           1 |

## FUNCTIONALITY ISSUES

Table 16. PLL Unlock Interrupt Asserted When P3.6/MDIO Pin Toggles [er001]

| Background     | The default system clock for the ADuCM410 is from an internal PLL. The PLL input is the internal 16 MHz oscillator. The oscillator output by default is 160 MHz and can be selected as the system clock for the memories, Cortex-M33, and other peripherals. An interrupt is provided to detect PLL lock and unlock states. If a PLL unlock interrupt is asserted, do not select the PLL output as the system clock.                                             |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | When P3.6/MDIO is toggled as a GPIO pin or when used as the MDIO data I/O function, the PLL lock detection circuit can assert many PLL unlock interrupts to the Cortex-M33 core if the PLL interrupt is enabled. On the WLCSP models, the P3.6/MDIO pin is directly underneath the 16 MHz oscillator. If P3.6/MDIO toggles at frequencies >1 kHz, the oscillator output frequency can vary beyond the frequency range allowed by the PLL lock detection circuit. |
| Workaround     | On the WLCSP models for the ADuCM410 device, do not use the MDIO feature. If using P3.6/MDIO as a digital I/O pin, its input or output frequency must be less than 1 kHz.                                                                                                                                                                                                                                                                                        |
| Related Issues | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## SECTION 1. ADUCM410 FUNCTIONALITY ISSUES

| Reference Number   | Description                                              | Status   |
|--------------------|----------------------------------------------------------|----------|
| er001              | PLL unlock interrupt asserted when P3.6/MDIO pin toggles | Open     |

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                        | Packing Quantity   | Package Option   |
|------------------|---------------------|--------------------------------------------|--------------------|------------------|
| ADUCM410BBCZ     | -40°C to +105°C     | 81-Ball CSP-BGA (5mm x 5mm x 0.85mm)       | Tray, 640          | BC-81-6          |
| ADUCM410BBCZ-RL7 | -40°C to +105°C     | 81-Ball CSP-BGA (5mm x 5mm x 0.85mm)       | Reel, 1000         | BC-81-6          |
| ADUCM410BCBZ-RL7 | -40°C to +105°C     | 64-Ball LFCWLCSP (3.46mm x 3.46mm x 0.5mm) | Reel, 1500         | CB-64-2          |

## EVALUATION BOARDS

Figure 22. 81-Ball Chip Scale Package Ball Grid Array [CSP\_BGA]

| Model 1           | Description                                                 |
|-------------------|-------------------------------------------------------------|
| EVAL-ADuCM410QSPZ | CSP_BGA Evaluation Board and Quick Start Development System |

<!-- image -->

(BC-81-6) Dimensions shown in millimeters

Figure 23. 64-Ball Wafer Level Chip Scale Package [WLCSP]

<!-- image -->

(CB-64-2) Dimensions shown in millimeters

Updated: November 11, 2021

## OUTLINE DIMENSIONS

| Model 1            | Description                                               |
|--------------------|-----------------------------------------------------------|
| EVAL-ADuCM410QSP1Z | WLCSP Evaluation Board and Quick Start Development System |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->