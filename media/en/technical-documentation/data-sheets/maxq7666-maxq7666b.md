<!-- lastmod 2022-08-05 -->
## MAXQ7666

## General Description

The MAXQ7666 smart systems-on-a-chip (SoC) is a dataacquisition system based on a microcontroller (μC). As a member of the MAXQ ®  family of 16-bit reduced instruction  set  computing (RISC) μCs, the MAXQ7666 is ideal for low-cost, low-power, embedded applications such as industrial  controls  and  building  automation. The flexible, modular  architecture  design  used  in  this  μC  allows  tar -geted product development for specific applications with minimal effort.

The MAXQ7666 incorporates a high-performance 16-bit RISC core, a 12-bit 500ksps SAR ADC with a program -mable-gain amplifier (PGA), a 12-bit DAC with a buffered voltage  output,  and  a  full  CAN  2.0B  controller,  support -ing  transfer  rates  up  to  1Mbps.  The  device  includes  an internal crystal oscillator that drives an external crystal of 8MHz for the system clock. An internal 7.6MHz RC oscil -lator provides an alternate system clock. The MAXQ7666 includes an internal temperature sensor to measure die temperature  and  an  external  temperature-sensor  driver. The analog functions and digital I/O operate from a +5V supply,  while  the  internal  digital  core  operates  from  a +3.3V  supply.  An  internal  linear  regulator  can  provide +3.3V to the digital supply if an external +3.3V supply is not available. The MAXQ7666 also includes two power -supply  supervisors  and  a  JTAG  interface  for  in-system programming and debugging. The device includes 16KB (8K x 16) of program flash memory, up to 512 bytes (256 x 16) of data flash, and 512 bytes (256 x 16) of RAM.

The MAXQ7666 is available in a 48-pin TQFN (7mm x 7mm) package and is specified to operate from -40°C to +125°C.

## Applications

- Steering Sensors
- CAN- and LIN-Based Sensors
- Industrial Control

## Benefits and Features

- High-Performance, Low-Power, 16-Bit RISC Core
- 8MHz Operation, Approaching 1 MIPS per MHz
- Low Power (&lt; 3mA/MIPS, DV DD  = +3.3V)
- 16-Bit Instruction Word, 16-Bit Data Bus
- 33 Instructions (Most Require Only One Clock Cycle)
- 16-Level Hardware Stack
- Three  Independent  Data  Pointers  with  Automatic Increment/Decrement
- Program and Data Memory
- 16KB (8K x 16) Program Flash
- Up to 512 Bytes (256 x 16) Data Flash
- 512 Bytes (256 x 16) RAM

MAXQ is a registered trademark of Maxim Integrated Products, Inc. DeviceNet is a trademark of Open DeviceNet Vendor Association, Inc.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

- Smart Analog Peripherals
- Low-Power, Eight Differential-Channel 12-Bit, 500ksps ADC
- PGA, Software-Selectable Gain: 1V/V, 2V/V, 4V/V, 8V/V, 16V/V, 32V/V
- 12-Bit DAC with Buffered Voltage Output
- External References for ADC and DAC
- Internal (Die) and External Diode Temperature Sensing
- Timer/Digital I/O Peripherals
- Full CAN 2.0B Controller
- 15 Message Centers (256-Byte Dual Port Memory Programmable Bit Rates from 10kbps to 1Mbps Standard  11-Bit  or  Extended  29-Bit  Identification Modes

Two Data Masks and Associated IDs for DeviceNET™, SDS, and Other Higher Layer CAN Protocols

- External Transmit Disable for Autobaud SIESTA Low-Power Mode

Wake-Up on CANRXD Edge Transition

- UART (LIN) with User-Programmable Baud Rate
- 16 x 16 Hardware Multiplier with 48-Bit Accumulator, Single Clock-Cycle Operation
- Three 16-Bit (or Six 8-Bit) Programmable Timer/Counter/PWM
- Eight General-Purpose, Digital I/Os, with External Interrupt Capability
- Wake-Up Capable Interrupts
- Crystal/Clock Module
- Inter nal Oscillator for Use with External Crystal
- Internal RC Oscillator Eliminates External Crystal
- External Clock-Source Operation
- Prog rammable Watchdog Timer
- Power-Management Module
- Power-On Reset (POR)
- Power-Supply  Supervisor/Brownout  Detection  for Digital
- I/O and Digital Core Supplies
- OnChip +3.3V, 50mA Linear Regulator
- JTAG Interface
- Extensive Debug and Emulation Support
- In-System Test Capability
- Flash-Memory-Program Download
- Software Bootstrap Loader for Flash Programming
- Low-Power Consumption
- Low-Power Stop Mode (CPU Shutdown)

Ordering Information and Pin Configuration appear at end of data sheet.

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated.com/errata .

<!-- image -->

## MAXQ7666

## Absolute Maximum Ratings

| DV DD to DGND, AGND, or GNDIO.........................-0.3V to +4V DGND to GNDIO or AGND..................................-0.3V to +0.3V                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DV DDIO to DGND, AGND, or GNDIO.....................-0.3V to +6V AV to DGND, AGND, or GNDIO.........................-0.3V to +6V                                                                                     |
| DD Digital Inputs/Outputs to DGND, AGND, or GNDIO                                                                                                                                                                    |
| ........................................................ -0.3V to (DV DDIO + 0.3V) Analog Inputs/Outputs to DGND, AGND, or GNDIO ............................................................-0.3V to (AV DD + 0.3V) |
| RESET , XIN, XOUT to DGND, AGND, or GNDIO                                                                                                                                                                            |
| ............................................................-0.3V to (DV DD + 0.3V)                                                                                                                                  |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

| Continuous Current into Any Pin ......................................±50mA       |
|-----------------------------------------------------------------------------------|
| Continuous Power Dissipation (T A = +70°C)                                        |
| 48-Pin TQFN (derate 40mW/°C above +70°C).........3200mW                           |
| Operating Temperature Range ......................... -40°C to +125°C             |
| Junction Temperature ......................................................+150°C |
| Storage Temperature Range ............................ -65°C to +150°C            |
| Lead Temperature (soldering, 10s) .................................+300°C         |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                     | SYMBOL             | CONDITIONS                                                                                                    | MIN                | TYP                | MAX                | UNITS              |
|-----------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| POWER REQUIREMENTS                            | POWER REQUIREMENTS | POWER REQUIREMENTS                                                                                            | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS |
| Voltage Range                                 | DV DD              | Safe mode (RC/2 = 3.8MHz)                                                                                     | 2.7                | 3.3                | 3.6                | V                  |
| Voltage Range                                 |                    | Normal mode                                                                                                   | 3.0                | 3.3                | 3.6                | V                  |
| Voltage Range                                 | AV DD              |                                                                                                               | 4.75               | 5.0                | 5.25               | V                  |
| Voltage Range                                 | DV DDIO            |                                                                                                               | 4.75               | 5.0                | 5.25               | V                  |
| Supply Current                                | I AVDD             | Shutdown (Note 2)                                                                                             |                    | 0.1                | 10                 | µA                 |
| Supply Current                                |                    | All analog functions enabled                                                                                  |                    | 6.7                | 8                  | mA                 |
| Module Subfunction Incremental Supply Current |                    | ADC enabled, f ADC = 1ksps, f SYSCLK = 8MHz                                                                   |                    | 4.2                |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | ADC enabled, f ADC = 500ksps, f SYSCLK = 8MHz                                                                 |                    | 1890               |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | DAC enabled (zero scale)                                                                                      |                    | 305                |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | Internal temperature sensor enabled                                                                           |                    | 502                |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | Additional current when one or more of the ADC, DAC, and/or temperature sensor is enabled (only counted once) |                    | 151                |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | PGAenabled                                                                                                    |                    | 4.5                |                    | mA                 |
| Supply Current                                | I DVDD             | CPU in stop mode, all peripherals disabled                                                                    |                    | 160                | 225                | µA                 |
| Supply Current                                | I DVDD             | High-speed mode (Note 3)                                                                                      |                    |                    | 28                 | mA                 |
| Supply Current                                | I DVDD             | Flash erase or write mode                                                                                     |                    | 25                 | 35                 | mA                 |
| Module Subfunction Incremental Supply Current |                    | DVDD supervisor and brownout monitor                                                                          |                    | 2                  |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | High-frequency crystal oscillator                                                                             |                    | 700                |                    | µA                 |
| Module Subfunction Incremental Supply Current |                    | Internal RC oscillator                                                                                        |                    | 200                |                    | µA                 |
| Supply Current                                | I DVDDIO           | All digital I/Os static at GND or DV DDIO                                                                     |                    |                    | 10                 | µA                 |
| Supply Current                                | I DVDDIO           | (Note 4)                                                                                                      |                    | 1000               |                    | µA                 |

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                       | SYMBOL   | CONDITIONS                                                                                                                            |    MIN |   TYP |   MAX | UNITS   |
|-------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|--------|-------|-------|---------|
| MEMORY SECTION                                  |          |                                                                                                                                       |        |       |       |         |
| Program Flash Total Size                        |          | Program flash is accessed as 16-bit words                                                                                             |        |    16 |       | KB      |
| Program Flash Page Size                         |          |                                                                                                                                       |        |    64 |       | Bytes   |
| Program Flash Erase Size                        |          | Page erase                                                                                                                            |        |     4 |       | Pages   |
| Program Flash Erase Size                        |          | Erase all                                                                                                                             |        |   256 |       | Pages   |
| Program Flash Programming Size                  |          | Using utility ROM function programFlashWritePage: must erase full two pages and rewrite entire page to change any values on that page |        |     1 |       | Pages   |
| Program Flash Programming Size                  |          | Using JTAG boot loader protocol command to load code (family 90h and D0h): must erase full two pages and rewrite two pages            |        |     2 |       | Pages   |
| Program Flash Erase/ Programming Cell Endurance |          |                                                                                                                                       | 10,000 |       |       | Cycles  |
| Program Flash DV DD Supply Voltage              |          | Erasing, programming, or fetching instructions                                                                                        |    3.0 |   3.3 |   3.6 | V       |
| Program Flash Erase Timing                      |          | Page erase                                                                                                                            |        |    24 |    30 | ms      |
| Program Flash Erase Timing                      |          | Entire flash                                                                                                                          |        |   240 |   300 | ms      |
| Program Flash Programming Timing                |          | Page program                                                                                                                          |        |   2.2 |  2.75 | ms      |
| Program Flash Programming Timing                |          | Full program flash program                                                                                                            |        |   575 |   704 | ms      |
| Program Flash Data Retention                    |          | T A = +85°C                                                                                                                           |     15 |       |       | Years   |
| Data Flash Total Size                           |          | Data flash is accessed as 16-bit words (Note 5)                                                                                       |        |   512 |       | Bytes   |
| Data Flash Page Size                            |          |                                                                                                                                       |        |     2 |       | Bytes   |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                             | SYMBOL   | CONDITIONS                                                                                                                            |                                                                                                                                       |    MIN |    TYP |    MAX | UNITS   |
|---------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------|--------|--------|---------|
| Data Flash Erase Size                 |          | Page erase using utility ROM function dataFlashPageErase                                                                              | Page erase using utility ROM function dataFlashPageErase                                                                              |      2 |      2 |      2 | Pages   |
|                                       |          | Page erase using utility ROM function dataFlashPageEraseEven                                                                          | Page erase using utility ROM function dataFlashPageEraseEven                                                                          |      1 |      1 |      1 | Pages   |
|                                       |          | Erase all                                                                                                                             | Erase all                                                                                                                             |    256 |    256 |    256 | Pages   |
| Data Flash Programming Size           |          | Using utility ROM function dataFlashWritePage: must erase full two pages and rewrite entire page to change any values on that page    | Using utility ROM function dataFlashWritePage: must erase full two pages and rewrite entire page to change any values on that page    |      1 |      1 |      1 | Pages   |
| Data Flash Programming Size           |          | Using utility ROM function dataFlashWritePageEven: must erase one even page and rewrite entire page to change any values on that page | Using utility ROM function dataFlashWritePageEven: must erase one even page and rewrite entire page to change any values on that page |      1 |      1 |      1 | Pages   |
| Data Flash Erase/Write Cell Endurance |          |                                                                                                                                       |                                                                                                                                       | 10,000 | 10,000 | 10,000 | Cycles  |
| Data Flash DV DD Supply Voltage       |          | Erasing, writing, or reading                                                                                                          | Erasing, writing, or reading                                                                                                          |    3.0 |    3.3 |    3.6 | V       |
| Data Flash Erase Timing               |          | Page erase                                                                                                                            | Page erase                                                                                                                            |        |     24 |     30 | ms      |
| Data Flash Erase Timing               |          | Entire flash                                                                                                                          | Entire flash                                                                                                                          |        |    240 |    300 | ms      |
| Data Flash Programming                |          | Page write (1 x 16)                                                                                                                   | Page write (1 x 16)                                                                                                                   |        |     73 |     90 | µs      |
| Timing                                |          | Full data flash write                                                                                                                 | 64 x 16                                                                                                                               |        |    4.7 |    5.8 | ms      |
| Timing                                |          | Full data flash write                                                                                                                 | 256 x 16                                                                                                                              |        |   18.7 |     23 | ms      |
| Data Flash Data Retention             |          | T A = +85°C                                                                                                                           | T A = +85°C                                                                                                                           |     15 |     15 |     15 | Years   |
| RAM Data Retention Voltage            |          |                                                                                                                                       |                                                                                                                                       |      2 |      2 |      2 | V       |
| Data RAM Memory Size                  |          |                                                                                                                                       |                                                                                                                                       |    512 |    512 |    512 | Bytes   |
| Utility ROM Size                      |          |                                                                                                                                       |                                                                                                                                       |   8192 |   8192 |   8192 | Bytes   |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                            | SYMBOL            | CONDITIONS                                                                | MIN               | TYP               | MAX               | UNITS             |
|--------------------------------------|-------------------|---------------------------------------------------------------------------|-------------------|-------------------|-------------------|-------------------|
| ANALOG SENSE PATH                    | ANALOG SENSE PATH | ANALOG SENSE PATH                                                         | ANALOG SENSE PATH | ANALOG SENSE PATH | ANALOG SENSE PATH | ANALOG SENSE PATH |
| Resolution                           | N ADC             | No missing codes                                                          | 12                |                   |                   | Bits              |
| Integral Nonlinearity                | INL ADC           | Gain = 1, bipolar mode, V IN = ± 2500mV, 500ksps                          |                   | ± 0.5             | ± 4.0             | LSB               |
| Integral Nonlinearity                | INL ADC           | Gain = 8, unipolar mode, V IN = +400mV, 142ksps                           |                   | ± 2.0             |                   | LSB               |
| Integral Nonlinearity                | INL ADC           | Gain = 16, bipolar mode, V IN = ± 156mV, 142ksps                          |                   | ± 2.0             | ± 4.0             | LSB               |
| Integral Nonlinearity                | INL ADC           | Gain = 32, bipolar mode, V IN = ± 50mV, 142ksps                           |                   | ± 2.0             |                   | LSB               |
| Differential Nonlinearity            | DNL ADC           | Gain = 1, bipolar, V IN = ± 2500mV, 500ksps                               |                   | ±                 | 1.0               | LSB               |
| Differential Nonlinearity            | DNL ADC           | Gain = 16, bipolar, V IN = ± 156mV, 142ksps                               |                   |                   | ± 1.0             | LSB               |
| Differential Nonlinearity            | DNL ADC           | All other gain settings                                                   |                   | ± 0.6             |                   | LSB               |
| Offset Error                         |                   | Input referred                                                            |                   | ± 3.2             | ± 5               | mV                |
| Offset-Error Temperature Coefficient |                   |                                                                           |                   | ± 8               |                   | µV/°C             |
| Zero-Code Error                      |                   | Bipolar, differential measurement of error for idealADC output of 0x000   |                   | ± 3.2             |                   | mV                |
| Gain Error                           |                   | Exclude offset and reference error                                        | -1.0              |                   | +1.0              | %                 |
| Gain-Error Temperature Coefficient   |                   |                                                                           |                   | ± 8.5             |                   | ppm/°C            |
| Signal-to-Noise Plus Distortion      | SINAD             | PGAgain = 1V/V                                                            |                   | -71               |                   | dB                |
| Total Harmonic Distortion            | THD               | PGAgain = 1V/V                                                            |                   | -85               |                   | dB                |
| Spurious-Free Dynamic Range          | SFDR              | PGAgain = 1V/V                                                            |                   | -91               |                   | dB                |
| Noise                                |                   | Input referred, gain = 1                                                  |                   | 0.2               |                   | LSB RMS           |
| Noise                                |                   | Input referred, gain = 32                                                 |                   | 3.6               |                   | LSB RMS           |
| ADC Convert Start Pulse Width        |                   | Minimum pulse width on P0.4/ADCCNV or a timer port when triggering theADC |                   | 1                 |                   | ADC CLK           |
| Conversion Clock Frequency           | f ADCCLK          | f SYSCLK = 8MHz                                                           | 0.5               |                   | 8.0               | MHz               |
| Sample Rate                          |                   | PGAgain = 1V/V, R SOURCE ≤ 1kΩ                                            |                   |                   | 500               | ksps              |
| Sample Rate                          | f SAMPLE          | Any PGAgain setting > 1V/V, R SOURCE ≤ 5kΩ                                |                   |                   | 142               | ksps              |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                | SYMBOL   | CONDITIONS                                 |                                            | MIN           | TYP   | MAX           | UNITS   |
|------------------------------------------|----------|--------------------------------------------|--------------------------------------------|---------------|-------|---------------|---------|
| Conversion Time                          | t CONV   | t ACQ plus 13 ADCCLK cycles at 8MHz        | t ACQ plus 13 ADCCLK cycles at 8MHz        |               |       | t ACQ + 1.625 | µs      |
| Channel/Gain Select Plus Conversion Time |          | PGAgain = 1V/V, RSOURCE ≤ 1kI              | PGAgain = 1V/V, RSOURCE ≤ 1kI              |               |       | 2             |         |
| Channel/Gain Select Plus Conversion Time |          | Any PGAgain setting > 1V/V, R SOURCE ≤ 5kΩ | Any PGAgain setting > 1V/V, R SOURCE ≤ 5kΩ |               |       | 7             | µs      |
| Track-and-Hold Acquisition Time          | t        | PGAgain = 1V/V, RSOURCE ≤ 1kΩ              | PGAgain = 1V/V, RSOURCE ≤ 1kΩ              |               |       | 375           | ns      |
| Track-and-Hold Acquisition Time          | ACQ      | Any PGAgain setting > 1V/V, R SOURCE ≤ 5kΩ | Any PGAgain setting > 1V/V, R SOURCE ≤ 5kΩ |               |       | 5             | µs      |
| Turn-On Time                             | t RECOV  |                                            |                                            |               | 5     |               | µs      |
| Aperture Delay                           |          |                                            |                                            |               | 30    |               | ns      |
| Aperture Jitter                          |          |                                            |                                            |               | 50    |               | ps P-P  |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 1V/V                             | 0             |       | AV DD         | V nA    |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 2V/V                             | 0             |       | 1.6           | V nA    |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 4V/V                             | 0             |       | 0.8           | V nA    |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 8V/V                             | 0             |       | 0.4           | V nA    |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 16V/V                            | 0             |       | 0.2           | V nA    |
| Small-Signal Bandwidth                   |          | Unipolar mode                              | PGAgain = 32V/V                            | 0             |       | 0.1           | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 1V/V                             | -V REFADC /2  | +V    | REFADC /2     | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 2V/V                             | -V REFADC     | /4 +V | REFADC /4     | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 4V/V                             | -V REFADC /8  | +V    | REFADC /8     | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 8V/V                             | -V REFADC /16 |       | +V REFADC /16 | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 16V/V                            | -V REFADC /32 | +V    | REFADC /32    | V nA    |
| Small-Signal Bandwidth                   |          |                                            | PGAgain = 32V/V                            | -V REFADC /64 | +V    | REFADC /64    | V nA    |
| Absolute Input Voltage Range             |          |                                            |                                            | AGND          |       | AVDD          |         |
| Input Leakage Current                    |          | AIN15-AIN0                                 | AIN15-AIN0                                 |               | ± 20  |               |         |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 1V/V                             | 180           | 180   |               | MHz     |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 2V/V                             | 140           | 140   |               | MHz     |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 4V/V                             | 120           | 120   |               | MHz     |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 8V/V                             | 100           | 100   |               | MHz     |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 16V/V                            | 82            | 82    |               | MHz     |
| (-3dB)                                   |          | V IN x gain = 100mV P-P                    | PGAgain = 32V/V                            | 80            | 80    |               | MHz     |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                       | SYMBOL                                          | CONDITIONS                                               | CONDITIONS                                               | TYP                                             | MAX                                             | UNITS                                           |                                                 |
|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| Large-Signal Bandwidth (-3dB)                   |                                                 |                                                          | PGAgain = 1V/V                                           | 180                                             |                                                 | MHz                                             |                                                 |
|                                                 |                                                 | PGAgain = 2V/V                                           | PGAgain = 2V/V                                           | 140                                             |                                                 | MHz                                             |                                                 |
|                                                 |                                                 | PGAgain = 4V/V                                           | PGAgain = 4V/V                                           | 120                                             |                                                 | MHz                                             |                                                 |
|                                                 |                                                 | V IN x gain = 3.2V P-P PGAgain = 8V/V                    | V IN x gain = 3.2V P-P PGAgain = 8V/V                    | 100                                             |                                                 | MHz                                             |                                                 |
|                                                 |                                                 | PGAgain = 16V/V                                          | PGAgain = 16V/V                                          | 82                                              |                                                 | MHz                                             |                                                 |
|                                                 |                                                 | PGAgain = 32V/V                                          | PGAgain = 32V/V                                          | 80                                              |                                                 | MHz                                             |                                                 |
| Input Capacitance                               |                                                 |                                                          | PGAgain = 1V/V                                           | 13.6                                            |                                                 | pF                                              |                                                 |
|                                                 |                                                 | PGAgain = 2V/V                                           | PGAgain = 2V/V                                           | 2                                               |                                                 | pF                                              |                                                 |
|                                                 |                                                 | Differential to AGND, any PGAgain = 4V/V                 | Differential to AGND, any PGAgain = 4V/V                 | 4                                               |                                                 | pF                                              |                                                 |
|                                                 |                                                 | input of AIN0-AIN15 PGAgain = 8V/V                       | input of AIN0-AIN15 PGAgain = 8V/V                       | 8                                               |                                                 | pF                                              |                                                 |
|                                                 |                                                 | PGAgain = 16V/V                                          | PGAgain = 16V/V                                          | 16                                              |                                                 | pF                                              |                                                 |
|                                                 |                                                 | PGAgain = 32V/V                                          | PGAgain = 32V/V                                          | 32                                              |                                                 | pF                                              |                                                 |
| Crosstalk Between Channels                      |                                                 | AIN15-AIN0, V IN = 1V P-P , 10kHz, R SOURCE = 5kΩ        | AIN15-AIN0, V IN = 1V P-P , 10kHz, R SOURCE = 5kΩ        | -80                                             |                                                 | dB                                              |                                                 |
| Input Common-Mode Rejection Ratio               | CMRR                                            | AIN15-AIN0 (bipolar, differential), V CM = 100mV to 4.5V | AIN15-AIN0 (bipolar, differential), V CM = 100mV to 4.5V | 88                                              |                                                 | dB                                              |                                                 |
| Power-Supply Rejection Ratio                    | PSRR                                            | AV DD = +4.75V to +5.25V                                 | AV DD = +4.75V to +5.25V                                 | 72                                              |                                                 | dB                                              |                                                 |
| DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF)          | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF)          | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) | DAC SECTION (DACOUT, R L = 5kΩ and C L = 100pF) |
| Resolution                                      | N DAC                                           | Guaranteed monotonic                                     | Guaranteed monotonic                                     |                                                 |                                                 | Bits                                            |                                                 |
| Differential Nonlinearity                       | DNL DAC                                         | Codes 147h to E68h                                       | Codes 147h to E68h                                       | ± 0.4                                           | ± 1                                             | LSB                                             |                                                 |
| Integral Nonlinearity                           | INL DAC                                         | Codes 147h to E68h                                       | Codes 147h to E68h                                       | ± 0.5                                           | ± 4                                             | LSB                                             |                                                 |
| Offset Error                                    |                                                 | Reference to code 040h                                   | Reference to code 040h                                   | ± 2.5                                           | ± 30                                            | mV                                              |                                                 |
| Offset-Error Temperature Coefficient            |                                                 |                                                          |                                                          | ± 5                                             |                                                 | µV/°C                                           |                                                 |
| Gain Error                                      |                                                 | Excludes reference error, tested at E68h                 | Excludes reference error, tested at E68h                 | ± 3                                             | ± 20                                            | LSB                                             |                                                 |
| Gain-Error Temperature Coefficient              |                                                 | Excludes offset and reference drift; calculated from FSR | Excludes offset and reference drift; calculated from FSR | ± 2                                             |                                                 | ppm of FSR/°C                                   |                                                 |
| DAC Output Range                                |                                                 | No load                                                  | No load                                                  | V                                               | REFDAC                                          | V                                               |                                                 |
| DC Output Impedance                             | Z                                               | Termination resistance to                                | DAC enabled                                              | 0.5                                             |                                                 | Ω                                               |                                                 |
|                                                 | OUT                                             | AGND                                                     | Power-down mode                                          | 105                                             |                                                 | kΩ                                              |                                                 |
| Output Slew Rate                                |                                                 | 400h to C00h code swing, rising or falling               | 400h to C00h code swing, rising or falling               | 0.6                                             |                                                 | V/µs                                            |                                                 |
| Output Settling Time                            |                                                 | 147h to E68h code swing, settling to ± 0.5 LSB (Note 6)  | 147h to E68h code swing, settling to ± 0.5 LSB (Note 6)  | 8                                               | 15                                              | µs                                              |                                                 |
| Output Short-Circuit Current                    |                                                 | Short toAGND                                             | Short toAGND                                             | 27                                              |                                                 |                                                 |                                                 |
|                                                 |                                                 | Short to AV DD                                           | Short to AV DD                                           | -46                                             |                                                 | mA                                              |                                                 |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                                                       | SYMBOL   |                                                                                      | CONDITIONS                                    | TYP    | MAX   | UNITS   |
|---------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------|-----------------------------------------------|--------|-------|---------|
| DAC Glitch Impulse                                                              |          | From 7FFh to 800h                                                                    |                                               | 12     |       | nV·s    |
| DAC Power-On Time                                                               |          | Excluding reference, settling to ± 0.5 LSB                                           |                                               | 14     |       | µs      |
| Power-Supply Rejection                                                          |          | AV DD step from +4.75V to +5.25V, code = E66h                                        |                                               | 62     |       | µV/V    |
| Output Noise                                                                    |          | C L = 200pF                                                                          |                                               | 200    |       | µV RMS  |
| EXTERNAL REFERENCE INPUTS                                                       |          |                                                                                      |                                               |        |       |         |
| REFADC Input Voltage Range                                                      |          |                                                                                      |                                               |        | AV DD | V       |
| REFDAC Input Voltage Range                                                      |          |                                                                                      |                                               |        | AV DD | V       |
| REFDAC Input Impedance                                                          |          |                                                                                      |                                               | 200    |       | kΩ      |
| REFADC Leakage Current                                                          |          | ADC disabled                                                                         |                                               | 1      |       | µA      |
| TEMPERATURE SENSOR (Remote NPN Transistor 2N3904)                               |          |                                                                                      |                                               |        |       |         |
| Temperature Error                                                               |          | External diode,                                                                      |                                               | ± 1    |       | °C      |
|                                                                                 |          | Internal diode T A = -30°C to +85°C                                                  |                                               | ±2     |       |         |
|                                                                                 |          |                                                                                      | T A = -40°C to +125°C                         | ±5     |       |         |
|                                                                                 |          |                                                                                      |                                               | ±2     |       |         |
|                                                                                 |          |                                                                                      | T A = -30°C to +85°C, T RJ = +25°C            | ±3     |       |         |
|                                                                                 |          | differential configuration                                                           | T A = -40°C to +125°C, T RJ = +25°C           | ±3     |       |         |
|                                                                                 |          | (Note 7)                                                                             | T A = -30°C to +85°C, T RJ = -30°C to +85°C   | ±3     |       |         |
|                                                                                 |          |                                                                                      | T A = -40°C to +125°C, T RJ = -40°C to +125°C | ±5     |       |         |
| Internal (Die) or External Temperature Measurement Error vs. V REFADC Variation |          |                                                                                      |                                               | 0.095  |       | °C/mV   |
| External Diode Source Current                                                   |          | High level                                                                           |                                               | 74.7   |       | µA      |
|                                                                                 |          | Low level                                                                            |                                               | 4      |       |         |
| External Diode Drive Current Ratio                                              |          |                                                                                      |                                               | 18.7:1 |       |         |
| Conversion Time                                                                 |          | f ADCCLK = f SYSCLK = 8MHz, no interrupts, internal utility ROM tempConv             |                                               | 70     |       | µs      |
| Temperature Resolution                                                          |          | 12-bitADC                                                                            |                                               | 0.125  |       | °C/LSB  |
| +3.3V LINEAR REGULATOR (C DVDD = 4.7µF)                                         |          |                                                                                      |                                               |        |       |         |
| DV DDIO Input Voltage Range                                                     |          |                                                                                      |                                               | 5.0    | 5.25  | V       |
| DV DD Output Voltage                                                            |          | REGEN = GNDIO                                                                        |                                               | 3.4    | 3.6   | V       |
| DV DD Input Voltage Range                                                       |          | REGEN = DV DDIO                                                                      |                                               |        | 3.6   | V       |
| No-Load Quiescent Current                                                       |          | CPU in sleep mode; all digital peripherals disabled, no external load, REGEN = GNDIO |                                               | 175    | 250   | µA      |
| Output Short-Circuit Current                                                    |          | Short to DGND                                                                        |                                               | 110    |       | mA      |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                                                         | SYMBOL                                            | CONDITIONS                                                                                                                                   |                                                                                                                                              | MIN                                               | TYP                                               | MAX                                               | UNITS                                             |
|-----------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION                                 | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION                                                                                            | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION                                                                                            | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY VOLTAGE SUPERVISORS AND BROWNOUT DETECTION |
| DV DD Voltage-Supervisor Reset Rising Threshold                                   |                                                   | Power-on default, DV DD voltage rising (Note 8)                                                                                              | Power-on default, DV DD voltage rising (Note 8)                                                                                              | 2.70                                              |                                                   | 2.99                                              | V                                                 |
| DV DD Voltage-Supervisor Brownout Reset Falling Threshold                         | V VDBR                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 9)                                                        | VDBR = 00b (default)                                                                                                                         | 2.70                                              |                                                   | 2.99                                              | V                                                 |
|                                                                                   | V VDBR                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 9)                                                        | VDBR = 01b                                                                                                                                   | 2.77                                              |                                                   | 3.06                                              | V                                                 |
|                                                                                   | V VDBR                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 9)                                                        | VDBR = 10b                                                                                                                                   | 2.84                                              |                                                   | 3.13                                              | V                                                 |
|                                                                                   | V VDBR                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 9)                                                        | VDBR = 11b                                                                                                                                   | 2.91                                              |                                                   | 3.20                                              | V                                                 |
| Software-Selectable DV DD Voltage-Supervisor Brownout Interrupt Falling Threshold | V VDBI                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 10)                                                       | VDBI = 00b (default)                                                                                                                         | 2.77                                              |                                                   | 2.99                                              | V                                                 |
| Software-Selectable DV DD Voltage-Supervisor Brownout Interrupt Falling Threshold | V VDBI                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 10)                                                       | VDBI = 01b                                                                                                                                   | 2.84                                              |                                                   | 3.13                                              | V                                                 |
| Software-Selectable DV DD Voltage-Supervisor Brownout Interrupt Falling Threshold | V VDBI                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 10)                                                       | VDBI = 10b                                                                                                                                   | 2.91                                              |                                                   | 3.20                                              | V                                                 |
| Software-Selectable DV DD Voltage-Supervisor Brownout Interrupt Falling Threshold | V VDBI                                            | DV DD voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 10)                                                       | VDBI = 11b                                                                                                                                   | 2.99                                              |                                                   | 3.27                                              | V                                                 |
| DV DDIO Voltage-Supervisor Brownout Interrupt Threshold                           | V VIOBI                                           | DV DDIO voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 11)                                                     | VIOBI = 00b (default)                                                                                                                        | 4.25                                              |                                                   | 4.74                                              | V                                                 |
|                                                                                   | V VIOBI                                           | DV DDIO voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 11)                                                     | VIOBI = 01b                                                                                                                                  | 4.30                                              |                                                   | 4.79                                              | V                                                 |
|                                                                                   | V VIOBI                                           | DV DDIO voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 11)                                                     | VIOBI = 10b                                                                                                                                  | 4.35                                              |                                                   | 4.84                                              | V                                                 |
|                                                                                   | V VIOBI                                           | DV DDIO voltage falling, firmware selectable, measured with CPU active at 8MHz (Note 11)                                                     | VIOBI = 11b                                                                                                                                  | 4.40                                              |                                                   | 4.89                                              | V                                                 |
| Voltage-Supervisor Hysteresis                                                     |                                                   | DV DD , DV DDIO                                                                                                                              | DV DD , DV DDIO                                                                                                                              |                                                   | 1                                                 |                                                   | %                                                 |
| DV DD Brownout-Interrupt to Brownout Reset Falling Threshold                      |                                                   | Voltage difference between V VDBI and V VDBR , time allowing software clean-up before RESET asserted, VDBI = 11b and VDBR = 10b              | Voltage difference between V VDBI and V VDBR , time allowing software clean-up before RESET asserted, VDBI = 11b and VDBR = 10b              | 155                                               |                                                   |                                                   | mV                                                |
| Voltage Monitor Supply Voltage Range                                              |                                                   | DV DD                                                                                                                                        | DV DD                                                                                                                                        | 1.0                                               |                                                   | 3.6                                               | V                                                 |
| DV DD Ramp-Up Rate                                                                |                                                   | Ensure DV DD rises faster than this rate between +2.7V and +3.0V when using either an external DV DD supply or the internal linear regulator | Ensure DV DD rises faster than this rate between +2.7V and +3.0V when using either an external DV DD supply or the internal linear regulator | 35                                                |                                                   |                                                   | mV/ms                                             |
| RESET Hold Time                                                                   |                                                   | After DV DD rises above the V VDBR voltage trip threshold                                                                                    | After DV DD rises above the V VDBR voltage trip threshold                                                                                    |                                                   | 10                                                |                                                   | ms                                                |
| CAN INTERFACE                                                                     | CAN INTERFACE                                     | CAN INTERFACE                                                                                                                                | CAN INTERFACE                                                                                                                                | CAN INTERFACE                                     | CAN INTERFACE                                     | CAN INTERFACE                                     | CAN INTERFACE                                     |
| CAN Baud Rate                                                                     |                                                   | CANCLK = 8MHz                                                                                                                                | CANCLK = 8MHz                                                                                                                                |                                                   |                                                   | 1                                                 | Mbps                                              |
| CANCLK Mean Frequency Error                                                       |                                                   | 50ppm external crystal error, 8MHz crystal                                                                                                   | 50ppm external crystal error, 8MHz crystal                                                                                                   |                                                   | 60                                                |                                                   | ppm                                               |
| CANCLK Total Frequency Error                                                      |                                                   | 50ppm external crystal error, 8MHz crystal, clock divided and measured over 500µs interval, mean plus peak cycle jitter                      | 50ppm external crystal error, 8MHz crystal, clock divided and measured over 500µs interval, mean plus peak cycle jitter                      |                                                   | < 0.5                                             |                                                   | %                                                 |
| HIGH-FREQUENCY CRYSTAL OSCILLATOR                                                 | HIGH-FREQUENCY CRYSTAL OSCILLATOR                 | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                                                                                            | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                                                                                            | HIGH-FREQUENCY CRYSTAL OSCILLATOR                 | HIGH-FREQUENCY CRYSTAL OSCILLATOR                 | HIGH-FREQUENCY CRYSTAL OSCILLATOR                 | HIGH-FREQUENCY CRYSTAL OSCILLATOR                 |
| Clock Frequency                                                                   |                                                   | Using external crystal                                                                                                                       | Using external crystal                                                                                                                       | 7.6                                               |                                                   | 8.12                                              |                                                   |
|                                                                                   |                                                   | External clock source                                                                                                                        | External clock source                                                                                                                        | 7.6                                               |                                                   | 8.12                                              | MHz                                               |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                         | SYMBOL                          | CONDITIONS                                   | MIN                             | TYP                             | MAX                             | UNITS                           |
|-----------------------------------|---------------------------------|----------------------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Crystal Oscillator Startup Time   |                                 | 8MHz crystal                                 |                                 | 10                              |                                 | ms                              |
| External Clock Input Duty Cycle   |                                 | Ratio high-to-low or low-to-high             | 45                              |                                 | 55                              | %                               |
| Crystal Oscillator Stability      |                                 | Excluding crystal                            |                                 | 3                               |                                 | ppm/V                           |
| XIN Input Load Capacitance        |                                 | HFIC = 00b (default)                         |                                 | 7                               |                                 | pF                              |
| XIN Input Load Capacitance        |                                 | HFIC = 01b                                   |                                 | 18                              |                                 | pF                              |
| XIN Input Load Capacitance        |                                 | HFIC = 10b                                   |                                 | 27                              |                                 | pF                              |
| XIN Input Load Capacitance        |                                 | HFIC = 11b                                   |                                 | 34                              |                                 | pF                              |
| XOUT Output Load Capacitance      |                                 | HFIC = 00b (default)                         |                                 | 7                               |                                 | pF                              |
| XOUT Output Load Capacitance      |                                 | HFIC = 01b                                   |                                 | 18                              |                                 | pF                              |
| XOUT Output Load Capacitance      |                                 | HFIC = 10b                                   |                                 | 27                              |                                 | pF                              |
| XOUT Output Load Capacitance      |                                 | HFIC = 11b                                   |                                 | 34                              |                                 | pF                              |
| Crystal Oscillator Drive Strength |                                 | HFOC = 00b (default), ESR = 240Ω             |                                 | 62                              |                                 | µW                              |
| Crystal Oscillator Drive Strength |                                 | HFOC = 01b, ESR = 240Ω                       |                                 | 95                              |                                 | µW                              |
| Crystal Oscillator Drive Strength |                                 | HFOC = 10b, ESR = 240Ω                       |                                 | 13                              |                                 | µW                              |
| Crystal Oscillator Drive Strength |                                 | HFOC = 11b, ESR = 240Ω                       |                                 | 23                              |                                 | µW                              |
| XIN Input Low Voltage             |                                 | Driven with external clock source            |                                 | 0.3 x                           | DV DD                           | V                               |
| XIN Input High Voltage            |                                 | Driven with external clock source            | 0.7 x DV DD                     |                                 |                                 | V                               |
| INTERNAL RC OSCILLATOR            | INTERNAL RC OSCILLATOR          | INTERNAL RC OSCILLATOR                       | INTERNAL RC OSCILLATOR          | INTERNAL RC OSCILLATOR          | INTERNAL RC OSCILLATOR          | INTERNAL RC OSCILLATOR          |
| Oscillator Frequency              |                                 |                                              | 7.0                             | 7.6                             | 8.0                             | MHz                             |
| Oscillator Startup Time           |                                 |                                              |                                 | 10                              |                                 | µs                              |
| Oscillator Jitter                 |                                 |                                              |                                 | 2.7                             |                                 | ns                              |
| UART (LIN) INTERFACE (UTX, URX)   | UART (LIN) INTERFACE (UTX, URX) | UART (LIN) INTERFACE (UTX, URX)              | UART (LIN) INTERFACE (UTX, URX) | UART (LIN) INTERFACE (UTX, URX) | UART (LIN) INTERFACE (UTX, URX) | UART (LIN) INTERFACE (UTX, URX) |
| UART Baud Rate                    |                                 |                                              |                                 |                                 | 2                               | Mbps                            |
| Minimum LIN Mode Operation        |                                 |                                              |                                 |                                 | 1                               | kbps                            |
| Maximum LIN Mode Operation        |                                 |                                              | 20                              |                                 |                                 | kbps                            |
| UART Baud Rates Error             |                                 | Crystal clock source                         | -0.5                            |                                 | +0.5                            |                                 |
| UART Baud Rates Error             |                                 | Using internal RC oscillator before autobaud | -14.0                           |                                 | +14.0                           | %                               |
| UART Baud Rates Error             |                                 | Using internal RC oscillator after autobaud  | -0.5                            |                                 | +0.5                            |                                 |
| RESET ( RESET )                   | RESET ( RESET )                 | RESET ( RESET )                              | RESET ( RESET )                 | RESET ( RESET )                 | RESET ( RESET )                 | RESET ( RESET )                 |
| RESET Internal Pullup Resistance  |                                 | Pullup to DV DD                              |                                 | 305                             |                                 | kΩ                              |
| RESET Output Voltage              |                                 | High, RESET deasserted, no load              | 0.9 x DV DD                     |                                 |                                 | V                               |
| RESET Output Voltage              |                                 | Low, RESET asserted, no load                 |                                 |                                 | 0.4                             | V                               |
| RESET Input High Voltage          |                                 |                                              | 0.7 x DV DD                     |                                 |                                 | V                               |
| RESET Input Low Voltage           |                                 |                                              |                                 | 0.3 x                           | DV DD                           | V                               |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Electrical Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f SYSCLK  = 8MHz, V REFDAC  = V REFADC  = +5V, T A  = T MIN to T MAX , unless otherwise noted. Typical values are at T A = +25°C.) (Note 1)

| PARAMETER                                  | SYMBOL                                     | CONDITIONS                                 | MIN                                        | TYP                                        | MAX                                        | UNITS                                      |
|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) | DIGITAL INPUTS (P0._, CANRXD, URX, REGEN ) |
| Input Low Voltage                          |                                            |                                            | 0.3 x DV DDIO                              | 0.3 x DV DDIO                              | 0.3 x DV DDIO                              | V                                          |
| Input High Voltage                         |                                            |                                            | 0.7 x DV DDIO                              | 0.7 x DV DDIO                              | 0.7 x DV DDIO                              | V                                          |
| Input Hysteresis                           |                                            |                                            | 500                                        | 500                                        | 500                                        | mV                                         |
| Input Leakage Current                      |                                            | V IN = GNDIO or DV DDIO , pullup disabled  | -1                                         | ± 0.01                                     | +1                                         | µA                                         |
| Input Pullup Resistance                    |                                            | Pullup to DV DDIO                          | 400                                        | 400                                        | 400                                        | kΩ                                         |
| Input Capacitance                          |                                            | V IN = GNDIO or DV DDIO                    | 15                                         | 15                                         | 15                                         | pF                                         |
| DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        | DIGITAL OUTPUTS (P0._, CANTXD, UTX)        |
| Output Low Voltage                         |                                            | I SINK = 1.6mA                             |                                            |                                            | 0.4                                        | V                                          |
| Output High Voltage                        |                                            | I SOURCE = 1.6mA                           | DV DDIO - 0.5                              | DV DDIO - 0.5                              | DV DDIO - 0.5                              | V                                          |
| Output Leakage Current                     |                                            | I/Os three-stated                          | -1                                         | ± 0.01                                     | +1                                         | µA                                         |
| Output Capacitance                         |                                            | I/Os three-stated                          |                                            | 15                                         |                                            | pF                                         |
| Output Short-Circuit Current               |                                            | Short to DV DDIO = +5.25V                  |                                            | -29                                        |                                            | mA                                         |
| Output Short-Circuit Current               |                                            | Short to GNDIO                             |                                            | 28                                         |                                            | mA                                         |

Note 1: All devices are 100% production tested at T A = +25°C.

Note 2: All analog functions disabled and all digital inputs connected to DV DDIO  or GNDIO.

Note 3: High-speed mode: CPU and three timers running at 8MHz from an external crystal oscillator, CAN enabled and communi -cating at 500kbps, all other peripherals disabled, all digital I/Os static at DV DDIO  or GNDIO.

Note 4: CAN transmitting at 500kbps, one timer output at 500kHz, all active I/Os are loaded with 20pF capacitor, all remaining digital I/Os are at DV DDIO  or GNDIO.

Note 5: Utility ROM software supports a range of data flash sizes up to 256 x 16 (512 bytes). Refer to the MAXQ7665/MAXQ7666 User's Guide for details.

Note 6: Guaranteed by design and characterization.

Note 7: Based on diode ideality factor of 1.008.

- Note 8: DVDD must rise above V VDBR for RESET to become deasserted. Caution: Operation is not guaranteed for DV DD below +2.7V (utility ROM) or +3.0V (flash).
- Note 9: RESET is asserted if DV DD  falls below V VDBR . Caution: Operation is not guaranteed for DV DD  below +2.7V (utility ROM) or +3.0V (flash).
- Note 10: An interrupt is generated if DV DD  falls below V VDBI . Caution: Operation is not guaranteed for DV DD  below +2.7V (utility ROM) or +3.0V (flash).
- Note 11: An interrupt is generated if DV DDIO  falls below V VIOBI . Caution: Operation is not guaranteed if DV DDIO  or AV DD is below 4.75V, except for the DV DDIO  brownout monitor and +3.3V linear regulator, that still operate down to 0V and +4.25V, respectively.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Typical Operating Characteristics

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Typical Operating Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

## Typical Operating Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Typical Operating Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

LOAD CURRENT (mA)

## Typical Operating Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

## Typical Operating Characteristics (continued)

(AV DD  = DV DDIO  = +5.0V, DV DD  = +3.3V, f ADCCLK  = 8MHz, f ADC  = 500kHz, T A = +25°C, unless otherwise noted.)

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Pin Description

| PIN        | NAME    | FUNCTION                                                                                                                                                                                                                                     |
|------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | AIN11   | Analog Input Channel 11. AIN11 is multiplexed to the PGAas a differential input with AIN10.                                                                                                                                                  |
| 2          | AIN10   | Analog Input Channel 10. AIN10 is multiplexed to the PGAas a differential input with AIN11.                                                                                                                                                  |
| 3          | AIN9    | Analog Input Channel 9. AIN9 is multiplexed to the PGAas a differential input with AIN8.                                                                                                                                                     |
| 4          | AIN8    | Analog Input Channel 8. AIN8 is multiplexed to the PGAas a differential input with AIN9.                                                                                                                                                     |
| 5, 8       | AGND    | Analog Ground. Connect allAGND nodes together. Connect to DGND at a single point.                                                                                                                                                            |
| 6          | REFADC  | ADC External Reference Input. Connect an external reference voltage between 1V and AV DD to REFADC.                                                                                                                                          |
| 7          | REFDAC  | DAC External Reference Input. Connect an external reference voltage between 0V and AV DD to REFDAC.                                                                                                                                          |
| 9          | AIN7    | Analog Input Channel 7. AIN7 is multiplexed to the PGAas a differential input with AIN6.                                                                                                                                                     |
| 10         | AIN6    | Analog Input Channel 6. AIN6 is multiplexed to the PGAas a differential input with AIN7.                                                                                                                                                     |
| 11         | AIN5    | Analog Input Channel 5. AIN5 is multiplexed to the PGAas a differential input with AIN4.                                                                                                                                                     |
| 12         | AIN4    | Analog Input Channel 4. AIN4 is multiplexed to the PGAas a differential input with AIN5.                                                                                                                                                     |
| 13         | AIN3    | Analog Input Channel 3. AIN3 is multiplexed to the PGAas a differential input with AIN2. AIN3-AIN0 have external temperature sensor capability.                                                                                              |
| 14         | AIN2    | Analog Input Channel 2. AIN2 is multiplexed to the PGAas a differential input with AIN3. AIN3-AIN0 have external temperature sensor capability.                                                                                              |
| 15         | AIN1    | Analog Input Channel 1. AIN1 is multiplexed to the PGAas a differential input with AIN0. AIN3-AIN0 have external temperature sensor capability.                                                                                              |
| 16         | AIN0    | Analog Input Channel 0. AIN0 is multiplexed to the PGAas a differential input with AIN1. AIN3-AIN0 have external temperature sensor capability.                                                                                              |
| 17         | DACOUT  | DAC Buffer Output. DACOUT is the DAC voltage buffer output.                                                                                                                                                                                  |
| 18, 19, 31 | DGND    | Digital Ground for the Digital Core and Flash. Connect all DGND nodes together. Connect to AGND at a single point.                                                                                                                           |
| 20         | CANRXD  | CAN Bus Receiver Input. Control area network receiver input.                                                                                                                                                                                 |
| 21         | CANTXD  | CAN Bus Transmitter Output. Control area network transmitter output.                                                                                                                                                                         |
| 22         | UTX     | UART or LIN Transmitter Output                                                                                                                                                                                                               |
| 23         | URX     | UART or LIN Receiver Input                                                                                                                                                                                                                   |
| 24         | P0.6/T0 | Port 0 Bit 6/Timer 0. P0.6 is a general-purpose digital I/O with interrupt/wake-up input capability. T0 is a primary timer/PWM input or output. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 7 and 8.                                |
| 25         | P0.7/T1 | Port 0 Bit 7/Timer 1. P0.7 is a general-purpose digital I/O with interrupt/wake-up input capability. T1 is a primary timer/PWM input or output. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 7 and 8.                                |
| 26, 39     | DV DDIO | Digital I/O Supply Voltage. Supplies all digital I/O except for XIN, XOUT, and RESET . Bypass DV DDIO to GNDIO with a 0.1µF capacitor placed as close as possible to the device. DV DDIO also connects to the input of the linear regulator. |
| 27         | GNDIO   | Digital I/O Ground. Connect all grounds together at a single point.                                                                                                                                                                          |
| 28, 29     | I.C.    | Internal Connection. Connect I.C. to GNDIO or DV DDIO .                                                                                                                                                                                      |
| 30         | I.C.    | Internal Connection. Leave unconnected or connect to DV DDIO .                                                                                                                                                                               |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Pin Description (continued)

| PIN   | NAME         | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 32    | P0.0/TDO     | Port 0 Data 0/JTAG Serial Test Data Output. P0.0 is a general-purpose digital I/O with interrupt/ wake-up capability. TDO is the JTAG serial test, data output. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 8 and 10.                                                                                                                                                                                                                                                         |
| 33    | P0.1/TMS     | Port 0 Data 1/JTAG Test Mode Select. P0.1 is a general-purpose digital I/O with interrupt/wake-up capability. TMS is the JTAG test mode select input. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 8 and 10.                                                                                                                                                                                                                                                                   |
| 34    | P0.2/TDI     | Port 0 Data 2/JTAG Serial Test Data Input. P0.2 is a general-purpose digital I/O with interrupt/ wake-up capability. TDI is the JTAG serial test, data input. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 8 and 10.                                                                                                                                                                                                                                                           |
| 35    | P0.3/TCK     | Port 0 Data 3/JTAG Serial Test Clock Input. P0.3 is a general-purpose digital I/O with interrupt/ wake-up capability. TCK is the JTAG serial test, clock input. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 8 and 10.                                                                                                                                                                                                                                                         |
| 36    | P0.4/ADCCNV  | Port 0 Data 4/ADC Start Conversion Control. P0.4 is a general-purpose digital I/O with interrupt/wake- up capability.ADCCNV is firmware configurable for a rising or falling edge start/convert to triggerADC conversions. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 3 and 8.                                                                                                                                                                                               |
| 37    | P0.5/DACLOAD | Port 0 Data 5/DAC Data Register Load/Update Input. P0.5 is a general-purpose digital I/O with interrupt/wake-up capability. DACLOAD is firmware configurable for a rising or falling edge to update the DACOUT register. Refer to the MAXQ7665/MAXQ7666 User's Guide sections 3 and 8.                                                                                                                                                                                                 |
| 38    | REGEN        | Active-Low Linear Regulator Enable Input. Connect REGEN to GNDIO to enable the linear regulator. Connect REGEN to DV DDIO to disable the linear regulator.                                                                                                                                                                                                                                                                                                                             |
| 40    | DV DD        | Digital Supply Voltage. DV DD supplies the internal digital core and flash memory. DV DD is internally connected to the output of the internal 3.3V linear regulator. Disable the internal regulator to connect DV DD to an external supply. When using the on-chip linear regulator, bypass DV DD to DGND with a 4.7µF ± 20% capacitor with a maximum ESR of 0.5Ω. In addition, bypass DV DD with a 0.1µF capacitor. Place both bypass capacitors as close as possible to the device. |
| 41    | RESET        | Reset Input and Output. Active-low open-drain input/output with internal 305kΩ (typ) pullup to DV DD . Drive low to reset the µC. RESET is low during power-up reset and during DV DD brownout conditions.                                                                                                                                                                                                                                                                             |
| 42    | XOUT         | High-Frequency Crystal Output. Connect an external crystal to XIN and XOUT for normal operation. Leave XOUT unconnected if XIN is driven with an external clock source. XOUT is not driven when using the internal RC oscillator.                                                                                                                                                                                                                                                      |
| 43    | XIN          | High-Frequency Crystal Input. Connect an external crystal or resonator to XIN and XOUT for normal operation, or drive XIN with an external clock source. XIN is not driven when using the internal RC oscillator.                                                                                                                                                                                                                                                                      |
| 44    | AVDD         | Analog Supply Voltage Input. Connect AV DD to a +5V supply. Bypass AV DD toAGND with a 0.1µF capacitor placed as close as possible to the device.                                                                                                                                                                                                                                                                                                                                      |
| 45    | AIN15        | Analog Input Channel 15. AIN15 is multiplexed to the PGAas a differential input with AIN14.                                                                                                                                                                                                                                                                                                                                                                                            |
| 46    | AIN14        | Analog Input Channel 14. AIN14 is multiplexed to the PGAas a differential input with AIN15.                                                                                                                                                                                                                                                                                                                                                                                            |
| 47    | AIN13        | Analog Input Channel 13. AIN13 is multiplexed to the PGAas a differential input with AIN12.                                                                                                                                                                                                                                                                                                                                                                                            |
| 48    | AIN12        | Analog Input Channel 12. AIN12 is multiplexed to the PGAas a differential input with AIN13.                                                                                                                                                                                                                                                                                                                                                                                            |
| -     | EP           | Exposed Pad. EP is internally connected to AGND. Connect EP toAGND externally.                                                                                                                                                                                                                                                                                                                                                                                                         |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Block Diagram

<!-- image -->

w

## MAXQ7666

## Detailed Description

The 16-bit RISC core (MAXQ20) of the MAXQ7666 con -trols the analog and digital peripheral functions. The 16-bit RISC ALU addresses 16KB (8K x 16) program flash, up to 512 bytes (256 x 16) data flash and 512 bytes (256 x 16) of RAM memory with Harvard memory architecture. The MAXQ7666  peripheral  components  include  a  precision 12-bit  500ksps  ADC  with  an  8-channel  differential  mux and PGA, a 12-bit precision DAC, an internal temperature sensor,  an  external  temperature-sensor  driver,  a  hard -ware multiplier, eight digital I/Os, a controller area network (CAN 2.0B) bus, a JTAG interface, and three type-2 tim -ers. An internal 7.6MHz RC oscillator or a crystal oscillator driving  an  external  crystal  of  8MHz  provide  the  system

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

clock. The device also includes a +3.3V linear regulator, watchdog timer, and two power-supply supervisors.

The  MAXQ20  offers  a  low  &lt;  3mA/MIPS  ratio.  The integrated  16-bit  x  16-bit  hardware  multiplier  with  accu -mulator  performs  single-cycle  computations.  Refer  to the MAXQ7665/MAXQ7666  User's  Guide for  more detailed information on configuring and programming the MAXQ7666.

## Analog Input Peripheral

The  integrated  12-bit ADC  employs  an  ultra-low-power, high-precision, SAR-based conversion method and oper -ates  up  to  500ksps  (142ksps  with  PGA  ≥  2).  The ADC measures eight fully differential multiplexed analog inputs with software-selectable input ranges through a PGA. See Figure 1.

Figure 1. Simplified Analog Input Diagram (Eight Fully Differential Inputs)

<!-- image -->

## MAXQ7666

The MAXQ7666 ADC converts temperature and voltage signals into a 12-bit digital result using a fully differential SAR conversion technique and an on-chip T/H block. An analog  input  channel  mux  supports  8  differentia  chan -nels.  The  differential  analog  inputs  are  selected  from the  following  pairs:  AIN0/AIN1,  AIN2/AIN3,  AIN4/AIN5, AIN6/AIN7, AIN8/AIN9, AIN10/AIN11, AIN12/AIN13, and AIN14/AIN15.

External  temperature-sensor  configuration  in  differential mode  uses  analog  input  channel  pairs  AIN2/AIN3  and AIN0/AIN1. Use AIN0 and AIN2 in single-ended external temperature-sensor  configuration.  Internal  temperature -sensor  configuration  measures  internal  die  temperature and does not use any analog input channel.

There are four ways to control the ADC conversion timing:

- 1) Software register bit control
- 2) Continuous conversion
- 3) Internal timers (T0, T1, or T2)
- 4) External input through pin ADCCNV

Refer  to  the MAXQ7665/MAXQ7666  User's  Guide for more detailed information on the ADC and mux.

## 12-Bit Digital-to-Analog Converter (DAC)

The  MAXQ7666  contains  a  12-bit  voltage-output  DAC with  an  output  buffer.  The  data  path  to  the  DAC  is double  buffered.  Update  the  DAC  output  register  using the  DACLOAD  digital  input  or  software.  Refer  to  the MAXQ7665/MAXQ7666  User's  Guide for  detailed  programming information. The DAC also supports a squarewave-output toggle mode with precise amplitude control for  applications  that  require  pulse-amplitude  modulation (PAM) and/or pulse-width modulation (PWM) signals. See Figure 2 for a simplified block diagram of the DAC.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 2. Simplified DAC Diagram

<!-- image -->

The DAC output buffer is configured as a voltage follower (gain  of  1V/V  from  REFDAC).  Disable  the  buffer  using software. When the buffer is disabled, the output is con -nected internally to AGND through a 100kΩ resistor. The reference input REFDAC accepts an input voltage of less than or equal to AV DD  for a maximum output swing of 0V to AV DD .

## Temperature Sensor

The internal ADC and a ROM-based tempConv subrou -tine  measure  temperature.  Use  the  tempConv  subrou -tine  to  initiate  a  measurement  (refer  to  the MAXQ7665/ MAXQ7666 User's  Guide for  detailed  information).  The device  supports  conversions  of  two  external  and  one internal  temperature  sensor.  The  external  temperature sensor is typically a diode-connected small-signal transistor, connected between two analog inputs (differential) or one  analog  input  and  AGND  (single-ended).  Figures  3 and 4 illustrate these two configurations.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 3. Temperature-Sensor Application Circuit-Single-Ended Configuration

<!-- image -->

Figure 4. Temperature-Sensor Application Circuit-Differential Configuration

<!-- image -->

## Power-On Reset and Brownout

Power supplies DV DD  and DV DDIO each include a brownout monitor that alerts the μC through an interrupt when their corresponding supply voltage drops below a selectable threshold. This condition is generally referred to as brownout  interrupt  (BOI).  Set  the  thresholds  using  the VDBI and VIOBI bits for DV DD  and DV DDIO , respectively. Monitoring  the  supplies  allows  for  appropriate  action  to be taken in a brownout condition. The DV DDIO brownout monitor also covers the analog peripherals if AV DD and DVDDIO are directly connected.

The  DV DD supply  (internal  core  logic)  also  includes a  voltage  supervisor  that  controls  the  μC  reset  during power-up (DV DD  rising) and brownout reset (DV DD falling)  conditions  (see  Figure  5  for  a  POR  and  brownout timing example).

## MAXQ7666

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 5. DV DD  Brownout Interrupt Detection

<!-- image -->

During  power-up, RESET is  held  low  once  DV DD rises above  +1.0V.  All  internal  register  bits  are  set  to  their default,  POR  state  after  DV DD   exceeds  a  threshold of  approximately  +1.2V.  DV DD   brownout  reset  (BOR) threshold defaults to the +2.70V to +2.99V range follow -ing  POR. Once DV DD  rises above this DV DD brownout threshold,  the  7.6MHz  RC  oscillator  starts  driving  the power-up  counter,  and  8.6ms  (typ)  later, RESET goes high  if  nothing  external  holds  it  low.  Ramp-up  DV DD at a rate of at least 35mV/ms between +2.7V and +3.0V to ensure RESET is held low before DV DD reaches a minimum flash operating level of +3.0V. After DV DD reaches a valid  level  and RESET goes  high,  software  execution begins at the reset vector (8000h in the utility ROM).

Perform software clean-up when DV DD  BOI is generated before DV DD  BOR occurs. The amount of time between BOI and BOR detection depends on the brownout interrupt and reset threshold settings, the size of the DV DD bypass capacitors, and the applicationdependent μC power man -agement  and  software  cleanup  tasks.  Use  the  internal +3.3V linear regulator for additional software cleanup time by using the DV DDIO brownout monitor as an early warning that the regulator's input voltage is falling.

RESET is  pulled  low  when DV DD  falls below the DV DD BOR  threshold  set  by  the  VDBR  bits.  Upon  reset,  the μC and peripheral activity  stops  and  most  registers  are set to their default state. The VDBR bits retain their value

## MAXQ7666

if DV DD  falls below the BOR threshold but remains above the POR threshold.

The following scenarios apply once DV DD  enters BOR:

- If  DVDD  remains  below  the  BOR  threshold,  the RESET pin remains low, and the μC remains in the reset state.
- If DV DD stops falling before reaching the POR threshold, then begins rising above the BOR threshold, the RESET pin is released and the μC jumps to the reset vector (8000h in the utility ROM). This is similar to the DVDD power-up case described in the previous scenario, except there is no power-up counter delay and some of the register bits are set to BOR values rather than POR values. See Tables 3 and 5 for the reset be -havior of specific bits. In particular, the retained VDBR setting, if higher than the default value of 00b, allows a potentially more robust brownout recovery closer to or above the minimum flash operating level of +3.0V.
- If DV DD  falls below the 1.2V POR threshold, all reg -ister  bits  are  reset,  and  any  DVDD  recovery  from that point is identical to the power-up case described above. See Tables 3 and 5 for the reset behavior of specific bits.

Refer  to  the MAXQ7665/MAXQ7666  User's  Guide for detailed programming information, and a more thorough description of POR and brownout behavior.

## Internal 3.3V Linear Regulator

An internal +3.3V/50mA linear regulator provides alternate supply to the MAXQ7666 core logic if an external supply is  not  used.  Connect REGEN to  GNDIO  to  enable  the linear regulator. When using the linear regulator, ensure the DV DDIO supply can support both the I/O and digital supply current requirements. Connect REGEN to DV DDIO when  using  a  +3.3V  external  supply.  Apply  DV DDIO before DV DD  when using external supply for DV DD .

## System Clock Generator

The  MAXQ7666  oscillator  module  is  the  master  clock generator that supplies the system clock for the μC core and all  of  the  peripheral  modules  using  either  a  crystal oscillator  or  an  internal  RC  oscillator.  The  crystal  oscil -lator  operates  with  an  8MHz  crystal.  Use  the  RC  oscil -lator  in  applications  that  do  not  require  precise  timing. The  MAXQ7666  executes  most  instructions  in  a  single SYSCLK period. The oscillator module contains all of the

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

primary clock-generation circuitry. Figure 6 shows a block diagram of the system clock module.

The MAXQ7666 supports many features for generating a master clock signal timing source:

- Internal,  fast-starting,  7.6MHz  RC  oscillator  elimi -nates external crystal
- Internal high-frequency oscillator that can drive an ex -ternal 8MHz crystal
- External high-frequency clock input (8MHz)
- Selectable internal capacitors for high-frequency crystal oscillator
- Power-up timer
- Fail-safe modes

## Watchdog Timer

The primary function of the watchdog timer is to watch for stalled or stuck software. The watchdog timer performs a controlled system restart when the μP fails to write to the watchdog timer register before a selectable timeout interval expires. In some designs, the watchdog timer is also used to implement a real-time operating system (RTOS) in the μC. When used to implement an RTOS, a watchdog timer typically has four objectives:

- 1) To detect if a system is operating normally
- 2) To detect an infinite loop in any of the tasks
- 3) To  detect  an  arbitration  deadlock  involving  two  or more tasks
- 4) To detect if some lower priority tasks are not running -because of higher priority tasks

Figure 6. Crystal and RC Oscillator Block Diagram

<!-- image -->

## MAXQ7666

As  illustrated  in  Figure  7,  the  internal  RC  oscillator (HFRCCLK)  is  the  only  clock  source  for  the  watchdog timer (through a series of dividers). The divider output is programmable and determines the timeout interval. When enabled, the interrupt flag WDIF is set when a timeout is reached. A system reset then occurs after a time delay (based on the divider ratio).

The watchdog timer functions as the source of both the watchdog interrupt and the watchdog reset. The interrupt -timeout has a default divide ratio of 2 12  of the HFRCCLK, with  the  watchdog  reset  set  to  timeout  2 9   clock  cycles

Figure 7. Watchdog Functional Diagram

<!-- image -->

Figure 8. Type 2 Timer Functional Diagram

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

later.  With  the  nominal  RC  oscillator  value  of  7.6MHz, an  interrupt  timeout  occurs  every  539μs,  followed  by  a watchdog reset 67.4μs later. The watchdog timer resets to  the  default  divide  ratio  following  any  reset.  Using  the WD0 and WD1 bits in the WDCN register, select  other divide ratios for longer watchdog interrupt periods. If the WD[1:0] bits are changed before the watchdog interrupt timeout  occurs  (i.e.  before  the  watchdog  reset  counter begins), the watchdog timer count is reset. All watchdog timer reset timeouts follow the programmed interrupt timeout 512 source clock cycles later. For more information on the MAXQ7666 watchdog timer, refer to the MAXQ7665/ MAXQ7666 User's Guide .

## Timer and PWM

The MAXQ7666 includes three 16-bit timers. Each timer is  a  type  2  timer  implemented in the MAXQ family (see Figure 8). Two of the timers are accessible through I/Os or software, and one is accessible only through software. Type 2 timers are auto-reload 16-bit timers/counters offer -ing the following functions:

- 8-bit/16-bit timer/counter
- Up/down auto-reload
- Counter function of external pulse
- Capture
- Compare

## MAXQ7666

Note: The  MAXQ7666  does  not  have  secondary  timer I/Os  (such  as  T0B  and  T1B)  that  are  present  in  some other MAXQ products.

## 16-Bit x 16-Bit Hardware Multiplier

A hardware multiplier supports high-speed multiplications. The multiplier completes a 16-bit x 16-bit multiplication in a  single  clock  cycle  and  contains  a  48-bit  accumulator that requires one more cycle. The multiplier is a peripheral that performs seven different multiplication operations:

Figure 9. 16-Bit Hardware Multiplier Functional Diagram

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

- Unsigned 16-bit multiplication (one cycle)
- Unsigned 16-bit multiplication and accumulation (two cycles)
- Unsigned 16-bit multiplication and subtraction (twocycles)
- Signed 16-bit multiplication (one cycle)
- Signed 16-bit multiplication and negate (one cycle)
- Signed 16-bit multiplication and accumulation (two cycles)
- Signed 16-bit multiplication and subtraction (two cycles)

Figure 9 illustrates the simplified hardware multiplier cir -cuitry.

## CAN Interface Bus

The  MAXQ7666  CAN  controller  fully  complies  with  the CAN 2.0B specification.

The μC interface to the CAN controller utilizes two groups of registers. To simplify the software associated with the operation of the CAN controllers, most of the global CAN status  and  controls  as  well  as  the  individual  message center control/status registers are located in the peripheral  register  map.  The  remaining  registers  associated with  the  data  identification,  identification  masks,  format, and data are located in a dual port memory to allow the CAN controller and the processor access to the required functions. The CAN controller directly accesses the dual port  memory.  A  dedicated  interface  supports  dual  port memory accessing by the processor through the CAN 0 data pointer (C0DP) and the CAN 0 data buffer (C0DB) special function registers.

## MAXQ7666

## CAN Functional Description

The basic functions covered by the CAN controller include the use of 11-bit standard or 29-bit extended acceptance identi -fiers,  as  programmed  by  the  μC  for  each  message  center, as shown in Figure 10. The CAN unit stores up to 15 mes -sages, with the standard 8-byte data field in each message.

Each of the first 14 message centers is programmable in either transmit or receive mode. Message center 15 is a receive-only message center with a buffer FIFO arrangement to help prevent the inadvertent loss of data when the

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

μC is busy and is not allowed time to retrieve the incoming message prior to the acceptance of a second message into message center 15. Message center 15 also utilizes an  independent  set  of  mask  registers  and  identification registers, only applied once an incoming message has not been accepted by any of the first 14 message centers. A second filter test is also supported for all message centers (1-15)  to  allow  the  CAN  controller  to  use  two  separate 8-bit  media  masks  and  media  arbitration  fields  to  verify the contents of the first 2 bytes of data of each incoming message, before accepting an incoming message. This

Figure 10. CAN 0 Controller Block Diagram

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 11a. UART Synchronous Mode (Mode 0)

<!-- image -->

feature allows the CAN unit to directly support the use of higher CAN protocols, which make use of the first and/ or second byte of data as a part of the acceptance layer for storing incoming messages. Program each message center independently to perform testing of the incoming data with or without the use of the global masks.

Global controls and status registers in the CAN unit allow the μC to evaluate error messages, validate new data and the location of such data, establish the bus timing for the CAN bus, establish the identification mask bits, and verify the source of individual messages. In addition, each mes -sage center is individually  equipped  with  the  necessary status and controls to establish directions, interrupt gen -eration, identification mode (standard or extended), data field  size,  data  status,  automatic  remote  frame  request and acknowledgment, and masked or nonmasked identi -fication acceptance testing.

## UART Interface

Use  the  8051-style  universal  synchronous/asynchro -nous  receiver/transmitter  (UART)  capable  of  interfacing with  a  LIN  transceiver  for  serial  interfacing.  Figure  11a shows  the  UART  block  diagram  in  synchronous  mode and Figure  11b  shows  asynchronous  mode. The  UART allows the device to conveniently communicate with other RS-232  interface-enabled  devices,  as  well  as  PCs  and serial modems when paired with an external RS-232 line driver/receiver. The UART can detect framing errors and indicate the condition through a user-accessible software bit. The time base of the serial port is derived from either a division of the system clock or the dedicated baud clock generator. The UART is capable of supporting LIN pro -tocol implementation in software when using one of the timers  for  autobaud  detection.  Table  1  summarizes  the operating  characteristics  as  well  as  the  maximum  baud rate of each mode. Refer to the MAXQ7665/MAXQ7666 User's Guide for detailed UART information.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 11b. UART Asynchronous Mode (Mode 1)

<!-- image -->

## JTAG Interface Bus

The joint test action group (JTAG) IEEE 1149.1 standard defines  a  unique  method  for  in-circuit  testing  and  programming.  The  MAXQ7666  conforms  to  this  standard, implementing  an  external  test  access  port  (TAP)  and internal  TAP  controller  for  communication  with  a  JTAG bus master, such as an automatic test equipment (ATE) system. For detailed information on the TAP and TAP con -troller, refer to IEEE Standard 1149.1 on the IEEE website at http://standards.ieee.org. The JTAG on the MAXQ7666

is  used  for  in-circuit  emulation  and  debug  support,  but does not support boundary scan test capability. Disable the JTAG function after powerup before normal operation.

The  TAP  controller  communicates  synchronously  with the  host  system  (bus  master)  through  four  digital  I/O pins: test mode select (TMS), test clock (TCK), test data input  (TDI),  and  test  data  output  (TDO).  The  internal TAP  module  consists  of  several  shift  registers  and  a TAP controller (see Figure 12). The shift registers serve

## Table 1. UART Operating Characteristics and Mode Baud Rate

| MODE   | TYPE         | BAUD CLOCK      | START BITS   | DATA BITS   | STOP BITS   | MAX BAUD RATE AT 8MHz   |
|--------|--------------|-----------------|--------------|-------------|-------------|-------------------------|
| Mode 0 | Synchronous  | 4 or 12 clock   | N/A          | 8           | N/A         | 2Mbps                   |
| Mode 1 | Asynchronous | Baud generation | 1            | 8           | 1           | 250kbps                 |
| Mode 2 | Asynchronous | 32 or 64 clock  | 1            | 8 + 1       | 1           | 250kbps                 |
| Mode 3 | Asynchronous | Baud generation | 1            | 8 + 1       | 1           | 250kbps                 |

## MAXQ7666

as  transmit-and-receive  data  buffers  for  a  debugger. From  a  JTAG  perspective,  shift  registers  are  userde -fined  optional  data  registers.  The  bypass  register  and the  instruction  register,  for  example,  are  realized  as  a set  of  shift-register-based  elements  connected  in  parallel between a common serial input (TDI) and a common serial  output  (TDO).  The  instruction  register,  through the  TAP  controller,  selects  one  of  the  registers  to  form an active serial path. Maintain the maximum TCK clock frequency to below 1/8 of the system clock frequency for proper operation.

The following four digital I/Os form the TAP interface:

- TDO-Serial  output  signal  for  test  instruction  and data.  Data  transitions  on  the  falling  edge  of  TCK.

Figure 12. JTAG Interface Block Diagram

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

TDO idles high when inactive. TDO serially transfers internal data to the external host. Data transfers least significant bit first.

- TDI-Serial input signal for test instruction and data. Transition data on the rising edge of TCK. TDI pulls high  when  unconnected. TDI  serially  transfers  data from the external host to the internal TAP module shift registers. Data transfers least significant bit first.
- TCK-Serial clock for the test logic. When TCK stops at  0,  storage  elements  in  the  test  logic  must  retain their data indefinitely. Force TCK high when inactive

## MAXQ7666

- TMS-Test Mode Selection. The rising edge of TCK samples the test signal at TMS. The TAP controller decodes the test signal at TMS to control the test operation. Force TMS high when inactive.

## General-Purpose Digital I/Os

The MAXQ7666 provides eight general-purpose digital I/ Os (GPIOs). All GPIOs have an additional special function (SF), such as a timer input/output, or TAP signal for JTAG communication. For example, the state of P0.6/T0 can be programmed to depend on timer channel 0 logic. When programmed as a port, each I/O is configurable for highimpedance or weak pullup to DV DDIO . At power-up, each GPIO is configured as an input with pullups to DV DDIO . In addition, each GPIO can cause an externally triggered interrupt  on  falling  or  rising  edges.  Any  externally  trig -gered interrupt can wake up the device from stop mode.

The data input/output direction in a port is independently controlled  by  the  port  direction  register  (PD).  Each  I/O within  the  port  is  individually  set  as  an  output  or  input. The port output register (PO) contains the current state of the logic output buffers. When an I/O is configured as an output, writing to the PO register controls the output logic  state.  Reading  the  PO  register  shows  the  current state of the output buffers, independent of the data direc -

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

tion. The port input register (PI) is a readonly register that always reflects the logic state of the I/Os. When an I/O is configured as an input, writing to the PO register enables/ disables  the  pullup  resistor.  Refer  to  the MAXQ7665/ MAXQ7666 User's Guide for more detailed information.

## Port Characteristics

The  MAXQ7666  contains  one  GPIO  port  (P0).  It  is  a bidirectional  8-bit  I/O  port,  which  contains  the  following features:

- Schmitt trigger input circuitry with software-selectable high-impedance or weak pullup to DVDDIO
- Software-selectable  push-pull  CMOS  output  drivers capable of sinking and sourcing 1.6mA
- Software-selectable open-drain output drivers capable of sinking 1.6mA
- Falling or rising edge interrupt capability
- All I/Os contain an additional special function, such as a logic input/output for a timer channel. Selecting an I/O for a special function alters the port characteristics of that I/O (refer to the MAXQ7665/MAXQ7666 User's Guide for more details). Figure 13 illustrates the func -tional blocks of an I/O.

Figure 13. Digital I/O Circuitry

<!-- image -->

## MAXQ7666

## MAXQ Core Architecture

The  MAXQ7666  is  structured  on  a  highly  advanced, accumulator-based, 16-bit RISC architecture. Fetch and execution operations complete in one cycle without pipe -lining,  because  the  instruction  contains  both  the  opera -tion code and data. The result is a streamlined 8 million instructions-per-second (MIPS) μC.

A  16-level  hardware  stack  supports  the  highly  efficient core, enabling fast subroutine calling and task switching. Manipulate data quickly and efficiently with three internal data pointers. Multiple data pointers allow more than one function to access data memory without having to save and  restore  data  pointers  each  time.  The  data  pointers automatically increment or decrement following an operation, eliminating the need for software intervention. As a result, application speed is greatly increased.

## Instruction Set

The  instruction  set  is  composed  of  fixed-length,  16-bit instructions that operate on registers and memory locations.  The  highly  orthogonal  instruction  set  allows  arith -metic and logical operations to use any register along with the  accumulator.  Special-function  registers  (also  called peripheral registers) control the peripherals and are subdivided into register modules.

The  architecture  is  transport-triggered.  Writes  or  reads from  certain  register  locations  potentially  cause  side effects. These side effects form the basis for the higher level operation codes defined by the assembler, such as ADDC, OR, JUMP, etc. The operation codes are imple -mented  as  MOVE  instructions  between  certain  register locations, while the assembler handles the encoding.

## Memory Organization

The MAXQ7666 incorporates several memory areas:

- 8KB (4K x 16) utility ROM
- 16KB (8K x 16) program flash memory for program storage

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

- 256B (128 x 16) data flash memory
- 512 bytes (256 x 16) of SRAM for storage of tempo -rary variables
- 16-level stack memory for storage of program return addresses and general-purpose use

The memory is arranged by default in a Harvard architecture,  with  separate  address  spaces  for  program  and data memory (see Figure 14). A special mode allows data memory  mapping  into  program  space,  permitting  code execution from data memory. Another mode allows pro -gram memory mapping into data space, permitting access to code constants as data memory.

The  flash  memory  allows  reprogramming  the  devices, eliminating  the  expense  of  throwing  away  one-time programmable  devices  during  development  and  field upgrades  (see  Figure  15  for  the  flash  memory  sector maps).  Password  protect  flash  memory  with  a  16-word key to deny access to program memory by unauthorized individuals.

A  pseudo-Von Neumann memory map places the utility ROM, code, and data memory into a single contiguous memory map. This is useful for applications that require dynamic  program  modification  or  unique  memory  configurations.

## Stack Memory

A 16-bit-wide x 16 deep internal hardware stack provides storage  for  program  return  addresses  and  generalpurpose use. The stack is used automatically by the pro -cessor when the CALL, RET, and RETI instructions are executed and interrupts serviced. The stack also explicitly stores and retrieves data by using the PUSH, POP, and POPI instructions.

On reset, the stack pointer, SP, initializes to the top of the stack  (0Fh).  The  CALL,  PUSH,  and  interrupt-vectoring operations increment SP, then store a value at the location pointed to by SP. The RET, RETI, POP, and POPI opera -tions retrieve the value at SP and then decrement SP.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 14. MAXQ7666 Memory Map

<!-- image -->

## Utility ROM

The utility ROM is an 8KB (4K x 16) block of internal ROM memory that defaults to a starting address of 8000h. The utility ROM consists of subroutines called from application software. These include:

- In-system programming (bootstrap loader) over JTAG
- In-circuit debug routines
- User-callable  routines  for  in-application  flash  pro -gramming and fast table lookup

Following any reset, execution begins in the utility ROM. The  ROM  software  determines  whether  the  program execution  should  immediately  jump  to  location  0000h, the start  of  user-application  code,  or  to  one  of  the  spe -cial routines mentioned. Access routines within the utility ROM as subroutines  by  the  application  software.  More information on the utility ROM contents is contained in the MAXQ7665/MAXQ7666 User's Guide .

Some  applications  require  protection  against  unauthorized viewing of program code memory. For these appli -cations,  access  to  in-system  programming,  inapplica -tion  programming,  or  in-circuit  debugging  functions  is prohibited until a password is supplied. The password is defined as the 16 words of physical program memory at addresses 0010h to 001Fh.

A single password lock (PWL) bit is implemented in the SC register. When the PWL is set to one (POR default), the password is required to access the utility ROM, includ -ing in-circuit debug and in-system programming routines that  allow  reading  or  writing  of  internal  memory.  When PWL is cleared to zero, these utilities are fully accessible without the password. The password is automatically set to all ones following a mass erase. When the password is all ones or all zeros, the PWL bit clears to zero.

## MAXQ7666

## Programming

Program the flash memory of the μC using two different methods: in-system programming and in-application pro -gramming. Both methods afford great flexibility in system design as well as reduce the life-cycle cost of the embedded system. Password protect these features to prevent unauthorized access to program memory.

## In-System Programming

An  internal  bootstrap  loader  programs  the  device  over a simple JTAG interface. This allows in-system software upgrading, eliminating the need for costly hardware retro -fit  when updates are required. Remote software upload -ing  of  physically  inaccessible  applications  are  possible. After a power-up or reset, the JTAG interface is active and loading  the  TAP  with  the  system  programming  instruction invokes the bootstrap loader. Setting the SPE bit to 1  during  reset  through  the  JTAG  interface  executes  the bootstrap-loader-mode  program  that  resides  in  the  utility ROM. When programming is complete, the bootstrap loader can clear the SPE bit and reset the device, allow -ing the device to bypass the utility ROM and begin execu -tion of the application software.

The following bootstrap loader functions are supported:

- Load
- Dump
- CRC
- Verify
- Erase

## In-Application Programming

The in-application programming feature allows the μC to modify its own flash program memory while simultaneously executing its application software. This allows on-the-fly software updates in mission-critical applications that cannot afford downtime. Alternatively, it allows the application to develop custom loader software that can operate under the  control  of  the  application  software.  The  utility  ROM contains  user-accessible  flash  programming  functions that  erase  and  program  flash  memory.  These  functions are  described  in  detail  in  the MAXQ7665/MAXQ7666 User's Guide for this device.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Program/Data Flash and Data RAM Memory

The MAXQ7666 provides the following memory configurations (see Figure 15):

- 16KB (8K x 16) of program flash
- Up to 512 bytes (256 x 16) of data flash
- 512 bytes (256 x 16) of data RAM

The program flash is divided into 256 pages. Each page contains  64  bytes  (32  x  16-bit  words).  Program  flash  is erased four pages (128 x 16 = 256 bytes) at a time, and must be programmed a full page (32 x 16 = 64 bytes) at a time from the application code (see Figure 17). Both erase and programming operations are performed by calling builtin utility ROM functions programFlashErasePage and pro -gramFlashWritePage (see Figure 19). When programmed over JTAG, the built-in boot loader supports commands to program flash two pages (128 bytes) at a time.

The  data  flash  is  divided  into  256  pages.  Each  page contains  2  bytes  (1  x  16-bit  word). A  typical  data  flash configuration is erased two pages (2 x 16 = 4 bytes) at a time using the utility ROM function dataFlashPageErase, and is written one page/word (1 x 16-bit word = 2 bytes) at a time using the utility ROM function dataFlashWrite. Itis also possible to write and read from only even data flash addresses using the utility ROM functions dataFlashWri -teEven  and  dataFlashReadEven.  The  even  functions make it possible to work around the asymmetric 'erase two,  write  one'  page  behavior  by  writing  to  only  even addresses.  By  putting  data  into  alternate  locations,  the intrinsic  two-page  erase  function  is  made  to  look  like  a single word erase at the cost of halving the available storage. Figure 16 shows the data flash memory organization for one page and two page write/erase operations. Refer to  the MAXQ7665/MAXQ7666 User's Guide for  all  possible configurations.

Note that the data flash is under application control only through the utility ROM functions discussed in this section and is not available when programmed over JTAG.

## Register Set

Most  functions  of  the  device  are  controlled  by  sets  of registers.  These  registers  provide  a  working  space  for memory operations as well as configuring and addressing  peripheral  registers  on  the  device.  Registers  are divided  into  two  major  types:  system  registers  and peripheral  registers.  The  common  register  set,  also known  as  the  system  registers,  includes  the  ALU,

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 15. Memory Organization

<!-- image -->

## MAXQ7666

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 16. Two of the Possible Data Flash Organizations

<!-- image -->

Figure 17. Program Flash Organization

<!-- image -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

Figure 18. Memory Map (Executing from Program Flash)

<!-- image -->

Figure 19. Memory Map (Executing from Utility ROM)

<!-- image -->

## MAXQ7666

accumulator registers, data pointers, interrupt vectors and control, and stack pointer. The peripheral registers define additional functionality that may be included by different products based on the MAXQ architecture. This function -ality is broken up into discrete modules so that only the features required for a given product need to be included. Tables 2 and 4 show the MAXQ7666 register set. Tables 3 and 5 show the bit functions and reset values.

Table 2. System Register Map

| REGISTER INDEX   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   |
|------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| REGISTER INDEX   | AP (8h)                        | A (9h)                         | PFX (Bh)                       | IP (Ch)                        | SP (Dh)                        | DPC (Eh)                       | DP (Fh)                        |
| 0h               | AP                             | A[0]                           | PFX[0]                         | IP                             | -                              | -                              | -                              |
| 1h               | APC                            | A[1]                           | PFX[1]                         | -                              | SP                             | -                              | -                              |
| 2h               | -                              | A[2]                           | PFX[2]                         | -                              | IV                             | -                              | -                              |
| 3h               | -                              | A[3]                           | PFX[3]                         | -                              | -                              | OFFS                           | DP0                            |
| 4h               | PSF                            | A[4]                           | PFX[4]                         | -                              | -                              | DPC                            | -                              |
| 5h               | IC                             | A[5]                           | PFX[5]                         | -                              | -                              | GR                             | -                              |
| 6h               | IMR                            | A[6]                           | PFX[6]                         | -                              | LC0                            | GRL                            | -                              |
| 7h               | -                              | A[7]                           | PFX[7]                         | -                              | LC1                            | BP                             | DP1                            |
| 8h               | SC                             | A[8]                           |                                | -                              | -                              | GRS                            | -                              |
| 9h               | -                              | A[9]                           | -                              | -                              | -                              | GRH                            | -                              |
| Ah               | -                              | A[10]                          | -                              | -                              | -                              | GRXL                           | -                              |
| Bh               | IIR                            | A[11]                          | -                              | -                              | -                              | FP                             | -                              |
| Ch               | -                              | A[12]                          | -                              | -                              | -                              | -                              | -                              |
| Dh               | -                              | A[13]                          | -                              | -                              | -                              | -                              | -                              |
| Eh               | CKCN                           | A[14]                          | -                              | -                              | -                              | -                              | -                              |
| Fh               | WDCN                           | A[15]                          | -                              | -                              | -                              | -                              | -                              |

Note: Names that appear in italics indicate that all bits of a register are read-only. Names that appear in bold indicate that a register is 16 bits wide.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Power Management

Power consumption reaches its minimum in stop mode. In this mode, the external oscillator, internal RC oscillator, system clock, and all processing activity is halted. Stop mode is exited when an enabled external interrupt input is triggered or an external reset signal is applied to RESET . Upon  exiting  stop  mode,  the  μC  waits  for  the  external high-frequency crystal to complete its warmup period, or starts execution immediately from its internal RC oscillator while the warmup period completes.

## MAXQ7666

## Interrupts

Multiple interrupt sources quickly respond to internal and external  events.  The  MAXQ  architecture  uses  a  single interrupt vector (IV), single interrupt-service routine (ISR) design. Enable interrupts globally, individually, or by mod -ule. When an interrupt condition occurs, its individual flag is set, even if the interrupt source is disabled at the local, module,  or  global  level.  Clear  interrupt  flags  within  the user-interrupt  routine  to  avoid  repeated  false  interrupts from the same source. Application software must ensure a delay between the write to the flag and the RETI instruc -tion to allow time for the interrupt hardware to remove the internal  interrupt  condition. Asynchronous  interrupt  flags require a one-instruction delay and synchronous interrupt flags require a twoinstruction delay.

When an enabled interrupt  is  detected,  software  jumps to a user-programmable interrupt vector location. The IV register  defaults  to  0000h  on  reset  or  power-up,  so  if  it is  not  changed to a different address, the user program must determine whether a jump to 0000h came from a reset or interrupt source.

Once software control transfers to the ISR, use the inter -rupt  identification  register  (IIR)  to  determine  if  a  system register  or  peripheral  register  was  the  source  of  the interrupt. The specified module can then be interrogated for  the  specific  interrupt  source  and  software  can  take appropriate  action.  The  following  interrupt  sources  are available.

- Watchdog interrupt
- External interrupts 0 to 7
- Serial port 0 receive and transmit interrupts
- Timer 0 low compare, low overflow, capture/com -pare, and overflow interrupts

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

- Timer 1 low compare, low overflow, capture/com -pare, and overflow interrupts
- Timer 2 low compare, low overflow, and overflow interrupts
- CAN0 receive and transmit interrupts and a change in CAN0 status register interrupt
- ADC data ready and overrun interrupts
- Digital and I/O voltage brownout interrupts
- Crystal oscillator failure interrupt

## Reset Sources

Several reset sources are provided for μC control. Although code  execution  is  halted  in  the  reset  state,  the  crystal oscillator, and the internal RC oscillator continue to oscil -late. The crystal oscillator is turned off by a POR, but not by other reset sources. Internal resets such as the poweron and watchdog resets assert the RESET output low.

## Power-On Reset (POR)

An internal POR circuit enhances system reliability. This circuit  forces  the  device  to  perform  a  POR  whenever  a rising voltage on DVDD climbs above the POR threshold level of 2.7V. At this point the following events occur:

- All registers and circuits enter the default state
- The POR flag (WDCN.POR) is set to indicate if the source of the reset was a loss of power
- The internal RC oscillator becomes the clock source
- Code execution begins at location 8000h

## Watchdog Timer Reset

The  watchdog  timer  functions  are  described  in  the MAXQ7665/MAXQ7666 User's Guide . Execution resumes at location 8000h following a watchdog timer reset.

## MAXQ7666

## External System Reset

Assert  the  external RESET input  low  to  enter  the  reset state.  The  external  reset  functions  are  described  in the MAXQ7665/MAXQ7666  User's  Guide .  Execution resumes at location 8000h after RESET is released.

## Crystal Selection

The  MAXQ7666  requires  a  crystal  with  the  following specifications:

Frequency: 8MHz

C

LOAD: 6pF (min)

Drive level: 5μW (min)

Series resonance resistance: 300Ω max

Note: Series  resonance  resistance  is  the  resistance observed  when  the  resonator  is  in  the  series  resonant condition. This is a parameter often stated by quartz crys -tal vendors and is called R1. When a resonator is used in the parallel resonant mode with an external load capaci -tance, as is the case with the MAXQ7666 oscillator circuit, the effective resistance is sometimes stated. This effec -tive resistance at the loaded frequency of oscillation is:

<!-- formula-not-decoded -->

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

For typical C O  and C LOAD values, the effective resistance can be greater than R1 by a factor of 2.

## Development and Technical Support

A  variety  of  highly  versatile,  affordably  priced  develop -ment tools for this μC are available from Maxim and thirdparty suppliers. These tools include:

- Compilers
- Evaluation kits
- JTAG-to-serial converters for programming and debugging

A list of some development-tool vendors can be found at www.maximintegrated.com/microcontrollers .

Technical support is available through email at maxq.support@maximintegrated.com.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## Table 3. System Register Bit Functions and Reset Values

| REGISTER       | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT          | REGISTER BIT        | REGISTER BIT        | REGISTER BIT          | REGISTER BIT          | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        | REGISTER BIT        |
|----------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|-----------------------|---------------------|---------------------|-----------------------|-----------------------|---------------------|---------------------|---------------------|---------------------|
|                | 15                  | 14                  | 13                  | 12                  | 11                  | 10                  | 9                   | 8                   | 7                     | 6                   | 5                   | 4                     | 3                     | 2                   | 1                   | 0                   | 0                   |
|                | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits)   | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits)   | - - - - AP (4 Bits)   | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) | - - - - AP (4 Bits) |
| AP             |                     |                     |                     |                     |                     | 0                   |                     |                     | 0                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
|                |                     |                     |                     |                     |                     |                     |                     |                     | CLR                   | IDS                 | -                   | -                     | -                     | MOD2                | MOD1                | MOD0                | MOD0                |
| APC            |                     |                     |                     |                     |                     |                     |                     |                     | 0                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
|                |                     |                     |                     |                     |                     |                     |                     |                     | Z                     | S                   | -                   | GPF1                  | GPF0                  | OV                  | C                   | E                   | E                   |
| PSF            |                     |                     |                     |                     |                     |                     |                     |                     | 1                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
| IC             |                     |                     |                     |                     |                     |                     |                     |                     | -                     | -                   | CGDS                | -                     | -                     | -                   | INS                 | IGE 0               | IGE 0               |
|                |                     |                     |                     |                     |                     |                     |                     |                     | 0 IMS                 | 0 -                 | 0 IM5               | 0 IM4                 | 0 IM3                 | 0 IM2               | IM1                 | 0 IM0               | 0 IM0               |
| IMR            |                     |                     |                     |                     |                     |                     |                     |                     | 0                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
| SC             |                     |                     |                     |                     |                     |                     |                     |                     | TAP 1                 | - 0                 | CDA1 0 II5          | CDA0 0                | UPA 0                 | ROD 0               | PWL s*              | - 0                 | - 0                 |
| IIR            |                     |                     |                     |                     |                     |                     |                     |                     | IIS 0                 | - 0 -               | II4 0 0 STOP 0      |                       | II3 0                 | II2 0               | II1 0               | II0 0               | CD0                 |
| CKCN           |                     |                     |                     |                     |                     |                     |                     |                     | XT s* POR             | RGMD 0 s* EWDI WD1  | WD0 0               |                       | SWB 0 WDIF            | - 0 WTRF            | - 0 EWT             | 1 RWT               | 1 RWT               |
| WDCN           | 0                   | 0                   | 0                   |                     |                     |                     | 0                   | A[n]                | s* (16 Bits)          | s*                  | 0                   |                       | 0                     | s*                  | s*                  | 0                   | 0                   |
| A[n] (0..15)   |                     |                     |                     | 0                   | 0                   | 0                   |                     | 0 PFX[n]            | 0                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
| PFX[n] (0..15) | 0                   | 0                   | 0                   | 0                   | 0                   |                     | 0                   | 0 IP                | (16 Bits) 0           | 0                   | 0                   | 0 0                   | 0                     | 0 SP                | 0                   | 0 0                 | 0 0                 |
| IP SP          | 1 -                 | 0 -                 | 0 -                 | 0 -                 | 0 -                 | 0 -                 | 0 -                 | 0 -                 | (16 Bits) 0 -         | 0 -                 | 0 -                 | -                     | 0                     | 0                   | (4                  | 0 1                 | 0 1                 |
| IV LC[0]       | 0                   | 0                   | 0                   | 0                   | 0 0 0               | 0 0                 | 0 0                 | 0 IV 0              | 0 (16 Bits) 0         | 0 0                 | 0 0                 | 0 0                   | 1 0                   | 1 0                 | Bits) 1             | 0                   | 0                   |
| LC[1]          | 0                   | 0 0                 | 0 0                 | 0                   | 0                   | 0 0                 | 0                   | LC[0] 0             | (16 Bits) 0 (16 Bits) | 0 0                 | 0 0                 | 0 0                   | 0 0                   | 0 0                 | 0 0                 | 0 0                 | 0                   |
| OFFS DPC GR    | 0 0 - 0 GR.15       | 0 -                 | 0                   | 0 0                 | - 0 GR.11           | - 0                 | 0 - 0               | LC[1] 0 - 0 GR.8    | 0 0 - 0 GR.7          | 0 - 0 GR.6 0        | 0 - 0 GR.5 0        | OFFS (8 0 WBS2 1 GR.4 | Bits) 0 WBS1 1 GR.3 0 | 0 WBS0 1 GR.2       | 0 GR.1              | 0 SDPS1 SDPS0 0     | 0                   |
| GRL BP GRS     | 0                   | 0 GR.14 0           | 0 GR.13             | 0                   | 0                   |                     | 0                   | 0                   | GR.7 0 (16 Bits)      | GR.14 0 GR.6        | 0                   | 0                     | GR.3                  | 0 GR.2              | GR.1 0              | GR.0 0              | GR.0 0              |
|                |                     |                     | 0                   |                     |                     |                     |                     | 0 GR.0 0            | 0                     |                     | GR.5                | GR.12 0               | GR.11 0               | 0 GR.10             | 0 GR.9              | 0                   | 0                   |
|                |                     |                     | -                   | - 0                 |                     | 0                   | 0 GR.1 0            |                     |                       | 0                   |                     |                       | GR.11                 |                     |                     | 0                   | 0                   |
| GRXL           | 0                   |                     |                     | GR.12               | 0                   | GR.10 0             |                     |                     |                       |                     |                     | 0 GR.4                | 0                     | 0                   |                     | GR.0                | GR.0                |
|                |                     |                     |                     |                     |                     |                     | GR.9                |                     | (16 Bits) 0 GR.15     |                     |                     | 0 GR.4                | 0                     |                     | 0                   |                     |                     |
| GRH            | GR.7 0              |                     |                     |                     |                     | GR.2                |                     |                     | 0 GR.15               |                     | 0 GR.13             | 0                     |                       |                     |                     |                     |                     |
|                |                     | GR.6 0              |                     |                     | GR.3                | 0                   |                     |                     |                       |                     |                     |                       |                       | 0                   | 0 GR.9              | GR.8 0              | GR.8 0              |
|                |                     |                     | 0 GR.5              |                     |                     |                     |                     |                     |                       |                     | GR.13               |                       | 0                     |                     |                     |                     |                     |
|                |                     | 0                   |                     |                     |                     |                     |                     |                     |                       | 0 GR.14             | 0                   |                       |                       |                     |                     |                     |                     |
|                |                     |                     |                     |                     |                     |                     |                     | BP                  | 0 GR.7 0              | GR.6 0              | GR.5 0              |                       |                       |                     |                     |                     |                     |
|                |                     |                     |                     | 0                   |                     |                     |                     |                     |                       |                     |                     |                       |                       |                     |                     |                     |                     |
|                |                     |                     | 0                   | GR.4 0              | 0                   |                     |                     |                     |                       | 0                   |                     |                       |                       |                     |                     | GR.8                | GR.8                |
|                |                     |                     |                     |                     |                     |                     |                     |                     |                       |                     |                     |                       |                       |                     |                     | 0                   | 0                   |
|                | GR.7 0              |                     |                     | GR.7                |                     |                     |                     |                     |                       |                     |                     | GR.12                 |                       | GR.10               |                     | GR.0 0              | GR.0 0              |
|                |                     | GR.7 0              | GR.7                |                     | GR.7                |                     |                     |                     |                       |                     |                     |                       | GR.3                  | 0                   | 0 GR.1              |                     |                     |
|                |                     |                     | 0                   | 0                   | 0                   |                     |                     | GR.7                |                       |                     | 0                   |                       |                       | GR.2                | 0                   |                     |                     |
|                |                     |                     |                     |                     |                     | GR.7                | GR.7                | 0                   |                       |                     |                     | 0                     |                       | 0                   |                     |                     |                     |
|                |                     |                     |                     |                     |                     | 0                   | 0                   |                     |                       |                     | 0                   |                       |                       |                     |                     |                     |                     |
| FP             | 0                   |                     |                     |                     |                     |                     |                     | FP                  | 0                     |                     |                     |                       |                       |                     |                     | 0                   | 0                   |
| DP[0]          | 0                   | 0                   | 0                   | 0                   | 0                   | 0                   | 0                   | 0 DP[0]             | (16 Bits)             | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   |                     |                     |
|                |                     | 0                   | 0                   |                     | 0                   | 0                   | 0                   |                     | 0                     | 0                   | 0                   | 0                     | 0                     | 0                   | 0                   | 0                   | 0                   |
|                |                     |                     | 0                   |                     |                     |                     |                     | 0                   |                       |                     |                     |                       |                       |                     |                     |                     |                     |
|                |                     |                     |                     |                     |                     |                     |                     | DP[1]               | (16 Bits)             |                     |                     |                       |                       |                     |                     |                     |                     |
| DP[1]          | 0                   |                     | 0                   |                     |                     | 0                   |                     |                     | 0                     | 0                   | 0                   | 0                     |                       | 0                   | 0                   | 0                   | 0                   |
|                |                     | 0                   |                     | 0                   | 0                   |                     | 0                   | 0                   |                       |                     | 0                   |                       |                       |                     |                     |                     |                     |

* Bits indicated by an 's' are only affected by a POR and not by other forms of reset. These bits are set to 0 after a POR. Refer to the MAXQ7665/MAXQ7666 User's Guide for more information.

## MAXQ76

Table 4. Peripheral Register Map

| REGISTER INDEX   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   |
|------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| REGISTER INDEX   | M0 (0h)                        | M1 (1h)                        | M2 (2h)                        | M3 (3h)                        | M4 (4h)                        | M5 (5h)                        |
| 0h               | PO0                            | MCNT                           | T2CNA0                         | T2CNA2                         | C0C                            | VMC                            |
| 1h               | -                              | MA                             | T2H0                           | T2H2                           | C0S                            | APE                            |
| 2h               | -                              | MB                             | T2RH0                          | T2RH2                          | C0IR                           | ACNT                           |
| 3h               | EIF0                           | MC2                            | T2CH0                          | T2CH2                          | C0TE                           | DCNT                           |
| 4h               | -                              | MC1                            | T2CNA1                         | -                              | C0RE                           | DACI                           |
| 5h               | -                              | MC0                            | T2H1                           | -                              | COR                            | -                              |
| 6h               | -                              | -                              | T2RH1                          | -                              | C0DP                           | DACO                           |
| 7h               | SBUF0                          | -                              | T2CH1                          | -                              | C0DB                           | -                              |
| 8h               | PI0                            | -                              | T2BNB0                         | T2CNB2                         | C0RMS                          | ADCD                           |
| 9h               | -                              | -                              | T2V0                           | T2V2                           | C0TMA                          | TSO                            |
| Ah               | -                              | FCNTL                          | T2R0                           | T2R2                           | -                              | AIE                            |
| Bh               | EIE0                           | FDATA                          | T2C0                           | T2C2                           | -                              | ASR                            |
| Ch               | -                              | MC1R                           | T2CNB1                         | -                              | -                              | OSCC                           |
| Dh               | -                              | MC0R                           | T2V1                           | -                              | -                              | -                              |
| Eh               | -                              | -                              | T2R1                           | -                              | -                              | -                              |
| Fh               | -                              | -                              | T2C1                           | -                              | -                              | -                              |
| 10h              | PD0                            | -                              | T2CFG0                         | T2CFG2                         | -                              | -                              |
| 11h              | -                              | -                              | T2CFG1                         | -                              | C0M1C                          | -                              |
| 12h              | -                              | -                              | -                              | -                              | C0M2C                          | -                              |
| 13h              | EIES0                          | -                              | -                              | -                              | C0M3C                          | -                              |
| 14h              | -                              | -                              | -                              | -                              | C0M4C                          | -                              |
| 15h              | -                              | -                              | -                              | -                              | C0M5C                          | -                              |
| 16h              | -                              | -                              | -                              | -                              | C0M6C                          | -                              |
| 17h              | -                              | -                              | -                              | -                              | C0M7C                          | -                              |
| 18h              | -                              | -                              | ICDT0                          | -                              | C0M8C                          | -                              |
| 19h              | -                              | -                              | ICDT1                          | -                              | C0M9C                          | -                              |
| 1Ah              | -                              | -                              | ICDC                           | -                              | C0M10C                         | -                              |
| 1Bh              | -                              | -                              | ICDF                           | -                              | C0M11C                         | -                              |
| 1Ch              | -                              | Reserved                       | ICDB                           | -                              | C0M12C                         | -                              |
| 1Dh              | SCON0                          | -                              | ICDA                           | -                              | C0M13C                         | -                              |
| 1Eh              | SMD0                           | -                              | ICDD                           | -                              | C0M14C                         | -                              |
| 1Fh              | PR0                            | -                              | -                              | -                              | C0M15C                         | -                              |

Note:

Names that appear in bold indicate that the register is read-only.

## Table 5. Peripheral Register Bit Functions and Reset Values

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

| 0          | PO0.0        | 1     | IE0 0         | SBUF0.0   | 0        | PI0.0 ST   | EX0 0    | PD0.0 0   | IT0 0     | RI        | 0     | FEDE      | 0 PR0.0   | 0 SUS 0       | MA.0 0 MB.0            |               | 0 MC1.0      | MC2.0 0             | 0 MC0.0 0         | - 0 FDATA.          | 0               | 0 MC1R.0   | 0 MC0R.0   | 0 FADDR. 0   | 0 G2EN        | 0             | T2H0.0 0      | 0             | 0             | 0             | 0             | 0             | 0             | 0             | 0             |
|------------|--------------|-------|---------------|-----------|----------|------------|----------|-----------|-----------|-----------|-------|-----------|-----------|---------------|------------------------|---------------|--------------|---------------------|-------------------|---------------------|-----------------|------------|------------|--------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| 1          | PO0.1        | 1 IE1 | 0             | SBUF0.1   | 0 PI0.1  | ST         | EX1 0    | PD0.1 0   | IT1 0     | TI 0      |       | SMOD 0    | PR0.1 0   | MMAC 0 MA.1   | 0 MB.1 0               | MC2.1 0       |              | MC1.1 0 MC0.1       | 0 FC1 0 FDATA.    | 1 0 MC1R.1          | 0 MC0R.1        | 0 FADDR. 1 | 0 SS2      | 0            | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      | T2H0.1 0      |
| 2          | PO0.2        | 1     | IE2 0         | SBUF0.2   | 0 PI0.2  | ST EX2     | 0        | PD0.2 0   | IT2 0     | RB8       | 0 ESI | 0         | PR0.2 0   | MSUB 0        | MA.2 0 MB.2 0          | MC2.2 0 MC1.2 | 0            | MC0.2               | 0 FC2 0 FDATA. 2  | 0 MC1R.2 0 MC0R.2 0 | FADDR. 2        | 0 CPRL2    | 0          | T2H0.2 0     | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      | T2H0.2 0      |
| 3          | PO0.3        | 1     | IE3 0         | SBUF0.3   | 0 PI0.3  | ST EX3     | 0        | PD0.3     | 0 IT3     | 0 TB8     | 0     | -         | 0 PR0.3   | 0 OPCS 0      | MA.3 0 MB.3 0          | MC2.3         | 0            | MC1.3 0 MC0.3       | 0 DQ5 0 FDATA. 3  | 0 MC1R.3 0          | 0 FADDR.        | MC0R.3 3 0 | TR2        | 0            | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      | T2H0.3 0      |
| 4          | PO0.4        | 1     | IE4 0         | SBUF0.4   | 0 PI0.4  | ST         | EX4 0    | PD0.4     | 0 IT4     | 0 REN     | 0     | - 0       | PR0.4     | 0 SQU 0       | MA.4 0 MB.4            | 0             | MC2.4 0      | MC1.4 0 MC0.4       | 0 FBYP 0 FDATA. 4 | 0 MC1R.4            | 0 MC0R.4        | 0 FADDR.   | 4          | 0 TR2L 0     | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      | T2H0.4 0      |
|            | 5 PO0.5      | 1     | IE5 0         | SBUF0.5   | 0 PI0.5  | ST         | EX5 0    | PD0.5     | 0 IT5     | 0 SM2     | 0     | -         | 0 PR0.5   | 0 CLD 0       | MA.5 0 MB.5 0          | MC2.5 0       | MC1.5        | 0 MC0.5 0           | FINE 0 FDATA.     | 5 0 MC1R.5          | 0 MC0R.5        | 0 FADDR.   | 5          | 0 T2POL0     | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    | 0 T2H0.5 0    |
| 6          | PO0.6        | 1     | IE6 0         | SBUF0.6 0 | PI0.6    | ST         | EX6      | 0 PD0.6   | 0 IT6     | 0 SM1     | 0     | -         | 0 PR0.6   | 0 MCW 0       | MA.6 0 MB.6            | 0             | MC2.6        | 0 MC1.6 0           | 0 FERR 0          | FDATA. 6 0          | MC1R.6 0 MC0R.6 | 0 FADDR. 6 | 0          | T2OE0 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      | T2H0.6 0      |
| BIT 7      | PO0.7        | 1     | IE7 0         | SBUF0.7   | 0        | PI0.7 ST   | EX7 0    | PD0.7     | 0 IT7     | 0 SM0/FE  | 0     | -         | 0 PR0.7   | 0 OF 0        | MA.7 0                 | MB.7 0        | MC2.7 0      | MC1.7 0 MC0.7 MC0.6 | 0 FBUSY 1 FDATA.  | 7 0 MC1R.7          | 0 MC0R.7        | 0 FADDR. 7 | 0          | ET2 0        | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      | T2H0.7 0      |
| REGISTER 8 | -            | 0     | - 0           | -         | 0 -      | 0          | - 0      | - 0       | -         | 0 -       | 0     | - 0       | PR0.8     | 0 - 0         | MA.8 0 MB.8 0          | MC2.8         | 0 MC1.8      | 0 MC0.8             | 0 - 0 FDATA.      | 8 0                 | MC1R.8 0        | MC0R.8 0   | FADDR. 8   | 0 -          | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         | 0 - 0         |
| 9          | -            | 0     | - 0           | -         | 0 -      | 0          | - 0      | -         | 0 -       | 0 -       | 0     | -         | 0 PR0.9   | 0 - 0         | MA.9 0 MB.9            |               | 0 MC2.9      | 0 MC1.9 0 MC0.9     | 0 - 0 FDATA.      | 9 0                 | MC1R.9 0        | MC0R.9 0   | FADDR. 9   | 0            | 0 -           | -             | 0             |               |               |               |               |               |               |               |               |
| 10         | -            | 0     | - 0           | -         | 0 -      | 0          | - 0      | - 0       | -         | 0 -       | 0 -   | 0         | PR0.10    | 0 - 0         | MA.10 0 MB.10 0 MC2.10 | 0 MC1.10      | 0 MC0.10     | 0                   | 0 FDATA.1 0       | MC0R.10 0           | 0 0             | FADDR.1    | - 0 -      | - 0 -        | - 0 -         | - 0 -         | 0             | - 0 -         | - 0 -         | - 0 -         | - 0 -         | - 0 -         | - 0 -         | - 0 -         | - 0 -         |
| 11         | -            | 0     | - 0           | -         | 0 -      |            | -        | -         | 0 -       | -         | 0     | 0         |           | 0 -           | 0 MB.11                | MC2.11        | 0            | 0                   | -                 | 0 0                 | MC1R.10 0       | 0          | 1          | -            | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           |
|            |              |       |               |           |          | 0          | 0        |           |           | 0         |       | -         | PR0.11    | 0             | MA.11 0                | MC1.11        | MC0.11       | 0                   | - 0 FDATA.1 1     | MC1R.11             | MC0R.11         | FADDR.1    |            | 0            | 0             | 0             | 0             | 0             | 0             | 0             | 0             | 0             | 0             | 0             | 0             |
| 12         | -            | 0     | -             | 0 -       | 0 -      | 0          | - 0      | -         | 0 -       | 0 -       | 0     | -         | 0 PR0.12  | 0 - 0         | MA.12 0 MB.12          | 0 MC2.12      | 0 MC1.12     | 0 MC0.12            | 0 - 0 FDATA.1 2   | 0 MC1R.12 0         | MC0R.12 0       | FADDR.1 2  | 0          | - 0          | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           |
| 13         | -            | 0     | - 0           | -         | 0 -      | 0 -        | 0 -      | 0         | -         | 0 -       | 0     | - 0       |           | PR0.13 0 - 0  | MA.13 0 MB.13 0        | MC2.13        | 0 MC1.13 0   | MC0.13 0            | - 0 FDATA.1 3 0   | MC1R.13 0 MC0R.13   | 0               | FADDR.1    | 3 0        | - 0          | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           |
| 14         | -            | 0     | - 0           | -         | 0 -      | 0 -        | 0        | - 0       | -         | 0 -       | 0     | - 0       |           | PR0.14 0 - 0  | MA.14 0 MB.14          | 0             | MC2.14 0     | MC1.14 0 MC0.14     | 0 - 0 FDATA. 14   | 0 MC1R. 14 0        | MC0R.14 0       | FADDR. 14  | 0          | - 0          | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           | - 0           |
| 15         | -            | 0     | - 0           | -         | 0        | - 0        | - 0      | - 0       | -         | 0 -       | 0     | -         | 0 PR0.15  | 0 - 0         | MA.15 0 MB.15          | 0             | MC2.15 0     | MC1.15 0 MC0.15     | 0 - 0 FDATA. 15   | 0                   | MC1R.15 0       | MC0R.15 0  | FADDR. 15  | 0 -          | 0 -           | 0 -           | 0             | 0 -           | 0 -           | 0 -           | 0 -           | 0 -           | 0 -           | 0 -           | 0 -           |
|            | PO0 (M0, 0h) |       | EIF0 (M0, 3h) | SBUF0     | PI0      | (M0, 8h)   | EIE0     | PD0       | EIES0     | SCON0     | SMD0  | (M0, 1Eh) | PR0       | (M0, 1Fh)     | MB (M1, 2h)            | MC2           | MC0 (M1, 5h) | FCNTL (M1, Ah)      | FDATA (M1, Bh)    | MC1R                | (M1, Ch)        | MC0R       | FADDR      |              | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 | (M2, 0h) T2H0 |
| REGISTER   |              |       |               |           | (M0, 7h) |            | (M0, Bh) | (M0, 10h) | (M0, 13h) | (M0, 1Dh) |       |           |           | MCNT (M1, 0h) | MA (M1, 1h)            |               | (M1, 3h) MC1 | (M1, 4h)            |                   |                     |                 | (M1, Dh)   |            | (M1, 1Ch)    | T2CNA0        |               | (M2, 1h)      |               |               |               |               |               |               |               |               |

## Table 5. Peripheral Register Bit Functions and Reset Values (continued)

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

| 4 3 2 1 0    | T2RH0.2 T2RH0.1 T2RH0.0 0 0 0   | T2CH0.1 T2CH0.0 0 0 0 G2EN   | SS2 0 0 T2H1.1 T2H1.0   | 0 0 T2RH1.1 T2RH1.0   | 0 0 T2CH1.1 T2CH1.0 0 0   | TCC2 TC2L 0 0 T2V0.1 T2V0.0 0 T2R0.1 T2R0.0   | 0 0 T2C0.1 T2C0.0   | 0 0               | 0 TCC2 TC2L 0   | 0 T2V1.1 T2V1.0 0 T2R1.1 T2R1.0   | 0 0 T2C1.1 T2C1.0           | 0 0 CCF0              | 0 C/T2 0 0            | CCF0 C/T2 0 0 ICDT0.1 ICDT0.0 DB DB ICDT1.1 ICDT1.0 DB CMD1 DW   | DB CMD0 DW SPE TXC   | 0 0 ICDB.1 ICDB.0 0 0 ICDA.1 ICDA.0 0   | 0 ICDD.1 ICDD.0 0     | 0 SS2 G2EN 0    | 0 T2H2.1 T2H2.0 0   | 0 T2RH2.1   | T2RH2.0 0 0    | T2CH2.1 T2CH2.0 0 0   |
|--------------|---------------------------------|------------------------------|-------------------------|-----------------------|---------------------------|-----------------------------------------------|---------------------|-------------------|-----------------|-----------------------------------|-----------------------------|-----------------------|-----------------------|------------------------------------------------------------------|----------------------|-----------------------------------------|-----------------------|-----------------|---------------------|-------------|----------------|-----------------------|
|              |                                 | T2CH0.2                      | CPRL2 0 T2H1.2          | 0                     | T2RH1.2 0 T2CH1.2 0       | TF2L 0 T2V0.2 0                               | T2R0.2              | 0 T2C0.2          | 0 TF2L          | 0 T2V1.2                          | 0 T2R1.2                    | 0 T2C1.2              | 0 CCF1 0              | CCF1 0 ICDT0.2 DB ICDT1.2 DB CMD2                                | DW PSS0              | 0 ICDB.2 0 ICDA.2                       | 0 ICDD.2 0            | CPRL2           | 0 T2H2.2            | 0           | T2RH2.2        | 0 T2CH2.2 0           |
|              | T2RH0.3 0                       | T2CH0.3 0 TR2                | 0 T2H1.3                | 0                     | T2RH1.3 0 T2CH1.3 0       | TF2 0 T2V0.3                                  | 0 T2R0.3            | 0 T2C0.3          | 0               | TF2 0                             | T2V1.3 0                    | T2R1.3 0              | T2C1.3 0 T2MD 0       | T2MD 0 ICDT0.3 DB ICDT1.3 DB CMD3                                | DW PSS1              | 0 ICDB.3 0 ICDA.3 0                     | ICDD.3 0              | TR2 0           | T2H2.3              | 0           | T2RH2.3        | 0 T2CH2.3 0           |
|              | T2RH0.4 0                       | T2CH0.4 0 TR2L               | 0 T2H1.4                | 0                     | T2RH1.4 0 T2CH1.4 0       | - 0 T2V0.4                                    | 0 T2R0.4            | 0 T2C0.4          | 0 -             | 0 T2V1.4                          | 0 T2R1.4                    | 0 T2C1.4              | 0 T2DIV0 0            | T2DIV0 0 ICDT0.4 DB ICDT1.4 DB -                                 | 0 -                  | 0 ICDB.4 0                              | ICDA.4 0 ICDD.4       | 0 TR2L          | 0                   | T2H2.4      | 0 T2RH2.4      | 0 T2CH2.4 0           |
| 5            | T2RH0.5 0                       | T2CH0.5 0 T2POL0             | 0 T2H1.5                | 0                     | T2RH1.5 0 T2CH1.5 0       | - 0 T2V0.5                                    | 0 T2R0.5            | 0 T2C0.5          | 0               | - 0                               | T2V1.5 0                    | T2R1.5 0              | T2C1.5 0 T2DIV1 0     | T2DIV1 0 ICDT0.5 DB ICDT1.5 DB REGE                              | DW -                 | 0 ICDB.5 0                              | ICDA.5 0              | ICDD.5 0 T2POL0 | 0 T2H2.5            | 0           | T2RH2.5 0      | T2CH2.5 0             |
| 6            | T2RH0.6 0                       | T2CH0.6 0                    | T2OE0 0 T2H1.6          | 0 T2RH1.6             | 0 T2CH1.6 0               | - 0 T2V0.6                                    | 0 T2R0.6            | 0                 | T2C0.6 0        | - 0                               | T2V1.6 0                    | T2R1.6 0 T2C1.6       | 0 T2DIV2 0            | T2DIV2 0 ICDT0.6 DB ICDT1.6                                      | DB - 0 -             | 0 ICDB.6                                | 0 ICDA.6 0            | ICDD.6 0        | T2OE0 0             | T2H2.6 0    | T2RH2.6 0      | T2CH2.6 0             |
| BIT 7        | T2RH0.7 0                       | T2CH0.7 0                    | ET2 0                   | T2H1.7 0 T2RH1.7      | 0 T2CH1.7 0               | ET2L 0                                        | T2V0.7 0            | T2R0.7 0          | T2C0.7 0        | ET2L 0 T2V1.7                     | 0 T2R1.7 0                  | T2C1.7 0              | - 0                   | - 0 ICDT0.8 ICDT0.7 DB ICDT1.7                                   | DB DME DW -          | 0 ICDB.7                                | 0 ICDA.7              | 0 ICDD.7 0      | ET2 0               | T2H2.7 0    | T2RH2.7 0      | T2CH2.7 0             |
| REGISTERED 8 | - 0                             | - 0                          | - 0                     | - 0                   | - 0 - 0                   | - 0 T2V0.8                                    | 0 T2R0.8            | 0                 | T2C0.8 0        | - 0 T2V1.8                        | 0 T2R1.8 0                  | T2C1.8 0              | - 0                   | - 0 DB ICDT1.8 DB -                                              | 0 - 0                | - 0 ICDA.9 ICDA.8                       | 0 ICDD.8              | 0               | - 0                 | - 0         | - 0            | - 0                   |
|              | 9 -                             | 0 -                          | 0 -                     | 0 - 0                 | - 0 - 0                   | - 0 T2V0.9                                    | 0                   | T2R0.9 0          | T2C0.9 0 -      | 0 T2V1.9                          | 0 T2R1.9 0                  | T2C1.9 0              | - 0                   | - 0 ICDT0.9 DB ICDT1.9 DB -                                      | 0 -                  | 0 - 0                                   | 0 ICDD.9              | 0               | - 0                 | - 0         | - 0            | - 0                   |
|              | 10 -                            | 0 - 0                        | - 0                     | - 0                   | - 0 - 0                   | - 0 T2V0.10                                   | 0 T2R0.10           | 0 T2C0.10         | 0 -             | 0 T2V1.10                         | 0 T2R1.10                   | 0 T2C1.10             | 0 - 0                 | - 0 ICDT0.10 DB ICDT1.10 DB                                      | - 0 -                | 0 - 0 ICDA.10                           | 0 ICDD.10             | 0               | - 0                 | - 0         | - 0            | - 0                   |
|              | 11 -                            | -                            | 0 -                     | - 0                   | - 0 - 0                   | - 0                                           | T2V0.11 0           | 0 T2C0.11         | 0               | -                                 | 0                           | T2R1.11 0             | 0 -                   | - 0 ICDT0.11 DB ICDT1.11 DB - 0                                  |                      | - 0                                     | ICDD.11               | 0               | - 0                 | - 0         | - 0            | -                     |
|              | - 0                             | 0                            |                         | 0                     |                           |                                               | T2R0.11             | 0                 |                 | 0 T2V1.11                         |                             | T2C1.11               | 0                     | DB                                                               | - 0                  | ICDA.11                                 | 0                     | 0 -             | 0 -                 | 0           | - 0            | 0                     |
| 13           | 12 - 0                          | - 0                          | - 0 - - 0               | 0 - - 0               | 0 - - 0 0 - - 0 0         | - 0 T2V0.12                                   | 0 0 T2R0.12         | 0 T2C0.13 T2C0.12 | 0 0 -           | - 0 0 T2V1.13                     | T2V1.12 0 0 T2R1.13 T2R1.12 | 0 0 T2C1.12           | T2C1.13 0 0 - - 0 0   | - - 0 0 ICDT0.13 ICDT0.12 DB DB ICDT1.13 ICDT1.12 DB             | - - 0 0 - -          | 0 0 - - 0 0 ICDA.12                     | 0 0 ICDD.13 ICDD.12 0 | -               | 0 -                 | 0           | - 0            | - 0                   |
|              | 14 -                            | 0                            | - 0 -                   | 0 -                   |                           | - - 0 T2V0.13                                 | 0 T2R0.13           | T2R0.14           | T2C0.14         | -                                 | 0 T2R1.14                   | 0                     | 0 -                   |                                                                  |                      | ICDA.13                                 |                       |                 |                     |             | - 0            | - 0                   |
|              |                                 |                              |                         | 0                     | - 0 - 0                   | 0 T2V0.14                                     |                     | 0                 | 0               |                                   | 0 T2V1.14                   | T2C1.14               | 0                     | - 0 ICDT0.14 DB ICDT1.14                                         | DB - 0 -             | 0 - 0                                   | ICDA.14 0 ICDD.14     | 0 - 0           | -                   | 0           |                | - 0                   |
|              | 2h) 15 - 0                      |                              | - 0 -                   | 0 - 0                 | - 0 - 0                   | - 0 T2V0.15                                   | 0 T2R0.15           | 0 T2C0.15         | Bh)             | 0 -                               | 0 T2V1.15 0                 | Eh) T2R1.15 0 T2C1.15 | Fh) 0 T2CFG0 10h) - 0 | - 0 ICDT0.15 DB                                                  | ICDT1.15 DB - 0 -    | 0 - 0 ICDA.15                           | 0 ICDD.15             | 0 -             | 0 -                 | 0           | - 0            | - 0                   |
|              |                                 |                              | 3h)                     | 5h)                   | 6h)                       | (M2, 7h) T2CNB0 8h)                           | T2V0 (M2, 9h)       |                   |                 |                                   | Dh)                         | T2C1                  |                       | T2CFG1 11b)                                                      | 1Ah)                 |                                         | ICDA                  | T2CNA2 (M3,     |                     | 1h)         |                |                       |
| REGISTER     | T2RH0 (M2,                      | T2CH0                        | (M2, T2CNA1             | (M2, 4h) T2H1 (M2,    | T2RH1 (M2, T2CH1          | (M2,                                          |                     | T2R0 (M2, Ah)     | T2C0            | (M2, T2CNB1                       | (M2, Ch) T2V1               | (M2, T2R1 (M2,        | (M2, (M2,             | (M2, ICDT0 (M2, 18h) ICDT1 (M2,                                  | 19h) ICDC (M2, ICDF  | (M2, 1Bh) ICDB (M2, 1Ch)                | M2, 1Dh) ICDD         | (M2, 1Eh)       | 0h)                 | T2H2 (M3,   | T2RH2 (M3, 2h) | T2CH2 (M3, 3h)        |

## Table 5. Peripheral Register Bit Functions and Reset Values (continued)

## MAXQ7666

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

| 1          | TCC2 TC2L 0   | T2V2.1 T2V2.0   | 0 T2R2.1 T2R2.0   | 0 T2C2.1 T2C2.0     | 0 CCF0 C/T2   | 0 ERCS SWINT   | 0       | ER1 0    | INTIN1 INTIN0   | 0 C0TE.1 C0TE.0   | 0 C0RE.1 C0RE.0   | 0         | C0BIE C0IE 0   | C0DP.1 C0DP.0 0   | C0DB.1 C0DB.0 0        | C0RMS.2 C0RMS.1 0 C0TMA.1   | C0TMA.2 0 DTUP   | ROW/TIH 0 DTUP   | ROW/TIH 0 DTUP   | ROW/TIH DTUP   | 0 ROW/TIH 0 ROW/TIH DTUP 0 ROW/TIH DTUP   | 0 ROW/TIH DTUP 0 ROW/TIH DTUP   | 0 ROW/TIH DTUP   | 0 ROW/TIH   | DTUP 0 ROW/TIH DTUP 0   |         | ROW/TIH 0 ROW/TIH   | DTUP             | DTUP 0           | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   | ROW/TIH 0 ROW/TIH   |
|------------|---------------|-----------------|-------------------|---------------------|---------------|----------------|---------|----------|-----------------|-------------------|-------------------|-----------|----------------|-------------------|------------------------|-----------------------------|------------------|------------------|------------------|----------------|-------------------------------------------|---------------------------------|------------------|-------------|-------------------------|---------|---------------------|------------------|------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|---------------------|
| 2          | TF2L 0        | T2V2.2 0        | T2R2.2 0          | T2C2.2 0            | CCF1          | 0 AUTOB        | 0       | ER2      | 0 INTIN2        | 0 C0TE.2          | 0 C0RE.2          | 0 -       | 0 C0DP.2       | 0 C0DB.2          | 0 C0RMS.3              | 0 C0TMA.3                   | 0 MTRQ           | 0 MTRQ           | 0 MTRQ 0         | MTRQ           | 0 MTRQ 0 MTRQ                             | 0 MTRQ 0 MTRQ                   | 0 MTRQ           | 0 MTRQ      | 0 MTRQ                  | 0 MTRQ  | 0 MTRQ 0            | 0 MTRQ 0         | 0 MTRQ 0         | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            | 0 MTRQ 0            |
| 3          | TF2 0         | T2V2.3 0        | T2R2.3 0          | T2C2.3              | 0 T2MD        | 0 CRST         | 1 TXS   | 0        | INTIN3          | 0 C0TE.3          | 0 C0RE.3          | 0         | C0BPR6 0       | C0DP.3 0          | C0DB.3 0 C0RMS.4       | 0 C0TMA.4 0                 | EXTRQ 0          | EXTRQ 0          | EXTRQ            | 0 EXTRQ        | 0 EXTRQ 0 EXTRQ                           | 0 EXTRQ 0 EXTRQ 0 EXTRQ         | 0 EXTRQ          | 0 EXTRQ     | 0                       | EXTRQ   | 0 EXTRQ 0           | 0 EXTRQ 0        | 0 EXTRQ 0        | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           | 0 EXTRQ 0           |
| 4          | - 0 T2V2.4    | 0               | T2R2.4            | 0 T2C2.4            | 0 T2DIV0      | 0 SIESTA       | 0 RXS   |          | 0 INTIN4        | 0 C0TE.4          | 0                 | C0RE.4 0  | C0BPR7 0       | C0DP.4 0          | C0DB.4 0 C0RMS.5       | 0 C0TMA.5                   | 0 INTRQ 0        | INTRQ 0          | INTRQ            | 0 INTRQ        | 0 INTRQ 0 INTRQ                           | 0 INTRQ 0 INTRQ 0               | INTRQ 0          | INTRQ 0     | INTRQ 0                 | INTRQ   | 0 INTRQ 0           | 0 INTRQ 0        | 0 INTRQ 0        | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           | 0 INTRQ 0           |
| 5          | - 0           | T2V2.5 0        | T2R2.5            | 0 T2C2.5            | 0 T2DIV1      | 0 PDE          | 0 WKS   |          | 0 INTIN5        | 0                 | C0TE.5 0          | C0RE.5 0  | AID 0          | C0DP.5 0          | C0DB.5 0 C0RMS.6       | 0 C0TMA.6 0                 | ERI 0            | ERI 0            | ERI 0            | ERI            | 0 ERI 0 ERI                               | 0 ERI 0 ERI                     | 0 ERI            | 0 ERI       | 0 ERI                   | 0 ERI   | 0 ERI 0             | 0 ERI 0          | 0 ERI 0          | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             | 0 ERI 0             |
| 6          | - 0           | T2V2.6 0        | T2R2.6            | 0 T2C2.6            | 0 T2DIV2      | 0 STIE         | 0       | EC96/128 | 0               | INTIN6 0 C0TE.6   | 0                 | C0RE.6 0  | INCDEC 0       | C0DP.6 0 C0DB.6   | 0 C0RMS.7              | 0 C0TMA.7                   | 0 ETI 0          | ETI 0 ETI        | 0                | ETI 0          | ETI 0 ETI                                 | 0 ETI 0 ETI 0                   | ETI              | 0 ETI       | 0 ETI                   | 0 ETI   | 0 ETI 0             | 0 ETI 0          | 0 ETI 0          | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             | 0 ETI 0             |
| BIT 7      | ET2L 0        | T2V2.7          | 0 T2R2.7          | 0 T2C2.7            | 0 -           | 0 ERIE         | 0       | BSS      | 0 INTIN7        | 0 C0TE.7          | 0 C0RE.7          | 0         | CAN0BA 0       | C0DP.7 0          | C0DB.7 0               | C0RMS.8 0 C0TMA.8           | 0 MSRDY          | 0 MSRDY          | 0 MSRDY          | 0              | MSRDY 0 MSRDY 0 MSRDY                     | 0 MSRDY 0 MSRDY                 | 0 MSRDY          | 0 MSRDY     | 0 MSRDY                 | 0 MSRDY | 0 MSRDY 0           | 0 MSRDY 0        | 0 MSRDY 0        | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           | 0 MSRDY 0           |
| REGISTER 8 | - 0           | T2V2.8          | 0 T2R2.8          | 0 T2C2.8            | 0 -           | 0 -            | 0       | -        | 0 -             | 0                 | - 0               | - 0       | - 0            | C0DP.8 0          | C0DB.8 0               | C0RMS.9 0                   | C0TMA.9 0        | - 0              | - 0 -            | 0 -            | 0 - 0 -                                   | 0 - 0 -                         | 0 -              | 0 -         | 0 -                     | 0 -     | 0 - 0               | 0 - 0            | 0 - 0            | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               |
| 9          | - 0           | T2V2.9          | 0 T2R2.9          | 0 T2C2.9            | 0 -           | 0 -            | 0       | -        | 0 -             | 0 -               | 0                 | - 0       | - 0            | C0DP.9 0          | C0DB.9 0               | C0RMS.10 0 C0TMA.10         | 0                | - 0 -            | 0 -              | 0 -            | 0 - 0 -                                   | 0 - 0                           | -                | 0           | - 0 -                   | 0 -     | 0 - 0               | 0 - 0            | - 0              | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               |
| 10         | - 0           | T2V2.10         | 0 T2R2.10         | 0 T2C2.10           | 0 -           | 0 -            | 0       | -        | 0               | - 0               | - 0               | - 0       | - 0            | C0DP.10 0         | C0DB.10 0              | C0RMS.11 0 C0TMA.11         | 0                | - 0              | - 0              | -              | 0 - 0 - 0 -                               | 0 - 0                           | - 0              | - 0         | -                       | 0 - 0   | - 0 -               | - 0 -            | 0                | - 0 -               | - 0 -               | - 0 -               | - 0 -               | - 0 -               | - 0 -               | - 0 -               | - 0 -               | - 0 -               |
| 11         | - 0           | T2V2.11         | 0 T2R2.11         | 0 T2C2.11           | 0 -           | 0 -            |         | 0 -      | 0               | - 0               | - 0               | - 0       | - 0 C0DP.11    | 0                 | C0DB.11 0              | 0 C0TMA.12                  | 0                | - 0              | - 0              | - 0 -          | 0 - 0 -                                   | 0 - 0 -                         | 0 -              | 0           | - 0                     | - 0     | 0 - 0               | 0 - 0            | 0 - 0            | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               |
|            | -             |                 | 0                 | 0                   | 0 -           | -              |         |          | 0               | -                 | 0 -               | 0         | 0 C0DP.12      | 0                 | 0                      | C0RMS.12                    |                  | 0 -              | 0 -              | 0 -            |                                           | 0 - 0                           | - 0              | - 0         | -                       | 0 - 0   | - 0                 | - 0              | - 0              | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 |
| 12         | 0             | T2V2.12         | T2R2.12           | T2C2.12             |               | 0              |         | 0 -      |                 | 0 -               |                   |           | -              | C0DB.12           | C0RMS.13               | 0 C0TMA.13                  | 0 -              |                  |                  | 0              | - 0 0 - -                                 | 0 -                             |                  | -           | 0                       | - 0     |                     |                  |                  |                     |                     |                     |                     |                     |                     |                     |                     |                     |
| 13         | - 0           | T2V2.13         | 0 0 T2R2.13       | 0 0 T2C2.14 T2C2.13 | 0 0 - -       | 0 0            | - - 0 0 | -        | 0 - -           | 0 -               | 0 0 - - 0         | 0 -       | - 0            | C0DP.13 0         | C0DB.13 0 C0RMS.14     | 0 C0TMA.14                  | 0 -              | 0 - 0            | -                | 0 -            | 0 -                                       | 0 - 0 - 0 -                     | 0                |             |                         | - 0     | - 0                 | - 0              | - 0              | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 | - 0                 |
| 14         | - 0           | T2V2.14         | T2R2.15 T2R2.14   | 0 T2C2.15           | 0 -           | 0 -            | 0       | - -      | 0 -             | 0 0 - -           | 0 -               | 0         | 0              | C0DP.14 0         | C0DB.14 0 C0RMS.15     | 0 C0TMA.15 0                | - 0              | - 0 -            | 0                | - 0            | - 0 - 0                                   | - 0 - 0 - 0                     | -                |             | 0 -                     | 0 -     | 0 - 0               | 0 - 0            | 0 - 0            | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               |
| 15         | 8h) - 0       | T2V2.15 0       | 9h) T2R2          | Ah)                 | Dh)           | 10h)           | 0h)     |          | 0               |                   |                   |           | -              | 0 C0DP.15         | 0 C0DB.15 0            | - 0 -                       | 0 -              | 0                | - 0 -            | 0              | - 0 - 0 -                                 | 0 - 0 - 0 - 0                   | -                | 0           |                         | - 0 -   | 0 - 0               | 0 - 0            | 0 - 0            | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               | 0 - 0               |
|            |               |                 | (M3,              | (M3, T2C2           | (M3, T2CFG2   | (M3, C0C       |         | C0S      | (M4, 1h) C0IR   | (M4, 2h) C0TE     | (M4, 3h)          | 4h)       | C0R            | (M4, 5h) C0DP     | (M4, 6h) C0DB (M4, 7h) | C0RMS (M4, 8h) C0TMA        | (M4, 9h) C0M1C   | (M4, 11h) C0M2C  | (M4, 12h) C0M3C  | 13h) 14h)      | 15h) 16h)                                 | 18h)                            | 19h)             |             | 1Ah)                    | 1Bh)    | 1Ch)                | 1Ch)             | 1Ch)             | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                | 1Ch)                |
| REGISTER   | T2CNB2 (M3,   | T2V2            |                   |                     |               |                |         | (M4,     |                 |                   |                   | C0RE (M4, |                |                   |                        |                             |                  |                  | (M4, C0M4C (M4,  | C0M5C (M4,     | C0M6C (M4,                                | C0M7C (M4, 17h)                 | C0M8C (M4, C0M9C |             | (M4, C0M10C (M4,        | C0M11C  |                     | (M4, C0M12C (M4, | C0M13C (M4, 1Dh) |                     |                     |                     |                     |                     |                     |                     |                     |                     |

## Table 5. Peripheral Register Bit Functions and Reset Values (continued)

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

|   0 | DTUP             | 0                | DTUP    |           | 0      | VDBR0 S   | ADCE   | 0        | ADCS0   | 0        | -      | 0         | DACI.0   | 0        | DACO.0        | 0       | ADCD.0   | 0       | TSO.0    | 1            | 0 -      |          | -      | 0 HFE 0   |
|-----|------------------|------------------|---------|-----------|--------|-----------|--------|----------|---------|----------|--------|-----------|----------|----------|---------------|---------|----------|---------|----------|--------------|----------|----------|--------|-----------|
|   1 | ROW/TIH          | 0                | ROW/TIH | 0         | VDBR1  | S         | DACE   | 0        | ADCS1   | 0 -      |        | 0 DACI.1  | 0        | DACO.1   | 0             | ADCD.1  | 0        | TSO.1   | 0 ADCIE  | 0            | ADCRY    | 0        | RCE    | 1         |
|   2 | MTRQ             | 0                | MTRQ    | 0         | VDBI0  | 0         | -      | 0        | ADCS2   | 0        | -      | 0 DACI.2  | 0        | DACO.2   | 0             | ADCD.2  | 0        | TSO.2   | 0        | AORIE        | 0 ADCOV  | 0        | EXTHF  | 0         |
|   3 | EXTRQ            | 0                | EXTRQ   | 0         | VDBI1  | 0         | PGAE   | 0        | ADCBY   | 0        | -      | 0 DACI.3  | 0        | DACO.3   | 0             | ADCD.3  | 0 TSO.3  | 0       |          | - 0          | -        | 0        | -      | 0         |
|   4 | INTRQ            | 0                | INTRQ   | 0         | VIOBI0 | 0         | TSE    | 0        | ADCASD  | 0        | DACLD0 | 0 DACI.4  | 0        | DACO.4   | 0             | ADCD.4  | 0 TSO.4  | 0       | DVBIE    | 0            | DVBI     | 0        | -      | 0         |
|   4 | 5 ERI            | 0                | ERI     | 0         | VIOBI1 | 0         | PGG0   | 0        | -       | 0        | DACLD1 | 0         | DACI.5 0 | DACO.5   | 0             | ADCD.5  | 0 TSO.5  |         | 0        | VIOBIE 0     | VIOBI    | 0        | ADCCD0 | 0         |
|   6 | ETI              | 0                | ETI     | 0         | -      | 0         | PGG1   | 0        | ADCDUL  | 0        | DACLD2 | 0         | DACI.6   | 0        | DACO.6 0      | ADCD.6  | 0        | TSO.6   | 0        | HFFIE 0      | HFFINT   | 0        | ADCCD1 | 0         |
|   7 | MSRDY            | 0                | MSRDY   | 0         | -      | 0         | PGG2   | 0        | -       | 0        | -      | 0         | DACI.7 0 | DACO.7   | 0             | ADCD.7  | 0        | TSO.7   | 0        | - 0          | -        | 0        | ADCCD2 | 0         |
|   8 | -                | 0                | -       | 0         | -      | 0         | -      | 0        | -       | 0        | -      | 0 DACI.8  | 0        | DACO.8   |               | 0       | ADCD.8   | 0 TSO.8 | 0        | - 0          | -        | 0        | HFIC0  | 0         |
|   9 | -                | 0                | -       | 0         | -      | 0         | -      | 0        | ADCBIP  | 0        | -      | 0 DACI.9  | 0        | DACO.9   | 0             | ADCD.9  | 0        | TSO.9   | 0        | - 0          | -        | 0        | HFIC1  | 0         |
|  10 | -                | 0                | -       | 0         | -      | 0         | VDPE   | 1        | ADCDIF  | 0        | -      | 0 DACI.10 | 0        | DACO.10  | 0             | ADCD.10 | 0        | TSO.10  | 0        | - 0          | -        | 0        | HFOC0  | 0         |
|  11 | -                | 0                | -       | 0         | -      | 0         | VDBE   | 0        | ADCMX0  | 0 -      |        | 0 DACI.11 | 0        | DACO.11  | 0             | ADCD.11 | 0        | TSO.11  | 0        | - 0          | XHFRY    | 0        | HFOC1  | 0         |
|  12 | -                | 0                | -       | 0         | -      | 0         | VIBE   | 0        | ADCMX1  | 0        | -      | 0 -       | 0        | -        | 0             | -       | 0        | TSO.12  | 0        | - 0          | -        | 0        | -      | 0         |
|  13 | -                | 0                | -       | 0         | -      | 0         | -      | 0        | ADCMX2  | 0        | -      | 0 -       | 0        | -        | 0             | -       | 0        | TSO.13  | 0        | - 0          | -        | 0        | -      | 0         |
|  13 | -                | 0                | -       | 0         | -      | 0         | -      | 0        | ADCMX3  | 0        | -      | 0 -       | 0        |          | - 0           | -       | 0        | TSO.14  | 0 -      | 0            | DVLVL    | 0        | -      | 0         |
|  13 | 15 -             | 0                | -       | 0         | -      | 0         | -      | 0        | ADCMX4  | 0        | - 0    |           | - 0      | -        | 0             | -       | 0        | TSO.15  | 0 -      |              | 0 VIOLVL | 0        | -      | 0         |
|     | C0M14C (M4, 1Eh) | C0M14C (M4, 1Eh) | C0M15C  | (M4, 1Fh) | VMC    | (M5, 0h)  | APE    | (M5, 1h) | ACNT    | (M5, 2h) | DCNT   | (M5, 3h)  | DACI     | (M5, 4h) | DACO (M5, 6h) | ADCD    | (M5, 8h) | TSO     | (M5, 9h) | AIE (M5, Ah) | ASR      | (M5, Bh) | OSCC   | (M5, Ch)  |

Bits indicated by '-' are unused.

Bits indicated by 'ST' reflect the input signal state.

Bits indicated by 'S' are only affected by a POR and not by other forms of reset. These bits are set to 0 after a POR.

Bits indicated by 'DB' have read/write access only in background or debug mode. These bits are cleared after a POR.

Bits indicated by 'DW' are only written to in debug mode. These bits are cleared after a POR.

The OSCC register is cleared to 0002h after a POR and is not affected by other forms of reset

## MAXQ7666

## Typical Operating Circuit

<!-- image -->

## 16-Bit, RISC, Microcntroler-Based, Smart Dat-Acquiston System

## MAXQ7666

## Pin Configuration

<!-- image -->

## Chip Information

PROCESS: BiCMOS

## Ordering Information

| PART          | TEMP RANGE      | PIN-PACKAGE   |
|---------------|-----------------|---------------|
| MAXQ7666BATM+ | -40°C to +125°C | 48 TQFN-EP*   |

*EP = Exposed pad.

## Package Information

For  the  latest  package  outline  information  and  land  patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   | LAND PATTERN NO.   |
|----------------|----------------|----------------|--------------------|
| 48 TQFN-EP     | T4877MK-6      | 21-0199        | 90-0135            |

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System

## MAXQ7666

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------|-----------------|
|                 0 | 8/08            | Initial release                              | -               |
|                 1 | 10/14           | Removed automotive reference from data sheet | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## 16-Bit, RISC, Microcontroller-Based, Smart Data-Acquisition System