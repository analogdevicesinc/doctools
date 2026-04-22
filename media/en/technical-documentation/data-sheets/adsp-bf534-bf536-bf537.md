<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

Up to 600 MHz high performance Blackfin processor

Two 16-bit MACs, two 40-bit ALUs, four 8-bit video ALUs, 40-bit shifter

RISC-like register and instruction model for ease of programming and compiler-friendly support

Advanced debug, trace, and performance monitoring

Wide range of operating voltages (see Operating Conditions)

AEC-Q100 qualified for automotive applications

(see Automotive Products)

Programmable on-chip voltage regulator

182-ball and 208-ball CSP\_BGA packages

## MEMORY

Up to 132K bytes of on-chip memory

Instruction SRAM/cache and instruction SRAM Data SRAM/cache plus additional dedicated data SRAM Scratchpad SRAM (see Table 1 for available memory configurations)

External memory controller with glueless support for SDRAM and asynchronous 8-bit and 16-bit memories

Flexible booting options from external flash, SPI and TWI

memory or from SPI, TWI, and UART host devices

Memory management unit providing memory protection

Figure 1. Functional Block Diagram

<!-- image -->

Blackfin and the Blackfin logo are registered trademarks of Analog Devices, Inc.

## Rev. K

## Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## Blackfin Embedded Processor

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## PERIPHERALS

IEEE 802.3-compliant 10/100 Ethernet MAC (ADSP-BF536 and ADSP-BF537 only)

Controller area network (CAN) 2.0B interface

Parallel peripheral interface (PPI), supporting ITU-R 656 video data formats

- 2 dual-channel, full-duplex synchronous serial ports (SPORTs), supporting 8 stereo I 2 S channels

12 peripheral DMAs, 2 mastered by the Ethernet MAC

2 memory-to-memory DMAs with external request lines

Event handler with 32 interrupt inputs

Serial peripheral interface (SPI) compatible

2 UARTs with IrDA support

2-wire interface (TWI) controller

Eight 32-bit timer/counters with PWM support

Real-time clock (RTC) and watchdog timer

32-bit core timer

48 general-purpose I/Os (GPIOs), 8 with high current drivers On-chip PLL capable of frequency multiplication Debug/JTAG interface

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## TABLE OF CONTENTS

| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                    | . . 1   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                        | . . 1   |
| Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                         | . . 1   |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                   | . . 2   |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                  | . . 2   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                         | . . 3   |
| Portable Low Power Architecture . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                     | . . 3   |
| System Integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                            | . . 3   |
| Blackfin Processor Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                              | . . 3   |
| Blackfin Processor Core . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                   | . . 4   |
| Memory Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                   | . . 5   |
| DMAControllers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                            | . . 8   |
| Real-Time Clock . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                         | . . 9   |
| Watchdog Timer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                            | . . 9   |
| Timers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                          | . . 9   |
| Serial Ports (SPORTs) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                 | 10      |
| Serial Peripheral Interface (SPI) Port . . . . . . . . . . . . . . . . . .                                                                                                                                      | 10      |
| UART Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                    | 10      |
| Controller Area Network (CAN) . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                     | 11      |
| TWI Controller Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                      | 11      |
| 10/100 EthernetMAC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                    | 11      |
| Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                     | 12      |
| Parallel Peripheral Interface (PPI) . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                 | 12      |
| Dynamic Power Management . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                                                  | 13      |
| REVISION HISTORY                                                                                                                                                                                                |         |
| 6/2025-Rev. J to Rev.K Removed Package Information section.                                                                                                                                                     |         |
| Change to second paragraph in Clock Signals . . . . . . . . . .                                                                                                                                                 | 15      |
| Inverted CLKBUF waveform in Figure 8, Clock and Reset                                                                                                                                                           |         |
| ing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Added model number ADSP-BF536BBCZ3ARL to                                    | 30      |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Removed obsolete models from Ordering Guide: ADSP-BF534BBC-4A ADSP-BF534BBC-5A ADSP-BF534YBCZ-4B | 65      |
| ADSP-BF536BBC-3A ADSP-BF536BBC-4A                                                                                                                                                                               |         |

| Voltage Regulation . . . . . . . . . . . . . . . . . . .                 |   14 |
|--------------------------------------------------------------------------|------|
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . . .      |   15 |
| Booting Modes . . . . . . . . . . . . . . . . . . . . . . . .            |   16 |
| Instruction Set Description . . . . . . . . .                            |   17 |
| Development Tools . . . . . . . . . . . . . . . . . . .                  |   17 |
| Additional Information . . . . . . . . . . . . .                         |   18 |
| Related Signal Chains . . . . . . . . . . . . . . . .                    |   18 |
| Pin Descriptions . . . . . . . . . . . . . . . . . . . . . . . . .       |   19 |
| Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |   23 |
| Operating Conditions . . . . . . . . . . . . . . . .                     |   23 |
| Electrical Characteristics . . . . . . . . . . . .                       |   25 |
| Absolute Maximum Ratings . . . . . . . .                                 |   29 |
| ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . .          |   29 |
| Timing Specifications . . . . . . . . . . . . . . . .                    |   30 |
| Output Drive Currents . . . . . . . . . . . . . .                        |   50 |
| Test Conditions . . . . . . . . . . . . . . . . . . . . . . .            |   52 |
| Thermal Characteristics . . . . . . . . . . . . .                        |   56 |
| 182-Ball CSP_BGA Ball Assignment                                         |   57 |
| 208-Ball CSP_BGA Ball Assignment                                         |   60 |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . .             |   63 |
| Surface-Mount Design . . . . . . . . . . . . . . .                       |   64 |
| Automotive Products . . . . . . . . . . . . . . . . . . .                |   64 |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . .       |   65 |

## GENERAL DESCRIPTION

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors are members of the Blackfin ® family of products, incorporating the Analog Devices, Inc./Intel Micro Signal Architecture (MSA). Blackfin processors combine a dual-MAC, state-of-the-art signal processing engine, the advantages of a clean, orthogonal RISC-like microprocessor instruction set, and single-instruction, multiple-data (SIMD) multimedia capabilities into a single instruction-set architecture.

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors are completely code and pin compatible. They differ only with respect to their performance, on-chip memory, and presence of the Ethernet MAC module. Specific performance, memory, and feature configurations are shown in Table 1.

## Table 1. Processor Comparison

|                                  |                                  | ADSP-BF534        | ADSP-BF536        | ADSP-BF537        |
|----------------------------------|----------------------------------|-------------------|-------------------|-------------------|
| EthernetMAC                      | EthernetMAC                      | -                 | 1                 | 1                 |
| CAN                              | CAN                              | 1                 | 1                 | 1                 |
| TWI                              | TWI                              | 1                 | 1                 | 1                 |
| SPORTs                           | SPORTs                           | 2                 | 2                 | 2                 |
| UARTs                            | UARTs                            | 2                 | 2                 | 2                 |
| SPI                              | SPI                              | 1                 | 1                 | 1                 |
| GP Timers                        | GP Timers                        | 8                 | 8                 | 8                 |
| Watchdog Timers                  | Watchdog Timers                  | 1                 | 1                 | 1                 |
| RTC                              | RTC                              | 1                 | 1                 | 1                 |
| Parallel Peripheral Interface    | Parallel Peripheral Interface    | 1                 | 1                 | 1                 |
| GPIOs                            | GPIOs                            | 48                | 48                | 48                |
|                                  | L1 Instruction SRAM/Cache        | 16K bytes         | 16K bytes         | 16Kbytes          |
|                                  | L1 Instruction SRAM              | 48K bytes         | 48K bytes         | 48Kbytes          |
|                                  | L1 Data SRAM/Cache               | 32K bytes         | 32K bytes         | 32Kbytes          |
|                                  | L1 Data SRAM                     | 32K bytes         | -                 | 32Kbytes          |
|                                  | L1 Scratchpad                    | 4K bytes          | 4K bytes          | 4K bytes          |
|                                  | L3 BootROM                       | 2K bytes          | 2K bytes          | 2K bytes          |
| Maximum Speed Grade              | Maximum Speed Grade              | 500 MHz           | 400 MHz           | 600 MHz           |
| Package Options: CSP_BGA CSP_BGA | Package Options: CSP_BGA CSP_BGA | 208-Ball 182-Ball | 208-Ball 182-Ball | 208-Ball 182-Ball |

By integrating a rich set of industry-leading system peripherals and memory, the Blackfin processors are the platform of choice for next-generation applications that require RISC-like programmability, multimedia support, and leading-edge signal processing in one integrated package.

## PORTABLE LOW POWER ARCHITECTURE

Blackfin processors provide world-class power management and performance. They are produced with a low power and low voltage design methodology and feature on-chip dynamic power management, which is the ability to vary both the voltage and frequency of operation to significantly lower overall power consumption. This capability can result in a substantial reduction in power consumption, compared with just varying the frequency of operation. This allows longer battery life for portable appliances.

## SYSTEM INTEGRATION

The Blackfin processor is a highly integrated system-on-a-chip solution for the next generation of embedded network-connected applications. By combining industry-standard interfaces with a high performance signal processing core, cost-effective applications can be developed quickly, without the need for costly external components. The system peripherals include an IEEE-compliant 802.3 10/100 Ethernet MAC (ADSP-BF536 and ADSP-BF537 only), a CAN 2.0B controller, a TWI controller, two UART ports, an SPI port, two serial ports (SPORTs), nine general-purpose 32-bit timers (eight with PWM capability), a real-time clock, a watchdog timer, and a parallel peripheral interface (PPI).

## BLACKFIN PROCESSOR PERIPHERALS

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors contain a rich set of peripherals connected to the core via several high bandwidth buses, providing flexibility in system configuration as well as excellent overall system performance (see Figure 1). The processors contain dedicated network communication modules and high speed serial and parallel ports, an interrupt controller for flexible management of interrupts from the on-chip peripherals or external sources, and power management control functions to tailor the performance and power characteristics of the processor and system to many application scenarios.

All of the peripherals, except for the general-purpose I/O, CAN, TWI, real-time clock, and timers, are supported by a flexible DMA structure. There are also separate memory DMA channels dedicated to data transfers between the processor's various memory spaces, including external SDRAM and asynchronous memory. Multiple on-chip buses running at up to 133 MHz provide enough bandwidth to keep the processor core running along with activity on all of the on-chip and external peripherals.

The Blackfin processors include an on-chip voltage regulator in support of the processors' dynamic power management capability. The voltage regulator provides a range of core voltage levels when supplied from VDDEXT. The voltage regulator can be bypassed at the user's discretion.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## BLACKFIN PROCESSOR CORE

As shown in Figure 2, the Blackfin processor core contains two 16-bit multipliers, two 40-bit accumulators, two 40-bit ALUs, four video ALUs, and a 40-bit shifter. The computation units process 8-, 16-, or 32-bit data from the register file.

The compute register file contains eight 32-bit registers. When performing compute operations on 16-bit operand data, the register file operates as 16 independent 16-bit registers. All operands for compute operations come from the multiported register file and instruction constant fields.

Each MAC can perform a 16-bit by 16-bit multiply in each cycle, accumulating the results into the 40-bit accumulators. Signed and unsigned formats, rounding, and saturation are supported.

The ALUs perform a traditional set of arithmetic and logical operations on 16-bit or 32-bit data. In addition, many special instructions are included to accelerate various signal processing tasks. These include bit operations such as field extract and population count, modulo 2 32 multiply, divide primitives, saturation and rounding, and sign/exponent detection. The set of video instructions include byte alignment and packing operations, 16-bit and 8-bit adds with clipping, 8-bit average operations, and 8-bit subtract/absolute value/accumulate (SAA) operations. Also provided are the compare/select and vector search instructions.

For certain instructions, two 16-bit ALU operations can be performed simultaneously on register pairs (a 16-bit high half and 16-bit low half of a compute register). If the second ALU is used, quad 16-bit operations are possible.

The 40-bit shifter can perform shifts and rotates, and is used to support normalization, field extract, and field deposit instructions.

The program sequencer controls the flow of instruction execution, including instruction alignment and decoding. For program flow control, the sequencer supports PC relative and indirect conditional jumps (with static branch prediction), and subroutine calls. Hardware is provided to support zero-overhead looping. The architecture is fully interlocked, meaning that the programmer need not manage the pipeline when executing instructions with data dependencies.

Figure 2. Blackfin Processor Core

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

The address arithmetic unit provides two addresses for simultaneous dual fetches from memory. It contains a multiported register file consisting of four sets of 32-bit index, modify, length, and base registers (for circular buffering), and eight additional 32-bit pointer registers (for C-style indexed stack manipulation).

Blackfin processors support a modified Harvard architecture in combination with a hierarchical memory structure. Level 1 (L1) memories are those that typically operate at the full processor speed with little or no latency. At the L1 level, the instruction memory holds instructions only. The two data memories hold data, and a dedicated scratchpad data memory stores stack and local variable information.

In addition, multiple L1 memory blocks are provided, offering a configurable mix of SRAM and cache. The memory management unit (MMU) provides memory protection for individual tasks that may be operating on the core and can protect system registers from unintended access.

The architecture provides three modes of operation: user mode, supervisor mode, and emulation mode. User mode has restricted access to certain system resources, thus providing a protected software environment, while supervisor mode has unrestricted access to the system and core resources.

The Blackfin processor instruction set has been optimized so that 16-bit opcodes represent the most frequently used instructions, resulting in excellent compiled code density. Complex DSP instructions are encoded into 32-bit opcodes, representing fully featured multifunction instructions. Blackfin processors support a limited multi-issue capability, where a 32-bit instruction can be issued in parallel with two 16-bit instructions, allowing the programmer to use many of the core resources in a single instruction cycle.

The Blackfin processor assembly language uses an algebraic syntax for ease of coding and readability. The architecture has been optimized for use in conjunction with the C/C++ compiler, resulting in fast and efficient software implementations.

## MEMORY ARCHITECTURE

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors view memory as a single unified 4G byte address space, using 32-bit addresses. All resources, including internal memory, external memory, and I/O control registers, occupy separate sections of this common address space. The memory portions of this address space are arranged in a hierarchical structure to provide a good cost/performance balance of some very fast, low latency on-chip memory as cache or SRAM, and larger, lower cost, and performance off-chip memory systems. (See Figure 3).

The on-chip L1 memory system is the highest performance memory available to the Blackfin processor. The off-chip memory system, accessed through the external bus interface unit (EBIU), provides expansion with SDRAM, flash memory, and SRAM, optionally accessing up to 516M bytes of physical memory.

The memory DMA controller provides high bandwidth datamovement capability. It can perform block transfers of code or data between the internal memory and the external memory spaces.

## Internal (On-Chip) Memory

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors have three blocks of on-chip memory providing high-bandwidth access to the core.

The first block is the L1 instruction memory, consisting of 64K bytes SRAM, of which 16K bytes can be configured as a four-way set-associative cache. This memory is accessed at full processor speed.

The second on-chip memory block is the L1 data memory, consisting of up to two banks of up to 32K bytes each. Each memory bank is configurable, offering both cache and SRAM functionality. This memory block is accessed at full processor speed.

The third memory block is a 4K byte scratchpad SRAM, which runs at the same speed as the L1 memories, but is only accessible as data SRAM, and cannot be configured as cache memory.

## External (Off-Chip) Memory

External memory is accessed via the EBIU. This 16-bit interface provides a glueless connection to a bank of synchronous DRAM (SDRAM) as well as up to four banks of asynchronous memory devices including flash, EPROM, ROM, SRAM, and memory mapped I/O devices.

The PC133-compliant SDRAM controller can be programmed to interface to up to 128M bytes of SDRAM. A separate row can be open for each SDRAM internal bank, and the SDRAM controller supports up to 4 internal SDRAM banks, improving overall performance.

The asynchronous memory controller can be programmed to control up to four banks of devices with very flexible timing parameters for a wide variety of devices. Each bank occupies a 1M byte segment regardless of the size of the devices used, so that these banks are only contiguous if each is fully populated with 1M byte of memory.

## I/O Memory Space

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors do not define a separate I/O space. All resources are mapped through the flat 32-bit address space. On-chip I/O devices have their control registers mapped into memory-mapped registers (MMRs) at addresses near the top of the 4G byte address space. These are separated into two smaller blocks, one which contains the control MMRs for all core functions, and the other which contains the registers needed for setup and control of the onchip peripherals outside of the core. The MMRs are accessible only in supervisor mode and appear as reserved space to onchip peripherals.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 3. ADSP-BF534/ADSP-BF536/ADSP-BF537 Memory Maps

<!-- image -->

- Nonmaskable Interrupt (NMI)-The NMI event can be generated by the software watchdog timer or by the NMI input signal to the processor. The NMI event is frequently used as a power-down indicator to initiate an orderly shutdown of the system.
- Exceptions-Events that occur synchronously to program flow (in other words, the exception is taken before the instruction is allowed to complete). Conditions such as data alignment violations and undefined instructions cause exceptions.
- Interrupts-Events that occur asynchronously to program flow. They are caused by input pins, timers, and other peripherals, as well as by an explicit software instruction.

Each event type has an associated register to hold the return address and an associated return-from-event instruction. When an event is triggered, the state of the processor is saved on the supervisor stack.

The Blackfin processor event controller consists of two stages: the core event controller (CEC) and the system interrupt controller (SIC). The core event controller works with the system interrupt controller to prioritize and control all system events.

## Booting

The Blackfin processor contains a small on-chip boot kernel, which configures the appropriate peripheral for booting. If the Blackfin processor is configured to boot from boot ROM memory space, the processor starts executing from the on-chip boot ROM. For more information, see Booting Modes.

## Event Handling

The event controller on the Blackfin processor handles all asynchronous and synchronous events to the processor. The Blackfin processor provides event handling that supports both nesting and prioritization. Nesting allows multiple event service routines to be active simultaneously. Prioritization ensures that servicing of a higher priority event takes precedence over servicing of a lower priority event. The controller provides support for five different types of events:

- Emulation-An emulation event causes the processor to enter emulation mode, allowing command and control of the processor via the JTAG interface.
- Reset-This event resets the processor.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Conceptually, interrupts from the peripherals enter into the SIC, and are then routed directly into the general-purpose interrupts of the CEC.

## Core Event Controller (CEC)

The CEC supports nine general-purpose interrupts (IVG15-7), in addition to the dedicated interrupt and exception events. Of these general-purpose interrupts, the two lowest priority interrupts (IVG15-14) are recommended to be reserved for software interrupt handlers, leaving seven prioritized interrupt inputs to support the peripherals of the Blackfin processor. Table 2 describes the inputs to the CEC, identifies their names in the event vector table (EVT), and lists their priorities.

Table 2. Core Event Controller (CEC)

|   Priority (0 Is Highest) | Event Class                  | EVT Entry   |
|---------------------------|------------------------------|-------------|
|                         0 | Emulation/Test Control       | EMU         |
|                         1 | Reset                        | RST         |
|                         2 | Nonmaskable Interrupt        | NMI         |
|                         3 | Exception                    | EVX         |
|                         4 | Reserved                     | -           |
|                         5 | Hardware Error               | IVHW        |
|                         6 | Core Timer                   | IVTMR       |
|                         7 | General-Purpose Interrupt 7  | IVG7        |
|                         8 | General-Purpose Interrupt 8  | IVG8        |
|                         9 | General-Purpose Interrupt 9  | IVG9        |
|                        10 | General-Purpose Interrupt 10 | IVG10       |
|                        11 | General-Purpose Interrupt 11 | IVG11       |
|                        12 | General-Purpose Interrupt 12 | IVG12       |
|                        13 | General-Purpose Interrupt 13 | IVG13       |
|                        14 | General-Purpose Interrupt 14 | IVG14       |
|                        15 | General-Purpose Interrupt 15 | IVG15       |

## System Interrupt Controller (SIC)

The system interrupt controller provides the mapping and routing of events from the many peripheral interrupt sources to the prioritized general-purpose interrupt inputs of the CEC. Although the processor provides a default mapping, the user can alter the mappings and priorities of interrupt events by writing the appropriate values into the interrupt assignment registers (IAR). Table 3 describes the inputs into the SIC and the default mappings into the CEC.

## Table 3. System Interrupt Controller (SIC)

| Peripheral Interrupt Event                                 | Default Mapping   |   Peripheral Interrupt ID |
|------------------------------------------------------------|-------------------|---------------------------|
| PLL Wakeup                                                 | IVG7              |                         0 |
| DMAError (Generic)                                         | IVG7              |                         1 |
| DMAR0Block Interrupt                                       | IVG7              |                         1 |
| DMAR1Block Interrupt                                       | IVG7              |                         1 |
| DMAR0Overflow Error                                        | IVG7              |                         1 |
| DMAR1Overflow Error                                        | IVG7              |                         1 |
| CAN Error                                                  | IVG7              |                         2 |
| Ethernet Error (ADSP-BF536 and ADSP-BF537 only)            | IVG7              |                         2 |
| SPORT 0 Error                                              | IVG7              |                         2 |
| SPORT 1 Error                                              | IVG7              |                         2 |
| PPI Error                                                  | IVG7              |                         2 |
| SPI Error                                                  | IVG7              |                         2 |
| UART0 Error                                                | IVG7              |                         2 |
| UART1 Error                                                | IVG7              |                         2 |
| Real-Time Clock                                            | IVG8              |                         3 |
| DMAChannel 0 (PPI)                                         | IVG8              |                         4 |
| DMAChannel 3 (SPORT 0 Rx)                                  | IVG9              |                         5 |
| DMAChannel 4 (SPORT 0 Tx)                                  | IVG9              |                         6 |
| DMAChannel 5 (SPORT 1 Rx)                                  | IVG9              |                         7 |
| DMAChannel 6 (SPORT 1 Tx)                                  | IVG9              |                         8 |
| TWI                                                        | IVG10             |                         9 |
| DMAChannel 7 (SPI)                                         | IVG10             |                        10 |
| DMAChannel 8 (UART0 Rx)                                    | IVG10             |                        11 |
| DMAChannel 9 (UART0 Tx)                                    | IVG10             |                        12 |
| DMAChannel 10 (UART1 Rx)                                   | IVG10             |                        13 |
| DMAChannel 11 (UART1 Tx)                                   | IVG10             |                        14 |
| CAN Rx                                                     | IVG11             |                        15 |
| CAN Tx                                                     | IVG11             |                        16 |
| DMAChannel 1 (Ethernet Rx, ADSP-BF536 and ADSP-BF537 only) | IVG11             |                        17 |
| Port HInterrupt A                                          | IVG11             |                        17 |
| DMAChannel 2 (Ethernet Tx, ADSP-BF536 and ADSP-BF537 only) | IVG11             |                        18 |
| Port HInterrupt B                                          | IVG11             |                        18 |
| Timer 0                                                    | IVG12             |                        19 |
| Timer 1                                                    | IVG12             |                        20 |
| Timer 2                                                    | IVG12             |                        21 |
| Timer 3                                                    | IVG12             |                        22 |
| Timer 4                                                    | IVG12             |                        23 |
| Timer 5                                                    | IVG12             |                        24 |
| Timer 6                                                    | IVG12             |                        25 |
| Timer 7                                                    | IVG12             |                        26 |
| Port F, GInterrupt A                                       | IVG12             |                        27 |
| Port GInterrupt B                                          | IVG12             |                        28 |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Table 3. System Interrupt Controller (SIC) (Continued)

| Peripheral Interrupt Event                 | Default Mapping   |   Peripheral Interrupt ID |
|--------------------------------------------|-------------------|---------------------------|
| DMAChannels 12 and 13 (Memory DMAStream 0) | IVG13             |                        29 |
| DMAChannels 14 and 15 (Memory DMAStream 1) | IVG13             |                        30 |
| Software Watchdog Timer                    | IVG13             |                        31 |
| Port F Interrupt B                         | IVG13             |                        31 |

## Event Control

The Blackfin processor provides a very flexible mechanism to control the processing of events. In the CEC, three registers are used to coordinate and control events. Each register is 32 bits wide:

- CEC interrupt latch register (ILAT)-Indicates when events have been latched. The appropriate bit is set when the processor has latched the event and cleared when the event has been accepted into the system. This register is updated automatically by the controller, but it can be written only when its corresponding IMASK bit is cleared.
- CEC interrupt mask register (IMASK)-Controls the masking and unmasking of individual events. When a bit is set in the IMASK register, that event is unmasked and is processed by the CEC when asserted. A cleared bit in the IMASK register masks the event, preventing the processor from servicing the event even though the event may be latched in the ILAT register. This register can be read or written while in supervisor mode. (Note that general-purpose interrupts can be globally enabled and disabled with the STI and CLI instructions, respectively.)
- CEC interrupt pending register (IPEND)-The IPEND register keeps track of all nested events. A set bit in the IPEND register indicates the event is currently active or nested at some level. This register is updated automatically by the controller but can be read while in supervisor mode.

The SIC allows further control of event processing by providing three 32-bit interrupt control and status registers. Each register contains a bit corresponding to each of the peripheral interrupt events shown in Table 3.

- SIC interrupt mask register (SIC\_IMASK)-Controls the masking and unmasking of each peripheral interrupt event. When a bit is set in the register, that peripheral event is unmasked and is processed by the system when asserted. A cleared bit in the register masks the peripheral event, preventing the processor from servicing the event.
- SIC interrupt status register (SIC\_ISR)-As multiple peripherals can be mapped to a single event, this register allows the software to determine which peripheral event source triggered the interrupt. A set bit indicates the peripheral is asserting the interrupt, and a cleared bit indicates the peripheral is not asserting the event.
- SIC interrupt wake-up enable register (SIC\_IWR)-By enabling the corresponding bit in this register, a peripheral can be configured to wake up the processor, should the core be idled when the event is generated. (For more information, see Dynamic Power Management.)

Because multiple interrupt sources can map to a single generalpurpose interrupt, multiple pulse assertions can occur simultaneously, before or during interrupt processing for an interrupt event already detected on this interrupt input. The IPEND register contents are monitored by the SIC as the interrupt acknowledgment.

The appropriate ILAT register bit is set when an interrupt rising edge is detected (detection requires two core clock cycles). The bit is cleared when the respective IPEND register bit is set. The IPEND bit indicates that the event has entered into the processor pipeline. At this point the CEC recognizes and queues the next rising edge event on the corresponding event input. The minimum latency from the rising edge transition of the generalpurpose interrupt to the IPEND output asserted is three core clock cycles; however, the latency can be much higher, depending on the activity within and the state of the processor.

## DMA CONTROLLERS

The Blackfin processors have multiple, independent DMA channels that support automated data transfers with minimal overhead for the processor core. DMA transfers can occur between the processor's internal memories and any of its DMAcapable peripherals. Additionally, DMA transfers can be accomplished between any of the DMA-capable peripherals and external devices connected to the external memory interfaces, including the SDRAM controller and the asynchronous memory controller. DMA-capable peripherals include the Ethernet MAC (ADSP-BF536 and ADSP-BF537 only), SPORTs, SPI port, UARTs, and PPI. Each individual DMA-capable peripheral has at least one dedicated DMA channel.

The DMA controller supports both one-dimensional (1-D) and two-dimensional (2-D) DMA transfers. DMA transfer initialization can be implemented from registers or from sets of parameters called descriptor blocks.

The 2-D DMA capability supports arbitrary row and column sizes up to 64K elements by 64K elements, and arbitrary row and column step sizes up to ±32K elements. Furthermore, the column step size can be less than the row step size, allowing implementation of interleaved data streams. This feature is especially useful in video applications where data can be deinterleaved on the fly.

Examples of DMA types supported by the DMA controller include

- A single, linear buffer that stops upon completion
- A circular, auto-refreshing buffer that interrupts on each full or fractionally full buffer
- 1-D or 2-D DMA using a linked list of descriptors
- 2-D DMA using an array of descriptors, specifying only the base DMA address within a common page.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

In addition to the dedicated peripheral DMA channels, there are two memory DMA channels provided for transfers between the various memories of the processor system. This enables transfers of blocks of data between any of the memories-including external SDRAM, ROM, SRAM, and flash memory-with minimal processor intervention. Memory DMA transfers can be controlled by a very flexible descriptor-based methodology or by a standard register-based autobuffer mechanism.

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors also have an external DMA controller capability via dual external DMA request pins when used in conjunction with the external bus interface unit (EBIU). This functionality can be used when a high speed interface is required for external FIFOs and high bandwidth communications peripherals such as USB 2.0. It allows control of the number of data transfers for memDMA. The number of transfers per edge is programmable. This feature can be programmed to allow memDMA to have an increased priority on the external bus relative to the core.

## REAL-TIME CLOCK

The real-time clock (RTC) provides a robust set of digital watch features, including current time, stopwatch, and alarm. The RTC is clocked by a 32.768 kHz crystal external to the processor. The RTC peripheral has dedicated power supply pins so that it can remain powered up and clocked even when the rest of the processor is in a low power state. The RTC provides several programmable interrupt options, including interrupt per second, minute, hour, or day clock ticks, interrupt on programmable stopwatch countdown, or interrupt at a programmed alarm time.

The 32.768 kHz input clock frequency is divided down to a 1 Hz signal by a prescaler. The counter function of the timer consists of four counters: a 60-second counter, a 60-minute counter, a 24-hour counter, and an 32,768-day counter.

When enabled, the alarm function generates an interrupt when the output of the timer matches the programmed value in the alarm control register. There are two alarms: The first alarm is for a time of day, while the second alarm is for a day and time of that day.

The stopwatch function counts down from a programmed value, with one-second resolution. When the stopwatch is enabled and the counter underflows, an interrupt is generated.

Like the other peripherals, the RTC can wake up the processor from sleep mode upon generation of any RTC wake-up event. Additionally, an RTC wake-up event can wake up the processor from deep sleep mode, and wake up the on-chip internal voltage regulator from the hibernate operating mode.

Connect RTC pins RTXI and RTXO with external components as shown in Figure 4.

## WATCHDOG TIMER

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors include a 32-bit timer that can be used to implement a software watchdog function. A software watchdog can improve system availability by forcing the processor to a known state through generation of a system reset, nonmaskable interrupt (NMI), or

<!-- image -->

SUGGESTED COMPONENTS:

- X1 = ECLIPTEK EC38J (THROUGH-HOLE PACKAGE) OR EPSON MC405 12 pF LOAD (SURFACE-MOUNT PACKAGE)

- C1 = 22 pF

- C2 = 22 pF

R1 = 10 M :

NOTE: C1 AND C2 ARE SPECIFIC TO CRYSTAL SPECIFIED FOR X1. CONTACT CRYSTAL MANUFACTURER FOR DETAILS. C1 AND C2 SPECIFICATIONS ASSUME BOARD TRACE CAPACITANCE OF 3 pF.

Figure 4. External Components for RTC

general-purpose interrupt, if the timer expires before being reset by software. The programmer initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts to zero from the programmed value. This protects the system from remaining in an unknown state where software, which would normally reset the timer, has stopped running due to an external noise condition or software error.

If configured to generate a hardware reset, the watchdog timer resets both the core and the processor peripherals. After a reset, software can determine if the watchdog was the source of the hardware reset by interrogating a status bit in the watchdog timer control register.

The timer is clocked by the system clock (SCLK), at a maximum frequency of fSCLK .

## TIMERS

There are nine general-purpose programmable timer units in the processor. Eight timers have an external pin that can be configured either as a pulse-width modulator (PWM) or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input to the several other associated PF pins, to an external clock input to the PPI\_CLK input pin, or to the internal SCLK.

The timer units can be used in conjunction with the two UARTs and the CAN controller to measure the width of the pulses in the data stream to provide a software auto-baud detect function for the respective serial channels.

The timers can generate interrupts to the processor core providing periodic events for synchronization, either to the system clock or to a count of external signals.

In addition to the eight general-purpose programmable timers, a ninth timer is also provided. This extra timer is clocked by the internal processor clock and is typically used as a system tick clock for generating periodic interrupts in an operating system.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## SERIAL PORTS (SPORTs)

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors incorporate two dual-channel synchronous serial ports (SPORT0 and SPORT1) for serial and multiprocessor communications. The SPORTs support the following features:

- I 2 S capable operation.
- Bidirectional operation-Each SPORT has two sets of independent transmit and receive pins, enabling eight channels of I 2 S stereo audio.
- Buffered (8-deep) transmit and receive ports-Each port has a data register for transferring data words to and from other processor components and shift registers for shifting data in and out of the data registers.
- Clocking-Each transmit and receive port can either use an external serial clock or generate its own, in frequencies ranging from (fSCLK/131,070) Hz to (fSCLK/2) Hz.
- Word length-Each SPORT supports serial data words from 3 bits to 32 bits in length, transferred most significant bit first or least significant bit first.
- Framing-Each transmit and receive port can run with or without frame sync signals for each data word. Frame sync signals can be generated internally or externally, active high or low, and with either of two pulse widths and early or late frame sync.
- Companding in hardware-Each SPORT can perform A-law or µ-law companding according to ITU recommendation G.711. Companding can be selected on the transmit and/or receive channel of the SPORT without additional latencies.
- DMA operations with single-cycle overhead-Each SPORT can automatically receive and transmit multiple buffers of memory data. The processor can link or chain sequences of DMA transfers between a SPORT and memory.
- Interrupts-Each transmit and receive port generates an interrupt upon completing the transfer of a data word or after transferring an entire data buffer, or buffers, through DMA.
- Multichannel capability-Each SPORT supports 128 channels out of a 1024-channel window and is compatible with the H.100, H.110, MVIP-90, and HMVIP standards.

## SERIAL PERIPHERAL INTERFACE (SPI) PORT

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors have an SPI-compatible port that enables the processor to communicate with multiple SPI-compatible devices.

The SPI interface uses three pins for transferring data: two data pins (Master Output-Slave Input, MOSI, and Master InputSlave Output, MISO) and a clock pin (serial clock, SCK). An SPI chip select input pin (SPISS) lets other SPI devices select the processor, and seven SPI chip select output pins (SPISEL7-1) let the processor select other SPI devices. The SPI select pins are reconfigured programmable flag pins. Using these pins, the SPI

port provides a full-duplex, synchronous serial interface, which supports both master/slave modes and multimaster environments.

The SPI port's baud rate and clock phase/polarities are programmable, and it has an integrated DMA controller, configurable to support transmit or receive data streams. The SPI's DMA controller can only service unidirectional accesses at any given time.

The SPI port's clock rate is calculated as:

<!-- formula-not-decoded -->

where the 16-bit SPI\_BAUD register contains a value of 2 to 65,535.

During transfers, the SPI port simultaneously transmits and receives by serially shifting data in and out on its two serial data lines. The serial clock line synchronizes the shifting and sampling of data on the two serial data lines.

## UART PORTS

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors provide two full-duplex universal asynchronous receiver and transmitter (UART) ports, which are fully compatible with PCstandard UARTs. Each UART port provides a simplified UART interface to other peripherals or hosts, supporting full-duplex, DMA-supported, asynchronous transfers of serial data. A UART port includes support for five to eight data bits, one or two stop bits, and none, even, or odd parity. Each UART port supports two modes of operation:

- PIO (programmed I/O)-The processor sends or receives data by writing or reading I/O mapped UART registers. The data is double-buffered on both transmit and receive.
- DMA (direct memory access)-The DMA controller transfers both transmit and receive data. This reduces the number and frequency of interrupts required to transfer data to and from memory. The UART has two dedicated DMA channels, one for transmit and one for receive. These DMA channels have lower default priority than most DMA channels because of their relatively low service rates.

Each UART port's baud rate, serial data format, error code generation and status, and interrupts are programmable:

- Supporting bit rates ranging from (fSCLK/1,048,576) to (f SCLK /16) bits per second.
- Supporting data formats from 7 bits to 12 bits per frame.
- Both transmit and receive operations can be configured to generate maskable interrupts to the processor.

The UART port's clock rate is calculated as:

<!-- formula-not-decoded -->

where the 16-bit UARTx\_Divisor comes from the UARTx\_DLH register (most significant 8 bits) and UARTx\_DLL register (least significant 8 bits).

## ADSP-BF534/ADSP-BF536/ADSP-BF537

In conjunction with the general-purpose timer functions, autobaud detection is supported.

The capabilities of the UARTs are further extended with support for the infrared data association (IrDA ® ) serial infrared physical layer link specification (SIR) protocol.

## CONTROLLER AREA NETWORK (CAN)

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors offer a CAN controller that is a communication controller implementing the CAN 2.0B (active) protocol. This protocol is an asynchronous communications protocol used in both industrial and automotive control systems. The CAN protocol is wellsuited for control applications due to its capability to communicate reliably over a network, since the protocol incorporates CRC checking message error tracking, and fault node confinement.

The CAN controller offers the following features:

- 32 mailboxes (eight receive only, eight transmit only, 16 configurable for receive or transmit).
- Dedicated acceptance masks for each mailbox.
- Additional data filtering on first two bytes.
- Support for both the standard (11-bit) and extended (29-bit) identifier (ID) message formats.
- Support for remote frames.
- Active or passive network support.
- CAN wake-up from hibernation mode (lowest static power consumption mode).
- Interrupts, including: Tx complete, Rx complete, error, global.

The electrical characteristics of each network connection are very demanding so the CAN interface is typically divided into two parts: a controller and a transceiver. This allows a single controller to support different drivers and CAN networks. The CAN module represents only the controller part of the interface. The controller interface supports connection to 3.3 V highspeed, fault-tolerant, single-wire transceivers.

## TWI CONTROLLER INTERFACE

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors include a 2-wire interface (TWI) module for providing a simple exchange method of control data between multiple devices. The TWI is compatible with the widely used I 2 C ® bus standard. The TWI module offers the capabilities of simultaneous master and slave operation, support for both 7-bit addressing and multimedia data arbitration. The TWI interface utilizes two pins for transferring clock (SCL) and data (SDA) and supports the protocol at speeds up to 400 kbps. The TWI interface pins are compatible with 5 V logic levels.

Additionally, the processor's TWI module is fully compatible with serial camera control bus (SCCB) functionality for easier control of various CMOS camera sensor devices.

## 10/100 ETHERNET MAC

The ADSP-BF536 and ADSP-BF537 processors offer the capability to directly connect to a network by way of an embedded fast Ethernet Media Access Controller (MAC) that supports both 10-BaseT (10 Mbps) and 100-BaseT (100 Mbps) operation. The 10/100 Ethernet MAC peripheral is fully compliant to the IEEE 802.3-2002 standard, and it provides programmable features designed to minimize supervision, bus use, or message processing by the rest of the processor system.

Some standard features are

- Support of MII and RMII protocols for external PHYs.
- Full duplex and half duplex modes.
- Data framing and encapsulation: generation and detection of preamble, length padding, and FCS.
- Media access management (in half-duplex operation): collision and contention handling, including control of retransmission of collision frames and of back-off timing.
- Flow control (in full-duplex operation): generation and detection of PAUSE frames.
- Station management: generation of MDC/MDIO frames for read-write access to PHY registers.
- SCLK operating range down to 25 MHz (active and sleep operating modes).
- Internal loopback from Tx to Rx.

Some advanced features are

- Buffered crystal output to external PHY for support of a single crystal system.
- Automatic checksum computation of IP header and IP payload fields of Rx frames.
- Independent 32-bit descriptor-driven Rx and Tx DMA channels.
- Frame status delivery to memory via DMA, including frame completion semaphores, for efficient buffer queue management in software.
- Tx DMA support for separate descriptors for MAC header and payload to eliminate buffer copy operations.
- Convenient frame alignment modes support even 32-bit alignment of encapsulated Rx or Tx IP packet data in memory after the 14-byte MAC header.
- Programmable Ethernet event interrupt supports any combination of
- Any selected Rx or Tx frame status conditions.
- PHY interrupt condition.
- Wake-up frame detected.
- Any selected MAC management counter(s) at half-full.
- DMA descriptor error.
- 47 MAC management statistics counters with selectable clear-on-read behavior and programmable interrupts on half maximum value.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

- Programmable Rx address filters, including a 64-bit address hash table for multicast and/or unicast frames, and programmable filter modes for broadcast, multicast, unicast, control, and damaged frames.
- Advanced power management supporting unattended transfer of Rx and Tx frames and status to/from external memory via DMA during low power sleep mode.
- System wake-up from sleep operating mode upon magic packet or any of four user-definable wake-up frame filters.
- Support for 802.3Q tagged VLAN frames.
- Programmable MDC clock rate and preamble suppression.
- In RMII operation, 7 unused pins can be configured as GPIO pins for other purposes.

## PORTS

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors group the many peripheral signals to four ports-Port F, Port G, Port H, and Port J. Most of the associated pins are shared by multiple signals. The ports function as multiplexer controls. Eight of the pins (Port F7-0) offer high source/high sink current capabilities.

## General-Purpose I/O (GPIO)

The processors have 48 bidirectional, general-purpose I/O (GPIO) pins allocated across three separate GPIO modulesPORTFIO, PORTGIO, and PORTHIO, associated with Port F, Port G, and Port H, respectively. Port J does not provide GPIO functionality. Each GPIO-capable pin shares functionality with other processor peripherals via a multiplexing scheme; however, the GPIO functionality is the default state of the device upon power-up. Neither GPIO output or input drivers are active by default. Each general-purpose port pin can be individually controlled by manipulation of the port control, status, and interrupt registers:

- GPIO direction control register-Specifies the direction of each individual GPIO pin as input or output.
- GPIO control and status registers-The processors employ a 'write one to modify' mechanism that allows any combination of individual GPIO pins to be modified in a single instruction, without affecting the level of any other GPIO pins. Four control registers are provided. One register is written in order to set pin values, one register is written in order to clear pin values, one register is written in order to toggle pin values, and one register is written in order to specify a pin value. Reading the GPIO status register allows software to interrogate the sense of the pins.
- GPIO interrupt mask registers-The two GPIO interrupt mask registers allow each individual GPIO pin to function as an interrupt to the processor. Similar to the two GPIO control registers that are used to set and clear individual pin values, one GPIO interrupt mask register sets bits to enable interrupt function, and the other GPIO interrupt mask register clears bits to disable interrupt function.

GPIO pins defined as inputs can be configured to generate hardware interrupts, while output pins can be triggered by software interrupts.

- GPIO interrupt sensitivity registers-The two GPIO interrupt sensitivity registers specify whether individual pins are level- or edge-sensitive and specify-if edge-sensitivewhether just the rising edge or both the rising and falling edges of the signal are significant. One register selects the type of sensitivity, and one register selects which edges are significant for edge-sensitivity.

## PARALLEL PERIPHERAL INTERFACE (PPI)

The processor provides a parallel peripheral interface (PPI) that can connect directly to parallel ADC and DAC converters, video encoders and decoders, and other general-purpose peripherals. The PPI consists of a dedicated input clock pin, up to three frame synchronization pins, and up to 16 data pins. The input clock supports parallel data rates up to half the system clock rate and the synchronization signals can be configured as either inputs or outputs.

The PPI supports a variety of general-purpose and ITU-R 656 modes of operation. In general-purpose mode, the PPI provides half-duplex, bidirectional data transfer with up to 16 bits of data. Up to three frame synchronization signals are also provided. In ITU-R 656 mode, the PPI provides half-duplex bidirectional transfer of 8- or 10-bit video data. Additionally, on-chip decode of embedded start-of-line (SOL) and start-offield (SOF) preamble packets is supported.

## General-Purpose Mode Descriptions

The general-purpose modes of the PPI are intended to suit a wide variety of data capture and transmission applications. Three distinct submodes are supported:

1. Input mode-Frame syncs and data are inputs into the PPI.
2. Frame capture mode-Frame syncs are outputs from the PPI, but data are inputs.
3. Output mode-Frame syncs and data are outputs from the PPI.

## Input Mode

Input mode is intended for ADC applications, as well as video communication with hardware signaling. In its simplest form, PPI\_FS1 is an external frame sync input that controls when to read data. The PPI\_DELAY MMR allows for a delay (in PPI\_ CLK cycles) between reception of this frame sync and the initiation of data reads. The number of input data samples is user programmable and defined by the contents of the PPI\_COUNT register. The PPI supports 8-bit and 10-bit through 16-bit data, programmable in the PPI\_CONTROL register.

## Frame Capture Mode

Frame capture mode allows the video source(s) to act as a slave (for frame capture for example). The ADSP-BF534/ ADSP-BF536/ADSP-BF537 processors control when to read from the video source(s). PPI\_FS1 is an HSYNC output and PPI\_FS2 is a VSYNC output.

## Output Mode

Output mode is used for transmitting video or other data with up to three output frame syncs. Typically, a single frame sync is appropriate for data converter applications, whereas two or three frame syncs could be used for sending video with hardware signaling.

## ITU-R 656 Mode Descriptions

The ITU-R 656 modes of the PPI are intended to suit a wide variety of video capture, processing, and transmission applications. Three distinct submodes are supported:

1. Active video only mode
2. Vertical blanking only mode
3. Entire field mode

## Active Video Mode

Active video only mode is used when only the active video portion of a field is of interest and not any of the blanking intervals. The PPI does not read in any data between the end of active video (EAV) and start of active video (SAV) preamble symbols, or any data present during the vertical blanking intervals. In this mode, the control byte sequences are not stored to memory; they are filtered by the PPI. After synchronizing to the start of Field 1, the PPI ignores incoming samples until it sees an SAV code. The user specifies the number of active video lines per frame (in PPI\_COUNT register).

## Vertical Blanking Interval Mode

In this mode, the PPI only transfers vertical blanking interval (VBI) data.

## Entire Field Mode

In this mode, the entire incoming bit stream is read in through the PPI. This includes active video, control preamble sequences, and ancillary data that may be embedded in horizontal and vertical blanking intervals. Data transfer starts immediately after synchronization to Field 1. Data is transferred to or from the synchronous channels through eight DMA engines that work autonomously from the processor core.

## DYNAMIC POWER MANAGEMENT

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors provide five operating modes, each with a different performance and power profile. In addition, dynamic power management provides the control functions to dynamically alter the processor core supply voltage, further reducing power dissipation. Control of clocking to each of the peripherals also reduces power consumption. See Table 4 for a summary of the power settings for each mode. Also, see Table 15, Table 16, and Table 17.

## Full-On Operating Mode-Maximum Performance

In the full-on mode, the PLL is enabled and is not bypassed, providing capability for maximum operational frequency. This is the power-up default execution state in which maximum performance can be achieved. The processor core and all enabled peripherals run at full speed.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Active Operating Mode-Moderate Dynamic Power Savings

In the active mode, the PLL is enabled but bypassed. Because the PLL is bypassed, the processor's core clock (CCLK) and system clock (SCLK) run at the input clock (CLKIN) frequency. In this mode, the CLKIN to CCLK multiplier ratio can be changed, although the changes are not realized until the full-on mode is entered. DMA access is available to appropriately configured L1 memories.

In the active mode, it is possible to disable the PLL through the PLL control register (PLL\_CTL). If disabled, the PLL must be re-enabled before transitioning to the full-on or sleep modes.

## Sleep Operating Mode-High Dynamic Power Savings

The sleep mode reduces dynamic power dissipation by disabling the clock to the processor core (CCLK). The PLL and system clock (SCLK), however, continue to operate in this mode. Typically an external event or RTC activity wakes up the processor. When in the sleep mode, asserting wake-up causes the processor to sense the value of the BYPASS bit in the PLL control register (PLL\_CTL). If BYPASS is disabled, the processor transitions to the full on mode. If BYPASS is enabled, the processor transitions to the active mode.

System DMA access to L1 memory is not supported in sleep mode.

Table 4. Power Settings

| Mode      | PLL               | PLL Bypassed   | Core Clock (CCLK)   | System Clock (SCLK)   | Internal Power (V DDINT )   |
|-----------|-------------------|----------------|---------------------|-----------------------|-----------------------------|
| Full On   | Enabled           | No             | Enabled             | Enabled               | On                          |
| Active    | Enabled/ Disabled | Yes            | Enabled             | Enabled               | On                          |
| Sleep     | Enabled           | -              | Disabled            | Enabled               | On                          |
| Deep      | Disabled          | -              | Disabled            | Disabled              | On                          |
| Hibernate | Disabled          | -              | Disabled            | Disabled              | Off                         |

## Deep Sleep Operating Mode-Maximum Dynamic Power Savings

The deep sleep mode maximizes dynamic power savings by disabling the clocks to the processor core (CCLK) and to all synchronous peripherals (SCLK). Asynchronous peripherals, such as the RTC, may still be running but cannot access internal resources or external memory. This powered-down mode can only be exited by assertion of the reset interrupt (RESET) or by an asynchronous interrupt generated by the RTC. When in deep sleep mode, an RTC asynchronous interrupt causes the processor to transition to the active mode. Assertion of RESET while in deep sleep mode causes the processor to transition to the full-on mode.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Hibernate State-Maximum Static Power Savings

The hibernate state maximizes static power savings by disabling the voltage and clocks to the processor core (CCLK) and to all of the synchronous peripherals (SCLK). The internal voltage regulator for the processor can be shut off by writing b#00 to the FREQ bits of the VR\_CTL register. This disables both CCLK and SCLK. Furthermore, it sets the internal power supply voltage (VDDINT) to 0 V to provide the greatest power savings. To preserve the processor state, prior to removing power, any critical information stored internally (memory contents, register contents, etc.) must be written to a nonvolatile storage device.

Since VDDEXT is still supplied in this state, all of the external pins three-state, unless otherwise specified. This allows other devices that are connected to the processor to still have power applied without drawing unwanted current.

The Ethernet or CAN modules can wake up the internal supply regulator. If the PH6 pin does not connect as the PHYINT signal to an external PHY device, it can be pulled low by any other device to wake the processor up. The regulator can also be woken up by a real-time clock wake-up event or by asserting the RESET pin. All hibernate wake-up events initiate the hardware reset sequence. Individual sources are enabled by the VR\_CTL register.

With the exception of the VR\_CTL and the RTC registers, all internal registers and memories lose their content in the hibernate state. State variables can be held in external SRAM or SDRAM. The SCKELOW bit in the VR\_CTL register provides a means of waking from hibernate state without disrupting a selfrefreshing SDRAM, provided that there is also an external pulldown on the SCKE pin.

## Power Savings

As shown in Table 5, the processors support three different power domains which maximizes flexibility, while maintaining compliance with industry standards and conventions. By isolating the internal logic of the processor into its own power domain, separate from the RTC and other I/O, the processor can take advantage of dynamic power management, without affecting the RTC or other I/O devices. There are no sequencing requirements for the various power domains.

## Table 5. Power Domains

| Power Domain                       | V DD Range   |
|------------------------------------|--------------|
| All internal logic, except RTC     | V DDINT      |
| RTC internal logic and crystal I/O | V DDRTC      |
| All other I/O                      | V DDEXT      |

The dynamic power management feature allows both the processor's input voltage (V DDINT) and clock frequency (fCCLK) to be dynamically controlled.

The power dissipated by a processor is largely a function of its clock frequency and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in power dissipation, while reducing the voltage by 25% reduces power dissipation by more than 40%. Further, these power savings are additive, in that if the clock frequency and supply voltage are both reduced, the power savings can be dramatic, as shown in the following equations.

The power savings factor (PSF) is calculated as:

<!-- image -->

## where:

fCCLKNOM is the nominal core clock frequency f CCLKRED is the reduced core clock frequency VDDINTNOM is the nominal internal supply voltage VDDINTRED is the reduced internal supply voltage tNOM is the duration running at fCCLKNOM t RED is the duration running at f CCLKRED The percent power savings is calculated as

% power savings 1 PSF -  100 %  =

## VOLTAGE REGULATION

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors provide an on-chip voltage regulator that can generate appropriate VDDINT voltage levels from the VDDEXT supply. See Operating Conditions for regulator tolerances and acceptable VDDEXT ranges for specific models.

Figure 5. Voltage Regulator Circuit

<!-- image -->

Figure 5 shows the typical external components required to complete the power management system. The regulator controls the internal logic voltage levels and is programmable with the voltage regulator control register (VR\_CTL) in increments of 50 mV. To reduce standby power consumption, the internal voltage regulator can be programmed to remove power to the processor core while keeping I/O power supplied. While in

## ADSP-BF534/ADSP-BF536/ADSP-BF537

hibernate state, V DDEXT can still be applied, eliminating the need for external buffers. The voltage regulator can be activated from this power-down state by asserting the RESET pin, which then initiates a boot sequence. The regulator can also be disabled and bypassed at the user's discretion. For additional information on voltage regulation, see Switching Regulator Design Considerations for the ADSP-BF533 Blackfin Processors (EE-228) .

## CLOCK SIGNALS

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors can be clocked by an external crystal, a sine wave input, or a buffered, shaped clock derived from an external clock oscillator.

If an external clock is used, it must not be halted, changed, or operated below the specified frequency during normal operation. This signal is connected to the processor's CLKIN pin. When an external clock is used, the XTAL pin must be left unconnected.

Alternatively, because the processors include an on-chip oscillator circuit, an external crystal can be used. For fundamental frequency operation, use the circuit shown in Figure 6. A parallel-resonant, fundamental frequency, microprocessorgrade crystal is connected across the CLKIN and XTAL pins. The on-chip resistance between CLKIN and the XTAL pin is in the 500 k  range. Further parallel resistors are typically not recommended. The two capacitors and the series resistor shown in Figure 6 fine-tune phase and amplitude of the sine frequency.

The capacitor and resistor values shown in Figure 6 are typical values only. The capacitor values are dependent upon the crystal manufacturers' load capacitance recommendations and the PCB physical layout. The resistor value depends on the drive level specified by the crystal manufacturer. The user should verify the customized values based on careful investigations of multiple devices over temperature range.

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED, DEPENDING ON THE CRYSTAL AND LAYOUT. PLEASE ANALYZE CAREFULLY.

<!-- image -->

Figure 6. External Crystal Connections

A third-overtone crystal can be used for frequencies above 25 MHz. The circuit is then modified to ensure crystal operation only at the third overtone, by adding a tuned inductor circuit as shown in Figure 6. A design procedure for third-overtone operation is discussed in detail in the application note Using Third Overtone Crystals with the ADSP-218x DSP (EE-168) .

The CLKBUF pin is an output pin, and it is an inverted version of the input clock. This pin is particularly useful in Ethernet applications to limit the number of required clock sources in the system. In this type of application, a single 25 MHz or 50 MHz crystal can be applied directly to the processors. The 25 MHz or 50 MHz output of CLKBUF can then be connected to an external Ethernet MII or RMII PHY device.

Because of the default 10× PLL multiplier, providing a 50 MHz CLKIN exceeds the recommended operating conditions of the lower speed grades. Because of this restriction, an RMII PHY requiring a 50 MHz clock input cannot be clocked directly from the CLKBUF pin for the lower speed grades. In this case, either provide a separate 50 MHz clock source, or use an RMII PHY with 25 MHz clock input options. The CLKBUF output is active by default and can be disabled using the VR\_CTL register for power savings.

The Blackfin core runs at a different clock rate than the on-chip peripherals. As shown in Figure 7, the core clock (CCLK) and system peripheral clock (SCLK) are derived from the input clock (CLKIN) signal. An on-chip PLL is capable of multiplying the CLKIN signal by a programmable 0.5× to 64× multiplication factor (bounded by specified minimum and maximum VCO frequencies). The default multiplier is 10×, but it can be modified by a software instruction sequence in the PLL\_CTL register.

Figure 7. Frequency Modification Methods

<!-- image -->

On-the-fly CCLK and SCLK frequency changes can be effected by simply writing to the PLL\_DIV register. Whereas the maximum allowed CCLK and SCLK rates depend on the applied voltages VDDINT and VDDEXT, the VCO is always permitted to run up to the frequency specified by the part's speed grade. The CLKOUT pin reflects the SCLK frequency to the off-chip world. It belongs to the SDRAM interface, but it functions as a reference signal in other timing specifications as well. While active by default, it can be disabled using the EBIU\_SDGCTL and EBIU\_AMGCTL registers.

All on-chip peripherals are clocked by the system clock (SCLK). The system clock frequency is programmable by means of the SSEL3-0 bits of the PLL\_DIV register. The values programmed

## ADSP-BF534/ADSP-BF536/ADSP-BF537

into the SSEL fields define a divide ratio between the PLL output (VCO) and the system clock. SCLK divider values are 1 through 15. Table 6 illustrates typical system clock ratios.

Table 6. Example System Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| SSEL3-0      | VCO:SCLK        | VCO                              | SCLK                             |
| 0001         | 1:1             | 100                              | 100                              |
| 0110         | 6:1             | 300                              | 50                               |
| 1010         | 10:1            | 500                              | 50                               |

Note that the divisor ratio must be chosen to limit the system clock frequency to its maximum of fSCLK. The SSEL value can be changed dynamically without any PLL lock latencies by writing the appropriate values to the PLL divisor register (PLL\_DIV).

The core clock (CCLK) frequency can also be dynamically changed by means of the CSEL1-0 bits of the PLL\_DIV register. Supported CCLK divider ratios are 1, 2, 4, and 8, as shown in Table 7. This programmable core clock capability is useful for fast core frequency modifications.

Table 7. Core Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| CSEL1-0      | VCO:CCLK        | VCO                              | CCLK                             |
| 00           | 1:1             | 300                              | 300                              |
| 01           | 2:1             | 300                              | 150                              |
| 10           | 4:1             | 500                              | 125                              |
| 11           | 8:1             | 200                              | 25                               |

The maximum CCLK frequency not only depends on the part's speed grade (see Ordering Guide), it also depends on the applied VDDINT voltage (see Table 10, Table 11, and Table 12 for details). The maximal system clock rate (SCLK) depends on the chip package and the applied VDDEXT voltage (see Table 14).

## BOOTING MODES

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processor has six mechanisms (listed in Table 8) for automatically loading internal and external memory after a reset. A seventh mode is provided to execute from external memory, bypassing the boot sequence.

Table 8. Booting Modes

|   BMODE2-0 | Description                                      |
|------------|--------------------------------------------------|
|        000 | Executefrom16-bitexternalmemory(bypass boot ROM) |
|        001 | Boot from 8-bit or 16-bit memory (EPROM/flash)   |
|        010 | Reserved                                         |
|        011 | Boot from serial SPI memory (EEPROM/flash)       |
|        100 | Boot from SPI host (slave mode)                  |

## Table 8. Booting Modes (Continued)

|   BMODE2-0 | Description                           |
|------------|---------------------------------------|
|        101 | BootfromserialTWImemory(EEPROM/flash) |
|        110 | Boot from TWI host (slave mode)       |
|        111 | Boot from UART host (slave mode)      |

The BMODE pins of the reset configuration register, sampled during power-on resets and software-initiated resets, implement the following modes:

- Execute from 16-bit external memory-Execution starts from address 0x2000 0000 with 16-bit packing. The boot ROM is bypassed in this mode. All configuration settings are set for the slowest device possible (3-cycle hold time; 15-cycle R/W access times; 4-cycle setup).
- Boot from 8-bit and 16-bit external flash memory-The 8-bit or 16-bit flash boot routine located in Boot ROM memory space is set up using asynchronous memory bank 0. All configuration settings are set for the slowest device possible (3-cycle hold time; 15-cycle R/W access times; 4-cycle setup). The Boot ROM evaluates the first byte of the boot stream at address 0x2000 0000. If it is 0x40, 8-bit boot is performed. A 0x60 byte assumes a 16-bit memory device and performs 8-bit DMA. A 0x20 byte also assumes 16-bit memory but performs 16-bit DMA.
- Boot from serial SPI memory (EEPROM or flash)-8-, 16-, or 24-bit addressable devices are supported as well as AT45DB041, AT45DB081, AT45DB161, AT45DB321, AT45DB642, and AT45DB1282 DataFlash ® devices from Atmel. The SPI uses the PF10/SPI SSEL1 output pin to select a single SPI EEPROM/flash device, submits a read command and successive address bytes (0x00) until a valid 8-, 16-, or 24-bit, or Atmel addressable device is detected, and begins clocking data into the processor.
- Boot from SPI host device-The Blackfin processor operates in SPI slave mode and is configured to receive the bytes of the .LDR file from an SPI host (master) agent. To hold off the host device from transmitting while the boot ROM is busy, the Blackfin processor asserts a GPIO pin, called host wait (HWAIT), to signal the host device not to send any more bytes until the flag is deasserted. The flag is chosen by the user and this information is transferred to the Blackfin processor via bits 10:5 of the FLAG header.
- Boot from UART-Using an autobaud handshake sequence, a boot-stream-formatted program is downloaded by the host. The host agent selects a baud rate within the UART's clocking capabilities. When performing the autobaud, the UART expects an '@' (boot stream) character (8 bits data, 1 start bit, 1 stop bit, no parity bit) on the RXD pin to determine the bit rate. It then replies with an acknowledgment that is composed of 4 bytes: 0xBF, the value of UART\_DLL, the value of UART\_DLH, and 0x00. The host can then download the boot stream. When the processor needs to hold off the host, it deasserts CTS. Therefore, the host must monitor this signal.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

- Boot from serial TWI memory (EEPROM/flash)-The Blackfin processor operates in master mode and selects the TWI slave with the unique ID 0xA0. It submits successive read commands to the memory device starting at 2-byte internal address 0x0000 and begins clocking data into the processor. The TWI memory device should comply with Philips I 2 C Bus Specification version 2.1 and have the capability to auto-increment its internal address counter such that the contents of the memory device can be read sequentially.
- Boot from TWI host-The TWI host agent selects the slave with the unique ID 0x5F. The processor replies with an acknowledgment and the host can then download the boot stream. The TWI host agent should comply with Philips I 2 C Bus Specification version 2.1. An I 2 C multiplexer can be used to select one processor at a time when booting multiple processors from a single TWI.

For each of the boot modes, a 10-byte header is first brought in from an external device. The header specifies the number of bytes to be transferred and the memory destination address. Multiple memory blocks can be loaded by any boot sequence. Once all blocks are loaded, program execution commences from the start of L1 instruction SRAM.

In addition, Bit 4 of the reset configuration register can be set by application code to bypass the normal boot sequence during a software reset. For this case, the processor jumps directly to the beginning of L1 instruction memory.

To augment the boot modes, a secondary software loader can be added to provide additional booting mechanisms. This secondary loader could provide the capability to boot from flash, variable baud rate, and other sources. In all boot modes except bypass, program execution starts from on-chip L1 memory address 0xFFA0 0000.

## INSTRUCTION SET DESCRIPTION

The Blackfin processor family assembly language instruction set employs an algebraic syntax designed for ease of coding and readability. The instructions have been specifically tuned to provide a flexible, densely encoded instruction set that compiles to a very small final memory size. The instruction set also provides fully featured multifunction instructions that allow the programmer to use many of the processor core resources in a single instruction. Coupled with many features more often seen on microcontrollers, this instruction set is very efficient when compiling C and C++ source code. In addition, the architecture supports both user (algorithm/application code) and supervisor (O/S kernel, device drivers, debuggers, ISRs) modes of operation, allowing multiple levels of access to core processor resources.

The assembly language, which takes advantage of the processor's unique architecture, offers the following advantages:

- Seamlessly integrated DSP/MCU features are optimized for both 8-bit and 16-bit operations.
- A multi-issue load/store modified-Harvard architecture, which supports two 16-bit MAC or four 8-bit ALU + two load/store + two pointer updates per cycle.
- All registers, I/O, and memory are mapped into a unified 4G byte memory space, providing a simplified programming model.
- Microcontroller features, such as arbitrary bit and bit-field manipulation, insertion, and extraction; integer operations on 8-, 16-, and 32-bit data-types; and separate user and supervisor stack pointers.
- Code density enhancements, which include intermixing of 16-bit and 32-bit instructions (no mode switching, no code segregation). Frequently used instructions are encoded in 16 bits.

## DEVELOPMENT TOOLS

Analog Devices supports its processors with a complete line of software and hardware development tools, including integrated development environments (which include CrossCore ® Embedded Studio and/or VisualDSP++ ® ), evaluation products, emulators, and a wide variety of software add-ins.

## Integrated Development Environments (IDEs)

For C/C++ software writing and editing, code generation, and debug support, Analog Devices offers two IDEs.

The newest IDE, CrossCore Embedded Studio, is based on the Eclipse TM framework. Supporting most Analog Devices processor families, it is the IDE of choice for future processors, including multicore devices. CrossCore Embedded Studio seamlessly integrates available software add-ins to support real time operating systems, file systems, TCP/IP stacks, USB stacks, algorithmic software modules, and evaluation hardware board support packages. For more information visit www.analog.com/cces.

The other Analog Devices IDE, VisualDSP++, supports processor families introduced prior to the release of CrossCore Embedded Studio. This IDE includes the Analog Devices VDK real time operating system and an open source TCP/IP stack. For more information visit www.analog.com/visualdsp. Note that VisualDSP++ will not support future Analog Devices processors.

## EZ-KIT Lite Evaluation Board

For processor evaluation, Analog Devices provides wide range of EZ-KIT Lite ® evaluation boards. Including the processor and key peripherals, the evaluation board also supports on-chip emulation capabilities and other evaluation and development features. Also available are various EZ-Extenders ® , which are daughter cards delivering additional specialized functionality, including audio and video processing. For more information visit www.analog.com and search on ezkit or ezextender.

## EZ-KIT Lite Evaluation Kits

For a cost-effective way to learn more about developing with Analog Devices processors, Analog Devices offer a range of EZKIT Lite evaluation kits. Each evaluation kit includes an EZ-KIT Lite evaluation board, directions for downloading an evaluation version of the available IDE(s), a USB cable, and a power supply. The USB controller on the EZ-KIT Lite board connects to the USB port of the user's PC, enabling the chosen IDE evaluation

## ADSP-BF534/ADSP-BF536/ADSP-BF537

suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system. It also supports in-circuit programming of the on-board Flash device to store user-specific boot code, enabling standalone operation. With the full version of CrossCore Embedded Studio or VisualDSP++ installed (sold separately), engineers can develop software for supported EZKITs or any custom system utilizing supported Analog Devices processors.

## Software Add-Ins for CrossCore Embedded Studio

Analog Devices offers software add-ins which seamlessly integrate with CrossCore Embedded Studio to extend its capabilities and reduce development time. Add-ins include board support packages for evaluation hardware, various middleware packages, and algorithmic modules. Documentation, help, configuration dialogs, and coding examples present in these add-ins are viewable through the CrossCore Embedded Studio IDE once the add-in is installed.

## Board Support Packages for Evaluation Hardware

Software support for the EZ-KIT Lite evaluation boards and EZExtender daughter cards is provided by software add-ins called board support packages (BSPs). The BSPs contain the required drivers, pertinent release notes, and select example code for the given evaluation hardware. A download link for a specific BSP is located on the web page for the associated EZ-KIT or EZExtender product. The link is found in the Product Download area of the product web page.

## Middleware Packages

Analog Devices and their development partners provide a range of software stacks which offer additional software functionality for the supported peripherals. This includes TCP/IP, USB, filesystem, EAVB, and Dante. For more information, see the Operating Systems and Middleware page.

## Algorithmic Modules

To speed development, Analog Devices offers add-ins that perform popular audio and video processing algorithms. These are available for use with both CrossCore Embedded Studio and VisualDSP++. For more information, visit the Software page in the Resource Library.

## Designing an Emulator-Compatible DSP Board (Target)

For embedded system test and debug, Analog Devices provides a family of emulators. On each JTAG DSP, Analog Devices supplies an IEEE 1149.1 JTAG Test Access Port (TAP). In-circuit emulation is facilitated by use of this JTAG interface. The emulator accesses the internal features of the processor via the TAP, allowing the developer to load code, set breakpoints, and view variables, memory, and registers.

The processor must be halted to send data and commands, but once an operation is completed by the emulator, the DSP system is set to run at full speed with no impact on system timing. The emulators require the target board to include a header that supports connection of the JTAG port of the DSP to the emulator.

For details on target board design issues including mechanical layout, single processor connections, signal buffering, signal termination, and emulator pod logic, see Analog Devices JTAG Emulation Technical Reference (EE-68).

## ADDITIONAL INFORMATION

The following publications that describe the ADSP-BF534/ ADSP-BF536/ADSP-BF537 processors (and related processors) can be ordered from any Analog Devices sales office or accessed electronically on our website:

- Getting Started with Blackfin Processors
- ADSP-BF537 Blackfin Processor Hardware Reference
- ADSP-BF53x/ADSP-BF56x Blackfin Processor Programming Reference
- ADSP-BF534/ADSP-BF536/ADSP-BF537 Blackfin Processor Anomaly List

## RELATED SIGNAL CHAINS

A signal chain is a series of signal conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together. See Reference Design.

The application signal chains page at Circuits from the Lab ® provides the following:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## PIN DESCRIPTIONS

The ADSP-BF534/ADSP-BF536/ADSP-BF537 processors pin definitions are listed in Table 9. In order to maintain maximum functionality and reduce package size and pin count, some pins have dual, multiplexed functions. In cases where pin function is reconfigurable, the default state is shown in plain text, while the alternate function is shown in italics. Pins shown with an asterisk after their name (*) offer high source/high sink current capabilities.

All pins are three-stated during and immediately after reset, with the exception of the external memory interface, asynchronous and synchronous memory control, and the buffered XTAL output pin (CLKBUF). On the external memory interface, the

## Table 9. Pin Descriptions

| PinName                    | Type   | Function                                                                          | Driver Type 1   |
|----------------------------|--------|-----------------------------------------------------------------------------------|-----------------|
| Memory Interface           |        |                                                                                   |                 |
| ADDR19-1                   | O      | Address Bus for Async Access                                                      | A               |
| DATA15-0                   | I/O    | Data Bus for Async/Sync Access                                                    | A               |
| ABE1-0/SDQM1-0             | O      | Byte Enables/Data Masks for Async/Sync Access                                     | A               |
| BR                         | I      | Bus Request (This pin should be pulled high when not used.)                       |                 |
| BG                         | O      | Bus Grant                                                                         | A               |
| BGH                        | O      | Bus Grant Hang                                                                    | A               |
| Asynchronous MemoryControl |        |                                                                                   |                 |
| AMS3-0                     | O      | Bank Select (Require pull-ups if hibernate is used.)                              | A               |
| ARDY                       | I      | Hardware Ready Control                                                            |                 |
| AOE                        | O      | Output Enable                                                                     | A               |
| ARE                        | O      | Read Enable                                                                       | A               |
| AWE                        | O      | Write Enable                                                                      | A               |
| SynchronousMemory Control  |        |                                                                                   |                 |
| SRAS                       | O      | Row Address Strobe                                                                | A               |
| SCAS                       | O      | Column Address Strobe                                                             | A               |
| SWE                        | O      | Write Enable                                                                      | A               |
| SCKE                       | O      | Clock Enable (Requires a pull-down if hibernate with SDRAM self-refresh is used.) | A               |
| CLKOUT                     | O      | Clock Output                                                                      | B               |
| SA10                       | O      | A10 Pin                                                                           | A               |
| SMS                        | O      | Bank Select                                                                       | A               |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

control and address lines are driven high, with the exception of CLKOUT, which toggles at the system clock rate. If BR is active (whether or not RESET is asserted), the memory pins are also three-stated. During hibernate, all outputs are three-stated unless otherwise noted in Table 9.

All I/O pins have their input buffers disabled with the exception of the pins noted in the data sheet that need pull-ups or pulldowns if unused.

The SDA (serial data) and SCL (serial clock) pins are open drain and therefore require a pull-up resistor. Consult version 2.1 of the I 2 C specification for the proper resistor value.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Table 9. Pin Descriptions (Continued)

| PinName                                                                                  | Type   | Function                                                                                                               | Driver Type 1   |
|------------------------------------------------------------------------------------------|--------|------------------------------------------------------------------------------------------------------------------------|-----------------|
| Port F: GPIO/UART1-0/Timer7-0/SPI/ External DMARequest/PPI (* =HighSource/High Sink Pin) |        |                                                                                                                        |                 |
| PF0* - GPIO/ UART0 TX / DMAR0                                                            | I/O    | GPIO/ UART0 Transmit / DMARequest 0                                                                                    | C               |
| PF1* - GPIO/ UART0 RX / DMAR1 / TACI1                                                    | I/O    | GPIO/ UART0 Receive / DMARequest 1 / Timer1 Alternate Input Capture                                                    | C               |
| PF2* - GPIO/ UART1 TX / TMR7                                                             | I/O    | GPIO/ UART1 Transmit / Timer7                                                                                          | C               |
| PF3* - GPIO/ UART1 RX / TMR6 / TACI6                                                     | I/O    | GPIO/ UART1 Receive / Timer6 / Timer6 Alternate Input Capture                                                          | C               |
| PF4* - GPIO/ TMR5 / SPI SSEL6                                                            | I/O    | GPIO/ Timer5 / SPI Slave Select Enable 6                                                                               | C               |
| PF5* - GPIO/ TMR4 / SPI SSEL5                                                            | I/O    | GPIO/ Timer4 / SPI Slave Select Enable 5                                                                               | C               |
| PF6* - GPIO/ TMR3 / SPI SSEL4                                                            | I/O    | GPIO/ Timer3 / SPI Slave Select Enable 4                                                                               | C               |
| PF7* - GPIO/ TMR2 / PPI FS3                                                              | I/O    | GPIO/ Timer2 / PPI Frame Sync 3                                                                                        | C               |
| PF8 - GPIO/ TMR1 / PPI FS2                                                               | I/O    | GPIO/ Timer1 / PPI Frame Sync 2                                                                                        | C               |
| PF9 - GPIO/ TMR0 / PPI FS1                                                               | I/O    | GPIO/ Timer0 / PPI Frame Sync 1                                                                                        | C               |
| PF10 - GPIO/ SPI SSEL1                                                                   | I/O    | GPIO/ SPI Slave Select Enable 1                                                                                        | C               |
| PF11 - GPIO/ SPI MOSI                                                                    | I/O    | GPIO/ SPI Master Out Slave In                                                                                          | C               |
| PF12 - GPIO/ SPI MISO                                                                    | I/O    | GPIO/ SPI Master In Slave Out (This pin should be pulled high through a 4.7 k  resistor if booting via the SPI port.) | C               |
| PF13 - GPIO/ SPI SCK                                                                     | I/O    | GPIO/ SPI Clock                                                                                                        | D               |
| PF14 - GPIO/ SPI SS / TACLK0                                                             | I/O    | GPIO/ SPI Slave Select / Alternate Timer0 Clock Input                                                                  | C               |
| PF15 - GPIO/ PPI CLK / TMRCLK                                                            | I/O    | GPIO/ PPI Clock / External Timer Reference                                                                             | C               |
| Port G: GPIO/PPI/SPORT1                                                                  |        |                                                                                                                        |                 |
| PG0 - GPIO/ PPID0                                                                        | I/O    | GPIO/ PPI Data 0                                                                                                       | C               |
| PG1 - GPIO/ PPID1                                                                        | I/O    | GPIO/ PPI Data 1                                                                                                       | C               |
| PG2 - GPIO/ PPID2                                                                        | I/O    | GPIO/ PPI Data 2                                                                                                       | C               |
| PG3 - GPIO/ PPID3                                                                        | I/O    | GPIO/ PPI Data 3                                                                                                       | C               |
| PG4 - GPIO/ PPID4                                                                        | I/O    | GPIO/ PPI Data 4                                                                                                       | C               |
| PG5 - GPIO/ PPID5                                                                        | I/O    | GPIO/ PPI Data 5                                                                                                       | C               |
| PG6 - GPIO/ PPID6                                                                        | I/O    | GPIO/ PPI Data 6                                                                                                       | C               |
| PG7 - GPIO/ PPID7                                                                        | I/O    | GPIO/ PPI Data 7                                                                                                       | C               |
| PG8 - GPIO/ PPID8 / DR1SEC                                                               | I/O    | GPIO/ PPI Data 8 / SPORT1 Receive Data Secondary                                                                       | C               |
| PG9 - GPIO/ PPID9 / DT1SEC                                                               | I/O    | GPIO/ PPI Data 9 / SPORT1 Transmit Data Secondary                                                                      | C               |
| PG10 - GPIO/ PPI D10 / RSCLK1                                                            | I/O    | GPIO/ PPI Data 10 / SPORT1 Receive Serial Clock                                                                        | D               |
| PG11 - GPIO/ PPI D11 / RFS1                                                              | I/O    | GPIO/ PPI Data 11 / SPORT1 Receive Frame Sync                                                                          | C               |
| PG12 - GPIO/ PPI D12 / DR1PRI                                                            | I/O    | GPIO/ PPI Data 12 / SPORT1 Receive Data Primary                                                                        | C               |
| PG13 - GPIO/ PPI D13 / TSCLK1                                                            | I/O    | GPIO/ PPI Data 13 / SPORT1 Transmit Serial Clock                                                                       | D               |
| PG14 - GPIO/ PPI D14 / TFS1                                                              | I/O    | GPIO/ PPI Data 14 / SPORT1 Transmit Frame Sync                                                                         | C               |
| PG15 - GPIO/ PPI D15 / DT1PRI                                                            | I/O    | GPIO/ PPI Data 15 / SPORT1 Transmit Data Primary                                                                       | C               |

Table 9. Pin Descriptions (Continued)

| PinName                                                                   | Type   | Function                                                                                                                          | Driver Type 1   |
|---------------------------------------------------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Port H: GPIO/10/100 EthernetMAC (On ADSP-BF534, these pins are GPIO only) |        |                                                                                                                                   |                 |
| PH0 - GPIO/ ETxD0                                                         | I/O    | GPIO/ Ethernet MII or RMII TransmitD0                                                                                             | E               |
| PH1 - GPIO/ ETxD1                                                         | I/O    | GPIO/ Ethernet MII or RMII TransmitD1                                                                                             | E               |
| PH2 - GPIO/ ETxD2                                                         | I/O    | GPIO/ Ethernet MII TransmitD2                                                                                                     | E               |
| PH3 - GPIO/ ETxD3                                                         | I/O    | GPIO/ Ethernet MII TransmitD3                                                                                                     | E               |
| PH4 - GPIO/ ETxEN                                                         | I/O    | GPIO/ Ethernet MII or RMII Transmit Enable                                                                                        | E               |
| PH5 - GPIO/ MII TxCLK / RMII REF_CLK                                      | I/O    | GPIO/ Ethernet MII Transmit Clock / RMII Reference Clock                                                                          | E               |
| PH6 - GPIO/ MII PHYINT / RMIIMDINT                                        | I/O    | GPIO/ Ethernet MII PHYInterrupt / RMII ManagementDataInterrupt (This pin should be pulled high when used as a hibernate wake-up.) | E               |
| PH7 - GPIO/ COL                                                           | I/O    | GPIO/ Ethernet Collision                                                                                                          | E               |
| PH8 - GPIO/ ERxD0                                                         | I/O    | GPIO/ Ethernet MII or RMII ReceiveD0                                                                                              | E               |
| PH9 - GPIO/ ERxD1                                                         | I/O    | GPIO/ Ethernet MII or RMII ReceiveD1                                                                                              | E               |
| PH10 - GPIO/ ERxD2                                                        | I/O    | GPIO/ Ethernet MII ReceiveD2                                                                                                      | E               |
| PH11 - GPIO/ ERxD3                                                        | I/O    | GPIO/ Ethernet MII ReceiveD3                                                                                                      | E               |
| PH12 - GPIO/ ERxDV / TACLK5                                               | I/O    | GPIO/ Ethernet MII Receive Data Valid / Alternate Timer5 Input Clock                                                              | E               |
| PH13 - GPIO/ ERxCLK / TACLK6                                              | I/O    | GPIO/ Ethernet MII Receive Clock / Alternate Timer6 Input Clock                                                                   | E               |
| PH14 - GPIO/ ERxER / TACLK7                                               | I/O    | GPIO/ Ethernet MII or RMII Receive Error / Alternate Timer7 Input Clock                                                           | E               |
| PH15 - GPIO/ MII CRS / RMII CRS_DV                                        | I/O    | GPIO/ Ethernet MII Carrier Sense / Ethernet RMII Carrier Sense and Receive Data Valid                                             | E               |
| Port J: SPORT0/TWI/SPI Select/CAN                                         |        |                                                                                                                                   |                 |
| PJ0-MDC                                                                   | O      | Ethernet Management Channel Clock (On ADSP-BF534 processors, do not connect this pin.)                                            | E               |
| PJ1 - MDIO                                                                | I/O    | EthernetManagementChannelSerialData(OnADSP-BF534processors,tiethis pin to ground.)                                                | E               |
| PJ2 - SCL                                                                 | I/O    | TWI Serial Clock (This pin is an open-drain output and requires a pull-up resistor.)                                              | F               |
| PJ3 - SDA                                                                 | I/O    | TWI Serial Data (This pin is an open-drain output and requires a pull-up resistor.)                                               | F               |
| PJ4 - DR0SEC/ CANRX / TACI0                                               | I      | SPORT0 Receive Data Secondary/ CANReceive / Timer0 Alternate Input Capture                                                        |                 |
| PJ5 - DT0SEC/ CANTX / SPI SSEL7                                           | O      | SPORT0 Transmit Data Secondary/ CANTransmit / SPI Slave Select Enable 7                                                           | C               |
| PJ6 - RSCLK0/ TACLK2                                                      | I/O    | SPORT0 Receive Serial Clock/ Alternate Timer2 Clock Input                                                                         | D               |
| PJ7 - RFS0/ TACLK3                                                        | I/O    | SPORT0 Receive Frame Sync/ Alternate Timer3 Clock Input                                                                           | C               |
| PJ8 - DR0PRI/ TACLK4                                                      | I      | SPORT0 Receive Data Primary/ Alternate Timer4 Clock Input                                                                         |                 |
| PJ9 - TSCLK0/ TACLK1                                                      | I/O    | SPORT0 Transmit Serial Clock/ Alternate Timer1 Clock Input                                                                        | D               |
| PJ10 - TFS0/ SPI SSEL3                                                    | I/O    | SPORT0 Transmit Frame Sync/ SPI Slave Select Enable 3                                                                             | C               |
| PJ11 - DT0PRI/ SPI SSEL2                                                  | O      | SPORT0 Transmit Data Primary/ SPI Slave Select Enable 2                                                                           | C               |
| Real-Time Clock                                                           |        |                                                                                                                                   |                 |
| RTXI                                                                      | I      | RTC Crystal Input (This pin should be pulled low when not used.)                                                                  |                 |
| RTXO                                                                      | O      | RTC Crystal Output (Does not three-state in hibernate.)                                                                           |                 |
| JTAG Port                                                                 |        |                                                                                                                                   |                 |
| TCK                                                                       | I      | JTAG Clock                                                                                                                        |                 |
| TDO                                                                       | O      | JTAG Serial Data Out                                                                                                              | C               |
| TDI                                                                       | I      | JTAG Serial Data In                                                                                                               |                 |
| TMS                                                                       | I      | JTAG Mode Select                                                                                                                  |                 |
| TRST                                                                      | I      | JTAG Reset (This pin should be pulled low if the JTAG port is not used.)                                                          |                 |
| EMU                                                                       | O      | Emulation Output                                                                                                                  | C               |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Table 9. Pin Descriptions (Continued)

| PinName           | Type   | Function                                                                                                                     | Driver Type 1   |
|-------------------|--------|------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Clock             |        |                                                                                                                              |                 |
| CLKIN             | I      | Clock/Crystal Input                                                                                                          |                 |
| XTAL              | O      | Crystal Output (If CLKBUF is enabled, does not three-state during hibernate.)                                                |                 |
| CLKBUF            | O      | Buffered XTAL Output (If enabled, does not three-state during hibernate.)                                                    | E               |
| ModeControls      |        |                                                                                                                              |                 |
| RESET             | I      | Reset                                                                                                                        |                 |
| NMI               | I      | Nonmaskable Interrupt (This pin should be pulled high when not used.)                                                        |                 |
| BMODE2-0          | I      | Boot Mode Strap 2-0 (These pins must be pulled to the state required for the desired boot mode.)                             |                 |
| Voltage Regulator |        |                                                                                                                              |                 |
| VROUT1-0          | O      | External FET Drive (These pins should beleftunconnectedwhennotusedand are driven high during hibernate.)                     |                 |
| Supplies          |        |                                                                                                                              |                 |
| V DDEXT           | P      | I/O Power Supply                                                                                                             |                 |
| V DDINT           | P      | Internal Power Supply                                                                                                        |                 |
| V DDRTC           | P      | Real-Time Clock Power Supply (This pin should be connected to V DDEXT when not used and should remain powered at all times.) |                 |
| GND               | G      | External Ground                                                                                                              |                 |

## SPECIFICATIONS

Specifications are subject to change without notice. For information about product specifications, contact your Analog Devices, Inc., representative.

## OPERATING CONDITIONS

All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

| Parameter   | Parameter                                       | Conditions                                                                         | Min         | Nominal    | Max           | Unit   |
|-------------|-------------------------------------------------|------------------------------------------------------------------------------------|-------------|------------|---------------|--------|
| V DDINT     | Internal Supply Voltage 1                       | Nonautomotive 300 MHz, 400 MHz, and 500 MHz speed grade models 2                   | 0.8         | 1.2        | 1.32          | V      |
| V DDINT     | Internal Supply Voltage 1                       | Nonautomotive 533 MHz speed grade models 2                                         | 0.8         | 1.25       | 1.375         | V      |
| V DDINT     | Internal Supply Voltage 1                       | Nonautomotive 600 MHz speed grade models 2                                         | 0.8         | 1.3        | 1.43          | V      |
| V DDINT     | Internal Supply Voltage 1                       | Automotive grade models and +105°C nonautomotive grade models 2                    | 0.95        | 1.2        | 1.32          | V      |
| V DDEXT     | External Supply Voltage                         | Nonautomotive grade models 2                                                       | 2.25        | 2.5 or 3.3 | 3.6           | V      |
| V DDEXT     | External Supply Voltage                         | Automotive grade models and +105°C nonautomotive grade models 2                    | 2.7         | 3.0 or 3.3 | 3.6           | V      |
| V DDRTC     | Real-Time Clock Power Supply Voltage            |                                                                                    | 2.25        |            | 3.6           | V      |
| V IH        | High Level Input Voltage 3, 4                   | V DDEXT = Maximum                                                                  | 2.0         |            |               | V      |
| V IHCLKIN   | High Level Input Voltage 5                      | V DDEXT = Maximum                                                                  | 2.2         |            |               | V      |
| V IH5V      | 5.0 V Tolerant Pins, High Level Input Voltage 6 |                                                                                    | 0.7×V DDEXT |            |               | V      |
| V IH5V      | 5.0 V Tolerant Pins, High Level Input Voltage 7 | V DDEXT = Maximum                                                                  | 2.0         |            |               | V      |
| V IL        | Low Level Input Voltage 3, 8                    | V DDEXT = Minimum                                                                  |             |            | +0.6          | V      |
| V IL5V      | 5.0 V Tolerant Pins, Low Level Input Voltage 6  |                                                                                    |             |            | 0.3 × V DDEXT | V      |
| V IL5V      | 5.0 V Tolerant Pins, Low Level Input Voltage 7  | V DDEXT = Minimum                                                                  |             |            | +0.8          | V      |
| T J         | Junction Temperature                            | 208-Ball Chip Scale Package Ball Grid Array (CSP_BGA)@ T AMBIENT = -40°C to +105°C | -40         |            | +120          | °C     |
| T J         | Junction Temperature                            | 208-Ball Chip Scale Package Ball Grid Array (CSP_BGA)@ T AMBIENT = -40°C to +85°C  | -40         |            | +105          | °C     |
| T J         | Junction Temperature                            | 208-Ball Chip Scale Package Ball Grid Array (CSP_BGA)@ T AMBIENT = 0°C to +70°C    | 0           |            | +95           | °C     |
| T J         | Junction Temperature                            | 182-Ball Chip Scale Package Ball Grid Array (CSP_BGA)@ T AMBIENT = -40°C to +85°C  | -40         |            | +105          | °C     |
| T J         | Junction Temperature                            | 182-Ball Chip Scale Package Ball Grid Array (CSP_BGA)@ T AMBIENT = 0°C to +70°C    | 0           |            | +100          | °C     |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Table 10 through Table 12 describe the voltage/frequency requirements for the ADSP-BF534/ADSP-BF536/ADSP-BF537 processor clocks. Take care in selecting MSEL, SSEL, and CSEL

ratios so as not to exceed the maximum core clock and system clock. Table 13 describes phase-locked loop operating conditions.

Table 10. Core Clock Requirements-500 MHz, 533 MHz, and 600 MHz Speed Grades 1

| Parameter   | Parameter                                         | Internal Regulator Setting   |   Max | Unit   |
|-------------|---------------------------------------------------|------------------------------|-------|--------|
| f CCLK      | Core Clock Frequency (V DDINT =1.30 V Minimum) 2  | 1.30 V                       |   600 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 1.20 V Minimum) 3 | 1.25 V                       |   533 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT =1.14 V Minimum)    | 1.20 V                       |   500 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT =1.045 V Minimum)   | 1.10 V                       |   444 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.95 V Minimum)   | 1.00 V                       |   400 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.85 V Minimum)   | 0.90 V                       |   333 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.8 V Minimum)    | 0.85 V                       |   250 | MHz    |

Table 11. Core Clock Requirements-400 MHz Speed Grade 1

| Parameter   | Parameter                                       | Internal Regulator Setting   | 120°C  T J  105°C Max   |   All 2 Other T J Max | Unit   |
|-------------|-------------------------------------------------|------------------------------|---------------------------|-----------------------|--------|
| f CCLK      | Core Clock Frequency (V DDINT =1.14 V Minimum)  | 1.20 V                       | 400                       |                   400 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT =1.045V Minimum)  | 1.10 V                       | 333                       |                   363 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.95 V Minimum) | 1.00 V                       | 295                       |                   333 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.85 V Minimum) | 0.90 V                       |                           |                   280 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.8 V Minimum)  | 0.85 V                       |                           |                   250 | MHz    |

Table 12. Core Clock Requirements-300 MHz Speed Grade 1

| Parameter   | Parameter                                       | Internal Regulator Setting   |   Max | Unit   |
|-------------|-------------------------------------------------|------------------------------|-------|--------|
| f CCLK      | Core Clock Frequency (V DDINT =1.14 V Minimum)  | 1.20 V                       |   300 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT =1.045 V Minimum) | 1.10 V                       |   255 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.95 V Minimum) | 1.00 V                       |   210 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.85 V Minimum) | 0.90 V                       |   180 | MHz    |
| f CCLK      | Core Clock Frequency (V DDINT = 0.8 V Minimum)  | 0.85 V                       |   160 | MHz    |

## Table 13. Phase-Locked Loop Operating Conditions

| Parameter   | Min                                              | Max        | Unit   |
|-------------|--------------------------------------------------|------------|--------|
| f VCO       | Voltage Controlled Oscillator (VCO) Frequency 50 | Max f CCLK | MHz    |

## Table 14. System Clock Requirements

| Parameter   | Condition                                   | Max   | Unit   |
|-------------|---------------------------------------------|-------|--------|
| f SCLK 1    | V DDEXT  3.3 V or 2.5 V, V DDINT  1.14 V | 133 2 | MHz    |
| f SCLK 1    | V DDEXT  3.3 V or 2.5 V, V DDINT  1.14 V | 100   | MHz    |

## ELECTRICAL CHARACTERISTICS

All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

|           |                                  |                                                   | 300MHz/400MHz 1   | 300MHz/400MHz 1   | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2   |      |
|-----------|----------------------------------|---------------------------------------------------|-------------------|-------------------|--------------------------|--------------------------|--------------------------|------|
| Parameter |                                  | Test Conditions                                   | Min               | Typ Max           | Min                      | Typ                      | Max                      | Unit |
| V OH 3    | High Level Output Voltage        | V DDEXT = 2.5 V/3.0 V/ 3.3 V ± 10%, I OH = -0.5mA | V DDEXT - 0.5     |                   | V DDEXT - 0.5            |                          |                          | V    |
| V OH 4    |                                  | V DDEXT = 3.3 V ± 10%, I OH =-8mA                 | V DDEXT - 0.5     |                   | V DDEXT - 0.5            |                          |                          | V    |
|           |                                  | V DDEXT = 2.5 V/3.0 V ± 10%, I OH =-6mA           | V DDEXT - 0.5     |                   | V DDEXT - 0.5            |                          |                          | V    |
| V OH 5    |                                  | V DDEXT = 2.5 V/3.0 V/ 3.3 V ± 10%, I OH = -2.0mA | V DDEXT - 0.5     |                   | V DDEXT - 0.5            |                          |                          | V    |
| I OH 6    | High Level Output Current        | V OH = V DDEXT - 0.5 V Min                        |                   | -64               |                          |                          | -64                      | mA   |
| I OH 7    |                                  | V OH = V DDEXT - 0.5 V Min                        |                   | -144              |                          |                          | -144                     | mA   |
| V OL 3    | Low Level Output Voltage         | V DDEXT = 2.5 V/3.0 V/ 3.3 V ± 10%, I OL = 2.0mA  |                   | 0.4               |                          |                          | 0.4                      | V    |
| V OL 4    |                                  | V DDEXT = 3.3 V ± 10%, I OL =8mA                  |                   | 0.5               |                          |                          | 0.5                      | V    |
| 5         |                                  | V DDEXT = 2.5 V/3.0 V ± 10%, I OL =6mA            |                   | 0.5               |                          |                          | 0.5                      | V    |
| V OL      |                                  | V DDEXT = 2.5 V/3.0 V/ 3.3 V ± 10%, I OL = 2.0mA  |                   | 0.5               |                          |                          | 0.5                      | V    |
| I OL 6    | Low Level Output Current         | V OL = 0.5 V Max                                  |                   | 64                |                          |                          | 64                       | mA   |
| I OL 7    |                                  | V OL = 0.5 V Max                                  |                   | 144               |                          |                          | 144                      | mA   |
| I IH      | High Level Input Current 8       | V DDEXT =3.6 V,V IN =3.6V                         |                   | 10                |                          |                          | 10                       | µA   |
| I IH5V    | High Level Input Current 9       | V DDEXT =3.6 V,V IN =5.5V                         |                   | 10                |                          |                          | 10                       | µA   |
| I IL      | Low Level Input Current 2        | V DDEXT =3.6 V, V IN = 0 V                        |                   | 10                |                          |                          | 10                       | µA   |
| I IHP     | High Level Input Current JTAG 10 | V DDEXT =3.6 V,V IN =3.6V                         |                   | 50                |                          |                          | 50                       | µA   |
| I OZH     | Three-State Leakage Current 11   | V DDEXT =3.6 V,V IN =3.6V                         |                   | 10                |                          |                          | 10                       | µA   |
| I OZH5V   | Three-State Leakage Current 12   | V DDEXT =3.6 V,V IN =5.5V                         |                   | 10                |                          |                          | 10                       | µA   |
| I OZL     | Three-State Leakage Current 5    | V DDEXT = 3.6 V, V IN = 0 V                       |                   | 10                |                          |                          | 10                       | µA   |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

|                      |                                               |                                                                                          | 300MHz/400MHz 1   | 300MHz/400MHz 1   | 300MHz/400MHz 1                           | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2                    |        |
|----------------------|-----------------------------------------------|------------------------------------------------------------------------------------------|-------------------|-------------------|-------------------------------------------|--------------------------|--------------------------|-------------------------------------------|--------|
| Parameter            | Parameter                                     | Test Conditions                                                                          | Min               | Typ               | Max                                       | Min                      | Typ                      | Max                                       | Unit   |
| C IN                 | Input Capacitance 13, 14                      | f IN = 1 MHz, T AMBIENT = 25°C, V IN = 2.5 V                                             |                   |                   | 8                                         |                          |                          | 8                                         | pF     |
| I DD-IDLE            | V DDINT Current in Idle                       | V DDINT = 1.0 V, f CCLK = 50 MHz, T J = 25°C, ASF = 0.43                                 |                   | 14                |                                           |                          | 24                       |                                           | mA     |
| I DD-TYP             | V DDINT Current                               | V DDINT = 1.14 V, f CCLK = 300 MHz, T J = 25°C, ASF = 1.00                               |                   | 100               |                                           |                          | 113                      |                                           | mA     |
| I DD-TYP             | V DDINT Current                               | V DDINT = 1.14 V, f CCLK = 400 MHz, T J = 25°C, ASF = 1.00                               |                   | 125               |                                           |                          | 138                      |                                           | mA     |
| I DDDEEPSLEEP 15     | V DDINT Current in Deep Sleep Mode            | V DDINT = 1.0 V, f CCLK = 0 MHz, T J = 25°C, ASF = 0.00                                  |                   | 6                 |                                           |                          | 16                       |                                           | mA     |
| I DDSLEEP            | V DDINT Current in Sleep Mode                 | V DDINT = 1.0 V, f SCLK = 25 MHz, T J = 25°C                                             |                   | 9.5               |                                           |                          | 19.5                     |                                           | mA     |
| I DD-TYP             | V DDINT Current                               | V DDINT = 1.20 V, f CCLK = 533 MHz, T J = 25°C, ASF = 1.00                               |                   |                   |                                           |                          | 185                      |                                           | mA     |
| I DD-TYP             | V DDINT Current                               | V DDINT = 1.30 V, f CCLK = 600 MHz, T J = 25°C, ASF = 1.00                               |                   |                   |                                           |                          | 227                      |                                           | mA     |
| I DDHIBERNATE 15, 16 | V DDEXT Current in Hibernate State            | V DDEXT = 3.60 V, CLKIN=0 MHz, T J = maximum, with voltage regulator off (V DDINT = 0 V) |                   | 50                | 100                                       |                          | 50                       | 100                                       |  A    |
| I DDRTC I            | V DDRTC Current V DDINT Current in Deep Sleep | V DDRTC = 3.3 V, T J = 25°C f CCLK = 0 MHz, f =0 MHz                                     |                   | 20                | Table 16                                  |                          | 20                       | Table 15                                  |  A mA |
| DDDEEPSLEEP 15 17    | Mode V DDINT Current in                       | SCLK f CCLK = 0 MHz,                                                                     |                   |                   | I DDDEEPSLEEP +(0.14 × V DDINT × f SCLK ) |                          |                          | I DDDEEPSLEEP +(0.14 × V DDINT × f SCLK ) | mA     |
| I DDSLEEP 15,        | Sleep Mode V DDINT Current                    | f SCLK  0 MHz f CCLK 0                                                                  |                   |                   | I DDSLEEP + (Table 17 × ASF)              |                          |                          | I DDSLEEP + (Table 17 × ASF)              | mA     |
| I DDINT 18           |                                               |  MHz, f SCLK  0 MHz                                                                   |                   |                   |                                           |                          |                          |                                           |        |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

System designers should refer to Estimating Power for the ADSP-BF534/BF536/BF537 Blackfin Processors (EE-297) , which provides detailed information for optimizing designs for lowest power. All topics discussed in this section are described in detail in EE-297. Total power dissipation has two components:

1. Static, including leakage current

dissipation for internal circuitry (V DDINT). I DDDEEPSLEEP specifies static power dissipation as a function of voltage (V DDINT) and temperature (see Table 15 or Table 16), and IDDINT specifies the total power specification for the listed test conditions, including the dynamic component as a function of voltage (VDDINT) and frequency (Table 17).

2. Dynamic, due to transistor switching characteristics

Many operating conditions can also affect power dissipation, including temperature, voltage, operating frequency, and processor activity. Electrical Characteristics shows the current

The dynamic component is also subject to an Activity Scaling Factor (ASF) which represents application code running on the processor (Table 18).

Table 15. Static Current-500 MHz, 533 MHz, and 600 MHz Speed Grade Devices (mA) 1

|          | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   |
|----------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| T J (°C) | 0.80V                | 0.85V                | 0.90V                | 0.95V                | 1.00V                | 1.05V                | 1.10V                | 1.15V                | 1.20V                | 1.25V                | 1.30V                | 1.32V                | 1.375V               | 1.43V                |
| -40      | 3.9                  | 4.7                  | 6.8                  | 8.2                  | 9.9                  | 12.0                 | 14.6                 | 17.3                 | 20.3                 | 24.1                 | 27.1                 | 28.6                 | 36.3                 | 44.4                 |
| 0        | 17.0                 | 19.2                 | 21.9                 | 25.0                 | 28.2                 | 32.1                 | 36.9                 | 41.8                 | 47.7                 | 53.8                 | 61.0                 | 63.8                 | 73.2                 | 84.1                 |
| 25       | 35.0                 | 39.2                 | 44.3                 | 50.8                 | 56.1                 | 63.3                 | 69.1                 | 76.4                 | 84.7                 | 93.5                 | 104.5                | 109.1                | 123.4                | 138.8                |
| 40       | 53.0                 | 59.2                 | 65.3                 | 71.9                 | 79.1                 | 88.0                 | 96.6                 | 108.0                | 120.0                | 130.7                | 142.6                | 148.5                | 166.5                | 185.6                |
| 55       | 76.7                 | 84.6                 | 93.6                 | 103.1                | 113.7                | 123.9                | 136.3                | 148.3                | 162.8                | 178.4                | 194.4                | 201.4                | 223.7                | 247.5                |
| 70       | 110.1                | 120.0                | 130.9                | 142.2                | 156.5                | 171.3                | 185.2                | 201.7                | 220.6                | 239.7                | 259.8                | 268.8                | 295.9                | 325.2                |
| 85       | 150.1                | 164.5                | 178.7                | 193.2                | 210.4                | 228.9                | 247.7                | 268.8                | 291.4                | 314.1                | 341.1                | 351.2                | 384.6                | 420.3                |
| 100      | 202.3                | 219.2                | 236.5                | 255.8                | 277.8                | 299.8                | 323.8                | 351.2                | 378.8                | 407.5                | 440.4                | 453.4                | 494.3                | 538.2                |
| 105      | 223.8                | 241.4                | 260.4                | 282.0                | 303.4                | 328.7                | 354.5                | 381.7                | 410.8                | 443.6                | 477.8                | 492.2                | 535.1                | 581.5                |

Table 16. Static Current-300 MHz and 400 MHz Speed Grade Devices (mA) 1

|          | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   |
|----------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| T J (°C) | 0.80V                | 0.85V                | 0.90V                | 0.95V                | 1.00V                | 1.05V                | 1.10V                | 1.15V                | 1.20V                | 1.25V                | 1.30V                | 1.32V                |
| -40      | 2.6                  | 3.2                  | 3.7                  | 4.5                  | 5.5                  | 6.6                  | 7.9                  | 9.3                  | 10.5                 | 12.5                 | 13.9                 | 14.8                 |
| 0        | 6.6                  | 7.8                  | 8.4                  | 9.9                  | 10.9                 | 12.3                 | 13.8                 | 15.5                 | 17.5                 | 19.6                 | 21.7                 | 23.1                 |
| 25       | 12.2                 | 13.5                 | 14.8                 | 16.4                 | 18.2                 | 19.9                 | 22.7                 | 25.6                 | 28.4                 | 31.8                 | 35.7                 | 37.2                 |
| 40       | 17.2                 | 19.0                 | 20.6                 | 22.9                 | 25.9                 | 28.2                 | 31.6                 | 34.9                 | 38.9                 | 42.9                 | 47.6                 | 49.5                 |
| 55       | 25.7                 | 27.8                 | 30.9                 | 33.7                 | 37.3                 | 41.4                 | 44.8                 | 50.0                 | 54.8                 | 59.4                 | 66.1                 | 68.4                 |
| 70       | 37.6                 | 41.3                 | 44.8                 | 48.9                 | 53.9                 | 58.6                 | 63.9                 | 69.7                 | 76.9                 | 84.0                 | 92.2                 | 94.9                 |
| 85       | 53.7                 | 58.3                 | 63.7                 | 69.0                 | 75.9                 | 82.9                 | 90.5                 | 98.4                 | 106.4                | 115.3                | 124.6                | 128.1                |
| 100      | 75.1                 | 82.3                 | 88.5                 | 95.8                 | 104.0                | 112.5                | 121.8                | 130.6                | 141.3                | 153.2                | 164.8                | 169.7                |
| 105      | 84.5                 | 91.2                 | 98.2                 | 106.0                | 114.2                | 123.0                | 132.4                | 143.3                | 155.0                | 167.4                | 179.8                | 185.4                |
| 115 2    | 103.8                | 111.8                | 120.3                | 127.6                | 138.0                | 148.5                | 159.6                | 171.4                | 184.6                | 198.8                | 213.4                | 219.6                |
| 120 2    | 115.5                | 123.6                | 132.2                | 141.9                | 152.3                | 163.7                | 175.6                | 189.3                | 202.8                | 217.7                | 232.3                | 238.6                |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Table 17. Dynamic Current (mA, with ASF = 1.0) 1

|                 | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   | Voltage (V DDINT )   |
|-----------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Frequency (MHz) | 0.80V                | 0.85V                | 0.90V                | 0.95V                | 1.00V                | 1.05V                | 1.10V                | 1.15V                | 1.20V                | 1.25V                | 1.30V                | 1.32V                | 1.375V               | 1.43V                |
| 50              | 11.0                 | 13.7                 | 19.13                | 18.2                 | 18.67                | 19.13                | 19.6                 | 21.2                 | 24.1                 | 25.5                 | 28.5                 | 28.6                 | 28.85                | 29.2                 |
| 100             | 27.9                 | 22.7                 | 30.8                 | 28.4                 | 29.3                 | 30.8                 | 32.9                 | 35.3                 | 37.8                 | 40.6                 | 43.5                 | 43.7                 | 44.1                 | 45.8                 |
| 200             | 36.9                 | 42.6                 | 55.0                 | 49.2                 | 51.5                 | 55.0                 | 58.3                 | 62.9                 | 67.0                 | 69.7                 | 73.0                 | 74.0                 | 75.7                 | 80.7                 |
| 300             | N/A                  | 61.5                 | 79.2                 | 70.4                 | 74.6                 | 79.2                 | 84.4                 | 90.7                 | 94.3                 | 99.1                 | 103.9                | 105.5                | 108.0                | 113.4                |
| 400             | N/A                  | N/A                  | N/A                  | 92.4                 | 97.2                 | 104.3                | 109.8                | 116.5                | 121.9                | 128.0                | 134.6                | 136.6                | 139.8                | 145.1                |
| 500             | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | 142.3                | 149.3                | 157.5                | 164.7                | 166.7                | 169.8                | 176.9                |
| 533             | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | 158.6                | 167.0                | 174.3                | 176.6                | 180.1                | 187.9                |
| 600             | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | N/A                  | 193.7                | 196.5                | 200.7                | 210.0                |

Table 18. Activity Scaling Factors

| I DDINT Power Vector 1   |   Activity Scaling Factor (ASF) 2 |
|--------------------------|-----------------------------------|
| I DD-PEAK                |                              1.33 |
| I DD-HIGH                |                              1.29 |
| I DD-TYP                 |                              1    |
| I DD-APP                 |                              0.88 |
| I DD-NOP                 |                              0.72 |
| I DD-IDLE                |                              0.43 |

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 19 may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Table 19. Absolute Maximum Ratings

| Parameter                                 | Rating                    |
|-------------------------------------------|---------------------------|
| Internal (Core) Supply Voltage (V DDINT ) | -0.3 V to +1.43 V         |
| External (I/O) Supply Voltage (V DDEXT )  | -0.3 V to +3.8 V          |
| Input Voltage 1                           | -0.5 V to +3.6 V          |
| Input Voltage 1, 2                        | -0.5 V to +5.5 V          |
| Output Voltage Swing                      | -0.5 V to V DDEXT + 0.5 V |
| Storage Temperature Range                 | -65 ° C to +150 ° C       |
| Junction Temperature While Biased         | +125 ° C                  |

Table 20. Maximum Duty Cycle for Input 1 Transient Voltage

|   V IN Min (V) 2 |   V IN Max(V) 2 | MaximumDutyCycle 3   |
|------------------|-----------------|----------------------|
|             -0.5 |             3.8 | 100%                 |
|             -0.7 |             4   | 40%                  |
|             -0.8 |             4.1 | 25%                  |
|             -0.9 |             4.2 | 15%                  |
|             -1   |             4.3 | 10%                  |

1 Applies to all signal pins with the exception of CLKIN, XTAL, and VROUT1-0.

2 The individual values cannot be combined for analysis of a single instance of overshoot or undershoot. The worst case observed value must fall within one of the voltages specified and the total duration of the overshoot or undershoot (exceeding the 100% case) must be less than or equal to the corresponding duty cycle.

3 Duty cycle refers to the percentage of time the signal exceeds the value for the 100% case. This is equivalent to the measured duration of a single instance of overshoot or undershoot as a percentage of the period of occurrence.

## ESD SENSITIVITY

## ESD  (electrostatic  discharge)  sensitive  device.

<!-- image -->

Charged  devices  and  circuit  boards  can  discharge without detection. Although  this product features patented  or  proprietary  protection  circuitry,  damage may  occur  on  devices  subjected  to  high  energy  ESD. Therefore, proper ESD precautions should be taken to avoid  performance  degradation or loss of functionality.

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## TIMING SPECIFICATIONS

Component specifications are subject to change without notice. All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

## Clock and Reset Timing

Table 21. Clock Input and Reset Timing

| Parameter            |                                                  | Min Max     |            | Unit   |
|----------------------|--------------------------------------------------|-------------|------------|--------|
| Timing Requirement s | Timing Requirement s                             |             |            |        |
| t CKIN               | CLKIN Period 1, 2, 3, 4                          | 20.0        | 100.0      | ns     |
| t CKINL              | CLKIN Low Pulse                                  | 8.0         |            | ns     |
| t CKINH              | CLKIN High Pulse                                 | 8.0         |            | ns     |
| t BUFDLAY            | CLKIN to CLKBUF Delay                            |             | 10         | ns     |
| t WRST               | RESET Asserted Pulse Width Low                   | 11 × t CKIN |            | ns     |
| t NOBOOT             | RESET Deassertion to First External Access Delay | 3 × t CKIN  | 5 × t CKIN | ns     |

Figure 8. Clock and Reset Timing

<!-- image -->

Table 22. Power-Up Reset Timing

| Parameter                     | Min           | Max   | Unit   |
|-------------------------------|---------------|-------|--------|
| Timing Requirement            |               |       |        |
| t RST_IN_PWR RESET Deasserted | 3500 × t CKIN |       | ns     |

.

<!-- image -->

In Figure 9, V DD\_SUPPLIES is V DDINT , V DDEXT , V DDRTC Figure 9. Power-Up Reset Timing

## Asynchronous Memory Read Cycle Timing

Table 23. Asynchronous Memory Read Cycle Timing

| Parameter                  |                              | Min Max   | Unit   |
|----------------------------|------------------------------|-----------|--------|
| Timing Requirements        | Timing Requirements          |           |        |
| t SDAT                     | DATA15-0 Setup Before CLKOUT | 2.1       | ns     |
| t HDAT                     | DATA15-0 Hold After CLKOUT   | 0.8       | ns     |
| t SARDY                    | ARDY Setup Before CLKOUT     | 4.0       | ns     |
| t HARDY                    | ARDY Hold After CLKOUT       | 0.0       | ns     |
| Switching Characteristic s | Switching Characteristic s   |           |        |
| t DO                       | Output Delay After CLKOUT 1  | 6.0       | ns     |
| t HO                       | Output Hold After CLKOUT 1   | 0.8       | ns     |

Figure 10. Asynchronous Memory Read Cycle Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Asynchronous Memory Write Cycle Timing

Table 24. Asynchronous Memory Write Cycle Timing

| Parameter                  | Min                           | Max   | Unit   |
|----------------------------|-------------------------------|-------|--------|
| Timing Requirements        |                               |       |        |
| t SARDY                    | ARDY Setup Before CLKOUT      | 4.0   | ns     |
| t HARDY                    | ARDY Hold After CLKOUT        | 0.0   | ns     |
| Switching Characteristic s | Switching Characteristic s    |       |        |
| t DDAT                     | DATA15-0 Disable After CLKOUT | 6.0   | ns     |
| t ENDAT                    | DATA15-0 Enable After CLKOUT  | 1.0   | ns     |
| t DO                       | Output Delay After CLKOUT 1   | 6.0   | ns     |
| t HO                       | Output Hold After CLKOUT 1    | 0.8   | ns     |

Figure 11. Asynchronous Memory Write Cycle Timing

<!-- image -->

## External Port Bus Request and Grant Cycle Timing

Table 25 and Figure 12 describe external port bus request and bus grant operations.

## Table 25. External Port Bus Request and Grant Cycle Timing

| Parameter 1, 2            |                                                  | Min   | Max   | Unit   |
|---------------------------|--------------------------------------------------|-------|-------|--------|
| Timing Requirements       | Timing Requirements                              |       |       |        |
| t BS                      | BR Asserted to CLKOUT Low Setup                  | 4.6   |       | ns     |
| t BH                      | CLKOUT Low to BR Deasserted Hold Time            | 0.0   |       | ns     |
| Switching Characteristics | Switching Characteristics                        |       |       |        |
| t SD                      | CLKOUT Low to AMSx, Address, and ARE/AWE Disable |       | 4.5   | ns     |
| t SE                      | CLKOUT Low to AMSx, Address, and ARE/AWE Enable  |       | 4.5   | ns     |
| t DBG                     | CLKOUT High to BG Asserted Setup                 |       | 3.6   | ns     |
| t EBG                     | CLKOUT High to BG Deasserted Hold Time           |       | 3.6   | ns     |
| t DBH                     | CLKOUT High to BGH Asserted Setup                |       | 3.6   | ns     |
| t EBH                     | CLKOUT High to BGH Deasserted Hold Time          |       | 3.6   | ns     |

Figure 12. External Port Bus Request and Grant Cycle Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## SDRAM Interface Timing

## Table 26. SDRAM Interface Timing

| Parameter                 |                                                   | Min   | Max   | Unit   |
|---------------------------|---------------------------------------------------|-------|-------|--------|
| Timing Requirement s      | Timing Requirement s                              |       |       |        |
| t SSDAT                   | DATA15-0 Setup Before CLKOUT                      | 1.5   |       | ns     |
| t HSDAT                   | DATA15-0 Hold After CLKOUT                        | 0.8   |       | ns     |
| Switching Characteristics | Switching Characteristics                         |       |       |        |
| t DCAD                    | COMMAND 1 , ADDR19-1, DATA15-0 Delay After CLKOUT |       | 4.0   | ns     |
| t HCAD                    | COMMAND 1 , ADDR19-1, DATA15-0 Hold After CLKOUT  | 1.0   |       | ns     |
| t DSDAT                   | DATA15-0 Disable After CLKOUT                     |       | 6.0   | ns     |
| t ENSDAT                  | DATA15-0 Enable After CLKOUT                      | 0.5   |       | ns     |
| t SCLK 2                  | CLKOUT Period when T J  +105 ° C                 | 7.5   |       | ns     |
| t SCLK 2                  | CLKOUT Period when T J  +105 ° C                 | 10    |       | ns     |
| t SCLKH                   | CLKOUT Width High                                 | 2.5   |       | ns     |
| t SCLKL                   | CLKOUT Width Low                                  | 2.5   |       | ns     |

Figure 13. SDRAM Interface Timing

<!-- image -->

## External DMA Request Timing

Table 27 and Figure 14 describe the external DMA request operations.

Table 27. External DMA Request Timing

| Parameter           |                                           | Min Max       | Unit   |
|---------------------|-------------------------------------------|---------------|--------|
| Timing Requirements | Timing Requirements                       |               |        |
| t DS                | DMARx Asserted to CLKOUT High Setup       | 6.0           | ns     |
| t DH                | CLKOUT High to DMARx Deasserted Hold Time | 0.0           | ns     |
| t DMARACT           | DMARx Active Pulse Width                  | 1.0 × t SCLK  | ns     |
| t DMARINACT         | DMARx Inactive Pulse Width                | 1.75 × t SCLK | ns     |

Figure 14. External DMA Request Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Parallel Peripheral Interface Timing

Table 28 and Figure 15 through Figure 18 describe parallel peripheral interface operations.

## Table 28. Parallel Peripheral Interface Timing

| Parameter                                                   |                                                             | Min   | Max   | Unit   |
|-------------------------------------------------------------|-------------------------------------------------------------|-------|-------|--------|
| Timing Requirements                                         | Timing Requirements                                         |       |       |        |
| t PCLKW                                                     | PPI_CLK Width 1                                             | 6.0   |       | ns     |
| t PCLK                                                      | PPI_CLK Period 1                                            | 15.0  |       | ns     |
| Timing Requirements-GP Input and Frame Capture Modes        | Timing Requirements-GP Input and Frame Capture Modes        |       |       |        |
| t SFSPE                                                     | External Frame Sync Setup Before PPI_CLK                    | 6.7   |       | ns     |
| t HFSPE                                                     | External Frame Sync Hold After PPI_CLK                      | 1.0   |       | ns     |
| t SDRPE                                                     | Receive Data Setup Before PPI_CLK                           | 3.5   |       | ns     |
| t HDRPE                                                     | Receive Data Hold After PPI_CLK                             | 1.5   |       | ns     |
| Switching Characteristics-GP Output and Frame Capture Modes | Switching Characteristics-GP Output and Frame Capture Modes |       |       |        |
| t DFSPE                                                     | Internal Frame Sync Delay After PPI_CLK                     |       | 8.0   | ns     |
| t HOFSPE                                                    | Internal Frame Sync Hold After PPI_CLK                      | 1.7   |       | ns     |
| t DDTPE                                                     | Transmit Data Delay After PPI_CLK                           |       | 8.0   | ns     |
| t HDTPE                                                     | Transmit Data Hold After PPI_CLK                            | 1.8   |       | ns     |

Figure 15. PPI GP Rx Mode with Internal Frame Sync Timing

<!-- image -->

Figure 16. PPI GP Rx Mode with External Frame Sync Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 17. PPI GP Tx Mode with Internal Frame Sync Timing

<!-- image -->

Figure 18. PPI GP Tx Mode with External Frame Sync Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Serial Port Timing

Table 29 through Table 32 and Figure 19 through Figure 22 describe serial port operations.

Table 29. Serial Ports-External Clock

| Parameter                 | Parameter                                                             | Min           | Max   | Unit   |
|---------------------------|-----------------------------------------------------------------------|---------------|-------|--------|
| Timing Requirements       | Timing Requirements                                                   |               |       |        |
| t SFSE                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                | 3.0           |       | ns     |
| t HFSE                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                  | 3.0           |       | ns     |
| t SDRE                    | Receive Data Setup Before RSCLKx 1                                    | 3.0           |       | ns     |
| t HDRE                    | Receive Data Hold After RSCLKx 1                                      | 3.0           |       | ns     |
| t SCLKEW                  | TSCLKx/RSCLKx Width                                                   | 4.5           |       | ns     |
| t SCLKE                   | TSCLKx/RSCLKx Period                                                  | 15.0          |       | ns     |
| t SUDTE                   | Start-Up Delay From SPORT Enable To First External TFSx 2             | 4.0 × t SCLKE |       | ns     |
| t SUDRE                   | Start-Up Delay From SPORT Enable To First External RFSx 2             | 4.0 × t SCLKE |       | ns     |
| Switching Characteristics | Switching Characteristics                                             |               |       |        |
| t DFSE                    | TFSx/RFSx Delay After TSCLKx/RSCLK (Internally Generated TFSx/RFSx) 3 |               | 10.0  | ns     |
| t HOFSE                   | TFSx/RFSx Hold After TSCLKx/RSCLK (Internally Generated TFSx/RFSx) 2  | 0             |       | ns     |
| t DDTE                    | Transmit Data Delay After TSCLKx 2                                    |               | 10.0  | ns     |
| t HDTE                    | Transmit Data Hold After TSCLKx 2                                     | 0             |       | ns     |

## Table 30. Serial Ports-Internal Clock

| Parameter                 | 2.25V V DDEXT < 2.70V or 0.80V  V DDINT < 0.95V 1 Min                 |       |  Max Min   | 2.70V  V DDEXT  3.60V and 0.95 V  V DDINT  1.43 V 2, 3 Max   | Unit   |
|---------------------------|------------------------------------------------------------------------|-------|-------------|------------------------------------------------------------------|--------|
| Timing Requirements       |                                                                        |       |             |                                                                  |        |
| t SFSI                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 4                                 | 8.5   |             | 8.0                                                              | ns     |
| t HFSI                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 4                                   | -1.5  |             | -1.5                                                             | ns     |
| t SDRI                    | Receive Data Setup Before RSCLKx 4                                     | 8.5   |             | 8.0                                                              | ns     |
| t HDRI                    | Receive Data Hold After RSCLKx 4                                       | -1.5  |             | -1.5                                                             | ns     |
| Switching Characteristics | Switching Characteristics                                              |       |             |                                                                  |        |
| t DFSI                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 5 |       | 3.0         | 3.0                                                              | ns     |
| t HOFSI                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 5  |  1.0 |             |  1.0                                                            | ns     |
| t DDTI                    | Transmit Data Delay After TSCLKx 5                                     |       | 3.0         | 3.0                                                              | ns     |
| t HDTI                    | Transmit Data Hold After TSCLKx 5                                      |  1.0 |  1.0       |                                                                  | ns     |
| t SCLKIW                  | TSCLKx/RSCLKx Width                                                    | 4.5   |             | 4.5                                                              | ns     |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 20. Serial Port Start Up with External Clock and Frame Sync

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Table 31. Serial Ports-Enable and Three-State

| Parameter                 | Parameter                                    | Min   | Max   | Unit   |
|---------------------------|----------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                    |       |       |        |
| t DTENE                   | Data Enable Delay from External TSCLKx 1     | 0     |       | ns     |
| t DDTTE                   | Data Disable Delay from External TSCLKx 1, 2 |       | 10.0  | ns     |
| t DTENI                   | Data Enable Delay from Internal TSCLKx 1     | -2.0  |       | ns     |
| t DDTTI                   | Data Disable Delay from Internal TSCLKx 1, 2 |       | 3.0   | ns     |

Figure 21. Enable and Three-State

<!-- image -->

Table 32. External Late Frame Sync

| Parameter                 | Parameter                                                               | Min   | Max   | Unit   |
|---------------------------|-------------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                               |       |       |        |
| t DDTLFSE                 | Data Delay from Late External TFSx or External RFSxwithMCMEN=1,MFD=0 1, |       | 10.0  | ns     |
| t DTENLFS                 | Data Enable from LateFSorMCMEN=1,MFD=0 1, 2                             | 0     |       | ns     |

Figure 22. External Late Frame Sync

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Serial Peripheral Interface Port-Master Timing

Table 33 and Figure 23 describe SPI port master operations.

## Table 33. Serial Peripheral Interface (SPI) Port-Master Timing

| Parameter                 | 2.25V V DDEXT 2.70V or 0.80V  V DDINT  0.95V 1 Min Max   |               | 2.70V  V DDEXT  3.60V and 0.95 V  V DDINT  1.43 V 2, Min Max   | 3 Unit   |
|---------------------------|------------------------------------------------------------|-----------------|--------------------------------------------------------------------|----------|
| Timing Requirements       |                                                            |                 |                                                                    |          |
| t SSPIDM                  | Data Input Valid to SCK Edge (Data Input Setup)            | 8.7             | 7.5                                                                | ns       |
| t HSPIDM                  | SCK Sampling Edge to Data Input Invalid                    | -1.5            | -1.5                                                               | ns       |
| Switching Characteristics | Switching Characteristics                                  |                 |                                                                    |          |
| t SDSCIM                  | SPISELx Low to First SCK Edge                              | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                                                    | ns       |
| t SPICHM                  | Serial Clock High Period                                   | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                                                    | ns       |
| t SPICLM                  | Serial Clock Low Period                                    | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                                                    | ns       |
| t SPICLK                  | Serial Clock Period                                        | 4 × t SCLK -1.5 | 4 × t SCLK -1.5                                                    | ns       |
| t HDSM                    | Last SCK Edge to SPISELx High                              | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                                                    | ns       |
| t SPITDM                  | Sequential Transfer Delay                                  | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                                                    | ns       |
| t DDSPIDM                 | SCK Edge to Data Out Valid (Data Out Delay)                |                 | 6 6                                                                | ns       |
| t HDSPIDM                 | SCK Edge to Data Out Invalid (Data Out Hold)               | -1.0            | -1.0                                                               | ns       |

Figure 23. Serial Peripheral Interface (SPI) Port-Master Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Serial Peripheral Interface Port-Slave Timing

Table 34 and Figure 24 describe SPI port slave operations.

## Table 34. Serial Peripheral Interface (SPI) Port-Slave Timing

Figure 24. Serial Peripheral Interface (SPI) Port-Slave Timing

| Parameter                 |                                                 | Min Max         | Unit   |
|---------------------------|-------------------------------------------------|-----------------|--------|
| Timing Requirements       | Timing Requirements                             |                 |        |
| t SPICHS                  | Serial Clock High Period                        | 2 × t SCLK -1.5 | ns     |
| t SPICLS                  | Serial Clock Low Period                         | 2 × t SCLK -1.5 | ns     |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK      | ns     |
| t HDS                     | Last SCK Edge to SPISS Not Asserted             | 2 × t SCLK -1.5 | ns     |
| t SPITDS                  | Sequential Transfer Delay                       | 2 × t SCLK -1.5 | ns     |
| t SDSCI                   | SPISS Assertion to First SCK Edge               | 2 × t SCLK -1.5 | ns     |
| t SSPID                   | Data Input Valid to SCK Edge (Data Input Setup) | 1.6             | ns     |
| t HSPID                   | SCK Sampling Edge to Data Input Invalid         | 1.6             | ns     |
| Switching Characteristics | Switching Characteristics                       |                 |        |
| t DSOE                    | SPISS Assertion to Data Out Active              | 0 8             | ns     |
| t DSDHI                   | SPISS Deassertion to Data High Impedance        | 0 8             | ns     |
| t DDSPID                  | SCK Edge to Data Out Valid (Data Out Delay)     | 10              | ns     |
| t HDSPID                  | SCK Edge to Data Out Invalid (Data Out Hold)    | 0               | ns     |

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## General-Purpose Port Timing

Table 35 and Figure 25 describe general-purpose port operations.

## Table 35. General-Purpose Port Timing

Figure 25. General-Purpose Port Timing

| Parameter                | Min        | Max   | Unit   |
|--------------------------|------------|-------|--------|
| Timing Requirement       |            |       |        |
| t WFI General-Purpose    | t SCLK + 1 |       | ns     |
| Switching Characteristic |            |       |        |
| t GPOD General-Purpose   | 0          | 6     | ns     |

<!-- image -->

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

For information on the UART port receive and transmit operations, see the ADSP-BF537 Blackfin Processor Hardware Reference .

## Timer Clock Timing

Table 36 and Figure 26 describe timer clock timing.

## Table 36. Timer Clock Timing

Figure 26. Timer Clock Timing

| Parameter                                           | Min   | Max   | Unit   |
|-----------------------------------------------------|-------|-------|--------|
| Switching Characteristic                            |       |       |        |
| t TODP Timer Output Update Delay After PPI_CLK High |       | 12    | ns     |

<!-- image -->

## Timer Cycle Timing

Table 37 and Figure 27 describe timer expired operations. The input signal is asynchronous in width capture mode and external clock mode and has an absolute maximum input frequency of (fSCLK/2) MHz.

## Table 37. Timer Cycle Timing

|                           |                                                          | 2.25V  V DDEXT  2.70V or 0.80V  V DDINT  0.95V 1   | 2.25V  V DDEXT  2.70V or 0.80V  V DDINT  0.95V 1   | 2.70V  V DDEXT  3.60V and 0.95 V  V DDINT  1.43 V 2, 3 Min Max   | 2.70V  V DDEXT  3.60V and 0.95 V  V DDINT  1.43 V 2, 3 Min Max   | Unit   |
|---------------------------|----------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|--------|
| Timing Characteristics    | Timing Characteristics                                   |                                                        |                                                        |                                                                      |                                                                      |        |
| t WL                      | Timer Pulse Width Input Low (Measured In SCLK Cycles) 4  | 1 × t SCLK                                             | 1                                                      | × t SCLK                                                             |                                                                      | ns     |
| t WH                      | Timer Pulse Width Input High (Measured In SCLK Cycles) 4 | 1 × t SCLK                                             | 1 ×                                                    | t SCLK                                                               | ns                                                                   |        |
| t TIS                     | Timer Input Setup Time Before CLKOUT Low 5               | 5.5                                                    | 5.0                                                    |                                                                      | ns                                                                   |        |
| t TIH                     | Timer Input Hold Time After CLKOUT Low 5                 | 1.5                                                    | 1.5                                                    |                                                                      | ns                                                                   |        |
| Switching Characteristics | Switching Characteristics                                |                                                        |                                                        |                                                                      |                                                                      |        |
| t HTO                     | Timer Pulse Width Output (Measured In SCLK Cycles)       | 1 × t SCLK                                             | (2 32 -1) × t SCLK                                     | 1 × t SCLK                                                           | (2 32 -1) × t SCLK                                                   | ns     |
| t TOD                     | Timer Output Update Delay After CLKOUT High              |                                                        | 6.5                                                    |                                                                      | 6.0                                                                  | ns     |

Figure 27. Timer Cycle Timing

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## JTAG Test and Emulation Port Timing

Table 38 and Figure 28 describe JTAG port operations.

## Table 38. JTAG Port Timing

| Parameter                 |                                             | Min   | Max   | Unit   |
|---------------------------|---------------------------------------------|-------|-------|--------|
| Timing Parameters         | Timing Parameters                           |       |       |        |
| t TCK                     | TCK Period                                  | 20    |       | ns     |
| t STAP                    | TDI, TMS Setup Before TCK High              | 4     |       | ns     |
| t HTAP                    | TDI, TMS Hold After TCK High                | 4     |       | ns     |
| t SSYS                    | System Inputs Setup Before TCK High 1       | 4     |       | ns     |
| t HSYS                    | System Inputs Hold After TCK High 1         | 5     |       | ns     |
| t TRSTW                   | TRST Pulse Width 2 (Measured in TCK Cycles) | 4     |       | TCK    |
| Switching Characteristics | Switching Characteristics                   |       |       |        |
| t DTDO                    | TDO Delay From TCK Low                      |       | 10    | ns     |
| t DSYS                    | System Outputs Delay After TCK Low 3        | 0     | 12    | ns     |

Figure 28. JTAG Port Timing

<!-- image -->

## 10/100 Ethernet MAC Controller Timing

Table 39 through Table 44 and Figure 29 through Figure 34 describe the 10/100 Ethernet MAC controller operations. This feature is only available on the ADSP-BF536 and ADSP-BF537 processors.

Table 39. 10/100 Ethernet MAC Controller Timing: MII Receive Signal

| Parameter 1   |                                                       | Min            | Max              | Unit   |
|---------------|-------------------------------------------------------|----------------|------------------|--------|
| f ERXCLK      | ERxCLK Frequency (f SCLK = SCLK Frequency)            | None           | 25+1% f SCLK +1% | MHz    |
| t ERXCLKW     | ERxCLK Width (t ERxCLK = ERxCLK Period)               | t ERxCLK × 35% | t ERxCLK × 65%   | ns     |
| t ERXCLKIS    | Rx Input Valid to ERxCLK Rising Edge (Data In Setup)  | 7.5            |                  | ns     |
| t ERXCLKIH    | ERxCLK Rising Edge to Rx Input Invalid (Data In Hold) | 7.5            |                  | ns     |

## Table 40. 10/100 Ethernet MAC Controller Timing: MII Transmit Signal

| Parameter 1   |                                                         | Min            | Max              | Unit   |
|---------------|---------------------------------------------------------|----------------|------------------|--------|
| f ETXCLK      | ETxCLK Frequency (f SCLK = SCLK Frequency)              | None           | 25+1% f SCLK +1% | MHz    |
| t ETXCLKW     | ETxCLK Width (t ETXCLK = ETxCLK Period)                 | t ETxCLK × 35% | t ETxCLK × 65%   | ns     |
| t ETXCLKOV    | ETxCLK Rising Edge to Tx Output Valid (Data Out Valid)  |                | 20               | ns     |
| t ETXCLKOH    | ETxCLK Rising Edge to Tx Output Invalid (Data Out Hold) | 0              |                  | ns     |

## Table 41. 10/100 Ethernet MAC Controller Timing: RMII Receive Signal

| Parameter 1   |                                                             | Min            | Max                  | Unit   |
|---------------|-------------------------------------------------------------|----------------|----------------------|--------|
| f REFCLK      | REF_CLK Frequency (f SCLK = SCLK Frequency)                 | None           | 50+1% 2 × f SCLK +1% | MHz    |
| t REFCLKW     | REF_CLK Width (t REFCLK = REFCLK Period)                    | t REFCLK × 35% | t REFCLK × 65%       | ns     |
| t REFCLKIS    | Rx Input Valid to RMII REF_CLK Rising Edge (Data In Setup)  | 4              |                      | ns     |
| t REFCLKIH    | RMII REF_CLK Rising Edge to Rx Input Invalid (Data In Hold) | 2              |                      | ns     |

## Table 42. 10/100 Ethernet MAC Controller Timing: RMII Transmit Signal

| Parameter 1   |                                                               | Min   | Unit   |
|---------------|---------------------------------------------------------------|-------|--------|
| t REFCLKOV    | RMII REF_CLK Rising Edge to Tx Output Valid (Data Out Valid)  |       | ns     |
| t REFCLKOH    | RMII REF_CLK Rising Edge to Tx Output Invalid (Data Out Hold) | 2     | ns     |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## Table 43. 10/100 Ethernet MAC Controller Timing: MII/RMII Asynchronous Signal

| Parameter 1, 2   |                      | Min                           | Max   | Unit   |
|------------------|----------------------|-------------------------------|-------|--------|
| t ECOLH          | COL Pulse Width High | t ETxCLK × 1.5 t ERxCLK × 1.5 |       | ns ns  |
| t ECOLL          | COL Pulse Width Low  | t ETxCLK × 1.5 t ERxCLK × 1.5 |       | ns ns  |
| t ECRSH          | CRS Pulse Width High | t ETxCLK × 1.5                |       | ns     |
| t ECRSL          | CRS Pulse Width Low  | t ETxCLK × 1.5                |       | ns     |

## Table 44. 10/100 Ethernet MAC Controller Timing: MII Station Management

| Parameter 1   |                                               |   Min | Max   | Unit   |
|---------------|-----------------------------------------------|-------|-------|--------|
| t MDIOS       | MDIO Input Valid to MDCRising Edge (Setup)    |    10 |       | ns     |
| t MDCIH       | MDCRising Edge to MDIO Input Invalid (Hold)   |    10 |       | ns     |
| t MDCOV       | MDCFalling Edge to MDIO Output Valid          |    25 |       | ns     |
| t MDCOH       | MDCFalling Edge to MDIO Output Invalid (Hold) |    -1 |       | ns     |

Figure 29. 10/100 Ethernet MAC Controller Timing: MII Receive Signal

<!-- image -->

Figure 30. 10/100 Ethernet MAC Controller Timing: MII Transmit Signal

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

<!-- image -->

Figure 31. 10/100 Ethernet MAC Controller Timing: RMII Receive Signal

<!-- image -->

Figure 32. 10/100 Ethernet MAC Controller Timing: RMII Transmit Signal

Figure 33. 10/100 Ethernet MAC Controller Timing: Asynchronous Signal

<!-- image -->

Figure 34. 10/100 Ethernet MAC Controller Timing: MII Station Management

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## OUTPUT DRIVE CURRENTS

Figure 35 through Figure 46 show typical current-voltage characteristics for the output drivers of the processors. The curves represent the current drive capability of the output drivers as a function of output voltage. See Table 9 for information about which driver type corresponds to a particular pin.

<!-- image -->

Figure 35. Drive Current A (Low VDDEXT )

<!-- image -->

Figure 36. Drive Current A (High VDDEXT )

<!-- image -->

Figure 37. Drive Current B (Low VDDEXT )

<!-- image -->

Figure 38. Drive Current B (High VDDEXT )

Figure 39. Drive Current C (Low VDDEXT)

<!-- image -->

Figure 40. Drive Current C (High VDDEXT )

<!-- image -->

SOURCE CURRENT (mA)

SOURCE CURRENT (mA)

SOURCE CURRENT (mA)

100

80

60

40

20

0

-20

-40

-60

-80

150

100

50

0

-50

-100

-150

50

40

30

20

10

0

-10

-20

-30

-40

-50

0

0

0

0.5

1.0

1.5

2.0

2.5

0.5

1.0

V DDEXT

V DDEXT

V DDEXT

1.5

2.0

SOURCE VOLTAGE (V)

Figure 41. Drive Current D (Low VDDEXT)

V DDEXT

V DDEXT

## ADSP-BF534/ADSP-BF536/ADSP-BF537

= 2.25V @ 95°C

= 2.50V @ 25°C

= 2.75V @ -40°C

V OH

V OL

2.5

= 3.0V @ 95°C

= 3.3V @ 25°C

V DDEXT

= 3.6V @ -40°C

V OH

V OL

3.0

SOURCE VOLTAGE (V)

Figure 42. Drive Current D (High VDDEXT )

V DDEXT

= 2.25V @ 95°C

V DDEXT

V DDEXT

1.5

0.5

1.0

2.0

SOURCE VOLTAGE (V)

Figure 43. Drive Current E (Low VDDEXT)

= 2.50V @ 25°C

= 2.75V @ -40°C

V OH

V OL

3.5

Figure 44. Drive Current E (High V DDEXT )

<!-- image -->

0

-10

-20

-30

-40

-50

-60

0

-10

-20

-30

-40

-50

-60

-70

-80

2.5

3.0

4.0

3.0

SOURCE CURRENT (mA)

SOURCE CURRENT (mA)

0

0

0.5

1.0

1.5

2.0

2.5

0.5

1.0

V DDEXT

V DDEXT

= 2.25V @ 95°C

= 2.50V @ 25°C

V DDEXT

= 2.75V @ -40°C

V OL

1.5

2.0

SOURCE VOLTAGE (V)

Figure 45. Drive Current F (Low VDDEXT )

V DDEXT

V DDEXT

2.5

= 3.0V @ 95°C

= 3.3V @ 25°C

V DDEXT

= 3.6V @ -40°C

V OL

3.0

SOURCE VOLTAGE (V)

Figure 46. Drive Current F (High VDDEXT )

3.5

3.0

4.0

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 47 shows the measurement point for ac measurements (other than output enable/disable). The measurement point is VMEAS = VDDEXT/2.

Figure 47. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high impedance state to the point when they start driving. The output enable time t ENA is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving as shown in the Output Enable/Disable diagram (Figure 48). The time tENA\_MEA-SURED is the interval from when the reference signal switches to when the output voltage reaches 2.0 V (output high) or 1.0 V (output low). Time tTRIP is the interval from when the output starts driving to when the output reaches the 1.0 V or 2.0 V trip voltage. Time tENA is calculated as shown in the equation:

<!-- formula-not-decoded -->

If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving.

## Output Disable Time

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The time for the voltage on the bus to decay by  V is dependent on the capacitive load, CL, and the load current, IL. This decay time can be approximated by the equation:

<!-- formula-not-decoded -->

The output disable time tDIS is the difference between t DIS\_MEA-SURED and t DECAY as shown in Figure 48. The time tDIS\_MEASURED is the interval from when the reference signal switches to when the output voltage decays  V from the measured output-high or output-low voltage. The time tDECAY is calculated with the test loads CL and IL, and with  V equal to 0.5 V.

Figure 48. Output Enable/Disable

<!-- image -->

## Example System Hold Time Calculation

To determine the data output hold time in a particular system, first calculate tDECAY using the equation given above. Choose  V to be the difference between the processor's output voltage and the input threshold for the device requiring the hold time. A typical  V is 0.4 V. C L is the total bus capacitance (per data line), and IL is the total leakage or three-state current (per data line). The hold time is tDECAY plus the minimum disable time (for example, tDSDAT for an SDRAM write cycle).

## Capacitive Loading

Output delays and holds are based on standard capacitive loads: 30 pF on all pins (see Figure 49). Figure 50 through Figure 61 show how output rise time varies with capacitance. The delay and hold specifications given should be derated by a factor derived from these figures. The graphs in these figures may not be linear outside the ranges shown.

<!-- image -->

## NOTES:

THE WORST CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFLECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD) IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, A SYSTEM MAY INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 49. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 50. Typical Output Delay or Hold for Driver A at V DDEXT Min

<!-- image -->

Figure 51. Typical Output Delay or Hold for Driver A at VDDEXT Max

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

<!-- image -->

Figure 52. Typical Output Delay or Hold for Driver B at V DDEXT Min

<!-- image -->

Figure 53. Typical Output Delay or Hold for Driver B at VDDEXT Max

<!-- image -->

Figure 54. Typical Output Delay or Hold for Driver C at V DDEXT Min

<!-- image -->

Figure 55. Typical Output Delay or Hold for Driver C at VDDEXT Max

Figure 56. Typical Output Delay or Hold for Driver D at V DDEXT Min

<!-- image -->

Figure 57. Typical Output Delay or Hold for Driver D at VDDEXT Max

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 58. Typical Output Delay or Hold for Driver E at V DDEXT Min

<!-- image -->

<!-- image -->

Figure 59. Typical Output Delay or Hold for Driver E at VDDEXT Max

<!-- image -->

Figure 60. Typical Output Delay or Hold for Driver F at V DDEXT Min

Figure 61. Typical Output Delay or Hold for Driver F at VDDEXT Max

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## THERMAL CHARACTERISTICS

To determine the junction temperature on the application printed circuit board use:

<!-- formula-not-decoded -->

where:

TJ = Junction temperature (°C)

TCASE = Case temperature (°C) measured by customer at top center of package.

 JT = From Table 45

PD = Power dissipation (see the power dissipation discussion and the tables on Page 27 for the method to calculate PD).

Values of  JA are provided for package comparison and printed circuit board design considerations.  JA can be used for a first order approximation of TJ by the equation:

<!-- formula-not-decoded -->

where:

TA = Ambient temperature (°C)

Values of  JC are provided for package comparison and printed circuit board design considerations when an external heat sink is required. Values of  JB are provided for package comparison and printed circuit board design considerations.

In Table 45 through Table 47, airflow measurements comply with JEDEC standards JESD51-2 and JESD51-6, and the junction-to-board measurement complies with JESD51-8. Test board and thermal via design comply with JEDEC standards JESD51-9 (BGA). The junction-to-case measurement complies with MIL-STD-883 (Method 1012.1). All measurements use a 2S2P JEDEC test board.

Industrial applications using the 208-ball BGA package require thermal vias, to an embedded ground plane, in the PCB. Refer to JEDEC standard JESD51-9 for printed circuit board thermal ball land and thermal via design information.

Table 45. Thermal Characteristics (182-Ball BGA)

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     32.8  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     29.3  | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     28    | ° C/W  |
|  JB        |                      |     20.1  | ° C/W  |
|  JC        |                      |      7.92 | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.19 | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.35 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      0.45 | ° C/W  |

Table 46. Thermal Characteristics (208-Ball BGA without Thermal Vias in PCB)

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     23.3  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     20.2  | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     19.2  | ° C/W  |
|  JB        |                      |     13.05 | ° C/W  |
|  JC        |                      |      6.92 | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.18 | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.27 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      0.32 | ° C/W  |

Table 47. Thermal Characteristics (208-Ball BGA with Thermal Vias in PCB)

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     22.6  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     19.4  | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     18.4  | ° C/W  |
|  JB        |                      |     13.2  | ° C/W  |
|  JC        |                      |      6.85 | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.16 | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.27 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      0.32 | ° C/W  |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## 182-BALL CSP\_BGA BALL ASSIGNMENT

Table 48 lists the CSP\_BGA ball assignment by signal mnemonic. Table 49 lists the CSP\_BGA ball assignment by ball number.

Table 48. 182-Ball CSP\_BGA Ball Assignment (Alphabetically by Signal Mnemonic)

| Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   |
|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|
| ABE0       | H13        | CLKOUT     | B14        | GND        | L6         | PG8        | E3         | SRAS       | D13        |
| ABE1       | H12        | DATA0      | M9         | GND        | L8         | PG9        | E4         | SWE        | D12        |
| ADDR1      | J14        | DATA1      | N9         | GND        | L10        | PH0        | C2         | TCK        | P2         |
| ADDR10     | M13        | DATA10     | N6         | GND        | M4         | PH1        | C3         | TDI        | M3         |
| ADDR11     | M14        | DATA11     | P6         | GND        | M10        | PH10       | B6         | TDO        | N3         |
| ADDR12     | N14        | DATA12     | M5         | GND        | P14        | PH11       | A2         | TMS        | N2         |
| ADDR13     | N13        | DATA13     | N5         | NMI        | B10        | PH12       | A3         | TRST       | N1         |
| ADDR14     | N12        | DATA14     | P5         | PF0        | M1         | PH13       | A4         | V DDEXT    | A1         |
| ADDR15     | M11        | DATA15     | P4         | PF1        | L1         | PH14       | A5         | V DDEXT    | C12        |
| ADDR16     | N11        | DATA2      | P9         | PF10       | J2         | PH15       | A6         | V DDEXT    | E6         |
| ADDR17     | P13        | DATA3      | M8         | PF11       | J3         | PH2        | C4         | V DDEXT    | E11        |
| ADDR18     | P12        | DATA4      | N8         | PF12       | H1         | PH3        | C5         | V DDEXT    | F4         |
| ADDR19     | P11        | DATA5      | P8         | PF13       | H2         | PH4        | C6         | V DDEXT    | F12        |
| ADDR2      | K14        | DATA6      | M7         | PF14       | H3         | PH5        | B1         | V DDEXT    | H5         |
| ADDR3      | L14        | DATA7      | N7         | PF15       | H4         | PH6        | B2         | V DDEXT    | H10        |
| ADDR4      | J13        | DATA8      | P7         | PF2        | L2         | PH7        | B3         | V DDEXT    | J11        |
| ADDR5      | K13        | DATA9      | M6         | PF3        | L3         | PH8        | B4         | V DDEXT    | J12        |
| ADDR6      | L13        | EMU        | M2         | PF4        | L4         | PH9        | B5         | V DDEXT    | K7         |
| ADDR7      | K12        | GND        | A10        | PF5        | K1         | PJ0        | C7         | V DDEXT    | K9         |
| ADDR8      | L12        | GND        | A14        | PF6        | K2         | PJ1        | B7         | V DDEXT    | L7         |
| ADDR9      | M12        | GND        | D4         | PF7        | K3         | PJ10       | D10        | V DDEXT    | L9         |
| AMS0       | E14        | GND        | E7         | PF8        | K4         | PJ11       | D11        | V DDEXT    | L11        |
| AMS1       | F14        | GND        | E9         | PF9        | J1         | PJ2        | B11        | V DDEXT    | P1         |
| AMS2       | F13        | GND        | F5         | PG0        | G1         | PJ3        | C11        | V DDINT    | E5         |
| AMS3       | G12        | GND        | F6         | PG1        | G2         | PJ4        | D7         | V DDINT    | E8         |
| AOE        | G13        | GND        | F10        | PG10       | D1         | PJ5        | D8         | V DDINT    | E10        |
| ARDY       | E13        | GND        | F11        | PG11       | D2         | PJ6        | C8         | V DDINT    | G10        |
| ARE        | G14        | GND        | G4         | PG12       | D3         | PJ7        | B8         | V DDINT    | K5         |
| AWE        | H14        | GND        | G5         | PG13       | D5         | PJ8        | D9         | V DDINT    | K8         |
| BG         | P10        | GND        | G11        | PG14       | D6         | PJ9        | C9         | V DDINT    | K10        |
| BGH        | N10        | GND        | H11        | PG15       | C1         | RESET      | C10        | V DDRTC    | B9         |
| BMODE0     | N4         | GND        | J4         | PG2        | G3         | RTXO       | A8         | VROUT0     | A13        |
| BMODE1     | P3         | GND        | J5         | PG3        | F1         | RTXI       | A9         | VROUT1     | B12        |
| BMODE2     | L5         | GND        | J9         | PG4        | F2         | SA10       | E12        | XTAL       | A11        |
| BR         | D14        | GND        | J10        | PG5        | F3         | SCAS       | C14        |            |            |
| CLKBUF     | A7         | GND        | K6         | PG6        | E1         | SCKE       | B13        |            |            |
| CLKIN      | A12        | GND        | K11        | PG7        | E2         | SMS        | C13        |            |            |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Table 49. 182-Ball CSP\_BGA Ball Assignment (Numerically by Ball Number)

| Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   |
|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|
| A1         | V DDEXT    | C10        | RESET      | F5         | GND        | J14        | ADDR1      | M9         | DATA0      |
| A2         | PH11       | C11        | PJ3        | F6         | GND        | K1         | PF5        | M10        | GND        |
| A3         | PH12       | C12        | V DDEXT    | F10        | GND        | K2         | PF6        | M11        | ADDR15     |
| A4         | PH13       | C13        | SMS        | F11        | GND        | K3         | PF7        | M12        | ADDR9      |
| A5         | PH14       | C14        | SCAS       | F12        | V DDEXT    | K4         | PF8        | M13        | ADDR10     |
| A6         | PH15       | D1         | PG10       | F13        | AMS2       | K5         | V DDINT    | M14        | ADDR11     |
| A7         | CLKBUF     | D2         | PG11       | F14        | AMS1       | K6         | GND        | N1         | TRST       |
| A8         | RTXO       | D3         | PG12       | G1         | PG0        | K7         | V DDEXT    | N2         | TMS        |
| A9         | RTXI       | D4         | GND        | G2         | PG1        | K8         | V DDINT    | N3         | TDO        |
| A10        | GND        | D5         | PG13       | G3         | PG2        | K9         | V DDEXT    | N4         | BMODE0     |
| A11        | XTAL       | D6         | PG14       | G4         | GND        | K10        | V DDINT    | N5         | DATA13     |
| A12        | CLKIN      | D7         | PJ4        | G5         | GND        | K11        | GND        | N6         | DATA10     |
| A13        | VROUT0     | D8         | PJ5        | G10        | V DDINT    | K12        | ADDR7      | N7         | DATA7      |
| A14        | GND        | D9         | PJ8        | G11        | GND        | K13        | ADDR5      | N8         | DATA4      |
| B1         | PH5        | D10        | PJ10       | G12        | AMS3       | K14        | ADDR2      | N9         | DATA1      |
| B2         | PH6        | D11        | PJ11       | G13        | AOE        | L1         | PF1        | N10        | BGH        |
| B3         | PH7        | D12        | SWE        | G14        | ARE        | L2         | PF2        | N11        | ADDR16     |
| B4         | PH8        | D13        | SRAS       | H1         | PF12       | L3         | PF3        | N12        | ADDR14     |
| B5         | PH9        | D14        | BR         | H2         | PF13       | L4         | PF4        | N13        | ADDR13     |
| B6         | PH10       | E1         | PG6        | H3         | PF14       | L5         | BMODE2     | N14        | ADDR12     |
| B7         | PJ1        | E2         | PG7        | H4         | PF15       | L6         | GND        | P1         | V DDEXT    |
| B8         | PJ7        | E3         | PG8        | H5         | V DDEXT    | L7         | V DDEXT    | P2         | TCK        |
| B9         | V DDRTC    | E4         | PG9        | H10        | V DDEXT    | L8         | GND        | P3         | BMODE1     |
| B10        | NMI        | E5         | V DDINT    | H11        | GND        | L9         | V DDEXT    | P4         | DATA15     |
| B11        | PJ2        | E6         | V DDEXT    | H12        | ABE1       | L10        | GND        | P5         | DATA14     |
| B12        | VROUT1     | E7         | GND        | H13        | ABE0       | L11        | V DDEXT    | P6         | DATA11     |
| B13        | SCKE       | E8         | V DDINT    | H14        | AWE        | L12        | ADDR8      | P7         | DATA8      |
| B14        | CLKOUT     | E9         | GND        | J1         | PF9        | L13        | ADDR6      | P8         | DATA5      |
| C1         | PG15       | E10        | V DDINT    | J2         | PF10       | L14        | ADDR3      | P9         | DATA2      |
| C2         | PH0        | E11        | V DDEXT    | J3         | PF11       | M1         | PF0        | P10        | BG         |
| C3         | PH1        | E12        | SA10       | J4         | GND        | M2         | EMU        | P11        | ADDR19     |
| C4         | PH2        | E13        | ARDY       | J5         | GND        | M3         | TDI        | P12        | ADDR18     |
| C5         | PH3        | E14        | AMS0       | J9         | GND        | M4         | GND        | P13        | ADDR17     |
| C6         | PH4        | F1         | PG3        | J10        | GND        | M5         | DATA12     | P14        | GND        |
| C7         | PJ0        | F2         | PG4        | J11        | V DDEXT    | M6         | DATA9      |            |            |
| C8         | PJ6        | F3         | PG5        | J12        | V DDEXT    | M7         | DATA6      |            |            |
| C9         | PJ9        | F4         | V DDEXT    | J13        | ADDR4      | M8         | DATA3      |            |            |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 62 shows the top view of the CSP\_BGA ball configuration. Figure 63 shows the bottom view of the CSP\_BGA ball configuration.

Figure 63. 182-Ball CSP\_BGA Configuration (Bottom View)

<!-- image -->

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## 208-BALL CSP\_BGA BALL ASSIGNMENT

Table 50 lists the CSP\_BGA ball assignment by signal mnemonic. Table 51 lists the CSP\_BGA ball assignment by ball number.

Table 50. 208-Ball CSP\_BGA Ball Assignment (Alphabetically by Signal Mnemonic)

| Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   |
|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|
| ABE0       | P19        | DATA12     | Y4         | GND        | M13        | PG6        | E2         | TDI        | V1         |
| ABE1       | P20        | DATA13     | W4         | GND        | N9         | PG7        | D1         | TDO        | Y2         |
| ADDR1      | R19        | DATA14     | Y3         | GND        | N10        | PG8        | D2         | TMS        | U2         |
| ADDR10     | W18        | DATA15     | W3         | GND        | N11        | PG9        | C1         | TRST       | U1         |
| ADDR11     | Y18        | DATA2      | Y9         | GND        | N12        | PH0        | B4         | V DDEXT    | G7         |
| ADDR12     | W17        | DATA3      | W9         | GND        | N13        | PH1        | A5         | V DDEXT    | G8         |
| ADDR13     | Y17        | DATA4      | Y8         | GND        | P11        | PH10       | B9         | V DDEXT    | G9         |
| ADDR14     | W16        | DATA5      | W8         | GND        | V2         | PH11       | A10        | V DDEXT    | G10        |
| ADDR15     | Y16        | DATA6      | Y7         | GND        | W2         | PH12       | B10        | V DDEXT    | H7         |
| ADDR16     | W15        | DATA7      | W7         | GND        | W19        | PH13       | A11        | V DDEXT    | H8         |
| ADDR17     | Y15        | DATA8      | Y6         | GND        | Y1         | PH14       | B11        | V DDEXT    | J7         |
| ADDR18     | W14        | DATA9      | W6         | GND        | Y13        | PH15       | A12        | V DDEXT    | J8         |
| ADDR19     | Y14        | EMU        | T1         | GND        | Y20        | PH2        | B5         | V DDEXT    | K7         |
| ADDR2      | T20        | GND        | A1         | NMI        | C20        | PH3        | A6         | V DDEXT    | K8         |
| ADDR3      | T19        | GND        | A13        | PF0        | T2         | PH4        | B6         | V DDEXT    | L7         |
| ADDR4      | U20        | GND        | A20        | PF1        | R1         | PH5        | A7         | V DDEXT    | L8         |
| ADDR5      | U19        | GND        | B2         | PF10       | L2         | PH6        | B7         | V DDEXT    | M7         |
| ADDR6      | V20        | GND        | G11        | PF11       | K1         | PH7        | A8         | V DDEXT    | M8         |
| ADDR7      | V19        | GND        | H9         | PF12       | K2         | PH8        | B8         | V DDEXT    | N7         |
| ADDR8      | W20        | GND        | H10        | PF13       | J1         | PH9        | A9         | V DDEXT    | N8         |
| ADDR9      | Y19        | GND        | H11        | PF14       | J2         | PJ0        | B12        | V DDEXT    | P7         |
| AMS0       | M20        | GND        | H12        | PF15       | H1         | PJ1        | B13        | V DDEXT    | P8         |
| AMS1       | M19        | GND        | H13        | PF2        | R2         | PJ10       | B19        | V DDEXT    | P9         |
| AMS2       | G20        | GND        | J9         | PF3        | P1         | PJ11       | C19        | V DDEXT    | P10        |
| AMS3       | G19        | GND        | J10        | PF4        | P2         | PJ2        | D19        | V DDINT    | G12        |
| AOE        | N20        | GND        | J11        | PF5        | N1         | PJ3        | E19        | V DDINT    | G13        |
| ARDY       | J19        | GND        | J12        | PF6        | N2         | PJ4        | B18        | V DDINT    | G14        |
| ARE        | N19        | GND        | J13        | PF7        | M1         | PJ5        | A19        | V DDINT    | H14        |
| AWE        | R20        | GND        | K9         | PF8        | M2         | PJ6        | B15        | V DDINT    | J14        |
| BG         | Y11        | GND        | K10        | PF9        | L1         | PJ7        | B16        | V DDINT    | K14        |
| BGH        | Y12        | GND        | K11        | PG0        | H2         | PJ8        | B17        | V DDINT    | L14        |
| BMODE0     | W13        | GND        | K12        | PG1        | G1         | PJ9        | B20        | V DDINT    | M14        |
| BMODE1     | W12        | GND        | K13        | PG10       | C2         | RESET      | D20        | V DDINT    | N14        |
| BMODE2     | W11        | GND        | L9         | PG11       | B1         | RTXO       | A15        | V DDINT    | P12        |
| BR         | F19        | GND        | L10        | PG12       | A2         | RTXI       | A14        | V DDINT    | P13        |
| CLKBUF     | B14        | GND        | L11        | PG13       | A3         | SA10       | L20        | V DDINT    | P14        |
| CLKIN      | A18        | GND        | L12        | PG14       | B3         | SCAS       | K20        | V DDRTC    | A16        |
| CLKOUT     | H19        | GND        | L13        |            | A4         | SCKE       | H20        | VROUT0     | E20        |
| DATA0      | Y10        | GND        | M9         | PG15 PG2   | G2         | SMS        | J20        | VROUT1     | F20        |
| DATA1      | W10        | GND        | M10        |            |            | SRAS       |            | XTAL       | A17        |
| DATA10     | Y5         | GND        | M11        | PG3 PG4    | F1 F2      | SWE        | K19 L19    |            |            |
| DATA11     | W5         | GND        | M12        | PG5        | E1         | TCK        | W1         |            |            |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Table 51. 208-Ball CSP\_BGA Ball Assignment (Numerically by Ball Number)

| Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   | Ball No.   | Mnemonic   |
|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|
| A1         | GND        | C19        | PJ11       | J9         | GND        | M19        | AMS1       | W1         | TCK        |
| A2         | PG12       | C20        | NMI        | J10        | GND        | M20        | AMS0       | W2         | GND        |
| A3         | PG13       | D1         | PG7        | J11        | GND        | N1         | PF5        | W3         | DATA15     |
| A4         | PG15       | D2         | PG8        | J12        | GND        | N2         | PF6        | W4         | DATA13     |
| A5         | PH1        | D19        | PJ2        | J13        | GND        | N7         | V DDEXT    | W5         | DATA11     |
| A6         | PH3        | D20        | RESET      | J14        | V DDINT    | N8         | V DDEXT    | W6         | DATA9      |
| A7         | PH5        | E1         | PG5        | J19        | ARDY       | N9         | GND        | W7         | DATA7      |
| A8         | PH7        | E2         | PG6        | J20        | SMS        | N10        | GND        | W8         | DATA5      |
| A9         | PH9        | E19        | PJ3        | K1         | PF11       | N11        | GND        | W9         | DATA3      |
| A10        | PH11       | E20        | VROUT0     | K2         | PF12       | N12        | GND        | W10        | DATA1      |
| A11        | PH13       | F1         | PG3        | K7         | V DDEXT    | N13        | GND        | W11        | BMODE2     |
| A12        | PH15       | F2         | PG4        | K8         | V DDEXT    | N14        | V DDINT    | W12        | BMODE1     |
| A13        | GND        | F19        | BR         | K9         | GND        | N19        | ARE        | W13        | BMODE0     |
| A14        | RTXI       | F20        | VROUT1     | K10        | GND        | N20        | AOE        | W14        | ADDR18     |
| A15        | RTXO       | G1         | PG1        | K11        | GND        | P1         | PF3        | W15        | ADDR16     |
| A16        | V DDRTC    | G2         | PG2        | K12        | GND        | P2         | PF4        | W16        | ADDR14     |
| A17        | XTAL       | G7         | V DDEXT    | K13        | GND        | P7         | V DDEXT    | W17        | ADDR12     |
| A18        | CLKIN      | G8         | V DDEXT    | K14        | V DDINT    | P8         | V DDEXT    | W18        | ADDR10     |
| A19        | PJ5        | G9         | V DDEXT    | K19        | SRAS       | P9         | V DDEXT    | W19        | GND        |
| A20        | GND        | G10        | V DDEXT    | K20        | SCAS       | P10        | V DDEXT    | W20        | ADDR8      |
| B1         | PG11       | G11        | GND        | L1         | PF9        | P11        | GND        | Y1         | GND        |
| B2         | GND        | G12        | V DDINT    | L2         | PF10       | P12        | V DDINT    | Y2         | TDO        |
| B3         | PG14       | G13        | V DDINT    | L7         | V DDEXT    | P13        | V DDINT    | Y3         | DATA14     |
| B4         | PH0        | G14        | V DDINT    | L8         | V DDEXT    | P14        | V DDINT    | Y4         | DATA12     |
| B5         | PH2        | G19        | AMS3       | L9         | GND        | P19        | ABE0       | Y5         | DATA10     |
| B6         | PH4        | G20        | AMS2       | L10        | GND        | P20        | ABE1       | Y6         | DATA8      |
| B7         | PH6        | H1         | PF15       | L11        | GND        | R1         | PF1        | Y7         | DATA6      |
| B8         | PH8        | H2         | PG0        | L12        | GND        | R2         | PF2        | Y8         | DATA4      |
| B9         | PH10       | H7         | V DDEXT    | L13        | GND        | R19        | ADDR1      | Y9         | DATA2      |
| B10        | PH12       | H8         | V DDEXT    | L14        | V DDINT    | R20        | AWE        | Y10        | DATA0      |
| B11        | PH14       | H9         | GND        | L19        | SWE        | T1         | EMU        | Y11        | BG         |
| B12        | PJ0        | H10        | GND        | L20        | SA10       | T2         | PF0        | Y12        | BGH        |
| B13        | PJ1        | H11        | GND        | M1         | PF7        | T19        | ADDR3      | Y13        | GND        |
| B14        | CLKBUF     | H12        | GND        | M2         | PF8        | T20        | ADDR2      | Y14        | ADDR19     |
| B15        | PJ6        | H13        | GND        | M7         | V DDEXT    | U1         | TRST       | Y15        | ADDR17     |
| B16        | PJ7        | H14        | V DDINT    | M8         | V DDEXT    | U2         | TMS        | Y16        | ADDR15     |
| B17        | PJ8        | H19        | CLKOUT     | M9         | GND        | U19        | ADDR5      | Y17        | ADDR13     |
| B18        | PJ4        | H20        | SCKE       | M10        | GND        | U20        | ADDR4      | Y18        | ADDR11     |
| B19        | PJ10       | J1         | PF13       | M11        | GND        | V1         | TDI        | Y19        | ADDR9      |
| B20        | PJ9        | J2 J7      | PF14       | M12        | GND        | V2         | GND        | Y20        | GND        |
| C1         | PG9        |            | V DDEXT    | M13        | GND        | V19        | ADDR7      |            |            |
| C2         | PG10       | J8         | V DDEXT    | M14        | V DDINT    | V20        | ADDR6      |            |            |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

Figure 64 shows the top view of the CSP\_BGA ball configuration. Figure 65 shows the bottom view of the CSP\_BGA ball configuration.

Figure 64. 208-Ball CSP\_BGA Configuration (Top View)

<!-- image -->

Figure 65. 208-Ball CSP\_BGA Configuration (Bottom View)

<!-- image -->

## OUTLINE DIMENSIONS

Dimensions in Figure 66 and Figure 67 are shown in millimeters.

<!-- image -->

COMPLIANT WITH JEDEC STANDARDS MO-275-GGAA-1.

182-Ball Chip Scale Package Ball Grid Array [CSP\_BGA]

Figure 66. (BC-182)

Dimensions shown in millimeters

<!-- image -->

* COMPLIANT TO JEDEC STANDARDS MO-275-MMAB-1 WITH EXCEPTION TO PACKAGE HEIGHT AND THICKNESS.

Figure 67. 208-Ball Chip Scale Package Ball Grid Array [CSP\_BGA] (BC-208-2) Dimensions shown in millimeters

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## SURFACE-MOUNT DESIGN

The following table is provided as an aid to PCB design. For industry-standard design recommendations, refer to IPC-7351, Generic Requirements for Surface Mount Design and Land Pattern Standard .

| Package                     | Package Ball Attach Type   | Package Solder Mask Opening   | Package Ball Pad Size   |
|-----------------------------|----------------------------|-------------------------------|-------------------------|
| 182-Ball CSP_BGA (BC-182)   | Solder Mask Defined        | 0.40 mmdiameter               | 0.55 mmdiameter         |
| 208-Ball CSP_BGA (BC-208-2) | Solder Mask Defined        | 0.40 mmdiameter               | 0.55 mmdiameter         |

## AUTOMOTIVE PRODUCTS

The ADBF534W model is available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models and designers should review the Specifications section of this data sheet carefully. Only the automotive grade products shown in Table 52 are available for use in automotive applications. Contact your local ADI account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

## Table 52. Automotive Products

| Product Family 1,2   | Temperature Range 3   | Speed Grade (Max)   | Package Description   | Package Option   |
|----------------------|-----------------------|---------------------|-----------------------|------------------|
| ADBF534WBBCZ4Axx     | -40 ° C to +85 ° C    | 400 MHz             | 182-Ball CSP_BGA      | BC-182           |
| ADBF534WBBCZ4Bxx     | -40 ° C to +85 ° C    | 400 MHz             | 208-Ball CSP_BGA      | BC-208-2         |

## ADSP-BF534/ADSP-BF536/ADSP-BF537

## ORDERING GUIDE

| Model 1            | Temperature Range 2   | Speed Grade (Max)   | Package Description 3               | Package Option   |
|--------------------|-----------------------|---------------------|-------------------------------------|------------------|
| ADSP-BF534BBCZ-4A  | -40°C to +85°C        | 400 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF534BBCZ-5A  | -40°C to +85°C        | 500 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF534BBCZ-4B  | -40°C to +85°C        | 400 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF534BBCZ-5B  | -40°C to +85°C        | 500 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF536BBCZ-3A  | -40°C to +85°C        | 300 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF536BBCZ3ARL | -40°C to +85°C        | 300 MHz             | 182-Ball CSP_BGA, 13" Tape and Reel | BC-182           |
| ADSP-BF536BBCZ-4A  | -40°C to +85°C        | 400 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF536BBCZ-3B  | -40°C to +85°C        | 300 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF536BBCZ3BRL | -40°C to +85°C        | 300 MHz             | 208-Ball CSP_BGA, 13" Tape and Reel | BC-208-2         |
| ADSP-BF536BBCZ-4B  | -40°C to +85°C        | 400 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF537BBCZ-5A  | -40°C to +85°C        | 500 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF537BBCZ-5B  | -40°C to +85°C        | 500 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF537BBCZ-5AV | -40°C to +85°C        | 533 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF537BBCZ-5BV | -40°C to +85°C        | 533 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |
| ADSP-BF537KBCZ-6AV | 0°C to +70°C          | 600 MHz             | 182-Ball CSP_BGA                    | BC-182           |
| ADSP-BF537KBCZ-6BV | 0°C to +70°C          | 600 MHz             | 208-Ball CSP_BGA                    | BC-208-2         |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

© 2025  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered trademarks are the property of their respective owners.

<!-- image -->