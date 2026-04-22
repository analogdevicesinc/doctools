<!-- lastmod 2023-02-14 -->
## MAXQ611

## General Description

The  MAXQ611  is  a  low-power,  16-bit  MAXQ ®   microcontroller  designed  for  low-power  applications  including universal  remote  controls,  consumer  electronics,  and white  goods.  The  device  combines  a  powerful  16-bit RISC  microcontroller  and  integrated  peripherals  including  two  universal  synchronous/asynchronous  receivertransmitters (USART), SPI master/slave and I 2 C communications  ports,  along  with  an  IR  module  with carrier frequency generation and flexible port I/O capable of multiplexed keypad control.

The  device  provides  80KB  of  flash  memory  and  2KB  of data SRAM.

For the ultimate in low-power battery-operated performance, the device includes an ultra-low-power stop mode.  In  this  mode,  the  minimum  amount  of  circuitry  is powered. Wake-up sources include external interrupts, the power-fail interrupt, and a timer interrupt.

## Applications

- Universal Remote Controls for Tablets
- Universal Remote Controls for Smartphones

## Block Diagram

<!-- image -->

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

19-7309; Rev 1; 12/14

## Infrared Remote Control System-On-Chip

## Benefits and Features

- Fast, Compact Architecture Allows Easy Integration into Applications
- Internal 12MHz Oscillator Requires No External Components
- Efficient, 16-Bit MAXQ20S RISC Core
- 1.7V to 3.6V Wide Operating Range
-  80KB Flash Program Memory
- 2KB SRAM for Data Storage
- Default V PFW  Compatible with MAXQ610
- Integrated IR Module Reduces Cost and Development Time
- Transmit and Receive (Code Learning) Modes
- Automatic Carrier Generation/Modulation
- Glitch Filter Improves Noise Immunity
- Configurable High-Current Driver
- Peripherals Support Multiple Applications
- Up to 32 (TQFN) or 38 (Bare Die) GPIO
- Two 16-Bit Programmable Timers/Counters Include Capture/Compare Functionality
- SPI, I 2 C, and Two USART Busses
-  Programmable Watchdog Timer Enhances System Stability
- Low Power Consumption Maximizes Battery Life
- Power-Fail Warning Circuit Minimizes Effects of Power Fluctuation
- Power-On and Brownout Reset Circuitry
- 0.15µA (typ), 2.0µA (max) in Stop Mode, TA = +25°C, Power-Fail Monitor Disabled
- 2.0mA (typ) at 12MHz in Active Mode

Ordering Information/Selector Guide appears at end of data sheet.

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated. com/errata .

<!-- image -->

## MAXQ611

## Infrared Remote Control System-On-Chip

| TABLE OF CONTENTS                                              | TABLE OF CONTENTS   |
|----------------------------------------------------------------|---------------------|
| General Description . . . . . . . . . . . . . . . . . .        | . 1                 |
| Applications . . . . . . . . . . . . . . . . . . . . . . . .   | . 1                 |
| Benefits and Features . . . . . . . . . . . . . . . .          | . 1                 |
| Block Diagram . . . . . . . . . . . . . . . . . . . . . .      | . 1                 |
| Absolute Maximum Ratings . . . . . . . . . . . .               | . 4                 |
| Package Thermal Characteristics (Note 1)                       | . 4                 |
| Electrical Characteristics . . . . . . . . . . . . . .         | . 4                 |
| Typical Operating Characteristics . . . . . . .                | . 6                 |
| Pin Configuration . . . . . . . . . . . . . . . . . . . .      | . 7                 |
| Pin Description. . . . . . . . . . . . . . . . . . . . . .     | . 7                 |
| MAXQ611 Detailed Description . . . . . . . . .                 | 10                  |
| MAXQ20S Architecture . . . . . . . . . . . . . . .             | 10                  |
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . .   | 10                  |
| Memory Protection . . . . . . . . . . . . . . . .              | . 10                |
| Stack Memory. . . . . . . . . . . . . . . . . . . .            | . 11                |
| Utility ROM . . . . . . . . . . . . . . . . . . . . . .        | . 11                |
| Watchdog Timer. . . . . . . . . . . . . . . . . . . . .        | .11                 |
| IR Module . . . . . . . . . . . . . . . . . . . . . . . . .    | 12                  |
| Timer/Counter Type B . . . . . . . . . . . . . . . .           | 12                  |
| Serial Peripherals. . . . . . . . . . . . . . . . . . . .      | 12                  |
| SPI. . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 12                |
| I 2 C. . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . 12                |
| USART . . . . . . . . . . . . . . . . . . . . . . . . .        | . 13                |
| General-Purpose I/0 and                                        |                     |
| External Interrupts . . . . . . . . . . . . . . . . . . .      | 13                  |
| On-Chip Oscillator . . . . . . . . . . . . . . . . . . .       | 13                  |
| Low-Power Operating Modes . . . . . . . . . .                  | 13                  |
| Power-Fail Detection. . . . . . . . . . . . . . .              | . 14                |
| Applications Information. . . . . . . . . . . . . . .          | 14                  |
| Grounds and Bypassing . . . . . . . . . . . .                  | . 14                |
| Additional Documentation . . . . . . . . . . . . .             | 18                  |
| Development and Technical Support. . . . .                     | 19                  |
| Ordering Information/Selector Guide. . . . .                   | 19                  |
| Package Information . . . . . . . . . . . . . . . . .          | 19                  |
| Appendix A. . . . . . . . . . . . . . . . . . . . . . . . .    | 20                  |

## MAXQ611

## Infrared Remote Control System-On-Chip

| TABLE OF CONTENTS (continued)                                                                                                                                                                                 | TABLE OF CONTENTS (continued)   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| I 2C Serial Peripheral Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                   | .20                             |
| I 2C Serial Peripheral Specification (continued) . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                          | . 21                            |
| I 2C Serial Diagrams. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                       | . 22                            |
| Serial Peripheral Interface (SPI) Specifications . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                          | .23                             |
| SPI Timing Diagrams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                         | . 24                            |
| USART Mode 0 Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                     | . 25                            |
| USART Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                      | . 25                            |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                    | . 26                            |
| LIST OF FIGURES                                                                                                                                                                                               | LIST OF FIGURES                 |
| Figure 1. Power-Fail Detection During Normal Operation . . . . . . . . . . . . . . . . . . . . .                                                                                                              | . 14                            |
| Figure 2. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled                                                                                                                               | . 16                            |
| Figure 3. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled . . . . .                                                                                                                           | . 17                            |
| Figure 4. Series Resistors (R S ) for Protecting Against High-Voltage Spikes . . . . . .                                                                                                                      | . 22                            |
| Figure 5. I 2 C Bus Controller Timing Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                     | . 22                            |
| Figure 6. SPI Master Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                         | . 24                            |
| Figure 7. SPI Slave Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                        | . 24                            |
| Figure 8. USART Timing Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                  | . 25                            |
| LIST OF TABLES                                                                                                                                                                                                | LIST OF TABLES                  |
| Table 1. Watchdog Timer Settings. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                 | . .11                           |
| Table 2. MAXQ611 GPIO and External Interrupts . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                           | . 13                            |
| Table 3. Power-Fail Detection States During Normal Operation . . . . . . . . . . . . . . . .                                                                                                                  | . 15                            |
| Table 4. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled.                                                                                                                               | . 16                            |
| Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled                                                                                                                               | . 17                            |
| Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . 18                            |

## MAXQ611

## Absolute Maximum Ratings

(All voltages with respect to GND.)

Voltage Range on V DD   .........................................-0.3V to +3.6V Voltage Range on Any Lead Except V DD   ....-0.3V to (V DD  + 0.5V) Continuous Power Dissipation (T A  = +70°C) TQFN (multilayer board) (derate 37mW/°C above +70°C)  ................................2963mW

## Infrared Remote Control System-On-Chip

| Operating Temperature Range........................... -20°C to +70°C       |
|-----------------------------------------------------------------------------|
| Storage Temperature Range............................ -65°C to +150°C       |
| Soldering Temperature (reflow).......................................+260°C |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Package Thermal Characteristics (Note 1)

## TQFN

Junction-to-Ambient Thermal Resistance (θ JA )  ...........27°C/W Junction-to-Case Thermal Resistance (θ JC )..................1°C/W

Note 1: Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a four-layer board. For detailed information on package thermal considerations, refer to www.maximintegrated.com/thermal-tutorial .

## Electrical Characteristics

(Limits are 100% tested at T A  = +25°C and T A  = +70°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                       | SYMBOL    | CONDITIONS                     | MIN   | TYP   | MAX   | UNITS   |
|---------------------------------|-----------|--------------------------------|-------|-------|-------|---------|
| POWER                           |           |                                |       |       |       |         |
| Supply Voltage                  | V DD      |                                | V RST |       | 3.6   | V       |
| 1.8V Internal Regulator         | V REG18   |                                | 1.62  | 1.80  | 1.98  | V       |
| Power-Fail Warning Voltage      | V PFW1_70 | PFWARNCN = 0000                | 1.65  | 1.70  | 1.75  | V       |
| Power-Fail Warning Voltage      | V PFW1_80 | PFWARNCN = 0001 (default), GBD | 1.75  | 1.80  | 1.85  | V       |
| Power-Fail Warning Voltage      | V PFW1_90 | PFWARNCN = 0010, GBD           | 1.85  | 1.90  | 1.95  | V       |
| Power-Fail Warning Voltage      | V PFW2_00 | PFWARNCN = 0011, GBD           | 1.94  | 2.00  | 2.06  | V       |
| Power-Fail Warning Voltage      | V PFW2_10 | PFWARNCN = 0100, GBD           | 2.04  | 2.10  | 2.16  | V       |
| Power-Fail Warning Voltage      | V PFW2_20 | PFWARNCN = 0101, GBD           | 2.14  | 2.20  | 2.26  | V       |
| Power-Fail Warning Voltage      | V PFW2_30 | PFWARNCN = 0110, GBD           | 2.24  | 2.30  | 2.36  | V       |
| Power-Fail Warning Voltage      | V PFW2_40 | PFWARNCN = 0111, GBD           | 2.33  | 2.40  | 2.47  | V       |
| Power-Fail Warning Voltage      | V PFW2_50 | PFWARNCN = 1000, GBD           | 2.43  | 2.50  | 2.57  | V       |
| Power-Fail Warning Voltage      | V PFW2_60 | PFWARNCN = 1001, GBD           | 2.53  | 2.60  | 2.67  | V       |
| Power-Fail Warning Voltage      | V PFW2_70 | PFWARNCN = 1010, GBD           | 2.62  | 2.70  | 2.78  | V       |
| Power-Fail Warning Voltage      | V PFW2_80 | PFWARNCN = 1011, GBD           | 2.72  | 2.80  | 2.88  | V       |
| Power-Fail Warning Voltage      | V PFW2_90 | PFWARNCN = 1100, GBD           | 2.82  | 2.90  | 2.98  | V       |
| Power-Fail Warning Voltage      | V PFW3_00 | PFWARNCN = 1101, GBD           | 2.91  | 3.00  | 3.09  | V       |
| Power-Fail Warning Voltage      | V PFW3_10 | PFWARNCN = 1110, GBD           | 3.01  | 3.10  | 3.19  | V       |
| Power-Fail Warning Voltage      | V PFW3_20 | PFWARNCN = 1111, GBD           | 3.11  | 3.20  | 3.29  | V       |
| Power-Fail Reset Voltage        | V RST     |                                | 1.64  |       | 1.70  | V       |
| Power-Fail Warning/Reset Offset | V PFWRST  | PFWARNCN = 0000, V PFW > V RST | 30    | 30    | 30    | mV      |
| Power-On Reset Voltage          | V POR     | Monitors V DD                  | 1.2   | 1.2   | 1.2   | V       |
| RAM Data Retention Voltage      | V DRV     |                                | 1.0   | 1.0   | 1.0   | V       |

## Electrical Characteristics (continued)

(Limits are 100% tested at T A  = +25°C and T A  = +85°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                                      | SYMBOL                                    | CONDITIONS                                                                                                                | MIN                                       | TYP                                       | MAX                                       | UNITS                                     |
|------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Active Current                                 | I DD_1                                    | f SYS = 12MHz, executing code from flash memory, all inputs connected to GND/V DD , outputs do not source or sink current |                                           | 2                                         | 3.7                                       | mA                                        |
| Stop Mode Current                              | I S1                                      | T A = +25°C (power-fail off)                                                                                              |                                           | 0.15                                      | 2.0                                       | µA                                        |
| Stop Mode Current                              | I S1                                      | T A = -20°C to +70°C (power-fail off)                                                                                     |                                           | 0.15                                      | 8                                         | µA                                        |
| Stop Mode Current                              | I S2                                      | T A = +25°C (power-fail on)                                                                                               |                                           | 22                                        | 31                                        | µA                                        |
| Stop Mode Current                              | I S2                                      | T A = -20°C to +70°C (power-fail on)                                                                                      |                                           | 27.6                                      | 38                                        | µA                                        |
| Power Consumption During Power-On Reset        | I POR                                     | V DD < V POR                                                                                                              |                                           | 100                                       |                                           | nA                                        |
| Stop Mode Resume Time                          | t ON                                      |                                                                                                                           |                                           | 3/f NANO + 1024/ f OSC                    |                                           | µs                                        |
| CLOCKS                                         | CLOCKS                                    | CLOCKS                                                                                                                    | CLOCKS                                    | CLOCKS                                    | CLOCKS                                    | CLOCKS                                    |
| Internal Oscillator Frequency                  | f OSC                                     |                                                                                                                           |                                           | 12                                        |                                           | MHz                                       |
| Internal Oscillator Variability                | f OSC_VAR                                 | T A = +25°C, V DD = 1.8V ±5%                                                                                              |                                           | ±0.5%                                     |                                           |                                           |
| Internal Oscillator Variability                | f OSC_VAR                                 | T A = +25°C, V DD = 1.8V                                                                                                  |                                           |                                           | ±0.5%                                     |                                           |
| Internal Oscillator Variability                | f OSC_VAR                                 | T A = -20°C to +70°C                                                                                                      |                                           |                                           | ±1%                                       |                                           |
| System Clock Frequency                         | f SYS                                     | f OSC /system clock divisor (1/2/4/8/256)                                                                                 |                                           |                                           | 12                                        | MHz                                       |
| System Clock Period                            | t SYS                                     |                                                                                                                           |                                           | 1/f SYS                                   |                                           |                                           |
| Nanopower Ring Frequency                       | f NANO                                    | T A = +25°C                                                                                                               | 3.0                                       | 12.0                                      | 20.0                                      | kHz                                       |
| Nanopower Ring Frequency                       | f NANO                                    | T A = +25°C, V DD = V POR                                                                                                 | 1.7                                       | 2.4                                       |                                           | kHz                                       |
| GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS      | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS                                                                                 | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS |
| Input Low Voltage for IRRX and All Port Pins   | V IL                                      |                                                                                                                           | V GND                                     |                                           | 0.3 x V DD                                | V                                         |
| Input High Voltage for IRRX and All Port Pins  | V IH                                      |                                                                                                                           | 0.7 x V DD                                |                                           | V DD                                      | V                                         |
| Input Hysteresis (Schmitt)                     | V IHYS                                    | V DD = 3.3V, T A = +25°C                                                                                                  |                                           | 300                                       |                                           | mV                                        |
| Output Low Voltage for All Port Pins           | V OL                                      | V DD = 3.6V, I OL = 11mA                                                                                                  |                                           | 0.4                                       | 0.5                                       | V                                         |
| Output Low Voltage for All Port Pins           | V OL                                      | V DD = 2.35V, I OL = 8mA                                                                                                  |                                           | 0.4                                       | 0.5                                       | V                                         |
| Output Low Voltage for All Port Pins           | V OL                                      | V DD = 1.8V, I OL = 4.5mA                                                                                                 |                                           | 0.4                                       | 0.5                                       | V                                         |
| Output High Voltage All Port Pins              | V OH                                      | IOH = -2mA                                                                                                                | V DD - 0.5                                |                                           | V DD                                      | V                                         |
| Input/Output Pin Capacitance for All Port Pins | C IO                                      |                                                                                                                           |                                           | 15                                        |                                           | pF                                        |
| Input Leakage Current for All Pins             | I L                                       |                                                                                                                           | -100                                      |                                           | +100                                      | nA                                        |

## Electrical Characteristics (continued)

(Limits are 100% tested at T A  = +25°C and T A  = +85°C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                                                     | SYMBOL                            | CONDITIONS                                                                          | MIN                               | TYP                               | MAX                               | UNITS                             |
|---------------------------------------------------------------|-----------------------------------|-------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| Input Pullup Resistor for RESET , IRRX, and All Port Pins     | R PU                              | V DD = 3.0V, V OL = 0.4V                                                            | 16                                | 28                                | 39                                | kΩ                                |
| Input Pullup Resistor for RESET , IRRX, and All Port Pins     | R PU                              | V DD = 1.8V, V OL = 0.4V                                                            | 18                                | 31                                | 43                                | kΩ                                |
| IR MODULE WITH INTERNAL AMPLIFIER                             | IR MODULE WITH INTERNAL AMPLIFIER | IR MODULE WITH INTERNAL AMPLIFIER                                                   | IR MODULE WITH INTERNAL AMPLIFIER | IR MODULE WITH INTERNAL AMPLIFIER | IR MODULE WITH INTERNAL AMPLIFIER | IR MODULE WITH INTERNAL AMPLIFIER |
| Input Filter Pulse-Width Reject                               | t IRRX_R                          |                                                                                     |                                   |                                   | 50                                | ns                                |
| Input Filter Pulse-Width Accept                               | t IRRX_A                          |                                                                                     | 300                               |                                   |                                   | ns                                |
| IRTX Sink Current                                             | I IRTX                            | V IRTX ≥ 0.25V                                                                      | 200                               |                                   |                                   | mA                                |
| WAKE-UP TIMER                                                 | WAKE-UP TIMER                     | WAKE-UP TIMER                                                                       | WAKE-UP TIMER                     | WAKE-UP TIMER                     | WAKE-UP TIMER                     | WAKE-UP TIMER                     |
| Wake-Up Timer Interval                                        | t WAKEUP                          |                                                                                     | 1/ f NANO                         |                                   | 65,535/ f NANO                    | s                                 |
| FLASH MEMORY                                                  | FLASH MEMORY                      | FLASH MEMORY                                                                        | FLASH MEMORY                      | FLASH MEMORY                      | FLASH MEMORY                      | FLASH MEMORY                      |
| Flash Memory Controller Clock Frequency During Program/ Erase | f FP                              | f SRC /(FCKDIV[3:0] + 1) must equal 1MHz, verify PFI = 0 before calling utility ROM | 1                                 | 1                                 | 1                                 | MHz                               |
| Flash Mass Erase Time                                         | t ME                              |                                                                                     | 40                                | 40                                | 40                                | ms                                |
| Flash Page Erase Time                                         | t ERASE                           |                                                                                     | 40                                | 40                                | 40                                | ms                                |
| Flash Programming Time per Word                               | t PROG                            | Excluding utility ROM overhead                                                      | 40                                | 40                                | 40                                | μs                                |
| Write/Erase Cycles                                            |                                   |                                                                                     | 20,000                            | 20,000                            | 20,000                            | Cycles                            |
| Data Retention                                                |                                   | T A = +25°C                                                                         | 100                               | 100                               | 100                               | Years                             |

## Typical Operating Characteristics

(T A  = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

## MAXQ611

## Pin Configuration

<!-- image -->

## Pin Description

| PIN         | PIN            | NAME        | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------|----------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DIE         | TQFN           | NAME        | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| POWER       | POWER          | POWER       | POWER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 24, 46      | 19, 41         | VDD         | Supply Voltage. Bypass to ground with a 4.7µF capacitor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 22, 47      | 17, 20, 28, 42 | GND         | Ground. Connect directly to the ground plane.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 23          | 18             | REG18       | 1.8V Regulator Output. This pin must be connected to ground through a 1.0μF external capacitor. The capacitor should be placed as close to this pin as possible. No devices other than the capacitor should be connected to this pin.                                                                                                                                                                                                                                                                                                                     |
| -           | -              | EP          | Exposed Pad. Connect to GND or leave electrically unconnnected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RESET       | RESET          | RESET       | RESET                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 45          | 40             | RESET       | Digital, Active-Low Reset Input/Output. The device remains in reset while this bidirectional pin is in its active state. When the pin transitions to its inactive state the device exits reset and begins execution. External circuits must be able to sink in excess of 250µA to overcome the internal pullup current source and take the pin to its active state. This pin should be left unconnected if the application does not provide a reset signal to the device. This pin is driven active as an output when an internal reset condition occurs. |
| IR FUNCTION | IR FUNCTION    | IR FUNCTION | IR FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 49          | 44             | IRRX        | IR Receive Input. This pin defaults to a high-impedance input after reset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 48          | 43             | IRTX        | IR Transmit Output. This pin defaults to a high-impedance input after reset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## MAXQ611

## Pin Description (continued)

| PIN                                       | PIN                                       | NAME                                      | FUNCTION                                                                      |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------------------------------------------|
| DIE                                       | TQFN                                      | NAME                                      | FUNCTION                                                                      |
| GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTIONS                                     |
| 1                                         | 1                                         | P0.0                                      | P0.0: General-Purpose I/O, Port 0 Pin 0                                       |
| 3                                         | 3                                         | P0.1/RX0                                  | P0.1: General Purpose I/O, Port 0 Pin 1 RX0: USART 0 Receive                  |
| 5                                         | 5                                         | P0.2/TX0                                  | P0.2: General-Purpose I/O, Port 0 Pin 2 TX0: USART 0 Transmit                 |
| 6                                         | 6                                         | P0.3/RX1/ SCL                             | P0.3: General-Purpose I/O, Port 0 Pin 3 RX1: USART 1 Receive SCL: I 2 C Clock |
| 8                                         | 7                                         | P0.4/TX1/ SDA                             | P0.4: General-Purpose I/O, Port 0 Pin 4 TX1: USART 1 Transmit SDA: I 2 C Data |
| 9                                         | 8                                         | P0.5/TBA0/ TBA1                           | P0.5: General-Purpose I/O, Port 0 Pin 5 TBA0: Timer B A0 TBA1: Timer B A1     |
| 11                                        | 9                                         | P0.6/TBB0                                 | P0.6: General-Purpose I/O, Port 0 Pin 6 TBB0: Timer B B0                      |
| 13                                        | 10                                        | P0.7/TBB1                                 | P0.7: General-Purpose I/O, Port 0 Pin 7 TBB1: Timer B B1                      |
| 15                                        | 11                                        | P1.0/INT0                                 | P1.0: General-Purpose I/O, Port 1 Pin 0 INT0: External Interrupt 0            |
| 17                                        | 12                                        | P1.1/INT1                                 | P1.1: General-Purpose I/O, Port 1 Pin 1 INT1: External Interrupt 1            |
| 18                                        | 13                                        | P1.2/INT2                                 | P1.2: General-Purpose I/O, Port 1 Pin 2 INT2: External Interrupt 2            |
| 19                                        | 14                                        | P1.3/INT3                                 | P1.3: General-Purpose I/O, Port 1 Pin 3 INT3: External Interrupt 3            |
| 25                                        | 21                                        | P1.4/INT4                                 | P1.4: General-Purpose I/O, Port 1 Pin 4 INT4: External Interrupt 4            |
| 28                                        | 22                                        | P1.5/INT5                                 | P1.5: General-Purpose I/O, Port 1 Pin 5 INT5: External Interrupt 5            |
| 31                                        | 25                                        | P1.6/INT6                                 | P1.6: General-Purpose I/O, Port 1 Pin 6 INT6: External Interrupt 6            |
| 32                                        | 26                                        | P1.7/INT7                                 | P1.7: General-Purpose I/O, Port 1 Pin 7 INT7: External Interrupt 7            |
| 33                                        | 27                                        | P2.0/MOSI                                 | P2.0: General-Purpose I/O, Port 2 Pin 0 MOSI: SPI Master-Out/Slave-In         |
| 34                                        | 29                                        | P2.1/MISO                                 | P2.1: General-Purpose I/O, Port 2 Pin 1 MISO: SPI Master-In/Slave-Out         |
| 37                                        | 32                                        | P2.2/SCLK                                 | P2.2: General-Purpose I/O, Port 2 Pin 2 SCLK: SPI Clock                       |

## MAXQ611

## Pin Description (continued)

| PIN            | PIN            | NAME           | FUNCTION                                                                                                                         |
|----------------|----------------|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| DIE            | TQFN           |                |                                                                                                                                  |
| 38             | 33             | P2.3/SSEL      | P2.3: General-Purpose I/O, Port 2 Pin 3 SSEL: SPI Slave Select                                                                   |
| 39             | 34             | P2.4/TCK       | P2.4: General-Purpose I/O, Port 2 Pin 4 TCK: JTAG Clock. The POR default for the PD2.4 bit activates the weak pullup.            |
| 40             | 35             | P2.5/TDI       | P2.5: General-Purpose I/O, Port 2 Pin 5 TDI: JTAG Data In. The POR default for the PD2.5 bit activates the weak pullup.          |
| 43             | 38             | P2.6/TMS       | P2.6: General-Purpose I/O, Port 2 Pin 6 TMS: JTAG Test Mode Select. The POR default for the PD2.6 bit activates the weak pullup. |
| 44             | 39             | P2.7/TDO       | P2.7: General-Purpose I/O, Port 2 Pin 7 TDO: JTAG Data Output. The POR default for the PD2.7 bit activates the weak pullup.      |
| 2              | 2              | P3.0/INT8      | P3.0: General-Purpose I/O, Port 3 Pin 0 INT8: External Interrupt 8                                                               |
| 4              | 4              | P3.1/INT9      | P3.1: General-Purpose I/O, Port 3 Pin 1 INT9: External Interrupt 9                                                               |
| 20             | 15             | P3.2/INT10     | P3.2: General-Purpose I/O, Port 3 Pin 2 INT10: External Interrupt 10                                                             |
| 21             | 16             | P3.3/INT11     | P3.3: General-Purpose I/O, Port 3 Pin 3 INT11: External Interrupt 11                                                             |
| 35             | 30             | P3.4/INT12     | P3.4: General-Purpose I/O, Port 3 Pin 4 INT12: External Interrupt 12                                                             |
| 36             | 31             | P3.5/INT13     | P3.5: General-Purpose I/O, Port 3 Pin 5 INT13: External Interrupt 13                                                             |
| 41             | 36             | P3.6/INT14     | P3.6: General-Purpose I/O, Port 3 Pin 6 INT14: External Interrupt 14                                                             |
| 42             | 37             | P3.7/INT15     | P3.7: General-Purpose I/O, Port 3 Pin 7 INT15: External Interrupt 15                                                             |
| 7              | -              | P4.0           | P4.0: General-Purpose I/O, Port 4 Pin 0                                                                                          |
| 10             | -              | P4.1           | P4.1: General-Purpose I/O, Port 4 Pin 1                                                                                          |
| 12             | -              | P4.2           | P4.2: General-Purpose I/O, Port 4 Pin 2                                                                                          |
| 14             | -              | P4.3           | P4.3: General-Purpose I/O, Port 4 Pin 3                                                                                          |
| 16             | -              | P4.4           | P4.4: General-Purpose I/O, Port 4 Pin 4                                                                                          |
| 26             | -              | P4.5           | P4.5: General-Purpose I/O, Port 4 Pin 5                                                                                          |
| NO CONNECTIONS | NO CONNECTIONS | NO CONNECTIONS | NO CONNECTIONS                                                                                                                   |
| -              | 23, 24         | D.N.C.         | Do Not Connect. Internally connected.                                                                                            |
| 27, 29, 30     | -              | N.C.           | Do Not Connect                                                                                                                   |

## MAXQ611 Detailed Description

The  device  provides  integrated,  low-cost  solutions  that simplify  the  design  of  IR  communications  equipment such  as  universal  remote  controls.  The  internal  12MHz oscillator  requires  no  external  components.  Standard features include the highly optimized, single-cycle, MAXQ, 16-bit  RISC  core;  80KB  flash  memory;  2KB  data  RAM; soft stack; 16 general-purpose registers; and three data pointers. The MAXQ core has the industry's best MIPS/ mA rating, allowing developers to achieve the same performance as competing microcontrollers at substantially lower clock rates. Application-specific peripherals include flexible  timers  for  generating  IR  carrier  frequencies  and modulation. A high-current IR drive pin operates with an internal receiver amplifier without external components. It also  includes  general-purpose I/O pins ideal for keypad matrix  input,  and  a  power-fail-detection  circuit  to  notify the  application  when  the  supply  voltage  is  nearing  the microcontroller's minimum operating voltage.

The  combination  of  high-performance  instructions  and ultra-low  stop-mode  current  increases  battery  life  over competing  microcontrollers.  An  integrated  POR  circuit with  brownout  support  resets  the  device  to  a  known condition following a power-up cycle or brownout condition. Additionally, a power-fail warning flag is set, and a powerfail interrupt can be generated when the system voltage falls  below  the  power-fail  warning  voltage,  V PFW .  The power-fail warning feature allows the application to notify the  user  that  the  system  supply  is  low  and  appropriate action should be taken.

## MAXQ20S Architecture

The low-power MAXQ20S  pipelined core supports the  Harvard  memory  architecture  with  separate  16-bit program  and  data  address  busses.  Most  of  the  16-bit instruction  words  execute  in  a  single  clock  cycle  with performance approaching 1MIPS per MHz.

The  16-bit  data  path  is  implemented  around  register modules,  and  each  register  module  contributes  specific functions to the core. The accumulator module consists of  sixteen  16-bit  registers  and  is  tightly  coupled  with the arithmetic logic unit (ALU). A configurable soft stack supports program flow.

Execution  of  instructions  is  triggered  by  data  transfer  between  functional  register  modules  or  between  a functional  register  module  and  memory.  Because  data movement involves only source and destination modules, circuit  switching  activities  are  limited  to  active  modules only.  This  approach  localizes  power  dissipation  and minimizes switching noise.

The  MAXQ  instruction  set  is  highly  orthogonal.  All arithmetical and logical operations can use any register in conjunction with the accumulator. Data can be arranged in 8 or 16 bits, and movement is supported between any two registers. Memory is accessed through specific datapointer registers with autoincrement/decrement support.

## Memory

The microcontroller incorporates several memory types:

- 80KB flash memory
- 2KB SRAM data memory
- Dedicated utility ROM
- Soft stack

## Memory Protection

The optional  memory-protection  feature  segments  code memory into three areas with different access privileges. This allows unique code segments to be loaded at different steps in the manufacturing process, while restricting access to higher-privilege segments that might have been loaded  earlier  in  the  process.  The  memory  protection segments are:

- System (highest privilege)
- User-loader (medium privilege)
- User-application (lowest privilege)

Code in the system area is typically loaded by the OEM, and can be read/write protected from code executing in lower privilege segments. In a similar manner, the userloader  segment  can  be  read/write  protected  from  code executing in the user-application area.

## MAXQ611

## Stack Memory

The  MAXQ20S  core  provides  a  soft  stack  that  can  be used to  store  program  return  addresses  (for  subroutine calls  and  interrupt  handling)  and  other  general-purpose data.  This  soft  stack  is  located  in  data  memory,  which means  that  the  SRAM  data  memory  must  be  shared between the soft stack and general-purpose application data storage. However, the location and size of the soft stack is determined by the user, providing maximum flexibility  when  allocating resources for a particular application.  The  stack  is  used  automatically  by  the  processor when the CALL, RET, and RETI instructions are executed and  when  an  interrupt  is  serviced.  An  application  can also store and retrieve values explicitly using the stack by means of the PUSH, POP, and POPI instructions.

The  SP  pointer  indicates  the  current  top  of  the  stack, which initializes by default to the top of the SRAM data memory. As  values  are  pushed  onto  the  stack,  the  SP pointer  decrements,  which  means  that  the  stack  grows downward  towards  the  bottom  (lowest  address)  of  the data memory. Popping values off the stack causes the SP pointer value to increase.

## Utility ROM

The utility ROM is located in program space beginning at address 8000h. This ROM includes the following routines:

- Production test routines (internal memory  tests, memory  loader,  etc.),  which  are  used  for  internal testing only, and are generally of no use to the endapplication developer
- User-callable routines for buffer copying and fast table lookup

## Table 1. Watchdog Timer Settings

|   WD (CD = 00) | PERIOD      | INTERRUPT (f SYS = 12MHz)   | RESET (f SYS = 12MHz)   |
|----------------|-------------|-----------------------------|-------------------------|
|             00 | 2 15 /f SYS | 2.7ms                       | 2.7ms + 42.7µs          |
|             01 | 2 18 /f SYS | 21.9ms                      | 21.9ms + 42.7µs         |
|             10 | 2 21 /f SYS | 174.7ms                     | 147.7ms + 42.7µs        |
|             11 | 2 24 /f SYS | 1.4s                        | 1.4s + 42.7µs           |

## Infrared Remote Control System-On-Chip

Following any reset, execution begins in the utility ROM at address 8000h. At this point, unless test mode has been invoked  (which  requires  special  programming  through the JTAG interface), the utility ROM in the device always automatically jumps to location 0000h, which is the beginning of user application code.

## Watchdog Timer

The  internal  watchdog  timer  greatly  increases  system reliability. The  timer resets the device if software execution is  disturbed.  The  watchdog  timer  is  a  free-running counter designed to be periodically reset by the application software. If software is operating correctly, the counter is periodically reset and never reaches its maximum count. However,  if  software  operation  is  interrupted,  the  timer does not reset, triggering a system reset and optionally a watchdog timer interrupt. This protects the system against electrical  noise  or  electrostatic  discharge  (ESD)  upsets that  could  cause  uncontrolled  processor  operation.  The internal  watchdog  timer  is  an  upgrade  to  older  designs with  external  watchdog  devices,  reducing  system  cost and simultaneously increasing reliability.

The watchdog timer functions as the source of both the watchdog  timer  timeout  and  the  watchdog  timer  reset. The timeout period is user-programmable using the WD bits as shown in Table 1. An interrupt is generated when the timeout period expires if the interrupt is enabled. All watchdog  timer  resets  follow  the  programmed  interrupt timeouts  by  512  system  clock  cycles.  If  the  watchdog timer is not restarted for another full interval in this time period,  a  system  reset  occurs  when  the  reset  timeout expires. See Table 1.

## MAXQ611

## IR Module

The  IR  module  provides  low-speed  communication capability  for  remote  control  applications.  Dedicated timers simplify implementation and maximize application performance. The device is used in the traditional learning circuit mode, with the receiver accepting digital input. The peripheral provides the following features:

- Transmit and receive (code learning) modes
- Automatic carrier generation/modulation
- Pulse-width glitch filter improves noise immunity
- Configurable high-current driver supports multiple LED types
- Supports receiver currents up 8µA
- Transmit frequency up to 115.2kHz

One instance of the IR peripheral is provided.

## Timer/Counter Type B

Timer/counter type B is an enhanced 16-bit timer that provides input clock prescaling and pulse-width modulation (PWM) through set/reset/compare output functionality. It provides the following features:

- 16-bit timer/counter
- 16-bit up/down autoreload
- Counter function of external pulse
- 16-bit timer with capture
- 16-bit timer with compare
- Set/reset/toggle output state on comparator match
- Clock output mode
- Input/output enhancements for pulse-width modulation
- Timer input prescale option

Two instances of the peripheral are provided.

## Infrared Remote Control System-On-Chip

## Serial Peripherals

## SPI

The  serial  peripheral  interface  (SPI)  is  a  four-wire  bus providing  fast,  synchronous,  full-duplex  communications between  devices.  The  peripheral  provides  the  following features:

- Master or slave mode support
- Maximum SPI master transfer rate is f SYS /2
- Maximum SPI slave transfer rate is f SYS /4
- 8 or 16-bit data length
- Programmable clock phase and polarity
- Robust fault detection:

Mode fault detection Write collision detection Receiver overrun detection

- Programmable slave select pin polarity

One instance of the SPI peripheral is provided.

## I 2 C

The  I 2 C  bus  is  a  bidirectional,  two-wire  serial  bus  that provides  a  medium-speed  communications  network.  It can  operate  as  a  one-to-one,  one-to-many  or  many-tomany communications medium. It provides the following features:

- Master or slave mode operation
- Information transferal over a serial data circuit (SDA) and serial clock circuit (SCL)
- Supports standard (7-bit) addressing
- Support  for  clock  stretching  to  allow  slower  slave devices to operate on higher speed busses
- Support for multiple transfer rates:
- On-chip filter to reject spikes on the data circuit.
- Receiver FIFO depth of 2 bytes
- Transmitter FIFO depth of 2 bytes

Standard mode: 100kbps Fast mode: 400kbps Fast mode plus: 1Mbps

One instance of the I 2 C peripheral is provided.

## MAXQ611

## USART

The universal synchronous/asynchronous receiver/transmitter  (USART) peripheral is a two-wire, serial interface that  provides  fast  communication  between  devices.  It provides the following features:

- Full-duplex operation for asynchronous data transfers
- Half-duplex operation for synchronous data transfers
- Programmable interrupt when transmit or receive data operation completes
- Independent, programmable baud-rate generator
- 9th data bit can be fixed 0, 1, or used as a software parity bit
- Start and stop bits used in asynchronous modes
- Maximum frequency in synchronous mode: f SRC /4
- Maximum frequency in asynchronous mode: f SRC /2 21

Two instances of the USART peripheral are provided.

## General-Purpose I/0 and External Interrupts

Port  pins  are  provided  for  general-purpose  I/O  (GPIO) with the following features:

- CMOS output drivers
- Schmitt trigger inputs
- Optional weak pullup to V DD  when operating in input mode

Table  2  lists  the  available  GPIO  and  external  interrupts. Many  GPIO  pins  share  special  functions  with  device peripherals and external interrupts. These special functions are listed in the Pin Description section, and described in the relevant user's guide section.

## Table 2. MAXQ611 GPIO and External Interrupts

| PACKAGE    | GPIO                                    | EXTERNAL INTERRUPTS   |
|------------|-----------------------------------------|-----------------------|
| 44 TQFN-EP | P0[7:0] P1[7:0] P2[7:0] P3[7:0]         | INT[15:0]             |
| Bare die   | P0[7:0] P1[7:0] P2[7:0] P3[7:0] P4[5:0] | INT[15:0]             |

## Infrared Remote Control System-On-Chip

## On-Chip Oscillator

An internal 12MHz oscillator is provided that requires no external components, thereby reducing system cost, PCB area, and radiated EMI.

## Low-Power Operating Modes

The  lowest  power  mode  of  operation  is  stop  mode.  In this  mode,  CPU  state  and  memories  are  preserved, but  the  CPU  is  not  actively  running.  Wake-up  sources include  external  I/O  interrupts,  the  power-fail  warning  interrupt,  wake-up  timer,  or  a  power-fail  reset. Any time  the  microcontroller  is  in  a  state  where  code  does not need to be executed, the user software can put the device into stop mode. The nanopower ring oscillator is an internal ultra-low-power 8kHz ring oscillator that can drive a wake-up timer that exits stop mode. The wake-up timer is programmable by software in steps of 125μs up to approximately 8s.

The  power-fail  monitor  is  always  active  during  normal operation.

During stop mode, the power-fail monitor can be enabled using  the  power-fail  monitor  bit  (PFD).  It  is  disabled (PFD = 1) by default after a POR. If disabled, the V DD  &lt; VRST condition does not invoke a reset state. Regardless of  the  PFD  bit,  the  V DD   &lt;  V POR   condition  generates  a POR in stop mode.

Regardless  of  the  state  of  the  PFD  bit,  the  power-fail monitor is enabled immediately prior to exiting stop mode. If  a  power-fail  warning  condition  (V DD   &lt;  V PFW )  is  then detected, the power-fail interrupt flag is set on stop mode exit.  If  a  power-fail  condition  is  detected  (V DD   &lt;  V RST ), the device remains in reset and drives the RESET pin low.

## MAXQ611

## Power-Fail Detection

Figure  1,  Figure  2,  and  Figure  3  show  the  power-fail detection  and  response  during  normal  and  stop-mode operation. If a reset is caused by a power-fail, the powerfail monitor can be set to one of the following intervals:

- Always on-continuous monitoring
- 2 11  nanopower ring oscillator clocks (~256ms)
- 2 12  nanopower ring oscillator clocks (~512ms)
- 2 13  nanopower ring oscillator clocks (~1.024s)

In  the  case  where  the  power-fail  circuitry  is  periodically turned  on,  the  power-fail  detection  is  turned  on  for  two nanopower ring-oscillator  cycles.  If  V DD   &gt;  V RST   during detection, V DD  is monitored for an additional nanopower ring-oscillator period. If V DD  remains above V RST  for the third nanopower ring period, the CPU exits the reset state and resumes normal operation from utility ROM at 8000h after satisfying the crystal warmup period.

The voltage (V PFW ) below which a power-fail warning is generated is user configurable through the PFWARNCN bits. See the Electrical Characteristics table for the V PFW options and corresponding PFWARNCN values.

## Infrared Remote Control System-On-Chip

If  the  RESET  pin  is  being    driven  active  by  an  external source, or a watchdog timer reset occurs, the power-fail, internal regulator, and crystal oscillator (if present) remain on during the reset event. The reset is exited in less than 20 f OSC  cycles after the reset source is removed.

## Applications Information

The  low-power,  high-performance  RISC  architecture  of this device makes it an excellent fit for many portable or battery-powered applications. It is ideally suited for applications such as universal remote controls that require the cost-effective integration of IR transmit/receive capability.

## Grounds and Bypassing

Careful  PCB  layout  significantly  minimizes  system-level digital  noise  that  could  interact  with  the  microcontroller or peripheral components. The use of multilayer boards is essential to allow the use of dedicated power planes. The area under any digital components should be a continuous ground plane if possible. Keep bypass capacitor leads short for best noise rejection and place the capacitors as close as possible to the leads of the devices.

Figure 1. Power-Fail Detection During Normal Operation

<!-- image -->

## MAXQ611

## Table 3. Power-Fail Detection States During Normal Operation

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                  |
|---------|-------------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | -                | V DD < V POR .                                                                                                                                                                                            |
| B       | On                | On                   | On                   | -                | V POR < V DD < V RST . Crystal warmup time, t XTAL_RDY . CPU held in reset.                                                                                                                               |
| C       | On                | On                   | On                   | -                | V DD > V RST . CPU normal operation.                                                                                                                                                                      |
| D       | On                | On                   | On                   | -                | Power drop too short. Power-fail not detected.                                                                                                                                                            |
| E       | On                | On                   | On                   | -                | V RST < V DD < V PFW . PFI is set when V RST < V DD < V PFW and maintains this state for at least t PFW , at which time a power-fail interrupt is generated (if enabled). CPU continues normal operation. |
| F       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                                                                                                |
| G       | On                | On                   | On                   | -                | V DD > V RST . Crystal warmup time, t XTAL_RDY . CPU resumes normal operation from 8000h.                                                                                                                 |
| H       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                                                                                                |
| I       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                                                                                                |

Figure 2. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

<!-- image -->

## Table 4. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                             |
|---------|-------------------|----------------------|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| B       | On                | Off                  | Off                  | Yes              | Power drop too short. Power-fail not detected.                                                                                       |
| C       | On                | On                   | On                   | Yes              | V RST < V DD < V PFW . Power-fail warning detected. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . Exit stop mode. |
| D       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                           |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                           |

Figure 3. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled

<!-- image -->

## Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

| STATE   | POWER-FAIL   | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                                                                                                                                                                                    |
|---------|--------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Off          | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                                                                                                                                                                              |
| B       | Off          | Off                  | Off                  | Yes              | V DD < V PFW . Power-fail not detected because power-fail monitor is disabled.                                                                                                                                                                                                                                                                                              |
| C       | On           | On                   | On                   | Yes              | V RST < V DD < V PFW . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail warning, and sets the power-fail interrupt flag. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . On stop mode exit, CPU vectors to the higher priority of power-fail and the interrupt that causes stop mode exit. |

Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued)

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                      |
|---------|-------------------|----------------------|----------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D       | Off               | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail, and puts CPU in reset. Power-fail monitor is turned on periodically. |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                                                                                                    |

CMOS design guidelines for any semiconductor require that no pin be taken above V DD  or below GND. Violation of  this  guideline  can  result  in  a  hard  failure  (damage  to the silicon inside the device) or a soft failure (unintentional modification of memory contents). Voltage spikes above or  below  the  device's  absolute  maximum  ratings  can potentially cause a devastating IC latchup.

Microcontrollers  commonly  experience  negative  voltage spikes through either their power pins or general-purpose I/O  pins.  Negative  voltage  spikes  on  power  pins  are especially  problematic  as  they  directly  couple  to  the internal  power  buses.  Devices  such  as  keypads  can conduct  electrostatic  discharges  directly  into  the  microcontroller  and  seriously  damage  the  device.  System designers must protect components against these transients that can corrupt system memory.

## Additional Documentation

Engineers must have the following documents to fully use this device:

- This  data  sheet,  containing  pin  descriptions,  feature overviews, and electrical specifications.
- The  device-appropriate  user  guide,  containing  detailed information and programming guidelines for core features and peripherals.
- Errata sheets for specific revisions noting deviations from published specifications.

For information regarding these documents, visit Technical Support at support.maximintegrated.com/micro .

## MAXQ611

## Development and Technical Support

Contact  technical  support  for  information  about  highly versatile,  affordable  development  tools,  available  from Maxim Integrated and third-party vendors.

- Evaluation kits
- Compilers
- Integrated development environments (IDEs)
- USB interface modules for programming and debugging

For technical support, go to support.maximintegrated.com/micro .

## Ordering Information/Selector Guide

| PART             | TEMP RANGE     | OPERATING VOLTAGE (V)   | PROGRAM MEMORY (KB)   |   DATA MEMORY (KB) |   GPIO | PIN-PACKAGE   |
|------------------|----------------|-------------------------|-----------------------|--------------------|--------|---------------|
| MAXQ611J-XXXX+T* | -20°C to +70°C | 1.70 to 3.6             | 80 Flash              |                  2 |     32 | 44 TQFN-EP**  |
| MAXQ611X-XXXX+   | -20°C to +70°C | 1.70 to 3.6             | 80 Flash              |                  2 |     38 | Bare die      |

Note: The 4-digit suffix '-XXXX' indicates a device preprogrammed at Maxim Integrated with proprietary customer-supplied software. For more information on factory preprogramming of this device, contact Maxim Integrated at support.maximintegrated.com/micro .

+Denotes a lead(Pb)-free/RoHS-compliant package.

T = Tape and reel.

*Future product-contact factory for availability.

**EP = Exposed pad.

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 44 TQFN-EP     | T4477+3C       | 21-0144       | 90-0128            |

## Infrared Remote Control System-On-Chip

## Appendix A

## I 2 C Serial Peripheral Specifications

(See Figure 4 and Figure 5.)

| PARAMETER                                                                          | SYMBOL     |                                                                                                   | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   |       |
|------------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------------|-----------------|-----------------|-------------|-------------|-------|
|                                                                                    |            | CONDITIONS                                                                                        | MIN             | MAX             | MIN         | MAX         | UNITS |
| Input Low Voltage                                                                  | V IL_I2C   | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage | -0.5            | 0.3 x V DD      | -0.5        | 0.3 x V DD  | V     |
| Input High Voltage                                                                 | V IH_I2C   | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage | 0.7 x V DD      |                 | 0.7 x V DD  | V DD + 0.5V | V     |
| Input Hysteresis (Schmitt)                                                         | V IHYS_I2C | V DD > 2V                                                                                         |                 |                 | 0.05 x V DD |             | V     |
| Output Logic-Low (Open Drain or Open Collector)                                    | V OL_I2C   | V DD > 2V, 3mA sink current                                                                       | 0               | 0.4             | 0           | 0.4         | V     |
| Capacitive Load for Each Bus Line                                                  | C B        |                                                                                                   |                 | 400             |             | 400         | pF    |
| Output Fall Time from V IH_MIN to V IL_MAX with Bus Capacitance from 10pF to 400pF | t OF_I2C   | t R/F_I2C exceeds t OF_I2C , which permits RS to be connected as shown in figure                  |                 | 250             | 20 + 0.1C B | 250         | ns    |
| Pulse Width of Spike Filtering That Must Be Suppressed by Input Filter             | t SP_I2C   |                                                                                                   |                 |                 | 0           | 50          | ns    |
| Input Current on I/O                                                               | I IN_I2C   | Input voltage from 0.1 x V DD to 0.9 x V DD                                                       | -10             | +10             | -10         | +10         | F A   |
| I/O Capacitance                                                                    | C IO_I2C   |                                                                                                   |                 | 10              |             | 10          | pF    |
| I 2 C Bus Operating Frequency                                                      | f I2C      |                                                                                                   | 0               | 100             | 0           | 400         | kHz   |
| System Frequency                                                                   | f SYS      |                                                                                                   | 0.90            |                 | 3.60        |             | MHz   |
| I 2 C Bit Rate                                                                     | f I2C      |                                                                                                   |                 | f SYS /8        |             | f SYS /8    | Hz    |
| Hold Time After (Repeated) START                                                   | t HD:STA   |                                                                                                   | 4.0             |                 | 0.6         |             | F s   |
| Clock Low Period                                                                   | t LOW_I2C  |                                                                                                   | 4.7             |                 | 1.3         |             | F s   |
| Clock High Period                                                                  | t HIGH_I2C |                                                                                                   | 4.0             |                 | 0.6         |             | F s   |
| Setup Time for Repeated START                                                      | t SU:STA   |                                                                                                   | 4.7             |                 | 0.6         |             | F s   |

## I 2 C Serial Peripheral Specification (continued)

(See Figure 4 and Figure 5.)

| PARAMETER                                                                      | SYMBOL   | CONDITIONS                                                                                                                                                                                                                                                                                                                            | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   |       |
|--------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------------|-------------|-------------|-------|
|                                                                                |          |                                                                                                                                                                                                                                                                                                                                       | MIN             | MAX             | MIN         | MAX         | UNITS |
| Hold Time for Data                                                             | t HD:DAT | A device must internally provide a hold time of at least 300ns for V IH_I2C(MIN) to bridge the undefined region of the falling edge of SCL. The maximum t HD:DAT needs to be met only if the device does not stretch the SCL low period                                                                                               | 0               | 3.45            | 0           | 0.9         | F s   |
| Setup Time for Data                                                            | t SU:DAT | A fast-mode I 2 C bus device can be used in a standard-mode I 2 C bus system; if such a device does not stretch the low period of the SCL signal, it must output the next data bit to the SDA line t R_I2C(MAX) + t SU:DAT = 1000 + 250 = 1250ns (according to the standard-mode I 2 C specification) before the SCL line is released | 250             |                 | 100         |             | ns    |
| SDA/SCL Fall Time                                                              | t F_I2C  |                                                                                                                                                                                                                                                                                                                                       |                 | 300             | 20 + 0.1C B | 300         | ns    |
| SDA/SCL Rise Time                                                              | t R_I2C  |                                                                                                                                                                                                                                                                                                                                       |                 | 1000            | 20 + 0.1C B | 300         | ns    |
| Setup Time for STOP                                                            | t SU:STO |                                                                                                                                                                                                                                                                                                                                       | 4.0             |                 | 0.6         |             | F s   |
| Bus Free Time Between STOP and START                                           | t BUF    |                                                                                                                                                                                                                                                                                                                                       | 4.7             |                 | 1.3         |             | F s   |
| Noise Margin at the Low Level for Each Connected Device (Including Hysteresis) | V nL_I2C |                                                                                                                                                                                                                                                                                                                                       | 0.1 x V DD      |                 | 0.1 x V DD  |             | V     |
| Noise Margin at the Low Level for Each Connected Device (Including Hysteresis) | V nH_I2C |                                                                                                                                                                                                                                                                                                                                       | 0.2 x V DD      |                 | 0.2 x V DD  |             | V     |

## MAXQ611

## I 2 C Serial Diagrams

Figure 4. Series Resistors (R S ) for Protecting Against High-Voltage Spikes

<!-- image -->

Figure 5. I 2 C Bus Controller Timing Diagram

<!-- image -->

## MAXQ611

## Serial Peripheral Interface (SPI) Specifications

(See Figure 6 and Figure 7.)

| PARAMETER                                            | SYMBOL        | MIN           | TYP      | MAX      | UNITS   |
|------------------------------------------------------|---------------|---------------|----------|----------|---------|
| SPI Master Frequency                                 | f MCK         |               |          | f SYS /2 | MHz     |
| SPI Slave Frequency                                  | f SCK         |               |          | f SYS /4 | MHz     |
| SPI Master Period                                    | t MCK         |               | 1/f MCK  |          |         |
| SPI Slave Period                                     | t SCK         |               | 1/f SCK  |          |         |
| SCLK Output Pulse-Width High/ Low                    | t MCH , t MCL | t MCK /2 - 35 |          |          | ns      |
| MOSI Output Hold Time After SCLK Sample Edge         | t MOH         | t MCK /2 - 35 |          |          | ns      |
| MOSI Output Valid to Sample Edge                     | t MOV         | t MCK /2 - 35 |          |          | ns      |
| MISO Input Valid to SCLK Sample Edge Rise/Fall Setup | t MIS         | 35            |          |          | ns      |
| MISO Input to SCLK Sample Edge Rise/Fall Hold        | t MIH         | 0             |          |          | ns      |
| SCLK Input Pulse-Width High/Low                      | t SCH , t SCL |               | t SCK /2 |          | ns      |
| SSELActive to First Shift Edge                       | t SSE         |               | 50       |          | ns      |
| MOSI Input to SCLK Sample Edge Rise/Fall Setup       | t SIS         | 35            |          |          | ns      |
| MOSI Input from SCLK Sample Edge Transition Hold     | t SIH         | 35            |          |          | ns      |
| MISO Output Valid After SCLK Shift Edge Transition   | t SOV         | 70            | 70       | 70       | ns      |
| SCLK Inactive to SSEL Rising                         | t SD          | 35            |          |          | ns      |

## SPI Timing Diagrams

Figure 6. SPI Master Communication Timing

<!-- image -->

Figure 7. SPI Slave Communication Timing

<!-- image -->

## USART Mode 0 Specifications

(See Figure 8.)

| PARAMETER                                       | SYMBOL   | CONDITIONS   | MIN   | TYP      | MAX   | UNITS   |
|-------------------------------------------------|----------|--------------|-------|----------|-------|---------|
| USART Clock Period                              | t CLCL   |              |       | 1/f SYS  |       |         |
| TXD Clock Period                                | t XLXL   | SM2 = 0      |       | 12t CLCL |       | ns      |
| TXD Clock Period                                | t XLXL   | SM2 = 1      |       | 4t CLCL  |       | ns      |
| TXD Clock High Time                             | t XHXL   | SM2 = 0      |       | 3t CLCL  |       | ns      |
| TXD Clock High Time                             | t XHXL   | SM2 = 1      |       | 2t CLCL  |       | ns      |
| RXD Output Data Valid to TXD Clock Rising Edge  | t QVXH   | SM2 = 0      |       | 10t CLCL |       | ns      |
| RXD Output Data Valid to TXD Clock Rising Edge  | t QVXH   | SM2 = 1      |       | 3t CLCL  |       | ns      |
| RXD Output Data Hold from TXD Clock Rising Edge | t XHQH   | SM2 = 0      |       | 2t CLCL  |       | ns      |
| RXD Output Data Hold from TXD Clock Rising Edge | t XHQH   | SM2 = 1      |       | t CLCL   |       | ns      |
| RXD Input Data Valid to TXD Clock Rising Edge   | t DVXH   | SM2 = 0      |       | t CLCL   |       | ns      |
| RXD Input Data Valid to TXD Clock Rising Edge   | t DVXH   | SM2 = 1      |       | t CLCL   |       | ns      |
| RXD Input Data Hold after TXD Clock Rising Edge | t XHDH   | SM2 = 0      |       | t CLCL   |       | ns      |
| RXD Input Data Hold after TXD Clock Rising Edge | t XHDH   | SM2 = 1      |       | t CLCL   |       | ns      |

## USART Timing

Figure 8. USART Timing Diagram

<!-- image -->

## MAXQ611

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/14            | Initial release                                                                                                                                                                                                                                  | -               |
|                 1 | 12/14           | Updated General Description and Benefits and Features sections ; added Typical Operating Characteristics; replaced Table 2; added new Figures 1-4 and renumbered remaining figures; updated IR Module section; corrected part number in Figure 9 | 1, 4, 6-9, 13   |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8629-462, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOiedGLYPH&lt;c=17,font=/OJVNZL+Arial-ItalicMT&gt;  0a[iP  ,nteJrated reserYes tKe riJKt to cKanJe tKe circuitr\ and sSecifications ZitKout notice at an\ tiPeGLYPH&lt;c=17,font=/OJVNZL+Arial-ItalicMT&gt; 7Ke SaraPetric YaOues GLYPH&lt;c=11,font=/OJVNZL+Arial-ItalicMT&gt;Pin and Pa[ OiPitsGLYPH&lt;c=12,font=/OJVNZL+Arial-ItalicMT&gt; sKoZn in tKe (OectricaO &amp;Karacteristics taEOe are JuaranteedGLYPH&lt;c=17,font=/OJVNZL+Arial-ItalicMT&gt; Other parametric values quoted in this data sheet are provided for guidance.

## Infrared Remote Control System-On-Chip