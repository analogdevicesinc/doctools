<!-- lastmod 2020-05-08 -->
<!-- image -->

## Data Sheet

## FEATURES

High precision ADCs

Dual-channel, simultaneous sampling

IADC 20-bit Σ-∆ (minimizes range switching)

VADC/TADC 20-bit Σ-∆

Programmable ADC conversion rate from 4 Hz to 8 kHz On-chip ±5 ppm/°C voltage reference

Current channel

Fully differential, buffered input

Programmable gain (from 4 to 512)

ADC absolute input range: -200 mV to +300 mV

Digital comparator with current accumulator feature

Voltage channel

Buffered, on-chip attenuator for 12 V battery input

Temperature channel

External and on-chip temperature sensor options

Microcontroller

ARM Cortex-M3 32-bit processor

16.384 MHz precision oscillator with 1% accuracy (high precision)

Serial wire debug (SWD) port supporting code download and debug

Automotive qualified integrated LIN transceiver

LIN 2.2A-compatible slave, 100 kbaud fast download option SAE J2602-compatible slave

Low electromagnetic emissions

High electromagnetic immunity

## Integrated, Precision Battery Sensor for

## Automotive Systems

## ADuCM330WFS/ADuCM331WFS

## Memory

96 kB programmable Flash/EE memory (ADuCM330WFS), ECC

128 kB programmable Flash/EE memory (ADuCM331WFS), ECC

10 kB SRAM, ECC

4 kB data Flash/EE memory, ECC

10,000 cycle Flash/EE endurance

20 year Flash/EE retention

In circuit download via SWD and LIN

On-chip peripherals

SPI

GPIO port

General-purpose timer

Wake-up timer

Watchdog timer

On-chip, power-on reset

## Power

Operates directly from 12 V battery supply Power consumption, 8 mA typical (16 MHz) at TA = -40°C to +115°C

Low power monitor mode

Package and temperature range

6 mm × 6 mm, 32-lead LFCSP

Fully specified for -40°C to +115°C operation; additional

specifications for 115°C to 125°C

AEC-Q100 qualified for automotive applications

Developed for use in ISO 26262 applications for ASIL Capability B

## APPLICATIONS

Battery sensing and management for automotive and light mobility vehicles

Lead acid battery measurement for power supplies in industrial and medical domains

## ADuCM330WFS/ADuCM331WFS

| TABLE OF CONTENTS                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Features .............................................................................................. 1                                                    |
| Applications....................................................................................... 1                                                        |
| Revision History ............................................................................... 2                                                           |
| Functional Block Diagram .............................................................. 3                                                                    |
| General Description......................................................................... 4                                                               |
| Specifications..................................................................................... 5                                                        |
| Absolute Maximum Ratings..........................................................12                                                                         |
| Thermal Resistance ....................................................................12                                                                    |
| ESD Caution................................................................................12                                                                |
| Pin Configuration and Function Descriptions........................... 13                                                                                    |
| REVISION HISTORY                                                                                                                                             |
| 4/2020-Rev. Cto Rev.D Changes to Table 1............................................................................ 6                                       |
| Changes to Figure 2........................................................................ 13                                                               |
| Changes to Table 4.......................................................................... 14                                                              |
| 8/2019-Rev. B to Rev.C                                                                                                                                       |
| Change to Features Section ............................................................. 1                                                                   |
| Changes to Figure 1.......................................................................... 3                                                              |
| Changes to General Description Section ...................................... 4                                                                              |
| Changes to Table 1............................................................................ 5                                                             |
| Changes to Figure 2 and Table 4................................................... 13 Changes to General Recommendations Section ........................ 16 |
| 6/2019-Rev. Ato Rev. B                                                                                                                                       |
| Change to Features Section ............................................................. 1                                                                   |
| Changes to General Description Section ...................................... 4                                                                              |
| Changes to Ordering Guide.......................................................... 17                                                                       |

Terminology .................................................................................... 15

Applications Information .............................................................. 16

Design Guidelines ...................................................................... 16

Power and Ground Recommendations ................................... 16

Exposed Pad Thermal Recommendations  .............................. 16

General Recommendations....................................................... 16

Outline Dimensions ....................................................................... 17

Ordering Guide .......................................................................... 17

Automotive Products ................................................................. 17

2/2019-Rev. 0 to Rev. A

Added ADuCM330WFS ...................................................  Universal

Changes to Features Section ............................................................  1

Changes to Figure 1  ...........................................................................  3

Changes to General Description Section .......................................  4

Changes to Flash/EE Memory Parameter, Table 1  ........................  8

Added Note 14, Table 1; Renumbered Sequentially .................. 11

Changes to Thermal Resistance Section and Table 3 ................ 12

Changes to Ordering Guide .......................................................... 17

12/2018-Revision 0: Initial Version

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADuCM330WFS/ADuCM331WFS are fully integrated, 8 kHz data acquisition systems that incorporate dual, high performance, multichannel, Σ-Δ analog-to-digital converters (ADCs), a 32-bit ARM® Cortex™-M3 processor, and flash. The ADuCM330WFS has 96 kB Flash/EE memory, and the ADuCM331WFS has 128 kB Flash/EE memory. Both devices have 4 kB data flash. Error correction code (ECC) is available on all flash and SRAM memories.

The ADuCM330WFS/ADuCM331WFS are complete system solutions for battery monitoring in 12 V automotive applications.

The ADuCM330WFS/ADuCM331WFS integrate all features required to precisely and intelligently monitor, process, and diagnose 12 V battery parameters including battery current, voltage, and temperature over a wide range of operating conditions.

Minimizing external system components, the devices are powered directly from a 12 V battery. On-chip, low dropout (LDO) regulators generate the supply voltage for two integrated Σ-Δ ADCs. The ADCs precisely measure battery current, voltage, and temperature to characterize the state of the health and the charge of the car battery.

The devices operate from an on-chip, 16.384 MHz high frequency oscillator that supplies the system clock that is routed through a programmable clock divider, from which the core clock operating frequency is generated. The devices also contain a 32.768 kHz oscillator for low power operation.

The analog subsystem consists of an ADC with a programmable gain amplifier (PGA) that allows the monitoring of various current and voltage ranges. The analog subsystem also includes an on-chip precision reference.

The ADuCM330WFS/ADuCM331WFS integrate a range of on-chip peripherals that can be configured under core software control as required in the application. These peripherals include a serial port interface (SPI) serial input/output communication controller, six general-purpose input/output (GPIO) pins, one general-purpose timer, a wake-up timer, and a watchdog timer. See the ADuCM330WFS/ADuCM331WFS Hardware Reference Manual for more information.

The ADuCM330WFS/ADuCM331WFS are designed to operate in battery-powered applications where low power operation is critical. The microcontroller core can be configured in normal operating mode, resulting in an overall system current consumption of 18.5 mA when all peripherals are active. The devices can also be configured in a number of low power operating modes under direct program control, consuming &lt;100 µA.

The ADuCM330WFS/ADuCM331WFS include a local interconnect network (LIN) physical interface for single-wire, high voltage communications in automotive environments. The LIN transceiver is compliant to LIN 2.2A and Society of Automotive Engineers (SAE) J2602-2.

The devices operate from an external 3.6 V to 19 V (on VDD, Pin 26) voltage supply and are specified over the -40°C to +115°C temperature range, with additional typical specifications at +115°C to +125°C.

The information in this data sheet is relevant for Silicon Revision P60.

The ADuCM330WFS/ADuCM331WFS are developed for use in ISO 26262 applications for Automotive Safety Integrity Level Capability B.

The ADuCM330WFS/ADuCM331WFS are low electromagnetic emissions and high electromagnetic immunity devices.

Multifunction pin names may be referenced by the relevant function only.

## SPECIFICATIONS

VDD = 3.6 V to 19 V , ARM Cortex-M3 processor frequency (fFCLK) = 16.384 MHz, clock divider bits (CD) = 0, normal mode, and voltage reference (VREF) = 1.2 V (internal), unless otherwise stated. Typical values noted reflect the approximate parameter mean at TA = 25°C under nominal conditions, unless otherwise stated. Safe operation of the device is not guaranteed outside the temperature range of TA = -40°C to +115°C or outside the specified VDD supply range. Parameters specified in the 115°C to 125°C temperature range of operation are functional within this range but with degraded performance.

## Table 1.

|                                  |                                                                                                             | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |
|----------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Parameter                        | Test Conditions/Comments                                                                                    | Min                     | Typ                     | Max                     | Min Typ                 | Unit                    |                         |
| ADC SPECIFICATIONS               |                                                                                                             |                         |                         |                         |                         |                         |                         |
| Conversion Rate 1                | ADC normal operating mode, chop off                                                                         | 4                       |                         | 8000                    |                         | Hz                      |                         |
|                                  | ADC normal operating mode, chop on                                                                          | 4                       |                         | 2000                    |                         | Hz                      |                         |
|                                  | ADC low power mode, chop on                                                                                 | 1                       |                         | 656                     |                         | Hz                      |                         |
| Current Channel (IIN+/IIN- Only) |                                                                                                             |                         |                         |                         |                         |                         |                         |
| No Missing Codes 1               | Valid for all ADC update rates and ADC modes                                                                | 20                      |                         |                         |                         | Bits                    |                         |
| Integral Nonlinearity (INL) 1, 2 | ADCFLT = 0x10001, 0x08101, 0x00007                                                                          | -200                    | ±10                     | +200                    | ±80                     | ppmof FSR               |                         |
| Offset Error 1, 3, 4             | Chop off, gain = 4, 8, or 16, external short, after user system calibration at 25°C, 1 LSB = (2.28/gain) µV | -100                    | ±24                     | +100                    |                         | LSBs                    |                         |
|                                  | Chop off, gain = 32 or 64, external short, after user system calibration at 25°C, 1 LSB = (2.28/gain) µV    | -160                    | ±48                     | +160                    |                         | LSBs                    |                         |
|                                  | Chop off, gain = 512, external short, after user system calibration at 25°C, 1 LSB = (2.28/gain) µV         | -1400                   | ±60                     | +1400                   |                         | LSBs                    |                         |
|                                  | Chopon,external short,lowpowermode, gain=64or512,processorpowereddown                                       | -300                    | ±50                     | +250                    | ±250                    | nV                      |                         |
|                                  | Chop on, external short, after user system calibrationat25°C,VDD=19V                                        | -0.65                   |                         | +0.65                   | ±0.1                    | µV                      |                         |
| Offset Error Drift 1, 2, 5       | Chopoff, gain of 4to64,normalmode                                                                           |                         | ±0.48                   |                         |                         | LSB/°C                  |                         |
| Total Gain Error 1, 3, 4, 6      | Factory calibrated at a gain of 8, PGASCALE = 0b01, normal mode                                             | -0.5                    | ±0.1                    | +0.5                    | ±0.15                   | %                       |                         |
|                                  | Low power mode                                                                                              | -1                      | ±0.2                    | +1                      | ±0.2                    | %                       |                         |
| Gain Drift 1, 7                  |                                                                                                             |                         | ±3                      |                         | ±3                      | ppm/°C                  |                         |
| PGAGain Mismatch Error           |                                                                                                             |                         | ±0.1                    |                         | ±0.1                    | %                       |                         |
| Output Noise 1, 8                | Register PGASCALE, Bits[11:10] = 0x3                                                                        |                         |                         |                         |                         |                         |                         |
|                                  | Gain = 64, ADCFLT = 0x08101                                                                                 |                         | 0.80                    | 1.3                     | 1.2                     | µV rms                  |                         |
|                                  | Gain = 64, ADCFLT = 0x00007                                                                                 |                         | 0.75                    | 1.1                     |                         | µV rms                  |                         |
|                                  | Gain = 32, ADCFLT = 0x08101                                                                                 |                         | 1.00                    | 1.5                     | 1.3                     | µV rms                  |                         |
|                                  | Gain = 32, ADCFLT = 0x00007                                                                                 |                         | 0.80                    | 1.2                     |                         | µV rms                  |                         |
|                                  | Gain = 16, ADCFLT = 0x08101                                                                                 |                         | 1.50                    | 2.6                     | 2.0                     | µV rms                  |                         |
|                                  | Gain = 16, ADCFLT = 0x00007                                                                                 |                         | 1.10                    | 1.9                     |                         | µV rms                  |                         |
|                                  | Gain = 8, ADCFLT = 0x08101                                                                                  |                         | 2.10                    | 4.1                     | 2.5                     | µV rms                  |                         |
|                                  | Gain = 8, ADCFLT = 0x00007                                                                                  |                         | 1.60                    | 2.4                     |                         | µV rms                  |                         |
|                                  | Gain = 4, ADCFLT = 0x08101                                                                                  |                         | 3.40                    | 5.1                     | 4.0                     | µV rms                  |                         |
|                                  | Gain = 4, ADCFLT = 0x00007                                                                                  |                         | 2.60                    | 3.9                     |                         | µV rms                  |                         |

## ADuCM330WFS/ADuCM331WFS

## Data Sheet

|                                     |                                                                                                                    | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Parameter                           | Test Conditions/Comments                                                                                           | Min                     | Typ                     | Max                     | Typ                     | Unit                    |
|                                     | Gain = 64, ADCFLT = 0x10001                                                                                        |                         | 1.55                    | 2.0                     | 1.85                    | µV rms                  |
|                                     | Gain = 32, ADCFLT = 0x10001                                                                                        |                         | 1.6                     | 2.3                     | 2.0                     | µV rms                  |
|                                     | Gain = 16, ADCFLT = 0x10001                                                                                        |                         | 1.8                     | 2.5                     | 2.1                     | µV rms                  |
|                                     | Gain = 8, ADCFLT = 0x10001                                                                                         |                         | 2.5                     | 3.5                     | 3.0                     | µV rms                  |
|                                     | Gain = 4, ADCFLT = 0x10001                                                                                         |                         | 4.3                     | 6.5                     | 5.0                     | µV rms                  |
|                                     | ADC low power mode, 221 Hz update rate, chop enabled, gain = 64                                                    |                         | 0.6                     | 0.9                     | 0.8                     | µV rms                  |
| Voltage Channel 1, 9                |                                                                                                                    |                         |                         |                         |                         |                         |
| No Missing Codes                    | Valid at all ADC update rates                                                                                      | 20                      |                         |                         |                         | Bits                    |
| INL                                 | From 6V to 18V, ADCFLT = 0x10001, 0x08101, 0x00007                                                                 | -350                    | ±10                     | +350                    | ±150                    | ppmof FSR               |
| Offset Error 3,4                    | Chopoff,1LSB= 27.4 µV, after two-point calibration                                                                 | -160                    | ±16                     | +160                    |                         | LSB                     |
|                                     | Chop on, after two-point calibration, offset measured using 0V differential into voltage ADC (VADC) auxiliary pins | -16                     | ±4.8                    | +16                     | ±4.8                    | LSB                     |
| Offset Error Drift 5                | Chop off                                                                                                           |                         | ±0.48                   |                         | ±1                      | LSB/°C                  |
| Total Gain Error 3,4,6              | After user system calibration at 25°C, includes resistor mismatch                                                  | -0.25                   | ±0.06                   | +0.25                   | ±0.1                    | %                       |
|                                     | T A = -25°C to +65°C                                                                                               | -0.15                   | ±0.03                   | +0.15                   |                         | %                       |
| Gain Drift 7                        | Includes resistor mismatch drift                                                                                   |                         | ±3                      |                         | ±3                      | ppm/°C                  |
| Output Noise 10                     | 10 Hz update rate, chop on ADCFLT = 0x00007                                                                        |                         | 50                      |                         |                         | µV rms                  |
|                                     | From 6V to 18V, ADCFLT =                                                                                           |                         | 180 280                 | 270 350                 | 300                     | µV rms µV rms           |
|                                     | 0x08101                                                                                                            |                         |                         | 500                     |                         |                         |
|                                     | ADCFLT = 0x10001                                                                                                   |                         | 400                     |                         | 470                     | µV rms                  |
| Temperature Channel 1               |                                                                                                                    |                         |                         |                         |                         |                         |
| No Missing Codes                    | Valid at all ADC update rates                                                                                      | 20                      |                         |                         |                         | Bits                    |
| INL                                 | ADCFLT = 0x10001, 0x08101, 0x00007                                                                                 | -60                     | ±10                     | +60                     | ±15                     | ppmof FSR               |
| Offset Error 3, 11                  | Chop off, 1 LSB = 1.14 μV (unipolar mode), after two-point calibration                                             | -160                    | ±48                     | +160                    |                         | LSB                     |
| Offset Error 3                      | Chop on                                                                                                            | -80                     | +16                     | +80                     | ±16                     | LSB                     |
| Offset Error Drift                  | Chop off                                                                                                           |                         | ±0.48                   |                         | ±0.48                   | LSB/°C                  |
| Total Gain Error 3,11               |                                                                                                                    | -0.25                   | ±0.06                   | +0.25                   | ±0.10                   | %                       |
| Gain Drift 7                        |                                                                                                                    |                         | 3                       |                         | 3                       | ppm/°C                  |
|                                     | 0x00007                                                                                                            |                         | 7.5                     | 11.25                   | 10                      | µV rms                  |
| Output Noise                        | 1 kHz update rate, ADCFLT =                                                                                        |                         |                         |                         |                         |                         |
| Current Channel 1                   |                                                                                                                    |                         |                         |                         |                         |                         |
| Absolute Input Voltage Range        | Applies to both IIN+ and IIN-                                                                                      | -200                    |                         | +300                    |                         | mV                      |
| Differential Input Voltage Range 12 | Range=V REF /gain, limited by absolute input voltage range                                                         |                         | ±1.2/gain               |                         |                         | V                       |
| Input Leakage Current 13            |                                                                                                                    | -3                      |                         | +3                      | ±0.2                    | nA                      |
| Input Offset Current 13             |                                                                                                                    |                         | 0.2                     | 0.6                     | 0.4                     | nA                      |
| Voltage Channel                     |                                                                                                                    |                         |                         |                         |                         |                         |
| Absolute Input Voltage Range 1      | Voltage ADCspecifications are valid in this range                                                                  | 6                       |                         | 19                      |                         | V                       |
| Input Voltage Range 1               |                                                                                                                    |                         | 0 to 28.8               |                         |                         | V                       |

## Data Sheet

## ADuCM330WFS/ADuCM331WFS

|                                            | Test Conditions/Comments                                                 | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |
|--------------------------------------------|--------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Parameter                                  |                                                                          | Min                     | Typ                     | Max                     | Typ                     | Unit                    |
| VBAT Input Current                         | VBAT = 18V                                                               | 5                       | 9                       | 13                      | 11                      | µA                      |
| Temperature Channel                        | V REF 14 = AVDD18 andGND_SW                                              |                         |                         |                         |                         |                         |
| Absolute Input Voltage Range 1, 15         |                                                                          | 100                     |                         | 1500                    |                         | mV                      |
| InputVoltage Range 1                       |                                                                          |                         | 0 to 1.4                |                         |                         | V                       |
| VTEMPInput Current 1                       |                                                                          |                         | 2.5                     | 10                      | 3.5                     | nA                      |
| VOLTAGE REFERENCE                          |                                                                          |                         |                         |                         |                         |                         |
| Internal Reference                         |                                                                          |                         | 1.2                     |                         | 1.2                     | V                       |
| Power-Up Time 1                            |                                                                          |                         | 0.5                     |                         | 0.5                     | ms                      |
| Initial Accuracy 1                         | Measured at T A = 25°C                                                   | -0.15                   |                         | +0.15                   |                         | %                       |
| Temperature Coefficient 1, 16              |                                                                          | -20                     | ±5                      | +20                     | ±8                      | ppm/°C                  |
| Long-Term Stability 17                     |                                                                          |                         | 100                     |                         |                         | ppm/                    |
| RESISTIVE ATTENUATOR                       |                                                                          |                         |                         |                         |                         |                         |
| Divider Ratio                              |                                                                          |                         | 24                      |                         |                         |                         |
| Resistor Mismatch Drift                    | Implicit in the voltage channel gain error specification                 |                         | ±3                      |                         |                         | ppm/°C                  |
| ADC GROUND SWITCH                          |                                                                          |                         |                         |                         |                         |                         |
| Resistor to Ground                         |                                                                          | 45                      | 60                      | 75                      |                         | kΩ                      |
| TEMPERATURESENSOR 1, 18                    | Processor in hibernate mode, ADCFLT = chop on                            |                         |                         |                         |                         |                         |
| Accuracy                                   | T A = 115°C to 125°C                                                     | -3.5                    | ±1                      | +3.5                    | ±1                      | °C                      |
|                                            | T A = -40°C to +115°C                                                    | -3                      | ±1                      | +3                      |                         | °C                      |
|                                            | T A = -25°C to +85°C                                                     | -2.5                    | ±0.5                    | +2.5                    |                         | °C                      |
|                                            | T A = -10°C to +55°C                                                     | -2                      | ±0.5                    | +2                      |                         | °C                      |
| ADC DIAGNOSTICS 1                          |                                                                          |                         |                         | 14                      | 13                      | mV                      |
| AVDD18/136                                 | SM101                                                                    | 12                      |                         |                         |                         |                         |
| Current Channel                            | SM102                                                                    |                         |                         |                         |                         |                         |
| Diagnostic Current                         |                                                                          | 35                      | 50                      | 65                      |                         | µA                      |
| Diagnostic Current                         |                                                                          | -5                      | ±0.5                    | +5                      |                         | µA                      |
| Internal Electrostatic Discharge (ESD)     |                                                                          | -120                    |                         | +120                    |                         | Ω                       |
| Voltage Channel                            |                                                                          |                         |                         |                         |                         |                         |
| Input Test Voltage (V BE )                 | SM91-VBE                                                                 | 525                     | 700                     | 875                     |                         | mV                      |
| Voltage Attenuator Current Source Accuracy | SM92, differential voltage increase on the attenuator when current is on | 2.4                     |                         | 3.2                     | 2.8                     | V                       |
| Diagnostic Attenuator Divider Ratio        |                                                                          |                         | 48                      |                         |                         |                         |
| POWER-ONRESET(POR) 1 PORTrip Level         | Refers to voltage at theVDD pin SM8                                      | 2.9                     | 3.1                     | 3.4                     | 3.3                     | V                       |
| POR Hysteresis                             |                                                                          |                         | 0.1                     |                         |                         | V                       |
| LOWVOLTAGEFLAG                             |                                                                          |                         |                         |                         |                         |                         |
| LowVoltage Flag Level                      | Refers to voltage at theVDD pin                                          | 2.6                     | 2.75                    | 3.00                    |                         | V                       |

## ADuCM330WFS/ADuCM331WFS

## Data Sheet

|                                                  | Test Conditions/Comments                                   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C   | T A =+115°Cto+125°C   |
|--------------------------------------------------|------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-----------------------|-----------------------|
| Parameter                                        |                                                            | Min                     | Typ                     | Max                     | Min Typ               | Unit                  |
| WATCHDOGTIMER                                    |                                                            |                         |                         |                         |                       |                       |
| ShortestTimeout Period                           | 32,768 Hz clock with a prescaler of 1                      |                         | 122                     |                         | 122                   | µs                    |
| Longest Timeout Period                           | 32,768Hzclock with a prescaler of 4096                     |                         | 8192                    |                         | 8192                  | sec                   |
| SRAM SIZE                                        |                                                            | 10                      |                         |                         |                       | kB                    |
| FLASH/EE MEMORY                                  |                                                            |                         |                         |                         |                       |                       |
| Program Flash Size                               | ADuCM330WFS                                                |                         | 96 128                  |                         |                       | kB kB                 |
| Data Flash Size                                  | ADuCM331WFS                                                |                         | 4                       |                         |                       | kB                    |
| Endurance 20                                     |                                                            | 10,000                  |                         |                         |                       | Cycles                |
| Data Retention 21                                |                                                            | 20                      |                         |                         |                       | Years                 |
| LOGIC INPUTS 1                                   |                                                            |                         |                         |                         |                       |                       |
| Input Voltage                                    |                                                            |                         |                         |                         |                       |                       |
| Low (V INL )                                     |                                                            |                         |                         | 0.4                     |                       | V                     |
| High (V INH )                                    |                                                            | 2.0                     |                         |                         |                       | V                     |
| LOGIC OUTPUTS 1                                  | Alllogicoutputsmeasuredwith±1mA load                       |                         |                         |                         |                       |                       |
| Output Voltage High (V OH )                      |                                                            | 33VDD - 0.4             |                         |                         |                       | V                     |
| Low (V OL )                                      |                                                            |                         |                         | 0.4                     |                       | V                     |
| DIGITAL INPUTS 1                                 | All digital inputs except RESET, SWDIO, and SWCLK          |                         |                         |                         |                       |                       |
| Logic 1 Input Current (Leakage Current)          | V INH = 3.3V                                               | -10                     | ±1                      | +10                     |                       | µA                    |
| Logic 0 Input Current (Leakage Current)          | V INL = 0V                                                 | -10                     | ±1                      | +10                     |                       | µA                    |
| Input Capacitance                                |                                                            |                         | 10                      |                         |                       | pF                    |
| ON-CHIP OSCILLATORS                              |                                                            |                         |                         |                         |                       |                       |
| Low Frequency Oscillator                         |                                                            |                         | 32,768                  |                         |                       | Hz                    |
| Accuracy                                         | After a calibration from high frequency                    | -30 -6                  | ±5                      | +30 +6                  |                       | % %                   |
| High Frequency                                   | oscillator                                                 |                         | 16.384                  |                         |                       | MHz                   |
| Oscillator Accuracy (Calibration Function) 1, 22 |                                                            | -0.75                   | ±0.5                    | +0.75                   |                       | %                     |
| High Precision Mode                              |                                                            | -1                      |                         | +1                      |                       | %                     |
| Low Precision Mode                               |                                                            | -3                      |                         |                         |                       | %                     |
| START-UP TIME 1                                  |                                                            |                         |                         | +3                      |                       |                       |
| PROCESSOR                                        |                                                            |                         |                         |                         |                       |                       |
| At Power-On                                      | Includes kernel power-on execution time,VDD drops to <0.8V |                         | 18                      |                         |                       | ms                    |
| Brownout                                         | VDD drops below power-on reset voltage but not below 0.8V  |                         | 1.15                    |                         |                       | ms                    |
| After Reset Event                                | Includes kernel power-on execution time                    |                         | 1.25                    |                         |                       | ms ms                 |
| Wake-Up from LIN                                 |                                                            |                         | 0.15                    |                         |                       |                       |

## Data Sheet

## ADuCM330WFS/ADuCM331WFS

|                                                            |                                                                                                                                                 | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Parameter                                                  | Test Conditions/Comments                                                                                                                        | Min                     | Typ                     | Max                     | Min                     | Typ                     | Unit                    |
| LIN INPUT/OUTPUT GENERAL 1                                 |                                                                                                                                                 |                         |                         |                         |                         |                         |                         |
| Baud Rate                                                  |                                                                                                                                                 | 1000                    |                         | 20,000                  |                         |                         | Bits/sec                |
| VDD                                                        | Supply voltage range for which the LIN interface is functional                                                                                  | 6                       |                         | 19                      |                         |                         | V                       |
| LIN Comparator Response Time                               |                                                                                                                                                 |                         | 38                      | 90                      |                         |                         | µs                      |
| LIN DC PARAMETERS                                          |                                                                                                                                                 |                         |                         |                         |                         |                         |                         |
| Current Limit for Driver when LIN Bus is in Dominant State | VBUS =VBAT (maximum)                                                                                                                            | 40                      |                         | 200                     |                         |                         | mA                      |
| (I LIN_DOM_MAX ) Driver Off (I LIN_PAS_REC ) 1             | 6.0V < voltage of LIN bus (V BUS )< 19V, VDD = input leakage voltage (V LIN ) - 0.7V                                                            |                         |                         | 20                      |                         |                         | µA                      |
| Input Leakage Current at Receiver (I LIN_PAS_DOM ) 1       | V LIN = 0V, VBAT = 12V, driver off                                                                                                              | -1                      |                         |                         |                         |                         | mA                      |
| Control Unit Disconnectedfrom Ground (I LIN_NO_GND ) 1, 23 | Ground=VDD,0V<V LIN <19V,VBAT= 12V                                                                                                              | -1                      |                         | +1                      |                         |                         | mA                      |
| VBAT Disconnected (I BUS_NO_BAT ) 1                        | VDD = ground,0V<V BUS < 19V                                                                                                                     |                         |                         | 30                      |                         |                         | µA                      |
| LIN ReceiverDominant State (V LIN_DOM ) 1                  | VDD>6.0V                                                                                                                                        |                         |                         | 0.4 × VDD               |                         |                         | V                       |
| LIN Receiver Recessive State (V LIN_REC ) 1                | VDD>6.0V                                                                                                                                        | 0.6 × VDD               |                         |                         |                         |                         | V                       |
| LIN ReceiverThreshold Center (V LIN_CNT ) 1                | V LIN_CNT =(receiver threshold of recessive to dominantbusedge (V TH_DOM ) +receiver threshold of dominantto recessive bus edge(V ))/2,VDD>6.0V | 0.475× VDD              | 0.5 × VDD               | 0.525 × VDD             |                         |                         | V                       |
| LIN ReceiverThreshold Hysteresis (V HYS ) 1                | V HYS =V TH_REC -V TH_DOM                                                                                                                       |                         |                         | 0.175 ×                 |                         |                         | V                       |
| LIN Dominant Output Voltage                                | VDD = 6.0V                                                                                                                                      |                         |                         | VDD                     |                         |                         |                         |
| (V LIN_DOM_DRV_LOSUP ) 1                                   |                                                                                                                                                 |                         |                         |                         |                         |                         |                         |
| R L = 500Ω                                                 |                                                                                                                                                 |                         |                         | 1.2                     |                         |                         | V                       |
| R L = 1000Ω                                                |                                                                                                                                                 | 0.6                     |                         |                         |                         |                         | V                       |
| LIN Dominant Output Voltage 1                              | VDD = 19V                                                                                                                                       |                         |                         |                         |                         |                         |                         |
| R L = 500Ω                                                 |                                                                                                                                                 |                         |                         | 2                       |                         |                         | V                       |
| R L = 1000Ω                                                |                                                                                                                                                 | 0.8                     |                         |                         |                         |                         | V                       |
| LIN Recessive Output Voltage (V LIN_RECESSIVE ) 1          |                                                                                                                                                 | 0.8× VDD                |                         |                         |                         |                         | V                       |
| VBAT Shift 1,23                                            |                                                                                                                                                 | 0                       |                         | 0.115× VDD              |                         |                         | V                       |
| Ground Shift 1,23                                          |                                                                                                                                                 | 0                       |                         | 0.115 × VDD             |                         |                         | V                       |
| Slave Termination Resistance (R SLAVE )                    |                                                                                                                                                 | 20                      | 30                      | 47                      |                         | 30                      | kΩ                      |
| Voltage Drop at the Serial Diode (V SERIAL_DIODE ) 1       |                                                                                                                                                 | 0.4                     | 0.7                     | 1                       |                         |                         | V                       |

## ADuCM330WFS/ADuCM331WFS

## Data Sheet

|                                                                  |                                                                                                                                                                                                                                | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |
|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| Parameter                                                        | Test Conditions/Comments                                                                                                                                                                                                       | Min                     | Typ                     | Max                     | Min                     | Typ                     | Unit                    |
| LIN AC PARAMETERS 1                                              | Bus load conditions (C BUS &#124;&#124;R BUS ): 1nF&#124;&#124;1kΩ or 6.8nF&#124;&#124;660Ωor10nF&#124;&#124;500Ω                                                                                                              |                         |                         |                         |                         |                         |                         |
| Duty Cycle 1 (D1)                                                | Threshold recessivemaximum (TH REC(MAX) )= 0.744 ×VBAT, threshold dominantmaximum (TH DOM(MAX) ) = 0.581 ×VBAT, supply voltage at transceiver (V SUP ) = 6.0V to 19V, t BIT =                                                  | 0.396                   |                         |                         |                         |                         |                         |
| Duty Cycle 2 (D2)                                                | 50 µs, D1 = t BUS_REC(MIN) /(2 × t BIT ) Threshold recessiveminimum(TH REC(MIN) )= 0.284 ×VBAT, threshold dominant minimum (TH DOM(MIN) ) = 0.422 ×VBAT, V SUP = 6.0V to 19V, t BIT = 50 µs, D2 = t BUS_REC(MAX) /(2 × t BIT ) |                         |                         | 0.581                   |                         |                         |                         |
| Duty Cycle 3 (D3) 23                                             | TH REC(MAX) = 0.778 ×VBAT,TH DOM(MAX) = 0.616 ×VBAT,VDD = 6.0V to 19V, t BIT = 96 µs, D3 = t BUS_REC(MIN) /(2 × t BIT )                                                                                                        | 0.417                   |                         |                         |                         |                         |                         |
| Duty Cycle 4 (D4) 23                                             | TH REC(MIN) = 0.389 ×VBAT,TH DOM(MIN) = 0.251 ×VBAT,VDD = 6.0V to 19V, t BIT = 96 µs, D4 = t BUS_REC(MAX) /(2 × t BIT )                                                                                                        |                         |                         | 0.590                   |                         |                         |                         |
| Propagation Delay of Receiver (t RX_PD ) 23                      |                                                                                                                                                                                                                                |                         |                         | 6                       |                         |                         | µs                      |
| Symmetry of Receiver Propagation Delay Rising Edge(t RX_SYM ) 23 | With respect to falling edge (t RX_SYM = propagation delay rising edge (t RX_PDR ) - propagation delay falling edge (t RX_PDF ))                                                                                               | -2                      |                         | +2                      |                         |                         | µs                      |
| POWER REQUIREMENTS                                               |                                                                                                                                                                                                                                |                         |                         |                         |                         |                         |                         |
| Power Supply Voltages                                            |                                                                                                                                                                                                                                |                         |                         |                         |                         |                         |                         |
| VDD (Pin 26)                                                     |                                                                                                                                                                                                                                | 3.6                     |                         | 19                      |                         |                         | V                       |
| DVDD33 (Pin 21)                                                  |                                                                                                                                                                                                                                | 3.2                     | 3.35                    | 3.5                     | 3.3                     |                         | V                       |
| AVDD18 (Pin 19)                                                  |                                                                                                                                                                                                                                | 1.83                    | 1.88                    | 1.93                    |                         | 1.88                    | V                       |
| DVDD18 (Pin 22)                                                  |                                                                                                                                                                                                                                | 1.83                    | 1.88                    | 1.93                    |                         | 1.88                    | V                       |
| POWER CONSUMPTION                                                |                                                                                                                                                                                                                                |                         |                         |                         |                         |                         |                         |
| Supply Current (I DD ) Processor, Normal Mode 24                 | Clock Divider Setting 0(CD0) (peripheral clock(PCLK)=16MHz),16MHz1%mode, ADCsoff, reference buffer off, executing code from program flash                                                                                      |                         | 8                       | 17                      | 9                       |                         | mA                      |
|                                                                  | Clock Divider Setting 1(CD1)(PCLK= 8MHz),16MHz1%mode,ADCsoff, reference buffer off, executingcode from program flash                                                                                                           |                         | 6                       |                         | 7                       |                         | mA                      |
|                                                                  | CD0(PCLK=16MHz),16MHz1%mode, ADCson,reference buffer on, executing code from program flash                                                                                                                                     |                         | 9.5                     | 18.5                    |                         | 10                      | mA                      |
| I DD Processor, Powered Down                                     | Precision oscillator off, ADC off, external LIN master pull-up resistor present, measured with wake-up and watchdog timers clocked from low power oscillator, maximumvalueis at 105°C,and VDD=18V                              |                         | 55                      | 100                     |                         |                         | µA                      |
| I DD LIN                                                         |                                                                                                                                                                                                                                |                         | 500                     |                         |                         |                         | µA                      |
| I DD Current Channel ADC (IADC)                                  | Gain = 4, 8, or 16                                                                                                                                                                                                             |                         | 700                     |                         |                         |                         | µA                      |
|                                                                  | Gain = 32 or 64                                                                                                                                                                                                                |                         | 800                     |                         |                         |                         | µA                      |
|                                                                  | Low power mode, gain = 64                                                                                                                                                                                                      |                         | 350                     |                         |                         |                         | µA                      |

## Data Sheet

## ADuCM330WFS/ADuCM331WFS

|                                                                    |                           | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A = -40°C to +115°C   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   | T A =+115°Cto+125°C 1   |      |
|--------------------------------------------------------------------|---------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|------|
| Parameter                                                          | Test Conditions/Comments  | Min                     | Typ                     | Max                     | Min                     | Typ                     | Max                     | Unit |
| I DD ADCTemperature andVoltage Channel 1 (ADC1) Voltage ADC (VADC) |                           | 550                     |                         |                         |                         |                         |                         | µA   |
| I DD Internal Reference (1.2 V)                                    |                           |                         | 150                     |                         |                         |                         |                         | µA   |
| I DD High Frequency Oscillator                                     | Reduction from 1%to3%mode | 50                      |                         |                         |                         |                         |                         | µA   |

- 6 Includes internal reference temperature drift.
- 7 The gain drift is included in the total gain error. This parameter is an indicator of the gain error due to the temperature drift in the ADC. The typical value of this parameter is the mean of the temperature drift characterization data distribution.
- 8  For data rates of 4 kHz and 8 kHz with a PGA gain = 32 or greater, allow 10 ms settling time after ADC Current Channel 0 (ADC0) wakes up from power-down mode.
- 9 Voltage channel specifications include resistive attenuator input stage, unless otherwise stated.
- 10 RMS noise is referred to voltage attenuator input. For example, at an ADC data output frequency (fADC) = 1 kHz, the typical rms noise at the ADC input is 7.5 µV. Scaling by the attenuator (1:24) yields these input referred noise figures.

11 Valid after an initial self calibration.

- 12 It is possible to extend the ADC input range by up to 10% by modifying the factory set value of the gain calibration register or using system calibration. This approach can also be used to reduce the ADC input range (LSB size).
- 13 Valid for a differential input less than 10 mV.
- 14  The reference voltage, VREF, for the ADC is provided by the signal pair, AVDD18 and GND\_SW.
- 15  The absolute value of the voltage of VTEMP and GND\_SW must be 100 mV (minimum) for accurate operation of the temperature ADC (TADC).
- 16  Measured using the box method.
- 17 The long-term stability specification is accelerated and noncumulative. The drift in subsequent 1000 hour periods is significantly lower than in the first 1000 hour period.
- 18  Die temperature.
- 19 Valid after an initial self gain calibration.
- 20 Endurance is qualified to 10,000 cycles, as per JEDEC Standard 22 Method A117 and measured at -40°C, +25°C, and +115°C. Typical endurance at 25°C is 100,000 cycles.
- 21 Data retention lifetime equivalent at junction temperature (TJ) = 85°C, as per JEDEC Standard 22 Method A117. Data retention lifetime derates with junction temperature.
- 22  Measured with LIN communication active.
- 23  Not production tested but are supported by LIN compliance testing.
- 24 Typical additional supply current consumed during Flash/EE memory programming is 3 mA, and typical additional supply current consumed during erase cycles is 1 mA.

## ABSOLUTE MAXIMUM RATINGS

The ADuCM330WFS/ADuCM331WFS operate directly from the 12 V battery supply and is fully specified over the -40°C to +115°C temperature range, unless otherwise noted.

## Table 2.

| Parameter                                                  | Rating                                    |
|------------------------------------------------------------|-------------------------------------------|
| AGND to DGNDtoVSS to IO_VSS VBAT toAGND                    | -0.3V to +0.3V -22V to +40V -0.3V to +40V |
| VDD to VSS                                                 |                                           |
| LIN to IO_VSS                                              | -18V to +40V                              |
| Digital Input andOutputVoltage to DGND                     | -0.3VtoDVDD33+0.3V                        |
| ADC Inputs toAGND ESD Rating Human Body Model (HBM) Rating | -0.3VtoAVDD18+0.3V HBM-ADI0082 ±2.0 kV    |
| All Pins Except LIN andVBAT LIN                            | ±6 kV                                     |
|                                                            | ±4 kV                                     |
| IEC 61000-4-2                                              |                                           |
| VBAT                                                       | ±8 kV                                     |
| LIN andVBAT Storage Temperature Range                      | -55°C to +150°C                           |
| Junction Temperature Transient Continuous                  | 150°C 130°C                               |
| Lead Temperature Soldering Reflow                          | 260°C                                     |
| 2 Lifetime 3 Normal Mode At -40°C                          | 480 Hours 1600 Hours                      |
| At 23°C At 60°C                                            | 5200 Hours                                |
| At 105°C                                                   | 640 Hours                                 |
| At 85°C                                                    |                                           |
|                                                            | 80 Hours                                  |
| Standby Mode                                               |                                           |
| At -40°C                                                   | 12,648 Hours 60,000 Hours                 |
| At 25°C                                                    | 50,000                                    |
| At 50°C                                                    |                                           |
|                                                            | Hours                                     |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Close attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θJC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| PackageType   |   θ JA |   θ JC | Unit   |
|---------------|--------|--------|--------|
| CP-32-15 1    |     40 |     15 | °C/W   |

1  Test Condition 1: thermal impedance simulated values are based on JEDEC 4-layer test board.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

NOTES

1. DNC = DO NOT CONNECT. THIS PIN IS INTERNALLY CONNECTED.

THEREFORE, DO NOT EXTERNALLY CONNECT TO THIS PIN.

2. IT IS RECOMMENDED THAT THE EXPOSED PAD BE SOLDERED TO GROUND FOR THERMAL REASONS.

Figure 2. Pin Configuration

Table 4. Pin Function Descriptions

|   Pin No. | Mnemonic                      | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------|-------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | RESET                         | I        | Reset Input. Active low. This pin has an internal pull-up resistor to 33VDD.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|         2 | SWDIO                         | I/O      | ARMCortex-M3ProcessorDebug Data Input andOutput. At power-on, this output is disabledand pulled high viaan internal pull-up resistor.This pin can beleft unconnectedwhennotinuse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|         3 | SWCLK                         | I        | ARMCortex-M3 Processor Debug Clock Input. This is an input only pin and has an internal pull-up resistor. This pin can be left unconnected when not in use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|         4 | GPIO0/CS/LIN_RX               | I/O      | General-Purpose Input/Output 0(GPIO0). By default, this pin is configured as aninput.The pin has aninternal 25 kΩpull-up resistorto33VDDandcanbeleft unconnectedwhennotin use. Chip Select (CS).Whenconfigured, this pin also operates the SPI chip select input. Local Interconnect Network Receiver (LIN_RX). This pin can be configured as the receiver pin for LIN frames in external transceiver mode.                                                                                                                                                                                                                                                                                                                                                                                                      |
|         5 | GPIO1/SCLK/LIN_TX             | I/O      | General-Purpose Input/Output 1(GPIO1). By default, this pin is configured as aninput.This pin is used bythe kernel in externalmode.See theADuCM330WFS/ADuCM331WFSHardwareReference Manualfor moreinformation.The pin has aninternal 25 kΩpull-up resistorto33VDDandcanbe left unconnected whennotinuse. Serial Clock Input (SCLK).When configured, this pin operates the SPI serial clock input. Local Interconnect NetworkTransmitter (LIN_TX). This pin can beconfigured as the transmitter pin                                                                                                                                                                                                                                                                                                                |
|         6 | GPIO2/MISO                    | I/O      | General-Purpose Input/Output 2(GPIO2). By default, this pin is configured as aninput.The pin has aninternal 25 kΩpull-up resistorto33VDDandcanbeleft unconnectedwhennotin use. Master Input/Slave Output (MISO).When configured, this pin also operates the SPI master                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|         7 | GPIO3/IRQ0/MOSI/ LC_TX/LIN_TX | I/O      | input/slave output. General-Purpose Input/Output 3(GPIO3). By default, this pin is configured as aninput.This pin is used bythe kernel in externalmode.See theADuCM330WFS/ADuCM331WFSHardwareReference Manualfor moreinformation.The pin has aninternal 25 kΩpull-up resistorto33VDDandcanbe left unconnected whennotinuse. Interrupt Request (IRQ0). This pin can also be configured as the External Interrupt Request 0. Master Output/Slave Input (MOSI). This pin can be configured as an SPI master output/slave input pin. LIN Conformance Transmitter (LC_TX). This pin can be connected to the LIN physical transmitter for LIN conformance testing. Local Interconnect Network Transmitter (LIN_TX). This pin can also be connected as the transmitter pin for LIN frames in external transceiver mode. |

17188-002

## ADuCM330WFS/ADuCM331WFS

| Pin No.    | Mnemonic                        | Type 1   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|------------|---------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8          | GPIO4/IRQ1/LC_RX/ ECLKIN/LIN_RX | I/O      | General-Purpose Input/Output 4(GPIO4). By default, this pin is configured as aninput.This pin is used bythe kernel in externalmode.See theADuCM330WFS/ADuCM331WFSHardwareReference Manualfor moreinformation.The pin has aninternal 25 kΩpull-up resistorto33VDDandcanbe left unconnected whennotinuse. Interrupt Request (IRQ1). This pin can be configured as the External Interrupt Request 1. LIN Conformance Receiver (LC_RX). This pin can be connected to the LIN physical receiver for LIN conformance testing. External Clock (ECLKIN). This pin can be configured as the external clock input. Local Interconnect Network Receiver (LIN_RX). This pin can be configured as the receiving pin for LIN frames in external transceiver mode. |
| 9          | GND_SW                          | I        | Switch to Internal Analog Ground Reference. This pin is the negative input for the external temperature channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 10         | VTEMP                           | I        | External Pin for Negative Temperature Coefficient (NTC)/Positive Temperature Coefficient (PTC) Temperature Measurement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 11         | IIN+_AUX                        | S        | Auxiliary Positive Differential Input Pin. If not used, connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 12         | IIN+                            | I        | Positive Differential Input for Current Channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 13         | IIN-                            | I        | Negative Differential Input for Current Channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 14         | IIN-_AUX                        | S        | Auxiliary Negative Differential Input Pin. If not used, connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 15         | VINP_AUX                        | S        | Auxiliary Input Voltage Positive Channel. If not used, connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 16         | VINM_AUX                        | S        | Auxiliary Input Voltage Negative Channel. If not used, connect this pin to AGND.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 17         | VREF                            | S        | Voltage Reference Pin. Connect this pin via a 470 nF capacitor to ground. This pin can also be usedtoinputan external voltage reference.Thispincannotbe usedtosupplyan external circuit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 18         | AGND                            | S        | Ground Reference for On-Chip Precision Analog Circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 19         | AVDD18                          | S        | Supply from Analog LDO. Do not connect this pin to a low impedance external circuit. 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 20         | 33VDD                           | S        | 3.3VSupply.ConnecttoDVDD33. Donotconnectthis pin to alowimpedanceexternal circuit. 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 21         | DVDD33                          | S        | 3.3V Supply. Connect to 33VDD. Do not connect this pin to a low impedance external circuit. 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 22         | DVDD18                          | S        | 1.8V Supply. Do not connect this pin to a low impedance external circuit. 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 23, 25, 31 | DGND                            | S        | Ground Reference for On-Chip Digital Circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 26         | VDD                             | S        | Battery Power Supply for On-Chip Regulator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 27         | VBAT                            | S        | Battery Voltage Input to Resistor Divider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 28         | LIN                             | I/O      | Local Interconnect Network Physical Interface Input/Output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 29         | IO_VSS                          | S        | Ground Reference for LIN.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 30         | VSS                             | S        | Ground Reference. This pin is the ground reference for the internal voltage regulators.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 32         | GPIO5/LC_TX/LIN_TX              | I/O      | General-Purpose Input/Output 5 (GPIO5). By default, this pin is configured as an input. This pin is checked by the kernel on every reset. SeetheADuCM330WFS/ADuCM331WFSHardware Reference Manual for moreinformation.The pin has aninternal 25kΩpull-up resistorto33VDD andcanbeleft unconnectedwhennotin use. LIN Conformance Transmitter (LC_TX). This pin can be connected to the LIN physical transmitter for LIN conformance testing. Local Interconnect NetworkTransmitter (LIN_TX). This pin can beconfigured as the transmitter pin for LIN frames in external transceiver mode.                                                                                                                                                            |

## TERMINOLOGY

## Conversion Rate

The conversion rate specifies the rate at which an output result is available from the ADC after the ADC has settled.

The Σ-Δ conversion techniques used on this device mean that, although the ADC front-end signal is oversampled at a relatively high sample rate, a subsequent digital filter is used to decimate the output. Use of a digital filter provides a valid 20-bit data conversion result at output rates from 4 Hz to 8 kHz.

When software switches from one input to another on the same ADC, the digital filter must first be cleared and then allowed to average a new result. Depending on the configuration of the ADC and the type of filter, this averaging can require multiple conversion cycles.

## Integral Nonlinearity (INL)

INL is the maximum deviation of any code from a straight line passing through the endpoints of the transfer function. The endpoints of the transfer function are zero scale, which is a point ½ LSB below the first code transition, and full scale, which is a point ½ LSB above the last code transition (111…110 to 111…111). The error is expressed as a percentage of full scale.

Positive INL is the deviation from a straight line through ½ LSB above midscale code transition to ½ LSB above the last code transition.

Negative INL is the deviation from a straight line from a point ½ LSB below the first code transition to a point ½ LSB above the midscale code transition.

## No Missing Codes

No missing codes is a measure of the differential nonlinearity of the ADC. The error is expressed in bits and specifies the number of codes (ADC results) as 2 N bits, where N equals no missing codes, guaranteed to occur through the full ADC input range.

## Offset Error

Offset error is the deviation of the first code transition ADC input voltage from the ideal first code transition.

## Offset Error Drift

Offset error drift is the variation in absolute offset error with respect to temperature. This error is expressed as LSB/°C or nV/°C.

## Gain Error

Gain error is a measure of the span error of the ADC. It is a measure of the difference between the measured and the ideal span between any two points in the transfer function.

## Output Noise

The output noise is specified as the standard deviation (or 1 × Σ) of ADC output code distribution collected when the ADC input voltage is at a dc voltage. It is expressed as µV rms or nV rms. The output, or rms noise, is used to calculate the effective resolution of the ADC as defined by the following equation, measured in bits:

## Effective Resolution = log2( Full-Scale Range/rms Noise )

The peak-to-peak noise is defined as the deviation of codes that fall within 6.6 × Σ of the distribution of ADC output codes collected when the ADC input voltage is at dc. The peak-to-peak noise is therefore calculated as 6.6 × the rms noise.

The peak-to-peak noise can be used to calculate the ADC noise free code resolution for which there is no code flicker within a 6.6 × Σ limit as defined by the following equation, measured in bits:

Noise Free Code Resolution = log2( Full-Scale Range / Peakto-Peak Noise )

## APPLICATIONS INFORMATION

## DESIGN GUIDELINES

Before starting design and layout of the ADuCM330WFS/ ADuCM331WFS on a PCB, it is recommended that the designer become familiar with the following guidelines that describe any special circuit considerations and layout requirements needed.

## POWER AND GROUND RECOMMENDATIONS

Place capacitors that are connecting to the ADuCM330WFS/ ADuCM331WFS as close to the pins of the device as possible, with minimal trace length.

Capacitors connected to the 33VDD, AVDD18, and DVDD18 pins must have a low equivalent series resistance (ESR) rating.

All components must be rated accordingly to the temperature range expected by the application.

## EXPOSED PAD THERMAL RECOMMENDATIONS

It is required that the exposed pad on the underside of the ADuCM330WFS/ADuCM331WFS be connected to ground to achieve the best electrical and thermal performance. It is recommended that the user connect an exposed continuous copper plane on the PCB to the ADuCM330WFS/ADuCM331WFS exposed pad, and that the copper plane have several vias to achieve the lowest possible resistive thermal path for heat dissipation to flow through the bottom of the PCB. It is recommended that these vias be solder filled or plugged.

## GENERAL RECOMMENDATIONS

It is highly recommended to use the schematic given with the component values shown in Figure 3. The component values shown in Figure 3 were chosen from the characterization tests and evaluated for optimum performance of the ADuCM330WFS/ ADuCM331WFS.

Configure the GPIOs as inputs with pull-up resistors enabled to obtain the lowest possible current consumption in shutdown mode.

Set the ARM Cortex-M3 processor clock speed to the minimum required to meet the application requirements.

17188-003

Figure 3. External Components Recommended for Proper Operation

<!-- image -->

## OUTLINE DIMENSIONS

PKG-003499/3916

## ORDERING GUIDE

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-VJJD-7

Figure 4. 32-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.95 mm Package Height (CP-32-15) Dimensions shown in millimeters

| Model 1, 2         | Temperature Range 3   | Program Flash/ Data Flash/SRAM   | Package Description                              | Package Option   |
|--------------------|-----------------------|----------------------------------|--------------------------------------------------|------------------|
| ADuCM330WFSBCPZ-RL | -40°C to +115°C       | 96 kB/4 kB/10 kB                 | 32-Lead Lead Frame Chip Scale Package [LFCSP]    | CP-32-15         |
| ADuCM331WFSBCPZ-RL | -40°C to +115°C       | 128 kB/4 kB/10 kB                | 32-Lead Lead Frame Chip Scale Package [LFCSP]    | CP-32-15         |
| EVAL-ADUCM331QSPZ  |                       |                                  | Socketed Evaluation Board with Switches and LEDs |                  |

## AUTOMOTIVE PRODUCTS

The ADuCM330WFS and ADuCM331WFS models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial model; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown are available for use in automotive applications. Contact your local Analog Devices, Inc., account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

<!-- image -->

09-12-2018-D