<!-- lastmod 2021-03-16 -->
<!-- image -->

## FEATURES

High Resolution Sigma-Delta ADCs

Two Independent ADCs (16- and 24-Bit Resolution) Programmable Gain Front End 24-Bit No Missing Codes, Primary ADC 13-Bit p-p Resolution @ 20 Hz, 20 mV Range 18-Bit p-p Resolution @ 20 Hz, 2.56 V Range

## Memory

8 KB On-Chip Flash/EE Program Memory 640 Bytes On-Chip Flash/EE Data Memory Flash/EE, 100 Year Retention, 100 Kcycles Endurance 256 Bytes On-Chip Data RAM

## 8051-Based Core

8051-Compatible Instruction Set (12.58 MHz Max) 32 kHz External Crystal, On-Chip Programmable PLL

Three 16-Bit Timer/Counters 26 Programmable I/O Lines

11 Interrupt Sources, Two Priority Levels

## Power

Specified for 3 V and 5 V Operation Normal: 3 mA @ 3 V (Core CLK = 1.5 MHz) Power-Down: 20 𝛍 A (32 kHz Crystal Running)

## On-Chip Peripherals

On-Chip Temperature Sensor 12-Bit Voltage Output DAC Dual Excitation Current Sources Reference Detect Circuit Time Interval Counter (TIC) UART Serial I/O I 2 C ® -Compatible and SPI ®  Serial I/O Watchdog Timer (WDT), Power Supply Monitor (PSM)

## APPLICATIONS

Intelligent Sensors (IEEE1451.2-Compatible)

Weigh Scales Portable Instrumentation Pressure Transducers

4-20 mA Transmitters

## GENERAL DESCRIPTION

The ADuC824 is a complete smart transducer front-end, integrating two high-resolution sigma delta ADCs, an 8-bit MCU, and program/data Flash/EE Memory on a single chip. This low power device accepts low-level signals directly from a transducer.

The two independent ADCs (Primary and Auxiliary) include a temperature sensor and a PGA (allowing direct measurement of

MicroConverter is a registered trademark of Analog Devices, Inc. SPI is a registered trademark of Motorola, Inc. I 2 C is a registered trademark of Philips Semiconductors, Inc.

## REV.B

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices.

## MicroConverter ® , Dual-Channel 16-/24-Bit ADCs with Embedded FLASH MCU

## ADuC824

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

low-level signals). The ADCs with on-chip digital filtering are intended for the measurement of wide dynamic range, low-frequency signals, such as those in weigh scale, strain-gauge, pressure transducer, or temperature measurement applications. The ADC output data rates are programmable and the ADC output resolution will vary with the programmed gain and output rate.

The device operates from a 32 kHz crystal with an on-chip PLL generating a high-frequency clock of 12.58 MHz. This clock is, in turn, routed through a programmable clock divider from which the MCU core clock operating frequency is generated. The microcontroller core is an 8052 and therefore 8051-instructionset-compatible. The microcontroller core machine cycle consists of 12 core clock periods of the selected core operating frequency. 8 Kbytes of nonvolatile Flash/EE program memory are provided on-chip. 640 bytes of nonvolatile Flash/EE data memory and 256 bytes RAM are also integrated on-chip.

The ADuC824 also incorporates additional analog functionality with a 12-bit DAC, current sources, power supply monitor, and a bandgap reference. On-chip digital peripherals include a watchdog timer, time interval counter, three timers/counters, and three serial I/O ports (SPI, UART, and I 2 C-compatible).

On-chip factory firmware supports in-circuit serial download and debug modes (via UART), as well as single-pin emulation mode via the EA pin. A functional block diagram of the ADuC824 is shown above with a more detailed block diagram shown in Figure 12.

The part operates from a single 3 V or 5 V supply. When operating from 3 V supplies, the power dissipation for the part is below 10 mW. The ADuC824 is housed in a 52-lead MQFP package.

## ADuC824

## TABLE OF CONTENTS

| FEATURES..........................................................................     |   1 |
|----------------------------------------------------------------------------------------|-----|
| GENERAL DESCRIPTION.................................................                   |   1 |
| SPECIFICATIONS ..............................................................          |   3 |
| TIMING SPECIFICATIONS ..............................................                   |   8 |
| ABSOLUTE MAXIMUM RATINGS.................................                              |  18 |
| PIN CONFIGURATION ....................................................                 |  18 |
| ORDERING GUIDE..........................................................               |  18 |
| PIN FUNCTION DESCRIPTIONS...................................                           |  19 |
| ADuC824 BLOCK DIAGRAM ..........................................                       |  21 |
| MEMORY ORGANIZATION............................................                        |  22 |
| OVERVIEW OF MCU-RELATED SFRS...........................                                |  23 |
| Accumulator (ACC) ........................................................             |  23 |
| B SFR (B) .......................................................................      |  23 |
| Stack Pointer (SP) ...........................................................         |  23 |
| Data Pointer (DPTR) ......................................................             |  23 |
| Program Status Word (PSW) ...........................................                  |  23 |
| Power Control (PCON) ...................................................               |  23 |
| SPECIAL FUNCTION REGISTERS.................................                            |  24 |
| SFR INTERFACE TO THE PRIMARY AND                                                       |     |
| AUXILIARY ADCs.........................................................                |  25 |
| ADCSTAT......................................................................          |  25 |
| ADCMODE....................................................................            |  26 |
| ADC0CON .....................................................................          |  27 |
| ADC1CON .....................................................................          |  28 |
| SF ................................................................................... |  28 |
| ICON ..............................................................................    |  29 |
| ADC0H/ADC0M/ADC0L...............................................                       |  29 |
| ADC1H/ADC1L .............................................................              |  29 |
| OF0H/OF0M/OF0L ........................................................                |  30 |
| OF1H/OF1L ...................................................................          |  30 |
| GN0H/GN0M/GN0L......................................................                   |  30 |
| GN1H/GN1L ..................................................................           |  30 |
| PRIMARY AND AUXILIARY ADC DESCRIPTION........                                          |  31 |
| Overview .........................................................................     |  31 |
| Primary ADC ..................................................................         |  31 |
| Auxiliary ADC.................................................................         |  32 |
| PRIMARY AND AUXILIARY ADC NOISE                                                        |     |
| PERFORMANCE ............................................................               |  33 |
| Analog Input Channels ....................................................             |  33 |
| Primary and Auxiliary ADC Inputs ..................................                    |  33 |
| Analog Input Ranges........................................................            |  33 |
| Programmable Gain Amplifier..........................................                  |  34 |
| Bipolar/Unipolar Inputs ...................................................            |  34 |
| Burnout Currents.............................................................          |  34 |
| Excitation Currents..........................................................          |  35 |
| Reference Input ...............................................................        |  35 |
| Reference Detect .............................................................         |  35 |
| Sigma-Delta Modulator ...................................................              |  35 |
| Digital Filter ....................................................................    |  35 |
| ADC Chopping ...............................................................           |  36 |
| Calibration ......................................................................     |  37 |

NONVOLATILE FLASH/EE MEMORY...........................  37

Flash/EE Memory Overview.............................................  37

Flash/EE Memory and the ADuC824...............................  37

ADuC824 Flash/EE Memory Reliability...........................  37

Using the Flash/EE Program Memory ..............................  38

Flash/EE Program Memory Security ................................  39

Using the Flash/EE Data Memory ....................................  39

USER INTERFACE TO OTHER ON-CHIP ADuC824

PERIPHERALS ..............................................................  41

DAC................................................................................  41

On-Chip PLL ..................................................................  42

Time Interval Counter (TIC) ...........................................  43

Watchdog Timer..............................................................  46

Power Supply Monitor .....................................................  47

Serial Peripheral Interface ................................................  48

2

I

C-Compatible Interface .................................................  50

8051-COMPATIBLE ON-CHIP PERIPHERALS ..............  51

Parallel I/O Ports 0-3 .......................................................  51

Timers/Counters ..............................................................  51

TIMER/COUNTER 0 AND 1 OPERATING MODES ......  54

UART Serial Interface .....................................................  57

Interrupt System ..............................................................  60

ADuC824 HARDWARE DESIGN CONSIDERATIONS...  62

Clock Oscillator ...............................................................  62

External Memory Interface...............................................  62

Power-On Reset Operation ..............................................  63

Power Supplies ................................................................  63

Power Consumption ........................................................  64

Power-Saving Modes .......................................................  64

Grounding and Board Layout Recommendations .............  64

ADuC824 System Self-Identification................................  65

OTHER HARDWARE CONSIDERATIONS.....................  65

In-Circuit Serial Download Access ...................................  65

Embedded Serial Port Debugger ......................................  65

Single-Pin Emulation Mode .............................................  65

Enhanced-Hooks Emulation Mode ..................................  66

Typical System Configuration ..........................................  66

QUICKSTART DEVELOPMENT SYSTEM.....................  67

OUTLINE DIMENSIONS.................................................  68

Revision History ..................................................................  68

## SPECIFICATIONS 1

unless otherwise noted.)

| Parameter                           | ADuC824BS                       | Test Conditions/Comments                                              | Unit           |
|-------------------------------------|---------------------------------|-----------------------------------------------------------------------|----------------|
| ADC SPECIFICATIONS                  |                                 |                                                                       |                |
| Conversion Rate                     | 5.4                             | On Both Channels                                                      | Hz min         |
|                                     | 105                             | Programmable in 0.732 ms Increments                                   | Hz max         |
| Primary ADC                         |                                 |                                                                       |                |
| No Missing Codes 2                  | 24                              | 20 Hz Update Rate                                                     | Bits min       |
| Resolution                          | 13                              | Range = ± 20 mV, 20 Hz Update Rate                                    | Bits p-p typ   |
| Output Noise                        | 18 See Tables IX and X          | Range = ± 2.56 V, 20 Hz Update Rate Output Noise Varies with Selected | Bits p-p typ   |
| Integral Nonlinearity               | in ADC Description ± 15         | Update Rate and Gain Range                                            | ppm of FSR max |
| 3                                   |                                 |                                                                       | µ V typ        |
| Offset Error                        | ± 3                             |                                                                       |                |
| Offset Error Drift                  | ± 10                            |                                                                       | nV/ ° C typ    |
| Full-Scale Error 4                  | ± 10                            |                                                                       | µ V typ        |
| Gain Error Drift 5                  | ± 0.5                           |                                                                       | ppm/ ° C typ   |
| ADC Range Matching                  | ± 2                             | AIN = 18mV                                                            | µ V typ        |
| Power Supply Rejection (PSR)        | 113                             | AIN = 7.8 mV, Range = ± 20mV                                          | dBs typ        |
|                                     | 80                              | AIN = 1 V, Range = ± 2.56 V                                           | dBs min        |
| Common-Mode DC Rejection            |                                 |                                                                       |                |
| On AIN                              | 95                              | At DC, AIN = 7.8 mV, Range = ± 20mV                                   | dBs min        |
| On AIN                              | 113                             | At DC, AIN = 1 V, Range = ± 2.56 V                                    | dBs typ        |
| On REFIN                            | 125                             | At DC, AIN = 1 V, Range = ± 2.56                                      | dBs typ        |
| Common-Mode 50 Hz/60Hz Rejection 2  |                                 | V 20 Hz Update Rate                                                   |                |
| On AIN                              | 95                              | 50 Hz/60 Hz ± 1 Hz, AIN = 7.8 mV,                                     | dBs min        |
|                                     | 90                              | Range = ± 20mV 50 Hz/60 Hz ± 1 Hz, AIN = 1 V, Range = ± 2.56 V        | dBs min        |
| On REFIN                            | 90                              | 50 Hz/60 Hz ± 1 Hz, AIN = 1 V, Range = ± 2.56 V                       | dBs min        |
| Normal Mode 50 Hz/60 Hz Rejection 2 |                                 |                                                                       |                |
| On AIN                              | 60                              | 50 Hz/60 Hz ± 1 Hz, 20 Hz Update Rate                                 | dBs min        |
| On REFIN                            | 60                              | 50 Hz/60 Hz ± 1 Hz, 20 Hz Update Rate                                 | dBs min        |
| Auxiliary ADC                       |                                 |                                                                       |                |
| No Missing Codes 2                  | 16                              |                                                                       | Bits min       |
| Resolution                          | 16                              | Range = ± 2.5 V, 20 Hz Update Rate                                    | Bits p-p typ   |
| Output Noise                        | See Table XI in ADC Description | Output Noise Varies with Selected Update Rate                         |                |
| Integral Nonlinearity               | ± 15                            |                                                                       | ppm of FSR max |
| Offset Error 3                      | -2                              |                                                                       | LSB typ        |
| Offset Error Drift                  | 1                               |                                                                       | µ V/ ° C typ   |
| Full-Scale Error 6                  | -2.5                            |                                                                       | LSB typ        |
| Gain Error Drift 5                  | ± 0.5                           |                                                                       | ppm/ ° C typ   |
| Power Supply Rejection (PSR) 2      | 80                              | AIN = 1 V, 20 Hz Update Rate                                          | dBs min        |
| Normal Mode 50 Hz/60 Hz Rejection   |                                 |                                                                       |                |
| On AIN                              | 60                              | 50 Hz/60 Hz ± 1 Hz                                                    | dBs min        |
| On REFIN                            | 60                              | 50 Hz/60 Hz ± 1 Hz, 20 Hz Update Rate                                 | dBs min        |
| DAC PERFORMANCE                     |                                 |                                                                       |                |
| DC Specifications 7                 |                                 |                                                                       |                |
| Resolution                          | 12                              |                                                                       | Bits           |
| Relative Accuracy                   | ± 3                             |                                                                       | LSB typ        |
| Differential Nonlinearity           | -1                              | Guaranteed 12-Bit Monotonic                                           | LSB max        |
| Offset Error                        | ± 50                            |                                                                       | mV max         |
| Gain Error 8                        | ± 1                             | AV DD Range                                                           | % max          |
|                                     | ± 1                             | V REF Range                                                           | %typ           |
| AC Specifications 2, 7              |                                 |                                                                       |                |
| Voltage Output Settling Time        | 15                              | Settling Time to 1 LSB of Final Value                                 | µ s typ        |
| Digital-to-Analog Glitch Energy     | 10                              | 1 LSB Change at Major Carry                                           | nVs typ        |

## ADuC824

(AV DD = 2.7 V to 3.6 V or 4.75 V to 5.25 V, DV DD = 2.7 V to 3.6 V or 4.75 V to 5.25 V, REFIN(+) = 2.5 V; REFIN(-) = AGND; AGND = DGND = 0 V; XTAL1/XTAL2 = 32.768 kHz Crystal; all specifications T MIN to T MAX

## ADuC824

| Parameter                                                                                                                                                                                                                                                                    | ADuC824BS                                                                                                                                     | Test Conditions/Comments                                                                                                                                                                                                                                                                                                                                                                                                                              | Unit                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| INTERNAL REFERENCE                                                                                                                                                                                                                                                           |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| ADC Reference                                                                                                                                                                                                                                                                |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| Reference Voltage Power Supply Rejection Reference Tempco DAC Reference Reference Voltage Power Supply Rejection Reference Tempco                                                                                                                                            | 1.25 ± 1% 45 100 2.5 ± 1% 50 ± 100                                                                                                            | Initial Tolerance @25 ° C, V DD = 5 V Initial Tolerance @25 ° C, V DD = 5 V                                                                                                                                                                                                                                                                                                                                                                           | V min/max dBs typ ppm/ ° C typ V min/max dBs typ ppm/ ° C typ                             |
| ANALOG INPUTS/REFERENCE INPUTS                                                                                                                                                                                                                                               |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| Bipolar Mode (ADC0CON3 = 0) Analog Input Current 2 Analog Input Current Drift Absolute AIN Voltage Limits Auxiliary ADC Input Voltage Range 9, 10 Average Analog Input Current Average Analog Input Current Drift 2 Absolute AIN Voltage Limits 11 External Reference Inputs | ± 20 ± 40 ± 80 ± 160 ± 320 ± 640 ± 1.28 ± 2.56 ± 1 ± 5 AGND + 100mV AV DD - 100mV 0 to V REF 125 ± 2 AGND - 30mV AV DD + 30mV 1 AV DD 1 ± 0.1 | RN2, RN1, RN0 of ADC0CON Set to 0 0 0 (Unipolar Mode 0 to 20 mV) 0 0 1 (Unipolar Mode 0 to 40 mV) 0 1 0 (Unipolar Mode 0 to 80 mV) 0 1 1 (Unipolar Mode 0 to 160 mV) 1 0 0 (Unipolar Mode 0 to 320 mV) 1 0 1 (Unipolar Mode 0 to 640 mV) 1 1 0 (Unipolar Mode 0 to 1.28 V) 1 1 1 (Unipolar Mode 0 to 2.56 V) Unipolar Mode, for Bipolar Mode See Note 11 Input Current Will Vary with Input Voltage on the Unbuffered Auxiliary ADC Both ADCs Enabled | mV mV mV mV mV mV V V nA max pA/ ° C typ V min V max V nA/V typ pA/V/ ° C typ V min V max |
| REFIN(+) to REFIN(-) Range 2 Average Reference Input Current Average Reference Input Current Drift 'NO Ext. REF' Trigger Voltage SYSTEM CALIBRATION Full-Scale Calibration Limit Zero-Scale Calibration Limit Input Span                                                     | 0.3 0.65 +1.05 × FS -1.05 × FS +0.8 × FS +2.1 × FS                                                                                            | NOXREF Bit Active if V REF < 0.3 V NOXREF Bit Inactive if V REF > 0.65 V                                                                                                                                                                                                                                                                                                                                                                              | V min V max µ A/V typ nA/V/ ° C typ V min V max V max V min V min                         |
| ADC                                                                                                                                                                                                                                                                          |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| Voltage Range Resistive Load Capacitive Load Output Impedance I SINK                                                                                                                                                                                                         | 0 to V REF 0 to AV DD 10 100 0.5 50                                                                                                           | DACRN = 0 in DACCON SFR DACRN = 1 in DACCON SFR From DAC Output to AGND From DAC Output to AGND                                                                                                                                                                                                                                                                                                                                                       | V typ V typ k Ω typ pF typ Ω typ µ A typ                                                  |
|                                                                                                                                                                                                                                                                              |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       | V max                                                                                     |
| ANALOG (DAC) OUTPUTS                                                                                                                                                                                                                                                         |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| Accuracy                                                                                                                                                                                                                                                                     | 2                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
| TEMPERATURE SENSOR                                                                                                                                                                                                                                                           |                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                           |
|                                                                                                                                                                                                                                                                              | ±                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ° C typ                                                                                   |
| Thermal Impedance ( θ JA )                                                                                                                                                                                                                                                   | 90                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ° C/W typ                                                                                 |

## ADuC824

| Parameter                                  | ADuC824BS                          | Test Conditions/Comments                                 | Unit             |
|--------------------------------------------|------------------------------------|----------------------------------------------------------|------------------|
| TRANSDUCER BURNOUT CURRENT SOURCES         | TRANSDUCER BURNOUT CURRENT SOURCES |                                                          |                  |
| AIN+ Current                               | -100                               | AIN+ is the Selected Positive Input to the Primary ADC   | nA typ           |
| AIN- Current                               | +100                               | AIN- is the Selected Negative Input to the Auxiliary ADC | nA typ           |
| Initial Tolerance @ 25 ° C Drift           | ± 10                               |                                                          | %typ             |
| Drift                                      | 0.03                               |                                                          | %/ ° C typ       |
| EXCITATION CURRENT SOURCES                 |                                    |                                                          |                  |
| Output Current                             | -200                               | Available from Each Current Source                       | µ A typ          |
| Initial Tolerance @ 25 ° C                 | ± 10                               |                                                          | %typ             |
| Drift                                      | 200                                |                                                          | ppm/ ° C typ     |
| Initial Current Matching @ 25 ° C          | ± 1                                | Matching Between Both Current Sources                    | %typ             |
| Drift Matching                             | 20                                 |                                                          | ppm/ ° C typ     |
| Line Regulation (AV DD )                   | 1                                  | AV DD = 5 V + 5%                                         | µ A/V typ        |
| Load Regulation                            | 0.1                                |                                                          | µ A/V typ        |
| Output Compliance                          | AV DD - 0.6 AGND                   |                                                          | V max min        |
| LOGIC INPUTS                               |                                    |                                                          |                  |
| All Inputs Except SCLOCK, RESET, and XTAL1 |                                    |                                                          |                  |
| V INL , Input Low Voltage                  | 0.8                                | DV DD = 5 V                                              | V max            |
|                                            | 0.4                                | DV DD = 3 V                                              | V max            |
| V INH , Input High Voltage                 | 2.0                                |                                                          | V min            |
| SCLOCK and RESET Only                      |                                    |                                                          |                  |
| (Schmitt-Triggered Inputs) 2               |                                    |                                                          |                  |
| V T+                                       | 1.3/3                              | DV DD = 5 V                                              | V min/V max      |
|                                            | 0.95/2.5                           | DV DD = 3 V                                              | V min/V max      |
| V T-                                       | 0.8/1.4                            | DV DD = 5 V                                              | V min/V max      |
|                                            | 0.4/1.1                            | DV DD = 3 V                                              | V min/V max      |
| V T+ - V T-                                | 0.3/0.85                           | DV DD = 5 V                                              | V min/V max      |
|                                            | 0.3/0.85                           | DV DD = 3 V                                              | V min/V max      |
| Input Currents                             |                                    |                                                          |                  |
| Port 0, P1.2-P1.7, EA                      | ± 10                               | V IN = 0 V or V DD                                       | µ A max          |
| SCLOCK, SDATA/MOSI, MISO, SS 12            | -10 min, -40 max                   | V IN = 0 V, DV DD = 5 V, Internal Pull-Up                | µ A min/ µ A max |
|                                            | ± 10                               | V IN = V DD , DV DD = V                                  | µ A max          |
| RESET                                      | ± 10                               | 5 V IN = 0 V, DV DD = 5 V                                | µ A max          |
|                                            | 35 min, 105 max                    | V IN = V DD , DV DD = 5 V, Internal Pull-Down            | µ A min/ µ A max |
| P1.0, P1.1, Ports 2 and 3                  | ± 10                               | V IN = V DD , DV DD = 5 V V IN = 2 V, DV DD = 5 V        | µ A max µ A min  |
|                                            | -180 -660                          |                                                          | µ A max          |
|                                            | -20                                | V IN = 450 mV, DV DD = 5 V                               | µ A min          |
|                                            | -75                                |                                                          | µ A max          |
| Input Capacitance                          | 5                                  | All Digital Inputs                                       | pF typ           |
| CRYSTAL OSCILLATOR (XTAL1 AND XTAL2)       |                                    |                                                          |                  |
| Logic Inputs, XTAL1 Only                   |                                    |                                                          |                  |
| V INL , Input Low Voltage                  | 0.8                                | DV DD = 5 V                                              | V max            |
|                                            | 0.4                                | DV DD = 3 V                                              | V max            |
| V INH , Input High Voltage                 | 3.5                                | DV DD = 5 V                                              | V min            |
| XTAL1 Input Capacitance                    | 2.5 18                             | DV DD = 3 V                                              | V min pF typ     |
| XTAL2 Output Capacitance                   | 18                                 |                                                          | pF typ           |

## ADuC824

| Parameter                                   | ADuC824BS   | Test Conditions/Comments                                                       | Unit       |
|---------------------------------------------|-------------|--------------------------------------------------------------------------------|------------|
| LOGIC OUTPUTS (Not Including XTAL2) 2       |             |                                                                                |            |
| V OH , Output High Voltage                  | 2.4         | V DD = 5 V, I SOURCE = 80 µ A                                                  | V min      |
|                                             | 2.4         | V DD = 3 V, I SOURCE = 20 µ A                                                  | V min      |
| V OL , Output Low Voltage 13                | 0.4         | I SINK = 8 mA, SCLOCK, SDATA/MOSI                                              | V max      |
|                                             | 0.4         | I SINK = 10 mA, P1.0 and P1.1                                                  | V max      |
|                                             | 0.4         | I SINK = 1.6 mA, All Other Outputs                                             | V max      |
| Floating State Leakage Current              | ± 10        |                                                                                | µ A max    |
| Floating State Output Capacitance           | 5           |                                                                                | pF typ     |
| POWER SUPPLY MONITOR (PSM)                  |             |                                                                                |            |
| AV DD Trip Point Selection Range            | 2.63        | Four Trip Points Selectable in This Range                                      | V min      |
|                                             | 4.63        | Programmed via TPA1-0 in PSMCON                                                | V max      |
| AV DD Power Supply Trip Point Accuracy      | ± 3.5       |                                                                                | % max      |
| DV DD Trip Point Selection Range            | 2.63        | Four Trip Points Selectable in This Range                                      | V min      |
|                                             | 4.63        | Programmed via TPD1-0 in PSMCON                                                | V max      |
| DV DD Power Supply Trip Point Accuracy      | ± 3.5       |                                                                                | % max      |
| WATCHDOG TIMER (WDT)                        |             |                                                                                |            |
| Timeout Period                              | 0           | Nine Timeout Periods in This Range Programmed via PRE3-0 in WDCON              | ms min     |
|                                             | 2000        |                                                                                | ms max     |
| MCU CORE CLOCK RATE MCU Clock Rate 2        | 98.3        | Clock Rate Generated via On-Chip PLL Programmable via CD2-0 Bits in PLLCON SFR | kHz min    |
|                                             | 12.58       |                                                                                | MHz max    |
| START-UP TIME                               |             |                                                                                |            |
| At Power-On                                 | 300         |                                                                                | ms typ     |
| From Idle Mode                              | 1           |                                                                                | ms typ     |
| From Power-Down Mode                        |             |                                                                                |            |
| Oscillator Running                          |             | OSC_PD Bit = 0 in PLLCON SFR                                                   |            |
| Wakeup with INT0 Interrupt                  | 1           |                                                                                | ms typ     |
| Wakeup with SPI/I 2 C Interrupt             | 1           |                                                                                | ms typ     |
| Wakeup with TIC Interrupt                   | 1           |                                                                                | ms typ     |
| Wakeup with External RESET                  | 3.4         |                                                                                | ms typ     |
| Oscillator Powered Down                     |             |                                                                                |            |
| Wakeup with External RESET                  | 0.9         | OSC_PD Bit = 1 in PLLCON SFR                                                   | sec typ    |
| After External RESET in Normal Mode         | 3.3         |                                                                                | ms typ     |
| After WDT Reset in Normal Mode              | 3.3         | Controlled via WDCON SFR                                                       | ms typ     |
| FLASH/EE MEMORY RELIABILITY CHARACTERISTICS | 14          |                                                                                |            |
| Endurance 15                                | 100,000     |                                                                                | Cycles min |
| Data Retention 16                           | 100         |                                                                                | Years min  |
| POWER REQUIREMENTS                          |             | DV DD and AV DD Can Be Set                                                     |            |
| Power Supply Voltages                       |             | Independently                                                                  |            |
| AV DD , 3 V Nominal Operation               | 2.7         |                                                                                | V min      |
|                                             | 3.6         |                                                                                | V max      |
| AV DD , 5 V Nominal Operation               | 4.75        |                                                                                | V min      |
|                                             | 5.25        |                                                                                | V max      |
| DV DD , 3 V Nominal Operation               | 2.7         |                                                                                | V min      |
|                                             | 3.6         |                                                                                | V max      |
| DV DD , 5 V Nominal Operation               | 4.75        |                                                                                | V min      |
|                                             | 5.25        |                                                                                | V max      |

D

| Parameter                                                   | ADuC824BS                                | Test Conditions/Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Unit                                                                                                                                                    |
|-------------------------------------------------------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| POWER REQUIREMENTS (continued)                              |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| Power Supply Currents Normal Mode 17, 18 DV DD Current      | 4 2.1 15 8 750 2 1 50 20 1 20 5 50 1 500 | DV DD = 4.75 V to 5.25 V, Core CLK = 1.57MHz DV DD = 2.7 V to 3.6 V, Core CLK = 1.57MHz AV DD = 5.25 V, Core CLK = 1.57MHz DV DD = 4.75 V to 5.25 V, Core CLK = 12.58MHz DV DD = 2.7 V to 3.6 V, Core CLK = 12.58MHz AV DD = 5.25 V, Core CLK = 12.58MHz DV DD = 4.75 V to 5.25 V, Core CLK = 1.57MHz DV DD = 2.7 V to 3.6 V, Core CLK = 1.57MHz Measured @AV DD = 5.25 V, Core CLK = 1.57MHz DV DD = 4.75 V to 5.25 V, Core CLK = 12.58MHz DV DD = 2.7 V to 3.6 V, Core CLK = 12.58MHz Measured at AV DD = 5.25 V, Core CLK = 12.58MHz Core CLK = 1.57MHz or 12.58MHz DV DD = 4.75 V to 5.25 V, Osc. On, TIC On DV DD = 2.7V to 3.6 V, Osc. On, TIC On Measured at AV DD = 5.25 V, Osc. On or Osc. Off DV DD = 4.75 V to 5.25 V, Osc. Off DV DD = 2.7 V to 3.6 V, Osc. Off Core CLK = 1.57 MHz, AV DD = DV DD = 5 V | mA max mA max µ A max mA max mA max µ A max mA max µ A typ µ A typ mA typ mA typ µ A typ µ A max µ A max µ A max µ A max µ A typ µ A typ mA typ µ A typ |
| AV Current                                                  | 170                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| DD DV DD Current                                            |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| AV DD Current                                               |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| 17,                                                         | 170                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| Power Supply Currents Idle Mode 18                          |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| DV DD Current                                               | 1.2                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| AV DD Current                                               | 140                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| DV DD Current                                               |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| AV DD Current                                               | 140                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| Power Supply Currents Power-Down Mode 17, 18 DV DD Current  |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| AV DD Current                                               |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| DV DD Current                                               |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| Typical Additional Power Supply Currents (AI DD and DI DD ) |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| PSM Peripheral                                              |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| Primary ADC Auxiliary ADC                                   |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                         |
| DAC                                                         | 150                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | µ typ                                                                                                                                                   |
| Dual Current                                                | 400                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | A                                                                                                                                                       |
| Sources                                                     |                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | µ A typ                                                                                                                                                 |

## NOTES

1 Temperature Range: -40 ° C to +85 ° C.

2 These numbers are not production tested but are guaranteed by Design and/or Characterization data on production release.

3 System Zero-Scale Calibration can remove this error.

4 The primary ADC is factory calibrated at 25 ° C with AVDD = DVDD = 5 V yielding this full-scale error of 10 µ V. If user power supply or temperature conditions are significantly different than these, an Internal Full-Scale Calibration will restore this error to 10 µ V. A system zero-scale and full-scale calibration will remove this error altogether.

5 Gain Error Drift is a span drift. To calculate Full-Scale Error Drift, add the Offset Error Drift to the Gain Error Drift times the full-scale input.

6 The auxiliary ADC is factory calibrated at 25 ° C with AVDD = DVDD = 5 V yielding this full-scale error of -2.5 LSB. A system zero-scale and full-scale calibration will remove this error altogether.

7 DAC linearity and AC Specifications are calculated using: reduced code range of 48 to 4095, 0 to VREF, reduced code range of 48 to 3995, 0 to VDD.

8 Gain Error is a measure of the span error of the DAC.

9 In general terms, the bipolar input voltage range to the primary ADC is given by Range ADC = ± (VREF 2 RN )/125, where:

VREF = REFIN(+) to REFIN(-) voltage and VREF = 1.25 V when internal ADC VREF is selected. RN = decimal equivalent of RN2, RN1, RN0, e.g., VREF = 2.5 V and RN2, RN1, RN0 = 1, 1, 0 the RangeADC = ± 1.28 V. In unipolar mode the effective range is 0 V to 1.28 V in our example.

10 1.25 V is used as the reference voltage to the ADC when internal V REF is selected via XREF0 and XREF1 bits in ADC0CON and ADC1CON, respectively.

11 In bipolar mode, the Auxiliary ADC can only be driven to a minimum of A GND - 30 mV as indicated by the Auxiliary ADC absolute AIN voltage limits. The bipolar range is still -VREF to +VREF; however, the negative voltage is limited to -30 mV.

12 Pins configured in I 2 C-compatible mode or SPI mode, pins configured as digital inputs during this test.

13 Pins configured in I 2 C-compatible mode only.

14 Flash/EE Memory Reliability Characteristics apply to both the Flash/EE program memory and Flash/EE data memory.

15 Endurance is qualified to 100 Kcycles as per JEDEC Std. 22 method A117 and measured at -40 ° C, +25 ° C and +85 ° C; typical endurance at 25 ° C is 700 K cycles.

16 Retention lifetime equivalent at junction temperature (T J) = 55 ° C as per JEDEC Std. 22, Method A117. Retention lifetime based on an activation energy of 0.6e V will derate with junction temperature as shown in Figure 27 in the Flash/EE Memory description section of this data sheet.

17

Power Supply current consumption is measured in Normal, Idle, and Power-Down Modes under the following conditions: Normal Mode: Reset = 0.4 V, Digital I/O pins = open circuit, Core Clk changed via CD bits in PLLCON, Core Executing internal software loop. Idle Mode: Reset = 0.4 V, Digital I/O pins = open circuit, Core Clk changed via CD bits in PLLCON, PCON.0 = 1, Core Execution suspended in idle mode. Power-Down Mode: Reset = 0.4 V, All P0 pins and P1.2-P1.7 pins = 0.4 V, All other digital I/O pins are open circuit, Core Clk changed via CD bits in PLLCON, PCON.1 = 1, Core Execution suspended in power-down mode, OSC turned ON or OFF via OSC\_PD bit (PLLCON.7) in PLLCON SFR.

18 DVDD power supply current will increase typically by 3 mA (3 V operation) and 10 mA (5 V operation) during a Flash/EE memory program or erase cycle. Specifications subject to change without notice.

## ADuC824

## TIMING SPECIFICATIONS 1, 2, 3 (AV DD = 2.7 V to 3.6 V or 4.75 V to 5.25 V, DV DD = 2.7 V to 3.6 V or 4.75 V to 5.25 V; all specifications T MIN to T MAX unless otherwise noted.)

|                                    |                                | 32.768 kHz External Crystal   | 32.768 kHz External Crystal   | 32.768 kHz External Crystal   |      |        |
|------------------------------------|--------------------------------|-------------------------------|-------------------------------|-------------------------------|------|--------|
| Parameter                          |                                | Min                           | Typ                           | Max                           | Unit | Figure |
| CLOCK INPUT (External Clock Driven | XTAL1)                         |                               |                               |                               |      |        |
| t CK                               | XTAL1 Period                   |                               | 30.52                         |                               | µ s  | 1      |
| t CKL                              | XTAL1 Width Low                |                               | 15.24                         |                               | µ s  | 1      |
| t CKH                              | XTAL1 Width High               |                               | 15.24                         |                               | µ s  | 1      |
| t CKR                              | XTAL1 Rise Time                |                               | 20                            |                               | ns   | 1      |
| t CKF                              | XTAL1 Fall Time                |                               | 20                            |                               | ns   | 1      |
| 1/t CORE                           | ADuC824 Core Clock Frequency 4 | 0.098                         |                               | 12.58                         | MHz  |        |
| t CORE                             | ADuC824 Core Clock Period 5    |                               | 0.636                         |                               | µ s  |        |
| t CYC                              | ADuC824 Machine Cycle Time 6   | 0.95                          | 7.6                           | 122.45                        | µ s  |        |

## NOTES

1 AC inputs during testing are driven at DVDD - 0.5 V for a Logic 1 and 0.45 V for a Logic 0. Timing measurements are made at VIH min for a Logic 1 and VIL max for

a Logic 0 as shown in Figure 2.

2 For timing purposes, a port pin is no longer floating when a 100 mV change from load voltage occurs. A port pin begins to float when a 100 mV change from the loaded VOH/VOL level occurs as shown in Figure 2.

3 CLOAD for Port0, ALE, PSEN outputs = 100 pF; CLOAD for all other outputs = 80 pF unless otherwise noted.

4 ADuC824 internal PLL locks onto a multiple (384 times) the external crystal frequency of 32.768 kHz to provide a Stable 12.583 MHz internal clock for the system.

The core can operate at this frequency or at a binary submultiple called Core\_Clk, selected via the PLLCON SFR.

5 This number is measured at the default Core\_Clk operating frequency of 1.57 MHz.

6 ADuC824 Machine Cycle Time is nominally defined as 12/Core\_CLK.

Figure 1. XTAL1 Input

<!-- image -->

Figure 2. Timing Waveform Characteristics

<!-- image -->

Figure 3. External Program Memory Read Cycle

|                         | 12.58MHz                           | 12.58MHz   | Core_Clk   | Core_Clk     | Variable Core_Clk Max   | Variable Core_Clk Max   |             |
|-------------------------|------------------------------------|------------|------------|--------------|-------------------------|-------------------------|-------------|
| Parameter               | Parameter                          | Min        | Max        | Min          |                         |                         | Unit Figure |
| EXTERNAL PROGRAM MEMORY | EXTERNAL PROGRAM MEMORY            |            |            |              |                         |                         |             |
| t LHLL                  | ALE Pulsewidth                     | 119        |            | 2t CORE - 40 |                         | ns                      | 3           |
| t AVLL                  | Address Valid to ALE Low           | 39         |            | t CORE - 40  |                         | ns                      | 3           |
| t LLAX                  | Address Hold after ALE Low         | 49         |            | t CORE - 30  |                         | ns                      | 3           |
| t LLIV                  | ALE Low to Valid Instruction In    |            | 218        |              | 4t CORE - 100           | ns                      | 3           |
| t LLPL                  | ALE Low to PSEN Low                | 49         |            | t CORE - 30  |                         | ns                      | 3           |
| t PLPH                  | PSEN Pulsewidth                    | 193        |            | 3t CORE - 45 |                         | ns                      | 3           |
| t PLIV                  | PSEN Low to Valid Instruction In   |            | 133        |              | 3t CORE - 105           | ns                      | 3           |
| t PXIX                  | Input Instruction Hold after PSEN  | 0          |            | 0            |                         | ns                      | 3           |
| t PXIZ                  | Input Instruction Float after PSEN |            | 54         |              | t CORE - 25             | ns                      | 3           |
| t AVIV                  | Address to Valid Instruction In    |            | 292        |              | 5t CORE - 105           | ns                      | 3           |
| t PLAZ                  | PSEN Low to Address Float          |            | 25         |              | 25                      | ns                      | 3           |
| t PHAX                  | Address Hold after PSEN High       | 0          |            | 0            |                         | ns                      | 3           |

<!-- image -->

## ADuC824

Figure 4.  External Data Memory Read Cycle

|                                 | 12.58MHz                        | 12.58MHz   | Core_Clk   | Core_Clk      | Variable Core_Clk   | Variable Core_Clk   |        |
|---------------------------------|---------------------------------|------------|------------|---------------|---------------------|---------------------|--------|
| Parameter                       | Parameter                       | Min        | Max        | Min           | Max                 | Unit                | Figure |
| EXTERNAL DATA MEMORY READ CYCLE | EXTERNAL DATA MEMORY READ CYCLE |            |            |               |                     |                     |        |
| t RLRH                          | RD Pulsewidth                   | 377        |            | 6t CORE - 100 |                     | ns                  | 4      |
| t AVLL                          | Address Valid after ALE Low     | 39         |            | t CORE - 40   |                     | ns                  | 4      |
| t LLAX                          | Address Hold after ALE Low      | 44         |            | t CORE - 35   |                     | ns                  | 4      |
| t RLDV                          | RD Low to Valid Data In         |            | 232        |               | 5t CORE - 165       | ns                  | 4      |
| t RHDX                          | Data and Address Hold after RD  | 0          |            | 0             |                     | ns                  | 4      |
| t RHDZ                          | Data Float after RD             |            | 89         |               | 2t CORE - 70        | ns                  | 4      |
| t LLDV                          | ALE Low to Valid Data In        |            | 486        |               | 8t CORE - 150       | ns                  | 4      |
| t AVDV                          | Address to Valid Data In        |            | 550        |               | 9t CORE - 165       | ns                  | 4      |
| t LLWL                          | ALE Low to RD Low               | 188        | 288        | 3t CORE - 50  | 3t CORE + 50        | ns                  | 4      |
| t AVWL                          | Address Valid to RD Low         | 188        |            | 4t CORE - 130 |                     | ns                  | 4      |
| t RLAZ                          | RD Low to Address Float         |            | 0          |               | 0                   | ns                  | 4      |
| t WHLH                          | RD High to ALE High             | 39         | 119        | t CORE - 40   | t CORE +            | 40 ns               | 4      |

<!-- image -->

<!-- image -->

Figure 5. External Data Memory Write Cycle

|                                  | 12.58MHz Core_Clk                | 12.58MHz Core_Clk   |   Variable Core_Clk | Variable Core_Clk   |              |      |        |
|----------------------------------|----------------------------------|---------------------|---------------------|---------------------|--------------|------|--------|
| Parameter                        | Min                              | Max                 |                     | Min                 | Max          | Unit | Figure |
| EXTERNAL DATA MEMORY WRITE CYCLE | EXTERNAL DATA MEMORY WRITE CYCLE |                     |                     |                     |              |      |        |
| t WLWH                           | WR Pulsewidth                    | 377                 |                     | 6t CORE - 100       |              | ns   | 5      |
| t AVLL                           | Address Valid after ALE Low      | 39                  |                     | t CORE - 40         |              | ns   | 5      |
| t LLAX                           | Address Hold after ALE Low       | 44                  |                     | t CORE - 35         |              | ns   | 5      |
| t LLWL                           | ALE Low to WR Low                | 188                 |                 288 | 3t CORE - 50        | 3t CORE + 50 | ns   | 5      |
| t AVWL                           | Address Valid to WR Low          | 188                 |                     | 4t CORE - 130       |              | ns   | 5      |
| t QVWX                           | Data Valid to WR Transition      | 29                  |                     | t CORE - 50         |              | ns   | 5      |
| t QVWH                           | Data Setup before WR             | 406                 |                     | 7t CORE - 150       |              | ns   | 5      |
| t WHQX                           | Data and Address Hold after WR   | 29                  |                     | t CORE - 50         |              | ns   | 5      |
| t WHLH                           | WR High to ALE High              | 39                  |                 119 | t CORE - 40         | t CORE + 40  | ns   | 5      |

<!-- image -->

<!-- image -->

## ADuC824

Figure 6. UART Timing in Shift Register Mode

|                                   | 12.58MHz                          | Core_Clk   | Core_Clk   | Core_Clk   | Variable Core_Clk   | Variable Core_Clk   | Variable Core_Clk   |             |
|-----------------------------------|-----------------------------------|------------|------------|------------|---------------------|---------------------|---------------------|-------------|
| Parameter                         | Parameter                         | Min        | Typ        | Max        | Min                 | Typ                 | Max                 | Unit Figure |
| UART TIMING (Shift Register Mode) | UART TIMING (Shift Register Mode) |            |            |            |                     |                     |                     |             |
| t XLXL                            | Serial Port Clock Cycle Time      |            | 0.95       |            |                     | 12t CORE            | µ s                 | 6           |
| t QVXH                            | Output Data Setup to Clock        | 662        |            |            | 10t CORE - 133      |                     | ns                  | 6           |
| t DVXH                            | Input Data Setup to Clock         | 292        |            |            | 2t CORE + 133       |                     | ns                  | 6           |
| t XHDX                            | Input Data Hold after Clock       | 0          |            |            | 0                   |                     | ns                  | 6           |
| t XHQX                            | Output Data Hold after Clock      | 42         |            |            | 2t CORE - 117       |                     | ns                  | 6           |

<!-- image -->

| Parameter                         | Min                                |   Max | Unit   |   Figure |
|-----------------------------------|------------------------------------|-------|--------|----------|
| I 2 C-COMPATIBLE INTERFACE TIMING |                                    |       |        |          |
| t L SCLOCK Low                    | Pulsewidth 4.7                     |       | µ s    |        7 |
| t H SCLOCK High                   | Pulsewidth 4.0                     |       | µ s    |        7 |
| t SHD Start Condition             | Hold Time 0.6                      |       | µ s    |        7 |
| t DSU Data Setup Time             | 100                                |       | µ s    |        7 |
| t DHD Data Hold Time              |                                    |   0.9 | µ s    |        7 |
| t RSU Setup Time for              | Repeated Start 0.6                 |       | µ s    |        7 |
| t PSU Stop Condition              | Setup Time 0.6                     |       | µ s    |        7 |
| t BUF Bus Free Time               | between a STOP 1.3                 |       | µ s    |        7 |
| t R Rise Time of Both             | SCLOCK and SDATA                   |   300 | ns     |        7 |
| t F                               | Fall Time of Both SCLOCK and SDATA |   300 | ns     |        7 |
| t SUP *                           | Pulsewidth of Spike Suppressed     |    50 | ns     |        7 |

* Input filtering on both the SCLOCK and SDATA inputs suppresses noise spikes less than 50 ns.

Figure 7. I 2 C-Compatible Interface Timing

<!-- image -->

## ADuC824

| Parameter                         | Parameter                                |   Min |   Typ |   Max | Unit   |   Figure |
|-----------------------------------|------------------------------------------|-------|-------|-------|--------|----------|
| SPI MASTER MODE TIMING (CPHA = 1) | SPI MASTER MODE TIMING (CPHA = 1)        |       |       |       |        |          |
| t SL                              | SCLOCK Low Pulsewidth *                  |       |   630 |       | ns     |        8 |
| t SH                              | SCLOCK High Pulsewidth *                 |       |   630 |       | ns     |        8 |
| t DAV                             | Data Output Valid after SCLOCK Edge      |       |       |    50 | ns     |        8 |
| t DSU                             | Data Input Setup Time before SCLOCK Edge |   100 |       |       | ns     |        8 |
| t DHD                             | Data Input Hold Time after SCLOCK Edge   |   100 |       |       | ns     |        8 |
| t DF                              | Data Output Fall Time                    |       |    10 |    25 | ns     |        8 |
| t DR                              | Data Output Rise Time                    |       |    10 |    25 | ns     |        8 |
| t SR                              | SCLOCK Rise Time                         |       |    10 |    25 | ns     |        8 |
| t SF                              | SCLOCK Fall Time                         |       |    10 |    25 | ns     |        8 |

Figure 8. SPI Master Mode Timing (CPHA = 1)

<!-- image -->

| Parameter                         | Parameter                                |   Min |   Typ |   Max | Unit   |   Figure |
|-----------------------------------|------------------------------------------|-------|-------|-------|--------|----------|
| SPI MASTER MODE TIMING (CPHA = 0) | SPI MASTER MODE TIMING (CPHA = 0)        |       |       |       |        |          |
| t SL                              | SCLOCK Low Pulsewidth *                  |       |   630 |       | ns     |        9 |
| t SH                              | SCLOCK High Pulsewidth *                 |       |   630 |       | ns     |        9 |
| t DAV                             | Data Output Valid after SCLOCK Edge      |       |       |    50 | ns     |        9 |
| t DOSU                            | Data Output Setup before SCLOCK Edge     |       |       |   150 | ns     |        9 |
| t DSU                             | Data Input Setup Time before SCLOCK Edge |   100 |       |       | ns     |        9 |
| t DHD                             | Data Input Hold Time after SCLOCK Edge   |   100 |       |       | ns     |        9 |
| t DF                              | Data Output Fall Time                    |       |    10 |    25 | ns     |        9 |
| t DR                              | Data Output Rise Time                    |       |    10 |    25 | ns     |        9 |
| t SR                              | SCLOCK Rise Time                         |       |    10 |    25 | ns     |        9 |
| t SF                              | SCLOCK Fall Time                         |       |    10 |    25 | ns     |        9 |

Figure 9. SPI Master Mode Timing (CPHA = 0)

<!-- image -->

## ADuC824

Figure 10. SPI Slave Mode Timing (CPHA = 1)

| Parameter                        | Parameter                                |   Min |   Typ |   Max | Unit   |   Figure |
|----------------------------------|------------------------------------------|-------|-------|-------|--------|----------|
| SPI SLAVE MODE TIMING (CPHA = 1) | SPI SLAVE MODE TIMING (CPHA = 1)         |       |       |       |        |          |
| t SS                             | SS to SCLOCK Edge                        |     0 |       |       | ns     |       10 |
| t SL                             | SCLOCK Low Pulsewidth                    |       |   330 |       | ns     |       10 |
| t SH                             | SCLOCK High Pulsewidth                   |       |   330 |       | ns     |       10 |
| t DAV                            | Data Output Valid after SCLOCK Edge      |       |       |    50 | ns     |       10 |
| t DSU                            | Data Input Setup Time before SCLOCK Edge |   100 |       |       | ns     |       10 |
| t DHD                            | Data Input Hold Time after SCLOCK Edge   |   100 |       |       | ns     |       10 |
| t DF                             | Data Output Fall Time                    |       |    10 |    25 | ns     |       10 |
| t DR                             | Data Output Rise Time                    |       |    10 |    25 | ns     |       10 |
| t SR                             | SCLOCK Rise Time                         |       |    10 |    25 | ns     |       10 |
| t SF                             | SCLOCK Fall Time                         |       |    10 |    25 | ns     |       10 |
| t SFS                            | SS High after SCLOCK Edge                |     0 |       |       | ns     |       10 |

<!-- image -->

Figure 11. SPI Slave Mode Timing (CPHA = 0)

| Parameter                     | Min                                      |   Typ |   Max |   Unit |    |   Figure |
|-------------------------------|------------------------------------------|-------|-------|--------|----|----------|
| SPI SLAVE MODE TIMING (CPHA = | 0)                                       |       |       |        |    |          |
| t SS                          | SS to SCLOCK Edge                        |     0 |       |        | ns |       11 |
| t SL                          | SCLOCK Low Pulsewidth                    |       |   330 |        | ns |       11 |
| t SH                          | SCLOCK High Pulsewidth                   |       |   330 |        | ns |       11 |
| t DAV                         | Data Output Valid after SCLOCK Edge      |       |       |     50 | ns |       11 |
| t DSU                         | Data Input Setup Time before SCLOCK Edge |   100 |       |        | ns |       11 |
| t DHD                         | Data Input Hold Time after SCLOCK Edge   |   100 |       |        | ns |       11 |
| t DF                          | Data Output Fall Time                    |       |    10 |     25 | ns |       11 |
| t DR                          | Data Output Rise Time                    |       |    10 |     25 | ns |       11 |
| t SR                          | SCLOCK Rise Time                         |       |    10 |     25 | ns |       11 |
| t SF                          | SCLOCK Fall Time                         |       |    10 |     25 | ns |       11 |
| t SSR                         | SS to SCLOCK Edge                        |       |       |     50 | ns |       11 |
| t DOSS                        | Data Output Valid after SS Edge          |       |       |     20 | ns |       11 |
| t SFS                         | SS High after SCLOCK Edge                |     0 |       |        | ns |       11 |

<!-- image -->

## ADuC824

## ABSOLUTE MAXIMUM RATINGS 1

| (T A = 25 ° C unless otherwise noted.)                         | .                                                    |
|----------------------------------------------------------------|------------------------------------------------------|
| AV DD to AGND . . . . . . . . . . . . .                        | . . . . . . -0.3 V to +7 V                           |
| AV DD to DGND . . . . . . . . . . . . .                        | . . . . . . . -0.3 V to +7 V                         |
| DV DD to AGND . . . . . . . . . . . . .                        | . . . . . . . -0.3 V to +7 V                         |
| DV DD to DGND . . . . . . . . . . . . .                        | . . . . . . . -0.3 V to +7 V                         |
| AGND to DGND 2 . . . . . . . . . . .                           | . . . . . -0.3 V to +0.3 V                           |
| AV DD to DV DD . . . . . . . . . . . . . .                     | . . . . . . . . -2 V to +5 V                         |
| Analog Input Voltage to AGND 3 .                               | -0.3 V to AV DD + 0.3 V                              |
| Reference Input Voltage to AGND AIN/REFIN Current (Indefinite) | -0.3 V to AV DD + 0.3 V . . . . . . . . . . . . 30mA |
|                                                                | .                                                    |
| Digital Input Voltage to DGND . Digital Output Voltage to DGND | -0.3 V to DV DD + 0.3 V -0.3 V to DV + 0.3 V         |
| Operating Temperature Range . .                                | DD . . . . . . -40 ° C to +85 ° C                    |
| Storage Temperature Range . . . .                              | . . . . . -65 ° C to +150 ° C                        |
| Junction Temperature . . . . . . . . .                         | . . . . . . . . . . . . . 150 ° C                    |
| θ JA Thermal Impedance . . . . . . . .                         | . . . . . . . . . . . . 90 ° C/W                     |
| Lead Temperature, Soldering                                    |                                                      |
| Vapor Phase (60 sec) . . . . . . . .                           | . . . . . . . . . . . . . 215 ° C                    |
| Infrared (15 sec) . . . . . . . . . . .                        | . . . . . . . . . . . . . 220 ° C                    |

NOTES

1 Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device  at  these  or  any  other  conditions  above  those  listed  in  the  operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

2 AGND and DGND are shorted internally on the ADuC824.

3 Applies to P1.2 to P1.7 pins operating in analog or digital input modes.

## ORDERING GUIDE

| Model     | Temperature Range   | Package Description           | Package Option   |
|-----------|---------------------|-------------------------------|------------------|
| ADuC824BS | -40 ° C to +85 ° C  | 52-Lead Plastic Quad Flatpack | S-52             |

| QuickStart Development System Model   | Description                                                                                                                                                                                                                                                                                                                                                                 |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EVAL-ADUC824QS                        | Development System for the ADuC824 MicroConverter, containing: Evaluation Board Serial Port Cable Plug-In Power Supply Windows ® Serial Downloader(WSD) * Windows Debugger (DeBug) Windows ADuC824 Simulator (ADSIM) Windows ADC Analysis Software Program (WASP) 8051 Assembler (Metalink) C-Compiler (Keil) Evaluation Copy Limited to 2 Kcode Example Code Documentation |

## PIN CONFIGURATION

<!-- image -->

## CAUTION

ESD (electrostatic  discharge)  sensitive  device.  Electrostatic  charges  as  high  as  4000 V  readily accumulate on the human body and test equipment and can discharge without detection. Although the ADuC824 features proprietary ESD protection circuitry, permanent damage may occur on devices subjected to high energy electrostatic discharges. Therefore, proper ESD precautions are recommended to avoid performance degradation or loss of functionality.

* Windows is a registered trademark of Microsoft Corporation.

<!-- image -->

## PIN FUNCTION DESCRIPTIONS

| Pin No.    | Mnemonic              | Type *   | Description                                                                                                                                                                                                                                                                                                                                                                                                                               |
|------------|-----------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1          | P1.0/T2               | I/O      | Port 1.0 can function as a digital input or digital output and has a pull-up configuration as described below for Port 3. P1.0 has an increased current drive sink capability of 10mA and can also be used to provide a clock input to Timer 2. When Enabled, Counter 2 is incremented in response to a negative transition on the T2 input pin.                                                                                          |
| 2          | P1.1/T2EX             | I/O      | Port 1.1 can function as a digital input or digital output and has a pull-up configuration as described below for Port 3. P1.1 has an increased current drive sink capability of 10mA and can also be used to provide a control input to Timer 2. When Enabled, a negative transition on the T2EX input pin will cause a Timer 2 capture or reload event.                                                                                 |
| 3          | P1.2/DAC/IEXC1        | I/O      | Port 1.2. This pin has no digital output driver; it can function as a digital input for which '0' must be written to the port bit. As a digital input, P1.2 must be driven high or low externally. The voltage output from the DAC can also be configured to appear at this pin. If the DAC output is not being used, one or both of the excitation current sources (200 µ A or 2 × 200 µ A) can be programmed to be sourced at this pin. |
| 4          | P1.3/AIN5/IEXC2       | I        | Port 1.3. This pin has no digital output driver; it can function as a digital input for which '0' must be written to the port bit. As a digital input, P1.3 must be driven high or low externally. This pin can provide an analog input (AIN5) to the auxiliary ADC and one or both of the excitation current sources (200 µ A or 2 × 200 µ A) can be programmed to be sourced at this pin.                                               |
| 5          | AV DD                 | S        | Analog Supply Voltage, 3 V or 5 V                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6          | AGND                  | S        | Analog Ground. Ground reference pin for the analog circuitry                                                                                                                                                                                                                                                                                                                                                                              |
| 7          | REFIN(-)              | I        | Reference Input, Negative Terminal                                                                                                                                                                                                                                                                                                                                                                                                        |
| 8          | REFIN(+)              | I        | Reference Input, Positive Terminal                                                                                                                                                                                                                                                                                                                                                                                                        |
| 9-11       | P1.4-P1.6             | I        | Port 1.4 to P1.6. These pins have no digital output drivers; they can function as digital inputs, for which '0' must be written to the respective port bit. As a digital input, these pins must be driven high or low externally. These port pins also have the following analog functionality:                                                                                                                                           |
| 12         | P1.4/AIN1 P1.5/AIN2   | I        | Primary ADC Channel, Positive Analog Input Primary ADC Channel, Negative Analog Input Auxiliary ADC Input or muxed Primary ADC Channel, Positive Analog Input                                                                                                                                                                                                                                                                             |
|            | P1.6/AIN3             | I I      | 1.7. This pin has no digital output driver; it can function as a digital input for which '0' must be to the port bit. As a digital input, P1.7 must be driven high or low externally. This pin can an analog input (AIN4) to the auxiliary ADC or muxed Primary ADC Channel, Negative Input. The voltage output from the DAC can also be configured to appear at this pin.                                                                |
|            | P1.7/AIN4/DAC         | I/O      | Port written provide Analog                                                                                                                                                                                                                                                                                                                                                                                                               |
| 13         | SS                    | I        | Slave Select Input for the SPI Interface. A weak pull-up is present on this pin.                                                                                                                                                                                                                                                                                                                                                          |
| 14         | MISO                  | I/O      | Master Input/Slave Output for the SPI Interface. There is a weak pull-up on this input pin.                                                                                                                                                                                                                                                                                                                                               |
| 16-19      |                       |          | the device. There is a weak pull-down and a Schmitt trigger input stage on this pin. External POR (power-on reset) circuitry must be added to drive the RESET pin as described later in this data sheet. P3.0-P3.3 are bidirectional port pins with internal pull-up resistors. Port 3 pins that have 1s written                                                                                                                          |
|            | P3.0-P3.3             | I/O      | to them are pulled high by the internal pull-up resistors, and in that state can be used as inputs. As inputs, Port 3 pins being pulled externally low will source current because of the internal pull-up resistors. When driving a 0-to-1 output transition, a strong pull-up is active for two core clock periods of the instruction cycle. Port 3 pins also have various secondary functions described below.                         |
|            | P3.0/RXD              | I/O      | Receiver Data Input (asynchronous) or Data Input/Output (synchronous) of serial (UART) port.                                                                                                                                                                                                                                                                                                                                              |
|            | P3.1/TXD              | I/O      | Transmitter Data Output (asynchronous) or Clock Output (synchronous) of serial (UART) port.                                                                                                                                                                                                                                                                                                                                               |
|            | P3.2/ INT0 P3.3/ INT1 | I/O I/O  | Interrupt 0, programmable edge or level triggered Interrupt input, which can be programmed to one of two priority levels. This pin can also be used as a gate control input to Timer0. Interrupt 1, programmable edge-or level-triggered Interrupt input, which can be programmed                                                                                                                                                         |
| 20, 34, 48 | DV DD                 | S        | Digital supply, 3 V or 5 V                                                                                                                                                                                                                                                                                                                                                                                                                |
| 21, 35, 47 | DGND                  | S        | Digital ground, ground reference point for the digital circuitry                                                                                                                                                                                                                                                                                                                                                                          |

## PIN FUNCTION DESCRIPTIONS (continued)

| Pin No.   | Mnemonic                | Type *   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------|-------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 22-25     | P3.4-P3.7               | I/O      | P3.4-P3.7 are bidirectional port pins with internal pull-up resistors. Port 3 pins that have 1s written to them are pulled high by the internal pull-up resistors, and in that state can be used as inputs. As inputs, Port 3 pins being pulled externally low will source current because of the internal pull-up resistors. When driving a 0-to-1 output transition, a strong pull-up is active for two core clock periods of the instruction cycle. The secondary functions of Port 3 pins are:                                                                                                                                                              |
|           | P3.4/T0                 | I/O      | Timer/Counter 0 Input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|           | P3.5/T1                 | I/O      | Timer/Counter 1 Input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|           | P3.6/ WR                | I/O      | Write Control Signal, Logic Output. Latches the data byte from Port 0 into an external data memory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|           | P3.7/ RD                | I/O      | Read Control Signal, Logic Output. Enables the data from an external data memory to Port 0.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 26        | SCLK                    | I/O      | Serial interface clock for either the I 2 C-compatible or SPI interface. As an input this pin is a Schmitt- triggered input and a weak internal pull-up is present on this pin unless it is outputting logic low.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 27        | SDATA/MOSI              | I/O      | Serial data I/O for the I 2 C compatible interface or master output/slave input for the SPI interface. A weak internal pull-up is present on this pin unless it is outputting logic low.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 28 - 31   | P2.0 - P2.3             | I/O      | Port 2 is a bidirectional port with internal pull-up resistors. Port 2 pins that have 1s (A8-A11) written to them are pulled high by the internal pull-up resistors, and in that state can (A16-A19) be used as inputs. As inputs, Port 2 pins being pulled externally low will source current because of the internal pull-up resistors. Port 2 emits the high order address bytes during fetches from external program memory and middle and high order address bytes during accesses to the 24-bit external data memory space.                                                                                                                               |
| 32        | XTAL1                   | I        | Input to the crystal oscillator inverter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 33        | XTAL2                   | O        | Output from the crystal oscillator inverter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 36 - 39   | P2.4 - P2.7             | I/O      | Port 2 is a bidirectional port with internal pull-up resistors. Port 2 pins that have 1s (A12-A15) written to them are pulled high by the internal pull-up resistors, and in that state they (A20-A23) can be used as inputs. As inputs, Port 2 pins being pulled externally low will source current because of the internal pull-up resistors. Port 2 emits the high order address bytes during fetches from external program memory and middle and high order address bytes during accesses to the 24-bit external data memory space.                                                                                                                         |
| 40        | EA                      | I/O      | External Access Enable, Logic Input. When held high, this input enables the device to fetch code from internal program memory locations 0000H to 1FFFH. When held low, this input enables the device to fetch all instructions from external program memory. To determine the mode of code execution, i.e., internal or external, the EA pin is sampled at the end of an external RESET assertion or as part of a device power cycle. EA may also be used as an external emula- tion I/O pin and therefore the voltage level at this pin must not be changed during normal mode operation as it may cause an emulation interrupt that will halt code execution. |
| 41        | PSEN                    | O        | Program Store Enable, Logic Output. This output is a control signal that enables the external program memory to the bus during external fetch operations. It is active every six oscillator periods except during external data memory accesses. This pin remains high during internal program execution. PSEN can also be used to enable serial download mode when pulled low through a resistor at the end of an external RESET assertion or as part of a device power cycle.                                                                                                                                                                                 |
| 42        | ALE                     | O        | Address Latch Enable, Logic Output. This output is used to latch the low byte (and page byte for 24-bit data address space accesses) of the address to external memory during external code or data memory access cycles. It is activated every six oscillator periods except during an external data memory access. It can be disabled by setting the PCON.4 bit in the PCON SFR.                                                                                                                                                                                                                                                                              |
| 43 - 46   | P0.0 - P0.3 (AD0 - AD3) | I/O      | P0.0 - P0.3 pins are part of Port 0, which is an 8-bit open-drain bidirectional. I/O port. Port 0 pins that have 1s written to them float and in that state can be used as high impedance inputs. An external pull-up resistor will be required on P0 outputsto force a valid logic high level                                                                                                                                                                                                                                                                                                                                                                  |
| 49 - 52   | P0.4 - P0.7 (AD4 - AD7) | I/O      | program or data memory. In this application it uses strong internal pull-ups when emitting 1s. P0.4 - P0.7 pins are part of Port 0, which is an 8-bit open drain bidirectional. I/O port. Port 0 pins that have 1s written to them float and in that state can be used as high impedance inputs. Port 0 is also the multiplexed low-order address and data bus during accesses to external program or data memory. In this application it uses strong internal pull-ups when emitting 1s.                                                                                                                                                                       |

* I = Input, O = Output, S = Supply

NOTES

1. In the following descriptions, SET implies a Logic 1 state and CLEARED implies a Logic 0 state unless otherwise stated.

2. In the following descriptions, SET and CLEARED also imply that the bit is set or automatically cleared by the ADuC824 hardware unless otherwise stated.

3. User software should not write 1s to reserved or unimplemented bits as they may be used in future products.

## ADuC824

Figure 12. Block Diagram

<!-- image -->

## ADuC824

## MEMORY ORGANIZATION

As with all 8051-compatible devices, the ADuC824 has separate address spaces for Program and Data memory as shown in Figure 13 and Figure 14.

If the user applies power or resets the device while the EA pin is pulled low, the part will execute code from the external program space, otherwise the part defaults to code execution from its internal 8 Kbyte Flash/EE program memory. This internal code space can be downloaded via the UART serial port while the device is in-circuit.

Figure 13. Program Memory Map

<!-- image -->

The data memory address space consists of internal and external memory space. The internal memory space is divided into four physically separate and distinct blocks, namely the lower 128 bytes of RAM, the upper 128 bytes of RAM, the 128 bytes of special function register (SFR) area, and a 640-byte Flash/EE Data memory. While the upper 128 bytes of RAM, and the SFR area share the same address locations, they are accessed through different address modes.

The lower 128 bytes of data memory can be accessed through direct or indirect addressing, the upper 128 bytes of RAM can be accessed through indirect addressing, and the SFR area is accessed through direct addressing.

Also, as shown in Figure 13, the additional 640 Bytes of Flash/EE Data Memory are available to the user and can be accessed indirectly via a group of control registers mapped into the Special Function Register (SFR) area. Access to the Flash/ EE Data memory is discussed in detail later as part of the Flash/ EE memory section in this data sheet.

The external data memory area can be expanded up to 16 Mbytes. This is an enhancement of the 64 KByte external data memory space available on standard 8051-compatible cores.

The external data memory is discussed in more detail in the ADuC824 Hardware Design Considerations section.

Figure 14. Data Memory Map

<!-- image -->

The lower 128 bytes of internal data memory are mapped as shown in Figure 15. The lowest 32 bytes are grouped into four banks of eight registers addressed as R0 through R7. The next 16 bytes (128 bits), locations 20 Hex through 2 FHex above the register banks, form a block of directly addressable bit locations at bit addresses 00H through 7FH. The stack can be located anywhere in the internal memory address space, and the stack depth can be expanded up to 256 bytes.

Figure 15. Lower 128 Bytes of Internal Data Memory

<!-- image -->

Reset initializes the stack pointer to location 07 Hex and increments it once to start from locations 08 Hex which is also the first register (R0) of register bank 1. Thus, if one is going to use more than one register bank, the stack pointer should be initialized to an area of RAM not used for data storage.

The SFR space is mapped to the upper 128 bytes of internal data memory space and accessed by direct addressing only. It provides an interface between the CPU and all on-chip peripherals. A block diagram showing the programming model of the ADuC824 via the SFR area is shown in Figure 16. A complete SFR map is shown in Figure 17.

Figure 16. Programming Model

<!-- image -->

## OVERVIEW OF MCU-RELATED SFRs

## Accumulator SFR

ACC is the Accumulator register and is used for math operations including addition, subtraction, integer multiplication and division, and Boolean bit manipulations. The mnemonics for accumulatorspecific instructions refer to the Accumulator as A.

## B SFR

The B register is used with the ACC for multiplication and division operations. For other instructions it can be treated as a general-purpose scratchpad register.

## Stack Pointer SFR

The SP register is the stack pointer and is used to hold an internal RAM address that is called the 'top of the stack.' The SP register is incremented before data is stored during PUSH and CALL executions. While the stack may reside anywhere in on-chip RAM, the SP register is initialized to 07H after a reset. This causes the stack to begin at location 08H.

## Data Pointer

The Data Pointer is made up of three 8-bit registers, named DPP (page byte), DPH (high byte), and DPL (low byte). These are used to provide memory addresses for internal and external code access and external data access. It may be manipulated as a 16-bit register (DPTR = DPH, DPL), although INC DPTR instructions will automatically carry over to DPP, or as three independent 8-bit registers (DPP, DPH, DPL).

## Program Status Word SFR

The PSW register is the Program Status Word which contains several bits reflecting the current status of the CPU as detailed in Table I.

| SFR Address            | D0H   |
|------------------------|-------|
| Power ON Default Value | 00H   |
| Bit Addressable        | Yes   |

| CY   | AC   | F0   | RS1   | RS0   | OV   | F1   | P   |
|------|------|------|-------|-------|------|------|-----|

Table I. PSW SFR Bit Designations

|   Bit | Name   | Description               | Description               | Description               |
|-------|--------|---------------------------|---------------------------|---------------------------|
|     7 | CY     | Carry Flag                | Carry Flag                | Carry Flag                |
|     6 | AC     | Auxiliary Carry Flag      | Auxiliary Carry Flag      | Auxiliary Carry Flag      |
|     5 | F0     | General-Purpose Flag      | General-Purpose Flag      | General-Purpose Flag      |
|     4 | RS1    | Register Bank Select Bits | Register Bank Select Bits | Register Bank Select Bits |
|     3 | RS0    | RS1                       | RS0                       | Selected Bank             |
|       |        | 0                         | 0                         | 0                         |
|       |        | 0                         | 1                         | 1                         |
|       |        | 1                         | 0                         | 2                         |
|       |        | 1                         | 1                         | 3                         |
|     2 | OV     | Overflow Flag             | Overflow Flag             | Overflow Flag             |
|     1 | F1     | General-Purpose Flag      | General-Purpose Flag      | General-Purpose Flag      |
|     0 | P      | Parity Bit                | Parity Bit                | Parity Bit                |

## Power Control SFR

The Power Control (PCON) register contains bits for powersaving options and general-purpose status flags as shown in Table II.

| SFR Address            | 87H   |
|------------------------|-------|
| Power ON Default Value | 00H   |
| Bit Addressable        | No    |

| SMOD   | SERIPD   | INT0PD   | ALEOFF   | GF1   | GF0   | PD   | IDL   |
|--------|----------|----------|----------|-------|-------|------|-------|

Table II. PCON SFR Bit Designations

|   Bit | Name   | Description                           |
|-------|--------|---------------------------------------|
|     7 | SMOD   | Double UART Baud Rate                 |
|     6 | SERIPD | I 2 C/SPI Power-Down Interrupt Enable |
|     5 | INT0PD | INT0 Power-Down Interrupt Enable      |
|     4 | ALEOFF | Disable ALE Output                    |
|     3 | GF1    | General-Purpose Flag Bit              |
|     2 | GF0    | General-Purpose Flag Bit              |
|     1 | PD     | Power-Down Mode Enable                |
|     0 | IDL    | Idle Mode Enable                      |

## ADuC824

## SPECIAL FUNCTION REGISTERS

All registers, except the program counter and the four generalpurpose register banks, reside in the SFR area. The SFR registers include control, configuration, and data registers that provide an interface between the CPU and all on-chip peripherals.

Figure 17 shows a full SFR memory map and SFR contents on RESET NOT USED indicates unoccupied SFR locations. Unoccupied locations in the SFR address space are not implemented; i.e., no register exists at this location. If an unoccupied location is read, an unspecified value is returned. SFR locations reserved for future use are shaded (RESERVED) and should not be accessed by user software.

<!-- image -->

| ISPI FFH 0 WCOL FEH 0 SPE FDH 0 SPIM FCH 0 CPOL FBH 0 CPHA FAH SPR1 F9H 0 SPR0 F8H 0 BITS 1   | SPICON F8H 04H                            | RESERVED RESERVED   | DACL FBH 00H FCH              | DACH 00H DACCON FDH 00H   | RESERVED       | RESERVED       |
|-----------------------------------------------------------------------------------------------|-------------------------------------------|---------------------|-------------------------------|---------------------------|----------------|----------------|
| F7H 0 F6H 0 F5H 0 F4H 0 F3H 0 F2H F1H 0 F0H 0                                                 | RESERVED B F0H 00H 0 BITS                 | RESERVED            | NOT USED RESERVED             | RESERVED                  | RESERVED       | SPIDAT F7H 00H |
| MDO EFH 0 MDE EEH 0 MCO EDH 0 MDI ECH 0 I2CM EBH 0 I2CRS EAH I2CTX E9H 0 E8H 0                | I2CCON E8H 00H E9H 55H GN0L * I2CI 0 BITS | EAH 55H GN0M *      | EBH 53H GN1L * ECH 9AH GN0H * | GN1H * EDH 59H            | RESERVED       | RESERVED       |
| E7H 0 E6H 0 E5H 0 E4H 0 E3H 0 E2H E1H 0 E0H 0                                                 | ACC E0H 00H OF0L * E1H 00H 0 BITS         | OF0M * E2H 00H      | OF0H * E3H 80H OF1L E4H       | * 00H OF1H * E5H 80H      | RESERVED       | RESERVED       |
| RDY0 DFH 0 RDY1 DEH 0 CAL DDH 0 NOXREF DCH 0 ERR0 DBH 0 ERR1 DAH D9H 0 D8H 0                  | ADCSTAT D8H 00H ADC0L D9H 00H 0 BITS      | ADC0M DAH 00H       | ADC0H DBH 00H DCH             | ADC1L 00H ADC1H DDH 00H   | RESERVED       | PSMCON DFH DEH |
| CY D7H 0 AC D6H 0 F0 D5H 0 RSI D4H 0 RS0 D3H 0 OV D2H FI D1H 0 P D0H 0                        | PSW 00H ADCMODE D1H 00H 0 BITS            | ADC0CON D2H 07H     | ADC1CON 00H SF D4H            | ICON D5H 00H              | RESERVED       | PLLCON         |
| TF2                                                                                           | D0H T2CON                                 | RCAP2L              | D3H RCAP2H CBH 00H            | 45H TH2                   |                | D7H 03H        |
| CFH 0 EXF2 CEH 0 RCLK CDH 0 TCLK CCH 0 EXEN2 CBH 0 TR2 CAH CNT2 C9H 0 C8H 0                   | RESERVED 00H C8H CAP2 0 BITS              | CAH 00H             | TL2 CCH 00H                   | CDH 00H                   | RESERVED       | RESERVED       |
| PRE2 C7H 0 PRE1 C6H 0 PRE0 C5H 0 C4H 1 WDIR C3H 0 WDS C2H WDE C1H 0 WDWR C0H 0 BITS 0 PRE3    | RESERVED WDCON C0H 10H                    | CHIPID C2H 06H      | RESERVED RESERVED             | RESERVED                  | EADRL C6H 00H  | RESERVED       |
| BFH 0 PADC BEH 0 PT2 BDH 0 PS BCH 0 PT1 BBH 0 PX1 BAH PT0 B9H 0 PX0 B8H 0 BITS                | IP B8H 00H ECON B9H 00H                   | RESERVED            | RESERVED EDATA1 BCH 00H       | EDATA2 BDH 00H            | EDATA3 BEH 00H | EDATA4 BFH 00H |
| RD B7H 1 WR B6H 1 T1 B5H 1 T0 B4H 1 INT1 B3H 1 INT0 B2H TXD B1H 1 RXD B0H 1 BITS 1            | P3 B0H FFH NOT USED                       | NOT USED            | NOT USED NOT USED             | RESERVED                  | RESERVED       | NOT USED       |
| EA AFH EADC AEH ET2 ADH ES ACH 0 ET1 ABH 0 EX1 AAH ET0 A9H 0 EX0 A8H 0 BITS 0 0 0 0           | IE IEIP2                                  | RESERVED            | RESERVED RESERVED             | RESERVED                  | RESERVED       | RESERVED       |
|                                                                                               | A8H 00H P2 A9H A0H TIMECON                | HTHSEC              | SEC                           | HOUR                      | INTVAL         |                |
| A7H A6H A5H 1 A4H 1 A3H 1 A2H A1H 1 A0H 1 BITS 1 1 1                                          | A0H FFH A1H 00H SBUF                      | A2H 00H             | A3H 00H MIN A4H 00H           | A5H 00H                   | A6H 00H        | NOT USED       |
| SM0 9FH 0 SM1 9EH 0 SM2 9DH 0 REN 9CH 0 TB8 9BH 0 RB8 9AH T1 99H 0 R1 98H 0 BITS 0            | SCON 98H 00H 99H 00H                      | I2CDAT 9AH 00H      | NOT USED I2CDAT 00H 9AH       | NOT USED                  | NOT USED       | NOT USED       |
| 97H 1 96H 1 95H 1 94H 1 93H 1 92H T2EX 91H 1 T2 90H 1 BITS 1                                  | NOT USED P1 90H FFH                       | NOT USED            | NOT USED NOT USED             | NOT USED                  | NOT USED       | NOT USED       |
| TF1 8FH 0 TR1 8EH 0 TF0 8DH 0 TR0 8CH 0 IE1 8BH 0 IT1 8AH IE0 89H 0 IT0 88H 0 BITS 0          | TCON 00H TMOD 89H 00H                     | TL0 8AH 00H         | TL1 TH0 8CH 00H               | TH1 8DH 00H               | RESERVED       | RESERVED       |
| 88H                                                                                           | SP                                        | DPL                 | DPP                           | RESERVED                  |                | PCON           |
| 80H 87H 1 86H 1 85H 1 84H 1 83H 1 82H 81H 1 80H 1 BITS 1                                      | P0 FFH 81H                                | 07H 82H 00H         | 8BH 00H DPH 83H 00H 84H       | 00H                       | RESERVED       | 87H 00H        |

* CALIBRATION COEFFICIENTS ARE PRECONFIGURED AT POWER-UP TO FACTORY CALIBRATED VALUES.

Figure 17. Special Function Register Locations and Reset Values

<!-- image -->

## ADuC824

| SFR INTERFACE TO THE PRIMARY AND AUXILIARY ADCS Both ADCs are controlled and configured via a number of SFRs   | SFR INTERFACE TO THE PRIMARY AND AUXILIARY ADCS Both ADCs are controlled and configured via a number of SFRs                     | ICON:      | Current Source Control Register. Allows user control of the various on-chip current source options.   |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------------|
| that are mentioned here and described in more detail in the following pages.                                   | that are mentioned here and described in more detail in the following pages.                                                     | ADC0L/M/H: | Primary ADC 24-bit conversion result held in these three 8-bit registers.                             |
| ADCSTAT:                                                                                                       | ADC Status Register. Holds general status of the Primary and Auxiliary ADCs.                                                     | ADC1L/H:   | Auxiliary ADC 16-bit conversion result held in these two 8-bit registers.                             |
| ADCMODE:                                                                                                       | ADC Mode Register. Controls general modes of operation for Primary and Auxiliary ADCs.                                           | OF0L/M/H:  | Primary ADC 24-bit Offset Calibration Coefficient held in these three 8-bit registers.                |
| ADC0CON:                                                                                                       | Primary ADC Control Register. Controls specific configuration of Primary ADC.                                                    | OF1L/H:    | Auxiliary ADC16-bit Offset Calibration Coefficient held in these two 8-bit registers.                 |
| ADC1CON:                                                                                                       | Auxiliary ADC Control Register. Controls specific configuration of Auxiliary ADC.                                                | GN0L/M/H:  | Primary ADC 24-bit Gain Calibration Coefficient held in these three 8-bit registers.                  |
| SF:                                                                                                            | Sinc Filter Register. Configures the decimation factor for the Sinc3 filter and thus the Primary and Auxiliary ADC update rates. | GN1L/H:    | Auxiliary ADC 16-bit Gain Calibration Coefficient held in these two 8-bit registers.                  |

## ADCSTAT-(ADC Status Register)

This SFR reflects the status of both ADCs including data ready, calibration and various (ADC-related) error and warning conditions including reference detect and conversion overflow/underflow flags.

| SFR Address            | D8H   |
|------------------------|-------|
| Power-On Default Value | 00H   |
| Bit Addressable        | Yes   |

| RDY0   | RDY1   | CAL   | NOXREF   | ERR0   | ERR1   | -   | -   |
|--------|--------|-------|----------|--------|--------|-----|-----|

## Table III. ADCSTAT SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | RDY0   | Ready Bit for Primary ADC Set by hardware on completion of ADC conversion or calibration cycle. Cleared directly by the user or indirectly by write to the mode bits to start another Primary ADC conversion or calibration. The Primary ADC is inhibited from writing further results to its data or calibration registers until the RDY0 bit is cleared.                                                         |
|     6 | RDY1   | Ready Bit for Auxiliary ADC Same definition as RDY0 referred to the Auxiliary ADC.                                                                                                                                                                                                                                                                                                                                 |
|     5 | CAL    | Calibration Status Bit Set by hardware on completion of calibration.                                                                                                                                                                                                                                                                                                                                               |
|     4 | NOXREF | Cleared indirectly by a write to the mode bits to start another ADC conversion or calibration. No External Reference Bit (only active if Primary or Auxiliary ADC is active). Set to indicate that one or both of the REFIN pins is floating or the applied voltage is below a specified threshold. When Set conversion results are clamped to all ones,if using ext. reference. Cleared to indicate valid V REF . |
|     3 | ERR0   | Primary ADC Error Bit Set by hardware to indicate that the result written to the Primary ADC data registers has been clamped to all zeros or all ones. After a calibration this bit also flags error conditions that caused the calibration registers not to be written. Cleared by a write to the mode bits to initiate a conversion or calibration.                                                              |
|     2 | ERR1   | Auxiliary ADC Error Bit                                                                                                                                                                                                                                                                                                                                                                                            |
|     1 | -      | Reserved for Future Use                                                                                                                                                                                                                                                                                                                                                                                            |
|     0 | -      | Reserved for Future Use                                                                                                                                                                                                                                                                                                                                                                                            |

## ADuC824

## ADCMODE (ADC Mode Register)

Used to control the operational mode of both ADCs.

| SFR Address            | D1H   |
|------------------------|-------|
| Power-On Default Value | 00H   |
| Bit Addressable        | No    |

| -   | -   | ADC0EN   | ADC1EN   | -   | MD2   | MD1   | MD0   |
|-----|-----|----------|----------|-----|-------|-------|-------|

Table IV. ADCMODE SFR Bit Designations

| Bit             | Name                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 6 5 4 3 2 1 0 | - - ADC0EN ADC1EN - MD2 MD1 MD0 | Reserved for Future Use Reserved for Future Use Primary ADC Enable Set by the user to enable the Primary ADC and place it in the mode selected in MD2-MD0 below Cleared by the user to place the Primary ADC in power-down mode. Auxiliary ADC Enable Set by the user to enable the Auxiliary ADC and place it in the mode selected in MD2-MD0 below Cleared by the user to place the Auxiliary ADC in power-down mode. Reserved for Future Use Primary and Auxiliary ADC Mode bits. These bits select the operational mode of the enabled ADC as follows: MD2 MD1 MD0 0 0 0 Power-Down Mode (Power-On Default) 0 0 1 Idle Mode In Idle Mode the ADC filter and modulator are held in a reset state although the modulator clocks are still provided. 0 1 0 Single Conversion Mode In Single Conversion Mode, a single conversion is performed on the enabled ADC. On completion of the conversion, the ADC data regis- ters (ADC0H/M/L and/or ADC1H/L) are updated, the relevant flags in the ADCSTAT SFR are written, and power-down is re-entered with the MD2-MD0 accordingly being written to 000. 0 1 1 Continuous Conversion In continuous conversion mode the ADC data registers are regularly updated at the selected update rate (see SF register) 1 0 0 Internal Zero-Scale Calibration Internal short is automatically connected to the enabled ADC(s) 1 0 1 Internal Full-Scale Calibration Internal or External V REF (as determined by XREF0 and XREF1 bits in ADC0/1CON) is automatically connected to the ADC input for this calibration. 1 1 0 System Zero-Scale Calibration User should connect system zero-scale input to the ADC input pins as selected by CH1/CH0 and ACH1/ACH0 bits in the ADC0/1CON register. 1 1 1 System Full-Scale Calibration User should connect system full-scale input to the ADC input pins as selected by CH1/CH0 and ACH1/ACH0 bits in the ADC0/1CON register. |

## NOTES

1. Any change to the MD bits will immediately reset both ADCs. A write to the MD2-0 bits with no change is also treated as a reset. (See exception to this in Note 3  below.)

2. If ADC0CON is written when AD0EN = 1, or if AD0EN is changed from 0 to 1, then both ADCs are also immediately reset. In other words, the Primary ADC is given priority over the Auxiliary ADC and any change requested on the primary ADC is immediately responded to.

3. On the other hand, if ADC1CON is written or if ADC1EN is changed from 0 to 1, only the Auxiliary ADC is reset. For example, if the Primary ADC is continuously converting when the Auxiliary ADC change or enable occurs, the primary ADC continues undisturbed. Rather than allow the Auxiliary ADC to operate with a phase difference from the primary ADC, the Auxiliary ADC will fall into step with the outputs of the primary ADC. The result is that the first conversion time for the Auxiliary ADC will be delayed up to three outputs while the Auxiliary ADC update rate is synchronized to the Primary ADC.

4. Once ADCMODE has been written with a calibration mode, the RDY0/1 bits (ADCSTAT) are immediately reset and the calibration commences. On completion, the appropriate calibration registers are written, the relevant bits in ADCSTAT are written, and the MD2-0 bits are reset to 000 to indicate the  ADC is back in power-down mode.

5. Any calibration request of the Auxiliary ADC while the temperature sensor is selected will fail to complete. Although the RDY1 bit will be set at  the end of the calibration cycle, no update of the calibration SFRs will take place and the ERR1 bit will be set.

6. Calibrations are performed at maximum SF (see SF SFR) value guaranteeing optimum calibration operation.

## ADC0CON (Primary ADC Control Register)

Used to configure the Primary ADC for range, channel selection, external Ref enable, and unipolar or bipolar coding.

SFR Address D2H Power-On Default Value 07H Bit Addressable No

| -   | XREF0   | CH1   | CH0   | UNI0   | RN2   | RN1   | RN0   |
|-----|---------|-------|-------|--------|-------|-------|-------|

Table V. ADC0CON SFR Bit Designations

|   Bit | Name    | Description                                                                                                                      | Description                                                                                                                      | Description                                                                                                                      | Description                                                                                                                      |
|-------|---------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
|     7 | - XREF0 | Reserved for Future Use Primary ADC External Reference Select Bit                                                                | Reserved for Future Use Primary ADC External Reference Select Bit                                                                | Reserved for Future Use Primary ADC External Reference Select Bit                                                                | Reserved for Future Use Primary ADC External Reference Select Bit                                                                |
|     6 |         |                                                                                                                                  |                                                                                                                                  |                                                                                                                                  |                                                                                                                                  |
|     5 | CH1     | Primary ADC Channel Selection Bits                                                                                               | Primary ADC Channel Selection Bits                                                                                               | Primary ADC Channel Selection Bits                                                                                               | Primary ADC Channel Selection Bits                                                                                               |
|     4 | CH0     | Written by the user to select the differential input pairs used by the Primary ADC as follows:                                   | Written by the user to select the differential input pairs used by the Primary ADC as follows:                                   | Written by the user to select the differential input pairs used by the Primary ADC as follows:                                   | Written by the user to select the differential input pairs used by the Primary ADC as follows:                                   |
|       |         | CH1                                                                                                                              | CH0                                                                                                                              | Positive                                                                                                                         | Input Negative Input                                                                                                             |
|       |         | 0                                                                                                                                | 0                                                                                                                                | AIN1                                                                                                                             | AIN2                                                                                                                             |
|       |         | 0                                                                                                                                | 1                                                                                                                                | AIN3                                                                                                                             | AIN4                                                                                                                             |
|       |         | 1 1                                                                                                                              | 0 1                                                                                                                              | AIN2 AIN3                                                                                                                        | AIN2 (Internal Short) AIN2                                                                                                       |
|     3 | UNI0    | Primary ADC Unipolar Bit. Set by user to enable unipolar coding, i.e., zero differential input will result in 000000 hex output. | Primary ADC Unipolar Bit. Set by user to enable unipolar coding, i.e., zero differential input will result in 000000 hex output. | Primary ADC Unipolar Bit. Set by user to enable unipolar coding, i.e., zero differential input will result in 000000 hex output. | Primary ADC Unipolar Bit. Set by user to enable unipolar coding, i.e., zero differential input will result in 000000 hex output. |
|     2 | RN2     | Primary ADC Range Bits                                                                                                           | Primary ADC Range Bits                                                                                                           | Primary ADC Range Bits                                                                                                           | Primary ADC Range Bits                                                                                                           |
|     1 | RN1     | Written by the user to select the Primary ADC input range as follows:                                                            | Written by the user to select the Primary ADC input range as follows:                                                            | Written by the user to select the Primary ADC input range as follows:                                                            | Written by the user to select the Primary ADC input range as follows:                                                            |
|     0 | RN0     | RN2                                                                                                                              | RN1                                                                                                                              | RN0                                                                                                                              | Selected Primary ADC Input Range (V REF = 2.5 V)                                                                                 |
|       |         | 0                                                                                                                                | 0                                                                                                                                | 0                                                                                                                                | ± 20mV                                                                                                                           |
|       |         | 0                                                                                                                                | 0                                                                                                                                | 1                                                                                                                                | ± 40mV                                                                                                                           |
|       |         | 0                                                                                                                                | 1                                                                                                                                | 0                                                                                                                                | ± 80mV                                                                                                                           |
|       |         | 0                                                                                                                                | 1                                                                                                                                | 1                                                                                                                                | ± 160mV                                                                                                                          |
|       |         | 1                                                                                                                                | 0                                                                                                                                | 0                                                                                                                                | ± 320mV                                                                                                                          |
|       |         | 1                                                                                                                                | 0                                                                                                                                | 1                                                                                                                                | ± 640mV                                                                                                                          |
|       |         | 1                                                                                                                                | 1                                                                                                                                | 0                                                                                                                                | ± 1.28 V                                                                                                                         |
|       |         | 1                                                                                                                                | 1                                                                                                                                | 1                                                                                                                                | ± 2.56 V                                                                                                                         |

## ADuC824

## ADC1CON (Auxiliary ADC Control Register)

Used to configure the Auxiliary ADC for channel selection, external Ref enable and unipolar or bipolar coding. It should be noted that the Auxiliary ADC only operates on a fixed input range of ± VREF.

| SFR Address            | D3H   |
|------------------------|-------|
| Power-On Default Value | 00H   |
| Bit Addressable        | No    |

| -   | XREF1   | ACH1   | ACH0   | UNI1   | -   | -   | -   |
|-----|---------|--------|--------|--------|-----|-----|-----|

## Table VI. ADC1CON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                          | Description                                                                                                                                                                                                          | Description                                                                                                                                                                                                          | Description                                                                                                                                                                                                          |
|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | -      | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              |
|     6 | XREF1  | Auxiliary ADC External Reference Bit Set by user to enable the Auxiliary ADC to use the external reference via REFIN(+)/REFIN(-). Cleared by user to enable the Auxiliary ADC to use the internal bandgap reference. | Auxiliary ADC External Reference Bit Set by user to enable the Auxiliary ADC to use the external reference via REFIN(+)/REFIN(-). Cleared by user to enable the Auxiliary ADC to use the internal bandgap reference. | Auxiliary ADC External Reference Bit Set by user to enable the Auxiliary ADC to use the external reference via REFIN(+)/REFIN(-). Cleared by user to enable the Auxiliary ADC to use the internal bandgap reference. | Auxiliary ADC External Reference Bit Set by user to enable the Auxiliary ADC to use the external reference via REFIN(+)/REFIN(-). Cleared by user to enable the Auxiliary ADC to use the internal bandgap reference. |
|     5 | ACH1   | Auxiliary ADC Channel Selection Bits                                                                                                                                                                                 | Auxiliary ADC Channel Selection Bits                                                                                                                                                                                 | Auxiliary ADC Channel Selection Bits                                                                                                                                                                                 | Auxiliary ADC Channel Selection Bits                                                                                                                                                                                 |
|     4 | ACH0   | Written by the user to select the single-ended input pins used to drive the Auxiliary ADC as follows:                                                                                                                | Written by the user to select the single-ended input pins used to drive the Auxiliary ADC as follows:                                                                                                                | Written by the user to select the single-ended input pins used to drive the Auxiliary ADC as follows:                                                                                                                | Written by the user to select the single-ended input pins used to drive the Auxiliary ADC as follows:                                                                                                                |
|       |        | ACH1                                                                                                                                                                                                                 | ACH0                                                                                                                                                                                                                 | Positive Input                                                                                                                                                                                                       | Negative Input                                                                                                                                                                                                       |
|       |        | 0                                                                                                                                                                                                                    | 0                                                                                                                                                                                                                    | AIN3                                                                                                                                                                                                                 | AGND                                                                                                                                                                                                                 |
|       |        | 0                                                                                                                                                                                                                    | 1                                                                                                                                                                                                                    | AIN4                                                                                                                                                                                                                 | AGND                                                                                                                                                                                                                 |
|       |        | 1                                                                                                                                                                                                                    | 0                                                                                                                                                                                                                    | Temp Sensor *                                                                                                                                                                                                        | AGND (Temp. Sensor routed to the ADC input)                                                                                                                                                                          |
|       |        | 1                                                                                                                                                                                                                    | 1                                                                                                                                                                                                                    | AIN5                                                                                                                                                                                                                 | AGND                                                                                                                                                                                                                 |
|     3 | UNI1   | Auxiliary ADC Unipolar Bit                                                                                                                                                                                           | Auxiliary ADC Unipolar Bit                                                                                                                                                                                           | Auxiliary ADC Unipolar Bit                                                                                                                                                                                           | Auxiliary ADC Unipolar Bit                                                                                                                                                                                           |
|     2 | -      | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              |
|     1 | -      | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              |
|     0 | -      | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              | Reserved for Future Use                                                                                                                                                                                              |

## * NOTES

1. When the temperature sensor is selected, user code must select internal reference via XREF1 bit above and clear the UNI1 bit  (ADC1CON.3) to select bipolar coding.

2. The temperature sensor is factory calibrated to yield conversion results 8000H at 0 ° C.

3. A +1 ° C change in temperature will result in a +1 LSB change in the ADC1H register ADC conversion result.

## SF (Sinc Filter Register)

The number in this register sets the decimation factor and thus the output update rate for the Primary and Auxiliary ADCs. This SFR cannot be written by user software while either ADC is active. The update rate applies to both Primary and Auxiliary ADCs and is calculated as follows:

<!-- formula-not-decoded -->

| Where:   | f ADC =   | ADC Output Update Rate                 |
|----------|-----------|----------------------------------------|
| Where:   | f MOD =   | Modulator Clock Frequency = 32.768 kHz |
| Where:   | SF =      | Decimal Value of SF Register           |

The allowable range for SF is 0Dhex to FFhex. Examples of SF values and corresponding conversion update rate (fADC) and con- version time (tADC) are shown in Table VII, the power-on default value for the SF register is 45hex, resulting in a default ADC update rate of just under 20 Hz. Both ADC inputs are chopped to minimize offset errors, which means that the settling time for a single conversion or the time to a first conversion result in continuous conversion mode is 2 × tADC. As mentioned earlier, all calibration cycles will be carried out automatically with a maximum, i.e., FFhex, SF value to ensure optimum calibration performance. Once a calibration cycle has completed, the value in the SF register will be that programmed by user software.

## Table VII. SF SFR Bit Designations

|   SF(dec) | SF(hex)   |   f ADC (Hz) |   t ADC (ms) |
|-----------|-----------|--------------|--------------|
|        13 | 0D        |        105.3 |         9.52 |
|        69 | 45        |        19.79 |        50.34 |
|       255 | FF        |         5.35 |       186.77 |

## ICON (Current Sources Control Register)

Used to control and configure the various excitation and burnout current source options available on-chip.

| SFR Address            | D5H   |
|------------------------|-------|
| Power-On Default Value | 00H   |
| Bit Addressable        | No    |

| -   | BO   | ADC1IC   | ADC0IC   | I2PIN   | I1PIN   | I2EN   | I1EN   |
|-----|------|----------|----------|---------|---------|--------|--------|

## Table VIII. ICON SFR Bit Designations

|   Bit | Name    | Description                                                                                                                                                                                                                                                                                              |
|-------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | -       | Reserved for Future Use                                                                                                                                                                                                                                                                                  |
|     6 | BO      | Burnout Current Enable Bit Set by user to enable both transducer burnout current sources in the primary ADC signal paths. Cleared by user to disable both transducer burnout current sources.                                                                                                            |
|     5 | ADC1IC  | Auxiliary ADC Current Correction Bit Set by user to allow scaling of the Auxiliary ADC by an internal current source calibration word.                                                                                                                                                                   |
|     4 | ADC0IC  | Primary ADC Current Correction Bit Set by user to allow scaling of the Primary ADC by an internal current source calibration word.                                                                                                                                                                       |
|     3 | I2PIN * | Current Source-2 Pin Select Bit Set by user to enable current source-2 (200 µ A) to external pin 3 (P1.2/DAC/IEXC1).                                                                                                                                                                                     |
|     2 | I1PIN * | Cleared by user to enable current source-2 (200 µ A) to external pin 4 (P1.3/AIN5/IEXC2). Current Source-1 Pin Select Bit Set by user to enable current source-1 (200 µ A) to external pin 4 (P1.3/AIN5/IEXC2). Cleared by user to enable current source-1 (200 µ A) to external pin 3 (P1.2/DAC/IEXC1). |
|     1 | I2EN    | Current Source-2 Enable Bit Set by user to turn on excitation current source-2 (200 µ A). Cleared by user to turn off excitation current source-2 (200 µ A).                                                                                                                                             |
|     0 | I1EN    | Current Source-1 Enable Bit Set by user to turn on excitation current source-1 (200 µ A). Cleared by user to turn off excitation current source-1 (200 µ A).                                                                                                                                             |

## ADC0H/ADC0M/ADC0L (Primary ADC Conversion Result Registers)

These three 8-bit registers hold the 24-bit conversion result from the Primary ADC.

| SFR Address                                                                                                                                 | ADC0H                                                                                                                                       | High Data Byte                                                                                                                              | DBH                                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                             | ADC0M                                                                                                                                       | Middle Data Byte                                                                                                                            | DAH                                                                                                                                         |
|                                                                                                                                             | ADC0L                                                                                                                                       | Low Data Byte                                                                                                                               | D9H                                                                                                                                         |
| Power-On Default Value                                                                                                                      | 00H                                                                                                                                         | All Three registers                                                                                                                         |                                                                                                                                             |
| Bit Addressable                                                                                                                             | No                                                                                                                                          | All Three registers                                                                                                                         |                                                                                                                                             |
| ADC1H/ADC1L (Auxiliary ADC Conversion Result Registers) These two 8-bit registers hold the 16-bit conversion result from the Auxiliary ADC. | ADC1H/ADC1L (Auxiliary ADC Conversion Result Registers) These two 8-bit registers hold the 16-bit conversion result from the Auxiliary ADC. | ADC1H/ADC1L (Auxiliary ADC Conversion Result Registers) These two 8-bit registers hold the 16-bit conversion result from the Auxiliary ADC. | ADC1H/ADC1L (Auxiliary ADC Conversion Result Registers) These two 8-bit registers hold the 16-bit conversion result from the Auxiliary ADC. |
| SFR Address                                                                                                                                 | ADC1H                                                                                                                                       | High Data Byte                                                                                                                              | DDH                                                                                                                                         |
|                                                                                                                                             | ADC1L                                                                                                                                       | Low Data Byte                                                                                                                               | DCH                                                                                                                                         |
| Power-On Default Value                                                                                                                      | 00H                                                                                                                                         | Both Registers                                                                                                                              |                                                                                                                                             |
| Bit Addressable                                                                                                                             | No                                                                                                                                          | Both Registers                                                                                                                              |                                                                                                                                             |

## ADuC824

## OF0H/OF0M/OF0L (Primary ADC Offset Calibration Registers * )

These three 8-bit registers hold the 24-bit offset calibration coefficient for the Primary ADC. These registers are configured at poweron with a factory default value of 800000Hex. However, these bytes will be automatically overwritten if an internal or system zero-scale calibration is initiated by the user via MD2-0 bits in the ADCMODE register.

| SFR Address            | OF0H    | Primary ADC Offset Coefficient High Byte   | E3H   |
|------------------------|---------|--------------------------------------------|-------|
|                        | OF0M    | Primary ADC Offset Coefficient Middle Byte | E2H   |
|                        | OF0L    | Primary ADC Offset Coefficient Low Byte    | E1H   |
| Power-On Default Value | 800000H | OF0H, OF0M, and OF0L, Respectively         |       |
| Bit Addressable        | No      | All Three Registers                        |       |

## OF1H/OF1L (Auxiliary ADC Offset Calibration Registers * )

These two 8-bit registers hold the 16-bit offset calibration coefficient for the Auxiliary ADC. These registers are configured at power-on with a factory default value of 8000Hex. However, these bytes will be automatically overwritten if an internal or system zero-scale calibration is initiated by the user via the MD2-0 bits in the ADCMODE register.

| SFR Address            | OF1H   | Auxiliary ADC Offset Coefficient High Byte   | E5H   |
|------------------------|--------|----------------------------------------------|-------|
|                        | OF1L   | Auxiliary ADC Offset Coefficient Low Byte    | E4H   |
| Power-On Default Value | 8000H  | OF1H and OF1L Respectively                   |       |
| Bit Addressable        | No     | Both Registers                               |       |

## GN0H/GN0M/GN0L (Primary ADC Gain Calibration Registers * )

These three 8-bit registers hold the 24-bit gain calibration coefficient for the Primary ADC. These registers are configured at power-on with a factory-calculated internal full-scale calibration coefficient. Every device will have an individual coefficient. However, these bytes will be automatically overwritten if an internal or system full-scale calibration is initiated by the user via MD2-0 bits in the ADCMODE register.

| SFR Address            | GN0H   | Primary ADC Gain Coefficient High Byte             | EBH   |
|------------------------|--------|----------------------------------------------------|-------|
|                        | GN0M   | Primary ADC Gain Coefficient Middle Byte           | EAH   |
|                        | GN0L   | Primary ADC Gain Coefficient Low Byte              | E9H   |
| Power-On Default Value |        | Configured at factory final test, see notes above. |       |
| Bit Addressable        | No     | All Three Registers                                |       |

## GN1H/GN1L (Auxiliary ADC Gain Calibration Registers * )

These two 8-bit registers hold the 16-bit gain calibration coefficient for the Auxiliary ADC. These registers are configured at power-on with a factory calculated internal full-scale calibration coefficient. Every device will have an individual coefficient. However, these bytes will be automatically overwritten if an internal or system full-scale calibration is initiated by the user via MD2-0 bits in the ADCMODE register.

| SFR Address            | GN1H   | Auxiliary ADC Gain Coefficient High Byte           | EDH   |
|------------------------|--------|----------------------------------------------------|-------|
|                        | GN1L   | Auxiliary ADC Gain Coefficient Low Byte            | ECH   |
| Power-On Default Value |        | Configured at factory final test, see notes above. |       |
| Bit Addressable        | No     | Both Registers                                     |       |

## PRIMARY AND AUXILIARY ADC CIRCUIT DESCRIPTION Overview

The ADuC824 incorporates two independent sigma-delta ADCs (Primary and Auxiliary) with on-chip digital filtering intended for the measurement of wide dynamic range, low frequency signals, such as those in weigh-scale, strain-gauge, pressure transducer or temperature measurement applications.

## Primary ADC

This ADC is intended to convert the primary sensor input. The input is buffered and can be programmed for one of 8 input ranges from ± 20 mV to ± 2.56 V, being driven from one of three differential input channel options AIN1/2, AIN3/4, or AIN3/2. The input channel is internally buffered allowing the part to handle significant source impedances on the analog input, allowing R/C filtering (for noise rejection or RFI reduction) to be placed on

## ADuC824

the analog inputs if required. On-chip burnout currents can also be turned on. These currents can be used to check that a transducer on the selected channel is still operational before attempting to take measurements.

The ADC employs a sigma-delta conversion technique to realize up to 24 bits of no missing codes performance. The sigma-delta modulator converts the sampled input signal into a digital pulse train whose duty cycle contains the digital information. A Sinc3 programmable low-pass filter is then employed to decimate the modulator output data stream to give a valid data conversion result at programmable output rates from 5.35 Hz (186.77 ms) to 105.03 Hz (9.52 ms). A Chopping scheme is also employed to minimize ADC offset errors. A block diagram of the Primary ADC is shown in Figure 18.

Figure 18. Primary ADC Block Diagram

<!-- image -->

## ADuC824

## Auxiliary ADC

The Auxiliary ADC is intended to convert supplementary inputs such as those from a cold junction diode or thermistor. This ADC is not buffered and has a fixed input range of 0 V to 2.5 V

(assuming an external 2.5 V reference). The single-ended inputs can be driven from AIN3, AIN4, or AIN5 pins or directly from the on-chip temperature sensor voltage. A block diagram of the Auxiliary ADC is shown in Figure 19.

Figure 19. Auxiliary ADC Block Diagram

<!-- image -->

## PRIMARY AND AUXILIARY ADC NOISE PERFORMANCE

Tables IX, X, and XI below show the output rms noise in µ V and output peak-to-peak resolution in bits (rounded to the nearest 0.5 LSB) for some typical output update rates on both the Primary and Auxiliary ADCs. The numbers are typical and are generated at a differential input voltage of 0 V. The output update rate is selected via the SF7-SF0 bits in the Sinc Filter (SF) SFR. It is important to note that the peak-to-peak resolution figures represent the resolution for which there will be no code flicker within a six-sigma limit.

## Table IX. Primary ADC, Typical Output RMS Noise ( 𝛍 V)

## Typical Output RMS Noise vs. Input Range and Update Rate; Output RMS Noise in 𝛍 V

| SF   | Data Update   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   |
|------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Word | Rate (Hz)     | ± 20mV        | ± 40mV        | ± 80mV        | ± 160mV       | ± 320mV       | ± 640mV       | ± 1.28 V      | ± 2.56 V      |
| 13   | 105.3         | 1.50          | 1.50          | 1.60          | 1.75          | 3.50          | 4.50          | 6.70          | 11.75         |
| 69   | 19.79         | 0.60          | 0.65          | 0.65          | 0.65          | 0.65          | 0.95          | 1.40          | 2.30          |
| 255  | 5.35          | 0.35          | 0.35          | 0.37          | 0.37          | 0.37          | 0.51          | 0.82          | 1.25          |

## Table X. Primary ADC, Peak-to-Peak Resolution (Bits)

## Peak-to-Peak Resolution vs. Input Range and Update Rate; Peak-to-Peak Resolution in Bits

Table XI. Auxiliary ADC

| SF   | Data Update   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   | Input Range   |
|------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|
| Word | Rate (Hz)     | ± 20mV        | ± 40mV        | ± 80mV        | ± 160mV       | ± 320mV       | ± 640mV       | ± 1.28 V      | ± 2.56 V      |
| 13   | 105.3         | 12            | 13            | 14            | 15            | 15            | 15.5          | 16            | 16            |
| 69   | 19.79         | 13            | 14            | 15            | 16            | 17            | 17.5          | 18            | 18.5          |
| 255  | 5.35          | 14            | 15            | 16            | 17            | 18            | 18.5          | 18.8          | 19.2          |

## Typical Output RMS Noise vs. Update Rate * Output RMS Noise in 𝛍 V

|   SF Word |   Data Update Rate (Hz) |   Input Range 2.5 V |
|-----------|-------------------------|---------------------|
|        13 |                   105.3 |               10.75 |
|        69 |                   19.79 |                2.00 |
|       255 |                    5.35 |                1.15 |

* ADC converting in bipolar mode.

## Analog Input Channels

The primary ADC has four associated analog input pins (labelled AIN1 to AIN4) that can be configured as two fully differential input channels. Channel selection bits in the ADC0CON SFR detailed in Table V allow three combinations of differential pair selection as well as an additional shorted input option (AIN2-AIN2).

The auxiliary ADC has three external input pins (labelled AIN3 to AIN5) as well as an internal connection to the internal on-chip temperature sensor. All inputs to the auxiliary ADC are singleended inputs referenced to the AGND on the part. Channel selection bits in the ADC1CON SFR detailed previously in Table VI allow selection of one of four inputs.

Two input multiplexers switch the selected input channel to the on-chip buffer amplifier in the case of the primary ADC and directly to the sigma-delta modulator input in the case of the auxiliary ADC. When the analog input channel is switched, the settling time of the part must elapse before a new valid word is available from the ADC.

## Peak-to-Peak Resolution vs. Update Rate 1 Peak-to-Peak Resolution in Bits

|   SF Word |   Data Update Rate (Hz) | Input Range 2.5 V   |
|-----------|-------------------------|---------------------|
|        13 |                   105.3 | 16 2                |
|        69 |                   19.79 | 16                  |
|       255 |                    5.35 | 16                  |

NOTES

1 ADC converting in bipolar mode.

2 In unipolar mode peak-to-peak resolution at 105 Hz is 15 bits.

## Primary and Auxiliary ADC Inputs

The output of the primary ADC multiplexer feeds into a high impedance input stage of the buffer amplifier. As a result, the primary ADC inputs can handle significant source impedances and are tailored for direct connection to external resistive-type sensors like strain gauges or Resistance Temperature Detectors (RTDs).

The auxiliary ADC, however, is unbuffered, resulting in higher analog input current on the auxiliary ADC. It should be noted that this unbuffered input path provides a dynamic load to the driving source. Therefore, resistor/capacitor combinations on the input pins can cause dc gain errors depending on the output impedance of the source that is driving the ADC inputs.

## Analog Input Ranges

The absolute input voltage range on the primary ADC is restricted to between AGND + 100 mV to AVDD - 100 mV. Care must be taken in setting up the common-mode voltage and input voltage range so that these limits are not exceeded, otherwise there will be a degradation in linearity performance.

## ADuC824

The absolute input voltage range on the auxiliary ADC is restricted to between AGND - 30 mV to AVDD + 30 mV. The slightly negative absolute input voltage limit does allow the possibility of monitoring small signal bipolar signals using the single-ended auxiliary ADC front end.

## Programmable Gain Amplifier

The output from the buffer on the primary ADC is applied to the input of the on-chip programmable gain amplifier (PGA). The PGA can be programmed through eight different unipolar input ranges and bipolar ranges. The PGA gain range is programmed via the range bits in the ADC0CON SFR. With the external reference select bit set in the ADC0CON SFR and an external 2.5 V reference, the unipolar ranges are 0 mV to 20 mV, 0 mV to 40 mV, 0 mV to 80 mV, 0 mV to 160 mV, 0 mV to 320 mV, 0 mV to 640 mV, 0 V to 1.28 V, and 0 to 2.56 V, while the bipolar ranges are ± 20 mV, ± 40 mV, ± 80 mV, ± 160 mV, ± 320 mV, ± 640 mV, ± 1.28 V, and ± 2.56 V. These are the nominal ranges that should appear at the input to the on-chip PGA. An ADC range matching specification of 2 µ V (typ) across all ranges means that calibration need only be carried out at a single gain range and does not have to be repeated when the PGA gain range is changed.

Typical matching across ranges is shown in Figure 20 below. Here, the primary ADC is configured in bipolar mode with an external 2.5 V reference, while just greater than 19 mV is forced on its inputs. The ADC continuously converts the DC input voltage at an update rate of 5.35 Hz, i.e., SF = FFhex. In total, 800 conversion results are gathered. The first 100 results are gathered with the primary ADC operating in the ± 20 mV range. The ADC range is then switched to ± 40 mV and 100 more conversion results are gathered, and so on until the last group of 100 samples are gathered with the ADC configured in the ± 2.56 V range. From Figure 20, The variation in the sample mean through each range, i.e., the range matching, is seen to be of the order of 2 µ V.

The auxiliary ADC does not incorporate a PGA and is configured for a fixed single input range of 0 to VREF.

<!-- image -->

±

±

±

Figure 20. Primary ADC Range Matching

## Bipolar/Unipolar Inputs

The analog inputs on the ADuC824 can accept either unipolar or bipolar input voltage ranges. Bipolar input ranges do not imply that the part can handle negative voltages with respect to system AGND.

Unipolar and bipolar signals on the AIN(+) input on the primary ADC are referenced to the voltage on the respective AIN(-) input. For example, if AIN(-) is 2.5 V and the primary ADC is configured for an analog input range of 0 mV to 20 mV, the input voltage range on the AIN(+) input is 2.5 V to 2.52 V. If AIN(-) is 2.5 V and the ADuC824 is configured for an analog input range of 1.28 V, the analog input range on the AIN(+) input is 1.22 V to 3.78 V (i.e., 2.5 V ± 1.28 V).

As mentioned earlier, the auxiliary ADC input is a single-ended input with respect to the system AGND. In this context a bipolar signal on the auxiliary ADC can only span 30 mV negative with respect to AGND before violating the voltage input limits for this ADC.

Bipolar or unipolar options are chosen by programming the Primary and Auxiliary Unipolar enable bits in the ADC0CON and ADC1CON SFRs respectively. This programs the relevant ADC for either unipolar or bipolar operation. Programming for either unipolar or bipolar operation does not change any of the input signal conditioning; it simply changes the data output coding and the points on the transfer function where calibrations occur. When an ADC is configured for unipolar operation, the output coding is natural (straight) binary with a zero differential input voltage resulting in a code of 000 . . . 000, a midscale voltage resulting in a code of 100 . . . 000, and a full-scale input voltage resulting in a code of 111 . . . 111. When an ADC is configured for bipolar operation, the coding is offset binary with a negative full-scale voltage resulting in a code of 000 . . . 000, a zero differential voltage resulting in a code of 100 . . . 000, and a positive full-scale voltage resulting in a code of 111 . . . 111.

## Burnout Currents

The primary ADC on the ADuC824 contains two 100 nA constant current generators, one sourcing current from AVDD to AIN(+), and one sinking from AIN(-) to AGND. The currents are switched to the selected analog input pair. Both currents are either on or off, depending on the Burnout Current Enable (BO) bit in the ICON SFR (see Table VIII). These currents can be used to verify that an external transducer is still operational before attempting to take measurements on that channel. Once the burnout currents are turned on, they will flow in the external transducer circuit, and a measurement of the input voltage on the analog input channel can be taken. If the resultant voltage measured is full-scale, this indicates that the transducer has gone open-circuit. If the voltage measured is 0 V, it indicates that the transducer has short circuited. For normal operation, these burnout currents are turned off by writing a 0 to the BO bit in the ICON SFR. The current sources work over the normal absolute input voltage range specifications.

## Excitation Currents

The ADuC824 also contains two identical 200 µ A constant current sources. Both source current from AVDD to Pin #3 (IEXC1) or Pin #4 (IEXC2). These current sources are controlled via bits in the ICON SFR shown in Table VIII. They can be configured to source 200 µ A individually to both pins or a combination of both currents, i.e., 400 µ A to either of the selected pins. These current sources can be used to excite external resistive bridge or RTD sensors.

## Reference Input

The ADuC824's reference inputs, REFIN(+) and REFIN(-), provide a differential reference input capability. The commonmode range for these differential inputs is from AGND to AVDD. The nominal reference voltage, VREF (REFIN(+) - REFIN(-)), for specified operation is 2.5 V with the primary and auxiliary reference enable bits set in the respective ADC0CON and/or ADC1CON SFRs.

The part is also functional (although not specified for performance) when the XREF0 or XREF1 bits are '0,' which enables the on-chip internal bandgap reference. In this mode, the ADCs will see the internal reference of 1.25 V, therefore halving all input ranges. As a result of using the internal reference voltage, a noticeable degradation in peak-to-peak resolution will result. Therefore, for best performance, operation with an external reference is strongly recommended.

In applications where the excitation (voltage or current) for the transducer on the analog input also drives the reference voltage for the part, the effect of the low-frequency noise in the excitation source will be removed as the application is ratiometric. If the ADuC824 is not used in a ratiometric application, a low noise reference should be used. Recommended reference voltage sources for the ADuC824 include the AD780, REF43, and REF192.

It should also be noted that the reference inputs provide a high impedance, dynamic load. Because the input impedance of each reference input is dynamic, resistor/capacitor combinations on these inputs can cause dc gain errors depending on the output impedance of the source that is driving the reference inputs. Reference voltage sources, like those recommended above (e.g., AD780) will typically have low output impedances and therefore decoupling capacitors on the REFIN(+) input would be recommended. Deriving the reference input voltage across an external resistor, as shown in Figure 53, will mean that the reference input sees a significant external source impedance. External decoupling on the REFIN(+) and REFIN(-) pins would not be recommended in this type of circuit configuration.

## Reference Detect

The ADuC824 includes on-chip circuitry to detect if the part has a valid reference for conversions or calibrations. If the voltage between the external REFIN(+) and REFIN(-) pins goes below 0.3 V or either the REFIN(+) or REFIN(-) inputs is open circuit, the ADuC824 detects that it no longer has a valid reference. In this case, the NOXREF bit of the ADCSTAT SFR is set to a 1. If the ADuC824 is performing normal conversions and the NOXREF bit becomes active, the conversion results revert to all 1s. Therefore, it is not necessary to continuously monitor the status of the NOXREF bit when performing conversions. It is only necessary to verify its status if the conversion result read from the ADC Data Register is all 1s.

If the ADuC824 is performing either an offset or gain calibration and the NOXREF bit becomes active, the updating of the respective calibration registers is inhibited to avoid loading incorrect coefficients to these registers, and the appropriate ERR0 or ERR1 bits in the ADCSTAT SFR are set. If the user is concerned about verifying that a valid reference is in place every time a calibration is performed, the status of the ERR0 or ERR1 bit should be checked at the end of the calibration cycle.

## Sigma-Delta Modulator

A sigma-delta ADC generally consists of two main blocks, an analog modulator and a digital filter. In the case of the ADuC824 ADCs, the analog modulators consist of a difference amplifier, an integrator block, a comparator, and a feedback DAC as illustrated in Figure 21.

Figure 21. Sigma-Delta Modulator Simplified Block Diagram

<!-- image -->

In operation, the analog signal sample is fed to the difference amplifier along with the output of the feedback DAC. The difference between these two signals is integrated and fed to the comparator. The output of the comparator provides the input to the feedback DAC so the system functions as a negative feedback loop that tries to minimize the difference signal. The digital data that represents the analog input voltage is contained in the duty cycle of the pulse train appearing at the output of the comparator. This duty cycle data can be recovered as a data word using a subsequent digital filter stage. The sampling frequency of the modulator loop is many times higher than the bandwidth of the input signal. The integrator in the modulator shapes the quantization noise (which results from the analog-to-digital conversion) so that the noise is pushed toward one-half of the modulator frequency.

## Digital Filter

The output of the sigma-delta modulator feeds directly into the digital filter. The digital filter then band-limits the response to a frequency significantly lower than one-half of the modulator frequency. In this manner, the 1-bit output of the comparator is translated into a band-limited, low noise output from the ADuC824 ADCs.

The ADuC824 filter is a low-pass, Sinc 3 or (sinx/x) 3 filter whose primary function is to remove the quantization noise introduced at the modulator. The cutoff frequency and decimated output data rate of the filter are programmable via the SF (Sinc Filter) SFR as described in Table VII.

## ADuC824

Figure 22 shows the frequency response of the ADC channel at the default SF word of 69 dec or 45 hex, yielding an overall output update rate of just under 20 Hz.

It should be noted that this frequency response allows frequency components higher than the ADC Nyquist frequency to pass through the ADC, in some cases without significant attenuation. These components may, therefore, be aliased and appear in-band after the sampling process.

It should also be noted that rejection of mains-related frequency components, i.e., 50 Hz and 60 Hz, is seen to be at level of &gt;65 dB at 50 Hz and &gt;100 dB at 60 Hz. This confirms the data sheet specifications for 50 Hz/60 Hz Normal Mode Rejection (NMR) at a 20 Hz update rate.

Figure 22. Filter Response, SF = 69 dec

<!-- image -->

The response of the filter, however, will change with SF word as can be seen in Figure 23, which shows &gt;90 dB NMR at 50 Hz and &gt;70 dB NMR at 60 Hz when SF = 255 dec.

Figure 23. Filter Response, SF = 255 dec

<!-- image -->

Figures 24 and 25 show the NMR for 50 Hz and 60 Hz across the full range of SF word, i.e., SF = 13 dec to SF = 255 dec.

Figure 24. 50 Hz Normal Mode Rejection vs. SF

<!-- image -->

Figure 25. 60 Hz Normal Mode Rejection vs. SF

<!-- image -->

## ADC Chopping

Both ADCs on the ADuC824 implement a chopping scheme whereby the ADC repeatability reverses its inputs. The decimated digital output words from the Sinc 3 filters therefore have a positive offset and negative offset term included.

As a result, a final summing stage is included in each ADC so that each output word from the filter is summed and averaged with the previous filter output to produce a new valid output result to be written to the ADC data SFRs. In this way, while the ADC throughput or update rate is as discussed earlier and illustrated in Table VII, the full settling time through the ADC (or the time to a first conversion result), will actually be given by 2 × tADC.

The chopping scheme incorporated in the ADuC824 ADC results in excellent dc offset and offset drift specifications and is extremely beneficial in applications where drift, noise rejection, and optimum EMI rejection are important factors.

## Calibration

The ADuC824 provides four calibration modes that can be programmed via the mode bits in the ADCMODE SFR detailed in Table IV. In fact, every ADuC824 has already been factory calibrated. The resultant Offset and Gain calibration coefficients for both the primary and auxiliary ADCs are stored on-chip in manufacturing-specific Flash/EE memory locations. At poweron, these factory calibration coefficients are automatically downloaded to the calibration registers in the ADuC824 SFR space. Each ADC (primary and auxiliary) has dedicated calibration SFRs, these have been described earlier as part of the general ADC SFR description. However, the factory calibration values in the ADC calibration SFRs will be overwritten if any one of the four calibration options are initiated and that ADC is enabled via the ADC enable bits in ADCMODE.

Even though an internal offset calibration mode is described below, it should be recognized that both ADCs are chopped. This chopping scheme inherently minimizes offset and means that an internal offset calibration should never be required. Also, because factory 5 V/25 ° C gain calibration coefficients are automatically present at power-on, an internal full-scale calibration will only be required if the part is being operated at 3 V or at temperatures significantly different from 25 ° C.

The ADuC824 offers 'internal' or 'system' calibration facilities. For full calibration to occur on the selected ADC, the calibration logic must record the modulator output for two different input conditions. These are zero-scale and full-scale points. These points are derived by performing a conversion on the different input voltages provided to the input of the modulator during calibration. The result of the zero-scale calibration conversion is stored in the Offset Calibration Registers for the appropriate ADC. The result of the 'full-scale' calibration conversion is stored in the Gain Calibration Registers for the appropriate ADC. With these readings, the calibration logic can calculate the offset and the gain slope for the input-to-output transfer function of the converter.

During an 'internal' zero-scale or full-scale calibration, the respective 'zero' input and full-scale input are automatically connected to the ADC input pins internally to the device. A 'system' calibration, however, expects the system zero-scale and system full-scale voltages to be applied to the external ADC pins before the calibration mode is initiated. In this way external ADC errors are taken into account and minimized as a result of system calibration. It should also be noted that to optimize calibration accuracy, all ADuC824 ADC calibrations are carried out automatically at the slowest update rate.

Internally in the ADuC824, the coefficients are normalized before being used to scale the words coming out of the digital filter. The offset calibration coefficient is subtracted from the result prior to the multiplication by the gain coefficient. All ADuC824 ADC specifications will only apply after a zero-scale and full-scale calibration at the operating point (supply voltage/temperature) of interest.

From an operational point of view, a calibration should be treated like another ADC conversion. A zero-scale calibration (if required) should always be carried out before a full-scale calibration. System software should monitor the relevant ADC RDY0/1 bit in the ADCSTAT SFR to determine end of calibration via a polling sequence or interrupt driven routine.

## NONVOLATILE FLASH/EE MEMORY

## Flash/EE Memory Overview

The ADuC824 incorporates Flash/EE memory technology on-chip to provide the user with nonvolatile, in-circuit reprogrammable, code and data memory space.

Flash/EE memory is a relatively recent type of nonvolatile memory technology and is based on a single transistor cell architecture.

This technology is basically an outgrowth of EPROM technology and was developed through the late 1980s. Flash/EE memory takes the flexible in-circuit reprogrammable features of EEPROM and combines them with the space efficient/density features of EPROM (see Figure 26).

Because Flash/EE technology is based on a single transistor cell architecture, a Flash memory array, like EPROM, can be implemented to achieve the space efficiencies or memory densities required by a given design.

Like EEPROM, Flash memory can be programmed in-system at a byte level, although it must first be erased; the erase being performed in page blocks. Thus, Flash memory is often and more correctly referred to as Flash/EE memory.

Figure 26. Flash/EE Memory Development

<!-- image -->

Overall, Flash/EE memory represents a step closer to the ideal memory device that includes nonvolatility, in-circuit programmability, high density, and low cost. Incorporated in the ADuC824, Flash/EE memory technology allows the user to update program code space in-circuit, without the need to replace one-time programmable (OTP) devices at remote operating nodes.

## Flash/EE Memory and the ADuC824

The ADuC824 provides two arrays of Flash/EE Memory for user applications. 8 Kbytes of Flash/EE Program space are provided on-chip to facilitate code execution without any external discrete ROM device requirements. The program memory can be programmed using conventional third party memory programmers. This array can also be programmed in-circuit, using the serial download mode provided.

A 640-Byte Flash/EE Data Memory space is also provided on-chip. This may be used as a general-purpose nonvolatile scratchpad area. User access to this area is via a group of six SFRs. This space can be programmed at a byte level, although it must first be erased in 4-byte pages.

## ADuC824 Flash/EE Memory Reliability

The Flash/EE Program and Data Memory arrays on the ADuC824 are fully qualified for two key Flash/EE memory characteristics, namely Flash/EE Memory Cycling Endurance and Flash/EE Memory Data Retention.

## ADuC824

Endurance quantifies the ability of the Flash/EE memory to be cycled through many Program, Read, and Erase cycles. In real terms, a single endurance cycle is composed of four independent, sequential events. These events are defined as:

- a. initial page erase sequence

- b. read/verify sequence

A single Flash/EE Memory Endurance Cycle

- c. byte program sequence

- d. second read/verify sequence

In reliability qualification, every byte in both the program and data Flash/EE memory is cycled from 00 hex to FFhex until a first fail is recorded signifying the endurance limit of the on-chip Flash/EE memory.

As indicated in the specification pages of this data sheet, the ADuC824 Flash/EE Memory Endurance qualification has been carried out in accordance with JEDEC Specification A117 over the industrial temperature range of -40 ° C, +25 ° C, and +85 ° C. The results allow the specification of a minimum endurance figure over supply and temperature of 100,000 cycles, with an endurance figure of 700,000 cycles being typical of operation at 25 ° C.

Retention quantifies the ability of the Flash/EE memory to retain its programmed data over time. Again, the ADuC824 has been qualified in accordance with the formal JEDEC Retention Lifetime Specification (A117) at a specific junction temperature (TJ = 55 ° C). As part of this qualification procedure, the Flash/EE memory is cycled to its specified endurance limit described above, before data retention is characterized. This means that the Flash/ EE memory is guaranteed to retain its data for its full specified retention lifetime every time the Flash/EE memory is reprogrammed. It should also be noted that retention lifetime, based on an activation energy of 0.6 eV, will derate with TJ as shown in Figure 27.

Figure 27. Flash/EE Memory Data Retention

<!-- image -->

## Using the Flash/EE Program Memory

The 8 Kbyte Flash/EE Program Memory array is mapped into the lower 8 Kbytes of the 64 Kbytes program space addressable by the ADuC824, and is used to hold user code in typical applications.

The program memory Flash/EE memory arrays can be programmed in one of two modes, namely:

## Serial Downloading (In-Circuit Programming)

As part of its factory boot code, the ADuC824 facilitates serial code download via the standard UART serial port. Serial down- load mode is automatically entered on power-up if the external pin, PSEN , is pulled low through an external resistor as shown in Figure 28. Once in this mode, the user can download code to the program memory array while the device is sited in its target application hardware. A PC serial download executable is provided as part of the ADuC824 QuickStart development system. The Serial Download protocol is detailed in a MicroConverter Applications Note uC004 available from the ADI MicroConverter Website at www.analog.com/microconverter.

Figure 28. Flash/EE Memory Serial Download Mode Programming

<!-- image -->

## Parallel Programming

The parallel programming mode is fully compatible with conventional third party Flash or EEPROM device programmers. A block diagram of the external pin configuration required to support parallel programming is shown in Figure 29. In this mode, Ports 0, 1, and 2 operate as the external data and address bus interface, ALE operates as the Write Enable strobe, and Port 3 is used as a general configuration port that configures the device for various program and erase operations during parallel programming.

The high voltage (12 V) supply required for Flash/EE programming is generated using on-chip charge pumps to supply the high voltage program lines.

Figure 29. Flash/EE Memory Parallel Programming

<!-- image -->

## Table XII. Flash/EE Memory Parallel Programming Modes

|                 | Port 3 Pins     | Port 3 Pins     | Port 3 Pins     | Port 3 Pins     | Port 3 Pins     | Port 3 Pins     | Programming                                      |
|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|--------------------------------------------------|
| 0.7             | 0.6             | 0.5             | 0.4             | 0.3             | 0.2             | 0.1             | Mode                                             |
| X               | X               | X               | X               | 0               | 0               | 0               | Erase Flash/EE Program, Data, and Security Modes |
| X               | X               | X               | X               | 0               | 0               | 1               | Read Device Signature/ID                         |
| X               | X               | X               | 1               | 0               | 1               | 0               | Program Code Byte                                |
| X               | X               | X               | 0               | 0               | 1               | 0               | Program Data Byte                                |
| X               | X               | X               | 1               | 0               | 1               | 1               | Read Code Byte                                   |
| X               | X               | X               | 0               | 0               | 1               | 1               | Read Data Byte                                   |
| X               | X               | X               | X               | 1               | 0               | 0               | Program Security Modes                           |
| X               | X               | X               | X               | 1               | 0               | 1               | Read/Verify Security Modes                       |
| All other codes | All other codes | All other codes | All other codes | All other codes | All other codes | All other codes | Redundant                                        |

## Flash/EE Program Memory Security

The ADuC824 facilitates three modes of Flash/EE program memory security. These modes can be independently activated, restricting access to the internal code space. These security modes can be enabled as part of the user interface available on all ADuC824 serial or parallel programming tools referenced on the MicroConverter web page at www.analog.com/microconverter. The security modes available on the ADuC824 are described as follows:

## Lock Mode

This mode locks code in memory, disabling parallel programming of the program memory although reading the memory in parallel mode is still allowed. This mode is deactivated by initiating a 'code-erase' command in serial download or parallel programming modes.

## Secure Mode

This mode locks code in memory, disabling parallel programming (program and verify/read commands) as well as disabling the execution of a 'MOVC' instruction from external memory, which is attempting to read the op codes from internal memory. This mode is deactivated by initiating a 'code-erase' command in serial download or parallel programming modes.

## Serial Safe Mode

This mode disables serial download capability on the device. If Serial Safe mode is activated and an attempt is made to reset the part into serial download mode, i.e., RESET asserted and deasserted with PSEN low, the part will interpret the serial download reset as a normal reset only. Therefore, it will not enter serial download mode but only execute a normal reset sequence. Serial Safe mode can only be disabled by initiating a code-erase command in parallel programming mode.

## Using the Flash/EE Data Memory

The user Flash/EE data memory array consists of 640 bytes that are configured into 160 (00H to 9FH) 4-byte pages as shown in Figure 30.

## ADuC824

Figure 30. Flash/EE Data Memory Configuration

<!-- image -->

| BYTE 1   | BYTE 2   | BYTE 3   | BYTE 4   |
|----------|----------|----------|----------|
| BYTE 1   | BYTE 2   | BYTE 3   | BYTE 4   |

As with other ADuC824 user-peripheral circuits, the interface to this memory space is via a group of registers mapped in the SFR space. A group of four data registers (EDATA1-4) are used to hold 4-byte page data just accessed. EADRL is used to hold the 8-bit address of the page to be accessed. Finally, ECON is an 8-bit control register that may be written with one of five Flash/EE memory access commands to trigger various read, write, erase, and verify functions. These registers can be summarized as follows:

| ECON:      | SFR Address: Function: Default:   | B9H Controls access to 640 Bytes Flash/EE Data Space. 00H                                                              |
|------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------|
| EADRL:     | SFR Address: Function: Default:   | C6H Holds the Flash/EE Data Page Address. (640 Bytes => 160 Page Addresses.) 00H                                       |
| EDATA 1-4: | SFR Address: Function: Default:   | BCH to BFH respectively Holds Flash/EE Data memory page write or page read data bytes. EDATA1-2 -> 00H EDATA3-4 -> 00H |

A block diagram of the SFR interface to the Flash/EE Data Memory array is shown in Figure 31.

Figure 31. Flash/EE Data Memory Control and Configuration

<!-- image -->

## ADuC824

## ECON-Flash/EE Memory Control SFR

This SFR acts as a command interpreter and may be written with one of five command modes to enable various read, program and erase cycles as detailed in Table XIII.

Table XIII. ECON-Flash/EE Memory Control Register Command Modes

| Command Byte   | Command Mode                                                                                                                                                                                                                                                                        |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 01H            | READ COMMAND Results in four bytes being read into                                                                                                                                                                                                                                  |
| 02H            | EDATA1-4 from memory page address contained in EADRL. PROGRAM COMMAND Results in four bytes (EDATA1-4) being written to memory page address in EADRL. This write command assumes the designated 'write' page has                                                                    |
| 03H            | been pre-erased. RESERVED FOR INTERNAL USE 03H should not be written to the ECON SFR.                                                                                                                                                                                               |
| 04H            | VERIFY COMMAND Allows the user to verify if data in EDATA1-4 is contained in page address designated by EADRL. A subsequent read of the ECON SFR will result in a 'zero' being read if the verification is valid; a nonzero value will be read to indicate an invalid verification. |
| 05H            | ERASE COMMAND Results in an erase of the 4-byte page designated in EADRL.                                                                                                                                                                                                           |
| 06H            | ERASE-ALL COMMAND Results in erase of the full Flash/EE Data memory 160-page (640 bytes) array.                                                                                                                                                                                     |
| 07H to FFH     | RESERVED COMMANDS Commands reserved for future use.                                                                                                                                                                                                                                 |

## Flash/EE Memory Timing

The typical program/erase times for the Flash/EE Data Memory are:

Erase Full Array (640 Bytes) - 2 ms

Erase Single Page (4 Bytes) - 2 ms

Program Page (4 Bytes) - 250 µ s

Read Page (4 Bytes) - Within Single Instruction Cycle

## Using the Flash/EE Memory Interface

As with all Flash/EE memory architectures, the array can be programmed in-system at a byte level, although it must be erased first; the erasure being performed in page blocks (4-byte pages in this case).

A typical access to the Flash/EE Data array will involve setting up the page address to be accessed in the EADRL SFR, configuring the EDATA1-4 with data to be programmed to the array (the EDATA SFRs will not be written for read accesses) and finally, writing the ECON command word which initiates one of the six modes shown in Table XIII.

It should be noted that a given mode of operation is initiated as soon as the command word is written to the ECON SFR. The core microcontroller operation on the ADuC824 is idled until the requested Program/Read or Erase mode is completed.

In practice, this means that even though the Flash/EE memory mode of operation is typically initiated with a two-machine cycle MOV instruction (to write to the ECON SFR), the next instruction will not be executed until the Flash/EE operation is complete (250 µ s or 2 ms later). This means that the core will not respond to Interrupt requests until the Flash/EE operation is complete, although the core peripheral functions like Counter/Timers will continue to count and time as configured throughout this period.

## Erase-All

Although the 640-byte User Flash/EE array is shipped from the factory pre-erased, i.e., Byte locations set to FFH, it is nonetheless good programming practice to include an erase-all routine as part of any configuration/setup code running on the ADuC824. An 'ERASE-ALL' command consists of writing '06H' to the ECON SFR, which initiates an erase of all 640 byte locations in the Flash/EE array. This command coded in 8051 assembly would appear as:

MOV ECON, #06H

; Erase all Command

; 2 ms Duration

## Program a Byte

In general terms, a byte in the Flash/EE array can only be programmed if it has previously been erased. To be more specific, a byte can only be programmed if it already holds the value FFH. Because of the Flash/EE architecture, this erasure must happen at a page level; therefore, a minimum of four bytes (1 page) will be erased when an erase command is initiated.

A more specific example of the Program-Byte process is shown below. In this example the user writes F3H into the second byte on Page 03H of the Flash/EE Data Memory space while preserving the other three bytes already in this page. As the user is only required to modify one of the page bytes, the full page must be first read so that this page can then be erased without the existing data being lost.

This example, coded in 8051 assembly, would appear as:

MOV EADRL,#03H

; Set Page Address Pointer

MOV ECON,#01H

; Read Page

MOV EDATA2,#0F3H ; Write New Byte

MOV ECON,#05H

; Erase Page

MOV ECON,#03H

; Write Page (Program Flash/EE)

## USER INTERFACE TO OTHER ON-CHIP ADuC824 PERIPHERALS

The following section gives a brief overview of the various peripherals also available on-chip. A summary of the SFRs used to control and configure these peripherals is also given.

## DAC

The ADuC824 incorporates a 12-bit, voltage output DAC on-chip. It has a rail-to-rail voltage output buffer capable of driving

## DACCON

DAC Control Register

SFR Address

FDH

Power-On Default Value

00H

Bit Addressable

No

| -   | -   | -   | DACPIN   | DAC8   | DACRN   | DACCLR   | DACEN   |
|-----|-----|-----|----------|--------|---------|----------|---------|

## Table XVI. DACCON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                                                                 |
|-------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | -      | Reserved for Future Use                                                                                                                                                                                                                                     |
|     6 | -      | Reserved for Future Use                                                                                                                                                                                                                                     |
|     5 | -      | Reserved for Future Use                                                                                                                                                                                                                                     |
|     4 | DACPIN | DAC Output Pin Select Set by user to direct the DAC output to Pin 12 (P1.7/AIN4/DAC). Cleared by user to direct the DAC output to Pin 3 (P1.2/DAC/IEXC1).                                                                                                   |
|     3 | DAC8   | DAC 8-Bit Mode Bit Set by user to enable 8-bit DAC operation. In this mode the 8-bits in DACL SFR are routed to the 8 MSBs of the DAC and the 4 LSBs of the DAC are set to zero. Cleared by user to operate the DAC in its normal 12-bit mode of operation. |
|     2 | DACRN  | DAC Output Range Bit Set by user to configure DAC range of 0 -AV DD . Cleared by user to configure DAC range 0 - 2.5 V.                                                                                                                                     |
|     1 | DACCLR | DAC Clear Bit Set to '1' by user to enable normal DAC operation. Cleared to '0' by used to reset DAC data registers DAC1/H to zero.                                                                                                                         |
|     0 | DACEN  | DAC Enable Bit Set to '1' by user to enable normal DAC operation. Cleared to '0' by used to power-down the DAC.                                                                                                                                             |

## DACH/L

## DAC Data Register

Function SFR Address

DAC Data Registers, written by user to update the DAC output.

DACL (DAC Data Low Byte)

-&gt;FBH

DACH (DAC Data High Byte) -&gt;FCH

Power-On Default Value Bit Addressable

00H

-&gt;Both Registers

No

-&gt;Both Registers

The 12-bit DAC data should be written into DACH/L right-justified such that DACL contains the lower eight bits, and the lower nibble of DACH contains the upper four bits.

## ADuC824

10 k Ω /100 pF. It has two selectable ranges, 0 V to V REF (the internal bandgap 2.5 V reference) and 0 V to AVDD. It can operate in 12-bit or 8-bit mode. The DAC has a control register, DACCON, and two data registers, DACH/L. The DAC output can be programmed to appear at Pin 3 or Pin 12. It should be noted that in 12-bit mode, the DAC voltage output will be updated as soon as the DACL data SFR has been written; therefore, the DAC data register should be updated as DACH first followed by DACL.

## ADuC824

## ON-CHIP PLL

The ADuC824 is intended for use with a 32.768 kHz watch crystal. A PLL locks onto a multiple (384) of this to provide a stable 12.582912 MHz clock for the system. The core can operate at this frequency or at binary submultiples of it to allow power saving in cases where maximum core performance is not required. The default core clock is the PLL clock divided by 8 or 1.572864 MHz. The ADC clocks are also derived from the PLL clock, with the modulator rate being the same as the crystal oscillator frequency. The above choice of frequencies ensures that the modulators and the core will be synchronous, regardless of the core clock rate. The PLL control register is PLLCON.

| PLLCON                 | PLL Control Register   |
|------------------------|------------------------|
| SFR Address            | D7H                    |
| Power-On Default Value | 03H                    |
| Bit Addressable        | No                     |

| OSC_PD   | LOCK   | -   | LTEA   | FINT   | CD2   | CD1   | CD0   |
|----------|--------|-----|--------|--------|-------|-------|-------|

Table XV. PLLCON SFR Bit Designations

| Bit   | Name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                    |
|-------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 4   | OSC_PD LOCK - LTEA | Oscillator Power-down Bit Set by user to halt the 32 kHz oscillator in power-down mode. Cleared by user to enable the 32 kHz oscillator in power-down mode. This feature allows the TIC to continue counting even in power-down mode. PLL Lock Bit This is a read only bit. Set automatically at power-on to indicate the PLL loop is correctly tracking the crystal clock. If external crystal becomes subsequently disconnected the PLL will rail and the core will halt. Cleared automatically at power-on to indicate the PLL is not correctly tracking the crystal This may be the absence of a crystal clock or the PLL be 12.58MHz 20%. | due to output can                                                                                                                                                                                                                                                                                                              | an external crystal at power-on. In this                                                                                                                                                                                                                                                                                       |
| 6     |                    | the clock.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | the clock.                                                                                                                                                                                                                                                                                                                     | the clock.                                                                                                                                                                                                                                                                                                                     |
| 5     |                    | ± Reserved for future use; should be written with '0.'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ± Reserved for future use; should be written with '0.'                                                                                                                                                                                                                                                                         | ± Reserved for future use; should be written with '0.'                                                                                                                                                                                                                                                                         |
|       |                    | Reading this bit returns the state of the external EA pin latched at reset or power-on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Reading this bit returns the state of the external EA pin latched at reset or power-on.                                                                                                                                                                                                                                        | Reading this bit returns the state of the external EA pin latched at reset or power-on.                                                                                                                                                                                                                                        |
| 3     | FINT               | Fast Interrupt Response Bit Set by user enabling the response to any interrupt to be executed at the fastest core clock frequency, regardless of the configuration of the CD2-0 bits (see below). Once user code has returned from an interrupt, the core resumes code execution at the core clock selected by the CD2-0 bits.                                                                                                                                                                                                                                                                                                                 | Fast Interrupt Response Bit Set by user enabling the response to any interrupt to be executed at the fastest core clock frequency, regardless of the configuration of the CD2-0 bits (see below). Once user code has returned from an interrupt, the core resumes code execution at the core clock selected by the CD2-0 bits. | Fast Interrupt Response Bit Set by user enabling the response to any interrupt to be executed at the fastest core clock frequency, regardless of the configuration of the CD2-0 bits (see below). Once user code has returned from an interrupt, the core resumes code execution at the core clock selected by the CD2-0 bits. |
| 2     | CD2                | CPU (Core Clock) Divider Bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | CPU (Core Clock) Divider Bits                                                                                                                                                                                                                                                                                                  | CPU (Core Clock) Divider Bits                                                                                                                                                                                                                                                                                                  |
| 1     | CD1 CD0            | This number determines the frequency at which the microcontroller core will CD2 CD0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | CD1                                                                                                                                                                                                                                                                                                                            | operate. Core Clock Frequency (MHz)                                                                                                                                                                                                                                                                                            |
| 0     |                    | 0 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                                                                              | 12.582912                                                                                                                                                                                                                                                                                                                      |
|       |                    | 0 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                                                                              | 6.291456                                                                                                                                                                                                                                                                                                                       |
|       |                    | 0 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1                                                                                                                                                                                                                                                                                                                              | 3.145728                                                                                                                                                                                                                                                                                                                       |
|       |                    | 0 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1                                                                                                                                                                                                                                                                                                                              | 1.572864 (Default Core Clock Frequency)                                                                                                                                                                                                                                                                                        |
|       |                    | 1 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                                                                              | 0.786432                                                                                                                                                                                                                                                                                                                       |
|       |                    | 1 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 0                                                                                                                                                                                                                                                                                                                              | 0.393216                                                                                                                                                                                                                                                                                                                       |
|       |                    | 1 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 1                                                                                                                                                                                                                                                                                                                              | 0.098304                                                                                                                                                                                                                                                                                                                       |

## TIME INTERVAL COUNTER (TIC)

A time interval counter is provided on-chip for counting longer intervals than the standard 8051-compatible timers are capable of. The TIC is capable of timeout intervals ranging from 1/128th second to 255 hours. Furthermore, this counter is clocked by the crystal oscillator rather than the PLL and thus has the ability to remain active in power-down mode and time long power-down intervals. This has obvious applications for remote battery-powered sensors where regular widely spaced readings are required.

Six SFRs are associated with the time interval counter, TIMECON being its control register. Depending on the configuration of the IT0 and IT1 bits in TIMECON, the selected time counter register

## ADuC824

overflow will clock the interval counter. When this counter is equal to the time interval value loaded in the INTVAL SFR, the TII bit (TIMECON.2) is set and generates an interrupt if enabled (See IEIP2 SFR description under Interrupt System later in this data sheet.) If the ADuC824 is in power-down mode, again with TIC interrupt enabled, the TII bit will wake up the device and resume code execution by vectoring directly to the TIC interrupt service vector address at 0053 hex. The TIC-related SFRs are described in Table XVI. Note also that the timebase SFRs can be written initially with the current time, the TIC can then be controlled and accessed by user software. In effect, this facilitates the implementation of a real-time clock. A block diagram of the TIC is shown in Figure 32.

Figure 32. TIC, Simplified Block Diagram

<!-- image -->

## ADuC824

## TIMECON

TIC Control Register

SFR Address

A1H

Power-On Default Value

00H

Bit Addressable

No

| -   | -   | ITS1   | ITS0   | STI   | TII   | TIEN   | ICEN   |
|-----|-----|--------|--------|-------|-------|--------|--------|

## Table XVI. TIMECON SFR Bit Designations

| Bit   | Name     | Description                                                                                                                                                   |
|-------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 6 5 | - - ITS1 | Reserved for Future Use Reserved for Future Use. For future product code compatibility this bit should be written as a '1.' Interval Timebase Selection Bits. |

## INTVAL

Function

## User Time Interval Select Register

User code writes the required time interval to this register. When the 8-bit interval counter is equal to the time interval value loaded in the INTVAL SFR, the TII bit (TIMECON.2) bit is set and generates an interrupt if enabled. (See IEIP2 SFR description under Interrupt System later in this data sheet.)

SFR Address Power-On Default Value Bit Addressable

A6H

00H

No

Valid Value

0 to 255 decimal

## HTHSEC

## Hundredths Seconds Time Register

Function

This register is incremented in (1/128) second intervals once TCEN in TIMECON is active. The HTHSEC SFR counts from 0 to 127 before rolling over to increment the SEC time register.

SFR Address Power-On Default Value Bit Addressable

A2H

00H

No

Valid Value

0 to 127 decimal

## SEC

## Seconds Time Register

Function

This register is incremented in 1 second intervals once TCEN in TIMECON is active. The SEC SFR counts from 0 to 59 before rolling over to increment the MIN time register.

SFR Address Power-On Default Value Bit Addressable

A3H

00H

No

Valid Value

0 to 59 decimal

## MIN

## Minutes Time Register

Function

This register is incremented in 1 minute intervals once TCEN in TIMECON is active. The MIN counts from 0 to 59 before rolling over to increment the HOUR time register.

SFR Address Power-On Default Value Bit Addressable

A4H

00H

No

Valid Value

0 to 59 decimal

## HOUR

## Hours Time Register

Function

This register is incremented in 1 hour intervals once TCEN in TIMECON is active. The HOUR SFR counts from 0 to 23 before rolling over to 0.

SFR Address Power-On Default Value Bit Addressable

A5H

00H

No

Valid Value

0 to 23 decimal

## ADuC824

## ADuC824

## WATCHDOG TIMER

The purpose of the watchdog timer is to generate a device reset or interrupt within a reasonable amount of time if the ADuC824 enters an erroneous state, possibly due to a programming error, electrical noise, or RFI. The Watchdog function can be disabled by clearing the WDE (Watchdog Enable) bit in the Watchdog Control (WDCON) SFR. When enabled; the watchdog circuit will generate a system reset or interrupt (WDS) if the user program fails to set the watchdog (WDE) bit within a predetermined amount of time

(see PRE3-0 bits in WDCON). The watchdog timer itself is a 16-bit counter that is clocked at 32.768 kHz. The watchdog time-out interval can be adjusted via the PRE3-0 bits in WDCON. Full Control and Status of the watchdog timer function can be controlled via the watchdog timer control SFR (WDCON). The WDCON SFR can only be written by user software if the double write sequence described in WDWR below is initiated on every write access to the WDCON SFR.

## WDCON

Watchdog Timer Control Register

SFR Address Power-On Default Value

C0H

10H

Bit Addressable

Yes

| PRE3   | PRE2   | PRE1   | PRE0   | WDIR   | WDS   | WDE   | WDWR   |
|--------|--------|--------|--------|--------|-------|-------|--------|

## Table XVII. WDCON SFR Bit Designations

| Bit   | Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7     | PRE3 PRE2 | Watchdog Timer Prescale Bits                                                                                                                                                                                                                                                                                                                                                                                              | Watchdog Timer Prescale Bits                                                                                                                                                                                                                                                                                                                                                                                              | Watchdog Timer Prescale Bits                                                                                                                                                                                                                                                                                                                                                                                              | Watchdog Timer Prescale Bits                                                                                                                                                                                                                                                                                                                                                                                              | Watchdog Timer Prescale Bits                                                                                                                                                                                                                                                                                                                                                                                              |
| 6     |           | The Watchdog timeout period is given by the equation: t WD = (2 PRE × (2 9 /f PLL ))                                                                                                                                                                                                                                                                                                                                      | The Watchdog timeout period is given by the equation: t WD = (2 PRE × (2 9 /f PLL ))                                                                                                                                                                                                                                                                                                                                      | The Watchdog timeout period is given by the equation: t WD = (2 PRE × (2 9 /f PLL ))                                                                                                                                                                                                                                                                                                                                      | The Watchdog timeout period is given by the equation: t WD = (2 PRE × (2 9 /f PLL ))                                                                                                                                                                                                                                                                                                                                      | The Watchdog timeout period is given by the equation: t WD = (2 PRE × (2 9 /f PLL ))                                                                                                                                                                                                                                                                                                                                      |
| 5 4   | PRE1 PRE0 | (0 ≤ PRE PRE3                                                                                                                                                                                                                                                                                                                                                                                                             | ≤ 7; f PLL PRE2                                                                                                                                                                                                                                                                                                                                                                                                           | = 32.768 kHz) PRE1                                                                                                                                                                                                                                                                                                                                                                                                        | PRE0Timout Period (ms)                                                                                                                                                                                                                                                                                                                                                                                                    | Action                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0 15.6                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1 31.2                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 0 62.5                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 1 125                                                                                                                                                                                                                                                                                                                                                                                                                     | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0 250                                                                                                                                                                                                                                                                                                                                                                                                                     | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1 500                                                                                                                                                                                                                                                                                                                                                                                                                     | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 0 1000                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 1 2000                                                                                                                                                                                                                                                                                                                                                                                                                    | Reset or Interrupt                                                                                                                                                                                                                                                                                                                                                                                                        |
|       |           |                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                           | 0                                                                                                                                                                                                                                                                                                                                                                                                                         | 0 0.0                                                                                                                                                                                                                                                                                                                                                                                                                     | Immediate Reset                                                                                                                                                                                                                                                                                                                                                                                                           |
|       |           | 1                                                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                           | Reserved                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3     | WDIR      | PRE3-0 > 1001 Watchdog Interrupt Response Enable Bit If this bit is set by the user, the watchdog will generate an interrupt response instead of a system reset when the watchdog timeout period has expired. This interrupt is not disabled by the CLR                                                                                                                                                                   | PRE3-0 > 1001 Watchdog Interrupt Response Enable Bit If this bit is set by the user, the watchdog will generate an interrupt response instead of a system reset when the watchdog timeout period has expired. This interrupt is not disabled by the CLR                                                                                                                                                                   | PRE3-0 > 1001 Watchdog Interrupt Response Enable Bit If this bit is set by the user, the watchdog will generate an interrupt response instead of a system reset when the watchdog timeout period has expired. This interrupt is not disabled by the CLR                                                                                                                                                                   | PRE3-0 > 1001 Watchdog Interrupt Response Enable Bit If this bit is set by the user, the watchdog will generate an interrupt response instead of a system reset when the watchdog timeout period has expired. This interrupt is not disabled by the CLR                                                                                                                                                                   | PRE3-0 > 1001 Watchdog Interrupt Response Enable Bit If this bit is set by the user, the watchdog will generate an interrupt response instead of a system reset when the watchdog timeout period has expired. This interrupt is not disabled by the CLR                                                                                                                                                                   |
| 2     | WDS       | System section.) Watchdog Status Bit Set by the Watchdog Controller to indicate that a watchdog timeout has occurred.                                                                                                                                                                                                                                                                                                     | System section.) Watchdog Status Bit Set by the Watchdog Controller to indicate that a watchdog timeout has occurred.                                                                                                                                                                                                                                                                                                     | System section.) Watchdog Status Bit Set by the Watchdog Controller to indicate that a watchdog timeout has occurred.                                                                                                                                                                                                                                                                                                     | System section.) Watchdog Status Bit Set by the Watchdog Controller to indicate that a watchdog timeout has occurred.                                                                                                                                                                                                                                                                                                     | System section.) Watchdog Status Bit Set by the Watchdog Controller to indicate that a watchdog timeout has occurred.                                                                                                                                                                                                                                                                                                     |
| 1     | WDE       | Cleared by writing a '0' or by an external hardware reset. It is not cleared by a watchdog reset. Watchdog Enable Bit Set by user to enable the watchdog and clear its counters. If this bit is not set by the user within the watchdog timeout period, the watchdog will generate a reset or interrupt, depending onWDIR. Cleared under the following conditions, User writes '0,' Watchdog Reset (WDIR = '0'); Hardware | Cleared by writing a '0' or by an external hardware reset. It is not cleared by a watchdog reset. Watchdog Enable Bit Set by user to enable the watchdog and clear its counters. If this bit is not set by the user within the watchdog timeout period, the watchdog will generate a reset or interrupt, depending onWDIR. Cleared under the following conditions, User writes '0,' Watchdog Reset (WDIR = '0'); Hardware | Cleared by writing a '0' or by an external hardware reset. It is not cleared by a watchdog reset. Watchdog Enable Bit Set by user to enable the watchdog and clear its counters. If this bit is not set by the user within the watchdog timeout period, the watchdog will generate a reset or interrupt, depending onWDIR. Cleared under the following conditions, User writes '0,' Watchdog Reset (WDIR = '0'); Hardware | Cleared by writing a '0' or by an external hardware reset. It is not cleared by a watchdog reset. Watchdog Enable Bit Set by user to enable the watchdog and clear its counters. If this bit is not set by the user within the watchdog timeout period, the watchdog will generate a reset or interrupt, depending onWDIR. Cleared under the following conditions, User writes '0,' Watchdog Reset (WDIR = '0'); Hardware | Cleared by writing a '0' or by an external hardware reset. It is not cleared by a watchdog reset. Watchdog Enable Bit Set by user to enable the watchdog and clear its counters. If this bit is not set by the user within the watchdog timeout period, the watchdog will generate a reset or interrupt, depending onWDIR. Cleared under the following conditions, User writes '0,' Watchdog Reset (WDIR = '0'); Hardware |
| 0     | WDWR      | Reset; PSM Interrupt. Watchdog Write Enable Bit To write data into the WDCONSFRinvolves a double instruction sequence. The WDWRbitmust be set and the very next instruction must be a write instruction to the WDCON SFR.                                                                                                                                                                                                 | Reset; PSM Interrupt. Watchdog Write Enable Bit To write data into the WDCONSFRinvolves a double instruction sequence. The WDWRbitmust be set and the very next instruction must be a write instruction to the WDCON SFR.                                                                                                                                                                                                 | Reset; PSM Interrupt. Watchdog Write Enable Bit To write data into the WDCONSFRinvolves a double instruction sequence. The WDWRbitmust be set and the very next instruction must be a write instruction to the WDCON SFR.                                                                                                                                                                                                 | Reset; PSM Interrupt. Watchdog Write Enable Bit To write data into the WDCONSFRinvolves a double instruction sequence. The WDWRbitmust be set and the very next instruction must be a write instruction to the WDCON SFR.                                                                                                                                                                                                 | Reset; PSM Interrupt. Watchdog Write Enable Bit To write data into the WDCONSFRinvolves a double instruction sequence. The WDWRbitmust be set and the very next instruction must be a write instruction to the WDCON SFR.                                                                                                                                                                                                 |
|       |           | e.g.,                                                                                                                                                                                                                                                                                                                                                                                                                     | CLR                                                                                                                                                                                                                                                                                                                                                                                                                       | EA                                                                                                                                                                                                                                                                                                                                                                                                                        | ; to                                                                                                                                                                                                                                                                                                                                                                                                                      | disable interrupts while writing WDT                                                                                                                                                                                                                                                                                                                                                                                      |
|       |           |                                                                                                                                                                                                                                                                                                                                                                                                                           | SETB MOV SET B                                                                                                                                                                                                                                                                                                                                                                                                            | WDWR WDCON, #72h EA                                                                                                                                                                                                                                                                                                                                                                                                       | ; ; ;                                                                                                                                                                                                                                                                                                                                                                                                                     | allow write to WDCON enable WDT for 2.0s timeout enable interrupts again (if rqd)                                                                                                                                                                                                                                                                                                                                         |

## POWER SUPPLY MONITOR

As its name suggests, the Power Supply Monitor, once enabled, monitors both supplies (AVDD or DVDD) on the ADuC824. It will indicate when any of the supply pins drop below one of four user-selectable voltage trip points from 2.63 V to 4.63 V. For correct operation of the Power Supply Monitor function, AVDD must be equal to or greater than 2.7 V. Monitor function is controlled via the PSMCON SFR. If enabled via the IEIP2 SFR, the monitor will interrupt the core using the PSMI bit in the

## ADuC824

PSMCON SFR. This bit will not be cleared until the failing power supply has returned above the trip point for at least 250 ms. This monitor function allows the user to save working registers to avoid possible data loss due to the low supply condition, and also ensures that normal code execution will not resume until a safe supply level has been well established. The supply monitor is also protected against spurious glitches triggering the interrupt circuit.

## PSMCON

Power Supply Monitor Control Register

SFR Address Power-On Default Value

DFH

DEH

Bit Addressable

No

| CMPD   | CMPA   | PSMI   | TPD1   | TPD0   | TPA1   | TPA0   | PSMEN   |
|--------|--------|--------|--------|--------|--------|--------|---------|

## Table XVIII. PSMCON SFR Bit Designations

| Bit   | Name      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7     | CMPD      | DVDD Comparator Bit This is a read-only bit and directly reflects the state of the DVDD comparator. Read '1' indicates the DVDD supply is above its selected trip point.                                                                                                                                                                                                                                                                                                                      |
| 6     | CMPA      | AVDD Comparator Bit This is a read-only bit and directly reflects the state of the AVDD comparator. Read '1' indicates the AVDD supply is above its selected trip point. Read '0' indicates the AVDD supply is below its selected trip point.                                                                                                                                                                                                                                                 |
| 5     | PSMI      | Power Supply Monitor Interrupt Bit This bit will be set high by the MicroConverter if either CMPA or CMPD are low, indicating low analog or digital supply. The PSMI bit can be used to interrupt the processor. Once CMPD and/or CMPA return (and remain) high, a 250 ms counter is started. When this counter times out, the PSMI interrupt is cleared. PSMI can also be written by the user. However, if either com- parator output is low, it is not possible for the user to clear PSMI. |
| 4 3   | TPD1 TPD0 | DVDD Trip Point Selection Bits These bits select the DVDD trip-point voltage as follows: TPD1 TPD0 Selected DVDD Trip Point (V)                                                                                                                                                                                                                                                                                                                                                               |
| 1     | TPA1 TPA0 | AVDD Trip Point Selection Bits These bits select the AVDD trip-point voltage as                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2     |           | follows: TPA1 TPA0 Selected AVDD Trip Point (V) 0 0 4.63                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0     | PSMEN     | Power Supply Monitor Enable Bit Set to '1' by the user to enable the Power Supply Monitor Circuit. Cleared to '0' by the user to disable the Power Supply Monitor Circuit.                                                                                                                                                                                                                                                                                                                    |

## ADuC824

## SERIAL PERIPHERAL INTERFACE

The ADuC824 integrates a complete hardware Serial Peripheral Interface (SPI) interface on-chip. SPI is an industry standard synchronous serial interface that allows eight bits of data to be synchronously transmitted and received simultaneously, i.e., full duplex. It should be noted that the SPI physical interface is shared with the I 2 C interface and therefore the user can only enable one or the other interface at any given time (see SPE in SPICON below). The system can be configured for Master or Slave operation and typically consists of four pins, namely:

## MISO (Master In, Slave Out Data I/O Pin), Pin#14

The MISO (master in slave out) pin is configured as an input line in master mode and an output line in slave mode. The MISO line on the master (data in) should be connected to the MISO line in the slave device (data out). The data is transferred as byte wide (8-bit) serial data, MSB first.

## MOSI (Master Out, Slave In Pin), Pin#27

The MOSI (master out slave in) pin is configured as an output line in master mode and an input line in slave mode. The MOSI line on the master (data out) should be connected to the MOSI line in the slave device (data in). The data is transferred as byte wide (8-bit) serial data, MSB first.

## SCLOCK (Serial Clock I/O Pin), Pin#26

The master clock (SCLOCK) is used to synchronize the data being transmitted and received through the MOSI and MISO data lines. A single data bit is transmitted and received in each SCLOCK period. Therefore, a byte is transmitted/received after eight SCLOCK periods. The SCLOCK pin is configured as an output in master mode and as an input in slave mode. In master mode the bit-rate, polarity and phase of the clock are controlled by the CPOL, CPHA, SPR0 and SPR1 bits in the SPICON SFR (see Table XIX). In slave mode the SPICON register will have to be configured with the phase and polarity (CPHA and CPOL) of the expected input clock. In both master and slave mode the data is transmitted on one edge of the SCLOCK signal and sampled on the other. It is important therefore that the CPHA and CPOL are configured the same for the master and slave devices.

| SPICON                 | SPI Control Register   |
|------------------------|------------------------|
| SFR Address            | F8H                    |
| Power-On Default Value | 04H                    |
| Bit Addressable        | Yes                    |

| ISPI   | WCOL   | SPE   | SPIM   | CPOL   | CPHA   | SPR1   | SPR0   |
|--------|--------|-------|--------|--------|--------|--------|--------|

Table XIX. SPICON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                          | Description                                                                                                                                                                          | Description                                                                                                                                                                          | Description                                                                                                                                                                          |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | ISPI   | SPI Interrupt Bit Set by MicroConverter at the end of each SPI transfer.                                                                                                             | SPI Interrupt Bit Set by MicroConverter at the end of each SPI transfer.                                                                                                             | SPI Interrupt Bit Set by MicroConverter at the end of each SPI transfer.                                                                                                             | SPI Interrupt Bit Set by MicroConverter at the end of each SPI transfer.                                                                                                             |
|     6 | WCOL   | Cleared directly by user code or indirectly by reading the SPIDAT SFR. Write Collision Error Bit Set by MicroConverter if SPIDAT is written to while an SPI transfer is in progress. | Cleared directly by user code or indirectly by reading the SPIDAT SFR. Write Collision Error Bit Set by MicroConverter if SPIDAT is written to while an SPI transfer is in progress. | Cleared directly by user code or indirectly by reading the SPIDAT SFR. Write Collision Error Bit Set by MicroConverter if SPIDAT is written to while an SPI transfer is in progress. | Cleared directly by user code or indirectly by reading the SPIDAT SFR. Write Collision Error Bit Set by MicroConverter if SPIDAT is written to while an SPI transfer is in progress. |
|     5 | SPE    | SPI Interface Enable Bit Set by user to enable the SPI interface. Cleared by user to enable the I 2 C interface.                                                                     | SPI Interface Enable Bit Set by user to enable the SPI interface. Cleared by user to enable the I 2 C interface.                                                                     | SPI Interface Enable Bit Set by user to enable the SPI interface. Cleared by user to enable the I 2 C interface.                                                                     | SPI Interface Enable Bit Set by user to enable the SPI interface. Cleared by user to enable the I 2 C interface.                                                                     |
|     4 | SPIM   | SPI Master/Slave Mode Select Bit Set by user to enable Master Mode operation (SCLOCK is an output). Cleared by user to enable Slave Mode operation (SCLOCK is an input).             | SPI Master/Slave Mode Select Bit Set by user to enable Master Mode operation (SCLOCK is an output). Cleared by user to enable Slave Mode operation (SCLOCK is an input).             | SPI Master/Slave Mode Select Bit Set by user to enable Master Mode operation (SCLOCK is an output). Cleared by user to enable Slave Mode operation (SCLOCK is an input).             | SPI Master/Slave Mode Select Bit Set by user to enable Master Mode operation (SCLOCK is an output). Cleared by user to enable Slave Mode operation (SCLOCK is an input).             |
|     3 | CPOL * | Clock Polarity Select Bit Set by user if SCLOCK idles high.                                                                                                                          | Clock Polarity Select Bit Set by user if SCLOCK idles high.                                                                                                                          | Clock Polarity Select Bit Set by user if SCLOCK idles high.                                                                                                                          | Clock Polarity Select Bit Set by user if SCLOCK idles high.                                                                                                                          |
|     2 | CPHA * | Clock Phase Select Bit Set by user if leading SCLOCK edge is to transmit data. Cleared by user if trailing SCLOCK edge is to transmit data.                                          | Clock Phase Select Bit Set by user if leading SCLOCK edge is to transmit data. Cleared by user if trailing SCLOCK edge is to transmit data.                                          | Clock Phase Select Bit Set by user if leading SCLOCK edge is to transmit data. Cleared by user if trailing SCLOCK edge is to transmit data.                                          | Clock Phase Select Bit Set by user if leading SCLOCK edge is to transmit data. Cleared by user if trailing SCLOCK edge is to transmit data.                                          |
|     1 | SPR1   | SPI Bit-Rate Select Bits                                                                                                                                                             | SPI Bit-Rate Select Bits                                                                                                                                                             | SPI Bit-Rate Select Bits                                                                                                                                                             | SPI Bit-Rate Select Bits                                                                                                                                                             |
|     0 | SPR0   | These bits select the SCLOCK rate (bit-rate) in Master Mode as follows:                                                                                                              | These bits select the SCLOCK rate (bit-rate) in Master Mode as follows:                                                                                                              | These bits select the SCLOCK rate (bit-rate) in Master Mode as follows:                                                                                                              | These bits select the SCLOCK rate (bit-rate) in Master Mode as follows:                                                                                                              |
|     0 |        | SPR1                                                                                                                                                                                 | SPR0                                                                                                                                                                                 | SPR1                                                                                                                                                                                 | Selected Bit Rate                                                                                                                                                                    |
|     0 |        | 0 0                                                                                                                                                                                  | 0 1                                                                                                                                                                                  | 1 1                                                                                                                                                                                  | f CORE /8 f CORE /16                                                                                                                                                                 |

## SS (Slave Select Input Pin), Pin#13

The Slave Select ( SS ) input pin is only used when the ADuC824 is configured in slave mode to enable the SPI peripheral. This line is active low. Data is only received or transmitted in slave mode when the SS pin is low, allowing the ADuC824 to be used in single master, multislave SPI configurations. If CPHA = 1 then the SS input may be permanently pulled low. With CPHA = 0 then the SS input must be driven low before the first bit in a byte wide transmission or reception and return high again after the last bit in that byte wide transmission or reception. In SPI Slave Mode, the logic level on the external SS pin (Pin# 13), can be read via the SPR0 bit in the SPICON SFR.

The following SFR registers are used to control the SPI interface.

## SPIDAT

## SPI Data Register

Function

The SPIDAT SFR is written by the user to transmit data over the SPI interface or read by user code to read data just received by the SPI interface.

SFR Address Power-On Default Value Bit Addressable

F7H

00H

No

## Using the SPI Interface

Depending on the configuration of the bits in the SPICON SFR shown in Table XIX, the ADuC824 SPI interface will transmit or receive data in a number of possible modes. Figure 33 shows all possible ADuC824 SPI configurations and the timing relationships and synchronization between the signals involved. Also shown in this figure is the SPI interrupt bit (ISPI) and how it is triggered at the end of each byte-wide communication.

Figure 33. SPI Timing, All Modes

<!-- image -->

## SPI Interface-Master Mode

In master mode, the SCLOCK pin is always an output and generates a burst of eight clocks whenever user code writes to the SPIDAT register. The SCLOCK bit rate is determined by SPR0 and SPR1 in SPICON. It should also be noted that the SS pin is not used in master mode. If the ADuC824 needs to assert the SS pin on an external slave device, a Port digital output pin should be used.

In master mode a byte transmission or reception is initiated by a write to SPIDAT. Eight clock periods are generated via the SCLOCK pin and the SPIDAT byte being transmitted via MOSI. With each SCLOCK period a data bit is also sampled via MISO. After eight clocks, the transmitted byte will have been completely transmitted and the input byte will be waiting in the input shift register. The ISPI flag will be set automatically and an interrupt will occur if enabled. The value in the shift register will be latched into SPIDAT.

## SPI Interface-Slave Mode

In slave mode the SCLOCK is an input. The SS pin must also be driven low externally during the byte communication.

Transmission is also initiated by a write to SPIDAT. In slave mode, a data bit is transmitted via MISO and a data bit is received via MOSI through each input SCLOCK period. After eight clocks, the transmitted byte will have been completely transmitted and the input byte will be waiting in the input shift register. The ISPI flag will be set automatically and an interrupt will occur if enabled. The value in the shift register will be latched into SPIDAT only when the transmission/reception of a byte has been completed. The end of transmission occurs after the eighth clock has been received, if CPHA = 1 or when SS returns high if CPHA = 0.

## ADuC824

## I 2 C-COMPATIBLE INTERFACE

The ADuC824 supports a 2-wire serial interface mode which is I 2 C compatible. The I 2 C-compatible interface shares its pins with the on-chip SPI interface and therefore the user can only enable one or the other interface at any given time (see SPE in

| SDATA (Pin 27)   | Serial Data I/O Pin   |
|------------------|-----------------------|
| SCLOCK (Pin 26)  | Serial Clock          |

Three SFRs are used to control the I 2 C-compatible interface. These are described below:

| I2CCON                 | I 2 C Control Register   |
|------------------------|--------------------------|
| SFR Address            | E8H                      |
| Power-On Default Value | 00H                      |
| Bit Addressable        | Yes                      |

| MDO   | MDE   | MCO   | MDI   | I2CM   | I2CRS   | I2CTX   | I2CI   |
|-------|-------|-------|-------|--------|---------|---------|--------|

Table XX. I2CCON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                                                           |
|-------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | MDO    | I 2 C Software Master Data Output Bit (MASTER MODE ONLY) This data bit is used to implement a master I 2 C transmitter interface in software. Data written to this bit will be outputted on the SDATA pin if the data output enable (MDE) bit is set. |
|     6 | MDE    | I 2 C Software Master Data Output Enable Bit (MASTER MODE ONLY) Set by user to enable the SDATA pin as an output (Tx). Cleared by the user to enable SDATA pin as an input (Rx).                                                                      |
|     5 | MCO    | I 2 C Software Master Clock Output Bit (MASTER MODE ONLY) This data bit is used to implement a master I 2 C transmitter interface in software. Data written to this bit will be outputted on the SCLOCK pin.                                          |
|     4 | MDI    | I 2 C Software Master Data Input Bit (MASTER MODE ONLY) This data bit is used to implement a master I 2 C receiver interface in software. Data on the SDATA pin is latched into this bit on SCLOCK if the Data Output Enable (MDE) bit is '0.'        |
|     3 | I2CM   | I 2 C Master/Slave Mode Bit Set by user to enable I 2 C software master mode. Cleared by user to enable I 2 C hardware slave mode.                                                                                                                    |
|     2 | I2CRS  | I 2 C Reset Bit (SLAVE MODE ONLY) Set by user to reset the I 2 C interface. Cleared by user code for normal I 2 C operation.                                                                                                                          |
|     1 | I2CTX  | I 2 C Direction Transfer Bit (SLAVE MODE ONLY) Set by the MicroConverter if the interface is transmitting. Cleared by the MicroConverter if the interface is receiving.                                                                               |
|     0 | I2CI   | I 2 C Interrupt Bit (SLAVE MODE ONLY) Set by the MicroConverter after a byte has been transmitted or received. Cleared automatically when user code reads the I2CDAT SFR (see I2CDAT below).                                                          |

| I2CADD Function              | I 2 C Address Register Holds the I 2 C peripheral address for the part. It may be overwritten by user code. Technical Note uC001 at www.analog.com/microconverter describes the format of the I 2 C stan- dard 7-bit address in detail.   | I2CDAT Function        | I 2 C Data Register The I2CDAT SFR is written by the user to transmit data over the I 2 C interface or read by user code to read data just received by the I 2 Cinterface Accessing I2CDAT automatically clears any pending I 2 C interrupt and   |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SFR Address Power-On Default | 9BH 55H No                                                                                                                                                                                                                                | SFR Address            | the I2CI bit in the I2CCON SFR. software should only access once per interrupt cycle. 9AH                                                                                                                                                         |
| Value                        |                                                                                                                                                                                                                                           |                        |                                                                                                                                                                                                                                                   |
|                              |                                                                                                                                                                                                                                           |                        | User                                                                                                                                                                                                                                              |
| Bit                          |                                                                                                                                                                                                                                           |                        |                                                                                                                                                                                                                                                   |
|                              |                                                                                                                                                                                                                                           |                        | I2CDAT                                                                                                                                                                                                                                            |
| Addressable                  |                                                                                                                                                                                                                                           |                        |                                                                                                                                                                                                                                                   |
|                              |                                                                                                                                                                                                                                           | Power-On Default Value | 00H                                                                                                                                                                                                                                               |
|                              |                                                                                                                                                                                                                                           | Bit Addressable        | No                                                                                                                                                                                                                                                |

SPICON previously). An Application Note describing the operation of this interface as implemented is available from the MicroConverter Website at www.analog.com/microconverter. This interface can be configured as a Software Master or Hardware Slave, and uses two pins in the interface.

## 8051-COMPATIBLE ON-CHIP PERIPHERALS

This section gives a brief overview of the various secondary peripheral circuits are also available to the user on-chip. These remaining functions are fully 8051-compatible and are controlled via standard 8051 SFR bit definitions.

## Parallel I/O Ports 0-3

The ADuC824 uses four input/output ports to exchange data with external devices. In addition to performing general-purpose I/O, some ports are capable of external memory operations; others are multiplexed with an alternate function for the peripheral features on the device. In general, when a peripheral is enabled, that pin may not be used as a general purpose I/O pin.

Port 0 is an 8-bit open drain bidirectional I/O port that is directly controlled via the Port 0 SFR (SFR address = 80 hex). Port 0 pins that have 1s written to them via the Port 0 SFR will be configured as open drain and will therefore float. In that state, Port 0 pins can be used as high impedance inputs. An external pull-up resistor will be required on Port 0 outputs to force a valid logic high level externally. Port 0 is also the multiplexed low-order address and data bus during accesses to external program or data memory. In this application it uses strong internal pull-ups when emitting 1s.

Port 1 is also an 8-bit port directly controlled via the P1 SFR (SFR address = 90 hex). The Port 1 pins are divided into two distinct pin groupings.

P1.0 and P1.1 pins on Port 1 are bidirectional digital I/O pins with internal pull-ups. If P1.0 and P1.1 have 1s written to them via the P1 SFR, these pins are pulled high by the internal pull-up resistors. In this state they can also be used as inputs; as input pins being externally pulled low, they will source current because of the internal pull-ups. With 0s written to them, both these pins will drive a logic low output voltage (VOL) and will be capable of sinking 10 mA compared to the standard 1.6 mA sink capability on the other port pins. These pins also have various secondary functions described in Table XXI.

Table XXI. Port 1, Alternate Pin Functions

| Pin   | Alternate Function                            |
|-------|-----------------------------------------------|
| P1.0  | T2 (Timer/Counter 2 External Input)           |
| P1.1  | T2EX (Timer/Counter 2 Capture/Reload Trigger) |

The remaining Port 1 pins (P1.2-P1.7) can only be configured as Analog Input (ADC), Analog Output (DAC) or Digital Input pins. By (power-on) default these pins are configured as Analog Inputs, i.e., '1' written in the corresponding Port 1 register bit. To configure any of these pins as digital inputs, the user should write a '0' to these port bits to configure the corresponding pin as a high impedance digital input.

Port 2 is a bidirectional port with internal pull-up resistors directly controlled via the P2 SFR (SFR address = A0 hex). Port 2 pins that have 1s written to them are pulled high by the internal pull-up resistors and, in that state, they can be used as inputs. As inputs, Port 2 pins being pulled externally low will source current because of the internal pull-up resistors. Port 2 emits the high order address bytes during fetches from external program memory and middle and high order address bytes during accesses to the 24-bit external data memory space.

## ADuC824

Port 3 is a bidirectional port with internal pull-ups directly controlled via the P2 SFR (SFR address = B0 hex). Port 3 pins that have 1s written to them are pulled high by the internal pull-ups and in that state they can be used as inputs. As inputs, Port 3 pins being pulled externally low will source current because of the internal pull-ups. Port 3 pins also have various secondary functions described in Table XXII.

Table XXII. Port 3, Alternate Pin Functions

| Pin   | Alternate Function                                       |
|-------|----------------------------------------------------------|
| P3.0  | RXD (UART Input Pin) (or Serial Data I/O in Mode 0)      |
| P3.1  | TXD (UART Output Pin) (or Serial Clock Output in Mode 0) |
| P3.2  | INT0 (External Interrupt 0)                              |
| P3.3  | INT1 (External Interrupt 1)                              |
| P3.4  | T0 (Timer/Counter 0 External Input)                      |
| P3.5  | T1 (Timer/Counter 1 External Input)                      |
| P3.6  | WR (External Data Memory Write Strobe)                   |
| P3.7  | RD (External Data Memory Read Strobe)                    |

The alternate functions of P1.0, P1.1, and Port 3 pins can only be activated if the corresponding bit latch in the P1 and P3 SFRs contains a 1. Otherwise, the port pin is stuck at 0.

## Timers/Counters

The ADuC824 has three 16-bit Timer/Counters: Timer 0, Timer 1, and Timer 2. The Timer/Counter hardware has been included on-chip to relieve the processor core of the overhead inherent in implementing timer/counter functionality in software. Each Timer/Counter consists of two 8-bit registers THx and TLx (x = 0, 1, and 2). All three can be configured to operate either as timers or event counters.

In 'Timer' function, the TLx register is incremented every machine cycle. Thus one can think of it as counting machine cycles. Since a machine cycle consists of 12 core clock periods, the maximum count rate is 1/12 of the core clock frequency.

In 'Counter' function, the TLx register is incremented by a 1-to-0 transition at its corresponding external input pin, T0, T1, or T2. In this function, the external input is sampled during S5P2 of every machine cycle. When the samples show a high in one cycle and a low in the next cycle, the count is incremented. The new count value appears in the register during S3P1 of the cycle following the one in which the transition was detected. Since it takes two machine cycles (24 core clock periods) to recognize a 1-to-0 transition, the maximum count rate is 1/24 of the core clock frequency. There are no restrictions on the duty cycle of the external input signal, but to ensure that a given level is sampled at least once before it changes, it must be held for a minimum of one full machine cycle. Remember that the core clock frequency is programmed via the CD0-2 selection bits in the PLLCON SFR.

## ADuC824

User configuration and control of all Timer operating modes is achieved via three SFRs namely:

TMOD, TCON:

Control and configuration for Timers 0 and 1.

T2CON:

Control and configuration for Timer 2.

TMOD

Timer/Counter 0 and 1 Mode Register

SFR Address

89H

Power-On Default Value

00H

Bit Addressable

No

| Gate   | C/ T   | M1   | M0   | Gate   | C/ T   | M1   | M0   |
|--------|--------|------|------|--------|--------|------|------|

## Table XXIII. TMOD SFR Bit Designations

| Bit             | Name                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 6 5 4 3 2 1 0 | Gate C/ T M1 M0 Gate C/ T M1 M0 | Timer 1 Gating Control Set by software to enable timer/counter 1 only while INT1 pin is high and TR1 control bit is set. Cleared by software to enable timer 1 whenever TR1 control bit is set. Timer 1 Timer or Counter Select Bit Set by software to select counter operation (input from T1 pin). Cleared by software to select timer operation (input from internal system clock). Timer 1 Mode Select Bit 1 (Used with M0 Bit) Timer 1 Mode Select Bit 0 M1 M0 0 0 TH1 operates as an 8-bit timer/counter. TL1 serves as 5-bit prescaler. 0 1 16-Bit Timer/Counter. TH1 and TL1 are cascaded; there is no prescaler. 1 0 8-Bit Auto-Reload Timer/Counter. TH1 holds a value which is to be reloaded into TL1 each time it overflows. 1 1 Timer/Counter 1 Stopped. Timer 0 Gating Control Set by software to enable timer/counter 0 only while INT0 pin is high and TR0 control bit is set. Cleared by software to enable Timer 0 whenever TR0 control bit is set. Timer 0 Timer or Counter Select Bit Set by software to select counter operation (input from T0 pin). Cleared by software to select timer operation (input from internal system clock). Timer 0 Mode Select Bit 1 Timer 0 Mode Select Bit 0 M1 M0 0 0 TH0 operates as an 8-bit timer/counter. TL0 serves as 5-bit prescaler. 0 1 16-Bit Timer/Counter. TH0 and TL0 are cascaded; there is no prescaler. |

## TCON

Timer/Counter 0 and 1 Control Register

SFR Address Power-On Default Value

88H

00H

Bit Addressable

Yes

| TF1   | TR1   | TF0   | TR0   | IE1 *   | IT1 *   | IE0 *   | IT0 *   |
|-------|-------|-------|-------|---------|---------|---------|---------|

## Table XXIV. TCON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | TF1    | Timer 1 Overflow Flag Set by hardware on a timer/counter 1 overflow. Cleared by hardware when the Program Counter (PC) vectors to the interrupt service routine.                                                                                                                                                                                                                                                           |
|     6 | TR1    | Timer 1 Run Control Bit Set by user to turn on timer/counter 1. Cleared by user to turn off timer/counter 1.                                                                                                                                                                                                                                                                                                               |
|     5 | TF0    | Timer 0 Overflow Flag Set by hardware on a timer/counter 0 overflow. Cleared by hardware when the PC vectors to the interrupt service routine.                                                                                                                                                                                                                                                                             |
|     4 | TR0    | Timer 0 Run Control Bit Set by user to turn on timer/counter 0.                                                                                                                                                                                                                                                                                                                                                            |
|     3 | IE1    | Cleared by user to turn off timer/counter 0. External Interrupt 1 ( INT1 ) Flag Set by hardware by a falling edge or zero level being applied to external interrupt pin INT1 , depending on bit IT1 state. Cleared by hardware when the when the PC vectors to the interrupt service routine only if the interrupt was transition-activated. If level-activated, the external requesting source controls the request flag, |
|     2 | IT1    | External Interrupt 1 (IE1) Trigger Type Set by software to specify edge-sensitive detection (i.e., 1-to-0 transition). Cleared by software to specify level-sensitive detection (i.e., zero level).                                                                                                                                                                                                                        |
|     1 | IE0    | External Interrupt 0 ( INT0 ) Flag Set by hardware by a falling edge or zero level being applied to external interrupt pin INT0 , depending on bit IT0 state. Cleared by hardware when the PC vectors to the interrupt service routine only if the interrupt was transition-activated. If level-activated, the external requesting source controls the request flag,                                                       |
|     0 | IT0    | External Interrupt 0 (IE0) Trigger Type Set by software to specify edge-sensitive detection (i.e., 1-to-0 transition). Cleared by software to specify level-sensitive detection (i.e., zero level).                                                                                                                                                                                                                        |

## Timer/Counter 0 and 1 Data Registers

Each timer consists of two 8-bit registers. These can be used as independent registers or combined to be a single 16-bit register depending on the timer mode configuration.

## TH0 and TL0

Timer 0 high byte and low byte.

SFR Address = 8Chex, 8Ahex respectively.

## TH1 and TL1

Timer 1 high byte and low byte.

SFR Address = 8Dhex, 8Bhex respectively.

## ADuC824

## TIMER/COUNTER 0 AND 1 OPERATING MODES

The following paragraphs describe the operating modes for timer/ counters 0 and 1. Unless otherwise noted, assume that these modes of operation are the same for timer 0 as for timer 1.

## Mode 0 (13-Bit Timer/Counter)

Mode 0 configures an 8-bit timer/counter with a divide-by-32 prescaler. Figure 34 shows mode 0 operation.

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 34. Timer/Counter 0, Mode 0

In this mode, the timer register is configured as a 13-bit register. As the count rolls over from all 1s to all 0s, it sets the timer overflow flag TF0. The overflow flag, TF0, can then be used to request an interrupt. The counted input is enabled to the timer when TR0 = 1 and either Gate = 0 or INT0 = 1. Setting Gate = 1 allows the timer to be controlled by external input INT0 , to facilitate pulsewidth measurements. TR0 is a control bit in the special function register TCON; Gate is in TMOD. The 13-bit register consists of all eight bits of TH0 and the lower five bits of TL0. The upper three bits of TL0 are indeterminate and should be ignored. Setting the run flag (TR0) does not clear the registers.

## Mode 1 (16-Bit Timer/Counter)

Mode 1 is the same as Mode 0, except that the timer register is running with all 16 bits. Mode 1 is shown in Figure 35.

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 35. Timer/Counter 0, Mode 1

## Mode 2 (8-Bit Timer/Counter with Auto Reload)

Mode 2 configures the timer register as an 8-bit counter (TL0) with automatic reload, as shown in Figure 36. Overflow from TL0 not only sets TF0, but also reloads TL0 with the contents of TH0, which is preset by software. The reload leaves TH0 unchanged.

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 36. Timer/Counter 0, Mode 2

## Mode 3 (Two 8-Bit Timer/Counters)

Mode 3 has different effects on timer 0 and timer 1. Timer 1 in Mode 3 simply holds its count. The effect is the same as setting TR1 = 0. Timer 0 in Mode 3 establishes TL0 and TH0 as two separate counters. This configuration is shown in Figure 37. TL0 uses the timer 0 control bits: C/T, Gate, TR0, INT0 , and TF0. TH0 is locked into a timer function (counting machine cycles) and takes over the use of TR1 and TF1 from timer 1. Thus, TH0 now controls the 'timer 1' interrupt. Mode 3 is provided for applications requiring an extra 8-bit timer or counter.

When timer 0 is in Mode 3, timer 1 can be turned on and off by switching it out of, and into, its own Mode 3, or can still be used by the serial interface as a Baud Rate Generator . In fact, it can be used, in any application not requiring an interrupt from timer 1 itself.

<!-- image -->

TR1

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 37. Timer/Counter 0, Mode 3

T2CON SFR Address Power-On Default Value

Timer/Counter 2 Control Register

C8H

00H

Bit Addressable

Yes

| TF2   | EXF2   | RCLK   | TCLK   | EXEN2   | TR2   | CNT2   | CAP2   |
|-------|--------|--------|--------|---------|-------|--------|--------|

## Table XXV. T2CON SFR Bit Designations

|   Bit | Name   | Description                                                                                                                                                                                                                                                                                                                                   |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | TF2    | Timer 2 Overflow Flag Set by hardware on a Timer 2 overflow. TF2 will not be set when either RCLK or TCLK = 1. Cleared by user software.                                                                                                                                                                                                      |
|     6 | EXF2   | Timer 2 External Flag Set by hardware when either a capture or reload is caused by a negative transition on T2EX and EXEN2 = 1.                                                                                                                                                                                                               |
|     5 | RCLK   | Receive Clock Enable Bit Set by user to enable the serial port to use Timer 2 overflow pulses for its receive clock in serial port Modes 1 and 3.                                                                                                                                                                                             |
|     4 | TCLK   | Cleared by user to enable Timer 1 overflow to be used for the receive clock. Transmit Clock Enable Bit Set by user to enable the serial port to use Timer 2 overflow pulses for its transmit clock in serial port Modes 1 and 3. Cleared by user to enable Timer 1 overflow to be used for the transmit clock.                                |
|     3 | EXEN2  | Timer 2 External Enable Flag Set by user to enable a capture or reload to occur as a result of a negative transition on T2EX if Timer 2 is not being used to clock the serial port. Cleared by user for Timer 2 to ignore events at T2EX.                                                                                                     |
|     2 | TR2    | Timer 2 Start/Stop Control Bit Set by user to start Timer 2. Cleared by user to stop Timer 2.                                                                                                                                                                                                                                                 |
|     1 | CNT2   | Timer 2 Timer or Counter Function Select Bit Set by user to select counter function (input from external T2 pin). Cleared by user to select timer function (input from on-chip core clock).                                                                                                                                                   |
|     0 | CAP2   | Timer 2 Capture/Reload Select Bit Set by user to enable captures on negative transitions at T2EX if EXEN2 = 1. Cleared by user to enable auto-reloads with Timer 2 overflows or negative transitions at T2EX when EXEN2 = 1. When either RCLK = 1 or TCLK = 1, this bit is ignored and the timer is forced to autoreload on Timer 2 overflow. |

## Timer/Counter 2 Data Registers

Timer/Counter 2 also has two pairs of 8-bit data registers associated with it. These are used as both timer data registers and timer capture/reload registers.

## TH2 and TL2

Timer 2, data high byte and low byte. SFR Address = CDhex, CChex respectively.

## RCAP2H and RCAP2L

Timer 2, Capture/Reload byte and low byte. SFR Address = CBhex, CAhex respectively.

## ADuC824

## Timer/Counter 2 Operating Modes

The following paragraphs describe the operating modes for timer/ counter 2. The operating modes are selected by bits in the T2CON SFR as shown in Table XXVI.

Table XXVI. TIMECON SFR Bit Designations

| RCLK (or) TCLK   | CAP2   |   TR2 | MODE              |
|------------------|--------|-------|-------------------|
| 0                | 0      |     1 | 16-Bit Autoreload |
| 0                | 1      |     1 | 16-Bit Capture    |
| 1                | X      |     1 | Baud Rate         |
| X                | X      |     0 | OFF               |

## 16-Bit Autoreload Mode

In 'Autoreload' mode, there are two options, which are selected by bit EXEN2 in T2CON. If EXEN2 = 0, then when Timer 2 rolls over it not only sets TF2 but also causes the Timer 2 registers to be reloaded with the 16-bit value in registers RCAP2L and RCAP2H, which are preset by software. If EXEN2 = 1, then Timer 2 still performs the above, but with the added feature that a 1-to-0 transition at external input T2EX will also trigger the 16-bit reload and set EXF2. The autoreload mode is illustrated in Figure 38.

## 16-Bit Capture Mode

In the 'Capture' mode, there are again two options, which are selected by bit EXEN2 in T2CON. If EXEN2 = 0, then Timer 2 is a 16-bit timer or counter which, upon overflowing, sets bit TF2, the Timer 2 overflow bit, which can be used to generate an interrupt. If EXEN2 = 1, then Timer 2 still performs the above, but a l-to-0 transition on external input T2EX causes the current value in the Timer 2 registers, TL2 and TH2, to be captured into registers RCAP2L and RCAP2H, respectively. In addition, the transition at T2EX causes bit EXF2 in T2CON to be set, and EXF2, like TF2, can generate an interrupt. The Capture Mode is illustrated in Figure 39.

The baud rate generator mode is selected by RCLK = 1 and/or TCLK = 1.

In either case if Timer 2 is being used to generate the baud rate, the TF2 interrupt flag will not occur. Hence Timer 2 interrupts will not occur so they do not have to be disabled. In this mode the EXF2 flag, however, can still cause interrupts and this can be used as a third external interrupt.

Baud rate generation will be described as part of the UART serial port operation in the following pages.

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 38. Timer/Counter 2, 16-Bit Autoreload Mode

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 39. Timer/Counter 2, 16-Bit Capture Mode

## UART SERIAL INTERFACE

The serial port is full duplex, meaning it can transmit and receive simultaneously. It is also receive-buffered, meaning it can commence reception of a second byte before a previously received byte has been read from the receive register. However, if the first byte still has not been read by the time reception of the second byte is complete, the first byte will be lost. The physical interface to the serial data network is via Pins RXD(P3.0) and TXD(P3.1)

## ADuC824

while the SFR interface to the UART is comprised of the following registers.

## SBUF

The serial port receive and transmit registers are both accessed through the SBUF SFR (SFR address = 99 hex). Writing to SBUF loads the transmit register and reading SBUF accesses a physically separate receive register.

## SCON

UART Serial Port Control Register

SFR Address Power-On Default Value Bit Addressable

98H

00H

Yes

| SM0   | SM1   | SM2   | REN   | TB8   | RB8   | TI   | RI   |
|-------|-------|-------|-------|-------|-------|------|------|

## Table XXVII. SCON SFR Bit Designations

| Bit   | Name    | Description                                                                                                                                                                                                                                                                                                                                                   |
|-------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 6   | SM0 SM1 | UART Serial Mode Select Bits These bits select the Serial Port operating mode as follows:                                                                                                                                                                                                                                                                     |
| 5     | SM2     | 1 1 Mode 3: 9-bit UART, variable baud rate Multiprocessor Communication Enable Bit Enables multiprocessor communication in Modes 2 and 3. In Mode 0, SM2 should be In Mode 1, if SM2 is set, RI will not be activated if a valid stop bit was not received. If SM2 cleared, RI will be set as soon as the byte of data has been received. In Modes 2 or 3, if |
| 4     | REN     | cleared. is SM2 is set, RI will not be activated if the received ninth data bit in RB8 is 0. If SM2 is cleared, RI will be set as soon as the byte of data has been received. Serial Port Receive Enable Bit                                                                                                                                                  |
|       |         | Set by user software to enable serial port reception. Cleared by user software to disable serial port reception. Serial Port Transmit (Bit 9)                                                                                                                                                                                                                 |
| 3     | TB8     | The data loaded into TB8 will be the ninth data bit that will be transmitted in Modes 2 and 3. Serial Port Receiver Bit 9                                                                                                                                                                                                                                     |
| 2     | RB8     | The ninth data bit received in Modes 2 and 3 is latched into RB8. For Mode 1 the stop bit is latched into RB8.                                                                                                                                                                                                                                                |
| 1     | TI      | Serial Port Transmit Interrupt Flag Set by hardware at the end of the eighth bit in Mode 0, or at the beginning of the stop bit in Modes 1, 2, and 3. TI must be cleared by user software.                                                                                                                                                                    |
| 0     | RI      | Serial Port Receiver Interrupt Flag Set by hardware at the end of the eighth bit in mode 0, or halfway through the stop bit in Modes 1, 2, and 3. RI must be cleared by software.                                                                                                                                                                             |

## ADuC824

## Mode 0: 8-Bit Shift Register Mode

Mode 0 is selected by clearing both the SM0 and SM1 bits in the SFR SCON. Serial data enters and exits through RXD. TXD outputs the shift clock. Eight data bits are transmitted or received. Transmission is initiated by any instruction that writes to SBUF. The data is shifted out of the RXD line. The eight bits are transmitted with the least-significant bit (LSB) first, as shown in Figure 40.

Figure 40. UART Serial Port Transmission, Mode 0.

<!-- image -->

Reception is initiated when the receive enable bit (REN) is 1 and the receive interrupt bit (RI) is 0. When RI is cleared the data is clocked into the RXD line and the clock pulses are output from the TXD line.

## Mode 1: 8-Bit UART, Variable Baud Rate

Mode 1 is selected by clearing SM0 and setting SM1. Each data byte (LSB first) is preceded by a start bit(0) and followed by a stop bit(1). Therefore 10 bits are transmitted on TXD or received on RXD. The baud rate is set by the Timer 1 or Timer 2 overflow rate, or a combination of the two (one for transmission and the other for reception).

Transmission is initiated by writing to SBUF. The 'write to SBUF' signal also loads a 1 (stop bit) into the ninth bit position of the transmit shift register. The data is output bit by bit until the stop bit appears on TXD and the transmit interrupt flag (TI) is automatically set as shown in Figure 41.

Figure 41. UART Serial Port Transmission, Mode 0.

<!-- image -->

Reception is initiated when a 1-to-0 transition is detected on RXD. Assuming a valid start bit was detected, character reception continues. The start bit is skipped and the eight data bits are clocked into the serial port shift register. When all eight bits have been clocked in, the following events occur:

The eight bits in the receive shift register are latched into SBUF

The ninth bit (Stop bit) is clocked into RB8 in SCON

The Receiver interrupt flag (RI) is set

if, and only if, the following conditions are met at the time the final shift pulse is generated:

RI = 0, and

Either SM2 = 0, or SM2 = 1 and the received stop bit = 1.

If either of these conditions is not met, the received frame is irretrievably lost, and RI is not set.

## Mode 2: 9-Bit UART with Fixed Baud Rate

Mode 2 is selected by setting SM0 and clearing SM1. In this mode the UART operates in 9-bit mode with a fixed baud rate. The baud rate is fixed at Core\_Clk/64 by default, although by setting the SMOD bit in PCON, the frequency can be doubled to Core\_Clk/32. Eleven bits are transmitted or received, a start bit(0), eight data bits, a programmable ninth bit and a stop bit(1). The ninth bit is most often used as a parity bit, although it can be used for anything, including a ninth data bit if required.

To transmit, the eight data bits must be written into SBUF. The ninth bit must be written to TB8 in SCON. When transmission is initiated the eight data bits (from SBUF) are loaded onto the transmit shift register (LSB first). The contents of TB8 are loaded into the ninth bit position of the transmit shift register. The transmission will start at the next valid baud rate clock. The TI flag is set as soon as the stop bit appears on TXD.

Reception for Mode 2 is similar to that of Mode 1. The eight data bytes are input at RXD (LSB first) and loaded onto the receive shift register. When all eight bits have been clocked in, the following events occur:

The eight bits in the receive shift register are latched into SBUF The ninth data bit is latched into RB8 in SCON

The Receiver interrupt flag (RI) is set

if, and only if, the following conditions are met at the time the final shift pulse is generated:

RI = 0, and

Either SM2 = 0, or SM2 = 1 and the received stop bit = 1.

If either of these conditions is not met, the received frame is irretrievably lost, and RI is not set.

## Mode 3: 9-Bit UART with Variable Baud Rate

Mode 3 is selected by setting both SM0 and SM1. In this mode the 8051 UART serial port operates in 9-bit mode with a variable baud rate determined by either Timer 1 or Timer 2. The operation of the 9-bit UART is the same as for Mode 2 but the baud rate can be varied as for Mode 1.

In all four modes, transmission is initiated by any instruction that uses SBUF as a destination register. Reception is initiated in Mode 0 by the condition RI = 0 and REN = 1. Reception is initiated in the other modes by the incoming start bit if REN = 1.

## UART Serial Port Baud Rate Generation Mode 0 Baud Rate Generation

The baud rate in Mode 0 is fixed:

Mode 0 Baud Rate = (Core Clock Frequency * /12)

* In these descriptions, Core Clock Frequency refers to the core clock frequency selected via the CD0-2 bits in the PLLCON SFR.

## Mode 2 Baud Rate Generation

The baud rate in Mode 2 depends on the value of the SMOD bit in the PCON SFR. If SMOD = 0, the baud rate is 1/64 of the core clock. If SMOD = 1, the baud rate is 1/32 of the core clock:

Mode 2 Baud Rate = (2 SMOD /64) × (Core Clock Frequency)

## Mode 1 and 3 Baud Rate Generation

The baud rates in Modes 1 and 3 are determined by the overflow rate in Timer 1 or Timer 2, or both (one for transmit and the other for receive).

## Timer 1 Generated Baud Rates

When Timer 1 is used as the baud rate generator, the baud rates in Modes 1 and 3 are determined by the Timer 1 overflow rate and the value of SMOD as follows:

Modes 1 and 3 Baud Rate = (2 SMOD /32) × (Timer 1 Overflow Rate)

The Timer 1 interrupt should be disabled in this application. The Timer itself can be configured for either timer or counter operation, and in any of its three running modes. In the most typical application, it is configured for timer operation, in the autoreload mode (high nibble of TMOD = 0100Binary). In that case, the baud rate is given by the formula:

<!-- formula-not-decoded -->

[256-TH1]))

A very low baud rate can also be achieved with Timer 1 by leaving the Timer 1 interrupt enabled, and configuring the timer to run as a 16-bit timer (high nibble of TMOD = 0100Binary), and using the Timer 1 interrupt to do a 16-bit software reload. Table XXVIII below, shows some commonly-used baud rates and how they might be calculated from a core clock frequency of 1.5728 MHz and 12.58 MHz. Generally speaking, a 5% error is tolerable using asynchronous (start/stop) communications.

Table XXVIII. Commonly Used Baud Rates, Timer 1

|   Ideal Baud |   Core CLK |   SMOD Value | TH1-Reload Value   |   Actual Baud |   % Error |
|--------------|------------|--------------|--------------------|---------------|-----------|
|         9600 |      12.58 |            1 | -7 (F9h)           |          9362 |       2.5 |
|         2400 |      12.58 |            1 | -27 (E5h)          |          2427 |       1.1 |
|         1200 |      12.58 |            1 | -55 (C9h)          |          1192 |       0.7 |
|         1200 |       1.57 |            1 | -7 (F9h)           |          1170 |       2.5 |

## Timer 2 Generated Baud Rates

Baud rates can also be generated using Timer 2. Using Timer 2 is similar to using Timer 1 in that the timer must overflow 16 times before a bit is transmitted/received. Because Timer 2 has a 16-bit autoreload mode a wider range of baud rates is possible using Timer 2.

Modes 1 and 3 Baud Rate = (1/16) × (Timer 2 Overflow Rate)

Therefore, when Timer 2 is used to generate baud rates, the timer increments every two clock cycles and not every core machine cycle as before. Hence, it increments six times faster than Timer 1, and therefore baud rates six times faster are possible. Because Timer 2 has 16-bit autoreload capability, very low baud rates are still possible.

Timer 2 is selected as the baud rate generator by setting the TCLK and/or RCLK in T2CON. The baud rates for transmit and receive can be simultaneously different. Setting RCLK and/or TCLK puts Timer 2 into its baud rate generator mode as shown in Figure 42.

In this case, the baud rate is given by the formula:

Modes 1 and 3 Baud Rate = (Core Clk)/(32 × [65536 - (RCAP2H, RCAP2L)])

Table XXIX shows some commonly used baud rates and how they might be calculated from a core clock frequency of 1.5728 MHz and 12.5829 MHz.

Table XXIX. Commonly Used Baud Rates, Timer 2

|   Ideal Baud |   Core CLK | RCAP2H Value   | RCAP2L Value   |   Actual Baud |   % Error |
|--------------|------------|----------------|----------------|---------------|-----------|
|        19200 |      12.58 | -1 (FFh)       | -20 (ECh)      |         19661 |       2.4 |
|         9600 |      12.58 | -1 (FFh)       | -41 (D7h)      |          9591 |       0.1 |
|         2400 |      12.58 | -1 (FFh)       | -164 (5Ch)     |          2398 |       0.1 |
|         1200 |      12.58 | -2 (FEh)       | -72 (B8h)      |          1199 |       0.1 |
|         9600 |       1.57 | -1 (FFh)       | -5 (FBh)       |          9830 |       2.4 |
|         2400 |       1.57 | -1 (FFh)       | -20 (ECh)      |          2458 |       2.4 |
|         1200 |       1.57 | -1 (FFh)       | -41 (D7h)      |          1199 |       0.1 |

<!-- image -->

*

THE CORE CLOCK IS THE OUTPUT OF THE PLL AS DESCRIBED ON PAGE 42.

Figure 42. Timer 2, UART Baud Rates

## ADuC824

## INTERRUPT SYSTEM

The ADuC824 provides a total of twelve interrupt sources with two priority levels. The control and configuration of the interrupt system is carried out through three Interrupt-related SFRs.

IE:

Interrupt Enable Register.

IP:

Interrupt Priority Register.

IEIP2:

Secondary Interrupt Priority-Interrupt Register.

IE

Interrupt Enable Register

SFR Address

A8H

Power-On Default Value

00H

Bit Addressable

Yes

| EA   | EADC   | ET2   | ES   | ET1   | EX1   | ET0   | EX0   |
|------|--------|-------|------|-------|-------|-------|-------|

## Table XXX. IE SFR Bit Designations

| Bit     | Name   | Description                                                             |
|---------|--------|-------------------------------------------------------------------------|
| 7 6 4 3 | EA     | Written by User to Enable '1' or Disable '0' All Interrupt Sources      |
|         | EADC   | Written by User to Enable '1' or Disable '0' ADC Interrupt              |
| 5       | ET2    | Written by User to Enable '1' or Disable '0' Timer 2 Interrupt          |
|         | ES     | Written by User to Enable '1' or Disable '0' UART Serial Port Interrupt |
|         | ET1    | Written by User to Enable '1' or Disable '0' Timer 1 Interrupt          |
| 2       | EX1    | Written by User to Enable '1' or Disable '0' External Interrupt 1       |
| 1       | ET0    | Written by User to Enable '1' or Disable '0' Timer 0 Interrupt          |
| 0       | EX0    | Written by User to Enable '1' or Disable '0' External Interrupt 0       |

IP

Interrupt Priority Register

SFR Address Power-On Default Value

B8H

00H

Bit Addressable

Yes

| -   | PADC   | PT2   | PS   | PT1   | PX1   | PT0   | PX0   |
|-----|--------|-------|------|-------|-------|-------|-------|

## Table XXXI. IP SFR Bit Designations

| Bit     | Name                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7 4 3 1 | - PT2 PS PT1 PX1 PT0 | Reserved for Future Use Written by User to Select ADC Interrupt Priority ('1' = High; '0' = Low) Written by User to Select Timer 2 Interrupt Priority ('1' = High; '0' = Low) Written by User to Select UART Serial Port Interrupt Priority ('1' = High; '0' = Written by User to Select Timer 1 Interrupt Priority ('1' = High; '0' = Low) Written by User to Select External Interrupt 1 Priority ('1' = High; '0' = Low) Written by User to Select Timer 0 Interrupt Priority ('1' = High; '0' = Low) Written by User to Select External Interrupt 0 Priority ('1' = High; '0' = Low) |
| 6       | PADC                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5       |                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|         |                      | Low)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2       |                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0       | PX0                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## IEIP2

## Secondary Interrupt Enable and Priority Register

SFR Address Power-On Default Value

A9H

A0H

Bit Addressable

No

| -   | PTI   | PPSM   | PSI   | -   | ETI   | EPSM   | ESI   |
|-----|-------|--------|-------|-----|-------|--------|-------|

## Table XXXII. IEIP2 SFR Bit Designations

| Bit   | Name   | Description                                                                                 |
|-------|--------|---------------------------------------------------------------------------------------------|
| 7 6 4 | -      | Reserved for Future Use                                                                     |
|       | PTI    | Written by User to Select TIC Interrupt Priority ('1' = High; '0' = Low).                   |
| 5     | PPSM   | Written by User to Select Power Supply Monitor Interrupt Priority ('1' = High; '0' = Low).  |
|       | PSI    | Written by User to Select SPI/I 2 C Serial Port Interrupt Priority ('1' = High; '0' = Low). |
| 3     | -      | Reserved, This Bit Must Be '0.'                                                             |
| 2     | ETI    | Written by User to Enable '1' or Disable '0' TIC Interrupt.                                 |
| 1     | EPSM   | Written by User to Enable '1' or Disable '0' Power Supply Monitor Interrupt.                |
| 0     | ESI    | Written by User to Enable '1' or Disable '0' SPI/I 2 C Serial Port Interrupt.               |

## Interrupt Priority

The Interrupt Enable registers are written by the user to enable individual interrupt sources, while the Interrupt Priority registers allow the user to select one of two priority levels for each interrupt. An interrupt of a high priority may interrupt the service routine of a low priority interrupt, and if two interrupts of different priority occur at the same time, the higher level interrupt will be serviced first. An interrupt cannot be interrupted by another interrupt of the same priority level. If two interrupts of the same priority level occur simultaneously, a polling sequence is observed as shown in Table XXXIII.

## Table XXXIII. Priority within an Interrupt Level

| Source                                                                | Priority                                   | Description                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PSMI WDS IE0 RDY0/RDY1 TF0 IE1 TF1 I2CI + ISPI RI + TI TF2 + EXF2 TII | 1 (Highest) 2 3 4 5 6 7 8 9 10 11 (Lowest) | Power Supply Monitor Interrupt Watchdog Interrupt External Interrupt 0 ADC Interrupt Timer/Counter 0 Interrupt External Interrupt 1 Timer/Counter 1 Interrupt I 2 C/SPI Interrupt Serial Interrupt Timer/Counter 2 Interrupt Time Interval Counter Interrupt |

## Interrupt Vectors

When an interrupt occurs the program counter is pushed onto the stack and the corresponding interrupt vector address is loaded into the program counter. The interrupt vector addresses are shown in Table XXXIV.

## Table XXXIV. Interrupt Vector Addresses

| Source                                                                    | Vector Address                                                                            |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| IE0 TF0 IE1 TF1 RI + TI TF2 + EXF2 RDY0/RDY1 (ADC) II 2 C + ISPI PSMI TII | 0003 Hex 000B Hex 0013 Hex 001B Hex 0023 Hex 002B Hex 0033 Hex 003B Hex 0043 Hex 0053 Hex |
| WDS (WDIR = 1) *                                                          | 005B Hex                                                                                  |

## ADuC824

## ADuC824 HARDWARE DESIGN CONSIDERATIONS

This section outlines some of the key hardware design considerations that must be addressed when integrating the ADuC824 into any hardware system.

## Clock Oscillator

As described earlier, the core clock frequency for the ADuC824 is generated from an on-chip PLL that locks onto a multiple (384 times) of 32.768 kHz. The latter is generated from an internal clock oscillator. To use the internal clock oscillator, connect a 32.768 kHz parallel resonant crystal between XTAL1 and XTAL2 pins (32 and 33) as shown in Figure 43.

As shown in the typical external crystal connection diagram in Figure 44, two internal 12 pF capacitors are provided on-chip. These are connected internally, directly to the XTAL1 and XTAL2 pins and the total input capacitances at both pins is detailed in the specification section of this data sheet. The value of the total load capacitance required for the external crystal should be the value recommended by the crystal manufacturer for use with that specific crystal. In many cases, because of the on-chip capacitors, additional external load capacitors will not be required.

Figure 43. External Parallel Resonant Crystal Connections

<!-- image -->

## External Memory Interface

In addition to its internal program and data memories, the ADuC824 can access up to 64 Kbytes of external program memory (ROM/PROM/etc.) and up to 16 Mbytes of external data memory (SRAM).

To select from which code space (internal or external program memory) to begin executing instructions, tie the EA (external access) pin high or low, respectively. When EA is high (pulled up to VDD), user program execution will start at address 0 of the internal 8 Kbytes Flash/EE code space. When EA is low (tied to ground) user program execution will start at address 0 of the external code space. In either case, addresses above 1FFF hex (8K) are mapped to the external space.

Note that a second very important function of the EA pin is described in the Single Pin Emulation Mode section of this data sheet.

External program memory (if used) must be connected to the ADuC824 as illustrated in Figure 44. Note that 16 I/O lines (Ports 0 and 2) are dedicated to bus functions during external program memory fetches. Port 0 (P0) serves as a multiplexed address/data bus. It emits the low byte of the program counter (PCL) as an address, and then goes into a float state awaiting the arrival of the code byte from the program memory. During the time that the low byte of the program counter is valid on P0, the signal ALE (Address Latch Enable) clocks this byte into an address latch. Meanwhile, Port 2 (P2) emits the high byte of the program counter (PCH), then PSEN strobes the EPROM and the code byte is read into the ADuC824.

Figure 44. External Program Memory Interface

<!-- image -->

Note that program memory addresses are always 16 bits wide, even in cases where the actual amount of program memory used is less than 64 Kbytes. External program execution sacrifices two of the 8-bit ports (P0 and P2) to the function of addressing the program memory. While executing from external program memory, Ports 0 and 2 can be used simultaneously for read/write access to external data memory, but not for general-purpose I/O.

Though both external program memory and external data memory are accessed by some of the same pins, the two are completely independent of each other from a software point of view. For example, the chip can read/write external data memory while executing from external program memory.

Figure 45 shows a hardware configuration for accessing up to 64 Kbytes of external RAM. This interface is standard to any 8051 compatible MCU.

Figure 45. External Data Memory Interface (64 K Address Space)

<!-- image -->

If access to more than 64 Kbytes of RAM is desired, a feature unique to the ADuC824 allows addressing up to 16 Mbytes of external RAM simply by adding an additional latch as illustrated in Figure 46.

Figure 46. External Data Memory Interface (16 MBytes Address Space)

<!-- image -->

In either implementation, Port 0 (P0) serves as a multiplexed address/data bus. It emits the low byte of the data pointer (DPL) as an address, which is latched by a pulse of ALE prior to data being placed on the bus by the ADuC824 (write operation) or the SRAM (read operation). Port 2 (P2) provides the data pointer page byte (DPP) to be latched by ALE, followed by the data pointer high byte (DPH). If no latch is connected to P2, DPP is ignored by the SRAM, and the 8051 standard of 64 Kbyte external data memory access is maintained.

Detailed timing diagrams of external program and data memory read and write access can be found in the timing specification sections of this data sheet.

## Power-On Reset Operation

External POR (power-on reset) circuitry must be implemented to drive the RESET pin of the ADuC824. The circuit must hold the RESET pin asserted (high) whenever the power supply (DVDD) is below 2.5 V. Furthermore, VDD must remain above 2.5 V for at least 10 ms before the RESET signal is deasserted (low) by which time the power supply must have reached at least a 2.7 V level. The external POR circuit must be operational down to 1.2 V or less. The timing diagram of Figure 47 illustrates this functionality under three separate events: powerup, brownout, and power-down. Notice that when RESET is asserted (high) it tracks the voltage on DVDD.

Figure 47. External POR Timing

<!-- image -->

The best way to implement an external POR function to meet the above requirements involves the use of a dedicated POR chip, such as the ADM809/ADM810 SOT-23 packaged PORs from Analog Devices. Recommended connection diagrams for both active-high ADM810 and active-low ADM809 PORs are shown in Figure 48 and Figure 49 respectively.

## ADuC824

Figure 48. External Active High POR Circuit

<!-- image -->

Some active-low POR chips, such as the ADM809 can be used with a manual push-button as an additional reset source as illustrated by the dashed line connection in Figure 49.

Figure 49. External Active Low POR Circuit

<!-- image -->

## Power Supplies

The ADuC824's operational power supply voltage range is 2.7 V to 5.25 V. Although the guaranteed data sheet specifications are given only for power supplies within 2.7 V to 3.6 V or +5% of the nominal 5 V level, the chip will function equally well at any power supply level between 2.7 V and 5.25 V.

Separate analog and digital power supply pins (AVDD and DVDD respectively) allow AVDD to be kept relatively free of noisy digital signals often present on the system DVDD line. In this mode the part can also operate with split supplies; that is, using different voltage supply levels for each supply. For example, this means that the system can be designed to operate with a DVDD voltage level of 3 V while the AVDD level can be at 5 V or vice versa if required. A typical split supply configuration is show in Figure 50.

Figure 50. External Dual Supply Connections

<!-- image -->

## ADuC824

As an alternative to providing two separate power supplies, AVDD quiet by placing a small series resistor and/or ferrite bead between it and DVDD, and then decoupling AVDD separately to ground. An example of this configuration is shown in Figure 51. With this configuration other analog circuitry (such as op amps, voltage reference, etc.) can be powered from the AVDD supply line as well.

Figure 51. External Single Supply Connections

<!-- image -->

Notice that in both Figure 50 and Figure 51, a large value (10 µ F) reservoir capacitor sits on DVDD and a separate 10 µ F capacitor sits on AVDD. Also, local small-value (0.1 µ F) capacitors are located at each VDD pin of the chip. As per standard design practice, be sure to include all of these capacitors, and ensure the smaller capacitors are closest to each AV DD pin with trace lengths as short as possible. Connect the ground terminal of each of these capacitors directly to the underlying ground plane. Finally, it should also be noticed that, at all times, the analog and digital ground pins on the ADuC824 should be referenced to the same system ground reference point.

## Power Consumption

The 'CORE' values given represent the current drawn by DVDD, while the rest ('ADC,' and 'DAC') are pulled by the AVDD pin and can be disabled in software when not in use. The other on-chip peripherals (watchdog timer, power supply monitor, etc.) consume negligible current and are therefore lumped in with the 'CORE' operating current here. Of course, the user must add any currents sourced by the parallel and serial I/O pins, and that sourced by the DAC, in order to determine the total current needed at the ADuC824's supply pins. Also, current draw from the DVDD supply will increase by approximately 5 mA during Flash/EE erase and program cycles

## Power-Saving Modes

Setting the Idle and Power-Down Mode bits, PCON.0 and PCON.1 respectively, in the PCON SFR described in Table II, allows the chip to be switched from normal mode into idle mode, and also into full power-down mode.

In idle mode, the oscillator continues to run, but the core clock generated from the PLL is halted. The on-chip peripherals continue to receive the clock, and remain functional. The CPU status is preserved with the stack pointer, program counter, and all other internal registers maintain their data during idle mode. Port pins and DAC output pins also retain their states, and ALE and PSEN outputs go high in this mode. The chip will recover from idle mode upon receiving any enabled interrupt, or on receiving a hardware reset.

In power-down mode, both the PLL and the clock to the core are stopped. The on-chip oscillator can be halted or can continue to oscillate depending on the state of the oscillator power-down bit (OSC\_PD) in the PLLCON SFR. The TIC, being driven directly from the oscillator, can also be enabled during powerdown. All other on-chip peripherals however, are shut down. Port pins retain their logic levels in this mode, but the DAC output goes to a high-impedance state (three-state) while ALE and PSEN outputs are held low. During full power-down mode, the ADuC824 consumes a total of 5 µ A typically. There are five ways of terminating power-down mode:

## Asserting the RESET Pin (#15)

Returns to normal mode all registers are set to their default state and program execution starts at the reset vector once the Reset pin is de-asserted.

## Cycling Power

All registers are set to their default state and program execution starts at the reset vector.

## Time Interval Counter (TIC) Interrupt

Power-down mode is terminated and the CPU services the TIC interrupt, the RETI at the end of the TIC Interrupt Service Routine will return the core to the instruction after that which enabled power down.

## I 2 C or SPI Interrupt

Power-down mode is terminated and the CPU services the I 2 C/ SPI interrupt. The RETI at the end of the ISR will return the core to the instruction after that which enabled power down. It should be noted that the I 2 C/SPI power down interrupt enable bit (SERIPD) in the PCON SFR must first be set to allow this mode of operation.

## INT0 Interrupt

Power-down mode is terminated and the CPU services the INT0 interrupt. The RETI at the end of the ISR will return the core to the instruction after that which enabled power-down. It should be noted that the INT0 power-down interrupt enable bit (INT0PD) in the PCON SFR must first be set to allow this mode of operation.

## Grounding and Board Layout Recommendations

As with all high resolution data converters, special attention must be paid to grounding and PC board layout of ADuC824-based designs in order to achieve optimum performance from the ADCs and DAC.

Although the ADuC824 has separate pins for analog and digital ground (AGND and DGND), the user must not tie these to two separate ground planes unless the two ground planes are connected together very close to the ADuC824, as illustrated in the simplified example of Figure 52a. In systems where digital and analog ground planes are connected together somewhere else (at the system's power supply for example), they cannot be connected again near the ADuC824 since a ground loop would result. In these cases, tie the ADuC824's AGND and DGND pins all to the analog ground plane, as illustrated in Figure 52b. In systems with only one ground plane, ensure that the digital and analog components are physically separated onto separate halves of the board such that digital return currents do not flow near analog circuitry and vice versa. The ADuC824 can then be placed between the digital and analog sections, as illustrated in Figure 52c.

Figure 52. System Grounding Schemes

<!-- image -->

In all of these scenarios, and in more complicated real-life applications, keep in mind the flow of current from the supplies and back to ground. Make sure the return paths for all currents are as close as possible to the paths the currents took to reach their destinations. For example, do not power components on the analog side of Figure 52b with DVDD since that would force return currents from DVDD to flow through AGND. Also, try to avoid digital currents flowing under analog circuitry, which could happen if the user placed a noisy digital chip on the left half of the board in Figure 52c. Whenever possible, avoid large discontinuities in the ground plane(s) (such as are formed by a long trace on the same layer), since they force return signals to travel a longer path. And of course, make all connections to the ground plane directly, with little or no trace separating the pin from its via to ground.

If the user plans to connect fast logic signals (rise/fall time &lt; 5 ns) to any of the ADuC824's digital inputs, add a series resistor to each relevant line to keep rise and fall times longer than 5 ns at the ADuC824 input pins. A value of 100 Ω or 200 Ω is usually sufficient to prevent high-speed signals from coupling capacitively into the ADuC824 and affecting the accuracy of ADC conversions.

## ADuC824 System Self-Identification

In some hardware designs it may be an advantage for the software running on the ADuC824 target to identify the host MicroConverter. For example, code running on the ADuC824 may be used at future date to run on an ADuC816 MicroConverter host and the code may be required to operate differently.

The CHIPID SFR is a read-only register located at SFR address C2 hex. The top nibble of this byte is set to '0' to designate an ADuC824 host. For an ADuC816 host, the CHIPID SFR will contain the value '1' in the upper nibble.

## ADuC824

## OTHER HARDWARE CONSIDERATIONS

To facilitate in-circuit programming, plus in-circuit debug and emulation options, users will want to implement some simple connection points in their hardware that will allow easy access to download, debug, and emulation modes.

## In-Circuit Serial Download Access

Nearly all ADuC824 designs will want to take advantage of the in-circuit reprogrammability of the chip. This is accomplished by a connection to the ADuC824's UART, which requires an external RS-232 chip for level translation if downloading code from a PC. Basic configuration of an RS-232 connection is illustrated in Figure 53 with a simple ADM202-based circuit. If users would rather not design an RS-232 chip onto a board, refer to  Application Note, uC006 - A 4-Wire UART-to-PC Interface *, for a simple (and zero-cost-per-board) method of gaining in-circuit serial download access to the ADuC824.

In addition to the basic UART connections, users will also need a way to trigger the chip into download mode. This is accomplished via a 1 k Ω pull-down resistor that can be jumpered onto the PSEN pin, as shown in Figure 53. To get the ADuC824 into download mode, simply connect this jumper and powercycle the device (or manually reset the device, if a manual reset button is available) and it will be ready to receive a new program serially. With the jumper removed, the device will come up in normal mode (and run the program) whenever power is cycled or RESET is toggled.

Note that PSEN is normally an output (as described in the External Memory Interface section) and it is sampled as an input only on the falling edge of RESET (i.e., at power-up or upon an external manual reset). Note also that if any external circuitry unintentionally pulls PSEN low during power-up or reset events, it could cause the chip to enter download mode and therefore fail to begin user code execution as it should. To prevent this, ensure that no external signals are capable of pulling the PSEN pin low, except for the external PSEN jumper itself.

## Embedded Serial Port Debugger

From a hardware perspective, entry to serial port debug mode is identical to the serial download entry sequence described above. In fact, both serial download and serial port debug modes can be thought of as essentially one mode of operation used in two different ways.

Note that the serial port debugger is fully contained on the ADuC824 device, (unlike 'ROM monitor' type debuggers) and therefore no external memory is needed to enable in-system debug sessions.

## Single-Pin Emulation Mode

Also built into the ADuC824 is a dedicated controller for single-pin in-circuit emulation (ICE) using standard production ADuC824 devices. In this mode, emulation access is gained by connection to a single pin, the EA pin. Normally, this pin is hardwired either high or low to select execution from internal or external program memory space, as described earlier. To enable single-pin emulation mode, however, users will need to pull the EA pin high through a 1 k Ω resistor as shown in Figure 53. The emulator will then connect to the 2-pin header also shown in Figure 53. To be compatible with the standard connector that comes with the single-pin emulator available from Accutron Limited (www.accutron.com), use a 2-pin 0.1-inch pitch 'Friction Lock' header from Molex (www.molex.com) such as their part number 22-27-2021. Be sure to observe the polarity of this header. As represented in Figure 53, when the Friction Lock tab is at the right, the ground pin should be the lower of the two pins (when viewed from the top).

* Application note uC006 is available at www.analog.com/microconverter

Figure 53. Typical System Configuration

<!-- image -->

## Enhanced-Hooks Emulation Mode

ADuC824 also supports enhanced-hooks emulation mode. An enhanced-hooks-based emulator is available from Metalink Corporation (www.metaice.com). No special hardware support for these emulators needs to be designed onto the board since these are 'pod-style' emulators where users must replace the chip on their board with a header device that the emulator pod plugs into. The only hardware concern is then one of determining if adequate space is available for the emulator pod to fit into the system enclosure.

## Typical System Configuration

A typical ADuC824 configuration is shown in Figure 53. It summarizes some of the hardware considerations discussed in the previous paragraphs.

Figure 53 also includes connections for a typical analog measurement application of the ADuC824, namely an interface to an RTD (Resistive Temperature Device). The arrangement shown is commonly referred to as a 4-wire RTD configuration.

Here, the on-chip excitation current sources are enabled to excite the sensor. An external differential reference voltage is generated by the current sourced through resistor R1. This current also flows directly through the RTD, which generates a differential voltage directly proportional to temperature. This differential voltage is routed directly to the positive and negative inputs of the primary ADC (AIN1, AIN2 respectively). A second external resistor, R2, is used to ensure that absolute analog input voltage on the negative input to the primary ADC stays within that specified for the ADuC824, i.e., AGND + 100 mV.

It should also be noted that variations in the excitation current do not affect the measurement system as the input voltage from the RTD and reference voltage across R1 vary ratiometrically with the excitation current. Resistor R1 must, however, have a low temperature coefficient to avoid errors in the reference voltage over temperature.

## QUICKSTART DEVELOPMENT SYSTEM

The QuickStart Development System is a full featured, low cost development tool suite supporting the ADuC824. The system consists of the following PC-based (Windows-compatible) hardware and software development tools.

Hardware:

ADuC824 Evaluation Board, Plug-In Power Supply and Serial Port Cable

Code Development:

8051 Assembler C Compiler (2 Kcode Limited)

Code Functionality:

ADSIM, Windows MicroConverter Code Simulator

In-Circuit Code Download:

Serial Downloader

In-Circuit Debugger:

Serial Port Debugger

Miscellaneous Other:

CD-ROM Documentation and Two Additional Prototype Devices

Figures 54 shows the typical components of a QuickStart Development System while Figure 55 shows a typical debug session. A brief description of some of the software tools' components in the QuickStart Development System is given below.

MicroConverter

Figure 54. Components of the QuickStart Development System

<!-- image -->

## ADuC824

## Download-In-Circuit Serial Downloader

The Serial Downloader is a software program that allows the user to serially download an assembled program (Intel Hex format file) to the on-chip program FLASH memory via the serial COM1 port on a standard PC. An Application Note (uC004) detailing this serial download protocol is available from www.analog.com/ microconverter.

## DeBug-In-Circuit Debugger

The Debugger is a Windows application that allows the user to debug code execution on silicon using the MicroConverter UART serial port. The debugger provides access to all on-chip peripherals during a typical debug session as well as single-step and break-point code execution control.

## ADSIM-Windows Simulator

The Simulator is a Windows application that fully simulates all the MicroConverter functionality including ADC and DAC peripherals. The simulator provides an easy-to-use, intuitive, interface to the MicroConverter functionality and integrates many standard debug features; including multiple breakpoints, single stepping; and code execution trace capability. This tool can be used both as a tutorial guide to the part as well as an efficient way to prove code functionality before moving to a hardware platform.

The QuickStart development tool-suite software is freely available at the Analog Devices MicroConverter Website www.analog.com/microconverter.

Figure. 55. Typical Debug Session

<!-- image -->

## ADuC824

## Revision History

| Location                                                               | Page    |
|------------------------------------------------------------------------|---------|
| 5/02-Data Sheet changed from REV. A to REV. B.                         |         |
| Edits to SPECIFICATIONS . . . . . . . . . . . . . . . . . .            | . . . 3 |
| 3/01-Data Sheet changed from REV. 0 to REV. A.                         |         |
| Edits to RESET Description . . . . . . . . . . . . . . . . . .         | . . 19  |
| Edits to Figure 12 . . . . . . . . . . . . . . . . . . . . . . . . . . | . . 21  |

## OUTLINE DIMENSIONS

Dimensions shown in mm and (inches).

## 52-Lead Plastic Quad Flatpack MQFP (S-52)

<!-- image -->

CONTROLLING DIMENSIONS ARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN