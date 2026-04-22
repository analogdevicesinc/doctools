<!-- lastmod 2023-09-20 -->
<!-- image -->

## FEATURES

- Analog input/output
- 16-bit, 400 kSPS ADC
- Voltage, current, and impedance measurement capability
- Internal and external current and voltage channels
- Ultralow leakage switch matrix and input mux
- Input buffers, PGA
- Voltage DACs
- Two dual output voltage DACs
- Output range: 0.2 V to 2.4 V (±2.2 V voltage potential to sensor) for 12-bit outputs
- Two bias potentiostat and TIA amplifiers
- Ultralow power, 1 μA per amplifier
- One high speed 12-bit voltage DAC
- Output range to sensor: -607 mV to +607 mV
- High speed TIA for impedance measurements
- Programmable gain amplifier on output
- Amplifiers, accelerators, and references
- Two low power, low noise amplifiers
- Suitable for potentiostat bias in electrochemical sensing
- Two low power, low noise TIAs
- Suitable for measuring sensor current output in the ±0.00005 μA to ±3000 μA range
- Programmable load and gain resistors
- Analog hardware accelerators
- Digital waveform generator (refer to the ADuCM356 Hardware Reference Manual)
- DFT and digital filters
- 2.5 V and 1.82 V on-chip, precision voltage references
- Internal temperature sensor, ±2°C accurate
- Impedance measurement range of &lt;1 Ω to 10 MΩ, 0.016 Hz to 200,000 Hz
- Voltammetry scan rate up to 2000 steps per second

## SIMPLIFIED FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

<!-- image -->

## Precision Analog Microcontroller with Chemical Sensor Interface

- Microcontroller
- 26 MHz Arm Cortex-M3 processor
- Serial wire port supports code download and debugging
- 256 kB flash/64 kB of SRAM
- Security and safety
- Hardware cyclic redundancy check (CRC) with programmable polynomial generator (refer to the ADuCM356 Hardware Reference Manual)
- Read and write protection of user flash
- On-chip peripherals
- UART, I 2 C, and SPI serial input/output
- Up to 17 GPIO pins
- External interrupt option
- General-purpose, wake-up, and watchdog timers
- Power
- 2.8 V to 3.6 V supply and active measurement range
- Power supply monitor
- Active current consumption: 30 μA/MHz for digital section
- Hibernate with bias to external sensor: 8.5 μA
- Shutdown mode with no SRAM retention: 2 μA
- Package and temperature range
- 6 mm × 5 mm, 72-lead LGA package
- Fully specified for -40°C to +85°C ambient operation

## APPLICATIONS

- Gas detection
- Food quality
- Environmental sensing (air, water, and soil)
- Blood glucose meters
- Life sciences and biosensing analysis
- Bioimpedance measurements
- General amperometry, voltammetry, and impedance spectroscopy functions

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| Simplified Functional Block Diagram.....................1                  |     |
| Functional Block Diagram......................................3            |     |
| General Description...............................................4        |     |
| Specifications........................................................     | 5   |
| Microcontroller Electrical Specifications.............5                    |     |
| RMS Noise Resolution of ADC.........................15                     |     |
| Timing Specifications.......................................               | 15  |
| Timing Diagrams..............................................              | 16  |
| Absolute Maximum Ratings.................................18                |     |

## REVISION HISTORY

9/2023-Revision A: Initial Version

...........................................................................................................................................................................

Thermal Resistance......................................... 18

ESD Caution.....................................................18

Pin Configuration and Function Descriptions...... 19

Typical Performance Characteristics................... 23

Theory of Operation.............................................25

Applications Information...................................... 26

Recommended Circuit and Component

Values.............................................................26

Outline Dimensions............................................. 28

Ordering Guide.................................................28

Evaluation Boards............................................ 28

## FUNCTIONAL BLOCK DIAGRAM

Figure 2.

<!-- image -->

## GENERAL DESCRIPTION

The ADuCM356 is an on-chip system that controls and measures electrochemical sensors and biosensors. The ADuCM356 is an ultralow power, mixed-signal microcontroller based on the Arm ® Cortex ™ -M3 processor. The device features current, voltage, and impedance measurement capability.

The ADuCM356 features a 16-bit, 400 kSPS, multichannel successive approximation register (SAR) analog-to-digital converter (ADC) with input buffers, built-in antialias filter (AAF), and programmable gain amplifier (PGA). The current inputs include three transimpedance amplifiers (TIA) with programmable gain and load resistors for measuring different sensor types. The analog front end (AFE) also contains two low power amplifiers designed specifically for potentiostat capability to maintain a constant bias voltage to an external electrochemical sensor. The noninverting inputs of these two amplifiers are controlled by on-chip, dual output digital-to-analog converters (DACs). The analog outputs include a high speed DAC and output amplifier designed to generate an AC signal.

The ADC operates at conversion rates up to 400 kSPS with an input range of -0.9 V to +0.9 V. An input mux before the ADC allows the user to select an input channel for measurement. These input channels include three external current inputs, multiple external voltage inputs, and internal channels. The internal channels allow diagnostic measurements of the internal supply voltages, die temperature, and reference voltages.

Two of the three voltage DACs are dual output, 12-bit string DACs. One output per DAC controls the noninverting input of a potentiostat amplifier, and the other controls the noninverting input of the TIA.

The third DAC (sometimes referred to as the high speed DAC) is designed for the high power TIA for impedance measurements. The output frequency range of this DAC is up to 200 kHz.

A precision 1.82 V and 2.5 V on-chip reference source is available. The internal ADC and voltage DAC circuits use this on-chip reference source to ensure low drift performance for all peripherals.

The ADuCM356 integrates a 26 MHz Arm Cortex-M3 processor, which is a 32-bit reduced instruction set computer (RISC) machine.

The Arm Cortex-M3 processor also has a flexible multichannel direct memory access controller (DMA) supporting two independent serial peripheral interface (SPI) ports, universal asynchronous receiver/transmitter (UART), and I 2 C communication peripherals. The ADuCM356 has 256 kB of nonvolatile flash/EE memory and 64 kB of single random access memory (SRAM) integrated on-chip.

The digital processor subsystem is clocked from a 26 MHz on-chip oscillator. The oscillator is the source of the main digital die system clock. Optionally, a 26 MHz phase-locked loop (PLL) can be used as the digital system clock. This clock can be internally subdivided so that the processor operates at a lower frequency and saves power. A low power, internal 32 kHz oscillator is available and can clock the timers. The ADuCM356 includes three general-purpose timers, a wake-up timer (which can be used as a general-purpose timer), and a system watchdog timer.

The analog subsystem has a separate 16 MHz oscillator used to clock the ADC, DACs, and other digital logic on the analog die. The analog die also contains a separate 32 kHz, low power oscillator to clock a watchdog timer on the analog die. Both the 32 kHz oscillator and this watchdog are independent from the digital die oscillators and system watchdog timer.

A range of communication peripherals can be configured as required in a specific application. These peripherals include UART, I 2 C, two SPI ports, and general-purpose input/output (GPIO) ports. The GPIOs, combined with the general-purpose timers, can be combined to generate a pulse-width modulation (PWM) type output.

Nonintrusive emulation and program download are supported via the serial wire debug port (SW-DP) interface.

The ADuCM356 operates from a 2.8 V to 3.6 V supply and is specified over a temperature range of -40°C to +85°C. The chip is packaged in a 72-lead, 6 mm × 5 mm land grid array (LGA) package.

Note that, throughout this data sheet, multifunction pins, such as P0.0/SPI0\_CLK, are referred to either by the entire pin name or by a single function of the pin, for example, P0.0, when only that function is relevant.

## SPECIFICATIONS

## MICROCONTROLLER ELECTRICAL SPECIFICATIONS

AVDD = DVDD = 2.8 V to 3.6 V, maximum difference between supplies = 0.3 V, ADC reference and excitation DAC and amplifier = 1.82 V internal reference, low power VBIASx and VZEROx DAC reference = 2.5 V internal reference, central processing unit (CPU) speed (f CORE ) = 26 MHz, T A = -40°C to +85°C, buck convertor on digital die disabled, unless otherwise noted.

Table 1.

| Parameter                                      | Symbol   | Min   | Typ   | Max   | Unit           | Test Conditions/Comments                                                                                                                                                                                                                                                                                           |
|------------------------------------------------|----------|-------|-------|-------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADC SPECIFICATIONS                             |          |       |       |       |                | Pseudo differential mode measured relative to ADCVBIAS_CAP pin voltage (1.82 V) unless otherwise stated, specifications based on high speed mode unless otherwise stated, ADC voltage channel calibrated in production with PGA gain = 1.5, AFE die analog clock (ACLK) = 32 MHz or 16 MHz unless otherwise stated |
| Data Rate 1                                    | f SAMPLE |       |       | 400   | kSPS           | High speed mode, decimation factor of 4                                                                                                                                                                                                                                                                            |
|                                                | f SAMPLE |       |       | 200   | kSPS           | Normal mode, decimation factor of 4                                                                                                                                                                                                                                                                                |
| Resolution 1                                   |          | 16    |       |       | Bits           | Number of data bits                                                                                                                                                                                                                                                                                                |
| Integral Nonlinearityv                         | INL      | -4    | ±2.0  | +4.0  | LSB            | PGA Gain = 1.5, 1.82 V internal reference, 1 LSB 2 = (1.82 V/2 15 )/PGA gain                                                                                                                                                                                                                                       |
|                                                |          | -5.6  | ±2.0  | +4.7  | LSB            | PGA gain = 9, 1.82 V internal reference                                                                                                                                                                                                                                                                            |
|                                                |          |       | ±2.0  |       | LSB            | 1.82 V external reference, 1 LSB 2 = (1.82 V/2 15 )/PGA gain                                                                                                                                                                                                                                                       |
| Differential Nonlinearity (No Missing Codes) 1 | DNL      | -0.99 | ±0.9  | +2.5  | LSB            | 1.82 V internal reference, 1 LSB 2 = (1.82 V/2 15 )/PGA gain                                                                                                                                                                                                                                                       |
| DC Code Distribution 3                         |          |       | ±6    |       | LSB            | Minimum and maximum range from mean ADC codes for 1000 ADC samples, PGA gain = 1.5, low power mode, ADC input 0.9 V, ADC output data rate = 200 kSPS, 1 LSB 2 = (1.82 V/2 15 )/PGA gain                                                                                                                            |
|                                                |          |       | ±6    |       | LSB            | Input channel is low power TIA 0 = 1 µA, TIA resistor (R TIA ) = 512 kΩ, load resistor (R LOAD ) = 10 Ω, ADC output data rate = 200 kSPS                                                                                                                                                                           |
|                                                |          |       | ±6    |       | LSB            | Input channel is high power TIA (HPTIA) = 1 µA, R TIA = 10 kΩ, R LOAD = 100 Ω, ADC output data rate = 200 kSPS                                                                                                                                                                                                     |
| ADC ENDPOINT ERRORS                            |          |       |       |       |                | For AIN0 to AIN7_LPF1 inputs, 200 kSPS ADC update rate, sinc3 filter enabled                                                                                                                                                                                                                                       |
| Offset Error                                   |          | -600  | ±200  | +600  | µV             | PGA gain = 1.5, low power mode, all channels except AIN3                                                                                                                                                                                                                                                           |
|                                                |          | -620  | ±200  | +880  | µV             | PGA gain = 1.5, low power mode, AIN3 only                                                                                                                                                                                                                                                                          |
| High Power Mode 4                              |          | -1.1  | ±0.5  | +1.4  | mV             | PGA gain = 1.5, high power mode                                                                                                                                                                                                                                                                                    |
| Drift 1                                        |          |       | ±3    |       | µV/°C          | Using 1.82 V internal reference                                                                                                                                                                                                                                                                                    |
| Offset Matching                                |          |       | ±2    |       | LSB            | Matching compared to AIN3                                                                                                                                                                                                                                                                                          |
| Full-Scale Error                               |          | -750  | ±400  | +940  | µV             | Excluding internal channels, both negative and positive full scale, error at both endpoints, PGA gain = 1.5, low power mode                                                                                                                                                                                        |
| High Power Mode 4                              |          | -1.6  | ±0.8  | +1.82 | mV             | PGA gain = 1.5, high power mode                                                                                                                                                                                                                                                                                    |
| Internal Channels 1                            |          |       | 0.2   | 0.75  | %of full scale | AVDD/2, DVDD/2, ADCVBIAS_CAP, VREF_2.5V, VREF_1.8V, AVDD_REG                                                                                                                                                                                                                                                       |
| Gain Drift 1                                   |          | -3    | ±1    | +3    | µV/°C          | Full-scale error drift minus offset error drift                                                                                                                                                                                                                                                                    |
| Gain Error Matching                            |          |       | ±3    |       | LSB            | Mismatch from channel to channel                                                                                                                                                                                                                                                                                   |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                      | Symbol   | Min       | Typ   | Max    | Unit   | Test Conditions/Comments                                                                                                                                                                                                                                  |
|----------------------------------------------------------------|----------|-----------|-------|--------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PGA Mismatch Error 1                                           |          |           |       |        |        |                                                                                                                                                                                                                                                           |
| PGA Gain Mismatch Drift                                        |          |           | 1.5   |        | µV/°C  | Drift after calibration                                                                                                                                                                                                                                   |
| Uncalibrated PGA Gain Mismatch                                 |          |           | 4     |        | %      | Production devices only calibrated for PGA gain = 1.5                                                                                                                                                                                                     |
| Uncalibrated PGA Gain Mismatch Drift                           |          |           |       |        | µV/°C  | drift                                                                                                                                                                                                                                                     |
| ADC DYNAMIC PERFORMANCE                                        |          |           | 10    |        |        | Uncalibrated                                                                                                                                                                                                                                              |
|                                                                |          |           |       |        |        | Input signal frequency (f IN ) = 20 kHz sine wave, f SAMPLE = 200 kSPS, using AINx voltage input channels, PGA gain = 1.5 components                                                                                                                      |
| Signal-to-Noise Ratio                                          | SNR      |           | 80    |        | dB     | Includes distortion and noise PGA gain = 1, 1.5, and 2                                                                                                                                                                                                    |
|                                                                |          |           | 76    |        | dB     | PGA gain = 4                                                                                                                                                                                                                                              |
|                                                                |          |           | 70    |        | dB     | PGA gain = 9                                                                                                                                                                                                                                              |
| Total Harmonic Distortion 1                                    | THD      |           | -84   |        | dB     |                                                                                                                                                                                                                                                           |
| Peak Harmonic or Spurious Noise 1                              |          |           | -86   |        | dB     |                                                                                                                                                                                                                                                           |
| Channel to Channel Crosstalk 1                                 |          |           | -86   |        | dB     | Measured on adjacent channels                                                                                                                                                                                                                             |
| 1, 5                                                           |          | See Table |       |        |        | 0.1 Hz to 10 Hz                                                                                                                                                                                                                                           |
| Noise (RMS)                                                    |          | 2         | 800   |        | nV/√Hz | Chop off                                                                                                                                                                                                                                                  |
|                                                                |          |           | 400   |        | nV/√Hz | Chop on                                                                                                                                                                                                                                                   |
| ADC INPUT                                                      |          |           |       |        |        | Input to ADC mux                                                                                                                                                                                                                                          |
| Input Voltage Ranges 1                                         |          | 0.2       |       | 2.1    | V      | Voltage applied to any input pin                                                                                                                                                                                                                          |
| Pseudo Differential Voltage                                    |          |           |       |        |        | Between ADCVBIAS_CAP pin voltage (1.82 V) and analog input from mux                                                                                                                                                                                       |
|                                                                |          | -0.9      |       | +0.9   | V      | Gain = 1                                                                                                                                                                                                                                                  |
|                                                                |          | -0.9      |       | +0.9   | V      | Gain = 1.5                                                                                                                                                                                                                                                |
|                                                                |          | -0.6      |       | +0.6   | V      | Gain = 2                                                                                                                                                                                                                                                  |
|                                                                |          | -0.3      |       | +0.3   | V      | Gain = 4                                                                                                                                                                                                                                                  |
|                                                                |          | -0.133    |       | +0.133 | V      | Gain = 9                                                                                                                                                                                                                                                  |
| Input Range 1                                                  |          | ±0.00005  |       | ±3000  | µA     | Low power TIA 0, low power TIA 1, and HPTIA current input channel ranges                                                                                                                                                                                  |
| Common-Mode Range 1                                            |          | 0.2       | 1.1   | 2.1    | V      |                                                                                                                                                                                                                                                           |
| Leakage Current                                                |          | -1.5      | ±0.5  | +1.5   | nA     | AIN0 to AIN7_LPF1, SE0, and SE1 pins (exclusive of DE0 and DE1 pins)                                                                                                                                                                                      |
|                                                                |          |           | ±2    |        | nA     | DE0 and DE1 pins only, see Figure 14                                                                                                                                                                                                                      |
| Input Current 1                                                |          | -8        | ±2    | +8     | nA     | AIN0 to AIN7_LPF1, SE0, SE1, and DE0 pins                                                                                                                                                                                                                 |
| Input Capacitance                                              |          |           | 40    |        | pF     | During ADC acquisition                                                                                                                                                                                                                                    |
| AAF, 3 dB Frequency Range                                      |          |           |       |        |        | 3 programmable settings                                                                                                                                                                                                                                   |
| Mode 0                                                         |          |           | 50    |        | kHz    |                                                                                                                                                                                                                                                           |
| Mode 1                                                         |          |           | 100   |        | kHz    |                                                                                                                                                                                                                                                           |
| Mode 2                                                         |          |           | 250   |        | kHz    |                                                                                                                                                                                                                                                           |
| ADC Channel Switch Settling Time                               |          |           |       |        |        | Time delay required after switching ADC input channel, excludes sinc3 settling time                                                                                                                                                                       |
| AAF, 3 dB Cutoff Frequency 1                                   |          |           |       |        |        |                                                                                                                                                                                                                                                           |
| 250 kHz                                                        |          | 25        |       |        | µs     |                                                                                                                                                                                                                                                           |
| 100 kHz                                                        |          | 40        |       |        | µs     |                                                                                                                                                                                                                                                           |
| 50 kHz                                                         |          | 60        |       |        | µs     |                                                                                                                                                                                                                                                           |
| DISCRETE FOURIER TRANSFORM (DFT)- BASED IMPEDANCE MEASUREMENTS |          |           |       |        |        | For impedance (Z) of 1 kΩ (0.02% tolerant resistor), excitation frequency = 0.1 Hz to 200 kHz, sine amplitude = 10 mV rms, R TIA = 5 kΩ, RCALx = 200 Ω, 1% accurate temperature coefficient 5 ppm/°C, single DFT measurement, DFT using 8192 ADC samples, |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                    | Symbol   | Min     | Typ   | Max        | Unit             | Test Conditions/Comments                                                                                                                                                       |
|--------------------------------------------------------------|----------|---------|-------|------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Accuracy                                                     |          |         |       |            |                  | Hanning on, HSDACCON, Bits[8:1] = 0x1B for low power mode and impedance measurements ≤80 kHz, HSDACCON, Bits[8:1] = 0x7 for high power mode and impedance measurements > 80 Hz |
| Magnitude                                                    |          | -1.25   | ±0.2  | +1.25      | %                | 20 kHz to 200 kHz                                                                                                                                                              |
| Phase                                                        |          | -0.3    | ±0.1  | +0.3       | Degrees          |                                                                                                                                                                                |
| Three Resistor Star Cell                                     |          |         |       |            |                  | Z = 2.2 Ω connected, see Figure 18                                                                                                                                             |
| Accuracy                                                     |          |         |       |            |                  | 0.1 Hz to 200 kHz                                                                                                                                                              |
| Magnitude                                                    |          |         | ±0.5  |            | %                |                                                                                                                                                                                |
| Phase                                                        |          |         | ±0.5  |            | Degrees          |                                                                                                                                                                                |
| Accuracy                                                     |          |         |       |            |                  | Z = 100 Ω connected, 0.1 Hz to 200 kHz, see Figure 18                                                                                                                          |
| Magnitude                                                    |          |         | ±0.2  |            | %                |                                                                                                                                                                                |
| Phase                                                        |          |         | ±0.2  |            | Degrees          |                                                                                                                                                                                |
| High Speed Loop Allowed External Load Capacitance 1          |          |         |       | 100 50     | pF pF            | See Figure 18 R2 + R3 ≤ 200 Ω, R1 ≤ 100 Ω, for excitation frequencies ≥ 1 kHz R2 + R3 ≤ 1 kΩ, R1 ≤ 500 Ω, for excitation frequencies                                           |
| Impedance Frequency Range 1                                  |          |         | 3     | 40         | pF               | ≥ 1 kHz R2 + R3 ≤ 1.6 kΩ, R1 ≤ 800 Ω, for excitation frequencies ≥ 1 kHz                                                                                                       |
| Excitation Amplifier Bandwidth                               |          | 0.016   |       | 200,000    | MHz Hz           |                                                                                                                                                                                |
| Impedance Measurement Range 1 LOW POWER TIA AND POTENTIOSTAT |          | 0.4     |       | 10,000     | Ω                |                                                                                                                                                                                |
| Input Bias Current                                           |          |         | 80 20 | 300 150    | pA pA            | TIA, SEx pin Potentiostat amplifiers, REx pin                                                                                                                                  |
| Offset Voltage                                               |          |         | 50    | 150        | µV               |                                                                                                                                                                                |
| Offset Voltage Drift vs. Temperature                         |          |         | 1     |            | µV/°C            |                                                                                                                                                                                |
| 1                                                            |          |         | 1.6 2 | +750       | µV rms µV rms μA | Normal mode (LPTIACONx Bit 2 = 0) Half power mode (LPTIACONx Bit 2 = 1) Normal mode (LPTIACONx, Bits[4:3] = 00), from CEx pins                                                 |
| Potentiostat Source and Sink Current                         |          | -750 -3 |       | +3         | mA dB            | High current mode (LPTIACONx, Bits[4:3] = 01 or 11), from CEx pins                                                                                                             |
| DC Power Supply Rejection Ratio 1                            | DC PSRR  | 300     | 70    | AVDD - 600 | mV               | At REx pin, R TIA = 256 kΩ, R LOAD = 10 Ω                                                                                                                                      |
| Input Common-Mode Voltage Range                              |          |         |       |            |                  | Normal mode (LPTIACONx, Bits[4:3] = 00), sink and                                                                                                                              |
| Output Voltage Range 1                                       |          | 300     |       | AVDD - 400 | mV               | source 750 μA                                                                                                                                                                  |
|                                                              |          | 300     |       | AVDD - 400 | mV               | High current mode (LPTIACONx, Bits[4:3] = 01/11), sink and source 3 mA                                                                                                         |
| Overcurrent Limit Protection                                 |          |         | 20    |            | mA               | Amplifiers try to limit source and sink current to this value via internal clamp                                                                                               |
| Allowed Duration of Overcurrent                              |          |         |       | 5          | sec              | User must limit duration of overcurrent condition to                                                                                                                           |
| Limit 1                                                      |          |         |       |            |                  | less than this value or risk damaging amplifier                                                                                                                                |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                           | Symbol   | Min       | Typ   | Max   | Unit     | Test Conditions/Comments                                                                                                                                        |
|-----------------------------------------------------|----------|-----------|-------|-------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Allowed Frequency of Overcurrent Conditions         |          |           |       | 1     | Per hour |                                                                                                                                                                 |
| Short-Circuit Current                               |          |           | 12    |       | mA       | When amplifier output is shorted to ground                                                                                                                      |
| PROGRAMMABLE RESISTORS                              |          |           |       |       |          |                                                                                                                                                                 |
| Low Power TIA R LOAD on SE0, SE1 Inputs 1           |          |           |       |       |          |                                                                                                                                                                 |
| Drift over Temperature                              |          |           | ±200  |       | ppm/°C   | 10 Ω, 30 Ω, 100 Ω, 1500 Ω, 3000 Ω, 3500 Ω                                                                                                                       |
|                                                     |          |           | ±400  |       | ppm/°C   | 50 Ω                                                                                                                                                            |
| 0 Ω R LOAD Accuracy                                 |          | 0.01      | 0.08  | 0.15  | Ω        |                                                                                                                                                                 |
| 10 Ω R LOAD Accuracy                                |          | 9.8       | 11.7  | 13.5  | Ω        |                                                                                                                                                                 |
| 30 Ω R LOAD Accuracy                                |          | 28        | 33.8  | 39    | Ω        |                                                                                                                                                                 |
| 50 Ω R LOAD Accuracy                                |          | 48        | 55    | 63    | Ω        |                                                                                                                                                                 |
| 100 Ω R LOAD Accuracy                               |          | 88        | 110   | 130   | Ω        |                                                                                                                                                                 |
| Low Power TIA R TIA Gain on SE0, SE1 Inputs 1       |          |           |       |       |          |                                                                                                                                                                 |
| Accuracy                                            |          | -5        |       | +15   | %        | User programmable, includes 1 kΩ, 2 kΩ, 3 kΩ, 4 kΩ, 6 kΩ, 8 kΩ, 10 kΩ, 16 kΩ, 20 kΩ, 22 kΩ, 30 kΩ, 40 kΩ, 64 kΩ, 100 kΩ, 128 kΩ, 160 kΩ, 192 kΩ, 256 kΩ, 512 kΩ |
|                                                     |          | 115       | 120   | 130   | Ω        | 200 Ω setting with R LOAD = 100 Ω                                                                                                                               |
| Drift over Temperature                              |          |           | ±100  |       | ppm/°C   |                                                                                                                                                                 |
| Low Power TIA R TIA Mismatch Error 1                |          |           |       |       |          | Error when moving up or down one R TIA value                                                                                                                    |
|                                                     |          | -0.6      | +0.2  | +0.6  | %        | 512 kΩ to 2 kΩ range excluding 40 kΩ                                                                                                                            |
|                                                     |          | -3.5      | +0.5  | +3.5  | %        | 40 kΩ (up to 48 kΩ, down to 32 kΩ)                                                                                                                              |
|                                                     |          |           | ±20   |       | %        | 200 Ω                                                                                                                                                           |
| HPTIA R LOAD on SE0, SE1 Inputs 1                   |          |           |       |       |          |                                                                                                                                                                 |
| Accuracy                                            |          | 102       | 110   | 116   | Ω        | Fixed 100 Ω target setting                                                                                                                                      |
| Drift                                               |          |           | ±160  |       | ppm/°C   | R and R                                                                                                                                                         |
| HPTIA R TIA Gain on SE0, SE1 Inputs 1               |          |           |       |       |          | TIA02 TIA04                                                                                                                                                     |
| Accuracy                                            |          |           | ±20   |       | %        | User programmable, includes 0.2 kΩ, 1 kΩ, 5 kΩ, 10 kΩ, 20 kΩ, 40 kΩ, 80 kΩ, 160 kΩ                                                                              |
| Drift                                               |          |           | ±200  |       | ppm/°C   |                                                                                                                                                                 |
| HPTIA R LOAD on DE0, DE1 Inputs 1 Accuracy          |          | 0.001     |       | 0.15  | Ω        | R LOAD03 and R LOAD05 0 Ω setting                                                                                                                               |
|                                                     |          | 5         |       | 10.7  | Ω        | 10 Ω setting                                                                                                                                                    |
|                                                     |          | 26.5      | 32.6  | 37.6  | Ω        | 30 Ω setting                                                                                                                                                    |
|                                                     |          |           | ±20   |       | %        | 30 Ω, 50 Ω,and 100 Ω settings                                                                                                                                   |
| Drift over Temperature                              |          |           | ±0.2  |       | %/°C     | 10 Ω setting                                                                                                                                                    |
|                                                     |          |           | ±200  |       | ppm/°C   | Excludes R LOAD = 0 Ω and 10 Ω                                                                                                                                  |
| HPTIA R TIA Gain on DE0, DE1 Inputs 1               |          |           |       |       |          | User programmable, includes 0.1 kΩ, 0.2 kΩ, 1 kΩ, 5                                                                                                             |
|                                                     |          |           |       |       |          | kΩ, 10 kΩ, 20 kΩ, 40 kΩ, 80 kΩ, 160 kΩ                                                                                                                          |
| Accuracy                                            |          | 120       | 135   | 150   | Ω        | 100 Ω setting                                                                                                                                                   |
|                                                     |          | 230       | 250   | 290   | Ω        | 200 Ω setting                                                                                                                                                   |
|                                                     |          |           | ±20   |       | %        | 1 kΩ, 5 kΩ, 10 kΩ, 20 kΩ, 40 kΩ, 80 kΩ, 160 kΩ                                                                                                                  |
| Drift over Temperature                              |          |           | ±350  |       | ppm/°C   | 100 Ω, 200 Ω settings                                                                                                                                           |
|                                                     |          |           | ±200  |       | ppm/°C   | 1 kΩ, 5 kΩ, 10 kΩ, 20 kΩ, 40 kΩ, 80 kΩ, 160 kΩ                                                                                                                  |
| HPTIA R TIA Mismatch Error SE0, SE1, DE0, and DE1 1 |          |           | +1    |       |          | Error introduced when moving up or down one R TIA value 160 kΩ to 5 kΩ range                                                                                    |
|                                                     |          | -3.5 -2.5 | ±2    | +3.5  | %        |                                                                                                                                                                 |
| HPTIA AMPLIFIER                                     |          |           |       | +5    | %        | 1 kΩ, 200 Ω, and 100 Ω                                                                                                                                          |
| Bias Current                                        |          |           | 1     |       | nA       |                                                                                                                                                                 |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                     | Symbol   | Min   | Typ   | Max        | Unit        | Test Conditions/Comments                                                                                                                                                                                                                     |
|-----------------------------------------------|----------|-------|-------|------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maximum Current Sink and Source 1             |          | -3    |       | +3         | mA          | Ensure R TIA selection generates output voltage of less than ±900 mV with PGA gain = 1                                                                                                                                                       |
| Input Common-Mode Voltage Range 1             |          | 300   |       | AVDD - 700 | mV          |                                                                                                                                                                                                                                              |
| Output Voltage Range 1                        |          | 200   |       | AVDD - 400 | mV          |                                                                                                                                                                                                                                              |
| Overcurrent Limit Protection 1                |          |       | 17    |            | mA          | Amplifier tries to limit source and sink current to this value via internal clamp, tested with R LOAD = 0 Ω, R TIA = 100 Ω                                                                                                                   |
| Allowed Duration of Overcurrent Limit 1       |          |       |       | 5          | sec         |                                                                                                                                                                                                                                              |
| Allowed Frequency of Overcurrent Conditions 1 |          |       |       | 1          | Per hour    |                                                                                                                                                                                                                                              |
| Short-Circuit Current                         |          |       | 30    |            | mA          | When amplifier output is shorted to ground                                                                                                                                                                                                   |
| LOW POWER ON-CHIP VOLTAGE REFERENCE           |          |       | 2.5   |            | V           | 0.47 µF from VREF_2.5V to AGND, reference is measured with all low power voltage DACs and output amplifiers enabled                                                                                                                          |
| Accuracy                                      |          |       |       | ±5         | mV          | T A = 25°C                                                                                                                                                                                                                                   |
| Noise 1                                       |          |       | 60    |            | µV p-p      |                                                                                                                                                                                                                                              |
| Reference Temperature Coefficient 1, 6        |          | -25   | ±10   | +25        | ppm/°C      | Peak-to-peak voltage in 0.1 Hz to 10 Hz range                                                                                                                                                                                                |
| DC Power Supply Rejection Ratio               | DC PSRR  |       | 70    |            |             |                                                                                                                                                                                                                                              |
| AC Power Supply Rejection Ratio 7             | AC PSRR  |       | 48    |            | dB dB       | DC variation due to AVDD supply changes AC 1 kHz, 50 mV peak-to-peak ripple applied to AVDD supply                                                                                                                                           |
| Long-Term Stability 8                         |          |       | 100   |            | ppm/1000 hr |                                                                                                                                                                                                                                              |
| HIGH POWER REFERENCES                         |          |       |       |            |             |                                                                                                                                                                                                                                              |
| High Power On-Chip Voltage Reference          |          |       | 1.82  |            | V           | 4.7 µF from VREF_1.82V to AGND, reference is measured with ADC enabled                                                                                                                                                                       |
| Accuracy                                      |          |       |       | ±5         | mV          | T A = 25°C                                                                                                                                                                                                                                   |
| Reference Temperature Coefficient 1, 2        |          | -20   | ±5    | +20        | ppm/°C      |                                                                                                                                                                                                                                              |
| DC Power Supply Rejection Ratio               | DC PSRR  |       | 85    |            | dB          | DC variation due to AVDD supply changes                                                                                                                                                                                                      |
| AC Power Supply Rejection Ratio 9             | AC PSRR  |       | 60    |            | dB          | AC 1 kHz, 50 mV peak-to-peak ripple applied to AVDD supply                                                                                                                                                                                   |
| ADC Common Mode Reference Source              |          |       | 1.11  |            | V           | 470 nF from ADCVBIAS_CAP to AGND, reference is measured with ADC enabled                                                                                                                                                                     |
| Accuracy                                      |          |       |       | ±5         | mV          | T A = 25°C                                                                                                                                                                                                                                   |
| Reference Temperature Coefficient 1           |          | -20   | ±5    | +20        | ppm/°C      |                                                                                                                                                                                                                                              |
| DC Power Supply Rejection Ratio               | DC PSRR  |       | 80    |            | dB          | DC variation due to AVDD supply changes                                                                                                                                                                                                      |
| AC Power Supply Rejection Ratio               | AC PSRR  |       | 60    |            | dB          | AC 1 kHz, 50 mV peak-to-peak ripple applied to AVDD supply                                                                                                                                                                                   |
| Long-Term Stability                           |          |       | 100   |            | ppm/1000 hr |                                                                                                                                                                                                                                              |
| BUFFERED REFERENCE VOLTAGE OUTPUT             |          |       | 1.82  |            | V           |                                                                                                                                                                                                                                              |
| Accuracy                                      |          |       |       | ±5         | mV          | T A = 25°C, capacitive load to ground 100 pF                                                                                                                                                                                                 |
| Reference Temperature Coefficient 1, 5        |          | -20   |       | +20        | ppm/°C      |                                                                                                                                                                                                                                              |
| Output Impedance                              |          |       | 0.5   | 1          | Ω           |                                                                                                                                                                                                                                              |
| Load Current 1                                |          |       |       | 200        | µA          |                                                                                                                                                                                                                                              |
| LOW POWER DAC SPECIFICATIONS (VBIASx/ VZEROx) |          |       |       |            |             | VBIASx specifications derived from measurements taken with potentiostat amplifier in unity-gain mode and measured at CE0 and CE1 pins, VZEROx specifications derived from measurements at VZERO0 and VZERO1 pins, dual output low power DACs |
| Resolution 1                                  |          | 12    |       |            | Bits        | 12-bit mode                                                                                                                                                                                                                                  |
|                                               |          | 6     |       |            | Bits        | 6-bit mode                                                                                                                                                                                                                                   |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                                             | Symbol   | Min   | Typ   | Max     | Unit   | Test Conditions/Comments                                                                                                                                                                      |
|---------------------------------------------------------------------------------------|----------|-------|-------|---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Relative Accuracy 1, 10, 11                                                           | INL      | -6.5  | ±1    | +3      | LSB    | 12-bit mode, 1 LSB = 2.2 V/(2 12 - 1)                                                                                                                                                         |
| Differential Nonlinearity 9                                                           | DNL      | -0.99 |       | +2.5    | LSB    | 12-bit mode, guaranteed monotonic, 1 LSB = 2.2 V/ (2 12 - 1)                                                                                                                                  |
| Offset Error 1                                                                        |          | -0.5  | ±1    | +0.5 ±7 | LSB mV | 6-bit mode, guaranteed monotonic, 1 LSB = 2.2 V/2 6 VBIASx/VZEROx in 12-bit mode, 2.5 V internal                                                                                              |
| Drift                                                                                 |          | -1    | ±0.2  | +1      | mV     | reference, DAC output code 0x000, target 0x000 code is 200 mV Differential offset voltage of VBIASx referred to VZEROx, LPDACDATx = 0x00000 VBIASx or VZER0x referred to AGND, using internal |
| Differential Offset VBIASx to VZEROx ≈ 0 V 1 Differential offset VBIASx to VZEROx ≈ 1 |          |       | ±5    | 4       | µV/°C  | low power reference Differential offset voltage of VBIASx referred to                                                                                                                         |
| ±600                                                                                  |          |       |       |         | µV/°C  | VZEROx, T A = -40°C to +60°C, LPDACDATx = 0x1A680                                                                                                                                             |
| mV                                                                                    |          |       |       | 10      | µV/°C  | Differential offset voltage of VBIAS referred to VZEROx, T A = -40°C to +60°C, LPDACDATx = 0x1AAE0                                                                                            |
| Gain Error 1                                                                          |          |       | ±0.2  | ±0.5    | %      | 12-bit mode, DAC code = 0xFFF with target voltage of 2.4 V, no correction for internal 2.5 V reference drift                                                                                  |
| Drift                                                                                 |          |       | 10    |         | ppm/°C | Using internal low power reference                                                                                                                                                            |
| Mismatch Analog Outputs                                                               |          |       | ±0.1  |         | %      | %of full scale on VBIAS0 to VBIAS1 in 12 - bit mode                                                                                                                                           |
| Output Voltage Range 1                                                                |          |       |       |         |        | LSB size is 2.2/(2 12 - 1), input common-mode voltage of low power potentiostat and low power TIA is AVDD - 600 mV                                                                            |
| 12-Bit Outputs                                                                        |          | 0.2   |       | 2.4     | V      | AVDD ≥ 2.8 V                                                                                                                                                                                  |
| 6-Bit Outputs                                                                         |          | 0.2   |       | 2.366   | V      | AVDD ≥ 2.8 V                                                                                                                                                                                  |
| AVDD to VBIASx and VZEROx Headroom Voltage 1                                          |          | 400   |       |         | mV     | Minimum headroom between AVDD, VBIASx, and VZEROx output voltage, increases to 600 mV if connected to low power TIA or low power potentiostat amplifiers                                      |
| Output Impedance 1                                                                    |          |       | 1.65  |         | MΩ     |                                                                                                                                                                                               |
| Output Settling Time                                                                  |          |       | 1.5   |         | sec    | Settled to ±2 LSB (12-bit) for ¼ of full scale to ¾ of full scale, with 1 kΩ load on amplifier output, 0.1 μF capacitors connected to VBIASx and VZEROx pins, LPTIASWx, Bits[13:12] = 11      |
|                                                                                       |          |       | 500   |         | μS     | Settled to ±2 LSB (12-bit) for ¼ of full scale to ¾ of full scale, with 1 kΩ load on amplifier output, capacitors on VBIASx and VZEROx disconnected, LPTIASWx, Bits[13:12] = 00               |
| Glitch Energy                                                                         |          |       | ±5    |         | nV/sec | 1 LSB change when the maximum number of bits changes simultaneously in the LPDACDATx register, switch to external capacitors on VBIASx and VZEROx opened, no capacitors on CEx/RCx_1 pins     |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                     | Symbol   | Min   | Typ   | Max          | Unit     | Test Conditions/Comments                                                                                                                            |
|-----------------------------------------------|----------|-------|-------|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| EXCITATION DAC, PGA, AND                      |          |       |       |              |          | Use HSDACDAT range of 0x200 to 0xE00, specified                                                                                                     |
| RECONSTRUCTION FILTER (RCF) SPECIFICATIONS    |          |       |       |              |          | for gain = 2, (HSDACCON, Bit 12 and HSDACCON, Bit 0 = 0) and gain = 0.05, (HSDACCON, Bit 12 and                                                     |
| DAC                                           |          |       |       |              |          |                                                                                                                                                     |
| Common-Mode Voltage Range 1                   |          | 0.2   |       | AVDD - 0.6   | V        | Set by excitation amplifiers N node (refer to the ADuCM356 Hardware Reference Manual)                                                               |
| Resolution 1                                  |          | 12    |       |              | Bits     |                                                                                                                                                     |
| Differential Nonlinearity 9                   | DNL      |       |       |              |          |                                                                                                                                                     |
|                                               |          |       | ±7    | +1/-0.99 ±14 | LSB LSB  | Guaranteed monotonic, gain = 2 Gain = 0.05                                                                                                          |
| Relative Accuracy 1, 9                        | INL      |       |       |              |          |                                                                                                                                                     |
|                                               |          |       | ±2    | ±3           | LSB      | Gain = 2                                                                                                                                            |
|                                               |          |       | ±8    | ±18          | LSB      | Gain = 0.05                                                                                                                                         |
| Full Scale 12                                 |          |       |       |              |          |                                                                                                                                                     |
| Positive                                      |          |       | 607   |              | mV       | Gain = 2, DAC code = 0xE00                                                                                                                          |
|                                               |          |       | 15.1  |              | mV       | Gain = 0.05, DAC code = 0xE00                                                                                                                       |
| Negative                                      |          |       | -607  |              | mV       | Gain = 2, DAC code = 0x200                                                                                                                          |
|                                               |          |       | -15.1 |              | mV       | Gain = 0.05, DAC code = 0x200                                                                                                                       |
| Gain Error Drift 1                            |          |       |       |              |          |                                                                                                                                                     |
| Gain = 2                                      |          |       | 11.5  |              | µV/°C    |                                                                                                                                                     |
| Gain = 0.05                                   |          |       | 0.33  |              | µV/°C    |                                                                                                                                                     |
| Offset Error (Midscale)                       |          |       |       |              |          | Measured at an output of the excitation loop across RCALx, DAC code = 0x800, not calibrated in production, offset calibration can remove this error |
|                                               |          |       | ±25   |              | mV       | Gain = 2                                                                                                                                            |
| Offset Error Drift 1                          |          |       |       |              |          |                                                                                                                                                     |
| Gain = 2                                      |          |       | 40    |              | µV/°C    |                                                                                                                                                     |
| Gain = 0.05                                   |          |       | 5     |              | µV/°C    |                                                                                                                                                     |
| Power Supply Rejection Ratio                  | DC PSRR  |       | 70    |              |          | DC variation due to AVDD supply changes                                                                                                             |
| DC PGA Programmable Gain                      |          | 0.05  |       | 2            | dB       |                                                                                                                                                     |
| RCF                                           |          |       |       |              |          |                                                                                                                                                     |
| 3 dB Corner Frequency Accuracy                |          |       | ±5    |              | %        | Programmable to 50 kHz, 100 kHz, and 250 KHz                                                                                                        |
| Allowed External Load Capacitance             |          |       |       |              |          | SEx, DEx, AINx, and RCALx pins                                                                                                                      |
| <80 kHz (Low Power Mode)                      |          |       |       | 100          | pF       |                                                                                                                                                     |
| >80 kHz (High Power Mode)                     |          |       |       | 80           | pF       |                                                                                                                                                     |
| Overcurrent Limit Protection 1                |          |       | 15    |              | mA       | Amplifier tires to limit source and sink current to this value via internal clamp                                                                   |
| Allowed Duration of Overcurrent Limit         |          |       |       | 5            | sec      |                                                                                                                                                     |
| Allowed Frequency of Overcurrent Conditions 1 |          |       |       | 1            | Per hour |                                                                                                                                                     |
| Short-Circuit Current                         |          |       | 13    |              | mA       | When amplifier output is shorted to ground                                                                                                          |
| SWITCH MATRIX SPECIFICATIONS                  |          |       |       |              |          | Switches on AFE before ADC mux                                                                                                                      |
| On Resistance (R ON ) 1                       |          |       |       |              |          | Characterized with a voltage sweep from 0 V to common-mode voltage (V CM ) production tested at 1.8 V                                               |
| Current Carrying Switches                     |          |       | 40    | 80           | Ω        | Tx switches, except T5 and T7                                                                                                                       |
|                                               |          |       | 30    | 52           | Ω        | Tx switches, T5 and T7 only                                                                                                                         |
|                                               |          |       | 35    | 70           | Ω        | D switches                                                                                                                                          |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                              | Symbol   | Min         | Typ   | Max         | Unit   | Test Conditions/Comments                                                                                                                                              |
|--------------------------------------------------------|----------|-------------|-------|-------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Noncurrent Carrying Switches                           |          |             | 1     | 5           | kΩ     | P and N switches                                                                                                                                                      |
| DC Off Leakage                                         |          |             | 370   |             | pA     | Analog input pin used for test driven to 0.2 V                                                                                                                        |
| DC On Leakage 1                                        |          |             | 530   | 2000        | pA     | Analog input pin used for test driven to 0.2 V                                                                                                                        |
| TEMPERATURE SENSORS                                    |          |             |       |             |        | Channel 0 and Channel 1                                                                                                                                               |
| Resolution                                             |          |             | 0.3   |             | °C     |                                                                                                                                                                       |
| Accuracy                                               |          |             |       |             |        | Measurement taken immediately after exiting hibernate mode, user single point calibration required                                                                    |
|                                                        |          |             | ±2    |             | °C     | Temperature Sensor 0                                                                                                                                                  |
|                                                        |          |             | ±3    |             | °C     | Temperature Sensor 1                                                                                                                                                  |
| POWER-ON RESET (POR)                                   | POR      |             |       |             |        | Refers to voltage on DVDD pin                                                                                                                                         |
| POR Trip Level 13                                      |          | 1.59        | 1.62  | 1.67        | V      | Power-on level                                                                                                                                                        |
|                                                        |          | 1.799       | 1.8   | 1.801       | V      | Power-down level                                                                                                                                                      |
| POR Hysteresis 1                                       |          |             | 10    |             | mV     |                                                                                                                                                                       |
| Power-Up Timings 1                                     |          |             |       |             |        |                                                                                                                                                                       |
| Delay Between POR Power-On and Power- Down Trip Levels |          | 110         |       |             | ms     | After DVDD passes POR power-on trip level, DVDD must remain at or above power-down level for this period                                                              |
| Total Power Time for All Supplies                      |          |             |       | 20          | ms     | All supplies must be above maximum POR trip, power- on trip level in this period                                                                                      |
| EXTERNAL RESET                                         |          |             |       |             |        |                                                                                                                                                                       |
| External Reset Minimum Pulse Width 1                   |          | 1           |       |             | µs     | Minimum pulse width required on external reset pin to trigger a reset sequence                                                                                        |
| WATCHDOG TIMERS                                        | WDT      |             |       |             |        | Timer on analog and digital die                                                                                                                                       |
| Timeout Period 1                                       |          |             | 32    |             | sec    | Default at power-up, analog die watchdog                                                                                                                              |
| FLASH/EE MEMORY                                        |          |             |       |             |        |                                                                                                                                                                       |
| Endurance                                              |          | 10,000      |       |             | Cycles |                                                                                                                                                                       |
| Data Retention                                         |          | 10          | 256   |             | Years  | Junction temperature (T J ) = 85°C                                                                                                                                    |
| Size                                                   |          |             |       |             | kB     |                                                                                                                                                                       |
| DIGITAL INPUTS                                         |          |             |       |             |        |                                                                                                                                                                       |
| Input Leakage Current 1                                |          |             |       |             |        |                                                                                                                                                                       |
| Logic 1 GPIO                                           |          |             | 1     | ±5          | nA     | Voltage input high (V IH ) = DVDD, pull-up resistor disabled                                                                                                          |
| Logic 0 GPIO                                           |          |             | 1     | ±10         | nA     | Voltage input low (V IL ) = 0 V, pull-up resistor disabled                                                                                                            |
| Input Capacitance                                      |          |             | 10    |             | pF     |                                                                                                                                                                       |
| Pin Capacitance                                        |          |             |       |             |        |                                                                                                                                                                       |
| XTALI                                                  |          |             | 12    |             | pF     |                                                                                                                                                                       |
| XTALO                                                  |          |             | 12    |             | pF     |                                                                                                                                                                       |
| LOGIC INPUTS                                           |          |             |       |             |        |                                                                                                                                                                       |
| GPIO Input Voltage                                     |          |             |       |             |        |                                                                                                                                                                       |
| Low                                                    | V INL    |             |       | 0.25 × DVDD | V      |                                                                                                                                                                       |
| High                                                   | V INH    | 0.57 × DVDD |       |             | V      |                                                                                                                                                                       |
| Pull-Up Current 1                                      |          | 30          |       | 130         | µA     | V IN = 0 V; DVDD = 3.6 V                                                                                                                                              |
| LOGIC OUTPUTS                                          |          |             |       |             |        | All digital outputs, excluding XTALO                                                                                                                                  |
| GPIO Output Voltage 14                                 |          |             |       |             |        |                                                                                                                                                                       |
| High                                                   | V OH     | DVDD - 0.4  |       |             | V      | Source current (I SOURCE ) = 2 mA in normal drive strength mode GPxDS, Bits[15:0] = 0x0000, I SOURCE = 4 mA in maximum drive strength mode GPxDS, Bits[15:0] = 0xFFFF |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                      | Symbol   | Min   | Typ        | Max   | Unit   | Test Conditions/Comments                                                                                                                                        |
|----------------------------------------------------------------|----------|-------|------------|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Low                                                            | V OL     |       |            | 0.3   | V      | Sink current (I SINK ) = 2 mA in normal drive strength mode (GPx, Bits[15:0] = 0x0000), I SINK = 4 mA in maximum drive strength mode (GPx, Bits[15:0] = 0xFFFF) |
| GPIO Short-Circuit Current                                     |          |       | 11.5       |       | mA     |                                                                                                                                                                 |
| OSCILLATORS                                                    |          |       |            |       |        |                                                                                                                                                                 |
| Digital Die Internal System Oscillator                         |          |       | 26         |       | MHz    |                                                                                                                                                                 |
| Accuracy                                                       |          |       | ±1         | ±3.2  | %      | 26 MHz output mode                                                                                                                                              |
| System PLL                                                     |          |       | 26         |       | MHz    | Main system clock                                                                                                                                               |
| Analog Die Internal System Oscillator                          |          |       | 16/32      |       | MHz    |                                                                                                                                                                 |
| Accuracy for 16 MHz Mode                                       |          |       | ±0.5       | ±2    | %      |                                                                                                                                                                 |
| Accuracy for 32 MHz Mode                                       |          |       | ±0.5       | ±2    | %      |                                                                                                                                                                 |
| Switching Time 1                                               |          | 4     |            |       | µs     | Time delay required after switching system clock source from 16 MHz or 32 MHz oscillator before accessing AFE die                                               |
| External Crystal Oscillator                                    |          |       | 16         | 32    | MHz    | Can be selected in place of internal oscillator                                                                                                                 |
| Leakage                                                        |          |       | 500        | 540   | nA     | XTALI and XTAO pins                                                                                                                                             |
| Logic Inputs, XTALI Only                                       |          |       |            |       |        |                                                                                                                                                                 |
| Input Low Voltage (V INL )                                     |          |       | 1.1        |       | V      |                                                                                                                                                                 |
| Input High Voltage (V INH ) 32 kHz Internal Oscillators        |          |       | 1.7 32.768 |       | V kHz  | Used for watchdog timers and wake-up timers                                                                                                                     |
| Accuracy                                                       |          |       | ±3         | ±6    | %      | Digital die low frequency oscillator                                                                                                                            |
|                                                                |          |       | ±5         | ±15   | %      | Analog die low frequency oscillator                                                                                                                             |
| START-UP TIME                                                  |          |       |            |       |        | Processor clock = 16 MHz                                                                                                                                        |
| At Power-On                                                    |          |       | 85         | 120   | ms     | POR to first user code execution, DVDD and AVDD must be ≥ 2.8 V after this period                                                                               |
| After Other Reset                                              |          |       | 50         |       | ms     | Reset to first user code execution, includes watchdog, external, and software resets                                                                            |
| Digital Die Wake Up                                            |          |       | 10         | 30    | µs     |                                                                                                                                                                 |
| Analog Die Wake Up 1                                           |          |       | 50         | 190   | µs     | Wake-up time to allow communication with AFE die                                                                                                                |
| ADC Wake Up 1                                                  |          |       | 90         | 135   | µs     | Time delay required on exiting hibernate or shutdown mode before starting ADC conversions if 1.8 V ADC reference capacitor voltage is maintained                |
| EXTERNAL INTERRUPTS                                            |          |       |            |       |        |                                                                                                                                                                 |
| Pulse Width Level Triggered 1                                  |          | 7     |            |       | ns     |                                                                                                                                                                 |
| Edge Triggered 1                                               |          | 1     |            |       | ns     |                                                                                                                                                                 |
| POWER REQUIREMENTS 15                                          |          |       |            |       |        |                                                                                                                                                                 |
| Power Supply Voltage Range AVDD to AGND, DVDD to DGND, DVDD_AD |          | 2.8   | 3.3        | 3.6   | V      |                                                                                                                                                                 |
| to DGND_AD Active Mode                                         |          |       | 4.75       | 5.2   | mA     | Default current after a reset, AFE and digital die in active mode                                                                                               |
| Flexi ™ Mode Hibernate Mode                                    |          |       | 3.8 3      | 4.2   | mA μA  | Cortex-M3 disabled, DMA and other peripherals active 32 kHz oscillator active, 64 kB SRAM retained state supported on digital die                               |
| Shutdown Mode 1                                                |          |       | 2          |       |        | active                                                                                                                                                          |
| Additional Power Supply Currents                               |          |       |            |       | μA     | Lowest power mode, only wake-up controller                                                                                                                      |
| ADC Circuits                                                   |          |       | 1.5        |       | mA     | ADC update frequency (f ADC ) = 200 kSPS                                                                                                                        |
|                                                                |          |       | 3.45       |       | mA     | f ADC = 400 kSPS                                                                                                                                                |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                                                                                                               | Symbol   | Min   | Typ                  | Max     | Unit              | Test Conditions/Comments                                                                                                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------|-------|----------------------|---------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HPTIA                                                                                                                                   |          |       | 0.3 0.9              |         | mA mA             | Low power mode                                                                                                                                                                            |
| High Speed DAC                                                                                                                          |          |       | 2.2                  |         | mA                | High power mode Includes excitation buffer and instrumentation amplifier Low power mode High power mode                                                                                   |
| DFT Hardware Accelerator Low Power Reference Low Power DACs for VZEROx and VBIASx Low Power Potentiostat and TIA Amplifier Standby Mode |          |       | 4.5 550 1.65 2.3 2 1 |         | mA μA μA µA µA µA | Per powered up DAC, excluding load current Per amplifier normal mode Per amplifier half power mode Potentiostat amplifier and low power DACs enabled                                      |
|                                                                                                                                         |          |       | 8.5                  | 17.5 40 | µA µA             | Single sensor and potentiostat channel, T A = -40°C to +60°C Single sensor and potentiostat channel, T A = -40°C to +60°C Potentiostat amplifier and low power TIA 0 in half              |
|                                                                                                                                         |          |       | 7                    | 14      | µA                | power mode, T A = -40°C to +60°C                                                                                                                                                          |
| Arm Cortex-M3, Flash, and SRAM DC Measurement Mode                                                                                      |          |       | 16                   | 25      | µA µA             | Both potentiostat channels on                                                                                                                                                             |
|                                                                                                                                         |          |       | 30 6.4               |         | µA/MHz mA mA      | Potentiostat amplifier and low power TIA 0 in half power mode, T A = -40°C to +60°C Dynamic current in active mode System clock 6.5 MHz, ADC, low power mode (T A = -40°C to +60°C)       |
| Impedance Spectroscopy Mode                                                                                                             |          |       | 11.5                 |         |                   | When ac impedance engine (80 kHz) and ADC are active in low power mode, Arm processor also active with 26 MHz clock (T A = -40°C to +60°C) When ac impedance engine (200 kHz) and ADC are |
| 1                                                                                                                                       |          |       | 21                   |         | mA                | active in high power mode, Arm processor also active with 26 MHz clock (T A = -40°C to +60°C)                                                                                             |

## SPECIFICATIONS

## RMS NOISE RESOLUTION OF ADC

The rms noise specifications for the ADC with different ADC digital filter settings are described in Table 2. The internal 1.82 V reference was used for all measurements. Table 3 shows the rms and peak-to-peak effective bits based on the noise results in Table 2 for various PGA gain settings. Peak-to-peak effective bits results are shown in parentheses. RMS bits are calculated as follows:

log 2 2 × Input Range RMS Noise (1) Peak-to-peak bits are calculated as follows: log 2 2 × Input Range 6. 6 × RMS Noise (2) Table 2. ADC RMS Noise

|                  |                               |                | RMS Noise (μV)   | RMS Noise (μV)   | RMS Noise (μV)   | RMS Noise (μV)   | RMS Noise (μV)   |
|------------------|-------------------------------|----------------|------------------|------------------|------------------|------------------|------------------|
| Update Rate (Hz) | Sinc3 Oversampling Rate (OSR) | Sinc2 OSR      | Gain = 1         | Gain = 1.5       | Gain = 2         | Gain = 4         | Gain = 9         |
| 200000           | 4                             | Not applicable | 72.43            | 49.732           | 37.83            | 18.93            | 8.62             |
| 9090             | 4                             | 22             | 29.29            | 19.59            | 10.4             | 6.687            | 4.42             |
| 900              | 5                             | 178            | 24.0             | 17.11            | 12.832           | 6.416            | 1.018            |

Table 3. ADC Effective Bits, Based on RMS Noise

|   Update Rate (Hz) |   Sinc3 OSR | Sinc2 OSR      | Gain = 1        | Gain = 1.5     | Gain = 2           | Gain = 4          | Gain = 9          | Settling Time (50 Hz and 60 Hz Filter Disabled)   | Settling Time (50 Hz and 60 Hz Filter Enabled)   |
|--------------------|-------------|----------------|-----------------|----------------|--------------------|-------------------|-------------------|---------------------------------------------------|--------------------------------------------------|
|             200000 |           4 | Not applicable | 14.6 (11.9 p-p) | 15 (12.4 p-p)  | 14.95 (12.23 p- p) | 14.95 (12.23 p-p) | 14.9 (12.15 p- p) | 16.25 µs                                          | 16.25 µs                                         |
|               9090 |           4 | 22             | 15 (13.18 p-p)  | 15 (13.8 p-p)  | 15 (14.09 p-p)     | 15 (13.73 p-p)    | 15 (13.15 p-p)    | 236.25 µs                                         | 236.25 µs                                        |
|                900 |           5 | 178            | 15 (13.47 p-p)  | 15 (13.96 p-p) | 15 (13.8 p-p)      | 15 (13.79 p-p)    | 15 (15 p-p)       | 2.245 ms                                          | 37 ms                                            |

## TIMING SPECIFICATIONS

In the timing specifications and timing diagrams, CS refers to the SPI0\_CS pin and the SPI1\_CS pin, SCLK refers to the SPIO\_CLK pin and the SPI1\_CLK pin, MOSI refers to the SPI0\_MOSI pin and the SPI1\_MOSI pin, and MISO refers to the SPI0\_MISO pin and the SPI1\_MISO pin.

Table 4. SPI Initiator Mode Timing (See Figure 3 and Figure 4)

| Parameter                                                        | Symbol   | Min                               | Typ   | Unit   | Test Conditions/Comments                            |
|------------------------------------------------------------------|----------|-----------------------------------|-------|--------|-----------------------------------------------------|
| TIMING REQUIREMENTS Chip Select (CS) to Serial Clock (SCLK) Edge | t CS     | 0.5 × peripheral clock (PCLK) - 3 |       | ns     | Characterized with respect to double drive strength |
| SCLK Low Pulse Width                                             | t SL     | PCLK - 3.5                        |       | ns     |                                                     |
| SCLK High Pulse Width                                            | t SH     | PCLK - 3.5                        |       | ns     |                                                     |
| Data Input Setup Time Before SCLK Edge                           | t DSU    | 5                                 |       | ns     |                                                     |
| Data Input Hold Time After SCLK Edge                             | t DHD    | 20                                |       | ns     |                                                     |
| SWITCHING CHARACTERISTICS                                        |          |                                   |       |        |                                                     |
| Data Output Valid After SCLK Edge                                | t DAV    |                                   | 25    | ns     |                                                     |
| Data Output Setup Before SCLK Edge                               | t DOSU   | PCLK - 2.2                        |       | ns     |                                                     |
| CS High After SCLK Edge                                          | t SFS    | 0.5 × PCLK - 3                    |       | ns     |                                                     |

Table 5. SPI Target Mode Timing (See Figure 5 and Figure 6)

| Parameter                           | Symbol   |   Min | Typ   | Max   | Unit   | Test Conditions/Comments                            |
|-------------------------------------|----------|-------|-------|-------|--------|-----------------------------------------------------|
| TIMING REQUIREMENTS CS to SCLK Edge | t CS     |  38.5 |       |       | ns     | Characterized with respect to double drive strength |
| SCLK Low Pulse Width                | t SL     |  38.5 |       |       | ns     |                                                     |

## SPECIFICATIONS

Table 5. SPI Target Mode Timing (See Figure 5 and Figure 6) (Continued)

| Parameter                              | Symbol   | Min   | Typ   | Max   | Unit   | Test Conditions/Comments   |
|----------------------------------------|----------|-------|-------|-------|--------|----------------------------|
| SCLK High Pulse Width                  | t SH     | 38.5  |       |       | ns     |                            |
| Data Input Setup Time Before SCLK Edge | t DSU    | 6     |       |       | ns     |                            |
| Data Input Hold Time After SCLK Edge   | t DHD    | 8     |       |       | ns     |                            |
| SWITCHING CHARACTERISTICS              |          |       |       |       |        |                            |
| Data Output Valid After SCLK Edge      | t DAV    | 25    |       |       | ns     |                            |
| Data Output Valid After CS Edge        | t DOCS   | 38.5  |       |       | ns     |                            |
| CS High After SCLK Edge                | t SFS    | 38.5  |       |       | ns     |                            |

## TIMING DIAGRAMS

Figure 3. SPI Initiator Timing Diagram (Phase Mode = 1)

<!-- image -->

Figure 4. SPI Initiator Timing Diagram (Phase Mode = 0)

<!-- image -->

## SPECIFICATIONS

Figure 5. SPI Target Timing Diagram (Phase Mode = 1)

<!-- image -->

Figure 6. SPI Target Timing Diagram (Phase Mode = 0)

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 6. Parameter                                            | Rating                                 |
|---------------------------------------------------------------|----------------------------------------|
| AVDD to AGND DVDD to DGND                                     | -0.3 V to +3.6 V V                     |
|                                                               | -0.3 V to +3.6                         |
| AVDD to DVDD                                                  | DVDD ± 0.3 V                           |
| DVDD_AD to DGND_AD                                            | -0.3 V to +3.6 V                       |
| Analog Input Voltage to AGND (AVDD Range is 2.8 V to 3.6 V)   | -0.3 V to AVDD + 0.3 V, must be ≤3.6 V |
| Digital Input Voltage to DGND (DVDD Range is 2.8 V to 3.6 V)  | -0.3 V to DVDD + 0.3 V, must be ≤3.6 V |
| Digital Output Voltage to DGND (DVDD Range is 2.8 V to 3.6 V) | -0.3 V to DVDD + 0.3 V, must be ≤3.6 V |
| AGND to DGND                                                  | -0.3 V to +0.3 V                       |
| DGND_AD to AGND                                               | -0.3 V to +0.3 V                       |
| XTALI and XTAL0                                               | V                                      |
| Total Positive GPIO Pins Current                              | 0 mA to 30 mA                          |
| Total Negative GPIO Pins Current                              | -30 mA to 0 mA                         |
| Temperature Ranges                                            |                                        |
| Storage                                                       | -65°C to +150°C                        |
| Operating                                                     | -40°C to +85°C                         |
| Reflow Profiles                                               |                                        |
| SnPb Assemblies (10 sec to 30 sec)                            | 240°C                                  |
| Pb-Free Assemblies (20 sec to 40 sec)                         | 260°C                                  |
| Junction Temperature                                          | 150°C                                  |
| Electrostatic Discharge (ESD)                                 |                                        |
| Human Body Model (HBM)                                        | 4 kV                                   |
| Field-Induced Charged Device Model (FICDM)                    | 1 kV                                   |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θ JA is the natural convection, junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

## Table 7. Thermal Resistance

| Package Type 1   |   θ JA |   θ JC | Unit   |
|------------------|--------|--------|--------|
| CC-72-2          |     45 |     11 | °C/W   |

- 1 Test condition: thermal impedance simulated values are based on JEDEC 2S2P thermal test board with no bias. See JESD-51.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 7. Pin Configuration

<!-- image -->

Table 8. Pin Function Descriptions

| Pin No.          | Mnemonic        | Type 1   | Description                                                                                                                                                                                                                                                                                                                          |
|------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J10              | RESET           | I        | Reset Input (Active Low). An internal pull-up is included and enabled by default on this pin.                                                                                                                                                                                                                                        |
| Digital I/O Pins |                 |          |                                                                                                                                                                                                                                                                                                                                      |
| H3               | SWCLK           | I        | Serial Wire Debug Clock Input Pin. An internal pull-up resistor is enabled by default on this pin.                                                                                                                                                                                                                                   |
| H4               | SWDIO           | I/O      | Serial Wire Debug Data Input/Output Pin. An internal pull-up resistor is enabled by default on this pin.                                                                                                                                                                                                                             |
| H9               | P0.0/SPI0_CLK   | I/O      | General-Purpose Input/Output Port 0.0 (P0.0)/SPI0 Clock (SPI0_CLK). This pin defaults as tristate.                                                                                                                                                                                                                                   |
| H8               | P0.1/SPI0_MOSI  | I/O      | General-Purpose Input/Output Port 0.1 (P0.1)/SPI0 Data Initiator Output, Target Input (SPI0_MOSI). This pin defaults as tristate.                                                                                                                                                                                                    |
| H7               | P0.2/SPI0_MISO  | I/O      | General-Purpose Input/Output Port 0.2 (P0.2)/SPI0 Data Initiator Input, Target Output (SPI0_MISO). This pin defaults as tristate.                                                                                                                                                                                                    |
| H6               | P0.3/SPI0_CS    | I/O      | General-Purpose Input/Output Port 0.3 (P0.3)/SPI0 Chip Select (SPI0_). This pin is an input for target mode or an output for initiator mode. This pin defaults as tristate.                                                                                                                                                          |
| J5               | P0.4/I2C_SCL    | I/O      | General-Purpose Input/Output Port 0.4 (P0.4)/I 2 C Interface Clock for I 2 C (I2C_SCL). This pin defaults as tristate.                                                                                                                                                                                                               |
| H5               | P0.5/I2C_SDA    | I/O      | General-Purpose Input/Output Port 0.5 (P0.5)/ I 2 C Interface Data for I 2 C (I2C_SDA). This pin defaults as tristate.                                                                                                                                                                                                               |
| J3               | P0.10/UART_SOUT | I/O      | General-Purpose Input/Output Port 0.10 (P0.10)/UART Output (UART_SOUT). This pin defaults as tristate.                                                                                                                                                                                                                               |
| J2               | P0.11/UART_SIN  | I/O      | General-Purpose Input/Output Port 0.11 (P0.11)/UART Input (UART_SIN). This pin defaults as tristate.                                                                                                                                                                                                                                 |
| F5               | P1.0/SYS_WAKE   | I/O      | General-Purpose Input/Output Port 1.0 (P1.0)/External Interrupt Signal (SYS_WAKE). This pin is capable of waking the device from hibernate or shutdown modes. This pin defaults as tristate.                                                                                                                                         |
| D5               | BM/P1.1         | I/O      | Boot Mode (BM)/General-Purpose Input/Output Port 1.1 (P1.1). When this pin is low during and for a short time after any reset, the device enters an infinite loop before executing user code, which allows the user flash memory to be erased via the serial wire debug interface if erroneous user code is programmed to the flash. |
| E7               | P1.2/SPI1_CLK   | I/O      | General-Purpose Input/Output Port 1.2 (P1.2)/SPI1 Clock (SPI1_CLK). This pin defaults as tristate.                                                                                                                                                                                                                                   |
| D7               | P1.3/SPI1_MOSI  | I/O      | General-Purpose Input/Output Port 1.3 (P1.3)/SPI1 Data Initiator Output, Target Input (SPI1_MOSI). This pin defaults as tristate.                                                                                                                                                                                                    |
| F6               | P1.4/SPI1_MISO  | I/O      | General-Purpose Input/Output Port 1.4 (P1.4)/SPI1 Initiator Input, Target Output (SPI1_MISO). This pin defaults as tristate.                                                                                                                                                                                                         |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pin Function Descriptions (Continued)

| Pin No.             | Mnemonic     | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                  |
|---------------------|--------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D6                  | P1.5/SPI1_CS | I/O      | General-Purpose Input/Output Port 1.5 (P1.5)/SPI1 Chip Select (SPI1_CS). This pin defaults as tristate.                                                                                                                                                                                                                                                      |
| J4                  | P2.4         | I/O      | General-Purpose Input/Output Port 2.4. This pin defaults as tristate.                                                                                                                                                                                                                                                                                        |
| G10                 | GPIO0/PWM0   | I/O      | General-Purpose Input/Output Port (GPIO0)/PWM Output (PWM0). This pin features a POR output and analog die power mode status. After a POR, this pin is pulled low for 32 ms after the POR sequence is completed. After this period and after all other reset types, this pin defaults to an output driven high.                                              |
| H10                 | GPIO1/PWM1   | I/O      | General-Purpose Input/Output Port (GPIO1)/PWM Output (PWM1). This pin features an optional external 16 MHz clock input. This pin defaults as tristate.                                                                                                                                                                                                       |
| Sensor Channel Pins |              |          |                                                                                                                                                                                                                                                                                                                                                              |
| B1                  | CE0          | AI/O     | Output of Potentiostat 0 Amplifier. This pin is connected to a counter electrode when measuring electrochemical sensors. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                             |
| A1                  | RE0          | AI       | Input to Analog Input Switch Matrix. For electrochemical sensor measurement, connect this pin to Potentiostat 0 amplifier, inverting input. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                          |
| A3                  | SE0          | AI       | Input to Analog Switch Matrix. For electrochemical sensor measurement, connect this pin to TIA, inverting input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                                                                                       |
| A2                  | DE0          | AI       | Diagnostic Electrode Input 0. This pin is internally connected to the analog input switch matrix. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                                                                                                      |
| C2                  | VBIAS0       | AI/O     | VBIAS0 to DAC0 Output. This pin is used internally to set the common-mode voltage of the Potentiostat 0 amplifier. Connect this pin to AGND via a 100 nF capacitor. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND. Do not use this pin as a voltage source for an external circuit. |
| B2                  | VZERO0       | AI/O     | VZERO0 to DAC0 Output. This pin is used internally to set the common-mode voltage of TIA0. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND. Do not use this pin as a voltage source for an external circuit.                                                                          |
| D1                  | RC0_0        | AI       | Connection to External Capacitor for Low Power TIA Input. Connect the other side of the capacitor to RC0_1. Use a 100 nF capacitor with this pin. Optionally, a TIA gain resistor can be connected across RC0_0 and RC0_1.                                                                                                                                   |
| D2                  | RC0_1        | AI       | Connection to External Capacitor for Low Power TIA Input. Connect the other side of the capacitor to RC0_0. Use a 100 nF capacitor with this pin. Optionally, a TIA gain resistor can be connected across RC0_0 and RC0_1.                                                                                                                                   |
| C1                  | CAP_POT0     | AI       | High Frequency Filter Capacitor. Connect this pin to CE0 pin via an external capacitor of 100 nF. Used for resistor/ capacitive (RC) filter on RE0 input.                                                                                                                                                                                                    |
| Sensor Channel Pins |              |          |                                                                                                                                                                                                                                                                                                                                                              |
| B11                 | CE1          | AI/O     | Output of Potentiostat 1 Amplifier. This pin is connected to a counter electrode when measuring electrochemical sensors. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                             |
| A11                 | RE1          | AI       | Input to Analog Input Switch Matrix. For electrochemical sensor measurement, connect this pin to the Potentiostat 1 amplifier inverting input. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                       |
| A9                  | SE1          | AI       | Input to Analog Switch Matrix. For electrochemical sensor measurement, connect this pin to TIA, inverting input. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                                                                                       |
| A10                 | DE1          | AI       | Diagnostic Electrode Input 1. This pin is internally connected to the analog input switch matrix. If unused, it is recommended to connect this pin to AVDD_REG or AGND.                                                                                                                                                                                      |
| C10                 | VBIAS1       | AI/O     | VBIAS1 to DAC1 Output. This pin is used internally to set the common-mode voltage of the Potentiostat 1 amplifier. Connect this pin to AGND via a 100 nF capacitor. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND. Do not use this pin as a voltage source for an external circuit. |
| B10                 | VZERO1       | AI/O     | VZERO1 to DAC1 Output. This pin is used internally to set the common-mode voltage of TIA1. Optionally, this pin can be used as an ADC input. If unused, it is recommended to connect this pin to AVDD_REG or AGND. Do not use this pin as a voltage source for an external circuit.                                                                          |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pin Function Descriptions (Continued)

| Pin No.           | Mnemonic         | Type 1   | Description                                                                                                                                                                                                                                                                                                                      |
|-------------------|------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D11               | RC1_0            | AI       | Connection to External Capacitor for Low Power TIA Input. Connect this pin to the other side of the capacitor to RC1_1. Use a 100 nF capacitor with this pin. Optionally, a TIA gain resistor can be connected across RC1_0 and RC1_1.                                                                                           |
| D10               | RC1_1            | AI       | Connection to External Capacitor for Low Power TIA Input. Connect this pin to the other side of the capacitor to RC1_0. Use a 100 nF capacitor with this pin. Optionally, a TIA gain resistor can be connected across RC1_0 and RC1_1.                                                                                           |
| C11               | CAP_POT1         | AI       | High Frequency Filter Capacitor. Connect this pin to CE1 pin via an external capacitor of 100 nF. This pin is used for the RC filter on the RE1 input.                                                                                                                                                                           |
| Other Analog Pins |                  |          |                                                                                                                                                                                                                                                                                                                                  |
| A7                | RCAL0            | AI       | Calibration Resistor Connection. This pin is the connected to the excitation amplifier output. This pin is used for the calibration of impedance measurement circuitry.                                                                                                                                                          |
| A6                | RCAL1            | AI       | Calibration Resistor Connection. This pin is connected to the high power TIAs, inverting input. This pin is used for the calibration of impedance measurement circuitry.                                                                                                                                                         |
| B9                | AIN0             | AI       | ADC Input.                                                                                                                                                                                                                                                                                                                       |
| B8                | AIN1             | AI       | ADC Input.                                                                                                                                                                                                                                                                                                                       |
| B6                | AIN2             | AI       | ADC Input.                                                                                                                                                                                                                                                                                                                       |
| B7                | AIN3/BUF_VREF1V8 | AI/O     | ADC Input (AIN3)/Buffered 1.8 V Bias (BUF_VREF1V8). The maximum load = 200 μA. Connect BUF_VREF1V8 to AGND via a 100 pF capacitor.                                                                                                                                                                                               |
| A4                | AIN4_LPF0        | AI/O     | External Low-Pass Filter. This pin is required for TIA0 when measuring electrochemical sensors. A 4.7 μF capacitor is recommended when this pin is used as the low-pass filter capacitor connection. Optionally, this pin can be used as an ADC input.                                                                           |
| B4                | AIN5             | AI       | ADC Input.                                                                                                                                                                                                                                                                                                                       |
| B3                | AIN6             | AI       | ADC Input.                                                                                                                                                                                                                                                                                                                       |
| A8                | AIN7_LPF1        | AI/O     | External Low-Pass Filter. This pin is required for TIA1 when measuring electrochemical sensors. A 4.7 μF capacitor is recommended when this pin is used as the low-pass filter capacitor connection. Optionally, this pin can be used as an ADC input.                                                                           |
| A5                | VREF_1.82V       | AI/O     | Decoupling Capacitor Connection for 1.8 V Internal Reference. Connect a 4.7 μF capacitor between this pin and AGND. Do not use this pin as a voltage source for an external circuit.                                                                                                                                             |
| E2                | VREF_2.5V        | AI/O     | Decoupling Capacitor Connection for 2.5 V Internal Reference. Connect a 470 nF capacitor between this pin and AGND. Do not use this pin as a voltage source for an external circuit.                                                                                                                                             |
| E11               | ADCVBIAS_CAP     | AI/O     | Decoupling Capacitor for PGA Common Mode Reference. Connect a 470 nF capacitor between this pin and AGND. Do not use this pin as a voltage source for an external circuit.                                                                                                                                                       |
| B5                | AGND_REF         | S        | Reference Ground Pin. Connect this pin to AGND.                                                                                                                                                                                                                                                                                  |
| Power Pins        |                  |          |                                                                                                                                                                                                                                                                                                                                  |
| G2                | AVDD_DD          | S        | Supply Pin for Digital Die. Do not connect this pin directly to AVDD. Connect this pin to Pin J6 and Pin F1. See the Recommended Circuit and Component Values section for more details. This pin supplies the digital die 26 MHz and 32 kHz oscillators and is the digital die POR.                                              |
| H2                | AGND_DD          | S        | Ground Pin for Digital Die.                                                                                                                                                                                                                                                                                                      |
| F1                | DVDD_AD          | S        | Digital Supply for Analog Die. Connect this pin to Pin J6 and Pin G2. See the Recommended Circuit and Component Values section for more details. This pin supplies the AFE die POR, 32 kHz oscillator, and watchdog timer. This pin is the supply for the low dropout (LDO) regulator that generates DVDD_REG_AD.                |
| F2                | DGND_AD          | S        | Digital Ground for Analog Die.                                                                                                                                                                                                                                                                                                   |
| J6                | DVDD             | S        | Digital Supply Pin. Do not connect this pin directly to AVDD. Connect this pin to Pin F1 and Pin G2. See the Recommended Circuit and Component Values section for more details. This pin is the main digital supply pin, including flash and SRAM. This pin is the supply for the LDO regulator that generates DVDD_REG (1.2 V). |
| F7                | DGND             | S        | Digital Ground Pin for Entire Chip.                                                                                                                                                                                                                                                                                              |
| F11               | AVDD             | S        | Analog Supply Pin. This pin is the main analog supply for the AFE die. This pin supplies the ADC input circuits, DACs, and amplifier circuits. This pin is the supply for the LDO regulator AVDD_REG (1.8 V).                                                                                                                    |
| F10               | AGND             | S        | Analog Ground Pin.                                                                                                                                                                                                                                                                                                               |
| J7                | DVDD_REG         | S        | Output of 1.2 V On-Chip LDO Regulator. Connect a 470 nF capacitor between this pin and DGND. This pin supplies the Arm Cortex-M3 core, flash, SRAM, and core digital circuits of the digital die.                                                                                                                                |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 8. Pin Function Descriptions (Continued)

| Pin No.                            | Mnemonic     | Type 1   | Description                                                                                                                                                                                                                              |
|------------------------------------|--------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| E1                                 | AVDD_REG     | S        | Output of 1.8 V On-Chip LDO Regulator. Connect a 470 nF capacitor between this pin and AGND. This pin supplies the AFE die ADC and DAC core circuits, 16 MHz oscillator, and temperature sensors.                                        |
| G1                                 | DVDD_REG_AD  | S        | Output of 1.8 V On-Chip LDO Regulator. Connect a 470 nF capacitor between this pin and DGND. This pin supplies the 1.8 V regulated voltage (digital) on the AFE die. This pin powers ADC postprocessing circuits and waveform generator. |
| J8                                 | VDCDC_CAP1N  | S        | Buck Fly Capacitor Connection to VDCDC_CAP1P (100 nF). Leave this pin unconnected if the buck convertor is disabled.                                                                                                                     |
| J9                                 | VDCDC_CAP1P  | S        | Buck Fly Capacitor Connection to VDCDC_CAP1N (100 nF). Leave this pin unconnected if the buck convertor is disabled.                                                                                                                     |
| H11                                | VDCDC_CAP2N  | S        | Buck Fly Capacitor Connection to VDCDC_CAP2P (100 nF). Leave this pin unconnected if the buck convertor is disabled.                                                                                                                     |
| G11                                | VDCDC_CAP2P  | S        | Buck Fly Capacitor Connection to VDCDC_CAP2N (100 nF). Leave this pin unconnected if the buck convertor is disabled.                                                                                                                     |
| J11                                | VDCDC_CAPOUT | S        | Decoupling Capacitor for DC-to-DC Output. The recommended value on this pin is 470 nF. Leave this pin unconnected if the buck convertor is disabled.                                                                                     |
| XTAL and Do Not Connect (DNC) Pins |              |          |                                                                                                                                                                                                                                          |
| H1                                 | XTALI        | AI       | External 16 MHz Crystal Oscillator Input for Analog Die. Optionally, connect this pin to DGND_AD if not using an external crystal. Ensure that this pin is not connected to a voltage level above 1.8 V.                                 |
| J1                                 | XTALO        | AO       | External 16 MHz Crystal Oscillator Output for Analog Die. Optionally, leave this pin unconnected if not using an external crystal.                                                                                                       |
| E5                                 | DNC          |          | Do not connect.                                                                                                                                                                                                                          |
| E10                                | DNC          |          | Do not connect.                                                                                                                                                                                                                          |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. ADC 1.82 V Voltage Reference, AC PSRR

<!-- image -->

Figure 9. Low Power 2.5 V Voltage Reference, AC PSRR

<!-- image -->

Figure 10. Low Power 2.5 V Voltage Reference, DC PSRR

<!-- image -->

Figure 11. Internal 1.11 V Voltage Reference, DC PSRR

Figure 12. ADC 1.82 V Voltage Reference, DC PSRR

<!-- image -->

Figure 13. Input Bias Current (I BIAS ) via Reference Electrode Pin of Low Power TIAs for Varying Voltage on Reference Electrode Pin, T A = 25°C

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Input Leakage Current to DE0 Pin vs. AVDD Supply Voltage, Various Temperatures

<!-- image -->

Figure 15. Typical Internal Temperature Sensor 0 Channel Performance for 26 Devices

Figure 16. High Power 1.82 V Voltage Reference Drift over 1200 Hours at T A = 25°C

<!-- image -->

Figure 17. Low Power 2.5 V Voltage Reference Drift over 1200 Hours at T A = 25°C

<!-- image -->

## THEORY OF OPERATION

The ADuCM356 is an ultra-low power, mixed-signal microcontroller based on the Arm Cortex-M3 processor. The device features a 16-bit, 400 kSPS, multichannel SAR ADC with input buffers, AAF, and PGA. The current inputs include three TIAs with programmable-gain and load resistors for measuring different sensor types. The AFE also contains two low power amplifiers designed specifically for potentiostat capability to maintain a constant bias voltage to an external electrochemical sensor. The noninverting inputs of these two amplifiers are controlled by on-chip, dual output DACs. The analog outputs include a high speed DAC and output amplifier designed to generate an AC signal.

See the ADuCM356 Hardware Reference Manual for the detailed description of the ADuCM356 functionality and features.

## APPLICATIONS INFORMATION

## RECOMMENDED CIRCUIT AND COMPONENT VALUES

The recommended external components required by the ADuCM356 are shown in Figure 19.

There are two digital supply pins, DVDD\_AD and DVDD. Decouple these pins with a 0.1 µF capacitor placed as close as possible to each of the two pins and a 4.7 µF capacitor at the supply source. Similarly, the analog supply pins, AVDD and AVDD\_DD, each require a 0.1 µF capacitor placed as close as possible to each pin with a 4.7 µF capacitor at the supply source.

The ADuCM356 contains three internal regulators. These regulators each require external decoupling capacitors. The pin names for the digital regulators are DVDD\_REG and DVDD\_ REG\_AD. Each pin requires a 0.47 µF capacitor to DGND. The AVDD\_REG analog regulator requires a 0.47 µF decoupling capacitor to AGND if separate ground planes are used.

The ADuCM356 has an optional dc-to-dc convertor (buck convertor) on the digital die that can save power if enabled. When unused, the VDCDC\_CAP1N, VDCDC\_CAP1P, VDCDC\_ CAP2N, VDCDC\_CAP2P, and VDCDC\_CAPOUT pins can be left disconnected. If the dc-to-dc converter is used, a 100 nF capacitor must be connected between VDCDC\_CAP1N and VDCDC\_CAP1P and between VDCDC\_CAP2N and VDCDC\_ CAP2P. The VDCDC\_CAPOUT pin requires a 0.47 µF capacitor to the digital ground when the dc-to-dc converter is enabled.

There are three internal references requiring external capacitors for stability. Connect the ADCVBIAS\_CAP and VREF\_2.5V pins to AGND via 0.47 µF capacitors. Connect a 4.7 µF capacitor between the VREF\_1.8V pin and AGND.

For calibration purposes, an external precision resistor is recommended between the RCAL0 and RCAL1 pins. Typically, this is a 200 Ω resistor, but it can have a different value. A low ppm temperature coefficient (≤10 ppm/°C) and 0.1% or better accuracy allow the most accurate system calibration.

Figure 19 shows connections between the ADuCM356 and an external 3-lead, electrochemical gas sensor. For electromagnetic compatibility (EMC) purposes, (radiated immunity), a capacitor connected to AGND is recommended for each sensor pin. Typically, a value between 22 pF and 30 pF is recommended. Use a 100 nF capacitor between the CEx pin of the sensor and the ADuCM356 CAP\_POT0 pin. Similarly, if the ADuCM356 Channel 1 potentiostat is used, a 100 nF capacitor between the CEx pin of the sensor and the ADuCM356 CAP\_POT1 pin is recommended. The output of each of the low power TIAs has a programmable low-pass filter. The resistor is internal and is programmable, and the capacitor for each low-pass filter is external. The capacitor connects between the AIN4\_LPF0 pin and the AGND pin for TIA0, and between the AIN7\_LPF1 pin and the AGND pin for TIA1. The low power TIAs require a 100 nF capacitor between their inverting input and output terminals for stability purposes. For low power TIA 0, the capacitor connects between the RC0\_0 pin and RC0\_1 pin. If the low power TIA 1 channel is used, connect the capacitor between the RC1\_0 pin and RC1\_1 pin.

If the low power DACs are used, each output (VBIAS0, VZERO0, VBIAS1, and VZERO1) requires a 100 nF capacitor to AGND.

Figure 18. High Speed Loop Connected to an External Sensor (R1 to R3), C1 to C3 Represents Total External Capacitance

<!-- image -->

## APPLICATIONS INFORMATION

Figure 19. Recommended External Components

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                        | Packing Quantity   | Package Option   |
|------------------|---------------------|--------------------------------------------|--------------------|------------------|
| ADUCM356BCCZ     | -40°C to +85°C      | 72-Terminal 6 x 5 mm Land Grid Array [LGA] | Tray, 490          | CC-72-2          |
| ADUCM356BCCZ-RL7 | -40°C to +85°C      | 72-Terminal 6 x 5 mm Land Grid Array [LGA] | Reel, 1000         | CC-72-2          |

## EVALUATION BOARDS

| Model 1           | Description                                         |
|-------------------|-----------------------------------------------------|
| EVAL-ADuCM355QSPZ | Evaluation Board and Quick Start Development System |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->

Figure 20. 72-Terminal Land Grid Array [LGA] (CC-72-2) Dimensions shown in millimeters

<!-- image -->

Updated: September 14, 2023