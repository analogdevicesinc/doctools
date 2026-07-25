<!-- lastmod 2022-08-03 -->
<!-- image -->

- S Core Functionality
-  High-Performance, Low-Power 16-Bit MAXQ20S RISC Core
-  DC to 20MHz Operation Across Entire Operating Range
-  2.4V to 3.6V Operating Voltage
-  Three Independent Data Pointers Accelerate Data Movement with Automatic Inc/Dec
-  Dedicated Pointer for Direct Read from Code Space
-  16-Bit Instruction Word, 16-Bit Data Bus
-  16 x 16-Bit General-Purpose Working Registers
-  Optimized for C Compiler
- S Memory
-  48KB Flash Memory 1KB Page Sectors
- 20,000 Erase/Write Cycles per Sector
-  2KB Data SRAM
-  Masked ROM Available
- S I/O and Peripherals
-  Power-Fail Warning
-  Power-On Reset/Brownout Reset
-  Three 16-Bit Programmable Timers/Counters with Prescaler
-  Programmable Watchdog Timer
-  Internal 20MHz Clock ±5%
-  Dual SPI Ports with 16-Byte FIFO
-  I 2 C Communication Port
-  Up to 12 General-Purpose I/O Pins
- S Low Power Consumption
-  0.2µA (typ) in Stop Mode
-  2.6mA (typ) at 20MHz
-  Divided System Clock Modes Available

Ordering Information appears at end of data sheet.

For related parts and recommended products to use with this part, refer to www.maximintegrated.com/MAXQ615.related .

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## General Description

The MAXQ615 is a low-power, 16-bit MAXQ M microcontroller  designed  for  low-power  applications.  The  device combines  a  powerful  16-bit  RISC  microcontroller  and integrated  peripherals  including  multiple  high-speed serial  communication  interfaces  and  flexible  port  I/O. High-speed communication interfaces include dual SPI and I 2 C. The device also provides three instances of the 16-bit  timer  B  peripheral.  A  16  x  16  hardware  multiply/ accumulate  with  48-bit  accumulator  provides  support for  computationally  intensive  applications.  The  device provides 48KB of flash memory and 2KB of data SRAM. For  the  ultimate  in  low-power  performance,  the  device includes  an  ultra-low-power  stop  mode  (0.2 F A  typ).  In this mode, the minimum amount of circuitry is powered. Wake-up sources include external interrupts, the powerfail  interrupt,  and  a  timer  interrupt.  The  microcontroller runs from a single 2.4V to 3.6V power-supply operating voltage.

## Applications

Portable Computing

Battery-Powered Portable Equipment

Consumer Electronics

Home Appliances

White Goods

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated.com/errata .

Features

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## ABSOLUTE MAXIMUM RATINGS

| (All voltages relative to GND.)                                                |
|--------------------------------------------------------------------------------|
| Voltage Range on V DD .........................................-0.3V to +3.6V  |
| Voltage Range on Any Lead.................... -0.3V to (V DD + 0.5V)           |
| Continuous Output Current                                                      |
| All I/O Pins Combined.....................................................32mA |

| Continuous Power Dissipation (T A = +70 N C) TQFN (derate 16.9mW/ N C above +70 N C)..................1349mW   |
|----------------------------------------------------------------------------------------------------------------|
| Operating Temperature Range ......................... -40 N C to +85 N C                                       |
| Storage Temperature Range .......................... -65 N C to +150 N C                                       |
| Lead Temperature (soldering, 10s)………………...........+300 N C                                                     |
| Soldering Temperature (reflow)……..…………………....+260 N C                                                          |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## RECOMMENDED DC OPERATING CONDITIONS

(V DD  = V RST  to V DD(MAX) , T A  = -40 N C to +85 N C, unless otherwise noted. Typical values are measured at T A  = +25 N C. AC electrical specifications and all specifications to T A  = -40 N C are guaranteed by design and are not production tested.)

| PARAMETER                          | SYMBOL         | CONDITIONS                 | MIN          | TYP          | MAX          | UNITS        |
|------------------------------------|----------------|----------------------------|--------------|--------------|--------------|--------------|
| Supply Voltage                     | V DD           |                            | V RST        |              | 3.6          | V            |
| 1.8V Internal Regulator            | V REG18        |                            | 1.62         | 1.7          | 1.98         | V            |
| Power-Fail Warning Voltage         | V PFW          | Monitors V DD (Notes 1, 2) | 2.45         | 2.6          | 2.75         | V            |
| Power-Fail Reset Voltage           | V RST          | Monitors V DD (Note 3)     | 2.35         | 2.4          | 2.45         | V            |
| Power-On Reset Voltage             | V POR          | Monitors V DD              | 1.0          |              | 1.45         | V            |
| Supply Current                     | I DD1          | f CK = 20MHz (Note 4)      |              | 2.6          | 4.5          | mA           |
| Idle Current                       | I IDLE         | (Note 5)                   | 1.0          | 750          | 850          | F A          |
| Stop Mode Current                  | I STOP1 PF Off | T A = +25 N C              |              | 0.3          | 3.0          | F A          |
| Stop Mode Current                  | I STOP1 PF Off | T A = 0 N C to +70 N C     |              | 1            | 12           | F A          |
| Stop Mode Current                  | I STOP1 PF Off | T A = -40 N C to +85 N C   |              | 2            | 16           | F A          |
| Stop Mode Current                  | I STOP2 PF On  | T A = +25 N C              |              | 22.0         | 35.0         |              |
| Stop Mode Current                  | I STOP2 PF On  | T A = 0 N C to +70 N C     |              | 22.0         | 42.0         |              |
| Stop Mode Current                  | I STOP2 PF On  | T A = -40 N C to +85 N C   |              | 22.0         | 45           |              |
| Stop Mode Resume Time              | t ON           |                            |              | 300          |              | F s          |
| Power-Fail Monitor Startup Time    | t PFM_ON       | (Note 6)                   |              |              | 150          | F s          |
| Power-Fail Warning Detection Time  | t PFW          |                            | 10           |              |              | F s          |
| CLOCK SOURCE                       | CLOCK SOURCE   | CLOCK SOURCE               | CLOCK SOURCE | CLOCK SOURCE | CLOCK SOURCE | CLOCK SOURCE |
| Internal Ring Oscillator Frequency | f CLK          | ±5%                        |              | 20           |              | MHz          |
| Ring Oscillator Duty Cycle         | t CLK_DUTY     |                            | 45           |              | 55           | %            |
| System Clock Frequency             | t CK           |                            |              | f CK         |              | MHz          |
| System Clock Period                | f CK           |                            |              | 1/f CK       |              | ns           |
| DIGITAL I/O                        | DIGITAL I/O    | DIGITAL I/O                | DIGITAL I/O  | DIGITAL I/O  | DIGITAL I/O  | DIGITAL I/O  |
| Input Hysteresis                   | V IHYS         | V DD = 3.3V, T A = +25 N C |              | 300          |              | mV           |
| Input Low Voltage                  | V IL           |                            | V GND        | 0.3          | x V DD       | V            |
| Input High Voltage                 | V IH           |                            | 0.7 x V DD   |              | V DD         | V            |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## RECOMMENDED DC OPERATING CONDITIONS (continued)

(V DD  = V RST  to V DD(MAX) , T A  = -40 N C to +85 N C, unless otherwise noted. Typical values are measured at T A  = +25 N C. AC electrical specifications and all specifications to T A  = -40 N C are guaranteed by design and are not production tested.)

| PARAMETER                             | SYMBOL       | CONDITIONS               | MIN          | TYP          | MAX          | UNITS        |
|---------------------------------------|--------------|--------------------------|--------------|--------------|--------------|--------------|
| Output Low Voltage (Note 7)           | V OL         | V DD = 3.6V, I OL = 11mA |              | 0.4          | 0.5          | V            |
| Output Low Voltage (Note 7)           |              | V DD = 2.4V, I OL = 8mA  |              | 0.4          | 0.5          | V            |
| Output High Voltage                   | V OH         | I OH = -2mA (Note 7)     | V DD - 0.5   |              | V DD         | V            |
| Input Leakage Current                 | I L          | Internal pullup disabled | -100         |              | +100         | nA           |
| Input Capacitance                     | C IO         |                          |              |              | 15           | pF           |
| Input Pullup Resistance               | R PU         | V DD = 3.0V, V OL = 0.4V | 16           | 28           | 39           | k I          |
| FLASH MEMORY                          | FLASH MEMORY | FLASH MEMORY             | FLASH MEMORY | FLASH MEMORY | FLASH MEMORY | FLASH MEMORY |
| System Clock During Flash Programming |              |                          | 2            |              |              | MHz          |
| Flash Erase Time                      | t ME         | Mass erase               | 20           |              | 40           | ms           |
| Flash Erase Time                      | t ERASE      | Page erase               | 20           |              | 40           | ms           |
| Flash Programming Time Per Word       | t PMG        |                          | 20           |              | 100          | F s          |
| Write/Erase Cycles                    |              |                          | 20,000       |              |              | Cycles       |
| Data Retention                        |              | T A = +25 N C            | 100          |              |              | Years        |

## SPI ELECTRICAL CHARACTERISTICS

(V DD  = 1.7V to 3.6V, T A  = -40 N C to +85 N C, unless otherwise noted. AC electrical specifications are guaranteed by design and are not production tested.) (Figures 1, 2)

| PARAMETER                                            | SYMBOL        | MIN                 | TYP                 | MAX                 | UNITS   |
|------------------------------------------------------|---------------|---------------------|---------------------|---------------------|---------|
| SPI Master Operating Frequency                       | 1/t MCK       |                     |                     | f CK /2             | MHz     |
| SPI Slave Operating Frequency                        | 1/t SCK       |                     |                     | f CK /4             | MHz     |
| SPI I/O Rise/Fall Time                               | t SPI_RF      | 8.3                 |                     | 23.6                | ns      |
| SCLK Output Pulse-Width High/ Low                    | t MCH , t MCL | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | ns      |
| MOSI Output Hold Time After SCLK Sample Edge         | t MOH         | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | ns      |
| MOSI Output Valid to Sample Edge                     | t MOV         | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | ns      |
| MISO Input Valid to SCLK Sample Edge Rise/Fall Setup | t MIS         | 25                  | 25                  | 25                  | ns      |
| MISO Input to SCLK Sample Edge Rise/Fall Hold        | t MIH         | 0                   | 0                   | 0                   | ns      |
| SCLK Inactive to MOSI Inactive                       | t MLH         | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | t MCK /2 - t SPI_RF | ns      |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## SPI ELECTRICAL CHARACTERISTICS (continued)

(V DD  = 1.7V to 3.6V, T A  = -40 N C to +85 N C, unless otherwise noted. AC electrical specifications are guaranteed by design and are not production tested.) (Figures 1, 2)

Figure 1. SPI Master Communications Timing

| PARAMETER                                          | SYMBOL        | MIN               | TYP MAX           | UNITS   |
|----------------------------------------------------|---------------|-------------------|-------------------|---------|
| SCLK Input Pulse-Width High/ Low                   | t SCH , t SCL | t SCK /2          |                   | ns      |
| SSEL Active to First Shift Edge                    | t SSE         | t SPI_RF          |                   | ns      |
| MOSI Input to SCLK Sample Edge Rise/Fall Setup     | t SIS         | t SPI_RF          |                   | ns      |
| MOSI Input from SCLK Sample Edge Transition Hold   | t SIH         | t SPI_RF          |                   | ns      |
| MISO Output Valid After SCLK Shift Edge Transition | t SOV         |                   | 2t SPI_RF         | ns      |
| SSEL Inactive                                      | t SSH         | t CK + t SPI_RF   |                   | ns      |
| SCLK Inactive to SSEL Rising                       | t SD          | t SPI_RF          |                   | ns      |
| MISO Output Disabled After SSEL Edge Rise          | t SLH         | 2t CK + 2t SPI_RF | 2t CK + 2t SPI_RF | ns      |

<!-- image -->

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

Figure 2. SPI Slave Communications Timing

<!-- image -->

## I 2 C ELECTRICAL CHARACTERISTICS

(V DD   =  V RST   to  V DD(MAX) ,  T A   =  -40°C  to  +85°C,  unless  otherwise  noted.  AC  electrical  specifications  and  all  specifications  to T A  = -40°C are guaranteed by design and are not production tested.) (Figure 3)

| PARAMETER                                                                          | SYMBOL   | CONDITIONS                                                                                                                                       | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   | UNITS   |
|------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------------|-------------|-------------|---------|
|                                                                                    |          |                                                                                                                                                  | MIN             | MAX             | MIN         | MAX         |         |
| Input Low Voltage                                                                  | V IL_I2C | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage                                                | -0.5            | 0.3 x V DD      | -0.5        | 0.3 x V DD  | V       |
| Input High Voltage                                                                 | V IH_I2C | Supply voltages that mismatch I 2 C bus levels must relate input levels to the R P pullup voltage                                                | 0.7 x V DD      |                 | 0.7 x V DD  | V DD + 0.5  | V       |
| Output Logic-Low (Open Drain or Open Collector)                                    | V OL_I2C | V DD > 2V, 3mA sink current                                                                                                                      | 0               | 0.4             | 0           | 0.4         | V       |
| Output Fall Time from V IH_MIN to V IL_MAX with Bus Capacitance from 10pF to 400pF | t OF_I2C | t R/F_I2C exceeds t OF_I2C , which permits R S to be connected as shown in I 2 C Bus Controller Timing table; C B = SDA or SCL capacitance in pF |                 | 250             | 20 + 0.1C B | 250         | ns      |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## I 2 C ELECTRICAL CHARACTERISTICS (continued)

(V DD   =  V RST   to  V DD(MAX) ,  T A   =  -40°C  to  +85°C,  unless  otherwise  noted.  AC  electrical  specifications  and  all  specifications  to T A  = -40°C are guaranteed by design and are not production tested.) (Figure 3)

|                                                                        |          | CONDITIONS                                  | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   | UNITS   |
|------------------------------------------------------------------------|----------|---------------------------------------------|-----------------|-----------------|-------------|-------------|---------|
| PARAMETER                                                              | SYMBOL   |                                             | MIN             | MAX             | MIN         | MAX         |         |
| Pulse Width of Spike Filtering That Must Be Suppressed by Input Filter | t SP_I2C |                                             |                 |                 | 0           | 50          | ns      |
| Input Current on I/O                                                   | I IN_I2C | Input voltage from 0.1 x V DD to 0.9 x V DD | -10             | +10             | -10         | +10         | F A     |
| I/O Capacitance                                                        | C IO_I2C |                                             |                 | 10              |             | 10          | pF      |

## I 2 C BUS CONTROLLER TIMING

(Figure 4)

| PARAMETER                                                                       | SYMBOL     | STANDARD MODE   | STANDARD MODE   | FAST MODE   | FAST MODE   | UNITS   |
|---------------------------------------------------------------------------------|------------|-----------------|-----------------|-------------|-------------|---------|
|                                                                                 |            | MIN             | MAX             | MIN         | MAX         | UNITS   |
| I 2 C Bus Operating Frequency                                                   | f I2C      | 0               | 100             | 0           | 400         | kHz     |
| System Frequency                                                                | f SYS      | 0.90            |                 | 3.60        |             | MHz     |
| I 2 C Bit Rate                                                                  | f I2C      |                 | f SYS /8        |             | f SYS /8    | Hz      |
| Hold Time After (Repeated) START                                                | t HD:STA   | 4.0             |                 | 0.6         |             | F s     |
| Clock Low Period                                                                | t LOW_I2C  | 4.7             |                 | 1.3         |             | F s     |
| Clock High Period                                                               | t HIGH_I2C | 4.0             |                 | 0.6         |             | F s     |
| Setup Time for Repeated START                                                   | t SU:STA   | 4.7             |                 | 0.6         |             | F s     |
| Hold Time for Data                                                              | t HD:DAT   | 0               | 3.45            | 0           | 0.9         | F s     |
| Setup Time for Data                                                             | t SU:DAT   | 250             |                 | 100         |             | ns      |
| SDA/SCL Fall Time                                                               | t F_I2C    |                 | 300             | 20 + 0.1C B | 300         | ns      |
| SDA/SCL Rise Time                                                               | t R_I2C    |                 | 1000            | 20 + 0.1C B | 300         | ns      |
| Setup Time for STOP                                                             | t SU:STO   | 4.0             |                 | 0.6         |             | F s     |
| Bus Free Time Between STOP and START                                            | t BUF      | 4.7             |                 | 1.3         |             | F s     |
| Capacitive Load for Each Bus Line                                               | C B        |                 | 400             |             | 400         | pF      |
| Noise Margin at the Low Level for Each Connected Device (Including Hysteresis)  | V nL_I2C   | 0.1 x V DD      |                 | 0.1 x V DD  |             | V       |
| Noise Margin at the High Level for Each Connected Device (Including Hysteresis) | V nH_I2C   | 0.2 x V DD      |                 | 0.2 x V DD  |             | V       |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

Figure 3. Series Resistors (R S ) for Protecting Against High-Voltage Spikes

<!-- image -->

Figure 4. I 2 C Bus Controller Timing Diagram

<!-- image -->

- Note 1: The user application must check the status of the power-fail warning flag before writing to flash memory to ensure complete write operations. Writes to flash memory must not be performed when the supply voltage drops below the power-fail warning levels.
- Note 2: The power-fail warning monitor and the power-fail reset monitor track each other with a typical delta between the two of 0.13V at minimum power-fail warning selection.
- Note 3: The power-fail reset and POR detectors operate in tandem so one or both of these signals is active at all times when V DD &lt; V RST , ensuring the device maintains the reset state until minimum operating voltage is achieved.
- Note 4: Measured on the V DD  pin and the part not in reset. All inputs are connected to GND or V DD . Outputs do not source/sink any current. Part is executing code from flash memory.
- Note 5: Measured on the V DD  pin and the part not in reset. All inputs are connected to GND or V DD . Outputs do not source/sink any current. Program execution is halted in idle mode.
- Note 6: The minimum amount of time that V DD  must be below V DD  before a power-fail event is detected. Refer to the user manual for detailed information.
- Note 7: The maximum total current, I OH(MAX)  and I OL(MAX) , for all listed outputs combined should not exceed 32mA to satisfy the maximum specified voltage drop.

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Pin Configuration

<!-- image -->

## Pin Description

| PIN        | NAME       | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| POWER PINS | POWER PINS | POWER PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 6          | V DD       | Digital Supply Voltage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 8          | GND        | Digital Ground                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 7          | REG18      | Regulator Capacitor. This pin must be connected to ground through an external 1 F F external ceramic chip capacitor. This capacitor should be placed as close as possible to this pin. No other device may be attached to this pin.                                                                                                                                                                                                                                                                                                |
| RESET PINS | RESET PINS | RESET PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1          | RESET      | Active-Low Reset. This bidirectional pin recognizes external active-low reset inputs and employs an internal pullup resistor to allow for a combination of wired-OR external reset sources. An RC is not required for power-up, as this function is provided internally. This pin also acts as an output when the source of the reset is internal to the device (e.g., watchdog timer, power-fail, etc). In this case, the pin is low while the processor is in a reset state, and returns high as the processor exits this state. |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Pin Description (continued)

| PIN                      | NAME                     | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                 | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GENERAL-PURPOSE I/O PINS | GENERAL-PURPOSE I/O PINS | GENERAL-PURPOSE I/O PINS                                                                                                                                                                                                                                                                                                                                                                                                 | GENERAL-PURPOSE I/O PINS                                                                                                                                                                                                                                                                                                                                                                                                 |
|                          |                          | General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All alternate functions must be enabled from software before they can be used. | General-Purpose, Digital I/O Pins. These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All alternate functions must be enabled from software before they can be used. |
|                          |                          | ALTERNATE FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                       | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2                        | P0.0                     | INT0                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 0                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2                        | P0.0                     | MOSI0                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI0: Master Out-Slave In                                                                                                                                                                                                                                                                                                                                                                                                |
| 3                        | P0.1                     | INT1                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 1                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3                        | P0.1                     | MISO0                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI0: Master In-Slave Out                                                                                                                                                                                                                                                                                                                                                                                                |
| 4                        | P0.2                     | INT2                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 2                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4                        | P0.2                     | SCLK0                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI0: SPI Clock                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5                        | P0.3                     | INT3                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 3                                                                                                                                                                                                                                                                                                                                                                                                     |
| 5                        | P0.3                     | SSEL0                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI0: Slave Select                                                                                                                                                                                                                                                                                                                                                                                                       |
| 9                        | P0.4                     | INT4                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 4                                                                                                                                                                                                                                                                                                                                                                                                     |
| 9                        | P0.4                     | TCK                                                                                                                                                                                                                                                                                                                                                                                                                      | JTAG Test Clock                                                                                                                                                                                                                                                                                                                                                                                                          |
| 10                       | P0.5                     | INT5                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 5                                                                                                                                                                                                                                                                                                                                                                                                     |
| 10                       | P0.5                     | TDI                                                                                                                                                                                                                                                                                                                                                                                                                      | JTAG Data In                                                                                                                                                                                                                                                                                                                                                                                                             |
| 11                       | P0.6                     | INT6                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 6                                                                                                                                                                                                                                                                                                                                                                                                     |
| 11                       | P0.6                     | TMS                                                                                                                                                                                                                                                                                                                                                                                                                      | JTAG Test Mode Select                                                                                                                                                                                                                                                                                                                                                                                                    |
| 12                       | P0.7                     | INT7                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 7                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12                       | P0.7                     | TDO                                                                                                                                                                                                                                                                                                                                                                                                                      | JTAG Data Out                                                                                                                                                                                                                                                                                                                                                                                                            |
| 13                       | P1.0                     | INT8                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 8                                                                                                                                                                                                                                                                                                                                                                                                     |
| 13                       | P1.0                     | MOSI1                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI1: Master Out-Slave In                                                                                                                                                                                                                                                                                                                                                                                                |
| 13                       | P1.0                     | TBA0                                                                                                                                                                                                                                                                                                                                                                                                                     | Timer B0 Pin A                                                                                                                                                                                                                                                                                                                                                                                                           |
| 14                       | P1.1                     | INT9                                                                                                                                                                                                                                                                                                                                                                                                                     | External Interrupt 9                                                                                                                                                                                                                                                                                                                                                                                                     |
| 14                       | P1.1                     | MISO1                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI1: Master In-Slave Out                                                                                                                                                                                                                                                                                                                                                                                                |
| 14                       | P1.1                     | TBB0                                                                                                                                                                                                                                                                                                                                                                                                                     | Timer B0 Pin B                                                                                                                                                                                                                                                                                                                                                                                                           |
| 15                       | P1.2                     | INT10                                                                                                                                                                                                                                                                                                                                                                                                                    | External Interrupt 10                                                                                                                                                                                                                                                                                                                                                                                                    |
| 15                       | P1.2                     | SCLK1                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI1: SPI Clock                                                                                                                                                                                                                                                                                                                                                                                                          |
| 15                       | P1.2                     | SCL                                                                                                                                                                                                                                                                                                                                                                                                                      | I 2 C Clock                                                                                                                                                                                                                                                                                                                                                                                                              |
| 15                       | P1.2                     | TBA1                                                                                                                                                                                                                                                                                                                                                                                                                     | Timer B1 Pin A                                                                                                                                                                                                                                                                                                                                                                                                           |
| 16                       | P1.3                     | INT11                                                                                                                                                                                                                                                                                                                                                                                                                    | External Interrupt 11                                                                                                                                                                                                                                                                                                                                                                                                    |
| 16                       | P1.3                     | SSEL1                                                                                                                                                                                                                                                                                                                                                                                                                    | SPI1: Slave Select                                                                                                                                                                                                                                                                                                                                                                                                       |
| 16                       | P1.3                     | SDA                                                                                                                                                                                                                                                                                                                                                                                                                      | I 2 C Clock                                                                                                                                                                                                                                                                                                                                                                                                              |
| 16                       | P1.3                     | TBB1                                                                                                                                                                                                                                                                                                                                                                                                                     | Timer B1 Pin B                                                                                                                                                                                                                                                                                                                                                                                                           |
| EXPOSED PAD              | EXPOSED PAD              | EXPOSED PAD                                                                                                                                                                                                                                                                                                                                                                                                              | EXPOSED PAD                                                                                                                                                                                                                                                                                                                                                                                                              |
| -                        | EP                       | Exposed Pad. Leave EP electrically unconnected.                                                                                                                                                                                                                                                                                                                                                                          | Exposed Pad. Leave EP electrically unconnected.                                                                                                                                                                                                                                                                                                                                                                          |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Block Diagram

<!-- image -->

## Detailed Description

The  MAXQ615  is  a  MAXQ20S-based  microcontroller that  supports  a  variety  of  applications.  One  application would be power-supply sequencing and default voltage programming. It could also perform host interface control, backlight algorithm, fading control, and gas gauge algorithm functions. The microcontroller can add bootloader functionality to an application, making field updates much simpler. Additionally, a low-power sleep mode makes this device ideal for battery-powered equipment.

## Microprocessor

The MAXQ20S core supports the Harvard memory architecture  with  separate  16-bit  program  and  data  address buses.  A  fixed  16-bit  instruction  word  is  standard,  but data can be arranged in 8 or 16 bits. The MAXQ core is implemented as a pipelined processor with performance approaching  1MIPS  per  MHz.  The  16-bit  data  path  is implemented around register modules, and each register module  contributes  specific  functions  to  the  core.  The accumulator  module  consists  of  sixteen  16-bit  registers and is tightly coupled with the arithmetic logic unit (ALU). Program flow is supported by a configurable soft stack.

Execution  of  instructions  is  triggered  by  data  transfer between functional register modules, or between a functional register module and memory. Since data movement involves  only  source  and  destination  modules,  circuit switching activities are limited to active modules only. For power-conscious  applications,  this  approach  localizes power  dissipation  and  minimizes  switching  noise.  The modular architecture also provides a maximum of flexibility and reusability that are important for a microprocessor used in embedded applications.

The MAXQ instruction set is highly orthogonal. All arithmetic  and  logical  operations  can  use  any  register  in conjunction with the accumulator. Data movement is supported  from  any  register  to  any  other  register.  Memory is  accessed through specific data pointer registers with auto increment/decrement support.

## Memory

The microcontroller incorporates several memory types:

- 48KB	flash	memory
- 2KB	SRAM
- 6KB	utility	ROM
- RAM-based	software	stack

## Password-Protected Memory Access

Some  applications  require  preventative  measures  to protect  against  simple  access  and  viewing  of  program code memory. To address this need for code protection, the device permits full access to in-system programming, in-application programming, or in-circuit debugging only after  a  password  has  been  supplied.  The  password  is defined as the 16 words of physical program memory at addresses  0010h -001Fh.  These  memory  locations  can be used for general code space if a unique password is not needed.

When the password lock bit (PWL) is set to 1, password is  required  in  order  to  access  the  ROM  loader  utilities that support read/write accessing of internal memory and debug functions. When PWL is cleared to 0, these utilities  are  fully  accessible through the utility ROM without password.

The PWL bit defaults to 1 by a power-on reset. In order to access the ROM utilities, a correct password is needed; otherwise,  access  of  ROM  utilities  is  denied.  Once  the correct  password  has  been  supplied  by  the  user,  the ROM clears the password lock. The PWL remains clear until  a  power-on reset occurs or it is set by application software.

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

The  password  can  be  entered  through  the  bootloader interface  selected  by  the  PSS1  and  PSS0  bits  in  system programming when the SPE bit is set to logic 1, or selected through the TAP interface directly by issuing a password-unlock command.

hardware  retrofit  when  updates  are  required.  Remote software  uploads  are  possible  that  enable  physically inaccessible  applications  to  be  frequently  updated.  If in-system programmability is not required, a commercial gang programmer can be used for mass programming.

## Utility ROM

The utility ROM is a block of internal ROM that defaults to a starting address of 8000h. The utility ROM consists of subroutines that can be called from application software. These include the following:

- In-system	programming	using	bootstrap	loader
- Read	chip	revision	or	manufacturer	ID
- Test	routines	(internal	memory	tests,	memory	loader, etc.)
- User-callable	 routines	 for	 in-application	 flash	 programming and fast table lookup

Following any reset, execution begins in the utility ROM. The  ROM  software  determines  whether  the  program execution  should  immediately  jump  to  location  0000h, the start of system code, or to one of the special routines mentioned.  Routines  within  the  utility  ROM  are  useraccessible  and  can  be  called  as  subroutines  by  the application software. More information on the utility ROM functions is contained in the user manual.

## Loading Flash Memory with the Bootstrap Loader

An  internal  bootstrap  loader  allows  the  device  to  be reloaded over the JTAG interface. This allows software to be upgraded in-system, eliminating the need for a costly

## Watchdog Timer

An internal watchdog timer greatly increases system reliability. The timer resets the device if software execution is disturbed. The watchdog timer is a free-running counter designed to be periodically reset by the application software. If software is operating correctly, the counter is periodically reset and never reaches its maximum count. However,  if  software  operation  is  interrupted,  the  timer does  not  reset,  triggering  a  system  reset  and  optionally a watchdog timer interrupt. This protects the system against electrical noise or electrostatic discharge (ESD) upsets that could cause uncontrolled processor operation. The internal watchdog timer is an upgrade to older designs with external watchdog devices, reducing system cost and simultaneously increasing reliability.

The watchdog timer functions as the source of both the watchdog timer  timeout  and  the  watchdog  timer  reset. The  timeout  period  can  be  programmed  in  a  range  of 215 to  232  system  clock  cycles.  An  interrupt  is  generated  when  the  timeout  period  expires  if  the  interrupt is  enabled.  All  watchdog  timer  resets  follow  the  programmed interrupt timeouts by 512 system clock cycles. If  the  watchdog  timer  is  not  restarted  for  another  full interval in this time period, a system reset occurs when the reset timeout expires.

Table 1. Watchdog Timer Intervals (fSYSCLK = 20MHz, CD[1:0] = 00)

|   WD[1:0] | WATCHDOG INTERRUPT TIMEOUT   |   WATCHDOG INTERRUPT PERIOD (ms) |   WATCHDOG RESET AFTER WATCHDOG INTERRUPT (µs) |
|-----------|------------------------------|----------------------------------|------------------------------------------------|
|        00 | Sysclk x 2 15                |                             1.62 |                                           25.6 |
|        01 | Sysclk x 2 16                |                             3.27 |                                           25.6 |
|        10 | Sysclk x 2 17                |                             6.55 |                                           25.6 |
|        11 | Sysclk x 2 18                |                             13.1 |                                           25.6 |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## General-Purpose I/O

The general-purpose I/O pins have the following features:

- CMOS	output	drivers
- Schmitt	trigger	inputs
- Optional	weak	pullup	to	VDD when operating in input mode

While the microcontroller is in a reset state, all port pins become  high  impedance  with  input  buffers  and  weak pullups disabled, unless otherwise noted.

From  a  software  perspective,  each  port  appears  as  a group  of  peripheral  registers  with  unique  addresses. Special function pins can also be used as general-purpose I/O pins when the special functions are disabled. For a detailed description of the special functions available for each pin, refer to the user manual for this device.

## 16-Bit Timers/Counters

The  microcontroller  provides  three  timers/counters  that support the following functions:

- 16-bit	timer/counter
- 16-bit	up/down	autoreload
- Counter	function	of	external	pulse
- 16-bit	timer	with	capture
- 16-bit	timer	with	compare
- Input/output enhancements for pulse-width modulation
- Set/reset/toggle	output	state	on	comparator	match
- Prescaler	with	2n	divider	(for	n	=	0,	2,	4,	6,	8,	10)

## Serial Peripherals

## Serial Peripheral Interface (SPI)

The device provides two SPI ports. The SPI is an interdevice bus protocol that provides fast, synchronous, fullduplex communications between devices. The integrated SPI interface acts as either an SPI master or slave device. The  master  drives  the  synchronous  clock  and  selects which  of  several  slaves  is  being  addressed.  Every  SPI peripheral consists of a single shift register and control circuitry so that an addressed serial peripheral interface SPI peripheral is simultaneously transmitting and receiving.  The maximum SPI master transfer rate is Sysclk/2. When operating as an SPI slave, the device can support up to Sysclk/4 SPI transfer rate. Data can be transferred as an 8-bit or 16-bit value, MSB first. In addition, the SPI module supports configuration of the active SSEL state through the slave active-select pin.

Four signals are used in SPI communication:

- SCLK: The  synchronous  clock  used  by  all  devices. The master drives this clock and the slaves receive the clock. Note that SCLK can be gated and need not be driven between SPI transactions.
- MOSI: Master out-slave in. This is the main data line driven by the master to all slaves on the SPI bus. Only the selected slave clocks data from MOSI.
- MISO: Master in-slave out. This is the main data line driven by the selected slave to the master. Only the selected slave may drive this circuit. In fact, it is the only circuit in the SPI bus arrangement that a slave is ever permitted to drive.
- SSEL: This  signal  is  unique  to  each  slave.  When active (generally low), the selected slave must drive MISO.

## I 2 C Bus

The microcontroller provides an internal I 2 C bus master/ slave  for  communication  with  a  wide  variety  of  other I 2 C-enabled peripherals. The I 2 C bus is a 2-wire, bidirectional bus using two bus lines-the serial data line (SDA) and the serial clock line (SCL)-and a ground line. Both the SDA and SDL lines must be driven as open-collector/ drain outputs. External resistors are required to pull the lines to a logic-high state.

The  device  supports  both  the  master  and  slave  protocols.  In  the  master  mode,  the  device  has  ownership of the I 2 C bus, drives the clock, and generates the START and STOP signals. This allows it to send data to a slave or receive data from a slave as required. In slave mode, the device relies  on  an  externally  generated  clock  to  drive SCL  and  responds  to  data  and  commands  only  when requested by the I 2 C master device.

## Hardware Multiplier

The  internal  hardware  multiplier  supports  high-speed multiplications.  The  multiplier  can  complete  a  16-bit  x 16-bit  multiply-and-accumulate/subtract  operation  in  a single cycle with the support of a 48-bit accumulator. The multiplier  is  a  fixed-point  arithmetic  unit.  The  operands can be either signed or unsigned numbers, but the data type must be defined by the application software prior to loading the operand registers.

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

Seven different multiply operations can be performed without requiring direct intervention of the microcontroller core.

- Unsigned	16-bit	multiplication
- Unsigned	16-bit	multiplication	and	accumulation
- Unsigned	16-bit	multiplication	and	subtraction
- Signed	16-bit	multiplication
- Signed	16-bit	multiplication	and	negate
- Signed	16-bit	multiplication	and	accumulation
- Signed	16-bit	multiplication	and	subtraction

Each  of  these  operations  is  controlled  and  accessed through six SFR registers. The 8-bit multiplier control register  (MCNT) selects the operation, data type, operand count,  optional  hardware-based  square  function,  write option on the MC register, the overflow flag, and the clear control for operand registers and accumulator. Loading and unloading of the data is achieved through five 16-bit SFR registers. Only one cycle is needed for computation. This means that the result of an operation is ready in the next cycle immediately following the loading of the last operand.  Back-to-back  operations  can  be  performed without wait states between operations, independent of data type and operand count.

## Clock Sources

All operations are synchronized to a single internal system clock. The clock runs at approximately 20MHz. More information on the clock timing is contained in the electrical tables of this data sheet. Internal clock divisors are available to reduce power consumption and or improve compatibility with slower peripherals.

Approximately 25µs after V DD  exceeds V RST  (a power-on reset),  the  internal  oscillator  stabilzes  and  code  execution begins.

## In-Circuit Debug

Embedded debug hardware and software are developed and integrated to provide full in-circuit debugging capability in a user application environment. These hardware and software features include:

- A	debug	engine
- A	 set	 of	 registers	 providing	 the	 ability	 to	 set	 breakpoints on register, code, or data using debug service routines stored in ROM

Collectively, these hardware and software features support two modes of in-circuit debug functionality:

- ·
- Background	mode:

CPU is executing the normal user program Allows the host to configure and set up the in-circuit debugger

- Debug	mode:

The debugger takes over the control of the CPU Read/write accesses to internal registers and memory

Single-step of the CPU for trace operation

The interface to the debug engine is the JTAG interface. To prevent unauthorized access, the debug engine prevents access to system memory.

## Operating Modes

## Idle Mode

The  idle  mode  suspends  the  processor  so  that  no instructions  are  fetched  and  no  processing  occurs. Setting  the  IDLE  bit  in  the  CKCN  register  to  1  invokes the idle mode. The instruction that executes this step is the last instruction prior to halting the program counter. Once in idle mode, all resources are preserved and all clocks remain active with the enabled peripherals, and power  monitor  continue  to  work,  so  the  processor  can exit the idle state using any of the interrupt sources that are enabled. The IDLE bit is cleared automatically once the idle state is exited, allowing the processor to execute the  instruction  that  immediately  follows  the  instruction that set the IDLE bit.

To  conserve  power  consumption,  application  can  put the processor into idle mode when code execution is not required. One example of use is for SPI communication. The application code can preload SPI FIFO with desired number of bytes for transmission and then put the processor into idle mode. The device continues with the SPI transaction  and  only  interrupts  the  processor  when  the enabled SPI interrupts are generated. Another use is to configure one of the timers to interrupt the device at a predetermined interval. The application code can finish its task and then put the processor into idle mode. The timer  then  wakes  up  the  processor  when  the  specified interval has elapsed.

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Stop Mode

The  lowest  power  mode  of  operation  for  the  device  is stop mode. In this mode, CPU state and memories are preserved, but the CPU is not actively running. Wake-up sources  include  external  I/O  interrupts,  the  power-fail warning  interrupt,  or  a  power-fail  reset.  Any  time  the microcontroller is in a state where code does not need to be executed, the user software can put the device into stop mode. The nanopower ring oscillator is an internal ultra-low-power (400nA), 8kHz ring oscillator that can be used to drive a wake-up timer that exits stop mode. The wake-up timer is programmable by software in steps of 125µs up to approximately 8s.

The power-fail monitor is always on during normal operation. However, it can be selectively disabled during stop mode  to  minimize  power  consumption.  This  feature  is enabled using the power-fail monitor disable

(PFD) bit  in  the  PWCN  register.  The  reset  default  state for the PFD bit is 1, which disables the power-fail monitor function during stop mode. If power-fail monitoring is disabled (PFD = 1) during stop mode, the circuitry responsible for generating a power-fail warning or reset is shut down and neither condition is detected. Thus, the V DD  &lt; VRST  condition does not invoke a reset state. However, in  the  event that V DD  falls below the POR level, a POR is  generated.  The  power-fail  monitor  is  enabled  prior to  stop  mode  exit  and  before  code  execution  begins. If  a  power-fail  warning  condition  (V DD   &lt;  V PFW )  is  then detected, the power-fail interrupt flag is set on stop mode exit. If a power-fail condition is detected (V DD  &lt; V RST ), the CPU goes into reset.

## Power-Fail Detection

Figure 5,  6,  and  7  show  the  power-fail  detection and response during  normal and stop mode operation.

Figure 5. Power-Fail Detection During Normal Operation

<!-- image -->

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Table 2. Power-Fail Detection States During Normal Operation

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                   |
|---------|-------------------|----------------------|----------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | -                | V DD < V POR.                                                                                                                                                                                              |
| B       | On                | On                   | On                   | -                | V POR < V DD < V RST. Crystal warmup time, t XTAL_RDY . CPU held in reset.                                                                                                                                 |
| C       | On                | On                   | On                   | -                | V DD > V RST . CPU normal operation.                                                                                                                                                                       |
| D       | On                | On                   | On                   | -                | Power drop too short. Power-fail not detected.                                                                                                                                                             |
| E       | On                | On                   | On                   | -                | V RST < V DD < V PFW . PFI is set when V RST < V DD < V PFW and maintains this state for at least t PFW , at which time a power- fail interrupt is generated (if enabled). CPU continues normal operation. |
| F       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST. Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                                                                                                  |
| G       | On                | On                   | On                   | -                | V DD > V RST. Crystal warmup time, t XTAL_RDY . CPU resumes normal operation from 8000h.                                                                                                                   |
| H       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST. Power-fail detected. CPU goes into reset. Power-fail monitor is turned on periodically.                                                                                              |
| I       | Off               | Off                  | Off                  | -                | V DD < V POR. Device held in reset. No operation allowed.                                                                                                                                                  |

If a reset is caused  by a power-fail, the power-fail monitor can be set to one of the following intervals:

- Always	on-continuous	monitoring
- 2 11  nanopower ring oscillator clocks (~256ms)
- 2 12  nanopower ring oscillator clocks (~512ms)
- 2 13  nanopower ring oscillator clocks (~1.024s)

In the case where the power-fail circuitry  is periodically turned  on, the power-fail  detection  is turned  on for two nanopower  ring oscillator  cycles.  If V DD  &gt;  V RST   during detection,  V DD  is monitored for an additional  nanopower ring  oscillator  period.  If V DD  remains above  V RST   for the third nanopower ring period, the CPU exits the reset state and resumes normal operation from utility ROM at 8000h after satisfying the crystal warmup period.

If a reset is generated  by  any other event, such  as the RESET pin  being  driven  low externally or the watchdog timer,  the  power-fail,  internal  regulator,  and  crystal remain  on  during the  CPU  reset.  In  these  cases,  the CPU exits the reset state in less than 20 crystal  cycles after the reset source is removed.

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

Figure 6. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

<!-- image -->

Table 3. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                            |
|---------|-------------------|----------------------|----------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST. CPU in stop mode.                                                                       |
| B       | On                | Off                  | Off                  | Yes              | Power drop too short. Power-fail not detected.                                                                                      |
| C       | On                | On                   | On                   | Yes              | V RST < V DD < V PFW. Power-fail warning detected. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . Exit stop mode. |
| D       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST. CPU in stop mode.                                                                       |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST. Power-fail detected. CPU goes into reset. Power-fail monitor is turned on periodically.                       |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR. Device held in reset. No operation allowed.                                                                           |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

Figure 7. Stop Mode Power-Fail Detection with Power-Fail Monitor Disabled

<!-- image -->

## Table 4. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

| STATE   | POWER-FAIL   | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                                                                                                                                                                                    |
|---------|--------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Off          | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                                                                                                                                                                              |
| B       | Off          | Off                  | Off                  | Yes              | V DD < V PFW . Power-fail not detected because power-fail monitor is disabled.                                                                                                                                                                                                                                                                                              |
| C       | On           | On                   | On                   | Yes              | V RST < V DD < V PFW . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail warning, and sets the power-fail interrupt flag. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . On stop mode exit, CPU vectors to the higher priority of power-fail and the interrupt that causes stop mode exit. |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Table 4. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued)

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                   |
|---------|-------------------|----------------------|----------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D       | Off               | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                             |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power- fail, puts CPU in reset. Power-fail monitor is turned on periodically. |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR Device held in reset. No operation allowed.                                                                                                                                                   |

## Applications Information

The  low-power,  high-performance  RISC  architecture  of this device makes it an excellent fit for many portable or applications requiring security.

## Grounds and Bypassing

Careful  PCB layout significantly  minimizes  system  level digital noise that could interact with the microcontroller or peripheral components. The use of multilayer boards is essential to allow the use of dedicated power planes. The area under any digital components should be a continuous ground plane if possible. Keep any bypass capacitor leads short for best noise rejection and place the capacitors as close to the leads of the devices as possible.

CMOS design guidelines for any semiconductor require that no pin be taken above V DD  or below GND. Violation of this guideline can result in a hard failure (damage to the  silicon  inside  the  device)  or  a  soft  failure  (unintentional modification of memory contents). Voltage spikes above or below the device's absolute maximum ratings can  potentially  cause  a  catastrophic  latchup  of  the device.

Microcontrollers  commonly  experience  negative  voltage  spikes  through  either  their  power  pins  or  generalpurpose I/O pins. Negative voltage spikes on power pins are especially problematic as they directly couple to the internal power buses. Devices such as keypads can conduct electrostatic discharges directly into the microcontroller and seriously damage the device. System designers  must  protect  components  against  these  transients that can corrupt system memory.

## Additional Documentation

Designers must have the following documents to fully use all  the  features  of  this  device.  This  data  sheet  contains pin descriptions, feature overviews, and electrical specifications.  Errata  sheets  contain  deviations  from published specifications. The user's guide offers detailed information about device features and operation.

- This	MAXQ615	data	sheet,	which	contains	electrical/ timing specifications and pin descriptions.
- The	revision-specific	MAXQ615	errata	sheet.
- The	MAXQ615	User's	Guide,	which	contains	detailed information on core features and operation, including programming.

## Development and Technical Support

A  variety  of  highly  versatile,  affordably-priced  development  tools  for  this  microcontroller  are  available  from Maxim and third-party suppliers, including:

- Compilers
- In-circuit	emulators
- Integrated	development	environments	(IDEs)

A partial list of development tool vendors can be found at www.maximintegrated.com/MAXQ\_tools .

For technical support, go to:

[https://support.maximintegrated.com/micro .](https://support.maximintegrated.com/micro)

## Chip Information

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Ordering Information

| PART         | OPERATING VOLTAGE (V)   | TEMP RANGE         |   FLASH MEMORY (KB) |   DATA MEMORY (KB) | PIN-PACKAGE   |
|--------------|-------------------------|--------------------|---------------------|--------------------|---------------|
| MAXQ615-F00+ | 2.4 to 3.6              | -40 N C to +85 N C |                  48 |                  2 | 16 TQFN-EP*   |

PROCESS: BiCMOS

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 16 TQFN-EP     | T1644+4        | 21-0139       | 90-0070            |

## MAXQ615

## 16-Bit MAXQ Microcontroller with Hardware Multiplier

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.