<!-- lastmod 2023-02-14 -->
<!-- image -->

## Block Diagram

<!-- image -->

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated.com/errata .

19-5778; Rev 1; 7/12

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## General Description

The MAXQ618 is a low-power, 16-bit MAXQ ®  microcontroller designed for low-power applications including universal remote controls, consumer electronics, and white goods.  The  device  combines  a  powerful  16-bit  RISC microcontroller and integrated peripherals including two universal  synchronous/asynchronous  receiver-transmitters (USARTs) and an SPI master/slave communications port,  along  with  an  IR  module  with  carrier  frequency generation and flexible port I/O capable of multiplexed keypad control.

The device includes 80KB of flash memory and 2KB of data SRAM. The MAXQ61C is a ROM version of this device.

For  the  ultimate  in  low-power  battery-operated  performance, the device includes an ultra-low-power stop mode (0.2µA typ). In this mode, the minimum amount of circuitry is  powered.  Wake-up sources include external interrupts, the  power-fail  interrupt,  and  a  timer  interrupt.  The  microcontroller runs from a wide 1.70V to 3.6V operating voltage.

## Applications

Remote Controls

Battery-Powered Portable Equipment

Consumer Electronics

Home Appliances

White Goods

## Features

- S High-Performance, Low-Power, 16-Bit RISC Core
- S DC to 12MHz Operation Across Entire Operating Range
- S 1.70V to 3.6V Operating Voltage
- S 33 Total Instructions for Simplified Programming
- S Three Independent Data Pointers Accelerate Data Movement with Automatic Increment/Decrement
- S Dedicated Pointer for Direct Read from Code Space
- S 16-Bit Instruction Word, 16-Bit Data Bus
- S 16 x 16-Bit General-Purpose Working Registers
- S Memory Features  80KB Flash Memory
-  2KB Data SRAM
- S Additional Peripherals
-  Power-Fail Warning
-  Power-On Reset (POR)/Brownout Reset
-  Automatic IR Carrier Frequency Generation and Modulation
-  Two 16-Bit Programmable Timers/Counters with Prescaler and Capture/Compare
-  One SPI Port and Two USART Ports
-  Programmable Watchdog Timer
-  8kHz Nanopower Ring Oscillator Wake-Up Timer
-  Up to 32 General-Purpose I/Os
- S Low Power Consumption
-  0.2µA (typ), 2.0µA (max) in Stop Mode, TA = +25 N C, Power-Fail Monitor Disabled
-  2.0mA (typ) at 12MHz in Active Mode

Ordering Information appears at end of data sheet.

For related parts and recommended products to use with this part, refer to www.maximintegrated.com/MAXQ618.related .

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

| TABLE OF CONTENTS                                                                                            | TABLE OF CONTENTS   |
|--------------------------------------------------------------------------------------------------------------|---------------------|
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . . 1               |
| Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . . 1               |
| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . 1               |
| Block Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | . . 1               |
| Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | . . 4               |
| Recommended Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . .                       | . . 4               |
| SPI Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           | . . 6               |
| Pin Configuration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | . . 8               |
| Pin Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    | . . 8               |
| Detailed Description. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 11                |
| Microprocessor. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | . 11                |
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 12                |
| Stack Memory. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            | . 12                |
| Utility ROM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 12                |
| Watchdog Timer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . 12                |
| IR Carrier Generation and Modulation Timer . . . . . . . . . . . . . . . . . . . . . .                       | . 13                |
| Carrier Generation Module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | .13                 |
| IR Transmission . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | .13                 |
| IR Transmit-Independent External Carrier and Modulator Outputs .                                             | . 15                |
| IR Receive. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | .16                 |
| Carrier Burst-Count Mode. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | .16                 |
| 16-Bit Timers/Counters. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | . 17                |
| USART . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  | . 18                |
| Serial Peripheral Interface (SPI) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .            | . 18                |
| General-Purpose I/O . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | . 19                |
| On-Chip Oscillator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . 19                |
| Operating Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 20                |
| Power-Fail Detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             | .20                 |
| Applications Information. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | . 24                |
| Grounds and Bypassing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | .24                 |
| Additional Documentation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             | . 24                |
| Deviations from the MAXQ610 User's Guide for the MAXQ618. . . . .                                            | .25                 |
| Development and Technical Support. . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | . 25                |
| Ordering Information/Selector Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . 25                |
| Package Information. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | . 25                |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | . 26                |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

| LIST OF FIGURES                                                                                                         | LIST OF FIGURES   |
|-------------------------------------------------------------------------------------------------------------------------|-------------------|
| Figure 1. IR Transmit Frequency Shifting Example (IRCFME = 0) . . . . . . . . . . . . . . .                             | 14                |
| Figure 2. IR Transmit Carrier Generation and Carrier Modulator Control. . . . . . . . . .                               | 14                |
| Figure 3. IR Transmission Waveform (IRCFME = 0). . . . . . . . . . . . . . . . . . . . . . . . . .                      | 15                |
| Figure 4. External IRTXM (Modulator) Output . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | 15                |
| Figure 5. IR Capture. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 16                |
| Figure 6. Receive Burst-Count Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 17                |
| Figure 7. SPI Master Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | 18                |
| Figure 8. SPI Slave Communication Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | 19                |
| Figure 9. On-Chip Oscillator. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | 19                |
| Figure 10. Power-Fail Detection During Normal Operation . . . . . . . . . . . . . . . . . . . .                         | 20                |
| Figure 11. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled                                        | 22                |
| Figure 12. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled . . . . .                                    | 23                |
| LIST OF TABLES                                                                                                          | LIST OF TABLES    |
| Table 1. Watchdog Interrupt Timeout (Sysclk = 12MHz, CD[1:0] = 00). . . . . . . . . . .                                 | 12                |
| Table 2. USART Mode Details . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | 18                |
| Table 3. Power-Fail Detection States During Normal Operation . . . . . . . . . . . . . . . .                            | 21                |
| Table 4. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled. .                                       | 22                |
| Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled .                                       | 23                |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## ABSOLUTE MAXIMUM RATINGS

Voltage Range on V DD   .........................................-0.3V to +3.6V

Voltage Range on Any Lead Except V DD  -0.3V to (V DD  + 0.5V)

N C above +70 N C) .........................2162.2mW

(All voltages with respect to GND.) Continuous Power Dissipation (T A  = +70 N C) TQFN (single-layer board) (derate 27mW/

| TQFN (multilayer board) (derate 37mW/ N C above +70 N C) ............................2963mW   |
|-----------------------------------------------------------------------------------------------|
| Operating Temperature Range............................. 0 N C to +70 N C                     |
| Storage Temperature Range............................ -65 N C to +150 N C                     |
| Lead Temperature (excluding dice; soldering, 10s) ......+300 N C                              |
| Soldering Temperature (reflow) ......................................+260 N C                 |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## RECOMMENDED OPERATING CONDITIONS

(V DD  = V RST  to 3.6V, T A  = 0 N C to +70 N C, unless otherwise noted.) (Note 1)

| PARAMETER                                                    | SYMBOL     | CONDITIONS                 | CONDITIONS                 | MIN                                                | TYP                                                | MAX                                                | UNITS   |
|--------------------------------------------------------------|------------|----------------------------|----------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|---------|
| Supply                                                       | V DD       | Voltage                    | Voltage                    | V RST                                              |                                                    | 3.6                                                | V       |
| 1.8V Internal Regulator                                      | V REG18    |                            |                            | 1.62                                               | 1.8                                                | 1.98                                               | V       |
| Power-Fail Warning Voltage for Supply                        | V PFW      | Monitors V DD (Note 2)     | Monitors V DD (Note 2)     | 1.75                                               | 1.8                                                | 1.85                                               | V       |
| Power-Fail Reset Voltage                                     | V RST      | Monitors V DD (Note 3)     | Monitors V DD (Note 3)     | 1.64                                               | 1.67                                               | 1.70                                               | V       |
| POR Voltage                                                  | V POR      | Monitors V DD              | Monitors V DD              | 1.0                                                |                                                    | 1.42                                               | V       |
| RAM Data-Retention Voltage                                   | V DRV      | (Note 4)                   | (Note 4)                   | 1.0                                                |                                                    |                                                    | V       |
| Active Current                                               | I DD_1     | Sysclk = 12MHz (Note 5)    | Sysclk = 12MHz (Note 5)    |                                                    | 2.5                                                | 3.75                                               | mA      |
| Stop-Mode Current                                            | I S1       | Power-Fail                 | Off T A = +25 N C          |                                                    | 0.15                                               | 2.0                                                | F A     |
| Stop-Mode Current                                            | I S1       | Power-Fail                 | T A = 0 ° C +70 N C        |                                                    | 0.15                                               | 8                                                  | F A     |
| Stop-Mode Current                                            | I S2       | Power-Fail On              | T A = +25 N C              |                                                    | 22                                                 | 31                                                 | F A     |
| Stop-Mode Current                                            | I S2       | Power-Fail On              | T A = 0 ° C to +70 N C     |                                                    | 27.6                                               | 38                                                 | F A     |
| Current Consumption During Power-Fail                        | I PFR      | (Note 6)                   | (Note 6)                   | [(3 x I S2 ) + ((PCI - 3) x (I S1 + I NANO ))]/PCI | [(3 x I S2 ) + ((PCI - 3) x (I S1 + I NANO ))]/PCI | [(3 x I S2 ) + ((PCI - 3) x (I S1 + I NANO ))]/PCI | F A     |
| Power Consumption During POR                                 | I POR      |                            |                            | 100                                                | 100                                                | 100                                                | nA      |
| Stop-Mode Resume Time                                        | t ON       |                            |                            | 375 + (8192 x t HFXIN)                             | 375 + (8192 x t HFXIN)                             | 375 + (8192 x t HFXIN)                             | F s     |
| Power-Fail Monitor Startup Time                              | t PFM_ON   | (Note 4)                   | (Note 4)                   | 150                                                | 150                                                | 150                                                | F s     |
| Power-Fail Warning Detection Time                            | t PFW      | (Notes 4, 8)               | (Notes 4, 8)               | 10                                                 | 10                                                 | 10                                                 | F s     |
| Input Low Voltage for IRTX, IRRX, RESET , and All Port Pins  | V IL       |                            |                            | V GND                                              | V GND                                              | 0.3 x V DD                                         | V       |
| Input High Voltage for IRTX, IRRX, RESET , and All Port Pins | V IH       |                            |                            | 0.7 x V DD                                         | 0.7 x V DD                                         | V DD                                               | V       |
| Input Hysteresis (Schmitt)                                   | V IHYS     | V DD = 3.3V, T A = +25 N C | V DD = 3.3V, T A = +25 N C | 300                                                | 300                                                | 300                                                | mV      |
| Input Low Voltage for HFXIN                                  | V IL_HFXIN |                            |                            | V GND                                              | V GND                                              | 0.3 x V DD                                         | V       |
| Input High Voltage for HFXIN                                 | V IH_HFXIN |                            |                            | 0.7 x V DD                                         | 0.7 x V DD                                         | V DD                                               | V       |
| IRRX Input Filter Pulse-Width Reject                         | t IRRX_R   |                            |                            |                                                    |                                                    | 50                                                 | ns      |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## RECOMMENDED OPERATING CONDITIONS (continued)

(V DD  = V RST  to 3.6V, T A  = 0 N C to +70 N C, unless otherwise noted.) (Note 1)

<!-- image -->

| PARAMETER                                               | SYMBOL                     | CONDITIONS                                      | MIN                        | TYP                        | MAX                        | UNITS                      |
|---------------------------------------------------------|----------------------------|-------------------------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| IRRX Input Filter Pulse-Width Accept                    | t IRRX_A                   |                                                 | 300                        |                            |                            | ns                         |
|                                                         | V OL_IRTX                  | V DD = 3.6V, I OL = 25mA (Note 4)               |                            |                            | 1.0                        |                            |
| Output Low Voltage for IRTX                             |                            | V DD = 2.35V, I OL = 10mA (Note 4)              |                            |                            | 1.0                        | V                          |
|                                                         |                            | V DD = 1.85V, I OL = 4.5mA                      |                            |                            | 1.0                        |                            |
| Output Low Voltage for RESET and All Port Pins (Note 9) |                            | V DD = 3.6V, I OL = 11mA (Note 4)               |                            | 0.4                        | 0.5                        |                            |
|                                                         | V OL                       | V DD = 2.35V, I OL = 8mA (Note 4)               |                            | 0.4                        | 0.5                        | V                          |
|                                                         |                            | V DD = 1.85V, I OL = 4.5mA                      |                            | 0.4                        | 0.5                        |                            |
| Output High Voltage for IRTX and All Port Pins          | V OH                       | I OH = -2mA                                     | V DD - 0.5                 |                            | V DD                       | V                          |
| Input/Output Pin Capacitance for All Port Pins          | C IO                       | (Note 4)                                        |                            |                            | 15                         | pF                         |
| Input Leakage Current                                   | I L                        | Internal pullup disabled                        | -100                       |                            | +100                       | nA                         |
| Input Pullup Resistor for                               |                            | V DD = 3.0V, V OL = 0.4V (Note 4)               | 16                         | 28                         | 39                         |                            |
| RESET , IRTX, IRRX, P0, P1, P2                          | R PU                       | V DD = 2.0V, V OL = 0.4V                        | 17                         | 30                         | 41                         | k W                        |
| EXTERNAL CRYSTAL/RESONATOR                              | EXTERNAL CRYSTAL/RESONATOR | EXTERNAL CRYSTAL/RESONATOR                      | EXTERNAL CRYSTAL/RESONATOR | EXTERNAL CRYSTAL/RESONATOR | EXTERNAL CRYSTAL/RESONATOR | EXTERNAL CRYSTAL/RESONATOR |
| Crystal/Resonator                                       | f HFXIN                    |                                                 | DC                         |                            | 12                         | MHz                        |
| Crystal/Resonator Period                                | t HFXIN                    |                                                 |                            | 1/f HFXIN                  |                            | ns                         |
| Crystal/Resonator Warmup Time                           | t XTAL_RDY                 | From initial oscillation                        |                            | 8192 x t HFXIN             |                            | ms                         |
| Oscillator Feedback Resistor                            | R OSCF                     | (Note 4)                                        | 0.5                        | 1.0                        | 1.5                        | M W                        |
| EXTERNAL CLOCK INPUT                                    | EXTERNAL CLOCK INPUT       | EXTERNAL CLOCK INPUT                            | EXTERNAL CLOCK INPUT       | EXTERNAL CLOCK INPUT       | EXTERNAL CLOCK INPUT       | EXTERNAL CLOCK INPUT       |
| External Clock Frequency                                | f XCLK                     |                                                 | DC                         |                            | 12                         | MHz                        |
| External Clock Period                                   | t XCLK                     |                                                 |                            | 1/f XCLK                   |                            | ns                         |
| External Clock Duty Cycle                               | t XCLK_DUTY                | (Note 4)                                        | 45                         |                            | 55                         | %                          |
| System Clock Frequency                                  | f CK                       |                                                 |                            | f HFXIN                    |                            | MHz                        |
|                                                         |                            | HFXOUT = GND                                    |                            | f XCLK                     |                            |                            |
| System Clock Period                                     | t CK                       |                                                 |                            | 1/f CK                     |                            | ns                         |
| NANOPOWER RING                                          | NANOPOWER RING             | NANOPOWER RING                                  | NANOPOWER RING             | NANOPOWER RING             | NANOPOWER RING             | NANOPOWER RING             |
|                                                         |                            | T A = +25 N C                                   | 3.0                        | 8.0                        | 20.0                       |                            |
| Nanopower Ring Frequency                                | f NANO                     | T A = +25 N C, V DD = POR voltage (Note 4)      | 1.7                        | 2.4                        |                            | kHz                        |
| Nanopower Ring Duty Cycle                               | t NANO                     | (Note 4)                                        | 40                         |                            | 60                         | %                          |
| Nanopower Ring Current                                  | I NANO                     | Typical at V DD = 1.64V, T A = +25 ° C (Note 4) |                            | 40                         | 400                        | nA                         |
| FLASH MEMORY                                            | FLASH MEMORY               | FLASH MEMORY                                    | FLASH MEMORY               | FLASH MEMORY               | FLASH MEMORY               | FLASH MEMORY               |
| System Clock During Flash Programming/Erase             | f FPSYSCLK                 |                                                 | 6                          |                            |                            | MHz                        |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## RECOMMENDED OPERATING CONDITIONS (continued)

(V DD  = V RST  to 3.6V, T A  = 0 N C to +70 N C, unless otherwise noted.) (Note 1)

| PARAMETER                       | SYMBOL   | CONDITIONS    | MIN      | TYP   | MAX            | UNITS   |
|---------------------------------|----------|---------------|----------|-------|----------------|---------|
| Flash Erase Time                | t ME     | Mass erase    | 20       |       | 40             | ms      |
| Flash Erase Time                | t ERASE  | Page erase    | 20       |       | 40             | ms      |
| Flash Programming Time per Word | t PROG   | (Note 10)     | 20       |       | 100            | F s     |
| Write/Erase Cycles              |          |               | 20,000   |       |                | Cycles  |
| Data Retention                  |          | T A = +25 N C | 100      |       |                | Years   |
| WAKE-UP TIMER                   |          |               |          |       |                |         |
| Wake-Up Timer Interval          | t WAKEUP |               | 1/f NANO |       | 65,535/ f NANO | s       |
| IR                              |          |               |          |       |                |         |
| Carrier Frequency               | f IR     | (Note 4)      |          |       | f CK /2        | Hz      |

## SPI ELECTRICAL CHARACTERISTICS

(V DD  = V RST  to 3.6V, T A  = 0 N C to +70 N C, unless otherwise noted.) (Note 11)

| PARAMETER                                            | SYMBOL        | CONDITIONS                 | MIN                 | TYP      | MAX       | UNITS   |
|------------------------------------------------------|---------------|----------------------------|---------------------|----------|-----------|---------|
| SPI Master Operating Frequency                       | 1/t MCK       |                            |                     |          | f CK /2   | MHz     |
| SPI Slave Operating Frequency                        | 1/t SCK       |                            |                     |          | f CK /4   | MHz     |
| SPI I/O Rise/Fall Time                               | t SPI_RF      | C L = 15pF, pullup = 560 W | 8.3                 |          | 23.6      | ns      |
| SCLK Output Pulse-Width High/ Low                    | t MCH , t MCL |                            | t MCK /2 - t SPI_RF |          |           | ns      |
| MOSI Output Hold Time After SCLK Sample Edge         | t MOH         |                            | t MCK /2 - t SPI_RF |          |           | ns      |
| MOSI Output Valid to Sample Edge                     | t MOV         |                            | t MCK /2 - t SPI_RF |          |           | ns      |
| MISO Input Valid to SCLK Sample Edge Rise/Fall Setup | t MIS         |                            | 25                  |          |           | ns      |
| MISO Input to SCLK Sample Edge Rise/Fall Hold        | t MIH         |                            | 0                   |          |           | ns      |
| SCLK Inactive to MOSI Inactive                       | t MLH         |                            | t MCK /2 - t SPI_RF |          |           | ns      |
| SCLK Input Pulse-Width High/Low                      | t SCH , t SCL |                            | t SCK /2            | t SCK /2 |           | ns      |
| SSEL Active to First Shift Edge                      | t SSE         |                            | t SPI_RF            |          |           | ns      |
| MOSI Input to SCLK Sample Edge Rise/Fall Setup       | t SIS         |                            | t SPI_RF            |          |           | ns      |
| MOSI Input from SCLK Sample Edge Transition Hold     | t SIH         |                            | t SPI_RF            |          |           | ns      |
| MISO Output Valid After SCLK Shift Edge Transition   | t SOV         |                            |                     |          | 2t SPI_RF | ns      |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## SPI ELECTRICAL CHARACTERISTICS (continued)

(V DD  = V RST  to 3.6V, T A  = 0 N C to +70 N C, unless otherwise noted.) (Note 11)

| PARAMETER                                 | SYMBOL   | MIN             | TYP   | MAX               | UNITS   |
|-------------------------------------------|----------|-----------------|-------|-------------------|---------|
| SSEL Inactive                             | t SSH    | t CK + t SPI_RF |       |                   | ns      |
| SCLK Inactive to SSEL Rising              | t SD     | t SPI_RF        |       |                   | ns      |
| MISO Output Disabled After SSEL Edge Rise | t SLH    |                 |       | 2t CK + 2t SPI_RF | ns      |

Note 1: Specifications to 0 N C are guaranteed by design and are not production tested. Typical = +25 N C, V DD  = +3.3V, unless otherwise noted.

Note 2: V PFW  can be programmed to the following nominal voltage trip points: 1.8V, 1.9V, 2.55V, and 2.75V ±3%. The values listed in the Recommended Operating Conditions table are for the default configuration of 1.8V typical.

Note 3: The power-fail reset and POR detectors are designed to operate in tandem to ensure that one or both of these signals is active at all times when V DD  &lt; V RST , ensuring the device maintains the reset state until minimum operating voltage is achieved.

Note 4: Guaranteed by design and not production tested.

Note 5: Measured on the V DD  pin and the device not in reset. All inputs are connected to GND or V DD . Outputs do not source/ sink any current. The device is executing code from flash memory.

Note 6: The power-check interval (PCI) can be set to always on, or to 1024, 2048, or 4096 nanopower ring clock cycles.

Note 7: Current consumption during POR when powering up while V DD  is less than the POR release voltage.

Note 8: The minimum amount of time that V DD  must be below V PFW  before a power-fail event is detected; refer to the MAXQ610 User's Guide for details.

Note 9: The maximum total current, I OH(MAX)  and I OL(MAX) , for all listed outputs combined should not exceed 32mA to satisfy the maximum specified voltage drop. This does not include the IRTX output.

Note 10: Programming time does not include overhead associated with utility ROM interface.

Note 11: AC electrical specifications are guaranteed by design and are not production tested.

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Pin Configuration

<!-- image -->

## Pin Description

| PIN        | PIN        | NAME       | FUNCTION                                                                                                                                                                                                                                           |
|------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE   | TQFN-EP    | NAME       | FUNCTION                                                                                                                                                                                                                                           |
| POWER PINS | POWER PINS | POWER PINS | POWER PINS                                                                                                                                                                                                                                         |
| 14         | 13         | V DD       | Supply Voltage                                                                                                                                                                                                                                     |
| 16         | 15         | GND        | Ground. Connect directly to the ground plane.                                                                                                                                                                                                      |
| 27, 43     | 28, 41     | GND        | Ground. For low-current applications (< 10mA of GPIO current, exclusive of IRTX sink current), these pins can be left unconnected. If used, they should be connected directly to the ground plane.                                                 |
| 15         | 14         | REGOUT     | 1.8V Regulator Output. This pin must be connected to ground through a 1.0 F F external ceramic-chip capacitor. The capacitor must be placed as close to this pin as possible. No devices other than the capacitor should be connected to this pin. |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Pin Description (continued)

| PIN                                           | PIN                                           | NAME                                          | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE                                      | TQFN-EP                                       | NAME                                          | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| RESET PINS                                    | RESET PINS                                    | RESET PINS                                    | RESET PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | RESET PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 13                                            | 12                                            | RESET                                         | Digital, Active-Low Reset Input/Output. The device remains in reset as long as this pin is low and begins executing from the utility ROM at address 8000h when this pin returns to a high state. The pin includes pullup current source; if this pin is driven by an external device, it should be driven by an open-drain source capable of sinking in excess of 4mA. This pin can be left unconnected if there is no need to place the device in a reset state using an external signal. This pin is driven low as an output when an internal reset condition occurs. | Digital, Active-Low Reset Input/Output. The device remains in reset as long as this pin is low and begins executing from the utility ROM at address 8000h when this pin returns to a high state. The pin includes pullup current source; if this pin is driven by an external device, it should be driven by an open-drain source capable of sinking in excess of 4mA. This pin can be left unconnected if there is no need to place the device in a reset state using an external signal. This pin is driven low as an output when an internal reset condition occurs. |
| CLOCK PINS                                    | CLOCK PINS                                    | CLOCK PINS                                    | CLOCK PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | CLOCK PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 17                                            | 16                                            | HFXIN                                         | High-Frequency Crystal Input. Connect an external crystal or resonator between HFXIN and HFXOUT for use as the high-frequency system clock. Alternatively, HFXIN                                                                                                                                                                                                                                                                                                                                                                                                        | High-Frequency Crystal Input. Connect an external crystal or resonator between HFXIN and HFXOUT for use as the high-frequency system clock. Alternatively, HFXIN                                                                                                                                                                                                                                                                                                                                                                                                        |
| 18                                            | 17                                            | HFXOUT                                        | is the input for an external, high-frequency clock source when HFXOUT is connected to ground.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | is the input for an external, high-frequency clock source when HFXOUT is connected to ground.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| IR FUNCTION PINS                              | IR FUNCTION PINS                              | IR FUNCTION PINS                              | IR FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | IR FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 44                                            | 42                                            | IRTX                                          | IR Transmit Output. IR transmission pin capable of sinking 25mA. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                           | IR Transmit Output. IR transmission pin capable of sinking 25mA. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                           |
| 45                                            | 43                                            | IRRX                                          | IR Receive Input. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                                                                          | IR Receive Input. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                                                                          |
| GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                               |                                               |                                               | Port 0 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                                                                                                                           | Port 0 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                                                                                                                           |
| GPIO PORT PIN SPECIAL FUNCTION                | GPIO PORT PIN SPECIAL FUNCTION                | GPIO PORT PIN SPECIAL FUNCTION                | GPIO PORT PIN SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | GPIO PORT PIN SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1                                             | 44                                            | P0.0/IRTXM                                    | P0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | IR Modulator Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2                                             | 1                                             | P0.1/RX0                                      | P0.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | USART 0 Receive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3                                             | 2                                             | P0.2/TX0                                      | P0.2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | USART 0 Transmit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4                                             | 3                                             | P0.3/RX1                                      | P0.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | USART 1 Receive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5                                             | 4                                             | P0.4/TX1                                      | P0.4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | USART 1 Transmit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 6                                             | 5                                             | P0.5/TBA0/ TBA1                               | P0.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type B Timer 0 Pin A or Type B Timer 1 Pin A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 7                                             | 6                                             | P0.6/TBB0                                     | P0.6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type B Timer 0 Pin B                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 8                                             | 7                                             | P0.7/TBB1                                     | P0.7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type B Timer 1 Pin B                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Pin Description (continued)

| PIN      | PIN     | NAME       |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------|---------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE | TQFN-EP |            | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|          |         |            | used. GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                                        | EXTERNAL INTERRUPT                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 33       | 33      | P1.0/INT0  | P1.0                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT0                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 35       | 34      | P1.1/INT1  | P1.1                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT1                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 36       | 35      | P1.2/INT2  | P1.2                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT2                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 38       | 36      | P1.3/INT3  | P1.3                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT3                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 39       | 37      | P1.4/INT4  | P1.4                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT4                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 40       | 38      | P1.5/INT5  | P1.5                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT5                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 41       | 39      | P1.6/INT6  | P1.6                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT6                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 42       | 40      | P1.7/INT7  | P1.7                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT7                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| All      | All     | All        | Port 2 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD2, PO2, and PI2 registers. port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                  | Port 2 General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD2, PO2, and PI2 registers. port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                  |
|          |         |            | GPIO PORT PIN SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                             | GPIO PORT PIN SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 9        | 8       | P2.0/MOSI  | P2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SPI: Master Out-Slave In                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10       | 9       | P2.1/MISO  | P2.1                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SPI: Master In-Slave Out                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11       | 10      | P2.2/SCLK  | P2.2                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SPI: Slave Clock                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 12       | 11      | P2.3/ SSEL | P2.3                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SPI: Active-Low Slave Select                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 28       | 29      | P2.4/TCK   | P2.4                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JTAG: Test Clock                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 29       | 30      | P2.5/TDI   | P2.5                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JTAG: Test Data In                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 30       | 31      | P2.6/TMS   | P2.6                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JTAG: Test Mode Select                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 31       | 32      | P2.7/TDO   | P2.7                                                                                                                                                                                                                                                                                                                                                                                                                                                       | JTAG: Test Data Out                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|          |         |            | Port 3 General-Purpose, Digital I/O Pins with Interrupt Capability. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD3, PO3, and PI3 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high- impedance condition. All external interrupts must be enabled from software before they can be used. | Port 3 General-Purpose, Digital I/O Pins with Interrupt Capability. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD3, PO3, and PI3 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high- impedance condition. All external interrupts must be enabled from software before they can be used. |
|          |         |            | GPIO PORT PIN EXTERNAL INTERRUPT                                                                                                                                                                                                                                                                                                                                                                                                                           | GPIO PORT PIN EXTERNAL INTERRUPT                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 19       | 18      | P3.0/INT8  | P3.0                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT8                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 20       | 19      | P3.1/INT9  | P3.1                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT9                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 21       | 20      | P3.2/INT10 | P3.2                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT10                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 22       | 21      | P3.3/INT11 | P3.3                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT11                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 23       | 22      | P3.4/INT12 | P3.4                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT12                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 24       | 23      | P3.5/INT13 | P3.5                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT13                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 25       | 24      | P3.6/INT14 | P3.6                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT14                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 26       | 25      | P3.7/INT15 | P3.7                                                                                                                                                                                                                                                                                                                                                                                                                                                       | INT15                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Pin Description (continued)

| PIN                | PIN                | NAME               | FUNCTION                                                                                                                                                                                                |
|--------------------|--------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE           | TQFN-EP            |                    |                                                                                                                                                                                                         |
| NO CONNECTION PINS | NO CONNECTION PINS | NO CONNECTION PINS | NO CONNECTION PINS                                                                                                                                                                                      |
| 32, 34, 37         | -                  | DNC                | Do Not Connect. Do not bond out for normal operation.                                                                                                                                                   |
| -                  | 26, 27             | N.C.               | No Connection. Not internally connected.                                                                                                                                                                |
| EXPOSED PAD        | EXPOSED PAD        | EXPOSED PAD        | EXPOSED PAD                                                                                                                                                                                             |
| -                  | -                  | EP                 | Exposed Pad. For low-current applications (< 10mA of GPIO current, exclusive of IRTX sink current), these pins can be left unconnected. If used, they should be connected directly to the ground plane. |

## Detailed Description

The  MAXQ618  provides  integrated,  low-cost  solutions that simplify the design of IR communications equipment such  as  universal  remote  controls.  Standard  features include the highly optimized, single-cycle, MAXQ, 16-bit RISC  core;  80KB  flash  memory;  2KB  data  RAM;  soft stack;  16  general-purpose  registers;  and  three  data pointers. The MAXQ core has the industry's best MIPS/ mA rating, allowing developers to achieve the same performance as competing microcontrollers at substantially lower clock rates. Lower active-mode current combined with the even lower MAXQ618 stop-mode current (0.2 F A typ) results in increased battery life. Application-specific peripherals include flexible timers for generating IR carrier frequencies and modulation. A high-current IR drive pin  capable  of  sinking  up  to  25mA  current  and  output pins capable of sinking up to 5mA are ideal for IR applications. It  also  includes  general-purpose I/O pins ideal for keypad matrix input, and a power-fail-detection circuit to notify the application when the supply voltage is nearing the microcontroller's minimum operating voltage.

At the heart of the device is the MAXQ 16-bit, RISC core. Operating from DC to 12MHz, almost all instructions execute in a single clock cycle (83.3ns at 12MHz), enabling nearly 12MIPS true-code operation. When active device operation is not required, an ultra-low-power stop mode can  be  invoked  from  software,  resulting  in  quiescent current consumption of less than 0.2 F A (typ) and 2.0 F A (max). The combination of high-performance instructions and  ultra-low  stop-mode  current  increases  battery  life over competing microcontrollers. An integrated POR circuit with brownout support resets the device to a known condition following a power-up cycle or brownout condition. Additionally, a power-fail warning flag is set, and a power-fail interrupt can be generated when the system voltage falls below the power-fail warning voltage, V PFW . The power-fail warning feature allows the application to notify the user that the system supply is low and appropriate action should be taken.

## Microprocessor

The  device  is  based  on  Maxim's  low-power,  16-bit MAXQ20S family of RISC cores. The core supports the Harvard  memory  architecture  with  separate  16-bit  program and data address buses. A fixed 16-bit instruction word is standard, but data can be arranged in 8 or 16 bits.  The  MAXQ  core  in  the  device  is  implemented  as a  pipelined  processor  with  performance  approaching 1MIPS  per  MHz.  The  16-bit  data  path  is  implemented around register modules, and each register module contributes specific functions to the core. The accumulator module consists of sixteen 16-bit registers and is tightly coupled with the arithmetic logic unit (ALU). A configurable soft stack supports program flow.

Execution  of  instructions  is  triggered  by  data  transfer  between  functional  register  modules  or  between  a functional  register  module  and  memory.  Because  data movement involves only source and destination modules, circuit  switching activities are limited to active modules only.  For  power-conscious  applications,  this  approach localizes  power  dissipation  and  minimizes  switching noise.  The  modular  architecture  also  provides  a  maximum of flexibility and reusability that are important for a microprocessor used in embedded applications.

The MAXQ instruction set is highly orthogonal. All arithmetical  and  logical  operations  can  use  any  register  in conjunction with the accumulator. Data movement is supported  from  any  register  to  any  other  register.  Memory is accessed through specific data-pointer registers with autoincrement/decrement support.

## Stack Memory

The device provides a soft stack that can be used to store program return addresses (for subroutine calls and interrupt handling) and other general-purpose data. This soft stack is located in the 2KB SRAM data memory, which means  that  the  SRAM  data  memory  must  be  shared between the soft stack and general-purpose application data storage. However, the location and size of the soft stack  is  determined  by  the  user,  providing  maximum flexibility when allocating resources for a particular application. The stack is used automatically by the processor when the CALL, RET, and RETI instructions are executed and  when  an  interrupt  is  serviced.  An  application  can also store and retrieve values explicitly using the stack by means of the PUSH, POP, and POPI instructions.

The  SP  pointer  indicates  the  current  top  of  the  stack, which initializes by default to the top of the SRAM data memory. As values are  pushed  onto  the  stack,  the  SP pointer decrements, which means that the stack grows downward  towards  the  bottom  (lowest  address)  of  the data memory. Popping values off the stack causes the SP  pointer  value  to  increase.  Refer  to  the MAXQ610 User's Guide for more details.

## Utility ROM

The utility ROM is a 1.5KB block of internal ROM memory located in program space beginning at address 8000h. This ROM includes the following routines:

- Production	test	routines	(internal	memory	tests,	mem -ory  loader,  etc.),  which  are  used  for  internal  testing

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Memory

The microcontroller incorporates several memory types:

- 80KB	flash	memory
- 2KB	SRAM	data	memory
- 1.5KB	utility	ROM
- Soft	stack
- only, and are generally of no use to the end-application developer
- User-callable	 routines	 for	 buffer	 copying	 and	 fast table lookup (more information on these routines can be found in the MAXQ610 User's Guide)

Following any reset, execution begins in the utility ROM at  address  8000h.  At  this  point,  unless  test  mode  has been  invoked  (which  requires  special  programming through the JTAG interface), the utility ROM in the device always automatically jumps to location 0000h, which is the beginning of user application code.

## Watchdog Timer

The  internal  watchdog  timer  greatly  increases  system reliability. The timer resets the device if software execution  is  disturbed.  The  watchdog  timer  is  a  free-running counter designed to be periodically reset by the application  software.  If  software  is  operating  correctly,  the counter is periodically reset and never reaches its maximum count. However, if software operation is interrupted, the timer does not reset, triggering a system reset and optionally  a  watchdog  timer  interrupt.  This  protects  the system against electrical noise or electrostatic discharge (ESD)  upsets  that  could  cause  uncontrolled  processor operation. The internal watchdog timer is an upgrade to older designs with external watchdog devices, reducing system cost and simultaneously increasing reliability.

The watchdog timer functions as the source of both the watchdog timer  timeout  and  the  watchdog  timer  reset. The  timeout  period  can  be  programmed  in  a  range  of 2 15   to  2 24   system  clock  cycles.  An  interrupt  is  generated  when  the  timeout  period  expires  if  the  interrupt is  enabled.  All  watchdog  timer  resets  follow  the  programmed interrupt timeouts by 512 system clock cycles. If  the  watchdog  timer  is  not  restarted  for  another  full interval in this time period, a system reset occurs when the reset timeout expires. See Table 1.

Table 1. Watchdog Interrupt Timeout (Sysclk = 12MHz, CD[1:0] = 00)

|   WD[1:0] | WATCHDOG CLOCK   | WATCHDOG INTERRUPT TIMEOUT   |   WATCHDOG RESET AFTER WATCHDOG INTERRUPT (µs) |
|-----------|------------------|------------------------------|------------------------------------------------|
|        00 | Sysclk/2 15      | 2.7ms                        |                                           42.7 |
|        01 | Sysclk/2 18      | 21.9ms                       |                                           42.7 |
|        10 | Sysclk/2 21      | 174.7ms                      |                                           42.7 |
|        11 | Sysclk/2 24      | 1.4s                         |                                           42.7 |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## IR Carrier Generation and Modulation Timer

The  dedicated  IR  timer/counter  module  simplifies  lowspeed infrared (IR) communication. The IR timer implements two pins (IRTX and IRRX) for supporting IR transmit and receive, respectively. The IRTX pin has no corresponding port pin designation, so the standard PD, PO, and PI port control status bits are not present. However, the IRTX pin output can be manipulated high or low using the PWCN.IRTXOUT and PWCN.IRTXOE bits when the IR timer is not enabled (i.e., IREN = 0).

The IR timer is composed of a carrier generator and a carrier  modulator.  The  carrier  generation  module  uses the  16-bit  IR  carrier  register  (IRCA)  to  define  the  high and  low  time  of  the  carrier  through  the  IR  carrier  high byte (IRCAH) and IR carrier low byte (IRCAL). The carrier modulator uses the IR data bit (IRDATA) and IR modulator time register (IRMT) to determine whether the carrier or the idle condition is present on IRTX.

The IR timer is enabled when the IR enable bit (IREN) is set to 1. The IR Value register (IRV) defines the beginning value for the carrier modulator. During transmission, the  IRV  register  is  initially  loaded  with  the  IRMT  value and begins down counting towards 0000h, whereas in receive mode it counts upward from the initial IRV register value. During the receive operation, the IRV register can  be  configured  to  reload  with  0000h  when  capture occurs on detection of selected edges or can be allowed to  continue  free-running  throughout  the  receive  operation. An overflow occurs when the IR timer value rolls over from 0FFFFh to 0000h. The IR overflow flag (IROV) is set to 1 and an interrupt is generated if enabled (IRIE = 1).

## Carrier Generation Module

The IRCAH byte defines the carrier high time in terms of the number of IR input clocks, whereas the IRCAL byte defines the carrier low time.

- IR	Input	Clock	(f IRCLK ) = f SYS /2 IRDIV[2:0]
- Carrier	Frequency	(f CARRIER ) = f IRCLK /(IRCAH + IRCAL + 2)
- Carrier	High	Time	=	IRCAH	+	1
- Carrier	Low	Time	=	IRCAL	+	1
- Carrier	Duty	Cycle	=	(IRCAH	+	1)/(IRCAH	+	IRCAL	+	2)

During transmission, the IRCA register is latched for each IRV down-count interval, and is sampled along with the IRTXPOL and IRDATA bits at the beginning of each new IRV down-count interval so that duty-cycle variation and frequency  shifting  is  possible  from  one  interval  to  the next, which is illustrated in Figure 1.

Figure  2  illustrates  the  basic  carrier  generation  and  its path to the IRTX output pin. The IR transmit polarity bit (IRTXPOL) defines the starting/idle state and the carrier polarity of the IRTX pin when the IR timer is enabled.

## IR Transmission

During IR transmission (IRMODE = 1), the carrier generator  creates  the  appropriate  carrier  waveform,  while  the carrier  modulator  performs  the  modulation.  The  carrier modulation  can  be  performed  as  a  function  of  carrier cycles or IRCLK cycles dependent on the setting of the IRCFME bit. When IRCFME = 0, the IRV down counter is clocked by the carrier frequency and thus the modulation is a function of carrier cycles. When IRCFME = 1, the IRV down counter is clocked by IRCLK, allowing carrier modulation timing with IRCLK resolution.

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

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 1. IR Transmit Frequency Shifting Example (IRCFME = 0)

<!-- image -->

Figure 2. IR Transmit Carrier Generation and Carrier Modulator Control

<!-- image -->

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## IR Transmit-Independent External Carrier and Modulator Outputs

The normal transmit mode modulates the carrier based upon the IRDATA bit. However, the user has the option to  input  the  modulator  (envelope)  on  an  external  pin  if desired. If the IRENV[1:0] bits are configured to 01b or 10b, the modulator/envelope is output to the IRTXM pin. The  IRDATA  bit  is  output  directly  to  the  IRTXM  pin  (if

IRTXPOL = 0) on each IRV down-count interval boundary just as if it were being used to internally modulate the carrier frequency. If IRTXPOL = 1, the inverse of the IRDATA bit is output to the IRTXM pin on the IRV interval downcount  boundaries.  See  Figure  4.  When  the  envelope mode is enabled, it is possible to output either the modulated (IRENV[1:0] = 01b) or unmodulated (IRENV[1:0] = 10b) carrier to the IRTX pin.

Figure 3. IR Transmission Waveform (IRCFME = 0)

<!-- image -->

Figure 4. External IRTXM (Modulator) Output

<!-- image -->

## IR Receive

When  configured  in  receive  mode  (IRMODE  =  0),  the IR  hardware  supports  the  IRRX  capture  function.  The IRRXSEL[1:0] bits define which edge(s) of the IRRX pin should trigger the IR timer capture function.

The IR module starts operating in the receive mode when IRMODE = 0 and IREN = 1. Once started, the IR timer (IRV)  starts  up  counting  from  0000h  when  a  qualified capture event as defined by IRRXSEL happens. The IRV register is, by default, counting carrier cycles as defined by the IRCA register. However, the IR carrier frequency detect (IRCFME) bit can be set to 1 to allow clocking of the IRV register directly with the IRCLK for finer resolution.  When  IRCFME  =  0,  the  IRCA  defined  carrier  is counted by IRV. When IRCFME = 1, the IRCLK clocks the IRV register.

On  the  next  qualified  event,  the  IR  module  does  the following:

- 1)  Captures the IRRX pin state and transfers its value to IRDATA. If a falling edge occurs, IRDATA = 0. If a rising edge occurs, IRDATA = 1.
- 2)  Transfers its current IRV value to the IRMT.
- 3)  Resets IRV content to 0000h (if IRXRL = 1).
- 4)  Continues counting again until the next qualified event.

If  the  IR  timer  value  rolls  over  from  0FFFFh  to  0000h before a qualified event happens, the IR timer overflow (IROV) flag is set to 1 and an interrupt is generated, if

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 5. IR Capture

<!-- image -->

enabled. The IR module continues to operate in receive mode until it is stopped by switching into transmit mode (IRMODE = 1) or clearing IREN = 0.

## Carrier Burst-Count Mode

A  special  mode  reduces  the  CPU  processing  burden when performing IR learning functions.  Typically,  when operating  in  an  IR  learning  capacity,  some  number  of carrier  cycles  are  examined  for  frequency  determination.  Once  the  frequency  has  been  determined,  the  IR receive function can be reduced to counting the number of  carrier  pulses  in  the  burst  and  the  duration  of  the combined mark-space time within the burst. To simplify this process, the receive burst-count mode (as enabled by the RXBCNT bit) can be used. When RXBCNT = 0, the standard IR receive capture functionality is in place. When  RXBCNT  =  1,  the  IRV  capture  operation  is  disabled and the interrupt flag associated with the capture no longer denotes a capture. In the carrier burst-count mode,  the  IRMT  register  only  counts  qualified  edges. The IRIF interrupt flag (normally used to signal a capture when RXBCNT = 0) now becomes set if two IRCA cycles elapse without getting a qualified edge. The IRIF interrupt flag thus denotes absence of the carrier and the beginning of a space in the receive signal. When the RXBCNT bit  is  changed  from  0  to  1,  the  IRMT  register  is  set  to 0001h. The IRCFME bit is still used to define whether the IRV register is counting system IRCLK clocks or IRCAdefined  carrier  cycles.  The  IRXRL  bit  defines  whether the IRV register is reloaded with 0000h on detection of

- 16-bit	up/down	autoreload
- Counter	function	of	external	pulse
- 16-bit	timer	with	capture
- 16-bit	timer	with	compare
- Input/output	enhancements	for	pulse-width	modulation
- Set/reset/toggle	output	state	on	comparator	match
- Prescaler	with	2 n  divider (for n = 0, 2, 4, 6, 8, 10)

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 6. Receive Burst-Count Example

<!-- image -->

a  qualified  edge  (per  the  IRXSEL[1:0]  bits).  Figure  6 and  the  descriptive  sequence  embedded  in  the  figure illustrate the expected usage of the receive burst-count mode.

## 16-Bit Timers/Counters

The  microcontroller  provides  two  timers/counters  that support the following functions:

- 16-bit	timer/counter

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## USART

The device provides two USART peripherals with the following features:

- 2-wire	interface
- Full-duplex	operation	for	asynchronous	data	transfers
- Half-duplex	operation	for	synchronous	data	transfers
- Programmable	interrupt	when	transmit	or	receive	data operation completes
- Independent	programmable	baud-rate	generator
- Optional	9th	bit	parity	support
- Start/stop	bit	support

## Table 2. USART Mode Details

Figure 7. SPI Master Communication Timing

| MODE   | TYPE         | START BITS   | DATA BITS   | STOP BITS   |
|--------|--------------|--------------|-------------|-------------|
| Mode 0 | Synchronous  | N/A          | 8           | N/A         |
| Mode 1 | Asynchronous | 1            | 8           | 1           |
| Mode 2 | Asynchronous | 1            | 8 + 1       | 1           |
| Mode 3 | Asynchronous | 1            | 8 + 1       | 1           |

<!-- image -->

## Serial Peripheral Interface (SPI)

The  integrated  SPI  provides  an  independent  serial communication  channel  that  communicates  synchronously with peripheral devices in a multiple master or multiple slave system. The interface allows access to a 4-wire, full-duplex serial bus, and can be operated in either master mode or slave mode. Collision detection is provided when two or more masters attempt a data transfer at the same time.

The maximum SPI master transfer rate is Sysclk/2. When operating as an SPI slave, the device can support up to Sysclk/4 SPI transfer rate. Data is transferred as an 8-bit or  16-bit  value,  MSB  first.  In  addition,  the  SPI  module supports configuration of an active SSEL state (active low or active high) through the slave active select.

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 8. SPI Slave Communication Timing

<!-- image -->

## General-Purpose I/O

The  microcontroller  provides  port  pins  for  general-purpose I/O that have the following features:

- CMOS	output	drivers
- Schmitt	trigger	inputs
- Optional	weak	pullup	to	V DD when operating in input mode

While the microcontroller is in a reset state, all port pins become  high  impedance  with  both  weak  pullups  and input buffers disabled, unless otherwise noted.

From  a  software  perspective,  each  port  appears  as  a group  of  peripheral  registers  with  unique  addresses. Special function pins can also be used as general-purpose I/O pins when the special functions are disabled. For a detailed description of the special functions available for each pin, refer to the MAXQ610 User's Guide .

## On-Chip Oscillator

An external quartz crystal or a ceramic resonator can be connected between HFXIN and HFXOUT, as illustrated in Figure 9.

Figure 9. On-Chip Oscillator

<!-- image -->

Noise  at  HFXIN  and  HFXOUT  can  adversely  affect  onchip clock timing. It is good design practice to place the crystal  and  capacitors  near  the  oscillator  circuitry  and connect  HFXIN  and  HFXOUT  to  ground  with  a  direct short trace. The typical values of external capacitors vary with the type of crystal to be used and should be initially selected  based  on  load  capacitance  as  suggested  by the manufacturer.

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Operating Modes

The lowest power mode of operation is stop mode. In this mode, CPU state and memories are preserved, but the CPU  is  not  actively  running.  Wake-up  sources  include external  I/O  interrupts,  the  power-fail  warning  interrupt, wake-up timer, or a power-fail reset. Any time the microcontroller is in a state where code does not need to be executed, the user software can put the device into stop mode. The nanopower ring oscillator is an internal ultralow-power (400nA) 8kHz ring oscillator that can be used to drive a wake-up timer that exits stop mode. The wakeup timer is programmable by software in steps of 125 F s up to approximately 8s.

The power-fail monitor is always on during normal operation. However, it can be selectively disabled during stop mode  to  minimize  power  consumption.  This  feature  is enabled  using  the  power-fail  monitor  disable  (PFD)  bit in the PWCN register. The reset default state for the PFD bit  is  1,  which  disables  the  power-fail  monitor  function during  stop  mode.  If  power-fail  monitoring  is  disabled (PFD  =  1)  during  stop  mode,  the  circuitry  responsible for generating a power-fail warning or reset is shut down and neither condition is detected. Thus, the V DD  &lt; V RST condition does not invoke a reset state.

## Power-Fail Detection

Figures 10, 11, and 12 show the power-fail detection and response  during  normal  and  stop-mode  operation.  If  a reset  is  caused  by  a  power-fail,  the  power-fail  monitor can be set to one of the following intervals:

- Always	on-continuous	monitoring
- 2 11  nanopower ring oscillator clocks (~256ms)
- 2 12  nanopower ring oscillator clocks (~512ms)
- 2 13  nanopower ring oscillator clocks (~1.024s)

In the case where the power-fail circuitry is periodically turned on, the power-fail detection is turned on for two nanopower ring-oscillator cycles. If V DD  &gt; V RST  during detection, V DD  is monitored for an additional nanopower ring-oscillator period. If V DD  remains above V RST  for the third nanopower ring period, the CPU exits the reset state and resumes normal operation from utility ROM at 8000h after satisfying the crystal warmup period.

If  a  reset  is  generated by any other event, such as the RESET pin  being  driven  low  externally  or  the  watchdog timer, the power-fail, internal regulator, and crystal remain on during the CPU reset. In these cases, the CPU exits the reset state in less than 20 crystal cycles after the reset source is removed.

Figure 10. Power-Fail Detection During Normal Operation

<!-- image -->

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

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

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 11. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

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

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Figure 12. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled

<!-- image -->

## Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

| STATE   | POWER-FAIL   | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                                                                                                                                                                                    |
|---------|--------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Off          | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                                                                                                                                                                              |
| B       | Off          | Off                  | Off                  | Yes              | V DD < V PFW . Power-fail not detected because power-fail monitor is disabled.                                                                                                                                                                                                                                                                                              |
| C       | On           | On                   | On                   | Yes              | V RST < V DD < V PFW . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail warning, and sets the power-fail interrupt flag. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . On stop mode exit, CPU vectors to the higher priority of power-fail and the interrupt that causes stop mode exit. |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

Table 5. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued)

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

Microcontrollers  commonly  experience  negative  voltage  spikes  through  either  their  power  pins  or  general- purpose I/O pins. Negative voltage spikes on power pins are especially problematic as they directly couple to the internal power buses. Devices such as keypads can conduct electrostatic discharges directly into the microcontroller and seriously damage the device. System designers  must  protect  components  against  these  transients that can corrupt system memory.

## Additional Documentation

Designers  must  have  the  following  documents  to  fully use  all  the  features  of  this  device.  This  data  sheet contains  pin  descriptions,  feature  overviews,  and  electrical  specifications.  Errata  sheets  contain  deviations from  published  specifications.  The  user's  guides  offer detailed  information  about  device  features  and  operation. The following documents can be downloaded from www.maximintegrated.com/microcontrollers .

- This	MAXQ618	data	sheet,	which	contains	electrical/ timing specifications, pin descriptions, and package information.
- The MAXQ618 revision-specific errata sheet ( www.maximintegrated.com/errata ).
- The MAXQ610 User's Guide , which contains detailed information on features and operation, including programming.

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Deviations from the MAXQ610 User's Guide for the MAXQ618

The MAXQ610  User's  Guide contains  all  the  information  that  is  needed  to  develop  application  code  for  the MAXQ618  microcontroller.  However,  even  though  the MAXQ610  and  the  MAXQ618  are  largely  code-compatible,  there  are  certain  differences  between  the  two devices that must be kept in mind when referring to the MAXQ610 User's Guide .

The  following  registers  on  the  MAXQ610  (which  are described  in  the MAXQ610 User's Guide )  do  not  exist on the MAXQ618, and all references to them should be disregarded:

- Port	4	Output	Register	(PO4)
- Port	4	Direction	Register	(PD4)
- Port	4	Input	Register	(PI4)

## Development and Technical Support

Maxim  and  third-party  suppliers  provide  a  variety  of highly versatile, affordably priced development tools for this microcontroller, including the following:

- Compilers
- In-circuit	emulators
- Integrated	Development	Environments	(IDEs)
- Serial-to-JTAG	and	USB-to-JTAG	interface	boards	for programming  and  debugging  (for  microcontrollers with rewritable memory)

A partial list of development tool vendors can be found at www.maximintegrated.com/MAXQ\_tools .

For technical support, go to https://support.maximintegrated.com/micro .

## Ordering Information/Selector Guide

| PART           | TEMP RANGE       | OPERATING VOLTAGE (V)   | PROGRAM MEMORY (KB)   |   DATA MEMORY (KB) |   GPIO | PIN-PACKAGE   |
|----------------|------------------|-------------------------|-----------------------|--------------------|--------|---------------|
| MAXQ618J-0000+ | 0 N C to +70 N C | 1.7 to 3.6              | 80 Flash              |                  2 |     32 | 44 TQFN-EP*   |
| MAXQ618X-0000+ | 0 N C to +70 N C | 1.7 to 3.6              | 80 Flash              |                  2 |     32 | Bare die      |

Note: The 4-digit suffix '-0000' indicates a microcontroller in the default state with the flash memory unprogrammed. Any value other than 0000 indicates a device preprogrammed at Maxim with proprietary customer-supplied software. For more information on factory preprogramming of these devices, contact Maxim at https://support.maximintegrated.com/micro . Information on masked ROM devices is also available.

+ Denotes a lead(Pb)-free/RoHS-compliant package.

* EP = Exposed pad.

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 44 TQFN-EP     | T4477+2        | 21-0144       | 90-0127            |

## MAXQ618

## 16-Bit Microcontroller with Infrared Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/11            | Initial release                                                                                                                                                                                                                                                                                                                                         | -               |
|                 1 | 7/12            | Added the continuous power dissipation information to the Absolute Maximum Ratings section; removed the ESR reference from the REGOUT description in the Pin Description table; changed the MAXQ core reference to MAXQ20S core in the Microprocessor section; updated the IRDIV bit range from [1:0] to [2:0] in the Carrier Generation Module section | 4, 8, 11, 13    |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.