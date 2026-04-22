<!-- lastmod 2024-10-09 -->
<!-- image -->

## Precision Analog Microcontroller with RF Transceiver, ARM Cortex-M3

## FEATURES

- Analog input/output (I/O)
- 6-channel, 12-bit SAR ADC
- Single-ended and differential inputs
- Programmable data rate of up to 167 kSPS
- On-chip voltage reference
- Supply range: 2.2 V to 3.6 V
- Power consumption
- 280 nA in shutdown mode, nonretained state
- 1.9 µA in hibernate mode, processor memory and transceiver memory retained, RF transceiver in sleep mode
- 210 µA/MHz Cortex-M3 dynamic current
- 12.8 mA transceiver in receive mode, Cortex-M3 in hibernate mode
- 9 mA to 32 mA transceiver in transmit mode, Cortex-M3 in hibernate mode
- RF transceiver
- Frequency bands
- 862 MHz to 928 MHz
- 431 MHz to 464 MHz
- Multiple configurations supported
- Receiver sensitivity, bit error rate (BER)
- -107.5 dBm at 38.4 kbps, 2FSK
- Single-ended and differential power amplifier (PA)
- Low external bill of materials (BOM)
- Microcontroller
- 32-bit ARM Cortex-M3 processor
- Serial wire download and debug

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

- External watch crystal for wake-up timer
- 16 MHz internal oscillator with 8-way, programmable divider
- Memory
- 128 kB Flash/EE memory, 16 kB SRAM
- 10,000-cycle Flash/EE endurance
- 10-year Flash/EE retention
- In-circuit download via serial wire and UART
- On-chip peripherals
- UART, I 2 C, and SPI serial I/O
- 28-pin GPIO port
- 2 general-purpose, 16-bit timers
- 32-bit wake-up timer
- 16-bit watchdog timer
- 8-channel pulse-width modulation (PWM)
- Package
- 64-lead, 9 mm × 9 mm LFCSP
- Temperature range: -40°C to +85°C
- Tools
- Low cost development system
- Third-party compiler and emulator tool support

## APPLICATIONS

- Battery-powered wireless sensors
- Medical telemetry systems
- Industrial and home automation
- Asset tracking
- Security systems (access systems)
- Health and fitness applications

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................1            |     |
| General Description...............................................3        |     |
| Specifications........................................................     | 4   |
| Electrical Specifications......................................4           |     |
| RF Link Specifications........................................6            |     |
| Timing Specifications.........................................             | 8   |

## REVISION HISTORY

## 10/2024-Rev. A to Rev. B

Changed Master to Main and Slave to Subordinate (Throughout).................................................................. 1

Absolute Maximum Ratings.................................12

Thermal Resistance......................................... 12

ESD Caution.....................................................12

Pin Configuration and Function Descriptions...... 13

Typical Performance Characteristics................... 17

Outline Dimensions............................................. 19

Ordering Guide.................................................19

Evaluation Boards............................................ 19

## GENERAL DESCRIPTION

The ADuCRF101 is a fully integrated, data acquisition solution that is designed for low power, wireless applications. It features a 12-bit analog-to-digital converter (ADC), a low power ARM ®  Cortex ® -M3 processor, a 862 MHz to 928 MHz and 431 MHz to 464 MHz RF transceiver, and Flash ® /EE memory. The ADuCRF101 is packaged in a 9 mm × 9 mm LFCSP.

The data acquisition section consists of a 12-bit SAR ADC. The six inputs can be configured in single-ended or differential mode. When configured in single-ended mode, they can be used for ratiometric measurements on sensors that are powered, when required, from the internal low dropout regulator (LDO). An internal battery monitor channel and an on-chip temperature sensor are also available.

This wireless data acquisition system is designed to operate in battery-powered applications where low power is critical. The device can be configured in normal operating mode or different low power modes under direct program control. In flexi mode, any peripheral can wake up the device and operate it. In hibernate mode, the internal wake-up timer remains active. In shutdown mode, only an external interrupt can wake up the device.

The ADuCRF101 integrates a low power ARM Cortex-M3 processor. It is a 32-bit RISC machine, offering up to 1.25 DMIPS peak performance. The ARM Cortex-M3 processor also has a flexible 14-channel direct memory access (DMA) controller that supports communication peripherals, serial peripheral interface (SPI), UART, and I 2 C. Also provided on chip are 128 kB of nonvolatile Flash/EE memory and 16 kB of SRAM.

A 16 MHz on-chip oscillator generates the system clock. This clock can be internally divided for the processor to operate at a lower frequency, thus saving power. A low power, internal 32 kHz oscillator is available and can be used to clock the four timers, as follows: two general-purpose timers, a wake-up timer, and a system watchdog timer.

A range of communication peripherals can be configured, as required, in a specific application. These peripherals include UART, I 2 C, SPI, GPIO ports, PWM, and RF transceivers.

The RF transceiver communicates in the 862 MHz to 928 MHz and 431 MHz to 464 MHz frequency bands using multiple configurations.

On-chip factory firmware supports in-circuit serial download via the UART, and nonintrusive emulation and program download are also supported via the serial wire interface. These features are incorporated into a low cost development system supporting this precision analog microcontroller family.

The ADuCRF101 operates from 2.2 V to 3.6 V and is specified over an industrial temperature range of -40°C to +85°C. It is available in a 64-lead LFCSP package.

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

AVDD = IOVDD = VDDBAT1 = VDDBAT2 = 2.2 V to 3.6 V, V REF = 1.25 V internal reference, f CORE = 16 MHz, T A = -40°C to +85°C, unless otherwise noted. Default ADC sampling frequency of 167 kSPS (eight acquisition clocks and ADC clock frequency of 4 MHz).

| Table 1. Parameter                         | Test Conditions/Comments                                                                      | Min   | Typ          | Max             | Unit   |
|--------------------------------------------|-----------------------------------------------------------------------------------------------|-------|--------------|-----------------|--------|
| DC ACCURACY                                | Single-ended input mode; applies to all ADC input channels                                    |       |              |                 |        |
| Resolution                                 |                                                                                               |       | 12           |                 | Bits   |
| Integral Nonlinearity                      | V REF = 1.25 V from internal reference                                                        |       | -2.5 to +1   |                 | LSB    |
|                                            | V REF = 1.8 V from LDO                                                                        |       | -2.5 to +0.5 |                 | LSB    |
| Differential Nonlinearity                  | Guaranteed no missing code at 167 kSPS                                                        |       | ±1           |                 | LSB    |
| DC Code Distribution                       |                                                                                               |       |              |                 |        |
| Differential                               | ADC input shorted, V CM = 0.4 V                                                               |       | 1            |                 | LSB    |
| Ratiometric Measurement                    | Using two 10 kΩ resistors                                                                     |       | 5            |                 | LSB    |
| CALIBRATED ENDPOINT ERRORS                 | Measured using the factory-set default values of the ADCOF and ADCGN registers 1              |       |              |                 |        |
| Offset Error                               |                                                                                               |       | ±1.6         |                 | LSB    |
| Gain Error                                 |                                                                                               |       | ±1           |                 | LSB    |
| DYNAMIC PERFORMANCE                        | f IN = 1 kHz sine wave                                                                        |       |              |                 |        |
| Signal-to-Noise Ratio (SNR)                |                                                                                               |       | 68           |                 | dB     |
| Signal-to-Noise + Distortion Ratio (SINAD) |                                                                                               |       | 66           |                 | dB     |
| Total Harmonic Distortion (THD)            |                                                                                               |       | -69          |                 | dB     |
| Spurious-Free Dynamic Range (SFDR)         |                                                                                               |       | 70           |                 | dB     |
| ANALOG INPUT                               |                                                                                               |       |              |                 |        |
| Input Voltage Ranges 2                     |                                                                                               |       |              |                 |        |
| Single-Ended Input                         |                                                                                               | 0     |              | V REF           | V      |
| Differential Input                         |                                                                                               | 0     |              | V CM ± V REF /2 | V      |
| Leakage Current                            | Excluding VREF pin                                                                            |       | 100          |                 | nA     |
| Input Capacitance                          | During ADC acquisition                                                                        |       | 20           |                 | pF     |
| ON-CHIP VOLTAGE REFERENCE                  |                                                                                               |       |              |                 |        |
| Output Voltage                             |                                                                                               |       | 1.25         |                 | V      |
| Accuracy                                   | Measured at T A = 25°C                                                                        |       | ±5           |                 | mV     |
| Reference Temperature Coefficient          |                                                                                               |       | ±40          |                 | ppm/°C |
| Power Supply Rejection Ratio (PSRR)        |                                                                                               |       | 60           |                 | dB     |
| Output Impedance                           |                                                                                               |       | 2            |                 | Ω      |
| Internal V REF Power-On Time               | 0.47 µF external capacitor                                                                    |       | 5            |                 | ms     |
| TEMPERATURE SENSOR 2                       | Indicates die temperature                                                                     |       |              |                 |        |
| Voltage Output at 25°C                     |                                                                                               |       | 435          |                 | mV     |
| Voltage Temperature Coefficient            |                                                                                               |       | 1.14         |                 | mV/°C  |
| Thermal Impedance                          |                                                                                               |       | 35           |                 | °C/W   |
| CURRENT CONSUMPTION                        |                                                                                               |       |              |                 |        |
| Cortex-M3 in Shutdown Mode                 | RF transceiver in sleep mode, memory not retained                                             |       | 280          |                 | nA     |
| Cortex-M3 in Hibernate Mode                | Wake-up timer running from external 32 kHz crystal, 8 kB of SRAM retained (8 kB not retained) |       |              |                 |        |
| RF Transceiver in Sleep Mode               |                                                                                               |       |              |                 |        |
| Memory Retained                            |                                                                                               |       | 1.9          |                 | µA     |
| Memory Not Retained                        |                                                                                               |       | 1.75         |                 | µA     |
| RF Transceiver in Receive Mode             |                                                                                               |       | 12.8         |                 | mA     |
| RF Transceiver in Transmit Mode            |                                                                                               |       | 9 to 32      |                 | mA     |

## SPECIFICATIONS

Table 1. (Continued)

| Parameter                                          | Test Conditions/Comments                                                                       | Min    | Typ    | Max         | Unit   |
|----------------------------------------------------|------------------------------------------------------------------------------------------------|--------|--------|-------------|--------|
| Cortex-M3 in Active Mode                           | RF transceiver idle (PHY_ON state or PHY_OFF state) 1                                          |        |        |             |        |
| Static Current                                     |                                                                                                |        | 2.0    |             | mA     |
| Dynamic Current                                    |                                                                                                |        | 210    |             | µA/MHz |
| START-UP TIME 2                                    |                                                                                                |        |        |             |        |
| From Flexi Mode                                    | FCLK is the Cortex-M3 clock or divided version of the 16 MHz oscillator                        |        | 3 to 5 |             | FCLK   |
| From Hibernate Mode                                | From wake-up event to user code execution                                                      |        | 13.4   |             | µs     |
| From Power-On and Shutdown Mode                    | From applying power/asserting active external interrupt to user code execution                 |        | 55     |             | ms     |
| RF Link, Waking Up from Sleep Mode                 | Includes 310 µs for 26 MHz crystal startup (7 pF load capacitor at T A = 25°C)                 |        | 562.8  |             | µs     |
| POWER SUPPLY REQUIREMENTS                          |                                                                                                |        |        |             |        |
| Power Supply Voltage Range 2                       |                                                                                                | 2.2    |        | 3.6         | V      |
| POWER SUPPLY MONITOR                               |                                                                                                |        |        |             |        |
| Trip Point Voltage                                 |                                                                                                |        | 2      |             | V      |
| WATCHDOG TIMER 2                                   |                                                                                                |        |        |             |        |
| Timeout Period                                     | Programmable                                                                                   | 0      |        | 512         | sec    |
| FLASH/EE MEMORY 2                                  |                                                                                                |        |        |             |        |
| Endurance 3                                        |                                                                                                | 10,000 |        |             | Cycles |
| Data Retention 4                                   | T J = 85°C                                                                                     | 10     |        |             | Years  |
| DIGITAL INPUTS                                     | All digital inputs, excluding LFXTAL1 and XOSC26P                                              |        |        |             |        |
| Input Current (Leakage Current)                    | V INH = IOVDD or V INH = 2.2 V, pull-up disabled; V INL = 0 V, pull-up disabled Excluding P2.4 |        | 10 10  |             | nA pF  |
| Input Capacitance LOGIC INPUTS                     |                                                                                                |        |        |             |        |
| Input Low Voltage, V INL Input High Voltage, V INH | All logic inputs, including LFXTAL1 but excluding XOSC26P                                      | 0.7 ×  |        | 0.2 × IOVDD | V V    |
| LOGIC OUTPUTS                                      |                                                                                                |        |        |             |        |
|                                                    | I SOURCE = 1 mA                                                                                | IOVDD  |        |             | V      |
| Output Low Voltage, V OL                           |                                                                                                |        |        | 0.36        |        |
| Output High Voltage, V OH                          | I SINK = 1 mA                                                                                  |        |        |             | V      |
| 32.768 kHz CRYSTAL Input Current (Leakage Current) | 32.768 kHz crystal, for use                                                                    |        | 50     |             | nA     |
|                                                    | with timers V INH = IOVDD or V INH = 2.2 V, V INL = 0 V                                        |        |        |             |        |
| LFXTAL1 Input Capacitance                          |                                                                                                |        | 5      |             | pF     |
| LFXTAL2 Output Capacitance                         |                                                                                                |        | 5      |             | pF     |
| 26 MHz CRYSTAL                                     |                                                                                                |        |        |             |        |
| XOSC26P Input Capacitance                          |                                                                                                |        | 10     |             | pF     |
| XOSC26N Output Capacitance                         |                                                                                                |        | 10     |             | pF     |
| INTERNAL HIGH FREQUENCY (HF) OSCILLATOR            | Processor clock by default                                                                     |        | 16     |             | MHz    |
| Tolerance                                          |                                                                                                |        | ±3     |             | %      |
| INTERNAL LOW FREQUENCY (LF) OSCILLATOR             |                                                                                                |        | 32.768 |             | kHz    |
| Tolerance                                          |                                                                                                |        | ±20    |             | %      |
| MCU CLOCK DIVIDER 2                                | Eight programmable core clock dividers                                                         | 1      |        | 128         |        |
| EXTERNAL CLOCK INPUT 2 Range                       |                                                                                                | 32.768 |        | 16,000      |        |
|                                                    | External MCU clock range allowed                                                               |        |        |             | kHz    |

1 For detailed information, see the UG-231 User Guide.

## SPECIFICATIONS

2 These values are not production tested; they are guaranteed by design and/or characterization data at production release.

3 Endurance is qualified to 10,000 cycles as per JEDEC Standard No. 22-A117 and measured at -40°C, +25°C, and +85°C. Typical endurance at 25°C is 170,000 cycles.

4 Retention lifetime equivalent at a junction temperature (T J ) of 85°C as per JEDEC Standard No. 22-A117. Retention lifetime derates with junction temperature.

## RF LINK SPECIFICATIONS

Table 2.

| Parameter                                | Test Conditions/Comments                                                  | Min   | Typ          | Max   | Unit   |
|------------------------------------------|---------------------------------------------------------------------------|-------|--------------|-------|--------|
| FREQUENCY BANDS RANGE                    |                                                                           | 862   |              | 928   | MHz    |
|                                          |                                                                           | 431   |              | 464   | MHz    |
| PHASE-LOCKED LOOP                        |                                                                           |       |              |       |        |
| Channel Frequency Resolution             |                                                                           |       | 396.7        |       | Hz     |
| Phase Noise (In Band)                    | 10 kHz offset, power amplifier (PA) output power = 10 dBm                 |       | -88          |       | dBc/Hz |
| DATA RATE                                |                                                                           |       |              |       |        |
| 2FSK/GFSK                                |                                                                           | 1     |              | 300   | kbps   |
| DIFFERENTIAL POWER AMPLIFIER (PA)        |                                                                           |       |              |       |        |
| Transmit Power 1                         | Programmable                                                              |       | -17 to +10   |       | dBm    |
| Transmit Power Variation vs. Temperature | From -40°C to +85°C, RF frequency = 868 MHz                               |       | ±1           |       | dB     |
| Transmit Power Flatness                  | From 902 MHz to 928 MHz and 863 MHz to 870 MHZ                            |       | ±1           |       | dB     |
| SINGLE-ENDED PA                          |                                                                           |       |              |       |        |
| Transmit Power 1                         | Programmable                                                              |       | -21 to 13    |       | dBm    |
| Transmit Power Variation vs. Temperature | From -40°C to +85°C, RF frequency = 868 MHz                               |       | ±0.5         |       | dB     |
| Transmit Power Flatness                  | From 431 MHz to 464 MHz and 862 MHz to 928 MHZ                            |       | ±1           |       | dB     |
| HARMONICS                                | 868 MHz, unfiltered conductive, PA output power = 10 dBm                  |       |              |       |        |
| Single-Ended PA                          |                                                                           |       |              |       |        |
| Second Harmonic                          |                                                                           |       | -29.8        |       | dBc    |
| Third Harmonic                           |                                                                           |       | -15.9        |       | dBc    |
| Fourth Harmonic                          |                                                                           |       | -24          |       | dBc    |
| Differential PA                          |                                                                           |       |              |       |        |
| Second Harmonic                          |                                                                           |       | -33.6        |       | dBc    |
| Third Harmonic                           |                                                                           |       | -15.6        |       | dBc    |
| Fourth Harmonic                          |                                                                           |       | -36.7        |       | dBc    |
| OPTIMUM PA LOAD IMPEDANCE                |                                                                           |       |              |       |        |
| Single-Ended PA, Transmit Mode           |                                                                           |       |              |       |        |
| f RF = 915 MHz                           |                                                                           |       | 31.2 + j10.4 |       | Ω      |
| f RF = 868 MHz                           |                                                                           |       | 23.5 + j9.7  |       | Ω      |
| f RF = 433 MHz                           |                                                                           |       | 35.4 + j3.4  |       | Ω      |
| Single-Ended PA, Receive Mode            |                                                                           |       |              |       |        |
| f RF = 915 MHz                           |                                                                           |       | 7.3 - j126.3 |       | Ω      |
| f RF = 868 MHz                           |                                                                           |       | 6.9 - j134.2 |       | Ω      |
| Differential PA, Transmit Mode           | Load impedance between RFIO_1P and RFIO_1N to ensure maximum output power |       |              |       |        |
| f RF = 915 MHz                           |                                                                           |       | 38.7 + j20.6 |       | Ω      |
| f RF = 868 MHz                           |                                                                           |       | 42.2 + j20.1 |       | Ω      |
| f RF = 433 MHz                           |                                                                           |       | 55.6 + j54.9 |       | Ω      |
| 2FSK/GFSK INPUT SENSITIVITY, BER         | At BER = 10 -3                                                            |       |              |       |        |
| 1.0 kbps                                 | Frequency deviation = 10 kHz, IF filter bandwidth = 100 kHz               |       | -116         |       | dBm    |
| 38.4 kbps                                | Frequency deviation = 20.0 kHz, IF filter bandwidth = 100 kHz             |       | -107.5       |       | dBm    |
| 300 kbps                                 | Frequency deviation = 75 kHz, IF filter bandwidth = 300 kHz               |       | -100.0       |       | dBm    |

## SPECIFICATIONS

Table 2. (Continued)

| Parameter                                            | Test Conditions/Comments                                                                                                                                                                                                                                                      | Min   | Typ          | Max   | Unit   |
|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------------|-------|--------|
| 2FSK/GFSK INPUT SENSITIVITY, PACKET ERROR RATE (PER) | At PER = 1%, packet length = 20 bytes, packet mode                                                                                                                                                                                                                            |       |              |       |        |
| 1.0 kbps                                             | Frequency deviation = 10 kHz, IF filter bandwidth = 100 kHz                                                                                                                                                                                                                   |       | -114         |       | dBm    |
| 38.4 kbps                                            | Frequency deviation = 20.0 kHz, IF filter bandwidth = 100 kHz                                                                                                                                                                                                                 |       | -105.5       |       | dBm    |
| 300 kbps                                             | Frequency deviation = 75 kHz, IF filter bandwidth = 300 kHz                                                                                                                                                                                                                   |       | -96          |       | dBm    |
| ADJACENT CHANNEL REJECTION                           |                                                                                                                                                                                                                                                                               |       |              |       |        |
| Continuous Wave (CW) Interferer                      | Wanted signal 3 dB above the input sensitivity level (BER = 10 -3 ), CW interferer power level increased until BER = 10 -3 , image calibrated                                                                                                                                 |       |              |       |        |
| ±200 kHz Channel Spacing                             | IF bandwidth (BW) = 100 kHz, wanted signal: f DEV = 12.5 kHz, DR = 50 kbps +200 kHz channel spacing/-200 kHz channel spacing                                                                                                                                                  |       | 36/36        |       | dB     |
| ±300 kHz Channel Spacing                             | IF BW = 100 kHz, wanted signal: f DEV = 25 kHz, DR = 100 kbps +300 kHz channel spacing/-300 kHz channel spacing                                                                                                                                                               |       | 39/39        |       | dB     |
| ±600 kHz Channel Spacing                             | IF BW = 300 kHz, wanted signal: f DEV = 75 kHz, DR = 300 kbps +600 kHz channel spacing/-600 kHz channel spacing                                                                                                                                                               |       | 38/30        |       | dB     |
| Modulated Interferer ±200 kHz Channel Spacing        | Wanted signal 3 dB above the input sensitivity level (BER = 10 -3 ), modulated interferer with the same modulation as the wanted signal; interferer power level increased until BER = 10 -3 , image calibrated IF BW = 100 kHz, wanted signal: f DEV = 12.5 kHz, DR = 50 kbps |       | 34/34        |       | dB     |
| ±300 kHz Channel Spacing                             | +200 kHz channel spacing/-200 kHz channel spacing IF BW = 100 kHz, wanted signal: f DEV = 25 kHz, DR = 100 kbps +300 kHz channel spacing/-300 kHz channel spacing                                                                                                             |       | 39/35        |       | dB     |
| ±600 kHz Channel Spacing                             | IF BW = 300 kHz, wanted signal: f DEV = 75 kHz, DR = 300 kbps +600 kHz channel spacing/-600 kHz channel spacing                                                                                                                                                               |       | 35/16        |       | dB     |
| CO-CHANNEL REJECTION                                 | Wanted signal 10 dB above the input sensitivity level (BER = 10 -3 ), data rate = 38.4 kbps, frequency deviation = 20 kHz                                                                                                                                                     |       | -4           |       | dB     |
| BLOCKING, ETSI EN 300 220                            | Measurement procedure as per ETSI EN 300 220-1 V2.3.1; wanted signal 3 dB above the ETSI EN 300 220 reference sensitivity level -99 dBm, IF bandwidth = 100 kHz, data rate = 38.4 kbps,                                                                                       |       | -29          |       |        |
| ±2 MHz ±10 MHz                                       | of unmodulated interferer                                                                                                                                                                                                                                                     |       |              |       | dBm    |
| WIDEBAND INTERFERENCE REJECTION                      | Swept from 10 MHz to 100 MHz either side of the RF frequency Measured as image attenuation at the IF filter output, carrier wave                                                                                                                                              |       | -20.5 75     |       | dBm    |
| IMAGE CHANNEL ATTENUATION                            | interferer at 400 kHz below the channel frequency, 100 kHz IF filter                                                                                                                                                                                                          |       |              |       | dB     |
| 868 MHz                                              | bandwidth Uncalibrated 2 /calibrated                                                                                                                                                                                                                                          |       | 36/42        |       | dB     |
| RSSI                                                 |                                                                                                                                                                                                                                                                               |       |              |       |        |
| Range at Input                                       |                                                                                                                                                                                                                                                                               |       | -97 to -26   |       | dBm    |
| Linearity                                            |                                                                                                                                                                                                                                                                               |       | ±2           |       | dB     |
| Absolute Accuracy                                    |                                                                                                                                                                                                                                                                               |       | ±3           |       | dB     |
| LNA INPUT IMPEDANCE                                  |                                                                                                                                                                                                                                                                               |       |              |       |        |
| Receive Mode                                         |                                                                                                                                                                                                                                                                               |       |              |       |        |
| f RF = 915 MHz                                       |                                                                                                                                                                                                                                                                               |       | 68.9 - j36.1 |       | Ω      |
| f RF = 868 MHz                                       |                                                                                                                                                                                                                                                                               |       | 71.6 - j36.4 |       | Ω      |
| f RF = 433 MHz                                       |                                                                                                                                                                                                                                                                               |       | 99.2 - j31.3 |       | Ω      |
| Transmit Mode                                        |                                                                                                                                                                                                                                                                               |       |              |       |        |
| f RF = 915 MHz                                       |                                                                                                                                                                                                                                                                               |       | 8.6 + j21.1  |       | Ω      |
| f RF = 868 MHz                                       |                                                                                                                                                                                                                                                                               |       | 8.6 + j20.4  |       | Ω      |
| f RF = 433 MHz                                       |                                                                                                                                                                                                                                                                               |       | 8.2 + j11.4  |       | Ω      |

## SPECIFICATIONS

Table 2. (Continued)

| Parameter               | Test Conditions/Comments                | Typ   | Max   | Unit   |
|-------------------------|-----------------------------------------|-------|-------|--------|
| RX SPURIOUS EMISSIONS 3 |                                         |       |       |        |
| Maximum < 1 GHz         | At antenna input, unfiltered conductive | -66   |       | dBm    |
| Maximum > 1 GHz         | At antenna input, unfiltered conductive | -51   |       | dBm    |

## TIMING SPECIFICATIONS

## I 2 C Timing

Capacitive load for each of the I 2 C bus lines, Cb = 400 pF maximum as per the I 2 C bus specifications. I 2 C timing is guaranteed by design and not production tested.

## I 2 C Timing in Fast Mode (400 KHz)

Table 3.

| Parameter   | Description                                                  | Min         | Max   | Unit   |
|-------------|--------------------------------------------------------------|-------------|-------|--------|
| t L         | Clock (I2CSCL) low pulse width                               | 1300        |       | ns     |
| t H         | Clock (I2CSCL) high pulse width                              | 600         |       | ns     |
| t SHD       | Start condition hold time                                    | 600         |       | ns     |
| t DSU       | Data (I2CSDA) setup time                                     | 100         |       | ns     |
| t DHD       | Data (I2CSDA) hold time                                      | 0           |       | ns     |
| t RSU       | Setup time for repeated start                                | 600         |       | ns     |
| t PSU       | Stop condition setup time                                    | 600         |       | ns     |
| t BUF       | Bus free time between a stop condition and a start condition | 1.3         |       | μs     |
| t R         | Rise time for both clock and data                            | 20 + 0.1 Cb | 300   | ns     |
| t F         | Fall time for both clock and data                            | 20 + 0.1 Cb | 300   | ns     |
| t SUP       | Pulse width of spike suppressed                              | 0           | 50    | ns     |

## I 2 C Timing in Standard Mode (100 KHz)

Table 4.

| Parameter   | Description                                                  | Min   | Max   | Unit   |
|-------------|--------------------------------------------------------------|-------|-------|--------|
| t L         | Clock (I2CSCL) low pulse width                               | 4.7   |       | µs     |
| t H         | Clock (I2CSCL) high pulse width                              | 4.0   |       | µs     |
| t SHD       | Start condition hold time                                    | 4.7   |       | µs     |
| t DSU       | Data (I2CSDA) setup time                                     | 250   |       | ns     |
| t DHD       | Data (I2CSDA) hold time                                      | 0     |       | µs     |
| t RSU       | Setup time for repeated start                                | 4.0   |       | µs     |
| t PSU       | Stop condition setup time                                    | 4.0   |       | µs     |
| t BUF       | Bus free time between a stop condition and a start condition | 4.7   |       | µs     |
| t R         | Rise time for both clock and data                            |       | 1     | µs     |
| t F         | Fall time for both clock and data                            |       | 300   | ns     |

## SPECIFICATIONS

Figure 2. I 2 C Compatible Interface Timing

<!-- image -->

## SPI Timing

SPI timing is guaranteed by design and not production tested.

## SPI Main Mode Timing

Table 5.

| Parameter   | Description                            | Min                     | Typ                     | Max   | Unit   |
|-------------|----------------------------------------|-------------------------|-------------------------|-------|--------|
| t SL        | SCLK low pulse width 1                 |                         | (SPIDIV 2 + 1) × t UCLK |       | ns     |
| t SH        | SCLK high pulse width 1                |                         | (SPIDIV 2 + 1) × t UCLK |       | ns     |
| t DAV       | Data output valid after SCLK edge      |                         | 0                       | 32.0  | ns     |
| t DOSU      | Data output setup before SCLK edge 1   | (SPIDIV 2 + 1) × t UCLK |                         |       | ns     |
| t DSU       | Data input setup time before SCLK edge | 59.8                    |                         |       | ns     |
| t DHD       | Data input hold time after SCLK edge   | 16.0                    |                         |       | ns     |
| t DF        | Data output fall time                  |                         | 10.6                    | 32.0  | ns     |
| t DR        | Data output rise time                  |                         | 10.6                    | 32.0  | ns     |
| t SR        | SCLK rise time                         |                         | 10.6                    | 32.0  | ns     |
| t SF        | SCLK fall time                         |                         | 10.6                    | 32.0  | ns     |

Figure 3. SPI Main Mode Timing (Phase Mode = 1)

<!-- image -->

## SPECIFICATIONS

Figure 4. SPI Main Mode Timing (Phase Mode = 0)

<!-- image -->

## SPI Subordinate Mode Timing

Table 6.

| Parameter   | Description                            | Min   | Typ                     | Max   | Unit   |
|-------------|----------------------------------------|-------|-------------------------|-------|--------|
| t CS        | CS to SCLK edge                        | 12.9  |                         |       | ns     |
| t SL        | SCLK low pulse width 1                 |       | (SPIDIV 2 + 1) × t UCLK |       | ns     |
| t SH        | SCLK high pulse width 1                | 62.5  | (SPIDIV 2 + 1) × t UCLK |       | ns     |
| t DAV       | Data output valid after SCLK edge      |       |                         | 47.4  | ns     |
| t DSU       | Data input setup time before SCLK edge | 25.8  |                         |       | ns     |
| t DHD       | Data input hold time after SCLK edge   | 12.9  |                         |       | ns     |
| t DF        | Data output fall time                  |       | 10.6                    | 32.0  | ns     |
| t DR        | Data output rise time                  |       | 10.6                    | 32.0  | ns     |
| t SR        | SCLK rise time                         |       | 10.6                    | 32.0  | ns     |
| t SF        | SCLK fall time                         |       | 10.6                    | 32.0  | ns     |
| t DOCS      | Data output valid after CS edge        |       |                         | 59.8  | ns     |
| t SFS       | CS high after SCLK edge                | 12.9  |                         |       | ns     |

Figure 5. SPI Subordinate Mode Timing (Phase Mode = 1)

<!-- image -->

## SPECIFICATIONS

Figure 6. SPI Subordinate Mode Timing (Phase Mode = 0)

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

TA = 25°C, unless otherwise noted

Table 7.

| Parameter                                | Rating            |
|------------------------------------------|-------------------|
| AVDD, IOVDD, VDDBAT1, and VDDBAT2 to GND | -0.3 V to +3.96 V |
| Digital Input Voltage to GND             | -0.3 V to +3.96 V |
| Digital Output Voltage to GND            | -0.3 V to +3.96 V |
| VREF to GND                              | -0.3 V to +3.96 V |
| Analog Inputs to GND                     | -0.3 V to +2.1 V  |
| ESD (Human Body Model)                   | ±2.5 kV           |
| Temperature                              |                   |
| Operating Temperature Range              | -40°C to +85°C    |
| Storage Temperature Range                | -65°C to +150°C   |
| Junction Temperature                     | 105°C             |
| Peak Solder Reflow Temperature           |                   |
| Pb-Free Assemblies (30 sec)              | 260°C             |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

The exposed package paddle must be soldered to a metal pad on the printed circuit board (PCB) and connected to ground.

## THERMAL RESISTANCE

θ JA is specified for the worst-case conditions, that is, a device soldered in a circuit board for surface-mount packages.

## Table 8. Thermal Resistance

| Package Type     |   θ JA | Unit   |
|------------------|--------|--------|
| 64-Lead LFCSP_VQ |     35 | °C/W   |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 7. Pin Configuration

<!-- image -->

Table 9. Pin Function Descriptions

|   Pin No. | Mnemonic   | Description                                                                                                                                                                                                               |
|-----------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | VDDRF1     | Voltage Regulator Output for RF Block. For regulator stability and noise rejection, place a 220 nF capacitor between this pin and ground.                                                                                 |
|         2 | RBIAS      | External Bias Resistor. Use a 36 kΩ resistor with 2% tolerance.                                                                                                                                                           |
|         3 | VDDRF2     | Voltage Regulator Output for RF Block. For regulator stability and noise rejection, place a 220 nF capacitor between this pin and ground.                                                                                 |
|         4 | RFIO_1P    | LNA Positive Input in Receive Mode; Differential PA Positive Output in Transmit Mode.                                                                                                                                     |
|         5 | RFIO_1N    | LNA Negative Input in Receive Mode; Differential PA Negative Output in Transmit Mode.                                                                                                                                     |
|         6 | RFO2       | Single-Ended PA Output.                                                                                                                                                                                                   |
|         7 | VDDBAT2    | Battery Terminal 1 . Supply for the LDOs used in the RF section of the transceiver.                                                                                                                                       |
|         8 | AVDD       | Battery Terminal 1 . Supply for the analog circuits such as the ADC and ADC internal reference, POR, PSM, and LDOs.                                                                                                       |
|         9 | VREF       | Internal 1.25 V ADC Reference. Place a 0.47 µF capacitor between this pin and ground.                                                                                                                                     |
|        10 | ADC0       | ADC Input Channel 0. Input of DIFF0 pair in differential mode. 2                                                                                                                                                          |
|        11 | ADC1       | ADC Input Channel 1. Input of DIFF0 pair in differential mode. 2                                                                                                                                                          |
|        12 | ADC2       | ADC Input Channel 2. Input of DIFF1 pair in differential mode. 2                                                                                                                                                          |
|        13 | ADC3       | ADC Input Channel 3. Input of DIFF1 pair in differential mode. 2                                                                                                                                                          |
|        14 | ADC4       | ADC Input Channel 4. Input of DIFF2 pair in differential mode. 2                                                                                                                                                          |
|        15 | ADC5       | ADC Input Channel 5. Input of DIFF2 pair in differential mode. 2                                                                                                                                                          |
|        16 | LVDD1      | On-Chip LDO Decoupling Output. Connect a 0.47 µF capacitor to the 1.8 V output to ensure that the core operating voltage is stable. For correct operation, connect a 1 µF capacitor between this pin and LVDD2 (Pin 18).  |
|        17 | VDDVCO     | Voltage Regulator Output for Voltage Controlled Oscillator (VCO). For regulator stability and noise rejection, place a 220 nF capacitor between this pin and ground.                                                      |
|        18 | LVDD2      | On-Chip LDO Decoupling Output. Connect a 0.47 µF capacitor to the 1.32 V output to ensure that the core operating voltage is stable. For correct operation, connect a 1 µF capacitor between this pin and LVDD1 (Pin 16). |
|        19 | SWDIO      | Serial Wire Bidirectional Data.                                                                                                                                                                                           |
|        20 | GND        | Ground. Connect this pin to the exposed pad.                                                                                                                                                                              |
|        21 | IOVDD      | General-Purpose I/O Supply 1 . Connect this pin to the battery terminal.                                                                                                                                                  |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 9. Pin Function Descriptions (Continued)

|   Pin No. | Mnemonic                     | Description                                                                                                                                                                                                                                                   |
|-----------|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        22 | SWCLK                        | Serial Wire Debug Clock.                                                                                                                                                                                                                                      |
|        23 | VCOGUARD                     | Guard, Screen for VCO. Connect this pin to VDDVCO.                                                                                                                                                                                                            |
|        24 | VDDSYNTH                     | Voltage Regulator Output for Synthesizer. For regulator stability and noise rejection, place a 220 nF capacitor between this pin and ground.                                                                                                                  |
|        25 | CWAKE                        | External Capacitor for Wake-Up Control. Place a 150 nF capacitor between this pin and ground.                                                                                                                                                                 |
|        26 | XOSC26P                      | Connect the 26 MHz reference crystal between this pin and XOSC26N (HFXTAL). 3                                                                                                                                                                                 |
|        27 | XOSC26N                      | Connect the 26 MHz reference crystal between this pin and XOSC26P (HFXTAL).                                                                                                                                                                                   |
|        28 | DGUARD                       | Internal Guard, Screen for Digital Cells. Connect this pin to VDD_DIG1.                                                                                                                                                                                       |
|        29 | VDD_DIG1                     | Voltage Regulator Output for the Digital Section of the Transceiver. For regulator stability and noise rejection, place a 220 nF capacitor between this pin and ground.                                                                                       |
|        30 | P1.5/IRQ6/I2CSDA/PWM7        | General-Purpose Input and Output Port 1.5 (P1.5). External Interrupt 6 (IRQ6). I 2 C Serial Data (I2CSDA).                                                                                                                                                    |
|        31 | P1.4/IRQ5/I2CSCL/PWM6        | General-Purpose Input and Output Port 1.4 (P1.4). External Interrupt 5 (IRQ5). I 2 C Serial Clock (I2CSCL). PWM Channel 6 (PWM6).                                                                                                                             |
|        32 | P1.3/PWM5                    | General-Purpose Input and Output Port 1.3 (P1.3). PWM Channel 5 (PWM5).                                                                                                                                                                                       |
|        33 | P1.2/PWM4                    | General-Purpose Input and Output Port 1.2 (P1.2). PWM Channel 4 (PWM4).                                                                                                                                                                                       |
|        34 | P1.1/POR/TXD/PWM3            | General-Purpose Input and Output Port 1.1 (P1.1). Power-On Reset Output (POR). UART TXD (TXD).                                                                                                                                                                |
|        35 | P1.0/RXD/IRQ4/MOSI/PWM2      | General-Purpose Input and Output Port 1.0 (P1.0). UART RXD (RXD). External Interrupt 4 (IRQ4). SPI1 Main Out, Subordinate In (MOSI).                                                                                                                          |
|        36 | P0.5/CS2/ECLKIN              | General-Purpose Input and Output Port 0.5 (P0.5). SPI1 Chip Select 2 (CS2).                                                                                                                                                                                   |
|        37 | P0.4/CS1/ECLKOUT             | General-Purpose Input and Output Port 0.4 (P0.4). SPI1 Chip Select 1 (CS1).                                                                                                                                                                                   |
|        38 | P2.6                         | General-Purpose Input and Output Port 2.6. Do not connect this pin. This pin is connected internally to the RF transceiver. It can be used for BER measurements.                                                                                              |
|        39 | P0.3/IRQ1/CS0/ADCCONVST/PWM1 | General-Purpose Input and Output Port 0.3 (P0.3). External Interrupt 1 (IRQ1). SPI1 Chip Select 0 (CS0). ADC Convert Start (ADCCONVST).                                                                                                                       |
|        40 | P2.4/IRQ8                    | PWM Channel 1 (PWM1). General-Purpose Input and Output Port 2.4 (P2.4). Do not connect this pin. This pin is connected internally to the RF transceiver and can be used for debug purposes to monitor RF transceiver interrupts. External Interrupt 8 (IRQ8). |
|        41 | P0.2/MOSI/PWM0               | General-Purpose Input and Output Port 0.2 (P0.2). SPI1 Main Out, Subordinate In (MOSI).                                                                                                                                                                       |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 9. Pin Function Descriptions (Continued)

| Pin No.   | Mnemonic                  | Description                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 42        | P0.1/SCLK                 | PWM Channel 0 (PWM0). General-Purpose Input and Output Port 0.1 (P0.1). SPI1 Serial Clock (SCLK).                                                                                                                                                                                                                                                                                         |
| 43        | P0.0/MISO                 | General-Purpose Input and Output Port 0.0 (P0.0). SPI1 Main In, Subordinate Out (MISO).                                                                                                                                                                                                                                                                                                   |
| 44        | IOVDD                     | General-Purpose I/O Supply 1 . Connect this pin to the battery terminal.                                                                                                                                                                                                                                                                                                                  |
| 45        | P0.7/IRQ3/CS4/CTS         | General-Purpose Input and Output Port 0.7 (P0.7). External Interrupt 3 (IRQ3). SPI1 Chip Select 4 (CS4).                                                                                                                                                                                                                                                                                  |
| 46        | BM/P0.6/IRQ2/CS3/RTS/PWM0 | Boot Mode (BM). The ADuCRF101 enters serial download mode if P0.6 is low during, and for a short time after, an external reset event. It executes user code after any reset event or if P0.6 is high during an external reset event. General-Purpose Input and Output Port 0.6 (P0.6). External Interrupt 2 (IRQ2). SPI1 Chip Select 3 (CS3). UART Handshake (RTS). PWM Channel 0 (PWM0). |
| 47        | RESET                     | Reset, Active Low. A low signal on this pin for 24 system clocks causes the device to reset.                                                                                                                                                                                                                                                                                              |
| 48        | P4.0/PWM0                 | General-Purpose Input and Output Port 4.0 (P4.0). PWM Channel 0 (PWM0).                                                                                                                                                                                                                                                                                                                   |
| 50        | P4.2/PWM2                 | General-Purpose Input and Output Port 4.2 (P4.2). PWM Channel 2 (PWM2).                                                                                                                                                                                                                                                                                                                   |
| 51        | P4.3/PWM3                 | General-Purpose Input and Output Port 4.3 (P4.3). PWM Channel 3 (PWM3).                                                                                                                                                                                                                                                                                                                   |
| 52        | P4.4/PWM4                 | General-Purpose Input and Output Port 4.4 (P4.4). PWM Channel 4 (PWM4).                                                                                                                                                                                                                                                                                                                   |
| 53        | P4.5/PWM5                 | General-Purpose Input and Output Port 4.5 (P4.5). PWM Channel 5 (PWM5).                                                                                                                                                                                                                                                                                                                   |
| 54        | LFXTAL2                   | 32.768 kHz Watch Crystal Input for Wake-Up Timers. 32.768 kHz Watch Crystal Output for Wake-Up Timers.                                                                                                                                                                                                                                                                                    |
| 55 56     | LFXTAL1                   | Voltage Regulator Output for the Digital Section of the Transceiver. For regulator stability and noise rejection,                                                                                                                                                                                                                                                                         |
|           | VDD_DIG2                  | place a 220 nF capacitor between this pin and ground.                                                                                                                                                                                                                                                                                                                                     |
| 57        | VDDBAT1                   | Battery Terminal 1 . Supply for the digital section of the transceiver and GPIOs.                                                                                                                                                                                                                                                                                                         |
| 58        | P4.6/PWM6                 | General-Purpose Input and Output Port 4.6 (P4.6). PWM Channel 6 (PWM6).                                                                                                                                                                                                                                                                                                                   |
| 59        | P4.7/PWM7                 | General-Purpose Input and Output Port 4.7 (P4.7). PWM Channel 7 (PWM7).                                                                                                                                                                                                                                                                                                                   |
| 60        | ADCVREF                   | Transceiver ADC Reference Output. For adequate noise rejection, place a 220 nF capacitor between this pin and ground.                                                                                                                                                                                                                                                                     |
| 61        | P3.2/PWMSYNC              | General-Purpose Input and Output Port 3.2 (P3.2). PWM Synchronization (PWMSYNC).                                                                                                                                                                                                                                                                                                          |
| 62        | P3.3/PWMTRIP              | General-Purpose Input and Output Port 3.3 (P3.3). PWM Safety Cutoff (PWMTRIP).                                                                                                                                                                                                                                                                                                            |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 9. Pin Function Descriptions (Continued)

|   Pin No. | Mnemonic   | Description                                                                                                 |
|-----------|------------|-------------------------------------------------------------------------------------------------------------|
|        65 | EP         | Exposed Pad. The exposed package paddle must be soldered to a metal pad on the PCB and connected to ground. |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Single-Ended PA at 868 MHz, Output Power vs. PA Level MCR Setting and V DD

<!-- image -->

Figure 9. Differential PA at 868 MHz; Output Power vs. PA Level MCR Setting, Temperature, and V DD

<!-- image -->

Figure 10. Single-Ended PA at 868 MHz, Transceiver Supply Current vs. Transceiver Output Power, V DD = 3.3 V

<!-- image -->

Figure 11. Differential PA at 868 MHz, Transceiver Supply Current vs. Transceiver Output Power; V DD = 3.3 V

Figure 12. Typical Receiver Wideband Blocking at 868 MHz, V DD = 3.3 V, Data Rate = 38.4 kbps, Frequency Deviation = 20 kHz, Measured as per ETSI EN 300 220

<!-- image -->

Figure 13. Typical Receiver Blocking at 868 MHz, V DD = 3.3 V, Data Rate = 38.4 kbps, Frequency Deviation = 20 kHz, Measured as per ETSI EN 300 220

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 14. RSSI vs. Actual Received Power, 868 MHz, FSK, Data Rate = 38.4 kbps, Frequency Deviation = 20 kHz, IF Bandwidth = 100 kHz

<!-- image -->

Figure 15. Single-Ended and Differential PA Output Power (P OUT ) Deviation vs. Temperature; 868 MHz, V DD = 3.3 V

<!-- image -->

## OUTLINE DIMENSIONS

| Package Drawing (Option)   | Package Type   | Package Description                   |
|----------------------------|----------------|---------------------------------------|
| CP-64-5                    | LFCSP          | 64-Lead Lead Frame Chip Scale Package |

For the latest package outline information and land patterns (footprints), go to Package Index.

## ORDERING GUIDE

| Model 1            | Temperature Range   | Package Description                           | Packing Quantity   | Package Option   |
|--------------------|---------------------|-----------------------------------------------|--------------------|------------------|
| ADuCRF101BCPZ128   | -40°C to +85°C      | 64-Lead Lead Frame Chip Scale Package (LFCSP) | Tray, 250          | CP-64-5          |
| ADuCRF101BCPZ128R7 | -40°C to +85°C      | 64-Lead Lead Frame Chip Scale Package (LFCSP) | Reel, 750          | CP-64-5          |
| ADuCRF101BCPZ128RL | -40°C to +85°C      | 64-Lead Lead Frame Chip Scale Package (LFCSP) | Reel, 2500         | CP-64-5          |

## EVALUATION BOARDS

| Model 1           | Description                                    |
|-------------------|------------------------------------------------|
| EV-ADuCRF101MK3Z  | Evaluation Board 433 MHz Operation             |
| EV-ADuCRF101MK1Z  | Evaluation Board for 868 MHz/915 MHz Operation |
| EV-ADuCRF101QSP1Z | QuickStart Plus for 868 MHz/915 MHz Operation  |
| EV-ADuCRF101QSP3Z | QuickStart Plus for 433 MHz Operation          |
| EV-ADuCRF101QS1Z  | QuickStart for 868 MHz/915 MHz Operation       |
| EV-ADuCRF101QS3Z  | QuickStart for 433 MHz Operation               |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->