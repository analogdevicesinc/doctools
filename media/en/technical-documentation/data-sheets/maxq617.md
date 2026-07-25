<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

## General Description

The MAXQ617 is a low-power, 16-bit MAXQ ®  microcontroller  designed  for  low-power  applications  including universal  remote  controls,  consumer  electronics,  and white  goods.  The  device  combines  a  powerful  16-bit RISC microcontroller and integrated peripherals including  a  universal  synchronous/asynchronous  receivertransmitter  (USART),  an  SPI  master/slave  and  two  I 2 C communications ports, along with an IR module with carrier  frequency  generation  and  flexible  port  I/O  capable of  multiplexed  keypad  control.  An  internal  amplifier eliminates the need for external circuitry to drive the IR receiver pin.

The  device  includes  80KB  of  flash  memory  and  4KB  of data SRAM.

For  the  ultimate  in  low-power  battery-operated  performance, the device includes an ultra-low-power stop mode (0.2µA typ). In this mode, the minimum amount of circuitry is  powered.  Wake-up sources include external interrupts, the  power-fail  interrupt,  and  a  timer  interrupt.  The  microcontroller runs from a wide 1.67V to 3.6V operating voltage.

## Applications

Universal Remote Controls for Tablets

Universal Remote Controls for Smartphones

## Block Diagram

<!-- image -->

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

## Features

- S High-Performance, Low-Power, 16-Bit RISC Core
- S Internal 12MHz Oscillator Requires no External Components
- S 1.67V to 3.6V Operating Voltage
- S 33 Total Instructions for Simplified Programming
- S Three Independent Data Pointers Accelerate Data Movement with Automatic Increment/Decrement
- S Dedicated Pointer for Direct Read from Code Space
- S 16-Bit Instruction Word, 16-Bit Data Bus
- S 16 x 16-Bit General-Purpose Working Registers
- 80KB Flash Memory
- S Memory Features 
-  4KB Data SRAM
- S Additional Peripherals
-  Power-Fail Warning
-  Power-On Reset (POR)/Brownout Reset
-  Automatic IR Carrier Frequency Generation and Modulation
-  IR Learning Amplifier
-  IR Transmit Driver with 200mA (min) Sink Current at 1.8V
-  Two 16-Bit Programmable Timers/Counters with Prescaler and Capture/Compare
-  One SPI, Two I 2 C, and One USART Port
-  Programmable Watchdog Timer
-  8kHz Nanopower Ring Oscillator Wake-Up Timer
-  Up to 10 General-Purpose I/Os
- S Low Power Consumption
-  0.2µA (typ), 2.0µA (max) in Stop Mode, TA = +25 N C, Power-Fail Monitor Disabled
-  2.0mA (typ) at 12MHz in Active Mode

Ordering Information appears at end of data sheet.

## MAXQ617

## Infrared Remote Control System-on-Chip

| TABLE OF CONTENTS                                                  | TABLE OF CONTENTS   |
|--------------------------------------------------------------------|---------------------|
| General Description . . . . . . . . . . . . . . . . . . . .        | . 1                 |
| Applications . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1                 |
| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . 1                 |
| Block Diagram . . . . . . . . . . . . . . . . . . . . . . . .      | . 1                 |
| Absolute Maximum Ratings . . . . . . . . . . . . . .               | . 4                 |
| Package Thermal Characteristics. . . . . . . . . .                 | . 4                 |
| Electrical Characteristics . . . . . . . . . . . . . . . .         | . 4                 |
| Ball Configuration . . . . . . . . . . . . . . . . . . . . . .     | . 7                 |
| Ball Description . . . . . . . . . . . . . . . . . . . . . . .     | . 7                 |
| Detailed Description. . . . . . . . . . . . . . . . . . . .        | . 9                 |
| Microprocessor. . . . . . . . . . . . . . . . . . . . . . . .      | . 9                 |
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 9                 |
| Stack Memory. . . . . . . . . . . . . . . . . . . . . . .          | . .9                |
| Utility ROM . . . . . . . . . . . . . . . . . . . . . . . . .      | .10                 |
| Watchdog Timer . . . . . . . . . . . . . . . . . . . . . . .       | 10                  |
| IR Carrier Generation and Modulation Timer .                       | 10                  |
| Carrier Generation Module . . . . . . . . . . . . .                | . 11                |
| IR Transmission . . . . . . . . . . . . . . . . . . . . . .        | . 11                |
| IR Receive. . . . . . . . . . . . . . . . . . . . . . . . . .      | .13                 |
| Carrier Burst-Count Mode. . . . . . . . . . . . . .                | . 14                |
| 16-Bit Timers/Counters. . . . . . . . . . . . . . . . . .          | 14                  |
| Serial Peripherals . . . . . . . . . . . . . . . . . . . . . .     | 15                  |
| Serial Peripheral Interface (SPI) . . . . . . . . .                | .15                 |
| I 2 C Bus . . . . . . . . . . . . . . . . . . . . . . . . . . . .  | .16                 |
| USART. . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | .16                 |
| General-Purpose I/O . . . . . . . . . . . . . . . . . . .          | 16                  |
| On-Chip Oscillator . . . . . . . . . . . . . . . . . . . . .       | 16                  |
| Operating Modes . . . . . . . . . . . . . . . . . . . . . .        | 16                  |
| Power-Fail Detection . . . . . . . . . . . . . . . . . .           | . 17                |
| Applications Information. . . . . . . . . . . . . . . . .          | 21                  |
| Grounds and Bypassing . . . . . . . . . . . . . . .                | .21                 |
| Ordering Information/Selector Guide . . . . . . .                  | 22                  |
| Package Information. . . . . . . . . . . . . . . . . . . .         | 22                  |
| Additional Documentation . . . . . . . . . . . . . . .             | 22                  |
| Development and Technical Support. . . . . . .                     | 22                  |

## Infraed Remote Control System-on-Chip

| TABLE OF CONTENTS (continued)                                                                                             | TABLE OF CONTENTS (continued)   |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| Appendix A. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 23                              |
| I 2 C Serial peripheral specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | 23                              |
| I 2 C Serial Diagrams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | 25                              |
| SPI Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | 26                              |
| SPI Timing Diagrams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       | 27                              |
| USART Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    | 28                              |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  | 29                              |
| LIST OF FIGURES                                                                                                           | LIST OF FIGURES                 |
| Figure 1. IR Transmit Frequency Shifting Example (IRCFME = 0) . . . . . . . . . . . . . .                                 | 12                              |
| Figure 2. IR Transmit Carrier Generation and Carrier Modulator Control. . . . . . . . .                                   | 12                              |
| Figure 3. IR Transmission Waveform (IRCFME = 0). . . . . . . . . . . . . . . . . . . . . . . . .                          | 13                              |
| Figure 4. IR Capture. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | 14                              |
| Figure 5. Receive Burst-Count Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                   | 15                              |
| Figure 6. Power-Fail Detection During Normal Operation . . . . . . . . . . . . . . . . . . . .                            | 17                              |
| Figure 7. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled                                           | 19                              |
| Figure 8. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled. . . . .                                        | 20                              |
| Figure 9. Series Resistors (R S ) for Protecting Against High-Voltage Spikes . . . . . .                                  | 25                              |
| Figure 10. I 2 C Bus Controller Timing Diagram. . . . . . . . . . . . . . . . . . . . . . . . . . . . .                   | 25                              |
| Figure 11. SPI Master Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      | 27                              |
| Figure 12. SPI Slave Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | 27                              |
| Figure 13. USART Timing Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | 28                              |
| LIST OF TABLES                                                                                                            | LIST OF TABLES                  |
| Table 1. Watchdog Interrupt Timeout (Sysclk = 12MHz, CD[1:0] = 00). . . . . . . . . .                                     | 10                              |
| Table 2. USART Mode Details . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             | 16                              |
| Table 3. Power-Fail Warning Voltage Selection . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | 17                              |
| Table 4. Power-Fail Detection States During Normal Operation . . . . . . . . . . . . . . .                                | 18                              |
| Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled                                            | 19                              |
| Table 6. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled                                           | 20                              |

## MAXQ617

## MAXQ617

## Infrared Remote Control System-on-Chip

## ABSOLUTE MAXIMUM RATINGS

| (All voltages with respect to GND.)                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| Voltage Range on V DD .........................................-0.3V to +3.6V                                                           |
| Voltage Range on Any Lead Except V DD ..-0.3V to (VDD + 0.5V)                                                                           |
| Continuous Power Dissipation (T A = +70 N C) WLP (multilayer board) (derate 17.20mW/ N C above +70 N C)..........................1600mW |

Operating Temperature Range .......................... -20

N

C to +70

N

Storage Temperature Range  ............................ -65

N

C to +150

N

Soldering Temperature (reflow) ......................................+260

Continuous Output Current

Any Single I/O Pin  ...........................................................32mA

All I/O Pins Combined  ......................................................32mA

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## PACKAGE THERMAL CHARACTERISTICS

WLP

Junction-to-Ambient Thermal Resistance ( q JA ) ..........58°C/W

Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a four-layer board. For detailed information on package thermal considerations, refer to www.maxim-ic.com/thermal-tutorial .

## ELECTRICAL CHARACTERISTICS

(Limits are 100% tested at T A  = +25 ° C and T A  = +85 ° C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                               | SYMBOL      | CONDITIONS                                                                                                                   | MIN   |   TYP | MAX   | UNITS   |
|-----------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|---------|
| Supply Voltage                          | V DD        |                                                                                                                              | V RST |       | 3.6   | V       |
| 1.8V Internal Regulator                 | V REG18     |                                                                                                                              | 1.59  |   1.8 | 1.98  | V       |
| Power-Fail Warning Voltage              | V PFW       | PFWARNCN[1:0] = 00 (default)                                                                                                 | 1.64  |  1.67 | 1.70  | V       |
| Power-Fail Warning Voltage              | V PFW       | GBD, all other values of PFWARNCN[1:0] as shown in Table 3                                                                   | -3%   |       | +3%   | V       |
| Power-Fail Reset Voltage                | V RST       |                                                                                                                              | 1.61  |       | 1.67  | V       |
| Power-Fail Warning/Reset Offset         | V PFWOFFSET | PFWARNCN[1:0] = 00, V PFW > V RST                                                                                            | 30    |    30 |       | mV      |
| Power-On Reset Voltage                  | V POR       | Monitors V DD                                                                                                                | 1.2   |   1.2 |       | V       |
| RAM Data Retention Voltage              | V DRV       |                                                                                                                              | 1.0   |       |       | V       |
| Active Current                          | I DD_1      | f SYSCLK = 12MHz, executing code from flash memory, all inputs connected to GND/V DD , outputs do not source or sink current | 2     |       | 3.5   | mA      |
| Stop Mode Current                       | I S1        | T A = +25 N C (power-fail off)                                                                                               | 0.15  |       | 2.0   | F A     |
| Stop Mode Current                       | I S1        | T A = 0 N C to +70 N C (power-fail off)                                                                                      | 0.15  |       | 8     | F A     |
| Stop Mode Current                       | I S2        | T A = +25 N C (power-fail on)                                                                                                | 22    |       | 31    | F A     |
| Stop Mode Current                       | I S2        | T A = 0 N C to +70 N C (power-fail on)                                                                                       | 27.6  |       | 38    | F A     |
| Power Consumption During Power-On Reset | I POR       | During POR while V DD < V POR                                                                                                | 100   |   100 |       | nA      |

N

C

C

C

## MAXQ617

## Infrared Remote Control System-on-Chip

## ELECTRICAL CHARACTERISTICS (continued)

(Limits are 100% tested at T A  = +25 ° C and T A  = +85 ° C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                                      | SYMBOL             | CONDITIONS                                                            | MIN                | TYP                | MAX                | UNITS              |
|------------------------------------------------|--------------------|-----------------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| Stop Mode Resume Time                          | t ON               |                                                                       | 375 + (8192t CK )  | 375 + (8192t CK )  | 375 + (8192t CK )  | F s                |
| Input Low Voltage for IRRX and All Port Pins   | V IL               |                                                                       | V GND              |                    | 0.3 V DD           | V                  |
| Input High Voltage for IRRX and All Port Pins  | V IH               |                                                                       | 0.7 V DD           |                    | V DD               | V                  |
| Input Hysteresis (Schmitt)                     | V IHYS             | V DD = 3.3V, T A = +25 N C                                            |                    | 300                |                    | mV                 |
| IRRX Input Filter Pulse-Width Reject           | t IRRX_R           |                                                                       |                    |                    | 50                 | ns                 |
| IRRX Input Filter Pulse-Width Accept           | t IRRX_A           |                                                                       | 300                |                    |                    | ns                 |
| IRTX Sink Current                              | I IRTX             | V IRTX ≥ 0.25V                                                        | 200                |                    |                    | mA                 |
| Output Low Voltage for All Port Pins           | V                  | V DD = 3.6V, I OL = 11mA                                              |                    | 0.4                | 0.5                | V                  |
|                                                | OL                 | V DD = 2.35V, I OL = 8mA                                              |                    | 0.4                | 0.5                |                    |
|                                                |                    | V DD = 1.8V, I OL = 4.5mA                                             |                    | 0.4                | 0.5                |                    |
| Output High Voltage All Port Pins              | V OH               | I OH = -2mA                                                           | V DD - 0.5         |                    | V DD               | V                  |
| Input/Output Pin Capacitance for All Port Pins | C IO               |                                                                       | 15                 | 15                 | 15                 | pF                 |
| Input Leakage Current for All Pins             | I L                | Internal pullup disabled                                              | -100               |                    | +100               | nA                 |
| Input Pullup Resistor for RESET ,              | R                  | V DD = 3.0V, V OL = 0.4V                                              | 16                 | 28                 | 39                 | k I                |
| IRRX, and All Port Pins                        | PU                 | V DD = 1.8V, V OL = 0.4V                                              | 18                 | 31                 | 43                 | k I                |
| LEARNING AMPLIFIER                             | LEARNING AMPLIFIER | LEARNING AMPLIFIER                                                    | LEARNING AMPLIFIER | LEARNING AMPLIFIER | LEARNING AMPLIFIER | LEARNING AMPLIFIER |
| IRRX Amplifier Input Low Detection             | I DL               | V DD = 1.8V, I RRCVEN = 1                                             |                    |                    | 0.2                | F A                |
| IRRX Amplifier Input High Detection            | I DH               | V DD = 1.8V, I RRCVEN = 1                                             | 1.25               |                    |                    | F A                |
| CLOCK                                          | CLOCK              | CLOCK                                                                 | CLOCK              | CLOCK              | CLOCK              | CLOCK              |
| Internal Oscillator Frequency                  | f OSC              |                                                                       |                    | 12                 |                    | MHz                |
| Internal Oscillator Variability                | f OSC_VAR          | T A = -20 N C to +70 N C                                              |                    |                    | ±1%                |                    |
|                                                | f OSC_VAR          | T A = +25 N C, V DD = 1.8V T A = +15 N C to +40 N C, V DD = 1.8V ± 5% |                    | ±0.5%              | ±0.5%              | MHz                |

## MAXQ617

## Infrared Remote Control System-on-Chip

## ELECTRICAL CHARACTERISTICS (continued)

(Limits are 100% tested at T A  = +25 ° C and T A  = +85 ° C. Limits over the operating temperature range and relevant supply voltage range are guaranteed by design and characterization. Specifications marked GBD are guaranteed by design and not production tested.)

| PARAMETER                                   | SYMBOL     | CONDITIONS                                                                              | MIN       | TYP     | MAX            | UNITS   |
|---------------------------------------------|------------|-----------------------------------------------------------------------------------------|-----------|---------|----------------|---------|
| System Clock Period                         | t CK       |                                                                                         |           | 1/f OSC |                | ns      |
| System Clock Frequency                      | f CK       |                                                                                         |           | 1/t CK  |                | MHz     |
| NANOPOWER RING                              |            |                                                                                         |           |         |                |         |
| Nanopower Ring Frequency                    | f NANO     | T A = +25 N C                                                                           | 3.0       | 8.0     | 20.0           | kHz     |
| Nanopower Ring Frequency                    | f NANO     | T A = +25 N C, V DD = POR voltage                                                       | 1.7       | 2.4     |                | kHz     |
| WAKE-UP TIMER                               |            |                                                                                         |           |         |                |         |
| Wakeup Timer Interval                       | t WAKEUP   |                                                                                         | 1/ f NANO |         | 65,535/ f NANO | s       |
| FLASH MEMORY                                |            |                                                                                         |           |         |                |         |
| System Clock During Flash Programming/Erase | f FPSYSCLK | f FPSYSCLK /(FCKDIV[3:0]+1) must equal 1MHz, verify PFI = 0 before calling utility ROM. |           | f OSC   |                | MHz     |
| Flash Erase Time                            | t ME       | Mass erase                                                                              |           | 40      |                | ms      |
| Flash Erase Time                            | t ERASE    | Page erase                                                                              |           | 40      |                | ms      |
| Flash Programming Time per Word             | t PROG     | Excluding utility ROM overhead                                                          |           | 40      |                | F s     |
| Write/Erase Cycles                          |            |                                                                                         | 20,000    |         |                | Cycles  |
| Data Retention                              |            | T A = +25 N C                                                                           | 100       |         |                | Years   |

## MAXQ617

## Infrared Remote Control System-on-Chip

## Ball Configuration

<!-- image -->

## Ball Description

| BALL              | NAME              | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POWER BALLS       | POWER BALLS       | POWER BALLS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| B4                | V DD              | Supply Voltage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| C2                | GND               | Ground. Connect directly to the ground plane.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| C4                | REG18             | 1.8V Regulator Output. This pin must be connected to ground through a 1.0 F F external ceramic- chip capacitor. The capacitor must be placed as close to this pin as possible. No devices other than the capacitor should be connected to this pin.                                                                                                                                                                                                                                                                                                                     |
| RESET BALLS       | RESET BALLS       | RESET BALLS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| A4                | RESET             | Digital, Active-Low Reset Input/Output. The device remains in reset as long as this pin is low and begins executing from the utility ROM at address 8000h when this pin returns to a high state. The pin includes pullup current source; if this pin is driven by an external device, it should be driven by an open-drain source capable of sinking in excess of 4mA. This pin can be left unconnected if there is no need to place the device in a reset state using an external signal. This pin is driven low as an output when an internal reset condition occurs. |
| IR FUNCTION BALLS | IR FUNCTION BALLS | IR FUNCTION BALLS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| C1                | IRTX              | IR Transmit Output. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                                                                        |
| B1                | IRRX              | IR Receive Input. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high- impedance input condition and to enable the IR amplifier if desired.                                                                                                                                                                                                                                                                                               |

## MAXQ617

## Infrared Remote Control System-on-Chip

## Ball Description (continued)

| BALL   | NAME                                     | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                      | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                      | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                      |
|        |                                          | Port 0 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used. | Port 0 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used. |
|        |                                          | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                 | SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                              |
| A1     | P0.0 RX0 MOSI INT0                       | P0.0                                                                                                                                                                                                                                                                                                                                                                                                                          | RX0: USART receive MOSI: SPI master out slave in INT0: External interrupt 0                                                                                                                                                                                                                                                                                                                                                   |
| B2     | P0.1 TX0 MISO INT1                       | P0.1                                                                                                                                                                                                                                                                                                                                                                                                                          | TX0: USART transmit MISO: SPI master in slave out INT1: External interrupt 1                                                                                                                                                                                                                                                                                                                                                  |
| A2     | P0.2 SCL0 SCLK INT2                      | P0.2                                                                                                                                                                                                                                                                                                                                                                                                                          | SCL0: I 2 C clock SCLK: SPI clock INT2: External interrupt 2                                                                                                                                                                                                                                                                                                                                                                  |
| A3     | P0.3 SDA0 SSEL INT3                      | P0.3                                                                                                                                                                                                                                                                                                                                                                                                                          | SDA0: I 2 C data SSEL: SPI slave select INT3: External interrupt 3                                                                                                                                                                                                                                                                                                                                                            |
| B3     | P0.4 TBA0 INT4                           | P0.4                                                                                                                                                                                                                                                                                                                                                                                                                          | TBA0: Timer B A0 INT4: External interrupt 4                                                                                                                                                                                                                                                                                                                                                                                   |
| C3     | P0.5 TBB0 INT5                           | P0.5                                                                                                                                                                                                                                                                                                                                                                                                                          | TBB0: Timer B B0 INT5: External interrupt 5                                                                                                                                                                                                                                                                                                                                                                                   |
|        |                                          | Port 1 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD1, PO1, and PI1 registers. The JTAG pins default to their JTAG function with weak pullups enabled after a reset. The JTAG function can be disabled using the TAP bit in the SC register.                                                                                | Port 1 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD1, PO1, and PI1 registers. The JTAG pins default to their JTAG function with weak pullups enabled after a reset. The JTAG function can be disabled using the TAP bit in the SC register.                                                                                |
|        |                                          | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                 | SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                              |
| D4     | P1.4/TCK/SCL1                            | P1.4                                                                                                                                                                                                                                                                                                                                                                                                                          | SCL1: I 2 C clock, TCK: JTAG test clock                                                                                                                                                                                                                                                                                                                                                                                       |
| D3     | P1.5/TDI/SDA1                            | P1.5                                                                                                                                                                                                                                                                                                                                                                                                                          | SDA1: I 2 C data, TDI: JTAG data input                                                                                                                                                                                                                                                                                                                                                                                        |
| D2     | P1.6/TMS                                 | P1.6                                                                                                                                                                                                                                                                                                                                                                                                                          | TMS: JTAG test mode select                                                                                                                                                                                                                                                                                                                                                                                                    |
| D1     | P1.7/TDO                                 | P1.7                                                                                                                                                                                                                                                                                                                                                                                                                          | TDO: JTAG Data Output. TDO functions as the test-data output on reset and defaults to an input with a weak pullup. The output function of the test data is only enabled during the TAP's Shift_IR or Shift_DR states.                                                                                                                                                                                                         |

## MAXQ617

## Infrared Remote Control System-on-Chip

## Detailed Description

The  MAXQ617  provides  integrated,  low-cost  solutions that simplify the design of IR communications equipment such  as  universal  remote  controls.  Standard  features include the highly optimized, single-cycle, MAXQ, 16-bit RISC  core;  80KB  flash  memory;  4KB  data  RAM;  soft stack;  16  general-purpose  registers;  and  three  data pointers. The MAXQ core has the industry's best MIPS/ mA rating, allowing developers to achieve the same performance as competing microcontrollers at substantially lower clock rates. Lower active-mode current combined with the even lower stop-mode current (0.2 F A typ) results in increased battery life. Application-specific peripherals include flexible timers for generating IR carrier frequencies  and  modulation.  A  high-current  IR  drive  pin  operates  with  an  internal  receiver  amplifier  without  external components.  It  also  includes  general-purpose  I/O  pins ideal for keypad matrix input, and a power-fail-detection circuit to notify the application when the supply voltage is nearing the microcontroller's minimum operating voltage.

The internal 12MHz oscillator requires no external components  and  executes  instructions.  Operating  from  DC to  12MHz,  almost  all  instructions  execute  in  a  single clock cycle (83.3ns at 12MHz), enabling nearly 12MIPS true-code operation. When active device operation is not required, an ultra-low-power stop mode can be invoked from  software,  resulting  in  quiescent  current  consumption of less than 0.2 F A (typ) and 2.0 F A (max). The combination  of  high-performance  instructions  and  ultra-low stop-mode current increases battery life over competing microcontrollers. An integrated POR circuit with brownout support resets the device to a known condition following a power-up cycle or brownout condition. Additionally, a power-fail warning flag is set, and a power-fail interrupt can be generated when the system voltage falls below the power-fail warning voltage, V PFW . The configurable power-fail warning feature allows the application to notify the user that the system supply is low and appropriate action should be taken.

## Microprocessor

The  device  is  based  on  Maxim  Integrated's  low-power,  16-bit  MAXQ20S.  The  core  supports  the  Harvard memory architecture with separate 16-bit  program  and data  address  buses.  A  fixed  16-bit  instruction  word  is standard, but data can be arranged in 8 or 16 bits. The MAXQ  core  in  the  device  is  implemented  as  a  pipe- lined  processor  with  performance  approaching  1MIPS per  MHz.  The  16-bit  data  path  is  implemented  around register modules, and each register module contributes specific functions to the core. The accumulator module consists of sixteen 16-bit registers and is tightly coupled with the arithmetic logic unit (ALU). A configurable soft stack supports program flow.

Execution  of  instructions  is  triggered  by  data  transfer  between  functional  register  modules  or  between  a functional  register  module  and  memory.  Because  data movement involves only source and destination modules, circuit  switching activities are limited to active modules only.  For  power-conscious  applications,  this  approach localizes  power  dissipation  and  minimizes  switching noise.  The  modular  architecture  also  provides  a  maximum of flexibility and reusability that are important for a microprocessor used in embedded applications.

The MAXQ instruction set is highly orthogonal. All arithmetical  and  logical  operations  can  use  any  register  in conjunction with the accumulator. Data movement is supported  from  any  register  to  any  other  register.  Memory is accessed through specific data-pointer registers with autoincrement/decrement support.

## Memory

The microcontroller incorporates several memory types:

- 80KB flash memory
- 4KB SRAM data memory
- Dedicated utility ROM
- Soft stack

## Stack Memory

The  device  provides  a  soft  stack  that  can  be  used  to store program return addresses (for subroutine calls and interrupt handling) and other general-purpose data. This soft  stack  is  located  in  the  SRAM  data  memory,  which means  that  the  SRAM  data  memory  must  be  shared between the soft stack and general-purpose application data storage. However, the location and size of the soft stack  is  determined  by  the  user,  providing  maximum flexibility when allocating resources for a particular application. The stack is used automatically by the processor when the CALL, RET, and RETI instructions are executed and  when  an  interrupt  is  serviced.  An  application  can also store and retrieve values explicitly using the stack by means of the PUSH, POP, and POPI instructions.

## MAXQ617

## Infrared Remote Control System-on-Chip

The  SP  pointer  indicates  the  current  top  of  the  stack, which initializes by default to the top of the SRAM data memory. As values are  pushed  onto  the  stack,  the  SP pointer decrements, which means that the stack grows downward  towards  the  bottom  (lowest  address)  of  the data memory. Popping values off the stack causes the SP pointer value to increase. Refer to the User's Guide for more details.

## Utility ROM

The utility ROM is located in program space beginning at address 8000h. This ROM includes the following routines:

- Production test routines (internal memory tests, memory  loader,  etc.),  which  are  used  for  internal  testing only, and are generally of no use to the end-application developer
- User-callable  routines  for  buffer  copying  and  fast table lookup (more information on these routines can be found in the User's Guide)

Following any reset, execution begins in the utility ROM at  address  8000h.  At  this  point,  unless  test  mode  has been  invoked  (which  requires  special  programming through the JTAG interface), the utility ROM in the device always automatically jumps to location 0000h, which is the beginning of user application code.

## Watchdog Timer

The internal watchdog timer greatly increases system reliability. The timer resets the device if software execution is disturbed. The watchdog timer is a free-running counter designed to be periodically reset by the application software. If software is operating correctly, the counter is periodically reset and never reaches its maximum count. However,  if  software  operation  is  interrupted,  the  timer does  not  reset,  triggering  a  system  reset  and  optionally a watchdog timer interrupt. This protects the system against electrical noise or electrostatic discharge (ESD) upsets that could cause uncontrolled processor operation. The internal watchdog timer is an upgrade to older designs with external watchdog devices, reducing system cost and simultaneously increasing reliability.

The watchdog timer functions as the source of both the watchdog  timer  timeout  and  the  watchdog  timer  reset. The  timeout  period  can  be  programmed  in  a  range  of 2 15   to  2 24   system  clock  cycles.  An  interrupt  is  generated  when  the  timeout  period  expires  if  the  interrupt is  enabled.  All  watchdog  timer  resets  follow  the  programmed interrupt timeouts by 512 system clock cycles. If  the  watchdog  timer  is  not  restarted  for  another  full interval in this time period, a system reset occurs when the reset timeout expires. See Table 1.

## IR Carrier Generation and Modulation Timer

The  dedicated  IR  timer/counter  module  simplifies  lowspeed infrared (IR) communication. The IR timer implements two pins (IRTX and IRRX) for supporting IR transmit and receive, respectively. The IRTX pin has no corresponding port pin designation, so the standard PD, PO, and PI port control status bits are not present. However, the IRTX pin output can be manipulated high or low using the PWCN.IRTXOUT and PWCN.IRTXOE bits when the IR timer is not enabled (i.e., IREN = 0).

Table 1. Watchdog Interrupt Timeout (Sysclk = 12MHz, CD[1:0] = 00)

|   WD[1:0] | WATCHDOG CLOCK   | WATCHDOG INTERRUPT TIMEOUT   |   WATCHDOG RESET AFTER WATCHDOG INTERRUPT (µs) |
|-----------|------------------|------------------------------|------------------------------------------------|
|        00 | Sysclk/2 15      | 2.7ms                        |                                           42.7 |
|        01 | Sysclk/2 18      | 21.9ms                       |                                           42.7 |
|        10 | Sysclk/2 21      | 174.7ms                      |                                           42.7 |
|        11 | Sysclk/2 24      | 1.4s                         |                                           42.7 |

## MAXQ617

## Infrared Remote Control System-on-Chip

The IR timer is composed of a carrier generator and a carrier  modulator.  The  carrier  generation  module  uses the  16-bit  IR  carrier  register  (IRCA)  to  define  the  high and  low  time  of  the  carrier  through  the  IR  carrier  high byte (IRCAH) and IR carrier low byte (IRCAL). The carrier modulator uses the IR data bit (IRDATA) and IR modulator time register (IRMT) to determine whether the carrier or the idle condition is present on IRTX.

The IR timer is enabled when the IR enable bit (IREN) is set to 1. The IR Value register (IRV) defines the beginning value for the carrier modulator. During transmission, the  IRV  register  is  initially  loaded  with  the  IRMT  value and begins down counting towards 0000h, whereas in receive mode it counts upward from the initial IRV register value. During the receive operation, the IRV register can  be  configured  to  reload  with  0000h  when  capture occurs on detection of selected edges or can be allowed to  continue  free-running  throughout  the  receive  operation. An overflow occurs when the IR timer value rolls over from 0FFFFh to 0000h. The IR overflow flag (IROV) is set to 1 and an interrupt is generated if enabled (IRIE = 1).

## Carrier Generation Module

The IRCAH byte defines the carrier high time in terms of the number of IR input clocks, whereas the IRCAL byte defines the carrier low time.

- IR Input Clock (f IRCLK ) = f SYS /2 IRDIV[2:0]
- Carrier Frequency (f CARRIER ) = f IRCLK /(IRCAH + IRCAL + 2)
- Carrier High Time = IRCAH + 1
- Carrier Low Time = IRCAL + 1
- Carrier Duty Cycle = (IRCAH + 1)/(IRCAH + IRCAL + 2)

During transmission, the IRCA register is latched for each IRV down-count interval, and is sampled along with the IRTXPOL and IRDATA bits at the beginning of each new IRV down-count interval so that duty-cycle variation and frequency  shifting  is  possible  from  one  interval  to  the next, which is illustrated in Figure 1.

Figure  2  illustrates  the  basic  carrier  generation  and  its path to the IRTX output pin. The IR transmit polarity bit (IRTXPOL) defines the starting/idle state and the carrier polarity of the IRTX pin when the IR timer is enabled.

## IR Transmission

During IR transmission (IRMODE = 1), the carrier generator  creates  the  appropriate  carrier  waveform,  while  the carrier  modulator  performs  the  modulation.  The  carrier modulation  can  be  performed  as  a  function  of  carrier cycles or IRCLK cycles dependent on the setting of the IRCFME bit. When IRCFME = 0, the IRV down counter is clocked by the carrier frequency and thus the modulation is a function of carrier cycles (Figure 3). When IRCFME = 1, the IRV down counter is clocked by IRCLK, allowing carrier modulation timing with IRCLK resolution.

The IRTXPOL bit defines the starting/idle state as well as the carrier polarity for the IRTX pin. If IRTXPOL = 1, the IRTX pin is set to a logic-high when the IR timer module is enabled. If IRTXPOL = 0, the IRTX pin is set to a logic-low when the IR timer is enabled.

A separate register bit, IR data (IRDATA), is used to determine whether the carrier generator output is output to the IRTX pin for the next IRMT carrier cycles. When IRDATA = 1, the carrier waveform (or inversion of this waveform if IRTXPOL = 1) is output on the IRTX pin during the next IRMT cycles. When IRDATA = 0, the idle condition, as defined by IRTXPOL, is output on the IRTX pin during the next IRMT cycles.

The IR timer acts as a down counter in transmit mode. An IR transmission starts when the IREN bit is set to 1 when IRMODE = 1; when the IRMODE bit is set to 1 when IREN = 1; or when IREN and IRMODE are both set to 1 in the same instruction. The IRMT and IRCA registers, along with the IRDATA and IRTXPOL bits, are sampled at the beginning of the transmit process and every time the IR timer value reload its value. When the IRV reaches 0000h value, on the next carrier clock, it does the following:

- 1)  Reloads IRV with IRMT.
- 2)  Samples IRCA, IRDATA, and IRTXPOL.
- 3)  Generates IRTX accordingly.
- 4)  Sets IRIF to 1.
- 5)  Generates an interrupt to the CPU if enabled (IRIE = 1).

To  terminate  the  current  transmission,  the  user  can switch to receive mode (IRMODE = 0) or clear IREN to 0.

Carrier Modulation Time = IRMT + 1 carrier cycles

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 1. IR Transmit Frequency Shifting Example (IRCFME = 0)

<!-- image -->

Figure 2. IR Transmit Carrier Generation and Carrier Modulator Control

<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 3. IR Transmission Waveform (IRCFME = 0)

<!-- image -->

## IR Receive

When  configured  in  receive  mode  (IRMODE  =  0),  the IR  hardware  supports  the  IRRX  capture  function.  The IRRXSEL[1:0] bits define which edge(s) of the IRRX pin should trigger the IR timer capture function.

The IR module starts operating in the receive mode when IRMODE = 0 and IREN = 1. Once started, the IR timer (IRV)  starts  up  counting  from  0000h  when  a  qualified capture event as defined by IRRXSEL happens. The IRV register is, by default, counting carrier cycles as defined by the IRCA register. However, the IR carrier frequency detect (IRCFME) bit can be set to 1 to allow clocking of the IRV register directly with the IRCLK for finer resolution.  When  IRCFME  =  0,  the  IRCA  defined  carrier  is counted by IRV. When IRCFME = 1, the IRCLK clocks the IRV register (Figure 4).

On the next qualified event, the IR module does the following:

- 1)  Captures the IRRX pin state and transfers its value to IRDATA. If a falling edge occurs, IRDATA = 0. If a rising edge occurs, IRDATA = 1.
- 2)  Transfers its current IRV value to the IRMT.
- 3)  Resets IRV content to 0000h (if IRXRL = 1).
- 4)  Continues counting again until the next qualified event.

If  the  IR  timer  value  rolls  over  from  0FFFFh  to  0000h before a qualified event happens, the IR timer overflow (IROV) flag is set to 1 and an interrupt is generated, if enabled. The IR module continues to operate in receive mode until it is stopped by switching into transmit mode (IRMODE = 1) or clearing IREN = 0.

## Carrier Burst-Count Mode

A  special  mode  reduces  the  CPU  processing  burden when performing IR learning functions.  Typically,  when operating  in  an  IR  learning  capacity,  some  number  of carrier  cycles  are  examined  for  frequency  determination.  Once  the  frequency  has  been  determined,  the  IR receive function can be reduced to counting the number of  carrier  pulses  in  the  burst  and  the  duration  of  the combined mark-space time within the burst. To simplify this process, the receive burst-count mode (as enabled by the RXBCNT bit) can be used. When RXBCNT = 0, the standard IR receive capture functionality is in place. When  RXBCNT  =  1,  the  IRV  capture  operation  is  disabled and the interrupt flag associated with the capture no longer denotes a capture. In the carrier burst-count mode,  the  IRMT  register  only  counts  qualified  edges. The IRIF interrupt flag (normally used to signal a capture when RXBCNT = 0) now becomes set if two IRCA cycles elapse without getting a qualified edge. The IRIF interrupt  flag  thus  denotes  absence  of  the  carrier  and  the beginning  of  a  space  in  the  receive  signal.  When  the RXBCNT bit is changed from 0 to 1, the IRMT register is  set  to  0001h.  The  IRCFME  bit  is  still  used  to  define

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 4. IR Capture

<!-- image -->

whether  the  IRV  register  is  counting  system  IRCLK clocks  or  IRCA-defined  carrier  cycles.  The  IRXRL  bit defines whether the IRV register is reloaded with 0000h on detection of a qualified edge (per the IRRXSEL[1:0] bits). Figure 5 and the descriptive sequence embedded in the figure illustrate the expected usage of the receive burst-count mode.

## 16-Bit Timers/Counters

The  microcontroller  provides  two  timers/counters  that support the following functions:

- 16-bit timer/counter
- 16-bit up/down autoreload
- Counter function of external pulse
- 16-bit timer with capture
- 16-bit timer with compare
- Input/output enhancements for pulse-width modulation
- Set/reset/toggle output state on comparator match
- Prescaler with 2 n  divider (for n = 0, 2, 4, 6, 8, 10)

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 5. Receive Burst-Count Example

<!-- image -->

## Serial Peripherals

## Serial Peripheral Interface (SPI)

The device provides two SPI ports. The SPI is an interdevice bus protocol that provides fast, synchronous, fullduplex communications between devices. The integrated SPI interface acts as either an SPI master or slave device. The  master  drives  the  synchronous  clock  and  selects which  of  several  slaves  is  being  addressed.  Every  SPI peripheral consists of a single shift register and control circuitry so that an addressed serial peripheral interface SPI peripheral is simultaneously transmitting and receiving.  The maximum SPI master transfer rate is Sysclk/2.

When operating as an SPI slave, the device can support up to Sysclk/4 SPI transfer rate. Data can be transferred as an 8-bit or 16-bit value, MSB first. In addition, the SPI module supports configuration of the active SSEL state through the slave active-select pin.

Four signals are used in SPI communication:

- SCLK: The  synchronous  clock  used  by  all  devices. The master drives this clock and the slaves receive the clock. Note that SCLK can be gated and need not be driven between SPI transactions.
- MOSI: Master out-slave in. This is the main data line driven by the master to all slaves on the SPI bus. Only the selected slave clocks data from MOSI.

## MAXQ617

## Infrared Remote Control System-on-Chip

- MISO: Master in-slave out. This is the main data line driven by the selected slave to the master. Only the selected slave may drive this circuit. In fact, it is the only circuit in the SPI bus arrangement that a slave is ever permitted to drive.
- SSEL: This  signal  is  unique  to  each  slave.  When active (generally low), the selected slave must drive MISO.

## I 2 C Bus

The microcontroller provides two internal I 2 C bus master/ slave peripherals for communication with a wide variety of  other  I 2 C-enabled  devices.  The  I 2 C  bus  is  a  2-wire, bidirectional bus using two bus lines-the serial data line (SDA) and the serial clock line (SCL)-and a ground line. Both  the  SDA  and  SDL  lines  must  be  driven  as  opencollector/drain outputs. External resistors are required to pull the lines to a logic-high state.

The  device  supports  both  the  master  and  slave  protocols.  In  the  master  mode,  the  device  has  ownership of the I 2 C bus, drives the clock, and generates the START and STOP signals. This allows it to send data to a slave or receive data from a slave as required. In slave mode, the device relies  on  an  externally  generated  clock  to  drive SCL  and  responds  to  data  and  commands  only  when requested by the I 2 C master device.

## USART

The device provides two USART peripherals with operation  modes described in Table 2. The USART provides the following features:

- 2-wire interface
- Full-duplex operation for asynchronous data transfers
- Half-duplex operation for synchronous data transfers
- Programmable interrupt when transmit or receive data operation completes
- Independent programmable baud-rate generator
- Optional 9th bit parity support
- Start/stop bit support

## Table 2. USART Mode Details

| MODE   | TYPE         | START BITS   | DATA BITS   | STOP BITS   |
|--------|--------------|--------------|-------------|-------------|
| Mode 0 | Synchronous  | N/A          | 8           | N/A         |
| Mode 1 | Asynchronous | 1            | 8           | 1           |
| Mode 2 | Asynchronous | 1            | 8 + 1       | 1           |
| Mode 3 | Asynchronous | 1            | 8 + 1       | 1           |

## General-Purpose I/O

The  microcontroller  provides  port  pins  for  general-purpose I/O that have the following features:

- CMOS output drivers
- Schmitt trigger inputs
- Optional weak pullup to V DD  when operating in input mode

While the microcontroller is in a reset state, all port pins become  high  impedance  with  both  weak  pullups  and input buffers disabled, unless otherwise noted.

From  a  software  perspective,  each  port  appears  as  a group  of  peripheral  registers  with  unique  addresses. Special function pins can also be used as general-purpose I/O pins when the special functions are disabled. For a detailed description of the special functions available for each pin, refer to the User's Guide .

## On-Chip Oscillator

The  device  provides  an  internal  12MHz  oscillator  that requires no external components, thereby reducing system cost, PCB area, and radiated EMI.

## Operating Modes

The lowest power mode of operation is stop mode. In this mode, CPU state and memories are preserved, but the CPU  is  not  actively  running.  Wake-up  sources  include external  I/O  interrupts,  the  power-fail  warning  interrupt, wake-up timer, or a power-fail reset. Any time the microcontroller is in a state where code does not need to be executed, the user software can put the device into stop mode. The nanopower ring oscillator is an internal ultralow-power (400nA) 8kHz ring oscillator that can be used to drive a wake-up timer that exits stop mode. The wakeup timer is programmable by software in steps of 125 F s up to approximately 8s.

## MAXQ617

## Infrared Remote Control System-on-Chip

The power-fail monitor is always on during normal operation. However, it can be selectively disabled during stop mode  to  minimize  power  consumption.  This  feature  is enabled  using  the  power-fail  monitor  disable  (PFD)  bit in the PWCN register. The reset default state for the PFD bit  is  1,  which  disables  the  power-fail  monitor  function during  stop  mode.  If  power-fail  monitoring  is  disabled (PFD  =  1)  during  stop  mode,  the  circuitry  responsible for generating a power-fail warning or reset is shut down and neither condition is detected. Thus, the V DD  &lt; V RST condition does not invoke a reset state.

## Power-Fail Detection

Figure 6, Figure 7, Figure 8, Table 4, Table 5, and Table 6  show  the  power-fail  detection  and  response  during normal and stop-mode operation. If a reset is caused by a power-fail, the power-fail monitor can be set to one of the following intervals:

- Always on-continuous monitoring
- 2 11  nanopower ring oscillator clocks (~256ms)
- 2 12  nanopower ring oscillator clocks (~512ms)
- 2 13  nanopower ring oscillator clocks (~1.024s)

In the case where the power-fail circuitry is periodically turned on, the power-fail detection is turned on for two nanopower ring-oscillator cycles. If V DD  &gt; V RST  during detection, V DD  is monitored for an additional nanopower ring-oscillator period. If V DD  remains above V RST  for the third nanopower ring period, the CPU exits the reset state and resumes normal operation from utility ROM at 8000h after satisfying the crystal warmup period.

The  voltage  (V PFW )  below  which  a  power-fail  warning is generated is user-configurable through the power-fail warning  trip  point  control  (PFWARNCN)  bits.  Table  3 shows the supported V PFW  values.

If  a  reset  is  generated by any other event, such as the RESET pin  being  driven  low  externally  or  the  watchdog timer, the power-fail, internal regulator, and crystal remain on during the CPU reset. In these cases, the CPU exits the reset state in less than 20 crystal cycles after the reset source is removed.

## Table 3. Power-Fail Warning Voltage Selection

Figure 6. Power-Fail Detection During Normal Operation

|   PFWARNCN |   NOMINAL VOLTAGE |
|------------|-------------------|
|         00 |              1.67 |
|         01 |               1.9 |
|         10 |               2.5 |
|         11 |               2.7 |

<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

## Table 4. Power-Fail Detection States During Normal Operation

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

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 7. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

<!-- image -->

## Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                             |
|---------|-------------------|----------------------|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| B       | On                | Off                  | Off                  | Yes              | Power drop too short. Power-fail not detected.                                                                                       |
| C       | On                | On                   | On                   | Yes              | V RST < V DD < V PFW . Power-fail warning detected. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . Exit stop mode. |
| D       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                           |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                           |

## MAXQ617

## Infrared Remote Control System-on-Chip

Figure 8. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled

<!-- image -->

## Table 6. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

| STATE   | POWER-FAIL   | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                                                                                                                                                                                    |
|---------|--------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Off          | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                                                                                                                                                                              |
| B       | Off          | Off                  | Off                  | Yes              | V DD < V PFW . Power-fail not detected because power-fail monitor is disabled.                                                                                                                                                                                                                                                                                              |
| C       | On           | On                   | On                   | Yes              | V RST < V DD < V PFW . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail warning, and sets the power-fail interrupt flag. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . On stop mode exit, CPU vectors to the higher priority of power-fail and the interrupt that causes stop mode exit. |

## MAXQ617

## Infrared Remote Control System-on-Chip

Table 6. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued)

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                      |
|---------|-------------------|----------------------|----------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D       | Off               | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail, and puts CPU in reset. Power-fail monitor is turned on periodically. |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                                                                                                    |

## Applications Information

The  low-power,  high-performance  RISC  architecture  of this device makes it an excellent fit for many portable or battery-powered applications. It is ideally suited for applications such as universal remote controls that require the cost-effective integration of IR transmit/receive capability.

## Grounds and Bypassing

Careful  PCB  layout  significantly  minimizes  system-level digital  noise  that  could  interact  with  the  microcontroller or peripheral components. The use of multilayer boards is essential to allow the use of dedicated power planes. The area under any digital components should be a continuous ground plane if possible. Keep bypass capacitor leads short for best noise rejection and place the capacitors as close to the leads of the devices as possible.

CMOS design guidelines for any semiconductor require that no pin be taken above V DD  or below GND. Violation of this guideline can result in a hard failure (damage to the  silicon  inside  the  device)  or  a  soft  failure  (unintentional modification of memory contents). Voltage spikes above or below the device's absolute maximum ratings can potentially cause a devastating IC latchup.

Microcontrollers  commonly  experience  negative  voltage  spikes  through  either  their  power  pins  or  generalpurpose I/O pins. Negative voltage spikes on power pins are especially problematic as they directly couple to the internal power buses. Devices such as keypads can conduct electrostatic discharges directly into the microcontroller and seriously damage the device. System designers  must  protect  components  against  these  transients that can corrupt system memory.

## Infrared Remote Control System-on-Chip

## Additional Documentation

Engineers must have the following documents to fully use this device:

- This data sheet, containing pin descriptions, feature overviews, and electrical specifications.
- The  device-appropriate  user  guide,  containing  detailed information and programming guidelines for core features and peripherals.
- Errata sheets for specific revisions noting deviations from published specifications.

For information regarding these documents, visit Technical  Support  at support.maximintegrated.com/ micro .

## Development and Technical Support

Contact  technical  support  for  information  about  highly versatile,  affordable  development  tools,  available  from Maxim Integrated and third-party vendors.

- Evaluation kits
- Compilers
- Integrated development environments (IDEs)
- USB interface modules for programming and debugging

[For technical support, go to support.maximintegrated.com/micro .](http://support.maximintegrated.com/micro)

## Ordering Information/Selector Guide

| PART            | TEMP RANGE         | OPERATING VOLTAGE (V)   | PROGRAM MEMORY (KB)   |   DATA MEMORY (KB) |   GPIO | PIN-PACKAGE   |
|-----------------|--------------------|-------------------------|-----------------------|--------------------|--------|---------------|
| MAXQ617V-XXXX+T | -20 N C to +70 N C | 1.67 to 3.6             | 80 Flash              |                  4 |     10 | 16 WLP        |

Note: The 4-digit suffix '-XXXX' indicates a device preprogrammed at Maxim Integrated with proprietary customer-supplied software. For more information on factory preprogramming of this device, contact Maxim Integrated at support.maximintegrated.com/micro .

+ Denotes a lead(Pb)-free/RoHS-compliant package. T = Tape and reel.

M

A

X

Q

6

1

7

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.               |
|----------------|----------------|---------------|--------------------------------|
| 16 WLP         | W162K2+1       | 21-0491       | Refer to Application Note 1891 |

## I 2 C SERIAL PERIPHERAL SPECIFICATIONS

(Figure 9 and Figure 10)

| PARAMETER                                                                          | SYMBOL     | CONDITIONS                                                                                        | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   | UNITS   |
|------------------------------------------------------------------------------------|------------|---------------------------------------------------------------------------------------------------|-----------------|-----------------|-------------|-------------|---------|
|                                                                                    |            |                                                                                                   | MIN             | MAX             | MIN         | MAX         |         |
| Input Low Voltage                                                                  | V IL_I2C   | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage | -0.5            | 0.3 x V DD      | -0.5        | 0.3 x V DD  | V       |
| Input High Voltage                                                                 | V IH_I2C   | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage | 0.7 x V DD      |                 | 0.7 x V DD  | V DD + 0.5V | V       |
| Input Hysteresis (Schmitt)                                                         | V IHYS_I2C | V DD > 2V                                                                                         |                 |                 | 0.05 x V DD |             | V       |
| Output Logic-Low (Open Drain or Open Collector)                                    | V OL_I2C   | V DD > 2V, 3mA sink current                                                                       | 0               | 0.4             | 0           | 0.4         | V       |
| Capacitive Load for Each Bus Line                                                  | C B        |                                                                                                   |                 | 400             |             | 400         | pF      |
| Output Fall Time from V IH_MIN to V IL_MAX with Bus Capacitance from 10pF to 400pF | t OF_I2C   | t R/F_I2C exceeds t OF_I2C , which permits RS to be connected as shown in figure                  |                 | 250             | 20 + 0.1C B | 250         | ns      |
| Pulse Width of Spike Filtering That Must Be Suppressed by Input Filter             | t SP_I2C   |                                                                                                   |                 |                 | 0           | 50          | ns      |
| Input Current on I/O                                                               | I IN_I2C   | Input voltage from 0.1 x V DD to 0.9 x V DD                                                       | -10             | +10             | -10         | +10         | F A     |
| I/O Capacitance                                                                    | C IO_I2C   |                                                                                                   |                 | 10              |             | 10          | pF      |
| I 2 C Bus Operating Frequency                                                      | f I2C      |                                                                                                   | 0               | 100             | 0           | 400         | kHz     |
| System Frequency                                                                   | f SYS      |                                                                                                   | 0.90            |                 | 3.60        |             | MHz     |
| I 2 C Bit Rate                                                                     | f I2C      |                                                                                                   |                 | f SYS /8        |             | f SYS /8    | Hz      |
| Hold Time After (Repeated) START                                                   | t HD:STA   |                                                                                                   | 4.0             |                 | 0.6         |             | F s     |
| Clock Low Period                                                                   | t LOW_I2C  |                                                                                                   | 4.7             |                 | 1.3         |             | F s     |
| Clock High Period                                                                  | t HIGH_I2C |                                                                                                   | 4.0             |                 | 0.6         |             | F s     |
| Setup Time for Repeated START                                                      | t SU:STA   |                                                                                                   | 4.7             |                 | 0.6         |             | F s     |

## MAXQ617

## Infrared Remote Control System-on-Chip

## Appendix A

## MAXQ617

## Infrared Remote Control System-on-Chip

## I 2 C SERIAL PERIPHERAL SPECIFICATIONS (continued)

(Figure 9 and Figure 10)

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

## MAXQ617

## Infrared Remote Control System-on-Chip

## I 2 C Serial Diagrams

Figure 9. Series Resistors (R S ) for Protecting Against High-Voltage Spikes

<!-- image -->

Figure 10. I 2 C Bus Controller Timing Diagram

<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

## SERIAL PERIPHERAL INTERFACE (SPI) SPECIFICATIONS

(Figure 11 and Figure 12)

| PARAMETER                                            | SYMBOL        | MIN           | TYP      | MAX     | UNITS   |
|------------------------------------------------------|---------------|---------------|----------|---------|---------|
| SPI Master Operating Frequency                       | 1/t MCK       |               |          | f CK /2 | MHz     |
| SPI Slave Operating Frequency                        | 1/t SCK       |               |          | f CK /4 | MHz     |
| SCLK Output Pulse-Width High/ Low                    | t MCH , t MCL | t MCK /2 - 35 |          |         | ns      |
| MOSI Output Hold Time After SCLK Sample Edge         | t MOH         | t MCK /2 - 35 |          |         | ns      |
| MOSI Output Valid to Sample Edge                     | t MOV         | t MCK /2 - 35 |          |         | ns      |
| MISO Input Valid to SCLK Sample Edge Rise/Fall Setup | t MIS         | 35            |          |         | ns      |
| MISO Input to SCLK Sample Edge Rise/Fall Hold        | t MIH         | 0             |          |         | ns      |
| SCLK Input Pulse-Width High/Low                      | t SCH , t SCL | t SCK /2      | t SCK /2 |         | ns      |
| SSEL Active to First Shift Edge                      | t SSE         | 50            | 50       |         | ns      |
| MOSI Input to SCLK Sample Edge Rise/Fall Setup       | t SIS         | 35            |          |         | ns      |
| MOSI Input from SCLK Sample Edge Transition Hold     | t SIH         | 35            |          |         | ns      |
| MISO Output Valid After SCLK Shift Edge Transition   | t SOV         | 70            | 70       | 70      | ns      |
| SCLK Inactive to SSEL Rising                         | t SD          | 35            |          |         | ns      |

## MAXQ617

## Infrared Remote Control System-on-Chip

## SPI Timing Diagrams

Figure 11. SPI Master Communication Timing

<!-- image -->

Figure 12. SPI Slave Communication Timing

<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

## USART MODE 0 SPECIFICATIONS

| PARAMETER                                       | SYMBOL   | CONDITIONS   | MIN   | TYP      | MAX   | UNITS   |
|-------------------------------------------------|----------|--------------|-------|----------|-------|---------|
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

Figure 13. USART Timing Diagram

<!-- image -->

## MAXQ617

## Infrared Remote Control System-on-Chip

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/13           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.