<!-- lastmod 2019-07-17 -->
<!-- image -->

Data Sheet

## FEATURES

Two precision 20-bit Σ-∆ ADCs

Programmable ADC conversion rates from 4 Hz to 8000 Hz On-chip precision voltage reference

## Primary ADC

Differential voltage inputs to a 20-bit Σ-∆ ADC

Programmable gain (from 4 to 512)

Digital comparator with accumulator

ADC absolute input voltage range: -200 mV to +300 mV Auxiliary ADC

Flexible input mux for input channel selection

Single-ended voltage input (can be interfaced to an

external temperature sensor), internal temperature sensor input, or diagnostic supply input

## Microcontroller

Arm Cortex-M3 32-bit processor

16.384 MHz precision oscillator with 1% accuracy Serial wire download (SWD) port supporting code download and debug

Automotive qualified integrated LIN transceiver

LIN 2.2-compatible slave

SAE J-2602-compatible slave

Low electromagnetic emissions (EME)

High electromagnetic immunity (EMI)

## Automotive Qualified, Dual-Channel, Precision ADCs with LIN2.2 Slave Interface

[ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

## Memory

128 kB Flash/EE memory, ECC

6 kB SRAM, ECC

4 kB data Flash/EE memory, ECC

10,000 cycle Flash/EE endurance

20-year Flash/EE data retention

In circuit download via SWD and LIN

On-chip peripherals: SPI, GPIO port, general-purpose timer,

wake-up timer, watchdog timer, and on-chip POR

## Power

Operates directly from an external voltage supply, varying from 3.6 V to 18 V

Power consumption, 8 mA typical (16 MHz) at TA = -40°C to +115°C

Low power monitor mode

Package and temperature range

6 mm × 6 mm, 32-lead LFCSP

Fully specified for -40°C to +115°C operation, additional specifications are available for +115°C to +125°C operation

AEC-Q100 qualified for automotive applications

## APPLICATIONS

LIN sensor interface for automotive applications General powertrain, body and chassis sensing Current and voltage sensing for industrial applications

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Revision History ............................................................................... 2          |
| Functional Block Diagram .............................................................. 3                   |
| General Description......................................................................... 4              |
| Specifications..................................................................................... 5       |
| Absolute Maximum Ratings..........................................................11                        |
| ESD Caution................................................................................11               |
| Pin Configuration and Function Descriptions........................... 12                                   |
| Terminology....................................................................................14           |

## REVISION HISTORY

6/2019-Revision 0: Initial Version

| Applications Information.............................................................. 15    |
|----------------------------------------------------------------------------------------------|
| Design Guidelines ...................................................................... 15  |
| Power and Ground Recommendations................................... 15                       |
| Exposed Pad Thermal Recommendations.............................. 15                         |
| General Recommendations....................................................... 15            |
| Recommended External Components Schematic ................. 15                               |
| Outline Dimensions....................................................................... 16 |
| Ordering Guide .......................................................................... 16 |
| Automotive Products................................................................. 16      |

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADuCM300 is a fully integrated, 8 kSPS (8000 Hz conversion rate) data acquisition system that incorporates dual, high performance, Σ-Δ analog-to-digital converters (ADCs), a 32-bit Arm® Cortex®-M3 processor, and microcontroller unit (MCU) subsystem. The ADuCM300 has a 128 kB program Flash/EE, 4 kB data Flash/EE, and 6 kB static random access memory (SRAM).

The ADuCM300 is a complete system solution for external precision sensor voltage measurements in automotive applications. Minimizing external system components, the device can be powered directly from an external voltage supply that varies from 3.6 V to 18 V. On-chip, low dropout (LDO) regulators generate the supply voltages for the integrated digital and analog subsystems.

The analog subsystem consists of two 20-bit Σ-Δ ADCs: a primary ADC and an auxiliary ADC. The primary ADC accepts a differential input and is ideally suited to interface external sensors with low level signal amplitude outputs integrating a low noise, programmable gain amplifier (PGA), and precision, low drift reference. The auxiliary ADC is connected to a flexible input multiplexer and can measure external single-ended sensor input voltages (AIN5/GND\_SW), the internal (on-chip) temperature sensor, or monitor the supply voltage connected to AIN4 (see Figure 1).

The ADuCM300 operates from an on-chip, 16.384 MHz, high frequency oscillator that supplies the system clock. This clock is routed through a programmable clock divider from which the core clock operating frequency is generated. The device also contains a 32 kHz oscillator for low power operation.

The ADuCM300 integrates a range of on-chip peripherals that can be configured under core software control as required in the application. These peripherals include a serial peripheral interface (SPI) input/output communication controller, six general-purpose input/output (GPIO) pins, one general-purpose timer, a wake-up timer (WUT), and a watchdog timer (WDT).

The ADuCM300 operates in battery-powered applications where low power operation is critical. The microcontroller core can be configured in normal operating mode, resulting in an overall system current consumption of &lt;18.5 mA when all peripherals are active. The device can also be configured in a number of low power operating modes under direct program control, consuming &lt;100 µA. The ADuCM300 includes a local interconnect network (LIN) physical interface for single wire, high voltage communications in automotive environments.

The device operates from an external 3.6 V to 18 V (on VDD, Pin 26) voltage supply and is specified over the -40°C to +115°C temperature range, with additional specifications available for the +115°C to +125°C temperature range.

For more information and register details, see the ADuCM300 Hardware Reference Manual.

## SPECIFICATIONS

Specifications are valid for VDD = 3.6 V to 18 V , Arm core frequency (fCORE) = 16.384 MHz, clock divider bits = 0, and voltage reference (VREF) = 1.2 V (internal), unless otherwise stated. The device is fully specified for the temperature range of TA = -40°C to +115°C. Parameters specified in the 115°C to 125°C temperature range of operation are functional within this range, but with degraded performance. Typical values noted reflect the approximate parameter mean at TA = 25°C under nominal conditions, unless otherwise stated.

## Table 1.

|                                   |                                                                                                          | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =115°Cto125°C 1   | T A =115°Cto125°C 1          | T A =115°Cto125°C 1   |
|-----------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-----------------------|------------------------------|-----------------------|
| Parameter                         | Test Conditions/Comments                                                                                 | Min                     | Typ                     | Max                     | Min Typ               | Unit                         |                       |
| ADC SPECIFICATIONS                |                                                                                                          |                         |                         |                         |                       |                              |                       |
| Conversion Rate 1                 | ADC normal operating mode                                                                                | 4                       |                         | 8000                    |                       | Hz                           |                       |
|                                   | ADC low power mode, chop on                                                                              | 1                       |                         | 656                     |                       | Hz                           |                       |
| Primary ADC (AIN0/AIN1 Only)      |                                                                                                          |                         |                         |                         |                       |                              |                       |
| No Missing Codes 1                | Valid for all ADCupdate rates and ADC modes                                                              | 20                      |                         |                         |                       | Bits                         |                       |
| Total Gain Error 1,2,3,4          | Factory calibrated at a gain of 8, normal mode                                                           | -0.5                    | ±0.1                    | +0.5                    | ±0.15                 | %                            |                       |
|                                   | Low power mode                                                                                           | -1                      | ±0.2                    | ±1                      |                       | %                            |                       |
| Integral Nonlinearity (INL) 1,5,6 | ADCFLT = 0x10001, 0x08101, 0x00007                                                                       | -200                    | ±10                     | +200                    | ±80                   | ppmof full-scale range (FSR) |                       |
| Offset Error 1,3,4                | Chop off, gain = 4, 8, or 16, external short, after user system calibration at 25°C,1LSB= 2.28 μV ÷ gain | -100                    | ±24                     | +100                    |                       | LSBs                         |                       |
|                                   | Chop off, gain = 32 or 64, external short, after user system calibration at 25°C,1LSB= 2.28 μV ÷ gain    | -160                    | ±48                     | +160                    |                       | LSBs                         |                       |
|                                   | Chop off, gain = 512, external short, after user system calibration at 25°C, 1 LSB = 2.28 μV ÷ gain      | -1400                   | ±60                     | +1400                   |                       | LSBs                         |                       |
|                                   | Chop on, external short, low power mode, gain = 64 or 512, processor powered down                        | -300                    | ±50                     | +250                    | ±250                  | nV                           |                       |
|                                   | Chop on, external short, after user system calibrationat25°C,VDD=18V                                     | -1.5                    |                         | +1.5                    |                       | µV                           |                       |
| Offset Error Drift 1, 5, 7        | Chop off, gains of 4 to 64, normal mode                                                                  |                         | ±0.48                   |                         |                       | LSB/°C                       |                       |
|                                   | Chop on                                                                                                  |                         | ±5                      |                         | ±5                    | nV/°C                        |                       |
| Gain Drift 1, 8                   |                                                                                                          |                         | ±3                      |                         | ±3                    | ppm/°C                       |                       |
| PGA Gain Mismatch Error           |                                                                                                          |                         | ±0.1                    |                         | ±0.1                  | %                            |                       |
| Output Noise 1                    | Register ADC0CON, PGASCALE bits (Bits[11:10]) = 0x3                                                      |                         |                         |                         |                       |                              |                       |
|                                   | Gain = 64, ADCFLT = 0x08101                                                                              |                         | 0.80                    |                         | 1.2                   | µV rms                       |                       |
|                                   | Gain = 64, ADCFLT = 0x00007                                                                              |                         | 0.75                    |                         |                       | µV rms                       |                       |
|                                   | Gain = 32, ADCFLT = 0x08101                                                                              |                         | 1.00                    |                         | 1.3                   | µV rms                       |                       |
|                                   | Gain = 32, ADCFLT = 0x00007                                                                              |                         | 0.80                    |                         |                       | µV rms                       |                       |
|                                   | Gain = 16, ADCFLT = 0x08101                                                                              |                         | 1.50                    |                         | 2.0                   | µV rms                       |                       |
|                                   | Gain = 16, ADCFLT = 0x00007                                                                              |                         | 1.10                    |                         |                       | µV rms                       |                       |
|                                   | Gain = 8, ADCFLT = 0x08101                                                                               |                         | 2.10                    |                         | 2.5                   | µV rms                       |                       |
|                                   | Gain = 8, ADCFLT = 0x00007                                                                               |                         | 1.60                    |                         |                       | µV rms                       |                       |
|                                   | Gain = 4, ADCFLT = 0x08101                                                                               |                         | 3.40                    |                         | 4.0                   | µV rms                       |                       |
|                                   | Gain = 4, ADCFLT = 0x00007                                                                               |                         | 2.60                    |                         |                       | µV rms                       |                       |
|                                   | Gain = 64, ADCFLT = 0x10001                                                                              |                         | 1.60                    |                         | 1.85                  | µV rms                       |                       |
|                                   | Gain = 32, ADCFLT = 0x10001                                                                              |                         | 1.70                    |                         | 2.0                   | µV rms                       |                       |
|                                   | Gain = 16, ADCFLT = 0x10001                                                                              |                         | 2.00                    |                         | 2.1                   | µV rms                       |                       |
|                                   | Gain = 8, ADCFLT = 0x10001                                                                               |                         | 2.40                    |                         | 3.0                   | µV rms                       |                       |
|                                   | Gain = 4, ADCFLT = 0x10001                                                                               |                         | 4.35                    |                         | 5.0                   | µV rms                       |                       |
|                                   | ADC low power mode, 221 Hz update rate,                                                                  |                         | 0.6                     |                         | 0.8                   | µV rms                       |                       |

<!-- image -->

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

## Data Sheet

|                                            |                                                                                                                                   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =115°Cto125°C 1   | T A =115°Cto125°C 1   |           |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------|------------------------|-----------------------|-----------------------|-----------|
| Parameter                                  | Test Conditions/Comments                                                                                                          | Min                    | Typ                    | Max                    | Min Typ               | Max                   | Unit      |
| Auxiliary ADC, AIN4 Only 1, 9              |                                                                                                                                   |                        |                        |                        |                       |                       |           |
| No Missing Codes                           | Valid at all ADC update rates                                                                                                     | 20                     |                        |                        |                       |                       | Bits      |
| Total Gain Error 3, 4, 10                  | Includes resistor mismatch                                                                                                        | -0.25                  | ±0.06                  | +0.25                  | ±0.1                  |                       | %         |
|                                            | T A = -25°C to +65°C                                                                                                              | -0.15                  | ±0.03                  | +0.15                  |                       |                       | %         |
| INL                                        | From 6 V to 18 V, ADCFLT = 0x10001, 0x08101, 0x00007                                                                              | -350                   | ±10                    | +350                   | ±150                  |                       | ppmof FSR |
| Offset Error 3, 4                          | Chop off, 1 LSB = 27.4 µV, after two-point calibration                                                                            | -160                   | ±16                    | +160                   |                       |                       | LSB       |
|                                            | Chop on, after two-point calibration, offset measured using a 0Vdifferential voltage into the ADC voltage (V ADC ) auxiliary pins | -16                    | ±4.8                   | +16                    | ±4.8                  |                       | LSB       |
| Offset Error Drift 7                       | Chop off                                                                                                                          |                        | ±0.48                  |                        | ±3                    |                       | LSB/°C    |
| Gain Drift 8                               | Includes resistor mismatch drift                                                                                                  |                        | ±3                     |                        |                       |                       | ppm/°C    |
| Output Noise 11                            | 10 Hz update rate, chop on                                                                                                        |                        | 50                     |                        |                       |                       | µV rms    |
|                                            | ADCFLT = 0x00007                                                                                                                  |                        | 180                    |                        |                       |                       | µV rms    |
|                                            | ADCFLT = 0x08101                                                                                                                  |                        | 280                    |                        | 300                   |                       | µV rms    |
|                                            | ADCFLT = 0x10001                                                                                                                  |                        | 400                    |                        | 470                   |                       | µV rms    |
| Auxiliary ADC, AIN5 Only 1                 |                                                                                                                                   |                        |                        |                        |                       |                       |           |
| No Missing Codes                           | Valid at all ADC update rates                                                                                                     | 20                     |                        |                        |                       |                       | Bits      |
| Total Gain Error 3, 12                     |                                                                                                                                   | -0.25                  | ±0.06                  | +0.25                  | ±0.10                 |                       | %         |
| INL                                        | ADCFLT = 0x10001, 0x08101, 0x00007                                                                                                | -60                    | ±10                    | +60                    | ±15                   |                       | ppmof FSR |
| Offset Error 3, 12                         |                                                                                                                                   |                        |                        |                        |                       |                       |           |
| Chop Off                                   | Chop off, 1 LSB = 1.14 µV (unipolar mode), after two-point calibration                                                            | -160                   | ±48                    | +160                   |                       |                       | LSB       |
| ChopOn                                     | Chop on                                                                                                                           | -80                    | +16                    | +80                    | +16                   |                       | LSB       |
| Offset Error Drift                         | Chop off                                                                                                                          |                        | ±0.48                  |                        | ±0.48                 |                       | LSB/°C    |
| Gain Drift 8                               |                                                                                                                                   |                        | 3                      |                        | 3                     |                       | ppm/°C    |
| Output Noise                               | 1 kHz update rate, ADCFLT=0x00007                                                                                                 |                        | 7.5                    |                        | 10                    |                       | µV rms    |
| ADC SPECIFICATIONS, ANALOG INPUT           | Register ADC0CON, PGASCALE bits (Bits[11:10]) = 0x3                                                                               |                        |                        |                        |                       |                       |           |
| Primary ADC 1 Absolute Input Voltage Range | Applies to both AIN0 and AIN1                                                                                                     | -200                   |                        | +300                   |                       |                       | mV        |
| Input Voltage Range 13                     | Gain = 4, limited by absolute input voltage range                                                                                 |                        | ±300                   |                        |                       |                       | mV        |
|                                            |                                                                                                                                   |                        | ±150                   |                        |                       |                       | mV        |
|                                            | Gain = 8                                                                                                                          |                        |                        |                        |                       |                       |           |
|                                            | Gain = 32                                                                                                                         |                        | ±37.5                  |                        |                       |                       | mV        |
| Input Leakage 14                           | Gain = 512                                                                                                                        | -3                     |                        | +3                     | ±0.2                  |                       | nA        |
| Input Offset Current 14                    |                                                                                                                                   |                        | 0.2                    | 0.8                    | 0.4                   |                       | nA        |
| Auxiliary ADC, AIN4 Only                   |                                                                                                                                   |                        |                        |                        |                       |                       |           |
| Absolute Input Voltage Range 1             | Voltage ADC specifications valid in this range                                                                                    | 6                      |                        | 18                     |                       |                       | V         |
| Input Voltage 1                            |                                                                                                                                   |                        | 0 to                   |                        |                       |                       | V         |
| Range Input Current                        | AIN4 = 18 V                                                                                                                       | 5                      | 28.8 9                 | 13                     | 11                    |                       | µA        |

## Data Sheet

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

<!-- image -->

|                                      | Test Conditions/Comments                       | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =115°Cto125°C 1   | T A =115°Cto125°C 1   |               |
|--------------------------------------|------------------------------------------------|------------------------|------------------------|------------------------|-----------------------|-----------------------|---------------|
| Parameter                            |                                                | Min                    | Typ                    | Max                    | Min Typ               | Max                   | Unit          |
| Auxiliary ADC, AIN5                  | VREF = AVDD18 and GND_SW                       |                        |                        |                        |                       |                       |               |
| Absolute Input 1, 15                 |                                                | 100                    |                        | 1500                   |                       |                       | mV            |
| Voltage Range Input Voltage Range 1  |                                                |                        |                        |                        |                       |                       |               |
|                                      |                                                |                        | 0 to 1.4               |                        |                       |                       | V             |
| 1                                    |                                                |                        |                        | 10                     |                       |                       | nA            |
| Input Current                        |                                                |                        | 2.5                    |                        | 3.5                   |                       |               |
| VOLTAGEREFERENCE                     |                                                |                        |                        |                        |                       |                       |               |
| Internal Reference                   |                                                |                        | 1.2                    |                        | 1.2                   |                       | V             |
| Power-Up Time 1                      |                                                |                        | 0.5                    |                        | 0.5                   |                       | ms            |
| 1                                    | Measured at T A = 25°C                         | -0.15                  |                        | +0.15                  |                       |                       | %             |
| Initial Accuracy Temperature         |                                                | -20                    | ±5                     | +20                    | ±8                    |                       | ppm/°C        |
| Coefficient 17,                      |                                                |                        | 100                    |                        |                       |                       | ppm/1000hours |
| Long-TermStability 18                |                                                |                        |                        |                        |                       |                       |               |
| ADC DIAGNOSTICS AVDD18 ÷ 136         | At any gain setting                            | 12                     |                        | 14                     |                       |                       | mV            |
| Accuracy 1, 5, 19 Voltage Attenuator | Differential voltage increases on the          | 2.4                    |                        | 3.2                    | 2.8                   |                       | V             |
| Current Source Accuracy              | attenuator when current on                     |                        |                        |                        |                       |                       |               |
| RESISTIVE ATTENUATOR                 |                                                |                        |                        |                        |                       |                       |               |
| Divider Ratio                        | Implicit in the auxiliary ADC total gain error |                        | 24                     |                        |                       |                       |               |
|                                      |                                                |                        | ±3                     |                        |                       |                       | ppm/°C        |
| Resistor Mismatch Drift              | specification                                  |                        |                        |                        |                       |                       |               |
| ADC GROUNDSWITCH Resistor to Ground  |                                                | 45                     | 60                     | 75                     |                       |                       | kΩ            |
| TEMPERATURESENSOR Accuracy           | Processor in hibernate mode                    | -3                     | ±1                     | +3                     | -3.5 ±1               | +3.5                  | °C            |
|                                      | T A = -25°C to +85°C                           | -2.5                   | ±0.5                   | +2.5                   |                       |                       | °C            |
| T                                    | A = -10°C to +55°C                             | -2                     | ±0.5                   | +2                     |                       |                       | °C            |
| POWER-ON RESET (POR) 1               | Refers to voltage at the VDDpin                |                        |                        |                        |                       |                       |               |
| Trip Level                           |                                                | 2.8                    | 3.1                    | 3.4                    | 3.3                   |                       | V             |
| Hysteresis                           |                                                |                        | 0.1                    |                        |                       |                       | V             |
| LOWVOLTAGE FLAG                      |                                                |                        |                        |                        |                       |                       |               |
| Low Voltage Flag Level               | Refers to voltage at the VDDpin                | 2.6                    | 2.75                   | 3.00                   |                       |                       | V             |
| WDT                                  |                                                |                        |                        |                        |                       |                       |               |
| Shortest Timeout                     | 32,768 Hz clock with a prescaler of 1          |                        | 30.5                   |                        | 30.5                  |                       | µs            |
| Period Longest Timeout               | 32,768 Hz clock with a prescaler of 4096       |                        | 8192                   |                        |                       |                       | sec           |
| Period FLASH/EEMEMORY                |                                                |                        |                        |                        |                       |                       |               |
| Program Flash Size                   |                                                |                        | 128                    |                        |                       |                       | kB            |
| Data Flash Size                      |                                                |                        |                        |                        |                       |                       | kB            |
|                                      |                                                |                        | 4                      |                        |                       |                       |               |
| Endurance 21                         |                                                | 10,000                 |                        |                        |                       |                       | Cycles        |
| Data Retention 22                    |                                                | 20                     |                        |                        |                       |                       | Years         |
| LOGIC INPUTS 1                       |                                                |                        |                        |                        |                       |                       |               |
| Input                                |                                                |                        |                        |                        |                       |                       |               |
| Voltage Low (V INL )                 |                                                |                        |                        | 0.4                    |                       |                       | V             |
| High (V INH )                        |                                                |                        |                        |                        |                       |                       | V             |
|                                      |                                                | 2.0                    |                        |                        |                       |                       |               |
| High (V OH )                         |                                                | 33VDD - 0.4            |                        |                        |                       |                       | V             |
| Low (V OL )                          |                                                |                        |                        | 0.4                    |                       |                       | V             |

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

## Data Sheet

|                                                                            |                                                                                                                                                         | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =115°Cto125°C 1   |            |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------|------------------------|-----------------------|------------|
| Parameter                                                                  | Test Conditions/Comments                                                                                                                                | Min                    | Typ                    | Max                    | Min Typ Max           | Unit       |
| DIGITAL INPUTS 1                                                           | All digital inputs except RESET,SWDIO,and SWCLK                                                                                                         |                        |                        |                        |                       |            |
| Input Current (Leakage Current)                                            |                                                                                                                                                         |                        |                        |                        |                       |            |
| Logic 1                                                                    | V INH = 3.3 V                                                                                                                                           | -10                    | ±1                     | +10                    |                       | µA         |
| Logic 0                                                                    | V INL = 0 V                                                                                                                                             | -10                    | ±1                     | +10                    |                       | µA         |
| Input Capacitance                                                          |                                                                                                                                                         |                        | 10                     |                        |                       | pF         |
| ON-CHIP OSCILLATORS                                                        |                                                                                                                                                         |                        |                        |                        |                       |            |
| Low Frequency Oscillator                                                   |                                                                                                                                                         |                        | 32,768                 |                        |                       | Hz         |
| Accuracy                                                                   |                                                                                                                                                         |                        | ±5                     |                        |                       | %          |
|                                                                            | After a calibration from highfrequency oscillator                                                                                                       | -6                     |                        | +6                     |                       | %          |
| High Frequency                                                             |                                                                                                                                                         |                        | 16.384                 |                        |                       | MHz        |
| Oscillator                                                                 |                                                                                                                                                         |                        |                        |                        |                       |            |
| Accuracy                                                                   |                                                                                                                                                         |                        |                        |                        |                       |            |
| LINCAL 1, 23                                                               |                                                                                                                                                         | -0.7                   | ±0.5                   | +0.75                  |                       | %          |
| High Precision Mode                                                        |                                                                                                                                                         | -1                     |                        | +1                     |                       | %          |
| Low Precision Mode                                                         |                                                                                                                                                         | -3                     |                        | +3                     |                       | %          |
| PROCESSOR START-UP TIME 1                                                  |                                                                                                                                                         |                        |                        |                        |                       |            |
| At Power-On                                                                | Includes kernel power-on execution time, VDDdrops to <0.8 V                                                                                             |                        | 18                     |                        |                       | ms         |
| Brownout                                                                   | VDDdrops below POR voltage but not below 0.8 V                                                                                                          |                        | 1.15                   |                        |                       | ms         |
| After Reset Event                                                          | Includes kernel power-on execution time                                                                                                                 |                        | 1.25                   |                        |                       | ms         |
| Wake-Up from LIN                                                           |                                                                                                                                                         |                        | 0.15                   |                        |                       | ms         |
| LIN INPUT/OUTPUT                                                           |                                                                                                                                                         |                        |                        |                        |                       |            |
| Baud Rate                                                                  |                                                                                                                                                         | 1000                   |                        | 20,000                 |                       | Bits/sec V |
| VDD                                                                        | Supply voltage range for which the LIN interface is functional                                                                                          | 7                      | 38                     | 18                     |                       |            |
| LIN Comparator ResponseTime                                                |                                                                                                                                                         |                        |                        | 90                     |                       | µs         |
| LIN DC PARAMETERS                                                          |                                                                                                                                                         |                        |                        |                        |                       |            |
| Current Limit for Driver whenLIN Bus is in Dominant State (I LIN_DOM_MAX ) | VBAT = VBAT (maximum)                                                                                                                                   | 40                     |                        | 200                    |                       | mA         |
| Driver Off (I LIN_PAS_REC ) 1                                              | 7.0 V < voltage of LIN bus (V BUS )<18V,VDD = input leakage voltage (V LIN ) - 0.7 V                                                                    |                        |                        | 20                     |                       | µA         |
| Input Leakage Current at Receiver (I LIN_PAS_DOM ) 1                       | V LIN = 0 V, VBAT = 12 V, driver off                                                                                                                    | -1                     |                        |                        |                       | mA         |
| Control Unit Disconnected from Ground (I ) 1, 24                           | Ground=VDD,0V<V LIN <18V, VBAT=12V                                                                                                                      | -1                     |                        | +1                     |                       | mA         |
| LIN_NO_GND VBAT Disconnected (I BUS_NO_BAT ) 1                             | VDD=ground, 0 V < V BUS < 18 V                                                                                                                          |                        |                        | 30                     |                       | µA         |
| LIN Receiver 1                                                             | VDD>7.0V                                                                                                                                                |                        |                        | 0.4                    |                       | V          |
| Dominant State (V LIN_DOM )                                                | VDD>7.0V                                                                                                                                                |                        |                        | × VDD                  |                       |            |
| LIN Receiver Recessive State (V LIN_REC ) 1                                |                                                                                                                                                         | 0.6 × VDD              |                        |                        |                       | V          |
| LIN Receiver Threshold Center (V LIN_CNT ) 1                               | V LIN_CNT = (receiver threshold of recessive to dominant bus edge (V TH_DOM ) + receiver threshold of dominant to recessive bus edge (V ))/2, VDD>7.0 V | 0.475× VDD             | 0.5 × VDD              | 0.525 × VDD            |                       | V          |

## Data Sheet

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

|                                                             |                                                                                                                                                                                                                                                                                                     | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =115°Cto125°C 1 Max   | T A =115°Cto125°C 1 Max   | T A =115°Cto125°C 1 Max   |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------|------------------------|---------------------------|---------------------------|---------------------------|
| Parameter                                                   | Test Conditions/Comments                                                                                                                                                                                                                                                                            | Min                    | Typ                    | Max                    | Min                       | Typ                       | Unit                      |
| LIN Receiver Threshold Hysteresis (V HYS ) 1                | V HYS = V TH_REC - V TH_DOM                                                                                                                                                                                                                                                                         |                        |                        | 0.175 × VDD            |                           |                           | V                         |
| LIN Dominant Output Voltage with Supply                     | VDD=7.0 V                                                                                                                                                                                                                                                                                           |                        |                        |                        |                           |                           |                           |
| Voltage Low (V LIN_DOM_DRV_LOSUP ) 1 Load Resistance (R L ) |                                                                                                                                                                                                                                                                                                     |                        |                        | 1.2                    |                           |                           | V                         |
| R L = 1000Ω                                                 |                                                                                                                                                                                                                                                                                                     | 0.6                    |                        |                        |                           |                           | V                         |
| LIN Dominant Output Voltage with Supply Voltage High        | VDD=18V                                                                                                                                                                                                                                                                                             |                        |                        |                        |                           |                           |                           |
| (V LIN_DOM_DRV_HISUP ) 1                                    |                                                                                                                                                                                                                                                                                                     |                        |                        | 2                      |                           |                           | V                         |
| R L = 500Ω R L = 1000Ω                                      |                                                                                                                                                                                                                                                                                                     | 0.8                    |                        |                        |                           |                           | V                         |
| Recessive                                                   |                                                                                                                                                                                                                                                                                                     | 0.8×VDD                |                        |                        |                           |                           | V                         |
| LIN Output Voltage (V LIN_RECESSIVE ) 1 VBAT Shift 1,24     |                                                                                                                                                                                                                                                                                                     | 0                      |                        | 0.115×                 |                           |                           | V                         |
| Ground Shift 1,24                                           |                                                                                                                                                                                                                                                                                                     | 0                      |                        | VDD 0.115 × VDD        |                           |                           |                           |
|                                                             |                                                                                                                                                                                                                                                                                                     |                        |                        |                        |                           | 30                        | V                         |
| Slave Termination Resistance (R SLAVE )                     |                                                                                                                                                                                                                                                                                                     | 20                     | 30                     | 47                     |                           |                           | kΩ                        |
| Voltage Drop at the Serial Diode (V SERIAL_DIODE ) 1        |                                                                                                                                                                                                                                                                                                     | 0.4                    | 0.7                    | 1                      |                           |                           | V                         |
| LIN AC PARAMETERS 1                                         | Bus load conditions (bus capacitance (C BUS )&#124;&#124;bus resistance (R BUS )): 1nF&#124;&#124;1kΩor 6.8nF&#124;&#124;660Ωor10nF&#124;&#124;500Ω                                                                                                                                                 |                        |                        |                        |                           |                           |                           |
| Duty Cycle 1 (D1)                                           | Threshold recessivemaximum(TH REC(MAX) )= 0.744 × VBAT,thresholddominantmaximum (TH DOM(MAX) ) = 0.581 × VBAT, supply voltage at transceiver (V SUP ) = 7.0 V to 18 V, time of one bit on the LIN bus (t BIT ) = 50 µs, D1 = minimum time for a bus recessive signal (t BUS_REC(MIN) )/(2 × t BIT ) | 0.396                  |                        |                        |                           |                           |                           |
| Duty Cycle 2 (D2)                                           | Threshold recessiveminimum(TH REC(MIN) )= 0.284 × VBAT,thresholddominantminimum (TH DOM(MIN) ) = 0.422 × VBAT, V SUP = 7.0 V to 18 V, t BIT = 50 µs, D2 = maximumtimefora bus recessive signal (t )/(2 × t )                                                                                        |                        |                        | 0.581                  |                           |                           |                           |
| Duty Cycle 3 (D3) 24                                        | TH REC(MAX) = 0.778 × VBAT,TH DOM(MAX) =0.616× VBAT, VDD=7.0 V to 18 V, t BIT = 96 µs, D3 = t BUS_REC(MIN) /(2 × t BIT )                                                                                                                                                                            | 0.417                  |                        |                        |                           |                           |                           |
| Duty Cycle 4 (D4) 24                                        | TH REC(MIN) = 0.389 × VBAT, TH DOM(MIN) = 0.251 × VBAT, VDD=7.0 V to 18 V, t BIT = 96 µs, D4 = t BUS_REC(MAX) /(2 × t BIT )                                                                                                                                                                         |                        |                        | 0.590                  |                           |                           |                           |
| Propagation Delay of Receiver (t RX_PD ) 24                 |                                                                                                                                                                                                                                                                                                     |                        |                        | 6                      |                           |                           | µs                        |
| Symmetry of Receiver Propagation Delay Rising Edge (t ) 24  | With respect to falling edge (t RX_SYM = propagation delay rising edge (t RX_PDR ) - propagation delay falling edge (t RX_PDF ))                                                                                                                                                                    | -2                     |                        | +2                     |                           |                           | µs                        |
| V HYS 1                                                     | V HYS = V TH_REC - V TH_DOM                                                                                                                                                                                                                                                                         |                        |                        | 0.175 × VDD            |                           |                           | V                         |
| V LIN_DOM_DRV_LOSUP 1                                       | VDD=7.0 V                                                                                                                                                                                                                                                                                           |                        |                        |                        |                           |                           |                           |

## [ADuCM300](https://www.analog.com/ADuCM300?doc=ADuCM300.pdf)

|                                                  |                                                                                                                                                                                                  | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =-40°C to +115°C   | T A =115°Cto125°C 1   | T A =115°Cto125°C 1   | T A =115°Cto125°C 1   |      |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|------------------------|------------------------|-----------------------|-----------------------|-----------------------|------|
| Parameter                                        | Test Conditions/Comments                                                                                                                                                                         | Min                    | Typ                    | Max                    | Min                   | Typ                   | Max                   | Unit |
| POWER CONSUMPTION                                |                                                                                                                                                                                                  |                        |                        |                        |                       |                       |                       |      |
| Supply Current (I DD ) Processor, Normal Mode 25 | Clock Divider 0(CD0) (peripheral clock (PCLK) = 16 MHz), 16 MHz, 1%mode, ADCs off, reference buffer off, executing code from program flash                                                       |                        | 8                      | 17                     |                       |                       |                       | mA   |
|                                                  | Clock Divider1(CD1)(PCLK=8MHz),16MHz, 1%mode,ADCsoff, reference buffer off, executing code from program flash                                                                                    |                        | 6                      |                        |                       |                       |                       | mA   |
|                                                  | CD0 (PCLK = 16 MHz), 16 MHz, 1% mode, ADCs on, reference buffer on, executing code from program flash                                                                                            |                        | 9.5                    | 18.5                   |                       |                       |                       | mA   |
| I DD Processor Powered Down                      | Precision oscillator off, ADC off, external LIN master pull-up resistor present, measured with wake-up and watchdog timers clocked from low power oscillator, maximum value at 105°C, andVDD=18V |                        | 60                     | 100                    | 120                   |                       |                       | µA   |
|                                                  | Precision oscillator off, ADC off, external LIN master pull-up resistor present, measured with wake-up and watchdog timers clocked from low power oscillator, maximum value at 125°C, andVDD=18V |                        |                        |                        |                       |                       | 126                   | µA   |
| I DD LIN                                         |                                                                                                                                                                                                  |                        | 500                    |                        |                       |                       |                       | µA   |
| I DD Primary ADC                                 | Gain = 4, 8, or 16                                                                                                                                                                               |                        | 700                    |                        |                       |                       |                       | µA   |
|                                                  | Gain = 32 or 64                                                                                                                                                                                  |                        | 800                    |                        |                       |                       |                       | µA   |
|                                                  | Low power mode, gain = 64                                                                                                                                                                        |                        | 350                    |                        |                       |                       |                       | µA   |
| I DD Auxiliary ADC (AIN5)                        |                                                                                                                                                                                                  |                        | 550                    |                        |                       |                       |                       | µA   |
| I DD Internal Reference (1.2 V)                  |                                                                                                                                                                                                  |                        | 150                    |                        |                       |                       |                       | µA   |
| I DD HighFrequency Oscillator                    | Reductionfrom1%to3%mode                                                                                                                                                                          |                        | 50                     |                        |                       |                       |                       | µA   |

- 8 The gain drift is included in the total gain error. This typical specification is an indicator of the gain error due to the temperature drift in the ADC. This typical value is the mean of the temperature drift characterization data distribution.

9 Voltage channel specifications include resistive attenuator input stage, unless otherwise stated.

10 Includes internal reference temperature drift.

11 Output noise is referred to the voltage attenuator input. For example, at an ADC data output frequency (fADC) = 1 kHz, the typical output noise at the ADC input is 7.5 µV and scaling by the attenuator (24) yields the input referred noise figures.

12 Valid after an initial self calibration.

13 It is possible to extend the ADC input voltage range by up to 10% by modifying the factory set value of the gain calibration register or by using system calibration. This approach can also be used to reduce the ADC input range (LSB size).

14 Valid for a differential input of &lt; 10 mV.

- 15  The absolute value of the voltage of AIN5 and GND\_SW must be 100 mV (minimum) for accurate operation of the temperature analog-to-digital converter (TADC).

16  Measured using box method.

- 17 The long-term stability specification is accelerated and noncumulative. The drift in subsequent 1000 hour periods is significantly lower than in the first 1000 hour period.
- 18  Based on results from high temperature operating life at 125°C for 1000 hours and electrical test performed at -40°C, +25°C and +115°C.

19 Valid after an initial self gain calibration.

20  Die temperature.

- 21 Endurance is qualified to 10,000 cycles, as per JEDEC Standard 22, Method A117, and measured at -40°C, +25 °C, and +115°C. Typical endurance at 25°C is 100,000 cycles.
- 22 Data retention lifetime equivalent at junction temperature (TJ) = 85°C, as per JEDEC Standard 22 Method A117. Data retention lifetime derates with junction temperature.

23  Measured with LIN communication active.

24  Not production tested but are supported by LIN compliance testing.

25  Typical additional supply current consumed during Flash/EE memory programming is 3 mA, and typical additional supply current consumed during erase cycles is 1 mA.

## ABSOLUTE MAXIMUM RATINGS

The ADuCM300 operates directly from a variable 3.6 V to 18 V voltage supply and is fully specified over the -40°C to +115°C temperature range, unless otherwise noted.

## Table 2.

| Parameter                                                                                                                                                                                                                                                                                | Rating                                                                                                                                 |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| AGND to DGNDtoVSS to IO_VSS AIN4 toAGND VDD to VSS LIN to IO_VSS Digital Input/OutputVoltagetoDGND ADC Inputs toAGND ESD (Human Body Model) Rating HBM-ADI0082 (Based onANSI/ESD STM5.1-2007) All Pins Except LIN and AIN4 LIN AIN4 IEC 61000-4-2 LIN and AIN4 Storage Temperature Range | -0.3V to +0.3V -22V to +40V -0.3V to +40V -18V to +40V -0.3VtoDVDD33+0.3V -0.3VtoAVDD18+0.3V ±2.0 kV ±6 kV ±4 kV ±8 kV -55°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

## NOTES

1. DNC = DO NOT CONNECT. THIS PIN IS INTERNALLY CONNECTED. THEREFORE, DO NOT EXTERNALLY CONNECT TO THIS PIN. 2. IT IS RECOMMENDED THAT THE EXPOSED PAD BE SOLDERED TO GROUND FOR THERMAL REASONS.

Figure 2. Pin Configuration

Table 3. Pin Function Descriptions

|   Pin No. | Mnemonic                       | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------|--------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RESET                          | Input        | Reset Input. Active low. This pin has an internal pull-up resistor connected to 33VDD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|         2 | SWDIO                          | Input/output | Arm Cortex-M3 Debug Data Input and Output Channel. At power-on, this output pin is disabled and pulled high via an internal pull-up resistor. Leave this pin disconnected when not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|         3 | SWCLK                          | Input        | Arm Cortex-M3 Debug Clock Input. This pin is an input only and has an internal pull-up resistor. Leave this pin disconnected when not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|         4 | GPIO0/ CS/LIN_RX               | Input/output | General-Purpose Input/Output 0 (GPIO0). By default, this pin is configured as an input. The pin has an internal 25 kΩ pull-up resistor connected to 33VDD. When not in use, leave this pin disconnected. Chip Select (CS). When configured, this pin operates the SPI chip select input. Local Interconnect Network Receiver (LIN_RX). This pin canbe configured as the receiver pin for LIN                                                                                                                                                                                                                                                                                                                                                                                                             |
|         5 | GPIO1/SCLK/ LIN_TX             | Input/output | General-Purpose Input/Output 1 (GPIO1). By default, this pin is configured as an input. In external mode, the kernel uses this pin. See the ADuCM300 Hardware Reference Manual for more information. The pin has an internal 25 kΩ pull-up resistor connected to 33VDD.When not in use, leave this pin disconnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|         6 | GPIO2/MISO                     | Input/output | General-Purpose Input/Output 2(GPIO2). By default, this pin is configured as aninput. The pinhasan internal 25 kΩ pull-up resistor connected to 33VDD. When not in use, leave this pin disconnected. Master Input/Slave Output (MISO).When configured, this pin also operates the SPI master input/slave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|         7 | GPIO3/IRQ0/ MOSI/LC_TX/ LIN_TX | Input/output | output. General-Purpose Input/Output 3 (GPIO3). By default, this pin is configured as an input. In external mode, the kernel uses this pin. See the ADuCM300 Hardware Reference Manual for more information. The pin has an internal 25 kΩ pull-up resistor connected to 33VDD.When not in use, leave this pin disconnected. Interrupt Request (IRQ0). This pin can be configured as External Interrupt Request 0. Master Output/Slave Input (MOSI). This pin can be configured as an SPI master output/slave input pin. LIN Conformance Transmitter (LC_TX). This pin can be connected to the LIN physical transmitter for LIN conformance testing. Local Interconnect Network Transmitter (LIN_TX). This pin can also be connected as the transmitter pin for LIN frames in external transceiver mode. |

16346-002

## Data Sheet

<!-- image -->

| Pin No.    | Mnemonic                         | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------|----------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8          | GPIO4/IRQ1/ LC_RX/ECLKIN/ LIN_RX | Input/output | General-Purpose Input/Output 4(GPIO4). By default, this pin is configured as aninput. In external mode, the kernel uses this pin. See the ADuCM300 Hardware Reference Manual for more information. The pin has an internal 25 kΩ pull-up resistor connected to 33VDD. When not in use, leave this pin disconnected. Interrupt Request (IRQ1). This pin can be configured as External Interrupt Request 1. LIN Conformance Receiver (LC_RX). This pin can be connected to the LIN physical receiver for LIN conformance testing. External Clock (ECLKIN). This pin can be configured as the external clock input. Local Interconnect Network Receiver (LIN_RX). This pin can be configured as the receiving pin for LIN |
| 9          | GND_SW                           | Input        | Switch to Internal Analog Ground Reference. This pin is the negative input for the external temperature channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 10         | AIN5                             | Input        | Single-Ended Voltage Input for the Primary ADC. This pin can also interface with an external temperature sensor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 11         | AIN2                             | Supply       | Auxiliary Positive Differential Input for the Primary ADC. Connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 12         | AIN0                             | Input        | Positive Differential Input for Primary ADC.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 13         | AIN1                             | Input        | Negative Differential Input for Primary ADC.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 14         | AIN3                             | Supply       | Auxiliary Negative Differential Input for the Primary ADC. Connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 15         | AIN6                             | Supply       | Auxiliary Positive Differential Input for the Auxiliary ADC. Connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 16         | AIN7                             | Supply       | Auxiliary Negative Differential Input for the Auxiliary ADC. Connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 17         | VREF                             | Supply       | Voltage Reference Pin. Connect this pin via a 0.47 µF capacitor to ground. This pin can also be usedto input anexternal voltage reference. This pincannot be used to supply anexternal circuit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 18         | AGND                             | Supply       | Ground Reference for On-Chip Precision Analog Circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 19         | AVDD18                           | Supply       | Supply from Analog LDO. Do not connect this pin to an external circuit. Using the 1.8Vor3.3V supply to power an external circuit can have POR, electromagnetic compatibility (EMC), and self heating implications. Device evaluation andtesting completed without anexternal load attached.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 20         | 33VDD                            | Supply       | 3.3 V Supply Input. Connect to Pin 21 (DVDD33). Do not connect this pin to an external circuit. Using the 1.8 V or 3.3 V supply to power an external circuit can have POR, EMC, andself heating implications. Device evaluation and testing completed without an external load attached.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 21         | DVDD33                           | Supply       | 3.3 V Regulated Supply Input. Connect to Pin 20 (33VDD). Do not connect this pin to anexternal circuit. Using the 1.8 V or 3.3 V supply to power an external circuit can have POR, EMC, and self heating implications. Device evaluationand testing completed without anexternal load attached.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 22         | DVDD18                           | Supply       | 1.8 V Supply. Do not connect this pin to an external circuit. Usingthe1.8Vor3.3V supply to power an external circuit can have POR, EMC, and self heating implications. Device evaluation and testing completed without an external load attached.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 23, 25, 31 | DGND                             | Supply       | Ground Reference for On-Chip Digital Circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 24         | DNC                              |              | DoNotConnect. This pin is internally connected. Therefore, donotexternallyconnect to this pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 26         | VDD                              | Supply       | Battery Power Supply for On-Chip Regulator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 27         | AIN4                             | Supply       | 12 V Supply Monitor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 28         | LIN                              | Input/output | LIN Physical Interface Input/Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 29         | IO_VSS                           | Supply       | Ground Reference for the LIN Pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 30         | VSS                              | Supply       | Ground Reference for the Internal Voltage Regulators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 32         | GPIO5/ LC_TX/LIN_TX              | Input/output | General-Purpose Input/Output 5 (GPIO5). By default, this pin is configured as aninput. In external mode, the kernel uses this pin. See the ADuCM300 Hardware Reference Manual for more information. The pin has an internal 25 kΩ pull-up resistor connected to 33VDD.When not in use, leave this pin disconnected. LIN Conformance Transmitter (LC_TX). This pin can beconnectedtotheLINphysical transmitter for LIN conformance testing. Local Interconnect Network Transmitter (LIN_TX). This pin can be configured as the transmitter pin for LIN frames in external transceiver mode.                                                                                                                             |

## TERMINOLOGY

## Conversion Rate

The conversion rate specifies the rate at which an output result is available from the ADC after the ADC has settled.

The Σ-Δ conversion techniques used on this device means that although the ADC front-end signal is oversampled at a relatively high sample rate, a subsequent digital filter is used to decimate the output, giving a valid 20-bit data conversion result at output rates from 4 Hz to 8 kHz.

Note that when the software switches from one input to another (on the same ADC), the digital filter must first be cleared and then allowed to average a new result. Depending on the configuration of the ADC and the type of filter, this averaging can require multiple conversion cycles.

## Integral Nonlinearity

INL is the maximum deviation of any code from a straight line passing through the endpoints of the transfer function. The endpoints of the transfer function are zero scale (0.5 LSB below the first code transition) and full scale (0.5 LSB above the last code transition, 111…110 to 111…111). The error is expressed as ppm of FSR.

Positive INL is defined as the deviation from a straight line through 0.5 LSB above midscale code transition to 0.5 LSB above the last code transition.

Negative INL is defined as the deviation from a straight line from 0.5 LSB below the first code transition to 0.5 LSB above the midscale code transition.

## No Missing Codes

No missing codes is a measure of the differential nonlinearity of the ADC. The error is expressed in bits and specifies the number of codes (ADC results) as 2 N bits, where N = no missing codes, guaranteed to occur through the full ADC input range.

## Offset Error

Offset error is the deviation of the first code transition ADC input voltage from the ideal first code transition.

## Offset Error Drift

Offset error drift is the variation in absolute offset error with respect to temperature. This error is expressed as LSB/°C or nV/°C.

## Gain Error

Gain error is a measure of the span error of the ADC. It is a measure of the difference between the measured and the ideal span between any two points in the transfer function.

## Output Noise

The output noise is specified as the standard deviation (or 1 × Σ) of ADC output codes distribution collected when the ADC input voltage is at a dc voltage. The output noise is expressed as µV rms or nV rms. The output, or rms noise, is used to calculate the effective resolution of the ADC as defined by the following equation:

## Effective Resolution = log2( Full-Scale Range/RMS Noise )

The peak-to-peak noise is defined as the deviation of codes that fall within 6.6 × Σ of the distribution of ADC output codes collected when the ADC input voltage is at dc. The peak-to-peak noise is therefore calculated as 6.6 × the rms noise.

The peak-to-peak noise can be used to calculate the ADC (noise free, code) resolution for which there is no code flicker within a 6.6 × Σ limit as defined by the following equation:

Noise Free Code Resolution = log2( Full-Scale Range / Peakto-Peak Noise )

## APPLICATIONS INFORMATION

## DESIGN GUIDELINES

Before starting design and layout of the ADuCM300 on a printed circuit board (PCB), it is recommended that the user become familiar with the following guidelines that describe any special circuit considerations and layout requirements needed.

## POWER AND GROUND RECOMMENDATIONS

Connect capacitors to the ADuCM300 as close to the pins of the device as possible, with minimal trace length.

Capacitors connected to the 33VDD pin, AVDD18 pin, and DVDD18 pin must have a low equivalent series resistance (ESR) rating.

All components must be rated according to the temperature range expected by the application.

## EXPOSED PAD THERMAL RECOMMENDATIONS

Solder the exposed pad on the underside of the ADuCM300 to ground to achieve the best electrical and thermal performance. Connect an exposed continuous copper plane on the PCB to the ADuCM300 exposed pad. To achieve the lowest possible resistive thermal path for heat dissipation to flow through the bottom of the PCB, ensure that the copper plane has several vias. These vias must be solder filled or plugged.

<!-- image -->

## GENERAL RECOMMENDATIONS

It is highly recommended to use the component values specified in Figure 3. The component values shown in Figure 3 were chosen based on the characterization tests and evaluated for optimum performance of the ADuCM300.

Configure the GPIOs as inputs with pull-up resistors enabled to obtain the lowest possible current consumption in hibernate mode.

Set the Arm Cortex-M3 core clock speed to the minimum required speed to meet the application requirements.

## RECOMMENDED EXTERNAL COMPONENTS SCHEMATIC

Figure 3 shows the recommended external components schematic for proper operation of the ADuCM300 using an external negative temperature coefficient (NTC) circuit as an example of a single-ended voltage input to the AIN5 pin.

Figure 3. Recommended External Components Schematic When Using an External NTC Sensor

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-VJJD-7

Figure 4. 32-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.95 mm Package Height (CP-32-15) Dimensions shown in millimeters

| Model 1, 2        | TemperatureRange   | ProgramFlash/ DataFlash/SRAM   | Package Description                              | PackageOption   |
|-------------------|--------------------|--------------------------------|--------------------------------------------------|-----------------|
| ADuCM300WBCPZ     | -40°C to +115°C    | 128 kB/4 kB/6 kB               | 32-Lead Lead Frame Chip Scale Package [LFCSP]    | CP-32-15        |
| EVAL-ADuCM300QSPZ |                    |                                | Socketed Evaluation Board with Switches and LEDs |                 |

PKG-003499/3916

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

2  W = Qualified for Automotive Applications.

## AUTOMOTIVE PRODUCTS

The ADuCM300W model is available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that this automotive model may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade product shown is available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for this model.

<!-- image -->

09-25-2017-D