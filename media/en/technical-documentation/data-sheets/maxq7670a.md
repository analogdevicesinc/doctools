<!-- lastmod 2022-08-03 -->
## MAXQ7670A

## General Description

The MAXQ7670A is a highly integrated solution for measuring  multiple  analog  signals  and  outputting  the  results on a control area network (CAN) bus. The device operates from  a  single  5V  supply  and  incorporates  a  high-performance,  16-bit  reduced  instruction  set  computing  (RISC) core, a SAR ADC, and a CAN 2.0B controller, supporting transfer rates up to 1Mbps. The 12-bit SAR ADC includes an  amplifier  with  programmable  gains  of  1V/V  or  16V/V, 8  input  channels,  and  conversion  rates  up  to  125ksps. The eight single-ended ADC inputs can be configured as four unipolar or bipolar, fully differential inputs. For singlesupply operation, the external 5V supply powers the digital I/Os and two separate integrated linear regulators that supply the 2.5V digital core and the 3.3V analog circuitry. Each supply rail  has  a  dedicated  power-supply  supervisor  that provides  brownout  detection  and  power-on  reset  (POR) functions.  The  16-bit  RISC  microcontroller  (μC)  includes 64KB (32K x 16) of nonvolatile program/data flash and 2KB (1K x 16) of data RAM. Other features of the MAXQ7670A include  a  4-wire  SPI  interface,  a  JTAG  interface  for  insystem programming and debugging, an integrated 15MHz RC oscillator,  external  crystal  oscillator  support,  a  timer/ counter with pulse-width modulation (PWM) capability, and seven GPIO pins with interrupt and wake-up capability.

The system-on-a-chip (SoC) MAXQ7670A is a μC-based, smart  data  acquisition  system.  As  a  member  of  the MAXQ® family  of  16-bit,  RISC  μCs,  the  MAXQ7670A  is ideal for low-cost, low-power, embedded-applications such as automotive, industrial controls, and building automation. The flexible, modular architecture used in the MAXQ μCs allows development of targeted products for specific applications with minimal effort.

The  MAXQ7670A  is  available  in  a  40-pin,  5mm  x  5mm TQFN package, and is specified to operate over the -40°C to +125°C automotive temperature range.

## Applications

- Automotive Steering Angle and Torque Sensors
- CAN-Based Automotive Sensor Applications
- Industrial Control
- Building Automation
- ●

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## Features

- High-Performance, Low-Power, 16-Bit RISC Core 0.166MHz to 16MHz Operation, Approaching 1MIPS/MHz Low Power (&lt; 1mA/MIPS, V DVDD  = +2.5V) 16-Bit Instruction Word, 16-Bit Data Bus 33 Instructions, Most Require Only One Clock Cycle 16-Level Hardware Stack 16 x 16-Bit, General-Purpose Working Registers Three Independent Data Pointers with AutoIncrement/Decrement Low-Power, Divide-by-256, Power-Management

Modes (PMM) and Stop Mode

- Program and Data Memory 64KB Internal Nonvolatile Program/Data Flash 2KB Internal Data RAM
- SAR ADC
- 8 Single-Ended/4 Differential Channels, 12-Bit Resolution PGA Gain = 1V/V or 16V/V

125ksps (75.5ksps with PGA Gain = 16V/V)

- Timer/Digital I/O Peripherals CAN 2.0B Controller (15 Message Centers) Serial Peripheral Interface (SPI) JTAG Interface (Extensive Debug and Emulation Support)
- Single 16-Bit/Dual 8-Bit Timer/PWM Seven General-Purpose, Digital I/O Pins with External Interrupt/Wake-Up Features
- Oscillator/Clock Module Internal Oscillator Supports External Crystal (8MHz or 16MHz) Integrated 15MHz RC Oscillator External Clock Source Operation Programmable Watchdog Timer
- Power-Management Module Power-On Reset

Power-Supply Supervisor/Brownout Detection Integrated +2.5V and +3.3V Linear Regulators

## Ordering Information

| PART            | TEMP RANGE      | PIN-PACKAGE   |
|-----------------|-----------------|---------------|
| MAXQ7670AATL+   | -40ºC to +125ºC | 40 TQFN-EP*   |
| MAXQ7670AATL/V+ | -40ºC to +125ºC | 40 TQFN-EP*   |

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

/V denotes an automotive qualified part.

+ Denotes a lead(Pb)-free/RoHS-compliant package. * EP = Exposed pad.

Typical Application Circuit and Pin Configuration appear at end of data sheet.

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated.com/errata .

<!-- image -->

## MAXQ7670A

## Absolute Maximum Ratings

| DVDD to DGND.......................................................-0.3V                | to +3V                                                              |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| DVDDIO to GNDIO...............................................-0.3V                     | to +5.5V                                                            |
| AVDD to AGND                                                                            | .......................................................-0.3V to +4V |
| DGND to GNDIO..................................................-0.3V                    | to +0.3V                                                            |
| GNDIO to AGND. .................................................-0.3V                   | to +0.3V                                                            |
| AGND to DGND...................................................-0.3V                    | to +0.3V                                                            |
| Analog Inputs to AGND........................ -0.3V to (V                               | AVDD + 0.3V)                                                        |
| RESET , Digital Inputs/Outputs to GNDIO.......................................... -0.3V | to (V DVDDIO + 0.3V)                                                |

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

| XIN, XOUT to DGND............................-0.3V to (V DVDD + 0.3V)            |
|----------------------------------------------------------------------------------|
| Continuous Power Dissipation (T A = +70°C)                                       |
| 40-Pin TQFN (derate 36mW/°C above +70°C).........2857mW                          |
| Continuous Current into Any Pin......................................±50mA       |
| Operating Temperature Range......................... -40°C to +125°C             |
| Junction Temperature......................................................+150°C |
| Storage Temperature Range............................ -65°C to +150°C            |
| Lead Temperature (soldering, 10s) .................................+300°C        |
| Soldering Temperature (reflow).......................................+260°C      |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                                 | SYMBOL             | CONDITIONS                                        | MIN                | TYP                | MAX                | UNITS              |
|-----------------------------------------------------------|--------------------|---------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| POWER REQUIREMENTS                                        | POWER REQUIREMENTS | POWER REQUIREMENTS                                | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS | POWER REQUIREMENTS |
| Voltage Ranges                                            | DVDD               | REGEN2 = DVDDIO, DV DD ≤ AV DD , DV DD ≤ DV DDIO  | 2.25               | 2.5                | 2.75               | V                  |
| Voltage Ranges                                            | AVDD               | LRAPD = 1,AVDD ≤ DV DDIO                          | 3.0                | 3.3                | 3.6                | V                  |
| Voltage Ranges                                            | DVDDIO             |                                                   | 4.5                | 5.0                | 5.25               | V                  |
| AVDD Supply Current                                       | I AVDD             | Shutdown (Note 2)                                 |                    | 3                  | 10                 | µA                 |
| AVDD Supply Current                                       | I AVDD             | All analog functions enabled                      |                    | 6                  | 7                  | mA                 |
| Module Incremental Subfunction Supply Current ∆I          | AVDD               | ADC, 25ksps, 2MHz ADCCLK                          |                    | 5200               |                    | µA                 |
| Module Incremental Subfunction Supply Current ∆I          | AVDD               | ADC, 125ksps, 2MHz ADCCLK                         |                    | 5600               |                    | µA                 |
| Module Incremental Subfunction Supply Current ∆I          | AVDD               | AVDD brownout interrupt monitor                   |                    | 3                  |                    | µA                 |
| Module Incremental Subfunction Supply Current ∆I          | AVDD               | PGAenabled                                        |                    | 5500               |                    | µA                 |
| Supply Current                                            | I DVDD             | CPU in stop mode, all peripherals disabled        |                    | 25                 | 200                | µA                 |
| Supply Current                                            | I DVDD             | High speed/2MHz mode (Note 3)                     |                    | 2.0                | 2.5                | mA                 |
| Supply Current                                            | I DVDD             | High speed/16MHz mode (Note 4)                    |                    | 11.3               |                    | mA                 |
| Supply Current                                            | I DVDD             | Low speed/625kHz mode (Note 5)                    |                    | 0.95               |                    | mA                 |
| Supply Current                                            | I DVDD             | Program flash erase or write                      |                    | 14                 | 23                 | mA                 |
| Digital Peripheral Incremental Subfunction Supply Current | ∆I DVDD            | DVDDIO brownout reset monitor                     |                    | 1                  |                    | µA                 |
| Digital Peripheral Incremental Subfunction Supply Current | ∆I DVDD            | HF crystal oscillator                             |                    | 60                 |                    | µA                 |
| Digital Peripheral Incremental Subfunction Supply Current | ∆I DVDD            | Internal fixed-frequency oscillator               |                    | 50                 |                    | µA                 |
| DVDDIO Supply Current                                     | I DVDDIO           | All digital I/Os static at GNDIO or DV DDIO       |                    | 2                  | 20                 | µA                 |
| DVDDIO Supply Current                                     | I DVDDIO           | CAN transmitting, timer output switching (Note 6) |                    | 0.2                | 0.3                | mA                 |

│

## MAXQ7670A

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                        | SYMBOL                                   | CONDITIONS                                                                              | MIN                                      | TYP                                      | MAX                                      | UNITS                                    |
|--------------------------------------------------|------------------------------------------|-----------------------------------------------------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| MEMORY SECTION                                   |                                          |                                                                                         |                                          |                                          |                                          |                                          |
| Flash Memory Size                                |                                          | Program or data storage                                                                 |                                          | 64                                       |                                          | KB                                       |
| Flash Page Size                                  |                                          | 16-bit word size                                                                        |                                          | 256                                      |                                          | Words                                    |
| Flash Erase/Write Endurance                      |                                          | Program or data (Note 7)                                                                | 10,000                                   |                                          |                                          | Cycles                                   |
| Flash Data Retention (Note 7)                    |                                          | All flash, T A = +25ºC                                                                  | 100                                      |                                          |                                          | Years                                    |
|                                                  |                                          | All flash, T A = +85ºC                                                                  | 15                                       |                                          |                                          | Years                                    |
| Flash Erase Time                                 |                                          | Flash page erase                                                                        | 20                                       |                                          | 50                                       | ms                                       |
| Flash Erase Time                                 |                                          | Entire flash mass erase                                                                 | 200                                      |                                          | 500                                      | ms                                       |
| Flash Programming Time                           |                                          | Flash single word programming                                                           | 20                                       |                                          | 40                                       | µs                                       |
| Flash Programming Time                           |                                          | Entire flash programming                                                                | 0.66                                     |                                          | 1.31                                     | s                                        |
| RAM Memory Size                                  |                                          |                                                                                         |                                          | 2                                        |                                          | KB                                       |
| Utility ROM Size                                 |                                          | 16-bit word size                                                                        |                                          | 4                                        |                                          | KWords                                   |
| ANALOG SENSE PATH (Includes PGA and ADC)         | ANALOG SENSE PATH (Includes PGA and ADC) | ANALOG SENSE PATH (Includes PGA and ADC)                                                | ANALOG SENSE PATH (Includes PGA and ADC) | ANALOG SENSE PATH (Includes PGA and ADC) | ANALOG SENSE PATH (Includes PGA and ADC) | ANALOG SENSE PATH (Includes PGA and ADC) |
| Resolution                                       | N ADC                                    |                                                                                         | 12                                       |                                          |                                          | Bits                                     |
| Integral Nonlinearity                            | INL ADC                                  | PGAgain = 16V/V, bipolar mode, V IN = ±100mV, 75.5ksps                                  |                                          | ±1                                       | ±2                                       | LSB 12                                   |
| Integral Nonlinearity                            |                                          | PGAgain = 1V/V, unipolar mode, V IN = +1.0V, 125ksps                                    |                                          | ±1                                       | ±2                                       | LSB 12                                   |
| Differential Nonlinearity                        | DNL ADC                                  | PGAgain = 1V/V or 16V/V                                                                 |                                          | ±0.5                                     | ±1.5                                     | LSB 12                                   |
| Input-Referred Offset Error                      |                                          | Test at T A = +25ºC, PGAgain = 1V/V or 16V/V                                            |                                          | ±1                                       | ±10                                      | mV                                       |
| Offset-Error Temperature Coefficient             |                                          | PGAgain = 16V/V, bipolar mode                                                           |                                          | ±2                                       |                                          | µV/ºC                                    |
| Gain Error                                       |                                          | PGAgain = 16V/V, bipolar mode, excludes offset and reference error, test at T A = +25ºC | -2                                       |                                          | +2                                       | %                                        |
| Gain-Error Temperature Coefficient               |                                          | PGAgain = 16V/V, bipolar mode                                                           |                                          | ±5                                       |                                          | ppm/ºC                                   |
| Conversion Clock Frequency                       | f ADCCLK                                 | f SYSCLK = 8MHz or 16MHz                                                                | 0.5                                      |                                          | 4.0                                      | MHz                                      |
| Sample Rate                                      | f SAMPLE                                 | PGAgain = 16V/V, f ADCCLK = 2MHz                                                        |                                          |                                          | 75.5                                     | ksps                                     |
| Sample Rate                                      |                                          | PGAgain = 1V/V, f ADCCLK = 2MHz                                                         |                                          |                                          | 125                                      | ksps                                     |
| Channel Select, Track-and- Hold Acquisition Time |                                          | PGAgain = 16V/V, 13.5ADCCLK cycles at 2MHz                                              |                                          | 6.75                                     |                                          | µs                                       |
| Channel Select, Track-and- Hold Acquisition Time | t ACQ                                    | PGAgain = 1V/V, threeADCCLK cycles at 2MHz                                              |                                          | 1.5                                      |                                          | µs                                       |
| Conversion Time                                  | t CONV                                   | 13ADCCLK cycles at 2MHz                                                                 |                                          | 6.5                                      |                                          | µs                                       |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                           | SYMBOL                        | CONDITIONS                                          | MIN                           | TYP                           | MAX                           | UNITS                         |
|-------------------------------------|-------------------------------|-----------------------------------------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|
| Channel Select Plus Conversion Time | t ACQ + t CONV                | PGAgain = 16V/V, 26.5ADCCLK cycles at 2MHz          |                               | 13.25                         |                               | µs                            |
| Channel Select Plus Conversion Time | t ACQ + t CONV                | PGAgain = 1V/V, 16ADCCLK cycles at 2MHz             |                               | 8                             |                               | µs                            |
| Turn-On Time                        | t RECOV                       |                                                     |                               | 10                            |                               | µs                            |
| Aperture Delay                      |                               |                                                     |                               | 60                            |                               | ns                            |
| Aperture Jitter                     |                               |                                                     |                               | 100                           |                               | ps P-P                        |
| Differential Input Voltage Range    |                               | At AIN0-AIN7, unipolar mode, PGAgain = 1V/V         | 0                             |                               | V REFADC                      | V                             |
| Differential Input Voltage Range    |                               | At AIN0-AIN7, unipolar mode, PGAgain = 16V/V        | 0                             |                               | 0.125                         | V                             |
| Differential Input Voltage Range    |                               | At AIN0-AIN7, bipolar mode, PGAgain = 1V/V          | -V REFADC /2                  |                               | +V REFADC /2                  | V                             |
| Differential Input Voltage Range    |                               | At AIN0-AIN7, bipolar mode, PGAgain = 16V/V         | -V REFADC /32                 |                               | +V REFADC /32                 | V                             |
| Absolute Input Voltage Range        |                               | At AIN0-AIN7                                        | 0                             |                               | V AVDD                        | V                             |
| Input Leakage Current               |                               | At AIN0-AIN7                                        |                               | ±0.1                          |                               | µA                            |
| Input-Referred Noise                |                               | At AIN0-AIN7, PGAgain = 16V/V                       |                               | 50                            |                               | µV RMS                        |
| Input-Referred Noise                |                               | At AIN0-AIN7, PGAgain = 1V/V                        |                               | 400                           |                               | µV RMS                        |
| Small-Signal Bandwidth (-3dB)       |                               | V IN = 12mV P-P , PGAgain = 16V/V                   |                               | 33                            |                               | MHz                           |
| Small-Signal Bandwidth (-3dB)       |                               | V IN = 200mV P-P , PGAgain = 1V/V                   |                               | 23                            |                               | MHz                           |
| Large-Signal Bandwidth (-3dB)       |                               | V IN = 150mV P-P , PGAgain =16V/V                   |                               | 33                            |                               | MHz                           |
| Large-Signal Bandwidth (-3dB)       |                               | V IN = 2.5V P-P , PGAgain = 1V/V                    |                               | 19                            |                               | MHz                           |
| Input Capacitance (Note 8)          |                               | Single-ended, any AIN0-AIN7, PGAgain = 16V/V        |                               | 16                            |                               | pF                            |
| Input Capacitance (Note 8)          |                               | Single-ended, any AIN0-AIN7, PGAgain = 1V/V         |                               | 13                            |                               | pF                            |
| Input Common-Mode Rejection Ratio   | CMRR                          | AIN0-AIN7, V CM = differential input range          |                               | 75                            |                               | dB                            |
| Power-Supply Rejection Ratio        | PSRR                          | AV DD = 3.0V to 3.6V                                |                               | 90                            |                               | dB                            |
| EXTERNAL REFERENCE INPUTS           | EXTERNAL REFERENCE INPUTS     | EXTERNAL REFERENCE INPUTS                           | EXTERNAL REFERENCE INPUTS     | EXTERNAL REFERENCE INPUTS     | EXTERNAL REFERENCE INPUTS     | EXTERNAL REFERENCE INPUTS     |
| REFADC Input Voltage Range          |                               |                                                     | 1.0                           | 3.3                           | V AVDD                        | V                             |
| REFADC Leakage Current              |                               | ADC disabled                                        |                               | 1                             |                               | µA                            |
| Input Capacitance                   |                               | (Note 9)                                            |                               | 20                            |                               | pF                            |
| +3.3V (AVDD) LINEAR REGULATOR       | +3.3V (AVDD) LINEAR REGULATOR | +3.3V (AVDD) LINEAR REGULATOR                       | +3.3V (AVDD) LINEAR REGULATOR | +3.3V (AVDD) LINEAR REGULATOR | +3.3V (AVDD) LINEAR REGULATOR | +3.3V (AVDD) LINEAR REGULATOR |
| AVDD Output Voltage                 |                               | LRAPD = 0                                           | 3.15                          | 3.3                           | 3.45                          | V                             |
| No-Load Quiescent Current           |                               | LRAPD = 0, all internal analog peripherals disabled |                               | 10                            |                               | µA                            |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                             | SYMBOL                                            | CONDITIONS                                                                                        | MIN                                               | TYP                                               | MAX                                               | UNITS                                             |
|-------------------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|---------------------------------------------------|
| Output Current Capability                             |                                                   | LRAPD = 0                                                                                         | 50                                                |                                                   |                                                   | mA                                                |
| Output Short-Circuit Current                          |                                                   | LRAPD = 0,AVDD shorted toAGND                                                                     |                                                   | 100                                               |                                                   | mA                                                |
| MaximumAVDD Bypass Capacitor toAGND                   |                                                   | LRAPD = 0                                                                                         |                                                   | 0.47                                              |                                                   | µF                                                |
| +2.5V (DVDD) LINEAR REGULATOR                         | +2.5V (DVDD) LINEAR REGULATOR                     | +2.5V (DVDD) LINEAR REGULATOR                                                                     | +2.5V (DVDD) LINEAR REGULATOR                     | +2.5V (DVDD) LINEAR REGULATOR                     | +2.5V (DVDD) LINEAR REGULATOR                     | +2.5V (DVDD) LINEAR REGULATOR                     |
| DVDD Output Voltage                                   |                                                   | REGEN2 = GNDIO                                                                                    | 2.38                                              | 2.5                                               | 2.62                                              | V                                                 |
| No-Load Quiescent Current                             |                                                   | REGEN2 = GNDIO, all internal digital peripherals disabled                                         |                                                   | 15                                                |                                                   | µA                                                |
| Output Current Capability                             |                                                   | REGEN2 = GNDIO                                                                                    | 50                                                |                                                   |                                                   | mA                                                |
| Output Short-Circuit Current                          |                                                   | REGEN2 = GNDIO, DV DD shorted to DGND                                                             |                                                   | 100                                               |                                                   | mA                                                |
| Maximum DVDD Bypass Capacitor to DGND                 |                                                   | REGEN2 = GNDIO                                                                                    |                                                   | 0.47                                              |                                                   | µF                                                |
| SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION     | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION                                                 | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION | SUPPLY-VOLTAGE SUPERVISORS AND BROWNOUT DETECTION |
| DVDD Reset Threshold                                  |                                                   | Asserts RESET if V DVDD is below this threshold                                                   | 2.1                                               |                                                   | 2.25                                              | V                                                 |
| DVDD Interrupt Threshold                              |                                                   | Generates an interrupt if V DVDD falls below this threshold                                       | 2.25                                              |                                                   | 2.38                                              | V                                                 |
| Minimum DVDD Interrupt and Reset Threshold Difference |                                                   |                                                                                                   |                                                   | 0.14                                              |                                                   | V                                                 |
| AVDD Interrupt Threshold                              |                                                   | Generates an interrupt if V AVDD falls below this threshold                                       | 3.0                                               |                                                   | 3.15                                              | V                                                 |
| DVDDIO Interrupt Threshold                            |                                                   | Generates an interrupt if V DVDDIO falls below this threshold                                     | 4.5                                               |                                                   | 4.75                                              | V                                                 |
| Operational Range                                     |                                                   | DV DD                                                                                             | 1                                                 |                                                   | 2.75                                              | V                                                 |
| Operational Range                                     |                                                   | AV DD                                                                                             | 1                                                 |                                                   | 3.6                                               |                                                   |
| Operational Range                                     |                                                   | DV DDIO                                                                                           | 1                                                 |                                                   | 5.25                                              |                                                   |
| Supervisor Hysteresis                                 |                                                   |                                                                                                   |                                                   | ±0.7                                              |                                                   | %                                                 |
| CAN INTERFACE                                         | CAN INTERFACE                                     | CAN INTERFACE                                                                                     | CAN INTERFACE                                     | CAN INTERFACE                                     | CAN INTERFACE                                     | CAN INTERFACE                                     |
| CAN Baud Rate                                         |                                                   | f CANCLK = 8MHz                                                                                   |                                                   |                                                   | 1                                                 | Mbps                                              |
| CANCLK Mean Frequency Error                           |                                                   | 8MHz or 16MHz, 50ppm external crystal                                                             |                                                   | 60                                                |                                                   | ppm                                               |
| CANCLK Total Frequency Error                          |                                                   | 8MHz or 16MHz, 50ppm external crystal; measured over a 12ms interval; mean plus peak cycle jitter |                                                   | < 0.5                                             |                                                   | %                                                 |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                                           | SYMBOL                                                              | CONDITIONS                                                          | MIN                                                                 | TYP                                                                 | MAX                                                                 | UNITS                                                               |
|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|
| HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   | HIGH-FREQUENCY CRYSTAL OSCILLATOR                                   |
| Clock Frequency                                                     |                                                                     | Using external crystal                                              |                                                                     | 8 or 16                                                             | 16                                                                  | MHz                                                                 |
|                                                                     |                                                                     | External input (Note 10)                                            | 0.166                                                               |                                                                     | 16.67                                                               | MHz                                                                 |
| Stability                                                           |                                                                     | Excluding crystal drift                                             |                                                                     | 25                                                                  |                                                                     | ppm                                                                 |
| Startup Time                                                        |                                                                     | f SYSCLK cycles                                                     |                                                                     | 65,535                                                              |                                                                     | Cycles                                                              |
| XIN Input Low Voltage                                               |                                                                     | Driven with external clock source                                   |                                                                     |                                                                     | 0.3 x V DVDD                                                        | V                                                                   |
| XIN Input High Voltage                                              |                                                                     | Driven with external clock source                                   | 0.7 x V DVDD                                                        |                                                                     |                                                                     | V                                                                   |
| INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 | INTERNAL FIXED-FREQUENCY OSCILLATOR                                 |
| Frequency                                                           | f IFFCLK                                                            | T A = T MIN to T MAX                                                | 13.8                                                                | 15                                                                  | 16.35                                                               | MHz                                                                 |
| Tolerance                                                           |                                                                     | T A = +25ºC                                                         |                                                                     | ±0.4                                                                |                                                                     | %                                                                   |
| Temperature Drift                                                   |                                                                     | T A = T MIN to T MAX                                                |                                                                     | 5                                                                   |                                                                     | %                                                                   |
| Power-Supply Rejection                                              |                                                                     | T A = +25ºC, DV DD = 2.25V to 2.75V                                 |                                                                     | ±1.5                                                                |                                                                     | %                                                                   |
| RESET ( RESET )                                                     | RESET ( RESET )                                                     | RESET ( RESET )                                                     | RESET ( RESET )                                                     | RESET ( RESET )                                                     | RESET ( RESET )                                                     | RESET ( RESET )                                                     |
| RESET Internal Pullup Resistance                                    |                                                                     | Pulled up to DVDDIO                                                 |                                                                     | 55                                                                  |                                                                     | kΩ                                                                  |
| RESET Output Low Voltage                                            |                                                                     | RESET asserted, no external load                                    |                                                                     |                                                                     | 0.4                                                                 | V                                                                   |
| RESET Output High Voltage                                           |                                                                     | RESET deasserted, no external load                                  | 0.9 x V DVDDIO                                                      |                                                                     |                                                                     | V                                                                   |
| RESET Input Low Voltage                                             |                                                                     | Driven with external clock source                                   |                                                                     |                                                                     | 0.3 x V DVDD                                                        | V                                                                   |
| RESET Input High Voltage                                            |                                                                     | Driven with external clock source                                   | 0.7 x V DVDDIO                                                      |                                                                     |                                                                     | V                                                                   |
| DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) | DIGITAL INPUTS (P0._, CANRXD, MISO, MOSI, SS , SCLK, TCK, TDI, TMS) |
| Input Low Voltage                                                   |                                                                     |                                                                     |                                                                     |                                                                     | 0.8                                                                 | V                                                                   |
| Input High Voltage                                                  |                                                                     |                                                                     | 2.1                                                                 |                                                                     |                                                                     | V                                                                   |
| Input Hysteresis                                                    |                                                                     |                                                                     |                                                                     | 500                                                                 |                                                                     | mV                                                                  |
| Input Leakage Current                                               |                                                                     | V IN = GNDIO or V DVDDIO , pullup disabled                          | -10                                                                 | ±0.01                                                               | +10                                                                 | µA                                                                  |
| Input Pullup Resistance                                             |                                                                     |                                                                     |                                                                     | 55                                                                  |                                                                     | kΩ                                                                  |
| Input Pulldown Resistance                                           |                                                                     |                                                                     |                                                                     | 55                                                                  |                                                                     | kΩ                                                                  |
| Input Capacitance                                                   |                                                                     |                                                                     |                                                                     | 15                                                                  |                                                                     | pF                                                                  |
| DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                | DIGITAL OUTPUTS (P0._, CANTXD, MOSI, SCLK, SS , TDO)                |
| Output Low Voltage                                                  |                                                                     | I SINK = 0.5mA                                                      |                                                                     |                                                                     | 0.4                                                                 | V                                                                   |
| Output High Voltage                                                 |                                                                     | I SOURCE = 0.5mA                                                    | V DVDDIO - 0.5                                                      |                                                                     |                                                                     | V                                                                   |

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                          | SYMBOL        | CONDITIONS            | MIN              | TYP      | MAX             | UNITS   |
|----------------------------------------------------|---------------|-----------------------|------------------|----------|-----------------|---------|
| Output Capacitance                                 |               | I/O pins three-state  |                  | 15       |                 | pF      |
| Maximum Output Impedance                           |               | PD0._ = 0             |                  | 880      |                 | Ω       |
| Maximum Output Impedance                           |               | PD0._ = 1             |                  | 450      |                 | Ω       |
| SYSTEM CLOCK                                       |               |                       |                  |          |                 |         |
| System Clock Frequency                             | f SYSCLK      | From any clock source | 0                |          | 16.67           | MHz     |
| SPI INTERFACE TIMING                               |               |                       |                  |          |                 |         |
| SPI Master Operating Frequency                     | f MCLK        | 0.5 x f SYSCLK        |                  |          | 8               | MHz     |
| SPI Slave Mode Operating Frequency                 | f SCLK        |                       |                  |          | f SYSCLK /8     | MHz     |
| SCLK Output Pulse-Width High/Low                   | t MCH , t MCL |                       | t SYSCLK - 25    |          |                 | ns      |
| SCLK Input Pulse-Width High/Low                    | t SCH , t SCL |                       |                  | t SYSCLK |                 | ns      |
| MOSI Output Hold Time After SCLK Sample Edge       | t MOH         |                       | t SYSCLK - 25    |          |                 | ns      |
| MOSI Output Setup Time to SCLK Sample Edge         | t MOS         |                       | t SYSCLK - 25    |          |                 | ns      |
| MISO Input Setup Time to SCLK Sample Edge          | t MIS         |                       | 30               |          |                 | ns      |
| MISO Input Hold Time After SCLK Sample Edge        | t MIH         |                       | 0                |          |                 | ns      |
| SCLK Inactive to MOSI Inactive                     | t MLH         |                       | t SYSCLK - 25    |          |                 | ns      |
| MOSI Input Setup Time to SCLK Sample Edge          | t SIS         |                       | 30               |          |                 | ns      |
| MOSI Input Hold Time After SCLK Sample Edge        | t SIH         |                       | t SYSCLK + 25    |          |                 | ns      |
| MISO Output Valid After SCLK Shift Edge Transition | t SOV         |                       |                  |          | 3 t SYSCLK + 25 | ns      |
| MISO Output Disabled After SS Edge Rise            | t SLH         |                       |                  |          | 2 t SYSCLK + 50 | ns      |
| SS Falling Edge to MISO Active                     | t SOE         |                       | 2 t SYSCLK + 2.5 |          |                 | ns      |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## Electrical Characteristics (continued)

(V DVDDIO  = +5.0V, V AVDD  = +3.3V, V DVDD  = +2.5V, V REFADC  = +3.3V, system clock = 16MHz. T A  = T MIN  to T MAX , unless otherwise noted. Typical values are at T A  = +25°C.) (Note 1)

| PARAMETER                                 | SYMBOL   | MIN            | TYP   | MAX   | UNITS   |
|-------------------------------------------|----------|----------------|-------|-------|---------|
| SS Falling Edge to First SCLK Sample Edge | t SSE    | 2 t SYSCLK + 5 |       |       | ns      |
| SCLK Inactive to SS Rising Edge           | t SD     | t SYSCLK + 10  |       |       | ns      |
| Minimum CS Pulse Width                    | t SCW    | t SYSCLK + 10  |       |       | ns      |

Note 1: All devices are 100% production tested at T A  = +25°C and +125°C. Temperature limits to T A  = -40°C are guaranteed by design.

Note 2: All analog functions disabled and all digital inputs connected to supply or ground.

- Note 3: High-speed/8 mode without CAN; V DVDD  = +2.5V, CPU and 16-bit timer running at 2MHz from an external, 16MHz crystal oscillator; all other peripherals disabled; all digital I/Os static at V DVDDIO  or GNDIO; T A  = T MIN  to T MAX .
- Note 4: High-speed/1 mode with CAN; V DVDD  = +2.5V, CPU and 16-bit timer running at 16MHz from an external, 16MHz crystal oscillator; CAN enabled and communicating at 500kbps; all other peripherals disabled, all digital I/Os (except CANTXD and CANRXD) static at V DVDDIO  or GNDIO, T A  = T MIN  to T MAX .
- Note 5: Low speed, PMM1 mode without CAN; V DVDD  = +2.5V, CPU and one timer running from an external, 16MHz crystal oscillator in PMM1 mode; all other peripherals disabled; all digital I/Os static at V DVDDIO  or GNDIO, T A  = T MIN  to T MAX .
- Note 6: CAN transmitting at 500kbps; 16-bit timer output switching at 500kHz; all active I/Os are loaded with a 20pF capacitor; all remaining digital I/Os are static at V DVDDIO  or GNDIO, T A  = T MIN  to T MAX .
- Note 7: Guaranteed by design and characterization.
- Note 8: This is not a static capacitance. It is the capacitance presented to the analog input when the T/H amplifier is in sample mode.
- Note 9: The switched capacitor on the REFADC input can disturb the reference voltage. To reduce this disturbance, place a 0.1μF capacitor from REFADC to AGND as close as possible to REFADC.
- Note 10:  The digital design is fully static. However, the lower clock limit is set by a clock detect circuit. The MAXQ7670A switches to the internal RC clock if the external input goes below 166kHz. This clock detect circuit also acts to detect a crystal failure when a crystal is used.

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Figure 1. SPI Timing Diagram in Master Mode

<!-- image -->

Figure 2. SPI Timing Diagram in Slave Mode

<!-- image -->

## Typical Operating Characteristics

(V DVDDIO  = 5.0V, V AVDD  = 3.3V, V DVDD  = 2.5V, f SYSCLK  = 16MHz, ADC resolution = 12 bits, V REFDAC  = 3.3V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Typical Operating Characteristics (continued)

(V DVDDIO  = 5.0V, V AVDD  = 3.3V, V DVDD  = 2.5V, f SYSCLK  = 16MHz, ADC resolution = 12 bits, V REFDAC  = 3.3V, T A  = +25°C, unless otherwise noted.)

## MAXIMUM DVDDIO TRANSIENT DURATION vs. BOI THRESHOLD OVERDRIVE

<!-- image -->

AVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. TEMPERATURE

<!-- image -->

DVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. TEMPERATURE

<!-- image -->

MAXIMUM AVDD TRANSIENT DURATION vs. BOI THRESHOLD OVERDRIVE

<!-- image -->

AVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

DVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

AVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. DVDDIO SUPPLY VOLTAGE

<!-- image -->

DVDD LINEAR REGULATOR OUTPUT VOLTAGE vs. DVDDIO SUPPLY VOLTAGE

<!-- image -->

RC OSCILLATOR OUTPUT FREQUENCY vs. TEMPERATURE

<!-- image -->

│

## Microcontroller with 12-Bit ADC,

## PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Typical Operating Characteristics (continued)

(V DVDDIO  = 5.0V, V AVDD  = 3.3V, V DVDD  = 2.5V, f SYSCLK  = 16MHz, ADC resolution = 12 bits, V REFDAC  = 3.3V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Typical Operating Characteristics (continued)

(V DVDDIO  = 5.0V, V AVDD  = 3.3V, V DVDD  = 2.5V, f SYSCLK  = 16MHz, ADC resolution = 12 bits, V REFDAC  = 3.3V, T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## DVDDIO INCREMENTAL SUPPLY CURRENT vs. TEMPERATURE

<!-- image -->

## DVDDIO DYNAMIC SUPPLY CURRENT vs. DVDDIO SUPPLY VOLTAGE

<!-- image -->

## DVDDIO STATIC SUPPLY CURRENT vs. TEMPERATURE

<!-- image -->

SAMPLING ERROR (LSB)

<!-- image -->

DVDDIO DYNAMIC SUPPLY CURRENT vs. TEMPERATURE

<!-- image -->

## DVDDIO INCREMENTAL SUPPLY CURRENT vs. DVDDIO SUPPLY VOLTAGE

DVDDIO SUPPLY CURRENT (A)

<!-- image -->

<!-- image -->

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Pin Description

| PIN        | NAME     | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                            |
|------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | AIN7     | Analog Input Channel 7. AIN7 is multiplexed to the PGAorADC as single-ended analog input 7 or as a differential input with AIN6. As a differential input, the polarity of AIN7 is negative.                                                                                                                                                                                                         |
| 2          | AIN6     | Analog Input Channel 6. AIN6 is multiplexed to the PGAorADC as a single-ended analog input 6 or as a differential input with AIN7. As a differential input, the polarity of AIN6 is positive.                                                                                                                                                                                                       |
| 3          | AIN5     | Analog Input Channel 5. AIN5 is multiplexed to the PGAorADC as single-ended analog input 5 or as a differential input with AIN4. As a differential input, the polarity of AIN5 is negative.                                                                                                                                                                                                         |
| 4          | AIN4     | Analog Input Channel 4. AIN4 is multiplexed to the PGAorADC as single-ended analog input 4 or as a differential input with AIN5. As a differential input, the polarity of AIN4 is positive.                                                                                                                                                                                                         |
| 5          | REFADC   | ADC External Reference Input. Connect an external reference between 1V and V AVDD .                                                                                                                                                                                                                                                                                                                 |
| 6          | AGND     | Analog Ground                                                                                                                                                                                                                                                                                                                                                                                       |
| 7          | AIN3     | Analog Input Channel 3. AIN3 is multiplexed to the PGAorADC as single-ended analog input 3 or as a differential input with AIN2. As a differential input, the polarity of AIN3 is negative.                                                                                                                                                                                                         |
| 8          | AIN2     | Analog Input Channel 2. AIN2 is multiplexed to the PGAorADC as single-ended analog input 2 or as a differential input with AIN3. As a differential input, the polarity of AIN2 is positive.                                                                                                                                                                                                         |
| 9          | AIN1     | Analog Input Channel 1. AIN1 is multiplexed to the PGAorADC as single-ended analog input 1 or as a differential input with AIN0. As a differential input, the polarity of AIN1 is negative.                                                                                                                                                                                                         |
| 10         | AIN0     | Analog Input Channel 0. AIN0 is multiplexed to the PGAorADC as single-ended analog input 0 or as a differential input with AIN1. As a differential input, the polarity of AIN0 is positive.                                                                                                                                                                                                         |
| 11         | I.C.     | Internally Connected. Connect to GNDIO for proper operation.                                                                                                                                                                                                                                                                                                                                        |
| 12         | P0.0     | Port 0 Bit 0. P0.0 is a general-purpose digital I/O with interrupt/wake-up capability.                                                                                                                                                                                                                                                                                                              |
| 13         | P0.1     | Port 0 Bit 1. P0.1 is a general-purpose digital I/O with interrupt/wake-up capability.                                                                                                                                                                                                                                                                                                              |
| 14         | P0.2     | Port 0 Bit 2. P0.2 is a general-purpose digital I/O with interrupt/wake-up capability.                                                                                                                                                                                                                                                                                                              |
| 15, 22, 38 | GNDIO    | Digital I/O Ground and Regulator Ground                                                                                                                                                                                                                                                                                                                                                             |
| 16         | CANRXD   | CAN Bus Receiver Input. CAN receiver input.                                                                                                                                                                                                                                                                                                                                                         |
| 17         | CANTXD   | CAN Bus Transmitter Output. CAN transmitter output.                                                                                                                                                                                                                                                                                                                                                 |
| 18         | SS       | Active-Low, SPI Port Slave Select Input. In SPI slave mode, this is the slave select input. In SPI master mode, this is an input and connection is optional (connect if mode fault enable is required, refer to the MAXQ7670 User's Guide for a description of the SPICN register). In master mode, use an available GPIO as a slave selector and pull SS high to DVDDIO through a pullup resistor. |
| 19         | P0.6/T0  | Port 0 Bit 6/Timer 0 I/O. P0.6 is a general-purpose digital I/O with interrupt/wake-up input capability. T0 is a primary timer/PWM input or output. The alternative function, T0, is selected using the T2CNA0 register. When this function is selected, it overrides the GPIO functionality.                                                                                                       |
| 20         | P0.7/T0B | Port 0 Bit 7/Timer 0 Output. P0.7 is a general-purpose digital I/O with interrupt/wake-up input capability. T0B is a secondary timer/PWM output. The alternative function, T0B, is selected using the T2CNB0 register. When this function is selected, it overrides the GPIO functionality.                                                                                                         |
| 21, 39     | DVDDIO   | Digital I/O Supply Voltage and Regulator Supply Input. DVDDIO supplies all digital I/O except for XIN and XOUT, and supplies power to the two internal linear regulators, AVDD and DVDD. Bypass DVDDIO to GNDIO with a 0.1µF capacitor as close as possible to the device.                                                                                                                          |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Pin Description (continued)

| PIN   | NAME         | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 23    | SCLK         | SPI Serial Clock. SCLK is the SPI interface serial clock I/O. In SPI master mode, SCLK is an output. While in SPI slave mode, SCLK is an input.                                                                                                                                                                                                                                                                                                                                                        |
| 24    | MOSI         | SPI Serial Data I/O. MOSI is the SPI interface serial data output in master mode or serial data input in slave mode.                                                                                                                                                                                                                                                                                                                                                                                   |
| 25    | MISO         | SPI Serial Data I/O. MISO is the SPI interface serial data input in master mode or serial data output in slave mode.                                                                                                                                                                                                                                                                                                                                                                                   |
| 26    | REGEN2       | Active-Low +2.5V Linear Regulator Enable Input. Connect REGEN2 to GNDIO to enable the +2.5V linear regulator. Connect to DVDDIO to disable the +2.5V linear regulator.                                                                                                                                                                                                                                                                                                                                 |
| 27    | TDO          | JTAG Serial Test Data Output. TDO is the JTAG serial test, data output.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 28    | TMS          | JTAG Test Mode Select. TMS is the JTAG test mode, select input.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 29    | TDI          | JTAG Serial Test Data Input. TDI is the JTAG serial test, data input.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 30    | TCK          | JTAG Serial Test Clock Input. TCK is the JTAG serial test, clock input.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 31    | P0.4/ ADCCNV | Port 0 Bit 4/ADC Start Conversion Control. P0.4 is a general-purpose digital I/O with interrupt/wake-up capability.ADCCNV is a firmware-configurable, rising or falling edge, start/convert signal used to trigger ADC conversions. The alternative function, ADCCNV, is selected using the register bits ACNT[2:0]. When usingADCCNV as a trigger forADC conversion, set P0.4/ADCCNV as an input using the PD0 register. This action prevents any unintentional interference in the SARADC operation. |
| 32    | P0.5         | Port 0 Bit 5. P0.5 is a general-purpose digital I/O with interrupt/wake-up capability.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 33    | RESET        | Reset Input/Output. Active-low input/output with internal 55kΩ pullup to DVDDIO. Drive low to reset the MAXQ7670A. The MAXQ20 µC core holds RESET low during POR and during DVDD brownout conditions.                                                                                                                                                                                                                                                                                                  |
| 34    | DGND         | Digital Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 35    | XOUT         | High-Frequency Crystal Output. Connect an external crystal to XIN and XOUT for normal operation, or leave unconnected if XIN is driven with an external clock source. Leave unconnected if an external clock source is not used.                                                                                                                                                                                                                                                                       |
| 36    | XIN          | High-Frequency Crystal Input. Connect an external crystal or resonator to XIN and XOUT for normal operation, or drive XIN with an external clock source. Leave unconnected if an external clock source is not used.                                                                                                                                                                                                                                                                                    |
| 37    | DVDD         | Digital Supply Voltage. DVDD supplies internal digital core and flash memory. DVDD is directly connected to the output of the internal +2.5V linear regulator. Disable the internal regulator (through REGEN2 ) to connect an external supply. Bypass DVDD to DGND with a 0.1µF capacitor as close as possible to the device.                                                                                                                                                                          |
| 40    | AVDD         | Analog Supply Voltage. AVDD supplies PGAand ADC.AVDD is directly connected to the output of the internal +3.3V linear regulator. Disable the internal regulator (via software) to connect an external supply. BypassAVDD toAGND with a 0.1µF capacitor as close as possible to the device.                                                                                                                                                                                                             |
| -     | EP           | Exposed Pad. Connect EP to the ground plane.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Block Diagram

<!-- image -->

w

## MAXQ7670A

## Detailed Description

The MAXQ7670A incorporates a 16-bit RISC arithmetic logic  unit  (ALU)  with  a  Harvard  memory  architecture that  addresses  64KB  (32K  x  16)  of  flash  and  2048 bytes (1024 x 16) of RAM memory. This core combined with  digital  and  analog  peripherals  provide  versatile data-acquisition  functions.  The  peripherals  include  up to  seven  digital  I/Os,  a  4-wire  SPI  interface,  a  CAN 2.0B bus, a JTAG interface, a timer, an integrated RC oscillator, two linear regulators, a watchdog timer, three power-supply  supervisors,  a  12-bit  125ksps  SAR  ADC with programmable-gain amplifier (PGA) and eight singleended or four differential multiplexed inputs. The power-

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

efficient  MAXQ20  μC  core  consumes  less  than  1mA/ MIPS.  Refer  to  the  MAXQ7670  User's  Guide  for  more detailed information on configuring and programming the MAXQ7670A.

## Analog Input Peripheral

The  integrated  12-bit  ADC  employs  an  ultra-low-power SAR-based  conversion  method  and  operates  up  to 125ksps with PGA = 1V/V (75.5ksps with PGA = 16V/V). The  integrated  8-channel  multiplexer  (mux)  and  PGA allow  the  ADC  to  measure  eight  single-ended  (relative to  AGND)  or  four  fully  differential  analog  inputs  with software-selectable  input  ranges  through  the  PGA.  See Figures 3 and 4.

Figure 3. Simplified Analog Input Diagram (Eight Single-Ended Inputs)

<!-- image -->

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Figure 4. Simplified Analog Input Diagram (Four Fully Differential Inputs)

<!-- image -->

│

## MAXQ7670A

The MAXQ7670A ADC uses a fully differential SAR conversion technique and an integrated T/H (track and hold) block to convert voltage signals into a 12-bit digital result. Both  single-ended  and  differential  configurations  are implemented  using  an  analog  input  channel  multiplexer that  supports  8  single-ended  or  4  differential  channels. In single-ended mode, the mux selects from either of the ground-referenced analog inputs AIN0-AIN7. In differential  input  configuration,  analog  inputs  are  selected  from the  following  pairs:  AIN0/AIN1,  AIN2/AIN3,  AIN4/AIN5, and AIN6/AIN7. Table 1 shows the single-ended and differential input configurations possible for the ADC mux.

## Analog Input Track and Hold

A SAR conversion in the MAXQ7670A has different T/H cycles depending on whether a gain of 1 (bypass) or a gain of 16 (PGA enabled) is selected.

Table 1. ADC Mux Input Configurations

|   SAR CHANNEL SELECT (REGISTER ACNT[14:11]) | SIGNAL CHANNEL INTO ADC   | REFERENCE CHANNEL INTO ADC   | MEASUREMENT TYPE                   |
|---------------------------------------------|---------------------------|------------------------------|------------------------------------|
|                                        0000 | AIN0                      | AGND                         | Single-ended measurement on AIN0   |
|                                        0001 | AIN1                      | AGND                         | Single-ended measurement on AIN1   |
|                                        0010 | AIN2                      | AGND                         | Single-ended measurement on AIN2   |
|                                        0011 | AIN3                      | AGND                         | Single-ended measurement on AIN3   |
|                                        0100 | AIN4                      | AGND                         | Single-ended measurement on AIN4   |
|                                        0101 | AIN5                      | AGND                         | Single-ended measurement on AIN5   |
|                                        0110 | AIN6                      | AGND                         | Single-ended measurement on AIN6   |
|                                        0111 | AIN7                      | AGND                         | Single-ended measurement on AIN7   |
|                                        1000 | -                         | -                            | Reserved                           |
|                                        1001 | -                         | -                            | Reserved                           |
|                                        1010 | AIN0                      | AIN1                         | AIN0/AIN1                          |
|                                        1011 | AIN2                      | AIN3                         | AIN2/AIN3                          |
|                                        1100 | AIN4                      | AIN5                         | AIN4/AIN5                          |
|                                        1101 | AIN6                      | AIN7                         | AIN6/AIN7                          |
|                                        1110 | -                         | -                            | Reserved                           |
|                                        1111 | -                         | -                            | VCIM differential zero offset trim |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## Gain = 1V/V

In gain = 1V/V, the conversion has a two-stage T/H cycle. In track mode, a positive input capacitor connects to the signal channel. A negative input capacitor connects to the reference  channel. After  the  T/H  enters  hold  mode,  the difference between the signal and the reference channel is converted to a 12-bit value. This two-stage cycle takes 16 SARCLKs to complete.

## Gain = 16V/V

In  gain  =  16V/V,  the  conversion  has  a  three-stage  T/H cycle: amplification, ADC track, and ADC hold. First, the PGA tracks the selected input and reference signals. The PGA amplifies the difference between the two signals and holds the result for the next stage, ADC track. The ADC tracks  and  converts  the  PGA  result  into  a  12-bit  value. The  SAR  operation  itself  does  not  change  irrespective of  the  chosen  gain.  This  three-stage  cycle  takes  26.5 SARCLKs to  complete.  Figure  5  shows  the  conversion timing differences between gain = 1V/V and gain = 16V/V.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Figure 5. Conversion Timing Differences Between Gain = 1V/V and Gain = 16V/V

<!-- image -->

## Input Impedance

The  input-capacitance  charging  rate  determines  the time required for the T/H to acquire an input signal. The required  acquisition  time  lengthens  with  the  increase  of the  input  signals  source  resistance.  Any  source  below 5kΩ does not significantly affect the ADC's performance. A  high-impedance  source  can  be  accommodated  by placing a 1μF capacitor between the input channel and AGND. The combination  of  analog-input  source  impedance and the capacitance at the analog input creates an RC filter that limits the analog-input bandwidth.

## Controlling ADC Conversions

Use the following methods to control the ADC conversion timing:

- 1)  Software register bit control
- 2)  Continuous conversion
- 3)  Internal timer (T0)
- 4)  External input through ADCCNV

Refer to the MAXQ7670 User's Guide for  more detailed information on the ADC and mux.

## POR and Brownout

The  MAXQ7670A operates  from  a  single,  external  +5V supply  connected  to  the  DVDDIO.  DVDDIO  is  the  supply  rail  for  the  digital  I/O  and  the  supply  input  for  both integrated  linear  regulators.  The  +3.3V  linear  regulator powers AVDD,  while  the  +2.5V  linear  regulator  powers DVDD. Alternatively,  connect REGEN2 to  DVDDIO  and apply external power supplies to AVDD and DVDD.

Power supplies DVDDIO, DVDD, and AVDD each include a  brownout monitor that alerts the μC through an inter -rupt when the corresponding supply voltages drop below a  defined  threshold. This  condition  is  generally  referred to  as  brownout  interrupt  (BOI).  Enable  BOI  by  setting the VABE, VDBE, and VIBE bits in the APE register. By continually checking for low supply voltages, appropriate action can be taken for brownout conditions.

## Startup Using Internal Regulators

Once  the  +5V  DVDDIO  supply  reaches  approximately 1.25V,  the  +2.5V  linear  regulator  turns  on  and  DVDD begins ramping. Between the DVDD levels of 1V and the reset  threshold,  the  DVDD  monitor  holds RESET low. DVDD releases RESET after  reaching  the  reset  threshold. The MAXQ7670A jumps to the reset vector location (8000h  in  the  utility  ROM).  During  this  time,  DVDD  finishes ramping to its nominal voltage of +2.5V.

During this POR time, the software-enabled +3.3V linear regulator remains off. Turn on the +3.3V linear regulator after the MAXQ7670A has completed its bootup routines and is running application code. To turn on the +3.3V regulator, set the LRAPD bit in the APE register to 0. The AVDD supply begins ramping to its nominal voltage of +3.3V.

## Brownout Detectors

The MAXQ7670A features brownout monitors for the +5V DVDDIO, +3.3V AVDD, and +2.5V DVDD power supplies. When enabled, these monitors generate interrupts when DVDDIO,  AVDD,  or  DVDD  fall  below  their  respective brownout  thresholds.  Monitoring  the  supply  rails  alerts the μC to brownout conditions so appropriate action can be taken. Under normal conditions the DVDDIO brownout monitor signals a falling +5V supply before the DVDD or AVDD brownout monitors indicate that the +2.5V or +3.3V are falling. The exceptions to this condition are:

- If  either  DVDD  or AVDD are externally powered and the source of power is removed
- If there is some type of device failure that pulls the reg -ulator outputs low without affecting the +5V DVDDIO supply

## MAXQ7670A

The DVDD reset supervisor resets the MAXQ7670A when the  +2.5V  DVDD  falls  below  the  reset  threshold.  The processor remains in reset until DVDD returns above the reset threshold. The μC does not execute commands in reset mode. See Figure 6 for the μC response to DVDD brownout and reset.

Refer  to  the MAXQ7670 User's Guide for  detailed  programming information, and a more thorough description of POR and brownout behavior.

## Internal 3.3V Linear Regulator

The integrated 3.3V 50mA linear regulator or an external 3.3V supply powers AVDD. The integrated 3.3V regulator is inactive upon power-up. Enable the integrated regulator with  software programming after power-up. When using an  external  supply,  connect  a  regulated  3.3V  supply  to AVDD after applying DVDDIO.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## Internal 2.5V Linear Regulator

The integrated 2.5V 50mA linear regulator or an external 2.5V  supply  applied  at  DVDD  powers  DVDD.  Connect REGEN2 to  GNDIO  to  enable  the  integrated  regulator. Connect REGEN2 to DVDDIO to use an external supply. When using an external supply, connect a regulated 2.5V supply to DVDD after applying DVDDIO.

## DVDDIO Current Requirements

Both internal linear regulators are capable of supplying up to 50mA each. When using the regulators to power AVDD and  DVDD  and  to  provide  power  to  external  devices, make sure DVDDIO's power input can source a current greater than the sum of the MAXQ7670A supply current and the load currents of the two regulators.

Figure 6. DVDD Brownout and Reset Behavior

<!-- image -->

│

## MAXQ7670A

## System Clock Generator

The MAXQ7670A oscillator module provides the master clock generator that supplies the system clock for the μC core and all of the peripheral modules. The high-frequency  oscillator  operates  with  an  8MHz  or  16MHz  crystal. Alternatively, use the integrated RC oscillator in applications that do not require precise timing. The MAXQ7670A executes  most  instructions  in  a  single  SYSCLK  period. The  oscillator  module  contains  all  of  the  primary  clock generation  circuitry.  Figure  7  shows  a  block  diagram  of the system clock module.

The MAXQ7670A contains the following features for generating its master clock signal timing source:

- Internal, fast-starting, 15MHz RC oscillator eliminates external crystal
- Internal  high-frequency  oscillator  that  can  drive  an external 8MHz or 16MHz crystal
- External high-frequency 0.166MHz to 16MHz clock input
- Power-up timer
-  Power-saving management modes
- Fail-safe modes

## Watchdog Timer

The primary function of the watchdog timer is to supervise software execution, watching for stalled or stuck software. The watchdog timer performs a controlled system restart when the μC fails to write to the watchdog timer register before a selectable timeout interval expires. A watchdog timer typically has four objectives:

Figure 7. High-Frequency and RC Oscillator Functional Diagram

<!-- image -->

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

- 1)  To detect if a system is operating normally
- 2)  To detect an infinite loop in any of the tasks
- 3)  To detect an arbitration deadlock involving two or more tasks
- 4)  To detect if some lower priority tasks are not getting to run because of higher priority tasks

As  illustrated  in  Figure  8,  the  internal  RC  oscillator (CLK\_RC) drives the watchdog timer through a series of dividers. The programmable divider output determines the timeout interval.  When enabled, the interrupt flag WDIF sets. A system reset occurs after a time delay (based on the divider ratio) unless an interrupt service routine clears the watchdog interrupt.

The watchdog timer functions as the source of both the watchdog interrupt and the watchdog reset. The interrupt timeout has a default divide ratio of 2 12  of the CLK\_RC, with  the  watchdog  reset  set  to  timeout  2 9   clock  cycles later.  With  the  nominal  RC  oscillator  value  of  15MHz, an  interrupt  timeout  occurs  every  0.273ms,  followed  by a watchdog reset 34μs later. The watchdog timer resets to the default divide ratio following any reset event. Use the WD0 and WD1 bits in the WDCN register to increase the watchdog interrupt period. Changing the WD[1:0] bits before a watchdog interrupt timeout occurs (i.e. before the watchdog reset counter begins) resets the watchdog timer count. The watchdog reset timeout occurs 512 RC oscillator cycles after the watchdog interrupt timeout. For more information on the MAXQ7670A watchdog timer, refer to the MAXQ7670 User's Guide .

Figure 8. Watchdog Functional Diagram

<!-- image -->

│

## MAXQ7670A

## Timer and PWM

The  MAXQ7670A  includes  a  16-bit  timer  channel.  The timer  offers  two  ports,  T0  and  T0B,  to  facilitate  PWM outputs, and capture timing events. The autoreload 16-bit timer/counter offers the following functions:

- 8-/16-bit timer/counter
- Up/down autoreload
- Counter function of external pulse
- Capture
-  Compare
-  PWM output
- Event timer
- System supervisor

Refer to the MAXQ7670 User's Guide and Application Note 3205: Using Timers in the MAXQ Family of Microcontrollers for more information about the timer module.

## CAN Interface Bus

The  MAXQ7670A  incorporates  a  fully  compliant  CAN 2.0B controller.

Two groups of registers provide the μC interface to the CAN controller. To simplify the software associated with the operation of the CAN controllers, most of the global CAN status and controls as well as the individual message  center  control/status  registers  are  located  in  the peripheral  register  map.  The  remaining  registers  associated  with  the  data  identification,  identification  masks, format,  and  data  are  located  in  a  dual  port  memory  to allow  the  CAN  controller  and  the  processor  access  to the  required  functions.  The  CAN  controller  can  directly access  the  dual  port  memory.  The  processor  accesses the dual port memory through a dedicated interface that consists of the CAN 0 data pointer (C0DP) and the CAN 0 data buffer (C0DB) special function registers. See Figure 9 for CAN controller details.

## CAN Functional Description

The CAN module stores up to 15 messages. Each message consists of an acceptance identifier and 8 bytes of data. The MAXQ7670A supports both the standard 11-bit and extended 29-bit identification modes.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Configure each of the first 14 message centers either to transmit or receive. Message center 15 is a receive-only center,  storing  any  message  that  centers  1-14  do  not accept.

A message center only accepts an incoming message if the following conditions are satisfied:

- The incoming message's arbitration value matches the message center's acceptance identifier
- The first 2 data bytes of the incoming message match the  bytes  in  the  media  arbitration  registers  (C0MA0 and C0MA1)

Use  the  global  mask  registers  to  mask  out  bits  in  the incoming message that do not require a comparison.

A  message  center,  configured  to  transmit,  meets  these conditions: T/R = 1, TIH = 0, DTUP = 1, MSRDY = 1, and MTRQ = 1. The message center  transmits  its  contents when it receives an incoming request message containing the same identifier (i.e., a remote frame).

Global  control  and  status  registers  in  the  CAN  unit enable the μC to evaluate error messages, validate and locate  new  data,  establish  the  bus  timing  for  the  CAN bus, establish the identification mask bits, and verify the source of individual messages. In addition, each message center is individually equipped with the necessary status and controls to establish directions, interrupt generation, identification  mode  (standard  or  extended),  data  field size,  data  status,  automatic  remote  frame  request  and acknowledgment, and masked or nonmasked identification acceptance testing.

## JTAG Interface Bus

The joint test action group (JTAG) IEEE ®  1149.1 standard defines  a  unique  method  for  in-circuit  testing  and  programming. The MAXQ7670A conforms to this standard, implementing  an  external  test  access  port  (TAP)  and internal  TAP  controller  for  communication  with  a  JTAG bus master, such as an automatic test equipment (ATE). For detailed information on the TAP and TAP controller, refer  to  IEEE  Standard  1149.1  on  the  IEEE  website  at www.standards.ieee.org. The JTAG on the MAXQ7670A does not support boundary scan test capability.

## MAXQ7670A

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Figure 9. CAN 0 Controller Block Diagram

<!-- image -->

The  TAP  controller  communicates  synchronously  with the  host  system  (bus  master)  through  four  digital  I/Os: test mode select (TMS), test clock (TCK), test data input (TDI), and test data output (TDO). The internal TAP module consists of several shift registers and a TAP controller (see Figure 11). The shift registers serve as transmit-andreceive data buffers for a debugger.

## 4-Wire SPI Bus

The MAXQ7670A includes a powerful hardware SPI module,  providing  serial  communication  with  a  wide  variety of  external  devices.  The  SPI  port  on  the  MAXQ7670A is  a  fully  independent  module  that  is  accessed  through software.  This  full  4-wire,  full-duplex  serial  bus  module supports master and slave modes.

│

## MAXQ7670A

The SPI clock frequency is limited to SYSCLK/2 in master mode  and  SYSCLK/8  in  slave  mode.  Figure  10  shows the functional diagram of the SPI port. Figures 1 and 2 illustrate  the  timing  parameters  listed  in  the Electrical Characteristics table.

## General-Purpose Digital I/Os

The MAXQ7670A provides seven general-purpose digital I/Os (GPIOs). Some of the GPIOs include an additional special  function  (SF),  such  as  a  timer  input/output.  For example, the state of P0.6/T0 is programmable to depend on timer channel 0 logic. When used as a port, each I/O is configurable for high-impedance, weak pullup to DVDDIO or pulldown to GNDIO.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

At  power-up,  each  GPIO is  configured  as  an  input  with a pullup to DVDDIO. In addition, each GPIO can be programmed to cause an interrupt (on falling or rising edges). In stop mode, use any interrupt to wake-up the device.

The  port  direction  (PD)  register  determines  the  input/ output direction of each I/O. The port output (PO) register contains the current state of the logic output buffers. When an I/O  is  configured  as  an  output,  writing  to  the PO register controls the output logic state. Reading the PO register shows the current state of the output buffers, independent of the data direction. The port input (PI) register is a read-only register that always reflects the logic state of the I/Os.

Figure 10. SPI Functional Diagram

<!-- image -->

│

## MAXQ7670A

The drive capability of the I/O, when configured for output, depends on the value in the PS0 (pad drive strength) register and can be set for either 1mA or 2mA. When an I/O  is  configured  as  an  input,  writing  to  the  PO  register enables/disables the pullup/pulldown resistor. The value in the PRO (pad resistive pull direction) register sets the enabled resistor at the I/O as either a pullup to DVDDIO or pulldown to GNDIO.

Refer to the MAXQ7670 User's Guide for more detailed information.

## Port Characteristics

The  MAXQ7670A  includes  a  bidirectional  7-bit  I/O  port (P0) whose features include:

- Schmitt trigger input circuitry with software-selectable high-impedance  or  weak  pullup  to  DVDDIO  or  pulldown to GNDIO
- Software-selectable  push-pull  CMOS  output  drivers capable of sinking and sourcing 0.5mA
- Falling or rising edge interrupt capability
- P0.4, P0.6, and P0.7 I/Os contain an additional special function, such as a logic input/output for a timer channel
- Selectable pad drive strength and resistive pull direction for  more  details.

Refer to  the MAXQ7670 User's Guide Figure 11 illustrates the functional blocks of an I/O.

Figure 11. Digital I/O Circuitry

<!-- image -->

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ20 Core Architecture

The  MAXQ7670A's  core  is  a  member  of  the  low-cost, high-performance,  CMOS,  fully  static,  16-bit  MAXQ20 core  μCs.  The  MAXQ7670A  is  structured  on  a  highly advanced, accumulator-based, 16-bit RISC architecture. Fetch  and  execution  operations  complete  in  one  cycle without  pipelining  because  the  instruction  contains  both the op code and data. The result is a streamlined 1 million instructions-per-second-per-megahertz (MIPS/MHz) μC.

The highly efficient core is supported by a 16-level hardware  stack,  enabling  fast  subroutine  calling  and  task switching.  The  internal  data  pointers  manipulate  data quickly and efficiently. Multiple data pointers allow more than one function to access data memory without having to  save  and  restore  data  pointers  each  time.  The  data pointers  can  automatically  increment  or  decrement  following  an  operation,  eliminating  the  need  for  software intervention and increasing application speed.

## Instruction Set

The  instruction  set  is  composed  of  fixed-length,  16-bit instructions  that  operate  on  registers  and  memory  locations. The highly orthogonal instruction set allows arithmetic and logical operations to use any register along with the accumulator. Special-function registers (also called peripheral registers) control the peripherals and are subdivided into  register  modules.  The  modular  family  architecture allows new devices and modules to reuse code developed for  existing  products.  The  architecture  is  transport-triggered. This means that writes or reads from certain register locations can also cause side effects to occur. These side effects form the basis for the higher-level op codes defined by the assembler, such as ADDC, OR, JUMP, etc.

## Memory Organization

The  MAXQ7670A  incorporates  the  following  memory areas (see Figure 12):

- 8KB (4K x 16) utility ROM
- 64KB (32K x 16) of flash memory for program storage
- 2048 bytes (1024 x 16) of SRAM for storage of tempo -rary variables
- 16-level stack memory for storage of program return addresses and general-purpose use

A 16-bit-wide x 16 deep internal hardware stack provides storage  for  program  return  addresses  and  general-purpose use. The MAXQ7670A core implicitly uses the stack when  executing  an  interrupt  service  routine  (ISR)  and also when running CALL, RET, and RETI instructions. The stack can also be explicitly used by the application code

│

## MAXQ7670A

to store data when context switching (e.g., during a call or  an  interrupt).  Storing  and  retrieving  data  is  executed through the PUSH, POP, and POPI instructions.

The incorporation of flash memory allows device reprogramming,  eliminating  the  expense  of  discarding  onetime  programmable devices during development and field upgrades (see Figure 13 for the flash memory sector maps).

A 16-word key protects the flash memory from access by unauthorized individuals. Without supplying the 16-word key,  the  password  lock  (PWL)  bit  in  the  SC  register remains set, and the utility ROM is inaccessible. Supplying the 16-word key makes the utility ROM transparent. The password-unlock  command  is  issued  through  the  TAP interface.  The  16-word  password  is  compared  to  the password in the program space to determine its validity.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Enabling  a  pseudo-Von  Neumann  memory  map  places the  utility  ROM,  code,  and  data  memory  into  a  single contiguous memory map. Use this mapping scheme for applications that require dynamic program modification or unique memory configurations.

Figure 13. Flash Memory Sector Maps

<!-- image -->

Figure 12. MAXQ7670A Memory Map

<!-- image -->

## MAXQ7670A

## Stack Memory

A 16-bit-wide x 16 deep internal hardware stack provides storage  for  program  return  addresses  and  general-purpose  use.  The  processor  uses  the  stack  automatically when executing the CALL, RET, and RETI instructions and when servicing interrupts. The stack stores and retrieves data through the PUSH, POP, and POPI instructions.

On reset, the stack pointer, SP, initializes to the top of the stack  (0Fh).  The  CALL,  PUSH,  and  interrupt-vectoring operations increment SP, then store a value at the location pointed to by SP. The RET, RETI, POP, and POPI operations retrieve the value at SP and then decrement SP.

## Utility ROM

The utility ROM is a 8KB (4K x 16) block of internal ROM memory that defaults to a starting address of 8000h. The utility ROM consists of subroutines accessed from application software. These include:

- In-system programming (bootstrap loader) over JTAG and CAN
- In-circuit debug routines
- Routines for in-application flash programming and fast table lookup

Following any reset, execution begins in the utility ROM. The  ROM  software  determines  whether  the  program execution  should  immediately  jump  to  location  0000h, the start of user-application code, or to one of the above routines. Utility ROM routines are accessible in the application software. For more information on the utility ROM contents, refer to the MAXQ7670 User's Guide .

## Programming Flash Memory

The  MAXQ7670A  allows  the  user  to  program  its  flash through  the  JTAG  or  the  CAN  port  by  allowing  access to  the  ROM-based bootloader through these ports. The bootloader  is  entered  in  one  of  three  ways:  by  a  JTAG request  during  the  power-up  sequence,  through  a  CAN request  immediately  after  power-up  when  no  password has  been  set,  and  by  jumping  to  the  bootloader  from the  application  code.  After  a  reset,  the  MAXQ7670A instruction pointer jumps to the beginning of ROM code (0x8000). The ROM code does some initial housekeeping and then looks for a request from the JTAG port. If there is a valid request (i.e., SPE = 1, PSS = 00), the processor establishes communication between the ROM bootloader and the JTAG port. If there is no JTAG request and the password has been set (0x0010 to 0x001F is not all 0s or

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

all Fs), then program execution jumps to the application code at address 0x0000. If the password has not been set (0x0010 to 0x001F is all 0s or all Fs), the ROM code monitors the CAN port for 5s waiting to receive 0x3E. If this character is not detected within 5s, program execution  jumps  to  the  application  code  at  address  0x000.  If 0x3E is detected during the five-second window, the CAN port is established as the bootloader communication port and the MAXQ7670A responds with 0x3E, verifying that it is in the loader mode. CAN bootloader communication speed  is  set  to  500kbaud  when  using  a  16MHz  crystal and 250kbaud when using an 8MHz crystal.

Once  communication  has  been  established  with  the loader, the host has access to all the family 0 commands regardless of the state of the PWL bit. If PWL = 0, all the loader commands are accessible. Family 0 commands all start with a 0 and provide basic functionality, but do not allow  access  to  information  in  either  program  memory or  data  memory.  This  prevents  unauthorized  access  of proprietary  information.  A  mass  erase  of  the  flash  sets all flash memory including the password to 0xFFFF. With this condition, it is as if no password has been set and the PWL bit is set to 0, which allows access to all loader commands. For more information on password protection and loader commands, refer to the MAXQ7670 User's Guide .

## In-Application Programming

The in-application programming feature allows the μC to modify  its  own  flash  program  memory  while  simultaneously executing its application software. This allows onthe-fly  software  updates  in  mission-critical  applications that cannot afford downtime. In-application programming also allows the application to develop custom loader software that can operate under the control of the application software. The utility ROM contains user-accessible flash programming  functions  that  erase  and  program  flash memory. These  functions  are  described  in  detail  in  the MAXQ7670 User's Guide .

## Register Set

Register  sets  control  the  MAXQ7670A  functions. These registers provide a working space for memory operations as well as configuring and addressing peripheral registers on the device. Registers are divided into two major types: system registers  and  peripheral  registers.  The  common register set, also known as the system registers, includes the ALU,  accumulator  registers,  data  pointers,  interrupt vectors and control, and stack pointer. Tables 2-5 show the MAXQ7670A register set.

## MAXQ7670A

## Power Management

Advanced power-management features minimize power consumption  by  dynamically  matching  the  processing speed  of  the  device  to  the  required  performance  level. During periods of reduced activity, lower the system clock speed  to  reduce  power  consumption.  Use  the  sourceclock-divide  feature  to  reduce  the  system  clock  speed to 1/2, 1/4, and 1/8 of the source clock's speed. A lower power  state  is  thus  achievable  without  additional  hardware.  For  extremely  power-sensitive  applications,  two additional low-power modes are available:

-  PMM: divide-by-256 power-management mode (PMME = 1)
- Stop mode (STOP = 1)

Enabling PMM reduces the system clock speed to 1/256 of  the  source  clock  speed,  and  significantly  reduces power  consumption.  The  optional  switchback  feature allows enabled interrupt sources including external, CAN, and SPI interrupts to bring the μC out of the power-man -agement mode and to run at a faster system clock speed.

Power  consumption  is  minimal  in  stop  mode.  In  this mode, the external oscillator, internal RC oscillator, system clock, and all processing activity stop. Triggering an enabled  external  interrupt  or  applying  an  external  reset signal to RESET brings the μC out of stop mode. Upon exiting stop mode, the μC can either wait for the external crystal to warm up, or execute immediately by using the internal RC oscillator as the crystal warms up.

## Interrupts

Multiple interrupt sources are available for quick response to internal and external events. Examples of events that can trigger an interrupt are:

- Watchdog interrupt
- GPIO0-GPIO7 interrupts
- SPI  mode  fault,  write  collision,  receive  overrun,  and transfer complete interrupts
- Timer 0 low compare, low overflow, capture/compare, and overflow interrupts
- CAN0 receive and transmit interrupts and a change in CAN0 status register interrupt
- ADC data ready interrupt
- Voltage brownout interrupts
- Crystal oscillator failure interrupt

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

Each interrupt has flag and enable bits. The flag indicates whether an interrupt event has occurred. Enable the μC to generate an interrupt by setting the enable bit. Interrupts are organized into modules. Enable the interrupt individually, by module, and globally.

The μC jumps to an ISR after an enabled interrupt event occurs.  Use  the  interrupt  identification  register  (IIR)  to determine whether the interrupt is a system or peripheral interrupt. In the ISR, clear the interrupt flag to eliminate repeated  interrupts  from  the  same  event. After  clearing the interrupt, allow a delay before issuing the return from interrupt (RETI) instruction. Asynchronous interrupt flags require a one-instruction delay and synchronous interrupt flags require a two-instruction delay.

The MAXQ architecture uses a single interrupt vector (IV) and single ISR design. The IV register holds the address of  the  ISR.  In  the  application  code,  assign  a  unique address  to  each  ISR.  Otherwise,  the  IV  automatically jumps to 0000h, the beginning of application code, after an enabled interrupt occurs.

## Reset Sources

Reset sources are provided for μC control. Although code execution stops in the reset state, the internal RC oscillator  continues  to  oscillate.  Internal  resets,  such  as  the power-on and watchdog resets, pull RESET low.

## Power-On Reset (POR)

An internal POR circuit enhances system reliability. The POR circuit forces the device to perform a POR whenever a rising voltage on DVDD climbs above the POR threshold. At this point the following events occur:

- All registers and circuits enter the default state
- The POR flag (WDCN.7) sets to indicate if the source of the reset was a loss of power
- The internal 15MHz RC oscillator becomes the clock source
- Code execution begins at location 8000h

Refer to the MAXQ7670 User's Guide for more information.

## Watchdog Timer Reset

The  watchdog  timer  functions  are  described  in  the MAXQ7670 User's Guide . Execution resumes at location 8000h following a watchdog timer reset.

## External System Reset

Pulling RESET low externally causes the device to enter the reset state. The external reset functions as described in  the MAXQ7670 User's Guide .  Execution  resumes  at location 8000h after RESET is released.

## MAXQ7670A

## Crystal Selection

The  MAXQ7670A  uses  an  8MHz  or  16MHz  Jauch JXG53P2 (or similar specification):

Frequency: 8MHz or 16MHz ±0.25%.

CLOAD: 12pF.

CO: &lt; 7pF max.

Series resonance resistance: max 50Ω/300Ω for 16MHz/8MHz, respectively.

Note: Series  resonance  resistance  is  the  resistance observed  when  the  resonator  is  in  the  series  resonant condition.  This  is  a  parameter  often  stated  by  quartz crystal  vendors  and  is  called  R1.  When  a  resonator  is used in the parallel resonant mode with an external load capacitance, as is the case with the MAXQ7670A oscillator circuit, the effective resistance is sometimes stated. This effective resistance at the loaded frequency of oscillation is:

<!-- formula-not-decoded -->

Table 2. System Register Map

| REGISTER   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   | MODULE NAME (BASE SPECIFIER)   |
|------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| INDEX      | AP (8h)                        | A (9h)                         | PFX (Bh)                       | IP (Ch)                        | SP (Dh)                        | DPC (Eh)                       | DP (Fh)                        |
| 0h         | AP                             | A[0]                           | PFX[0]                         | IP                             | -                              | -                              | -                              |
| 1h         | APC                            | A[1]                           | PFX[1]                         | -                              | SP                             | -                              | -                              |
| 2h         | -                              | A[2]                           | PFX[2]                         | -                              | IV                             | -                              | -                              |
| 3h         | -                              | A[3]                           | PFX[3]                         | -                              | -                              | OFFS                           | DP0                            |
| 4h         | PSF                            | A[4]                           | PFX[4]                         | -                              | -                              | DPC                            | -                              |
| 5h         | IC                             | A[5]                           | PFX[5]                         | -                              | -                              | GR                             | -                              |
| 6h         | IMR                            | A[6]                           | PFX[6]                         | -                              | LC0                            | GRL                            | -                              |
| 7h         | -                              | A[7]                           | PFX[7]                         | -                              | LC1                            | BP                             | DP1                            |
| 8h         | SC                             | A[8]                           |                                | -                              | -                              | GRS                            | -                              |
| 9h         | -                              | A[9]                           | -                              | -                              | -                              | GRH                            | -                              |
| Ah         | -                              | A[10]                          | -                              | -                              | -                              | GRXL                           | -                              |
| Bh         | IIR                            | A[11]                          | -                              | -                              | -                              | FP                             | -                              |
| Ch         | -                              | A[12]                          | -                              | -                              | -                              | -                              | -                              |
| Dh         | -                              | A[13]                          | -                              | -                              | -                              | -                              | -                              |
| Eh         | CKCN                           | A[14]                          | -                              | -                              | -                              | -                              | -                              |
| Fh         | WDCN                           | A[15]                          | -                              | -                              | -                              | -                              | -                              |

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

For typical C O  and C LOAD  values, the effective resistance can be greater than R1 by a factor of two.

## Development and Technical Support

Highly versatile,  affordably  priced  development  tools  for this μC are available from Maxim and third-party suppli -ers. Tools for the MAXQ7670A include:

- Compilers
- Evaluation kits
- JTAG-to-serial converters for programming and debug -ging

A  list  of  development  tool  vendors  can  be  found  at www.maximintegrated.com/microcontrollers . For technical  support,  go  to www.maximintegrated.com/ support .

## MAXQ7670A

## Table 3. System Register Bit and Reset Values

| REGISTER               | REGISTER BIT                | REGISTER BIT                | REGISTER BIT    | REGISTER BIT      | REGISTER BIT    | REGISTER BIT      | REGISTER BIT               | REGISTER BIT       | REGISTER BIT                                            | REGISTER BIT               | REGISTER BIT                    | REGISTER BIT                           | REGISTER BIT                                             | REGISTER BIT   | REGISTER BIT                                 | REGISTER BIT                                 |
|------------------------|-----------------------------|-----------------------------|-----------------|-------------------|-----------------|-------------------|----------------------------|--------------------|---------------------------------------------------------|----------------------------|---------------------------------|----------------------------------------|----------------------------------------------------------|----------------|----------------------------------------------|----------------------------------------------|
|                        | 15                          | 14                          | 13              | 12                | 11              | 10                | 9                          | 8                  | 7                                                       | 6                          | 5                               | 4                                      | 3                                                        | 2              | 1                                            | 0                                            |
| AP                     |                             |                             |                 |                   |                 |                   |                            |                    | - 0                                                     | - 0                        | - 0                             | - 0                                    | 0                                                        | AP (4 0        | Bits) 0                                      | 0                                            |
| APC                    |                             |                             |                 |                   |                 |                   |                            |                    | CLR 0                                                   | IDS 0                      | -                               | -                                      | - 0                                                      | MOD2 0         | MOD1 0                                       | MOD0 0                                       |
| PSF                    |                             |                             |                 |                   |                 |                   |                            |                    | Z                                                       | S                          | 0 -                             | 0 GPF1                                 | GPF0                                                     | OV             | C                                            | E                                            |
| IC                     |                             |                             |                 |                   |                 |                   |                            |                    | 1 -                                                     | 0 -                        | 0 CGDS                          | 0 -                                    | 0 -                                                      | 0 -            | 0 INS                                        | 0 IGE                                        |
| IMR                    |                             |                             |                 |                   |                 |                   |                            |                    | 0 IMS                                                   | 0 -                        | 0 IM5                           | 0 IM4                                  | 0 IM3                                                    | 0 IM2          | 0 IM1 0                                      | 0 IM0                                        |
| SC                     |                             |                             |                 |                   |                 |                   |                            |                    | 0 TAP 1                                                 | 0 -                        | 0 CDA1                          | 0 CDA0                                 | 0 UPA                                                    | 0 ROD 0        | PWL s*                                       | 0 - 0                                        |
| IIR CKCN               |                             |                             |                 |                   |                 |                   |                            |                    | IIS 0 XT                                                | 0 - 0 -                    | 0 II5 0 RGMD                    | 0 II4 0                                | 0 II3 0                                                  | II2            | II1 0 CD1                                    | II0 0 CD0                                    |
| WDCN                   |                             |                             |                 |                   |                 |                   |                            |                    | s* POR                                                  | 0 EWDI s*                  | s*                              | STOP 0 WD0                             | 0 SWB 0 s*                                               | PMME           | 0 EWT s*                                     | 1                                            |
| A[n] (0..15)           | 0                           |                             |                 |                   | 0               | 0                 | 0                          | A[n] 0             | s* (16 Bits) 0                                          |                            | WD1 0                           | 0                                      | 0 WDIF 0                                                 | WTRF           | 0                                            | RWT 0                                        |
|                        |                             | 0                           | 0               | 0                 |                 |                   |                            |                    |                                                         | 0                          | 0                               | 0                                      | 0                                                        | 0              |                                              | 0                                            |
| PFX[n]                 | (0..15) 0                   | 0                           | 0               | 0                 | 0               | 0                 | 0                          | 0 IP               | PFX[n] (16 Bits) 0 (16 Bits)                            | 0                          | 0                               | 0                                      | 0                                                        | 0              | 0                                            | 0                                            |
| IP SP                  | 1 - 0                       | 0 - 0                       | 0 - 0           | 0 - 0             | 0 - 0           | 0 - 0 0           | 0 - 0 0                    | 0 - 0 IV           | 0 - 0 (16 Bits) 0                                       | 0 - 0 0                    | 0 - 0                           | 0 - 0                                  | 0 1 0                                                    | 0 SP 1 0       | 0 (4 Bits) 1                                 | 0 1                                          |
| IV                     | 0                           | 0                           | 0               | 0                 | 0               |                   | 0                          | 0 LC[0]            | (16 Bits) 0                                             | 0                          | 0 0                             | 0                                      | 0                                                        |                | 0                                            | 0                                            |
| LC[0] OFFS             | 0                           | 0                           | 0 0             | 0 0               | 0 0             | 0                 |                            | 0 LC[1] 0          | (16 Bits) 0                                             | 0                          | 0                               | 0 (8                                   | 0 Bits)                                                  | 0              | 0                                            | 0                                            |
| LC[1] GRL              | 0                           | 0                           | - 0 GR.13 0     | - 0 GR.12 0       | - 0 GR.11 0     | 0 - 0 GR.10       | 0                          | - 0 0              | 0 - 0 GR.8 GR.7 0 GR.7 0 BP (16 Bits) 0 GR.15 0 GR.15 0 | 0 - 0 GR.6 0 GR.6 0        | 0 - 0 GR.5 0                    | 0 OFFS 0 WBS2 0                        | 0 WBS1 1 GR.3 0 GR.3 0                                   | 0 0            | 0 0                                          | 0 0                                          |
| DPC GR BP GRS GRH GRXL | - 0 GR.15 0 0 GR.7 0 GR.7 0 | - 0 GR.14 0 0 GR.6 0 GR.7 0 | 0 GR.5 0 GR.7 0 | 0 GR.4 0 GR.7 0 0 | 0 GR.3 0 GR.7 0 | 0 0 GR.2 0 GR.7 0 | - 0 GR.9 0 0 GR.1 0 GR.7 0 | 0 GR.0 0 GR.7 0 FP | GR.7 0 0 (16 Bits) 0                                    | 0 GR.14 0 GR.14 0 GR.6 0 0 | GR.5 0 0 GR.13 0 GR.13 0 GR.5 0 | 1 GR.4 0 GR.4 0 GR.12 0 GR.12 0 GR.4 0 | GR.2 0 0 0 GR.11 GR.10 0 0 GR.11 GR.10 0 0 GR.3 GR.2 0 0 | 0 WBS0 1 GR.2  | SDPS1 0 GR.1 0 GR.1 0 0 GR.9 0 GR.9 0 GR.1 0 | 0 SDPS0 0 GR.0 0 GR.0 0 GR.8 0 GR.8 0 GR.0 0 |
| FP DP[0]               | 0                           | 0 0                         | 0 0             | 0                 | 0 0             | 0 0               | 0 0                        | 0 0                | (16 Bits) (16                                           | 0                          | 0                               | 0                                      | 0                                                        | 0              | 0 0                                          | 0                                            |
|                        |                             |                             |                 |                   |                 |                   |                            | DP[0]              |                                                         |                            | 0                               |                                        | 0                                                        | 0              |                                              | 0                                            |
|                        | 0                           |                             |                 |                   |                 |                   |                            |                    | Bits)                                                   |                            |                                 |                                        |                                                          |                |                                              |                                              |
|                        |                             |                             |                 |                   |                 |                   |                            |                    |                                                         |                            |                                 | 0                                      |                                                          |                |                                              |                                              |
|                        |                             | 0                           | 0               | 0                 |                 |                   |                            |                    |                                                         |                            |                                 |                                        |                                                          |                |                                              |                                              |
| DP[1]                  |                             |                             |                 |                   | 0               |                   |                            | DP[1]              |                                                         | 0                          |                                 |                                        |                                                          |                | 0                                            |                                              |
|                        |                             |                             |                 |                   |                 | 0                 |                            |                    | 0                                                       |                            |                                 |                                        | 0                                                        |                |                                              | 0                                            |
|                        |                             |                             |                 |                   |                 |                   | 0                          |                    |                                                         |                            |                                 | 0                                      |                                                          |                |                                              |                                              |
|                        |                             |                             |                 |                   |                 |                   |                            | 0                  |                                                         |                            | 0                               |                                        |                                                          | 0              |                                              |                                              |
|                        |                             | 0                           |                 |                   |                 |                   |                            |                    |                                                         |                            |                                 |                                        |                                                          |                |                                              |                                              |

* Bits indicated by an 's' are only affected by a POR and not by other forms of reset. These bits are set to 0 after a POR. Refer to the MAXQ7670 User's Guide for more information.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Table 4. Peripheral Register Map

| REGISTER INDEX   | M0 (0h)   | M1 (1h)   | M2 (2h)   | M3 (3h)   | M4 (4h)   | M5 (5h)   |
|------------------|-----------|-----------|-----------|-----------|-----------|-----------|
| 0h               | PO0       | -         | T2CNA0    | -         | C0C       | -         |
| 1h               | -         | -         | T2HO      | -         | C0S       | APE       |
| 2h               | -         | -         | T2RHO     | -         | COIR      | ACNTL     |
| 3h               | EIFO      | -         | T2CHO     | -         | C0TE      | -         |
| 4h               | -         | -         | -         | -         | C0RE      | -         |
| 5h               | -         | -         | -         | -         | C0R       | -         |
| 6h               | -         | SPIB      | -         | -         | C0DP      | -         |
| 7h               | -         | SPICN     | -         | -         | C0DB      | -         |
| 8h               | PI0       | SPICF     | T2CNBO    | -         | C0RMS     | ADCD      |
| 9h               | -         | SPICK     | T2VO      | -         | C0TMA     | -         |
| Ah               | -         | FCNTL     | T2RO      | -         | -         | AIE       |
| Bh               | EIEO      | -         | T2CO      | -         | -         | ASR       |
| Ch               | -         | -         | -         | -         | -         | OSCC      |
| Dh               | -         | -         | -         | -         | -         | -         |
| Eh               | -         | -         | -         | -         | -         | -         |
| Fh               | -         | -         | -         | -         | -         | -         |
| 10h              | PD0       | -         | T2CFG0    | -         | -         | -         |
| 11h              | -         | FPCTL     | -         | -         | C0M1C     | -         |
| 12h              | -         | -         | -         | -         | C0M2C     | -         |
| 13h              | EIESO     | -         | -         | -         | C0M3C     | -         |
| 14h              | -         | -         | -         | -         | C0M4C     | -         |
| 15h              | -         | -         | -         | -         | C0M5C     | -         |
| 16h              | -         | -         | -         | -         | C0M6C     | -         |
| 17h              | -         | -         | -         | -         | C0M7C     | -         |
| 18h              | PS0       | -         | ICDT0     | -         | C0M8C     | -         |
| 19h              | -         | -         | ICDT1     | -         | C0M9C     | -         |
| 1Ah              | -         | -         | ICDC      | -         | C0M10C    | -         |
| 1Bh              | PRO       | -         | ICDF      | -         | C0M11C    | -         |
| 1Ch              | -         | ID0       | ICDB      | -         | C0M12C    | -         |
| 1Dh              | -         | -         | ICDA      | -         | C0M13C    | -         |
| 1Eh              | -         | -         | ICDD      | -         | C0M14C    | -         |
| 1Fh              | -         | -         | TM        | -         | C0M15C    | -         |

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Table 5. Peripheral Register Bit Functions and Reset Values

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

<!-- image -->

## MAXQ7670A

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

<!-- image -->

│

## MAXQ7670A

## Table 5. Peripheral Register Bit Functions and Reset Values (continued)

<!-- image -->

Bits indicated by '-' are unused.

Bits indicated by 'DB' have read/write access only in background or debug mode. These bits are cleared after a POR.

Bits indicated by 'DW' are only written to in debug mode. These bits are cleared after a POR.

The OSCC register is cleared to 0002h after a POR and is not affected by other forms of reset.

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface

│

## MAXQ7670A

## Typical Application Circuit

<!-- image -->

│

## Microcntroler with 12-Bit ADC,

## PGA, 64KB Flash, and CAN Interface

## MAXQ7670A

## Pin Configuration

<!-- image -->

## Microcontroller with 12-Bit ADC,

## PGA, 64KB Flash, and CAN Interface

## Chip Information

PROCESS: CMOS

## Package Information

For  the  latest  package  outline  information  and  land  patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 4 WLP          | W40A0+1        | 21-0480       | 90-0121            |

│

## MAXQ7670A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 6/10            | Initial release              | -               |
|                 1 | 2/15            | Revised Ordering Information | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## Microcontroller with 12-Bit ADC, PGA, 64KB Flash, and CAN Interface