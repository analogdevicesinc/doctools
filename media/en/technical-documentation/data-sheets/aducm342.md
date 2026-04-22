<!-- lastmod 2023-03-22 -->
<!-- image -->

## FEATURES

- High precision ADCs
- Dual-channel, simultaneous sampling
- IADC 20-bit Σ-Δ (minimizes range switching)
- VADC/TADC 20-bit Σ-Δ
- Programmable ADC conversion rate from 4 Hz to 8 kHz
- On-chip ±5 ppm/°C voltage reference
- Current channel
- Fully differential, buffered input
- Programmable-gain (from 4 to 512)
- ADC absolute input range: -200 mV to +300 mV
- Digital comparator with current accumulator feature
- Voltage channel
- Buffered, on-chip attenuator for 12 V battery input
- Temperature channel
- External and on-chip temperature sensor options
- Microcontroller
- ARM Cortex-M3 32-bit processor
- 16.384 MHz precision oscillator with 1% accuracy (high precision)
- Serial wire debug (SWD) port supporting code download and debug
- Automotive qualified integrated LIN transceiver
- LIN 2.2A-compatible target, 100 kbaud fast download option
- SAE J2602-compatible target
- Low electromagnetic emissions
- High electromagnetic immunity
- Memory
- 128 kB programmable Flash/EE memory, ECC
- 10 kB SRAM, ECC
- 4 kB data Flash/EE memory, ECC
- 10,000 cycle Flash/EE endurance
- 20 year Flash/EE retention
- In circuit download via SWD and LIN
- On-chip peripherals
- SPI
- GPIO port
- General-purpose timer
- Wake-up timer
- Watchdog timer
- On-chip, power-on reset
- Power
- Operates directly from 12 V battery supply

Rev. 0

DOCUMENT FEEDBACK

TECHNICAL SUPPORT

## Integrated, Precision Battery Sensor for Automotive Systems

- Power consumption, 8 mA typical (16 MHz) at T A = -40°C to +115°C
- Low power monitor mode
- Package and temperature range
- 32-lead, LFCSP, 6 mm x 6 mm package
- Fully specified for -40°C to +115°C operation, additional specifications for 115°C to 125°C
- AEC-Q100 qualified for automotive applications
- The ADuCM342WFS is developed for use in ISO 26262 applications for automotive safety integrity level capability C (ASIL C) supporting single-point fault metric (SPFM) 90% and latent fault metric (LFM) 60% at the IC component level.

## APPLICATIONS

- Battery sensing and management for automotive and light mobility vehicles
- Auxiliary battery monitoring in xEV
- Lead acid battery measurement for power supplies in industrial and medical domains

## TABLE OF CONTENTS

| Features................................................................   | 1   |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    | 1   |
| Functional Block Diagram......................................3            |     |
| General Description...............................................4        |     |
| Specifications........................................................     | 5   |
| Absolute Maximum Ratings.................................12                |     |
| Thermal Resistance.........................................                | 12  |
| Electrostatic Discharge (ESD) Ratings.............12                       |     |
| ESD Caution.....................................................12         |     |
| Pin Configuration and Function Descriptions......                          | 13  |

## REVISION HISTORY

2/2023-Revision 0: Initial Version

Terminology......................................................... 15

Applications Information...................................... 16

Design Guidelines............................................ 16

Power and Ground Recommendations............ 16

Exposed Pad Thermal Recommendations.......16

General Recommendations..............................16

Outline Dimensions............................................. 17

Ordering Guide.................................................17

Evaluation Boards............................................ 17

Automotive Products........................................ 17

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADuCM342 is a fully integrated, 8 kHz data acquisition system that incorporates dual, high performance, multichannel, Σ-Δ analogto-digital converters (ADCs), a 32-bit ARM ®  Cortex ™ -M3 processor, and flash. The ADuCM342 has 128 kB Flash/EE memory and a 4 kB data flash. Error correction code (ECC) is available on all flash and SRAM memories.

The ADuCM342 is a complete system solution for battery monitoring in 12 V automotive applications.

The ADuCM342 integrates all features required to precisely and intelligently monitor, process, and diagnose 12 V battery parameters including battery current, voltage, and temperature over a wide range of operating conditions.

Minimizing external system components, the device is powered directly from a 12 V battery. On-chip, low dropout (LDO) regulators generate the supply voltage for two integrated Σ-Δ ADCs. The ADCs precisely measure the battery current, voltage, and temperature to characterize the state of the health and the charge of the car battery.

The device operates from an on-chip, 16.384 MHz high frequency oscillator that supplies the system clock that is routed through a programmable clock divider, from which the core clock operating frequency is generated. The device also contains a 32.768 kHz oscillator for low power operation.

The analog subsystem consists of an ADC with a programmablegain amplifier (PGA) that allows the monitoring of various current and voltage ranges. The analog subsystem also includes an onchip precision reference.

The ADuCM342 integrates a range of on -chip peripherals that can be configured under core software control as required in the application. These peripherals include a serial port interface (SPI)

serial input/output communication controller, six general-purpose input/output (GPIO) pins, one general-purpose timer, a wake-up timer, and a watchdog timer. For more information, refer to the ADuCM342 hardware reference manual.

The ADuCM342 is designed to operate in battery-powered applications where low power operation is critical. The microcontroller core can be configured in normal operating mode, which results in an overall system current consumption of 18.5 mA when all peripherals are active. The device can also be configured in a number of low power operating modes under direct program control, consuming &lt;100 µA.

The ADuCM342 includes a local interconnect network (LIN) physical interface for single-wire, high voltage communications in automotive environments. The LIN transceiver is compliant to LIN 2.2A and society of automotive engineers (SAE) J2602-2.

The device operates from an external 3.6 V to 19 V (on V DD , Pin 26) voltage supply and is specified over the -40°C to +115°C temperature range, with additional typical specifications at +115°C to +125°C.

The information in this data sheet is relevant for silicon revision A60.

The ADuCM342 is developed for use in ISO 26262 applications for automotive safety integrity level capability C (ASIL C) supporting single-point fault metric (SPFM) 90% and latent fault metric (LFM) 60% at the IC component level.

The ADuCM342 is a low electromagnetic emissions and high electromagnetic immunity device.

Multifunction pin names may be referenced by the relevant function only.

## SPECIFICATIONS

VDD  = 3.6 V to 19 V, ARM Cortex-M3 processor frequency (f FCLK ) = 16.384 MHz, clock divider bits (CD) = 0, normal mode, and reference voltage (V REF ) = 1.2 V (internal), unless otherwise stated. Typical values noted reflect the approximate parameter mean at T A = 25°C under nominal conditions, unless otherwise stated. Safe operation of the device is not guaranteed outside the temperature range of T A = -40°C to +115°C or outside the specified V DD supply range. Parameters specified in the 115°C to 125°C temperature range of operation are functional within this range but with degraded performance.

Table 1. Electrical Specifications

|                                  |                                                                                                              | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   |       |     |               |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------|-----|---------------|
| Parameter                        | Test Conditions/Comments                                                                                     | Min                     | Typ                     | Max                     | Typ   | Max | Unit          |
| ADC SPECIFICATIONS               |                                                                                                              |                         |                         |                         |       |     |               |
| Conversion Rate 1                | ADC normal operating mode, chop off                                                                          | 4                       |                         | 8000                    |       |     | Hz            |
|                                  | ADC normal operating mode, chop on                                                                           | 4                       |                         | 2000                    |       |     | Hz            |
|                                  | ADC low power mode, chop on                                                                                  | 1                       |                         | 656                     |       |     | Hz            |
| Current Channel (IIN+/IIN- Only) |                                                                                                              |                         |                         |                         |       |     |               |
| No Missing Codes 1               | Valid for all ADC update rates and ADC modes                                                                 | 20                      |                         |                         |       |     | Bits          |
| Integral Nonlinearity (INL) 1, 2 | ADCFLT = 0x10001, 0x08101, 0x00007                                                                           | -200                    | ±10                     | +200                    | ±80   |     | ppm of FSR    |
| Offset Error 1, 3, 4             | Chop off, gain = 4, 8, or 16, external short, after user system calibration at 25°C, 1 LSB = (2.28/ gain) µV | -100                    | ±24                     | +100                    |       |     | LSBs          |
|                                  | Chop off, gain = 32 or 64, external short, after user system calibration at 25°C, 1 LSB = (2.28/ gain) µV    | -160                    | ±48                     | +160                    |       |     | LSBs          |
|                                  | Chop off, gain = 512, external short, after user system calibration at 25°C, 1 LSB = (2.28/gain) µV          | -1400                   | ±60                     | +1400                   |       |     | LSBs          |
|                                  | Chop on, external short, low power mode, gain = 64 or 512, processor powered down                            | -300                    | ±50                     | +250                    | ±250  |     | nV            |
|                                  | Chop on, external short, after user system calibration at 25°C, V DD = 19 V                                  | -0.65                   |                         | +0.65                   | ±0.1  |     | µV            |
| Offset Error Drift 1, 2, 5       | Chop off, gain of 4 to 64, normal mode                                                                       |                         | ±0.48                   |                         |       |     | LSB/°C        |
|                                  | Chop on                                                                                                      |                         | ±5                      |                         | ±5    |     | nV/°C         |
| Total Gain Error 1, 3, 4, 6      | Factory calibrated at a gain of 8, PGASCALE = 0b01, normal mode                                              | -0.5                    | ±0.1                    | +0.5                    | ±0.15 |     | %             |
|                                  | Low power mode                                                                                               | -1                      | ±0.2                    | +1                      | ±0.2  |     | %             |
| Gain Drift 1, 7                  |                                                                                                              |                         | ±3                      |                         | ±3    |     | ppm/°C        |
| PGA Gain Mismatch Error          |                                                                                                              |                         | ±0.1                    |                         | ±0.1  |     | %             |
| Output Noise                     | Gain = 64, ADCFLT = 0x08101                                                                                  |                         | 0.80                    | 1.3                     | 1.2   |     | µV rms        |
|                                  | Gain = 64, ADCFLT = 0x00007                                                                                  |                         | 0.75                    | 1.1                     |       |     | µV rms        |
|                                  | Gain = 32, ADCFLT = 0x08101                                                                                  |                         | 1.00                    | 1.5                     | 1.3   |     | µV rms        |
|                                  | Gain = 32, ADCFLT = 0x00007                                                                                  |                         | 0.80                    | 1.2                     |       |     | µV rms        |
|                                  | Gain = 16, ADCFLT = 0x08101                                                                                  |                         | 1.50                    | 2.6 1.9                 | 2.0   |     | µV rms µV rms |
|                                  | Gain = 16, ADCFLT = 0x00007                                                                                  |                         | 1.10                    | 4.1                     | 2.5   |     | µV rms        |
|                                  | Gain = 8, ADCFLT = 0x08101                                                                                   |                         | 2.10                    | 2.4                     |       |     |               |
|                                  | Gain = 8, ADCFLT = 0x00007                                                                                   |                         | 1.60                    | 5.1                     |       |     | µV rms        |
|                                  | Gain = 4, ADCFLT = 0x08101                                                                                   |                         | 3.40                    |                         | 4.0   |     | µV rms        |
|                                  | Gain = 4, ADCFLT = 0x00007                                                                                   |                         | 2.60                    | 3.9                     |       |     | µV rms        |
|                                  | Gain = 64, ADCFLT = 0x10001                                                                                  |                         | 1.55                    | 2.0                     | 1.85  |     | µV rms        |
|                                  | Gain = 32, ADCFLT = 0x10001                                                                                  |                         | 1.6                     | 2.3                     | 2.0   |     | µV rms        |
|                                  | Gain = 16, ADCFLT = 0x10001                                                                                  |                         | 1.8                     | 2.5                     | 2.1   |     | µV rms        |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

|                                       |                                                                                                                     | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   |
|---------------------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                             | Test Conditions/Comments                                                                                            | Min                     | Typ                     | Max                     | Min                        | Typ                        | Max                        | Unit                       |
|                                       | Gain = 8, ADCFLT = 0x10001                                                                                          |                         | 2.5                     | 3.5                     |                            | 3.0                        |                            | µV rms                     |
|                                       | Gain = 4, ADCFLT = 0x10001                                                                                          |                         | 4.3                     | 6.5                     |                            | 5.0                        |                            | µV rms                     |
|                                       | ADC low power mode, 221 Hz update rate, chop enabled, gain = 64                                                     |                         | 0.6                     | 0.9                     |                            | 0.8                        |                            | µV rms                     |
| Voltage Channel 1, 9 No Missing Codes |                                                                                                                     |                         |                         |                         |                            |                            |                            | Bits                       |
| INL                                   | Valid at all ADC update rates From 6 V to 18 V, ADCFLT = 0x10001, 0x08101, 0x00007                                  | 20 -350                 | ±10                     | +350                    |                            | ±150                       |                            | ppm of FSR                 |
| Offset Error 3, 4                     | Chop off, 1 LSB = 27.4 µV, after two-point calibration                                                              | -160                    | ±16                     | +160                    |                            |                            |                            | LSB                        |
|                                       | Chop on, after two-point calibration, offset measured using 0 V differential into voltage ADC (VADC) auxiliary pins | -16                     | ±4.8                    | +16                     |                            |                            |                            |                            |
| Offset Error Drift 5                  | Chop off                                                                                                            |                         | ±0.48                   |                         |                            | ±4.8 ±1                    |                            | LSB LSB/°C                 |
| Total Gain Error 3, 4, 6              | After user system calibration at 25°C, includes resistor mismatch                                                   | -0.25                   | ±0.06                   | +0.25                   |                            |                            |                            |                            |
|                                       |                                                                                                                     |                         | ±0.03                   |                         |                            |                            |                            |                            |
|                                       | T A = -25°C to +65°C                                                                                                | -0.15                   |                         |                         |                            | ±0.1                       |                            | % %                        |
| 7                                     | mismatch                                                                                                            |                         |                         | +0.15                   |                            |                            |                            |                            |
| Gain Drift                            | Includes resistor drift 10 Hz update rate, chop on                                                                  |                         | ±3                      |                         |                            | ±3                         |                            | ppm/°C µV rms              |
| Output Noise 10                       | ADCFLT = 0x00007 ADCFLT = 0x08101, from 6 V to 18 V                                                                 |                         | 50 180 280              | 270 350                 |                            | 300                        |                            | µV rms µV rms              |
|                                       |                                                                                                                     |                         |                         | 500                     |                            |                            |                            | rms                        |
|                                       | ADCFLT = 0x10001                                                                                                    |                         | 400                     |                         |                            | 470                        |                            | µV                         |
| Temperature Channel 1                 |                                                                                                                     |                         |                         |                         |                            |                            |                            |                            |
| No Missing Codes                      | Valid at all ADC update rates                                                                                       | 20                      |                         |                         |                            |                            |                            | Bits                       |
| INL                                   | ADCFLT = 0x10001, 0x08101, 0x00007                                                                                  | -60                     | ±10                     | +60                     |                            | ±15                        |                            | ppm of FSR                 |
| Offset Error 3, 11                    | Chop off, 1 LSB = 1.14 μV (unipolar mode), after two-point calibration                                              | -160                    | ±48                     | +160                    |                            |                            |                            | LSB                        |
| Offset Error 3                        | Chop on                                                                                                             | -80                     | ±16                     | +80                     |                            | ±16                        |                            | LSB                        |
| Offset Error Drift                    | Chop off                                                                                                            |                         | ±0.48                   |                         |                            | ±0.48                      |                            | LSB/°C                     |
| Total Gain Error 3, 11                |                                                                                                                     | -0.25                   | ±0.06                   | +0.25                   |                            | ±0.10                      |                            | %                          |
| Gain Drift 7                          |                                                                                                                     |                         | 3                       |                         |                            | 3                          |                            | ppm/°C                     |
| Output Noise                          | 1 kHz update rate, ADCFLT = 0x00007                                                                                 |                         | 7.5                     | 11.25                   |                            | 10                         |                            | µV rms                     |
| ADC SPECIFICATIONS, ANALOG INPUT      | PGASCALE, Bits[11:10] = 0x3                                                                                         |                         |                         |                         |                            |                            |                            |                            |
| Current Channel 1                     |                                                                                                                     |                         |                         |                         |                            |                            |                            |                            |
| Absolute Input Voltage                | Applies to both IIN+ and IIN-                                                                                       | -200                    |                         | +300                    |                            |                            |                            | mV                         |
| Range Differential Input Voltage      |                                                                                                                     |                         |                         |                         |                            |                            |                            | V                          |
| Range 12 13                           | Range = V REF /gain, limited by absolute input voltage range                                                        |                         | ±1.2/gain               |                         |                            |                            |                            |                            |
| Input Leakage Current                 |                                                                                                                     | -3                      |                         | +3                      |                            | ±0.2                       |                            | nA                         |
| Input Offset Current 13               |                                                                                                                     |                         | 0.2                     | 0.6                     |                            | 0.4                        |                            | nA                         |
| Voltage Channel                       |                                                                                                                     |                         |                         |                         |                            |                            |                            |                            |
| Absolute Input Voltage Range 1        | Voltage ADC specifications are valid in this range                                                                  | 6                       |                         | 19                      |                            |                            |                            | V                          |
| Input Voltage Range 1                 |                                                                                                                     |                         | 0 to 28.8               |                         |                            |                            |                            | V                          |
| V BAT Input Current                   | V BAT = 18 V                                                                                                        | 5                       | 9                       | 13                      |                            | 11                         |                            | µA                         |
| Temperature Channel                   | V REF 14 = AVDD18 and GND_SW                                                                                        |                         |                         |                         |                            |                            |                            |                            |
| Absolute Input Voltage Range 1, 15    |                                                                                                                     | 100                     |                         | 1500                    |                            |                            |                            | mV                         |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

|                                        |                                                          | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   |
|----------------------------------------|----------------------------------------------------------|-------------------------|-------------------------|-------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                              | Test Conditions/Comments                                 | Min                     | Typ                     | Max                     | Min Typ                    | Max                        | Unit                       |
| Input Voltage Range 1 1                |                                                          |                         | 0 to 1.4                |                         |                            |                            | V                          |
| VTEMP Input Current                    |                                                          |                         | 2.5                     | 10                      | 3.5                        |                            | nA                         |
| VOLTAGE REFERENCE                      |                                                          |                         |                         |                         |                            |                            |                            |
| Internal Reference                     |                                                          |                         | 1.2                     |                         | 1.2                        |                            | V                          |
| Power-Up Time 1                        |                                                          |                         | 0.5                     |                         | 0.5                        |                            | ms                         |
| Initial Accuracy 1                     | Measured at T A = 25°C                                   | -0.15                   |                         | +0.15                   |                            |                            | %                          |
| Temperature Coefficient 1, 16          |                                                          | -20                     | ±5                      | +20                     | ±8                         |                            | ppm/°C                     |
| Long-Term Stability 17                 |                                                          |                         | 100                     |                         |                            |                            | ppm/1000 Hr                |
| RESISTIVE ATTENUATOR                   |                                                          |                         |                         |                         |                            |                            |                            |
| Divider Ratio                          |                                                          |                         | 24                      |                         |                            |                            |                            |
| Resistor Mismatch Drift                | Implicit in the voltage channel gain error specification |                         | ±3                      |                         |                            |                            | ppm/°C                     |
| ADC GROUND SWITCH Resistor to Ground   |                                                          |                         |                         |                         |                            |                            |                            |
| 1,                                     |                                                          | 45                      | 60                      | 75                      |                            |                            | kΩ                         |
| TEMPERATURE SENSOR 18                  | Processor in hibernate mode, ADCFLT = chop on            | -3.5                    | ±1                      | +3.5                    | ±1                         |                            | °C                         |
| Accuracy                               | T A = 115°C to 125°C +115°C                              | -3                      | ±1                      | +3                      |                            |                            | °C                         |
|                                        | T A = -40°C to                                           |                         |                         |                         |                            |                            |                            |
|                                        | T A = -25°C to +85°C                                     | -2.5                    | ±0.5                    | +2.5                    |                            |                            | °C                         |
|                                        | T A = -10°C to +55°C                                     | -2                      | ±0.5                    | +2                      |                            |                            | °C                         |
| ADC DIAGNOSTICS 1 2,                   |                                                          |                         |                         |                         |                            |                            |                            |
| AVDD18/136 Accuracy 19                 | SM101                                                    | 12                      |                         | 14                      | 13                         |                            | mV                         |
| Current Channel                        |                                                          |                         |                         |                         |                            |                            |                            |
| Diagnostic Current                     |                                                          | 35                      | 50                      | 65                      |                            |                            | µA                         |
| Diagnostic Current Matching            |                                                          | -5                      | ±0.5                    | +5                      |                            |                            | µA                         |
| Internal Electrostatic Discharge (ESD) |                                                          | -120                    |                         | +120                    |                            |                            | Ω                          |
| Resistor Matching                      |                                                          |                         |                         |                         |                            |                            |                            |
| Voltage Channel                        |                                                          |                         |                         |                         |                            |                            |                            |
| Input Test Voltage (V )                | SM91-VBE                                                 | 525                     | 700                     | 875                     |                            |                            | mV                         |
| BE Voltage Attenuator Current          | Differential voltage increase on the attenuator          | 2.4                     |                         | 3.2                     | 2.8                        |                            | V                          |
| Source Accuracy                        | when current is on                                       |                         |                         |                         |                            |                            |                            |
| Diagnostic Attenuator Divider Ratio    |                                                          |                         | 48                      |                         |                            |                            |                            |
| RESET (POR) 1                          |                                                          |                         |                         |                         |                            |                            |                            |
| POWER-ON                               | Refers to voltage at the V DD pin                        |                         |                         |                         |                            |                            |                            |
| POR Trip Level                         | SM8                                                      | 2.9                     | 3.1                     | 3.4                     | 3.3                        |                            | V                          |
| POR Hysteresis                         |                                                          |                         | 0.1                     |                         |                            |                            | V                          |
| LOW VOLTAGE FLAG                       |                                                          |                         |                         |                         |                            |                            |                            |
| Low Voltage Flag Level                 | Refers to voltage at the V DD pin                        | 2.6                     | 2.75                    | 3.00                    |                            |                            | V                          |
| WATCHDOG TIMER                         |                                                          |                         |                         |                         |                            |                            |                            |
| Shortest Timeout Period                | 32,768 Hz clock with a prescaler of 1                    |                         | 122                     |                         | 122                        |                            | µs                         |
| Longest Timeout Period                 | 32,768 Hz clock with a prescaler of 4096                 |                         | 8192                    |                         | 8192                       |                            | Sec                        |
| SRAM SIZE                              |                                                          |                         | 10                      |                         |                            |                            | kB                         |
| FLASH/EE MEMORY                        |                                                          |                         |                         |                         |                            |                            |                            |
| Program Flash Size                     |                                                          |                         | 128                     |                         |                            |                            | kB                         |
| Data Flash Size                        |                                                          |                         | 4                       |                         |                            |                            |                            |
| 20                                     |                                                          |                         |                         |                         |                            |                            | kB                         |
| Endurance                              |                                                          | 10,000                  |                         |                         |                            |                            | Cycles                     |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

|                                                            |                                                                                           | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                                                  | Test Conditions/Comments                                                                  | Min                     | Typ                     | Max                     | Min                        | Typ                        | Max                        | Unit                       |
| Data Retention 21                                          |                                                                                           | 20                      |                         |                         |                            |                            |                            | Years                      |
| LOGIC INPUTS 1                                             |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| Input Voltage Low (V INL )                                 |                                                                                           |                         |                         | 0.4                     |                            |                            |                            | V                          |
| High (V INH )                                              |                                                                                           | 2.0                     |                         |                         |                            |                            |                            | V                          |
| LOGIC OUTPUTS 1 Output Voltage                             | All logic outputs measured with ±1 mA load                                                |                         |                         |                         |                            |                            |                            | V                          |
| High (V OH )                                               |                                                                                           | 33V DD - 0.4            |                         |                         |                            |                            |                            | V                          |
| Low (V OL )                                                |                                                                                           |                         |                         | 0.4                     |                            |                            |                            |                            |
| DIGITAL INPUTS 1                                           | All digital inputs except RESET, SWDIO, and SWCLK                                         |                         |                         |                         |                            |                            |                            |                            |
| Logic 1 Input Current                                      | V INH = 3.3 V                                                                             | -10                     | ±1                      | +10                     |                            |                            |                            | µA                         |
| (Leakage Current) Logic 0 Input Current (Leakage Current)  | V INL = 0 V                                                                               | -10                     | ±1                      | +10                     |                            |                            |                            | µA                         |
| Input Capacitance                                          |                                                                                           |                         | 10                      |                         |                            |                            |                            | pF                         |
| ON-CHIP OSCILLATORS                                        |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| Low Frequency Oscillator                                   |                                                                                           |                         | 32,768                  |                         |                            |                            |                            | Hz                         |
| Accuracy                                                   |                                                                                           | -30                     | ±5                      | +30                     |                            |                            |                            | %                          |
|                                                            | After a calibration from high frequency oscillator                                        | -6                      |                         | +6                      |                            |                            |                            | %                          |
| High Frequency Oscillator                                  |                                                                                           | -0.75                   | 16.384                  |                         |                            |                            |                            | MHz                        |
| Accuracy (Calibration Function) 1, 22                      |                                                                                           |                         | ±0.5                    | +0.75                   |                            |                            |                            | %                          |
| High Precision Mode                                        |                                                                                           | -1                      |                         | +1                      |                            |                            |                            | %                          |
| Low Precision Mode                                         |                                                                                           | -3                      |                         | +3                      |                            |                            |                            | %                          |
| PROCESSOR START-UP 1                                       |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| At Power-On                                                | Includes kernel power-on execution time, V DD drops to <0.8 V                             |                         | 18                      |                         |                            |                            |                            | ms                         |
| Brownout                                                   | V DD drops below power-on reset voltage but not below 0.8 V                               |                         | 1.15                    |                         |                            |                            |                            | ms                         |
| After Reset Event                                          | Includes kernel power-on execution time                                                   |                         | 1.25                    |                         |                            |                            |                            | ms                         |
| Wake-Up from LIN                                           |                                                                                           |                         | 0.15                    |                         |                            |                            |                            | ms                         |
| LIN INPUT/OUTPUT 1                                         |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| GENERAL                                                    |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| Baud Rate                                                  |                                                                                           | 1000                    |                         | 20,000                  |                            |                            |                            | Bits/sec                   |
| V DD                                                       | Supply voltage range for which the LIN interface is functional                            | 6                       |                         | 19                      |                            |                            |                            | V                          |
| LIN Comparator Response Time                               |                                                                                           |                         | 38                      | 90                      |                            |                            |                            | µs                         |
| LIN DC PARAMETERS                                          |                                                                                           |                         |                         |                         |                            |                            |                            |                            |
| Current Limit for Driver when LIN Bus is in Dominant State | V BUS = V BAT (maximum)                                                                   | 40                      |                         | 200                     |                            |                            |                            | mA                         |
| (I LIN_DOM_MAX ) Driver Off (I LIN_PAS_REC ) 1             | 6.0 V < voltage of LIN bus (V BUS ) < 19 V, V DD = input leakage voltage (V LIN ) - 0.7 V |                         |                         | 20                      |                            |                            |                            | µA                         |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

|                                                              |                                                                                                                                                                                                                                   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                                                    | Test Conditions/Comments                                                                                                                                                                                                          | Min                     | Typ                     | Max                     | Min                        | Typ                        | Max                        | Unit                       |
| Input Leakage Current at Receiver (I LIN_PAS_DOM ) 1         | V LIN = 0 V, V BAT = 12 V, driver off                                                                                                                                                                                             | -1                      |                         |                         |                            |                            |                            | mA                         |
| Control Unit Disconnected from Ground (I LIN_NO_GND ) 1, 23  | Ground = V DD , 0 V < V LIN < 19 V, V BAT = 12 V                                                                                                                                                                                  | -1                      |                         | +1                      |                            |                            |                            | mA                         |
| V BAT Disconnected                                           | V DD = ground, 0 V < V BUS < 19 V                                                                                                                                                                                                 |                         |                         | 30                      |                            |                            |                            | µA                         |
| (I BUS_NO_BAT ) 1 LIN Receiver Dominant State (V LIN_DOM ) 1 | V DD > 6.0 V                                                                                                                                                                                                                      |                         |                         | 0.4 × V DD              |                            |                            |                            | V                          |
| LIN Receiver Recessive State (V LIN_REC ) 1                  | V DD > 6.0 V                                                                                                                                                                                                                      | 0.6 × V DD              |                         |                         |                            |                            |                            | V                          |
| LIN Receiver Threshold Center (V LIN_CNT ) 1                 | V LIN_CNT = (receiver threshold of recessive to dominant bus edge (V TH_DOM ) + receiver threshold of dominant to recessive bus edge (V TH_REC ))/2, V DD > 6.0 V                                                                 | 0.475 × V DD            | 0.5 × VDD               | 0.525 × V DD            |                            |                            |                            | V                          |
| LIN Receiver Threshold Hysteresis (V HYS ) 1                 | V HYS = V TH_REC - V TH_DOM                                                                                                                                                                                                       |                         |                         | 0.175 × V DD            |                            |                            |                            | V                          |
| LIN Dominant Output Voltage                                  | V DD = 6.0 V                                                                                                                                                                                                                      |                         |                         |                         |                            |                            |                            |                            |
| (V LIN_DOM_DRV_LOSUP ) 1 R L = 500 Ω                         |                                                                                                                                                                                                                                   |                         |                         | 1.2                     |                            |                            |                            | V                          |
| R L = 1000 Ω                                                 |                                                                                                                                                                                                                                   | 0.6                     |                         |                         |                            |                            |                            | V                          |
| LIN Dominant Output Voltage (V 1                             | V DD = 19 V                                                                                                                                                                                                                       |                         |                         | 2                       |                            |                            |                            | V                          |
| LIN_DOM_DRV_HISUP ) R L = 500 Ω R L = 1000 Ω                 |                                                                                                                                                                                                                                   | 0.8 0.8 × V             |                         |                         |                            |                            |                            | V                          |
| LIN Recessive Output Voltage (V LIN_RECESSIVE ) 1            |                                                                                                                                                                                                                                   | DD                      |                         |                         |                            |                            |                            | V                          |
| V BAT Shift 1, 23 Ground Shift 1, 23                         |                                                                                                                                                                                                                                   | 0                       |                         | 0.115 × V DD 0.115 ×    |                            |                            |                            | V V                        |
| Target Termination Resistance (R TARGET )                    |                                                                                                                                                                                                                                   | 0                       |                         | V DD                    |                            | 30                         |                            |                            |
| Voltage Drop at the 1                                        |                                                                                                                                                                                                                                   | 20                      | 30                      | 47                      |                            |                            |                            | kΩ                         |
| Serial Diode (V SERIAL_DIODE )                               |                                                                                                                                                                                                                                   | 0.4                     | 0.7                     | 1                       |                            |                            |                            | V                          |
| LIN AC PARAMETERS 1                                          | Bus load conditions (C BUS &#124;&#124;R BUS ): 1 nF&#124;&#124;1 kΩ or 6.8 nF&#124;&#124;660 Ω or 10 nF&#124;&#124;500 Ω                                                                                                         |                         |                         |                         |                            |                            |                            |                            |
| Duty Cycle 1 (D1)                                            | Threshold recessive maximum (TH REC(MAX) ) = 0.744 × V BAT , threshold dominant maximum (TH DOM(MAX) ) = 0.581 × V BAT , supply voltage at transceiver (V SUP ) = 6.0 V to 19 V, t BIT = 50 µs, D1 = t BUS_REC(MIN) /(2 × t BIT ) | 0.396                   |                         |                         |                            |                            |                            |                            |
| Duty Cycle 2 (D2)                                            | Threshold recessive minimum (TH REC(MIN) ) = 0.284 × V BAT , threshold dominant minimum (TH DOM(MIN) ) = 0.422 × V BAT , V SUP = 6.0 V to 19 V, t = 50 µs, D2 = t /(2 × t )                                                       |                         |                         | 0.581                   |                            |                            |                            |                            |
| Duty Cycle 3 (D3) 23                                         | BIT BUS_REC(MAX) BIT TH REC(MAX) = 0.778 × V BAT , TH DOM(MAX) = 0.616 × V BAT , V DD = 6.0 V to 19 V, t BIT = 96 µs, D3 = t BUS_REC(MIN) /(2 × t BIT )                                                                           | 0.417                   |                         |                         |                            |                            |                            |                            |

## SPECIFICATIONS

Table 1. Electrical Specifications (Continued)

|                                                                   |                                                                                                                                                                                                               | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   | T A = +115°C to +125°C 1   |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| Parameter                                                         | Test Conditions/Comments                                                                                                                                                                                      | Min                     | Typ                     | Max                     | Min                        | Typ                        | Max                        | Unit                       |
| Duty Cycle 4 (D4) 23                                              | TH REC(MIN) = 0.389 × V BAT , TH DOM(MIN) = 0.251 × V BAT , V DD = 6.0 V to 19 V, t BIT = 96 µs, D4 = t BUS_REC(MAX) /(2 × t BIT )                                                                            |                         |                         | 0.590                   |                            |                            |                            |                            |
| Propagation Delay of Receiver (t RX_PD ) 23                       |                                                                                                                                                                                                               |                         |                         | 6                       |                            |                            |                            | µs                         |
| Symmetry of Receiver Propagation Delay Rising Edge (t RX_SYM ) 23 | With respect to falling edge (t RX_SYM = propagation delay rising edge (t RX_PDR ) - propagation delay falling edge (t RX_PDF ))                                                                              | -2                      |                         | +2                      |                            |                            |                            | µs                         |
| POWER REQUIREMENTS                                                |                                                                                                                                                                                                               |                         |                         |                         |                            |                            |                            |                            |
| Power Supply Voltages V DD (Pin 26)                               |                                                                                                                                                                                                               | 3.6                     |                         | 19                      |                            |                            |                            | V                          |
| DVDD33 (Pin 21)                                                   |                                                                                                                                                                                                               | 3.2                     | 3.35                    | 3.5                     |                            | 3.3                        |                            | V                          |
| AVDD18 (Pin 19)                                                   |                                                                                                                                                                                                               | 1.83                    | 1.88                    | 1.93                    |                            | 1.88                       |                            | V                          |
| DVDD18 (Pin 22)                                                   |                                                                                                                                                                                                               | 1.83                    | 1.88                    | 1.93                    |                            | 1.88                       |                            | V                          |
| POWER CONSUMPTION                                                 |                                                                                                                                                                                                               |                         |                         |                         |                            |                            |                            |                            |
| Supply Current (I DD ) Processor, Normal Mode 24                  | Clock divider setting 0 (CD0) (peripheral clock (PCLK) = 16 MHz), 16 MHz 1% mode, ADCs off, reference buffer off, executing code from program flash                                                           |                         | 8                       | 17                      | 9                          |                            |                            | mA                         |
|                                                                   | Clock divider setting 1 (CD1) (PCLK = 8 MHz), 16 MHz 1% mode, ADCs off, reference buffer off, executing code from program flash                                                                               |                         | 6                       |                         |                            | 7                          |                            | mA                         |
|                                                                   | CD0 (PCLK = 16 MHz), 16 MHz 1% mode, ADCs on, reference buffer on, executing code from program flash                                                                                                          |                         | 9.5                     | 18.5                    |                            | 10                         |                            | mA                         |
| I DD Processor, Powered Down                                      | Precision oscillator off, ADC off, external LIN controller pull-up resistor present, measured with wake-up, and watchdog timers clocked from low power oscillator, maximum value is at 105°C, and V DD = 18 V |                         | 55                      | 100                     |                            |                            |                            | µA                         |
| I DD LIN                                                          |                                                                                                                                                                                                               |                         | 500                     |                         |                            |                            |                            | µA                         |
| I DD Current Channel ADC (IADC)                                   | Gain = 4, 8, or 16                                                                                                                                                                                            |                         | 700                     |                         |                            |                            |                            | µA                         |
|                                                                   | Gain = 32 or 64                                                                                                                                                                                               |                         | 800                     |                         |                            |                            |                            | µA                         |
|                                                                   | Low power mode, gain = 64                                                                                                                                                                                     |                         | 350                     |                         |                            |                            |                            | µA                         |
| I DD ADC Temperature and Voltage Channel 1 (ADC1)                 |                                                                                                                                                                                                               |                         | 550                     |                         |                            |                            |                            | µA                         |
| I DD Internal Reference (1.2 V)                                   |                                                                                                                                                                                                               |                         | 150                     |                         |                            |                            |                            | µA                         |
| I DD High Frequency Oscillator                                    | Reduction from 1% to 3% mode                                                                                                                                                                                  |                         | 50                      |                         |                            |                            |                            | µA                         |

1 Guaranteed by design, but not production tested.

2 Valid for PGA current ADC gain settings of 4, 8, 16, 32, and 64.

3 These specifications include temperature drift.

4 A system calibration removes this error at a given temperature (and at a given gain for the current channel).

5 The offset error drift is included in the offset error. This typical specification is an indicator of the offset error because of temperature drift. This typical value is the mean of the temperature drift characterization data distribution.

6 Includes internal reference temperature drift.

## SPECIFICATIONS

- 7 The gain drift is included in the total gain error. This parameter is an indicator of the gain error because of the temperature drift in the ADC. The typical value of this parameter is the mean of the temperature drift characterization data distribution.
- 8 For data rates of 4 kHz and 8 kHz with a PGA gain = 32 or greater, allow 10 ms settling time after ADC Current Channel 0 (ADC0) wakes up from power-down mode.
- 9 Voltage channel specifications include resistive attenuator input stage, unless otherwise stated.
- 10 RMS noise is referred to the voltage attenuator input. For example, at an ADC data output frequency (f ADC ) = 1 kHz, the typical rms noise at the ADC input is 7.5 µV. Scaling by the attenuator (1:24) yields these inputs referred noise figures.
- 11 Valid after an initial self calibration.
- 12 The user can extend the ADC input range by up to 10% by modifying the factory set value of the gain calibration register or using system calibration. This approach can also be used to reduce the ADC input range (LSB size).
- 13 Valid for a differential input less than 10 mV.
- 14 The reference voltage, V REF , for the ADC is provided by the signal pair, AVDD18 and GND\_SW.
- 15 The absolute value of the voltage of VTEMP and GND\_SW must be 100 mV (minimum) for accurate operation of the temperature ADC (T ADC ).
- 16 Measured using the box method.
- 17 The long-term stability specification is accelerated and noncumulative. The drift in subsequent 1000 hour periods is significantly lower than in the first 1000 hour period.
- 18 Die temperature.
- 19 Valid after an initial self gain calibration.
- 20 Endurance is qualified to 10,000 cycles, as per JEDEC Standard 22 Method A117 and measured at -40°C, +25°C, and +115°C. Typical endurance at 25°C is 100,000 cycles.
- 21 Data retention lifetime equivalent at junction temperature (T J ) = 85°C, as per JEDEC Standard 22 Method A117. Data retention lifetime derates with junction temperature.
- 22 Measured with LIN communication active.
- 23 Not production tested but are supported by LIN compliance testing.
- 24 Typical additional supply current consumed during Flash/EE memory programming is 3 mA, and typical additional supply current consumed during erase cycles is 1 mA.

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

The ADuCM342 operates directly from the 12 V battery supply and is fully specified over the -40°C to +115°C temperature range, unless otherwise noted.

Table 2. Absolute Maximum Ratings

| Parameter                                | Rating                   |
|------------------------------------------|--------------------------|
| AGND to DGND to V SS to IO_V SS          | -0.3 V to +0.3 V         |
| V BAT to AGND                            | -22 V to +40 V           |
| V DD to V SS                             | -0.3 V to +40 V          |
| LIN to IO_V SS                           | -18 V to +40 V           |
| Digital Input and Output Voltage to DGND | -0.3 V to DVDD33 + 0.3 V |
| ADC Inputs to AGND                       | -0.3 V to AVDD18 + 0.3 V |
| Storage Temperature Range                | -55°C to +150°C          |
| Junction Temperature                     |                          |
| Transient                                | 150°C                    |
| Continuous                               | 130°C                    |
| Lead Temperature                         |                          |
| Soldering Reflow 1                       | 260°C                    |
| Lifetime 2                               |                          |
| Normal Mode                              |                          |
| At -40°C                                 | 480 Hours                |
| At 23°C                                  | 1600 Hours               |
| At 60°C                                  | 5200 Hours               |
| At 85°C                                  | 640 Hours                |
| At 105°C                                 | 80 Hours                 |
| Standby Mode                             |                          |
| At -40°C                                 | 12,648 Hours             |
| At 25°C                                  | 60,000 Hours             |
| At 50°C                                  | 50,000 Hours             |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θ JA is the natural convection junction-to-ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junctionto-case thermal resistance.

Table 3. Thermal Resistance

| Package Type 1   |   θ JA |   θ JC | Unit   |
|------------------|--------|--------|--------|
| CP-32-15         |     40 |     15 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

International Electrotechnical Commission (IEC) electromagnetic compatibility: Part 4-2 (IEC) per IEC 61000-4-2.

## ESD Ratings for ADuCM342

Table 4. ADuCM342, 32-Lead LFCSP

| ESD Model       | Withstand Threshold (V)   |
|-----------------|---------------------------|
| HBM (ADI0082) 1 |                           |
| LIN             | ±6000                     |
| V BAT           | ±4000                     |
| All Other Pins  | ±2000                     |
| IEC 61000-4-2   |                           |
| LIN and V BAT   | ±8000                     |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

Table 5. Pin Function Descriptions

|   Pin Number | Mnemonic                      | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------|-------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|            1 | RESET                         | I        | Reset Input. Active low. RESET has an internal pull-up resistor to 33VDD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|            2 | SWDIO                         | I/O      | ARM Cortex-M3 Processor Debug Data Input and Output. At power-on, this output is disabled and pulled high via an internal pull-up resistor. SWDIO can be left unconnected when not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|            3 | SWCLK                         | I        | ARM Cortex-M3 Processor Debug Clock Input. SWCLK is an input only pin and has an internal pull-up resistor. SWCLK can be left unconnected when not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|            4 | GPIO0/CS/LIN_RX               | I/O      | General-Purpose Input/Output 0 (GPIO0). By default, GPIO0/CS/LIN_RX is configured as an input. GPIO0/CS/ LIN_RX has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. Chip Select (CS). When configured, GPIO0/CS/LIN_RX also operates the SPI chip select input. Local Interconnect Network Receiver (LIN_RX). GPIO0/CS/LIN_RX can be configured as the receiver pin for LIN frames in external transceiver mode.                                                                                                                                                                                                                                                                                                                               |
|            5 | GPIO1/SCLK/LIN_TX             | I/O      | General-Purpose Input/Output 1 (GPIO1). By default, GPIO1/SCLK/LIN_TX is configured as an input. GPIO1/SCLK/ LIN_TX is used by the kernel in external mode. For more information, see the ADuCM342 hardware reference manual. GPIO1/SCLK/LIN_TX has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. Serial Clock Input (SCLK). When configured, GPIO1/SCLK/LIN_TX operates the SPI serial clock input.                                                                                                                                                                                                                                                                                                                                         |
|            6 | GPIO2/POCI                    | I/O      | General-Purpose Input/Output 2 (GPIO2). By default, GPIO2/POCI is configured as an input. GPIO2/POCI has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. Peripheral Output/Controller Input (POCI). When configured, GPIO2/POCI also operates the SPI peripheral output/ controller input.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|            7 | GPIO3/IRQ0/PICO/LC_TX/ LIN_TX | I/O      | General-Purpose Input/Output 3 (GPIO3). By default, GPIO3/IRQ0/PICO/LC_TX/LIN_TX is configured as an input. GPIO3/IRQ0/PICO/LC_TX/LIN_TX is used by the kernel in external mode. For more information, see the ADuCM342 hardware reference manual. GPIO3/IRQ0/PICO/LC_TX/LIN_TX has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. Interrupt Request (IRQ0). GPIO3/IRQ0/PICO/LC_TX/LIN_TX can also be configured as the External Interrupt Request 0. Peripheral Input/Controller Output (PICO). GPIO3/IRQ0/PICO/LC_TX/LIN_TX can be configured as an SPI peripheral input/controller output. LIN Conformance Transmitter (LC_TX). GPIO3/IRQ0/PICO/LC_TX/LIN_TX can be connected to the LIN physical transmitter for LIN conformance testing. |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 5. Pin Function Descriptions (Continued)

| Pin Number    | Mnemonic                        | Type 1      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------|---------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8             | GPIO4/IRQ1/LC_RX/ ECLKIN/LIN_RX | I/O         | transmitter pin for LIN frames in external transceiver mode. General-Purpose Input/Output 4 (GPIO4). By default, GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX is configured as an input. GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX is used by the kernel in external mode. For more information, see the ADuCM342 hardware reference manual. GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. Interrupt Request (IRQ1). GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX can be configured as the External Interrupt Request 1. LIN Conformance Receiver (LC_RX). GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX can be connected to the LIN physical receiver for LIN conformance testing. External Clock (ECLKIN). GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX can be configured as the external clock input. Local Interconnect Network Receiver (LIN_RX). GPIO4/IRQ1/LC_RX/ECLKIN/LIN_RX can be configured as the receiving pin for LIN frames in external transceiver mode. |
| 9             | GND_SW                          | I           | Switch to Internal Analog Ground Reference. GND_SW is the negative input for the external temperature channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 10            | VTEMP                           | I           | External Pin for Negative Temperature Coefficient/Positive Temperature Coefficient Temperature Measurement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 11            | IIN+_AUX                        | S           | Auxiliary Positive Differential Input Pin. If not used, connect IIN+_AUX to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 12            | IIN+                            | I           | Positive Differential Input for Current Channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 13            | IIN-                            | I           | Negative Differential Input for Current Channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 14            | IIN-_AUX                        | S           | Auxiliary Negative Differential Input Pin. If not used, connect IIN-_AUX to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 15            | VINP_AUX                        | S           | Auxiliary Input Voltage Positive Channel. If not used, connect VINP_AUX to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 16            | VINM_AUX                        | S           | Auxiliary Input Voltage Negative Channel. If not used, connect VINM_AUX to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 17            | VREF                            | S           | Voltage Reference Pin. Connect VREF via a 470 nF capacitor to ground. VREF can also be used to input an external voltage reference. VREF cannot be used to supply an external circuit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 18            | AGND                            | S           | Ground Reference for On-Chip Precision Analog Circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 19            | AVDD18                          | S           | Supply from Analog LDO. Do not connect AVDD18 to a low impedance external circuit. 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 20            | 33VDD                           | S           | 3.3 V Supply. Connect to DVDD33. Do not connect 33VDD to a low impedance external circuit 2 .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 21            | DVDD33                          | S           | 3.3 V Supply. Connect to 33VDD. Do not connect DVDD33 to a low impedance external circuit 2 .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 22            | DVDD18                          | S S         | 1.8 V Supply. Do not connect DVDD18 to a low impedance external circuit 2 .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 23, 25, 31 24 | DGND DNC                        | S           | Ground Reference for On-Chip Digital Circuits. Do Not Connect. Do not connect to this pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 26 27         | VDD VBAT                        | S           | Battery Power Supply for On-Chip Regulator. Battery Voltage Input to Resistor-Divider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 28            | LIN                             | I/O         | Local Interconnect Network Physical Interface Input/Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 29            | IO_VSS                          | S           | Ground Reference for LIN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 30            | VSS                             | S           | Ground Reference. VSS is the ground reference for the internal voltage regulators. Input/Output 5 (GPIO5). By default, GPIO5/LC_TX/LIN_TX is configured as an is checked by the kernel on every reset. For more information, see the                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 32            | GPIO5/LC_TX/LIN_TX              | I/O         | General-Purpose input. GPIO5/ LC_TX/LIN_TX ADuCM342 hardware reference manual. GPIO5/LC_TX/LIN_TX has an internal 25 kΩ pull-up resistor to 33VDD and can be left unconnected when not in use. LIN Conformance Transmitter (LC_TX). GPIO5/LC_TX/LIN_TX can be connected to the LIN physical transmitter for LIN conformance testing. Local Interconnect Network Transmitter (LIN_TX). GPIO5/LC_TX/LIN_TX can be configured as the transmitter pin for LIN frames in external transceiver mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|               | EPAD                            | Exposed Pad | It is recommended that the exposed pad be soldered to ground for thermal reasons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## TERMINOLOGY

## Conversion Rate

The conversion rate specifies the rate at which an output result is available from the ADC after the ADC has settled.

The Σ-Δ conversion techniques used on this device mean that, although the ADC front-end signal is oversampled at a relatively high sample rate, a subsequent digital filter is used to decimate the output. Use of a digital filter provides a valid 20 -bit data conversion result at output rates from 4 Hz to 8 kHz.

When software switches from one input to another on the same ADC, the digital filter must first be cleared and then allowed to average a new result. Depending on the configuration of the ADC and the type of filter, this averaging can require multiple conversion cycles.

## Integral Nonlinearity (INL)

INL is the maximum deviation of any code from a straight line passing through the endpoints of the transfer function. The endpoints of the transfer function are zero scale, which is a point ½ LSB below the first code transition, and full-scale, which is a point ½ LSB above the last code transition (111…110 to 111…111). The error is expressed as a percentage of the full scale.

Positive INL is the deviation from a straight line through ½ LSB above midscale code transition to ½ LSB above the last code transition.

Negative INL is the deviation from a straight line from a point ½ LSB below the first code transition to a point ½ LSB above the midscale code transition.

## No Missing Codes

No missing codes is a measure of the differential nonlinearity of the ADC. The error is expressed in bits and specifies the number of codes (ADC results) as 2 N  bits, where N equals no missing codes, guaranteed to occur through the full ADC input range.

## Offset Error

Offset error is the deviation of the first code transition ADC input voltage from the ideal first code transition.

## Offset Error Drift

Offset error drift is the variation in absolute offset error with respect to temperature. This error is expressed as LSB/°C or nV/°C.

## Gain Error

Gain error is a measure of the span error of the ADC. Gain error is a measure of the difference between the measured and the ideal span between any two points in the transfer function.

## Output Noise

The output noise is specified as the standard deviation (or 1 × Σ) of ADC output code distribution collected when the ADC input voltage is at a DC voltage. The output noise is expressed as µV rms or nV rms. The output, or rms noise, is used to calculate the effective resolution of the ADC, as defined by the following equation, measured in bits:

The peak-to-peak noise is defined as the deviation of codes that fall within 6.6 × Σ of the distribution of ADC output codes collected when the ADC input voltage is at DC. The peak-to-peak noise is therefore calculated as 6.6 × the rms noise.

<!-- formula-not-decoded -->

The peak-to-peak noise can be used to calculate the ADC noise free code resolution for which there is no code flicker within a 6.6 × Σ limit as defined by the following equation, measured in bits:

<!-- formula-not-decoded -->

## APPLICATIONS INFORMATION

## DESIGN GUIDELINES

Before starting design and layout of the ADuCM342 on a PCB, it is recommended that the designer become familiar with the following guidelines that describe any special circuit considerations and layout requirements needed.

## POWER AND GROUND RECOMMENDATIONS

Place capacitors that are connecting to the ADuCM342 as close to the pins of the device as possible, with minimal trace length.

Capacitors connected to the 33VDD pin, AVDD18 pin, and DVDD18 pin must have a low equivalent series resistance (ESR) rating.

All components must be rated accordingly to the temperature range expected by the application.

## EXPOSED PAD THERMAL RECOMMENDATIONS

The exposed pad on the underside of the ADuCM342 must be connected to ground to achieve the best electrical and thermal

Figure 3. External Components Recommended for Proper Operation

<!-- image -->

performance. It is recommended that the user connect an exposed continuous copper plane on the PCB to the ADuCM342 exposed pad, and that the copper plane have several vias to achieve the lowest possible resistive thermal path for heat dissipation to flow through the bottom of the PCB. It is recommended that these vias be solder filled or plugged.

## GENERAL RECOMMENDATIONS

It is highly recommended to use the schematic given with the component values shown in Figure 3. The component values shown in Figure 3 are chosen from the characterization tests and evaluated for optimum performance of the ADuCM342.

Configure the GPIOs as inputs with pull-up resistors enabled to obtain the lowest possible current consumption in shutdown mode.

Set the ARM Cortex-M3 processor clock speed to the minimum required to meet the application requirements.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1, 2, 3      | Temperature Range   | Package Description      | Packing Quantity   | Package Option   |
|--------------------|---------------------|--------------------------|--------------------|------------------|
| ADUCM342WFSBCPZ-RL | -40°C to +115°C     | LFCSP:LEADFRM CHIP SCALE | Reel, 2500         | CP-32-15         |

## EVALUATION BOARDS

## Table 6. Evaluation Boards

| Model 1          | Description                                      |
|------------------|--------------------------------------------------|
| EVAL-ADUCM342EBZ | Socketed Evaluation Board with Switches and LEDs |

## AUTOMOTIVE PRODUCTS

The ADuCM342 model is available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that this automotive model may have specifications that differ from the commercial model, therefore, designers must review the Specifications section of this data sheet carefully. Only the automotive grade product shown is available for use in automotive applications. Contact the local Analog Devices, Inc., account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for this model.

<!-- image -->

PKG-003499/3916

Figure 4. 32-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.95 mm Package Height (CP-32-15) Dimensions Shown in millimeters

<!-- image -->

Updated: February 21, 2023