<!-- lastmod 2021-01-18 -->
<!-- image -->

## Enhanced Product

## FEATURES

Analog input/output: dual 24-bit ADCs

Programmable ADC conversion rate (3.5 Hz to 3.906 kHz) Simultaneous 50 Hz/60 Hz noise rejection

At 50 Hz continuous conversion mode

At 16.67 Hz single conversion mode

Flexible input mux for input channel selection to both ADCs Two 24-bit multichannel ADCs (ADC0 and ADC1)

6 differential or 12 single-ended input channels

- 4 internal channels for monitoring DAC, temperature sensor, IOVDD/4, and AVDD/4 (ADC1 only)

Programmable gain (1 to 128)

Gain of 1 with input buffer on/off supported

RMS noise: 0.052 µV at 3.53 Hz and 0.2 µV at 50 Hz

Programmable sensor excitation current sources

On-chip precision voltage reference

Two external reference options supported by both ADCs

Single 12-bit voltage output DAC

NPN mode for 4 mA to 20 mA loop applications

## Microcontroller

ARM Cortex-M3 32-bit processor

Serial wire download and debug

Internal watch crystal for wake-up timer

16 MHz oscillator frequency with 8-way programmable divider

## Memory

256 kB Flash/EE memory, 24 kB SRAM

In-circuit debug/download via serial wire and UART

Power supply voltage range: 1.8 V to 3.6 V

Power consumption, MCU active mode

Core consumes 290 µA/MHz

Overall system current consumption of 1 mA with core operating at 500 kHz (both ADCs on, input buffers off, PGA gain of 4, 1 × SPI port on, and all timers on)

Power consumption, power-down mode: 4 µA (wake-up timer active)

## Low Power, Precision Analog Microcontroller with Dual Sigma-Delta ADC, ARM Cortex-M3

[ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

## On-chip peripherals

2× UART, I 2 C, and 2 × SPI serial input/output (I/O)

16-bit pulse-width modulation (PWM) controller

19-pin multifunction GPIO port

2 general-purpose timers

Wake-up timer and watchdog timer

Multichannel DMA and interrupt controller

DMA support for both SPI channels

Package and temperature range

48-lead, 7 mm × 7 mm LFCSP

Specified for -55°C to +125°C operation Multiple diagnostic functions that support safety integrity

level (SIL) certification

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard) Military temperature range (-55°C to +125°C) Controlled manufacturing baseline One assembly/test site One fabrication site Product change notification Qualification data available on request

## APPLICATIONS

Weapons and munitions Avionics Unmanned systems Intelligent precision sensing systems

Tel: 781.329.4700

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| Revision History ............................................................................... 2          |
| General Description......................................................................... 3              |
| Functional Block Diagram .............................................................. 4                   |
| Specifications..................................................................................... 5       |
| Microcontroller Electrical Specifications.................................. 5                               |
| Absolute Maximum Ratings..........................................................10                        |

## REVISION HISTORY

1/2021-Revision 0: Initial Version

| Thermal Resistance....................................................................      |   10 |
|---------------------------------------------------------------------------------------------|------|
| Electrostatic Discharge (ESD) Ratings....................................                   |   10 |
| ESD Caution................................................................................ |   10 |
| Pin Configuration and Function Descriptions...........................                      |   11 |
| Typical Performance Characteristics ...........................................             |   14 |
| Outline Dimensions.......................................................................   |   15 |
| Ordering Guide ..........................................................................   |   15 |

## GENERAL DESCRIPTION

The ADuCM362-EP is a fully integrated, 3.906 kHz, 24-bit data acquisition (DAQ) system that incorporates dual, high performance, multichannel Σ-Δ analog-to-digital converters (ADCs), a 32-bit ARM Cortex™-M3 processor, and Flash/EE memory on a single chip. The ADuCM362-EP is designed for direct interfacing to external precision sensors in both wired and battery-powered applications.

The ADuCM362-EP contains an on-chip 32 kHz oscillator and an internal 16 MHz high frequency oscillator. The high frequency oscillator is routed through a programmable clock divider from which the operating frequency of the processor core clock is generated. The maximum core clock speed is 16 MHz. This clock speed is not limited by operating voltage or temperature.

The microcontroller core is a low power ARM Cortex-M3 processor, 32-bit RISC machine that offers up to 20 MIPS peak performance. The Cortex-M3 processor incorporates a flexible, 11-channel direct memory access (DMA) controller that supports all wired communication peripherals (both serial peripheral interfaces (SPIs), both universal asynchronous receivers/ transmitters (UARTs), and I 2 C). Also integrated on chip is 256 kB of nonvolatile Flash/EE memory and 24 kB of SRAM.

The analog subsystem consists of dual ADCs, each connected to a flexible input mux. Both ADCs can operate in fully differential and single-ended modes. Other on-chip ADC features include dual programmable excitation current sources, diagnostic current sources, and a bias voltage generator of AVDD\_REG/2 (900 mV) to set the common-mode voltage of an input channel. A low-side internal ground switch is provided to allow power-down of an external circuit (for example, a bridge circuit) between conversions. Optional input buffers are provided for the analog inputs and the external reference inputs. These buffers can be enabled for all programmable gain amplifier (PGA) gain settings.

The ADCs contain two parallel filters: a sinc3 or sinc4 filter in parallel with a sinc2 filter. The sinc3 or sinc4 filter is used for precision measurements. The sinc2 filter is used for fast measurements and for the detection of step changes in the input signal.

The ADuCM362-EP contains a low noise, low drift internal band gap reference, but the device can be configured to accept one or two external reference sources in ratiometric measurement configurations. An option to buffer the external reference inputs is provided on chip. A single-channel buffered voltage output DAC is also provided on chip.

The ADuCM362-EP integrates a range of on-chip peripherals that can be configured under microcontroller software control as required in the application. The peripherals include two UARTs, an I 2 C, and dual SPI serial I/O communication controllers, a 19-pin general-purpose input/output (GPIO) port, two general-purpose timers, a wake-up timer, and a system watchdog timer. A 16-bit PWM controller with six output channels is also provided.

The ADuCM362-EP is specifically designed to operate in batterypowered applications where low power operation is critical. The microcontroller core can be configured in a normal operating mode that consumes 290 μA/MHz (including flash/SRAM IDD). An overall system current consumption of 1 mA can be achieved with both ADCs on (input buffers off), a PGA gain of 4, one SPI port on, and all timers on.

The ADuCM362-EP can be configured in a number of low power operating modes under direct program control, including a hibernate mode (internal wake-up timer active) that consumes only 4 µA. In hibernate mode, peripherals, such as external interrupts or the internal wake-up timer, can wake up the devices. This mode allows the devices to operate with ultralow power while still responding to asynchronous external or periodic events.

On-chip factory firmware supports in-circuit serial download via a serial wire interface (2-pin JTAG system) and UART. Nonintrusive emulation is also supported via the serial wire interface. These features are incorporated into a low cost QuickStart™ Development System that supports this precision analog microcontroller family.

The device operates from an external 1.8 V to 3.6 V voltage supply and is specified over the -55°C to +125°C temperature range.

Additional application and technical information can be found in the ADuCM362 data sheet.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

22534-001

## SPECIFICATIONS

## MICROCONTROLLER ELECTRICAL SPECIFICATIONS

AVDD/IOVDD = 1.8 V to 3.6 V , internal 1.2 V reference, core frequency (fCORE) = 16 MHz, and all specifications at TA = -55°C to +125°C, unless otherwise noted.

## Table 1.

| Parameter                                  | Test Conditions/Comments                                                                                                                               | Min        | Typ       | Max        | Unit          |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-----------|------------|---------------|
| ADC SPECIFICATIONS                         | ADC0 and ADC1                                                                                                                                          |            |           |            |               |
| Conversion Rate 1                          | Chop off                                                                                                                                               | 3.5        |           | 3906       | Hz            |
|                                            | Chop on                                                                                                                                                | 3.5        |           | 1302       | Hz            |
| No Missing Codes 1                         | Chop off, ADC frequency (f ADC ) ≤ 500 Hz                                                                                                              | 24         |           |            | Bits          |
|                                            | Chop on, f ADC ≤ 250 Hz                                                                                                                                | 24         |           |            | Bits          |
| Integral Nonlinearity 1                    | Gain = 1, input buffer off                                                                                                                             |            | ±10       |            | ppmofFSR      |
|                                            | Gain = 2, 4, 8, or 16                                                                                                                                  |            | ±15       |            | ppmofFSR      |
|                                            | Gain = 32, 64, or 128                                                                                                                                  |            | ±20       |            | ppmofFSR      |
| Offset Error 2, 3, 4, 5, 6                 | Chop off, and the offset error is in the order of the noise for the programmed gain and update rate following calibration                              |            | ±230/gain |            | µV            |
|                                            | Chop on 1                                                                                                                                              |            | ±1.0      |            | µV            |
| Offset Error Drift vs. Temperature 1, 4, 5 | Chop off, gain ≤ 4                                                                                                                                     |            | 1/gain    |            | µV/°C         |
| Offset Error Lifetime Stability 7          | Chop on Gain = 128                                                                                                                                     |            | 10 1      |            | nV/°C         |
| Full-Scale Error 1, 4, 5, 6, 8             |                                                                                                                                                        |            | ±0.5/gain |            | µV/1000 Hr mV |
| Full-Scale Error Lifetime Stability 7      | Gain = 128                                                                                                                                             |            | 70        |            | µV/1000 Hr    |
| Gain Error Drift vs. Temperature 1, 4, 5   |                                                                                                                                                        |            |           |            | ppm/°C        |
|                                            | External reference Gain = 1, 2, 4, 8, or 16                                                                                                            |            | ±3        |            |               |
| PGA Gain Mismatch Error                    | Gain = 32, 64, or 128                                                                                                                                  |            | ±6        |            | ppm/°C        |
| 1                                          |                                                                                                                                                        |            | ±0.15     |            | %             |
| Power Supply Rejection                     | External reference Chop on, ADC input = 0.25 V, gain = 4                                                                                               | 95         |           |            | dB            |
|                                            | Chop off, ADCinput =7.8 mV, gain=128                                                                                                                   | 80         |           |            | dB            |
| Absolute Input Voltage Range               | Chop off, ADC input = 1 V, gain = 1                                                                                                                    | 90         |           |            | dB            |
| Unbuffered Mode Buffered Mode              |                                                                                                                                                        | AGND       |           | AVDD       | V             |
|                                            | Available for all gain settings,G=1to128                                                                                                               | AGND + 0.1 |           | AVDD - 0.1 | V             |
| Differential Input Voltage Ranges 1        |                                                                                                                                                        |            |           |            |               |
| Differential Input Voltage Ranges 1        | Gain = 1                                                                                                                                               |            |           | ±V REF     | V             |
| Differential Input Voltage Ranges 1        | Gain = 2                                                                                                                                               |            |           | ±500       | mV            |
| Differential Input Voltage Ranges 1        | Gain = 4                                                                                                                                               |            |           | ±250       | mV            |
| Differential Input Voltage Ranges 1        | Gain = 8                                                                                                                                               |            |           | ±125       | mV            |
|                                            | Gain = 16                                                                                                                                              |            |           | ±62.5      | mV            |
| Common-ModeVoltage,V CM 1                  | Ideally,V CM =((AIN+) +(AIN-))/2and gain =2to128,whereAIN+orAIN-refers to any ADC input pin in which the sign indicates a positive or negative voltage | AGND       |           | AVDD       | V             |

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

## Enhanced Product

| Parameter                           | Test Conditions/Comments                             | Min    | Typ   | Max        | Unit    |
|-------------------------------------|------------------------------------------------------|--------|-------|------------|---------|
| Input Current 9                     |                                                      |        |       |            |         |
| Buffered Mode                       | Gain > 1 (excluding AIN4, AIN5, AIN6, and AIN7 pins) |        | 1     |            | nA      |
|                                     | Gain >1(AIN4, AIN5, AIN6, andAIN7pins)               |        | 2     |            | nA      |
| Unbuffered Mode                     | Input current varies with input voltage              |        | 860   |            | nA/V    |
| Average Input Current Drift 1       |                                                      |        |       |            |         |
| Buffered Mode                       | AIN1, AIN3, AIN5, AIN7, and AIN11                    |        | ±5    |            | pA/°C   |
|                                     | AIN0, AIN4, AIN9, and AIN10                          |        | ±9    |            | pA/°C   |
|                                     | AIN2, AIN6, and AIN8                                 |        | ±15   |            | pA/°C   |
| Unbuffered Mode                     |                                                      |        | ±250  |            | pA/V/°C |
| Common-Mode Rejection, DC 1         | On ADC input                                         |        |       |            |         |
|                                     | ADC gain = 1, AVDD < 2V                              | 65     | 100   |            | dB      |
|                                     | ADC gain = 1, AVDD > 2V                              | 80     | 100   |            | dB      |
|                                     | ADC gain = 2 to 128                                  | 80     |       |            | dB      |
| Common-Mode Rejection,              | 50 Hz/60 Hz ± 1 Hz, f ADC = 16.67 Hz with            |        |       |            |         |
| 50 Hz/60 Hz 1                       | chop on, and f ADC = 50 Hz with chop off             |        |       |            |         |
|                                     | ADC gain = 1                                         | 97     |       |            | dB      |
|                                     | ADC gain = 2 to 128                                  | 90     |       |            | dB      |
| Normal ModeRejection, 50 Hz/60 Hz 1 | On ADC input                                         |        |       |            |         |
|                                     | 50 Hz/60 Hz ± 1 Hz, f ADC = 16.67 Hz with            | 60     | 80    |            | dB      |
| TEMPERATURE SENSOR 1                | After user calibration                               |        |       |            |         |
| Voltage Output at 25°C              | Processor powered down or in standby                 |        | 82.1  |            | mV      |
| Voltage Temperature Coefficient     | mode before measurement                              |        | 250   |            | µV/°C   |
| Accuracy                            |                                                      |        | 6     |            | °C      |
| GROUND SWITCH                       |                                                      |        |       |            |         |
| On Resistance (R ON )               |                                                      | 3.7    | 10    | 19         | Ω       |
| Allowable Current 1                 | 20kΩ resistor off, direct short to ground            |        |       | 20         | mA      |
| VOLTAGE REFERENCE                   | ADC internal reference                               |        |       |            |         |
| Internal Reference Voltage (V REF ) |                                                      |        | 1.2   |            | V       |
| Initial Accuracy                    | Measured at T A = 25°C                               | -0.1   |       | +0.1       | %       |
| ReferenceTemperature Coefficient 1, |                                                      | -15    | ±5    | +15        | ppm/°C  |
| Power Supply Rejection 1            |                                                      | 82     | 90    |            | dB      |
| EXTERNAL REFERENCE INPUTS           |                                                      |        |       |            |         |
| Input Range                         |                                                      |        |       |            |         |
|                                     |                                                      | 0.1    |       |            |         |
| Buffered Mode                       |                                                      | AGND + |       | AVDD - 0.1 | V       |
| Unbuffered Mode                     | Minimum differential voltage between                 | 0      |       | AVDD       | V       |
| Input Current                       | VREF+ andVREF- pins is 400mV                         |        |       |            |         |
| Buffered Mode                       |                                                      | -20    | +10   | +27        | nA      |
| Unbuffered Mode                     |                                                      |        | 500   |            | nA/V    |
| Normal Mode Rejection 1             |                                                      |        | 80    |            | dB      |
| Common-Mode Rejection 1             |                                                      | 85     | 100   |            | dB      |
| Reference Detect Levels 1           |                                                      |        | 400   |            | mV      |

## Enhanced Product

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

| Parameter                          | Test Conditions/Comments                                                                                                         | Min       | Typ    | Max        | Unit   |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------|--------|------------|--------|
| EXCITATION CURRENT SOURCES         |                                                                                                                                  |           |        |            |        |
| Output Current                     | Available from each current source, value programmable from10µAto1mA                                                             | 10        |        | 1000       | µA     |
| Initial Tolerance at 25°C 1        | Output current (I OUT ) ≥ 50 µA                                                                                                  |           | ±5     |            | %      |
| Drift 1                            | Using internal reference resistor                                                                                                |           | 100    | 400        | ppm/°C |
|                                    | Using external 150 kΩ reference resistor between IREF pin and AGND, and the resistor must have a drift specification of 5 ppm/°C |           | 75     | 400        | ppm/°C |
| Initial Current Matching at 25°C 1 | Matching between both current sources                                                                                            |           | ±0.5   |            | %      |
| Drift Matching 1                   |                                                                                                                                  |           | 50     |            | ppm/°C |
| Load Regulation, AVDD 1            | AVDD = 3.3V                                                                                                                      |           | 0.2    |            | %/V    |
| Output Compliance 1                | I OUT = 10 µA to 210 µA                                                                                                          | AGND-0.03 |        | AVDD-0.85  | V      |
|                                    | I OUT > 210 µA                                                                                                                   | AGND-0.03 |        | AVDD - 1.1 | V      |
| DAC CHANNEL SPECIFICATIONS         | Load resistance (R L ) = 5 kΩ and load capacitance (C ) = 100 pF                                                                 |           |        |            |        |
| Voltage Range                      | Internal reference                                                                                                               | 0         |        | V REF      | V      |
|                                    | External reference                                                                                                               | 0         |        | 1.8        | V      |
| DC Specifications 11               |                                                                                                                                  |           |        |            |        |
| Resolution                         |                                                                                                                                  | 12        |        |            | Bits   |
| Differential Nonlinearity          | Guaranteed monotonic                                                                                                             |           | ±0.5   |            | LSB    |
| Error                              |                                                                                                                                  |           | ±2     | ±1         |        |
| Offset                             | 1.2V internal reference                                                                                                          |           |        | ±10        | mV     |
| Gain Error                         | V REF range (reference = 1.2 V)                                                                                                  |           |        | ±0.5       | %      |
| NPN Mode 1                         |                                                                                                                                  |           |        |            |        |
| Resolution                         |                                                                                                                                  | 12        |        |            | Bits   |
| Relative Accuracy                  |                                                                                                                                  |           | ±3     |            | LSB    |
| Differential Nonlinearity          |                                                                                                                                  |           | ±0.5   |            | LSB    |
| Offset Error                       |                                                                                                                                  |           | ±0.35  |            | mA     |
| Gain Error                         |                                                                                                                                  |           | ±0.75  |            | mA     |
| Output Current Range               |                                                                                                                                  | 0.008     |        | 23.6       | mA     |
| Interpolation Mode 1, 12           | Only monotonic to 14 bits                                                                                                        |           |        |            |        |
| Resolution                         |                                                                                                                                  |           | 14     |            | Bits   |
| Relative Accuracy                  | For 14-bit resolution                                                                                                            |           | ±6     |            | LSB    |
| Differential Nonlinearity          | Monotonic (14 bits)                                                                                                              |           | ±0.6   |            | LSB    |
| Offset Error                       | 1.2V internal reference                                                                                                          |           | ±2     |            | mV     |
| Gain Error                         | V REF range (reference = 1.2 V)                                                                                                  |           | ±1     |            | %      |
|                                    | AVDD range                                                                                                                       |           | ±1     |            | %      |
| DAC AC CHARACTERISTICS 1           |                                                                                                                                  |           |        |            |        |
| Voltage Output Settling Time       |                                                                                                                                  |           | 10     |            | µs     |
| Digital-to-Analog Glitch Energy    | 1 LSB change at major carry (maximum number of bits changes simultaneously in the DACDAT register)                               |           | ±20    |            | nV-sec |
| POWER-ON RESET (POR)               |                                                                                                                                  |           |        |            |        |
| PORTrip Level                      | Voltage at IOVDD pin                                                                                                             |           | 1.65   |            | V      |
|                                    | Power-on level Power-down level                                                                                                  |           | 1.65   |            | V      |
| Timeout from POR 1                 |                                                                                                                                  |           | 50     |            | ms     |
| WATCHDOGTIMER (WDT) 1              |                                                                                                                                  |           |        |            |        |
| Timeout Period                     |                                                                                                                                  | 0.00003   |        | 8192       | sec    |
| Timeout Step Size                  | Register T3CON, Bits[3:2] (PRE) = 10                                                                                             |           | 7.8125 |            | ms     |

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

## Enhanced Product

| Parameter                                              | Test Conditions/Comments                                       | Min        | Typ    | Max       | Unit    |
|--------------------------------------------------------|----------------------------------------------------------------|------------|--------|-----------|---------|
| FLASH/EE MEMORY 1                                      |                                                                |            |        |           |         |
| Endurance 13                                           | T A = -40°C to +125°C                                          | 10,000     |        |           | Cycles  |
| Read                                                   | T A = -55°C to +125°C                                          | 10,000     |        |           | Cycles  |
| Write                                                  | T A = -55°C to -40°C                                           | 1000       |        |           | Cycles  |
| Data Retention 14                                      | T J = 85°C                                                     | 10         |        |           | Years   |
| DIGITAL INPUTS                                         | All digital inputs                                             |            |        |           |         |
| Input Leakage Current                                  | Digital inputs except for the RESET, SWCLK, and SWDIO pins     |            |        |           |         |
| Logic 1                                                | High input voltage (V INH ) = IOVDD or V INH = 1.8V            |            | 140    |           | μA      |
|                                                        | Internal pull-up disabled                                      |            | 1      |           | nA      |
| Logic 0                                                | Low input voltage (V INL ) = 0V                                |            | 160    |           | μA      |
| Input Leakage Current                                  | RESET, SWCLK, and SWDIO pins                                   |            |        |           | μA      |
| Logic 1                                                |                                                                |            | 140    |           |         |
| Logic 0                                                |                                                                |            | 160    |           | μA      |
| Input Capacitance 1                                    |                                                                |            | 10     |           | pF      |
| Logic Input Voltage                                    |                                                                |            |        |           |         |
| V INL                                                  |                                                                |            |        | 0.2×IOVDD | V       |
| V INH                                                  |                                                                | 0.7×IOVDD  |        |           | V       |
| Logic Output Voltage                                   |                                                                |            |        |           |         |
| High (V OH )                                           | Source current (I SOURCE )=1mA                                 | IOVDD -0.4 |        |           | V       |
| Low (V OL )                                            | Sink current (I SINK )=1mA                                     |            |        | 0.4       | V       |
| CRYSTAL OSCILLATOR 1                                   | 32.768 kHz crystal inputs                                      |            |        |           |         |
| Logic Input Voltage, XTALI Only 15                     |                                                                |            |        |           |         |
| V INL                                                  |                                                                |            |        | 0.8       | V       |
| V INH                                                  |                                                                | 1.7        |        |           | V       |
| XTALI Capacitance                                      |                                                                |            | 6      |           | pF      |
| XTALO Capacitance                                      |                                                                |            | 6      |           | pF      |
| ON-CHIP LOWPOWEROSCILLATOR                             |                                                                |            |        |           |         |
| Oscillator Frequency                                   |                                                                |            | 32.768 |           | kHz     |
| Accuracy                                               |                                                                | -30        | ±10    | +30       | %       |
| ON-CHIP HIGH FREQUENCY OSCILLATOR                      |                                                                |            |        |           |         |
| Oscillator Frequency                                   |                                                                |            | 16     |           | MHz     |
| Accuracy                                               | -55°C to +125°C                                                | -1.8       |        | +1.4      | %       |
| Long-Term Stability 7                                  |                                                                |            | 0.8    |           | °C/1000 |
| PROCESSOR CLOCK RATE 1                                 | Nine programmable core clock selections within specified range | 0.0625     | 0.5    | 16        | MHz     |
| Using an External Clock                                |                                                                | 0.032768   |        | 16        | MHz     |
| PROCESSOR START-UP TIME 1                              |                                                                |            |        |           |         |
| At Power-On                                            | Includes kernel power-on execution time                        |            | 41     |           | ms      |
| After Reset Event                                      | Includes kernel power-on execution time                        |            | 1.44   |           | ms      |
| From Processor Power-Down (Mode 1, Mode 2, and Mode 3) | Clock frequency (f CLK ) is the Cortex-M3 core clock           |            | 3 to 5 |           | f CLK   |
| FromTotal Halt or Hibernate Mode (Mode 4 or Mode 5)    |                                                                |            | 30.8   |           | µs      |

## Enhanced Product

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

| Parameter                                            | Test Conditions/Comments                                                                                         |   Min |   Typ |   Max | Unit   |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| POWER REQUIREMENTS                                   |                                                                                                                  |       |       |       |        |
| Power Supply Voltage Range,V DD                      | AVDD, IOVDD                                                                                                      |   1.8 |       |   3.6 | V      |
| Power Consumption                                    |                                                                                                                  |       |       |       |        |
| I DD (Microcontroller Unit (MCU) Active Mode) 16, 17 | Processor clock rate = 16 MHz, all peripherals on (CLKSYSDIV = 0)                                                |       |   5.5 |       | mA     |
|                                                      | Processor clock rate = 8 MHz, all peripherals on (CLKSYSDIV = 1)                                                 |       |     3 |       | mA     |
|                                                      | Processor clock rate = 500 kHz, both ADCs on (input buffers off) with PGA gain =4, 1×SPIport on,and all timerson |       |     1 |       | mA     |
| I DD (MCU Powered Down)                              | Full temperature range, total halt mode (Mode 4)                                                                 |       |     4 |       | μA     |
| I DD , Total (ADC0) 17                               | PGA enabled, gain ≥ 32                                                                                           |       |   320 |       | μA     |
| PGA                                                  | Gain = 4, 8, or 16, PGA only                                                                                     |       |   130 |       | μA     |
|                                                      | Gain = 32, 64, or 128, PGA only                                                                                  |       |   180 |       | μA     |
| Input Buffers                                        | 2 × input buffers = 70 μA                                                                                        |       |    70 |       | μA     |
| Digital Interface and Modulator                      |                                                                                                                  |       |    70 |       | μA     |
| I DD (ADC1)                                          | Input buffers off, gain = 4, 8, or 16 only                                                                       |       |   200 |       | μA     |
| External Reference Input Buffers                     | 60 μA each                                                                                                       |       |   120 |       | μA     |

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                             | Rating          |
|---------------------------------------|-----------------|
| AVDD toAGND                           | -0.3V to +3.96V |
| IOVDD toDGND 1                        | -0.3V to +3.96V |
| Digital Input Voltage toDGND 1        | -0.3V to +3.96V |
| Digital Output Voltage toDGND 1       | -0.3V to +3.96V |
| Analog Inputs toAGND                  | -0.3V to +3.96V |
| Temperature                           |                 |
| Operating Range                       | -55°C to +125°C |
| Storage Range                         | -65°C to +150°C |
| Junction                              | 150°C           |
| Peak Solder Reflow                    |                 |
| SnPb Assemblies (10 sec to 30 sec)    | 240°C           |
| Pb-Free Assemblies (20 sec to 40 sec) | 260°C           |

1  DGND is the digital system ground reference.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θJA is the natural convection, junction to ambient, thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case, thermal resistance.

## Table 3. Thermal Resistance

| PackageType 1   |   θ JA |   θ JC | Unit   |
|-----------------|--------|--------|--------|
| CP-48-4         |     28 |    9.5 | °C/W   |

1  Thermal impedance simulated values are based on a JEDEC 2S2P thermal test board with 25 thermal vias. See JEDEC JESD-51.

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Ratings for ADuCM362-EP

## Table 4. ADuCM362-EP, 48-Lead LFCSP

| ESD Model   | WithstandThreshold   | Class   |
|-------------|----------------------|---------|
| HBM         | ±2 kV                | 2       |
| FICDM       | ±1000V               | C3      |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

NOTES

1. EXPOSED PAD. THE EXPOSED PAD MUST BE SOLDERED TO A METAL PLATE ON THE PCB AND TO DGND FOR MECHANICAL REASONS.

Figure 2. Pin Configuration

## Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic                  | Description                                                                                                                                                                                                                                                     |
|-----------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RESET                     | Reset Pin, Active Low Input. An internal pull-up is provided.                                                                                                                                                                                                   |
|         2 | P2.1/SDA/UART1DCD/UARTDCD | General-Purpose Input/Output P2.1/I 2 C Serial Data Pin/UART1 Data Carrier Detect Pin/UART Data Carrier Detect Pin.                                                                                                                                             |
|         3 | P2.2/BM                   | General-Purpose Input/Output P2.2/Boot Mode Input Select Pin. WhentheP2.2/BM pin is held low during andfor a short time after any reset sequence, the device entersUARTdownloadmode.                                                                            |
|         4 | XTALO                     | External Crystal Oscillator Output Pin. Optional 32.768 kHz source for real-time clock.                                                                                                                                                                         |
|         5 | XTALI                     | External Crystal Oscillator Input Pin. Optional 32.768 kHz source for real-time clock.                                                                                                                                                                          |
|         6 | IOVDD                     | Digital System Supply Pin. IOVDD must be connected to the digital system ground reference (DGND) via a 0.1 µF capacitor.                                                                                                                                        |
|         7 | DVDD_REG                  | Digital Regulator Supply. DVDD_REG must be connected to DGNDvia a 470 nF capacitor and to AVDD_REG (Pin 18).                                                                                                                                                    |
|         8 | AIN0                      | ADC Analog Input 0. AIN0 can be configured as a positive or negative input to either ADC in differential or single-ended mode.                                                                                                                                  |
|         9 | AIN1                      | ADC Analog Input 1. AIN1 can be configured as a positive or negative input to either ADC in differential or single-ended mode.                                                                                                                                  |
|        10 | AIN2                      | ADC Analog Input 2. AIN2 can be configured as a positive or negative input to either ADC in differential or single-ended mode.                                                                                                                                  |
|        11 | AIN3                      | ADC Analog Input 3. AIN3 can be configured as a positive or negative input to either ADC in differential or single-ended mode.                                                                                                                                  |
|        12 | AIN4/IEXC                 | ADC Analog Input 4/Excitation Current Source. AIN4 can be configured as a positive or negative input to either ADC in differential or single-ended mode. IEXC can be configured as the output pin for Excitation Current Source 0orExcitation Current Source 1. |

22534-007

## [ADuCM362-EP](https://www.analog.com/ADuCM362?doc=ADuCM362-EP.pdf)

|   Pin No. | Mnemonic                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        13 | GND_SW                       | Sensor Power Switch to Analog Ground Reference.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|        14 | VREF+                        | External Reference Positive Input. An external reference can be applied between theVREF+ andVREF- pins.                                                                                                                                                                                                                                                                                                                                                                                                  |
|        15 | VREF-                        | External Reference Negative Input. An external reference can be applied between theVREF+ andVREF- pins.                                                                                                                                                                                                                                                                                                                                                                                                  |
|        16 | AGND                         | Analog System Ground Reference Pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|        17 | AVDD                         | Analog System Supply Pin. AVDD must be connected to AGNDvia a 0.1 µF capacitor.                                                                                                                                                                                                                                                                                                                                                                                                                          |
|        18 | AVDD_REG                     | Internal Analog Regulator Supply Output. AVDD_REG must be connected toAGND via a 470 nF capacitor and to DVDD_REG (Pin 7).                                                                                                                                                                                                                                                                                                                                                                               |
|        19 | DAC                          | DACVoltage Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        20 | INT_REF                      | Internal Reference. INT_REF must be connected to ground via a 470 nF decoupling capacitor.                                                                                                                                                                                                                                                                                                                                                                                                               |
|        21 | IREF                         | Optional Reference Current Resistor Connection for the Excitation Current Sources. The reference current used for the excitation current sources is set by a low drift (5 ppm/°C) external resistor connected to IREF.                                                                                                                                                                                                                                                                                   |
|        22 | AIN5/IEXC                    | ADC Analog Input 5/Excitation Current Source. AIN5canbeconfigured as a positive or negative input to either ADC in differential or single-ended mode. IEXC can also be configured as the output pin for Excitation Current Source 0orExcitation Current Source 1.                                                                                                                                                                                                                                        |
|        23 | AIN6/IEXC                    | ADC Analog Input 6/Excitation Current Source. AIN6canbeconfigured as a positive or negative input to either ADC in differential or single-ended mode. IEXC can also be configured as the output pin for Excitation Current Source 0orExcitation Current Source 1.                                                                                                                                                                                                                                        |
|        24 | AIN7/VBIAS0/IEXC/EXTREF2IN+  | ADCAnalog Input 7/BiasVoltage Output/Excitation Current Source/External Reference 2 Positive Input. AIN7 can be configured as a positive or negative input to either an ADC in differential or single-ended mode.VBIAS0 can be configured as an analog output pin to generate the bias voltage,VBIAS0, of AVDD_REG/2. IEXC can beconfigured as the output pin for Excitation Current Source 0orExcitation Current Source 1. EXTREF2IN+ can be configured as the positive input for External Reference 2. |
|        25 | AIN8/EXTREF2IN-              | ADC Analog Input 8/External Reference 2 Negative Input. AIN8 can beconfigured as a positive or negative input to either an ADC in differential or single-ended mode. EXTREF2IN- can be configured as the negative input for External Reference 2.                                                                                                                                                                                                                                                        |
|        26 | AIN9/DACBUFF+                | ADC Analog Input 9/Noninverting Input to the DAC Output Buffer. AIN9 can be configured as a positive or negative input to either an ADC in differential or single-ended mode. DACBUFF+ can beconfigured as the noninverting input to the DACoutputbuffer whentheDACisconfigured for NPN mode.                                                                                                                                                                                                            |
|        27 | AIN10                        | ADC Analog Input 10. AIN10 can be configured as a positive or negative input to either ADC in differential or single-ended mode.                                                                                                                                                                                                                                                                                                                                                                         |
|        28 | AIN11/VBIAS1                 | ADC Analog Input 11/Bias Voltage Output. AIN11 can be configured as a positive or negative input to either an ADC in differential or single-ended mode.VBIAS1 can be configured as an analog output pin to generate the bias voltage, VBIAS1, of AVDD_REG/2 .                                                                                                                                                                                                                                            |
|        29 | P0.0/MISO1/UART1DCD/ UARTDCD | General-Purpose Input/Output P0.0/SPI1 Master Input, Slave Output Pin/UART1 Data Carrier Detect Pin/UART Data Carrier Detect Pin.                                                                                                                                                                                                                                                                                                                                                                        |
|        30 | P0.1/SCLK1/SCL/RxD           | General-Purpose Input/Output P0.1/SPI1 Serial Clock Pin/I 2 CSerial Clock Pin/UART Serial Input (Data Input for the UART Downloader).                                                                                                                                                                                                                                                                                                                                                                    |
|        31 | P0.2/MOSI1/SDA/TxD           | General-Purpose Input/Output P0.2/SPI1 Master Output, Slave Input Pin/I 2 C Serial Data Pin/ UART Serial Output (Data Output for the UART Downloader).                                                                                                                                                                                                                                                                                                                                                   |
|        32 | P0.3/IRQ0/CS1/RTS1/RTS       | General-Purpose Input/Output P0.3/External Interrupt Request 0/SPI1 Chip Select Pin, Active Low (When Using SPI1, Configure as CS1)/UART1 Request to Send Signal/UART Request toSend Signal.                                                                                                                                                                                                                                                                                                             |
|        33 | P0.4/RTS/ECLKO/RTS1          | General-Purpose Input/Output P0.4/UART Request to Send Signal/External Clock Output Pin for Test Purposes/UART1 Request to Send Signal.                                                                                                                                                                                                                                                                                                                                                                  |
|        34 | P0.5/IRQ1/CTS                | General-Purpose Input/Output P0.5/External Interrupt Request 1/UART Clear to Send Signal.                                                                                                                                                                                                                                                                                                                                                                                                                |
|        35 | P0.6/IRQ2/RxD1               | General-Purpose Input/Output P0.6/External Interrupt Request 2/UART1 Serial Input.                                                                                                                                                                                                                                                                                                                                                                                                                       |
|        36 | P0.7/POR/TxD1                | General-Purpose Input/Output P0.7/Power-On Reset Pin (Active High)/UART1 Serial Output.                                                                                                                                                                                                                                                                                                                                                                                                                  |
|        37 | IOVDD                        | Digital System Supply Pin. IOVDD must be connected to DGNDvia a 0.1 µF capacitor.                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Enhanced Product

<!-- image -->

|   Pin No. | Mnemonic                 | Description                                                                                                                                           |
|-----------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|        38 | P1.0/IRQ3/PWMSYNC/EXTCLK | General-Purpose Input/Output P1.0/External Interrupt Request 3/PWMExternal Synchronization Input/External Clock Input Pin.                            |
|        39 | P1.1/IRQ4/PWMTRIP/DTR    | General-Purpose Input/Output P1.1/External Interrupt Request 4/PWM External Trip Input/ UART Data Terminal Ready Pin.                                 |
|        40 | P1.2/PWM0/RI             | General-Purpose Input/Output P1.2/PWM0 Output/UART Ring Indicator Pin.                                                                                |
|        41 | P1.3/PWM1/DSR            | General-Purpose Input/Output P1.3/PWM1 Output/UART Data Set Ready Pin.                                                                                |
|        42 | P1.4/PWM2/MISO0/SDA      | General-Purpose Input/Output P1.4/PWM2 Output/SPI0 Master Input, Slave Output Pin/I 2 C Serial Data Pin.                                              |
|        43 | P1.5/IRQ5/PWM3/SCLK0     | General-Purpose Input/Output P1.5/External Interrupt Request 5/PWM3 Output/SPI0 Serial Clock Pin.                                                     |
|        44 | P1.6/IRQ6/PWM4/MOSI0     | General-Purpose Input/Output P1.6/External Interrupt Request 6/PWM4 Output/SPI0 Master Output, Slave Input Pin.                                       |
|        45 | P1.7/IRQ7/PWM5/CS0       | General-Purpose Input/Output P1.7/External Interrupt Request 7/PWM5 Output/SPI0 Chip Select Pin, Active Low (When Using SPI0, Configure as CS0).      |
|        46 | P2.0/SCL/UARTCLK         | General-Purpose Input/Output P2.0/I 2 C Serial Clock Pin/Input Clock Pin for UART Block Only.                                                         |
|        47 | SWCLK                    | Serial Wire Debug Clock Input Pin.                                                                                                                    |
|        48 | SWDIO EP                 | Serial Wire Debug Data Input/Output Pin. Exposed Pad. The exposed pad must be soldered to a metal plate on the PCB and to DGNDfor mechanical reasons. |

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 3. ADC Codes (Decimal Values) vs. Die Temperature

<!-- image -->

## OUTLINE DIMENSIONS

PKG-004509

<!-- image -->

10-10-2018-C

Figure 4. 48-Lead Lead Frame Chip Scale Package [LFCSP]

7 mm × 7 mm Body and 0.75 mm Package Height (CP-48-4) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1            | ADCs        | Flash/EEandSRAM   | TemperatureRange   | Package Description   | Package Option   |
|--------------------|-------------|-------------------|--------------------|-----------------------|------------------|
| ADuCM362TCPZ56EPR7 | Dual 24-Bit | 256 kB and 24 kB  | -55°C to +125°C    | 48-Lead LFCSP         | CP-48-4          |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->