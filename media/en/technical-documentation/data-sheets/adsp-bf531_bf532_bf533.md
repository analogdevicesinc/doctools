<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

Up to 600 MHz high performance Blackfin processor

Two 16-bit MACs, two 40-bit ALUs, four 8-bit video ALUs, 40-bit shifter

RISC-like register and instruction model for ease of programming and compiler-friendly support

Advanced debug, trace, and performance monitoring

Wide range of operating voltages (see Operating Conditions on Page 20)

Qualified for Automotive Applications (see Automotive Products on Page 62)

Programmable on-chip voltage regulator 160-ball CSP\_BGA, 169-ball PBGA, and 176-lead LQFP

packages

## MEMORY

Up to 148K bytes of on-chip memory (see Table 1 on Page 3)

Memory management unit providing memory protection

External memory controller with glueless support for SDRAM, SRAM, flash, and ROM

Flexible memory booting options from SPI and external memory

Figure 1. Functional Block Diagram

<!-- image -->

Blackfin and the Blackfin logo are registered trademarks of Analog Devices, Inc.

## Rev. I

## Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Blackfin Embedded Processor

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## PERIPHERALS

Parallel peripheral interface PPI, supporting

ITU-R 656 video data formats

- 2 dual-channel, full duplex synchronous serial ports, supporting eight stereo I 2 S channels

2 memory-to-memory DMAs

8 peripheral DMAs

SPI-compatible port

Three 32-bit timer/counters with PWM support

Real-time clock and watchdog timer

32-bit core timer

Up to 16 general-purpose I/O pins (GPIO)

UART with support for IrDA

Event handler

Debug/JTAG interface

On-chip PLL capable of frequency multiplication

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## TABLE OF CONTENTS

| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                | . 1   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                    | . 1   |
| Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                     | . 1   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . 3   |
| Portable Low Power Architecture . . . . . . . . . . . . . . . . . . . . . .                                                                                 | . 3   |
| System Integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | . 3   |
| Processor Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | . 3   |
| Blackfin Processor Core . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | . 4   |
| Memory Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | . 4   |
| DMAControllers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | . 8   |
| Real-Time Clock . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . 8   |
| Watchdog Timer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | . 9   |
| Timers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                      | . 9   |
| Serial Ports (SPORTs) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . 9   |
| Serial Peripheral Interface (SPI) Port . . . . . . . . . . . . . . . . . .                                                                                  | 10    |
| UART Port . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | 10    |
| General-Purpose I/O Port F . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                      | 10    |
| Parallel Peripheral Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | 11    |
| Dynamic Power Management . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                              | 11    |
| Voltage Regulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | 13    |
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                               | 13    |
| Booting Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | 14    |
| Instruction Set Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | 15    |
| REVISION HISTORY                                                                                                                                            |       |
| 8/13- Rev. Hto Rev. I                                                                                                                                       |       |
| Updated Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | 15    |
| Corrected Conditions value of theV IL specification in Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 20    |
| Added notes to Table 30 in Serial Ports-Enable and Three-State . . . . . . . . . . . . . . . . . . . . .                                                    | 36    |
| Added Timer Clock Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                  | 41    |
| Revised Timer Cycle Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                  | 41    |
| Updated Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                              | 63    |

| Development Tools . . . . . . . . . . . . . . . . . . .                  |   15 |
|--------------------------------------------------------------------------|------|
| Additional Information . . . . . . . . . . . . .                         |   16 |
| Related Signal Chains . . . . . . . . . . . . . . . .                    |   16 |
| Pin Descriptions . . . . . . . . . . . . . . . . . . . . . . . . .       |   17 |
| Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |   20 |
| Operating Conditions . . . . . . . . . . . . . . . .                     |   20 |
| Electrical Characteristics . . . . . . . . . . . .                       |   22 |
| Absolute Maximum Ratings . . . . . . . .                                 |   25 |
| ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . .          |   25 |
| Package Information . . . . . . . . . . . . . . . . .                    |   26 |
| Timing Specifications . . . . . . . . . . . . . . . .                    |   27 |
| Output Drive Currents . . . . . . . . . . . . . .                        |   43 |
| Test Conditions . . . . . . . . . . . . . . . . . . . . . . .            |   45 |
| Thermal Characteristics . . . . . . . . . . . . .                        |   49 |
| 160-Ball CSP_BGA Ball Assignment                                         |   50 |
| 169-Ball PBGA Ball Assignment . . . . . .                                |   53 |
| 176-Lead LQFP Pinout . . . . . . . . . . . . . . . . .                   |   56 |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . .             |   58 |
| Surface-Mount Design . . . . . . . . . . . . . . .                       |   61 |
| Automotive Products . . . . . . . . . . . . . . . . . . .                |   62 |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . .       |   63 |

## GENERAL DESCRIPTION

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors are members of the Blackfin ® family of products, incorporating the Analog Devices, Inc./Intel Micro Signal Architecture (MSA). Blackfin processors combine a dual-MAC state-of-the-art signal processing engine, the advantages of a clean, orthogonal RISClike microprocessor instruction set, and single instruction, multiple data (SIMD) multimedia capabilities into a single instruction set architecture.

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors are completely code and pin-compatible, differing only with respect to their performance and on-chip memory. Specific performance and memory configurations are shown in Table 1.

## Table 1. Processor Comparison

|                                           | Features                                  | ADSP-BF531                 | ADSP-BF532                 | ADSP-BF533                 |
|-------------------------------------------|-------------------------------------------|----------------------------|----------------------------|----------------------------|
| SPORTs                                    | SPORTs                                    | 2                          | 2                          | 2                          |
| UART                                      | UART                                      | 1                          | 1                          | 1                          |
| SPI                                       | SPI                                       | 1                          | 1                          | 1                          |
| GP Timers                                 | GP Timers                                 | 3                          | 3                          | 3                          |
| Watchdog Timers                           | Watchdog Timers                           | 1                          | 1                          | 1                          |
| RTC                                       | RTC                                       | 1                          | 1                          | 1                          |
| Parallel Peripheral Interface             | Parallel Peripheral Interface             | 1                          | 1                          | 1                          |
| GPIOs Configuration                       | GPIOs Configuration                       | 16                         | 16                         | 16                         |
|                                           | L1 Instruction SRAM/Cache                 | 16K bytes                  | 16K bytes                  | 16K bytes                  |
|                                           | L1 Instruction SRAM                       | 16K bytes                  | 32K bytes                  | 64K bytes                  |
|                                           | L1 Data SRAM/Cache                        | 16K bytes                  | 32K bytes                  | 32K bytes                  |
|                                           | L1 Data SRAM                              |                            |                            | 32K bytes                  |
|                                           | L1 Scratchpad                             | 4K bytes                   | 4K bytes                   | 4K bytes                   |
|                                           | L3 BootROM                                | 1K bytes                   | 1K bytes                   | 1K bytes                   |
| Maximum Speed Grade                       | Maximum Speed Grade                       | 400 MHz                    | 400MHz                     | 600 MHz                    |
| Package Options: CSP_BGA Plastic BGA LQFP | Package Options: CSP_BGA Plastic BGA LQFP | 160-Ball 169-Ball 176-Lead | 160-Ball 169-Ball 176-Lead | 160-Ball 169-Ball 176-Lead |

By integrating a rich set of industry-leading system peripherals and memory, Blackfin processors are the platform of choice for next generation applications that require RISC-like programmability, multimedia support, and leading-edge signal processing in one integrated package.

## PORTABLE LOW POWER ARCHITECTURE

Blackfin processors provide world-class power management and performance. Blackfin processors are designed in a low power and low voltage design methodology and feature dynamic power management-the ability to vary both the voltage and frequency of operation to significantly lower overall power consumption. Varying the voltage and frequency can result in a substantial reduction in power consumption, compared with just varying the frequency of operation. This translates into longer battery life for portable appliances.

## SYSTEM INTEGRATION

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors are highly integrated system-on-a-chip solutions for the next generation of digital communication and consumer multimedia applications. By combining industry-standard interfaces with a high performance signal processing core, users can develop cost-effective solutions quickly without the need for costly external components. The system peripherals include a UART port, an SPI port, two serial ports (SPORTs), four general-purpose timers (three with PWM capability), a real-time clock, a watchdog timer, and a parallel peripheral interface.

## PROCESSOR PERIPHERALS

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors contain a rich set of peripherals connected to the core via several high bandwidth buses, providing flexibility in system configuration as well as excellent overall system performance (see the functional block diagram in Figure 1 on Page 1). The generalpurpose peripherals include functions such as UART, timers with PWM (pulse-width modulation) and pulse measurement capability, general-purpose I/O pins, a real-time clock, and a watchdog timer. This set of functions satisfies a wide variety of typical system support needs and is augmented by the system expansion capabilities of the part. In addition to these generalpurpose peripherals, the processors contain high speed serial and parallel ports for interfacing to a variety of audio, video, and modem codec functions; an interrupt controller for flexible management of interrupts from the on-chip peripherals or external sources; and power management control functions to tailor the performance and power characteristics of the processor and system to many application scenarios.

All of the peripherals, except for general-purpose I/O, real-time clock, and timers, are supported by a flexible DMA structure. There is also a separate memory DMA channel dedicated to data transfers between the processor's various memory spaces, including external SDRAM and asynchronous memory. Multiple on-chip buses running at up to 133 MHz provide enough bandwidth to keep the processor core running along with activity on all of the on-chip and external peripherals.

The processors include an on-chip voltage regulator in support of the processor's dynamic power management capability. The voltage regulator provides a range of core voltage levels from VDDEXT. The voltage regulator can be bypassed at the user's discretion.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## BLACKFIN PROCESSOR CORE

As shown in Figure 2 on Page 5, the Blackfin processor core contains two 16-bit multipliers, two 40-bit accumulators, two 40-bit ALUs, four video ALUs, and a 40-bit shifter. The computation units process 8-bit, 16-bit, or 32-bit data from the register file.

The compute register file contains eight 32-bit registers. When performing compute operations on 16-bit operand data, the register file operates as 16 independent 16-bit registers. All operands for compute operations come from the multiported register file and instruction constant fields.

Each MAC can perform a 16-bit by 16-bit multiply in each cycle, accumulating the results into the 40-bit accumulators. Signed and unsigned formats, rounding, and saturation are supported.

The ALUs perform a traditional set of arithmetic and logical operations on 16-bit or 32-bit data. In addition, many special instructions are included to accelerate various signal processing tasks. These include bit operations such as field extract and population count, modulo 2 32 multiply, divide primitives, saturation and rounding, and sign/exponent detection. The set of video instructions includes byte alignment and packing operations, 16-bit and 8-bit adds with clipping, 8-bit average operations, and 8-bit subtract/absolute value/accumulate (SAA) operations. Also provided are the compare/select and vector search instructions.

For certain instructions, two 16-bit ALU operations can be performed simultaneously on register pairs (a 16-bit high half and 16-bit low half of a compute register). Quad 16-bit operations are possible using the second ALU.

The 40-bit shifter can perform shifts and rotates and is used to support normalization, field extract, and field deposit instructions.

The program sequencer controls the flow of instruction execution, including instruction alignment and decoding. For program flow control, the sequencer supports PC relative and indirect conditional jumps (with static branch prediction), and subroutine calls. Hardware is provided to support zero-overhead looping. The architecture is fully interlocked, meaning that the programmer need not manage the pipeline when executing instructions with data dependencies.

The address arithmetic unit provides two addresses for simultaneous dual fetches from memory. It contains a multiported register file consisting of four sets of 32-bit index, modify, length, and base registers (for circular buffering), and eight additional 32-bit pointer registers (for C-style indexed stack manipulation).

Blackfin processors support a modified Harvard architecture in combination with a hierarchical memory structure. Level 1 (L1) memories are those that typically operate at the full processor speed with little or no latency. At the L1 level, the instruction memory holds instructions only. The two data memories hold data, and a dedicated scratchpad data memory stores stack and local variable information.

In addition, multiple L1 memory blocks are provided, offering a configurable mix of SRAM and cache. The memory management unit (MMU) provides memory protection for individual tasks that may be operating on the core and can protect system registers from unintended access.

The architecture provides three modes of operation: user mode, supervisor mode, and emulation mode. User mode has restricted access to certain system resources, thus providing a protected software environment, while supervisor mode has unrestricted access to the system and core resources.

The Blackfin processor instruction set has been optimized so that 16-bit opcodes represent the most frequently used instructions, resulting in excellent compiled code density. Complex DSP instructions are encoded into 32-bit opcodes, representing fully featured multifunction instructions. Blackfin processors support a limited multi-issue capability, where a 32-bit instruction can be issued in parallel with two 16-bit instructions, allowing the programmer to use many of the core resources in a single instruction cycle.

The Blackfin processor assembly language uses an algebraic syntax for ease of coding and readability. The architecture has been optimized for use in conjunction with the C/C++ compiler, resulting in fast and efficient software implementations.

## MEMORY ARCHITECTURE

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors view memory as a single unified 4G byte address space, using 32-bit addresses. All resources, including internal memory, external memory, and I/O control registers, occupy separate sections of this common address space. The memory portions of this address space are arranged in a hierarchical structure to provide a good cost/performance balance of some very fast, low latency on-chip memory as cache or SRAM, and larger, lower cost and performance off-chip memory systems. See Figure 3, Figure 4, and Figure 5 on Page 6.

The L1 memory system is the primary highest performance memory available to the Blackfin processor. The off-chip memory system, accessed through the external bus interface unit (EBIU), provides expansion with SDRAM, flash memory, and SRAM, optionally accessing up to 132M bytes of physical memory.

The memory DMA controller provides high bandwidth datamovement capability. It can perform block transfers of code or data between the internal memory and the external memory spaces.

## Internal (On-Chip) Memory

The processors have three blocks of on-chip memory that provide high bandwidth access to the core.

The first block is the L1 instruction memory, consisting of up to 80K bytes SRAM, of which 16K bytes can be configured as a four way set-associative cache. This memory is accessed at full processor speed.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Figure 2. Blackfin Processor Core

<!-- image -->

The second on-chip memory block is the L1 data memory, consisting of one or two banks of up to 32K bytes. The memory banks are configurable, offering both cache and SRAM functionality. This memory block is accessed at full processor speed.

1M byte segment regardless of the size of the devices used, so that these banks are only contiguous if each is fully populated with 1M byte of memory.

The third memory block is a 4K byte scratchpad SRAM, which runs at the same speed as the L1 memories, but is only accessible as data SRAM and cannot be configured as cache memory.

## External (Off-Chip) Memory

External memory is accessed via the external bus interface unit (EBIU). This 16-bit interface provides a glueless connection to a bank of synchronous DRAM (SDRAM) as well as up to four banks of asynchronous memory devices including flash, EPROM, ROM, SRAM, and memory mapped I/O devices.

The PC133-compliant SDRAM controller can be programmed to interface to up to 128M bytes of SDRAM. The SDRAM controller allows one row to be open for each internal SDRAM bank, for up to four internal SDRAM banks, improving overall system performance.

The asynchronous memory controller can be programmed to control up to four banks of devices with very flexible timing parameters for a wide variety of devices. Each bank occupies a

## I/O Memory Space

Blackfin processors do not define a separate I/O space. All resources are mapped through the flat 32-bit address space. On-chip I/O devices have their control registers mapped into memory mapped registers (MMRs) at addresses near the top of the 4G byte address space. These are separated into two smaller blocks, one containing the control MMRs for all core functions, and the other containing the registers needed for setup and control of the on-chip peripherals outside of the core. The MMRs are accessible only in supervisor mode and appear as reserved space to on-chip peripherals.

## Booting

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors contain a small boot kernel, which configures the appropriate peripheral for booting. If the processors are configured to boot from boot ROM memory space, the processor starts executing from the on-chip boot ROM. For more information, see Booting Modes on Page 14.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

| 0xFFFF FFFF   | CORE MMR REGISTERS (2M BYTE)         |
|---------------|--------------------------------------|
| 0xFFE0 0000   | SYSTEM MMR REGISTERS (2M BYTE)       |
| 0xFFC0 0000   | RESERVED                             |
| 0xFFB0 1000   | SCRATCHPAD SRAM (4K BYTE)            |
| 0xFFB0 0000   | RESERVED                             |
| 0xFFA1 4000   | INSTRUCTION SRAM/CACHE (16K BYTE)    |
| 0xFFA1 0000   | RESERVED                             |
| 0xFFA0 C000   | INSTRUCTION SRAM (16K BYTE)          |
| 0xFFA0 8000   | RESERVED                             |
| 0xFFA0 0000   | RESERVED                             |
| 0xFF90 8000   | RESERVED                             |
| 0xFF90 4000   |                                      |
| 0xFF80 8000   | RESERVED                             |
| 0xFF80 4000   | DATA BANK A SRAM/CACHE (16K BYTE)    |
| 0xEF00 0000   | RESERVED                             |
| 0x2040 0000   | RESERVED                             |
| 0x2030 0000   | ASYNC MEMORY BANK 2 (1M BYTE)        |
| 0x2020 0000   | ASYNC MEMORY BANK 1 (1M BYTE)        |
| 0x2010 0000   |                                      |
| 0x2000 0000   | ASYNC MEMORY BANK 0 (1M BYTE)        |
|               | RESERVED                             |
| 0x0800 0000   | SDRAM MEMORY (16M BYTE TO 128M BYTE) |

Figure 3. ADSP-BF531 Internal/External Memory Map

Figure 4. ADSP-BF532 Internal/External Memory Map

<!-- image -->

| 0xFFFF FFFF   | CORE MMR REGISTERS (2M BYTE)         |
|---------------|--------------------------------------|
| 0xFFE0 0000   | SYSTEMMMR REGISTERS (2M BYTE)        |
| 0xFFC0 0000   | RESERVED                             |
| 0xFFB0 1000   | SCRATCHPAD SRAM (4K BYTE)            |
| 0xFFB0 0000   | RESERVED                             |
| 0xFFA1 4000   | INSTRUCTION SRAM/CACHE (16K BYTE)    |
| 0xFFA1 0000   | INSTRUCTION SRAM (32K BYTE)          |
| 0xFFA0 8000   | RESERVED                             |
| 0xFF90 8000   | RESERVED                             |
|               | DATA BANK B SRAM/CACHE (16K BYTE)    |
| 0xFF90 4000   | RESERVED                             |
| 0xFF80 8000   |                                      |
| 0xFF80 4000   | RESERVED                             |
| 0xEF00 0000   | RESERVED                             |
| 0x2040 0000   | ASYNC MEMORY BANK 3 (1M BYTE)        |
|               | ASYNC MEMORY BANK 2 (1M BYTE)        |
| 0x2020 0000   | ASYNC MEMORY BANK 1 (1M BYTE)        |
| 0x2010 0000   | ASYNC MEMORY BANK 0 (1M BYTE)        |
| 0x2000 0000   | RESERVED                             |
| 0x0800 0000   | SDRAM MEMORY (16M BYTE TO 128M BYTE) |

Figure 5. ADSP-BF533 Internal/External Memory Map

<!-- image -->

## Event Handling

The event controller on the processors handle all asynchronous and synchronous events to the processor. The ADSP-BF531/ ADSP-BF532/ADSP-BF533 processors provide event handling that supports both nesting and prioritization. Nesting allows multiple event service routines to be active simultaneously. Prioritization ensures that servicing of a higher priority event takes precedence over servicing of a lower priority event. The controller provides support for five different types of events:

- Emulation - An emulation event causes the processor to enter emulation mode, allowing command and control of the processor via the JTAG interface.
- Reset - This event resets the processor.
- Nonmaskable Interrupt (NMI) - The NMI event can be generated by the software watchdog timer or by the NMI input signal to the processor. The NMI event is frequently used as a power-down indicator to initiate an orderly shutdown of the system.
- Exceptions - Events that occur synchronously to program flow (i.e., the exception is taken before the instruction is allowed to complete). Conditions such as data alignment violations and undefined instructions cause exceptions.
- Interrupts - Events that occur asynchronously to program flow. They are caused by input pins, timers, and other peripherals, as well as by an explicit software instruction.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Each event type has an associated register to hold the return address and an associated return-from-event instruction. When an event is triggered, the state of the processor is saved on the supervisor stack.

Table 3. System Interrupt Controller (SIC)

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors' event controller consists of two stages, the core event controller (CEC) and the system interrupt controller (SIC). The core event controller works with the system interrupt controller to prioritize and control all system events. Conceptually, interrupts from the peripherals enter into the SIC, and are then routed directly into the general-purpose interrupts of the CEC.

## Core Event Controller (CEC)

The CEC supports nine general-purpose interrupts (IVG15-7), in addition to the dedicated interrupt and exception events. Of these general-purpose interrupts, the two lowest priority interrupts (IVG15-14) are recommended to be reserved for software interrupt handlers, leaving seven prioritized interrupt inputs to support the peripherals of the processor. Table 2 describes the inputs to the CEC, identifies their names in the event vector table (EVT), and lists their priorities.

Table 2. Core Event Controller (CEC)

|   Priority (0 is Highest) | Event Class            | EVT Entry   |
|---------------------------|------------------------|-------------|
|                         0 | Emulation/Test Control | EMU         |
|                         1 | Reset                  | RST         |
|                         2 | Nonmaskable Interrupt  | NMI         |
|                         3 | Exception              | EVX         |
|                         4 | Reserved               |             |
|                         5 | Hardware Error         | IVHW        |
|                         6 | Core Timer             | IVTMR       |
|                         7 | General Interrupt 7    | IVG7        |
|                         8 | General Interrupt 8    | IVG8        |
|                         9 | General Interrupt 9    | IVG9        |
|                        10 | General Interrupt 10   | IVG10       |
|                        11 | General Interrupt 11   | IVG11       |
|                        12 | General Interrupt 12   | IVG12       |
|                        13 | General Interrupt 13   | IVG13       |
|                        14 | General Interrupt 14   | IVG14       |
|                        15 | General Interrupt 15   | IVG15       |

## System Interrupt Controller (SIC)

The system interrupt controller provides the mapping and routing of events from the many peripheral interrupt sources to the prioritized general-purpose interrupt inputs of the CEC. Although the processors provide a default mapping, the user can alter the mappings and priorities of interrupt events by writing the appropriate values into the interrupt assignment registers (SIC\_IARx). Table 3 describes the inputs into the SIC and the default mappings into the CEC.

| Peripheral Interrupt Event                                          | Default Mapping   |
|---------------------------------------------------------------------|-------------------|
| PLL Wakeup DMAError PPI Error SPORT 0 Error SPORT 1 Error SPI Error | IVG7 IVG7 IVG7    |
|                                                                     | IVG7              |
|                                                                     | IVG7              |
|                                                                     | IVG7              |
| UART Error                                                          | IVG7              |
| Real-Time Clock                                                     | IVG8              |
| DMAChannel 0 (PPI)                                                  | IVG8              |
| DMAChannel 1 (SPORT 0 Receive)                                      | IVG9              |
| DMAChannel 2 (SPORT 0 Transmit)                                     | IVG9              |
| DMAChannel 3 (SPORT 1 Receive)                                      | IVG9              |
| DMAChannel 4 (SPORT 1 Transmit)                                     | IVG9              |
| DMAChannel 5 (SPI)                                                  | IVG10             |
| DMAChannel 6 (UART Receive)                                         | IVG10             |
| DMAChannel 7 (UART Transmit)                                        | IVG10             |
| Timer 0                                                             | IVG11             |
| Timer 1                                                             | IVG11             |
| Timer 2                                                             | IVG11             |
| Port F GPIO Interrupt A                                             | IVG12             |
| Port F GPIO Interrupt B                                             | IVG12             |
| Memory DMAStream 0                                                  | IVG13             |
| Memory DMAStream 1                                                  | IVG13             |
| Software Watchdog Timer                                             | IVG13             |

## Event Control

The processors provide a very flexible mechanism to control the processing of events. In the CEC, three registers are used to coordinate and control events. Each register is 32 bits wide:

- CEC interrupt latch register (ILAT) - The ILAT register indicates when events have been latched. The appropriate bit is set when the processor has latched the event and cleared when the event has been accepted into the system. This register is updated automatically by the controller, but it can also be written to clear (cancel) latched events. This register can be read while in supervisor mode and can only be written while in supervisor mode when the corresponding IMASK bit is cleared.
- CEC interrupt mask register (IMASK) - The IMASK register controls the masking and unmasking of individual events. When a bit is set in the IMASK register, that event is unmasked and is processed by the CEC when asserted. A cleared bit in the IMASK register masks the event, preventing the processor from servicing the event even though the event may be latched in the ILAT register. This register can be read or written while in supervisor mode. Note that general-purpose interrupts can be globally enabled and disabled with the STI and CLI instructions, respectively.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

- CEC interrupt pending register (IPEND) - The IPEND register keeps track of all nested events. A set bit in the IPEND register indicates the event is currently active or nested at some level. This register is updated automatically by the controller but can be read while in supervisor mode.

The SIC allows further control of event processing by providing three 32-bit interrupt control and status registers. Each register contains a bit corresponding to each of the peripheral interrupt events shown in Table 3.

- SIC interrupt mask register (SIC\_IMASK) - This register controls the masking and unmasking of each peripheral interrupt event. When a bit is set in this register, that peripheral event is unmasked and is processed by the system when asserted. A cleared bit in this register masks the peripheral event, preventing the processor from servicing the event.
- SIC interrupt status register (SIC\_ISR) - As multiple peripherals can be mapped to a single event, this register allows the software to determine which peripheral event source triggered the interrupt. A set bit indicates the peripheral is asserting the interrupt, and a cleared bit indicates the peripheral is not asserting the event.
- SIC interrupt wakeup enable register (SIC\_IWR) - By enabling the corresponding bit in this register, a peripheral can be configured to wake up the processor, should the core be idled when the event is generated. See Dynamic Power Management on Page 11.

Because multiple interrupt sources can map to a single generalpurpose interrupt, multiple pulse assertions can occur simultaneously, before or during interrupt processing for an interrupt event already detected on this interrupt input. The IPEND register contents are monitored by the SIC as the interrupt acknowledgement.

The appropriate ILAT register bit is set when an interrupt rising edge is detected (detection requires two core clock cycles). The bit is cleared when the respective IPEND register bit is set. The IPEND bit indicates that the event has entered into the processor pipeline. At this point the CEC recognizes and queues the next rising edge event on the corresponding event input. The minimum latency from the rising edge transition of the general-purpose interrupt to the IPEND output asserted is three core clock cycles; however, the latency can be much higher, depending on the activity within and the state of the processor.

## DMA CONTROLLERS

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors have multiple, independent DMA channels that support automated data transfers with minimal overhead for the processor core. DMA transfers can occur between the processor's internal memories and any of its DMA-capable peripherals. Additionally, DMA transfers can be accomplished between any of the DMA-capable peripherals and external devices connected to the external memory interfaces, including the SDRAM controller and the asynchronous memory controller. DMA-capable peripherals include the SPORTs, SPI port, UART, and PPI. Each individual DMA-capable peripheral has at least one dedicated DMA channel.

The DMA controller supports both 1-dimensional (1-D) and 2dimensional (2-D) DMA transfers. DMA transfer initialization can be implemented from registers or from sets of parameters called descriptor blocks.

The 2-D DMA capability supports arbitrary row and column sizes up to 64K elements by 64K elements, and arbitrary row and column step sizes up to ±32K elements. Furthermore, the column step size can be less than the row step size, allowing implementation of interleaved data streams. This feature is especially useful in video applications where data can be de-interleaved on the fly.

Examples of DMA types supported by the DMA controller include:

- A single, linear buffer that stops upon completion
- A circular, autorefreshing buffer that interrupts on each full or fractionally full buffer
- 1-D or 2-D DMA using a linked list of descriptors
- 2-D DMA using an array of descriptors, specifying only the base DMA address within a common page

In addition to the dedicated peripheral DMA channels, there are two pairs of memory DMA channels provided for transfers between the various memories of the processor system. This enables transfers of blocks of data between any of the memories-including external SDRAM, ROM, SRAM, and flash memory-with minimal processor intervention. Memory DMA transfers can be controlled by a very flexible descriptor-based methodology or by a standard register-based autobuffer mechanism.

## REAL-TIME CLOCK

The processor real-time clock (RTC) provides a robust set of digital watch features, including current time, stopwatch, and alarm. The RTC is clocked by a 32.768 kHz crystal external to the ADSP-BF531/ADSP-BF532/ADSP-BF533 processors. The RTC peripheral has dedicated power supply pins so that it can remain powered up and clocked even when the rest of the processor is in a low power state. The RTC provides several programmable interrupt options, including interrupt per second, minute, hour, or day clock ticks, interrupt on programmable stopwatch countdown, or interrupt at a programmed alarm time.

The 32.768 kHz input clock frequency is divided down to a 1 Hz signal by a prescaler. The counter function of the timer consists of four counters: a 60 second counter, a 60 minute counter, a 24 hour counter, and a 32,768 day counter.

When enabled, the alarm function generates an interrupt when the output of the timer matches the programmed value in the alarm control register. The two alarms are time of day and a day and time of that day.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

The stopwatch function counts down from a programmed value, with one second resolution. When the stopwatch is enabled and the counter underflows, an interrupt is generated.

Like other peripherals, the RTC can wake up the processor from sleep mode upon generation of any RTC wakeup event. Additionally, an RTC wakeup event can wake up the processor from deep sleep mode, and wake up the on-chip internal voltage regulator from a powered-down state.

Connect RTC pins RTXI and RTXO with external components as shown in Figure 6.

<!-- image -->

SUGGESTED COMPONENTS:

X1 = ECLIPTEK EC38J (THROUGH-HOLE PACKAGE) OR EPSON MC405 12 pF LOAD (SURFACE-MOUNT PACKAGE)

C1 = 22 pF

C2 = 22 pF

R1 = 10 M :

NOTE: C1 AND C2 ARE SPECIFIC TO CRYSTAL SPECIFIED FOR X1. CONTACT CRYSTAL MANUFACTURER FOR DETAILS. C1 AND C2 SPECIFICATIONS ASSUME BOARD TRACE CAPACITANCE OF 3 pF.

Figure 6. External Components for RTC

## WATCHDOG TIMER

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors include a 32-bit timer that can be used to implement a software watchdog function. A software watchdog can improve system availability by forcing the processor to a known state through generation of a hardware reset, nonmaskable interrupt (NMI), or general-purpose interrupt, if the timer expires before being reset by software. The programmer initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts to zero from the programmed value. This protects the system from remaining in an unknown state where software, which would normally reset the timer, has stopped running due to an external noise condition or software error.

If configured to generate a hardware reset, the watchdog timer resets both the core and the processor peripherals. After a reset, software can determine if the watchdog was the source of the hardware reset by interrogating a status bit in the watchdog timer control register.

The timer is clocked by the system clock (SCLK), at a maximum frequency of fSCLK .

## TIMERS

There are four general-purpose programmable timer units in the ADSP-BF531/ADSP-BF532/ADSP-BF533 processors. Three timers have an external pin that can be configured either as a pulse-width modulator (PWM) or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input to the PF1 pin (TACLK), an external clock input to the PPI\_CLK pin (TMRCLK), or to the internal SCLK.

The timer units can be used in conjunction with the UART to measure the width of the pulses in the data stream to provide an autobaud detect function for a serial channel.

The timers can generate interrupts to the processor core providing periodic events for synchronization, either to the system clock or to a count of external signals.

In addition to the three general-purpose programmable timers, a fourth timer is also provided. This extra timer is clocked by the internal processor clock and is typically used as a system tick clock for generation of operating system periodic interrupts.

## SERIAL PORTS (SPORTs)

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors incorporate two dual-channel synchronous serial ports (SPORT0 and SPORT1) for serial and multiprocessor communications. The SPORTs support the following features:

- I 2 S capable operation.
- Bidirectional operation - Each SPORT has two sets of independent transmit and receive pins, enabling eight channels of I 2 S stereo audio.
- Buffered (8-deep) transmit and receive ports - Each port has a data register for transferring data words to and from other processor components and shift registers for shifting data in and out of the data registers.
- Clocking - Each transmit and receive port can either use an external serial clock or generate its own, in frequencies ranging from (fSCLK/131,070) Hz to (fSCLK/2) Hz.
- Word length - Each SPORT supports serial data words from 3 bits to 32 bits in length, transferred most-significant-bit first or least-significant-bit first.
- Framing - Each transmit and receive port can run with or without frame sync signals for each data word. Frame sync signals can be generated internally or externally, active high or low, and with either of two pulse widths and early or late frame sync.
- Companding in hardware - Each SPORT can perform A-law or µ-law companding according to ITU recommendation G.711. Companding can be selected on the transmit and/or receive channel of the SPORT without additional latencies.
- DMA operations with single-cycle overhead - Each SPORT can automatically receive and transmit multiple buffers of memory data. The processor can link or chain sequences of DMA transfers between a SPORT and memory.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

- Interrupts - Each transmit and receive port generates an interrupt upon completing the transfer of a data-word or after transferring an entire data buffer or buffers through DMA.
- Multichannel capability - Each SPORT supports 128 channels out of a 1,024-channel window and is compatible with the H.100, H.110, MVIP-90, and HMVIP standards.

An additional 250 mV of SPORT input hysteresis can be enabled by setting Bit 15 of the PLL\_CTL register. When this bit is set, all SPORT input pins have the increased hysteresis.

## SERIAL PERIPHERAL INTERFACE (SPI) PORT

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors have an SPI-compatible port that enables the processor to communicate with multiple SPI-compatible devices.

The SPI interface uses three pins for transferring data: two data pins (master output-slave input, MOSI, and master input-slave output, MISO) and a clock pin (serial clock, SCK). An SPI chip select input pin (SPISS) lets other SPI devices select the processor, and seven SPI chip select output pins (SPISEL7-1) let the processor select other SPI devices. The SPI select pins are reconfigured general-purpose I/O pins. Using these pins, the SPI port provides a full-duplex, synchronous serial interface which supports both master/slave modes and multimaster environments.

The baud rate and clock phase/polarities for the SPI port are programmable, and it has an integrated DMA controller, configurable to support transmit or receive data streams. The SPI DMA controller can only service unidirectional accesses at any given time.

The SPI port clock rate is calculated as:

<!-- formula-not-decoded -->

where the 16-bit SPI\_BAUD register contains a value of 2 to 65,535.

During transfers, the SPI port simultaneously transmits and receives by serially shifting data in and out on its two serial data lines. The serial clock line synchronizes the shifting and sampling of data on the two serial data lines.

## UART PORT

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors provide a full-duplex universal asynchronous receiver/transmitter (UART) port, which is fully compatible with PC-standard UARTs. The UART port provides a simplified UART interface to other peripherals or hosts, supporting full-duplex, DMA-supported, asynchronous transfers of serial data. The UART port includes support for 5 data bits to 8 data bits, 1 stop bit or 2 stop bits, and none, even, or odd parity. The UART port supports two modes of operation:

- PIO (programmed I/O) - The processor sends or receives data by writing or reading I/O-mapped UART registers. The data is double-buffered on both transmit and receive.
- DMA (direct memory access) - The DMA controller transfers both transmit and receive data. This reduces the number and frequency of interrupts required to transfer data to and from memory. The UART has two dedicated DMA channels, one for transmit and one for receive. These DMA channels have lower default priority than most DMA channels because of their relatively low service rates.

The baud rate, serial data format, error code generation and status, and interrupts for the UART port are programmable.

The UART programmable features include:

- Supporting bit rates ranging from (fSCLK/1,048,576) bits per second to (f SCLK /16) bits per second.
- Supporting data formats from seven bits to 12 bits per frame.
- Both transmit and receive operations can be configured to generate maskable interrupts to the processor.

The UART port's clock rate is calculated as:

<!-- formula-not-decoded -->

where the 16-bit UART\_Divisor comes from the UART\_DLH register (most significant 8 bits) and UART\_DLL register (least significant 8 bits).

In conjunction with the general-purpose timer functions, autobaud detection is supported.

The capabilities of the UART are further extended with support for the Infrared Data Association (IrDA ® ) serial infrared physical layer link specification (SIR) protocol.

## GENERAL-PURPOSE I/O PORT F

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors have 16 bidirectional, general-purpose I/O pins on Port F (PF15-0). Each general-purpose I/O pin can be individually controlled by manipulation of the GPIO control, status and interrupt registers:

- GPIO direction control register - Specifies the direction of each individual PFx pin as input or output.
- GPIO control and status registers - The processor employs a 'write one to modify' mechanism that allows any combination of individual GPIO pins to be modified in a single instruction, without affecting the level of any other GPIO pins. Four control registers are provided. One register is written in order to set GPIO pin values, one register is written in order to clear GPIO pin values, one register is written in order to toggle GPIO pin values, and one register is written in order to specify GPIO pin values. Reading the GPIO status register allows software to interrogate the sense of the GPIO pin.
- GPIO interrupt mask registers - The two GPIO interrupt mask registers allow each individual PFx pin to function as an interrupt to the processor. Similar to the two GPIO control registers that are used to set and clear individual GPIO pin values, one GPIO interrupt mask register sets bits to enable interrupt function, and the other GPIO interrupt mask register clears bits to disable interrupt function.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

PFx pins defined as inputs can be configured to generate hardware interrupts, while output PFx pins can be triggered by software interrupts.

- GPIO interrupt sensitivity registers - The two GPIO interrupt sensitivity registers specify whether individual PFx pins are level- or edge-sensitive and specify-if edge-sensitive-whether just the rising edge or both the rising and falling edges of the signal are significant. One register selects the type of sensitivity, and one register selects which edges are significant for edge-sensitivity.

## PARALLEL PERIPHERAL INTERFACE

The processors provide a parallel peripheral interface (PPI) that can connect directly to parallel ADCs and DACs, video encoders and decoders, and other general-purpose peripherals. The PPI consists of a dedicated input clock pin, up to three frame synchronization pins, and up to 16 data pins. The input clock supports parallel data rates up to half the system clock rate and the synchronization signals can be configured as either inputs or outputs.

The PPI supports a variety of general-purpose and ITU-R 656 modes of operation. In general-purpose mode, the PPI provides half-duplex, bi-directional data transfer with up to 16 bits of data. Up to three frame synchronization signals are also provided. In ITU-R 656 mode, the PPI provides half-duplex bidirectional transfer of 8- or 10-bit video data. Additionally, onchip decode of embedded start-of-line (SOL) and start-of-field (SOF) preamble packets is supported.

## General-Purpose Mode Descriptions

The general-purpose modes of the PPI are intended to suit a wide variety of data capture and transmission applications.

Three distinct sub modes are supported:

- Input mode - Frame syncs and data are inputs into the PPI.
- Frame capture mode - Frame syncs are outputs from the PPI, but data are inputs.
- Output mode - Frame syncs and data are outputs from the PPI.

## Input Mode

Input mode is intended for ADC applications, as well as video communication with hardware signaling. In its simplest form, PPI\_FS1 is an external frame sync input that controls when to read data. The PPI\_DELAY MMR allows for a delay (in PPI\_-CLK cycles) between reception of this frame sync and the initiation of data reads. The number of input data samples is user programmable and defined by the contents of the PPI\_COUNT register. The PPI supports 8-bit and 10-bit through 16-bit data, programmable in the PPI\_CONTROL register.

## Frame Capture Mode

Frame capture mode allows the video source(s) to act as a slave (e.g., for frame capture). The processors control when to read from the video source(s). PPI\_FS1 is an HSYNC output and PPI\_FS2 is a VSYNC output.

## Output Mode

Output mode is used for transmitting video or other data with up to three output frame syncs. Typically, a single frame sync is appropriate for data converter applications, whereas two or three frame syncs could be used for sending video with hardware signaling.

## ITU-R 656 Mode Descriptions

The ITU-R 656 modes of the PPI are intended to suit a wide variety of video capture, processing, and transmission applications. Three distinct sub modes are supported:

- Active video only mode
- Vertical blanking only mode
- Entire field mode

## Active Video Only Mode

Active video only mode is used when only the active video portion of a field is of interest and not any of the blanking intervals. The PPI does not read in any data between the end of active video (EAV) and start of active video (SAV) preamble symbols, or any data present during the vertical blanking intervals. In this mode, the control byte sequences are not stored to memory; they are filtered by the PPI. After synchronizing to the start of Field 1, the PPI ignores incoming samples until it sees an SAV code. The user specifies the number of active video lines per frame (in PPI\_COUNT register).

## Vertical Blanking Interval Mode

In this mode, the PPI only transfers vertical blanking interval (VBI) data.

## Entire Field Mode

In this mode, the entire incoming bit stream is read in through the PPI. This includes active video, control preamble sequences, and ancillary data that can be embedded in horizontal and vertical blanking intervals. Data transfer starts immediately after synchronization to Field 1. Data is transferred to or from the synchronous channels through eight DMA engines that work autonomously from the processor core.

## DYNAMIC POWER MANAGEMENT

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors provides four operating modes, each with a different performance/ power profile. In addition, dynamic power management provides the control functions to dynamically alter the processor core supply voltage, further reducing power dissipation. Control of clocking to each of the processor peripherals also reduces power consumption. See Table 4 for a summary of the power settings for each mode.

## Full-On Operating Mode-Maximum Performance

In the full-on mode, the PLL is enabled and is not bypassed, providing capability for maximum operational frequency. This is the power-up default execution state in which maximum performance can be achieved. The processor core and all enabled peripherals run at full speed.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Active Operating Mode-Moderate Power Savings

In the active mode, the PLL is enabled but bypassed. Because the PLL is bypassed, the processor's core clock (CCLK) and system clock (SCLK) run at the input clock (CLKIN) frequency. DMA access is available to appropriately configured L1 memories.

In the active mode, it is possible to disable the PLL through the PLL control register (PLL\_CTL). If disabled, the PLL must be re-enabled before it can transition to the full-on or sleep modes.

Table 4. Power Settings

| Mode      | PLL               | PLL Bypassed   | Core Clock (CCLK)   | System Clock (SCLK)   | Internal Power (V DDINT )   |
|-----------|-------------------|----------------|---------------------|-----------------------|-----------------------------|
| Full On   | Enabled           | No             | Enabled             | Enabled               | On                          |
| Active    | Enabled/ Disabled | Yes            | Enabled             | Enabled               | On                          |
| Sleep     | Enabled           | -              | Disabled            | Enabled               | On                          |
| Deep      | Disabled          | -              | Disabled            | Disabled              | On                          |
| Hibernate | Disabled          | -              | Disabled            | Disabled              | Off                         |

## Sleep Operating Mode-High Dynamic Power Savings

The sleep mode reduces dynamic power dissipation by disabling the clock to the processor core (CCLK). The PLL and system clock (SCLK), however, continue to operate in this mode. Typically an external event or RTC activity will wake up the processor. When in the sleep mode, assertion of wakeup causes the processor to sense the value of the BYPASS bit in the PLL control register (PLL\_CTL). If BYPASS is disabled, the processor will transition to the full-on mode. If BYPASS is enabled, the processor will transition to the active mode.

When in the sleep mode, system DMA access to L1 memory is not supported.

## Deep Sleep Operating Mode-Maximum Dynamic Power Savings

The deep sleep mode maximizes dynamic power savings by disabling the clocks to the processor core (CCLK) and to all synchronous peripherals (SCLK). Asynchronous peripherals, such as the RTC, may still be running but cannot access internal resources or external memory. This powered-down mode can only be exited by assertion of the reset interrupt (RESET) or by an asynchronous interrupt generated by the RTC. When in deep sleep mode, an RTC asynchronous interrupt causes the processor to transition to the active mode. Assertion of RESET while in deep sleep mode causes the processor to transition to the fullon mode.

## Hibernate State-Maximum Static Power Savings

The hibernate state maximizes static power savings by disabling the voltage and clocks to the processor core (CCLK) and to all the synchronous peripherals (SCLK). The internal voltage regulator for the processor can be shut off by writing b#00 to the FREQ bits of the VR\_CTL register. In addition to disabling the clocks, this sets the internal power supply voltage (V DDINT) to

0 V to provide the lowest static power dissipation. Any critical information stored internally (memory contents, register contents, etc.) must be written to a nonvolatile storage device prior to removing power if the processor state is to be preserved. Since VDDEXT is still supplied in this mode, all of the external pins three-state, unless otherwise specified. This allows other devices that may be connected to the processor to still have power applied without drawing unwanted current. The internal supply regulator can be woken up either by a real-time clock wakeup or by asserting the RESET pin.

## Power Savings

As shown in Table 5, the processors support three different power domains. The use of multiple power domains maximizes flexibility, while maintaining compliance with industry standards and conventions. By isolating the internal logic of the processor into its own power domain, separate from the RTC and other I/O, the processor can take advantage of dynamic power management without affecting the RTC or other I/O devices. There are no sequencing requirements for the various power domains.

## Table 5. Power Domains

| Power Domain                       | V DD Range   |
|------------------------------------|--------------|
| All internal logic, except RTC     | V DDINT      |
| RTC internal logic and crystal I/O | V DDRTC      |
| All other I/O                      | V DDEXT      |

The power dissipated by a processor is largely a function of the clock frequency of the processor and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in dynamic power dissipation, while reducing the voltage by 25% reduces dynamic power dissipation by more than 40%. Further, these power savings are additive, in that if the clock frequency and supply voltage are both reduced, the power savings can be dramatic.

The dynamic power management feature of the processor allows both the processor's input voltage (VDDINT) and clock frequency (fCCLK) to be dynamically controlled.

The savings in power dissipation can be modeled using the power savings factor and % power savings calculations.

The power savings factor is calculated as:

power savings factor

<!-- formula-not-decoded -->

where the variables in the equation are:

fCCLKNOM is the nominal core clock frequency f CCLKRED is the reduced core clock frequency

VDDINTNOM is the nominal internal supply voltage

VDDINTRED is the reduced internal supply voltage

## ADSP-BF531/ADSP-BF532/ADSP-BF533

tNOM is the duration running at fCCLKNOM t RED is the duration running at f CCLKRED The percent power savings is calculated as: % power savings 1 power savings factor -  100%  =

## VOLTAGE REGULATION

The Blackfin processor provides an on-chip voltage regulator that can generate appropriate VDDINT voltage levels from the VDDEXT supply. See Operating Conditions on Page 20 for regulator tolerances and acceptable VDDEXT ranges for specific models.

Figure 7 shows the typical external components required to complete the power management system. The regulator controls the internal logic voltage levels and is programmable with the voltage regulator control register (VR\_CTL) in increments of 50 mV. To reduce standby power consumption, the internal voltage regulator can be programmed to remove power to the processor core while keeping I/O power (VDDEXT) supplied. While in the hibernate state, I/O power is still being applied, eliminating the need for external buffers. The voltage regulator can be activated from this power-down state either through an RTC wakeup or by asserting RESET, both of which initiate a boot sequence. The regulator can also be disabled and bypassed at the user's discretion.

Figure 7. Voltage Regulator Circuit

<!-- image -->

## Voltage Regulator Layout Guidelines

Regulator external component placement, board routing, and bypass capacitors all have a significant effect on noise injected into the other analog circuits on-chip. The VROUT1-0 traces and voltage regulator external components should be considered as noise sources when doing board layout and should not be routed or placed near sensitive circuits or components on the board. All internal and I/O power supplies should be well bypassed with bypass capacitors placed as close to the processors as possible.

For further details on the on-chip voltage regulator and related board design guidelines, see the Switching Regulator Design Considerations for ADSP-BF533 Blackfin Processors (EE-228) applications note on the Analog Devices web site (www.analog.com)-use site search on 'EE-228'.

## CLOCK SIGNALS

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors can be clocked by an external crystal, a sine wave input, or a buffered, shaped clock derived from an external clock oscillator.

If an external clock is used, it should be a TTL-compatible signal and must not be halted, changed, or operated below the specified frequency during normal operation. This signal is connected to the processor's CLKIN pin. When an external clock is used, the XTAL pin must be left unconnected.

Alternatively, because the processors include an on-chip oscillator circuit, an external crystal can be used. For fundamental frequency operation, use the circuit shown in Figure 8.

<!-- image -->

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED DEPENDING ON THE CRYSTAL AND LAYOUT. PLEASE ANALYZE CAREFULLY.

Figure 8. External Crystal Connections

A parallel-resonant, fundamental frequency, microprocessorgrade crystal is connected across the CLKIN and XTAL pins. The on-chip resistance between CLKIN and the XTAL pin is in the 500 k  range. Further parallel resistors are typically not recommended. The two capacitors and the series resistor shown in Figure 8 fine tune the phase and amplitude of the sine frequency. The capacitor and resistor values shown in Figure 8 are typical values only. The capacitor values are dependent upon the crystal manufacturer's load capacitance recommendations and the physical PCB layout. The resistor value depends on the drive level specified by the crystal manufacturer. System designs should verify the customized values based on careful investigation on multiple devices over the allowed temperature range.

A third-overtone crystal can be used at frequencies above 25 MHz. The circuit is then modified to ensure crystal operation only at the third overtone, by adding a tuned inductor circuit as shown in Figure 8.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

As shown in Figure 9, the core clock (CCLK) and system peripheral clock (SCLK) are derived from the input clock (CLKIN) signal. An on-chip PLL is capable of multiplying the CLKIN signal by a user programmable 0.5  to 64  multiplication factor (bounded by specified minimum and maximum VCO frequencies). The default multiplier is 10  , but it can be modified by a software instruction sequence. On-the-fly frequency changes can be effected by simply writing to the PLL\_DIV register.

Figure 9. Frequency Modification Methods

<!-- image -->

All on-chip peripherals are clocked by the system clock (SCLK). The system clock frequency is programmable by means of the SSEL3-0 bits of the PLL\_DIV register. The values programmed into the SSEL fields define a divide ratio between the PLL output (VCO) and the system clock. SCLK divider values are 1 through 15. Table 6 illustrates typical system clock ratios.

Table 6. Example System Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| SSEL3-0      | VCO/SCLK        | VCO                              | SCLK                             |
| 0001         | 1:1             | 100                              | 100                              |
| 0101         | 5:1             | 400                              | 80                               |
| 1010         | 10:1            | 500                              | 50                               |

The maximum frequency of the system clock is fSCLK. The divisor ratio must be chosen to limit the system clock frequency to its maximum of fSCLK. The SSEL value can be changed dynamically without any PLL lock latencies by writing the appropriate values to the PLL divisor register (PLL\_DIV). When the SSEL value is changed, it affects all of the peripherals that derive their clock signals from the SCLK signal.

The core clock (CCLK) frequency can also be dynamically changed by means of the CSEL1-0 bits of the PLL\_DIV register. Supported CCLK divider ratios are 1, 2, 4, and 8, as shown in Table 7. This programmable core clock capability is useful for fast core frequency modifications.

## Table 7. Core Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| CSEL1-0      | VCO/CCLK        | VCO                              | CCLK                             |
| 00           | 1:1             | 300                              | 300                              |
| 01           | 2:1             | 300                              | 150                              |
| 10           | 4:1             | 400                              | 100                              |
| 11           | 8:1             | 200                              | 25                               |

## BOOTING MODES

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors have two mechanisms (listed in Table 8) for automatically loading internal L1 instruction memory after a reset. A third mode is provided to execute from external memory, bypassing the boot sequence.

Table 8. Booting Modes

|   BMODE1-0 | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
|         00 | Execute from 16-bit external memory (bypass boot ROM)                                                                           |
|         01 | Boot from 8-bit or 16-bit FLASH                                                                                                 |
|         10 | Boot from serial master connected to SPI                                                                                        |
|         11 | Boot from serial slave EEPROM/flash (8-,16-, or 24- bit address range, or Atmel AT45DB041, AT45DB081, or AT45DB161serial flash) |

The BMODE pins of the reset configuration register, sampled during power-on resets and software-initiated resets, implement the following modes:

- Execute from 16-bit external memory - Execution starts from address 0x2000 0000 with 16-bit packing. The boot ROM is bypassed in this mode. All configuration settings are set for the slowest device possible (3-cycle hold time; 15-cycle R/W access times; 4-cycle setup).
- Boot from 8-bit or 16-bit external flash memory - The flash boot routine located in boot ROM memory space is set up using asynchronous Memory Bank 0. All configuration settings are set for the slowest device possible (3-cycle hold time; 15-cycle R/W access times; 4-cycle setup).
- Boot from SPI serial EEPROM/flash (8-, 16-, or 24-bit addressable, or Atmel AT45DB041, AT45DB081, or AT45DB161) - The SPI uses the PF2 output pin to select a single SPI EEPROM/flash device, submits a read command and successive address bytes (0x00) until a valid 8-, 16-, or 24-bit addressable EEPROM/flash device is detected, and begins clocking data into the processor at the beginning of L1 instruction memory.
- Boot from SPI serial master - The Blackfin processor operates in SPI slave mode and is configured to receive the bytes of the LDR file from an SPI host (master) agent. To hold off the host device from transmitting while the boot ROM is busy, the Blackfin processor asserts a GPIO pin, called host wait (HWAIT), to signal the host device not to send any

## ADSP-BF531/ADSP-BF532/ADSP-BF533

more bytes until the flag is deasserted. The GPIO pin is chosen by the user and this information is transferred to the Blackfin processor via bits[10:5] of the FLAG header in the LDR image.

For each of the boot modes, a 10-byte header is first read from an external memory device. The header specifies the number of bytes to be transferred and the memory destination address. Multiple memory blocks can be loaded by any boot sequence. Once all blocks are loaded, program execution commences from the start of L1 instruction SRAM.

In addition, Bit 4 of the reset configuration register can be set by application code to bypass the normal boot sequence during a software reset. For this case, the processor jumps directly to the beginning of L1 instruction memory.

## INSTRUCTION SET DESCRIPTION

The Blackfin processor family assembly language instruction set employs an algebraic syntax designed for ease of coding and readability. The instructions have been specifically tuned to provide a flexible, densely encoded instruction set that compiles to a very small final memory size. The instruction set also provides fully featured multifunction instructions that allow the programmer to use many of the processor core resources in a single instruction. Coupled with many features more often seen on microcontrollers, this instruction set is very efficient when compiling C and C++ source code. In addition, the architecture supports both user (algorithm/application code) and supervisor (O/S kernel, device drivers, debuggers, ISRs) modes of operation, allowing multiple levels of access to core processor resources.

The assembly language, which takes advantage of the processor's unique architecture, offers the following advantages:

- Seamlessly integrated DSP/CPU features are optimized for both 8-bit and 16-bit operations.
- A multi-issue load/store modified Harvard architecture, which supports two 16-bit MAC or four 8-bit ALU + two load/store + two pointer updates per cycle.
- All registers, I/O, and memory are mapped into a unified 4G byte memory space, providing a simplified programming model.
- Microcontroller features, such as arbitrary bit and bit-field manipulation, insertion, and extraction; integer operations on 8-, 16-, and 32-bit data types; and separate user and supervisor stack pointers.
- Code density enhancements, which include intermixing of 16-bit and 32-bit instructions (no mode switching, no code segregation). Frequently used instructions are encoded in 16 bits.

## DEVELOPMENT TOOLS

Analog Devices supports its processors with a complete line of software and hardware development tools, including integrated development environments (which include CrossCore ® Embedded Studio and/or VisualDSP++ ® ), evaluation products, emulators, and a wide variety of software add-ins.

## Integrated Development Environments (IDEs)

For C/C++ software writing and editing, code generation, and debug support, Analog Devices offers two IDEs.

The newest IDE, CrossCore Embedded Studio, is based on the Eclipse TM framework. Supporting most Analog Devices processor families, it is the IDE of choice for future processors, including multicore devices. CrossCore Embedded Studio seamlessly integrates available software add-ins to support real time operating systems, file systems, TCP/IP stacks, USB stacks, algorithmic software modules, and evaluation hardware board support packages. For more information visit www.analog.com/ cces.

The other Analog Devices IDE, VisualDSP++, supports processor families introduced prior to the release of CrossCore Embedded Studio. This IDE includes the Analog Devices VDK real time operating system and an open source TCP/IP stack. For more information visit www.analog.com/visualdsp. Note that VisualDSP++ will not support future Analog Devices processors.

## EZ-KIT Lite Evaluation Board

For processor evaluation, Analog Devices provides wide range of EZ-KIT Lite ® evaluation boards. Including the processor and key peripherals, the evaluation board also supports on-chip emulation capabilities and other evaluation and development features. Also available are various EZ-Extenders ® , which are daughter cards delivering additional specialized functionality, including audio and video processing. For more information visit www.analog.com and search on 'ezkit' or 'ezextender'.

## EZ-KIT Lite Evaluation Kits

For a cost-effective way to learn more about developing with Analog Devices processors, Analog Devices offer a range of EZKIT Lite evaluation kits. Each evaluation kit includes an EZ-KIT Lite evaluation board, directions for downloading an evaluation version of the available IDE(s), a USB cable, and a power supply. The USB controller on the EZ-KIT Lite board connects to the USB port of the user's PC, enabling the chosen IDE evaluation suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system. It also supports in-circuit programming of the on-board Flash device to store user-specific boot code, enabling standalone operation. With the full version of CrossCore Embedded Studio or VisualDSP++ installed (sold separately), engineers can develop software for supported EZKITs or any custom system utilizing supported Analog Devices processors.

## Software Add-Ins for CrossCore Embedded Studio

Analog Devices offers software add-ins which seamlessly integrate with CrossCore Embedded Studio to extend its capabilities and reduce development time. Add-ins include board support packages for evaluation hardware, various middleware packages, and algorithmic modules. Documentation, help, configuration dialogs, and coding examples present in these add-ins are viewable through the CrossCore Embedded Studio IDE once the add-in is installed.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Board Support Packages for Evaluation Hardware

Software support for the EZ-KIT Lite evaluation boards and EZExtender daughter cards is provided by software add-ins called Board Support Packages (BSPs). The BSPs contain the required drivers, pertinent release notes, and select example code for the given evaluation hardware. A download link for a specific BSP is located on the web page for the associated EZ-KIT or EZExtender product. The link is found in the Product Download area of the product web page.

## Middleware Packages

Analog Devices separately offers middleware add-ins such as real time operating systems, file systems, USB stacks, and TCP/ IP stacks. For more information see the following web pages:

- www.analog.com/ucos3
- www.analog.com/ucfs
- www.analog.com/ucusbd
- www.analog.com/lwip

## Algorithmic Modules

To speed development, Analog Devices offers add-ins that perform popular audio and video processing algorithms. These are available for use with both CrossCore Embedded Studio and VisualDSP++. For more information visit www.analog.com and search on 'Blackfin software modules' or 'SHARC software modules'.

## Designing an Emulator-Compatible DSP Board (Target)

For embedded system test and debug, Analog Devices provides a family of emulators. On each JTAG DSP, Analog Devices supplies an IEEE 1149.1 JTAG Test Access Port (TAP). In-circuit emulation is facilitated by use of this JTAG interface. The emulator accesses the processor's internal features via the processor's TAP, allowing the developer to load code, set breakpoints, and view variables, memory, and registers. The processor must be halted to send data and commands, but once an operation is completed by the emulator, the DSP system is set to run at full speed with no impact on system timing. The emulators require the target board to include a header that supports connection of the DSP's JTAG port to the emulator.

For details on target board design issues including mechanical layout, single processor connections, signal buffering, signal termination, and emulator pod logic, see the Engineer-to-Engineer Note 'Analog Devices JTAG Emulation Technical Reference ' (EE-68) on the Analog Devices website (www.analog.com)-use site search on 'EE-68.' This document is updated regularly to keep pace with improvements to emulator support.

## ADDITIONAL INFORMATION

The following publications that describe the ADSP-BF531/ ADSP-BF532/ADSP-BF533 processors (and related processors) can be ordered from any Analog Devices sales office or accessed electronically on our website:

- Getting Started With Blackfin Processors
- ADSP-BF533 Blackfin Processor Hardware Reference
- Blackfin Processor Programming Reference
- ADSP-BF531/ADSP-BF532/ADSP-BF533 Blackfin Processor Anomaly List

## RELATED SIGNAL CHAINS

A signal chain is a series of signal-conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena. For more information about this term and related topics, see the "signal chain" entry in Wikipedia or the Glossary of EE Terms on the Analog Devices website.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together well. A tool for viewing relationships between specific applications and related components is available on the www.analog.com website.

The Application Signal Chains page in the Circuits from the Lab TM site (http://www.analog.com/circuits) provides:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## PIN DESCRIPTIONS

The ADSP-BF531/ADSP-BF532/ADSP-BF533 processors pin definitions are listed in Table 9.

All pins are three-stated during and immediately after reset, except the memory interface, asynchronous memory control, and synchronous memory control pins. These pins are all driven high, with the exception of CLKOUT, which toggles at the system clock rate. During hibernate, all outputs are threestated unless otherwise noted in Table 9.

Table 9. Pin Descriptions

| PinName                    | Type   | Function                                                             | Driver Type 1   |
|----------------------------|--------|----------------------------------------------------------------------|-----------------|
| Memory Interface           |        |                                                                      |                 |
| ADDR19-1                   | O      | Address Bus for Async/Sync Access                                    | A               |
| DATA15-0                   | I/O    | Data Bus for Async/Sync Access                                       | A               |
| ABE1-0/SDQM1-0             | O      | Byte Enables/Data Masks for Async/Sync Access                        | A               |
| BR                         | I      | Bus Request (This pin should be pulled high if not used.)            |                 |
| BG                         | O      | Bus Grant                                                            | A               |
| BGH                        | O      | Bus Grant Hang                                                       | A               |
| Asynchronous MemoryControl |        |                                                                      |                 |
| AMS3-0                     | O      | Bank Select (Require pull-ups if hibernate is used.)                 | A               |
| ARDY                       | I      | Hardware Ready Control (This pin should be pulled high if not used.) |                 |
| AOE                        | O      | Output Enable                                                        | A               |
| ARE                        | O      | Read Enable                                                          | A               |
| AWE                        | O      | Write Enable                                                         | A               |
| Synchronous MemoryControl  |        |                                                                      |                 |
| SRAS                       | O      | Row Address Strobe                                                   | A               |
| SCAS                       | O      | Column Address Strobe                                                | A               |
| SWE                        | O      | Write Enable                                                         | A               |
| SCKE                       | O      | Clock Enable (Requires pull-down if hibernate is used.)              | A               |
| CLKOUT                     | O      | Clock Output                                                         | B               |
| SA10                       | O      | A10 Pin                                                              | A               |
| SMS                        | O      | Bank Select                                                          | A               |
| Timers                     |        |                                                                      |                 |
| TMR0                       | I/O    | Timer 0                                                              | C               |
| TMR1/ PPI_FS1              | I/O    | Timer 1/ PPI Frame Sync1                                             | C               |
| TMR2/ PPI_FS2              | I/O    | Timer 2/ PPI Frame Sync2                                             | C               |
| PPI Port                   |        |                                                                      |                 |
| PPI3-0                     | I/O    | PPI3-0                                                               | C               |
| PPI_CLK/ TMRCLK            | I      | PPI Clock/ External Timer Reference                                  |                 |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

If BR is active (whether or not RESET is asserted), the memory pins are also three-stated. All unused I/O pins have their input buffers disabled with the exception of the pins that need pullups or pull-downs as noted in the table.

In order to maintain maximum functionality and reduce package size and pin count, some pins have dual, multiplexed functionality. In cases where pin functionality is reconfigurable, the default state is shown in plain text, while alternate functionality is shown in italics.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Table 9. Pin Descriptions (Continued)

| PinName                                                    | Type   | Function                                                                                                     | Driver Type 1   |
|------------------------------------------------------------|--------|--------------------------------------------------------------------------------------------------------------|-----------------|
| Port F: GPIO/Parallel Peripheral Interface Port/SPI/Timers |        |                                                                                                              |                 |
| PF0/ SPISS                                                 | I/O    | GPIO/ SPI Slave Select Input                                                                                 | C               |
| PF1 /SPISEL1/TACLK                                         | I/O    | GPIO/ SPI Slave Select Enable 1/Timer Alternate Clock Input                                                  | C               |
| PF2/ SPISEL2                                               | I/O    | GPIO/ SPI Slave Select Enable 2                                                                              | C               |
| PF3/ SPISEL3/PPI_FS3                                       | I/O    | GPIO/ SPI Slave Select Enable 3/PPI Frame Sync 3                                                             | C               |
| PF4/ SPISEL4/PPI15                                         | I/O    | GPIO/ SPI Slave Select Enable 4/PPI 15                                                                       | C               |
| PF5/ SPISEL5/PPI14                                         | I/O    | GPIO/ SPI Slave Select Enable 5/PPI 14                                                                       | C               |
| PF6/ SPISEL6/PPI13                                         | I/O    | GPIO/ SPI Slave Select Enable 6/PPI 13                                                                       | C               |
| PF7/ SPISEL7/PPI12                                         | I/O    | GPIO/ SPI Slave Select Enable 7/PPI 12                                                                       | C               |
| PF8/ PPI11                                                 | I/O    | GPIO/ PPI 11                                                                                                 | C               |
| PF9/ PPI10                                                 | I/O    | GPIO/ PPI 10                                                                                                 | C               |
| PF10/ PPI9                                                 | I/O    | GPIO/ PPI 9                                                                                                  | C               |
| PF11/ PPI8                                                 | I/O    | GPIO/ PPI 8                                                                                                  | C               |
| PF12/ PPI7                                                 | I/O    | GPIO/ PPI 7                                                                                                  | C               |
| PF13/ PPI6                                                 | I/O    | GPIO/ PPI 6                                                                                                  | C               |
| PF14/ PPI5                                                 | I/O    | GPIO/ PPI 5                                                                                                  | C               |
| PF15/ PPI4                                                 | I/O    | GPIO/ PPI 4                                                                                                  | C               |
| JTAG Port                                                  |        |                                                                                                              |                 |
| TCK                                                        | I      | JTAG Clock                                                                                                   |                 |
| TDO                                                        | O      | JTAG Serial Data Out                                                                                         | C               |
| TDI                                                        | I      | JTAG Serial Data In                                                                                          |                 |
| TMS                                                        | I      | JTAG Mode Select                                                                                             |                 |
| TRST                                                       | I      | JTAG Reset (This pin should be pulled low if JTAG is not used.)                                              |                 |
| EMU                                                        | O      | Emulation Output                                                                                             | C               |
| SPI Port                                                   |        |                                                                                                              |                 |
| MOSI                                                       | I/O    | Master Out Slave In                                                                                          | C               |
| MISO                                                       | I/O    | Master In Slave Out (This pin should be pulled high through a 4.7 k  resistor if booting via the SPI port.) | C               |
| SCK                                                        | I/O    | SPI Clock                                                                                                    | D               |
| Serial Ports                                               |        |                                                                                                              |                 |
| RSCLK0                                                     | I/O    | SPORT0 Receive Serial Clock                                                                                  | D               |
| RFS0                                                       | I/O    | SPORT0 Receive Frame Sync                                                                                    | C               |
| DR0PRI                                                     | I      | SPORT0 Receive Data Primary                                                                                  |                 |
| DR0SEC                                                     | I      | SPORT0 Receive Data Secondary                                                                                |                 |
| TSCLK0                                                     | I/O    | SPORT0 Transmit Serial Clock                                                                                 | D               |
| TFS0                                                       | I/O    | SPORT0 Transmit Frame Sync                                                                                   | C               |
| DT0PRI                                                     | O      | SPORT0 Transmit Data Primary                                                                                 | C               |
| DT0SEC                                                     | O      | SPORT0 Transmit Data Secondary                                                                               | C               |
| RSCLK1                                                     | I/O    | SPORT1 Receive Serial Clock                                                                                  | D               |

Table 9. Pin Descriptions (Continued)

| PinName           | Type   | Function                                                                                                       | Driver Type 1   |
|-------------------|--------|----------------------------------------------------------------------------------------------------------------|-----------------|
| RFS1              | I/O    | SPORT1 Receive Frame Sync                                                                                      | C               |
| DR1PRI            | I      | SPORT1 Receive Data Primary                                                                                    |                 |
| DR1SEC            | I      | SPORT1 Receive Data Secondary                                                                                  |                 |
| TSCLK1            | I/O    | SPORT1 Transmit Serial Clock                                                                                   | D               |
| TFS1              | I/O    | SPORT1 Transmit Frame Sync                                                                                     | C               |
| DT1PRI            | O      | SPORT1 Transmit Data Primary                                                                                   | C               |
| DT1SEC            | O      | SPORT1 Transmit Data Secondary                                                                                 | C               |
| UART Port         |        |                                                                                                                |                 |
| RX                | I      | UART Receive                                                                                                   |                 |
| TX                | O      | UART Transmit                                                                                                  | C               |
| Real-Time Clock   |        |                                                                                                                |                 |
| RTXI              | I      | RTC Crystal Input (This pin should be pulled low when not used.)                                               |                 |
| RTXO              | O      | RTC Crystal Output (Does not three-state in hibernate.)                                                        |                 |
| Clock             |        |                                                                                                                |                 |
| CLKIN             | I      | Clock/Crystal Input (This pin needs to be at a level or clocking.)                                             |                 |
| XTAL              | O      | Crystal Output                                                                                                 |                 |
| ModeControls      |        |                                                                                                                |                 |
| RESET             | I      | Reset (This pin is always active during core power-on.)                                                        |                 |
| NMI               | I      | Nonmaskable Interrupt (This pin should be pulled low when not used.)                                           |                 |
| BMODE1-0          | I      | Boot Mode Strap (These pins must be pulled to the state required for the desired boot mode.)                   |                 |
| Voltage Regulator |        |                                                                                                                |                 |
| VROUT1-0          | O      | External FET Drive (These pins should be left unconnected when unused and are driven high during hibernate.)   |                 |
| Supplies          |        |                                                                                                                |                 |
| V DDEXT           | P      | I/O Power Supply                                                                                               |                 |
| V DDINT           | P      | Core Power Supply                                                                                              |                 |
| V DDRTC           | P      | Real-TimeClockPowerSupply(ThispinshouldbeconnectedtoV DDEXT whennotusedandshould remain powered at all times.) |                 |
| GND               | G      | External Ground                                                                                                |                 |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## SPECIFICATIONS

Component specifications are subject to change without notice.

## OPERATING CONDITIONS

| Parameter   | Parameter                            | Conditions                                                               | Min   | Nominal   | Max   | Unit   |
|-------------|--------------------------------------|--------------------------------------------------------------------------|-------|-----------|-------|--------|
| V DDINT     | Internal Supply Voltage 1            | Nonautomotive 400 MHz and 500 MHz speed grade models 2                   | 0.8   | 1.2       | 1.45  | V      |
| V DDINT     | Internal Supply Voltage 1            | Nonautomotive 533MHz speed grade models 2                                | 0.8   | 1.25      | 1.45  | V      |
| V DDINT     | Internal Supply Voltage 1            | 600 MHz speed grade models 2                                             | 0.8   | 1.30      | 1.45  | V      |
| V DDINT     | Internal Supply Voltage 1            | Automotive 400 MHz speed grade models 2                                  | 0.95  | 1.2       | 1.45  | V      |
| V DDINT     | Internal Supply Voltage 1            | Automotive 533 MHz speed grade models 2                                  | 0.95  | 1.25      | 1.45  | V      |
| V DDEXT     | External Supply Voltage 3            | Nonautomotive grade models 2                                             | 1.75  | 1.8/3.3   | 3.6   | V      |
| V DDEXT     | External Supply Voltage              | Automotive grade models 2                                                | 2.7   | 3.3       | 3.6   | V      |
| V DDRTC     | Real-Time Clock Power Supply Voltage | Nonautomotive grade models 2                                             | 1.75  | 1.8/3.3   | 3.6   | V      |
| V DDRTC     | Real-Time Clock Power Supply Voltage | Automotive grade models 2                                                | 2.7   | 3.3       | 3.6   | V      |
| V IH        | High Level Input Voltage 4, 5        | V DDEXT =1.85 V                                                          | 1.3   |           |       | V      |
| V IH        | High Level Input Voltage 4, 5        | V DDEXT =Maximum                                                         | 2.0   |           |       | V      |
| V IHCLKIN   | High Level Input Voltage 6           | V DDEXT =Maximum                                                         | 2.2   |           |       | V      |
| V IL        | Low Level Input Voltage 7            | V DDEXT =1.75 V                                                          |       |           | +0.3  | V      |
| V IL        | Low Level Input Voltage 7            | V DDEXT =2.7 V                                                           |       |           | +0.6  | V      |
| T J         | Junction Temperature                 | 160-Ball Chip Scale Ball Grid Array (CSP_BGA)@T AMBIENT = 0°C to +70°C   | 0     |           | +95   | °C     |
| T J         | Junction Temperature                 | 160-Ball Chip Scale Ball Grid Array (CSP_BGA)@T AMBIENT = -40°C to +85°C | -40   |           | +105  | °C     |
| T J         | Junction Temperature                 | 160-Ball Chip ScaleBallGridArray(CSP_BGA)@T AMBIENT =-40°Cto+105°C       | -40   |           | +125  | °C     |
| T J         | Junction Temperature                 | 169-Ball Plastic Ball Grid Array (PBGA)@T AMBIENT = -40°C to +105°C      | -40   |           | +125  | °C     |
| T J         | Junction Temperature                 | 169-Ball Plastic Ball Grid Array (PBGA)@T AMBIENT = -40°C to +85°C       | -40   |           | +105  | °C     |
| T J         | Junction Temperature                 | 176-Lead Quad Flatpack (LQFP)@T AMBIENT = -40°C to +85°C                 | -40   |           | +100  | °C     |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

The following three tables describe the voltage/frequency requirements for the processor clocks. Take care in selecting MSEL, SSEL, and CSEL ratios so as not to exceed the maximum core clock (Table 10 and Table 11) and system clock (Table 13) specifications. Table 12 describes phase-locked loop operating conditions.

Table 10. Core Clock (CCLK) Requirements-500 MHz, 533 MHz, and 600 MHz Models

| Parameter   | Parameter                                   | Internal Regulator Setting   |   Max | Unit   |
|-------------|---------------------------------------------|------------------------------|-------|--------|
| f CCLK      | CCLK Frequency (V DDINT = 1.3 V Minimum) 1  | 1.30 V                       |   600 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 1.2 V Minimum) 2  | 1.25 V                       |   533 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 1.14 V Minimum) 3 | 1.20 V                       |   500 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 1.045 V Minimum)  | 1.10 V                       |   444 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.95 V Minimum)   | 1.00 V                       |   400 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.85 V Minimum)   | 0.90 V                       |   333 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.8 V Minimum)    | 0.85 V                       |   250 | MHz    |

Table 11. Core Clock (CCLK) Requirements-400 MHz Models 1

| Parameter   | Parameter                                  | Internal Regulator Setting   | T J = 125°C Max   |   All 2 Other T J Max | Unit   |
|-------------|--------------------------------------------|------------------------------|-------------------|-----------------------|--------|
| f CCLK      | CCLK Frequency (V DDINT = 1.14 V Minimum)  | 1.20 V                       | 400               |                   400 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 1.045 V Minimum) | 1.10 V                       | 333               |                   364 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.95 V Minimum)  | 1.00 V                       | 295               |                   333 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.85 V Minimum)  | 0.90 V                       |                   |                   280 | MHz    |
| f CCLK      | CCLK Frequency (V DDINT = 0.8 V Minimum)   | 0.85 V                       |                   |                   250 | MHz    |

Table 12. Phase-Locked Loop Operating Conditions

| Parameter   | Parameter                                     |   Min | Max        | Unit   |
|-------------|-----------------------------------------------|-------|------------|--------|
| f VCO       | Voltage Controlled Oscillator (VCO) Frequency |    50 | Max f CCLK | MHz    |

Table 13. System Clock (SCLK) Requirements

| Parameter 1   |                                          | V DDEXT = 1.8V Max   | V DDEXT = 2.5 V/3.3V Max   | Unit   |
|---------------|------------------------------------------|----------------------|----------------------------|--------|
| CSP_BGA/PBGA  |                                          |                      |                            |        |
| f SCLK        | CLKOUT/SCLK Frequency (V DDINT  1.14 V) | 100                  | 133                        | MHz    |
| f SCLK        | CLKOUT/SCLK Frequency (V DDINT  1.14 V) | 100                  | 100                        | MHz    |
| LQFP          |                                          |                      |                            |        |
| f SCLK        | CLKOUT/SCLK Frequency (V DDINT  1.14 V) | 100                  | 133                        | MHz    |
| f SCLK        | CLKOUT/SCLK Frequency (V DDINT  1.14 V) | 83                   | 83                         | MHz    |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ELECTRICAL CHARACTERISTICS

|                  |                                    |                                                                                                |             | 400MHz 1   | 400MHz 1                        | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2   | 500MHz/533MHz/600MHz 2   |       |
|------------------|------------------------------------|------------------------------------------------------------------------------------------------|-------------|------------|---------------------------------|--------------------------|--------------------------|--------------------------|-------|
| Parameter        | Parameter                          | Test Conditions                                                                                | Min         | Typical    | Max                             | Min                      | Typical                  | Max                      | Unit  |
| V OH             | High Level Output Voltage 3        | V DDEXT = 1.75 V, I OH = -0.5mA V DDEXT = 2.25 V, I OH = -0.5mA V DDEXT = 3.0 V, I OH = -0.5mA | 1.5 1.9 2.4 |            |                                 | 1.5 1.9 2.4              |                          |                          | V V V |
| V OL             | Low Level Output Voltage 3         | V DDEXT = 1.75 V, I OL = 2.0mA V DDEXT = 2.25 V/3.0 V, I OL = 2.0mA                            |             |            | 0.2 0.4                         |                          | 0.2 0.4                  |                          | V V   |
| I IH             | High Level Input Current 4         | V DDEXT = Max, V IN = V DD Max                                                                 |             |            | 10.0                            |                          |                          | 10.0                     | µA    |
| I IHP            | High Level Input Current JTAG 5    | V DDEXT = Max, V IN = V DD Max                                                                 |             |            | 50.0                            |                          |                          | 50.0                     | µA    |
| I IL 6           | Low Level Input Current 4          | V DDEXT = Max, V IN = 0 V                                                                      |             |            | 10.0                            |                          |                          | 10.0                     | µA    |
| I OZH            | Three-State Leakage Current 7      | V DDEXT = Max, V IN = V DD Max                                                                 |             |            | 10.0                            |                          |                          | 10.0                     | µA    |
| I OZL 6          | Three-State Leakage Current 7      | V DDEXT = Max, V IN = 0 V                                                                      |             |            | 10.0                            |                          |                          | 10.0                     | µA    |
| C IN             | Input Capacitance 8                | f IN = 1 MHz, T AMBIENT = 25°C, V IN = 2.5 V                                                   |             | 4          | 8 9                             |                          | 4                        | 8 9                      | pF    |
| I DDDEEPSLEEP 10 | V DDINT Current in Deep Sleep Mode | V DDINT = 1.0 V, f CCLK = 0 MHz, T J = 25°C, ASF = 0.00                                        |             | 7.5        |                                 | 32.5                     |                          |                          | mA    |
| I DDSLEEP        | V DDINT Current in Sleep Mode      | V DDINT = 0.8 V, T J = 25°C, SCLK = 25MHz                                                      |             |            | 10                              |                          |                          | 37.5                     | mA    |
| I DD-TYP 11      | V DDINT Current                    | V DDINT =1.14V,f CCLK =400MHz, T J = 25°C                                                      |             | 125        |                                 | 152                      |                          |                          | mA    |
| I DD-TYP 11      | V DDINT Current                    | V DDINT = 1.2 V, f CCLK = 500 MHz, T J = 25°C                                                  |             |            |                                 | 190                      |                          |                          | mA    |
| I DD-TYP 11      | V DDINT Current                    | V DDINT = 1.2 V, f CCLK = 533 MHz, T J = 25°C                                                  |             |            |                                 | 200                      |                          |                          | mA    |
| I DD-TYP 11      | V DDINT Current                    | V DDINT = 1.3 V, f CCLK = 600 MHz, T J = 25°C                                                  |             |            |                                 | 245                      |                          |                          | mA    |
| I DDHIBERNATE 10 | V DDEXT Current in Hibernate State | V DDEXT = 3.6 V, CLKIN = 0 MHz, T J =Max,voltageregulatoroff (V DDINT = 0 V)                   |             | 50         | 100                             | 50                       |                          | 100                      |  A   |
| I DDRTC          | V DDRTC Current                    | V DDRTC = 3.3 V, T J = 25 ° C                                                                  |             | 20         |                                 | 20                       |                          |                          |  A   |
| I DDDEEPSLEEP 10 | V DDINT Current in Deep Sleep Mode | f CCLK = 0 MHz                                                                                 |             | 6          | Table 15                        | 16                       |                          | Table 14                 | mA    |
| I DD-INT         | V DDINT Current                    | f CCLK >0MHz                                                                                   |             |            | I DDDEEPSLEEP +(Table 17  ASF) |                          | I  ASF)                 | DDDEEPSLEEP +(Table 17   | mA    |

5 Applies to JTAG input pins (TCK, TDI, TMS, TRST).

6 Absolute value.

7 Applies to three-statable pins.

8 Applies to all signal pins.

9 Guaranteed, but not tested.

10 See the ADSP-BF533 Blackfin Processor Hardware Reference Manual for definitions of sleep, deep sleep, and hibernate operating modes.

11 See Table 16 for the list of IDDINT power vectors covered  by various Activity Scaling Factors (ASF).

System designers should refer to Estimating Power for the ADSP-BF531/BF532/BF533 Blackfin Processors (EE-229) , which provides detailed information for optimizing designs for lowest power. All topics discussed in this section are described in detail in EE-229. Total power dissipation has two components:

1. Static, including leakage current
2. Dynamic, due to transistor switching characteristics

Many operating conditions can also affect power dissipation, including temperature, voltage, operating frequency, and processor activity. Electrical Characteristics on Page 22 shows the current dissipation for internal circuitry (V DDINT). I DDDEEPSLEEP specifies static power dissipation as a function of voltage (VDDINT) and temperature (see Table 14 or Table 15), and IDDINT specifies the total power specification for the listed test conditions, including the dynamic component as a function of voltage (VDDINT) and frequency (Table 17).

The dynamic component is also subject to an Activity Scaling Factor (ASF) which represents application code running on the processor (Table 16).

Table 14. Static Current-500 MHz, 533 MHz, and 600 MHz Speed Grade Devices (mA) 1

|            | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   |
|------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| T J (°C) 2 | 0.80V                  | 0.85V                  | 0.90V                  | 0.95V                  | 1.00V                  | 1.05V                  | 1.10V                  | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.32V                  | 1.375V                 | 1.43V                  | 1.45V                  |
| -45        | 4.3                    | 5.3                    | 5.9                    | 7.0                    | 8.2                    | 9.8                    | 11.2                   | 13.0                   | 15.2                   | 17.7                   | 20.2                   | 21.6                   | 25.5                   | 30.1                   | 32.0                   |
| 0          | 18.8                   | 21.3                   | 24.1                   | 27.8                   | 31.6                   | 35.6                   | 40.1                   | 45.3                   | 51.4                   | 58.1                   | 65.0                   | 68.5                   | 78.4                   | 89.8                   | 94.3                   |
| 25         | 35.3                   | 39.9                   | 45.0                   | 50.9                   | 57.3                   | 64.4                   | 72.9                   | 80.9                   | 90.3                   | 101.4                  | 112.1                  | 118.0                  | 133.7                  | 151.6                  | 158.7                  |
| 40         | 52.3                   | 58.5                   | 65.1                   | 73.3                   | 81.3                   | 90.9                   | 101.2                  | 112.5                  | 125.5                  | 138.7                  | 154.4                  | 160.6                  | 180.6                  | 203.1                  | 212.0                  |
| 55         | 73.6                   | 82.5                   | 92.0                   | 102.7                  | 114.4                  | 126.3                  | 141.2                  | 155.7                  | 172.7                  | 191.1                  | 212.1                  | 220.8                  | 247.6                  | 277.7                  | 289.5                  |
| 70         | 100.8                  | 112.5                  | 124.5                  | 137.4                  | 152.6                  | 168.4                  | 186.5                  | 205.4                  | 227.0                  | 250.3                  | 276.2                  | 287.1                  | 320.4                  | 357.4                  | 371.9                  |
| 85         | 133.3                  | 148.5                  | 164.2                  | 180.5                  | 198.8                  | 219.0                  | 241.0                  | 264.5                  | 290.6                  | 319.7                  | 350.2                  | 364.6                  | 404.9                  | 449.7                  | 467.2                  |
| 100        | 178.3                  | 196.3                  | 216.0                  | 237.6                  | 259.9                  | 284.6                  | 311.9                  | 342.0                  | 373.1                  | 408.0                  | 446.1                  | 462.6                  | 511.1                  | 564.7                  | 585.6                  |
| 115        | 223.3                  | 245.9                  | 270.2                  | 295.7                  | 323.5                  | 353.3                  | 386.1                  | 421.1                  | 460.1                  | 500.9                  | 545.0                  | 566.5                  | 624.3                  | 688.1                  | 712.8                  |
| 125        | 278.5                  | 305.8                  | 334.1                  | 364.3                  | 397.4                  | 432.4                  | 470.6                  | 509.3                  | 553.4                  | 600.6                  | 652.1                  | 676.5                  | 742.1                  | 814.1                  | 841.9                  |

Table 15. Static Current-400 MHz Speed Grade Devices (mA) 1

|            | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   |
|------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| T J (°C) 2 | 0.80V                  | 0.85V                  | 0.90V                  | 0.95V                  | 1.00V                  | 1.05V                  | 1.10V                  | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.32V                  |
| -45        | 0.9                    | 1.1                    | 1.3                    | 1.5                    | 1.8                    | 2.2                    | 2.6                    | 3.1                    | 3.8                    | 4.4                    | 5.0                    | 5.4                    |
| 0          | 3.3                    | 3.7                    | 4.2                    | 4.8                    | 5.5                    | 6.3                    | 7.2                    | 8.1                    | 8.9                    | 10.1                   | 11.2                   | 11.9                   |
| 25         | 7.5                    | 8.4                    | 9.4                    | 10.0                   | 11.2                   | 12.6                   | 14.1                   | 15.5                   | 17.2                   | 19.0                   | 21.2                   | 21.9                   |
| 40         | 12.0                   | 13.1                   | 14.3                   | 15.9                   | 17.4                   | 19.4                   | 21.5                   | 23.5                   | 25.8                   | 28.1                   | 30.8                   | 32.0                   |
| 55         | 18.3                   | 20.0                   | 21.9                   | 23.6                   | 26.0                   | 28.2                   | 30.8                   | 33.7                   | 36.8                   | 39.8                   | 43.4                   | 45.0                   |
| 70         | 27.7                   | 30.3                   | 32.6                   | 35.3                   | 38.2                   | 41.7                   | 45.2                   | 49.0                   | 52.8                   | 57.6                   | 62.4                   | 64.2                   |
| 85         | 38.2                   | 41.7                   | 44.9                   | 48.6                   | 52.7                   | 57.3                   | 61.7                   | 66.7                   | 72.0                   | 77.5                   | 83.9                   | 86.5                   |
| 100        | 54.1                   | 58.1                   | 63.2                   | 67.8                   | 73.2                   | 78.8                   | 84.9                   | 91.5                   | 98.4                   | 106.0                  | 113.8                  | 117.2                  |
| 115        | 73.9                   | 80.0                   | 86.3                   | 91.9                   | 99.1                   | 106.6                  | 114.1                  | 122.4                  | 131.1                  | 140.9                  | 151.1                  | 155.5                  |
| 125        | 98.7                   | 106.3                  | 113.8                  | 122.1                  | 130.8                  | 140.2                  | 149.7                  | 160.4                  | 171.9                  | 183.8                  | 197.0                  | 202.4                  |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Table 16. Activity Scaling Factors

| I DDINT Power Vector 1   |   Activity Scaling Factor (ASF) 2 |
|--------------------------|-----------------------------------|
| I DD-PEAK                |                              1.27 |
| I DD-HIGH                |                              1.25 |
| I DD-TYP                 |                              1    |
| I DD-APP                 |                              0.86 |
| I DD-NOP                 |                              0.72 |
| I DD-IDLE                |                              0.41 |

Table 17. Dynamic Current (mA, with ASF = 1.0) 1

|                   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   |
|-------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| Frequency (MHz) 2 | 0.80V                  | 0.85V                  | 0.90V                  | 0.95V                  | 1.00V                  | 1.05V                  | 1.10V                  | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.32V                  | 1.375V                 | 1.43V                  | 1.45V                  |
| 50                | 12.7                   | 13.9                   | 15.3                   | 16.8                   | 18.1                   | 19.4                   | 21.0                   | 22.3                   | 24.0                   | 25.4                   | 26.4                   | 27.2                   | 28.7                   | 30.3                   | 30.7                   |
| 100               | 22.6                   | 24.2                   | 26.2                   | 28.1                   | 30.1                   | 31.8                   | 34.7                   | 36.2                   | 38.4                   | 40.5                   | 43.0                   | 43.4                   | 45.7                   | 47.9                   | 48.9                   |
| 200               | 40.8                   | 44.1                   | 46.9                   | 50.3                   | 53.3                   | 56.9                   | 59.9                   | 63.1                   | 66.7                   | 70.2                   | 73.8                   | 75.0                   | 78.7                   | 82.4                   | 84.6                   |
| 250               | 50.1                   | 53.8                   | 57.2                   | 61.4                   | 64.7                   | 68.9                   | 72.9                   | 76.8                   | 81.0                   | 85.1                   | 89.3                   | 90.8                   | 95.2                   | 99.6                   | 102.0                  |
| 300               | N/A                    | 63.5                   | 67.4                   | 72.4                   | 76.2                   | 81.0                   | 85.9                   | 90.6                   | 95.2                   | 100.0                  | 104.8                  | 106.6                  | 111.8                  | 116.9                  | 119.4                  |
| 375               | N/A                    | N/A                    | N/A                    | 88.6                   | 93.5                   | 99.0                   | 104.6                  | 110.3                  | 116.0                  | 122.1                  | 128.0                  | 130.0                  | 136.2                  | 142.4                  | 145.5                  |
| 400               | N/A                    | N/A                    | N/A                    | 93.9                   | 99.3                   | 105.0                  | 110.8                  | 116.8                  | 123.0                  | 129.4                  | 135.7                  | 137.9                  | 144.6                  | 151.2                  | 154.3                  |
| 425               | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | 111.0                  | 117.3                  | 123.5                  | 129.9                  | 136.8                  | 143.2                  | 145.6                  | 152.6                  | 159.7                  | 162.8                  |
| 475               | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | 130.3                  | 136.8                  | 143.8                  | 151.4                  | 158.1                  | 161.1                  | 168.9                  | 176.6                  | 179.7                  |
| 500               | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | 143.5                  | 150.7                  | 158.7                  | 165.6                  | 168.8                  | 177.0                  | 185.2                  | 188.2                  |
| 533               | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | 160.4                  | 168.8                  | 176.5                  | 179.6                  | 188.2                  | 196.8                  | 200.5                  |
| 600               | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | N/A                    | 196.2                  | 199.6                  | 209.3                  | 219.0                  | 222.6                  |

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 18 may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods can affect device reliability.

Table 18. Absolute Maximum Ratings

| Parameter                                 | Rating                |
|-------------------------------------------|-----------------------|
| Internal (Core) Supply Voltage (V DDINT ) | -0.3 V to +1.45 V     |
| External (I/O) Supply Voltage (V DDEXT )  | -0.5 V to +3.8 V      |
| Input Voltage 1, 2                        | -0.5 V to +3.8 V      |
| Output Voltage Swing                      | -0.5VtoV DDEXT +0.5 V |
| Storage Temperature Range                 | -65°C to +150°C       |
| Junction Temperature While Biased         | 125°C                 |

Table 19. Maximum Duty Cycle for Input Transient Voltage 1

|   V IN Min (V) 2 |   V IN Max(V) 2 | MaximumDutyCycle 3   |
|------------------|-----------------|----------------------|
|             -0.5 |             3.8 | 100%                 |
|             -0.7 |             4   | 40%                  |
|             -0.8 |             4.1 | 25%                  |
|             -0.9 |             4.2 | 15%                  |
|             -1   |             4.3 | 10%                  |

## ESD SENSITIVITY

## ESD  (electrostatic  discharge)  sensitive  device.

<!-- image -->

Charged  devices  and  circuit  boards  can  discharge without detection. Although  this product features patented  or  proprietary  protection  circuitry,  damage may  occur  on  devices  subjected  to  high  energy  ESD. Therefore, proper ESD precautions should be taken to avoid  performance  degradation or loss of functionality.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## PACKAGE INFORMATION

The information presented in Figure 10 and Table 20 provides details about the package branding for the Blackfin processors. For a complete listing of product availability, see the Ordering Guide on Page 63.

Figure 10. Product Information on Package

<!-- image -->

## Table 20. Package Brand Information 1

| Brand Key   | Field Description                            |
|-------------|----------------------------------------------|
| ADSP-BF53x  | Either ADSP-BF531, ADSP-BF532, or ADSP-BF533 |
| t           | Temperature Range                            |
| pp          | Package Type                                 |
| Z           | RoHS Compliant Part                          |
| ccc         | See Ordering Guide                           |
| vvvvvv.x    | Assembly Lot Code                            |
| n.n         | Silicon Revision                             |
| #           | RoHS Compliant Designation                   |
| yyww        | Date Code                                    |

## TIMING SPECIFICATIONS

## Clock and Reset Timing

Table 21 and Figure 11 describe clock and reset operations. Per Absolute Maximum Ratings on Page 25, combinations of CLKIN and clock multipliers/divisors must not result in core/

Table 21. Clock and Reset Timing

| Parameter           | Parameter                                        | Min         | Max        | Unit   |
|---------------------|--------------------------------------------------|-------------|------------|--------|
| Timing Requirements | Timing Requirements                              |             |            |        |
| t CKIN              | CLKIN Period 1, 2, 3, 4                          | 25.0        | 100.0      | ns     |
| t CKINL             | CLKIN Low Pulse                                  | 10.0        |            | ns     |
| t CKINH             | CLKIN High Pulse                                 | 10.0        |            | ns     |
| t WRST              | RESET Asserted Pulse Width Low 5                 | 11  t CKIN |            | ns     |
| t NOBOOT            | RESET Deassertion to First External Access Delay | 3  t CKIN  | 5  t CKIN | ns     |

Figure 11. Clock and Reset Timing

<!-- image -->

Table 22. Power-Up Reset Timing

| Parameter          | Parameter                                                                                                   | Min           | Max   | Unit   |
|--------------------|-------------------------------------------------------------------------------------------------------------|---------------|-------|--------|
| Timing Requirement | Timing Requirement                                                                                          |               |       |        |
| t RST_IN_PWR       | RESET Deasserted After the V DDINT , V DDEXT , V DDRTC , and CLKIN Pins Are Stable and Within Specification | 3500  t CKIN |       | ns     |

In Figure 12, V DD\_SUPPLIES is V DDINT , V DDEXT , V DDRTC

<!-- image -->

Figure 12. Power-Up Reset Timing

## ADSP-BF531/ADSP-BF532/ADSP-BF533

system clocks exceeding the maximum limits allowed for the processor, including system clock restrictions related to supply voltage.

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Asynchronous Memory Read Cycle Timing

Table 23. Asynchronous Memory Read Cycle Timing

|                           |                              | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |
|---------------------------|------------------------------|------------------|------------------|------------------------|------------------------|
| Parameter                 |                              | Min              | Max              | Min                    | Unit                   |
| Timing Requirements       | Timing Requirements          |                  |                  |                        |                        |
| t SDAT                    | DATA15-0 Setup Before CLKOUT | 2.1              |                  | 2.1                    | ns                     |
| t HDAT                    | DATA15-0 Hold After CLKOUT   | 1.0              |                  | 0.8                    | ns                     |
| t SARDY                   | ARDY Setup Before CLKOUT     | 4.0              |                  | 4.0                    | ns                     |
| t HARDY                   | ARDY Hold After CLKOUT       | 1.0              |                  | 0.0                    | ns                     |
| Switching Characteristics | Switching Characteristics    |                  |                  |                        |                        |
| t DO                      | Output Delay After CLKOUT 1  |                  | 6.0              |                        | ns                     |
| t HO                      | Output Hold After CLKOUT 1   | 1.0              |                  | 0.8                    | ns                     |

Figure 13. Asynchronous Memory Read Cycle Timing

<!-- image -->

## Asynchronous Memory Write Cycle Timing

Table 24. Asynchronous Memory Write Cycle Timing

|                           |                               | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |      |
|---------------------------|-------------------------------|------------------|------------------|------------------------|------------------------|------|
| Parameter                 |                               | Min              | Max              | Min                    | Max                    | Unit |
| Timing Requirements       | Timing Requirements           |                  |                  |                        |                        |      |
| t SARDY                   | ARDY Setup Before CLKOUT      | 4.0              |                  | 4.0                    |                        | ns   |
| t HARDY                   | ARDY Hold After CLKOUT        | 1.0              |                  | 0.0                    |                        | ns   |
| Switching Characteristics | Switching Characteristics     |                  |                  |                        |                        |      |
| t DDAT                    | DATA15-0 Disable After CLKOUT |                  | 6.0              |                        | 6.0                    | ns   |
| t ENDAT                   | DATA15-0 Enable After CLKOUT  | 1.0              |                  | 1.0                    |                        | ns   |
| t DO                      | Output Delay After CLKOUT 1   |                  | 6.0              |                        | 6.0                    | ns   |
| t HO                      | Output Hold After CLKOUT 1    | 1.0              |                  | 0.8                    | ns                     |      |

Figure 14. Asynchronous Memory Write Cycle Timing

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## SDRAM Interface Timing

## Table 25. SDRAM Interface Timing 1

|                           |                                          | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |
|---------------------------|------------------------------------------|------------------|------------------|------------------------|------------------------|
| Parameter                 |                                          | Min              | Max              | Min                    | Unit                   |
| Timing Requirements       | Timing Requirements                      |                  |                  |                        |                        |
| t SSDAT                   | DATA Setup Before CLKOUT                 | 2.1              |                  | 1.5                    | ns                     |
| t HSDAT                   | DATA Hold After CLKOUT                   | 0.8              |                  | 0.8                    | ns                     |
| Switching Characteristics | Switching Characteristics                |                  |                  |                        |                        |
| t DCAD                    | Command, ADDR, Data Delay After CLKOUT 2 |                  | 6.0              |                        | ns                     |
| t HCAD                    | Command, ADDR, Data Hold After CLKOUT 2  | 1.0              |                  | 1.0                    | ns                     |
| t DSDAT                   | Data Disable After CLKOUT                |                  | 6.0              |                        | ns                     |
| t ENSDAT                  | Data Enable After CLKOUT                 | 1.0              |                  | 1.0                    | ns                     |
| t SCLK                    | CLKOUT Period 3                          | 10.0             |                  | 7.5                    | ns                     |
| t SCLKH                   | CLKOUT Width High                        | 2.5              |                  | 2.5                    | ns                     |
| t SCLKL                   | CLKOUT Width Low                         | 2.5              |                  | 2.5                    | ns                     |

Figure 15. SDRAM Interface Timing

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## External Port Bus Request and Grant Cycle Timing

Table 26 and Figure 16 describe external port bus request and bus grant operations.

## Table 26. External Port Bus Request and Grant Cycle Timing

Figure 16. External Port Bus Request and Grant Cycle Timing

|                                                       | V DDEXT = 1.8V LQFP/PBGA Packages   | V DDEXT = 1.8V LQFP/PBGA Packages   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 2.5 V/3.3V All Packages   | V DDEXT = 2.5 V/3.3V All Packages   |      |
|-------------------------------------------------------|-------------------------------------|-------------------------------------|----------------------------------|----------------------------------|-------------------------------------|-------------------------------------|------|
| Parameter                                             | Min                                 | Max                                 | Min                              | Max                              | Min                                 | Max                                 | Unit |
| Timing Requirements                                   |                                     |                                     |                                  |                                  |                                     |                                     |      |
| t BS BR Asserted to CLKOUT High Setup                 | 4.6                                 |                                     | 4.6                              |                                  | 4.6                                 |                                     | ns   |
| t BH CLKOUT High to BR Deasserted Hold Time           | 1.0                                 |                                     | 1.0                              |                                  | 0.0                                 |                                     | ns   |
| Switching Characteristics                             |                                     |                                     |                                  |                                  |                                     |                                     |      |
| t SD CLKOUT Low to AMSx, Address, and ARE/AWE Disable |                                     | 4.5                                 |                                  | 4.5                              |                                     | 4.5                                 | ns   |
| t SE CLKOUT Low to AMSx, Address, and ARE/AWE Enable  |                                     | 4.5                                 |                                  | 4.5                              |                                     | 4.5                                 | ns   |
| t DBG CLKOUT High to BG High Setup                    |                                     | 6.0                                 |                                  | 5.5                              |                                     | 3.6                                 | ns   |
| t EBG CLKOUT High to BG Deasserted Hold Time          |                                     | 6.0                                 |                                  | 4.6                              |                                     | 3.6                                 | ns   |
| t DBH CLKOUT High to BGH High Setup                   |                                     | 6.0                                 |                                  | 5.5                              |                                     | 3.6                                 | ns   |
| t EBH CLKOUT High to BGH Deasserted Hold Time         |                                     | 6.0                                 |                                  | 4.6                              |                                     | 3.6                                 | ns   |

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Parallel Peripheral Interface Timing

Table 27 and Figure 17 through Figure 22 describe parallel peripheral interface operations.

## Table 27. Parallel Peripheral Interface Timing

|                                                             | V DDEXT = 1.8V LQFP/PBGA                                                                      | V DDEXT = 1.8V LQFP/PBGA   | Packages   | Packages   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 2.5 V/3.3V All Packages   | V DDEXT = 2.5 V/3.3V All Packages   |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------|------------|------------|----------------------------------|----------------------------------|-------------------------------------|-------------------------------------|
| Parameter                                                   |                                                                                               | Min                        | Max        | Min        | Max                              | Min                              | Max                                 | Unit                                |
| Timing Requirements                                         | Timing Requirements                                                                           |                            |            |            |                                  |                                  |                                     |                                     |
| t PCLKW                                                     | PPI_CLK Width                                                                                 | 8.0                        |            | 8.0        |                                  | 6.0                              |                                     | ns                                  |
| t PCLK                                                      | PPI_CLK Period 1                                                                              | 20.0                       |            | 20.0       |                                  | 15.0                             |                                     | ns                                  |
| t SFSPE                                                     | External Frame Sync Setup Before PPI_CLK Edge (Nonsampling Edge for Rx, Sampling Edge for Tx) | 6.0                        |            | 6.0        |                                  | 4.0 2                            |                                     | ns ns                               |
| t HFSPE                                                     | External Frame Sync Hold After PPI_CLK                                                        | 1.0 2                      |            | 1.0 2      |                                  | 1.0 2                            |                                     | ns                                  |
| t SDRPE                                                     | Receive Data Setup Before PPI_CLK                                                             | 3.5                        |            | 3.5        |                                  | 3.5                              |                                     | ns                                  |
| t HDRPE                                                     | Receive Data Hold After PPI_CLK                                                               | 1.5                        |            | 1.5        |                                  | 1.5                              |                                     | ns                                  |
| Switching Characteristics-GP Output and Frame Capture Modes | Switching Characteristics-GP Output and Frame Capture Modes                                   |                            |            |            |                                  |                                  |                                     |                                     |
| t DFSPE                                                     | Internal Frame Sync Delay After PPI_CLK                                                       |                            | 11.0       |            | 8.0                              |                                  | 8.0                                 | ns                                  |
| t HOFSPE                                                    | Internal Frame Sync Hold After PPI_CLK                                                        | 1.7                        |            | 1.7        |                                  | 1.7                              |                                     | ns                                  |
| t DDTPE                                                     | Transmit Data Delay After PPI_CLK                                                             |                            | 11.0       |            | 9.0                              |                                  | 9.0                                 | ns                                  |
| t HDTPE                                                     | Transmit Data Hold After PPI_CLK                                                              | 1.8                        |            | 1.8        |                                  | 1.8                              |                                     | ns                                  |

Figure 17. PPI GP Rx Mode with Internal Frame Sync Timing

<!-- image -->

Figure 18. PPI GP Rx Mode with External Frame Sync Timing (PPI\_CONTROL Bit 8 = 1)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Figure 22. PPI GP Tx Mode with External Frame Sync Timing (PPI\_CONTROL Bit 8 = 0)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Serial Port Timing

Table 28 through Table 31 on Page 37 and Figure 23 on Page 35 through Figure 26 on Page 37 describe Serial Port operations.

## Table 28. Serial Ports-External Clock

|           |                                                                        | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |
|-----------|------------------------------------------------------------------------|------------------|------------------|------------------------|------------------------|
| Parameter |                                                                        | Min              | Max              | Min                    | Unit                   |
| Timing    | Requirements                                                           |                  |                  |                        |                        |
| t SFSE    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 3.0              |                  | 3.0                    | ns                     |
| t HFSE    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   | 3.0              |                  | 3.0                    | ns                     |
| t SDRE    | Receive Data Setup Before RSCLKx 1                                     | 3.0              |                  | 3.0                    | ns                     |
| t HDRE    | Receive Data Hold After RSCLKx 1                                       | 3.0              |                  | 3.0                    | ns                     |
| t SCLKEW  | TSCLKx/RSCLKx Width                                                    | 8.0              |                  | 4.5                    | ns                     |
| t SCLKE   | TSCLKx/RSCLKx Period                                                   | 20.0             |                  | 15.0 2                 | ns                     |
| t SUDTE   | Start-Up Delay From SPORT Enable To First External TFSx 3              | 4.0 × t SCLKE    |                  | 4.0 × t SCLKE          | ns                     |
| t SUDRE   | Start-Up Delay From SPORT Enable To First External RFSx 3              | 4.0 × t SCLKE    |                  | 4.0 × t SCLKE          | ns                     |
| Switching | Characteristics                                                        |                  |                  |                        |                        |
| t DFSE    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 4 |                  | 10.0             |                        | ns                     |
| t HOFSE   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 1  | 0.0              |                  | 0.0                    | ns                     |
| t DDTE    | Transmit Data Delay After TSCLKx 1                                     |                  | 10.0             |                        | ns                     |
| t HDTE    | Transmit Data Hold After TSCLKx 1                                      | 0.0              |                  | 0.0                    | ns                     |

## Table 29. Serial Ports-Internal Clock

|                           | V DDEXT = 1.8V                                                         | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |     |      |
|---------------------------|------------------------------------------------------------------------|------------------|------------------------|------------------------|-----|------|
| Parameter                 | Min                                                                    | Max              |                        | Min                    | Max | Unit |
| Timing Requirements       |                                                                        |                  |                        |                        |     |      |
| t SFSI                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 11.0             |                        | 9.0                    |     | ns   |
| t HFSI                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   |  2.0            |                        |  2.0                  | ns  |      |
| t SDRI                    | Receive Data Setup Before RSCLKx 1                                     | 9.5              |                        | 9.0                    | ns  |      |
| t HDRI                    | Receive Data Hold After RSCLKx 1                                       | 0.0              |                        | 0.0                    |     | ns   |
| Switching Characteristics |                                                                        |                  |                        |                        |     |      |
| t DFSI                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 2 |                  | 3.0                    |                        | 3.0 | ns   |
| t HOFSI                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 1  |  1.0            |                        |  1.0                  |     | ns   |
| t DDTI                    | Transmit Data Delay After TSCLKx 1                                     |                  | 3.0                    |                        | 3.0 | ns   |
| t HDTI                    | Transmit Data Hold After TSCLKx 1                                      |  2.5            |                        |  2.0                  |     | ns   |
| t SCLKIW                  | TSCLKx/RSCLKx Width                                                    | 6.0              |                        | 4.5                    | ns  |      |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Figure 24. Serial Port Start Up with External Clock and Frame Sync

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Table 30. Serial Ports-Enable and Three-State

|                     |                                                 | V DDEXT = 1.8V Min   | Max   | V DDEXT = 2.5 V/3.3V Max   |      |
|---------------------|-------------------------------------------------|----------------------|-------|----------------------------|------|
| Parameter Switching | Parameter Switching                             |                      |       | Min                        | Unit |
| Characteristics     | Characteristics                                 |                      |       |                            |      |
| t DTENE             | Data Enable Delay from External TSCLKx 1        | 0                    |       | 0                          | ns   |
| t DDTTE             | Data Disable Delay from External TSCLKx 1, 2, 3 |                      | 10.0  | 10.0                       | ns   |
| t DTENI             | Data Enable Delay from Internal TSCLKx 1        |  2.0                |       |  2.0                      | ns   |
| t DDTTI             | Data Disable Delay from Internal TSCLKx 1, 2, 3 |                      | 3.0   | 3.0                        | ns   |

Figure 25. Enable and Three-State

<!-- image -->

## Table 31. External Late Frame Sync

|                                                                                             | V DDEXT = 1.8V LQFP/PBGA Packages   | V DDEXT = 1.8V LQFP/PBGA Packages   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 2.5 V/3.3V All Packages   | V DDEXT = 2.5 V/3.3V All Packages   |      |
|---------------------------------------------------------------------------------------------|-------------------------------------|-------------------------------------|----------------------------------|----------------------------------|-------------------------------------|-------------------------------------|------|
| Parameter                                                                                   | Min                                 | Max                                 | Min                              | Max                              | Min                                 | Max                                 | Unit |
| Switching Characteristics                                                                   |                                     |                                     |                                  |                                  |                                     |                                     |      |
| t DDTLFSE DataDelayfromLateExternalTFSxorExternalRFSx in multichannel mode withMCMEN=0 1, 2 |                                     | 10.5                                |                                  | 10.0                             |                                     | 10.0                                | ns   |
| t DTENLFS Data Enable from Late FS or in multichannelmode withMCMEN=0 1, 2                  | 0                                   |                                     | 0                                |                                  | 0                                   |                                     | ns   |

Figure 26. External Late Frame Sync

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Serial Peripheral Interface (SPI) Port-Master Timing

## Table 32. Serial Peripheral Interface (SPI) Port-Master Timing

Figure 27. Serial Peripheral Interface (SPI) Port-Master Timing

|                           | V DDEXT = 1.8V LQFP/PBGA Packages               | V DDEXT = 1.8V LQFP/PBGA Packages   | V DDEXT =        | 1.8V CSP_BGAPackage   | 1.8V CSP_BGAPackage   | V DDEXT = 2.5 V/3.3V All Packages   |      |
|---------------------------|-------------------------------------------------|-------------------------------------|------------------|-----------------------|-----------------------|-------------------------------------|------|
| Parameter                 | Min                                             | Max                                 | Min              | Max                   | Min                   | Max                                 | Unit |
| Timing Requirements       | Timing Requirements                             |                                     |                  |                       |                       |                                     |      |
| t SSPIDM                  | Data Input Valid to SCK Edge (Data Input Setup) | 10.5                                | 9                |                       | 7.5                   |                                     | ns   |
| t HSPIDM                  | SCK Sampling Edge to Data Input Invalid         | -1.5                                | -1.5             |                       | -1.5                  |                                     | ns   |
| Switching Characteristics | Switching Characteristics                       |                                     |                  |                       |                       |                                     |      |
| t SDSCIM                  | SPISELx Low to First SCK Edge                   | 2 × t SCLK - 1.5                    | 2 × t SCLK - 1.5 |                       | 2 × t SCLK - 1.5      |                                     | ns   |
| t SPICHM                  | Serial Clock High Period                        | 2 × t SCLK - 1.5                    | 2 × t SCLK - 1.5 |                       | 2 × t SCLK - 1.5      |                                     | ns   |
| t SPICLM                  | Serial Clock Low Period                         | 2 × t SCLK - 1.5                    | 2 × t SCLK - 1.5 |                       | 2 × t SCLK - 1.5      |                                     | ns   |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK - 1.5                    | 4 × t SCLK - 1.5 |                       | 4 × t SCLK - 1.5      |                                     | ns   |
| t HDSM                    | Last SCK Edge to SPISELx High                   | 2 × t SCLK - 1.5                    | 2 × t SCLK - 1.5 |                       | 2 × t SCLK - 1.5      |                                     | ns   |
| t SPITDM                  | Sequential Transfer Delay                       | 2 × t SCLK - 1.5                    | 2 × t SCLK - 1.5 |                       | 2 × t SCLK - 1.5      |                                     | ns   |
| t DDSPIDM                 | SCK Edge to Data Out Valid (Data Out Delay)     | 6                                   |                  | 6                     |                       | 6                                   | ns   |
| t HDSPIDM                 | SCK Edge to Data Out Invalid (Data Out Hold)    | -1.0                                | -1.0             |                       | -1.0                  |                                     | ns   |

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Serial Peripheral Interface (SPI) Port-Slave Timing

## Table 33. Serial Peripheral Interface (SPI) Port-Slave Timing

Figure 28. Serial Peripheral Interface (SPI) Port-Slave Timing

|           | V DDEXT = 1.8V LQFP/PBGA Packages               |                 |     | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 1.8V CSP_BGA Package   | V DDEXT = 2.5 V/3.3V All Packages   | V DDEXT = 2.5 V/3.3V All Packages   |      |
|-----------|-------------------------------------------------|-----------------|-----|----------------------------------|----------------------------------|-------------------------------------|-------------------------------------|------|
| Parameter |                                                 | Min             | Max | Min                              | Max                              | Min                                 | Max                                 | Unit |
| Timing    | Requirements                                    |                 |     |                                  |                                  |                                     |                                     |      |
| t SPICHS  | Serial Clock High Period                        | 2 × t SCLK -1.5 |     | 2 × t SCLK -1.5                  |                                  | 2 × t SCLK -1.5                     |                                     | ns   |
| t SPICLS  | Serial Clock Low Period                         | 2 × t SCLK -1.5 |     | 2 × t SCLK -1.5                  |                                  | 2 × t SCLK -1.5                     |                                     | ns   |
| t SPICLK  | Serial Clock Period                             | 4 × t SCLK      |     | 4 × t SCLK                       |                                  | 4 × t SCLK                          |                                     | ns   |
| t HDS     | Last SCK Edge to SPISS Not Asserted             | 2 × t SCLK -1.5 |     | 2 × t SCLK -1.5                  |                                  | 2 × t SCLK -1.5                     |                                     | ns   |
| t SPITDS  | Sequential Transfer Delay                       | 2 × t SCLK -1.5 |     | 2 × t SCLK -1.5                  |                                  | 2 × t SCLK -1.5                     |                                     | ns   |
| t SDSCI   | SPISS Assertion to First SCK Edge               | 2 × t SCLK -1.5 |     | 2 × t SCLK -1.5                  |                                  | 2 × t SCLK -1.5                     |                                     | ns   |
| t SSPID   | Data Input Valid to SCK Edge (Data Input Setup) | 1.6             |     | 1.6                              |                                  | 1.6                                 |                                     | ns   |
| t HSPID   | SCK Sampling Edge to Data Input Invalid         | 1.6             |     | 1.6                              |                                  | 1.6                                 |                                     | ns   |
| Switching | Characteristics                                 |                 |     |                                  |                                  |                                     |                                     |      |
| t DSOE    | SPISS Assertion to Data Out Active              | 0               | 10  | 0                                | 9                                | 0                                   | 8                                   | ns   |
| t DSDHI   | SPISS Deassertion to Data High Impedance        | 0               | 10  | 0                                | 9                                | 0                                   | 8                                   | ns   |
| t DDSPID  | SCK Edge to Data Out Valid (Data Out Delay)     |                 | 10  |                                  | 10                               |                                     | 10                                  | ns   |
| t HDSPID  | SCK Edge to Data Out Invalid (Data Out Hold)    | 0               |     | 0                                |                                  | 0                                   |                                     | ns   |

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## General-Purpose I/O Port F Pin Cycle Timing

## Table 34. General-Purpose I/O Port F Pin Cycle Timing

Figure 29. GPIO Cycle Timing

|                                          | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |      |
|------------------------------------------|------------------|------------------|------------------------|------------------------|------|
| Parameter                                | Min              | Max              | Min                    | Max                    | Unit |
| Timing Requirement                       |                  |                  |                        |                        |      |
| t WFI GPIO Input Pulse Width             | t SCLK + 1       |                  | t SCLK + 1             |                        | ns   |
| Switching Characteristic                 |                  |                  |                        |                        |      |
| t GPOD GPIO Output Delay from CLKOUT Low |                  | 6                |                        | 6                      | ns   |

<!-- image -->

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

For information on the UART port receive and transmit operations, see the ADSP-BF533 Blackfin Processor Hardware Reference .

## Timer Clock Timing

Table 35 and Figure 30 describe timer clock timing.

## Table 35. Timer Clock Timing

Figure 30. Timer Clock Timing

| Parameter                                           | Min   | Max   | Unit   |
|-----------------------------------------------------|-------|-------|--------|
| Switching Characteristic                            |       |       |        |
| t TODP Timer Output Update Delay After PPI_CLK High |       | 12    | ns     |

<!-- image -->

## Timer Cycle Timing

Table 36 and Figure 31 describe timer expired operations. The input signal is asynchronous in width capture mode and external clock mode and has an absolute maximum input frequency of fSCLK/2 MHz.

## Table 36. Timer Cycle Timing

|                                                   | V DDEXT = 1.8V   | V DDEXT = 1.8V     | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |      |
|---------------------------------------------------|------------------|--------------------|------------------------|------------------------|------|
| Parameter                                         | Min              | Max                | Min                    | Max                    | Unit |
| Timing Characteristics                            |                  |                    |                        |                        |      |
| t WL Timer Pulse Width Low 1                      | 1 × t SCLK       |                    | 1 × t SCLK             |                        | ns   |
| t WH Timer Pulse Width High 1                     | 1 × t SCLK       |                    | 1 × t SCLK             |                        | ns   |
| t TIS Timer Input Setup Time Before CLKOUT Low 2  | 8.0              |                    | 6.5                    |                        | ns   |
| t TIH Timer Input Hold Time After CLKOUT Low 2    | 1.5              |                    | 1.5                    |                        | ns   |
| Switching Characteristic s                        |                  |                    |                        |                        |      |
| t HTO Timer Pulse Width Output                    | 1 × t SCLK       | (2 32 -1) × t SCLK | 1 × t SCLK             | (2 32 -1) × t SCLK     | ns   |
| t TOD Timer Output Update Delay After CLKOUT High |                  | 7.5                |                        | 6.5                    | ns   |

Figure 31. Timer PWM\_OUT Cycle Timing

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## JTAG Test and Emulation Port Timing

## Table 37. JTAG Port Timing

|                           |                                             | V DDEXT = 1.8V   | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |
|---------------------------|---------------------------------------------|------------------|------------------|------------------------|------------------------|
| Parameter                 |                                             | Min              | Max              | Min                    | Unit                   |
| Timing Requirements       | Timing Requirements                         |                  |                  |                        |                        |
| t TCK                     | TCK Period                                  | 20               |                  | 20                     | ns                     |
| t STAP                    | TDI, TMS Setup Before TCK High              | 4                |                  | 4                      | ns                     |
| t HTAP                    | TDI, TMS Hold After TCK High                | 4                |                  | 4                      | ns                     |
| t SSYS                    | System Inputs Setup Before TCK High 1       | 4                |                  | 4                      | ns                     |
| t HSYS                    | System Inputs Hold After TCK High 1         | 5                |                  | 5                      | ns                     |
| t TRSTW                   | TRST Pulse Width 2 (Measured in TCK Cycles) | 4                |                  | 4                      | TCK                    |
| Switching Characteristics | Switching Characteristics                   |                  |                  |                        |                        |
| t DTDO                    | TDO Delay from TCK Low                      |                  | 10               |                        | ns                     |
| t DSYS                    | System Outputs Delay After TCK Low 3        | 0                | 12               | 0                      | ns                     |

Figure 32. JTAG Port Timing

<!-- image -->

## OUTPUT DRIVE CURRENTS

Figure 33 through Figure 44 show typical current-voltage characteristics for the output drivers of the processors. The curves represent the current drive capability of the output drivers as a function of output voltage.

<!-- image -->

Figure 33. Drive Current A (V DDEXT = 2.5 V)

Figure 34. Drive Current A (VDDEXT = 1.8 V)

<!-- image -->

Figure 35. Drive Current A (V DDEXT = 3.3 V)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

Figure 36. Drive Current B (V DDEXT = 2.5 V)

Figure 37. Drive Current B (VDDEXT = 1.8 V)

<!-- image -->

Figure 38. Drive Current B (VDDEXT = 3.3 V)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

Figure 39. Drive Current C (V DDEXT = 2.5 V)

<!-- image -->

Figure 40. Drive Current C (V DDEXT = 1.8 V)

<!-- image -->

Figure 41. Drive Current C (V DDEXT = 3.3 V)

<!-- image -->

Figure 42. Drive Current D (VDDEXT = 2.5 V)

Figure 43. Drive Current D (VDDEXT = 1.8 V)

<!-- image -->

Figure 44. Drive Current D (VDDEXT = 3.3 V)

<!-- image -->

## TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 45 shows the measurement point for ac measurements (except output enable/disable). The measurement point VMEAS is 0.95 V for VDDEXT (nominal) = 1.8 V or 1.5 V for VDDEXT (nominal) = 2.5 V/ 3.3 V.

Figure 45. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time Measurement

Output pins are considered to be enabled when they have made a transition from a high impedance state to the point when they start driving.

The output enable time tENA is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving as shown on the right side of Figure 46.

The time tENA\_MEASURED is the interval, from when the reference signal switches, to when the output voltage reaches VTRIP(high) or VTRIP (low).

For VDDEXT (nominal) = 1.8 V-VTRIP (high) is 1.3 V and VTRIP (low) is 0.7 V.

For VDDEXT (nominal) = 2.5 V/3.3 V-VTRIP (high) is 2.0 V and VTRIP (low) is 1.0 V.

Time tTRIP is the interval from when the output starts driving to when the output reaches the VTRIP (high) or VTRIP (low) trip voltage.

Time tENA is calculated as shown in the equation:

<!-- formula-not-decoded -->

If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving.

## Output Disable Time Measurement

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The output disable time tDIS is the difference between t DIS\_MEASURED and tDECAY as shown on the left side of Figure 45.

<!-- formula-not-decoded -->

The time for the voltage on the bus to decay by  V is dependent on the capacitive load CL and the load current I I . This decay time can be approximated by the equation:

<!-- formula-not-decoded -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

The time tDECAY is calculated with test loads CL and I L , and with  V equal to 0.1 V for VDDEXT (nominal) = 1.8 V or 0.5 V for VDDEXT (nominal) = 2.5 V/3.3 V.

The time t DIS\_MEASURED is the interval from when the reference signal switches, to when the output voltage decays  V from the measured output high or output low voltage.

Figure 46. Output Enable/Disable

<!-- image -->

## Example System Hold Time Calculation

To determine the data output hold time in a particular system, first calculate tDECAY using the equation given above. Choose  V to be the difference between the processor's output voltage and the input threshold for the device requiring the hold time. CL is the total bus capacitance (per data line), and I L is the total leakage or three-state current (per data line). The hold time is tDECAY plus the various output disable times as specified in the Timing Specifications on Page 27 (for example tDSDAT for an SDRAM write cycle as shown in SDRAM Interface Timing on Page 30).

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## Capacitive Loading

Output delays and holds are based on standard capacitive loads: 30 pF on all pins (see Figure 47). V LOAD is 0.95 V for V DDEXT (nominal) = 1.8 V or 1.5 V for VDDEXT (nominal) = 2.5 V/3.3 V. Figure 48 through Figure 59 on Page 48 show how output rise time varies with capacitance. The delay and hold specifications given should be derated by a factor derived from these figures. The graphs in these figures may not be linear outside the ranges shown.

## TESTER PIN ELECTRONICS

<!-- image -->

## NOTES:

THE WORST CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFELECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD) IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, A SYSTEM MAY INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 47. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

Figure 48. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver A at V DDEXT = 1.75 V

Figure 49. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver A at V DDEXT = 2.25 V

<!-- image -->

Figure 50. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver A at V DDEXT = 3.65 V

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

<!-- image -->

Figure 51. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver B at V DDEXT = 1.75 V

Figure 52. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver B at V DDEXT = 2.25 V

<!-- image -->

Figure 53. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver B at V DDEXT = 3.65 V

<!-- image -->

Figure 54. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver C at V DDEXT = 1.75 V

<!-- image -->

Figure 55. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver C at V DDEXT = 2.25 V

Figure 56. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver C at V DDEXT = 3.65 V

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

SCK (66MHz DRIVER), V DDEXT  = 1.7V

<!-- image -->

Figure 57. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver D at V DDEXT = 1.75 V

Figure 58. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver D at V DDEXT = 2.25 V

<!-- image -->

Figure 59. Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance for Driver D at V DDEXT = 3.65 V

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## THERMAL CHARACTERISTICS

Table 38. Thermal Characteristics for BC-160 Package

To determine the junction temperature on the application printed circuit board, use:

<!-- formula-not-decoded -->

where:

TJ = Junction temperature (°C).

TCASE = Case temperature (°C) measured by customer at top center of package.

 JT = From Table 38 through Table 40.

PD = Power dissipation (see the power dissipation discussion and the tables on 23 for the method to calculate PD).

Values of  JA are provided for package comparison and printed circuit board design considerations.  JA can be used for a first order approximation of TJ by the equation:

<!-- formula-not-decoded -->

where:

TA = ambient temperature (°C).

In Table 38 through Table 40, airflow measurements comply with JEDEC standards JESD51-2 and JESD51-6, and the junction-to-board measurement complies with JESD51-8. The junction-to-case measurement complies with MIL-STD-883 (Method 1012.1). All measurements use a 2S2P JEDEC test board.

Thermal resistance  JA in Table 38 through Table 40 is the figure of merit relating to performance of the package and board in a convective environment.  JMA represents the thermal resistance under two conditions of airflow.  JT represents the correlation between TJ and TCASE .

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     27.1  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     23.85 | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     22.7  | ° C/W  |
|  JC        | Not Applicable       |      7.26 | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.14 | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.26 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      0.35 | ° C/W  |

Table 39. Thermal Characteristics for ST-176-1 Package

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     34.9  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     33    | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     32    | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.5  | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.75 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      1    | ° C/W  |

Table 40. Thermal Characteristics for B-169 Package

| Parameter   | Condition            |   Typical | Unit   |
|-------------|----------------------|-----------|--------|
|  JA        | 0 Linear m/s Airflow |     22.8  | ° C/W  |
|  JMA       | 1 Linear m/s Airflow |     20.3  | ° C/W  |
|  JMA       | 2 Linear m/s Airflow |     19.3  | ° C/W  |
|  JC        | Not Applicable       |     10.39 | ° C/W  |
|  JT        | 0 Linear m/s Airflow |      0.59 | ° C/W  |
|  JT        | 1 Linear m/s Airflow |      0.88 | ° C/W  |
|  JT        | 2 Linear m/s Airflow |      1.37 | ° C/W  |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## 160-BALL CSP\_BGA BALL ASSIGNMENT

Table 41 lists the CSP\_BGA ball assignment by signal. Table 42 on Page 51 lists the CSP\_BGA ball assignment by ball number.

Table 41. 160-Ball CSP\_BGA Ball Assignment (Alphabetical by Signal)

| Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   |
|----------|------------|----------|------------|----------|------------|----------|------------|
| ABE0     | H13        | DATA4    | N8         | GND      | L6         | SCK      | D1         |
| ABE1     | H12        | DATA5    | P8         | GND      | L8         | SCKE     | B13        |
| ADDR1    | J14        | DATA6    | M7         | GND      | L10        | SMS      | C13        |
| ADDR2    | K14        | DATA7    | N7         | GND      | M4         | SRAS     | D13        |
| ADDR3    | L14        | DATA8    | P7         | GND      | M10        | SWE      | D12        |
| ADDR4    | J13        | DATA9    | M6         | GND      | P14        | TCK      | P2         |
| ADDR5    | K13        | DATA10   | N6         | MISO     | E2         | TDI      | M3         |
| ADDR6    | L13        | DATA11   | P6         | MOSI     | D3         | TDO      | N3         |
| ADDR7    | K12        | DATA12   | M5         | NMI      | B10        | TFS0     | H3         |
| ADDR8    | L12        | DATA13   | N5         | PF0      | D2         | TFS1     | E1         |
| ADDR9    | M12        | DATA14   | P5         | PF1      | C1         | TMR0     | L2         |
| ADDR10   | M13        | DATA15   | P4         | PF2      | C2         | TMR1     | M1         |
| ADDR11   | M14        | DR0PRI   | K1         | PF3      | C3         | TMR2     | K2         |
| ADDR12   | N14        | DR0SEC   | J2         | PF4      | B1         | TMS      | N2         |
| ADDR13   | N13        | DR1PRI   | G3         | PF5      | B2         | TRST     | N1         |
| ADDR14   | N12        | DR1SEC   | F3         | PF6      | B3         | TSCLK0   | J1         |
| ADDR15   | M11        | DT0PRI   | H1         | PF7      | B4         | TSCLK1   | F1         |
| ADDR16   | N11        | DT0SEC   | H2         | PF8      | A2         | TX       | K3         |
| ADDR17   | P13        | DT1PRI   | F2         | PF9      | A3         | V DDEXT  | A1         |
| ADDR18   | P12        | DT1SEC   | E3         | PF10     | A4         | V DDEXT  | C7         |
| ADDR19   | P11        | EMU      | M2         | PF11     | A5         | V DDEXT  | C12        |
| AMS0     | E14        | GND      | A10        | PF12     | B5         | V DDEXT  | D5         |
| AMS1     | F14        | GND      | A14        | PF13     | B6         | V DDEXT  | D9         |
| AMS2     | F13        | GND      | B11        | PF14     | A6         | V DDEXT  | F12        |
| AMS3     | G12        | GND      | C4         | PF15     | C6         | V DDEXT  | G4         |
| AOE      | G13        | GND      | C5         | PPI_CLK  | C9         | V DDEXT  | J4         |
| ARDY     | E13        | GND      | C11        | PPI0     | C8         | V DDEXT  | J12        |
| ARE      | G14        | GND      | D4         | PPI1     | B8         | V DDEXT  | L7         |
| AWE      | H14        | GND      | D7         | PPI2     | A7         | V DDEXT  | L11        |
| BG       | P10        | GND      | D8         | PPI3     | B7         | V DDEXT  | P1         |
| BGH      | N10        | GND      | D10        | RESET    | C10        | V DDINT  | D6         |
| BMODE0   | N4         | GND      | D11        | RFS0     | J3         | V DDINT  | E4         |
| BMODE1   | P3         | GND      | F4         | RFS1     | G2         | V DDINT  | E11        |
| BR       | D14        | GND      | F11        | RSCLK0   | L1         | V DDINT  | J11        |
| CLKIN    | A12        | GND      | G11        | RSCLK1   | G1         | V DDINT  | L4         |
| CLKOUT   | B14        | GND      | H4         | RTXI     | A9         | V DDINT  | L9         |
| DATA0    | M9         | GND      | H11        | RTXO     | A8         | V DDRTC  | B9         |
| DATA1    | N9         | GND      | K4         | RX       | L3         | VROUT0   | A13        |
| DATA2    | P9         | GND      | K11        | SA10     | E12        | VROUT1   | B12        |
| DATA3    | M8         | GND      | L5         | SCAS     | C14        | XTAL     | A11        |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Table 42. 160-Ball CSP\_BGA Ball Assignment (Numerical by Ball Number)

| Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   |
|------------|----------|------------|----------|------------|----------|------------|----------|
| A1         | V DDEXT  | C13        | SMS      | H1         | DT0PRI   | M3         | TDI      |
| A2         | PF8      | C14        | SCAS     | H2         | DT0SEC   | M4         | GND      |
| A3         | PF9      | D1         | SCK      | H3         | TFS0     | M5         | DATA12   |
| A4         | PF10     | D2         | PF0      | H4         | GND      | M6         | DATA9    |
| A5         | PF11     | D3         | MOSI     | H11        | GND      | M7         | DATA6    |
| A6         | PF14     | D4         | GND      | H12        | ABE1     | M8         | DATA3    |
| A7         | PPI2     | D5         | V DDEXT  | H13        | ABE0     | M9         | DATA0    |
| A8         | RTXO     | D6         | V DDINT  | H14        | AWE      | M10        | GND      |
| A9         | RTXI     | D7         | GND      | J1         | TSCLK0   | M11        | ADDR15   |
| A10        | GND      | D8         | GND      | J2         | DR0SEC   | M12        | ADDR9    |
| A11        | XTAL     | D9         | V DDEXT  | J3         | RFS0     | M13        | ADDR10   |
| A12        | CLKIN    | D10        | GND      | J4         | V DDEXT  | M14        | ADDR11   |
| A13        | VROUT0   | D11        | GND      | J11        | V DDINT  | N1         | TRST     |
| A14        | GND      | D12        | SWE      | J12        | V DDEXT  | N2         | TMS      |
| B1         | PF4      | D13        | SRAS     | J13        | ADDR4    | N3         | TDO      |
| B2         | PF5      | D14        | BR       | J14        | ADDR1    | N4         | BMODE0   |
| B3         | PF6      | E1         | TFS1     | K1         | DR0PRI   | N5         | DATA13   |
| B4         | PF7      | E2         | MISO     | K2         | TMR2     | N6         | DATA10   |
| B5         | PF12     | E3         | DT1SEC   | K3         | TX       | N7         | DATA7    |
| B6         | PF13     | E4         | V DDINT  | K4         | GND      | N8         | DATA4    |
| B7         | PPI3     | E11        | V DDINT  | K11        | GND      | N9         | DATA1    |
| B8         | PPI1     | E12        | SA10     | K12        | ADDR7    | N10        | BGH      |
| B9         | V DDRTC  | E13        | ARDY     | K13        | ADDR5    | N11        | ADDR16   |
| B10        | NMI      | E14        | AMS0     | K14        | ADDR2    | N12        | ADDR14   |
| B11        | GND      | F1         | TSCLK1   | L1         | RSCLK0   | N13        | ADDR13   |
| B12        | VROUT1   | F2         | DT1PRI   | L2         | TMR0     | N14        | ADDR12   |
| B13        | SCKE     | F3         | DR1SEC   | L3         | RX       | P1         | V DDEXT  |
| B14        | CLKOUT   | F4         | GND      | L4         | V DDINT  | P2         | TCK      |
| C1         | PF1      | F11        | GND      | L5         | GND      | P3         | BMODE1   |
| C2         | PF2      | F12        | V DDEXT  | L6         | GND      | P4         | DATA15   |
| C3         | PF3      | F13        | AMS2     | L7         | V DDEXT  | P5         | DATA14   |
| C4         | GND      | F14        | AMS1     | L8         | GND      | P6         | DATA11   |
| C5         | GND      | G1         | RSCLK1   | L9         | V DDINT  | P7         | DATA8    |
| C6         | PF15     | G2         | RFS1     | L10        | GND      | P8         | DATA5    |
| C7         | V DDEXT  | G3         | DR1PRI   | L11        | V DDEXT  | P9         | DATA2    |
| C8         | PPI0     | G4         | V DDEXT  | L12        | ADDR8    | P10        | BG       |
| C9         | PPI_CLK  | G11        | GND      | L13        | ADDR6    | P11        | ADDR19   |
| C10        | RESET    | G12        | AMS3     | L14        | ADDR3    | P12        | ADDR18   |
| C11        | GND      | G13        | AOE      | M1         | TMR1     | P13        | ADDR17   |
| C12        | V DDEXT  | G14        | ARE      | M2         | EMU      | P14        | GND      |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Figure 60 shows the top view of the CSP\_BGA ball configuration. Figure 61 shows the bottom view of the CSP\_BGA ball configuration.

Figure 60. 160-Ball CSP\_BGA Ground Configuration (Top View)

<!-- image -->

Figure 61. 160-Ball CSP\_BGA Ground Configuration (Bottom View)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## 169-BALL PBGA BALL ASSIGNMENT

Table 43 lists the PBGA ball assignment by signal. Table 44 on Page 54 lists the PBGA ball assignment by ball number.

Table 43. 169-Ball PBGA Ball Assignment (Alphabetical by Signal)

| Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   |
|----------|------------|----------|------------|----------|------------|----------|------------|----------|------------|
| ABE0     | H16        | DATA4    | U12        | GND      | K9         | RTXI     | A10        | V DDEXT  | K6         |
| ABE1     | H17        | DATA5    | U11        | GND      | K10        | RTXO     | A11        | V DDEXT  | L6         |
| ADDR1    | J16        | DATA6    | T10        | GND      | K11        | RX       | T1         | V DDEXT  | M6         |
| ADDR2    | J17        | DATA7    | U10        | GND      | L7         | SA10     | B15        | V DDEXT  | M7         |
| ADDR3    | K16        | DATA8    | T9         | GND      | L8         | SCAS     | A16        | V DDEXT  | M8         |
| ADDR4    | K17        | DATA9    | U9         | GND      | L9         | SCK      | D1         | V DDEXT  | T2         |
| ADDR5    | L16        | DATA10   | T8         | GND      | L10        | SCKE     | B14        | VROUT0   | B12        |
| ADDR6    | L17        | DATA11   | U8         | GND      | L11        | SMS      | A17        | VROUT1   | B13        |
| ADDR7    | M16        | DATA12   | U7         | GND      | M9         | SRAS     | A15        | XTAL     | A13        |
| ADDR8    | M17        | DATA13   | T7         | GND      | T16        | SWE      | B17        |          |            |
| ADDR9    | N17        | DATA14   | U6         | MISO     | E2         | TCK      | U4         |          |            |
| ADDR10   | N16        | DATA15   | T6         | MOSI     | E1         | TDI      | U3         |          |            |
| ADDR11   | P17        | DR0PRI   | M2         | NMI      | B11        | TDO      | T4         |          |            |
| ADDR12   | P16        | DR0SEC   | M1         | PF0      | D2         | TFS0     | L1         |          |            |
| ADDR13   | R17        | DR1PRI   | H1         | PF1      | C1         | TFS1     | G2         |          |            |
| ADDR14   | R16        | DR1SEC   | H2         | PF2      | B1         | TMR0     | R1         |          |            |
| ADDR15   | T17        | DT0PRI   | K2         | PF3      | C2         | TMR1     | P2         |          |            |
| ADDR16   | U15        | DT0SEC   | K1         | PF4      | A1         | TMR2     | P1         |          |            |
| ADDR17   | T15        | DT1PRI   | F1         | PF5      | A2         | TMS      | T3         |          |            |
| ADDR18   | U16        | DT1SEC   | F2         | PF6      | B3         | TRST     | U2         |          |            |
| ADDR19   | T14        | EMU      | U1         | PF7      | A3         | TSCLK0   | L2         |          |            |
| AMS0     | D17        | GND      | B16        | PF8      | B4         | TSCLK1   | G1         |          |            |
| AMS1     | E16        | GND      | F11        | PF9      | A4         | TX       | R2         |          |            |
| AMS2     | E17        | GND      | G7         | PF10     | B5         | VDD      | F12        |          |            |
| AMS3     | F16        | GND      | G8         | PF11     | A5         | VDD      | G12        |          |            |
| AOE      | F17        | GND      | G9         | PF12     | A6         | VDD      | H12        |          |            |
| ARDY     | C16        | GND      | G10        | PF13     | B6         | VDD      | J12        |          |            |
| ARE      | G16        | GND      | G11        | PF14     | A7         | VDD      | K12        |          |            |
| AWE      | G17        | GND      | H7         | PF15     | B7         | VDD      | L12        |          |            |
| BG       | T13        | GND      | H8         | PPI_CLK  | B10        | VDD      | M10        |          |            |
| BGH      | U17        | GND      | H9         | PPI0     | B9         | VDD      | M11        |          |            |
| BMODE0   | U5         | GND      | H10        | PPI1     | A9         | VDD      | M12        |          |            |
| BMODE1   | T5         | GND      | H11        | PPI2     | B8         | V DDEXT  | B2         |          |            |
| BR       | C17        | GND      | J7         | PPI3     | A8         | V DDEXT  | F6         |          |            |
| CLKIN    | A14        | GND      | J8         | RESET    | A12        | V DDEXT  | F7         |          |            |
| CLKOUT   | D16        | GND      | J9         | RFS0     | N1         | V DDEXT  | F8         |          |            |
| DATA0    | U14        | GND      | J10        | RFS1     | J1         | V DDEXT  | F9         |          |            |
| DATA1    | T12        | GND      | J11        | RSCLK0   | N2         | V DDEXT  | G6         |          |            |
| DATA2    | U13        | GND      | K7         | RSCLK1   | J2         | V DDEXT  | H6         |          |            |
| DATA3    | T11        | GND      | K8         | RTCVDD   | F10        | V DDEXT  | J6         |          |            |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Table 44. 169-Ball PBGA Ball Assignment (Numerical by Ball Number)

| Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   | Ball No.   | Signal   |
|------------|----------|------------|----------|------------|----------|------------|----------|------------|----------|
| A1         | PF4      | D16        | CLKOUT   | J2         | RSCLK1   | M12        | VDD      | U9         | DATA9    |
| A2         | PF5      | D17        | AMS0     | J6         | V DDEXT  | M16        | ADDR7    | U10        | DATA7    |
| A3         | PF7      | E1         | MOSI     | J7         | GND      | M17        | ADDR8    | U11        | DATA5    |
| A4         | PF9      | E2         | MISO     | J8         | GND      | N1         | RFS0     | U12        | DATA4    |
| A5         | PF11     | E16        | AMS1     | J9         | GND      | N2         | RSCLK0   | U13        | DATA2    |
| A6         | PF12     | E17        | AMS2     | J10        | GND      | N16        | ADDR10   | U14        | DATA0    |
| A7         | PF14     | F1         | DT1PRI   | J11        | GND      | N17        | ADDR9    | U15        | ADDR16   |
| A8         | PPI3     | F2         | DT1SEC   | J12        | VDD      | P1         | TMR2     | U16        | ADDR18   |
| A9         | PPI1     | F6         | V DDEXT  | J16        | ADDR1    | P2         | TMR1     | U17        | BGH      |
| A10        | RTXI     | F7         | V DDEXT  | J17        | ADDR2    | P16        | ADDR12   |            |          |
| A11        | RTXO     | F8         | V DDEXT  | K1         | DT0SEC   | P17        | ADDR11   |            |          |
| A12        | RESET    | F9         | V DDEXT  | K2         | DT0PRI   | R1         | TMR0     |            |          |
| A13        | XTAL     | F10        | RTCVDD   | K6         | V DDEXT  | R2         | TX       |            |          |
| A14        | CLKIN    | F11        | GND      | K7         | GND      | R16        | ADDR14   |            |          |
| A15        | SRAS     | F12        | VDD      | K8         | GND      | R17        | ADDR13   |            |          |
| A16        | SCAS     | F16        | AMS3     | K9         | GND      | T1         | RX       |            |          |
| A17        | SMS      | F17        | AOE      | K10        | GND      | T2         | V DDEXT  |            |          |
| B1         | PF2      | G1         | TSCLK1   | K11        | GND      | T3         | TMS      |            |          |
| B2         | V DDEXT  | G2         | TFS1     | K12        | VDD      | T4         | TDO      |            |          |
| B3         | PF6      | G6         | V DDEXT  | K16        | ADDR3    | T5         | BMODE1   |            |          |
| B4         | PF8      | G7         | GND      | K17        | ADDR4    | T6         | DATA15   |            |          |
| B5         | PF10     | G8         | GND      | L1         | TFS0     | T7         | DATA13   |            |          |
| B6         | PF13     | G9         | GND      | L2         | TSCLK0   | T8         | DATA10   |            |          |
| B7         | PF15     | G10        | GND      | L6         | V DDEXT  | T9         | DATA8    |            |          |
| B8         | PPI2     | G11        | GND      | L7         | GND      | T10        | DATA6    |            |          |
| B9         | PPI0     | G12        | VDD      | L8         | GND      | T11        | DATA3    |            |          |
| B10        | PPI_CLK  | G16        | ARE      | L9         | GND      | T12        | DATA1    |            |          |
| B11        | NMI      | G17        | AWE      | L10        | GND      | T13        | BG       |            |          |
| B12        | VROUT0   | H1         | DR1PRI   | L11        | GND      | T14        | ADDR19   |            |          |
| B13        | VROUT1   | H2         | DR1SEC   | L12        | VDD      | T15        | ADDR17   |            |          |
| B14        | SCKE     | H6         | V DDEXT  | L16        | ADDR5    | T16        | GND      |            |          |
| B15        | SA10     | H7         | GND      | L17        | ADDR6    | T17        | ADDR15   |            |          |
| B16        | GND      | H8         | GND      | M1         | DR0SEC   | U1         | EMU TRST |            |          |
| B17        | SWE      | H9         | GND      | M2         | DR0PRI   | U2         |          |            |          |
| C1         | PF1      | H10        | GND      | M6         | V DDEXT  | U3         | TDI      |            |          |
| C2         | PF3      | H11        | GND      | M7         | V DDEXT  | U4         | TCK      |            |          |
| C16        | ARDY     | H12        | VDD      | M8         | V DDEXT  | U5         | BMODE0   |            |          |
| C17        | BR       | H16        | ABE0     | M9         | GND      | U6         | DATA14   |            |          |
| D1         | SCK      | H17        | ABE1     | M10        | VDD      | U7         | DATA12   |            |          |
| D2         | PF0      | J1         | RFS1     | M11        | VDD      | U8         | DATA11   |            |          |

TOP VIEW

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Figure 62. 169-Ball PBGA Ground Configuration (Top View)

<!-- image -->

Figure 63. 169-Ball PBGA Ground Configuration (Bottom View)

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## 176-LEAD LQFP PINOUT

Table 45 lists the LQFP pinout by signal. Table 46 on Page 57 lists the LQFP pinout by lead number.

Table 45. 176-Lead LQFP Pin Assignment (Alphabetical by Signal)

| Signal   |   Lead No. | Signal   |   Lead No. | Signal   |   Lead No. | Signal   |   Lead No. | Signal   | Lead No.   |
|----------|------------|----------|------------|----------|------------|----------|------------|----------|------------|
| ABE0     |        151 | DATA3    |        113 | GND      |         88 | PPI_CLK  |         21 | V DDEXT  | 71         |
| ABE1     |        150 | DATA4    |        112 | GND      |         89 | PPI0     |         22 | V DDEXT  | 93         |
| ADDR1    |        149 | DATA5    |        110 | GND      |         90 | PPI1     |         23 | V DDEXT  | 107        |
| ADDR2    |        148 | DATA6    |        109 | GND      |         91 | PPI2     |         24 | V DDEXT  | 118        |
| ADDR3    |        147 | DATA7    |        108 | GND      |         92 | PPI3     |         26 | V DDEXT  | 134        |
| ADDR4    |        146 | DATA8    |        105 | GND      |         97 | RESET    |         13 | V DDEXT  | 145        |
| ADDR5    |        142 | DATA9    |        104 | GND      |        106 | RFS0     |         75 | V DDEXT  | 156        |
| ADDR6    |        141 | DATA10   |        103 | GND      |        117 | RFS1     |         64 | V DDEXT  | 171        |
| ADDR7    |        140 | DATA11   |        102 | GND      |        128 | RSCLK0   |         76 | V DDINT  | 25         |
| ADDR8    |        139 | DATA12   |        101 | GND      |        129 | RSCLK1   |         65 | V DDINT  | 52         |
| ADDR9    |        138 | DATA13   |        100 | GND      |        130 | RTXI     |         17 | V DDINT  | 66         |
| ADDR10   |        137 | DATA14   |         99 | GND      |        131 | RTXO     |         16 | V DDINT  | 80         |
| ADDR11   |        136 | DATA15   |         98 | GND      |        132 | RX       |         82 | V DDINT  | 111        |
| ADDR12   |        135 | DR0PRI   |         74 | GND      |        133 | SA10     |        164 | V DDINT  | 143        |
| ADDR13   |        127 | DR0SEC   |         73 | GND      |        144 | SCAS     |        166 | V DDINT  | 157        |
| ADDR14   |        126 | DR1PRI   |         63 | GND      |        155 | SCK      |         53 | V DDINT  | 168        |
| ADDR15   |        125 | DR1SEC   |         62 | GND      |        170 | SCKE     |        173 | V DDRTC  | 18         |
| ADDR16   |        124 | DT0PRI   |         68 | GND      |        174 | SMS      |        172 | VROUT0   | 5          |
| ADDR17   |        123 | DT0SEC   |         67 | GND      |        175 | SRAS     |        167 | VROUT1   | 4          |
| ADDR18   |        122 | DT1PRI   |         59 | GND      |        176 | SWE      |        165 | XTAL     | 11         |
| ADDR19   |        121 | DT1SEC   |         58 | MISO     |         54 | TCK      |         94 |          |            |
| AMS0     |        161 | EMU      |         83 | MOSI     |         55 | TDI      |         86 |          |            |
| AMS1     |        160 | GND      |          1 | NMI      |         14 | TDO      |         87 |          |            |
| AMS2     |        159 | GND      |          2 | PF0      |         51 | TFS0     |         69 |          |            |
| AMS3     |        158 | GND      |          3 | PF1      |         50 | TFS1     |         60 |          |            |
| AOE      |        154 | GND      |          7 | PF2      |         49 | TMR0     |         79 |          |            |
| ARDY     |        162 | GND      |          8 | PF3      |         48 | TMR1     |         78 |          |            |
| ARE      |        153 | GND      |          9 | PF4      |         47 | TMR2     |         77 |          |            |
| AWE      |        152 | GND      |         15 | PF5      |         46 | TMS      |         85 |          |            |
| BG       |        119 | GND      |         19 | PF6      |         38 | TRST     |         84 |          |            |
| BGH      |        120 | GND      |         30 | PF7      |         37 | TSCLK0   |         72 |          |            |
| BMODE0   |         96 | GND      |         39 | PF8      |         36 | TSCLK1   |         61 |          |            |
| BMODE1   |         95 | GND      |         40 | PF9      |         35 | TX       |         81 |          |            |
| BR       |        163 | GND      |         41 | PF10     |         34 | V DDEXT  |          6 |          |            |
| CLKIN    |         10 | GND      |         42 | PF11     |         33 | V DDEXT  |         12 |          |            |
| CLKOUT   |        169 | GND      |         43 | PF12     |         32 | V DDEXT  |         20 |          |            |
| DATA0    |        116 | GND      |         44 | PF13     |         29 | V DDEXT  |         31 |          |            |
| DATA1    |        115 | GND      |         56 | PF14     |         28 | V DDEXT  |         45 |          |            |
| DATA2    |        114 | GND      |         70 | PF15     |         27 | V DDEXT  |         57 |          |            |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

Table 46. 176-Lead LQFP Pin Assignment (Numerical by Lead Number)

| Lead No.   | Signal   |   Lead No. | Signal   |   Lead No. | Signal   |   Lead No. | Signal   | Lead No.   | Signal   |
|------------|----------|------------|----------|------------|----------|------------|----------|------------|----------|
| 1          | GND      |         41 | GND      |         81 | TX       |        121 | ADDR19   | 161        | AMS0     |
| 2          | GND      |         42 | GND      |         82 | RX       |        122 | ADDR18   | 162        | ARDY     |
| 3          | GND      |         43 | GND      |         83 | EMU      |        123 | ADDR17   | 163        | BR       |
| 4          | VROUT1   |         44 | GND      |         84 | TRST     |        124 | ADDR16   | 164        | SA10     |
| 5          | VROUT0   |         45 | V DDEXT  |         85 | TMS      |        125 | ADDR15   | 165        | SWE      |
| 6          | V DDEXT  |         46 | PF5      |         86 | TDI      |        126 | ADDR14   | 166        | SCAS     |
| 7          | GND      |         47 | PF4      |         87 | TDO      |        127 | ADDR13   | 167        | SRAS     |
| 8          | GND      |         48 | PF3      |         88 | GND      |        128 | GND      | 168        | V DDINT  |
| 9          | GND      |         49 | PF2      |         89 | GND      |        129 | GND      | 169        | CLKOUT   |
| 10         | CLKIN    |         50 | PF1      |         90 | GND      |        130 | GND      | 170        | GND      |
| 11         | XTAL     |         51 | PF0      |         91 | GND      |        131 | GND      | 171        | V DDEXT  |
| 12         | V DDEXT  |         52 | V DDINT  |         92 | GND      |        132 | GND      | 172        | SMS      |
| 13         | RESET    |         53 | SCK      |         93 | V DDEXT  |        133 | GND      | 173        | SCKE     |
| 14         | NMI      |         54 | MISO     |         94 | TCK      |        134 | V DDEXT  | 174        | GND      |
| 15         | GND      |         55 | MOSI     |         95 | BMODE1   |        135 | ADDR12   | 175        | GND      |
| 16         | RTXO     |         56 | GND      |         96 | BMODE0   |        136 | ADDR11   | 176        | GND      |
| 17         | RTXI     |         57 | V DDEXT  |         97 | GND      |        137 | ADDR10   |            |          |
| 18         | V DDRTC  |         58 | DT1SEC   |         98 | DATA15   |        138 | ADDR9    |            |          |
| 19         | GND      |         59 | DT1PRI   |         99 | DATA14   |        139 | ADDR8    |            |          |
| 20         | V DDEXT  |         60 | TFS1     |        100 | DATA13   |        140 | ADDR7    |            |          |
| 21         | PPI_CLK  |         61 | TSCLK1   |        101 | DATA12   |        141 | ADDR6    |            |          |
| 22         | PPI0     |         62 | DR1SEC   |        102 | DATA11   |        142 | ADDR5    |            |          |
| 23         | PPI1     |         63 | DR1PRI   |        103 | DATA10   |        143 | V DDINT  |            |          |
| 24         | PPI2     |         64 | RFS1     |        104 | DATA9    |        144 | GND      |            |          |
| 25         | V DDINT  |         65 | RSCLK1   |        105 | DATA8    |        145 | V DDEXT  |            |          |
| 26         | PPI3     |         66 | V DDINT  |        106 | GND      |        146 | ADDR4    |            |          |
| 27         | PF15     |         67 | DT0SEC   |        107 | V DDEXT  |        147 | ADDR3    |            |          |
| 28         | PF14     |         68 | DT0PRI   |        108 | DATA7    |        148 | ADDR2    |            |          |
| 29         | PF13     |         69 | TFS0     |        109 | DATA6    |        149 | ADDR1    |            |          |
| 30         | GND      |         70 | GND      |        110 | DATA5    |        150 | ABE1     |            |          |
| 31         | V DDEXT  |         71 | V DDEXT  |        111 | V DDINT  |        151 | ABE0     |            |          |
| 32         | PF12     |         72 | TSCLK0   |        112 | DATA4    |        152 | AWE      |            |          |
| 33         | PF11     |         73 | DR0SEC   |        113 | DATA3    |        153 | ARE      |            |          |
| 34         | PF10     |         74 | DR0PRI   |        114 | DATA2    |        154 | AOE      |            |          |
| 35         | PF9      |         75 | RFS0     |        115 | DATA1    |        155 | GND      |            |          |
| 36         | PF8      |         76 | RSCLK0   |        116 | DATA0    |        156 | V DDEXT  |            |          |
| 37         | PF7      |         77 | TMR2     |        117 | GND      |        157 | V DDINT  |            |          |
|            | PF6      |         78 | TMR1     |        118 | V DDEXT  |        158 | AMS3     |            |          |
| 38 39      | GND      |         79 | TMR0     |        119 | BG       |        159 | AMS2     |            |          |
| 40         | GND      |         80 | V DDINT  |        120 | BGH      |        160 | AMS1     |            |          |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## OUTLINE DIMENSIONS

Dimensions in the outline dimension figures are shown in millimeters.

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-026-BGA

Figure 64. 176-Lead Low Profile Quad Flat Package [LQFP] (ST-176-1) Dimensions shown in millimeters

0.17

12.10

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->

## SURFACE-MOUNT DESIGN

Table 47 is provided as an aid to PCB design. For industrystandard design recommendations, refer to IPC-7351, Generic Requirements for Surface-Mount Design and Land Pattern Standard .

Table 47. BGA Data for Use with Surface-Mount Design

| Package                                               | Ball Attach Type    | Solder Mask Opening   | Ball Pad Size   |
|-------------------------------------------------------|---------------------|-----------------------|-----------------|
| Chip Scale Package Ball Grid Array (CSP_BGA) BC-160-2 | Solder Mask Defined | 0.40 mmdiameter       | 0.55 mmdiameter |
| Plastic Ball Grid Array (PBGA) B-169                  | Solder Mask Defined | 0.43 mmdiameter       | 0.56 mmdiameter |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## AUTOMOTIVE PRODUCTS

The ADBF531W, ADBF532W, and ADBF533W models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the commercial models and designers should review the Specifications section of this data sheet carefully. Only the auto-

Table 48. Automotive Products

| Product Family 1,2   | Temperature Range 3   | Speed Grade (Max)   | Package Description   | Package Option   |
|----------------------|-----------------------|---------------------|-----------------------|------------------|
| ADBF531WBSTZ4xx      | -40 ° C to +85 ° C    | 400 MHz             | 176-Lead LQFP         | ST-176-1         |
| ADBF531WBBCZ4xx      | -40 ° C to +85 ° C    | 400 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF531WYBCZ4xx      | -40 ° C to +105 ° C   | 400 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF532WBSTZ4xx      | -40 ° C to +85 ° C    | 400 MHz             | 176-Lead LQFP         | ST-176-1         |
| ADBF532WBBCZ4xx      | -40 ° C to +85 ° C    | 400 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF532WYBCZ4xx      | -40 ° C to +105 ° C   | 400 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF533WBBCZ5xx      | -40 ° C to +85 ° C    | 533 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF533WBBZ5xx       | -40 ° C to +85 ° C    | 533 MHz             | 169-Ball PBGA         | B-169            |
| ADBF533WYBCZ4xx      | -40 ° C to +105 ° C   | 400 MHz             | 160-Ball CSP_BGA      | BC-160-2         |
| ADBF533WYBBZ4xx      | -40 ° C to +105 ° C   | 400 MHz             | 169-Ball PBGA         | B-169            |

motive grade products shown in Table 48 are available for use in automotive applications. Contact your local ADI account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

## ORDERING GUIDE

| Model 1            | Temperature Range 2   | Speed Grade (Max)   | Package Description                 | Package Option   |
|--------------------|-----------------------|---------------------|-------------------------------------|------------------|
| ADSP-BF531SBB400   | -40°C to +85°C        | 400 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF531SBBZ400  | -40°C to +85°C        | 400 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF531SBBC400  | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF531SBBCZ400 | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF531SBBCZ4RL | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA, 13" Tape and Reel | BC-160-2         |
| ADSP-BF531SBSTZ400 | -40°C to +85°C        | 400 MHz             | 176-Lead LQFP                       | ST-176-1         |
| ADSP-BF532SBBZ400  | -40°C to +85°C        | 400 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF532SBBC400  | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF532SBBCZ400 | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF532SBSTZ400 | -40°C to +85°C        | 400 MHz             | 176-Lead LQFP                       | ST-176-1         |
| ADSP-BF533SBBZ400  | -40°C to +85°C        | 400 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF533SBBC400  | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SBBCZ400 | -40°C to +85°C        | 400 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SBSTZ400 | -40°C to +85°C        | 400 MHz             | 176-Lead LQFP                       | ST-176-1         |
| ADSP-BF533SBB500   | -40°C to +85°C        | 500 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF533SBBZ500  | -40°C to +85°C        | 500 MHz             | 169-Ball PBGA                       | B-169            |
| ADSP-BF533SBBC500  | -40°C to +85°C        | 500 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SBBCZ500 | -40°C to +85°C        | 500 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SBBC-5V  | -40°C to +85°C        | 533 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SBBCZ-5V | -40°C to +85°C        | 533 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SKBC-6V  | 0°C to +70°C          | 600 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SKBCZ-6V | 0°C to +70°C          | 600 MHz             | 160-Ball CSP_BGA                    | BC-160-2         |
| ADSP-BF533SKSTZ-5V | 0°C to +70°C          | 533 MHz             | 176-Lead LQFP                       | ST-176-1         |

## ADSP-BF531/ADSP-BF532/ADSP-BF533

## ADSP-BF531/ADSP-BF532/ADSP-BF533

<!-- image -->