<!-- lastmod 2021-11-29 -->
<!-- image -->

## Precision Analog Microcontroller, 12-Bit Analog Input/Output with MDIO interface, Arm Cortex-M33

## FEATURES

- Analog input/output
- Multichannel, 12-bit, 2 MSPS ADC
- Up to 12 external channels
- On-chip die temperature monitor
- 3 power monitor channels
- Single-ended mode
- 0 V to VREF analog input range
- Input buffers
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
- 2× 256 kB independent Flash/EE memories with ECC
- 10,000-cycle Flash/EE endurance
- 20-year Flash/EE retention
- 64 kB SRAM with ECC
- Software triggered, in circuit reprogrammability via MDIO or I 2 C
- On-chip peripherals
- 2× UART, 2× SPI, 3× I 2 C serial input/output
- Multilevel voltage (3.3 V, 1.8 V, 1.2 V) GPIOs
- MDIO slave up to 10 MHz
- 5 general-purpose timers
- Wake-up timer (WUTs)
- Watchdog timers (WDTs)
- 32-element PLA
- 16-bit PWM
- All GPIOs support external interrupt, 5 can support wake -up
- Power
- Multiple supplies: 3.3 V for voltage DACs and ADCs, and 3.3 V, 1.8 V, or 1.2 V for digital inputs/outputs
- Flexible operating modes for low power applications
- Package and temperature range

Rev. A

[DOCUMENT FEEDBACK](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADuCM420.pdf&product=ADuCM420&rev=A)

[TECHNICAL SUPPORT](http://www.analog.com/en/content/technical_support_page/fca.html)

- 3.46 mm × 3.46 mm 64-ball WLCSP
- Fully specified for -40°C to +105°C operation
- Tools
- Low cost quick start development system
- Full third-party support

## APPLICATIONS

- Optical networking 100 Gbps/200 Gbps/400 Gbps and higher frequency modules

## TABLE OF CONTENTS

| Features................................................................ 1                                                                                                                                      | Applications Information...................................... 22                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                                                                       | Power Supplies................................................ 22                                                                                                                                               |
| General Description...............................................3                                                                                                                                             | Power-Up Requirements..................................22                                                                                                                                                       |
| Functional Block Diagram......................................4                                                                                                                                                 | Recommended Circuit and Component                                                                                                                                                                               |
| Specifications........................................................ 5                                                                                                                                        | Values.............................................................22                                                                                                                                           |
| Timing Specifications ........................................ 9                                                                                                                                                | Silicon Anomaly...................................................24                                                                                                                                            |
| Absolute Maximum Ratings.................................14                                                                                                                                                     | ADuCM420 Functionality Issues......................24                                                                                                                                                           |
| Thermal Resistance......................................... 14                                                                                                                                                  | Functionality Issues .........................................24                                                                                                                                                |
| Electrostatic Discharge (ESD) Ratings.............14                                                                                                                                                            | Section 1. ADuCM420 Functionality Issues.....24                                                                                                                                                                 |
| ESD Caution.....................................................14                                                                                                                                              | Outline Dimensions............................................. 25                                                                                                                                              |
| Typical Performance Characteristics...................15                                                                                                                                                        | Ordering Guide.................................................25                                                                                                                                               |
| Pin Configuration and Function Descriptions...... 16                                                                                                                                                            | Evaluation Boards............................................25                                                                                                                                                 |
| Theory of Operation.............................................21                                                                                                                                              |                                                                                                                                                                                                                 |
| REVISION HISTORY                                                                                                                                                                                                |                                                                                                                                                                                                                 |
| 11/2021-Rev. 0 to Rev. A                                                                                                                                                                                        |                                                                                                                                                                                                                 |
| Changes to Table 12......................................................................................................................................16                                                     | Changes to Table 12......................................................................................................................................16                                                     |
| Added Silicon Anomaly Section, ADuCM420 Functionality Issues Section, Functionality Issues Section, Table 13, and Section 1. ADuCM420 Functionality Issues Section; Renumbered Sequentially..................24 | Added Silicon Anomaly Section, ADuCM420 Functionality Issues Section, Functionality Issues Section, Table 13, and Section 1. ADuCM420 Functionality Issues Section; Renumbered Sequentially..................24 |

## 1/2021-Revision 0: Initial Version

## GENERAL DESCRIPTION

The ADuCM420 is a fully integrated, single package device that incorporates high performance analog peripherals together with digital peripherals (controlled by a 160 MHz Arm ®  Cortex ™ -M33 processor) and integrated flash for code and data.

The analog-to-digital converter (ADC) on the ADuCM420 provides 12-bit, 2 MSPS data acquisition using up to 12 input pins for single-ended mode. Additionally, the die temperature and supply voltages can be measured.

The ADC input voltage is 0 V to VREF. A sequencer is provided that allows a user to select a set of ADC channels to be measured in sequence without software involvement during the sequence. The sequence can optionally repeat automatically at a user-selectable rate.

Up to 12 channels of 12-bit digital-to-analog converters (DACs) are provided with output buffers supported.

The ADuCM420 can be configured so that the digital and analog outputs retain their output voltages through a watchdog or software reset sequence. Therefore, a product can remain functional even while the ADuCM420 is resetting itself.

The ADuCM420 has a low power Arm Cortex-M33 processor and a 32-bit reduced instruction set computer (RISC) machine that offers up to 240 MIPS peak performance with a floating-point unit (FPU). Also integrated on chip are 2× 256 kB Flash/EE memories and 64 kB of static random access memory (SRAM), both with single-error correction (SEC) and double error detection (DED) error checking and correction (ECC). The flash comprises two separate 256 kB blocks supporting execution from one flash block and simultaneous writing and/or erasing of the other flash block.

The ADuCM420 operates from an on-chip oscillator and has a phase-locked loop (PLL) of 160 MHz. This clock can optionally be divided down to reduce current consumption. Additional low power modes can be set via the ADuCM420 software.

The device includes a management data input/output (MDIO) interface capable of operating up to 10 MHz. User programming is eased by incorporating physical address (PHYADR) and device address (DEVAD) hardware comparators. The non-erasable kernel code combined with flags in user flash allow user code to reliably switch between the two hardware independent flash blocks.

The ADuCM420 integrates a range of on-chip peripherals that can be configured under software control, as required in the application. These peripherals include 2× universal asynchronous receiver transmitter (UART), 3× I 2 C, and 3× serial peripheral interface (SPI) serial input/output communication controllers, generalpurpose inputs/outputs (GPIOs), 32-element programmable logic arrays (PLAs), five general-purpose timers, a wake-up timer (WUT), and a system watchdog timer (WDT). A 16-bit pulse-width modulation (PWM) with eight output channels is also provided.

The GPIO pins (Px.x) power up in high impedance input mode. In output mode, the software chooses between open-drain mode and push/pull mode. The pull-up and pull-down resistors can be disabled and enabled in the software. The GPIO pins can be configured with different voltage levels according to the IOVDDx pin, such as 3.3 V, 1.8 V, and 1.2 V. In GPIO output mode, the inputs can remain enabled to monitor the GPIO pins. The GPIO pins can also be programmed to handle digital or analog peripheral signals, in which case, the pin characteristics are matched to the specific requirement.

A large support ecosystem is available for the Arm Cortex-M33 processor to ease product development of the ADuCM420. Access is via the Arm serial wire debug port. On-chip factory firmware supports in-circuit serial download via MDIO or I 2 C. These features are incorporated into a low cost, quick start development system supporting this precision analog microcontroller.

Note that throughout this data sheet, multifunction pins, such as VDAC7/P4.2, are referred to either by the entire pin name or by a single function of the pin, for example, P4.2, when only that function is relevant.

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

EMULATION3

THE I    I  R  I  F IG    IONS

2GPIOs REFER TO Px.x.

ON THE SAME PIN, AIN4/VDAC0.

3SERIAL WIRE EMULATION REFERS TO SWDIO, SWCLK, AND SWO.

5SPIs REFER TO SCLKx, CSx, MOSIx, SRDYx, AND MISOx.

4MDIO REFERS TO PRTADDRx, MDIO, AND MCK.

6NVIC IS NESTED VECTORED INTERRUPT CONTROLLER.

8HP REF IS HIGH POWER REFERENCE.

7WAKE-UP INTERRUPT CONTROLLER.

9ALP REF IS ANALOG LOW POWER REFERENCE.

11DLP REF IS DIGITAL LOW POWER REFERENCE.

10ALDO IS ANALOG LOW DROPOUT REGULATOR.

12DLDO IS DIGITAL LOW DROPOUT REGULATOR.

Figure 1.

0

## SPECIFICATIONS

AVDD = IOVDD0 = 2.85 V to 3.6 V, IOVDD1 = 1.2 V or 1.8 V, DVDD = 1.8 V to 3.6 V, VREF = 2.5 V for the internal reference, the core frequency (f CORE ) = 160 MHz, and T A = -40°C to +105°C, unless otherwise noted. HCLK is the high speed system clock.

Table 1.

| Parameter                           | Min                              | Typ   | Max   | Unit   | Test Conditions/Comments                                       |
|-------------------------------------|----------------------------------|-------|-------|--------|----------------------------------------------------------------|
| ADC CHANNEL SPECIFICATIONS          |                                  |       |       |        | Single-ended mode only                                         |
| ADC Power-Up Time                   |                                  | 5     |       | μs     |                                                                |
| Data Rate (f ADC )                  |                                  |       | 2     | MSPS   |                                                                |
| Resolution                          | 12                               |       |       | Bits   | 2.5 V internal reference                                       |
| Integral Nonlinearity               |                                  | ±1    | ±2    | LSB    |                                                                |
| Differential Nonlinearity           |                                  | ±0.6  | ±0.9  | LSB    |                                                                |
| DC Code Distribution 1              |                                  |       |       |        | Minimum and maximum range from mean ADC codes for 1000 samples |
|                                     |                                  | ±2    |       | LSB    | ADC input 1.25 V, single ended; f ADC = 1 MSPS                 |
| ENDPOINT ERRORS                     |                                  |       |       |        |                                                                |
| Offset Error                        | -920                             | ±400  | +720  | µV     | External channels                                              |
| Offset Error Drift                  |                                  |       |       |        |                                                                |
| Offset Error Drift Matching         |                                  | ±4    |       | µV/°C  |                                                                |
| Full-Scale Error                    | -1500                            | ±500  | +1000 | µV     | External channels                                              |
| Gain Error Drift                    |                                  | ±5    |       | ppm/°C |                                                                |
| Gain Error Drift Matching           |                                  | ±0.5  |       | ppm/°C | Matching compared to AIN0; for voltage input channels          |
| DYNAMIC PERFORMANCE                 |                                  |       |       |        | Input frequency (f IN ) = 500 Hz sine wave, sampling           |
| Signal-to-Noise Ratio (SNR)         |                                  | 73    |       | dB     | Includes distortion and noise components; voltage input        |
| Total Harmonic Distortion (THD)     |                                  | -85   |       | dB     |                                                                |
| Peak Harmonic or Spurious Noise     |                                  | -82   |       | dB     |                                                                |
| Channel to Channel Crosstalk        |                                  | -96   |       | dB     | Measured on Adjacent channels                                  |
| ANALOG INPUT                        |                                  |       |       |        |                                                                |
| Input Voltage Ranges                |                                  |       |       |        |                                                                |
| Single-Ended Mode                   | 0                                |       | 2.5   | V      |                                                                |
| Leakage Current                     |                                  | ±5    |       | nA     | Input voltage to AINx = 0.15 V to 2.5 V                        |
| Input Current                       |                                  | ±50   |       | nA     | At 100 kHz sample rate from 0.15 V to 2.5 V                    |
|                                     |                                  | ±230  | ±420  | nA     | 2 MSPS sample rate                                             |
| Input Capacitance                   |                                  | 30    |       | pF     | During ADC acquisitions                                        |
| ON-CHIP VOLTAGE REFERENCE           |                                  |       |       |        | 4.7 μF decoupling capacitor between ADCREFP and                |
| Output Voltage                      |                                  | 2.5   |       | V      |                                                                |
| Accuracy                            |                                  |       | ±5    | mV     | T A = 25°C                                                     |
| Reference Temperature Coefficient   |                                  | 10    | 30    | ppm/°C | T A = -40°C to +25°C range                                     |
|                                     |                                  | 10    | 20    | ppm/°C | T A = 25°C to 105°C range                                      |
| Power Supply Rejection Ratio (PSRR) |                                  |       |       |        |                                                                |
| DC                                  |                                  | 70    |       | dB     | AVDD change effects, 2.85 V to 3.6 V                           |
| AC                                  |                                  | 60    |       | dB     | Tested with AVDD noise of 1 kHz, 10 kHz, 100 kHz, and 1 MHz    |
| Output Impedance                    |                                  | 2     |       | Ω      | Do not use as external reference source; T A = 25°C            |
| EXTERNAL REFERENCE INPUT            |                                  |       |       |        |                                                                |
| Input Voltage Range                 |                                  | 2.5   |       | V      | Only supports 2.5 V external reference input                   |
| Input Impedance                     |                                  | 5     |       | kΩ     | Do not use as external reference source                        |
| BUFFERED VREF OUTPUT (BUF0_VREF)    | BUFFERED VREF OUTPUT (BUF0_VREF) |       |       |        | 1 μF capacitor required on output                              |

## SPECIFICATIONS

Table 1.

| Parameter                                 |   Min | Typ         | Max                        | Unit      | Test Conditions/Comments                                                                                                                                                                                                                                         |
|-------------------------------------------|-------|-------------|----------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Output Voltage                            |       | 1.25 or 2.5 | 1.25 or 2.5                | V         | V                                                                                                                                                                                                                                                                |
| Accuracy                                  |       |             | ±6                         | mV        | T A = 25°C, load capacitance (C L ) = 4 mA                                                                                                                                                                                                                       |
| Reference Temperature Coefficient         |       | 10          | 30                         | ppm/°C    | T A = -40°C to +25°C range                                                                                                                                                                                                                                       |
|                                           |       | 10          | 20                         | ppm/°C    | T A = 25°C to 105°C range                                                                                                                                                                                                                                        |
| Load Regulation                           |       | 2.5         |                            | mV/mA     |                                                                                                                                                                                                                                                                  |
| Output Impedance                          |       | 2.5         |                            | Ω         |                                                                                                                                                                                                                                                                  |
| Load Current                              |       |             | 4                          | mA        |                                                                                                                                                                                                                                                                  |
| PSRR                                      |       | 70          |                            | dB        |                                                                                                                                                                                                                                                                  |
| VOLTAGE DAC (VDAC) CHANNEL SPECIFICATIONS |       |             |                            |           | VDAC Channel 0 to Channel 7: buffer on, load resistance (R L ) = 1 kΩ, C L = 100 pF, DACCONx, Bit 9 = 0 (normal drive, unless otherwise stated); VDAC Channel 8 to Channel 11: buffer on, R L = 2.5 kΩ, C L = 100 pF                                             |
| DC Accuracy                               |       |             |                            |           |                                                                                                                                                                                                                                                                  |
| Resolution                                |    12 |             |                            | Bits      |                                                                                                                                                                                                                                                                  |
| Relative Accuracy 2                       |    -2 | ±1.5        | +3                         | LSB       |                                                                                                                                                                                                                                                                  |
| Differential Nonlinearity 1               |  -0.9 | ±0.5        | +0.9                       | LSB       | Guaranteed monotonic                                                                                                                                                                                                                                             |
| Calculated Offset Error                   | -13.5 | ±5          | +15.5                      | mV        | 2.5 V internal reference                                                                                                                                                                                                                                         |
| Actual Offset Error                       |   -15 | +2          | +15                        | mV        | Measured at Code 0                                                                                                                                                                                                                                               |
|                                           |   -15 | +2          | +15                        | mV        | VDAC Channel 0 to Channel 7: DACCONx, Bit 9 = 1; R L = 250 Ω; C L = 100 pF                                                                                                                                                                                       |
| Gain Error                                |  -0.7 | ±0.2        | +0.5                       | % of FS 3 |                                                                                                                                                                                                                                                                  |
|                                           |  -0.7 | ±0.2        | +0.5                       | % of FS 3 | VDAC Channel 0 to Channel 7: DACCONx, Bit 9 = 1; R L = 250 Ω; C L = 100 pF                                                                                                                                                                                       |
| Offset Error Drift                        |       | ±10         |                            | μV/°C     |                                                                                                                                                                                                                                                                  |
| Gain Error Drift                          |       | 15          |                            | ppm/°C    |                                                                                                                                                                                                                                                                  |
| Short-Circuit Current                     |       | ±32         |                            | mA        | VDAC Channel 0 to Channel 7                                                                                                                                                                                                                                      |
|                                           |       | ±15         |                            | mA        | VDAC Channel 8 to Channel 11                                                                                                                                                                                                                                     |
| VDAC OUTPUTS                              |       |             |                            |           |                                                                                                                                                                                                                                                                  |
| Output Range 1                            |     0 |             | 2.5                        | V         | VDAC Channel 0 to Channel 7                                                                                                                                                                                                                                      |
|                                           |     0 |             | Lower of 2.5 or AVDD - 0.7 | V         | VDAC Channel 8 to Channel 11                                                                                                                                                                                                                                     |
| Output Impedance                          |       | 1           |                            | Ω         |                                                                                                                                                                                                                                                                  |
| VDAC AC CHARACTERISTICS                   |       |             |                            |           |                                                                                                                                                                                                                                                                  |
| Slew Rate                                 |       | 2.5         |                            | V/µs      |                                                                                                                                                                                                                                                                  |
| Voltage Output Settling Time              |       | 10          |                            | µs        |                                                                                                                                                                                                                                                                  |
| Digital to Analog Glitch Energy           |       | ±20         |                            | nV-sec    | 1 LSB change at major carry (where maximum number of bits simultaneously changes in the DACDATx register)                                                                                                                                                        |
| COMPARATOR INPUT                          |       |             |                            |           |                                                                                                                                                                                                                                                                  |
| Offset Voltage                            |       | ±15         |                            | mV        | The offset voltage is dependent on the comparator being enabled with its input pins connected to external biasing circuits; if the comparator is left powered down or if the inputs to the comparator are left floating, over time the offset error may increase |
| Bias Current                              |   -30 | +3          | +43                        | nA        | Noninverting (positive) input                                                                                                                                                                                                                                    |
|                                           |       | 10          |                            | nA        | Inverting (negative) input, hysteresis disabled                                                                                                                                                                                                                  |
|                                           |       | 50          |                            | nA        | Inverting (negative) input, hysteresis = 10 mV                                                                                                                                                                                                                   |
|                                           |   740 | 840         | 940                        | nA        | Inverting (negative) input, hysteresis = 210 mV                                                                                                                                                                                                                  |
| Voltage Range                             |   0.5 |             | AVDD - 1.2                 | V         | Negative input range (reference node of the comparator)                                                                                                                                                                                                          |

## SPECIFICATIONS

Table 1.

| Parameter                                                | Min      | Typ     | Max       | Unit                      | Test Conditions/Comments                                          |
|----------------------------------------------------------|----------|---------|-----------|---------------------------|-------------------------------------------------------------------|
|                                                          | AGND     |         | AVDD      | V                         | Positive input range to comparator                                |
|                                                          | 0        |         | 2.0       | V                         | Differential input range; positive input - negative input voltage |
| Capacitance                                              |          | 7       |           | pF                        |                                                                   |
| Hysteresis                                               | 10       | 50      | 210       | mV                        | 16 configurable options 4                                         |
| Hysteresis Voltage Accuracy                              |          | 10      | 35        | % of target hysteresis    | 10 mV to 35 mV settings                                           |
|                                                          |          | 5       | 15        | % of target hysteresis µs | 50 mV to 210 mV settings                                          |
| Response Time                                            |          | 5       |           |                           |                                                                   |
| POWER-ON RESET (POR)                                     |          |         |           |                           | Refers to voltage at DVDD pin                                     |
| POR Trip Level (DVDD)                                    | 1.6      |         | 1.77      | V                         | Power-on level (see Figure 17)                                    |
|                                                          | 1.62     | 1.66    | 1.7       | V                         | Power-down level (brownout)                                       |
| Timeout from POR                                         |          | 32      |           | ms                        |                                                                   |
| FLASH MEMORY                                             |          |         |           |                           |                                                                   |
| Endurance                                                | 10,000   |         |           | Cycles                    |                                                                   |
| Data Retention                                           | 10       |         |           | Years                     | Junction temperature (T J ) = 125°C                               |
|                                                          | 20       |         |           | Years                     | T J = 85°C                                                        |
| INTERNAL HIGH POWER OSCILLATOR Accuracy                  |          | 16      | ±3        | MHz %                     |                                                                   |
| TEMPERATURE SENSOR                                       |          |         |           |                           | Indicates die temperature                                         |
| Voltage Output at 25°C                                   |          | 0.13625 |           | V                         |                                                                   |
| Voltage Temperature Coefficient                          |          | 0.4568  |           | mV/°C                     |                                                                   |
| Accuracy with No Calibration                             | -3       | ±2      | +4.4      | °C                        |                                                                   |
| INTERNAL LOW POWER OSCILLATOR                            |          | 32      |           | kHz                       |                                                                   |
| Accuracy                                                 | -10      | ±7      | +10       | %                         |                                                                   |
| 3.3 V GPIO                                               |          |         |           |                           | IOVDD0 = 3.3 V                                                    |
| Logic Inputs                                             |          |         |           |                           |                                                                   |
| Input Low Voltage (V INL )                               |          |         | 0.99      | V                         | IOVDD0 × 0.3                                                      |
| Input High Voltage (V INH )                              |          |         |           | V                         |                                                                   |
|                                                          | 2        |         |           |                           |                                                                   |
| Pull-Up Current                                          | 120      | 160     | 210       | µA                        | Input voltage (V IN ) = 0 V                                       |
| Pull-Down Current                                        | 115      | 163     | 210       | µA                        | V IN = 3.3 V                                                      |
| Internal Pull-Up or Pull-Down Disabled                   | -32      | +1      | +65       | nA                        |                                                                   |
| Logic Outputs                                            |          |         |           |                           |                                                                   |
| Output High Voltage (V OH )                              | 2.4      |         |           | V                         | Source current (I SOURCE ) = 12 mA                                |
| Output Low Voltage (V OL )                               |          |         | 0.4       | V                         | Sink current (I SINK ) = 12 mA for SCL0 and SDA0 (I 2 C0); 2      |
| Input Capacitor                                          |          |         | 10        | pF                        |                                                                   |
| Short-Circuit Current                                    |          | 13      |           | mA                        |                                                                   |
| 1.8 V GPIO                                               |          |         |           |                           | IOVDD1 = 1.8 V                                                    |
| Logic Inputs                                             |          |         |           |                           |                                                                   |
| V INL                                                    |          |         | 0.54      | V                         |                                                                   |
| V INH                                                    | 1.26     |         |           | V                         |                                                                   |
| Pull-Up Current                                          | 150      | 194     | 240       | µA                        | V IN = 0 V                                                        |
| Pull-Down Current Internal Pull-Up or Pull-Down Disabled | 170 -520 | 217 +25 | 270 +2000 | µA nA                     | V IN = 1.8 V IOVDD1 power source                                  |
| Logic Outputs                                            |          |         |           |                           |                                                                   |
| V OH                                                     | 1.4      |         |           | V                         | I SOURCE = 12 mA                                                  |
| V OL                                                     |          |         | 0.36      | V                         | I SINK = 12 mA                                                    |

## SPECIFICATIONS

Table 1.

| Parameter                              |   Min | Typ        |   Max | Unit        | Test Conditions/Comments                      |
|----------------------------------------|-------|------------|-------|-------------|-----------------------------------------------|
| Input Capacitor                        |       |            |    10 | pF          |                                               |
| Short-Circuit Current                  |       | 17         |       | mA          |                                               |
| 1.2 V GPIO                             |       |            |       |             | IOVDD1 = 1.2 V                                |
| Logic Inputs                           |       |            |       |             |                                               |
| V INL                                  |       |            |  0.36 | V           |                                               |
| V INH                                  |  0.84 |            |       | V           |                                               |
| Pull-Up Current                        |    55 | 76         |   100 | µA          | V IN = 0 V                                    |
| Pull-Down Current                      |    55 | 82         |   110 | µA          | V IN = 1.2 V                                  |
| Internal Pull-Up or Pull-Down Disabled |  -450 | +20        | +1510 | nA          | IOVDD1 power source                           |
| Logic Outputs                          |       |            |       |             |                                               |
| V OH                                   |   1.0 |            |       | V           | I SOURCE = 6 mA                               |
| V OL                                   |       |            |  0.18 | V           | I SINK = 6 mA                                 |
| Input Capacitor                        |       |            |    10 | pF          |                                               |
| Short-Circuit Current                  |       | 7          |       | mA          |                                               |
| MDIO                                   |       |            |       |             |                                               |
| Logic Inputs                           |       |            |       |             |                                               |
| V INL                                  |       |            |  0.36 | V           |                                               |
| V INH                                  |  0.84 |            |       | V           |                                               |
| Logic Output                           |       |            |       |             |                                               |
| V OH                                   |   1.0 |            |       | V           | I SOURCE = 4 mA                               |
| V OL                                   |       |            |   0.2 | V           | I SINK = 4 mA                                 |
| Input Capacitor                        |       |            |    10 | pF          |                                               |
| Short-Circuit Current                  |       | 7          |       | mA          |                                               |
| MICROCONTROLLER UNIT (MCU) CLOCK       |       |            |       |             |                                               |
| RATE                                   |       |            |       |             |                                               |
| Using PLL Output                       |       | 160        |   163 | MHz         |                                               |
| EXTERNAL RESET                         |       |            |       |             |                                               |
| Minimum Pulse Duration                 |    10 |            |       | µs          | Pin voltage must stay low for this period     |
| PROCESSOR START-UP TIME                |       |            |       |             |                                               |
| At Power-On                            |       | 32         |       | ms          | Includes kernel execution time                |
| After Reset Event                      |       | 1          |       | ms          | Includes kernel execution time                |
| After Processor Power-Down             |       |            |       |             |                                               |
| Core Sleep Mode (Mode 1)               |       | 30         |       | HCLK cycles | Fixed number of HCLK periods                  |
| System Sleep Mode (Mode 2)             |       | 85         |       | µs          | HCLK = 160 MHz from PLL                       |
| Hibernate Mode (Mode 3)                |       | 3          |       | µs          | HCLK = 16 MHz from internal oscillator        |
| POWER REQUIREMENTS                     |       |            |       |             |                                               |
| Power Supply Voltage Range             |       |            |       |             |                                               |
| AVDD to AGND                           |  2.85 | 3.3        |   3.6 | V           |                                               |
| DVDD to DGND                           |   1.8 | 1.8 or 3.3 |   3.6 | V           |                                               |
| IOVDD0 to IOGND                        |  2.85 | 3.3        |   3.6 | V           |                                               |
| IOVDD1 to IOGND                        |  1.08 | 1.2 or 1.8 |  1.98 | V           | If unused, can be tied to DVDD_REG or to DGND |
| Analog Power Supply Currents           |       |            |       |             |                                               |
| AVDD Current                           |       | 900        |  1050 | µA          | Analog peripherals in idle mode               |
| Digital Power Supply Current           |       |            |       |             |                                               |
| Current in Normal Mode                 |       |            |       |             |                                               |
| IOVDD0                                 |       | 175        |   200 | µA          |                                               |
| IOVDD1                                 |       | 20         |    60 | µA          |                                               |
| DVDD Current                           |       |            |       |             |                                               |
| Active Mode                            |       |            |       |             | Executing typical code                        |

## SPECIFICATIONS

Table 1.

| Parameter                        | Typ                              | Max                              | Unit                             | Test Conditions/Comments                                                         |                                  |
|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------------------------------------------------------|----------------------------------|
| Core Sleep Mode (Mode 1)         | 16 4.8 11                        |                                  | mA mA mA                         | HCLK = 160 MHz clock HCLK = 16 MHz from internal oscillator HCLK = 160 MHz clock |                                  |
| System Sleep Mode (Mode 2)       | 2.46                             | 19                               | mA                               |                                                                                  |                                  |
| Hibernate Mode (Mode 1)          | 2.44                             | 20                               | mA                               | HCLK = 160 MHz clock                                                             |                                  |
| Additional Power Supply Currents | Additional Power Supply Currents | Additional Power Supply Currents | Additional Power Supply Currents | Additional Power Supply Currents                                                 | Additional Power Supply Currents |
| ADC                              | 2.8                              | 3.4                              | mA                               | Continuously converting at 2 MSPS                                                |                                  |
| DAC                              | 330                              | 350                              | µA                               | Per powered up DAC, excluding load current                                       |                                  |
| Total Supply Current             | 18.8                             |                                  | mA                               | Active mode with PLL clock of 160 MHz and ADC enabled                            |                                  |

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
| t VD;ACK    | Data valid acknowledge time                                                                                    |       |       |  3.45 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       |   400 | pF     |

Table 3. I 2 C Timing in Fast Mode (400 kHz)-Slave/Master

| Parameter   | Description                                                                                                    |   Min | Typ   | Max   | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   1.3 |       |       | µs     |
| t H         | SCLx high pulse width                                                                                          |   0.6 |       |       | µs     |
| t SHD       | Start condition hold time                                                                                      |   0.6 |       |       | µs     |
| t DSU       | Data setup time                                                                                                |   100 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |       | µs     |
| t RSU       | Setup time for repeated start                                                                                  |   0.6 |       |       | µs     |
| t PSU       | Stop condition setup time                                                                                      |   0.6 |       |       | µs     |
| t BUF       | Bus free time between a stop condition and a start condition                                                   |   1.3 |       |       | µs     |

## SPECIFICATIONS

Table 3. I 2 C Timing in Fast Mode (400 kHz)-Slave/Master

| Parameter   | Description                                               |   Min |   Typ |   Max | Unit   |
|-------------|-----------------------------------------------------------|-------|-------|-------|--------|
| t R         | Rise time for both SCLx and SDAx                          |    20 |       |   300 | ns     |
| t F         | Fall time for both SCLx and SDAx                          |       |    15 |   300 | ns     |
| t VD; DAT   | Data valid time                                           |       |       |   0.9 | µs     |
| t VD; ACK   | Data valid acknowledge time                               |       |       |   0.9 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2) |       |       |   400 | pF     |

I 2 C GPIOs (P0.7 to P0.4 and P1.3 to P1.2) drive strength set to 20 mA.

Table 4. I 2 C Timing in Fast Mode Plus (1 MHz)-Slave/Master

| Parameter   | Description                                                                                                    |   Min |   Typ Max | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-----------|--------|
| t L         | SCLx low pulse width                                                                                           |   0.5 |           | µs     |
| t H         | SCLx high pulse width                                                                                          |  0.26 |           | µs     |
| t SHD       | Start condition hold time                                                                                      |  0.26 |           | µs     |
| t DSU       | Data setup time                                                                                                |    50 |           | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |           | µs     |
| t RSU       | Setup time for repeated start                                                                                  |  0.26 |           | µs     |
| t PSU       | Stop condition setup time                                                                                      |  0.26 |           | µs     |
| t BUF       | Bus free time between a stop condition and a start condition                                                   |   0.5 |           | µs     |
| t R         | Rise time for both SCLx and SDAx                                                                               |       |       120 | ns     |
| t F         | Fall time for both SCLx and SDAx                                                                               |       |       120 | ns     |
| t VD; DAT   | Data valid time                                                                                                |       |      0.45 | µs     |
| t VD; ACK   | Data valid acknowledge time                                                                                    |       |      0.45 | µs     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       550 | pF     |

I 2 C GPIOs (P0.7 to P0.4 and P1.3 to P1.2) drive strength set to 20 mA.

Table 5. I 2 C Timing in High Speed Mode (3.4 MHz)-Slave Only

| Parameter   | Description                                                                                                    |   Min | Typ   |   Max | Unit   |
|-------------|----------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| t L         | SCLx low pulse width                                                                                           |   160 |       |       | ns     |
| t H         | SCLx high pulse width                                                                                          |    60 |       |       | ns     |
| t SHD       | Start condition hold time                                                                                      |   160 |       |       | ns     |
| t DSU       | Data setup time                                                                                                |    10 |       |       | ns     |
| t DHD       | Data hold time (SDAx held internally after falling edge of SCLx, duration set via TCTL register, THDATIN bits) |     0 |       |       | ns     |
| t RSU       | Setup time for repeated start                                                                                  |   160 |       |       | ns     |
| t PSU       | Stop condition setup time                                                                                      |   160 |       |       | ns     |
| t BUF       | Bus free time between a stop condition and a start condition                                                   |   200 |       |       | ns     |
| t R         | Rise time for both SCLx and SDAx                                                                               |    10 |       |    40 | ns     |
|             | Up to C B = 100 pF                                                                                             |       |       |       |        |
|             | Up to C B = 400 pF                                                                                             |       |       |    80 | ns     |
| t F         | Fall time for both SCLx and SDAx                                                                               |    10 |       |    40 | ns     |
|             | Up to C B = 400 pF                                                                                             |       |       |    80 | ns     |
| C B         | Capacitive load for each bus line (not shown in Figure 2)                                                      |       |       |   400 | pF     |

## SPECIFICATIONS

Figure 2. I 2 C-Compatible Interface Timing

<!-- image -->

## SPI Timing Specifications: Slave Mode

SPI GPIOs (P0.3 to P0.0, P1.7 to P1.4) drive strength set to 12 mA, IOVDD1 ≥ 1.2 V, and 40 MHz SPI clock. See Figure 3 and Figure 4.

Table 6. SPI Slave Mode Timing

| Parameter                               | Symbol   |   Min |   Typ | Max   | Unit   |
|-----------------------------------------|----------|-------|-------|-------|--------|
| TIMING REQUIREMENTS                     |          |       |       |       |        |
| CSx to SCLKx Edge                       | tCS      |    25 |       |       | ns     |
| Minimum Valid CSx Inactive Period       | tCS M    |    25 |       |       | ns     |
| SCLKx Low Pulse Width                   | t SL     |       |    10 |       | ns     |
| SCLKx High Pulse Width                  | t SH     |       |    10 |       | ns     |
| Data Input Setup Time Before SCLKx Edge | t DSU    |     5 |       |       | ns     |
| Data Input Hold Time After SCLKx Edge   | t DHD    |     5 |       |       | ns     |
| SCLKx Rise Time                         | t SR     |       |     5 |       | ns     |
| SCLKx Fall Time                         | t SF     |       |     5 |       | ns     |
| SWITCHING CHARACTERISTICS               |          |       |       |       |        |
| Data Output Valid After SCLKx Edge      | t DAV    |       |    10 |       | ns     |
| Data Output Valid After CSx Edge        | t DOCS   |       |    15 |       | ns     |
| CSx High After SCLKx Edge               | t SFS    |       |  8.75 |       | ns     |

<!-- image -->

003

Figure 3. SPI Slave Mode Timing (Serial Clock Phase Mode, CTL Register, Bit 2, CPHA = 0)

## SPECIFICATIONS

Figure 4. SPI Slave Mode Timing (CPHA = 1)

<!-- image -->

## SPI Timing Specifications: Master Mode

SCLKx = 40 MHz, SPI GPIOs (P0.3 to P0.0, P1.7 to P1.4) pin drive strength set to 12 mA. IOVDD1 ≥ 1.2 V. DIV is the SPI clock divider, in the SPI baud rate selection register (see the ADuCM420 hardware reference manual for more information). t HCLK is the time period of HCLK set up by the user.

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

tDHD

000

Figure 5. SPI Master Mode Timing (CPHA = 1)

04

## SPECIFICATIONS

Figure 6. SPI Master Mode Timing (CPHA = 0)

<!-- image -->

Table 8. MDIO vs. Management Data Clock (MDC) Timing

| Parameter 1             | Description                                                                   | Min   | Max    | Unit    |
|-------------------------|-------------------------------------------------------------------------------|-------|--------|---------|
| Maximum MCK Clock Speed | Push/pull mode Open-drain mode, pull-up resistance (R PULLUP ) =              |       | 10 4   | MHz MHz |
| t SETUP                 | MDIO setup before MCK edge (push/pull mode) Open-drain mode, R PULLUP = 312 Ω | 5 10  |        | ns ns   |
| t HOLD                  | MDIO valid after MCK edge (push/pull mode) Open-drain mode, R PULLUP = 312 Ω  | 7 10  |        | ns ns   |
| t DELAY                 | Data output after MCK edge (push/pull mode) Open-drain mode, R PULLUP = 312 Ω |       | 26 100 | ns      |

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

## Table 10. Thermal Resistance

| Package Type   |   θ JA 1 |   θ JC | Unit   |
|----------------|----------|--------|--------|
| CB-64-2        |       34 |   0.16 | °C/W   |
| 1 JEDEC 2S2P.  |          |        |        |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001. Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADuCM420

## Table 11. ADuCM420, 64-Ball WLCSP

| ESD Model   |   Withstand Threshold (kV) | Class   |
|-------------|----------------------------|---------|
| HBM         |                          3 | 2       |
| FICDM       |                        0.5 | C2A     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

017

Figure 8. BUF0\_VREF Load Regulation, 2.5 V Output Setting

<!-- image -->

018

Figure 9. BUF0\_VREF Load Regulation, 1.25 V Output Setting

<!-- image -->

019

Figure 10. Input Current vs. Voltage on AINx, f SAMPLE = 2 MSPS

<!-- image -->

020

Figure 11. Input Current vs. Voltage on AINx, f SAMPLE = 100 kSPS

<!-- image -->

2

Figure 12. Temperature Sensor Accuracy, No Calibration, 240 Devices

Figure 13. Reference Voltage Drift vs. Temperature, 250 Devices

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 14. Pin Configuration

| 1                              | 2                              | 3                                      | 4                               | 5                             | 6                       | 7       | 8            |
|--------------------------------|--------------------------------|----------------------------------------|---------------------------------|-------------------------------|-------------------------|---------|--------------|
| IOGND                          | COMPDIN2/ ADCCONVI PLAI8 P2.0/ | COMPDIN3/ P2.1/DM/ ECLKIN/ PLAI9 IRQ2/ | SWDIO                           | VDAC7                         | VDAC6                   | VDAC5   | VDAC3        |
| P0.3/IRQ0/ CS0I PLACLK0/ PLAI3 | P0.2/MOSI0/ PLACLK1/ PLAI2     | P2.3/ BM PLAI10                        | SWCLK                           | RESET                         | VDAC1                   | VREF    | AVDD         |
| IOVDD1                         | P0.1/MISO0/ COMOUT1/ PLAI1     | P0.0/SCLK0/ COMOUT0/ PLAI0             | COMOUT2/ P1.0/SIN1/ PLAI4       | CLKOUT/ POR/ P2.2/ SWO        | BUF0_VREF COM3P/ AIN14/ | AIN2    | VDAC0 AIN4/  |
| DVDD_REG                       | DGND                           | P1.2/ PWM0/ SCL1/ PLAI6                | P1.3/ PWM1/ SDA1/ PLAI7         | P1.1/ COMOUT3/ SOUT1/ PLAI5   | AIN3                    | AINO    | COM1P AIN10/ |
| IOVDD0                         | IOGND                          | P1.4/ PLAO10 SCLK1/ PWM2/              | P1.71 IRQ1/CS1/ PLAO13 PWM5/    | VDAC8/ P5.0                   | COM2P AIN12/            | AGND    | AVDD_REG     |
| P1.5/ MISO1/ PWM3/ PLAO11      | P1.6/ MOSI1/ PWM4/ PLAO12      | P0.7/IRQ4/ COMPDIN1/ SDA2/ PLAO5       | P3.2/ PRTADDR2/ PWMTRIP/ PLAI14 | VDAC9/ P5.1                   | COMOP AIN8/             | ADCREFN | ADCREFP      |
| P0.4/SCL0/ PLAO2 SIN0/         | P0.5/SDA0/ SOUT0/ PLAO3        | COMPDIN0/ P0.6/IRQ3/ PLAO4 SCL2/       | PRTADDR1/ PWMSYNC/ PLAI13 P3.1/ | VDAC11/ P5.3                  | VDAC2 AIN71             | AIN1    | COMON AIN9/  |
| IOGND                          | DVDD                           | MDIO P3.6/                             | P3.5/ PLAO27 SRDY1/ MCK/        | P3.0/ PRTADDR0/ PLAI12 SRDY0/ | VDAC10/ P5.2            | VDAC4   | COM2N AIN13/ |

Table 12. Pin Function Descriptions

| Pin No.   | Mnemonic                           | Type 1   | Description                                                                                                                                                                                                   |
|-----------|------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A1        | IOGND                              | S        | Ground for Digital Inputs/Outputs.                                                                                                                                                                            |
| A2        | P2.0/ADCCONV/COMPDIN2/PLAI8        | I/O      | Digital Input/Output Port 2.0 (P2.0). External Input to Start ADC Conversions (ADCCONV). Comparator 2 Digital Input for Three-State (COMPDIN2). Input to PLA Element 8 (PLAI8).                               |
| A3        | P2.1/DM/IRQ2/ECLKIN/COMPDIN3/PLAI9 | I/O      | Digital I/O Port 2.1 (P2.1). Download Mode Selection (DM). External Interrupt 2 (IRQ2). External Input Clock (ECLKIN). Comparator 3 Digital Input for Three-State (COMPDIN3). Input to PLA Element 9 (PLAI9). |
| A4        | SWDIO                              | I/O      | Serial Wire Bidirectional Data.                                                                                                                                                                               |
| A5        | VDAC7                              | AO       | Voltage DAC 7 Output.                                                                                                                                                                                         |
| A6        | VDAC6                              | AO       | Voltage DAC 6 Output.                                                                                                                                                                                         |
| A7        | VDAC5                              | AO       | Voltage DAC 5 Output.                                                                                                                                                                                         |
| A8        | VDAC3                              | AO       | Voltage DAC 3 Output.                                                                                                                                                                                         |
| B1        | P0.3/IRQ0/ CS0 /PLACLK0/PLAI3      | I/O      | Digital Input/Output Port 0.3 (P0.3). External Interrupt 0 (IRQ0). SPI Channel 0 (SPI0) Chip Select (). PLA Clock 0 (PLACLK0).                                                                                |
| B2        | P0.2/MOSI0/PLACLK1/PLAI2           | I/O      | Digital Input/Output Port 0.2 (P0.2). SPI0 Master Output, Slave Input (MOSI0). PLA Clock 1 (PLACLK1). Input to PLA Element 2 (PLAI2).                                                                         |

00

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 12. Pin Function Descriptions

| Pin No.   | Mnemonic                 | Type 1   | Description                                                                                                                                                                                                                                                |
|-----------|--------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B3        | P2.3/BM/PLAI10           | I/O      | 3.3 V is the default. Digital Input/Output Port 2.3 (P2.3). An internal pull-up resistor is enabled at power-up on P2.3. Boot Mode (BM). This pin determines the start-up sequence after every reset. Input to PLA Element 10 (PLAI10).                    |
| B4        | SWCLK                    | I        | Serial Wire Debug Clock.                                                                                                                                                                                                                                   |
| B5        | RESET                    | I        | Reset Input (Active Low). An internal pull-up resistor is included with this pin.                                                                                                                                                                          |
| B6        | VDAC1                    | AO       | Voltage DAC 1 Output.                                                                                                                                                                                                                                      |
| B7        | VREF                     | AO/AI    | 0.92 V Reference with 100 nF Capacitor.                                                                                                                                                                                                                    |
| B8        | AVDD                     | S        | 3.3 V Analog Power Supply.                                                                                                                                                                                                                                 |
| C1        | IOVDD1                   | S        | 1.2 V or 1.8 V GPIO Supply.                                                                                                                                                                                                                                |
| C2        | P0.1/MISO0/COMOUT1/PLAI1 | I/O      | Digital Input/Output Port 0.1 (P0.1). SPI0 Master Input, Slave Output (MISO0). Comparator 1 Output (COMOUT1) Input to PLA Element 1 (PLAI1). Ball C2 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                   |
| C3        | P0.0/SCLK0/COMOUT0/PLAI0 | I/O      | Digital Input/Output Port 0.0 (P0.0). SPI0 Clock (SCLK0). Comparator 0 Output (COMOUT0). Input to PLA Element 0 (PLAI0). Ball C3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                                       |
| C4        | P1.0/SIN1/COMOUT2/PLAI4  | I/O      | Digital Input/Output Port 1.0 (P1.0). UART Input 1 (SIN1). Comparator 2 Output (COMOUT2). Input to PLA Element 4 (PLAI4). Ball C4 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                                      |
| C5        | P2.2/POR/CLKOUT/SWO      | I/O      | 3.3 V is the default. Digital Input/Output Port 2.2 (P2.2). Reset Output (POR). This pin function is an output, and it is the default. Clock Output (CLKOUT).                                                                                              |
| C6        | AIN14/COM3P/BUF0_VREF    | AI/AO    | Analog Input 14 (AIN14). Comparator 3 Positive Input Voltage (COM3P). Buffered Reference Voltage source (BUF0_VREF).                                                                                                                                       |
| C7        | AIN2                     | AI       | Analog Input 2.                                                                                                                                                                                                                                            |
| C8        | AIN4/VDAC0               | AI/AO    | Analog Input 4 (AIN4). Voltage DAC 0 Output (VDAC0).                                                                                                                                                                                                       |
| D1        | DVDD_REG                 | AO       | 0.9 V Digital Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use DVDD_REG to power external circuits.                                                                                                                                          |
| D2        | DGND                     | S        | Digital Ground.                                                                                                                                                                                                                                            |
| D3        | P1.2/SCL1/PWM0/PLAI6     | I/O      | Digital Input/Output Port 1.2 (P1.2). I 2 C Channel 1 (I 2 C1) Serial Clock (SCL1). PWM Output 0 (PWM0). Input to PLA Element 6 (PLAI6). Ball D3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## Table 12. Pin Function Descriptions

| Pin No.   | Mnemonic                      | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                              |
|-----------|-------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D5        | P1.1/SOUT1/COMOUT3/PLAI5      | I/O      | Input to PLA Element 7 (PLAI7). Ball D4 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default. Digital Input/Output Port 1.1 (P1.1). UART Output 1 (SOUT1). Comparator 3 Output (COMOUT3) Input to PLA Element 5 (PLAI5). Ball D5 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that |
| D6        | AIN3                          | AI       | Analog Input 3.                                                                                                                                                                                                                                                                                                                                                          |
| D7        | AIN0                          | AI       | Analog Input 0.                                                                                                                                                                                                                                                                                                                                                          |
| D8        | AIN10/COM1P                   | AI       | Analog Input 10 (AIN10). Comparator 1 Positive Input (COM1P).                                                                                                                                                                                                                                                                                                            |
| E1        | IOVDD0                        | S        | 3.3 V GPIO Supply.                                                                                                                                                                                                                                                                                                                                                       |
| E2        | IOGND                         | S        | Ground for Digital Inputs/Outputs.                                                                                                                                                                                                                                                                                                                                       |
| E3        | P1.4/SCLK1/PWM2/PLAO10        | I/O      | Digital Input/Output Port 1.4 (P1.4). SPI Channel 1 (SPI1) Clock (SCLK1). PWM Output 2 (PWM2). Output of PLA Element 10 (PLAO10). Ball E3 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                                                                                                                                            |
| E4        | P1.7/IRQ1/CS1/PWM5/PLAO13     | I/O      | Digital Input/Output Port 1.7 (P1.7). External Interrupt 1 (IRQ1). SPI1 Chip Select (CS1). PWM Output 5 (PWM5). Output of PLA Element 13 (PLAO13). Ball E4 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                                                                                                                           |
| E5        | VDAC8/P5.0                    | AO/I/O   | 3.3 V is the default. Voltage DAC 8 Output (VDAC8). Digital Input/Output Port 5.0 (P5.0).                                                                                                                                                                                                                                                                                |
| E6        | AIN12/COM2P                   | AI       | Analog Input 12 (AIN12). Comparator 2 Positive Input (COM2P).                                                                                                                                                                                                                                                                                                            |
| E7        | AGND                          | S        | Analog Ground.                                                                                                                                                                                                                                                                                                                                                           |
| E8        | AVDD_REG                      | AO       | 2.5 V Analog Regulator Supply with 0.47 µF Decoupling Capacitor. Do not use AVDD_REG to power external circuits.                                                                                                                                                                                                                                                         |
| F1        | P1.5/MISO1/PWM3/PLAO11        | I/O      | Digital Input/Output Port 1.5 (P1.5). SPI1 Master Input, Slave Output (MISO1). PWM Output 3 (PWM3). Output of PLA Element 11 (PLAO11). Ball F1 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that 3.3 V is the default.                                                                                                                 |
| F2        | P1.6/MOSI1/PWM4/PLAO12        | I/O      | Digital Input/Output Port 1.6 (P1.6). SPI1 Master Output, Slave Input (MOSI1). PWM Output 4 (PWM4). Output of PLA Element 12 (PLAO12). Ball F2 is a multilevel voltage input/output with 3.3 V, 1.8 V, or 1.2 V support. Note that                                                                                                                                       |
| F3        | P0.7/IRQ4/SDA2/COMPDIN1/PLAO5 | I/O      | 3.3 V is the default. Digital Input/Output Port 0.7 (P0.7).                                                                                                                                                                                                                                                                                                              |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 12. Pin Function Descriptions

| Pin No.   | Mnemonic                      | Type 1   | Description                                                                                                                                                                           |
|-----------|-------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| F4        | P3.2/PRTADDR2/PWMTRIP/PLAI14  | I/O      | Comparator 1 Digital Input for Three-State (COMPDIN1). Output of PLA Element 5 (PLAO5). Digital Input/Output Port 3.2 (P3.2). MDIO Port address Bit 2 (PRTADDR2). PWM Trip (PWMTRIP). |
| F5        | VDAC9/P5.1                    | AO/I/O   | Voltage DAC 9 Output (VDAC9). Digital Input/Output Port 5.1 (P5.1).                                                                                                                   |
| F6        | AIN8/COM0P                    | AI       | Analog Input 8 (AIN8). Comparator 0 Positive Input (COM0P).                                                                                                                           |
| F7        | ADCREFN                       | AO/AI    | Decoupling Capacitor Connection for ADC. Connect this pin to AGND.                                                                                                                    |
| F8        | ADCREFP                       | AO/AI    | Decoupling Capacitor Connection for ADC Reference Buffer with 4.7 µF Decoupling Capacitor.                                                                                            |
| G1        | P0.4/SCL0/SIN0/PLAO2          | I/O      | Digital Input/Output Port 0.4 (P0.4). I 2 C Channel 0 (I 2 C0) Serial Clock (SCL0). UART 0 Input (SIN0).                                                                              |
| G2        | P0.5/SDA0/SOUT0/PLAO3         | I/O      | Digital Input/Output Port 0.5 (P0.5). I 2 C0 Serial Data (SDA0). UART Output 0 (SOUT0).                                                                                               |
| G3        | P0.6/IRQ3/SCL2/COMPDIN0/PLAO4 | I/O      | Digital Input/Output Port 0.6 (P0.6). External Interrupt 3 (IRQ3). I 2 C2 Serial Clock (SCL2). Comparator 0 Digital Input for Three-State (COMPDIN0).                                 |
| G4        | P3.1/PRTADDR1/PWMSYNC/PLAI13  | I/O      | Output of PLA Element 4 (PLAO4). Digital Input/Output Port 3.1 (P3.1). MDIO Port address Bit 1 (PRTADDR1). PWM Synchronization (PWMSYNC). Input to PLA Element 13 (PLAI13).           |
| G5        | VDAC11/P5.3                   | AO/I/O   | Voltage DAC 11 Output (VDAC11). Digital Input/Output Port 5.1 (P5.3).                                                                                                                 |
| G6        | AIN7/VDAC2                    | AI/AO    | Analog Input 7 (AIN7). Voltage DAC 2 Output (VDAC2).                                                                                                                                  |
| G7        | AIN1                          | AI       | Analog Input 1.                                                                                                                                                                       |
| G8        | AIN9/COM0N                    | AI       | Analog Input 9 (AIN9).                                                                                                                                                                |
| H1        | IOGND                         | S        | Comparator 0 Negative Input (COM0N). Ground for Digital Inputs/Outputs.                                                                                                               |
| H2        | DVDD                          | S        | 1.8 V or 3.3 V Digital Power Supply.                                                                                                                                                  |
| H3        | P3.6/MDIO                     | I/O      | Digital Input/Output Port 3.6 (P3.6).                                                                                                                                                 |
| H4        | P3.5/MCK/SRDY1/PLAO27         | I/O      | Digital Input/Output Port 3.5 (P3.5). MDIO Slave Clock (MCK). See the Silicon Anomaly section. SPI1 Ready (SRDY1).                                                                    |
| H5        | P3.0/PRTADDR0/SRDY0/PLAI12    | I/O      | Output of PLA Element 27 (PLAO27). Digital Input/Output Port 3.0 (P3.0). MDIO Port Address Bit 0 (PRTADDR0).                                                                          |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## Table 12. Pin Function Descriptions

| Pin No.   | Mnemonic    | Type 1   | Description                                                           |
|-----------|-------------|----------|-----------------------------------------------------------------------|
| H6        | VDAC10/P5.2 | AO/I/O   | Voltage DAC 10 Output (VDAC10). Digital Input/Output Port 5.2 (P5.2). |
| H7        | VDAC4       | AO       | Voltage DAC 4 Output.                                                 |
| H8        | AIN13/COM2N | AI       | Analog Input 13 (AIN13). Comparator 2 Negative Input (COM2N).         |

## THEORY OF OPERATION

The ADuCM420 is an on-chip system. The ADuCM420 is mixedsignal microcontroller based on the Arm Cortex-M33 processor.

See the ADuCM420 hardware reference manual for full details on the operation of the ADuCM420, including, but not limited to, all register details and information about the various features and operation of the power management unit, the Arm Cortex-M33 processor, the ADC circuit, the flash controller, and the SPI, I 2 C, and UART interfaces.

## APPLICATIONS INFORMATION

## POWER SUPPLIES

The ADuCM420 operational power supply voltage is 2.85 V to 3.6 V for AVDD and IOVDD0, 1.2 V or 1.8 V for IOVDD1, and 1.8 V to 3.6 V for DVDD. Separate analog (AVDD) and digital power supply pins (IOVDD1 and DVDD) allow AVDD to be kept relatively free of noisy digital signals often present in the system DVDD line. In this mode, the ADuCM420 can also operate with split supplies. That is, the device can use different voltage levels for each supply as long as the minimum and maximum specifications defined in Table 1 and Table 9 for each supply are adhered to. A typical split supply configuration is shown in Figure 15.

<!-- image -->

1GNDREF IS A COMMON GROUND BETWEEN AGND AND DGND.

Figure 15. External Multiple Supply Connections

As an alternative to providing two separate power supplies, the user can reduce noise on AVDD by placing a small series resistor and/or ferrite bead between AVDD and DVDD and then decoupling AVDD separately to ground. An example of this configuration is shown in Figure 16. With this configuration, other analog circuitry (such as op amps and voltage reference) can be powered from the AVDD supply line as well.

<!-- image -->

012

Figure 16. External Single-Supply Connections

In both Figure 15 and Figure 16, a large value (10 µF) reservoir capacitor is connected to DVDD, and a separate 10 µF capacitor is connected to AVDD. In addition, local small value (0.1 µF) capacitors are located at each AVDD, IOVDD0, IOVDD1, and DVDD pin of the chip. As per standard design practice, include all of these capacitors and ensure that the smaller capacitors are close to each supply pin with trace lengths as short as possible. Connect the ground terminal of each of these capacitors directly to the underlying ground plane.

Note that the analog and digital ground pins on the ADuCM420 must be referenced to the same system ground reference point at all times.

## POWER-UP REQUIREMENTS

Figure 17 and Figure 18 show the power-up requirements for DVDD and AVDD. Figure 19 shows the power-up requirement for IOVDD0 if no external pull-up is applied to the P2.3/BM/PLAI10 pin.

<!-- image -->

Figure 17. DVDD Power-Up Requirements

<!-- image -->

1DETAILS IN HARDWARE REFERENCE MANUAL.

014

Figure 18. AVDD Power-Up Requirements

Figure 19. IOVDD0 Power-Up Requirement, No External Pull-Up

<!-- image -->

## RECOMMENDED CIRCUIT AND COMPONENT VALUES

Figure 20 shows a typical connection diagram for the ADuCM420.

Adequately decouple the supplies and regulators with capacitors connected between the AVDD\_REG, DVDD\_REG, and IOVDDx balls and their associated ground balls (AGND and DGND). Table 12 indicates which ground balls are paired with which supply balls.

There are three digital supply balls, IOVDD0, IOVDD1, and DVDD. Decouple these balls with a 0.1 µF capacitor placed as near as

## APPLICATIONS INFORMATION

possible to each of the three balls and their associated ground balls (IOGND and DGND). In addition, place a 10 μF capacitor near these balls.

For DVDD, to improve noise reduction, place a ferrite bead in series with a 10 μF capacitor to DGND.

Similarly, the analog supply pin (AVDD) requires a 0.1 µF capacitor placed as near as possible to each ball and its associated AGND ball. Also, place a 10 μF capacitor near these balls.

The ADC reference requires a 4.7 μF capacitor be placed between ADCREFP and ADCREFN and located as near as possible to each ball. ADCREFN must be connected directly to AGND. The ADuCM420 contains two internal regulators. These regulators require external decoupling capacitors. The DVDD\_REG and AVDD\_REG balls each require a 0.47 µF capacitor to DGND and AGND, respectively. Take care in the layout to ensure that currents flowing from the ground end of each decoupling capacitor to its associated ground ball share as little track as possible with other ground currents on the PCB.

<!-- image -->

016

Figure 20. Recommended Circuit and Component Values (ADuCM420, LT3022EMSE, and ADP7104ARDZ-3.3)

## SILICON ANOMALY

This anomaly list describes the known bugs, anomalies, and workarounds for the ADuCM420 microcontroller Revision B silicon. The anomaly listed applies to the WLCSP ADuCM420 packaged material that is branded as follows:

First Line

ADuCM420

Third Line

B90 or newer (revision identifier)

Analog Devices, Inc., is committed, through future silicon revisions, to continuously improve silicon functionality. Analog Devices tries to ensure that these future silicon revisions remain compatible with your present software/systems by implementing the recommended workarounds outlined here.

## ADUCM420 FUNCTIONALITY ISSUES

| Silicon Revision Identifier   |   Kernel Revision Identifier | Chip Marking            | Silicon Status   | Anomaly Sheet   |   No. of Reported Anomalies |
|-------------------------------|------------------------------|-------------------------|------------------|-----------------|-----------------------------|
| B                             |                            0 | All silicon branded B90 | Release          | Rev. 0          |                           1 |

## FUNCTIONALITY ISSUES

Table 13. PLL Unlock Interrupt Asserted When P3.6/MDIO Pin Toggles [er001]

| Background     | The default system clock for the ADuCM420 is from an internal PLL. The PLL input is the internal 16 MHz oscillator. The oscillator output by default is 160 MHz and can be selected as the system clock for the memories, Cortex-M33, and other peripherals. An interrupt is provided to detect PLL lock and unlock states. If a PLL unlock interrupt is asserted, do not select the PLL output as the system clock.                                             |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Issue          | When P3.6/MDIO is toggled as a GPIO pin or when used as the MDIO data I/O function, the PLL lock detection circuit can assert many PLL unlock interrupts to the Cortex-M33 core if the PLL interrupt is enabled. On the WLCSP models, the P3.6/MDIO pin is directly underneath the 16 MHz oscillator. If P3.6/MDIO toggles at frequencies >1 kHz, the oscillator output frequency can vary beyond the frequency range allowed by the PLL lock detection circuit. |
| Workaround     | On the WLCSP models for the ADuCM420 device, do not use the MDIO feature. If using P3.6/MDIO as a digital I/O pin, its input or output frequency must be less than 1 kHz.                                                                                                                                                                                                                                                                                        |
| Related Issues | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## SECTION 1. ADUCM420 FUNCTIONALITY ISSUES

| Reference Number   | Description                                              | Status   |
|--------------------|----------------------------------------------------------|----------|
| er001              | PLL unlock interrupt asserted when P3.6/MDIO pin toggles | Open     |

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1          | Temperature Range   | Package Description                        | Packing Quantity   | Package Option   |
|------------------|---------------------|--------------------------------------------|--------------------|------------------|
| ADUCM420BCBZ-RL  | -40°C to +105°C     | 64-Ball LFCWLCSP (3.46mm x 3.46mm x 0.5mm) | Reel, 5000         | CB-64-2          |
| ADUCM420BCBZ-RL7 | -40°C to +105°C     | 64-Ball LFCWLCSP (3.46mm x 3.46mm x 0.5mm) | Reel, 1500         | CB-64-2          |

## EVALUATION BOARDS

| Model 1            | Description                                               |
|--------------------|-----------------------------------------------------------|
| EVAL-ADuCM420QSP1Z | WLCSP Evaluation Board and Quick Start Development System |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->

Figure 21. 64-Ball Wafer Level Chip Scale Package [WLCSP] (CB-64-2) Dimensions shown in millimeters

<!-- image -->

Updated: November 13, 2021